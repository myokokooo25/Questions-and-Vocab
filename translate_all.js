import fs from 'fs';
import { translate } from 'google-translate-api-x';

const chapters = [
  'data/chapter4-2026-part1.ts',
  'data/chapter4-2026-level2-part1.ts',
  'data/chapter5-2026-part1.ts',
  'data/chapter5-2026-level2-part1.ts'
];

const manualTranslations = {
  '労働安全衛生法': 'အလုပ်သမားဘေးကင်းလုံခြုံရေးနှင့်ကျန်းမာရေးဥပဒေ (Industrial Safety and Health Act)',
  '安全衛生': 'ဘေးကင်းလုံခြုံရေးနှင့်ကျန်းမာရေး (Safety and health)',
  '確保する': 'သေချာစေသည် (To ensure / secure)',
  '労働基準監督署': 'အလုပ်သမားစံနှုန်းကြီးကြပ်ရေးရုံး (Labor Standards Inspection Office)',
  '特別教育': 'အထူးပညာပေးမှု (Special education)',
  '重大災害': 'ကြီးမားသောဘေးအန္တရာယ် (Major disaster)',
  '度数率': 'ဖြစ်ပွားနှုန်း (Frequency rate)',
  '強度率': 'ပြင်းအား (Severity rate)'
};

async function processFile(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const blockRegex = /id:\s*"([^"]+)"([\s\S]*?)(?=id:\s*"2026|$)/g;
  
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    const id = match[1];
    if (!id.startsWith('2026')) continue;
    
    const block = match[2];
    const rubyRegex = /<ruby>([^<]+)<rt>([^<]+)<\/rt><\/ruby>/g;
    
    const wordsMap = new Map(); 
    let rm;
    while ((rm = rubyRegex.exec(block)) !== null) {
      wordsMap.set(rm[1], rm[2]);
    }
    
    if (wordsMap.size === 0) continue;
    
    const kanjis = Array.from(wordsMap.keys());
    console.log(`Translating ${kanjis.length} words for ${id}...`);
    
    let translatedMy = [];
    let translatedEn = [];
    
    // Process in batches of 50
    for(let i = 0; i < kanjis.length; i += 50) {
      const batch = kanjis.slice(i, i + 50);
      try {
        const resMy = await translate(batch, { to: 'my', rejectOnPartialFail: false });
        const resEn = await translate(batch, { to: 'en', rejectOnPartialFail: false });
        translatedMy = translatedMy.concat(Array.isArray(resMy) ? resMy.map(r => r.text) : [resMy.text]);
        translatedEn = translatedEn.concat(Array.isArray(resEn) ? resEn.map(r => r.text) : [resEn.text]);
      } catch (err) {
        console.error('Batch translation failed:', err.message);
        // Fallback to kanji if failure
        translatedMy = translatedMy.concat(batch);
        translatedEn = translatedEn.concat(batch);
      }
      // Small delay between batches to avoid rate limits
      await new Promise(r => setTimeout(r, 1000));
    }
    
    const outData = kanjis.map((kanji, idx) => {
      let finalMy = '';
      if (manualTranslations[kanji]) {
        finalMy = manualTranslations[kanji];
      } else {
        let enText = translatedEn[idx] || kanji;
        let myText = translatedMy[idx] || kanji;
        if (enText) {
          enText = enText.charAt(0).toUpperCase() + enText.slice(1);
        }
        finalMy = `${myText} (${enText})`;
      }
      
      return {
        jp: `${kanji} (${wordsMap.get(kanji)})`,
        my: finalMy
      };
    });
    
    const outPath = `data/vocab/questions/${id}.js`;
    // We just stringify it normally to avoid single-quote unescaped issues
    const outContent = `export default ${JSON.stringify(outData, null, 2)};\n`;
    fs.writeFileSync(outPath, outContent);
    console.log(`Wrote ${outPath}`);
  }
}

async function main() {
  for (const file of chapters) {
    console.log(`Processing ${file}...`);
    await processFile(file);
  }
}

main().catch(console.error);
