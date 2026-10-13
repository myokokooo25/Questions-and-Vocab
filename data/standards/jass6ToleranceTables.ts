export interface ToleranceRow {
  id: string;
  itemJP: string;
  itemMY: string;
  standardValueJP: string;
  standardValueMY: string;
  controlToleranceJP: string; // 管理許容差
  controlToleranceMY: string;
  limitToleranceJP: string;   // 限界許容差
  limitToleranceMY: string;
  remedyActionMY: string;     // 限界超過時の処置・補修 (Remedy)
  notes?: string;
}

export interface ToleranceCategoryGroup {
  id: string;
  titleJP: string;
  titleMY: string;
  descriptionMY: string;
  badge: string;
  rows: ToleranceRow[];
}

export const JASS6_TOLERANCE_GROUPS: ToleranceCategoryGroup[] = [
  {
    id: 'groove_assembly',
    titleJP: '1. 溶接開先加工・組立精度 (Groove Preparation & Assembly)',
    titleMY: '၁။ ဂဟေအထစ် (Groove) ပုံဖော်ခြင်းနှင့် တပ်ဆင်မှုတိကျမှု စံနှုန်းများ',
    descriptionMY: 'JASS 6 အရ ဂဟေမဆော်မီ အထစ်ဖော်ခြင်း (開先) နှင့် Backing metal တပ်ဆင်မှုဆိုင်ရာ ခွင့်ပြု အလျှော့အတင်းများ',
    badge: 'JASS 6 溶接開先',
    rows: [
      {
        id: 'ga-01',
        itemJP: '裏当て金あり ルート間隙 (Root Gap with Backing Metal)',
        itemMY: 'Backing Metal ပါသော ဂဟေအထစ်ကြားဟမှု (Root Gap)',
        standardValueJP: '標準 7.0 mm',
        standardValueMY: 'ပုံမှန်စံနှုန်း: 7.0 mm',
        controlToleranceJP: '±1.5 mm (5.5 mm 〜 8.5 mm)',
        controlToleranceMY: '±1.5 mm (5.5 mm မှ 8.5 mm)',
        limitToleranceJP: '±3.0 mm (4.0 mm 〜 10.0 mm)',
        limitToleranceMY: '±3.0 mm (4.0 mm မှ 10.0 mm)',
        remedyActionMY: '9mm မှ 16mm အတွင်း: အထစ်မျက်နှာပြင်တွင် ဂဟေသားမို့ဖြည့် (肉盛り溶接/Buttering) ပြီး ပြန်လည်ပြင်ဆင်နိုင်သည်။ 16mm ကျော်လွန်ပါက သံပြားအသစ် ပြန်လဲရမည် (全面取替え)။',
        notes: '試験頻出: 肉盛り補修限界は「16mm 以下」'
      },
      {
        id: 'ga-02',
        itemJP: '裏当て金なし ルート間隙 (Root Gap without Backing Metal)',
        itemMY: 'Backing Metal မပါသော ပုံမှန်ဂဟေအထစ်ကြားဟမှု',
        standardValueJP: '標準 0 mm 〜 2.0 mm',
        standardValueMY: 'ပုံမှန်စံနှုန်း: 0 mm မှ 2.0 mm',
        controlToleranceJP: '±1.0 mm',
        controlToleranceMY: '±1.0 mm',
        limitToleranceJP: '±1.5 mm',
        limitToleranceMY: '±1.5 mm',
        remedyActionMY: 'ကျဉ်းလွန်းပါက Grinder ဖြင့် ပြန်လည်ချဲ့ပေးရမည်။ ကျယ်လွန်းပါက သတ်မှတ်ချက်အတွင်း ဂဟေသားဖြည့်ပြင်ဆင်ရမည်။',
        notes: '両面溶接時は裏はつり（ガウジング）で健全な金属面を露出させる'
      },
      {
        id: 'ga-03',
        itemJP: '開先角度 (Groove Angle - V形 / レ形)',
        itemMY: 'ဂဟေအထစ် ထောင့်ချိုး (Groove Angle - V / Single Bevel)',
        standardValueJP: '標準 35° (J形) / 45° (V形)',
        standardValueMY: 'စံနှုန်း: 35° သို့မဟုတ် 45°',
        controlToleranceJP: '±5°',
        controlToleranceMY: '±5° (၄၀° မှ ၅၀°)',
        limitToleranceJP: '±10°',
        limitToleranceMY: '±10° (၃၅° မှ ၅၅°)',
        remedyActionMY: 'ထောင့်ချိုး မပြည့်ပါက Grinder သို့မဟုတ် Gas Cutting ဖြင့် ပြန်လည်ဖြတ်တောက် ပုံဖော်ရမည်။',
        notes: '角度不足は溶込み不良（Incomplete Penetration）の原因'
      },
      {
        id: 'ga-04',
        itemJP: 'ルートフェイス (Root Face Height)',
        itemMY: 'ဂဟေအထစ်အောက်ခြေ အတုံးမျက်နှာပြင် (Root Face)',
        standardValueJP: '標準 0 mm 〜 2.0 mm',
        standardValueMY: 'စံနှုန်း: 0 mm မှ 2.0 mm',
        controlToleranceJP: '±1.0 mm',
        controlToleranceMY: '±1.0 mm',
        limitToleranceJP: '±2.0 mm',
        limitToleranceMY: '±2.0 mm',
        remedyActionMY: 'အထူများလွန်းပါက အတွင်းသို့ ဂဟေရည် မရောက်နိုင်သဖြင့် Grinder ဖြင့် ပြန်လည်သွေးရမည်။',
        notes: '完全溶け込み溶接では特に重要'
      },
      {
        id: 'ga-05',
        itemJP: '突合せ継手の食い違い・目違い (Butt Joint Misalignment)',
        itemMY: 'မျက်နှာချင်းဆိုင်ဂဟေဆက် သံပြားလွဲချော်မှု (Misalignment)',
        standardValueJP: '0 mm (အပြိုင်ညီ)',
        standardValueMY: '0 mm (မျက်နှာပြင် တစ်ပြေးညီ)',
        controlToleranceJP: 't/10 以下 かつ 2.0 mm 以下',
        controlToleranceMY: 'သံပြားအထူ t ၏ 1/10 နှင့် 2.0 mm အောက်',
        limitToleranceJP: 't/8 以下 かつ 3.0 mm 以下',
        limitToleranceMY: 'သံပြားအထူ t ၏ 1/8 နှင့် 3.0 mm အောက်',
        remedyActionMY: 'ကန့်သတ်ချက်ထက် ကျော်လွန်ပါက 1:2.5 ထက် မတ်စောက်မှုမရှိသော ပြေပြစ်သည့် မျက်နှာပြင် (Slope 1:2.5 以下の勾配) ဖြစ်အောင် Grinder ဖြင့် ပြေပြစ်စွာ သွေးပေးရမည်။',
        notes: '段差は応力集中の原因となる'
      },
      {
        id: 'ga-06',
        itemJP: 'T継手・十字継手 ウェブの偏心 (T-Joint Web Eccentricity)',
        itemMY: 'T-Joint နှင့် ကြက်ခြေခတ်အဆစ်များတွင် Web ပြား ဗဟိုလွဲမှု',
        standardValueJP: '0 mm (ဗဟိုတည့်တည့်)',
        standardValueMY: '0 mm (Centerline ညီညာမှု)',
        controlToleranceJP: 'tw / 3 以下 かつ 3.0 mm 以下',
        controlToleranceMY: 'Web အထူ tw ၏ 1/3 နှင့် 3.0 mm အောက်',
        limitToleranceJP: 'tw / 2 以下 かつ 5.0 mm 以下',
        limitToleranceMY: 'Web အထူ tw ၏ 1/2 နှင့် 5.0 mm အောက်',
        remedyActionMY: 'ကန့်သတ်ချက် ကျော်လွန်ပါက အဆစ်နေရာ ဖြုတ်သိမ်းပြီး အသစ်ပြန်လည်ချိန်ညှိရမည်။',
        notes: 'tw: ウェブ厚 (Web thickness)'
      },
      {
        id: 'ga-07',
        itemJP: '裏当て金と母材のすき間 (Gap between Backing & Base Metal)',
        itemMY: 'အတွင်းခံသံပြား (Backing) နှင့် မူလသံပြားကြား ဟာနေမှု',
        standardValueJP: '0 mm (ကပ်လျက်)',
        standardValueMY: '0 mm (လုံးဝ ကပ်နေရမည်)',
        controlToleranceJP: '1.0 mm 以下',
        controlToleranceMY: '1.0 mm အောက်သာ',
        limitToleranceJP: '2.0 mm 以下',
        limitToleranceMY: '2.0 mm အောက်သာ',
        remedyActionMY: 'ဟနေပါက မောင်းနှင်ဖိကပ်ခြင်း သို့မဟုတ် ဂဟေသားဖြင့် အပေါက်မကျွံစေရန် သေချာဖာထေးရမည်။',
        notes: 'すき間過大は溶け落ち（スルー）の原因'
      }
    ]
  },
  {
    id: 'weld_defects',
    titleJP: '2. 溶接ビード形状・欠陥・余盛 (Weld Shape & Defect Limits)',
    titleMY: '၂။ ဂဟေသားပုံသဏ္ဌာန်၊ မို့တက်မှု (余盛) နှင့် ချို့ယွင်းချက် ကန့်သတ်ချက်များ',
    descriptionMY: 'ဂဟေဆော်ပြီးနောက် မျက်နှာပြင်မို့တက်မှု (余盛)၊ Undercut၊ Pit စသည်တို့၏ စစ်ဆေးရေး ခွင့်ပြုချက်များ',
    badge: 'JASS 6 溶接欠陥',
    rows: [
      {
        id: 'wd-01',
        itemJP: '突合せ溶接 余盛の高さ (Butt Weld Reinforcement: t < 12mm)',
        itemMY: 'သံပြားအထူ 12mm အောက် မျက်နှာချင်းဆိုင်ဂဟေ မို့တက်မှု (余盛)',
        standardValueJP: '0 mm 〜 2.0 mm',
        standardValueMY: 'ပုံမှန်: 0 mm မှ 2.0 mm',
        controlToleranceJP: '0 mm 〜 2.0 mm',
        controlToleranceMY: '0 mm မှ 2.0 mm',
        limitToleranceJP: '0 mm 〜 3.0 mm',
        limitToleranceMY: '0 mm မှ 3.0 mm အထိ',
        remedyActionMY: '3.0 mm ထက် မြင့်ပါက အစွန်းပိုင်း အားစုပြုံမှုမဖြစ်စေရန် Grinder ဖြင့် ပြေပြစ်အောင် သွေးရမည်။',
        notes: '余盛過大は疲労強度を低下させる'
      },
      {
        id: 'wd-02',
        itemJP: '突合せ溶接 余盛の高さ (Butt Weld Reinforcement: 12 ≤ t < 25mm)',
        itemMY: 'သံပြားအထူ 12mm မှ 25mm အောက် ဂဟေမို့တက်မှု (余盛)',
        standardValueJP: '0 mm 〜 3.0 mm',
        standardValueMY: 'ပုံမှန်: 0 mm မှ 3.0 mm',
        controlToleranceJP: '0 mm 〜 3.0 mm',
        controlToleranceMY: '0 mm မှ 3.0 mm',
        limitToleranceJP: '0 mm 〜 4.0 mm',
        limitToleranceMY: '0 mm မှ 4.0 mm အထိ',
        remedyActionMY: '4.0 mm ထက် မြင့်ပါက Grinder ဖြင့် ပြေပြစ်စွာ သွေးချရမည်။',
        notes: '境界部（止端部）は滑らかに仕上げる'
      },
      {
        id: 'wd-03',
        itemJP: '突合せ溶接 余盛の高さ (Butt Weld Reinforcement: t ≥ 25mm)',
        itemMY: 'သံပြားအထူ 25mm အထက် အထူကြီးများအတွက် ဂဟေမို့တက်မှု',
        standardValueJP: '0 mm 〜 4.0 mm',
        standardValueMY: 'ပုံမှန်: 0 mm မှ 4.0 mm',
        controlToleranceJP: '0 mm 〜 4.0 mm',
        controlToleranceMY: '0 mm မှ 4.0 mm',
        limitToleranceJP: '0 mm 〜 5.0 mm',
        limitToleranceMY: '0 mm မှ 5.0 mm အထိ',
        remedyActionMY: '5.0 mm ကျော်လွန်ပါက Grinder ဖြင့် သွေးရမည်။',
        notes: '超厚板の溶接施工管理'
      },
      {
        id: 'wd-04',
        itemJP: 'アンダーカット深さ 一般部 (Undercut Depth: General Member)',
        itemMY: 'ဂဟေစွန်း ချိုင့်ဝင်ခြင်း (Undercut) အနက် - အထွေထွေ အစိတ်အပိုင်း',
        standardValueJP: '0 mm (ချိုင့်မရှိစေရ)',
        standardValueMY: '0 mm (ချိုင့်မရှိရ)',
        controlToleranceJP: '0.5 mm 以下',
        controlToleranceMY: '0.5 mm အောက်သာ',
        limitToleranceJP: '0.5 mm 以下 (全長にわたり連続しない)',
        limitToleranceMY: '0.5 mm အောက် (တောက်လျှောက်မဖြစ်စေရ)',
        remedyActionMY: '0.5 mm ကျော်ပါက သို့မဟုတ် ဆက်တိုက်ချိုင့်နေပါက လျှပ်စစ်ဂဟေအနုဖြင့် ဂဟေသားဖြည့်ပြီး Grinder ပြန်တိုက်ရမည်။',
        notes: '目視検査で最もチェックされる項目'
      },
      {
        id: 'wd-05',
        itemJP: 'アンダーカット深さ 応力集中・重要部 (Undercut: Critical Zone)',
        itemMY: 'Undercut အနက် - အားစုပြုံရာနှင့် အရေးကြီးသော ငလျင်ဒဏ်ခံ အဆစ်များ',
        standardValueJP: '0 mm (ချိုင့်မရှိစေရ)',
        standardValueMY: '0 mm (လုံးဝ ချိုင့်မရှိရ)',
        controlToleranceJP: '0.3 mm 以下',
        controlToleranceMY: '0.3 mm အောက်သာ',
        limitToleranceJP: '0.3 mm 以下',
        limitToleranceMY: '0.3 mm အောက်သာ',
        remedyActionMY: '0.3 mm ကျော်ပါက ဂဟေသားမို့ဖြည့် Grinder သွေး ပြုပြင်ရမည်။',
        notes: '柱・梁接合部のフランジ止端部など'
      },
      {
        id: 'wd-06',
        itemJP: 'ピット・ブローホール (Surface Pit / Blowhole)',
        itemMY: 'ဂဟေမျက်နှာပြင်ရှိ လေအိတ်ပေါက် ချို့ယွင်းချက် (Pits)',
        standardValueJP: '0 個 (လုံးဝမရှိရ)',
        standardValueMY: '0 個 (လုံးဝမရှိရ)',
        controlToleranceJP: '直径 ≤ 1.0 mm かつ 3個以下/m',
        controlToleranceMY: 'အချင်း 1.0 mm အောက်နှင့် ၁ မီတာတွင် ၃ ခုအောက်',
        limitToleranceJP: '直径 ≤ 1.0 mm かつ 5個以下/m',
        limitToleranceMY: 'အချင်း 1.0 mm အောက်နှင့် ၁ မီတာတွင် ၅ ခုအောက်',
        remedyActionMY: '1.0 mm ထက်ကြီးသော အပေါက်များ သို့မဟုတ် စုပြုံနေပါက Grinder ဖြင့် အပေါက်ပျောက်သည်အထိ လှိုက်ထုတ်ပြီး ပြန်ဆော်ရမည်။',
        notes: '耐力上の断面欠損および腐食の起点防止'
      },
      {
        id: 'wd-07',
        itemJP: 'オーバーラップ (Overlap - 母材への溶着不良)',
        itemMY: 'ဂဟေသား လျှံကျပြီး မကပ်ခြင်း (Overlap ချို့ယွင်းချက်)',
        standardValueJP: '0 mm (လုံးဝ ခွင့်မပြု)',
        standardValueMY: '0 mm (လုံးဝ ခွင့်မပြု)',
        controlToleranceJP: '許容されない (0 mm)',
        controlToleranceMY: 'လုံးဝ ခွင့်မပြု (0 mm)',
        limitToleranceJP: '許容されない (0 mm)',
        limitToleranceMY: 'လုံးဝ ခွင့်မပြု (0 mm)',
        remedyActionMY: 'လျှံကျနေသော ဂဟေသားကို Grinder ဖြင့် သံပြားသားနှင့် တစ်ပြေးညီဖြစ်အောင် ပြေပြစ်စွာ သွေးချရမည်။',
        notes: '応力集中による疲労き裂の原因'
      },
      {
        id: 'wd-08',
        itemJP: '割れ・クラック・クレータ割れ (Cracks / Crater Cracks)',
        itemMY: 'အက်ကွဲကြောင်းများ၊ အဆုံးသတ်ချိုင့် အက်ကွဲမှု (Cracks)',
        standardValueJP: '0 mm (လုံးဝ ခွင့်မပြု)',
        standardValueMY: '0 mm (လုံးဝ ခွင့်မပြု)',
        controlToleranceJP: '一切許容されない',
        controlToleranceMY: 'လုံးဝ အက်ကွဲခွင့်မရှိပါ',
        limitToleranceJP: '一切許容されない',
        limitToleranceMY: 'လုံးဝ အက်ကွဲခွင့်မရှိပါ',
        remedyActionMY: 'အက်ကွဲရာရှိသော ဂဟေသား တစ်ခုလုံးကို Carbon Gouging သို့မဟုတ် Grinder ဖြင့် အမြစ်ပြတ် လှိုက်ထုတ်ပြီး MT စစ်ဆေး၍ အက်ရာမရှိမှ အသစ်ပြန်ဆော်ရမည်။',
        notes: '致命的欠陥（即時不合格・全数除去）'
      }
    ]
  },
  {
    id: 'fabrication_tolerances',
    titleJP: '3. 鉄骨工作・部材製作公差 (Fabrication Accuracy Tolerances)',
    titleMY: '၃။ သံမဏိ အစိတ်အပိုင်းများ ထုတ်လုပ်မှု တိကျမှု စံနှုန်းများ (Fabrication Accuracy)',
    descriptionMY: 'တိုင်၊ ရက်မ၊ ထိပ်ဖျားဒေါင့်မှန်၊ Diaphragm နှင့် ကွေးညွတ်မှုဆိုင်ရာ JASS 6 စံနှုန်းများ',
    badge: 'JASS 6 工作精度',
    rows: [
      {
        id: 'ft-01',
        itemJP: '柱および大梁の全長公差 (Overall Member Length)',
        itemMY: 'တိုင်နှင့် အဓိကရက်မများ၏ အလျား စံနှုန်း (Length)',
        standardValueJP: '設計図書寸法',
        standardValueMY: 'ဒီဇိုင်းရေးဆွဲထားသော မူလအလျား',
        controlToleranceJP: '±2.0 mm',
        controlToleranceMY: '±2.0 mm',
        limitToleranceJP: '±3.0 mm',
        limitToleranceMY: '±3.0 mm',
        remedyActionMY: '±3.0mm ကျော်ပါက ဖြတ်တောက်ပြင်ဆင်ခြင်း သို့မဟုတ် ဂဟေသားမို့ဖြည့် ညှိယူခြင်း သို့မဟုတ် ပစ္စည်းအသစ် လဲရမည်။',
        notes: '建築鉄骨の最重要寸法基準'
      },
      {
        id: 'ft-02',
        itemJP: '梁のキャンバー (Beam Camber - 上向きの反り)',
        itemMY: 'ရက်မ အပေါ်သို့ ကွေးညွှတ်ထားမှု စံနှုန်း (Camber)',
        standardValueJP: '指示寸法または自重相殺値',
        standardValueMY: 'တွက်ချက်ထားသော အပေါ်ကွေးတန်ဖိုး',
        controlToleranceJP: 'スパンの 1/1000 又は ±5.0 mm の小さい方',
        controlToleranceMY: 'Span ၏ 1/1000 သို့မဟုတ် ±5.0 mm ထဲမှ ငယ်သောတန်ဖိုး',
        limitToleranceJP: 'スパンの 1/500 又は ±7.0 mm の小さい方',
        limitToleranceMY: 'Span ၏ 1/500 သို့မဟုတ် ±7.0 mm ထဲမှ ငယ်သောတန်ဖိုး',
        remedyActionMY: 'မီးအပူပေး၍ ဖြောင့်တန်းခြင်း (線状加熱・点加熱) ဖြင့် ပြန်လည်ချိန်ညှိရမည်။',
        notes: '床仕上げの不陸防止'
      },
      {
        id: 'ft-03',
        itemJP: '柱端面の直角度 (Column End Squareness)',
        itemMY: 'တိုင်ထိပ်ဖျား မျက်နှာပြင် ဒေါင့်မှန်ကျမှု (Squareness)',
        standardValueJP: '90° (軸線に対し直角)',
        standardValueMY: '၉၀ ဒီဂရီ ဒေါင့်မှန်ကျမှု',
        controlToleranceJP: 'h / 1000 かつ 1.5 mm 以下',
        controlToleranceMY: 'တိုင်အမြင့် h ၏ 1/1000 နှင့် 1.5 mm အောက်',
        limitToleranceJP: 'h / 500 かつ 2.0 mm 以下',
        limitToleranceMY: 'တိုင်အမြင့် h ၏ 1/500 နှင့် 2.0 mm အောက်',
        remedyActionMY: 'End Milling စက်ဖြင့် ပြန်လည်ဖြတ်တောက် သွေးယူရမည် (切削加工)။',
        notes: 'メタルタッチ接合の要件'
      },
      {
        id: 'ft-04',
        itemJP: '断面寸法: せい (高さ H) および 幅 (B)',
        itemMY: 'အပိုင်းအစ မျက်နှာဖြတ် အမြင့် (H) နှင့် အနံ (B)',
        standardValueJP: '呼び寸法',
        standardValueMY: 'သတ်မှတ် စံအတိုင်းအတာ',
        controlToleranceJP: '±2.0 mm',
        controlToleranceMY: '±2.0 mm',
        limitToleranceJP: '±3.0 mm',
        limitToleranceMY: '±3.0 mm',
        remedyActionMY: 'H-Beam / Box Column များ ပြန်လည်ညှိယူ ဖြောင့်တန်းရမည်။',
        notes: '外形寸法の基準'
      },
      {
        id: 'ft-05',
        itemJP: 'ダイアフラムの位置公差 (Diaphragm Position)',
        itemMY: 'အတွင်းခံပြား (Diaphragm) တပ်ဆင်နေရာ တိကျမှု',
        standardValueJP: '設計図の位置',
        standardValueMY: 'ဒီဇိုင်းရေးဆွဲထားသော နေရာ',
        controlToleranceJP: '±2.0 mm',
        controlToleranceMY: '±2.0 mm',
        limitToleranceJP: '±3.0 mm',
        limitToleranceMY: '±3.0 mm',
        remedyActionMY: 'ကန့်သတ်ချက် ကျော်လွန်ပါက ဖြုတ်သိမ်းပြီး အသစ်ပြန်လည်တပ်ဆင်ရမည်။',
        notes: '梁フランジとの取り合い位置'
      },
      {
        id: 'ft-06',
        itemJP: 'メタルタッチ接触率 (Column Metal Touch Contact Area)',
        itemMY: 'တိုင်အဆက် ဖိကပ်အားကူးပြောင်းမှု မျက်နှာပြင် ထိတွေ့မှုနှုန်း',
        standardValueJP: '密着 (完全接触)',
        standardValueMY: 'လုံးဝ ကပ်နေမှု',
        controlToleranceJP: '接触率「75% 以上」(すき間 0.5mm以下)',
        controlToleranceMY: 'မျက်နှာပြင် ၇၅% အထက် (ကြားဟမှု 0.5mm အောက်ကို ထိတွေ့မှုဟု ယူဆ)',
        limitToleranceJP: '接触率「75% 以上」確保必須',
        limitToleranceMY: '၇၅% အထက် မဖြစ်မနေ ရရှိရမည်',
        remedyActionMY: 'မပြည့်မီပါက ထိပ်ဖျားကို ပြန်လည်မောင်းနှင်သွေးညီညွတ်အောင် ပြုလုပ်ရမည် (End Miller)။',
        notes: '圧縮応力の直接伝達'
      },
      {
        id: 'ft-07',
        itemJP: 'テーパーフィラー板の勾配 (Taper Filler Slope)',
        itemMY: 'အထူမတူသော သံပြားကြားထည့် Taper Filler စောင်းစောင်း အချိုး',
        standardValueJP: '厚さ差 3mm 超で使用',
        standardValueMY: 'အထူကွာခြားချက် 3mm ကျော်ပါက သုံးရမည်',
        controlToleranceJP: '勾配「1 / 20 以下」',
        controlToleranceMY: 'စောင်းစောင်းအချိုး "၁ / ၂၀ (1/20) အောက်"',
        limitToleranceJP: '勾配「1 / 20 以下」厳守',
        limitToleranceMY: '1/20 အောက် မဖြစ်မနေ လိုက်နာရမည်',
        remedyActionMY: 'မတ်စောက်လွန်းပါက ပြေပြစ်အောင် စက်ဖြင့် ပြန်လှီးဖြတ်ရမည်။',
        notes: '1/20 を超える急勾配は応力伝達を阻害'
      }
    ]
  }
];
