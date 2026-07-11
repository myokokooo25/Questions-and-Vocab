const fs = require('fs');
let code = fs.readFileSync('tsconfig.json', 'utf8');

const targetRegex = /"target":\s*"[^"]*"/;
code = code.replace(targetRegex, '"target": "ES2020"');

fs.writeFileSync('tsconfig.json', code);
