import { StudyCardData } from '../types';

export const chapter1Data2026Part1: StudyCardData[] = [
  {
    id: "2026-1-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面<rt>だんめん</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい 2 つの<ruby>単純梁<rt>たんじゅんばり</rt></ruby>に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby> P が<ruby>作用<rt>さよう</rt></ruby>している。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း ပစ္စည်းとဖြတ်ပိုင်းဧရိယာ တူညီသော Simple Beam နှစ်ခုပေါ်についてဒေါင်လိုက်ဝန် P သက်ရောက်နေは။ ထိုအခါ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> A の<ruby>鉛直方向反力<rt>えんちょくほうこうはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby> D の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>より<ruby>小<rt>ちい</rt></ruby>さい。", textMY: "Support A のはSupport D の は" },
      { id: 2, textJP: "(2) <ruby>支点<rt>してん</rt></ruby> C の<ruby>鉛直方向反力<rt>えんちょくほうこうはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby> F の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>より<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Support C のはSupport F の は" },
      { id: 3, textJP: "(3) AB <ruby>間<rt>かん</rt></ruby>のせん<ruby>断力<rt>だんりょく</rt></ruby>と DE <ruby>間<rt>かん</rt></ruby>のせん<ruby>断力<rt>だんりょく</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "AB  Shear Force とDE  Shear Force はは" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>最大曲<rt>さいだいま</rt></ruby>げモーメントの<ruby>大<rt>おお</rt></ruby>きさは、<ruby>単純梁<rt>たんじゅんばり</rt></ruby> B のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Beam について  Bending Moment はSimple Beam B については" },
      { id: 5, textJP: "(5) B <ruby>点<rt>てん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみは E <ruby>点<rt>てん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみより<ruby>小<rt>ちい</rt></ruby>さい。", textMY: "B の (Deflection) はE の は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Reaction とShear Force",
      reasonMY: "Simple Beam A のReaction မှာ $V_A = V_C = P/2$ ဖြစ်ပြီး、Simple Beam B のReaction မှာ $V_D = 2P/3, V_F = P/3$ ဖြစ်は။ ထို့ကြောင့် $Q_{AB} = P/2$ と$Q_{DE} = 2P/3$ ဖြစ်သでမတူညီပါ။",
      memoryTipMY: "Span (အလျား) ကွာခြား場合はLoad のPosition အရ Shear Force မတူညီနိုင်ပါ။"
    }
  },
  {
    id: "2026-1-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のように、<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面形<rt>だんめんけい</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しく、<ruby>長<rt>なが</rt></ruby>さの<ruby>異<rt>こと</rt></ruby>なる 2 <ruby>本<rt>ほん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby> AB と<ruby>梁<rt>はり</rt></ruby> CD が<ruby>中央<rt>ちゅうおう</rt></ruby> O で<ruby>直角<rt>ちょっかく</rt></ruby>に<ruby>繋<rt>つな</rt></ruby>がっている。この<ruby>梁<rt>はり</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby> O に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby> P が<ruby>作用<rt>さよう</rt></ruby>したとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း ပစ္စည်းとဖြတ်ပိုင်းပုံစံ တူညီပြီး အလျားမတူညီသော Beam AB とBeam CD နှစ်ခုをအလယ်ဗဟို O についてထောင့်မှန်အတိုင်း ဆက်ထားは။ ဤ Beam のအလယ်မှတ် O についてဒေါင်လိုက်ဝန် P သက်ရောက်သောအခါ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 4 つの<ruby>支点<rt>してん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>は P である。", textMY: "Support  の はP は" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby> AB、<ruby>梁<rt>はり</rt></ruby> CD ともに<ruby>曲<rt>ま</rt></ruby>げモーメントが<ruby>最大<rt>さいだい</rt></ruby>になるのは O <ruby>点<rt>てん</rt></ruby>である。", textMY: "Beam AB とBeam CD についてBending Moment は O については" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby> AB の<ruby>最大曲<rt>さいだいま</rt></ruby>げモーメントと、<ruby>梁<rt>はり</rt></ruby> CD の<ruby>最大曲<rt>さいだいま</rt></ruby>げモーメントは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Beam AB の Bending Moment とBeam CD の Bending Moment はは" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby> AB に<ruby>生<rt>しょう</rt></ruby>じるせん<ruby>断力<rt>だんりょく</rt></ruby>は、<ruby>梁<rt>はり</rt></ruby> CD に<ruby>生<rt>しょう</rt></ruby>じるせん<ruby>断力<rt>だんりょく</rt></ruby>よりも<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Beam AB について Shear Force はBeam CD について Shear Force  は" },
      { id: 5, textJP: "(5) P を<ruby>徐々<rt>じょじょ</rt></ruby>に<ruby>増加<rt>ぞうか</rt></ruby>させたとき、<ruby>曲<rt>ま</rt></ruby>げモーメントによる<ruby>応力度<rt>おうりょくど</rt></ruby>が<ruby>降伏点<rt>こうふくてん</rt></ruby>に<ruby>先<rt>さき</rt></ruby>に<ruby>到達<rt>とうたつ</rt></ruby>するのは<ruby>梁<rt>はり</rt></ruby> AB である。", textMY: " P を 場合はBending Stress  Yield Point   Beam  AB は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Span とMoment",
      reasonMY: "Beam AB のSpan はCD ထက် ထက်ဝက်တိုသでAB が ဝန်ပိုယူရは။ ထို့ကြောင့် Beam အလယ်ဗဟိုရှိ အကြီးဆုံး Bending Moment မှာ AB が CD ထက် ၄ ဆ ပိုကြီးမည်ဖြစ်は။",
      memoryTipMY: "Span တိုသော Beam が ဝန်ပိုယူပြီး Moment လည်း ပိုကြီးပါတယ်။"
    }
  },
  {
    id: "2026-1-3",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby> P を<ruby>受<rt>う</rt></ruby>けるラーメン<ruby>骨組<rt>ほねぐみ</rt></ruby>について、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း အလျားလိုက်ဝန် P သက်ရောက်နေသော Rigid Frame (ラーメン) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> C には<ruby>鉛直下向<rt>えんちょくしたむ</rt></ruby>きの<ruby>反力<rt>はんりょく</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Support C について  は" },
      { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby> AB には<ruby>圧縮軸力<rt>あっしゅくじくりょく</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Column AB についてAxial Compression は" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby> AB の<ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>は<ruby>右<rt>みぎ</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>である。", textMY: "Column AB のBending Deformation は は" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby> BC には<ruby>軸力<rt>じくりょく</rt></ruby>は<ruby>生<rt>しょう</rt></ruby>じない。", textMY: "Beam BC についてAxial Force " },
      { id: 5, textJP: "(5) <ruby>梁<rt>はり</rt></ruby> BC の<ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>は<ruby>上<rt>うえ</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>である。", textMY: "Beam BC のBending Deformation は は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Bending Deformation",
      reasonMY: "ဘယ်ဘက်မှ ညာဘက်သို့ ဝန် P တွန်းလိုက်သောအခါ Column AB はဘယ်ဘက်သို့ ခုံး (凸) သွားမည်ဖြစ်は။ ညာဘက်သို့ ခုံးမည်မဟုတ်ပါ။",
      memoryTipMY: "တွန်းတဲ့ဘက်နဲ့ ဆန့်ကျင်ဘက်をခုံးထွက်ပါတယ်။"
    }
  },
  {
    id: "2026-1-4",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるトラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウ、エ、オの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း ဝန်သက်ရောက်နေသော Truss についてMember အ (ア)、အီ (イ)、ဥ (ウ)、ဧ (エ)、အို (オ) တို့၌ ဖြစ်ပေါ်သော Axial Force とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>アには、<ruby>引張<rt>ひっぱ</rt></ruby>りの<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Member  (A) についてTensile Axial Force は" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>と、<ruby>部材<rt>ぶざい</rt></ruby>イに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>は、その<ruby>大<rt>おお</rt></ruby>きさが<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Member  (A) について Axial Force とMember  (I) について Axial Force のはは" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウには<ruby>圧縮<rt>あっしゅく</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Member  (U) についてCompressive Axial Force は" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エには<ruby>引張<rt>ひっぱ</rt></ruby>りの<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Member  (E) についてTensile Axial Force は" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさは、<ruby>部材<rt>ぶざい</rt></ruby>オに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさよりも<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member  (E) について Axial Force のはMember  (O) について Axial Force の は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Axial Force",
      reasonMY: "Member အီ (イ) についてဖြစ်ပေါ်သော Axial Force はMember  (ア) についてဖြစ်ပေါ်သော Axial Force ထက် ပိုမိုကြီးမားは။ ထို့ကြောင့် (2) はမှားယွင်းပါは။",
      memoryTipMY: "Load ဖြတ်သန်းရာ အောက်ပိုင်း Member တွေが Force ပိုများတတ်ပါတယ်။"
    }
  },
  {
    id: "2026-1-5",
    questionJP: "<ruby>引張強度<rt>ひっぱりきょうど</rt></ruby>と<ruby>圧縮強度<rt>あっしゅくきょうど</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい<ruby>部材<rt>ぶざい</rt></ruby>で<ruby>構成<rt>こうせい</rt></ruby>された<ruby>下記<rt>かき</rt></ruby>のトラス<ruby>梁<rt>はり</rt></ruby>に 2 つの<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby> P が<ruby>作用<rt>さよう</rt></ruby>している。P を<ruby>増加<rt>ぞうか</rt></ruby>させたとき、<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>破壊<rt>はかい</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>はどれか。",
    questionMY: "Tensile Strength とCompressive Strength တူညီသော Member များでဖွဲ့စည်းထားသည့် Truss についてဒေါင်လိုက်ဝန် P နှစ်ခု သက်ရောက်နေは။ P をတိုးမြှင့်လိုက်သောအခါ ပထမဆုံး ကျိုးပဲ့မည့် Member မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>ア", textMY: "Member a" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>イ", textMY: "Member i" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウ", textMY: "Member u" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エ", textMY: "Member e" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>オ", textMY: "Member o" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Member Force",
      reasonMY: "Member တစ်ခုချင်းစီのForce များをတွက်ချက်ကြည့်場合はMember အ について√2P (Tensile), အီ についてP (Compressive), ဥ について0, ဧ についてP (Tensile), အို について0 ဖြစ်ပေါ်は။ √2P はအကြီးဆုံးဖြစ်သでအ (ア) が အရင်ဆုံးကျိုးပဲ့မည်။",
      memoryTipMY: "ထောင့်ဖြတ် (Diagonal) Member အ (ア) についてForce အများဆုံးဖြစ်ပေါ်は။"
    }
  },
  {
    id: "2026-1-6",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>同一形状<rt>どういつけいじょう</rt></ruby>の 2 つのトラス<ruby>梁<rt>はり</rt></ruby>について、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း ဝန်သက်ရောက်နေသော ပုံစံတူ Truss နှစ်ခုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> A、<ruby>支点<rt>してん</rt></ruby> B に<ruby>生<rt>しょう</rt></ruby>じる<ruby>反力<rt>はんりょく</rt></ruby>はどちらのトラス<ruby>梁<rt>はり</rt></ruby>も<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Support A とB について Reaction はTruss  は" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby>Ⅱのほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member  について Axial Force はTruss II については" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>イに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby>Ⅰのほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member  について Axial Force はTruss I については" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>ウにはどちらのトラス<ruby>梁<rt>はり</rt></ruby>も<ruby>軸力<rt>じくりょく</rt></ruby>は<ruby>生<rt>しょう</rt></ruby>じない。", textMY: "Member  についてTruss  Axial Force " },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby>Ⅰのほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member  について Axial Force はTruss I については" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Member Forces",
      reasonMY: "Member အ についてဖြစ်ပေါ်သော Axial Force မှာ Truss I နှင့် II နှစ်ခုစလုံးについて1.5P (Compressive) ဖြစ်၍ တူညီပါは။ ထို့ကြောင့် 'Truss II についてပိုကြီးは' ဆိုသောအချက်မှာ မှားယွင်းပါは။",
      memoryTipMY: "Reaction တူညီသောကြောင့် အစွန်ဆုံး အပေါ် Member のForce မှာ တူညီပါは။"
    }
  }
];
