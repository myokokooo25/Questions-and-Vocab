
import { StudyCardData } from '../types';

export const chapter2024Data: StudyCardData[] = [
  {
    id: "2024-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のように、<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面形<rt>だんめんけい</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しく、<ruby>長<rt>なが</rt></ruby>さの<ruby>異<rt>こと</rt></ruby>なる2<ruby>本<rt>ほん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>ABと<ruby>梁<rt>はり</rt></ruby>CDが<ruby>中央<rt>ちゅうおう</rt></ruby>○で<ruby>直角<rt>ちょっかく</rt></ruby>に<ruby>繋<rt>つな</rt></ruby>がっている。この<ruby>梁<rt>はり</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>○に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>したとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့်အတိုင်း ပစ္စည်းနှင့် မျက်နှာပြင်ဖြတ်ပိုင်းတူညီသော်လည်း အလျားမတူညီသော Beam AB နှင့် CD နှစ်ခုကို အလယ်ဗဟို O တွင် ထောင့်မှန်အတိုင်း ဆက်ထားသည်။ ဤ Beam ၏ ဆုံမှတ် O တွင် ဒေါင်လိုက်ဝန် P သက်ရောက်သောအခါ၊ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 4つの<ruby>支点<rt>してん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>はPである。", textMY: "Support ၄ ခု၏ ဒေါင်လိုက်တုံ့ပြန်အား စုစုပေါင်းသည် P ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>AB、<ruby>梁<rt>はり</rt></ruby>CDともに<ruby>曲<rt>ま</rt></ruby>げモーメントが<ruby>最大<rt>さいだい</rt></ruby>になるときは○<ruby>点<rt>てん</rt></ruby>である。", textMY: "Beam AB နှင့် CD နှစ်ခုစလုံးတွင် Bending Moment အများဆုံးမှာ O အမှတ်ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>ABの<ruby>最大<rt>さいだい</rt></ruby><ruby>曲<rt>ま</rt></ruby>げモーメントと、<ruby>梁<rt>はり</rt></ruby>CDの<ruby>最大<rt>さいだい</rt></ruby><ruby>曲<rt>ま</rt></ruby>げモーメントは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "Beam AB ၏ အမြင့်ဆုံး Bending Moment နှင့် Beam CD ၏ အမြင့်ဆုံး Bending Moment တို့သည် တူညီကြသည်။" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>ABに<ruby>生<rt>しょう</rt></ruby>じるせん<ruby>断力<rt>だんりょく</rt></ruby>は、<ruby>梁<rt>はり</rt></ruby>CDに<ruby>生<rt>しょう</rt></ruby>じるせん<ruby>断力<rt>だんりょく</rt></ruby>よりも<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Beam AB တွင်ဖြစ်ပေါ်သော Shear Force သည် Beam CD တွင်ဖြစ်ပေါ်သော Shear Force ထက် ပိုကြီးသည်။" },
      { id: 5, textJP: "(5) Pを<ruby>徐々<rt>じょじょ</rt></ruby>に<ruby>増加<rt>ぞうか</rt></ruby>させたとき、<ruby>曲<rt>ま</rt></ruby>げモーメントによる<ruby>応力度<rt>おうりょくど</rt></ruby>が<ruby>降伏点<rt>こうふくてん</rt></ruby>に<ruby>先<rt>さき</rt></ruby>に<ruby>到達<rt>とうたつ</rt></ruby>するのは<ruby>梁<rt>はり</rt></ruby>ABである。", textMY: "ဝန် P ကို တဖြည်းဖြည်းတိုးမြှင့်ပါက၊ Bending Stress သည် Beam AB တွင် ပထမဆုံး Yield Point သို့ ရောက်ရှိမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Stiffness နှင့် Load Distribution",
      reasonMY: "အလျားတိုသော Beam သည် Stiffness (တောင့်တင်းမှု) ပိုများသောကြောင့် ဝန် P ၏ အစိတ်အပိုင်းကို ပိုမိုခံယူရမည်ဖြစ်သည်။ Beam AB သည် CD ထက် ပိုတိုသောကြောင့် AB တွင် ဖြစ်ပေါ်သော Bending Moment သည် CD ထက် ပိုမိုကြီးမားရမည်။ ထို့ကြောင့် 'တူညီသည်' ဟုဆိုသော (3) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "Stiffness ပိုရင် Load ပိုယူတယ်၊ Load ပိုယူရင် Moment ပိုများတယ်။"
    }
  },
  {
    id: "2024-2",
    questionJP: "<ruby>引張強度<rt>ひっぱりきょうど</rt></ruby>と<ruby>圧縮強度<rt>あっしゅくきょうど</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい<ruby>部材<rt>ぶざい</rt></ruby>で<ruby>構成<rt>こうせい</rt></ruby>されたトラス<ruby>梁<rt>はり</rt></ruby>に2つの<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>している。Pを<ruby>増加<rt>ぞうか</rt></ruby>させたとき、<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>破壊<rt>はかい</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>はどれか。",
    questionMY: "ဆွဲအားနှင့် ဖိအားခံနိုင်ရည် တူညီသော member များဖြင့် ဖွဲ့စည်းထားသည့် Truss Beam တွင် ဒေါင်လိုက်ဝန် P နှစ်ခု သက်ရောက်နေသည်။ ဝန် P ကို တိုးမြှင့်ပါက မည်သည့် member သည် ပထမဆုံး ပျက်စီးမည်နည်း။",
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
      reasonMY: "Truss ဖွဲ့စည်းပုံအရ၊ Chord member များ (အပေါ်ဘောင်နှင့် အောက်ဘောင်) တွင် ဝင်ရိုးလိုက်အား (Axial Force) အများဆုံး သက်ရောက်လေ့ရှိသည်။ ပုံအရ (エ) member သည် အောက်ခြေ Chord ၏ အလယ်ဗဟိုတွင် ရှိပြီး ဝန် P နှင့် အနီးဆုံးနေရာဖြစ်သောကြောင့် အားအများဆုံးသက်ရောက်ပြီး အရင်ဆုံး ပျက်စီးနိုင်ခြေ အရှိဆုံး ဖြစ်သည်။",
      memoryTipMY: "Truss ၏ Chord member များ (အထူးသဖြင့် အလယ်ပိုင်း) သည် ဝန်အများဆုံး ခံရတတ်သည်။"
    }
  },
  {
    id: "2024-3",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံနှင့် ပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) わが<ruby>国<rt>くに</rt></ruby>における<ruby>鉄骨<rt>てっこつ</rt></ruby>ラーメン<ruby>構造<rt>こうぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>には、<ruby>角形鋼管柱<rt>かくがたこうかんちゅう</rt></ruby>とH<ruby>形鋼梁<rt>がたこうはり</rt></ruby>が<ruby>用<rt>もち</rt></ruby>いられることが<ruby>多<rt>おお</rt></ruby>い。", textMY: "ဂျပန်ရှိ သံမဏိ Frame အဆောက်အဦများတွင် များသောအားဖြင့် လေးထောင့်ပိုက်တိုင် (Square Column) နှင့် H-beam များကို အသုံးပြုကြသည်။" },
      { id: 2, textJP: "(2) <ruby>鋼材<rt>こうざい</rt></ruby>はコンクリートや<ruby>木材<rt>もくざい</rt></ruby>より<ruby>比重<rt>ひじゅう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいが、これらよりもはるかに<ruby>強<rt>つよ</rt></ruby>く、<ruby>高<rt>たか</rt></ruby>い<ruby>靭性<rt>じんせい</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>している。", textMY: "သံမဏိသည် သိပ်သည်းဆကြီးသော်လည်း Toughness မြင့်မားသောကြောင့် ငလျင်ဒဏ်ခံနိုင်ရည် ကောင်းမွန်သည်။" },
      { id: 3, textJP: "(3) トラス<ruby>構造<rt>こうぞう</rt></ruby>は、<ruby>三角形<rt>さんかくけい</rt></ruby>を<ruby>基本形状<rt>きほんけいじょう</rt></ruby>として<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ、<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造<rt>こうぞう</rt></ruby>である。", textMY: "Truss Structure သည် တြိဂံပုံစံကို အခြေခံပြီး axial force ဖြင့် ဝန်ကို ခုခံသည်။" },
      { id: 4, textJP: "(4) <ruby>免震構造<rt>めんしんこうぞう</rt></ruby>は、エネルギー<ruby>吸収<rt>きゅうしゅう</rt></ruby>デバイスで<ruby>制御<rt>せいぎょ</rt></ruby>することによって<ruby>高<rt>たか</rt></ruby>い<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を<ruby>実現<rt>じつげん</rt></ruby>した<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>であり、<ruby>軟弱地盤<rt>なんじゃくじばん</rt></ruby>に<ruby>建<rt>た</rt></ruby>つ<ruby>建物<rt>たてもの</rt></ruby>に<ruby>採用<rt>さいよう</rt></ruby>されることが<ruby>多<rt>おお</rt></ruby>い。", textMY: "Seismic Isolation (免震構造) ကို မြေပျော့သောနေရာများတွင် တည်ဆောက်သည့် အဆောက်အဦများတွင် အသုံးများသည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨枠付<rt>てっこつわくつ</rt></ruby>き<ruby>補強<rt>ほきょう</rt></ruby>は、スタッドを<ruby>溶接<rt>ようせつ</rt></ruby>し<ruby>無収縮<rt>むしゅうしゅく</rt></ruby>モルタルでRC<ruby>部材<rt>ぶざい</rt></ruby>と<ruby>一体化<rt>いったいか</rt></ruby>したものである。", textMY: "သံဘောင်ဖြင့် အားဖြည့်ခြင်း (Steel Retrofit) သည် non-shrink mortar ဖြင့် RC နှင့် တစ်သားတည်းဖြစ်အောင် လုပ်ဆောင်ခြင်းဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 免震構造 (Seismic Isolation)",
      reasonMY: "Seismic Isolation (免震構造) သည် မြေမာသောနေရာ (堅硬な地盤) များတွင် အထိရောက်ဆုံးဖြစ်သည်။ မြေပျော့သောနေရာ (軟弱地盤) များတွင် ငလျင်လှိုင်း၏ တုန်ခါမှုကာလ (Period) သည် ရှည်လျားတတ်ပြီး၊ Isolation စနစ်နှင့် ထပ်တူကျကာ ပဲ့တင်လှိုင်း (Resonance) ဖြစ်ပေါ်ပြီး ပိုမိုအန္တရာယ်ရှိနိုင်သည်။ ထို့ကြောင့် မြေပျော့သောနေရာများတွင် ဤစနစ်ကို သုံးလေ့မရှိပါ။",
      memoryTipMY: "Seismic Isolation (免震) = မြေမာသောနေရာ (Hard Ground)။"
    }
  },
  {
    id: "2024-4",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>特性<rt>とくせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ၏ ဝိသေသလက္ခဏာများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ボルト<ruby>孔<rt>あな</rt></ruby>の<ruby>中心<rt>ちゅうしん</rt></ruby>から<ruby>縁端<rt>えんたん</rt></ruby>までの<ruby>距離<rt>きょり</rt></ruby>が<ruby>十分<rt>じゅうぶん</rt></ruby>でないと、はしぬけ<ruby>破断<rt>はだん</rt></ruby>によってボルトの<ruby>耐力<rt>たいりょく</rt></ruby>が<ruby>発揮<rt>はっき</rt></ruby>されないことがある。", textMY: "Edge Distance မလုံလောက်ပါက အစွန်းပြတ်ထွက်ခြင်းကြောင့် bolt ၏ ခံနိုင်ရည်အား မရှိနိုင်ပါ။" },
      { id: 2, textJP: "(2) <ruby>細長<rt>ほそなが</rt></ruby>い<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>中心圧縮力<rt>ちゅうしんあっしゅくりょく</rt></ruby>を<ruby>作用<rt>さよう</rt></ruby>させたとき、<ruby>部材<rt>ぶざい</rt></ruby>が<ruby>曲<rt>ま</rt></ruby>がる<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>曲<rt>ま</rt></ruby>げ<ruby>座屈<rt>ざくつ</rt></ruby>という。", textMY: "သွယ်လျသော အစိတ်အပိုင်းကို အလယ်မှ ဖိအားပေးပါက Bending Buckling ဖြစ်ပေါ်သည်။" },
      { id: 3, textJP: "(3) <ruby>板要素<rt>いたようそ</rt></ruby>が<ruby>薄<rt>うす</rt></ruby>すぎると、<ruby>部材全体<rt>ぶざいぜんたい</rt></ruby>としての<ruby>座屈<rt>ざくつ</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる<ruby>前<rt>まえ</rt></ruby>に<ruby>板要素<rt>いたようそ</rt></ruby>が<ruby>波打<rt>なみう</rt></ruby>つことがある。これを<ruby>局部座屈<rt>きょくぶざくつ</rt></ruby>という。", textMY: "သံပြားအပိုင်းသည် ပါးလွန်းပါက Local Buckling ဖြစ်ပေါ်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>長<rt>なが</rt></ruby>いH<ruby>形鋼梁<rt>がたこうはり</rt></ruby>が<ruby>曲<rt>ま</rt></ruby>げを<ruby>受<rt>う</rt></ruby>けるとき、<ruby>圧縮側<rt>あっしゅくがわ</rt></ruby>フランジが<ruby>横方向<rt>よこほうこう</rt></ruby>にたわむ<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>横座屈<rt>よこざくつ</rt></ruby>という。", textMY: "အလျားရှည်သော H-beam သည် bending ခံရသောအခါ လည်ထွက်ခြင်းနှင့်အတူ Lateral Buckling ဖြစ်နိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>弾性剛性<rt>だんせいごうせい</rt></ruby>が<ruby>高<rt>たかい</rt></ruby>い<ruby>材料<rt>ざいりょう</rt></ruby>であるため、<ruby>曲<rt>ま</rt></ruby>げに<ruby>対<rt>たい</rt></ruby>する<ruby>強さ<rt>つよさ</rt></ruby>が<ruby>十分<rt>じゅうぶん</rt></ruby>であれば<ruby>振動<rt>しんどう</rt></ruby>で<ruby>居住者<rt>きょじゅうしゃ</rt></ruby>に<ruby>不快感<rt>ふかいかん</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えることはほとんどない。", textMY: "သံမဏိသည် Stiffness မြင့်မားသောကြောင့် Bending Strength လုံလောက်ရုံဖြင့် တုန်ခါမှုကြောင့်ဖြစ်သော စိတ်မသက်သာမှုများ လုံးဝမရှိနိုင်ပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Vibration and Stiffness",
      reasonMY: "သံမဏိသည် အလွန်ခိုင်ခံ့သော်လည်း ပါးလွှာပြီး ပေါ့ပါးသောကြောင့် တုန်ခါမှု (Vibration) ပြဿနာ ဖြစ်ပေါ်လွယ်သည်။ ထို့ကြောင့် Strength (強度) လုံလောက်ရုံဖြင့် တုန်ခါမှု ပြဿနာ မရှိဟု ယူဆခြင်းမှာ မှားယွင်းသည်။ Serviceability အတွက် Stiffness ကို သီးခြားစစ်ဆေးရန် လိုအပ်သည်။",
      memoryTipMY: "ခိုင်မာမှု (Strength) ရှိရုံဖြင့် တုန်ခါမှု (Vibration) ကင်းဝေးသည်ဟု မဆိုနိုင်ပါ။"
    }
  },
  {
    id: "2024-5",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>には、<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>と<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>の2<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "HS Bolt ဆက်သွယ်မှုတွင် Friction Joint နှင့် Tension Joint ဟူ၍ ၂ မျိုးရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>溶接<rt>ようせつ</rt></ruby>と<ruby>併用<rt>へいよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶接後<rt>ようせつご</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>されたボルトの<ruby>耐力<rt>たいりょく</rt></ruby>は<ruby>考慮<rt>こうりょ</rt></ruby>できない。", textMY: "ဂဟေနှင့် တွဲသုံးပါက၊ ဂဟေဆက်ပြီးမှ တပ်ဆင်လိုက်သော Bolt ၏ အားကို ဒီဇိုင်းတွင် ထည့်သွင်းမတွက်ရပါ။" },
      { id: 3, textJP: "(3) <ruby>溶融亜鉛<rt>ようゆうあえん</rt></ruby>めっき<ruby>高力<rt>こうりょく</rt></ruby>ボルトはJISに<ruby>規格<rt>きかく</rt></ruby>がないため、<ruby>構造耐力上主要<rt>こうぞうたいりょくじょうしゅよう</rt></ruby>な<ruby>部分<rt>ぶぶん</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いることはできない。", textMY: "သွပ်ရည်စိမ် HS Bolt များသည် JIS စံနှုန်းမရှိသောကြောင့် အဓိကအစိတ်အပိုင်းများတွင် အသုံးမပြုနိုင်ပါ။" },
      { id: 4, textJP: "(4) <ruby>摩擦面<rt>まさつめん</rt></ruby>は、0.45<ruby>以上<rt>いじょう</rt></ruby>のすべり<ruby>係数<rt>けいすう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>しなければならない。", textMY: "ပွတ်တိုက်မျက်နှာပြင်သည် ပွတ်တိုက်မှုကိန်း (Slip Coefficient) ၀.၄၅ နှင့်အထက် ရှိရမည်။" },
      { id: 5, textJP: "(5) <ruby>孔あけ<rt>あなあけ</rt></ruby>はドリルあけとするが、<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>場合<rt>ばあい</rt></ruby>はレーザあけとすることができる。", textMY: "အပေါက်ဖောက်ခြင်းကို Drill ဖြင့် လုပ်ရမည်။ သို့သော် ခွင့်ပြုချက်ရပါက Laser ဖြင့်လည်း ဖောက်နိုင်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶融亜鉛めっき高力ボルト (Galvanized HS Bolt)",
      reasonMY: "သွပ်ရည်စိမ် HS Bolt (ဥပမာ- F12T) များသည် သီးခြား JIS စံနှုန်းမရှိသော်လည်း၊ ဝန်ကြီးဌာန၏ အသိအမှတ်ပြုလက်မှတ် (Minister Certification - 大臣認定) ဖြင့် အဓိကအစိတ်အပိုင်းများတွင် ကျယ်ပြန့်စွာ အသုံးပြုနေကြသည်။ ထို့ကြောင့် အသုံးမပြုနိုင်ပါဟု ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "JIS မရှိသော်လည်း 大臣認定 (Minister Approval) ဖြင့် သုံးနိုင်သည်။"
    }
  },
  {
    id: "2024-6",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>にはアーク<ruby>溶接<rt>ようせつ</rt></ruby>が<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "ဆောက်လုပ်ရေး သံမဏိ ဂဟေဆက်ခြင်းတွင် Arc Welding သည် အသုံးအများဆုံးဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>はボルト<ruby>孔<rt>あな</rt></ruby>のような<ruby>断面欠損<rt>だんめんけっそん</rt></ruby>がない。", textMY: "ဂဟေဆက်နေရာတွင် bolt အပေါက်ကဲ့သို့ ဖြတ်ပိုင်းလျော့နည်းမှု မရှိပါ။" },
      { id: 3, textJP: "(3) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>は、<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>規格強度<rt>きかくきょうど</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>が<ruby>得<rt>え</rt></ruby>られる。", textMY: "Full Penetration Weld သည် base metal ၏ ခိုင်မာမှုအတိုင်း ရရှိနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>には、<ruby>前面<rt>ぜんめん</rt></ruby>、<ruby>側面<rt>そكめん</rt></ruby>、<ruby>斜方<rt>しゃほう</rt></ruby>の3<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "Fillet Weld တွင် ရှေ့မျက်နှာစာ၊ ဘေးတိုက် နှင့် ထောင့်ဖြတ် ဟူ၍ ၃ မျိုးရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>部分溶込<rt>ぶぶんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>継ぎ手<rt>つぎて</rt></ruby>は、せん<ruby>断力<rt>だんりょく</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>部分<rt>ぶぶん</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いてはならない。", textMY: "Partial Penetration Weld ကို ညှပ်အား (Shear Force) အတွက် မသုံးရပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 部分溶込み溶接 (Partial Penetration Weld)",
      reasonMY: "Partial Penetration Weld (部分溶込み溶接) ကို ညှပ်အား (Shear Force) သို့မဟုတ် ဖိအား (Compression Force) သယ်ဆောင်သော နေရာများတွင် အသုံးပြုနိုင်သည်။ သို့သော် ၎င်းကို ဆွဲအား (Tension Force) ကို တိုက်ရိုက်ခံယူသော အဓိကနေရာများတွင် အသုံးမပြုရန် ကန့်သတ်ထားသည်။ ထို့ကြောင့် (၅) ပါ 'ညှပ်အားအတွက် မသုံးရ' ဟူသော ဖော်ပြချက်မှာ မှားယွင်းသည်။",
      memoryTipMY: "Partial Penetration (部分溶込) = Compression/Shear OK, Tension NG."
    }
  },
  {
    id: "2024-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズは<ruby>ルート<rt>るーと</rt></ruby>から<ruby>斜辺<rt>しゃへん</rt></ruby>におろした<ruby>垂線<rt>すいせん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さとする。", textMY: "Fillet Weld ၏ Size သည် root မှ hypotenuse သို့ ဆွဲလိုက်သော ဒေါင်လိုက်မျဉ်း၏ အရှည် ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>有効長さ<rt>ゆうこうながさ</rt></ruby>は、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>溶接長さ<rt>ようせつながさ</rt></ruby>をそのまま取ることができる。", textMY: "Full Penetration Weld ၏ ထိရောက်သောအရှည်မှာ လက်တွေ့ ဂဟေအရှည်အတိုင်းဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>の<ruby>有効長さ<rt>ゆうこうながさ</rt></ruby>は、<ruby>始終端部<rt>しじゅうたんぶ</rt></ruby>の<ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>部分<rt>ぶぶん</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>めてはならない。", textMY: "Fillet Weld ၏ ထိရောက်သောအရှည်တွင် အစနှင့်အဆုံးရှိ မပြည့်စုံသော အပိုင်းကို ထည့်မတွက်ရပါ။" },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>は、<ruby>低<rt>ひく</rt></ruby>い<ruby>方<rt>ほう</rt></ruby>の<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>とする。", textMY: "ဂဟေဆက်နေရာ၏ စံနှုန်းခိုင်မာမှုသည် အားအနည်းဆုံးသံမဏိ၏ စံနှုန်းအတိုင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>သည် <ruby>構造性能<rt>こうぞうせいのう</rt></ruby><ruby>低下<rt>ていか</rt></ruby>の<ruby>要因<rt>よういん</rt></ruby>につながる。", textMY: "Residual Stress သည် ဖွဲ့စည်းပုံ စွမ်းဆောင်ရည် ကျဆင်းစေသည့် အကြောင်းရင်း ဖြစ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 隅肉溶接のサイズ (Fillet Weld Size)",
      reasonMY: "Fillet Weld ၏ Size ဆိုသည်မှာ ဒေါင်လိုက်မျဉ်းအရှည် မဟုတ်ဘဲ၊ 'Leg Length' (脚長) ဟုခေါ်သော ဂဟေသား၏ ဘေးအနားအရှည် (နံဘေးနှစ်ဖက်) ကို ဆိုလိုသည်။ (၁) တွင် ဖော်ပြထားသော root မှ hypotenuse သို့ ဆွဲလိုက်သော ဒေါင်လိုက်မျဉ်းမှာ 'Theoretical Throat Thickness' (理論のど厚) ဖြစ်သည်။",
      memoryTipMY: "Size = Leg Length (脚長)။ Throat Thickness (のど厚) မဟုတ်ပါ။"
    }
  },
  {
    id: "2024-8",
    questionJP: "<ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby>(SN<ruby>材<rt>ざい</rt></ruby>)に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးသုံး သံမဏိ (SN Material) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) SN<ruby>材<rt>ざい</rt></ruby>にはA<ruby>種<rt>しゅ</rt></ruby>、B<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>の3<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "SN material တွင် A, B, C ဟူ၍ ၃ မျိုးရှိသည်။" },
      { id: 2, textJP: "(2) A<ruby>種<rt>しゅ</rt></ruby>は<ruby>溶接性<rt>ようせつせい</rt></ruby>が<ruby>考慮<rt>こうりょ</rt></ruby>されていないため、<ruby>軽微<rt>けいび</rt></ruby>な<ruby>溶接<rt>ようせつ</rt></ruby>やボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いる。", textMY: "Type A သည် ဂဟေဆက်ရန် မဟုတ်သောကြောင့် အသေးစားဂဟေ သို့မဟုတ် bolt ဆက်သွယ်မှုများတွင် သုံးသည်။" },
      { id: 3, textJP: "(3) B<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>は<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>が<ruby>規定<rt>きてい</rt></ruby>され、<ruby>溶接性<rt>ようせつせい</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>されている。", textMY: "Type B နှင့် C တွင် Yield Ratio ၏ အမြင့်ဆုံးကန့်သတ်ချက် ရှိပြီး ဂဟေဆက်နိုင်စွမ်းကိုလည်း ထည့်သွင်းစဉ်းစားထားသည်။" },
      { id: 4, textJP: "(4) 0℃シャルピー<ruby>吸収エネルギー<rt>きゅうしゅうエネルギー</rt></ruby>はB<ruby>種<rt>しゅ</rt></ruby>で27J<ruby>以上<rt>いじょう</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>で47J<ruby>以上<rt>いじょう</rt></ruby>である。", textMY: "0°C Charpy test တွင် Type B သည် 27J နှင့်အထက်၊ Type C သည် 47J နှင့်အထက် ရှိရမည်။" },
      { id: 5, textJP: "(5) C<ruby>種<rt>しゅ</rt></ruby>は<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>の<ruby>絞り値<rt>しぼりち</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>していない。", textMY: "Type C သည် plate အထူဘက်သို့ Reduction of Area (絞り値) တန်ဖိုးကို သတ်မှတ်မထားပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材 C種 (SN-C Material)",
      reasonMY: "SN Material တွင် Type C သည် အထူးသဖြင့် Plate Thickness Direction (板厚方向) တွင် ကြီးမားသော ဆွဲအားကို ခံနိုင်ရန် (Lamellar tearing ကာကွယ်ရန်) ဒီဇိုင်းထုတ်ထားခြင်းဖြစ်သည်။ ထို့ကြောင့် Type C တွင် အထူဘက်သို့ ကျုံ့နိုင်မှု တန်ဖိုး (Reduction of Area - 絞り値) ကို မဖြစ်မနေ သတ်မှတ်ထားရပါသည်။ သတ်မှတ်မထားပါဟု ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "SN-C = Thickness direction property (絞り値) ရှိရမည်။"
    }
  },
  {
    id: "2024-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိ၏ စက်မှုဂုဏ်သတ္တိများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ヤング係数<rt>やんぐけいすう</rt></ruby>は、ほぼ<ruby>一定<rt>いってい</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>(205,000N/mm²)をとる。", textMY: "Young's Modulus သည် အမြဲတမ်းနီးပါး ၂၀၅,၀၀၀ N/mm² တန်ဖိုးရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>降伏棚<rt>こうふくだな</rt></ruby>を<ruby>過<rt>す</rt></ruby>ぎると<ruby>応力度<rt>おうりょくど</rt></ruby>が<ruby>再び上昇<rt>ふたたびじょうしょう</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>ひずみ硬化<rt>ひずみこうか</rt></ruby>という。", textMY: "Yield point ကိုကျော်ပြီး Stress ပြန်တက်လာခြင်းကို Strain Hardening ဟု ခေါ်သည်။" },
      { id: 3, textJP: "(3) <ruby>降伏比<rt>こうふくひ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いほど<ruby>塑性変形能力<rt>そせいへんけいのうりょく</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなる。", textMY: "Yield Ratio မြင့်လေလေ Plastic Deformation Capacity မြင့်လေလေ ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>絞り<rt>しぼり</rt></ruby>とは、<ruby>破断時<rt>はだんじ</rt></ruby>の<ruby>断面積<rt>だんめんせき</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>を<ruby>元断面積<rt>もとだんめんせき</rt></ruby>で<ruby>除<rt>じょ</rt></ruby>したものである。", textMY: "Reduction of Area ဆိုသည်မှာ ပျက်စီးချိန် ဖြတ်ပိုင်းဧရိယာပြောင်းလဲမှုကို မူလဧရိယာဖြင့် စားခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>ひずみ時効<rt>ひずみじこう</rt></ruby>により<ruby>降伏点<rt>こうふくてん</rt></ruby>が<ruby>上昇<rt>じょうしょう</rt></ruby>し、<ruby>伸び能力<rt>のびのうりょく</rt></ruby>は<ruby>減少<rt>げんしょう</rt></ruby>する。", textMY: "Strain aging ကြောင့် yield point တက်လာပြီး elongation (ဆန့်ထွက်နိုင်စွမ်း) လျော့ကျသွားသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 降伏比 (Yield Ratio)",
      reasonMY: "Yield Ratio (降伏比) ဆိုသည်မှာ Yield Point ကို Tensile Strength နှင့် စားထားသော တန်ဖိုးဖြစ်သည်။ ဤတန်ဖိုး မြင့်လွန်းပါက Yield ဖြစ်ပြီးသည်နှင့် မကြာမီ ပျက်စီးသွားမည် ဖြစ်သောကြောင့် ပုံပျက်ခံနိုင်စွမ်း (Plastic Deformation Capacity) နည်းပါးသွားသည်။ ထို့ကြောင့် Yield Ratio နိမ့်လေ ပုံပျက်နိုင်စွမ်း ပိုကောင်းလေ ဖြစ်သည်။",
      memoryTipMY: "Yield Ratio မြင့်ရင် ပုံပျက်ခံနိုင်စွမ်း (Ductility) နည်းသွားသည်။"
    }
  },
  {
    id: "2024-10",
    questionJP: "<ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>の<ruby>製作計画<rt>せいさくけいかく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်ကုန် ထုတ်လုပ်မှုစီမံကိန်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工程計画<rt>こうていけいかく</rt></ruby>では、<ruby>製作<rt>せいさく</rt></ruby>の<ruby>順序<rt>じゅんじょ</rt></ruby>や<ruby>方法<rt>ほうほう</rt></ruby>、<ruby>設備<rt>せつび</rt></ruby>などを<ruby>決<rt>き</rt></ruby>める。", textMY: "Process Planning တွင် ထုတ်လုပ်မှု အစီအစဉ်၊ နည်းလမ်းနှင့် စက်ပစ္စည်းများကို ဆုံးဖြတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>工数計画<rt>こうすうけいかく</rt></ruby>では、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>人員<rt>じんいん</rt></ruby>や<ruby>設備<rt>せつび</rt></ruby>の<ruby>台数<rt>だいすう</rt></ruby>などを<ruby>決<rt>き</rt></ruby>める。", textMY: "Man-hour Planning တွင် လိုအပ်သော လူအင်အားနှင့် စက်အရေအတွက်ကို ဆုံးဖြတ်သည်။" },
      { id: 3, textJP: "(3) <ruby>日程計画<rt>にっていけいかく</rt></ruby>では、<ruby>工程<rt>こうてい</rt></ruby>ごとの<ruby>開始予定日<rt>かいしよていび</rt></ruby>や<ruby>所要日数<rt>しょようにっすう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "Schedule Planning တွင် အဆင့်တစ်ခုချင်းစီ၏ စတင်မည့်ရက်နှင့် ကြာမြင့်မည့်ရက်ကို ဆုံးဖြတ်သည်။" },
      { id: 4, textJP: "(4) <ruby>材料計画<rt>ざいりょうけいかく</rt></ruby>では、<ruby>材料手配<rt>ざいりょうてはい</rt></ruby>の<ruby>日程<rt>にってい</rt></ruby>と<ruby>所要量<rt>しょようりょう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "Material Planning တွင် ပစ္စည်းမှာယူမည့်ရက်နှင့် လိုအပ်သော ပမာဏကို ဆုံးဖြတ်သည်။" },
      { id: 5, textJP: "(5) <ruby>品質計画<rt>ひんしつけいかく</rt></ruby>では、<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>をもとに<ruby>品質水準<rt>ひんしつすいじゅん</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "Quality Planning တွင် စက်ရုံစံနှုန်းများပေါ် မူတည်ပြီး အရည်အသွေးအဆင့်ကို ဆုံးဖြတ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - စီမံကိန်း အမျိုးအစားများ",
      reasonMY: "工程計画 (Process Planning) ဆိုသည်မှာ ထုတ်လုပ်မှု 'အဆင့်ဆင့်' (Sequence) ကို သတ်မှတ်ခြင်း ဖြစ်သည်။ 'စက်ပစ္စည်း' (設備) သို့မဟုတ် '台数' (အရေအတွက်) ကို ဆုံးဖြတ်ခြင်းသည် 工数計画 (Man-hour/Resource Planning) တွင် ပိုမိုသက်ဆိုင်သည်။",
      memoryTipMY: "工程 = Sequence, 工数 = Resources/Man-hours."
    }
  },
  {
    id: "2024-11",
    questionJP: "<ruby>作業量<rt>さぎょうりょう</rt></ruby>が<ruby>過大<rt>かだい</rt></ruby>であることへの<ruby>対策<rt>たいさく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လုပ်ငန်းပမာဏ အလွန်များပြားနေပါက ဖြေရှင်းမည့်နည်းလမ်းများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) あらかじめ<ruby>受注予定量<rt>じゅちゅうよていりょう</rt></ruby>を<ruby>見直<rt>みなお</rt></ruby>して、<ruby>仕事量<rt>しごとりょう</rt></ruby>の<ruby>調整<rt>ちょうせい</rt></ruby>や<ruby>標準時間<rt>ひょうじゅんじかん</rt></ruby>などの<ruby>見直<rt>みなお</rt></ruby>しを<ruby>行<rt>おこな</rt></ruby>う。", textMY: "မှာယူမှုပမာဏကို ပြန်လည်သုံးသပ်ပြီး အလုပ်ဝေစုနှင့် စံသတ်မှတ်ချိန်များကို ချိန်ညှိသည်။" },
      { id: 2, textJP: "(2) <ruby>一時的<rt>いちじてき</rt></ruby>に<ruby>リース<rt>りーす</rt></ruby>などを<ruby>利用<rt>りよう</rt></ruby>したり<ruby>新規購入<rt>しんきこうにゅう</rt></ruby>するなどして、<ruby>設備能力<rt>せつびのうりょく</rt></ruby>を<ruby>増強<rt>ぞうきょう</rt></ruby>する。", textMY: "ယာယီအားဖြင့် စက်ငှားရမ်းခြင်း သို့မဟုတ် အသစ်ဝယ်ယူခြင်းဖြင့် စွမ်းဆောင်ရည်မြှင့်တင်သည်။" },
      { id: 3, textJP: "(3) <ruby>日程的<rt>にっていてき</rt></ruby>に<ruby>余裕<rt>よゆう</rt></ruby>のある<ruby>部署<rt>ぶしょ</rt></ruby>の<ruby>人員<rt>じんいん</rt></ruby>や<ruby>外部<rt>がいぶ</rt></ruby>の<ruby>人員<rt>じんいん</rt></ruby>を<ruby>補充<rt>ほじゅう</rt></ruby>したり、あるいは<ruby>残業<rt>ざんぎょう</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "အခြားဌာန သို့မဟုတ် ပြင်ပမှ လူအင်အားဖြည့်တင်းခြင်း သို့မဟုတ် အချိန်ပိုဆင်းခြင်းတို့ကို လုပ်ဆောင်သည်။" },
      { id: 4, textJP: "(4) <ruby>建方工程<rt>たてかたこうてい</rt></ruby>から<ruby>製作着手日程<rt>せいさくちゃくしゅにってい</rt></ruby>を<ruby>逆算<rt>ぎゃくさん</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>による<ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>って<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する。", textMY: "တပ်ဆင်မည့်ရက်မှ ပြောင်းပြန်တွက်ချက်ပြီး ပုံစံအတည်ပြုချက် မရမီကပင် ထုတ်လုပ်မှုကို စတင်သည်။" },
      { id: 5, textJP: "(5) <ruby>所定<rt>しょてい</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>できる<ruby>外注先<rt>がいちゅうさき</rt></ruby>を<ruby>選<rt>えら</rt></ruby>び、<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>了解<rt>りょうかい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>上<rt>うえ</rt></ruby>で<ruby>依頼<rt>いらい</rt></ruby>する。", textMY: "အရည်အသွေးစိတ်ချရသော ပြင်ပစက်ရုံကို ကြီးကြပ်သူ၏ သဘောတူညီချက်ဖြင့် ငှားရမ်းလုပ်ဆောင်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作着手 (Start of Fabrication)",
      reasonMY: "ပုံစံအတည်ပြုချက် (Shop Drawing Approval) မရရှိဘဲ ထုတ်လုပ်မှု စတင်ခြင်း (承認に先立って着手) သည် အလွန်အန္တရာယ်များပြီး ဒီဇိုင်းအမှားများရှိပါက ပြန်လုပ်ရခြင်း (Remake) ဖြစ်စေနိုင်သည်။ ၎င်းသည် အသင့်လျော်ဆုံး ဖြေရှင်းနည်း မဟုတ်ပါ။",
      memoryTipMY: "အတည်ပြုချက် (Approval) ရပြီးမှ ထုတ်လုပ်မှုကို စတင်ရမည်။"
    }
  },
  {
    id: "2024-12",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>および<ruby>現寸<rt>げんすん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အလုပ်ရုံပုံစံ (Shop Drawings) နှင့် အတိုင်းအတာများ (Full-scale) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>通常<rt>つうじょう</rt></ruby>、<ruby>一般図<rt>いっぱんず</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>し<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>後<rt>あと</rt></ruby>、<ruby>詳細図<rt>しょうさいず</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する。", textMY: "ပုံမှန်အားဖြင့် General drawing အတည်ပြုပြီးမှ Detail drawing ကို စတင်သည်။" },
      { id: 2, textJP: "(2) <ruby>設計変更<rt>せっけいへんこう</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>変更内容<rt>へんこうないよう</rt></ruby>を<ruby>反映<rt>はんえい</rt></ruby>した<ruby>詳細図<rt>しょうさいず</rt></ruby>を<ruby>再提出<rt>さいていしゅつ</rt></ruby>し、改めて<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", textMY: "ဒီဇိုင်းပြောင်းလဲပါက ပုံစံပြန်တင်ပြီး ထပ်မံအတည်ပြုချက် ရယူရမည်။" },
      { id: 3, textJP: "(3) <ruby>設備用梁貫通孔<rt>せつびようはりかんつうこう</rt></ruby>などは、<ruby>詳細図<rt>しょうさいず</rt></ruby>への<ruby>記載<rt>きさい</rt></ruby>を<ruby>省略<rt>しょうりゃく</rt></ruby>するとよい。", textMY: "Beam များရှိ ပိုက်လိုင်းပေါက်များကို အသေးစိတ်ပုံတွင် ချန်လှပ်ထားနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>現寸作業<rt>げんすんさぎょう</rt></ruby>のチェックポイントとして、<ruby>輸送<rt>ゆそう</rt></ruby>や<ruby>溶接<rt>ようせつ</rt></ruby>への<ruby>支障<rt>ししょう</rt></ruby>がないか<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Erection accuracy စစ်ဆေးရာတွင် သယ်ယူပို့ဆောင်ရေးနှင့် ဂဟေဆက်ခြင်းအတွက် အနှောင့်အယှက် ရှိမရှိ စစ်ဆေးသည်။" },
      { id: 5, textJP: "(5) <ruby>現寸作業<rt>げんすんさぎょう</rt></ruby>をNC<ruby>装置<rt>そうち</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>定規<rt>じょうぎ</rt></ruby>・<ruby>型板<rt>かたいた</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>となる。", textMY: "NC စက်များဖြင့် လုပ်ဆောင်ပါက ပုံစံခွက် (Template) များ မလိုအပ်ပါ။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 詳細図の記載 (Detail Drawing)",
      reasonMY: "အသေးစိတ်ပုံ (Detail drawing) များတွင် ဖြတ်သန်းပေါက်များ (貫通孔) ကဲ့သို့သော အရေးကြီးသည့် အချက်အလက်များကို ချန်လှပ်ထားခြင်း (省略) မပြုရပါ။ ၎င်းတို့သည် အားနည်းချက်ဖြစ်စေနိုင်သောကြောင့် တိကျစွာ ဖော်ပြရန် လိုအပ်သည်။",
      memoryTipMY: "အသေးစိတ်ပုံ (Detail Drawing) တွင် အရေးကြီးအချက်အလက်များကို ချန်လှပ်ထား၍ မရပါ။"
    }
  },
  {
    id: "2024-13",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断方法<rt>せつだんほうほう</rt></ruby>とその<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်နည်းများနှင့် ၎င်းတို့၏ ဝိသေသလက္ခဏာများအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ガス<ruby>切断法<rt>せつだんほう</rt></ruby>は、<ruby>切断精度<rt>せつだんせいど</rt></ruby>が<ruby>良<rt>よ</rt></ruby>く、<ruby>経済的<rt>けいざいてき</rt></ruby>である。", textMY: "Gas Cutting သည် တိကျမှုကောင်းပြီး စရိတ်သက်သာသည်။" },
      { id: 2, textJP: "(2) <ruby>シャーカッター<rt>しゃーかったー</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いる<ruby>方法<rt>ほうほう</rt></ruby>は、<ruby>切断速度<rt>せつだんそくど</rt></ruby>は<ruby>速<rt>はや</rt></ruby>いが、<ruby>切断面<rt>せつだんめん</rt></ruby>に「かえり」が<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "Shear Cutter သည် အရှိန်မြန်သော်လည်း အစွန်းများတွင် burrs (かえり) များ ထွက်လွယ်သည်။" },
      { id: 3, textJP: "(3) <ruby>バンドソー<rt>ばんどそー</rt></ruby>は<ruby>精度<rt>せいど</rt></ruby>が<ruby>良<rt>よ</rt></ruby>く、<ruby>大断面<rt>だいだんめん</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>される。", textMY: "Band Saw သည် တိကျမှုကောင်းပြီး ဖြတ်ပိုင်းကြီးမားသော ပစ္စည်းများအတွက် သင့်လျော်သည်။" },
      { id: 4, textJP: "(4) <ruby>レーザ切断法<rt>れーざせつだんほう</rt></ruby>は、<ruby>切断面<rt>せつだんめん</rt></ruby>の<ruby>直角度<rt>ちょっかくど</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある。", textMY: "Laser Cutting သည် ဒေါင်လိုက်ကျမှု (Squareness) တွင် ပြဿနာ ရှိတတ်သည်။" },
      { id: 5, textJP: "(5) <ruby>プラズマ切断法<rt>ぷらずませつだんほう</rt></ruby>は、<ruby>ヒューム<rt>ひゅーむ</rt></ruby><ruby>発生量<rt>はっせいりょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>く、<ruby>騒音<rt>そうおん</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Plasma Cutting သည် အခိုးအငွေ့ ထွက်ရှိမှု များပြီး ဆူညံသံ ကြီးမားသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - レーザ切断 (Laser Cutting)",
      reasonMY: "Laser Cutting သည် အလွန်တိကျသော နည်းလမ်းဖြစ်ပြီး ဒေါင်လိုက်ကျမှု (直角度) အပါအဝင် ဖြတ်တောက်မှု အရည်အသွေး အလွန်ကောင်းမွန်သည်။ ထို့ကြောင့် ပြဿနာရှိသည်ဟု ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Laser Cutting သည် တိကျမှု (Accuracy) အမြင့်ဆုံး နည်းလမ်းများထဲမှ တစ်ခုဖြစ်သည်။"
    }
  },
  {
    id: "2024-14",
    questionJP: "JASS 6に<ruby>基<rt>もと</rt></ruby>づき<ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိအပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>孔径<rt>こうけい</rt></ruby>30mm<ruby>以上<rt>いじょう</rt></ruby>の<ruby>孔<rt>あな</rt></ruby>をガス<ruby>孔あけ<rt>あなあけ</rt></ruby>とした<ruby>場合<rt>ばあい</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>は±2mm<ruby>以内<rt>いない</rt></ruby>とする。", textMY: "30mm အထက် အပေါက်များကို gas ဖြင့်ဖောက်ပါက တိကျမှုမှာ ±2mm အတွင်း ရှိရမည်။" },
      { id: 2, textJP: "(2) <ruby>ブラスト処理<rt>ぶらすとしょり</rt></ruby>のみで<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>ブラスト後<rt>ぶらすとご</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>する。", textMY: "ပွတ်တိုက်မျက်နှာပြင်ကို blast လုပ်ပြီးမှ အပေါက်ဖောက်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>せん断孔あけ<rt>せんだんあなあけ</rt></ruby>の「かえり」は<ruby>グラインダ<rt>ぐらいんだ</rt></ruby>などで<ruby>修正<rt>しゅうせい</rt></ruby>する。", textMY: "Punch ဖြင့်ဖောက်သောအပေါက်များမှ burrs များကို grinder ဖြင့် ပြုပြင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>レーザ孔あけ<rt>れーざあなあけ</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶損部<rt>ようそんぶ</rt></ruby>は<ruby>応力上支障<rt>おうりょくじょうししょう</rt></ruby>の<ruby>少<rt>すく</rt></ruby>ない<ruby>位置<rt>いち</rt></ruby>とする。", textMY: "Laser ဖြင့် အပေါက်ဖောက်ပါက အပူကြောင့် ပျက်စီးသောနေရာမှာ stress နည်းသောနေရာတွင် ရှိရမည်။" },
      { id: 5, textJP: "(5) <ruby>孔あけ後<rt>あなあけご</rt></ruby>のバリや<ruby>切粉<rt>きりこ</rt></ruby>は<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "အပေါက်ဖောက်ပြီးနောက် အမှုန်အမွှားများကို အကုန်ဖယ်ရှားရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 摩擦面処理 (Friction Surface)",
      reasonMY: "ပွတ်တိုက်မျက်နှာပြင်ကို blast လုပ်ပြီးမှ အပေါက်ဖောက်ပါက၊ အပေါက်ဖောက်ရာမှ ထွက်လာသော ဆီ သို့မဟုတ် အမှုန်များကြောင့် သန့်စင်ထားသော ပွတ်တိုက်မျက်နှာပြင်မှာ ပြန်လည် ညစ်ပေသွားနိုင်သည်။ ထို့ကြောင့် အပေါက်ဖောက်ပြီးမှသာ blast ပြုလုပ်ခြင်းက ပိုမိုမှန်ကန်သည်။",
      memoryTipMY: "အပေါက်ဖောက်ခြင်း (Drilling) ပြီးမှ Blast လုပ်ခြင်းက ပိုကောင်းသည်။"
    }
  },
  {
    id: "2024-15",
    questionJP: "JASS 6における<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength bolt ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>発錆処理<rt>はっせいしょり</rt></ruby>には<ruby>自然発錆<rt>しぜんはっせい</rt></ruby>と<ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>がある。", textMY: "သံချေးတက်စေခြင်းဖြင့် မျက်နှာပြင်ပြင်ဆင်နည်းတွင် သဘာဝအတိုင်းနှင့် ဓာတုပစ္စည်းသုံးနည်းဟူ၍ ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>ブラスト処理<rt>ぶらすとしょり</rt></ruby>には<ruby>サンドブラスト<rt>さんどぶらすと</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "Blast ပြုလုပ်ရာတွင် Sandblast ကို အသုံးပြုနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>も<ruby>同時<rt>どうじ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>薬剤<rt>やくざい</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>してはならない。", textMY: "Black scale ကိုပါ တစ်ပြိုင်နက် ဖယ်ရှားပေးသော ဓာတုပစ္စည်းများကို မသုံးရပါ။" },
      { id: 4, textJP: "(4) 1mmを<ruby>超<rt>こ</rt></ruby>える<ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>を<ruby>入<rt>い</rt></ruby>れる。", textMY: "1mm ထက်ကျော်သော ကွာဟချက် (肌すき) ရှိပါက Filler plate ထည့်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>の<ruby>両面<rt>りょうめん</rt></ruby>とも<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Filler plate ၏ နှစ်ဖက်လုံးကို ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 薬剤発錆 (Chemical Rusting)",
      reasonMY: "Black scale (黒皮) ကိုပါ ဖယ်ရှားပေးနိုင်သော ဓာတုပစ္စည်းများကို အသုံးပြုခြင်းသည် ပွတ်တိုက်မျက်နှာပြင်အတွက် ပိုမိုကောင်းမွန်သော Slip Coefficient ရရှိစေနိုင်သည်။ ထို့ကြောင့် ၎င်းကို 'မသုံးရ' ဟု တားမြစ်ထားခြင်း မရှိပါ။",
      memoryTipMY: "Black scale ဖယ်ရှားခြင်းသည် ပွတ်တိုက်အား (Friction) အတွက် ကောင်းမွန်သည်။"
    }
  },
  {
    id: "2024-16",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>加工<rt>かこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ ပြုပြင်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>材料矯正<rt>ざいりょうきょうせい</rt></ruby>における<ruby>加熱矯正法<rt>かねつきょうせいほう</rt></ruby>には、<ruby>線状加熱<rt>せんじょうかねつ</rt></ruby>、<ruby>点状加熱<rt>てんじょうかねつ</rt></ruby>、くさび<ruby>形加熱<rt>がたかねつ</rt></ruby>がある。", textMY: "သံမဏိဖြောင့်ရာတွင် အသုံးပြုသော အပူပေးနည်းများ၌ လိုင်းလိုက်၊ အစက်လိုက် နှင့် သပ်ပုံစံ အပူပေးနည်းများ ရှိသည်။" },
      { id: 2, textJP: "(2) JASS 6 では<ruby>スカラップ加工<rt>すからっぷかこう</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、ノンスカラップ<ruby>形式<rt>けいしき</rt></ruby>あるいは<ruby>複円型スカラップ形式<rt>ふくえんがたすからっぷけいしき</rt></ruby>によるとしている。", textMY: "JASS 6 တွင် scallop ပြုလုပ်ခြင်းကို အထူးသတ်မှတ်ချက်မရှိပါက non-scallop သို့မဟုတ် double-circle scallop ပုံစံဖြင့် လုပ်ဆောင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>建設省告示第2464号<rt>けんせつしょうこくじだい2464ごう</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>では、400℃を<ruby>超<rt>こ</rt></ruby>える<ruby>加熱<rt>かねつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>加工後<rt>かこうご</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>が<ruby>加工前<rt>かこうまえ</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>であることを<ruby>確<rt>たし</rt></ruby>かめなければならない。", textMY: "၄၀၀°C ထက်ပို၍ အပူပေးပါက ပြုပြင်ပြီးနောက် အရည်အသွေးသည် မူလအတိုင်း ရှိမရှိကို အတည်ပြုရန် လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>切削油<rt>せっさくゆ</rt></ruby>は、<ruby>ブローホール<rt>ぶろーほーる</rt></ruby>や<ruby>割<rt>わ</rt></ruby>れなど<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>となるため、<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "Bevel မျက်နှာပြင်တွင် ကပ်ငြိနေသော ဖြတ်တောက်ဆီများသည် ဂဟေချို့ယွင်းချက်ဖြစ်စေနိုင်သဖြင့် ကောင်းစွာ ဖယ်ရှားရမည်။" },
      { id: 5, textJP: "(5) <ruby>開先加工面<rt>かいさきかこうめん</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>した<ruby>ノッチ<rt>のっち</rt></ruby>のうち、<ruby>深<rt>ふか</rt></ruby>さが 1mm <ruby>以下<rt>いか</rt></ruby>で<ruby>形状<rt>けいじょう</rt></ruby>が<ruby>滑<rt>なめ</rt></ruby>らかなものはそのままでよい。", textMY: "Bevel မျက်နှာပြင်တွင် ဖြစ်ပေါ်သော notch အနက် ၁ mm အောက်ရှိပြီး ပုံသဏ္ဍာန်ချောမွေ့ပါက ပြုပြင်ရန်မလိုဘဲ ဒီအတိုင်း ထားနိုင်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ノッチの補修 (Notch Repair)",
      reasonMY: "Bevel မျက်နှာပြင်တွင် ဖြစ်ပေါ်သော Notch များသည် အနက် ၁ mm အောက်ရှိပြီး ချောမွေ့နေလျှင်ပင် ဂဟေဆက်ရာတွင် ချို့ယွင်းချက်မဖြစ်စေရန် Grinder ဖြင့် တိုက်စားချောမွေ့အောင် ပြုလုပ်ပေးရန် လိုအပ်သည်။ 'ဒီအတိုင်းထားနိုင်သည်' ဟုဆိုခြင်းသည် မှားယွင်းသည်။",
      memoryTipMY: "Notch ဆိုတာ ချို့ယွင်းချက်ရဲ့ အစမို့လို့ Grinder နဲ့ အမြဲတမ်း ပြုပြင်ရမယ်။"
    }
  },
  {
    id: "2024-17",
    questionJP: "<ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>における<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံရှိ ဂဟေဆက်ခြင်း၏ ဝိသေသလက္ခဏာများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>一般目的<rt>いっぱんもくてき</rt></ruby>に、<ruby>溶接延長<rt>ようせつえんちょう</rt></ruby>が<ruby>短い部位<rt>みじかいぶい</rt></ruby>には<ruby>サブマージアーク溶接<rt>さぶまーじあーくようせつ</rt></ruby>が<ruby>採用<rt>さいよう</rt></ruby>される。", textMY: "ယေဘုယျအားဖြင့် ဂဟေဆက်အရှည် တိုတောင်းသော နေရာများတွင် Submerged Arc Welding (SAW) ကို အသုံးပြုလေ့ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接部<rt>ようせつぶ</rt></ruby>では、<ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>片面溶接<rt>かためんようせつ</rt></ruby>とするのが<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "Full Penetration Weld များတွင် Backing Metal ကိုသုံး၍ တစ်ဖက်တည်းမှ ဂဟေဆက်ခြင်းသည် ယေဘုယျဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>仕口部<rt>しぐちぶ</rt></ruby>には<ruby>適正<rt>てきせい</rt></ruby>な<ruby>溶接施工計画<rt>ようせつせこうけいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てなければならない。", textMY: "တိုင်နှင့် မြားတန်း ဆုံမှတ် (Joint) နေရာများတွင် သင့်လျော်သော ဂဟေဆက်လုပ်ငန်းစီမံကိန်းကို ရေးဆွဲရမည်။" },
      { id: 4, textJP: "(4) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>は、<ruby>安定<rt>あんてい</rt></ruby>した<ruby>溶接品質<rt>ようせつひんしつ</rt></ruby>の<ruby>維持<rt>いじ</rt></ruby>が<ruby>可能<rt>かのう</rt></ruby>である。", textMY: "Robot Welding သည် တည်ငြိမ်သော ဂဟေအရည်အသွေးကို ထိန်းသိမ်းနိုင်သည်။" },
      { id: 5, textJP: "(5) 590N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby>などは<ruby>溶接条件<rt>ようせつじょうけん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "590N/mm² အဆင့်ရှိ သံမဏိများအတွက် ဂဟေဆက်အခြေအနေများကို အထူးအတည်ပြုရန် လိုအပ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - サブマージアーク溶接 (Submerged Arc Welding)",
      reasonMY: "Submerged Arc Welding (SAW) သည် စက်ပစ္စည်း တပ်ဆင်ရန် အချိန်ယူရသဖြင့် ဂဟေဆက်အရှည် ရှည်လျားသော (溶接延長が長い) နေရာများတွင်သာ စွမ်းဆောင်ရည်မြင့်မားပြီး တွက်ခြေကိုက်သည်။ အရှည်တိုသောနေရာများတွင် ၎င်းကို အသုံးမပြုပါ။",
      memoryTipMY: "SAW = စက်အကြီးစား = အရှည်ကြီးတွေဆက်ဖို့ (Long length welding)။"
    }
  },
  {
    id: "2024-18",
    questionJP: "<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>および<ruby>溶接<rt>ようせつ</rt></ruby>オペレータに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆော်သူနှင့် စက်မောင်းနှင်သူများ၏ အရည်အချင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>は JIS Z 3801 の<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Covered Arc Welding လုပ်ကိုင်သူသည် JIS Z 3801 အရည်အချင်းရှိသူ ဖြစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>半自動溶接<rt>はんじどうようせつ</rt></ruby>は JIS Z 3841 の<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Semi-automatic Welding လုပ်ကိုင်သူသည် JIS Z 3841 အရည်အချင်းရှိသူ ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>サブマージアーク溶接<rt>さぶまーじあーくようせつ</rt></ruby>オペレータは<ruby>基本級<rt>きほんきゅう</rt></ruby>の<ruby>合格者<rt>ごうかくしゃ</rt></ruby>とする。", textMY: "Submerged Arc Welding (SAW) စက်မောင်းသူသည် အခြေခံအဆင့် (Basic level) အောင်မြင်ထားသူ ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>エレクトロスラグ溶接<rt>えれくとろすらぐようせつ</rt></ruby>オペレータは<ruby>専門級<rt>せんもんきゅう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Electroslag Welding (ESW) စက်မောင်းသူသည် ကျွမ်းကျင်အဆင့် (Professional level) လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>オペレータは JIS Z 3841 の<ruby>基本級<rt>きほんきゅう</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Robot Welding စက်မောင်းသူသည် JIS Z 3841 အခြေခံအဆင့် အောင်မြင်ထားသူ ဖြစ်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接資格 (Welding Qualification)",
      reasonMY: "SAW နှင့် ESW ကဲ့သို့သော အလိုအလျောက် ဂဟေဆက်စက်များကို မောင်းနှင်သူများသည် အခြေခံအဆင့် (基本級) သာမက ၎င်းနှင့် သက်ဆိုင်သော အထူးပြု ကျွမ်းကျင်အဆင့် (専門級) ကိုပါ ရရှိထားရန် လိုအပ်သည်။ SAW အတွက် အခြေခံအဆင့်ဖြင့်သာ လုံလောက်သည်ဟု ဆိုခြင်းသည် မှားယွင်းသည်။",
      memoryTipMY: "စက်ကြီးတွေ (SAW, ESW) မောင်းရင် 専門級 (Pro level) လိုတယ်။"
    }
  },
  {
    id: "2024-19",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>下向き姿勢<rt>したむきしせい</rt></ruby>で<ruby>溶接<rt>ようせつ</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "တတ်နိုင်သမျှ အောက်စိုက်အနေအထား (Flat position) ဖြင့် ဂဟေဆက်ခြင်းသည် အကောင်းဆုံးဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶接変形<rt>ようせつへんけい</rt></ruby>ができるだけ<ruby>小<rt>ちい</rt></ruby>さくなる<ruby>順序<rt>じゅんじょ</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>する。", textMY: "ဂဟေကြောင့် ပုံပျက်မှု အနည်းဆုံးဖြစ်စေမည့် အစီအစဉ်ကို ရွေးချယ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>気温<rt>きおん</rt></ruby>が -5℃ を<ruby>下回<rt>したまわ</rt></ruby>る<ruby>場合<rt>ばあい</rt></ruby>は、いかなる<ruby>場合<rt>ばあい</rt></ruby>も<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならない。", textMY: "အပြင်အပူချိန် -၅ ဒီဂရီအောက် ရောက်ပါက မည်သည့်အခြေအနေမျိုးတွင်မဆို ဂဟေကို လုံးဝ မဆက်ရ။" },
      { id: 4, textJP: "(4) <ruby>低水素系<rt>ていすいそけい</rt></ruby>とワイヤでは、ワイヤの<ruby>方<rt>ほう</rt></ruby>が<ruby>予熱温度<rt>よねつおんど</rt></ruby>を<ruby>低<rt>ひく</rt></ruby>くできる。", textMY: "Low-hydrogen rod နှင့် Weld wire နှိုင်းယှဉ်လျှင် wire က ကြိုတင်အပူပေးရန် (Preheat) အပူချိန် ပိုနည်းနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>水分<rt>すいぶん</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は<ruby>加熱乾燥<rt>かねつかんそう</rt></ruby>して<ruby>溶接<rt>ようせつ</rt></ruby>する。", textMY: "စိုထိုင်းမှုရှိပါက အပူပေးအခြောက်ခံပြီးမှ ဂဟေဆက်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 低温時の溶接 (Low Temperature)",
      reasonMY: "အပြင်အပူချိန် -၅ ဒီဂရီအောက် ရောက်လျှင်ပင် ဂဟေဆက်မည့်နေရာ၏ ပတ်လည် ၁၀၀ mm ခန့်ကို ကြိုတင်အပူပေးခြင်း (Preheating) ပြုလုပ်ပြီး စည်းကမ်းချက်များနှင့်အညီ လုပ်ဆောင်နိုင်ပါသည်။ 'လုံးဝမလုပ်ရ' ဟူသော ဖော်ပြချက်သည် မှားယွင်းသည်။",
      memoryTipMY: "-5℃ အောက်ရောက်ရင် Preheat လုပ်ပြီး ဆက်လို့ရတယ်။"
    }
  },
  {
    id: "2024-20",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼製エンドタブ<rt>こうせいえんどたぶ</rt></ruby>は、<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>を<ruby>継手外<rt>つぎてがい</rt></ruby>に<ruby>逃<rt>に</rt></ruby>がすためのものである。", textMY: "Steel End Tab သည် အတွင်းပိုင်းချို့ယွင်းချက်များကို ဂဟေဆက်အစွန်းပြင်ပသို့ ရောက်ရှိစေရန် အသုံးပြုခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>エンドタブ<rt>えんどたぶ</rt></ruby>の<ruby>長さ<rt>ながさ</rt></ruby>は、<ruby>一律<rt>いちりつ</rt></ruby> 30~50mm とする。", textMY: "End Tab ၏ အရှည်သည် အမြဲတမ်း ၃၀ မှ ၅၀ mm အတွင်း ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>固形エンドタブ<rt>こけいえんどたぶ</rt></ruby>は、<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>のたれ<ruby>落<rt>お</rt></ruby>ちを<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "Ceramic End Tab များသည် အရည်ပျော်နေသော သတ္တုများ စီးကျခြင်းကို ကာကွယ်ပေးသည်။" },
      { id: 4, textJP: "(4) <ruby>裏当て金<rt>うらあてがね</rt></ruby>は、<ruby>初層<rt>しょそう</rt></ruby>の<ruby>溶<rt>と</rt></ruby>け<ruby>落<rt>お</rt></ruby>ちを<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "Backing Metal သည် ပထမအလွှာ (Root pass) အရည်ပျော်ကျခြင်းကို ကာကွယ်ပေးသည်။" },
      { id: 5, textJP: "(5) <ruby>裏はつり<rt>うらはつり</rt></ruby>は、<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>にも<ruby>行<rt>おこな</rt></ruby>われる。", textMY: "Back Gouging ကို ဂဟေချို့ယွင်းချက်များ ဖယ်ရှားရာတွင်လည်း အသုံးပြုသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - エンドタブ (End Tab)",
      reasonMY: "End Tab ၏ အရှည်သည် ဂဟေဆက်ရမည့် ပစ္စည်း၏ အထူနှင့် ဂဟေဆက်နည်းစနစ်အပေါ် မူတည်ပြီး ကွဲပြားနိုင်သည်။ 'အမြဲတမ်း ၃၀-၅၀ mm' ဟု သတ်မှတ်ထားခြင်း မရှိပါ။",
      memoryTipMY: "End Tab အရှည်သည် အထူ (Plate Thickness) ပေါ်မူတည်၍ ပြောင်းလဲနိုင်သည်။"
    }
  },
  {
    id: "2024-21",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding ၏ အခြေအနေများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>とパス<ruby>間温度<rt>かんおんど</rt></ruby>の<ruby>管理値<rt>かんりち</rt></ruby>が<ruby>定<rt>さだ</rt></ruby>められている。", textMY: "Heat Input နှင့် Interpass Temperature တို့အတွက် ထိန်းချုပ်ရမည့် တန်ဖိုးများကို သတ်မှတ်ထားသည်။" },
      { id: 2, textJP: "(2) <ruby>高強度<rt>こうきょうど</rt></ruby>のワイヤにより、<ruby>入熱<rt>にゅうねつ</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きく<ruby>設定<rt>せってい</rt></ruby>できる。", textMY: "ပိုမိုခိုင်မာသော Wire ကို သုံးခြင်းဖြင့် Heat Input ကို ပိုမိုများပြားစွာ သတ်မှတ်နိုင်သည်။" },
      { id: 3, textJP: "(3) パス<ruby>間温度<rt>かんおんど</rt></ruby>は、<ruby>開先<rt>かいさき</rt></ruby>から 10mm の<ruby>位置<rt>いち</rt></ruby>で<ruby>計測<rt>けいそく</rt></ruby>する。", textMY: "Interpass Temperature ကို Bevel အစွန်းမှ ၁၀ mm အကွာတွင် တိုင်းတာရမည်။" },
      { id: 4, textJP: "(4) STKRより<ruby>鋼板<rt>こうはん</rt></ruby>・<ruby>形鋼<rt>かたこう</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>管理<rt>かんり</rt></ruby>が<ruby>厳<rt>きび</rt></ruby>しくなっている。", textMY: "Square pipe ထက် သံပြား သို့မဟုတ် Shape steel များ၏ စီမံခန့်ခွဲမှုက ပိုမိုတင်းကြပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>ワイヤ突き出し長さ<rt>わいやつきだしながさ</rt></ruby>などを<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Wire ထွက်နေသောအရှည် (Stick-out) စသည်တို့ကို စီမံခန့်ခွဲရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接入熱の制限 (Heat Input)",
      reasonMY: "Wire ၏ ခိုင်မာမှု (Tensile Strength) မြင့်မားလေလေ၊ Heat Input ကို ပိုမို တင်းကျပ်စွာ ထိန်းချုပ်ရန် လိုအပ်လေလေ ဖြစ်သည်။ Heat Input များလွန်းပါက Toughness ကျဆင်းစေနိုင်သဖြင့် 'ကြီးမားစွာသတ်မှတ်နိုင်သည်' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Wire ကောင်းလေ Heat Input ကို ပိုသတိထားရလေ။"
    }
  },
  {
    id: "2024-22",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>（<ruby>継手<rt>つぎて</rt></ruby>）の<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း (အဆက်) ၏ ဝိသေသလက္ခဏာများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>継手効率<rt>つぎてこうりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い。", textMY: "Joint Efficiency မြင့်မားသည်။" },
      { id: 2, textJP: "(2) <ruby>継手構造<rt>つぎてこうぞう</rt></ruby>を<ruby>簡素化<rt>かんそか</rt></ruby>できる。", textMY: "အဆက်ဖွဲ့စည်းပုံကို ရိုးရှင်းစေနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>厚さ<rt>あつさ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>制約<rt>せいやく</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい。", textMY: "အထူနှင့် ပတ်သက်သော ကန့်သတ်ချက်များ များပြားသည်။" },
      { id: 4, textJP: "(4) <ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>節約<rt>せつやく</rt></ruby>できる。", textMY: "ပစ္စည်းကို ချွေတာနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>水密性<rt>すいみつせい</rt></ruby>、<ruby>気密性<rt>きみつせい</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れている。", textMY: "ရေလုံခြင်း၊ လေလုံခြင်းတို့တွင် ထူးကဲသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接の厚さ制約",
      reasonMY: "ဂဟေဆက်ခြင်းသည် ပစ္စည်း၏ အထူမည်မျှပင်ရှိစေကာမူ (ပါးလွှာသောပြားမှ အလွန်ထူသောပြားအထိ) နည်းစနစ်အမျိုးမျိုးဖြင့် ဆက်နိုင်သောကြောင့် 'အထူဆိုင်ရာ ကန့်သတ်ချက်များစွာရှိသည်' ဟုဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "ဂဟေသည် အထူအမျိုးမျိုးကို ဆက်ရန်အတွက် လိုက်လျောညီထွေရှိသည်။"
    }
  },
  {
    id: "2024-23",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外部<rt>がいぶ</rt></ruby>からのガスで<ruby>大気<rt>たいき</rt></ruby>から<ruby>遮蔽<rt>しゃへい</rt></ruby>する。", textMY: "ပြင်ပမှ Gas ကိုသုံး၍ လေထုနှင့် ထိတွေ့မှုကို တားဆီးပေးသည်။" },
      { id: 2, textJP: "(2) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>では<ruby>主<rt>おも</rt></ruby>に<ruby>ミグ溶接<rt>みぐようせつ</rt></ruby>が<ruby>使用<rt>しよう</rt></ruby>されている。", textMY: "သံမဏိတည်ဆောက်ပုံများတွင် MIG Welding ကို အဓိက အသုံးပြုသည်။" },
      { id: 3, textJP: "(3) <ruby>シールドガス<rt>しーるどがす</rt></ruby>には<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>などが<ruby>使用<rt>しよう</rt></ruby>される。", textMY: "အကာအကွယ် Gas အဖြစ် CO2 စသည်တို့ကို အသုံးပြုသည်။" },
      { id: 4, textJP: "(4) <ruby>大気<rt>たいき</rt></ruby>が<ruby>混入<rt>こんにゅう</rt></ruby>すると<ruby>靭性<rt>じんせい</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "လေထုနှင့် ရောနှောပါက Toughness ကျဆင်းစေသည်။" },
      { id: 5, textJP: "(5) <ruby>付属装置<rt>ふぞくそうち</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>という<ruby>欠点<rt>けってん</rt></ruby>がある。", textMY: "ဆက်စပ်ကိရိယာများစွာ လိုအပ်သည့် အားနည်းချက် ရှိသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - マグ溶接 vs ミグ溶接",
      reasonMY: "သံမဏိတည်ဆောက်ပုံ (Architectural Steel) များတွင် CO2 Gas သို့မဟုတ် Mixed Gas ကို အသုံးပြုသော MAG Welding (Metal Active Gas) ကို အဓိက အသုံးပြုပါသည်။ MIG Welding (Metal Inert Gas) သည် အများအားဖြင့် Aluminum သို့မဟုတ် Stainless Steel များတွင်သာ သုံးသည်။",
      memoryTipMY: "သံမဏိ (Steel) = MAG၊ အလူမီနီယံ (Aluminum) = MIG။"
    }
  },
  {
    id: "2024-24",
    questionJP: "<ruby>アーク溶接<rt>あーくようせつ</rt></ruby>および<ruby>アーク溶接機<rt>あーくようせつき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Arc Welding နှင့် Arc Welding Machine နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>低電圧<rt>ていでんあつ</rt></ruby>、<ruby>高電流<rt>こうでんりゅう</rt></ruby>のアーク<ruby>熱<rt>ねつ</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>する。", textMY: "ဗို့အားနိမ့်ပြီး အမ်ပီယာမြင့်သော Arc အပူကို အသုံးပြုသည်။" },
      { id: 2, textJP: "(2) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>には<ruby>定電流特性<rt>ていでんりゅうとくせい</rt></ruby>が<ruby>用<rt>もち</rt></ruby>いられる。", textMY: "Gas Shielded Arc Welding တွင် Constant Current (CC) စနစ်ကို အသုံးပြုသည်။" },
      { id: 3, textJP: "(3) <ruby>アーク<rt>あーく</rt></ruby>が<ruby>偏向<rt>へんこう</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>磁気吹き<rt>じきふき</rt></ruby>という。", textMY: "Arc လမ်းကြောင်း လွဲသွားခြင်းကို Arc Blow (磁気吹き) ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>交流アーク溶接機<rt>こうりゅうあーくようせつき</rt></ruby>には<ruby>自動電撃防止装置<rt>じどうでんげきぼうしそうち</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "AC Arc Welding စက်တွင် အလိုအလျောက် ရှော့ခ်ကာကွယ်ရေး ကိရိယာ လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>定格使用率<rt>ていかくしようりつ</rt></ruby>の<ruby>範囲内<rt>はんいない</rt></ruby>で<ruby>使用時間<rt>しようじかん</rt></ruby>を<ruby>制限<rt>せいげん</rt></ruby>する。", textMY: "သတ်မှတ်ထားသော Duty Cycle အတွင်းသာ အလုပ်ချိန်ကို ကန့်သတ်ရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 定電圧特性 (Constant Voltage)",
      reasonMY: "Gas Shielded Arc Welding (GMAW/MAG) တွင် အလိုအလျောက် Wire ကျွေးသည့်စနစ် ပါဝင်သောကြောင့် Arc အရှည်ကို တည်ငြိမ်စေရန် Constant Voltage (CV - 定電圧特性) စနစ်ကို အသုံးပြုရမည်။ Constant Current (CC) ကို ဒုတ်ဂဟေ (SMAW) တွင်သာ သုံးသည်။",
      memoryTipMY: "Gas welding = Constant Voltage (CV)။ Manual welding = Constant Current (CC)။"
    }
  },
  {
    id: "2024-25",
    questionJP: "<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>と<ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Heat Input နှင့် Interpass Temperature နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>組織<rt>そしき</rt></ruby>は<ruby>冷却条件<rt>れいきゃくじょうけん</rt></ruby>によって<ruby>大きく変化<rt>おおきくへんか</rt></ruby>する。", textMY: "ဖွဲ့စည်းပုံသည် အအေးခံနှုန်းပေါ်မူတည်၍ များစွာ ပြောင်းလဲနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>は<ruby>次<rt>つぎ</rt></ruby>のパスを<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>直前<rt>ちょくぜん</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>である。", textMY: "Interpass Temperature ဆိုသည်မှာ နောက်တစ်လွှာ မဆက်မီ ဂဟေဆက်နေရာ၏ အပူချိန် ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>が<ruby>過大<rt>かだい</rt></ruby>になると<ruby>結晶粒<rt>けっしょうりゅう</rt></ruby>を<ruby>粗大化<rt>そだいか</rt></ruby>させる。", textMY: "Interpass Temperature များလွန်းပါက Crystal grain များ ကြီးထွားလာပြီး ပျော့သွားစေသည်။" },
      { id: 4, textJP: "(4) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は 1 <ruby>分間<rt>ふんかん</rt></ruby>で<ruby>消費<rt>しょうひ</rt></ruby>される<ruby>電気<rt>でんき</rt></ruby>エネルギー<ruby>量<rt>りょう</rt></ruby>である。", textMY: "Heat Input ဆိုသည်မှာ တစ်မိနစ်အတွင်း အသုံးပြုလိုက်သော လျှပ်စစ်စွမ်းအင် ပမာဏ ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>適切<rt>てきせつ</rt></ruby>な<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>・<ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "သင့်လျော်သော Heat Input နှင့် Interpass Temperature အခြေအနေများကို လိုက်နာရန် လိုအပ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接入熱 (Heat Input)",
      reasonMY: "Heat Input (溶接入熱) ဆိုသည်မှာ တစ်မိနစ်အတွင်း အသုံးပြုသော စွမ်းအင် မဟုတ်ဘဲ၊ 'ဂဟေဆက်အရှည် ၁ စင်တီမီတာ (သို့မဟုတ် ၁ မီလီမီတာ)' အတွက် အသုံးပြုလိုက်သော စွမ်းအင်ပမာဏ ဖြစ်သည်။ ယူနစ်မှာ J/cm သို့မဟုတ် J/mm ဖြစ်သည်။",
      memoryTipMY: "Heat Input = 'ယူနစ်အရှည်' အတွက် အပူ၊ 'အချိန်' အတွက် မဟုတ်ပါ။"
    }
  },
  {
    id: "2024-26",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding ၏ ပစ္စည်းများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 520N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby>に<ruby>適合<rt>てきごう</rt></ruby>する<ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>は YGW11 <ruby>等<rt>とう</rt></ruby>である。", textMY: "520N/mm² အဆင့် သံမဏိများအတွက် သင့်လျော်သော wire မှာ YGW11 ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶接金属中<rt>ようせつきんぞくちゅう</rt></ruby>の<ruby>水素含有量<rt>すいそがんゆうりょう</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>。", textMY: "ဂဟေသားအတွင်း ဟိုက်ဒရိုဂျင် ပါဝင်မှု ပမာဏ များပြားသည်။" },
      { id: 3, textJP: "(3) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>または<ruby>フラックス入りワイヤ<rt>ふらっくすいりわいや</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Solid wire သို့မဟုတ် Flux-cored wire ကို အသုံးပြုသည်။" },
      { id: 4, textJP: "(4) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>は<ruby>酸素<rt>さんそ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>役割<rt>やくわり</rt></ruby>がある。", textMY: "Solid wire တွင် အောက်ဆီဂျင်ကို ဖယ်ရှားပေးသော (Deoxidation) တာဝန် ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>シールドガス<rt>しーるどがす</rt></ruby>によって<ruby>ワイヤ<rt>わいや</rt></ruby>を<ruby>使い分ける<rt>つかいわける</rt></ruby>。", textMY: "Gas အမျိုးအစားအလိုက် Wire ကို ရွေးချယ် အသုံးပြုရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 水素含有量 (Hydrogen Content)",
      reasonMY: "Gas Shielded Arc Welding (GMAW/MAG) သည် Rod ဂဟေ (SMAW) နှင့် နှိုင်းယှဉ်ပါက ဂဟေသားအတွင်း ဟိုက်ဒရိုဂျင် ပါဝင်မှု အလွန်နည်းပါးသောကြောင့် Cold Cracking ဖြစ်နိုင်ခြေ နည်းပါးသည်။ 'များပြားသည်' ဟုဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Gas welding = Hydrogen နည်းသည်။"
    }
  },
  {
    id: "2024-27",
    questionJP: "JASS 6における<ruby>溶融亜鉛めっき部材<rt>ようゆうあえんめっきぶざい</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သွပ်ရည်စိမ်ပစ္စည်းများ ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>片面溶接<rt>かためんようせつ</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "တစ်ဖက်တည်းမှ ဂဟေဆက် (Single-sided welding) ပြုလုပ်လိုပါက ကြီးကြပ်သူ၏ ခွင့်ပြုချက် လိုအပ်သည်။" },
      { id: 2, textJP: "(2) <ruby>めっき抜き<rt>めっきぬき</rt></ruby>は<ruby>スカラップ<rt>すからっぷ</rt></ruby>の<ruby>代<rt>か</rt></ruby>わりに<ruby>円形孔<rt>えんけいこう</rt></ruby>を<ruby>設ける<rt>もうける</rt></ruby>。", textMY: "သွပ်ရည်များ စီးထွက်နိုင်ရန် (Drain hole) အတွက် scallop အစား အဝိုင်းပေါက်များကို အသုံးပြုသည်။" },
      { id: 3, textJP: "(3) <ruby>溶接始終端<rt>ようせつしじゅうたん</rt></ruby>には<ruby>鋼製エンドタブ<rt>こうせいえんどたぶ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けなければならない。", textMY: "ဂဟေအစနှင့် အဆုံးတွင် ချို့ယွင်းချက်မရှိစေရန် Steel End Tab များကို မဖြစ်မနေ တပ်ဆင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>検査<rt>けんさ</rt></ruby>や<ruby>補修<rt>ほしゅう</rt></ruby>は<ruby>めっき後<rt>めっきご</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "စစ်ဆေးခြင်းနှင့် ပြုပြင်ခြင်းများကို သွပ်ရည်စိမ်ပြီးနောက်မှ လုပ်ဆောင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>重ねる面積<rt>かさねるめんせき</rt></ruby>は 400cm² <ruby>以下<rt>いか</rt></ruby>が<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "သံပြားများ ထပ်သည့် ဧရိယာကို ၄၀၀ cm² အောက်တွင် ထားရှိခြင်းသည် အကောင်းဆုံးဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - めっき前の検査 (Inspection before plating)",
      reasonMY: "သွပ်ရည်စိမ်ပြီးပါက ဂဟေဆက်ဧရိယာ၏ အတွင်းပိုင်းချို့ယွင်းချက်များကို စစ်ဆေးရန် ခက်ခဲသောကြောင့်၊ အမြင်စစ်ဆေးခြင်း (Visual) နှင့် UT စစ်ဆေးခြင်းများကို သွပ်ရည်မစိမ်မီ (めっき前) ကြိုတင် လုပ်ဆောင်ရမည်။",
      memoryTipMY: "စစ်ဆေးခြင်း (Inspection) နှင့် ပြုပြင်ခြင်း (Repair) သည် သွပ်ရည်မစိမ်မီ (Plating) လုပ်ရမည်။"
    }
  },
  {
    id: "2024-28",
    questionJP: "<ruby>輸送<rt>ゆそう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သယ်ယူပို့ဆောင်ရေးနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品符号<rt>せいひんふごう</rt></ruby>は<ruby>容易<rt>ようい</rt></ruby>に<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>りできる<ruby>位置<rt>いち</rt></ruby>に<ruby>表示<rt>ひょうじ</rt></ruby>する。", textMY: "ပစ္စည်းအမှတ်အသားများကို လွယ်ကူစွာ ဖတ်နိုင်သော နေရာတွင် ရေးသားရမည်။" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby><ruby>段階<rt>だんかい</rt></ruby>で<ruby>寸法<rt>すんぽう</rt></ruby>や<ruby>重量<rt>じゅうりょう</rt></ruby>を<ruby>計画<rt>けいかく</rt></ruby>する。", textMY: "စက်ရုံထုတ်လုပ်မှုပုံစံ (Shop Drawing) အဆင့်တွင် အရွယ်အစားနှင့် အလေးချိန်ကို စီစဉ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>単品重量<rt>たんぴんじゅうりょう</rt></ruby>が 1t を<ruby>超<rt>こ</rt></ruby>える<ruby>場合<rt>ばあい</rt></ruby>は<ruby>表示<rt>ひょうじ</rt></ruby>が<ruby>義務付<rt>ぎむづ</rt></ruby>けられている。", textMY: "ပစ္စည်းတစ်ခုချင်း အလေးချိန် ၁ တန်ကျော်ပါက အလေးချိန်ကို ရေးသားရန် မဖြစ်မနေ လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>道路法<rt>どうろほう</rt></ruby>や<ruby>道路交通法<rt>どうろこうつうほう</rt></ruby>による<ruby>規制<rt>きせい</rt></ruby>がある。", textMY: "လမ်းဥပဒေနှင့် ယာဉ်စည်းကမ်းအရ ကန့်သတ်ချက်များ ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>輸送要領<rt>ゆそうようりょう</rt></ruby>は<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>を<ruby>得<rt>え</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "သယ်ယူပို့ဆောင်ရေး အစီအစဉ်ကို တည်ဆောက်သူ၏ ခွင့်ပြုချက် ရယူရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 重量表示 (Weight Display)",
      reasonMY: "သံမဏိပစ္စည်းများပေါ်တွင် အလေးချိန် ရေးသားရန် မဖြစ်မနေ လိုအပ်သော (義務) အလေးချိန်မှာ ၃ တန် (3t) နှင့်အထက် ဖြစ်သည်။ ၁ တန် မဟုတ်ပါ။",
      memoryTipMY: "အလေးချိန်ရေးရန် လိုအပ်သည်မှာ 3t အထက် ဖြစ်သည်။"
    }
  },
  {
    id: "2024-33",
    questionJP: "<ruby>試験<rt>しけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စမ်းသပ်မှုများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>シャルピー衝撃試験<rt>しゃるぴーしょうげきしけん</rt></ruby>は<ruby>吸収エネルギー<rt>きゅうしゅうえねるぎー</rt></ruby>を<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "Charpy Impact Test သည် စုပ်ယူနိုင်သော စွမ်းအင် (Absorbed Energy) ကို တိုင်းတာသည်။" },
      { id: 2, textJP: "(2) <ruby>曲げ試験<rt>まげしけん</rt></ruby>は<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>変形能力<rt>へんけいのうりょく</rt></ruby>を<ruby>調べる<rt>しらべる</rt></ruby>。", textMY: "Bending Test သည် ပစ္စည်း၏ ပုံပျက်ခံနိုင်စွမ်းကို စစ်ဆေးသည်။" },
      { id: 3, textJP: "(3) SN<ruby>材<rt>ざい</rt></ruby>ではJISにおいて<ruby>曲げ試験<rt>まげしけん</rt></ruby>は<ruby>要求<rt>ようきゅう</rt></ruby>されていない。", textMY: "SN Material အတွက် JIS တွင် Bending Test ကို တောင်းဆိုထားခြင်း မရှိပါ။" },
      { id: 4, textJP: "(4) <ruby>引張試験<rt>ひっぱりしけん</rt></ruby>は<ruby>降伏点<rt>こうふくてん</rt></ruby>や<ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>を<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "Tensile Test သည် Yield Point နှင့် Tensile Strength တို့ကို တိုင်းတာသည်။" },
      { id: 5, textJP: "(5) <ruby>硬さ試験<rt>かたさしけん</rt></ruby>は<ruby>表面<rt>ひょうめん</rt></ruby>の<ruby>硬度<rt>こうど</rt></ruby>ကို <ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "Hardness Test သည် မျက်နှာပြင်၏ မာကျောမှုကို တိုင်းတာသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN材の曲げ試験 (SN Steel Bend Test)",
      reasonMY: "သံမဏိပစ္စည်းများ၏ JIS စံနှုန်းအရ SN Material (建築構造用圧延鋼材) များအတွက် Bending Test ကို မဖြစ်မနေ လုပ်ဆောင်ရန် သတ်မှတ်ထားပါသည်။ 'တောင်းဆိုမထားပါ' ဟု ဆိုခြင်းသည် မှားယွင်းသည်။",
      memoryTipMY: "SN Steel သည် JIS စံနှုန်းအရ Bending Test လိုအပ်သည်။"
    }
  },
  {
    id: "2024-34",
    questionJP: "<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>および<ruby>外注品検査<rt>がいちゅうひんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းဝယ်ယူမှုနှင့် အပြင်ကန်ထရိုက်ပေးမှု စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>自ら実施<rt>みずからじっし</rt></ruby>するか<ruby>確認<rt>かくにん</rt></ruby>しなければならない。", textMY: "သံမဏိထုတ်လုပ်သူသည် စစ်ဆေးမှုကို ကိုယ်တိုင်လုပ်ဆောင်ခြင်း ရှိမရှိ အတည်ပြုရမည်။" },
      { id: 2, textJP: "(2) <ruby>鋼材管理責任者<rt>こうざいかんりせきにんしゃ</rt></ruby>が<ruby>照合<rt>しょうごう</rt></ruby>や<ruby>外観検査<rt>がいかんけんさ</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "သံမဏိစီမံခန့်ခွဲမှု တာဝန်ခံက တိုက်ဆိုင်စစ်ဆေးခြင်းနှင့် အပြင်ပန်းစစ်ဆေးခြင်းကို လုပ်ဆောင်သည်။" },
      { id: 3, textJP: "(3) <ruby>不合格品<rt>ふごうかくひん</rt></ruby>は<ruby>誤って使用<rt>あやまってしよう</rt></ruby>されないように<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "မအောင်မြင်သောပစ္စည်းများကို မှားယွင်းအသုံးမပြုမိစေရန် စီမံခန့်ခွဲရမည်။" },
      { id: 4, textJP: "(4) <ruby>証明書<rt>しょうめいしょ</rt></ruby>との<ruby>照合<rt>しょうごう</rt></ruby>が<ruby>不可能<rt>ふかのう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>は<ruby>材料試験<rt>ざいりょうしけん</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "လက်မှတ်နှင့် တိုက်ဆိုင်ရန် မဖြစ်နိုင်ပါက ပစ္စည်းစမ်းသပ်မှုကို လုပ်ဆောင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>現品<rt>げんぴん</rt></ruby>の<ruby>識別表示<rt>しきべつひょうじ</rt></ruby>だけで<ruby>品質<rt>ひんしつ</rt></ruby>ကို <ruby>保証<rt>ほしょう</rt></ruby>できる。", textMY: "ပစ္စည်းပေါ်ရှိ အမှတ်အသားတစ်ခုတည်းဖြင့် အရည်အသွေးကို အာမခံနိုင်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 品質保証 (Quality Assurance)",
      reasonMY: "သံမဏိပစ္စည်း၏ အရည်အသွေးကို အာမခံရန်အတွက် ပစ္စည်းပေါ်ရှိ အမှတ်အသား (Identification mark) တစ်ခုတည်းဖြင့် မလုံလောက်ပါ။ ၎င်းနှင့်အတူ Mill Sheet (鋼材検査証明書) ပါ အချက်အလက်များနှင့် တိုက်ဆိုင်စစ်ဆေးမှုများ လိုအပ်သည်။",
      memoryTipMY: "Identification mark + Mill Sheet နှစ်ခုလုံး လိုအပ်သည်။"
    }
  },
  {
    id: "2024-35",
    questionJP: "JASS 6の<ruby>社内検査<rt>しゃないけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ စက်ရုံတွင်းစစ်ဆေးမှု (Internal Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>として<ruby>記録<rt>きろく</rt></ruby>し、<ruby>提出<rt>ていしゅつ</rt></ruby>する。", textMY: "စက်ရုံတွင်းစစ်ဆေးမှုရလဒ်ဇယားအဖြစ် မှတ်တမ်းတင်ပြီး တင်ပြရမည်။" },
      { id: 2, textJP: "(2) <ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>は<ruby>設計寸法<rt>せっけいすんぽう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>差<rt>さ</rt></ruby>を<ruby>記録<rt>きろく</rt></ruby>する。", textMY: "အတိုင်းအတာစစ်ဆေးမှုတွင် ဒီဇိုင်းနှင့် ကွာခြားချက် (Tolerance) ကို မှတ်တမ်းတင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>柱<rt>はしら</rt></ruby>や<ruby>梁<rt>はり</rt></ruby>の<ruby>寸法<rt>すんぽう</rt></ruby>については<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>とする。", textMY: "တိုင်နှင့် မြားတန်းများ၏ အတိုင်းအတာကို နမူနာကောက်ယူ စစ်ဆေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>は<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>した<ruby>方法<rt>ほうほう</rt></ruby>とする。", textMY: "ဂဟေဆက်စစ်ဆေးမှုကို လက်ခံစစ်ဆေးမှုနှင့် ကိုက်ညီသော နည်းလမ်းဖြင့် လုပ်ဆောင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>社内検査要領書<rt>しゃないけんさようりょうしょ</rt></ruby>は<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>収録<rt>しゅうろく</rt></ruby>する。", textMY: "စစ်ဆေးမှုလမ်းညွှန်ချက်ကို ထုတ်လုပ်မှုလမ်းညွှန်တွင် ထည့်သွင်းရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 全数検査 (Full Inspection)",
      reasonMY: "တိုင် (Column) နှင့် မြားတန်း (Beam) တို့၏ အတိုင်းအတာများသည် အဆောက်အဦ၏ ဖွဲ့စည်းပုံအတွက် အလွန်အရေးကြီးသောကြောင့် ၎င်းတို့ကို နမူနာကောက်ယူစစ်ဆေးခြင်း (抜取検査) မဟုတ်ဘဲ အားလုံးကို (全数検査) စစ်ဆေးရမည်။",
      memoryTipMY: "အဓိက အစိတ်အပိုင်းများ၏ အတိုင်းအတာကို အားလုံး (100%) စစ်ဆေးရမည်။"
    }
  },
  {
    id: "2024-36",
    questionJP: "<ruby>付属金物<rt>ふぞくかなもの</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆက်စပ်ပစ္စည်း (Miscellaneous/Secondary Steel) များနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>安全<rt>あんぜん</rt></ruby>ネット<ruby>取付けピース<rt>とりつけぴーす</rt></ruby>などがある。", textMY: "ဘေးကင်းရေးပိုက်ကွန် တပ်ဆင်ရန် အစိတ်အပိုင်းများ ပါဝင်သည်။" },
      { id: 2, textJP: "(2) <ruby>設備関連<rt>せつびかんれん</rt></ruby>には<ruby>ダクトスリーブ<rt>だくとすりーぶ</rt></ruby>などがある。", textMY: "စက်ပစ္စည်းများအတွက် Duct sleeve များ ပါဝင်သည်။" },
      { id: 3, textJP: "(3) <ruby>ほとんど<rt>ほとんど</rt></ruby>が<ruby>工事現場<rt>こうじげんば</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>される。", textMY: "အများစုကို အလုပ်ခွင် (Site) တွင် တည်ဆောက်သည်။" },
      { id: 4, textJP: "(4) <ruby>本体鉄骨<rt>ほんたいてっこつ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>与える影響<rt>あたえるえいきょう</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "ပင်မသံဘောင်၏ အရည်အသွေးကို ထိခိုက်နိုင်မှုကို နားလည်ရန် လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は<ruby>ショートビード<rt>しょーとびーど</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "ယာယီဂဟေဆက်ရာတွင် တိုတောင်းသော ဂဟေဆက် (Short bead) ကို သတိပြုရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 付属金物の製作 (Secondary Steel Fabrication)",
      reasonMY: "ဆက်စပ်ပစ္စည်း (付属金物) များသည် အများအားဖြင့် စက်ရုံ (Factory) တွင် ပင်မသံဘောင်များနှင့်အတူ ကြိုတင်ထုတ်လုပ် တပ်ဆင်လေ့ရှိသည်။ အလုပ်ခွင် (Site) တွင် အများစု လုပ်ဆောင်သည်ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "ဆက်စပ်ပစ္စည်းများကိုလည်း တတ်နိုင်သမျှ စက်ရုံတွင်သာ အပြီးသတ်ရမည်။"
    }
  },
  {
    id: "2024-37",
    questionJP: "<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အတိုင်းအတာ တိကျမှု၏ ခွင့်ပြုလွဲချော်မှု (Tolerance) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不良品<rt>ふりょうひん</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>は<ruby>重要度<rt>じゅうようど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>決定<rt>けってい</rt></ruby>する。", textMY: "ချို့ယွင်းချက်ရှိသောပစ္စည်းကို ဖြေရှင်းမည့်နည်းလမ်းကို အရေးကြီးမှုအပေါ် မူတည်၍ ဆုံးဖြတ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>マイナス<rt>まいなす</rt></ruby>の<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超えた<rt>こえた</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、そのまま<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "အနှုတ်ဘက်သို့ ခွင့်ပြုလွဲချော်မှု ကျော်လွန်သွားပါက ဒီအတိုင်း သုံးနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>長さ<rt>ながさ</rt></ruby><rt>等<rt>とう</rt></ruby>の<ruby>不良品<rt>ふりょうひん</rt></ruby>は<ruby>補修<rt>ほしゅう</rt></ruby>により<ruby>対処<rt>たいしょ</rt></ruby>することもできる。", textMY: "အလျားမမှန်သောပစ္စည်းများကို ပြန်လည်ပြုပြင်ခြင်းဖြင့် ဖြေရှင်းနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接サイズ<rt>すみにくようせつさいず</rt></ruby>のように<ruby>管理上<rt>かんりじょう</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>もある。", textMY: "Fillet weld size ကဲ့သို့သော စီမံခန့်ခွဲမှုဆိုင်ရာ စည်းမျဉ်းများလည်း ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>を<ruby>超える<rt>こえる</rt></ruby><ruby>製品<rt>せいひん</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "စံနှုန်းကျော်လွန်နေသော ထုတ်ကုန်ပမာဏကို သိရှိရန် လိုအပ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差 (Limit Tolerance)",
      reasonMY: "限界許容差 (Limit Tolerance) ဆိုသည်မှာ နောက်ဆုံး ခွင့်ပြုနိုင်သော ဘောင်ဖြစ်သည်။ ၎င်းကို ကျော်လွန်သွားသောပစ္စည်းသည် 'မကိုက်ညီသောပစ္စည်း' ဖြစ်သွားသဖြင့် ဒီအတိုင်း အသုံးပြုရန် ခွင့်မပြုပါ။ ပြုပြင်ခြင်း သို့မဟုတ် ပြန်လည်ထုတ်လုပ်ခြင်း လုပ်ဆောင်ရမည်။",
      memoryTipMY: "Limit Tolerance ကို ကျော်လွန်ပါက ဒီအတိုင်း သုံး၍ မရပါ။"
    }
  },
  {
    id: "2024-38",
    questionJP: "JASS 6に基づく<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ပစ္စည်းစစ်ဆေးမှု (Object Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>は<ruby>抜き取った結果<rt>ぬきとったけっか</rt></ruby>から<ruby>直接合否<rt>ちょくせつごうひ</rt></ruby>を<ruby>判定<rt>はんてい</rt></ruby>する。", textMY: "Inspection 1 သည် နမူနာကောက်ယူမှုမှ တိုက်ရိုက် အောင်/ရှုံး ဆုံးဖြတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>は<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>との<ruby>整合性<rt>せいごうせい</rt></ruby>ကို <ruby>検定<rt>けんてい</rt></ruby>する。", textMY: "Inspection 2 သည် စက်ရုံတွင်းမှတ်တမ်းနှင့် ကိုက်ညီမှုကို စစ်ဆေးသည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>の方法は最も<ruby>単純<rt>たんじゅん</rt></ruby>である。", textMY: "Inspection 1 ၏ နည်းလမ်းသည် အခြေခံအကျဆုံး ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>での<ruby>不合格<rt>ふごうかく</rt></ruby>は、<ruby>精度そのもの<rt>せいどそのもの</rt></ruby>の<ruby>不合格<rt>ふごうかく</rt></ruby>を<ruby>意味<rt>いみ</rt></ruby>する。", textMY: "Inspection 2 တွင် မအောင်မြင်ခြင်းသည် တိကျမှု ကိုယ်တိုင် မအောင်မြင်ခြင်းကို ဆိုလိုသည်။" },
      { id: 5, textJP: "(5) <ruby>不合格ロット<rt>ふごうかくろっと</rt></ruby>は<ruby>残り全数<rt>のこりぜんすう</rt></ruby>の<ruby>寸法測定<rt>すんぽうそくてい</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "မအောင်မြင်သော အုပ်စု (Lot) ကို ကျန်ရှိသော အားလုံးကို အတိုင်းအတာ စစ်ဆေးရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査2 (Object Inspection 2)",
      reasonMY: "対物検査2 တွင် မအောင်မြင်ခြင်းသည် တိကျမှုကိုယ်တိုင် မမှန်ခြင်းထက်၊ စက်ရုံ၏ စစ်ဆေးမှုစနစ် (Process Control) သည် ယုံကြည်စိတ်ချရမှု မရှိခြင်း သို့မဟုတ် မှတ်တမ်းနှင့် လက်တွေ့ ကွဲလွဲနေခြင်းကို ဆိုလိုခြင်း ဖြစ်သည်။",
      memoryTipMY: "Inspection 2 သည် Process Control (လုပ်ငန်းစဉ်ထိန်းချုပ်မှု) ၏ ယုံကြည်မှုကို စစ်ဆေးခြင်း ဖြစ်သည်။"
    }
  },
  {
    id: "2024-39",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာအား အပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>および<ruby>精度<rt>せいど</rt></ruby>に<ruby>対して行う<rt>たいしておこなう</rt></ruby>。", textMY: "မျက်နှာပြင်ချို့ယွင်းချက်နှင့် တိကျမှုတို့အတွက် လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>検査対象範囲<rt>けんさたいしょうはんい</rt></ruby>は<ruby>スタッド<rt>すたっど</rt></ruby>を<ruby>除き<rt>のぞき</rt></ruby>16<ruby>項目<rt>こうもく</rt></ruby>とする。", textMY: "စစ်ဆေးရမည့် အချက်ပေါင်း ၁၆ ချက် (Stud မှလွဲ၍) ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>基準<rt>きじゅん</rt></ruby>を<ruby>逸脱<rt>いつだつ</rt></ruby>していると<ruby>思われる箇所<rt>おもわれるかしょ</rt></ruby>のみ<ruby>器具<rt>きぐ</rt></ruby>で<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "စံနှုန်းလွဲနေသည်ဟု ယူဆရသောနေရာကိုသာ ကိရိယာဖြင့် တိုင်းတာရမည်။" },
      { id: 4, textJP: "(4) <ruby>合否判定<rt>ごうひはんてい</rt></ruby>は<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>によらなければならない。", textMY: "အောင်/ရှုံး ဆုံးဖြတ်ချက်သည် Limit Tolerance အပေါ် မူတည်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>不適合<rt>ふてきごう</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は<ruby>補修<rt>ほしゅう</rt></ruby>を<ruby>行い<rt>おこない</rt></ruby>、<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "မကိုက်ညီမှုရှိပါက ပြုပြင်ပြီး ပြန်လည်စစ်ဆေးရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 目視検査 (Visual Inspection)",
      reasonMY: "အပြင်ပန်းကြည့်စစ်ဆေးခြင်းတွင် အတိုင်းအတာများကို စံနှုန်းနှင့်ကိုက်ညီကြောင်း သေချာစေရန် ကိရိယာ (gauge) များဖြင့် စနစ်တကျ တိုင်းတာရမည်ဖြစ်သည်။ 'လွဲနေသည်ဟု ထင်သည့်နေရာကိုသာ တိုင်းရမည်' ဆိုခြင်းမှာ စစ်ဆေးမှုစံနှုန်းနှင့် မကိုက်ညီပါ။",
      memoryTipMY: "စစ်ဆေးမှုကို စနစ်တကျ ကိရိယာများဖြင့် အမြဲလုပ်ဆောင်ရမည်။"
    }
  },
  {
    id: "2024-40",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>内部欠陥検査<rt>ないぶけっかんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေအတွင်းပိုင်းချို့ယွင်းချက် စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>により<ruby>行い<rt>おこない</rt></ruby>、<ruby>規準<rt>きじゅん</rt></ruby>に<ruby>従う<rt>したがう</rt></ruby>。", textMY: "UT စစ်ဆေးမှုဖြင့် လုပ်ဆောင်ပြီး စံနှုန်းများကို လိုက်နာရမည်။" },
      { id: 2, textJP: "(2) 300<ruby>箇所<rt>かしょ</rt></ruby><ruby>以下<rt>いか</rt></ruby>で1<ruby>検査ロット<rt>けんさろっと</rt></ruby>を<ruby>構成<rt>こうせい</rt></ruby>する。", textMY: "နေရာ ၃၀၀ အောက်ကို Lot တစ်ခုအဖြစ် သတ်မှတ်သည်။" },
      { id: 3, textJP: "(3) <ruby>サンプリング<rt>さんぷりんぐ</rt></ruby>は20%<ruby>以上<rt>いじょう</rt></ruby>とし、<ruby>不適合<rt>ふてきごう</rt></ruby>4<ruby>個以上<rt>こいじょう</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>とする。", textMY: "နမူနာ ၂၀% ယူရမည်ဖြစ်ပြီး ချို့ယွင်းချက် ၄ ခုနှင့်အထက်ရှိလျှင် မအောင်မြင်ပါ။" },
      { id: 4, textJP: "(4) <ruby>合計<rt>ごうけい</rt></ruby>の<ruby>不適合数<rt>ふてきごうすう</rt></ruby>が4<ruby>個以下<rt>こいか</rt></ruby>のときは<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "ချို့ယွင်းချက် စုစုပေါင်း ၄ ခုနှင့်အောက်ဆိုလျှင် အောင်မြင်သည်။" },
      { id: 5, textJP: "(5) <ruby>不合格ロット<rt>ふごうかくろっと</rt></ruby>は<ruby>残り全数<rt>のこりぜんすう</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "မအောင်မြင်သော Lot ကို ကျန်အားလုံး စစ်ဆေးရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 内部欠陥 (Internal Defect Inspection)",
      reasonMY: "JASS 6 အရ အတွင်းပိုင်းချို့ယွင်းချက်စစ်ဆေးမှုတွင် ချို့ယွင်းချက်အရေအတွက်သည် '၁ ခု သို့မဟုတ် ထို့ထက်နည်းလျှင်' (1個以下) သာ အောင်မြင်သည်။ ၄ ခုအထိ ခွင့်ပြုသည်ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "နမူနာစစ်ဆေးမှုတွင် ချို့ယွင်းချက် ၁ ခုအထိသာ အောင်မြင်သည်ဟု သတ်မှတ်သည်။"
    }
  },
  {
    id: "2024-41",
    questionJP: "JASS 6の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 ၏ အပြင်ပန်းကြည့်စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ビード幅<rt>びーどはば</rt></ruby>の<ruby>不整<rt>ふせい</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は5mm<ruby>以下<rt>いか</rt></ruby>である。", textMY: "Bead width မညီညာမှု၏ ခွင့်ပြုလွဲချော်မှုမှာ 5mm အောက် ဖြစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>ビード幅<rt>びーどはば</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は<ruby>板厚<rt>いたあつ</rt></ruby>の1.5<ruby>倍以下<rt>ばいいか</rt></ruby>である。", textMY: "Bead width ၏ စီမံခန့်ခွဲမှုလွဲချော်မှုမှာ အထူ၏ ၁.၅ ဆ အောက် ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>ピット<rt>ぴっと</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は1<ruby>個以下<rt>こいか</rt></ruby>である。", textMY: "Pit (လေပေါက်) ၏ ခွင့်ပြုချက်မှာ ၁ ခုနှင့်အောက် ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>クレータ割れ<rt>くれーたわれ</rt></ruby>などはあってはならない。", textMY: "Crater crack များ လုံးဝမရှိရပါ။" },
      { id: 5, textJP: "(5) <ruby>スタッド<rt>すたっど</rt></ruby>の<ruby>傾き<rt>かたむき</rt></ruby>の<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は3°<ruby>以下<rt>いか</rt></ruby>である。", textMY: "Stud စောင်းနေမှု၏ ခွင့်ပြုချက်မှာ ၃ ဒီဂရီနှင့်အောက် ဖြစ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ビード幅 (Bead Width)",
      reasonMY: "Bead width (ဂဟေအကျယ်) အတွက် စီမံခန့်ခွဲမှုလွဲချော်မှု (管理許容差) သည် အများအားဖြင့် ပုံသေတန်ဖိုးများဖြင့် သတ်မှတ်လေ့ရှိပြီး 'အထူ၏ ၁.၅ ဆ' ဆိုသည်မှာ JASS 6 ၏ အပြင်ပန်းစစ်ဆေးမှု စံနှုန်း မဟုတ်ပါ။",
      memoryTipMY: "Bead Width စံနှုန်းကို သတိပြုပါ။"
    }
  },
  {
    id: "2024-43",
    questionJP: "<ruby>非破壊試験<rt>ひはかいしけん</rt></ruby>とその<ruby>特徴<rt>とくちょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "NDT နှင့် ၎င်း၏ ဝိသေသလက္ခဏာများဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>放射線<rt>ほうしゃせん</rt></ruby>と<ruby>超音波<rt>ちょうおんぱ</rt></ruby>は<ruby>内部欠陥用<rt>ないぶけっかんよう</rt></ruby>である。", textMY: "X-ray နှင့် Ultrasonic တို့သည် အတွင်းပိုင်းချို့ယွင်းချက်အတွက် ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>磁粉<rt>じふん</rt></ruby>と<ruby>浸透<rt>しんとう</rt></ruby>は<ruby>表面欠陥用<rt>ひょうめんけっかんよう</rt></ruby>である。", textMY: "သံလိုက်မှုန်နှင့် စိမ့်ဝင်ပစ္စည်းတို့သည် မျက်နှာပြင်ချို့ယွင်းချက်အတွက် ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>磁粉探傷<rt>じふんたんしょう</rt></ruby>では<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>開口<rt>かいこう</rt></ruby>した<ruby>欠陥以外<rt>けっかんいがい</rt></ruby>の<ruby>検出<rt>けんしゅつ</rt></ruby>は<ruby>困難<rt>こんなん</rt></ruby>である。", textMY: "Magnetic Particle Testing တွင် မျက်နှာပြင်ပေါ်ရှိနေသော အက်ကွဲကြောင်းမှလွဲ၍ ကျန်အရာများ ရှာဖွေရန် ခက်ခဲသည်။" },
      { id: 4, textJP: "(4) <ruby>超音波<rt>ちょうおんぱ</rt></ruby>では<ruby>ブローホール<rt>ぶろーほーる</rt></ruby>の<ruby>検出<rt>けんしゅつ</rt></ruby>は<ruby>困難<rt>こんなん</rt></ruby>である。", textMY: "UT ဖြင့် Blowhole များကို ရှာဖွေရန် ခက်ခဲသည်။" },
      { id: 5, textJP: "(5) <ruby>放射線<rt>ほうしゃせん</rt></ruby>は<ruby>割れ<rt>われ</rt></ruby>の<ruby>検出性<rt>けんしゅつせい</rt></ruby>に<ruby>優れている<rt>すぐれている</rt></ruby>。", textMY: "Radiography (RT) သည် အက်ကွဲကြောင်း (Crack) ရှာဖွေရာတွင် ထူးကဲသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 放射線透過試験 (Radiographic Testing)",
      reasonMY: "Radiography (RT) သည် ဓာတ်မှန်ရိုက်ခြင်းနှင့် တူပြီး Blowhole ကဲ့သို့သော အလုံးပုံချို့ယွင်းချက်များကို ကောင်းစွာတွေ့မြင်နိုင်သည်။ သို့သော် အလွန်ပါးလွှာသော အက်ကွဲကြောင်း (Crack) များကို ရှာဖွေရန်မှာ UT ထက် ညံ့ဖျင်းသည်။ အက်ကွဲကြောင်းများအတွက် UT က ပိုမို ထူးကဲသည်။",
      memoryTipMY: "Crack ရှာဖွေရန်အတွက် UT က RT ထက် ပိုကောင်းသည်။"
    }
  },
  {
    id: "2024-44",
    questionJP: "<ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Ultrasonic Testing (UT) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>完全溶込み溶接部<rt>かんぜんすみこみようせつぶ</rt></ruby>および<ruby>部分溶込み溶接部<rt>ぶぶんすみこみようせつぶ</rt></ruby>を<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Full နှင့် Partial Penetration weld များကို စစ်ဆေးသည်။" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>6mm<ruby>未満<rt>みまん</rt></ruby>のものには<ruby>原則<rt>げんそく</rt></ruby>として<ruby>適用<rt>てきよう</rt></ruby>しない。", textMY: "Plate အထူ 6mm အောက်ကို အခြေခံအားဖြင့် စစ်ဆေးလေ့မရှိပါ။" },
      { id: 3, textJP: "(3) <ruby>手動<rt>しゅどう</rt></ruby>の<ruby>パルス反射法<rt>ぱるすはんしゃほう</rt></ruby>で<ruby>直接接触法<rt>ちょくせつせっしょくほう</rt></ruby>による。", textMY: "လက်ဖြင့်ပြုလုပ်သော Pulse reflection method ကို အသုံးပြုသည်။" },
      { id: 4, textJP: "(4) <ruby>接触媒質<rt>せっしょくばいしつ</rt></ruby>は<ruby>グリセリン<rt>ぐりせりん</rt></ruby>などをする。", textMY: "Glycerin စသော ပစ္စည်းများကို ကြားခံအဖြစ် သုံးသည်။" },
      { id: 5, textJP: "(5) <ruby>斜角探触子<rt>しゃかくたんしょくし</rt></ruby>の<ruby>屈折角<rt>くっせつかく</rt></ruby>は<ruby>公称<rt>こうしょう</rt></ruby>70°のみとする。", textMY: "Probe ၏ ထောင့်ချိုးမှာ ၇၀ ဒီဂရီ တစ်မျိုးတည်းသာ ဖြစ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 斜角探触子 (Angle Probe)",
      reasonMY: "UT စစ်ဆေးရာတွင် အသုံးပြုသော Probe ၏ ထောင့်ချိုး (Refraction Angle) များမှာ ၄၅°၊ ၆၀° နှင့် ၇၀° ဟူ၍ အမျိုးမျိုးရှိသည်။ ၇၀° တစ်မျိုးတည်းသာ ရှိသည်ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "UT Probe တွင် ထောင့်အမျိုးမျိုး (၄၅, ၆၀, ၇၀) ရှိသည်။"
    }
  },
  {
    id: "2024-45",
    questionJP: "<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘေးကင်းလုံခြုံရေးနှင့် ကျန်းမာရေးဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>度数率<rt>どすうりつ</rt></ruby>နှင့် <ruby>強度率<rt>きょうどりつ</rt></ruby>၏ <ruby>定義<rt>ていぎ</rt></ruby>について", textMY: "ဘေးအန္တရာယ်ဖြစ်ပွားနှုန်းနှင့် ပြင်းအားဆိုင်ရာ အဓိပ္ပါယ်ဖွင့်ဆိုချက်များ။" },
      { id: 2, textJP: "(2) <ruby>作業主任者<rt>さぎょうしゅにんしゃ</rt></ruby>の<ruby>職務<rt>しょくむ</rt></ruby>について", textMY: "လုပ်ငန်းခွင်ကြီးကြပ်ရေးမှူး၏ တာဝန်များ။" },
      { id: 3, textJP: "(3) <ruby>安全管理者<rt>あんぜんかんりしゃ</rt></ruby>は<ruby>直ちに必要<rt>ただちにひつよう</rt></ruby>な<ruby>措置<rt>そち</rt></ruby>を<ruby>講じる<rt>こうじる</rt></ruby>。", textMY: "ဘေးကင်းရေးမန်နေဂျာသည် လိုအပ်သော အစီအမံများကို ချက်ချင်းပြုလုပ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>衛生管理者<rt>えいせいかんりしゃ</rt></ruby>は30<ruby>人以上<rt>にんいじょう</rt></ruby>の<ruby>事業場<rt>じぎょうじょう</rt></ruby>で<ruby>選任<rt>せんにん</rt></ruby>する。", textMY: "ကျန်းမာရေးတာဝန်ခံကို လူ ၃၀ ရှိသော လုပ်ငန်းခွင်တွင် ခန့်အပ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>産業医<rt>さんぎょうい</rt></ruby>は50<ruby>人以上<rt>にんいじょう</rt></ruby>の<ruby>事業場<rt>じぎょうじょう</rt></ruby>で<ruby>選任<rt>せんにん</rt></ruby>する。", textMY: "စက်မှုဆရာဝန်ကို လူ ၅၀ ရှိသော လုပ်ငန်းခွင်တွင် ခန့်အပ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 衛生管理者の選任 (Health Manager Appointment)",
      reasonMY: "ဂျပန်နိုင်ငံ၏ အလုပ်သမားဥပဒေအရ ကျန်းမာရေးစီမံခန့်ခွဲသူ (衛生管理者) ကို အမြဲတမ်းအလုပ်သမား ၅၀ ဦး (50人) နှင့်အထက်ရှိသော လုပ်ငန်းခွင်များတွင် ခန့်အပ်ရန် သတ်မှတ်ထားသည်။ ၃၀ ဦး မဟုတ်ပါ။",
      memoryTipMY: "ကျန်းမာရေးနှင့် ဘေးကင်းရေး တာဝန်ခံများကို လူ ၅၀ ကျော်လျှင် ခန့်အပ်ရမည်။"
    }
  },
  {
    id: "2024-46",
    questionJP: "<ruby>資格・教育<rt>しかく・きょういく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အချင်းနှင့် ပညာပေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>免許<rt>めんきょ</rt></ruby>には<ruby>クレーン運転士<rt>くれーんうんてんし</rt></ruby>などがある。", textMY: "လိုင်စင်များတွင် ကရိန်းမောင်းနှင်သူ လိုင်စင် ပါဝင်သည်။" },
      { id: 2, textJP: "(2) <ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>には<ruby>鉄骨の組立て等作業主任者<rt>てっこつのくみたてとうさぎょうしゅにんしゃ</rt></ruby>がある。", textMY: "ကျွမ်းကျင်မှုသင်တန်းတွင် သံမဏိတပ်ဆင်ခြင်း ကြီးကြပ်သူသင်တန်း ပါဝင်သည်။" },
      { id: 3, textJP: "(3) <ruby>特別教育<rt>とくべつきょういく</rt></ruby>には<ruby>ガス溶接<rt>がすようせつ</rt></ruby>などがある。", textMY: "အထူးပညာပေးမှုတွင် Gas welding စသည်တို့ ပါဝင်သည်။" },
      { id: 4, textJP: "(4) <ruby>雇入れ時の教育<rt>やといれじのきょういく</rt></ruby>は<ruby>作業場<rt>さぎょうば</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>しただけで<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "အလုပ်ခန့်ချိန်ပညာပေးခြင်းကို အလုပ်နေရာ ပြောင်းရုံဖြင့် လုပ်ဆောင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>職長等の教育<rt>しょくちょうとうのきょういく</rt></ruby>は<ruby>事業者<rt>じぎょうしゃ</rt></ruby>が<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "ကြီးကြပ်သူများ၏ ပညာပေးခြင်းကို လုပ်ငန်းရှင်က ပြုလုပ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 雇入れ時の教育 (Safety Training)",
      reasonMY: "အလုပ်စတင်ခန့်အပ်သည့်အချိန်တွင်ပေးသော ဘေးကင်းရေးသင်တန်း (雇入れ時の教育) သည် အလုပ်အမျိုးအစား (Work content) ပြောင်းလဲချိန်တွင် လိုအပ်သော်လည်း၊ အလုပ်လုပ်သည့်နေရာ (Workplace) ပြောင်းရုံမျှဖြင့် လုပ်ဆောင်ရန် မလိုအပ်ပါ။",
      memoryTipMY: "နေရာပြောင်းရုံဖြင့် သင်တန်းအသစ် မလိုအပ်ပါ။"
    }
  },
  {
    id: "2024-47",
    questionJP: "<ruby>溶接の安全<rt>ようせつのあんぜん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း ဘေးကင်းရေးဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>アーク光<rt>あーくこう</rt></ruby>から<ruby>目<rt>め</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>ため<ruby>保護めがね<rt>ほごめがね</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Arc မီးတိုင်မှ အလင်းကို ကာကွယ်ရန် မျက်မှန်သုံးရမည်။" },
      { id: 2, textJP: "(2) 2m<ruby>以上<rt>いじょう</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>では<ruby>自動電撃防止装置<rt>じどうでんげきぼうしそうち</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "၂ မီတာထက်မြင့်သောနေရာတွင် အလိုအလျောက် ရှော့ခ်ကာကွယ်ရေး ကိရိယာကို သုံးရမည်။" },
      { id: 3, textJP: "(3) <ruby>アース<rt>あーす</rt></ruby>を<ruby>完備<rt>かんび</rt></ruby>し<ruby>感電<rt>かんでん</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "Earth ချိတ်ဆက်ပြီး ဓာတ်လိုက်ခြင်းကို ကာကွယ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>屋外作業<rt>おくがいさぎょう</rt></ruby>を<ruby>除き呼吸用保護具<rt>こきゅうようほごぐ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "ပြင်ပအလုပ်မှလွဲ၍ အသက်ရှူလမ်းကြောင်းကာကွယ်ရေးပစ္စည်း လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>ヒューム<rt>ひゅーむ</rt></ruby>に<ruby>対して<rt>たいして</rt></ruby>は<ruby>特殊健康診断<rt>とくしゅけんこうしんだん</rt></ruby>などが<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "အခိုးအငွေ့ (Fume) အတွက် အထူးကျန်းမာရေးစစ်ဆေးမှု လိုအပ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 自動電撃防止装置 (Anti-shock device)",
      reasonMY: "အလိုအလျောက် ရှော့ခ်ကာကွယ်ရေးကိရိယာ (自動電撃防止装置) ကို အမြင့် ၂ မီတာတွင် မဟုတ်ဘဲ၊ 'အလွန်စိုထိုင်းသောနေရာ' သို့မဟုတ် 'သတ္တုနှင့်ထိတွေ့နေရသော ကျဉ်းမြောင်းသောနေရာ' များတွင် အသုံးပြုရန် သတ်မှတ်ထားသည်။",
      memoryTipMY: "အလိုအလျောက် ရှော့ခ်ကာကွယ်ရေးသည် အမြင့်ထက် နေရာ၏ စိုထိုင်းမှုနှင့် ပိုဆိုင်သည်။"
    }
  },
  {
    id: "2024-48",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>最低<rt>さいてい</rt></ruby>の<ruby>基準<rt>きじゅん</rt></ruby>を<ruby>定めた<rt>さだめた</rt></ruby>ものである。", textMY: "ဤဥပဒေသည် အနိမ့်ဆုံးစံနှုန်းများကို သတ်မှတ်ထားခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>指定確認検査機関<rt>していかくにんけんさきかん</rt></ruby>も<ruby>業務<rt>ぎょうむ</rt></ruby>を<ruby>行える<rt>おこなえる</rt></ruby>。", textMY: "ပုဂ္ဂလိက စစ်ဆေးရေးအဖွဲ့များလည်း လုပ်ငန်းများကို လုပ်ဆောင်နိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>工事着工前<rt>こうじちゃっこうまえ</rt></ruby>に<ruby>確認済証<rt>かくにんずみしょう</rt></ruby>の<ruby>交付<rt>こうふ</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "အလုပ်မစမီ အတည်ပြုချက်လက်မှတ် ရယူရမည်။" },
      { id: 4, textJP: "(4) <ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>しなければ<ruby>工事<rt>こうじ</rt></ruby>は<ruby>続行<rt>ぞっこう</rt></ruby>できない。", textMY: "ကြားဖြတ်စစ်ဆေးမှု မအောင်လျှင် အလုပ် ဆက်လုပ်၍ မရပါ။" },
      { id: 5, textJP: "(5) <ruby>完了検査申請書<rt>かんりょうけんさしんせいしょ</rt></ruby>は<ruby>工事完了後<rt>こうじかんりょうご</rt></ruby>14<ruby>日以内<rt>にちいない</rt></ruby>に<ruby>提出<rt>ていしゅつ</rt></ruby>する。", textMY: "ပြီးစီးမှုစစ်ဆေးခြင်း လျှောက်လွှာကို ပြီးစီးပြီး ၁၄ ရက်အတွင်း တင်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 完了検査 (Completion Inspection)",
      reasonMY: "အဆောက်အဦပြီးစီးမှု စစ်ဆေးခြင်း လျှောက်လွှာ (完了検査申請書) ကို အလုပ်ပြီးစီးသည့်နေ့မှစ၍ '၄ ရက်အတွင်း' (4日以内) တင်သွင်းရမည် ဖြစ်သည်။ ၁၄ ရက် မဟုတ်ပါ။",
      memoryTipMY: "ပြီးစီးမှုစစ်ဆေးခြင်း လျှောက်လွှာသည် ၄ ရက်အတွင်း ဖြစ်သည်။"
    }
  },
  {
    id: "2024-49",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>の<ruby>用語<rt>ようご</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေပါ ဝေါဟာရများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>構造耐力上主要な部分<rt>こうぞうたいりょくじょうしゅようなぶぶん</rt></ruby>と<ruby>主要構造部<rt>しゅようこうぞうぶ</rt></ruby>は<ruby>異なる<rt>ことなる</rt></ruby>。", textMY: "ဝန်ထမ်းဆောင်သော အဓိကအစိတ်အပိုင်းနှင့် ပင်မဖွဲ့စည်းပုံအစိတ်အပိုင်းတို့သည် ကွဲပြားသည်။" },
      { id: 2, textJP: "(2) <ruby>主要構造部<rt>しゅようこうぞうぶ</rt></ruby>は<ruby>防火上<rt>ぼうかじょう</rt></ruby>の<ruby>観点<rt>かんてん</rt></ruby>から<ruby>定められている<rt>さだめられている</rt></ruby>。", textMY: "ပင်မဖွဲ့စည်းပုံအစိတ်အပိုင်းကို မီးဘေးကာကွယ်ရေး ရှုထောင့်မှ သတ်မှတ်ထားသည်။" },
      { id: 3, textJP: "(3) <ruby>建築<rt>けんちく</rt></ruby>とは<ruby>新築、増築、改築、移転<rt>しんちく、ぞうちく、かいちく、いてん</rt></ruby>をいう。", textMY: "တည်ဆောက်ခြင်းဆိုသည်မှာ အသစ်ဆောက်ခြင်း၊ တိုးချဲ့ခြင်း၊ ပြင်ဆင်ခြင်း၊ ပြောင်းရွှေ့ခြင်းကို ဆိုလိုသည်။" },
      { id: 4, textJP: "(4) <ruby>大規模の修繕<rt>だいきぼのしゅうぜん</rt></ruby>とは、<ruby>すべての主要構造部<rt>すべてのしゅようこうぞうぶ</rt></ruby>を<ruby>修繕<rt>しゅうぜん</rt></ruby>することである。", textMY: "ကြီးမားသော ပြုပြင်မွမ်းမံမှု ဆိုသည်မှာ ပင်မဖွဲ့စည်းပုံ အစိတ်အပိုင်း အားလုံးကို ပြင်ဆင်ခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>敷地<rt>しきち</rt></ruby>とは<ruby>一団の土地<rt>いちだんのとち</rt></ruby>をいう。", textMY: "မြေကွက်ဆိုသည်မှာ မြေတစ်ကွက်လုံးကို ဆိုလိုသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 大規模の修繕 (Large-scale Repair)",
      reasonMY: "ကြီးမားသော ပြုပြင်မွမ်းမံမှု (大規模の修繕) ဆိုသည်မှာ ပင်မဖွဲ့စည်းပုံ အစိတ်အပိုင်း (主要構造部) များထဲမှ တစ်မျိုး သို့မဟုတ် တစ်မျိုးထက်ပို၍ 'ထက်ဝက်ကျော်' (過半) ပြုပြင်ခြင်းကို ဆိုလိုသည်။ 'အားလုံး' (すべて) ပြုပြင်ရန် မလိုအပ်ပါ။",
      memoryTipMY: "ကြီးမားသော ပြုပြင်မှု = ပင်မအစိတ်အပိုင်းတစ်ခုခု၏ ထက်ဝက်ကျော်ကို ပြုပြင်ခြင်း။"
    }
  },
  {
    id: "2024-50",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>および<ruby>関連告示<rt>かんれんこくじ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေနှင့် သက်ဆိုင်ရာ ကြေညာချက်များဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>材料<rt>ざいりょう</rt></ruby>は<ruby>炭素鋼<rt>たんそこう</rt></ruby><ruby>等<rt>とう</rt></ruby>とし、<ruby>鋳鉄<rt>ちゅうてつ</rt></ruby>は<ruby>原則引張部<rt>げんそくひっぱりぶ</rt></ruby>には<ruby>用いない<rt>もちいない</rt></ruby>。", textMY: "ပစ္စည်းသည် ကာဗွန်သံမဏိ ဖြစ်ရမည်ဖြစ်ပြီး သံစပ်ကို ဆွဲအားခံရသောနေရာတွင် မသုံးရ။" },
      { id: 2, textJP: "(2) <ruby>ボルト<rt>ぼると</rt></ruby>が<ruby>緩まない<rt>ゆるまない</rt></ruby>ように<ruby>ナットを溶接<rt>なっとをようせつ</rt></ruby>するなどの<ruby>措置<rt>そち</rt></ruby>を<ruby>講じる<rt>こうじる</rt></ruby>。", textMY: "Bolt များ မချောင်စေရန် Nut ကို ဂဟေဆော်ခြင်း စသော အစီအမံများ ပြုလုပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>柱の脚部<rt>はしらのきゃくぶ</rt></ruby>は<ruby>基礎に緊結<rt>きそにきんけつ</rt></ruby>しなければならない。", textMY: "တိုင်ခြေများကို အခြေခံ (Foundation) နှင့် ခိုင်မြဲစွာ ချိတ်ဆက်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>露出形式、根巻き形式、埋込み形式<rt>ろしゅつけいしき、ねまきけいしき、うめこみけいしき</rt></ruby>の3つの<ruby>方法<rt>ほうほう</rt></ruby>がある。", textMY: "တိုင်ခြေချည်နှောင်နည်း ၃ မျိုး ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>加工後<rt>かこうご</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>が<ruby>加工前<rt>かこうまえ</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>であることを<ruby>確かめる<rt>たしかめる</rt></ruby>。", textMY: "ပြုပြင်ပြီးနောက် အရည်အသွေးသည် မူလနှင့် တူညီရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ボルトの戻り止め (Bolts Loosening Prevention)",
      reasonMY: "ဘို့ (Bolt) များ မချောင်စေရန်အတွက် နပ် ၂ ထပ်သုံးခြင်း (Double Nut) သို့မဟုတ် ကွန်ကရစ်ထဲမြှုပ်ခြင်း (Concrete Embedding) စသည်တို့ကို ပြုလုပ်ရမည်ဖြစ်ပြီး၊ နပ်ကို ဂဟေဆော်ခြင်း (ナットの溶接) သည် ဘို့၏ ခံနိုင်ရည်ကို ထိခိုက်စေသောကြောင့် မပြုလုပ်ရပါ။",
      memoryTipMY: "နပ် (Nut) ကို ဂဟေဆော်ခြင်းဖြင့် မချောင်အောင် မလုပ်ရပါ။"
    }
  }
];
