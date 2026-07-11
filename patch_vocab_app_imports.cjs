const fs = require('fs');
let code = fs.readFileSync('vocabulary-flashcards/App.tsx', 'utf8');

code = code.replace(
  "import { ArrowLeftIcon, ArrowRightIcon, HomeIcon, SunIcon, MoonIcon } from './components/Icons';",
  "import { ArrowLeftIcon, ArrowRightIcon, HomeIcon, SunIcon, MoonIcon, SparkleIcon } from './components/Icons';"
);

fs.writeFileSync('vocabulary-flashcards/App.tsx', code);
