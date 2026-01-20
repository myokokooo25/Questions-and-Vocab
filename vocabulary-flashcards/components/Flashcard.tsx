
import React, { useState } from 'react';
import type { VocabularyWord } from '../types';
import { SpeakerIcon, CheckCircleIcon } from './Icons';
import ReportModal from '../../components/ReportModal';

interface FlashcardProps {
  word: VocabularyWord | undefined;
  isFlipped: boolean;
  onFlip: () => void;
  onPlayAudio: () => void;
  isAudioLoading: boolean;
  isMarkedAsLearned: boolean;
  onToggleMarkedAsLearned: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, isFlipped, onFlip, onPlayAudio, isAudioLoading, isMarkedAsLearned, onToggleMarkedAsLearned }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);

  if (!word) {
    return (
      <div className="w-full max-w-2xl h-80 flex items-center justify-center bg-neumorphic-bg shadow-neumorphic-inset rounded-xl p-6">
        <p className="text-xl text-slate-500">No words match your search.</p>
      </div>
    );
  }

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPlayAudio();
  };

  const handleToggleLearnedClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMarkedAsLearned();
  };

  const handleReportClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsReportOpen(true);
  };

  const PronunciationButton = () => (
     <button 
        onClick={handlePlayClick}
        disabled={isAudioLoading}
        className="absolute top-4 right-4 p-3 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full focus:outline-none z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Play pronunciation"
    >
        <SpeakerIcon isLoading={isAudioLoading} />
    </button>
  );

  const LearnedButton = () => (
    <button
        onClick={handleToggleLearnedClick}
        className={`absolute top-4 left-4 p-3 rounded-full focus:outline-none z-10 transition-all ${
            isMarkedAsLearned 
            ? 'bg-green-500 text-white shadow-neumorphic-outset active:shadow-neumorphic-inset' 
            : 'bg-neumorphic-bg text-slate-400 shadow-neumorphic-outset active:shadow-neumorphic-inset hover:text-green-500'
        }`}
        aria-label={isMarkedAsLearned ? "Mark as not learned" : "Mark as learned"}
    >
        <CheckCircleIcon solid={isMarkedAsLearned} className="w-6 h-6" />
    </button>
  );

  const ReportButton = () => (
    <button
        onClick={handleReportClick}
        className="absolute bottom-4 left-4 p-2.5 rounded-full bg-neumorphic-bg text-slate-400 shadow-neumorphic-outset active:shadow-neumorphic-inset hover:text-red-500 transition-all z-10"
        aria-label="Report an error"
        title="Report an error"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1 0-5.715l-3.114.732a9 9 0 0 1-6.086-.71l-.108-.054a9 9 0 0 0-6.208-.682L3 9.5M3 15V9.5" />
        </svg>
    </button>
  );


  return (
    <div className="w-full max-w-2xl h-80 perspective" onClick={onFlip}>
      <ReportModal 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
        contextInfo={`Flashcard: ${word.kanji} (${word.english})`} 
      />
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden bg-neumorphic-bg shadow-neumorphic-outset rounded-2xl flex flex-col items-center justify-center p-6 cursor-pointer">
          <LearnedButton />
          <ReportButton />
          <PronunciationButton />
          <p className="text-6xl md:text-8xl font-bold tracking-wider text-slate-700 text-center">
            {word.kanji}
          </p>
           <span className="absolute bottom-4 right-4 text-slate-400 text-sm">Click to flip</span>
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neumorphic-bg shadow-neumorphic-outset rounded-2xl flex flex-col justify-center p-6 space-y-4 cursor-pointer">
          <LearnedButton />
          <ReportButton />
          <PronunciationButton />
          <div>
            <p className="text-sm text-blue-600">Reading</p>
            <p className="text-2xl font-semibold text-slate-700">{word.reading}</p>
          </div>
          <div className="w-full h-px bg-neumorphic-shadow-dark/20 my-2"></div>
          <div>
            <p className="text-sm text-blue-600">English Meaning</p>
            <p className="text-xl text-slate-600">{word.english}</p>
          </div>
           <div className="w-full h-px bg-neumorphic-shadow-dark/20 my-2"></div>
          <div>
            <p className="text-sm text-blue-600">Burmese Meaning</p>
            <p className="text-xl text-slate-600">{word.burmese}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
