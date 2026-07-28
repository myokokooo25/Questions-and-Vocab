import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const chapters = [
  'data/chapter4-2026-part1.ts',
  'data/chapter4-2026-level2-part1.ts',
  'data/chapter5-2026-part1.ts',
  'data/chapter5-2026-level2-part1.ts'
];

async function translateBatch(words) {
  const prompt = `Translate the following Japanese construction and safety-related words into Burmese (Myanmar language), and include the English meaning in parenthesis.
For example, if the word is '足場', the translation should be 'ငြမ်း (Scaffold)'.
Provide the output as a valid JSON array of strings, where each string is the translation in the exact same order as the input words.
Do not include markdown blocks or any other text, just the JSON array.
Words:
${JSON.stringify(words)}`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });
    
    let text = response.text;
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const result = JSON.parse(text);
    if (result.length !== words.length) {
      console.error(`Warning: Input words count (${words.length}) does not match output translations count (${result.length})`);
    }
    return result;
  } catch (err) {
    console.error("Translation error:", err);
    return words.map(() => 'Burmese translation missing (Error)');
  }
}

async function processFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  
  // Find question blocks using ID regex
  const blockRegex = /"id":\s*"([^"]+)"([\s\S]*?)(?="id":\s*"2026|$)/g;
  
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    const id = match[1];
    if (!id.startsWith('2026')) continue; // only process valid IDs
    
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
    
    let translations = [];
    // Split into chunks of 30 words to avoid confusing the LLM with too many items
    for (let i = 0; i < kanjis.length; i += 30) {
       const chunk = kanjis.slice(i, i + 30);
       const chunkTrans = await translateBatch(chunk);
       translations = translations.concat(chunkTrans);
    }
    
    const result = [];
    for (let i = 0; i < kanjis.length; i++) {
      const kanji = kanjis[i];
      const furigana = wordsMap.get(kanji);
      const meaning = translations[i] || 'Translation missing';
      result.push({
        jp: `${kanji} (${furigana})`,
        my: meaning
      });
    }
    
    const outPath = `data/vocab/questions/${id}.js`;
    const outContent = `export default ${JSON.stringify(result, null, 2).replace(/"/g, "'").replace(/'([^']+)':/g, '$1:')};\n`;
    fs.writeFileSync(outPath, outContent);
    console.log(`Wrote ${outPath}`);
  }
}

async function main() {
  for (const file of chapters) {
    console.log(`Processing ${file}...`);
    await processFile(file);
  }
  
  // Update index.ts
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
    if (!existingIds.has(id)) {
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
