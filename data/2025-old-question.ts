
import { StudyCardData } from '../types';

export const chapter2025Data: StudyCardData[] = [
  {
    id: "2025-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>集中荷重<rt>しゅうちゅうかじゅう</rt></ruby>Pを<ruby>受ける<rt>うける</rt></ruby><ruby>単純梁<rt>たんゅんばり</rt></ruby>において、A<ruby>点<rt>てん</rt></ruby>の<ruby>反力<rt>はんりょく</rt></ruby>として<ruby>正しい<rt>正しい</rt></ruby>ものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့်အတိုင်း ဗဟိုချက်ဝန် P သက်ရောက်နေသော ရိုးရှင်းသည့် Beam (Simple Beam) တွင် Support A ၏ တုံ့ပြန်အား (Reaction) မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) P/4", textMY: "P/4" },
      { id: 2, textJP: "(2) P/3", textMY: "P/3" },
      { id: 3, textJP: "(3) P/2", textMY: "P/2" },
      { id: 4, textJP: "(4) 2P/3", textMY: "2P/3" },
      { id: 5, textJP: "(5) 3P/4", textMY: "3P/4" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - Support Reaction",
      reasonMY: "Simple Beam တစ်ခု၏ အလယ်တည့်တည့်တွင် ဝန် P သက်ရောက်ပါက Support နှစ်ဖက်စလုံးမှ ဝန်ကို ညီတူညီမျှ ခွဲဝေယူသောကြောင့် တုံ့ပြန်အားမှာ P/2 ဖြစ်သည်။",
      memoryTipMY: "ဝန်က အလယ်မှာဆိုရင် Reaction က တစ်ဝက်စီ (P/2) ဖြစ်ပါတယ်။"
    }
  },
  {
    id: "2025-2",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>における<ruby>剛性<rt>ごうせい</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "တည်ဆောက်ပုံဒီဇိုင်းရှိ Stiffness (တောင့်တင်းမှု) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>ヤング係数<rt>やんぐけいすう</rt></ruby>は、<ruby>鋼種<rt>こうしゅ</rt></ruby>によらずほぼ<ruby>一定<rt>いってい</rt></ruby>である。", textMY: "Young's Modulus သည် သံမဏိအမျိုးအစားမရွေး အမြဲတမ်းနီးပါး တူညီသည်။" },
      { id: 2, textJP: "(2) <ruby>断面二次モーメント<rt>だんめんにじもーめんと</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくすると、<ruby>曲げ剛性<rt>まげごうせい</rt></ruby>は<ruby>向上<rt>こうじょう</rt></ruby>する。", textMY: "Moment of Inertia ကို ကြီးအောင်လုပ်ပါက Bending Stiffness တိုးတက်လာသည်။" },
      { id: 3, textJP: "(3) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>を<ruby>高める<rt>たかめる</rt></ruby>と、<ruby>ヤング係数<rt>やんぐけいすう</rt></ruby>も<ruby>比例<rt>ひれい</rt></ruby>して<ruby>高くなる<rt>たかくなる</rt></ruby>。", textMY: "သံမဏိ၏ ခိုင်မာမှု (Strength) မြင့်လာပါက Young's Modulus သည်လည်း အချိုးကျ မြင့်မားလာသည်။" },
      { id: 4, textJP: "(4) <ruby>梁<rt>はり</rt></ruby>のたわみを<ruby>抑える<rt>おさえる</rt></ruby>には、<ruby>断面二次モーメント<rt>だんめんにじもーめんと</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくするのが<ruby>有効<rt>ゆうこう</rt></ruby>である。", textMY: "Beam ၏ ကွေးညွှတ်မှုကို လျှော့ချရန် Moment of Inertia ကို ကြီးအောင်လုပ်ခြင်းသည် ထိရောက်သည်။" },
      { id: 5, textJP: "(5) <ruby>部材<rt>ぶざい</rt></ruby>の<ruby>長さを短く<rt>ながさをみじかく</rt></ruby>すると、<ruby>軸剛性<rt>じくごうせい</rt></ruby>は<ruby>高くなる<rt>たかくなる</rt></ruby>。", textMY: "အစိတ်အပိုင်း၏ အလျားကို တိုစေပါက Axial Stiffness မြင့်မားလာသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ヤング係数 (Young's Modulus)",
      reasonMY: "Young's Modulus (E) သည် သံမဏိ၏ ခိုင်မာမှု (Strength/Grade) ပေါ်တွင် မူတည်ခြင်းမရှိဘဲ သံမဏိအမျိုးအစားအားလုံးအတွက် တူညီသော တန်ဖိုး (2.05 x 10^5 N/mm²) ရှိသည်။",
      memoryTipMY: "Strength တက်ပေမယ့် Stiffness (E) ကတော့ မပြောင်းလဲပါဘူး။"
    }
  },
  {
    id: "2025-3",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>における<ruby>降伏比<rt>こうふくひ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိ၏ Yield Ratio နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>降伏比<rt>こうふくひ</rt></ruby>は、<ruby>降伏点<rt>こうふくてん</rt></ruby>を<ruby>引張強さ<rt>ひっぱりつよさ</rt></ruby>で<ruby>除<rt>じょ</rt></ruby>した<ruby>値<rt>あたい</rt></ruby>である。", textMY: "Yield Ratio သည် Yield Point ကို Tensile Strength နှင့် စားထားသော တန်ဖိုးဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>降伏比<rt>こうふくひ</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>いほど、<ruby>塑性変形能力<rt>そせいへんけいのうりょく</rt></ruby>は<ruby>高く<rt>たかく</rt></ruby>なる。", textMY: "Yield Ratio နိမ့်လေ ပုံပျက်ခံနိုင်ရည် (Ductility) မြင့်မားလေဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>高張力鋼<rt>こうちょうりょくこう</rt></ruby>は、<ruby>一般<rt>いっぱん</rt></ruby>に<ruby>降伏比<rt>こうふくひ</rt></ruby>が<ruby>高くなる<rt>たかくなる</rt></ruby><ruby>傾向<rt>けいこう</rt></ruby>がある。", textMY: "High Tensile Steel များသည် များသောအားဖြင့် Yield Ratio မြင့်မားတတ်သည်။" },
      { id: 4, textJP: "(4) <ruby>建築構造用圧延鋼材<rt>けんちくこうぞうようあつえんこうざい</rt></ruby>(SN<ruby>材<rt>ざい</rt></ruby>)のB<ruby>種<rt>しゅ</rt></ruby>、C<ruby>種<rt>しゅ</rt></ruby>では、<ruby>降伏比<rt>こうふくひ</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>が 80% と<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "SN-B နှင့် SN-C သံမဏိများတွင် Yield Ratio ၏ အမြင့်ဆုံးကန့်သတ်ချက်မှာ ၈၀% ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>降伏比<rt>こうふくひ</rt></ruby>が 100% に<ruby>近い<rt>ちかい</rt></ruby>ほど、<ruby>塑性化<rt>そせいか</rt></ruby>した<ruby>際<rt>さい</rt></ruby>の<ruby>安全余裕<rt>あんぜんよゆう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい。", textMY: "Yield Ratio သည် ၁၀၀% နှင့် နီးကပ်လေလေ ပုံပျက်ချိန်တွင် ဘေးကင်းမှု အနားသတ် ပိုကြီးလေလေဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 降伏比 (Yield Ratio)",
      reasonMY: "Yield Ratio ၁၀၀% နှင့် နီးကပ်ခြင်း ဆိုသည်မှာ Yield ဖြစ်ပြီးနောက် မကြာမီ ပျက်စီးသွားခြင်းကို ဆိုလိုသဖြင့် ဘေးကင်းမှု အနားသတ် (Safety Margin) နည်းပါးသွားခြင်း ဖြစ်သည်။",
      memoryTipMY: "Yield Ratio နိမ့်ရင် ပိုပြီး ပုံပျက်ခံနိုင် (Ductile) ပါတယ်။"
    }
  },
  {
    id: "2025-4",
    questionJP: "JASS 6における<ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ အလုပ်ရုံပုံစံ (Shop Drawing) အတည်ပြုခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>が<ruby>作成<rt>さくせい</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "Shop Drawing ကို စက်ရုံက ရေးဆွဲပြီး တည်ဆောက်သူ (施工者) က အတည်ပြုရမည်။" },
      { id: 2, textJP: "(2) <ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受けた<rt>うけた</rt></ruby><ruby>工作図<rt>こうさくず</rt></ruby>は、さらに<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>を<ruby>得る<rt>える</rt></ruby><ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "တည်ဆောက်သူ အတည်ပြုပြီးသောပုံကို ကြီးကြပ်သူ (監理者) ၏ အသိအမှတ်ပြုချက် ထပ်မံရယူရမည်။" },
      { id: 3, textJP: "(3) <ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>に<ruby>対する<rt>たいする</rt></ruby><ruby>責任<rt>せきにん</rt></ruby>は、<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>与えた<rt>あたえた</rt></ruby><ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>に<ruby>移る<rt>うつる</rt></ruby>。", textMY: "ပုံ၏ အကြောင်းအရာအတွက် တာဝန်သည် အတည်ပြုပေးလိုက်သော ကြီးကြပ်သူထံသို့ လွှဲပြောင်းသွားသည်။" },
      { id: 4, textJP: "(4) <ruby>設計変更<rt>せっけいへんこう</rt></ruby>があった<ruby>場合<rt>ばあい</rt></ruby>、<ruby>工作図<rt>こうさくず</rt></ruby>を<ruby>修正<rt>しゅうせい</rt></ruby>し<ruby>再承認<rt>さいしょうにん</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby>。", textMY: "ဒီဇိုင်းပြောင်းလဲပါက ပုံကို ပြင်ဆင်ပြီး အတည်ပြုချက် ပြန်လည်ရယူရမည်။" },
      { id: 5, textJP: "(5) <ruby>工作図<rt>こうさくず</rt></ruby>には、<ruby>溶接記号<rt>ようせつきごう</rt></ruby>や<ruby>部材マーク<rt>ぶざいまーく</rt></ruby>を<ruby>明記<rt>めいき</rt></ruby>する。", textMY: "Shop Drawing တွင် ဂဟေသင်္ကေတနှင့် အစိတ်အပိုင်းအမှတ်အသားများကို ရှင်းလင်းစွာ ဖော်ပြရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 工作図の責任 (Responsibility)",
      reasonMY: "ကြီးကြပ်သူက အတည်ပြုပေးသော်လည်း၊ ပုံတွင်ပါဝင်သော အမှားအယွင်းများအတွက် တာဝန်မှာ ပုံရေးဆွဲသူ (ထုတ်လုပ်သူ) တွင်သာ ဆက်လက်ရှိနေပါသည်။ ကြီးကြပ်သူထံသို့ တာဝန် လုံးဝမရောက်သွားပါ။",
      memoryTipMY: "အတည်ပြုချက် (Approval) ပေးရုံနဲ့ တာဝန် (Responsibility) က လွှဲမသွားပါဘူး။"
    }
  },
  {
    id: "2025-5",
    questionJP: "<ruby>高力ボルト接合<rt>こうりょくボルトせつごう</rt></ruby>における<ruby>締付け<rt>しめつけ</rt></ruby>に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength Bolt တပ်ဆင်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>締付け<rt>しめつけ</rt></ruby>は、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>群<rt>ぐん</rt></ruby>の<ruby>中央<rt>ちゅうおう</rt></ruby>から<ruby>端部<rt>たんぶ</rt></ruby>に<ruby>向かって<rt>むかって</rt></ruby><ruby>行なう<rt>おこなう</rt></ruby>。", textMY: "တပ်ဆင်ခြင်းကို အုပ်စု၏ အလယ်မှ အစွန်းဘက်သို့ ဦးတည်လုပ်ဆောင်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>本締め<rt>ほんじめ</rt></ruby>は、<ruby>一次締め<rt>いちじじめ</rt></ruby>を<ruby>完了<rt>かんりょう</rt></ruby>した<ruby>当日中<rt>とうじつちゅう</rt></ruby>に<ruby>行なう<rt>おこなう</rt></ruby>ことが<ruby>望ましい<rt>のぞましい</rt></ruby>。", textMY: "Pre-tightening ပြီးပါက ထိုနေ့အတွင်းမှာပင် Final Tightening လုပ်ဆောင်ရန် အကြံပြုသည်။" },
      { id: 3, textJP: "(3) <ruby>トルシア形ボルト<rt>トルシアがたボルト</rt></ruby>は、ピンテールの<ruby>破断<rt>はだん</rt></ruby>により<ruby>締付け完了<rt>しめつけかんりょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Torshear Bolt သည် အမြီးပြတ်သွားခြင်းဖြင့် တပ်ဆင်မှုပြီးစီးကြောင်း အတည်ပြုသည်။" },
      { id: 4, textJP: "(4) <ruby>共回り<rt>ともまわり</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>したボルトは、<ruby>追締め<rt>おいしめ</rt></ruby>してそのまま<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Co-rotation ဖြစ်ပေါ်သော Bolt ကို ထပ်ကျပ်ပြီး ဒီအတိုင်း ဆက်သုံးနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>ナット回転法<rt>なっとかいてんほう</rt></ruby>による<ruby>本締め<rt>ほんじめ</rt></ruby>では、ナットの<ruby>回転角<rt>かいてんかく</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Nut Rotation Method တွင် နပ်၏ လည်ပတ်သည့်ထောင့်ကို ထိန်းချုပ်စီမံသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 共回り (Co-rotation)",
      reasonMY: "အတူလည်ခြင်း (共回り) ဖြစ်ပေါ်ပါက ထို Bolt ကို ပြန်ကျပ်ရုံဖြင့် မရဘဲ အသစ်လဲလှယ်ရမည် (取り替える)။ ၎င်းသည် တင်းအား မမှန်ကန်ကြောင်း ပြသနေခြင်း ဖြစ်သည်။",
      memoryTipMY: "အတူလည်ရင် (共回り) အသစ်လဲရမယ်လို့ မှတ်ပါ။"
    }
  },
  {
    id: "2025-6",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>非破壊検査<rt>ひはかいけんさ</rt></ruby>における<ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>(UT)に<ruby>関する<rt>かんする</rt></ruby><ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်စစ်ဆေးမှု (UT) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) UTは、<ruby>溶接部内部<rt>ようせつぶないぶ</rt></ruby>の<ruby>欠陥<rt>けっかん</rt></ruby>を<ruby>検出<rt>けんしゅつ</rt></ruby>するために<ruby>用いる<rt>もちいる</rt></ruby>。", textMY: "UT ကို ဂဟေအတွင်းပိုင်း ချို့ယွင်းချက်များ ရှာဖွေရန် အသုံးပြုသည်။" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby> 6mm <ruby>未満<rt>みまん</rt></ruby>の<ruby>鋼板<rt>こうはん</rt></ruby>には、<ruby>原則<rt>げんそく</rt></ruby>としてUTを<ruby>適用<rt>てきよう</rt></ruby>しない。", textMY: "6mm အောက်ပြားများတွင် အခြေခံအားဖြင့် UT မလုပ်ဆောင်ပါ။" },
      { id: 3, textJP: "(3) <ruby>探触子<rt>たんしょくし</rt></ruby>の<ruby>屈折角<rt>くっせつかく</rt></ruby>は、<ruby>板厚<rt>いたあつ</rt></ruby>や<ruby>開先形状<rt>かいさきけいじょう</rt></ruby>に<ruby>関わらず<rt>かかわらず</rt></ruby> 70° とする。", textMY: "Probe ၏ ထောင့်ကို အထူနှင့်မဆိုင်ဘဲ အမြဲတမ်း ၇၀ ဒီဂရီ ထားရမည်။" },
      { id: 4, textJP: "(4) <ruby>接触媒質<rt>せっしょくばいしつ</rt></ruby>として<ruby>グリセリン<rt>ぐりせりん</rt></ruby>などを<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "ကြားခံပစ္စည်းအဖြစ် Glycerin ကို အသုံးပြုသည်။" },
      { id: 5, textJP: "(5) <ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>欠陥<rt>けっかん</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>して<ruby>再溶接<rt>さいようせつ</rt></ruby>する。", textMY: "မအောင်မြင်ပါက ချို့ယွင်းချက်ကို ဖယ်ထုတ်ပြီး ပြန်ဆက်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 屈折角 (Refraction Angle)",
      reasonMY: "UT Probe (探触子) တွင် ထောင့်အမျိုးမျိုး (၄၅, ၆၀, ၇၀) ရှိပြီး၊ အထူနှင့် ဂဟေပုံစံအပေါ် မူတည်၍ သင့်လျော်ရာကို ရွေးချယ်ရသည်။ ၇၀ တစ်မျိုးတည်း မဟုတ်ပါ။",
      memoryTipMY: "UT မှာ ထောင့်အမျိုးမျိုး (45, 60, 70) ရှိပါတယ်။"
    }
  },
  {
    id: "2025-7",
    questionJP: "<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>における<ruby>高力ボルト<rt>こうりょくぼると</rt></ruby><ruby>用<rt>よう</rt></ruby>の<ruby>孔<rt>あな</rt></ruby>について、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "HS Bolt အပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>孔あけ<rt>あなあけ</rt></ruby>は、ドリルあけを<ruby>原則<rt>げんそく</rt></ruby>とする。", textMY: "Drill ဖြင့် ဖောက်ခြင်းမှာ အခြေခံဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>板厚<rt>いたあつ</rt></ruby> 13mm <ruby>以下<rt>いか</rt></ruby>であれば、せん<ruby>断孔あけ<rt>だんあなあけ</rt></ruby>ができる。", textMY: "အထူ ၁၃ mm အောက်ဆိုလျှင် Punching လုပ်နိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>孔<rt>あな</rt></ruby>のまわりのバリは<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>する。", textMY: "အပေါက်ဘေးရှိ အမှုန် (Burr) များကို အကုန်ဖယ်ရမည်။" },
      { id: 4, textJP: "(4) <ruby>孔<rt>あな</rt></ruby>がずれた<ruby>場合<rt>ばあい</rt></ruby>は、ガス<ruby>切断<rt>せつだん</rt></ruby>で<ruby>修正<rt>しゅうせい</rt></ruby>してはならない。", textMY: "အပေါက်လွဲလျှင် Gas မီးဖြင့် ပြုပြင်ခြင်း မလုပ်ရ။" },
      { id: 5, textJP: "(5) M20 のボルトに<ruby>対して<rt>たいして</rt></ruby>、<ruby>孔径<rt>こうけい</rt></ruby>を 24mm とした。", textMY: "M20 bolt အတွက် အပေါက်အချင်းကို 24mm ထားခဲ့သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ボルト孔径 (Hole Diameter)",
      reasonMY: "M20 bolt အတွက် အပေါက်အချင်းမှာ 22mm (Nominal + 2mm) သာ ဖြစ်ရမည်။ 24mm သည် ကြီးလွန်းသည်။",
      memoryTipMY: "M20 -> 22mm, M22 -> 24mm (2mm ပဲ ပိုရမယ်)။"
    }
  },
  {
    id: "2025-8",
    questionJP: "<ruby>溶接欠陥<rt>ようせつけっかん</rt></ruby>のひとつである<ruby>アンダーカット<rt>あんだーかっと</rt></ruby>の<ruby>発生原因<rt>はっせいげんいん</rt></ruby>として、<ruby>最<rt>もっと</rt></ruby>も<ruby>関係<rt>かんけい</rt></ruby>の<ruby>深い<rt>ふかい</rt></ruby>ものはどれか。",
    questionMY: "Undercut ဖြစ်ပေါ်စေသော အဓိကအကြောင်းရင်းမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接電流<rt>ようせつでんりゅう</rt></ruby>が<ruby>低すぎる<rt>ひくすぎる</rt></ruby>。", textMY: "အမ်ပီယာ နည်းလွန်းခြင်း။" },
      { id: 2, textJP: "(2) <ruby>溶接速度<rt>ようせつそくど</rt></ruby>が<ruby>速すぎる<rt>はやすぎる</rt></ruby>。", textMY: "ဂဟေဆက်နှုန်း မြန်လွန်းခြင်း။" },
      { id: 3, textJP: "(3) <ruby>溶接電流<rt>ようせつでんりゅう</rt></ruby>が<ruby>高すぎる<rt>たかすぎる</rt></ruby>。", textMY: "အမ်ပီယာ များလွန်းခြင်း။" },
      { id: 4, textJP: "(4) <ruby>シールドガス<rt>しーるどがす</rt></ruby>が<ruby>多すぎる<rt>おおすぎる</rt></ruby>。", textMY: "Gas များလွန်းခြင်း။" },
      { id: 5, textJP: "(5) <ruby>湿気<rt>しっけ</rt></ruby>が<ruby>ある<rt>ある</rt></ruby>。", textMY: "စိုထိုင်းမှု ရှိခြင်း။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - アンダーカット (Undercut)",
      reasonMY: "Undercut သည် ဂဟေမီးအား (Current) များလွန်းခြင်းကြောင့် Base metal အရည်ပျော်ပြီး ချိုင့်ခွက်ဖြစ်ကျန်ခဲ့ခြင်း ဖြစ်သည်။",
      memoryTipMY: "မီးအားပြင်းရင် (High Current) ဘေးက သားတွေ လောင်စားသွားတယ် (Undercut)။"
    }
  },
  {
    id: "2025-9",
    questionJP: "JASS 6における<ruby>製品検査<rt>せいひんけんさ</rt></ruby>の<ruby>項目<rt>こうもく</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれないものはどれか。",
    questionMY: "JASS 6 ထုတ်ကုန်စစ်ဆေးမှုတွင် မပါဝင်သောအချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>部材<rt>ぶざい</rt></ruby>の<ruby>主要寸法<rt>しゅようすんぽう</rt></ruby>", textMY: "အစိတ်အပိုင်း၏ အဓိက အတိုင်းအတာများ။" },
      { id: 2, textJP: "(2) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>外観<rt>がいかん</rt></ruby>", textMY: "ဂဟေဆက်နေရာ၏ အပြင်ပန်း အခြေအနေ။" },
      { id: 3, textJP: "(3) <ruby>摩擦面<rt>まさつめん</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>", textMY: "ပွတ်တိုက်မျက်နှာပြင် အခြေအနေ။" },
      { id: 4, textJP: "(4) <ruby>工事現場<rt>こうじげんば</rt></ruby>の<ruby>安全管理<rt>あんぜんかんり</rt></ruby>", textMY: "အလုပ်ခွင်၏ ဘေးကင်းရေး စီမံခန့်ခွဲမှု။" },
      { id: 5, textJP: "(5) <ruby>錆止<rt>さびど</rt></ruby>め<ruby>塗装<rt>とそう</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>", textMY: "သံချေးကာဆေးသုတ်ထားမှု အခြေအနေ။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製品検査 (Product Inspection)",
      reasonMY: "ထုတ်ကုန်စစ်ဆေးမှုသည် စက်ရုံမှ ထွက်လာသော 'ပစ္စည်း' ကို စစ်ဆေးခြင်း ဖြစ်သည်။ အလုပ်ခွင် ဘေးကင်းရေးသည် ထုတ်ကုန်စစ်ဆေးမှု၏ အစိတ်အပိုင်း မဟုတ်ပါ။",
      memoryTipMY: "ပစ္စည်းစစ်တာနဲ့ လူဘေးကင်းရေးက တခြားစီပါ။"
    }
  },
  {
    id: "2025-10",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>において、<ruby>紫外線<rt>しがいせん</rt></ruby>から<ruby>目<rt>め</rt></ruby>を<ruby>守る<rt>まもる</rt></ruby>ための<ruby>用具<rt>ようぐ</rt></ruby>はどれか。",
    questionMY: "ဂဟေဆော်ရာတွင် ခရမ်းလွန်ရောင်ခြည်မှ မျက်စိကို ကာကွယ်ရန် မည်သည့်ကိရိယာကို သုံးသနည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>防塵<rt>ぼうじん</rt></ruby>マスク", textMY: "ဖုန်ကာနှာခေါင်းစည်း" },
      { id: 2, textJP: "(2) <ruby>遮光保護具<rt>しゃこうほごぐ</rt></ruby>", textMY: "အလင်းကာ မျက်မှန်/မျက်နှာဖုံး" },
      { id: 3, textJP: "(3) <ruby>安全靴<rt>あんぜんぐつ</rt></ruby>", textMY: "ဘေးကင်းရေးဖိနပ်" },
      { id: 4, textJP: "(4) <ruby>皮手袋<rt>かわてぶくろ</rt></ruby>", textMY: "သားရေလက်အိတ်" },
      { id: 5, textJP: "(5) <ruby>耳栓<rt>みみせん</rt></ruby>", textMY: "နားကြပ်" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 遮光保護具",
      reasonMY: "ဂဟေမီးတောက်မှထွက်သော အလင်းပြင်းအား (UV) ကို ကာကွယ်ရန်အတွက် သတ်မှတ်ထားသော အလင်းကာနံပါတ်ပါသည့် အကာအကွယ်ပစ္စည်းကို သုံးရမည်။",
      memoryTipMY: "အလင်း (Light) ကို ကာတာ 遮光 (Light shielding) ပါ။"
    }
  },
  {
    id: "2025-11",
    questionJP: "<ruby>鉄骨製作工場<rt>てっこつせいさくこうじょう</rt></ruby>の<ruby>認定グレード<rt>にんていぐれーど</rt></ruby>について、S, H, M, R, J のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>小規模<rt>しょうきぼ</rt></ruby>な<ruby>建物<rt>てもの</rt></ruby>を<ruby>対象<rt>たいしょう</rt></ruby>とするものはどれか。",
    questionMY: "စက်ရုံအဆင့်သတ်မှတ်ချက် S, H, M, R, J ထဲတွင် အသေးဆုံးအဆောက်အဦများအတွက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) S", textMY: "S" },
      { id: 2, textJP: "(2) H", textMY: "H" },
      { id: 3, textJP: "(3) M", textMY: "M" },
      { id: 4, textJP: "(4) R", textMY: "R" },
      { id: 5, textJP: "(5) J", textMY: "J" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 工場認定 (Accreditation)",
      reasonMY: "J အဆင့်သည် အရိုးရှင်းဆုံးနှင့် အသေးဆုံးအဆောက်အဦများအတွက်ဖြစ်ပြီး S အဆင့်မှာ အမြင့်ဆုံးနှင့် အကြီးဆုံးများအတွက်ဖြစ်သည်။",
      memoryTipMY: "S (Super) က အကြီးဆုံး၊ J က အသေးဆုံး။"
    }
  },
  {
    id: "2025-12",
    questionJP: "<ruby>超音波探傷検査<rt>ちょうおんぱたんしょうけんさ</rt></ruby>(UT)の<ruby>合否判定<rt>ごうひはんてい</rt></ruby>において、1<ruby>回目<rt>かいめ</rt></ruby>の<ruby>サンプリング<rt>さんぷりんぐ</rt></ruby>で<ruby>不合格<rt>ふごうかく</rt></ruby>となった<ruby>場合<rt>ばあい</rt></ruby>の<ruby>処置<rt>しょち</rt></ruby>として<ruby>正しい<rt>正しい</rt></ruby>ものはどれか。",
    questionMY: "UT စစ်ဆေးမှု ပထမအကြိမ်တွင် မအောင်မြင်ပါက မည်သို့လုပ်ဆောင်ရမည်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>直<rt>ただ</rt></ruby>ちに<ruby>不合格<rt>ふごうかく</rt></ruby>とする。", textMY: "ချက်ချင်း ရှုံးသည်ဟု သတ်မှတ်သည်။" },
      { id: 2, textJP: "(2) <ruby>全数検査<rt>ぜんすうけんさ</rt></ruby>に<ruby>切<rt>き</rt></ruby>り<ruby>替<rt>か</rt></ruby>える。", textMY: "အားလုံးစစ်ဆေးသည့်စနစ်သို့ ပြောင်းသည်။" },
      { id: 3, textJP: "(3) 2<ruby>倍<rt>ばい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>再抽出<rt>さいちゅうしゅつ</rt></ruby>して<ruby>再検査<rt>さいけんさ</rt></ruby>する。", textMY: "နမူနာ ၂ ဆ ပြန်ထုတ်ပြီး ပြန်စစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>検査<rt>けんさ</rt></ruby>を<ruby>中止<rt>ちゅうし</rt></ruby>する。", textMY: "စစ်ဆေးမှုကို ရပ်ဆိုင်းသည်။" },
      { id: 5, textJP: "(5) <ruby>特記<rt>とっき</rt></ruby>により<ruby>判断<rt>はんだん</rt></ruby>する。", textMY: "Spec အတိုင်း ဆုံးဖြတ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 抜取検査のルール",
      reasonMY: "နမူနာစစ်ဆေးမှုတွင် ပထမအကြိမ် မအောင်မြင်ပါက 'Double Sampling' အဖြစ် ၂ ဆသော နမူနာကို ထပ်မံထုတ်ယူပြီး ပြန်လည်စစ်ဆေးရမည်။",
      memoryTipMY: "၁ ကြိမ်ရှုံးရင် ၂ ဆ (2x) ပြန်စစ်ရမယ်။"
    }
  },
  {
    id: "2025-13",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>した<ruby>微細<rt>びさい</rt></ruby>な<ruby>割れ<rt>われ</rt></ruby>を<ruby>検出<rt>けんしゅつ</rt></ruby>するのに<ruby>最<rt>もっと</rt></ruby>も<ruby>適<rt>てき</rt></ruby>した<ruby>検査<rt>けんさ</rt></ruby>はどれか。",
    questionMY: "ဂဟေမျက်နှာပြင်ပေါ်ရှိ အလွန်သေးငယ်သော အက်ကွဲကြောင်းများကို ရှာဖွေရန် အသင့်တော်ဆုံးစစ်ဆေးမှုမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) UT", textMY: "UT" },
      { id: 2, textJP: "(2) RT", textMY: "RT" },
      { id: 3, textJP: "(3) PT", textMY: "PT (浸透探傷)" },
      { id: 4, textJP: "(4) <ruby>目視検査<rt>もくしけんさ</rt></ruby>", textMY: "အမြင်စစ်ဆေးမှု" },
      { id: 5, textJP: "(5) <ruby>打撃検査<rt>だげきけんさ</rt></ruby>", textMY: "ရိုက်ခတ်စစ်ဆေးမှု" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 浸透探傷検査 (PT)",
      reasonMY: "PT (Penetrant Testing) သည် မျက်နှာပြင်ပေါ်သို့ ဆေးရည်စိမ့်ဝင်စေခြင်းဖြင့် မျက်စိဖြင့်မမြင်ရသော အလွန်သေးငယ်သော အက်ကွဲကြောင်းများကို ရှာဖွေရန် အကောင်းဆုံးဖြစ်သည်။",
      memoryTipMY: "မျက်နှာပြင် (Surface) က အက်ကြောင်းဆိုရင် PT (ဆေးနီ)။"
    }
  },
  {
    id: "2025-14",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>ミルシート<rt>みるしーと</rt></ruby>において、<ruby>必ず<rt>かならず</rt></ruby><ruby>記載<rt>きさい</rt></ruby>されている<ruby>情報<rt>じょうほう</rt></ruby>はどれか。",
    questionMY: "Mill Sheet တွင် အမြဲတမ်း ပါဝင်နေသော အချက်အလက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作コスト<rt>せいさくこすと</rt></ruby>", textMY: "ထုတ်လုပ်မှု ကုန်ကျစရိတ်" },
      { id: 2, textJP: "(2) <ruby>化学成分<rt>かがくせいぶん</rt></ruby>と<ruby>機械的性質<rt>きかいてきせいしつ</rt></ruby>", textMY: "ဓာတုဖွဲ့စည်းမှုနှင့် စက်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများ" },
      { id: 3, textJP: "(3) <ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>", textMY: "အလုပ်သမား အမည်" },
      { id: 4, textJP: "(4) <ruby>運送会社<rt>うんそうがいしゃ</rt></ruby>の<ruby>名称<rt>めいしょう</rt></ruby>", textMY: "သယ်ယူပို့ဆောင်ရေး ကုမ္ပဏီ အမည်" },
      { id: 5, textJP: "(5) <ruby>設計者<rt>せっけいしゃ</rt></ruby>の<ruby>サイン<rt>さいん</rt></ruby>", textMY: "ဒီဇိုင်နာ၏ လက်မှတ်" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ミルシート (Mill Sheet)",
      reasonMY: "Mill Sheet သည် သံမဏိ၏ အရည်အသွေးကို အာမခံသော စာရွက်ဖြစ်ပြီး ၎င်း၏ ဓာတုဖွဲ့စည်းမှု (C, Si, Mn etc.) နှင့် အားခံနိုင်ရည် (Yield Point, Tensile Strength) တို့ကို အဓိက ဖော်ပြသည်။",
      memoryTipMY: "Mill Sheet = သံရဲ့ Birth Certificate (ဖွဲ့စည်းပုံနဲ့ အစွမ်း)။"
    }
  },
  {
    id: "2025-15",
    questionJP: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>における「<ruby>主要構造部<rt>しゅようこうぞうぶ</rt></ruby>」に<ruby>該当<rt>がいとう</rt></ruby>しないものはどれか。",
    questionMY: "ဆောက်လုပ်ရေးစံနှုန်းဥပဒေအရ 'ပင်မဖွဲ့စည်းပုံအစိတ်အပိုင်း' (Major Structural Parts) ထဲတွင် မပါဝင်သောအရာမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>柱<rt>はしら</rt></ruby>", textMY: "တိုင်" },
      { id: 2, textJP: "(2) <ruby>梁<rt>はり</rt></ruby>", textMY: "မြားတန်း" },
      { id: 3, textJP: "(3) <ruby>最下階<rt>さいかかい</rt></ruby>の<ruby>床<rt>ゆか</rt></ruby>", textMY: "အောက်ဆုံးထပ် ကြမ်းပြင်" },
      { id: 4, textJP: "(4) <ruby>屋根<rt>やね</rt></ruby>", textMY: "အမိုး" },
      { id: 5, textJP: "(5) <ruby>階段<rt>かいだん</rt></ruby>", textMY: "လှေကား" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 主要構造部",
      reasonMY: "ပင်မဖွဲ့စည်းပုံတွင် တိုင်၊ မြားတန်း၊ နံရံ၊ ကြမ်းပြင်၊ အမိုး၊ လှေကားတို့ ပါဝင်သော်လည်း၊ အောက်ဆုံးထပ်ကြမ်းပြင် (最下階の床) နှင့် ကြားတိုင် (間柱) တို့ကိုမူ ချန်လှပ်ထားသည်။",
      memoryTipMY: "မြေညီထပ်ကြမ်းပြင်က ပြိုကျစရာ မရှိလို့ Major part မဟုတ်ဘူးလို့ မှတ်ပါ။"
    }
  },
  {
    id: "2025-16",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>に<ruby>生じる<rt>しょうじる</rt></ruby><ruby>残留応力<rt>ざんりゅうおうりょく</rt></ruby>を<ruby>軽減<rt>けいげん</rt></ruby>するための<ruby>方法<rt>ほうほう</rt></ruby>として、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်နေရာတွင် ကျန်ရှိနေသော ဖိအား (Residual Stress) ကို လျှော့ချရန် အကောင်းဆုံးနည်းလမ်းမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "(1) <ruby>溶接速度<rt>ようせつそくど</rt></ruby>を<ruby>速く<rt>はやく</rt></ruby>する。", textMY: "ဂဟေဆက်နှုန်းကို မြန်အောင်လုပ်ခြင်း။" },
      { id: 2, textJP: "(2) <ruby>予熱<rt>よねつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "ကြိုတင်အပူပေးခြင်း (Preheat)။" },
      { id: 3, textJP: "(3) <ruby>急冷<rt>きゅうれい</rt></ruby>する。", textMY: "ချက်ချင်း အအေးခံခြင်း။" },
      { id: 4, textJP: "(4) <ruby>脚長<rt>きゃくちょう</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくする。", textMY: "ဂဟေအရွယ်အစားကို ကြီးအောင်လုပ်ခြင်း။" },
      { id: 5, textJP: "(5) <ruby>拘束<rt>こうそく</rt></ruby>を<ruby>強める<rt>つよめる</rt></ruby>。", textMY: "ပိုမိုတင်းကြပ်စွာ ချုပ်ကိုင်ထားခြင်း။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 残留応力の緩和",
      reasonMY: "ကြိုတင်အပူပေးခြင်း (Preheating) သည် အပူချိန်ကွာခြားမှုကို လျှော့ချပေးပြီး အအေးခံနှုန်းကို နှေးစေသောကြောင့် Residual Stress ကို လျှော့ချပေးနိုင်သည်။",
      memoryTipMY: "အပူ (Heat) နဲ့ အပူ (Heat) ကို ညှိပေးတာက Preheat ပါ။"
    }
  },
  {
    id: "2025-17",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>予熱温度<rt>よねつおんど</rt></ruby>を<ruby>決定<rt>けってい</rt></ruby>する<ruby>際<rt>さい</rt></ruby>に<ruby>考慮<rt>こうりょ</rt></ruby>すべき<ruby>最も重要<rt>じゅうよう</rt></ruby>な<ruby>要素<rt>ようそ</rt></ruby>はどれか。",
    questionMY: "Preheat အပူချိန်ကို ဆုံးဖြတ်ရာတွင် ထည့်သွင်းစဉ်းစားရမည့် အရေးကြီးဆုံးအချက်မှာ အဘယ်နည်း။",
    // FIX: Added missing properties 'options', 'explanation', and 'correctOptionId' to match StudyCardData interface.
    options: [
      { id: 1, textJP: "(1) <ruby>溶接速度<rt>ようせつそくど</rt></ruby>", textMY: "ဂဟေဆက်နှုန်း" },
      { id: 2, textJP: "(2) <ruby>シールドガス<rt>しーるどがす</rt></ruby>の<ruby>流量<rt>りゅうりょう</rt></ruby>", textMY: "Gas စီးဆင်းနှုန်း" },
      { id: 3, textJP: "(3) <ruby>炭素当量<rt>たんそとうりょう</rt></ruby>や<ruby>板厚<rt>いたあつ</rt></ruby>", textMY: "ကာဗွန်ညီမျှချက်နှင့် Plate အထူ" },
      { id: 4, textJP: "(4) <ruby>溶接機<rt>ようせつき</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>", textMY: "ဂဟေစက်အမျိုးအစား" },
      { id: 5, textJP: "(5) <ruby>表面<rt>ひょうめん</rt></ruby>の<ruby>粗さ<rt>あらさ</rt></ruby>", textMY: "မျက်နှာပြင်ကြမ်းတမ်းမှု" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 予熱温度の決定",
      reasonMY: "ကြိုတင်အပူပေးခြင်း (Preheating) အပူချိန်ကို ဆုံးဖြတ်ရာတွင် သံမဏိ၏ ဓာတုဖွဲ့စည်းမှု (Carbon Equivalent) နှင့် ပစ္စည်း၏ အထူ (Plate Thickness) တို့သည် အအေးခံနှုန်းနှင့် Cold Cracking ဖြစ်နိုင်ခြေအပေါ် သက်ရောက်မှု အရှိဆုံးဖြစ်သောကြောင့် ၎င်းတို့ကို အဓိက ထည့်သွင်းစဉ်းစားရမည်။",
      memoryTipMY: "ဘယ်လောက် အပူပေးရမလဲဆိုတာ 'သံရဲ့ အမျိုးအစား' နဲ့ 'အထူ' ပေါ်မှာ မူတည်ပါတယ်။"
    }
  }
];
