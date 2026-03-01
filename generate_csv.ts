import { vocabularyData } from './vocabulary-flashcards/data/vocabulary.js';
import * as fs from 'fs';

let csv = 'id,category,kanji,reading,english,burmese\n';
let count = 0;

for (const item of vocabularyData) {
  const escapeCsv = (str: string) => `"${String(str || '').replace(/"/g, '""')}"`;
  csv += `${item.id},${escapeCsv(item.category)},${escapeCsv(item.kanji)},${escapeCsv(item.reading)},${escapeCsv(item.english)},${escapeCsv(item.burmese)}\n`;
  count++;
}

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

fs.writeFileSync('public/vocabulary.csv', csv);
console.log(`Generated CSV with ${count} items.`);
