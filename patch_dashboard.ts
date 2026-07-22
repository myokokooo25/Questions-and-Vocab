import fs from 'fs';
let content = fs.readFileSync('components/Dashboard.tsx', 'utf-8');

const appGuideCode = `
      {showAppGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-blue-100 rounded-2xl shadow-neumorphic-inset text-blue-600">
                    <InfoIcon className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl sm:text-2xl font-black text-slate-700">အသုံးပြုနည်းနှင့် လေ့လာရန် အကြံပြုချက်များ</h2>
              </div>
              
              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  <div className="p-4 bg-blue-50/50 rounded-2xl shadow-neumorphic-inset">
                      <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                         <span className="text-xl">📅</span> ၁၀ လပိုင်း ၁၇ ရက်နေ့အတွက် ၃ လတာ (ရက် ၉၀) လေ့လာရန် အစီအစဉ်
                      </h3>
                      <p className="text-blue-700/80 mb-3 text-sm font-bold">ဂျပန်စာခက်ခဲသူများအတွက် ဖြည်းဖြည်းမှန်မှန် လေ့လာရန် အထူးအကြံပြုချက်</p>
                      
                      <div className="space-y-4">
                          <div>
                              <p className="font-bold text-slate-700 mb-1">၁။ အခန်းအလိုက် အစီအစဉ် (ပထမ ၁ လခွဲ)</p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                                  <li><span className="font-semibold text-blue-600">Chapter 2</span> (သံမဏိထုတ်လုပ်ခြင်း - မေးခွန်းအများဆုံးထွက်လေ့ရှိသည်) ကို အရင်ဆုံး စတင်ပါ။ (၁ ပတ်ခွဲခန့်)</li>
                                  <li><span className="font-semibold text-blue-600">Chapter 1</span> (ပစ္စည်းများ) ကို ဆက်ကြည့်ပါ။ (၁ ပတ်ခန့်)</li>
                                  <li><span className="font-semibold text-blue-600">Chapter 3</span> (အရည်အသွေးထိန်းချုပ်ခြင်း) (၁ ပတ်ခွဲခန့်)</li>
                                  <li><span className="font-semibold text-blue-600">Chapter 4 & 5</span> (ဘေးကင်းရေး နှင့် ဥပဒေ) (၁ ပတ်ခန့်)</li>
                              </ul>
                              <p className="mt-2 text-sm text-slate-500 bg-white/50 p-2 rounded-lg italic">💡 တစ်ရက်ကို မေးခွန်း ၁၀ ပုဒ် မှ ၁၅ ပုဒ်ခန့် ပုံမှန်လေ့လာပါ။ အလွတ်ကျက်ရန်ထက် ရှင်းလင်းချက်များကို နားလည်အောင် ဖတ်ရန် အရေးကြီးပါသည်။</p>
                          </div>

                          <div>
                              <p className="font-bold text-slate-700 mb-1">၂။ မေးခွန်းဟောင်းများ လေ့ကျင့်ခြင်း (ဒုတိယ ၁ လ)</p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                                  <li>2021 မှ 2025 အထိ မေးခွန်းဟောင်းများကို တစ်နှစ်ချင်းစီ လေ့ကျင့်ပါ။</li>
                                  <li>တစ်ပတ်လျှင် မေးခွန်းဟောင်း ၁ နှစ်စာ ကို ပြီးမြောက်အောင် ကြိုးစားပါ။</li>
                              </ul>
                          </div>

                          <div>
                              <p className="font-bold text-slate-700 mb-1">၃။ ပြန်လည်သုံးသပ်ခြင်းနှင့် Mock Quiz (နောက်ဆုံး ၂ ပတ်)</p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                                  <li>Bookmark မှတ်ထားသော ခက်ခဲသည့် မေးခွန်းများကိုသာ အာရုံစိုက်ပြီး ပြန်ကြည့်ပါ။</li>
                                  <li>App ထဲရှိ "Quiz" mode ကို အသုံးပြု၍ အချိန်မှတ်ကာ တကယ့်စာမေးပွဲကဲ့သို့ စမ်းသပ်ဖြေဆိုပါ။</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl shadow-neumorphic-inset">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">💡 App အသုံးပြုနည်း (How to use)</h3>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                          <li><span className="font-bold text-blue-600">Kanji Tooltip:</span> ဂျပန်စာလုံးများ (Kanji) ကို နားမလည်ပါက စာလုံးပေါ်တွင် ထောက်ကြည့်/ဖိကြည့်ခြင်းဖြင့် မြန်မာလို အဓိပ္ပာယ်ကို လေ့လာပါ။</li>
                          <li><span className="font-bold text-blue-600">Bookmarks (မှတ်သားခြင်း):</span> မေးခွန်းကတ်များ၏ ညာဘက်အပေါ်ထောင့်ရှိ Bookmark icon ကိုနှိပ်၍ သိမ်းဆည်းပါ။</li>
                          <li><span className="font-bold text-blue-600">Display Modes:</span> 
                              <br/>- <span className="font-semibold">Study:</span> တစ်ပုဒ်ချင်းစီ လေ့လာရန်
                              <br/>- <span className="font-semibold">Bank:</span> မေးခွန်းများကို စာရင်းလိုက် ကြည့်ရန်
                              <br/>- <span className="font-semibold">Quiz:</span> စာမေးပွဲဖြေဆိုသကဲ့သို့ လေ့ကျင့်ရန်
                          </li>
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

const startIndex = content.indexOf('{showAppGuide && (');
if (startIndex !== -1) {
    let endIndex = content.indexOf(')}', startIndex) + 2;
    const afterBlock = content.substring(endIndex);
    if (afterBlock.startsWith('\n      {showInstallInfo')) {
       // ok
    } else {
        endIndex = content.indexOf('{showInstallInfo', startIndex) - 6;
    }
    const beforeBlock = content.substring(0, startIndex);
    const afterEnd = content.substring(endIndex);
    
    content = beforeBlock + appGuideCode.trim() + '\n      ' + afterEnd;
}

fs.writeFileSync('components/Dashboard.tsx', content);
