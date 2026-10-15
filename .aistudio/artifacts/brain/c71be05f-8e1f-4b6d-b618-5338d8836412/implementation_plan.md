# Revised Implementation Plan: Adding Furigana & Comprehensive Myanmar Explanations to 2026 Chapter 5 (1級 建築法規)

Add full Japanese Furigana pronunciation annotations (`<ruby>漢字<rt>かんじ</rt></ruby>`) AND comprehensive, high-yield Myanmar translations and explanations (`titleMY`, `reasonMY`, `memoryTipMY`) to Chapter 5 (2026 Level 1 建築法規, questions 5-1 through 5-9) in `data/chapter5-2026-part1.ts`.

In accordance with strict instructions, all other chapters (Chapter 1–4, Level 2, and past exam questions) will remain completely untouched.

---

## 1. Problem & Scope

- **User Feedback**: Ensure detailed, clear Myanmar explanations (`မြန်မာလို ရှင်းလင်းချက်`) are fully included for every question, directly reflecting the textbook's official explanation (解説).
- **Target File**: `data/chapter5-2026-part1.ts` exclusively.
- **Strict Boundary**: Zero edits to other chapters, zero automatic database syncs.

---

## 2. Detailed Content Structure for Questions 5-1 to 5-9

Each question in `data/chapter5-2026-part1.ts` will feature:
1. **`questionJP`**: Full Furigana `<ruby>漢字<rt>かんじ</rt></ruby>` annotations.
2. **`questionMY`**: Accurate Myanmar translation.
3. **`options`**: (1) to (5) each containing:
   - `textJP`: Japanese with `<ruby>` Furigana.
   - `textMY`: Clear Myanmar engineering translation.
4. **`correctOptionId`**: 1-based index matching the official answer key.
5. **`explanation`**:
   - `titleMY`: Burmese section title.
   - `reasonMY`: Comprehensive technical rationale in Myanmar explaining why the answer is correct/incorrect based on the official textbook `解説`.
   - `memoryTipMY`: High-yield exam memory tip in Myanmar.

---

### Detailed Question Breakdown

#### **問5-1 (`2026-5-1`)**
- **Correct Option**: `3`
- **Furigana Focus**: `<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>`, `<ruby>指定確認検査機関<rt>していかくにんけんさきかん</rt></ruby>`, `<ruby>建築主事<rt>けんちくしゅじ</rt></ruby>`, `<ruby>完了検査申請書<rt>かんりょうけんさしんせいしょ</rt></ruby>`, `<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>`, `<ruby>鉄骨造<rt>てっこつぞう</rt></ruby>`, `<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリート<ruby>造<rt>ぞう</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - တရားဝင်ဖော်ပြချက်အရ 中間検査 (ကြားဖြတ်စစ်ဆေးခြင်း) ကို အဆောက်အဦ၏ ဖွဲ့စည်းတည်ဆောက်ပုံအမျိုးအစား (構造種別) ပေါ် မူတည်၍ ကန့်သတ်ထားခြင်း မဟုတ်ပါ။ သံမဏိဘောင် (鉄骨造) သာမက သံကူကွန်ကရစ် (RC 造) ဖြစ်စေ သက်ဆိုင်ရာ အုပ်ချုပ်ရေးအာဏာပိုင် (特定行政庁) က သတ်မှတ်ထားသော လုပ်ငန်းအဆင့်များတွင် မဖြစ်မနေ စစ်ဆေးမှု ခံယူရမည်ဖြစ်သည်။ ထို့ကြောင့် 'RC 造 သည် ကြားဖြတ်စစ်ဆေးမှု၏ ကင်းလွတ်ခွင့်ဖြစ်သည်' ဟု ဖော်ပြထားသော (3) သည် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `中間検査 (ကြားဖြတ်စစ်ဆေးခြင်း) သည် သံမဏိဘောင် (S造) သာမက သံကူကွန်ကရစ် (RC造) အပါအဝင် အုပ်ချုပ်ရေးအာဏာပိုင် သတ်မှတ်ထားသော အဆောက်အဦတိုင်း ခံယူရမည်။`

#### **問5-2 (`2026-5-2`)**
- **Correct Option**: `5`
- **Furigana Focus**: `<ruby>同施行令<rt>どうしこうれい</rt></ruby>`, `<ruby>確認済証<rt>かくにんずみしょう</rt></ruby>`, `<ruby>計画変更<rt>けいかくへんこう</rt></ruby>`, `<ruby>軽微<rt>けいび</rt></ruby>`, `<ruby>完了検査申請書<rt>かんりょうけんさしんせいしょ</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - အဆောက်အဦဆောက်လုပ်မှု ပြီးစီးသည့်အခါ အဆောက်အဦပိုင်ရှင် (建築主) သည် အလုပ်ပြီးစီးပြီးနောက် ၄ ရက်အတွင်း (4日以内) ပြီးစီးမှုစစ်ဆေးခြင်းလျှောက်လွှာ (完了検査申請書) ကို တင်ပြရမည် ဖြစ်သည်။ ရွေးချယ်စရာ (5) တွင် ၇ ရက်အတွင်းဟု ဖော်ပြထားသောကြောင့် မှားယွင်းပါသည်။ (စစ်ဆေးရေးအဖွဲ့ဘက်မှ လျှောက်လွှာလက်ခံရရှိပြီး ၇ ရက်အတွင်း လာရောက်စစ်ဆေးရမည် ဖြစ်သည်)။
- **Memory Tip (`memoryTipMY`)**:
  - `ပိုင်ရှင်က စစ်ဆေးရန် လျှောက်ထားရမည့်ရက် = ပြီးစီးပြီး ၄ ရက်အတွင်း (4日以内)။ စစ်ဆေးရေးအဖွဲ့က လာရောက်စစ်ဆေးရမည့်ရက် = လက်ခံပြီး ၇ ရက်အတွင်း (7日以内)။`

