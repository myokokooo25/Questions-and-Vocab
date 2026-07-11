const fs = require('fs');
let code = fs.readFileSync('vocabulary-flashcards/App.tsx', 'utf8');

code = code.replace(
  "{theme === 'light' ? <MoonIcon className=\"w-6 h-6\" /> : <SunIcon className=\"w-6 h-6\" />}",
  "{theme === 'light' ? <MoonIcon className=\"w-6 h-6\" /> : theme === 'dark' ? <SparkleIcon className=\"w-6 h-6 text-amber-500\" /> : <SunIcon className=\"w-6 h-6\" />}"
);

// SparkleIcon might not be imported. Let's check imports.
if (!code.includes('SparkleIcon')) {
   code = code.replace(
     "import { ListBulletIcon, RefreshIcon, PlayIcon, SearchIcon, MoonIcon, SunIcon, ChevronRightIcon, DocumentTextIcon, FolderIcon, LoadingSpinnerIcon, ArrowPathIcon }",
     "import { ListBulletIcon, RefreshIcon, PlayIcon, SearchIcon, MoonIcon, SunIcon, ChevronRightIcon, DocumentTextIcon, FolderIcon, LoadingSpinnerIcon, ArrowPathIcon, SparkleIcon }"
   );
}

fs.writeFileSync('vocabulary-flashcards/App.tsx', code);
