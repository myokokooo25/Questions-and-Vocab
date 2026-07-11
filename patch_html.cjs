const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const khachannelTheme = `
      html.khachannel {
        --color-neumorphic-bg: 10 10 10;
        --color-neumorphic-text: 240 236 227;
        --color-neumorphic-shadow-dark: 26 26 26;
        --color-neumorphic-shadow-light: 42 42 42;
        --color-slate-400: 154 154 154;
        --color-slate-500: 201 162 48;
        --color-slate-600: 240 236 227;
        --color-slate-700: 217 179 64;
      }
`;

code = code.replace(
  "      html.dark {",
  khachannelTheme + "      html.dark {"
);

fs.writeFileSync('index.html', code);
