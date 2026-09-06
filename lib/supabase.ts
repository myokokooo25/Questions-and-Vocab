
import { createClient } from '@supabase/supabase-js';

const rawSupabaseUrl = import.meta.env.VITE_SUPABASE_URL || (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.VITE_SUPABASE_URL) || 'https://kdulrcovfiqbsenevowc.supabase.co';
const rawSupabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.VITE_SUPABASE_ANON_KEY) || '';

export const isSupabaseConfigured: boolean = Boolean(
  rawSupabaseKey &&
  rawSupabaseKey !== 'dummy_key_to_prevent_crash_if_not_set' &&
  !rawSupabaseKey.includes('dummy') &&
  !rawSupabaseKey.includes('placeholder') &&
  rawSupabaseKey.trim().length > 30
);

export const supabase = createClient(
  rawSupabaseUrl,
  isSupabaseConfigured ? rawSupabaseKey : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder'
);