#### **問5-3 (`2026-5-3`)**
- **Correct Option**: `5`
- **Furigana Focus**: `<ruby>指定建築材料<rt>していけんちくざいりょう</rt></ruby>`, `<ruby>許容応力度<rt>きょようおうりょくど</rt></ruby>`, `<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>`, `<ruby>座屈<rt>ざくつ</rt></ruby>`, `<ruby>溶接継目<rt>ようせつつぎめ</rt></ruby>`, `<ruby>のど断面<rt>のどだんめん</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - အမျိုးအစား သို့မဟုတ် အရည်အသွေး မတူညီသော သံမဏိနှစ်မျိုးကို ဂဟေဆက်သည့်အခါ (異なる種類の鋼材を溶接する場合) ဂဟေဆက်ကြောင်းနေရာ၏ ခံနိုင်ရည်စံနှုန်း (基準強度) သည် ဆက်ထားသော သံမဏိများအနက် အားနည်းသော ပိုသေးငယ်သည့်တန်ဖိုး (小さい方の値) ကို ယူရမည် ဖြစ်သည်။ ရွေးချယ်စရာ (5) တွင် 'ပိုကြီးသောတန်ဖိုး (大きい値)' ဟု ဖော်ပြထားသဖြင့် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `မတူတဲ့ သံမဏိတွေ ဂဟေဆက်ရင် ဘေးကင်းရေးအတွက် အမြဲတမ်း ပိုနည်းတဲ့တန်ဖိုး (小さい方の値) ကို အခြေခံရမည်။`

#### **問5-4 (`2026-5-4`)**
- **Correct Option**: `4`
- **Furigana Focus**: `<ruby>滑節構造<rt>かっせつこうぞう</rt></ruby>`, `<ruby>柱の脚部<rt>はしらのきゃくぶ</rt></ruby>`, `<ruby>緊結<rt>きんけつ</rt></ruby>`, `<ruby>有効細長比<rt>ゆうこうほそながひ</rt></ruby>`, `<ruby>鋳鉄<rt>ちゅうてつ</rt></ruby>`, `<ruby>圧縮応力<rt>あっしゅくおうりょく</rt></ruby>`, `<ruby>接触応力<rt>せっしょくおうりょく</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - သံစပ် (鋳鉄 - Cast Iron) သည် ဖိအား (Compression) နှင့် ထိတွေ့အား (Contact stress) ကို ကောင်းစွာခံနိုင်သော်လည်း ဆွဲအား (Tension) နှင့် ကွေးအား (Bending) ကို မခံနိုင်ပါ။ ထို့ကြောင့် ဖိအားသက်သက်သာရှိသော တိုင်များတွင် အသုံးပြုခွင့်ရှိသည်မှာ မှန်ကန်ပါသည်။ (1) 滑節構造 မဟုတ်ပါက အခြေခံနှင့် မဖြစ်မနေ ချည်နှောင်ရမည်၊ (2) 3,000m² ကျော်ပါက သာမန် Bolt အသုံးမပြုရ၊ (3) တိုင်၏ 有効細長比 သည် ၂၀၀ အောက် ဖြစ်ရမည်။
- **Memory Tip (`memoryTipMY`)**:
  - `သံစပ် (鋳鉄) = ဖိအားသက်သက် (圧縮応力のみ) ရှိသော နေရာတွင်သာ သုံးခွင့်ရှိသည်။`

