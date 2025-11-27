import React from 'react';
import { BookOpenIcon, PencilSquareIcon, ListBulletIcon, RectangleStackIcon } from './Icons';

type ViewMode = 'dashboard' | 'flashcard' | 'list' | 'study' | 'quiz';

interface DashboardProps {
  totalWords: number;
  learnedWordsCount: number;
  studyProgress: Record<number, number[]>;
  totalDays: number;
  onNavigate: (view: ViewMode) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ totalWords, learnedWordsCount, studyProgress, totalDays, onNavigate }) => {
  // FIX: Add Array.isArray check to ensure `day` is an array before accessing .length
  const totalStudiedDays = Object.values(studyProgress).filter(day => Array.isArray(day) && day.length > 0).length;
  const progressPercentage = totalDays > 0 ? Math.round((totalStudiedDays / totalDays) * 100) : 0;

  const NavCard = ({ icon, title, description, onClick }) => (
    <button
      onClick={onClick}
      className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset p-6 rounded-xl text-left w-full h-full flex flex-col transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="flex items-center gap-4">
        <div className="bg-neumorphic-bg shadow-neumorphic-inset p-3 rounded-full">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-700">{title}</h3>
      </div>
      <p className="mt-3 text-slate-500 flex-grow">{description}</p>
    </button>
  );

  return (
    <div className="w-full max-w-4xl p-4 sm:p-6 bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl">
      <h2 className="text-3xl font-bold text-slate-700 text-center mb-8">Dashboard</h2>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-neumorphic-bg shadow-neumorphic-outset p-4 rounded-lg text-center">
          <p className="text-sm text-slate-500">Total Words</p>
          <p className="text-4xl font-bold text-slate-700">{totalWords}</p>
        </div>
        <div className="bg-neumorphic-bg shadow-neumorphic-outset p-4 rounded-lg text-center">
          <p className="text-sm text-slate-500">Words Learned</p>
          <p className="text-4xl font-bold text-blue-600">{learnedWordsCount}</p>
        </div>
        <div className="bg-neumorphic-bg shadow-neumorphic-outset p-4 rounded-lg text-center">
          <p className="text-sm text-slate-500">Study Plan Progress</p>
          <p className="text-4xl font-bold text-green-600">{progressPercentage}%</p>
        </div>
      </div>
      
      {/* Navigation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NavCard
            icon={<BookOpenIcon className="h-8 w-8 text-blue-600" />}
            title="Go to Study Plan"
            description="Follow the 40-day plan to learn all the vocabulary step-by-step."
            onClick={() => onNavigate('study')}
        />
        <NavCard
            icon={<PencilSquareIcon className="h-8 w-8 text-green-600" />}
            title="Take a Quiz"
            description="Test your knowledge on the words you've already learned."
            onClick={() => onNavigate('quiz')}
        />
        <NavCard
            icon={<ListBulletIcon className="h-8 w-8 text-purple-600" />}
            title="Vocabulary List"
            description="Browse and search the entire word list at your own pace."
            onClick={() => onNavigate('list')}
        />
        <NavCard
            icon={<RectangleStackIcon className="h-8 w-8 text-orange-600" />}
            title="Review All Flashcards"
            description="Freely flip through all available words in flashcard mode."
            onClick={() => onNavigate('flashcard')}
        />
      </div>
    </div>
  );
};

export default Dashboard;