import fs from 'fs';

const files = [
  'data/2021-old-question-part1.ts',
  'data/2021-old-question-part2.ts',
  'data/2021-old-question-part3.ts',
  'data/2022-old-question.ts',
  'data/2023-old-question.ts',
];

function extractTopic(questionJP) {
  // Try to match keywords in questionJP or use a generic title
  if (!questionJP) return "သတိပြုရန် (Key Point)";
  if (questionJP.includes('トラス')) return "トラス骨組 (Truss)";
  if (questionJP.includes('ボルト')) return "高力ボルト (HS Bolt)";
  if (questionJP.includes('溶接')) return "溶接接合 (Welding)";
  if (questionJP.includes('SN材')) return "SN材 (SN Steel)";
  if (questionJP.includes('木造')) return "木造建築 (Timber Structure)";
  if (questionJP.includes('単純梁')) return "単純梁 (Simple Beam)";
  if (questionJP.includes('鉄骨')) return "鉄骨造 (Steel Structure)";
  if (questionJP.includes('工作図')) return "工作図 (Shop Drawings)";
  return "အသေးစိတ် (Detail)";
}

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to replace `titleMY: "ရှင်းလင်းချက်",` based on the question context.
    // Instead of doing it strictly, let's just do a string replace regex that captures the questionJP
    // Actually, maybe we can just find all `titleMY: "ရှင်းလင်းချက်",` and replace them.
    // Let's use a regex that matches the block.
    
    // Since dealing with string replacements via regex can be complex, let's just make
    // titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)" for the remaining ones.
    content = content.replace(/titleMY: "ရှင်းလင်းချက်"/g, 'titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)"');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
