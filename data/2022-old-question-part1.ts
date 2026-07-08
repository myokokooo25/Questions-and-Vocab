import { StudyCardData } from '../types';

export const chapter2022Part1Data: StudyCardData[] = [
  {
    id: "2022-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>片持梁<rt>かたもちばり</rt></ruby>と<ruby>単純梁<rt>たんじゅんばり</rt></ruby>に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>している。<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面<rt>だんめん</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しいとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့် Cantilever Beam とSimple Beam တို့についてဒေါင်လိုက်ဝန် P သက်ရောက်နေは။ ပစ္စည်းとမျက်နှာပြင်ဖြတ်ပိုင်းတူညီပါက、အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>片持梁<rt>かたもちばり</rt></ruby>の<ruby>固定端<rt>こていたん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>は、<ruby>単純梁<rt>たんゅんばり</rt></ruby>の1つの<ruby>支点<rt>してん</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "(1) Cantilever beam のFixed End   (Vertical Reaction) はSimple beam のSupport  の  は" },
      { id: 2, textJP: "(2) <ruby>片持梁<rt>かたもちばり</rt></ruby>の<ruby>上端<rt>じょうたん</rt></ruby>に<ruby>生じる応力<rt>おうりょく</rt></ruby>は<ruby>引張<rt>ひっぱり</rt></ruby>、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>は<ruby>圧縮<rt>あっしゅく</rt></ruby>である。", textMY: "(2) Cantilever beam のについて (Tension) 、Simple beam のについて (Compression) は" },
      { id: 3, textJP: "(3) <ruby>最大<rt>さいだい</rt></ruby>せん<ruby>断応力度<rt>だんおうりょくど</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>片持梁<rt>かたもちばり</rt></ruby>のほうが<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "(3)  Shear Stress はCantilever beam については" },
      { id: 4, textJP: "(4) <ruby>最大<rt>さいだい</rt></ruby><ruby>曲げ<rt>まげ</rt></ruby>モーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>は、いずれの<ruby>梁<rt>はり</rt></ruby>も<ruby>等しい<rt>ひとしい</rt></ruby>。", textMY: "(4)  Bending Moment はbeam については" },
      { id: 5, textJP: "(5) <ruby>片持梁<rt>かたもちばり</rt></ruby>の<ruby>先端<rt>せんたん</rt></ruby>のたわみは、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>の<ruby>中央<rt>ちゅうおう</rt></ruby>のたわみの2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "(5) Cantilever beam の  (Deflection) はSimple beam の の  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ကွေးညွှတ်မှု (Deflection)",
      reasonMY: "ပုံသေနည်းအရ Cantilever のအစွန်း deflection はPL³/3EI ဖြစ်ပြီး、Simple beam のအလယ် deflection はPL³/48EI ဖြစ်は။ ထို့ကြောင့် Cantilever は၁၆ ဆ ပိုမိုကွေးညွှတ်は။ ၂ ဆဟု ဆိုထားသော (၅) မှာ မှားယွင်းは။",
      memoryTipMY: "Cantilever はSimple beam ထက် များစွာ ပိုမို ကွေးညွှတ်လွယ်は။"
    }
  },
  {
    id: "2022-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のようなトラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生じる軸力<rt>じくりょく</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>組合せ<rt>くみあわせ</rt></ruby>のうち、<ruby>正しい<rt>正しい</rt></ruby>ものはどれか。",
    questionMY: "ပုံについてပြထားသည့် Truss Beam の(အ、ဣ、ဥ) member များについてဖြစ်ပေါ်သော Axial Force (ဝင်ရိုးတလျှောက်သက်ရောက်အား) ဆိုင်ရာ မှန်ကန်သော ပေါင်းစပ်မှုをရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: <ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ: 0", textMY: "(1) :  (Compression)、:  (Compression)、:  (0)" },
      { id: 2, textJP: "(2) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: <ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ: <ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "(2) :  (Compression)、:  (Compression)、:  (Compression)" },
      { id: 3, textJP: "(3) ア: <ruby>引張<rt>ひっぱり</rt></ruby>、イ: <ruby>引張<rt>ひっぱり</rt></ruby>、ウ: <ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "(3) :  (Tension)、:  (Tension)、:  (Compression)" },
      { id: 4, textJP: "(4) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: <ruby>引張<rt>ひっぱり</rt></ruby>、ウ: <ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "(4) :  (Compression)、:  (Tension)、:  (Tension)" },
      { id: 5, textJP: "(5) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: 0、ウ: 0", textMY: "(5) :  (Compression)、:  (0)、:  (0)" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Member Forces",
      reasonMY: "Truss のအပေါ်ဘောင် (Top Chord) များはများသောအားでဖိအား (Compression) ခံရပြီး、ဝန်မရှိသော ဒေါင်လိုက် member အချို့はZero-force member များ ဖြစ်တတ်は။ (၁) はဤဖွဲ့စည်းပုံအတွက် အမှန်ကန်ဆုံး ပေါင်းစပ်မှု ဖြစ်は။",
      memoryTipMY: "Truss chord များのသဘောတရားをမှတ်သားပါ။ အပေါ်はဖိအား、အောက်はဆွဲအား ဖြစ်လေ့ရှိは။"
    }
  },
  {
    id: "2022-3",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "တည်ဆောက်ပုံဒီဇိုင်း (Structural Design) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>強度<rt>きょうど</rt></ruby>だけでなく、<ruby>日常的<rt>にちじょうてき</rt></ruby>な<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対する振動<rt>たいするしんどう</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "(1)  (Strength)    (Vibration) を しなければならない。" },
      { id: 2, textJP: "(2) <ruby>設計段階<rt>せっけいだんかい</rt></ruby>から<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "(2)   (Welding) のをは" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>比重<rt>ひじゅう</rt></ruby>が<ruby>大きい<rt>おおきい</rt></ruby>が、<ruby>軽量<rt>けいりょう</rt></ruby>で<ruby>強い<rt>つよい</rt></ruby><ruby>構造物<rt>こうぞうぶつ</rt></ruby>を<ruby>造れる<rt>つくれる</rt></ruby>。", textMY: "(3) はは (Specific Gravity) 、  をは" },
      { id: 4, textJP: "(4) <ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>溶接品質管理<rt>ようせつひんしつかんり</rt></ruby>が<ruby>原因<rt>げんいん</rt></ruby>で<ruby>被害<rt>ひがい</rt></ruby>が<ruby>出た<rt>でた</rt></ruby><ruby>例<rt>れい</rt></ruby>が<ruby>多い<rt>おおい</rt></ruby>。", textMY: "(4)    (Welding Quality Control)   は" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>靭性<rt>じんせい</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>ため、<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>関わらず<rt>かかわらず</rt></ruby><ruby>耐震性<rt>たいしんせい</rt></ruby>が<ruby>確保<rt>かくほ</rt></ruby>される。", textMY: "(5) はToughness ()     (Seismic Resistance) は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 品質と耐震性",
      reasonMY: "သံမဏိပစ္စည်းはToughness မြင့်သော်လည်း、ဂဟေဆက်ခြင်း သို့မဟုတ် တည်ဆောက်ခြင်း အရည်အသွေး ညံ့ဖျင်း場合はငလျင်ဒဏ်をမခံနိုင်ဘဲ ကျိုးပဲ့ပျက်စီးနိုင်は။ 'အရည်အသွေးとမဆိုင်ဘဲ' ဆိုသောအချက်မှာ မှားယွင်းは။",
      memoryTipMY: "မည်မျှကောင်းသော ပစ္စည်းဖြစ်စေ、အရည်အသွေးစီမံမှု (Quality Control) မရှိ場合はအန္တရာယ်ရှိは။"
    }
  },
  {
    id: "2022-4",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>の<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံのဖွဲ့စည်းပုံပုံစံ (Structural Systems) များとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>純<rt>じゅん</rt></ruby>ラーメン<ruby>構造<rt>こうぞう</rt></ruby>は<ruby>曲げ<rt>まげ</rt></ruby>モーメントで<ruby>抵抗<rt>ていこう</rt></ruby>し、オフィスなどで<ruby>多用<rt>たよう</rt></ruby>される。", textMY: "(1) Pure Rigid Frame Structure はBending Moment でを については" },
      { id: 2, textJP: "(2) ブレース<ruby>構造<rt>こうぞう</rt></ruby>は<ruby>高い水平剛性<rt>たかいすいへいごうせい</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>できる。", textMY: "(2) Braced Structure は   (Horizontal Stiffness) をは" },
      { id: 3, textJP: "(3) <ruby>立体<rt>りったい</rt></ruby>トラスは<ruby>平面<rt>へいめん</rt></ruby>トラスよりトラスせいが<ruby>大<rt>おお</rt></ruby>きくなる<ruby>欠点<rt>けってん</rt></ruby>がある。", textMY: "(3) Space Truss はPlane Truss  Truss  (Truss Depth)  は" },
      { id: 4, textJP: "(4) <ruby>免震構造<rt>めんしんこうぞう</rt></ruby>は<ruby>クリアランス<rt>くりあらんす</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "(4) Seismic Isolation について   (Clearance) は" },
      { id: 5, textJP: "(5) <ruby>鉄骨枠付<rt>てっこつわくつ</rt></ruby>きブレースは<ruby>耐火被覆<rt>たいかひふく</rt></ruby>なしで<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "(5)  Brace を (Fireproofing)  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 耐火被覆 (Fireproofing)",
      reasonMY: "သံမဏိはအပူချိန် ၅၀၀ ဒီဂရီကျော်場合はခိုင်မာမှု ထက်ဝက်ခန့် ကျဆင်းသွားは။ ထို့ကြောင့် မည်သည့် သံမဏိတည်ဆောက်ပုံအစိတ်အပိုင်းမဆို မီးဘေးကာကွယ်ရေးအတွက် မီးဒဏ်ခံအကာ (Fireproofing) မဖြစ်မနေ လိုအပ်は။",
      memoryTipMY: "သံမဏိ (Steel) + မီး (Fire) = Fireproofing အမြဲလိုအပ်は။"
    }
  },
  {
    id: "2022-5",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ ဒီဇိုင်း (Steel Member Design) とပတ်သက်၍ အသင့်လျော်ဆုံးအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を防ぐには、<ruby>鋼材<rt>こうざい</rt></ruby>をより<ruby>高強度<rt>こうきょうど</rt></ruby>にすればよい。", textMY: "(1) Beam のLateral Torsional Buckling () を   (High-strength steel) をは" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>が<ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>梁せい<rt>はりせい</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくして<ruby>剛性<rt>ごうせい</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させた。", textMY: "(2) Beam のBending Stiffness ( ) でBeam Depth () を Stiffness をは" },
      { id: 3, textJP: "(3) <ruby>筋かい<rt>すじかい</rt></ruby>の<ruby>座屈耐力<rt>ざくつたいりょく</rt></ruby>を<ruby>強軸方向<rt>きょうじくほうこう</rt></ruby>で<ruby>補強<rt>ほきょう</rt></ruby>した。", textMY: "(3) Brace のBuckling Strength () をStrong Axis ()  は" },
      { id: 4, textJP: "(4) <ruby>局部座屈<rt>きょくぶざくつ</rt></ruby>を防ぐために<ruby>幅厚比<rt>はばあつひ</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくした。", textMY: "(4) Local Buckling ( ) を Width-to-Thickness Ratio (と ) をは" },
      { id: 5, textJP: "(5) <ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>は<ruby>細長比<rt>ほそながひ</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>しなくてよい。", textMY: "(5)   (Closed Section Members) についてSlenderness Ratio を " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 剛性と部材断面",
      reasonMY: "တောင့်တင်းမှု (Stiffness) はပစ္စည်းのခိုင်မာမှု (Strength) ထက် ၎င်းのဖြတ်ပိုင်းပုံသဏ္ဍာန် (Moment of Inertia) အပေါ် ပိုမိုမူတည်は။ Beam depth (梁せい) をကြီးအောင်လုပ်ခြင်းはstiffness をမြှင့်တင်ရန် အထိရောက်ဆုံး နည်းလမ်းဖြစ်は။",
      memoryTipMY: "Stiffness လိုချင်ရင် အရွယ်အစား (Depth) をကြီးအောင်လုပ်ပါ။"
    }
  },
  {
    id: "2022-6",
    questionJP: "<ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>摩擦接合<rt>まさつせつごう</rt></ruby>と<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>は<ruby>併用<rt>へいよう</rt></ruby>できる。", textMY: "(1) Friction Joint () とTension Joint () をは" },
      { id: 2, textJP: "(2) <ruby>さび<rt>さび</rt></ruby>が<ruby>付着<rt>ふちゃく</rt></ruby>するとトルク<ruby>係数<rt>けいすう</rt></ruby>が<ruby>増大<rt>ぞうだい</rt></ruby>し、ボルト<ruby>張力<rt>ちょうりょく</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "(2) 場合はTorque Coefficient  Bolt Tension () は" },
      { id: 3, textJP: "(3) <ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>なしで<ruby>組立て<rt>くみたて</rt></ruby>られる。", textMY: "(3) Tension Joint を は" },
      { id: 4, textJP: "(4) <ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>はJIS<ruby>規格<rt>きかく</rt></ruby>がないため<ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "(4)  HS Bolt (Galvanized High-strength Bolt) はJIS  " },
      { id: 5, textJP: "(5) <ruby>トルシア形<rt>とるしあがた</rt></ruby>はピンテールの<ruby>破断<rt>はだん</rt></ruby>でトルク<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "(5) Torshear Bolt を (Pin-tail) でTorque をは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶融亜鉛めっきボルト (သွပ်ရည်စိမ် High-strength Bolt)",
      reasonMY: "သွပ်ရည်စိမ် HS Bolt (ဥပမာ- F12T) များはသီးခြား JIS စံနှုန်းမရှိသော်လည်း、ဝန်ကြီးのအသိအမှတ်ပြုလက်မှတ် (Minister Certification) ရရှိထား場合はကျယ်ပြန့်စွာ အသုံးပြုနိုင်は။ 'မသုံးရ' ဟုဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Galvanized bolt をဝန်ကြီးအသိအမှတ်ပြုချက်でသုံးနိုင်は။"
    }
  },
  {
    id: "2022-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby>は<ruby>技能者<rt>ぎのうしゃ</rt></ruby>の<ruby>技量<rt>ぎりょう</rt></ruby>に<ruby>依存<rt>いそん</rt></ruby>する。", textMY: "(1) はの は" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>の<ruby>異なる<rt>ことなる</rt></ruby><ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>みは<ruby>厚い方<rt>あついほう</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>とする。", textMY: "(2) を (Full Penetration Weld) 、Throat Thickness () を しなければならない。" },
      { id: 3, textJP: "(3) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>は<ruby>耐力<rt>たいりょく</rt></ruby>を<ruby>低下<rt>ていか</rt></ruby>させる。", textMY: "(3) Residual Stress () はをは" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>はサイズの2<ruby>倍<rt>ばい</rt></ruby>を<ruby>減じて<rt>げんじて</rt></ruby><ruby>計算<rt>けいさん</rt></ruby>する。", textMY: "(4) Fillet Weld についてSize の を" },
      { id: 5, textJP: "(5) <ruby>溶接<rt>ようせつ</rt></ruby>は<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が<ruby>母材<rt>ぼざい</rt></ruby>より<ruby>劣る<rt>おとる</rt></ruby>ことがある。", textMY: "(5) はBase Metal ()  Fatigue Life () は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - のど厚 (Throat Thickness)",
      reasonMY: "အထူမတူသောပြားများをဆက်場合はအားအနည်းဆုံးဖြစ်သော 'အထူပါးသောပြား' (薄い方の板厚) をအခြေခံ၍ ဂဟေအသားအထူ (Throat Thickness) をတွက်ချက်ရမည်။",
      memoryTipMY: "အားအနည်းဆုံး Member (ပါးသောပြား) をစံထားပါ။"
    }
  },
  {
    id: "2022-8",
    questionJP: "BCR<ruby>材<rt>ざい</rt></ruby>、BCP<ruby>材<rt>ざい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "BCR とBCP သံမဏိပစ္စည်းများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) BCR, BCPともに<ruby>大臣認定<rt>だいじんにんてい</rt></ruby>されている。", textMY: "(1) BCR とBCP はの (Minister Certification) は" },
      { id: 2, textJP: "(2) SN<ruby>材<rt>ざい</rt></ruby>よりも<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上昇<rt>じょうしょう</rt></ruby>などが<ruby>懸念<rt>けねん</rt></ruby>される。", textMY: "(2) SN Material  Yield Ratio () をしなければならない。" },
      { id: 3, textJP: "(3) BCP<ruby>材<rt>ざい</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>は490<ruby>級<rt>きゅう</rt></ruby>で325N/mm²である。", textMY: "(3) BCP 490 の (Standard Strength)  325 N/mm² は" },
      { id: 4, textJP: "(4) 400<ruby>級<rt>きゅう</rt></ruby>のBCR<ruby>材<rt>ざい</rt></ruby>の<ruby>基準強度<rt>きじゅんきょうど</rt></ruby>は295N/mm²である。", textMY: "(4) BCR 295 (400 Grade) の 295 N/mm² は" },
      { id: 5, textJP: "(5) <ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限値<rt>じょうげんち</rt></ruby>はSN<ruby>材<rt>ざい</rt></ruby>と同じく80%である。", textMY: "(5) Yield Ratio の SN Material  % は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 降伏比 (Yield Ratio)",
      reasonMY: "BCR/BCP (Cold-formed သံမဏိ) များはSN (Rolled သံမဏိ) များထက် Yield Ratio ပိုမြင့်တတ်は။ BCR295 အတွက် Yield Ratio ကန့်သတ်ချက်မှာ ၉၀% အထိ ဖြစ်နိုင်ပြီး SN とမတူပါ။",
      memoryTipMY: "Cold-formed pipe (BCR/BCP) はSN ထက် Yield Ratio ပိုမြင့်は။"
    }
  },
  {
    id: "2022-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုဂုဏ်သတ္တိများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>炭素<rt>たんそ</rt></ruby>(C)が<ruby>増加<rt>ぞうか</rt></ruby>すると<ruby>強度<rt>きょうど</rt></ruby>は<ruby>上昇<rt>じょうしょう</rt></ruby>するが、<ruby>溶接性<rt>ようせつせい</rt></ruby>は<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "(1) Carbon (C) 場合は (Strength) 、 (Weldability) は" },
      { id: 2, textJP: "(2) <ruby>降伏比<rt>こうふくひ</rt></ruby>は<ruby>強度<rt>きょうど</rt></ruby>が<ruby>高く<rt>たかく</rt></ruby>なるほど<ruby>大きく<rt>おおきく</rt></ruby>なる。", textMY: "(2) Yield Ratio は は" },
      { id: 3, textJP: "(3) Ce(炭素当量)は<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>表す<rt>あらわす</rt></ruby>。", textMY: "(3) Carbon Equivalent (Ce) は をは" },
      { id: 4, textJP: "(4) <ruby>降伏点以下<rt>こうふくてんいか</rt></ruby>で<ruby>破壊<rt>はかい</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>疲労<rt>ひろう</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "(4) Yield Point () について  をFatigue  は" },
      { id: 5, textJP: "(5) シャルピー<ruby>吸収エネルギー<rt>きゅうしゅうエネルギー</rt></ruby>は<ruby>低温度<rt>ていおんど</rt></ruby>になるほど<ruby>大きく<rt>おおきく</rt></ruby>なる。", textMY: "(5) Charpy Absorbed Energy () は  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 衝撃値と温度 (Impact Value and Temperature)",
      reasonMY: "သံမဏိはအပူချိန်နိမ့်လာ場合はပိုမို ကြွပ်ဆတ် (Brittle) လာは။ ထို့ကြောင့် ရိုက်ခတ်မှုをခံနိုင်ရည်ရှိသော စွမ်းအင် (Charpy Absorbed Energy) はအပူချိန်နိမ့်場合は'လျော့နည်း' သွားしなければならない。",
      memoryTipMY: "အေးရင် (Low Temp) -> ခံနိုင်ရည်နည်း (Low Energy)။"
    }
  },
  {
    id: "2022-10",
    questionJP: "<ruby>製作計画<rt>せいさくけいかく</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှုစီမံကိန်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は<ruby>指定機関<rt>していきかん</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>必要がある。", textMY: "(1)  (Fabrication Manual) をの しなければならない。" },
      { id: 2, textJP: "(2) <ruby>工事監理者<rt>かんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>得て<rt>えて</rt></ruby>から<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する。", textMY: "(2)  (Supervisor) の をしなければならない。" },
      { id: 3, textJP: "(3) <ruby>製作計画<rt>せいさくけいかく</rt></ruby>は<ruby>生産管理<rt>せいさんかんり</rt></ruby>の<ruby>目的達成手段<rt>もくてきたっせいしゅだん</rt></ruby>である。", textMY: "(3) は  は" },
      { id: 4, textJP: "(4) <ruby>リスク対応<rt>りすくたいおう</rt></ruby>の<ruby>手順計画<rt>てじゅんけいかく</rt></ruby>も<ruby>効果的<rt>こうかてき</rt></ruby>である。", textMY: "(4) をを は" },
      { id: 5, textJP: "(5) QC<ruby>工程表<rt>こうていひょう</rt></ruby>は<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "(5) QC Flow Chart は は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作要領書の承認 (Approval of Fabrication Manual)",
      reasonMY: "ထုတ်လုပ်မှုလမ်းညွှန် (製作要領書) をကြီးကြပ်သူ (工事監理者) သို့မဟုတ် တည်ဆောက်သူ (施工者) ကသာ အတည်ပြုရခြင်းဖြစ်は။ စစ်ဆေးရေးအဖွဲ့ (Designated Agency) が အတည်ပြုရန် မလိုအပ်ပါ။",
      memoryTipMY: "Manual を監理者 (Supervisor) が အတည်ပြုは။"
    }
  },
  {
    id: "2022-11",
    questionJP: "<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လုပ်ငန်းစံနှုန်း (Work Standard) のရည်ရွယ်ချက်についてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品<rt>せいひん</rt></ruby>を<ruby>安価<rt>あんか</rt></ruby>に<ruby>製造<rt>せいぞう</rt></ruby>する。", textMY: "(1) を 。" },
      { id: 2, textJP: "(2) <ruby>品質向上<rt>ひんしつこうじょう</rt></ruby>を<ruby>推進<rt>すいしん</rt></ruby>する。", textMY: "(2) を。" },
      { id: 3, textJP: "(3) <ruby>教育<rt>きょういく</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(3)  (Education/Training) について。" },
      { id: 4, textJP: "(4) <ruby>責任・権限<rt>せきにん・けんげん</rt></ruby>を<ruby>明確化<rt>めいかくか</rt></ruby>する。", textMY: "(4) とを。" },
      { id: 5, textJP: "(5) <ruby>品質のバラツキ<rt>ひんしつのばらつき</rt></ruby>を<ruby>少なく<rt>すくなく</rt></ruby>する。", textMY: "(5)   (Quality Variations) を。" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 作業標準の目的 (Purpose of Work Standard)",
      reasonMY: "လုပ်ငန်းစံနှုန်းのအဓိကရည်ရွယ်ချက်မှာ 'အရည်အသွေး တည်ငြိမ်စေရန်' と'ဘေးကင်းစေရန်' ဖြစ်は။ ဈေးသက်သာရန်မှာ စီးပွားရေးဆိုင်ရာ ရည်မှန်းချက်သာဖြစ်は။",
      memoryTipMY: "Standard = Quality & Safety."
    }
  },
  {
    id: "2022-12",
    questionJP: "<ruby>現寸および現寸検査<rt>げんすんおよびげんすんけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Actual measurement (Full-scale) とစစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>監理者<rt>かんりしゃ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>を<ruby>省略<rt>しょうりゃく</rt></ruby>できる。", textMY: "(1) のをは" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby>では<ruby>判断<rt>はんだん</rt></ruby>しにくい<ruby>事項<rt>じこう</rt></ruby>を<ruby>決定<rt>けってい</rt></ruby>する。", textMY: "(2) について をは" },
      { id: 3, textJP: "(3) <ruby>締付け<rt>しめつけ</rt></ruby>に<ruby>支障<rt>ししょう</rt></ruby>がないか<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "(3) Bolt   を しなければならない。" },
      { id: 4, textJP: "(4) <ruby>型板<rt>かたいた</rt></ruby>は<ruby>予測収縮量<rt>よそくしゅうしゅくりょう</rt></ruby>を<ruby>加える<rt>くわえる</rt></ruby>。", textMY: "(4) Template () の を しなければならない。" },
      { id: 5, textJP: "(5) <ruby>鋼製巻尺<rt>こうせいまきじゃく</rt></ruby>はJIS 1<ruby>級<rt>きゅう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(5) をJIS   (Class 1)  しなければならない。" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 現寸検査 (Full-scale Inspection)",
      reasonMY: "အရေးကြီးသော စစ်ဆေးမှုများをကြီးကြပ်သူ (監理者) が မဖြစ်မနေ စစ်ဆေးရမည်ဖြစ်ပြီး ချန်လှပ်၍ မရပါ။",
      memoryTipMY: "အရေးကြီးသော စစ်ဆေးမှုをချန်လှပ်၍ မရပါ။"
    }
  },
  {
    id: "2022-13",
    questionJP: "JASS 6に<ruby>基づく孔あけ加工<rt>もとづくあなあけかこう</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ အပေါက်ဖောက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) レーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>を±0.5mm<ruby>以下<rt>いか</rt></ruby>とした。", textMY: "(1) Laser でのを±0.5mm  は" },
      { id: 2, textJP: "(2) <ruby>付属金物<rt>ふぞくかなもの</rt></ruby>の30mm<ruby>孔<rt>あな</rt></ruby>をガス<ruby>あけ<rt>あけ</rt></ruby>とした。", textMY: "(2) の mm をGas では" },
      { id: 3, textJP: "(3) M16ボルト<ruby>用<rt>よう</rt></ruby>の<ruby>孔径<rt>こうけい</rt></ruby>を16.5mmとした。", textMY: "(3) M16 Bolt  を16.5mm は" },
      { id: 4, textJP: "(4) M30アンカーボルト<ruby>用<rt>よう</rt></ruby>をドリル<ruby>あけ<rt>あけ</rt></ruby>とした。", textMY: "(4) M30 Anchor Bolt  Drill では" },
      { id: 5, textJP: "(5) <ruby>板厚<rt>いたあつ</rt></ruby>16mmの<ruby>鉄筋貫通孔<rt>てっきんかんつうこう</rt></ruby>をせん<ruby>断あけ<rt>だんあけ</rt></ruby>とした。", textMY: "(5)   mm  をPunch (Shear) では" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - せん断孔あけ (Punching)",
      reasonMY: "Punch (せん断) でအပေါက်ဖောက်ခြင်းをအထူ ၁၃ mm အထိသာ ခွင့်ပြုထားは။ ၁၆ mm အထူについてမသုံးရပါ။",
      memoryTipMY: "Punching = ၁၃ မီလီမီတာ အထိသာ။"
    }
  },
  {
    id: "2022-14",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断・切削<rt>せつだん・せっさく</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်ခြင်းとပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>形状・寸法<rt>けいじょう・すんぽう</rt></ruby>に<ruby>合わせて<rt>あわせて</rt></ruby><ruby>切断<rt>せつだん</rt></ruby>する。", textMY: "(1) と  をしなければならない。" },
      { id: 2, textJP: "(2) メタルタッチは<ruby>切削機<rt>せっさくき</rt></ruby>で<ruby>密着<rt>みっちゃく</rt></ruby>するように<ruby>加工<rt>かこう</rt></ruby>する。", textMY: "(2) Metal Touch をで  しなければならない。" },
      { id: 3, textJP: "(3) <ruby>開先面<rt>かいさきめん</rt></ruby>のノッチ<ruby>深さ<rt>ふかさ</rt></ruby>は2.0mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "(3) Bevel () のNotch ()  . mm  しなければならない。" },
      { id: 4, textJP: "(4) せん<ruby>断切断<rt>だんせつだん</rt></ruby>は<ruby>板厚<rt>いたあつ</rt></ruby> 13mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "(4)  (Shearing) を mm   について しなければならない。" },
      { id: 5, textJP: "(5) スカラップ<ruby>加工<rt>かこう</rt></ruby>は<ruby>手動ガス<rt>しゅどうがす</rt></ruby>も<ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "(5) Scallop についてで Gas (Manual Gas Cutting) を は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ノッチの深さ (Notch Depth)",
      reasonMY: "Bevel မျက်နှာပြင် (開先面) のNotch အနက် ခွင့်ပြုချက် (Tolerance) မှာ ၁.၀ mm ဖြစ်は။ ၂.၀ mm မှာ များလွန်းは။",
      memoryTipMY: "ဂဟေမျက်နှာပြင် Notch Limit = 1.0mm။"
    }
  },
  {
    id: "2022-15",
    questionJP: "<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းとပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) すべり<ruby>係数<rt>けいすう</rt></ruby> 0.45 <ruby>以上<rt>いじょう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "(1) Slip Coefficient () . と しなければならない。" },
      { id: 2, textJP: "(2) <ruby>肌すき<rt>はだすき</rt></ruby> 1mm <ruby>超<rt>ちょう</rt></ruby>は<ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>を<ruby>入れる<rt>いれる</rt></ruby>。", textMY: "(2)   mm  Filler Plate しなければならない。" },
      { id: 3, textJP: "(3) <ruby>特別処理<rt>とくべつしょり</rt></ruby>は<ruby>試験<rt>しけん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(3)   しなければならない。" },
      { id: 4, textJP: "(4) ブラストは<ruby>サンドブラスト<rt>さんどぶらすと</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "(4) Sandblast をは" },
      { id: 5, textJP: "(5) <ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>も<ruby>同時に行う薬剤<rt>どうじにおこなうやくざい</rt></ruby>は<ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "(5) Black Scale () を  を" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 薬剤発せい処理 (Chemical Treatment)",
      reasonMY: "Black Scale (黒皮) をပါ ဖယ်ရှားပေးနိုင်သော ဓာတုပစ္စည်း (Chemical Agent) များをပွတ်တိုက်မျက်နှာပြင်အတွက် အသုံးပြုနိုင်は။ ထို့ကြောင့် 'မသုံးရ' ဟုဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "သံချေးတက်စေသောဆေးをသုံးနိုင်は။"
    }
  },
  {
    id: "2022-16",
    questionJP: "<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ယာယီဂဟေဆက်ခြင်း (Tack Weld) とပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) SN400<ruby>材<rt>ざい</rt></ruby>は<ruby>低水素系<rt>ていすいそけい</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(1) SN400 についてLow-hydrogen () をしなければならない。" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby> 6mm <ruby>超<rt>ちょう</rt></ruby>は<ruby>長さ<rt>ながさ</rt></ruby> 40mm <ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "(2)   mm 場合は  mm と しなければならない。" },
      { id: 3, textJP: "(3) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が<ruby>少なく<rt>すくなく</rt></ruby>なる<ruby>順序<rt>じゅんじょ</rt></ruby>で<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(3) Residual Stress ()   しなければならない。" },
      { id: 4, textJP: "(4) <ruby>ひずみ<rt>ひずみ</rt></ruby>は<ruby>矯正<rt>きょうせい</rt></ruby>してから<ruby>組立てる<rt>くみたてる</rt></ruby>。", textMY: "(4) 場合は しなければならない。" },
      { id: 5, textJP: "(5) <ruby>角部<rt>かくぶ</rt></ruby>への<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は<ruby>避ける<rt>さける</rt></ruby>。", textMY: "(5) / のについてをしなければならない。" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 組立て溶接の長さ (Tack Weld Length)",
      reasonMY: "JASS 6 အရ、အထူ 6mm ကျော်သော ပစ္စည်းများအတွက် ယာယီဂဟေအရှည်မှာ 30mm とအထက် သာ ဖြစ်ရမည်။ (40mm မဟုတ်ပါ။)",
      memoryTipMY: "Tack weld length = 30mm (not 40mm)။"
    }
  },
  {
    id: "2022-17",
    questionJP: "<ruby>ガスシールド溶接<rt>がすしーるどようせつ</rt></ruby>の<ruby>施工条件<rt>せこうじょうけん</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas welding のလုပ်ငန်းအခြေအနေများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>電流<rt>でんりゅう</rt></ruby> 330A, <ruby>電圧<rt>でんあつ</rt></ruby> 40V, <ruby>速度<rt>そくど</rt></ruby> 20cm/min.", textMY: "(1)  (Current) A、 (Voltage) V、 (Speed) cm/min。" },
      { id: 2, textJP: "(2) <ruby>入熱量<rt>にゅうねつりょう</rt></ruby>を<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "(2)  (Heat Input) を しなければならない。" },
      { id: 3, textJP: "(3) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>は<ruby>上限<rt>じょうげん</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "(3) Interpass Temperature (Pass  ) のをしなければならない。" },
      { id: 4, textJP: "(4) <ruby>高強度鋼<rt>こうきょうどこう</rt></ruby>は<ruby>入熱<rt>にゅうねつ</rt></ruby>を<ruby>大きく<rt>おおきく</rt></ruby>する。", textMY: "(4)  (High-strength Steel)  をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>防風対策<rt>ぼうふうたいさく</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(5) をしなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 入熱量 (Heat Input)",
      reasonMY: "ခိုင်မာမှုမြင့်သော သံမဏိ (High-strength Steel) များについてToughness မကျဆင်းစေရန် အပူထည့်သွင်းမှု (Heat Input) をပိုမို တင်းကျပ်စွာ လျှော့ချထိန်းချုပ်ရမည်။ ပိုကြီးစေရမည်ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "ခိုင်မာမှုမြင့်ရင် အပူをလျှော့ရမည်။"
    }
  }
];
