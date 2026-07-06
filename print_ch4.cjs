const fs = require('fs');
const content = fs.readFileSync('data/chapter4.ts', 'utf8');

// Simply print out each question's id, questionJP, and correctOptionId
const regex = /\{\s*id:\s*"4-(\d+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const startIndex = match.index;
  let braceCount = 1;
  let i = startIndex + 1;
  while (braceCount > 0 && i < content.length) {
    if (content[i] === '{') braceCount++;
    else if (content[i] === '}') braceCount--;
    i++;
  }
  const block = content.substring(startIndex, i);
  console.log(`--- QUESTION 4-${match[1]} ---`);
  console.log(block);
}
