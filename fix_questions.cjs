const fs = require('fs');
const path = require('path');

// Map of old file name to new 2026 file name
const filesMap = {
  'chapter2-part2.ts': 'chapter2-2026-part2.ts',
  'chapter2-part3.ts': 'chapter2-2026-part3.ts',
  'chapter2-part4.ts': 'chapter2-2026-part4.ts'
};

const dataDir = path.join(__dirname, 'data');

for (const [oldFile, newFile] of Object.entries(filesMap)) {
  const oldPath = path.join(dataDir, oldFile);
  const newPath = path.join(dataDir, newFile);

  if (!fs.existsSync(oldPath)) {
    console.error(`Old file not found: ${oldPath}`);
    continue;
  }
  if (!fs.existsSync(newPath)) {
    console.error(`New file not found: ${newPath}`);
    continue;
  }

  console.log(`Processing: ${oldFile} -> ${newFile}`);

  const oldContent = fs.readFileSync(oldPath, 'utf8');
  let newContent = fs.readFileSync(newPath, 'utf8');

  // Extract questions from old file
  // We look for:
  // id: "2-XX",
  // questionJP: "...",
  // questionMY: "...",
  const oldCardRegex = /id:\s*"2-(\d+)"[\s\S]*?questionJP:\s*("(?:[^"\\]|\\.)*")[\s\S]*?questionMY:\s*("(?:[^"\\]|\\.)*")/g;
  
  let match;
  const oldQuestions = {};

  while ((match = oldCardRegex.exec(oldContent)) !== null) {
    const num = match[1];
    const questionJP = match[2];
    const questionMY = match[3];
    oldQuestions[num] = { questionJP, questionMY };
  }

  console.log(`Extracted questions for keys:`, Object.keys(oldQuestions));

  // Replace questions in new file
  for (const [num, q] of Object.entries(oldQuestions)) {
    const id2026 = `2026-2-${num}`;
    
    // We want to find the card starting with id: "2026-2-num"
    // and replace its questionJP and questionMY fields.
    // Let's locate the card in the newContent.
    const idRegex = new RegExp(`id:\\s*"${id2026}"\\s*,?\\s*\\n\\s*questionJP:\\s*"(?:[^"\\\\]|\\\\.)*"\\s*,?\\s*\\n\\s*questionMY:\\s*"(?:[^"\\\\]|\\\\.)*"\\s*,?`, 'g');
    
    if (idRegex.test(newContent)) {
      const replacement = `id: "${id2026}",\n    questionJP: ${q.questionJP},\n    questionMY: ${q.questionMY},`;
      newContent = newContent.replace(idRegex, replacement);
      console.log(`Updated Card ${id2026}`);
    } else {
      console.warn(`Card ID ${id2026} not found or structure didn't match`);
    }
  }

  fs.writeFileSync(newPath, newContent, 'utf8');
  console.log(`Successfully updated ${newFile}`);
}
