export interface WeldingClassification {
  typeJP: string;
  typeMY: string;
  kanjiMeaning: string;
  principleJP: string;
  principleMY: string;
  mnemonicMY: string;
  methodsJP: string[];
  methodsMY: string[];
  examPointsMY: string;
}

export interface WeldingProcessComparison {
  name: string;
  fullForm: string;
  electrodeTypeJP: string;
  shieldingGasJP: string;
  shieldingGasMY: string;
  applicableMetalsMY: string;
  arcCharacteristicsMY: string;
  speedAndProductivityMY: string;
  spatterAndQualityMY: string;
  examTrapMY: string;
}

export interface JisWeldingExamDetail {
  code: string;
  titleJP: string;
  titleMY: string;
  targetMethod: string;
  qualificationsSample: string;
  validityMY: string;
  surveillanceMY: string;
  positionsMY: string;
  examCrucialPointsMY: string;
}

export interface InspectionMethodSummary {
  method: string;
  nameJP: string;
  nameMY: string;
  targetDefectMY: string;
  acceptanceCriteriaMY: string;
  meritsAndDemeritsMY: string;
  examPointMY: string;
}

export interface ChapterHighYieldCheckpoint {
  chapter: string;
  chapterTitleMY: string;
  keyPoints: {
    titleJP: string;
    titleMY: string;
    standardRule: string;
    examTip: string;
  }[];
}

export const WELDING_CLASSIFICATIONS: WeldingClassification[] = [
  {
    typeJP: '融接 (Fusion Welding)',
    typeMY: 'အရည်ဖျော်ဆက်ခြင်း (Fusion Welding)',
    kanjiMeaning: '融 (အရည်ပျော်ခြင်း/Melting) + 接 (ဆက်ခြင်း/Joining)',
    principleJP: '母材（鋼材）の接合部をアーク熱やガス炎等の熱源で加熱し、母材と溶加材（溶接棒・ワイヤ）の双方を「溶融」させて一体化させる工法。',
    principleMY: 'အခြေခံသံမဏိပြားနှင့် ဂဟေချောင်း (သို့မဟုတ် Wire) ၂ ခုလုံးကို အပူစွမ်းအင်ဖြင့် အရည်ဖျော်ပြီး တစ်သားတည်းဖြစ်အောင် ဆက်စပ်ပေးသော နည်းပညာဖြစ်သည်။',
    mnemonicMY: '💡 မှတ်ပုံမှတ်နည်း: 「融 (ရုန်း) = အရည်ဖျော်」 - သံပြားရော ဂဟေသားပါ ၂ ခုလုံး အရည်ပျော်သွားမှ 融接 ဖြစ်သည်။ (သံမဏိအဆောက်အအုံတွင် ၉၅% ကျော် အသုံးပြု)။',
    methodsJP: ['被覆アーク溶接 (SMAW)', 'MAG溶接 (CO2/混合ガス)', 'MIG溶接 (アルゴン)', 'TIG溶接 (アルゴン/不活性)', 'サブマージアーク溶接 (SAW)', 'エレクトロスラグ溶接 (ESR)'],
    methodsMY: ['လက်ဂဟေ (Shielded Metal Arc)', 'MAG ဂဟေ (CO2 ရောစပ်ဓာတ်ငွေ့)', 'MIG ဂဟေ (Argon သီးသန့်)', 'TIG ဂဟေ (Tungsten ချောင်း)', 'Submerged Arc ဂဟေ (ဖျာခင်းဂဟေ)', 'Electroslag ဂဟေ (တိုင်ထူဂဟေ)'],
    examPointsMY: 'စာမေးပွဲတွင် "母材を溶融させずに接合する" ဟု ပါရှိပါက 融接 မဟုတ်ပါ။ 母材 လည်း မဖြစ်မနေ အရည်ပျော်ရမည်။'
  },
  {
    typeJP: '圧接 (Pressure Welding)',
    typeMY: 'ဖိအားပေးဆက်ခြင်း (Pressure Welding)',
    kanjiMeaning: '圧 (ဖိအား/Pressure) + 接 (ဆက်ခြင်း/Joining)',
    principleJP: '接合面に熱を加えて半溶融（固相状態）とし、または冷間のまま機械的な「強い圧力」を加えて原子間距離を縮めて接合する工法。',
    principleMY: 'သံပြား သို့မဟုတ် သံချောင်းများကို မီးအပူပေးကာ တစ်စိတ်တစ်ပိုင်း ပျော့ပြောင်းလာချိန်တွင် ပြင်းထန်သော စက်ဖိအားဖြင့် ဖိကပ်ဆက်စပ်ခြင်း ဖြစ်သည်။ (သို့မဟုတ် အေးနေချိန်တွင် ဖိအားဖြင့် ဆက်ခြင်း)။',
    mnemonicMY: '💡 မှတ်ပုံမှတ်နည်း: 「圧 (အဆု) = ဖိအား (Pressure)」 - ဂဟေချောင်းမလိုဘဲ စက်ဖြင့် ပြင်းပြင်းဖိတွန်းကပ်ဆက်ခြင်း။ (အဆောက်အအုံ သံချောင်းဆက်ရာတွင် သုံးသော ガス圧接 ကို အထူးမှတ်ပါ)။',
    methodsJP: ['ガス圧接 (Gas Pressure Welding - 鉄筋継手)', 'スポット溶接 (Resistance Spot Welding)', '摩擦圧接 (Friction Welding - スタッド等)', '高周波抵抗溶接 (鍛接)'],
    methodsMY: ['သံချောင်းဓာတ်ငွေ့ဖိဆက်ခြင်း (Rebar Gas Pressure)', 'စပေါ့ဂဟေ (Spot Welding)', 'ပွတ်တိုက်ဖိဆက်ခြင်း (Friction Welding)', 'လျှပ်စစ်ခုခံဖိဆက်ခြင်း (Resistance Welding)'],
    examPointsMY: 'သံချောင်း (鉄筋) များကို ဆက်ရာတွင် အဓိကသုံးသော နည်းလမ်းမှာ "ガス圧接 (Gas Pressure Welding)" ဖြစ်ပြီး ၎င်းသည် 圧接 တွင် ပါဝင်သည်။'
  },
  {
    typeJP: 'ろう接 (Brazing & Soldering)',
    typeMY: 'ကြေးဂဟေ/ခဲဂဟေဆက်ခြင်း (Brazing & Soldering)',
    kanjiMeaning: 'ろう (ဖယောင်း/ခဲရည်/Solder) + 接 (ဆက်ခြင်း/Joining)',
    principleJP: '母材は「全く溶かさず」、母材よりも融点の低い金属（ろう材・はんだ）のみを加熱溶融させて、毛細管現象により接合面の微小なすき間に充填して接合する工法。',
    principleMY: 'အခြေခံသံပြားကို "လုံးဝ အရည်မဖျော်ဘဲ"၊ သံပြားထက် အရည်ပျော်မှတ်နိမ့်သော သတ္တု (ကြေးနီ၊ ငွေ၊ ခဲ) ကိုသာ အရည်ဖျော်ပြီး ကြားအပေါက်ငယ်များထဲသို့ စီးဝင်ကပ်တွယ်စေသော နည်းပညာဖြစ်သည်။',
    mnemonicMY: '💡 မှတ်ပုံမှတ်နည်း: 「ろう (ရို) = ဖယောင်းရည်လို စီးကပ်」 - သံပြား လုံးဝ အရည်မပျော်ပါ။ 450℃ အထက်ကို 硬ろう (Brazing)၊ 450℃ အောက်ကို 軟ろう / はんだ (Soldering) ဟုခေါ်သည်။',
    methodsJP: ['硬ろう接 (Brazing: 銀ろう・銅ろう - 融点 450℃ 以上)', '軟ろう接 / はんだ付け (Soldering - 融点 450℃ 未満)'],
    methodsMY: ['ကြေးဂဟေ/ငွေဂဟေ (Brazing: အရည်ပျော်မှတ် 450°C အထက်)', 'ခဲဂဟေ (Soldering: အရည်ပျော်မှတ် 450°C အောက်)'],
    examPointsMY: 'စာမေးပွဲ အမေးများဆုံး: "母材を溶融させない工法はどれか" (သံပြား မအရည်ပျော်သော နည်းလမ်း) ဟု မေးပါက အဖြေမှာ "ろう接" ဖြစ်သည်။'
  }
];

