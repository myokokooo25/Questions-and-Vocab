const fs = require('fs');
const path = require('path');

function extractQuestions(fileContent) {
  const qRegex = /id:\s*"([^"]+)",[\s\S]*?questionJP:\s*"([^"]+)",/g;
  const optRegex = /\{\s*id:\s*(\d+),\s*textJP:\s*"([^"]+)",/g;
  
  const questions = {};
  
  let match;
  while ((match = qRegex.exec(fileContent)) !== null) {
    const id = match[1];
    const questionJP = match[2];
    questions[id] = { questionJP, options: {} };
  }
  
  // Now split by questions to get options
  const parts = fileContent.split(/id:\s*"[\d-]+",/);
  // Let's get the original IDs to map options
  const idMatch = Array.from(fileContent.matchAll(/id:\s*"([^"]+)",/g));
  
  for (let i = 0; i < idMatch.length; i++) {
    const id = idMatch[i][1];
    const block = parts[i+1]; // skip header
    if (!block || !questions[id]) continue;
    
    let optMatch;
    while ((optMatch = optRegex.exec(block)) !== null) {
      questions[id].options[optMatch[1]] = optMatch[2];
    }
  }
  return questions;
}

function processFile(oldFile, newFile) {
  if (!fs.existsSync(oldFile) || !fs.existsSync(newFile)) {
    console.log(`Skipping ${newFile}, missing files`);
    return;
  }
  
  const oldContent = fs.readFileSync(oldFile, 'utf8');
  let newContent = fs.readFileSync(newFile, 'utf8');
  
  const oldData = extractQuestions(oldContent);
  
  // Replace questionJP
  newContent = newContent.replace(/(id:\s*"2026-([\d-]+)",[\s\S]*?questionJP:\s*")([^"]+)(",)/g, (match, p1, idSuffix, oldQ, p4) => {
    if (oldData[idSuffix] && oldData[idSuffix].questionJP) {
      return p1 + oldData[idSuffix].questionJP + p4;
    }
    return match;
  });
  
  // Replace textJP in options
  const blockRegex = /(id:\s*"2026-([\d-]+)",[\s\S]*?correctOptionId:\s*\d+,)/g;
  
  newContent = newContent.replace(blockRegex, (block, p1, idSuffix) => {
    if (!oldData[idSuffix]) return block;
    
    return block.replace(/(\{\s*id:\s*(\d+),\s*textJP:\s*")([^"]+)(",)/g, (optMatch, pOpt1, optId, oldOpt, pOpt4) => {
      if (oldData[idSuffix].options[optId]) {
        return pOpt1 + oldData[idSuffix].options[optId] + pOpt4;
      }
      return optMatch;
    });
  });
  
  fs.writeFileSync(newFile, newContent);
  console.log(`Updated ${newFile}`);
}

const files = [
  ['data/chapter2-part1.ts', 'data/chapter2-2026-part1.ts'],
  ['data/chapter2-part2.ts', 'data/chapter2-2026-part2.ts'],
  ['data/chapter2-part3.ts', 'data/chapter2-2026-part3.ts'],
  ['data/chapter2-part4.ts', 'data/chapter2-2026-part4.ts'],
  ['data/chapter3-part1.ts', 'data/chapter3-2026-part1.ts'],
  ['data/chapter3-part2.ts', 'data/chapter3-2026-part2.ts']
];

for (const [oldF, newF] of files) {
  processFile(path.join(__dirname, oldF), path.join(__dirname, newF));
}
