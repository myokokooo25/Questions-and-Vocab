const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'data', 'vocab', 'questions');
const files = fs.readdirSync(questionsDir).filter(f => f.endsWith('.js'));

let imports = `import { VocabItem } from '../../types';\n\n`;
imports += `const processVocab = (vocab: any[], categoryId: string): VocabItem[] => {
    return vocab.map((item, index) => ({
        id: parseInt(categoryId.replace(/-/g, '')) * 1000 + index,
        jp: item.jp,
        my: item.my,
        reading: item.reading || '',
        english: item.english || ''
    }));
};\n\n`;

let mappings = `export const vocabularyData: { [key: string]: VocabItem[] } = {\n`;

files.forEach(file => {
    const id = file.replace('.js', '');
    const varName = 'vocab' + id.replace(/-/g, '_');
    imports += `import ${varName} from './questions/${file}';\n`;
    mappings += `  '${id}': processVocab(${varName}, '${id}'),\n`;
});

mappings += `};\n`;

fs.writeFileSync(path.join(__dirname, 'data', 'vocab', 'index.ts'), imports + '\n' + mappings);
