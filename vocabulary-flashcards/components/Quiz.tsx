
import React, { useState, useMemo } from 'react';
import type { VocabularyWord } from '../types';

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
  const [quizKey, setQuizKey] = useState(0); // Used to force re-generation of quiz

  // Generate questions when the component is keyed to update
  useMemo(() => {
    if (learnedWords.length < 4) {
        setQuestions([]);
        return;
    };

    const shuffledLearned = [...learnedWords].sort(() => 0.5 - Math.random());
    const quizWords = shuffledLearned.slice(0, 10); // 10 questions per quiz

    const generatedQuestions = quizWords.map(correctWord => {
      // Get 3 distractors
      let distractors: VocabularyWord[] = [];
      const tempVocab = [...vocabulary].filter(v => v.id !== correctWord.id);
      while (distractors.length < 3 && tempVocab.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempVocab.length);
        const randomWord = tempVocab.splice(randomIndex, 1)[0];
        if (!distractors.some(d => d.id === randomWord.id)) {
          distractors.push(randomWord);
        }
      }

      const options = [...distractors, correctWord].sort(() => 0.5 - Math.random());
      // FIX: Explicitly type `questionType` to match the `QuizQuestion` type definition.
      const questionType: 'kanji-to-meaning' | 'meaning-to-kanji' = Math.random() > 0.5 ? 'kanji-to-meaning' : 'meaning-to-kanji';
      
      return { questionWord: correctWord, options, questionType };
    });
    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setSelectedAnswerId(null);
    setScore(0);
    setIsQuizFinished(false);
  }, [learnedWords, vocabulary, quizKey]);

  const handleAnswerSelect = (optionId: number) => {
    if (selectedAnswerId !== null) return; // Already answered

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
  
  const handleTryAgain = () => {
    setQuizKey(prev => prev + 1); // Change key to trigger useMemo and reset the quiz
  };

  if (learnedWords.length < 4) {
    return (
      <div className="w-full max-w-2xl text-center bg-neumorphic-bg shadow-neumorphic-inset rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Quiz Mode</h2>
        <p className="text-slate-500">You need to study at least 4 words before you can start a quiz.</p>
        <p className="mt-2 text-slate-500">Go to the "Study Plan" to learn some new words!</p>
        <button onClick={onQuizComplete} className="mt-6 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-6 rounded-lg">
          Back to Study Plan
        </button>
      </div>
    );
  }

  if (isQuizFinished) {
    return (
      <div className="w-full max-w-2xl text-center bg-neumorphic-bg shadow-neumorphic-outset rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Quiz Complete!</h2>
        <p className="text-4xl font-bold my-4 text-blue-600">
          Your Score: {score} / {questions.length}
        </p>
        <p className="text-xl text-slate-600">
          That's {questions.length > 0 ? Math.round((score / questions.length) * 100) : 0}% correct!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={handleTryAgain} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-6 rounded-lg">
            Try Again
          </button>
           <button onClick={onQuizComplete} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-6 rounded-lg">
            Finish
          </button>
        </div>
      </div>
    );
  }
  
  if (questions.length === 0) return <p>Loading quiz...</p>;

  const currentQuestion = questions[currentIndex];
  const { questionWord, options, questionType } = currentQuestion;

  const getButtonClass = (optionId: number) => {
    let baseClass = "w-full p-4 rounded-lg text-center transition-all duration-200";
    if (selectedAnswerId === null) {
      return `${baseClass} bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset`;
    }
    if (optionId === questionWord.id) {
      return `${baseClass} bg-green-500 text-white shadow-none`; // Correct answer
    }
    if (optionId === selectedAnswerId) {
      return `${baseClass} bg-red-500 text-white shadow-none`; // Incorrectly selected answer
    }
    return `${baseClass} bg-neumorphic-bg shadow-neumorphic-outset opacity-50`; // Other options
  };

  return (
    <div className="w-full max-w-2xl bg-neumorphic-bg shadow-neumorphic-outset rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-700">Quiz</h2>
        <p className="text-slate-500">{currentIndex + 1} / {questions.length}</p>
      </div>
      <div className="w-full h-px bg-neumorphic-shadow-dark/20 mb-6"></div>
      
      {/* Question */}
      <div className="text-center my-8 min-h-[120px] flex flex-col justify-center">
        <p className="text-lg text-slate-500 mb-2">
            {questionType === 'kanji-to-meaning' ? 'What is the meaning of this word?' : 'Which word means...'}
        </p>
        <p className="text-5xl font-bold text-slate-700">
            {questionType === 'kanji-to-meaning' ? questionWord.kanji : `${questionWord.english}`}
        </p>
         {questionType === 'meaning-to-kanji' && <p className="text-2xl mt-1 text-slate-600">{questionWord.burmese}</p>}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => handleAnswerSelect(option.id)}
            disabled={selectedAnswerId !== null}
            className={getButtonClass(option.id)}
          >
            {questionType === 'kanji-to-meaning' ? `${option.english} / ${option.burmese}` : option.kanji}
          </button>
        ))}
      </div>

      {selectedAnswerId !== null && (
        <div className="text-center mt-6">
          <button onClick={handleNext} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-8 rounded-lg text-blue-600">
            {currentIndex < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;