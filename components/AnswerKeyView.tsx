import React, { useState, useEffect } from 'react';
import { studyDataByChapter, studyDataByChapter2026, studyDataByChapter2026Level2 } from '../data/content';
import { chapter2021Data } from '../data/2021-old-question';
import { chapter2022Data } from '../data/2022-old-question';
import { chapter2023Data } from '../data/2023-old-question';
import { chapter2024Data } from '../data/2024-old-question';
import { chapter2025Data } from '../data/2025-old-question';
import { StudyCardData } from '../types';
import { ChevronLeftIcon, CheckCircleSolidIcon, SearchIcon, ChevronDownIcon } from './Icons';

interface AnswerKeyViewProps {
  onClose: () => void;
  selectedApp?: string;
  initialChapter?: number;
  currentQuestions?: StudyCardData[];
}

const CATEGORIES = [
  { id: '2026', label: '2026 Level 1 (基礎・標準)', shortLabel: '2026 L1', isChapterBased: true },
  { id: '2026-level2', label: '2026 Level 2 (応用・実戦)', shortLabel: '2026 L2', isChapterBased: true },
  { id: 'main', label: 'Main Chapter Study (1-5章)', shortLabel: 'Main', isChapterBased: true },
  { id: '2025', label: '2025 Old Questions (過去問)', shortLabel: '2025', isChapterBased: false },
  { id: '2024', label: '2024 Old Questions (過去問)', shortLabel: '2024', isChapterBased: false },
  { id: '2023', label: '2023 Old Questions (過去問)', shortLabel: '2023', isChapterBased: false },
  { id: '2022', label: '2022 Old Questions (過去問)', shortLabel: '2022', isChapterBased: false },
  { id: '2021', label: '2021 Old Questions (過去問)', shortLabel: '2021', isChapterBased: false },
];