export const WELDING_PROCESS_COMPARISONS: WeldingProcessComparison[] = [
  {
    name: 'MAG溶接',
    fullForm: 'Metal Active Gas Welding (半自動 / ロボット)',
    electrodeTypeJP: 'ソリッドワイヤ / フラックス入りワイヤ (消耗電極)',
    shieldingGasJP: '80% Ar + 20% CO2 または 100% CO2 (活性ガス)',
    shieldingGasMY: 'CO2 ရောစပ်ဓာတ်ငွေ့ (Ar 80% + CO2 20%) သို့မဟုတ် သန့်စင် CO2 ၁၀၀% (Active Gas)',
    applicableMetalsMY: 'ကာဗွန်သံမဏိ (軟鋼・高張力鋼 SM490/SN490 စသည်)။ 建築鉄骨 ၏ ၉၀% ကျော် အဓိကနည်းပညာ။',
    arcCharacteristicsMY: 'CO2 ဓာတ်ငွေ့ကြောင့် Arc သည် စူးစိုက်ပြီး သံရည်အတွင်းသို့ နက်ရှိုင်းစွာ ထိုးဖောက်ဝင်ရောက်နိုင်သည် (Deep Penetration)။',
    speedAndProductivityMY: 'အလွန်မြန်ဆန်ပြီး အလိုအလျောက် Wire ထွက်သဖြင့် စက်ရုံထုတ်လုပ်မှုစွမ်းအား အလွန်မြင့်မားသည်။',
    spatterAndQualityMY: 'CO2 ကြောင့် Spatter (သံရည်စင်ထွက်မှု) အနည်းငယ် များသော်လည်း အပူထိန်းချုပ်ရ လွယ်ကူသည်။',
    examTrapMY: '⚠️ လှည့်ကွက်: "MAG溶接はアルミニウムに用いられる" ❌ (မှားသည်! MAG သည် သံမဏိအတွက်သာ ဖြစ်သည်)'
  },
  {
    name: 'MIG溶接',
    fullForm: 'Metal Inert Gas Welding',
    electrodeTypeJP: '金属ワイヤ (消耗電極)',
    shieldingGasJP: '100% Ar または Ar + He (不活性ガス)',
    shieldingGasMY: 'ဓာတ်မပြုသော Argon ၁၀၀% သို့မဟုတ် Helium ဓာတ်ငွေ့ (Inert Gas)',
    applicableMetalsMY: 'အလူမီနီယမ် (Aluminium)၊ သံမဏိစတီးလ် (Stainless Steel) နှင့် သံမဟုတ်သော သတ္တုများ (Non-ferrous)။',
    arcCharacteristicsMY: 'Arc သည် ပြန့်ကားငြိမ်သက်ပြီး သံရည်အပေါက်အတွင်းသို့ နက်ရှိုင်းစွာ မဝင်ရောက်နိုင်ပါ (Shallow Penetration)။',
    speedAndProductivityMY: 'မြန်ဆန်သော်လည်း သာမန်သံမဏိတွင် သုံးပါက ကုန်ကျစရိတ်ကြီးပြီး အက်ကွဲလွယ်သည်။',
    spatterAndQualityMY: 'Spatter အလွန်နည်းပြီး လှပသန့်စင်သော ဂဟေမျက်နှာပြင် ရရှိသည်။',
    examTrapMY: '⚠️ လှည့်ကွက်: "MIG溶接のシールドガスは炭酸ガスである" ❌ (မှားသည်! MIG သည် 100% အင်နတ်ဓာတ်ငွေ့ ဖြစ်သည်)'
  },
  {
    name: 'TIG溶接',
    fullForm: 'Tungsten Inert Gas Welding',
    electrodeTypeJP: 'タングステン電極 (非消耗電極 - ပျော်မသွားသော တန်စတင်)',
    shieldingGasJP: '100% Ar (不活性ガス)',
    shieldingGasMY: 'Argon ၁၀၀% အင်နတ်ဓာတ်ငွေ့ (Inert Gas)',
    applicableMetalsMY: 'သံမဏိပြားအပါးများ၊ သံမဏိပိုက်လိုင်းများ၊ Stainless Steel၊ အလွန်အရေးကြီးသော ပထမဆုံး အောက်ခြေလွှာ (Root pass)။',
    arcCharacteristicsMY: 'တန်စတင်ချောင်းကြောင့် Arc အလွန်တည်ငြိမ်ပြီး အပူချိန်ကို အနုစိတ် ထိန်းချုပ်နိုင်သည်။',
    speedAndProductivityMY: 'ဂဟေချောင်းကို လက်ဖြင့် သီးခြားထိုးထည့်ရသဖြင့် ဂဟေဆော်နှုန်း အလွန်နှေးကွေးသည် (能率が低い)။',
    spatterAndQualityMY: 'Spatter လုံးဝ မထွက်ပါ (Zero Spatter)။ အမြင့်ဆုံး အရည်အသွေး ရရှိသည်။',
    examTrapMY: '⚠️ လှည့်ကွက်: "TIG溶接は消耗電極式である" ❌ (မှားသည်! TIG ချောင်းသည် အရည်မပျော်သော 非消耗電極 ဖြစ်သည်)'
  },
  {
    name: '被覆アーク手溶接',
    fullForm: 'Shielded Metal Arc Welding (SMAW - 手溶接)',
    electrodeTypeJP: '被覆アーク溶接棒 (手作業)',
    shieldingGasJP: 'ガスボンベ不要 (溶接棒の被覆材からガス・スラグ発生)',
    shieldingGasMY: 'ဓာတ်ငွေ့အိုး မလိုပါ (ဂဟေချောင်းအပြင်ဖုံး အခွံမှ ကာကွယ်ဓာတ်ငွေ့နှင့် ချော်ရည် စိမ့်ထွက်သည်)',
    applicableMetalsMY: 'လုပ်ငန်းခွင် အမြင့်ပေါ် နေရာကျဉ်းများ၊ အရံဂဟေ (Tack weld)၊ ပြုပြင်ဂဟေဆော်ခြင်း (補修溶接)။',
    arcCharacteristicsMY: 'လေတိုက်ခတ်မှုကို ခံနိုင်ရည်ရှိသော်လည်း ဂဟေဆော်သူ၏ ကျွမ်းကျင်မှုအပေါ် လုံးဝမူတည်သည်။',
    speedAndProductivityMY: 'ဂဟေချောင်း တိုသွားတိုင်း အသစ်လဲရသဖြင့် အော်တိုဂဟေထက် အဆမတန် နှေးကွေးသည်။',
    spatterAndQualityMY: 'ချော်ရည် (Slag) ကို ခေါက်ထုတ်သန့်စင်ရပြီး လေအိတ်ပေါက် (Blowhole) ဖြစ်လွယ်သည်။',
    examTrapMY: '⚠️ လှည့်ကွက်: "手溶接にはシールドガスボンベが必須" ❌ (မှားသည်! အပြင်ဖုံး အခွံက ကာကွယ်ပေးသဖြင့် Gas Cylinder မလိုပါ)'
  }
];

