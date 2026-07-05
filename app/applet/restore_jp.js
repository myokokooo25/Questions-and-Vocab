import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateToJapaneseWithFurigana(myText) {
  const prompt = `You are a professional translator for the Japanese Architecture and Construction exam (JASS 6).
I will give you a Burmese translation of an exam question or option. 
Translate it BACK into the original formal Japanese exactly as it would appear in the exam.
Use appropriate Japanese construction terminology (e.g. 鉄骨, 溶接, 品質マネジメント, 鉛直荷重).
IMPORTANT: You MUST add Furigana using HTML <ruby> tags for ALL Kanji characters. Example: <ruby>鉄骨<rt>てっこつ</rt></ruby>.
DO NOT output anything else, only the translated Japanese string.
If the input starts with a number like "(1)", ensure the Japanese also starts with "(1)".

Input (Burmese):
${myText}
`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      temperature: 0.2
    }
  });
  return response.text.trim();
}

async function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find blocks of questions
  // We need to parse more carefully. It's better to find all questionMY and replace preceding questionJP.
  // We'll iterate through the file and replace line by line or use a more precise regex.
  
  // Split content by question blocks (id: "2026-...")
  const blocks = content.split(/(id:\s*"2026-[\d-]+",)/g);
  
  for (let i = 1; i < blocks.length; i += 2) {
    const idLine = blocks[i];
    let block = blocks[i+1];
    
    // Process questionJP
    const qMatch = block.match(/questionJP:\s*"([^"]*)",\s*questionMY:\s*"([^"]*)",/);
    if (qMatch) {
      const qMy = qMatch[2];
      const newQJp = await translateToJapaneseWithFurigana(qMy);
      block = block.replace(/questionJP:\s*"[^"]*",(\s*questionMY:)/, \`questionJP: "\${newQJp}",$1\`);
    }
    
    // Process options
    let optMatch;
    const optRegex = /\{\s*id:\s*\d+,\s*textJP:\s*"[^"]*",\s*textMY:\s*"([^"]*)"\s*\}/g;
    
    // We can't use string.replace with async function directly, so we collect matches first
    const optMatches = [...block.matchAll(optRegex)];
    for (const match of optMatches) {
      const optMy = match[1];
      const newOptJp = await translateToJapaneseWithFurigana(optMy);
      
      // Replace only this specific occurrence
      block = block.replace(match[0], match[0].replace(/textJP:\s*"[^"]*"/, \`textJP: "\${newOptJp}"\`));
    }
    
    blocks[i+1] = block;
  }
  
  fs.writeFileSync(filePath, blocks.join(''));
  console.log(`Updated ${filePath}`);
}

async function run() {
  const filesToFix = [
    'data/chapter2-2026-part1.ts',
    'data/chapter2-2026-part2.ts',
    'data/chapter2-2026-part3.ts',
    'data/chapter2-2026-part4.ts',
    'data/chapter3-2026-part1.ts',
    'data/chapter3-2026-part2.ts'
  ];
  
  for (const f of filesToFix) {
    try {
      await processFile(path.join(__dirname, f));
    } catch (err) {
      console.error(\`Failed on \${f}:\`, err);
    }
  }
}

run();
