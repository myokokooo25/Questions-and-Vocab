const fs = require('fs');
const path = require('path');

const dict = {
  "溶接": { jp: "溶接 (ようせつ)", my: "ဂဟေဆော်ခြင်း", type: "Noun" },
  "孔": { jp: "孔 (あな)", my: "အပေါက်", type: "Noun" },
  "部材": { jp: "部材 (ぶざい)", my: "အစိတ်အပိုင်း", type: "Noun" },
  "製作": { jp: "製作 (せいさく)", my: "ထုတ်လုပ်ခြင်း", type: "Noun" },
  "溶融": { jp: "溶融 (ようゆう)", my: "အရည်ပျော်ခြင်း", type: "Noun" },
  "母材": { jp: "母材 (ぼざい)", my: "မူလသတ္တု", type: "Noun" },
  "接合": { jp: "接合 (せつごう)", my: "ဆက်စပ်ခြင်း", type: "Noun" },
  "切断": { jp: "切断 (せつだん)", my: "ဖြတ်တောက်ခြင်း", type: "Noun" },
  "金属": { jp: "金属 (きんぞく)", my: "သတ္တု", type: "Noun" },
  "加熱": { jp: "加熱 (かねつ)", my: "အပူပေးခြင်း", type: "Noun" },
  "変形": { jp: "変形 (へんけい)", my: "ပုံပျက်ခြင်း", type: "Noun" },
  "加工": { jp: "加工 (かこう)", my: "ပြုပြင်ဖန်တီးခြင်း", type: "Noun" },
  "作業": { jp: "作業 (さぎょう)", my: "လုပ်ငန်း", type: "Noun" },
  "鉄骨": { jp: "鉄骨 (てっこつ)", my: "သံမဏိကိုယ်ထည်", type: "Noun" },
  "組立": { jp: "組立 (くみたて)", my: "တပ်ဆင်ခြင်း", type: "Noun" },
  "摩擦": { jp: "摩擦 (まさつ)", my: "ပွတ်တိုက်မှု", type: "Noun" },
  "品質": { jp: "品質 (ひんしつ)", my: "အရည်အသွေး", type: "Noun" },
  "計画": { jp: "計画 (けいかく)", my: "စီမံကိန်း", type: "Noun" },
  "工程": { jp: "工程 (こうてい)", my: "လုပ်ငန်းစဉ်", type: "Noun" },
  "管理": { jp: "管理 (かんり)", my: "စီမံခန့်ခွဲမှု", type: "Noun" },
  "検査": { jp: "検査 (けんさ)", my: "စစ်ဆေးခြင်း", type: "Noun" },
  "鋼材": { jp: "鋼材 (こうざい)", my: "သံမဏိပစ္စည်း", type: "Noun" },
  "基準": { jp: "基準 (きじゅん)", my: "စံနှုန်း", type: "Noun" },
  "寸法": { jp: "寸法 (すんぽう)", my: "အတိုင်းအတာ", type: "Noun" },
  "許容": { jp: "許容 (きょよう)", my: "ခွင့်ပြုနိုင်သော", type: "Noun" },
  "精度": { jp: "精度 (せいど)", my: "တိကျမှု", type: "Noun" },
  "確認": { jp: "確認 (かくにん)", my: "အတည်ပြုခြင်း", type: "Noun" },
  "欠陥": { jp: "欠陥 (けっかん)", my: "ချို့ယွင်းချက်", type: "Noun" },
  "割れ": { jp: "割れ (われ)", my: "အက်ကွဲခြင်း", type: "Noun" },
  "強度": { jp: "強度 (きょうど)", my: "ကြံ့ခိုင်မှု", type: "Noun" },
  "表面": { jp: "表面 (ひょうめん)", my: "မျက်နှာပြင်", type: "Noun" },
  "防止": { jp: "防止 (ぼうし)", my: "ကာကွယ်ခြင်း", type: "Noun" },
  "温度": { jp: "温度 (おんど)", my: "အပူချိန်", type: "Noun" },
  "厚さ": { jp: "厚さ (あつさ)", my: "အထူ", type: "Noun" },
  "機器": { jp: "機器 (きき)", my: "စက်ပစ္စည်း", type: "Noun" },
  "安全": { jp: "安全 (あんぜん)", my: "ဘေးကင်းလုံခြုံရေး", type: "Noun" },
  "適用": { jp: "適用 (てきよう)", my: "အသုံးချခြင်း", type: "Noun" },
  "範囲": { jp: "範囲 (はんい)", my: "နယ်ပယ်", type: "Noun" },
  "原則": { jp: "原則 (げんそく)", my: "မူဝါဒ", type: "Noun" },
  "建築物": { jp: "建築物 (けんちくぶつ)", my: "အဆောက်အအုံ", type: "Noun" },
  "工作物": { jp: "工作物 (こうさくぶつ)", my: "အဆောက်အအုံ", type: "Noun" },
  "構造": { jp: "構造 (こうぞう)", my: "တည်ဆောက်ပုံ", type: "Noun" },
  "主要": { jp: "主要 (しゅよう)", my: "အဓိက", type: "Noun" },
  "軽微": { jp: "軽微 (けいび)", my: "အသေးအဖွဲ", type: "Noun" },
  "特記": { jp: "特記 (とっき)", my: "အထူးဖော်ပြချက်", type: "Noun" },
  "一部": { jp: "一部 (いちぶ)", my: "တစ်စိတ်တစ်ပိုင်း", type: "Noun" },
  "共通": { jp: "共通 (きょうつう)", my: "တူညီသော", type: "Noun" },
  "一般": { jp: "一般 (いっぱん)", my: "ယေဘုယျ", type: "Noun" },
  "事項": { jp: "事項 (じこう)", my: "အချက်အလက်", type: "Noun" },
  "矛盾": { jp: "矛盾 (むじゅん)", my: "ဆန့်ကျင်ဘက်ဖြစ်ခြင်း", type: "Noun" },
  "優先": { jp: "優先 (ゆうせん)", my: "ဦးစားပေး", type: "Noun" },
  "規格": { jp: "規格 (きかく)", my: "စံသတ်မှတ်ချက်", type: "Noun" },
  "同等": { jp: "同等 (どうとう)", my: "တူညီသော", type: "Noun" },
  "効力": { jp: "効力 (こうりょく)", my: "အကျိုးသက်ရောက်မှု", type: "Noun" },
  "法令": { jp: "法令 (ほうれい)", my: "ဥပဒေ", type: "Noun" },
  "仕様書": { jp: "仕様書 (しようしょ)", my: "သတ်မှတ်ချက်စာရွက်", type: "Noun" },
  "疑義": { jp: "疑義 (ぎぎ)", my: "သံသယ", type: "Noun" },
  "監理者": { jp: "監理者 (かんりしゃ)", my: "ကြီးကြပ်သူ", type: "Noun" },
  "協議": { jp: "協議 (きょうぎ)", my: "တိုင်ပင်ဆွေးနွေးခြင်း", type: "Noun" },
  "調査": { jp: "調査 (ちょうさ)", my: "စုံစမ်းစစ်ဆေးခြင်း", type: "Noun" },
  "研究": { jp: "研究 (けんきゅう)", my: "သုတေသန", type: "Noun" },
  "承認": { jp: "承認 (しょうにん)", my: "အတည်ပြုချက်", type: "Noun" },
  "種類": { jp: "種類 (しゅるい)", my: "အမျိုးအစား", type: "Noun" },
  "台数": { jp: "台数 (だいすう)", my: "အစီးရေ", type: "Noun" },
  "手順": { jp: "手順 (てじゅん)", my: "လုပ်ငန်းစဉ်အဆင့်ဆင့်", type: "Noun" },
  "予定": { jp: "予定 (よてい)", my: "အစီအစဉ်", type: "Noun" },
  "手配": { jp: "手配 (てはい)", my: "စီစဉ်ဆောင်ရွက်ခြင်း", type: "Noun" },
  "標準": { jp: "標準 (ひょうじゅん)", my: "စံနှုန်း", type: "Noun" },
  "水準": { jp: "水準 (すいじゅん)", my: "အဆင့်အတန်း", type: "Noun" },
  "製品": { jp: "製品 (せいひん)", my: "ထုတ်ကုန်", type: "Noun" },
  "納期": { jp: "納期 (のうき)", my: "ပေးပို့ရမည့်ရက်", type: "Noun" },
  "原価": { jp: "原価 (げんか)", my: "ကုန်ကျစရိတ်", type: "Noun" },
  "変更": { jp: "変更 (へんこう)", my: "ပြောင်းလဲခြင်း", type: "Noun" },
  "追加": { jp: "追加 (ついか)", my: "ထပ်မံဖြည့်စွက်ခြင်း", type: "Noun" },
  "検討": { jp: "検討 (けんとう)", my: "လေ့လာသုံးသပ်ခြင်း", type: "Noun" },
  "受領": { jp: "受領 (じゅりょう)", my: "လက်ခံရရှိခြင်း", type: "Noun" },
  "把握": { jp: "把握 (はあく)", my: "နားလည်သဘောပေါက်ခြင်း", type: "Noun" },
  "達成": { jp: "達成 (たっせい)", my: "အောင်မြင်ခြင်း", type: "Noun" },
  "要領": { jp: "要領 (ようりょう)", my: "အဓိကအချက်", type: "Noun" },
  "方針": { jp: "方針 (ほうしん)", my: "မူဝါဒ", type: "Noun" },
  "特性": { jp: "特性 (とくせい)", my: "ထူးခြားသောဂုဏ်သတ္တိ", type: "Noun" },
  "体制": { jp: "体制 (たいせい)", my: "ဖွဲ့စည်းပုံစနစ်", type: "Noun" },
  "追求": { jp: "追求 (ついきゅう)", my: "လိုက်လံရှာဖွေခြင်း", type: "Noun" },
  "最適": { jp: "最適 (さいてき)", my: "အသင့်လျော်ဆုံး", type: "Noun" },
  "実行": { jp: "実行 (じっこう)", my: "အကောင်အထည်ဖော်ခြင်း", type: "Noun" },
  "具体": { jp: "具体 (ぐたい)", my: "တိကျသေချာသော", type: "Noun" },
  "指示": { jp: "指示 (しじ)", my: "ညွှန်ကြားချက်", type: "Noun" },
  "能力": { jp: "能力 (のうりょく)", my: "စွမ်းရည်", type: "Noun" },
  "状況": { jp: "状況 (じょうきょう)", my: "အခြေအနေ", type: "Noun" },
  "影響": { jp: "影響 (えいきょう)", my: "သက်ရောက်မှု", type: "Noun" },
  "考慮": { jp: "考慮 (こうりょく)", my: "ထည့်သွင်းစဉ်းစားခြင်း", type: "Noun" },
  "結果": { jp: "結果 (けっか)", my: "ရလဒ်", type: "Noun" },
  "原因": { jp: "原因 (げんいん)", my: "အကြောင်းရင်း", type: "Noun" },
  "対策": { jp: "対策 (たいさく)", my: "ဖြေရှင်းမည့်နည်းလမ်း", type: "Noun" },
  "記録": { jp: "記録 (きろく)", my: "မှတ်တမ်း", type: "Noun" },
  "報告": { jp: "報告 (ほうこく)", my: "အစီရင်ခံခြင်း", type: "Noun" },
  "連絡": { jp: "連絡 (れんらく)", my: "ဆက်သွယ်ခြင်း", type: "Noun" },
  "相談": { jp: "相談 (そうだん)", my: "တိုင်ပင်ခြင်း", type: "Noun" },
  "準備": { jp: "準備 (じゅんび)", my: "ပြင်ဆင်ခြင်း", type: "Noun" },
  "整理": { jp: "整理 (せいり)", my: "ရှင်းလင်းစီစဉ်ခြင်း", type: "Noun" },
  "清掃": { jp: "清掃 (せいそう)", my: "သန့်ရှင်းရေး", type: "Noun" },
  "清潔": { jp: "清潔 (せいけつ)", my: "သန့်ရှင်းမှု", type: "Noun" },
  "習慣": { jp: "習慣 (しゅうかん)", my: "အလေ့အကျင့်", type: "Noun" },
  "環境": { jp: "環境 (かんきょう)", my: "ပတ်ဝန်းကျင်", type: "Noun" },
  "保護": { jp: "保護 (ほご)", my: "ကာကွယ်စောင့်ရှောက်ခြင်း", type: "Noun" },
  "危険": { jp: "危険 (きけん)", my: "အန္တရာယ်", type: "Noun" },
  "注意": { jp: "注意 (ちゅうい)", my: "သတိပြုခြင်း", type: "Noun" },
  "義務": { jp: "義務 (ぎむ)", my: "တာဝန်", type: "Noun" },
  "権利": { jp: "権利 (けんり)", my: "အခွင့်အရေး", type: "Noun" },
  "責任": { jp: "責任 (せきにん)", my: "တာဝန်ယူမှု", type: "Noun" },
  "役割": { jp: "役割 (やくわり)", my: "အခန်းကဏ္ဍ", type: "Noun" },
  "協力": { jp: "協力 (きょうりょく)", my: "ပူးပေါင်းဆောင်ရွက်ခြင်း", type: "Noun" },
  "理解": { jp: "理解 (りかい)", my: "နားလည်ခြင်း", type: "Noun" },
  "解決": { jp: "解決 (かいけつ)", my: "ဖြေရှင်းခြင်း", type: "Noun" },
  "改善": { jp: "改善 (かいぜん)", my: "တိုးတက်ကောင်းမွန်လာခြင်း", type: "Noun" }
};

