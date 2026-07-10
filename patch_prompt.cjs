const fs = require('fs');
let code = fs.readFileSync('components/InstallPrompt.tsx', 'utf8');

code = code.replace(
  'src="/icon-192x192.png"',
  'src="/icon.svg"'
);

fs.writeFileSync('components/InstallPrompt.tsx', code);
