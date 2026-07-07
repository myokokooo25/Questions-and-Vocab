const fs = require('fs');

let file = './data/chapter2-2026-part1.ts';
let content = fs.readFileSync(file, 'utf-8');
content = content.replace(/reasonMY:\s*`([^`]+)`/g, (match, p1) => {
    let replaced = p1.replace(/\n/g, '\\n');
    return 'reasonMY: "' + replaced + '"';
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Fixed 2026-2-6 backticks');
