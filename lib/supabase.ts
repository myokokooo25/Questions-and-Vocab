
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.VITE_SUPABASE_URL) || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.VITE_SUPABASE_ANON_KEY) || 'dummy_key_to_prevent_crash_if_not_set';

export const supabase = createClient(supabaseUrl, supabaseKey);
