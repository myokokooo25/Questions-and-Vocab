const fs = require('fs');
let code = fs.readFileSync('contexts/ThemeContext.tsx', 'utf8');

code = code.replace(
  "type Theme = 'light' | 'dark';",
  "type Theme = 'light' | 'dark' | 'khachannel';"
);

code = code.replace(
  "if (storedTheme === 'dark' || storedTheme === 'light') {",
  "if (storedTheme === 'dark' || storedTheme === 'light' || storedTheme === 'khachannel') {"
);

code = code.replace(
  "root.classList.remove('light', 'dark');",
  "root.classList.remove('light', 'dark', 'khachannel');"
);

// Toggle logic: we have 3 themes now, how to toggle?
// toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : prev === 'dark' ? 'khachannel' : 'light')
code = code.replace(
  "setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));",
  "setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : prevTheme === 'dark' ? 'khachannel' : 'light'));"
);

fs.writeFileSync('contexts/ThemeContext.tsx', code);
