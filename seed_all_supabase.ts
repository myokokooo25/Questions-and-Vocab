import { createClient } from '@supabase/supabase-js';
import { studyDataByChapter, studyDataByChapter2026 } from './data/content';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
// Try user provided key or fallback
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_zdo0Etwvkd70Nnv2-sePng_ZM0r-Pon';

const supabase = createClient(supabaseUrl, supabaseKey);

async function runSeed() {
  console.log("Connecting to Supabase at:", supabaseUrl);

  // Fetch existing rows to preserve ai_explanation
  const { data: existingRows, error: fetchErr } = await supabase
    .from('questions')
    .select('id, ai_explanation');

  if (fetchErr) {
    console.error("Error fetching existing rows:", fetchErr.message);
  } else {
    console.log(`Found ${existingRows?.length || 0} existing questions in Supabase.`);
  }

  const existingMap = new Map<string, string | null>(
    existingRows?.map(row => [String(row.id), row.ai_explanation]) || []
  );

  let successCount = 0;
  let failCount = 0;

  // 1. Chapter 1 to 5 standard
  for (let ch = 1; ch <= 5; ch++) {
    const list = studyDataByChapter[ch] || [];
    for (const q of list) {
      const idStr = String(q.id);
      const existingExplanation = existingMap.get(idStr);
      const finalExplanation = existingExplanation || q.ai_explanation || null;

      const payload = {
        id: q.id,
        category: `chapter${ch}`,
        question_jp: q.questionJP,
        question_my: q.questionMY,
        options: q.options,
        correct_option_id: q.correctOptionId,
        explanation: q.explanation,
        ai_explanation: finalExplanation
      };

      const { error } = await supabase.from('questions').upsert(payload);
      if (error) {
        console.error(`Failed ${q.id}:`, error.message);
        failCount++;
      } else {
        successCount++;
      }
    }
  }

  // 2. 2026 Chapters 1 to 5
  for (let ch = 1; ch <= 5; ch++) {
    const list = studyDataByChapter2026[ch] || [];
    for (const q of list) {
      const idStr = String(q.id);
      const existingExplanation = existingMap.get(idStr);
      const finalExplanation = existingExplanation || q.ai_explanation || null;

      const payload = {
        id: q.id,
        category: `2026-${ch}`,
        question_jp: q.questionJP,
        question_my: q.questionMY,
        options: q.options,
        correct_option_id: q.correctOptionId,
        explanation: q.explanation,
        ai_explanation: finalExplanation
      };

      const { error } = await supabase.from('questions').upsert(payload);
      if (error) {
        console.error(`Failed 2026 question ${q.id}:`, error.message);
        failCount++;
      } else {
        successCount++;
      }
    }
  }

  console.log(`Finished Seeding! Success: ${successCount}, Failed: ${failCount}`);
}

runSeed();
