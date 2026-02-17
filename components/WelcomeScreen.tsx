
import React from 'react';
import { LogoIcon, BookOpenIcon, PencilIcon, AcademicCapIcon, FolderIcon } from './Icons';

interface WelcomeScreenProps {
  onSelectApp: (app: 'main' | '2021' | '2022' | '2023' | '2024' | '2025' | 'flashcards') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectApp }) => {
  // Temporarily hiding 2021 and 2025 as requested
  const oldYears = ['2022', '2023', '2024'] as const;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-neumorphic-bg">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <button
            onClick={() => onSelectApp('main')}
            className="p-10 text-left bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-6">
              <div className="p-5 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-blue-600 group-hover:scale-110 transition-transform">
                  <BookOpenIcon className="w-10 h-10" />
              </div>
              <div>
                  <h2 className="text-2xl font-black text-slate-700">Chapter Study</h2>
                  <p className="mt-1 text-slate-500 font-medium italic">Practice questions by chapter.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('flashcards')}
            className="p-10 text-left bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
          >
            <div className="flex items-center gap-6">
              <div className="p-5 bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset text-purple-600 group-hover:scale-110 transition-transform">
                  <AcademicCapIcon className="w-10 h-10" />
              </div>
              <div>
                  <h2 className="text-2xl font-black text-slate-700">Vocabulary Cards</h2>
                  <p className="mt-1 text-slate-500 font-medium italic">Practice technical vocabulary.</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {oldYears.map(year => (
                    <button
                        key={year}
                        onClick={() => onSelectApp(year)}
                        className="p-8 text-center bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all duration-300 focus:outline-none group"
                    >
                        <span className="block text-4xl font-black text-slate-700 group-hover:text-green-600 transition-colors">{year}</span>
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1 block">Year</span>
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
