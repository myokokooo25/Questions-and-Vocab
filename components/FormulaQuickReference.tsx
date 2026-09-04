import React, { useState, useMemo } from 'react';
import JapaneseText from './JapaneseText';
import {
  BookOpenIcon,
  FireIcon,
  BoltIcon,
  SearchIcon,
  ScaleIcon,
  SparkleIcon,
  CheckCircleSolidIcon,
  LightBulbIcon,
  ChevronDownIcon,
  InfoIcon
} from './Icons';

export interface FormulaVariable {
  id: string;
  symbol: string;
  category: 'heat_input' | 'stud_length';
  nameJP: string;
  rubyJP?: string;
  nameEN: string;
  nameMY: string;
  unit: string;
  altUnits?: string;
  conversion?: string;
  typicalExamRange: string;
  descriptionMY: string;
  examTipMY: string;
  formulaContext: string;
  keyRule?: string;
}

export const FORMULA_VARIABLES: FormulaVariable[] = [
  // -------------------------------------------------------------
  // 1. WELDING HEAT INPUT (溶接入熱) VARIABLES
  // -------------------------------------------------------------
  {
    id: 'Q',
    symbol: 'Q',
    category: 'heat_input',
    nameJP: '溶接入熱',
    rubyJP: '<ruby>溶接入熱<rt>ようにゅうねつ</rt></ruby>',
    nameEN: 'Welding Heat Input',
    nameMY: 'ဂဟေဆက် အပူစွမ်းအင် (ဂဟေအလျား ၁ စင်တီမီတာပေါ်သို့ သက်ရောက်သော စုစုပေါင်းအပူ)',
    unit: 'kJ/cm',
    altUnits: 'J/cm, kJ/mm',
    conversion: '1 kJ/cm = 1,000 J/cm = 0.1 kJ/mm = 100 J/mm',
    typicalExamRange: '12 ~ 35 kJ/cm (SN400/SN490 စံနှုန်း)',
    formulaContext: 'Q = (60 × E × I) / (v × 1,000) [kJ/cm]',
    descriptionMY: 'ဂဟေဆော်ရာတွင် လျှပ်စစ် Arc မှ သံမဏိထဲသို့ ဝင်ရောက်စိမ့်ဝင်သွားသော စုစုပေါင်း အပူစွမ်းအင် ပမာဏ ဖြစ်သည်။',
    examTipMY: 'အပူနည်းလွန်းပါက (<12 kJ/cm) အအေးမြန်ပြီး မာဆတ်အက်ကွဲ (Low-temp cracking) ဖြစ်တတ်ပြီး၊ အပူများလွန်းပါက (>40 kJ/cm) သံသားမျက်စိကြီးထွားကာ Toughness (Charpy ရိုက်ခတ်မှုခံနိုင်ရည်) ကျဆင်းစေသည်။',
    keyRule: 'SN400/SN490 စံသတ်မှတ်ချက်: 12 ~ 35 kJ/cm'
  },
  {
    id: 'E',
    symbol: 'E (V)',
    category: 'heat_input',
    nameJP: 'アーク電圧',
    rubyJP: '<ruby>アーク電圧<rt>アークでんあつ</rt></ruby>',
    nameEN: 'Arc Voltage',
    nameMY: 'Arc ဗို့အား (ဂဟေဆက် လျှပ်စစ်ဗို့အား)',
    unit: 'V (Volt)',
    typicalExamRange: '20 ~ 36 V (ပုံမှန်စာမေးပွဲ: 26 ~ 32 V)',
    formulaContext: 'Q = (60 × E × I) / (v × 1,000)',
    descriptionMY: 'Welding Arc မီးတောက်ကို တည်ငြိမ်စွာ ဖြစ်ပေါ်စေသော လျှပ်စစ်ဗို့အား (Electromotive force) ဖြစ်သည်။',
    examTipMY: 'ဗို့အားတက်လာပါက Arc အလျားရှည်ပြီး Bead အကျယ်ပြန့်လာကာ အပူစွမ်းအင်တက်လာသည်။ ပုံမှန် CO2 Semi-auto တွင် 26~30V အသုံးများသည်။',
    keyRule: 'Standard: 20V ~ 36V'
  },
  {
    id: 'I',
    symbol: 'I (A)',
    category: 'heat_input',
    nameJP: '溶接電流',
    rubyJP: '<ruby>溶接電流<rt>ようせつでんりゅう</rt></ruby>',
    nameEN: 'Welding Current',
    nameMY: 'ဂဟေဆက် လျှပ်စီးပမာဏ (Current/Ampere)',
    unit: 'A (Ampere)',
    typicalExamRange: '180 ~ 350 A (Semi-auto), 400 ~ 650 A (SAW)',
    formulaContext: 'Q = (60 × E × I) / (v × 1,000)',
    descriptionMY: 'ဂဟေဝါယာအရည်ပျော်ကျစေရန်နှင့် အခြေခံသံသားကို အရည်ပျော်စေရန် စီးဆင်းသော လျှပ်စီးကြောင်း ဖြစ်သည်။',
    examTipMY: 'Current မြင့်လေ Penetration (အရည်ပျော်ဝင်ရောက်မှု) နက်ရှိုင်းလေဖြစ်ပြီး၊ အပူစွမ်းအင်နှင့် တိုက်ရိုက်အချိုးကျသည်။',
    keyRule: 'Current တက်ပါက Penetration နှင့် Heat Input အချိုးကျတက်သည်'
  },
  {
    id: 'v',
    symbol: 'v',
    category: 'heat_input',
    nameJP: '溶接速度',
    rubyJP: '<ruby>溶接速度<rt>ようせつそくど</rt></ruby>',
    nameEN: 'Welding Travel Speed',
    nameMY: 'ဂဟေဆော်အမြန်နှုန်း (အလျားလိုက် ရွေ့လျားနှုန်း)',
    unit: 'cm/min (Formula base)',
    altUnits: 'mm/s (Field unit)',
    conversion: '1 mm/s = 6 cm/min | 1 cm/min = 1/6 mm/s ≈ 0.167 mm/s',
    typicalExamRange: '20 ~ 35 cm/min (3.3 ~ 5.8 mm/s)',
    formulaContext: 'v = (60 × E × I) / (Q × 1,000) [cm/min]',
    descriptionMY: 'ဂဟေဆော်ချောင်း သို့မဟုတ် Torch ၏ တစ်မိနစ်လျှင် ရွေ့လျားသွားသော အလျားလိုက် အကွာအဝေး (cm) ဖြစ်သည်။',
    examTipMY: '【အထူးသတိပြုရန်】 စာမေးပွဲတွင် Speed ကို mm/s ဖြင့် ပေးထားပါက မဖြစ်မနေ 6 ဖြင့် မြှောက်၍ cm/min သို့ အရင်ပြောင်းပေးရမည် (ဥပမာ 5 mm/s × 6 = 30 cm/min)။ Speed မြန်လေ Heat Input နည်းလေဖြစ်သည်။',
    keyRule: 'Unit Check: mm/s × 6 = cm/min'
  },
  {
    id: 'const_60',
    symbol: '60',
    category: 'heat_input',
    nameJP: '時間換算係数',
    rubyJP: '<ruby>時間換算係数<rt>じかんかんさんけいすう</rt></ruby>',
    nameEN: 'Time Conversion Factor (Seconds to Minutes)',
    nameMY: 'စက္ကန့်မှ မိနစ်သို့ ပြောင်းလဲသော ကိန်းသေ (၆၀ စက္ကန့် = ၁ မိနစ်)',
    unit: 'sec/min',
    typicalExamRange: '60 (Constant)',
    formulaContext: '60 × E × I',
    descriptionMY: 'လျှပ်စစ်စွမ်းအင် (Joule) သည် Watt × second ဖြစ်ပြီး Speed ကို cm/min (မိနစ်) ဖြင့် တိုင်းတာသောကြောင့် ၁ မိနစ်ရှိ စက္ကန့် ၆၀ ဖြင့် မြှောက်ပေးခြင်းဖြစ်သည်။',
    examTipMY: 'ဖော်မြူလာတွင် 60 ကို အပေါ်ပိုင်းတွင် E နှင့် I တို့နှင့်အတူ မြှောက်ပေးရသည်။',
    keyRule: '1 min = 60 sec conversion'
  },
  {
    id: 'const_1000',
    symbol: '1,000',
    category: 'heat_input',
    nameJP: '単位換算係数',
    rubyJP: '<ruby>単位換算係数<rt>たんいかんさんけいすう</rt></ruby>',
    nameEN: 'Energy Conversion Factor (Joule to KiloJoule)',
    nameMY: 'ဂျူးလ် မှ ကီလိုဂျူးလ် သို့ ပြောင်းလဲသော ကိန်းသေ (၁,၀၀၀ J = ၁ kJ)',
    unit: 'J/kJ',
    typicalExamRange: '1,000 (Constant)',
    formulaContext: '... / (v × 1,000) [kJ/cm]',
    descriptionMY: 'အပူစွမ်းအင် တွက်ချက်ရလဒ် Joule (J/cm) ကို KiloJoule (kJ/cm) သို့ ပြောင်းလဲရန် ၁,၀၀၀ ဖြင့် စားပေးခြင်းဖြစ်သည်။',
    examTipMY: 'အကယ်၍ စာမေးပွဲမေးခွန်းက အဖြေကို J/cm ဖြင့် တောင်းဆိုပါက ၁,၀၀၀ ဖြင့် စားရန် မလိုပါ။ kJ/cm ဖြစ်မှသာ ၁,၀၀၀ ဖြင့် စားရမည်။',
    keyRule: '1 kJ = 1,000 J'
  },

  // -------------------------------------------------------------
  // 2. STUD LENGTH & COMPOSITE SLAB (スタッド溶接) VARIABLES
  // -------------------------------------------------------------
  {
    id: 'L0',
    symbol: 'L₀',
    category: 'stud_length',
    nameJP: '溶接前スタッド軸長',
    rubyJP: '<ruby>溶接前<rt>ようせつまえ</rt></ruby>スタッド<ruby>軸長<rt>じくちょう</rt></ruby>',
    nameEN: 'Nominal Stud Length (Before Welding)',
    nameMY: 'ဂဟေမဆော်မီ မူလ Stud တံအလျား (Nominal Length)',
    unit: 'mm',
    typicalExamRange: '80, 90, 100, 110, 120, 130, 150 mm',
    formulaContext: 'L_finish = L₀ - ΔL',
    descriptionMY: 'ခေါင်း (Head) မပါဝင်ဘဲ Stud သံချောင်း ကိုယ်ထည်၏ မူလစက်ရုံထုတ် သတ်မှတ်အလျား ဖြစ်သည်။',
    examTipMY: 'Deck Plate ပေါ်ထိုးဖောက်တပ်ဆင်ရာတွင် Deck အမြင့် 50mm သို့မဟုတ် 75mm ပေါ်မူတည်၍ 130mm (သို့မဟုတ် 150mm) ကို အသုံးများသည်။',
    keyRule: 'Standard Lengths: 80 ~ 150mm'
  },
  {
    id: 'delta_L',
    symbol: 'ΔL',
    category: 'stud_length',
    nameJP: '軸長減少量',
    rubyJP: '<ruby>軸長減少量<rt>じくちょうげんしょうりょう</rt></ruby>',
    nameEN: 'Burn-off Length Reduction / Upset Allowance',
    nameMY: 'ဂဟေဆော်၍ အရည်ပျော်ဖိချရာတွင် ကျုံ့ဝင်တိုတောင်းသွားမှုပမာဏ',
    unit: 'mm',
    typicalExamRange: '3.0 ~ 5.0 mm (ပုံမှန်စံနှုန်း: 4.0 mm)',
    formulaContext: 'ΔL ≈ 4.0 mm (Standard Nominal)',
    descriptionMY: 'Arc စတင်ပြီး Stud အဖျားသံရည်ပျော်ချိန်တွင် Spring ဖိအားဖြင့် ဖိသွင်းလိုက်သောအခါ မူလအလျားထက် တိုသွားသော ပမာဏ ဖြစ်သည်။',
    examTipMY: 'စာမေးပွဲ တွက်ချက်မှုများတွင် အထူးသတ်မှတ်ချက်မပါရှိပါက ΔL = 4 mm ဟု အမြဲတမ်း ယူဆတွက်ချက်ရသည်။',
    keyRule: 'Nominal Reduction: 4.0 mm (Range: 3~5mm)'
  },
  {
    id: 'L_finish',
    symbol: 'L_finish (H_finish)',
    category: 'stud_length',
    nameJP: '溶接後仕上がり軸長',
    rubyJP: '<ruby>溶接後仕上<rt>ようせつごしあ</rt></ruby>がり<ruby>軸長<rt>じくちょう</rt></ruby>',
    nameEN: 'Finished Stud Length (Effective Height)',
    nameMY: 'ဂဟေဆော်ပြီးနောက် အမှန်တကယ် ကျန်ရှိသောအလျား',
    unit: 'mm',
    typicalExamRange: 'Tolerance: ±2.0 mm (JASS 6)',
    formulaContext: 'L_finish = L₀ - ΔL (e.g. 130 - 4 = 126 mm)',
    descriptionMY: 'Flange သံမျက်နှာပြင်မှ Stud ခေါင်းအောက်ခြေ (သို့မဟုတ် ထိပ်) အထိ အမှန်တကယ် ကျန်ရှိသော အမြင့် ဖြစ်သည်။',
    examTipMY: 'JASS 6 စံနှုန်းအရ Finished Stud Length ၏ ခွင့်ပြုကွဲလွဲချက် (Tolerance) သည် ±2.0 mm အတွင်း ရှိရမည်။',
    keyRule: 'Tolerance: ±2.0 mm (JASS 6)'
  },
  {
    id: 'H_deck',
    symbol: 'H_deck (h_d)',
    category: 'stud_length',
    nameJP: 'デッキプレートのリブ高さ',
    rubyJP: 'デッキプレートのリブ<ruby>高<rt>たか</rt></ruby>さ',
    nameEN: 'Deck Plate Rib Height',
    nameMY: 'Deck Plate သံပြားမြောင်း၏ အမြင့်',
    unit: 'mm',
    typicalExamRange: '50 mm သို့မဟုတ် 75 mm',
    formulaContext: 'H_protrusion = L_finish - H_deck ≥ 30 mm',
    descriptionMY: 'Through-Deck Composite Slab စနစ်တွင် အသုံးပြုသော Corrugated Deck သံပြား၏ မြောင်းအမြင့် ဖြစ်သည်။',
    examTipMY: 'Deck မြောင်းအမြင့် 50mm သို့မဟုတ် 75mm ပေါ်မူတည်၍ Stud အလျားကို အနည်းဆုံး 30mm ကျော်လွန်ထွက်ရှိအောင် ရွေးချယ်ရသည်။',
    keyRule: 'Standard: 50mm / 75mm'
  },
  {
    id: 'T_slab',
    symbol: 'T_slab (t_c)',
    category: 'stud_length',
    nameJP: 'コンクリートスラブ厚さ',
    rubyJP: 'コンクリートスラブ<ruby>厚<rt>あつ</rt></ruby>さ',
    nameEN: 'Total Concrete Slab Thickness',
    nameMY: 'ကွန်ကရစ် Slab ကြမ်းခင်း၏ စုစုပေါင်းအထူ',
    unit: 'mm',
    typicalExamRange: '120, 130, 150, 180 mm',
    formulaContext: 'C_cover = T_slab - L_finish ≥ 25 mm',
    descriptionMY: 'Deck Plate အောက်ခြေမှ ကွန်ကရစ်မျက်နှာပြင်ထိပ်အထိ စုစုပေါင်း ကြမ်းခင်းအထူ ဖြစ်သည်။',
    examTipMY: 'Slab အထူပေါ်မူတည်၍ Stud ခေါင်းထိပ်ပေါ်ရှိ ကွန်ကရစ်အဖုံးအထူ (Cover) 25mm ထက် မနည်းစေရန် စိစစ်ရသည်။',
    keyRule: 'Standard: 120mm, 130mm, 150mm'
  },
  {
    id: 'C_cover',
    symbol: 'C_cover',
    category: 'stud_length',
    nameJP: 'スタッド頭部かぶり厚さ',
    rubyJP: 'スタッド<ruby>頭部<rt>とうぶ</rt></ruby>かぶり<ruby>厚<rt>あつ</rt></ruby>さ',
    nameEN: 'Concrete Cover Above Stud Head',
    nameMY: 'Stud ခေါင်းထိပ်ပေါ်ရှိ ကွန်ကရစ် အဖုံးအထူ',
    unit: 'mm',
    typicalExamRange: '≥ 25 mm (JASS 6 စံသတ်မှတ်ချက်)',
    formulaContext: 'C_cover = T_slab - L_finish ≥ 25 mm',
    descriptionMY: 'မီးဘေးလုံခြုံရေးနှင့် သံချေးတက်ခြင်း ကာကွယ်ရန် Stud ခေါင်းထိပ်ပေါ်တွင် ရှိရမည့် ကွန်ကရစ်အထူ ဖြစ်သည်။',
    examTipMY: 'တွက်ချက်ရလဒ်တွင် ကွန်ကရစ်အဖုံးအထူ 25mm မပြည့်ပါက စာမေးပွဲတွင် 不適合 (Fail) ဟု မှတ်ယူရသည်။',
    keyRule: 'JASS 6 စံနှုန်း: C_cover ≥ 25 mm'
  },
  {
    id: 'H_protrusion',
    symbol: 'H_protrusion',
    category: 'stud_length',
    nameJP: 'デッキプレート頂部からの突出長さ',
    rubyJP: 'デッキプレート<ruby>頂部<rt>ちょうぶ</rt></ruby>からの<ruby>突出長<rt>とっしゅつなが</rt></ruby>さ',
    nameEN: 'Stud Protrusion Above Deck Rib',
    nameMY: 'Deck မြောင်းထိပ်အထက်သို့ Stud ခေါင်း ထွက်နေရမည့် အမြင့်',
    unit: 'mm',
    typicalExamRange: '≥ 30 mm (JASS 6 စံသတ်မှတ်ချက်)',
    formulaContext: 'H_protrusion = L_finish - H_deck ≥ 30 mm',
    descriptionMY: 'သံမဏိရက်မနှင့် ကွန်ကရစ်တို့ကြား Composite Shear Action (တွဲဖက်ခိုင်မြဲအား) ကောင်းစွာဖြစ်ပေါ်ရန် Deck မြောင်းထက် ပိုထွက်နေရမည့် အမြင့် ဖြစ်သည်။',
    examTipMY: 'Through-Deck စနစ်တွင် Deck အမြင့် 50mm ဖြစ်ပြီး Stud အလျား 100mm ဆိုပါက 100 - 4 = 96mm → 96 - 50 = 46mm ≥ 30mm (OK) ဟု တွက်ချက်ရသည်။ 30mm မပြည့်ပါက အသုံးမပြုနိုင်ပါ။',
    keyRule: 'JASS 6 စံနှုန်း: H_protrusion ≥ 30 mm'
  },
  {
    id: 'd',
    symbol: 'd (φ)',
    category: 'stud_length',
    nameJP: 'スタッド軸径',
    rubyJP: 'スタッド<ruby>軸径<rt>じくけい</rt></ruby>',
    nameEN: 'Stud Shank Diameter',
    nameMY: 'Stud သံချောင်း၏ အချင်း (d)',
    unit: 'mm',
    typicalExamRange: 'φ13, φ16, φ19, φ22 mm (Typical: φ19 mm)',
    formulaContext: 'd ≤ 2.5 × t_f ⇔ t_f ≥ d / 2.5',
    descriptionMY: 'Stud သံချောင်းကိုယ်ထည်၏ အချင်းအရွယ်အစား ဖြစ်သည်။',
    examTipMY: 'အချင်း d နှင့် Flange အထူ tf ဆက်စပ်မှု (d ≤ 2.5 × tf) နှင့် Pitch အကွာအဝေး (≥ 5d)၊ Edge clearance (≥ 2.5d) တို့ကို d ဖြင့် အခြေခံတွက်ချက်သည်။',
    keyRule: 'φ19mm အသုံးအများဆုံး'
  },
  {
    id: 't_f',
    symbol: 't_f',
    category: 'stud_length',
    nameJP: '梁フランジ板厚',
    rubyJP: '<ruby>梁<rt>はり</rt></ruby>フランジ<ruby>板厚<rt>いたあつ</rt></ruby>',
    nameEN: 'Beam Flange Plate Thickness',
    nameMY: 'ရက်မသံမဏိပြား၏ အထူ (Flange Thickness)',
    unit: 'mm',
    typicalExamRange: 't_f ≥ d / 2.5 (e.g. φ19 → t_f ≥ 7.6 mm, standard ≥ 8 or 9mm)',
    formulaContext: 't_f ≥ d / 2.5 ⇔ d ≤ 2.5 × t_f',
    descriptionMY: 'Stud ဂဟေဆော်ရာတွင် Flange သံပြားပေါက်ထွက်မသွားစေရန်နှင့် အပူဒဏ်ခံနိုင်ရန် လိုအပ်သော အနိမ့်ဆုံး Flange အထူ ဖြစ်သည်။',
    examTipMY: 'စာမေးပွဲတွင် "梁フランジ板厚はスタッド軸径の 1/2.5 以上" ဟူ၍ မကြာခဏ မေးလေ့ရှိသည်။ ဥပမာ φ19mm အတွက် အနည်းဆုံး 8mm (7.6mm ထက်ကြီး) လိုအပ်သည်။',
    keyRule: 'Rule: t_f ≥ d / 2.5 (သို့မဟုတ် d ≤ 2.5 × t_f)'
  },
  {
    id: 'pitch_edge',
    symbol: 'Pitch & Edge',
    category: 'stud_length',
    nameJP: 'スタッド間隔 & へりあき',
    rubyJP: 'スタッド<ruby>間隔<rt>かんかく</rt></ruby> & へりあき',
    nameEN: 'Stud Center-to-Center Pitch & Edge Clearance',
    nameMY: 'Stud ဗဟိုအကွာအဝေးနှင့် ဘေးစွန်းကင်းလွတ်မှု အကွာအဝေး',
    unit: 'mm',
    typicalExamRange: 'Pitch ≥ 5d | Edge ≥ 2.5d နှင့် ≥ 50 mm',
    formulaContext: 'Pitch ≥ 5d, Edge ≥ 2.5d & ≥ 50 mm',
    descriptionMY: 'Stud အချင်းချင်းကြား ဗဟိုအကွာအဝေး (Pitch) နှင့် Flange ဘေးစွန်းမှ Stud ဗဟိုအထိ အကွာအဝေး (Edge distance) ဖြစ်သည်။',
    examTipMY: 'φ19mm အတွက် Pitch သည် အနည်းဆုံး 5 × 19 = 95mm ဖြစ်ပြီး၊ Edge သည် 2.5 × 19 = 47.5mm သို့သော် 50mm ထက် မနည်းရသောကြောင့် အနည်းဆုံး 50mm ဖြစ်ရမည်။',
    keyRule: 'Pitch ≥ 5d, Edge ≥ 2.5d နှင့် ≥ 50 mm'
  }
];

