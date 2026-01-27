
import { StudyCardData } from '../types';

export const chapter2Part1Data: StudyCardData[] = [
  {
    id: "2-1",
    questionJP: "「JASS 6」における<ruby>用語<rt>ようご</rt></ruby>とその<ruby>定義<rt>ていぎ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 ပါ အသုံးအနှုန်းနှင့် အဓိပ္ပာယ်ဖွင့်ဆိုချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>設計図書<rt>せっけいとしょ</rt></ruby>：<ruby>設計図<rt>せっけいず</rt></ruby>・<ruby>仕様書<rt>しようしょ</rt></ruby>・<ruby>現場説明書<rt>げんばせつめいしょ</rt></ruby>および<ruby>質問回答書<rt>しつもんかいとうしょ</rt></ruby>をいう。", textMY: "ဒီဇိုင်းစာရွက်စာတမ်း - ဒီဇိုင်းပုံစံ၊ သတ်မှတ်ချက်၊ ရှင်းလင်းချက်နှင့် အမေးအဖြေလွှာများကို ဆိုလိုသည်။" },
      { id: 2, textJP: "(2) <ruby>施工品質<rt>せこうひんしつ</rt></ruby>：<ruby>設計品質<rt>せっけいひんしつ</rt></ruby>を<ruby>満足<rt>まんぞく</rt></ruby>するように<ruby>施工<rt>せこう</rt></ruby>した<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>実際<rt>じっさい</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>をいう。", textMY: "တည်ဆောက်မှုအရည်အသွေး - ဒီဇိုင်းအရည်အသွေးအတိုင်း တည်ဆောက်ထားသော သံမဏိ၏ လက်တွေ့အရည်အသွေးဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>受入検査<rt>うけいれけんさ</rt></ruby>：<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>のうち、<ruby>工場製作<rt>こうじょうせいさく</rt></ruby>の<ruby>完了<rt>かんりょう</rt></ruby>した<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れるにあたって<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "လက်ခံစစ်ဆေးခြင်း - တည်ဆောက်သူက စက်ရုံမှပစ္စည်းများကို လက်ခံရာတွင် ပြုလုပ်သော စစ်ဆေးမှုဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>：<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>が<ruby>製作<rt>せいさく</rt></ruby>の<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>自主的<rt>じしゅてき</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "ကြားဖြတ်စစ်ဆေးခြင်း - ထုတ်လုပ်သူက ထုတ်လုပ်စဉ်အတွင်း မိမိဘာသာလုပ်ဆောင်သော စစ်ဆေးမှုဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>設計品質<rt>せっけいひんしつ</rt></ruby>：<ruby>施主<rt>せしゅ</rt></ruby>・<ruby>設計者<rt>せっけいしゃ</rt></ruby>が<ruby>施工<rt>せこう</rt></ruby>の<ruby>目標<rt>もくひょう</rt></ruby>として<ruby>設計図書<rt>せっけいとしょ</rt></ruby>で<ruby>定<rt>さだ</rt></ruby>めた<ruby>性能<rt>せいのう</rt></ruby>・<ruby>仕様<rt>しよう</rt></ruby>をいう。", textMY: "ဒီဇိုင်းအရည်အသွေး - ပိုင်ရှင်/ဒီဇိုင်နာက တည်ဆောက်မှုပန်းတိုင်အဖြစ် သတ်မှတ်ထားသော စံနှုန်းများဖြစ်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 中間検査 vs 社内検査",
      reasonMY: "ထုတ်လုပ်သူက မိမိဘာသာလုပ်ဆောင်သော စစ်ဆေးမှုမှာ '社内検査' (စက်ရုံတွင်းစစ်ဆေးမှု) ဖြစ်သည်။ '中間検査' (ကြားဖြတ်စစ်ဆေးမှု) ဆိုသည်မှာ တည်ဆောက်သူ (施工者) က သတ်မှတ်ထားသော အဆင့်များတွင် လာရောက်စစ်ဆေးခြင်း ဖြစ်သည်။",
      memoryTipMY: "စက်ရုံက ကိုယ့်ဘာသာစစ်ရင် 社内検査, တည်ဆောက်သူက လာစစ်ရင် 中間検査။"
    }
  },
  {
    id: "2-2",
    questionJP: "「JASS 6」における<ruby>用語<rt>ようご</rt></ruby>とその<ruby>定義<rt>ていぎ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 ပါ အသုံးအနှုန်းနှင့် အဓိပ္ပာယ်ဖွင့်ဆိုချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>社内検査<rt>しゃないけんさ</rt></ruby>：<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>が<ruby>製作<rt>せいさく</rt></ruby>の<ruby>途上<rt>とじょう</rt></ruby>および<ruby>完了段階<rt>かんりょうだんかい</rt></ruby>で<ruby>自主的<rt>じしゅてき</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "စက်ရုံတွင်းစစ်ဆေးမှု - ထုတ်လုပ်သူက ထုတ်လုပ်စဉ်နှင့် ပြီးစီးချိန်တွင် မိမိဘာသာ စစ်ဆေးခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>中間検査<rt>ちゅうかんけんさ</rt></ruby>：<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>のうち、<ruby>製作途上<rt>せいさくとじょう</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>鉄骨部材<rt>てっこつぶざい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "ကြားဖြတ်စစ်ဆေးခြင်း - တည်ဆောက်သူက ထုတ်လုပ်ဆဲပစ္စည်းများအပေါ် လုပ်ဆောင်သော စစ်ဆေးမှုဖြစ်သည်။" },
      { id: 3, textJP: "(3) <ruby>製品検査<rt>せいひんけんさ</rt></ruby>：<ruby>製作工場<rt>せいさくこうじょう</rt></ruby>において<ruby>製作<rt>せいさく</rt></ruby>を<ruby>完了<rt>かんりょう</rt></ruby>した<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>う<ruby>検査<rt>けんさ</rt></ruby>のうち、<ruby>施工者<rt>せこうしゃ</rt></ruby>が<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "ထုတ်ကုန်စစ်ဆေးမှု - စက်ရုံတွင် ပြီးစီးသော ပစ္စည်းများကို တည်ဆောက်သူက စစ်ဆေးခြင်း ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>外注品検査<rt>がいちゅうひんけんさ</rt></ruby>：<ruby>社内検査<rt>しゃないけんさ</rt></ruby>のうち、<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>が<ruby>外注品<rt>がいちゅうひん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れる<ruby>際<rt>さい</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "ပြင်ပပစ္စည်းစစ်ဆေးမှု - ထုတ်လုပ်သူက ပြင်ပမှမှာယူသော ပစ္စည်းများကို လက်ခံချိန်တွင် စစ်ဆေးခြင်းဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>購入品検査<rt>こうにゅうひんけんさ</rt></ruby>：<ruby>社内検査<rt>しゃないけんさ</rt></ruby>のうち、<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>が<ruby>購入品<rt>こうにゅうひん</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れる<ruby>際<rt>さい</rt></ruby>に<ruby>実施<rt>じっし</rt></ruby>する<ruby>検査<rt>けんさ</rt></ruby>をいう。", textMY: "ဝယ်ယူပစ္စည်းစစ်ဆေးမှု - ထုတ်လုပ်သူက ဝယ်ယူထားသော ပစ္စည်းများကို လက်ခံချိန်တွင် စစ်ဆေးခြင်းဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製品検査 (Product Inspection)",
      reasonMY: "စက်ရုံတွင် ပြီးစီးသော ပစ္စည်းများကို တည်ဆောက်သူ (施工者) က လာရောက်စစ်ဆေးခြင်းသည် '受入検査' (လက်ခံစစ်ဆေးခြင်း) ဖြစ်သည်။ '製品検査' (ထုတ်ကုန်စစ်ဆေးမှု) သည် ထုတ်လုပ်သူ (製作業者) က ပြုလုပ်သော စက်ရုံတွင်းစစ်ဆေးမှု ဖြစ်သည်။",
      memoryTipMY: "တည်ဆောက်သူကလုပ်ရင် 受入検査, ထုတ်လုပ်သူကလုပ်ရင် 製品検査။"
    }
  },
  {
    id: "2-3",
    questionJP: "<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှုလမ်းညွှန် (Fabrication Manual) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>品質計画<rt>ひんしつけいかく</rt></ruby>を<ruby>実行<rt>じっこう</rt></ruby>するための<ruby>方針<rt>ほうしん</rt></ruby>や<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>取<rt>と</rt></ruby>りまとめたものである。", textMY: "ထုတ်လုပ်မှုလမ်းညွှန်သည် အရည်အသွေးစီမံကိန်းကို လုပ်ဆောင်ရန် နည်းလမ်းများကို စုစည်းထားခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>に<ruby>一般的<rt>いっぱんてき</rt></ruby>なひな<ruby>形<rt>がた</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>適宜<rt>てきぎ</rt></ruby>、<ruby>工事内容<rt>こうじないよう</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて<ruby>修正<rt>しゅうせい</rt></ruby>しなければならない。", textMY: "လမ်းညွှန်ကို ပုံစံတူအသုံးပြုပါက လုပ်ငန်းအကြောင်းအရာနှင့် ကိုက်ညီအောင် ပြင်ဆင်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>工場製作開始前<rt>こうじょうせいさくかいしまえ</rt></ruby>に<ruby>作成<rt>さくせい</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>を<ruby>得<rt>え</rt></ruby>ておくことが<ruby>不可欠<rt>ふかけつ</rt></ruby>である。", textMY: "ထုတ်လုပ်မှုလမ်းညွှန်ကို အလုပ်မစမီ တည်ဆောက်သူ၏ အတည်ပြုချက်နှင့် ကြီးကြပ်သူ၏ ခွင့်ပြုချက် ရယူထားရန် လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>には、<ruby>製作段階<rt>せいさくだんかい</rt></ruby>で<ruby>問題<rt>もんだい</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じた<ruby>場合<rt>ばあい</rt></ruby>の<ruby>対応<rt>たいおう</rt></ruby>について<ruby>記載<rt>きさい</rt></ruby>されていなければならない。", textMY: "လမ်းညွှန်တွင် ပြဿနာဖြစ်ပေါ်ပါက ဖြေရှင်းမည့်နည်းလမ်းများကို ဖော်ပြထားရမည်။" },
      { id: 5, textJP: "(5) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>設計図書<rt>せっけいとしょ</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>されていない<ruby>加工法<rt>かこうほう</rt></ruby>、<ruby>施工法<rt>せこうほう</rt></ruby>、<ruby>検査方法<rt>けんさほうほう</rt></ruby>などを<ruby>立案<rt>りつあん</rt></ruby>することも<ruby>含<rt>ふく</rt></ruby>め、<ruby>鉄骨製作工場<rt>てっこつせいさくこうじょう</rt></ruby>が<ruby>持<rt>も</rt></ruby>つ<ruby>加工設備機器、技術<rt>かこうせつびきき、ぎじゅつ</rt></ruby>などを<ruby>勘案<rt>かんあん</rt></ruby>し、<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>確保<rt>かくほ</rt></ruby>や<ruby>経済性、安全性<rt>けいざいせい、あんぜんせい</rt></ruby>などを<ruby>追求<rt>ついきゅう</rt></ruby>したものである。", textMY: "လမ်းညွှန်တွင် စက်ရုံ၏ စွမ်းဆောင်ရည်ကို ထည့်သွင်းစဉ်းစားပြီး အရည်အသွေးနှင့် ဘေးကင်းရေးတို့ကိုပါ ဖော်ပြထားသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 承認と承諾 (Approval)",
      reasonMY: "ထုတ်လုပ်မှုလမ်းညွှန် (製作要領書) ကို 'တည်ဆောက်သူ (施工者)' က အတည်ပြုချက် (承認) ပေးရပြီး 'ကြီးကြပ်သူ (監理者)' ကလည်း အတည်ပြုချက် (承認) သို့မဟုတ် ခွင့်ပြုချက် (承諾) ပေးရမည် ဖြစ်သည်။ PDF စာမျက်နှာ ၂ ပါ လက်ရေးပြင်ဆင်ချက်အရ ကြီးကြပ်သူ၏ အတည်ပြုချက်သည် မရှိမဖြစ် ဖြစ်သည်။",
      memoryTipMY: "Procedure Manual = 施工者の承認 + 監理者の承認/承諾။"
    }
  },
  {
    id: "2-4",
    questionJP: "<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ထုတ်လုပ်မှုလမ်းညွှန် (Fabrication Manual) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>品質計画<rt>ひんしつけいかく</rt></ruby>を<ruby>立案<rt>りつあん</rt></ruby>・<ruby>実行<rt>じっこう</rt></ruby>するための<ruby>方針<rt>ほうしん</rt></ruby>や<ruby>計画<rt>けいかく</rt></ruby>の<ruby>成果<rt>せいか</rt></ruby>を<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>として<ruby>取<rt>と</rt></ruby>りまとめたものである。", textMY: "ထုတ်လုပ်မှုလမ်းညွှန်သည် အရည်အသွေးစီမံကိန်းကို လက်တွေ့အကောင်အထည်ဖော်ရန် နည်းစနစ်များကို စုစည်းထားခြင်းဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は<ruby>品質管理要領書<rt>ひんしつかんりようりょうしょ</rt></ruby>や<ruby>製品検査要領書<rt>せいひんけんさようりょうしょ</rt></ruby>などを<ruby>兼<rt>か</rt></ruby>ねて<ruby>作成<rt>さくせい</rt></ruby>されることもある。", textMY: "လမ်းညွှန်ကို အရည်အသွေးထိန်းချုပ်မှုနှင့် ထုတ်ကုန်စစ်ဆေးမှုလမ်းညွှန်များနှင့် ပေါင်းစပ်ရေးဆွဲနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>工場製作開始前<rt>こうじょうせいさくかいしまえ</rt></ruby>に<ruby>作成<rt>さくせい</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>得<rt>え</rt></ruby>ておくことが<ruby>不可欠<rt>ふかけつ</rt></ruby>である。", textMY: "အလုပ်မစမီ တည်ဆောက်သူနှင့် ကြီးကြပ်သူတို့၏ အတည်ပြုချက်များ ရယူထားရန် မရှိမဖြစ်လိုအပ်သည်။" },
      { id: 4, textJP: "(4) <ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>は、<ruby>設計図書<rt>せっけいとしょ</rt></ruby>による<ruby>要求品質水準<rt>ようきゅうひんしつすいじゅん</rt></ruby>を<ruby>満足<rt>まんぞく</rt></ruby>するための<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>製作方法<rt>せいさくほうほう</rt></ruby>を、<ruby>記録<rt>きろく</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>すことを<ruby>主な目的<rt>おもなもくてき</rt></ruby>として<ruby>作成<rt>さくせい</rt></ruby>される。", textMY: "လမ်းညွှန်ကို ထုတ်လုပ်မှုနည်းလမ်းများကို မှတ်တမ်းတင်ထားရန် ရည်ရွယ်ချက်ဖြင့် အဓိကရေးဆွဲခြင်း ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>承認<rt>しょうにん</rt></ruby>・<ruby>承諾済み<rt>しょうだくずみ</rt></ruby>の<ruby>製作要領書<rt>せいさくようりょうしょ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>については、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>作業者<rt>さぎょうしゃ</rt></ruby>まで<ruby>教育<rt>きょういく</rt></ruby>・<ruby>周知<rt>しゅうち</rt></ruby>させてから<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>開始<rt>かいし</rt></ruby>することが<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "အတည်ပြုပြီးသော လမ်းညွှန်ချက်ကို အလုပ်သမားများထံ အသိပေးပြီးမှ အလုပ်စတင်ရန် အရေးကြီးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 製作要領書の目的",
      reasonMY: "ထုတ်လုပ်မှုလမ်းညွှန်၏ အဓိကရည်ရွယ်ချက်မှာ 'မှတ်တမ်းတင်ရန်' (記録に残す) မဟုတ်ဘဲ၊ သတ်မှတ်ထားသော အရည်အသွေးရရှိစေရန် 'ထုတ်လုပ်မှုနည်းလမ်းများကို တိကျစွာသတ်မှတ်ပြီး လုပ်ဆောင်ရန်' ဖြစ်သည်။",
      memoryTipMY: "Manual = How to do (အလုပ်လုပ်နည်း)။ Record = After work (အလုပ်ပြီးမှရလဒ်)။"
    }
  },
  {
    id: "2-5",
    questionJP: "<ruby>作業標準<rt>さぎょうひょうじゅん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "လုပ်ငန်းစံနှုန်း (Work Standard) ၏ ရည်ရွယ်ချက်နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>作業<rt>さぎょう</rt></ruby>をやり<ruby>易<rt>やす</rt></ruby>くし、<ruby>要求<rt>ようきゅう</rt></ruby>される<ruby>精度<rt>せいど</rt></ruby>や<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>をできる<ruby>限<rt>かぎ</rt></ruby>り<ruby>安価<rt>あんか</rt></ruby>に<ruby>製造<rt>せいぞう</rt></ruby>する。", textMY: "အလုပ်ကို လွယ်ကူစေပြီး လိုအပ်သောအရည်အသွေးရှိသော ပစ္စည်းများကို ဈေးအသက်သာဆုံး ထုတ်လုပ်ရန်ဖြစ်သည်။" },
      { id: 2, textJP: "(2) <ruby>新入社員教育<rt>しんにゅうしゃいんきょういく</rt></ruby>や、<ruby>部署替え<rt>ぶしょがえ</rt></ruby>による<ruby>作業教育<rt>さぎょうきょういく</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "ဝန်ထမ်းသစ်များနှင့် ဌာနပြောင်းလာသူများကို ပညာပေးရန် အသုံးပြုသည်။" },
      { id: 3, textJP: "(3) <ruby>関係者<rt>かんけいしゃ</rt></ruby>の<ruby>生産<rt>せいさん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>任務<rt>にんむ</rt></ruby>と<ruby>責任<rt>せきにん</rt></ruby>・<ruby>権限<rt>けんげん</rt></ruby>を<ruby>明確化<rt>めいかくか</rt></ruby>する。", textMY: "သက်ဆိုင်သူများ၏ တာဝန်နှင့် လုပ်ပိုင်ခွင့်များကို ရှင်းလင်းစေရန်ဖြစ်သည်။" },
      { id: 4, textJP: "(4) <ruby>作業方法<rt>さぎょうほうほう</rt></ruby>や<ruby>業務手順<rt>ぎょうむてじゅん</rt></ruby>を<ruby>統一<rt>とういつ</rt></ruby>し、<ruby>品質<rt>ひんしつ</rt></ruby>や<ruby>作業時間<rt>さぎょうじかん</rt></ruby>のバラツキを<ruby>少<rt>すく</rt></ruby>なくする。", textMY: "လုပ်ငန်းစဉ်များကို တစ်ပြေးညီဖြစ်စေပြီး အရည်အသွေးနှင့် အချိန် ကွဲပြားမှုများကို လျှော့ချရန်ဖြစ်သည်။" },
      { id: 5, textJP: "(5) <ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>や<ruby>施工者<rt>せこうしゃ</rt></ruby>に<ruby>提示<rt>ていじ</rt></ruby>し、さらなる<ruby>品質向上<rt>ひんしつこうじょう</rt></ruby>に<ruby>向<rt>む</rt></ruby>けての<ruby>活動<rt>かつどう</rt></ruby>を<ruby>推進<rt>すいしん</rt></ruby>する。", textMY: "ကြီးကြပ်သူ သို့မဟုတ် တည်ဆောက်သူအား တင်ပြပြီး အရည်အသွေးမြှင့်တင်ရေးကို တွန်းအားပေးရန် ဖြစ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 作業標準の非公開性",
      reasonMY: "လုပ်ငန်းစံနှုန်း (作業標準) ဆိုသည်မှာ စက်ရုံ၏ အတွင်းရေးစံနှုန်း (In-house standard) ဖြစ်သောကြောင့် ကြီးကြပ်သူ (監理者) အား တင်ပြရန် (提示する) ရည်ရွယ်ချက် မရှိပါ။ ကြီးကြပ်သူအား တင်ပြရမည့်အရာမှာ '製作要領書' (ထုတ်လုပ်မှုလမ်းညွှန်) သာ ဖြစ်သည်။",
      memoryTipMY: "စက်ရုံတွင်းသုံးတာမို့ 監理者 ကို ပြစရာမလိုပါ။"
    }
  },
  {
    id: "2-6",
    questionJP: "<ruby>作業量<rt>さぎょうりょう</rt></ruby>が<ruby>過大<rt>かだい</rt></ruby>である<ruby>工程<rt>こうてい</rt></ruby>への<ruby>対策<rt>たいさく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အလုပ်ပမာဏ များပြားလွန်းသော အဆင့်များအတွက် ဖြေရှင်းနည်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>受注予定量<rt>じゅちゅうよていりょう</rt></ruby>を<ruby>見直<rt>みなお</rt></ruby>して<ruby>仕事量<rt>しごとりょう</rt></ruby>の<ruby>調整<rt>ちょうせい</rt></ruby>や<ruby>標準時間<rt>ひょうじゅんじかん</rt></ruby>などの<ruby>見直<rt>みなお</rt></ruby>しを<ruby>行<rt>おこな</rt></ruby>う。", textMY: "မှာယူမှုပမာဏကို ပြန်လည်သုံးသပ်ပြီး အလုပ်ဝေစုနှင့် စံနှုန်းသတ်မှတ်ချိန်များကို ချိန်ညှိခြင်း။" },
      { id: 2, textJP: "(2) <ruby>一時的<rt>いちじてき</rt></ruby>に<ruby>リース<rt>りーす</rt></ruby>などを<ruby>利用<rt>りよう</rt></ruby>したり<ruby>新規購入<rt>しんきこうにゅう</rt></ruby>するなどして、<ruby>設備能力<rt>せつびのうりょく</rt></ruby>を<ruby>増強<rt>ぞうきょう</rt></ruby>する。", textMY: "ယာယီအားဖြင့် စက်ငှားရမ်းခြင်း သို့မဟုတ် အသစ်ဝယ်ယူခြင်းဖြင့် စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း။" },
      { id: 3, textJP: "(3) <ruby>日程的<rt>にっていてき</rt></ruby>に<ruby>余裕<rt>よゆう</rt></ruby>のある<ruby>部署<rt>ぶしょ</rt></ruby>の<ruby>人員<rt>じんいん</rt></ruby>や<ruby>外部<rt>がいぶ</rt></ruby>の<ruby>人員<rt>じんいん</rt></ruby>を<ruby>補充<rt>ほじゅう</rt></ruby>したり、あるいは<ruby>残業<rt>ざんぎょう</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>する。", textMY: "အခြားဌာန သို့မဟုတ် ပြင်ပမှ လူအင်အားဖြည့်တင်းခြင်း သို့မဟုတ် အချိန်ပိုဆင်းခြင်းတို့ကို လုပ်ဆောင်ခြင်း။" },
      { id: 4, textJP: "(4) <ruby>所定<rt>しょてい</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>できる<ruby>外注先<rt>がいちゅうさき</rt></ruby>を<ruby>選<rt>えら</rt></ruby>び、<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>了解<rt>りょうかい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>上<rt>うえ</rt></ruby>で<ruby>依頼<rt>いらい</rt></ruby>する。", textMY: "အရည်အသွေးစိတ်ချရသော ပြင်ပစက်ရုံကို ကြီးကြပ်သူ၏ သဘောတူညီချက်ဖြင့် ငှားရမ်းလုပ်ဆောင်ခြင်း။" },
      { id: 5, textJP: "(5) <ruby>建方工程<rt>たてかたこうてい</rt></ruby>から<ruby>製作着手日程<rt>せいさくちゃくしゅにってい</rt></ruby>を<ruby>逆算<rt>ぎゃくさん</rt></ruby>し、<ruby>施工管理者<rt>せこうかんりしゃ</rt></ruby>による<ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>承認後<rt>しょうにんご</rt></ruby>に<ruby>製作<rt>せいさく</rt></ruby>に<ruby>着手<rt>ちゃくしゅ</rt></ruby>し、<ruby>工事監理者<rt>こうじかんりしゃ</rt></reason>に<ruby>報告<rt>ほうこく</rt></ruby>する。", textMY: "တပ်ဆင်မည့်ရက်မှ ပြောင်းပြန်တွက်ချက်ပြီး ပုံစံအတည်ပြုပြီးမှ ထုတ်လုပ်မှုကိုစတင်ကာ ကြီးကြပ်သူအား အစီရင်ခံခြင်း။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 対策ではない通常業務",
      reasonMY: "အချက် (၅) သည် ပုံမှန်အလုပ်လုပ်ပုံ လုပ်ထုံးလုပ်နည်း (Standard Procedure) သာ ဖြစ်သည်။ အလုပ်ပမာဏများလွန်းခြင်း (Overload) အတွက် ဖြေရှင်းမည့် 'အစီအမံ' (対策) မဟုတ်ပါ။",
      memoryTipMY: "(၅) က ပုံမှန်အလုပ်လုပ်နည်းပဲ ဖြစ်ပါတယ်။"
    }
  },
  {
    id: "2-7",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>および<ruby>工作図作成<rt>こうさくずさくせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Shop Drawing နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>鉄骨製作業者<rt>てっこつせいさくしゃ</rt></ruby>が<ruby>当該工事<rt>とうがいこうじ</rt></ruby>の<ruby>設計図書<rt>せっけいとしょ</rt></ruby>に<ruby>盛<rt>も</rt></ruby>り<ruby>込<rt>こ</rt></ruby>まれた<ruby>設計内容<rt>せっけいないよう</rt></ruby>を<ruby>把握<rt>はあく</rt></ruby>し、<ruby>工場製作<rt>こうじょうせいさく</rt></ruby>のために<ruby>作成<rt>さくせい</rt></ruby>する。", textMY: "Shop Drawing ကို ထုတ်လုပ်သူက ဒီဇိုင်းပါအချက်များကို နားလည်ပြီး စက်ရုံတွင်ထုတ်လုပ်ရန် ရေးဆွဲသည်။" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>設計図<rt>せっけいず</rt></ruby>・<ruby>仕様書<rt>しようしょ</rt></ruby>とともに、<ruby>施工者<rt>せこうしゃ</rt></ruby>との<ruby>打合事項<rt>うちあわせじこう</rt></ruby>などもあわせて<ruby>検討<rt>けんとう</rt></ruby>して<ruby>作成<rt>さくせい</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "Shop Drawing သည် ဒီဇိုင်းပုံ၊ သတ်မှတ်ချက်နှင့် ဆွေးနွေးပွဲမှတ်တမ်းများအပေါ် အခြေခံရမည်။" },
      { id: 3, textJP: "(3) <ruby>工事中<rt>こうじちゅう</rt></ruby>での<ruby>設計変更<rt>せっけいへんこう</rt></ruby>は、<ruby>正確<rt>せいかく</rt></ruby>な<ruby>伝達<rt>でんたつ</rt></ruby>および<ruby>後々<rt>のちのち</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>のためにも、<ruby>書面<rt>しょめん</rt></ruby>にて<ruby>指示<rt>しじ</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける。", textMY: "ဒီဇိုင်းပြောင်းလဲမှုများကို တိကျရန်နှင့် နောင်တွင်အတည်ပြုနိုင်ရန် စာဖြင့်ညွှန်ကြားချက်ရယူရမည်။" },
      { id: 4, textJP: "(4) <ruby>承認<rt>しょうにん</rt></ruby>・<ruby>承諾後<rt>しょうだくご</rt></ruby>に<ruby>内容<rt>ないよう</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>は<ruby>変更日時<rt>へんこうにちじ</rt></ruby>・<ruby>変更内容<rt>へんこうないよう</rt></ruby>を<ruby>図面<rt>ずめん</rt></ruby>に<ruby>書<rt>か</rt></ruby>き<ruby>加<rt>くわ</rt></ruby>え、<ruby>指示者<rt>しじしゃ</rt></ruby>の<ruby>印<rt>いん</rt></ruby>またはサインを<ruby>得る<rt>える</rt></ruby>。", textMY: "အတည်ပြုပြီးနောက် ပြောင်းလဲပါက ရက်စွဲနှင့် အကြောင်းအရာကို ပုံတွင်ထည့်သွင်း၍ ညွှန်ကြားသူ၏ လက်မှတ်ရယူရမည်။" },
      { id: 5, textJP: "(5) <ruby>設計図書受領後<rt>せっけいとしょじゅりょうご</rt></ruby>、<ruby>打合<rt>うちあわ</rt></ruby>せを<ruby>行<rt>おこな</rt></ruby>った<ruby>結果<rt>けっか</rt></ruby>、<ruby>設計図書内容<rt>せっけいとしょないよう</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>する<ruby>場合<rt>ばあ</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>打合記録<rt>うちあわせきろく</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>する。", textMY: "ဒီဇိုင်းပုံလက်ခံပြီးနောက် ဆွေးနွေးမှုအရ ပြောင်းလဲပါက လိုအပ်သလို ဆွေးနွေးပွဲမှတ်တမ်းတွင် ရေးမှတ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 必ず記載 (Mandatory Recording)",
      reasonMY: "ဒီဇိုင်းစာရွက်စာတမ်း (設計図書) ၏ အကြောင်းအရာများကို ပြောင်းလဲခြင်းသည် အလွန်အရေးကြီးသောကြောင့် 'လိုအပ်မှ' (必要に応じて) မဟုတ်ဘဲ 'မဖြစ်မနေ' (必ず) ဆွေးနွေးပွဲမှတ်တမ်း သို့မဟုတ် စာဖြင့် မှတ်တမ်းတင်ထားရမည်။",
      memoryTipMY: "ဒီဇိုင်းပြောင်းရင် 'လိုအပ်မှ' မဟုတ်ဘူး၊ 'မဖြစ်မနေ' စာနဲ့ မှတ်တမ်းတင်ရမယ်။"
    }
  },
  {
    id: "2-8",
    questionJP: "<ruby>工作図<rt>こうさくず</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Shop Drawing နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>設計図書入手後<rt>せっけいとしょにゅうしゅご</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>した<ruby>設計変更<rt>せっけいへんこう</rt></ruby>や<ruby>追加事項<rt>ついかじこう</rt></ruby>が<ruby>正<rt>ただ</rt></ruby>しく<ruby>処理<rt>しょり</rt></ruby>されているかを<ruby>確認<rt>かくにん</rt></ruby>するうえでも、<ruby>不可欠<rt>ふかけつ</rt></ruby>なものである。", textMY: "Shop Drawing သည် ဒီဇိုင်းပြောင်းလဲမှုများ မှန်ကန်ကြောင်း အတည်ပြုရန်အတွက် မရှိမဖြစ်လိုအပ်သည်။" },
      { id: 2, textJP: "(2) <ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>設計図書<rt>せっけいとしょ</rt></ruby>に<ruby>代<rt>か</rt></ruby>わって<ruby>製作<rt>せいさく</rt></ruby>・<ruby>建方<rt>たてかた</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>指示書的役割<rt>しじしょてきやくわり</rt></ruby>を<ruby>果<rt>は</rt></ruby>たすものであり、<ruby>溶接施工<rt>ようせつせこう</rt></ruby>の<ruby>可否<rt>かひ</rt></ruby>や<ruby>輸送上<rt>ゆそうじょう</rt></ruby>の<ruby>重量制限<rt>じゅうりょうせいげん</rt></ruby>なども<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>作成<rt>さくせい</rt></ruby>する。", textMY: "Shop Drawing သည် ထုတ်လုပ်မှုနှင့် တပ်ဆင်မှုအတွက် ညွှန်ကြားချက်အဖြစ် လုပ်ဆောင်ပြီး အလေးချိန်ကန့်သတ်ချက်များကိုပါ ထည့်သွင်းစဉ်းစားရမည်။" },
      { id: 3, textJP: "(3) <ruby>工作図<rt>こうさくず</rt></ruby>には、<ruby>全鉄骨製品<rt>ぜんてっこつせいひん</rt></ruby>について<ruby>一品<rt>いっぴん</rt></ruby>ごとに<ruby>材質<rt>ざいしつ</rt></ruby>、<ruby>形状<rt>けいじょう</rt></ruby>、<ruby>寸法<rt>すんぽう</rt></ruby>、<ruby>数量<rt>すうりょう</rt></ruby>あるいは<ruby>接合部詳細<rt>せつごうぶしょうさい</rt></ruby>などが<ruby>明示<rt>めいじ</rt></ruby>されている<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "ပုံစံတွင် ပစ္စည်းတစ်ခုချင်းစီ၏ အမျိုးအစား၊ ပုံသဏ္ဍာန်၊ အရွယ်အစားနှင့် အဆက်အသေးစိတ်များကို ရှင်းလင်းစွာ ဖော်ပြရမည်။" },
      { id: 4, textJP: "(4) <ruby>工作図<rt>こうさくず</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>は、<ruby>手書<rt>てが</rt></ruby>きおよび CAD システムの<ruby>利用<rt>りよう</rt></ruby>のいずれの<ruby>方法<rt>ほうほう</rt></ruby>によってもよい。", textMY: "ပုံဆွဲရာတွင် လက်ဖြင့်ရေးဆွဲခြင်း သို့မဟုတ် CAD သုံးခြင်း တစ်ခုခုကို သုံးနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>鉄骨製作業者<rt>てっこつせいさくぎょうしゃ</rt></ruby>が<ruby>作成<rt>さくせい</rt></ruby>した<ruby>工作図<rt>こうさくず</rt></ruby>は、<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>が<ruby>施工性<rt>せこうせい</rt></ruby>や<ruby>構造細部<rt>こうぞうさいぶ</rt></ruby>の<ruby>納まり<rt>おさまり</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したのち、<ruby>施主<rt>せしゅ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受ける<rt>うける</rt></ruby><ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "ပုံဆွဲပြီးပါက ကြီးကြပ်သူက စစ်ဆေးပြီး ပိုင်ရှင် (Owner) ၏ အတည်ပြုချက်ကို ရယူရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 承認の権限",
      reasonMY: "Shop Drawing (工作図) သည် နည်းပညာဆိုင်ရာ အသေးစိတ်များ ဖြစ်သောကြောင့် 'ကြီးကြပ်သူ (監理者)' သို့မဟုတ် 'တည်ဆောက်သူ (施工者)' ၏ အတည်ပြုချက် ရယူရန်သာ လိုအပ်သည်။ ပိုင်ရှင် (施主) သည် အတည်ပြုရန် မလိုအပ်ပါ။",
      memoryTipMY: "Owner (ပိုင်ရှင်) သည် Technical drawing ကို အတည်ပြုရန် မလိုပါ။"
    }
  },
  {
    id: "2-9",
    questionJP: "<ruby>現寸<rt>げんすん</rt></ruby>および<ruby>現寸検査<rt>げんすんけんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Actual measurement (Full-scale) နှင့် စစ်ဆေးခြင်းဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>現寸作業<rt>げんすんさぎょう</rt></ruby>では、<ruby>承認済み<rt>しょうにんずみ</rt></ruby>の<ruby>工作図<rt>こうさくず</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づき、<ruby>工場製作<rt>こうじょうせいさく</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>定規<rt>じょうぎ</rt></ruby>や<ruby>型板<rt>かたいた</rt></ruby>あるいはフィルムなどを<ruby>作成<rt>さくせい</rt></ruby>する。", textMY: "အတည်ပြုပြီးသော Shop drawing ကို အခြေခံ၍ စက်ရုံထုတ်လုပ်မှုအတွက် လိုအပ်သော ပုံစံခွက်များကို ပြုလုပ်သည်။" },
      { id: 2, textJP: "(2) <ruby>定規、型板<rt>じょうぎ、かたいた</rt></ruby>などには、<ruby>工事名称、部材マーク、製作数量、鋼種、切断線、基準線、曲げ位置、開先形状<rt>こうじめいしょう、ぶざいまーく、せいさくすうりょう、こうしゅ、せつだんせん、きじゅんせん、まげいち、かいさきけいじょう</rt></ruby>などを<ruby>記入<rt>きにゅう</rt></ruby>する。", textMY: "ပုံစံခွက်များတွင် လုပ်ငန်းအမည်၊ အမှတ်အသား၊ အရေအတွက်၊ ပစ္စည်းအမျိုးအစား၊ ဖြတ်လိုင်း၊ စံလိုင်း စသည်တို့ကို ရေးသားရမည်။" },
      { id: 3, textJP: "(3) <ruby>現寸作業<rt>げんすんさぎょう</rt></ruby>では、<ruby>基本寸法、階高、軒高、部材の大きさ、板厚、鋼種、工場溶接に支障はないか<rt>きほんすんぽう、かいだか、のきだか、ぶざいのおおきさ、いたあつ、こうしゅ、こうじょうようせつにししょうはないか</rt></ruby>などのチェックを行う。", textMY: "အခြေခံအရွယ်အစား၊ အထူ၊ အမျိုးအစား၊ ဂဟေဆက်ရန် အခက်အခဲ စသည်တို့ကို စစ်ဆေးရမည်။" },
      { id: 4, textJP: "(4) <ruby>工作図<rt>こうさくず</rt></ruby>で<ruby>加工<rt>かこう</rt></ruby>のための<ruby>指示事項<rt>しじじこう</rt></ruby>が<ruby>明確<rt>めいかく</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>され、かつ、かつてにおける<ruby>施工性<rt>せこうせい</rt></ruby>についても<ruby>検討・解決<rt>けんとう・かいけつ</rt></ruby>されているものであれば、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>事前<rt>じぜん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>を<ruby>得<rt>え</rt></ruby>て、<ruby>現寸検査<rt>げんすんけんさ</rt></ruby>を<ruby>省略<rt>しょうりゃく</rt></ruby>できる。", textMY: "Shop drawing တွင် ညွှန်ကြားချက်များ ရှင်းလင်းပြီး တည်ဆောက်နိုင်မှု ပြဿနာများ ပြေလည်နေပါက 現寸検査 ကို ချန်လှပ်နိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>工場製作<rt>こうじょうせいさく</rt></ruby>の<ruby>各工程<rt>かくこうてい</rt></ruby>において<ruby>使用<rt>しよう</rt></ruby>する<ruby>鋼製巻尺<rt>こうせいまきじゃく</rt></ruby>は、<ruby>工場製作標準巻尺<rt>こうじょうせいさくひょうじゅんまきじゃく</rt></ruby>と<ruby>照合<rt>しょうごう</rt></ruby>し、その<ruby>目盛<rt>めもり</rt></ruby>の<ruby>差<rt>さ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "အသုံးပြုသော တိပ်တိုင်းများကို စက်ရုံစံနှုန်းတိပ်တိုင်းနှင့် တိုက်ဆိုင်စစ်ဆေးရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 現寸検査の原則",
      reasonMY: "現寸検査 (Actual measurement) သည် အတိုင်းအတာ တိကျမှုအတွက် အလွန်အရေးကြီးသောကြောင့် Shop drawing ကောင်းမွန်ရုံဖြင့် ချန်လှပ်ထားခြင်း (省略) လုံးဝမပြုရပါ။",
      memoryTipMY: "現寸検査 (Full-scale test) သည် မရှိမဖြစ် လိုအပ်သည်။"
    }
  },
  {
    id: "2-10",
    questionJP: "「JASS 6」に<ruby>基<rt>もと</rt></ruby>づき<ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိအပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>設備貫通用孔<rt>せつびかんつうようあな</rt></ruby>の<ruby>孔径<rt>こうけい</rt></ruby> 50mm の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、<ruby>プラズマ孔あけ<rt>ぷらずまあなあけ</rt></ruby>とした。", textMY: "၅၀ mm အပေါက်ကို Plasma cutting ဖြင့် ဖောက်ခဲ့သည်။" },
      { id: 2, textJP: "(2) <ruby>鉄筋貫通孔<rt>てっきんかんつうこう</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>で<ruby>板厚<rt>いたあつ</rt></ruby> 12mm の<ruby>場合<rt>ばあい</rt></ruby>は、せん<ruby>断孔あけ<rt>だんあなあけ</rt></ruby>とした。", textMY: "အထူ ၁၂ mm ရှိသော သံချောင်းဖောက်ပေါက်ကို punch (shear) ဖြင့် ဖောက်ခဲ့သည်။" },
      { id: 3, textJP: "(3) <ruby>高力ボルト孔<rt>こうりょくぼるとあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、ドリルあけとするが、<ruby>特記<rt>とっき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>または<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>場合<rt>ばあい</rt></ruby>は、レーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>とすることができる。", textMY: "HS bolt ပေါက်များကို drill ဖြင့်ဖောက်ရမည်ဖြစ်သော်လည်း ခွင့်ပြုချက်ရပါက laser ဖြင့်လည်း ဖောက်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>高力ボルト孔、ボルト孔<rt>こうりょくぼるとあな、ぼるとあな</rt></ruby>などをレーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>とする<ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶損部<rt>ようそんぶ</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>孔径<rt>こうけい</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>は ±0.5mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "Laser ဖြင့် အပေါက်ဖောက်ပါက တိကျမှုမှာ ±0.5mm အောက် ဖြစ်ရမည်။" },
      { id: 5, textJP: "(5) M24 の<ruby>アンカーボルト用孔<rt>あんかーぼるとようあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、<ruby>プラズマ孔あけ<rt>ぷらずまあなあけ</rt></ruby>とした。", textMY: "M24 anchor bolt အပေါက်ကို Plasma cutting ဖြင့် ဖောက်ခဲ့သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - アンカーボルト孔の加工",
      reasonMY: "Anchor bolt အပေါက်များသည် တိကျမှုမြင့်မားရန် လိုအပ်သောကြောင့် Plasma သို့မဟုတ် Gas မီးဖြင့် ဖောက်ခြင်း မပြုရဘဲ 'ဒရယ်' (Drilling) ဖြင့်သာ ဖောက်ရမည်။",
      memoryTipMY: "Anchor bolt hole = Drilling (ဒရယ်)။"
    }
  },
  {
    id: "2-11",
    questionJP: "「JASS 6」に<ruby>基<rt>もと</rt></ruby>づき<ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふ適当</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိအပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>内外装用<rt>ないがいそうよう</rt></ruby>の<ruby>付属金物<rt>ふぞくかなもの</rt></ruby>の<ruby>孔径<rt>こうけい</rt></ruby> 50mm の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、ガス<ruby>孔あけ<rt>あなあけ</rt></ruby>とした。", textMY: "အတွင်း/အပြင် တပ်ဆင်ပစ္စည်းများအတွက် ၅၀ mm အပေါက်ကို gas ဖြင့် ဖောက်ခဲ့သည်။" },
      { id: 2, textJP: "(2) <ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>貫通孔<rt>かんつうこう</rt></ruby>の<ruby>孔径<rt>こうけい</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>がなかったので<ruby>異形鉄筋<rt>いけいてっきん</rt></ruby>では<ruby>鉄筋径<rt>てっきんけい</rt></ruby> +15mm とした。", textMY: "သံချောင်းဖောက်ပေါက်အတွက် အထူးသတ်မှတ်ချက်မရှိသဖြင့် သံချောင်းအချင်း + ၁၅ mm ထားခဲ့သည်။" },
      { id: 3, textJP: "(3) <ruby>アンカーボルト孔、鉄筋貫通孔<rt>あんかーぼるとあな、てっきんかんつうこう</rt></ruby>などをレーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>としたので、<ruby>溶損部<rt>ようそんぶ</rt></ruby>は<ruby>応力上支障<rt>おうりょくじょうししょう</rt></ruby>の<ruby>少<rt>すく</rt></ruby>ない<ruby>位置<rt>いち</rt></ruby>とした。", textMY: "Laser ဖြင့်ဖောက်သောအခါ အပူကြောင့်ပျက်စီးသောနေရာမှာ stress နည်းသောနေရာတွင် ရှိရမည်။" },
      { id: 4, textJP: "(4) <ruby>高力ボルト孔<rt>こうりょくぼるとあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けてレーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>とすることができる。", textMY: "ခွင့်ပြုချက်ရပါက HS bolt ပေါက်များကို laser ဖြင့် ဖောက်နိုင်သည်။" },
      { id: 5, textJP: "(5) M30 の<ruby>アンカーボルト用孔<rt>あんかーぼるとようあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、ドリルあけとした。", textMY: "M30 anchor bolt အပေါက်ကို drill ဖြင့် ဖောက်ခဲ့သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 鉄筋貫通孔の余白",
      reasonMY: "သံချောင်းဖောက်ပေါက် (鉄筋貫通孔) အတွက် ခွင့်ပြုထားသော အပိုအကျယ်မှာ များသောအားဖြင့် +၁၀ mm (10mm) ခန့်သာ ဖြစ်ရမည်။ ၁၅ mm ဆိုသည်မှာ အပေါက် ကြီးလွန်နေသည်။",
      memoryTipMY: "Rebar hole = +10mm ခန့်။"
    }
  },
  {
    id: "2-12",
    questionJP: "「JASS 6」に<ruby>基<rt>もと</rt></ruby>づき<ruby>鋼材<rt>こうざい</rt></ruby>に<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふ適当</rt></ruby>なものはどれか。",
    questionMY: "JASS 6 အရ သံမဏိအပေါက်ဖောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>設備貫通用孔<rt>せつびかんつうようあな</rt></ruby>の<ruby>孔径<rt>こうけい</rt></ruby> 50mm の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、ガス<ruby>孔あけ<rt>あなあけ</rt></ruby>とした。", textMY: "၅၀ mm ပိုက်ဖောက်ပေါက်ကို gas ဖြင့် ဖောက်ခဲ့သည်။" },
      { id: 2, textJP: "(2) <ruby>ボルト孔<rt>ぼるとあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>で<ruby>板厚<rt>いたあつ</rt></ruby> 12mm の<ruby>場合<rt>ばあい</rt></ruby>は、せん<ruby>断孔あけ<rt>だんあなあけ</rt></ruby>とした。", textMY: "အထူ ၁၂ mm ရှိသော bolt ပေါက်ကို punch (shear) ဖြင့် ဖောက်ခဲ့သည်။" },
      { id: 3, textJP: "(3) <ruby>高力ボルト孔<rt>こうりょくぼるとあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、ドリルあけとするが、<ruby>特記<rt>とっき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>または<ruby>工事監理者<rt>こうじかんりしゃ</rt></ruby>の<ruby>承認<rt>しょうにん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた<ruby>場合<rt>ばあい</rt></ruby>は、レーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>とすることができる。", textMY: "HS bolt ပေါက်များကို drill ဖြင့်ဖောက်ရမည်ဖြစ်သော်လည်း laser ဖြင့်လည်း ဖောက်နိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>高力ボルト孔、ボルト孔<rt>こうりょくぼるとあな、ぼるとあな</rt></ruby>などをレーザ<ruby>孔あけ<rt>あなあけ</rt></ruby>とする<ruby>場合<rt>ばあい</rt></ruby>、<ruby>溶損部<rt>ようそんぶ</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>孔径<rt>こうけい</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>は ±1.0mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "Laser ဖြင့် အပေါက်ဖောက်ပါက အပူကြောင့်ပျက်စီးသောနေရာအပါအဝင် တိကျမှုမှာ ±1.0mm အောက် ဖြစ်ရမည်။" },
      { id: 5, textJP: "(5) M24 の<ruby>アンカーボルト用孔<rt>あんかーぼるとようあな</rt></ruby>の<ruby>孔あけ加工<rt>あなあけかこう</rt></ruby>は、ドリルあけとした。", textMY: "M24 anchor bolt အပေါက်ကို drill ဖြင့် ဖောက်ခဲ့သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - レーザ孔あけの精度",
      reasonMY: "Laser ဖြင့် အပေါက်ဖောက်ရာတွင် အပူကြောင့် အရည်ပျော်မှု (溶損部) ကိုပါ ထည့်သွင်းစဉ်းစား၍ အပေါက်အချင်း၏ တိကျမှု (精度) သည် '±0.5mm အောက်' သာ ရှိရမည်ဖြစ်သည်။ ±1.0mm ဆိုသည်မှာ များလွန်သည်။",
      memoryTipMY: "Laser accuracy = ±0.5mm။"
    }
  },
  {
    id: "2-13",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>・<ruby>切削加工<rt>せっさくかこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断方法<rt>せつだんほうほう</rt></ruby>には、<ruby>機械切断法<rt>きかいせつだんほう</rt></ruby>、ガス<ruby>切断法<rt>せつだんほう</rt></ruby>、プラズマ<ruby>切断法<rt>せつだんほう</rt></ruby>などがある၏ <ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>形状・寸法<rt>けいじょう・すんぽう</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>選択<rt>せんたく</rt></ruby>する。", textMY: "သံမဏိဖြတ်တောက်နည်းများထဲမှ ပစ္စည်း၏ပုံသဏ္ဍာန်အလိုက် သင့်လျော်သောနည်းလမ်းကို ရွေးချယ်ရမည်။" },
      { id: 2, textJP: "(2) ガス<ruby>切断<rt>せつだん</rt></ruby>は<ruby>原則<rt>げんそく</rt></ruby>として<ruby>自動ガス切断<rt>じどうがすせつだん</rt></ruby>とするが、<ruby>スカラップ加工<rt>すからっぷかこう</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いるアタッチメント<ruby>付き手動ガス切断機<rt>つきてしゅどうがすせつだんき</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "Gas ဖြတ်ရာတွင် အလိုအလျောက်စက်သုံးရမည်ဖြစ်သော်လည်း scallop ဖောက်ရာတွင် လက်ဖြတ်စက်ကို သုံးနိုင်သည်။" },
      { id: 3, textJP: "(3) <ruby>開先加工面<rt>かいさきかこうめん</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>で<ruby>粗<rt>あら</rt></ruby>さ 100μmRz <ruby>以下<rt>いか</rt></ruby>、ノッチ<ruby>深<rt>ふか</rt></ruby>さ 2.0mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "ဂဟေမြောင်းမျက်နှာပြင်၏ notch အနက် ၂.၀ mm အောက် ဖြစ်ရမည်ဟု ဆိုခြင်း။" },
      { id: 4, textJP: "(4) ガス<ruby>切断縁<rt>せつだんふち</rt></ruby>の<ruby>上縁<rt>じょうえん</rt></ruby>の<ruby>溶<rt>と</rt></ruby>けは、<ruby>切断速度<rt>せつだんそくど</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>すぎたり、<ruby>切断酸素圧力<rt>せつだんさんそあつりょく</rt></ruby>が<ruby>不足<rt>ふそく</rt></ruby>している<ruby>場合<rt>ばあい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じやすい。", textMY: "ဖြတ်စအစွန်းများ အရည်ပျော်ခြင်းမှာ ဖြတ်နှုန်းနှေးလွန်းခြင်း သို့မဟုတ် oxygen ဖိအားနည်းလွန်းခြင်းကြောင့် ဖြစ်တတ်သည်။" },
      { id: 5, textJP: "(5) <ruby>機械加工<rt>きかいかこう</rt></ruby>で<ruby>切断油<rt>せつだんゆ</rt></ruby>が<ruby>開先面<rt>かいさきめん</rt></ruby>に<ruby>付着<rt>ふちゃく</rt></ruby>していると、<ruby>ブローホール<rt>ぶろーほーる</rt></ruby>などの<ruby>発生原因<rt>はっせいげんいん</rt></ruby>となるので、<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "ဖြတ်တောက်ဆီများ ကပ်နေပါက ဂဟေတွင် လေခိုပေါက်ဖြစ်စေနိုင်သဖြင့် ဖယ်ရှားရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - ノッチ深さ",
      reasonMY: "ဂဟေမြောင်း (Bevel) မျက်နှာပြင်၏ Notch အနက် ခွင့်ပြုချက်မှာ '၁.၀ mm အောက်' (1.0mm 以下) သာ ဖြစ်ရမည်။ ၂.၀ mm သည် များလွန်းသဖြင့် မသင့်လျော်ပါ။",
      memoryTipMY: "Bevel Notch Limit = 1.0mm။"
    }
  },
  {
    id: "2-14",
    questionJP: "<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>・<ruby>切削加工<rt>せっさくかこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိဖြတ်တောက်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>メタルタッチ<rt>めたるたっち</rt></ruby>が<ruby>指定<rt>してい</rt></ruby>されている<ruby>部分<rt>ぶぶん</rt></ruby>は、フェーシングマシンまたはロータリープレーナーなどの<ruby>切削加工機<rt>せっさくかこうき</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>し、<ruby>部材相互<rt>ぶざいそうご</rt></ruby>が<ruby>十分密着<rt>じゅうぶんみっちゃく</rt></ruby>するように<ruby>加工<rt>かこう</rt></ruby>する。", textMY: "Metal touch နေရာများကို စက်ဖြင့် တိကျစွာကပ်နေအောင် ပြုလုပ်ရမည်။" },
      { id: 2, textJP: "(2) <ruby>せん断切断<rt>せんだんせつだん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>は、13mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "Punch ဖြတ်ခြင်းကို ၁၃ mm အောက်ပြားများတွင်သာ လုပ်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>開先加工面<rt>かいさきかこうめん</rt></ruby>の<ruby>精度<rt>せいど</rt></ruby>は、<ruby>特記<rt>とっき</rt></ruby>のない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>限界許容差<rt>げんかいきょようさ</rt></ruby>で<ruby>粗<rt>あら</rt></ruby>さ 100μmRz <ruby>以下<rt>いか</rt></ruby>、ノッチ<ruby>深<rt>ふか</rt></ruby>さ 1.0mm <ruby>以下<rt>いか</rt></ruby>とする。", textMY: "Bevel မျက်နှာပြင် တိကျမှုမှာ ကြမ်းတမ်းမှု ၁၀၀ နှင့် notch ၁.၀ mm အောက် ဖြစ်ရမည်။" },
      { id: 4, textJP: "(4) ガス<ruby>切断線<rt>せつだんせん</rt></ruby>の<ruby>上縁<rt>じょうえん</rt></ruby>の<ruby>溶<rt>と</rt></ruby>けは、<ruby>切断酸素圧力<rt>せつだんさんそあつりょく</rt></ruby>が<ruby>高<rt>たか</rt></ruby>すぎたり、<ruby>切断速度<rt>せつだんそくど</rt></ruby>が<ruby>速<rt>はや</rt></ruby>すぎる<ruby>場合<rt>ばあい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じやすい。", textMY: "အစွန်းများအရည်ပျော်ခြင်းမှာ oxygen ဖိအားမြင့်လွန်းခြင်း သို့မဟုတ် ဖြတ်နှုန်းမြန်လွန်းခြင်းကြောင့် ဖြစ်တတ်သည်ဟု ဆိုခြင်း။" },
      { id: 5, textJP: "(5) <ruby>切断面<rt>せつだんめん</rt></ruby>において、<ruby>粗<rt>あら</rt></ruby>さやノッチ<ruby>深<rt>ふか</rt></ruby>さの<ruby>精度<rt>せいど</rt></ruby>が<ruby>確保<rt>かくほ</rt></ruby>できないものについては、グラインダなどにより<ruby>修正<rt>しゅうせい</rt></ruby>する。", textMY: "ဖြတ်တောက်မှု မချောမွေ့ပါက grinder ဖြင့် ပြန်လည်ပြုပြင်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 溶けの原因",
      reasonMY: "ဖြတ်စအစွန်းများ အရည်ပျော်ခြင်း (溶け) သည် အပူဝင်ရောက်မှု လွန်ကဲခြင်းကြောင့် ဖြစ်ရသည်။ ဖြတ်နှုန်း 'နှေးလွန်းခြင်း' (遅すぎる) ကြောင့်သာ ဖြစ်ပေါ်လွယ်သည်။ မြန်လျှင် အပူဝင်ချိန်နည်းသဖြင့် အရည်မပျော်ပါ။",
      memoryTipMY: "အရည်ပျော်တာက နှေးလို့ (Slow speed) ဖြစ်တာပါ။"
    }
  },
  {
    id: "2-15",
    questionJP: "「JASS 6」における<ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "HS Bolt ၏ ပွတ်တိုက်မျက်နှာပြင် ပြုပြင်ခြင်းနှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
      { id: 1, textJP: "(1) <ruby>発錆<rt>はっせい</rt></ruby>による<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>は<ruby>座金径<rt>ざがねけい</rt></ruby>の 2 <ruby>倍<rt>ばい</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>とする。", textMY: "သံချေးတက်စေခြင်းဖြင့် မျက်နှာပြင်ပြင်ဆင်ပါက Washer အချင်း၏ ၂ ဆ ဧရိယာအထိ လုပ်ဆောင်ရမည်ဟု ဆိုခြင်း။" },
      { id: 2, textJP: "(2) <ruby>高力ボルト接合部<rt>こうりょくぼるとせつごうぶ</rt></ruby>に 1mm を<ruby>超<rt>こ</rt></ruby>える<ruby>肌すき<rt>はだすき</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>両面<rt>りょうめん</rt></ruby>とも<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>したフィラープレートを<ruby>入<rt>い</rt></ruby>れる。", textMY: "၁ mm ထက်ကျော်သော ကွာဟချက်ရှိလျှင် နှစ်ဖက်လုံး မျက်နှာပြင်ပြင်ဆင်ထားသော Filler plate ထည့်ရမည်။" },
      { id: 3, textJP: "(3) <ruby>高力ボルト接合面<rt>こうりょくぼるとせつごうめん</rt></ruby>の<ruby>摩擦面処理<rt>まさつめんしょり</rt></ruby>をブラスト<ruby>処理<rt>しょり</rt></ruby>とする<ruby>場合<rt>ばあい</rt></ruby>、ショットブラストおよびグリットブラストを<ruby>使用<rt>しよう</rt></ruby>できる。", textMY: "Blast ဖြင့်ပြင်ဆင်ရာတွင် Shot သို့မဟုတ် Grit blast ကို သုံးနိုင်သည်။" },
      { id: 4, textJP: "(4) <ruby>板厚<rt>いたあつ</rt></ruby> 6mm <ruby>未満<rt>みまん</rt></ruby>の<ruby>軽量形鋼<rt>けいりょうかたこう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>し、<ruby>設計上<rt>せっけいじょう</rt></ruby>すべり<ruby>係数<rt>けいすう</rt></ruby>を 0.45/2 (<ruby>約<rt>やく</rt></ruby> 0.23) と<ruby>する場合<rt>ばあい</rt></ruby>、<ruby>摩擦面<rt>まさつめん</rt></ruby>は<ruby>黒皮<rt>くろかわ</rt></ruby>のままとする。", textMY: "၆ mm အောက်ပြားများကိုသုံးပြီး ပွတ်တိုက်မှုကိန်း ၀.၂၃ သတ်မှတ်ပါက မူလအတိုင်း ထားနိုင်သည်။" },
      { id: 5, textJP: "(5) <ruby>高力ボルト摩擦面処理<rt>こうりょくぼるとまさつめんしょり</rt></ruby>でブラスト<ruby>後<rt>ご</rt></ruby>にボルト<ruby>孔周辺<rt>あなひゅうへん</rt></ruby>にバリ<ruby>取り<rt>とり</rt></ruby>などの<ruby>修正<rt>しゅうせい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>った<ruby>場合<rt>ばあい</rt></ruby>、この<ruby>部分<rt>ぶぶん</rt></ruby>については<ruby>赤さび状態<rt>あかさびじょうたい</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "Blast ပြီးနောက် အပေါက်ဘေးကို ပြုပြင်ခဲ့လျှင် ထိုနေရာသည် နီညိုရောင်သံချေးတက်နေသည့်အခြေအနေ ရှိရမည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက် - 摩擦面処理の範囲",
      reasonMY: "သံချေးတက်စေခြင်း (発錆) ဖြင့် ပွတ်တိုက်မျက်နှာပြင်ကို ပြင်ဆင်ရာတွင် ထိုဧရိယာသည် Washer အချင်း၏ ၂ ဆ မဟုတ်ဘဲ၊ 'ပစ္စည်းများ ထိတွေ့နေသော ဧရိယာအားလုံး' ကို လွှမ်းခြုံရမည်ဖြစ်သည်။",
      memoryTipMY: "Friction area သည် washer ထက် ပိုကျယ်ရမည်။"
    }
  }
];
