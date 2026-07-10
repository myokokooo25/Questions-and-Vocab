const fs = require('fs');

let cardCode = fs.readFileSync('./components/Card.tsx', 'utf8');

// Remove hint states
cardCode = cardCode.replace(/const \[hint, setHint\].*?\n/, '');
cardCode = cardCode.replace(/const \[isHintLoading, setIsHintLoading\].*?\n/, '');
cardCode = cardCode.replace(/const \[hintError, setHintError\].*?\n/, '');

// Remove handleGetHint function
cardCode = cardCode.replace(/const handleGetHint = async \(\) => \{[\s\S]*?catch[\s\S]*?finally[\s\S]*?\}\s*\};\n/, '');

// Fallback regex if handleGetHint is not matched completely
const handleHintRegex = /const handleGetHint[\s\S]*?catch[\s\S]*?\}\s*\};\n/;
cardCode = cardCode.replace(handleHintRegex, '');

// Remove hint button
cardCode = cardCode.replace(/<button\s+onClick=\{handleGetHint\}[\s\S]*?<\/button>\s*/, '');

// Remove hint display
cardCode = cardCode.replace(/\{\s*\(\s*hint\s*\|\|\s*hintError\s*\)[\s\S]*?\}\s*\)/, '');

fs.writeFileSync('./components/Card.tsx', cardCode);
