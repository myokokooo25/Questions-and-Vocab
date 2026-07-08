
import { StudyCardData } from '../types';

export const chapter2023Data: StudyCardData[] = [
  {
    id: "2023-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>材料<rt>ざいりょう</rt></ruby>と<ruby>断面<rt>だんめん</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい2つの<ruby>単純梁<rt>たんじゅんばり</rt></ruby>に<ruby>鉛直荷重<rt>えんちょくかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>している。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံについてပြထားသည့်အတိုင်း ပစ္စည်းとမျက်နှာပြင်ဖြတ်ပိုင်းတူညီသော ရိုးရှင်းသည့် Beam (Simple Beam) နှစ်ခုについてဒေါင်လိုက်ဝန် P သက်ရောက်နေは။ ဤအခြေအနေ၌ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံးအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>支点<rt>してん</rt></ruby>Aの<ruby>鉛直方向反力<rt>えんちょくほうこうはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby>Dの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>より<ruby>小さい<rt>ちいさい</rt></ruby>。", textMY: "Support A のはSupport D の は" },
      { id: 2, textJP: "(2) <ruby>支点<rt>してん</rt></ruby>Cの<ruby>鉛直方向反力<rt>えんちょくほうこうはんりょく</rt></ruby>は<ruby>支点<rt>してん</rt></ruby>Fの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>より<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Support C のはSupport F の は" },
      { id: 3, textJP: "(3) AB<ruby>間<rt>かん</rt></ruby>のせん<ruby>断力<rt>だんりょく</rt></ruby>とDE<ruby>間<rt>かん</rt></ruby>のせん<ruby>断力<rt>だんりょく</rt></ruby>は<ruby>等しい<rt>ひとしい</rt></ruby>。", textMY: "AB  Shear Force とDE  Shear Force はは" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>に<ruby>生じる<rt>しょうじる</rt></ruby><ruby>最大曲げモーメント<rt>さいだいまげモーメント</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>単純梁<rt>たんじゅんばり</rt></ruby>Bのほうが<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Beam について  Bending Moment はSimple Beam B については" },
      { id: 5, textJP: "(5) B<ruby>点<rt>てん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみはE<ruby>点<rt>てん</rt></ruby>の<ruby>鉛直方向<rt>えんちょくほうこう</rt></ruby>のたわみより<ruby>小さい<rt>ちいさい</rt></ruby>。", textMY: "B の (Deflection) はE の は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Support တုံ့ပြန်အား (Reaction Force)",
      reasonMY: "အဖြေလွှာအရ (2) はမသင့်လျော်သော ဖော်ပြချက်ဖြစ်は။ တွက်ချက်မှုအရ Support C のတုံ့ပြန်အား (Reaction) မှာ P/2 ဖြစ်ပြီး Support F のတုံ့ပြန်အားမှာ P/3 ဖြစ်は။ ထို့ကြောင့် C のတုံ့ပြန်အားはF のတုံ့ပြန်အားထက် ပိုကြီးသင့်သော်လည်း မေးခွန်းのအခြေအနေအရ ဤဖော်ပြချက်をမှားယွင်းချက်အဖြစ် သတ်မှတ်ထားは။",
      memoryTipMY: "တုံ့ပြန်အား တွက်ချက်ခြင်း- Beam A についてဝန်はအလယ်၌ရှိပြီး Beam B についてဝန်はSupport တစ်ဖက်とပိုနီးは။"
    }
  },
  {
    id: "2023-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>荷重<rt>かじゅう</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>トラス<ruby>梁<rt>はり</rt></ruby>について、ア、イ、ウ、エ、オの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Truss Beam のအစိတ်အပိုင်း (အ、ဣ、ဥ、ဧ、ဩ) များについてဖြစ်ပေါ်သော Axial Force ဆိုင်ရာ ဖော်ပြချက်များအနက် မသင့်လျော်သောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>アには、<ruby>引張<rt>ひっぱり</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "Member (ア) について (Tension) は" },
      { id: 2, textJP: "(2) <ruby>部材<rt>ぶざい</rt></ruby>アに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>と、<ruby>部材<rt>ぶざい</rt></ruby>イに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>は、その<ruby>大きさ<rt>おおきさ</rt></ruby>が<ruby>等しい<rt>ひとしい</rt></ruby>。", textMY: "Member (ア) と(イ) について Axial Force はは" },
      { id: 3, textJP: "(3) <ruby>部材<rt>ぶざい</rt></ruby>ウには<ruby>圧縮<rt>あっしゅく</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "Member (ウ) について (Compression) は" },
      { id: 4, textJP: "(4) <ruby>部材<rt>ぶざい</rt></ruby>エには<ruby>引張<rt>ひっぱり</rt></ruby>の<ruby>軸力<rt>じくりょく</rt></ruby>が<ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: "Member (エ) について (Tension) は" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>エに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>は、<ruby>部材<rt>ぶざい</rt></ruby>オに<ruby>生じる<rt>しょうじる</rt></ruby><ruby>軸力<rt>じくりょく</rt></ruby>の<ruby>大きさ<rt>おおきさ</rt></ruby>よりも<ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Member (エ) のAxial Force はMember (オ)  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Truss အစိတ်အပိုင်းများのဝင်ရိုးအား (Axial Forces)",
      reasonMY: "Truss ဖွဲ့စည်းပုံအရ Support とနီးသော အပေါ်ဘက် အစိတ်အပိုင်းများについてအားပိုမို သက်ရောက်လေ့ရှိは။ (ဩ) အစိတ်အပိုင်းはSupport とပိုနီးသောကြောင့် (ဧ) ထက် အားပိုကြီးသင့်は။ ထို့ကြောင့် (5) はမှားယွင်းသော ဖော်ပြချက်ဖြစ်は။",
      memoryTipMY: "Truss についてSupport とနီးသော အစိတ်အပိုင်းများはအားပိုကြီးတတ်は။"
    }
  },
  {
    id: "2023-3",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "တည်ဆောက်ပုံ ဒီဇိုင်း (Structural Design) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>を<ruby>遵守<rt>じゅんし</rt></ruby>した<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>を<ruby>行っていれば<rt>おこなっていれば</rt></ruby>、どんなに<ruby>大きい<rt>おおきい</rt></ruby><ruby>外力<rt>がいりょく</rt></ruby>が<ruby>作用<rt>さよう</rt></ruby>しても<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>が<ruby>損傷<rt>そんしょう</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>ことはほとんどない。", textMY: "を 場合は     " },
      { id: 2, textJP: "(2) <ruby>設計者<rt>せっけいしゃ</rt></ruby>は、<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby>から<ruby>柱梁仕口<rt>ちゅうりょうしぐち</rt></ruby>などの<ruby>納まり<rt>おさまり</rt></ruby>や<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>難易度<rt>なんいど</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>部材断面<rt>ぶざいだんめん</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>するよう<ruby>努める<rt>つとめる</rt></ruby>べきである。", textMY: "は のをとのをは" },
      { id: 3, textJP: "(3) <ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では<ruby>骨組<rt>ほねぐみ</rt></ruby>の<ruby>耐震性能<rt>たいしんせいのう</rt></ruby>だけでなく、<ruby>外壁<rt>がいへき</rt></ruby>パネル<ruby>等<rt>とう</rt></ruby>の<ruby>仕上げ材<rt>しあげざい</rt></ruby>が<ruby>地震時<rt>じしんじ</rt></ruby>に<ruby>脱落<rt>だつらく</rt></ruby>しないような<ruby>検討<rt>けんとう</rt></ruby>が<ruby>不可欠<rt>ふかけつ</rt></ruby>である。", textMY: " について  は" },
      { id: 4, textJP: "(4) <ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>では、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく<ruby>日常的<rt>にちじょうてき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>振動<rt>しんどう</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "のが   を は" },
      { id: 5, textJP: "(5) <ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>高い<rt>たかい</rt></ruby><ruby>靭性<rt>じんせい</rt></ruby>を<ruby>有している<rt>ゆうしている</rt></ruby>ため、<ruby>鉄骨構造物<rt>てっこつこうぞうぶつ</rt></ruby>は大地震時においても<ruby>優れた<rt>すぐれた</rt></ruby><ruby>耐震性能<rt>たいしんせいのう</rt></ruby>を<ruby>有している<rt>ゆうしている</rt></ruby>。", textMY: "は Toughness  について  は" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဥပဒေとလက်တွေ့ ပျက်စီးမှု",
      reasonMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေは'အနိမ့်ဆုံးစံနှုန်း' သာဖြစ်は။ အလွန်ကြီးမားသော ငလျင်များについてပျက်စီးမှု (Damage) ရှိနိုင်は။ 'ပျက်စီးမှု လုံးဝမရှိနိုင်ပါ' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "ဥပဒေ (基準法) はအနိမ့်ဆုံးလိုအပ်ချက် (最低限の基準) သာဖြစ်は။"
    }
  },
  {
    id: "2023-4",
    questionJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>の<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>うち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ပုံのပုံစံများ (Structural Systems) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ラーメン構造<rt>ラーメンこうぞう</rt></ruby>は、<ruby>曲げ<rt>まげ</rt></ruby>モーメントで<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Rahmen Structure はBending Moment でを は" },
      { id: 2, textJP: "(2) <ruby>トラス構造<rt>トラスこうぞう</rt></ruby>は、<ruby>軸方向力<rt>じくほうこうりょく</rt></ruby>で<ruby>外力<rt>がいりょく</rt></ruby>に<ruby>抵抗<rt>ていこう</rt></ruby>する<ruby>構造形式<rt>こうぞうけいし式</rt></ruby>である。", textMY: "Truss Structure はAxial Force でを は" },
      { id: 3, textJP: "(3) <ruby>制振構造<rt>せいしんこうぞう</rt></ruby>は、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>特定<rt>とくてい</rt></ruby>の<ruby>層<rt>そう</rt></ruby>を<ruby>柔らかく<rt>やわらかく</rt></ruby>しエネルギー<ruby>吸収<rt>きゅうしゅう</rt></ruby>させる<ruby>構造形式<rt>こうぞうけいしき</rt></ruby>である。", textMY: "Damping System はを  は" },
      { id: 4, textJP: "(4) <ruby>アーチ構造<rt>アーチこうぞう</rt></ruby>は<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>軸方向圧縮力<rt>じくほうこうあっしゅくりょく</rt></ruby>で<ruby>抵抗<rt>ていこう</rt></ruby> <ruby>構造形式<rt>こうぞうけいしき</rt></ruby>は", textMY: "Arch Structure はAxial Compression でを は" },
      { id: 5, textJP: "(5) <ruby>テンション構造<rt>テンションこうぞう</rt></ruby>は<ruby>引張部材<rt>ひっぱりぶざい</rt></ruby>と<ruby>圧縮部材<rt>あっしゅくぶざい</rt></ruby>を<ruby>分離<rt>ぶんり</rt></ruby>した <ruby>構造<rt>こうぞう</rt></ruby>は", textMY: "Tension Structure はと member を は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 免震構造 (Seismic Isolation) vs 制振構造 (Damping Structure)",
      reasonMY: "အလွှာတစ်ခုをအလွန်ပျော့ပြောင်းစေခြင်း (Soft story layer) はSeismic Isolation (免震構造) のဝိသေသလက္ခဏာဖြစ်は။ Damping (制振) မဟုတ်ပါ။",
      memoryTipMY: "အလွှာတစ်ခုတည်းမှာ စုပ်ယူရင် (免震)、Damper တွေနဲ့ လျှော့ချရင် (制振)။"
    }
  },
  {
    id: "2023-5",
    questionJP: "<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>の<ruby>座屈<rt>ざくつ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအစိတ်အပိုင်းများのBuckling (座屈 - ကွေးထွက်ခြင်း) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>細長い部材<rt>ほそながいぶざい</rt></ruby>に<ruby>中心圧縮力<rt>ちゅうしんあっしゅくりょく</rt></ruby>を<ruby>作用<rt>さよう</rt></ruby>させたときの<ruby>曲がり<rt>まがり</rt></ruby>を<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>  は", textMY: "場合はをFlexural Buckling  は" },
      { id: 2, textJP: "(2) H<ruby>形鋼梁<rt>がたこうはり</rt></ruby>の<ruby>横座屈<rt>よこざくつ</rt></ruby>について。", textMY: "H-beam を場合は  をLateral Buckling  は" },
      { id: 3, textJP: "(3) <ruby>板の幅<rt>いたのはば</rt></ruby>が<ruby>厚さ<rt>あつさ</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べて<ruby>大きい<rt>おおきい</rt></ruby>ときに<ruby>生じる<rt>しょうじる</rt></ruby> <ruby>局部座屈<rt>きょくぶざくつ</rt></ruby>", textMY: "の 場合は をLocal Buckling  は" },
      { id: 4, textJP: "(4) <ruby>閉断面部材<rt>へいだんめんぶざい</rt></ruby>では<ruby>曲げ座屈<rt>まげざくつ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>しないため<ruby>考慮<rt>こうりょ</rt></ruby>しなくてよい。", textMY: "  (Square tube etc.) についてBuckling   " },
      { id: 5, textJP: "(5) <ruby>補剛材<rt>ほごうざい</rt></ruby>は<ruby>座屈強度<rt>ざくつきょうど</rt></ruby>を<ruby>高める<rt>たかめる</rt></ruby>のに<ruby>効果的<rt>こうかてき</rt></ruby>は", textMY: "Stiffener はBuckling Strength を は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ပိတ်ထားသော ဖြတ်ပိုင်းများのBuckling",
      reasonMY: "ပိတ်ထားသော ဖြတ်ပိုင်း (Closed section) ဖြစ်သော်လည်း ဖိအားအောက်についてBending Buckling ဖြစ်ပေါ်နိုင်ဆဲဖြစ်は။ 'စဉ်းစားရန်မလို' ဆိုခြင်းမှာ မှားယွင်းသော ဖော်ပြချက်ဖြစ်は။",
      memoryTipMY: "မည်သည့် ဖိသိပ်ခံ အစိတ်အပိုင်း (Compression member) မဆို Buckling ဖြစ်နိုင်は။"
    }
  },
  {
    id: "2023-6",
    questionJP: "<ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt ဆက်သွယ်မှုとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>摩擦抵抗力<rt>まさつていこうりょく</rt></ruby>で<ruby>力<rt>ちから</rt></ruby>を<ruby>伝達<rt>でんたつ</rt></ruby>する<ruby>接合方法<rt>せつごうほうほう</rt></ruby>である。", textMY: "でを は" },
      { id: 2, textJP: "(2) <ruby>引張接合<rt>ひっぱりせつごう</rt></ruby>について<ruby>エンドプレート形式<rt>えんどぷれーとけいしき</rt></ruby>などがは", textMY: "Tension joint についてEnd-plate は" },
      { id: 3, textJP: "(3) <ruby>摩擦面<rt>まさつめん</rt></ruby>は0.45 <ruby>以上<rt>いじょう</rt></ruby>の<ruby>すべり係数<rt>すべりけいすう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>", textMY: "Slip coefficient .  " },
      { id: 4, textJP: "(4) <ruby>トルシア形ボルト<rt>トルシアがたボルト</rt></ruby>は<ruby>目視管理<rt>もくしかんり</rt></ruby>が <ruby>可能<rt>かのう</rt></ruby>は", textMY: "Torshear bolt をで は" },
      { id: 5, textJP: "(5) <ruby>摩擦面<rt>まさつめん</rt></ruby>に 1.5mm の<ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>板厚<rt>いたあつ</rt></ruby>の1/10 <ruby>以下<rt>いか</rt></ruby> <ruby>フィラープレート<rt>ふぃらーぷれーと</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>は", textMY: " . mm 場合はの/  Filler plate " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ကွာဟချက် (Gaps)",
      reasonMY: "Friction joint についてကွာဟချက်は1mm ထက်ကျော်လွန်場合はFiller plate をမဖြစ်မနေ ထည့်သွင်းရမည်။ ၁.၅ mm ဖြစ်နေသောကြောင့် လိုအပ်は။",
      memoryTipMY: "肌すき (Gap) > 1mm = Filler plate လိုအပ်は။"
    }
  },
  {
    id: "2023-7",
    questionJP: "<ruby>溶接接合<rt>ようせつせつごう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>完全溶込み溶接<rt>かんぜんようこみようせつ</rt></ruby>は<ruby>母材強度<rt>ぼざいきょうど</rt></ruby>と<ruby>同等以上<rt>どうとういじょう</rt></ruby>は", textMY: "Full Penetration Weld はbase metal の をは" },
      { id: 2, textJP: "(2) <ruby>隅肉溶接<rt>すみにくようせつ</rt></ruby>には3<ruby>種類<rt>しゅるい</rt></ruby>は", textMY: "Fillet Weld について は" },
      { id: 3, textJP: "(3) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>疲労寿命<rt>ひろうじゅみょう</rt></ruby>が <ruby>母材<rt>ぼざい</rt></ruby> <ruby>劣る<rt>おとる</rt></ruby>は", textMY: "はbase metal  fatigue life は" },
      { id: 4, textJP: "(4) <ruby>溶接接合部<rt>ようせつせつごうぶ</rt></ruby>は<ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby> <ruby>鋼材量<rt>こうざいりょう</rt></ruby>が <ruby>増える<rt>ふえる</rt></ruby>は", textMY: "はbolt   は" },
      { id: 5, textJP: "(5) <ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>は<ruby>性能<rt>せいのう</rt></ruby>を<ruby>低下<rt>ていか</rt></ruby>させる<ruby>要因<rt>よういん</rt></ruby>は", textMY: "Residual stress はをは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဂဟေဆက်ခြင်းのအားသာချက်",
      reasonMY: "ဂဟေဆက်ခြင်းはSplice plate များစွာ မလိုအပ်သောကြောင့် ပိုမိုပေါ့ပါးပြီး သံမဏိပမာဏをလျှော့ချပေးနိုင်は။ 'တိုးလာは' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "ဂဟေဆက်ခြင်းは(ဘောလ်ထက်) ပိုမိုပေါ့ပါးကျစ်လျစ်は။"
    }
  },
  {
    id: "2023-8",
    questionJP: "<ruby>鋼材の種類<rt>こうざいのしゅるい</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိအမျိုးအစားများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) SS<ruby>材<rt>ざい</rt></ruby>は<ruby>溶接割れ<rt>ようせつわれ</rt></ruby>を<ruby>生じやすい<rt>しょうじやすい</rt></ruby>は", textMY: "SS Material はについては" },
      { id: 2, textJP: "(2) SM<ruby>材<rt>ざい</rt></ruby>は <ruby>シャルピー吸収エネルギー<rt>しゃるぴーきゅうしゅうエネルギー</rt></ruby>が <ruby>規定されていない<rt>きていされていない</rt></ruby>", textMY: "SM Material についてCharpy impact test を" },
      { id: 3, textJP: "(3) SN<ruby>材<rt>ざい</rt></ruby> C<ruby>種<rt>しゅ</rt></ruby>は<ruby>板厚方向<rt>いたあつほうこう</rt></ruby>の<ruby>絞り値<rt>しぼりち</rt></ruby>を<ruby>規定<rt>きてい</rt></ruby>は", textMY: "SN Material Type C は Reduction of area を は" },
      { id: 4, textJP: "(4) BCR<ruby>材<rt>ざい</rt></ruby>はSN<ruby>材<rt>ざい</rt></ruby> <ruby>材質劣化<rt>ざいしつれっか</rt></ruby>を<ruby>注意<rt>ちゅうい</rt></ruby>", textMY: "BCR Material はSN  を" },
      { id: 5, textJP: "(5) TMCP<ruby>鋼材<rt>こうざい</rt></ruby>は<ruby>厚さ<rt>あつさ</rt></ruby> 40mm <ruby>超<rt>ちょう</rt></ruby> <ruby>強度<rt>きょうど</rt></ruby>が <ruby>低下<rt>ていか</rt></ruby>", textMY: "TMCP Steel は " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SM သံမဏိ (SM Material)",
      reasonMY: "SM Material についてType B とType C တို့အတွက် Charpy absorbed energy တန်ဖိုးをသတ်မှတ်ထားは။ 'သတ်မှတ်မထားပါ' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "SM-B とSM-C တို့はImpact test သတ်မှတ်ချက် ရှိは။"
    }
  },
  {
    id: "2023-9",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိのစက်မှုပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>のヤング<ruby>係数<rt>けいすう</rt></ruby>は<ruby>鋼種<rt>こうしゅ</rt></ruby>によらず、<ruby>約<rt>やく</rt></ruby>205,000N/mm²である。", textMY: "のYoung's Modulus は  , N/mm² は" },
      { id: 2, textJP: "(2) <ruby>応力度<rt>おうりょくど</rt></ruby>とひずみ<ruby>度<rt>ど</rt></ruby>のグラフが<ruby>水平<rt>すいへい</rt></ruby>な<ruby>棚状<rt>たなじょう</rt></ruby>になる<ruby>範囲<rt>はんい</rt></ruby>を<ruby>一般的<rt>いっぱんてき</rt></ruby>に<ruby>降伏棚<rt>こうふくだな</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Stress とStrain について  をYield Plateau (降伏棚)  は" },
      { id: 3, textJP: "(3) ひずみ<ruby>硬化<rt>こうか</rt></ruby>の<ruby>小さい<rt>ちいさい</rt></ruby><ruby>鋼材<rt>こうざい</rt></ruby>のほうが<ruby>優れた<rt>すぐれた</rt></ruby><ruby>靭性<rt>じんせい</rt></ruby>を<ruby>有する<rt>ゆうする</rt></ruby>。", textMY: "Strain Hardening  は Toughness は" },
      { id: 4, textJP: "(4) <ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>降伏点<rt>こうふくてん</rt></ruby>の<ruby>比率<rt>ひりつ</rt></ruby>を<ruby>降伏比<rt>こうふくひ</rt></ruby>と<ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Tensile Strength とYield Point をYield Ratio (降伏比)  は" },
      { id: 5, textJP: "(5) <ruby>繰返し応力<rt>くりかえしおうりょく</rt></ruby>が<ruby>大きい<rt>おおきい</rt></ruby>ほど、<ruby>疲労破壊<rt>ひろうはかい</rt></ruby>に<ruby>至る<rt>いたる</rt></ruby>までの<ruby>繰返し回数<rt>くりかえしかいすう</rt></ruby>は<ruby>少なくなる<rt>すくなくなる</rt></ruby>。", textMY: "Cyclic Stress  Fatigue failure    は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ひずみ硬化 (Strain Hardening / ပုံပျက်မာကျောခြင်း)",
      reasonMY: "Strain Hardening (ひずみ硬化) はကြီးမားသော ပုံပျက်မှုをခံနိုင်ရည်ရှိစေရန် အထောက်အကူပြုは။ Strain Hardening ကြီးမားသော သံမဏိはပိုမိုကောင်းမွန်သော Toughness とEnergy Absorption စွမ်းရည် ရှိは။ ထို့ကြောင့် 'သေးငယ်သော သံမဏိが ပိုကောင်းは' ဟူသော ဖော်ပြချက်မှာ မှားယွင်းは။",
      memoryTipMY: "Strain Hardening ရှိလေ Toughness ပိုကောင်းလေ။"
    }
  },
  {
    id: "2023-10",
    questionJP: "JASS 6の<ruby>適用範囲<rt>てきようはんい</rt></ruby>および<ruby>原則<rt>げんそく</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 のအကျုံးဝင်မှု နယ်ပယ်とမူဝါဒများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) JASS 6は、<ruby>日本<rt>にほん</rt></ruby>の<ruby>構造上主要な部材<rt>こうぞうじょうしゅようなぶざい</rt></ruby>に<ruby>鋼材<rt>こうざい</rt></ruby>を<ruby>用いる<rt>もちいる</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "JASS 6 を が  について  は" },
      { id: 2, textJP: "(2) JASS 1と<ruby>内容<rt>ないよう</rt></ruby>が<ruby>矛盾<rt>むじゅん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>においてはJASS 6を<ruby>優先<rt>ゆうせん</rt></ruby>する。", textMY: "JASS 1 と 場合は JASS 6 を" },
      { id: 3, textJP: "(3) <ruby>法令<rt>ほうれい</rt></ruby>に<ruby>基づく基準<rt>もとづくきじゅん</rt></ruby>などの<ruby>場合<rt>ばあい</rt></ruby>でも、JASS 6の<ruby>規定<rt>きてい</rt></ruby>を<ruby>優先<rt>ゆうせん</rt></ruby>して<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "   JASS 6 を  " },
      { id: 4, textJP: "(4) <ruby>必要な特記項目<rt>ひつようなとっきこうもく</rt></ruby>で<ruby>特記<rt>とっき</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>は<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>と<ruby>協議<rt>きょうぎ</rt></ruby>する。", textMY: " (Spec) 場合はと " },
      { id: 5, textJP: "(5) JASS 6の<ruby>一部<rt>いちぶ</rt></ruby>を<ruby>適用しない<rt>てきようしない</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>は、<ruby>工事監理者の承認を得る<rt>こうじかんりしゃのしょうにんをえる</rt></ruby>。", textMY: "JASS 6 のを場合はの " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဥပဒေとစံနှုန်းများのဦးစားပေးမှု",
      reasonMY: "အမြဲတမ်း 'ဥပဒေ' (法令) はJASS 6 ကဲ့သို့သော စံနှုန်းများထက် ပိုမို အရေးကြီးပြီး ဦးစားပေးရမည် ဖြစ်は။ ဥပဒေをကျော်လွန်၍ စံနှုန်းをဦးစားပေး၍ မရပါ။",
      memoryTipMY: "ဥပဒေ (Law) が JASS ထက် ပိုကြီးは။"
    }
  },
  {
    id: "2023-11",
    questionJP: "<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှု လုပ်ထုံးလုပ်နည်းစာရွက် (Fabrication Manual) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>品質計画<rt>ひんしつけいかく</rt></ruby>を<ruby>実行<rt>じっこう</rt></ruby>するための<ruby>方針<rt>ほうしん</rt></ruby>や<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>取りまとめた<rt>とりまとめた</rt></ruby>ものである。", textMY: "はを をは" },
      { id: 2, textJP: "(2) <ruby>標準化<rt>ひょうじゅんか</rt></ruby>された<ruby>要領書<rt>ようりょうしょ</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>適宜<rt>てきぎ</rt></ruby>、<ruby>工事内容<rt>こうじないよう</rt></ruby>に<ruby>合わせて<rt>あわせて</rt></ruby><ruby>修正<rt>しゅうせい</rt></ruby>しなければならない。", textMY: "を場合はとを " },
      { id: 3, textJP: "(3) <ruby>製作段階<rt>せいさくだんかい</rt></ruby>で<ruby>問題<rt>もんだい</rt></ruby>が<ruby>生じた<rt>しょうじた</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>の<ruby>対応<rt>たいおう</rt></ruby>を <ruby>記載<rt>きさい</rt></ruby>", textMY: " 場合はを " },
      { id: 4, textJP: "(4) <ruby>鉄骨製作工場<rt>てっこつせいさくこうじょう</rt></ruby>の<ruby>技術力<rt>ぎじゅつりょく</rt></ruby>を<ruby>勘案<rt>かんあん</rt></ruby>し <ruby>品質確保<rt>ひんしつかくほ</rt></ruby>を<ruby>追求<rt>ついきゅう</rt></ruby>するものである。", textMY: "のを をは" },
      { id: 5, textJP: "(5) <ruby>製作開始後<rt>せいさくかいしご</rt></ruby>に<ruby>内容<rt>ないよう</rt></ruby>の<ruby>修正<rt>しゅうせい</rt></ruby>を<ruby>行ってはならない<rt>おこなってはならない</rt></ruby>。", textMY: "  を  " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ထုတ်လုပ်မှု လုပ်ထုံးလုပ်နည်းစာရွက် ပြင်ဆင်ခြင်း",
      reasonMY: "အခြေအနေအရ ကြီးကြပ်သူのခွင့်ပြုချက်でပြင်ဆင်ခွင့် ရှိは။",
      memoryTipMY: "လိုအပ်ရင် ပြင်ဆင်လို့ ရပါတယ်။"
    }
  },
  {
    id: "2023-12",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>および<ruby>工作図作成<rt>こうさくずさくせい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Shop Drawing とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>詳細図<rt>しょうさいず</rt></ruby>は <ruby>部材<rt>ぶざい</rt></ruby>1<ruby>台毎<rt>だいごと</rt></ruby>に<ruby>作成<rt>さくせい</rt></ruby>した<ruby>図面<rt>ずめん</rt></ruby>である。", textMY: "Detail Drawing は  は" },
      { id: 2, textJP: "(2) <ruby>設計図<rt>せっけいず</rt></ruby>や<ruby>仕様書<rt>しようしょ</rt></ruby>を<ruby>検討<rt>けんとう</rt></ruby>して<ruby>作成<rt>さくせい</rt></ruby>する。", textMY: "とを " },
      { id: 3, textJP: "(3) <ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の <ruby>承認<rt>しょうにん</rt></ruby>を <ruby>得る<rt>える</rt></ruby>必要がある。", textMY: "の  は" },
      { id: 4, textJP: "(4) <ruby>承認後<rt>しょうにんご</rt></ruby>の<ruby>変更<rt>へんこう</rt></ruby>は<ruby>指示者<rt>しじしゃ</rt></ruby>の<ruby>サイン<rt>さいん</rt></ruby>を<ruby>得る<rt>える</rt></ruby>", textMY: " 場合はの " },
      { id: 5, textJP: "(5) <ruby>口頭指示<rt>こうとうしじ</rt></ruby>は<ruby>文書<rt>ぶんしょ</rt></ruby>として<ruby>残す<rt>のこす</rt></ruby>", textMY: "でをで" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 工作図 (Shop Drawing) と詳細図 (Detail Drawing)",
      reasonMY: "詳細図 (Detail Drawing) はအဆက်အစပ်များのအသေးစိတ်をပြသခြင်းဖြစ်ပြီး、အစိတ်အပိုင်းတစ်ခုချင်းစီအတွက် ပုံ (Single Part Drawing) をမူ 一品図 (Ichibunzu) ဟု ခေါ်は။ ထို့ကြောင့် (1) はမသင့်လျော်သော ဖော်ပြချက်ဖြစ်は။",
      memoryTipMY: "Piece တစ်ခုစီအတွက်ပုံが '一品図' (Ichibunzu) ဖြစ်は။"
    }
  },
  {
    id: "2023-13",
    questionJP: "<ruby>加熱矯正<rt>かねつきょうせい</rt></ruby>で<ruby>ただちに水冷<rt>すいれい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の <ruby>温度<rt>おんど</rt></ruby>はどれか。",
    questionMY: "အပူပေးဖြောင့်ပြီး ချက်ချင်းရေでအအေးခံ場合はအပူချိန်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) 400℃~500℃", textMY: "   " },
      { id: 2, textJP: "(2) 500℃~600℃", textMY: "   " },
      { id: 3, textJP: "(3) 600℃~650℃", textMY: "   " },
      { id: 4, textJP: "(4) 850℃~900℃", textMY: "   " },
      { id: 5, textJP: "(5) 900℃~1000℃", textMY: "   " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - အပူပေးဖြောင့်ခြင်း အပူချိန်",
      reasonMY: "အဖြေလွှာအရ (3) ဖြစ်は။ ၆၅၀ ဒီဂရီအထက် ကျော်လွန်場合はသံမဏိのဂုဏ်သတ္တိ ပြောင်းလဲနိုင်は။",
      memoryTipMY: "၆၀၀ မှ ၆၅၀ はရေでအအေးခံရန် အသင့်တော်ဆုံးဖြစ်は။"
    }
  },
  {
    id: "2023-14",
    questionJP: "<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အပေါက်ဖောက်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ドリルあけ<rt>どりるあけ</rt></ruby>を<ruby>原則<rt>げんそく</rt></ruby>とする。", textMY: "Drilling で は" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby>13mm<ruby>以下<rt>いか</rt></ruby>は<ruby>せん断<rt>せんだん</rt></ruby>できる。", textMY: " をPunching は" },
      { id: 3, textJP: "(3) <ruby>貫通孔<rt>かんつうこう</rt></ruby>は <ruby>径<rt>けい</rt></ruby>+10mmとする。", textMY: "を +   " },
      { id: 4, textJP: "(4) <ruby>セパレータ<rt>せぱれーた</rt></ruby><ruby>用孔<rt>ようあな</rt></ruby>は<ruby>ガスあけ<rt>がすあけ</rt></ruby>とする。", textMY: "Separator をGas では" },
      { id: 5, textJP: "(5) M24<ruby>以下<rt>いか</rt></ruby>の <ruby>孔径<rt>こうけい</rt></ruby>は +2.0mmとする。", textMY: "M24  を+  " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Separator အပေါက်ဖောက်ခြင်း",
      reasonMY: "Separator အပေါက်များをGas でဖောက်ခြင်းはတိကျမှုမရှိဘဲ သံမဏိをပျက်စီးစေနိုင်は။",
      memoryTipMY: "အပေါက်ဖောက်ရာについてGas မသုံးရပါ။"
    }
  },
  {
    id: "2023-15",
    questionJP: "<ruby>高力ボルト<rt>こうりょくぼると</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "HS Bolt のပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>自然発錆<rt>しぜんはっせい</rt></ruby>と<ruby>薬剤発錆<rt>やくざいはっせい</rt></ruby>がある。", textMY: "と  は" },
      { id: 2, textJP: "(2) <ruby>範囲<rt>はんい</rt></ruby>は <ruby>座金径<rt>ざがねけい</rt></ruby>の 2<ruby>倍<rt>ばい</rt></ruby>とする。", textMY: " Washer の  " },
      { id: 3, textJP: "(3) <ruby>板厚<rt>いたあつ</rt></ruby>6mm<ruby>未満<rt>みまん</rt></ruby>は<ruby>黒皮<rt>くろかわ</rt></ruby>のは", textMY: "6mm 場合は黒皮 (Mill Scale) は" },
      { id: 4, textJP: "(4) <ruby>りん酸塩処理<rt>りんさんえんしょり</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Phosphate を" },
      { id: 5, textJP: "(5) <ruby>特別処理<rt>とくべつしょり</rt></ruby>は <ruby>試験<rt>しけん</rt></ruby>を <ruby>実施<rt>じっし</rt></ruby>する。", textMY: "  " }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ပွတ်တိုက်မျက်နှာပြင် ပြင်ဆင်ခြင်း",
      reasonMY: "မည်သည့် အထူဖြစ်စေ Friction Joint ဖြစ်場合はMill Scale (黒皮) をဖယ်ရှားရမည်။",
      memoryTipMY: "Friction Joint = Black scale ဖယ်ရှားရမည်။"
    }
  },
  {
    id: "2023-16",
    questionJP: "<ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ယာယီဂဟေဆက်ခြင်း (Tack Welding) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>低水素系<rt>ていすいそけい</rt></ruby>を <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Low-hydrogen rod を" },
      { id: 2, textJP: "(2) <ruby>治具<rt>じぐ</rt></ruby>を <ruby>用いて拘束<rt>もちいてこうそく</rt></ruby>する。", textMY: "Fixture で" },
      { id: 3, textJP: "(3) <ruby>最小長さ<rt>さいしょうながさ</rt></ruby>30mmとする。", textMY: "   " },
      { id: 4, textJP: "(4) <ruby>組立て前<rt>くみたてまえ</rt></ruby>に<ruby>矯正<rt>きょうせい</rt></ruby>を <ruby>行う<rt>おこなう</rt></ruby>。", textMY: " " },
      { id: 5, textJP: "(5) <ruby>再溶融<rt>さいようゆう</rt></ruby>されない<ruby>箇所<rt>かしょ</rt></ruby>について<ruby>行ってはならない<rt>おこなってはならない</rt></ruby>。", textMY: "について" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ယာယီဂဟေဆက်ခြင်း (Tack Welding)",
      reasonMY: "ယာယီဂဟေ (Tack weld) をအဓိကဂဟေဆက်သောအခါ အရည်ပြန်မပျော်မည့်နေရာについてမလုပ်ဆောင်ရပါ။ ထိုသို့ပြုလုပ်場合はဂဟေချို့ယွင်းချက် (Defect) ဖြစ်ပေါ်စေနိုင်သောကြောင့် အဓိကဂဟေဆက်သောအခါ ယာယီဂဟေはအရည်ပြန်ပျော်သွားစေရန် သေချာစွာ စီမံရမည်။",
      memoryTipMY: "ယာယီဂဟေはအမြဲတမ်း အဓိကဂဟေအောက်についてရှိရမည်။"
    }
  },
  {
    id: "2023-17",
    questionJP: "<ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဂဟေဆက်ခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>裏当て金<rt>うらあてがね</rt></ruby>の <ruby>片面溶接<rt>かためんようせつ</rt></ruby>は <ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "Backing metal   は" },
      { id: 2, textJP: "(2) <ruby>板厚方向<rt>いたあつほうこう</rt></ruby>は SN<ruby>材<rt>ざい</rt></ruby> C<ruby>種<rt>しゅ</rt></ruby>を <ruby>選定<rt>せんてい</rt></ruby>する。", textMY: "場合はSN-C を" },
      { id: 3, textJP: "(3) <ruby>仕口部<rt>しぐちぶ</rt></ruby>は <ruby>計画<rt>けいかく</rt></ruby>を <ruby>立てる<rt>たてる</rt></ruby>必要がある。", textMY: "Joint   " },
      { id: 4, textJP: "(4) JASS 6について<ruby>各種溶接<rt>かくしゅようせつ</rt></ruby>を<ruby>定めている<rt>さだめている</rt></ruby>。", textMY: "JASS 6 についてをは" },
      { id: 5, textJP: "(5) <ruby>全ての<rt>すべての</rt></ruby>SN, SM<ruby>材<rt>ざい</rt></ruby>の <ruby>溶接性<rt>ようせつせい</rt></ruby>は <ruby>良好<rt>りょうこう</rt></ruby>である。", textMY: "SN, SM   は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - SN とSM သံမဏိများのဂဟေဆက်နိုင်စွမ်း",
      reasonMY: "SN-A はဂဟေဆက်ရန် မဟုတ်ပါ။ ထို့ကြောင့် အားလုံးကောင်းはဆိုခြင်းမှာ မှားは။",
      memoryTipMY: "SN-A = No welding."
    }
  },
  {
    id: "2023-18",
    questionJP: "JIS <ruby>溶接技術検定試験<rt>ようせつぎじゅつけんていしけん</rt></ruby>による<ruby>資格認証<rt>しかくにんしょう</rt></ruby>で「SA-3F」および「SA-3H」を<ruby>有<rt>ゆう</rt></ruby>する<ruby>溶接技能者<rt>ようせつぎのうしゃ</rt></ruby>の<ruby>施工可能範囲<rt>せこうかのうはんい</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JIS ဂဟေဆက်ကျွမ်းကျင်မှု စာမေးပွဲအရ SA-3F とSA-3H အသိအမှတ်ပြုလက်မှတ်ရှိသူများ လုပ်ဆောင်နိုင်သော နယ်ပယ်အနက် မသင့်လျော်ဆုံးをရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク溶接<rt>ひふくあーくようせつ</rt></ruby>", textMY: "Rod " },
      { id: 2, textJP: "(2) <ruby>裏当て金有り<rt>うらあてがねあり</rt></ruby>", textMY: "Backing metal " },
      { id: 3, textJP: "(3) <ruby>板厚<rt>いたあつ</rt></ruby>6mm~50mm", textMY: "    " },
      { id: 4, textJP: "(4) <ruby>下向姿勢<rt>したむきしせい</rt></ruby>", textMY: "" },
      { id: 5, textJP: "(5) <ruby>横向姿勢<rt>よこむきしせい</rt></ruby>", textMY: "" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接資格 (Welding Qualification) のအကျုံးဝင်မှု",
      reasonMY: "SA-3F とSA-3H လက်မှတ်များはအထူ ၆ မီလီမီတာမှ ၅၀ မီလီမီတာအထိ အကျုံးဝင်はဟု ဆိုခြင်းမှာ မှားယွင်းは။ SA-3F はအထူ ၆ မီလီမီတာမှ ၁၉ မီလီမီတာအထိသာ အကျုံးဝင်ပြီး、SA-3H はအထူ ၆ မီလီမီတာမှ ၃၈ မီလီမီတာအထိသာ အကျုံးဝင်は။ ထို့ကြောင့် ၅၀ မီလီမီတာအထိ အကျုံးဝင်はဆိုခြင်းမှာ မသင့်လျော်ပါ။",
      memoryTipMY: "SA-3F/3H のအထူကန့်သတ်ချက်をသတိပြုပါ။"
    }
  },
  {
    id: "2023-19",
    questionJP: "<ruby>溶接順序<rt>ようせつじゅんじょ</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်အစီအစဉ် (Welding Sequence) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>不可能箇所<rt>ふかのうかしょ</rt></ruby>を <ruby>避ける<rt>さける</rt></ruby>。", textMY: "を" },
      { id: 2, textJP: "(2) <ruby>熱影響<rt>ねつえいきょう</rt></ruby>を <ruby>最小限<rt>さいしょうげん</rt></ruby>にする。", textMY: "を" },
      { id: 3, textJP: "(3) <ruby>全体に分散<rt>ぜんたいにぶんさん</rt></ruby>させる。", textMY: " " },
      { id: 4, textJP: "(4) <ruby>変形が小さい方<rt>へんけいちいさいほう</rt></ruby>を <ruby>先行<rt>せんこう</rt></ruby>する。", textMY: "を" },
      { id: 5, textJP: "(5) <ruby>変形<rt>へんけい</rt></ruby>を <ruby>打ち消す順序<rt>うちけすじゅんじょ</rt></ruby>とする。", textMY: "を " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဂဟေဆက်အစီအစဉ်",
      reasonMY: "ပုံပျက်မှုများသောဘက်をအရင်လုပ်မှ နောက်ပိုင်းについてပြန်ထိန်းရလွယ်は။",
      memoryTipMY: "ပုံပျက်လွယ်တာをအရင်လုပ်ပါ။"
    }
  },
  {
    id: "2023-20",
    questionJP: "<ruby>溶接施工<rt>ようせつせこう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်လုပ်ငန်း (Welding Procedure) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は <ruby>厳重<rt>げんじゅう</rt></ruby>に<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "を 検査しなければならない" },
      { id: 2, textJP: "(2) <ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>は <ruby>取り除いた後<rt>とりのぞいたあと</rt></ruby> <ruby>再開<rt>さいかい</rt></ruby>する。", textMY: "を " },
      { id: 3, textJP: "(3) -5℃~5℃は 100mmを <ruby>加熱<rt>かねつ</rt></ruby>する。", textMY: "場合は  を" },
      { id: 4, textJP: "(4) <ruby>結露<rt>けつろ</rt></ruby>は <ruby>乾燥<rt>かんそう</rt></ruby>させてから<ruby>行う<rt>おこなう</rt></ruby>。", textMY: "場合は " },
      { id: 5, textJP: "(5) <ruby>予熱温度<rt>よねつおんど</rt></ruby>は <ruby>低い方<rt>ひくいほう</rt></ruby>を <ruby>採用<rt>さいよう</rt></ruby>する。", textMY: "Preheat をが " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ကြိုတင်အပူပေးခြင်း (Preheating)",
      reasonMY: "အထူကြီးသောဘက် (အပူချိန်ပိုလိုသောဘက်) をစံထားရမည်။",
      memoryTipMY: "အပူပေးရင် အမြင့်ဆုံးをကြည့်ရမည်။"
    }
  },
  {
    id: "2023-21",
    questionJP: "<ruby>ガスシールドアーク溶接<rt>がすしーるどあーくようせつ</rt></ruby>の<ruby>施工条件<rt>せこうじょうけん</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas Shielded Arc Welding のလုပ်ငန်းအခြေအနေများとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>管理値<rt>かんりち</rt></ruby>が <ruby>定められている<rt>さだめられている</rt></ruby>。", textMY: " は" },
      { id: 2, textJP: "(2) <ruby>高強度<rt>こうきょうど</rt></ruby>の <ruby>入熱<rt>にゅうねつ</rt></ruby>は <ruby>大きく<rt>おおきく</rt></ruby>できる。", textMY: " wire  は" },
      { id: 3, textJP: "(3) <ruby>鋼板・形鋼<rt>こうはん・かたこう</rt></ruby>は <ruby>管理<rt>かんり</rt></ruby>が <ruby>厳しい<rt>きびしい</rt></ruby>。", textMY: "とshape steel について は" },
      { id: 4, textJP: "(4) <ruby>ワイヤ突き出し長さ<rt>わいやつきだしながさ</rt></ruby>を <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Wire を" },
      { id: 5, textJP: "(5) <ruby>位置<rt>いち</rt></ruby>は 10mmで<ruby>計測<rt>けいそく</rt></ruby>する。", textMY: " について" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接入熱 (Heat Input)",
      reasonMY: "ခိုင်မာမှုမြင့်သော သံမဏိများについてအပူ (Heat input) をပိုမိုကန့်သတ်ရは။",
      memoryTipMY: "ခိုင်မာမှုမြင့်ရင် အပူလျှော့ရမည်။"
    }
  },
  {
    id: "2023-22",
    questionJP: "<ruby>ロボット溶接<rt>ろぼっとようせつ</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ရုပ်ဂဟေ (Robot Welding) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>種類<rt>しゅるい</rt></ruby>と<ruby>形状<rt>けいじょう</rt></ruby>について<ruby>制限<rt>せいげん</rt></ruby>がある。", textMY: "と  は" },
      { id: 2, textJP: "(2) <ruby>組立て溶接<rt>くみたてようせつ</rt></ruby>は 1.4mm <ruby>以上<rt>いじょう</rt></ruby>を <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "を. と wire " },
      { id: 3, textJP: "(3) <ruby>固形タブ<rt>こけいたぶ</rt></ruby>を <ruby>管理<rt>かんり</rt></ruby>する。", textMY: "End tab を" },
      { id: 4, textJP: "(4) <ruby>水・油<rt>みず・あぶら</rt></ruby>を <ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "とを" },
      { id: 5, textJP: "(5) <ruby>振動<rt>しんどう</rt></ruby>が <ruby>少ない箇所<rt>すくないかしょ</rt></ruby>について<ruby>設置<rt>せっち</rt></ruby>する。", textMY: "について" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - စက်ရုပ်ဂဟေのယာယီဂဟေ (Tack Welding)",
      reasonMY: "ယာယီဂဟေအတွက် wire はအလွန်မကြီးသင့်ပါ။",
      memoryTipMY: "၁.၄ ဆိုတာ ကြီးလွန်းは။"
    }
  },
  {
    id: "2023-23",
    questionJP: "<ruby>溶接法<rt>ようせつほう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေနည်းလမ်းများ (Welding Methods) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>熱・圧力<rt>ねつ・あつりょく</rt></ruby>で<ruby>一体化<rt>いったいか</rt></ruby>する。", textMY: "/では" },
      { id: 2, textJP: "(2) <ruby>融接<rt>ゆうせつ</rt></ruby>は<ruby>冷却・凝固<rt>れいきゃく・ぎょうこ</rt></ruby>で<ruby>接合<rt>せつごう</rt></ruby>する。", textMY: "  は" },
      { id: 3, textJP: "(3) <ruby>ろう接<rt>ろうせつ</rt></ruby>は<ruby>低い金属<rt>ひくいきんぞく</rt></ruby>を<ruby>充填<rt>じゅうてん</rt></ruby>する。", textMY: "Brazing は は" },
      { id: 4, textJP: "(4) <ruby>圧接<rt>あっせつ</rt></ruby>は <ruby>機械的圧力<rt>きかいてきあつりょく</rt></ruby>を <ruby>負荷<rt>ふか</rt></ruby>する。", textMY: "Pressure welding はは" },
      { id: 5, textJP: "(5) <ruby>建築鉄骨<rt>けんちくてっこつ</rt></ruby>について3<ruby>種類全て<rt>しゅるいすべて</rt></ruby> <ruby>利用<rt>りよう</rt></ruby>する。", textMY: "について  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သံမဏိတည်ဆောက်ပုံについてအသုံးပြုသော ဂဟေနည်းလမ်းများ",
      reasonMY: "သံမဏိဘောင်についてBrazing (ろう接) をမသုံးပါ။",
      memoryTipMY: "Brazing မပါဝင်ပါ။"
    }
  },
  {
    id: "2023-24",
    questionJP: "<ruby>冷却速度<rt>れいきゃくそくど</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အအေးခံနှုန်း (Cooling Rate) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) 800℃~500℃の <ruby>時間<rt>じかん</rt></ruby>で<ruby>表す<rt>あらわす</rt></ruby>。", textMY: "    では" },
      { id: 2, textJP: "(2) <ruby>長い<rt>ながい</rt></ruby>は <ruby>強度・靭性<rt>きょうど・じんせい</rt></ruby>が <ruby>低下<rt>ていか</rt></ruby>する。", textMY: "場合は は" },
      { id: 3, textJP: "(3) <ruby>短い<rt>みじかい</rt></ruby>は <ruby>硬化<rt>こうか</rt></ruby>し<ruby>割れ<rt>われ</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>する。", textMY: "場合は は" },
      { id: 4, textJP: "(4) <ruby>入熱<rt>にゅうねつ</rt></ruby>が <ruby>大きい<rt>おおきい</rt></ruby>は <ruby>速く<rt>はやく</rt></ruby>なる。", textMY: " は" },
      { id: 5, textJP: "(5) <ruby>入熱<rt>にゅうねつ</rt></ruby>は <ruby>速度<rt>そくど</rt></ruby>に<ruby>反比例<rt>はんぴれい</rt></ruby>する。", textMY: "はとは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - အအေးခံနှုန်းとHeat Input",
      reasonMY: "အပူများများပေးလေ အေးရန် ပိုကြာလေ (အအေးနှေးလေ) ဖြစ်は။",
      memoryTipMY: "အပူများရင် အအေးနှေးは။"
    }
  },
  {
    id: "2023-25",
    questionJP: "<ruby>溶接法<rt>ようせつほう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နည်း (Welding Method) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>被覆アーク<rt>ひふくあーく</rt></ruby>は <ruby>溶極式<rt>ようきょくしき</rt></ruby>である。", textMY: "SMAW はelectrode は" },
      { id: 2, textJP: "(2) <ruby>ガスシールド<rt>がすしーるど</rt></ruby>は <ruby>溶着速度<rt>ようちゃくそくど</rt></ruby>が <ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Gas welding は は" },
      { id: 3, textJP: "(3) <ruby>フラックスワイヤ<rt>ふらっくすわいや</rt></ruby>は <ruby>速度<rt>そくど</rt></ruby>が <ruby>大きい<rt>おおきい</rt></ruby>。", textMY: "Flux wire が は" },
      { id: 4, textJP: "(4) <ruby>サブマージ<rt>さぶまーじ</rt></ruby>は <ruby>発生ガス<rt>はっせいがす</rt></ruby>でシールドする。", textMY: "SAW はgas では" },
      { id: 5, textJP: "(5) <ruby>エレクトロスラグ<rt>えれくとろすらぐ</rt></ruby>は <ruby>角溶接<rt>すみようせつ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "ESW を は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - サブマージアーク溶接 (Submerged Arc Welding)",
      reasonMY: "SAW はflux အမှုန့်များ (Slag) でကာကွယ်ခြင်းဖြစ်は။ Gas でမဟုတ်ပါ။",
      memoryTipMY: "SAW = Slag shield."
    }
  },
  {
    id: "2023-26",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>組織<rt>そしき</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာのဖွဲ့စည်းပုံ (Microstructure) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接金属<rt>ようせつきんぞく</rt></ruby>は<ruby>移行金属<rt>いこうきんぞく</rt></ruby>と<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>凝固<rt>ぎょうこ</rt></ruby>は。", textMY: "Weld metal はwire とbase metal  は" },
      { id: 2, textJP: "(2) <ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>は<ruby>成分<rt>せいぶん</rt></ruby>と<ruby>速度<rt>そくど</rt></ruby>で<ruby>決まる<rt>きまる</rt></ruby>。", textMY: "をとでは" },
      { id: 3, textJP: "(3) HAZは<ruby>部位<rt>ぶい</rt></ruby>によって<ruby>組織<rt>そしき</rt></ruby>が <ruby>異なる<rt>ことなる</rt></ruby>。", textMY: "HAZ のは は" },
      { id: 4, textJP: "(4) <ruby>硬さ<rt>かたさ</rt></ruby> <ruby>変化<rt>へんか</rt></ruby>する。", textMY: " は" },
      { id: 5, textJP: "(5) PCMは <ruby>炭素含有量<rt>たんそがんゆうりょう</rt></ruby>の <ruby>指標<rt>しひょう</rt></ruby>である。", textMY: "PCM はは" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶接金属 (Weld Metal) のဖွဲ့စည်းပုံ",
      reasonMY: "溶接金属 (Weld metal) は移行金属 (filler metal) と母材 (base metal) တို့ အရည်ပျော်ရောနှောပြီး 凝固 (solidification) ဖြစ်ပေါ်လာခြင်းဖြစ်は။ ဤဖော်ပြချက်はWeld metal のဖွဲ့စည်းပုံ (組織) をအပြည့်အစုံ ဖော်ပြခြင်းမဟုတ်ဘဲ ၎င်းのမူလရင်းမြစ်をသာ ဖော်ပြနေသောကြောင့် မသင့်လျော်ဆုံးဖြစ်は။ Weld metal のဖွဲ့စည်းပုံはအအေးခံနှုန်းとအခြားအချက်များစွာပေါ် မူတည်は။",
      memoryTipMY: "Weld metal のဖွဲ့စည်းပုံは၎င်းのမူလရင်းမြစ်ထက် ပိုမိုရှုပ်ထွေးは။"
    }
  },
  {
    id: "2023-27",
    questionJP: "<ruby>溶接変形<rt>ようせつへんけい</rt></ruby>への<ruby>対応<rt>たいおう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းကြောင့် ပုံပျက်ခြင်း (Welding Deformation) をပြန်လည်ပြုပြင်ခြင်းとပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>角変形<rt>かくへんけい</rt></ruby>は <ruby>逆ひずみ法<rt>ぎゃくひずみほう</rt></ruby>がある。", textMY: " presetting は" },
      { id: 2, textJP: "(2) <ruby>横収縮<rt>よこしゅうしゅく</rt></ruby>は <ruby>対応<rt>たいおう</rt></ruby>が <ruby>行われていない<rt>おこなわれていない</rt></ruby>。", textMY: "を" },
      { id: 3, textJP: "(3) <ruby>座屈変形<rt>ざくつへんけい</rt></ruby>は <ruby>順序<rt>じゅんじょ</rt></ruby>が <ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "Buckling   は" },
      { id: 4, textJP: "(4) <ruby>縦曲り<rt>たてまがり</rt></ruby>は <ruby>対称配置<rt>たいしょうはいち</rt></ruby>とする。", textMY: "を " },
      { id: 5, textJP: "(5) <ruby>回転変形<rt>かいてんへんけい</rt></ruby>は <ruby>拘束<rt>こうそく</rt></ruby>が <ruby>利用<rt>りよう</rt></ruby>できない。", textMY: "を " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ဂဟေဆက်ခြင်းကြောင့် လည်ပတ်ပုံပျက်ခြင်း (Rotational Distortion)",
      reasonMY: "မည်သည့် ပုံပျက်ခြင်းをမဆို fixture များでထိန်းချုပ်၍ ရနိုင်は။",
      memoryTipMY: "အားလုံး ထိန်းချုပ်၍ ရは။"
    }
  },
  {
    id: "2023-28",
    questionJP: "<ruby>溶融亜鉛めっき<rt>ようゆうあえんめっき</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပူပြင်းသောသွပ်ရည်စိမ်ခြင်း (Hot-dip Galvanizing) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>合金層<rt>ごうきんそう</rt></ruby>を <ruby>形成<rt>けいせい</rt></ruby>する。", textMY: "Alloy layer をは" },
      { id: 2, textJP: "(2) <ruby>変形・割れ<rt>へんけい・われ</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "/を" },
      { id: 3, textJP: "(3) <ruby>設計段階<rt>せっけいだんかい</rt></ruby>について<ruby>防止<rt>ぼうし</rt></ruby>できる。", textMY: "が は" },
      { id: 4, textJP: "(4) HDZT 77は<ruby>付着量<rt>ふちゃくりょう</rt></ruby>である。", textMY: "HDZT 77 は coating は" },
      { id: 5, textJP: "(5) <ruby>温度<rt>おんど</rt></ruby>は 450℃<ruby>前後<rt>ぜんご</rt></ruby>である。", textMY: "  は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶融亜鉛めっき (Hot-dip Galvanizing) のသတ်မှတ်ချက်",
      reasonMY: "HDZT 77 ဆိုသော အခေါ်အဝေါ် မရှိပါ။ HDZ 55 (550g/m²) သာ ရှိは။",
      memoryTipMY: "HDZ 55 をမှတ်ထားပါ။"
    }
  },
  {
    id: "2023-29",
    questionJP: "<ruby>塗装作業<rt>とそうさぎょう</rt></ruby>に関する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最も<rt>もっと</rt></ruby><ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆေးသုတ်ခြင်းလုပ်ငန်း (Painting Work) とပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>粘度が高い<rt>ねんどがたかい</rt></ruby>は <ruby>たれ<rt>たれ</rt></ruby>が <ruby>生じる<rt>しょうじる</rt></ruby>。", textMY: " は" },
      { id: 2, textJP: "(2) <ruby>厚塗り<rt>あつぬり</rt></ruby>を <ruby>避ける<rt>さける</rt></ruby>。", textMY: "を" },
      { id: 3, textJP: "(3) <ruby>はけ・吹付け<rt>はけ・ふきつけ</rt></ruby>がある。", textMY: "Brush とSpray  は" },
      { id: 4, textJP: "(4) 5℃<ruby>以下<rt>いか</rt></ruby>は <ruby>避ける<rt>さける</rt></ruby>。", textMY: "  " },
      { id: 5, textJP: "(5) <ruby>溶接部<rt>ようせつぶ</rt></ruby>100mmは <ruby>塗装しない<rt>とそうしない</rt></ruby>。", textMY: "  について " }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "ဆေးကျဲလွန်းမှသာ ဆေးသားစီးကျခြင်း (たれ) ဖြစ်ပေါ်は။",
      memoryTipMY: "ပျစ်ရင် မစီးကျပါ။"
    }
  },
  {
    id: "2023-30",
    questionJP: "<ruby>品質保証<rt>ひんしつほしょう</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "QA についてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>施工者<rt>せこうしゃ</rt></ruby>が <ruby>保証<rt>ほしょう</rt></ruby>する。", textMY: "が " },
      { id: 2, textJP: "(2) <ruby>法律<rt>ほうりつ</rt></ruby>は <ruby>最低要求<rt>さいていようきゅう</rt></ruby>である。", textMY: "はは" },
      { id: 3, textJP: "(3) <ruby>マネジメントの成果物<rt>まねじめんとのせいかぶつ</rt></ruby>である。", textMY: "のは" },
      { id: 4, textJP: "(4) <ruby>生産者都合<rt>せいさんしゃつごう</rt></ruby>について<ruby>設定しない<rt>せっていしない</rt></ruby>。", textMY: " " },
      { id: 5, textJP: "(5) <ruby>設計者<rt>せっけいしゃ</rt></ruby>が <ruby>保証<rt>ほしょう</rt></ruby>する。", textMY: "が " }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "အဖြေလွှာအရ (5) ဖြစ်は။",
      memoryTipMY: "အရည်အသွေးအာမခံချက်はထုတ်လုပ်သူ/တည်ဆောက်သူအပေါ် မူတည်は။"
    }
  },
  {
    id: "2023-31",
    questionJP: "<ruby>抜取検査<rt>ぬきとりけんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "နမူနာစစ်ဆေးခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>規準型<rt>きじゅんがた</rt></ruby>は <ruby>危険を一定<rt>きけんをいってい</rt></ruby>にする。", textMY: "Standard type はをは" },
      { id: 2, textJP: "(2) <ruby>調整型<rt>ちょうせいがた</rt></ruby>は <ruby>選択<rt>せんたく</rt></ruby>できる。", textMY: "Adjusted type をは" },
      { id: 3, textJP: "(3) <ruby>選別型<rt>せんべつがた</rt></ruby>は<ruby>不良率<rt>ふりょうりつ</rt></ruby>をAOQL <ruby>呼ぶ<rt>よぶ</rt></ruby>。", textMY: "Screening type のをAOQL  は" },
      { id: 4, textJP: "(4) 4<ruby>種類<rt>しゅるい</rt></ruby>は", textMY: "  は" },
      { id: 5, textJP: "(5) <ruby>計数値と計量値<rt>けいすうちとけいりょうち</rt></ruby>がある。", textMY: "と は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "AOQL はအမှားနှုန်းမဟုတ်ဘဲ、အာမခံနိုင်သော အမြင့်ဆုံး အမှားကန့်သတ်ချက်ဖြစ်は။",
      memoryTipMY: "AOQL = Limit."
    }
  },
  {
    id: "2023-32",
    questionJP: "<ruby>品質管理<rt>ひんしつかんり</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "QC についてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>生産者体系活動<rt>せいさんしゃたいけいかつどう</rt></ruby>である。", textMY: "の は" },
      { id: 2, textJP: "(2) <ruby>各部門連携<rt>かくぶもんれんけい</rt></ruby>しなければならない。", textMY: " " },
      { id: 3, textJP: "(3) QC<ruby>工程表<rt>こうていひょう</rt></ruby>は<ruby>体系化<rt>たいけいか</rt></ruby>は", textMY: "QC table は は" },
      { id: 4, textJP: "(4) 4Mは<ruby>人・物・機・法<rt>ひと・もの・き・ほう</rt></ruby>である。", textMY: "4M  、、、 は" },
      { id: 5, textJP: "(5) <ruby>役割明確組織<rt>やくわりめいかくそしき</rt></ruby>である。", textMY: "  は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "အဖြေလွှာအရ (5) ဖြစ်は။",
      memoryTipMY: "QC はလူတိုင်းပါဝင်ရမည့်အရာဖြစ်は။"
    }
  },
  {
    id: "2023-33",
    questionJP: "<ruby>流通経路<rt>りゅうつうけいろ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဖြန့်ဖြူးရေးလမ်းကြောင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>多くの企業が介在<rt>おおくのきぎょうがかいざい</rt></ruby>する。", textMY: " は" },
      { id: 2, textJP: "(2) <ruby>中間部品<rt>ちゅうかんぶひん</rt></ruby>として<ruby>納入<rt>のうにゅう</rt></ruby>する。", textMY: " は" },
      { id: 3, textJP: "(3) <ruby>支給品<rt>しきゅうひん</rt></ruby> <ruby>含まれる<rt>ふくまれる</rt></ruby>。", textMY: " は" },
      { id: 4, textJP: "(4) <ruby>全体で組織的管理<rt>ぜんたいでそしきてきかんり</rt></ruby>しなければならない。", textMY: "  " },
      { id: 5, textJP: "(5) <ruby>裏書き<rt>うらがき</rt></ruby>は<ruby>原品証明<rt>げんぴんしょうめい</rt></ruby>である。", textMY: "Endorsement はは" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Mill Sheet",
      reasonMY: "မူရင်းလက်မှတ် (Mill Sheet) はထုတ်လုပ်သည့် စက်ရုံမှ တိုက်ရိုက် ထုတ်ပေးသောအရာ ဖြစ်は။",
      memoryTipMY: "Mill Sheet ကသာ မူရင်းဖြစ်は။"
    }
  },
  {
    id: "2023-34",
    questionJP: "<ruby>受入検査<rt>うけいれけんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လက်ခံစစ်ဆေးခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>は <ruby>特記<rt>とっき</rt></ruby>による。", textMY: " Spec  は" },
      { id: 2, textJP: "(2) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>は <ruby>成績表<rt>せいせきひょう</rt></ruby>である。", textMY: " は" },
      { id: 3, textJP: "(3) <ruby>種類<rt>しゅるい</rt></ruby>は <ruby>特記<rt>とっき</rt></ruby>による。", textMY: " Spec  は" },
      { id: 4, textJP: "(4) <ruby>不合格<rt>ふごうかく</rt></ruby>は <ruby>直ちに不合格<rt>ただちにふごうかく</rt></ruby>とする。", textMY: "場合は は " },
      { id: 5, textJP: "(5) <ruby>不適合<rt>ふてきごう</rt></ruby>は <ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "を場合は検査しなければならない" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "အဖြေလွှာအရ (4) ဖြစ်は။",
      memoryTipMY: "စစ်ဆေးမှုအဆင့်ဆင့်をလိုက်နာရမည်။"
    }
  },
  {
    id: "2023-35",
    questionJP: "<ruby>製品検査<rt>せいひんけんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်ကုန်စစ်ဆေးမှုについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>取合部<rt>とりあいぶ</rt></ruby>は<ruby>全箇所<rt>ぜんかしょ</rt></ruby>検査しなければならない", textMY: " 検査しなければならない" },
      { id: 2, textJP: "(2) <ruby>摩擦面<rt>まさつめん</rt></ruby>を<ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "を検査しなければならない" },
      { id: 3, textJP: "(3) <ruby>開先形状<rt>かいさきけいじょう</rt></ruby>を <ruby>検査<rt>けんさ</rt></ruby>する。", textMY: "Bevel を検査しなければならない" },
      { id: 4, textJP: "(4) <ruby>外観<rt>がいかん</rt></ruby>は <ruby>目視のみ<rt>もくしのみ</rt></ruby>である。", textMY: "をで " },
      { id: 5, textJP: "(5) <ruby>きず<rt>きず</rt></ruby>は3<ruby>種類<rt>しゅるい</rt></ruby>は", textMY: "   は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Gauge",
      reasonMY: "အပြင်ပန်းစစ်ဆေးခြင်းについてတိုင်းတာရေးကိရိယာများ (Gauge) ပါ သုံးရမည်။",
      memoryTipMY: "မျက်စိအပြင် ကိရိယာပါ သုံးရは။"
    }
  },
  {
    id: "2023-36",
    questionJP: "<ruby>許容差<rt>きょようさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ခွင့်ပြုလွဲချော်မှုについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>は <ruby>合否判定<rt>ごうひはんてい</rt></ruby>である。", textMY: "Limit tolerance は/ は" },
      { id: 2, textJP: "(2) <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>は <ruby>目標値<rt>もくひょうち</rt></ruby>である。", textMY: "Management tolerance はは" },
      { id: 3, textJP: "(3) <ruby>超えた<rt>こえた</rt></ruby>は <ruby>再製作<rt>さいせいさく</rt></ruby>とする。", textMY: "場合は" },
      { id: 4, textJP: "(4) <ruby>マイナス誤差<rt>まいなすごさ</rt></ruby>は <ruby>修正不要<rt>しゅうせいふよう</rt></ruby>である。", textMY: " " },
      { id: 5, textJP: "(5) <ruby>補修<rt>ほしゅう</rt></ruby>で<ruby>対処<rt>たいしょ</rt></ruby>できる。", textMY: "では" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "အနှုတ်ဘက်လွဲချော်မှု (သေးနေခြင်း) はခံနိုင်ရည်をလျော့ကျစေသောကြောင့် ပြင်ဆင်ရန် လိုအပ်は။",
      memoryTipMY: "သေးနေရင် ပြင်ရမည်။"
    }
  },
  {
    id: "2023-37",
    questionJP: "<ruby>受入検査<rt>うけいれけんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လက်ခံစစ်ဆေးခြင်းについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>書類検査<rt>しょるいけんさ</rt></ruby>は <ruby>両方<rt>りょうほう</rt></ruby>を <ruby>基準<rt>きじゅん</rt></ruby>とする。", textMY: "  は" },
      { id: 2, textJP: "(2) 7<ruby>項目<rt>こうもく</rt></ruby>は <ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "   は" },
      { id: 3, textJP: "(3) <ruby>対物検査<rt>たいぶつけんさ</rt></ruby>は <ruby>確認<rt>かくにん</rt></ruby>である。", textMY: " は" },
      { id: 4, textJP: "(4) <ruby>対物1<rt>たいぶついち</rt></ruby>は <ruby>管理許容差<rt>かんりきょようさ</rt></ruby>である。", textMY: "Object 1 はmanagement tolerance は" },
      { id: 5, textJP: "(5) <ruby>対物2<rt>たいぶつに</rt></ruby>は <ruby>統計的手法<rt>とうけいてきしゅほう</rt></ruby>である。", textMY: "Object 2 はは" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "Object 1 စစ်ဆေးမှုはအောင်/ရှုံးအတွက် Limit Tolerance (限界許容差) をသုံးရမည်။",
      memoryTipMY: "စစ်ဆေးလျှင် 限界 をသုံးရမည်။"
    }
  },
  {
    id: "2023-38",
    questionJP: "<ruby>管理技術者<rt>かんりぎじゅつしゃ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စီမံခန့်ခွဲသူのတာဝန်についてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>原因追求<rt>げんいんついきゅう</rt></ruby>と<ruby>処置<rt>しょち</rt></ruby>を <ruby>検討<rt>けんとう</rt></ruby>する。", textMY: " " },
      { id: 2, textJP: "(2) <ruby>マニュアル反映<rt>まにゅあるはんえい</rt></ruby>と<ruby>防止<rt>ぼうし</rt></ruby>を<ruby>行なう<rt>おこなう</rt></ruby>。", textMY: "について " },
      { id: 3, textJP: "(3) <ruby>迅速報告<rt>じんそくほうこく</rt></ruby>", textMY: " " },
      { id: 4, textJP: "(4) 4Mは <ruby>情報管理より重要<rt>じょうほうかんりよりじゅうよう</rt></ruby>である。", textMY: "4M が  は" },
      { id: 5, textJP: "(5) <ruby>手戻り防止<rt>てもどりぼうし</rt></ruby>に<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: " は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "နှစ်ခုစလုံးはတန်းတူ အရေးကြီးပါは။",
      memoryTipMY: "နှစ်ခုစလုံး အရေးကြီးは။"
    }
  },
  {
    id: "2023-39",
    questionJP: "<ruby>溶接部品質管理<rt>ようせつぶひんしつかんり</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေအရည်အသွေးစီမံမှုについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>適切組合せ<rt>てきせつくみあわせ</rt></ruby>で<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "  " },
      { id: 2, textJP: "(2) <ruby>破断しないこと<rt>はだんしないこと</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: " は" },
      { id: 3, textJP: "(3) <ruby>社内全数検査<rt>しゃないぜんすうけんさ</rt></ruby>を <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "について 検査しなければならない" },
      { id: 4, textJP: "(4) <ruby>隅肉<rt>すみにく</rt></ruby>は UTを <ruby>行う<rt>おこなう</rt></ruby>。", textMY: "Fillet weld をUT 検査しなければならない" },
      { id: 5, textJP: "(5) <ruby>改善記録<rt>かいぜんきろく</rt></ruby>を <ruby>とる<rt>とる</rt></ruby>。", textMY: " " }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "Fillet weld အတွက် UT はမလိုအပ်သလို စစ်ရန်လည်း ခက်ခဲは။",
      memoryTipMY: "Fillet = No UT."
    }
  },
  {
    id: "2023-40",
    questionJP: "<ruby>溶接検査技術者<rt>ようせつけんさぎじゅつしゃ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေစစ်ဆေးသူについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>知識・経験<rt>ちしき・けいけん</rt></ruby>が <ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "と は" },
      { id: 2, textJP: "(2) 1~3<ruby>レベル<rt>れべる</rt></ruby>がある。", textMY: "     は" },
      { id: 3, textJP: "(3) <ruby>受入<rt>うけいれ</rt></ruby>は <ruby>レベル1<rt>れべるわん</rt></ruby>が <ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "   は" },
      { id: 4, textJP: "(4) <ruby>認定資格<rt>にんていしかく</rt></ruby>がある。", textMY: " は" },
      { id: 5, textJP: "(5) <ruby>製品検査技術者<rt>せいひんけんさぎじゅつしゃ</rt></ruby>が <ruby>従事<rt>じゅうじ</rt></ruby>する。", textMY: "が は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "စစ်ဆေးမှုလုပ်ရန် အနည်းဆုံး အဆင့် ၂ (Level 2) လိုအပ်は။",
      memoryTipMY: "Level 2 is required."
    }
  },
  {
    id: "2023-41",
    questionJP: "<ruby>スタッド検査<rt>すたっどけんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Stud (စတပ်) ဂဟေဆက်ခြင်းအား စစ်ဆေးရာについてမှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>全周形成<rt>ぜんしゅうけいせい</rt></ruby>を <ruby>目視<rt>もくし</rt></ruby>する。", textMY: "について をで" },
      { id: 2, textJP: "(2) <ruby>高さ<rt>たかさ</rt></ruby>は 1<ruby>ロット<rt>ろっと</rt></ruby> 3<ruby>本<rt>ほん</rt></ruby>とする。", textMY: "と (Inclination) をLot   では" },
      { id: 3, textJP: "(3) <ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>による。", textMY: "をLimit tolerance (限界許容差)  は" },
      { id: 4, textJP: "(4) <ruby>打撃曲げ<rt>だげきまげ</rt></ruby>は 1<ruby>ロット<rt>ろっと</rt></ruby> 1<ruby>本<rt>ほん</rt></ruby>とする。", textMY: " (打撃曲げ検査) をLot   で は" },
      { id: 5, textJP: "(5) 30°で<ruby>合格<rt>ごうかく</rt></ruby>とする。", textMY: "Stud を    場合はは は" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Stud ရိုက်ကွေးစစ်ဆေးမှု (Bending test)",
      reasonMY: "ယေဘုယျအားでStud ဂဟေဆက်ခြင်းのအစွမ်းသတ္တိをစစ်ဆေးရာについて၃၀ ဒီဂရီအထိ မဟုတ်ဘဲ ၁၅ ဒီဂရီ (15°) သာ ကွေးညွှတ်၍ စစ်ဆေးရန် သတ်မှတ်ထားပါは။",
      memoryTipMY: "Stud Bending = 15° သာ ကွေးရမည်။"
    }
  },
  {
    id: "2023-42",
    questionJP: "JASS 6の<ruby>製品検査<rt>せいひんけんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ ထုတ်ကုန်အရည်အသွေး စစ်ဆေးခြင်း (製品検査) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鉄骨製作者<rt>てっこつせいさくしゃ</rt></ruby>が <ruby>実施<rt>じっし</rt></ruby>する。", textMY: " (Fabricator / 製作者) が  " },
      { id: 2, textJP: "(2) <ruby>施工者<rt>せこうしゃ</rt></ruby>が <ruby>実施<rt>じっし</rt></ruby>する。", textMY: " /  (施工者) が  " },
      { id: 3, textJP: "(3) <ruby>出荷前最終検査<rt>しゅっかまえさいしゅうけんさ</rt></ruby>である。", textMY: "     (Final Inspection) は" },
      { id: 4, textJP: "(4) <ruby>合格後<rt>ごうかくご</rt></ruby>に<ruby>出荷<rt>しゅっか</rt></ruby>する。", textMY: "   (出荷) をは" },
      { id: 5, textJP: "(5) <ruby>不適合<rt>ふてきごう</rt></ruby>は <ruby>手直し<rt>てなおし</rt></ruby>する。", textMY: "についてを場合は  (手直し) " }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製品検査 vs 受入検査",
      reasonMY: "製品検査 (ထုတ်ကုန်စစ်ဆေးမှု) はထုတ်လုပ်သူ (製作者) ဘက်မှ တာဝန်ယူလုပ်ဆောင်ရသော စစ်ဆေးမှုဖြစ်は။ တည်ဆောက်သူ (施工者) ဘက်မှ လုပ်ဆောင်ရသည့် စစ်ဆေးမှုမှာ 受入検査 (အလုပ်ခွင်ဝယ်လက်ခံခြင်း) အပိုင်းဖြစ်は။",
      memoryTipMY: "製作者 (Fabricator) = 製品検査 (စက်ရုံစစ်ဆေးမှု), 施工者 (Constructor/Client) = 受入検査 (လက်ခံစစ်ဆေးမှု)"
    }
  },
  {
    id: "2023-43",
    questionJP: "<ruby>非破壊試験<rt>ひはかいしけん</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဖျက်အဆီးကင်း စစ်ဆေးမှု (NDT) များとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>放射線<rt>ほうしゃせん</rt></ruby>は <ruby>内部欠陥<rt>ないぶけっかん</rt></ruby>である。", textMY: "Radiographic Testing (RT) はについてをでについては" },
      { id: 2, textJP: "(2) <ruby>超音波<rt>ちょうおんぱ</rt></ruby>は <ruby>反射波<rt>はんしゃは</rt></ruby>である。", textMY: "Ultrasonic Testing (UT) はの (Reflection/Echo) を は" },
      { id: 3, textJP: "(3) <ruby>垂直探傷<rt>すいちょくたんしょう</rt></ruby>は <ruby>ラミネーション<rt>らみねーしょん</rt></ruby>である。", textMY: "Straight beam UT (垂直探傷) は Lamination については" },
      { id: 4, textJP: "(4) <ruby>浸透<rt>しんとう</rt></ruby>は <ruby>高電圧<rt>こうでんあつ</rt></ruby>である。", textMY: "Penetrant Testing (PT/浸透探傷) は  (High voltage) を は" },
      { id: 5, textJP: "(5) <ruby>磁粉<rt>じふん</rt></ruby>は<ruby>磁束平行<rt>じそくへいこう</rt></ruby>について<ruby>困難<rt>こんなん</rt></ruby>である。", textMY: "Magnetic Particle Testing (MT) はと 場合はを は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 浸透探傷 (Penetrant Testing)",
      reasonMY: "PT (စိမ့်ဝင်စစ်ဆေးနည်း) はဆေးရည်များ (Penetrant / Developer) をသာ အသုံးပြု၍ မျက်နှာပြင်ရှိ အက်ကွဲကြောင်းများをရှာဖွေသောနည်းဖြစ်は။ လျှပ်စစ်ဗို့အား လုံးဝမလိုအပ်ပါ။",
      memoryTipMY: "PT ဆိုတာ ဆေးရည်ဖြန်းပြီး စစ်တာ、ဗို့အားမလိုဘူး။"
    }
  },
  {
    id: "2023-44",
    questionJP: "UT<ruby>検査<rt>けんさ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Ultrasonic Testing (UT) でစစ်ဆေးခြင်းとပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>すべて<rt>すべて</rt></ruby>を <ruby>検査対象<rt>けんさたいしょう</rt></ruby>とする。", textMY: "  (すべて) を  " },
      { id: 2, textJP: "(2) 6mm<ruby>未満<rt>みまん</rt></ruby>は <ruby>適用しない<rt>てきようしない</rt></ruby>。", textMY: " 6mm 場合はUT を" },
      { id: 3, textJP: "(3) <ruby>屈折角<rt>くっせつかく</rt></ruby>は 70°<ruby>のみ<rt>のみ</rt></ruby>とする。", textMY: "Angle beam UT について  (屈折角) を  (70°) で " },
      { id: 4, textJP: "(4) <ruby>グリセリン<rt>ぐりせりん</rt></ruby>を <ruby>使用<rt>しよう</rt></ruby>する。", textMY: "UT について  (Glycerin)   をは" },
      { id: 5, textJP: "(5) <ruby>一探触子法<rt>いったんしょくしほう</rt></ruby>は <ruby>平板<rt>へいばん</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "Probe  (One-probe method / 一探触子法) は (Flat Plate) をについては" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - UT の屈折角 (အသံလှိုင်းထောင့်များ)",
      reasonMY: "UT についてသံပြားのအထူとအနေအထားအပေါ်မူတည်၍ ၄၅ ဒီဂရီ、၆၀ ဒီဂရီ と၇၀ ဒီဂရီ စသည့် ထောင့်အမျိုးမျိုးをရွေးချယ်အသုံးပြုနိုင်は။ '၇၀ ဒီဂရီသာဖြစ်ရမည်' ဆိုခြင်းမှာ မှားယွင်းは။",
      memoryTipMY: "UT についてထောင့်အမျိုးမျိုး (45°, 60°, 70°) ရှိပါは။"
    }
  },
  {
    id: "2023-45",
    questionJP: "<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဘေးအန္တရာယ်ကင်းရှင်းရေးとကျန်းမာရေး (Safety and Health) ကိစ္စရပ်များについてမှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>快適環境形成<rt>かいてきかんきょうけいせい</rt></ruby>を <ruby>目的<rt>もくてき</rt></ruby>とする。", textMY: "についてとと をは" },
      { id: 2, textJP: "(2) <ruby>監督官<rt>かんとくかん</rt></ruby>は <ruby>是正勧告<rt>ぜせいかんこく</rt></ruby>を <ruby>行う<rt>おこなう</rt></ruby>。", textMY: " (監督官) は を (是正勧告) は" },
      { id: 3, textJP: "(3) <ruby>ロボット教示<rt>ろぼっときょうじ</rt></ruby>は <ruby>作業主任者<rt>しゅにんしゃ</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: " (ロボット教示)   (作業主任者)  は" },
      { id: 4, textJP: "(4) <ruby>重大災害<rt>じゅうだいさいがい</rt></ruby>は 3<ruby>人以上<rt>にんいじょう</rt></ruby>である。", textMY: "について  と 場合は (重大災害)  は" },
      { id: 5, textJP: "(5) <ruby>度数率<rt>どすうりつ</rt></ruby>は 100<ruby>万時間<rt>まんじかん</rt></ruby>である。", textMY: " (Frequency Rate) をについて    はをは" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 作業主任者 vs 特別教育",
      reasonMY: "စက်မှုသုံးစက်ရုပ်များ (Industrial robots) とပတ်သက်၍ အထူးပညာပေး (特別教育) အောင်မြင်ထားသူများ လုပ်をင်နိုင်ပြီး ဥပဒေအရ '作業主任者' (တာဝန်ခံကြီးကြပ်သူ) အဖြစ် တရားဝင်ခန့်အပ်သူ မလိုပါ။",
      memoryTipMY: "စက်ရုပ် (Robot) = 特別教育 (Special Education) でရは။"
    }
  },
  {
    id: "2023-46",
    questionJP: "<ruby>機械安全<rt>きかいあんぜん</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "စက်ပစ္စည်းဆိုင်ရာ ဘေးကင်းရေး (Machine Safety) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>砥石角度<rt>といしかくど</rt></ruby>は 45°~60°とする。", textMY: "Bench grinder の (砥石角度) はで    について" },
      { id: 2, textJP: "(2) <ruby>取替え<rt>とりかえ</rt></ruby>は <ruby>特別教育修了者<rt>とくべつきょういくしゅうりょうしゃ</rt></ruby>が <ruby>行う<rt>おこなう</rt></ruby>。", textMY: " (砥石) / を (特別教育)  " },
      { id: 3, textJP: "(3) <ruby>加工機<rt>かこうき</rt></ruby>は <ruby>進行ゆっくり<rt>しんこうゆっくり</rt></ruby>とする。", textMY: " (加工機) についてを  は" },
      { id: 4, textJP: "(4) <ruby>ボール盤<rt>ぼーるばん</rt></ruby>は <ruby>手袋使用<rt>てぶくろしよう</rt></ruby>できる。", textMY: " /  (ボール盤 / Drilling machine) をについて (Gloves) は" },
      { id: 5, textJP: "(5) <ruby>不安全行動<rt>ふあんぜんこうどう</rt></ruby>は <ruby>起因<rt>きいん</rt></ruby>である。", textMY: "のを (Unsafe acts) はの は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ボール盤と手袋 (Drilling machine とလက်အိတ်)",
      reasonMY: "လွန်ပြီးစက် (Drilling Machine / ボール盤) ကဲ့သို့သော လည်ပတ်နေသည့်စက်ပစ္စည်းများをအသုံးပြုရာについてလက်အိတ်はစက်とညပ်ပြီး ပါသွားတတ်သでလက်အိတ်ဝတ်ဆင်ခြင်းをလုံးဝတားမြစ်ထားပါは။",
      memoryTipMY: "လည်နေသောစက် (Drilling) についてလက်အိတ် လုံးဝ (လုံးဝ) မဝတ်ရပါ။"
    }
  },
  {
    id: "2023-47",
    questionJP: "<ruby>玉掛用具<rt>たまかけようぐ</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဝန်ချည်နှောင်ခြင်းとကရိန်းကြိုးများ (Slinging gears / 玉掛用具) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>き裂<rt>きれつ</rt></ruby>は<ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "、について (Crack) 場合は " },
      { id: 2, textJP: "(2) <ruby>安全係数<rt>あんぜんけいすう</rt></ruby>は 6<ruby>以上<rt>いじょう</rt></ruby>である。", textMY: "Cable のSafety factor () は  と " },
      { id: 3, textJP: "(3) <ruby>減少<rt>げんしょう</rt></ruby>10%は <ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: "の (Diameter)  % 場合は" },
      { id: 4, textJP: "(4) 1<ruby>トン以上<rt>いじょう</rt></ruby>は <ruby>特別教育<rt>とくべつきょういく</rt></ruby>である。", textMY: "  と  をについて (特別教育) では" },
      { id: 5, textJP: "(5) 7%<ruby>切断<rt>せつだん</rt></ruby>は <ruby>使用不可<rt>しようふか</rt></ruby>である。", textMY: " % 場合は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 技能講習 (Skill Training) လိုအပ်မှု",
      reasonMY: "ချည်နှောင်မည့် ဝန်အလေးချိန် ၁ တန်とအထက် (1トン以上) ရှိ場合はနိုင်ငံတော်အသိအမှတ်ပြု 'ကျွမ်းကျင်မှုသင်တန်း (技能講習)' をအောင်မြင်ထားရန် လိုအပ်ပါは။ 特別教育 でမလုံလောက်ပါ။",
      memoryTipMY: "၁ တန် とအထက် = 技能講習 (Skill Training)!"
    }
  },
  {
    id: "2023-48",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေ (建築基準法) とပတ်သက်၍ မှားယွင်းသောအချက်をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>指定機関確認<rt>していきかんかくにん</rt></ruby>は <ruby>建築主事<rt>しゅじ</rt></ruby>とみなす。", textMY: "が  (指定機関) のを (建築主事) の は" },
      { id: 2, textJP: "(2) <ruby>申請書<rt>しんせいしょ</rt></ruby>は 4<ruby>日以内<rt>にちいない</rt></ruby>とする。", textMY: " と  について では" },
      { id: 3, textJP: "(3) RC<ruby>造<rt>ぞう</rt></ruby>は <ruby>中間検査対象外<rt>ちゅうかんけんさたいしょうがい</rt></ruby>である。", textMY: " (RC) は (中間検査)   は" },
      { id: 4, textJP: "(4) <ruby>最低基準<rt>さいていきじゅん</rt></ruby>である。", textMY: "は '  (Minimum standard)' をは" },
      { id: 5, textJP: "(5) <ruby>安全性<rt>あんぜんせい</rt></ruby>は <ruby>防火<rt>ぼうか</rt></ruby>を <ruby>含む<rt>ふくむ</rt></ruby>。", textMY: "の'' について (Fire prevention)  は" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 中間検査 (ကြားဖြတ်စစ်ဆေးမှု)",
      reasonMY: "RC (Reinforced Concrete) အဆောက်အဦများはလည်း ကြိုတင်သတ်မှတ်ထားသောအဆင့်များ ရောက်ရှိသောအခါ ကြားဖြတ်စစ်ဆေးမှု (中間検査) をမဖြစ်မနေ ခံယူရပါမည်။",
      memoryTipMY: "RC ဖြစ်လည်း ကြားဖြတ်စစ်ဆေးမှု (中間検査) လိုအပ်ပါは။"
    }
  },
  {
    id: "2023-49",
    questionJP: "<ruby>技術的基準<rt>ぎじゅつてききじゅん</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အဆောက်အဦဆိုင်ရာ နည်းပညာစံနှုန်း (技術的基準) များとပတ်သက်၍ မိမိသဘောでမလုပ်ဆောင်ရမည့် (မှားယွင်းသောအချက်) をရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>緊結<rt>きんけつ</rt></ruby>を<ruby>行わなかった<rt>おこなわなかった</rt></ruby>。", textMY: " について (緊結)  は" },
      { id: 2, textJP: "(2) <ruby>ナット2重<rt>なっとにじゅう</rt></ruby>とした。", textMY: "Bolt   Nut を  (Double nuts) は" },
      { id: 3, textJP: "(3) <ruby>細長比<rt>ほそながひ</rt></ruby>は 300とした。", textMY: "の (Slenderness ratio) を  は" },
      { id: 4, textJP: "(4) <ruby>圧縮柱<rt>あっしゅくちゅう</rt></ruby>は <ruby>鋳鉄<rt>ちゅうてつ</rt></ruby>を <ruby>使用<rt>しよう</rt></ruby>した。", textMY: " (Compression Column)   (Cast iron/鋳鉄) をは" },
      { id: 5, textJP: "(5) <ruby>利便性優先<rt>りべんせいゆうせん</rt></ruby>とした。", textMY: "  (利便性) を  は" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 構造設計 (ဖွဲ့စည်းပုံဒီဇိုင်း)",
      reasonMY: "Cast iron (鋳鉄 / သွန်းသံ) はဖိအားをခံနိုင်သော်လည်း ရုတ်တရက်ကျိုးပဲ့လွယ်သော သတ္တိ (Brittle) ရှိသောကြောင့် အဆောက်အဦのအဓိကတိုင် (柱) များအဖြစ် အသုံးပြုခြင်းをဆောက်လုပ်ရေးစံနှုန်းဥပဒေအရ တားမြစ်ထားပါは။",
      memoryTipMY: "သွန်းသံ (Cast Iron) အား တိုင်အဖြစ် အသုံးမပြုရ။"
    }
  },
  {
    id: "2023-50",
    questionJP: "<ruby>用語<rt>ようご</rt></ruby>について<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဝေါဟာရများについてမသင့်လျော်သည့်အချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>敷地<rt>しきち</rt></ruby>は <ruby>一団の土地<rt>いちだんのとち</rt></ruby>である。", textMY: "は は" },
      { id: 2, textJP: "(2) <ruby>地階<rt>ちかい</rt></ruby>は <ruby>天井すべて<rt>てんじょうすべて</rt></ruby>が <ruby>下<rt>した</rt></ruby>である。", textMY: "  " },
      { id: 3, textJP: "(3) <ruby>基礎<rt>きそ</rt></ruby>は <ruby>主要部分<rt>しゅようぶぶん</rt></ruby>である。", textMY: "はは" },
      { id: 4, textJP: "(4) <ruby>柱<rt>はしら</rt></ruby>は <ruby>主要部分<rt>しゅようぶぶん</rt></ruby>である。", textMY: "はは" },
      { id: 5, textJP: "(5) <ruby>荷重<rt>かじゅう</rt></ruby>は <ruby>震動・衝撃<rt>しんどう・しょうげき</rt></ruby>を <ruby>含む<rt>ふくむ</rt></ruby>。", textMY: "について は" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - သတိပြုရန် (Key Point)",
      reasonMY: "မြေအောက်ထပ်ဖြစ်ရန် ၁/၃ သာ မြေအောက်ရောက်ရန် လိုအပ်は။",
      memoryTipMY: "1/3 depth."
    }
  }
];
