import * as fs from 'fs';
import * as path from 'path';

function checkFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const mmRegex = /[\u1000-\u109F]/;
  
  lines.forEach((line, index) => {
    // Only check lines that have textJP or questionJP or reasonJP or options (but only the textJP part of option).
    // Actually, just find the mm characters in JP parts.
    // Easiest way: parse the file or just look for mm characters before `textMY:` or `questionMY:` or `reasonMY:` on the line?
    if (line.includes('textJP:') || line.includes('questionJP:') || line.includes('reasonJP:')) {
        // extract the JP string
        const jpMatch = line.match(/(textJP|questionJP|reasonJP):\s*"(.*?)"\s*(,|})/);
        if (jpMatch) {
            const jpText = jpMatch[2];
            if (mmRegex.test(jpText)) {
                console.log(`${filePath}:${index + 1}: ${jpMatch[1]} contains MM text: ${jpText}`);
            }
        }
    }
  });
}

const dir = './data';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.ts')) {
    checkFile(path.join(dir, file));
  }
});
