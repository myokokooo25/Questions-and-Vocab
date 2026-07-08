const fs = require('fs');
let content = fs.readFileSync('./data/chapter1-2026-part2.ts', 'utf-8');
content = content.replace(/\}  \} \},/g, '},');
fs.writeFileSync('./data/chapter1-2026-part2.ts', content, 'utf-8');
