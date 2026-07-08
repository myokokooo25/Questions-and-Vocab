
import { StudyCardData } from '../types';

export const chapter2024Data: StudyCardData[] = [
  {
    id: "2024-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のように、<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面形<rt>だんめんけい</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しく、<ruby>長<rt>なが</rt></ruby>さの<ruby>異<rt>こと</rt></ruby>なる2<ruby>本<rt>ほん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>ABと<ruby>梁<rt>はり</rt></ruby>CDが<ruby>中央<rt>ちゅうおう</rt></ruby>○で<ruby>直角<rt>ちょっかく</rt></ruby>に<ruby>繋<rt>つな</rt></ruby>がっている。この<ruby>梁<rt>はり</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>○に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>したとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့်အတိုင်း ပစ္စည်းとမျက်နှာပြင်ဖြတ်ပိုင်းတူညီသော်လည်း အလျားမတူညီသော Beam AB とCD နှစ်ခုをအလယ်ဗဟို O についてထောင့်မှန်အတိုင်း ဆက်ထားは။ ဤ Beam のဆုံမှတ် O についてဒေါင်လိုက်ဝန် P သက်ရောက်သောအခါ、အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 4つの<ruby>支点<rt>してん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>はPである。", textMY: "Support  の はP は" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>AB、<ruby>梁<rt>はり</rt></ruby>CDともに<ruby>曲<rt>ま</rt></ruby>げモーメントが<ruby>最大<rt>さいだい</rt></ruby>になるときは○<ruby>点<rt>てん</rt></ruby>である。", textMY: "Beam AB とCD についてBending Moment  O は" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>ABの<ruby>最大<rt>さいだい</rt></ruby><ruby>曲<rt>ま</rt></ruby>げモーメントと、<ruby>梁<rt>はり</rt></ruby>CDの<ruby>最大<rt>さいだい</rt></ruby><ruby>曲<rt>ま</rt></ruby>げモーメントは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Beam AB の Bending Moment とBeam CD の Bending Moment はは" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>ABに<ruby>生<rt>しょう</rt></ruby>じるせん<ruby>断力<rt>だんりょく</rt></ruby>は、<ruby>梁<rt>はり</rt></ruby>CDに<ruby>生<rt>しょう</rt></ruby>じるせん<ruby>断力<rt>だんりょく</rt></ruby>よりも<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Beam AB について Shear Force はBeam CD について Shear Force  は" },
      { id: 5, textJP: "(5) Pを<ruby>徐々<rt>じょじょ</rt></ruby>に<ruby>増加<rt>ぞうか</rt></ruby>させたとき、<ruby>曲<rt>ま</rt></ruby>げモーメントによる<ruby>応力度<rt>おうりょくど</rt></ruby>が<ruby>降伏点<rt>こうふくてん</rt></ruby>に<ruby>先<rt>さき</rt></ruby>に<ruby>到達<rt>とうたつ</rt></ruby>するのは<ruby>梁<rt>はり</rt></ruby>ABである。", textMY: " P を、Bending Stress はBeam AB について Yield Point  " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Stiffness とLoad Distribution",
      reasonMY: "အလျားတိုသော Beam はStiffness (တောင့်တင်းမှု) ပိုများသောကြောင့် ဝန် P のအစိတ်အပိုင်းをပိုမိုခံယူရမည်ဖြစ်は။ Beam AB はCD ထက် ပိုတိုသောကြောင့် AB についてဖြစ်ပေါ်သော Bending Moment はCD ထက် ပိုမိုကြီးမားရမည်။ ထို့ကြောင့် 'တူညီは' ဟုဆိုသော (3) はမှားယွင်းပါは။",
      memoryTipMY: "Stiffness ပိုရင် Load ပိုယူတယ်、Load ပိုယူရင် Moment ပိုများတယ်။"
    }
  },
  {
    id: "2024-2",
    questionJP: "<ruby>引張強度<rt>ひっぱりきょうど</rt></ruby>と<ruby>圧縮強度<rt>あっしゅくきょうど</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい<ruby>部材<rt>ぶざい</rt></ruby>で<ruby>構成<rt>こうせい</rt></ruby>されたトラス<ruby>梁<rt>はり</rt></ruby>に2つの<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>している。Pを<ruby>増加<rt>ぞうか</rt></ruby>させたとき、<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>破壊<rt>はかい</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>はどれか。",
    questionMY: "ဆွဲအားとဖိအားခံနိုင်ရည် တူညီသော member များでဖွဲ့စည်းထားသည့် Truss Beam についてဒေါင်လိုက်ဝန် P နှစ်ခု သက်ရောက်နေは။ ဝန် P をတိုးမြှင့်場合はမည်သည့် member はပထမဆုံး ပျက်စီးမည်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>ア", textMY: "Member (ア)" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>イ", textMY: "Member (イ)" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウ", textMY: "Member (ウ)" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エ", textMY: "Member (エ)" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>オ", textMY: "Member (オ)" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Axial Force",
      reasonMY: "Truss ဖွဲ့စည်းပုံအရ、Chord member များ (အပေါ်ဘောင်とအောက်ဘောင်) についてဝင်ရိုးလိုက်အား (Axial Force) အများဆုံး သက်ရောက်လေ့ရှိは။ ပုံအရ (エ) member はအောက်ခြေ Chord のအလယ်ဗဟိုについてရှိပြီး ဝန် P とအနီးဆုံးနေရာဖြစ်သောကြောင့် အားအများဆုံးသက်ရောက်ပြီး အရင်ဆုံး ပျက်စီးနိုင်ခြေ အရှိဆုံး ဖြစ်は။",
      memoryTipMY: "Truss のChord member များ (အထူးသでအလယ်ပိုင်း) はဝန်အများဆုံး ခံရတတ်は။"
    }
  },
  {
    id: "2024-3",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံとပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) わが<ruby>国<rt>くに</rt></ruby>における<ruby>鉄骨<rt>てっこつ</rt></ruby>ラーメン<ruby>構造<rt>こうぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>には、<ruby>角形鋼管柱<rt>かくがたこうかんちゅう</rt></ruby>とH<ruby>形鋼梁<rt>がたこうはり</rt></ruby>が<ruby>用<rt>もち</rt></ruby>いられることが<ruby>多<rt>おお</rt></ruby>い。", textMY: "  Frame についてで (Square Column) とH-beam をは" },
      { id: 2, textJP: "(2) <ruby>鋼材<rt>こうざい</rt></ruby>はコンクリートや<ruby>木材<rt>もくざい</rt></ruby>より<ruby>比重<rt>ひじゅう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいが、これらよりもはるかに<ruby>強<rt>つよ</rt></ruby>く、<ruby>高<rt>たか</rt></ruby>い<ruby>靭性<rt>じんせい</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>している。", textMY: "はは Toughness   は" },
      { id: 3, textJP: "(3) トラス<ruby>構造<rt>こうぞう</rt></ruby>は、<ruby>三角形<rt>さんかくけい</rt></ruby>を<ruby>基本形状<rt>きほんけいじょう</rt></ruby>として<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ、<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造<rt>こうぞう</rt></ruby>である。", textMY: "Truss Structure はを axial force でをは" },
      { id: 4, textJP: "(4) <ruby>免震構造<rt>めんしんこうぞう</rt></ruby>は、エネルギー<ruby>吸収<rt>きゅうしゅう</rt></ruby>デバイスで<ruby>制御<rt>せいぎょ</rt></ruby>することによって<ruby>高<rt>たか</rt></ruby>い<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>した<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>であり、<ruby>軟弱地盤<rt>なんじゃくじばん</rt></ruby>に<ruby>建<rt>た</rt></ruby>つ<ruby>建物<rt>たてもの</rt></ruby>に<ruby>採用<rt>さいよう</rt></ruby>されることが<ruby>多<rt>おお</rt></ruby>い。", textMY: "Seismic Isolation (免震構造) をについて については" },
      { id: 5, textJP: "(5) <ruby>鉄骨枠付<rt>てっこつわくつ</rt></ruby>き<ruby>補強<rt>ほきょう</rt></ruby>は、スタッドを<ruby>溶接<rt>ようせつ</rt></ruby>し<ruby>無収縮<rt>むしゅうしゅく</rt></ruby>モルタルでRC<ruby>部材<rt>ぶざい</rt></ruby>と<ruby>一体化<rt>いったいか</rt></ruby>したものである。", textMY: "で (Steel Retrofit) はnon-shrink mortar でRC と は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 免震構造 (Seismic Isolation)",
      reasonMY: "Seismic Isolation (免震構造) はမြေမာသောနေရာ (堅硬な地盤) များについてအထိရောက်ဆုံးဖြစ်は။ မြေပျော့သောနေရာ (軟弱地盤) များについてငလျင်လှိုင်းのတုန်ခါမှုကာလ (Period) はရှည်လျားတတ်ပြီး、Isolation စနစ်とထပ်တူကျကာ ပဲ့တင်လှိုင်း (Resonance) ဖြစ်ပေါ်ပြီး ပိုမိုအန္တရာယ်ရှိနိုင်は။ ထို့ကြောင့် မြေပျော့သောနေရာများについてဤစနစ်をသုံးလေ့မရှိပါ။",
      memoryTipMY: "Seismic Isolation (免震) = မြေမာသောနေရာ (Hard Ground)။"
    }
  },
  {
    id: "2024-4",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>特性<rt>とくせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများのဝိသေသလက္ခဏာများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ボルト<ruby>孔<rt>あな</rt></ruby>の<ruby>中心<rt>ちゅうしん</rt></ruby>から<ruby>縁端<rt>えんたん</rt></ruby>までの<ruby>距離<rt>きょり</rt></ruby>が<ruby>十分<rt>じゅうぶん</rt></ruby>でないと、はしぬけ<ruby>破断<rt>はだん</rt></ruby>によってボルトの<ruby>耐力<rt>たいりょく</rt></ruby>が<ruby>発揮<rt>はっき</rt></ruby>されないことがある。", textMY: "Edge Distance 場合は bolt の " },
      { id: 2, textJP: "(2) <ruby>細長<rt>ほそなが</rt></ruby>い<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>中心圧縮力<rt>ちゅうしんあっしゅくりょく</rt></ruby>を<ruby>作用<rt>さよう</rt></ruby>させたとき、<ruby>部材<rt>ぶざい</rt></ruby>が<ruby>曲<rt>ま</rt></ruby>がる<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>曲<rt>ま</rt></ruby>げ<ruby>座屈<rt>ざくつ</rt></ruby>という。", textMY: " を 場合はBending Buckling は" },
      { id: 3, textJP: "(3) <ruby>板要素<rt>いたようそ</rt></ruby>が<ruby>薄<rt>うす</rt></ruby>すぎると、<ruby>部材全体<rt>ぶざいぜんたい</rt></ruby>としての<ruby>座屈<rt>ざくつ</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる<ruby>前<rt>まえ</rt></ruby>に<ruby>板要素<rt>いたようそ</rt></ruby>が<ruby>波打<rt>なみう</rt></ruby>つことがある。これを<ruby>局部座屈<rt>きょくぶざくつ</rt></ruby>という。", textMY: "は場合はLocal Buckling は" },
      { id: 4, textJP: "(4) <ruby>長<rt>なが</rt></ruby>いH<ruby>形鋼梁<rt>がたこうはり</rt></ruby>が<ruby>曲<rt>ま</rt></ruby>げを<ruby>受<rt>う</rt></ruby>けるとき、<ruby>圧縮側<rt>あっしゅくがわ</rt></ruby>フランジが<ruby>横方向<rt>よこほうこう</rt></ruby>にたわむ<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>横座屈<rt>よこざくつ</rt></ruby>という。", textMY: " H-beam はbending  と Lateral Buckling は" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>弾性剛性<rt>だんせいごうせい</rt></ruby>が<ruby>高<rt>たかい</rt></ruby>い<ruby>材料<rt>ざいりょう</rt></ruby>であるため、<ruby>曲<rt>ま</rt></ruby>げに<ruby>対<rt>たい</rt></ruby>する<ruby>強さ<rt>つよさ</rt></ruby>が<ruby>十分<rt>じゅうぶん</rt></ruby>であれば<ruby>振動<rt>しんどう</rt></ruby>で<ruby>居住者<rt>きょじゅうしゃ</rt></ruby>に<ruby>不快感<rt>ふかいかん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えることはほとんどない。", textMY: "はStiffness  Bending Strength で  " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Vibration and Stiffness",
      reasonMY: "သံမဏိはအလွန်ခိုင်ခံ့သော်လည်း ပါးလွှာပြီး ပေါ့ပါးသောကြောင့် တုန်ခါမှု (Vibration) ပြဿနာ ဖြစ်ပေါ်လွယ်は။ ထို့ကြောင့် Strength (強度) လုံလောက်ရုံでတုန်ခါမှု ပြဿနာ မရှိဟု ယူဆခြင်းမှာ မှားယွင်းは။ Serviceability အတွက် Stiffness をသီးခြားစစ်ဆေးရန် လိုအပ်は။",
      memoryTipMY: "ခိုင်မာမှု (Strength) ရှိရုံでတုန်ခါမှု (Vibration) ကင်းဝေးはဟု မဆိုနိုင်ပါ။"
    }
  },
  {
    id: "2024-5",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>には、<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>と<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>の2<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "HS Bolt についてFriction Joint とTension Joint   は" },
      { id: 2, textJP: "(2) <ruby>溶接<rt>ようせつ</rt></ruby>と<ruby>併用<rt>へいよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶接後<rt>ようせつご</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>されたボルトの<ruby>耐力<rt>たいりょく</rt></ruby>は<ruby>考慮<rt>こうりょ</rt></ruby>できない。", textMY: "と、  Bolt のをについて" },
      { id: 3, textJP: "(3) <ruby>溶融亜鉛<rt>ようゆうあえん</rt></ruby>めっき<ruby>高力<rt>こうりょく</rt></ruby>ボルトはJISに<ruby>規格<rt>きかく</rt></ruby>がないため、<ruby>構造耐力上主要<rt>こうぞうたいりょくじょうしゅよう</rt></ruby>な<ruby>部分<rt>ぶぶん</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いることはできない。", textMY: " HS Bolt はJIS  について" },
      { id: 4, textJP: "(4) <ruby>摩擦面<rt>まさつめん</rt></ruby>は、0.45<ruby>以上<rt>いじょう</rt></ruby>のすべり<ruby>係数<rt>けいすう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>しなければならない。", textMY: "は (Slip Coefficient) . と " },
      { id: 5, textJP: "(5) <ruby>孔あけ<rt>あなあけ</rt></ruby>はドリルあけとするが、<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>場合<rt>ばあい</rt></ruby>はレーザあけとすることができる。", textMY: "をDrill で  場合はLaser で は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶融亜鉛めっき高力ボルト (Galvanized HS Bolt)",
      reasonMY: "သွပ်ရည်စိမ် HS Bolt (ဥပမာ- F12T) များはသီးခြား JIS စံနှုန်းမရှိသော်လည်း、ဝန်ကြီးဌာနのအသိအမှတ်ပြုလက်မှတ် (Minister Certification - 大臣認定) でအဓိကအစိတ်အပိုင်းများについてကျယ်ပြန့်စွာ အသုံးပြုနေကြは။ ထို့ကြောင့် အသုံးမပြုနိုင်ပါဟု ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "JIS မရှိသော်လည်း 大臣認定 (Minister Approval) でသုံးနိုင်は။"
    }
  },
  {
    id: "2024-6",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>にはアーク<ruby>溶接<rt>ようせつ</rt></ruby>が<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "  についてArc Welding はは" },
      { id: 2, textJP: "(2) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>はボルト<ruby>孔<rt>あな</rt></ruby>のような<ruby>断面欠損<rt>だんめんけっそん</rt></ruby>がない。", textMY: "についてbolt   " },
      { id: 3, textJP: "(3) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>は、<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>規格強度<rt>きかくきょうど</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>が<ruby>得<rt>え</rt></ruby>られる。", textMY: "Full Penetration Weld はbase metal の は" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>には、<ruby>前面<rt>ぜんめん</rt></ruby>、<ruby>側面<rt>そكめん</rt></ruby>、<ruby>斜方<rt>しゃほう</rt></ruby>の3<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "Fillet Weld について、 と   は" },
      { id: 5, textJP: "(5) <ruby>部分溶込<rt>ぶぶんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>継ぎ手<rt>つぎて</rt></ruby>は、せん<ruby>断力<rt>だんりょく</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>部分<rt>ぶぶん</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いてはならない。", textMY: "Partial Penetration Weld を (Shear Force)  " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 部分溶込み溶接 (Partial Penetration Weld)",
      reasonMY: "Partial Penetration Weld (部分溶込み溶接) をညှပ်အား (Shear Force) သို့မဟုတ် ဖိအား (Compression Force) သယ်ဆောင်သော နေရာများについてအသုံးပြုနိုင်は။ သို့သော် ၎င်းをဆွဲအား (Tension Force) をတိုက်ရိုက်ခံယူသော အဓိကနေရာများについてအသုံးမပြုရန် ကန့်သတ်ထားは။ ထို့ကြောင့် (၅) ပါ 'ညှပ်အားအတွက် မသုံးရ' ဟူသော ဖော်ပြချက်မှာ မှားယွင်းは။",
      memoryTipMY: "Partial Penetration (部分溶込) = Compression/Shear OK, Tension NG."
    }
  },
  {
    id: "2024-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズは<ruby>ルート<rt>るーと</rt></ruby>から<ruby>斜辺<rt>しゃへん</rt></ruby>におろした<ruby>垂線<rt>すいせん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さとする。", textMY: "Fillet Weld のSize はroot  hypotenuse   の は" },
      { id: 2, textJP: "(2) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>有効長さ<rt>ゆうこうながさ</rt></ruby>は、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>溶接長さ<rt>ようせつながさ</rt></ruby>をそのまま取ることができる。", textMY: "Full Penetration Weld の  は" },
      { id: 3, textJP: "(3) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>の<ruby>有効長さ<rt>ゆうこうながさ</rt></ruby>は、<ruby>始終端部<rt>しじゅうたんぶ</rt></ruby>の<ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>部分<rt>ぶぶん</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>めてはならない。", textMY: "Fillet Weld のについてと  を" },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>は、<ruby>低<rt>ひく</rt></ruby>い<ruby>方<rt>ほう</rt></ruby>の<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>とする。", textMY: "のはのは" },
      { id: 5, textJP: "(5) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>は <ruby>構造性能<rt>こうぞうせいのう</rt></ruby><ruby>低下<rt>ていか</rt></ruby>の<ruby>要因<rt>よういん</rt></ruby>につながる。", textMY: "Residual Stress は    は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 隅肉溶接のサイズ (Fillet Weld Size)",
      reasonMY: "Fillet Weld のSize ဆိုはမှာ ဒေါင်လိုက်မျဉ်းအရှည် မဟုတ်ဘဲ、'Leg Length' (脚長) ဟုခေါ်သော ဂဟေသားのဘေးအနားအရှည် (နံဘေးနှစ်ဖက်) をဆိုလိုは။ (၁) についてဖော်ပြထားသော root မှ hypotenuse သို့ ဆွဲလိုက်သော ဒေါင်လိုက်မျဉ်းမှာ 'Theoretical Throat Thickness' (理論のど厚) ဖြစ်は။",
      memoryTipMY: "Size = Leg Length (脚長)။ Throat Thickness (のど厚) မဟုတ်ပါ။"
    }
  },
  {
    id: "2024-8",
    questionJP: "<ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby>(SN<ruby>材<rt>ざい</rt></ruby>)に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးသုံး သံမဏိ (SN Material) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) SN<ruby>材<rt>ざい</rt></ruby>にはA<ruby>種<rt>しゅ</rt></ruby>、B<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>の3<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "SN material についてA, B, C   は" },
      { id: 2, textJP: "(2) A<ruby>種<rt>しゅ</rt></ruby>は<ruby>溶接性<rt>ようせつせい</rt></ruby>が<ruby>考慮<rt>こうりょ</rt></ruby>されていないため、<ruby>軽微<rt>けいび</rt></ruby>な<ruby>溶接<rt>ようせつ</rt></ruby>やボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いる。", textMY: "Type A は    bolt については" },
      { id: 3, textJP: "(3) B<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>は<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>が<ruby>規定<rt>きてい</rt></ruby>され、<ruby>溶接性<rt>ようせつせい</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>されている。", textMY: "Type B とC についてYield Ratio の  を は" },
      { id: 4, textJP: "(4) 0℃シャルピー<ruby>吸収エネルギー<rt>きゅうしゅうエネルギー</rt></ruby>はB<ruby>種<rt>しゅ</rt></ruby>で27J<ruby>以上<rt>いじょう</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>で47J<ruby>以上<rt>いじょう</rt></ruby>である。", textMY: "0°C Charpy test についてType B は27J と、Type C は47J と " },
      { id: 5, textJP: "(5) C<ruby>種<rt>しゅ</rt></ruby>は<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>の<ruby>絞り値<rt>しぼりち</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>していない。", textMY: "Type C はplate  Reduction of Area (絞り値) を" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材 C種 (SN-C Material)",
      reasonMY: "SN Material についてType C はအထူးသでPlate Thickness Direction (板厚方向) についてကြီးမားသော ဆွဲအားをခံနိုင်ရန် (Lamellar tearing ကာကွယ်ရန်) ဒီဇိုင်းထုတ်ထားခြင်းဖြစ်は။ ထို့ကြောင့် Type C についてအထူဘက်သို့ ကျုံ့နိုင်မှု တန်ဖိုး (Reduction of Area - 絞り値) をမဖြစ်မနေ သတ်မှတ်ထားရပါは။ သတ်မှတ်မထားပါဟု ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "SN-C = Thickness direction property (絞り値) ရှိရမည်။"
    }
  },
  {
    id: "2024-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုဂုဏ်သတ္တိများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ヤング係数<rt>やんぐけいすう</rt></ruby>は、ほぼ<ruby>一定<rt>いってい</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>(205,000N/mm²)をとる。", textMY: "Young's Modulus は , N/mm² は" },
      { id: 2, textJP: "(2) <ruby>降伏棚<rt>こうふくだな</rt></ruby>を<ruby>過<rt>す</rt></ruby>ぎると<ruby>応力度<rt>おうりょくど</rt></ruby>が<ruby>再び上昇<rt>ふたたびじょうしょう</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>ひずみ硬化<rt>ひずみこうか</rt></ruby>という。", textMY: "Yield point を Stress をStrain Hardening  は" },
      { id: 3, textJP: "(3) <ruby>降伏比<rt>こうふくひ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いほど<ruby>塑性変形能力<rt>そせいへんけいのうりょく</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなる。", textMY: "Yield Ratio  Plastic Deformation Capacity  は" },
      { id: 4, textJP: "(4) <ruby>絞り<rt>しぼり</rt></ruby>とは、<ruby>破断時<rt>はだんじ</rt></ruby>の<ruby>断面積<rt>だんめんせき</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>を<ruby>元断面積<rt>もとだんめんせき</rt></ruby>で<ruby>除<rt>じょ</rt></ruby>したものである。", textMY: "Reduction of Area は  をでは" },
      { id: 5, textJP: "(5) <ruby>ひずみ時効<rt>ひずみじこう</rt></ruby>により<ruby>降伏点<rt>こうふくてん</rt></ruby>が<ruby>上昇<rt>じょうしょう</rt></ruby>し、<ruby>伸び能力<rt>のびのうりょく</rt></ruby>は<ruby>減少<rt>げんしょう</rt></ruby>する。", textMY: "Strain aging  yield point  elongation () は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 降伏比 (Yield Ratio)",
      reasonMY: "Yield Ratio (降伏比) ဆိုはမှာ Yield Point をTensile Strength とစားထားသော တန်ဖိုးဖြစ်は။ ဤတန်ဖိုး မြင့်လွန်း場合はYield ဖြစ်ပြီးはとမကြာမီ ပျက်စီးသွားမည် ဖြစ်သောကြောင့် ပုံပျက်ခံနိုင်စွမ်း (Plastic Deformation Capacity) နည်းပါးသွားは။ ထို့ကြောင့် Yield Ratio နိမ့်လေ ပုံပျက်နိုင်စွမ်း ပိုကောင်းလေ ဖြစ်は။",
      memoryTipMY: "Yield Ratio မြင့်ရင် ပုံပျက်ခံနိုင်စွမ်း (Ductility) နည်းသွားは။"
    }
  },
  {
    id: "2024-10",
    questionJP: "<ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>の<ruby>製作計画<rt>せいさくけいかく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်ကုန် ထုတ်လုပ်မှုစီမံကိန်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工程計画<rt>こうていけいかく</rt></ruby>では、<ruby>製作<rt>せいさく</rt></ruby>の<ruby>順序<rt>じゅんじょ</rt></ruby>や<ruby>方法<rt>ほうほう</rt></ruby>、<ruby>設備<rt>せつび</rt></ruby>などを<ruby>決<rt>き</rt></ruby>める。", textMY: "Process Planning について 、とをは" },
      { id: 2, textJP: "(2) <ruby>工数計画<rt>こうすうけいかく</rt></ruby>では、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>人員<rt>じんいん</rt></ruby>や<ruby>設備<rt>せつび</rt></ruby>の<ruby>台数<rt>だいすう</rt></ruby>などを<ruby>決<rt>き</rt></ruby>める。", textMY: "Man-hour Planning について とをは" },
      { id: 3, textJP: "(3) <ruby>日程計画<rt>にっていけいかく</rt></ruby>では、<ruby>工程<rt>こうてい</rt></ruby>ごとの<ruby>開始予定日<rt>かいしよていび</rt></ruby>や<ruby>所要日数<rt>しょようにっすう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "Schedule Planning についてのとをは" },
      { id: 4, textJP: "(4) <ruby>材料計画<rt>ざいりょうけいかく</rt></ruby>では、<ruby>材料手配<rt>ざいりょうてはい</rt></ruby>の<ruby>日程<rt>にってい</rt></ruby>と<ruby>所要量<rt>しょようりょう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "Material Planning についてと をは" },
      { id: 5, textJP: "(5) <ruby>品質計画<rt>ひんしつけいかく</rt></ruby>では、<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>をもとに<ruby>品質水準<rt>ひんしつすいじゅん</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "Quality Planning について  をは" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - စီမံကိန်း အမျိုးအစားများ",
      reasonMY: "工程計画 (Process Planning) ဆိုはမှာ ထုတ်လုပ်မှု 'အဆင့်ဆင့်' (Sequence) をသတ်မှတ်ခြင်း ဖြစ်は။ 'စက်ပစ္စည်း' (設備) သို့မဟုတ် '台数' (အရေအတွက်) をဆုံးဖြတ်ခြင်းは工数計画 (Man-hour/Resource Planning) についてပိုမိုသက်ဆိုင်は။",
      memoryTipMY: "工程 = Sequence, 工数 = Resources/Man-hours."
    }
  },
  {
    id: "2024-11",
    questionJP: "<ruby>作業量<rt>さぎょうりょう</rt></ruby>が<ruby>過大<rt>かだい</rt></ruby>であることへの<ruby>対策<rt>たいさく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လုပ်ငန်းပမာဏ အလွန်များပြားနေ場合はဖြေရှင်းမည့်နည်းလမ်းများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) あらかじめ<ruby>受注予定量<rt>じゅちゅうよていりょう</rt></ruby>を<ruby>見直<rt>みなお</rt></ruby>して、<ruby>仕事量<rt>しごとりょう</rt></ruby>の<ruby>調整<rt>ちょうせい</rt></ruby>や<ruby>標準時間<rt>ひょうじゅんじかん</rt></ruby>などの<ruby>見直<rt>みなお</rt></ruby>しを<ruby>行<rt>おこな</rt></ruby>う。", textMY: "を とをは" },
      { id: 2, textJP: "(2) <ruby>一時的<rt>いちじてき</rt></ruby>に<ruby>リース<rt>りーす</rt></ruby>などを<ruby>利用<rt>りよう</rt></ruby>したり<ruby>新規購入<rt>しんきこうにゅう</rt></ruby>するなどして、<ruby>設備能力<rt>せつびのうりょく</rt></ruby>を<ruby>増強<rt>ぞうきょう</rt></ruby>する。", textMY: "で  では" },
      { id: 3, textJP: "(3) <ruby>日程的<rt>にっていてき</rt></ruby>に<ruby>余裕<rt>よゆう</rt></ruby>のある<ruby>部署<rt>ぶしょ</rt></ruby>の<ruby>人員<rt>じんいん</rt></ruby>や<ruby>外部<rt>がいぶ</rt></ruby>の<ruby>人員<rt>じんいん</rt></ruby>を<ruby>補充<rt>ほじゅう</rt></ruby>したり、あるいは<ruby>残業<rt>ざんぎょう</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "     をは" },
      { id: 4, textJP: "(4) <ruby>建方工程<rt>たてかたこうてい</rt></ruby>から<ruby>製作着手日程<rt>せいさくちゃくしゅにってい</rt></ruby>を<ruby>逆算<rt>ぎゃくさん</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>による<ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>って<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する。", textMY: "    をは" },
      { id: 5, textJP: "(5) <ruby>所定<rt>しょてい</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>できる<ruby>外注先<rt>がいちゅうさき</rt></ruby>を<ruby>選<rt>えら</rt></ruby>び、<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>了解<rt>りょうかい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>上<rt>うえ</rt></ruby>で<ruby>依頼<rt>いらい</rt></ruby>する。", textMY: " をのでは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作着手 (Start of Fabrication)",
      reasonMY: "ပုံစံအတည်ပြုချက် (Shop Drawing Approval) မရရှိဘဲ ထုတ်လုပ်မှု စတင်ခြင်း (承認に先立って着手) はအလွန်အန္တရာယ်များပြီး ဒီဇိုင်းအမှားများရှိ場合はပြန်လုပ်ရခြင်း (Remake) ဖြစ်စေနိုင်は။ ၎င်းはအသင့်လျော်ဆုံး ဖြေရှင်းနည်း မဟုတ်ပါ။",
      memoryTipMY: "အတည်ပြုချက် (Approval) ရပြီးမှ ထုတ်လုပ်မှုをစတင်ရမည်။"
    }
  },
  {
    id: "2024-12",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>および<ruby>現寸<rt>げんすん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အလုပ်ရုံပုံစံ (Shop Drawings) とအတိုင်းအတာများ (Full-scale) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>通常<rt>つうじょう</rt></ruby>、<ruby>一般図<rt>いっぱんず</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>し<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>後<rt>あと</rt></ruby>、<ruby>詳細図<rt>しょうさいず</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する。", textMY: "でGeneral drawing  Detail drawing をは" },
      { id: 2, textJP: "(2) <ruby>設計変更<rt>せっけいへんこう</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>変更内容<rt>へんこうないよう</rt></ruby>を<ruby>反映<rt>はんえい</rt></ruby>した<ruby>詳細図<rt>しょうさいず</rt></ruby>を<ruby>再提出<rt>さいていしゅつ</rt></ruby>し、改めて<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", textMY: "場合は  " },
      { id: 3, textJP: "(3) <ruby>設備用梁貫通孔<rt>せつびようはりかんつうこう</rt></ruby>などは、<ruby>詳細図<rt>しょうさいず</rt></ruby>への<ruby>記載<rt>きさい</rt></ruby>を<ruby>省略<rt>しょうりゃく</rt></ruby>するとよい。", textMY: "Beam  をについては" },
      { id: 4, textJP: "(4) <ruby>現寸作業<rt>げんすんさぎょう</rt></ruby>のチェックポイントとして、<ruby>輸送<rt>ゆそう</rt></ruby>や<ruby>溶接<rt>ようせつ</rt></ruby>への<ruby>支障<rt>ししょう</rt></ruby>がないか<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Erection accuracy についてと   は" },
      { id: 5, textJP: "(5) <ruby>現寸作業<rt>げんすんさぎょう</rt></ruby>をNC<ruby>装置<rt>そうち</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>定規<rt>じょうぎ</rt></ruby>・<ruby>型板<rt>かたいた</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>となる。", textMY: "NC で場合は (Template)  " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 詳細図の記載 (Detail Drawing)",
      reasonMY: "အသေးစိတ်ပုံ (Detail drawing) များについてဖြတ်သန်းပေါက်များ (貫通孔) ကဲ့သို့သော အရေးကြီးသည့် အချက်အလက်များをချန်လှပ်ထားခြင်း (省略) မပြုရပါ။ ၎င်းတို့はအားနည်းချက်ဖြစ်စေနိုင်သောကြောင့် တိကျစွာ ဖော်ပြရန် လိုအပ်は။",
      memoryTipMY: "အသေးစိတ်ပုံ (Detail Drawing) についてအရေးကြီးအချက်အလက်များをချန်လှပ်ထား၍ မရပါ။"
    }
  },
  {
    id: "2024-13",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断方法<rt>せつだんほうほう</rt></ruby>とその<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်နည်းများと၎င်းတို့のဝိသေသလက္ခဏာများအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ガス<ruby>切断法<rt>せつだんほう</rt></ruby>は、<ruby>切断精度<rt>せつだんせいど</rt></ruby>が<ruby>良<rt>よ</rt></ruby>く、<ruby>経済的<rt>けいざいてき</rt></ruby>である。", textMY: "Gas Cutting は は" },
      { id: 2, textJP: "(2) <ruby>シャーカッター<rt>しゃーかったー</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いる<ruby>方法<rt>ほうほう</rt></ruby>は、<ruby>切断速度<rt>せつだんそくど</rt></ruby>は<ruby>速<rt>はや</rt></ruby>いが、<ruby>切断面<rt>せつだんめん</rt></ruby>に「かえり」が<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "Shear Cutter は についてburrs (かえり)  は" },
      { id: 3, textJP: "(3) <ruby>バンドソー<rt>ばんどそー</rt></ruby>は<ruby>精度<rt>せいど</rt></ruby>が<ruby>良<rt>よ</rt></ruby>く、<ruby>大断面<rt>だいだんめん</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>される。", textMY: "Band Saw は   は" },
      { id: 4, textJP: "(4) <ruby>レーザ切断法<rt>れーざせつだんほう</rt></ruby>は、<ruby>切断面<rt>せつだんめん</rt></ruby>の<ruby>直角度<rt>ちょっかくど</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある。", textMY: "Laser Cutting は (Squareness) について は" },
      { id: 5, textJP: "(5) <ruby>プラズマ切断法<rt>ぷらずませつだんほう</rt></ruby>は、<ruby>ヒューム<rt>ひゅーむ</rt></ruby><ruby>発生量<rt>はっせいりょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>く、<ruby>騒音<rt>そうおん</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Plasma Cutting は    は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - レーザ切断 (Laser Cutting)",
      reasonMY: "Laser Cutting はအလွန်တိကျသော နည်းလမ်းဖြစ်ပြီး ဒေါင်လိုက်ကျမှု (直角度) အပါအဝင် ဖြတ်တောက်မှု အရည်အသွေး အလွန်ကောင်းမွန်は။ ထို့ကြောင့် ပြဿနာရှိはဟု ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Laser Cutting はတိကျမှု (Accuracy) အမြင့်ဆုံး နည်းလမ်းများထဲမှ တစ်ခုဖြစ်は။"
    }
  },
  {
    id: "2024-14",
    questionJP: "JASS 6に<ruby>基<rt>もと</rt></ruby>づき<ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိအပေါက်ဖောက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>孔径<rt>こうけい</rt></ruby>30mm<ruby>以上<rt>いじょう</rt></ruby>の<ruby>孔<rt>あな</rt></ruby>をガス<ruby>孔あけ<rt>あなあけ</rt></ruby>とした<ruby>場合<rt>ばあい</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>は±2mm<ruby>以内<rt>いない</rt></ruby>とする。", textMY: "30mm  をgas で場合は ±2mm について " },
      { id: 2, textJP: "(2) <ruby>ブラスト処理<rt>ぶらすとしょり</rt></ruby>のみで<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>ブラスト後<rt>ぶらすとご</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>する。", textMY: "をblast  " },
      { id: 3, textJP: "(3) <ruby>せん断孔あけ<rt>せんだんあなあけ</rt></ruby>の「かえり」は<ruby>グラインダ<rt>ぐらいんだ</rt></ruby>などで<ruby>修正<rt>しゅうせい</rt></ruby>する。", textMY: "Punch で burrs をgrinder で" },
      { id: 4, textJP: "(4) <ruby>レーザ孔あけ<rt>れーざあなあけ</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶損部<rt>ようそんぶ</rt></ruby>は<ruby>応力上支障<rt>おうりょくじょうししょう</rt></ruby>の<ruby>少<rt>すく</rt></ruby>ない<ruby>位置<rt>いち</rt></ruby>とする。", textMY: "Laser で場合は  stress について" },
      { id: 5, textJP: "(5) <ruby>孔あけ後<rt>あなあけご</rt></ruby>のバリや<ruby>切粉<rt>きりこ</rt></ruby>は<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: " を" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 摩擦面処理 (Friction Surface)",
      reasonMY: "ပွတ်တိုက်မျက်နှာပြင်をblast လုပ်ပြီးမှ အပေါက်ဖောက်ပါက、အပေါက်ဖောက်ရာမှ ထွက်လာသော ဆီ သို့မဟုတ် အမှုန်များကြောင့် သန့်စင်ထားသော ပွတ်တိုက်မျက်နှာပြင်မှာ ပြန်လည် ညစ်ပေသွားနိုင်は။ ထို့ကြောင့် အပေါက်ဖောက်ပြီးမှသာ blast ပြုလုပ်ခြင်းが ပိုမိုမှန်ကန်は။",
      memoryTipMY: "အပေါက်ဖောက်ခြင်း (Drilling) ပြီးမှ Blast လုပ်ခြင်းが ပိုကောင်းは။"
    }
  },
  {
    id: "2024-15",
    questionJP: "JASS 6における<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength bolt ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>発錆処理<rt>はっせいしょり</rt></ruby>には<ruby>自然発錆<rt>しぜんはっせい</rt></ruby>と<ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>がある。", textMY: "でについてと は" },
      { id: 2, textJP: "(2) <ruby>ブラスト処理<rt>ぶらすとしょり</rt></ruby>には<ruby>サンドブラスト<rt>さんどぶらすと</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "Blast についてSandblast をは" },
      { id: 3, textJP: "(3) <ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>も<ruby>同時<rt>どうじ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>薬剤<rt>やくざい</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>してはならない。", textMY: "Black scale を   を" },
      { id: 4, textJP: "(4) 1mmを<ruby>超<rt>こ</rt></ruby>える<ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>を<ruby>入<rt>い</rt></ruby>れる。", textMY: "1mm   (肌すき) 場合はFiller plate " },
      { id: 5, textJP: "(5) <ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>の<ruby>両面<rt>りょうめん</rt></ruby>とも<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Filler plate のを " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 薬剤発錆 (Chemical Rusting)",
      reasonMY: "Black scale (黒皮) をပါ ဖယ်ရှားပေးနိုင်သော ဓာတုပစ္စည်းများをအသုံးပြုခြင်းはပွတ်တိုက်မျက်နှာပြင်အတွက် ပိုမိုကောင်းမွန်သော Slip Coefficient ရရှိစေနိုင်は။ ထို့ကြောင့် ၎င်းを'မသုံးရ' ဟု တားမြစ်ထားခြင်း မရှိပါ။",
      memoryTipMY: "Black scale ဖယ်ရှားခြင်းはပွတ်တိုက်အား (Friction) အတွက် ကောင်းမွန်は။"
    }
  },
  {
    id: "2024-16",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>加工<rt>かこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ ပြုပြင်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>材料矯正<rt>ざいりょうきょうせい</rt></ruby>における<ruby>加熱矯正法<rt>かねつきょうせいほう</rt></ruby>には、<ruby>線状加熱<rt>せんじょうかねつ</rt></ruby>、<ruby>点状加熱<rt>てんじょうかねつ</rt></ruby>、くさび<ruby>形加熱<rt>がたかねつ</rt></ruby>がある。", textMY: "について  、 と  は" },
      { id: 2, textJP: "(2) JASS 6 では<ruby>スカラップ加工<rt>すからっぷかこう</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、ノンスカラップ<ruby>形式<rt>けいしき</rt></ruby>あるいは<ruby>複円型スカラップ形式<rt>ふくえんがたすからっぷけいしき</rt></ruby>によるとしている。", textMY: "JASS 6 についてscallop を場合はnon-scallop  double-circle scallop で" },
      { id: 3, textJP: "(3) <ruby>建設省告示第2464号<rt>けんせつしょうこくじだい2464ごう</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>では、400℃を<ruby>超<rt>こ</rt></ruby>える<ruby>加熱<rt>かねつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>加工後<rt>かこうご</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>が<ruby>加工前<rt>かこうまえ</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>であることを<ruby>確<rt>たし</rt></ruby>かめなければならない。", textMY: "°C  場合は は を は" },
      { id: 4, textJP: "(4) <ruby>切削油<rt>せっさくゆ</rt></ruby>は、<ruby>ブローホール<rt>ぶろーほーる</rt></ruby>や<ruby>割<rt>わ</rt></ruby>れなど<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>となるため、<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "Bevel について はで " },
      { id: 5, textJP: "(5) <ruby>開先加工面<rt>かいさきかこうめん</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>した<ruby>ノッチ<rt>のっち</rt></ruby>のうち、<ruby>深<rt>ふか</rt></ruby>さが 1mm <ruby>以下<rt>いか</rt></ruby>で<ruby>形状<rt>けいじょう</rt></ruby>が<ruby>滑<rt>なめ</rt></ruby>らかなものはそのままでよい。", textMY: "Bevel について notch   mm  場合は  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ノッチの補修 (Notch Repair)",
      reasonMY: "Bevel မျက်နှာပြင်についてဖြစ်ပေါ်သော Notch များはအနက် ၁ mm အောက်ရှိပြီး ချောမွေ့နေလျှင်ပင် ဂဟေဆက်ရာについてချို့ယွင်းချက်မဖြစ်စေရန် Grinder でတိုက်စားချောမွေ့အောင် ပြုလုပ်ပေးရန် လိုအပ်は။ 'ဒီအတိုင်းထားနိုင်は' ဟုဆိုခြင်းはမှားယွင်းは။",
      memoryTipMY: "Notch ဆိုတာ ချို့ယွင်းချက်ရဲ့ အစမို့လို့ Grinder နဲ့ အမြဲတမ်း ပြုပြင်ရမယ်။"
    }
  },
  {
    id: "2024-17",
    questionJP: "<ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>における<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံရှိ ဂဟေဆက်ခြင်းのဝိသေသလက္ခဏာများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>一般目的<rt>いっぱんもくてき</rt></ruby>に、<ruby>溶接延長<rt>ようせつえんちょう</rt></ruby>が<ruby>短い部位<rt>みじかいぶい</rt></ruby>には<ruby>サブマージアーク溶接<rt>さぶまーじあーくようせつ</rt></ruby>が<ruby>採用<rt>さいよう</rt></ruby>される。", textMY: "で  についてSubmerged Arc Welding (SAW) をは" },
      { id: 2, textJP: "(2) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接部<rt>ようせつぶ</rt></ruby>では、<ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>片面溶接<rt>かためんようせつ</rt></ruby>とするのが<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "Full Penetration Weld についてBacking Metal を  はは" },
      { id: 3, textJP: "(3) <ruby>仕口部<rt>しぐちぶ</rt></ruby>には<ruby>適正<rt>てきせい</rt></ruby>な<ruby>溶接施工計画<rt>ようせつせこうけいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てなければならない。", textMY: "と  (Joint) について を" },
      { id: 4, textJP: "(4) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>は、<ruby>安定<rt>あんてい</rt></ruby>した<ruby>溶接品質<rt>ようせつひんしつ</rt></ruby>の<ruby>維持<rt>いじ</rt></ruby>が<ruby>可能<rt>かのう</rt></ruby>である。", textMY: "Robot Welding は をは" },
      { id: 5, textJP: "(5) 590N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby>などは<ruby>溶接条件<rt>ようせつじょうけん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "590N/mm²   を は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - サブマージアーク溶接 (Submerged Arc Welding)",
      reasonMY: "Submerged Arc Welding (SAW) はစက်ပစ္စည်း တပ်ဆင်ရန် အချိန်ယူရသでဂဟေဆက်အရှည် ရှည်လျားသော (溶接延長が長い) နေရာများについてသာ စွမ်းဆောင်ရည်မြင့်မားပြီး တွက်ခြေをက်は။ အရှည်တိုသောနေရာများについて၎င်းをအသုံးမပြုပါ။",
      memoryTipMY: "SAW = စက်အကြီးစား = အရှည်ကြီးတွေဆက်ဖို့ (Long length welding)။"
    }
  },
  {
    id: "2024-18",
    questionJP: "<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>および<ruby>溶接<rt>ようせつ</rt></ruby>オペレータに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆော်သူとစက်မောင်းနှင်သူများのအရည်အချင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>は JIS Z 3801 の<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Covered Arc Welding をはJIS Z 3801  " },
      { id: 2, textJP: "(2) <ruby>半自動溶接<rt>はんじどうようせつ</rt></ruby>は JIS Z 3841 の<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Semi-automatic Welding をはJIS Z 3841  " },
      { id: 3, textJP: "(3) <ruby>サブマージアーク溶接<rt>さぶまーじあーくようせつ</rt></ruby>オペレータは<ruby>基本級<rt>きほんきゅう</rt></ruby>の<ruby>合格者<rt>ごうかくしゃ</rt></ruby>とする。", textMY: "Submerged Arc Welding (SAW) は (Basic level)  " },
      { id: 4, textJP: "(4) <ruby>エレクトロスラグ溶接<rt>えれくとろすらぐようせつ</rt></ruby>オペレータは<ruby>専門級<rt>せんもんきゅう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Electroslag Welding (ESW) は (Professional level) は" },
      { id: 5, textJP: "(5) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>オペレータは JIS Z 3841 の<ruby>基本級<rt>きほんきゅう</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Robot Welding はJIS Z 3841   " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接資格 (Welding Qualification)",
      reasonMY: "SAW とESW ကဲ့သို့သော အလိုအလျောက် ဂဟေဆက်စက်များをမောင်းနှင်သူများはအခြေခံအဆင့် (基本級) သာမが ၎င်းとသက်ဆိုင်သော အထူးပြု ကျွမ်းကျင်အဆင့် (専門級) をပါ ရရှိထားရန် လိုအပ်は။ SAW အတွက် အခြေခံအဆင့်でသာ လုံလောက်はဟု ဆိုခြင်းはမှားယွင်းは။",
      memoryTipMY: "စက်ကြီးတွေ (SAW, ESW) မောင်းရင် 専門級 (Pro level) လိုတယ်။"
    }
  },
  {
    id: "2024-19",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>下向き姿勢<rt>したむきしせい</rt></ruby>で<ruby>溶接<rt>ようせつ</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "  (Flat position) ではは" },
      { id: 2, textJP: "(2) <ruby>溶接変形<rt>ようせつへんけい</rt></ruby>ができるだけ<ruby>小<rt>ちい</rt></ruby>さくなる<ruby>順序<rt>じゅんじょ</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>する。", textMY: "   を" },
      { id: 3, textJP: "(3) <ruby>気温<rt>きおん</rt></ruby>が -5℃ を<ruby>下回<rt>したまわ</rt></ruby>る<ruby>場合<rt>ばあい</rt></ruby>は、いかなる<ruby>場合<rt>ばあい</rt></ruby>も<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならない。", textMY: " -  場合はについて を " },
      { id: 4, textJP: "(4) <ruby>低水素系<rt>ていすいそけい</rt></ruby>とワイヤでは、ワイヤの<ruby>方<rt>ほう</rt></ruby>が<ruby>予熱温度<rt>よねつおんど</rt></ruby>を<ruby>低<rt>ひく</rt></ruby>くできる。", textMY: "Low-hydrogen rod とWeld wire  wire が  (Preheat)  は" },
      { id: 5, textJP: "(5) <ruby>水分<rt>すいぶん</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は<ruby>加熱乾燥<rt>かねつかんそう</rt></ruby>して<ruby>溶接<rt>ようせつ</rt></ruby>する。", textMY: "場合は " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 低温時の溶接 (Low Temperature)",
      reasonMY: "အပြင်အပူချိန် -၅ ဒီဂရီအောက် ရောက်လျှင်ပင် ဂဟေဆက်မည့်နေရာのပတ်လည် ၁၀၀ mm ခန့်をကြိုတင်အပူပေးခြင်း (Preheating) ပြုလုပ်ပြီး စည်းကမ်းချက်များとအညီ လုပ်ဆောင်နိုင်ပါは။ 'လုံးဝမလုပ်ရ' ဟူသော ဖော်ပြချက်はမှားယွင်းは။",
      memoryTipMY: "-5℃ အောက်ရောက်ရင် Preheat လုပ်ပြီး ဆက်လို့ရတယ်။"
    }
  },
  {
    id: "2024-20",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼製エンドタブ<rt>こうせいえんどたぶ</rt></ruby>は、<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>を<ruby>継手外<rt>つぎてがい</rt></ruby>に<ruby>逃<rt>に</rt></ruby>がすためのものである。", textMY: "Steel End Tab はについてを  は" },
      { id: 2, textJP: "(2) <ruby>エンドタブ<rt>えんどたぶ</rt></ruby>の<ruby>長さ<rt>ながさ</rt></ruby>は、<ruby>一律<rt>いちりつ</rt></ruby> 30~50mm とする。", textMY: "End Tab のは    mm について " },
      { id: 3, textJP: "(3) <ruby>固形エンドタブ<rt>こけいえんどたぶ</rt></ruby>は、<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>のたれ<ruby>落<rt>お</rt></ruby>ちを<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "Ceramic End Tab は  をは" },
      { id: 4, textJP: "(4) <ruby>裏当て金<rt>うらあてがね</rt></ruby>は、<ruby>初層<rt>しょそう</rt></ruby>の<ruby>溶<rt>と</rt></ruby>け<ruby>落<rt>お</rt></ruby>ちを<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "Backing Metal は (Root pass) をは" },
      { id: 5, textJP: "(5) <ruby>裏はつり<rt>うらはつり</rt></ruby>は、<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>にも<ruby>行<rt>おこな</rt></ruby>われる。", textMY: "Back Gouging を について は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - エンドタブ (End Tab)",
      reasonMY: "End Tab のအရှည်はဂဟေဆက်ရမည့် ပစ္စည်းのအထူとဂဟေဆက်နည်းစနစ်အပေါ် မူတည်ပြီး ကွဲပြားနိုင်は။ 'အမြဲတမ်း ၃၀-၅၀ mm' ဟု သတ်မှတ်ထားခြင်း မရှိပါ။",
      memoryTipMY: "End Tab အရှည်はအထူ (Plate Thickness) ပေါ်မူတည်၍ ပြောင်းလဲနိုင်は။"
    }
  },
  {
    id: "2024-21",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding のအခြေအနေများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>とパス<ruby>間温度<rt>かんおんど</rt></ruby>の<ruby>管理値<rt>かんりち</rt></ruby>が<ruby>定<rt>さだ</rt></ruby>められている。", textMY: "Heat Input とInterpass Temperature   をは" },
      { id: 2, textJP: "(2) <ruby>高強度<rt>こうきょうど</rt></ruby>のワイヤにより、<ruby>入熱<rt>にゅうねつ</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きく<ruby>設定<rt>せってい</rt></ruby>できる。", textMY: " Wire をでHeat Input を は" },
      { id: 3, textJP: "(3) パス<ruby>間温度<rt>かんおんど</rt></ruby>は、<ruby>開先<rt>かいさき</rt></ruby>から 10mm の<ruby>位置<rt>いち</rt></ruby>で<ruby>計測<rt>けいそく</rt></ruby>する。", textMY: "Interpass Temperature をBevel   mm について" },
      { id: 4, textJP: "(4) STKRより<ruby>鋼板<rt>こうはん</rt></ruby>・<ruby>形鋼<rt>かたこう</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>管理<rt>かんり</rt></ruby>が<ruby>厳<rt>きび</rt></ruby>しくなっている。", textMY: "Square pipe    Shape steel のが は" },
      { id: 5, textJP: "(5) <ruby>ワイヤ突き出し長さ<rt>わいやつきだしながさ</rt></ruby>などを<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Wire  (Stick-out) はを" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接入熱の制限 (Heat Input)",
      reasonMY: "Wire のခိုင်မာမှု (Tensile Strength) မြင့်မားလေလေ、Heat Input をပိုမို တင်းကျပ်စွာ ထိန်းချုပ်ရန် လိုအပ်လေလေ ဖြစ်は။ Heat Input များလွန်း場合はToughness ကျဆင်းစေနိုင်သで'ကြီးမားစွာသတ်မှတ်နိုင်は' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Wire ကောင်းလေ Heat Input をပိုသတိထားရလေ။"
    }
  },
  {
    id: "2024-22",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>（<ruby>継手<rt>つぎて</rt></ruby>）の<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း (အဆက်) のဝိသေသလက္ခဏာများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>継手効率<rt>つぎてこうりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い。", textMY: "Joint Efficiency は" },
      { id: 2, textJP: "(2) <ruby>継手構造<rt>つぎてこうぞう</rt></ruby>を<ruby>簡素化<rt>かんそか</rt></ruby>できる。", textMY: "をは" },
      { id: 3, textJP: "(3) <ruby>厚さ<rt>あつさ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>制約<rt>せいやく</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい。", textMY: "と  は" },
      { id: 4, textJP: "(4) <ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>節約<rt>せつやく</rt></ruby>できる。", textMY: "をは" },
      { id: 5, textJP: "(5) <ruby>水密性<rt>すいみつせい</rt></ruby>、<ruby>気密性<rt>きみつせい</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れている。", textMY: "、については" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接の厚さ制約",
      reasonMY: "ဂဟေဆက်ခြင်းはပစ္စည်းのအထူမည်မျှပင်ရှိစေကာမူ (ပါးလွှာသောပြားမှ အလွန်ထူသောပြားအထိ) နည်းစနစ်အမျိုးမျိုးでဆက်နိုင်သောကြောင့် 'အထူဆိုင်ရာ ကန့်သတ်ချက်များစွာရှိは' ဟုဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "ဂဟေはအထူအမျိုးမျိုးをဆက်ရန်အတွက် လိုက်လျောညီထွေရှိは။"
    }
  },
  {
    id: "2024-23",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外部<rt>がいぶ</rt></ruby>からのガスで<ruby>大気<rt>たいき</rt></ruby>から<ruby>遮蔽<rt>しゃへい</rt></ruby>する。", textMY: " Gas を とをは" },
      { id: 2, textJP: "(2) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>では<ruby>主<rt>おも</rt></ruby>に<ruby>ミグ溶接<rt>みぐようせつ</rt></ruby>が<ruby>使用<rt>しよう</rt></ruby>されている。", textMY: "についてMIG Welding をが は" },
      { id: 3, textJP: "(3) <ruby>シールドガス<rt>しーるどがす</rt></ruby>には<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>などが<ruby>使用<rt>しよう</rt></ruby>される。", textMY: " Gas  CO2 はをは" },
      { id: 4, textJP: "(4) <ruby>大気<rt>たいき</rt></ruby>が<ruby>混入<rt>こんにゅう</rt></ruby>すると<ruby>靭性<rt>じんせい</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "と場合はToughness は" },
      { id: 5, textJP: "(5) <ruby>付属装置<rt>ふぞくそうち</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>という<ruby>欠点<rt>けってん</rt></ruby>がある。", textMY: "   は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - マグ溶接 vs ミグ溶接",
      reasonMY: "သံမဏိတည်ဆောက်ပုံ (Architectural Steel) များについてCO2 Gas သို့မဟုတ် Mixed Gas をအသုံးပြုသော MAG Welding (Metal Active Gas) をအဓိが အသုံးပြုပါは။ MIG Welding (Metal Inert Gas) はအများအားでAluminum သို့မဟုတ် Stainless Steel များについてသာ သုံးは။",
      memoryTipMY: "သံမဏိ (Steel) = MAG、အလူမီနီယံ (Aluminum) = MIG။"
    }
  },
  {
    id: "2024-24",
    questionJP: "<ruby>アーク溶接<rt>あーくようせつ</rt></ruby>および<ruby>アーク溶接機<rt>あーくようせつき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Arc Welding とArc Welding Machine とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>低電圧<rt>ていでんあつ</rt></ruby>、<ruby>高電流<rt>こうでんりゅう</rt></ruby>のアーク<ruby>熱<rt>ねつ</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>する。", textMY: "  Arc をは" },
      { id: 2, textJP: "(2) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>には<ruby>定電流特性<rt>ていでんりゅうとくせい</rt></ruby>が<ruby>用<rt>もち</rt></ruby>いられる。", textMY: "Gas Shielded Arc Welding についてConstant Current (CC) をは" },
      { id: 3, textJP: "(3) <ruby>アーク<rt>あーく</rt></ruby>が<ruby>偏向<rt>へんこう</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>磁気吹き<rt>じきふき</rt></ruby>という。", textMY: "Arc  をArc Blow (磁気吹き)  は" },
      { id: 4, textJP: "(4) <ruby>交流アーク溶接機<rt>こうりゅうあーくようせつき</rt></ruby>には<ruby>自動電撃防止装置<rt>じどうでんげきぼうしそうち</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "AC Arc Welding について   は" },
      { id: 5, textJP: "(5) <ruby>定格使用率<rt>ていかくしようりつ</rt></ruby>の<ruby>範囲内<rt>はんいない</rt></ruby>で<ruby>使用時間<rt>しようじかん</rt></ruby>を<ruby>制限<rt>せいげん</rt></ruby>する。", textMY: " Duty Cycle について を" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 定電圧特性 (Constant Voltage)",
      reasonMY: "Gas Shielded Arc Welding (GMAW/MAG) についてအလိုအလျောက် Wire ကျွေးသည့်စနစ် ပါဝင်သောကြောင့် Arc အရှည်をတည်ငြိမ်စေရန် Constant Voltage (CV - 定電圧特性) စနစ်をအသုံးပြုရမည်။ Constant Current (CC) をဒုတ်ဂဟေ (SMAW) についてသာ သုံးは။",
      memoryTipMY: "Gas welding = Constant Voltage (CV)။ Manual welding = Constant Current (CC)။"
    }
  },
  {
    id: "2024-25",
    questionJP: "<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>と<ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Heat Input とInterpass Temperature とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>組織<rt>そしき</rt></ruby>は<ruby>冷却条件<rt>れいきゃくじょうけん</rt></ruby>によって<ruby>大きく変化<rt>おおきくへんか</rt></ruby>する。", textMY: "は  は" },
      { id: 2, textJP: "(2) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>は<ruby>次<rt>つぎ</rt></ruby>のパスを<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>直前<rt>ちょくぜん</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>である。", textMY: "Interpass Temperature は   の は" },
      { id: 3, textJP: "(3) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>が<ruby>過大<rt>かだい</rt></ruby>になると<ruby>結晶粒<rt>けっしょうりゅう</rt></ruby>を<ruby>粗大化<rt>そだいか</rt></ruby>させる。", textMY: "Interpass Temperature 場合はCrystal grain   は" },
      { id: 4, textJP: "(4) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は 1 <ruby>分間<rt>ふんかん</rt></ruby>で<ruby>消費<rt>しょうひ</rt></ruby>される<ruby>電気<rt>でんき</rt></ruby>エネルギー<ruby>量<rt>りょう</rt></ruby>である。", textMY: "Heat Input は について    は" },
      { id: 5, textJP: "(5) <ruby>適切<rt>てきせつ</rt></ruby>な<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>・<ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: " Heat Input とInterpass Temperature を は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接入熱 (Heat Input)",
      reasonMY: "Heat Input (溶接入熱) ဆိုはမှာ တစ်မိနစ်အについてး အသုံးပြုသော စွမ်းအင် မဟုတ်ဘဲ、'ဂဟေဆက်အရှည် ၁ စင်တီမီတာ (သို့မဟုတ် ၁ မီလီမီတာ)' အတွက် အသုံးပြုလိုက်သော စွမ်းအင်ပမာဏ ဖြစ်は။ ယူနစ်မှာ J/cm သို့မဟုတ် J/mm ဖြစ်は။",
      memoryTipMY: "Heat Input = 'ယူနစ်အရှည်' အတွက် အပူ、'အချိန်' အတွက် မဟုတ်ပါ။"
    }
  },
  {
    id: "2024-26",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding のပစ္စည်းများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 520N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby>に<ruby>適合<rt>てきごう</rt></ruby>する<ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>は YGW11 <ruby>等<rt>とう</rt></ruby>である。", textMY: "520N/mm²    wire  YGW11 は" },
      { id: 2, textJP: "(2) <ruby>溶接金属中<rt>ようせつきんぞくちゅう</rt></ruby>の<ruby>水素含有量<rt>すいそがんゆうりょう</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>。", textMY: "について    は" },
      { id: 3, textJP: "(3) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>または<ruby>フラックス入りワイヤ<rt>ふらっくすいりわいや</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Solid wire  Flux-cored wire をは" },
      { id: 4, textJP: "(4) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>は<ruby>酸素<rt>さんそ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>役割<rt>やくわり</rt></ruby>がある。", textMY: "Solid wire についてを (Deoxidation)  は" },
      { id: 5, textJP: "(5) <ruby>シールドガス<rt>しーるどがす</rt></ruby>によって<ruby>ワイヤ<rt>わいや</rt></ruby>を<ruby>使い分ける<rt>つかいわける</rt></ruby>。", textMY: "Gas  Wire を " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 水素含有量 (Hydrogen Content)",
      reasonMY: "Gas Shielded Arc Welding (GMAW/MAG) はRod ဂဟေ (SMAW) とနှိုင်းယှဉ်場合はဂဟေသားအについてး ဟိုက်ဒရိုဂျင် ပါဝင်မှု အလွန်နည်းပါးသောကြောင့် Cold Cracking ဖြစ်နိုင်ခြေ နည်းပါးは။ 'များပြားは' ဟုဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Gas welding = Hydrogen နည်းは။"
    }
  },
  {
    id: "2024-27",
    questionJP: "JASS 6における<ruby>溶融亜鉛めっき部材<rt>ようゆうあえんめっきぶざい</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သွပ်ရည်စိမ်ပစ္စည်းများ ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>片面溶接<rt>かためんようせつ</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "  (Single-sided welding) 場合はの は" },
      { id: 2, textJP: "(2) <ruby>めっき抜き<rt>めっきぬき</rt></ruby>は<ruby>スカラップ<rt>すからっぷ</rt></ruby>の<ruby>代<rt>か</rt></ruby>わりに<ruby>円形孔<rt>えんけいこう</rt></ruby>を<ruby>設ける<rt>もうける</rt></ruby>。", textMY: "  (Drain hole)  scallop  をは" },
      { id: 3, textJP: "(3) <ruby>溶接始終端<rt>ようせつしじゅうたん</rt></ruby>には<ruby>鋼製エンドタブ<rt>こうせいえんどたぶ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けなければならない。", textMY: "とについて Steel End Tab を " },
      { id: 4, textJP: "(4) <ruby>検査<rt>けんさ</rt></ruby>や<ruby>補修<rt>ほしゅう</rt></ruby>は<ruby>めっき後<rt>めっきご</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "とを " },
      { id: 5, textJP: "(5) <ruby>重ねる面積<rt>かさねるめんせき</rt></ruby>は 400cm² <ruby>以下<rt>いか</rt></ruby>が<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "  を cm² についてはは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - めっき前の検査 (Inspection before plating)",
      reasonMY: "သွပ်ရည်စိမ်ပြီး場合はဂဟေဆက်ဧရိယာのအについてးပိုင်းချို့ယွင်းချက်များをစစ်ဆေးရန် ခက်ခဲသောကြောင့်、အမြင်စစ်ဆေးခြင်း (Visual) とUT စစ်ဆေးခြင်းများをသွပ်ရည်မစိမ်မီ (めっき前) ကြိုတင် လုပ်ဆောင်ရမည်။",
      memoryTipMY: "စစ်ဆေးခြင်း (Inspection) とပြုပြင်ခြင်း (Repair) はသွပ်ရည်မစိမ်မီ (Plating) လုပ်ရမည်။"
    }
  },
  {
    id: "2024-28",
    questionJP: "<ruby>輸送<rt>ゆそう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သယ်ယူပို့ဆောင်ရေးとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品符号<rt>せいひんふごう</rt></ruby>は<ruby>容易<rt>ようい</rt></ruby>に<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>りできる<ruby>位置<rt>いち</rt></ruby>に<ruby>表示<rt>ひょうじ</rt></ruby>する。", textMY: "を  について" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby><ruby>段階<rt>だんかい</rt></ruby>で<ruby>寸法<rt>すんぽう</rt></ruby>や<ruby>重量<rt>じゅうりょう</rt></ruby>を<ruby>計画<rt>けいかく</rt></ruby>する。", textMY: " (Shop Drawing) についてとを" },
      { id: 3, textJP: "(3) <ruby>単品重量<rt>たんぴんじゅうりょう</rt></ruby>が 1t を<ruby>超<rt>こ</rt></ruby>える<ruby>場合<rt>ばあい</rt></ruby>は<ruby>表示<rt>ひょうじ</rt></ruby>が<ruby>義務付<rt>ぎむづ</rt></ruby>けられている。", textMY: "   場合はを  は" },
      { id: 4, textJP: "(4) <ruby>道路法<rt>どうろほう</rt></ruby>や<ruby>道路交通法<rt>どうろこうつうほう</rt></ruby>による<ruby>規制<rt>きせい</rt></ruby>がある。", textMY: "と  は" },
      { id: 5, textJP: "(5) <ruby>輸送要領<rt>ゆそうようりょう</rt></ruby>は<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>を<ruby>得<rt>え</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: " をの " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 重量表示 (Weight Display)",
      reasonMY: "သံမဏိပစ္စည်းများပေါ်についてအလေးချိန် ရေးသားရန် မဖြစ်မနေ လိုအပ်သော (義務) အလေးချိန်မှာ ၃ တန် (3t) とအထက် ဖြစ်は။ ၁ တန် မဟုတ်ပါ။",
      memoryTipMY: "အလေးချိန်ရေးရန် လိုအပ်はမှာ 3t အထက် ဖြစ်は။"
    }
  },
  {
    id: "2024-33",
    questionJP: "<ruby>試験<rt>しけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စမ်းသပ်မှုများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>シャルピー衝撃試験<rt>しゃるぴーしょうげきしけん</rt></ruby>は<ruby>吸収エネルギー<rt>きゅうしゅうえねるぎー</rt></ruby>を<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "Charpy Impact Test は  (Absorbed Energy) をは" },
      { id: 2, textJP: "(2) <ruby>曲げ試験<rt>まげしけん</rt></ruby>は<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>変形能力<rt>へんけいのうりょく</rt></ruby>を<ruby>調べる<rt>しらべる</rt></ruby>。", textMY: "Bending Test はのをは" },
      { id: 3, textJP: "(3) SN<ruby>材<rt>ざい</rt></ruby>ではJISにおいて<ruby>曲げ試験<rt>まげしけん</rt></ruby>は<ruby>要求<rt>ようきゅう</rt></ruby>されていない。", textMY: "SN Material  JIS についてBending Test を " },
      { id: 4, textJP: "(4) <ruby>引張試験<rt>ひっぱりしけん</rt></ruby>は<ruby>降伏点<rt>こうふくてん</rt></ruby>や<ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>を<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "Tensile Test はYield Point とTensile Strength をは" },
      { id: 5, textJP: "(5) <ruby>硬さ試験<rt>かたさしけん</rt></ruby>は<ruby>表面<rt>ひょうめん</rt></ruby>の<ruby>硬度<rt>こうど</rt></ruby>を <ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "Hardness Test はのをは" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材の曲げ試験 (SN Steel Bend Test)",
      reasonMY: "သံမဏိပစ္စည်းများのJIS စံနှုန်းအရ SN Material (建築構造用圧延鋼材) များအတွက် Bending Test をမဖြစ်မနေ လုပ်ဆောင်ရန် သတ်မှတ်ထားပါは။ 'တောင်းဆိုမထားပါ' ဟု ဆိုခြင်းはမှားယွင်းは။",
      memoryTipMY: "SN Steel はJIS စံနှုန်းအရ Bending Test လိုအပ်は။"
    }
  },
  {
    id: "2024-34",
    questionJP: "<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>および<ruby>外注品検査<rt>がいちゅうひんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းဝယ်ယူမှုとအပြင်ကန်ထရိုက်ပေးမှု စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>自ら実施<rt>みずからじっし</rt></ruby>するか<ruby>確認<rt>かくにん</rt></ruby>しなければならない。", textMY: "はをを  " },
      { id: 2, textJP: "(2) <ruby>鋼材管理責任者<rt>こうざいかんりせきにんしゃ</rt></ruby>が<ruby>照合<rt>しょうごう</rt></ruby>や<ruby>外観検査<rt>がいかんけんさ</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: " が とをは" },
      { id: 3, textJP: "(3) <ruby>不合格品<rt>ふごうかくひん</rt></ruby>は<ruby>誤って使用<rt>あやまってしよう</rt></ruby>されないように<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "を " },
      { id: 4, textJP: "(4) <ruby>証明書<rt>しょうめいしょ</rt></ruby>との<ruby>照合<rt>しょうごう</rt></ruby>が<ruby>不可能<rt>ふかのう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>は<ruby>材料試験<rt>ざいりょうしけん</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "と 場合はを" },
      { id: 5, textJP: "(5) <ruby>現品<rt>げんぴん</rt></ruby>の<ruby>識別表示<rt>しきべつひょうじ</rt></ruby>だけで<ruby>品質<rt>ひんしつ</rt></ruby>を <ruby>保証<rt>ほしょう</rt></ruby>できる。", textMY: " でをは" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 品質保証 (Quality Assurance)",
      reasonMY: "သံမဏိပစ္စည်းのအရည်အသွေးをအာမခံရန်အတွက် ပစ္စည်းပေါ်ရှိ အမှတ်အသား (Identification mark) တစ်ခုတည်းでမလုံလောက်ပါ။ ၎င်းとအတူ Mill Sheet (鋼材検査証明書) ပါ အချက်အလက်များとတိုက်ဆိုင်စစ်ဆေးမှုများ လိုအပ်は။",
      memoryTipMY: "Identification mark + Mill Sheet နှစ်ခုလုံး လိုအပ်は။"
    }
  },
  {
    id: "2024-35",
    questionJP: "JASS 6の<ruby>社内検査<rt>しゃないけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ စက်ရုံについてးစစ်ဆေးမှု (Internal Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>として<ruby>記録<rt>きろく</rt></ruby>し、<ruby>提出<rt>ていしゅつ</rt></ruby>する。", textMY: "について  " },
      { id: 2, textJP: "(2) <ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>は<ruby>設計寸法<rt>せっけいすんぽう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>差<rt>さ</rt></ruby>を<ruby>記録<rt>きろく</rt></ruby>する。", textMY: "についてと (Tolerance) を" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby>や<ruby>梁<rt>はり</rt></ruby>の<ruby>寸法<rt>すんぽう</rt></ruby>については<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>とする。", textMY: "とのを " },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>は<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>した<ruby>方法<rt>ほうほう</rt></ruby>とする。", textMY: "をとを で" },
      { id: 5, textJP: "(5) <ruby>社内検査要領書<rt>しゃないけんさようりょうしょ</rt></ruby>は<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>収録<rt>しゅうろく</rt></ruby>する。", textMY: "をについて" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 全数検査 (Full Inspection)",
      reasonMY: "တိုင် (Column) とမြားတန်း (Beam) တို့のအတိုင်းအတာများはအဆောက်အဦのဖွဲ့စည်းပုံအတွက် အလွန်အရေးကြီးသောကြောင့် ၎င်းတို့をနမူနာကောက်ယူစစ်ဆေးခြင်း (抜取検査) မဟုတ်ဘဲ အားလုံးを(全数検査) စစ်ဆေးရမည်။",
      memoryTipMY: "အဓိが အစိတ်အပိုင်းများのအတိုင်းအတာをအားလုံး (100%) စစ်ဆေးရမည်။"
    }
  },
  {
    id: "2024-36",
    questionJP: "<ruby>付属金物<rt>ふぞくかなもの</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆက်စပ်ပစ္စည်း (Miscellaneous/Secondary Steel) များとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>安全<rt>あんぜん</rt></ruby>ネット<ruby>取付けピース<rt>とりつけぴーす</rt></ruby>などがある。", textMY: "   は" },
      { id: 2, textJP: "(2) <ruby>設備関連<rt>せつびかんれん</rt></ruby>には<ruby>ダクトスリーブ<rt>だくとすりーぶ</rt></ruby>などがある。", textMY: " Duct sleeve  は" },
      { id: 3, textJP: "(3) <ruby>ほとんど<rt>ほとんど</rt></ruby>が<ruby>工事現場<rt>こうじげんば</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>される。", textMY: "を (Site) については" },
      { id: 4, textJP: "(4) <ruby>本体鉄骨<rt>ほんたいてっこつ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>与える影響<rt>あたえるえいきょう</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "のをを は" },
      { id: 5, textJP: "(5) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は<ruby>ショートビード<rt>しょーとびーど</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "について  (Short bead) を" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 付属金物の製作 (Secondary Steel Fabrication)",
      reasonMY: "ဆက်စပ်ပစ္စည်း (付属金物) များはအများအားでစက်ရုံ (Factory) についてပင်မသံဘောင်များとအတူ ကြိုတင်ထုတ်လုပ် တပ်ဆင်လေ့ရှိは။ အလုပ်ခွင် (Site) についてအများစု လုပ်ဆောင်はဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "ဆက်စပ်ပစ္စည်းများをလည်း တတ်နိုင်သမျှ စက်ရုံについてသာ အပြီးသတ်ရမည်။"
    }
  },
  {
    id: "2024-37",
    questionJP: "<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အတိုင်းအတာ တိကျမှုのခွင့်ပြုလွဲချော်မှု (Tolerance) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不良品<rt>ふりょうひん</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>は<ruby>重要度<rt>じゅうようど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>決定<rt>けってい</rt></ruby>する。", textMY: "をを  " },
      { id: 2, textJP: "(2) <ruby>マイナス<rt>まいなす</rt></ruby>の<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超えた<rt>こえた</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、そのまま<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "  場合は は" },
      { id: 3, textJP: "(3) <ruby>長さ<rt>ながさ</rt></ruby><ruby>等<rt>とう</rt></ruby>の<ruby>不良品<rt>ふりょうひん</rt></ruby>は<ruby>補修<rt>ほしゅう</rt></ruby>により<ruby>対処<rt>たいしょ</rt></ruby>することもできる。", textMY: "をでは" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接サイズ<rt>すみにくようせつさいず</rt></ruby>のように<ruby>管理上<rt>かんりじょう</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>もある。", textMY: "Fillet weld size    は" },
      { id: 5, textJP: "(5) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>を<ruby>超える<rt>こえる</rt></ruby><ruby>製品<rt>せいひん</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: " を は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差 (Limit Tolerance)",
      reasonMY: "限界許容差 (Limit Tolerance) ဆိုはမှာ နောက်ဆုံး ခွင့်ပြုနိုင်သော ဘောင်ဖြစ်は။ ၎င်းをကျော်လွန်သွားသောပစ္စည်းは'မをက်ညီသောပစ္စည်း' ဖြစ်သွားသでဒီအတိုင်း အသုံးပြုရန် ခွင့်မပြုပါ။ ပြုပြင်ခြင်း သို့မဟုတ် ပြန်လည်ထုတ်လုပ်ခြင်း လုပ်ဆောင်ရမည်။",
      memoryTipMY: "Limit Tolerance をကျော်လွန်場合はဒီအတိုင်း သုံး၍ မရပါ။"
    }
  },
  {
    id: "2024-38",
    questionJP: "JASS 6に基づく<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ပစ္စည်းစစ်ဆေးမှု (Object Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>は<ruby>抜き取った結果<rt>ぬきとったけっか</rt></ruby>から<ruby>直接合否<rt>ちょくせつごうひ</rt></ruby>を<ruby>判定<rt>はんてい</rt></ruby>する。", textMY: "Inspection 1 は  / は" },
      { id: 2, textJP: "(2) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>は<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>との<ruby>整合性<rt>せいごうせい</rt></ruby>を <ruby>検定<rt>けんてい</rt></ruby>する。", textMY: "Inspection 2 はについてとををは" },
      { id: 3, textJP: "(3) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>の方法は最も<ruby>単純<rt>たんじゅん</rt></ruby>である。", textMY: "Inspection 1 のは は" },
      { id: 4, textJP: "(4) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>での<ruby>不合格<rt>ふごうかく</rt></ruby>は、<ruby>精度そのもの<rt>せいどそのもの</rt></ruby>の<ruby>不合格<rt>ふごうかく</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する。", textMY: "Inspection 2 については を をは" },
      { id: 5, textJP: "(5) <ruby>不合格ロット<rt>ふごうかくろっと</rt></ruby>は<ruby>残り全数<rt>のこりぜんすう</rt></ruby>の<ruby>寸法測定<rt>すんぽうそくてい</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "  (Lot) を を " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査2 (Object Inspection 2)",
      reasonMY: "対物検査2 についてမအောင်မြင်ခြင်းはတိကျမှုをယ်တိုင် မမှန်ခြင်းထက်、စက်ရုံのစစ်ဆေးမှုစနစ် (Process Control) はယုံကြည်စိတ်ချရမှု မရှိခြင်း သို့မဟုတ် မှတ်တမ်းとလက်တွေ့ ကွဲလွဲနေခြင်းをဆိုလိုခြင်း ဖြစ်は။",
      memoryTipMY: "Inspection 2 はProcess Control (လုပ်ငန်းစဉ်ထိန်းချုပ်မှု) のယုံကြည်မှုをစစ်ဆေးခြင်း ဖြစ်は။"
    }
  },
  {
    id: "2024-39",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာအား အပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>および<ruby>精度<rt>せいど</rt></ruby>に<ruby>対して行う<rt>たいしておこなう</rt></ruby>。", textMY: "と " },
      { id: 2, textJP: "(2) <ruby>検査対象範囲<rt>けんさたいしょうはんい</rt></ruby>は<ruby>スタッド<rt>すたっど</rt></ruby>を<ruby>除き<rt>のぞき</rt></ruby>16<ruby>項目<rt>こうもく</rt></ruby>とする。", textMY: "    (Stud ) は" },
      { id: 3, textJP: "(3) <ruby>基準<rt>きじゅん</rt></ruby>を<ruby>逸脱<rt>いつだつ</rt></ruby>していると<ruby>思われる箇所<rt>おもわれるかしょ</rt></ruby>のみ<ruby>器具<rt>きぐ</rt></ruby>で<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "は を で" },
      { id: 4, textJP: "(4) <ruby>合否判定<rt>ごうひはんてい</rt></ruby>は<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>によらなければならない。", textMY: "/ はLimit Tolerance  " },
      { id: 5, textJP: "(5) <ruby>不適合<rt>ふてきごう</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は<ruby>補修<rt>ほしゅう</rt></ruby>を<ruby>行い<rt>おこない</rt></ruby>、<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "を場合は " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 目視検査 (Visual Inspection)",
      reasonMY: "အပြင်ပန်းကြည့်စစ်ဆေးခြင်းについてအတိုင်းအတာများをစံနှုန်းとをက်ညီကြောင်း သေချာစေရန် ကိရိယာ (gauge) များでစနစ်တကျ တိုင်းတာရမည်ဖြစ်は။ 'လွဲနေはဟု ထင်သည့်နေရာをသာ တိုင်းရမည်' ဆိုခြင်းမှာ စစ်ဆေးမှုစံနှုန်းとမをက်ညီပါ။",
      memoryTipMY: "စစ်ဆေးမှုをစနစ်တကျ ကိရိယာများでအမြဲလုပ်ဆောင်ရမည်။"
    }
  },
  {
    id: "2024-40",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>内部欠陥検査<rt>ないぶけっかんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာများのအについてးပိုင်းချို့ယွင်းချက် (Internal Defects) အား စစ်ဆေးခြင်းとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>により<ruby>行い<rt>おこない</rt></ruby>、<ruby>規準<rt>きじゅん</rt></ruby>に<ruby>従う<rt>したがう</rt></ruby>。", textMY: "Ultrasonic Testing (UT) を と " },
      { id: 2, textJP: "(2) 300<ruby>箇所<rt>かしょ</rt></ruby><ruby>以下<rt>いか</rt></ruby>で1<ruby>検査ロット<rt>けんさろっと</rt></ruby>を<ruby>構成<rt>こうせい</rt></ruby>する。", textMY: "  とを (Lot)  は" },
      { id: 3, textJP: "(3) <ruby>サンプリング<rt>さんぷりんぐ</rt></ruby>は20%<ruby>以上<rt>いじょう</rt></ruby>とし、<ruby>不適合<rt>ふてきごう</rt></ruby>4<ruby>個以上<rt>こいじょう</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>とする。", textMY: " % と を、   と 場合はLot   " },
      { id: 4, textJP: "(4) <ruby>合計<rt>ごうけい</rt></ruby>の<ruby>不適合数<rt>ふてきごうすう</rt></ruby>が4<ruby>個以下<rt>こいか</rt></ruby>のときは<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "について    と (4個以下) 場合は Lot をは " },
      { id: 5, textJP: "(5) <ruby>不合格ロット<rt>ふごうかくろっと</rt></ruby>は<ruby>残り全数<rt>のこりぜんすう</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: " Lot について を " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 内部欠陥の合否判定",
      reasonMY: "များသောအားでJASS 6 စံနှုန်းအရ အについてးပိုင်းချို့ယွင်းချက်をနမူနာစစ်ဆေးရာについてချို့ယွင်းချက်အရေအတွက် '၁ ခု' သို့မဟုတ် '၀ ခု' (1個以下) တွေ့ရှိမှသာ အောင်မြင်はဟု သတ်မှတ်は။ '၄ ခုအထိ' ဆိုပြီး ဖြေလျှော့ပေးထားခြင်း မရှိပါ။",
      memoryTipMY: "အについてးပိုင်းချို့ယွင်းချက် ၁ ခုအထိပဲ ခွင့်ပြုပါတယ်။ (1個以下)"
    }
  },
  {
    id: "2024-41",
    questionJP: "JASS 6の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 についてပြဋ္ဌာန်းထားသော အပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual Inspection) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ビード幅<rt>びーどはば</rt></ruby>の<ruby>不整<rt>ふせい</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は5mm<ruby>以下<rt>いか</rt></ruby>である。", textMY: "Bead width () の (Tolerance) は5mm  しなければならない。" },
      { id: 2, textJP: "(2) <ruby>ビード幅<rt>びーどはば</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は<ruby>板厚<rt>いたあつ</rt></ruby>の1.5<ruby>倍以下<rt>ばいいか</rt></ruby>である。", textMY: "Bead width の  の.     は" },
      { id: 3, textJP: "(3) <ruby>ピット<rt>ぴっと</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は1<ruby>個以下<rt>こいか</rt></ruby>である。", textMY: "Pit ( )   について と は" },
      { id: 4, textJP: "(4) <ruby>クレータ割れ<rt>くれーたわれ</rt></ruby>などはあってはならない。", textMY: "  (Crater cracks) はについて " },
      { id: 5, textJP: "(5) <ruby>スタッド<rt>すたっど</rt></ruby>の<ruby>傾き<rt>かたむき</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は3°<ruby>以下<rt>いか</rt></ruby>である。", textMY: "Stud  (Inclination) の   (3°)  は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ビード幅の許容差 (Bead Width ခွင့်ပြုချက်)",
      reasonMY: "JASS 6 အရ ဂဟေအကျယ် (Bead width) とပတ်သက်သည့် စီမံခန့်ခွဲမှုလွဲချော်မှုများをတိကျသော ကိန်းဂဏန်းများでသာ သတ်မှတ်လေ့ရှိပြီး 'သံပြားအထူの၁.၅ ဆ' ဟူသော စံနှုန်းမျိုး မရှိပါ။",
      memoryTipMY: "Bead Width မှာ 'သံပြားအထူの၁.၅ ဆ' လို့လာရင် အမှားပါ။"
    }
  },
  {
    id: "2024-43",
    questionJP: "<ruby>非破壊試験<rt>ひはかいしけん</rt></ruby>とその<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဖျက်အဆီးကင်း စစ်ဆေးမှု (NDT) များと၎င်းတို့のဝိသေသလက္ခဏာများဆိုင်ရာ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>放射線<rt>ほうしゃせん</rt></ruby>と<ruby>超音波<rt>ちょうおんぱ</rt></ruby>は<ruby>内部欠陥用<rt>ないぶけっかんよう</rt></ruby>である。", textMY: "Radiographic Testing (RT) とUltrasonic Testing (UT) はについて については" },
      { id: 2, textJP: "(2) <ruby>磁粉<rt>じふん</rt></ruby>と<ruby>浸透<rt>しんとう</rt></ruby>は<ruby>表面欠陥用<rt>ひょうめんけっかんよう</rt></ruby>である。", textMY: "Magnetic Particle Testing (MT) とPenetrant Testing (PT) は については" },
      { id: 3, textJP: "(3) <ruby>磁粉探傷<rt>じふんたんしょう</rt></ruby>では<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>開口<rt>かいこう</rt></ruby>した<ruby>欠陥以外<rt>けっかんいがい</rt></ruby>の<ruby>検出<rt>けんしゅつ</rt></ruby>は<ruby>困難<rt>こんなん</rt></ruby>である。", textMY: " (MT) はについて ()  について は" },
      { id: 4, textJP: "(4) <ruby>超音波<rt>ちょうおんぱ</rt></ruby>では<ruby>ブローホール<rt>ぶろーほーる</rt></ruby>の<ruby>検出<rt>けんしゅつ</rt></ruby>は<ruby>困難<rt>こんなん</rt></ruby>である。", textMY: " (UT) で (Blowhole) を は" },
      { id: 5, textJP: "(5) <ruby>放射線<rt>ほうしゃせん</rt></ruby>は<ruby>割れ<rt>われ</rt></ruby>の<ruby>検出性<rt>けんしゅつせい</rt></ruby>に<ruby>優れている<rt>すぐれている</rt></ruby>。", textMY: "/  (RT) は (Crack) をについてUT  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - RT と割れの検出 (RT でအက်ကွဲကြောင်းရှာဖွေခြင်း)",
      reasonMY: "Radiography (RT) はဓာတ်မှန်ရိုက်ပုံစံဖြစ်၍ Blowhole ကဲ့သို့ အလုံးပုံချို့ယွင်းချက်များをကောင်းစွာမြင်နိုင်သော်လည်း、များသောအားでအလွန်ပါးလွှာသော အက်ကွဲကြောင်း (Crack) များをရှာဖွေရာについてUT が ပိုမိုထိရောက် ထူးကဲပါは။",
      memoryTipMY: "Crack ရှာဖို့ဆိုရင် RT ထက် UT が ပိုကောင်းပါတယ်။"
    }
  },
  {
    id: "2024-44",
    questionJP: "<ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Ultrasonic Testing (UT) でစစ်ဆေးခြင်းとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>完全溶込み溶接部<rt>かんぜんすみこみようせつぶ</rt></ruby>および<ruby>部分溶込み溶接部<rt>ぶぶんすみこみようせつぶ</rt></ruby>を<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Full penetration とPartial penetration をは" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>6mm<ruby>未満<rt>みまん</rt></ruby>のものには<ruby>原則<rt>げんそく</rt></ruby>として<ruby>適用<rt>てきよう</rt></ruby>しない。", textMY: "  6mm 場合はでを" },
      { id: 3, textJP: "(3) <ruby>手動<rt>しゅどう</rt></ruby>の<ruby>パルス反射法<rt>ぱるすはんしゃほう</rt></ruby>で<ruby>直接接触法<rt>ちょくせつせっしょくほう</rt></ruby>による。", textMY: "で Pulse reflection method (パルス反射法) を は" },
      { id: 4, textJP: "(4) <ruby>接触媒質<rt>せっしょくばいしつ</rt></ruby>は<ruby>グリセリン<rt>ぐりせりん</rt></ruby>などをする。", textMY: " Glycerin   (Couplant) をは" },
      { id: 5, textJP: "(5) <ruby>斜角探触子<rt>しゃかくたんしょくし</rt></ruby>の<ruby>屈折角<rt>くっせつかく</rt></ruby>は<ruby>公称<rt>こうしょう</rt></ruby>70°のみとする。", textMY: "Angle beam probe (斜角探触子) の (Refraction Angle)    (70°)  しなければならない。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 斜角探触子 (Angle Probe)",
      reasonMY: "UT စစ်ဆေးရာについてအသုံးပြုသော Probe のထောင့်ချိုးများမှာ သံပြားအထူとအခြေအနေအလိုက် ၄၅°、၆၀° と၇၀° ဟူ၍ အမျိုးမျိုးရှိは။ ၇၀° တစ်မျိုးတည်းသာ သုံးရမည်ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "UT についてထောင့်အမျိုးမျိုး (၄၅, ၆၀, ၇၀) ရှိは။"
    }
  },
  {
    id: "2024-45",
    questionJP: "<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘေးကင်းလုံခြုံရေးとကျန်းမာရေးစီမံခန့်ခွဲမှုဆိုင်ရာ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>度数率<rt>どすうりつ</rt></ruby>と<ruby>強度率<rt>きょうどりつ</rt></ruby>の<ruby>定義<rt>ていぎ</rt></ruby>について", textMY: " (Frequency rate/度数率) と (Severity rate/強度率)   は" },
      { id: 2, textJP: "(2) <ruby>作業主任者<rt>さぎょうしゅにんしゃ</rt></ruby>の<ruby>職務<rt>しょくむ</rt></ruby>について", textMY: " / (作業主任者) のをは" },
      { id: 3, textJP: "(3) <ruby>安全管理者<rt>あんぜんかんりしゃ</rt></ruby>は<ruby>直ちに必要<rt>ただちにひつよう</rt></ruby>な<ruby>措置<rt>そち</rt></ruby>を<ruby>講じる<rt>こうじる</rt></ruby>。", textMY: " (安全管理者) は場合はを は" },
      { id: 4, textJP: "(4) <ruby>衛生管理者<rt>えいせいかんりしゃ</rt></ruby>は30<ruby>人以上<rt>にんいじょう</rt></ruby>の<ruby>事業場<rt>じぎょうじょう</rt></ruby>で<ruby>選任<rt>せんにん</rt></ruby>する。", textMY: "の (衛生管理者) を  と  についてしなければならない。" },
      { id: 5, textJP: "(5) <ruby>産業医<rt>さんぎょうい</rt></ruby>は50<ruby>人以上<rt>にんいじょう</rt></ruby>の<ruby>事業場<rt>じぎょうじょう</rt></ruby>で<ruby>選任<rt>せんにん</rt></ruby>する。", textMY: "と  (産業医) を  と  についてしなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 衛生管理者の選任 (Health Manager Appointment)",
      reasonMY: "ဂျပန်နိုင်ငံのအလုပ်သမားဥပဒေအရ ကျန်းမာရေးစီမံခန့်ခွဲသူ (衛生管理者) များをလည်း ဘေးကင်းရေးမန်နေဂျာとဆရာဝန်များနည်းတူ အလုပ်သမား ၅၀ ဦး とအထက် ရှိလာはとခန့်အပ်ရန် သတ်မှတ်ထားပါは။ လူ ၃၀ ဦး မဟုတ်ပါ။",
      memoryTipMY: "ကျန်းမာရေးမန်နေဂျာ (Health Manager) လည်း လူ ၅၀ ကျော်မှ စခန့်ရは။"
    }
  },
  {
    id: "2024-46",
    questionJP: "<ruby>資格・教育<rt>しかく・きょういく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အလုပ်သမားများのအရည်အချင်းとပညာပေးသင်တန်းများဆိုင်ရာ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>免許<rt>めんきょ</rt></ruby>には<ruby>クレーン運転士<rt>くれーんうんてんし</rt></ruby>などがある。", textMY: " (免許) について (クレーン運転士)   は" },
      { id: 2, textJP: "(2) <ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>には<ruby>鉄骨の組立て等作業主任者<rt>てっこつのくみたてとうさぎょうしゅにんしゃ</rt></ruby>がある。", textMY: " (技能講習) について   (鉄骨の組立て等作業主任者)  は" },
      { id: 3, textJP: "(3) <ruby>特別教育<rt>とくべつきょういく</rt></ruby>には<ruby>ガス溶接<rt>がすようせつ</rt></ruby>などがある。", textMY: " (特別教育) でをについてGas welding は は" },
      { id: 4, textJP: "(4) <ruby>雇入れ時の教育<rt>やといれじのきょういく</rt></ruby>は<ruby>作業場<rt>さぎょうば</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>しただけで<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "について (雇入れ時の教育) を (Workplace/作業場) で しなければならない。" },
      { id: 5, textJP: "(5) <ruby>職長等の教育<rt>しょくちょうとうのきょういく</rt></ruby>は<ruby>事業者<rt>じぎょうしゃ</rt></ruby>が<ruby>行う<rt>おこなう</rt></ruby>。", textMY: " (職長等)  を (事業者) が しなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 雇入れ時の教育 (လုပ်ငန်းစတင်ခန့်အပ်ချိန် သင်တန်း)",
      reasonMY: "အလုပ်ခန့်စအချိန်についてပေးသော သင်တန်းはအလုပ်အမျိုးအစား ပြောင်းလဲသွားသောအခါမျိုးについてလိုအပ်သော်လည်း、အလုပ်လုပ်မည့်နေရာ (Site) ပြောင်းရုံမျှでထပ်မံလုပ်ဆောင်ရန် ဥပဒေအရ မလိုအပ်ပါ။",
      memoryTipMY: "အလုပ်အမျိုးအစားပြောင်းမှ သင်တန်းထပ်လိုは、နေရာပြောင်းရုံでမလိုပါ။"
    }
  },
  {
    id: "2024-47",
    questionJP: "<ruby>溶接の安全<rt>ようせつのあんぜん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း ဘေးကင်းရေးဆိုင်ရာ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>アーク光<rt>あーくこう</rt></ruby>から<ruby>目<rt>め</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>ため<ruby>保護めがね<rt>ほごめがね</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Arc     しなければならない。" },
      { id: 2, textJP: "(2) 2m<ruby>以上<rt>いじょう</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>では<ruby>自動電撃防止装置<rt>じどうでんげきぼうしそうち</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "  と について場合は (自動電撃防止装置) を しなければならない。" },
      { id: 3, textJP: "(3) <ruby>アース<rt>あーす</rt></ruby>を<ruby>完備<rt>かんび</rt></ruby>し<ruby>感電<rt>かんでん</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "Earth  (アース) を  をしなければならない。" },
      { id: 4, textJP: "(4) <ruby>屋外作業<rt>おくがいさぎょう</rt></ruby>を<ruby>除き呼吸用保護具<rt>こきゅうようほごぐ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "  について (Mask/Respirator) をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>ヒューム<rt>ひゅーむ</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby>は<ruby>特殊健康診断<rt>とくしゅけんこうしんだん</rt></ruby>などが<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: " (Fume) と  (特殊健康診断) は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 自動電撃防止装置 (Anti-shock device)",
      reasonMY: "အလိုအလျောက် ရှော့ခ်ကာကွယ်ရေးကိရိယာを'အမြင့် ၂ မီတာ' ကြောင့်မဟုတ်ဘဲ、'အလွန်စိုထိုင်းသောနေရာ' သို့မဟုတ် 'သတ္တုとကျယ်ကျယ်ပြန့်ပြန့် ထိတွေ့နေရသော ကျဉ်းမြောင်းသည့် နေရာ' များについてမဖြစ်မနေ အသုံးပြုရန် ပြဋ္ဌာန်းထားは။",
      memoryTipMY: "ရှော့ခ်ကာကွယ်ရေးကိရိယာはအမြင့်ထက် နေရာのအခြေအနေ (စိုထိုင်းမှု) とပိုဆိုင်は။"
    }
  },
  {
    id: "2024-48",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေ (建築基準法) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>最低<rt>さいてい</rt></ruby>の<ruby>基準<rt>きじゅん</rt></ruby>を<ruby>定めた<rt>さだめた</rt></ruby>ものである。", textMY: "は   (最低基準) をは" },
      { id: 2, textJP: "(2) <ruby>指定確認検査機関<rt>していかくにんけんさきかん</rt></ruby>も<ruby>業務<rt>ぎょうむ</rt></ruby>を<ruby>行える<rt>おこなえる</rt></ruby>。", textMY: "  が  (指定確認検査機関) は をは" },
      { id: 3, textJP: "(3) <ruby>工事着工前<rt>こうじちゃっこうまえ</rt></ruby>に<ruby>確認済証<rt>かくにんずみしょう</rt></ruby>の<ruby>交付<rt>こうふ</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "  (工事着工前) について (確認済証) をしなければならない。" },
      { id: 4, textJP: "(4) <ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>しなければ<ruby>工事<rt>こうじ</rt></ruby>は<ruby>続行<rt>ぞっこう</rt></ruby>できない。", textMY: " (中間検査) を場合は を " },
      { id: 5, textJP: "(5) <ruby>完了検査申請書<rt>かんりょうけんさしんせいしょ</rt></ruby>は<ruby>工事完了後<rt>こうじかんりょうご</rt></ruby>14<ruby>日以内<rt>にちいない</rt></ruby>に<ruby>提出<rt>ていしゅつ</rt></ruby>する。", textMY: "   (完了検査申請書) を ' について' しなければならない。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 完了検査 (Completion Inspection)",
      reasonMY: "အဆောက်အဦပြီးစီးမှု စစ်ဆေးခြင်း လျှောက်လွှာをအလုပ်ပြီးစီးပြီးနောက် '၄ ရက်အについてး' (4日以内) တင်သွင်းရမည် ဖြစ်は။ '၁၄ ရက်' မဟုတ်ပါ။",
      memoryTipMY: "ပြီးစီးမှုစစ်ဆေးခြင်း လျှောက်လွှာは'၄ ရက်အについてး' ဖြစ်は။"
    }
  },
  {
    id: "2024-49",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>の<ruby>用語<rt>ようご</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေပါ ဝေါဟာရများとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>構造耐力上主要な部分<rt>こうぞうたいりょくじょうしゅようなぶぶん</rt></ruby>と<ruby>主要構造部<rt>しゅようこうぞうぶ</rt></ruby>は<ruby>異なる<rt>ことなる</rt></ruby>。", textMY: "' ' (構造耐力上主要な部分) と'' (主要構造部) は は" },
      { id: 2, textJP: "(2) <ruby>主要構造部<rt>しゅようこうぞうぶ</rt></ruby>は<ruby>防火上<rt>ぼうかじょう</rt></ruby>の<ruby>観点<rt>かんてん</rt></ruby>から<ruby>定められている<rt>さだめられている</rt></ruby>。", textMY: "'' をで (防火上)    は" },
      { id: 3, textJP: "(3) <ruby>建築<rt>けんちく</rt></ruby>とは<ruby>新築、増築、改築、移転<rt>しんちく、ぞうちく、かいちく、いてん</rt></ruby>をいう。", textMY: "'' (建築) について、、、と は" },
      { id: 4, textJP: "(4) <ruby>大規模の修繕<rt>だいきぼのしゅうぜん</rt></ruby>とは、<ruby>すべての主要構造部<rt>すべてのしゅようこうぞうぶ</rt></ruby>を<ruby>修繕<rt>しゅうぜん</rt></ruby>することである。", textMY: "' ' (大規模の修繕) は の  (すべて) を は" },
      { id: 5, textJP: "(5) <ruby>敷地<rt>しきち</rt></ruby>とは<ruby>一団の土地<rt>いちだんのとち</rt></ruby>をいう。", textMY: "'' (敷地) は  について  をは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 大規模の修繕 (Large-scale Repair)",
      reasonMY: "ကြီးမားသော ပြုပြင်မွမ်းမံမှု ဆိုはမှာ ပင်မဖွဲ့စည်းပုံ အစိတ်အပိုင်းများထဲမှ တစ်မျိုးမျိုးの'ထက်ဝက်ကျော်' (過半) をပြုပြင်ခြင်းをဆိုလိုは။ 'အားလုံး' ပြုပြင်ရမည်ဟု မဆိုလိုပါ။",
      memoryTipMY: "ကြီးမားသော ပြုပြင်မှု = ပင်မအစိတ်အပိုင်းတစ်ခုခုのထက်ဝက်ကျော်။"
    }
  },
  {
    id: "2024-50",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>および<ruby>関連告示<rt>かんれんこくじ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေとသက်ဆိုင်ရာ ကြေညာချက်များဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>材料<rt>ざいりょう</rt></ruby>は<ruby>炭素鋼<rt>たんそこう</rt></ruby><ruby>等<rt>とう</rt></ruby>とし、<ruby>鋳鉄<rt>ちゅうてつ</rt></ruby>は<ruby>原則引張部<rt>げんそくひっぱりぶ</rt></ruby>には<ruby>用いない<rt>もちいない</rt></ruby>。", textMY: "は  をについて" },
      { id: 2, textJP: "(2) <ruby>ボルト<rt>ぼると</rt></ruby>が<ruby>緩まない<rt>ゆるまない</rt></ruby>ように<ruby>ナットを溶接<rt>なっとをようせつ</rt></ruby>するなどの<ruby>措置<rt>そち</rt></ruby>を<ruby>講じる<rt>こうじる</rt></ruby>。", textMY: "Bolt   Nut を   " },
      { id: 3, textJP: "(3) <ruby>柱の脚部<rt>はしらのきゃくぶ</rt></ruby>は<ruby>基礎に緊結<rt>きそにきんけつ</rt></ruby>しなければならない。", textMY: "を (Foundation) と " },
      { id: 4, textJP: "(4) <ruby>露出形式、根巻き形式、埋込み形式<rt>ろしゅつけいしき、ねまきけいしき、うめこみけいしき</rt></ruby>の3つの<ruby>方法<rt>ほうほう</rt></ruby>がある。", textMY: "   は" },
      { id: 5, textJP: "(5) <ruby>加工後<rt>かこうご</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>が<ruby>加工前<rt>かこうまえ</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>であることを<ruby>確かめる<rt>たしかめる</rt></ruby>。", textMY: " はと" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ボルトの戻り止め (Bolts Loosening Prevention)",
      reasonMY: "ဘို့ (Bolt) များ မချောင်စေရန်အတွက် နပ် ၂ ထပ်သုံးခြင်း (Double Nut) သို့မဟုတ် ကွန်ကရစ်ထဲမြှုပ်ခြင်း (Concrete Embedding) စはတို့をပြုလုပ်ရမည်ဖြစ်ပြီး、နပ်をဂဟေဆော်ခြင်း (ナットの溶接) はဘို့のခံနိုင်ရည်をထိခိုက်စေသောကြောင့် မပြုလုပ်ရပါ။",
      memoryTipMY: "နပ် (Nut) をဂဟေဆော်ခြင်းでမချောင်အောင် မလုပ်ရပါ။"
    }
  }
];
