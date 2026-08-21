import React, { useState, useEffect } from 'react';
import { Kanji } from '../types';
import { vocabularyData } from '../vocabulary-flashcards/data/vocabulary';
import { vocabularyData as questionVocabData } from '../data/vocab';
import { SpeakerIcon } from './Icons';
import { playJapaneseAudio, stopAudio } from '../lib/audio';

interface KanjiTooltipProps {
  kanjiData: Kanji | null;
  kanjiChar?: string;
  questionId?: string;
  position: { top: number; left: number };
  onClose: () => void;
}

const KanjiTooltip: React.FC<KanjiTooltipProps> = ({ kanjiData, kanjiChar, questionId, position, onClose }) => {
  const character = kanjiData?.character || kanjiChar;
  const [playingAudioKey, setPlayingAudioKey] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  if (!character) return null;

  const handlePlayAudio = (text: string, key: string) => {
    if (playingAudioKey === key) {
      stopAudio();
      setPlayingAudioKey(null);
      return;
    }

    setPlayingAudioKey(key);
    playJapaneseAudio(text, {
      onStart: () => setPlayingAudioKey(key),
      onEnd: () => setPlayingAudioKey(null),
      onError: () => setPlayingAudioKey(null)
    });
  };

  // Search for vocabulary words containing this Kanji
  let relatedWords = vocabularyData.filter(v => v.kanji.includes(character));
  let specificWords: any[] = [];

  // Search specific question first if provided
  if (questionId && questionVocabData[questionId]) {
    specificWords = questionVocabData[questionId].filter(v => v.jp && v.jp.includes(character));
  }

  // Also search across all question vocabularies (e.g. 2026 data/vocab/questions)
  const additionalVocab: any[] = [];
  Object.keys(questionVocabData).forEach(qKey => {
    const list = questionVocabData[qKey];
    if (Array.isArray(list)) {
      list.forEach(v => {
        if (v.jp && v.jp.includes(character)) {
          additionalVocab.push(v);
        }
      });
    }
  });

  // Format question vocab words to match vocabularyData structure
  const formattedSpecificWords = [...specificWords, ...additionalVocab].map(word => ({
    id: word.id || Math.floor(Math.random() * 1000000),
    kanji: word.jp,
    reading: word.reading || '',
    burmese: word.my,
    english: word.english || '',
    category: 'specific'
  }));

  // Combine and deduplicate
  const seenKanji = new Set<string>();
  const combinedWords = [];
  
  for (const word of [...formattedSpecificWords, ...relatedWords]) {
    if (word.kanji && !seenKanji.has(word.kanji)) {
      seenKanji.add(word.kanji);
      combinedWords.push(word);
    }
  }
  
  relatedWords = combinedWords.slice(0, 6); // Limit to 6

  // Calculate smart horizontal position so it stays inside screen bounds
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 360;
  const tooltipWidth = 288; // 18rem = 288px
  const adjustedLeft = Math.max(12, Math.min(position.left, viewportWidth - tooltipWidth - 16));

  return (
    <>
      {/* Overlay to catch clicks outside the tooltip */}
      <div className="fixed inset-0 z-40 bg-black/30 sm:bg-transparent backdrop-blur-[1px] sm:backdrop-blur-none transition-all" onClick={onClose} />
      
      {/* Tooltip: Bottom-sheet on mobile (<sm), absolute positioned tooltip on tablet/PC (>=sm) */}
      <div
        className="fixed inset-x-3 bottom-4 sm:bottom-auto sm:inset-x-auto sm:absolute z-50 w-auto sm:w-80 max-w-lg p-5 sm:p-4 bg-neumorphic-bg rounded-3xl sm:rounded-2xl shadow-2xl sm:shadow-neumorphic-outset ring-1 ring-slate-400/20 transition-all duration-200 text-neumorphic-text overflow-y-auto max-h-[85vh] sm:max-h-[80vh]"
        style={typeof window !== 'undefined' && window.innerWidth >= 640 ? { 
          top: position.top, 
          left: adjustedLeft, 
          transform: 'translateY(10px)',
          maxWidth: 'calc(100vw - 24px)',
        } : undefined}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing it
      >
        {/* Mobile handle indicator */}
        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3 sm:hidden" />

        {kanjiData && (
          <>
            <div className="flex items-start justify-between pb-3 border-b border-slate-400/20">
              <div className="flex items-center gap-3">
                <p className="text-5xl font-black font-mono leading-none text-slate-800 tracking-tight">{kanjiData.character}</p>
                <button
                  onClick={() => handlePlayAudio(kanjiData.onyomi || kanjiData.character, 'kanji-main')}
                  className={`p-1.5 rounded-full transition-all ${
                    playingAudioKey === 'kanji-main'
                      ? 'text-blue-600 bg-blue-100/60 shadow-neumorphic-inset animate-pulse'
                      : 'text-slate-400 hover:text-blue-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
                  }`}
                  title="Listen pronunciation"
                  aria-label="Listen pronunciation"
                >
                  <SpeakerIcon className="w-4 h-4" />
                </button>
              </div>
              <div className='text-right pr-6'>
                <p className="text-base font-bold text-slate-800">{kanjiData.meaning}</p>
                <p className="mt-0.5 text-base font-bold text-blue-600 dark:text-blue-400">{kanjiData.meaningMY}</p>
              </div>
            </div>
            
            <div className="mt-3 text-sm text-slate-600 space-y-1">
              <p><strong className="font-bold text-slate-700 w-20 inline-block">On'yomi:</strong> <span className="font-mono font-bold text-blue-600 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/50 px-1.5 py-0.5 rounded shadow-sm">{kanjiData.onyomi}</span></p>
              <p><strong className="font-bold text-slate-700 w-20 inline-block">Kun'yomi:</strong> <span className="font-mono font-bold text-slate-700">{kanjiData.kunyomi || '-'}</span></p>
            </div>
          </>
        )}

        {!kanjiData && (
            <div className="pb-3 border-b border-slate-400/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="text-5xl font-black font-mono leading-none text-slate-800">{character}</p>
                <button
                  onClick={() => handlePlayAudio(character, 'kanji-char')}
                  className={`p-1.5 rounded-full transition-all ${
                    playingAudioKey === 'kanji-char'
                      ? 'text-blue-600 bg-blue-100/60 shadow-neumorphic-inset animate-pulse'
                      : 'text-slate-400 hover:text-blue-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
                  }`}
                  title="Listen pronunciation"
                  aria-label="Listen pronunciation"
                >
                  <SpeakerIcon className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider pr-6">Kanji Info</p>
            </div>
        )}

        {relatedWords.length > 0 && (
          <div className={`mt-3 ${kanjiData ? 'pt-3 border-t border-slate-400/20' : ''}`}>
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Related Vocabulary</h4>
             <ul className="space-y-2">
                {relatedWords.map((word, idx) => {
                   const wordAudioKey = `related-${word.id}-${idx}`;
                   const isPlaying = playingAudioKey === wordAudioKey;
                   return (
                    <li key={`${word.id}-${idx}`} className="text-sm p-2 rounded-xl transition-colors bg-neumorphic-bg shadow-neumorphic-inset">
                       <div className="flex items-center justify-between gap-2">
                          <div className="flex items-baseline gap-2 flex-wrap">
                             <span className="font-black font-mono text-slate-800">{word.kanji}</span>
                             {word.reading && <span className="text-xs font-bold text-blue-600">({word.reading})</span>}
                          </div>
                          <button
                            onClick={() => handlePlayAudio(word.reading || word.kanji, wordAudioKey)}
                            className={`p-1 rounded-full shrink-0 transition-all ${
                              isPlaying 
                                ? 'text-blue-600 bg-blue-100/60 shadow-neumorphic-inset animate-pulse' 
                                : 'text-slate-400 hover:text-blue-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
                            }`}
                            title="Play pronunciation"
                            aria-label="Play pronunciation"
                          >
                            <SpeakerIcon className="w-3.5 h-3.5" />
                          </button>
                       </div>
                       <div className="text-slate-600 font-medium text-xs mt-1">
                          {word.burmese} {word.english ? ` - ${word.english}` : ''}
                       </div>
                    </li>
                   );
                })}
             </ul>
          </div>
        )}

        <button 
            onClick={onClose} 
            className="absolute top-2 right-2 p-1 text-slate-400 rounded-xl hover:shadow-neumorphic-inset hover:text-slate-600 active:shadow-neumorphic-inset transition-all"
            aria-label="Close"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
      </div>
    </>
  );
};

export default KanjiTooltip;