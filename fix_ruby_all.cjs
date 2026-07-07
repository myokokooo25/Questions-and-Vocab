const fs = require('fs');
const path = require('path');

const dir = './data';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Replace </rt></object> with </rt></ruby>
  content = content.replace(/<\/rt><\/object>/g, '</rt></ruby>');
  
  // Replace <ruby>したがって</rt> with したがって
  content = content.replace(/<ruby>したがって<\/rt>/g, 'したがって');
  
  // What about chapter4-2026-part1.ts:117 ?
  content = content.replace(/<ruby>保護<rt>ほご<\/rt><\/めがね/g, '<ruby>保護<rt>ほご</rt></ruby>めがね');
  content = content.replace(/<ruby>保護<rt>ほご<\/rt>めがね/g, '<ruby>保護<rt>ほご</rt></ruby>めがね');
  
  // We can also run a quick replacement for </rt> followed by something that is not </ruby>
  // Let's do some specific ones manually based on what find_ruby_errors.cjs outputs.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.ts')) {
    processFile(path.join(dir, file));
  }
});
