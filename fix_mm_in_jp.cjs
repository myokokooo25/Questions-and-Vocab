const fs = require('fs');
const path = require('path');

const dir = './data';

const mmRegex = /[\u1000-\u109F]/g;

function replaceMM(match) {
    switch (match) {
        case 'က': return 'が';
        case 'ကို': return 'を';
        case 'သည်': return 'は';
        case '၏': return 'の';
        case 'မှ': return 'から';
        case 'မှာ': return 'で';
        case 'သို့': return 'へ';
        case 'နှင့်': return 'と';
        default: return match; // Keep it if we don't know, but we should log it
    }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Let's replace 'を' specifically where we saw Myanmar text.
  content = content.replace(/処置方法ကို/g, '処置方法を');
  content = content.replace(/改善က/g, '改善が');
  content = content.replace(/設計品質က/g, '設計品質が');
  content = content.replace(/規格値以上က/g, '規格値以上が');
  content = content.replace(/靭性က/g, '靭性が');
  content = content.replace(/要因ကို/g, '要因を');
  content = content.replace(/隅肉溶接သည်/g, '隅肉溶接は');
  content = content.replace(/強度က/g, '強度が');
  content = content.replace(/完全溶込溶接၏/g, '完全溶込溶接の');
  content = content.replace(/欠陥率သည်/g, '欠陥率は');
  content = content.replace(/資格က/g, '資格が');
  content = content.replace(/有資格者က/g, '有資格者が');
  content = content.replace(/不適合個数က/g, '不適合個数が');
  content = content.replace(/割れက/g, '割れが');
  content = content.replace(/2 本ကို/g, '2 本を');
  content = content.replace(/除くနိုဇိုကု/g, '除くのぞく');
  content = content.replace(/重要じゅうじゅうယောဝ်/g, '重要じゅうよう');
  content = content.replace(/床ゆက/g, '床ゆか');
  
  // also check chapter3-2026-part3.ts and chapter3-2026-part4.ts
  content = content.replace(/状況ကို/g, '状況を');
  content = content.replace(/状態ကို/g, '状態を');
  content = content.replace(/原因ကို/g, '原因を');
  content = content.replace(/確認ကို/g, '確認を');

  // Let's find all remaining MM text in textJP
  // We'll use a replacer function
  
  // Quick regex to find lines with textJP or questionJP that have mm chars
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
     let line = lines[i];
     if ((line.includes('textJP:') || line.includes('questionJP:') || line.includes('reasonJP:'))) {
         let match = line.match(/(textJP|questionJP|reasonJP):\s*(["`])(.*?)\2/);
         if (match) {
             let jpText = match[3];
             if (mmRegex.test(jpText)) {
                let replaced = jpText.replace(/ကို/g, 'を')
                                     .replace(/က/g, 'が')
                                     .replace(/သည်/g, 'は')
                                     .replace(/၏/g, 'の');
                if (mmRegex.test(replaced)) {
                   console.log(`[WARN] Still has MM chars in ${filePath}:${i+1}: ${replaced}`);
                } else {
                   lines[i] = line.replace(jpText, replaced);
                   console.log(`[FIXED] ${filePath}:${i+1}: ${replaced}`);
                }
             }
         }
     }
  }
  content = lines.join('\n');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.ts')) {
    processFile(path.join(dir, file));
  }
});
