
import { StudyCardData } from '../types';

export const chapter3Part2Data: StudyCardData[] = [
  {
    id: "3-16",
    questionJP: "<ruby>製品検査<rt>せいひんけんさ</rt></ruby>とその<ruby>注意点<rt>ちゅういてん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်ကုန်စစ်ဆေးမှုနှင့် သတိပြုဖွယ်ရာများဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>取合部検査<rt>とりあいぶけんさ</rt></ruby>は、<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>および<ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>のうち<ruby>工場<rt>こうじょう</rt></ruby>で<ruby>接合<rt>せつごう</rt></ruby>される<ruby>部分<rt>ぶぶん</rt></ruby>について<ruby>行<rt>おこな</rt></ruby>う。", textMY: "အဆက်နေရာစစ်ဆေးမှု (Joint inspection) ကို စက်ရုံတွင် ဆက်သွယ်မည့် Bolt နှင့် ဂဟေနေရာများအတွက်သာ လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>取合部検査<rt>とりあいぶけんさ</rt></ruby>のうち<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>では、<ruby>孔<rt>あな</rt></ruby>の<ruby>心<rt>しん</rt></ruby>ずれ、はしあき・へりあき<ruby>寸法<rt>すんぽう</rt></ruby>、<ruby>摩擦面<rt>まさつめん</rt></ruby>の<ruby>処理状態<rt>しょりじょうたい</rt></ruby>について<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Bolt အဆက်များတွင် အပေါက်နေရာလွဲခြင်း၊ Edge distance နှင့် ပွတ်တိုက်မျက်နှာပြင် ပြင်ဆင်မှုတို့ကို စစ်ဆေးရမည်။" },
      { id: 3, textJP: "(3) <ruby>取合部検査<rt>とりあいぶけんさ</rt></ruby>のうち<ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>では、<ruby>溶接面<rt>ようせつめん</rt></ruby>の<ruby>開先形状・方向・溶接上<rt>かいさきけいじょう・ほうこう・ようせつじょう</rt></ruby>の<ruby>支障<rt>ししょう</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>について<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "ဂဟေအဆက်များတွင် ဂဟေမြောင်းပုံစံ၊ ဦးတည်ရာနှင့် အနှောင့်အယှက် ရှိမရှိတို့ကို စစ်ဆေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>外観検査<rt>がいかんけんさ</rt></ruby>は、<ruby>部材表面・切断面・高力ボルト接合面・溶接部<rt>ぶざいひょうめん・せつだんめん・こうりょくぼるとせつごうめん・ようせつぶ</rt></ruby>の<ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>およびスタッド<ruby>溶接部<rt>ようせつぶ</rt></ruby>について<ruby>行<rt>おこな</rt></ruby>う。", textMY: "အပြင်ပန်းစစ်ဆေးခြင်းတွင် မျက်နှာပြင်များ၊ ဖြတ်တောက်သည့်နေရာများနှင့် Stud ဂဟေသားရှိ ချို့ယွင်းချက်များကို စစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>外観検査<rt>がいかんけんさ</rt></ruby>の<ruby>対象<rt>たいしょう</rt></ruby>となるロール時のきずや<ruby>欠陥<rt>けっかん</rt></ruby>として、ラミネーション、スケールきず、かききずなどがある。", textMY: "Roll လုပ်စဉ်ဖြစ်သော ချို့ယွင်းချက်များတွင် lamination နှင့် scale mark၊ ခြစ်ရာများ ပါဝင်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 取合部 (Joint Parts)",
      reasonMY: "အဆက်နေရာစစ်ဆေးမှု (取合部検査) ဆိုသည်မှာ စက်ရုံတွင် ဆက်မည့်နေရာများသာမက 'အလုပ်ခွင်' (工事現場) တွင် ဆက်သွယ်မည့် နေရာအားလုံးကိုပါ စစ်ဆေးရမည်ဖြစ်သည်။ 'စက်ရုံတွင်ဆက်မည့်နေရာသာ' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Joint စစ်လျှင် စက်ရုံရော၊ အလုပ်ခွင်ရော အကုန်စစ်ရမည်။"
    }
  },
  {
    id: "3-17",
    questionJP: "<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အတိုင်းအတာ တိကျမှု၏ ခွင့်ပြုလွဲချော်မှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>は、それを<ruby>超<rt>こ</rt></ruby>える<ruby>誤差<rt>ごさ</rt></ruby>は<ruby>原則<rt>げんそく</rt></ruby>として<ruby>許<rt>ゆる</rt></ruby>されないとした<ruby>許容差<rt>きょようさ</rt></ruby>である。", textMY: "Limit Tolerance ဆိုသည်မှာ မူအရ လုံးဝကျော်လွန်၍ မရသော ဘောင်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は、<ruby>全製品<rt>ぜんせいひん</rt></ruby>の 95% <ruby>以上<rt>いじょう</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>が<ruby>満足<rt>まんぞく</rt></ruby>するような<ruby>製作・施工上<rt>せいさく・せこうじょう</rt></ruby>の<ruby>目標値<rt>もくひょうち</rt></ruby>である。", textMY: "Management Tolerance ဆိုသည်မှာ ထုတ်ကုန် ၉၅% ကျော် ပြည့်မီရမည့် ပန်းတိုင်တန်ဖိုးဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は、<ruby>製作目標<rt>せいさくもくひょう</rt></ruby>としての<ruby>品質水準<rt>ひんしつすいじゅん</rt></ruby>であり、<ruby>個々<rt>ここ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>の<ruby>合否判定<rt>ごうひはんてい</rt></ruby>のための<ruby>基準値<rt>きじゅんち</rt></ruby>ではない。", textMY: "Management Tolerance သည် အောင်/ရှုံး (Pass/Fail) ဆုံးဖြတ်ရန် စံနှုန်း မဟုတ်ပါ။" },
      { id: 4, textJP: "(4) <ruby>全製品中<rt>ぜんせいひんちゅう</rt></ruby>に<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>製品<rt>せいひん</rt></ruby>が<ruby>多数存在<rt>たすうそんざい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>製品<rt>せいひん</rt></ruby>が<ruby>製作<rt>せいさく</rt></ruby>されている<ruby>可能性<rt>かのうせい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなる。", textMY: "Management Tolerance ကျော်လွန်သော ထုတ်ကုန်များစွာ ရှိနေပါက Limit Tolerance ကို ကျော်လွန်သော ပစ္စည်းညံ့များ ထွက်လာနိုင်ခြေ များသည်။" },
      { id: 5, textJP: "(5) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>の<ruby>数値<rt>すうち</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさは、 95% ၏ <ruby>製品<rt>せいひん</rt></ruby>က これを<ruby>満足<rt>まんぞく</rt></ruby>するように<ruby>製作<rt>せいさく</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、ほとんどの<ruby>製品<rt>せいひん</rt></ruby>が<ruby>限界許容差内<rt>げんかいきょようさない</rt></ruby>に<ruby>収まる<rt>おさまる</rt></ruby>ように<ruby>決められている<rt>きめられている</rt></ruby>。", textMY: "Management Tolerance ကို ပြည့်မီအောင် ထုတ်လုပ်လျှင် ထုတ်ကုန်အားလုံးနီးပါး Limit Tolerance အတွင်း ရှိနေစေရန် သတ်မှတ်ထားသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 管理許容差の役割",
      reasonMY: "PDF စာမျက်နှာ ၁၀ ပါ Scribble အရ၊ Management Tolerance ကို ကျော်လွန်သော ပစ္စည်းများ များလာခြင်းသည် လုပ်ငန်းစဉ် မတည်ငြိမ်ခြင်းကို ပြဆိုသည်။ ထို့ကြောင့် ရွေးချယ်မှု (၄) သည် မှန်ကန်သော အခြေအနေပြချက် ဖြစ်သော်လည်း၊ မေးခွန်း၏ context အရ မသင့်လျော်ဆုံး မဟုတ်ပါ။ အမှန်မှာ အချက်အလက်များ အားလုံး မှန်ကန်နေတတ်သော်လည်း နည်းပညာအရ စီမံမှုအပိုင်းတွင် (၄) ကို ပိုမို အလေးထားရန် လိုအပ်သည်။",
      memoryTipMY: "Management Tolerance ကျော်တာများရင် Limit ကျော်တဲ့ ပစ္စည်းတွေ ထွက်လာတော့မယ်လို့ သတိထားပါ။"
    }
  },
  {
    id: "3-18",
    questionJP: "<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အတိုင်းအတာ တိကျမှု၏ ခွင့်ပြုလွဲချော်မှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えた<ruby>製品<rt>せいひん</rt></ruby>は<ruby>不良品<rt>ふりょうひん</rt></ruby>となるため、<ruby>再製作・再施工<rt>さいせいさく・さいせこう</rt></ruby>することを<ruby>原則<rt>げんそく</rt></ruby>とする。", textMY: "Limit Tolerance ကျော်လွန်သော ပစ္စည်းမှာ မကိုက်ညီသော ပစ္စည်း (Defect) ဖြစ်သဖြင့် ပြန်လုပ်ရန်မှာ မူဝါဒဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えた<ruby>不良品<rt>ふりょうひん</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>は、<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>の<ruby>重要度<rt>じゅうようど</rt></ruby>、<ruby>影響度<rt>えいきょうど</rt></ruby>などを<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>決定<rt>けってい</rt></ruby>しなければならない。", textMY: "မကိုက်ညီသော ပစ္စည်းများကို ဖြေရှင်းမည့်နည်းလမ်းကို အရေးကြီးမှုနှင့် သက်ရောက်မှုအပေါ် မူတည်ပြီး ဆုံးဖြတ်ရမည်။" },
      { id: 3, textJP: "(3) 「せい」、「<ruby>幅<rt>はば</rt></ruby>」で<ruby>マイナス側<rt>まいなすがわ</rt></ruby>の<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えた<ruby>場合<rt>ばあい</rt></ruby>などは、<ruby>断面性能<rt>だんめんせいのう</rt></ruby>က <ruby>低下<rt>ていか</rt></ruby>する ため、<ruby>部品交換<rt>ぶひんこうかん</rt></ruby>による<ruby>修正<rt>しゅうせい</rt></ruby>や<ruby>再製作<rt>さいせいさく</rt></ruby>が必要になる。", textMY: "အနံ သို့မဟုတ် အမြင့် အနှုတ်ဘက်သို့ လွဲချော်ပါက ခံနိုင်ရည် (Section property) ကျဆင်းသဖြင့် အစားထိုးလဲလှယ်ရန် သို့မဟုတ် ပြန်လုပ်ရန် လိုအပ်သည်။" },
      { id: 4, textJP: "(4) 「<ruby>柱の長さ<rt>はしらのながさ</rt></ruby>」、「<ruby>梁の長さ<rt>はりのながさ</rt></ruby>」などでの<ruby>不良品<rt>ふりょうひん</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>再製作<rt>さいせいさく</rt></ruby>となるが、<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>補修<rt>ほしゅう</rt></ruby>により<ruby>対処<rt>たいしょ</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えられる。", textMY: "အရှည်မကိုက်ညီပါက ပြန်လုပ်ရမည်ဖြစ်သော်လည်း သင့်လျော်သော ပြုပြင်ခြင်း (Repair) ဖြင့်လည်း ဖြေရှင်းနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には、「<ruby>突合せ継手の食違い<rt>つきあわせつぎてのくいちがい</rt></ruby>」のように、<ruby>継手性能上<rt>つぎてせいのうじょう</rt></ruby>からの<ruby>規定<rt>きてい</rt></ruby>ではなく、<ruby>主<rt>おも</rt></ruby>に<ruby>製作管理上<rt>せいさくかんりじょう</rt></ruby>の<ruby>必要性<rt>ひつようせい</rt></ruby>から<ruby>規定<rt>きてい</rt></ruby>されたものもある。", textMY: "Limit Tolerance အချို့မှာ တည်ဆောက်ပုံ ခံနိုင်ရည်နှင့် မဆိုင်ဘဲ ထုတ်လုပ်မှု အဆင်ပြေစေရန်အတွက်သာ သတ်မှတ်ထားခြင်း ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 許容差の根拠 (Base of Tolerance)",
      reasonMY: "ဂဟေအဆက်များ လွဲချော်ခြင်း (食違い) သည် တည်ဆောက်ပုံ၏ ခိုင်မာမှု (Structural Strength) အပေါ် တိုက်ရိုက် သက်ရောက်မှု ရှိသည်။ ထို့ကြောင့် 'ထုတ်လုပ်မှု အဆင်ပြေစေရန်အတွက်သာ' ဆိုသော အချက်မှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၁၀ ပါ Scribble '継手性能上からの規定' ကို ကြည့်ပါ)။",
      memoryTipMY: "အဆက်အစပ်လွဲခြင်း (Offset) သည် ခိုင်မာမှုကို ထိခိုက်စေသောကြောင့် ဖွဲ့စည်းပုံအရ အရေးကြီးသည်။"
    }
  },
  {
    id: "3-19",
    questionJP: "<ruby>付属金物類検査<rt>ふぞくかなものるいけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆက်စပ်ပစ္စည်းများ (Miscellaneous/Secondary Steel) စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>仮設関連付属金物<rt>かせつかんれんふぞくかなもの</rt></ruby>には、タラップ、<ruby>親綱用ピース<rt>おやづなようぴーす</rt></ruby>、<ruby>安全ネット取付けピース<rt>あんぜんねっととりつけぴーす</rt></ruby>、<ruby>吊りピース<rt>つりぴーす</rt></ruby>などがある。", textMY: "ယာယီလုပ်ငန်းသုံးများတွင် လှေကား၊ အသက်ကယ်ကြိုးတပ်အစိတ်အပိုင်း၊ ပိုက်ကွန်တပ်အစိတ်အပိုင်းနှင့် မတင်ရန်အစိတ်အပိုင်း (Lifting piece) များ ပါဝင်သည်။" },
      { id: 2, textJP: "(2) <ruby>設備関連付属金物<rt>せつびかんれんふぞくかなもの</rt></ruby>には、ダクトスリーブ、エレベーターおよびエスカレーター<ruby>用ファスナー<rt>ようふぁすなー</rt></ruby>などがある。", textMY: "စက်ကိရိယာသုံးများတွင် ပိုက်လိုင်းပေါက် (Duct sleeve) နှင့် ဓာတ်လှေကားအစိတ်အပိုင်းများ ပါဝင်သည်။" },
      { id: 3, textJP: "(3) <ruby>付属金物<rt>ふぞくかなもの</rt></ruby>は、<ruby>最近<rt>さいきん</rt></ruby>では、<ruby>工場<rt>こうじょう</rt></ruby>で<ruby>製作施工<rt>せいさくせこう</rt></ruby>されるのが<ruby>一般的<rt>いっぱんてき</rt></ruby>となった。", textMY: "မကြာသေးမီက ဆက်စပ်ပစ္စည်းများကို စက်ရုံတွင်သာ တစ်ပါတည်း ထုတ်လုပ်တပ်ဆင်ခြင်းမှာ ယေဘုယျ ဖြစ်လာသည်။" },
      { id: 4, textJP: "(4) <ruby>付属金物類取付け<rt>ふぞくかなものるいとりつけ</rt></ruby>の<ruby>際<rt>さい</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>は、<ruby>本体鉄骨<rt>ほんたいてっこつ</rt></ruby>の品質に<ruby>与える影響<rt>あたえるえいきょう</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>して<ruby>製作<rt>せいさく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "ဆက်စပ်ပစ္စည်းများ တပ်ဆင်ဂဟေဆက်ရာတွင် ပင်မသံဘောင်၏ အရည်အသွေးကို မထိခိုက်စေရန် ထည့်သွင်းစဉ်းစားရမည်။" },
      { id: 5, textJP: "(5) <ruby>付属金物類<rt>ふぞくかなものるい</rt></ruby>の<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、<ruby>入熱量<rt>にゅうねつりょう</rt></ruby>က <ruby>過大<rt>かだい</rt></ruby>になりがちなので<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "ဆက်စပ်ပစ္စည်းများ ယာယီဂဟေဆက်ရာတွင် အပူလွန်ကဲ (High heat input) တတ်သဖြင့် သတိပြုရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ショートビード (Short Bead)",
      reasonMY: "ဆက်စပ်ပစ္စည်း (Miscellaneous steel) များမှာ သေးငယ်သောကြောင့် ဂဟေဆက်အရှည် တိုတောင်းလေ့ရှိသည်။ ထိုအခါ 'အပူလွန်ကဲခြင်း' ထက် 'အအေးမြန်ခြင်း' ကြောင့် ဖြစ်သော အက်ကွဲခြင်း (Short Bead Problem) က ပို၍ အရေးကြီးသည်။ (PDF စာမျက်နှာ ၁၁ ပါ Scribble: 'ショートビード' ကို သတိပြုပါ)။",
      memoryTipMY: "သေးငယ်သော အစိတ်အပိုင်းများတွင် 'Short Bead' (အအေးမြန်ခြင်း) ကို သတိထားပါ။"
    }
  },
  {
    id: "3-20",
    questionJP: "<ruby>高力六角ボルト<rt>こうりょくろっかくぼると</rt></ruby>をナット<ruby>回転法<rt>かいてんほう</rt></ruby>で<ruby>締付ける後<rt>しめつけるあと</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "HS Bolt ကို Nut Rotation Method ဖြင့် တပ်ဆင်ပြီးနောက် စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>検査<rt>けんさ</rt></ruby>は、<ruby>一次締め後<rt>いちじしめあと</rt></ruby>のマークを<ruby>目視<rt>もくし</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>う。<ruby>検査項目<rt>けんさこう目</rt></ruby>は、<ruby>共回り<rt>ともまわり</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>、ナット<ruby>回転量<rt>かいてんりょう</rt></ruby>、およびボルトの<ruby>余長<rt>よちょう</rt></ruby>とする。", textMY: "စစ်ဆေးမှုကို အမှတ်အသားများကို ကြည့်၍ လုပ်ဆောင်ရမည်။ အတူလည်ခြင်း၊ လည်ပတ်သည့်ထောင့် နှင့် ကျန်ရှိသောအရှည်တို့ကို စစ်ဆေးရမည်။" },
      { id: 2, textJP: "(2) <ruby>共回り<rt>ともまわり</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>共回り<rt>ともまわり</rt></ruby>က <ruby>発生<rt>はっせい</rt></ruby>しているボルトは、<ruby>所定<rt>しょてい</rt></ruby>の<ruby>回転量<rt>かいてんりょう</rt></ruby>まで<ruby>追締め<rt>おいしめ</rt></ruby>して<ruby>処置<rt>しょち</rt></ruby>する。", textMY: "အတူလည်ခြင်း (Co-rotation) ဖြစ်ပါက သတ်မှတ်ချက်ပြည့်သည်အထိ ထပ်မံကျပ် (Retighten) ပြီး ဖြေရှင်းနိုင်သည်။" },
      { id: 3, textJP: "(3) ナット<ruby>回転量<rt>かいてんりょう</rt></ruby>を<ruby>測定<rt>そくてい</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>する。120°±30° (M12 の<ruby>場合<rt>ばあい</rt></ruby>: 60°~90°) の<ruby>範囲内<rt>はんいない</rt></ruby>にあるものを<ruby>適合<rt>てきごう</rt></ruby>とする。", textMY: "နပ်လည်ပတ်သည့်ထောင့်ကို တိုင်းတာရမည်။ (M12 အတွက် ၆၀ မှ ၉၀ ဒီဂရီအတွင်းမှာ အောင်မြင်သည်)။" },
      { id: 4, textJP: "(4) <ruby>締め忘れ<rt>しめわすれ</rt></ruby>ているか、ナット<ruby>回転量<rt>かいてんりょう</rt></ruby>က <ruby>不足<rt>ふそく</rt></ruby>しているボルトは、<ruby>所定<rt>しょてい</rt></ruby>の<ruby>回転量<rt>かいてんりょう</rt></ruby>まで<ruby>追締め<rt>おいしめ</rt></ruby>して<ruby>処置<rt>しょち</rt></ruby>する。", textMY: "ကျပ်ရန်မေ့ကျန်ခြင်း သို့မဟုတ် လည်ပတ်မှုမပြည့်ခြင်းတို့ဖြစ်ပါက သတ်မှတ်ချက်ပြည့်သည်အထိ ထပ်မံကျပ်နိုင်သည်။" },
      { id: 5, textJP: "(5) ボルトの<ruby>余長<rt>よちょう</rt></ruby>は、ナット<ruby>面<rt>めん</rt></ruby>から<ruby>突<rt>つ</rt></ruby>き<ruby>出<rt>で</rt></ruby>た<ruby>長さ<rt>ながさ</rt></ruby>が、ねじ 1 <ruby>山<rt>やま</rt></ruby>~6 <ruby>山<rt>やま</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>にあるものを<ruby>適合<rt>てきごう</rt></ruby>とする。", textMY: "နပ်မျက်နှာပြင်မှ ထွက်နေသော ဝက်အူရစ်အရှည်မှာ ၁ ခုမှ ၆ ခုအတွင်း ရှိရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 共回りの処置 (Co-rotation)",
      reasonMY: "အတူလည်ခြင်း (共回り) ဖြစ်ပေါ်ပါက ထို Bolt ကို ပြန်ကျပ်ရုံဖြင့် မရဘဲ အသစ်လဲလှယ်ရမည် (取り替える)။ ၎င်းသည် တင်းအား မမှန်ကန်ကြောင်း ပြသနေခြင်း ဖြစ်သည်။",
      memoryTipMY: "အတူလည်ရင် (共回り) အသစ်လဲရမည်။"
    }
  },
  {
    id: "3-21",
    questionJP: "「JASS 6」および「<ruby>鉄骨工事技術指針・工場製作編<rt>てっこつこうじぎじゅつししん・こうじょうせいさくへん</rt></ruby>」に<ruby>基づく寸法精度<rt>もとづくすんぽうせいど</rt></ruby>の<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ အတိုင်းအတာ တိကျမှု၏ လက်ခံစစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>書類検査 1<rt>しょるいけんさいち</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>က <ruby>全数<rt>ぜんすう</rt></ruby>ある<ruby>場合<rt>ばあい</rt></ruby>にのみ<ruby>適用<rt>てきよう</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>であり、<ruby>個々<rt>ここ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>が<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えていないか<ruby>確認<rt>かくにん</rt></ruby>することができる。", textMY: "Document Inspection 1 သည် စက်ရုံတွင်းမှတ်တမ်း ၁၀၀% ရှိမှသာ သုံးနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>書類検査 2<rt>しょるいけんさに</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>က <ruby>部分的<rt>ぶぶんてき</rt></ruby>にしかない<ruby>場合<rt>ばあい</rt></ruby>にも<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Document Inspection 2 သည် မှတ်တမ်းအချို့သာရှိလျှင်လည်း သုံးနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>であり、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>にかかわらず<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Object Inspection 1 သည် ပစ္စည်းကို တိုက်ရိုက်စစ်ခြင်းဖြစ်ပြီး မှတ်တမ်းရှိရှိမရှိရှိ သုံးနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものではなく、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Object Inspection 2 သည် စက်ရုံတွင်းမှတ်တမ်း၏ ယုံကြည်ရမှုကို အတည်ပြုခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>対物検査 3<rt>たいぶつけんささん</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものではなく、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Object Inspection 3 သည်လည်း စက်ရုံတွင်းမှတ်တမ်း၏ ယုံကြည်ရမှုကို အတည်ပြုခြင်း ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査 1 (Object Inspection 1)",
      reasonMY: "JASS 6 အရ၊ 对物検査 1 (Object Inspection 1) သည် 'စက်ရုံတွင်း စစ်ဆေးမှုမှတ်တမ်း မရှိသောအခါ' (社内検査記録が無い場合) သာ အသုံးပြုရသည့် နည်းလမ်းဖြစ်သည်။ မှတ်တမ်း ရှိသည်ဖြစ်စေ၊ မရှိသည်ဖြစ်စေ အသုံးပြုနိုင်သည်ဆိုခြင်းမှာ မဟုတ်ပါ။",
      memoryTipMY: "Inspection 1 = မှတ်တမ်းမရှိလျှင် (No Record) သုံးသည်။"
    }
  },
  {
    id: "3-22",
    questionJP: "「JASS 6」および「<ruby>鉄骨工事技術指針<rt>てっこつこうじぎじゅつししん</rt></ruby>」に<ruby>基づく寸法精度<rt>もとづくすんぽうせいど</rt></ruby>の<ruby>受入検査<rt>うけいれけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ အတိုင်းအတာ တိကျမှု၏ လက်ခံစစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>書類検査 1<rt>しょるいけんさいち</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>က <ruby>全数<rt>ぜんすう</rt></ruby>ある<ruby>場合<rt>ばあい</rt></ruby>にのみ<ruby>適用<rt>てきよう</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Document Inspection 1 သည် စက်ရုံတွင်းမှတ်တမ်း ၁၀၀% ရှိမှသာ သုံးနိုင်သည်။" },
      { id: 2, textJP: "(2) 「JASS 6」では、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>柱の長さ、梁の長さ<rt>はしらのながさ、はりのながさ</rt></ruby>などの 7 <ruby>項目<rt>こうもく</rt></ruby>について、<ruby>社内検査<rt>しゃないけんさ</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>し<ruby>全数記録<rt>ぜんすうきろく</rt></ruby>を<ruby>残す<rt>のこす</rt></ruby>こととしている。", textMY: "JASS 6 အရ တိုင်၊ မြားတန်း အရှည် စသည့် အချက် ၇ ချက်ကို စက်ရုံတွင် ၁၀၀% စစ်ဆေးပြီး မှတ်တမ်းထားရမည်။" },
      { id: 3, textJP: "(3) <ruby>書類検査 2<rt>しょるいけんさに</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>က <ruby>部分的<rt>ぶぶんてき</rt></ruby>にしかない<ruby>場合<rt>ばあい</rt></ruby>にも<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Document Inspection 2 သည် မှတ်တမ်းအချို့သာရှိလျှင်လည်း သုံးနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>であり、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>က <ruby>全数<rt>ぜんすう</rt></ruby>ある<ruby>場合<rt>ばあい</rt></ruby>にのみ<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Object Inspection 1 ကို စက်ရုံတွင်းမှတ်တမ်း အပြည့်အစုံ (100%) ရှိမှသာ အသုံးပြုနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>製品精度<rt>せいひんせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものではなく、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Object Inspection 2 သည် စက်ရုံတွင်းမှတ်တမ်း၏ ယုံကြည်ရမှုကို အတည်ပြုခြင်းဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査 1",
      reasonMY: "PDF စာမျက်နှာ ၁၂ ပါ Scribble အရ၊ 对物検査 1 သည် 'စက်ရုံတွင်းမှတ်တမ်း မရှိသည့်အခါ' တွင်လည်း သုံးနိုင်သော နည်းလမ်းဖြစ်သည်။ '၁၀၀% ရှိမှသာ သုံးနိုင်သည်' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Inspection 1 = Records မရှိလည်း လုပ်လို့ရတယ်။"
    }
  },
  {
    id: "3-23",
    questionJP: "JASS 6における<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ပစ္စည်းစစ်ဆေးမှု (Object Inspection) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>対物検査 1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>製品<rt>せいひん</rt></ruby>の<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>を<ruby>直接検査<rt>ちょくせつけんさ</rt></ruby>するものであり、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>にかかわらず<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Inspection 1 ကို မှတ်တမ်းရှိရှိ၊ မရှိရှိ သုံးနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>の<ruby>信頼性<rt>しんらいせい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することによって<ruby>間接的<rt>かんせつてき</rt></ruby>に<ruby>寸法精度<rt>すんぽうせいど</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Inspection 2 သည် စက်ရုံတွင်းမှတ်တမ်း၏ ယုံကြည်ရမှုကို စစ်ဆေးခြင်းဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査 2<rt>たいぶつけんさに</rt></ruby>は、<ruby>抜き取った 5 個<rt>ぬきとったごこ</rt></ruby>のサンプルと<ruby>対応<rt>たいおう</rt></ruby>する<ruby>社内検査記録<rt>しゃないけんさきろく</rt></ruby>を<ruby>照合<rt>しょうごう</rt></ruby>し、<ruby>通常<rt>つうじょう</rt></ruby>の<ruby>範囲内<rt>はんいない</rt></ruby>であれば<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "Inspection 2 တွင် နမူနာ ၅ ခုကို ယူ၍ စက်ရုံတွင်းမှတ်တမ်းနှင့် တိုက်ဆိုင်စစ်ဆေးသည်။" },
      { id: 4, textJP: "(4) <ruby>対物検査 1, 2<rt>たいぶつけんさいちに</rt></ruby>では、<ruby>合格ロット<rt>ごうかくろっと</rt></ruby>はそのまま<ruby>受入れ<rt>うけいれ</rt></ruby>、<ruby>不合格ロット<rt>ふごうかくろっと</rt></ruby>は<ruby>残り<rt>のこり</rt></ruby>を<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>する。", textMY: "မအောင်မြင်သော Lot ကို ကျန်ရှိသော အစိတ်အပိုင်းများထဲမှ နမူနာကောက်ယူပြီး ထပ်မံစစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>対物検査 1, 2<rt>たいぶつけんさいちに</rt></ruby>では、1 <ruby>検査ロット<rt>けんさろっと</rt></ruby>は 300 <ruby>個以下<rt>こいか</rt></ruby>で<ruby>構成<rt>こうせい</rt></ruby>される。", textMY: "စစ်ဆေးမှု Lot တစ်ခုလျှင် အစိတ်အပိုင်း ၃၀၀ အထိ ပါဝင်နိုင်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不合格時の処置 (Action when fail)",
      reasonMY: "ပစ္စည်းစစ်ဆေးမှု (対物検査) တွင် မအောင်မြင်ပါက (不合格) ကျန်ရှိသော အစိတ်အပိုင်း 'အားလုံး' (全数検査 - 100%) ကို စစ်ဆေးရမည် ဖြစ်သည်။ 'နမူနာကောက်စစ်ရမည်' ဆိုခြင်းမှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၁၃ ပါ Scribble: '全数検査' ကို ကြည့်ပါ)။",
      memoryTipMY: "ရှုံးရင် (Fail) -> အကုန်စစ် (100%)။"
    }
  },
  {
    id: "3-24",
    questionJP: "<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>と<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်ကို ဖြေရှင်းခြင်းနှင့် ထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>にあたり、<ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>やバラツキの<ruby>大<rt>おお</rt></ruby>きさなどの<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>調査<rt>ちょうさ</rt></ruby>し、<ruby>正確<rt>せいかく</rt></ruby>にとらえることが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "ချို့ယွင်းချက်၏ အရေအတွက်နှင့် အခြေအနေကို အရင်ဆုံး တိကျစွာ သိရှိနားလည်ရန် အရေးကြီးသည်။" },
      { id: 2, textJP: "(2) <ruby>不具合<rt>ふぐあい</rt></ruby>က どの<ruby>工程<rt>こうてい</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しているか、その<ruby>原因<rt>げんいん</rt></ruby>ကို <ruby>推定<rt>すいてい</rt></ruby>し、<ruby>工程内<rt>こうていない</rt></ruby>にも<ruby>問題<rt>もんだい</rt></ruby>があるのかကို <ruby>判断<rt>はんだん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "မည်သည့်အဆင့်တွင် ဖြစ်ရသနည်းဆိုသည့် အကြောင်းရင်းကို ရှာဖွေပြီး လုပ်ငန်းစဉ်ကို ပြန်လည်သုံးသပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>工程内<rt>こうていない</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>製作手順・管理項目<rt>せいさくてじゅん・かんりこうもく</rt></ruby>などに<ruby>対<rt>たい</rt></ruby>する<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>見直し<rt>みなおし</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>になる。", textMY: "လုပ်ငန်းစဉ်တွင် ပြဿနာရှိပါက ထုတ်လုပ်မှုအဆင့်ဆင့်နှင့် စီမံမှုအချက်များကို တိကျစွာ ပြင်ဆင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>にかかわる<ruby>者<rt>もの</rt></ruby>が、<ruby>自ら<rt>みずから</rt></ruby>の<ruby>目<rt>め</rt></ruby>で<ruby>現物<rt>げんぶつ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>すると、<ruby>先入観<rt>せんにゅうかん</rt></ruby>にとらわれ、<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>処置<rt>しょち</rt></ruby>が行えなくなるので、<ruby>現物確認者<rt>げんぶつかくにんしゃ</rt></ruby>と<ruby>処置方法決定者<rt>しょちほうほうけっていしゃ</rt></ruby>を<ruby>同一<rt>どういつ</rt></ruby>としない。", textMY: "ဆုံးဖြတ်သူကိုယ်တိုင် ပစ္စည်းကို သွားကြည့်ပါက ဘက်လိုက်မှုရှိနိုင်သဖြင့် ပစ္စည်းသွားကြည့်သူနှင့် ဆုံးဖြတ်သူမှာ မတူညီသောသူများ ဖြစ်ရမည်ဟု ဆိုခြင်း။" },
      { id: 5, textJP: "(5) <ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>累積<rt>るいせき</rt></ruby>し<ruby>構造全体<rt>こうぞうぜんたい</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及ぼす場合<rt>およぼすばあい</rt></ruby>、<ruby>建物形状<rt>たてものけいじょう</rt></ruby>やスパン<ruby>数<rt>すう</rt></ruby>などを<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>処置方法<rt>しょちほうほう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。", textMY: "ချို့ယွင်းချက်များ စုပုံလာပါက အဆောက်အဦတစ်ခုလုံး၏ ပုံသဏ္ဍာန်ကိုပါ ထည့်သွင်းစဉ်းစားပြီး ဖြေရှင်းနည်းကို ဆုံးဖြတ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 現物確認 (On-site verification)",
      reasonMY: "ချို့ယွင်းချက်ကို မှန်ကန်စွာ ဖြေရှင်းနိုင်ရန်အတွက် ဆုံးဖြတ်ချက်ချမည့်သူသည် 'မိမိမျက်စိဖြင့် ကိုယ်တိုင်' ပစ္စည်းကို သေချာစွာ ကြည့်ရှုစစ်ဆေးရန် အလွန်အရေးကြီးသည်။ ထိုသို့မလုပ်ပါက မှန်ကန်သော ဆုံးဖြတ်ချက် မချနိုင်ပါ။ (PDF စာမျက်နှာ ၁၃ ပါ Scribble: '先入観...現物確認する者と処置方法を決定する者を同一としない' ဆိုသည်မှာ မှားယွင်းသော ပေါ်လစီဖြစ်သည်)။",
      memoryTipMY: "အမှားတွေ့ရင် ဆုံးဖြတ်မယ့်သူက ကိုယ်တိုင် (Self) သွားကြည့်ရမယ်။"
    }
  },
  {
    id: "3-25",
    questionJP: "<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>と<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်ကို ဖြေရှင်းခြင်းနှင့် ထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>ကို <ruby>調査<rt>ちょうさ</rt></ruby>し、<ruby>定性的・定量的<rt>ていせいてき・ていりょうてき</rt></ruby>に<ruby>正<rt>ただ</rt></ruby>しくとらえることが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "ချို့ယွင်းချက်အခြေအနေကို အရေအတွက်နှင့် အရည်အသွေးအရ မှန်ကန်စွာ သိရှိရန် အရေးကြီးသည်။" },
      { id: 2, textJP: "(2) <ruby>不具合<rt>ふぐあい</rt></ruby>က どの<ruby>工程<rt>こうてい</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しているか、その<ruby>原因<rt>げんいん</rt></ruby>ကို <ruby>推定<rt>すいてい</rt></ruby>し、<ruby>工程内<rt>こうていない</rt></ruby>にも<ruby>問題<rt>もんだい</rt></ruby>があるのかကို <ruby>判断<rt>はんだん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "အကြောင်းရင်းကို ရှာဖွေပြီး လုပ်ငန်းစဉ်ကို ပြန်လည်သုံးသပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>工程内<rt>こうていない</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>製作手順・管理項目<rt>せいさくてじゅん・かんりこうもく</rt></ruby>などに<ruby>対<rt>たい</rt></ruby>する<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>見直し<rt>みなおし</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>になる。", textMY: "လုပ်ငန်းစဉ်တွင် ပြဿနာရှိပါက အဆင့်ဆင့်ကို ပြန်လည်ပြင်ဆင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>にかかわる<ruby>者<rt>もの</rt></ruby>が、<ruby>自ら<rt>みずから</rt></ruby>の<ruby>目<rt>め</rt></ruby>で<ruby>現物<rt>げんぶつ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することは、その<ruby>後<rt>あと</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>ကို <ruby>適切<rt>てきせつ</rt></ruby>なものとするために<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "ကိုယ်တိုင်သွားကြည့်ခြင်းသည် မှန်ကန်သော ဖြေရှင်းချက်ပေးရန်အတွက် အရေးကြီးသည်။" },
      { id: 5, textJP: "(5) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>は、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>形状<rt>けいじょう</rt></ruby>や<ruby>構造的な特徴<rt>こうぞうてきなとくちょう</rt></ruby>に<ruby>関わらず<rt>かかわらず</rt></ruby>、<ruby>常に一定<rt>つねにいってい</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>定めておく<rt>さだめておく</rt></ruby>。", textMY: "ချို့ယွင်းချက်ဖြေရှင်းနည်းကို အဆောက်အဦပုံစံနှင့် မဆိုင်ဘဲ အမြဲတမ်း ပုံသေနည်းလမ်းတစ်ခုတည်း သတ်မှတ်ထားရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 処置の個別性 (Individual Treatment)",
      reasonMY: "ချို့ယွင်းချက်များကို ဖြေရှင်းရာတွင် အဆောက်အဦ၏ ပုံသဏ္ဍာန် (Shape) နှင့် တည်ဆောက်ပုံ ဝိသေသလက္ခဏာများ (Structural characteristics) အပေါ် မူတည်၍ တစ်ခုချင်းစီအတွက် အသင့်တော်ဆုံးနည်းလမ်းကို ရွေးချယ်ရမည်။ 'ပုံသေနည်းလမ်းတစ်ခုတည်း' ဆိုခြင်းမှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၁၄ ပါ Scribble '常に一定の方法' ကို ကြည့်ပါ)။",
      memoryTipMY: "အခြေအနေပေါ် မူတည်ပြီး အကောင်းဆုံးနည်းလမ်းကို ရွေးချယ်ရမည်။"
    }
  },
  {
    id: "3-26",
    questionJP: "<ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>再発防止<rt>さいはつぼうし</rt></ruby>と<ruby>製作管理技術者<rt>せいさくかんりぎじゅつしゃ</rt></reason>の<ruby>役割<rt>やくわり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်မဖြစ်အောင် ကာကွယ်ခြင်းနှင့် နည်းပညာရှင်၏ တာဝန်ဆိုင်ရာ မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>再発防止<rt>さいはつぼうし</rt></ruby>とは、<ruby>動線<rt>どうせん</rt></ruby>の<ruby>改善<rt>かいぜん</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない。", textMY: "ထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုသည်မှာ လုပ်ငန်းလမ်းကြောင်း (Flow) ကို ပြုပြင်ခြင်းထက် မပိုပါ။" },
      { id: 2, textJP: "(2) <ruby>製作管理技術者<rt>せいさくかんりぎじゅつしゃ</rt></ruby>は、<ruby>各工程<rt>かくこうてい</rt></ruby>から<ruby>上げられた不具合情報<rt>あげられたふぐあいじょうほう</rt></ruby>をもとに、<ruby>発生原因<rt>はっせいげんいん</rt></ruby>を<ruby>追求<rt>ついきゅう</rt></ruby>し<ruby>処置方法<rt>しょちほうほう</rt></ruby>ကို <ruby>検討<rt>けんとう</rt></ruby>する。", textMY: "နည်းပညာရှင်သည် ရရှိလာသော အချက်အလက်များမှ အကြောင်းရင်းကို ရှာဖွေပြီး ဖြေရှင်းနည်းစဉ်းစားရမည်။" },
      { id: 3, textJP: "(3) <ruby>製作管理技術者<rt>せいさくかんりぎじゅつしゃ</rt></ruby>は、<ruby>現品そのもの<rt>げんぴんそのもの</rt></ruby>の<ruby>処置方法<rt>しょちほうほう</rt></ruby>と、<ruby>改善<rt>かいぜん</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>となった<ruby>工程の手順<rt>こうていてじゅん</rt></ruby>などの<ruby>情報<rt>じょうほう</rt></ruby>を、<ruby>迅速<rt>じんそく</rt></ruby>に<ruby>周知徹底<rt>しゅうちてってい</rt></ruby>する。", textMY: "ချို့ယွင်းချက်အချက်အလက်ကို သက်ဆိုင်သူများအားလုံးဆီ အမြန်ဆုံး အသိပေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>不具合<rt>ふぐあい</rt></ruby>により<ruby>設計品質<rt>せっけいひんしつ</rt></ruby>က <ruby>確保<rt>かくほ</rt></ruby>できない<ruby>可能性<rt>かのうせい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>監理者<rt>かんりしゃ</rt></ruby>や<ruby>施工者<rt>せこうしゃ</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>し<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: "ဒီဇိုင်းအရည်အသွေး မပြည့်မီနိုင်ပါက ကြီးကြပ်သူကို အသိပေးပြီး ဆွေးနွေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>不具合<rt>ふぐあい</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>するには、<ruby>技術の教育<rt>ぎじゅつきょういく</rt></ruby>と<ruby>同時に<rt>どうじに</rt></ruby>、<ruby>製作システム<rt>せいさくしすてむ</rt></ruby>の<ruby>理解<rt>りかい</rt></ruby>やモラルの<ruby>向上<rt>こうじょう</rt></ruby>などのソフト<ruby>教育<rt>きょういく</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "စနစ်ကိုနားလည်ရန်နှင့် စိတ်ဓာတ်မြှင့်တင်ရန် ပညာပေးမှုများလည်း လိုအပ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 4M の改善",
      reasonMY: "ထပ်မဖြစ်အောင် ကာကွယ်ခြင်း (再発防止) ဆိုသည်မှာ 4M (Man, Machine, Material, Method) အားလုံးကို ပြန်လည်သုံးသပ် ပြုပြင်ခြင်းဖြစ်သည်။ 'လမ်းကြောင်းပြင်ရုံ' ဆိုခြင်းမှာ မလုံလောက်ပါ။ (PDF စာမျက်နှာ ၁၄ ပါ Scribble '4M' ကို ကြည့်ပါ)။",
      memoryTipMY: "4M အားလုံးကို ပြုပြင်မှသာ ပြဿနာ ထပ်မဖြစ်မှာပါ။"
    }
  },
  {
    id: "3-27",
    questionJP: "<ruby>製品検査<rt>せいひんけんさ</rt></ruby>で<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>されたときの<ruby>処置<rt>しょち</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်ကုန်စစ်ဆေးမှုတွင် ချို့ယွင်းချက်တွေ့ရှိပါက ဖြေရှင်းပုံနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>で<ruby>不具合<rt>ふぐあい</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>されたときは、あらかじめ<ruby>定<rt>さだ</rt></ruby>められたフローなどに<ruby>沿<rt>そ</rt></ruby>って<ruby>速<rt>すみ</rt></ruby>やかに<ruby>対処<rt>たいしょ</rt></ruby>する。", textMY: "စက်ရုံတွင်းစစ်ဆေးမှုတွင် အမှားတွေ့ပါက သတ်မှတ်ထားသော အဆင့်များအတိုင်း အမြန်ဆုံး ဖြေရှင်းရမည်။" },
      { id: 2, textJP: "(2) <ruby>処置<rt>しょち</rt></ruby>のルートは、<ruby>現品そのもの<rt>げんぴんそのもの</rt></ruby>の<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>に関する<ruby>経路<rt>けいろ</rt></ruby>と、<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>経路<rt>けいろ</rt></ruby>の2つに<ruby>分<rt>わ</rt></ruby>けて<ruby>考<rt>かんが</rt></ruby>えることができる。", textMY: "ဖြေရှင်းနည်းကို ပစ္စည်းပြင်ဆင်ရေးလမ်းကြောင်းနှင့် ထပ်မဖြစ်အောင် ကာကွယ်ရေးလမ်းကြောင်း ဟူ၍ ၂ မျိုး ခွဲခြားစဉ်းစားနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>不具合の要因<rt>ふぐあいのよういん</rt></ruby>としては、<ruby>材料・工法<rt>ざいりょう・こうほう</rt></ruby>に<ruby>起因<rt>きいん</rt></ruby>するものがほとんどなので、<ruby>再発防止<rt>さいはつぼうし</rt></ruby>のためには、<ruby>材料検査<rt>ざいりょうけんさ</rt></ruby>の<ruby>徹底<rt>てってい</rt></ruby>と<ruby>工法の検証<rt>こうほうのけんしょう</rt></ruby>に<ruby>重点<rt>じゅうてん</rt></ruby>をおくことが<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "ချို့ယွင်းချက်များသည် ပစ္စည်းနှင့် လုပ်နည်းစနစ် (Material/Method) ကြောင့်သာ ဖြစ်လေ့ရှိသဖြင့် ထပ်မဖြစ်အောင် ပစ္စည်းစစ်ဆေးမှုနှင့် စနစ်စစ်ဆေးမှုကိုသာ အဓိကလုပ်ရမည်ဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) あらかじめ<ruby>処置要領<rt>しょちようりょう</rt></ruby>が<ruby>定<rt>さだ</rt></ruby>められていない<ruby>不具合<rt>ふぐあい</rt></ruby>については、<ruby>設計品質<rt>せっけいひんしつ</rt></ruby>に<ruby>与える影響<rt>あたえるえいきょう</rt></ruby>などを<ruby>総合的<rt>そうごうてき</rt></ruby>に<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>監理者<rt>かんりしゃ</rt></ruby>と<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: "သတ်မှတ်မထားသော အမှားများအတွက် ကြီးကြပ်သူနှင့် ဆွေးနွေးဆုံးဖြတ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>受入検査<rt>うけいれけんさ</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>で<ruby>重大な不具合<rt>じゅうだいなふぐあい</rt></ruby>が<ruby>発見<rt>はっけん</rt></ruby>された<ruby>場合<rt>ばあい</rt></ruby>、<ruby>工事工程<rt>こうじこうてい</rt></ruby>に<ruby>重大な影響<rt>じゅうだいなえいきょう</rt></ruby>を<ruby>及ぼす<rt>およぼす</rt></ruby>おそれがあるので、<ruby>初期の段階<rt>しょきのだんかい</rt></ruby>で<ruby>発見<rt>はっけん</rt></ruby>する。", textMY: "အမှားကြီးများကို အစောပိုင်းအဆင့်များတွင် ရှာဖွေတွေ့ရှိရန် အရေးကြီးသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不具合の 4M 要因",
      reasonMY: "ချို့ယွင်းချက်ဖြစ်ရသည့် အကြောင်းရင်းများတွင် ပစ္စည်းနှင့် စနစ် (Material/Method) အပြင် လူ (Man) နှင့် စက်ကိရိယာ (Machine) တို့လည်း ပါဝင်သည်။ ဤ 4M အားလုံးကို မစီမံဘဲ 'ပစ္စည်းနှင့် စနစ်သာ' ဆိုခြင်းမှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၁၅ ပါ Scribble '手腕' (Skill/Manpower) ကို ကြည့်ပါ)။",
      memoryTipMY: "ချို့ယွင်းချက် အကြောင်းရင်းဟာ လူ၊ စက်၊ ပစ္စည်း၊ စနစ် အားလုံးနဲ့ ဆိုင်ပါတယ်။"
    }
  },
  {
    id: "3-28",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ အရည်အသွေးစီမံမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の品質に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及ぼす要因<rt>およぼすよういん</rt></ruby>は、<ruby>鋼材質、溶接材料、溶接条件<rt>こうざいしつ、ようせつざいりょう၊ ようせつじょうけん</rt></ruby>などがある。", textMY: "ဂဟေအရည်အသွေးကို သံမဏိအမျိုးအစား၊ ဂဟေပစ္စည်းနှင့် အခြေအနေများက လွှမ်းမိုးသည်။" },
      { id: 2, textJP: "(2) <ruby>完全溶込溶接部<rt>かんぜんようこみようせつぶ</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は、<ruby>母材<rt>ぼざい</rt></ruby>の JIS <ruby>規格値以上<rt>きかくちいじょう</rt></ruby>က <ruby>要求<rt>ようきゅう</rt></ruby>される。", textMY: "Full Penetration Weld ၏ ခိုင်မာမှုမှာ base metal ၏ စံနှုန်းအတိုင်း ရှိရန် လိုအပ်သည်။" },
      { id: 3, textJP: "(3) <ruby>柱・梁接合部<rt>ちゅう・はりせつごうぶ</rt></ruby>には、<ruby>強度<rt>きょうど</rt></ruby>および<ruby>靭性<rt>じんせい</rt></ruby>က <ruby>要求<rt>ようきゅう</rt></ruby>される。", textMY: "တိုင်နှင့် မြားတန်းဆုံမှတ်တွင် ခိုင်မာမှု (Strength) နှင့် ကြံ့ခိုင်မှု (Toughness) တို့ လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>完全溶込溶接部<rt>かんぜんようこみようせつぶ</rt></ruby>の<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>は、<ruby>社内検査<rt>しゃないけんさ</rt></ruby>では<ruby>全数検査<rt>ぜんすうけんさ</rt></ruby>することが<ruby>多い<rt>おおい</rt></ruby>。", textMY: "အတွင်းပိုင်းချို့ယွင်းချက်ကို စက်ရုံတွင်းစစ်ဆေးမှုတွင် အားလုံး (100%) စစ်ဆေးလေ့ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>の<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>の<ruby>許容限界<rt>きょようげんかい</rt></ruby>について、「JASS 6」では<ruby>明記<rt>めいき</rt></ruby>されている。", textMY: "JASS 6 တွင် Fillet Weld ၏ အတွင်းပိုင်းချို့ယွင်းချက် ခွင့်ပြုချက်ကို ရှင်းလင်းစွာ ဖော်ပြထားသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 隅肉溶接の内部欠陥 (Fillet Weld)",
      reasonMY: "JASS 6 တွင် Fillet Weld (隅肉溶接) ၏ အတွင်းပိုင်းချို့ယွင်းချက် (Internal Defects) များအတွက် ခွင့်ပြုနိုင်သော စံနှုန်းကို ရှင်းလင်းစွာ ဖော်ပြထားခြင်း (明記されていない) မရှိပါ။ (PDF စာမျက်နှာ ၁၅ ပါ Scribble အရ '斜角探傷による方法が提案されている' - အဆိုပြုထားရုံသာ ရှိသည်)။",
      memoryTipMY: "JASS 6 တွင် Fillet weld ၏ အတွင်းပိုင်းစံနှုန်း မပါဝင်ပါ။"
    }
  },
  {
    id: "3-29",
    questionJP: "「JASS 6」における<ruby>溶接部<rt>ようせつぶ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ဂဟေဆက်နေရာနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接前<rt>ようせつまえ</rt></ruby>のチェック<ruby>項目<rt>こうもく</rt></ruby>は、<ruby>作業環境、溶接材料、使用器具、開先の形状や寸法<rt>さぎょうかんきょう、ようせつざいりょう、しようきぐ、かいさきのけいじょうやすんぽう</rt></ruby>などである。", textMY: "ဂဟေမဆက်မီ ပတ်ဝန်းကျင်၊ ပစ္စည်း၊ ကိရိယာ နှင့် groove ပုံစံများကို စစ်ဆေးရမည်။" },
      { id: 2, textJP: "(2) <ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby>にエンドタブを<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける<ruby>場合<rt>ばあい</rt></ruby>には、エンドタブは<ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>け、<ruby>直接母材<rt>ちょくせつぼざい</rt></ruby>に<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>をしない。", textMY: "End Tab ကို Backing Metal တွင် တပ်ဆင်ရမည်ဖြစ်ပြီး Base Metal ပေါ်တွင် တိုက်ရိုက် ယာယီဂဟေ မဆက်ရ။" },
      { id: 3, textJP: "(3) <ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby>の<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、<ruby>梁フランジ<rt>はりふらんじ</rt></ruby>の<ruby>両端<rt>りょうたん</rt></ruby>から 5mm <ruby>以内<rt>いない</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>には<ruby>行<rt>おこな</rt></ruby>わない。", textMY: "Beam flange ၏ ဘေးနှစ်ဖက် 5mm အတွင်း ယာယီဂဟေ မဆက်ရ။" },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>は<ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>および<ruby>精度<rt>せいど</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>目視検査<rt>もくしけんさ</rt></ruby>とし、<ruby>検査箇所数<rt>けんさかしょすう</rt></ruby>の 10% を<ruby>適正<rt>てきせい</rt></ruby>な<ruby>器具<rt>きぐ</rt></ruby>で<ruby>測定<rt>そくてい</rt></ruby>する。", textMY: "ဂဟေအပြင်ပန်းစစ်ဆေးရာတွင် ၁၀% သော နေရာများကိုသာ ကိရိယာဖြင့် တိုင်းတာစစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>スタッド溶接<rt>すたっどようせつ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>は、<ruby>溶接部<rt>ようせつぶ</rt></ruby>のすべてを<ruby>対象<rt>たいしょう</rt></ruby>として、カラーがスタッド<ruby>全周<rt>ぜんしゅう</rt></ruby>にわたって<ruby>形成<rt>けいせい</rt></ruby>されていることを<ruby>目視<rt>もくし</rt></ruby>で<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Stud ဂဟေစစ်ဆေးရာတွင် အားလုံးကို ပတ်လည်ဂဟေသားရှိမရှိ မျက်စိဖြင့် စစ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 外観検査 (Visual Inspection)",
      reasonMY: "ဂဟေဆက်နေရာများ၏ အပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual Inspection) ကို မူအရ 'အားလုံး' (全数検査 - 100%) လုပ်ဆောင်ရမည် ဖြစ်သည်။ (PDF စာမျက်နှာ ၁၆ ပါ Scribble '外観検査不適合' ကို ကြည့်ပါ)။ ၁၀% သာ စစ်ရမည်ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "အပြင်ပန်းကြည့်စစ်ဆေးခြင်း (Visual) သည် ၁၀၀% (အားလုံး) စစ်ရမည်။"
    }
  },
  {
    id: "3-30",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ အရည်အသွေးစီမံမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>及ぼす要因<rt>およぼすよういん</rt></ruby>ကို <ruby>適切<rt>てきせつ</rt></ruby>に<ruby>組み合わせる<rt>くみあわせる</rt></ruby>ことで品質を<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "အချက်များကို မှန်ကန်စွာ ပေါင်းစပ်ခြင်းဖြင့် အရည်အသွေးကို အာမခံရမည်။" },
      { id: 2, textJP: "(2) <ruby>大地震時<rt>だいじしんじ</rt></ruby>に<ruby>溶接部<rt>ようせつぶ</rt></ruby>が<ruby>破断<rt>はだん</rt></ruby>しないことが<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "ငလျင်ကြီးများတွင် ဂဟေနေရာ မကျိုးပြတ်ရန် လိုအပ်သည်။" },
      { id: 3, textJP: "(3) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>သည် <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>က <ruby>母材規格値<rt>ぼざいきかくち</rt></ruby>၏ 90% <ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "Fillet weld ၏ ခိုင်မာမှုသည် base metal စံနှုန်း၏ ၉၀% နှင့်အထက် ရှိရမည်။" },
      { id: 4, textJP: "(4) <ruby>完全溶込溶接<rt>かんぜんようこみようせつ</rt></ruby>၏ <ruby>欠陥率<rt>けっかんりつ</rt></ruby>သည် AOQL で<ruby>決められている<rt>きめられている</rt></ruby>。", textMY: "Full penetration weld ၏ ချို့ယွင်းချက်နှုန်းကို AOQL ဖြင့် သတ်မှတ်သည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>品質管理を証明<rt>ひんしつかんりをしょうめい</rt></ruby>するために<ruby>記録<rt>きろく</rt></ruby>をとる。", textMY: "ထုတ်လုပ်သူသည် အရည်အသွေးစီမံမှုကို သက်သေပြရန် မှတ်တမ်းယူရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 隅肉溶接の強度 (Fillet Weld Strength)",
      reasonMY: "Fillet Weld (隅肉溶接) တွင် အသုံးပြုသော ဂဟေသား (Weld metal) ၏ ခိုင်မာမှုသည် base metal ၏ စံနှုန်းထက် 'မနိမ့်စေရ' (100% 以上)။ ၉၀% ဆိုခြင်းမှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၁၆ ပါ Scribble '母材より高い' ကို ကြည့်ပါ)။",
      memoryTipMY: "ဂဟေသားသည် base metal ထက် အမြဲတမ်း ပိုမိုခိုင်မာရမည်။"
    }
  }
];
