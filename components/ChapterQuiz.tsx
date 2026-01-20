
import React, { useState, useEffect, useMemo } from 'react';
import { StudyCardData } from '../types';
import { CheckCircleSolidIcon, XCircleSolidIcon, LoadingSpinnerIcon, RefreshIcon, ChevronLeftIcon, AcademicCapIcon } from './Icons';
import JapaneseText from './JapaneseText';
import { useLanguage } from '../contexts/LanguageContext';

interface ChapterQuizProps {
  questions: StudyCardData[];
  chapterTitle: string;
  onExit: () => void;
  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;
}

const ChapterQuiz: React.FC<ChapterQuizProps> = ({ questions, chapterTitle, onExit, onKanjiClick }) => {
  const { language } = useLanguage();
  const [shuffledQuestions, setShuffledQuestions] = useState<StudyCardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Initialize quiz
  useEffect(() => {
    const randomized = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffledQuestions(randomized);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleOptionSelect = (optionId: number) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
    setIsAnswered(true);
    if (optionId === currentQuestion.correctOptionId) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    const randomized = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffledQuestions(randomized);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (shuffledQuestions.length === 0) return (
    <div className="flex justify-center p-20">
      <LoadingSpinnerIcon className="w-10 h-10 text-blue-600" />
    </div>
  );

  if (showResults) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-8 md:p-12 text-center animate-in zoom-in duration-300">
        <div className="w-24 h-24 bg-neumorphic-bg shadow-neumorphic-inset rounded-full flex items-center justify-center mx-auto mb-6">
          <AcademicCapIcon className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-black text-slate-700 mb-2">Quiz Complete!</h2>
        <p className="text-slate-500 mb-8">{chapterTitle}</p>
        
        <div className="mb-10">
          <p className="text-6xl font-black text-blue-600 mb-1">{score} / {shuffledQuestions.length}</p>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Your Score: {percentage}%</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleRestart}
            className="flex-1 px-8 py-4 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-2xl font-bold text-blue-600 flex items-center justify-center gap-2"
          >
            <RefreshIcon className="w-5 h-5" /> Try Again
          </button>
          <button 
            onClick={onExit}
            className="flex-1 px-8 py-4 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-2xl font-bold text-slate-600 flex items-center justify-center gap-2"
          >
            <ChevronLeftIcon className="w-5 h-5" /> Back to Study
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset overflow-hidden relative">
      <div className="absolute top-0 left-0 h-1.5 bg-slate-200 w-full">
        <div 
          className="h-full bg-blue-600 transition-all duration-500" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      <div className="p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-tighter">Quiz</span>
            <span className="text-sm font-bold text-slate-400">{chapterTitle}</span>
          </div>
          <span className="text-sm font-black text-slate-400">{currentIndex + 1} / {shuffledQuestions.length}</span>
        </div>

        <div className="mb-10 min-h-[120px] flex flex-col justify-center text-center sm:text-left">
           <div className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
              {language === 'my' ? currentQuestion.questionMY : (
                <div className="font-mono">
                  <JapaneseText text={currentQuestion.questionJP} onKanjiClick={onKanjiClick} />
                </div>
              )}
           </div>
           {language === 'jp' && (
              <p className="mt-4 text-slate-500 font-medium">{currentQuestion.questionMY}</p>
           )}
        </div>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = isAnswered && option.id === currentQuestion.correctOptionId;
            const isWrong = isSelected && isAnswered && !isCorrect;

            let btnClass = "bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset text-slate-600";
            if (isCorrect) btnClass = "bg-green-500 text-white shadow-none ring-4 ring-green-100";
            else if (isWrong) btnClass = "bg-red-500 text-white shadow-none ring-4 ring-red-100";
            else if (isAnswered && option.id !== currentQuestion.correctOptionId) btnClass = "opacity-40 grayscale pointer-events-none";

            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={isAnswered}
                className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group ${btnClass}`}
              >
                <span className="font-bold text-lg">
                   {language === 'my' ? option.textMY : (
                     <div className="font-mono">
                        <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                     </div>
                   )}
                </span>
                {isCorrect && <CheckCircleSolidIcon className="w-6 h-6" />}
                {isWrong && <XCircleSolidIcon className="w-6 h-6" />}
              </button>
            );
          })}
        </div>

        <div className={`mt-10 transition-all duration-500 ${isAnswered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button 
            onClick={handleNext}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {currentIndex < shuffledQuestions.length - 1 ? 'Next Question' : 'See Final Results'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterQuiz;
