const fs = require('fs');

let indexCode = fs.readFileSync('data/vocab/index.ts', 'utf8');

// Generate imports
let importsToAdd = [];
let mappingsToAdd = [];

const chapters = [
  { chapter: 1, max: 26 },
  { chapter: 3, max: 46 },
  { chapter: 4, max: 8 },
  { chapter: 5, max: 9 }
];

for (const c of chapters) {
  for (let i = 1; i <= c.max; i++) {
    const id = `2026-${c.chapter}-${i}`;
    const varName = `vocab2026_${c.chapter}_${i}`;
    importsToAdd.push(`import ${varName} from './questions/${id}.js';`);
    mappingsToAdd.push(`  '${id}': processVocab(${varName}),`);
  }
}

// Insert imports before export const vocabularyData
const exportIndex = indexCode.indexOf('export const vocabularyData');
indexCode = indexCode.slice(0, exportIndex) + importsToAdd.join('\n') + '\n\n' + indexCode.slice(exportIndex);

// Insert mappings right after export const vocabularyData: { ... } = {
const mapIndex = indexCode.indexOf('{', exportIndex) + 1;
indexCode = indexCode.slice(0, mapIndex) + '\n' + mappingsToAdd.join('\n') + indexCode.slice(mapIndex);

fs.writeFileSync('data/vocab/index.ts', indexCode);
