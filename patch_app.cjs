const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');

if (!code.includes('InstallPrompt')) {
  code = code.replace(
    "import FlashcardApp from './vocabulary-flashcards/App';",
    "import FlashcardApp from './vocabulary-flashcards/App';\nimport InstallPrompt from './components/InstallPrompt';"
  );
  
  code = code.replace(
    "<div className=\"min-h-screen\">",
    "<div className=\"min-h-screen\">\n      <InstallPrompt />"
  );

  fs.writeFileSync('App.tsx', code);
}