export const ROBOT_VS_MANUAL_COMPARISON = [
  {
    itemJP: '溶接機・工法 (Equipment & Process)',
    robotJP: '建築鉄骨用溶接ロボット (多関節または直角座標型 MAG/CO2)',
    robotMY: 'အလိုအလျောက် သံမဏိဂဟေစက်ရုပ် (Multi-axis articulated robot)',
    manualJP: '被覆アーク溶接機 または 半自動溶接トーチ (手作業)',
    manualMY: 'လူကိုယ်တိုင် ကိုင်တွယ်ဆော်ရသော လက်ဂဟေ / မီးတိုင်'
  },
  {
    itemJP: '施工オペレーター資格 (Operator Qualification)',
    robotJP: '建築鉄骨ロボット溶接オペレーター技術検定合格者 (JWES等の専門資格)',
    robotMY: 'စက်ရုပ်ဂဟေ အော်ပရေတာ သီးသန့် အောင်လက်မှတ် ရရှိထားသူ ဖြစ်ရမည်',
    manualJP: 'JIS Z 3801 (手溶接) または JIS Z 3841 (半自動溶接) 検定合格者',
    manualMY: 'JIS Z 3801 သို့မဟုတ် JIS Z 3841 ဂဟေအရည်အချင်းစစ် အောင်လက်မှတ် ရရှိထားသူ'
  },
  {
    itemJP: '開先精度・組立公差 (Joint Tolerances)',
    robotJP: '極めて厳格 (ルート間隙のばらつき ±1.0mm 以内、開先角度厳密)',
    robotMY: 'အလွန်တိကျရမည် (Root gap ကွာဟချက် ±1.0mm အတွင်းသာ ရှိရမည်)',
    manualJP: '作業者の目視と手技で多少の目違いや間隙ばらつきを追従補正可能',
    manualMY: 'ဂဟေဆော်သူ၏ မျက်စိနှင့် လက်ကျွမ်းကျင်မှုဖြင့် အနည်းငယ် လိုက်လံညှိယူနိုင်'
  },
  {
    itemJP: 'センシング機能 (Sensing Capabilities)',
    robotJP: 'タッチセンサー（接触検出）およびアークセンサー（電流変動検出による自動倣い）',
    robotMY: 'Touch sensor (ထိတွေ့စစ်ဆေးမှု) နှင့် Arc sensor (ဗဟိုလမ်းကြောင်း အလိုအလျောက်ထိန်းညှိမှု)',
    manualJP: '作業者の目視と手元のコントロール',
    manualMY: 'လူ၏ မျက်စိနှင့် လက်ထိန်းချုပ်မှု'
  },
  {
    itemJP: '始終端部処理 (Start & End Treatment)',
    robotJP: '必ず「エンドタブ（鋼製・固形）」を設置し、欠陥の生じやすいクレータをタブ上に逃がす',
    robotMY: 'အစွန်းခံပြား (End Tab) မဖြစ်မနေ တပ်ဆင်ပြီး အစနှင့် အဆုံးကို Tab ပြားပေါ်သို့ လွှဲထုတ်ရမည်',
    manualJP: '手作業でクレータ処理（クレータ充填機能や肉盛り）を行う',
    manualMY: 'လက်ဖြင့် မီးထောက်ကို ပြန်ဆွဲကာ အဆုံးသတ်ချိုင့်ခွက်ကို ဖာထေးသည်'
  },
  {
    itemJP: '長所と短所 (Pros & Cons)',
    robotJP: '長所: 高速・均一・疲労なし。短所: 複雑な形状・狭隘部・現場溶接には不向き',
    robotMY: 'အားသာချက်: အရှိန်မြန်၊ အရည်အသွေးတစ်သမတ်တည်း။ အားနည်းချက်: နေရာကျဉ်းနှင့် ပုံသဏ္ဌာန်ဆန်းများတွင် မသုံးနိုင်',
    manualJP: '長所: どんな姿勢・現場でも施工可能。短所: 作業者の技量差・疲労・作業速度の限界',
    manualMY: 'အားသာချက်: မည်သည့်အနေအထားမဆို ဆော်နိုင်သည်။ အားနည်းချက်: လူအမောဒဏ်နှင့် လက်အတက်အကျ ရှိသည်'
  }
];

