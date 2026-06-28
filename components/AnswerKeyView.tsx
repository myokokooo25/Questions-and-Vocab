import React, { useState } from 'react';
import { studyDataByChapter } from '../data/content';
import { ChevronLeftIcon, CheckCircleSolidIcon } from './Icons';

interface AnswerKeyViewProps {
  onClose: () => void;
}

const AnswerKeyView: React.FC<AnswerKeyViewProps> = ({ onClose }) => {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const chapters = [1, 2, 3, 4, 5];

  const currentData = studyDataByChapter[activeChapter] || [];

  return (
    <div className="fixed inset-0 z-[60] bg-neumorphic-bg flex flex-col">
      <header className="shrink-0 flex items-center justify-between p-4 sm:p-6 shadow-neumorphic-outset">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
            title="Go Back"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-black text-slate-700">Answer Key (Chapters 1-5)</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl mb-8">
          <div className="bg-neumorphic-bg shadow-neumorphic-inset p-2 rounded-3xl flex flex-wrap gap-2">
            {chapters.map((ch) => (
              <button
                key={ch}
                onClick={() => setActiveChapter(ch)}
                className={`flex-1 py-3 px-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                  activeChapter === ch
                    ? 'shadow-neumorphic-inset text-blue-600 bg-blue-50/10'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Chapter {ch}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl space-y-6">
          {currentData.length === 0 ? (
            <div className="text-center p-8 text-slate-500 font-bold">No data available for Chapter {activeChapter}.</div>
          ) : (
            currentData.map((q) => {
              const correctOption = q.options.find((o) => o.id === q.correctOptionId);
              return (
                <div key={q.id} className="p-6 bg-neumorphic-bg shadow-neumorphic-outset rounded-3xl">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="shrink-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-black text-slate-500 uppercase tracking-widest">
                      Q {q.id}
                    </span>
                  </div>
                  <h3 
                    className="text-lg font-bold text-slate-700 mb-2 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: q.questionJP }} 
                  />
                  <p className="text-slate-600 text-sm mb-6">{q.questionMY}</p>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-900/30">
                    <div className="flex items-start gap-3">
                      <CheckCircleSolidIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-800 dark:text-green-400" dangerouslySetInnerHTML={{ __html: correctOption?.textJP || '' }} />
                        <p className="text-sm text-green-700 dark:text-green-500 mt-1">{correctOption?.textMY}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerKeyView;
