const fs = require('fs');
const path = require('path');

const dir = './data';

function checkFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let lines = content.split('\n');
  
  lines.forEach((line, i) => {
    // find all <ruby> tags
    let rubyMatches = line.match(/<ruby>.*?<\/ruby>/g) || [];
    let startTags = line.match(/<ruby>/g) || [];
    let endTags = line.match(/<\/ruby>/g) || [];
    
    if (startTags.length !== endTags.length) {
      console.log(`[MISMATCH] ${filePath}:${i+1}: <ruby> count: ${startTags.length}, </ruby> count: ${endTags.length}`);
    }
    
    // Also check for malformed like </rt></..
    let rtEndMatch = line.match(/<\/rt><\/(?!ruby>)[a-zA-Z]+>/g);
    if (rtEndMatch) {
       console.log(`[MALFORMED] ${filePath}:${i+1}: ${rtEndMatch.join(', ')}`);
    }
  });
}

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.ts')) {
    checkFile(path.join(dir, file));
  }
});