export const JIS_WELDING_EXAMS: JisWeldingExamDetail[] = [
  {
    code: 'JIS Z 3801',
    titleJP: '手溶接技術検定 (Manual Metal Arc Welding Qualification)',
    titleMY: 'လက်ဂဟေ အရည်အချင်းစစ် စာမေးပွဲ (Manual MMAW)',
    targetMethod: '被覆アーク手溶接 (SMAW) による鋼材の突合せ・すみ肉溶接',
    qualificationsSample: 'A-2F (下向), A-2V (立向), A-2H (横向), A-2O (上向) 等',
    validityMY: 'အောင်လက်မှတ် သက်တမ်းမှာ "၃ နှစ် (3 Years)" ဖြစ်သည်။',
    surveillanceMY: 'သက်တမ်း ၃ နှစ်အတွင်း "နှစ်စဉ် (1 year) ဂဟေလုပ်ငန်း ဆက်လက်လုပ်ကိုင်နေကြောင်း အတည်ပြု အစီရင်ခံစာ (サーベランス)" တင်ပြရမည်။',
    positionsMY: 'F: 下向 (အောက်ငုံ့), V: 立向 (ဒေါင်လိုက်မတ်), H: 横向 (အလျားလိုက်ဘေးတိုက်), O: 上向 (မော့ကြည့်)',
    examCrucialPointsMY: 'အောက်ငုံ့ (F) လက်မှတ် ရထားရုံဖြင့် ဒေါင်လိုက် (V) ကို ဆော်ခွင့်မရှိပါ။ မဖြစ်မနေ သက်ဆိုင်ရာ အနေအထား လက်မှတ်ရှိရမည်။'
  },
  {
    code: 'JIS Z 3841',
    titleJP: '半自動溶接技術検定 (Semi-Automatic Arc Welding Qualification)',
    titleMY: 'တစ်ပိုင်းအော်တို (MAG/CO2) ဂဟေ အရည်အချင်းစစ် စာမေးပွဲ',
    targetMethod: '炭酸ガスアーク溶接 (MAG)・混合ガスアーク溶接による鋼材溶接',
    qualificationsSample: 'SA-2F (下向), SA-2V (立向), SA-2H (横向), SA-2O (上向) 等',
    validityMY: 'အောင်လက်မှတ် သက်တမ်းမှာ "၃ နှစ် (3 Years)" ဖြစ်သည်။',
    surveillanceMY: 'နှစ်စဉ် (1 year) လုပ်ငန်းလုပ်ကိုင်ကြောင်း အတည်ပြုချက် မပျက်မကွက် တင်ပြရမည်။ ပျက်ကွက်ပါက ပျက်ပြယ်မည်။',
    positionsMY: 'သံပြားအထူ (板厚): 1級 (ပါးသောပြား 1.2~4.5mm), 2級 (အလယ်အလတ် 9~19mm), 3級 (အထူကြီး 19mm 以上)',
    examCrucialPointsMY: 'JIS Z 3801 (手溶接) နှင့် JIS Z 3841 (半自動溶接) သည် သီးခြားစီ ဖြစ်ပြီး တစ်ခုအောင်ရုံဖြင့် နောက်တစ်ခုကို အလိုအလျောက် မရနိုင်ပါ။'
  }
];

