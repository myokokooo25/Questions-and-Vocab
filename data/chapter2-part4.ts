
import { StudyCardData } from '../types';

export const chapter2Part4Data: StudyCardData[] = [
  {
    id: "2-46",
    questionJP: "<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>およびパス<ruby>間温度<rt>かんおんど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Heat Input နှင့် Interpass Temperature နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は、<ruby>溶接電流<rt>ようせつでんりゅう</rt></ruby>およびアーク<ruby>電圧<rt>でんあつ</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>し、<ruby>溶接速度<rt>ようせつそくど</rt></ruby>に<ruby>反比例<rt>はんぴれい</rt></ruby>する。", textMY: "Heat input သည် current နှင့် voltage နှင့် တိုက်ရိုက်အချိုးကျပြီး အရှိန်နှင့် ပြောင်းပြန်အချိုးကျသည်။" },
      { id: 2, textJP: "(2) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は、<ruby>単位溶接長さ<rt>たんいようせつながさ</rt></ruby>あたりの<ruby>溶接<rt>ようせつ</rt></ruby>で<ruby>消費<rt>しょうひ</rt></ruby>される<ruby>電気<rt>でんき</rt></ruby>エネルギー<ruby>量<rt>りょう</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>している。", textMY: "Heat input ဆိုသည်မှာ ယူနစ်အရှည်တစ်ခုအတွက် သုံးလိုက်သော လျှပ်စစ်စွမ်းအင် ပမာဏ ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>は<ruby>溶融状態<rt>ようゆうじょうたい</rt></ruby>から<ruby>凝固<rt>ぎょうこ</rt></ruby>した<ruby>鋳造組織<rt>ちゅうぞうそしき</rt></ruby>であり、その<ruby>強度、延性、靭性<rt>きょうど、えんせい、じんせい</rt></ruby>などの<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は、<ruby>合金元素<rt>ごうきんげんそ</rt></ruby>の<ruby>含有量<rt>がんゆうりょう</rt></ruby>と<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", textMY: "ဂဟေသား၏ ဂုဏ်သတ္တိများသည် ပါဝင်ပစ္စည်းနှင့် အအေးခံနှုန်းအပေါ် မူတည်သည်။" },
      { id: 4, textJP: "(4) <ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>は<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>や<ruby>靭性<rt>じんせい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>える。しかし、<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>を<ruby>直接測定<rt>ちょくせつそくてい</rt></ruby>することは<ruby>困難<rt>こんなん</rt></ruby>なので、パス<ruby>間温度<rt>かんおんど</rt></ruby>を<ruby>代用特性<rt>だいようとくせい</rt></ruby>として<ruby>用<rt>もち</rt></ruby>いている。", textMY: "အအေးခံနှုန်းကို တိုက်ရိုက်တိုင်းရန် ခက်သဖြင့် interpass temp ကို ကိုယ်စားပြုအဖြစ် သုံးသည်။" },
      { id: 5, textJP: "(5) パス<ruby>間温度<rt>かんおんど</rt></ruby>と<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は、その<ruby>数値<rt>すうち</rt></ruby>が<ruby>小さい<rt>ちいさい</rt></ruby>ほど<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>が<ruby>上昇<rt>じょうしょう</rt></ruby>するので、できる<ruby>限<rt>かぎ</rt></ruby>り<ruby>小さく<rt>ちいさく</rt></ruby>して<ruby>溶接<rt>ようせつ</rt></ruby>する。", textMY: "အပူချိန်နှင့် heat input နည်းလေ ခိုင်မာမှုတက်လေဖြစ်သဖြင့် တတ်နိုင်သမျှ အနည်းဆုံးထားရမည်ဟု ဆိုခြင်း။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 適正な管理",
      reasonMY: "Heat Input နှင့် Interpass Temperature ကို 'တတ်နိုင်သမျှ အနည်းဆုံး' ထားရှိရမည် မဟုတ်ပါ။ အလွန်နည်းပါက စိမ့်ဝင်မှုမရှိခြင်း (Lack of penetration) နှင့် အအေးမြန်ပြီး ကွဲအက်ခြင်း (Cold cracking) တို့ ဖြစ်နိုင်သဖြင့် သတ်မှတ်ထားသော ဘောင်အတွင်း ရှိရန်သာ လိုအပ်သည်။",
      memoryTipMY: "နည်းလွန်းရင်လည်း မကောင်းပါဘူး။ သင့်တော်ရုံ (Optimum) ပဲ ရှိရမယ်။"
    }
  },
  {
    id: "2-47",
    questionJP: "<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>およびパス<ruby>間温度<rt>かんおんど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Heat Input နှင့် Interpass Temperature နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなり、<ruby>低温割れ<rt>ていおんわれ</rt></ruby>の<ruby>防止<rt>ぼうし</rt></ruby>に<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "Heat input များလေ အအေးနှေးလေဖြစ်ပြီး Cold Cracking ကို ကာကွယ်နိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>は、540℃での<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>や、800℃から500℃までの<ruby>冷却時間<rt>れいきゃくじかん</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す。", textMY: "အအေးခံနှုန်းကို ၅၄၀ ဒီဂရီရှိနှုန်း သို့မဟုတ် ၈၀၀ မှ ၅၀၀ အထိ ကြာချိန်ဖြင့် ပြသည်။" },
      { id: 3, textJP: "(3) <ruby>パス数<rt>ぱすすう</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>場合<rt>ばあい</rt></ruby>の<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は、ルート<ruby>間隔<rt>かんかく</rt></ruby>が<ruby>変化<rt>へんか</rt></ruby>しても<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けない。", textMY: "Pass အရေအတွက်တူပါက root gap ပြောင်းလဲသော်လည်း heat input မပြောင်းလဲပါဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) パス<ruby>間温度<rt>かんおんど</rt></ruby>は、<ruby>次<rt>つぎ</rt></ruby>のパスを<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>直前<rt>ちょくぜん</rt></ruby>の<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>および<ruby>近接<rt>きんせつ</rt></ruby>する<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>と<ruby>定義<rt>ていぎ</rt></ruby>されている。", textMY: "Interpass temperature ဆိုသည်မှာ နောက်တစ်လွှာမဆက်မီ အပူချိန်ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>溶接金属強度<rt>ようせつきんぞくきょうど</rt></ruby>を<ruby>規格値以上<rt>きかくちいじょう</rt></ruby>にするために、<ruby>入熱<rt>にゅうねつ</rt></ruby>・パス<ruby>間温度<rt>かんおんど</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>決<rt>き</rt></ruby>められている。", textMY: "ခိုင်မာမှုမှန်ကန်ရန် heat input နှင့် interpass temp တို့ကို သတ်မှတ်ထားသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ルート間隔の影響",
      reasonMY: "Root gap (ルート間隔) ပြောင်းလဲပါက ဂဟေဖြည့်ရမည့် ပမာဏ ပြောင်းလဲသွားသဖြင့်၊ ၎င်းသည် heat input (溶接入熱) အပေါ် သက်ရောက်မှု ရှိသည်။ 'သက်ရောက်မှုမရှိ' ဟူသော ဖော်ပြချက်မှာ မှားယွင်းသည်။",
      memoryTipMY: "Gap ကျယ်ရင် အပူပိုဝင်ပါတယ်။ (More gap = More heat input)။"
    }
  },
  {
    id: "2-48",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>組織<rt>そしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ ဖွဲ့စည်းပုံနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>は、<ruby>溶融状態<rt>ようゆうじょうたい</rt></ruby>から<ruby>凝固<rt>ぎょうこ</rt></ruby>した<ruby>鋳造組織<rt>ちゅうぞうそしき</rt></ruby>であり、<ruby>強度、延性、靭性<rt>きょうど、えんせい、じんせい</rt></ruby>などの<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は<ruby>合金元素<rt>ごうきんげんそ</rt></ruby>の<ruby>含有量<rt>がんゆうりょう</rt></ruby><ruby>のみによって定まる<rt>のみによってさだまる</rt></ruby>。", textMY: "ဂဟေသား၏ ဂုဏ်သတ္တိများသည် ၎င်းတွင်ပါဝင်သော ပစ္စည်းများ (Alloy elements) ပေါ်တွင်သာ မူတည်သည်ဟု ဆိုခြင်း။" },
      { id: 2, textJP: "(2) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>は、<ruby>溶融<rt>ようゆう</rt></ruby>した<ruby>母材<rt>ぼざい</rt></ruby>と<ruby>溶接ワイヤ<rt>ようせつわいや</rt></ruby>や<ruby>被覆材<rt>ひふくざい</rt></ruby>、または<ruby>フラックス<rt>ふらっくす</rt></ruby>から<ruby>移行<rt>いこう</rt></ruby>した<ruby>金属<rt>きんぞく</rt></ruby>が<ruby>混<rt>ま</rt></ruby>じりあって<ruby>作<rt>つく</rt></ruby>られた<ruby>溶融金属<rt>ようゆうきんぞく</rt></ruby>が<ruby>凝固<rt>ぎょうこ</rt></ruby>したものである。", textMY: "Weld metal သည် base metal နှင့် wire တို့ အရည်ပျော်ရောနှောပြီး ပြန်ခဲသွားသောအရာဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>結晶<rt>けっしょう</rt></ruby>は、<ruby>ボンド部<rt>ぼんどぶ</rt></ruby>から<ruby>溶接金属中心部<rt>ようせつきんぞくちゅうしんぶ</rt></ruby>または<ruby>表面中心部<rt>ひょうめんちゅうしんぶ</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって<ruby>成長<rt>せいちょう</rt></ruby>する。", textMY: "Crystal များသည် ဘေးဘက် (Bond line) မှ အလယ်ဗဟိုသို့ ဦးတည်ပြီး ကြီးထွားလာသည်။" },
      { id: 4, textJP: "(4) <ruby>溶接熱影響部<rt>ようせつねつえいきょうぶ</rt></ruby>は、<ruby>溶接熱<rt>ようせつねつ</rt></ruby>によって<ruby>加熱<rt>かねつ</rt></ruby>された<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>領域<rt>りょういき</rt></ruby>で、<ruby>最高加熱温度、冷却速度<rt>さいこうかねつおんど、れいきゃくそくど</rt></ruby>がそれぞれの<ruby>部位<rt>ぶい</rt></ruby>で<ruby>異<rt>こと</rt></ruby>なるので、<ruby>部位<rt>ぶい</rt></ruby>によって<ruby>生成<rt>せいせい</rt></ruby>される<ruby>組織<rt>そしき</rt></ruby>も<ruby>異<rt>こと</rt></ruby>なる。", textMY: "HAZ ဧရိယာတွင် နေရာအလိုက် အပူချိန်နှင့် အအေးနှုန်းကွာသဖြင့် ဖွဲ့စည်းပုံလည်း ကွဲပြားသည်။" },
      { id: 5, textJP: "(5) <ruby>炭素当量<rt>たんそとうりょう</rt></ruby>は、<ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>におよぼす<ruby>鋼<rt>はがね</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>について、<ruby>炭素<rt>たんそ</rt></ruby>と<ruby>合金元素<rt>ごうきんげんそ</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>炭素含有量<rt>たんそがんゆうりょう</rt></ruby>に<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えて<ruby>指標化<rt>しひょうか</rt></ruby>したものである。", textMY: "Carbon Equivalent (Ceq) သည် သံမဏိ၏ မာကျောမှုကို တိုင်းတာသည့် အညွှန်းကိန်းဖြစ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接金属の性質",
      reasonMY: "ဂဟေသား (Weld metal) ၏ ဂုဏ်သတ္တိများသည် ၎င်းတွင်ပါဝင်သော ပစ္စည်းများ (Alloy elements) အပြင် 'အအေးခံနှုန်း' (冷却速度) အပေါ်တွင်လည်း မူတည်ပါသည်။ ထို့ကြောင့် 'သာလျှင်' ဟု ဖော်ပြထားသော (၁) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "ဂဟေသားရဲ့ ဂုဏ်သတ္တိဟာ ပါဝင်ပစ္စည်းအပြင် အအေးခံနှုန်းပေါ်မှာလည်း မူတည်ပါတယ်။"
    }
  },
  {
    id: "2-49",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာ၏ စက်မှုပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>は、<ruby>溶融状態<rt>ようゆうじょうたい</rt></ruby>から<ruby>凝固<rt>ぎょうこ</rt></ruby>した<ruby>鋳造組織<rt>ちゅうぞうそしき</rt></ruby>であり、<ruby>強度、延性、靭性<rt>きょうど、えんせい、じんせい</rt></ruby>などの<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は<ruby>合金元素<rt>ごうきんげんそ</rt></ruby>の<ruby>含有量<rt>がんゆうりょう</rt></ruby>と<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>によって<ruby>定<rt>さだ</rt></ruby>まる。", textMY: "Weld metal ၏ ဂုဏ်သတ္တိများသည် ပါဝင်ပစ္စည်းနှင့် အအေးခံနှုန်းအပေါ် မူတည်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶接熱影響部<rt>ようせつねつえいきょうぶ</rt></ruby>の<ruby>硬<rt>かた</rt></ruby>さは、<ruby>母材<rt>ぼざい</rt></ruby>と<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>と<ruby>冷却速度・最高加熱温度<rt>れいきゃくそくど・さいこうかねつおんど</rt></ruby>によって<ruby>定<rt>さだ</rt></ruby>まる。", textMY: "HAZ ၏ မာကျောမှုသည် base metal ၏ ဓာတုဖွဲ့စည်းပုံနှင့် အအေးနှုန်းပေါ် မူတည်သည်ဟု ဆိုခြင်း။" },
      { id: 3, textJP: "(3) <ruby>予熱<rt>よねつ</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>す<ruby>等<rt>とう</rt></ruby>で<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>くなった<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>は<ruby>小さく<rt>ちいさく</rt></ruby>なる。", textMY: "Preheat လုပ်ခြင်းဖြင့် အအေးနှေးသွားပါက အမြင့်ဆုံး မာကျောမှု တန်ဖိုး ကျဆင်းသွားသည်။" },
      { id: 4, textJP: "(4) <ruby>鋼板表面<rt>こうはんひょうめん</rt></ruby>にビードを<ruby>置<rt>お</rt></ruby>くように<ruby>溶接<rt>ようせつ</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>、<ruby>ボンド部<rt>ぼんどぶ</rt></ruby>に<ruby>最も近い粗粒域<rt>もっともちかいそりゅういき</rt></ruby>で<ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>す。", textMY: "သံပြားပေါ် ဂဟေဆော်လျှင် Bond line နှင့် အနီးဆုံးနေရာတွင် အမာဆုံး ဖြစ်တတ်သည်။" },
      { id: 5, textJP: "(5) <ruby>炭素当量<rt>たんそとうりょう</rt></ruby> (Ceq) は、<ruby>最高硬さ<rt>さいこうかたさ</rt></ruby>におよぼす<ruby>鋼<rt>はがね</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>について、<ruby>炭素<rt>たんそ</rt></ruby>と<ruby>合金元素<rt>ごうきんげんそ</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>炭素含有量<rt>たんそがんゆうりょう</rt></ruby>に<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えて<ruby>指標化<rt>しひょうか</rt></ruby>したものである。", textMY: "Carbon equivalent သည် သံမဏိ၏ မာကျောမှုကို ခန့်မှန်းရန် အညွှန်းကိန်း ဖြစ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - HAZ の硬さ",
      reasonMY: "溶接熱影響部 (HAZ) ၏ မာကျောမှု (Hardness) သည် အဓိကအားဖြင့် '母材' (Base material) ၏ ဓာတုဖွဲ့စည်းပုံပေါ်တွင်သာ မူတည်သည်။ ဂဟေပစ္စည်း (溶接材料) ၏ ဖွဲ့စည်းပုံသည် HAZ ၏ မာကျောမှုအပေါ် သိသိသာသာ သက်ရောက်မှု မရှိပါ။",
      memoryTipMY: "HAZ ဆိုတာ base metal အပိုင်းမို့လို့ base metal (母材) သတ္တိပဲ ကြည့်ရမယ်။"
    }
  },
  {
    id: "2-50",
    questionJP: "アークの<ruby>特性<rt>とくせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Arc ၏ ဝိသေသလက္ခဏာများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接電流<rt>ようせつでんりゅう</rt></ruby>によって<ruby>発生<rt>はっせい</rt></ruby>する<ruby>磁界<rt>じかい</rt></ruby>や<ruby>母材<rt>ぼざい</rt></ruby>に<ruby>残留<rt>ざんりゅう</rt></ruby>した<ruby>磁気<rt>じき</rt></ruby>が、アーク<ruby>柱<rt>ちゅう</rt></ruby>を<ruby>流<rt>なが</rt></ruby>れる<ruby>電流<rt>でんりゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>著<rt>いちじる</rt></ruby>しく<ruby>非対称<rt>ひたいしょう</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>し、<ruby>溶接中<rt>ようせつちゅう</rt></ruby>にアークが<ruby>偏向<rt>へんこう</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>磁気吹き<rt>じきふき</rt></ruby>という。", textMY: "သံလိုက်စက်ကွင်းကြောင့် arc လမ်းကြောင်းလွဲသွားခြင်းကို Magnetic Blow (磁気吹き) ဟု ခေါ်သည်။" },
      { id: 2, textJP: "(2) <ruby>プラズマ気流<rt>ぷらずまきりゅう</rt></ruby>は<ruby>母材<rt>ぼざい</rt></ruby>から<ruby>電極<rt>でんきょく</rt></ruby>に<ruby>向<rt>む</rt></ruby>かう<ruby>高速<rt>こうそく</rt></ruby>のガス<ruby>気流<rt>きりゅう</rt></ruby>で、<ruby>横向姿勢<rt>よこむきしせい</rt></ruby>や<ruby>上向姿勢<rt>うわむきしせい</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>において、<ruby>溶滴<rt>ようてき</rt></ruby>が<ruby>母材<rt>ぼざい</rt></ruby>に<ruby>移行<rt>いこう</rt></ruby>するのを<ruby>妨<rt>さまた</rt></ruby>げる<ruby>力<rt>ちから</rt></ruby>となっている。", textMY: "Plasma လေစီးကြောင်းသည် base metal မှ electrode သို့ ဦးတည်စီးဆင်းပြီး ဂဟေစက်များကို အနှောင့်အယှက်ပေးသည်ဟု ဆိုခြင်း။" },
      { id: 3, textJP: "(3) アークはトーチの<ruby>軸方向<rt>じくほうこう</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>する<ruby>傾向<rt>けいこう</rt></ruby>があり、アークの<ruby>硬直性<rt>こうちょくせい</rt></ruby>と<ruby>呼ばれる<rt>よばれる</rt></ruby>。", textMY: "Arc သည် torch ၏ ဝင်ရိုးအတိုင်း တည့်တည့်ထွက်ပေါ်လေ့ရှိပြီး ၎င်းကို Stiffness (硬直性) ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) アークは<ruby>冷却作用<rt>れいきゃくさよう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるとその<ruby>断面積<rt>だんめんせき</rt></ruby>を<ruby>収縮<rt>しゅうしゅく</rt></ruby>させ、<ruby>熱損失<rt>ねつそんしつ</rt></ruby>を<ruby>抑制<rt>よくせい</rt></ruby>しようとする。この<ruby>作用<rt>さよう</rt></ruby>は<ruby>熱的ピンチ効果<rt>ねつてきぴんちこうか</rt></ruby>と<ruby>呼ばれる<rt>よばれる</rt></ruby>。", textMY: "အအေးဒဏ်ကြောင့် arc ၏ ဖြတ်ပိုင်းကျဉ်းမြောင်းသွားခြင်းကို Thermal pinch effect ဟု ခေါ်သည်။" },
      { id: 5, textJP: "(5) <ruby>導体<rt>どうたい</rt></ruby>に<ruby>電気<rt>でんき</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れると<ruby>電磁力<rt>でんじりょく</rt></ruby>により<ruby>断面<rt>だんめん</rt></ruby>を<ruby>収縮<rt>しゅうしゅく</rt></ruby>させる<ruby>力<rt>ちから</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。この<ruby>力<rt>ちから</rt></ruby>を<ruby>電磁ピンチ力<rt>でんじぴんちりょく</rt></ruby>という。", textMY: "လျှပ်စီးကြောင့် ဖြတ်ပိုင်းကျုံ့သွားစေသောအားကို Electromagnetic pinch force ဟု ခေါ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - プラズマ気流 (Plasma Jet)",
      reasonMY: "Plasma Jet (プラズマ気流) သည် '電極' (Electrode) မှ '母材' (Base metal) ဆီသို့ အရှိန်ပြင်းစွာ စီးဆင်းခြင်းဖြစ်သည်။ ၎င်းသည် ဂဟေစက် (Droplets) များကို base metal ဆီသို့ ရောက်အောင် အားပေးကူညီသော အားဖြစ်သည်။ 'ပြောင်းပြန်စီးဆင်းသည်' သို့မဟုတ် 'နှောင့်ယှက်သည်' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "Arc မီးတောက်က အပေါ်ကနေ အောက်ကို မှုတ်ထုတ်ပြီး ဂဟေဆက်တာကို ကူညီပေးတယ်။"
    }
  },
  {
    id: "2-51",
    questionJP: "<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ပစ္စည်းများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>低水素系溶接棒<rt>ていすいそけいようせつぼう</rt></ruby>は、<ruby>溶接金属中<rt>ようせつきんぞくちゅう</rt></ruby>の<ruby>拡散性水素量<rt>かくさんせいすいそりょう</rt></ruby>を<ruby>少なくする<rt>すくなくする</rt></ruby>ことを<ruby>目的<rt>もくてき</rt></ruby>とした<ruby>溶接棒<rt>ようせつぼう</rt></ruby>であり、<ruby>被覆材<rt>ひふくざい</rt></ruby>を<ruby>高温<rt>こうおん</rt></ruby>で<ruby>乾燥<rt>かんそう</rt></ruby>することが<ruby>必須<rt>ひっす</rt></ruby>になる。", textMY: "Low-hydrogen rod သည် ဟိုက်ဒရိုဂျင်နည်းစေရန်ဖြစ်ပြီး အပူချိန်မြင့်မြင့်ဖြင့် အခြောက်ခံရန် လိုအပ်သည်။" },
      { id: 2, textJP: "(2) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いられる<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>は、<ruby>活性ガス<rt>かっせいがす</rt></ruby>に<ruby>分類<rt>ぶんるい</rt></ruby>される。", textMY: "CO2 gas ကို ဓာတ်ပြုနိုင်သော gas (Active gas) အဖြစ် သတ်မှတ်သည်။" },
      { id: 3, textJP: "(3) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>は、<ruby>溶接ワイヤ<rt>ようせつわいや</rt></ruby>のミルシートによって<ruby>確認<rt>かくにん</rt></ruby>することができる。", textMY: "ဂဟေသား၏ ဓာတုဖွဲ့စည်းပုံကို wire ၏ mill sheet ဖြင့်သာ အတည်ပြုနိုင်သည်ဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) <ruby>溶着速度<rt>ようちゃくそくど</rt></ruby>は、<ruby>被覆アーク溶接棒、ソリッドワイヤ、スラグ系フラックスワイヤ、メタル系フラックスワイヤ<rt>ひふくあーくようせつぼう、そりっどわいや、すらぐけいふらっくすわいや、めたるけいふらっくすわいや</rt></ruby>の<ruby>順<rt>じゅん</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "ဂဟေတင်နှုန်း (Deposition rate) မှာ rod, solid wire, flux wire အစဉ်အတိုင်း ပိုများလာသည်။" },
      { id: 5, textJP: "(5) <ruby>サブマージアーク溶接<rt>さぶまーじあーくようせつ</rt></ruby>の<ruby>溶着金属<rt>ようちゃくきんぞく</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は、<ruby>溶接ワイヤ<rt>ようせつわいや</rt></ruby>と<ruby>フラックス<rt>ふらっくす</rt></ruby>の<ruby>組合せ<rt>くみあわせ</rt></ruby>によって<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "SAW ၏ ဂဟေသားဂုဏ်သတ္တိမှာ wire နှင့် flux ပေါင်းစပ်မှုအပေါ် မူတည်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接金属の成分確認",
      reasonMY: "溶接金属 (Weld metal) ၏ ဓာတုဖွဲ့စည်းပုံသည် '溶接ワイヤ' (Wire) သာမက '母材' (Base metal) နှင့် အရည်ပျော်ရောနှောမှု (Dilution) အပေါ်တွင်လည်း မူတည်သည်။ ထို့ကြောင့် wire ၏ mill sheet တစ်ခုတည်းဖြင့် weld metal ၏ ဖွဲ့စည်းပုံကို အပြည့်အဝ အတည်ပြု၍ မရပါ။",
      memoryTipMY: "ဂဟေသားဆိုတာ wire ရော base metal ရော ပေါင်းထားတာမို့ စာရွက်တစ်ရွက်တည်းနဲ့ မရပါဘူး။"
    }
  },
  {
    id: "2-52",
    questionJP: "<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ပစ္စည်းများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>は、<ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>と<ruby>比較<rt>ひかく</rt></ruby>して<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>の<ruby>水素含有量<rt>すいそがんゆうりょう</rt></ruby>が<ruby>少なく<rt>すくなく</rt></ruby>、<ruby>耐低温割れ性<rt>たいていおんわれせい</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れている。", textMY: "Gas welding သည် rod ဂဟေထက် ဟိုက်ဒရိုဂျင်နည်းသဖြင့် အအေးဒဏ်ကြောင့်အက်ခြင်းကို ပိုခံနိုင်ရည်ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>は、<ruby>脱酸元素<rt>だっさんげんそ</rt></ruby>である<ruby>けい素<rt>そ</rt></ruby>（Si）、<ruby>マンガン<rt>まんがん</rt></ruby>（Mn）を<ruby>多く含<rt>おおくふく</rt></ruby>んでいる。", textMY: "Solid wire တွင် Si နှင့် Mn ကဲ့သို့ အောက်ဆီဂျင်ဖယ်ရှားသော ပစ္စည်းများ များစွာပါသည်။" },
      { id: 3, textJP: "(3) 400N/mm²<ruby>級鋼材<rt>きゅうこうざい</rt></ruby>および490N/mm²<ruby>級鋼材<rt>きゅうこうざい</rt></ruby>を、<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>のみをシールドガスに<ruby>使用<rt>しよう</rt></ruby>して<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>溶接ワイヤ<rt>ようせつわいや</rt></ruby>はYGW11、YGW18を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "400 grade နှင့် 490 grade သံများတွင် CO2 gas သုံးလျှင် YGW11/18 ကို သုံးရမည်။" },
      { id: 4, textJP: "(4) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>のうち、シールドガスに<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>または<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>と<ruby>アルゴンガス<rt>あるごんがす</rt></ruby>の<ruby>混合ガス<rt>こんごうがす</rt></ruby>など<ruby>活性ガス<rt>かっせいがす</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>するものをミグ<ruby>溶接<rt>ようせつ</rt></ruby>という。", textMY: "CO2 ကဲ့သို့သော ဓာတ်ပြုနိုင်သည့် gas (Active gas) သုံးသည့်နည်းကို MIG ဟု ခေါ်သည်ဟု ဆိုခြင်း။" },
      { id: 5, textJP: "(5) <ruby>フラックス入りワイヤ<rt>ふらっくすいりわいや</rt></ruby>は、<ruby>ソリッドワイヤ<rt>そりっどわいや</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べてスパッタが<ruby>少なく<rt>すくなく</rt></ruby>、<ruby>溶接ビード外観<rt>ようせつびーどがいかん</rt></ruby>が<ruby>優<rt>すぐ</rt></ruby>れている。", textMY: "Flux-cored wire သည် solid wire ထက် ဂဟေအမှုန်စင်မှုနည်းပြီး အပြင်ပန်း ပိုလှသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ミグ (MIG) vs マグ (MAG)",
      reasonMY: "MIG 溶接 (Metal Inert Gas) သည် အာဂွန် (Argon) ကဲ့သို့သော ဓာတ်မပြုသည့် 'Inert Gas' ကို သုံးသည်။ 炭酸ガス (CO2) ကဲ့သို့သော ဓာတ်ပြုနိုင်သည့် 'Active Gas' သုံးသည့်နည်းကိုမူ マグ 溶接 (MAG - Metal Active Gas) ဟု ခေါ်သည်။",
      memoryTipMY: "CO2 (Active Gas) သုံးရင် MAG၊ Argon (Inert Gas) သုံးရင် MIG။"
    }
  },
  {
    id: "2-53",
    questionJP: "<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>と<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Heat input နှင့် အအေးခံနှုန်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいと、<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなる。", textMY: "Heat input များလျှင် အအေးခံနှုန်း နှေးသွားသည်။" },
      { id: 2, textJP: "(2) <ruby>パス間温度<rt>ぱすかんおんど</rt></ruby>が<ruby>高い<rt>たかい</rt></ruby>と、<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなる。", textMY: "Interpass temp မြင့်လျှင် အအေးခံနှုန်း နှေးသွားသည်။" },
      { id: 3, textJP: "(3) <ruby>溶接速度<rt>ようせつそくど</rt></ruby>が<ruby>速い<rt>はやい</rt></ruby>と、<ruby>溶接入熱<rt>ようせつにゅうねつ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "ဂဟေဆက်နှုန်း မြန်လျှင် heat input ပိုများလာသည်ဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) <ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>が<ruby>遅い<rt>おそい</rt></ruby>と、<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>は<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "အအေးနှေးလွန်းပါက ဂဟေသားခိုင်မာမှု လျော့ကျသွားနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>母材<rt>ぼざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が<ruby>厚く<rt>あつく</rt></ruby>なると、<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>は<ruby>速く<rt>はやく</rt></ruby>なる。", textMY: "သံပြားအထူ ကြီးလေလေ အအေးခံနှုန်း မြန်လေလေ ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接速度と入熱の関係",
      reasonMY: "Heat Input (入熱) သည် ဂဟေဆက်နှုန်း (速度) နှင့် ပြောင်းပြန် အချိုးကျသည်။ ထို့ကြောင့် ဂဟေဆက်နှုန်း 'မြန်လေလေ' အပူဝင်ရောက်မှု 'နည်းလေလေ' ဖြစ်ရမည်။ 'ပိုများလာသည်' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "အမြန်ဆော်ရင် အပူဝင်ချိန်နည်းလို့ အပူ (Heat) နည်းသွားတယ်။"
    }
  },
  {
    id: "2-54",
    questionJP: "<ruby>溶接変形<rt>ようせつへんけい</rt></ruby>への<ruby>対応<rt>たいおう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေပုံပျက်ခြင်း (Weld Deformation) ဖြေရှင်းနည်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接線方向<rt>ようせつせんほうこう</rt></ruby>の<ruby>収縮<rt>しゅうしゅく</rt></ruby>（<ruby>縦収縮<rt>たてしゅうしゅく</rt></ruby>）に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>収縮量<rt>しゅうしゅくりょう</rt></ruby>をあらかじめ<ruby>見込<rt>みこ</rt></ruby>み、<ruby>見込<rt>みこ</rt></ruby>んだ<ruby>収縮量<rt>しゅうしゅくりょう</rt></ruby>を<ruby>設計寸法<rt>せっけいすんぽう</rt></ruby>に<ruby>加<rt>くわ</rt></ruby>えて<ruby>製作<rt>せいさく</rt></ruby>し、<ruby>最終的<rt>さいしゅうてき</rt></ruby>に<ruby>設計寸法<rt>せっけいすんぽう</rt></ruby>のものを<ruby>得<rt>え</rt></ruby>る<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>するのが<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "အလျားလိုက်ကျုံ့ခြင်းအတွက် ခန့်မှန်းတွက်ချက်ပြီး အလျားပိုထုတ်လုပ်ခြင်းသည် ယေဘုယျနည်းလမ်းဖြစ်သည်ဟု ဆိုခြင်း။" },
      { id: 2, textJP: "(2) <ruby>薄板部品<rt>うすいたぶひん</rt></ruby>の<ruby>座屈変形<rt>ざくつへんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>施工<rt>せこう</rt></ruby>する<ruby>段階<rt>だんかい</rt></ruby>においては、<ruby>溶接量<rt>ようせつりょう</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>すること、<ruby>適正<rt>てきせい</rt></ruby>な<ruby>溶接順序<rt>ようせつじゅんじょ</rt></ruby>を<ruby>選定<rt>せんてい</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "ပါးလွှာသောပြားများ ပုံပျက်ခြင်းအတွက် ဂဟေပမာဏကန့်သတ်ချက်နှင့် အစီအစဉ်သည် အရေးကြီးသည်။" },
      { id: 3, textJP: "(3) <ruby>縦曲り変形<rt>たてまがりへんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>可能<rt>かのう</rt></ruby>な<ruby>限<rt>かぎ</rt></ruby>り<ruby>対称<rt>たいしょう</rt></ruby>に<ruby>配置<rt>はいち</rt></ruby>した<ruby>溶接線<rt>ようせつせん</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>溶接<rt>ようせつ</rt></ruby>することが<ruby>基本<rt>きほん</rt></ruby>である。", textMY: "အလျားလိုက်ကွေးခြင်းအတွက် ဘယ်ညာညီညာစွာ တစ်ပြိုင်နက် ဂဟေဆက်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>角変形<rt>かくへんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>角変形<rt>かくへんけい</rt></ruby>の<ruby>角度<rt>かくど</rt></ruby>をあらかじめ<ruby>見込<rt>みこ</rt></ruby>み、<ruby>溶接前<rt>ようせつまえ</rt></ruby>に<ruby>角変形<rt>かくへんけい</rt></ruby>する<ruby>方向<rt>ほうこう</rt></ruby>と<ruby>反対方向<rt>はんたいほうこう</rt></ruby>に<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>させる<ruby>逆ひずみ法<rt>ぎゃくひずみほう</rt></ruby>、<ruby>治具<rt>じぐ</rt></ruby>や<ruby>装置<rt>そうち</rt></ruby>によって<ruby>拘束<rt>こうそく</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>および<ruby>両面溶接<rt>りょうめんようせつ</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>し<ruby>表裏両面<rt>ひょうりりょうめん</rt></ruby>の<ruby>溶接量<rt>ようせつりょう</rt></ruby>を<ruby>均等<rt>きんとう</rt></ruby>にする<ruby>方法<rt>ほうほう</rt></ruby>がある。", textMY: "ထောင့်ပြောင်းလဲမှုအတွက် ဆန့်ကျင်ဘက်သို့ ကြိုတင်ပုံစံထုတ်ခြင်း (Presetting) သည် ထိရောက်သည်။" },
      { id: 5, textJP: "(5) <ruby>回転変形<rt>かいてんへんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>回転<rt>かいてん</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさに<ruby>対応<rt>たいおう</rt></ruby>できるサイズと<ruby>長さ<rt>ながさ</rt></ruby>の<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>の<ruby>配置<rt>はいち</rt></ruby>、<ruby>ルート間隔<rt>るーとかんかく</rt></ruby>を<ruby>拘束<rt>こうそく</rt></ruby>するための<ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>の<ruby>取付け<rt>とりつけ</rt></ruby>、<ruby>強力<rt>きょうりょく</rt></ruby>な<ruby>拘束治具<rt>こうそくじぐ</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>した<ruby>部材拘束<rt>ぶざいこうそく</rt></ruby>などがある。", textMY: "လိမ်ထွက်ခြင်းအတွက် ခိုင်မာသော Jig များဖြင့် ထိန်းချုပ်နိုင်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 縦収縮の対応 (Longitudinal Shrinkage)",
      reasonMY: "အလျားလိုက်ကျုံ့ခြင်း (縦収縮) သည် ပမာဏ အလွန်နည်းသောကြောင့် ၎င်းကို ကြိုတင်ခန့်မှန်းပေါင်းထည့်၍ ထုတ်လုပ်ခြင်း (見込み) သည် အလွန်ခက်ခဲပြီး ယေဘုယျ မဟုတ်ပါ။ ၎င်းထက် ပွတ်တိုက်မျက်နှာပြင်၏ 'အနံလိုက်ကျုံ့ခြင်း' (横収縮) က ပိုမိုအရေးကြီးသည်။",
      memoryTipMY: "အလျားလိုက်ကျုံ့တာ (Longitudinal) က နည်းလွန်းလို့ ကြိုတွက်ရခက်ပါတယ်။"
    }
  },
  {
    id: "2-55",
    questionJP: "<ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>す<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>なものの<ruby>組合<rt>くみあわ</rt></ruby>せはどれか。",
    questionMY: "သွပ်ရည်စိမ်မည့်ပစ္စည်းများနှင့်ပတ်သက်၍ မသင့်လျော်သောအချက်များ ပေါင်းစပ်မှုကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) a, e", textMY: "a, e" },
      { id: 2, textJP: "(2) a, b", textMY: "a, b" },
      { id: 3, textJP: "(3) b, e", textMY: "b, e" },
      { id: 4, textJP: "(4) c, d", textMY: "c, d" },
      { id: 5, textJP: "(5) c, e", textMY: "c, e" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - めっき部材の注意点",
      reasonMY: "c: စလက် (Slag) နှင့် အမှုန်များကို အက်ဆစ်ဆေးရုံဖြင့် မပြောင်စင်နိုင်သောကြောင့် လက်ဖြင့် သေချာဖယ်ရှားရမည်။ e: သွပ်ရည်စိမ်မည့်ပစ္စည်းများတွင် လေခိုပေါက်မဖြစ်စေရန် နှစ်ဖက်ဂဟေဆက်ခြင်း (両面溶接) သို့မဟုတ် အထူးအစီအမံများ လိုအပ်သည်။",
      memoryTipMY: "c နှင့် e အချက်များသည် သွပ်ရည်စိမ်ရာတွင် အထူးသတိထားရမည့် မှားယွင်းချက်များဖြစ်သည်။"
    }
  },
  {
    id: "2-56",
    questionJP: "<ruby>溶融亜鉛めっき工法<rt>ようゆうあえんめっきこうほう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သွပ်ရည်စိမ်ခြင်းလုပ်ငန်းစဉ်နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>での<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>仕様<rt>しよう</rt></ruby>は HDZ55 であるが、これは 1m² あたり 55g <ruby>以上<rt>いじょう</rt></ruby>のめっき<ruby>付着量<rt>ふちゃくりょう</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>している。", textMY: "HDZ55 ဆိုသည်မှာ ၁ စတုရန်းမီတာလျှင် ၅၅ ဂရမ် ရှိရမည်ဟု ဆိုခြင်း။" },
      { id: 2, textJP: "(2) <ruby>柱梁接合部<rt>ちゅうりょうせつごうぶ</rt></ruby>の<ruby>完全溶込み溶接<rt>かんぜんようこみようせつ</rt></ruby>について、「JASS 6」では、<ruby>裏はつり<rt>うらはつり</rt></ruby>を<ruby>併用<rt>へいよう</rt></ruby>した<ruby>両面溶接<rt>りょうめんようせつ</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>することを<ruby>規定<rt>きてい</rt></ruby>している。", textMY: "JASS 6 အရ သွပ်ရည်စိမ်ပစ္စည်းများတွင် နှစ်ဖက်ဂဟေဆက်ခြင်းကို သတ်မှတ်ထားသည်။" },
      { id: 3, textJP: "(3) <ruby>良好<rt>りょうこう</rt></ruby>な<ruby>溶接外観<rt>ようせつがいかん</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>し、<ruby>仕上げ作業<rt>しあげさぎょう</rt></ruby>を<ruby>容易<rt>ようい</rt></ruby>にするために、<ruby>溶接<rt>ようせつ</rt></ruby>は<ruby>フラックス入りワイヤ<rt>ふらっくすいりわいや</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いた<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>を<ruby>適用<rt>てきよう</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "အပြင်ပန်းလှပစေရန် flux wire ဖြင့် gas welding ဆော်ခြင်းက ပိုကောင်းသည်။" },
      { id: 4, textJP: "(4) めっき<ruby>前<rt>まえ</rt></ruby>およびめっき<ruby>後<rt>ご</rt></ruby>の<ruby>矯正<rt>きょうせい</rt></ruby>は、プレス、ローラなどを<ruby>用<rt>もち</rt></ruby>いた<ruby>常温<rt>じょうおん</rt></ruby>での<ruby>加圧矯正<rt>かあつきょうせい</rt></ruby>を<ruby>基本<rt>きほん</rt></ruby>とする。", textMY: "သွပ်ရည်မစိမ်မီနှင့် စိမ်ပြီးနောက် အဖြောင့်ပြင်ခြင်းကို ပုံမှန်အပူချိန်တွင် စက်ဖြင့်ဖိ၍ လုပ်ရမည်။" },
      { id: 5, textJP: "(5) めっき<ruby>後<rt>ご</rt></ruby>の<ruby>寸法精度検査<rt>すんぽうせいどけんさ</rt></ruby>は、<ruby>梁<rt>はり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>がり、<ruby>柱<rt>はしら</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>がり、ウェブの<ruby>曲<rt>ま</rt></ruby>がりを<ruby>対象<rt>たいしょう</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "စိမ်ပြီးနောက် အတိုင်းအတာစစ်ဆေးမှုကို တိုင်နှင့် မြားတန်းများ၏ ကွေးညွှတ်မှုများအတွက် လုပ်ရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - めっき付着量 (Coating amount)",
      reasonMY: "HDZ55 ဆိုသော စံနှုန်းမှာ ၁ စတုရန်းမီတာလျှင် '၅၅၀ ဂရမ်' (550g/m²) နှင့်အထက် သွပ်ရည်ကပ်ရမည်ဟု ဆိုလိုခြင်းဖြစ်သည်။ ၅၅ ဂရမ် မဟုတ်ပါ။",
      memoryTipMY: "HDZ55 = 550g (နံပါတ်နောက်မှာ ၀ ထည့်မှတ်ပါ)။"
    }
  },
  {
    id: "2-57",
    questionJP: "<ruby>素地調整<rt>そじちょうせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "မျက်နှာပြင်ပြင်ဆင်ခြင်း (Surface Preparation) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>素地調整<rt>そじちょうせい</rt></ruby>は、さび・<ruby>黒皮<rt>くろかわ</rt></ruby>・<ruby>油脂<rt>ゆし</rt></ruby>・<ruby>汚れ<rt>よごれ</rt></ruby>などの<ruby>塗装面<rt>とそうめん</rt></ruby>の<ruby>有害<rt>ゆうがい</rt></ruby>な<ruby>付着物<rt>ふちゃくぶつ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>し、<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>粗<rt>あら</rt></ruby>さを<ruby>与<rt>あた</rt></ruby>えて、<ruby>塗料<rt>とりょう</rt></ruby>の<ruby>付着性<rt>ふちゃくせい</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させる<ruby>工程<rt>こうてい</rt></ruby>である。", textMY: "မျက်နှာပြင်ပြင်ဆင်ခြင်းသည် အညစ်အကြေးများကို ဖယ်ရှားပြီး ဆေးကပ်ညှိမှုကို မြှင့်တင်ပေးသော အဆင့်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>素地調整<rt>そじちょうせい</rt></ruby>は、「JASS 6」において 2 <ruby>種類<rt>しゅるい</rt></ruby>の<ruby>種別<rt>しゅべつ</rt></ruby>が<ruby>定められており<rt>さだめられており</rt></ruby>、2 <ruby>種<rt>しゅ</rt></ruby>は<ruby>鉄骨<rt>てっこつ</rt></ruby>が<ruby>屋外<rt>おくがい</rt></ruby>に<ruby>露出<rt>ろしゅつ</rt></ruby>し、<ruby>塗膜<rt>とまく</rt></ruby>に<ruby>長期<rt>ちょうき</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>を<ruby>要求<rt>ようきゅう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される。", textMY: "JASS 6 တွင် မျက်နှာပြင်ပြင်ဆင်မှု ၂ မျိုးသာရှိပြီး အမျိုးအစား ၂ သည် အပြင်ဘက်ပိုင်းအတွက် ဖြစ်သည်ဟု ဆိုခြင်း။" },
      { id: 3, textJP: "(3) 「JASS 6」では、<ruby>特記<rt>とっき</rt></ruby>で<ruby>素地調整<rt>そじちょうせい</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>指定<rt>してい</rt></ruby>されていない<ruby>場合<rt>ばあい</rt></ruby>の<ruby>素地調整<rt>そじちょうせい</rt></ruby>は 2 <ruby>種<rt>しゅ</rt></ruby>とする。", textMY: "အထူးသတ်မှတ်ချက်မရှိပါက အမျိုးအစား ၂ နည်းလမ်းကို သုံးရမည်။" },
      { id: 4, textJP: "(4) <ruby>ブラスト法<rt>ぶらすとほう</rt></ruby>は、<ruby>研削材<rt>けんさくざい</rt></ruby>を<ruby>圧縮空気<rt>あっしゅくくうき</rt></ruby>に<ruby>混<rt>ま</rt></ruby>ぜて<ruby>吹<rt>ふ</rt></ruby>き<ruby>付<rt>つ</rt></ruby>け、さびや<ruby>黒皮<rt>くろかわ</rt></ruby>およびその他の<ruby>異物<rt>いぶつ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>するものであり、<ruby>研削材<rt>けんさくざい</rt></ruby>には<ruby>鋼<rt>はがね</rt></ruby>を<ruby>砕<rt>くだ</rt></ruby>いたグリット、<ruby>球状<rt>きゅうじょう</rt></ruby>のショットなどの<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "Blast နည်းလမ်းတွင် Grit သို့မဟုတ် Shot စသည့် ပစ္စည်းများကို သုံး၍ သန့်စင်သည်။" },
      { id: 5, textJP: "(5) <ruby>塗膜<rt>とまく</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>は<ruby>素地調整<rt>そじちょうせい</rt></ruby>の<ruby>良否<rt>りょうひ</rt></ruby>によって<ruby>左右<rt>さゆう</rt></ruby>され、<ruby>塗膜<rt>とまく</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>におよぼす<ruby>素地調整<rt>そじちょうせい</rt></ruby>の<ruby>寄与率<rt>きよりつ</rt></ruby>は<ruby>約<rt>やく</rt></ruby> 50％ ともいわれる。", textMY: "ဆေးသားကြာရှည်ခံမှု၏ ၅၀% ခန့်မှာ မျက်နှာပြင်ပြင်ဆင်မှုအပေါ် မူတည်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 素地調整の種別 (Surface Prep Classes)",
      reasonMY: "JASS 6 ရှိ မျက်နှာပြင်ပြင်ဆင်မှု (素地調整) တွင် အမျိုးအစား ၄ မျိုး (၁ 種 မှ ၄ 種) သတ်မှတ်ထားပါသည်။ '၂ မျိုးသာရှိသည်' ဆိုခြင်းမှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၃၀ ပါ Scribble '4種' ကို ကြည့်ပါ)။",
      memoryTipMY: "Surface Preparation မှာ Class ၄ မျိုး (1 to 4) ရှိပါတယ်။"
    }
  },
  {
    id: "2-58",
    questionJP: "<ruby>素地調整<rt>そじちょうせい</rt></ruby>におけるブラスト<ruby>処理<rt>しょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Blast မျက်နှာပြင်ပြင်ဆင်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) ブラスト<ruby>処理<rt>しょり</rt></ruby>は、「JASS 6」における 1 <ruby>種<rt>しゅ</rt></ruby>Bの<ruby>素地調整<rt>そじちょうせい</rt></ruby>の<ruby>種別<rt>しゅべつ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "Blast ပြုလုပ်ခြင်းသည် JASS 6 ရှိ အမျိုးအစား 1B တွင် အကျုံးဝင်သည်။" },
      { id: 2, textJP: "(2) ブラスト<ruby>処理<rt>しょり</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>研削材<rt>けんさくざい</rt></ruby>には、グリット、ショットなどの<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "Blast ပြုလုပ်ရာတွင် Grit သို့မဟုတ် Shot များကို သုံးနိုင်သည်။" },
      { id: 3, textJP: "(3) ブラスト<ruby>処理<rt>しょり</rt></ruby>した<ruby>鋼<rt>はがね</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>は、<ruby>塗料<rt>とりょう</rt></ruby>の<ruby>付着<rt>ふちゃく</rt></ruby>と<ruby>塗膜<rt>とまく</rt></ruby>の<ruby>均一性<rt>きんいつせい</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>するため、<ruby>粗<rt>あら</rt></ruby>さは 50~70μmRz <ruby>程度<rt>ていど</rt></ruby>とする。", textMY: "Blast ပြီးနောက် မျက်နှာပြင်ကြမ်းတမ်းမှုမှာ ၅၀ မှ ၇၀ ဝန်းကျင် ရှိရမည်။" },
      { id: 4, textJP: "(4) ブラスト<ruby>処理<rt>しょり</rt></ruby>した<ruby>直後<rt>ちょくご</rt></ruby>の<ruby>鋼<rt>はがね</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>は<ruby>活性化<rt>かっせいか</rt></ruby>しているので、<ruby>塗装<rt>とそう</rt></ruby>は 3~4 <ruby>時間以上経過後<rt>じかんいじょうけいかご</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Blast ပြီးပြီးချင်း မျက်နှာပြင်မှာ လတ်ဆတ်လွန်းသဖြင့် ၃-၄ နာရီစောင့်ပြီးမှ ဆေးသုတ်ရမည်ဟု ဆိုခြင်း။" },
      { id: 5, textJP: "(5) ブラスト<ruby>処理<rt>しょり</rt></ruby>は、<ruby>鉄骨<rt>てっこつ</rt></ruby>が<ruby>屋外<rt>おくがい</rt></ruby>に<ruby>露出<rt>ろしゅつ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>など、<ruby>塗膜<rt>とまく</rt></ruby>に<ruby>長期<rt>ちょうき</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>を<ruby>要<rt>よう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される。", textMY: "အပြင်ဘက်ပိုင်းတွင် ဆေးသားကြာရှည်ခံရန်အတွက် Blast နည်းလမ်းကို သုံးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 塗装のタイミング (Painting timing)",
      reasonMY: "Blast ပြုလုပ်ပြီးသော မျက်နှာပြင်သည် အလွန်လတ်ဆတ်ပြီး သံချေးတက်လွယ်သောကြောင့်၊ 'အမြန်ဆုံး' (ချက်ချင်း) ဆေးသုတ်ရန် လိုအပ်သည်။ စောင့်ဆိုင်းရမည်ဆိုခြင်းမှာ မှားယွင်းသည်။ (PDF စာမျက်နှာ ၃၀ ပါ Scribble 'すぐに塗装' ကို ကြည့်ပါ)။",
      memoryTipMY: "Blast လုပ်ပြီးရင် သံချေးမတက်ခင် ချက်ချင်း (Immediately) ဆေးသုတ်ရမယ်။"
    }
  },
  {
    id: "2-59",
    questionJP: "<ruby>素地調整<rt>そじちょうせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "မျက်နှာပြင်ပြင်ဆင်ခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>素地調整<rt>そじちょうせい</rt></ruby>は、さび、<ruby>黒皮<rt>くろかわ</rt></ruby>、<ruby>水分<rt>すいぶん</rt></ruby>、<ruby>油分<rt>ゆぶん</rt></ruby>、<ruby>汚れ<rt>よごれ</rt></ruby>などの<ruby>塗装面<rt>とそうめん</rt></ruby>の<ruby>有害<rt>ゆうがい</rt></ruby>な<ruby>付着物<rt>ふちゃくぶつ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>し、<ruby>加<rt>くわ</rt></ruby>えて<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>粗<rt>あら</rt></ruby>さを<ruby>与<rt>あた</rt></ruby>えるための<ruby>作業<rt>さぎょう</rt></ruby>である。", textMY: "Surface Preparation သည် အညစ်အကြေးဖယ်ရှားပြီး မျက်နှာပြင်ကို ကြမ်းတမ်းအောင်လုပ်ခြင်း ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>設計図書<rt>せっけいとしょ</rt></ruby>に<ruby>素地調整<rt>そじちょうせい</rt></ruby>の<ruby>特記<rt>とっき</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>には、「JASS 6」における 2 <ruby>種<rt>しゅ</rt></ruby>の<ruby>素地調整<rt>そじちょうせい</rt></ruby>とする。", textMY: "အထူးသတ်မှတ်ချက်မရှိပါက JASS 6 ရှိ အမျိုးအစား ၂ နည်းလမ်းကို သုံးရမည်။" },
      { id: 3, textJP: "(3) ブラストした<ruby>鋼材面<rt>こうざいめん</rt></ruby>の<ruby>粗<rt>あら</rt></ruby>さは、50~70μmRz <ruby>程度<rt>ていど</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>に<ruby>収<rt>おさ</rt></ruby>める。", textMY: "Blast ပြီးသောမျက်နှာပြင်၏ ကြမ်းတမ်းမှုမှာ ၅၀-၇၀ ဝန်းကျင် ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>塗膜<rt>とまく</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>は、<ruby>素地調整<rt>そじちょうせい</rt></ruby>の<ruby>良否<rt>りょうひ</rt></ruby>によって<ruby>左右<rt>さゆう</rt></ruby>される。", textMY: "ဆေးသားကြာရှည်ခံမှုမှာ မျက်နှာပြင်ပြင်ဆင်မှုအပေါ် မူတည်သည်။" },
      { id: 5, textJP: "(5) <ruby>素地調整後<rt>そじちょうせいご</rt></ruby>の<ruby>鋼材面<rt>こうざいめん</rt></ruby>は<ruby>活性化<rt>かっせいか</rt></ruby>しているので、24 <ruby>時間以内<rt>じかんいない</rt></ruby>に<ruby>塗装<rt>とそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "ပြင်ဆင်ပြီးပါက ၂၄ နာရီအတွင်း ဆေးသုတ်ရမည်ဟု ဆိုခြင်း။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 塗装の期限 (Deadline for Painting)",
      reasonMY: "မျက်နှာပြင်ပြင်ဆင်မှု (အထူးသဖြင့် Blast) ပြုလုပ်ပြီးပါက 'ထိုနေ့အတွင်း' (当日中) သို့မဟုတ် မျက်နှာပြင် ပြန်လည်မညစ်ပေမီ (များသောအားဖြင့် နာရီပိုင်းအတွင်း) အမြန်ဆုံး ဆေးသုတ်ရမည်။ ၂၄ နာရီဆိုသည်မှာ အချိန်အလွန်ကြာမြင့်လွန်းသဖြင့် မှားယွင်းသည်။",
      memoryTipMY: "သံချေးမတက်ခင် အမြန်ဆုံး (ထိုနေ့အတွင်း) သုတ်ရမယ်။"
    }
  },
  {
    id: "2-60",
    questionJP: "<ruby>輸送<rt>ゆそう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သယ်ယူပို့ဆောင်ရေးနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) トラックやトレーラーで<ruby>陸上輸送<rt>りくじょうゆそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>寸法<rt>すんぽう</rt></ruby>（<ruby>長<rt>なが</rt></ruby>さ、<ruby>幅<rt>はば</rt></ruby>、<ruby>高<rt>たか</rt></ruby>さの<ruby>最大寸法<rt>さいだいすんぽう</rt></ruby>）、<ruby>重量<rt>じゅうりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>して<ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>作成段階<rt>さくせいだんかい</rt></ruby>での<ruby>検討・計画<rt>けんとう・けいかく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "ကုန်းလမ်းသယ်ယူရေးအတွက် အရွယ်အစားနှင့် အလေးချိန်ကို ပုံဆွဲကတည်းက စီစဉ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>形状<rt>けいじょう</rt></ruby>で、<ruby>非対称<rt>ひたいしょう</rt></ruby>な<ruby>部材<rt>ぶざい</rt></ruby>については、<ruby>重心位置<rt>じゅうしんいち</rt></ruby>を<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>表示<rt>ひょうじ</rt></ruby>する。", textMY: "ဘယ်ညာမညီသော ပစ္စည်းများတွင် အလေးဗဟို (C.G) ကို ရေးသားရမည်။" },
      { id: 3, textJP: "(3) <ruby>積込み作業<rt>つみこみさぎょう</rt></ruby>においては、<ruby>鉄骨製品<rt>てっこつせいひん</rt></ruby>の<ruby>荷崩れ<rt>にくずれ</rt></ruby>の<ruby>防止<rt>ぼうし</rt></ruby>を<ruby>最優先<rt>さいゆうせん</rt></ruby>とし、<ruby>当て木<rt>あてぎ</rt></ruby>などは<ruby>使用<rt>しよう</rt></ruby>してはならない。", textMY: "ပစ္စည်းများ ပြုတ်မကျရန် အဓိကထားပြီး ခံသစ်တုံး (Dunnage) များကို မသုံးရဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) <ruby>大型車両<rt>おおがたしゃりょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>規制<rt>きせい</rt></ruby>には、<ruby>通行<rt>つうこう</rt></ruby>の<ruby>制限<rt>せいげん</rt></ruby>と<ruby>積載<rt>せきさい</rt></ruby>の<ruby>制限<rt>せいげん</rt></ruby>がある。", textMY: "ကားကြီးများအတွက် လမ်းနှင့် ဝန်တင် ကန့်သတ်ချက်များ ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>輸送要領<rt>ゆそうようりょう</rt></ruby>は<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>を<ruby>得<rt>え</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "သယ်ယူပို့ဆောင်ရေး အစီအစဉ်ကို တည်ဆောက်သူ၏ ခွင့်ပြုချက် ရယူရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 当て木の使用 (Use of Dunnage)",
      reasonMY: "သယ်ယူပို့ဆောင်ရေးတွင် ပစ္စည်းများ မပျက်စီးစေရန်နှင့် လုံခြုံစွာ တင်ဆောင်နိုင်ရန်အတွက် 'ခံသစ်တုံး' (当て木/Dunnage) များကို 'မဖြစ်မနေ' အသုံးပြုရမည်ဖြစ်သည်။ 'မသုံးရ' (使用してはならない) ဟူသော အချက်မှာ မှားယွင်းသည်။",
      memoryTipMY: "သယ်ယူပို့ဆောင်ရေးမှာ ပစ္စည်းတွေကြားထဲ သစ်တုံး (当て木) ခံရမယ်။"
    }
  }
];
