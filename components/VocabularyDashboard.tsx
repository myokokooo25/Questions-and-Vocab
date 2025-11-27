import React, { useState, useMemo } from 'react';
import { vocabularyData } from '../data/vocab';
import { VocabItem, Kanji } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { LogoutIcon, LogoIcon, SearchIcon, GlobeIcon, ChevronLeftIcon, AcademicCapIcon } from './Icons';
import Dropdown from './Dropdown';
import JapaneseText from './JapaneseText';
import KanjiTooltip from './KanjiTooltip';
import { kanjiDictionary } from '../data/kanji';

const VocabularyDashboard: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const { logout } = useAuth();
  const { toggleLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  
  const allVocab = useMemo(() => {
    const uniqueVocab = new Map<string, VocabItem>();
    Object.values(vocabularyData).flat().forEach(item => {
      if (!uniqueVocab.has(item.jp)) {
        uniqueVocab.set(item.jp, item);
      }
    });
    return Array.from(uniqueVocab.values()).sort((a, b) => a.jp.localeCompare(b.jp, 'ja'));
  }, []);

  const chapterKeys = useMemo(() => {
      const chapters = new Set<number>();
      Object.keys(vocabularyData).forEach(key => {
          const chapterNum = parseInt(key.split('-')[0], 10);
          if (!isNaN(chapterNum)) {
              chapters.add(chapterNum);
          }
      });
      return Array.from(chapters).sort((a,b) => a - b);
  }, []);

  const chapterOptions = useMemo(() => {
    return [
        { value: 'all', label: 'All Chapters' },
        ...chapterKeys.map(num => ({ value: num, label: `Chapter ${num}` }))
    ];
  }, [chapterKeys]);

  const [activeChapter, setActiveChapter] = useState<string | number>('all');
  
  const [activeKanji, setActiveKanji] = useState<Kanji | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {
    const kanjiData = kanjiDictionary[kanji];
    if (kanjiData) {
      const rect = event.currentTarget.getBoundingClientRect();
      setActiveKanji(kanjiData);
      setTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  const handleCloseTooltip = () => {
    setActiveKanji(null);
  };

  const filteredVocab = useMemo(() => {
    let vocab = allVocab;

    // Filter by chapter
    if (activeChapter !== 'all') {
        const vocabForChapter = new Set<string>();
        Object.entries(vocabularyData).forEach(([key, items]) => {
            if (key.startsWith(`${activeChapter}-`)) {
                items.forEach(item => vocabForChapter.add(item.jp));
            }
        });
        vocab = allVocab.filter(item => vocabForChapter.has(item.jp));
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      vocab = vocab.filter(item => 
        item.jp.toLowerCase().includes(lowercasedQuery) ||
        item.my.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    return vocab;
  }, [allVocab, activeChapter, searchQuery, vocabularyData]);

  return (
    <div className="min-h-screen bg-neumorphic-bg">
      <KanjiTooltip 
        kanjiData={activeKanji}
        position={tooltipPosition}
        onClose={handleCloseTooltip}
      />
      <header className="sticky top-0 z-20 w-full bg-neumorphic-bg">
        <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={onGoBack}
                className="p-2.5 rounded-lg shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all duration-200"
                title="Go Back"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <div className="p-2 rounded-full shadow-neumorphic-outset hidden sm:block">
                <AcademicCapIcon className="w-6 h-6 text-neumorphic-text" />
              </div>
              <h1 className="text-xl font-bold text-slate-700 hidden sm:block">
                単語学習 (Vocabulary)
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
                 <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search vocab..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-32 sm:w-48 pl-10 pr-3 py-2 text-sm bg-neumorphic-bg text-neumorphic-text placeholder-slate-500 rounded-lg shadow-neumorphic-inset border-2 border-transparent focus:outline-none focus:ring-0 transition-all"
                    />
                </div>
                <button
                    onClick={toggleLanguage}
                    className="p-2.5 rounded-lg shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all duration-200"
                    title="Toggle Language"
                >
                    <GlobeIcon className="w-5 h-5" />
                </button>
                <button
                onClick={logout}
                className="p-2.5 rounded-lg shadow-neumorphic-outset text-slate-500 hover:text-red-500 active:shadow-neumorphic-inset transition-all duration-200"
                title="Logout"
                >
                    <LogoutIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
      </header>
      <main className="max-w-4xl p-4 mx-auto sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between p-3 mb-6 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset gap-4">
            <div className="w-full sm:w-1/2">
                <Dropdown
                    options={chapterOptions}
                    value={activeChapter}
                    onChange={(val) => setActiveChapter(val)}
                    ariaLabel="Select Chapter"
                />
            </div>
            <div className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-neumorphic-text bg-neumorphic-bg rounded-lg shadow-neumorphic-inset text-center">
                Total Words: {filteredVocab.length}
            </div>
        </div>

        <div className="bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset p-2 sm:p-4">
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-left text-slate-600">
                <thead className="text-sm text-slate-500 uppercase sticky top-0 bg-neumorphic-bg">
                    <tr>
                        <th scope="col" className="px-4 py-3">Japanese</th>
                        <th scope="col" className="px-4 py-3">Burmese</th>
                        <th scope="col" className="px-4 py-3 hidden sm:table-cell">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredVocab.map((item, index) => (
                        <tr key={`${item.jp}-${index}`} className="border-t border-neumorphic-shadow-dark/20">
                            <td className="px-4 py-3 font-mono font-medium">
                                <JapaneseText text={item.jp} onKanjiClick={handleKanjiClick} />
                            </td>
                            <td className="px-4 py-3">{item.my}</td>
                            <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">{item.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredVocab.length === 0 && (
                <p className="text-center text-slate-500 py-8">No vocabulary found for your search.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VocabularyDashboard;