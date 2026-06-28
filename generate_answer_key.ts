import fs from 'fs';
import { chapter1Data } from './data/chapter1';
import { chapter2Data } from './data/chapter2';
import { chapter3Data } from './data/chapter3';
import { chapter4Data } from './data/chapter4';
import { chapter5Data } from './data/chapter5';

const chapters = [
  { title: "Chapter 1", data: chapter1Data },
  { title: "Chapter 2", data: chapter2Data },
  { title: "Chapter 3", data: chapter3Data },
  { title: "Chapter 4", data: chapter4Data },
  { title: "Chapter 5", data: chapter5Data },
];

let output = "# Answer Key: Chapters 1 to 5\n\n";

for (const chapter of chapters) {
  output += `## ${chapter.title}\n\n`;
  for (const q of chapter.data) {
    const correctOption = q.options.find(o => o.id === q.correctOptionId);
    output += `**Q ID: ${q.id}**\n`;
    output += `* JP: ${q.questionJP.replace(/<ruby>/g, '').replace(/<rt>[^<]*<\/rt>/g, '').replace(/<\/ruby>/g, '')}\n`;
    output += `* MY: ${q.questionMY}\n`;
    output += `* Answer (${q.correctOptionId}): ${correctOption ? correctOption.textJP.replace(/<ruby>/g, '').replace(/<rt>[^<]*<\/rt>/g, '').replace(/<\/ruby>/g, '') : 'N/A'}\n\n`;
  }
}

fs.writeFileSync('Answer_Key_Chapters_1_to_5.md', output);
console.log("Generated Answer_Key_Chapters_1_to_5.md");
