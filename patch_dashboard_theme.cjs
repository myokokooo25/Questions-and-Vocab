const fs = require('fs');
let code = fs.readFileSync('components/Dashboard.tsx', 'utf8');

code = code.replace(
  "{theme === 'light' ? <MoonIcon className=\"w-5 h-5\" /> : <SunIcon className=\"w-5 h-5\" />}",
  "{theme === 'light' ? <MoonIcon className=\"w-5 h-5\" /> : theme === 'dark' ? <SparkleIcon className=\"w-5 h-5 text-amber-500\" /> : <SunIcon className=\"w-5 h-5\" />}"
);

fs.writeFileSync('components/Dashboard.tsx', code);
