import React, { useState, useMemo } from 'react';
import { STEEL_STANDARDS_DATA, STEEL_STANDARDS_CATEGORIES, SteelStandardItem } from '../data/steelStandards';
import { playJapaneseAudio, stopAudio } from '../lib/audio';
import JapaneseText from './JapaneseText';
import {
  SearchIcon,
  ChevronLeftIcon,
  SpeakerIcon,
  CheckCircleSolidIcon,
  SparkleIcon,
  BookOpenIcon,
  ScaleIcon,
  AcademicCapIcon,
  LightBulbIcon
} from './Icons';

interface CheatSheetViewProps {
  onGoBack: () => void;
}

export const CheatSheetView: React.FC<CheatSheetViewProps> = ({ onGoBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    return STEEL_STANDARDS_DATA.filter(item => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inTitleJP = item.titleJP.toLowerCase().includes(q);
      const inTitleMY = item.titleMY.toLowerCase().includes(q);
      const inKeyRuleJP = item.keyRuleJP.toLowerCase().includes(q);
      const inKeyRuleMY = item.keyRuleMY.toLowerCase().includes(q);
      const inFormula = (item.formulaOrValue || '').toLowerCase().includes(q);
      const inTags = item.tags.some(t => t.toLowerCase().includes(q));

      return inTitleJP || inTitleMY || inKeyRuleJP || inKeyRuleMY || inFormula || inTags;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePlayAudio = (id: string, textJP: string) => {
    if (playingId === id) {
      stopAudio();
      setPlayingId(null);
      return;
    }
    const cleanText = textJP.replace(/<[^>]*>/g, '');
    playJapaneseAudio(cleanText, {
      onStart: () => setPlayingId(id),
      onEnd: () => setPlayingId(null),
      onError: () => setPlayingId(null),
    });
  };

  return (
    <div className="min-h-screen bg-neumorphic-bg text-slate-700 py-6 px-3 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      {/* Toast */}
      {copiedId && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-slate-800 text-white text-xs font-bold rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <CheckCircleSolidIcon className="w-4 h-4 text-emerald-400" />
          <span>စံနှုန်း/ဖော်မြူလာအား ကူးယူပြီးပါပြီ (Copied to Clipboard)</span>
        </div>
      )}

      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-6">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset">
          <div className="flex items-center gap-4">
            <button
              onClick={onGoBack}
              className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-800 active:shadow-neumorphic-inset transition-all"
              title="Go Back"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shadow-neumorphic-inset">
                  <ScaleIcon className="w-5 h-5" />
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                  鉄骨 基準・数値まとめ (Cheat Sheet)
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                HTB(TC) bolt၊ အပေါက်ဖောက်ခြင်း၊ Stud၊ ဂဟေအပူချိန် ဖော်မြူလာနှင့် သံမဏိစံနှုန်းများ အကျဉ်းချုပ်
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset text-xs font-black text-slate-600 dark:text-slate-300">
            စုစုပေါင်း: <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{filteredData.length}</span> ခု
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-slate-400">
            <SearchIcon className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="စံနှုန်း၊ ကိန်းဂဏန်း (ဥပမာ- Q=60IE/v, Ceq, Pcm, Stud 15°, 1.5d, 5℃, 27J, M24, UT) ရှာဖွေရန်..."
            className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 text-sm font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="bg-neumorphic-bg p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-neumorphic-inset flex flex-wrap gap-1.5 sm:gap-2">
          {STEEL_STANDARDS_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`py-2 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all ${
                selectedCategory === cat.id
                  ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <span>{cat.labelMY}</span>
            </button>
          ))}
        </div>

        {/* Standards List */}
        {filteredData.length === 0 ? (
          <div className="text-center py-16 px-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset text-slate-400 font-bold">
            ရှာဖွေမှုနှင့် ကိုက်ညီသော စံနှုန်း မတွေ့ရှိပါ။
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredData.map(item => (
              <div
                key={item.id}
                className="bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 flex flex-col justify-between border border-slate-300/20 hover:border-amber-400/30 transition-all group"
              >
                <div>
                  {/* Card Header: Title & Audio */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300">
                          {item.category.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 leading-snug">
                        {item.titleMY}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                        <JapaneseText text={item.titleJP} />
                      </div>
                    </div>

                    <button
                      onClick={() => handlePlayAudio(item.id, item.titleJP)}
                      className={`p-2.5 rounded-xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all shrink-0 ${
                        playingId === item.id ? 'text-blue-600 shadow-neumorphic-inset' : 'text-slate-500'
                      }`}
                      title="Pronounce Japanese Term"
                    >
                      <SpeakerIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Highlighted Rule Box */}
                  <div className="my-3 p-3 sm:p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-amber-400/20">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        အဓိက စံသတ်မှတ်ချက် (Standard Rule)
                      </span>
                      {item.formulaOrValue && (
                        <button
                          onClick={() => handleCopy(item.id, item.formulaOrValue || '')}
                          className="text-[10px] font-black px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 transition-colors"
                          title="Copy standard value"
                        >
                          Copy Value
                        </button>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 leading-relaxed font-mono">
                      {item.keyRuleMY}
                    </p>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-mono">
                      {item.keyRuleJP}
                    </p>
                    {item.formulaOrValue && (
                      <div className="mt-2 pt-2 border-t border-slate-300/30 flex items-center gap-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase">Formula / Value:</span>
                        <code className="text-xs font-black text-blue-600 dark:text-blue-400 bg-blue-50/40 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                          {item.formulaOrValue}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Explanation Details */}
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300 space-y-1.5 mt-2">
                    <p className="leading-relaxed">{item.detailsMY}</p>
                  </div>
                </div>

                {/* Exam Tip */}
                <div className="mt-4 pt-3 border-t border-slate-300/30 flex items-start gap-2 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50/30 dark:bg-amber-950/20 p-2.5 rounded-xl">
                  <LightBulbIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-black">စာမေးပွဲ အကြံပြုချက်:</span> {item.examTipMY}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default CheatSheetView;
