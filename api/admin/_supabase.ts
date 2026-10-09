import { createClient } from '@supabase/supabase-js';

export function getSupabaseAdmin() {
  const url = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || 
              process.env.VITE_SUPABASE_ANON_KEY || 
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWxyY292ZmlxYnNlbmV2b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTQ1NzcsImV4cCI6MjA4Njg3MDU3N30.XF7ENOM8-XrLKBYgZU0ut1S9swE5_w0CUcNG7VTOKFQ';
  return createClient(url, key);
}
