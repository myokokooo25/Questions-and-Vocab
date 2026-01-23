
import { StudyCardData } from '../types';

export const chapter2022Data: StudyCardData[] = [
  {
    id: "2022-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>片持梁<rt>かたもちばり</rt></ruby>と<ruby>単純梁<rt>たんじゅんばり</rt></ruby>に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>している。<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面<rt>だんめん</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しいとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့် Cantilever Beam နှင့် Simple Beam တို့တွင် ဒေါင်လိုက်ဝန် P သက်ရောက်နေသည်။ ပစ္စည်းနှင့် မျက်နှာပြင်ဖြတ်ပိုင်းတူညီပါက၊ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>片持梁<rt>かたもちばり</rt></ruby>の<ruby>固定端<rt>こていたん</rt></ruby>の<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>の1つの<ruby>支点<rt>してん</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "Cantilever beam ၏ အသေဖမ်းထားသောအစွန်းရှိ တုံ့ပြန်အားသည် Simple beam ၏ support တစ်ခုရှိ တုံ့ပြန်အား၏ ၂ ဆ ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>片持梁<rt>かたもちばり</rt></ruby>の<ruby>上端<rt>じょうたん</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>材長方向<rt>ざいちょうほうこう</rt></ruby>の<ruby>応力度<rt>おうりょくど</rt></ruby>は<ruby>引張応力度<rt>ひっぱりおうりょくど</rt></ruby>、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>のそれは<ruby>圧縮応力度<rt>あっしゅくおうりょくど</rt></ruby>である。", textMY: "Cantilever beam ၏ အပေါ်ဘက်တွင် ဆွဲအား (Tension) ဖြစ်ပေါ်ပြီး၊ Simple beam ၏ အပေါ်ဘက်တွင် ဖိအား (Compression) ဖြစ်ပေါ်သည်။" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>最大<rt>さいだい</rt></ruby>せん<ruby>断応力度<rt>だんおうりょくど</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>片持梁<rt>かたもちばり</rt></ruby>のほうが<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "အမြင့်ဆုံး Shear Stress ပမာဏသည် Cantilever beam တွင် ပိုကြီးသည်။" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>最大曲げ<rt>さいだいまげ</rt></ruby>モーメントの<ruby>大きさ<rt>おおきさ</rt></ruby>は、いずれの<ruby>梁<rt>はり</rt></ruby>も<ruby>等しい<rt>ひとしい</rt></ruby>。", textMY: "အမြင့်ဆုံး Bending Moment ပမာဏသည် beam နှစ်ခုစလုံးတွင် တူညီကြသည်။" },
      { id: 5, textJP: "(5) <ruby>片持梁<rt>かたもちばり</rt></ruby>の<ruby>先端<rt>せんたん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみは、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>の<ruby>中央<rt>ちゅうおう</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみの2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "Cantilever beam ၏ အစွန်းပိုင်း ဒေါင်လိုက်ကွေးညွှတ်မှု (Deflection) သည် Simple beam ၏ အလယ်ဗဟို ကွေးညွှတ်မှု၏ ၂ ဆ ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Deflection (たわみ)",
      reasonMY: "အင်ဂျင်နီယာပုံသေနည်းအရ Cantilever ၏ အစွန်း deflection သည် PL³/3EI ဖြစ်ပြီး၊ Simple beam ၏ အလယ် deflection သည် PL³/48EI ဖြစ်သည်။ ထို့ကြောင့် Cantilever သည် ၁၆ ဆ ပိုမိုကွေးညွှတ်သည်။ ၂ ဆဟု ဆိုထားသော (၅) မှာ မှားယွင်းသည်။",
      memoryTipMY: "Cantilever သည် Simple beam ထက် များစွာ ပိုမို ကွေးညွှတ်လွယ်သည်။"
    }
  },
  {
    id: "2022-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pを<ruby>受ける<rt>うける</rt></ruby>トラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくりょく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>組合せ<rt>くみあわせ</rt></ruby>のうち、<ruby>正しい<rt>ただしい</rt></ruby>ものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့် ဒေါင်လိုက်ဝန် P သက်ရောက်နေသော Truss Beam ၏ (အ၊ ဣ၊ ဥ) member များတွင် ဖြစ်ပေါ်သော Axial Force ဆိုင်ရာ မှန်ကန်သော ပေါင်းစပ်မှုကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: <ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ: 0", textMY: "အ: ဖိအား (Compression)၊ ဣ: ဖိအား (Compression)၊ ဥ: သုည (0)" },
      { id: 2, textJP: "(2) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: <ruby>圧縮<rt>あっしゅく</rt></ruby>、ウ: <ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "အ: ဖိအား၊ ဣ: ဖိအား၊ ဥ: ဖိအား" },
      { id: 3, textJP: "(3) ア: <ruby>引張<rt>ひっぱり</rt></ruby>、イ: <ruby>引張<rt>ひっぱり</rt></ruby>、ウ: <ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "အ: ဆွဲအား (Tension)၊ ဣ: ဆွဲအား (Tension)၊ ဥ: ဖိအား" },
      { id: 4, textJP: "(4) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: <ruby>引張<rt>ひっぱり</rt></ruby>、ウ: <ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "အ: ဖိအား၊ ဣ: ဆွဲအား၊ ဥ: ဆွဲအား" },
      { id: 5, textJP: "(5) ア: <ruby>圧縮<rt>あっしゅく</rt></ruby>、イ: 0、ウ: 0", textMY: "အ: ဖိအား၊ ဣ: သုည၊ ဥ: သုည" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Member Forces",
      reasonMY: "Truss ၏ ထိပ်ဘောင် (Top Chord) အစိတ်အပိုင်း (ア) သည် ဖိအား (Compression) ခံရသည်။ အလယ်ရှိ မျဉ်းစောင်း (イ) သည်လည်း ဝန်သက်ရောက်မှုအရ ဖိအားခံရသည်။ ဆုံမှတ်ရှိ အားမျှခြေအရ အလယ်အောက်ခြေ (ウ) တွင် အားမရှိသော Zero-force member ဖြစ်သွားသည်။",
      memoryTipMY: "Truss chord များ၏ သဘောတရားကို မှတ်သားပါ။ အပေါ်သည် ဖိအား၊ အောက်သည် ဆွဲအား ဖြစ်လေ့ရှိသည်။"
    }
  },
  {
    id: "2022-3",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "တည်ဆောက်ပုံ ဒီဇိုင်း (Structural Design) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく、<ruby>日常的<rt>にちじょうてき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>振動<rt>しんどう</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "ခိုင်မာမှုအပြင် နေ့စဉ်ဝန်များကြောင့်ဖြစ်သော တုန်ခါမှုကိုလည်း ထည့်သွင်းစဉ်းစားရန် အရေးကြီးသည်။" },
      { id: 2, textJP: "(2) <ruby>設計者<rt>せっけいしゃ</rt></ruby>は、<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>から<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby><rt>等</rt>の<ruby>納<rt>おさ</rt></ruby>まりや<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>するよう<ruby>努<rt>つと</rt></ruby>めるべきである。", textMY: "ဒီဇိုင်းအဆင့်မှစ၍ အဆက်အစပ်များနှင့် ဂဟေဆက်ခြင်း၏ ခက်ခဲမှုကို ထည့်သွင်းစဉ်းစားသင့်သည်။" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>はコンクリートや<ruby>木材<rt>もくざい</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>比重<rt>ひじゅう</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きい<ruby>材料<rt>ざいりょう</rt></ruby>であるが、<ruby>強度<rt>きょうど</rt></ruby>ははるかに<ruby>高<rt>たか</rt></ruby>いため、<ruby>軽量<rt>けいりょう</rt></ruby>で<ruby>強<rt>つよ</rt></ruby>い<ruby>構造物<rt>こうぞうぶつ</rt></ruby>ကို <ruby>造<rt>つく</rt></ruby>ることができる。", textMY: "သံမဏိသည် သိပ်သည်းဆကြီးသော်လည်း အလွန်ခိုင်ခံ့သဖြင့် ပေါ့ပါးပြီးခိုင်မာသော အဆောက်အဦများကို တည်ဆောက်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>過去<rt>かこ</rt></ruby>の<ruby>地震被害<rt>じしんひがい</rt></ruby>において、<ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>や<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>が<ruby>原因<rt>げんいん</rt></ruby>と<ruby>考<rt>かんが</rt></ruby>えられる<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>の<ruby>被害<rt>ひがい</rt></reason>က <ruby>多数観察<rt>たすうかんさつ</rt></ruby>されている。", textMY: "မသင့်လျော်သော ဂဟေအရည်အသွေး စီမံခန့်ခွဲမှုကြောင့် ပျက်စီးမှုဖြစ်ရသော သာဓကများစွာရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>သည် <ruby>材料自体<rt>ざいりょうじたい</rt></ruby>က <ruby>高<rt>たか</rt></ruby>い<ruby>靭性<rt>じんせい</rt></ruby>（ねばり<ruby>強<rt>づよ</rt></ruby>さ）を<ruby>有<rt>ゆう</rt></ruby>しているため、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わらず<ruby>常<rt>つね</rt></ruby>に<ruby>高<rt>たか</rt></ruby>い<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>က <ruby>確保<rt>かくほ</rt></ruby>される。", textMY: "သံမဏိသည် toughness မြင့်မားသောကြောင့် ဂဟေအရည်အသွေး မည်သို့ပင်ရှိစေကာမူ ငလျင်ဒဏ်ခံနိုင်ရည် အမြဲရှိသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 品質と耐震性",
      reasonMY: "သံမဏိပစ္စည်းသည် toughness မြင့်သော်လည်း၊ ဂဟေဆက်ခြင်း သို့မဟုတ် တည်ဆောက်ခြင်း အရည်အသွေး (品質) ညံ့ဖျင်းပါက ငလျင်ဒဏ်ကို မခံနိုင်ဘဲ ကျိုးပဲ့ပျက်စီးနိုင်သည်။ 'အရည်အသွေးနှင့်မဆိုင်ဘဲ' ဆိုသောအချက်မှာ မှားယွင်းသည်။",
      memoryTipMY: "မည်မျှကောင်းသော ပစ္စည်းဖြစ်စေ၊ အရည်အသွေးစီမံမှု (Quality Control) မရှိပါက အန္တရာယ်ရှိသည်။"
    }
  },
  {
    id: "2022-4",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>の<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ၏ ဖွဲ့စည်းပုံပုံစံများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>純<rt>じゅん</rt></ruby>ラーメン<ruby>構造<rt>こうぞう</rt></ruby>သည် <ruby>柱<rt>はしら</rt></ruby>နှင့်<ruby>梁<rt>はり</rt></ruby>ကို<ruby>剛<rt>ごう</rt></ruby>に<ruby>接合<rt>せつごう</rt></ruby>し、<ruby>曲げ<rt>まげ</rt></ruby>モーメントで<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Pure Frame Structure သည် bending moment ဖြင့် ဝန်ကိုခုခံပြီး ရုံးခန်းများတွင် အသုံးများသည်။" },
      { id: 2, textJP: "(2) ブレース<ruby>構造<rt>こうぞう</rt></ruby>သည် <ruby>高い水平剛性<rt>たかいすいへいごうせい</rt></ruby>ကို <ruby>確保<rt>かくほ</rt></ruby>できる。", textMY: "Brace Structure သည် မြင့်မားသော အလျားလိုက် တောင့်တင်းမှု (Horizontal Stiffness) ကို ရရှိစေသည်။" },
      { id: 3, textJP: "(3) <ruby>立体<rt>りったい</rt></ruby>トラスသည် <ruby>平面<rt>へいめん</rt></ruby>トラスよりトラスせいが<ruby>大<rt>おお</rt></ruby>きくなる<ruby>欠点<rt>けってん</rt></ruby>がある。", textMY: "Space Truss သည် Flat Truss ထက် truss height ပိုကြီးရမည်ဆိုသော အားနည်းချက်ရှိသည်။" },
      { id: 4, textJP: "(4) <ruby>免震構造<rt>めんしんこうぞう</rt></ruby>သည် <ruby>クリアランス<rt>くりあらんす</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Seismic Isolation စနစ်တွင် လှုပ်ရှားရန်အတွက် ဘေးပတ်လည် ကွာဟချက် (Clearance) လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨枠付<rt>てっこつわくつ</rt></ruby>きブレースသည် <ruby>耐火被覆<rt>たいかひふく</rt></ruby>なしで<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "သံဘောင်ပါသော brace များကို မီးဒဏ်ခံအကာ (Fireproofing) မပါဘဲ သုံးနိုင်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 耐火被覆 (Fireproofing)",
      reasonMY: "သံမဏိသည် အပူချိန် ၅၀၀ ဒီဂရီကျော်ပါက ခိုင်မာမှု ထက်ဝက်ခန့် ကျဆင်းသွားသည်။ ထို့ကြောင့် မည်သည့် သံမဏိတည်ဆောက်ပုံအစိတ်အပိုင်းမဆို မီးဘေးကာကွယ်ရေးအတွက် မီးဒဏ်ခံအကာ (Fireproofing) မဖြစ်မနေ လိုအပ်သည်။",
      memoryTipMY: "သံမဏိ (Steel) + မီး (Fire) = Fireproofing အမြဲလိုအပ်သည်။"
    }
  },
  {
    id: "2022-5",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ ဒီဇိုင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးအချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>ကို <ruby>防ぐ<rt>ふせぐ</rt></ruby>には、<ruby>鋼材<rt>こうざい</rt></ruby>ကို より<ruby>高強度<rt>こうきょうど</rt></ruby>にすればよい。", textMY: "Lateral buckling ကို ကာကွယ်ရန် ပိုမိုခိုင်မာသော သံမဏိကို ပြောင်းသုံးသင့်သည်။" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>က <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>鋼種<rt>こうしゅ</rt></ruby>ကို そのままとし<ruby>梁せい<rt>はりせい</rt></ruby>ကို <ruby>大<rt>おお</rt></ruby>きくすることで<ruby>剛性<rt>ごうせい</rt></ruby>ကို <ruby>向上<rt>こうじょう</rt></ruby>させた。", textMY: "Bending stiffness မလုံလောက်သဖြင့် beam depth ကို ကြီးအောင်လုပ်ပြီး stiffness ကို မြှင့်တင်ခဲ့သည်။" },
      { id: 3, textJP: "(3) H<ruby>形鋼<rt>がたこう</rt></ruby>၏ <ruby>強軸方向<rt>きょうじくほうこう</rt></ruby>တွင် <ruby>座屈補剛材<rt>ざくつほごうざい</rt></ruby>ကို <ruby>設けた<rt>もうけた</rt></ruby>。", textMY: "Brace ၏ buckling strength ကို strong axis ဘက်သို့ အားဖြည့်ခဲ့သည်။" },
      { id: 4, textJP: "(4) <ruby>局部座屈<rt>きょくぶざくつ</rt></ruby>ကို <ruby>防ぐ<rt>ふせぐ</rt></ruby>ために<ruby>幅厚比<rt>はばあつひ</rt></ruby>ကို <ruby>大<rt>おお</rt></ruby>きくした。", textMY: "Local buckling ကို ကာကွယ်ရန် width-to-thickness ratio ကို ကြီးအောင်လုပ်ခဲ့သည်။" },
      { id: 5, textJP: "(5) <ruby>角形鋼管<rt>かくがたこうかん</rt></ruby>သည် <ruby>細長比<rt>ほそながひ</rt></ruby>ကို <ruby>考慮<rt>こうょ</rt></ruby>しなくてよい。", textMY: "ပိုက်/လေးထောင့်တိုင်များတွင် slenderness ratio ကို စဉ်းစားရန် မလိုပါ။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 剛性と部材断面",
      reasonMY: "တောင့်တင်းမှု (Stiffness) သည် ပစ္စည်း၏ ခိုင်မာမှု (Strength) ထက် ၎င်း၏ ဖြတ်ပိုင်းပုံသဏ္ဍာန် (Moment of Inertia) အပေါ် ပိုမိုမူတည်သည်။ Beam depth (梁せい) ကို ကြီးအောင်လုပ်ခြင်းသည် stiffness ကို မြှင့်တင်ရန် အထိရောက်ဆုံး နည်းလမ်းဖြစ်သည်။",
      memoryTipMY: "Stiffness လိုချင်ရင် အရွယ်အစား (Depth) ကို ကြီးအောင်လုပ်ပါ။"
    }
  },
  {
    id: "2022-6",
    questionJP: "<ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>摩擦接合<rt>まさつせつごう</rt></ruby>နှင့် <ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>သည် <ruby>併用<rt>へいよう</rt></ruby>できる。", textMY: "Friction Joint နှင့် Tension Joint တို့ကို တွဲသုံးနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>ねじ部<rt>ぶ</rt></ruby>に<ruby>さび<rt>さび</rt></ruby>က <ruby>付着<rt>ふちゃく</rt></ruby>するとボルト<ruby>張力<rt>ちょうりょく</rt></ruby>က <ruby>低下<rt>ていか</rt></ruby>する。", textMY: "ဝက်အူရစ်တွင် သံချေးတက်ပါက torque coefficient တက်လာပြီး bolt tension ကျသွားသည်။" },
      { id: 3, textJP: "(3) <ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>သည် <ruby>溶接<rt>ようせつ</rt></ruby>なしで<ruby>組立て<rt>くみたて</rt></ruby>られる。", textMY: "Tension joint သည် ဂဟေမပါဘဲ အဆက်များကို တပ်ဆင်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>သည် JIS<ruby>規格<rt>きかく</rt></ruby>က ないため<ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "သွပ်ရည်စိမ် HS Bolt များသည် JIS စံနှုန်းမရှိသောကြောင့် အသုံးမပြုနိုင်ပါ။" },
      { id: 5, textJP: "(5) <ruby>トルシア形<rt>とるしあがた</rt></ruby>သည် ピンテールの<ruby>破断<rt>はだん</rt></ruby>ဖြင့် トルク<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Torshear bolt ကို အမြီးပြတ်ခြင်းဖြင့် torque ကို စီမံသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶融亜鉛めっきボルト",
      reasonMY: "သွပ်ရည်စိမ် HS Bolt (ဥပမာ- F12T) များသည် သီးခြား JIS မရှိသော်လည်း ဝန်ကြီး၏ အသိအမှတ်ပြုလက်မှတ် (Minister Certification) ဖြင့် ကျယ်ပြန့်စွာ အသုံးပြုနိုင်သည်။ 'မသုံးရ' ဟုဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Galvanized bolt ကို ဝန်ကြီးအသိအမှတ်ပြုချက်ဖြင့် သုံးနိုင်သည်။"
    }
  },
  {
    id: "2022-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby>သည် <ruby>技能者<rt>ぎのうしゃ</rt></ruby>の<ruby>技量<rt>ぎりょう</rt></ruby>に<ruby>依存<rt>いそん</rt></ruby>する。", textMY: "ဂဟေသည် ဂဟေဆော်သူ၏ ကျွမ်းကျင်မှုအပေါ် များစွာမူတည်သည်။" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>၏ <ruby>異なる<rt>ことなる</rt></ruby><ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>みသည် <ruby>厚い方<rt>あついほう</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>とする。", textMY: "အထူမတူသောပြားများကို အပြည့်အဝစိမ့်ဝင်ဂဟေဆက်ပါက အထူကြီးသောပြားအတိုင်း ယူရမည်။" },
      { id: 3, textJP: "(3) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>သည် <ruby>耐力<rt>たいりょく</rt></ruby>ကို <ruby>低下<rt>ていか</rt></ruby>させる。", textMY: "Residual stress သည် ခိုင်မာမှုကို ကျဆင်းစေနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>သည် サイズの2<ruby>倍<rt>ばい</rt></ruby>ကို <ruby>減じて<rt>げんじて</rt></ruby><ruby>計算<rt>けいさん</rt></ruby>する。", textMY: "Fillet weld တွက်ပါက size ၏ ၂ ဆကို နုတ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>溶接<rt>ようせつ</rt></ruby>သည် <ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>က <ruby>母材<rt>ぼざい</rt></ruby>より<ruby>劣る<rt>おとる</rt></ruby>ことがある。", textMY: "ဂဟေဆက်နေရာသည် base metal ထက် Fatigue life ပိုမိုနိမ့်ကျတတ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - のど厚 (Throat Thickness)",
      reasonMY: "အထူမတူသောပြားများကို ဆက်ပါက အားအနည်းဆုံးဖြစ်သော 'အထူပါးသောပြား' (薄い方の板厚) ကို အခြေခံ၍ ဂဟေအသားအထူကို တွက်ချက်ရမည်။",
      memoryTipMY: "အားအနည်းဆုံး Member (ပါးသောပြား) ကို စံထားပါ။"
    }
  },
  {
    id: "2022-8",
    questionJP: "BCR<ruby>材<rt>ざい</rt></ruby>、BCP<ruby>材<rt>ざい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></reason>なものはどれか。",
    questionMY: "BCR နှင့် BCP သံမဏိပစ္စည်းများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) BCR, BCPともに<ruby>大臣認定<rt>だいじんにんてい</rt></ruby>されている。", textMY: "BCR နှင့် BCP တို့သည် ဝန်ကြီး၏ အသိအမှတ်ပြုချက် ရထားသည်။" },
      { id: 2, textJP: "(2) SN<ruby>材<rt>ざい</rt></ruby>よりも<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上昇<rt>じょうしょう</rt></ruby>などが<ruby>懸念<rt>けねん</rt></ruby>される。", textMY: "SN material ထက် yield ratio တက်လာခြင်းကို သတိပြုရမည်။" },
      { id: 3, textJP: "(3) BCP<ruby>材<rt>ざい</rt></ruby>၏ <ruby>基準強度<rt>きじゅんきょうど</rt></ruby>သည် 490<ruby>級<rt>きゅう</rt></ruby>で 325N/mm² である。", textMY: "BCP 490 ၏ စံနှုန်းခိုင်မာမှုမှာ 325 ဖြစ်သည်။" },
      { id: 4, textJP: "(4) 400<ruby>級<rt>きゅう</rt></ruby>のBCR<ruby>材<rt>ざい</rt></ruby>၏ <ruby>基準強度<rt>きじゅんきょうど</rt></ruby>သည် 295N/mm² である。", textMY: "BCR 295 (400 grade) ၏ စံနှုန်းခိုင်မာမှုမှာ 295 ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限値<rt>じょうげんち</rt></ruby>သည် SN<ruby>材<rt>ざい</rt></ruby>と同じく 80% である。", textMY: "Yield ratio ၏ အမြင့်ဆုံးကန့်သတ်ချက်မှာ SN material များကဲ့သို့ပင် ၈၀% ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 降伏比 (Yield Ratio)",
      reasonMY: "BCR/BCP (Cold-formed) များသည် SN (Rolled) ထက် yield ratio ပိုမြင့်တတ်သည်။ BCR295 အတွက် yield ratio ကန့်သတ်ချက်မှာ ၉၀% အထိ ဖြစ်နိုင်ပြီး SN နှင့်မတူပါ။",
      memoryTipMY: "Cold-formed pipe (BCR/BCP) သည် SN ထက် Yield Ratio ပိုမြင့်သည်။"
    }
  },
  {
    id: "2022-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိ၏ စက်မှုဂုဏ်သတ္တိများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>炭素<rt>たんそ</rt></ruby>(C)က <ruby>増加<rt>ぞうか</rt></ruby>すると<ruby>強度<rt>きょうど</rt></ruby>သည် <ruby>上昇<rt>じょうしょう</rt></ruby>するが、<ruby>溶接性<rt>ようせつせい</rt></ruby>သည် <ruby>低下<rt>ていか</rt></ruby>する。", textMY: "Carbon များလာပါက ခိုင်မာမှုတက်သော်လည်း ဂဟေဆက်နိုင်စွမ်းကျသည်။" },
      { id: 2, textJP: "(2) <ruby>降伏比<rt>こうふくひ</rt></ruby>သည် <ruby>強度<rt>きょうど</rt></ruby>က <ruby>高く<rt>たかく</rt></ruby>なるほど<ruby>大きく<rt>おおきく</rt></ruby>なる。", textMY: "Yield Ratio သည် ခိုင်မာမှုမြင့်လေ ကြီးမားလေဖြစ်သည်။" },
      { id: 3, textJP: "(3) Ce(炭素当量)သည် <ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>ကို <ruby>表す<rt>あらわす</rt></ruby>。", textMY: "Carbon Equivalent (Ce) သည် ဂဟေဆက်ရန် ခက်ခဲမှုကို ဖော်ပြသည်။" },
      { id: 4, textJP: "(4) <ruby>降伏点以下<rt>こうふくてんいか</rt></ruby>で<ruby>破壊<rt>はかい</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>ကို <ruby>疲労<rt>ひろう</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Yield point အောက်တွင်ပင် ပျက်စီးသွားခြင်းကို Fatigue ဟု ခေါ်သည်။" },
      { id: 5, textJP: "(5) シャルピー<ruby>吸収エネルギー<rt>きゅうしゅうエネルギー</rt></ruby>သည် <ruby>低温<rt>ていおん</rt></ruby>になるとほど<ruby>大きく<rt>おおきく</rt></ruby>なる。", textMY: "Charpy absorbed energy သည် အပူချိန်နိမ့်လေလေ ကြီးမားလေလေ ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 衝撃値と温度",
      reasonMY: "သံမဏိသည် အပူချိန်နိမ့်လာပါက ပိုမို ကြွပ်ဆတ် (Brittle) ဖြစ်လာသည်။ ထို့ကြောင့် ရိုက်ခတ်မှုကို ခံနိုင်ရည်ရှိသော စွမ်းအင် (Charpy absorbed energy) သည် အပူချိန်နိမ့်ပါက 'လျော့နည်း' သွားရမည်။",
      memoryTipMY: "အေးရင် (Low Temp) -> ခံနိုင်ရည်နည်း (Low Energy)။"
    }
  },
  {
    id: "2022-10",
    questionJP: "<ruby>製作計画<rt>せいさくけいかく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှုစီမံကိန်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>သည် <ruby>指定機関<rt>していきかん</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>ကို <ruby>受ける<rt>うける</rt></ruby>必要がある。", textMY: "ထုတ်လုပ်မှုလမ်းညွှန်ကို စစ်ဆေးရေးအဖွဲ့၏ အတည်ပြုချက် ရယူရမည်။" },
      { id: 2, textJP: "(2) <ruby>工事監理者<rt>かんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>ကို <ruby>得て<rt>えて</rt></ruby>から<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>する。", textMY: "ကြီးကြပ်သူ၏ အတည်ပြုချက်ရပြီးမှ ထုတ်လုပ်မှုကို စတင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>製作計画<rt>せいさくけいかく</rt></ruby>သည် <ruby>生産管理<rt>せいさんかんり</rt></ruby>の<ruby>目的達成手段<rt>もくてきたっせいしゅだん</rt></ruby>である。", textMY: "ထုတ်လုပ်မှုစီမံကိန်းသည် စီမံခန့်ခွဲမှု ရည်မှန်းချက်အောင်မြင်ရန် နည်းလမ်းဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>リスク対応<rt>りすくたいおう</rt></ruby>၏ <ruby>手順計画<rt>てじゅんけいかく</rt></ruby>လည်း <ruby>効果的<rt>こうかてき</rt></ruby>である。", textMY: "အန္တရာယ်များကို ဖြေရှင်းမည့်လုပ်ငန်းစဉ်များကို စီစဉ်ထားခြင်းမှာ ထိရောက်သည်။" },
      { id: 5, textJP: "(5) QC<ruby>工程表<rt>こうていひょう</rt></ruby>သည် <ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "QC Flow Chart သည် အရည်အသွေးထိန်းချုပ်ရန် အသုံးဝင်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作要領書の承認",
      reasonMY: "ထုတ်လုပ်မှုလမ်းညွှန် (製作要領書) ကို ကြီးကြပ်သူ (工事監理者) သို့မဟုတ် တည်ဆောက်သူ (施工者) ကသာ အတည်ပြုရခြင်းဖြစ်သည်။ စစ်ဆေးရေးအဖွဲ့က အတည်ပြုရန် မလိုအပ်ပါ။",
      memoryTipMY: "Manual ကို 監理者 (Supervisor) က အတည်ပြုသည်။"
    }
  },
  {
    id: "2022-11",
    questionJP: "<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လုပ်ငန်းစံနှုန်း (Work Standard) ၏ ရည်ရွယ်ချက်တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品<rt>せいひん</rt></ruby>ကို <ruby>安価<rt>あんか</rt></ruby>に<ruby>製造<rt>せいぞう</rt></ruby>する。", textMY: "ထုတ်ကုန်ကို ဈေးအသက်သာဆုံး ထုတ်လုပ်ရန်။" },
      { id: 2, textJP: "(2) <ruby>品質向上<rt>ひんしつこうじょう</rt></ruby>ကို <ruby>推進<rt>すいしん</rt></ruby>する。", textMY: "အရည်အသွေးမြှင့်တင်ရေးကို တွန်းအားပေးရန်။" },
      { id: 3, textJP: "(3) <ruby>教育<rt>きょういく</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "သင်ကြားပြသရန်။" },
      { id: 4, textJP: "(4) <ruby>責任・権限<rt>せきにん・けんげん</rt></ruby>ကို <ruby>明確化<rt>めいかくか</rt></ruby>する。", textMY: "တာဝန်နှင့် လုပ်ပိုင်ခွင့်များကို ရှင်းလင်းစေရန်။" },
      { id: 5, textJP: "(5) <ruby>品質のバラツキ<rt>ひんしつのばらつき</rt></ruby>ကို <ruby>少なく<rt>すくなく</rt></ruby>する。", textMY: "အရည်အသွေး ကွဲပြားမှုများကို လျှော့ချရန်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 作業標準の目的",
      reasonMY: "လုပ်ငန်းစံနှုန်း၏ အဓိကရည်ရွယ်ချက်မှာ 'အရည်အသွေး တည်ငြိမ်စေရန်' နှင့် 'ဘေးကင်းစေရန်' ဖြစ်သည်။ ဈေးသက်သာရန်မှာ စီးပွားရေးဆိုင်ရာ ရည်မှန်းချက်သာဖြစ်သည်။",
      memoryTipMY: "Standard = Quality & Safety."
    }
  },
  {
    id: "2022-12",
    questionJP: "<ruby>現寸および現寸検査<rt>げんすんおよびげんすんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Actual measurement (Full-scale) နှင့် စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>監理者<rt>かんりしゃ</rt></ruby>၏ <ruby>検査<rt>けんさ</rt></ruby>ကို <ruby>省略<rt>しょうりゃく</rt></ruby>できる。", textMY: "ကြီးကြပ်သူ၏ စစ်ဆေးမှုကို ချန်လှပ်နိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby>では<ruby>判断<rt>はんだん</rt></ruby>しにくい<ruby>事項<rt>じこう</rt></ruby>ကို <ruby>決定<rt>けってい</rt></ruby>する。", textMY: "ပုံစံတွင် မဆုံးဖြတ်နိုင်သော အချက်များကို အတည်ပြုရန်ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>締付け<rt>しめつけ</rt></ruby>に<ruby>支障<rt>ししょう</rt></ruby>がないか<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Bolt ညှပ်ရန် အဟန့်အတား ရှိမရှိကိုလည်း စစ်ဆေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>型板<rt>かたいた</rt></ruby>သည် <ruby>予測収縮量<rt>よそくしゅうしゅくりょう</rt></ruby>ကို <ruby>加える<rt>くわえる</rt></ruby>。", textMY: "Template ၏ အရွယ်အစားမှာ ကျုံ့ဝင်မည့်ပမာဏကိုပါ ထည့်တွက်ထားရမည်။" },
      { id: 5, textJP: "(5) <ruby>鋼製巻尺<rt>こうせいまきじゃく</rt></ruby>သည် JIS 1<ruby>級<rt>きゅう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "သံမဏိပေကြိုးကို JIS အဆင့် ၁ ပစ္စည်းကို သုံးရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 現寸検査",
      reasonMY: "အရေးကြီးသော စစ်ဆေးမှုများကို ကြီးကြပ်သူ (監理者) က မဖြစ်မနေ စစ်ဆေးရမည်ဖြစ်ပြီး ချန်လှပ်၍ မရပါ။",
      memoryTipMY: "အရေးကြီးသော စစ်ဆေးမှုကို ချန်လှပ်၍ မရပါ။"
    }
  },
  {
    id: "2022-13",
    questionJP: "JASS 6に<ruby>基づく孔あけ加工<rt>もとづくあなあけかこう</rt></ruby>တွင် <ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></>なものはどれか。",
    questionMY: "JASS 6 အရ အပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) レーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>၏ <ruby>精度<rt>せいど</rt></ruby>ကို ±0.5mm<ruby>以下<rt>いか</rt></ruby>とした。", textMY: "Laser ၏ တိကျမှုကို ±0.5mm အောက် ထားရှိခဲ့သည်။" },
      { id: 2, textJP: "(2) <ruby>付属金物<rt>ふぞくかなもの</rt></ruby>၏ 30mm<ruby>孔<rt>あな</rt></ruby>ကို ガス<ruby>あけ<rt>あけ</rt></ruby>とした。", textMY: "ဆက်စပ်ပစ္စည်းများ၏ ၃၀ mm အပေါက်ကို gas ဖြင့် ဖောက်ခဲ့သည်။" },
      { id: 3, textJP: "(3) M16ボルト<ruby>用<rt>よう</rt></ruby>の<ruby>孔径<rt>こうけい</rt></ruby>ကို 16.5mmとした。", textMY: "M16 bolt အတွက် အပေါက်အချင်းကို 16.5mm ထားရှိခဲ့သည်။" },
      { id: 4, textJP: "(4) M30アンカーボルト<ruby>用<rt>よう</rt></ruby>ကို ドリル<ruby>あけ<rt>あけ</rt></ruby>とした。", textMY: "M30 anchor bolt အတွက် drill ဖြင့် အပေါက်ဖောက်ခဲ့သည်။" },
      { id: 5, textJP: "(5) <ruby>板厚<rt>いたあつ</rt></ruby>16mm၏ <ruby>鉄筋貫通孔<rt>てっきんかんつうこう</rt></ruby>ကို せん<ruby>断あけ<rt>だんあけ</rt></ruby>とした。", textMY: "အထူ ၁၆ mm ရှိသော သံချောင်းဖြတ်သန်းပေါက်ကို punch (shear) ဖြင့် ဖောက်ခဲ့သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - せん断孔あけ",
      reasonMY: "Punch (せん断) ဖြင့် အပေါက်ဖောက်ခြင်းကို အထူ ၁၃ mm အထိသာ ခွင့်ပြုထားသည်။ ၁၆ mm တွင် မသုံးရပါ။",
      memoryTipMY: "Punching = ၁၃ မီလီမီတာ အထိသာ။"
    }
  },
  {
    id: "2022-14",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断・切削<rt>せつだん・せっさく</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်ခြင်းနှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>形状・寸法<rt>けいじょう・すんぽう</rt></ruby>に<ruby>合わせて<rt>あわせて</rt></ruby><ruby>切断<rt>せつだん</rt></ruby>する。", textMY: "ပုံသဏ္ဍာန်အလိုက် သင့်လျော်သောနည်းလမ်းကို ရွေးချယ်ရမည်။" },
      { id: 2, textJP: "(2) メタルタッチသည် <ruby>切削機<rt>せっさくき</rt></ruby>で<ruby>密着<rt>みっちゃく</rt></ruby>するように<ruby>加工<rt>かこう</rt></ruby>する。", textMY: "Metal touch နေရာများကို စက်ဖြင့် တိကျစွာ ကပ်နေအောင် ပြုလုပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>開先面<rt>かいさきめん</rt></ruby>のノッチ<ruby>深さ<rt>ふかさ</rt></ruby>သည် 2.0mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "Bevel မျက်နှာပြင်၏ notch အနက်မှာ ၂.၀ mm အောက် ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) せん<ruby>断切断<rt>だんせつだん</rt></ruby>သည် <ruby>板厚<rt>いたあつ</rt></ruby> 13mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "ညှပ်ဖြတ်ခြင်း (Shearing) ကို ၁၃ mm အောက်ပြားများတွင်သာ လုပ်ရမည်။" },
      { id: 5, textJP: "(5) スカラップ<ruby>加工<rt>かこう</rt></ruby>သည် <ruby>手動ガス<rt>しゅどうがす</rt></ruby>လည်း<ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "Scallop ပြုလုပ်ရာတွင် လက်ဖြင့်ဖြတ်သော Gas ကိုလည်း သုံးသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ノッチの深さ (Notch Depth)",
      reasonMY: "Bevel မျက်နှာပြင် (開先面) ၏ Notch အနက် ခွင့်ပြုချက်မှာ ၁.၀ mm ဖြစ်သည်။ ၂.၀ mm မှာ များလွန်းသည်။",
      memoryTipMY: "ဂဟေမျက်နှာပြင် Notch Limit = 1.0mm။"
    }
  },
  {
    id: "2022-15",
    questionJP: "<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းနှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) すべり<ruby>係数<rt>けいすう</rt></ruby> 0.45 <ruby>以上<rt>いじょう</rt></ruby>ကို <ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "Slip coefficient ၀.၄၅ နှင့်အထက် ရှိရမည်။" },
      { id: 2, textJP: "(2) <ruby>肌すき<rt>はだすき</rt></ruby> 1mm <ruby>超<rt>ちょう</rt></ruby>သည် <ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>ကို<ruby>入れる<rt>いれる</rt></ruby>。", textMY: "ကွာဟချက် ၁ mm ထက်ကျော်လျှင် Filler plate ထည့်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>特別処理<rt>とくべつしょり</rt></ruby>သည် <ruby>試験<rt>しけん</rt></ruby>ကို <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "အထူးပြုပြင်မှုများအတွက် စမ်းသပ်မှု လုပ်ရမည်။" },
      { id: 4, textJP: "(4) ブラストသည် <ruby>サンドブラスト<rt>さんどぶらすと</rt></ruby>ကို<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "Sandblast ကို အသုံးပြုနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>လည်း <ruby>同時に行う薬剤<rt>どうじにおこなうやくざい</rt></ruby>は<ruby>使用不可<rt>しようふか</rt></reason>である。", textMY: "Black scale ကိုပါ ဖယ်ရှားပေးသော ဓာတုဆေးများကို မသုံးရပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 薬剤発せい処理",
      reasonMY: "Black scale (黒皮) ကိုပါ ဖယ်ရှားပေးနိုင်သော ဓာတုပစ္စည်း (Chemical Agent) များကို ပွတ်တိုက်မျက်နှာပြင်အတွက် အသုံးပြုနိုင်သည်။ ထို့ကြောင့် 'မသုံးရ' ဟုဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "သံချေးတက်စေသောဆေးကို သုံးနိုင်သည်။"
    }
  },
  {
    id: "2022-16",
    questionJP: "<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ယာယီဂဟေဆက်ခြင်း (Tack Weld) နှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) SN400<ruby>材<rt>ざい</rt></ruby>သည် <ruby>低水素系<rt>ていすいそけい</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "SN400 တွင် low-hydrogen rod ကို သုံးရမည်။" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby> 6mm <ruby>超<rt>ちょう</rt></ruby>သည် <ruby>長さ<rt>ながさ</rt></ruby> 40mm <ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "အထူ ၆ mm ကျော်ပါက ဂဟေအရှည် ၄၀ mm နှင့်အထက် ရှိရမည်။" },
      { id: 3, textJP: "(3) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>က <ruby>少なく<rt>すくなく</rt></ruby>なる<ruby>順序<rt>じゅんじょ</rt></ruby>で<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "Residual stress နည်းမည့် အစီအစဉ်အတိုင်း လုပ်ဆောင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>ひずみ<rt>ひずみ</rt></ruby>သည် <ruby>矯正<rt>きょうせい</rt></ruby>してから<ruby>組立てる<rt>くみたてる</rt></ruby>。", textMY: "ကွေးနေပါက အရင်ဖြောင့်ပြီးမှ တပ်ဆင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>角部<rt>かくぶ</rt></ruby>への<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>သည် <ruby>避ける<rt>さける</rt></ruby>。", textMY: "သံလုံး/ပိုက် ၏ ထောင့်ချိုးနေရာများတွင် ယာယီဂဟေဆက်ခြင်းကို ရှောင်ရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 組立て溶接の長さ",
      reasonMY: "JASS 6 အရ၊ အထူ 6mm ကျော်သော ပစ္စည်းများအတွက် ယာယီဂဟေအရှည်မှာ 30mm နှင့်အထက် သာ ဖြစ်ရမည်။",
      memoryTipMY: "Tack weld length = 30mm (not 40mm)။"
    }
  },
  {
    id: "2022-17",
    questionJP: "<ruby>ガスシールド溶接<rt>がすしーるどようせつ</rt></ruby>の<ruby>施工条件<rt>せこうじょうけん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas welding ၏ လုပ်ငန်းအခြေအနေများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>電流<rt>でんりゅう</rt></ruby> 330A, <ruby>電圧<rt>でんあつ</rt></ruby> 40V, <ruby>速度<rt>そくど</rt></ruby> 20cm/min.", textMY: "လျှပ်စီးကြောင်း ၃၃၀A၊ ဗို့အား ၄၀V၊ အရှိန် ၂၀cm/min။" },
      { id: 2, textJP: "(2) <ruby>入熱量<rt>にゅうねつりょう</rt></ruby>ကို <ruby>適切<rt>てきせつ</rt></ruby>に<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "အပူထည့်သွင်းမှုပမာဏကို သင့်လျော်စွာ စီမံရမည်။" },
      { id: 3, textJP: "(3) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>သည် <ruby>上限<rt>じょうげん</rt></ruby>ကို <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Pass အကြား အပူချိန်၏ အမြင့်ဆုံးကန့်သတ်ချက်ကို စီမံရမည်။" },
      { id: 4, textJP: "(4) <ruby>高強度鋼<rt>こうきょうどこう</rt></ruby>သည် <ruby>入熱<rt>にゅうねつ</rt></ruby>ကို <ruby>大きく<rt>おおきく</rt></ruby>する。", textMY: "ခိုင်မာမှုမြင့်သောသံမဏိအတွက် အပူပေးမှုကို ပိုမိုများပြားစေရမည်။" },
      { id: 5, textJP: "(5) <ruby>防風対策<rt>ぼうふうたいさく</rt></ruby>ကို <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "လေကာအစီအမံများကို လုပ်ဆောင်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 入熱量 (Heat Input)",
      reasonMY: "ခိုင်မာမှုမြင့်သော သံမဏိ (High-strength steel) များတွင် Toughness မကျဆင်းစေရန် အပူထည့်သွင်းမှု (Heat Input) ကို ပိုမို တင်းကျပ်စွာ လျှော့ချထိန်းချုပ်ရမည်။ ပိုကြီးစေရမည်ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "ခိုင်မာမှုမြင့်ရင် အပူကို လျှော့ရမည်။"
    }
  },
  {
    id: "2022-18",
    questionJP: "<ruby>溶接記号<rt>ようせつきごう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေသင်္ကေတများတွင် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>သည် <ruby>脚長<rt>きゃくちょう</rt></ruby>ကို <ruby>明記<rt>めいき</rt></ruby>する。", textMY: "Fillet weld တွင် leg length ကို ရှင်းလင်းစွာ ဖော်ပြရမည်။" },
      { id: 2, textJP: "(2) <ruby>現場溶接<rt>げんばようせつ</rt></ruby>သည် <ruby>旗<rt>はた</rt></ruby>のマークを<ruby>付す<rt>ふす</rt></ruby>。", textMY: "အလုပ်ခွင်ဂဟေအတွက် အလံအမှတ်အသား သုံးရမည်။" },
      { id: 3, textJP: "(3) <ruby>裏当て金<rt>うらあてがね</rt></ruby>သည် <ruby>記号内<rt>きごうない</rt></ruby>တွင် <ruby>表示<rt>ひょうじ</rt></ruby>する。", textMY: "Backing metal ကို သင်္ကေတအတွင်း၌ ဖော်ပြရမည်။" },
      { id: 4, textJP: "(4) <ruby>全周溶接<rt>ぜんしゅうようせつ</rt></ruby>သည် <ruby>丸<rt>まる</rt></ruby>のマークを<ruby>付す<rt>ふす</rt></ruby>。", textMY: "ပတ်လည်ဂဟေအတွက် စက်ဝိုင်းအမှတ်အသား သုံးရမည်။" },
      { id: 5, textJP: "(5) <ruby>開先角度<rt>かいさきかくど</rt></ruby>သည် <ruby>記入不要<rt>きにゅうふよう</rt></reason>である。", textMY: "Groove angle (မြောင်းထောင့်) ကို ရေးသားရန် မလိုအပ်ပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接記号 (Welding Symbols)",
      reasonMY: "ဂဟေမြောင်း၏ ထောင့် (Groove Angle) သည် ဂဟေစိမ့်ဝင်မှုအတွက် အရေးကြီးသောကြောင့် သင်္ကေတတွင် မဖြစ်မနေ ဖော်ပြရမည်။",
      memoryTipMY: "အရေးကြီးတဲ့ အတိုင်းအတာတွေကို သင်္ကေတမှာ အမြဲထည့်ရသည်။"
    }
  },
  {
    id: "2022-19",
    questionJP: "<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆော်သူ (Welder) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>自動溶接<rt>じどうようせつ</rt></ruby>သည် <ruby>基本級<rt>きほんきゅう</rt></ruby>でよい。", textMY: "Automatic welding လုပ်သူသည် အခြေခံအဆင့် ရှိရုံဖြင့် ရသည်။" },
      { id: 2, textJP: "(2) <ruby>半自動<rt>はんじどう</rt></ruby>သည် JIS Z 3841 <ruby>合格者<rt>ごうかくしゃ</rt></ruby>とする。", textMY: "Semi-automatic ဂဟေအတွက် JIS Z 3841 အောင်မြင်သူ ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>スタッド<rt>すたっど</rt></ruby>သည် <ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "Stud welding အတွက် အရည်အချင်းရှိသူ ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) AW<ruby>検定<rt>けんてい</rt></ruby>သည် <ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "AW စာမေးပွဲသည် အကျုံးဝင်သည်။" },
      { id: 5, textJP: "(5) <ruby>技量確認<rt>ぎりょうかくにん</rt></ruby>ကို <ruby>行う<rt>おこなう</rt></ruby>ことがある。", textMY: "ကျွမ်းကျင်မှုကို စစ်ဆေးမှု ပြုလုပ်နိုင်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 自動溶接の資格",
      reasonMY: "အလိုအလျောက် ဂဟေဆက်စက် (SAW စသည်) မောင်းသူများသည် ၎င်းနှင့် သက်ဆိုင်သော အထူးပြု ကျွမ်းကျင်အဆင့် (専門級) ကို ရရှိထားရန် လိုအပ်သည်။",
      memoryTipMY: "စက်ကြီးတွေမောင်းရင် 専門級 လိုသည်။"
    }
  },
  {
    id: "2022-20",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) -5℃~5℃သည် <ruby>予熱<rt>よねつ</rt></ruby>する。", textMY: "အပြင်အပူချိန် -၅ မှ ၅ ဒီဂရီအတွင်းဆိုပါက အပူပေးရမည်။" },
      { id: 2, textJP: "(2) <ruby>予熱温度<rt>よねつおんど</rt></ruby>သည် <ruby>低い方<rt>ひくいほう</rt></ruby>とする。", textMY: "Preheat အပူချိန် မတူညီပါက အနိမ့်ဆုံးကို ယူရမည်။" },
      { id: 3, textJP: "(3) <ruby>変形<rt>へんけい</rt></ruby>၏ <ruby>大きい方<rt>おおきいほう</rt></ruby>ကို <ruby>先行<rt>せんこう</rt></ruby>させる。", textMY: "ပုံပျက်မှုများမည့်ဘက်ကို အရင်ဆုံး ဂဟေဆက်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>水分・油分<rt>すいぶん・ゆぶん</rt></ruby>ကို <ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "ရေနှင့် ဆီကို ဖယ်ရှားရမည်။" },
      { id: 5, textJP: "(5) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>သည် <ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "ယာယီဂဟေ (Tack weld) ကို သတိပြုရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予熱温度",
      reasonMY: "အထူမတူသော သံမဏိများကို ဆက်ပါက အအေးခံနှုန်းကို ထိန်းချုပ်ရန်အတွက် 'အမြင့်ဆုံး လိုအပ်ချက်ရှိသော အပူချိန်' (高い方の温度) ကို ယူရမည်။",
      memoryTipMY: "အပူပေးရင် အမြင့်ဆုံးကို ကြည့်ပါ။"
    }
  },
  {
    id: "2022-21",
    questionJP: "<ruby>裏当て金<rt>うらあてがね</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Backing metal နှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶落ち防止<rt>とけおちぼうし</rt></ruby>である。", textMY: "အရည်ပျော်ကျခြင်းကို ကာကွယ်ရန်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>密着<rt>みっちゃく</rt></ruby>させる必要がある。", textMY: "ကပ်နေရန် လိုအပ်သည်။" },
      { id: 3, textJP: "(3) <ruby>仮付け<rt>かりづけ</rt></ruby>သည် <ruby>開先外<rt>かいさきがい</rt></ruby>とする。", textMY: "ယာယီဂဟေကို bevel အပြင်ဘက်တွင် လုပ်ဆောင်သည်။" },
      { id: 4, textJP: "(4) <ruby>エンドタブ<rt>えんどたぶ</rt></ruby>ကို <ruby>併用<rt>へいよう</rt></ruby>する。", textMY: "End tab နှင့် တွဲသုံးရမည်။" },
      { id: 5, textJP: "(5) <ruby>鋼製<rt>こうせい</rt></ruby>သည် <ruby>母材同等<rt>ぼざいどうとう</rt></ruby>とする。", textMY: "Backing metal သည် base metal နှင့် တန်းတူ ဖြစ်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 仮付け溶接の位置",
      reasonMY: "Backing metal ၏ ယာယီဂဟေကို Bevel ၏ အတွင်းဘက် (開先内) တွင်သာ လုပ်ဆောင်ရမည်။ အပြင်ဘက်တွင် လုပ်ပါက ချို့ယွင်းချက် ဖြစ်စေနိုင်သည်။",
      memoryTipMY: "ယာယီဂဟေကို မြောင်းထဲမှာပဲ လုပ်ရမည်။"
    }
  },
  {
    id: "2022-22",
    questionJP: "<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>の<ruby>発生原因<rt>はっせいげんいん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေချို့ယွင်းချက်ဖြစ်ရသည့်အကြောင်းအရင်းများနှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>アンダーカット<rt>あんだーかっと</rt></ruby>သည် <ruby>遅い溶接速度<rt>おそいようせつそくど</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "Undercut သည် နှေးကွေးသော ဂဟေဆက်နှုန်းကြောင့် ဖြစ်ပေါ်လွယ်သည်။" },
      { id: 2, textJP: "(2) <ruby>ピット<rt>ぴっと</rt></ruby>သည် <ruby>油分・水分<rt>ゆぶん·すいぶん</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "Pit သည် ဆီနှင့် ရေငွေ့များကြောင့် ဖြစ်ပေါ်လွယ်သည်။" },
      { id: 3, textJP: "(3) <ruby>オーバーラップ<rt>おーばーらっぷ</rt></ruby>သည် <ruby>低電圧<rt>ていでんအာနိသင်</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "Overlap သည် ဗို့အားနည်းခြင်းကြောင့် ဖြစ်ပေါ်လွယ်သည်။" },
      { id: 4, textJP: "(4) <ruby>融合不良<rt>ゆうごうふりょう</rt></ruby>သည် <ruby>過小な電流<rt>かしょうなでんりゅう</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "Incomplete fusion သည် current နည်းလွန်းခြင်းကြောင့် ဖြစ်ပေါ်လွယ်သည်။" },
      { id: 5, textJP: "(5) <ruby>アークストライク<rt>あーくすとらいく</rt></ruby>သည် <ruby>瞬間的<rt>しゅんかんてき</rt></ruby>なアークで<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "Arc strike သည် ခဏတာ ထိမိသော arc ကြောင့် ဖြစ်ပေါ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - アンダーカット (Undercut)",
      reasonMY: "Undercut သည် များသောအားဖြင့် 'မြန်လွန်းသော' ဂဟေဆက်နှုန်း (速い溶接速度) ကြောင့် ဖြစ်ပေါ်ခြင်းဖြစ်သည်။ နှေးပါက ဖြစ်ပေါ်ရန် ခက်ခဲသည်။",
      memoryTipMY: "အရှိန်မြန်ရင် ဘေးသားတွေ လောင်စားသွားတတ်တယ်။"
    }
  },
  {
    id: "2022-23",
    questionJP: "<ruby>溶接法<rt>ようせつほう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေနည်းလမ်းများဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>融接<rt>ゆうせつ</rt></ruby>သည် <ruby>溶融<rt>ようゆう</rt></ruby>して<ruby>接合<rt>せつごう</rt></ruby>する。", textMY: "Fusion welding သည် အရည်ပျော်ပြီး ဆက်ခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>圧接<rt>あっせつ</rt></ruby>သည် <ruby>圧力<rt>あつりょく</rt></ruby>ကို <ruby>利用<rt>りよう</rt></ruby>する。", textMY: "Pressure welding သည် ဖိအားကို သုံးသည်။" },
      { id: 3, textJP: "(3) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>သည် <ruby>融接のみ<rt>ゆうせつのみ</rt></ruby>である。", textMY: "ဆောက်လုပ်ရေး သံမဏိအတွက် Fusion welding သာ သုံးသည်။" },
      { id: 4, textJP: "(4) <ruby>低融点金属<rt>ていゆうてんきんぞく</rt></ruby>ကို <ruby>充填<rt>じゅうてん</rt></ruby>する。", textMY: "အရည်ပျော်မှတ်နိမ့်သော သတ္တုကို ဖြည့်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>溶極式<rt>ようきょくしき</rt></ruby>သည် <ruby>心線<rt>しんせん</rt></ruby>က <ruby>溶ける<rt>とける</rt></ruby>。", textMY: "Consumable electrode နည်းတွင် wire အရည်ပျော်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 建築鉄骨の溶接",
      reasonMY: "ဆောက်လုပ်ရေးတွင် သံချောင်းဆက်ခြင်းကဲ့သို့သော 圧接 (Pressure welding) ကိုလည်း အသုံးပြုသည်။",
      memoryTipMY: "Pressure welding ကိုလည်း သုံးသည်။"
    }
  },
  {
    id: "2022-24",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>硬さ<rt>かたさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ မာကျောမှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>合金元素<rt>ごうきんげんそ</rt></ruby>နှင့် <ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>ဖြင့် <ruby>定まる<rt>さだまる</rt></ruby>。", textMY: "Alloy element နှင့် အအေးခံနှုန်းအပေါ် မူတည်သည်။" },
      { id: 2, textJP: "(2) HAZသည် <ruby>母材<rt>ぼざい</rt></ruby>၏ <ruby>成分<rt>せいぶん</rt></ruby>ဖြင့် <ruby>定まる<rt>さだまる</rt></ruby>。", textMY: "HAZ ၏ မာကျောမှုသည် base metal ၏ ဓာတုဖွဲ့စည်းပုံအပေါ် မူတည်သည်။" },
      { id: 3, textJP: "(3) <ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>သည် <ruby>ボンド部<rt>ぼんどぶ</rt></ruby>で<ruby>示される<rt>しめされる</rt></ruby>。", textMY: "အမြင့်ဆုံးမာကျောမှုကို Bond line တွင် တွေ့ရသည်။" },
      { id: 4, textJP: "(4) <ruby>予熱<rt>よねつ</rt></ruby>ကို<ruby>施すと最高硬さ<rt>ほどこすとさいこうかたさ</rt></ruby>は<ruby>大きく<rt>おおきく</rt></ruby>なる。", textMY: "Preheat လုပ်ပါက အမြင့်ဆုံးမာကျောမှု ပိုကြီးလာသည်။" },
      { id: 5, textJP: "(5) Ceqသည် <ruby>硬さ<rt>かたさ</rt></ruby>၏ <ruby>指標<rt>しひょう</rt></ruby>である。", textMY: "Carbon Equivalent သည် မာကျောမှု၏ အညွှန်းကိန်းဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予熱 (Preheating)",
      reasonMY: "Preheat (予熱) လုပ်ခြင်းသည် အအေးခံနှုန်းကို နှေးကွေးစေသောကြောင့် မာကျောမှု (Hardness) ကို လျှော့ချပေးသည်။ ပိုကြီးလာသည်ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "အပူပေးရင် အေးတာနှေးပြီး ပျော့သွားမယ်။"
    }
  },
  {
    id: "2022-25",
    questionJP: "<ruby>ガスシールド溶接<rt>がすしーるどようせつ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas welding နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外部ガス<rt>がいぶがす</rt></ruby>で<ruby>遮蔽<rt>しゃへい</rt></ruby>する。", textMY: "ပြင်ပမှ gas ဖြင့် ကာကွယ်ပေးသည်။" },
      { id: 2, textJP: "(2) <ruby>自動送給<rt>じどうそうきゅう</rt></ruby>される。", textMY: "Wire ကို အလိုအလျောက် ကျွေးသည်။" },
      { id: 3, textJP: "(3) <ruby>水素含有量<rt>すいそがんゆうりょう</rt></ruby>က <ruby>少ない<rt>すくない</rt></ruby>。", textMY: "ဟိုက်ဒရိုဂျင် ပါဝင်မှု နည်းသည်။" },
      { id: 4, textJP: "(4) <ruby>防風対策<rt>ぼうふうたいさく</rt></ruby>သည် 5m/s <ruby>以上<rt>いじょう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>。", textMY: "လေတိုက်နှုန်း 5 m/s ကျော်မှ အကာအကွယ် လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>炭酸ガス<rt>たんさんがす</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "CO2 gas ကို သုံးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 防風対策",
      reasonMY: "Gas welding (CO2) အတွက် လေတိုက်နှုန်း ၂ m/s (2m/s) ကျော်လျှင်ပင် gas လွင့်သွားနိုင်သဖြင့် အကာအကွယ် လိုအပ်သည်။",
      memoryTipMY: "လေ ၂ မီတာ ကျော်ရင် အကာအကွယ် လိုပြီ။"
    }
  },
  {
    id: "2022-26",
    questionJP: "<ruby>脆性破壊<rt>ぜいせいはかい</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Brittle Fracture (ကြွပ်ဆတ်ကျိုးပဲ့ခြင်း) နှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>変形<rt>へんけい</rt></ruby>က <ruby>小さい<rt>ちいさい</rt></ruby>。", textMY: "ပုံမပျက်ဘဲ ကျိုးတတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>低温<rt>ていおん</rt></ruby>で<ruby>発生しやすい<rt>はっせいしやすい</rt></ruby>。", textMY: "အပူချိန်နိမ့်ချိန်တွင် ပိုဖြစ်လွယ်သည်။" },
      { id: 3, textJP: "(3) <ruby>靭性<rt>じんせい</rt></ruby>က <ruby>低い<rt>ひくい</rt></ruby>と<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "Toughness နည်းလျှင် ဖြစ်ပေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>防止<rt>ぼうし</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "ကာကွယ်ရန် လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>条件<rt>じょうけん</rt></ruby>1つで<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "အချက်တစ်ချက်တည်းဖြင့် ဖြစ်ပွားသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 脆性破壊の条件",
      reasonMY: "Brittle Fracture သည် အပူချိန်၊ အားသက်ရောက်မှုနှုန်း၊ မျက်နှာပြင်ပုံစံ စသည့် အချက်များစွာ ပေါင်းစပ်မှ ဖြစ်ပေါ်ခြင်းဖြစ်သည်။",
      memoryTipMY: "အချက်များစွာ ပေါင်းစပ်မှ ဖြစ်သည်။"
    }
  },
  {
    id: "2022-27",
    questionJP: "<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ပစ္စည်းများနှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆棒<rt>ひふくぼう</rt></ruby>သည် <ruby>乾燥<rt>かんそう</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "ဂဟေချောင်းကို အခြောက်ခံရန် လိုအပ်သည်။" },
      { id: 2, textJP: "(2) <ruby>フラックスワイヤ<rt>ふらっくすわいや</rt></ruby>သည် <ruby>内部<rt>ないぶ</rt></ruby>に<ruby>粉末<rt>ふんまつ</rt></ruby>がある。", textMY: "Flux wire ၏ အတွင်း၌ ဆေးမှုန့်များ ပါဝင်သည်။" },
      { id: 3, textJP: "(3) 490<ruby>級<rt>ကတြား</rt></ruby>သည် YGW11を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "490 အဆင့်တွင် YGW11 ကို သုံးသည်။" },
      { id: 4, textJP: "(4) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>သည် <ruby>脱酸元素<rt>だっさんげんそ</rt></ruby>を<ruby>含む<rt>ふくむ</rt></ruby>。", textMY: "Solid wire တွင် အောက်ဆီဂျင်ဖယ်ရှားသော ပစ္စည်းများ ပါဝင်သည်။" },
      { id: 5, textJP: "(5) <ruby>スラグ系<rt>すらぐけい</rt></ruby>သည် <ruby>外観<rt>がいかん</rt></ruby>က <ruby>劣る<rt>おとる</rt></ruby>。", textMY: "Slag type သည် အပြင်ပန်းပုံသဏ္ဍာန် ညံ့ဖျင်းသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - スラグ系フラックスワイヤ",
      reasonMY: "Slag type flux wire သည် အခြားနည်းလမ်းများထက် ပိုမိုကောင်းမွန်ပြီး လှပသော ဂဟေမျက်နှာပြင် (Weld appearance) ကို ရရှိစေနိုင်သည်။",
      memoryTipMY: "Slag type က ပိုလှသည်။"
    }
  },
  {
    id: "2022-28",
    questionJP: "<ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သွပ်ရည်စိမ်ခြင်းနှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>けがき<rt>けがき</rt></ruby>သည် <ruby>油性マーカー<rt>ゆせいまーかー</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Marking အတွက် ဆီစုတ်တံ သုံးရမည်။" },
      { id: 2, textJP: "(2) <ruby>めっき槽<rt>めっきそう</rt></ruby>に<ruby>一度に浸漬<rt>いちどにしんせき</rt></ruby>する。", textMY: "သွပ်ရည်ကန်ထဲ တစ်ခါတည်း အကုန်နှစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>板厚差<rt>いたあつさ</rt></ruby>သည် 2<ruby>倍程度<rt>ばいていど</rt></ruby>とする。", textMY: "အထူကွာခြားချက်မှာ ၂ ဆခန့်အထိ ထားနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>形状<rt>けいじょう</rt></ruby>သည် <ruby>対称形<rt>たいしょうけい</rt></ruby>က <ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "ပုံစံမှာ ဘယ်ညာညီနေခြင်းက ပိုကောင်းသည်။" },
      { id: 5, textJP: "(5) <ruby>溶接量<rt>ようせつりょう</rt></ruby>ကို <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "ဂဟေဆက်ပမာဏကို စီမံရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - めっきのけがき",
      reasonMY: "သွပ်ရည်စိမ်မည့်ပစ္စည်းများတွင် ဆီစုတ်တံ (Oil marker) သုံးပါက သွပ်ရည်မကပ်ဘဲ ဖြစ်တတ်သည်။ ထို့ကြောင့် သီးခြားဆေး သို့မဟုတ် ခဲတံ သုံးရမည်။",
      memoryTipMY: "ဆီစုတ်တံ (Oil marker) မသုံးရပါ။"
    }
  },
  {
    id: "2022-29",
    questionJP: "<ruby>仕分け・輸送<rt>しわけ・ゆそう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းခွဲခြားခြင်းနှင့် သယ်ယူပို့ဆောင်ရေးတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品符号<rt>せいひんふごう</rt></ruby>သည် <ruby>容易に読み取れる<rt>よういによみとれる</rt></ruby>ようにする。", textMY: "ပစ္စည်းအမှတ်အသားကို လွယ်ကူစွာ ဖတ်နိုင်ရမည်။" },
      { id: 2, textJP: "(2) 5t<ruby>超<rt>ちょう</rt></ruby>သည် <ruby>重量を表示<rt>じゅうりょうをひょうじ</rt></ruby>する。", textMY: "၅ တန်ကျော်လျှင် အလေးချိန်ကို ရေးပြရမည်။" },
      { id: 3, textJP: "(3) <ruby>寸法・重量<rt>すんပေါう・じゅうりょう</rt></ruby>ကို <ruby>計画<rt>けいかく</rt></ruby>する。", textMY: "အရွယ်အစားနှင့် အလေးချိန်ကို စီမံချက်ဆွဲရမည်။" },
      { id: 4, textJP: "(4) <ruby>輸送経路<rt>ゆそうけいろ</rt></ruby>ကို <ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "သယ်ယူမည့်လမ်းကြောင်းကို အတည်ပြုရမည်။" },
      { id: 5, textJP: "(5) <ruby>最上段のみ<rt>さいじょうだんのみ</rt></ruby>を<ruby>緊結<rt>きんけつ</rt></ruby>する。", textMY: "အပေါ်ဆုံးအလွှာကိုသာ ချည်နှောင်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 輸送の安全",
      reasonMY: "သယ်ယူပို့ဆောင်ရေးတွင် ပစ္စည်းများ ပြုတ်မကျစေရန် အလွှာအားလုံးကို ခိုင်မြဲစွာ ချည်နှောင်ရမည်။",
      memoryTipMY: "အကုန်လုံးကို သေချာချည်ရမည်။"
    }
  },
  {
    id: "2022-30",
    questionJP: "<ruby>品質マネジメント<rt>ひんしつまねじめんと</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေးစီမံခန့်ခွဲမှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>全員<rt>ぜんいん</rt></ruby>က PDCAကို <ruby>組織的<rt>そしきてき</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "လူတိုင်း PDCA စနစ်ကို စနစ်တကျ လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>スパイラルアップ<rt>すぱいらるあっぷ</rt></ruby>で<ruby>改善<rt>かいぜん</rt></ruby>する。", textMY: "စဉ်ဆက်မပြတ် တိုးတက်မှုဖြင့် ပြုပြင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>品質管理<rt>ひんしつかんり</rt></ruby>より<ruby>広い<rt>ひろい</rt></ruby><ruby>意味<rt>いみ</rt></ruby>である。", textMY: "QC ထက် ပိုမိုကျယ်ပြန့်သော အဓိပ္ပါယ်ဖြစ်သည်။" },
      { id: 4, textJP: "(4) プロセスကို <ruby>重視<rt>じゅうし</rt></ruby>する。", textMY: "လုပ်ငန်းစဉ်ကို အလေးထားသည်။" },
      { id: 5, textJP: "(5) <ruby>手直し<rt>てなおし</rt></ruby>することが<ruby>最優先<rt>さいゆうせん</rt></ruby>である。", textMY: "ပြင်ဆင်ခြင်းသည် အရေးကြီးဆုံးဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予防と処置",
      reasonMY: "အရည်အသွေးစီမံမှုတွင် ပြင်ဆင်ခြင်းထက် မမှားအောင် ကြိုတင်ကာကွယ်ခြင်း (予防) က ပိုမိုအရေးကြီးသည်။",
      memoryTipMY: "မမှားအောင်အရင်လုပ်ပါ။"
    }
  },
  {
    id: "2022-31",
    questionJP: "<ruby>品質管理活動<rt>ひんしつかんりかつどう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေးစီမံခန့်ခွဲမှု လှုပ်ရှားမှုများတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>工程<rt>こうてい</rt></ruby>ကို <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "လုပ်ငန်းစဉ်ကို စီမံခန့်ခွဲရမည်။" },
      { id: 2, textJP: "(2) <ruby>自主的<rt>じしゅてき</rt></ruby>に<ruby>是正<rt>ぜせい</rt></ruby>した<ruby>後<rt>あと</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>する。", textMY: "မိမိဘာသာ ပြင်ဆင်ပြီးမှ အစီရင်ခံရမည်။" },
      { id: 3, textJP: "(3) <ruby>判定基準<rt>はんていきじゅん</rt></ruby>ကို <ruby>明確<rt>めいかく</rt></ruby>にする。", textMY: "ဆုံးဖြတ်ချက်စံနှုန်းကို ရှင်းလင်းစေရမည်။" },
      { id: 4, textJP: "(4) <ruby>設備<rt>せつび</rt></ruby>ကို <ruby>維持管理<rt>いじかんり</rt></ruby>する。", textMY: "စက်ပစ္စည်းများကို ထိန်းသိမ်းရမည်။" },
      { id: 5, textJP: "(5) <ruby>誤用<rt>ごよう</rt></ruby>ကို <ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "မှားယွင်းသုံးစွဲမှုကို ကာကွယ်ရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不適合の報告",
      reasonMY: "မကိုက်ညီမှု တွေ့ရှိပါက အရင်ဦးဆုံး အစီရင်ခံပြီးမှ ကြီးကြပ်သူ၏ ညွှန်ကြားချက်အတိုင်း ပြင်ဆင်ရမည်။",
      memoryTipMY: "အရင်ပြောပြီးမှ ပြင်ရမည်။"
    }
  },
  {
    id: "2022-32",
    questionJP: "QC7つ<ruby>道具<rt>どうぐ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "QC Tools ၇ မျိုးတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) パレート<ruby>図<rt>ず</rt></ruby>သည် <ruby>累積度数<rt>るいせきどすう</rt></ruby>ကို<ruby>示す<rt>しめす</rt></ruby>。", textMY: "Pareto chart သည် စုစုပေါင်းအရေအတွက်ကို ပြသည်။" },
      { id: 2, textJP: "(2) <ruby>特性要因図<rt>とくせいよういんず</rt></ruby>သည် <ruby>折れ線グラフ<rt>おれせんぐらふ</rt></ruby>である。", textMY: "Characteristic diagram သည် မျဉ်းကွေးဂရပ်တစ်ခုဖြစ်သည်။" },
      { id: 3, textJP: "(3) ヒストグラムသည် <ruby>バラツキ<rt>ばらつき</rt></ruby>ကို<ruby>示す<rt>しめす</rt></ruby>。", textMY: "Histogram သည် ကွဲပြားမှုများကို ပြသည်။" },
      { id: 4, textJP: "(4) チェックシートသည် <ruby>状況把握<rt>じょうきょうはあく</rt></ruby>に<ruby>役立つ<rt>やくだつ</rt></ruby>。", textMY: "Check sheet သည် အခြေအနေ သိရှိရန် အသုံးဝင်သည်။" },
      { id: 5, textJP: "(5) <ruby>管理図<rt>かんりず</rt></ruby>သည် <ruby>安定状態<rt>あんていじょうたい</rt></ruby>ကို<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Control chart သည် တည်ငြိမ်မှုကို စစ်ဆေးသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 特性要因図 (Fishbone)",
      reasonMY: "特性要因図 (Fishbone diagram) သည် အကြောင်းနှင့် အကျိုးကို ပြသော ပုံစံဖြစ်ပြီး မျဉ်းကွေးဂရပ် (Line graph) မဟုတ်ပါ။",
      memoryTipMY: "Fishbone က ငါးရိုးပုံစံ ဖြစ်သည်။"
    }
  },
  {
    id: "2022-33",
    questionJP: "<ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဓာတုဖွဲ့စည်းမှု စစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>化学成分<rt>かがくせいぶん</rt></ruby>ကို <ruby>調べる<rt>しらべる</rt></ruby>。", textMY: "ဓာတုပစ္စည်းများကို စစ်ဆေးခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>နှင့် <ruby>製品分析<rt>せいひんぶんせき</rt></ruby>がある。", textMY: "စက်ရုံတွင်းနှင့် ထုတ်ကုန်စစ်ဆေးမှု ၂ မျိုး ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>証明書<rt>しょうめいしょ</rt></ruby>သည် <ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>による。", textMY: "Mill sheet သည် စက်ရုံတွင်း စစ်ဆေးမှုအပေါ် အခြေခံသည်။" },
      { id: 4, textJP: "(4) <ruby>結果<rt>けっか</rt></ruby>သည် <ruby>常に一致<rt>つねにいっち</rt></ruby>する。", textMY: "ရလဒ် ၂ ခုမှာ အမြဲတမ်း တူညီသည်။" },
      { id: 5, textJP: "(5) <ruby>不明<rt>ふめい</rt></ruby>သည် <ruby>調べる<rt>しらべる</rt></ruby>必要がある。", textMY: "မသိပါက စစ်ဆေးရန် လိုအပ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 成分分析",
      reasonMY: "အရည်ဖျော်ချိန် (溶鋼) နှင့် ထုတ်ကုန်ဖြစ်ချိန် (製品) တွင် စစ်ဆေးပါက နေရာနှင့် အချိန်ကွဲပြားသဖြင့် ရလဒ် အနည်းငယ် ကွဲပြားနိုင်သည်။ 'အမြဲတမ်းတူသည်' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "ရလဒ် အနည်းငယ် ကွဲပြားနိုင်သည်။"
    }
  },
  {
    id: "2022-34",
    questionJP: "<ruby>社内検査<rt>しゃないけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ရုံတွင်းစစ်ဆေးမှုတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>成績表<rt>せいせきひょう</rt></ruby>ကို <ruby>記録<rt>きろく</rt></ruby>する。", textMY: "ရလဒ်ဇယားကို မှတ်တမ်းတင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>設計寸法<rt>せっけいすんပေါု</rt></ruby>၏ <ruby>差<rt>さ</rt></ruby>ကို <ruby>記録<rt>きろく</rt></ruby>する。", textMY: "ဒီဇိုင်းနှင့် ကွာခြားချက်ကို မှတ်တမ်းတင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>柱の長さ<rt>はしらのながさ</rt></ruby>သည် <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>とする。", textMY: "တိုင်၏အရှည်ကို နမူနာကောက်ယူစစ်ဆေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>သည် <ruby>すべて対象<rt>すべてたいしょう</rt></ruby>とする。", textMY: "ဂဟေအားလုံးကို စစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>要領書<rt>ようりょうしょ</rt></ruby>ကို <ruby>収録<rt>しゅうろく</rt></ruby>する。", textMY: "လမ်းညွှန်ချက်ကို ထည့်သွင်းရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 寸法検査",
      reasonMY: "တိုင်နှင့် မြားတန်းများ၏ အတိုင်းအတာ (Dimensions) ကို အားလုံး (全数検査) စစ်ဆေးရမည်။ နမူနာကောက်၍ မရပါ။",
      memoryTipMY: "အတိုင်းအတာကို အားလုံး စစ်ရမည်။"
    }
  },
  {
    id: "2022-35",
    questionJP: "ナット<ruby>回転法<rt>かいてんほう</rt></ruby>၏ <ruby>検査<rt>けんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Nut Rotation Method ဖြင့် စစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>共回り<rt>ともまわり</rt></ruby>၏ <ruby>有無<rt>うむ</rt></ruby>ကို <ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "အတူလည်ခြင်း ရှိမရှိ စစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>共回り<rt>ともまわり</rt></ruby>သည် <ruby>追締め<rt>おいしめ</rt></ruby>して<ruby>処置<rt>しょち</rt></ruby>する。", textMY: "အတူလည်ပါက ထပ်ကျပ်ပြီး ဖြေရှင်းရမည်။" },
      { id: 3, textJP: "(3) M12သည် 60°~90°ကို <ruby>適合<rt>てきごう</rt></ruby>とする。", textMY: "M12 အတွက် ၆၀-၉၀ ဒီဂရီကို အောင်သည်ဟု သတ်မှတ်သည်။" },
      { id: 4, textJP: "(4) <ruby>回転不足<rt>かいてんふそく</rt></ruby>သည် <ruby>追締め<rt>おいしめ</rt></ruby>する。", textMY: "မလည်သေးပါက ထပ်လည်အောင် ကျပ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>余長<rt>よちょう</rt></ruby>သည် 1~6<ruby>山<rt>やま</rt></ruby>とする。", textMY: "Bolt အစွန်းမှာ ဝက်အူရစ် ၁-၆ ခု ထွက်နေရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 共回り",
      reasonMY: "အတူလည်ခြင်း (共回り) ဖြစ်ပေါ်ပါက ထို bolt ကို ပြန်ကျပ်ရုံဖြင့် မရဘဲ အသစ်လဲလှယ်ရမည်။",
      memoryTipMY: "အတူလည်ရင် (共回り) အသစ်လဲပါ။"
    }
  },
  {
    id: "2022-36",
    questionJP: "<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Limit Tolerance နှင့် ပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>修正<rt>しゅうせい</rt></ruby>က <ruby>可能<rt>かのう</rt></ruby>である。", textMY: "ပြင်ဆင်ခြင်း လုပ်နိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>重要度<rt>じゅうようど</rt></ruby>ကို <ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "အရေးကြီးမှုကို ထည့်တွက်ရမည်။" },
      { id: 3, textJP: "(3) 5%<ruby>以内<rt>いない</rt></ruby>ならそのまま<ruby>使用可能<rt>しようかのう</rt></ruby>である。", textMY: "၅ ရာခိုင်နှုန်းအတွင်းဆိုလျှင် ဒီအတိုင်း သုံးနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>補修<rt>ほしゅう</rt></ruby>ဖြင့် <ruby>対処<rt>たいしょ</rt></ruby>できる。", textMY: "ပြုပြင်ခြင်းဖြင့် ဖြေရှင်းနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>製作管理上<rt>せいさくかんりじょう</rt></ruby>၏ <ruby>必要性<rt>ひつようせい</rt></ruby>がある。", textMY: "ထုတ်လုပ်မှု စီမံခန့်ခွဲမှုအတွက် လိုအပ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差の逸脱",
      reasonMY: "ခွင့်ပြုဘောင် (Limit Tolerance) ကို ကျော်လွန်သွားပါက ဒီအတိုင်း သုံး၍ မရပါ။ ပြင်ဆင်ရန် သို့မဟုတ် ပြန်လုပ်ရန် လိုအပ်သည်။",
      memoryTipMY: "ကျော်သွားရင် ဒီအတိုင်း မသုံးရပါ။"
    }
  },
  {
    id: "2022-37",
    questionJP: "<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းစစ်ဆေးမှု (Object Inspection) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>直接判定<rt>ちょくせつはんてい</rt></ruby>する方法と、<ruby>間接的<rt>かんせつてき</rt></ruby>に判定する方法がある。", textMY: "တိုက်ရိုက်စစ်ဆေးဆုံးဖြတ်နည်းနှင့် သွယ်ဝိုက်သောနည်းဖြင့် ဆုံးဖြတ်နည်းဟူ၍ ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>により<ruby>合否<rt>ごうひ</rt></ruby>を判定する。", textMY: "Inspection 1 သည် စီမံခန့်ခွဲမှု ခွင့်ပြုဘောင် (Management Tolerance) ဖြင့် အောင်/ရှုံး ဆုံးဖြတ်သည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>最も複雑な統計処理<rt>もっともふくざつなとうけいしょり</rt></ruby>に<ruby>基づく<rt>もとづく</rt></ruby>方法である。", textMY: "Inspection 1 သည် အရှုပ်ထွေးဆုံးသော စာရင်းအင်းနည်းပညာ (Statistics) အပေါ် အခြေခံသည့် နည်းလမ်းဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>は、<ruby>全数<rt>ぜんすう</rt></ruby>の<ruby>記録<rt>きろく</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Inspection 2 ကို မှတ်တမ်းအပြည့်အစုံရှိသည့်အခါတွင် အသုံးပြုနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>は、5<ruby>個<rt>こ</rt></ruby>のサンプルを<ruby>照合<rt>しょうごう</rt></ruby>する。", textMY: "Inspection 2 သည် နမူနာ ၅ ခုကို တိုက်ဆိုင်စစ်ဆေးခြင်း ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査1",
      reasonMY: "Inspection 1 သည် နမူနာကောက်ယူစစ်ဆေးသည့် အရိုးရှင်းဆုံးနည်းလမ်း ဖြစ်သည်။ အရှုပ်ထွေးဆုံး စာရင်းအင်းနည်းလမ်း မဟုတ်ပါ။",
      memoryTipMY: "Inspection 1 = Simple Sampling Method."
    }
  },
  {
    id: "2022-38",
    questionJP: "<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>と<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်ကို ဖြေရှင်းခြင်းနှင့် ထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>ကို <ruby>正しい<rt>正しい</rt></ruby>くとらえることが<ruby>重要<rt>じゅうよう</rt></reason>である。", textMY: "ဖြစ်ပွားနေသည့် အခြေအနေကို မှန်ကန်စွာ သိရှိနားလည်ရန် အရေးကြီးသည်။" },
      { id: 2, textJP: "(2) <ruby>原因<rt>げんいん</rt></ruby>ကို <ruby>推定<rt>すいてい</rt></ruby>し、<ruby>工程<rt>こうてい</rt></ruby>内の<ruby>問題<rt>もんだい</rt></ruby>ကို <ruby>判断<rt>はんだん</rt></ruby>する。", textMY: "အကြောင်းရင်းကို ရှာဖွေပြီး လုပ်ငန်းစဉ်အတွင်းရှိ ပြဿနာကို ဆုံးဖြတ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>製作手順<rt>せいさくてじゅん</rt></ruby>၏ <ruby>具体的な見直し<rt>ぐたいてきなみなおし</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>になる。", textMY: "ထုတ်လုပ်မှု အဆင့်ဆင့်ကို တိကျစွာ ပြန်လည်သုံးသပ်ရန် လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>誤差の累積<rt>ごさのるいせき</rt></ruby>က <ruby>全体の問題<rt>ぜんたいのもんだい</rt></ruby>となることもある。", textMY: "အနည်းငယ်စီ လွဲချော်မှုများ စုမိသွားပါက တစ်ခုလုံးအတွက် ပြဿနာ ဖြစ်လာနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>許容差内<rt>きょようさない</rt></ruby>လည်း <ruby>全て再製作<rt>すべてさいせいさく</rt></ruby>しなければならない。", textMY: "ခွင့်ပြုဘောင်အတွင်း ရှိနေလျှင်ပင် အားလုံးကို အသစ်ပြန်လည် ထုတ်လုပ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不具合の処置",
      reasonMY: "ခွင့်ပြုဘောင် (Tolerance) အတွင်း ရှိနေပါက အသစ်ပြန်လုပ်ရန် မလိုပါ။ ချို့ယွင်းချက်ကို ပြုပြင်ရုံ သို့မဟုတ် အခြေအနေအရ ဆက်လက်အသုံးပြုနိုင်သည်။ အားလုံးပြန်လုပ်ရန် မလိုအပ်ပါ။",
      memoryTipMY: "Tolerance အတွင်းရှိရင် အသစ်ပြန်လုပ်ဖို့ မလိုပါ။"
    }
  },
  {
    id: "2022-39",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ အရည်အသွေးစီမံမှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工場の管理体制<rt>こうじょうのかんりたいせい</rt></ruby>၏ <ruby>中<rt>なか</rt></ruby>でチェックされる。", textMY: "စက်ရုံ၏ စီမံခန့်ခွဲမှုစနစ်အတွင်း စစ်ဆေးရမည်။" },
      { id: 2, textJP: "(2) <ruby>製作中の管理<rt>せいさくちゅうのかんり</rt></ruby>ကို <ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>必要がある。", textMY: "ထုတ်လုပ်နေစဉ်အတွင်း စီမံခန့်ခွဲမှုကို လုံလောက်စွာ လုပ်ဆောင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>溶接後の検査<rt>ようせつごのけんさ</rt></ruby>သည် <ruby>改善<rt>かいぜん</rt></ruby>のためにも<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "ဂဟေဆက်ပြီးနောက် စစ်ဆေးခြင်းသည် နောက်ပိုင်းတိုးတက်မှုအတွက်လည်း အထောက်အကူပြုသည်။" },
      { id: 4, textJP: "(4) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>တွင် <ruby>手直し要領<rt>てなおしようりょう</rt></ruby>သည် <ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "ထုတ်လုပ်မှုလမ်းညွှန် (Manual) တွင် ပြန်လည်ပြုပြင်နည်း (Repair manual) ကို ထည့်ရန် မလိုပါ။" },
      { id: 5, textJP: "(5) <ruby>非破壊検査<rt>ひはかいけんさ</rt></ruby>လည်း <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "NDT စစ်ဆေးမှုကိုလည်း လုပ်ဆောင်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作要領書の内容",
      reasonMY: "ထုတ်လုပ်မှုလမ်းညွှန် (製作要領書) တွင် စစ်ဆေးနည်းများနှင့်အတူ ချို့ယွင်းချက်တွေ့ပါက မည်သို့ပြုပြင်ရမည်ဆိုသည့် (手直し要領) ကိုပါ မဖြစ်မနေ ထည့်သွင်းရမည်။",
      memoryTipMY: "Manual တွင် စစ်ဆေးနည်းရော ပြင်နည်းပါ ပါရမည်။"
    }
  },
  {
    id: "2022-40",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>社内検査<rt>しゃないけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ စက်ရုံတွင်းစစ်ဆေးမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質管理機能<rt>ひんしつかんりきのう</rt></ruby>ကို <ruby>確認<rt>かくにん</rt></ruby>する<ruby>行為<rt>こうい</rt></ruby>である。", textMY: "အရည်အသွေးစီမံမှု လုပ်ဆောင်ချက်ကို အတည်ပြုခြင်း ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>全製品完了後<rt>ぜんせいひんかんりょうご</rt></ruby>にまとめて<ruby>実施<rt>じっし</rt></ruby>するのが<ruby>効率的<rt>こうりつてき</rt></ruby>である。", textMY: "ပစ္စည်းအားလုံး ပြီးစီးသွားမှ တစ်ခါတည်း စစ်ဆေးခြင်းက ပိုထိရောက်သည်။" },
      { id: 3, textJP: "(3) <ruby>外観検査<rt>がいかんけんさ</rt></ruby>နှင့် <ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>ကို <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "အပြင်ပန်းနှင့် အတွင်းပိုင်းချို့ယွင်းချက်များကို စစ်ဆေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>検査結果<rt>けんさけっか</rt></ruby>သည် <ruby>受入検査時<rt>うけいれけんさじ</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>する。", textMY: "စစ်ဆေးမှုရလဒ်များကို လက်ခံစစ်ဆေးချိန်တွင် တင်ပြရမည်။" },
      { id: 5, textJP: "(5) <ruby>超音波探傷<rt>ちょうおんぱたんしょう</rt></ruby>သည် <ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>က <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "UT စစ်ဆေးမှုကို အရည်အချင်းရှိသူကသာ လုပ်ဆောင်ရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 検査のタイミング",
      reasonMY: "အားလုံးပြီးမှစစ်ပါက ပြဿနာတွေ့လျှင် အားလုံးပြန်ပြင်ရမည်ဖြစ်သဖြင့် မထိရောက်ပါ။ လုပ်ငန်းစဉ်တစ်ခုချင်းစီအလိုက် အချိန်နှင့်တစ်ပြေးညီ စစ်ဆေးခြင်းက ပိုမိုကောင်းမွန်ပါသည်။",
      memoryTipMY: "ပြီးမှစစ်တာထက် လုပ်ရင်းစစ်တာက ပိုကောင်းပါတယ်။"
    }
  },
  {
    id: "2022-41",
    questionJP: "JASS 6の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></reason>なものはどれか。",
    questionMY: "JASS 6 အရ အပြင်ပန်းစစ်ဆေးခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>နှင့် <ruby>精度<rt>せいど</rt></ruby>に<ruby>対して行う<rt>たいしておこなう</rt></ruby>。", textMY: "မျက်နှာပြင်ချို့ယွင်းချက်နှင့် တိကျမှုတို့အတွက် လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>対象範囲<rt>たいしょうはんい</rt></ruby>သည် <ruby>全溶接部<rt>ぜんようせつぶ</rt></ruby>である。", textMY: "ဂဟေဆက်နေရာ အားလုံးကို စစ်ဆေးရမည်။" },
      { id: 3, textJP: "(3) <ruby>目視検査<rt>もくしけんさ</rt></ruby>ကို <ruby>基本<rt>きほん</rt></ruby>とする。", textMY: "မျက်စိဖြင့် ကြည့်ရှုစစ်ဆေးခြင်းမှာ အခြေခံဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>割れ<rt>われ</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>されたら<ruby>抜取方法<rt>ぬきとりほうほう</rt></ruby>ကို <ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: "အက်ကွဲကြောင်းတွေ့လျှင် နမူနာကောက်စစ်မည့်နည်းလမ်းကို ဆွေးနွေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>不合格箇所<rt>ふごうかくかしょ</rt></ruby>သည် <ruby>補修<rt>ほしゅう</rt></ruby>し<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "မအောင်မြင်သောနေရာများကို ပြုပြင်ပြီး ပြန်စစ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 割れの処置 (Cracks)",
      reasonMY: "အက်ကွဲကြောင်း (Crack) တွေ့ရှိပါက ၎င်းသည် အလွန်အရေးကြီးသော ချို့ယွင်းချက်ဖြစ်သဖြင့် နမူနာကောက်စစ်ရန် မလိုအပ်ဘဲ အသေးစိတ် စုံစမ်းစစ်ဆေးပြီး အားလုံးကို ပြုပြင်ရမည်။",
      memoryTipMY: "အက်ကွဲကြောင်း (Crack) တွေ့ရင် ဆွေးနွေးမနေနဲ့၊ ချက်ချင်း အသေးစိတ်စစ်ပါ။"
    }
  },
  {
    id: "2022-42",
    questionJP: "JASS 6における<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 ၏ စီမံခန့်ခွဲမှု ခွင့်ပြုဘောင် (Management Tolerance) တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>アンダーカット<rt>あんだーかっと</rt></ruby>သည် 0.3mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "Undercut သည် ၀.၃ mm အောက် ဖြစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>ピット<rt>ぴっと</rt></ruby>သည် 1<ruby>個以下<rt>こいか</rt></ruby>とする。", textMY: "Pit (လေပေါက်) သည် ၁ ခုအောက် ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>オーバーラップ<rt>おーばーらっぷ</rt></ruby>သည် <ruby>あってはならない<rt>あってはならない</rt></ruby>。", textMY: "Overlap လုံးဝ မရှိရပါ။" },
      { id: 4, textJP: "(4) <ruby>余盛高さ<rt>よもりたかさ</rt></ruby>သည် 3mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "ဂဟေဖောင်းကြွမှုအမြင့်မှာ ၃ mm အောက် ဖြစ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>脚長不足<rt>きゃくちょうふそく</rt></ruby>သည် 10% <ruby>以内<rt>いない</rt></ruby>なら<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "ဂဟေခြေထောက်အရှည် (Leg length) ၁၀% လျော့နေလျှင် အောင်သည်ဟု သတ်မှတ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 脚長の許容差",
      reasonMY: "ဂဟေခြေထောက်အရှည် (Leg length) သည် ဒီဇိုင်းအရွယ်အစားထက် လုံးဝ လျော့နည်းခြင်း မရှိရပါ။",
      memoryTipMY: "Leg length (脚長) သည် လျော့၍ မရပါ။"
    }
  },
  {
    id: "2022-43",
    questionJP: "<ruby>非破壊試験<rt>ひはかいしけん</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "NDT စစ်ဆေးမှုများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>放射線透過試験<rt>ほうしゃせんとうかしけん</rt></ruby>သည် <ruby>欠陥<rt>けっかん</rt></ruby>က <ruby>濃く写る<rt>こくうつる</rt></ruby>。", textMY: "RT တွင် ချို့ယွင်းချက်နေရာကို ပိုမည်းနက်စွာ တွေ့ရသည်။" },
      { id: 2, textJP: "(2) <ruby>超音波探傷<rt>ちょうおんぱたんしょう</rt></ruby>သည် <ruby>反射波<rt>はんしゃは</rt></ruby>ကို <ruby>受信<rt>じゅしん</rt></ruby>する。", textMY: "UT သည် ပဲ့တင်လှိုင်း (Echo) ကို လက်ခံရယူသည်။" },
      { id: 3, textJP: "(3) <ruby>垂直探傷<rt>すいちょくたんしょう</rt></ruby>နှင့် <ruby>斜角探傷<rt>しゃかくたんしょう</rt></ruby>がある。", textMY: "Straight beam နှင့် Angle beam စစ်ဆေးနည်းများ ရှိသည်။" },
      { id: 4, textJP: "(4) <ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>鉄骨溶接<rt>てっこつようせつ</rt></ruby>သည် <ruby>垂直探傷<rt>すいちょくたんしょう</rt></ruby>ကို <ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "သာမန်သံမဏိဂဟေအတွက် Straight beam ကို အဓိက သုံးသည်။" },
      { id: 5, textJP: "(5) <ruby>磁粉探傷<rt>じふんたんしょう</rt></ruby>သည် <ruby>微細な鉄粉<rt>びさいなてっぷん</rt></ruby>ကို <ruby>吸着<rt>きゅうちゃく</rt></ruby>させる。", textMY: "MT သည် သံလိုက်မှုန်များကို ကပ်ငြိစေခြင်းဖြင့် စစ်ဆေးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 斜角探傷 (Angle Beam)",
      reasonMY: "သံမဏိတည်ဆောက်ပုံရှိ Butt weld များကို စစ်ဆေးရာတွင် ဂဟေမြောင်း၏ ထောင့်များကြောင့် Straight beam ဖြင့် စစ်ရန် မလွယ်ကူပါ။ ထို့ကြောင့် Angle beam (斜角探傷) ကို အဓိက အသုံးပြုပါသည်။",
      memoryTipMY: "ဂဟေစစ်ရင် အစောင်း (Angle beam) နဲ့ စစ်ရတာက ပုံမှန်ပဲ။"
    }
  },
  {
    id: "2022-44",
    questionJP: "<ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>による<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "UT ဖြင့် အတွင်းပိုင်းချို့ယွင်းချက် စစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) 300<ruby>箇所以下<rt>かしょいか</rt></ruby>で1<ruby>ロット<rt>ろっと</rt></ruby>とする。", textMY: "နေရာ ၃၀၀ အောက်ကို Lot တစ်ခုအဖြစ် သတ်မှတ်သည်။" },
      { id: 2, textJP: "(2) 100<ruby>箇所以下<rt>かしょいか</rt></ruby>သည် <ruby>類似部位<rt>るいじぶい</rt></ruby>နှင့် <ruby>構成<rt>こうせい</rt></ruby>できる。", textMY: "၁၀၀ အောက်ဆိုလျှင် တူညီသော အခြားနေရာများနှင့် ပေါင်းနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>現場溶接<rt>げんばようせつ</rt></ruby>သည် <ruby>節<rt>ふし</rt></ruby>ごとに<ruby>ロット構成<rt>ろっとこうせい</rt></ruby>する。", textMY: "အလုပ်ခွင်ဂဟေအတွက် အဆစ် (Tier) အလိုက် Lot ဖွဲ့စည်းရမည်။" },
      { id: 4, textJP: "(4) <ruby>エコー高さ<rt>えこーたかさ</rt></ruby>ဖြင့် <ruby>判断<rt>はんだん</rt></ruby>する。", textMY: "Echo အမြင့်ပေါ် မူတည်ပြီး ဆုံးဖြတ်သည်။" },
      { id: 5, textJP: "(5) <ruby>合否判定<rt>ごうひはんてい</rt></ruby>သည် 2<ruby>回抜取<rt>かいぬきとり</rt></ruby>による。", textMY: "အောင်/ရှုံး ဆုံးဖြတ်ချက်ကို နမူနာ ၂ ကြိမ်ကောက်ယူခြင်းဖြင့် လုပ်ဆောင်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 合否判定",
      reasonMY: "အဖြေလွှာအရ (5) သည် မသင့်လျော်သော စည်းမျဉ်းဖော်ပြချက် ဖြစ်သည်။",
      memoryTipMY: "UT စစ်ဆေးမှု၏ အောင်/ရှုံး စည်းမျဉ်းကို သတိပြုပါ။"
    }
  },
  {
    id: "2022-45",
    questionJP: "<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘေးကင်းလုံခြုံရေးနှင့် ကျန်းမာရေးတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>産業用ロボット<rt>さんぎょうようろぼっと</rt></ruby>သည် <ruby>大臣<rt>だいじん</rt></ruby>က <ruby>定める<rt>さだめる</rt></ruby>。", textMY: "စက်မှုစက်ရုပ်ဆိုင်ရာ စံနှုန်းကို ဝန်ကြီးက သတ်မှတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>快適職場環境<rt>かいてきしょくばかんきょう</rt></ruby>ကို <ruby>目的<rt>もくてき</rt></ruby>とする。", textMY: "ကောင်းမွန်သော လုပ်ငန်းခွင်ပတ်ဝန်းကျင် ဖန်တီးရန် ရည်ရွယ်သည်။" },
      { id: 3, textJP: "(3) <ruby>監督官<rt>かんトクかん</rt></ruby>သည် <ruby>作業中止命令<rt>さぎょうちゅうしめいれい</rt></ruby>၏ <ruby>権限<rt>けんげん</rt></ruby>がある。", textMY: "စစ်ဆေးရေးမှူးတွင် လုပ်ငန်းရပ်ဆိုင်းရန် အမိန့်ပေးနိုင်သည့် အာဏာရှိသည်။" },
      { id: 4, textJP: "(4) 300<ruby>人以上<rt>にんいじょう</rt></ruby>သည် <ruby>総括責任者<rt>そうかつせきにんしゃ</rt></ruby>၏ <ruby>選任義務<rt>せんにんぎむ</rt></ruby>がある。", textMY: "လူ ၃၀၀ ကျော်လျှင် တာဝန်ခံချုပ် ခန့်အပ်ရန် တာဝန်ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>元方事業者<rt>もとかたじぎょうしゃ</rt></ruby>သည် <ruby>人数に関わらず安全管理者<rt>にんずうにかかわらずあんぜんかんりしゃ</rt></ruby>ကို <ruby>選任<rt>せんにん</rt></ruby>する。", textMY: "အဓိကကန်ထရိုက်တာသည် လူဦးရေမရွေး ဘေးကင်းရေးမန်နေဂျာ ခန့်အပ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 安全管理者の選任",
      reasonMY: "ဆောက်လုပ်ရေးလုပ်ငန်းတွင် အဓိကကန်ထရိုက်တာ (元方事業者) သည် အလုပ်သမား ၅၀ ဦးနှင့်အထက် ရှိမှသာ ဘေးကင်းရေး တာဝန်ရှိသူကို ခန့်အပ်ရန် တာဝန်ရှိသည်။ 'လူဦးရေမရွေး' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "၅၀ ဦး ဆိုတာကို မှတ်ထားပါ။"
    }
  },
  {
    id: "2022-46",
    questionJP: "<ruby>溶接の安全<rt>ようせつのあんぜん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း ဘေးကင်းရေးတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>屋外作業<rt>おくがいさぎょう</rt></ruby>သည် <ruby>保護具着用<rt>ほごぐちゃくよう</rt></ruby>က <ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "ပြင်ပတွင် အလုပ်လုပ်လျှင် အကာအကွယ်ပစ္စည်း ဝတ်ဆင်ရန် မလိုပါ။" },
      { id: 2, textJP: "(2) <ruby>アーク光<rt>あーくこう</rt></ruby>သည် <ruby>保護めがね<rt>ほごめがね</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Arc အလင်းအတွက် အကာအကွယ်မျက်မှန် သုံးရမည်။" },
      { id: 3, textJP: "(3) <ruby>アース<rt>あーす</rt></ruby>ကို <ruby>完備<rt>かんび</rt></ruby>し<ruby>感電防止<rt>かんでんぼうし</rt></ruby>する。", textMY: "Earth ချိတ်ဆက်ပြီး ဓာတ်လိုက်ခြင်းကို ကာကွယ်ရမည်။" },
      { id: 4, textJP: "(4) 2m<ruby>以上<rt>いじょう</rt></ruby>သည် <ruby>自動電撃防止装置<rt>じどうでんげきぼうしそうち</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "၂ မီတာထက်မြင့်လျှင် အလိုအလျောက် ရှော့ခ်ကာကွယ်ရေးကိရိယာ သုံးရမည်။" },
      { id: 5, textJP: "(5) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>သည် <ruby>柵<rt>さく</rt></ruby>ကို <ruby>設ける<rt>もうける</rt></ruby>。", textMY: "စက်ရုပ်ဂဟေအတွက် ခြံစည်းရိုး ကာရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 呼吸用保護具 (Fumes)",
      reasonMY: "ပြင်ပတွင် ဂဟေဆက်လျှင်ပင် ဂဟေအခိုးအငွေ့ (Fume) များသည် ကျန်းမာရေးကို ထိခိုက်စေနိုင်သဖြင့် နှာခေါင်းစည်း (Mask) ကဲ့သို့သော အကာအကွယ်ပစ္စည်းများ မဖြစ်မနေ ဝတ်ဆင်ရမည်။",
      memoryTipMY: "ဘယ်နေရာမှာပဲလုပ်လုပ် အကာအကွယ် (Mask) လိုပါတယ်။"
    }
  },
  {
    id: "2022-47",
    questionJP: "<ruby>特別教育<rt>とくべつきょういく</rt></ruby>で<ruby>就業可能<rt>しゅうぎょうかのう</rt></ruby>な<ruby>業務<rt>ぎょうむ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အထူးပညာပေး (Special Education) ပြီးရုံဖြင့် လုပ်ကိုင်နိုင်သော အလုပ်များတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) 1<ruby>トン未満<rt>みまん</rt></ruby>၏ <ruby>玉掛け<rt>たまかけ</rt></ruby>。", textMY: "၁ တန်အောက် ကြိုးချည်ခြင်း။" },
      { id: 2, textJP: "(2) <ruby>アーク溶接<rt>あーくようせつ</rt></ruby>。", textMY: "Arc Welding (လျှပ်စစ်ဂဟေ)။" },
      { id: 3, textJP: "(3) <ruby>ガス溶接<rt>がすようせつ</rt></ruby>。", textMY: "Gas Welding (ဓာတ်ငွေ့ဂဟေ)။" },
      { id: 4, textJP: "(4) <ruby>砥石取替え<rt>といしとりかえ</rt></ruby>。", textMY: "ဂရင်းဒါးကျောက် လဲလှယ်ခြင်း။" },
      { id: 5, textJP: "(5) <ruby>ロボット教示<rt>ろぼっときょうじ</rt></ruby>。", textMY: "စက်ရုပ်ကို လမ်းညွှန်ညွှန်ကြားခြင်း။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 技能講習 vs 特別教育",
      reasonMY: "ဓာတ်ငွေ့ဂဟေ (Gas Welding) လုပ်ငန်းကို လုပ်ကိုင်ရန်အတွက် အထူးပညာပေး (特別教育) ဖြင့် မလုံလောက်ဘဲ၊ ကျွမ်းကျင်မှုသင်တန်း (技能講習) ကို အောင်မြင်ပြီးသူ ဖြစ်ရမည်။",
      memoryTipMY: "Gas Welding = 技能講習 (Skill Training) လိုအပ်သည်။"
    }
  },
  {
    id: "2022-48",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>地震等<rt>じしんとう</rt></ruby>に<ruby>安全<rt>あんぜん</rt></ruby>でなければならない。", textMY: "အဆောက်အဦသည် ငလျင်စသည်တို့အတွက် ဘေးကင်းရမည်။" },
      { id: 2, textJP: "(2) <ruby>指定建築材料<rt>していけんちくざいりょう</rt></ruby>ကို <ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "သတ်မှတ်ထားသော ဆောက်လုပ်ရေးပစ္စည်းများကို သုံးရမည်။" },
      { id: 3, textJP: "(3) JIS သို့မဟုတ် <ruby>大臣認定<rt>だいじんにんてい</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>。", textMY: "JIS သို့မဟုတ် ဝန်ကြီး၏ အသိအမှတ်ပြုချက် လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>着工後<rt>ちゃっこうご</rt></ruby>に<ruby>申請<rt>しんせい</rt></ruby>する。", textMY: "အလုပ်စတင်ပြီးမှ လျှောက်လွှာတင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>許容応力度<rt>きょようおうりょくど</rt></ruby>သည် F/1.5 である。", textMY: "ခွင့်ပြုအားမှာ F/1.5 ဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 確認申請",
      reasonMY: "ဆောက်လုပ်ရေး အတည်ပြုချက် (確認申請) ကို အလုပ်မစမီ (着工前) ကတည်းက ရယူထားရမည်။",
      memoryTipMY: "အလုပ်မစခင် အရင်ခွင့်ပြုချက်ယူပါ။"
    }
  },
  {
    id: "2022-49",
    questionJP: "<ruby>仕口の構造方法<rt>しぐちのこうぞうほうほう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဆက်အစပ် (Joint) တည်ဆောက်ပုံနည်းလမ်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>赤さび<rt>あかさび</rt></ruby>သည် <ruby>認められている<rt>みとめられている</rt></ruby>。", textMY: "နီညိုရောင် သံချေးအလွှာကို (ပွတ်တိုက်မျက်နှာပြင်အတွက်) ခွင့်ပြုထားသည်။" },
      { id: 2, textJP: "(2) <ruby>縁端距離<rt>えんたんきょり</rt></ruby>သည် <ruby>定められている<rt>さだめられている</rt></ruby>。", textMY: "အစွန်းအကွာအဝေး (Edge distance) ကို သတ်မှတ်ထားသည်။" },
      { id: 3, textJP: "(3) <ruby>アンダーカット<rt>あんだーかっと</rt></ruby>သည် 0.3mmကို<ruby>超えるもの<rt>こえるもの</rt></ruby>သည် <ruby>一切認められない<rt>いっさいみとめられない</rt></ruby>。", textMY: "၀.၃ mm ထက်ကျော်သော Undercut ကို လုံးဝ (လုံးဝ) ခွင့်မပြုပါ။" },
      { id: 4, textJP: "(4) <ruby>ズレ<rt>ずれ</rt></ruby>သည် <ruby>許容差<rt>きょようさ</rt></ruby>က <ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "လွဲချော်မှု (Offset) အတွက် ခွင့်ပြုဘောင်ကို သတ်မှတ်ထားသည်။" },
      { id: 5, textJP: "(5) <ruby>溶着金属<rt>ようちゃくきんぞく</rt></ruby>သည် <ruby>鋼材の種類<rt>こうざいのしゅるい</rt></ruby>による。", textMY: "ဂဟေသား၏ ဂုဏ်သတ္တိမှာ သံမဏိအမျိုးအစားပေါ် မူတည်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - アンダーカットの許容",
      reasonMY: "ဂဟေဆက်ခြင်းတွင် Undercut ကို လုံးဝခွင့်မပြုခြင်း မဟုတ်ဘဲ၊ အနက် ၀.၃ mm အထိ (အခြေအနေအလိုက်) ခွင့်ပြုထားသည်။ သို့သော် ၀.၃ mm ထက်ကျော်လွန်ပါက လုံးဝ ခွင့်မပြုပါ။",
      memoryTipMY: "Undercut သည် ဘောင်တစ်ခုအတွင်း ခွင့်ပြုသည်။"
    }
  },
  {
    id: "2022-50",
    questionJP: "<ruby>建築士<rt>けんちくし</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဗိသုကာပညာရှင် (Architect) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>一級建築士<rt>いっきゅうけんちくし</rt></ruby>သည် <ruby>大臣免許<rt>だいじんめんきょ</rt></ruby>ကို <ruby>受ける<rt>うける</rt></ruby>。", textMY: "ပထမတန်းဗိသုကာသည် ဝန်ကြီး၏ လိုင်စင်ကို ရယူရမည်။" },
      { id: 2, textJP: "(2) <ruby>二級建築士<rt>にきゅうけんちくし</rt></ruby>သည် <ruby>知事免許<rt>ちじめんきょ</rt></ruby>ကို <ruby>受ける<rt>うける</rt></ruby>。", textMY: "ဒုတိယတန်းဗိသုကာသည် စီရင်စုအုပ်ချုပ်ရေးမှူး၏ လိုင်စင်ကို ရယူရမည်။" },
      { id: 3, textJP: "(3) <ruby>木造建築士<rt>もくぞうけんちくし</rt></ruby>သည် <ruby>知事免許<rt>ちじめんきょ</rt></ruby>ကို <ruby>受ける<rt>うける</rt></ruby>。", textMY: "သစ်သားဗိသုကာသည် စီရင်စုအုပ်ချုပ်ရေးမှူး၏ လိုင်စင်ကို ရယူရမည်။" },
      { id: 4, textJP: "(4) <ruby>構造設計一級<rt>こうぞうせっけいいっきゅう</rt></ruby>သည် <ruby>一級<rt>いっきゅう</rt></ruby>၏ <ruby>資格<rt>しかく</rt></ruby>က <ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "Structural Specialist သည် ပထမတန်းဗိသုကာ အရည်အချင်း မလိုပါ။" },
      { id: 5, textJP: "(5) <ruby>一定規模以上<rt>いっていきぼいじょう</rt></ruby>သည် <ruby>関与<rt>かんよ</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "အရွယ်အစားကြီးသော အဆောက်အဦများအတွက် အထူးကျွမ်းကျင်သူ လိုအပ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 構造設計一級建築士",
      reasonMY: "Structural Design Class 1 Architect ဖြစ်ရန်အတွက် ဦးစွာ ပထမတန်းဗိသုကာ (一級建築士) ဖြစ်ရန် မဖြစ်မနေ လိုအပ်သည်။",
      memoryTipMY: "Specialist ဖြစ်ဖို့ Class 1 အရင်ဖြစ်ရမည်။"
    }
  }
];
