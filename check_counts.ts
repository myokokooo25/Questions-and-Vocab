import { studyDataByChapter2026, studyDataByChapter } from './data/content';
let sum = 0;
for (let i = 1; i <= 5; i++) {
  console.log('Old', i, studyDataByChapter[i]?.length || 0);
  console.log('2026', i, studyDataByChapter2026[i]?.length || 0);
  sum += (studyDataByChapter[i]?.length || 0) + (studyDataByChapter2026[i]?.length || 0);
}
console.log('Total:', sum);