const defaultVocab = [
  { jp: '用語 (ようご)', my: 'ဝေါဟာရ', type: 'Noun' },
  { jp: '定義 (ていぎ)', my: 'အဓိပ္ပါယ်ဖွင့်ဆိုချက်', type: 'Noun' },
  { jp: '次 (つぎ)', my: 'နောက်', type: 'Noun' },
  { jp: '記述 (きじゅつ)', my: 'ဖော်ပြချက်', type: 'Noun' },
  { jp: '不適当 (ふてきとう)', my: 'မသင့်လျော်သော', type: 'Adjective' }
];

const filesToProcess = [
  'chapter2-2026-part1.ts',
  'chapter2-2026-part2.ts',
  'chapter2-2026-part3.ts',
  'chapter2-2026-part4.ts'
];

for (const file of filesToProcess) {
  const filePath = path.join(__dirname, 'data', file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by question ID
  const parts = content.split('id: "2026-2-');
  for (let i = 1; i < parts.length; i++) {
    const qPart = parts[i];
    const qNum = qPart.split('"')[0]; // e.g. "1"
    
    // Extract ruby kanji
    const rubyRegex = /<ruby>([^<]+)<rt>[^<]+<\/rt><\/ruby>/g;
    let match;
    const kanjisFound = new Set();
    while ((match = rubyRegex.exec(qPart)) !== null) {
      kanjisFound.add(match[1]);
    }
    
    // Build vocab list
    const vocabList = [...defaultVocab];
    let count = 0;
    for (const kanji of kanjisFound) {
      if (dict[kanji]) {
        if (!vocabList.find(v => v.jp === dict[kanji].jp)) {
          vocabList.push(dict[kanji]);
          count++;
          if (count >= 10) break; // limit to 10 extra words
        }
      }
    }
    
    // Write out JS file
    const jsContent = `export default ${JSON.stringify(vocabList, null, 2)};\n`;
    const outPath = path.join(__dirname, 'data', 'vocab', 'questions', `2026-2-${qNum}.js`);
    fs.writeFileSync(outPath, jsContent);
    console.log(`Generated 2026-2-${qNum}.js`);
  }
}
