
import React from 'react';
import { LogoIcon, BookOpenIcon, PencilIcon, AcademicCapIcon, FolderIcon } from './Icons';

interface WelcomeScreenProps {
  onSelectApp: (app: 'main' | '2021' | '2022' | '2023' | '2024' | '2025' | 'flashcards') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectApp }) => {
  const oldYears = ['2021', '2022', '2023', '2024', '2025'] as const;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-neumorphic-bg">
      <div className="text-center mb-10">
        <div className="inline-block p-4 bg-neumorphic-bg rounded-full shadow-neumorphic-outset mb-4">
          <LogoIcon className="w-12 h-12 text-neumorphic-text" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-700">
          鉄骨製作管理技術者 試験対策
        </h1>
        <p className="mt-2 text-lg text-slate-500">
          学習モードを選択してください (Choose a study mode)
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-8">
        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => onSelectApp('main')}
            className="p-8 text-left bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 focus:outline-none"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neumorphic-bg rounded-full shadow-neumorphic-inset text-blue-600">
                  <BookOpenIcon className="w-8 h-8" />
              </div>
              <div>
                  <h2 className="text-xl font-bold text-slate-700">Chapter Study</h2>
                  <p className="mt-1 text-slate-500">Practice questions by chapter.</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectApp('flashcards')}
            className="p-8 text-left bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 focus:outline-none"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neumorphic-bg rounded-full shadow-neumorphic-inset text-purple-600">
                  <AcademicCapIcon className="w-8 h-8" />
              </div>
              <div>
                  <h2 className="text-xl font-bold text-slate-700">Vocabulary Flashcards</h2>
                  <p className="mt-1 text-slate-500">Practice vocabulary with flashcards.</p>
              </div>
            </div>
          </button>
        </div>

        {/* Old Questions Section */}
        <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
                <PencilIcon className="w-6 h-6 text-green-600" />
                <h2 className="text-lg font-bold text-slate-600 uppercase tracking-widest">Old Questions (過去問題)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {oldYears.map(year => (
                    <button
                        key={year}
                        onClick={() => onSelectApp(year)}
                        className="p-4 sm:p-6 text-center bg-neumorphic-bg rounded-xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 focus:outline-none group"
                    >
                        <span className="block text-2xl font-black text-slate-700 group-hover:text-green-600 transition-colors">{year}</span>
                        <span className="text-xs font-bold text-slate-400 uppercase">Year</span>
                    </button>
                ))}
            </div>
            
            {/* Resource Files Section */}
            <div className="pt-6 border-t border-slate-300/30">
                <a
                  href="https://drive.google.com/drive/folders/1ylAMH4TR3VJOHF_njeHyLWQtTX2zXTZ4?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neumorphic-bg rounded-full shadow-neumorphic-inset text-amber-600">
                        <FolderIcon className="w-7 h-7" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-700">Resource Files (လေ့လာရန်ဖိုင်များ)</h2>
                        <p className="text-sm text-slate-500">Access supplementary study materials in Google Drive.</p>
                    </div>
                  </div>
                  <div className="hidden sm:block p-2 rounded-full text-slate-400 group-hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                  </div>
                </a>
            </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        <p className="font-semibold text-slate-600">MYO KO KO OO</p>
        <a
          href="https://www.facebook.com/share/1EiUt29WW2/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block font-medium text-slate-500 hover:text-slate-700 underline underline-offset-4 decoration-slate-300"
        >
          ဆက်သွယ်ရန် Account
        </a>
      </div>
    </div>
  );
};

export default WelcomeScreen;
