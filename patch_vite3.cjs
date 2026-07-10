const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');

code = code.replace(
  "registerType: 'autoUpdate',",
  "registerType: 'autoUpdate',\n          workbox: {\n            maximumFileSizeToCacheInBytes: 5000000\n          },"
);

fs.writeFileSync('vite.config.ts', code);
