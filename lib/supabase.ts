
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = 'sb_publishable_zdo0Etwvkd70Nnv2-sePng_ZM0r-Pon';

export const supabase = createClient(supabaseUrl, supabaseKey);
