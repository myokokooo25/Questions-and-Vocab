import { StudyCardData } from '../types';

export const chapter2021Part1Data: StudyCardData[] = [
  {
    id: "2021-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>骨組<rt>ほねぐみ</rt></ruby>のB<ruby>点<rt>てん</rt></ruby>に<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>すると、<ruby>左側<rt>ひだりがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby>Aには<ruby>左向<rt>ひだりむ</rt></ruby>きの<ruby>水平反力<rt>すいへいはんりょく</rt></ruby>H<sub>A</sub>と<ruby>下向<rt>したむ</rt></ruby>きの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>V<sub>A</sub>が、<ruby>右側<rt>みぎがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby>Eには<ruby>上向<rt>うえむ</rt></ruby>きの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>V<sub>E</sub>が<ruby>生<rt>しょう</rt></ruby>じる。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့်အတိုင်း ဘောင်အဆောက်အဦのB အမှတ်၌ အလျားလိုက်ဝန် P သက်ရောက်သောအခါ、ဘယ်ဘက်ရှိ ထောက်ကန်အမှတ် (Support) A についてဘယ်ဘက်သို့ဦးတည်သော အလျားလိုက်တုံ့ပြန်အား H<sub>A</sub> とအောက်သို့ဦးတည်သော ဒေါင်လိုက်တုံ့ပြန်အား V<sub>A</sub> တို့ ဖြစ်ပေါ်လာမည်ဖြစ်ပြီး、ညာဘက်ရှိ ထောက်ကန်အမှတ် E についてအပေါ်သို့ဦးတည်သော ဒေါင်လိုက်တုံ့ပြန်အား V<sub>E</sub> ဖြစ်ပေါ်လာは။ ဤအခြေအနေ၌、အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>外力<rt>がいりょく</rt></ruby>Pと<ruby>水平反力<rt>すいへいはんりょく</rt></ruby>H<sub>A</sub>の<ruby>大<rt>おお</rt></ruby>きさは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: " P と H<sub>A</sub> のはは" },
      { id: 2, textJP: "(2) <ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>V<sub>A</sub>とV<sub>E</sub>の<ruby>大<rt>おお</rt></ruby>きさは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: " V<sub>A</sub> とV<sub>E</sub> のはは" },
      { id: 3, textJP: "(3) <ruby>柱梁接合部<rt>ちゅうはりせつごうぶ</rt></ruby>D<ruby>点<rt>てん</rt></ruby>は、<ruby>荷重<rt>かじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "と  D は P   は" },
      { id: 4, textJP: "(4) <ruby>支点<rt>してん</rt></ruby>Eは、<ruby>荷重<rt>かじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: " E は P   は" },
      { id: 5, textJP: "(5) <ruby>曲<rt>ま</rt></ruby>げモーメントが<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくなるのはC<ruby>点<rt>てん</rt></ruby>である。", textMY: " (Bending Moment)   C は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 反力 (Reaction Force)",
      reasonMY: "ထောက်ကန်အမှတ် E (Support E) はရိုလာထောက်ကန် (Roller Support) သို့မဟုတ် ပင်ထောက်ကန် (Pin Support) ဖြစ်နိုင်ပြီး、ဒေါင်လိုက်တုံ့ပြန်အား (V_E) သာရှိはဟု ဖော်ပြထားသော်လည်း、ပုံမှန်အားでအဆောက်အဦတစ်ခုလုံးのတည်ငြိမ်မှုအတွက် အလျားလိုက်ရွေ့လျားမှုをထိန်းချုပ်ထားလေ့ရှိは။ သို့သော် ဤမေးခွန်းのရည်ရွယ်ချက်အရ ထောက်ကန်အမှတ်များはအောက်ခြေについてခိုင်မြဲစွာတပ်ဆင်ထားはဟု ယူဆရမည်ဖြစ်ရာ、ညာဘက်သို့ ရွေ့လျားခြင်းမရှိပါ။",
      memoryTipMY: "ထောက်ကန်အမှတ် (Support) များはအလွယ်တကူ မရွေ့နိုင်ဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のようなトラス<ruby>骨組<rt>ほねぐみ</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>等分布荷重<rt>とうぶんぷかじゅう</rt></ruby>について、ア、イ、ウの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくリョク</rt></ruby>の<ruby>組合<rt>くみあ</rt></ruby>わせのうち、<ruby>正<rt>ただ</rt></ruby>しいものはどれか。",
    questionMY: "ပုံについてပြထားသော Truss ဘောင်ပေါ်သို့ သက်ရောက်သည့် ညီညာစွာပျံ့နှံ့နေသောဝန် (Uniformly Distributed Load) とပတ်သက်၍、အ, ဣ, ဥ ဟူသော အစိတ်အပိုင်းများについてဖြစ်ပေါ်လာသည့် ဝင်ရိုးတလျှောက်သက်ရောက်အား (Axial Force) များのပေါင်းစပ်မှုအနက် မှန်ကန်သည့်အရာမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：0 ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: ":  (Compression) : 0 :  (Tension)" },
      { id: 2, textJP: "(2) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：0 ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: ":  (Compression) : 0 :  (Tension)" },
      { id: 3, textJP: "(3) ア：<ruby>引張<rt>ひっぱり</rt></ruby> イ：0 ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: ":  (Tension) : 0 :  (Tension)" },
      { id: 4, textJP: "(4) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：<ruby>圧縮<rt>あっしゅく</rt></ruby> ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: ":  (Compression) :  (Compression) :  (Tension)" },
      { id: 5, textJP: "(5) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：<ruby>圧縮<rt>あっしゅく</rt></ruby> ウ：<ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: ":  (Compression) :  (Compression) :  (Compression)" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - トラス骨組 (Truss Frame)",
      reasonMY: "Truss အဆောက်အဦများについてအပေါ်ဘက်ရှိ အစိတ်အပိုင်းများ (Top Chords) はဖိအား (Compression) をခံရလေ့ရှိပြီး、အောက်ဘက်ရှိ အစိတ်အပိုင်းများ (Bottom Chords) はဆွဲအား (Tension) をခံရလေ့ရှိは။ ဒေါင်လိုက်တိုင် (Vertical Member) 'ဣ' はဤပုံစံについてဝန်မရှိသောအစိတ်အပိုင်း (Zero Force Member) ဖြစ်は။",
      memoryTipMY: "Truss についてအပေါ်ပိုင်းが ဖိအား (Compression)、အောက်ပိုင်းが ဆွဲအား (Tension) ခံရはဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-3",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဆောက်အဦတည်ဆောက်မှုပုံစံဒီဇိုင်း (Structural Design) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>では<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく、<ruby>日常<rt>にちじょう</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>変形<rt>へんけい</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "をについての    を  は" },
      { id: 2, textJP: "(2) 鋼材は高い靭性を有しているため、座屈や脆性破壊が生じなければ大地震時においても優れた耐震性能を発揮する。", textMY: "は  (Toughness)   (Buckling)   (Brittle Fracture) 場合は について   は" },
      { id: 3, textJP: "(3) 許容応力度設計法は、建物に作用する外力に対し、骨組全体が弾性範囲に留まることを目標とする。", textMY: " (Allowable Stress Design Method) は     (Elastic Range) について  は" },
      { id: 4, textJP: "(4) 鉄骨造の建物は鉄筋コンクリート造の建物に比べて自重が大きくなるため、地震時の設計荷重も大きくなる。", textMY: "はRC () と を   は" },
      { id: 5, textJP: "(5) 溶接接合部の品質は構造全体の安全性に大きく影響するため、設計段階から溶接の施工性を考慮することが重要である。", textMY: "のはの    を は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 鉄骨造とRC造 (Steel vs RC)",
      reasonMY: "သံမဏိအဆောက်အဦ (Steel Structure) များはသံကူကွန်ကရစ်အဆောက်အဦ (RC Structure) များထက် をယ်အလေးချိန် (Self-weight) ပိုမိုပေါ့ပါးは။ ထို့ကြောင့် ငလျင်လှုပ်သောအခါ သက်ရောက်မည့် ငလျင်ဒီဇိုင်းဝန် (Seismic Design Load) はRC အဆောက်အဦများထက် ပိုနည်းပါは။",
      memoryTipMY: "Steel はRC ထက် ပေါ့ပါးသでငလျင်ဒဏ်သက်ရောက်မှု ပိုနည်းはဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-4",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>骨組<rt>ほねぐみ</rt></ruby>の<ruby>柱脚<rt>ちゅうきゃく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့်အတိုင်း ဘောင်အဆောက်အဦのတိုင်ခြေ (Column Base) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>露出形式<rt>ろしゅつけいしき</rt></ruby>の<ruby>柱脚<rt>ちゅうきゃく</rt></ruby>である。", textMY: "は  (Exposed Type)  は" },
      { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>軸力<rt>じくりょく</rt></ruby>と<ruby>曲<rt>ま</rt></ruby>げモーメントは、ベースプレートを<ruby>通<rt>とお</rt></ruby>して<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>される。", textMY: "  とをBase Plate   (Foundation)  は" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>するせん<ruby>断力<rt>だんりょく</rt></ruby>は、アンカーボルトで<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>される。", textMY: "   (Shear Force) をAnchor Bolt   は" },
      { id: 4, textJP: "(4) <ruby>柱<rt>はしら</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>引張力<rt>ひっぱりりょく</rt></ruby>は、アンカーボルトで<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>される。", textMY: "   (Tension Force) をAnchor Bolt   は" },
      { id: 5, textJP: "(5) ベースプレートの<ruby>厚<rt>あつ</rt></ruby>さは、<ruby>柱<rt>はしら</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>と<ruby>曲<rt>ま</rt></ruby>げモーメントによって<ruby>決<rt>き</rt></ruby>まる。", textMY: "Base Plate のはのと  は" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ရှင်းလင်းချက် - 露出柱脚 (Exposed Column Base)",
        reasonMY: "Exposed Type Column Base についてတိုင်ပေါ်သို့ သက်ရောက်သော ဖြတ်အား (Shear Force) をအဓိကအားでBase Plate とအုတ်မြစ်ကြားရှိ ပွတ်တိုက်အား (Friction) でသယ်ဆောင်は။ Anchor Bolt များはအဓိကအားでဆွဲအား (Tension Force) をသယ်ဆောင်ရန် ဒီဇိုင်းထုတ်ထားခြင်းဖြစ်は။",
        memoryTipMY: "Shear Force をFriction が သယ်ဆောင်ပြီး、Anchor Bolt が Tension をသယ်ဆောင်はဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-5",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>単純梁<rt>たんじゅんばり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>げモーメント<ruby>図<rt>ず</rt></ruby>として、<ruby>正<rt>ただ</rt></ruby>しいものは、<ruby>次<rt>つぎ</rt></ruby>のうちどれか。ただし、<ruby>曲<rt>ま</rt></ruby>げモーメントは、<ruby>引張側<rt>ひっぱりがわ</rt></ruby>に<ruby>描<rt>えが</rt></ruby>くものとする。",
    questionMY: "ပုံについてပြထားသော ဝန်သက်ရောက်နေသည့် ရိုးရှင်းသောရက်မ (Simple Beam) のကွေးညွှတ်မိုးမင့်ပြပုံ (Bending Moment Diagram) အဖြစ် မှန်ကန်သောအရာမှာ အောက်ပါတို့အနက် အဘယ်နည်း။ သို့ရာについてကွေးညွှတ်မိုးမင့်をဆွဲအားသက်ရောက်ရာဘက် (Tension Side) についてရေးဆွဲしなければならない。",
    options: [
      { id: 1, textJP: "(1) <ruby>図<rt>ず</rt></ruby>1", textMY: " " },
      { id: 2, textJP: "(2) <ruby>図<rt>ず</rt></ruby>2", textMY: " " },
      { id: 3, textJP: "(3) <ruby>図<rt>ず</rt></ruby>3", textMY: " " },
      { id: 4, textJP: "(4) <ruby>図<rt>ず</rt></ruby>4", textMY: " " },
      { id: 5, textJP: "(5) <ruby>図<rt>ず</rt></ruby>5", textMY: " " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 単純梁の曲げモーメント (Simple Beam Bending Moment)",
      reasonMY: "အလယ်についてအမှတ်ဝန် (Point Load) သက်ရောက်နေသော Simple Beam のBending Moment Diagram はတြိဂံပုံစံဖြစ်ပြီး、ဝန်သက်ရောက်သည့်နေရာ (အလယ်မှတ်) についてအများဆုံး Bending Moment ရှိは။",
      memoryTipMY: "အလယ်についてPoint Load သက်ရောက်場合はတြိဂံပုံ Bending Moment Diagram ရရှိမည်ဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-6",
    questionJP: "<ruby>木造建築物<rt>もくぞうけんちくぶつ</rt></ruby>の<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သစ်သားအဆောက်အဦများのအဆောက်အဦတည်ဆောက်မှုပုံစံဒီဇိုင်း (Structural Design) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>耐力壁<rt>たいりょくへき</rt></ruby>の<ruby>配置<rt>はいち</rt></ruby>は、<ruby>平面上<rt>へいめんじょう</rt></ruby>で<ruby>偏<rt>かたよ</rt></ruby>りがないようにバランスよく<ruby>配置<rt>はいち</rt></ruby>する。", textMY: " (Shear Wall) をについての (Plan) について  しなければならない。" },
      { id: 2, textJP: "(2) <ruby>筋違<rt>すじかい</rt></ruby>は、<ruby>引張力<rt>ひっぱりりょく</rt></ruby>と<ruby>圧縮力<rt>あっしゅくりょく</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>有効<rt>ゆうこう</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>できるように<ruby>配置<rt>はいち</rt></ruby>する。", textMY: " (Brace) を (Tension) と (Compression) を  しなければならない。" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby>の<ruby>小径<rt>しょうけい</rt></ruby>は、<ruby>柱<rt>はしら</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さの1/30<ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "の (Minimum Diameter) はの1/30  。" },
      { id: 4, textJP: "(4) <ruby>土台<rt>どだい</rt></ruby>は、<ruby>基礎<rt>きそ</rt></ruby>にアンカーボルトで<ruby>緊結<rt>きんけつ</rt></ruby>する。", textMY: " (Sill) を (Foundation) についてAnchor Bolt で しなければならない。" },
      { id: 5, textJP: "(5) <ruby>木材<rt>もくざい</rt></ruby>の<ruby>含水率<rt>がんすいりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いほど、<ruby>木材<rt>もくざい</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "の (Moisture Content) 、 の (Strength) は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 木材の含水率 (Timber Moisture Content)",
      reasonMY: "သစ်သားのရေပါဝင်မှုနှုန်း (Moisture Content) မြင့်မားလေ、 သစ်သားのခံနိုင်ရည် (Strength) ကျဆင်းလေဖြစ်は။ သစ်သားခြောက်သွေ့လေ ခံနိုင်ရည် ပိုကောင်းလေဖြစ်は။",
      memoryTipMY: "သစ်သားはစိုနေလျှင် ပျော့ပြီး、 ခြောက်သွေ့မှသာ မာကျောはဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း (Welding) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>による<ruby>熱影響<rt>ねつえいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるため、<ruby>繰返<rt>くりかえ</rt></ruby>し<ruby>荷重<rt>かじゅう</rt></ruby>が<ruby>作用<rt>さよう</rt></ruby>する場合の<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が<ruby>母材<rt>ぼざい</rt></ruby>よりも<ruby>劣<rt>おと</rt></ruby>ることや、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>破壊靭性値<rt>はかいじんせいち</rt></ruby>が<ruby>低い<rt>ひくい</rt></ruby>と<ruby>脆性破壊<rt>ぜいせいはかい</rt></ruby>を<ruby>生ずる<rt>しょうずる</rt></ruby>可能性があるなどの<ruby>短所<rt>たんしょ</rt></ruby>がある。", textMY: "は   (Fatigue Life) 、  (Brittle Fracture)  は" },
      { id: 2, textJP: "(2) <ruby>完全溶込み溶接<rt>かんぜんとけこみようせつ</rt></ruby>に<ruby>固形<rt>こけい</rt></ruby>エンドタブを<ruby>用いる<rt>もちいる</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、<ruby>板幅<rt>いたはば</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>ことになる。<ruby>溶接始終端<rt>ようせつしじゅうたん</rt></ruby>では<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>が<ruby>生じやすい<rt>しょうじやすい</rt></ruby>ため、この<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>健全<rt>けんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつぶ</rt></ruby>となるように<ruby>入念<rt>にゅうねん</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>しなければならない。", textMY: "Full Penetration Weld についてSolid End Tab を場合はとについて (Defect)  しなければならない。" },
      { id: 3, textJP: "(3) <ruby>溶接部<rt>ようせつぶ</rt></ruby>が<ruby>冷却<rt>れいきゃく</rt></ruby>される<ruby>際<rt>さい</rt></ruby>には、<ruby>溶接部周辺<rt>ようせつぶしゅうへん</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>の<ruby>違い<rt>ちがい</rt></ruby>や<ruby>拘束力<rt>こうそくりょく</rt></ruby>の<ruby>存在<rt>そんざい</rt></ruby>などにより<ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する。<ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が<ruby>大きく<rt>おおきく</rt></ruby>なると、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>降伏耐力<rt>こうふくたいりょく</rt></ruby>を<ruby>低下<rt>ていか</rt></ruby>させるなど、<ruby>構造性能<rt>こうぞうせいのう</rt></ruby>を<ruby>低下<rt>ていか</rt></ruby>させる<ruby>要因<rt>よういん</rt></ruby>につながる。", textMY: "    (Residual Stress)  のをは" },
      { id: 4, textJP: "(4) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は<ruby>母材間<rt>ぼざいかん</rt></ruby>に<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>流し込み<rt>ながしこみ</rt></ruby>、<ruby>部材<rt>ぶざい</rt></ruby>どうしを<ruby>一体化<rt>いったいか</rt></ruby>する<ruby>接合方法<rt>せつごうほうほう</rt></ruby>である。<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>付加<rt>ふか</rt></ruby>するためボルト<ruby>接合<rt>せつごう</rt></ruby>よりも<ruby>鋼材量<rt>こうざいりょう</rt></ruby>が<ruby>増え<rt>ふえ</rt></ruby>、<ruby>鉄骨全体<rt>てっこつぜんたい</rt></ruby>の<ruby>重量<rt>じゅうりょう</rt></ruby>が<ruby>増加<rt>ぞうか</rt></ruby>するという<ruby>短所<rt>たんしょ</rt></ruby>がある。", textMY: "は (Bolt) で   をは は" },
      { id: 5, textJP: "(5) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>では、<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>が<ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつぶ</rt></ruby>になる<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>し、<ruby>溶接長<rt>ようせつなが</rt></ruby>さから<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズの2<ruby>倍<rt>ばい</rt></ruby>を<ruby>減じて<rt>げんじて</rt></ruby><ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>しなければならない。", textMY: "Fillet Weld についてと はを  Size の を をしなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接接合 (Welded Joint)",
      reasonMY: "ဂဟေဆက်ခြင်း (Welding) はပုံမှန်အားでဘိုလ်တိုင် (Bolt) でဆက်ခြင်းထက် သံထည်ပမာဏをလျှော့ချပေးနိုင်ပြီး အဆောက်အဦをပိုမိုပေါ့ပါးစေは။ အကြောင်းမှာ ဆက်ကြောင်းပြား (Splice Plate) များとဘိုလ်တိုင်များ မလိုအပ်သောကြောင့်ဖြစ်は။",
      memoryTipMY: "ဂဟေဆက်ခြင်းはသံထည်အလေးချိန်をလျော့ကျစေはဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-8",
    questionJP: "<ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby> (SN<ruby>材<rt>ざい</rt></ruby>) に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဆောက်အဦတည်ဆောက်ရေးသုံး သံမဏိ (SN Steel) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) SN<ruby>材<rt>ざい</rt></ruby>は<ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>に<ruby>要求<rt>ようきゅう</rt></ruby>される<ruby>性能<rt>せいのう</rt></ruby>と<ruby>溶接性<rt>ようせつせい</rt></ruby>を<ruby>兼ね備えた<rt>かねそなえた</rt></ruby><ruby>建築専用<rt>けんちくせんよう</rt></ruby>の<ruby>鋼材規格<rt>こうざいきかく</rt></ruby>としてJISに<ruby>規定<rt>きてい</rt></ruby>された<ruby>鋼材<rt>こうざい</rt></ruby>である。<ruby>建築物<rt>けんちくぶつ</rt></ruby>の<ruby>使用部位<rt>しようぶい</rt></ruby>とそれに<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>性能<rt>せいのう</rt></ruby>に<ruby>応じて<rt>おうじて</rt></ruby>A<ruby>種<rt>しゅ</rt></ruby>、B<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>の3<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "SN は   A, B, C   は" },
      { id: 2, textJP: "(2) A<ruby>種<rt>しゅ</rt></ruby>は<ruby>主要構造部材以外<rt>しゅようこうぞうぶざいいがい</rt></ruby>の<ruby>小梁<rt>こばり</rt></ruby>や<ruby>間柱<rt>まばしら</rt></ruby>など<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>用いられる<rt>もちいられる</rt></ruby>ことを<ruby>想定<rt>そうてい</rt></ruby>しているが<ruby>溶接性<rt>ようせつせい</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>されており、<ruby>部分的<rt>ぶぶんてき</rt></ruby>であれば<ruby>塑性化<rt>そせいか</rt></ruby>が<ruby>想定<rt>そうてい</rt></ruby>される<ruby>溶接部<rt>ようせつ部</rt></ruby>にも<ruby>用いる<rt>もちいる</rt></ruby>ことができる。", textMY: "A は 、  (Plasticization)  について は" },
      { id: 3, textJP: "(3) B<ruby>種<rt>しゅ</rt></ruby>は<ruby>降伏点<rt>こうふくてん</rt></ruby>および<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>とともに<ruby>溶接性<rt>ようせつせい</rt></ruby>が<ruby>考慮<rt>こうりょ</rt></ruby>されているため、<ruby>大梁端部<rt>おおばりたんぶ</rt></ruby>などのように<ruby>溶接部<rt>ようせつぶ</rt></ruby>に<ruby>大きな<rt>おおきな</rt></ruby><ruby>塑性変形能力<rt>そせいへんけいのうりょく</rt></ruby>が<ruby>要求<rt>ようきゅう</rt></ruby>される<ruby>主要構造部材<rt>しゅようこうぞうぶざい</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>することができる。", textMY: "B は については" },
      { id: 4, textJP: "(4) C<ruby>種<rt>しゅ</rt></ruby>は<ruby>通し<rt>とおし</rt></ruby>ダイアフラムやベースプレートなどのように<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>に<ruby>大きな<rt>おおきな</rt></ruby><ruby>引張応力<rt>ひっぱりおうりょく</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby><ruby>部材<rt>ぶざい</rt></ruby>への<ruby>使用<rt>しよう</rt></ruby>を<ruby>想定<rt>そうてい</rt></ruby>し、B<ruby>種<rt>しゅ</rt></ruby>よりもP (<ruby>りん<rt>りん</rt></ruby>)、S (<ruby>硫黄<rt>いおう</rt></ruby>)の<ruby>上限値<rt>じょうげんち</rt></ruby>を<ruby>低く<rt>ひくく</rt></ruby><ruby>設定<rt>せってい</rt></ruby>するとともに、<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>の<ruby>絞り値<rt>しぼりち</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>している。", textMY: "C は   P とS をは" },
      { id: 5, textJP: "(5) B<ruby>種<rt>しゅ</rt></ruby>およびC<ruby>種<rt>しゅ</rt></ruby>では、0℃シャルピー<ruby>吸収<rt>きゅうしゅう</rt></ruby>エネルギーが27J<ruby>以上<rt>いじょう</rt></ruby>と<ruby>規定<rt>きてい</rt></ruby>されている。また、<ruby>溶接性<rt>ようせつせい</rt></ruby>の<ruby>観点<rt>かんてん</rt></ruby>から<ruby>炭素当量<rt>たんそとうりょう</rt></ruby>(Ceq)もしくは<ruby>溶接割れ感受性組成<rt>ようせつわれかんじゅせいそせい</rt></ruby> ($P_{CM}$) の<ruby>上限値<rt>じょうげんち</rt></ruby>が<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "B とC についてCharpy Energy を  は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材 (SN Steel)",
      reasonMY: "SN-A သံမဏိはဂဟေဆက်နိုင်စွမ်း (Weldability) をအာမခံချက်မပေးထားသလို、 ပလတ်စတစ်အသွင်ပြောင်းလဲမှု (Plasticization) ဖြစ်မည့်နေရာများについてသုံးရန်မသင့်တော်ပါ။ ၎င်းをအဓိကမဟုတ်သော အစိတ်အပိုင်းများ (Non-structural members) についてသာ သုံးしなければならない。",
      memoryTipMY: "SN-A についてWeldability မရှိသでအဓိကနေရာများについてမသုံးရဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများ (Mechanical Properties) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>炭素当量<rt>たんそとうりょう</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>組成<rt>そせい</rt></ruby>と<ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>を<ruby>結びつける<rt>むすびつける</rt></ruby>ために<ruby>用いられる<rt>もちいられる</rt></ruby><ruby>量<rt>りょう</rt></ruby>であり、<ruby>溶接性<rt>ようせつせい</rt></ruby>だけでなく<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>耐腐食性能<rt>たいふしょくせいのう</rt></ruby>を<ruby>表す<rt>あらわす</rt></ruby><ruby>指標<rt>しひょう</rt></ruby>としても<ruby>用いられる<rt>もちいられる</rt></ruby>。", textMY: " (Carbon Equivalent) はのと を は" },
      { id: 2, textJP: "(2) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>歪度<rt>わいど</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>応力度<rt>おうりょくど</rt></ruby>の<ruby>比率<rt>ひりつ</rt></ruby>をヤング<ruby>係数<rt>けいすう</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。ヤング<ruby>係数<rt>けいすう</rt></ruby>は<ruby>鋼種<rt>こうしゅ</rt></ruby>によって<ruby>異なり<rt>ことなり</rt></ruby>、その<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>降伏点<rt>こうふくてん</rt></ruby>とほぼ<ruby>比例<rt>ひれい</rt></ruby>する。", textMY: "Young's Modulus は  Yield Point とは" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>降伏比<rt>こうふくひ</rt></ruby>(<ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>降伏点<rt>こうふくてん</rt></ruby>の<ruby>比<rt>ひ</rt></ruby>)は、<ruby>一般に<rt>いっぱんに</rt></ruby><ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>なるほど<ruby>小さく<rt>ちいさく</rt></ruby>なる。", textMY: "Yield Ratio はの は" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>に10,000<ruby>回以上<rt>かいいじょう</rt></ruby>の<ruby>繰返<rt>くりかえ</rt></ruby>し<ruby>荷重<rt>かじゅう</rt></ruby>が<ruby>作用<rt>さよう</rt></ruby>すると、<ruby>荷重<rt>かじゅう</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>が<ruby>降伏点以下<rt>こうふくてんいか</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>であっても<ruby>脆性的<rt>ぜいせいてき</rt></ruby>に<ruby>破壊<rt>はかい</rt></ruby>することがある。この<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>疲労<rt>ひろう</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "を ,    Yield Point について  をFatigue は" },
      { id: 5, textJP: "(5) シャルピー<ruby>吸収<rt>きゅうしゅう</rt></ruby>エネルギーは、<ruby>切欠き<rt>きりかき</rt></ruby>を<ruby>有する<rt>ゆうする</rt></ruby><ruby>試験片<rt>しけんへん</rt></ruby>に<ruby>衝撃力<rt>しょうげきりょく</rt></ruby>を<ruby>与え<rt>あたえ</rt></ruby>、<ruby>試験片<rt>しけんへん</rt></ruby>を<ruby>破断<rt>はだん</rt></ruby>するのに<ruby>要する<rt>ようする</rt></ruby>エネルギーのことをいう。シャルピー<ruby>吸収<rt>きゅうしゅう</rt></ruby>エネルギーは<ruby>低温<rt>ていおん</rt></ruby>になるほど<ruby>低く<rt>ひくく</rt></ruby>なる<ruby>傾向<rt>けいこう</rt></ruby>がある。", textMY: "Charpy Energy はを   は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - シャルピー衝撃試験 (Charpy Impact Test)",
      reasonMY: "Charpy Impact Test はသံのကြွပ်ဆတ်မှုをတိုင်းတာခြင်းဖြစ်ပြီး、 အပူချိန်နိမ့်သောအခါ သံはပိုမိုကြွပ်ဆတ်လာသောကြောင့် ၎င်းをချိုးရန်လိုအပ်သော စွမ်းအင် (Absorbed Energy) はလျော့နည်းသွားは။",
      memoryTipMY: "အေးသောအခါ သံはကြွပ်ဆတ်သွားသでCharpy Energy ကျဆင်းသွားはဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-10",
    questionJP: "「JASS 6」における<ruby>用語<rt>ようご</rt></ruby>とその<ruby>定義<rt>ていぎ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "「JASS 6」ပါ နည်းပညာဆိုင်ရာ ဝေါဟာရများと၎င်းတို့のအဓိပ္ပာယ်ဖွင့်ဆိုချက်များとပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>：<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>において<ruby>製作<rt>せいさく</rt></ruby>を<ruby>完了<rt>かんりょう</rt></ruby>した<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby><ruby>行う<rt>おこなう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>のうち、<ruby>製作担当者<rt>せいさくたんとうしゃ</rt></ruby>が<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "In-house Inspection (社内検査) - について を が をは" },
      { id: 2, textJP: "(2) <ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>：<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>行う<rt>おこなう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>のうち、<ruby>製作途上<rt>せいさくとじょう</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby><ruby>行う<rt>おこなう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "Intermediate Inspection (中間検査) -  (Contractor) が について  ををは" },
      { id: 3, textJP: "(3) <ruby>製品検査<rt>せいひんけんさ</rt></ruby>：<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>において<ruby>製作<rt>せいさく</rt></ruby>を<ruby>完了<rt>かんりょう</rt></ruby>した<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby><ruby>行う<rt>おこなう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>のうち、<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "Product Inspection (製品検査) - について を (Contractor) が をは" },
      { id: 4, textJP: "(4) <ruby>外注品検査<rt>がいちゅうひんけんさ</rt></ruby>：<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>が<ruby>外注<rt>がいちゅう</rt></ruby>した<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby>、<ruby>製作担当者<rt>せいさくたんとうしゃ</rt></ruby>が<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "Outsourced Product Inspection (外注品検査) -   を をは" },
      { id: 5, textJP: "(5) <ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>：<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>が<ruby>購入<rt>こうにゅう</rt></ruby>した<ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>部品<rt>ぶひん</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby>、<ruby>製作担当者<rt>せいさくたんとうしゃ</rt></ruby>が<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "Purchased Product Inspection (購入品検査) -  を をは" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 社内検査 (In-house Inspection)",
      reasonMY: "JASS 6 အရ 'In-house Inspection (社内検査)' ဆိုはမှာ စက်ရုံမှ မိမိအစီအစဉ်でမိမိတာဝန်ယူမှုでပြုလုပ်သော စစ်ဆေးမှုအားလုံးをခြုံငုံခေါ်ဆိုခြင်းဖြစ်は။ ၎င်းはအချောသတ်ပြီးသော ပစ္စည်းများသာမが လုပ်ငန်းစဉ်တစ်လျှောက်လုံးရှိ စစ်ဆေးမှုများをလည်း အကျုံးဝင်は။",
      memoryTipMY: "社内検査 はစက်ရုံမှ ပြုလုပ်သော စစ်ဆေးမှုအားလုံးをခြုံငုံခေါ်ဆိုခြင်းဖြစ်はဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-11",
    questionJP: "<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှုလုပ်ငန်းစဉ်လမ်းညွှန် (Fabrication Procedure Manual) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に<ruby>作成<rt>さくせい</rt></ruby>し、<ruby>監理者<rt>かんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受けなければ<rt>うけなければ</rt></ruby>ならない。", textMY: " を  (Supervisor)  しなければならない。" },
      { id: 2, textJP: "(2) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>には、<ruby>工場概要<rt>こうじょうがいよう</rt></ruby>、<ruby>製作組織<rt>せいさくそしき</rt></ruby>、<ruby>製作工程<rt>せいさくこうてい</rt></ruby>、<ruby>使用材料<rt>しようざいりょう</rt></ruby>、<ruby>加工<rt>かこう</rt></ruby>、<ruby>溶接<rt>ようせつ</rt></ruby>、<ruby>検査方法<rt>けんさほうほう</rt></ruby>などを<ruby>含める<rt>ふくめる</rt></ruby>。", textMY: "について、 、 、 、 と しなければならない。" },
      { id: 3, textJP: "(3) <ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>事項<rt>じこう</rt></ruby>として、<ruby>溶接施工要領書<rt>ようせつせこうようりょうしょ</rt></ruby> (WPS) を<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>含める<rt>ふくめる</rt></ruby>か、あるいは<ruby>別冊<rt>べっさつ</rt></ruby>として<ruby>提出<rt>ていしゅつ</rt></ruby>する。", textMY: "と WPS をについて    しなければならない。" },
      { id: 4, textJP: "(4) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>に<ruby>変更<rt>へんこう</rt></ruby>が<ruby>生じた<rt>しょうじた</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>には、その<ruby>都度<rt>つど</rt></ruby>、<ruby>監理者<rt>かんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受けなければ<rt>うけなければ</rt></ruby>ならない。", textMY: "について場合は   しなければならない。" },
      { id: 5, textJP: "(5) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>一般に<rt>いっぱんに</rt></ruby><ruby>用いられている<rt>もちいられている</rt></ruby><ruby>標準的な<rt>ひょうじゅんてきな</rt></ruby><ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>をそのまま<ruby>使用<rt>しよう</rt></ruby>し、<ruby>特記仕様書<rt>とっきしようしょ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>を<ruby>反映<rt>はんえい</rt></ruby>させる<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "を 、  (Special Specifications) を " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作要領書 (Fabrication Procedure Manual)",
      reasonMY: "ထုတ်လုပ်မှုလုပ်ငန်းစဉ်လမ်းညွှန် (Fabrication Procedure Manual) はသက်ဆိုင်ရာ ပရောဂျက်တစ်ခုချင်းစီのသီးခြားသတ်မှတ်ချက် (Special Specifications) များをထင်ဟပ်စေしなければならない。 ယေဘုယျစံနှုန်းများをသာ တိုက်ရိုက်သုံး၍ မရပါ။",
      memoryTipMY: "ပရောဂျက်တစ်ခုချင်းစီအတွက် သီးသန့်ပြင်ဆင်ရမည်ဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-12",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လက်တွေ့လုပ်ငန်းသုံးပုံစံ (Shop Drawings) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>設計図書<rt>せっけいとしょ</rt></ruby>に<ruby>基づき<rt>もとづき</rt></ruby>、<ruby>製作<rt>せいさく</rt></ruby>および<ruby>建方<rt>たてかた</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>詳細<rt>しょうさい</rt></ruby>を<ruby>記載<rt>きさい</rt></ruby>したものである。", textMY: "Shop Drawing は  と をは" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>尺度<rt>しゃくど</rt></ruby>は、<ruby>図面<rt>ずめん</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>を<ruby>正確に<rt>せいかくに</rt></ruby><ruby>読み取れる<rt>よみとれる</rt></ruby>ように<ruby>適切に<rt>てきせつに</rt></ruby><ruby>設定<rt>せってい</rt></ruby>しなければならない。", textMY: "を  (Scale) を しなければならない。" },
      { id: 3, textJP: "(3) <ruby>工作図<rt>こうさくず</rt></ruby>には、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>形状<rt>けいじょう</rt></ruby>、<ruby>寸法<rt>すんぽう</rt></ruby>、<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>、ボルトの<ruby>配置<rt>はいち</rt></ruby>などの<ruby>製作<rt>せいさく</rt></ruby>・<ruby>組立<rt>くみたて</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>網羅<rt>もうら</rt></ruby>する。", textMY: "についての、 、 、     しなければならない。" },
      { id: 4, textJP: "(4) <ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>作成責任<rt>さくせいせきにん</rt></ruby>は、<ruby>監理者<rt>かんりしゃ</rt></ruby>にある。", textMY: "Shop Drawings    (Supervisor) については" },
      { id: 5, textJP: "(5) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に<ruby>監理者<rt>かんりしゃ</rt></ruby>に<ruby>提出<rt>ていしゅつ</rt></ruby>し、<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受けなければ<rt>うけなければ</rt></ruby>ならない。", textMY: " Shop Drawing を  しなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 工作図 (Shop Drawings)",
      reasonMY: "Shop Drawings ရေးဆွဲရန် တာဝန်မှာ ထုတ်လုပ်သူ (Fabricator) သို့မဟုတ် တည်ဆောက်သူ (Contractor) についてသာ ရှိは။ ကြီးကြပ်သူ (Supervisor) はပုံစံများをစစ်ဆေးပြီး အတည်ပြုပေးရန်သာ တာဝန်ရှိは။",
      memoryTipMY: "Shop Drawing ဆွဲရန်တာဝန်မှာ စက်ရုံ (Fabricator) についてရှိはဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-13",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>・<ruby>切削加工<rt>せっさくかこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်ခြင်းとအချောをင်ခြင်း (Cutting and Machining) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>板厚<rt>いたあつ</rt></ruby>13mm<ruby>以下<rt>いか</rt></ruby>の<ruby>鋼板<rt>こうはん</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>には、せん<ruby>断切断機<rt>だんせつだんき</rt></ruby> (シャーリング) を<ruby>用いる<rt>もちいる</rt></ruby>ことができる。", textMY: "   を (Shearing Machine) では" },
      { id: 2, textJP: "(2) ガス<ruby>切断<rt>せつだん</rt></ruby>の<ruby>切断面<rt>せつだんめん</rt></ruby>の<ruby>粗さ<rt>あらさ</rt></ruby>は、<ruby>板厚<rt>いたあつ</rt></ruby>に<ruby>応じた<rt>おうじた</rt></ruby><ruby>許容値以下<rt>きょようちいか</rt></ruby>としなければならない。", textMY: "で の (Roughness) は について しなければならない。" },
      { id: 3, textJP: "(3) プラズマ<ruby>切断<rt>せつだん</rt></ruby>は、ガス<ruby>切断<rt>せつだん</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>熱影響部<rt>ねつえいきょうぶ</rt></ruby>が<ruby>狭く<rt>せまく</rt></ruby>、<ruby>切断速度<rt>せつだんそくど</rt></ruby>が<ruby>速い<rt>はやい</rt></ruby>という<ruby>特徴<rt>とくちょう</rt></ruby>がある。", textMY: "Plasma Cutting はGas Cutting    は" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>の<ruby>隅角部<rt>ぐうかくぶ</rt></ruby>を<ruby>切欠く<rt>きりかく</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>には、<ruby>応力集中<rt>おうりょくしゅうちゅう</rt></ruby>を<ruby>避ける<rt>さける</rt></ruby>ため、<ruby>半径<rt>はんけい</rt></ruby>10mm<ruby>以上<rt>いじょう</rt></ruby>の<ruby>丸み<rt>まるみ</rt></ruby>を<ruby>設ける<rt>もうける</rt></ruby>。", textMY: "をについてを     しなければならない。" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断端面<rt>せつだんたんめん</rt></ruby>は、<ruby>鋼種<rt>こうしゅ</rt></ruby>にかかわらず、すべて<ruby>切削加工<rt>せっさくかこう</rt></ruby>を<ruby>行わなければ<rt>おこなわなければ</rt></ruby>ならない。", textMY: " を を (Machining) で しなければならない。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 切断・切削加工 (Cutting & Machining)",
      reasonMY: "သံဖြတ်ပြီးသား မျက်နှာပြင်အားလုံးをအချောをင်စက်でပြုပြင်ရန် မလိုပါ။ ဂတ်စ်でဖြတ်ခြင်း သို့မဟုတ် ဖြတ်စက်でဖြတ်ခြင်းတို့はသတ်မှတ်ထားသော တိကျမှုとကြမ်းတမ်းမှုဘောင်အについてး ရှိနေ場合はတိုက်ရိုက်သုံးနိုင်は။",
      memoryTipMY: "ဖြတ်ပြီးသားမျက်နှာပြင်တိုင်းをအချောをင်ရန်မလိုဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-14",
    questionJP: "「JASS 6」における<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合面<rt>せつごうめん</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "「JASS 6」ပါ အားမြင့်ဘိုလ်တိုင် (High Strength Bolt) များのပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းとပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>摩擦面<rt>まさつめん</rt></ruby>の<ruby>黒皮<rt>くろかわ</rt></ruby>は、ブラスト<ruby>処理<rt>しょり</rt></ruby>またはディスクグラインダー<ruby>掛け<rt>がけ</rt></ruby>などにより、<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>しなければならない。", textMY: "  (Mill Scale) をBlast Cleaning  Grinder でしなければならない。" },
      { id: 2, textJP: "(2) <ruby>摩擦面<rt>まさつめん</rt></ruby>の<ruby>すべり<rt>すべり</rt></ruby><ruby>係数<rt>けいすう</rt></ruby>は、0.45<ruby>以上<rt>いじょう</rt></ruby><ruby>確保<rt>かくほ</rt></ruby>されるように<ruby>処理<rt>しょり</rt></ruby>しなければならない。", textMY: " (Slip Factor) は.  しなければならない。" },
      { id: 3, textJP: "(3) ブラスト<ruby>処理<rt>しょり</rt></ruby>の<ruby>後<rt>あと</rt></ruby>、<ruby>摩擦面<rt>まさつめん</rt></ruby>に<ruby>一様<rt>いちよう</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>した<ruby>赤錆<rt>あかさび</rt></ruby>は、<ruby>除去<rt>じょきょ</rt></ruby>せずにそのまま<ruby>接合<rt>せつごう</rt></ruby>してもよい。", textMY: "Blast Cleaning  について  (Red Rust) を は" },
      { id: 4, textJP: "(4) <ruby>摩擦面<rt>まさつめん</rt></ruby>に<ruby>塗装<rt>とそう</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>には、<ruby>所定<rt>しょてい</rt></ruby>の<ruby>すべり<rt>すべり</rt></ruby><ruby>係数<rt>けいすう</rt></ruby>が<ruby>得られる<rt>えられる</rt></ruby>ことが<ruby>確認<rt>かくにん</rt></ruby>された<ruby>摩擦面用<rt>まさつめんよう</rt></ruby>の<ruby>塗装<rt>とそう</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "を場合は   (Friction Paint) を しなければならない。" },
      { id: 5, textJP: "(5) <ruby>黒皮<rt>くろかわ</rt></ruby>を<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>すれば、<ruby>手回し<rt>てまわし</rt></ruby>ワイヤーブラシ<ruby>掛け<rt>がけ</rt></ruby>による<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>を<ruby>行ってもよい<rt>おこなってもよい</rt></ruby>。", textMY: "を で  (Hand Wire Brush) でをは" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 摩擦面処理 (Friction Surface Treatment)",
      reasonMY: "လက်でပွတ်သော ဝါယာဘရပ် (Hand Wire Brush) はပွတ်တိုက်မျက်နှာပြင်အတွက် လိုအပ်သော ကြမ်းတမ်းမှုをမပေးနိုင်ပါ။ ထို့ကြောင့် စက်でပွတ်ခြင်း (Power Tool) သို့မဟုတ် Blast Cleaning をသာ သုံးしなければならない。",
      memoryTipMY: "လက်でပွတ်ခြင်း (Hand brush) အား ခွင့်မပြုဟု မှတ်သားထားပါ။"
    }
  },
  {
    id: "2021-15",
    questionJP: "「JASS 6」に<ruby>基づき<rt>もとづき</rt></ruby><ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "「JASS 6」အရ သံမဏိについてအပေါက်ဖောက်ခြင်း (Hole Drilling) とပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးမှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>用<rt>よう</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>としてドリルあけとする。", textMY: " についてで (Drill) をしなければならない。" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>13mm<ruby>以下<rt>いか</rt></ruby>の<ruby>部材<rt>ぶざい</rt></ruby>であれば、<ruby>孔<rt>あな</rt></ruby>の<ruby>周辺<rt>しゅうへん</rt></ruby>に<ruby>有害な<rt>ゆうがいな</rt></ruby>ひび<ruby>割れ<rt>われ</rt></ruby>などが<ruby>生じない<rt>しょうじない</rt></ruby><ruby>範囲<rt>はんい</rt></ruby>で、<ruby>せん孔<rt>せんこう</rt></ruby> (パンチ) による<ruby>孔あけ<rt>あなあけ</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>ことができる。", textMY: "   について場合はPunching では" },
      { id: 3, textJP: "(3) <ruby>高力<rt>こうりょく</rt></ruby>ボルトの<ruby>孔径<rt>あなけい</rt></ruby>は、ボルトの<ruby>呼び径<rt>よびけい</rt></ruby>に2.0mmを<ruby>加えた<rt>くわえた</rt></ruby>ものとする。", textMY: " は .  しなければならない。" },
      { id: 4, textJP: "(4) <ruby>孔<rt>あな</rt></ruby>の<ruby>周辺<rt>しゅうへん</rt></ruby>に<ruby>生じた<rt>しょうじた</rt></ruby>バリは、<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>しなければならない。", textMY: "   (Burr) をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>孔あけ位置<rt>あなあけいち</rt></ruby>を<ruby>誤った<rt>あやまった</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶接<rt>ようせつ</rt></ruby>で<ruby>埋め戻した<rt>うめもどした</rt></ruby><ruby>後に<rt>あとに</rt></ruby><ruby>再度<rt>さいど</rt></ruby><ruby>孔あけ<rt>あなあけ</rt></ruby>を<ruby>行ってもよい<rt>おこなってもよい</rt></ruby>。", textMY: " 場合はで  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 孔あけ加工 (Hole Drilling)",
      reasonMY: "အပေါက်နေရာ မှားသွား場合はဂဟေでပြန်ပိတ်ပြီး ပြန်ဖောက်ခြင်းをယေဘုယျအားでခွင့်မပြုပါ။ ၎င်းはသံのကြံ့ခိုင်မှုをထိခိုက်စေနိုင်သောကြောင့် အစိတ်အပိုင်းをအသစ်လဲလှယ်ခြင်း သို့မဟုတ် အထူးခွင့်ပြုချက်でသာ ပြုပြင်ခြင်း ပြုလုပ်しなければならない。",
      memoryTipMY: "အပေါက်မှား場合はဂဟေでပိတ်ပြီး ပြန်ဖောက်၍မရဟု မှတ်သားထားပါ။"
    }
  },
];
