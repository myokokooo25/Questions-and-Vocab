
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon, InfoIcon } from './Icons';
import { supabase } from '../lib/supabase';

const AuthScreen: React.FC = () => {
  const [accessKey, setAccessKey] = useState('');
  const [userName, setUserName] = useState('');
  const { login, error: authError, loading } = useAuth();
  const [formError, setFormError] = useState('');
  const [showInstallInfo, setShowInstallInfo] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setFormError(err.message || 'Google login failed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!accessKey) {
      setFormError('Please enter your Redeem Code.');
      return;
    }
    if (!userName.trim()) {
      setFormError('Please enter your Name.');
      return;
    }
    await login(accessKey, userName.trim());
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-neumorphic-bg relative">
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

      <div className="w-full max-w-sm p-10 space-y-8 bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="p-6 bg-neumorphic-bg rounded-full shadow-neumorphic-outset mb-2">
              <LogoIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-700">
                鉄骨製作管理技術者<br/>試験対策
            </h1>
            <div className="mt-2 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${authError && authError.includes('Database') ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></span>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Online System
                </p>
            </div>
        </div>

        <div className="p-5 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-center">
            <p className="text-xs leading-relaxed text-slate-500 font-medium">
                ဤ App သည် ဂျပန်နိုင်ငံ၏ <span className="font-bold text-slate-600">鉄骨製作管理技術者</span> (Steel Frame Production Management Engineer) စာမေးပွဲဖြေဆိုရန် လေ့လာနေသူများအတွက် ရည်ရွယ်ပါသည်။
                <br/><br/>
                စာမေးပွဲမေးခွန်းဟောင်းများနှင့် ၎င်းတို့၏ ရှင်းလင်းချက်များ၊ သက်ဆိုင်ရာ ဝေါဟာရများကို စုစည်းပေးထားပါသည်။
            </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="mt-1">
              <input
                id="user-name"
                name="user-name"
                type="text"
                autoComplete="off"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full px-6 py-4 bg-neumorphic-bg placeholder-slate-400 rounded-2xl shadow-neumorphic-inset appearance-none border-2 border-transparent focus:outline-none focus:ring-0 text-center font-bold text-slate-700 mb-4"
                placeholder="ENTER YOUR NAME"
              />
              <input
                id="redeem-code"
                name="redeem-code"
                type="text"
                autoComplete="off"
                required
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                className="block w-full px-6 py-4 bg-neumorphic-bg placeholder-slate-400 rounded-2xl shadow-neumorphic-inset appearance-none border-2 border-transparent focus:outline-none focus:ring-0 text-center font-mono font-bold tracking-widest text-slate-700 uppercase"
                placeholder="ENTER CODE"
              />
            </div>
          </div>
          
          {(formError || authError) && (
            <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                <p className="text-xs text-center text-red-500 font-bold">{formError || authError}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center w-full px-4 py-4 text-sm font-black uppercase tracking-widest text-slate-700 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                  <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                  </span>
              ) : 'Login'}
            </button>
          </div>
        </form>

          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700/50"></div>
            </div>
            <div className="relative px-4 bg-neumorphic-bg text-xs font-bold text-slate-400 uppercase tracking-widest">
              Or continue with
            </div>
          </div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-4 text-sm font-black text-slate-700 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
  
<div className="pt-4 text-center text-xs">
          <p className="font-bold text-slate-400 uppercase tracking-tighter">Developer</p>
          <p className="font-black text-slate-600 mb-1">MYO KO KO OO</p>
          <a
            href="https://www.facebook.com/share/1EiUt29WW2/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold text-blue-500 hover:text-blue-700 underline underline-offset-4"
          >
            ဆက်သွယ်ရန် Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
