
import React, { useState } from 'react';
import type { VocabularyWord } from '../types';
import { SpeakerIcon, CheckCircleIcon, SparkleIcon, LoadingSpinnerIcon } from './Icons';
import ReportModal from '../../components/ReportModal';
import JapaneseText from '../../components/JapaneseText';
import { GoogleGenAI } from "@google/genai";
import { supabase } from '../../lib/supabase';

// Helper function to safely get the API key in both AI Studio and Vercel/GitHub Pages environments
const getApiKey = () => {
  // 1. Try Vite environment variables (for Vercel/GitHub Pages)
  if (import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
    return import.meta.env.VITE_GEMINI_API_KEY;
  }
  // 2. Try AI Studio injected environment variables
  if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
    return process.env.GEMINI_API_KEY;
  }
  return null;
};

interface FlashcardProps {
  word: VocabularyWord | undefined;
  isFlipped: boolean;
  onFlip: () => void;
  onPlayAudio: () => void;
  isAudioLoading: boolean;
  isMarkedAsLearned: boolean;
  onToggleMarkedAsLearned: () => void;
  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, isFlipped, onFlip, onPlayAudio, isAudioLoading, isMarkedAsLearned, onToggleMarkedAsLearned, onKanjiClick }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Reset AI state when word changes
  React.useEffect(() => {
    setAiExplanation(null);
    setIsAiLoading(false);
    setAiError(null);
  }, [word]);

  const handleExplain = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!word) return;
    
    setIsAiLoading(true);
    setAiError(null);
    setAiExplanation(null);

    // Prompt optimized for engineering students
    const prompt = `Explain the Japanese word "${word.kanji}" (${word.reading}) which means "${word.english}" / "${word.burmese}". 
    Explain its usage, nuance, and maybe break down the Kanji characters if applicable. 
    Provide the explanation in simple Burmese language for a construction/engineering student. 
    Use bullet points and bold text for key terms.`;

    try {
      const apiKey = getApiKey();
      let responseText = '';

      if (!apiKey) {
        throw new Error("VITE_GEMINI_API_KEY is missing in Vercel Environment Variables.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      responseText = response.text || '';

      if (!responseText) throw new Error("No response from AI");
      
      // Basic formatting: bold and newlines
      const formatted = responseText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
        
      setAiExplanation(formatted);
    } catch (err: any) {
      setAiError(`AI ရှင်းလင်းချက် ရယူ၍မရပါ။ (${err.message || 'Unknown Error'})`);
      console.error("AI Error:", err);
    } finally {
      setIsAiLoading(false);
    }
  };

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
    <div className="w-full max-w-2xl h-[32rem] perspective" onClick={onFlip}>
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
          <div className="text-6xl md:text-8xl font-bold tracking-wider text-slate-700 text-center">
            <JapaneseText text={word.kanji} onKanjiClick={onKanjiClick} />
          </div>
           <span className="absolute bottom-4 right-4 text-slate-400 text-sm">Click to flip</span>
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neumorphic-bg shadow-neumorphic-outset rounded-2xl flex flex-col p-6 cursor-pointer overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-2">
             <LearnedButton />
             <PronunciationButton />
          </div>
          
          <div className="mt-12 space-y-4 flex-grow">
            <div>
                <p className="text-sm text-blue-600">Reading</p>
                <p className="text-2xl font-semibold text-slate-700">{word.reading}</p>
            </div>
            <div className="w-full h-px bg-neumorphic-shadow-dark/20"></div>
            <div>
                <p className="text-sm text-blue-600">English Meaning</p>
                <p className="text-xl text-slate-600">{word.english}</p>
            </div>
            <div className="w-full h-px bg-neumorphic-shadow-dark/20"></div>
            <div>
                <p className="text-sm text-blue-600">Burmese Meaning</p>
                <p className="text-xl text-slate-600">{word.burmese}</p>
            </div>

            {/* AI Explanation Section */}
            <div className="pt-4">
                {!aiExplanation && !isAiLoading && (
                    <button 
                        onClick={handleExplain}
                        className="flex items-center justify-center w-full py-3 text-xs font-black uppercase tracking-widest text-blue-600 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
                    >
                        <SparkleIcon className="w-4 h-4 mr-2" /> AI Explain
                    </button>
                )}
                
                {isAiLoading && (
                     <div className="flex items-center justify-center py-4 text-blue-500">
                        <LoadingSpinnerIcon className="w-6 h-6 animate-spin mr-2" />
                        <span className="text-xs font-bold uppercase tracking-widest">Thinking...</span>
                     </div>
                )}

                {aiExplanation && (
                    <div className="mt-2 p-4 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset border-l-4 border-blue-500 animate-in zoom-in duration-300 text-left cursor-auto" onClick={e => e.stopPropagation()}>
                        <h4 className="font-black text-blue-600 flex items-center uppercase text-[0.65rem] tracking-widest mb-2"><SparkleIcon className="w-3 h-3 mr-1" /> AI Explanation</h4>
                        <div className="text-sm font-bold text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: aiExplanation }}></div>
                    </div>
                )}
                
                {aiError && (
                    <p className="text-xs text-red-500 font-bold text-center mt-2">{aiError}</p>
                )}
            </div>
          </div>
          
          <ReportButton />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
