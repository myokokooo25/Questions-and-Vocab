const fs = require('fs');
const files = ['index.html', 'vocabulary-flashcards/index.html'];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let code = fs.readFileSync(file, 'utf8');

  // Replace static box shadows with CSS variables in tailwind config
  code = code.replace(
    "'neumorphic-outset': '8px 8px 16px rgb(var(--color-neumorphic-shadow-dark)), -8px -8px 16px rgb(var(--color-neumorphic-shadow-light))',",
    "'neumorphic-outset': 'var(--shadow-outset)',"
  );
  code = code.replace(
    "'neumorphic-inset': 'inset 6px 6px 12px rgb(var(--color-neumorphic-shadow-dark)), inset -6px -6px 12px rgb(var(--color-neumorphic-shadow-light))',",
    "'neumorphic-inset': 'var(--shadow-inset)',"
  );
  code = code.replace(
    "'neumorphic-sm': '4px 4px 8px rgb(var(--color-neumorphic-shadow-dark)), -4px -4px 8px rgb(var(--color-neumorphic-shadow-light))',",
    "'neumorphic-sm': 'var(--shadow-sm)',"
  );

  // Add the CSS variables to :root
  if (!code.includes('--shadow-outset:')) {
    code = code.replace(
      "--color-slate-700: 51 65 85;",
      "--color-slate-700: 51 65 85;\n        --shadow-outset: 8px 8px 16px rgb(var(--color-neumorphic-shadow-dark)), -8px -8px 16px rgb(var(--color-neumorphic-shadow-light));\n        --shadow-inset: inset 6px 6px 12px rgb(var(--color-neumorphic-shadow-dark)), inset -6px -6px 12px rgb(var(--color-neumorphic-shadow-light));\n        --shadow-sm: 4px 4px 8px rgb(var(--color-neumorphic-shadow-dark)), -4px -4px 8px rgb(var(--color-neumorphic-shadow-light));"
    );
  }

  // Update khachannel theme definition
  const khachannelRegex = /html\.khachannel\s*{[^}]*}/;
  const newKhachannelTheme = `html.khachannel {
        --color-neumorphic-bg: 10 10 10;
        --color-neumorphic-text: 240 236 227;
        --color-neumorphic-shadow-dark: 10 10 10;
        --color-neumorphic-shadow-light: 10 10 10;
        --color-slate-400: 154 154 154;
        --color-slate-500: 217 179 64;
        --color-slate-600: 240 236 227;
        --color-slate-700: 217 179 64;
        
        --shadow-outset: 0 0 0 1px #2a2a2a;
        --shadow-inset: inset 0 0 0 1px #d9b340;
        --shadow-sm: 0 0 0 1px #2a2a2a;
      }`;
      
  code = code.replace(khachannelRegex, newKhachannelTheme);

  // We should also make cards slightly distinct from background if possible, 
  // but since we only have `bg-neumorphic-bg`, we can override it for khachannel
  if (!code.includes('html.khachannel .bg-neumorphic-bg')) {
      code = code.replace(
          newKhachannelTheme,
          newKhachannelTheme + "\n      html.khachannel .bg-neumorphic-bg { background-color: #121212; }\n      html.khachannel body { background-color: #0a0a0a; }"
      );
  }

  fs.writeFileSync(file, code);
}
