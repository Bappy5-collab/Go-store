import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    // eslint-disable-next-line no-console
    console.error(
        'Supabase env missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file, then restart `npm run dev`.'
    );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
