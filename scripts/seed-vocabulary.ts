import { createClient } from '@supabase/supabase-js';
import { vocabularyData } from '../vocabulary-flashcards/data/vocabulary';

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || ''; // Needs service role key for inserting if RLS is enabled, but anon key works if RLS is disabled or allows inserts

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in your environment.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedVocabulary() {
  console.log('Starting vocabulary seeding...');
  
  // 1. Create table if it doesn't exist (Note: Supabase JS client doesn't support DDL directly, 
  // so we assume the table exists or we provide SQL for it).
  // We will just try to insert. If it fails, we'll tell the user to create the table.
  
  console.log(`Found ${vocabularyData.length} vocabulary words to insert.`);
  
  // Insert in batches of 100
  const batchSize = 100;
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < vocabularyData.length; i += batchSize) {
    const batch = vocabularyData.slice(i, i + batchSize);
    
    // Map to match database columns (lowercase)
    const records = batch.map(word => ({
      id: word.id,
      category: word.category,
      kanji: word.kanji,
      reading: word.reading,
      english: word.english,
      burmese: word.burmese
    }));
    
    const { data, error } = await supabase
      .from('vocabulary_flashcards')
      .upsert(records, { onConflict: 'id' });
      
    if (error) {
      console.error(`Error inserting batch ${i / batchSize + 1}:`, error.message);
      errorCount += batch.length;
    } else {
      console.log(`Successfully inserted batch ${i / batchSize + 1}`);
      successCount += batch.length;
    }
  }
  
  console.log('Seeding complete!');
  console.log(`Successfully inserted: ${successCount}`);
  console.log(`Failed to insert: ${errorCount}`);
  
  if (errorCount > 0) {
    console.log('\nIf you got an error about the table not existing, please run this SQL in your Supabase SQL Editor:');
    console.log(`
CREATE TABLE IF NOT EXISTS vocabulary_flashcards (
  id BIGINT PRIMARY KEY,
  category TEXT NOT NULL,
  kanji TEXT NOT NULL,
  reading TEXT NOT NULL,
  english TEXT NOT NULL,
  burmese TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE vocabulary_flashcards ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON vocabulary_flashcards
  FOR SELECT USING (true);

-- Create policy to allow public insert/update (for seeding purposes)
CREATE POLICY "Allow public insert" ON vocabulary_flashcards
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON vocabulary_flashcards
  FOR UPDATE USING (true);
    `);
  }
}

seedVocabulary();
