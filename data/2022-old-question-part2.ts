import { StudyCardData } from '../types';

export const chapter2022Part2Data: StudyCardData[] = [
  {
    id: "2022-18",
    questionJP: "<ruby>溶接記号<rt>ようせつきごう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေသင်္ကေတများについてအသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>は<ruby>脚長<rt>きゃくちょう</rt></ruby>を<ruby>明記<rt>めいき</rt></ruby>する。", textMY: "(1) Fillet weld についてLeg length () を しなければならない。" },
      { id: 2, textJP: "(2) <ruby>現場溶接<rt>げんばようせつ</rt></ruby>は<ruby>旗<rt>はた</rt></ruby>のマークを<ruby>付す<rt>ふす</rt></ruby>。", textMY: "(2)  (Field weld / Site weld)   (Flag)  しなければならない。" },
      { id: 3, textJP: "(3) <ruby>裏当て金<rt>うらあてがね</rt></ruby>は<ruby>記号内<rt>きごうない</rt></ruby>に<ruby>表示<rt>ひょうじ</rt></ruby>する。", textMY: "(3) Backing metal をについて しなければならない。" },
      { id: 4, textJP: "(4) <ruby>全周溶接<rt>ぜんしゅうようせつ</rt></ruby>は<ruby>丸<rt>まる</rt></ruby>のマークを<ruby>付す<rt>ふす</rt></ruby>。", textMY: "(4)  (All-around weld)   (Circle)  しなければならない。" },
      { id: 5, textJP: "(5) <ruby>開先角度<rt>かいさきかくど</rt></ruby>は<ruby>記入不要<rt>きにゅうふよう</rt></ruby>である。", textMY: "(5) Groove angle () を " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接記号 (Welding Symbols)",
      reasonMY: "ဂဟေမြောင်းのထောင့် (Groove Angle) はဂဟေစိမ့်ဝင်မှုအတွက် အရေးကြီးသောကြောင့် သင်္ကေတについてမဖြစ်မနေ ဖော်ပြရမည်။",
      memoryTipMY: "အရေးကြီးတဲ့ အတိုင်းအတာတွေをသင်္ကေတမှာ အမြဲထည့်ရは။"
    }
  },
  {
    id: "2022-19",
    questionJP: "<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆော်သူ (Welder) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>自動溶接<rt>じどうようせつ</rt></ruby>は<ruby>基本級<rt>きほんきゅう</rt></ruby>でよい。", textMY: "(1) Automatic welding () は (Basic class) では" },
      { id: 2, textJP: "(2) <ruby>半自動<rt>はんじどう</rt></ruby>はJIS Z 3841<ruby>合格者<rt>ごうかくしゃ</rt></ruby>とする。", textMY: "(2) Semi-automatic  JIS Z 3841  しなければならない。" },
      { id: 3, textJP: "(3) <ruby>スタッド<rt>すたっど</rt></ruby>は<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "(3) Stud welding   しなければならない。" },
      { id: 4, textJP: "(4) AW<ruby>検定<rt>けんてい</rt></ruby>は<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "(4) AW  (AW Certification) はは" },
      { id: 5, textJP: "(5) <ruby>技量確認<rt>ぎりょうかくにん</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>ことがある。", textMY: "(5) を (Skill confirmation) は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 自動溶接の資格 (Automatic Welding Certification)",
      reasonMY: "အလိုအလျောက် ဂဟေဆက်စက် (SAW စは) မောင်းသူများは၎င်းとသက်ဆိုင်သော အထူးပြု ကျွမ်းကျင်အဆင့် (専門級 - Specialized class) をရရှိထားရန် လိုအပ်は။",
      memoryTipMY: "စက်ကြီးတွေမောင်းရင် 専門級 လိုは။"
    }
  },
  {
    id: "2022-20",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) -5℃~5℃は<ruby>予熱<rt>よねつ</rt></ruby>する。", textMY: "(1)  -   について場合は (Preheat) しなければならない。" },
      { id: 2, textJP: "(2) <ruby>予熱温度<rt>よねつおんど</rt></ruby>は<ruby>低い方<rt>ひくいほう</rt></ruby>とする。", textMY: "(2) Preheat  場合はをしなければならない。" },
      { id: 3, textJP: "(3) <ruby>変形<rt>へんけい</rt></ruby>の<ruby>大きい方<rt>おおきいほう</rt></ruby>を<ruby>先行<rt>せんこう</rt></ruby>させる。", textMY: "(3) を しなければならない。" },
      { id: 4, textJP: "(4) <ruby>水分・油分<rt>すいぶん・ゆぶん</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "(4) とをしなければならない。" },
      { id: 5, textJP: "(5) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "(5)  (Tack weld) をしなければならない。" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予熱温度 (Preheat Temperature)",
      reasonMY: "အထူမတူသော သံမဏိများをဆက်場合はအအေးခံနှုန်းをထိန်းချုပ်ရန်အတွက် 'အမြင့်ဆုံး လိုအပ်ချက်ရှိသော အပူချိန်' (高い方の温度) をယူしなければならない。",
      memoryTipMY: "အပူပေးရင် အမြင့်ဆုံးをကြည့်ပါ။"
    }
  },
  {
    id: "2022-21",
    questionJP: "<ruby>裏当て金<rt>うらあてがね</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Backing metal とပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶落ち防止<rt>とけおちぼうし</rt></ruby>である。", textMY: "(1)  (Burn-through / Melt-through) をは" },
      { id: 2, textJP: "(2) <ruby>密着<rt>みっちゃく</rt></ruby>させる必要がある。", textMY: "(2) Base metal と は" },
      { id: 3, textJP: "(3) <ruby>仮付け<rt>かりづけ</rt></ruby>は<ruby>開先外<rt>かいさきがい</rt></ruby>とする。", textMY: "(3)  (Tack weld) をBevel () については" },
      { id: 4, textJP: "(4) <ruby>エンドタブ<rt>えんどたぶ</rt></ruby>を<ruby>併用<rt>へいよう</rt></ruby>する。", textMY: "(4) End tab としなければならない。" },
      { id: 5, textJP: "(5) <ruby>鋼製<rt>こうせい</rt></ruby>は<ruby>母材同等<rt>ぼざいどうとう</rt></ruby>とする。", textMY: "(5) Backing metal のはBase metal と しなければならない。" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 仮付け溶接の位置 (Tack Weld Location)",
      reasonMY: "Backing metal のယာယီဂဟေをBevel のအについてးဘက် (開先内) についてသာ လုပ်ဆောင်ရမည်။ အပြင်ဘက်についてလုပ်場合はချို့ယွင်းချက် (Defect) ဖြစ်စေနိုင်は။",
      memoryTipMY: "ယာယီဂဟေをမြောင်းထဲမှာပဲ လုပ်しなければならない。"
    }
  },
  {
    id: "2022-22",
    questionJP: "<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>の<ruby>発生原因<rt>はっせいげんいん</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေချို့ယွင်းချက်ဖြစ်ရသည့်အကြောင်းအရင်းများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>アンダーカット<rt>あんだーかっと</rt></ruby>は<ruby>遅い溶接速度<rt>おそいようせつそくど</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "(1) Undercut は  は" },
      { id: 2, textJP: "(2) <ruby>ピット<rt>ぴっと</rt></ruby>は<ruby>油分・水分<rt>ゆぶん・すいぶん</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "(2) Pit () はと は" },
      { id: 3, textJP: "(3) <ruby>オーバーラップ<rt>おーばーらっぷ</rt></ruby>は<ruby>低電圧<rt>ていでんあつ</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "(3) Overlap は (Voltage)  は" },
      { id: 4, textJP: "(4) <ruby>融合不良<rt>ゆうごうふりょう</rt></ruby>は<ruby>過小な電流<rt>かしょうなでんりゅう</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>しやすい。", textMY: "(4) Incomplete fusion () はCurrent  は" },
      { id: 5, textJP: "(5) <ruby>アークストライク<rt>あーくすとらいく</rt></ruby>は<ruby>瞬間的<rt>しゅんかんてき</rt></ruby>なアークで<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "(5) Arc strike は  Arc  は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - アンダーカット (Undercut)",
      reasonMY: "Undercut はများသောအားで'မြန်လွန်းသော' ဂဟေဆက်နှုန်း (速い溶接速度) သို့မဟုတ် Current များလွန်းခြင်းကြောင့် ဖြစ်ပေါ်ခြင်းဖြစ်は။ နှေး場合はဖြစ်ပေါ်ရန် ခက်ခဲは။",
      memoryTipMY: "အရှိန်မြန်ရင် ဘေးသားတွေ လောင်စားသွားတတ်တယ်။"
    }
  },
  {
    id: "2022-23",
    questionJP: "<ruby>溶接法<rt>ようせつほう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေနည်းလမ်းများဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>融接<rt>ゆうせつ</rt></ruby>は<ruby>溶融<rt>ようゆう</rt></ruby>して<ruby>接合<rt>せつごう</rt></ruby>する。", textMY: "(1) Fusion welding () は は" },
      { id: 2, textJP: "(2) <ruby>圧接<rt>あっせつ</rt></ruby>は<ruby>圧力<rt>あつりょく</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>する。", textMY: "(2) Pressure welding () はをは" },
      { id: 3, textJP: "(3) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>は<ruby>融接のみ<rt>ゆうせつのみ</rt></ruby>である。", textMY: "(3)   Fusion welding を は" },
      { id: 4, textJP: "(4) <ruby>低融点金属<rt>ていゆうてんきんぞく</rt></ruby>を<ruby>充填<rt>じゅうてん</rt></ruby>する。", textMY: "(4)  をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>溶極式<rt>ようきょくしき</rt></ruby>は<ruby>心線<rt>しんせん</rt></ruby>が<ruby>溶ける<rt>とける</rt></ruby>。", textMY: "(5) Consumable electrode ( ) についてCore wire は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 建築鉄骨の溶接 (Welding of Structural Steel)",
      reasonMY: "ဆောက်လုပ်ရေးについてသံချောင်းဆက်ခြင်း (Rebar gas pressure welding) とStud welding ကဲ့သို့သော 圧接 (Pressure welding) をလည်း အသုံးပြုは။",
      memoryTipMY: "Pressure welding をလည်း သုံးは။"
    }
  },
  {
    id: "2022-24",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>硬さ<rt>かたさ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာのမာကျောမှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>合金元素<rt>ごうきんげんそ</rt></ruby>と<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>で<ruby>定まる<rt>さだまる</rt></ruby>。", textMY: "(1) Alloy element () と は" },
      { id: 2, textJP: "(2) HAZは<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>成分<rt>せいぶん</rt></ruby>で<ruby>定まる<rt>さだまる</rt></ruby>。", textMY: "(2) HAZ () のはBase metal の は" },
      { id: 3, textJP: "(3) <ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>は<ruby>ボンド部<rt>ぼんどぶ</rt></ruby>で<ruby>示される<rt>しめされる</rt></ruby>。", textMY: "(3) をBond line () については" },
      { id: 4, textJP: "(4) <ruby>予熱<rt>よねつ</rt></ruby>を<ruby>施す<rt>ほどこす</rt></ruby>と<ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>は<ruby>大きく<rt>おおきく</rt></ruby>なる。", textMY: "(4) Preheat 場合は は" },
      { id: 5, textJP: "(5) Ceqは<ruby>硬さ<rt>かたさ</rt></ruby>の<ruby>指標<rt>しひょう</rt></ruby>である。", textMY: "(5) Carbon Equivalent (Ceq) はのは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予熱 (Preheating)",
      reasonMY: "Preheat (予熱) လုပ်ခြင်းはအအေးခံနှုန်းをနှေးကွေးစေသောကြောင့် မာကျောမှု (Hardness) をလျှော့ချပေးは။ ပိုကြီးလာはဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "အပူပေးရင် အေးတာနှေးပြီး ပျော့သွားမယ်。"
    }
  },
  {
    id: "2022-25",
    questionJP: "<ruby>ガスシールド溶接<rt>がすしーるどようせつ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas welding とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>外部ガス<rt>がいぶがす</rt></ruby>で<ruby>遮蔽<rt>しゃへい</rt></ruby>する。", textMY: "(1)  Gas でと は" },
      { id: 2, textJP: "(2) <ruby>自動送給<rt>じどうそうきゅう</rt></ruby>される。", textMY: "(2) Wire を は" },
      { id: 3, textJP: "(3) <ruby>水素含有量<rt>すいそがんゆうりょう</rt></ruby>が<ruby>少ない<rt>すくない</rt></ruby>。", textMY: "(3)   は" },
      { id: 4, textJP: "(4) <ruby>防風対策<rt>ぼうふうたいさく</rt></ruby>は5m/s <ruby>以上<rt>いじょう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>。", textMY: "(4)  5 m/s   は" },
      { id: 5, textJP: "(5) <ruby>炭酸ガス<rt>たんさんがす</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(5) CO2 (Carbon Dioxide) gas をは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 防風対策 (Wind Protection)",
      reasonMY: "Gas welding (ဥပမာ CO2) အတွက် လေတိုက်နှုန်း ၂ m/s (2m/s) ကျော်လျှင်ပင် Shielding gas လွင့်သွားနိုင်သでအကာအကွယ် လိုအပ်は။",
      memoryTipMY: "လေ ၂ မီတာ ကျော်ရင် အကာအကွယ် လိုပြီ。"
    }
  },
  {
    id: "2022-26",
    questionJP: "<ruby>脆性破壊<rt>ぜいせいはかい</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Brittle Fracture (ကြွပ်ဆတ်ကျိုးပဲ့ခြင်း) とပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>変形<rt>へんけい</rt></ruby>が<ruby>小さい<rt>ちいさい</rt></ruby>。", textMY: "(1)  (Deformation ) は" },
      { id: 2, textJP: "(2) <ruby>低温<rt>ていおん</rt></ruby>で<ruby>発生しやすい<rt>はっせいしやすい</rt></ruby>。", textMY: "(2) については" },
      { id: 3, textJP: "(3) <ruby>靭性<rt>じんせい</rt></ruby>が<ruby>低い<rt>ひくい</rt></ruby>と<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "(3) Toughness ()  は" },
      { id: 4, textJP: "(4) <ruby>防止<rt>ぼうし</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "(4)  は" },
      { id: 5, textJP: "(5) <ruby>条件<rt>じょうけん</rt></ruby>1つで<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "(5) では" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 脆性破壊の条件 (Conditions for Brittle Fracture)",
      reasonMY: "Brittle Fracture はအပူချိန်、အားသက်ရောက်မှုနှုန်း (Strain rate)、မျက်နှာပြင်ချို့ယွင်းချက် (Notch) စသည့် အချက်များစွာ ပေါင်းစပ်မှ ဖြစ်ပေါ်ခြင်းဖြစ်は။",
      memoryTipMY: "အချက်များစွာ ပေါင်းစပ်မှ ဖြစ်は။"
    }
  },
  {
    id: "2022-27",
    questionJP: "<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ပစ္စည်းများとပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆棒<rt>ひふくぼう</rt></ruby>は<ruby>乾燥<rt>かんそう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "(1) Covered Electrode () を は" },
      { id: 2, textJP: "(2) <ruby>フラックスワイヤ<rt>ふらっくすわいや</rt></ruby>は<ruby>内部<rt>ないぶ</rt></ruby>に<ruby>粉末<rt>ふんまつ</rt></ruby>がある。", textMY: "(2) Flux-cored wire のについて  は" },
      { id: 3, textJP: "(3) 490<ruby>級<rt>きゅう</rt></ruby>はYGW11を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(3) 490 Grade についてYGW11 をは" },
      { id: 4, textJP: "(4) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>は<ruby>脱酸元素<rt>だっさんげんそ</rt></ruby>を<ruby>含む<rt>ふくむ</rt></ruby>。", textMY: "(4) Solid wire について  (Deoxidizers) は" },
      { id: 5, textJP: "(5) <ruby>スラグ系<rt>すらぐけい</rt></ruby>は<ruby>外観<rt>がいかん</rt></ruby>が<ruby>劣る<rt>おとる</rt></ruby>。", textMY: "(5) Slag type は (Weld appearance) は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - スラグ系フラックスワイヤ (Slag Type Flux-cored Wire)",
      reasonMY: "Slag type flux wire はအခြားနည်းလမ်းများထက် ပိုမိုကောင်းမွန်ပြီး လှပသော ဂဟေမျက်နှာပြင် (Weld appearance) をရရှိစေနိုင်は။",
      memoryTipMY: "Slag type が ပိုလှは။"
    }
  },
  {
    id: "2022-28",
    questionJP: "<ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သွပ်ရည်စိမ်ခြင်းとပတ်သက်၍ မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>けがき<rt>けがき</rt></ruby>は<ruby>油性マーカー<rt>ゆせいまーかー</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(1) Marking   Marker (Oil-based marker) しなければならない。" },
      { id: 2, textJP: "(2) <ruby>めっき槽<rt>めっきそう</rt></ruby>に<ruby>一度に浸漬<rt>いちどにしんせき</rt></ruby>する。", textMY: "(2)   しなければならない。" },
      { id: 3, textJP: "(3) <ruby>板厚差<rt>いたあつさ</rt></ruby>は2<ruby>倍程度<rt>ばいていど</rt></ruby>とする。", textMY: "(3)    は" },
      { id: 4, textJP: "(4) <ruby>形状<rt>けいじょう</rt></ruby>は<ruby>対称形<rt>たいしょうけい</rt></ruby>が<ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "(4)   (Symmetrical) が は" },
      { id: 5, textJP: "(5) <ruby>溶接量<rt>ようせつりょう</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "(5) をしなければならない。" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - めっきのけがき (Marking for Galvanizing)",
      reasonMY: "သွပ်ရည်စိမ်မည့်ပစ္စည်းများについてဆီပါသော Marker (Oil marker) သုံး場合はထိုနေရာについてသွပ်ရည်မကပ်ဘဲ ဖြစ်တတ်は။ ထို့ကြောင့် သီးခြားဆေး သို့မဟုတ် ခဲတံ သုံးしなければならない。",
      memoryTipMY: "ဆီစုတ်တံ (Oil marker) မသုံးရပါ။"
    }
  },
  {
    id: "2022-29",
    questionJP: "<ruby>仕分け・輸送<rt>しわけ・ゆそう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပစ္စည်းခွဲခြားခြင်းとသယ်ယူပို့ဆောင်ရေးについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>製品符号<rt>せいひんふごう</rt></ruby>は<ruby>容易に読み取れる<rt>よういによみとれる</rt></ruby>ようにする。", textMY: "(1) を しなければならない。" },
      { id: 2, textJP: "(2) 5t<ruby>超<rt>ちょう</rt></ruby>は<ruby>重量を表示<rt>じゅうりょうをひょうじ</rt></ruby>する。", textMY: "(2)   をしなければならない。" },
      { id: 3, textJP: "(3) <ruby>寸法・重量<rt>すんぽう・じゅうりょう</rt></ruby>を<ruby>計画<rt>けいかく</rt></ruby>する。", textMY: "(3) とをしなければならない。" },
      { id: 4, textJP: "(4) <ruby>輸送経路<rt>ゆそうけいろ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "(4) をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>最上段のみ<rt>さいじょうだんのみ</rt></ruby>を<ruby>緊結<rt>きんけつ</rt></ruby>する。", textMY: "(5) を しなければならない。" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 輸送の安全 (Transportation Safety)",
      reasonMY: "သယ်ယူပို့ဆောင်ရေးについてပစ္စည်းများ ပြုတ်မကျစေရန် အလွှာအားလုံးをခိုင်မြဲစွာ ချည်နှောင် (Lashing) しなければならない。",
      memoryTipMY: "အကုန်လုံးをသေချာချည်しなければならない。"
    }
  },
  {
    id: "2022-30",
    questionJP: "<ruby>品質マネジメント<rt>ひんしつまねじめんと</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေးစီမံခန့်ခွဲမှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>全員<rt>ぜんいん</rt></ruby>がPDCAを<ruby>組織的<rt>そしきてき</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(1)  PDCA (Plan-Do-Check-Act) を しなければならない。" },
      { id: 2, textJP: "(2) <ruby>スパイラルアップ<rt>すぱいらるあっぷ</rt></ruby>で<ruby>改善<rt>かいぜん</rt></ruby>する。", textMY: "(2) Spiral-up ( ) でしなければならない。" },
      { id: 3, textJP: "(3) <ruby>品質管理<rt>ひんしつかんり</rt></ruby>より<ruby>広い<rt>ひろい</rt></ruby><ruby>意味<rt>いみ</rt></ruby>である。", textMY: "(3) QC   は" },
      { id: 4, textJP: "(4) プロセスを<ruby>重視<rt>じゅうし</rt></ruby>する。", textMY: "(4) をは" },
      { id: 5, textJP: "(5) <ruby>手直し<rt>てなおし</rt></ruby>することが<ruby>最優先<rt>さいゆうせん</rt></ruby>である。", textMY: "(5) をはは" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予防と処置 (Prevention vs. Correction)",
      reasonMY: "အရည်အသွေးစီမံမှုについてမှားယွင်းပြီးမှ ပြင်ဆင်ခြင်းထက် မမှားအောင် ကြိုတင်ကာကွယ်ခြင်း (予防) が ပိုမိုအရေးကြီးは။",
      memoryTipMY: "မမှားအောင်အရင်လုပ်ပါ။"
    }
  },
  {
    id: "2022-31",
    questionJP: "<ruby>品質管理活動<rt>ひんしつかんりかつどう</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အရည်အသွေးစီမံခန့်ခွဲမှု လှုပ်ရှားမှုများについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>工程<rt>こうてい</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "(1) をしなければならない。" },
      { id: 2, textJP: "(2) <ruby>自主的<rt>じしゅてき</rt></ruby>に<ruby>是正<rt>ぜせい</rt></ruby>した<ruby>後<rt>あと</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>する。", textMY: "(2)   しなければならない。" },
      { id: 3, textJP: "(3) <ruby>判定基準<rt>はんていきじゅん</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>にする。", textMY: "(3)  (Criteria) をしなければならない。" },
      { id: 4, textJP: "(4) <ruby>設備<rt>せつび</rt></ruby>を<ruby>維持管理<rt>いじかんり</rt></ruby>する。", textMY: "(4) をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>誤用<rt>ごよう</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>する。", textMY: "(5) をしなければならない。" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 不適合の報告 (Reporting Non-conformities)",
      reasonMY: "မをက်ညီမှု (Non-conformity) တွေ့ရှိ場合はအရင်ဦးဆုံး အစီရင်ခံပြီးမှ ကြီးကြပ်သူのညွှန်ကြားချက်အတိုင်း ပြင်ဆင်ရမည်။ မိမိသဘောでမပြင်ရပါ။",
      memoryTipMY: "အရင်ပြောပြီးမှ ပြင်しなければならない。"
    }
  },
  {
    id: "2022-32",
    questionJP: "QC7つ<ruby>道具<rt>どうぐ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "QC Tools ၇ မျိုးについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) パレート<ruby>図<rt>ず</rt></ruby>は<ruby>累積度数<rt>るいせきどすう</rt></ruby>を<ruby>示す<rt>しめす</rt></ruby>。", textMY: "(1) Pareto chart はをは" },
      { id: 2, textJP: "(2) <ruby>特性要因図<rt>とくせいよういんず</rt></ruby>は<ruby>折れ線グラフ<rt>おれせんぐらふ</rt></ruby>である。", textMY: "(2) Characteristic diagram (Fishbone) は (Line graph) は" },
      { id: 3, textJP: "(3) ヒストグラムは<ruby>バラツキ<rt>ばらつき</rt></ruby>を<ruby>示す<rt>しめす</rt></ruby>。", textMY: "(3) Histogram はをは" },
      { id: 4, textJP: "(4) チェックシートは<ruby>状況把握<rt>じょうきょうはあく</rt></ruby>に<ruby>役立つ<rt>やくだつ</rt></ruby>。", textMY: "(4) Check sheet は  は" },
      { id: 5, textJP: "(5) <ruby>管理図<rt>かんりず</rt></ruby>は<ruby>安定状態<rt>あんていじょうたい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "(5) Control chart はをは" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 特性要因図 (Fishbone Diagram)",
      reasonMY: "特性要因図 (Fishbone diagram) はအကြောင်းとအကျိုးをပြသော ပုံစံဖြစ်ပြီး မျဉ်းကွေးဂရပ် (Line graph) မဟုတ်ပါ။",
      memoryTipMY: "Fishbone が ငါးရိုးပုံစံ ဖြစ်は။"
    }
  },
  {
    id: "2022-33",
    questionJP: "<ruby>成分分析試験<rt>せいぶんぶんせきしけん</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဓာတုဖွဲ့စည်းမှု စစ်ဆေးခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>化学成分<rt>かがくせいぶん</rt></ruby>を<ruby>調べる<rt>しらべる</rt></ruby>。", textMY: "(1) をは" },
      { id: 2, textJP: "(2) <ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>と<ruby>製品分析<rt>せいひんぶんせき</rt></ruby>がある。", textMY: "(2) について (Ladle analysis) と (Product analysis)   は" },
      { id: 3, textJP: "(3) <ruby>証明書<rt>しょうめいしょ</rt></ruby>は<ruby>溶鋼分析<rt>ようこうぶんせき</rt></ruby>による。", textMY: "(3) Mill sheet () はについて  は" },
      { id: 4, textJP: "(4) <ruby>結果<rt>けっか</rt></ruby>は<ruby>常に一致<rt>つねにいっち</rt></ruby>する。", textMY: "(4)     は" },
      { id: 5, textJP: "(5) <ruby>不明<rt>ふめい</rt></ruby>は<ruby>調べる<rt>しらべる</rt></ruby>必要がある。", textMY: "(5) 場合は は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "အရည်ဖျော်ချိန် (溶鋼) とထုတ်ကုန်ဖြစ်ချိန် (製品) についてစစ်ဆေး場合はနေရာとအချိန်ကွဲပြားသでရလဒ် အနည်းငယ် ကွဲပြားနိုင်は။ 'အမြဲတမ်းတူは' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "ရလဒ် အနည်းငယ် ကွဲပြားနိုင်は။"
    }
  },
  {
    id: "2022-34",
    questionJP: "<ruby>社内検査<rt>しゃないけんさ</rt></ruby>で<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ရုံについてးစစ်ဆေးမှုについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း。",
    options: [
      { id: 1, textJP: "(1) <ruby>成績表<rt>せいせきひょう</rt></ruby>を<ruby>記録<rt>きろく</rt></ruby>する。", textMY: "(1) をしなければならない。" },
      { id: 2, textJP: "(2) <ruby>設計寸法<rt>せっけいすんぽう</rt></ruby>との<ruby>差<rt>さ</rt></ruby>を<ruby>記録<rt>きろく</rt></ruby>する。", textMY: "(2) とをしなければならない。" },
      { id: 3, textJP: "(3) <ruby>柱の長さ<rt>はしらのながさ</rt></ruby>は<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>とする。", textMY: "(3) のを (Sampling inspection) しなければならない。" },
      { id: 4, textJP: "(4) <ruby>溶接部<rt>ようせつぶ</rt></ruby>は<ruby>すべて対象<rt>すべてたいしょう</rt></ruby>とする。", textMY: "(4) をしなければならない。" },
      { id: 5, textJP: "(5) <ruby>要領書<rt>ようりょうしょ</rt></ruby>を<ruby>収録<rt>しゅうろく</rt></ruby>する。", textMY: "(5) をしなければならない。" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 寸法検査 (Dimensional Inspection)",
      reasonMY: "တိုင်とရက်မများのအတိုင်းအတာ (Dimensions) をအားလုံး (全数検査 - 100% Inspection) စစ်ဆေးရမည်။ နမူနာကောက်၍ မရပါ။",
      memoryTipMY: "အတိုင်းအတာをအားလုံး စစ်しなければならない。"
    }
  }
];
