import { StudyCardData } from '../types';

export const chapter1Part3Data: StudyCardData[] = [
  {
    id: "1-15",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်း ဒီဇိုင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) H<ruby>形断面<rt>がただんめん</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>において、<ruby>断面<rt>だんめん</rt></ruby>のねじりを<ruby>伴<rt>ともな</rt></ruby>いながら<ruby>圧縮側<rt>あっしゅくがわ</rt></ruby>フランジが <ruby>横方向<rt>よこほうこう</rt></ruby>に<ruby>座屈<rt>ざくつ</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>横座屈<rt>よこざくつ</rt></ruby>という。", textMY: "(1) H-Section Beam တွင် ဖြတ်ပိုင်းလိမ်တွန့်မှုနှင့်အတူ ဖိအားဘက်ခြမ်း Flange သည် ဘေးတိုက်သို့ ခုံးထွက်သွားသော ဖြစ်စဉ်ကို Lateral Buckling (横座屈) ဟု ခေါ်သည်။" },
      { id: 2, textJP: "(2) <ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が <ruby>薄<rt>うす</rt></ruby>すぎると、<ruby>部材全体<rt>ぶざいぜんたい</rt></ruby>としての<ruby>座屈<rt>ざくつ</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じる<ruby>前<rt>まえ</rt></ruby>に<ruby>板要素<rt>いたようそ</rt></ruby>が <ruby>波打<rt>なみう</rt></ruby>つことがある。これを<ruby>防止<rt>ぼうし</rt></ruby>するために、<ruby>幅厚比制限<rt>はばあつひせいげん</rt></ruby>が <ruby>設<rt>もう</rt></ruby>けられている。", textMY: "(2) သံမဏိပြား အထူပါးလွန်းပါက အစိတ်အပိုင်းတစ်ခုလုံး မခုံးထွက်မီ သံပြားမျက်နှာပြင် လှိုင်းထတွန့်လိပ်သွားနိုင်သည်။ ယင်းကို တားဆီးရန် Width-to-thickness ratio (幅厚比) ကန့်သတ်ချက်ကို သတ်မှတ်ထားသည်။" },
      { id: 3, textJP: "(3) <ruby>角形鋼管<rt>かくがたこうかん</rt></ruby>や<ruby>円形鋼管<rt>えんけいこうかん</rt></ruby>などの<ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>では、<ruby>曲<rt>ま</rt></ruby>げモーメントが <ruby>作用<rt>さよう</rt></ruby>しても<ruby>横座屈<rt>よこざくつ</rt></ruby>は<ruby>発生<rt>はっせい</rt></ruby>することはないので、<ruby>設計時<rt>せっけいじ</rt></ruby>に<ruby>横座屈<rt>よこざくつ</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "(3) Box/Pipe ပုံစံ အပိတ်ဖြတ်ပိုင်းများတွင် Bending Moment သက်ရောက်သော်လည်း Lateral Buckling မဖြစ်ပေါ်နိုင်သဖြင့် ဒီဇိုင်းတွင် Lateral Buckling ကို ထည့်သွင်းစဉ်းစားရန် မလိုပေ။" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>げ<ruby>剛性<rt>ごうせい</rt></ruby>が <ruby>不足<rt>ふそく</rt></ruby>したので、<ruby>断面形状<rt>だんめんけいじょう</rt></ruby>をそのままとし<ruby>鋼種<rt>こうしゅ</rt></ruby>を SN400B から SN490B に<ruby>変更<rt>へんこう</rt></ruby>することで<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させた。", textMY: "(4) Beam ၏ Bending Stiffness မလုံလောက်သဖြင့် ဖြတ်ပိုင်းပုံသဏ္ဌာန်ကို မပြောင်းဘဲ သံမဏိအမျိုးအစားကို SN400B မှ SN490B သို့ ပြောင်းလဲခြင်းဖြင့် Bending Stiffness ကို မြှင့်တင်ခဲ့သည်။" },
      { id: 5, textJP: "(5) <ruby>柱<rt>はしら</rt></ruby>の<ruby>局部座屈耐力<rt>きょくぶざくつたいりょく</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるため、<ruby>板要素<rt>いたようそ</rt></ruby>の<ruby>幅厚比<rt>はばあつひ</rt></ruby>をより<ruby>小さく<rt>ちいさく</rt></ruby>した。", textMY: "(5) Column ၏ Local Buckling ခံနိုင်ရည်ကို မြှင့်တင်ရန်အတွက် သံပြား၏ Width-to-thickness ratio ကို ပိုမိုသေးငယ်အောင် ပြုလုပ်ခဲ့သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Young's Modulus (ヤング係数) ၏ တည်ငြိမ်မှု",
      reasonMY: "တောင့်တင်းမှု (Stiffness) သည် Young's Modulus (E) အပေါ်တွင်သာ မူတည်သည်။ သံမဏိအမျိုးအစား မည်သို့ပင်ဖြစ်စေ (SN400 ဖြစ်စေ၊ SN490 ဖြစ်စေ) Young's Modulus သည် အမြဲတမ်း တူညီပါသည်။ ထို့ကြောင့် သံမဏိ Grade ပြောင်းရုံဖြင့် Bending Stiffness တိုးမလာပါ။ ထို့ကြောင့် (၄) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "သံ Grade ဘယ်လောက်မြင့်ပါစေ တောင့်တင်းမှု (Young's Modulus E) ကတော့ အတူတူပါပဲ။"
    }
  },
  {
    id: "1-16",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt (စွမ်းအားမြင့် ဘောလ်) ဆက်သွယ်မှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံး (မှန်ကန်သော) အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>には<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>と<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>の 2 <ruby>種類<rt>しゅるい</rt></ruby>があり、それぞれ<ruby>独立<rt>どくりつ</rt></ruby>で<ruby>用<rt>もち</rt></ruby>いることも<ruby>併用<rt>へいよう</rt></ruby>して<ruby>用<rt>もち</rt></ruby>いることも<ruby>可能<rt>かのう</rt></ruby>である。", textMY: "(1) HS Bolt ဆက်သွယ်မှုတွင် Friction Joint (ပွတ်တိုက်ဆက်) နှင့် Tension Joint (ဆွဲအားဆက်) ဟူ၍ ၂ မျိုးရှိပြီး၊ ၎င်းတို့ကို သီးခြားဖြစ်စေ တွဲဖက်၍ဖြစ်စေ အသုံးပြုနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>用<rt>よう</rt></ruby>の<ruby>孔あけ<rt>あなあけ</rt></ruby>には、<ruby>板厚<rt>いたあつ</rt></ruby> 12mm <ruby>以下<rt>いか</rt></ruby>の<ruby>板<rt>いた</rt></ruby>を<ruby>除<rt>のぞ</rt></ruby>き、<ruby>必ず<rt>かならず</rt></ruby>ドリルあるいはレーザを<ruby>用<rt>もち</rt></ruby>いなければならない。", textMY: "(2) HS Bolt အတွက် အပေါက်ဖောက်ရာတွင် အထူ 12mm အောက်ပြားများမှလွဲ၍ မဖြစ်မနေ Drill သို့မဟုတ် Laser ကိုသာ အသုံးပြုရမည်။" },
      { id: 3, textJP: "(3) <ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>のために<ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>黒皮除去<rt>くろかわじょきょ</rt></ruby>も<ruby>同時<rt>どうじ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>薬剤<rt>やくざい</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いて<ruby>均質<rt>きんしつ</rt></ruby>な<ruby>摩擦面<rt>まさつめん</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "(3) ပွတ်တိုက်မျက်နှာပြင် အချောသတ်ရန် ဓာတုဆေးဖြင့် သံချေးတက်စေရာတွင် Mill Scale ဖယ်ရှားခြင်းကို တစ်ပြိုင်နက်တည်း ပြုလုပ်နိုင်သော ဆေးကို သုံးသင့်သည်။" },
      { id: 4, textJP: "(4) <ruby>溶融亜鉛<rt>ようゆうあえん</rt></ruby>めっきを<ruby>施<rt>ほどこ</rt></ruby>した<ruby>高力<rt>こうりょく</rt></ruby>ボルトは<ruby>高い耐食性<rt>たかいたいしょくせい</rt></ruby>を<ruby>示す<rt>しめす</rt></ruby>が、JIS に<ruby>規格<rt>きかく</rt></ruby>がないため<ruby>主要<rt>しゅよう</rt></ruby>な<ruby>構造部材<rt>こうぞうぶざい</rt></ruby>の<ruby>接合<rt>せつごう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いることはできない。", textMY: "(4) Hot-dip Galvanized HS Bolt များသည် သံချေးတက်ခံနိုင်ရည် မြင့်မားသော်လည်း JIS စံနှုန်းမရှိသဖြင့် အဓိက ဖွဲ့စည်းပုံများတွင် အသုံးမပြုနိုင်ပေ။" },
      { id: 5, textJP: "(5) <ruby>トルシア形高力<rt>とるしあがたこうりょく</rt></ruby>ボルトは、ピンテールの<ruby>破断<rt>はだん</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>締付<rt>しめつけ</rt></ruby>トルクの<ruby>管理<rt>かんり</rt></ruby>を<ruby>可能<rt>かのう</rt></ruby>にしたものであり、<ruby>専用<rt>せんよう</rt></ruby>の<ruby>工具<rt>こうぐ</rt></ruby>を<ruby>用<rt>もち</rt></ruby>いず<ruby>容易<rt>ようい</rt></ruby>に<ruby>施工可能<rt>せこうかのう</rt></ruby>なため<ruby>広く<rt>ひろく</rt></ruby>用いられている。", textMY: "(5) Torshear Bolt သည် Pintail ကျိုးပြတ်ခြင်းဖြင့် Torque ကို ထိန်းချုပ်နိုင်ပြီး သီးသန့်ကိရိယာ မလိုဘဲ အလွယ်တကူ ကျပ်နိုင်သဖြင့် အသုံးများသည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - High-strength Bolt အမျိုးအစားများ",
      reasonMY: "Friction Joint (摩擦接合) နှင့် Tension Joint (引張接合) နှစ်မျိုးစလုံးကို သီးခြားဖြစ်စေ၊ တွဲဖက်၍ဖြစ်စေ အသုံးပြုနိုင်ခြင်းသည် နည်းပညာအရ မှန်ကန်သော အချက်ဖြစ်သည်။ ထို့ကြောင့် (၁) သည် အမှန်ဖြစ်ပါသည်။",
      memoryTipMY: "Friction Joint နှင့် Tension Joint ၂ မျိုးစလုံးကို သီးခြားရော ပေါင်းပြီးပါ သုံးနိုင်သည်။"
    }
  },
  {
    id: "1-17",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>は<ruby>摩擦力<rt>まさつりょく</rt></ruby>で<ruby>力<rt>ちから</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>接合部<rt>せつごうぶ</rt></ruby>なので、<ruby>高力<rt>こうりょく</rt></ruby>ボルトの<ruby>孔径<rt>こうけい</rt></ruby>は<ruby>用<rt>もち</rt></ruby>いるボルトのねじの<ruby>呼び径<rt>よびけい</rt></ruby>にかかわらず、ねじの<ruby>呼び径<rt>よびけい</rt></ruby>+3mmとしてよい。", textMY: "(1) Friction Joint သည် ပွတ်တိုက်အားဖြင့် အားပို့လွှတ်သောကြောင့် အပေါက်အချင်း (Hole Diameter) ကို ဘောလ်ဆိုဒ် မည်သို့ပင်ဖြစ်စေ Bolt Diameter + 3mm ဟု ထားရှိနိုင်သည်။" },
      { id: 2, textJP: "(2) ボルトやナットのねじ<ruby>部<rt>ぶ</rt></ruby>に<ruby>打痕<rt>だこん</rt></ruby>やごみ、さびが<ruby>付着<rt>ふちゃく</rt></ruby>するとトルク<ruby>係数<rt>けいすう</rt></ruby>は<ruby>増大<rt>ぞうだい</rt></ruby>し、トルク<ruby>係数値<rt>けいすうち</rt></ruby>が <ruby>変わらない<rt>かわらない</rt></ruby>とみなして<ruby>決<rt>き</rt></ruby>めた<ruby>締付<rt>しめつけ</rt></ruby>トルクで<ruby>締付<rt>しめつけ</rt></ruby>けるとボルト<ruby>張力<rt>ちょうりょく</rt></ruby>が <ruby>低下<rt>ていか</rt></ruby>する。", textMY: "(2) Bolt နှင့် Nut တွင် အညစ်အကြေး၊ သံချေးများ ကပ်ငြိပါက Torque Coefficient တက်လာပြီး သတ်မှတ် Torque ဖြင့် ကျပ်သော်လည်း Bolt တင်းအား (Bolt Tension) ကျဆင်းသွားသည်။" },
      { id: 3, textJP: "(3) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合部<rt>まさつせつごうぶ</rt></ruby>に<ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>肌すき量<rt>はだすきりょう</rt></ruby>が 1mm を<ruby>超<rt>こ</rt></ruby>えるときには<ruby>必ず<rt>かならず</rt></ruby>フィラープレートを<ruby>用<rt>もち</rt></ruby>いなければならない。", textMY: "(3) Friction Joint တွင် ပြားနှစ်ခုကြား ကွာဟချက် (肌すき) 1mm ထက် ကျော်လွန်ပါက မဖြစ်မနေ Filler Plate ကို အသုံးပြုရမည်။" },
      { id: 4, textJP: "(4) <ruby>溶融亜鉛<rt>ようゆうあえん</rt></ruby>めっきを<ruby>施<rt>ほどこ</rt></ruby>した<ruby>高力<rt>こうりょく</rt></ruby>ボルトは JIS に<ruby>規格<rt>きかく</rt></ruby>がないが、<ruby>数社<rt>すうしゃ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>が <ruby>国土交通大臣<rt>こくどこうつうだいじん</rt></ruby>の<ruby>認定<rt>にんてい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けており、<ruby>一般<rt>いっぱん</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>することができる。", textMY: "(4) Hot-dip Galvanized HS Bolt များသည် JIS စံနှုန်းမရှိသော်လည်း MLIT ဝန်ကြီးဌာန အသိအမှတ်ပြုချက် ရရှိထားသော ကုမ္ပဏီထုတ်ကုန်များကို ယေဘုယျအားဖြင့် အသုံးပြုနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>高力ボルト<rt>こうりょくボルト</rt></ruby><ruby>摩擦接合<rt>まさつせつごう</rt></ruby>には<ruby>摩擦面<rt>まさつめん</rt></ruby>が 1<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>と2<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>があり、それぞれ1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>、2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>の<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合部<rt>まさつせつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>は、1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>の<ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "(5) Friction Joint တွင် မျက်နှာပြင် ၁ မျက်နှာနှင့် ၂ မျက်နှာ ရှိပြီး၊ ၂ မျက်နှာ ပွတ်တိုက်မှု၏ ခံနိုင်ရည်သည် ၁ မျက်နှာ၏ ၂ ဆ ဖြစ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Bolt အပေါက်ဆိုဒ် သတ်မှတ်ချက်",
      reasonMY: "သံမဏိတည်ဆောက်ပုံစံနှုန်းများအရ HS Bolt အပေါက်အချင်းသည် Bolt အချင်းအပေါ် မူတည်ပြီး ပုံမှန်အားဖြင့် +2mm (ဥပမာ- M20 ဆိုလျှင် 22mm) သာ သတ်မှတ်သည်။ +3mm ထားနိုင်သည်ဆိုသော (၁) မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "HS Bolt အပေါက်အချင်းသည် ပုံမှန်အားဖြင့် Bolt အချင်းထက် +2mm သာ ကြီးရသည်။"
    }
  },
  {
    id: "1-18",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>接合<rt>せつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>には<ruby>摩擦面<rt>まさつめん</rt></ruby>が 1<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>と2<ruby>面<rt>めん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>があり、それぞれ1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>、2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ぶ。2<ruby>面摩擦<rt>にめんまさつ</rt></ruby>の<ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合部<rt>まさつせつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>は、1<ruby>面摩擦<rt>いちめんまさつ</rt></ruby>の<ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>許容耐力<rt>きょようたいりょく</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby>である。", textMY: "(1) Friction Joint တွင် ၁ မျက်နှာပွတ်တိုက်မှုနှင့် ၂ မျက်နှာပွတ်တိုက်မှု ရှိပြီး၊ ၂ မျက်နှာပွတ်တိုက်မှု၏ ခံနိုင်ရည်သည် ၁ မျက်နှာ၏ ၂ ဆ ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>は、<ruby>接合面<rt>せつごうめん</rt></ruby>の<ruby>摩擦<rt>まさつ</rt></ruby>によって<ruby>力<rt>ちから</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>接合法<rt>せつごうほう</rt></ruby>である。<ruby>強<rt>つよ</rt></ruby>い<ruby>力<rt>ちから</rt></ruby>で<ruby>締<rt>し</rt></ruby>め<ruby>付<rt>つ</rt></ruby>けるため、<ruby>高力<rt>こうりょく</rt></ruby>ボルトに<ruby>作用<rt>さよう</rt></ruby>する<ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさに<ruby>かかわらず一定<rt>かかわらずいってい</rt></ruby>の<ruby>摩擦力<rt>まさつりょく</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できるという<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", textMY: "(2) Friction Joint သည် ပွတ်တိုက်အားဖြင့် အားပို့လွှတ်သော နည်းလမ်းဖြစ်ပြီး အားပြင်းစွာ ကျပ်ထားသဖြင့် Bolt ၏ ဝင်ရိုးတင်းအား မည်မျှပင်ရှိစေ ပွတ်တိုက်အားကို ကိန်းသေတစ်ခု ရရှိနိုင်သည်ဟူသော ထူးခြားချက်ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>にはスプリットティー<ruby>形式<rt>けいしき</rt></ruby>やエンドプレート<ruby>形式<rt>けいしき</rt></ruby>などがあり、<ruby>溶接<rt>ようせつ</rt></ruby>を <ruby>用<rt>もち</rt></ruby>いずに<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>立てる<rt>くみたてる</rt></ruby>ことができる。", textMY: "(3) Tension Joint တွင် Split-tee ပုံစံနှင့် End-plate ပုံစံများရှိပြီး ဂဟေမသုံးဘဲ တိုင်နှင့်မြားတန်းအဆက်ကို တပ်ဆင်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦接合<rt>まさつせつごう</rt></ruby>では、<ruby>摩擦面<rt>まさつめん</rt></ruby>が <ruby>均一<rt>きんいつ</rt></ruby>に<ruby>密着<rt>みっちゃく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>があるので、ボルト<ruby>孔周辺<rt>あなひゅうへん</rt></ruby>が <ruby>平滑<rt>へいかつ</rt></ruby>に<ruby>保<rt>たも</rt></ruby>たれる<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "(4) Friction Joint တွင် ပွတ်တိုက်မျက်နှာပြင် ညီညာစွာ ကပ်နေရန် လိုအပ်သဖြင့် Bolt အပေါက်ပတ်လည်သည် ပြန့်ပြူးနေရန် လိုအပ်သည်။" },
      { id: 5, textJP: "(5) <ruby>トルシア形高力<rt>とるしあがたこうりょく</rt></ruby>ボルトは、ピンテールの<ruby>破断<rt>はだん</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>締付<rt>しめつけ</rt></ruby>トルクの<ruby>管理<rt>かんり</rt></ruby>を<ruby>可能<rt>かのう</rt></ruby>にしたものである。", textMY: "(5) Torshear Bolt သည် Pintail ကျိုးပြတ်ခြင်းဖြင့် လိုအပ်သော တင်းကျပ်မှု Torque ကို ထိန်းချုပ်စေနိုင်သော ဘောလ်ဖြစ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ပွတ်တိုက်အား၏ သဘောတရား",
      reasonMY: "ပွတ်တိုက်အား (Friction Force) သည် ပွတ်တိုက်မှုကိန်း (μ) နှင့် Bolt ၏ တင်းအား (N) တို့ကို မြှောက်ထားခြင်း ဖြစ်သည်။ ထို့ကြောင့် Bolt ၏ တင်းအား နည်းပါးပါက ပွတ်တိုက်အားလည်း လိုက်ပါနည်းသွားမည်ဖြစ်သည်။ 'တင်းအားနှင့် မဆိုင်ဘဲ အမြဲကိန်းသေဖြစ်သည်' ဟူသော (၂) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "ပွတ်တိုက်အားသည် Bolt ၏ ကျပ်အား (Axial Tension) ပေါ်တွင် တိုက်ရိုက် မူတည်သည်။"
    }
  },
  {
    id: "1-19",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်း (Welding) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は、<ruby>接合部<rt>せつごうぶ</rt></ruby>にボルト<ruby>孔<rt>あな</rt></ruby>のような<ruby>断面欠損<rt>だんめんけっそん</rt></ruby>がないので<ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>連続性<rt>れんぞくせい</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>でき、<ruby>形状<rt>けいじょう</rt></ruby>の<ruby>自由度<rt>じゆうど</rt></ruby>も<ruby>高い<rt>たかい</rt></ruby>。", textMY: "(1) ဂဟေဆက်ခြင်းသည် အဆက်တွင် ဘောလ်ပေါက်ကဲ့သို့ ဖြတ်ပိုင်းဆုံးရှုံးမှု မရှိသဖြင့် အဆက်၏ စဉ်ဆက်မပြတ်မှုကို ရရှိစေပြီး ပုံစံလွတ်လပ်မှုလည်း မြင့်မားသည်။" },
      { id: 2, textJP: "(2) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は、<ruby>母材間<rt>ぼざいかん</rt></ruby>に<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>部材<rt>ぶざい</rt></ruby>どうしを<ruby>一体化<rt>いったいか</rt></ruby>する<ruby>接合方法<rt>せつごうほうほう</rt></ruby>である。<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>付加<rt>ふか</rt></ruby>するため、ボルト<ruby>接合<rt>せつごう</rt></ruby>よりも<ruby>鋼材量<rt>こうざいりょう</rt></ruby>が <ruby>増える<rt>ふえる</rt></ruby>という<ruby>欠点<rt>けってん</rt></ruby>が <ruby>ある<rt>ある</rt></ruby>。", textMY: "(2) ဂဟေဆက်ခြင်းသည် မူရင်းသံပြားများကြား ဂဟေသတ္တုဖြည့်သွင်းကာ တစ်သားတည်းဖြစ်စေသော နည်းဖြစ်ပြီး၊ ဂဟေသတ္တု ထပ်ဖြည့်ရသဖြင့် ဘောလ်ဆက်ခြင်းထက် သံမဏိပမာဏ ပိုများလာသည်ဟူသော အားနည်းချက်ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>溶接金属近傍<rt>ようせつきんぞくきんぼう</rt></ruby>の<ruby>母材<rt>ぼざい</rt></ruby>は<ruby>溶接熱影響部<rt>ようせつねつえいきょうぶ</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ばれ、<ruby>加熱<rt>かねつ</rt></ruby>によって<ruby>組織<rt>そしき</rt></ruby>が <ruby>変化<rt>へんか</rt></ruby>するとともに<ruby>冷却時<rt>れいきゃくじ</rt></ruby>に<ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が <ruby>生<rt>しょう</rt></ruby>じることがある。", textMY: "(3) ဂဟေသတ္တုအနီးရှိ မူရင်းသံပြားနေရာကို Heat Affected Zone (HAZ) ဟုခေါ်ပြီး အပူပေးမှုကြောင့် သံဖွဲ့စည်းပုံ ပြောင်းလဲကာ အအေးခံချိန်တွင် ကျန်ရှိဖိစီးမှု (Residual Stress) ဖြစ်ပေါ်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>では、<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>が <ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつぶ</rt></ruby>になる<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>し、<ruby>溶接長<rt>ようせつながさ</rt></ruby>さから<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズの2<ruby>倍<rt>ばい</rt></ruby>を<ruby>減<rt>げん</rt></ruby>じて<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>しなければならない。", textMY: "(4) Fillet Weld တွင် ဂဟေအစနှင့်အဆုံး မပြည့်စုံနိုင်မှုကို ထည့်သွင်းစဉ်းစားရန်အတွက် ဂဟေအလျားမှ Fillet Size ၏ ၂ ဆကို နုတ်ပြီးမှ ခိုင်မာမှုကို တွက်ချက်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>開先角度<rt>かいさきかくど</rt></ruby>が 60° <ruby>以下<rt>いか</rt></ruby>の<ruby>部分開先<rt>ぶぶんかいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けた<ruby>異形隅肉溶接<rt>いけいすみにくようせつ</rt></ruby>は、<ruby>開先<rt>かいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けない<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>より<ruby>少<rt>すく</rt></ruby>ない<ruby>溶接量<rt>ようせつりょう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>なのど<ruby>厚<rt>あつ</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できる。", textMY: "(5) Bevel Angle ၆၀ ဒီဂရီအောက် Partial Penetration ပါသော Bevel Fillet Weld သည် Bevel မပါသော Fillet Weld ထက် ဂဟေပမာဏ နည်းပါးစွာဖြင့် လိုအပ်သော Throat Thickness ကို ရရှိစေနိုင်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဂဟေဆက်ခြင်း၏ အကျိုးကျေးဇူး (Weight Saving)",
      reasonMY: "ဂဟေဆက်ခြင်းသည် ဘောလ်ဆက်ခြင်းကဲ့သို့ ဆက်သွယ်ပြား (Splice Plate) များနှင့် ဘောလ်များစွာ မလိုအပ်သောကြောင့် တစ်ခုလုံးအနေဖြင့် သံမဏိပမာဏကို ပိုမိုသက်သာစေပြီး အဆောက်အဦကို ပေါ့ပါးစေသည်။ 'သံပမာဏ တိုးလာသည်' ဆိုသော (၂) မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "ဂဟေဆက်ခြင်းသည် ဘောလ်ဆက်ခြင်းထက် သံကုန်သက်သာစေပြီး ပိုမိုပေါ့ပါးသည်။"
    }
  },
  {
    id: "1-20",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部分開先<rt>ぶぶんかいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けた<ruby>異形隅肉溶接<rt>いけいすみにくようせつ</rt></ruby>は、<ruby>開先<rt>かいさき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けない<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>より<ruby>少<rt>すく</rt></ruby>ない<ruby>溶接量<rt>ようせつりょう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>なのど<ruby>厚<rt>あつ</rt></ruby>が <ruby>確保<rt>かくほ</rt></ruby>できる。", textMY: "(1) Bevel Fillet Weld သည် Bevel မပါသော Fillet Weld ထက် ဂဟေပမာဏ နည်းပါးစွာဖြင့် လိုအပ်သော Throat Thickness ကို ရရှိစေနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>厚さ<rt>あつさ</rt></ruby>が <ruby>異<rt>こと</rt></ruby>なる<ruby>板<rt>いた</rt></ruby>の<ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>ののど<ruby>厚<rt>あつ</rt></ruby>は<ruby>厚い方<rt>あついほう</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>とし、さらに<ruby>余盛<rt>よもり</rt></ruby>も<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>することができる。", textMY: "(2) အထူမတူသော သံပြားများ Full Penetration ဂဟေဆက်ရာတွင် Throat Thickness ကို ပိုထူသောပြား၏ အထူအတိုင်း ယူရမည်ဖြစ်ပြီး ဂဟေဖောင်းကြွမှု (Reinforcement of weld) ကိုလည်း ခိုင်မာမှုတွင် ထည့်သွင်းတွက်ချက်နိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>固形<rt>こけい</rt></ruby>タブを<ruby>用<rt>もち</rt></ruby>いる<ruby>場合<rt>ばあい</rt></ruby>、<ruby>板幅<rt>いたはば</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことになるので、この<ruby>部分<rt>ぶぶん</rt></ruby>が <ruby>健全<rt>けんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつ部</rt></ruby>となるよう<ruby>入念<rt>にゅうねんに</rt></ruby>に<ruby>施工<rt>せこう</rt></ruby>しなければならない。", textMY: "(3) Ceramic Solid Tab ကို သုံးပါက သံပြားအနံအတွင်း၌ ဂဟေအစ/အဆုံးကို စီမံရမည်ဖြစ်သဖြင့် ထိုနေရာသည် အပြစ်အနာအဆာကင်းသော ဂဟေသားဖြစ်စေရန် သေချာစွာ ဂရုစိုက်လုပ်ဆောင်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>されるものはアーク<ruby>溶接<rt>ようせつ</rt></ruby>であり、これには<ruby>被覆<rt>ひふく</rt></ruby>アーク<ruby>溶接<rt>ようせつ</rt></ruby>（<ruby>手溶接<rt>てようせつ</rt></ruby>）、<ruby>半自動溶接<rt>はんじどうようせつ</rt></ruby>および<ruby>自動溶接<rt>じどうようせつ</rt></ruby>が <ruby>ある<rt>ある</rt></ruby>。", textMY: "(4) သံမဏိတည်ဆောက်ပုံတွင် အသုံးအများဆုံး ဂဟေနည်းမှာ Arc Welding ဖြစ်ပြီး Shielded Metal Arc Welding, Semi-automatic Welding နှင့် Automatic Welding များ ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>による<ruby>熱影響<rt>ねつえいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるため、<ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が <ruby>母材<rt>ぼざい</rt></ruby>よりも<ruby>劣る<rt>おとる</rt></ruby>ことがある。", textMY: "(5) ဂဟေဆက်နေရာသည် အပူဒဏ်ခံရသဖြင့် အကြိမ်ကြိမ်သက်ရောက်သော ဝန်များအောက်တွင် Fatigue Life (ပင်ပန်းမှုသက်တမ်း) သည် မူရင်းသံထက် ပိုမိုနိမ့်ကျနိုင်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Throat Thickness နှင့် ဂဟေဖောင်းကြွမှု",
      reasonMY: "အထူမတူသောပြားများကို ဆက်ရာတွင် အားအနည်းဆုံးဖြစ်သော 'အထူပါးသောပြား' (薄い方の板厚) ကို အခြေခံ၍ Throat Thickness ကို တွက်ချက်ရမည်။ ထို့အပြင် ဂဟေ၏ ဖောင်းကြွမှု (余盛) ကို ခိုင်ခံ့မှုတွက်ချက်ရာတွင် လုံးဝ ထည့်သွင်းမတွက်ရပါ။ ထို့ကြောင့် (၂) သည် မှားယွင်းပါသည်။",
      memoryTipMY: "ဂဟေအထူတွက်ရာတွင် အပါးဆုံးပြားကို ယူရမည်၊ ဖောင်းကြွတာ (余盛) ကို ထည့်မတွက်ရပါ။"
    }
  },
  {
    id: "1-21",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>溶接<rt>ようせつ</rt></ruby>による<ruby>熱影響<rt>ねつえいきょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるため、<ruby>繰返し荷重<rt>くりかえしかじゅう</rt></ruby>が <ruby>作用<rt>さよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が <ruby>母材<rt>ぼざい</rt></ruby>よりも<ruby>劣る<rt>おとる</rt></ruby>ことがある。", textMY: "(1) ဂဟေဆက်နေရာသည် အပူဒဏ်ခံရသဖြင့် အကြိမ်ကြိမ်သက်ရောက်သော ဝန်များအောက်တွင် Fatigue Life သည် မူရင်းသံထက် ပိုမိုနိမ့်ကျနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>完全溶込<rt>かんぜんようこみ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>固形<rt>こけい</rt></ruby>エンドタブを<ruby>用<rt>もち</rt></ruby>いる<ruby>場合<rt>ばあい</rt></ruby>、<ruby>板幅<rt>いたはば</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うことになる。", textMY: "(2) Solid End Tab ကို သုံးပါက သံပြားအနံအတွင်း၌ ဂဟေအစနှင့် အဆုံးကို စီမံဆောင်ရွက်ရမည်ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>溶接部<rt>ようせつぶ</rt></ruby>が <ruby>冷却<rt>れいきゃく</rt></ruby>される<ruby>際<rt>さい</rt></ruby>には、<ruby>溶接部周辺<rt>ようせつぶしゅうへん</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>の<ruby>違い<rt>ちがい</rt></ruby>や<ruby>拘束力<rt>こうそくりょく</rt></ruby>の<ruby>存在<rt>そんざい</rt></ruby>などにより<ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>が <ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "(3) ဂဟေဆက်နေရာ အေးသွားချိန်တွင် အပူချိန်ကွာခြားမှုနှင့် ချုပ်နှောင်အားများကြောင့် Residual Stress (ကျန်ရှိဖိစီးမှု) ဖြစ်ပေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>溶接接合<rt>ようせつせつごう</rt></ruby>は<ruby>母材間<rt>ぼざいかん</rt></ruby>に<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み、<ruby>部材<rt>ぶざい</rt></ruby>どうしを<ruby>一体化<rt>いったいか</rt></ruby>する<ruby>接合法<rt>せつごうほう</rt></ruby>である。<ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>を<ruby>付加<rt>ふか</rt></ruby>するためボルト<ruby>接合<rt>せつごう</rt></ruby>よりも<ruby>鋼材量<rt>こうざいりょう</rt></ruby>が <ruby>増え<rt>ふえ</rt></ruby>、<ruby>鉄骨全体<rt>てっこつぜんたい</rt></ruby>の<ruby>重量<rt>じゅうりょう</rt></ruby>が <ruby>増加<rt>ぞうか</rt></ruby>するという<ruby>短所<rt>たんしょ</rt></ruby>が <ruby>ある<rt>ある</rt></ruby>。", textMY: "(4) ဂဟေဆက်ခြင်းသည် ဂဟေသတ္တု ထပ်ဖြည့်ရသဖြင့် ဘောလ်ဆက်ခြင်းထက် သံမဏိပမာဏ တိုးလာပြီး သံမဏိတစ်ခုလုံး၏ အလေးချိန် တိုးလာသည်ဟူသော အားနည်းချက်ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>では、<ruby>溶接始終端部<rt>ようせつしじゅうたんぶ</rt></ruby>が <ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>溶接部<rt>ようせつぶ</rt></ruby>になる<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>し、<ruby>溶接長<rt>ようせつながさ</rt></ruby>さから<ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>のサイズの2<ruby>倍<rt>ばい</rt></ruby>を<ruby>減<rt>げん</rt></ruby>じて<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>しなければならない。", textMY: "(5) Fillet Weld တွင် ဂဟေအစနှင့်အဆုံး မပြည့်စုံနိုင်မှုကို ထည့်သွင်းစဉ်းစားရန် ဂဟေအလျားမှ Fillet Size ၏ ၂ ဆကို နုတ်ပြီးမှ ခိုင်မာမှုကို တွက်ချက်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဂဟေဆက်ခြင်း၏ အားသာချက်",
      reasonMY: "ဂဟေဆက်ခြင်းသည် ဆက်သွယ်ပြားများစွာ မလိုအပ်သောကြောင့် ဘောလ်ဆက်ခြင်းထက် သံမဏိပမာဏကို ပိုမိုသက်သာစေပြီး အဆောက်အဦကို ပေါ့ပါးကျစ်လျစ်စေသည်။ 'သံပမာဏ တိုးလာသည်' ဆိုသော (၄) မှာ မှားယွင်းပါသည်။",
      memoryTipMY: "ဂဟေဆက်ခြင်းသည် ဘောလ်ထက် ပိုပေါ့ပါးပြီး သံကုန်သက်သာစေသည်။"
    }
  }
];
