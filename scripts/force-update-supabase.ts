import { createClient } from '@supabase/supabase-js';
import { studyDataByChapter, studyDataByChapter2026, studyDataByChapter2026Level2 } from '../data/content';
import { chapter2021Parts } from '../data/2021-old-question';
import { chapter2022Data } from '../data/2022-old-question';
import { chapter2023Data } from '../data/2023-old-question';
import { chapter2024Data } from '../data/2024-old-question';
import { chapter2025Data } from '../data/2025-old-question';
import { StudyCardData } from '../types';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseKey) {
  console.warn('Note: VITE_SUPABASE_ANON_KEY is not set in process.env. If running locally, set VITE_SUPABASE_ANON_KEY.');
}

const supabase = createClient(supabaseUrl, supabaseKey || 'dummy');

async function forceUpdateSupabase() {
  console.log('🚀 Starting Force Update of questions to Supabase (preserving AI explanation)...');

  const allDataToUpload: { category: string; data: StudyCardData[] }[] = [];

  // Chapters 1-5
  for (let i = 1; i <= 5; i++) {
    if (studyDataByChapter[i]) {
      allDataToUpload.push({ category: i.toString(), data: studyDataByChapter[i] });
    }
    if (studyDataByChapter2026[i]) {
      allDataToUpload.push({ category: `2026-${i}`, data: studyDataByChapter2026[i] });
    }
    if (studyDataByChapter2026Level2[i]) {
      allDataToUpload.push({ category: `2026-level2-${i}`, data: studyDataByChapter2026Level2[i] });
    }
  }

  // Past question sets
  if (chapter2021Parts[1]) allDataToUpload.push({ category: '2021-1', data: chapter2021Parts[1] });
  if (chapter2021Parts[2]) allDataToUpload.push({ category: '2021-2', data: chapter2021Parts[2] });
  if (chapter2021Parts[3]) allDataToUpload.push({ category: '2021-3', data: chapter2021Parts[3] });
  allDataToUpload.push({ category: '2022', data: chapter2022Data });
  allDataToUpload.push({ category: '2023', data: chapter2023Data });
  allDataToUpload.push({ category: '2024', data: chapter2024Data });
  allDataToUpload.push({ category: '2025', data: chapter2025Data });

  console.log('Fetching existing AI explanations from Supabase...');
  const { data: existingRows, error: fetchErr } = await supabase
    .from('questions')
    .select('id, ai_explanation');

  if (fetchErr) {
    console.warn('Could not fetch existing AI explanations:', fetchErr.message);
  }

  const existingMap = new Map<string, string | null>();
  if (existingRows) {
    existingRows.forEach(row => {
      if (row.ai_explanation) {
        existingMap.set(String(row.id), row.ai_explanation);
      }
    });
  }
  console.log(`Found ${existingMap.size} existing AI explanations to preserve.`);

  const allRecords: any[] = [];
  for (const group of allDataToUpload) {
    for (const q of group.data) {
      const idStr = String(q.id);
      const preservedAi = existingMap.get(idStr) || q.ai_explanation || null;

      allRecords.push({
        id: q.id,
        category: group.category,
        question_jp: q.questionJP,
        question_my: q.questionMY,
        options: q.options,
        correct_option_id: q.correctOptionId,
        explanation: q.explanation,
        ai_explanation: preservedAi,
      });
    }
  }

  console.log(`Prepared ${allRecords.length} total records to force update.`);

  const BATCH_SIZE = 50;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
    const batch = allRecords.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from('questions').upsert(batch, { onConflict: 'id' });

    if (error) {
      console.error(`Batch error at ${i}:`, error.message);
      for (const item of batch) {
        const { error: singleErr } = await supabase.from('questions').upsert(item, { onConflict: 'id' });
        if (singleErr) {
          failCount++;
        } else {
          successCount++;
        }
      }
    } else {
      successCount += batch.length;
    }
    console.log(`Progress: ${successCount}/${allRecords.length} (${Math.round((successCount / allRecords.length) * 100)}%)`);
  }

  console.log(`\n🎉 Force update complete! Success: ${successCount}, Failed: ${failCount}`);
}

forceUpdateSupabase().catch(err => {
  console.error('Fatal error in force update:', err);
});
