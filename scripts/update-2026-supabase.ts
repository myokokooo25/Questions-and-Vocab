import { createClient } from '@supabase/supabase-js';
import { studyDataByChapter2026, studyDataByChapter2026Level2 } from '../data/content';
import { StudyCardData } from '../types';

const DEFAULT_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWxyY292ZmlxYnNlbmV2b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTQ1NzcsImV4cCI6MjA4Njg3MDU3N30.XF7ENOM8-XrLKBYgZU0ut1S9swE5_w0CUcNG7VTOKFQ';
const cliKey = process.argv[2];
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co';
const supabaseKey = cliKey || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || DEFAULT_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function update2026QuestionsToSupabase(customClient = supabase) {
  console.log('🚀 Starting Update of 2026 Questions to Supabase (preserving AI explanations)...');

  const all2026Data: { category: string; data: StudyCardData[] }[] = [];

  // 1. 2026 Level 1 (Chapters 1-5)
  for (let i = 1; i <= 5; i++) {
    if (studyDataByChapter2026[i] && studyDataByChapter2026[i].length > 0) {
      all2026Data.push({ category: `2026-${i}`, data: studyDataByChapter2026[i] });
    }
  }

  // 2. 2026 Level 2 (Chapters 1-5)
  for (let i = 1; i <= 5; i++) {
    if (studyDataByChapter2026Level2[i] && studyDataByChapter2026Level2[i].length > 0) {
      all2026Data.push({ category: `2026-level2-${i}`, data: studyDataByChapter2026Level2[i] });
    }
  }

  const allQuestionIds: string[] = [];
  all2026Data.forEach(group => {
    group.data.forEach(q => allQuestionIds.push(String(q.id)));
  });

  console.log(`📋 Total 2026 questions collected: ${allQuestionIds.length}`);

  // Fetch existing AI explanations from Supabase for these questions
  console.log('🔍 Fetching existing AI explanations from Supabase to guarantee preservation...');
  
  // Fetch existing in batches of 200 IDs to avoid query limit issues
  const existingMap = new Map<string, string | null>();
  const CHUNK_SIZE = 100;

  for (let i = 0; i < allQuestionIds.length; i += CHUNK_SIZE) {
    const chunkIds = allQuestionIds.slice(i, i + CHUNK_SIZE);
    const { data: existingRows, error: fetchErr } = await customClient
      .from('questions')
      .select('id, ai_explanation')
      .in('id', chunkIds);

    if (fetchErr) {
      console.error(`❌ CRITICAL ERROR fetching existing rows for batch ${i}:`, fetchErr.message);
      console.error('Aborting update to prevent loss of existing AI explanations.');
      throw new Error(`Failed to verify existing AI explanations: ${fetchErr.message}`);
    }

    if (existingRows) {
      existingRows.forEach(row => {
        if (row.ai_explanation && typeof row.ai_explanation === 'string' && row.ai_explanation.trim() !== '') {
          existingMap.set(String(row.id), row.ai_explanation);
        }
      });
    }
  }

  console.log(`🛡️ Found ${existingMap.size} existing AI explanations in Supabase. These will be strictly preserved.`);

  const allRecords: any[] = [];
  for (const group of all2026Data) {
    for (const q of group.data) {
      const idStr = String(q.id);
      // Preserved priority: Supabase existing DB value > local card value > null
      const preservedAi = existingMap.get(idStr) || q.ai_explanation || null;

      allRecords.push({
        id: idStr,
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

  console.log(`📦 Prepared ${allRecords.length} records to upsert.`);

  const BATCH_SIZE = 50;
  let successCount = 0;
  let failCount = 0;
  const errors: string[] = [];

  for (let i = 0; i < allRecords.length; i += BATCH_SIZE) {
    const batch = allRecords.slice(i, i + BATCH_SIZE);
    const { error } = await customClient.from('questions').upsert(batch, { onConflict: 'id' });

    if (error) {
      console.error(`⚠️ Batch error at range ${i}-${i + batch.length}:`, error.message);
      // Try individual upsert to rescue unaffected rows
      for (const item of batch) {
        const { error: singleErr } = await customClient.from('questions').upsert(item, { onConflict: 'id' });
        if (singleErr) {
          failCount++;
          errors.push(`ID ${item.id}: ${singleErr.message}`);
        } else {
          successCount++;
        }
      }
    } else {
      successCount += batch.length;
    }

    console.log(`📊 Progress: ${successCount}/${allRecords.length} (${Math.round((successCount / allRecords.length) * 100)}%)`);
  }

  console.log(`\n🎉 2026 Questions Update finished!`);
  console.log(`✅ Succeeded: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  if (errors.length > 0) {
    console.log(`⚠️ Errors encountered:\n${errors.slice(0, 5).join('\n')}`);
  }

  return { successCount, failCount, total: allRecords.length, preservedAiCount: existingMap.size, errors };
}

// Auto-run if executed directly via CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  update2026QuestionsToSupabase()
    .then(() => {
      console.log('Done.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}
