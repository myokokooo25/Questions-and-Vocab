const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');

code = code.replace(
  /icons: \[[\s\S]*?\]/,
  "icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }]"
);

fs.writeFileSync('vite.config.ts', code);
