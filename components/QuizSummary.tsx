import React from 'react';
import { PencilIcon } from './Icons';

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onExit: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ score, totalQuestions, onRetry, onExit }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="text-center py-16 px-6 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset">
        <PencilIcon className="w-12 h-12 mx-auto text-slate-500" />
        <h3 className="mt-4 text-2xl font-bold text-slate-700">Quiz Complete!</h3>
        <p className="mt-2 text-lg text-slate-600">You've finished the quiz.</p>
        
        <div className="my-8">
            <p className="text-5xl font-bold text-slate-700">
                {score} / {totalQuestions}
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-600">
                {percentage}%
            </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
            <button 
                onClick={onRetry}
                className="px-6 py-2 text-sm font-semibold text-slate-700 bg-neumorphic-bg rounded-xl shadow-neumorphic-sm hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all"
            >
                Retry Quiz
            </button>
            <button 
                onClick={onExit}
                className="px-6 py-2 text-sm font-semibold text-slate-500 bg-neumorphic-bg rounded-xl shadow-neumorphic-sm hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all"
            >
                Exit to Dashboard
            </button>
        </div>
    </div>
  );
};

export default QuizSummary;