const fs = require('fs');

function replaceInFile(filePath, searchRegex, replacement) {
   let content = fs.readFileSync(filePath, 'utf-8');
   content = content.replace(searchRegex, replacement);
   fs.writeFileSync(filePath, content, 'utf-8');
}

// Fix warnings in chapter 5
replaceInFile('./data/chapter5-2026-part1.ts', /除く<rt>[^<]+<\/rt>/g, '除く<rt>のぞく</rt>');
replaceInFile('./data/chapter5.ts', /重要<rt>こうぞうじょうじゅう[^<]+<\/rt>/g, '重要<rt>じゅうよう</rt>');
replaceInFile('./data/chapter5.ts', /床<rt>ゆ[^<]+<\/rt>/g, '床<rt>ゆか</rt>');

console.log("Done fixing warnings.");
