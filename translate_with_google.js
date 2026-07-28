import fs from 'fs';
import { translate } from '@vitalets/google-translate-api';

const chapters = [
  'data/chapter4-2026-part1.ts',
  'data/chapter4-2026-level2-part1.ts',
  'data/chapter5-2026-part1.ts',
  'data/chapter5-2026-level2-part1.ts'
];

// Simple concurrency limit
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const executing = [];
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);
    if (poolLimit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}

const dictionaryCache = new Map(); // kanji -> { my, en }

async function translateWord(kanji) {
  if (dictionaryCache.has(kanji)) {
    return dictionaryCache.get(kanji);
  }
  
  try {
    const resMy = await translate(kanji, { to: 'my' });
    const resEn = await translate(kanji, { to: 'en' });
    
    // Capitalize first letter of English
    let enText = resEn.text;
    if (enText) {
      enText = enText.charAt(0).toUpperCase() + enText.slice(1);
    }
    
    const translation = { my: resMy.text, en: enText };
    dictionaryCache.set(kanji, translation);
    return translation;
  } catch (err) {
    console.error(`Error translating ${kanji}:`, err.message);
    return { my: kanji, en: kanji }; // fallback
  }
}

async function processFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const blockRegex = /"id":\s*"([^"]+)"([\s\S]*?)(?="id":\s*"2026|$)/g;
  
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    const id = match[1];
    if (!id.startsWith('2026')) continue;
    
    const block = match[2];
    const rubyRegex = /<ruby>([^<]+)<rt>([^<]+)<\/rt><\/ruby>/g;
    
    const wordsMap = new Map(); // key: Kanji, value: Furigana
    let rm;
    while ((rm = rubyRegex.exec(block)) !== null) {
      wordsMap.set(rm[1], rm[2]);
    }
    
    if (wordsMap.size === 0) continue;
    
    const kanjis = Array.from(wordsMap.keys());
    console.log(`Translating ${kanjis.length} words for ${id}...`);
    
    const results = await asyncPool(5, kanjis, async (kanji) => {
      const trans = await translateWord(kanji);
      return {
        kanji,
        furigana: wordsMap.get(kanji),
        myText: trans.my,
        enText: trans.en
      };
    });
    
    const outData = results.map(r => {
      return {
        jp: `${r.kanji} (${r.furigana})`,
        my: `${r.myText} (${r.enText})`
      };
    });
    
    const outPath = `data/vocab/questions/${id}.js`;
    const outContent = `export default ${JSON.stringify(outData, null, 2).replace(/"/g, "'").replace(/'([^']+)':/g, '$1:')};\n`;
    fs.writeFileSync(outPath, outContent);
    console.log(`Wrote ${outPath}`);
  }
}

async function main() {
  for (const file of chapters) {
    console.log(`Processing ${file}...`);
    await processFile(file);
  }
  
  const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"]\.\/questions\/([^'"]+)['"];/g;
  let indexContent = fs.readFileSync('data/vocab/index.ts', 'utf8');

  const existingIds = new Set();
  let matchIdx;
  while ((matchIdx = importRegex.exec(indexContent)) !== null) {
    existingIds.add(matchIdx[2]);
  }

  const files = fs.readdirSync('data/vocab/questions').filter(f => f.endsWith('.js'));
  const missingIds = [];
  for (const file of files) {
    const id = file.replace('.js', '');
    if (!existingIds.has(id) && id.startsWith('2026')) {
      missingIds.push(id);
    }
  }

  if (missingIds.length > 0) {
    let imports = '';
    let exports = '';
    for (const id of missingIds) {
      const importName = 'vocab_' + id.replace(/-/g, '_');
      imports += `import ${importName} from './questions/${id}';\n`;
      exports += `  '${id}': ${importName},\n`;
    }

    indexContent = indexContent.replace(/export const vocabData/, imports + '\nexport const vocabData');
    indexContent = indexContent.replace(/(export const vocabData\s*:\s*Record<string,\s*any>\s*=\s*{)/, `$1\n${exports}`);
    
    fs.writeFileSync('data/vocab/index.ts', indexContent);
    console.log('Updated index.ts with new IDs.');
  }
}

main().catch(console.error);
