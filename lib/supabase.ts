
import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://kdulrcovfiqbsenevowc.supabase.co';
const DEFAULT_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWxyY292ZmlxYnNlbmV2b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTQ1NzcsImV4cCI6MjA4Njg3MDU3N30.XF7ENOM8-XrLKBYgZU0ut1S9swE5_w0CUcNG7VTOKFQ';

function getValidSupabaseUrl(): string {
  try {
    const raw = (import.meta as any).env?.VITE_SUPABASE_URL;
    if (typeof raw === 'string' && raw.trim() !== '' && raw !== 'undefined' && raw !== 'null') {
      const trimmed = raw.trim();
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return trimmed;
      }
    }
  } catch {}
  return DEFAULT_SUPABASE_URL;
}

function getValidSupabaseKey(): string {
  try {
    const raw = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
    if (typeof raw === 'string' && raw.trim() !== '' && raw !== 'undefined' && raw !== 'null') {
      const trimmed = raw.trim();
      if (trimmed.length > 30 && !trimmed.includes('placeholder')) {
        return trimmed;
      }
    }
  } catch {}
  return DEFAULT_SUPABASE_KEY;
}

const supabaseUrl = getValidSupabaseUrl();
const supabaseKey = getValidSupabaseKey();

export const isSupabaseConfigured: boolean = Boolean(
  supabaseKey &&
  supabaseKey !== 'dummy_key_to_prevent_crash_if_not_set' &&
  !supabaseKey.includes('dummy') &&
  !supabaseKey.includes('placeholder') &&
  supabaseKey.trim().length > 30
);

export const supabase = createClient(supabaseUrl, supabaseKey);

