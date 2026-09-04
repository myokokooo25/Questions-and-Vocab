
import React, { useState } from 'react';
import { LogoIcon, BookOpenIcon, PencilIcon, AcademicCapIcon, FolderIcon, InfoIcon, ScaleIcon, CalculatorIcon, SunIcon, MoonIcon, SparkleIcon, ContrastIcon } from './Icons';
import DailyTrackerWidget from './DailyTrackerWidget';
import { useProgress } from '../contexts/ProgressContext';
import { useTheme } from '../contexts/ThemeContext';

interface WelcomeScreenProps {
  onSelectApp: (app: 'main' | '2021' | '2022' | '2023' | '2024' | '2025' | '2026' | '2026-level2' | 'flashcards' | 'dictionary' | 'cheat-sheet' | 'weak-points' | 'calculator') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectApp }) => {
  const { theme, toggleTheme } = useTheme();
  const { weakQuestions } = useProgress();
  const weakCount = Object.keys(weakQuestions).length;

  const calculateDaysLeft = () => {
    const today = new Date();
    let targetYear = today.getFullYear();
    let targetDate = new Date(targetYear, 9, 17); // Month is 0-indexed (9 = October)
    
    if (today > targetDate) {
        targetDate = new Date(targetYear + 1, 9, 17);
    }
    
    const diffTime = targetDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  const toMyanmarNumerals = (num: number) => {
    const myanmarNumbers = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
    return num.toString().split('').map(digit => myanmarNumbers[parseInt(digit)]).join('');
  };

  const daysLeft = calculateDaysLeft();
  const monthsLeft = Math.floor(daysLeft / 30);
  const remainingDays = daysLeft % 30;
  const monthsText = monthsLeft > 0 ? toMyanmarNumerals(monthsLeft) + ' လ ' : '';
  const daysText = remainingDays > 0 ? toMyanmarNumerals(remainingDays) + ' ရက်' : '';

  const oldYears = ['2021', '2022', '2023', '2024', '2025'] as const;
  const [showInstallInfo, setShowInstallInfo] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-3 sm:p-6 bg-neumorphic-bg relative w-full">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
        <button
          onClick={toggleTheme}
          className="p-2.5 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
          title={`Theme: ${theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : theme === 'gold' ? 'Gold' : 'Minimalist B&W (အဖြူအမည်း)'}`}
        >
          {theme === 'light' ? <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" /> :
           theme === 'dark' ? <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> :
           theme === 'gold' ? <SparkleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" /> :
           <ContrastIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 dark:text-slate-100" />}
        </button>
        <button
          onClick={() => setShowInstallInfo(true)}
          className="p-2.5 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all"
          title="iOS Install Guide"
        >
          <InfoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {showInstallInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-neumorphic-bg rounded-3xl sm:rounded-[2.5rem] shadow-neumorphic-outset p-5 sm:p-8 max-w-md w-full animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl shrink-0">
                  <InfoIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-black text-slate-700 leading-tight">သင့် iPhone သို့မဟုတ် iPad တွင် App အဖြစ် ထည့်သွင်းအသုံးပြုနည်း</h2>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mt-1 sm:mt-2">Add to Home Screen</p>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl sm:rounded-[2rem] space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto">
                  <p>ဤ App ကို သင့်စက်ပစ္စည်း၏ Home Screen ပေါ်တွင် ပုံမှန် App တစ်ခုကဲ့သို့ ထည့်သွင်းအသုံးပြုနိုင်ပါသည်။ ဤသို့ပြုလုပ်ခြင်းဖြင့် Safari Address Bar များမပါဝင်ဘဲ Full-screen (မျက်နှာပြင်အပြည့်) စနစ်ဖြင့် ပိုမိုရှင်းလင်းလွယ်ကူစွာ အသုံးပြုနိုင်မည်ဖြစ်ပါသည်။</p>
                  
                  <p className="font-bold text-slate-700 mt-3 sm:mt-4">လုပ်ဆောင်ရမည့် အဆင့်များ</p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၁) - Safari ဖြင့် ဝင်ရောက်ခြင်း</p>
                      <p>သင့် iPhone/iPad ရှိ Safari Browser ကိုအသုံးပြု၍ ဤ App ၏ Link ကို ဖွင့်ပါ။<br/>
                      <span className="text-xs text-slate-500">(မှတ်ချက် - Chrome၊ Facebook သို့မဟုတ် Messenger In-app Browser များဖြင့် အသုံးပြု၍မရပါ။ Safari Browser တစ်ခုတည်းဖြင့်သာ လုပ်ဆောင်နိုင်ပါသည်။)</span></p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၂) - Share Button ကို နှိပ်ခြင်း</p>
                      <p>Safari Browser ၏ အောက်ခြေ (သို့မဟုတ် အပေါ်ဘက်) တွင်ရှိသော Share Button (လေးထောင့်ကွက်ထဲမှ မြှားအပေါ်သို့ ထွက်နေသောပုံ) ကို နှိပ်ပါ။</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၃) - Add to Home Screen ကို ရွေးချယ်ခြင်း</p>
                      <p>ပေါ်လာသော Menu Options များထဲမှ အောက်ဘက်သို့ အနည်းငယ်ဆွဲချ (Scroll down) ပြီး "Add to Home Screen" ဆိုသည့် စာသားကို ရွေးချယ်ပါ။</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၄) - အတည်ပြု၍ ထည့်သွင်းခြင်း</p>
                      <p>App အမည်ကို မိမိစိတ်ကြိုက် ပြင်ဆင်နိုင်ပြီးနောက် ညာဘက်အပေါ်ထောင့်ရှိ "Add" ကို နှိပ်ပါ။</p>
                    </div>
                  </div>

                  <p className="mt-3 sm:mt-4">ယခုဆိုလျှင် သင့်ဖုန်း၏ Home Screen ပေါ်တွင် App Icon လေး ရောက်ရှိသွားပြီဖြစ်၍ နောက်နောင်တွင် အခြား Application များကဲ့သို့ပင် တိုက်ရိုက်နှိပ်၍ အလွယ်တကူ ဝင်ရောက်အသုံးပြုနိုင်ပြီ ဖြစ်ပါသည်။</p>
              </div>
              <button
                onClick={() => setShowInstallInfo(false)}
                className="w-full py-3 sm:py-4 mt-4 sm:mt-6 text-xs sm:text-sm font-black uppercase tracking-widest text-slate-700 bg-neumorphic-bg rounded-xl sm:rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
              >
                Close
              </button>
           </div>
        </div>
      )}

      <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-0">
        <div className="inline-block p-4 sm:p-6 bg-neumorphic-bg rounded-full shadow-neumorphic-outset mb-4 sm:mb-6">
          <LogoIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-700">
          鉄骨製作管理技術者 試験対策
        </h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-lg font-medium text-slate-500">
          学習モードを選択してください (Select a Mode)
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-10">
        {/* Daily Tracker & Exam Countdown Widget */}
        <DailyTrackerWidget onStartPractice={() => onSelectApp('2026')} />

        {/* Study Guide Section */}
        <div className="bg-neumorphic-bg rounded-3xl sm:rounded-[3rem] shadow-neumorphic-inset p-5 sm:p-10 mb-6 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 ml-1 sm:ml-2">
                <InfoIcon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600 shrink-0" />
                <h2 className="text-base sm:text-xl font-black text-slate-600 uppercase tracking-wider sm:tracking-[0.1em]">Study Guide (လေ့လာရန်အကြံပြုချက်)</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              <p>
                <span className="font-bold text-slate-700">၁၀ လပိုင်း ၁၇ ရက်နေ့ (October 17)</span> စာမေးပွဲအတွက် အချိန် {monthsLeft > 0 ? `(${toMyanmarNumerals(monthsLeft)}) လခန့် ` : ''}({toMyanmarNumerals(daysLeft)} ရက်ခန့်) ကျန်သေးသဖြင့် အောက်ပါအတိုင်း လေ့လာရန် အကြံပြုအပ်ပါသည်။
              </p>
              <ul className="list-disc list-inside space-y-2 ml-1 sm:ml-2">
                <li>
                  <span className="font-bold text-slate-700">ဘယ်အခန်းက စလုပ်ရမလဲ?</span> <br/>
                  - <span className="text-blue-600 font-bold">Chapter 1 မှ စတင်ပါ</span>။ အခြေခံသဘောတရားများဖြစ်သဖြင့် Chapter 1 ကို သေချာနားလည်မှ ကျန်အခန်းများကို ဆက်သွားရန် ပိုလွယ်ကူပါမည်။
                </li>
                <li>
                  <span className="font-bold text-slate-700">တစ်ရက်ကို ဘယ်နှပုဒ် လုပ်သင့်လဲ?</span> <br/>
                  - ဂျပန်စာ ခက်ခဲသောကြောင့် <span className="text-emerald-600 font-bold">တစ်ရက်ကို အနည်းဆုံး ၅ ပုဒ် မှ ၁၀ ပုဒ်ခန့်</span> သေချာနားလည်အောင် ကျက်မှတ်/လေ့ကျင့်ပါ။ (၅ ပုဒ် × {toMyanmarNumerals(daysLeft)} ရက် = ပုဒ်ရေ {toMyanmarNumerals(5 * daysLeft)} ရရှိပါမည်)
                </li>
                <li>
                  <span className="font-bold text-slate-700">Vocabulary Cards များကို အသုံးပြုပါ</span> <br/>
                  - စာမေးပွဲ မေးခွန်းများကို နားလည်ရန် ဝေါဟာရ (Vocab) က အရေးကြီးဆုံးဖြစ်၍ မအားသည့်အချိန်များတွင် Vocabulary Cards များကို ဖွင့်ကြည့်ပါ။
                </li>
              </ul>
            </div>
        </div>

        {/* Priority Quick Access: Weak Points, Cheat Sheet & Engineering Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Weak Points Notebook */}
          <button
            onClick={() => onSelectApp('weak-points')}
            className="p-5 sm:p-7 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group border border-red-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-red-500 group-hover:scale-110 transition-transform shrink-0">
                  <PencilIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-black text-slate-700">အမှားမှတ်စု</h2>
                    {weakCount > 0 ? (
                      <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 font-mono">
                        {weakCount} ပုဒ်
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600">
                        အမှားမရှိပါ
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    မှားယွင်းခဲ့သော မေးခွန်းများအား သီးသန့်ပြန်လေ့ကျင့်ရန်။
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Cheat Sheet */}
          <button
            onClick={() => onSelectApp('cheat-sheet')}
            className="p-5 sm:p-7 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group border border-amber-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-amber-500 group-hover:scale-110 transition-transform shrink-0">
                  <ScaleIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-black text-slate-700">基準・数値まとめ</h2>
                    <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-700">
                      Cheat Sheet
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    HTB bolt၊ အပေါက်ဖောက်၊ Stud၊ ဂဟေအပူချိန် စံနှုန်း (၇၀) ခု။
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Engineering Calculator */}
          <button
            onClick={() => onSelectApp('calculator')}
            className="p-5 sm:p-7 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group border border-blue-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                  <CalculatorIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-black text-slate-700">工学計算機</h2>
                    <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700">
                      Calculator
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    溶接入熱 (Heat Input) နှင့် Stud အလျား တွက်ချက်မှု။
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <button
            onClick={() => onSelectApp('2026')}
            className="p-5 sm:p-8 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                  <BookOpenIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-700">2026 Chapter Study</h2>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-500 font-medium italic">New practice questions.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('2026-level2')}
            className="p-5 sm:p-8 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                  <BookOpenIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-700">2026 Chapter Study 2級</h2>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-500 font-medium italic">Level 2 practice questions.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('main')}
            className="p-5 sm:p-8 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                  <BookOpenIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-700">2022-2025 Chapter Study</h2>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-500 font-medium italic">Practice questions by chapter.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('flashcards')}
            className="p-5 sm:p-8 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-purple-600 group-hover:scale-110 transition-transform shrink-0">
                  <AcademicCapIcon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-700">Vocabulary Cards</h2>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-500 font-medium italic">Practice technical vocabulary.</p>
              </div>
            </div>
          </button>

          {/* Technical Dictionary Card */}
          <button
            onClick={() => onSelectApp('dictionary')}
            className="p-5 sm:p-8 text-left bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group md:col-span-2 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-indigo-600 group-hover:scale-110 transition-transform shrink-0">
                    <BookOpenIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg sm:text-xl font-black text-slate-700">Technical Dictionary (ဝေါဟာရ အဘိဓာန်)</h2>
                      <span className="px-2 py-0.5 text-[10px] font-black rounded-md bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 uppercase">
                        All Vocab
                      </span>
                    </div>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-500 font-medium italic">
                      Read-only dictionary with search, pronunciation, duplicate-merging & complete definitions.
                    </p>
                </div>
              </div>
              <div className="hidden sm:block p-3 rounded-full bg-neumorphic-bg shadow-neumorphic-outset group-hover:shadow-neumorphic-inset transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Old Questions Section */}
        <div className="bg-neumorphic-bg rounded-3xl sm:rounded-[3rem] shadow-neumorphic-inset p-5 sm:p-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 ml-1 sm:ml-2">
                <PencilIcon className="w-5 h-5 sm:w-7 sm:h-7 text-green-600 shrink-0" />
                <h2 className="text-base sm:text-xl font-black text-slate-600 uppercase tracking-wider sm:tracking-[0.2em]">Old Questions (過去問題)</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-6 mb-6 sm:mb-10">
                {oldYears.map(year => (
                    <button
                        key={year}
                        onClick={() => onSelectApp(year)}
                        className="p-4 sm:p-8 text-center bg-neumorphic-bg rounded-2xl sm:rounded-[2rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
                    >
                        <span className="block text-xl sm:text-4xl font-black text-slate-700 group-hover:text-green-600 transition-colors">{year}</span>
                        <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1 block">Year</span>
                    </button>
                ))}
            </div>
            
            {/* Resource Files Section */}
            <div className="pt-6 sm:pt-8 border-t border-slate-300/30">
                <a
                  href="https://drive.google.com/drive/folders/1ylAMH4TR3VJOHF_njeHyLWQtTX2zXTZ4?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 sm:p-8 bg-neumorphic-bg rounded-2xl sm:rounded-[2rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div className="p-3 sm:p-4 bg-neumorphic-bg rounded-xl sm:rounded-2xl shadow-neumorphic-inset text-amber-600 group-hover:rotate-12 transition-transform shrink-0">
                        <FolderIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                        <h2 className="text-base sm:text-xl font-black text-slate-700">Resource Files (လေ့လာရန်ဖိုင်များ)</h2>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">Access supplementary study materials in Google Drive.</p>
                    </div>
                  </div>
                  <div className="hidden sm:block p-3 rounded-full bg-neumorphic-bg shadow-neumorphic-outset group-hover:shadow-neumorphic-inset transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-blue-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                  </div>
                </a>
            </div>
        </div>
      </div>

      <div className="mt-16 text-center text-sm">
        <p className="font-black text-slate-400 uppercase tracking-widest mb-1">Developer</p>
        <p className="font-black text-slate-600">MYO KO KO OO</p>
        <a
          href="https://www.facebook.com/share/1EiUt29WW2/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-bold text-blue-500 hover:text-blue-700 underline underline-offset-4 decoration-blue-200"
        >
          ဆက်သွယ်ရန် Account
        </a>
      </div>
    </div>
  );
};

export default WelcomeScreen;
