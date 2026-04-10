
import React, { useState } from 'react';
import { LogoIcon, BookOpenIcon, PencilIcon, AcademicCapIcon, FolderIcon, InfoIcon } from './Icons';

interface WelcomeScreenProps {
  onSelectApp: (app: 'main' | '2021' | '2022' | '2023' | '2024' | '2025' | '2026' | 'flashcards') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectApp }) => {
  const oldYears = ['2021', '2022', '2023', '2024', '2025'] as const;
  const [showInstallInfo, setShowInstallInfo] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-neumorphic-bg relative">
      <button
        onClick={() => setShowInstallInfo(true)}
        className="absolute top-6 right-6 p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all"
        title="iOS Install Guide"
      >
        <InfoIcon className="w-6 h-6" />
      </button>

      {showInstallInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset p-8 max-w-md w-full animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl">
                  <InfoIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-700 leading-tight">သင့် iPhone သို့မဟုတ် iPad တွင် App အဖြစ် ထည့်သွင်းအသုံးပြုနည်း</h2>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Add to Home Screen</p>
                </div>
              </div>
              <div className="p-6 bg-neumorphic-bg shadow-neumorphic-inset rounded-[2rem] space-y-4 text-sm text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto">
                  <p>ဤ App ကို သင့်စက်ပစ္စည်း၏ Home Screen ပေါ်တွင် ပုံမှန် App တစ်ခုကဲ့သို့ ထည့်သွင်းအသုံးပြုနိုင်ပါသည်။ ဤသို့ပြုလုပ်ခြင်းဖြင့် Safari Address Bar များမပါဝင်ဘဲ Full-screen (မျက်နှာပြင်အပြည့်) စနစ်ဖြင့် ပိုမိုရှင်းလင်းလွယ်ကူစွာ အသုံးပြုနိုင်မည်ဖြစ်ပါသည်။</p>
                  
                  <p className="font-bold text-slate-700 mt-4">လုပ်ဆောင်ရမည့် အဆင့်များ</p>
                  
                  <div className="space-y-4">
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

                  <p className="mt-4">ယခုဆိုလျှင် သင့်ဖုန်း၏ Home Screen ပေါ်တွင် App Icon လေး ရောက်ရှိသွားပြီဖြစ်၍ နောက်နောင်တွင် အခြား Application များကဲ့သို့ပင် တိုက်ရိုက်နှိပ်၍ အလွယ်တကူ ဝင်ရောက်အသုံးပြုနိုင်ပြီ ဖြစ်ပါသည်။</p>
              </div>
              <button
                onClick={() => setShowInstallInfo(false)}
                className="w-full py-4 mt-6 text-sm font-black uppercase tracking-widest text-slate-700 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
              >
                Close
              </button>
           </div>
        </div>
      )}

      <div className="text-center mb-12">
        <div className="inline-block p-6 bg-neumorphic-bg rounded-full shadow-neumorphic-outset mb-6">
          <LogoIcon className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-700">
          鉄骨製作管理技術者 試験対策
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-500">
          学習モードを選択してください (Select a Mode)
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-10">
        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onSelectApp('main')}
            className="p-8 text-left bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-blue-600 group-hover:scale-110 transition-transform">
                  <BookOpenIcon className="w-8 h-8" />
              </div>
              <div>
                  <h2 className="text-xl font-black text-slate-700">2022-2025 Chapter Study</h2>
                  <p className="mt-1 text-sm text-slate-500 font-medium italic">Practice questions by chapter.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('2026')}
            className="p-8 text-left bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-emerald-600 group-hover:scale-110 transition-transform">
                  <BookOpenIcon className="w-8 h-8" />
              </div>
              <div>
                  <h2 className="text-xl font-black text-slate-700">2026 Chapter Study</h2>
                  <p className="mt-1 text-sm text-slate-500 font-medium italic">New practice questions.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('flashcards')}
            className="p-8 text-left bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-purple-600 group-hover:scale-110 transition-transform">
                  <AcademicCapIcon className="w-8 h-8" />
              </div>
              <div>
                  <h2 className="text-xl font-black text-slate-700">Vocabulary Cards</h2>
                  <p className="mt-1 text-sm text-slate-500 font-medium italic">Practice technical vocabulary.</p>
              </div>
            </div>
          </button>
        </div>

        {/* Old Questions Section */}
        <div className="bg-neumorphic-bg rounded-[3rem] shadow-neumorphic-inset p-8 sm:p-10">
            <div className="flex items-center gap-4 mb-8 ml-2">
                <PencilIcon className="w-7 h-7 text-green-600" />
                <h2 className="text-xl font-black text-slate-600 uppercase tracking-[0.2em]">Old Questions (過去問題)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-10">
                {oldYears.map(year => (
                    <button
                        key={year}
                        onClick={() => onSelectApp(year)}
                        className="p-6 sm:p-8 text-center bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
                    >
                        <span className="block text-2xl sm:text-4xl font-black text-slate-700 group-hover:text-green-600 transition-colors">{year}</span>
                        <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mt-1 block">Year</span>
                    </button>
                ))}
            </div>
            
            {/* Resource Files Section */}
            <div className="pt-8 border-t border-slate-300/30">
                <a
                  href="https://drive.google.com/drive/folders/1ylAMH4TR3VJOHF_njeHyLWQtTX2zXTZ4?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-8 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-amber-600 group-hover:rotate-12 transition-transform">
                        <FolderIcon className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-700">Resource Files (လေ့လာရန်ဖိုင်များ)</h2>
                        <p className="text-sm text-slate-500 font-medium">Access supplementary study materials in Google Drive.</p>
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
