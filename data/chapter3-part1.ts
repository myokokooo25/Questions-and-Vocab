
import { StudyCardData } from '../types';

export const chapter3Part1Data: StudyCardData[] = [
  {
    id: "3-1",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံのအရည်အသွေးအာမခံချက် (QA) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨<rt>てっこつ</rt></ruby>は<ruby>顧客<rt>こきゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>されなければならない。", textMY: "を (Customer)    " },
      { id: 2, textJP: "(2) <ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>は<ruby>顧客<rt>こきゃく</rt></ruby>が<ruby>安心<rt>あんしん</rt></ruby>・<ruby>満足<rt>まんぞく</rt></ruby>できる<ruby>品質<rt>ひんしつ</rt></ruby>である<ruby>必要<rt>ひつよう</rt></ruby>があり、<ruby>生産者<rt>せいさんしゃ</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>だけでその<ruby>品質目標<rt>ひんしつもくひょう</rt></ruby>が<ruby>設定<rt>せってい</rt></ruby>されてはならない。", textMY: "は  、のでを" },
      { id: 3, textJP: "(3) <ruby>品質保証<rt>ひんしつほしょう</rt></ruby>のための<ruby>最低<rt>さいてい</rt></ruby>の<ruby>要求<rt>ようきゅう</rt></ruby>として、<ruby>法律<rt>ほうりつ</rt></ruby>や<ruby>告示<rt>こくじ</rt></ruby>があり、<ruby>設計<rt>せっけい</rt></ruby>・<ruby>施工<rt>せこう</rt></ruby>における<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>のための<ruby>目標値<rt>もくひょうち</rt></ruby>として、<ruby>基準<rt>きじゅん</rt></ruby>・<ruby>標準類<rt>ひょうじゅんるい</rt></ruby>などがある。", textMY: "  と、/  は" },
      { id: 4, textJP: "(4) <ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>の<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>は、<ruby>設計図<rt>せっけいず</rt></ruby>に<ruby>不備<rt>ふび</rt></ruby>がなければおのずと<ruby>達成<rt>たっせい</rt></ruby>されるものであり、<ruby>設計業務<rt>せっけいぎょうむ</rt></ruby>の<ruby>成果物<rt>せいかぶつ</rt></ruby>として<ruby>捉<rt>とら</rt></ruby>えることができる。", textMY: "のはについてで 、をの は" },
      { id: 5, textJP: "(5) <ruby>設計品質<rt>せっけいひんしつ</rt></ruby>は、<ruby>設計者<rt>せっけいしゃ</rt></ruby>が<ruby>保証<rt>ほしょう</rt></ruby>しなければならない。", textMY: "を (Architect/Engineer) が " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 品質保証の考え方",
      reasonMY: "အရည်အသွေးအာမခံချက် (Quality Assurance) ဆိုはမှာ ဒီဇိုင်းပုံစံ (Design) အပြင် ထုတ်လုပ်မှု (Fabrication) とတည်ဆောက်မှု (Erection) လုပ်ငန်းစဉ်အားလုံးのစုပေါင်းရလဒ်ဖြစ်は။ ဒီဇိုင်းမှန်ရုံでအလိုအလျောက် ရရှိလာသော အရာမဟုတ်ပါ။",
      memoryTipMY: "အရည်အသွေးは'ဒီဇိုင်း + ထုတ်လုပ်မှု + တည်ဆောက်မှု' အားလုံး ပေါင်းစပ်မှ ရရှိは။"
    }
  },
  {
    id: "3-2",
    questionJP: "<ruby>品質<rt>ひんしつ</rt></ruby>マネジメントに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေး စီမံခန့်ခွဲမှု (Quality Management) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質<rt>ひんしつ</rt></ruby>マネジメントは、ISO 9000 シリーズにおいて、<ruby>経営者<rt>けいえいしゃ</rt></ruby>も<ruby>含<rt>ふく</rt></ruby>めた<ruby>企業組織全体<rt>きぎょうそしきぜんたい</rt></ruby>が、<ruby>顧客満足<rt>こきゃくまんぞく</rt></ruby>の<ruby>観点<rt>かんてん</rt></ruby>から品質を<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>改善<rt>かいぜん</rt></ruby>するための<ruby>管理手法<rt>かんりしゅほう</rt></ruby>である。", textMY: "QM はISO 9000   が     は" },
      { id: 2, textJP: "(2) <ruby>品質<rt>ひんしつ</rt></ruby>マネジメントは、プロセス（<ruby>工程<rt>こうてい</rt></ruby>）を<ruby>重視<rt>じゅうし</rt></ruby>する<ruby>管理技術<rt>かんりぎじゅつ</rt></ruby>である。", textMY: "QM は (Process) を  は" },
      { id: 3, textJP: "(3) <ruby>品質<rt>ひんしつ</rt></ruby>マネジメントにおいて、<ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>防止<rt>ぼうし</rt></ruby>と<ruby>製品品質<rt>せいひんひんしつ</rt></ruby>を<ruby>改善<rt>かいぜん</rt></ruby>するためには、<ruby>試験<rt>しけん</rt></ruby>・<ruby>検査<rt>けんさ</rt></ruby>を<ruby>厳重<rt>げんじゅう</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>し、<ruby>不適合<rt>ふてきごう</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>されたらその<ruby>都度手直<rt>つどてなお</rt></ruby>しすることが<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>となる。", textMY: "QM について   (Reactive approach) は は" },
      { id: 4, textJP: "(4) <ruby>不具合<rt>ふぐあい</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>し<ruby>製品品質<rt>せいひんひんしつ</rt></ruby>を<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>改善<rt>かいぜん</rt></ruby>・<ruby>向上<rt>こうじょう</rt></ruby>するためには、PDCA サイクルを<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>組織的<rt>そしきてき</rt></ruby>に<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: " PDCA cycle をが    は" },
      { id: 5, textJP: "(5) PDCA サイクルは、Act を<ruby>次<rt>つぎ</rt></ruby>のサイクルにつなげ、<ruby>螺旋状<rt>らせんじょう</rt></ruby>に<ruby>業務改善<rt>ぎょうむかいぜん</rt></ruby>（スパイラルアップ）を<ruby>図<rt>はか</rt></ruby>るものである。", textMY: "PDCA cycle はをと  (Spiral up) でをは" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予防 (Prevention)",
      reasonMY: "အရည်အသွေး စီမံခန့်ခွဲမှု (QM) のအဓိကမှာ ချို့ယွင်းချက် ဖြစ်ပေါ်လာပြီးမှ ပြင်ဆင်ခြင်း (手直し) မဟုတ်ဘဲ、ချို့ယွင်းချက် မဖြစ်ပေါ်အောင် ကြိုတင်ကာကွယ်ခြင်း (予防) သာ ဖြစ်は။",
      memoryTipMY: "QM = မမှားအောင်အရင်လုပ် (Prevention), မှားမှပြင်တာ (Correction) မဟုတ်။"
    }
  },
  {
    id: "3-3",
    questionJP: "「JASS 6」における<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>マネジメントおよび<ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>マネジメントシステムに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိထုတ်လုပ်သူのအရည်အသွေးစီမံခန့်ခွဲမှုစနစ်とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>様々<rt>さまざま</rt></ruby>な<ruby>機能<rt>きのう</rt></ruby>を<ruby>持<rt>も</rt></ruby>ったシステムを<ruby>確立<rt>かくりつ</rt></ruby>し、システム<ruby>図<rt>ず</rt></ruby>などで<ruby>明示<rt>めいじ</rt></ruby>するとされている。", textMY: "はを  (System Chart) で " },
      { id: 2, textJP: "(2) 「<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>記録<rt>きろく</rt></ruby>を<ruby>保管<rt>ほかん</rt></ruby>・<ruby>管理<rt>かんり</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>」は、システムが<ruby>持<rt>も</rt></ruby>つべき<ruby>機能<rt>きのう</rt></ruby>である。", textMY: "  を   " },
      { id: 3, textJP: "(3) 「<ruby>施工品質<rt>せこうひんしつ</rt></ruby>を<ruby>検査<rt>けんさ</rt></ruby>・<ruby>検証<rt>けんしょう</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>」は、システムが<ruby>持<rt>も</rt></ruby>つべき<ruby>機能<rt>きのう</rt></ruby>である。", textMY: "を  " },
      { id: 4, textJP: "(4) 「<ruby>標準化<rt>ひょうじゅんか</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める<ruby>機能<rt>きのう</rt></ruby>」は、システムが<ruby>持<rt>も</rt></ruby>つべき<ruby>機能<rt>きのう</rt></ruby>として<ruby>定<rt>さだ</rt></ruby>められている。", textMY: " (Standardization) を  " },
      { id: 5, textJP: "(5) <ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>の品質マネジメントを<ruby>有効<rt>ゆうこう</rt></ruby>とするためには、<ruby>設計者<rt>せっけいしゃ</rt></ruby>と<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>連携<rt>れんけい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り、<ruby>製作業者<rt>せいさくぎょうしゃ</rt></ruby>はその<ruby>指示<rt>しじ</rt></ruby>どおりの<ruby>製作<rt>せいさく</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: " と  が の  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 組織間の連携 (Coordination)",
      reasonMY: "အရည်အသွေးစီမံမှု (QM) စနစ်はအဖွဲ့အစည်းတစ်ခုတည်းのလုပ်ဆောင်မှုမဟုတ်ဘဲ ဒီဇိုင်နာ (設計者)、တည်ဆောက်သူ (施工者) とထုတ်လုပ်သူ (製作業者) အားလုံး အတူတကွ ပူးပေါင်းဆောင်ရွက်မှသာ အောင်မြင်နိုင်は။ ထုတ်လုပ်သူが ညွှန်ကြားချက်をသာ စောင့်နေခြင်းမှာ မလုံလောက်ပါ။",
      memoryTipMY: "QM はအားလုံးのပူးပေါင်းဆောင်ရွက်မှု (Triple win) ဖြစ်は။"
    }
  },
  {
    id: "3-4",
    questionJP: "<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>および<ruby>品質管理手法<rt>ひんしつかんりしゅほう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်သူのအရည်အသွေးအာမခံချက် (QA) とစီမံခန့်ခွဲမှုနည်းစနစ်ဆိုင်ရာ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>受注<rt>じゅちゅう</rt></ruby>から<ruby>納品<rt>のうひん</rt></ruby>までの<ruby>業務<rt>ぎょうむ</rt></ruby>の流れに従い、<ruby>保証項目<rt>ほしょうこうもく</rt></ruby>や<ruby>責任者<rt>せきにんしゃ</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>にしたものを「<ruby>品質保証体系図<rt>ひんしつほしょうたいけいず</rt></ruby>」という。", textMY: "  についてをを'QA System Chart'  は" },
      { id: 2, textJP: "(2) <ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>機械<rt>きかい</rt></ruby>・<ruby>人<rt>ひと</rt></ruby>・<ruby>作業方法<rt>さぎょうほうほう</rt></ruby>などの 4M を、<ruby>工程<rt>こうてい</rt></ruby>の流れに沿って<ruby>示<rt>しめ</rt></ruby>したものを PDCA サイクルという。", textMY: "、、、 (4M) を をPDCA cycle  は" },
      { id: 3, textJP: "(3) <ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>機能<rt>きのう</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>にし、<ruby>効率的<rt>こうりつてき</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>するための<ruby>組織<rt>そしき</rt></ruby>を「<ruby>品質管理組織<rt>ひんしつかんりそしき</rt></ruby>」という。", textMY: "を  を'QC Organization'  は" },
      { id: 4, textJP: "(4) <ruby>作業者<rt>さぎょうしゃ</rt></ruby>が<ruby>誤<rt>あやま</rt></ruby>った<ruby>操作<rt>そうさ</rt></ruby>をしても<ruby>危険<rt>きけん</rt></ruby>にさらされないよう、あらかじめ<ruby>安全対策<rt>あんぜんたいさく</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>しておくことを「フールプルーフ」という。", textMY: " を   をFool-proof  は" },
      { id: 5, textJP: "(5) <ruby>収集<rt>しゅうしゅう</rt></ruby>したデータの<ruby>傾向<rt>けいこう</rt></ruby>や<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>数値的<rt>すうちてき</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>する<ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>管理<rt>かんり</rt></ruby>を「<ruby>統計的品質管理<rt>とうけいてきひんしつかんり</rt></ruby>」という。", textMY: "をでをStatistical Quality Control (SQC)  は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - QC工程表 vs PDCA",
      reasonMY: "လုပ်ငန်းစဉ်အဆင့်ဆင့်について4M (လူ、ပစ္စည်း、စက်、နည်းလမ်း) တို့をဘယ်လိုစီမံမလဲဆိုはをဖော်ပြသည့်ဇယားမှာ 'QC Flow Chart' (QC工程表) ဖြစ်は။ PDCA (Plan-Do-Check-Act) မှာ စီမံခန့်ခွဲမှု လည်ပတ်ပုံစနစ်သာ ဖြစ်は။",
      memoryTipMY: "4M + Process Flow = QC Flow Chart (QC工程表)။"
    }
  },
  {
    id: "3-5",
    questionJP: "<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>品質管理活動<rt>ひんしつかんりかつどう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်သူのအရည်အသွေးထိန်းချုပ်မှု လှုပ်ရှားမှုများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外注品<rt>がいちゅうひん</rt></ruby>の品質は、<ruby>外注工場<rt>がいちゅうこうじょう</rt></ruby>の<ruby>実態<rt>じったい</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じた<ruby>指導<rt>しどう</rt></ruby>・<ruby>教育<rt>きょういく</rt></ruby>もしくは、<ruby>受<rt>う</rt></ruby>け<ruby>入れ<rt>いれ</rt></ruby>にあたっての<ruby>検査<rt>けんさ</rt></ruby>の<ruby>いずれか<rt>いずれか</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: " のを()    ()   '' (Either one) を  は" },
      { id: 2, textJP: "(2) <ruby>製作部門<rt>せいさくぶもん</rt></ruby>은 <ruby>品質保証<rt>ひんしつほしょう</rt></ruby>の<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>を<ruby>担<rt>にな</rt></ruby>っているため、<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>などを<ruby>活用<rt>かつよう</rt></ruby>し、<ruby>作業内容<rt>さぎょうないよう</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>する。", textMY: "はQA  でを を " },
      { id: 3, textJP: "(3) <ruby>外注品<rt>がいちゅうひん</rt></ruby>および<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>、<ruby>工程内<rt>こうていない</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>などの<ruby>判定基準<rt>はんていきじゅん</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>に<ruby>定<rt>さだ</rt></ruby>めておく。", textMY: "、とについて  / を " },
      { id: 4, textJP: "(4) <ruby>製造設備<rt>せいぞうせつび</rt></ruby>・<ruby>測定機器<rt>そくていきき</rt></ruby>は、<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>一定<rt>いってい</rt></ruby>の<ruby>水準<rt>すいじゅん</rt></ruby>に<ruby>保<rt>たも</rt></ruby>つために、<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>維持管理<rt>いじかんり</rt></ruby>する。", textMY: "とを   (Maintenance/Calibration) " },
      { id: 5, textJP: "(5) <ruby>品質管理<rt>ひんしつかんり</rt></ruby>の<ruby>質<rt>しつ</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるために、<ruby>技術者<rt>ぎじゅつしゃ</rt></ruby>や<ruby>技能者<rt>ぎのうしゃ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>専門的<rt>せんもんてき</rt></ruby>な<ruby>教育・訓練<rt>きょういく・くんれん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する。", textMY: " とを " }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 外注品管理 (Outsourced Goods)",
      reasonMY: "ပြင်ပစက်ရုံမှ ပစ္စည်းများをလက်ခံရာについてပညာပေးခြင်း (Education) သာမが လက်ခံစစ်ဆေးခြင်း (Receiving Inspection) をပါ လုပ်ဆောင်ရမည်။ ဤနှစ်ခုအနက် 'တစ်ခုခု' သာ လုပ်ဆောင်ရမည်ဆိုခြင်းမှာ မလုံလောက်ပါ။ PDF ရှိ Scribble အရ 'Record...' ဟုပါရှိသည့်အတိုင်း မှတ်တမ်းအထောက်အထား (Certificate/Inspection record) ပါ ရှိရန် လိုအပ်は။",
      memoryTipMY: "ပြင်ပပစ္စည်းဆိုလျှင် စစ်ဆေးခြင်း (Inspection) をမဖြစ်မနေ လုပ်ရမည်။"
    }
  },
  {
    id: "3-6",
    questionJP: "<ruby>統計的品質管理<rt>とうけいてきひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စာရင်းအင်းနည်းでအရည်အသွေးထိန်းချုပ်ခြင်း (SQC) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>近代的な品質管理<rt>きんだいてきなひんしつかんり</rt></ruby>は、<ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>している。", textMY: "について (Statistical method) をは" },
      { id: 2, textJP: "(2) <ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>とは、<ruby>収集<rt>しゅうしゅう</rt></ruby>したデータの<ruby>傾向<rt>けいこう</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>するための<ruby>手法<rt>しゅほう</rt></ruby>であり、「QC 7 つ<ruby>道具<rt>どうぐ</rt></ruby>」などがよく<ruby>用いられる<rt>もちいられる</rt></ruby>。", textMY: "は のを 'QC 7 Tools' をは" },
      { id: 3, textJP: "(3) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>は、<ruby>一部<rt>いちぶ</rt></ruby>のデータをもとに<ruby>集団全体<rt>しゅうだんぜんたい</rt></ruby>の<ruby>姿<rt>すがた</rt></ruby>を<ruby>推定<rt>すいてい</rt></ruby>するものである。", textMY: " (Sampling) はを のをは" },
      { id: 4, textJP: "(4) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>は、<ruby>個々<rt>ここ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>の<ruby>測定値<rt>そくていち</rt></ruby>がばらばらで、<ruby>製品全体<rt>せいひんぜんたい</rt></ruby>のバラツキを<ruby>特定<rt>とくてい</rt></ruby>の<ruby>数値<rt>すうち</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すことができない<ruby>場合<rt>ばあい</rt></ruby>でも、<ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby>ことで<ruby>適用<rt>てきよう</rt></ruby>することができる。", textMY: "はの  のをで では" },
      { id: 5, textJP: "(5) <ruby>計量値データ<rt>けいりょうちデータ</rt></ruby>の多くは<ruby>正規分布<rt>せいきぶんぷ</rt></ruby>となり、<ruby>計数値データ<rt>けいすうちデータ</rt></ruby>は<ruby>二項分布<rt>にこうぶんぷ</rt></ruby>になることが<ruby>知<rt>し</rt></ruby>られている。", textMY: "  (Measurable)  Normal distribution 、  (Countable)  Binomial distribution は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 統計的推測 (Statistical Inference)",
      reasonMY: "နမူနာစစ်ဆေးခြင်း (Sampling) についてဒေတာများのကွဲပြားမှု (Dispersion/Variance) を'ကိန်းဂဏန်းでဖော်ပြနိုင်မှသာ' (数値で表すことができる) စာရင်းအင်းနည်းပညာをအသုံးပြု၍ တစ်ခုလုံးのအခြေအနေをမှန်ကန်စွာ ခန့်မှန်းနိုင်မည်ဖြစ်は။ မဖော်ပြနိုင်場合はSQC をသုံး၍ မရပါ။",
      memoryTipMY: "ဒေတာをကိန်းဂဏန်း (Numbers) でဖော်ပြနိုင်မှ စာရင်းအင်းနည်းをသုံးနိုင်は။"
    }
  },
  {
    id: "3-7",
    questionJP: "<ruby>品質管理手法<rt>ひんしつかんりしゅほう</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いたデータ<ruby>分析<rt>ぶんせき</rt></ruby>および、データ<ruby>採取<rt>さいしゅ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေးထိန်းချုပ်မှု နည်းစနစ်များでဒေတာခွဲခြမ်းစိတ်ဖြာခြင်းとကောက်ယူခြင်းဆိုင်ရာ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質管理活動<rt>ひんしつかんりかつどう</rt></ruby>において、<ruby>現状<rt>げんじょう</rt></ruby>を<ruby>正確<rt>せいかく</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>するとともに、<ruby>客観的<rt>きゃっかんてき</rt></ruby>なデータとして<ruby>表<rt>あらわ</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "についてを と (Objective)   は" },
      { id: 2, textJP: "(2) <ruby>母集団<rt>ぼしゅうだん</rt></ruby>の<ruby>姿<rt>すがた</rt></ruby>を<ruby>正確<rt>せいかく</rt></ruby>に<ruby>把握<rt>はあく</rt></ruby>するためには、<ruby>作為的<rt>さいてき</rt></ruby>にデータを<ruby>採取<rt>さいしゅ</rt></ruby>してはならず、<ruby>無作為<rt>むさくい</rt></ruby>にデータを<ruby>採取<rt>さいしゅ</rt></ruby>（ランダムサンプリング）する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "のを   (Biased) 、 (Random sampling) で" },
      { id: 3, textJP: "(3) <ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>連続<rt>れんぞく</rt></ruby>して<ruby>生産<rt>せいさん</rt></ruby>されるなどのことが<ruby>生<rt>しょう</rt></ruby>じないように、データは<ruby>迅速<rt>じんそく</rt></ruby>かつ<ruby>正確<rt>せいかく</rt></ruby>に<ruby>処理<rt>しょり</rt></ruby>する。", textMY: "  を " },
      { id: 4, textJP: "(4) データには<ruby>計量値<rt>けいりょうち</rt></ruby>と<ruby>計数値<rt>けいすうち</rt></ruby>がある。<ruby>両者<rt>りょうしゃ</rt></ruby>は<ruby>数値<rt>すうち</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じであるが、<ruby>採取<rt>さいしゅ</rt></ruby>や<ruby>処理<rt>しょり</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる。", textMY: "についてMeasurable とCountable  は は  と  は" },
      { id: 5, textJP: "(5) <ruby>測定誤差<rt>そくていごさ</rt></ruby>など、データには<ruby>誤差<rt>ごさ</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる<ruby>要因<rt>よういん</rt></ruby>が<ruby>存在<rt>そんざい</rt></ruby>することを<ruby>認識<rt>にんしき</rt></ruby>しておく<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: " (Error)   について  はを" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 計量値 vs 計数値 (Variable vs Attribute)",
      reasonMY: "計量値 (Measurable - အတိုင်းအတာ) と計数値 (Countable - အရေအတွက်) တို့はကိန်းဂဏန်းသဘာဝ (Numerical nature) လုံးဝ မတူညီကြပါ။ တိုင်းတာရသော တန်ဖိုးများはအဆက်မပြတ် (Continuous) ဖြစ်ပြီး、ရေတွက်ရသော တန်ဖိုးများはသီးခြား (Discrete) ဖြစ်は။",
      memoryTipMY: "ကိန်းဂဏန်းသဘာဝ (Nature of numbers) ချင်း မတူပါ။"
    }
  },
  {
    id: "3-8",
    questionJP: "<ruby>特性<rt>とくせい</rt></ruby> x, y の<ruby>散布図<rt>さんぷず</rt></ruby>とその<ruby>相関関係<rt>そうかんかんけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဒေတာ x とy တို့の散布図 (Scatter Plot) と၎င်းတို့のဆက်နွယ်မှု (Correlation) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) A には、<ruby>強<rt>つよ</rt></ruby>い<ruby>正<rt>せい</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: " A について   (Strong Positive Correlation) は" },
      { id: 2, textJP: "(2) B には、<ruby>強<rt>つよ</rt></ruby>い<ruby>負<rt>ふ</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: " B について   (Strong Negative Correlation) は" },
      { id: 3, textJP: "(3) C には、<ruby>弱<rt>よわ</rt></ruby>い<ruby>正<rt>せい</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: " C について   (Weak Positive Correlation) は" },
      { id: 4, textJP: "(4) D には、<ruby>弱<rt>よわ</rt></ruby>い<ruby>負<rt>ふ</rt></ruby>の<ruby>相関<rt>そうかん</rt></ruby>がある。", textMY: " D について   (Weak Negative Correlation) は" },
      { id: 5, textJP: "(5) E には、<ruby>相関<rt>そうかん</rt></ruby>がない。", textMY: " E について " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 非線形相関 (Non-linear Correlation)",
      reasonMY: "ပုံ E についてအမှတ်အသားများはမျဉ်းဖြောင့်ပုံစံ (Linear) မဟုတ်သော်လည်း ခုံးသောပုံစံ (Curvilinear) でစနစ်တကျ ရှိနေသောကြောင့် ၎င်းを'ဆက်နွယ်မှုမရှိ' ဟု မဆိုနိုင်ပါ။ ၎င်းについてNon-linear correlation ရှိနေは။",
      memoryTipMY: "ပုံစံတစ်ခုခု (Curve) ဖြစ်နေလျှင် ဆက်နွယ်မှု (Correlation) ရှိはဟု သတ်မှတ်は။"
    }
  },
  {
    id: "3-9",
    questionJP: "<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>と OC <ruby>曲線<rt>きょくせん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "နမူနာစစ်ဆေးခြင်း (Sampling) とOC Curve ဆိုင်ရာ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ロットの<ruby>不良率<rt>ふりょうりつ</rt></ruby>を<ruby>横軸<rt>よこじく</rt></ruby>に、ロットが<ruby>合格<rt>ごうかく</rt></ruby>する<ruby>確率<rt>かくりつ</rt></ruby>を<ruby>縦軸<rt>たてじく</rt></ruby>にとり、この<ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>したものを OC <ruby>曲線<rt>きょくせん</rt></ruby>という。", textMY: "Lot のを (X) とを (Y) について をOC Curve  は" },
      { id: 2, textJP: "(2) OC <ruby>曲線<rt>きょくせん</rt></ruby>は、<ruby>抜取検査方式<rt>ぬきとりけんさほうしき</rt></ruby>が<ruby>決<rt>き</rt></ruby>まれば、それに対して<ruby>固有<rt>こゆう</rt></ruby>のものに<ruby>決<rt>き</rt></ruby>まる。", textMY: "をはとOC Curve は    は" },
      { id: 3, textJP: "(3) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>では、<ruby>合否判定基準<rt>ごうひはんていきじゅん</rt></ruby>を<ruby>厳<rt>きび</rt></ruby>しく<ruby>設定<rt>せってい</rt></ruby>すれば、<ruby>不良率<rt>ふりょうりつ</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>い“<ruby>良<rt>よ</rt></ruby>いロット”が<ruby>不合格<rt>ふごうかく</rt></ruby>となることや、<ruby>不良率<rt>ふりょうりつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い“<ruby>悪<rt>わる</rt></ruby>いロット”が<ruby>合格<rt>ごうかく</rt></ruby>となることは<ruby>回避<rt>かいひ</rt></ruby>される。", textMY: "についてを場合は Lot と Lot をは " },
      { id: 4, textJP: "(4) OC <ruby>曲線<rt>きょくせん</rt></ruby>を<ruby>観察<rt>かんさつ</rt></ruby>することによって、ある<ruby>不良率<rt>ふりょうりつ</rt></ruby>のロットがどれくらいの<ruby>割合<rt>わりあい</rt></ruby>で<ruby>合格<rt>ごうかく</rt></ruby>になるかを知ることができる。", textMY: "OC Curve をで Lot の はをは" },
      { id: 5, textJP: "(5) <ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>において、“<ruby>良<rt>よ</rt></ruby>いロット”を“<ruby>悪<rt>わる</rt></ruby>いロット”とみなす<ruby>危険性<rt>きけんせい</rt></ruby>を<ruby>生産者危険<rt>せいさんしゃきけん</rt></ruby>といい、“<ruby>悪<rt>わる</rt></ruby>いロット”を“<ruby>良<rt>よ</rt></ruby>いロット”とみなす<ruby>危険性<rt>きけんせい</rt></ruby>を<ruby>消費者危険<rt>しょうひしゃきけん</rt></ruby>という。", textMY: " Lot を をProducer's Risk 、 Lot を をConsumer's Risk  は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 抜取検査の限界",
      reasonMY: "နမူနာစစ်ဆေးခြင်း (Sampling Inspection) についてမည်မျှပင် စံနှုန်းをတင်းကြပ်စေကာမူ စာရင်းအင်းသဘောတရားအရ အမှားဖြစ်နိုင်ခြေ (Producer/Consumer Risk) を'လုံးဝ' (回避される) ရှောင်ရှားနိုင်ခြင်း မရှိပါ။",
      memoryTipMY: "နမူနာစစ်ဆေးခြင်းについてအမှားဖြစ်နိုင်ခြေ အမြဲတမ်း ရှိနေပါは။"
    }
  },
  {
    id: "3-10",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのဓာတုဖွဲ့စည်းပုံ စမ်းသပ်ခြင်း (Chemical Analysis) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>から<ruby>採取<rt>さいしゅ</rt></ruby>した<ruby>試料<rt>しりょう</rt></ruby>を<ruby>化学分析<rt>かがくぶんせき</rt></ruby>し、<ruby>鋼材中<rt>こうざいちゅう</rt></ruby>に<ruby>含まれる代表的<rt>ふくまれるだいひょうてき</rt></ruby>な<ruby>化学成分<rt>かがくせいぶん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>を<ruby>調べる試験<rt>しらべるしけん</rt></ruby>である。", textMY: "は を について が のをは" },
      { id: 2, textJP: "(2) <ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>には、<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>と<ruby>製品分析<rt>せいひんぶんせき</rt></ruby>があり、<ruby>両者<rt>りょうしゃ</rt></ruby>は<ruby>試料<rt>しりょう</rt></ruby>の<ruby>採取方法<rt>さいしゅほうほう</rt></ruby>と<ruby>採取時期<rt>さいしゅじき</rt></ruby>が<ruby>異なる<rt>ことなる</rt></ruby>。", textMY: "について (Ladle analysis) と (Check analysis)  、と は" },
      { id: 3, textJP: "(3) <ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>平均的<rt>へいきんてき</rt></ruby>な<ruby>化学成分<rt>かがくせいぶん</rt></ruby>を<ruby>示す<rt>しめす</rt></ruby>。<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>される<ruby>化学成分<rt>かがくせいぶん</rt></ruby>は、<ruby>通常<rt>つうじょう</rt></ruby>、<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>によるものである。", textMY: "Ladle analysis はを、Mill Sheet (規格品証明書)  はでLadle analysis   は" },
      { id: 4, textJP: "(4) <ruby>製品分析<rt>せいひんぶんせき</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>は、<ruby>必<rt>かなら</rt></ruby>ずしも<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>とは<ruby>一致<rt>いっち</rt></ruby>せず、また、<ruby>試料相互間<rt>しりょうそうごかん</rt></ruby>でも<ruby>異なる値<rt>ことなるあたい</rt></ruby>となることがある。", textMY: " (Check analysis) はLadle analysis と  、  は" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>または<ruby>原品証明書<rt>げんぴんしょうめいしょ</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>する。<ruby>鋼種<rt>こうしゅ</rt></ruby>が<ruby>不明<rt>ふめい</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>や<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>疑義<rt>ぎぎ</rt></ruby>が<ruby>生じた場合<rt>しょうじたばあい</rt></ruby>は、<ruby>信頼性<rt>しんらいせい</rt></ruby>の<ruby>高い溶鋼分析<rt>たかいようこうぶんせき</rt></ruby>により<ruby>化学成分<rt>かがくせいぶん</rt></ruby>を<ruby>調べる<rt>しらべる</rt></ruby>。", textMY: "    Ladle analysis (溶鋼分析) で " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製品分析 (Product Analysis)",
      reasonMY: "အဆောက်အဦဆောက်လုပ်သည့် နေရာについてသံမဏိအမျိုးအစားをပြန်လည်စစ်ဆေးလိုပါက、လက်ရှိရှိနေသော ပစ္စည်းမှ နမူနာယူ၍ စစ်ဆေးသော 'ထုတ်ကုန်စစ်ဆေးမှု' (製品分析 - Check analysis) をသာ လုပ်ဆောင်နိုင်は။ 'အရည်ဖျော်ချိန်စစ်ဆေးမှု' (溶鋼分析) をပြန်လုပ်ရန်မှာ မဖြစ်နိုင်ပါ။",
      memoryTipMY: "စက်ရုံကထွက်ပြီးသား ပစ္စည်းをစစ်ရင် '製品分析' (Check analysis) ပဲ လုပ်လို့ရတယ်။"
    }
  },
  {
    id: "3-11",
    questionJP: "<ruby>材料試験<rt>ざいりょうしけん</rt></ruby>とその<ruby>説明<rt>せつめい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းစမ်းသပ်မှုများと၎င်းတို့のရှင်းလင်းချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>引張試験<rt>ひっぱりしけん</rt></ruby>においては、<ruby>鋼材内部<rt>こうざいないぶ</rt></ruby>に<ruby>介在物<rt>かいざいぶつ</rt></ruby>、<ruby>偏析<rt>へんせき</rt></ruby>、<ruby>ラミネーション<rt>らみねーしょん</rt></ruby>などが<ruby>存在<rt>そんざい</rt></ruby>すると、その<ruby>程度<rt>ていど</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>破断面<rt>はだんめん</rt></ruby>に<ruby>層状<rt>そうじょう</rt></ruby>となって<ruby>観察<rt>かんさつ</rt></ruby>される。", textMY: "についてについて   lamination 場合は について は" },
      { id: 2, textJP: "(2) <ruby>曲げ試験<rt>まげしけん</rt></ruby>は、<ruby>試験片<rt>しけんへん</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>の<ruby>内側半径<rt>うちがわはんけい</rt></ruby>で<ruby>規定<rt>きてい</rt></ruby>の<ruby>角度<rt>かくど</rt></ruby>になるまで<ruby>折り曲げ<rt>おりまげ</rt></ruby>、<ruby>欠陥<rt>けっかん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>観察<rt>かんさつ</rt></ruby>し、<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>変形能力<rt>へんけいのうりょく</rt></ruby>を<ruby>調べる試験<rt>しらべるしけん</rt></ruby>である。", textMY: "Bending test は    を のをは" },
      { id: 3, textJP: "(3) <ruby>一般構造用圧延鋼材<rt>いっぱんこうぞうようあつえんこうざい</rt></ruby>では、「<ruby>現在製造<rt>げんざいせいぞう</rt></ruby>されている<ruby>材質<rt>ざいしつ</rt></ruby>レベルからみて、1 <ruby>号試験片<rt>ごうしけんへん</rt></ruby>による<ruby>曲げ試験<rt>まげしけん</rt></ruby>では、き裂を<ruby>生<rt>しょう</rt></ruby>じることはないため、<ruby>規定<rt>きてい</rt></ruby>しなくても<ruby>問題<rt>もんだい</rt></ruby>が<ruby>無い<rt>ない</rt></ruby>」として<ruby>当該<rt>とうがい</rt></ruby> JIS において、<ruby>曲げ試験<rt>まげしけん</rt></ruby>は<ruby>要求<rt>ようきゅう</rt></ruby>されていない。", textMY: "SS material は   でBending test について  JIS についてを は " },
      { id: 4, textJP: "(4) <ruby>シャルピー衝撃試験<rt>しゃるぴーしょうげきしけん</rt></ruby>は、<ruby>試験片<rt>しけんへん</rt></ruby>をハンマで<ruby>打撃<rt>だげき</rt></ruby>して<ruby>破断<rt>はだん</rt></ruby>させ、<ruby>破断<rt>はだん</rt></ruby>に<ruby>要<rt>よう</rt></ruby>したエネルギーを<ruby>測定<rt>そくてい</rt></ruby>するものである。", textMY: "Charpy impact test はをで   をは" },
      { id: 5, textJP: "(5) <ruby>シャルピー衝撃試験<rt>しゃるぴーしょうげきしけん</rt></ruby>では、<ruby>吸収<rt>きゅうしゅう</rt></ruby>したエネルギー<ruby>量<rt>りょう</rt></ruby>や<ruby>破断面<rt>はだんめん</rt></ruby>の<ruby>観察<rt>かんさつ</rt></ruby>により、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>脆性・靭性<rt>ぜいせい・じんせい</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>することができる。", textMY: " を のToughness () とBrittle () をは" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - JIS 規格と曲げ試験",
      reasonMY: "JIS စံနှုန်းအရ သံမဏိပစ္စည်းများ (SS, SM, SN စは) အတွက် Bending test (曲げ試験) をမဖြစ်မနေ လုပ်ဆောင်ရန် သတ်မှတ်ထားပါは။ 'JIS についてမလိုအပ်ပါ' ဆိုခြင်းမှာ မှားယွင်းသော အချက်ဖြစ်は။",
      memoryTipMY: "Bending test はသံမဏိအားလုံးအတွက် JIS のအခြေခံ လိုအပ်ချက် ဖြစ်は။"
    }
  },
  {
    id: "3-12",
    questionJP: "<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်သူのပစ္စည်းဝယ်ယူမှု စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>は、<ruby>規格品証明書等<rt>きかくひんしょうめいしょとう</rt></ruby>と<ruby>現品<rt>げんぴん</rt></ruby>との<ruby>照合<rt>しょうごう</rt></ruby>、<ruby>外観<rt>がいかん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>、<ruby>形状・寸法<rt>けいじょう・すんぽう</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>、<ruby>員数<rt>いんずう</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>などを<ruby>行<rt>おこな</rt></ruby>う。", textMY: "についてMill Sheet と、、、とを" },
      { id: 2, textJP: "(2) <ruby>切板<rt>きりいた</rt></ruby>などの<ruby>中間加工部品<rt>ちゅうかんかこうぶひん</rt></ruby>については、<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>による<ruby>確認<rt>かくにん</rt></ruby>に<ruby>代<rt>か</rt></ruby>えて、<ruby>現品<rt>げんぴん</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>っている<ruby>材料識別表示記号<rt>ざいりょうしきべつひょうじきごう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することで、<ruby>材質<rt>ざいしつ</rt></ruby>を<ruby>保証<rt>ほしょう</rt></ruby>することができる。", textMY: "   Mill Sheet   をでをは" },
      { id: 3, textJP: "(3) <ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>材料<rt>ざいりょう</rt></ruby>は、<ruby>不合格品<rt>ふごうかくひん</rt></ruby>であることを<ruby>明示<rt>めいじ</rt></ruby>し、<ruby>誤<rt>あやま</rt></ruby>って<ruby>使用<rt>しよう</rt></ruby>されることがないように<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "を  " },
      { id: 4, textJP: "(4) <ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>で、<ruby>規格品証明書<rt>きかくひんしょうめいしょ</rt></ruby>との<ruby>照合・確認<rt>しょうごう・かくにん</rt></ruby>が<ruby>不可能<rt>ふかのう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>正<rt>ただ</rt></ruby>しい<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えるか、<ruby>材料試験<rt>ざいりょうしけん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>明<rt>あき</rt></ruby>らかにする。", textMY: "Mill Sheet と 場合は   (Lab test)  を" },
      { id: 5, textJP: "(5) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>材料<rt>ざいりょう</rt></ruby>や<ruby>外注品<rt>がいちゅうひん</rt></ruby>の<ruby>受け入れ<rt>うけいれ</rt></ruby>にあたり、<ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>を<ruby>自ら実施<rt>みずからじっし</rt></ruby>するか、もしくは、<ruby>外注業者<rt>がいちゅうぎょうしゃ</rt></ruby>が<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>していることを<ruby>何<rt>なに</rt></ruby>らかの<ruby>手段<rt>しゅだん</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>しておかなければならない。", textMY: "はをを     で" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 材料の保証",
      reasonMY: "ပစ္စည်းပေါ်ရှိ အမှတ်အသား (Identification mark) をကြည့်ရုံでအရည်အသွေးを'အာမခံ' (保証) ရန် မလုံလောက်ပါ။ ၎င်းはMill Sheet ပါ အချက်အလက်များとတိုက်ဆိုင်をက်ညီမှု ရှိမှသာ ပစ္စည်းのအရည်အသွေးをအာမခံနိုင်မည် ဖြစ်は။",
      memoryTipMY: "ပစ္စည်းအမှတ်အသား + Mill Sheet (စာရွက်) နှစ်မျိုးစလုံး လိုအပ်は။"
    }
  },
  {
    id: "3-13",
    questionJP: "「JASS 6」の<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>と<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ကြားဖြတ်စစ်ဆေးမှုとလက်ခံစစ်ဆေးမှုဆိုင်ရာ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>検査項目、方法、合否判定基準、実施時期<rt>けんさこうもく、ほうほう、ごうひはんていきじゅん、じっしじき</rt></ruby>などは<ruby>特記<rt>とっき</rt></ruby>による。", textMY: " 場合はSpec   、、/  Spec  は" },
      { id: 2, textJP: "(2) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>の<ruby>検査方法<rt>けんさほうほう</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>とし、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>書類検査<rt>しょるいけんさ</rt></ruby>」による。", textMY: " Spec 場合はについてを JASS 6  " },
      { id: 3, textJP: "(3) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>」、「<ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>」あるいはその<ruby>他<rt>た</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>によるものとし、その<ruby>種類<rt>しゅるい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。", textMY: " (Object inspection) 場合はJASS 6   、  をSpec  " },
      { id: 4, textJP: "(4) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は、その<ruby>検査項目<rt>けんさこうもく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>全数、対物<rt>ぜんすう、たいぶつ</rt></ruby>による<ruby>寸法検査<rt>すんぽうけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "について場合は を(100%)  " },
      { id: 5, textJP: "(5) <ruby>検査<rt>けんさ</rt></ruby>の<ruby>結果、管理許容差、<rt>けっか、かんりきょようさ</rt></ruby>または<ruby>特記<rt>とっき</rt></ruby>のある<ruby>場合<rt>ばあい</rt></ruby>にはその<ruby>許容差<rt>きょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えて<ruby>不適合<rt>ふてきごう</rt></ruby>となった<ruby>製品<rt>せいひん</rt></ruby>は、<ruby>修正<rt>しゅうせい</rt></ruby>または<ruby>再製作等<rt>さいせいさくとう</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "は (Tolerance) 場合は  を " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差 (Limit Tolerance)",
      reasonMY: "စစ်ဆေးမှု အောင်/ရှုံး (Pass/Fail) ဆုံးဖြတ်ရာについて'စီမံခန့်ခွဲမှုစံနှုန်း' (管理許容差) ထက် ပိုမိုကျယ်ပြန့်သော 'နောက်ဆုံးကန့်သတ်စံနှုန်း' (限界許容差) をကျော်လွန်မှသာ 'မをက်ညီသောထုတ်ကုန်' (不適合) ဟု သတ်မှတ်ခြင်းဖြစ်は။ (၅) について管理 をသုံးထားခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "အောင်/ရှုံး (Pass/Fail) ဆုံးဖြတ်လျှင် 限界 (Limit) をကြည့်ရမည်။"
    }
  },
  {
    id: "3-14",
    questionJP: "「JASS 6」の<ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>と<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ကြားဖြတ်စစ်ဆေးမှုとလက်ခံစစ်ဆေးမှုဆိုင်ရာ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製品<rt>せいひん</rt></ruby>の<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>受入検査方法<rt>うけいれけんさほうほう</rt></ruby>には<ruby>書類検査<rt>しょるいけんさ</rt></ruby>と<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>があり、<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。", textMY: "についてと   Spec  " },
      { id: 2, textJP: "(2) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>の<ruby>検査方法<rt>けんさほうほう</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>とし、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>書類検査<rt>しょるいけんさ</rt></ruby>」による。", textMY: " についてをJASS 6   は" },
      { id: 3, textJP: "(3) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 7 「<ruby>寸法精度受入検査基準<rt>すんぽうせいどうけいれけんさきじゅん</rt></ruby>」に<ruby>示<rt>しめ</rt></ruby>す「<ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>」、「<ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>」あるいはその<ruby>他<rt>た</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>によるものとし、その<ruby>種類<rt>しゅるい</rt></ruby>は<ruby>特記<rt>とっき</rt></ruby>による。", textMY: "  、 はをSpec  " },
      { id: 4, textJP: "(4) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は、その<ruby>検査項目<rt>けんさこうもく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>抜取率 30%<rt>ぬきとりりつさんじゅっぱーせんと</rt></ruby>で、<ruby>対物<rt>たいぶつ</rt></ruby>による<ruby>寸法検査<rt>すんぽうけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "について場合は  % を " },
      { id: 5, textJP: "(5) <ruby>検査<rt>けんさ</rt></ruby>の<ruby>結果、限界許容差、<rt>けっか、げんかいきょようさ</rt></ruby>または<ruby>特記<rt>とっき</rt></ruby>のある<ruby>場合<rt>ばあい</rt></ruby>にはその<ruby>許容差<rt>きょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えて<ruby>不適合<rt>ふてきごう</rt></ruby>となった<ruby>製品<rt>せいひん</rt></ruby>は、<ruby>修正<rt>しゅうせい</rt></ruby>または<ruby>再製作等<rt>さいせいさくとう</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "はLimit Tolerance 場合は  を 検査しなければならない" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不合格時の処置 (Action when fail)",
      reasonMY: "စာရွက်စစ်ဆေးမှု (書類検査) についてမအောင်မြင်場合はထိုအချက်အတွက် ကျန်ရှိသော ပစ္စည်းများ 'အားလုံး' (全数検査 - 100%) をပစ္စည်းစစ်ဆေးမှု (対物検査) လုပ်ဆောင်ရမည်။ နမူနာ ၃၀% ဟု ဆိုခြင်းမှာ မလုံလောက်ပါ။",
      memoryTipMY: "စာရွက်မှာ ရှုံးရင် (Fail) -> ပစ္စည်းအားလုံးを(100%) ပြန်検査しなければならない။"
    }
  },
  {
    id: "3-15",
    questionJP: "「JASS 6」の<ruby>社内検査<rt>しゃないけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ စက်ရုံについてးစစ်ဆေးမှု (Internal Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は、<ruby>加工<rt>かこう</rt></ruby>の<ruby>各段階<rt>かくだんかい</rt></ruby>で<ruby>社内検査<rt>しゃないけんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて、それらの<ruby>結果<rt>けっか</rt></ruby>を<ruby>記録<rt>きろく</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>す。", textMY: "はについてについてを  " },
      { id: 2, textJP: "(2) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>のうち、<ruby>製品<rt>せいひん</rt></ruby>の<ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>については、<ruby>検査結果<rt>けんさけっか</rt></ruby>を<ruby>測定寸法<rt>そくていすんぽう</rt></ruby>の<ruby>設計寸法<rt>せっけいすんぽう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>差<rt>さ</rt></ruby>として<ruby>社内検査成績表<rt>しゃないけんさせいせきひょう</rt></ruby>に<ruby>記録<rt>きろく</rt></ruby>する。", textMY: "についてと (Difference) をについて" },
      { id: 3, textJP: "(3) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>の<ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>において、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>の<ruby>検査項目<rt>けんさこうもく</rt></ruby>は、<ruby>柱<rt>はしら</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ、<ruby>階高<rt>かいだか</rt></ruby>、<ruby>仕口部<rt>しぐちぶ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ、<ruby>柱<rt>はしら</rt></ruby>のせい、<ruby>仕口部<rt>しぐちぶ</rt></ruby>のせい、<ruby>梁<rt>はり</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ、<ruby>梁<rt>はり</rt></ruby>のせいとし、これらの<ruby>項目<rt>こうもく</rt></ruby>について<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>とする。", textMY: "/ と     (Sampling) を" },
      { id: 4, textJP: "(4) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>のうち、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>については、<ruby>溶接部<rt>ようせつぶ</rt></ruby>のすべてを<ruby>検査対象範囲<rt>けんさたいしょうはんい</rt></ruby>とし、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観<rt>がいかん</rt></ruby>および<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "についてのとについてを" },
      { id: 5, textJP: "(5) <ruby>社内検査要領書<rt>しゃないけんさようりょうしょ</rt></ruby>は、<ruby>通常、製作要領書<rt>つうじょう、せいさくようりょうしょ</rt></ruby>に<ruby>収録<rt>しゅうろく</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>と<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", textMY: "をについて との " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 寸法検査の範囲 (Scope of Inspection)",
      reasonMY: "တိုင် (Column) とမြားတန်း (Beam) တို့のအတိုင်းအတာ (Dimensions) များはအလွန်အရေးကြီးသောကြောင့် စက်ရုံについてး စစ်ဆေးမှု (社内検査) についてနမူနာကောက်စစ်ခြင်း (抜取) မဟုတ်ဘဲ အားလုံးを(全数検査 - 100%) စစ်ဆေးရမည်။",
      memoryTipMY: "အတိုင်းအတာ (Dimensions) をအားလုံး (100%) 検査しなければならない။"
    }
  }
];
