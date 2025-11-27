

import React from 'react';
import type { VocabularyWord } from '../types';
import { CheckCircleIcon } from './Icons';

interface ListViewProps {
  words: VocabularyWord[];
  isEditMode: boolean;
  setWords: React.Dispatch<React.SetStateAction<VocabularyWord[]>>;
  categories: string[];
  markedAsLearned: Set<number>;
  onToggleMarkedAsLearned: (id: number) => void;
}

const ReadOnlyView: React.FC<{ words: VocabularyWord[], markedAsLearned: Set<number>, onToggleMarkedAsLearned: (id: number) => void }> = ({ words, markedAsLearned, onToggleMarkedAsLearned }) => {
   if (words.length === 0) {
    return (
      <div className="w-full max-w-4xl h-full flex items-center justify-center bg-neumorphic-bg shadow-neumorphic-inset rounded-xl p-6">
        <p className="text-xl text-slate-500">No words match your search or filter.</p>
      </div>
    );
  }
  return (
    <div className="w-full max-w-4xl bg-neumorphic-bg shadow-neumorphic-inset rounded-xl overflow-hidden p-2 flex flex-col">
      {/* Header */}
      <div className="p-1 sm:p-2 shrink-0">
        <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr] w-full text-left gap-2">
            <div className="p-3 sm:p-4"></div> {/* Placeholder for checkmark */}
            <div className="p-3 sm:p-4 text-blue-600 font-semibold text-sm">Kanji</div>
            <div className="p-3 sm:p-4 text-blue-600 font-semibold text-sm">Reading</div>
            <div className="p-3 sm:p-4 text-blue-600 font-semibold text-sm">English</div>
            <div className="p-3 sm:p-4 text-blue-600 font-semibold text-sm">Burmese</div>
        </div>
      </div>
      
      <div className="h-px bg-neumorphic-shadow-dark/20 mx-4 shrink-0"></div>
      
      {/* Body */}
      <div className="overflow-y-auto max-h-[55vh] p-2 space-y-3">
        {words.map((word) => {
            const isLearned = markedAsLearned.has(word.id);
            return (
            <div key={word.id} className="bg-neumorphic-bg shadow-neumorphic-outset p-3 sm:p-4 rounded-lg grid grid-cols-[40px_1fr_1fr_1fr_1fr] gap-2 w-full text-left transition-shadow duration-200 hover:shadow-neumorphic-inset">
                <div className="self-center justify-self-center">
                    <button 
                        onClick={() => onToggleMarkedAsLearned(word.id)}
                        className={`p-1 rounded-full transition-colors ${isLearned ? 'text-green-500' : 'text-slate-300 hover:text-green-400'}`}
                        aria-label={isLearned ? "Mark as not learned" : "Mark as learned"}
                    >
                        <CheckCircleIcon solid={isLearned} className="w-6 h-6" />
                    </button>
                </div>
                <p className="font-bold text-md sm:text-lg truncate self-center text-slate-700">{word.kanji}</p>
                <p className="text-slate-600 text-sm sm:text-base truncate self-center">{word.reading}</p>
                <p className="text-slate-600 text-sm sm:text-base self-center">{word.english}</p>
                <p className="text-slate-600 text-sm sm:text-base self-center">{word.burmese}</p>
            </div>
            );
        })}
      </div>
    </div>
  );
};

const EditView: React.FC<Omit<ListViewProps, 'isEditMode' | 'markedAsLearned' | 'onToggleMarkedAsLearned'>> = ({ words, setWords, categories }) => {
    
    const handleAddWord = () => {
        const newId = words.length > 0 ? Math.max(...words.map(w => w.id)) + 1 : 1;
        const newWord: VocabularyWord = {
            id: newId,
            category: categories[0] || 'Uncategorized',
            kanji: '',
            reading: '',
            english: '',
            burmese: '',
        };
        setWords(currentWords => [newWord, ...currentWords]);
    };

    const handleWordChange = (id: number, field: keyof Omit<VocabularyWord, 'id'>, value: string) => {
        setWords(currentWords =>
            currentWords.map(w => (w.id === id ? { ...w, [field]: value } : w))
        );
    };

    const handleWordDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this word?')) {
            setWords(currentWords => currentWords.filter(w => w.id !== id));
        }
    };
    
    const inputContainerClass = "bg-neumorphic-bg shadow-neumorphic-inset rounded-lg";
    const inputClass = "w-full bg-transparent border-none outline-none p-2.5 text-neumorphic-text text-sm";
    const labelClass = "block text-xs font-medium text-blue-600 mb-1";

    return (
        <div className="w-full max-w-4xl bg-neumorphic-bg shadow-neumorphic-inset rounded-xl overflow-hidden">
            <div className="p-4 bg-neumorphic-bg flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-700">Edit Vocabulary</h3>
                <button onClick={handleAddWord} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-4 rounded-lg text-sm">
                    Add New Word
                </button>
            </div>
            <div className="overflow-y-auto max-h-[60vh] p-4 space-y-4">
                {words.map(word => (
                     <div key={word.id} className="bg-neumorphic-bg shadow-neumorphic-outset p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor={`kanji-${word.id}`} className={labelClass}>Kanji</label>
                                <div className={inputContainerClass}><input id={`kanji-${word.id}`} type="text" value={word.kanji} onChange={e => handleWordChange(word.id, 'kanji', e.target.value)} className={inputClass} /></div>
                            </div>
                             <div>
                                <label htmlFor={`reading-${word.id}`} className={labelClass}>Reading</label>
                                <div className={inputContainerClass}><input id={`reading-${word.id}`} type="text" value={word.reading} onChange={e => handleWordChange(word.id, 'reading', e.target.value)} className={inputClass} /></div>
                            </div>
                             <div>
                                <label htmlFor={`category-${word.id}`} className={labelClass}>Category</label>
                                <div className={inputContainerClass}>
                                    <select id={`category-${word.id}`} value={word.category} onChange={e => handleWordChange(word.id, 'category', e.target.value)} className={`${inputClass} appearance-none`}>
                                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="lg:col-span-3">
                                <label htmlFor={`english-${word.id}`} className={labelClass}>English</label>
                                <div className={inputContainerClass}><input id={`english-${word.id}`} type="text" value={word.english} onChange={e => handleWordChange(word.id, 'english', e.target.value)} className={inputClass} /></div>
                            </div>
                            <div className="lg:col-span-3">
                                <label htmlFor={`burmese-${word.id}`} className={labelClass}>Burmese</label>
                                <div className={inputContainerClass}><input id={`burmese-${word.id}`} type="text" value={word.burmese} onChange={e => handleWordChange(word.id, 'burmese', e.target.value)} className={inputClass} /></div>
                            </div>
                        </div>
                         <div className="text-right mt-3">
                            <button onClick={() => handleWordDelete(word.id)} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset text-xs font-medium py-1 px-3 rounded-lg">
                                <span className="text-red-500">Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const ListView: React.FC<ListViewProps> = ({ words, isEditMode, setWords, categories, markedAsLearned, onToggleMarkedAsLearned }) => {
  if (isEditMode) {
      return <EditView words={words} setWords={setWords} categories={categories} />;
  }
  return <ReadOnlyView words={words} markedAsLearned={markedAsLearned} onToggleMarkedAsLearned={onToggleMarkedAsLearned} />;
};

export default ListView;