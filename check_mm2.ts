import * as fs from 'fs';
import * as path from 'path';

function checkFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const mmRegex = /[\u1000-\u109F]/;
  
  lines.forEach((line, index) => {
    const match = line.match(/(textJP|questionJP|reasonJP):\s*(["`])((?:(?!\2).)*)\2/);
    if (match) {
        const text = match[3];
        if (mmRegex.test(text)) {
            console.log(`${filePath}:${index + 1}: ${match[1]} contains MM text: ${text}`);
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
