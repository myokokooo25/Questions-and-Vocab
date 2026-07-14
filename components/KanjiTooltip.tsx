import React from 'react';
import { Kanji } from '../types';
import { vocabularyData } from '../vocabulary-flashcards/data/vocabulary';
import { vocabularyData as questionVocabData } from '../data/vocab';

interface KanjiTooltipProps {
  kanjiData: Kanji | null;
  kanjiChar?: string;
  questionId?: string;
  position: { top: number; left: number };
  onClose: () => void;
}

const KanjiTooltip: React.FC<KanjiTooltipProps> = ({ kanjiData, kanjiChar, questionId, position, onClose }) => {
  const character = kanjiData?.character || kanjiChar;
  if (!character) return null;

  // Search for vocabulary words containing this Kanji
  let relatedWords = vocabularyData.filter(v => v.kanji.includes(character));
  let specificWords: any[] = [];
  if (questionId && questionVocabData[questionId]) {
    specificWords = questionVocabData[questionId].filter(v => v.jp.includes(character));
  }
  
  // Format specific words to match the vocabularyData structure
  const formattedSpecificWords = specificWords.map(word => ({
    id: `specific-${word.jp}`,
    kanji: word.jp,
    reading: word.reading || '',
    burmese: word.my,
    english: word.english || ''
  }));

  // Combine and deduplicate
  const seenKanji = new Set<string>();
  const combinedWords = [];
  
  for (const word of [...formattedSpecificWords, ...relatedWords]) {
    if (!seenKanji.has(word.kanji)) {
      seenKanji.add(word.kanji);
      combinedWords.push(word);
    }
  }
  
  relatedWords = combinedWords.slice(0, 5); // Limit to 5


  if (!kanjiData && relatedWords.length === 0) return null; // Nothing to show

  return (
    <>
      {/* Overlay to catch clicks outside the tooltip */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      <div
        className="absolute z-50 w-72 p-4 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset ring-1 ring-slate-400/20 transition-opacity duration-200 text-neumorphic-text overflow-y-auto max-h-[80vh]"
        style={{ 
          top: position.top, 
          left: position.left, 
          transform: 'translateY(10px)',
          // Prevent it from going off-screen horizontally
          maxWidth: 'calc(100vw - 32px)',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing it
      >
        {kanjiData && (
          <>
            <div className="flex items-start justify-between pb-3 border-b border-slate-400/20">
              <p className="text-5xl font-semibold leading-none text-slate-700">{kanjiData.character}</p>
              <div className='text-right'>
                <p className="text-lg font-semibold text-slate-700">{kanjiData.meaning}</p>
                <p className="mt-1 text-lg font-semibold text-slate-600">{kanjiData.meaningMY}</p>
              </div>
            </div>
            
            <div className="mt-3 text-sm text-slate-600">
              <p><strong className="font-semibold text-slate-700 w-20 inline-block">On'yomi:</strong> {kanjiData.onyomi}</p>
              <p className="mt-1"><strong className="font-semibold text-slate-700 w-20 inline-block">Kun'yomi:</strong> {kanjiData.kunyomi}</p>
            </div>
          </>
        )}

        {!kanjiData && (
            <div className="pb-3 border-b border-slate-400/20">
              <p className="text-4xl font-semibold leading-none text-slate-700">{character}</p>
            </div>
        )}

        {relatedWords.length > 0 && (
          <div className={`mt-3 ${kanjiData ? 'pt-3 border-t border-slate-400/20' : ''}`}>
             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Related Vocabulary</h4>
             <ul className="space-y-2">
                {relatedWords.map(word => (
                   <li key={word.id} className="text-sm">
                      <div className="flex items-baseline gap-2">
                         <span className="font-bold text-slate-700">{word.kanji}</span>
                         <span className="text-xs text-slate-500">({word.reading})</span>
                      </div>
                      <div className="text-slate-600">
                         {word.burmese} {word.english ? ` - ${word.english}` : ''}
                      </div>
                   </li>
                ))}
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