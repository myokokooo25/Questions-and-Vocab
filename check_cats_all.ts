import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_zdo0Etwvkd70Nnv2-sePng_ZM0r-Pon';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase.from('questions').select('id, category');
  if (error) console.error(error);
  
  const groups: Record<string, number> = {};
  data?.forEach(d => {
    groups[d.category] = (groups[d.category] || 0) + 1;
  });
  console.log(groups);
}
run();
