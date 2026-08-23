import { StudyCardData } from '../types';

export const chapter1Part2Data: StudyCardData[] = [
  {
    id: "1-8",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖွဲ့စည်းပုံ ဒီဇိုင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံး (မှန်ကန်သော) အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨加工時<rt>てっこつかこうじ</rt></ruby>の<ruby>溶接施工<rt>ようせつせこう</rt></ruby>は<ruby>加工工場<rt>かこうこうじょう</rt></ruby>の<ruby>技術力<rt>ぎじゅつりょく</rt></ruby>に<ruby>委<rt>ゆだ</rt></ruby>ねられているので、<ruby>設計時<rt>せっけいじ</rt></ruby>に<ruby>仕口<rt>しぐち</rt></ruby>の<ruby>組立加工<rt>くみたてかこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>や<ruby>合理性<rt>ごうりせい</rt></ruby>について<ruby>特に考慮<rt>とくにこうりょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "(1) သံမဏိပြုပြင်ချိန်တွင် ဂဟေဆက်ခြင်းကို စက်ရုံ၏ နည်းပညာစွမ်းရည်အပေါ် လွှဲအပ်ထားသောကြောင့် ဒီဇိုင်းဆွဲချိန်တွင် အဆက်များ၏ တပ်ဆင်ရခက်ခဲမှုနှင့် ယုတ္တိရှိမှုတို့ကို အထူးထည့်သွင်းစဉ်းစားရန် မလိုပေ။" },
      { id: 2, textJP: "(2) <ruby>過去<rt>かこ</rt></ruby>の<ruby>地震被害<rt>じしんひがい</rt></ruby>において、<ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>接合部設計<rt>せつごうぶせっけい</rt></ruby>や<ruby>溶接品質管理<rt>ようせつひんしつかんり</rt></ruby>が <ruby>原因<rt>げんいん</rt></ruby>と<ruby>考<rt>かんが</rt></ruby>えられる<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>の<ruby>被害<rt>ひがい</rt></ruby>が <ruby>多数観察<rt>たすうかんさつ</rt></ruby>されている。", textMY: "(2) အတိတ်ငလျင်များတွင် မသင့်လျော်သော အဆက်ဒီဇိုင်းနှင့် ဂဟေဆက် အရည်အသွေးထိန်းသိမ်းမှု ညံ့ဖျင်းခြင်းတို့ကြောင့် သံမဏိအဆောက်အဦများ ပျက်စီးရခြင်းကို အများအပြား တွေ့ရှိရသည်။" },
      { id: 3, textJP: "(3) <ruby>外力<rt>がいりょく</rt></ruby>が<ruby>作用<rt>さよう</rt></ruby>したときに<ruby>骨組全体<rt>ほねぐみぜんたい</rt></ruby>が<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>に<ruby>留<rt>とど</rt></ruby>まることを<ruby>目標<rt>もくひょう</rt></ruby>とした<ruby>設計法<rt>せっけいほう</rt></ruby>を<ruby>終局耐力設計法<rt>しゅうきょくたいりょくせっけいほう</rt></ruby>という。", textMY: "(3) ပြင်ပအား သက်ရောက်ချိန်တွင် ဘောင်တစ်ခုလုံးသည် Elastic Range အတွင်းသာ ရှိနေစေရန် ရည်ရွယ်တွက်ချက်သော နည်းလမ်းကို Ultimate Strength Design Method ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>で<ruby>用<rt>もち</rt></ruby>いられる<ruby>鋼材<rt>こうざい</rt></ruby>はヤング<ruby>係数<rt>けいすう</rt></ruby>が <ruby>高<rt>たか</rt></ruby>く<ruby>変形<rt>へんけい</rt></ruby>しにくいため、RC<ruby>造<rt>ぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると<ruby>過大<rt>かだい</rt></ruby>な<ruby>撓<rt>たわ</rt></ruby>みや<ruby>振動<rt>しんどう</rt></ruby>への<ruby>配慮<rt>はいりょ</rt></ruby>は<ruby>ほとんど必要ない<rt>ほとんどひつようない</rt></ruby>。", textMY: "(4) သံမဏိတည်ဆောက်ပုံတွင် သုံးသော သံမဏိသည် Young's Modulus မြင့်သဖြင့် RC အဆောက်အဦနှင့် နှိုင်းယှဉ်ပါက ကွေးညွှတ်မှုနှင့် တုန်ခါမှုအတွက် စဉ်းစားရန် မလိုသလောက်ဖြစ်ပေသည်။" },
      { id: 5, textJP: "(5) <ruby>地震動<rt>じしんどう</rt></ruby>によって<ruby>建物<rt>たてもの</rt></ruby>の<ruby>各部<rt>かくぶ</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>力<rt>ちから</rt></ruby>を<ruby>地震力<rt>じしんりょく</rt></ruby>という。<ruby>制振構造<rt>せいしんこうぞう</rt></ruby>は<ruby>特定層<rt>とくていそう</rt></ruby>を<ruby>極端<rt>きょくたん</rt></ruby>に<ruby>柔らかく<rt>やわらかく</rt></ruby>し、<ruby>地震力<rt>じしんりょく</rt></ruby>によるエネルギーをこの<ruby>特定層<rt>とくていそう</rt></ruby>で<ruby>吸収<rt>きゅうしゅう</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(5) ငလျင်လှုပ်ခတ်မှုကြောင့် အဆောက်အဦ အစိတ်အပိုင်းများတွင် သက်ရောက်သော အားကို ငလျင်အား ဟုခေါ်သည်။ Damping Structure သည် သီးခြားအလွှာကို အလွန်ပျော့ပြောင်းစေပြီး ငလျင်စွမ်းအင်ကို ထိုအလွှာတွင် စုပ်ယူစေသော ပုံစံဖြစ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သံမဏိတည်ဆောက်ပုံ၏ အားနည်းချက်များ",
      reasonMY: "အတိတ်ရှိ ငလျင်များတွင် သံမဏိအဆောက်အဦများ ပျက်စီးရခြင်း၏ အဓိကအကြောင်းရင်းမှာ အဆက်အစပ် (Joint) ဒီဇိုင်းများ မှားယွင်းခြင်းနှင့် ဂဟေဆက်ခြင်း အရည်အသွေး ညံ့ဖျင်းခြင်းတို့ကြောင့်ဖြစ်ကြောင်း လက်တွေ့လေ့လာတွေ့ရှိထားပါသည်။ ထို့ကြောင့် (၂) သည် အသင့်လျော်ဆုံး အမှန်တရားဖြစ်သည်။",
      memoryTipMY: "သံမဏိဘောင်တွင် Joint နေရာများသည် အရေးကြီးဆုံး (Weak point) ဖြစ်သည်။"
    }
  },
  {
    id: "1-9",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖွဲ့စည်းပုံ ဒီဇိုင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく、<ruby>日常的<rt>にちじょうてき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>振動<rt>しんどう</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "(1) သံမဏိဖွဲ့စည်းပုံ ဒီဇိုင်းတွင် အဆောက်အဦ၏ ခိုင်ခံ့မှုသာမက နေ့စဉ်သက်ရောက်နေသော ဝန်များကြောင့် ဖြစ်ပေါ်သည့် တုန်ခါမှု (Vibration) ကို ထည့်သွင်းစဉ်းစားရန်လည်း အရေးကြီးသည်။" },
      { id: 2, textJP: "(2) <ruby>設計者<rt>せっけいしゃ</rt></ruby>は、<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>から<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby><ruby>等<rt>とう</rt></ruby>の<ruby>納まり<rt>おさまり</rt></ruby>や<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>するよう<ruby>努<rt>つと</rt></ruby>めるべきである。", textMY: "(2) ဒီဇိုင်နာသည် ဖွဲ့စည်းပုံ ဒီဇိုင်းအဆင့်မှစ၍ တိုင်နှင့်မြားတန်းအဆက် (Joint) များ တပ်ဆင်မှုနှင့် ဂဟေဆက်ရလွယ်ကူမှုတို့ကို ထည့်သွင်းစဉ်းစားကာ ဖြတ်ပိုင်းကို ရွေးချယ်သင့်သည်။" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>高い靭性（粘り強さ）<rt>たかいじんせい（ねばりつよさ）</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>しているため、<ruby>座屈<rt>ざくつ</rt></ruby>や<ruby>破断<rt>はだん</rt></ruby>を<ruby>発生<rt>はっせい</rt></ruby>させないことが<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を<ruby>高<rt>たか</rt></ruby>める<ruby>上<rt>うえ</rt></ruby>で<ruby>大切<rt>たいせつ</rt></ruby>である。", textMY: "(3) သံမဏိသည် မြင့်မားသော Toughness ရှိသဖြင့် Buckling (ခုံးထွက်ခြင်း) နှင့် ကျိုးပဲ့ခြင်းမဖြစ်စေရန် ထိန်းသိမ်းခြင်းသည် ငလျင်ဒဏ်ခံနိုင်ရည် မြှင့်တင်ရာတွင် အရေးကြီးသည်။" },
      { id: 4, textJP: "(4) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>比重<rt>ひじゅう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいため、<ruby>同規模<rt>どうきぼ</rt></ruby>の<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリート<ruby>造<rt>ぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>と<ruby>比較<rt>ひかく</rt></ruby>すると<ruby>鉄骨造<rt>てっこつぞう</rt></ruby>の<ruby>建物<rt>たてもの</rt></ruby>は<ruby>自重<rt>じじゅう</rt></ruby>が <ruby>大<rt>おお</rt></ruby>きくなり、<ruby>地震時<rt>じしんじ</rt></ruby>の<ruby>設計荷重<rt>せっけいかじゅう</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "(4) သံမဏိသည် သိပ်သည်းဆ ကြီးမားသဖြင့် အတိုင်းအတာတူ RC အဆောက်အဦနှင့် နှိုင်းယှဉ်ပါက သံမဏိအဆောက်အဦသည် ကိုယ်ပိုင်အလေးချိန် (Dead Load) ပိုကြီးပြီး ငလျင်ဒီဇိုင်းဝန်လည်း ပိုကြီးသည်။" },
      { id: 5, textJP: "(5) <ruby>建物<rt>たてもの</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、<ruby>骨組全体<rt>ほねぐみぜんたい</rt></ruby>が<ruby>弾性範囲<rt>だんせいはんい</rt></ruby>に<ruby>留<rt>とど</rt></ruby>まることを<ruby>目標<rt>もくひょう</rt></ruby>とした<ruby>設計法<rt>せっけいほう</rt></ruby>を<ruby>許容応力度設計法<rt>きょようおうりょくどせっけいほう</rt></ruby>という。", textMY: "(5) သက်ရောက်သော ပြင်ပအားအပေါ် ဘောင်တစ်ခုလုံးသည် Elastic Range အတွင်းသာ ရှိစေရန် ရည်ရွယ်တွက်ချက်သည့် နည်းလမ်းကို Allowable Stress Design Method ဟု ခေါ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သံမဏိအဆောက်အဦ၏ ပေါ့ပါးမှု (Lightweight)",
      reasonMY: "သံမဏိ (Steel) သည် သိပ်သည်းဆ ကြီးမားသော်လည်း ၎င်း၏ ခိုင်ခံ့မှု (Strength) မှာ အလွန်မြင့်မားသောကြောင့် ကွန်ကရစ်ထက် များစွာသေးငယ်သော ဖြတ်ပိုင်းများဖြင့် တည်ဆောက်နိုင်သည်။ ထို့ကြောင့် လက်တွေ့တွင် သံမဏိအဆောက်အဦသည် RC အဆောက်အဦထက် များစွာ 'ပိုမိုပေါ့ပါး' (軽量) သည်။ ပိုလေးသည်ဆိုသော (၄) မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "သံမဏိအဆောက်အဦသည် RC ထက် ပိုပြီး ပေါ့ပါး (Lightweight) သည်။"
    }
  },
  {
    id: "1-10",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いられる<ruby>主<rt>おも</rt></ruby>な<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ ပုံစံများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ブレース<ruby>構造<rt>こうぞう</rt></ruby>は、<ruby>鉛直構面内<rt>えんちょくこうめんない</rt></ruby>に<ruby>筋<rt>すじ</rt></ruby>かいと<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>斜材<rt>しゃざい</rt></ruby>を<ruby>配置<rt>はいち</rt></ruby>し、<ruby>斜材<rt>しゃざい</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>によって<ruby>地震<rt>じしん</rt></ruby>や<ruby>風<rt>かぜ</rt></ruby>などの<ruby>水平力<rt>すいへいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(1) Braced Frame ဖွဲ့စည်းပုံသည် ဒေါင်လိုက်မျက်နှာပြင်တွင် ဒေါင့်ဖြတ်အထောက် (Brace) များကို ထည့်သွင်းပြီး ထိုအထောက်များ၏ ဝင်ရိုးအားဖြင့် ငလျင်နှင့် လေစသော အလျားလိုက်အားများကို တွန်းလှန်သည့် ပုံစံဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>立体<rt>りったい</rt></ruby>トラス<ruby>構造<rt>こうぞう</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>三角錐<rt>さんかくすい</rt></ruby>（または<ruby>四角錐<rt>しかくすい</rt></ruby>）<ruby>形状<rt>けいじょう</rt></ruby>に<ruby>多数組み合わせ<rt>たすうくみあわせ</rt></ruby>、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。<ruby>平面<rt>へいめん</rt></ruby>トラス<ruby>構造<rt>こうぞう</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べるとトラスのせいが<ruby>大<rt>おお</rt></ruby>きくなるという<ruby>欠点<rt>けってん</rt></ruby>がある。", textMY: "(2) Space Truss (3D Truss) တည်ဆောက်ပုံသည် ပစ္စည်းများကို ပိရမစ်ပုံစံ တွဲဆက်ထားပြီး ပြင်ပအားကို တွန်းလှန်သည့် ပုံစံဖြစ်သည်။ ၎င်းသည် Plane Truss ထက် Truss Depth (အမြင့်/အထူ) ပိုကြီးမားရမည်ဟူသော အားနည်းချက်ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>免震構造<rt>めんしんこうぞう</rt></ruby>は、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>特定<rt>とくてい</rt></ruby>の<ruby>層<rt>そう</rt></ruby>を<ruby>他<rt>他</rt></ruby>の<ruby>層<rt>そう</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>極端<rt>きょくたん</rt></ruby>に<ruby>柔らかく<rt>やわらかく</rt></ruby>した<ruby>上<rt>うえ</rt></ruby>でエネルギー<ruby>吸収装置<rt>きゅうしゅうそうち</rt></ruby>を<ruby>設<rt>もう</rt></ruby>け、<ruby>地震入力<rt>じしんにゅうりょく</rt></ruby>エネルギーの<ruby>大半<rt>たいはん</rt></ruby>を<ruby>吸収<rt>きゅうしゅう</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(3) Base Isolation (ငလျင်ဒဏ်ခွဲထုတ်တည်ဆောက်ပုံ) သည် အဆောက်အဦ၏ သီးခြားအလွှာတစ်ခုကို အခြားအလွှာများထက် အလွန်ပျော့ပြောင်းစေပြီး စွမ်းအင်စုပ်ယူကိရိယာတပ်ကာ ငလျင်စွမ်းအင်အများစုကို စုပ်ယူစေသော ပုံစံဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>制振構造<rt>せいしんこうぞう</rt></ruby>は、ダンパーと<ruby>呼<rt>よ</rt></ruby>ばれるエネルギー<ruby>吸収装置<rt>きゅうしゅうそうち</rt></ruby>を<ruby>建物内<rt>たてものない</rt></ruby>に<ruby>設置<rt>せっち</rt></ruby>することによって<ruby>建物全体<rt>たてものぜんたい</rt></ruby>の<ruby>地震時<rt>じしんじ</rt></ruby>の<ruby>揺れ<rt>ゆれ</rt></ruby>を<ruby>低減<rt>ていげん</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(4) Damping Structure သည် Damper ဟုခေါ်သော စွမ်းအင်စုပ်ယူကိရိယာများကို အဆောက်အဦအတွင်း တပ်ဆင်ခြင်းဖြင့် ငလျင်လှုပ်ချိန်တွင် တစ်ခုလုံး၏ တုန်ခါမှုကို လျှော့ချပေးသော ပုံစံဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨枠付<rt>てっこつわくつ</rt></ruby>きブレースは<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリート<ruby>造<rt>ぞう</rt></ruby>の<ruby>耐震補強<rt>たいしんほきょう</rt></ruby>に<ruby>多<rt>おお</rt></ruby>く<ruby>用<rt>もち</rt></ruby>いられる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(5) သံမဏိဘောင်ပါ Brace များကို RC အဆောက်အဦများ၏ ငလျင်ဒဏ်ခံနိုင်ရည် မြှင့်တင်ရန် ပြုပြင်ရာတွင် အများအပြား အသုံးပြုသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 立体トラス (Space Truss)",
      reasonMY: "Space Truss (立体トラス) သည် ဝန်ကို 3D ပုံစံဖြင့် ဖြန့်ဝေခံယူသောကြောင့် Plane Truss (平面トラス) ထက် Truss Depth (トラスのせい) ကို ပိုမို 'သေးငယ်အောင်' (小さく) လုပ်ဆောင်နိုင်သည်။ 'ကြီးမားရမည်' ဟူသော အချက်မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "3D Space Truss သည် 2D Truss ထက် ပိုပြီး ကျစ်လျစ်ပါးလွှာနိုင်သည်။"
    }
  },
  {
    id: "1-11",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>の<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ ပုံစံများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>純ラーメン構造<rt>じゅんラーメンこうぞう</rt></ruby>は、<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>で<ruby>多用<rt>たよう</rt></ruby>されている<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。<ruby>平面計画上<rt>へいめんけいかくじょう</rt></ruby>の<ruby>自由度<rt>じゆうど</rt></ruby>が <ruby>高い<rt>たかい</rt></ruby>ため、オフィス、ホテル、<ruby>商業施設<rt>しょうぎょうしせつ</rt></ruby>などで<ruby>用<rt>もち</rt></ruby>いられる。", textMY: "(1) Pure Rigid Frame (純ラーメン) တည်ဆောက်ပုံသည် အသုံးအများဆုံးဖြစ်ပြီး ကြမ်းခင်းဒီဇိုင်းလွတ်လပ်မှု မြင့်မားသဖြင့် ရုံးခန်း၊ ဟိုတယ်နှင့် စီးပွားရေးအဆောက်အဦများတွင် သုံးသည်။" },
      { id: 2, textJP: "(2) <ruby>立体トラス構造<rt>りったいトラスこうぞう</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>三角錐<rt>さんかくすい</rt></ruby>や<ruby>四角錐<rt>しかくすい</rt></ruby>に<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ、それを<ruby>連続<rt>れんぞく</rt></ruby>させることで<ruby>自由<rt>じゆう</rt></ruby>な<ruby>形状<rt>けいじょう</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>できる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(2) Space Truss သည် အစိတ်အပိုင်းများကို ပိရမစ်ပုံစံများဖြင့် စဉ်ဆက်မပြတ် တွဲစပ်ထားခြင်းဖြင့် လွတ်လပ်သော ပုံစံအမျိုးမျိုးကို ဖန်တီးတည်ဆောက်နိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>アーチ構造<rt>アーチこうぞう</rt></ruby>は、<ruby>上方<rt>じょうほう</rt></ruby>に<ruby>凸<rt>とつ</rt></ruby>な<ruby>曲線<rt>きょくせん</rt></ruby>に<ruby>沿<rt>そ</rt></ruby>って<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>配置<rt>はいち</rt></ruby>し、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(3) Arch တည်ဆောက်ပုံသည် အထက်သို့ ခုံးနေသော မျဉ်းကွေးတစ်လျှောက် ပစ္စည်းများကို စီတန်းထားပြီး ပစ္စည်းများ၏ ဝင်ရိုးအား (Axial Force) ဖြင့် ပြင်ပအားကို တွန်းလှန်သော ပုံစံဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>ブレース構造<rt>ブレースこうぞう</rt></ruby>は、<ruby>構面内<rt>こうめんない</rt></ruby>に<ruby>設置<rt>せっち</rt></ruby>した<ruby>筋かい<rt>すじかい</rt></ruby>によって<ruby>水平力<rt>すいへいりょく</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>あるいは<ruby>全部<rt>ぜんぶ</rt></ruby>を<ruby>負担<rt>ふたん</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "(4) Braced Frame သည် မျက်နှာပြင်အတွင်း တပ်ဆင်ထားသော ဒေါင့်ဖြတ်အထောက် (Brace) ဖြင့် အလျားလိုက်အား၏ တစ်စိတ်တစ်ပိုင်း သို့မဟုတ် အားလုံးကို ထမ်းဆောင်ပေးသော ပုံစံဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>テンション構造<rt>テンションこうぞう</rt></ruby>は、<ruby>軸力<rt>じくりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>引張材<rt>ひっぱりざい</rt></ruby>と<ruby>圧縮材<rt>あっしゅくざい</rt></ruby>に<ruby>明確<rt>めいかく</rt></ruby>に<ruby>分類<rt>ぶんるい</rt></ruby>し、<ruby>強風<rt>きょうふう</rt></ruby>による<ruby>振動障害等<rt>しんどうしょうがいとう</rt></ruby>も<ruby>少ない<rt>すくない</rt></ruby>という<ruby>長所<rt>ちょうしょ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", textMY: "(5) Tension Structure သည် အားသက်ရောက်သော ပစ္စည်းများကို ဆွဲအားနှင့် ဖိအားအဖြစ် ရှင်းလင်းစွာ ခွဲခြားထားပြီး လေပြင်းကြောင့် ဖြစ်ပေါ်သော တုန်ခါမှုပြဿနာများလည်း နည်းပါးသည်ဟူသော အားသာချက်ရှိသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Tension Structure (ကေဘယ်ဆွဲ တည်ဆောက်ပုံ)",
      reasonMY: "Tension Structure (ဥပမာ- ကေဘယ်ကြိုးတည်ဆောက်ပုံ) များသည် အလွန်ပေါ့ပါးပြီး ပျော့ပြောင်းသောကြောင့် လေပြင်းတိုက်ခတ်ချိန်တွင် 'တုန်ခါမှု' (Vibration/Oscillation) အလွန်ဖြစ်ပေါ်လွယ်သည်။ ထို့ကြောင့် တုန်ခါမှုနည်းသည်ဆိုသော (၅) မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "ကေဘယ် (Tension) ကြိုးများသည် လေတိုက်ပါက တုန်ခါ (Vibration) လွယ်သည်။"
    }
  },
  {
    id: "1-12",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>座屈<rt>ざくつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ၏ Buckling (ခုံးထွက်ပုံပျက်ခြင်း) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံး (မှန်ကန်သော) အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐには、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>材種<rt>ざいしゅ</rt></ruby>をより<ruby>高強度<rt>こうきょうど</rt></ruby>のものに<ruby>変更<rt>へんこう</rt></ruby>すれば<ruby>良い<rt>よい</rt></ruby>。", textMY: "(1) Beam ၏ Lateral Buckling ကို ကာကွယ်ရန် သံမဏိအမျိုးအစားကို ပိုမိုခိုင်မာအားကောင်းသော (High Strength) အမျိုးအစားသို့ ပြောင်းလဲပေးရုံဖြင့် ရနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が <ruby>薄<rt>うす</rt></ruby>すぎると、<ruby>部材全体<rt>ぶざいぜんたい</rt></ruby>としての<ruby>座屈<rt>ざくつ</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる<ruby>前<rt>まえ</rt></ruby>に<ruby>板要素<rt>いたようそ</rt></ruby>が <ruby>波打<rt>なみう</rt></ruby>つことがある。これを<ruby>防止<rt>ぼうし</rt></ruby>するために<ruby>細長比制限<rt>ほそながひせいげん</rt></ruby>が <ruby>設けられている<rt>もうけられている</rt></ruby>。", textMY: "(2) သံမဏိပြား အထူပါးလွန်းပါက အစိတ်အပိုင်းတစ်ခုလုံး ခုံးထွက်မပျက်မီ သံပြားမျက်နှာပြင် လှိုင်းထတွန့်လိပ်သွားနိုင်သည်။ ယင်းကို ကာကွယ်ရန် Slenderness Ratio ကန့်သတ်ချက်ကို သတ်မှတ်ထားသည်။" },
      { id: 3, textJP: "(3) <ruby>曲げ座屈<rt>まげざくつ</rt></ruby>で<ruby>耐力<rt>たいりょく</rt></ruby>が <ruby>決定<rt>けってい</rt></ruby>される<ruby>圧縮材<rt>あっしゅくざい</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>、<ruby>断面積<rt>だんめんせき</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさが<ruby>等<rt>ひと</rt></ruby>しければ<ruby>長方形断面<rt>ちょうほうけいだんめん</rt></ruby>でも<ruby>正方形断面<rt>せいほうけいだんめん</rt></ruby>でも<ruby>曲げ座屈強度<rt>まげざくつきょうど</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じである。", textMY: "(3) Flexural Buckling ဖြင့် ခံနိုင်ရည်ကို ဆုံးဖြတ်သော ဖိအားခံပစ္စည်းတွင် ဖြတ်ပိုင်းဧရိယာ တူညီပါက ထောင့်မှန်စတုဂံဖြစ်စေ လေးထောင့်စတုရန်းဖြစ်စေ Buckling ခံနိုင်ရည် တူညီသည်။" },
      { id: 4, textJP: "(4) <ruby>座屈拘束ブレース<rt>ざくつこうそくぶれーす</rt></ruby>は、<ruby>軸力<rt>じくりょく</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>芯材<rt>しんざい</rt></ruby>の<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>を<ruby>抑<rt>おさ</rt></ruby>えるため<ruby>鞘状<rt>さやじょう</rt></ruby>の<ruby>補剛材<rt>ほごうざい</rt></ruby>などで<ruby>覆<rt>おお</rt></ruby>い、<ruby>芯材<rt>しんざい</rt></ruby>が <ruby>降伏<rt>こうふく</rt></ruby>するまで<ruby>座屈<rt>ざくつ</rt></ruby>による<ruby>耐力低下<rt>たいりょくていか</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じないブレース<ruby>部材<rt>ぶざい</rt></ruby>である。", textMY: "(4) Buckling Restrained Brace (BRB) သည် ဝင်ရိုးအား ပို့လွှတ်သော Core Material ကို အပြင်မှ အကာအရံဖြင့် ဖုံးအုပ်ထားပြီး Core သည် Yield ဖြစ်သည်အထိ Buckling ကြောင့် ခံနိုင်ရည်ကျဆင်းမှု မဖြစ်စေသော Brace အစိတ်အပိုင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>角形鋼管<rt>かくがたこうかん</rt></ruby>や<ruby>円形鋼管<rt>えんけいこうかん</rt></ruby>などの<ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>では、<ruby>圧縮力<rt>あっしゅくりょく</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>しても<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>が <ruby>発生<rt>はっせい</rt></ruby>することはないので、<ruby>細長比<rt>ほそながひ</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "(5) Box/Pipe ပုံစံ အပိတ်ဖြတ်ပိုင်းများတွင် ဖိအားသက်ရောက်သော်လည်း Flexural Buckling မဖြစ်ပေါ်နိုင်သဖြင့် Slenderness Ratio ကို စဉ်းစားရန် မလိုပေ။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 座屈拘束ブレース (BRB)",
      reasonMY: "BRB (Buckling Restrained Brace) သည် အတွင်းရှိ Core Material ကို Buckling မဖြစ်စေရန် အပြင်မှ အစွပ်ဖြင့် ကာကွယ်ထားသောကြောင့် ဖိအားအောက်တွင် Core သည် Yield ဖြစ်သည်အထိ ပုံမပျက်ဘဲ ခံနိုင်ရည်ရှိသည်။ ထို့ကြောင့် (၄) သည် မှန်ကန်ပါသည်။",
      memoryTipMY: "BRB ဆိုသည်မှာ Buckling (ကွေးထွက်ခြင်း) ကို 'Restrained' (တားဆီး) ထားသော အထောက်ဖြစ်သည်။"
    }
  },
  {
    id: "1-13",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်း ဒီဇိုင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>柱<rt>はしら</rt></ruby>の<ruby>局部座屈耐力<rt>きょくぶざくつたいりょく</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるため、<ruby>板要素<rt>いたようそ</rt></ruby>の<ruby>幅厚比<rt>はばあつひ</rt></ruby>をより<ruby>大<rt>おお</rt></ruby>きくした。", textMY: "(1) Column ၏ Local Buckling (တစ်စိတ်တစ်ပိုင်း ခုံးထွက်ခြင်း) ခံနိုင်ရည်ကို မြှင့်တင်ရန်အတွက် သံပြား၏ အနံ-အထူအချိုး (Width-to-thickness ratio) ကို ပိုမိုကြီးမားစေခဲ့သည်။" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>げ<ruby>剛性<rt>ごうせい</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>梁せい<rt>はりせい</rt></ruby>を 1 <ruby>サイズ大きく<rt>さいずおおきく</rt></ruby>した。", textMY: "(2) Beam ၏ Bending Stiffness မလုံလောက်သောကြောင့် Beam Depth (အမြင့်) ကို ၁ ဆိုဒ် ပိုကြီးအောင် လုပ်ခဲ့သည်။" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>下<rt>した</rt></ruby>フランジ<ruby>位置<rt>いち</rt></ruby>にも<ruby>水平<rt>すいへい</rt></ruby>ブレースとつなぎ<ruby>材<rt>ざい</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けた。", textMY: "(3) Beam ၏ Lateral Buckling ကို ကာကွယ်ရန် အောက်ခြေ Flange နေရာတွင်လည်း အလျားလိုက် Brace နှင့် Tie Member များကို တပ်ဆင်ခဲ့သည်။" },
      { id: 4, textJP: "(4) H<ruby>形鋼<rt>がたこう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>筋<rt>すじ</rt></ruby>かいの<ruby>曲げ座屈耐力<rt>まげざくつたいりょく</rt></ruby>を<ruby>上げ<rt>あげ</rt></ruby>るため、ウェブの<ruby>板厚<rt>いたあつ</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくした。", textMY: "(4) H-Steel သုံးထားသော Brace ၏ Buckling ခံနိုင်ရည်ကို မြှင့်တင်ရန် Web Plate ၏ အထူကို ပိုထူအောင် ပြုလုပ်ခဲ့သည်။" },
      { id: 5, textJP: "(5) <ruby>天井走行<rt>てんじょうそうこう</rt></ruby>クレーンのスリップを<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>受け梁<rt>うけばり</rt></ruby>のたわみ<ruby>制限<rt>せいげん</rt></ruby>を<ruby>一般<rt>いっぱん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>よりも<ruby>厳<rt>きび</rt></ruby>しくした。", textMY: "(5) Overhead Crane ချော်ထွက်ခြင်းကို ကာကွယ်ရန် ကရိန်းထောက် Beam ၏ ကွေးညွှတ်မှု (Deflection) ကန့်သတ်ချက်ကို သာမန် Beam များထက် ပိုမိုတင်းကျပ်စေခဲ့သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 幅厚比 (Width-to-thickness ratio)",
      reasonMY: "Local Buckling (局部座屈) ကို ကာကွယ်ရန်အတွက် သံပြားသည် ပိုမိုထူရမည်။ သံပြားထူလေလေ Width-to-thickness ratio သည် ပိုမို 'သေးငယ်' (小さく) လေဖြစ်သဖြင့် ပိုကြီးအောင်လုပ်သည်ဆိုသော (၁) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "သံပြားထူပါက Width-to-thickness ratio နည်းသွားပြီး ခိုင်မာမှုတက်လာသည်။"
    }
  },
  {
    id: "1-14",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်း ဒီဇိုင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲げ強度<rt>まげきょうど</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>同じ梁せい<rt>おなじはりせい</rt></ruby>でよりフランジの<ruby>厚い断面<rt>あついだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>した。", textMY: "(1) Beam ၏ Bending Strength မလုံလောက်သဖြင့် အမြင့်တူသော်လည်း Flange ပိုထူသော ဖြတ်ပိုင်းကို ရွေးချယ်ခဲ့သည်။" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>鋼種<rt>こうしゅ</rt></ruby>はそのままとし<ruby>梁せい<rt>はりせい</rt></ruby>を 1 <ruby>サイズ大きく<rt>さいずおおきく</rt></ruby>した。", textMY: "(2) Beam ၏ Bending Stiffness မလုံလောက်သဖြင့် သံမဏိအမျိုးအစားကို မပြောင်းဘဲ Beam Depth (အမြင့်) ကို ၁ ဆိုဒ် တိုးမြှင့်ခဲ့သည်။" },
      { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>するため、その<ruby>梁<rt>はり</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>く<ruby>小梁<rt>こばり</rt></ruby>の<ruby>本数<rt>ほんすう</rt></ruby>を<ruby>増やした<rt>ふやした</rt></ruby>。", textMY: "(3) Beam ၏ Lateral Buckling ကို ကာကွယ်ရန် ထို Beam တွင် ဆက်သွယ်ထားသော ဖြည့်စွက် Beam (Secondary Beam) အရေအတွက်ကို တိုးမြှင့်ခဲ့သည်။" },
      { id: 4, textJP: "(4) H<ruby>形鋼<rt>がたこう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>筋<rt>すじ</rt></ruby>かいの<ruby>曲げ座屈耐力<rt>まげざくつたいりょく</rt></ruby>を<ruby>上げる<rt>あげる</rt></ruby>ため、<ruby>筋<rt>すじ</rt></ruby>かいの<ruby>強軸曲げ方向<rt>きょうじくまげほうこう</rt></ruby>に<ruby>座屈補剛材<rt>ざくつほごうざい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けた。", textMY: "(4) H-Steel သုံးထားသော Brace ၏ Buckling ခံနိုင်ရည်ကို မြှင့်တင်ရန် Brace ၏ အားသန်သော ဝင်ရိုးဘက် (Strong Axis) တွင် Buckling အထောက်အမကို တပ်ဆင်ခဲ့သည်။" },
      { id: 5, textJP: "(5) <ruby>天井走行<rt>てんじょうそうこう</rt></ruby>クレーンのスリップを<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>受け梁<rt>うけばり</rt></ruby>のたわみ<ruby>制限<rt>せいげん</rt></ruby>を<ruby>一般<rt>いっぱん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>よりも<ruby>厳<rt>きび</rt></ruby>しくした。", textMY: "(5) Overhead Crane ချော်ထွက်ခြင်းကို ကာကွယ်ရန် ကရိန်းထောက် Beam ၏ ကွေးညွှတ်မှု (Deflection) ကန့်သတ်ချက်ကို သာမန် Beam များထက် ပိုမိုတင်းကျပ်စေခဲ့သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Strong vs Weak Axis (強軸 vs 弱軸)",
      reasonMY: "Buckling (座屈) သည် များသောအားဖြင့် ခံနိုင်ရည်အနည်းဆုံးဖြစ်သော 'အားနည်းသည့် ဝင်ရိုး' (弱軸 - Weak axis) ဘက်သို့ ဖြစ်ပေါ်လေ့ရှိသည်။ ထို့ကြောင့် အားဖြည့်ထောက်ကန်ရာတွင်လည်း Weak Axis ဘက်သို့သာ အဓိက လုပ်ဆောင်ရမည်။ Strong Axis ဘက်သို့ တပ်ဆင်သည်ဟူသော (၄) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "Buckling သည် အားနည်းသောဘက် (Weak axis) သို့သာ ခုံးထွက်တတ်သည်။"
    }
  }
];
