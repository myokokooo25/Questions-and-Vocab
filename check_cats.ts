import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_zdo0Etwvkd70Nnv2-sePng_ZM0r-Pon';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.from('questions').select('id, category').like('id', '2026-1-%');
  if (error) console.error(error);
  data?.forEach(d => console.log(`${d.id}: ${d.category}`));
}
run();