export const INSPECTION_METHODS: InspectionMethodSummary[] = [
  {
    method: 'UT',
    nameJP: '超音波探傷試験 (Ultrasonic Testing)',
    nameMY: 'အာထရာဆောင်း စစ်ဆေးခြင်း (UT)',
    targetDefectMY: 'ဂဟေဆက် အတွင်းပိုင်းရှိ မမြင်ရသော အက်ကွဲရာ (Cracks)၊ ဂဟေမပြည့်စုံမှု (Incomplete penetration)၊ အတွင်းချော်ဝင်မှု (Slag inclusion)',
    acceptanceCriteriaMY: 'JASS 6: ပုံမှန်အားဖြင့် "အဆင့် ၃ (3類) အထက်" ဖြင့် အောင်မြင်သည်။ အရေးကြီးသော ငလျင်ဒဏ်ခံ အဆစ်များတွင် "အဆင့် ၂ (2類) အထက်" လိုအပ်သည်။',
    meritsAndDemeritsMY: 'အားသာချက်: အတွင်းနက်နက်အထိ တိကျစွာသိနိုင်သည်။ အားနည်းချက်: စစ်ဆေးသူ၏ ကျွမ်းကျင်မှုအပေါ် မူတည်ပြီး သံပြားပါးလွန်းပါက တိုင်းရခက်သည်။',
    examPointMY: '建築鉄骨突合せ溶接の主力検査法。合否判定:「3類以上」合格。'
  },
  {
    method: 'MT',
    nameJP: '磁粉探傷試験 (Magnetic Particle Testing)',
    nameMY: 'သံလိုက်မှုန့် စစ်ဆေးခြင်း (MT)',
    targetDefectMY: 'သံလိုက်စွဲသော သံမဏိ၏ "မျက်နှာပြင် (Surface)" နှင့် "မျက်နှာပြင်အောက် ချက်ချင်းရှိသော အက်ကွဲရာ (Subsurface Cracks)"',
    acceptanceCriteriaMY: 'အက်ကွဲကြောင်း လက္ခဏာ (Crack indication) လုံးဝ မရှိရပါ။',
    meritsAndDemeritsMY: 'အားသာချက်: Back gouging (裏はつり) အပြီး အက်ရာစစ်ဆေးရန် အကောင်းဆုံး။ အားနည်းချက်: သံလိုက်မစွဲသော Stainless နှင့် Aluminium တွင် သုံးမရ။',
    examPointMY: '強磁性体（炭素鋼）の「表面および表層直下の微細きず」を検出。'
  },
  {
    method: 'PT',
    nameJP: '浸透探傷試験 (Liquid Penetrant Testing)',
    nameMY: 'အရည်စိမ့်ဝင် စစ်ဆေးခြင်း (PT)',
    targetDefectMY: 'မျက်နှာပြင်သို့ ပွင့်ထွက်နေသော သေးငယ်သော အက်ကြောင်းများ (Surface Openings only)',
    acceptanceCriteriaMY: 'အနီရောင်/မီးချောင်းရောင် အစင်းကြောင်းများ လုံးဝ မရှိရပါ။',
    meritsAndDemeritsMY: 'အားသာချက်: သံလိုက်မစွဲသော သတ္တုများ (Austenitic stainless, aluminium) တွင်ပါ သုံးနိုင်သည်။ အားနည်းချက်: မျက်နှာပြင်ပိတ်နေသော အတွင်းအက်ရာကို မသိနိုင်။',
    examPointMY: '非磁性体にも適用可能。「表面に開口したきず」のみを検出。'
  },
  {
    method: 'RT',
    nameJP: '放射線透過試験 (Radiographic Testing)',
    nameMY: 'ဓာတ်မှန်ရိုက် စစ်ဆေးခြင်း (RT - X-ray)',
    targetDefectMY: 'ဂဟေဆက် အတွင်းပိုင်းရှိ အပေါက်လုံးများ (Blowholes / Gas cavities)၊ အတွင်းပိုင်း ချို့ယွင်းချက်များ',
    acceptanceCriteriaMY: 'JIS Z 3104 အဆင့် ၁ သို့မဟုတ် အဆင့် ၂ ဖြင့် အောင်မြင်သည်။',
    meritsAndDemeritsMY: 'အားသာချက်: ဓာတ်မှန်ဖလင်ပြားအဖြစ် ထာဝရမှတ်တမ်းကျန်သည်။ အားနည်းချက်: ဓာတ်ရောင်ခြည် အန္တရာယ်ရှိပြီး ကုန်ကျစရိတ်ကြီးသည်။',
    examPointMY: '内部の「ブローホール（体積型欠陥）」の検出に優れる。'
  }
];

