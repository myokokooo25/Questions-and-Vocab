import { StudyCardData } from '../types';

export const chapter2Part2Data: StudyCardData[] = [
  {
    id: "2-16",
    questionJP: "「JASS 6」における<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ High Strength Bolt ၏ ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်း (Friction Surface Treatment) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>摩擦面<rt>まさつめん</rt></ruby>には、クランプ<ruby>傷<rt>きず</rt></ruby>などの<ruby>凹凸<rt>おうとつ</rt></ruby>やスパッタの<ruby>付着<rt>ふちゃく</rt></ruby>があってはならない。", textMY: "(1) ပွတ်တိုက်မျက်နှာပြင်တွင် Clamp ကြောင့်ဖြစ်သော ခြစ်ရာ၊ အဖုအထစ်များနှင့် Spatter ကပ်ငြိမှုများ မရှိစေရပါ။" },
      { id: 2, textJP: "(2) <ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>による<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>には、<ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>も<ruby>同時<rt>どうじ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>薬剤<rt>やくざい</rt></ruby>は<ruby>使用<rt>しよう</rt></ruby>してはならない。", textMY: "(2) ဓာတုဆေးရည်ဖြင့် သံချေးတက်စေသော နည်းလမ်းတွင် Black scale ဖယ်ရှားခြင်းကို တစ်ပြိုင်နက် လုပ်ဆောင်ပေးသော ဆေးရည်များကို အသုံးမပြုရပါ။" },
      { id: 3, textJP: "(3) <ruby>スプライスプレート<rt>すぷらいすぷれーと</rt></ruby>を<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>仮固定<rt>かりこてい</rt></ruby>する<ruby>際<rt>さい</rt></ruby>には、<ruby>油分<rt>ゆぶん</rt></ruby>のない<ruby>仮ボルト<rt>かりぼると</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いる。", textMY: "(3) Splice plate ကို အစိတ်အပိုင်းတွင် ယာယီတွဲဆက်ထိန်းထားရာတွင် အဆီကင်းစင်သော ယာယီဘို့လ် (Temporary bolt) ကို အသုံးပြုရမည်။" },
      { id: 4, textJP: "(4) <ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>をブラスト<ruby>処理<rt>しょり</rt></ruby>とする<ruby>場合<rt>ばあい</rt></ruby>、<ruby>ショットブラスト<rt>しょっとぶらすと</rt></ruby>および<ruby>グリットブラスト<rt>ぐりっとぶらすと</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>し、<ruby>表面粗さ<rt>ひょうめんあらさ</rt></ruby> 50μmRz <ruby>以上<rt>いじょう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "(4) HS Bolt အဆက်နေရာကို Blast လုပ်ပါက Shot blast နှင့် Grit blast ကို အသုံးပြုပြီး မျက်နှာပြင်ကြမ်းတမ်းမှု 50μmRz နှင့်အထက် သေချာစေရမည်။" },
      { id: 5, textJP: "(5) <ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>つき<ruby>高力ボルト接合<rt>こうりょくぼるとせつごう</rt></ruby>の<ruby>摩擦面<rt>まさつめん</rt></ruby>に、<ruby>特記<rt>とっき</rt></ruby>によりブラスト<ruby>処理<rt>しょり</rt></ruby>あるいは<ruby>りん酸塩処理以外<rt>さんえんしょりいがい</rt></ruby>の<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>処理<rt>しょり</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>す<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>としてすべり<ruby>耐力試験<rt>たいりょくしけん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(5) သွပ်ရည်စိမ် (Galvanized) HS Bolt အဆက် ပွတ်တိုက်မျက်နှာပြင်ကို Blast သို့မဟုတ် Phosphate မှလွဲ၍ အခြား အထူးပြုပြင်မှု ပြုလုပ်ပါက စည်းမျဉ်းအရ Slip test စစ်ဆေးရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 摩擦面処理 (Friction Surface Treatment)",
      reasonMY: "ဓာတုဆေးရည်ဖြင့် သံချေးတက်စေသော နည်းလမ်း (薬剤発錆) တွင် Black scale (ကြိတ်လွှာမည်း) ဖယ်ရှားခြင်းနှင့် သံချေးတက်စေခြင်းကို တစ်ပြိုင်နက်ပြုလုပ်ပေးနိုင်သော ဆေးရည်များကိုလည်း အသုံးပြုနိုင်ပါသည်။ ထို့ကြောင့် အသုံးမပြုရဟု ဆိုထားခြင်းမှာ မမှန်ကန်ပါ။",
      memoryTipMY: "Black scale ဖယ်ရှားခြင်းနှင့် သံချေးတက်စေခြင်း တစ်ပြိုင်နက်လုပ်သော ဆေးရည်ကို အသုံးပြုနိုင်သည်။"
    }
  },
  {
    id: "2-17",
    questionJP: "「JASS 6」における<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ High Strength Bolt ၏ ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) すべり<ruby>係数<rt>けいすう</rt></ruby>が 0.45 <ruby>以上確保<rt>いじょうかくほ</rt></ruby>できる<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>は、<ruby>発錆（さび）処理<rt>はっせいしょり</rt></ruby>またはブラスト<ruby>処理<rt>しょり</rt></ruby>のいずれかの<ruby>方法<rt>ほうほう</rt></ruby>とする。", textMY: "(1) ချော်ထွက်မှုကိန်းဂဏန်း (Slip coefficient) 0.45 နှင့်အထက် ရရှိစေသော ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်နည်းမှာ သံချေးတက်စေခြင်း သို့မဟုတ် Blast ပြုလုပ်ခြင်း ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>つき<ruby>高力ボルト接合<rt>こうりょくぼるとせつごう</rt></ruby>の<ruby>摩擦面<rt>まさつめん</rt></ruby>に、<ruby>特記<rt>とっき</rt></ruby>によりブラスト<ruby>処理<rt>しょり</rt></ruby>あるいは<ruby>りん酸塩処理以外<rt>さんえんしょりいがい</rt></ruby>の<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>処理<rt>しょり</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>す<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>としてすべり<ruby>係数試験<rt>けいすうしけん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(2) သွပ်ရည်စိမ် HS Bolt အဆက် ပွတ်တိုက်မျက်နှာပြင်ကို Blast သို့မဟုတ် Phosphate မှလွဲ၍ အခြား အထူးပြုပြင်မှု လုပ်ပါက စည်းမျဉ်းအရ Slip test စစ်ဆေးရမည်။" },
      { id: 3, textJP: "(3) <ruby>摩擦面<rt>まさつめん</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>を<ruby>発錆（さび）処理<rt>はっせいしょり</rt></ruby>で<ruby>行う方法<rt>おこなうほうほう</rt></ruby>には、<ruby>自然発錆<rt>しぜんはっせい</rt></ruby>と<ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>がある。", textMY: "(3) ပွတ်တိုက်မျက်နှာပြင်ကို သံချေးတက်စေသော နည်းလမ်းတွင် သဘာဝအလျောက် သံချေးတက်စေခြင်းနှင့် ဓာတုဆေးရည်ဖြင့် သံချေးတက်စေခြင်းဟူ၍ ရှိသည်။" },
      { id: 4, textJP: "(4) <ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>肌すき<rt>はだすき</rt></ruby>に<ruby>挿入<rt>そうにゅう</rt></ruby>するフィラープレートには、<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>である。", textMY: "(4) အဆက်နေရာ ကြားဟမှု (Skin gap) တွင် ထည့်သွင်းရသော Filler plate အတွက် ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ရန် မလိုအပ်ပါ။" },
      { id: 5, textJP: "(5) <ruby>摩擦面<rt>まさつめん</rt></ruby>にはクランプ<ruby>傷<rt>きず</rt></ruby>などの<ruby>凹凸<rt>おうとつ</rt></ruby>やスパッタの<ruby>付着<rt>ふちゃく</rt></ruby>があってはならない。", textMY: "(5) ပွတ်တိုက်မျက်နှာပြင်တွင် Clamp ခြစ်ရာ၊ အဖုအထစ်များနှင့် Spatter ကပ်ငြိမှုများ မရှိစေရပါ။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - フィラープレートの処理 (Filler Plate Treatment)",
      reasonMY: "Friction Joint တွင် အသုံးပြုသော Filler plate များ၏ 'မျက်နှာပြင် နှစ်ဖက်လုံး' ကို အဓိက သံမဏိပစ္စည်းများကဲ့သို့ပင် ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်း (Friction Surface Treatment) မဖြစ်မနေ လုပ်ဆောင်ပေးရပါမည်။ မလိုအပ်ဟု ဆိုခြင်းမှာ မှားယွင်းပါသည်။",
      memoryTipMY: "Filler plate နှစ်ဖက်လုံးကို ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ရမည်။"
    }
  },
  {
    id: "2-18",
    questionJP: "「JASS 6」における<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ယာယီဂဟေဆက်ခြင်း (Tack Welding) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>冷間成形角形鋼管<rt>れいかんせいけいかくがたこうかん</rt></ruby>の<ruby>角部<rt>かくぶ</rt></ruby>など、<ruby>大<rt>おお</rt></ruby>きな<ruby>冷間塑性加工<rt>れいかんそせいかこう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>箇所<rt>かしょ</rt></ruby>への<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は<ruby>避<rt>さ</rt></ruby>ける。", textMY: "(1) အအေးပုံသွင်း လေးထောင့်သံပိုက်၏ ထောင့်စွန်းများကဲ့သို့ အအေးဒဏ် ပုံပျက်ဒဏ် ပြင်းထန်စွာ ခံထားရသော နေရာများသို့ ယာယီဂဟေဆော်ခြင်းကို ရှောင်ကြဉ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>だけでは<ruby>突合せ継手<rt>つきあわせつぎて</rt></ruby>の<ruby>角変形<rt>かくへんけい</rt></ruby>や<ruby>隅肉溶接部材<rt>すみにくようせつぶざい</rt></ruby>の<ruby>倒<rt>たお</rt></ruby>れが<ruby>防止<rt>ぼうし</rt></ruby>できない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>ストロングバック<rt>すとろんぐばっく</rt></ruby>などの<ruby>治具<rt>じぐ</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いて<ruby>拘束<rt>こうそく</rt></ruby>する。", textMY: "(2) ယာယီဂဟေတစ်ခုတည်းဖြင့် Butt joint ၏ ပုံပျက်ခြင်း သို့မဟုတ် Fillet weld ၏ လဲကျမှုကို မကာကွယ်နိုင်ပါက Strong-back ကဲ့သို့သော ဂျစ် (Jig) များကို သုံး၍ ထိန်းချုပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>板厚<rt>いたあつ</rt></ruby> 6mm を<ruby>超<rt>こ</rt></ruby>える<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>の<ruby>最小溶接長<rt>さいしょうようせつながさ</rt></ruby>さは 30mm、<ruby>脚長<rt>きゃくちょう</rt></ruby>は 4mm <ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "(3) အထူ 6mm ကျော်သော အစိတ်အပိုင်းများတွင် ပြုလုပ်သော ယာယီဂဟေ၏ အနည်းဆုံး ဂဟေအရှည်မှာ 30mm၊ Leg length မှာ 4mm နှင့်အထက် ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby> 490N/mm² <ruby>以上<rt>いじょう</rt></ruby>の<ruby>高張力鋼<rt>こうちょうりょくこう</rt></ruby>の<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>を<ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>で<ruby>行う場合<rt>おこなうばあい</rt></ruby>には、<ruby>低水素系溶接棒<rt>ていすいそけいようせつぼう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(4) ဆွဲဆန့်ခံနိုင်အား 490N/mm² နှင့်အထက် သံမဏိကို Shielded Metal Arc Welding ဖြင့် ယာယီဂဟေဆော်ပါက Low-hydrogen type ဂဟေချောင်းကို အသုံးပြုရမည်။" },
      { id: 5, textJP: "(5) <ruby>工事現場溶接<rt>こうじげんばようせつ</rt></ruby>などで、<ruby>裏当て金<rt>うらあてがね</rt></ruby>が <ruby>梁フランジ<rt>はりふらんじ</rt></ruby>の<ruby>外側<rt>そとがわ</rt></ruby>に<ruby>取付<rt>とりつ</rt></ruby>く<ruby>場合<rt>ばあい</rt></ruby>、<ruby>本溶接<rt>ほんようせつ</rt></ruby>によって<ruby>再溶融<rt>さいようゆう</rt></ruby>されない<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、<ruby>梁<rt>はり</rt></ruby>フランジおよび<ruby>柱<rt>はしら</rt></ruby>フランジ<ruby>母材<rt>ぼざい</rt></ruby>に<ruby>直接行<rt>ちょくせつおこな</rt></ruby>ってはならない。", textMY: "(5) လုပ်ငန်းခွင်ဂဟေတွင် Backing metal သည် ရက်မ Flange ၏ အပြင်ဘက်တွင် တပ်ဆင်ပါက အဓိကဂဟေဖြင့် ပြန်လည်မပျော်ဝင်မည့် ယာယီဂဟေကို ရက်မနှင့် တိုင် Flange ပင်မသတ္တုပေါ်သို့ တိုက်ရိုက်မဆော်ရပါ။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 組立て溶接の最小長さ (Tack Weld Length)",
      reasonMY: "JASS 6 စံနှုန်းအရ အထူ 6mm ကျော်သော ပစ္စည်းများအတွက် ယာယီဂဟေ (Tack weld) ၏ အနည်းဆုံးအရှည်မှာ 40mm (၄၀ မီလီမီတာ) ဖြစ်ရပါမည်။ ၃၀ မီလီမီတာ မဟုတ်ပါ။",
      memoryTipMY: "အထူ 6mm ကျော်ပါက Tack weld အနည်းဆုံးအရှည် 40mm လိုအပ်ပါသည်။"
    }
  },
  {
    id: "2-19",
    questionJP: "「JASS 6」における<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ယာယီဂဟေဆက်ခြင်း (Tack Welding) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>板厚<rt>いたあつ</rt></ruby> 6mm を<ruby>超<rt>こ</rt></ruby>える<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>の<ruby>溶接長さ<rt>ようせつながさ</rt></ruby>さは 40mm <ruby>以上<rt>いじょう</rt></ruby>、<ruby>脚長<rt>きゃくちょう</rt></ruby>は 4mm <ruby>以上<rt>いじょう</rt></ruby>とする。", textMY: "(1) အထူ 6mm ကျော်သော အစိတ်အပိုင်းများတွင် ပြုလုပ်သော ယာယီဂဟေ၏ အလျားမှာ 40mm နှင့်အထက်၊ Leg length မှာ 4mm နှင့်အထက် ဖြစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>に<ruby>従事<rt>じゅうじ</rt></ruby>する<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>は、JIS Z 3801（<ruby>手溶接技術検定<rt>てようせつぎじゅつけんてい</rt></ruby>における<ruby>試験方法<rt>しけんほうほう</rt></ruby>および<ruby>判定基準<rt>はんていきじゅん</rt></ruby>）または JIS Z 3841（<ruby>半自動溶接技術検定<rt>はんじどうようせつぎじゅつけんてい</rt></ruby>における<ruby>試験方法<rt>しけんほうほう</rt></ruby>および<ruby>判定基準<rt>はんていきじゅん</rt></ruby>）の<ruby>少<rt>すく</rt></ruby>なくとも<ruby>基本級<rt>きほんきゅう</rt></ruby>となる<ruby>級<rt>きゅう</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "(2) ယာယီဂဟေလုပ်ငန်း ဆောင်ရွက်သူသည် JIS Z 3801 သို့မဟုတ် JIS Z 3841 ၏ အနည်းဆုံး အခြေခံအဆင့် (Basic level) အောင်မြင်ထားသော လက်မှတ်ရပညာရှင် ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>板厚<rt>いたあつ</rt></ruby> 25mm の SN400 <ruby>材<rt>ざい</rt></ruby>に<ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>で<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>を<ruby>行う場合<rt>おこなうばあい</rt></ruby>は、<ruby>低水素系<rt>ていすいそけい</rt></ruby>または<ruby>イルミナイト系<rt>いるみないとけい</rt></ruby>の<ruby>溶接棒<rt>ようせつぼう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(3) အထူ 25mm ရှိသော SN400 သံမဏိတွင် Shielded Metal Arc Welding ဖြင့် ယာယီဂဟေဆော်ပါက Low-hydrogen သို့မဟုတ် Ilmenite ဂဟေချောင်းကို အသုံးပြုရမည်။" },
      { id: 4, textJP: "(4) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、<ruby>組立て部材<rt>くみたてぶざい</rt></ruby>の<ruby>形状<rt>けいじょう</rt></ruby>を<ruby>保持<rt>ほじ</rt></ruby>し、かつ、<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>が <ruby>割<rt>わ</rt></ruby>れないように<ruby>配置<rt>はいち</rt></ruby>しなければならない。", textMY: "(4) ယာယီဂဟေသည် တပ်ဆင်ပစ္စည်း၏ ပုံသဏ္ဌာန်ကို ထိန်းသိမ်းနိုင်စေရန်နှင့် ယာယီဂဟေသား အက်ကွဲမသွားစေရန် စီစဉ်နေရာချထားရမည်။" },
      { id: 5, textJP: "(5) <ruby>納まり上<rt>おさまりじょう</rt></ruby>、<ruby>開先内<rt>かいさきない</rt></ruby>に<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>わざるを<ruby>得<rt>え</rt></ruby>ない<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>本溶接後<rt>ほんようせつご</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>が <ruby>十分確保<rt>じゅうぶんかくほ</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>しなければならない。", textMY: "(5) တပ်ဆင်မှုအခြေအနေအရ Groove (开先) အတွင်း ယာယီဂဟေ မဖြစ်မနေ ဆော်ရပါက ပင်မဂဟေပြီးနောက် အရည်အသွေး ပြည့်မီစေသော နည်းလမ်းဖြင့် ဆောင်ရွက်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接棒の選定 (Welding Rod Selection)",
      reasonMY: "အထူ 25mm ရှိသော SN400 သံမဏိအတွက် ယာယီဂဟေ (Tack weld) လုပ်ဆောင်ရာတွင် အက်ကွဲမှု (Cracking) ကာကွယ်ရန် 'Low-hydrogen' (低水素系) ဂဟေချောင်းကိုသာ အသုံးပြုရပါမည်။ Ilmenite (イルミナイト系) ကို သုံးစွဲရန် မသင့်လျော်ပါ။",
      memoryTipMY: "အထူကြီးပါက Low-hydrogen rod ကိုသာ အသုံးပြုပါ။"
    }
  },
  {
    id: "2-20",
    questionJP: "「JASS 6」における<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ယာယီဂဟေဆက်ခြင်း (Tack Welding) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は、4mm <ruby>以上<rt>いじょう</rt></ruby>の<ruby>脚長<rt>きゃくちょう</rt></ruby>をもつビードを<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>間隔<rt>かんかく</rt></ruby>で<ruby>配置<rt>はいち</rt></ruby>する。", textMY: "(1) ယာယီဂဟေသည် Leg length 4mm နှင့်အထက် ရှိသော ဂဟေသားကို သင့်လျော်သော အကွာအဝေးများဖြင့် နေရာချရမည်။" },
      { id: 2, textJP: "(2) <ruby>冷間成形角形鋼管<rt>れいかんせいけいかくがたこうかん</rt></ruby>の<ruby>角部<rt>かくぶ</rt></ruby>など、<ruby>大<rt>おお</rt></ruby>きな<ruby>冷間塑性加工<rt>れいかんそせいかこう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>箇所<rt>かしょ</rt></ruby>への<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は<ruby>避<rt>さ</rt></ruby>ける。", textMY: "(2) အအေးပုံသွင်း လေးထောင့်သံပိုက်၏ ထောင့်စွန်းများကဲ့သို့ အအေးဒဏ် ပုံပျက်ဒဏ် ပြင်းထန်စွာ ခံထားရသော နေရာများသို့ ယာယီဂဟေဆော်ခြင်းကို ရှောင်ကြဉ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てる<ruby>材<rt>ざい</rt></ruby>の<ruby>厚<rt>あつ</rt></ruby>い<ruby>ほう<rt>ほう</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が 6mm <ruby>以下<rt>いか</rt></ruby>の<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>の<ruby>最小溶接長<rt>さいしょうようせつながさ</rt></ruby>さは 30mm とする。", textMY: "(3) တွဲဆက်မည့် ပစ္စည်းများအနက် အထူဆုံးပစ္စည်း အထူ 6mm နှင့်အောက် ဖြစ်ပါက ယာယီဂဟေ၏ အနည်းဆုံးအလျားမှာ 30mm ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>高張力鋼<rt>こうちょうりょくこう</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>で<ruby>行う場合<rt>おこなうばあい</rt></ruby>には、<ruby>低水素系溶接棒<rt>ていすいそけいようせつぼう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "(4) ခိုင်အားမြင့် သံမဏိ (High-tensile steel) ကို Shielded Metal Arc Welding ဖြင့် ဆော်ပါက Low-hydrogen type ဂဟေချောင်းကို အသုံးပြုရမည်။" },
      { id: 5, textJP: "(5) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>角、端部<rt>かど、たんぶ</rt></ruby>など<ruby>強度上<rt>きょうどじょう</rt></ruby>および<ruby>工作上問題<rt>こうさくじょうもんだい</rt></ruby>とならない<ruby>箇所<rt>かしょ</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(5) ယာယီဂဟေ နေရာချထားမှုသည် အစိတ်အပိုင်း၏ ထောင့်စွန်းများ (Corner, End) ကဲ့သို့သော ကြံ့ခိုင်မှုနှင့် လုပ်ငန်းခွင် ပြဿနာမရှိသော နေရာများတွင် ပြုလုပ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 組立て溶接の禁止箇所 (Prohibited Tack Weld Locations)",
      reasonMY: "ယာယီဂဟေ (Tack weld) ကို အစိတ်အပိုင်း၏ 'ထောင့်စွန်းများ' (Corner/End) တွင် လုံးဝ မပြုလုပ်ရပါ။ ၎င်းနေရာများသည် Stress စုစည်းပြီး အက်ကွဲမှု (Cracking) အလွယ်တကူ ဖြစ်ပေါ်နိုင်သောကြောင့် ဖြစ်ပါသည်။",
      memoryTipMY: "ထောင့်စွန်း (Corner/End) နေရာများတွင် ယာယီဂဟေ လုံးဝမဆော်ရပါ။"
    }
  },
  {
    id: "2-21",
    questionJP: "「JASS 6」における<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>加工<rt>かこう</rt></ruby>およびその<ruby>加熱温度<rt>かねつおんど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိပြုပြင်ခြင်းနှင့် အပူပေးအပူချိန်ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼<rt>はがね</rt></ruby>は 200℃~400℃ <ruby>程度<rt>ていど</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>では<ruby>常温<rt>じょうおん</rt></ruby>より<ruby>硬<rt>かた</rt></ruby>くかつ<ruby>脆<rt>もろ</rt></ruby>くなるので、この<ruby>温度範囲<rt>おんどはんい</rt></ruby>における<ruby>曲げ加工<rt>まげかこう</rt></ruby>は<ruby>避<rt>さ</rt></ruby>ける。", textMY: "(1) သံမဏိသည် 200℃~400℃ ဝန်းကျင်တွင် သာမန်အပူချိန်ထက် ပိုမာပြီး ကြွပ်ဆတ်လွယ်သောကြောင့် ဤအပူချိန်အတွင်း ကွေးညွှတ်ပြုပြင်ခြင်းကို ရှောင်ကြဉ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>曲げ加工<rt>まげかこう</rt></ruby>を<ruby>加熱加工<rt>かねつかこう</rt></ruby>で<ruby>行う場合<rt>おこなうばあい</rt></ruby>は、<ruby>赤熱状態<rt>せきねつじょうたい</rt></ruby> (850℃~900℃) で<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(2) ကွေးညွှတ်ခြင်းကို အပူပေး၍ ပြုလုပ်ပါက အနီရောင်ရင့်အပူချိန် (850℃~900℃) တွင် ပြုလုပ်ရမည်။" },
      { id: 3, textJP: "(3) 400N/mm² <ruby>級鋼<rt>きゅうこう</rt></ruby>を<ruby>加熱矯正<rt>かねつきょうせい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>加熱温度<rt>かねつおんど</rt></ruby>は、<ruby>加熱後<rt>かねつご</rt></ruby>ただちに<ruby>水冷<rt>すいれい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は 600℃~650℃ とする。", textMY: "(3) 400N/mm² အဆင့် သံမဏိကို အပူပေးဖြောင့်မတ်ရာတွင် အပူပေးပြီးပြီးချင်း ရေဖြင့် အအေးခံပါက အပူချိန်ကို 600℃~650℃ ထားရှိရမည်။" },
      { id: 4, textJP: "(4) 400N/mm² <ruby>級鋼<rt>きゅうこう</rt></ruby>を<ruby>加熱矯正<rt>かねつきょうせい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>加熱温度<rt>かねつおんど</rt></ruby>は、<ruby>加熱後空冷<rt>かねつごくうれい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は 850℃~900℃ とする。", textMY: "(4) 400N/mm² အဆင့် သံမဏိကို အပူပေးဖြောင့်မတ်ရာတွင် လေဖြင့် အအေးခံပါက အပူချိန်ကို 850℃~900℃ ထားရှိရမည်။" },
      { id: 5, textJP: "(5) 490N/mm² <ruby>級鋼<rt>きゅうこう</rt></ruby>を<ruby>加熱矯正<rt>かねつきょうせい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>加熱温度<rt>かねつおんど</rt></ruby>は、400N/mm² <ruby>級鋼<rt>きゅうこう</rt></ruby>を<ruby>加熱矯正<rt>かねつきょうせい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>より 100℃ <ruby>低い温度<rt>ひくいおんど</rt></ruby>としなければならない。", textMY: "(5) 490N/mm² အဆင့် သံမဏိကို အပူပေးဖြောင့်မတ်ရာတွင် အပူချိန်သည် 400N/mm² အဆင့်ထက် 100℃ နိမ့်သော အပူချိန် ဖြစ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 加熱温度の基準 (Heating Temperature Standards)",
      reasonMY: "490N/mm² အဆင့်ရှိ သံမဏိများ (SM490, SN490 စသည်) သည်လည်း 400N အဆင့်များကဲ့သို့ပင် တူညီသော အပူချိန်အပိုင်းအခြားများ (လေဖြင့်အအေးခံပါက ၈၅၀-၉၀၀ ဒီဂရီ၊ ရေဖြင့်အအေးခံပါက ၆၀၀-၆၅၀ ဒီဂရီ) ဖြင့်သာ လုပ်ဆောင်ရပါမည်။ ၁၀၀ ဒီဂရီ လျှော့ချရမည်ဆိုခြင်းမှာ မှားယွင်းပါသည်။",
      memoryTipMY: "400N ရော 490N ရော အပူပေးဖြောင့်မတ်သည့် အပူချိန် အတူတူပင် ဖြစ်သည်။"
    }
  },
  {
    id: "2-22",
    questionJP: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>溶接継手<rt>ようせつつぎて</rt></ruby>の<ruby>実形<rt>じつけい</rt></ruby>とそれに対応する JIS <ruby>溶接記号<rt>ようせつきごう</rt></ruby>の<ruby>組合<rt>くみあわ</rt></ruby>せのうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အောက်ဖော်ပြပါ ဂဟေဆက်ပုံစံနှင့် JIS သင်္ကေတများ ပေါင်းစပ်မှုအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) K<ruby>形開先突合せ継手<rt>がたかいさきつきあわせつぎて</rt></ruby>", textMY: "(1) K-shape groove butt joint (K ပုံသဏ္ဌာန် အဆက်)" },
      { id: 2, textJP: "(2) V<ruby>形開先突合せ継手<rt>がたかいさきつきあわせつぎて</rt></ruby>", textMY: "(2) V-shape groove butt joint (V ပုံသဏ္ဌာန် အဆက်)" },
      { id: 3, textJP: "(3) <ruby>裏当<rt>うらあ</rt></ruby>て<ruby>金付<rt>がねつ</rt></ruby>きレ<ruby>形開先<rt>がたかいさき</rt></ruby>T<ruby>継手<rt>つぎて</rt></ruby>", textMY: "(3) Backing metal ပါဝင်သော Single-bevel T-joint (ရဲပုံစံ T အဆက်)" },
      { id: 4, textJP: "(4) K<ruby>形開先<rt>がたかいさき</rt></ruby>T<ruby>継手<rt>つぎて</rt></ruby>", textMY: "(4) K-shape groove T-joint" },
      { id: 5, textJP: "(5) <ruby>連続隅肉<rt>れんぞくすみにく</rt></ruby>T<ruby>継手<rt>つぎて</rt></ruby>", textMY: "(5) Continuous Fillet weld T-joint" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接記号 (Welding Symbols)",
      reasonMY: "သင်္ကေတ (၃) တွင် ဖော်ပြထားသော Bevel လျှာဖောက်သည့် ဦးတည်ချက်နှင့် အစစ်အမှန်ပုံစံ ကိုက်ညီမှု မရှိပါ။ JIS သင်္ကေတတွင် မြှားညွှန်ရာဘက်ခြမ်းနှင့် လျှာဖောက်ရမည့် ဘက်ခြမ်း လွဲမှားနေပါသည်။",
      memoryTipMY: "ဂဟေသင်္ကေတတွင် မြှားညွှန်ပြသော ဘက်ခြမ်းသည် လျှာဖောက် (Bevel side) ရမည့် နေရာဖြစ်ရမည်။"
    }
  },
  {
    id: "2-23",
    questionJP: "<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>および<ruby>溶接<rt>ようせつ</rt></ruby>オペレータに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆော်သူနှင့် စက်မောင်းသူများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>半自動溶接<rt>はんじどうようせつ</rt></ruby>に<ruby>従事<rt>じゅうじ</rt></ruby>できる<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>は、<ruby>溶接姿勢・板厚<rt>ようせつしせい・いたあつ</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じた JIS Z 3841 の<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "(1) Semi-automatic ဂဟေတွင် လုပ်ကိုင်နိုင်သော ဂဟေပညာရှင်သည် ဂဟေအနေအထားနှင့် အထူအလိုက် JIS Z 3841 စာမေးပွဲ အောင်မြင်ထားသော လက်မှတ်ရပညာရှင် ဖြစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>サブマージアーク溶接、エレクトロスラグ溶接、ガスシールドアーク溶接<rt>さぶまーじあーくようせつ、えれくとろすらぐようせつ、がすしーるどあーくようせつ</rt></ruby>などの<ruby>自動溶接装置<rt>じどうようせつそうち</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いて<ruby>行う溶接<rt>おこなうようせつ</rt></ruby>に<ruby>従事<rt>じゅうじ</rt></ruby>するオペレータは、JIS Z 3801 または JIS Z 3841 の<ruby>基本級<rt>きほんきゅう</rt></ruby>および<ruby>専門級<rt>せんもんきゅう</rt></ruby>の<ruby>合格者<rt>ごうかくしゃ</rt></ruby>とする。", textMY: "(2) SAW, ESW, GMAW စသော အော်တိုဂဟေစက် မောင်းနှင်သူများသည် JIS Z 3801 သို့မဟုတ် JIS Z 3841 ၏ အခြေခံနှင့် အဆင့်မြင့် အောင်မြင်သူများ ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>オペレータは、<ruby>少<rt>すく</rt></ruby>なくとも JIS Z 3841 の<ruby>基本級<rt>きほんきゅう</rt></ruby>となる<ruby>級<rt>きゅう</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>とする。", textMY: "(3) စက်ရုပ်ဂဟေ (Robot Welding) မောင်းနှင်သူသည် အနည်းဆုံး JIS Z 3841 ၏ အခြေခံအဆင့် အောင်မြင်ထားသူ ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>技量付加試験<rt>ぎりょうふかしけん</rt></ruby>は、<ruby>被覆アーク溶接、半自動溶接<rt>ひふくあーくようせつ、はんじどうようせつ</rt></ruby>に<ruby>従事<rt>じゅうじ</rt></ruby>する JIS <ruby>有資格者<rt>ゆうしかくしゃ</rt></ruby>およびロボットオペレータを<ruby>対象<rt>たいしょう</rt></ruby>に、<ruby>工事件数<rt>こうじけんすう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>するために<ruby>原則<rt>げんそく</rt></ruby>として<ruby>実施<rt>じっし</rt></ruby>する。", textMY: "(4) ကျွမ်းကျင်မှုထပ်တိုးစစ်ဆေးခြင်း (技量付加試験) သည် လုပ်ငန်းအရေအတွက်ကို အတည်ပြုရန်အတွက် စည်းမျဉ်းအရ စစ်ဆေးခြင်း ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>技量確認試験<rt>ぎりょうかくにんしけん</rt></ruby>は、<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>が JIS <ruby>等<rt>とう</rt></ruby>の<ruby>資格<rt>しかく</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>する<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>などの<ruby>技量<rt>ぎりょう</rt></ruby>に<ruby>疑問<rt>ぎもん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じた<ruby>場合<rt>ばあい</rt></ruby>などに、その<ruby>技量<rt>ぎりょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>するために<ruby>行う<rt>おこなう</rt></ruby><ruby>試験<rt>しけん</rt></ruby>である。", textMY: "(5) ကျွမ်းကျင်မှုအတည်ပြုစစ်ဆေးခြင်း (技量確認試験) သည် လုပ်ငန်းကြီးကြပ်သူက ဂဟေဆော်သူ၏ ကျွမ်းကျင်မှုအပေါ် သံသယရှိပါက ကျွမ်းကျင်မှုကို အတည်ပြုရန် ပြုလုပ်သော စစ်ဆေးမှု ဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 技量付加試験の目的 (Purpose of Additional Skill Test)",
      reasonMY: "ကျွမ်းကျင်မှုထပ်တိုးစစ်ဆေးခြင်း (技量付加試験) ဆိုသည်မှာ လုပ်ငန်းအရေအတွက် (工事件数) ကို အတည်ပြုရန် မဟုတ်ဘဲ၊ သက်ဆိုင်ရာ လုပ်ငန်းခွင်အလိုက် လိုအပ်သော အထူးကျွမ်းကျင်မှု (特有の技量) ရှိမရှိ စစ်ဆေးရန် ပြုလုပ်ခြင်း ဖြစ်ပါသည်။",
      memoryTipMY: "ကျွမ်းကျင်မှုစစ်ဆေးခြင်းသည် အလုပ်အရေအတွက်အတွက် မဟုတ်ဘဲ လုပ်ငန်းခွင်သီးသန့် စွမ်းရည်အတွက် ဖြစ်သည်။"
    }
  },
  {
    id: "2-24",
    questionJP: "<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ပစ္စည်းများနှင့် ပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク溶接棒、溶接ワイヤ、フラックス<rt>ひふくあーくようせつぼう、ようせつわいや、ふらっくす</rt></ruby>などの<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>は JIS <ruby>規格適合品<rt>きかくてきごうひん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>から、<ruby>使用<rt>しよう</rt></ruby>する<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>材質、継手形式<rt>ざいしつ、つぎてけいしき</rt></ruby>などに<ruby>適合<rt>てきごう</rt></ruby>するものを<ruby>選定<rt>せんてい</rt></ruby>する。", textMY: "(1) ဂဟေချောင်း၊ ဂဟေဝါယာနှင့် Flux အစရှိသော ဂဟေပစ္စည်းများကို JIS စံချိန်မီပစ္စည်းများထဲမှ အသုံးပြုမည့် သံမဏိအမျိုးအစားနှင့် အဆက်ပုံစံအလိုက် ကိုက်ညီသောအရာကို ရွေးချယ်ရမည်။" },
      { id: 2, textJP: "(2) JIS <ruby>規格<rt>きかく</rt></ruby>では、<ruby>溶接材料素材<rt>ようせつざいりょうそざい</rt></ruby>の<ruby>化学成分<rt>かがくせいぶん</rt></ruby>および<ruby>溶着金属<rt>ようちゃくきんぞく</rt></ruby>の<ruby>引張強さ、降伏点<rt>ひっぱりつよさ、こうふくてん</rt></ruby>などの<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>している。", textMY: "(2) JIS စံနှုန်းတွင် ဂဟေပစ္စည်း၏ ဓာတုဖွဲ့စည်းမှုနှင့် ဂဟေသား၏ ဆွဲဆန့်ခံနိုင်အား၊ Yield point စသော စက်မှုပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများကို သတ်မှတ်ထားသည်။" },
      { id: 3, textJP: "(3) <ruby>使用<rt>しよう</rt></ruby>する<ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>は、<ruby>規格名、種類、銘柄、棒径<rt>きかくめい、しゅるい、めいがら、ぼうけい</rt></ruby>などを<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>して<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けたものとする。", textMY: "(3) အသုံးပြုမည့် ဂဟေပစ္စည်းများကို စံချိန်အမည်၊ အမျိုးအစား၊ တံဆိပ်၊ အချင်း စသည်တို့ကို ထုတ်လုပ်မှုလမ်းညွှန်စာအုပ်တွင် ရေးသားဖော်ပြ၍ လုပ်ငန်းကြီးကြပ်သူ၏ ခွင့်ပြုချက် ရယူရမည်။" },
      { id: 4, textJP: "(4) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>する<ruby>炭酸ガス<rt>たんさんがす</rt></ruby>は、JIS K 1106「<ruby>液化二酸化炭素<rt>えきかにさんかたんそ</rt></ruby>」に<ruby>規定<rt>きてい</rt></ruby>する 3 <ruby>種規格品<rt>しゅきかくひん</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>しなければならない。", textMY: "(4) Gas Shielded Arc Welding တွင် အသုံးပြုသော CO2 ဓာတ်ငွေ့သည် JIS K 1106 အရ သတ်မှတ်ထားသော အဆင့် ၃ (3 種) စံချိန်မီပစ္စည်းကို အသုံးပြုရမည်။" },
      { id: 5, textJP: "(5) <ruby>溶接材料<rt>ようせつざいりょう</rt></ruby>は、<ruby>発注時、受入時、保管時<rt>はっちゅうじ、うけいれじ、ほかんじ</rt></ruby>などの<ruby>各段階<rt>かくだんかい</rt></ruby>において<ruby>管理<rt>かんり</rt></ruby>しなければならない。", textMY: "(5) ဂဟေပစ္စည်းများကို မှာယူချိန်၊ လက်ခံချိန်နှင့် သိုလှောင်ချိန် အစရှိသော အဆင့်တိုင်းတွင် စနစ်တကျ ထိန်းသိမ်းစီမံရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 炭酸ガスの規格 (CO2 Gas Standards)",
      reasonMY: "Gas Shielded Arc Welding တွင် အသုံးပြုရမည့် CO2 ဓာတ်ငွေ့သည် JIS K 1106 အရ 'အဆင့် ၂' (2 種) သို့မဟုတ် ၎င်းထက် သန့်စင်သော စံချိန်မီပစ္စည်း ဖြစ်ရပါမည်။ အဆင့် ၃ မဟုတ်ပါ။",
      memoryTipMY: "Gas Shielded ဂဟေအတွက် CO2 ဓာတ်ငွေ့သည် အဆင့် ၂ (2-shu) ဖြစ်ရမည်။"
    }
  },
  {
    id: "2-25",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>した<ruby>溶接作業<rt>ようせつさぎょう</rt></ruby>において<ruby>記録<rt>きろく</rt></ruby>された<ruby>次<rt>つぎ</rt></ruby>に<ruby>示す溶接施工条件<rt>しめすようせつせこうじょうけん</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding လုပ်ငန်းမှတ်တမ်းပါ အခြေအနေများအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 400N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW11 / 330A / 40V / 20cm/min / 330℃", textMY: "(1) 400N/mm² အဆင့်သံမဏိ / YGW11 / 330A / 40V / 20cm/min / 330℃" },
      { id: 2, textJP: "(2) 400N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW11 / 300A / 40V / 30cm/min / 435℃", textMY: "(2) 400N/mm² အဆင့်သံမဏိ / YGW11 / 300A / 40V / 30cm/min / 435℃" },
      { id: 3, textJP: "(3) 400N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW18 / 300A / 40V / 20cm/min / 425℃", textMY: "(3) 400N/mm² အဆင့်သံမဏိ / YGW18 / 300A / 40V / 20cm/min / 425℃" },
      { id: 4, textJP: "(4) 490N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW11 / 300A / 40V / 30cm/min / 198℃", textMY: "(4) 490N/mm² အဆင့်သံမဏိ / YGW11 / 300A / 40V / 30cm/min / 198℃" },
      { id: 5, textJP: "(5) 490N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW18 / 330A / 40V / 20cm/min / 285℃", textMY: "(5) 490N/mm² အဆင့်သံမဏိ / YGW18 / 330A / 40V / 20cm/min / 285℃" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 入熱量とパス間温度 (Heat Input and Interpass Temperature)",
      reasonMY: "ရွေးချယ်မှု (၃) ပါ အခြေအနေများ (300A, 40V, 20cm/min) တွင် Heat Input မှာ 36 kJ/cm ဖြစ်ပြီး Interpass Temperature မှာ 425℃ အထိ မြင့်မားနေပါသည်။ 400N/mm² အဆင့် သံမဏိအတွက် အပူချိန်ကန့်သတ်ချက် (350℃ အောက်) ထက် ကျော်လွန်နေသောကြောင့် မသင့်လျော်ပါ။",
      memoryTipMY: "Heat Input နှင့် Interpass temperature သတ်မှတ်ချက်ဇယားကို ဂရုပြုပါ။"
    }
  },
  {
    id: "2-26",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>について、<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>の<ruby>性能評価基準<rt>せいのうひょうかきじゅん</rt></ruby>に<ruby>定<rt>さだ</rt></ruby>められている<ruby>鋼材の種類、溶接材料、溶接入熱とパス間温度<rt>こうざいのしゅるい、ようせつざいりょう、ようせつにゅうねつとぱすかんおんど</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>の<ruby>組合<rt>くみあわ</rt></ruby>せにおいて、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ရုံစွမ်းဆောင်ရည် စံနှုန်းများအရ သံမဏိအမျိုးအစား၊ ဂဟေပစ္စည်း၊ အပူနှင့် အပူချိန် ပေါင်းစပ်မှုများအနက် မသင့်လျော်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 400N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW11, 15 / 40 kJ/cm <ruby>以下<rt>いか</rt></ruby> / 350℃ <ruby>以下<rt>いか</rt></ruby>", textMY: "(1) 400N/mm² အဆင့် / YGW11, 15 / 40 kJ/cm အောက် / 350℃ အောက်" },
      { id: 2, textJP: "(2) 490N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW11, 15 / 30 kJ/cm <ruby>以下<rt>いか</rt></ruby> / 250℃ <ruby>以下<rt>いか</rt></ruby>", textMY: "(2) 490N/mm² အဆင့် / YGW11, 15 / 30 kJ/cm အောက် / 250℃ အောက်" },
      { id: 3, textJP: "(3) 490N/mm²<ruby>級鋼<rt>きゅうこう</rt></ruby> / YGW18, 19 / 40 kJ/cm <ruby>以下<rt>いか</rt></ruby> / 350℃ <ruby>以下<rt>いか</rt></ruby>", textMY: "(3) 490N/mm² အဆင့် / YGW18, 19 / 40 kJ/cm အောက် / 350℃ အောက်" },
      { id: 4, textJP: "(4) 400N/mm²<ruby>級<rt>きゅう</rt></ruby>の STKR・BCP・BCR / YGW11, 15 / 30 kJ/cm <ruby>以下<rt>いか</rt></ruby> / 250℃ <ruby>以下<rt>いか</rt></ruby>", textMY: "(4) 400N/mm² STKR・BCP・BCR / YGW11, 15 / 30 kJ/cm အောက် / 250℃ အောက်" },
      { id: 5, textJP: "(5) 490N/mm²<ruby>級<rt>きゅう</rt></ruby>の STKR・BCP / YGW11, 15 / 30 kJ/cm <ruby>以下<rt>いか</rt></ruby> / 250℃ <ruby>以下<rt>いか</rt></ruby>", textMY: "(5) 490N/mm² STKR・BCP / YGW11, 15 / 30 kJ/cm အောက် / 250℃ အောက်" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 鋼材種別と溶接材料 (Steel Grade & Welding Materials)",
      reasonMY: "490N/mm² အဆင့်ရှိသော Square Tube (STKR, BCP) များအတွက် YGW11, 15 ဝါယာများကို သုံးရန် မသင့်လျော်ဘဲ Toughness မြင့်မားသော YGW18, 19 ဝါယာများကို အသုံးပြုရပါမည်။",
      memoryTipMY: "490N အဆင့် ပိုက်များအတွက် YGW18/19 wire သုံးခြင်းက ပိုသင့်လျော်သည်။"
    }
  },
  {
    id: "2-27",
    questionJP: "<ruby>鋼構造建築物<rt>こうこうぞうけんちくぶつ</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>溶接法<rt>ようせつほう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、シールドガスの<ruby>供給<rt>きょうきゅう</rt></ruby>に<ruby>支障<rt>ししょう</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>に<ruby>施工上問題<rt>せこうじょうもんだい</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じるものはどれか。",
    questionMY: "ဂဟေနည်းလမ်းများအနက် အကာအကွယ်ဓာတ်ငွေ့ (Shield gas) ပြတ်တောက်သွားပါက လုပ်ငန်းတွင် ပြဿနာတက်နိုင်သော နည်းလမ်းမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>", textMY: "(1) Shielded Metal Arc Welding (SMAW)" },
      { id: 2, textJP: "(2) <ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>", textMY: "(2) Gas Shielded Arc Welding (GMAW / MAG / MIG)" },
      { id: 3, textJP: "(3) <ruby>サブマージアーク溶接<rt>さぶまーじあーくようせつ</rt></ruby>", textMY: "(3) Submerged Arc Welding (SAW)" },
      { id: 4, textJP: "(4) <ruby>エレクトロスラグ溶接<rt>えれくとろすらぐようせつ</rt></ruby>", textMY: "(4) Electroslag Welding (ESW)" },
      { id: 5, textJP: "(5) <ruby>セルフシールドアーク溶接<rt>せるふしーるどあーくようせつ</rt></ruby>", textMY: "(5) Self-Shielded Arc Welding" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ガスシールドアーク溶接 (Gas Shielded Arc Welding)",
      reasonMY: "Gas Shielded Arc Welding သည် အပြင်မှပေးပို့သော Shield gas ဖြင့်သာ ဂဟေသားကို လေထုဒဏ်မှ ကာကွယ်ပေးထားခြင်းဖြစ်၍ ဓာတ်ငွေ့ပြတ်တောက်ပါက Blowhole စသော ချို့ယွင်းချက်များ ချက်ချင်းဖြစ်ပေါ်စေပါသည်။",
      memoryTipMY: "Gas Shielded ဂဟေတွင် Shield Gas ပြတ်တောက်ပါက အဓိကပြဿနာ တက်စေသည်။"
    }
  },
  {
    id: "2-28",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>施工<rt>せこう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>の<ruby>予熱<rt>よねつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆော်ရာတွင် ကြိုတင်အပူပေးခြင်း (Preheating) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>予熱<rt>よねつ</rt></ruby>は、<ruby>予定溶接線<rt>よていようせつせん</rt></ruby>を<ruby>中心<rt>ちゅうしん</rt></ruby>とした<ruby>表裏両側<rt>ひょうりりょうがわ</rt></ruby>の 100mm の<ruby>範囲<rt>はんい</rt></ruby>で<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(1) ကြိုတင်အပူပေးခြင်းကို ဂဟေဆော်မည့် မျဉ်းကြောင်းကို ဗဟိုပြု၍ ရှေ့နောက်နှစ်ဖက်စလုံး 100mm အကွာအဝေးအတွင်း လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>予熱<rt>よねつ</rt></ruby>は、ガス<ruby>炎<rt>ほのお</rt></ruby>によって<ruby>可能<rt>かのう</rt></ruby>な<ruby>限<rt>かぎ</rt></ruby>り<ruby>均一<rt>きんいつ</rt></ruby>に<ruby>加熱<rt>かねつ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>が <ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "(2) ကြိုတင်အပူပေးခြင်းကို ဓာတ်ငွေ့မီးတောက်ဖြင့် တတ်နိုင်သမျှ ညီညာစွာ အပူပေးသော နည်းလမ်းမှာ အသုံးအများဆုံး ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>予熱<rt>よねつ</rt></ruby>は、<ruby>高強度鋼<rt>こうきょうどこう</rt></ruby>など<ruby>予熱温度<rt>よねつおんど</rt></ruby>が <ruby>高い場合<rt>たかいばあい</rt></ruby>には、<ruby>電気抵抗線ヒーター<rt>でんきていこうせんひーたー</rt></ruby>や<ruby>高周波誘導加熱ヒーター<rt>こうしゅうはゆうどうかねつひーたー</rt></ruby>などを用いて<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(3) ခိုင်အားမြင့်သံမဏိကဲ့သို့ ကြိုတင်အပူပေးအပူချိန် မြင့်မားပါက လျှပ်စစ်ခံနိုင်ရည်လိုင်းအပူပေးစက် သို့မဟုတ် High-frequency induction heater ကို သုံး၍ ပြုလုပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>予熱温度<rt>よねつおんど</rt></ruby>は<ruby>溶接法（被覆アーク溶接、ガスシールドアーク溶接、サブマージアーク溶接）、鋼種、板厚<rt>ようせつほう、こうしゅ、いたあつ</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>標準温度<rt>ひょうじゅんおんど</rt></ruby>が <ruby>定<rt>さだ</rt></ruby>められている。", textMY: "(4) ကြိုတင်အပူပေးအပူချိန်ကို ဂဟေနည်းလမ်း (SMAW, GMAW, SAW)၊ သံမဏိအမျိုးအစားနှင့် အထူအလိုက် စံအပူချိန် သတ်မှတ်ထားသည်။" },
      { id: 5, textJP: "(5) <ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>部材相互<rt>ぶざいそうご</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>や<ruby>鋼種<rt>こうしゅ</rt></ruby>の<ruby>組合<rt>くみあわ</rt></ruby>せが<ruby>異<rt>こと</rt></ruby>なる<ruby>場合<rt>ばあい</rt></ruby>、<ruby>予熱温度<rt>よねつおんど</rt></ruby>は <ruby>低い方<rt>ひくいほう</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>する。", textMY: "(5) ဂဟေဆော်မည့် ပစ္စည်းအချင်းချင်း အထူနှင့် သံမဏိအမျိုးအစား ကွဲပြားပါက ကြိုတင်အပူပေးအပူချိန်ကို နိမ့်သောအပူချိန်အတိုင်း ယူရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予熱温度の選定 (Selection of Preheating Temperature)",
      reasonMY: "အထူ သို့မဟုတ် အမျိုးအစား မတူညီသော သံမဏိများကို ဆက်ရာတွင် အအေးခံနှုန်းကို ထိန်းချုပ်ရန်အတွက် 'လိုအပ်ချက် ပိုမြင့်မားသော အပူချိန်' (高い方の温度) ကို မဖြစ်မနေ ယူရပါမည်။",
      memoryTipMY: "Preheat အပူချိန်သည် ပိုမြင့်သော အပူချိန် (Higher Temperature) အတိုင်း ယူရမည်။"
    }
  },
  {
    id: "2-29",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း ဆောင်ရွက်ခြင်းနှင့် ပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>裏当て金<rt>うらあてがね</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>片面<rt>かためん</rt></ruby>から<ruby>溶接<rt>ようせつ</rt></ruby>し、<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>溶融接合<rt>ようゆうせつごう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>に、<ruby>初層<rt>しょそう</rt></ruby>の<ruby>溶落ち<rt>とけおち</rt></ruby>を<ruby>防止<rt>ぼうし</rt></ruby>し、<ruby>初層<rt>しょそう</rt></ruby>のビード<ruby>形成<rt>けいせい</rt></ruby>を<ruby>容易<rt>ようい</rt></ruby>にするために<ruby>裏面<rt>りめん</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けるものである。", textMY: "(1) Backing metal သည် ပစ္စည်းကို တစ်ဖက်တည်းမှ ဂဟေဆော်၍ အပြည့်အဝ ပျော်ဝင်ဆက်စပ်ရာတွင် ပထမအလွှာ အရည်ကျွံကျမှုကို ကာကွယ်ရန်နှင့် ပထမအလွှာ Bead ဖြစ်ပေါ်စေရန် နောက်ကျောဘက်တွင် တပ်ဆင်သောအရာ ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>溶接部<rt>ようせつぶ</rt></ruby>において、アーク<ruby>開始点<rt>かいしてん</rt></ruby>および<ruby>終了点<rt>しゅうりょうてん</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>する<ruby>欠陥<rt>けっかん</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らすための<ruby>対策<rt>たいさく</rt></ruby>として、<ruby>溶接始終端<rt>ようせつしじゅうたん</rt></ruby>に<ruby>鋼製エンドタブ<rt>こうせいえんどたぶ</rt></ruby>または<ruby>固形エンドタブ<rt>こけいえんどたぶ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける。", textMY: "(2) ဂဟေဆက်နေရာတွင် Arc စတင်ရာနှင့် အဆုံးသတ်ရာတွင် ဖြစ်ပေါ်သော ချို့ယွင်းချက်များကို လျှော့ချရန်အတွက် ဂဟေအစအဆုံးတွင် Steel End Tab သို့မဟုတ် Solid End Tab ကို တပ်ဆင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>鋼製エンドタブ<rt>こうせいえんどたぶ</rt></ruby>の<ruby>長さ<rt>ながさ</rt></ruby>は、<ruby>溶接方法<rt>ようせつほうほう</rt></ruby>や<ruby>母材板厚<rt>ぼざいたあつ</rt></ruby>に<ruby>関わらず<rt>かかわらず</rt></ruby> 30~50mm の<ruby>範囲<rt>はんい</rt></ruby>で<ruby>統一<rt>とういつ</rt></ruby>するのが<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "(3) Steel End Tab ၏ အလျားသည် ဂဟေနည်းလမ်းနှင့် ပင်မသတ္တုအထူ မည်သို့ပင်ဖြစ်စေ 30~50mm အတွင်း တစ်ပြေးညီ သတ်မှတ်ထားခြင်းက အသုံးအများဆုံး ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>両面溶接<rt>りょうめんようせつ</rt></ruby>において、<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>完全溶込み溶接<rt>かんぜんようこみようせつ</rt></ruby>するために<ruby>行<rt>おこな</rt></ruby>う<ruby>作業<rt>さぎょう</rt></ruby>が <ruby>裏はつり<rt>うらはつり</rt></ruby>である。<ruby>表面溶接部<rt>ひょうめんようせつぶ</rt></ruby>の<ruby>初層部<rt>しょそうぶ</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>した<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>することと、<ruby>裏面<rt>りめん</rt></ruby>から<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>行う<rt>おこなう</rt></ruby>ための<ruby>開先<rt>かいさき</rt></ruby>を<ruby>整形<rt>せいけい</rt></ruby>することを<ruby>目的<rt>もくてき</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "(4) နှစ်ဖက်ဂဟေတွင် အပြည့်အဝ ပျော်ဝင်စေရန် လုပ်ဆောင်သော လုပ်ငန်းမှာ Back gouging ဖြစ်ပြီး ချို့ယွင်းချက် ဖယ်ရှားရန်နှင့် အနောက်ဘက်မှ ဂဟေဆော်ရန် Groove ပုံသွင်းရန် ရည်ရွယ်သည်။" },
      { id: 5, textJP: "(5) <ruby>溶接部<rt>ようせつぶ</rt></ruby>における<ruby>外観上<rt>がいかんじょう</rt></ruby>の<ruby>管理項目<rt>かんりこうもく</rt></ruby>および<ruby>許容差<rt>きょようさ</rt></ruby>は、<ruby>平成<rt>へいせい</rt></ruby> 12 <ruby>年建設省告示<rt>ねんけんせつしょうこくじ</rt></ruby> 1464 <ruby>号<rt>ごう</rt></ruby>および「JASS 6」<ruby>付則<rt>ふそく</rt></ruby> 6 「<ruby>鉄骨精度検査基準<rt>てっこつせいどけんさきじゅん</rt></ruby>」による。", textMY: "(5) ဂဟေဆက်နေရာ၏ အပြင်ပန်းစစ်ဆေးမှု စီမံခန့်ခွဲမှုအချက်များနှင့် ခွင့်ပြုလွဲချော်မှုများသည် အမိန့်ကြော်ငြာစာအမှတ် ၁၄၆၄ နှင့် JASS 6 နောက်ဆက်တွဲ ၆ အရ ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - エンドタブの長さ (End Tab Length)",
      reasonMY: "Steel End Tab ၏ အလျားသည် ဂဟေဆက်ရမည့် ပစ္စည်း၏ အထူ (Plate Thickness) နှင့် ဂဟေဆက်နည်းစနစ် (Welding Method) အပေါ် မူတည်ပြီး ကွဲပြားနိုင်ပါသည်။ 'အမြဲတမ်း ၃၀-၅၀ mm' ဟု ပုံသေသတ်မှတ်ထားခြင်း မရှိပါ။",
      memoryTipMY: "End Tab အရှည်သည် အထူနှင့် ဂဟေနည်းစနစ်ပေါ် မူတည်၍ ပြောင်းလဲနိုင်သည်။"
    }
  },
  {
    id: "2-30",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>（イ～ホ）のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>な<ruby>記述<rt>きじゅつ</rt></ruby>の<ruby>組合<rt>くみあわ</rt></ruby>せはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်းနှင့် ပတ်သက်သော အောက်ပါဖော်ပြချက် (ဣ မှ ဧ) ထဲမှ မသင့်လျော်သော အချက်များ ပေါင်းစပ်မှုကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) イ、ホ", textMY: "(1) ဣ နှင့် ဧ" },
      { id: 2, textJP: "(2) イ、ロ", textMY: "(2) ဣ နှင့် ရ" },
      { id: 3, textJP: "(3) ロ、ハ", textMY: "(3) ရ နှင့် ဟ" },
      { id: 4, textJP: "(4) ハ、ニ", textMY: "(4) ဟ နှင့် န" },
      { id: 5, textJP: "(5) ハ、ホ", textMY: "(5) ဟ နှင့် ဧ" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接施工の組合せ (Welding Execution Combination)",
      reasonMY: "(ハ) နှင့် (ホ) တို့သည် မသင့်လျော်ပါ။ (ハ) တွင် ဖော်ပြထားသော ဂဟေအမျိုးအစား ခွဲခြားမှုနှင့် (ホ) တွင် ဖော်ပြထားသော လေတိုက်နှုန်း ကန့်သတ်ချက် (Gas သုံး ဂဟေတွင် လေတိုက်နှုန်း 2m/s ထက်ကျော်ပါက အကာအကွယ်မဲ့ ဆော်ခွင့်မရှိပါ) စသည်တို့ လွဲမှားနေသောကြောင့် ဖြစ်ပါသည်။",
      memoryTipMY: "Gas Welding တွင် လေတိုက်နှုန်း 2m/s ကျော်ပါက အကာအကွယ် (Windbreak) လိုအပ်ပါသည်။"
    }
  }
];
