const fs = require('fs');
const path = require('path');

const dir = './data';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Issue 1: MM characters in textJP/questionJP/reasonJP
  // We can look for `ကို`, `က`, `သည်`, `၏` and replace them back to appropriate JP particles.
  // We will do some specific replacements first, based on the output.
  // Actually, I can just replace `ကို` with `を`, `က` with `が`, `သည်` with `は`, `၏` with `の`.
  // Wait, let's see some specific examples:
  // "処置方法ကို" -> "処置方法を"
  // "改善က" -> "改善が"
  // "設計品質က" -> "設計品質が"
  // "要因ကို" -> "要因を"
  // "隅肉溶接သည်" -> "隅肉溶接は"
  // "強度က" -> "強度が"
  // "完全溶込溶接၏" -> "完全溶込溶接の"
  // "欠陥率သည်" -> "欠陥率は"
  // "資格က" -> "資格が"
  // "有資格者က" -> "有資格者が"
  // "不適合個数က" -> "不適合個数が"
  // "2 本ကို" -> "2 本を"
  // "除くနိုဇိုကု" -> "除くのぞく" -> "除く"
  // "重要じゅうじゅうယောဝ်" -> "重要じゅうよう"
  // "床ゆက" -> "床ゆか"
  
  // What about 2026-3-25? User said: ...状況...ကို 調査し...
  // Let's replace within textJP strings only.
  
  // Issue 2: HTML tag mistakes
  // 2026-3-26 — </reason> -> </ruby>
  content = content.replace(/<\/reason>/g, '</ruby>');
  
  // Chapter 1, 4, 5 — <ruby> tag inconsistencies. 2026-1-26, 2026-4-7, Chapter 5
  // I'll check these files manually or with regex.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed tags in', filePath);
  }
}

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.ts')) {
    processFile(path.join(dir, file));
  }
});
