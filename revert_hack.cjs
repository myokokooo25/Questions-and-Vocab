const fs = require('fs');

let file = '/app/applet/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf-8');
content = content.replace(/throw new Error\("Force local data"\);\n\s*/g, '');
fs.writeFileSync(file, content, 'utf-8');
console.log('Reverted');
