
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWxyY292ZmlxYnNlbmV2b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTQ1NzcsImV4cCI6MjA4Njg3MDU3N30.XF7ENOM8-XrLKBYgZU0ut1S9swE5_w0CUcNG7VTOKFQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
