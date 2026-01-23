
import { StudyCardData } from '../types';

export const chapter2023Data: StudyCardData[] = [
  {
    id: "2023-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面<rt>だんめん</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい2つの<ruby>単純梁<rt>たんじゅんばり</rt></ruby>に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>している。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့်အတိုင်း ပစ္စည်းနှင့် မျက်နှာပြင်ဖြတ်ပိုင်းတူညီသော ရိုးရှင်းသည့် Beam (Simple Beam) နှစ်ခုတွင် ဒေါင်လိုက်ဝန် P သက်ရောက်နေသည်။ ဤအခြေအနေ၌ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးအချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby>Aの<ruby>鉛直方向反力<rt>えんちょくほうこうはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby>Dの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>より<ruby>小さい<rt>ちいさい</rt></ruby>。", textMY: "Support A ၏ ဒေါင်လိုက်တုံ့ပြန်အားသည် Support D ၏ ဒေါင်လိုက်တုံ့ပြန်အားထက် ပိုငယ်သည်။" },
      { id: 2, textJP: "(2) <ruby>支点<rt>してん</rt></ruby>Cの<ruby>鉛直方向反力<rt>えんちょくほうこうはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby>Fの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>より<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Support C ၏ ဒေါင်လိုက်တုံ့ပြန်အားသည် Support F ၏ ဒေါင်လိုက်တုံ့ပြန်အားထက် ပိုကြီးသည်။" },
      { id: 3, textJP: "(3) AB<ruby>間<rt>かん</rt></ruby>のせん<ruby>断力<rt>だんりょく</rt></ruby>とDE<ruby>間<rt>かん</rt></ruby>のせん<ruby>断力<rt>だんりょく</rt></ruby>は<ruby>等しい<rt>ひとしい</rt></ruby>。", textMY: "AB ကြားရှိ Shear Force နှင့် DE ကြားရှိ Shear Force တို့သည် တူညီကြသည်။" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>に<ruby>生じる<rt>しょうじる</rt></ruby><ruby>最大曲げモーメント<rt>さいだいまげモーメント</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>Bのほうが<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Beam တွင်ဖြစ်ပေါ်သော အမြင့်ဆုံး Bending Moment သည် Simple Beam B တွင် ပိုကြီးသည်။" },
      { id: 5, textJP: "(5) B<ruby>点<rt>てん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみはE<ruby>点<rt>てん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみより<ruby>小さい<rt>ちいさい</rt></ruby>。", textMY: "B အမှတ်၏ ဒေါင်လိုက်ကွေးညွှတ်မှု (Deflection) သည် E အမှတ်၏ ဒေါင်လိုက်ကွေးညွှတ်မှုထက် ပိုငယ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Support Reaction",
      reasonMY: "အဖြေလွှာအရ (2) သည် မသင့်လျော်ပါ။ တွက်ချက်မှုအရ Support C ၏ reaction မှာ P/2 ဖြစ်ပြီး F ၏ reaction မှာ P/3 ဖြစ်သည်။ ထို့ကြောင့် C သည် F ထက် ပိုကြီးသင့်သော်လည်း မေးခွန်း၏ အခြေအနေအရ ဤဖော်ပြချက်ကို မှားယွင်းချက်အဖြစ် သတ်မှတ်ထားသည်။",
      memoryTipMY: "Reaction calculation: Beam A တွင် Load သည် အလယ်၌ရှိပြီး Beam B တွင် Load သည် Support တစ်ဖက်နှင့် ပိုနီးသည်။"
    }
  },
  {
    id: "2023-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>トラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウ、エ、オの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Truss Beam ၏ အစိတ်အပိုင်း (အ၊ ဣ၊ ဥ၊ ဧ၊ ဩ) များတွင် ဖြစ်ပေါ်သော Axial Force ဆိုင်ရာ ဖော်ပြချက်များအနက် မသင့်လျော်သောအချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>アには、<ruby>引張<rt>ひっぱり</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "Member (ア) တွင် ဆွဲအား (Tension) ဖြစ်ပေါ်သည်။" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>と、<ruby>部材<rt>ぶざい</rt></ruby>イに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>は、その<ruby>大きさ<rt>おおきさ</rt></ruby>が<ruby>等しい<rt>ひとしい</rt></ruby>。", textMY: "Member (ア) နှင့် (イ) တို့တွင် ဖြစ်ပေါ်သော Axial Force ပမာဏသည် တူညီကြသည်။" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウには<ruby>圧縮<rt>あっしゅく</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "Member (ウ) တွင် ဖိအား (Compression) ဖြစ်ပေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エには<ruby>引張<rt>ひっぱり</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "Member (エ) တွင် ဆွဲအား (Tension) ဖြစ်ပေါ်သည်။" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>オに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>よりも<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Member (エ) ၏ Axial Force ပမာဏသည် Member (オ) ထက် ပိုကြီးသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss Member Forces",
      reasonMY: "Truss ဖွဲ့စည်းပုံအရ Support နှင့် နီးသော အပေါ်ဘက် member များတွင် အားပိုမို သက်ရောက်လေ့ရှိသည်။ (オ) member သည် Support နှင့် ပိုနီးသောကြောင့် (エ) ထက် အားပိုကြီးသင့်သည်။ ထို့ကြောင့် (5) သည် မှားယွင်းသည်။",
      memoryTipMY: "Truss တွင် Support နှင့် နီးသော Member များသည် အားပိုကြီးတတ်သည်။"
    }
  },
  {
    id: "2023-3",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "တည်ဆောက်ပုံ ဒီဇိုင်း (Structural Design) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>を<ruby>遵守<rt>じゅんし</rt></ruby>した<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>を<ruby>行っていれば<rt>おこなっていれば</rt></ruby>、どんなに<ruby>大きい<rt>おおきい</rt></ruby><ruby>外力<rt>がいりょく</rt></ruby>が<ruby>作用<rt>さよう</rt></ruby>しても<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>が<ruby>損傷<rt>そんしょう</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>ことはほとんどない。", textMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေကို လိုက်နာပြီး ဒီဇိုင်းဆွဲထားပါက မည်မျှပင်ကြီးမားသော ပြင်ပအားများ သက်ရောက်စေကာမူ သံမဏိတည်ဆောက်ပုံ ပျက်စီးမှု လုံးဝမရှိနိုင်ပါ။" },
      { id: 2, textJP: "(2) <ruby>設計者<rt>せっけいしゃ</rt></ruby>は、<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>から<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby>などの<ruby>納まり<rt>おさまり</rt></ruby>や<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>するよう<ruby>努める<rt>つとめる</rt></ruby>べきである。", textMY: "ဒီဇိုင်နာများသည် ဒီဇိုင်းအဆင့်မှစ၍ အဆက်အစပ်များ၏ ကိုက်ညီမှုနှင့် ဂဟေဆက်ခြင်း၏ ခက်ခဲမှုကို ထည့်သွင်းစဉ်းစားသင့်သည်။" },
      { id: 3, textJP: "(3) <ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では<ruby>骨組<rt>ほねぐみ</rt></ruby>の<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>だけでなく、<ruby>外壁<rt>がいへき</rt></ruby>パネル<ruby>等<rt>とう</rt></ruby>の<ruby>仕上げ材<rt>しあげざい</rt></ruby>が<ruby>地震時<rt>じしんじ</rt></ruby>に<ruby>脱落<rt>だつらく</rt></ruby>しないような<ruby>検討<rt>けんとう</rt></ruby>が<ruby>不可欠<rt>ふかけつ</rt></ruby>である。", textMY: "နံရံကပ်ပစ္စည်းများ ငလျင်လှုပ်ချိန်တွင် ပြုတ်မကျစေရန် ထည့်သွင်းစဉ်းစားရန်မှာ မရှိမဖြစ်လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく<ruby>日常的<rt>にちじょうてき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>振動<rt>しんどう</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "အဆောက်အဦ၏ ခိုင်မာမှုသာမက နေ့စဉ်ဝန်များကြောင့် ဖြစ်ပေါ်နိုင်သော တုန်ခါမှုကို ထည့်သွင်းစဉ်းစားရန်မှာလည်း အရေးကြီးသည်။" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>高い<rt>たかい</rt></ruby><ruby>靭性<rt>じんせい</rt></ruby>を<ruby>有している<rt>ゆうしている</rt></ruby>ため、<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>は大地震時においても<ruby>優れた<rt>すぐれた</rt></ruby><ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を<ruby>有している<rt>ゆうしている</rt></ruby>。", textMY: "သံမဏိသည် မြင့်မားသော Toughness ရှိသောကြောင့် ငလျင်ကြီးများတွင်ပင် ထူးကဲသော ငလျင်ဒဏ်ခံနိုင်ရည်ရှိသည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဥပဒေနှင့် လက်တွေ့ပျက်စီးမှု",
      reasonMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေသည် 'အနိမ့်ဆုံးစံနှုန်း' သာဖြစ်သည်။ အလွန်ကြီးမားသော ငလျင်များတွင် ပျက်စီးမှု (Damage) ရှိနိုင်သည်။ 'ပျက်စီးမှု လုံးဝမရှိနိုင်ပါ' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "ဥပဒေ (基準法) သည် အနိမ့်ဆုံးလိုအပ်ချက် (最低限の基準) သာဖြစ်သည်။"
    }
  },
  {
    id: "2023-4",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>の<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>うち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံ၏ ပုံစံများ (Structural Systems) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ラーメン構造<rt>ラーメンこうぞう</rt></ruby>は、<ruby>曲げ<rt>まげ</rt></ruby>モーメントで<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Rahmen Structure သည် Bending Moment ဖြင့် ဝန်ကို ခုခံသည့် စနစ်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>トラス構造<rt>トラスこうぞう</rt></ruby>は、<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいし式</rt></ruby>である。", textMY: "Truss Structure သည် Axial Force ဖြင့် ဝန်ကို ခုခံသည့် စနစ်ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>制振構造<rt>せいしんこうぞう</rt></ruby>は、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>特定<rt>とくてい</rt></ruby>の<ruby>層<rt>そう</rt></ruby>を<ruby>柔らかく<rt>やわらかく</rt></ruby>しエネルギー<ruby>吸収<rt>きゅうしゅう</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Damping System သည် သီးခြားအလွှာတစ်ခုကို အလွန်ပျော့ပြောင်းစေပြီး စွမ်းအင်စုပ်ယူစေသည့် စနစ်ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>アーチ構造<rt>アーチこうぞう</rt></ruby>သည် <ruby>部材<rt>ぶざい</rt></ruby>၏ <ruby>軸方向圧縮力<rt>じくほうこうあっしゅくりょく</rt></ruby>ဖြင့် <ruby>抵抗<rt>ていこう</rt></ruby>သော <ruby>構造形式<rt>こうぞうけいしき</rt></ruby>ဖြစ်သည်။", textMY: "Arch Structure သည် Axial Compression ဖြင့် ဝန်ကို ခုခံသည့် စနစ်ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>テンション構造<rt>テンションこうぞう</rt></ruby>သည် <ruby>引張部材<rt>ひっぱりぶざい</rt></ruby>နှင့် <ruby>圧縮部材<rt>あっしゅくぶざい</rt></ruby>ကို <ruby>分離<rt>ぶんり</rt></ruby>した <ruby>構造<rt>こうぞう</rt></ruby>ဖြစ်သည်။", textMY: "Tension Structure သည် ဆွဲအားနှင့် ဖိအား member များကို ခွဲခြားထားသော စနစ်ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 免震 vs 制振",
      reasonMY: "အလွှာတစ်ခုကို အလွန်ပျော့ပြောင်းစေခြင်း (Soft story layer) သည် Seismic Isolation (免震構造) ၏ ဝိသေသလက္ခဏာဖြစ်သည်။ Damping (制振) မဟုတ်ပါ။",
      memoryTipMY: "အလွှာတစ်ခုတည်းမှာ စုပ်ယူရင် (免震)၊ Damper တွေနဲ့ လျှော့ချရင် (制振)။"
    }
  },
  {
    id: "2023-5",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>座屈<rt>ざくつ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများ၏ Buckling (座屈 - ကွေးထွက်ခြင်း) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>細長い部材<rt>ほそながいぶざい</rt></ruby>に<ruby>中心圧縮力<rt>ちゅうしんあっしゅくりょく</rt></ruby>を<ruby>作用<rt>さよう</rt></ruby>させたときの<ruby>曲がり<rt>まがり</rt></ruby>ကို <ruby>曲げ座屈<rt>まげざくつ</rt></ruby> ဟု ခေါ်သည်။", textMY: "ဖိအားပေးပါက ကွေးထွက်သွားခြင်းကို Flexural Buckling ဟု ခေါ်သည်။" },
      { id: 2, textJP: "(2) H<ruby>形鋼梁<rt>がたこうはり</rt></ruby>၏ <ruby>横座屈<rt>よこざくつ</rt></ruby>について。", textMY: "H-beam ကို ကွေးညွှတ်အားပေးပါက လိမ်ပြီး ဘေးဘက်သို့ ကွေးထွက်ခြင်းကို Lateral Buckling ဟု ခေါ်သည်။" },
      { id: 3, textJP: "(3) <ruby>板の幅<rt>いたのはば</rt></ruby>が<ruby>厚さ<rt>あつさ</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>大きい<rt>おおきい</rt></ruby>ときに<ruby>生じる<rt>しょうじる</rt></ruby> <ruby>局部座屈<rt>きょくぶざくつ</rt></ruby>။", textMY: "သံပြား၏ အနံ ကြီးလွန်းပါက နေရာကွက်၍ ပုံပျက်ခြင်းကို Local Buckling ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) <ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>では<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>しないため<ruby>考慮<rt>こうりょ</rt></ruby>しなくてよい。", textMY: "ပိတ်ထားသော ဖြတ်ပိုင်းပုံစံများ (Square tube etc.) တွင် Buckling မဖြစ်နိုင်သောကြောင့် ထည့်သွင်းစဉ်းစားရန် မလိုပါ။" },
      { id: 5, textJP: "(5) <ruby>補剛材<rt>ほごうざい</rt></ruby>သည် <ruby>座屈強度<rt>ざくつきょうど</rt></ruby>ကို <ruby>高める<rt>たかめる</rt></ruby>のに<ruby>効果的<rt>こうかてき</rt></ruby>ဖြစ်သည်။", textMY: "Stiffener တပ်ဆင်ခြင်းသည် Buckling Strength ကို မြှင့်တင်ရန် ထိရောက်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 閉断面の座屈",
      reasonMY: "ပိတ်ထားသော ဖြတ်ပိုင်း (Closed section) ဖြစ်သော်လည်း ဖိအားအောက်တွင် Bending Buckling ဖြစ်ပေါ်နိုင်ဆဲဖြစ်သည်။ 'စဉ်းစားရန်မလို' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "မည်သည့် ဖိသိပ်ခံ member (Compression member) မဆို Buckling ဖြစ်နိုင်သည်။"
    }
  },
  {
    id: "2023-6",
    questionJP: "<ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>摩擦抵抗力<rt>まさつていこうりょく</rt></ruby>で<ruby>力<rt>ちから</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>接合方法<rt>せつごうほうほう</rt></ruby>である。", textMY: "ပွတ်တိုက်အားဖြင့် ဝန်ကို သယ်ဆောင်သည့် နည်းလမ်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>တွင် <ruby>エンドプレート形式<rt>えんどぷれーとけいしき</rt></ruby>などがရှိသည်။", textMY: "Tension joint အမျိုးအစားတွင် End-plate ပုံစံများရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>摩擦面<rt>まさつめん</rt></ruby>သည် 0.45 <ruby>以上<rt>いじょう</rt></ruby>၏ <ruby>すべり係数<rt>すべりけいすう</rt></ruby>ကို <ruby>確保<rt>かくほ</rt></ruby>ရမည်။", textMY: "Slip coefficient ၀.၄၅ အထက် ရှိရမည်။" },
      { id: 4, textJP: "(4) <ruby>トルシア形ボルト<rt>トルシアがたボルト</rt></ruby>သည် <ruby>目視管理<rt>もくしかんり</rt></ruby>က <ruby>可能<rt>かのう</rt></ruby>ဖြစ်သည်။", textMY: "Torshear bolt ကို အမြင်ဖြင့် အလွယ်တကူ စီမံစစ်ဆေးနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>摩擦面<rt>まさつめん</rt></ruby>に 1.5mm ၏ <ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>၊ <ruby>板厚<rt>いたあつ</rt></ruby>၏ 1/10 <ruby>以下<rt>いか</rt></ruby>ဆိုလျှင် <ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>သည် <ruby>不要<rt>ふよう</rt></ruby>ဖြစ်သည်။", textMY: "ကွာဟချက် ၁.၅ mm ရှိပါက အထူ၏ ၁/၁၀ အောက်ဖြစ်လျှင် Filler plate မလိုပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 肌すき (Gaps)",
      reasonMY: "Friction joint တွင် ကွာဟချက်သည် 1mm ထက်ကျော်လွန်ပါက Filler plate ကို မဖြစ်မနေ ထည့်သွင်းရမည်။ ၁.၅ mm ဖြစ်နေသောကြောင့် လိုအပ်သည်။",
      memoryTipMY: "肌すき (Gap) > 1mm = Filler plate လိုအပ်သည်။"
    }
  },
  {
    id: "2023-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>完全溶込み溶接<rt>かんぜんようこみようせつ</rt></ruby>သည် <ruby>母材強度<rt>ぼざいきょうど</rt></ruby>နှင့် <ruby>同等以上<rt>どうとういじょう</rt></ruby>ရရှိနိုင်သည်။", textMY: "Full Penetration Weld သည် base metal ၏ အတိုင်းအတာအတိုင်း ခိုင်မာမှုကို ရရှိစေနိုင်သည်။" },
      { id: 2, textJP: "(2) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>には3<ruby>種類<rt>しゅるい</rt></ruby>ရှိသည်။", textMY: "Fillet Weld တွင် ၃ မျိုးရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>သည် <ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>က <ruby>母材<rt>ぼざい</rt></ruby>ထက် <ruby>劣る<rt>おとる</rt></ruby>တတ်သည်။", textMY: "ဂဟေဆက်နေရာသည် base metal ထက် fatigue life လျော့နည်းတတ်သည်။" },
      { id: 4, textJP: "(4) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>သည် <ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby>ထက် <ruby>鋼材量<rt>こうざいりょう</rt></ruby>က <ruby>増える<rt>ふえる</rt></ruby>တတ်သည်။", textMY: "ဂဟေဆက်ခြင်းသည် bolt ထက် သံမဏိပမာဏ ပိုများစေသည်။" },
      { id: 5, textJP: "(5) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>သည် <ruby>性能<rt>せいのう</rt></ruby>ကို <ruby>低下<rt>ていか</rt></ruby>させる<ruby>要因<rt>よういん</rt></ruby>ဖြစ်သည်။", textMY: "Residual stress သည် စွမ်းဆောင်ရည်ကို ကျဆင်းစေနိုင်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接の利点",
      reasonMY: "ဂဟေဆက်ခြင်းသည် Splice plate များစွာ မလိုအပ်သောကြောင့် ပိုမိုပေါ့ပါးပြီး သံမဏိပမာဏကို လျှော့ချပေးနိုင်သည်။ 'တိုးလာသည်' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "ဂဟေဆက်ခြင်းသည် (နတ်ဘို့ထက်) ပိုမိုပေါ့ပါးကျစ်လျစ်သည်။"
    }
  },
  {
    id: "2023-8",
    questionJP: "<ruby>鋼材の種類<rt>こうざいのしゅるい</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအမျိုးအစားများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) SS<ruby>材<rt>ざい</rt></ruby>သည် <ruby>溶接割れ<rt>ようせつわれ</rt></ruby>ကို <ruby>生じやすい<rt>しょうじやすい</rt></ruby>တတ်သည်။", textMY: "SS Material သည် ဂဟေဆက်ရာတွင် ကွဲအက်လွယ်သည်။" },
      { id: 2, textJP: "(2) SM<ruby>材<rt>ざい</rt></ruby>သည် <ruby>シャルピー吸収エネルギー<rt>しゃるぴーきゅうしゅうエネルギー</rt></ruby>က <ruby>規定されていない<rt>きていされていない</rt></ruby>။", textMY: "SM Material တွင် Charpy impact test ကို သတ်မှတ်မထားပါ။" },
      { id: 3, textJP: "(3) SN<ruby>材<rt>ざい</rt></ruby> C<ruby>種<rt>しゅ</rt></ruby>သည် <ruby>板厚方向<rt>いたあつほうこう</rt></ruby>၏ <ruby>絞り値<rt>しぼりち</rt></ruby>ကို <ruby>規定<rt>きてい</rt></ruby>ထားသည်။", textMY: "SN Material Type C သည် အထူဘက်သို့ Reduction of area ကိုပါ သတ်မှတ်ထားသည်။" },
      { id: 4, textJP: "(4) BCR<ruby>材<rt>ざい</rt></ruby>သည် SN<ruby>材<rt>ざい</rt></ruby>ထက် <ruby>材質劣化<rt>ざいしつれっか</rt></ruby>ကို <ruby>注意<rt>ちゅうい</rt></ruby>ရမည်။", textMY: "BCR Material များသည် SN ထက် အရည်အသွေးကျဆင်းမှုကို သတိပြုရမည်။" },
      { id: 5, textJP: "(5) TMCP<ruby>鋼材<rt>こうざい</rt></ruby>သည် <ruby>厚さ<rt>あつさ</rt></ruby> 40mm <ruby>超<rt>ちょう</rt></ruby>လည်း <ruby>強度<rt>きょうど</rt></ruby>က <ruby>低下<rt>ていか</rt></ruby>မရှိပါ။", textMY: "TMCP Steel သည် အထူကြီးသော်လည်း ခိုင်မာမှုမကျဆင်းပါ။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SM材",
      reasonMY: "SM Material တွင် Type B နှင့် Type C တို့အတွက် Charpy absorbed energy တန်ဖိုးကို သတ်မှတ်ထားသည်။ 'သတ်မှတ်မထားပါ' ဆိုခြင်းမှာ မှားယွင်းသည်။",
      memoryTipMY: "SM-B နှင့် SM-C တို့သည် Impact test သတ်မှတ်ချက် ရှိသည်။"
    }
  },
  {
    id: "2023-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိ၏ စက်မှုပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>のヤング<ruby>係数<rt>けいすう</rt></ruby>は<ruby>鋼種<rt>こうしゅ</rt></ruby>によらず、<ruby>約<rt>やく</rt></ruby>205,000N/mm²である。", textMY: "သံမဏိ၏ Young's Modulus သည် အမျိုးအစားမရွေး ခန့်မှန်းခြေ ၂၀၅,၀၀၀ N/mm² ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>応力度<rt>おうりょくど</rt></ruby>とひずみ<ruby>度<rt>ど</rt></ruby>のグラフが<ruby>水平<rt>すいへい</rt></ruby>な<ruby>棚状<rt>たなじょう</rt></ruby>になる<ruby>範囲<rt>はんい</rt></ruby>を<ruby>一般的<rt>いっぱんてき</rt></ruby>に<ruby>降伏棚<rt>こうふくだな</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Stress နှင့် Strain ဇယားတွင် အလျားလိုက် မျဉ်းဖြောင့်ဖြစ်နေသော နေရာကို Yield Plateau (降伏棚) ဟု ခေါ်သည်။" },
      { id: 3, textJP: "(3) ひずみ<ruby>硬化<rt>こうか</rt></ruby>の<ruby>小さい<rt>ちいさい</rt></ruby><ruby>鋼材<rt>こうざい</rt></ruby>のほうが<ruby>優れた<rt>すぐれた</rt></ruby><ruby>靭性<rt>じんせい</rt></ruby>を<ruby>有する<rt>ゆうする</rt></ruby>。", textMY: "Strain Hardening နည်းပါးသော သံမဏိသည် ပိုမိုကောင်းမွန်သော Toughness ရှိသည်။" },
      { id: 4, textJP: "(4) <ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>降伏点<rt>こうふくてん</rt></ruby>の<ruby>比率<rt>ひりつ</rt></ruby>を<ruby>降伏比<rt>こうふくひ</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Tensile Strength နှင့် Yield Point အချိုးကို Yield Ratio (降伏比) ဟု ခေါ်သည်။" },
      { id: 5, textJP: "(5) <ruby>繰返し応力<rt>くりかえしおうりょく</rt></ruby>が<ruby>大きい<rt>おおきい</rt></ruby>ほど、<ruby>疲労破壊<rt>ひろうはかい</rt></ruby>に<ruby>至る<rt>いたる</rt></ruby>までの<ruby>繰返し回数<rt>くりかえしかいすう</rt></ruby>は<ruby>少なくなる<rt>すくなくなる</rt></ruby>。", textMY: "Cyclic Stress ကြီးမားလေလေ Fatigue failure ဖြစ်ရန် အကြိမ်အရေအတွက် နည်းလေလေ ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ひずみ硬化 (Strain Hardening)",
      reasonMY: "Strain Hardening (ひずみ硬化) သည် ကြီးမားသော ပုံပျက်မှုကို ခံနိုင်ရည်ရှိစေရန် အထောက်အကူပြုသည်။ Strain Hardening ကြီးမားသော သံမဏိသည် ပိုမိုကောင်းမွန်သော Toughness နှင့် Energy Absorption စွမ်းရည် ရှိသည်။ ထို့ကြောင့် 'သေးငယ်သော သံမဏိက ပိုကောင်းသည်' ဟူသော ဖော်ပြချက်မှာ မှားယွင်းသည်။",
      memoryTipMY: "Strain Hardening ရှိလေ Toughness ပိုကောင်းလေ။"
    }
  },
  {
    id: "2023-10",
    questionJP: "JASS 6の<ruby>適用範囲<rt>てきようはんい</rt></ruby>および<ruby>原則<rt>げんそく</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 ၏ အကျုံးဝင်မှု နယ်ပယ်နှင့် မူဝါဒများနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) JASS 6は、<ruby>日本<rt>にほん</rt></ruby>の<ruby>構造上主要な部材<rt>こうぞうじょうしゅようなぶざい</rt></ruby>に<ruby>鋼材<rt>こうざい</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "JASS 6 ကို ဂျပန်နိုင်ငံရှိ အဓိက တည်ဆောက်ပုံ အစိတ်အပိုင်းများတွင် သံမဏိသုံးသော လုပ်ငန်းများ၌ အသုံးပြုသည်။" },
      { id: 2, textJP: "(2) JASS 1と<ruby>内容<rt>ないよう</rt></ruby>が<ruby>矛盾<rt>むじゅん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>においてはJASS 6を<ruby>優先<rt>ゆうせん</rt></ruby>する。", textMY: "JASS 1 နှင့် အကြောင်းအရာ ကွဲလွဲနေပါက သံမဏိလုပ်ငန်းအတွက် JASS 6 ကို ဦးစားပေးရမည်။" },
      { id: 3, textJP: "(3) <ruby>法令<rt>ほうれい</rt></ruby>に<ruby>基づく基準<rt>もとづくきじゅん</rt></ruby>などの<ruby>場合<rt>ばあい</rt></ruby>でも、JASS 6の<ruby>規定<rt>きてい</rt></ruby>を<ruby>優先<rt>ゆうせん</rt></ruby>して<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "ဥပဒေအရ သတ်မှတ်ထားသော စံနှုန်းများရှိနေလျှင်ပင် JASS 6 ကိုသာ ဦးစားပေး အသုံးပြုရမည်။" },
      { id: 4, textJP: "(4) <ruby>必要な特記項目<rt>ひつようなとっきこうもく</rt></ruby>で<ruby>特記<rt>とっき</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>は<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>と<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: "အထူးသတ်မှတ်ချက်များ (Spec) မပါရှိပါက ကြီးကြပ်သူနှင့် ဆွေးနွေး ညှိနှိုင်းရမည်။" },
      { id: 5, textJP: "(5) JASS 6の<ruby>一部<rt>いちぶ</rt></ruby>を<ruby>適用しない<rt>てきようしない</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>は、<ruby>工事監理者の承認を得る<rt>こうじかんりしゃのしょうにんをえる</rt></ruby>。", textMY: "JASS 6 ၏ အစိတ်အပိုင်းအချို့ကို အသုံးမပြုလိုပါက ကြီးကြပ်သူ၏ ခွင့်ပြုချက် ရယူရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဥပဒေနှင့် စံနှုန်းများ ဦးစားပေးမှု",
      reasonMY: "အမြဲတမ်း 'ဥပဒေ' (法令) သည် JASS 6 ကဲ့သို့သော စံနှုန်းများထက် ပိုမို အရေးကြီးပြီး ဦးစားပေးရမည် ဖြစ်သည်။ ဥပဒေကို ကျော်လွန်၍ စံနှုန်းကို ဦးစားပေး၍ မရပါ။",
      memoryTipMY: "ဥပဒေ (Law) က JASS ထက် ပိုကြီးသည်။"
    }
  },
  {
    id: "2023-11",
    questionJP: "<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှု လုပ်ထုံးလုပ်နည်းစာရွက် (Fabrication Manual) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>品質計画<rt>ひんしつけいかく</rt></ruby>を<ruby>実行<rt>じっこう</rt></ruby>するための<ruby>方針<rt>ほうしん</rt></ruby>や<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>取りまとめた<rt>とりまとめた</rt></ruby>ものである。", textMY: "ထုတ်လုပ်မှုလမ်းညွှန်သည် အရည်အသွေးစီမံကိန်းကို လုပ်ဆောင်ရန် နည်းလမ်းများကို စုစည်းထားခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>標準化<rt>ひょうじゅんか</rt></ruby>された<ruby>要領書<rt>ようりょうしょ</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>適宜<rt>てきぎ</rt></ruby>、<ruby>工事内容<rt>こうじないよう</rt></ruby>に<ruby>合わせて<rt>あわせて</rt></ruby><ruby>修正<rt>しゅうせい</rt></ruby>しなければならない。", textMY: "စံပုံစံများကို သုံးပါက လုပ်ငန်းအကြောင်းအရာနှင့် ကိုက်ညီအောင် ပြင်ဆင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>製作段階<rt>せいさくだんかい</rt></ruby>で<ruby>問題<rt>もんだい</rt></ruby>が<ruby>生じた<rt>しょうじた</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>၏ <ruby>対応<rt>たいおう</rt></ruby>ကိုလည်း <ruby>記載<rt>きさい</rt></ruby>ရမည်။", textMY: "ထုတ်လုပ်စဉ် ပြဿနာဖြစ်ပါက ဖြေရှင်းမည့်နည်းလမ်းများကိုလည်း ထည့်သွင်းထားရမည်။" },
      { id: 4, textJP: "(4) <ruby>鉄骨製作工場<rt>てっこつせいさくこうじょう</rt></ruby>၏ <ruby>技術力<rt>ぎじゅつりょく</rt></ruby>ကို <ruby>勘案<rt>かんあん</rt></ruby>し <ruby>品質確保<rt>ひんしつかくほ</rt></ruby>ကို <ruby>追求<rt>ついきゅう</rt></ruby>するものである。", textMY: "စက်ရုံ၏ နည်းပညာစွမ်းရည်ကို ထည့်သွင်းစဉ်းစားပြီး အရည်အသွေးအာမခံချက်ကို ရည်ရွယ်သည်။" },
      { id: 5, textJP: "(5) <ruby>製作開始後<rt>せいさくかいしご</rt></ruby>に<ruby>内容<rt>ないよう</rt></ruby>の<ruby>修正<rt>しゅうせい</rt></ruby>を<ruby>行ってはならない<rt>おこなってはならない</rt></ruby>。", textMY: "ထုတ်လုပ်မှု စတင်ပြီးနောက် အကြောင်းအရာကို လုံးဝ ပြင်ဆင်ခြင်း မပြုရ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အခြေအနေအရ ကြီးကြပ်သူ၏ ခွင့်ပြုချက်ဖြင့် ပြင်ဆင်ခွင့် ရှိသည်။",
      memoryTipMY: "လိုအပ်ရင် ပြင်ဆင်လို့ ရပါတယ်။"
    }
  },
  {
    id: "2023-12",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>および<ruby>工作図作成<rt>こうさくずさくせい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Shop Drawing နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>詳細図<rt>しょうさいず</rt></ruby>သည် <ruby>部材<rt>ぶざい</rt></ruby>1<ruby>台毎<rt>だいごと</rt></ruby>に<ruby>作成<rt>さくせい</rt></ruby>した<ruby>図面<rt>ずめん</rt></ruby>である。", textMY: "Detail Drawing သည် အစိတ်အပိုင်းတစ်ခုချင်းစီအတွက် ရေးဆွဲထားသော ပုံဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>設計図<rt>せっけいず</rt></ruby>や<ruby>仕様書<rt>しようしょ</rt></ruby>を<ruby>検討<rt>けんとう</rt></ruby>して<ruby>作成<rt>さくせい</rt></ruby>する。", textMY: "ဒီဇိုင်းပုံနှင့် သတ်မှတ်ချက်များကို စစ်ဆေးပြီးမှ ရေးဆွဲရမည်။" },
      { id: 3, textJP: "(3) <ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>၏ <ruby>承認<rt>しょうにん</rt></ruby>ကို <ruby>得る<rt>える</rt></ruby>必要がある。", textMY: "ကြီးကြပ်သူ၏ အတည်ပြုချက် ရယူရန် လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>承認後<rt>しょうにんご</rt></ruby>၏ <ruby>変更<rt>へんこう</rt></ruby>သည် <ruby>指示者<rt>しじしゃ</rt></ruby>၏ <ruby>サイン<rt>さいん</rt></ruby>ကို <ruby>得る<rt>える</rt></ruby>။", textMY: "အတည်ပြုပြီးနောက် ပြောင်းလဲပါက ညွှန်ကြားသူ၏ လက်မှတ် ယူရမည်။" },
      { id: 5, textJP: "(5) <ruby>口頭指示<rt>こうとうしじ</rt></ruby>သည် <ruby>文書<rt>ぶんしょ</rt></ruby>として<ruby>残す<rt>のこす</rt></ruby>။", textMY: "နှုတ်ဖြင့် ညွှန်ကြားချက်များကို စာဖြင့် မှတ်တမ်းတင်ရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "Detail Drawing သည် အဆက်အစပ်များကို ပြသခြင်းဖြစ်ပြီး၊ တစ်ခုချင်းစီအတွက် ပုံမှာ Shop Drawing သို့မဟုတ် Single Part Drawing ဖြစ်သည်။",
      memoryTipMY: "Piece တစ်ခုစီအတွက်ပုံက '一品図' ဖြစ်သည်။"
    }
  },
  {
    id: "2023-13",
    questionJP: "<ruby>加熱矯正<rt>かねつきょうせい</rt></ruby>で<ruby>ただちに水冷<rt>すいれい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>၏ <ruby>温度<rt>おんど</rt></ruby>はどれか。",
    questionMY: "အပူပေးဖြောင့်ပြီး ချက်ချင်းရေဖြင့် အအေးခံပါက အပူချိန်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) 400℃~500℃", textMY: "၄၀၀ မှ ၅၀၀ ဒီဂရီ" },
      { id: 2, textJP: "(2) 500℃~600℃", textMY: "၅၀၀ မှ ၆၀၀ ဒီဂရီ" },
      { id: 3, textJP: "(3) 600℃~650℃", textMY: "၆၀၀ မှ ၆၅၀ ဒီဂရီ" },
      { id: 4, textJP: "(4) 850℃~900℃", textMY: "၈၅၀ မှ ၉၀၀ ဒီဂရီ" },
      { id: 5, textJP: "(5) 900℃~1000℃", textMY: "၉၀၀ မှ ၁၀၀၀ ဒီဂရီ" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (3) ဖြစ်သည်။ ၆၅၀ ဒီဂရီအထက် ကျော်လွန်ပါက သံမဏိ၏ ဂုဏ်သတ္တိ ပြောင်းလဲနိုင်သည်။",
      memoryTipMY: "၆၀၀ မှ ၆၅၀ သည် ရေဖြင့် အအေးခံရန် အသင့်တော်ဆုံးဖြစ်သည်။"
    }
  },
  {
    id: "2023-14",
    questionJP: "<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ドリルあけ<rt>どりるあけ</rt></ruby>を<ruby>原則<rt>げんそく</rt></ruby>とする。", textMY: "Drilling ဖြင့် ဖောက်ခြင်းမှာ အခြေခံဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>13mm<ruby>以下<rt>いか</rt></ruby>は<ruby>せん断<rt>せんだん</rt></ruby>できる。", textMY: "၁၃ မီလီမီတာအောက်ကို Punching လုပ်နိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>貫通孔<rt>かんつうこう</rt></ruby>သည် <ruby>径<rt>けい</rt></ruby>+10mmとする。", textMY: "ဖြတ်သန်းပေါက်ကို အချင်း + ၁၀ မီလီမီတာ ထားရမည်။" },
      { id: 4, textJP: "(4) <ruby>セパレータ<rt>せぱれーた</rt></ruby><ruby>用孔<rt>ようあな</rt></ruby>は<ruby>ガスあけ<rt>がすあけ</rt></ruby>とする。", textMY: "Separator အပေါက်ကို Gas ဖြင့် ဖောက်နိုင်သည်။" },
      { id: 5, textJP: "(5) M24<ruby>以下<rt>いか</rt></ruby>၏ <ruby>孔径<rt>こうけい</rt></ruby>သည် +2.0mmとする。", textMY: "M24 အောက် အပေါက်များကို +၂ မီလီမီတာ ထားရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "Separator အပေါက်များကို Gas ဖြင့် ဖောက်ခြင်းသည် တိကျမှုမရှိဘဲ သံမဏိကို ပျက်စီးစေနိုင်သည်။",
      memoryTipMY: "အပေါက်ဖောက်ရာတွင် Gas မသုံးရပါ။"
    }
  },
  {
    id: "2023-15",
    questionJP: "<ruby>高力ボルト<rt>こうりょくぼると</rt></ruby>၏ <ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "HS Bolt ၏ ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>自然発錆<rt>しぜんはっせい</rt></ruby>နှင့် <ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>がある。", textMY: "သဘာဝနှင့် ဓာတု သံချေးတက်နည်းများ ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>範囲<rt>はんい</rt></ruby>သည် <ruby>座金径<rt>ざがねけい</rt></ruby>၏ 2<ruby>倍<rt>ばい</rt></ruby>とする。", textMY: "ဧရိယာမှာ Washer အချင်း၏ ၂ ဆ ဖြစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>板厚<rt>いたあつ</rt></ruby>6mm<ruby>未満<rt>みまん</rt></ruby>သည် <ruby>黒皮<rt>くろかわ</rt></ruby>၏ မာမာအတိုင်းထားနိုင်သည်။", textMY: "6mm အောက်ဆိုပါက မူလမျက်နှာပြင်အတိုင်း ထားနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>りん酸塩処理<rt>りんさんえんしょり</rt></ruby>ကို <ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Phosphate ပြုပြင်မှုကို စစ်ဆေးရမည်။" },
      { id: 5, textJP: "(5) <ruby>特別処理<rt>とくべつしょり</rt></ruby>သည် <ruby>試験<rt>しけん</rt></ruby>ကို <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "အထူးပြုပြင်မှုများအတွက် စမ်းသပ်မှု လုပ်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "မည်သည့် အထူဖြစ်စေ Friction Joint ဖြစ်ပါက Mill Scale (黒皮) ကို ဖယ်ရှားရမည်။",
      memoryTipMY: "Friction Joint = Black scale ဖယ်ရှားရမည်။"
    }
  },
  {
    id: "2023-16",
    questionJP: "<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ယာယီဂဟေဆက်ခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>低水素系<rt>ていすいそけい</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Low-hydrogen rod ကို သုံးရမည်။" },
      { id: 2, textJP: "(2) <ruby>治具<rt>じぐ</rt></ruby>ကို <ruby>用いて拘束<rt>もちいてこうそく</rt></ruby>する。", textMY: "Fixture များဖြင့် ထိန်းချုပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>最小長さ<rt>さいしょうながさ</rt></ruby>30mmとする。", textMY: "အနည်းဆုံးအရှည် ၃၀ မီလီမီတာ ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>組立て前<rt>くみたてまえ</rt></ruby>に<ruby>矯正<rt>きょうせい</rt></ruby>ကို <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "မတပ်ဆင်မီ အဖြောင့်ပြင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>再溶融<rt>さいようゆう</rt></ruby>されない<ruby>箇所<rt>かしょ</rt></ruby>တွင် <ruby>行ってはならない<rt>おこなってはならない</rt></ruby>。", textMY: "အရည်ပြန်မပျော်မည့်နေရာတွင် မလုပ်ရပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (5) သည် မှားယွင်းသောဖော်ပြချက်ဖြစ်သည်။",
      memoryTipMY: "ယာယီဂဟေသည် အမြဲတမ်း အဓိကဂဟေအောက်တွင် ရှိရမည်။"
    }
  },
  {
    id: "2023-17",
    questionJP: "<ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>၏ <ruby>溶接<rt>ようせつ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဂဟေဆက်ခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>裏当て金<rt>うらあてがね</rt></ruby>၏ <ruby>片面溶接<rt>かためんようせつ</rt></ruby>သည် <ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "Backing metal သုံး၍ တစ်ဖက်တည်းဆက်ခြင်းမှာ ယေဘုယျဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>板厚方向<rt>いたあつほうこう</rt></ruby>သည် SN<ruby>材<rt>ざい</rt></ruby> C<ruby>種<rt>しゅ</rt></ruby>ကို <ruby>選定<rt>せんてい</rt></ruby>する。", textMY: "အထူဘက်သို့အားခံရပါက SN-C ကို သုံးရမည်။" },
      { id: 3, textJP: "(3) <ruby>仕口部<rt>しぐちぶ</rt></ruby>သည် <ruby>計画<rt>けいかく</rt></ruby>ကို <ruby>立てる<rt>たてる</rt></ruby>必要がある。", textMY: "Joint နေရာများအတွက် စီမံချက် ဆွဲရမည်။" },
      { id: 4, textJP: "(4) JASS 6တွင် <ruby>各種溶接<rt>かくしゅようせつ</rt></ruby>ကို <ruby>定めている<rt>さだめている</rt></ruby>。", textMY: "JASS 6 တွင် ဂဟေအမျိုးမျိုးကို သတ်မှတ်ထားသည်။" },
      { id: 5, textJP: "(5) <ruby>全ての<rt>すべての</rt></ruby>SN, SM<ruby>材<rt>ざい</rt></ruby>၏ <ruby>溶接性<rt>ようせつせい</rt></ruby>သည် <ruby>良好<rt>りょうこう</rt></ruby>である。", textMY: "SN, SM အားလုံး ဂဟေဆက်နိုင်စွမ်း ကောင်းသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "SN-A သည် ဂဟေဆက်ရန် မဟုတ်ပါ။ ထို့ကြောင့် အားလုံးကောင်းသည်ဆိုခြင်းမှာ မှားသည်။",
      memoryTipMY: "SN-A = No welding."
    }
  },
  {
    id: "2023-18",
    questionJP: "「SA-3F」နှင့် 「SA-3H」၏ <ruby>範囲<rt>はんい</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "SA-3F နှင့် SA-3H အရည်အချင်း၏ ဘောင်တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>", textMY: "Rod ဂဟေ" },
      { id: 2, textJP: "(2) <ruby>裏当て金有り<rt>うらあてがねあり</rt></ruby>", textMY: "Backing metal ပါခြင်း" },
      { id: 3, textJP: "(3) <ruby>板厚<rt>いたあつ</rt></ruby>6mm~50mm", textMY: "အထူ ၆ မှ ၅၀ မီလီမီတာ" },
      { id: 4, textJP: "(4) <ruby>下向姿勢<rt>したむきしせい</rt></ruby>", textMY: "အောက်စိုက်အနေအထား" },
      { id: 5, textJP: "(5) <ruby>横向姿勢<rt>よこむきしせい</rt></ruby>", textMY: "ဘေးတိုက်အနေအထား" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဆင့် ၃ သည် ၅၀ မီလီမီတာအထိ အကျုံးမဝင်ပါ။",
      memoryTipMY: "အဆင့် ၃ ၏ အထူကန့်သတ်ချက်ကို သတိပြုပါ။"
    }
  },
  {
    id: "2023-19",
    questionJP: "<ruby>溶接順序<rt>ようせつじゅんじょ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်အစီအစဉ်တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>不可能箇所<rt>ふかのうかしょ</rt></ruby>ကို <ruby>避ける<rt>さける</rt></ruby>。", textMY: "မဖြစ်နိုင်သောနေရာများကို ရှောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>熱影響<rt>ねつえいきょう</rt></ruby>ကို <ruby>最小限<rt>さいしょうげん</rt></ruby>にする。", textMY: "အပူသက်ရောက်မှုကို လျှော့ချရမည်။" },
      { id: 3, textJP: "(3) <ruby>全体に分散<rt>ぜんたいにぶんさん</rt></ruby>させる。", textMY: "တစ်ပြင်လုံးသို့ ဖြန့်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>変形が小さい方<rt>へんけいちいさいほう</rt></ruby>ကို <ruby>先行<rt>せんこう</rt></ruby>する。", textMY: "ပုံပျက်မှုနည်းသောဘက်ကို အရင်လုပ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>変形<rt>へんけい</rt></ruby>ကို <ruby>打ち消す順序<rt>うちけすじゅんじょ</rt></ruby>とする。", textMY: "ပုံပျက်မှုကို ပြန်ထိန်းမည့် အစီအစဉ်ဖြစ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ပုံပျက်မှုများသောဘက်ကို အရင်လုပ်မှ နောက်ပိုင်းတွင် ပြန်ထိန်းရလွယ်သည်။",
      memoryTipMY: "ပုံပျက်လွယ်တာကို အရင်လုပ်ပါ။"
    }
  },
  {
    id: "2023-20",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>သည် <ruby>厳重<rt>げんじゅう</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "ယာယီဂဟေကို တင်းကျပ်စွာ စစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>သည် <ruby>取り除いた後<rt>とりのぞいたあと</rt></ruby> <ruby>再開<rt>さいかい</rt></ruby>する。", textMY: "ချို့ယွင်းချက်ကို ဖယ်ရှားပြီးမှ ပြန်စရမည်။" },
      { id: 3, textJP: "(3) -5℃~5℃သည် 100mmကို <ruby>加熱<rt>かねつ</rt></ruby>する。", textMY: "အပူချိန်နည်းပါက ၁၀၀ မီလီမီတာ ပတ်လည်ကို အပူပေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>結露<rt>けつろ</rt></ruby>သည် <ruby>乾燥<rt>かんそう</rt></ruby>させてから<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "ရေငွေ့ရှိပါက အခြောက်ခံပြီးမှ လုပ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>予熱温度<rt>よねつおんど</rt></ruby>သည် <ruby>低い方<rt>ひくいほう</rt></ruby>ကို <ruby>採用<rt>さいよう</rt></ruby>する。", textMY: "Preheat အပူချိန်ကို အနိမ့်ဆုံးဘက်က ယူရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အထူကြီးသောဘက် (အပူချိန်ပိုလိုသောဘက်) ကို စံထားရမည်။",
      memoryTipMY: "အပူပေးရင် အမြင့်ဆုံးကို ကြည့်ရမည်။"
    }
  },
  {
    id: "2023-21",
    questionJP: "<ruby>ガスシールド溶接<rt>がすしーるどようせつ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Welding တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>管理値<rt>かんりち</rt></ruby>က <ruby>定められている<rt>さだめられている</rt></ruby>。", textMY: "သတ်မှတ်တန်ဖိုးများ ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>高強度<rt>こうきょうど</rt></ruby>၏ <ruby>入熱<rt>にゅうねつ</rt></ruby>သည် <ruby>大きく<rt>おおきく</rt></ruby>できる。", textMY: "ခိုင်မာမှုမြင့်သော wire ဆိုလျှင် အပူပိုပေးနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>鋼板・形鋼<rt>こうはん・かたこう</rt></ruby>သည် <ruby>管理<rt>かんり</rt></ruby>က <ruby>厳しい<rt>きびしい</rt></ruby>。", textMY: "သံပြားနှင့် shape steel များတွင် စီမံမှု ပိုတင်းကျပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>ワイヤ突き出し長さ<rt>わいやつきだしながさ</rt></ruby>ကို <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Wire အရှည်ကို စီမံရမည်။" },
      { id: 5, textJP: "(5) <ruby>位置<rt>いち</rt></ruby>သည် 10mmで<ruby>計測<rt>けいそく</rt></ruby>する。", textMY: "၁၀ မီလီမီတာအကွာတွင် တိုင်းတာရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ခိုင်မာမှုမြင့်သော သံမဏိများတွင် အပူ (Heat input) ကို ပိုမိုကန့်သတ်ရသည်။",
      memoryTipMY: "ခိုင်မာမှုမြင့်ရင် အပူလျှော့ရမည်။"
    }
  },
  {
    id: "2023-22",
    questionJP: "<ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ရုပ်ဂဟေတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>種類<rt>しゅるい</rt></ruby>နှင့် <ruby>形状<rt>けいじょう</rt></ruby>တွင် <ruby>制限<rt>せいげん</rt></ruby>がある。", textMY: "အမျိုးအစားနှင့် ပုံစံ ကန့်သတ်ချက် ရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>သည် 1.4mm <ruby>以上<rt>いじょう</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "ယာယီဂဟေကို ၁.၄ မီလီမီတာနှင့်အထက် wire သုံးရမည်။" },
      { id: 3, textJP: "(3) <ruby>固形タブ<rt>こけいたぶ</rt></ruby>ကို <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "End tab ကို စီမံရမည်။" },
      { id: 4, textJP: "(4) <ruby>水・油<rt>みず・あぶら</rt></ruby>ကို <ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "ရေနှင့် ဆီကို ဖယ်ရှားရမည်။" },
      { id: 5, textJP: "(5) <ruby>振動<rt>しんどう</rt></ruby>က <ruby>少ない箇所<rt>すくないかしょ</rt></ruby>တွင် <ruby>設置<rt>せっち</rt></ruby>する。", textMY: "တုန်ခါမှုနည်းသောနေရာတွင် ထားရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ယာယီဂဟေအတွက် wire သည် အလွန်မကြီးသင့်ပါ။",
      memoryTipMY: "၁.၄ ဆိုတာ ကြီးလွန်းသည်။"
    }
  },
  {
    id: "2023-23",
    questionJP: "<ruby>溶接法<rt>ようせつほう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေနည်းလမ်းများတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>熱・圧力<rt>ねつ・あつりょく</rt></ruby>ဖြင့် <ruby>一体化<rt>いったいか</rt></ruby>する。", textMY: "အပူ/ဖိအားဖြင့် တစ်သားတည်းလုပ်ခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>融接<rt>ゆうせつ</rt></ruby>သည် <ruby>冷却・凝固<rt>れいきゃく・ぎょうこ</rt></ruby>ဖြင့် <ruby>接合<rt>せつごう</rt></ruby>する。", textMY: "အရည်ပျော်ပြီး အေးသွားရာမှ ဆက်ခြင်းဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>ろう接<rt>ろうせつ</rt></ruby>သည် <ruby>低い金属<rt>ひくいきんぞく</rt></ruby>ကို <ruby>充填<rt>じゅうてん</rt></ruby>する。", textMY: "Brazing သည် အရည်ပျော်မှတ်နိမ့်သော သတ္တုဖြည့်ခြင်းဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>圧接<rt>あっせつ</rt></ruby>သည် <ruby>機械的圧力<rt>きかいてきあつりょく</rt></ruby>ကို <ruby>負荷<rt>ふか</rt></ruby>する。", textMY: "Pressure welding သည် ဖိအားပေးခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>တွင် 3<ruby>種類全て<rt>しゅるいすべて</rt></ruby> <ruby>利用<rt>りよう</rt></ruby>する。", textMY: "သံမဏိဘောင်တွင် ၃ မျိုးစလုံး သုံးသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "သံမဏိဘောင်တွင် Brazing (ろう接) ကို မသုံးပါ။",
      memoryTipMY: "Brazing မပါဝင်ပါ။"
    }
  },
  {
    id: "2023-24",
    questionJP: "<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အအေးခံနှုန်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) 800℃~500℃၏ <ruby>時間<rt>じかん</rt></ruby>で<ruby>表す<rt>あらわす</rt></ruby>。", textMY: "၈၀၀ မှ ၅၀၀ အထိ ကြာချိန်ဖြင့် ပြသည်။" },
      { id: 2, textJP: "(2) <ruby>長い<rt>ながい</rt></ruby>သည် <ruby>強度・靭性<rt>きょうど・じんせい</rt></ruby>က <ruby>低下<rt>ていか</rt></ruby>する。", textMY: "ကြာလွန်းပါက ခိုင်မာမှု ကျဆင်းသည်။" },
      { id: 3, textJP: "(3) <ruby>短い<rt>みじかい</rt></ruby>သည် <ruby>硬化<rt>こうか</rt></ruby>し<ruby>割れ<rt>われ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "တိုလွန်းပါက မာပြီး ကွဲအက်တတ်သည်။" },
      { id: 4, textJP: "(4) <ruby>入熱<rt>にゅうねつ</rt></ruby>က <ruby>大きい<rt>おおきい</rt></ruby>သည် <ruby>速く<rt>はやく</rt></ruby>なる。", textMY: "အပူများလျှင် ပိုမြန်သည်။" },
      { id: 5, textJP: "(5) <ruby>入熱<rt>にゅうねつ</rt></ruby>သည် <ruby>速度<rt>そくど</rt></ruby>に<ruby>反比例<rt>はんぴれい</rt></ruby>する。", textMY: "အပူသည် အရှိန်နှင့် ပြောင်းပြန်အချိုးကျသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အပူများများပေးလေ အေးရန် ပိုကြာလေ (အအေးနှေးလေ) ဖြစ်သည်။",
      memoryTipMY: "အပူများရင် အအေးနှေးသည်။"
    }
  },
  {
    id: "2023-25",
    questionJP: "<ruby>溶接法<rt>ようせつほう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နည်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク<rt>ひふくあーく</rt></ruby>သည် <ruby>溶極式<rt>ようきょくしき</rt></ruby>である。", textMY: "SMAW သည် electrode အရည်ပျော်သောနည်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>ガスシールド<rt>がすしーるど</rt></ruby>သည် <ruby>溶着速度<rt>ようちゃくそくど</rt></ruby>က <ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Gas welding သည် ဂဟေသားတင်နှုန်း ပိုမြန်သည်။" },
      { id: 3, textJP: "(3) <ruby>フラックスワイヤ<rt>ふらっくすわいや</rt></ruby>သည် <ruby>速度<rt>そくど</rt></ruby>က <ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Flux wire က ပိုမြန်သည်။" },
      { id: 4, textJP: "(4) <ruby>サブマージ<rt>さぶまーじ</rt></ruby>သည် <ruby>発生ガス<rt>はっせいがす</rt></ruby>でシールドする。", textMY: "SAW သည် gas ဖြင့် ကာကွယ်ခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>エレクトロスラグ<rt>えれくとろすらぐ</rt></ruby>သည် <ruby>角溶接<rt>すみようせつ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "ESW ကို ထောင့်ဂဟေအတွက် သုံးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "SAW သည် flux အမှုန့်များ (Slag) ဖြင့် ကာကွယ်ခြင်းဖြစ်သည်။ Gas ဖြင့် မဟုတ်ပါ။",
      memoryTipMY: "SAW = Slag shield."
    }
  },
  {
    id: "2023-26",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>၏ <ruby>組織<rt>そしき</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဖွဲ့စည်းပုံတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>သည် <ruby>移行金属<rt>いこうきんぞく</rt></ruby>နှင့် <ruby>母材<rt>ぼざい</rt></ruby>၏ <ruby>凝固<rt>ぎょうこ</rt></ruby>ဖြစ်သည်。", textMY: "Weld metal သည် wire နှင့် base metal ရောပြီး မာလာသောအရာဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>သည် <ruby>成分<rt>せいぶん</rt></ruby>နှင့် <ruby>速度<rt>そくど</rt></ruby>ဖြင့် <ruby>決まる<rt>きまる</rt></ruby>。", textMY: "ဂုဏ်သတ္တိများကို ဓာတုဖွဲ့စည်းမှုနှင့် အအေးနှုန်းဖြင့် ဆုံးဖြတ်သည်။" },
      { id: 3, textJP: "(3) HAZသည် <ruby>部位<rt>ぶい</rt></ruby>によって<ruby>組織<rt>そしき</rt></ruby>က <ruby>異なる<rt>ことなる</rt></ruby>。", textMY: "HAZ ၏ ဖွဲ့စည်းပုံသည် နေရာအလိုက် ကွဲပြားသည်။" },
      { id: 4, textJP: "(4) <ruby>硬さ<rt>かたさ</rt></ruby>လည်း <ruby>変化<rt>へんか</rt></ruby>する。", textMY: "မာကျောမှုလည်း ပြောင်းလဲသည်။" },
      { id: 5, textJP: "(5) PCMသည် <ruby>炭素含有量<rt>たんそがんゆうりょう</rt></ruby>၏ <ruby>指標<rt>しひょう</rt></ruby>である。", textMY: "PCM သည် ကာဗွန်အညွှန်းကိန်းဖြစ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (1) ဖြစ်သည်။",
      memoryTipMY: "Weld metal ၏ အဓိပ္ပါယ်ကို သတိပြုပါ။"
    }
  },
  {
    id: "2023-27",
    questionJP: "<ruby>溶接変形<rt>ようせつへんけい</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေပုံပျက်ခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>角変形<rt>かくへんけい</rt></ruby>သည် <ruby>逆ひずみ法<rt>ぎゃくひずみほう</rt></ruby>がある。", textMY: "ထောင့်ပြောင်းခြင်းအတွက် presetting နည်းရှိသည်။" },
      { id: 2, textJP: "(2) <ruby>横収縮<rt>よこしゅうしゅく</rt></ruby>သည် <ruby>対応<rt>たいおう</rt></ruby>က <ruby>行われていない<rt>おこなわれていない</rt></ruby>。", textMY: "အနံလိုက်ကျုံ့ခြင်းကို ဖြေရှင်းလေ့မရှိပါ။" },
      { id: 3, textJP: "(3) <ruby>座屈変形<rt>ざくつへんけい</rt></ruby>သည် <ruby>順序<rt>じゅんじょ</rt></ruby>က <ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "Buckling အတွက် အစီအစဉ်မှာ အရေးကြီးသည်။" },
      { id: 4, textJP: "(4) <ruby>縦曲り<rt>たてまがり</rt></ruby>သည် <ruby>対称配置<rt>たいしょうはいち</rt></ruby>とする。", textMY: "အလျားလိုက်ကွေးခြင်းကို ဘယ်ညာညီအောင် ထားရမည်။" },
      { id: 5, textJP: "(5) <ruby>回転変形<rt>かいてんへんけい</rt></ruby>သည် <ruby>拘束<rt>こうそく</rt></ruby>က <ruby>利用<rt>りよう</rt></ruby>できない。", textMY: "လည်ထွက်ခြင်းကို ထိန်းချုပ်၍ မရပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "မည်သည့် ပုံပျက်ခြင်းကိုမဆို fixture များဖြင့် ထိန်းချုပ်၍ ရနိုင်သည်။",
      memoryTipMY: "အားလုံး ထိန်းချုပ်၍ ရသည်။"
    }
  },
  {
    id: "2023-28",
    questionJP: "<ruby>亜鉛めっき<rt>あえんめっき</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Galvanizing တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>合金層<rt>ごうきんそう</rt></ruby>ကို <ruby>形成<rt>けいせい</rt></ruby>する。", textMY: "Alloy layer ကို ဖြစ်ပေါ်စေသည်။" },
      { id: 2, textJP: "(2) <ruby>変形・割れ<rt>へんけい・われ</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "ပုံပျက်ခြင်း/ကွဲခြင်းကို သတိပြုရမည်။" },
      { id: 3, textJP: "(3) <ruby>設計段階<rt>せっけいだんかい</rt></ruby>တွင် <ruby>防止<rt>ぼうし</rt></ruby>できる。", textMY: "ဒီဇိုင်းအဆင့်ကတည်းက ကာကွယ်နိုင်သည်။" },
      { id: 4, textJP: "(4) HDZT 77သည် <ruby>付着量<rt>ふちゃくりょう</rt></ruby>である。", textMY: "HDZT 77 ဆိုသည်မှာ coating ပမာဏဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>温度<rt>おんど</rt></ruby>သည် 450℃<ruby>前後<rt>ぜんご</rt></ruby>である。", textMY: "အပူချိန်မှာ ၄၅၀ ဒီဂရီဝန်းကျင်ဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "HDZT 77 ဆိုသော အခေါ်အဝေါ် မရှိပါ။ HDZ 55 (550g/m²) သာ ရှိသည်။",
      memoryTipMY: "HDZ 55 ကို မှတ်ထားပါ။"
    }
  },
  {
    id: "2023-29",
    questionJP: "<ruby>塗装作業<rt>とそうさぎょう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆေးသုတ်ခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>粘度が高い<rt>ねんどがたかい</rt></ruby>သည် <ruby>たれ<rt>たれ</rt></ruby>က <ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "ဆေးအရမ်းပျစ်လျှင် စီးကျတတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>厚塗り<rt>あつぬり</rt></ruby>ကို <ruby>避ける<rt>さける</rt></ruby>。", textMY: "အထူကြီးသုတ်ခြင်းကို ရှောင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>はけ・吹付け<rt>はけ・ふきつけ</rt></ruby>がある。", textMY: "Brush နှင့် Spray နည်းများ ရှိသည်။" },
      { id: 4, textJP: "(4) 5℃<ruby>以下<rt>いか</rt></ruby>သည် <ruby>避ける<rt>さける</rt></ruby>。", textMY: "၅ ဒီဂရီအောက်ဆိုလျှင် ရှောင်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>溶接部<rt>ようせつぶ</rt></ruby>100mmသည် <ruby>塗装しない<rt>とそうしない</rt></ruby>。", textMY: "ဂဟေဆက်မည့်နေရာ ၁၀၀ မီလီမီတာအတွင်း ဆေးမသုတ်ရ။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ဆေးကျဲလွန်းမှသာ ဆေးသားစီးကျခြင်း (たれ) ဖြစ်ပေါ်သည်။",
      memoryTipMY: "ပျစ်ရင် မစီးကျပါ။"
    }
  },
  {
    id: "2023-30",
    questionJP: "<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "QA တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>施工者<rt>せこうしゃ</rt></ruby>က <ruby>保証<rt>ほしょう</rt></ruby>する。", textMY: "တည်ဆောက်သူက အာမခံရမည်။" },
      { id: 2, textJP: "(2) <ruby>法律<rt>ほうりつ</rt></ruby>သည် <ruby>最低要求<rt>さいていようきゅう</rt></ruby>である。", textMY: "ဥပဒေသည် အနိမ့်ဆုံးလိုအပ်ချက်ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>マネジメントの成果物<rt>まねじめんとのせいかぶつ</rt></ruby>である。", textMY: "စီမံခန့်ခွဲမှု၏ ရလဒ်ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>生産者都合<rt>せいさんしゃつごう</rt></ruby>တွင် <ruby>設定しない<rt>せっていしない</rt></ruby>。", textMY: "ထုတ်လုပ်သူအကြိုက် မသတ်မှတ်ရ။" },
      { id: 5, textJP: "(5) <ruby>設計者<rt>せっけいしゃ</rt></ruby>က <ruby>保証<rt>ほしょう</rt></ruby>する。", textMY: "ဒီဇိုင်နာက အာမခံရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (5) ဖြစ်သည်။",
      memoryTipMY: "အရည်အသွေးအာမခံချက်သည် ထုတ်လုပ်သူ/တည်ဆောက်သူအပေါ် မူတည်သည်။"
    }
  },
  {
    id: "2023-31",
    questionJP: "<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "နမူနာစစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>規準型<rt>きじゅんがた</rt></ruby>သည် <ruby>危険を一定<rt>きけんをいってい</rt></ruby>にする。", textMY: "Standard type သည် အန္တရာယ်ကို ကန့်သတ်ပေးသည်။" },
      { id: 2, textJP: "(2) <ruby>調整型<rt>ちょうせいがた</rt></ruby>သည် <ruby>選択<rt>せんたく</rt></ruby>できる。", textMY: "Adjusted type ကို ရွေးချယ်နိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>選別型<rt>せんべつがた</rt></ruby>သည် <ruby>不良率<rt>ふりょうりつ</rt></ruby>ကို AOQLဟု <ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Screening type ၏ အမှားနှုန်းကို AOQL ဟု ခေါ်သည်။" },
      { id: 4, textJP: "(4) 4<ruby>種類<rt>しゅるい</rt></ruby>ရှိသည်။", textMY: "၄ မျိုး ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>計数値と計量値<rt>けいすうちとけいりょうち</rt></ruby>がある。", textMY: "အရေအတွက်နှင့် တိုင်းတာမှုတန်ဖိုးများ ရှိသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "AOQL သည် အမှားနှုန်းမဟုတ်ဘဲ၊ အာမခံနိုင်သော အမြင့်ဆုံး အမှားကန့်သတ်ချက်ဖြစ်သည်။",
      memoryTipMY: "AOQL = Limit."
    }
  },
  {
    id: "2023-32",
    questionJP: "<ruby>品質管理<rt>ひんしつかんり</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "QC တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>生産者体系活動<rt>せいさんしゃたいけいかつどう</rt></ruby>である。", textMY: "ထုတ်လုပ်သူ၏ စနစ်တကျ လှုပ်ရှားမှုဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>各部門連携<rt>かくぶもんれんけい</rt></ruby>ရမည်。", textMY: "ဌာနအသီးသီး ချိတ်ဆက်ရမည်။" },
      { id: 3, textJP: "(3) QC<ruby>工程表<rt>こうていひょう</rt></ruby>သည် <ruby>体系化<rt>たいけいか</rt></ruby>ဖြစ်သည်။", textMY: "QC table သည် စနစ်တကျ ဖွဲ့စည်းမှုဖြစ်သည်။" },
      { id: 4, textJP: "(4) 4Mသည် <ruby>人・物・機・法<rt>ひと・もの・き・ほう</rt></ruby>である。", textMY: "4M မှာ လူ၊ ပစ္စည်း၊ စက်၊ နည်းလမ်း ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>役割明確組織<rt>やくわりめいかくそしき</rt></ruby>である。", textMY: "တာဝန်များ ရှင်းလင်းသော အဖွဲ့အစည်းဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (5) ဖြစ်သည်။",
      memoryTipMY: "QC သည် လူတိုင်းပါဝင်ရမည့်အရာဖြစ်သည်။"
    }
  },
  {
    id: "2023-33",
    questionJP: "<ruby>流通経路<rt>りゅうつうけいろ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖြန့်ဖြူးရေးလမ်းကြောင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>多くの企業が介在<rt>おおくのきぎょうがかいざい</rt></ruby>する。", textMY: "ကုမ္ပဏီများစွာ ပါဝင်သည်။" },
      { id: 2, textJP: "(2) <ruby>中間部品<rt>ちゅうかんぶひん</rt></ruby>として<ruby>納入<rt>のうにゅう</rt></ruby>する。", textMY: "ကြားဖြတ်ပစ္စည်းများအဖြစ် ပေးပို့သည်။" },
      { id: 3, textJP: "(3) <ruby>支給品<rt>しきゅうひん</rt></ruby>လည်း <ruby>含まれる<rt>ふくまれる</rt></ruby>。", textMY: "ပံ့ပိုးပစ္စည်းများလည်း ပါဝင်သည်။" },
      { id: 4, textJP: "(4) <ruby>全体で組織的管理<rt>ぜんたいでそしきてきかんり</rt></ruby>ရမည်。", textMY: "အားလုံး စနစ်တကျ စီမံရမည်။" },
      { id: 5, textJP: "(5) <ruby>裏書き<rt>うらがき</rt></ruby>သည် <ruby>原品証明<rt>げんぴんしょうめい</rt></ruby>である。", textMY: "Endorsement သည် မူရင်းလက်မှတ်ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "မူရင်းလက်မှတ် (Mill Sheet) သည် ထုတ်လုပ်သည့် စက်ရုံမှ တိုက်ရိုက် ထုတ်ပေးသောအရာ ဖြစ်သည်။",
      memoryTipMY: "Mill Sheet ကသာ မူရင်းဖြစ်သည်။"
    }
  },
  {
    id: "2023-34",
    questionJP: "<ruby>受入検査<rt>うけいれけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လက်ခံစစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>သည် <ruby>特記<rt>とっき</rt></ruby>による。", textMY: "ပစ္စည်းစစ်ဆေးမှုမှာ Spec ပေါ် မူတည်သည်။" },
      { id: 2, textJP: "(2) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>သည် <ruby>成績表<rt>せいせきひょう</rt></ruby>である。", textMY: "စာရွက်စစ်ဆေးမှုမှာ မှတ်တမ်းဇယားဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>種類<rt>しゅるい</rt></ruby>သည် <ruby>特記<rt>とっき</rt></ruby>による。", textMY: "အမျိုးအစားမှာ Spec ပေါ် မူတည်သည်။" },
      { id: 4, textJP: "(4) <ruby>不合格<rt>ふごうかく</rt></ruby>သည် <ruby>直ちに不合格<rt>ただちにふごうかく</rt></ruby>とする。", textMY: "မအောင်မြင်ပါက ချက်ချင်း ရှုံးသည်ဟု သတ်မှတ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>不適合<rt>ふてきごう</rt></ruby>သည် <ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "မကိုက်ညီပါက ပြန်စစ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (4) ဖြစ်သည်။",
      memoryTipMY: "စစ်ဆေးမှုအဆင့်ဆင့်ကို လိုက်နာရမည်။"
    }
  },
  {
    id: "2023-35",
    questionJP: "<ruby>製品検査<rt>せいひんけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်ကုန်စစ်ဆေးမှုတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>取合部<rt>とりあいぶ</rt></ruby>သည် <ruby>全箇所<rt>ぜんかしょ</rt></ruby>စစ်ရမည်။", textMY: "အဆက်နေရာအားလုံး စစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>摩擦面<rt>まさつめん</rt></ruby>ကို <ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "ပွတ်တိုက်မျက်နှာပြင်ကို စစ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>開先形状<rt>かいさきけいじょう</rt></ruby>ကို <ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Bevel ပုံစံကို စစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>外観<rt>がいかん</rt></ruby>သည် <ruby>目視のみ<rt>もくしのみ</rt></ruby>である。", textMY: "အပြင်ပန်းကို မျက်စိဖြင့်သာ ကြည့်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>きず<rt>きず</rt></ruby>သည် 3<ruby>種類<rt>しゅるい</rt></ruby>ရှိသည်။", textMY: "ချို့ယွင်းချက် ၃ မျိုး ရှိသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အပြင်ပန်းစစ်ဆေးခြင်းတွင် တိုင်းတာရေးကိရိယာများ (Gauge) ပါ သုံးရမည်။",
      memoryTipMY: "မျက်စိအပြင် ကိရိယာပါ သုံးရသည်။"
    }
  },
  {
    id: "2023-36",
    questionJP: "<ruby>許容差<rt>きょようさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ခွင့်ပြုလွဲချော်မှုတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>သည် <ruby>合否判定<rt>ごうひはんてい</rt></ruby>である。", textMY: "Limit tolerance သည် အောင်/ရှုံး ဆုံးဖြတ်ချက်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>သည် <ruby>目標値<rt>もくひょうち</rt></ruby>である。", textMY: "Management tolerance သည် ပန်းတိုင်တန်ဖိုးဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>超えた<rt>こえた</rt></ruby>သည် <ruby>再製作<rt>さいせいさく</rt></ruby>とする。", textMY: "ကျော်လွန်ပါက ပြန်လုပ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>マイナス誤差<rt>まいなすごさ</rt></ruby>သည် <ruby>修正不要<rt>しゅうせいふよう</rt></ruby>である。", textMY: "အနှုတ်ဘက်လွဲလျှင် ပြင်ရန်မလိုပါ။" },
      { id: 5, textJP: "(5) <ruby>補修<rt>ほしゅう</rt></ruby>ဖြင့် <ruby>対処<rt>たいしょ</rt></ruby>できる。", textMY: "ပြုပြင်ခြင်းဖြင့် ဖြေရှင်းနိုင်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အနှုတ်ဘက်လွဲချော်မှု (သေးနေခြင်း) သည် ခံနိုင်ရည်ကို လျော့ကျစေသောကြောင့် ပြင်ဆင်ရန် လိုအပ်သည်။",
      memoryTipMY: "သေးနေရင် ပြင်ရမည်။"
    }
  },
  {
    id: "2023-37",
    questionJP: "<ruby>受入検査<rt>うけいれけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လက်ခံစစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>သည် <ruby>両方<rt>りょうほう</rt></ruby>ကို <ruby>基準<rt>きじゅん</rt></ruby>とする。", textMY: "စာရွက်စစ်ဆေးမှုမှာ စံနှုန်းနှစ်ခုလုံး သုံးသည်။" },
      { id: 2, textJP: "(2) 7<ruby>項目<rt>こうもく</rt></ruby>သည် <ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "အချက် ၇ ချက် အသုံးပြုနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>သည် <ruby>確認<rt>かくにん</rt></ruby>である。", textMY: "ပစ္စည်းစစ်ဆေးမှုမှာ အတည်ပြုခြင်းဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>対物1<rt>たいぶついち</rt></ruby>သည် <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>である。", textMY: "Object 1 သည် management tolerance ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>対物2<rt>たいぶつに</rt></ruby>သည် <ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>である。", textMY: "Object 2 သည် စာရင်းအင်းနည်းဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "Object 1 စစ်ဆေးမှုသည် အောင်/ရှုံးအတွက် Limit Tolerance (限界許容差) ကို သုံးရမည်။",
      memoryTipMY: "စစ်ဆေးလျှင် 限界 ကို သုံးရမည်။"
    }
  },
  {
    id: "2023-38",
    questionJP: "<ruby>管理技術者<rt>かんりぎじゅつしゃ</rt></ruby>၏ <ruby>役割<rt>やくわり</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စီမံခန့်ခွဲသူ၏ တာဝန်တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>原因追求<rt>げんいんついきゅう</rt></ruby>နှင့် <ruby>処置<rt>しょち</rt></ruby>ကို <ruby>検討<rt>けんとう</rt></ruby>する。", textMY: "အကြောင်းရင်းရှာဖွေပြီး ဖြေရှင်းနည်းစဉ်းစားရမည်။" },
      { id: 2, textJP: "(2) <ruby>マニュアル反映<rt>まにゅあるはんえい</rt></ruby>နှင့် <ruby>防止<rt>ぼうし</rt></ruby>ကို <ruby>行なう<rt>おこなう</rt></ruby>。", textMY: "လက်စွဲတွင်ထည့်ပြီး ကာကွယ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>迅速報告<rt>じんそくほうこく</rt></ruby>ရမည်။", textMY: "အမြန် အစီရင်ခံရမည်။" },
      { id: 4, textJP: "(4) 4Mသည် <ruby>情報管理より重要<rt>じょうほうかんりよりじゅうよう</rt></ruby>である。", textMY: "4M က သတင်းအချက်အလက်ထက် ပိုအရေးကြီးသည်။" },
      { id: 5, textJP: "(5) <ruby>手戻り防止<rt>てもどりぼうし</rt></ruby>に<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "အလုပ်နှစ်ခါမလုပ်ရအောင် အရေးကြီးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "နှစ်ခုစလုံးသည် တန်းတူ အရေးကြီးပါသည်။",
      memoryTipMY: "နှစ်ခုစလုံး အရေးကြီးသည်။"
    }
  },
  {
    id: "2023-39",
    questionJP: "<ruby>溶接部品質管理<rt>ようせつぶひんしつかんり</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေအရည်အသွေးစီမံမှုတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>適切組合せ<rt>てきせつくみあわせ</rt></ruby>ဖြင့် <ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "မှန်ကန်စွာ ပေါင်းစပ်ပြီး အာမခံရမည်။" },
      { id: 2, textJP: "(2) <ruby>破断しないこと<rt>はだんしないこと</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "မကျိုးပဲ့ရန် လိုအပ်သည်။" },
      { id: 3, textJP: "(3) <ruby>社内全数検査<rt>しゃないぜんすうけんさ</rt></ruby>ကို <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "စက်ရုံတွင်း အားလုံးစစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>隅肉<rt>すみにく</rt></ruby>သည် UTကို <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "Fillet weld ကို UT စစ်ရမည်။" },
      { id: 5, textJP: "(5) <ruby>改善記録<rt>かいぜんきろく</rt></ruby>ကို <ruby>とる<rt>とる</rt></ruby>。", textMY: "တိုးတက်မှုမှတ်တမ်း ယူရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "Fillet weld အတွက် UT သည် မလိုအပ်သလို စစ်ရန်လည်း ခက်ခဲသည်။",
      memoryTipMY: "Fillet = No UT."
    }
  },
  {
    id: "2023-40",
    questionJP: "<ruby>溶接検査技術者<rt>ようせつけんさぎじゅつしゃ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေစစ်ဆေးသူတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>知識・経験<rt>ちしき・けいけん</rt></ruby>က <ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "ဗဟုသုတနှင့် အတွေ့အကြုံ လိုအပ်သည်။" },
      { id: 2, textJP: "(2) 1~3<ruby>レベル<rt>れべる</rt></ruby>がある。", textMY: "အဆင့် ၁ မှ ၃ ထိ ရှိသည်။" },
      { id: 3, textJP: "(3) <ruby>受入<rt>うけいれ</rt></ruby>သည် <ruby>レベル1<rt>れべるわん</rt></ruby>က <ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "လက်ခံစစ်ဆေးမှုမှာ အဆင့် ၁ လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>認定資格<rt>にんていしかく</rt></ruby>がある。", textMY: "အသိအမှတ်ပြုလက်မှတ် ရှိသည်။" },
      { id: 5, textJP: "(5) <ruby>製品検査技術者<rt>せいひんけんさぎじゅつしゃ</rt></ruby>က <ruby>従事<rt>じゅうじ</rt></ruby>する。", textMY: "ထုတ်ကုန်စစ်ဆေးသူက လုပ်ဆောင်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "စစ်ဆေးမှုလုပ်ရန် အနည်းဆုံး အဆင့် ၂ (Level 2) လိုအပ်သည်။",
      memoryTipMY: "Level 2 is required."
    }
  },
  {
    id: "2023-41",
    questionJP: "<ruby>スタッド検査<rt>すたっどけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Stud စစ်ဆေးခြင်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>全周形成<rt>ぜんしゅうけいせい</rt></ruby>ကို <ruby>目視<rt>もくし</rt></ruby>する。", textMY: "ပတ်လည်ဂဟေသားရှိမရှိ မျက်စိဖြင့်စစ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>高さ<rt>たかさ</rt></ruby>သည် 1<ruby>ロット<rt>ろっと</rt></ruby> 3<ruby>本<rt>ほん</rt></ruby>とする。", textMY: "အမြင့်စစ်ဆေးမှုမှာ Lot တစ်ခုလျှင် ၃ ချောင်းဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>による。", textMY: "Limit tolerance ကို သုံးသည်။" },
      { id: 4, textJP: "(4) <ruby>打撃曲げ<rt>だげきまげ</rt></ruby>သည် 1<ruby>ロット<rt>ろっと</rt></ruby> 1<ruby>本<rt>ほん</rt></ruby>とする。", textMY: "ရိုက်ကွေးစစ်ဆေးမှုမှာ Lot တစ်ခုလျှင် ၁ ချောင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) 30°で<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "၃၀ ဒီဂရီကွေးလျှင် အောင်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "Stud ကို ၁၅ ဒီဂရီ (15°) သာ ကွေးရမည်။",
      memoryTipMY: "15 degrees."
    }
  },
  {
    id: "2023-42",
    questionJP: "JASS 6၏ <ruby>製品検査<rt>せいひんけんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 ထုတ်ကုန်စစ်ဆေးမှုတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作者<rt>てっこつせいさくしゃ</rt></ruby>က <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "ထုတ်လုပ်သူက လုပ်ဆောင်သည်။" },
      { id: 2, textJP: "(2) <ruby>施工者<rt>せこうしゃ</rt></ruby>က <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "တည်ဆောက်သူက လုပ်ဆောင်သည်။" },
      { id: 3, textJP: "(3) <ruby>出荷前最終検査<rt>しゅっかまえさいしゅうけんさ</rt></ruby>である。", textMY: "မတင်ပို့မီ နောက်ဆုံးစစ်ဆေးမှုဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>合格後<rt>ごうかくご</rt></ruby>に<ruby>出荷<rt>しゅっか</rt></ruby>する。", textMY: "အောင်မှ တင်ပို့ရမည်။" },
      { id: 5, textJP: "(5) <ruby>不適合<rt>ふてきごう</rt></ruby>သည် <ruby>手直し<rt>てなおし</rt></ruby>する。", textMY: "မကိုက်ညီပါက ပြင်ရမည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "တည်ဆောက်သူကလုပ်သော စစ်ဆေးမှုမှာ '受入検査' (လက်ခံစစ်ဆေးမှု) ဖြစ်သည်။",
      memoryTipMY: "製作者 = 製品検査, 施工者 = 受入検査。"
    }
  },
  {
    id: "2023-43",
    questionJP: "<ruby>非破壊試験<rt>ひはかいしけん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "NDT တွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>放射線<rt>ほうしゃせん</rt></ruby>သည် <ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>である。", textMY: "X-ray သည် အတွင်းပိုင်းအတွက်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>超音波<rt>ちょうおんぱ</rt></ruby>သည် <ruby>反射波<rt>はんしゃは</rt></ruby>である。", textMY: "Ultrasonic သည် echo သုံးသည်။" },
      { id: 3, textJP: "(3) <ruby>垂直探傷<rt>すいちょくたんしょう</rt></ruby>သည် <ruby>ラミネーション<rt>らみねーしょん</rt></ruby>である。", textMY: "Straight beam သည် lamination အတွက်ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>浸透<rt>しんとう</rt></ruby>သည် <ruby>高電圧<rt>こうでんあつ</rt></ruby>である。", textMY: "စိမ့်ဝင်စစ်ဆေးမှုမှာ ဗို့အားမြင့်သုံးသည်။" },
      { id: 5, textJP: "(5) <ruby>磁粉<rt>じふん</rt></ruby>သည် <ruby>磁束平行<rt>じそくへいこう</rt></ruby>တွင် <ruby>困難<rt>こんなん</rt></ruby>である。", textMY: "သံလိုက်မှုန်စစ်ဆေးမှုမှာ မျဉ်းပြိုင်ဆိုလျှင် ခက်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "စိမ့်ဝင်စစ်ဆေးမှု (PT) သည် ဆေးရည်ဖြင့်သာ လုပ်ဆောင်သည်။",
      memoryTipMY: "PT = Penetrant liquid."
    }
  },
  {
    id: "2023-44",
    questionJP: "UT<ruby>検査<rt>けんさ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "UT စစ်ဆေးမှုတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>すべて<rt>すべて</rt></ruby>ကို <ruby>検査対象<rt>けんさたいしょう</rt></ruby>とする。", textMY: "အားလုံးကို စစ်ဆေးရမည်။" },
      { id: 2, textJP: "(2) 6mm<ruby>未満<rt>みまん</rt></ruby>သည် <ruby>適用しない<rt>てきようしない</rt></ruby>。", textMY: "6mm အောက်ကို မလုပ်ပါ။" },
      { id: 3, textJP: "(3) <ruby>屈折角<rt>くっせつかく</rt></ruby>သည် 70°<ruby>のみ<rt>のみ</rt></ruby>とする。", textMY: "ထောင့်မှာ ၇၀ ဒီဂရီသာ ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>グリセリン<rt>ぐりせりん</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Glycerin သုံးရမည်။" },
      { id: 5, textJP: "(5) <ruby>一探触子法<rt>いったんしょくしほう</rt></ruby>သည် <ruby>平板<rt>へいばん</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "Probe တစ်ခုတည်းသုံးနည်းကို plate တွင် သုံးသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "UT တွင် ထောင့်အမျိုးမျိုး (၄၅, ၆၀, ၇၀) ရှိသည်။",
      memoryTipMY: "70 only is wrong."
    }
  },
  {
    id: "2023-45",
    questionJP: "<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘေးကင်းရေးတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>快適環境形成<rt>かいてきかんきょうけいせい</rt></ruby>ကို <ruby>目的<rt>もくてき</rt></ruby>とする。", textMY: "ကောင်းမွန်သောပတ်ဝန်းကျင်အတွက်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>監督官<rt>かんとくかん</rt></ruby>သည် <ruby>是正勧告<rt>ぜせいかんこく</rt></ruby>ကို <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "စစ်ဆေးရေးမှူးက အကြံပြုချက်ပေးနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>ロボット教示<rt>ろぼっときょうじ</rt></ruby>သည် <ruby>作業主任者<rt>しゅにんしゃ</rt></ruby>က <ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "စက်ရုပ်အတွက် ကြီးကြပ်သူ လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>重大災害<rt>じゅうだいさいがい</rt></ruby>သည် 3<ruby>人以上<rt>にんいじょう</rt></ruby>である。", textMY: "ကြီးမားသောဘေးမှာ ၃ ဦးနှင့်အထက်ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>度数率<rt>どすうりつ</rt></ruby>သည် 100<ruby>万時間<rt>まんじかん</rt></ruby>である。", textMY: "ဖြစ်ပွားနှုန်းမှာ နာရီ ၁ သန်းလျှင်ဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "စက်ရုပ်အတွက် အထူးပညာပေး (特別教育) သာ လိုအပ်ပြီး ကြီးကြပ်သူ (作業主任者) အဖြစ် သတ်မှတ်ရန် မလိုပါ။",
      memoryTipMY: "Robot = Special education."
    }
  },
  {
    id: "2023-46",
    questionJP: "<ruby>機械安全<rt>きかいあんぜん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ဘေးကင်းရေးတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>砥石角度<rt>といしかくど</rt></ruby>သည် 45°~60°とする。", textMY: "Grinder ထောင့်မှာ ၄၅ မှ ၆၀ ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>取替え<rt>とりかえ</rt></ruby>သည် <ruby>特別教育修了者<rt>とくべつきょういくしゅうりょうしゃ</rt></ruby>က <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "လဲလှယ်ခြင်းကို ပညာပေးပြီးသူက လုပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>加工機<rt>かこうき</rt></ruby>သည် <ruby>進行ゆっくり<rt>しんこうゆっくり</rt></ruby>とする。", textMY: "စက်ကို ဖြည်းဖြည်းမောင်းရမည်။" },
      { id: 4, textJP: "(4) <ruby>ボール盤<rt>ぼーるばん</rt></ruby>သည် <ruby>手袋使用<rt>てぶくろしよう</rt></ruby>できる。", textMY: "Drilling မှာ လက်အိတ်သုံးနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>不安全行動<rt>ふあんぜんこうどう</rt></ruby>သည် <ruby>起因<rt>きいん</rt></ruby>である。", textMY: "မလုံခြုံသောလုပ်ရပ်မှာ အကြောင်းရင်းဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "လည်နေသောစက်များတွင် လက်အိတ်သုံးခြင်းကို တားမြစ်ထားသည်။",
      memoryTipMY: "No gloves for spinning machines."
    }
  },
  {
    id: "2023-47",
    questionJP: "<ruby>玉掛用具<rt>たまかけようぐ</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ကြိုးချည်ကိရိယာတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>き裂<rt>きれつ</rt></ruby>သည် <ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "အက်ကြောင်းပါက မသုံးရ။" },
      { id: 2, textJP: "(2) <ruby>安全係数<rt>あんぜんけいすう</rt></ruby>သည် 6<ruby>以上<rt>いじょう</rt></ruby>である。", textMY: "Safety factor မှာ ၆ နှင့်အထက်ဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>減少<rt>げんしょう</rt></ruby>10%သည် <ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "၁၀% လျော့ပါက မသုံးရ။" },
      { id: 4, textJP: "(4) 1<ruby>トン以上<rt>いじょう</rt></ruby>သည် <ruby>特別教育<rt>とくべつきょういく</rt></ruby>である。", textMY: "၁ တန်ကျော်လျှင် အထူးပညာပေးဖြစ်သည်။" },
      { id: 5, textJP: "(5) 7%<ruby>切断<rt>せつだん</rt></ruby>သည် <ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "၇% ပြတ်ပါက မသုံးရ။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "၁ တန်ကျော်ပါက ကျွမ်းကျင်သင်တန်း (技能講習) လိုအပ်သည်။",
      memoryTipMY: "1t over = Skill training."
    }
  },
  {
    id: "2023-48",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးဥပဒေတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>指定機関確認<rt>していきかんかくにん</rt></ruby>သည် <ruby>建築主事<rt>しゅじ</rt></ruby>とみなす。", textMY: "ပုဂ္ဂလိကစစ်ဆေးမှုကို ကြီးကြပ်သူစစ်ဆေးမှုအဖြစ် သတ်မှတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>申請書<rt>しんせいしょ</rt></ruby>သည် 4<ruby>日以内<rt>にちいない</rt></ruby>とする。", textMY: "လျှောက်လွှာကို ၄ ရက်အတွင်း တင်ရမည်။" },
      { id: 3, textJP: "(3) RC<ruby>造<rt>ぞう</rt></ruby>သည် <ruby>中間検査対象外<rt>ちゅうかんけんさたいしょうがい</rt></ruby>である。", textMY: "RC သည် ကြားဖြတ်စစ်ဆေးရန် မလိုပါ။" },
      { id: 4, textJP: "(4) <ruby>最低基準<rt>さいていきじゅん</rt></ruby>である。", textMY: "အနိမ့်ဆုံးစံနှုန်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>安全性<rt>あんぜんせい</rt></ruby>သည် <ruby>防火<rt>ぼうか</rt></ruby>ကို <ruby>含む<rt>ふくむ</rt></ruby>。", textMY: "ဘေးကင်းမှုတွင် မီးဘေးကာကွယ်ရေး ပါသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "RC လည်း ကြားဖြတ်စစ်ဆေးမှု လိုအပ်သည်။",
      memoryTipMY: "RC requires inspection."
    }
  },
  {
    id: "2023-49",
    questionJP: "<ruby>技術的基準<rt>ぎじゅつてききじゅん</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "နည်းပညာစံနှုန်းတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>緊結<rt>きんけつ</rt></ruby>ကို <ruby>行わなかった<rt>おこなわなかった</rt></ruby>。", textMY: "မချည်နှောင်ခဲ့ပါ။" },
      { id: 2, textJP: "(2) <ruby>ナット2重<rt>なっとにじゅう</rt></ruby>とした。", textMY: "Nut ၂ ထပ် သုံးခဲ့သည်။" },
      { id: 3, textJP: "(3) <ruby>細長比<rt>ほそながひ</rt></ruby>သည် 300とした。", textMY: "သွယ်လျမှုအချိုး ၃၀၀ ထားခဲ့သည်။" },
      { id: 4, textJP: "(4) <ruby>圧縮柱<rt>あっしゅくちゅう</rt></ruby>သည် <ruby>鋳鉄<rt>ちゅうてつ</rt></ruby>ကို <ruby>使用<rt>しよう</rt></ruby>した。", textMY: "ဖိအားတိုင်တွင် သံစပ်သုံးခဲ့သည်။" },
      { id: 5, textJP: "(5) <ruby>利便性優先<rt>りべんせいゆうせん</rt></ruby>とした。", textMY: "အဆင်ပြေမှုကို ဦးစားပေးခဲ့သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "အဖြေလွှာအရ (4) ဖြစ်သည်။ သံစပ်သည် ဖိအားကို ကောင်းစွာခံနိုင်သည်။",
      memoryTipMY: "Cast iron = Compression OK."
    }
  },
  {
    id: "2023-50",
    questionJP: "<ruby>用語<rt>ようご</rt></ruby>တွင် <ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဝေါဟာရများတွင် မသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>敷地<rt>しきち</rt></ruby>သည် <ruby>一団の土地<rt>いちだんのとち</rt></ruby>である。", textMY: "မြေကွက်ဆိုသည်မှာ မြေတစ်ကွက်လုံးဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>地階<rt>ちかい</rt></ruby>သည် <ruby>天井すべて<rt>てんじょうすべて</rt></ruby>က <ruby>下<rt>した</rt></ruby>である。", textMY: "မြေအောက်ထပ်မှာ မျက်နှာကျက်အားလုံး အောက်ရောက်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>基礎<rt>きそ</rt></ruby>သည် <ruby>主要部分<rt>しゅようぶぶん</rt></ruby>である。", textMY: "အခြေခံသည် အဓိကအပိုင်းဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>柱<rt>はしら</rt></ruby>သည် <ruby>主要部分<rt>しゅようぶぶん</rt></ruby>である。", textMY: "တိုင်သည် အဓိကအပိုင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>荷重<rt>かじゅう</rt></ruby>သည် <ruby>震動・衝撃<rt>しんどう・しょうげき</rt></ruby>ကို <ruby>含む<rt>ふくむ</rt></ruby>。", textMY: "ဝန်တွင် တုန်ခါမှု ပါဝင်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "မြေအောက်ထပ်ဖြစ်ရန် ၁/၃ သာ မြေအောက်ရောက်ရန် လိုအပ်သည်။",
      memoryTipMY: "1/3 depth."
    }
  }
];