interface FormulaQuickReferenceProps {
  initialCategory?: 'all' | 'heat_input' | 'stud_length';
  isCollapsible?: boolean;
  onSelectVariable?: (variable: FormulaVariable) => void;
  compact?: boolean;
}

export const FormulaQuickReference: React.FC<FormulaQuickReferenceProps> = ({
  initialCategory = 'all',
  isCollapsible = false,
  onSelectVariable,
  compact = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'heat_input' | 'stud_length'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(!isCollapsible);
  const [expandedVarId, setExpandedVarId] = useState<string | null>(null);

  // Filtered variables
  const filteredVariables = useMemo(() => {
    return FORMULA_VARIABLES.filter(v => {
      // Category filter
      if (selectedCategory !== 'all' && v.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        v.symbol.toLowerCase().includes(q) ||
        v.nameJP.toLowerCase().includes(q) ||
        v.nameEN.toLowerCase().includes(q) ||
        v.nameMY.toLowerCase().includes(q) ||
        v.unit.toLowerCase().includes(q) ||
        v.typicalExamRange.toLowerCase().includes(q) ||
        (v.keyRule && v.keyRule.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-blue-500/20 overflow-hidden transition-all duration-300">
      
      {/* Header Bar */}
      <div className="p-4 sm:p-6 bg-neumorphic-bg border-b border-slate-300/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-neumorphic-inset shrink-0">
            <BookOpenIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
                変数・記号・単位 クイックリファレンス
              </h2>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300">
                Formula Guide
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              ဂဟေဆက် အပူစွမ်းအင်နှင့် Stud ဖော်မြူလာများရှိ သင်္ကေတများ၊ အဓိပ္ပာယ်ဖွင့်ဆိုချက်များနှင့် ယူနစ်များ အညွှန်း
            </p>
          </div>
        </div>

        {/* Collapsible Toggle Button */}
        {isCollapsible && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-end sm:self-center px-3 py-1.5 rounded-xl text-xs font-bold bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-600 dark:text-slate-300 flex items-center gap-1.5 transition-all"
          >
            <span>{isExpanded ? 'ခေါက်သိမ်းမည်' : 'အပြည့်အစုံကြည့်မည်'}</span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Main Body */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-5">
          
          {/* Controls: Category Filter Pills + Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Category Filter Pills */}
            <div className="flex p-1 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-xs font-bold overflow-x-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl transition-all shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600 dark:text-blue-400'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                အားလုံး ({FORMULA_VARIABLES.length})
              </button>
              <button
                onClick={() => setSelectedCategory('heat_input')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
                  selectedCategory === 'heat_input'
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-amber-600 dark:text-amber-400'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <FireIcon className="w-3.5 h-3.5 text-amber-500" />
                <span>溶接入熱 (Heat Input)</span>
              </button>
              <button
                onClick={() => setSelectedCategory('stud_length')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
                  selectedCategory === 'stud_length'
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <BoltIcon className="w-3.5 h-3.5 text-indigo-500" />
                <span>スタッド (Stud)</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-xs">
              <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search symbol, unit, kanji... (ရှာဖွေရန်)"
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Quick Formula Highlights Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset text-xs">
            
            {/* Heat Input Formula Snippet */}
            <div className="p-2.5 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-500/20 space-y-1">
              <div className="flex items-center justify-between font-bold text-amber-800 dark:text-amber-300">
                <span className="flex items-center gap-1">
                  <FireIcon className="w-3.5 h-3.5" />
                  <span>溶接入熱 (Heat Input Formula):</span>
                </span>
                <span className="font-mono text-[11px] bg-amber-200/50 dark:bg-amber-900/50 px-1.5 py-0.5 rounded">
                  Q = (60 × E × I) / (v × 1000)
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                E: Volts (V) | I: Amperes (A) | v: Speed (cm/min) | Q: Heat Input (kJ/cm)
              </p>
            </div>

            {/* Stud Formulas Snippet */}
            <div className="p-2.5 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-500/20 space-y-1">
              <div className="flex items-center justify-between font-bold text-indigo-800 dark:text-indigo-300">
                <span className="flex items-center gap-1">
                  <BoltIcon className="w-3.5 h-3.5" />
                  <span>スタッド溶接 (Stud Length Rules):</span>
                </span>
                <span className="font-mono text-[11px] bg-indigo-200/50 dark:bg-indigo-900/50 px-1.5 py-0.5 rounded">
                  L_finish = L₀ - ΔL (ΔL ≈ 4mm)
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                Deck Protrusion ≥ 30mm | Cover ≥ 25mm | Flange tf ≥ d / 2.5
              </p>
            </div>
          </div>

          {/* Variables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredVariables.map(v => {
              const isDetailsExpanded = expandedVarId === v.id;
              const isHeatInput = v.category === 'heat_input';

              return (
                <div
                  key={v.id}
                  className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-neumorphic-bg shadow-neumorphic-outset border transition-all duration-200 ${
                    isHeatInput ? 'border-amber-500/20 hover:border-amber-500/40' : 'border-indigo-500/20 hover:border-indigo-500/40'
                  }`}
                >
                  {/* Top Row: Symbol Badge + Name + Unit */}
                  <div className="flex items-start justify-between gap-3">
                    
                    {/* Symbol Pill */}
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono text-sm sm:text-base font-black px-3 py-1 rounded-xl shadow-neumorphic-inset ${
                          isHeatInput
                            ? 'text-amber-700 dark:text-amber-400 bg-amber-50/30'
                            : 'text-indigo-700 dark:text-indigo-400 bg-indigo-50/30'
                        }`}
                      >
                        {v.symbol}
                      </span>
                      <div>
                        <h3 className="text-sm font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5 flex-wrap">
                          {v.rubyJP ? (
                            <JapaneseText text={v.rubyJP} />
                          ) : (
                            <span>{v.nameJP}</span>
                          )}
                          <span className="text-[11px] text-slate-400 font-normal">
                            ({v.nameEN})
                          </span>
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {v.nameMY}
                        </p>
                      </div>
                    </div>

                    {/* Standard Unit Badge */}
                    <div className="text-right shrink-0">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-mono font-black rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                        {v.unit}
                      </span>
                      {v.altUnits && (
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          {v.altUnits}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Formula Context & Rule Bar */}
                  <div className="mt-3 p-2.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400 truncate">
                      {v.formulaContext}
                    </span>
                    {v.keyRule && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                        {v.keyRule}
                      </span>
                    )}
                  </div>

                  {/* Definition in Myanmar */}
                  <div className="mt-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {v.descriptionMY}
                  </div>

                  {/* Typical Exam Range / Benchmark */}
                  <div className="mt-2.5 pt-2 border-t border-slate-300/30 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium text-[11px]">စာမေးပွဲစံသတ်မှတ်ချက်:</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200 text-right font-mono">
                      {v.typicalExamRange}
                    </span>
                  </div>

                  {/* Unit Conversion Note if present */}
                  {v.conversion && (
                    <div className="mt-2 p-2 rounded-lg bg-blue-50/40 dark:bg-blue-950/20 border border-blue-500/20 text-[11px] text-blue-800 dark:text-blue-300 font-mono">
                      <span className="font-bold">Unit Conversion: </span>
                      {v.conversion}
                    </div>
                  )}

                  {/* Toggle Exam Tip / Full Details */}
                  <div className="mt-2.5">
                    <button
                      onClick={() => setExpandedVarId(isDetailsExpanded ? null : v.id)}
                      className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <LightBulbIcon className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isDetailsExpanded ? 'စာမေးပွဲ အကြံပြုချက် ဝှက်မည်' : 'စာမေးပွဲ အကြံပြုချက် ကြည့်မည်'}</span>
                    </button>

                    {isDetailsExpanded && (
                      <div className="mt-2 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 leading-relaxed space-y-1">
                        <div className="font-bold flex items-center gap-1 text-[11px] uppercase tracking-wide text-amber-800 dark:text-amber-300">
                          <SparkleIcon className="w-3.5 h-3.5 text-amber-500" />
                          <span>High-Yield Exam Tip & JASS 6 Rule</span>
                        </div>
                        <p>{v.examTipMY}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredVariables.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-xs">
              "{searchQuery}" နှင့် ကိုက်ညီသော သင်္ကေတ သို့မဟုတ် ယူနစ် ရှာမတွေ့ပါ။
            </div>
          )}

          {/* Standard Units Conversion Cheatsheet Footer */}
          <div className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-2 text-xs">
            <div className="font-black text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <ScaleIcon className="w-4 h-4 text-blue-600" />
              <span>အရေးကြီး ယူနစ်ပြောင်းလဲမှု အနှစ်ချုပ် (Essential Unit Conversions Cheatsheet)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-slate-600 dark:text-slate-300">
              <div className="p-2 rounded-lg bg-neumorphic-bg shadow-neumorphic-outset">
                <span className="text-amber-600 font-bold block">1 mm/s = 6 cm/min</span>
                <span className="text-slate-400 text-[10px]">v(mm/s) × 6 = v(cm/min)</span>
              </div>
              <div className="p-2 rounded-lg bg-neumorphic-bg shadow-neumorphic-outset">
                <span className="text-blue-600 font-bold block">1 kJ/cm = 1,000 J/cm</span>
                <span className="text-slate-400 text-[10px]">= 100 J/mm = 0.1 kJ/mm</span>
              </div>
              <div className="p-2 rounded-lg bg-neumorphic-bg shadow-neumorphic-outset">
                <span className="text-indigo-600 font-bold block">ΔL ≈ 4.0 mm (Standard)</span>
                <span className="text-slate-400 text-[10px]">Finished tol: ±2.0 mm</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormulaQuickReference;
