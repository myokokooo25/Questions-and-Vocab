import { StudyCardData } from '../types';

export const chapter2022Part3Data: StudyCardData[] = [
  {
    id: "2022-35",
    questionJP: "ナット<ruby>回転法<rt>かいてんほう</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Nut Rotation Method でစစ်ဆေးခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>共回り<rt>ともまわり</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "(1)  (Co-rotation)  しなければならない。" },
      { id: 2, textJP: "(2) <ruby>共回り<rt>ともまわり</rt></ruby>は<ruby>追締め<rt>おいしめ</rt></ruby>して<ruby>処置<rt>しょち</rt></ruby>する。", textMY: "(2) 場合は しなければならない。" },
      { id: 3, textJP: "(3) M12は60°~90°を<ruby>適合<rt>てきごう</rt></ruby>とする。", textMY: "(3) M12  - をは は" },
      { id: 4, textJP: "(4) <ruby>回転不足<rt>かいてんふそく</rt></ruby>は<ruby>追締め<rt>おいしめ</rt></ruby>する。", textMY: "(4) 場合は しなければならない。" },
      { id: 5, textJP: "(5) <ruby>余長<rt>よちょう</rt></ruby>は1~6<ruby>山<rt>やま</rt></ruby>とする。", textMY: "(5) Bolt   -  しなければならない。" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 共回り (Co-rotation)",
      reasonMY: "အတူလည်ခြင်း (共回り) ဖြစ်ပေါ်場合はထို Bolt をပြန်ကျပ်ရုံでမရဘဲ အသစ်လဲလှယ်しなければならない。",
      memoryTipMY: "အတူလည်ရင် (共回り) အသစ်လဲပါ။"
    }
  },
  {
    id: "2022-36",
    questionJP: "<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Limit Tolerance とပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>修正<rt>しゅうせい</rt></ruby>が<ruby>可能<rt>かのう</rt></ruby>である。", textMY: "(1)  は" },
      { id: 2, textJP: "(2) <ruby>重要度<rt>じゅうようど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "(2) をしなければならない。" },
      { id: 3, textJP: "(3) 5%<ruby>以内<rt>いない</rt></ruby>ならそのまま<ruby>使用可能<rt>しようかのう</rt></ruby>である。", textMY: "(3)  について  は" },
      { id: 4, textJP: "(4) <ruby>補修<rt>ほしゅう</rt></ruby>で<ruby>対処<rt>たいしょ</rt></ruby>できる。", textMY: "(4) では" },
      { id: 5, textJP: "(5) <ruby>製作管理上<rt>せいさくかんりじょう</rt></ruby>の<ruby>必要性<rt>ひつようせい</rt></ruby>がある。", textMY: "(5)   は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 限界許容差の逸脱 (Exceeding Limit Tolerance)",
      reasonMY: "ခွင့်ပြုဘောင် (Limit Tolerance) をကျော်လွန်သွား場合はဒီအတိုင်း သုံး၍ မရပါ။ ပြင်ဆင်ရန် သို့မဟုတ် ပြန်လုပ်ရန် လိုအပ်は။",
      memoryTipMY: "ကျော်သွားရင် ဒီအတိုင်း မသုံးရပါ။"
    }
  },
  {
    id: "2022-37",
    questionJP: "<ruby>対物検査<rt>たいぶつけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းစစ်ဆေးမှု (Object Inspection) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>直接判定<rt>ちょくせつはんてい</rt></ruby>する方法と、<ruby>間接的<rt>かんせつてき</rt></ruby>に判定する方法がある。", textMY: "(1) とで は" },
      { id: 2, textJP: "(2) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>により<ruby>合否<rt>ごうひ</rt></ruby>を判定する。", textMY: "(2) Inspection 1 は  (Management Tolerance) で/ は" },
      { id: 3, textJP: "(3) <ruby>対物検査1<rt>たいぶつけんさいち</rt></ruby>は、<ruby>最も複雑な統計処理<rt>もっともふくざつなとうけいしょり</rt></ruby>に<ruby>基づく<rt>もとづく</rt></ruby>方法である。", textMY: "(3) Inspection 1 は  (Statistics)   は" },
      { id: 4, textJP: "(4) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>は、<ruby>全数<rt>ぜんすう</rt></ruby>の<ruby>記録<rt>きろく</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "(4) Inspection 2 をについては" },
      { id: 5, textJP: "(5) <ruby>対物検査2<rt>たいぶつけんさに</rt></ruby>は、5<ruby>個<rt>こ</rt></ruby>のサンプルを<ruby>照合<rt>しょうごう</rt></ruby>する。", textMY: "(5) Inspection 2 は  を は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対物検査1 (Object Inspection 1)",
      reasonMY: "Inspection 1 はနမူနာကောက်ယူစစ်ဆေးသည့် အရိုးရှင်းဆုံးနည်းလမ်း ဖြစ်は။ အရှုပ်ထွေးဆုံး စာရင်းအင်းနည်းလမ်း မဟုတ်ပါ။",
      memoryTipMY: "Inspection 1 = Simple Sampling Method."
    }
  },
  {
    id: "2022-38",
    questionJP: "<ruby>不具合処置<rt>ふぐあいしょち</rt></ruby>と<ruby>再発防止<rt>さいはつぼうし</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ချို့ယွင်းချက်をဖြေရှင်းခြင်းとထပ်မဖြစ်အောင် ကာကွယ်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不具合<rt>ふぐあい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>正しく<rt>ただしく</rt></ruby>とらえることが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "(1)  を  は" },
      { id: 2, textJP: "(2) <ruby>原因<rt>げんいん</rt></ruby>を<ruby>推定<rt>すいてい</rt></ruby>し、<ruby>工程<rt>こうてい</rt></ruby>内の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>判断<rt>はんだん</rt></ruby>する。", textMY: "(2) を について をしなければならない。" },
      { id: 3, textJP: "(3) <ruby>製作手順<rt>せいさくてじゅん</rt></ruby>の<ruby>具体的な見直し<rt>ぐたいてきなみなおし</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になる。", textMY: "(3)  を  は" },
      { id: 4, textJP: "(4) <ruby>誤差の累積<rt>ごさのるいせき</rt></ruby>が<ruby>全体の問題<rt>ぜんたいのもんだい</rt></ruby>となることもある。", textMY: "(4)   場合は  は" },
      { id: 5, textJP: "(5) <ruby>許容差内<rt>きょようさない</rt></ruby>でも<ruby>全て再製作<rt>すべてさいせいさく</rt></ruby>しなければならない。", textMY: "(5) について  を しなければならない。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不具合の処置 (Handling Non-conformities)",
      reasonMY: "ခွင့်ပြုဘောင် (Tolerance) အについてး ရှိနေ場合はအသစ်ပြန်လုပ်ရန် မလိုပါ။ ချို့ယွင်းချက်をပြုပြင်ရုံ သို့မဟုတ် အခြေအနေအရ ဆက်လက်အသုံးပြုနိုင်は။ အားလုံးပြန်လုပ်ရန် မလိုအပ်ပါ။",
      memoryTipMY: "Tolerance အについてးရှိရင် အသစ်ပြန်လုပ်ဖို့ မလိုပါ။"
    }
  },
  {
    id: "2022-39",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質管理<rt>ひんしつかんり</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာのအရည်အသွေးစီမံမှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工場の管理体制<rt>こうじょうのかんりたいせい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でチェックされる。", textMY: "(1) のについて しなければならない。" },
      { id: 2, textJP: "(2) <ruby>製作中の管理<rt>せいさくちゅうのかんり</rt></ruby>を<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>必要がある。", textMY: "(2) について を しなければならない。" },
      { id: 3, textJP: "(3) <ruby>溶接後の検査<rt>ようせつごのけんさ</rt></ruby>は<ruby>改善<rt>かいぜん</rt></ruby>のためにも<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "(3)  は は" },
      { id: 4, textJP: "(4) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>手直し要領<rt>てなおしようりょう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "(4)  (Manual) について (Repair manual) を " },
      { id: 5, textJP: "(5) <ruby>非破壊検査<rt>ひはかいけんさ</rt></ruby>も<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(5) NDT を しなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作要領書の内容 (Contents of Fabrication Manual)",
      reasonMY: "ထုတ်လုပ်မှုလမ်းညွှန် (製作要領書) についてစစ်ဆေးနည်းများとအတူ ချို့ယွင်းချက်တွေ့場合はမည်သို့ပြုပြင်ရမည်ဆိုသည့် (手直し要領) をပါ မဖြစ်မနေ ထည့်သွင်းしなければならない。",
      memoryTipMY: "Manual についてစစ်ဆေးနည်းရော ပြင်နည်းပါ ပါしなければならない。"
    }
  },
  {
    id: "2022-40",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>社内検査<rt>しゃないけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာのစက်ရုံについてးစစ်ဆေးမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>品質管理機能<rt>ひんしつかんりきのう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>行為<rt>こうい</rt></ruby>である。", textMY: "(1)  を は" },
      { id: 2, textJP: "(2) <ruby>全製品完了後<rt>ぜんせいひんかんりょうご</rt></ruby>にまとめて<ruby>実施<rt>じっし</rt></ruby>するのが<ruby>効率的<rt>こうりつてき</rt></ruby>である。", textMY: "(2)    が は" },
      { id: 3, textJP: "(3) <ruby>外観検査<rt>がいかんけんさ</rt></ruby>と<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(3) とについてをしなければならない。" },
      { id: 4, textJP: "(4) <ruby>検査結果<rt>けんさけっか</rt></ruby>は<ruby>受入検査時<rt>うけいれけんさじ</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>する。", textMY: "(4) をについてしなければならない。" },
      { id: 5, textJP: "(5) <ruby>超音波探傷<rt>ちょうおんぱたんしょう</rt></ruby>は<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>が<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(5) UT を しなければならない。" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 検査のタイミング (Inspection Timing)",
      reasonMY: "အားလုံးပြီးမှစစ်場合はပြဿနာတွေ့လျှင် အားလုံးပြန်ပြင်ရမည်ဖြစ်သでမထိရောက်ပါ။ လုပ်ငန်းစဉ်တစ်ခုချင်းစီအလိုက် အချိန်とတစ်ပြေးညီ စစ်ဆေးခြင်းが ပိုမိုကောင်းမွန်ပါは။",
      memoryTipMY: "ပြီးမှစစ်တာထက် လုပ်ရင်းစစ်တာが ပိုကောင်းပါတယ်။"
    }
  },
  {
    id: "2022-41",
    questionJP: "JASS 6の<ruby>外観検査<rt>がいかんけんさ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 についてပြဋ္ဌာန်းထားသော အပြင်ပန်းစစ်ဆေးခြင်း (Visual Inspection) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>表面欠陥<rt>ひょうめんけっかん</rt></ruby>と<ruby>精度<rt>せいど</rt></ruby>に<ruby>対して行う<rt>たいしておこなう</rt></ruby>。", textMY: "(1)  と をしなければならない。" },
      { id: 2, textJP: "(2) <ruby>対象範囲<rt>たいしょうはんい</rt></ruby>は<ruby>全溶接部<rt>ぜんようせつぶ</rt></ruby>である。", textMY: "(2)  を しなければならない。" },
      { id: 3, textJP: "(3) <ruby>目視検査<rt>もくしけんさ</rt></ruby>を<ruby>基本<rt>きほん</rt></ruby>とする。", textMY: "(3) で (Visual inspection) を しなければならない。" },
      { id: 4, textJP: "(4) <ruby>割れ<rt>われ</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>されたら<ruby>抜取方法<rt>ぬきとりほうほう</rt></ruby>を<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: "(4)  (Crack) 場合は をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>不合格箇所<rt>ふごうかくかしょ</rt></ruby>は<ruby>補修<rt>ほしゅう</rt></ruby>し<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "(5)   を  しなければならない。" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 割れの処置 (အက်ကွဲကြောင်းများ ဖြေရှင်းခြင်း)",
      reasonMY: "အက်ကွဲကြောင်း (Crack) တွေ့ရှိ場合は၎င်းはအလွန်အန္တရာယ်များသော ချို့ယွင်းချက်ဖြစ်သでနမူနာကောက်ယူခြင်းမျိုး ဆွေးနွေးနေရန်မလိုဘဲ အားလုံးをအသေးစိတ် စုံစမ်းစစ်ဆေးပြုပြင်ရမည် ဖြစ်は။",
      memoryTipMY: "Crack တွေ့ရင် နမူနာကောက်ဖို့ မလိုတော့ဘူး။ ချက်ချင်း သေချာစစ်ဆေးပါ။"
    }
  },
  {
    id: "2022-42",
    questionJP: "JASS 6における<ruby>管理許容差<rt>かんりきょようさ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ စီမံခန့်ခွဲမှု ခွင့်ပြုဘောင် (Management Tolerance) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>アンダーカット<rt>あんだーかっと</rt></ruby>は0.3mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "(1) Undercut のは0.3mm と しなければならない。" },
      { id: 2, textJP: "(2) <ruby>ピット<rt>ぴっと</rt></ruby>は1<ruby>個以下<rt>こいか</rt></ruby>とする。", textMY: "(2) Pit () は と しなければならない。" },
      { id: 3, textJP: "(3) <ruby>オーバーラップ<rt>おーばーらっぷ</rt></ruby>は<ruby>あってはならない<rt>あってはならない</rt></ruby>。", textMY: "(3) Overlap ()  " },
      { id: 4, textJP: "(4) <ruby>余盛高さ<rt>よもりたかさ</rt></ruby>は3mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "(4)  (Reinforcement height) は3mm と しなければならない。" },
      { id: 5, textJP: "(5) <ruby>脚長不足<rt>きゃくちょうふそく</rt></ruby>は10% <ruby>以内<rt>いない</rt></ruby>なら<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "(5)  (Leg length) はの%   は 。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 脚長の許容差 (Leg length ခွင့်ပြုဘောင်)",
      reasonMY: "ဂဟေခြေထောက်အရှည် (Leg length) はဒီဇိုင်းသတ်မှတ်ထားသည့် အရွယ်အစားထက် လုံးဝ လျော့နည်းခြင်း မရှိရပါ။ လျော့နည်း場合はခံနိုင်ရည်ကျဆင်းမည် ဖြစ်は။",
      memoryTipMY: "Leg length (脚長) はသတ်မှတ်ထားတာထက် လုံးဝ ပိုတိုလို့ မရပါ။"
    }
  },
  {
    id: "2022-43",
    questionJP: "<ruby>非破壊試験<rt>ひはかいしけん</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဖျက်အဆီးကင်း စစ်ဆေးမှု (Non-Destructive Testing - NDT) များとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>放射線透過試験<rt>ほうしゃせんとうかしけん</rt></ruby>は<ruby>欠陥<rt>けっかん</rt></ruby>が<ruby>濃く写る<rt>こくうつる</rt></ruby>。", textMY: "(1) Radiographic Testing (RT) について をについて は" },
      { id: 2, textJP: "(2) <ruby>超音波探傷<rt>ちょうおんぱたんしょう</rt></ruby>は<ruby>反射波<rt>はんしゃは</rt></ruby>を<ruby>受信<rt>じゅしん</rt></ruby>する。", textMY: "(2) Ultrasonic Testing (UT) はの (Echo) を は" },
      { id: 3, textJP: "(3) <ruby>垂直探傷<rt>すいちょくたんしょう</rt></ruby>と<ruby>斜角探傷<rt>しゃかくたんしょう</rt></ruby>がある。", textMY: "(3) UT について Straight beam と Angle beam  は" },
      { id: 4, textJP: "(4) <ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>鉄骨溶接<rt>てっこつようせつ</rt></ruby>は<ruby>垂直探傷<rt>すいちょくたんしょう</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "(4) で をについてStraight beam をは" },
      { id: 5, textJP: "(5) <ruby>磁粉探傷<rt>じふんたんしょう</rt></ruby>は<ruby>微細な鉄粉<rt>びさいなてっぷん</rt></ruby>を<ruby>吸着<rt>きゅうちゃく</rt></ruby>させる。", textMY: "(5) Magnetic Particle Testing (MT) はをでをは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 斜角探傷 (Angle Beam)",
      reasonMY: "သံမဏိဘောင်များရှိ Butt weld များをUT でစစ်ဆေးရာについてဂဟေမြောင်းပုံစံများကြောင့် Straight beam (တည့်မတ်စွာစစ်ဆေးခြင်း) ထက် Angle beam (စောင်း၍စစ်ဆေးခြင်း) をအဓိが အသုံးပြုပါは။",
      memoryTipMY: "ဂဟေဆက်をUT စစ်ရင် Straight (တည့်တည့်) မစစ်ဘူး、Angle (စောင်းပြီး) စစ်ရတယ်။"
    }
  },
  {
    id: "2022-44",
    questionJP: "<ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>による<ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Ultrasonic Testing (UT) でအについてးပိုင်းချို့ယွင်းချက်များをစစ်ဆေးခြင်းとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 300<ruby>箇所以下<rt>かしょいか</rt></ruby>で1<ruby>ロット<rt>ろっと</rt></ruby>とする。", textMY: "(1)   とを (Lot)  は" },
      { id: 2, textJP: "(2) 100<ruby>箇所以下<rt>かしょいか</rt></ruby>は<ruby>類似部位<rt>るいじぶい</rt></ruby>と<ruby>構成<rt>こうせい</rt></ruby>できる。", textMY: "(2)   と  と Lot は" },
      { id: 3, textJP: "(3) <ruby>現場溶接<rt>げんばようせつ</rt></ruby>は<ruby>節<rt>ふし</rt></ruby>ごとに<ruby>ロット構成<rt>ろっとこうせい</rt></ruby>する。", textMY: "(3)  (Site) についてを (Tier/節)  Lot しなければならない。" },
      { id: 4, textJP: "(4) <ruby>エコー高さ<rt>えこーたかさ</rt></ruby>で<ruby>判断<rt>はんだん</rt></ruby>する。", textMY: "(4) をEcho の  は" },
      { id: 5, textJP: "(5) <ruby>合否判定<rt>ごうひはんてい</rt></ruby>は2<ruby>回抜取<rt>かいぬきとり</rt></ruby>による。", textMY: "(5) / を   (2回抜取)  では" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 合否判定 (အောင်/ရှုံး သတ်မှတ်ခြင်း)",
      reasonMY: "UT စစ်ဆေးမှုについてအောင်/ရှုံးをပြတ်သားသော စံနှုန်းသတ်မှတ်ချက် (Standard criteria) များでသာ ဆုံးဖြတ်ပြီး、'နမူနာ ၂ ကြိမ်ထုတ်ယူခြင်း' ကဲ့သို့သော အခြေခံမရှိသည့် နည်းလမ်းမျိုးでမလုပ်ဆောင်ပါ။",
      memoryTipMY: "UT စစ်ဆေးရာについてကြိမ်ဖန်များစွာ အစမ်းကောက်ယူခြင်းမျိုး မရှိပါ။"
    }
  },
  {
    id: "2022-45",
    questionJP: "<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘေးအန္တရာယ်ကင်းရှင်းရေးとကျန်းမာရေး (Safety and Health) ကိစ္စရပ်များについてမှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>産業用ロボット<rt>さんぎょうようろぼっと</rt></ruby>は<ruby>大臣<rt>だいじん</rt></ruby>が<ruby>定める<rt>さだめる</rt></ruby>。", textMY: "(1)  と をが は" },
      { id: 2, textJP: "(2) <ruby>快適職場環境<rt>かいてきしょくばかんきょう</rt></ruby>を<ruby>目的<rt>もくてき</rt></ruby>とする。", textMY: "(2)    (Comfortable workplace)  は" },
      { id: 3, textJP: "(3) <ruby>監督官<rt>かんとくかん</rt></ruby>は<ruby>作業中止命令<rt>さぎょうちゅうしめいれい</rt></ruby>の<ruby>権限<rt>けんげん</rt></ruby>がある。", textMY: "(3)  (監督官) について場合は   は" },
      { id: 4, textJP: "(4) 300<ruby>人以上<rt>にんいじょう</rt></ruby>は<ruby>総括責任者<rt>そうかつせきにんしゃ</rt></ruby>の<ruby>選任義務<rt>せんにんぎむ</rt></ruby>がある。", textMY: "(4)   と場合は (総括安全衛生管理者)  は" },
      { id: 5, textJP: "(5) <ruby>元方事業者<rt>もとかたじぎょうしゃ</rt></ruby>は<ruby>人数に関わらず安全管理者<rt>にんずうにかかわらずあんぜんかんりしゃ</rt></ruby>を<ruby>選任<rt>せんにん</rt></ruby>する。", textMY: "(5)  (Main Contractor) は を しなければならない。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 安全管理者の選任 (ဘေးကင်းရေးမန်နေဂျာ ခန့်အပ်ခြင်း)",
      reasonMY: "ဆောက်လုပ်ရေးလုပ်ငန်းများについてအဓိကကန်ထရိုက်တာはလုံခြုံရေးအတွက် ဘေးကင်းရေးမန်နေဂျာ (安全管理者) をအလုပ်သမား အနည်းဆုံး ၅၀ ဦးとအထက် ရှိလာမှသာ ခန့်အပ်ရန် ဥပဒေအရ တာဝန်ရှိは။",
      memoryTipMY: "ဘေးကင်းရေးမန်နေဂျာ ခန့်ဖို့ဆိုရင် အလုပ်သမား ၅၀ ယောက် ပြည့်ရမယ်。"
    }
  },
  {
    id: "2022-46",
    questionJP: "<ruby>溶接の安全<rt>ようせつのあんぜん</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်းのဘေးအန္တရာယ်ကင်းရှင်းရေးとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>屋外作業<rt>おくがいさぎょう</rt></ruby>は<ruby>保護具着用<rt>ほごぐちゃくよう</rt></ruby>が<ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "(1)  (Outdoor) についてを場合は  " },
      { id: 2, textJP: "(2) <ruby>アーク光<rt>あーくこう</rt></ruby>は<ruby>保護めがね<rt>ほごめがね</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(2) Arc     しなければならない。" },
      { id: 3, textJP: "(3) <ruby>アース<rt>あーす</rt></ruby>を<ruby>完備<rt>かんび</rt></ruby>し<ruby>感電防止<rt>かんでんぼうし</rt></ruby>する。", textMY: "(3) を Earth  (Ground ) を しなければならない。" },
      { id: 4, textJP: "(4) 2m<ruby>以上<rt>いじょう</rt></ruby>は<ruby>自動電撃防止装置<rt>じどうでんげきぼうしそうち</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(4)   とについて場合は をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>は<ruby>柵<rt>さく</rt></ruby>を<ruby>設ける<rt>もうける</rt></ruby>。", textMY: "(5) で場合はと / しなければならない。" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 呼吸用保護具 (အသက်ရှူလမ်းကြောင်း အကာအကွယ်)",
      reasonMY: "ပြင်ပလေဟာပြင်についてဂဟေဆက်စေကာမူ ဂဟေအခိုးအငွေ့ (Fume) များをရှူရှိုက်မိ場合はကျန်းမာရေးအတွက် ဆိုးရွားစွာ ထိခိုက်နိုင်သでMask ကဲ့သို့သော အကာအကွယ်များをမဖြစ်မနေ ဝတ်ဆင်しなければならない。",
      memoryTipMY: "ပြင်ပမှာလုပ်လည်း ဂဟေငွေ့が အန္တရာယ်ပေးတတ်တာမို့ Mask တပ်ရပါမယ်。"
    }
  },
  {
    id: "2022-47",
    questionJP: "<ruby>特別教育<rt>とくべつきょういく</rt></ruby>で<ruby>就業可能<rt>しゅうぎょうかのう</rt></ruby>な<ruby>業務<rt>ぎょうむ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အထူးပညာပေးသင်တန်း (特別教育) ပြီးမြောက်ရုံでလုပ်をင်ခွင့်ရှိသော လုပ်ငန်းများအနက် မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 1<ruby>トン未満<rt>みまん</rt></ruby>の<ruby>玉掛け<rt>たまかけ</rt></ruby>。", textMY: "(1)    を (Slinging / 玉掛け)。" },
      { id: 2, textJP: "(2) <ruby>アーク溶接<rt>あーくようせつ</rt></ruby>。", textMY: "(2) Arc Welding () 。" },
      { id: 3, textJP: "(3) <ruby>ガス溶接<rt>がすようせつ</rt></ruby>。", textMY: "(3) Gas Welding (   ) 。" },
      { id: 4, textJP: "(4) <ruby>砥石取替え<rt>といしとりかえ</rt></ruby>。", textMY: "(4) Grinder  (砥石) を/ 。" },
      { id: 5, textJP: "(5) <ruby>ロボット教示<rt>ろぼっときょうじ</rt></ruby>。", textMY: "(5) を  (Robot Teaching)。" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 技能講習 vs 特別教育 (သင်တန်းအမျိုးအစားများ)",
      reasonMY: "ဓာတ်ငွေ့ဂဟေ (Gas Welding) についてပေါက်ကွဲနိုင်ခြေရှိသောကြောင့် ရိုးရှင်းသော အထူးပညာပေးသင်တန်း (特別教育) でမလုံလောက်ဘဲ、နိုင်ငံတော်အသိအမှတ်ပြု ကျွမ်းကျင်မှုသင်တန်း (技能講習) をအောင်မြင်ထားရန် လိုအပ်ပါは။",
      memoryTipMY: "ဓာတ်ငွေ့ဂဟေ (Gas Welding) はSkill Training (技能講習) လိုအပ်は။ လျှပ်စစ်ဂဟေ (Arc Welding) ကတော့ Special Education (特別教育) လမ်းကြောင်းでရは။"
    }
  },
  {
    id: "2022-48",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေ (建築基準法) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>地震等<rt>じしんとう</rt></ruby>に<ruby>安全<rt>あんぜん</rt></ruby>でなければならない。", textMY: "(1) は  しなければならない。" },
      { id: 2, textJP: "(2) <ruby>指定建築材料<rt>していけんちくざいりょう</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "(2) が  を しなければならない。" },
      { id: 3, textJP: "(3) JISまたは<ruby>大臣認定<rt>だいじんにんてい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>。", textMY: "(3)  はJIS   の は" },
      { id: 4, textJP: "(4) <ruby>着工後<rt>ちゃっこうご</rt></ruby>に<ruby>申請<rt>しんせい</rt></ruby>する。", textMY: "(4)  (確認申請) を は" },
      { id: 5, textJP: "(5) <ruby>許容応力度<rt>きょようおうりょくど</rt></ruby>はF/1.5である。", textMY: "(5) の  (Short-term Allowable Stress)  でF/1.5 は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 確認申請 (အတည်ပြုချက်တောင်းခံခြင်း)",
      reasonMY: "မည်သည့်အဆောက်အဦမဆို အလုပ်မစတင်မီ (着工前) についてသာ ဆောက်လုပ်ခွင့် (確認申請) တောင်းခံ၍ အတည်ပြုချက်ရယူရမည် ဖြစ်は။ ဆောက်ပြီးမှ တောင်းခံခြင်းをဥပဒေが လုံးဝ ခွင့်မပြုပါ။",
      memoryTipMY: "ဘယ်အလုပ်ပဲဖြစ်ဖြစ် ခွင့်ပြုချက် (Permit) မရဘဲ အရင်စလို့ မရပါဘူး。"
    }
  },
  {
    id: "2022-49",
    questionJP: "<ruby>仕口の構造方法<rt>しぐちのこうぞうほうほう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘောင်အဆက်အစပ်များ (Joints) のတည်ဆောက်ပုံဆောက်နည်းများとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>赤さび<rt>あかさび</rt></ruby>は<ruby>認められている<rt>みとめられている</rt></ruby>。", textMY: "(1) High-tension bolt でについて   (赤さび) をは" },
      { id: 2, textJP: "(2) <ruby>縁端距離<rt>えんたんきょり</rt></ruby>は<ruby>定められている<rt>さだめられている</rt></ruby>。", textMY: "(2) Bolt について  (Edge distance) を は" },
      { id: 3, textJP: "(3) <ruby>アンダーカット<rt>あんだーかっと</rt></ruby>は0.3mmを<ruby>超えるもの<rt>こえるもの</rt></ruby>は<ruby>一切認められない<rt>いっさいみとめられない</rt></ruby>。", textMY: "(3)  0.3mm  Undercut をについて  " },
      { id: 4, textJP: "(4) <ruby>ズレ<rt>ずれ</rt></ruby>は<ruby>許容差<rt>きょようさ</rt></ruby>が<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "(4)    (Misalignment)  で  (Tolerance) は" },
      { id: 5, textJP: "(5) <ruby>溶着金属<rt>ようちゃくきんぞく</rt></ruby>は<ruby>鋼材の種類<rt>こうざいのしゅるい</rt></ruby>による。", textMY: "(5)   の   は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - アンダーカットの許容 (Undercut ခွင့်ပြုချက်)",
      reasonMY: "0.3mm အထိ Undercut များをယေဘုယျ ခွင့်ပြုသော်လည်း、0.3mm ကျော်သွား場合はလုံးဝခွင့်မပြုခြင်းမျိုးမဟုတ်ဘဲ、ဂဟေဆက်ရမည့် နေရာအရေးပါမှု သို့မဟုတ် ပြဿနာအခြေအနေအလိုက် အသေးစိတ်လိုက်လံစစ်ဆေးပြီး သင့်လျော်သလို ဖြေရှင်းနိုင်ပါは။",
      memoryTipMY: "၀.၃ mm ကျော်တိုင်း တန်းပြီး အပြတ်ဖြတ်ပစ်တာ မဟုတ်ပါ။"
    }
  },
  {
    id: "2022-50",
    questionJP: "<ruby>建築士<rt>けんちくし</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဗိသုကာပညာရှင် (Architect) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>一級建築士<rt>いっきゅうけんちくし</rt></ruby>は<ruby>大臣免許<rt>だいじんめんきょ</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "(1)  (1st Class Architect) はのをしなければならない。" },
      { id: 2, textJP: "(2) <ruby>二級建築士<rt>にきゅうけんちくし</rt></ruby>は<ruby>知事免許<rt>ちじめんきょ</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "(2)  (2nd Class Architect) はのをしなければならない。" },
      { id: 3, textJP: "(3) <ruby>木造建築士<rt>もくぞうけんちくし</rt></ruby>は<ruby>知事免許<rt>ちじめんきょ</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "(3)  (Wooden Building Architect) はのをしなければならない。" },
      { id: 4, textJP: "(4) <ruby>構造設計一級<rt>こうぞうせっけいいっきゅう</rt></ruby>は<ruby>一級<rt>いっきゅう</rt></ruby>の<ruby>資格<rt>しかく</rt></ruby>が<ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "(4)  (Structural Design 1st Class Architect) は  " },
      { id: 5, textJP: "(5) <ruby>一定規模以上<rt>いっていきぼいじょう</rt></ruby>は<ruby>関与<rt>かんよ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "(5)    は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 構造設計一級建築士",
      reasonMY: "Structural Design Class 1 Architect ဖြစ်ရန်အတွက် ဦးစွာ ပထမတန်းဗိသုကာ (一級建築士) ဖြစ်ရန် မဖြစ်မနေ လိုအပ်は။",
      memoryTipMY: "Specialist ဖြစ်ဖို့ Class 1 အရင်ဖြစ်しなければならない。"
    }
  }
];
