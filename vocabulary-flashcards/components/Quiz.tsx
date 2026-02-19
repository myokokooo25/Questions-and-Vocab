
import React, { useState, useEffect, useCallback } from 'react';
import type { VocabularyWord } from '../types';
import ReportModal from '../../components/ReportModal';
import { FlagIcon } from './Icons';

type QuizQuestion = {
  questionWord: VocabularyWord;
  options: VocabularyWord[];
  questionType: 'kanji-to-meaning' | 'meaning-to-kanji';
};

interface QuizProps {
  learnedWords: VocabularyWord[];
  onQuizComplete: () => void;
  vocabulary: VocabularyWord[];
}

const Quiz: React.FC<QuizProps> = ({ learnedWords, onQuizComplete, vocabulary }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [quizKey, setQuizKey] = useState(0);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const generateQuiz = useCallback(() => {
    if (learnedWords.length < 4) return;

    const shuffledLearned = [...learnedWords].sort(() => 0.5 - Math.random());
    const quizWords = shuffledLearned.slice(0, 10);

    const generatedQuestions = quizWords.map(correctWord => {
      let distractors: VocabularyWord[] = [];
      const tempVocab = [...vocabulary].filter(v => v.id !== correctWord.id);
      
      while (distractors.length < 3 && tempVocab.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempVocab.length);
        const randomWord = tempVocab.splice(randomIndex, 1)[0];
        distractors.push(randomWord);
      }

      const options = [...distractors, correctWord].sort(() => 0.5 - Math.random());
      const questionType: 'kanji-to-meaning' | 'meaning-to-kanji' = 
        Math.random() > 0.5 ? 'kanji-to-meaning' : 'meaning-to-kanji';
      
      return { questionWord: correctWord, options, questionType };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setSelectedAnswerId(null);
    setScore(0);
    setIsQuizFinished(false);
  }, [learnedWords, vocabulary]);

  useEffect(() => {
    generateQuiz();
  }, [generateQuiz, quizKey]);

  const handleAnswerSelect = (optionId: number) => {
    if (selectedAnswerId !== null) return;
    setSelectedAnswerId(optionId);
    if (optionId === questions[currentIndex].questionWord.id) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswerId(null);
    } else {
      setIsQuizFinished(true);
    }
  };
  
  const handleRetry = () => {
    setQuizKey(prev => prev + 1);
  };

  if (learnedWords.length < 4) {
    return (
      <div className="w-full max-w-2xl text-center bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl p-12">
        <div className="mb-6 inline-flex p-4 rounded-full bg-neumorphic-bg shadow-neumorphic-outset text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Not Enough Words Learned</h2>
        <p className="text-slate-500 max-w-md mx-auto">You need to study at least 4 words from your study plan before you can challenge yourself with a quiz.</p>
        <button onClick={onQuizComplete} className="mt-8 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-3 px-8 rounded-xl text-blue-600 transition-all">
          Go to Study Plan
        </button>
      </div>
    );
  }

  if (isQuizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="w-full max-w-2xl text-center bg-neumorphic-bg shadow-neumorphic-outset rounded-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
        <h2 className="text-3xl font-bold text-slate-700 mb-2">Quiz Finished!</h2>
        <p className="text-slate-500 mb-8">Here is how you performed:</p>
        
        <div className="relative inline-flex items-center justify-center mb-8">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 192 192">
                <circle
                    className="text-slate-200"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="96"
                    cy="96"
                />
                <circle
                    className={`${percentage >= 80 ? 'text-green-500' : percentage >= 50 ? 'text-blue-500' : 'text-red-500'} transition-all duration-1000 ease-out`}
                    strokeWidth="12"
                    strokeDasharray={502.6}
                    strokeDashoffset={502.6 - (502.6 * percentage) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="96"
                    cy="96"
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-black text-slate-700">{score}/{questions.length}</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{percentage}%</span>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <button onClick={handleRetry} className="flex-1 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-4 px-6 rounded-2xl text-blue-600 hover:text-blue-700 transition-all">
            Try Again
          </button>
           <button onClick={onQuizComplete} className="flex-1 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-4 px-6 rounded-2xl text-slate-600 hover:text-slate-700 transition-all">
            Finish
          </button>
        </div>
      </div>
    );
  }
  
  if (questions.length === 0) return (
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium">Preparing your quiz...</p>
    </div>
  );

  const currentQuestion = questions[currentIndex];
  const { questionWord, options, questionType } = currentQuestion;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl bg-neumorphic-bg shadow-neumorphic-outset rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <ReportModal 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
        contextInfo={`Quiz Word: ${questionWord.kanji} (${questionWord.english})`} 
      />
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="px-4 py-1 rounded-full bg-neumorphic-bg shadow-neumorphic-inset text-xs font-bold text-blue-600 uppercase tracking-wider">
            Quiz Mode
        </span>
        <div className="flex items-center gap-4">
            <button 
                onClick={() => setIsReportOpen(true)}
                className="p-1.5 rounded-full text-slate-400 hover:text-red-500 transition-colors"
                title="Report issue with this word"
            >
                <FlagIcon className="w-5 h-5" />
            </button>
            <span className="text-sm font-bold text-slate-400">
                {currentIndex + 1} of {questions.length}
            </span>
        </div>
      </div>
      
      {/* Question Area */}
      <div className="text-center mb-10 min-h-[160px] flex flex-col justify-center">
        <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-widest">
            {questionType === 'kanji-to-meaning' ? 'Translate to Meaning' : 'Select correct Kanji'}
        </p>
        <h3 className={`font-bold text-slate-700 leading-tight ${questionType === 'kanji-to-meaning' ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
            {questionType === 'kanji-to-meaning' ? questionWord.kanji : `${questionWord.english}`}
        </h3>
         {questionType === 'meaning-to-kanji' && (
             <p className="text-xl md:text-2xl mt-4 text-slate-500 font-medium italic">
                {questionWord.burmese}
             </p>
         )}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, idx) => {
          const isSelected = selectedAnswerId === option.id;
          const isCorrect = selectedAnswerId !== null && option.id === questionWord.id;
          const isWrong = isSelected && !isCorrect;
          
          let statusClass = "bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset text-slate-600 hover:text-blue-600";
          if (selectedAnswerId !== null) {
              if (isCorrect) statusClass = "bg-green-500 text-white shadow-none ring-4 ring-green-200";
              else if (isWrong) statusClass = "bg-red-500 text-white shadow-none ring-4 ring-red-200";
              else if (option.id === questionWord.id) statusClass = "bg-green-100 text-green-700 shadow-none border-2 border-green-500 border-dashed";
              else statusClass = "bg-neumorphic-bg shadow-none opacity-40 text-slate-400 cursor-default";
          }

          return (
            <button
              key={`${option.id}-${idx}`}
              onClick={() => handleAnswerSelect(option.id)}
              disabled={selectedAnswerId !== null}
              className={`w-full p-5 rounded-2xl text-left font-bold text-lg transition-all duration-300 transform active:scale-95 ${statusClass} flex items-center justify-between`}
            >
              <span>
                {questionType === 'kanji-to-meaning' 
                    ? <span className="flex flex-col"><span className="text-xs font-normal opacity-70 mb-0.5">Meaning:</span>{option.english} / {option.burmese}</span> 
                    : <span className="flex flex-col"><span className="text-xs font-normal opacity-70 mb-0.5">Kanji:</span>{option.kanji} <span className="text-xs font-medium opacity-60">({option.reading})</span></span>
                }
              </span>
              {selectedAnswerId !== null && option.id === questionWord.id && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06l-3.103 3.102-1.537-1.536a.75.75 0 0 0-1.06 1.06l2.067 2.066a.75.75 0 0 0 1.06 0l3.633-3.632Z" clipRule="evenodd" />
                  </svg>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer / Next Button */}
      <div className={`mt-10 transition-all duration-500 ${selectedAnswerId !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <button 
          onClick={handleNext} 
          className="w-full bg-blue-600 text-white font-black py-4 px-8 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
