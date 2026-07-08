import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseKey) {
  console.log("No supabase key, skipping db seed");
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const allData = [];
  const files = fs.readdirSync('./data').filter(f => f.endsWith('.ts') && f !== 'content.ts' && f !== 'index.ts' && f !== 'kanji.ts');
  
  for (const file of files) {
      try {
          const mod = await import(`./data/${file}`);
          for (const key of Object.keys(mod)) {
             if (Array.isArray(mod[key])) {
                allData.push(...mod[key]);
             }
          }
      } catch (e) {
          console.error("Error importing", file, e);
      }
  }

  console.log(`Total questions: ${allData.length}`);
  
  let successCount = 0;
  for (const q of allData) {
      if (!q.id || !q.questionJP) continue;
      const payload = {
            id: q.id,
            category: q.category || 'unknown',
            question_jp: q.questionJP,
            question_my: q.questionMY,
            options: q.options,
            correct_option_id: q.correctOptionId,
            explanation: q.explanation,
            ai_explanation: q.ai_explanation
      };
      const { error } = await supabase.from('questions').upsert(payload);
      if (error) {
         console.error("Error on", q.id, error.message);
      } else {
         successCount++;
         if (successCount % 100 === 0) console.log(`Upserted ${successCount}`);
      }
  }
  console.log("Done. Upserted:", successCount);
}

seed();
