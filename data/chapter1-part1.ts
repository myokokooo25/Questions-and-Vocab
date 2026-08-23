import { StudyCardData } from '../types';

export const chapter1Part1Data: StudyCardData[] = [
  {
    id: "1-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby> P を<ruby>受<rt>う</rt></ruby>けるラーメン<ruby>骨組<rt>ほねぐみ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း အလျားလိုက်ဝန် P သက်ရောက်နေသော Portal Rigid Frame နှင့်ပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက် (မှားယွင်းသည့်အချက်) ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> C には<ruby>鉛直上向<rt>えんちょくうわむ</rt></ruby>きの<ruby>反力<rt>はんりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる。", textMY: "(1) Support C တွင် အထက်သို့ ဒေါင်လိုက်တုံ့ပြန်အား (Upward Reaction Force) ဖြစ်ပေါ်သည်။" },
      { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby> AB には<ruby>引張軸力<rt>ひっぱりじくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる。", textMY: "(2) Column AB တွင် ဆွဲဆန့်ဝင်ရိုးအား (Tensile Axial Force) ဖြစ်ပေါ်သည်။" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby> AB の<ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>は<ruby>右<rt>みぎ</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>である。", textMY: "(3) Column AB ၏ Bending Deformation သည် ညာဘက်သို့ ခုံးထွက်နေသည်။" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby> BC には<ruby>圧縮軸力<rt>あっしゅくじくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる。", textMY: "(4) Beam BC တွင် ဖိသိပ်ဝင်ရိုးအား (Compressive Axial Force) ဖြစ်ပေါ်သည်။" },
      { id: 5, textJP: "(5) <ruby>梁<rt>はり</rt></ruby> BC の<ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>は<ruby>下<rt>した</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>である。", textMY: "(5) Beam BC ၏ Bending Deformation သည် အောက်ဘက်သို့ ခုံးထွက်နေသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဝင်ရိုးလိုက်အားများ (Axial Forces)",
      reasonMY: "အလျားလိုက်ဝန် P က ဘောင်ကို ညာဘက်သို့ တွန်းသောအခါ Beam BC သည် ဆန့်ထွက်ခြင်းခံရသဖြင့် ၎င်းတွင် 'ဆွဲအား' (引張軸力 - Tension) ဖြစ်ပေါ်သည်။ ဖိအား (圧縮) ဖြစ်ပေါ်သည်ဟု ဆိုထားသော ရွေးချယ်မှု (၄) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "အလျားလိုက်တွန်းရင် Beam သည် ဆွဲဆန့်ခြင်းခံရ၍ 引張 (Tension) ဖြစ်ပေါ်သည်။"
    }
  },
  {
    id: "1-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のように、<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>長<rt>なが</rt></ruby>さが<ruby>等<rt>ひと</rt></ruby>しく<ruby>断面<rt>だんめん</rt></ruby>の<ruby>異<rt>こと</rt></ruby>なる 2 <ruby>本<rt>ほん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby> AB と CD が<ruby>中央<rt>ちゅうおう</rt></ruby> O で<ruby>直角<rt>ちょっかく</rt></ruby>に<ruby>繋<rt>つな</rt></ruby>がっている。この<ruby>梁<rt>はり</rt></ruby>について、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းနှင့် အလျားတူညီသော်လည်း ဖြတ်ပိုင်းဧရိယာ (断面) မတူညီသော Beam AB နှင့် CD နှစ်ခုကို အလယ်ဗဟို O တွင် ထောင့်မှန်အတိုင်း ဆက်ထားသည်။ ဤ Beam နှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby> AB、<ruby>梁<rt>はり</rt></ruby> CD ともに、<ruby>曲<rt>ま</rt></ruby>げモーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>が <ruby>最大<rt>さいだい</rt></ruby>になるのは O <ruby>点<rt>てん</rt></ruby>である。", textMY: "(1) Beam AB နှင့် Beam CD နှစ်ခုလုံးတွင် Bending Moment အကြီးဆုံးဖြစ်ပေါ်သည်မှာ O အမှတ်တွင် ဖြစ်သည်။" },
      { id: 2, textJP: "(2) O <ruby>点<rt>てん</rt></ruby>での<ruby>梁<rt>はり</rt></ruby> AB の<ruby>曲<rt>ま</rt></ruby>げモーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>と<ruby>梁<rt>はり</rt></ruby> CD の<ruby>曲<rt>ま</rt></ruby>げモーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "(2) O အမှတ်ရှိ Beam AB ၏ Bending Moment နှင့် Beam CD ၏ Bending Moment တို့သည် တူညီသည်။" },
      { id: 3, textJP: "(3) <ruby>支点<rt>してん</rt></ruby> A の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby> C の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>よりも<ruby>大<rt>おお</rt></ruby>きい。", textMY: "(3) Support A ၏ ဒေါင်လိုက်တုံ့ပြန်အားသည် Support C ၏ ဒေါင်လိုက်တုံ့ပြန်အားထက် ပိုကြီးသည်။" },
      { id: 4, textJP: "(4) 4 つの<ruby>支点<rt>してん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>は P である。", textMY: "(4) Support ၄ ခု၏ ဒေါင်လိုက်တုံ့ပြန်အား စုစုပေါင်းသည် P ဖြစ်သည်။" },
      { id: 5, textJP: "(5) P を<ruby>増加<rt>ぞうか</rt></ruby>させていくと<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>げ<ruby>応力度<rt>おうりょくど</rt></ruby>が <ruby>許容曲げ応力度<rt>きょようまげおうりょくど</rt></ruby>に<ruby>到達<rt>とうたつ</rt></ruby>するのは<ruby>梁<rt>はり</rt></ruby> AB である。", textMY: "(5) ဝန် P ကို တိုးမြှင့်သွားပါက Bending Stress သည် Allowable Stress သို့ အရင်ဆုံးရောက်ရှိမည့် Beam မှာ AB ဖြစ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Stiffness (EI) နှင့် Moment ခွဲဝေမှု",
      reasonMY: "Beam AB ၏ ဖြတ်ပိုင်းသည် CD ထက် ပိုမိုခိုင်မာ/တောင့်တင်းသောကြောင့် (Stiffness ပိုမြင့်သောကြောင့်) ဝန် P ၏ အစိတ်အပိုင်းကို ပိုမိုခံယူရမည်ဖြစ်သည်။ ထို့ကြောင့် O အမှတ်ရှိ Moment များမှာ မတူညီနိုင်ပါ (AB ၏ Moment က ပိုကြီးရမည်)။",
      memoryTipMY: "Stiffness (တောင့်တင်းမှု) ပိုရင် Load ပိုယူပြီး Moment ပိုများပါသည်။"
    }
  },
  {
    id: "1-3",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>骨組<rt>ほねぐみ</rt></ruby>の B <ruby>点<rt>てん</rt></ruby>に<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby> P が <ruby>作用<rt>さよう</rt></ruby>すると、<ruby>左側<rt>ひだりがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby> A には<ruby>左向き<rt>ひだりむき</rt></ruby>の<ruby>水平反力<rt>すいへいはんりょく</rt></ruby> $H_A$ と<ruby>下向き<rt>したむき</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby> $V_A$ が、<ruby>右側<rt>みぎがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby> E には<ruby>上向き<rt>うわむき</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby> $V_E$ が <ruby>生<rt>しょう</rt></ruby>じる。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘောင်၏ B အမှတ်တွင် အလျားလိုက်ဝန် P သက်ရောက်သောအခါ ဖြစ်ပေါ်လာသော Reaction များဆိုင်ရာ ဖော်ပြချက်များအနက် မှားယွင်းသည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外力<rt>がいりょく</rt></ruby> P と<ruby>水平反力<rt>すいへいはんりょく</rt></ruby> $H_A$ の<ruby>大きさ<rt>おおきさ</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "(1) ပြင်ပအား P နှင့် အလျားလိုက်တုံ့ပြန်အား $H_A$ တို့၏ ပမာဏသည် တူညီသည်။" },
      { id: 2, textJP: "(2) <ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby> $V_A$ と $V_E$ の<ruby>大きさ<rt>おおきさ</rt></ruby>は<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "(2) ဒေါင်လိုက်တုံ့ပြန်အား $V_A$ နှင့် $V_E$ တို့၏ ပမာဏသည် တူညီသည်။" },
      { id: 3, textJP: "(3) <ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby> D <ruby>点<rt>てん</rt></ruby>は、<ruby>荷重<rt>かじゅう</rt></ruby> P が <ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "(3) Column-Beam Joint D အမှတ်သည် ဝန် P သက်ရောက်မှုကြောင့် ညာဘက်သို့ ရွေ့လျားသွားသည်။" },
      { id: 4, textJP: "(4) <ruby>支点<rt>してん</rt></ruby> E は、<ruby>荷重<rt>かじゅう</rt></ruby> P が <ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "(4) Support E သည် ဝန် P သက်ရောက်မှုကြောင့် ညာဘက်သို့ ရွေ့လျားသွားသည်။" },
      { id: 5, textJP: "(5) <ruby>曲<rt>ま</rt></ruby>げモーメントが <ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくなるのは C <ruby>点<rt>てん</rt></ruby>である。", textMY: "(5) Bending Moment အကြီးဆုံးဖြစ်ပေါ်သည်မှာ C အမှတ်တွင် ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Pin Joint (ヒンジ) နှင့် Moment",
      reasonMY: "C အမှတ်သည် Pin Joint (Hinge) ဖြစ်သောကြောင့် Bending Moment သည် အမြဲတမ်း 'သုည' (Zero) ဖြစ်သည်။ ထို့ကြောင့် C တွင် Moment အကြီးဆုံးဖြစ်သည်ဆိုသော အချက်မှာ လုံးဝမှားယွင်းပါသည်။",
      memoryTipMY: "Hinge (ဟင်းချ်) ဆက်ကြောင်းနေရာတွင် Moment သည် အမြဲတမ်း သုည (0) ဖြစ်သည်။"
    }
  },
  {
    id: "1-4",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける 2 つのトラス<ruby>梁<rt>はり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံတွင် ပြထားသည့် Truss Beam နှစ်ခုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby> A、<ruby>支点<rt>してん</rt></ruby> B に<ruby>生<rt>しょう</rt></ruby>じる<ruby>反力<rt>はんりょく</rt></ruby>はどちらのトラス<ruby>梁<rt>はり</rt></ruby>も<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "(1) Support A နှင့် Support B တွင် ဖြစ်ပေါ်သော တုံ့ပြန်အားများသည် Truss Beam နှစ်ခုလုံးတွင် တူညီသည်။" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>軸力<rt>じくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じるのはトラス<ruby>梁<rt>はり</rt></ruby> II のみである。", textMY: "(2) Member (ア) တွင် ဝင်ရိုးအားဖြစ်ပေါ်သည်မှာ Truss Beam II တွင်သာ ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>イの<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> I のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "(3) Member (イ) ၏ ဝင်ရိုးအားသည် Truss Beam I တွင် ပိုကြီးသည်။" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>ウにはどちらのトラス<ruby>梁<rt>はり</rt></ruby>も<ruby>軸力<rt>じくりょく</rt></ruby>は<ruby>生<rt>しょう</rt></ruby>じない。", textMY: "(4) Member (ウ) တွင် Truss Beam နှစ်ခုလုံး၌ ဝင်ရိုးအား မဖြစ်ပေါ်ပါ။" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> II のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "(5) Member (エ) တွင် ဖြစ်ပေါ်သော ဝင်ရိုးအားသည် Truss Beam II တွင် ပိုကြီးသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Asymmetrical Loading (မညီမျှသောဝန်)",
      reasonMY: "Truss I တွင် ဝန် 3P သည် ညာဘက်သို့ ကပ်နေသောကြောင့် (Asymmetrical)၊ Support A အနီးရှိ Member (ア) တွင်လည်း အား (Axial force) ဖြစ်ပေါ်သည်။ ထို့ကြောင့် Truss II တွင်သာ ဖြစ်ပေါ်သည်ဆိုသော အချက်မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "ဝန်သက်ရောက်ပုံ မညီမျှပါက Member အားလုံးနီးပါးတွင် အားဖြစ်ပေါ်တတ်သည်။"
    }
  },
  {
    id: "1-5",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける 2 つのトラス<ruby>梁<rt>はり</rt></ruby>について、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း ဝန်သက်ရောက်နေသော Truss Beam နှစ်ခုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> II のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "(1) Member (ア) တွင် ဖြစ်ပေါ်သော ဝင်ရိုးအားသည် Truss Beam II တွင် ပိုကြီးသည်။" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>イに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> I、トラス<ruby>梁<rt>はり</rt></ruby> II ともに<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "(2) Member (イ) တွင် ဖြစ်ပေါ်သော ဝင်ရိုးအားသည် Truss I နှင့် Truss II နှစ်ခုလုံးတွင် တူညီသည်။" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> II のほうが<ruby>大<rt>おお</rt></ruby>きい。", textMY: "(3) Member (ウ) တွင် ဖြစ်ပေါ်သော ဝင်ရိုးအားသည် Truss Beam II တွင် ပိုကြီးသည်။" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>はトラス<ruby>梁<rt>はり</rt></ruby> I、トラス<ruby>梁<rt>はり</rt></ruby> II ともに 0 である。", textMY: "(4) Member (エ) တွင် ဖြစ်ပေါ်သော ဝင်ရိုးအားသည် Truss I နှင့် Truss II နှစ်ခုလုံးတွင် သုည (0) ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>オに<ruby>軸力<rt>じくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じるのは、トラス<ruby>梁<rt>はり</rt></ruby> I だけである。", textMY: "(5) Member (オ) တွင် ဝင်ရိုးအား ဖြစ်ပေါ်သည်မှာ Truss Beam I တွင်သာ ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Support Reaction နှင့် ဝင်ရိုးအား",
      reasonMY: "Truss II တွင် ညာဘက် Support ၏ အစွန်း၌ ဝန် 2P ရှိနေသောကြောင့်၊ ထိုနေရာရှိ ဒေါင်လိုက် member (オ) တွင်လည်း အား (Axial force) ဖြစ်ပေါ်သည်။ ထို့ကြောင့် Truss I တွင်သာ ဖြစ်ပေါ်သည်ဟူသော အချက်မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "Support နေရာတွင် ဝန်သက်ရောက်နေပါက ထို Member တွင် အားရှိသည်။"
    }
  },
  {
    id: "1-6",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるトラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>組合<rt>くみあわ</rt></ruby>せのうち、<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံပါအတိုင်း ဝန် (Load) သက်ရောက်နေသော Truss Beam ရှိ အစိတ်အပိုင်း (ア, イ, ウ) တို့တွင် အသီးသီးဖြစ်ပေါ်နေသော ဝင်ရိုးအား (Axial Force) များ၏ မှန်ကန်သော ပေါင်းစပ်မှုကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：0、ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "(1) အ (ア): ဖိအား (Compression)၊ အိ (イ): 0၊ အု (ウ): ဆွဲအား (Tension)" },
      { id: 2, textJP: "(2) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：0、ウ：<ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "(2) အ (ア): ဖိအား (Compression)၊ အိ (イ): 0၊ အု (ウ): ဖိအား (Compression)" },
      { id: 3, textJP: "(3) ア：<ruby>引張<rt>ひっぱり</rt></ruby>、イ：0、ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "(3) အ (ア): ဆွဲအား (Tension)၊ အိ (イ): 0၊ အု (ウ): ဆွဲအား (Tension)" },
      { id: 4, textJP: "(4) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：<ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "(4) အ (ア): ဖိအား (Compression)၊ အိ (イ): ဖိအား (Compression)၊ အု (ウ): ဆွဲအား (Tension)" },
      { id: 5, textJP: "(5) ア：<ruby>圧縮<rt>あっしゅく</rt></ruby>、イ：<ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ：<ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "(5) အ (ア): ဖိအား (Compression)၊ အိ (イ): ဖိအား (Compression)၊ အု (ウ): ဖိအား (Compression)" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Member Forces (ထရက်စ်အားများ)",
      reasonMY: "Truss ဖွဲ့စည်းပုံတွင် အပေါ်ဘက် Member များသည် များသောအားဖြင့် ဖိအား (Compression) ခံရပြီး၊ အောက်ဘက် Member များသည် ဆွဲအား (Tension) ခံရလေ့ရှိသည်။ Member (イ) သည် ဤအခြေအနေတွင် အားမသက်ရောက်သော (Zero-force member) ဖြစ်သည်။",
      memoryTipMY: "Truss တွင် အပေါ်ဘက် -> 圧縮 (Compression)၊ အောက်ဘက် -> 引張 (Tension) ဖြစ်သည်။"
    }
  },
  {
    id: "1-7",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖွဲ့စည်းပုံ ဒီဇိုင်း (Structural Design) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>はコンクリートや<ruby>木材<rt>もくざい</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>比強度<rt>ひきょうど</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いため、<ruby>小<rt>ちい</rt></ruby>さな<ruby>断面<rt>だんめん</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>強度<rt>きょうど</rt></ruby>を <ruby>満<rt>み</rt></ruby>たすことができる。", textMY: "(1) သံမဏိသည် ကွန်ကရစ်နှင့် သစ်သားတို့ထက် Specific Strength (အလေးချိန်အချိုး အားခံနိုင်စွမ်း) ပိုမြင့်သဖြင့် ဖြတ်ပိုင်းဧရိယာ သေးငယ်စွာဖြင့် လိုအပ်သော ခိုင်ခံ့မှုကို ဖြည့်ဆည်းနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>高<rt>たか</rt></ruby>い<ruby>靭性<rt>じんせい</rt></ruby>を <ruby>有<rt>ゆう</rt></ruby>しているため、<ruby>座屈<rt>ざくつ</rt></ruby>や<ruby>脆性破壊<rt>ぜいせいはかい</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じなければ<ruby>大地震時<rt>だいじしんじ</rt></ruby>においても<ruby>優<rt>すぐ</rt></ruby>れた<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を <ruby>有<rt>ゆう</rt></ruby>している。", textMY: "(2) သံမဏိသည် မြင့်မားသော ပျော့ပျောင်းခိုင်မာမှု (Toughness) ရှိသဖြင့် Buckling (ခုံးထွက်ခြင်း) နှင့် Brittle Fracture (ကြွပ်ဆတ်ကျိုးပဲ့ခြင်း) မဖြစ်ပေါ်ပါက ငလျင်ကြီးများတွင် ကောင်းမွန်သော ငလျင်ဒဏ်ခံစွမ်းရည် ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>弾性範囲<rt>だんせいはんい</rt></ruby>に<ruby>留<rt>とど</rt></ruby>まることを<ruby>目標<rt>もくひょう</rt></ruby>とした<ruby>設計法<rt>せっけいほう</rt></ruby>を<ruby>許容応力度設計法<rt>きょようおうりょくどせっけいほう</rt></ruby>という。", textMY: "(3) Elastic Range (ပြန်လည်ကျုံ့နိုင်ဆန့်နိုင်သော နယ်ပယ်) အတွင်းသာ ရှိစေရန် ရည်ရွယ်တွက်ချက်သည့် ဒီဇိုင်းနည်းလမ်းကို Allowable Stress Design Method ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>はヤング<ruby>係数<rt>けいすう</rt></ruby>が <ruby>高<rt>たか</rt></ruby>く<ruby>変形<rt>へんけい</rt></ruby>しにくいため、RC<ruby>造<rt>ぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると<ruby>過大<rt>かだい</rt></ruby>な<ruby>撓<rt>たわ</rt></ruby>みや<ruby>振動<rt>しんどう</rt></ruby>への<ruby>配慮<rt>はいりょ</rt></ruby>は<ruby>ほとんど必要ない<rt>ほとんどひつようない</rt></ruby>。", textMY: "(4) သံမဏိသည် Young's Modulus မြင့်မားပြီး ပုံမပျက်လွယ်သောကြောင့် RC အဆောက်အဦများနှင့် နှိုင်းယှဉ်ပါက အလွန်အကျွံ ကွေးညွှတ်ခြင်းနှင့် တုန်ခါခြင်းများအတွက် ထည့်သွင်းစဉ်းစားရန် မလိုအပ်သလောက်ပင် ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>接合部設計<rt>せつごうぶせっけい</rt></ruby>や<ruby>溶接品質管理<rt>ようせつひんしつかんり</rt></ruby>が <ruby>原因<rt>げんいん</rt></ruby>での<ruby>被害<rt>ひがい</rt></ruby>が <ruby>多数観察<rt>たすうかんさつ</rt></ruby>されている。", textMY: "(5) မသင့်လျော်သော အဆက်ဒီဇိုင်းများနှင့် ဂဟေဆက် အရည်အသွေးထိန်းသိမ်းမှု ညံ့ဖျင်းခြင်းတို့ကြောင့် ထိခိုက်ပျက်စီးမှုများစွာကို လက်တွေ့လေ့လာတွေ့ရှိထားသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သံမဏိ၏ ပျော့ပြောင်းမှု (Flexibility)",
      reasonMY: "သံမဏိတည်ဆောက်ပုံများသည် ပစ္စည်းပါးလွှာပြီး RC ထက် ပိုမိုပျော့ပြောင်းသောကြောင့် (Stiffness နိမ့်သောကြောင့်) ကွေးညွှတ်မှု (Deflection) နှင့် တုန်ခါမှု (Vibration) ပြဿနာများကို RC ထက် ပိုမိုဂရုစိုက် စဉ်းစားရန် လိုအပ်သည်။ 'မလိုအပ်ပါ' ဆိုခြင်းမှာ မှားယွင်းပါသည်။",
      memoryTipMY: "သံမဏိသည် RC ထက် ပိုတုန်ခါ (Vibration) လွယ်သဖြင့် ပိုပြီး သတိထားရသည်။"
    }
  }
];
