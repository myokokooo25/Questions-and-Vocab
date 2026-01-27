
import { StudyCardData } from '../types';

export const chapter3Part1Data: StudyCardData[] = [
  {
    id: "3-1",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ၏ အရည်အသွေးအာမခံချက် (QA) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨<rt>てっこつ</rt></ruby>は<ruby>顧客<rt>こきゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>されなければならない。", textMY: "သံမဏိထည်များကို ဝယ်ယူသူ (Customer) အတွက် အရည်အသွေး အာမခံချက် ပေးရမည်။" },
      { id: 2, textJP: "(2) <ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>は<ruby>顧客<rt>こきゃく</rt></ruby>が<ruby>安心<rt>あんしん</rt></ruby>・<ruby>満足<rt>まんぞく</rt></ruby>できる<ruby>品質<rt>ひんしつ</rt></ruby>である<ruby>必要<rt>ひつよう</rt></ruby>があり、<ruby>生産者<rt>せいさんしゃ</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>だけでその<ruby>品質目標<rt>ひんしつもくひょう</rt></ruby>が<ruby>設定<rt>せってい</rt></ruby>されてはならない。", textMY: "သံမဏိထုတ်ကုန်သည် ဝယ်ယူသူ စိတ်ချကျေနပ်နိုင်သော အရည်အသွေးရှိရမည်ဖြစ်ပြီး၊ ထုတ်လုပ်သူ၏ အဆင်ပြေမှုသက်သက်ဖြင့် အရည်အသွေးပန်းတိုင်ကို မသတ်မှတ်ရပါ။" },
      { id: 3, textJP: "(3) <ruby>品質保証<rt>ひんしつほしょう</rt></ruby>のための<ruby>最低<rt>さいてい</rt></ruby>の<ruby>要求<rt>ようきゅう</rt></ruby>として、<ruby>法律<rt>ほうりつ</rt></ruby>や<ruby>告示<rt>こくじ</rt></ruby>があり、<ruby>設計<rt>せっけい</rt></ruby>・<ruby>施工<rt>せこう</rt></ruby>における<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>のための<ruby>目標値<rt>もくひょうち</rt></ruby>として、<ruby>基準<rt>きじゅん</rt></ruby>・<ruby>標準類<rt>ひょうじゅんるい</rt></ruby>などがある。", textMY: "အရည်အသွေးအာမခံချက်အတွက် အနိမ့်ဆုံးလိုအပ်ချက်မှာ ဥပဒေနှင့် ကြေညာချက်များဖြစ်ပြီး၊ ဒီဇိုင်း/တည်ဆောက်မှုအတွက် ပန်းတိုင်တန်ဖိုးများမှာ စံနှုန်းများဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>の<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>は、<ruby>設計図<rt>せっけいず</rt></ruby>に<ruby>不備<rt>ふび</rt></ruby>がなければおのずと<ruby>達成<rt>たっせい</rt></ruby>されるものであり、<ruby>設計業務<rt>せっけいぎょうむ</rt></ruby>の<ruby>成果物<rt>せいかぶつ</rt></ruby>として<ruby>捉<rt>とら</rt></ruby>えることができる。", textMY: "သံမဏိထုတ်ကုန်၏ အရည်အသွေးအာမခံချက်သည် ဒီဇိုင်းပုံစံတွင် အမှားမရှိရုံဖြင့် အလိုအလျောက် ပြည့်မီလာမည်ဖြစ်ပြီး၊ ၎င်းကို ဒီဇိုင်းလုပ်ငန်း၏ ရလဒ်အဖြစ်သာ သတ်မှတ်နိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>設計品質<rt>せっけいひんしつ</rt></ruby>は、<ruby>設計者<rt>せっけいしゃ</rt></ruby>が<ruby>保証<rt>ほしょう</rt></ruby>しなければならない。", textMY: "ဒီဇိုင်းအရည်အသွေးကို ဒီဇိုင်နာ (Architect/Engineer) က အာမခံပေးရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 品質保証の考え方",
      reasonMY: "အရည်အသွေးအာမခံချက် (Quality Assurance) ဆိုသည်မှာ ဒီဇိုင်းပုံစံ (Design) အပြင် ထုတ်လုပ်မှု (Fabrication) နှင့် တည်ဆောက်မှု (Erection) လုပ်ငန်းစဉ်အားလုံး၏ စုပေါင်းရလဒ်ဖြစ်သည်။ ဒီဇိုင်းမှန်ရုံဖြင့် အလိုအလျောက် ရရှိလာသော အရာမဟုတ်ပါ။",
      memoryTipMY: "အရည်အသွေးသည် 'ဒီဇိုင်း + ထုတ်လုပ်မှု + တည်ဆောက်မှု' အားလုံး ပေါင်းစပ်မှ ရရှိသည်။"
    }
  },
  {
    id: "3-2",
    questionJP: "<ruby>品質<rt>ひんしつ</rt></ruby>マネジメントに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေး စီမံခန့်ခွဲမှု (Quality Management) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質<rt>ひんしつ</rt></ruby>マネジメントは、ISO 9000 シリーズにおいて、<ruby>経営者<rt>けいえいしゃ</rt></ruby>も<ruby>含<rt>ふく</rt></ruby>めた<ruby>企業組織全体<rt>きぎょうそしきぜんたい</rt></ruby>が、<ruby>顧客満足<rt>こきゃくまんぞく</rt></ruby>の<ruby>観点<rt>かんてん</rt></ruby>から品質を<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>改善<rt>かいぜん</rt></ruby>するための<ruby>管理手法<rt>かんりしゅほう</rt></ruby>である。", textMY: "QM သည် ISO 9000 စံနှုန်းအရ ဝယ်ယူသူစိတ်ကျေနပ်မှုအတွက် တစ်ဖွဲ့စည်းပုံလုံးက စဉ်ဆက်မပြတ် တိုးတက်အောင် လုပ်ဆောင်သော စီမံခန့်ခွဲမှု နည်းစနစ်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>品質<rt>ひんしつ</rt></ruby>マネジメントは、プロセス（<ruby>工程<rt>こうてい</rt></ruby>）を<ruby>重視<rt>じゅうし</rt></ruby>する<ruby>管理技術<rt>かんりぎじゅつ</rt></ruby>である。", textMY: "QM သည် လုပ်ငန်းစဉ် (Process) ကို အဓိကထားသော စီမံခန့်ခွဲမှု နည်းပညာဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>品質<rt>ひんしつ</rt></ruby>マネジメントにおいて、<ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>防止<rt>ぼうし</rt></ruby>と<ruby>製品品質<rt>せいひんひんしつ</rt></ruby>を<ruby>改善<rt>かいぜん</rt></ruby>するためには、<ruby>試験<rt>しけん</rt></ruby>・<ruby>検査<rt>けんさ</rt></ruby>を<ruby>厳重<rt>げんじゅう</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>し、<ruby>不適合<rt>ふてきごう</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>されたらその<ruby>都度手直<rt>つどてなお</rt></ruby>しすることが<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>となる。", textMY: "QM တွင် ချို့ယွင်းချက်တွေ့တိုင်း ချက်ချင်း ပြင်ဆင်ခြင်း (Reactive approach) သည် အရေးကြီးဆုံး လုပ်ဆောင်ချက်ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>不具合<rt>ふぐあい</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>し<ruby>製品品質<rt>せいひんひんしつ</rt></ruby>を<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>改善<rt>かいぜん</rt></ruby>・<ruby>向上<rt>こうじょう</rt></ruby>するためには、PDCA サイクルを<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>組織的<rt>そしきてき</rt></ruby>に<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "အရည်အသွေးမြှင့်တင်ရန် PDCA cycle ကို လူတိုင်းက စနစ်တကျ ထပ်ခါတလဲလဲ လုပ်ဆောင်ရန် လိုအပ်သည်။" },
      { id: 5, textJP: "(5) PDCA サイクルは、Act を<ruby>次<rt>つぎ</rt></ruby>のサイクルにつなげ、<ruby>螺旋状<rt>らせんじょう</rt></ruby>に<ruby>業務改善<rt>ぎょうむかいぜん</rt></ruby>（スパイラルアップ）を<ruby>図<rt>はか</rt></ruby>るものである。", textMY: "PDCA cycle သည် အဆင့်တစ်ခုချင်းစီကို နောက်စက်ဝန်းနှင့် ချိတ်ဆက်ကာ ခရုပတ်ပုံစံ (Spiral up) ဖြင့် လုပ်ငန်းကို ပိုမိုတိုးတက်စေသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予防 (Prevention)",
      reasonMY: "အရည်အသွေး စီမံခန့်ခွဲမှု (QM) ၏ အဓိကမှာ ချို့ယွင်းချက် ဖြစ်ပေါ်လာပြီးမှ ပြင်ဆင်ခြင်း (手直し) မဟုတ်ဘဲ၊ ချို့ယွင်းချက် မဖြစ်ပေါ်အောင် ကြိုတင်ကာကွယ်ခြင်း (予防) သာ ဖြစ်သည်။",
      memoryTipMY: "QM = မမှားအောင်အရင်လုပ် (Prevention), မှားမှပြင်တာ (Correction) မဟုတ်။"
    }
  },
  {
    id: "3-3",
    questionJP: "「JASS 6」における<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>マネジメントおよび<ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>マネジメントシステムに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိထုတ်လုပ်သူ၏ အရည်အသွေးစီမံခန့်ခွဲမှုစနစ်နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>様々<rt>さまざま</rt></ruby>な<ruby>機能<rt>きのう</rt></ruby>を<ruby>持<rt>も</rt></ruby>ったシステムを<ruby>確立<rt>かくりつ</rt></ruby>し、システム<ruby>図<rt>ず</rt></ruby>などで<ruby>明示<rt>めいじ</rt></ruby>するとされている。", textMY: "ထုတ်လုပ်သူသည် အရည်အသွေးစီမံမှုစနစ်ကို ထူထောင်ပြီး စနစ်ပုံကြမ်း (System Chart) များဖြင့် ရှင်းလင်းစွာ ဖော်ပြရမည်။" },
      { id: 2, textJP: "(2) 「<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>記録<rt>きろく</rt></ruby>を<ruby>保管<rt>ほかん</rt></ruby>・<ruby>管理<rt>かんり</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>」は、システムが<ruby>持<rt>も</rt></ruby>つべき<ruby>機能<rt>きのう</rt></ruby>である。", textMY: "အရည်အသွေးအတွက် လိုအပ်သော မှတ်တမ်းများကို ထိန်းသိမ်းစီမံသည့် လုပ်ငန်းဆောင်တာမှာ မရှိမဖြစ် ပါဝင်ရမည်။" },
      { id: 3, textJP: "(3) 「<ruby>施工品質<rt>せこうひんしつ</rt></ruby>を<ruby>検査<rt>けんさ</rt></ruby>・<ruby>検証<rt>けんしょう</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>」は、システムが<ruby>持<rt>も</rt></ruby>つべき<ruby>機能<rt>きのう</rt></ruby>である。", textMY: "တည်ဆောက်မှုအရည်အသွေးကို စစ်ဆေးအတည်ပြုသည့် လုပ်ငန်းဆောင်တာ ပါဝင်ရမည်။" },
      { id: 4, textJP: "(4) 「<ruby>標準化<rt>ひょうじゅんか</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める<ruby>機能<rt>きのう</rt></ruby>」は、システムが<ruby>持<rt>も</rt></ruby>つべき<ruby>機能<rt>きのう</rt></ruby>として<ruby>定<rt>さだ</rt></ruby>められている。", textMY: "စံနှုန်းသတ်မှတ်ခြင်း (Standardization) ကို မြှင့်တင်သည့် လုပ်ငန်းဆောင်တာ ပါဝင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>の品質マネジメントを<ruby>有効<rt>ゆうこう</rt></ruby>とするためには、<ruby>設計者<rt>せっけいしゃ</rt></ruby>と<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>連携<rt>れんけい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り、<ruby>製作業者<rt>せいさくぎょうしゃ</rt></ruby>はその<ruby>指示<rt>しじ</rt></ruby>どおりの<ruby>製作<rt>せいさく</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "အရည်အသွေးကောင်းရန် ဒီဇိုင်နာနှင့် တည်ဆောက်သူတို့ ချိတ်ဆက်ပြီး ထုတ်လုပ်သူက ၎င်းတို့၏ ညွှန်ကြားချက်အတိုင်းသာ အာရုံစိုက်ထုတ်လုပ်ရန် အရေးကြီးသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 組織間の連携 (Coordination)",
      reasonMY: "အရည်အသွေးစီမံမှု (QM) စနစ်သည် အဖွဲ့အစည်းတစ်ခုတည်း၏ လုပ်ဆောင်မှုမဟုတ်ဘဲ ဒီဇိုင်နာ (設計者)၊ တည်ဆောက်သူ (施工者) နှင့် ထုတ်လုပ်သူ (製作業者) အားလုံး အတူတကွ ပူးပေါင်းဆောင်ရွက်မှသာ အောင်မြင်နိုင်သည်။ ထုတ်လုပ်သူက ညွှန်ကြားချက်ကိုသာ စောင့်နေခြင်းမှာ မလုံလောက်ပါ။",
      memoryTipMY: "QM သည် အားလုံး၏ ပူးပေါင်းဆောင်ရွက်မှု (Triple win) ဖြစ်သည်။"
    }
  },
  {
    id: "3-4",
    questionJP: "<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>および<ruby>品質管理手法<rt>ひんしつかんりしゅほう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်သူ၏ အရည်အသွေးအာမခံချက် (QA) နှင့် စီမံခန့်ခွဲမှုနည်းစနစ်ဆိုင်ရာ မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>受注<rt>じゅちゅう</rt></ruby>から<ruby>納品<rt>のうひん</rt></ruby>までの<ruby>業務<rt>ぎょうむ</rt></ruby>の流れに従い、<ruby>保証項目<rt>ほしょうこうもく</rt></ruby>や<ruby>責任者<rt>せきにんしゃ</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>にしたものを「<ruby>品質保証体系図<rt>ひんしつほしょうたいけいず</rt></ruby>」という。", textMY: "အလုပ်လက်ခံခြင်းမှ ပစ္စည်းပေးပို့ခြင်းအထိ လုပ်ငန်းအဆင့်ဆင့်တွင် တာဝန်ရှိသူများကို ဖော်ပြသည့်ဇယားကို 'QA System Chart' ဟု ခေါ်သည်။" },
      { id: 2, textJP: "(2) <ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>機械<rt>きかい</rt></ruby>・<ruby>人<rt>ひと</rt></ruby>・<ruby>作業方法<rt>さぎょうほうほう</rt></ruby>などの 4M を、<ruby>工程<rt>こうてい</rt></ruby>の流れに沿って<ruby>示<rt>しめ</rt></ruby>したものを PDCA サイクルという。", textMY: "ကုန်ကြမ်း၊ စက်၊ လူ၊ နည်းလမ်း (4M) တို့ကို လုပ်ငန်းစဉ်အဆင့်ဆင့်အတိုင်း ဖော်ပြထားသောအရာကို PDCA cycle ဟု ခေါ်သည်။" },
      { id: 3, textJP: "(3) <ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>にし、<ruby>効率的<rt>こうりつてき</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>するための<ruby>組織<rt>そしき</rt></ruby>を「<ruby>品質管理組織<rt>ひんしつかんりそしき</rt></ruby>」という。", textMY: "အရည်အသွေးစီမံမှုကို ထိရောက်စွာလုပ်ဆောင်ရန် ဖွဲ့စည်းထားသော အဖွဲ့အစည်းကို 'QC Organization' ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>作業者<rt>さぎょうしゃ</rt></ruby>が<ruby>誤<rt>あやま</rt></ruby>った<ruby>操作<rt>そうさ</rt></ruby>をしても<ruby>危険<rt>きけん</rt></ruby>にさらされないよう、あらかじめ<ruby>安全対策<rt>あんぜんたいさく</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>しておくことを「フールプルーフ」という。", textMY: "အလုပ်သမား မှားယွင်းလုပ်ကိုင်မိလျှင်ပင် ဘေးမဖြစ်စေရန် ကြိုတင်ကာကွယ်ထားသည့် စနစ်ကို Fool-proof ဟု ခေါ်သည်။" },
      { id: 5, textJP: "(5) <ruby>収集<rt>しゅうしゅう</rt></ruby>したデータの<ruby>傾向<rt>けいこう</rt></ruby>や<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>数値的<rt>すうちてき</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>する<ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>管理<rt>かんり</rt></ruby>を「<ruby>統計的品質管理<rt>とうけいてきひんしつかんり</rt></ruby>」という。", textMY: "ဒေတာများကို ကိန်းဂဏန်းဖြင့် ခွဲခြမ်းစိတ်ဖြာစီမံသည့်နည်းကို Statistical Quality Control (SQC) ဟု ခေါ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - QC工程表 vs PDCA",
      reasonMY: "လုပ်ငန်းစဉ်အဆင့်ဆင့်တွင် 4M (လူ၊ ပစ္စည်း၊ စက်၊ နည်းလမ်း) တို့ကို ဘယ်လိုစီမံမလဲဆိုသည်ကို ဖော်ပြသည့်ဇယားမှာ 'QC Flow Chart' (QC工程表) ဖြစ်သည်။ PDCA (Plan-Do-Check-Act) မှာ စီမံခန့်ခွဲမှု လည်ပတ်ပုံစနစ်သာ ဖြစ်သည်။",
      memoryTipMY: "4M + Process Flow = QC Flow Chart (QC工程表)။"
    }
  },
  {
    id: "3-5",
    questionJP: "<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>品質管理活動<rt>ひんしつかんりかつどう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်သူ၏ အရည်အသွေးထိန်းချုပ်မှု လှုပ်ရှားမှုများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外注品<rt>がいちゅうひん</rt></ruby>の品質は、<ruby>外注工場<rt>がいちゅうこうじょう</rt></ruby>の<ruby>実態<rt>じったい</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じた<ruby>指導<rt>しどう</rt></ruby>・<ruby>教育<rt>きょういく</rt></ruby>もしくは、<ruby>受<rt>う</rt></ruby>け<ruby>入れ<rt>いれ</rt></ruby>にあたっての<ruby>検査<rt>けんさ</rt></ruby>の<ruby>いずれか<rt>いずれか</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "ပြင်ပမှမှာယူသော ပစ္စည်းများ၏ အရည်အသွေးကို (၁) ပြင်ပစက်ရုံအား ပညာပေးခြင်း သို့မဟုတ် (၂) လက်ခံစစ်ဆေးခြင်း ဤနှစ်ခုအနက် 'တစ်ခုခု' (Either one) ကိုသာ လုပ်ဆောင်ရန် လုံလောက်သည်။" },
      { id: 2, textJP: "(2) <ruby>製作部門<rt>せいさくぶもん</rt></ruby>은 <ruby>品質保証<rt>ひんしつほしょう</rt></ruby>の<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>を<ruby>担<rt>にな</rt></ruby>っているため、<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>などを<ruby>活用<rt>かつよう</rt></ruby>し、<ruby>作業内容<rt>さぎょうないよう</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>する。", textMY: "ထုတ်လုပ်မှုဌာနသည် QA အတွက် အဓိကကျသဖြင့် လုပ်ငန်းစံနှုန်းများကိုသုံး၍ အလုပ်အကြောင်းအရာကို တိကျစွာ အသိပေးရမည်။" },
      { id: 3, textJP: "(3) <ruby>外注品<rt>がいちゅうひん</rt></ruby>および<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>、<ruby>工程内<rt>こうていない</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>などの<ruby>判定基準<rt>はんていきじゅん</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>に<ruby>定<rt>さだ</rt></ruby>めておく。", textMY: "ပြင်ပပစ္စည်း၊ ဝယ်ယူပစ္စည်းနှင့် လုပ်ငန်းစဉ်အတွင်း စစ်ဆေးမှုများအတွက် အောင်/ရှုံး စံနှုန်းများကို ရှင်းလင်းစွာ သတ်မှတ်ထားရမည်။" },
      { id: 4, textJP: "(4) <ruby>製造設備<rt>せいぞうせつび</rt></ruby>・<ruby>測定機器<rt>そくていきき</rt></ruby>は、<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>一定<rt>いってい</rt></ruby>の<ruby>水準<rt>すいじゅん</rt></ruby>に<ruby>保<rt>たも</rt></ruby>つために、<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>維持管理<rt>いじかんり</rt></ruby>する。", textMY: "စက်ပစ္စည်းများနှင့် တိုင်းတာရေးကိရိယာများကို အရည်အသွေးမှန်စေရန် စဉ်ဆက်မပြတ် ထိန်းသိမ်းစစ်ဆေး (Maintenance/Calibration) ရမည်။" },
      { id: 5, textJP: "(5) <ruby>品質管理<rt>ひんしつかんり</rt></ruby>の<ruby>質<rt>しつ</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるために、<ruby>技術者<rt>ぎじゅつしゃ</rt></ruby>や<ruby>技能者<rt>ぎのうしゃ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>専門的<rt>せんもんてき</rt></ruby>な<ruby>教育・訓練<rt>きょういく・くんれん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "အရည်အသွေးမြှင့်တင်ရန်အတွက် နည်းပညာရှင်များနှင့် အလုပ်သမားများကို အထူးပြုသင်တန်းများ ပေးရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 外注品管理 (Outsourced Goods)",
      reasonMY: "ပြင်ပစက်ရုံမှ ပစ္စည်းများကို လက်ခံရာတွင် ပညာပေးခြင်း (Education) သာမက လက်ခံစစ်ဆေးခြင်း (Receiving Inspection) ကိုပါ လုပ်ဆောင်ရမည်။ ဤနှစ်ခုအနက် 'တစ်ခုခု' သာ လုပ်ဆောင်ရမည်ဆိုခြင်းမှာ မလုံလောက်ပါ။ PDF ရှိ Scribble အရ 'Record...' ဟုပါရှိသည့်အတိုင်း မှတ်တမ်းအထောက်အထား (Certificate/Inspection record) ပါ ရှိရန် လိုအပ်သည်။",
      memoryTipMY: "ပြင်ပပစ္စည်းဆိုလျှင် စစ်ဆေးခြင်း (Inspection) ကို မဖြစ်မနေ လုပ်ရမည်။"
    }
  },
  {
    id: "3-6",
    questionJP: "<ruby>統計的品質管理<rt>とうけいてきひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စာရင်းအင်းနည်းဖြင့် အရည်အသွေးထိန်းချုပ်ခြင်း (SQC) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>近代的な品質管理<rt>きんだいてきなひんしつかんり</rt></ruby>は、<ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>している。", textMY: "ခေတ်မီအရည်အသွေးစီမံမှုတွင် စာရင်းအင်းနည်းပညာ (Statistical method) များကို အသုံးပြုသည်။" },
      { id: 2, textJP: "(2) <ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>とは、<ruby>収集<rt>しゅうしゅう</rt></ruby>したデータの<ruby>傾向<rt>けいこう</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>するための<ruby>手法<rt>しゅほう</rt></ruby>であり、「QC 7 つ<ruby>道具<rt>どうぐ</rt></ruby>」などがよく<ruby>用いられる<rt>もちいられる</rt></ruby>。", textMY: "စာရင်းအင်းနည်းဆိုသည်မှာ ဒေတာများ၏ အလားအလာကို သိရှိရန်ဖြစ်ပြီး 'QC 7 Tools' များကို အသုံးများသည်။" },
      { id: 3, textJP: "(3) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>は、<ruby>一部<rt>いちぶ</rt></ruby>のデータをもとに<ruby>集団全体<rt>しゅうだんぜんたい</rt></ruby>の<ruby>姿<rt>すがた</rt></ruby>を<ruby>推定<rt>すいてい</rt></ruby>するものである。", textMY: "နမူနာစစ်ဆေးခြင်း (Sampling) သည် အစိတ်အပိုင်းတစ်ခုကိုကြည့်၍ တစ်ခုလုံး၏ အခြေအနေကို ခန့်မှန်းခြင်းဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>は、<ruby>個々<rt>ここ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>の<ruby>測定値<rt>そくていち</rt></ruby>がばらばらで、<ruby>製品全体<rt>せいひんぜんたい</rt></ruby>のバラツキを<ruby>特定<rt>とくてい</rt></ruby>の<ruby>数値<rt>すうち</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すことができない<ruby>場合<rt>ばあい</rt></ruby>でも、<ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby>ことで<ruby>適用<rt>てきよう</rt></ruby>することができる。", textMY: "နမူနာစစ်ဆေးခြင်းသည် ထုတ်ကုန်တစ်ခုစီ၏ တန်ဖိုးများ ကွဲပြားနေပြီး တစ်ခုလုံး၏ ကွဲပြားမှုကို ကိန်းဂဏန်းဖြင့် မဖော်ပြနိုင်လျှင်ပင် စာရင်းအင်းနည်းဖြင့် အသုံးပြုနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>計量値データ<rt>けいりょうちデータ</rt></ruby>の多くは<ruby>正規分布<rt>せいきぶんぷ</rt></ruby>となり、<ruby>計数値データ<rt>けいすうちデータ</rt></ruby>は<ruby>二項分布<rt>にこうぶんぷ</rt></ruby>になることが<ruby>知<rt>し</rt></ruby>られている。", textMY: "တိုင်းတာ၍ရသော ဒေတာ (Measurable) များမှာ Normal distribution ဖြစ်လေ့ရှိပြီး၊ ရေတွက်၍ရသော ဒေတာ (Countable) များမှာ Binomial distribution ဖြစ်လေ့ရှိသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 統計的推測 (Statistical Inference)",
      reasonMY: "နမူနာစစ်ဆေးခြင်း (Sampling) တွင် ဒေတာများ၏ ကွဲပြားမှု (Dispersion/Variance) ကို 'ကိန်းဂဏန်းဖြင့် ဖော်ပြနိုင်မှသာ' (数値で表すことができる) စာရင်းအင်းနည်းပညာကို အသုံးပြု၍ တစ်ခုလုံး၏ အခြေအနေကို မှန်ကန်စွာ ခန့်မှန်းနိုင်မည်ဖြစ်သည်။ မဖော်ပြနိုင်ပါက SQC ကို သုံး၍ မရပါ။",
      memoryTipMY: "ဒေတာကို ကိန်းဂဏန်း (Numbers) ဖြင့် ဖော်ပြနိုင်မှ စာရင်းအင်းနည်းကို သုံးနိုင်သည်။"
    }
  },
  {
    id: "3-7",
    questionJP: "<ruby>品質管理手法<rt>ひんしつかんりしゅほう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いたデータ<ruby>分析<rt>ぶんせき</rt></ruby>および、データ<ruby>採取<rt>さいしゅ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေးထိန်းချုပ်မှု နည်းစနစ်များဖြင့် ဒေတာခွဲခြမ်းစိတ်ဖြာခြင်းနှင့် ကောက်ယူခြင်းဆိုင်ရာ မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質管理活動<rt>ひんしつかんりかつどう</rt></ruby>において、<ruby>現状<rt>げんじょう</rt></ruby>を<ruby>正確<rt>せいかく</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>するとともに、<ruby>客観的<rt>きゃっかんてき</rt></ruby>なデータとして<ruby>表<rt>あらわ</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "အရည်အသွေးထိန်းချုပ်မှုတွင် လက်ရှိအခြေအနေကို တိကျစွာ သိရှိရန်နှင့် ဓမ္မဓိဋ္ဌာန်ကျသော (Objective) ဒေတာများအဖြစ် ဖော်ပြရန် လိုအပ်သည်။" },
      { id: 2, textJP: "(2) <ruby>母集団<rt>ぼしゅうだん</rt></ruby>の<ruby>姿<rt>すがた</rt></ruby>を<ruby>正確<rt>せいかく</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>するためには、<ruby>作為的<rt>さいてき</rt></ruby>にデータを<ruby>採取<rt>さいしゅ</rt></ruby>してはならず、<ruby>無作為<rt>むさくい</rt></ruby>にデータを<ruby>採取<rt>さいしゅ</rt></ruby>（ランダムサンプリング）する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "တစ်ခုလုံး၏ အခြေအနေကို မှန်ကန်စွာ သိရန်အတွက် ရွေးချယ်ကောက်ယူခြင်း (Biased) မလုပ်ဘဲ၊ ကျပန်းစနစ် (Random sampling) ဖြင့် ကောက်ယူရမည်။" },
      { id: 3, textJP: "(3) <ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>連続<rt>れんぞく</rt></ruby>して<ruby>生産<rt>せいさん</rt></ruby>されるなどのことが<ruby>生<rt>しょう</rt></ruby>じないように、データは<ruby>迅速<rt>じんそく</rt></ruby>かつ<ruby>正確<rt>せいかく</rt></ruby>に<ruby>処理<rt>しょり</rt></ruby>する。", textMY: "ချို့ယွင်းချက်များ ဆက်တိုက်မဖြစ်စေရန်အတွက် ဒေတာများကို မြန်ဆန်တိကျစွာ စီမံရမည်။" },
      { id: 4, textJP: "(4) データには<ruby>計量値<rt>けいりょうち</rt></ruby>と<ruby>計数値<rt>けいすうち</rt></ruby>がある。<ruby>両者<rt>りょうしゃ</rt></ruby>は<ruby>数値<rt>すうち</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じであるが、<ruby>採取<rt>さいしゅ</rt></ruby>や<ruby>処理<rt>しょり</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる。", textMY: "ဒေတာတွင် Measurable နှင့် Countable ဟူ၍ ရှိသည်။ ၎င်းနှစ်ခုသည် ကိန်းဂဏန်းသဘာဝချင်း တူသော်လည်း ကောက်ယူပုံနှင့် စီမံပုံ နည်းလမ်းများ ကွဲပြားသည်။" },
      { id: 5, textJP: "(5) <ruby>測定誤差<rt>そくていごさ</rt></ruby>など、データには<ruby>誤差<rt>ごさ</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる<ruby>要因<rt>よういん</rt></ruby>が<ruby>存在<rt>そんざい</rt></ruby>することを<ruby>認識<rt>にんしき</rt></ruby>しておく<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "တိုင်းတာမှုအမှား (Error) စသည့် အချက်များကြောင့် ဒေတာတွင် အမြဲတမ်း အနည်းငယ် လွဲချော်မှုရှိနိုင်သည်ကို သတိပြုရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 計量値 vs 計数値 (Variable vs Attribute)",
      reasonMY: "計量値 (Measurable - အတိုင်းအတာ) နှင့် 計数値 (Countable - အရေအတွက်) တို့သည် ကိန်းဂဏန်းသဘာဝ (Numerical nature) လုံးဝ မတူညီကြပါ။ တိုင်းတာရသော တန်ဖိုးများသည် အဆက်မပြတ် (Continuous) ဖြစ်ပြီး၊ ရေတွက်ရသော တန်ဖိုးများသည် သီးခြား (Discrete) ဖြစ်သည်။",
      memoryTipMY: "ကိန်းဂဏန်းသဘာဝ (Nature of numbers) ချင်း မတူပါ။"
    }
  },
  {
    id: "3-8",
    questionJP: "<ruby>特性<rt>とくせい</rt></ruby> x, y の<ruby>散布図<rt>さんぷず</rt></ruby>とその<ruby>相関関係<rt>そうかんかんけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဒေတာ x နှင့် y တို့၏ 散布図 (Scatter Plot) နှင့် ၎င်းတို့၏ ဆက်နွယ်မှု (Correlation) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) A には、<ruby>強<rt>つよ</rt></ruby>い<ruby>正<rt>せい</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: "ပုံ A တွင် ပြင်းထန်သော အပေါင်းလက္ခဏာဆောင်သည့် ဆက်နွယ်မှု (Strong Positive Correlation) ရှိသည်။" },
      { id: 2, textJP: "(2) B には、<ruby>強<rt>つよ</rt></ruby>い<ruby>負<rt>ふ</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: "ပုံ B တွင် ပြင်းထန်သော အနုတ်လက္ခဏာဆောင်သည့် ဆက်နွယ်မှု (Strong Negative Correlation) ရှိသည်။" },
      { id: 3, textJP: "(3) C には、<ruby>弱<rt>よわ</rt></ruby>い<ruby>正<rt>せい</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: "ပုံ C တွင် အားနည်းသော အပေါင်းလက္ခဏာဆောင်သည့် ဆက်နွယ်မှု (Weak Positive Correlation) ရှိသည်။" },
      { id: 4, textJP: "(4) D には、<ruby>弱<rt>よわ</rt></ruby>い<ruby>負<rt>ふ</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: "ပုံ D တွင် အားနည်းသော အနုတ်လက္ခဏာဆောင်သည့် ဆက်နွယ်မှု (Weak Negative Correlation) ရှိသည်။" },
      { id: 5, textJP: "(5) E には、<ruby>相関<rt>そうかん</rt></ruby>がない。", textMY: "ပုံ E တွင် မည်သည့်ဆက်နွယ်မှုမျှ မရှိပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 非線形相関 (Non-linear Correlation)",
      reasonMY: "ပုံ E တွင် အမှတ်အသားများသည် မျဉ်းဖြောင့်ပုံစံ (Linear) မဟုတ်သော်လည်း ခုံးသောပုံစံ (Curvilinear) ဖြင့် စနစ်တကျ ရှိနေသောကြောင့် ၎င်းကို 'ဆက်နွယ်မှုမရှိ' ဟု မဆိုနိုင်ပါ။ ၎င်းတွင် Non-linear correlation ရှိနေသည်။",
      memoryTipMY: "ပုံစံတစ်ခုခု (Curve) ဖြစ်နေလျှင် ဆက်နွယ်မှု (Correlation) ရှိသည်ဟု သတ်မှတ်သည်။"
    }
  },
  {
    id: "3-9",
    questionJP: "<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>と OC <ruby>曲線<rt>きょくせん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "နမူနာစစ်ဆေးခြင်း (Sampling) နှင့် OC Curve ဆိုင်ရာ မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ロットの<ruby>不良率<rt>ふりょうりつ</rt></ruby>を<ruby>横軸<rt>よこじく</rt></ruby>に、ロットが<ruby>合格<rt>ごうかく</rt></ruby>する<ruby>確率<rt>かくりつ</rt></ruby>を<ruby>縦軸<rt>たてじく</rt></ruby>にとり、この<ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>したものを OC <ruby>曲線<rt>きょくせん</rt></ruby>という。", textMY: "Lot ၏ အမှားနှုန်းကို အလျားလိုက်ဝင်ရိုး (X) နှင့် အောင်နိုင်ခြေကို ဒေါင်လိုက်ဝင်ရိုး (Y) တွင် ထားရှိသော မျဉ်းကွေးကို OC Curve ဟု ခေါ်သည်။" },
      { id: 2, textJP: "(2) OC <ruby>曲線<rt>きょくせん</rt></ruby>は、<ruby>抜取検査方式<rt>ぬきとりけんさほうしき</rt></ruby>が<ruby>決<rt>き</rt></ruby>まれば、それに対して<ruby>固有<rt>こゆう</rt></ruby>のものに<ruby>決<rt>き</rt></ruby>まる。", textMY: "စစ်ဆေးမှုနည်းလမ်းကို သတ်မှတ်လိုက်သည်နှင့် OC Curve သည်လည်း အလိုအလျောက် သီးခြားစီ သတ်မှတ်ပြီးသား ဖြစ်သွားသည်။" },
      { id: 3, textJP: "(3) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>では、<ruby>合否判定基準<rt>ごうひはんていきじゅん</rt></ruby>を<ruby>厳<rt>きび</rt></ruby>しく<ruby>設定<rt>せってい</rt></ruby>すれば、<ruby>不良率<rt>ふりょうりつ</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>い“<ruby>良<rt>よ</rt></ruby>いロット”が<ruby>不合格<rt>ふごうかく</rt></ruby>となることや、<ruby>不良率<rt>ふりょうりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い“<ruby>悪<rt>わる</rt></ruby>いロット”が<ruby>合格<rt>ごうかく</rt></ruby>となることは<ruby>回避<rt>かいひ</rt></ruby>される。", textMY: "နမူနာစစ်ဆေးခြင်းတွင် စံနှုန်းကို တင်းကြပ်လိုက်ပါက အမှားနည်းသော Lot မအောင်မြင်ခြင်းနှင့် အမှားများသော Lot အောင်မြင်သွားခြင်းတို့ကို လုံးဝရှောင်ရှားနိုင်သည်ဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) OC <ruby>曲線<rt>きょくせん</rt></ruby>を<ruby>観察<rt>かんさつ</rt></ruby>することによって、ある<ruby>不良率<rt>ふりょうりつ</rt></ruby>のロットがどれくらいの<ruby>割合<rt>わりあい</rt></ruby>で<ruby>合格<rt>ごうかく</rt></ruby>になるかを知ることができる。", textMY: "OC Curve ကိုကြည့်ခြင်းဖြင့် အမှားနှုန်းတစ်ခုရှိသော Lot ၏ အောင်နိုင်ခြေ မည်မျှရှိသည်ကို သိရှိနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>において、“<ruby>良<rt>よ</rt></ruby>いロット”を“<ruby>悪<rt>わる</rt></ruby>いロット”とみなす<ruby>危険性<rt>きけんせい</rt></ruby>を<ruby>生産者危険<rt>せいさんしゃきけん</rt></ruby>といい、“<ruby>悪<rt>わる</rt></ruby>いロット”を“<ruby>良<rt>よ</rt></ruby>いロット”とみなす<ruby>危険性<rt>きけんせい</rt></ruby>を<ruby>消費者危険<rt>しょうひしゃきけん</rt></ruby>という。", textMY: "ကောင်းသော Lot ကို အမှားအဖြစ် ဆုံးဖြတ်မိခြင်းကို Producer's Risk ဟုခေါ်ပြီး၊ မကောင်းသော Lot ကို အမှန်အဖြစ် ဆုံးဖြတ်မိခြင်းကို Consumer's Risk ဟု ခေါ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 抜取検査の限界",
      reasonMY: "နမူနာစစ်ဆေးခြင်း (Sampling Inspection) တွင် မည်မျှပင် စံနှုန်းကို တင်းကြပ်စေကာမူ စာရင်းအင်းသဘောတရားအရ အမှားဖြစ်နိုင်ခြေ (Producer/Consumer Risk) ကို 'လုံးဝ' (回避される) ရှောင်ရှားနိုင်ခြင်း မရှိပါ။",
      memoryTipMY: "နမူနာစစ်ဆေးခြင်းတွင် အမှားဖြစ်နိုင်ခြေ အမြဲတမ်း ရှိနေပါသည်။"
    }
  },
  {
    id: "3-10",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိ၏ ဓာတုဖွဲ့စည်းပုံ စမ်းသပ်ခြင်း (Chemical Analysis) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>から<ruby>採取<rt>さいしゅ</rt></ruby>した<ruby>試料<rt>しりょう</rt></ruby>を<ruby>化学分析<rt>かがくぶんせき</rt></ruby>し、<ruby>鋼材中<rt>こうざいちゅう</rt></ruby>に<ruby>含まれる代表的<rt>ふくまれるだいひょうてき</rt></ruby>な<ruby>化学成分<rt>かがくせいぶん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>を<ruby>調べる試験<rt>しらべるしけん</rt></ruby>である。", textMY: "ဓာတုစစ်ဆေးမှုဆိုသည်မှာ သံမဏိနမူနာကို ယူ၍ ၎င်းတွင်ပါဝင်သော အဓိက ဓာတုပစ္စည်းများ၏ ပမာဏကို စစ်ဆေးခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>には、<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>と<ruby>製品分析<rt>せいひんぶんせき</rt></ruby>があり、<ruby>両者<rt>りょうしゃ</rt></ruby>は<ruby>試料<rt>しりょう</rt></ruby>の<ruby>採取方法<rt>さいしゅほうほう</rt></ruby>と<ruby>採取時期<rt>さいしゅじき</rt></ruby>が<ruby>異なる<rt>ことなる</rt></ruby>。", textMY: "စစ်ဆေးမှုတွင် အရည်ဖျော်ချိန် (Ladle analysis) နှင့် ထုတ်ကုန်ဖြစ်ချိန် (Check analysis) ဟူ၍ ရှိပြီး၊ ကောက်ယူပုံနှင့် အချိန် ကွဲပြားသည်။" },
      { id: 3, textJP: "(3) <ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>平均的<rt>へいきんてき</rt></ruby>な<ruby>化学成分<rt>かがくせいぶん</rt></ruby>を<ruby>示す<rt>しめす</rt></ruby>。<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>される<ruby>化学成分<rt>かがくせいぶん</rt></ruby>は、<ruby>通常<rt>つうじょう</rt></ruby>、<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>によるものである。", textMY: "Ladle analysis သည် ပျမ်းမျှဖွဲ့စည်းပုံကိုပြပြီး၊ Mill Sheet (規格品証明書) ပေါ်ရှိ တန်ဖိုးများသည် အများအားဖြင့် Ladle analysis မှ ရလဒ်များ ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>製品分析<rt>せいひんぶんせき</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>は、<ruby>必<rt>かなら</rt></ruby>ずしも<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>とは<ruby>一致<rt>いっち</rt></ruby>せず、また、<ruby>試料相互間<rt>しりょうそうごかん</rt></ruby>でも<ruby>異なる値<rt>ことなるあたい</rt></ruby>となることがある。", textMY: "ထုတ်ကုန်စစ်ဆေးမှု (Check analysis) ရလဒ်သည် Ladle analysis နှင့် အမြဲတမ်း တူညီရန် မလိုအပ်သလို၊ နမူနာအချင်းချင်းလည်း အနည်းငယ် ကွဲပြားနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>または<ruby>原品証明書<rt>げんぴんしょうめいしょ</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>する。<ruby>鋼種<rt>こうしゅ</rt></ruby>が<ruby>不明<rt>ふめい</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>や<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>疑義<rt>ぎぎ</rt></ruby>が<ruby>生じた場合<rt>しょうじたばあい</rt></ruby>は、<ruby>信頼性<rt>しんらいせい</rt></ruby>の<ruby>高い溶鋼分析<rt>たかいようこうぶんせき</rt></ruby>により<ruby>化学成分<rt>かがくせいぶん</rt></ruby>を<ruby>調べる<rt>しらべる</rt></ruby>。", textMY: "အမျိုးအစားမသေချာလျှင် သို့မဟုတ် သံသယရှိလျှင် ပိုမိုယုံကြည်ရသော Ladle analysis (溶鋼分析) ဖြင့် ထပ်မံစစ်ဆေးရမည်ဟု ဆိုခြင်း။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製品分析 (Product Analysis)",
      reasonMY: "အဆောက်အဦဆောက်လုပ်သည့် နေရာတွင် သံမဏိအမျိုးအစားကို ပြန်လည်စစ်ဆေးလိုပါက၊ လက်ရှိရှိနေသော ပစ္စည်းမှ နမူနာယူ၍ စစ်ဆေးသော 'ထုတ်ကုန်စစ်ဆေးမှု' (製品分析 - Check analysis) ကိုသာ လုပ်ဆောင်နိုင်သည်။ 'အရည်ဖျော်ချိန်စစ်ဆေးမှု' (溶鋼分析) ကို ပြန်လုပ်ရန်မှာ မဖြစ်နိုင်ပါ။",
      memoryTipMY: "စက်ရုံကထွက်ပြီးသား ပစ္စည်းကိုစစ်ရင် '製品分析' (Check analysis) ပဲ လုပ်လို့ရတယ်။"
    }
  },
  {
    id: "3-11",
    questionJP: "<ruby>材料試験<rt>ざいりょうしけん</rt></ruby>とその<ruby>説明<rt>せつめい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းစမ်းသပ်မှုများနှင့် ၎င်းတို့၏ ရှင်းလင်းချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>引張試験<rt>ひっぱりしけん</rt></ruby>においては、<ruby>鋼材内部<rt>こうざいないぶ</rt></ruby>に<ruby>介在物<rt>かいざいぶつ</rt></ruby>、<ruby>偏析<rt>へんせき</rt></ruby>、<ruby>ラミネーション<rt>らみねーしょん</rt></ruby>などが<ruby>存在<rt>そんざい</rt></ruby>すると、その<ruby>程度<rt>ていど</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>破断面<rt>はだんめん</rt></ruby>に<ruby>層状<rt>そうじょう</rt></ruby>となって<ruby>観察<rt>かんさつ</rt></ruby>される。", textMY: "ဆွဲအားစမ်းသပ်မှုတွင် သံမဏိအတွင်း၌ အညစ်အကြေးများ သို့မဟုတ် lamination ရှိပါက ပျက်စီးသွားသော မျက်နှာပြင်တွင် အလွှာလိုက် တွေ့မြင်နိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>曲げ試験<rt>まげしけん</rt></ruby>は、<ruby>試験片<rt>しけんへん</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>の<ruby>内側半径<rt>うちがわはんけい</rt></ruby>で<ruby>規定<rt>きてい</rt></ruby>の<ruby>角度<rt>かくど</rt></ruby>になるまで<ruby>折り曲げ<rt>おりまげ</rt></ruby>、<ruby>欠陥<rt>けっかん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>観察<rt>かんさつ</rt></ruby>し、<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>変形能力<rt>へんけいのうりょく</rt></ruby>を<ruby>調べる試験<rt>しらべるしけん</rt></ruby>である。", textMY: "Bending test သည် သတ်မှတ်ထားသော ထောင့်အတိုင်း ကွေးညွှတ်ပြီး အက်ကွဲမှု ရှိမရှိကိုကြည့်ကာ ပစ္စည်း၏ ပုံပျက်ခံနိုင်စွမ်းကို စစ်ဆေးခြင်းဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>一般構造用圧延鋼材<rt>いっぱんこうぞうようあつえんこうざい</rt></ruby>では、「<ruby>現在製造<rt>げんざいせいぞう</rt></ruby>されている<ruby>材質<rt>ざいしつ</rt></ruby>レベルからみて、1 <ruby>号試験片<rt>ごうしけんへん</rt></ruby>による<ruby>曲げ試験<rt>まげしけん</rt></ruby>では、き裂を<ruby>生<rt>しょう</rt></ruby>じることはないため、<ruby>規定<rt>きてい</rt></ruby>しなくても<ruby>問題<rt>もんだい</rt></ruby>が<ruby>無い<rt>ない</rt></ruby>」として<ruby>当該<rt>とうがい</rt></ruby> JIS において、<ruby>曲げ試験<rt>まげしけん</rt></ruby>は<ruby>要求<rt>ようきゅう</rt></ruby>されていない。", textMY: "SS material များသည် လက်ရှိ နည်းပညာအရ အရည်အသွေး ကောင်းမွန်သဖြင့် Bending test တွင် ကွဲအက်ခြင်း မရှိနိုင်သောကြောင့် JIS တွင် ဤစမ်းသပ်မှုကို မလိုအပ်ဟု သတ်မှတ်ထားသည်ဟူသော အချက်။" },
      { id: 4, textJP: "(4) <ruby>シャルピー衝撃試験<rt>しゃるぴーしょうげきしけん</rt></ruby>は、<ruby>試験片<rt>しけんへん</rt></ruby>をハンマで<ruby>打撃<rt>だげき</rt></ruby>して<ruby>破断<rt>はだん</rt></ruby>させ、<ruby>破断<rt>はだん</rt></ruby>に<ruby>要<rt>よう</rt></ruby>したエネルギーを<ruby>測定<rt>そくてい</rt></ruby>するものである。", textMY: "Charpy impact test သည် နမူနာတုံးကို ဆွဲလွှဲတုတ်ဖြင့် ရိုက်ချိုးပြီး ပျက်စီးရန် လိုအပ်သော စွမ်းအင်ကို တိုင်းတာခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>シャルピー衝撃試験<rt>しゃるぴーしょうげきしけん</rt></ruby>では、<ruby>吸収<rt>きゅうしゅう</rt></ruby>したエネルギー<ruby>量<rt>りょう</rt></ruby>や<ruby>破断面<rt>はだんめん</rt></ruby>の<ruby>観察<rt>かんさつ</rt></ruby>により、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>脆性・靭性<rt>ぜいせい・じんせい</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>することができる。", textMY: "ဤစမ်းသပ်မှုမှရသော ဒေတာများကို ကြည့်၍ သံမဏိ၏ Toughness (ကြံ့ခိုင်မှု) နှင့် Brittle (ကြွပ်ဆတ်မှု) တို့ကို သိရှိနိုင်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - JIS 規格と曲げ試験",
      reasonMY: "JIS စံနှုန်းအရ သံမဏိပစ္စည်းများ (SS, SM, SN စသည်) အတွက် Bending test (曲げ試験) ကို မဖြစ်မနေ လုပ်ဆောင်ရန် သတ်မှတ်ထားပါသည်။ 'JIS တွင် မလိုအပ်ပါ' ဆိုခြင်းမှာ မှားယွင်းသော အချက်ဖြစ်သည်။",
      memoryTipMY: "Bending test သည် သံမဏိအားလုံးအတွက် JIS ၏ အခြေခံ လိုအပ်ချက် ဖြစ်သည်။"
    }
  },
  {
    id: "3-12",
    questionJP: "<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်သူ၏ ပစ္စည်းဝယ်ယူမှု စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>は、<ruby>規格品証明書等<rt>きかくひんしょうめいしょとう</rt></ruby>と<ruby>現品<rt>げんぴん</rt></ruby>との<ruby>照合<rt>しょうごう</rt></ruby>、<ruby>外観<rt>がいかん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>、<ruby>形状・寸法<rt>けいじょう・すんぽう</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>、<ruby>員数<rt>いんずう</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>などを<ruby>行<rt>おこな</rt></ruby>う。", textMY: "ဝယ်ယူမှုစစ်ဆေးရာတွင် Mill Sheet နှင့် ပစ္စည်းတိုက်ဆိုင်စစ်ဆေးခြင်း၊ အပြင်ပန်း၊ ပုံသဏ္ဍာန်၊ အရွယ်အစားနှင့် အရေအတွက်တို့ကို စစ်ဆေးရမည်။" },
      { id: 2, textJP: "(2) <ruby>切板<rt>きりいた</rt></ruby>などの<ruby>中間加工部品<rt>ちゅうかんかこうぶひん</rt></ruby>については、<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>による<ruby>確認<rt>かくにん</rt></ruby>に<ruby>代<rt>か</rt></ruby>えて、<ruby>現品<rt>げんぴん</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>っている<ruby>材料識別表示記号<rt>ざいりょうしきべつひょうじきごう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することで、<ruby>材質<rt>ざいしつ</rt></ruby>を<ruby>保証<rt>ほしょう</rt></ruby>することができる。", textMY: "ဖြတ်တောက်ပြီးသား ပြားများကဲ့သို့သော ပစ္စည်းများအတွက် Mill Sheet အစား ပစ္စည်းပေါ်ရှိ အမှတ်အသားများကို ကြည့်ရုံဖြင့် အရည်အသွေးကို အာမခံနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>材料<rt>ざいりょう</rt></ruby>は、<ruby>不合格品<rt>ふごうかくひん</rt></ruby>であることを<ruby>明示<rt>めいじ</rt></ruby>し、<ruby>誤<rt>あやま</rt></ruby>って<ruby>使用<rt>しよう</rt></ruby>されることがないように<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "မအောင်မြင်သောပစ္စည်းများကို အမှတ်အသားပြုပြီး မှားယွင်းအသုံးမပြုမိစေရန် စီမံခန့်ခွဲရမည်။" },
      { id: 4, textJP: "(4) <ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>で、<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>との<ruby>照合・確認<rt>しょうごう・かくにん</rt></ruby>が<ruby>不可能<rt>ふかのう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>正<rt>ただ</rt></ruby>しい<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えるか、<ruby>材料試験<rt>ざいりょうしけん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>明<rt>あき</rt></ruby>らかにする。", textMY: "Mill Sheet နှင့် တိုက်ဆိုင်ရန် မဖြစ်နိုင်ပါက ပစ္စည်းအသစ်လဲခြင်း သို့မဟုတ် ပစ္စည်းစမ်းသပ်မှု (Lab test) ပြုလုပ်ပြီး အရည်အသွေးကို အတည်ပြုရမည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>材料<rt>ざいりょう</rt></ruby>や<ruby>外注品<rt>がいちゅうひん</rt></ruby>の<ruby>受け入れ<rt>うけいれ</rt></ruby>にあたり、<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>を<ruby>自ら実施<rt>みずからじっし</rt></ruby>するか、もしくは、<ruby>外注業者<rt>がいちゅうぎょうしゃ</rt></ruby>が<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>していることを<ruby>何<rt>なに</rt></ruby>らかの<ruby>手段<rt>しゅだん</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>しておかなければならない。", textMY: "ထုတ်လုပ်သူသည် ပစ္စည်းများကို ကိုယ်တိုင်စစ်ဆေးခြင်း သို့မဟုတ် ပြင်ဆင်သူမှ စနစ်တကျ စစ်ဆေးထားကြောင်း တစ်နည်းနည်းဖြင့် အတည်ပြုထားရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 材料の保証",
      reasonMY: "ပစ္စည်းပေါ်ရှိ အမှတ်အသား (Identification mark) ကို ကြည့်ရုံဖြင့် အရည်အသွေးကို 'အာမခံ' (保証) ရန် မလုံလောက်ပါ။ ၎င်းသည် Mill Sheet ပါ အချက်အလက်များနှင့် တိုက်ဆိုင်ကိုက်ညီမှု ရှိမှသာ ပစ္စည်း၏ အရည်အသွေးကို အာမခံနိုင်မည် ဖြစ်သည်။",
      memoryTipMY: "ပစ္စည်းအမှတ်အသား + Mill Sheet (စာရွက်) နှစ်မျိုးစလုံး လိုအပ်သည်။"
    }
  },
  {
    id: "3-13",
    questionJP: "「JASS 6」の<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>と<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ကြားဖြတ်စစ်ဆေးမှုနှင့် လက်ခံစစ်ဆေးမှုဆိုင်ရာ မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>検査項目、方法、合否判定基準、実施時期<rt>けんさこうもく、ほうほう、ごうひはんていきじゅん、じっしじき</rt></ruby>などは<ruby>特記<rt>とっき</rt></ruby>による。", textMY: "တည်ဆောက်သူမှ ကြားဖြတ်စစ်ဆေးမှုလုပ်ပါက Spec အရ လုပ်ဆောင်ရမည်။ စစ်ဆေးမည့်အချက်၊ နည်းလမ်း၊ အောင်/ရှုံး စံနှုန်းတို့မှာ Spec ပေါ် မူတည်သည်။" },
      { id: 2, textJP: "(2) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>の<ruby>検査方法<rt>けんさほうほう</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>とし、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>書類検査<rt>しょるいけんさ</rt></ruby>」による。", textMY: "စာရွက်စစ်ဆေးမှုအတွက် Spec မပါပါက စက်ရုံတွင်းစစ်ဆေးမှုရလဒ်ဇယားကို စစ်ဆေးရမည်ဖြစ်ပြီး JASS 6 စံနှုန်းအတိုင်း လုပ်ဆောင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>」、「<ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>」あるいはその<ruby>他<rt>た</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>によるものとし、その<ruby>種類<rt>しゅるい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。", textMY: "ပစ္စည်းစစ်ဆေးမှု (Object inspection) လုပ်ပါက JASS 6 ရှိ နည်းလမ်း ၁၊ ၂ သို့မဟုတ် အခြားနည်းလမ်းများကို Spec အလိုက် သုံးရမည်။" },
      { id: 4, textJP: "(4) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は、その<ruby>検査項目<rt>けんさこうもく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>全数、対物<rt>ぜんすう、たいぶつ</rt></ruby>による<ruby>寸法検査<rt>すんပေါうけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "စာရွက်စစ်ဆေးမှုတွင် မအောင်မြင်ပါက ထိုအချက်အတွက် ပစ္စည်းအားလုံးကို (100%) အတိုင်းအတာ တိုင်းတာစစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>検査<rt>けんさ</rt></ruby>の<ruby>結果、管理許容差、<rt>けっか、かんりきょようさ</rt></ruby>または<ruby>特記<rt>とっき</rt></ruby>のある<ruby>場合<rt>ばあい</rt></ruby>にはその<ruby>許容差<rt>きょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えて<ruby>不適合<rt>ふてきごう</rt></ruby>となった<ruby>製品<rt>せいひん</rt></ruby>は、<ruby>修正<rt>しゅうせい</rt></ruby>または<ruby>再製作等<rt>さいせいさくとう</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "စစ်ဆေးမှုရလဒ်သည် စံနှုန်း (Tolerance) ကျော်လွန်နေပါက ပြုပြင်ခြင်း သို့မဟုတ် ပြန်လုပ်ခြင်းတို့ကို လုပ်ဆောင်ပြီး ပြန်လည်စစ်ဆေးရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差 (Limit Tolerance)",
      reasonMY: "စစ်ဆေးမှု အောင်/ရှုံး (Pass/Fail) ဆုံးဖြတ်ရာတွင် 'စီမံခန့်ခွဲမှုစံနှုန်း' (管理許容差) ထက် ပိုမိုကျယ်ပြန့်သော 'နောက်ဆုံးကန့်သတ်စံနှုန်း' (限界許容差) ကို ကျော်လွန်မှသာ 'မကိုက်ညီသောထုတ်ကုန်' (不適合) ဟု သတ်မှတ်ခြင်းဖြစ်သည်။ (၅) တွင် 管理 ကို သုံးထားခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "အောင်/ရှုံး (Pass/Fail) ဆုံးဖြတ်လျှင် 限界 (Limit) ကို ကြည့်ရမည်။"
    }
  },
  {
    id: "3-14",
    questionJP: "「JASS 6」の<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>と<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ကြားဖြတ်စစ်ဆေးမှုနှင့် လက်ခံစစ်ဆေးမှုဆိုင်ရာ မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品<rt>せいひん</rt></ruby>の<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>受入検査方法<rt>うけいれけんさほうほう</rt></ruby>には<ruby>書類検査<rt>しょるいけんさ</rt></ruby>と<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>があり、<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。", textMY: "လက်ခံစစ်ဆေးမှုတွင် စာရွက်နှင့် ပစ္စည်းစစ်ဆေးမှုဟူ၍ ရှိပြီး ပစ္စည်းစစ်ဆေးမှုမှာ Spec အရ လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>の<ruby>検査方法<rt>けんさほうほう</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>とし、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>書類検査<rt>しょるいけんさ</rt></ruby>」による。", textMY: "စာရွက်စစ်ဆေးမှုမှာ စက်ရုံတွင်းမှတ်တမ်းများကို JASS 6 စံနှုန်းအတိုင်း စစ်ဆေးခြင်း ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>」、「<ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>」あるいはその<ruby>他<rt>た</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>によるものとし、その<ruby>種類<rt>しゅるい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。", textMY: "ပစ္စည်းစစ်ဆေးမှု နည်းလမ်း ၁၊ ၂ စသည်တို့ကို Spec အလိုက် သတ်မှတ်သုံးစွဲရမည်။" },
      { id: 4, textJP: "(4) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は、その<ruby>検査項目<rt>けんさこうもく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>抜取率 30%<rt>ぬきとりりつさんじゅっぱーせんと</rt></ruby>で、<ruby>対物<rt>たいぶつ</rt></ruby>による<ruby>寸法検査<rt>すんぽうけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "စာရွက်စစ်ဆေးမှုတွင် မအောင်မြင်ပါက ထိုအချက်အတွက် နမူနာ ၃၀% ကို ပစ္စည်းစစ်ဆေးမှု လုပ်ဆောင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>検査<rt>けんさ</rt></ruby>の<ruby>結果、限界許容差、<rt>けっか、げんかいきょようさ</rt></ruby>または<ruby>特記<rt>とっき</rt></ruby>のある<ruby>場合<rt>ばあい</rt></ruby>にはその<ruby>許容差<rt>きょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えて<ruby>不適合<rt>ふてきごう</rt></ruby>となった<ruby>製品<rt>せいひん</rt></ruby>は、<ruby>修正<rt>しゅうせい</rt></reason>または<ruby>再製作等<rt>さいせいさくとう</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "စစ်ဆေးမှုရလဒ်သည် Limit Tolerance ကျော်လွန်နေပါက ပြုပြင်ခြင်း သို့မဟုတ် ပြန်လုပ်ခြင်းတို့ကို လုပ်ဆောင်ပြီး ပြန်စစ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不合格時の処置 (Action when fail)",
      reasonMY: "စာရွက်စစ်ဆေးမှု (書類検査) တွင် မအောင်မြင်ပါက ထိုအချက်အတွက် ကျန်ရှိသော ပစ္စည်းများ 'အားလုံး' (全数検査 - 100%) ကို ပစ္စည်းစစ်ဆေးမှု (対物検査) လုပ်ဆောင်ရမည်။ နမူနာ ၃၀% ဟု ဆိုခြင်းမှာ မလုံလောက်ပါ။",
      memoryTipMY: "စာရွက်မှာ ရှုံးရင် (Fail) -> ပစ္စည်းအားလုံးကို (100%) ပြန်စစ်ရမည်။"
    }
  },
  {
    id: "3-15",
    questionJP: "「JASS 6」の<ruby>社内検査<rt>しゃないけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ စက်ရုံတွင်းစစ်ဆေးမှု (Internal Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は、<ruby>加工<rt>かこう</rt></ruby>の<ruby>各段階<rt>かくだんかい</rt></ruby>で<ruby>社内検査<rt>しゃないけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて、それらの<ruby>結果<rt>けっか</rt></ruby>を<ruby>記録<rt>きろく</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>す。", textMY: "ထုတ်လုပ်သူသည် လုပ်ငန်းစဉ်အဆင့်တိုင်းတွင် စက်ရုံတွင်းစစ်ဆေးမှုကို လုပ်ဆောင်ပြီး လိုအပ်သလို မှတ်တမ်းတင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>のうち、<ruby>製品<rt>せいひん</rt></ruby>の<ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>については、<ruby>検査結果<rt>けんさけっか</rt></ruby>を<ruby>測定寸法<rt>そくていすんぽう</rt></ruby>の<ruby>設計寸法<rt>せっけいすんぽု</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>差<rt>さ</rt></ruby>として<ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>に<ruby>記録<rt>きろく</rt></ruby>する。", textMY: "အတိုင်းအတာစစ်ဆေးမှုတွင် ဒီဇိုင်းနှင့် ကွာခြားချက် (Difference) ကို မှတ်တမ်းတင်ဇယားတွင် ရေးသွင်းရမည်။" },
      { id: 3, textJP: "(3) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>の<ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>において、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>の<ruby>検査項目<rt>けんさこうもく</rt></ruby>は、<ruby>柱<rt>はしら</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ、<ruby>階高<rt>かいだか</rt></ruby>、<ruby>仕口部<rt>しぐちぶ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ、<ruby>柱<rt>はしら</rt></ruby>のせい、<ruby>仕口部<rt>しぐちぶ</rt></ruby>のせい、<ruby>梁<rt>はり</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ、<ruby>梁<rt>はり</rt></ruby>のせいとし、これらの<ruby>項目<rt>こうもく</rt></ruby>について<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>とする。", textMY: "တိုင်/မြားတန်း အရှည်နှင့် အမြင့်စသည့် အချက် ၇ ချက်အတွက် နမူနာကောက်ယူစစ်ဆေးခြင်း (Sampling) ကို လုပ်ဆောင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>のうち、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>については、<ruby>溶接部<rt>ようせつぶ</rt></ruby>のすべてを<ruby>検査対象範囲<rt>けんさたいしょうはんい</rt></ruby>とし、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観<rt>がいかん</rt></ruby>および<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "ဂဟေစစ်ဆေးမှုတွင် ဂဟေနေရာအားလုံး၏ အပြင်ပန်းနှင့် အတွင်းပိုင်းချို့ယွင်းချက်များကို စစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>社内検査要領書<rt>しゃないけんさようりょうしょ</rt></ruby>は、<ruby>通常、製作要領書<rt>つうじょう、せいさくようりょうしょ</rt></ruby>に<ruby>収録<rt>しゅうろく</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>と<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", textMY: "စစ်ဆေးမှုလမ်းညွှန်ကို ထုတ်လုပ်မှုလမ်းညွှန်တွင် ထည့်သွင်းပြီး တည်ဆောက်သူနှင့် ကြီးကြပ်သူတို့၏ အတည်ပြုချက် ရယူရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 寸法検査の範囲 (Scope of Inspection)",
      reasonMY: "တိုင် (Column) နှင့် မြားတန်း (Beam) တို့၏ အတိုင်းအတာ (Dimensions) များသည် အလွန်အရေးကြီးသောကြောင့် စက်ရုံတွင်း စစ်ဆေးမှု (社内検査) တွင် နမူနာကောက်စစ်ခြင်း (抜取) မဟုတ်ဘဲ အားလုံးကို (全数検査 - 100%) စစ်ဆေးရမည်။",
      memoryTipMY: "အတိုင်းအတာ (Dimensions) ကို အားလုံး (100%) စစ်ရမည်။"
    }
  }
];
