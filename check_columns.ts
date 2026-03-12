import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const env = fs.readFileSync('.env', 'utf8').split('\n').reduce((acc, line) => {
  const [key, value] = line.split('=');
  if (key && value) acc[key] = value;
  return acc;
}, {} as Record<string, string>);

const supabaseUrl = env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { data, error } = await supabase.from('vocabulary_flashcards').select('*').limit(1);
  console.log('Error:', error);
  console.log('Data:', data);
}
check();
