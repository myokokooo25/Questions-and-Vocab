import { StudyCardData } from '../types';

export const chapter1Data: StudyCardData[] = [
  {
    id: "1-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby> P を<ruby>受<rt>う</rt></ruby>けるラーメン<ruby>骨組<rt>ほねぐみ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့်အတိုင်း အလျားလိုက်ဝန် P をခံယူထားသော Portal Frame とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> C には<ruby>鉛直上向<rt>えんちょくうわむ</rt></ruby>きの<ruby>反力<rt>はんりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Support C について   (Reaction Force) は" },
      { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby> AB には<ruby>引張軸力<rt>ひっぱりじくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Column AB について (Tensile axial force) は" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby> AB の<ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>は<ruby>右<rt>みぎ</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>である。", textMY: "Column AB のは は" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby> BC には<ruby>圧縮軸力<rt>あっしゅくじくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる。", textMY: "Beam BC について (Compressive axial force) は" },
      { id: 5, textJP: "(5) <ruby>梁<rt>はり</rt></ruby> BC の<ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>は<ruby>下<rt>した</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>である。", textMY: "Beam BC のは は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဝန်ရိုးလိုက်အားများ (Axial Forces)",
      reasonMY: "အလျားလိုက်ဝန် P が ဘောင်をညာဘက်သို့ တွန်းသောအခါ、Beam BC はဆန့်ထွက်ခြင်းခံရသで၎င်းについて'ဆွဲအား' (引張軸力 - Tension) ဖြစ်ပေါ်は။ ဖိအား (圧縮) ဖြစ်ပေါ်はဟု ဆိုထားသော ရွေးချယ်မှု (၄) はမှားယွင်းပါは။",
      memoryTipMY: "အလျားလိုက်တွန်းရင် Beam が ဆွဲဆန့်ခြင်းခံရလို့ 引張 (Tension) ဖြစ်ပါတယ်။"
    }
  },
  {
    id: "1-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のように、<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>長<rt>なが</rt></ruby>さが<ruby>等<rt>ひと</rt></ruby>しく<ruby>断面<rt>だんめん</rt></ruby>の<ruby>異<rt>こと</rt></ruby>なる 2 <ruby>本<rt>ほん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby> AB と CD が<ruby>中央<rt>ちゅうおう</rt></ruby> O で<ruby>直角<rt>ちょっかく</rt></ruby>に<ruby>繋<rt>つな</rt></ruby>がっている。この<ruby>梁<rt>はり</rt></ruby>について、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းとအလျားတူညီသော်လည်း ဖြတ်ပိုင်းဧရိယာ (断面) မတူညီသော Beam AB とCD နှစ်ခုをအလယ်ဗဟို O についてထောင့်မှန်အတိုင်း ဆက်ထားは။ ဤ Beam とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby> AB、<ruby>梁<rt>はり</rt></ruby> CD ともに、<ruby>曲<rt>ま</rt></ruby>げモーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>が <ruby>最大<rt>さいだい</rt></ruby>になるのは O <ruby>点<rt>てん</rt></ruby>である。", textMY: "Beam AB とCD についてBending Moment はO については" },
      { id: 2, textJP: "(2) O <ruby>点<rt>てん</rt></ruby>での<ruby>梁<rt>はり</rt></ruby> AB の<ruby>曲<rt>ま</rt></ruby>げモーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>と<ruby>梁<rt>はり</rt></ruby> CD の<ruby>曲<rt>ま</rt></ruby>げモーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "O についてBeam AB のBending Moment とBeam CD のBending Moment はは" },
      { id: 3, textJP: "(3) <ruby>支点<rt>してん</rt></ruby> A の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby> C の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>よりも<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Support A のはSupport C の は" },
      { id: 4, textJP: "(4) 4 つの<ruby>支点<rt>してん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>は P である。", textMY: "Support の はP は" },
      { id: 5, textJP: "(5) P を<ruby>増加<rt>ぞうか</rt></ruby>させていくと<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>げ<ruby>応力度<rt>おうりょくど</rt></ruby>が <ruby>許容曲げ応力度<rt>きょようまげおうりょくど</rt></ruby>に<ruby>到達<rt>とうたつ</rt></ruby>するのは<ruby>梁<rt>はり</rt></ruby> AB である。", textMY: " P を場合は Stress    Beam はAB は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Stiffness ($EI$) とMoment ခွဲဝေမှု",
      reasonMY: "Beam AB のဖြတ်ပိုင်း (2a x a) はCD (a x a) ထက် ပိုမိုခိုင်မာ/တောင့်တင်းသောကြောင့် (Stiffness ပိုမြင့်သောကြောင့်) ဝန် P のအစိတ်အပိုင်းをပိုမိုခံယူရမည်ဖြစ်は။ ထို့ကြောင့် O အမှတ်ရှိ Moment များမှာ မတူညီနိုင်ပါ။ (AB のMoment が ပိုကြီးရမည်)။",
      memoryTipMY: "Stiffness (တောင့်တင်းမှု) ပိုရင် Load ပိုယူပြီး Moment ပိုများပါတယ်။"
    }
  },
  {
    id: "1-3",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>骨組<rt>ほねぐみ</rt></ruby>の B <ruby>点<rt>てん</rt></ruby>に<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby> P が <ruby>作用<rt>さよう</rt></ruby>すると、<ruby>左側<rt>ひだりがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby> A には<ruby>左向き<rt>ひだりむき</rt></ruby>の<ruby>水平反力<rt>すいへいはんりょく</rt></ruby> $H_A$ と<ruby>下向き<rt>したむき</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby> $V_A$ が、<ruby>右側<rt>みぎがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby> E には<ruby>上向き<rt>うわむき</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby> $V_E$ が <ruby>生<rt>しょう</rt></ruby>じる。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘောင်のB အမှတ်についてဝန် P သက်ရောက်သောအခါ ဖြစ်ပေါ်လာသော Reaction များဆိုင်ရာ ဖော်ပြချက်များအနက် မှားယွင်းသည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外力<rt>がいりょく</rt></ruby> P と<ruby>水平反力<rt>すいへいはんりょく</rt></ruby> $H_A$ の<ruby>大きさ<rt>おおきさ</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: " P と $H_A$ はは" },
      { id: 2, textJP: "(2) <ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby> $V_A$ と $V_E$ の<ruby>大きさ<rt>おおきさ</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: " $V_A$ と$V_E$ はは" },
      { id: 3, textJP: "(3) <ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby> D <ruby>点<rt>てん</rt></ruby>は、<ruby>荷重<rt>かじゅう</rt></ruby> P が <ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "Joint D は P   は" },
      { id: 4, textJP: "(4) <ruby>支点<rt>してん</rt></ruby> E は、<ruby>荷重<rt>かじゅう</rt></ruby> P が <ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "Support E は P   は" },
      { id: 5, textJP: "(5) <ruby>曲<rt>ま</rt></ruby>げモーメントが <ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくなるのは C <ruby>点<rt>てん</rt></ruby>である。", textMY: "Bending Moment はC については" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Pin Joint (ヒンジ) とMoment",
      reasonMY: "C အမှတ်はPin Joint (ဟင်းချ်) ဖြစ်သောကြောင့် Bending Moment はအမြဲတမ်း 'သုည' (Zero) ဖြစ်は။ ထို့ကြောင့် C についてMoment အကြီးဆုံးဖြစ်はဆိုသော အချက်မှာ လုံးဝမှားယွင်းは။",
      memoryTipMY: "ဟင်းချ် (Hinge) ဆက်ကြောင်းနေရာမှာ Moment が အမြဲတမ်း သုည (0) ပါ။"
    }
  },
  {
    id: "1-4",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける 2 つのトラス<ruby>梁<rt>はり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့် Truss Beam နှစ်ခုとပတ်သက်၍ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> A、<ruby>支点<rt>してん</rt></ruby> B に<ruby>生<rt>しょう</rt></ruby>じる<ruby>反力<rt>はんりょく</rt></ruby>はどちらのトラス<ruby>梁<rt>はり</rt></ruby>も<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Support A とB のはTruss については" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>軸力<rt>じくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じるのはトラス<ruby>梁<rt>はり</rt></ruby> II のみである。", textMY: "Member (ア) については Truss II について は" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>イの<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> I のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member (イ) のはTruss I については" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>ウにはどちらのトラス<ruby>梁<rt>はり</rt></ruby>も<ruby>軸力<rt>じくりょく</rt></ruby>は<ruby>生<rt>しょう</rt></ruby>じない。", textMY: "Member (ウ) についてTruss  " },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> II のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member (エ) のはTruss II については" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Asymmetrical Loading (မညီမျှသောဝန်)",
      reasonMY: "Truss I についてဝန် 3P はညာဘက်သို့ ကပ်နေသောကြောင့် (Asymmetrical)、Support A အနီးရှိ Member (ア) についてလည်း အား (Axial force) ဖြစ်ပေါ်は။ ထို့ကြောင့် Truss II についてသာ ဖြစ်ပေါ်はဆိုသော အချက်မှာ မှားယွင်းは။",
      memoryTipMY: "ဝန်သက်ရောက်ပုံ မညီမျှရင် Member အားလုံးနီးပါးမှာ အားဖြစ်ပေါ်တတ်ပါတယ်။"
    }
  },
  {
    id: "1-5",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける 2 つのトラス<ruby>梁<rt>はり</rt></ruby>について、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့် Truss Beam နှစ်ခုとပတ်သက်၍ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> II のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member (ア) について はTruss II については" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>イに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> I、トラス<ruby>梁<rt>はり</rt></ruby> II ともに<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Member (イ) について はTruss については" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> II のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Member (ウ) について はTruss II については" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> I、トラス<ruby>梁<rt>はり</rt></ruby> II ともに 0 である。", textMY: "Member (エ) について はTruss について (0) は" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>オに<ruby>軸力<rt>じくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じるのは、トラス<ruby>梁<rt>はり</rt></ruby> I だけである。", textMY: "Member (オ) については Truss I について は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Support Reaction と軸力",
      reasonMY: "Truss II についてညာဘက် Support のအစွန်း၌ ဝန် 2P ရှိနေသောကြောင့်、ထိုနေရာရှိ ဒေါင်လိုက် member (オ) についてလည်း အား (Axial force) ဖြစ်ပေါ်は။ ထို့ကြောင့် Truss I についてသာ ဖြစ်ပေါ်はဟူသော အချက်မှာ မှားယွင်းは။",
      memoryTipMY: "Support နေရာမှာ ဝန်သက်ရောက်နေရင် အဲ့ဒီ Member မှာ အားရှိပါတယ်။"
    }
  },
  {
    id: "1-6",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるトラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>組合<rt>くみあわ</rt></ruby>せのうち、<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့်အတိုင်း ဝန် (Load) သက်ရောက်နေသော Truss Beam ရှိ အစိတ်အပိုင်း (ア、イ、ウ) တို့についてအသီးသီးဖြစ်ပေါ်နေသော ဝင်ရိုးအား (Axial Force) များのမှန်ကန်သော ပေါင်းစပ်မှုをရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：0、ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "ア ():  (Compression)、イ ():  (0)、ウ ():  (Tension)" },
      { id: 2, textJP: "(2) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：0、ウ：<ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "ア (): 、イ (): 、ウ (): " },
      { id: 3, textJP: "(3) ア：<ruby>引張<rt>ひっぱり</rt></ruby>、イ：0、ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "ア (): 、イ (): 、ウ (): " },
      { id: 4, textJP: "(4) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：<ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "ア (): 、イ (): 、ウ (): " },
      { id: 5, textJP: "(5) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：<ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ：<ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "ア (): 、イ (): 、ウ (): " }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Member Forces",
      reasonMY: "Truss ဖွဲ့စည်းပုံについてအပေါ်ဘက် Member များはများသောအားでဖိအား (Compression) ခံရပြီး、အောက်ဘက် Member များはဆွဲအား (Tension) ခံရလေ့ရှိは။ Member (イ) はဤအခြေအနေについてအားမသက်ရောက်သော (Zero-force member) ဖြစ်は။",
      memoryTipMY: "Truss: အပေါ်ဘက် -> 圧縮 (Compression) ခံရは、အောက်ဘက် -> 引張 (Tension) ခံရは။"
    }
  },
  {
    id: "1-7",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖွဲ့စည်းပုံ ဒီဇိုင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>はコンクリートや<ruby>木材<rt>もくざい</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>比強度<rt>ひきょうど</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いため、<ruby>小<rt>ちい</rt></ruby>さな<ruby>断面<rt>だんめん</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>強度<rt>きょうど</rt></ruby>を <ruby>満<rt>み</rt></ruby>たすことができる。", textMY: "はSpecific Strength   でをは" },
      { id: 2, textJP: "(2) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>高<rt>たか</rt></ruby>い<ruby>靭性<rt>じんせい</rt></ruby>を <ruby>有<rt>ゆう</rt></ruby>しているため、<ruby>座屈<rt>ざくつ</rt></ruby>や<ruby>脆性破壊<rt>ぜいせいはかい</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じなければ<ruby>大地震時<rt>だいじしんじ</rt></ruby>においても<ruby>優<rt>すぐ</rt></ruby>れた<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を <ruby>有<rt>ゆう</rt></ruby>している。", textMY: "はToughness  Buckling  Brittle Fracture   は" },
      { id: 3, textJP: "(3) <ruby>弾性範囲<rt>だんせいはんい</rt></ruby>に<ruby>留<rt>とど</rt></ruby>まることを<ruby>目標<rt>もくひょう</rt></ruby>とした<ruby>設計法<rt>せっけいほう</rt></ruby>を<ruby>許容応力度設計法<rt>きょようおうりょくどせっけいほう</rt></ruby>という。", textMY: "Elastic Range について   Allowable Stress Design は" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>はヤング<ruby>係数<rt>けいすう</rt></ruby>が <ruby>高<rt>たか</rt></ruby>く<ruby>変形<rt>へんけい</rt></ruby>しにくいため、RC<ruby>造<rt>ぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると<ruby>過大<rt>かだい</rt></ruby>な<ruby>撓<rt>たわ</rt></ruby>みや<ruby>振動<rt>しんどう</rt></ruby>への<ruby>配慮<rt>はいりょ</rt></ruby>は<ruby>ほとんど必要ない<rt>ほとんどひつようない</rt></ruby>。", textMY: "はYoung's Modulus  RC と      " },
      { id: 5, textJP: "(5) <ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>接合部設計<rt>せつごうぶせっけい</rt></ruby>や<ruby>溶接品質管理<rt>ようせつひんしつかんり</rt></ruby>が <ruby>原因<rt>げんいん</rt></ruby>での<ruby>被害<rt>ひがい</rt></ruby>が <ruby>多数観察<rt>たすうかんさつ</rt></ruby>されている。", textMY: "      は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သံမဏိのပျော့ပြောင်းမှု (Flexibility)",
      reasonMY: "သံမဏိတည်ဆောက်ပုံများはပစ္စည်းပါးလွှာပြီး RC ထက် ပိုမိုပျော့ပြောင်းသောကြောင့် (Stiffness နိမ့်သောကြောင့်)、ကွေးညွှတ်မှု (Deflection) とတုန်ခါမှု (Vibration) ပြဿနာများをRC ထက် ပိုမို ဂရုစိုက် စဉ်းစားရန် လိုအပ်は။ 'မလိုအပ်ပါ' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "သံမဏိဟာ RC ထက် ပိုတုန်ခါ (Vibration) လွယ်လို့ ပိုပြီး သတိထားရပါတယ်။"
    }
  },
  {
    id: "1-8",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖွဲ့စည်းပုံ ဒီဇိုင်းとပတ်သက်၍ အသင့်လျော်ဆုံးအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨加工時<rt>てっこつかこうじ</rt></ruby>の<ruby>溶接施工<rt>ようせつせこう</rt></ruby>は<ruby>加工工場<rt>かこうこうじょう</rt></ruby>の<ruby>技術力<rt>ぎじゅつりょく</rt></ruby>に<ruby>委<rt>ゆだ</rt></ruby>ねられているので、<ruby>設計時<rt>せっけいじ</rt></ruby>に<ruby>仕口<rt>しぐち</rt></ruby>の<ruby>組立加工<rt>くみたてかこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>や<ruby>合理性<rt>ごうりせい</rt></ruby>について<ruby>特に考慮<rt>とくにこうりょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "をの でについてのを " },
      { id: 2, textJP: "(2) <ruby>過去<rt>かこ</rt></ruby>の<ruby>地震被害<rt>じしんひがい</rt></ruby>において、<ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>接合部設計<rt>せつごうぶせっけい</rt></ruby>や<ruby>溶接品質管理<rt>ようせつひんしつかんり</rt></ruby>が <ruby>原因<rt>げんいん</rt></ruby>と<ruby>考<rt>かんが</rt></ruby>えられる<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>の<ruby>被害<rt>ひがい</rt></ruby>が <ruby>多数観察<rt>たすうかんさつ</rt></ruby>されている。", textMY: "      は" },
      { id: 3, textJP: "(3) <ruby>外力<rt>がいりょく</rt></ruby>が<ruby>作用<rt>さよう</rt></ruby>したときに<ruby>骨組全体<rt>ほねぐみぜんたい</rt></ruby>が<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>に<ruby>留<rt>とど</rt></ruby>まることを<ruby>目標<rt>もくひょう</rt></ruby>とした<ruby>設計法<rt>せっけいほう</rt></ruby>を<ruby>終局耐力設計法<rt>しゅうきょくたいりょくせっけいほう</rt></ruby>という。", textMY: "Elastic Range について   Ultimate Strength Design は" },
      { id: 4, textJP: "(4) <ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>で<ruby>用<rt>もち</rt></ruby>いられる<ruby>鋼材<rt>こうざい</rt></ruby>はヤング<ruby>係数<rt>けいすう</rt></ruby>が <ruby>高<rt>たか</rt></ruby>く<ruby>変形<rt>へんけい</rt></ruby>しにくいため、RC<ruby>造<rt>ぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると<ruby>過大<rt>かだい</rt></ruby>な<ruby>撓<rt>たわ</rt></ruby>みや<ruby>振動<rt>しんどう</rt></ruby>への<ruby>配慮<rt>はいりょ</rt></ruby>は<ruby>ほとんど必要ない<rt>ほとんどひつようない</rt></ruby>。", textMY: "はStiffness  RC と     " },
      { id: 5, textJP: "(5) <ruby>地震動<rt>じしんどう</rt></ruby>によって<ruby>建物<rt>たてもの</rt></ruby>の<ruby>各部<rt>かくぶ</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>力<rt>ちから</rt></ruby>を<ruby>地震力<rt>じしんりょく</rt></ruby>という。<ruby>制振構造<rt>せいしんこうぞう</rt></ruby>は<ruby>特定層<rt>とくていそう</rt></ruby>を<ruby>極端<rt>きょくたん</rt></ruby>に<ruby>柔らかく<rt>やわらかく</rt></ruby>し、<ruby>地震力<rt>じしんりょく</rt></ruby>によるエネルギーをこの<ruby>特定層<rt>とくていそう</rt></ruby>で<ruby>吸収<rt>きゅうしゅう</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Damping Structure はを  は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သံမဏိတည်ဆောက်ပုံのအားနည်းချက်များ",
      reasonMY: "အတိတ်ရှိ ငလျင်များについてသံမဏိအဆောက်အဦများ ပျက်စီးရခြင်းのအဓိကအကြောင်းရင်းမှာ အဆက်အစပ် (Joint) ဒီဇိုင်းများ မှားယွင်းခြင်းとဂဟေဆက်ခြင်း အရည်အသွေး ညံ့ဖျင်းခြင်းတို့ကြောင့်ဖြစ်ကြောင်း လက်တွေ့လေ့လာတွေ့ရှိထားပါは။ ဤはမှာ အသင့်လျော်ဆုံး အမှန်တရားဖြစ်は။",
      memoryTipMY: "သံမဏိဘောင်မှာ Joint တွေが အရေးကြီးဆုံး (Weak point) ပါပဲ။"
    }
  },
  {
    id: "1-9",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖွဲ့စည်းပုံ ဒီဇိုင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく、<ruby>日常的<rt>にちじょうてき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>振動<rt>しんどう</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "  を " },
      { id: 2, textJP: "(2) <ruby>設計者<rt>せっけいしゃ</rt></ruby>は、<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>から<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby><ruby>等<rt>とう</rt></ruby>の<ruby>納まり<rt>おさまり</rt></ruby>や<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>するよう<ruby>努<rt>つと</rt></ruby>めるべきである。", textMY: "はが のをは" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>高い靭性（粘り強さ）<rt>たかいじんせい（ねばりつよさ）</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>しているため、<ruby>座屈<rt>ざくつ</rt></ruby>や<ruby>破断<rt>はだん</rt></ruby>を<ruby>発生<rt>はっせい</rt></ruby>させないことが<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を<ruby>高<rt>たか</rt></ruby>める<ruby>上<rt>うえ</rt></ruby>で<ruby>大切<rt>たいせつ</rt></ruby>である。", textMY: "はtoughness でbuckling  breakage  が は" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>比重<rt>ひじゅう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいため、<ruby>同規模<rt>どうきぼ</rt></ruby>の<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリート<ruby>造<rt>ぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>と<ruby>比較<rt>ひかく</rt></ruby>すると<ruby>鉄骨造<rt>てっこつぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>は<ruby>自重<rt>じじゅう</rt></ruby>が <ruby>大<rt>おお</rt></ruby>きくなり、<ruby>地震時<rt>じしんじ</rt></ruby>の<ruby>設計荷重<rt>せっけいかじゅう</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "ははでRC と     " },
      { id: 5, textJP: "(5) <ruby>建物<rt>たてもの</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、<ruby>骨組全体<rt>ほねぐみぜんたい</rt></ruby>が<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>に<ruby>留<rt>とど</rt></ruby>まることを<ruby>目標<rt>もくひょう</rt></ruby>とした<ruby>設計法<rt>せっけいほう</rt></ruby>を<ruby>許容応力度設計法<rt>きょようおうりょくどせっけいほう</rt></ruby>という。", textMY: "Elastic range について   Allowable stress design は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 鋼構造の軽量性",
      reasonMY: "သံမဏိ (Steel) はသိပ်はးဆ ကြီးမားသော်လည်း、၎င်းのခိုင်မာမှု (Strength) မှာ အလွန်မြင့်မားသောကြောင့် ကွန်ကရစ်ထက် များစွာ သေးငယ်သော ဖြတ်ပိုင်းများでတည်ဆောက်နိုင်は။ ထို့ကြောင့် အမှန်တကယ်についてသံမဏိအဆောက်အဦはRC အဆောက်အဦထက် များစွာ 'ပိုမိုပေါ့ပါး' (軽量) ပါは။ ပိုလေးはဆိုသော အချက်မှာ မှားယွင်းは။",
      memoryTipMY: "သံမဏိအဆောက်အဦဟာ RC ထက် ပိုပြီး ပေါ့ပါး (Lightweight) ပါတယ်။"
    }
  },
  {
    id: "1-10",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いられる<ruby>主<rt>おも</rt></ruby>な<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ ပုံစံများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ブレース<ruby>構造<rt>こうぞう</rt></ruby>は、<ruby>鉛直構面内<rt>えんちょくこうめんない</rt></ruby>に<ruby>筋<rt>すじ</rt></ruby>かいと<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>斜材<rt>しゃざい</rt></ruby>を<ruby>配置<rt>はいち</rt></ruby>し、<ruby>斜材<rt>しゃざい</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>によって<ruby>地震<rt>じしん</rt></ruby>や<ruby>風<rt>かぜ</rt></ruby>などの<ruby>水平力<rt>すいへいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Brace Structure はdiagonal member のaxial force でをは" },
      { id: 2, textJP: "(2) <ruby>立体<rt>りったい</rt></ruby>トラス<ruby>構造<rt>こうぞう</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>三角錐<rt>さんかくすい</rt></ruby>（または<ruby>四角錐<rt>しかくすい</rt></ruby>）<ruby>形状<rt>けいじょう</rt></ruby>に<ruby>多数組み合わせ<rt>たすうくみあわせ</rt></ruby>、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。<ruby>平面<rt>へいめん</rt></ruby>トラス<ruby>構造<rt>こうぞう</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べるとトラスのせいが<ruby>大<rt>おお</rt></ruby>きくなるという<ruby>欠点<rt>けってん</rt></ruby>がある。", textMY: "Space Truss はFlat Truss  truss depth   は " },
      { id: 3, textJP: "(3) <ruby>免震構造<rt>めんしんこうぞう</rt></ruby>は、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>特定<rt>とくてい</rt></ruby>の<ruby>層<rt>そう</rt></ruby>を<ruby>他<rt>他</rt></ruby>の<ruby>層<rt>そう</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>極端<rt>きょくたん</rt></ruby>に<ruby>柔らかく<rt>やわらかく</rt></ruby>した<ruby>上<rt>うえ</rt></ruby>でエネルギー<ruby>吸収装置<rt>きゅうしゅうそうち</rt></ruby>を<ruby>設<rt>もう</rt></ruby>け、<ruby>地震入力<rt>じしんにゅうりょく</rt></ruby>エネルギーの<ruby>大半<rt>たいはん</rt></ruby>を<ruby>吸収<rt>きゅうしゅう</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Seismic Isolation はで をは" },
      { id: 4, textJP: "(4) <ruby>制振構造<rt>せいしんこうぞう</rt></ruby>は、ダンパーと<ruby>呼<rt>よ</rt></ruby>ばれるエネルギー<ruby>吸収装置<rt>きゅうしゅうそうち</rt></ruby>を<ruby>建物内<rt>たてものない</rt></ruby>に<ruby>設置<rt>せっち</rt></ruby>することによって<ruby>建物全体<rt>たてものぜんたい</rt></ruby>の<ruby>地震時<rt>じしんじ</rt></ruby>の<ruby>揺れ<rt>ゆれ</rt></ruby>を<ruby>低減<rt>ていげん</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Damping Structure はdamper でのをは" },
      { id: 5, textJP: "(5) <ruby>鉄骨枠付<rt>てっこつわくつ</rt></ruby>きブレースは<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリート<ruby>造<rt>ぞう</rt></ruby>の<ruby>耐震補強<rt>たいしんほきょう</rt></ruby>に<ruby>多<rt>おお</rt></ruby>く<ruby>用<rt>もち</rt></ruby>いられる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: " brace をRC  については" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 立体トラス (Space Truss)",
      reasonMY: "Space Truss (立体トラス) はဝန်を3D ပုံစံでဖြန့်ဝေခံယူသောကြောင့်、Plane Truss (平面トラス) ထက် Truss depth (トラスのせい) をပိုမို 'သေးငယ်အောင်' (小さく) လုပ်ဆောင်နိုင်は။ 'ကြီးမားရမည်' ဟူသော အချက်မှာ မှားယွင်းは။",
      memoryTipMY: "3D (Space) Truss ဟာ 2D Truss ထက် ပိုပြီး ကျစ်လျစ်ပါးလွှာနိုင်ပါတယ်။"
    }
  },
  {
    id: "1-11",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>の<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ ပုံစံများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>純ラーメン構造<rt>じゅんラーメンこうぞう</rt></ruby>は、<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>で<ruby>多用<rt>たよう</rt></ruby>されている<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。<ruby>平面計画上<rt>へいめんけいかくじょう</rt></ruby>の<ruby>自由度<rt>じゆうど</rt></ruby>が <ruby>高い<rt>たかい</rt></ruby>ため、オフィス、ホテル、<ruby>商業施設<rt>しょうぎょうしせつ</rt></ruby>などで<ruby>用<rt>もち</rt></ruby>いられる。", textMY: "Pure Rahmen structure は 、については" },
      { id: 2, textJP: "(2) <ruby>立体トラス構造<rt>りったいトラスこうぞう</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>三角錐<rt>さんかくすい</rt></ruby>や<ruby>四角錐<rt>しかくすい</rt></ruby>に<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ、それを<ruby>連続<rt>れんぞく</rt></ruby>させることで<ruby>自由<rt>じゆう</rt></ruby>な<ruby>形状<rt>けいじょう</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>できる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Space truss はを は" },
      { id: 3, textJP: "(3) <ruby>アーチ構造<rt>アーチこうぞう</rt></ruby>は、<ruby>上方<rt>じょうほう</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>な<ruby>曲線<rt>きょくせん</rt></ruby>に<ruby>沿<rt>そ</rt></ruby>って<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>配置<rt>はいち</rt></ruby>し、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Arch structure はでをは" },
      { id: 4, textJP: "(4) <ruby>ブレース構造<rt>ブレースこうぞう</rt></ruby>は、<ruby>構面内<rt>こうめんない</rt></ruby>に<ruby>設置<rt>せっち</rt></ruby>した<ruby>筋かい<rt>すじかい</rt></ruby>によって<ruby>水平力<rt>すいへいりょく</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>あるいは<ruby>全部<rt>ぜんぶ</rt></ruby>を<ruby>負担<rt>ふたん</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Brace structure はbrace でを は" },
      { id: 5, textJP: "(5) <ruby>テンション構造<rt>テンションこうぞう</rt></ruby>は、<ruby>軸力<rt>じくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>引張材<rt>ひっぱりざい</rt></ruby>と<ruby>圧縮材<rt>あっしゅくざい</rt></ruby>に<ruby>明確<rt>めいかく</rt></ruby>に<ruby>分類<rt>ぶんるい</rt></ruby>し、<ruby>強風<rt>きょうふう</rt></ruby>による<ruby>振動障害等<rt>しんどうしょうがいとう</rt></ruby>も<ruby>少ない<rt>すくない</rt></ruby>という<ruby>長所<rt>ちょうしょ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", textMY: "Tension structure は  は " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - テンション構造 (Tension Structure)",
      reasonMY: "Tension Structure (ဥပမာ- ကေဘယ်ကြိုးတည်ဆောက်ပုံ) များはအလွန်ပေါ့ပါးပြီး ပျော့ပျောင်းသောကြောင့် လေပြင်းတိုက်ခတ်ချိန်について'တုန်ခါမှု' (Vibration/Oscillation) အလွန်ဖြစ်ပေါ်လွယ်は။ ထို့ကြောင့် တုန်ခါမှုနည်းはဆိုသော (၅) မှာ မှားယွင်းは။",
      memoryTipMY: "ကေဘယ် (Tension) ကြိုးတွေဟာ လေတိုက်ရင် တုန်ခါ (Vibration) လွယ်ပါတယ်။"
    }
  },
  {
    id: "1-12",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>座屈<rt>ざくつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများのBuckling とပတ်သက်၍ အသင့်လျော်ဆုံး (မှန်ကန်သော) အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐには、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>材種<rt>ざいしゅ</rt></ruby>をより<ruby>高強度<rt>こうきょうど</rt></ruby>のものに<ruby>変更<rt>へんこう</rt></ruby>すれば<ruby>良い<rt>よい</rt></ruby>。", textMY: "Lateral buckling を    (High strength)  は " },
      { id: 2, textJP: "(2) <ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が <ruby>薄<rt>うす</rt></ruby>すぎると、<ruby>部材全体<rt>ぶざいぜんたい</rt></ruby>としての<ruby>座屈<rt>ざくつ</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる<ruby>前<rt>まえ</rt></ruby>に<ruby>板要素<rt>いたようそ</rt></ruby>が <ruby>波打<rt>なみう</rt></ruby>つことがある。これを<ruby>防止<rt>ぼうし</rt></ruby>するために<ruby>細長比制限<rt>ほそながひせいげん</rt></ruby>が <ruby>設けられている<rt>もうけられている</rt></ruby>。", textMY: "場合は は を Slenderness ratio をは" },
      { id: 3, textJP: "(3) <ruby>曲げ座屈<rt>まげざくつ</rt></ruby>で<ruby>耐力<rt>たいりょく</rt></ruby>が <ruby>決定<rt>けってい</rt></ruby>される<ruby>圧縮材<rt>あっしゅくざい</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>、<ruby>断面積<rt>だんめんせき</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさが<ruby>等<rt>ひと</rt></ruby>しければ<ruby>長方形断面<rt>ちょうほうけいだんめん</rt></ruby>でも<ruby>正方形断面<rt>せいほうけいだんめん</rt></ruby>でも<ruby>曲げ座屈強度<rt>まげざくつきょうど</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じである。", textMY: " と のbuckling strength  は " },
      { id: 4, textJP: "(4) <ruby>座屈拘束ブレース<rt>ざくつこうそくぶれーす</rt></ruby>は、<ruby>軸力<rt>じくりょく</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>芯材<rt>しんざい</rt></ruby>の<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>を<ruby>抑<rt>おさ</rt></ruby>えるため<ruby>鞘状<rt>さやじょう</rt></ruby>の<ruby>補剛材<rt>ほごうざい</rt></ruby>などで<ruby>覆<rt>おお</rt></ruby>い、<ruby>芯材<rt>しんざい</rt></ruby>が <ruby>降伏<rt>こうふく</rt></ruby>するまで<ruby>座屈<rt>ざくつ</rt></ruby>による<ruby>耐力低下<rt>たいりょくていか</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じないブレース<ruby>部材<rt>ぶざい</rt></ruby>である。", textMY: "Buckling Restrained Brace はcore material をが ででbuckling     は" },
      { id: 5, textJP: "(5) <ruby>角形鋼管<rt>かくがたこうかん</rt></ruby>や<ruby>円形鋼管<rt>えんけいこうかん</rt></ruby>などの<ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>では、<ruby>圧縮力<rt>あっしゅくりょく</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>しても<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>が <ruby>発生<rt>はっせい</rt></ruby>することはないので、<ruby>細長比<rt>ほそながひ</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "についてbuckling でslenderness ratio を  " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 座屈拘束ブレース (BRB)",
      reasonMY: "BRB (座屈拘束ブレース) はအလယ်ရှိ 芯材 (Core material) အား Buckling မဖြစ်စေရန် အပြင်မှ 鞘状 (Sheath) でကာကွယ်ထားသောကြောင့်、ဖိအားအောက်についてလည်း core が ပြားသွားはအထိ ခံနိုင်ရည်ရှိပြီး buckling မဖြစ်ပါ။ ဤဖော်ပြချက်မှာ မှန်ကန်ပါは။",
      memoryTipMY: "BRB ဆိုတာ Buckling (ကွေးထွက်ခြင်း) を'Restrained' (တားဆီး) ထားတဲ့ member ပါ။"
    }
  },
  {
    id: "1-13",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်း ဒီဇိုင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>柱<rt>はしら</rt></ruby>の<ruby>局部座屈耐力<rt>きょくぶざくつたいりょく</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるため、<ruby>板要素<rt>いたようそ</rt></ruby>の<ruby>幅厚比<rt>はばあつひ</rt></ruby>をより<ruby>大<rt>おお</rt></ruby>きくした。", textMY: "Local Buckling を Width-to-thickness ratio (幅厚比) をは " },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>げ<ruby>剛性<rt>ごうせい</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>梁せい<rt>はりせい</rt></ruby>を 1 <ruby>サイズ大きく<rt>さいずおおきく</rt></ruby>した。", textMY: "Bending Stiffness でbeam depth を は" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>下<rt>した</rt></ruby>フランジ<ruby>位置<rt>いち</rt></ruby>にも<ruby>水平<rt>すいへい</rt></ruby>ブレースとつなぎ<ruby>材<rt>ざい</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けた。", textMY: "Lateral Buckling を  flange について brace と は" },
      { id: 4, textJP: "(4) H<ruby>形鋼<rt>がたこう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>筋<rt>すじ</rt></ruby>かいの<ruby>曲げ座屈耐力<rt>まげざくつたいりょく</rt></ruby>を<ruby>上げ<rt>あげ</rt></ruby>るため、ウェブの<ruby>板厚<rt>いたあつ</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくした。", textMY: "Buckling resistance  web plate をは" },
      { id: 5, textJP: "(5) <ruby>天井走行<rt>てんじょうそうこう</rt></ruby>クレーンのスリップを<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>受け梁<rt>うけばり</rt></ruby>のたわみ<ruby>制限<rt>せいげん</rt></ruby>を<ruby>一般<rt>いっぱん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>よりも<ruby>厳<rt>きび</rt></ruby>しくした。", textMY: "を  をは" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 幅厚比 (Width-to-thickness ratio)",
      reasonMY: "Local Buckling (局部座屈) をကာကွယ်ရန်အတွက် သံပြားはပိုမိုထူရမည်။ သံပြားထူလေ Width-to-thickness ratio はပိုမို 'သေးငယ်' (小さく) လေဖြစ်は။ ပိုကြီးအောင်လုပ်はဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "သံပြားထူရင် 幅厚比 (Ratio) နည်းသွားပြီး ခိုင်မာမှု တက်လာပါတယ်။"
    }
  },
  {
    id: "1-14",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်း ဒီဇိုင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲げ強度<rt>まげきょうど</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>同じ梁せい<rt>おなじはりせい</rt></ruby>でよりフランジの<ruby>厚い断面<rt>あついだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>した。", textMY: "Bending strength でbeam depth  flange  をは" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>鋼種<rt>こうしゅ</rt></ruby>はそのままとし<ruby>梁せい<rt>はりせい</rt></ruby>を 1 <ruby>サイズ大きく<rt>さいずおおきく</rt></ruby>した。", textMY: "Bending stiffness でbeam depth を は" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>するため、その<ruby>梁<rt>はり</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>く<ruby>小梁<rt>こばり</rt></ruby>の<ruby>本数<rt>ほんすう</rt></ruby>を<ruby>増やした<rt>ふやした</rt></ruby>。", textMY: "Lateral Buckling を  beam について secondary beam をは" },
      { id: 4, textJP: "(4) H<ruby>形鋼<rt>がたこう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>筋<rt>すじ</rt></ruby>かいの<ruby>曲げ座屈耐力<rt>まげざくつたいりょく</rt></ruby>を<ruby>上げる<rt>あげる</rt></ruby>ため、<ruby>筋<rt>すじ</rt></ruby>かいの<ruby>強軸曲げ方向<rt>きょうじくまげほうこう</rt></ruby>に<ruby>座屈補剛材<rt>ざくつほごうざい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けた。", textMY: "Buckling resistance  strong axis   は " },
      { id: 5, textJP: "(5) <ruby>天井走行<rt>てんじょうそうこう</rt></ruby>クレーンのスリップを<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>受け梁<rt>うけばり</rt></ruby>のたわみ<ruby>制限<rt>せいげん</rt></ruby>を<ruby>一般<rt>いっぱん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>よりも<ruby>厳<rt>きび</rt></ruby>しくした。", textMY: "   をは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 強軸 vs 弱軸 (Strong vs Weak Axis)",
      reasonMY: "Buckling (座屈) はများသောအားでခံနိုင်ရည် အနည်းဆုံးဖြစ်သော 'အားနည်းသည့် ဝင်ရိုး' (弱軸 - Weak axis) ဘက်သို့ ဖြစ်ပေါ်တတ်は။ ထို့ကြောင့် အားဖြည့်ရာについてလည်း 弱軸 ဘက်သို့သာ အဓိが လုပ်ဆောင်ရမည်။ 強軸 ဟု ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Buckling が အားနည်းတဲ့ဘက် (Weak axis) をပဲ ကွေးထွက်တတ်ပါတယ်။"
    }
  },
  {
    id: "1-15",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်း ဒီဇိုင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) H<ruby>形断面<rt>がただんめん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>において、<ruby>断面<rt>だんめん</rt></ruby>のねじりを<ruby>伴<rt>ともな</rt></ruby>いながら<ruby>圧縮側<rt>あっしゅくがわ</rt></ruby>フランジが <ruby>横方向<rt>よこほうこう</rt></ruby>に<ruby>座屈<rt>ざくつ</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>横座屈<rt>よこざくつ</rt></ruby>という。", textMY: "H-beam は場合は  をLateral Buckling  は" },
      { id: 2, textJP: "(2) <ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が <ruby>薄<rt>うす</rt></ruby>すぎると、<ruby>部材全体<rt>ぶざいぜんたい</rt></ruby>としての<ruby>座屈<rt>ざくつ</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる<ruby>前<rt>まえ</rt></ruby>に<ruby>板要素<rt>いたようそ</rt></ruby>が <ruby>波打<rt>なみう</rt></ruby>つことがある。これを<ruby>防止<rt>ぼうし</rt></ruby>するために、<ruby>幅厚比制限<rt>はばあつひせいげん</rt></ruby>が <ruby>設<rt>もう</rt></ruby>けられている。", textMY: "場合は は を Width-to-thickness ratio をは" },
      { id: 3, textJP: "(3) <ruby>角形鋼管<rt>かくがたこうかん</rt></ruby>や<ruby>円形鋼管<rt>えんけいこうかん</rt></ruby>などの<ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>では、<ruby>曲<rt>ま</rt></ruby>げモーメントが <ruby>作用<rt>さよう</rt></ruby>しても<ruby>横座屈<rt>よこざくつ</rt></ruby>は<ruby>発生<rt>はっせい</rt></ruby>することはないので、<ruby>設計時<rt>せっけいじ</rt></ruby>に<ruby>横座屈<rt>よこざくつ</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: " についてLateral Buckling   " },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>げ<ruby>剛性<rt>ごうせい</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>断面形状<rt>だんめんけいじょう</rt></ruby>をそのままとし<ruby>鋼種<rt>こうしゅ</rt></ruby>を SN400B から SN490B に<ruby>変更<rt>へんこう</rt></ruby>することで<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させた。", textMY: " で をSN400  SN490  は " },
      { id: 5, textJP: "(5) <ruby>柱<rt>はしら</rt></ruby>の<ruby>局部座屈耐力<rt>きょくぶざくつたいりょく</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるため、<ruby>板要素<rt>いたようそ</rt></ruby>の<ruby>幅厚比<rt>はばあつひ</rt></ruby>をより<ruby>小さく<rt>ちいさく</rt></ruby>した。", textMY: "Local Buckling を Width-to-thickness ratio をは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ヤング係数 (Young's Modulus) の不変性",
      reasonMY: "တောင့်တင်းမှု (Stiffness) はYoung's Modulus (E) အပေါ် မူတည်は။ သံမဏိ အမျိုးအစား မည်သို့ပင်ဖြစ်စေ (SN400 ဖြစ်စေ、SN490 ဖြစ်စေ) Young's Modulus はအမြဲတမ်း တူညီပါは။ ထို့ကြောင့် သံမဏိအမျိုးအစား ပြောင်းလဲရုံでတောင့်တင်းမှု (剛性) မြင့်တက်မလာပါ။",
      memoryTipMY: "သံအမျိုးအစား (Grade) မြင့်ပေမယ့် တောင့်တင်းမှု (E) ကတော့ အတူတူပါပဲ။"
    }
  },
  {
    id: "1-16",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုとပတ်သက်၍ အသင့်လျော်ဆုံး (မှန်ကန်သော) အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>には<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>と<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>の 2 <ruby>種類<rt>しゅるい</rt></ruby>があり、それぞれ<ruby>独立<rt>どくりつ</rt></ruby>で<ruby>用<rt>もち</rt></ruby>いることも<ruby>併用<rt>へいよう</rt></ruby>して<ruby>用<rt>もち</rt></ruby>いることも<ruby>可能<rt>かのう</rt></ruby>である。", textMY: "HS Bolt についてFriction Joint とTension Joint    を は" },
      { id: 2, textJP: "(2) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>用<rt>よう</rt></ruby>の<ruby>孔あけ<rt>あなあけ</rt></ruby>には、<ruby>板厚<rt>いたあつ</rt></ruby> 12mm <ruby>以下<rt>いか</rt></ruby>の<ruby>板<rt>いた</rt></ruby>を<ruby>除<rt>のぞ</rt></ruby>き、<ruby>必ず<rt>かならず</rt></ruby>ドリルあるいはレーザを<ruby>用<rt>もち</rt></ruby>いなければならない。", textMY: "  mm について Drill  Laser を  " },
      { id: 3, textJP: "(3) <ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>のために<ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>も<ruby>同時<rt>どうじ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>薬剤<rt>やくざい</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いて<ruby>均質<rt>きんしつ</rt></ruby>な<ruby>摩擦面<rt>まさつめん</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: " をで  は" },
      { id: 4, textJP: "(4) <ruby>溶融亜鉛<rt>ようゆうあえん</rt></ruby>めっきを<ruby>施<rt>ほどこ</rt></ruby>した<ruby>高力<rt>こうりょく</rt></ruby>ボルトは<ruby>高い耐食性<rt>たかいたいしょくせい</rt></ruby>を<ruby>示す<rt>しめす</rt></ruby>が、JIS に<ruby>規格<rt>きかく</rt></ruby>がないため<ruby>主要<rt>しゅよう</rt></ruby>な<ruby>構造部材<rt>こうぞうぶざい</rt></ruby>の<ruby>接合<rt>せつごう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いることはできない。", textMY: " HS Bolt はJIS  について " },
      { id: 5, textJP: "(5) <ruby>トルシア形高力<rt>とるしあがたこうりょく</rt></ruby>ボルトは、ピンテールの<ruby>破断<rt>はだん</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>締付<rt>しめつけ</rt></ruby>トルクの<ruby>管理<rt>かんり</rt></ruby>を<ruby>可能<rt>かのう</rt></ruby>にしたものであり、<ruby>専用<rt>せんよう</rt></ruby>の<ruby>工具<rt>こうぐ</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いず<ruby>容易<rt>ようい</rt></ruby>に<ruby>施工可能<rt>せこうかのう</rt></ruby>なため<ruby>広く<rt>ひろく</rt></ruby>いられている。", textMY: "Torshear Bolt はで   は " }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 高力ボルト接合の種類",
      reasonMY: "Friction Joint (摩擦接合) とTension Joint (引張接合) နှစ်မျိုးစလုံးをသီးခြားဖြစ်စေ、တွဲဖက်၍ဖြစ်စေ အသုံးပြုနိုင်ခြင်းမှာ နည်းပညာအရ မှန်ကန်သော အချက်ဖြစ်は။",
      memoryTipMY: "Friction နဲ့ Tension ဆက်သွယ်မှု ၂ မျိုးစလုံး ရှိပါတယ်။"
    }
  },
  {
    id: "1-17",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>は<ruby>摩擦力<rt>まさつりょく</rt></ruby>で<ruby>力<rt>ちから</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>接合部<rt>せつごうぶ</rt></ruby>なので、<ruby>高力<rt>こうりょく</rt></ruby>ボルトの<ruby>孔径<rt>こうけい</rt></ruby>は<ruby>用<rt>もち</rt></ruby>いるボルトのねじの<ruby>呼び径<rt>よびけい</rt></ruby>にかかわらず、ねじの<ruby>呼び径<rt>よびけい</rt></ruby>+3mmとしてよい。", textMY: "Friction joint はでをでをbolt  + 3mm は " },
      { id: 2, textJP: "(2) ボルトやナットのねじ<ruby>部<rt>ぶ</rt></ruby>に<ruby>打痕<rt>だこん</rt></ruby>やごみ、さびが<ruby>付着<rt>ふちゃく</rt></ruby>するとトルク<ruby>係数<rt>けいすう</rt></ruby>は<ruby>増大<rt>ぞうだい</rt></ruby>し、トルク<ruby>係数値<rt>けいすうち</rt></ruby>が <ruby>変わらない<rt>かわらない</rt></ruby>とみなして<ruby>決<rt>き</rt></ruby>めた<ruby>締付<rt>しめつけ</rt></ruby>トルクで<ruby>締付<rt>しめつけ</rt></ruby>けるとボルト<ruby>張力<rt>ちょうりょく</rt></ruby>が <ruby>低下<rt>ていか</rt></ruby>する。", textMY: "   torque coefficient  bolt  は" },
      { id: 3, textJP: "(3) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合部<rt>まさつせつごうぶ</rt></ruby>に<ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>肌すき量<rt>はだすきりょう</rt></ruby>が 1mm を<ruby>超<rt>こ</rt></ruby>えるときには<ruby>必ず<rt>かならず</rt></ruby>フィラープレートを<ruby>用<rt>もち</rt></ruby>いなければならない。", textMY: "  mm 場合は filler plate " },
      { id: 4, textJP: "(4) <ruby>溶融亜鉛<rt>ようゆうあえん</rt></ruby>めっきを<ruby>施<rt>ほどこ</rt></ruby>した<ruby>高力<rt>こうりょく</rt></ruby>ボルトは JIS に<ruby>規格<rt>きかく</rt></ruby>がないが、<ruby>数社<rt>すうしゃ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>が <ruby>国土交通大臣<rt>こくどこうつうだいじん</rt></ruby>の<ruby>認定<rt>にんてい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けており、<ruby>一般<rt>いっぱん</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>することができる。", textMY: " HS Bolt はのででは" },
      { id: 5, textJP: "(5) <ruby>高力ボルト<rt>こうりょくボルト</rt></ruby><ruby>摩擦接合<rt>まさつせつごう</rt></ruby>には<ruby>摩擦面<rt>まさつめん</rt></ruby>が 1<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>と2<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>があり、それぞれ1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>、2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>の<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合部<rt>まさつせつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>は、1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>の<ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "のは   は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ボルト孔径の規定",
      reasonMY: "သံမဏိတည်ဆောက်ပုံစံနှုန်းများအရ HS Bolt အပေါက်အချင်း (孔径) はbolt အချင်း ပေါ်မူတည်၍ သတ်မှတ်ထားは။ ပုံမှန်အားで+2mm (ဥပမာ- M20 ဆိုလျှင် 22mm) をအသုံးပြုရမည်။ +3mm ဆိုはမှာ ကြီးလွန်းသでမှားယွင်းは။",
      memoryTipMY: "HS Bolt အပေါက်ဟာ ပုံမှန်အားで+2mm ပဲ ရှိရပါမယ်။"
    }
  },
  {
    id: "1-18",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>には<ruby>摩擦面<rt>まさつめん</rt></ruby>が 1<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>と2<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>があり、それぞれ1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>、2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>の<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合部<rt>まさつせつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>は、1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>の<ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "Friction Joint は については" },
      { id: 2, textJP: "(2) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>は、<ruby>接合面<rt>せつごうめん</rt></ruby>の<ruby>摩擦<rt>まさつ</rt></ruby>によって<ruby>力<rt>ちから</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>接合法<rt>せつごうほう</rt></ruby>である。<ruby>強<rt>つよ</rt></ruby>い<ruby>力<rt>ちから</rt></ruby>で<ruby>締<rt>し</rt></ruby>め<ruby>付<rt>つ</rt></ruby>けるため、<ruby>高力<rt>こうりょく</rt></ruby>ボルトに<ruby>作用<rt>さよう</rt></ruby>する<ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさに<ruby>かかわらず一定<rt>かかわらずいってい</rt></ruby>の<ruby>摩擦力<rt>まさつりょく</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できるという<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", textMY: "Friction Joint はbolt  (Axial force)   をは " },
      { id: 3, textJP: "(3) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>にはスプリットティー<ruby>形式<rt>けいしき</rt></ruby>やエンドプレート<ruby>形式<rt>けいしき</rt></ruby>などがあり、<ruby>溶接<rt>ようせつ</rt></ruby>を <ruby>用<rt>もち</rt></ruby>いずに<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>立てる<rt>くみたてる</rt></ruby>ことができる。", textMY: "Tension Joint についてSplit-tee とEnd-plate  bolt  でをは" },
      { id: 4, textJP: "(4) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>では、<ruby>摩擦面<rt>まさつめん</rt></ruby>が <ruby>均一<rt>きんいつ</rt></ruby>に<ruby>密着<rt>みっちゃく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>があるので、ボルト<ruby>孔周辺<rt>あなひゅうへん</rt></ruby>が <ruby>平滑<rt>へいかつ</rt></ruby>に<ruby>保<rt>たも</rt></ruby>たれる<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "  はは" },
      { id: 5, textJP: "(5) <ruby>トルシア形高力<rt>とるしあがたこうりょく</rt></ruby>ボルトは、ピンテールの<ruby>破断<rt>はだん</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>締付<rt>しめつけ</rt></ruby>トルクの<ruby>管理<rt>かんり</rt></ruby>を<ruby>可能<rt>かのう</rt></ruby>にしたものである。", textMY: "Torshear Bolt はでtorque をは " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 摩擦力の原理",
      reasonMY: "ပွတ်တိုက်အား (Friction Force) は'ပွတ်တိုက်မှုကိန်း (μ)' と'Bolt のတင်းအား (N)' တို့をမြှောက်ထားခြင်း ဖြစ်は။ ထို့ကြောင့် Bolt တင်းအား နည်းပါး場合はပွတ်တိုက်အားလည်း လိုက်ပါနည်းသွားမည်ဖြစ်は။ 'တင်းအားとမဆိုင်ဘဲ တူညီは' ဆိုသော (၂) မှာ မှားယွင်းは။",
      memoryTipMY: "ပွတ်တိုက်အားဟာ Bolt をဘယ်လောက်ကျပ်ကျပ် ညှပ်ထားသလဲ (Axial force) ပေါ်မှာ တိုက်ရိုက် မူတည်ပါတယ်။"
    }
  },
  {
    id: "1-19",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は、<ruby>接合部<rt>せつごうぶ</rt></ruby>にボルト<ruby>孔<rt>あな</rt></ruby>のような<ruby>断面欠損<rt>だんめんけっそん</rt></ruby>がないので<ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>連続性<rt>れんぞくせい</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>でき、<ruby>形状<rt>けいじょう</rt></ruby>の<ruby>自由度<rt>じゆうど</rt></ruby>も<ruby>高い<rt>たかい</rt></ruby>。", textMY: "はの    " },
      { id: 2, textJP: "(2) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は、<ruby>母材間<rt>ぼざいかん</rt></ruby>に<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>部材<rt>ぶざい</rt></ruby>どうしを<ruby>一体化<rt>いったいか</rt></ruby>する<ruby>接合方法<rt>せつごうほうほう</rt></ruby>である。<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>付加<rt>ふか</rt></ruby>するため、ボルト<ruby>接合<rt>せつごう</rt></ruby>よりも<ruby>鋼材量<rt>こうざいりょう</rt></ruby>が <ruby>増える<rt>ふえる</rt></ruby>という<ruby>欠点<rt>けってん</rt></ruby>が <ruby>ある<rt>ある</rt></ruby>。", textMY: "はをでbolt   は " },
      { id: 3, textJP: "(3) <ruby>溶接金属近傍<rt>ようせつきんぞくきんぼう</rt></ruby>の<ruby>母材<rt>ぼざい</rt></ruby>は<ruby>溶接熱影響部<rt>ようせつねつえいきょうぶ</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ばれ、<ruby>加熱<rt>かねつ</rt></ruby>によって<ruby>組織<rt>そしき</rt></ruby>が <ruby>変化<rt>へんか</rt></ruby>するとともに<ruby>冷却時<rt>れいきゃくじ</rt></ruby>に<ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じることがある。", textMY: " HAZ について   は" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>では、<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>が <ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつぶ</rt></ruby>になる<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>し、<ruby>溶接長<rt>ようせつながさ</rt></ruby>さから<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズの2<ruby>倍<rt>ばい</rt></ruby>を<ruby>減<rt>げん</rt></ruby>じて<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>しなければならない。", textMY: "Fillet weld についてと を size の を を" },
      { id: 5, textJP: "(5) <ruby>開先角度<rt>かいさきかくど</rt></ruby>が 60° <ruby>以下<rt>いか</rt></ruby>の<ruby>部分開先<rt>ぶぶんかいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けた<ruby>異形隅肉溶接<rt>いけいすみにくようせつ</rt></ruby>は、<ruby>開先<rt>かいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けない<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>より<ruby>少<rt>すく</rt></ruby>ない<ruby>溶接量<rt>ようせつりょう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>なのど<ruby>厚<rt>あつ</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できる。", textMY: " Fillet weld はは でをは" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接の経済性",
      reasonMY: "ဂဟေဆက်ခြင်းはHS Bolt ဆက်ခြင်းကဲ့သို့ Splice Plate များစွာ မလိုအပ်သောကြောင့်、တစ်ခုလုံးအနေでကြည့်လျှင် သံမဏိပမာဏをပိုမိုသက်သာစေပြီး ပေါ့ပါးစေは။ 'တိုးလာは' ဟုဆိုသော (၂) မှာ မှားယွင်းは။",
      memoryTipMY: "ဂဟေဆက်ခြင်းはဘောလ်ကျပ်ခြင်းထက် သံပမာဏ ပိုသက်သာစေပြီး ပေါ့ပါးကျစ်လျစ်は။"
    }
  },
  {
    id: "1-20",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部分開先<rt>ぶぶんかいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けた<ruby>異形隅肉溶接<rt>いけいすみにくようせつ</rt></ruby>は、<ruby>開先<rt>かいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けない<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>より<ruby>少<rt>すく</rt></ruby>ない<ruby>溶接量<rt>ようせつりょう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>なのど<ruby>厚<rt>あつ</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できる。", textMY: " Fillet weld はでをは" },
      { id: 2, textJP: "(2) <ruby>厚さ<rt>あつさ</rt></ruby>が <ruby>異<rt>こと</rt></ruby>なる<ruby>板<rt>いた</rt></ruby>の<ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>ののど<ruby>厚<rt>あつ</rt></ruby>は<ruby>厚い方<rt>あついほう</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>とし、さらに<ruby>余盛<rt>よもり</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>することができる。", textMY: "を場合はを をは " },
      { id: 3, textJP: "(3) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>固形<rt>こけい</rt></ruby>タブを<ruby>用<rt>もち</rt></ruby>いる<ruby>場合<rt>ばあい</rt></ruby>、<ruby>板幅<rt>いたはば</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことになるので、この<ruby>部分<rt>ぶぶん</rt></ruby>が <ruby>健全<rt>けんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつ部</rt></ruby>となるよう<ruby>入念<rt>にゅうねんに</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>しなければならない。", textMY: "Ceramic tab 場合はとを " },
      { id: 4, textJP: "(4) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>されるものはアーク<ruby>溶接<rt>ようせつ</rt></ruby>であり、これには<ruby>被覆<rt>ひふく</rt></ruby>アーク<ruby>溶接<rt>ようせつ</rt></ruby>（<ruby>手溶接<rt>てようせつ</rt></ruby>）、<ruby>半自動溶接<rt>はんじどうようせつ</rt></ruby>および<ruby>自動溶接<rt>じどうようせつ</rt></ruby>が <ruby>ある<rt>ある</rt></ruby>。", textMY: "Arc welding は 、semi-auto とauto  は" },
      { id: 5, textJP: "(5) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>による<ruby>熱影響<rt>ねつえいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるため、<ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が <ruby>母材<rt>ぼざい</rt></ruby>よりも<ruby>劣る<rt>おとる</rt></ruby>ことがある。", textMY: "はbase metal  fatigue life は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - のど厚と余盛",
      reasonMY: "အထူမတူသောပြားများをဆက်場合はအားအနည်းဆုံးဖြစ်သော 'အထူပါးသောပြား' (薄い方の板厚) をအခြေခံ၍ ဂဟေအသားအထူをတွက်ချက်ရမည်။ ထို့ပြင် ဂဟေのဖောင်းကြွမှုをခိုင်မာမှုတွက်ချက်ရာについてလုံးဝ ထည့်သွင်းမတွက်ရပါ။",
      memoryTipMY: "ဂဟေအထူတွက်ရင် အပါးဆုံးပြားをကြည့်ရမယ်、ဖောင်းကြွတာをထည့်မတွက်ရဘူး။"
    }
  },
  {
    id: "1-21",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>による<ruby>熱影響<rt>ねつえいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるため、<ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が <ruby>母材<rt>ぼざい</rt></ruby>よりも<ruby>劣る<rt>おとる</rt></ruby>ことがある。", textMY: "はbase metal  fatigue life は" },
      { id: 2, textJP: "(2) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>固形<rt>こけい</rt></ruby>エンドタブを<ruby>用<rt>もち</rt></ruby>いる<ruby>場合<rt>ばあい</rt></ruby>、<ruby>板幅<rt>いたはば</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことになる。", textMY: "End tab 場合はとについて  " },
      { id: 3, textJP: "(3) <ruby>溶接部<rt>ようせつぶ</rt></ruby>が <ruby>冷却<rt>れいきゃく</rt></ruby>される<ruby>際<rt>さい</rt></ruby>には、<ruby>溶接部周辺<rt>ようせつぶしゅうへん</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>の<ruby>違い<rt>ちがい</rt></ruby>や<ruby>拘束力<rt>こうそくりょく</rt></ruby>の<ruby>存在<rt>そんざい</rt></ruby>などにより<ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が <ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "について Residual stress はのをは" },
      { id: 4, textJP: "(4) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は<ruby>母材間<rt>ぼざいかん</rt></ruby>に<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み、<ruby>部材<rt>ぶざい</rt></ruby>どうしを<ruby>一体化<rt>いったいか</rt></ruby>する<ruby>接合法<rt>せつごうほう</rt></ruby>である。<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>付加<rt>ふか</rt></ruby>するためボルト<ruby>接合<rt>せつごう</rt></ruby>よりも<ruby>鋼材量<rt>こうざいりょう</rt></ruby>が <ruby>増え<rt>ふえ</rt></ruby>、<ruby>鉄骨全体<rt>てっこつぜんたい</rt></ruby>の<ruby>重量<rt>じゅうりょう</rt></ruby>が <ruby>増加<rt>ぞうか</rt></ruby>するという<ruby>短所<rt>たんしょ</rt></ruby>が <ruby>ある<rt>ある</rt></ruby>。", textMY: "はを をは " },
      { id: 5, textJP: "(5) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>では、<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>が <ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつぶ</rt></ruby>になる<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>し、<ruby>溶接長<rt>ようせつながさ</rt></ruby>さから<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズの2<ruby>倍<rt>ばい</rt></ruby>を<ruby>減<rt>げん</rt></ruby>じて<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>しなければならない。", textMY: "Fillet weld についてsize の を を" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接の利点",
      reasonMY: "ဂဟေဆက်ခြင်းはဆက်သွယ်ပြားများစွာ မလိုအပ်သောကြောင့်、bolt ဆက်ခြင်းထက် သံမဏိပမာဏをပိုမိုသက်သာစေပြီး ပေါ့ပါးကျစ်လျစ်စေは။ 'သံပမာဏ တိုးလာは' ဆိုသော အချက်မှာ မှားယွင်းは။",
      memoryTipMY: "ဂဟေဆက်ခြင်းが ဘောလ်ထက် ပိုပေါ့ပါးပြီး သံကုန်သက်သာစေပါတယ်။"
    }
  },
  {
    id: "1-22",
    questionJP: "<ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby>（SN<ruby>材<rt>ざい</rt></ruby>）に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးသုံး သံမဏိ (SN Material) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) SN<ruby>材<rt>ざい</rt></ruby>は<ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>に<ruby>要求<rt>ようきゅう</rt></ruby>される<ruby>性能<rt>せいのう</rt></ruby>と<ruby>溶接性<rt>ようせつせい</rt></ruby>を<ruby>兼<rt>かね</rt></ruby>ね<ruby>備<rt>そな</rt></ruby>えた<ruby>建築専用<rt>けんちくせんよう</rt></ruby>の<ruby>鋼材規格<rt>こうざいきかく</rt></ruby>として JIS に<ruby>規定<rt>きてい</rt></ruby>された<ruby>鋼材<rt>こうざい</rt></ruby>である。", textMY: "SN material は  JIS  A, B, C    は" },
      { id: 2, textJP: "(2) A<ruby>種<rt>しゅ</rt></ruby>は<ruby>主要構造部材以外<rt>しゅようこうぞうぶざいいがい</rt></ruby>の<ruby>小梁<rt>こばり</rt></ruby>や<ruby>間柱<rt>まばしら</rt></ruby>など<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いられることを<ruby>想定<rt>そうてい</rt></ruby>しており、<ruby>溶接性<rt>ようせつせい</rt></ruby>は<ruby>考慮<rt>こうりょ</rt></ruby>されていない。", textMY: "Type A は  を" },
      { id: 3, textJP: "(3) B<ruby>種<rt>しゅ</rt></ruby>は<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>とともにある<ruby>程度<rt>あるていど</rt></ruby>の<ruby>溶接性<rt>ようせつせい</rt></ruby>が <ruby>考慮<rt>こうりょ</rt></ruby>されているため、<ruby>主要構造部材<rt>しゅようこうぞうぶざい</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いることができるが、<ruby>大梁端部<rt>おおはりたんぶ</rt></ruby>などのように<ruby>大<rt>おお</rt></ruby>きな<ruby>塑性変形能力<rt>そせいへんけいのうりょく</rt></ruby>が <ruby>要求<rt>ようきゅう</rt></ruby>される<ruby>部分<rt>ぶぶん</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>することはできない。", textMY: "Type B はについて   beam について " },
      { id: 4, textJP: "(4) C<ruby>種<rt>しゅ</rt></ruby>は<ruby>通<rt>とお</rt></ruby>しダイアフラムやベースプレートなどのように<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>引張応力<rt>ひっぱりおうりょく</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>部材<rt>ぶざい</rt></ruby>への<ruby>使用<rt>しよう</rt></ruby>を<ruby>想定<rt>そうてい</rt></ruby>し、B<ruby>種<rt>しゅ</rt></ruby>よりも P（りん）、S（<ruby>硫黄<rt>いおう</rt></ruby>）の<ruby>上限値<rt>じょうげんち</rt></ruby>を<ruby>低<rt>ひく</rt></ruby>く<ruby>設定<rt>せってい</rt></ruby>するとともに、<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>の<ruby>絞り値<rt>しぼりち</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>している。", textMY: "Type C はplate    をは" },
      { id: 5, textJP: "(5) B<ruby>種<rt>しゅ</rt></ruby>、および C<ruby>種<rt>しゅ</rt></ruby>では 0℃ シャルピー<ruby>吸収エネルギー<rt>きゅうしゅうエネルギー</rt></ruby>が 27J <ruby>以上<rt>いじょう</rt></ruby>と<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "B とC についてCharpy energy は27J は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材 B種の適用",
      reasonMY: "SN-B သံမဏိはYield Ratio ကန့်သတ်ချက် ၈၀% အောက် ရှိသောကြောင့်、ကြီးမားသော ပုံပျက်ခံနိုင်ရည် လိုအပ်သည့် 'မြားတန်းအစွန်းများ' についてလည်း အသုံးပြုနိုင်ပါは။ 'အသုံးမပြုနိုင်ပါ' ဆိုသော အချက်မှာ မှားယွင်းは။",
      memoryTipMY: "SN-B ဟာ အဓိကနေရာတွေမှာ ပုံပျက်ခံနိုင်ရည် (Ductility) အတွက် သုံးလို့ရပါတယ်။"
    }
  },
  {
    id: "1-23",
    questionJP: "<ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby>（SN<ruby>材<rt>ざい</rt></ruby>）に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးသုံး သံမဏိ (SN Material) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) SN<ruby>材<rt>ざい</rt></ruby>は<ruby>建築物<rt>けんちくぶつ</rt></ruby>の<ruby>使用部位<rt>しようぶい</rt></ruby>とそれに<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>性能<rt>せいのう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて A<ruby>種<rt>しゅ</rt></ruby>、B<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>の 3 <ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "SN material は  JIS  A, B, C    は" },
      { id: 2, textJP: "(2) A<ruby>種<rt>しゅ</rt></ruby>は<ruby>主要構造部材以外<rt>しゅようこうぞうぶざいいがい</rt></ruby>の<ruby>小梁<rt>こばり</rt></ruby>や<ruby>間柱<rt>まばしら</rt></ruby>など<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>用いられる<rt>もちいられる</rt></ruby>ことを<ruby>想定<rt>そうてい</rt></ruby>しているが<ruby>溶接性<rt>ようせつせい</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>されており、<ruby>部分的<rt>ぶぶんてき</rt></ruby>であれば<ruby>塑性化<rt>そせいか</rt></ruby>が <ruby>想定<rt>そうてい</rt></ruby>される<ruby>接合部<rt>せつごうぶ</rt></ruby>にも<ruby>用<rt>もち</rt></ruby>いることができる。", textMY: "Type A はを  について は " },
      { id: 3, textJP: "(3) B<ruby>種<rt>しゅ</rt></ruby>は<ruby>降伏点<rt>こうふくてん</rt></ruby>および<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>とともに<ruby>溶接性<rt>ようせつせい</rt></ruby>が <ruby>考慮<rt>こうりょ</rt></ruby>されているため、<ruby>大梁端部<rt>おおはりたんぶ</rt></ruby>などのように<ruby>大<rt>おお</rt></ruby>きな<ruby>塑性変形能力<rt>そせいへんけいのうりょく</rt></ruby>が <ruby>要求<rt>ようきゅう</rt></ruby>される<ruby>主要構造部材<rt>しゅようこうぞうぶざい</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>することができる。", textMY: "Type B は  については" },
      { id: 4, textJP: "(4) C<ruby>種<rt>しゅ</rt></ruby>は<ruby>通<rt>とお</rt></ruby>しダイアフラムやベースプレートなどのように<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>引張応力<rt>ひっぱりおうりょく</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>部材<rt>ぶざい</rt></ruby>への<ruby>使用<rt>しよう</rt></ruby>を<ruby>想定<rt>そうてい</rt></ruby>している。", textMY: "Type C は   をは" },
      { id: 5, textJP: "(5) B<ruby>種<rt>しゅ</rt></ruby>および C<ruby>種<rt>しゅ</rt></ruby>では 0℃ シャルピー<ruby>吸収エネルギー<rt>きゅうしゅうエネルギー</rt></ruby>が 27J <ruby>以上<rt>いじょう</rt></ruby>と<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "B とC についてCharpy energy とCarbon equivalent  は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材 A種の制約",
      reasonMY: "SN-A သံမဏိは၎င်းのJIS စံနှုန်းについて'ဂဟေဆက်နိုင်စွမ်း' をထည့်သွင်းစဉ်းစားထားခြင်း မရှိပါ။ ထို့ကြောင့် ဂဟေဆက်ရန် လိုအပ်သော နေရာများ သို့မဟုတ် ပုံပျက်နိုင်ခြေရှိသော အဆက်များについて၎င်းをအသုံးမပြုရပါ။",
      memoryTipMY: "SN-A = No welding, Elastic range only."
    }
  },
  {
    id: "1-24",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိပစ္စည်းများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれる<ruby>化学成分<rt>かがくせいぶん</rt></ruby>の<ruby>炭素<rt>たんそ</rt></ruby>（C）は、<ruby>降伏点、引張強さ、硬さ<rt>こうふくてん、ひっぱりつよさ、かたさ</rt></ruby>などを<ruby>上昇<rt>じょうしょう</rt></ruby>させるが、<ruby>溶接性<rt>ようせつせい</rt></ruby>も<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "Carbon 場合は と は" },
      { id: 2, textJP: "(2) <ruby>溶接構造用圧延鋼材<rt>ようせつこうぞうようあつえんこうざい</rt></ruby>（SM<ruby>材<rt>ざい</rt></ruby>）は<ruby>強度<rt>きょうど</rt></ruby>と<ruby>同時<rt>どうじ</rt></ruby>に<ruby>溶接性<rt>ようせつせい</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>した<ruby>鋼材<rt>こうざい</rt></ruby>である。", textMY: "SM material はを は" },
      { id: 3, textJP: "(3) <ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby>（SN<ruby>材<rt>ざい</rt></ruby>）は B<ruby>種、C種<rt>しゅ、しゅ</rt></ruby>は大梁など<ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>が <ruby>塑性化<rt>そせいか</rt></ruby>することを<ruby>想定<rt>そうてい</rt></ruby>した<ruby>部材<rt>ぶざい</rt></ruby>にも<ruby>用<rt>もち</rt></ruby>いることができる。", textMY: "SN material は  B, C をについては" },
      { id: 4, textJP: "(4) <ruby>建築構造用冷間成形角形鋼管<rt>けんちくこうぞうようれいかんせいけいかくがたこうかん</rt></ruby>（BCP<ruby>材<rt>ざい</rt></ruby>、BCR<ruby>材<rt>ざい</rt></ruby>）は、<ruby>塑性加工<rt>そせいかこう</rt></ruby>による<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上昇<rt>じょうしょう</rt></ruby>や<ruby>材質<rt>ざいしつ</rt></ruby>の<ruby>劣化<rt>れっか</rt></ruby>がなく、<ruby>超高層建築物<rt>ちょうこうそうけんちくぶつ</rt></ruby>の<ruby>柱<rt>はしら</rt></ruby>などに<ruby>多用<rt>たよう</rt></ruby>される。", textMY: "BCP/BCR はyield ratio     は " },
      { id: 5, textJP: "(5) <ruby>建築構造用<rt>けんちくこうぞうよう</rt></ruby> TMCP <ruby>鋼<rt>はがね</rt></ruby>は、<ruby>厚<rt>あつ</rt></ruby>さ 40mm を<ruby>超<rt>こ</rt></ruby>える<ruby>板<rt>いた</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>は 40mm <ruby>以下<rt>いか</rt></ruby>と<ruby>等<rt>ひと</rt></ruby>しく、<ruby>優<rt>すぐ</rt></ruby>れた<ruby>溶接性<rt>ようせつせい</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>している。", textMY: "TMCP steel は 40mm    は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 冷間成形の特性",
      reasonMY: "အေးသောအခါ ပုံသွင်းခြင်း (冷間成形) はသံမဏိをStrain Hardening ဖြစ်စေသောကြောင့် Yield Ratio をတက်လာစေပြီး ပုံပျက်ခံနိုင်စွမ်းをလျော့ကျစေは။ ထို့ကြောင့် 'အရည်အသွေးကျဆင်းမှု မရှိပါ' ဟူသော (၄) ပါ ဖော်ပြချက်မှာ မှားယွင်းは။",
      memoryTipMY: "Cold-formed (BCP/BCR) တွေဟာ Yield Ratio ပိုမြင့်ပြီး ပိုကြွပ်ဆတ်တတ်ပါတယ်။"
    }
  },
  {
    id: "1-25",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုဂုဏ်သတ္တိများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>のひずみ<ruby>度<rt>ど</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>応力度<rt>おうりょくど</rt></ruby>の<ruby>比率<rt>ひりつ</rt></ruby>をヤング<ruby>係数<rt>けいすう</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。ヤング<ruby>係数<rt>けいすう</rt></ruby>は<ruby>鋼種<rt>こうしゅ</rt></ruby>によらず、ほぼ<ruby>一定<rt>いってい</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>をとる。", textMY: "Stress とStrain をYoung's Modulus   は" },
      { id: 2, textJP: "(2) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>降伏比<rt>こうふくひ</rt></ruby>は <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>塑性変形性能<rt>そせいへんけいせいのう</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>指標<rt>しひょう</rt></ruby>のひとつである。", textMY: "Yield ratio はを  は" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>は加熱されると 250℃ <ruby>前後<rt>ぜんご</rt></ruby>の<ruby>温度領域<rt>おんどりょういき</rt></ruby>を<ruby>青熱ぜい性域<rt>せいねつぜいせいいき</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>び、この<ruby>温度範囲<rt>おんどはんい</rt></ruby>では<ruby>曲げ加工<rt>まげかこう</rt></ruby>をしてはならない。", textMY: " についてはでについて " },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>時間<rt>じかん</rt></ruby>の<ruby>経過<rt>けいか</rt></ruby>とともに<ruby>降伏点<rt>こうふくてん</rt></ruby>のひずみ<ruby>度<rt>ど</rt></ruby>が <ruby>減少<rt>げんしょう</rt></ruby>し、<ruby>小<rt>ちい</rt></ruby>さな<ruby>変形<rt>へんけい</rt></ruby>でも<ruby>塑性化<rt>そせいか</rt></ruby>するようになる。このような<ruby>時間<rt>じかん</rt></ruby>に<ruby>伴<rt>ともな</rt></ruby>う<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>をひずみ<ruby>時効<rt>じこう</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。", textMY: "はと yield point はをStrain aging は " },
      { id: 5, textJP: "(5) <ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>したとき、<ruby>荷重<rt>かじゅう</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさが<ruby>降伏点以下<rt>こうふくてんいか</rt></ruby>でも<ruby>破壊<rt>はかい</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>疲労<rt>ひろう</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。", textMY: " yield point について をFatigue は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ひずみ時効",
      reasonMY: "Strain Aging ဆိုはမှာ အချိန်ကြာလာはとအမျှ သံမဏိの'Yield Point' ပြန်လည် မြင့်တက်လာခြင်း ဖြစ်は။ ၎င်းကြောင့် သံမဏိမှာ ပိုမို မာကျောလာは။ 'Yield Point လျော့ကျは' ဟူသော ဖော်ပြချက်မှာ မှားယွင်းは။",
      memoryTipMY: "သံが အချိန်ကြာရင် ပိုမာလာ (Yield point တက်) တတ်ပါတယ်။"
    }
  },
  {
    id: "1-26",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုဂုဏ်သတ္တိများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>塑性変形<rt>そせいへんけい</rt></ruby>させた<ruby>鋼材<rt>こうざい</rt></ruby>を<ruby>放置<rt>ほうち</rt></ruby>すると<ruby>降伏点<rt>こうふくてん</rt></ruby>が <ruby>わずかに上昇<rt>わずかにじょうしょう</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>をひずみ<ruby>時効<rt>じこう</rt></ruby>という。", textMY: "を yield point をStrain aging  は" },
      { id: 2, textJP: "(2) <ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>したとき、<ruby>降伏点以下<rt>こうふくてんいか</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>でも<ruby>破壊<rt>はかい</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>疲労<rt>ひろう</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。", textMY: "Yield point について  をFatigue  は" },
      { id: 3, textJP: "(3) <ruby>炭素当量<rt>たんそとうりょう</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>示す評価尺度<rt>しめすひょうかしゃくど</rt></ruby>として<ruby>用いられる<rt>もちいられる</rt></ruby>。", textMY: "Carbon equivalent はを  は" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>のひずみ<ruby>度<rt>ど</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>応力度<rt>おうりょくど</rt></ruby>の<ruby>比率<rt>ひりつ</rt></ruby>をヤング<ruby>係数<rt>けいすう</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。ヤング<ruby>係数<rt>けいすう</rt></ruby>は<ruby>鋼種<rt>こうしゅ</rt></ruby>によって<ruby>異なり<rt>ことなり</rt></ruby>、<ruby>その鋼材の降伏点とほぼ比例<rt>そのこうざいのこうふくてんとほぼひれい</rt></ruby>する。", textMY: "Young's modulus は  yield point とは " },
      { id: 5, textJP: "(5) <ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>が <ruby>青熱ぜい性域<rt>せいねつぜいせいいき</rt></ruby>（200℃~300℃）を<ruby>超えた<rt>こえた</rt></ruby>あたりから<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "のは 場合ははと は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ヤング係数の不変性",
      reasonMY: "Young's Modulus はသံမဏိのခိုင်မာမှုとမသက်ဆိုင်ဘဲ、သံမဏိအမျိုးအစား အားလုံးအတွက် တူညီသော တန်ဖိုးရှိは။ 'အမျိုးအစားအလိုက် ကွဲပြားは' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "သံမှန်သမျှ တောင့်တင်းမှု (Young's Modulus) ကတော့ အတူတူပါပဲ။"
    }
  },
  {
    id: "1-27",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုဂုဏ်သတ္တိများとပတ်သက်၍ မှန်ကန်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>炭素当量<rt>たんそとうりょう</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>耐食性能<rt>たいしょくせいのう</rt></ruby>が <ruby>高い<rt>たかい</rt></ruby>ことを<ruby>表<rt>あらわ</rt></ruby>す。", textMY: "Carbon Equivalent はを は" },
      { id: 2, textJP: "(2) ヤング<ruby>係数<rt>けいすう</rt></ruby>は<ruby>鋼種<rt>こうしゅ</rt></ruby>によって<ruby>異なり<rt>ことなり</rt></ruby>、<ruby>強度<rt>きょうど</rt></ruby>の<ruby>低<rt>ひく</rt></ruby>い<ruby>鋼材<rt>こうざい</rt></ruby>では<ruby>十分<rt>じゅうぶん</rt></ruby>な<ruby>配慮<rt>はいりょ</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Young's Modulus は で" },
      { id: 3, textJP: "(3) <ruby>高強度<rt>こうきょうど</rt></ruby>の<ruby>鋼材<rt>こうざい</rt></ruby>は、<ruby>塑性化後<rt>そせいかご</rt></ruby>も<ruby>高い変形性能<rt>たかいへんけいせいのう</rt></ruby>が <ruby>保証<rt>ほしょう</rt></ruby>されている。", textMY: "はについて  をは" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>に 10,000 <ruby>回以上<rt>かいいじょう</rt></ruby>の<ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>すると、<ruby>荷重<rt>かじゅう</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさが<ruby>降伏点以下<rt>こうふくてんいか</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>であっても<ruby>脆性的<rt>ぜいせいてき</rt></ruby>に<ruby>破壊<rt>はかい</rt></ruby>することがある。", textMY: "Fatigue は  は" },
      { id: 5, textJP: "(5) シャルピー<ruby>吸収<rt>きゅうしゅう</rt></ruby>エネルギーは、<ruby>切欠き<rt>きりかき</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>する<ruby>試験片<rt>しけんへん</rt></ruby>に<ruby>衝撃力<rt>しょうげきりょく</rt></ruby>を<ruby>与<rt>あた</rt></ruby>え、<ruby>試験片<rt>しけんへん</rt></ruby>を<ruby>破断<rt>はだん</rt></ruby>するのに<ruby>要<rt>よう</rt></ruby>するエネルギーのことをいう。シャルピー<ruby>吸収<rt>きゅうしゅう</rt></ruby>エネルギーは<ruby>低温<rt>ていおん</rt></ruby>になるほど<ruby>低<rt>ひく</rt></ruby>くなる<ruby>傾向<rt>けいこう</rt></ruby>がある。", textMY: "Charpy absorbed energy () は  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Impact Toughness and Temperature",
      reasonMY: "သံမဏိはအေးသောအခါ ပိုမို ကြွပ်ဆတ် သွားသောကြောင့် ရိုက်ခတ်မှုをခံနိုင်ရည်ရှိသော စွမ်းအင် (Charpy energy) လျော့နည်းသွားခြင်းမှာ မှန်ကန်သော သိပ္ပံနည်းကျ အချက်ဖြစ်は။",
      memoryTipMY: "အေးရင် (Cold) -> သံが ကြွပ်ဆတ်ပြီး ကျိုးလွယ် (Low Energy) သွားပါတယ်။"
    }
  }
];
