const fs = require('fs');
let code = fs.readFileSync('vocabulary-flashcards/index.html', 'utf8');

const regex = /html\.khachannel\s*{[^}]*}/;
const newKhachannelTheme = `html.khachannel {
        --color-neumorphic-bg: 15 15 15;
        --color-neumorphic-text: 240 236 227;
        --color-neumorphic-shadow-dark: 5 5 5;
        --color-neumorphic-shadow-light: 30 30 30;
        --color-slate-400: 154 154 154;
        --color-slate-500: 201 162 48;
        --color-slate-600: 240 236 227;
        --color-slate-700: 217 179 64;
      }`;

if (code.match(/html\.dark\s*{/)) {
  if (code.match(regex)) {
     code = code.replace(regex, newKhachannelTheme);
  } else {
     code = code.replace("html.dark {", newKhachannelTheme + "\n      html.dark {");
  }
}
fs.writeFileSync('vocabulary-flashcards/index.html', code);
