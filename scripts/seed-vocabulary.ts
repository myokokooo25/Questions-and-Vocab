import { createClient } from '@supabase/supabase-js';
import { vocabularyData } from '../data/vocab';

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
  
  // Flatten new vocabulary structure
  const flatRecords: any[] = [];
  
  Object.keys(vocabularyData).sort().forEach((category) => {
      vocabularyData[category].forEach((item) => {
          flatRecords.push({
              category: category,
              kanji: item.jp,
              reading: item.reading || '',
              english: item.english || '',
              burmese: item.my
          });
      });
  });

  // Sort deterministically to generate stable sequential IDs based on kanji + category
  flatRecords.sort((a,b) => (a.category + a.kanji).localeCompare(b.category + b.kanji));
  
  flatRecords.forEach((record, index) => {
       record.id = index + 1; // 1-based sequential ID
  });

  console.log(`Found ${flatRecords.length} vocabulary words to insert.`);
  
  // Insert in batches of 100
  const batchSize = 100;
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < flatRecords.length; i += batchSize) {
    const batch = flatRecords.slice(i, i + batchSize);
    
    const { data, error } = await supabase
      .from('vocabulary_flashcards')
      .upsert(batch, { onConflict: 'id' });
      
    if (error) {
      console.error(`Error inserting batch ${Math.floor(i / batchSize) + 1}:`, error.message);
      errorCount += batch.length;
    } else {
      console.log(`Successfully inserted batch ${Math.floor(i / batchSize) + 1}`);
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
