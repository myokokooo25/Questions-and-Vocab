import { vocabularyData as oldVocab } from './vocabulary-flashcards/data/vocabulary';
import fs from 'fs';

const categories = [...new Set(oldVocab.map(v => v.category))];

console.log("Categories found:", categories);

let out = `\n  // --- Migrated from vocabulary-flashcards/data/vocabulary.ts ---\n`;

for (const cat of categories) {
    const items = oldVocab.filter(v => v.category === cat);
    out += `  '${cat}': processVocab([\n`;
    for (const item of items) {
        out += `    { jp: \`${item.kanji}\`, my: \`${item.burmese}\`, reading: \`${item.reading}\`, english: \`${item.english}\` },\n`;
    }
    out += `  ]),\n`;
}

console.log(out.substring(0, 500));

let indexContent = fs.readFileSync('data/vocab/index.ts', 'utf8');

// replace the last "};" with the output + "\n};\n"
indexContent = indexContent.replace(/};\s*$/, out + '\n};\n');

fs.writeFileSync('data/vocab/index.ts', indexContent);

console.log("Updated data/vocab/index.ts");
