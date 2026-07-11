const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

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

code = code.replace(regex, newKhachannelTheme);
fs.writeFileSync('index.html', code);
