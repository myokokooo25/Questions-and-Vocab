
import { StudyCardData } from '../types';

export const chapter3Part2Data: StudyCardData[] = [
  {
    id: "3-16",
    questionJP: "<ruby>製品検査<rt>せいひんけんさ</rt></ruby>とその<ruby>注意点<rt>ちゅういてん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်ကုန်စစ်ဆေးမှုとသတိပြုဖွယ်ရာများဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>取合部検査<rt>とりあいぶけんさ</rt></ruby>は、<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>および<ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>のうち<ruby>工場<rt>こうじょう</rt></ruby>で<ruby>接合<rt>せつごう</rt></ruby>される<ruby>部分<rt>ぶぶん</rt></ruby>について<ruby>行<rt>おこな</rt></ruby>う。", textMY: " (Joint inspection) をについて Bolt と " },
      { id: 2, textJP: "(2) <ruby>取合部検査<rt>とりあいぶけんさ</rt></ruby>のうち<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>では、<ruby>孔<rt>あな</rt></ruby>の<ruby>心<rt>しん</rt></ruby>ずれ、はしあき・へりあき<ruby>寸法<rt>すんぽう</rt></ruby>、<ruby>摩擦面<rt>まさつめん</rt></ruby>の<ruby>処理状態<rt>しょりじょうたい</rt></ruby>について<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Bolt について、Edge distance と を" },
      { id: 3, textJP: "(3) <ruby>取合部検査<rt>とりあいぶけんさ</rt></ruby>のうち<ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>では、<ruby>溶接面<rt>ようせつめん</rt></ruby>の<ruby>開先形状・方向・溶接上<rt>かいさきけいじょう・ほうこう・ようせつじょう</rt></ruby>の<ruby>支障<rt>ししょう</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>について<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "について、と を" },
      { id: 4, textJP: "(4) <ruby>外観検査<rt>がいかんけんさ</rt></ruby>は、<ruby>部材表面・切断面・高力ボルト接合面・溶接部<rt>ぶざいひょうめん・せつだんめん・こうりょくぼるとせつごうめん・ようせつぶ</rt></ruby>の<ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>およびスタッド<ruby>溶接部<rt>ようせつぶ</rt></ruby>について<ruby>行<rt>おこな</rt></ruby>う。", textMY: "について、とStud  を" },
      { id: 5, textJP: "(5) <ruby>外観検査<rt>がいかんけんさ</rt></ruby>の<ruby>対象<rt>たいしょう</rt></ruby>となるロール時のきずや<ruby>欠陥<rt>けっかん</rt></ruby>として、ラミネーション、スケールきず、かききずなどがある。", textMY: "Roll  についてlamination とscale mark、 は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 取合部 (Joint Parts)",
      reasonMY: "အဆက်နေရာစစ်ဆေးမှု (取合部検査) ဆိုはမှာ စက်ရုံについてဆက်မည့်နေရာများသာမが 'အလုပ်ခွင်' (工事現場) についてဆက်သွယ်မည့် နေရာအားလုံးをပါ စစ်ဆေးရမည်ဖြစ်は။ 'စက်ရုံについてဆက်မည့်နေရာသာ' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Joint စစ်လျှင် စက်ရုံရော、အလုပ်ခွင်ရော အကုန်検査しなければならない။"
    }
  },
  {
    id: "3-17",
    questionJP: "<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အတိုင်းအတာ တိကျမှုのခွင့်ပြုလွဲချော်မှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>は、それを<ruby>超<rt>こ</rt></ruby>える<ruby>誤差<rt>ごさ</rt></ruby>は<ruby>原則<rt>げんそく</rt></ruby>として<ruby>許<rt>ゆる</rt></ruby>されないとした<ruby>許容差<rt>きょようさ</rt></ruby>である。", textMY: "Limit Tolerance は    は" },
      { id: 2, textJP: "(2) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は、<ruby>全製品<rt>ぜんせいひん</rt></ruby>の 95% <ruby>以上<rt>いじょう</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>が<ruby>満足<rt>まんぞく</rt></ruby>するような<ruby>製作・施工上<rt>せいさく・せこうじょう</rt></ruby>の<ruby>目標値<rt>もくひょうち</rt></ruby>である。", textMY: "Management Tolerance は  %   は" },
      { id: 3, textJP: "(3) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は、<ruby>製作目標<rt>せいさくもくひょう</rt></ruby>としての<ruby>品質水準<rt>ひんしつすいじゅん</rt></ruby>であり、<ruby>個々<rt>ここ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>の<ruby>合否判定<rt>ごうひはんてい</rt></ruby>のための<ruby>基準値<rt>きじゅんち</rt></ruby>ではない。", textMY: "Management Tolerance は/ (Pass/Fail)   " },
      { id: 4, textJP: "(4) <ruby>全製品中<rt>ぜんせいひんちゅう</rt></ruby>に<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>製品<rt>せいひん</rt></ruby>が<ruby>多数存在<rt>たすうそんざい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>製品<rt>せいひん</rt></ruby>が<ruby>製作<rt>せいさく</rt></ruby>されている<ruby>可能性<rt>かのうせい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなる。", textMY: "Management Tolerance   場合はLimit Tolerance を   は" },
      { id: 5, textJP: "(5) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>の<ruby>数値<rt>すうち</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさは、 95% の <ruby>製品<rt>せいひん</rt></ruby>が これを<ruby>満足<rt>まんぞく</rt></ruby>するように<ruby>製作<rt>せいさく</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、ほとんどの<ruby>製品<rt>せいひん</rt></ruby>が<ruby>限界許容差内<rt>げんかいきょようさない</rt></ruby>に<ruby>収まる<rt>おさまる</rt></ruby>ように<ruby>決められている<rt>きめられている</rt></ruby>。", textMY: "Management Tolerance を   Limit Tolerance について  は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差 (Limit Tolerance)",
      reasonMY: "Limit Tolerance (限界許容差) はလုံးဝ(လုံးဝ) ကျော်လွန်ခွင့်မရှိသော အတိအကျသတ်မှတ်ချက်ဖြစ်は။ ၎င်းをကျော်လွန်場合はအလိုအလျောက် Defect (အပယ်ခံ) ဖြစ်သွားမည်ဖြစ်は။ ထို့ကြောင့် ခြွင်းချက်အနေでခွင့်ပြုနိုင်သေးသည့်သဘော သက်ရောက်သော '原則として許されない (မူအရ ခွင့်မပြုပါ)' ဟူသော အသုံးအနှုန်းでဖော်ပြခြင်းမှာ မှားယွင်းပါは။ ပြတ်ပြတ်သားသား '許されない (ခွင့်မပြုပါ)' ဟုသာ သတ်မှတ်ရမည်ဖြစ်は။",
      memoryTipMY: "限界許容差 (Limit Tolerance) について'原則として (မူအရ)' ဟူသော ခြွင်းချက်မရှိပါ။ လုံးဝ ကျော်ခွင့်မရှိပါ။"
    }
  },
  {
    id: "3-18",
    questionJP: "<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အတိုင်းအတာ တိကျမှုのခွင့်ပြုလွဲချော်မှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えた<ruby>製品<rt>せいひん</rt></ruby>は<ruby>不良品<rt>ふりょうひん</rt></ruby>となるため、<ruby>再製作・再施工<rt>さいせいさく・さいせこう</rt></ruby>することを<ruby>原則<rt>げんそく</rt></ruby>とする。", textMY: "Limit Tolerance   を  (Defect) で は" },
      { id: 2, textJP: "(2) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えた<ruby>不良品<rt>ふりょうひん</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>は、<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>の<ruby>重要度<rt>じゅうようど</rt></ruby>、<ruby>影響度<rt>えいきょうど</rt></ruby>などを<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>決定<rt>けってい</rt></ruby>しなければならない。", textMY: "を ををと  " },
      { id: 3, textJP: "(3) 「せい」、「<ruby>幅<rt>はば</rt></ruby>」で<ruby>マイナス側<rt>まいなすがわ</rt></ruby>の<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えた<ruby>場合<rt>ばあい</rt></ruby>などは、<ruby>断面性能<rt>だんめんせいのう</rt></ruby>が <ruby>低下<rt>ていか</rt></ruby>する ため、<ruby>部品交換<rt>ぶひんこうかん</rt></ruby>による<ruby>修正<rt>しゅうせい</rt></ruby>や<ruby>再製作<rt>さいせいさく</rt></ruby>が必要になる。", textMY: "    場合は (Section property) で   は" },
      { id: 4, textJP: "(4) 「<ruby>柱の長さ<rt>はしらのながさ</rt></ruby>」、「<ruby>梁の長さ<rt>はりのながさ</rt></ruby>」などでの<ruby>不良品<rt>ふりょうひん</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>再製作<rt>さいせいさく</rt></ruby>となるが、<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>補修<rt>ほしゅう</rt></ruby>により<ruby>対処<rt>たいしょ</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えられる。", textMY: "を場合は   (Repair) で は" },
      { id: 5, textJP: "(5) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には、「<ruby>突合せ継手の食違い<rt>つきあわせつぎてのくいちがい</rt></ruby>」のように、<ruby>継手性能上<rt>つぎてせいのうじょう</rt></ruby>からの<ruby>規定<rt>きてい</rt></ruby>ではなく、<ruby>主<rt>おも</rt></ruby>に<ruby>製作管理上<rt>せいさくかんりじょう</rt></ruby>の<ruby>必要性<rt>ひつようせい</rt></ruby>から<ruby>規定<rt>きてい</rt></ruby>されたものもある。", textMY: "Limit Tolerance   と    は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 許容差の根拠 (Base of Tolerance)",
      reasonMY: "ဂဟေအဆက်များ လွဲချော်ခြင်း (食違い) はတည်ဆောက်ပုံのခိုင်မာမှု (Structural Strength) အပေါ် တိုက်ရိုက် သက်ရောက်မှု ရှိは။ ထို့ကြောင့် 'ထုတ်လုပ်မှု အဆင်ပြေစေရန်အတွက်သာ' ဆိုသော အချက်မှာ မှားယွင်းは။ (PDF စာမျက်နှာ ၁၀ ပါ Scribble '継手性能上からの規定' をကြည့်ပါ)။",
      memoryTipMY: "အဆက်အစပ်လွဲခြင်း (Offset) はခိုင်မာမှုをထိခိုက်စေသောကြောင့် ဖွဲ့စည်းပုံအရ အရေးကြီးは။"
    }
  },
  {
    id: "3-19",
    questionJP: "<ruby>付属金物類検査<rt>ふぞくかなものるいけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆက်စပ်ပစ္စည်းများ (Miscellaneous/Secondary Steel) စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>仮設関連付属金物<rt>かせつかんれんふぞくかなもの</rt></ruby>には、タラップ、<ruby>親綱用ピース<rt>おやづなようぴーす</rt></ruby>、<ruby>安全ネット取付けピース<rt>あんぜんねっととりつけぴーす</rt></ruby>、<ruby>吊りピース<rt>つりぴーす</rt></ruby>などがある。", textMY: "について、、と (Lifting piece)  は" },
      { id: 2, textJP: "(2) <ruby>設備関連付属金物<rt>せつびかんれんふぞくかなもの</rt></ruby>には、ダクトスリーブ、エレベーターおよびエスカレーター<ruby>用ファスナー<rt>ようふぁすなー</rt></ruby>などがある。", textMY: "について (Duct sleeve) と は" },
      { id: 3, textJP: "(3) <ruby>付属金物<rt>ふぞくかなもの</rt></ruby>は、<ruby>最近<rt>さいきん</rt></ruby>では、<ruby>工場<rt>こうじょう</rt></ruby>で<ruby>製作施工<rt>せいさくせこう</rt></ruby>されるのが<ruby>一般的<rt>いっぱんてき</rt></ruby>となった。", textMY: "が をについて    は" },
      { id: 4, textJP: "(4) <ruby>付属金物類取付け<rt>ふぞくかなものるいとりつけ</rt></ruby>の<ruby>際<rt>さい</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>は、<ruby>本体鉄骨<rt>ほんたいてっこつ</rt></ruby>の品質に<ruby>与える影響<rt>あたえるえいきょう</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>して<ruby>製作<rt>せいさく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: " についてのを " },
      { id: 5, textJP: "(5) <ruby>付属金物類<rt>ふぞくかなものるい</rt></ruby>の<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、<ruby>入熱量<rt>にゅうねつりょう</rt></ruby>が <ruby>過大<rt>かだい</rt></ruby>になりがちなので<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: " について (High heat input) で" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ショートビード (Short Bead)",
      reasonMY: "ဆက်စပ်ပစ္စည်း (Miscellaneous steel) များမှာ သေးငယ်သောကြောင့် ဂဟေဆက်အရှည် တိုတောင်းလေ့ရှိは။ ထိုအခါ 'အပူလွန်ကဲခြင်း' ထက် 'အအေးမြန်ခြင်း' ကြောင့် ဖြစ်သော အက်ကွဲခြင်း (Short Bead Problem) が ပို၍ အရေးကြီးは။ (PDF စာမျက်နှာ ၁၁ ပါ Scribble: 'ショートビード' をသတိပြုပါ)။",
      memoryTipMY: "သေးငယ်သော အစိတ်အပိုင်းများについて'Short Bead' (အအေးမြန်ခြင်း) をသတိထားပါ။"
    }
  },
  {
    id: "3-20",
    questionJP: "<ruby>高力六角ボルト<rt>こうりょくろっかくぼると</rt></ruby>をナット<ruby>回転法<rt>かいてんほう</rt></ruby>で<ruby>締付ける後<rt>しめつけるあと</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "HS Bolt をNut Rotation Method でတပ်ဆင်ပြီးနောက် စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>検査<rt>けんさ</rt></ruby>は、<ruby>一次締め後<rt>いちじしめあと</rt></ruby>のマークを<ruby>目視<rt>もくし</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>う。<ruby>検査項目<rt>けんさこう目</rt></ruby>は、<ruby>共回り<rt>ともまわり</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>、ナット<ruby>回転量<rt>かいてんりょう</rt></ruby>、およびボルトの<ruby>余長<rt>よちょう</rt></ruby>とする。", textMY: "をを  、 とを" },
      { id: 2, textJP: "(2) <ruby>共回り<rt>ともまわり</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>共回り<rt>ともまわり</rt></ruby>が <ruby>発生<rt>はっせい</rt></ruby>しているボルトは、<ruby>所定<rt>しょてい</rt></ruby>の<ruby>回転量<rt>かいてんりょう</rt></ruby>まで<ruby>追締め<rt>おいしめ</rt></ruby>して<ruby>処置<rt>しょち</rt></ruby>する。", textMY: " (Co-rotation) 場合はは  (Retighten)  は" },
      { id: 3, textJP: "(3) ナット<ruby>回転量<rt>かいてんりょう</rt></ruby>を<ruby>測定<rt>そくてい</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>する。120°±30° (M12 の<ruby>場合<rt>ばあい</rt></ruby>: 60°~90°) の<ruby>範囲内<rt>はんいない</rt></ruby>にあるものを<ruby>適合<rt>てきごう</rt></ruby>とする。", textMY: "を (M12     について は)" },
      { id: 4, textJP: "(4) <ruby>締め忘れ<rt>しめわすれ</rt></ruby>ているか、ナット<ruby>回転量<rt>かいてんりょう</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>しているボルトは、<ruby>所定<rt>しょてい</rt></ruby>の<ruby>回転量<rt>かいてんりょう</rt></ruby>まで<ruby>追締め<rt>おいしめ</rt></ruby>して<ruby>処置<rt>しょち</rt></ruby>する。", textMY: "  場合はは は" },
      { id: 5, textJP: "(5) ボルトの<ruby>余長<rt>よちょう</rt></ruby>は、ナット<ruby>面<rt>めん</rt></ruby>から<ruby>突<rt>つ</rt></ruby>き<ruby>出<rt>で</rt></ruby>た<ruby>長さ<rt>ながさ</rt></ruby>が、ねじ 1 <ruby>山<rt>やま</rt></ruby>~6 <ruby>山<rt>やま</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>にあるものを<ruby>適合<rt>てきごう</rt></ruby>とする。", textMY: "      について " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 共回りの処置 (Co-rotation)",
      reasonMY: "အတူလည်ခြင်း (共回り) ဖြစ်ပေါ်場合はထို Bolt をပြန်ကျပ်ရုံでမရဘဲ အသစ်လဲလှယ်ရမည် (取り替える)။ ၎င်းはတင်းအား မမှန်ကန်ကြောင်း ပြသနေခြင်း ဖြစ်は။",
      memoryTipMY: "အတူလည်ရင် (共回り) အသစ်လဲရမည်။"
    }
  },
  {
    id: "3-21",
    questionJP: "「JASS 6」および「<ruby>鉄骨工事技術指針・工場製作編<rt>てっこつこうじぎじゅつししん・こうじょうせいさくへん</rt></ruby>」に<ruby>基づく寸法精度<rt>もとづくすんぽうせいど</rt></ruby>の<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ အတိုင်းအတာ တိကျမှုのလက်ခံစစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>書類検査 1<rt>しょるいけんさいち</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>が <ruby>全数<rt>ぜんすう</rt></ruby>ある<ruby>場合<rt>ばあい</rt></ruby>にのみ<ruby>適用<rt>てきよう</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>であり、<ruby>個々<rt>ここ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>が<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えていないか<ruby>確認<rt>かくにん</rt></ruby>することができる。", textMY: "Document Inspection 1 はについて %  は" },
      { id: 2, textJP: "(2) <ruby>書類検査 2<rt>しょるいけんさに</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>が <ruby>部分的<rt>ぶぶんてき</rt></ruby>にしかない<ruby>場合<rt>ばあい</rt></ruby>にも<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Document Inspection 2 は は" },
      { id: 3, textJP: "(3) <ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>であり、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>にかかわらず<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Object Inspection 1 はを  は" },
      { id: 4, textJP: "(4) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものではなく、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Object Inspection 2 はについてのをは" },
      { id: 5, textJP: "(5) <ruby>対物検査 3<rt>たいぶつけんささん</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものではなく、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Object Inspection 3 は についてのを は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査 1 (Object Inspection 1)",
      reasonMY: "JASS 6 အရ、对物検査 1 (Object Inspection 1) は'စက်ရုံについてး စစ်ဆေးမှုမှတ်တမ်း မရှိသောအခါ' (社内検査記録が無い場合) သာ အသုံးပြုရသည့် နည်းလမ်းဖြစ်は။ မှတ်တမ်း ရှိはဖြစ်စေ、မရှိはဖြစ်စေ အသုံးပြုနိုင်はဆိုခြင်းမှာ မဟုတ်ပါ။",
      memoryTipMY: "Inspection 1 = မှတ်တမ်းမရှိလျှင် (No Record) သုံးは။"
    }
  },
  {
    id: "3-22",
    questionJP: "「JASS 6」および「<ruby>鉄骨工事技術指針<rt>てっこつこうじぎじゅつししん</rt></ruby>」に<ruby>基づく寸法精度<rt>もとづくすんぽうせいど</rt></ruby>の<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ အတိုင်းအတာ တိကျမှုのလက်ခံစစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>書類検査 1<rt>しょるいけんさいち</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>が <ruby>全数<rt>ぜんすう</rt></ruby>ある<ruby>場合<rt>ばあい</rt></ruby>にのみ<ruby>適用<rt>てきよう</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Document Inspection 1 はについて %  は" },
      { id: 2, textJP: "(2) 「JASS 6」では、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>柱の長さ、梁の長さ<rt>はしらのながさ、はりのながさ</rt></ruby>などの 7 <ruby>項目<rt>こうもく</rt></ruby>について、<ruby>社内検査<rt>しゃないけんさ</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>し<ruby>全数記録<rt>ぜんすうきろく</rt></ruby>を<ruby>残す<rt>のこす</rt></ruby>こととしている。", textMY: "JASS 6  、     をについて%  " },
      { id: 3, textJP: "(3) <ruby>書類検査 2<rt>しょるいけんさに</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>が <ruby>部分的<rt>ぶぶんてき</rt></ruby>にしかない<ruby>場合<rt>ばあい</rt></ruby>にも<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Document Inspection 2 は は" },
      { id: 4, textJP: "(4) <ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>であり、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>が <ruby>全数<rt>ぜんすう</rt></ruby>ある<ruby>場合<rt>ばあい</rt></ruby>にのみ<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Object Inspection 1 をについて  (100%)  は" },
      { id: 5, textJP: "(5) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものではなく、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Object Inspection 2 はについてのをは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査 1",
      reasonMY: "PDF စာမျက်နှာ ၁၂ ပါ Scribble အရ、对物検査 1 は'စက်ရုံについてးမှတ်တမ်း မရှိသည့်အခါ' についてလည်း သုံးနိုင်သော နည်းလမ်းဖြစ်は။ '၁၀၀% ရှိမှသာ သုံးနိုင်は' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "Inspection 1 = Records မရှိလည်း လုပ်လို့ရတယ်။"
    }
  },
  {
    id: "3-23",
    questionJP: "JASS 6における<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ပစ္စည်းစစ်ဆေးမှု (Object Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>製品<rt>せいひん</rt></ruby>の<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものであり、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>にかかわらず<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Inspection 1 を、 は" },
      { id: 2, textJP: "(2) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することによって<ruby>間接的<rt>かんせつてき</rt></ruby>に<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Inspection 2 はについてのをは" },
      { id: 3, textJP: "(3) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>抜き取った 5 個<rt>ぬきとったごこ</rt></ruby>のサンプルと<ruby>対応<rt>たいおう</rt></ruby>する<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>を<ruby>照合<rt>しょうごう</rt></ruby>し、<ruby>通常<rt>つうじょう</rt></ruby>の<ruby>範囲内<rt>はんいない</rt></ruby>であれば<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "Inspection 2 について  を についてとは" },
      { id: 4, textJP: "(4) <ruby>対物検査 1, 2<rt>たいぶつけんさいちに</rt></ruby>では、<ruby>合格ロット<rt>ごうかくろっと</rt></ruby>はそのまま<ruby>受入れ<rt>うけいれ</rt></ruby>、<ruby>不合格ロット<rt>ふごうかくろっと</rt></ruby>は<ruby>残り<rt>のこり</rt></ruby>を<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>する。", textMY: " Lot を   " },
      { id: 5, textJP: "(5) <ruby>対物検査 1, 2<rt>たいぶつけんさいちに</rt></ruby>では、1 <ruby>検査ロット<rt>けんさろっと</rt></ruby>は 300 <ruby>個以下<rt>こいか</rt></ruby>で<ruby>構成<rt>こうせい</rt></ruby>される。", textMY: " Lot     は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不合格時の処置 (Action when fail)",
      reasonMY: "ပစ္စည်းစစ်ဆေးမှု (対物検査) についてမအောင်မြင်場合は(不合格) ကျန်ရှိသော အစိတ်အပိုင်း 'အားလုံး' (全数検査 - 100%) をစစ်ဆေးရမည် ဖြစ်は။ 'နမူနာကောက်検査しなければならない' ဆိုခြင်းမှာ မှားယွင်းは။ (PDF စာမျက်နှာ ၁၃ ပါ Scribble: '全数検査' をကြည့်ပါ)။",
      memoryTipMY: "ရှုံးရင် (Fail) -> အကုန်စစ် (100%)။"
    }
  },
  {
    id: "3-24",
    questionJP: "<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>と<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်をဖြေရှင်းခြင်းとထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>にあたり、<ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>やバラツキの<ruby>大<rt>おお</rt></ruby>きさなどの<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>調査<rt>ちょうさ</rt></ruby>し、<ruby>正確<rt>せいかく</rt></ruby>にとらえることが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "のとを   は" },
      { id: 2, textJP: "(2) <ruby>不具合<rt>ふぐあい</rt></ruby>が どの<ruby>工程<rt>こうてい</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しているか、その<ruby>原因<rt>げんいん</rt></ruby>を <ruby>推定<rt>すいてい</rt></ruby>し、<ruby>工程内<rt>こうていない</rt></ruby>にも<ruby>問題<rt>もんだい</rt></ruby>があるのかを <ruby>判断<rt>はんだん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "について を を" },
      { id: 3, textJP: "(3) <ruby>工程内<rt>こうていない</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>製作手順・管理項目<rt>せいさくてじゅん・かんりこうもく</rt></ruby>などに<ruby>対<rt>たい</rt></ruby>する<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>見直し<rt>みなおし</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>になる。", textMY: "について場合はとを " },
      { id: 4, textJP: "(4) <ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>にかかわる<ruby>者<rt>もの</rt></ruby>が、<ruby>自ら<rt>みずから</rt></ruby>の<ruby>目<rt>め</rt></ruby>で<ruby>現物<rt>げんぶつ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>すると、<ruby>先入観<rt>せんにゅうかん</rt></ruby>にとらわれ、<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>処置<rt>しょち</rt></ruby>が行えなくなるので、<ruby>現物確認者<rt>げんぶつかくにんしゃ</rt></ruby>と<ruby>処置方法決定者<rt>しょちほうほうけっていしゃ</rt></ruby>を<ruby>同一<rt>どういつ</rt></ruby>としない。", textMY: "を を場合はでと   " },
      { id: 5, textJP: "(5) <ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>累積<rt>るいせき</rt></ruby>し<ruby>構造全体<rt>こうぞうぜんたい</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及ぼす場合<rt>およぼすばあい</rt></ruby>、<ruby>建物形状<rt>たてものけいじょう</rt></ruby>やスパン<ruby>数<rt>すう</rt></ruby>などを<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>処置方法<rt>しょちほうほう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: " 場合はのを  を" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 現物確認 (On-site verification)",
      reasonMY: "ချို့ယွင်းချက်をမှန်ကန်စွာ ဖြေရှင်းနိုင်ရန်အတွက် ဆုံးဖြတ်ချက်ချမည့်သူは'မိမိမျက်စိでをယ်တိုင်' ပစ္စည်းをသေချာစွာ ကြည့်ရှုစစ်ဆေးရန် အလွန်အရေးကြီးは။ ထိုသို့မလုပ်場合はမှန်ကန်သော ဆုံးဖြတ်ချက် မချနိုင်ပါ။ (PDF စာမျက်နှာ ၁၃ ပါ Scribble: '先入観...現物確認する者と処置方法を決定する者を同一としない' ဆိုはမှာ မှားယွင်းသော ပေါ်လစီဖြစ်は)။",
      memoryTipMY: "အမှားတွေ့ရင် ဆုံးဖြတ်မယ့်သူが をယ်တိုင် (Self) သွားကြည့်ရမယ်။"
    }
  },
  {
    id: "3-25",
    questionJP: "<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>と<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်をဖြေရှင်းခြင်းとထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>を <ruby>調査<rt>ちょうさ</rt></ruby>し、<ruby>定性的・定量的<rt>ていせいてき・ていりょうてき</rt></ruby>に<ruby>正<rt>ただ</rt></ruby>しくとらえることが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "をと   は" },
      { id: 2, textJP: "(2) <ruby>不具合<rt>ふぐあい</rt></ruby>が どの<ruby>工程<rt>こうてい</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しているか、その<ruby>原因<rt>げんいん</rt></ruby>を <ruby>推定<rt>すいてい</rt></ruby>し、<ruby>工程内<rt>こうていない</rt></ruby>にも<ruby>問題<rt>もんだい</rt></ruby>があるのかを <ruby>判断<rt>はんだん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "を を" },
      { id: 3, textJP: "(3) <ruby>工程内<rt>こうていない</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>製作手順・管理項目<rt>せいさくてじゅん・かんりこうもく</rt></ruby>などに<ruby>対<rt>たい</rt></ruby>する<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>見直し<rt>みなおし</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>になる。", textMY: "について場合はを" },
      { id: 4, textJP: "(4) <ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>にかかわる<ruby>者<rt>もの</rt></ruby>が、<ruby>自ら<rt>みずから</rt></ruby>の<ruby>目<rt>め</rt></ruby>で<ruby>現物<rt>げんぶつ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することは、その<ruby>後<rt>あと</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>を <ruby>適切<rt>てきせつ</rt></ruby>なものとするために<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "をは  は" },
      { id: 5, textJP: "(5) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>は、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>形状<rt>けいじょう</rt></ruby>や<ruby>構造的な特徴<rt>こうぞうてきなとくちょう</rt></ruby>に<ruby>関わらず<rt>かかわらず</rt></ruby>、<ruby>常に一定<rt>つねにいってい</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>定めておく<rt>さだめておく</rt></ruby>。", textMY: "をと   " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 処置の個別性 (Individual Treatment)",
      reasonMY: "ချို့ယွင်းချက်များをဖြေရှင်းရာについてအဆောက်အဦのပုံသဏ္ဍာန် (Shape) とတည်ဆောက်ပုံ ဝိသေသလက္ခဏာများ (Structural characteristics) အပေါ် မူတည်၍ တစ်ခုချင်းစီအတွက် အသင့်တော်ဆုံးနည်းလမ်းをရွေးချယ်ရမည်။ 'ပုံသေနည်းလမ်းတစ်ခုတည်း' ဆိုခြင်းမှာ မှားယွင်းは။ (PDF စာမျက်နှာ ၁၄ ပါ Scribble '常に一定の方法' をကြည့်ပါ)။",
      memoryTipMY: "အခြေအနေပေါ် မူတည်ပြီး အကောင်းဆုံးနည်းလမ်းをရွေးချယ်ရမည်။"
    }
  },
  {
    id: "3-26",
    questionJP: "<ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>再発防止<rt>さいはつぼうし</rt></ruby>と<ruby>製作管理技術者<rt>せいさくかんりぎじゅつしゃ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်မဖြစ်အောင် ကာကွယ်ခြင်းとနည်းပညာရှင်のတာဝန်ဆိုင်ရာ မသင့်လျော်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>再発防止<rt>さいはつぼうし</rt></ruby>とは、<ruby>動線<rt>どうせん</rt></ruby>の<ruby>改善<rt>かいぜん</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない。", textMY: " は  (Flow) を " },
      { id: 2, textJP: "(2) <ruby>製作管理技術者<rt>せいさくかんりぎじゅつしゃ</rt></ruby>は、<ruby>各工程<rt>かくこうてい</rt></ruby>から<ruby>上げられた不具合情報<rt>あげられたふぐあいじょうほう</rt></ruby>をもとに、<ruby>発生原因<rt>はっせいげんいん</rt></ruby>を<ruby>追求<rt>ついきゅう</rt></ruby>し<ruby>処置方法<rt>しょちほうほう</rt></ruby>を <ruby>検討<rt>けんとう</rt></ruby>する。", textMY: "は  を " },
      { id: 3, textJP: "(3) <ruby>製作管理技術者<rt>せいさくかんりぎじゅつしゃ</rt></ruby>は、<ruby>現品そのもの<rt>げんぴんそのもの</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>と、<ruby>改善<rt>かいぜん</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>となった<ruby>工程の手順<rt>こうていてじゅん</rt></ruby>などの<ruby>情報<rt>じょうほう</rt></ruby>を、<ruby>迅速<rt>じんそく</rt></ruby>に<ruby>周知徹底<rt>しゅうちてってい</rt></ruby>する。", textMY: "を  " },
      { id: 4, textJP: "(4) <ruby>不具合<rt>ふぐあい</rt></ruby>により<ruby>設計品質<rt>せっけいひんしつ</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できない<ruby>可能性<rt>かのうせい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>監理者<rt>かんりしゃ</rt></ruby>や<ruby>施工者<rt>せこうしゃ</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>し<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: " 場合はを " },
      { id: 5, textJP: "(5) <ruby>不具合<rt>ふぐあい</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>するには、<ruby>技術の教育<rt>ぎじゅつきょういく</rt></ruby>と<ruby>同時に<rt>どうじに</rt></ruby>、<ruby>製作システム<rt>せいさくしすてむ</rt></ruby>の<ruby>理解<rt>りかい</rt></ruby>やモラルの<ruby>向上<rt>こうじょう</rt></ruby>などのソフト<ruby>教育<rt>きょういく</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "をと  は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 4M の改善",
      reasonMY: "ထပ်မဖြစ်အောင် ကာကွယ်ခြင်း (再発防止) ဆိုはမှာ 4M (Man, Machine, Material, Method) အားလုံးをပြန်လည်သုံးသပ် ပြုပြင်ခြင်းဖြစ်は။ 'လမ်းကြောင်းပြင်ရုံ' ဆိုခြင်းမှာ မလုံလောက်ပါ။ (PDF စာမျက်နှာ ၁၄ ပါ Scribble '4M' をကြည့်ပါ)။",
      memoryTipMY: "4M အားလုံးをပြုပြင်မှသာ ပြဿနာ ထပ်မဖြစ်မှာပါ။"
    }
  },
  {
    id: "3-27",
    questionJP: "<ruby>製品検査<rt>せいひんけんさ</rt></ruby>で<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>されたときの<ruby>処置<rt>しょち</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်ကုန်စစ်ဆေးမှုについてချို့ယွင်းချက်တွေ့ရှိ場合はဖြေရှင်းပုံとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>で<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>されたときは、あらかじめ<ruby>定<rt>さだ</rt></ruby>められたフローなどに<ruby>沿<rt>そ</rt></ruby>って<ruby>速<rt>すみ</rt></ruby>やかに<ruby>対処<rt>たいしょ</rt></ruby>する。", textMY: "についてについて場合は   " },
      { id: 2, textJP: "(2) <ruby>処置<rt>しょち</rt></ruby>のルートは、<ruby>現品そのもの<rt>げんぴんそのもの</rt></ruby>の<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>に関する<ruby>経路<rt>けいろ</rt></ruby>と、<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>経路<rt>けいろ</rt></ruby>の2つに<ruby>分<rt>わ</rt></ruby>けて<ruby>考<rt>かんが</rt></ruby>えることができる。", textMY: "をと     は" },
      { id: 3, textJP: "(3) <ruby>不具合の要因<rt>ふぐあいのよういん</rt></ruby>としては、<ruby>材料・工法<rt>ざいりょう・こうほう</rt></ruby>に<ruby>起因<rt>きいん</rt></ruby>するものがほとんどなので、<ruby>再発防止<rt>さいはつぼうし</rt></ruby>のためには、<ruby>材料検査<rt>ざいりょうけんさ</rt></ruby>の<ruby>徹底<rt>てってい</rt></ruby>と<ruby>工法の検証<rt>こうほうのけんしょう</rt></ruby>に<ruby>重点<rt>じゅうてん</rt></ruby>をおくことが<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "はと (Material/Method)  で とを  " },
      { id: 4, textJP: "(4) あらかじめ<ruby>処置要領<rt>しょちようりょう</rt></ruby>が<ruby>定<rt>さだ</rt></ruby>められていない<ruby>不具合<rt>ふぐあい</rt></ruby>については、<ruby>設計品質<rt>せっけいひんしつ</rt></ruby>に<ruby>与える影響<rt>あたえるえいきょう</rt></ruby>などを<ruby>総合的<rt>そうごうてき</rt></ruby>に<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>監理者<rt>かんりしゃ</rt></ruby>と<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: "  と" },
      { id: 5, textJP: "(5) <ruby>受入検査<rt>うけいれけんさ</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>で<ruby>重大な不具合<rt>じゅうだいなふぐあい</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>された<ruby>場合<rt>ばあい</rt></ruby>、<ruby>工事工程<rt>こうじこうてい</rt></ruby>に<ruby>重大な影響<rt>じゅうだいなえいきょう</rt></ruby>を<ruby>及ぼす<rt>およぼす</rt></ruby>おそれがあるので、<ruby>初期の段階<rt>しょきのだんかい</rt></ruby>で<ruby>発見<rt>はっけん</rt></ruby>する。", textMY: "をについて は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不具合の 4M 要因",
      reasonMY: "ချို့ယွင်းချက်ဖြစ်ရသည့် အကြောင်းရင်းများについてပစ္စည်းとစနစ် (Material/Method) အပြင် လူ (Man) とစက်ကိရိယာ (Machine) တို့လည်း ပါဝင်は။ ဤ 4M အားလုံးをမစီမံဘဲ 'ပစ္စည်းとစနစ်သာ' ဆိုခြင်းမှာ မှားယွင်းは။ (PDF စာမျက်နှာ ၁၅ ပါ Scribble '手腕' (Skill/Manpower) をကြည့်ပါ)။",
      memoryTipMY: "ချို့ယွင်းချက် အကြောင်းရင်းဟာ လူ、စက်、ပစ္စည်း、စနစ် အားလုံးနဲ့ ဆိုင်ပါတယ်။"
    }
  },
  {
    id: "3-28",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာのအရည်အသွေးစီမံမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の品質に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及ぼす要因<rt>およぼすよういん</rt></ruby>は、<ruby>鋼材質、溶接材料、溶接条件<rt>こうざいしつ、ようせつざいりょう、ようせつじょうけん</rt></ruby>などがある。", textMY: "を、とが は" },
      { id: 2, textJP: "(2) <ruby>完全溶込溶接部<rt>かんぜんようこみようせつぶ</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は、<ruby>母材<rt>ぼざい</rt></ruby>の JIS <ruby>規格値以上<rt>きかくちいじょう</rt></ruby>が <ruby>要求<rt>ようきゅう</rt></ruby>される。", textMY: "Full Penetration Weld の base metal の  は" },
      { id: 3, textJP: "(3) <ruby>柱・梁接合部<rt>ちゅう・はりせつごうぶ</rt></ruby>には、<ruby>強度<rt>きょうど</rt></ruby>および<ruby>靭性<rt>じんせい</rt></ruby>が <ruby>要求<rt>ようきゅう</rt></ruby>される。", textMY: "とについて (Strength) と (Toughness)  は" },
      { id: 4, textJP: "(4) <ruby>完全溶込溶接部<rt>かんぜんようこみようせつぶ</rt></ruby>の<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>は、<ruby>社内検査<rt>しゃないけんさ</rt></ruby>では<ruby>全数検査<rt>ぜんすうけんさ</rt></ruby>することが<ruby>多い<rt>おおい</rt></ruby>。", textMY: "についてをについてについて (100%) は" },
      { id: 5, textJP: "(5) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>の<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>の<ruby>許容限界<rt>きょようげんかい</rt></ruby>について、「JASS 6」では<ruby>明記<rt>めいき</rt></ruby>されている。", textMY: "JASS 6 についてFillet Weld のについて を は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 隅肉溶接の内部欠陥 (Fillet Weld)",
      reasonMY: "JASS 6 についてFillet Weld (隅肉溶接) のအについてးပိုင်းချို့ယွင်းချက် (Internal Defects) များအတွက် ခွင့်ပြုနိုင်သော စံနှုန်းをရှင်းလင်းစွာ ဖော်ပြထားခြင်း (明記されていない) မရှိပါ။ (PDF စာမျက်နှာ ၁၅ ပါ Scribble အရ '斜角探傷による方法が提案されている' - အဆိုပြုထားရုံသာ ရှိは)။",
      memoryTipMY: "JASS 6 についてFillet weld のအについてးပိုင်းစံနှုန်း မပါဝင်ပါ။"
    }
  },
  {
    id: "3-29",
    questionJP: "「JASS 6」における<ruby>溶接部<rt>ようせつぶ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ဂဟေဆက်နေရာとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接前<rt>ようせつまえ</rt></ruby>のチェック<ruby>項目<rt>こうもく</rt></ruby>は、<ruby>作業環境、溶接材料、使用器具、開先の形状や寸法<rt>さぎょうかんきょう、ようせつざいりょう、しようきぐ、かいさきのけいじょうやすんぽう</rt></ruby>などである。", textMY: " 、、 とgroove を" },
      { id: 2, textJP: "(2) <ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby>にエンドタブを<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける<ruby>場合<rt>ばあい</rt></ruby>には、エンドタブは<ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>け、<ruby>直接母材<rt>ちょくせつぼざい</rt></ruby>に<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>をしない。", textMY: "End Tab をBacking Metal について Base Metal について  " },
      { id: 3, textJP: "(3) <ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby>の<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、<ruby>梁フランジ<rt>はりふらんじ</rt></ruby>の<ruby>両端<rt>りょうたん</rt></ruby>から 5mm <ruby>以内<rt>いない</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>には<ruby>行<rt>おこな</rt></ruby>わない。", textMY: "Beam flange の 5mm について  " },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>は<ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>および<ruby>精度<rt>せいど</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>目視検査<rt>もくしけんさ</rt></ruby>とし、<ruby>検査箇所数<rt>けんさかしょすう</rt></ruby>の 10% を<ruby>適正<rt>てきせい</rt></ruby>な<ruby>器具<rt>きぐ</rt></ruby>で<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "について%  を で" },
      { id: 5, textJP: "(5) <ruby>スタッド溶接<rt>すたっどようせつ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>は、<ruby>溶接部<rt>ようせつぶ</rt></ruby>のすべてを<ruby>対象<rt>たいしょう</rt></ruby>として、カラーがスタッド<ruby>全周<rt>ぜんしゅう</rt></ruby>にわたって<ruby>形成<rt>けいせい</rt></ruby>されていることを<ruby>目視<rt>もくし</rt></ruby>で<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Stud についてを で検査しなければならない" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 外観検査 (Visual Inspection)",
      reasonMY: "ဂဟေဆက်နေရာများのအပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual Inspection) をမူအရ 'အားလုံး' (全数検査 - 100%) လုပ်ဆောင်ရမည် ဖြစ်は။ (PDF စာမျက်နှာ ၁၆ ပါ Scribble '外観検査不適合' をကြည့်ပါ)။ ၁၀% သာ 検査しなければならないဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "အပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual) は၁၀၀% (အားလုံး) 検査しなければならない။"
    }
  },
  {
    id: "3-30",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာのအရည်အသွေးစီမံမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及ぼす要因<rt>およぼすよういん</rt></ruby>を <ruby>適切<rt>てきせつ</rt></ruby>に<ruby>組み合わせる<rt>くみあわせる</rt></ruby>ことで品質を<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "を でを" },
      { id: 2, textJP: "(2) <ruby>大地震時<rt>だいじしんじ</rt></ruby>に<ruby>溶接部<rt>ようせつぶ</rt></ruby>が<ruby>破断<rt>はだん</rt></ruby>しないことが<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "について  は" },
      { id: 3, textJP: "(3) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>は <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>が <ruby>母材規格値<rt>ぼざいきかくち</rt></ruby>の 90% <ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "Fillet weld のはbase metal の% と " },
      { id: 4, textJP: "(4) <ruby>完全溶込溶接<rt>かんぜんようこみようせつ</rt></ruby>の <ruby>欠陥率<rt>けっかんりつ</rt></ruby>は AOQL で<ruby>決められている<rt>きめられている</rt></ruby>。", textMY: "Full penetration weld のをAOQL では" },
      { id: 5, textJP: "(5) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>品質管理を証明<rt>ひんしつかんりをしょうめい</rt></ruby>するために<ruby>記録<rt>きろく</rt></ruby>をとる。", textMY: "はを " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 隅肉溶接の強度 (Fillet Weld Strength)",
      reasonMY: "Fillet Weld (隅肉溶接) についてအသုံးပြုသော ဂဟေသား (Weld metal) のခိုင်မာမှုはbase metal のစံနှုန်းထက် 'မနိမ့်စေရ' (100% 以上)။ ၉၀% ဆိုခြင်းမှာ မှားယွင်းは။ (PDF စာမျက်နှာ ၁၆ ပါ Scribble '母材より高い' をကြည့်ပါ)။",
      memoryTipMY: "ဂဟေသားはbase metal ထက် အမြဲတမ်း ပိုမိုခိုင်မာရမည်။"
    }
  }
];
