const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'data', 'vocab', 'index.ts');
let content = fs.readFileSync(indexFile, 'utf-8');

// Generate imports
let newImports = '';
let newExports = '';

for (let i = 1; i <= 57; i++) {
  const varName = `vocab2026_2_${i}`;
  newImports += `import ${varName} from './questions/2026-2-${i}.js';\n`;
  newExports += `  '2026-2-${i}': processVocab(${varName}),\n`;
}

// Insert imports at the end of the import block (line 163)
const lines = content.split('\n');
const exportLineIdx = lines.findIndex(l => l.includes('export const vocabularyData'));

lines.splice(exportLineIdx, 0, newImports);

// Find end of vocabularyData object (or just insert right after export const vocabularyData...)
const newContent = lines.join('\n').replace(
  'export const vocabularyData: { [key: string]: VocabItem[] } = {',
  'export const vocabularyData: { [key: string]: VocabItem[] } = {\n' + newExports
);

fs.writeFileSync(indexFile, newContent);
console.log('Updated index.ts');
