import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseKey) {
  console.log("No supabase key, skipping db seed");
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseKey);

import { studyDataByChapter, studyDataByChapter2026, chapter2021Data, chapter2022Data, chapter2023Data, chapter2024Data, chapter2025Data } from './data/content';

async function seed() {
  const allData = [
     ...Object.values(studyDataByChapter).flat(),
     ...Object.values(studyDataByChapter2026).flat(),
     ...chapter2021Data,
     ...chapter2022Data,
     ...chapter2023Data,
     ...chapter2024Data,
     ...chapter2025Data
  ];

  console.log(`Total questions: ${allData.length}`);
  
  let successCount = 0;
  for (const q of allData) {
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