const AnswerKeyView: React.FC<AnswerKeyViewProps> = ({
  onClose,
  selectedApp = '2026',
  initialChapter = 1,
  currentQuestions = [],
}) => {
  // Determine starting category based on selectedApp
  const defaultCategory = CATEGORIES.some(c => c.id === selectedApp) ? selectedApp : '2026';
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [activeChapter, setActiveChapter] = useState<number>(initialChapter > 0 ? initialChapter : 1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (selectedApp && CATEGORIES.some(c => c.id === selectedApp)) {
      setSelectedCategory(selectedApp);
    }
  }, [selectedApp]);

  const currentCategoryObj = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];
  const isChapterBased = currentCategoryObj.isChapterBased;
  const chapters = [1, 2, 3, 4, 5];

  // Resolve raw data for active category
  const rawData: StudyCardData[] = React.useMemo(() => {
    if (selectedCategory === '2026') {
      return studyDataByChapter2026[activeChapter] || [];
    }
    if (selectedCategory === '2026-level2') {
      return studyDataByChapter2026Level2[activeChapter] || [];
    }
    if (selectedCategory === 'main') {
      return studyDataByChapter[activeChapter] || [];
    }
    if (selectedCategory === '2021') return chapter2021Data;
    if (selectedCategory === '2022') return chapter2022Data;
    if (selectedCategory === '2023') return chapter2023Data;
    if (selectedCategory === '2024') return chapter2024Data;
    if (selectedCategory === '2025') {
      if (chapter2025Data && chapter2025Data.length > 0) return chapter2025Data;
      if (selectedApp === '2025' && currentQuestions && currentQuestions.length > 0) return currentQuestions;
      return [];
    }
    return [];
  }, [selectedCategory, activeChapter, currentQuestions, selectedApp]);

  // Filter data based on search query
  const filteredData = React.useMemo(() => {
    if (!searchQuery.trim()) return rawData;
    const query = searchQuery.toLowerCase();
    return rawData.filter(q => {
      const correctOption = q.options.find(o => o.id === q.correctOptionId);
      const matchId = q.id?.toLowerCase().includes(query);
      const matchQJP = q.questionJP?.toLowerCase().includes(query);
      const matchQMY = q.questionMY?.toLowerCase().includes(query);
      const matchOptJP = correctOption?.textJP?.toLowerCase().includes(query);
      const matchOptMY = correctOption?.textMY?.toLowerCase().includes(query);
      return matchId || matchQJP || matchQMY || matchOptJP || matchOptMY;
    });
  }, [rawData, searchQuery]);

  const toggleExplanation = (id: string) => {
    setExpandedExplanations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="fixed inset-0 z-[60] bg-neumorphic-bg flex flex-col text-slate-700 dark:text-slate-200">
      {/* Header */}
      <header className="shrink-0 flex items-center justify-between p-4 sm:p-6 shadow-neumorphic-outset bg-neumorphic-bg z-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 active:shadow-neumorphic-inset transition-all"
            title="Go Back"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100">
              Answer Key ({currentCategoryObj.label})
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
              {filteredData.length} Questions / Answer Keys
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-36 sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search Q or Answer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm font-bold bg-neumorphic-bg text-slate-700 dark:text-slate-200 placeholder-slate-400 rounded-2xl shadow-neumorphic-inset border-2 border-transparent focus:outline-none transition-all"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col items-center">
        {/* Category Selector Bar */}
        <div className="w-full max-w-4xl mb-6">
          <div className="bg-neumorphic-bg shadow-neumorphic-inset p-2 rounded-3xl flex flex-wrap gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`py-2 px-3 sm:px-4 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  selectedCategory === cat.id
                    ? 'shadow-neumorphic-inset text-blue-600 dark:text-blue-400 bg-blue-50/20'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="inline sm:hidden">{cat.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Bar (Only for Chapter-based categories: 2026 Level 1, 2026 Level 2, Main) */}
        {isChapterBased && (
          <div className="w-full max-w-4xl mb-8">
            <div className="bg-neumorphic-bg shadow-neumorphic-inset p-2 rounded-3xl flex flex-wrap gap-2">
              {chapters.map((ch) => (
                <button
                  key={ch}
                  onClick={() => {
                    setActiveChapter(ch);
                    setSearchQuery('');
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all ${
                    activeChapter === ch
                      ? 'shadow-neumorphic-inset text-blue-600 dark:text-blue-400 bg-blue-50/10'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  Chapter {ch}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Answer Cards List */}
        <div className="w-full max-w-4xl space-y-6">
          {filteredData.length === 0 ? (
            <div className="text-center p-12 bg-neumorphic-bg shadow-neumorphic-outset rounded-3xl text-slate-500 dark:text-slate-400 font-bold">
              {searchQuery ? `No answers found matching "${searchQuery}".` : `No data available for ${currentCategoryObj.label}${isChapterBased ? ` Chapter ${activeChapter}` : ''}.`}
            </div>
          ) : (
            filteredData.map((q) => {
              const correctOption = q.options.find((o) => o.id === q.correctOptionId);
              const isExpanded = !!expandedExplanations[q.id];

              return (
                <div key={q.id} className="p-6 bg-neumorphic-bg shadow-neumorphic-outset rounded-3xl transition-all">
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="shrink-0 px-3 py-1.5 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm">
                      Q ID: {q.id}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Answer: Option ({q.correctOptionId})
                    </span>
                  </div>

                  {/* Japanese Question */}
                  <h3
                    className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: q.questionJP }}
                  />

                  {/* Myanmar Translation */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                    {q.questionMY}
                  </p>

                  {/* Highlighted Correct Answer */}
                  <div className="p-4 bg-green-50/80 dark:bg-green-950/30 rounded-2xl border-2 border-green-300/80 dark:border-green-800/50 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircleSolidIcon className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 text-xs font-black rounded-lg">
                            Correct Answer ({q.correctOptionId})
                          </span>
                        </div>
                        <p
                          className="font-bold text-green-900 dark:text-green-200 text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: correctOption?.textJP || '' }}
                        />
                        <p className="text-sm text-green-800 dark:text-green-300 mt-1 leading-relaxed">
                          {correctOption?.textMY}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Explanation Toggle (if available) */}
                  {q.explanation && (
                    <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="flex items-center justify-between w-full text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <span>Explanation & Study Tip</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200 dark:border-slate-700">
                          {q.explanation.titleMY && (
                            <p className="font-bold text-blue-700 dark:text-blue-300">{q.explanation.titleMY}</p>
                          )}
                          {q.explanation.reasonMY && (
                            <p className="text-slate-600 dark:text-slate-300"><strong className="text-slate-800 dark:text-slate-100">Reason:</strong> {q.explanation.reasonMY}</p>
                          )}
                          {q.explanation.memoryTipMY && (
                            <p className="text-amber-700 dark:text-amber-300 font-medium bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/40">
                              💡 <strong>Memory Tip:</strong> {q.explanation.memoryTipMY}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerKeyView;
