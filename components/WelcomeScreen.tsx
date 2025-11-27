import React from 'react';
import { LogoIcon, BookOpenIcon, PencilIcon, AcademicCapIcon } from './Icons';

interface WelcomeScreenProps {
  onSelectApp: (app: 'main' | '2021' | 'flashcards') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectApp }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-neumorphic-bg">
      <div className="text-center mb-12">
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

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <button
          onClick={() => onSelectApp('main')}
          className="p-8 text-left bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neumorphic-bg focus:ring-slate-500"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neumorphic-bg rounded-full shadow-neumorphic-inset">
                <BookOpenIcon className="w-8 h-8 text-blue-600" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-700">Chapter Study</h2>
                <p className="mt-1 text-slate-500">Practice questions by chapter.</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelectApp('2021')}
          className="p-8 text-left bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neumorphic-bg focus:ring-slate-500"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neumorphic-bg rounded-full shadow-neumorphic-inset">
                <PencilIcon className="w-8 h-8 text-green-600" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-700">2021 Old Questions</h2>
                <p className="mt-1 text-slate-500">Practice past questions from 2021.</p>
            </div>
          </div>
        </button>
        
        <button
          onClick={() => onSelectApp('flashcards')}
          className="p-8 text-left bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neumorphic-bg focus:ring-slate-500"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neumorphic-bg rounded-full shadow-neumorphic-inset">
                <AcademicCapIcon className="w-8 h-8 text-purple-600" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-700">Vocabulary Flashcards</h2>
                <p className="mt-1 text-slate-500">Practice vocabulary with flashcards.</p>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-16 text-center text-sm">
        <p className="font-semibold text-slate-600">MYO KO KO OO</p>
        <a
          href="https://www.facebook.com/share/1EiUt29WW2/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block font-medium text-slate-500 hover:text-slate-700"
        >
          ဆက်သွယ်ရန် Account
        </a>
      </div>
    </div>
  );
};

export default WelcomeScreen;