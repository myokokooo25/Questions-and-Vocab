import fs from 'fs';
let content = fs.readFileSync('components/Login.tsx', 'utf-8');

const appGuideCode = `
      {showAppGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-blue-100 rounded-2xl shadow-neumorphic-inset text-blue-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h2 className="text-xl sm:text-2xl font-black text-slate-700">App အသုံးပြုနည်းနှင့် စာကျက်နည်း</h2>
              </div>
              
              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  <div className="p-4 bg-slate-50 rounded-2xl shadow-neumorphic-inset">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">📚 စာကျက်နည်းအကြံပြုချက်များ (Study Methods)</h3>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                          <li><span className="font-bold text-blue-600">Flashcard Method (Study View):</span> မေးခွန်းတစ်ခုချင်းစီကို အရင်ဆုံး ကိုယ်တိုင်စဉ်းစားကြည့်ပါ။ ပြီးမှ အဖြေမှန်ကိုရွေးချယ်ပြီး ရှင်းလင်းချက်ကို ဖတ်ပါ။</li>
                          <li><span className="font-bold text-blue-600">Repetition (ထပ်ခါထပ်ခါလေ့လာခြင်း):</span> မရသေးသော၊ ခက်ခဲသော မေးခွန်းများကို Bookmark မှတ်ထားပါ။ ပြီးလျှင် Bookmark view ဖြင့် ထိုမေးခွန်းများကိုသာ သီးသန့်ပြန်လည်လေ့လာပါ။</li>
                          <li><span className="font-bold text-blue-600">Mock Quiz (စမ်းသပ်ဖြေဆိုခြင်း):</span> အခန်းတစ်ခုပြီးတိုင်း "Quiz" mode ကိုသုံးပြီး ကိုယ့်ကိုယ်ကိုယ် ပြန်လည်စစ်ဆေးပါ။ မေးခွန်းအဟောင်းများကိုလည်း "Bank" mode ဖြင့် အရင်လေ့လာပြီး Quiz ဖြင့် စမ်းသပ်ပါ။</li>
                          <li><span className="font-bold text-blue-600">Kanji Tooltip:</span> ဂျပန်စာလုံးများ (Kanji) ကို နားမလည်ပါက စာလုံးပေါ်တွင် ထောက်ကြည့်/ဖိကြည့်ခြင်းဖြင့် အဓိပ္ပာယ်ကို လေ့လာပါ။</li>
                      </ul>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl shadow-neumorphic-inset">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">💡 App အသုံးပြုနည်း (How to use)</h3>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                          <li><span className="font-bold text-blue-600">Bookmarks (မှတ်သားခြင်း):</span> မေးခွန်းကတ်များ၏ ညာဘက်အပေါ်ထောင့်ရှိ Bookmark icon ကိုနှိပ်၍ သိမ်းဆည်းပါ။ Header ရှိ Bookmark icon ကိုနှိပ်လျှင် သိမ်းထားသည်များကိုသာ မြင်ရပါမည်။</li>
                          <li><span className="font-bold text-blue-600">Navigation:</span> အပေါ်ရှိ "Select Data" မှတဆင့် သင်ခန်းစာ (Chapter) သို့မဟုတ် နှစ်အလိုက် (2021-2026) မေးခွန်းများကို ရွေးချယ်နိုင်ပါသည်။</li>
                          <li><span className="font-bold text-blue-600">Display Modes:</span> 
                              <br/>- <span className="font-semibold">Study:</span> တစ်ပုဒ်ချင်းစီ လေ့လာရန်
                              <br/>- <span className="font-semibold">Bank:</span> မေးခွန်းများကို စာရင်းလိုက် ကြည့်ရန်
                              <br/>- <span className="font-semibold">Quiz:</span> စာမေးပွဲဖြေဆိုသကဲ့သို့ လေ့ကျင့်ရန်
                          </li>
                          <li><span className="font-bold text-blue-600">Answer Key:</span> Header ရှိ List icon ကိုနှိပ်ပြီး အဖြေမှန်စာရင်းကို အလွယ်တကူ ကြည့်ရှုနိုင်ပါသည်။</li>
                          <li><span className="font-bold text-blue-600">Font Size:</span> Header ရှိ "Aa" icon ကိုနှိပ်ပြီး စာလုံးအရွယ်အစား (Small, Medium, Large) ကို ပြောင်းလဲနိုင်ပါသည်။</li>
                      </ul>
                  </div>
              </div>

              <button
                onClick={() => setShowAppGuide(false)}
                className="w-full py-4 mt-8 text-sm font-black uppercase tracking-widest text-white bg-blue-600 rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all hover:bg-blue-700"
              >
                နားလည်ပါပြီ
              </button>
           </div>
        </div>
      )}
`;

content = content.replace("const [showInstallInfo, setShowInstallInfo] = useState(false);", 
  "const [showInstallInfo, setShowInstallInfo] = useState(false);\n  const [showAppGuide, setShowAppGuide] = useState(false);\n\n  useEffect(() => {\n    if (localStorage.getItem('hasSeenAppGuide') !== 'true') {\n      setShowAppGuide(true);\n      localStorage.setItem('hasSeenAppGuide', 'true');\n    }\n  }, []);\n");

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");

content = content.replace("className=\"absolute top-6 right-6 p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all\"",
"className=\"p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all\"");

content = content.replace(
`<button
        onClick={() => setShowInstallInfo(true)}
        className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all"
        title="iOS Install Guide"
      >
        <InfoIcon className="w-6 h-6" />
      </button>`,
`<div className="absolute top-6 right-6 flex flex-col gap-3">
        <button
          onClick={() => setShowAppGuide(true)}
          className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all"
          title="App Guide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        </button>
        <button
          onClick={() => setShowInstallInfo(true)}
          className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all"
          title="iOS Install Guide"
        >
          <InfoIcon className="w-6 h-6" />
        </button>
      </div>`
);

content = content.replace("      {showInstallInfo && (", appGuideCode + "      {showInstallInfo && (");

fs.writeFileSync('components/Login.tsx', content);