export const CHAPTER_HIGH_YIELD_CHECKPOINTS: ChapterHighYieldCheckpoint[] = [
  {
    chapter: 'Chapter 1',
    chapterTitleMY: 'သံမဏိစံနှုန်းနှင့် သတ္တုဂုဏ်သတ္တိများ (Steel Standards & Metallurgy)',
    keyPoints: [
      {
        titleJP: 'SN材 (SN400 / SN490) の A種・B種・C種 の相違点',
        titleMY: 'SN သံမဏိ၏ A, B, C အတန်းအစား ကွာခြားချက်',
        standardRule: 'A種: အဓိကမဟုတ်သော အစိတ်အပိုင်း (Charpy စစ်ဆေးမှုမရှိ, ဂဟေမဆော်ရ) ； B種: အဓိက ငလျင်ဒဏ်ခံ တိုင်/ရက်မ (Charpy 0℃ 27J အထက်, 降伏比 ≤ 80%) ； C種: ထုထည်အထူကြီး တိုင်နှင့် အဆက် (B종 အချက်အလက် + 板厚方向 ဇက်ဝင်ဆွဲအား Z25/Z35 Lamellar Tear ကာကွယ်မှု)။',
        examTip: 'A種: 溶接不可・シャルピーなし。B種: 主力（降伏比80%以下、0℃ 27J）。C種: 板厚方向性能（ラメラテア防止）。'
      },
      {
        titleJP: 'TMCP鋼 (熱加工制御鋼) の特徴',
        titleMY: 'TMCP သံမဏိ (Thermo-Mechanical Control Process) ၏ ထူးခြားချက်',
        standardRule: 'ကာဗွန်ပမာဏ (Ceq) ကို လျှော့ချထားသော်လည်း အပူချိန်နှင့် လှိမ့်စက်ထိန်းချုပ်မှုဖြင့် ခိုင်ခံ့မှု မြှင့်တင်ထားသော သံမဏိဖြစ်သဖြင့် 予熱 (Preheat) မလိုဘဲ သို့မဟုတ် အပူနည်းနည်းဖြင့် ဂဟေဆော်နိုင်သည်။',
        examTip: 'TMCP鋼:「炭素当量が低く、溶接割れ感受性が低い（予熱低減可能）」。'
      },
      {
        titleJP: 'シャルピー衝撃試験 (Charpy Impact Test) の基準値',
        titleMY: 'Charpy ရိုက်ခတ်မှု စမ်းသပ်ခြင်း စံနှုန်း',
        standardRule: 'စမ်းသပ်အပူချိန်:「0 ℃」 ； စုပ်ယူစွမ်းအင် (Impact Energy):「27 J (Joules) 以上」。',
        examTip: '「0℃ において 27J 以上」の数値を確実に暗記する。'
      }
    ]
  },
  {
    chapter: 'Chapter 2',
    chapterTitleMY: 'မူလီဆက်ခြင်းနှင့် အဆစ်ဒီဇိုင်း (High-Strength Bolts & Joints)',
    keyPoints: [
      {
        titleJP: '高力ボルトのすべり係数 (Slip Coefficient)',
        titleMY: 'HTB(TC) bolt ပွတ်တိုက်မျက်နှာပြင် ချော်ထွက်မှုအချိုး',
        standardRule: 'သံချေးအနီရောင်တက်အောင် ပြုလုပ်ထားသော (赤さび面) သို့မဟုတ် Blasting လုပ်ထားသော ပွတ်တိုက်မျက်နှာပြင်၏ すべり係数 သည်「0.45 以上」ရှိရမည်။',
        examTip: 'すべり係数基準値は「0.45 以上」です。0.40 ではありません。'
      },
      {
        titleJP: 'ボルトの締付け順序 (Tightening Sequence)',
        titleMY: 'မူလီများ ကြပ်သည့် အစီအစဉ်',
        standardRule: 'သံပြားများ အလယ်မှ အပြင်သို့ ပြန့်ထွက်ညီညာစေရန် အမြဲတမ်း「အလယ်ဗဟို (群の中心) မှ အစွန်အဖျားသို့ (外側へ)」အစီအစဉ်အတိုင်း ကြပ်ရမည်။',
        examTip: '締付け順序:「中央部から端部（外側）へ」。端部から中央は厳禁。'
      },
      {
        titleJP: 'トルシア形高力ボルトのピンテール破断 (Torque-Shear Bolt Pintail)',
        titleMY: 'Torque-Shear Bolt (S10T) ၏ အမြီးပြတ်ထွက်ခြင်း',
        standardRule: 'သတ်မှတ်ထားသော တင်းအား (Tension) ပြည့်မီချိန်တွင် Pintail (ピンテール) သည် အလိုအလျောက် ပြတ်ထွက်သွားသည်။ ပြတ်မထွက်သော မူလီများ သို့မဟုတ် ပျက်စီးနေသော မူလီများကို အသစ်လဲရမည်။',
        examTip: 'ピンテール破断をもって本締め完了とする。一次締めトルクは約100〜200N·m。'
      }
    ]
  },
  {
    chapter: 'Chapter 3',
    chapterTitleMY: 'သံမဏိစက်ရုံ လုပ်ငန်းစဉ်နှင့် စက်ပိုင်းဆိုင်ရာ (Fabrication & Machining)',
    keyPoints: [
      {
        titleJP: '孔あけ加工 (ドリル vs プレスポンチ)',
        titleMY: 'အပေါက်ဖောက်ခြင်း (Drill vs Press Punch)',
        standardRule: 'အဓိက တိုင်နှင့် ရက်မများအတွက် အပေါက်ဖောက်ရာတွင် မဖြစ်မနေ「ドリル (Drill)」သုံးရမည်။ 板厚 13mm 以下 ၏ ဒုတိယတန်းစား အစိတ်အပိုင်းများတွင်သာ Press Punch ခွင့်ပြုသည်။',
        examTip: '主要部材のボルト孔: 原則「ドリルあけ」。厚板の抜き孔（パンチ）は不可。'
      },
      {
        titleJP: '柱のメタルタッチ接合 (Metal Touch Joint)',
        titleMY: 'တိုင်အဆက် ဖိကပ်အားကူးပြောင်းမှု (Metal Touch)',
        standardRule: 'တိုင်၏ အပေါ်နှင့် အောက် မျက်နှာပြင်များကို တိုက်ရိုက်ဖိကပ်စေပြီး ဖိအား၏ 25% အထိ ကူးပြောင်းစေနိုင်သည့် စနစ်။ မျက်နှာပြင် ထိတွေ့မှုနှုန်းသည်「75% 以上」ရှိရမည်။',
        examTip: 'メタルタッチ接触率「75% 以上」、すき間 0.5mm 以下を接触とみなす。'
      },
      {
        titleJP: '歪み取り加熱温度基準 (Heat Straightening Limits)',
        titleMY: 'ပုံပျက်နေသော သံပြားများကို မီးပေးဖြောင့်တန်းခြင်း အပူချိန်',
        standardRule: '400N/490N 鋼材: 線状加熱 850℃ 以下 ； 水冷する場合は 650℃ 以下（赤熱状態での急冷水冷は組織脆化を招くため禁止）。',
        examTip: '空冷: 850℃ 以下、水冷: 650℃ 以下。'
      }
    ]
  },
  {
    chapter: 'Chapter 4',
    chapterTitleMY: 'ဂဟေဆော်ခြင်း စီမံခန့်ခွဲမှု (Welding Practice & Heat Control)',
    keyPoints: [
      {
        titleJP: '溶接施工環境温度と予熱 (Welding Ambient Temperature)',
        titleMY: 'ဂဟေဆော်ချိန် ပတ်ဝန်းကျင် အပူချိန်နှင့် ကြိုတင်အပူပေးခြင်း',
        standardRule: '気温 5℃ 未満: အဆစ်ပတ်လည် 100mm အတွင်း 20℃〜40℃ ကြိုတင်အပူပေးပြီးမှ ဆော်နိုင်သည် ； 気温 -5℃ 未満: လုံးဝ ဂဟေမဆော်ရ။',
        examTip: '5℃ 未満: 予熱で施工可。-5℃ 未満: 施工禁止。'
      },
      {
        titleJP: 'パス間温度の上限 (Interpass Temperature Limit)',
        titleMY: 'ဂဟေလွှာကြား အမြင့်ဆုံး အပူချိန်',
        standardRule: 'သံမဏိ၏ ပုံဆောင်ခဲများ ကြီးမားသွားပြီး ခိုင်ခံ့စေးပျစ်မှု မကျစေရန် ဂဟေလွှာတစ်ခုနှင့် တစ်ခုကြား အပူချိန်သည်「350 ℃ 以下」ရှိရမည်။',
        examTip: 'パス間温度上限:「350℃ 以下」。'
      },
      {
        titleJP: 'エンドタブの長さと仕上げ (End Tab Standards)',
        titleMY: 'အစွန်းခံပြား (End Tab) ၏ စံနှုန်းနှင့် ဖယ်ရှားခြင်း',
        standardRule: 'End Tab ၏ အလျားသည်「35mm 以上」ရှိရမည်။ ဖယ်ရှားသည့်အခါ Gas Cutting ဖြင့် ဖြတ်ပြီးနောက် Grinder ဖြင့် သံပြားမျက်နှာပြင်နှင့် တစ်ပြေးညီ ချောမွေ့အောင် သွေးရမည် (-0.5mm〜+0.5mm)။',
        examTip: 'エンドタブ長さ 35mm 以上。ノックオフ（ハンマー叩き折り）は割れの原因となるため禁止。'
      }
    ]
  },
  {
    chapter: 'Chapter 5',
    chapterTitleMY: 'အရည်အသွေးစစ်ဆေးခြင်းနှင့် လုပ်ငန်းခွင်ဘေးကင်းရေး (Inspection & Safety)',
    keyPoints: [
      {
        titleJP: '工場グレード別のUT抜取検査率',
        titleMY: 'စက်ရုံအဆင့်အလိုက် UT စစ်ဆေးရမည့် နှုန်းထား',
        standardRule: 'Mグレード:「10%」 ； Hグレード:「20%」 ； Sグレード:「30%」。Lot အတွင်း မအောင်မြင်ပါက「2倍検査 (ထပ်ဆောင်း ၂ ဆ စစ်ဆေးခြင်း)」ပြုလုပ်ရမည်။',
        examTip: 'M: 10%、H: 20%、S: 30%。不合格時は当該ロットから同数の2倍を追検査。'
      },
      {
        titleJP: '作業中止の気象基準 (Weather Stoppage Criteria)',
        titleMY: 'လုပ်ငန်းရပ်ဆိုင်းရမည့် ရာသီဥတု စံနှုန်း',
        standardRule: 'လေပြင်း: ၁၀ မိနစ် ပျမ်းမျှ လေတိုက်နှုန်း「10 m/s 以上」 ； မိုးသည်းထန်: မိုးရေချိန်「50 mm 以上」 ； နှင်းထူ:「25 cm 以上」。',
        examTip: '強風作業中止:「10分間平均 10m/s 以上」。'
      },
      {
        titleJP: '塗装禁止範囲 (Coating Prohibition Clear Zones)',
        titleMY: 'ဆေးမသုတ်ဘဲ ချန်ထားရမည့် အကွာအဝေး',
        standardRule: 'HTB(TC) bolt ပွတ်တိုက်မျက်နှာပြင်နှင့် ပတ်လည်:「50 mm」 ； အပြည့်ဝင် ဂဟေဆက်နေရာနှင့် ပတ်လည်:「100 mm」。',
        examTip: '摩擦接合面: 50mm、溶接部近傍: 100mm。'
      }
    ]
  }
];
