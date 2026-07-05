const fs = require('fs');
const path = require('path');

const distContent = fs.readFileSync('dist/assets/index-CEbPRhhx.js', 'utf8');

// We want to find question objects and option objects.
// In minified JS, they look like:
// {id:"2026-2-1",questionJP:"...",questionMY:"...",options:[{id:1,textJP:"...",textMY:"..."},...]}

// Let's extract all options
const optionRegex = /textJP:"([^"]+)",textMY:"([^"]+)"/g;
const optionsMap = new Map();
let match;
while ((match = optionRegex.exec(distContent)) !== null) {
  optionsMap.set(match[2], match[1]);
}

// Let's extract all questions
const questionRegex = /questionJP:"([^"]+)",questionMY:"([^"]+)"/g;
const questionsMap = new Map();
while ((match = questionRegex.exec(distContent)) !== null) {
  questionsMap.set(match[2], match[1]);
}

console.log(`Found ${optionsMap.size} options and ${questionsMap.size} questions in dist.`);

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
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace questionJP
  content = content.replace(/(questionJP:\s*")([^"]+)(".*?\s*questionMY:\s*")([^"]+)(")/g, (m, p1, oldQJp, p3, qMy, p5) => {
    if (questionsMap.has(qMy)) {
      return p1 + questionsMap.get(qMy) + p3 + qMy + p5;
    }
    return m;
  });
  
  // Replace textJP
  content = content.replace(/(textJP:\s*")([^"]+)(",\s*textMY:\s*")([^"]+)(")/g, (m, p1, oldTJp, p3, tMy, p5) => {
    if (optionsMap.has(tMy)) {
      return p1 + optionsMap.get(tMy) + p3 + tMy + p5;
    }
    return m;
  });
  
  fs.writeFileSync(file, content);
  console.log(`Recovered ${file}`);
}
