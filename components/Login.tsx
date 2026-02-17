
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon } from './Icons';

const AuthScreen: React.FC = () => {
  const [accessKey, setAccessKey] = useState('');
  const { login, error: authError, loading } = useAuth();
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!accessKey) {
      setFormError('Please enter your Redeem Code.');
      return;
    }
    await login(accessKey);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-neumorphic-bg">
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