#### **問5-5 (`2026-5-5`)**
- **Correct Option**: `2`
- **Furigana Focus**: `<ruby>構造耐力上主要な部分<rt>こうぞうたいりょくじょうしゅうようなぶぶん</rt></ruby>`, `<ruby>主要構造部<rt>しゅようこうぞうぶ</rt></ruby>`, `<ruby>耐火性能<rt>たいかせいのう</rt></ruby>`, `<ruby>延焼<rt>えんしょう</rt></ruby>`, `<ruby>基礎<rt>きそ</rt></ruby>`, `<ruby>大規模の修繕<rt>だいきぼのしゅうぜん</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - 'ပင်မအဆောက်အဦအစိတ်အပိုင်း' (主要構造部) သည် မီးဘေးကာကွယ်ရေး (防火上) ရှုထောင့်မှ သတ်မှတ်ထားခြင်းဖြစ်ပြီး ၎င်းတွင် အခြေခံအုတ်မြစ် (基礎) မပါဝင်ပါ။ 基礎 သည် 'ဖွဲ့စည်းပုံခံနိုင်ရည်ဆိုင်ရာ အဓိကအစိတ်အပိုင်း' (構造耐力上主要な部分) တွင်သာ ပါဝင်ပါသည်။ ထို့ကြောင့် 基礎 ပါဝင်သည်ဟု ဖော်ပြထားသော (2) သည် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `主要構造部 (မီးဘေးကာကွယ်ရေး ပင်မအစိတ်အပိုင်း) တွင် 基礎 (အခြေခံအုတ်မြစ်) မပါဝင်ပါ။`

#### **問5-6 (`2026-5-6`)**
- **Correct Option**: `2`
- **Furigana Focus**: `<ruby>建築主<rt>けんちくぬし</rt></ruby>`, `<ruby>設計者<rt>せっけいしゃ</rt></ruby>`, `<ruby>構造設計一級建築士<rt>こうぞうせっけいいっきゅうけんちくし</rt></ruby>`, `<ruby>設備設計一級建築士<rt>せつびせっけいいっきゅうけんちくし</rt></ruby>`, `<ruby>工事監理<rt>こうじかんり</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - ဥပဒေအရ 'ဒီဇိုင်နာ' (設計者) ၏ အဓိပ္ပာယ်ဖွင့်ဆိုချက်တွင် အဆင့်မြင့်ဖွဲ့စည်းပုံဒီဇိုင်းဗိသုကာ (構造設計一級建築士) နှင့် စက်ကိရိယာဒီဇိုင်းဗိသုကာ (設備設計一級建築士) တို့လည်း အကျုံးဝင်ပါဝင်သည်။ ရွေးချယ်စရာ (2) တွင် မပါဝင်ပါ (含まれない) ဟု ဖော်ပြထားသဖြင့် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `構造設計一級建築士 နှင့် 設備設計一級建築士 တို့သည်လည်း 設計者 (ဒီဇိုင်နာ) တွင် အကျုံးဝင်ပါသည်။`

