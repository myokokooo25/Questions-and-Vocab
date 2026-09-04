import React, { useState, useMemo } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { StudyCardData } from '../types';
import JapaneseText from './JapaneseText';
import { playJapaneseAudio, stopAudio } from '../lib/audio';
import {
  ChevronLeftIcon,
  SearchIcon,
  CheckCircleSolidIcon,
  XCircleSolidIcon,
  PencilIcon,
  SpeakerIcon,
  LightBulbIcon,
  SparkleIcon,
  AcademicCapIcon,
  RefreshIcon
} from './Icons';

interface WeakPointNotebookProps {
  onGoBack: () => void;
}

export const WeakPointNotebook: React.FC<WeakPointNotebookProps> = ({ onGoBack }) => {
  const { weakQuestions, removeWeakQuestion, clearAllWeakQuestions, recordAnswer, incrementDailyAnswered } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [celebrateId, setCelebrateId] = useState<string | null>(null);

  const questionList = useMemo(() => {
    return Object.values(weakQuestions).map(item => item.question);
  }, [weakQuestions]);

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return questionList;
    const q = searchQuery.toLowerCase().trim();
    return questionList.filter(item => {
      const inJP = item.questionJP.toLowerCase().includes(q);
      const inMY = item.questionMY.toLowerCase().includes(q);
      const inOpts = item.options.some(opt => opt.textMY.toLowerCase().includes(q) || opt.textJP.toLowerCase().includes(q));
      return inJP || inMY || inOpts;
    });
  }, [questionList, searchQuery]);

  const handlePlayAudio = (id: string, text: string) => {
    if (playingAudioId === id) {
      stopAudio();
      setPlayingAudioId(null);
      return;
    }
    const cleanText = text.replace(/<[^>]*>/g, '');
    playJapaneseAudio(cleanText, {
      onStart: () => setPlayingAudioId(id),
      onEnd: () => setPlayingAudioId(null),
      onError: () => setPlayingAudioId(null),
    });
  };

  const handleMasterQuestion = (questionId: string) => {
    setCelebrateId(questionId);
    setTimeout(() => {
      removeWeakQuestion(questionId);
      setCelebrateId(null);
    }, 400);
  };

  // --- Quiz Mode Handlers ---
  const startQuiz = () => {
    setIsQuizMode(true);
    setQuizIndex(0);
    setQuizSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleQuizOptionSelect = (optionId: number) => {
    if (quizSelectedOption !== null) return;
    setQuizSelectedOption(optionId);
    incrementDailyAnswered();

    const currentQ = questionList[quizIndex];
    if (optionId === currentQ.correctOptionId) {
      setQuizScore(prev => prev + 1);
    }
    recordAnswer(String(currentQ.id), optionId);
  };

  const handleQuizNext = () => {
    if (quizIndex < questionList.length - 1) {
      setQuizIndex(prev => prev + 1);
      setQuizSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-neumorphic-bg text-slate-700 py-6 px-3 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (isQuizMode) setIsQuizMode(false);
                else onGoBack();
              }}
              className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-800 active:shadow-neumorphic-inset transition-all"
              title="Go Back"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-red-100/60 dark:bg-red-950/40 text-red-600 dark:text-red-400 shadow-neumorphic-inset">
                  <PencilIcon className="w-5 h-5" />
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                  {isQuizMode ? 'အမှားများအား Quiz ဖြေဆိုခြင်း' : 'အမှားမှတ်စု (Weak Points Notebook)'}
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                {isQuizMode ? 'မှားယွင်းခဲ့ဖူးသော မေးခွန်းများကို ပြန်လည်ဖြေဆိုစစ်ဆေးနေပါသည်' : 'လေ့ကျင့်စဉ် မှားယွင်းခဲ့သော မေးခွန်းများအား သီးသန့်ပြန်လည်လေ့ကျင့်ရန်'}
              </p>
            </div>
          </div>

          {!isQuizMode && questionList.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={startQuiz}
                className="px-4 py-2.5 rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-xs sm:text-sm font-black text-blue-600 dark:text-blue-400 transition-all flex items-center gap-2"
              >
                <AcademicCapIcon className="w-4 h-4" />
                <span>Quiz စစ်ဆေးဖြေဆိုရန်</span>
              </button>

              <button
                onClick={() => {
                  if (confirm('အမှားမှတ်စုထဲမှ မေးခွန်းအားလုံးကို ရှင်းလင်းဖယ်ရှားလိုပါသလား?')) {
                    clearAllWeakQuestions();
                  }
                }}
                className="px-3 py-2.5 rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-xs font-bold text-slate-400 hover:text-red-500 transition-all"
                title="Clear All"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* --- QUIZ SUB-MODE --- */}
        {isQuizMode ? (
          quizFinished ? (
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-8 text-center space-y-6 animate-in fade-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 shadow-neumorphic-inset">
                <CheckCircleSolidIcon className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">Quiz ပြီးမြောက်ပါပြီ!</h2>
              <p className="text-sm font-bold text-slate-500">
                ရမှတ်: <span className="text-2xl font-black text-blue-600 font-mono">{quizScore}</span> / {questionList.length}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={startQuiz}
                  className="px-6 py-3 rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset font-black text-sm text-blue-600"
                >
                  ထပ်မံဖြေဆိုရန်
                </button>
                <button
                  onClick={() => setIsQuizMode(false)}
                  className="px-6 py-3 rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset font-black text-sm text-slate-600"
                >
                  အမှားမှတ်စုသို့ ပြန်သွားရန်
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-8 space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-xs font-black text-slate-400">
                <span>မေးခွန်း {quizIndex + 1} of {questionList.length}</span>
                <span className="text-blue-600 font-mono">Score: {quizScore}</span>
              </div>

              {/* Question */}
              {(() => {
                const q = questionList[quizIndex];
                return (
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 leading-relaxed">
                      {q.questionMY}
                    </p>
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset text-sm font-bold text-slate-700 dark:text-slate-200">
                      <JapaneseText text={q.questionJP} />
                    </div>

                    {/* Options */}
                    <div className="space-y-3 pt-2">
                      {q.options.map(opt => {
                        const isSelected = quizSelectedOption === opt.id;
                        const isCorrect = quizSelectedOption !== null && opt.id === q.correctOptionId;
                        const isWrong = isSelected && !isCorrect;

                        let style = 'shadow-neumorphic-outset';
                        if (isSelected) style = 'shadow-neumorphic-inset';
                        if (isCorrect) style = 'shadow-neumorphic-inset border-2 border-emerald-500 text-emerald-600';
                        if (isWrong) style = 'shadow-neumorphic-inset border-2 border-red-500 text-red-600';

                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleQuizOptionSelect(opt.id)}
                            className={`p-4 rounded-2xl transition-all cursor-pointer flex items-start justify-between gap-3 ${style}`}
                          >
                            <div className="flex-1">
                              <p className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1">{opt.textMY}</p>
                              <div className="text-xs font-bold text-slate-500">
                                <JapaneseText text={opt.textJP} />
                              </div>
                            </div>
                            {isCorrect && <CheckCircleSolidIcon className="w-6 h-6 text-emerald-500 shrink-0" />}
                            {isWrong && <XCircleSolidIcon className="w-6 h-6 text-red-500 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation if answered */}
                    {quizSelectedOption !== null && (
                      <div className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-blue-400/20 text-xs font-bold text-slate-600 space-y-2 mt-4 animate-in fade-in">
                        <div className="text-blue-600 font-black flex items-center gap-1">
                          <LightBulbIcon className="w-4 h-4" />
                          <span>ရှင်းလင်းချက်:</span>
                        </div>
                        <p className="leading-relaxed">
                          {typeof q.explanation === 'string' ? q.explanation : q.explanation?.reasonMY || 'အဖြေမှန်ကို သေချာလေ့လာပါ။'}
                        </p>
                        {typeof q.explanation !== 'string' && q.explanation?.memoryTipMY && (
                          <p className="text-amber-600 font-medium">
                            💡 မှတ်ဉာဏ်အထောက်အကူပြု: {q.explanation.memoryTipMY}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Next Button */}
                    {quizSelectedOption !== null && (
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={handleQuizNext}
                          className="px-6 py-3 rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset font-black text-sm text-blue-600 dark:text-blue-400 transition-all"
                        >
                          {quizIndex < questionList.length - 1 ? 'နောက်တစ်ပုဒ်သို့ →' : 'ရလဒ်ကြည့်ရှုရန်'}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )
        ) : (
          /* --- LIST / NOTEBOOK MODE --- */
          <>
            {questionList.length === 0 ? (
              <div className="text-center py-20 px-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 shadow-neumorphic-inset">
                  <CheckCircleSolidIcon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
                  အမှားမှတ်စုတွင် မေးခွန်းများ မရှိသေးပါ
                </h3>
                <p className="text-sm font-bold text-slate-500 max-w-md mx-auto leading-relaxed">
                  Quiz သို့မဟုတ် Chapter Practice များ ဖြေဆိုရာတွင် မှားယွင်းသွားသော မေးခွန်းများကို ဤနေရာတွင် အလိုအလျောက် စုစည်းပေးထားမည် ဖြစ်ပါသည်။
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-slate-400">
                    <SearchIcon className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="အမှားမှတ်စုထဲမှ မေးခွန်းများ ရှာဖွေရန်..."
                    className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 text-sm font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Questions Cards */}
                <div className="space-y-6">
                  {filteredQuestions.map((q) => {
                    const qId = String(q.id);
                    const weakItem = weakQuestions[qId];
                    const isCelebrating = celebrateId === qId;

                    return (
                      <div
                        key={qId}
                        className={`bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-4 transition-all duration-300 ${
                          isCelebrating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}
                      >
                        {/* Question Top: ID, Category & Audio */}
                        <div className="flex items-center justify-between gap-2 border-b border-slate-300/30 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-xl text-xs font-black uppercase bg-red-100 text-red-600 shadow-neumorphic-inset">
                              Question {q.id}
                            </span>
                            {weakItem?.wrongCount && weakItem.wrongCount > 1 && (
                              <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-amber-100 text-amber-700">
                                {weakItem.wrongCount} ကြိမ်မှားဖူးသည်
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handlePlayAudio(qId, q.questionJP)}
                              className={`p-2 rounded-xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-slate-500 ${
                                playingAudioId === qId ? 'text-blue-600 shadow-neumorphic-inset' : ''
                              }`}
                              title="Listen Pronunciation"
                            >
                              <SpeakerIcon className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleMasterQuestion(qId)}
                              className="px-3 py-1.5 rounded-xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-xs font-black text-emerald-600 flex items-center gap-1.5"
                              title="Mark as Mastered (Remove from mistakes)"
                            >
                              <CheckCircleSolidIcon className="w-4 h-4" />
                              <span className="hidden sm:inline">ကျေညက်ပါပြီ (ဖယ်ရှားရန်)</span>
                            </button>
                          </div>
                        </div>

                        {/* Question Text */}
                        <div>
                          <p className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 leading-relaxed mb-2">
                            {q.questionMY}
                          </p>
                          <div className="p-3.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                            <JapaneseText text={q.questionJP} />
                          </div>
                        </div>

                        {/* Options List */}
                        <div className="space-y-2">
                          {q.options.map(opt => {
                            const isCorrect = opt.id === q.correctOptionId;
                            const isUserSelected = weakItem?.userSelectedOptionId === opt.id;

                            let optStyle = 'bg-neumorphic-bg shadow-neumorphic-outset text-slate-600';
                            if (isCorrect) {
                              optStyle = 'bg-emerald-50/20 shadow-neumorphic-inset text-emerald-700 dark:text-emerald-400 border border-emerald-500/30';
                            } else if (isUserSelected) {
                              optStyle = 'bg-red-50/20 shadow-neumorphic-inset text-red-600 border border-red-500/30';
                            }

                            return (
                              <div
                                key={opt.id}
                                className={`p-3 rounded-xl flex items-start justify-between gap-2 text-xs font-bold ${optStyle}`}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono font-black">{opt.id}.</span>
                                    <span>{opt.textMY}</span>
                                  </div>
                                  <div className="text-[11px] font-medium text-slate-500 mt-0.5 ml-4">
                                    <JapaneseText text={opt.textJP} />
                                  </div>
                                </div>
                                {isCorrect && (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-700 shrink-0">
                                    အဖြေမှန်
                                  </span>
                                )}
                                {isUserSelected && !isCorrect && (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-red-100 text-red-600 shrink-0">
                                    မှားရွေးခဲ့သော အဖြေ
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation Box */}
                        <div className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-slate-300/30 space-y-2 text-xs font-bold text-slate-600">
                          <div className="flex items-center gap-1.5 text-blue-600 font-black">
                            <LightBulbIcon className="w-4 h-4" />
                            <span>ရှင်းလင်းချက်:</span>
                          </div>
                          <p className="leading-relaxed font-normal">
                            {typeof q.explanation === 'string' ? q.explanation : q.explanation?.reasonMY || 'ရှင်းလင်းချက် မရှိသေးပါ။'}
                          </p>
                          {typeof q.explanation !== 'string' && q.explanation?.memoryTipMY && (
                            <p className="text-amber-600 font-medium">
                              💡 မှတ်ဉာဏ်အထောက်အကူပြု: {q.explanation.memoryTipMY}
                            </p>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default WeakPointNotebook;
