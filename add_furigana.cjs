const fs = require('fs');
const path = require('path');
const Kuroshiro = require('kuroshiro');
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji');

async function run() {
  const K = Kuroshiro.default || Kuroshiro;
  const kuroshiro = new K();
  await kuroshiro.init(new KuromojiAnalyzer());

  async function convertText(text) {
    if (text.includes('<ruby>')) return text; // Skip if already has Furigana
    const result = await kuroshiro.convert(text, { mode: "furigana", to: "hiragana" });
    return result.replace(/<rp>\(<\/rp>|<rp>\)<\/rp>/g, '');
  }

  const filesToFix = [
    'data/chapter2-2026-part1.ts',
    'data/chapter2-2026-part2.ts',
    'data/chapter2-2026-part3.ts',
    'data/chapter2-2026-part4.ts',
    'data/chapter3-2026-part1.ts',
    'data/chapter3-2026-part2.ts'
  ];

  for (const file of filesToFix) {
    if (!fs.existsSync(file)) continue;
    console.log(`Processing ${file}...`);
    let content = fs.readFileSync(file, 'utf8');
    
    let offset = 0;
    let newContent = '';
    
    // We will find all questionJP:"..." and textJP:"..." and replace the contents
    const regex = /(questionJP:\s*"|textJP:\s*")([^"]+)(")/g;
    
    let match;
    while ((match = regex.exec(content)) !== null) {
      const prefix = match[1];
      const jpText = match[2];
      const suffix = match[3];
      
      const newJpText = await convertText(jpText);
      
      newContent += content.substring(offset, match.index) + prefix + newJpText + suffix;
      offset = match.index + match[0].length;
    }
    newContent += content.substring(offset);
    
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
}

run().catch(console.error);
