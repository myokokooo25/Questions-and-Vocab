const fs = require('fs');

function replace(file, search, replaceStr) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(search, replaceStr);
  fs.writeFileSync(file, content, 'utf-8');
}

replace('data/2021-old-question-part1.ts', /日常<rt>にちじょう<\/rt><\/ruby><rt>的<rt>てき<\/rt><\/ruby>/g, '日常<rt>にちじょう</rt></ruby><ruby>的<rt>てき</rt></ruby>');
replace('data/2024-old-question.ts', /長さ<rt>ながさ<\/rt><\/ruby><rt>等<rt>とう<\/rt><\/ruby>/g, '長さ<rt>ながさ</rt></ruby><ruby>等<rt>とう</rt></ruby>');
replace('data/chapter2-part3.ts', /不適当<rt>ふてきとう<\/rt><\/名>な/g, '不適当<rt>ふてきとう</rt></ruby>な');
replace('data/chapter5.ts', /安全性<rt>あんぜんせい<\/rt><\/ruby><rt>等<rt>とう<\/rt><\/ruby>/g, '安全性<rt>あんぜんせい</rt></ruby><ruby>等<rt>とう</rt></ruby>');