#### **問5-7 (`2026-5-7`)**
- **Correct Option**: `2`
- **Furigana Focus**: `<ruby>地盤面下<rt>じばんめんか</rt></ruby>`, `<ruby>天井の高さ<rt>てんじょうのたかさ</rt></ruby>`, `<ruby>地階<rt>ちかい</rt></ruby>`, `<ruby>積載荷重<rt>せきさいかじゅう</rt></ruby>`, `<ruby>震動<rt>しんどう</rt></ruby>`, `<ruby>衝撃<rt>しょうげき</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - မြေအောက်ထပ် (地階) ၏ ဥပဒေအရ အဓိပ္ပာယ်မှာ ကြမ်းပြင်သည် မြေမျက်နှာပြင်အောက်တွင် ရှိပြီး၊ ကြမ်းပြင်မှ မြေပြင်အထိ အမြင့်သည် ၎င်းအထပ်၏ 'မျက်နှာကြက်အမြင့်' (天井の高さ) ၏ ၃ ပုံ ၁ ပုံ (1/3) နှင့်အထက် ရှိသောအထပ်ကို ဆိုလိုသည်။ မျက်နှာကြက်တစ်ခုလုံး မြေအောက်ရောက်နေရန် မလိုပါ။ ထို့ကြောင့် (2) သည် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `မြေအောက်ထပ် (地階) = ကြမ်းပြင်မှ မြေပြင်အထိအမြင့်သည် မျက်နှာကြက်အမြင့် (天井の高さ) ၏ 1/3 နှင့်အထက် ဖြစ်သည်။`

#### **問5-8 (`2026-5-8`)**
- **Correct Option**: `1`
- **Furigana Focus**: `<ruby>炭素鋼<rt>たんそこう</rt></ruby>`, `<ruby>鋳鉄<rt>ちゅうてつ</rt></ruby>`, `<ruby>圧縮応力<rt>あっしゅくおうりょく</rt></ruby>`, `<ruby>接触応力<rt>せっしょくおうりょく</rt></ruby>`, `<ruby>アンカーボルト<rt>あんかーぼると</rt></ruby>`, `<ruby>露出形式柱脚<rt>ろしゅつけいしきちゅうきゃく</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - သံစပ် (鋳鉄) သည် ဖိအား (圧縮応力) သို့မဟုတ် ထိတွေ့အား (接触応力) သက်သက်သာရှိသော အစိတ်အပိုင်းများတွင်သာ အသုံးပြုခွင့်ရှိသည်။ ရွေးချယ်စရာ (1) တွင် 'ဖိအား သို့မဟုတ် ထိတွေ့အားရှိသော နေရာများတွင် မသုံးရပါ' (使用してはならない) ဟု ဆန့်ကျင်ဘက် ဖော်ပြထားသဖြင့် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `သံစပ် (鋳鉄) သည် 圧縮応力 (ဖိအား) သို့မဟုတ် 接触応力 (ထိတွေ့အား) သာ ရှိသော နေရာတွင်သာ သုံးရမည်။`

#### **問5-9 (`2026-5-9`)**
- **Correct Option**: `2`
- **Furigana Focus**: `<ruby>有効細長比<rt>ゆうこうほそながひ</rt></ruby>`, `<ruby>柱<rt>はしら</rt></ruby>`, `<ruby>柱以外<rt>はしらいがい</rt></ruby>`, `<ruby>高力ボルト孔の径<rt>こうりきぼるとこうのけい</rt></ruby>`, `<ruby>釣合い<rt>つりあい</rt></ruby>`
- **Myanmar Explanation (`reasonMY`)**:
  - သံမဏိတည်ဆောက်ပုံတွင် ဖိအားဒဏ်ခံရသော အဓိကအစိတ်အပိုင်းများ၏ 有効細長比 (ထိရောက်သော အချိုးအစား) သည် တိုင်များ (柱) အတွက် ၂၀၀ အောက် ဖြစ်ရပြီး၊ တိုင်မဟုတ်သော အခြားအစိတ်အပိုင်းများ (柱以外 - ဥပမာ Bracing) အတွက် '၂၅၀ အောက်' (250以下) ဖြစ်ရမည်။ ရွေးချယ်စရာ (2) တွင် ၁၅၀ အောက်ဟု ဖော်ပြထားသဖြင့် မှားယွင်းပါသည်။
- **Memory Tip (`memoryTipMY`)**:
  - `有効細長比 = တိုင် (柱) အတွက် ၂၀၀ အောက်၊ တိုင်မဟုတ်သော အစိတ်အပိုင်း (柱以外) အတွက် ၂၅၀ အောက် ဖြစ်သည်။`

---

## 3. Verification Plan

1. **Compilation**: Run `compile_applet` to ensure full build without syntax or TypeScript errors.
2. **Lint**: Run `lint_applet` (`tsc --noEmit`) to verify strict type compliance.
3. **Rendering**: Ensure both Furigana `<ruby>` tags and Myanmar text/explanations display clearly in Study and Quiz modes.
