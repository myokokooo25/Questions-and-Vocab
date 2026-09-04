import React, { useState, useMemo } from 'react';
import JapaneseText from './JapaneseText';
import {
  ChevronLeftIcon,
  CalculatorIcon,
  FireIcon,
  BoltIcon,
  CheckCircleSolidIcon,
  XCircleSolidIcon,
  LightBulbIcon,
  SparkleIcon,
  RefreshIcon,
  ScaleIcon,
  BookOpenIcon
} from './Icons';
import FormulaQuickReference from './FormulaQuickReference';

interface EngineeringCalculatorProps {
  onGoBack: () => void;
}

type TabType = 'heat_input' | 'stud_length' | 'quick_ref' | 'practice';

export const EngineeringCalculator: React.FC<EngineeringCalculatorProps> = ({ onGoBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('heat_input');

  // -------------------------------------------------------------
  // 1. WELDING HEAT INPUT STATE
  // Formula: Q = (E * I * 60) / (v * 1000) [kJ/cm]
  // -------------------------------------------------------------
  const [voltage, setVoltage] = useState<number>(28); // E in Volts
  const [current, setCurrent] = useState<number>(280); // I in Amperes
  const [speed, setSpeed] = useState<number>(28); // v in cm/min
  const [speedUnit, setSpeedUnit] = useState<'cm_min' | 'mm_sec'>('cm_min');
  const [calcMode, setCalcMode] = useState<'forward' | 'reverse'>('forward');
  const [targetHeatInput, setTargetHeatInput] = useState<number>(20); // target Q in kJ/cm

  // Effective speed in cm/min
  const effectiveSpeedCmMin = useMemo(() => {
    if (speedUnit === 'mm_sec') {
      // 1 mm/s = 0.1 cm/s = 6 cm/min
      return speed * 6;
    }
    return speed;
  }, [speed, speedUnit]);

  // Forward calculation: Heat Input Q in kJ/cm
  const calculatedHeatInputKjCm = useMemo(() => {
    if (effectiveSpeedCmMin <= 0) return 0;
    return (voltage * current * 60) / (effectiveSpeedCmMin * 1000);
  }, [voltage, current, effectiveSpeedCmMin]);

  // Reverse calculation: Required speed v in cm/min for target Q
  const calculatedRequiredSpeed = useMemo(() => {
    if (targetHeatInput <= 0) return 0;
    return (voltage * current * 60) / (targetHeatInput * 1000);
  }, [voltage, current, targetHeatInput]);

  // Quality evaluation of heat input
  const heatInputEvaluation = useMemo(() => {
    const q = calcMode === 'forward' ? calculatedHeatInputKjCm : targetHeatInput;
    if (q <= 0) return { status: 'none', labelJP: '-', labelMY: '-', color: 'slate', descMY: '' };
    if (q < 12) {
      return {
        status: 'low',
        labelJP: '入熱不足（急冷・硬化・割れ危険）',
        labelMY: 'အပူနည်းလွန်းသည် (အအေးမြန်ပြီး မာဆတ်အက်ကွဲနိုင်ခြေရှိ)',
        color: 'red',
        badge: 'Low Heat Input',
        descMY: 'အပူနည်းပါက အအေးမြန် (Rapid cooling) သွားသဖြင့် HAZ တွင် မာကျောမှု (Hv) မြင့်တက်ကာ မာဆတ်အက်ကွဲခြင်း (Low-temp cracking) ဖြစ်ပွားနိုင်သည်။ အထူကြီးပါက သေချာ Preheat လုပ်ရန် လိုအပ်သည်။'
      };
    } else if (q >= 12 && q <= 35) {
      return {
        status: 'optimal',
        labelJP: '適正入熱範囲（SN400 / SN490 標準施工）',
        labelMY: 'အကောင်းဆုံး စံသတ်မှတ်ချက် အပူချိန်ဘောင် (Standard Range)',
        color: 'emerald',
        badge: 'Optimal Range',
        descMY: 'စံနှုန်းအရ အသင့်တော်ဆုံး ဂဟေဆက်အပူချိန် ဖြစ်သည်။ SN400၊ SN490 သံမဏိများအတွက် သင့်တင့်သော ခိုင်ခံ့စွမ်းရည်နှင့် ရိုက်ခတ်မှုခံနိုင်ရည် (Toughness) ကို ရရှိစေသည်။'
      };
    } else if (q > 35 && q <= 45) {
      return {
        status: 'caution',
        labelJP: '入熱上限注意（靭性低下の監視が必要）',
        labelMY: 'အပူများပြားမှု သတိပြုရန် (Toughness လျော့ကျနိုင်ခြေ)',
        color: 'amber',
        badge: 'High Heat Input',
        descMY: 'ဂဟေအပူ များပြားသည့်ဘက်သို့ ရောက်ရှိနေသည်။ အထူကြီးသော သံမဏိအတွက် အပူထိန်းသိမ်းမှု စံနှုန်းများ သတိပြုရမည်။'
      };
    } else {
      return {
        status: 'high',
        labelJP: '過大入熱（結晶粒粗大化・靭性低下・変形大）',
        labelMY: 'အပူလွန်ကဲနေသည် (သံသားကြမ်းပြီး Toughness ပြင်းထန်စွာကျဆင်း)',
        color: 'red',
        badge: 'Excessive Heat Input',
        descMY: 'အပူလွန်ကဲသဖြင့် အအေးနှေးကွေးပြီး သံသားမျက်စိ (Grains) ကြီးထွားကြမ်းတမ်းကာ Charpy ရိုက်ခတ်မှုစွမ်းအင် (Impact energy) ကျဆင်းစေသည်။ ငလျင်ဒဏ်ခံ အဆောက်အအုံများတွင် တင်းကျပ်စွာ ကန့်သတ်ထားသည်။'
      };
    }
  }, [calcMode, calculatedHeatInputKjCm, targetHeatInput]);

  // Presets for Welding
  const applyWeldingPreset = (v: number, i: number, s: number, u: 'cm_min' | 'mm_sec') => {
    setVoltage(v);
    setCurrent(i);
    setSpeed(s);
    setSpeedUnit(u);
    setCalcMode('forward');
  };

  // -------------------------------------------------------------
  // 2. STUD LENGTH CALCULATIONS STATE
  // -------------------------------------------------------------
  // Section A: Burn-off and finished stud length
  const [originalStudLength, setOriginalStudLength] = useState<number>(130); // L0 (mm)
  const [burnOffAmount, setBurnOffAmount] = useState<number>(4.0); // Delta L (3~5mm, standard 4mm)
  const finishedStudLength = useMemo(() => {
    return Math.max(0, originalStudLength - burnOffAmount);
  }, [originalStudLength, burnOffAmount]);

  // Section B: Through-Deck Composite Slab verification
  const [slabThickness, setSlabThickness] = useState<number>(120); // tc (mm)
  const [deckHeight, setDeckHeight] = useState<number>(50); // hd (mm)
  const [concreteCoverReq, setConcreteCoverReq] = useState<number>(25); // standard 25mm

  const deckCalculations = useMemo(() => {
    // JASS 6 rule: Stud protrusion above deck rib top >= 30mm (or 4d)
    const minFinishedHeight = deckHeight + 30;
    // JASS 6 rule: Concrete cover >= 25mm => Max finished height = slabThickness - concreteCoverReq
    const maxFinishedHeight = slabThickness - concreteCoverReq;
    
    // Protrusion of current finished stud above deck rib
    const currentProtrusion = finishedStudLength - deckHeight;
    // Top cover with current finished stud
    const currentCover = slabThickness - finishedStudLength;

    // Checks
    const isProtrusionOk = currentProtrusion >= 30;
    const isCoverOk = currentCover >= concreteCoverReq;
    const isTotalOk = isProtrusionOk && isCoverOk;

    // Recommended original stud standard order length (finished + 4mm)
    const minOriginalNeeded = minFinishedHeight + burnOffAmount;
    const maxOriginalAllowed = maxFinishedHeight + burnOffAmount;

    return {
      minFinishedHeight,
      maxFinishedHeight,
      currentProtrusion,
      currentCover,
      isProtrusionOk,
      isCoverOk,
      isTotalOk,
      minOriginalNeeded,
      maxOriginalAllowed
    };
  }, [slabThickness, deckHeight, concreteCoverReq, finishedStudLength, burnOffAmount]);

  // Section C: Flange thickness vs Stud diameter check
  const [studDiameter, setStudDiameter] = useState<number>(19); // d in mm (16, 19, 22)
  const [flangeThickness, setFlangeThickness] = useState<number>(12); // tf in mm

  const flangeCheck = useMemo(() => {
    // JASS 6 rule: d <= 2.5 * tf  <=>  tf >= d / 2.5
    const minFlangeThickness = studDiameter / 2.5;
    const isFlangeOk = flangeThickness >= minFlangeThickness;
    const maxStudDiameterAllowed = 2.5 * flangeThickness;

    // Pitch and edge distance
    const minPitch = 5 * studDiameter; // 5d
    const minEdgeDistance = Math.max(50, 2.5 * studDiameter); // 2.5d and >= 50mm

    return {
      minFlangeThickness,
      isFlangeOk,
      maxStudDiameterAllowed,
      minPitch,
      minEdgeDistance
    };
  }, [studDiameter, flangeThickness]);

  // -------------------------------------------------------------
  // 3. EXAM PRACTICE QUIZ STATE
  // -------------------------------------------------------------
  const [activePracticeIndex, setActivePracticeIndex] = useState<number>(0);
  const [userPracticeAnswer, setUserPracticeAnswer] = useState<string>('');
  const [practiceChecked, setPracticeChecked] = useState<boolean>(false);
  const [practiceFeedback, setPracticeFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const practiceQuestions = useMemo(() => [
    {
      id: 'q1',
      titleJP: '入熱量の基本計算 (Heat Input Calculation)',
      titleMY: 'ဂဟေဆက် အပူစွမ်းအင်ပမာဏ တွက်ချက်ခြင်း',
      scenarioJP: 'アーク電圧 30V、溶接電流 280A、溶接速度 28 cm/min で炭酸ガスアーク溶接を行った。このときの溶接入熱量 Q (kJ/cm) を求めよ。',
      scenarioMY: 'Arc ဗို့အား 30V၊ ဂဟေလျှပ်စီး 280A၊ ဂဟေဆော်အမြန်နှုန်း 28 cm/min ဖြင့် CO2 ဂဟေဆော်ခဲ့သည်။ ဤဂဟေ၏ အပူစွမ်းအင် Heat Input Q (kJ/cm) ကို တွက်ချက်ပါ။',
      formula: 'Q = (E × I × 60) / (v × 1000)',
      correctAnswer: 18.0,
      tolerance: 0.1,
      unit: 'kJ/cm',
      explanationSteps: [
        'E = 30 V, I = 280 A, v = 28 cm/min',
        'Q = (30 × 280 × 60) / (28 × 1000)',
        'Q = 504,000 / 28,000 = 18.0 kJ/cm',
        'စံသတ်မှတ်ချက် ၁၂ ~ ၃၅ kJ/cm အတွင်း ရှိသဖြင့် သင့်လျော်သော အပူချိန်ဘောင် ဖြစ်ပါသည်။'
      ]
    },
    {
      id: 'q2',
      titleJP: '溶接速度の逆算 (Required Welding Speed)',
      titleMY: 'သတ်မှတ်အပူချိန်ရရှိရန် လိုအပ်သော ဂဟေဆော်အမြန်နှုန်း တွက်ချက်ခြင်း',
      scenarioJP: '目標入熱量を Q = 25.0 kJ/cm とし、アーク電圧 30V、溶接電流 300A で施工する場合、必要な溶接速度 v (cm/min) はいくらか？',
      scenarioMY: 'ရည်မှန်းထားသော အပူပမာဏ Q = 25.0 kJ/cm ဖြစ်ပြီး၊ ဗို့အား 30V၊ လျှပ်စီး 300A ဖြင့် ဆော်မည်ဆိုပါက လိုအပ်သော ဂဟေဆော်နှုန်း v (cm/min) ကို တွက်ချက်ပါ။',
      formula: 'v = (E × I × 60) / (Q × 1000)',
      correctAnswer: 21.6,
      tolerance: 0.2,
      unit: 'cm/min',
      explanationSteps: [
        'v = (E × I × 60) / (Q × 1000)',
        'v = (30 × 300 × 60) / (25 × 1000)',
        'v = 540,000 / 25,000 = 21.6 cm/min',
        'တစ်မိနစ်လျှင် ၂၁.၆ စင်တီမီတာ (သို့မဟုတ် 3.6 mm/s) နှုန်းဖြင့် ဂဟေဆော်ရပါမည်။'
      ]
    },
    {
      id: 'q3',
      titleJP: 'スタッド仕上がり長さの計算 (Stud Finished Length)',
      titleMY: 'Stud ဂဟေဆော်ပြီးနောက် အလျား (Finished Length) တွက်ချက်ခြင်း',
      scenarioJP: '溶接前の軸長が 130mm の頭付きスタッドを用い、溶接による軸長減少量を 4.0mm とした場合、溶接後の仕上がり軸長 (mm) はいくらか？',
      scenarioMY: 'ဂဟေမဆော်မီ မူလအလျား 130mm ရှိသော Stud တံကိုသုံးပြီး ဂဟေဆော်၍ ကျုံ့ဝင်တိုတောင်းသွားမှု 4.0mm ဖြစ်ပါက ဂဟေဆော်ပြီးနောက် ကျန်ရှိသောအလျား (mm) ကို တွက်ချက်ပါ။',
      formula: 'L_finish = L0 - ΔL',
      correctAnswer: 126.0,
      tolerance: 0.1,
      unit: 'mm',
      explanationSteps: [
        'L_finish = 130mm - 4.0mm = 126.0 mm',
        'JASS 6 စံအရ Stud တံအလျား ကျုံ့ဝင်မှု (Burn-off) သည် 3mm ~ 5mm (ပုံမှန် 4mm) ဖြစ်ပြီး Finished length tolerance သည် ±2mm ဖြစ်သည်။'
      ]
    },
    {
      id: 'q4',
      titleJP: 'デッキ貫通スタッドの最小仕上がり長さ (Through-Deck Stud Min Length)',
      titleMY: 'Deck Plate အပေါ်မှ အနည်းဆုံးရှိရမည့် Stud အရှည်တွက်ချက်ခြင်း',
      scenarioJP: 'デッキプレートのリブ高さが 75mm の場合、デッキ貫通スタッドの仕上がり長さは最低何 mm 以上必要か？（JASS 6: デッキ上突出長さ 30mm 以上）',
      scenarioMY: 'Deck Plate ၏ အမြင့် 75mm ဖြစ်ပါက Deck ပေါ်မှ ဖောက်ထွင်းဆော်သော Stud တံ၏ Finished Length သည် အနည်းဆုံး မည်မျှ (mm) ရှိရမည်နည်း။ (Deck အပေါ်သို့ အနည်းဆုံး 30mm ထွက်နေရမည်)',
      formula: 'H_min = H_deck + 30mm',
      correctAnswer: 105.0,
      tolerance: 0.1,
      unit: 'mm',
      explanationSteps: [
        'H_min = デッキ高さ (75mm) + 突出長さ (30mm) = 105.0 mm',
        'ဂဟေကျုံ့ဝင်မှု 4mm ထည့်တွက်ပါက မူလ Stud အလျားမှာ အနည်းဆုံး 110mm သို့မဟုတ် 120mm စံတံကို အသုံးပြုရပါမည်။'
      ]
    },
    {
      id: 'q5',
      titleJP: 'スタッド径に対する最小フランジ板厚 (Min Flange Thickness for Stud)',
      titleMY: 'Stud အချင်းအရ ရက်မ Flange သံပြား အနည်းဆုံး အထူတွက်ချက်ခြင်း',
      scenarioJP: '軸径 d = 19mm のスタッドを梁上フランジに溶接する場合、JASS 6 基準 (d ≦ 2.5 × tf) を満たすために必要なフランジ最小板厚 tf (mm) を求めよ。',
      scenarioMY: 'အချင်း d = 19mm ရှိသော Stud တံကို ရက်မ Flange ပေါ်တွင် ဆော်မည်ဆိုပါက JASS 6 စံနှုန်း (d ≦ 2.5 × tf) ပြည့်မီရန် လိုအပ်သော Flange အနည်းဆုံး အထူ tf (mm) ကို တွက်ချက်ပါ။',
      formula: 'tf_min = d / 2.5',
      correctAnswer: 7.6,
      tolerance: 0.1,
      unit: 'mm',
      explanationSteps: [
        'tf_min = 19mm / 2.5 = 7.6 mm',
        'ထို့ကြောင့် Flange အထူသည် အနည်းဆုံး 7.6mm (လက်တွေ့တွင် 9mm သို့မဟုတ် 12mm) ရှိရမည်။ ပါးလွှာပါက ဂဟေပေါက်ပြဲခြင်းနှင့် ပုံပျက်ခြင်း ဖြစ်တတ်သည်။'
      ]
    }
  ], []);

  const handleCheckPractice = () => {
    const currentQ = practiceQuestions[activePracticeIndex];
    const val = parseFloat(userPracticeAnswer.trim());
    if (isNaN(val)) {
      setPracticeFeedback({
        isCorrect: false,
        message: 'ဂဏန်းတန်ဖိုး အမှန်တကယ် ရိုက်ထည့်ပေးပါ (Please enter a valid numeric value).'
      });
      setPracticeChecked(true);
      return;
    }

    const diff = Math.abs(val - currentQ.correctAnswer);
    const isCorrect = diff <= currentQ.tolerance;
    setPracticeChecked(true);
    setPracticeFeedback({
      isCorrect,
      message: isCorrect
        ? `အဖြေမှန်ကန်ပါသည်! (${val} ${currentQ.unit}) - စနစ်တကျ တွက်ချက်နိုင်ခဲ့ပါသည်။`
        : `အဖြေမှားယွင်းနေပါသည်။ အဖြေမှန်မှာ ${currentQ.correctAnswer} ${currentQ.unit} ဖြစ်ပါသည်။ အောက်ပါ အဆင့်ဆင့် ရှင်းလင်းချက်ကို ကြည့်ရှုပါ။`
    });
  };

  const handleNextPractice = (index: number) => {
    setActivePracticeIndex(index);
    setUserPracticeAnswer('');
    setPracticeChecked(false);
    setPracticeFeedback(null);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-neumorphic-bg pb-16">
      {/* Top Sticky Header */}
      <div className="w-full bg-neumorphic-bg p-2 sticky top-0 z-30 shadow-neumorphic-outset border-b border-slate-300/30">
        <div className="max-w-5xl lg:max-w-6xl px-2 sm:px-4 mx-auto flex items-center justify-between">
          <button
            onClick={onGoBack}
            className="p-2.5 rounded-xl shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
            title="Go Back to Main Menu"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 shadow-neumorphic-inset">
              <CalculatorIcon className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span>Engineering Calculator</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold">
                  工学計算機
                </span>
              </h1>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                溶接入熱 & スタッド長さ 現場・試験計算ツール (Exam Practice & Field Formulas)
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab(activeTab === 'quick_ref' ? 'heat_input' : 'quick_ref')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'quick_ref'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-600 dark:text-slate-300'
            }`}
            title="公式・記号・単位リファレンス (Formula Variables & Units)"
          >
            <BookOpenIcon className="w-4 h-4 text-blue-500" />
            <span className="hidden sm:inline">変数・単位</span>
            <span>Guide</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl lg:max-w-6xl px-3 sm:px-6 py-6 space-y-6">

        {/* Tab Navigation */}
        <div className="p-1.5 bg-neumorphic-bg rounded-2xl sm:rounded-[2rem] shadow-neumorphic-inset flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveTab('heat_input')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl sm:rounded-[1.6rem] text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === 'heat_input'
                ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600 dark:text-blue-400 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <FireIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            <span>溶接入熱 (Heat Input)</span>
          </button>

          <button
            onClick={() => setActiveTab('stud_length')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl sm:rounded-[1.6rem] text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === 'stud_length'
                ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600 dark:text-blue-400 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
            <span>スタッド長さ (Stud Length)</span>
          </button>

          <button
            onClick={() => setActiveTab('quick_ref')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl sm:rounded-[1.6rem] text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === 'quick_ref'
                ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600 dark:text-blue-400 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <BookOpenIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span>変数・単位 (Quick Ref)</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl sm:rounded-[1.6rem] text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
              activeTab === 'practice'
                ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600 dark:text-blue-400 scale-[1.02]'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <SparkleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            <span>計算問題 演習 (Quiz Practice)</span>
          </button>
        </div>

        {/* -------------------------------------------------------------------------------- */}
        {/* TAB 1: WELDING HEAT INPUT CALCULATOR */}
        {/* -------------------------------------------------------------------------------- */}
        {activeTab === 'heat_input' && (
          <div className="space-y-6">
            
            {/* Formula Header Card */}
            <div className="p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-amber-500/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-300/30">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
                    JASS 6 溶接施工管理基準
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                    溶接入熱 (Welding Heat Input) တွက်ချက်ခြင်း
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    အပူစွမ်းအင်ပမာဏ (kJ/cm) ကို Voltage၊ Current နှင့် Speed ပေါ်မူတည်၍ တိုက်ရိုက်တွက်ချက်ပါ။
                  </p>
                </div>

                {/* Calculation Direction Toggle */}
                <div className="flex p-1 bg-neumorphic-bg rounded-xl shadow-neumorphic-inset text-xs font-bold">
                  <button
                    onClick={() => setCalcMode('forward')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      calcMode === 'forward'
                        ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600'
                        : 'text-slate-500'
                    }`}
                  >
                    Direct: Q တွက်မည်
                  </button>
                  <button
                    onClick={() => setCalcMode('reverse')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      calcMode === 'reverse'
                        ? 'bg-neumorphic-bg shadow-neumorphic-outset text-blue-600'
                        : 'text-slate-500'
                    }`}
                  >
                    Reverse: Speed (v) တွက်မည်
                  </button>
                </div>
              </div>

              {/* Big Formula Display */}
              <div className="mt-4 p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <div className="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-slate-100">
                  {calcMode === 'forward' ? (
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">Q (kJ/cm)</span>
                      <span>=</span>
                      <span className="inline-flex flex-col items-center">
                        <span className="border-b border-slate-600 dark:border-slate-300 pb-0.5 px-2">
                          60 × E (Voltage) × I (Current)
                        </span>
                        <span className="pt-0.5 px-2">v (Speed) × 1,000</span>
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400 text-lg">v (cm/min)</span>
                      <span>=</span>
                      <span className="inline-flex flex-col items-center">
                        <span className="border-b border-slate-600 dark:border-slate-300 pb-0.5 px-2">
                          60 × E (Voltage) × I (Current)
                        </span>
                        <span className="pt-0.5 px-2">Q (Target Heat Input) × 1,000</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Units Legend */}
                <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-0.5 text-right font-medium">
                  <div>E = アーク電圧 (Arc Voltage, V)</div>
                  <div>I = 溶接電流 (Welding Current, A)</div>
                  <div>v = 溶接速度 (Welding Speed, cm/min)</div>
                </div>
              </div>

              {/* Presets Row */}
              <div className="mt-4 pt-3 border-t border-slate-300/30 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Exam Presets:</span>
                <button
                  onClick={() => applyWeldingPreset(30, 280, 28, 'cm_min')}
                  className="px-2.5 py-1 text-xs font-bold rounded-lg bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-700 active:scale-95 transition-all"
                >
                  2024 Exam: 30V / 280A / 28cm/min
                </button>
                <button
                  onClick={() => applyWeldingPreset(26, 240, 25, 'cm_min')}
                  className="px-2.5 py-1 text-xs font-bold rounded-lg bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-700 active:scale-95 transition-all"
                >
                  CO2 Semi-auto (SN400): 26V / 240A
                </button>
                <button
                  onClick={() => applyWeldingPreset(30, 320, 22, 'cm_min')}
                  className="px-2.5 py-1 text-xs font-bold rounded-lg bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-700 active:scale-95 transition-all"
                >
                  CO2 Thick plate (SN490B): 30V / 320A
                </button>
                <button
                  onClick={() => applyWeldingPreset(34, 500, 30, 'cm_min')}
                  className="px-2.5 py-1 text-xs font-bold rounded-lg bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-700 active:scale-95 transition-all"
                >
                  SAW (Submerged Arc): 34V / 500A
                </button>
              </div>
            </div>

            {/* Input & Output Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Interactive Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-5 p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <FireIcon className="w-5 h-5 text-amber-500" />
                    <span>Parameters (ဂဟေဆက် ကန့်သတ်ကိန်းများ)</span>
                  </h3>
                  <button
                    onClick={() => {
                      setVoltage(28);
                      setCurrent(280);
                      setSpeed(28);
                      setTargetHeatInput(20);
                    }}
                    className="p-1.5 text-xs text-slate-500 hover:text-slate-700 rounded-lg shadow-neumorphic-outset active:shadow-neumorphic-inset flex items-center gap-1"
                    title="Reset to default"
                  >
                    <RefreshIcon className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* 1. Voltage E */}
                <div className="space-y-2 p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                        アーク電圧 (Voltage, E)
                      </span>
                      <p className="text-[11px] text-slate-500">Arc ဗို့အား (Standard: 20V ~ 40V)</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min={10}
                        max={55}
                        step={0.5}
                        value={voltage}
                        onChange={e => setVoltage(Math.max(1, parseFloat(e.target.value) || 0))}
                        className="w-20 px-2 py-1 text-right text-base font-mono font-black rounded-lg bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                      />
                      <span className="text-xs font-bold text-slate-500">V</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={45}
                    step={0.5}
                    value={voltage}
                    onChange={e => setVoltage(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>15V</span>
                    <span>28V (Nominal)</span>
                    <span>45V</span>
                  </div>
                </div>

                {/* 2. Current I */}
                <div className="space-y-2 p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                        溶接電流 (Current, I)
                      </span>
                      <p className="text-[11px] text-slate-500">ဂဟေလျှပ်စီး (Standard: 150A ~ 500A)</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min={50}
                        max={800}
                        step={5}
                        value={current}
                        onChange={e => setCurrent(Math.max(1, parseFloat(e.target.value) || 0))}
                        className="w-24 px-2 py-1 text-right text-base font-mono font-black rounded-lg bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                      />
                      <span className="text-xs font-bold text-slate-500">A</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={600}
                    step={5}
                    value={current}
                    onChange={e => setCurrent(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>100A</span>
                    <span>280A (Standard)</span>
                    <span>600A</span>
                  </div>
                </div>

                {/* 3. Speed v (Forward) OR Target Heat Input (Reverse) */}
                {calcMode === 'forward' ? (
                  <div className="space-y-2 p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                            溶接速度 (Speed, v)
                          </span>
                          {/* Unit toggle */}
                          <div className="inline-flex p-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-bold">
                            <button
                              onClick={() => setSpeedUnit('cm_min')}
                              className={`px-1.5 py-0.5 rounded ${speedUnit === 'cm_min' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
                            >
                              cm/min
                            </button>
                            <button
                              onClick={() => setSpeedUnit('mm_sec')}
                              className={`px-1.5 py-0.5 rounded ${speedUnit === 'mm_sec' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
                            >
                              mm/s
                            </button>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {speedUnit === 'cm_min' ? 'ဂဟေဆော်နှုန်း (cm/min)' : 'ဂဟေဆော်နှုန်း (1 mm/s = 6 cm/min)'}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min={1}
                          max={150}
                          step={speedUnit === 'cm_min' ? 1 : 0.2}
                          value={speed}
                          onChange={e => setSpeed(Math.max(0.1, parseFloat(e.target.value) || 0))}
                          className="w-20 px-2 py-1 text-right text-base font-mono font-black rounded-lg bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                        />
                        <span className="text-xs font-bold text-slate-500">{speedUnit === 'cm_min' ? 'cm/min' : 'mm/s'}</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={speedUnit === 'cm_min' ? 5 : 1}
                      max={speedUnit === 'cm_min' ? 70 : 12}
                      step={speedUnit === 'cm_min' ? 1 : 0.2}
                      value={speed}
                      onChange={e => setSpeed(parseFloat(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>{speedUnit === 'cm_min' ? '5 cm/min' : '1 mm/s'}</span>
                      <span>{speedUnit === 'cm_min' ? '28 cm/min (Nominal)' : '4.6 mm/s'}</span>
                      <span>{speedUnit === 'cm_min' ? '70 cm/min' : '12 mm/s'}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                          目標入熱量 (Target Heat Input, Q)
                        </span>
                        <p className="text-[11px] text-slate-500">ရည်မှန်းထားသော အပူချိန် (Standard: 15 ~ 35 kJ/cm)</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min={5}
                          max={70}
                          step={0.5}
                          value={targetHeatInput}
                          onChange={e => setTargetHeatInput(Math.max(1, parseFloat(e.target.value) || 0))}
                          className="w-20 px-2 py-1 text-right text-base font-mono font-black rounded-lg bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                        />
                        <span className="text-xs font-bold text-slate-500">kJ/cm</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={0.5}
                      value={targetHeatInput}
                      onChange={e => setTargetHeatInput(parseFloat(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                )}
              </div>

              {/* Dynamic Calculation Results (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Result Hero Card */}
                <div className="p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-blue-500/20 text-center space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    {calcMode === 'forward' ? 'Calculated Heat Input (တွက်ချက်ရလဒ်)' : 'Required Welding Speed (လိုအပ်သော အမြန်နှုန်း)'}
                  </span>

                  {calcMode === 'forward' ? (
                    <div>
                      <div className="text-4xl sm:text-5xl font-mono font-black text-blue-600 dark:text-blue-400 tracking-tight">
                        {calculatedHeatInputKjCm.toFixed(2)}
                        <span className="text-lg font-bold ml-1 text-slate-500">kJ/cm</span>
                      </div>

                      {/* Secondary Unit Equivalents */}
                      <div className="flex justify-center items-center gap-3 mt-3 pt-3 border-t border-slate-300/30 text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
                        <div>
                          {(calculatedHeatInputKjCm * 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })}{' '}
                          <span className="text-slate-400 font-normal">J/cm</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-400" />
                        <div>
                          {(calculatedHeatInputKjCm / 10).toFixed(2)}{' '}
                          <span className="text-slate-400 font-normal">kJ/mm</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-4xl sm:text-5xl font-mono font-black text-blue-600 dark:text-blue-400 tracking-tight">
                        {calculatedRequiredSpeed.toFixed(1)}
                        <span className="text-lg font-bold ml-1 text-slate-500">cm/min</span>
                      </div>
                      <div className="text-xs font-mono font-bold text-slate-500 mt-2">
                        ≈ {(calculatedRequiredSpeed / 6).toFixed(2)} mm/s
                      </div>
                    </div>
                  )}

                  {/* Heat Input Evaluation Banner */}
                  <div
                    className={`p-3 rounded-2xl text-left border ${
                      heatInputEvaluation.color === 'emerald'
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/30 text-emerald-800 dark:text-emerald-200'
                        : heatInputEvaluation.color === 'amber'
                        ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-500/30 text-amber-800 dark:text-amber-200'
                        : 'bg-red-50/50 dark:bg-red-950/20 border-red-500/30 text-red-800 dark:text-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-black text-xs">
                      {heatInputEvaluation.color === 'emerald' ? (
                        <CheckCircleSolidIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <XCircleSolidIcon className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      <span>{heatInputEvaluation.labelJP}</span>
                    </div>
                    <p className="text-xs font-bold mt-1 leading-relaxed">
                      {heatInputEvaluation.labelMY}
                    </p>
                    <p className="text-[11px] font-medium opacity-90 mt-1 leading-relaxed">
                      {heatInputEvaluation.descMY}
                    </p>
                  </div>
                </div>

                {/* Step-by-Step Math Box */}
                <div className="p-4 sm:p-5 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-xs space-y-2">
                  <div className="font-black text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <SparkleIcon className="w-4 h-4 text-amber-500" />
                    <span>တွက်ချက်မှု အဆင့်ဆင့် (Calculation Breakdown)</span>
                  </div>
                  {calcMode === 'forward' ? (
                    <div className="font-mono text-slate-600 dark:text-slate-300 space-y-1 pt-1 leading-relaxed">
                      <div>1. စုစုပေါင်း စွမ်းအင် = 60 × {voltage}V × {current}A = {(60 * voltage * current).toLocaleString()} J/min</div>
                      <div>2. Speed ဖြင့်စားခြင်း = {(60 * voltage * current).toLocaleString()} / {effectiveSpeedCmMin.toFixed(1)} cm/min</div>
                      <div>3. J/cm မှ kJ/cm ပြောင်းရန် (÷1000):</div>
                      <div className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50/40 dark:bg-blue-950/40 p-1.5 rounded">
                        Q = {((60 * voltage * current) / (effectiveSpeedCmMin * 1000)).toFixed(2)} kJ/cm
                      </div>
                    </div>
                  ) : (
                    <div className="font-mono text-slate-600 dark:text-slate-300 space-y-1 pt-1 leading-relaxed">
                      <div>1. လျှပ်စစ်စွမ်းအင် = 60 × {voltage}V × {current}A = {(60 * voltage * current).toLocaleString()} J/min</div>
                      <div>2. Target Heat Input = {targetHeatInput} kJ/cm = {(targetHeatInput * 1000).toLocaleString()} J/cm</div>
                      <div className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50/40 dark:bg-blue-950/40 p-1.5 rounded">
                        v = {(60 * voltage * current).toLocaleString()} / {(targetHeatInput * 1000).toLocaleString()} = {calculatedRequiredSpeed.toFixed(1)} cm/min
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* Contextual Quick Reference for Welding Heat Input */}
            <FormulaQuickReference initialCategory="heat_input" isCollapsible={true} compact={true} />

          </div>
        )}

        {/* -------------------------------------------------------------------------------- */}
        {/* TAB 2: STUD LENGTH & DECK PROTRUSION CALCULATOR */}
        {/* -------------------------------------------------------------------------------- */}
        {activeTab === 'stud_length' && (
          <div className="space-y-6">

            {/* Header / Intro Card */}
            <div className="p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-indigo-500/20">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400">
                JASS 6 スタッド溶接基準 (Stud Welding Standards)
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                スタッド溶接の軸長・仕上がり高さ & デッキ貫通突出計算
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Stud တံအလျားကျုံ့ဝင်မှု (Burn-off), Deck Plate အပေါ်မှ အမြင့်သတ်မှတ်ချက် နှင့် Flange အထူအချိုးအစားကို စိစစ်တွက်ချက်ပါ။
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Left Column: Interactive Inputs (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Section A: Burn-off & Finished Stud Length */}
                <div className="p-5 sm:p-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-300/30">
                    <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <BoltIcon className="w-5 h-5 text-indigo-500" />
                      <span>1. 軸長減少量 & 仕上がり長さ (Finished Length)</span>
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                      L_finish = L0 - ΔL
                    </span>
                  </div>

                  {/* L0: Original Stud Length */}
                  <div className="space-y-2 p-3.5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                          溶接前スタッド長さ (Original Stud Length, L0)
                        </span>
                        <p className="text-[11px] text-slate-500">ဂဟေမဆော်မီ မူလတံအလျား</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min={50}
                          max={250}
                          step={5}
                          value={originalStudLength}
                          onChange={e => setOriginalStudLength(Math.max(10, parseFloat(e.target.value) || 0))}
                          className="w-20 px-2 py-1 text-right text-base font-mono font-black rounded-lg bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                        />
                        <span className="text-xs font-bold text-slate-500">mm</span>
                      </div>
                    </div>

                    {/* Standard Stud Size Quick Select Buttons */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-400 self-center">Standard sizes:</span>
                      {[80, 90, 100, 110, 120, 130, 140, 150].map(size => (
                        <button
                          key={size}
                          onClick={() => setOriginalStudLength(size)}
                          className={`px-2 py-0.5 text-xs font-mono font-bold rounded-md transition-all ${
                            originalStudLength === size
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'bg-neumorphic-bg shadow-neumorphic-outset text-slate-600 hover:text-indigo-600'
                          }`}
                        >
                          {size}mm
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Delta L: Burn-off Amount */}
                  <div className="space-y-2 p-3.5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                          軸長減少量 (Burn-off Length Reduction, ΔL)
                        </span>
                        <p className="text-[11px] text-slate-500">
                          ဂဟေဆော်၍ ကျုံ့ဝင်သွားမှုပမာဏ (Standard: 3.0mm ~ 5.0mm, ပုံမှန် 4.0mm)
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min={2.0}
                          max={7.0}
                          step={0.5}
                          value={burnOffAmount}
                          onChange={e => setBurnOffAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                          className="w-16 px-2 py-1 text-right text-base font-mono font-black rounded-lg bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                        />
                        <span className="text-xs font-bold text-slate-500">mm</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={2.5}
                      max={5.5}
                      step={0.5}
                      value={burnOffAmount}
                      onChange={e => setBurnOffAmount(parseFloat(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>3.0mm (Min)</span>
                      <span>4.0mm (Standard Nominal)</span>
                      <span>5.0mm (Max)</span>
                    </div>
                  </div>
                </div>

                {/* Section B: Through-Deck Composite Slab Parameters */}
                <div className="p-5 sm:p-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-300/30">
                    <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <ScaleIcon className="w-5 h-5 text-indigo-500" />
                      <span>2. デッキ貫通スタッドとスラブ厚 (Deck & Slab Configuration)</span>
                    </h3>
                    <span className="text-[11px] font-bold text-slate-500">Through-Deck</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Slab Thickness */}
                    <div className="p-3 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                          スラブ厚 (Slab Thickness, tc)
                        </span>
                        <span className="text-xs font-mono font-black text-indigo-600">{slabThickness} mm</span>
                      </div>
                      <p className="text-[10px] text-slate-500">ကွန်ကရစ် Slab အထူ (Standard: 120, 130, 150mm)</p>
                      <div className="flex gap-1 pt-1">
                        {[120, 130, 150, 180].map(t => (
                          <button
                            key={t}
                            onClick={() => setSlabThickness(t)}
                            className={`px-2 py-0.5 text-xs font-mono rounded ${
                              slabThickness === t ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {t}mm
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Deck Height */}
                    <div className="p-3 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                          デッキ高さ (Deck Rib Height, hd)
                        </span>
                        <span className="text-xs font-mono font-black text-indigo-600">{deckHeight} mm</span>
                      </div>
                      <p className="text-[10px] text-slate-500">Deck Plate မြောင်းအမြင့် (Standard: 50mm, 75mm)</p>
                      <div className="flex gap-1 pt-1">
                        {[50, 75].map(h => (
                          <button
                            key={h}
                            onClick={() => setDeckHeight(h)}
                            className={`px-2 py-0.5 text-xs font-mono rounded ${
                              deckHeight === h ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {h}mm
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Concrete Cover Requirement */}
                  <div className="p-3 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                        スタッド頭部のかぶり厚さ (Cover Requirement)
                      </span>
                      <p className="text-[10px] text-slate-500">JASS 6 စံအရ Stud ခေါင်းပေါ် ကွန်ကရစ်အထူ ≧ 25mm လိုအပ်သည်</p>
                    </div>
                    <span className="text-xs font-mono font-black bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 px-2 py-1 rounded-lg">
                      ≧ {concreteCoverReq} mm
                    </span>
                  </div>
                </div>

                {/* Section C: Stud Diameter vs Beam Flange Thickness Check */}
                <div className="p-5 sm:p-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-300/30">
                    <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <LightBulbIcon className="w-5 h-5 text-amber-500" />
                      <span>3. フランジ板厚とスタッド径の制限 (Flange Rule)</span>
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded">
                      d ≦ 2.5 × tf
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Stud Diameter */}
                    <div className="p-3 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                          スタッド軸径 (Diameter, d)
                        </span>
                        <span className="text-xs font-mono font-black text-indigo-600">{studDiameter} mm</span>
                      </div>
                      <div className="flex gap-1.5 pt-1">
                        {[13, 16, 19, 22].map(d => (
                          <button
                            key={d}
                            onClick={() => setStudDiameter(d)}
                            className={`flex-1 py-1 text-xs font-mono font-bold rounded ${
                              studDiameter === d ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            φ{d}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Flange Thickness */}
                    <div className="p-3 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                          フランジ板厚 (Flange, tf)
                        </span>
                        <span className="text-xs font-mono font-black text-indigo-600">{flangeThickness} mm</span>
                      </div>
                      <input
                        type="range"
                        min={6}
                        max={32}
                        step={1}
                        value={flangeThickness}
                        onChange={e => setFlangeThickness(parseFloat(e.target.value))}
                        className="w-full accent-indigo-600 cursor-pointer pt-1"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Calculations & Compliance Verdict (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Finished Stud Hero Card */}
                <div className="p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-indigo-500/20 text-center space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    溶接後仕上がり長さ (Finished Stud Length)
                  </span>

                  <div>
                    <div className="text-4xl sm:text-5xl font-mono font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
                      {finishedStudLength.toFixed(1)}
                      <span className="text-lg font-bold ml-1 text-slate-500">mm</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 mt-1">
                      = {originalStudLength}mm (မူလတံ) - {burnOffAmount}mm (ကျုံ့ဝင်မှု)
                    </p>
                    <div className="text-[11px] font-bold text-slate-400 mt-0.5">
                      Tolerance 許容差: ± 2.0 mm
                    </div>
                  </div>

                  {/* Through Deck Protrusion Card */}
                  <div className="pt-4 border-t border-slate-300/30 text-left space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-black text-slate-700 dark:text-slate-200">
                      <span>デッキ上突出長さ (Above Deck):</span>
                      <span className="font-mono text-sm text-indigo-600">
                        {deckCalculations.currentProtrusion.toFixed(1)} mm
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-black text-slate-700 dark:text-slate-200">
                      <span>スラブ頭部かぶり (Concrete Cover):</span>
                      <span className="font-mono text-sm text-indigo-600">
                        {deckCalculations.currentCover.toFixed(1)} mm
                      </span>
                    </div>

                    {/* Verdict Banner */}
                    <div
                      className={`p-3 rounded-2xl border ${
                        deckCalculations.isTotalOk
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/30 text-emerald-800 dark:text-emerald-200'
                          : 'bg-red-50/50 dark:bg-red-950/20 border-red-500/30 text-red-800 dark:text-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-black text-xs">
                        {deckCalculations.isTotalOk ? (
                          <CheckCircleSolidIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircleSolidIcon className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                        <span>{deckCalculations.isTotalOk ? '合格 (Criteria Satisfied)' : '不合格 (Non-compliant)'}</span>
                      </div>

                      <div className="text-[11px] space-y-1 mt-1 font-medium leading-relaxed">
                        <p>
                          1. Deck ပေါ်သို့ 30mm ထွက်ခြင်း: {deckCalculations.isProtrusionOk ? '✅ အောင်မြင်သည်' : '❌ မလုံလောက်ပါ (≧ 30mm လိုအပ်)'}
                        </p>
                        <p>
                          2. Cover 25mm ကျန်ရှိခြင်း: {deckCalculations.isCoverOk ? '✅ အောင်မြင်သည်' : '❌ မလုံလောက်ပါ (≧ 25mm လိုအပ်)'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Allowable Finished Range for Current Deck/Slab */}
                  <div className="p-3 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-left text-xs font-mono space-y-1">
                    <span className="font-black text-[10px] text-slate-400 uppercase">
                      Current Slab/Deck Allowable Range:
                    </span>
                    <div className="text-slate-700 dark:text-slate-200">
                      • အနည်းဆုံး Finish အရှည်: <span className="font-bold text-indigo-600">{deckCalculations.minFinishedHeight} mm</span> (Deck {deckHeight} + 30)
                    </div>
                    <div className="text-slate-700 dark:text-slate-200">
                      • အများဆုံး Finish အရှည်: <span className="font-bold text-indigo-600">{deckCalculations.maxFinishedHeight} mm</span> (Slab {slabThickness} - 25)
                    </div>
                  </div>
                </div>

                {/* Flange Thickness & Pitch Result Card */}
                <div className="p-5 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-xs space-y-3">
                  <div className="font-black text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircleSolidIcon className="w-4 h-4 text-indigo-500" />
                    <span>Flange & Pitch စံနှုန်းများ စစ်ဆေးချက်</span>
                  </div>

                  <div className="space-y-2 text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between items-center">
                      <span>• လိုအပ်သော Flange အနည်းဆုံးအထူ (d / 2.5):</span>
                      <span className="font-mono font-bold text-indigo-600">≧ {flangeCheck.minFlangeThickness.toFixed(1)} mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>• လက်ရှိ Flange အထူ ({flangeThickness}mm) စစ်ဆေးမှု:</span>
                      <span className={`font-bold ${flangeCheck.isFlangeOk ? 'text-emerald-600' : 'text-red-600'}`}>
                        {flangeCheck.isFlangeOk ? '✅ အောင်မြင်သည်' : '❌ ပါးလွှာလွန်းသည်'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-300/30">
                      <span>• Stud တစ်ခုနှင့်တစ်ခု အကွာအဝေး (Pitch ≧ 5d):</span>
                      <span className="font-mono font-bold text-indigo-600">≧ {flangeCheck.minPitch} mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>• ဘေးစွန်းကင်းလွတ်မှု (Edge ≧ 2.5d & ≧ 50mm):</span>
                      <span className="font-mono font-bold text-indigo-600">≧ {flangeCheck.minEdgeDistance} mm</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Contextual Quick Reference for Stud Length */}
            <FormulaQuickReference initialCategory="stud_length" isCollapsible={true} compact={true} />

          </div>
        )}

        {/* -------------------------------------------------------------------------------- */}
        {/* TAB: COMPLETE FORMULA QUICK REFERENCE */}
        {/* -------------------------------------------------------------------------------- */}
        {activeTab === 'quick_ref' && (
          <div className="space-y-6">
            <FormulaQuickReference initialCategory="all" isCollapsible={false} />
          </div>
        )}

        {/* -------------------------------------------------------------------------------- */}
        {/* TAB 3: EXAM PRACTICE QUIZ */}
        {/* -------------------------------------------------------------------------------- */}
        {activeTab === 'practice' && (
          <div className="space-y-6">

            {/* Intro Card */}
            <div className="p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-emerald-500/20">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                実戦演習 (Calculation Practice Quiz)
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                စာမေးပွဲ တွက်ချက်မှု မေးခွန်းများ လက်တွေ့လေ့ကျင့်ခြင်း
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                စာမေးပွဲတွင် အမေးများသော မေးခွန်းပုံစံများကို တိုက်ရိုက်တွက်ချက် ဖြေဆိုပြီး အဖြေမှန်နှင့် အဆင့်ဆင့် တွက်နည်းကို လေ့လာပါ။
              </p>

              {/* Question selector tabs */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-300/30">
                {practiceQuestions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => handleNextPractice(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                      activePracticeIndex === idx
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-neumorphic-bg shadow-neumorphic-outset text-slate-600 hover:text-emerald-600'
                    }`}
                  >
                    <span>ပုစ္ဆာ {idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Question Card */}
            {(() => {
              const currentQ = practiceQuestions[activePracticeIndex];
              return (
                <div className="p-6 sm:p-8 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset space-y-6">
                  {/* Title & Header */}
                  <div className="space-y-1 pb-4 border-b border-slate-300/30">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-xs font-black rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700">
                        Problem {activePracticeIndex + 1} of {practiceQuestions.length}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {currentQ.unit} Calculation
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 mt-1">
                      {currentQ.titleMY}
                    </h3>
                    <div className="text-xs font-bold text-slate-500">
                      <JapaneseText text={currentQ.titleJP} />
                    </div>
                  </div>

                  {/* Japanese Exam Prompt */}
                  <div className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-2 border border-slate-300/20">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                      စာမေးပွဲ မေးခွန်းပုံစံ (Exam Question Prompt)
                    </span>
                    <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-relaxed font-mono">
                      <JapaneseText text={currentQ.scenarioJP} />
                    </p>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-300/30">
                      {currentQ.scenarioMY}
                    </p>
                  </div>

                  {/* Input and Submit Form */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-outset space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <label className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200">
                        သင့်အဖြေကို ရိုက်ထည့်ပါ (Your Answer):
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          step="any"
                          value={userPracticeAnswer}
                          onChange={e => {
                            setUserPracticeAnswer(e.target.value);
                            setPracticeChecked(false);
                            setPracticeFeedback(null);
                          }}
                          placeholder="e.g. 18.0"
                          className="w-36 px-3 py-2 text-right text-lg font-mono font-black rounded-xl bg-neumorphic-bg shadow-neumorphic-inset text-slate-800 dark:text-slate-100 focus:outline-none"
                        />
                        <span className="text-sm font-black text-slate-500 font-mono">
                          {currentQ.unit}
                        </span>
                      </div>
                      <button
                        onClick={handleCheckPractice}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-black shadow-md transition-all sm:ml-auto"
                      >
                        အဖြေစစ်မည် (Check Answer)
                      </button>
                    </div>

                    {/* Feedback Banner */}
                    {practiceChecked && practiceFeedback && (
                      <div
                        className={`p-4 rounded-2xl border transition-all ${
                          practiceFeedback.isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/40 text-emerald-800 dark:text-emerald-200'
                            : 'bg-red-50 dark:bg-red-950/30 border-red-500/40 text-red-800 dark:text-red-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 font-black text-sm">
                          {practiceFeedback.isCorrect ? (
                            <CheckCircleSolidIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                          ) : (
                            <XCircleSolidIcon className="w-5 h-5 text-red-500 shrink-0" />
                          )}
                          <span>{practiceFeedback.message}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step-by-Step Mathematical Explanation (reveals after checked or toggle) */}
                  {practiceChecked && (
                    <div className="p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-3">
                      <div className="flex items-center gap-1.5 font-black text-xs text-amber-600 uppercase tracking-wider">
                        <LightBulbIcon className="w-4 h-4 text-amber-500" />
                        <span>အဆင့်ဆင့် တွက်နည်းနှင့် ရှင်းလင်းချက် (Solution Breakdown)</span>
                      </div>
                      <div className="font-mono text-xs space-y-1.5 text-slate-700 dark:text-slate-200">
                        <div className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50/40 dark:bg-blue-950/40 p-2 rounded-lg">
                          Formula: {currentQ.formula}
                        </div>
                        {currentQ.explanationSteps.map((step, idx) => (
                          <div key={idx} className="leading-relaxed pl-2 border-l-2 border-slate-300 dark:border-slate-700">
                            {step}
                          </div>
                        ))}
                      </div>

                      {/* Next button */}
                      <div className="pt-3 border-t border-slate-300/30 flex justify-end">
                        <button
                          onClick={() => handleNextPractice((activePracticeIndex + 1) % practiceQuestions.length)}
                          className="px-4 py-2 rounded-xl bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-xs font-black text-slate-700 flex items-center gap-1.5 transition-all"
                        >
                          <span>နောက်တစ်ပုဒ်သို့ (Next Question)</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              );
            })()}

          </div>
        )}

      </div>
    </div>
  );
};

export default EngineeringCalculator;
