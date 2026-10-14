import React, { useState, useMemo, useEffect } from 'react';
import { studyDataByChapter2026 } from '../data/content';
import { StudyCardData } from '../types';
import JapaneseText from './JapaneseText';
import { playJapaneseAudio, stopAudio } from '../lib/audio';
import {
  SearchIcon,
  SpeakerIcon,
  CheckCircleSolidIcon,
  CopyIcon,
  BookOpenIcon,
  LightBulbIcon,
  FireIcon,
  BookmarkIcon,
  BookmarkSolidIcon,
  AcademicCapIcon,
  ListBulletIcon,
  CheckIcon,
  XIcon
} from './Icons';

interface Chapter2026CheatSheetProps {
  initialChapter?: number | 'all';
}

interface ProcessedCheatItem {
  id: string | number;
  chapter: number;
  qNumber: number;
  questionJP: string;
  questionMY: string;
  correctOptionId: number;
  correctOptionJP: string;
  correctOptionMY: string;
  allOptions: { id: number; textJP: string; textMY: string }[];
  reasonMY: string;
  memoryTipMY: string;
  titleMY: string;
  questionType: 'incorrect' | 'correct' | 'calculation';
  isStarred?: boolean;
}

const CHAPTER_TITLES: { [key: number]: { titleJP: string; titleMY: string; badgeColor: string } } = {
  1: {
    titleJP: '第1章 構造力学・材料力学',
    titleMY: 'အခန်း ၁: ဖွဲ့စည်းပုံမက္ကင်းနစ်နှင့် ပစ္စည်းစွမ်းရည် (反力・応力・たわみ・座屈)',
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
  },
  2: {
    titleJP: '第2章 鋼材・接合・工作法',
    titleMY: 'အခန်း ၂: သံမဏိပစ္စည်း၊ ဆက်စပ်နည်းနှင့် ထုတ်လုပ်နည်း (SN/SM 鋼材・ボルト・工作法)',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
  },
  3: {
    titleJP: '第3章 溶接施工・溶接欠陥・JASS 6',
    titleMY: 'အခန်း ၃: ဂဟေဆက်ခြင်း၊ ချို့ယွင်းချက်နှင့် JASS 6 စံနှုန်း (溶接施工・予熱・UT 検査)',
    badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
  },
  4: {
    titleJP: '第4章 工事現場施工・建方・安全',
    titleMY: 'အခန်း ၄: လုပ်ငန်းခွင်တပ်ဆင်ခြင်း၊ တိုင်ထူခြင်းနှင့် ဘေးအန္တရာယ်ကင်းရှင်းရေး (建方・アンカー・安全衛生)',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
  },
  5: {
    titleJP: '第5章 施工管理・品質管理・法規',
    titleMY: 'အခန်း ၅: အရည်အသွေးစီမံခန့်ခွဲမှု၊ စစ်ဆေးခြင်းနှင့် ဥပဒေစည်းမျဉ်းများ (品質管理・中間検査・建築基準法)',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
  }
};

export const Chapter2026CheatSheet: React.FC<Chapter2026CheatSheetProps> = ({
  initialChapter = 'all'
}) => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>(initialChapter);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [starredIds, setStarredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('cheat_sheet_2026_starred');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [onlyStarred, setOnlyStarred] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<{ [id: string]: boolean }>({});

  // Save starred IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cheat_sheet_2026_starred', JSON.stringify(Array.from(starredIds)));
    } catch {
      // ignore storage error
    }
  }, [starredIds]);

  const toggleStar = (id: string | number) => {
    const strId = String(id);
    setStarredIds(prev => {
      const next = new Set(prev);
      if (next.has(strId)) {
        next.delete(strId);
      } else {
        next.add(strId);
      }
      return next;
    });
  };

  // Process all 146 questions from 2026 Chapter Study 1級 into high-yield cheat sheet items
  const allProcessedItems = useMemo<ProcessedCheatItem[]>(() => {
    const list: ProcessedCheatItem[] = [];

    for (let ch = 1; ch <= 5; ch++) {
      const chapterQuestions: StudyCardData[] = studyDataByChapter2026[ch] || [];
      chapterQuestions.forEach((q, idx) => {
        const correctOpt = q.options?.find(o => o.id === q.correctOptionId) || q.options?.[0];
        const rawQuestionText = q.questionJP?.replace(/<[^>]+>/g, '') || '';

        let questionType: 'incorrect' | 'correct' | 'calculation' = 'incorrect';
        if (rawQuestionText.includes('計算') || rawQuestionText.includes('求めよ') || rawQuestionText.includes('大きさ')) {
          questionType = 'calculation';
        } else if (rawQuestionText.includes('最も適当なもの') || rawQuestionText.includes('適当なものはどれか')) {
          questionType = 'correct';
        } else {
          questionType = 'incorrect';
        }

        list.push({
          id: String(q.id),
          chapter: ch,
          qNumber: idx + 1,
          questionJP: q.questionJP || '',
          questionMY: q.questionMY || '',
          correctOptionId: q.correctOptionId,
          correctOptionJP: correctOpt?.textJP || '',
          correctOptionMY: correctOpt?.textMY || '',
          allOptions: q.options || [],
          reasonMY: q.explanation?.reasonMY || '',
          memoryTipMY: q.explanation?.memoryTipMY || '',
          titleMY: q.explanation?.titleMY || `အခန်း (${ch}) မေးခွန်း အမှတ် (${idx + 1})`,
          questionType
        });
      });
    }

    return list;
  }, []);

  // Filter items based on selected chapter, search query, and star filter
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allProcessedItems.filter(item => {
      // 1. Chapter filter
      if (selectedChapter !== 'all' && item.chapter !== selectedChapter) {
        return false;
      }

      // 2. Starred filter
      if (onlyStarred && !starredIds.has(String(item.id))) {
        return false;
      }

      // 3. Search query filter
      if (!q) return true;

      const plainQJP = item.questionJP.replace(/<[^>]+>/g, '').toLowerCase();
      const plainQMY = item.questionMY.toLowerCase();
      const plainOptJP = item.correctOptionJP.replace(/<[^>]+>/g, '').toLowerCase();
      const plainOptMY = item.correctOptionMY.toLowerCase();
      const plainReasonMY = item.reasonMY.toLowerCase();
      const plainTipMY = item.memoryTipMY.toLowerCase();
      const strId = String(item.id).toLowerCase();
      const qNum = `q${item.qNumber}`.toLowerCase();
      const chNum = `ch${item.chapter}`.toLowerCase();

      return (
        plainQJP.includes(q) ||
        plainQMY.includes(q) ||
        plainOptJP.includes(q) ||
        plainOptMY.includes(q) ||
        plainReasonMY.includes(q) ||
        plainTipMY.includes(q) ||
        strId.includes(q) ||
        qNum.includes(q) ||
        chNum.includes(q)
      );
    });
  }, [allProcessedItems, selectedChapter, onlyStarred, starredIds, searchQuery]);

  // Audio Playback
  const handlePlayAudio = (id: string, textJP: string) => {
    if (playingId === id) {
      stopAudio();
      setPlayingId(null);
    } else {
      stopAudio();
      setPlayingId(id);
      playJapaneseAudio(textJP, {
        onEnd: () => setPlayingId(null),
        onError: () => setPlayingId(null)
      });
    }
  };

  // Copy to clipboard
  const handleCopy = (id: string, text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Toggle card expansion
  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: { [id: string]: boolean } = {};
    filteredItems.forEach(item => {
      allExpanded[String(item.id)] = true;
    });
    setExpandedCards(allExpanded);
  };

  const collapseAll = () => {
    setExpandedCards({});
  };

  // Count by chapters
  const counts = useMemo(() => {
    const c: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    allProcessedItems.forEach(item => {
      c[item.chapter] = (c[item.chapter] || 0) + 1;
    });
    return c;
  }, [allProcessedItems]);

  return (
    <div className="w-full space-y-6">
      {/* Toast Notification when Copied */}
      {copiedId && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-slate-900/90 text-white rounded-2xl shadow-2xl backdrop-blur-md text-xs sm:text-sm border border-emerald-500/40 animate-fade-in">
          <CheckCircleSolidIcon className="w-4 h-4 text-emerald-400" />
          <span>စာမေးပွဲ အလွတ်ကျက် အချက်အား ကူးယူပြီးပါပြီ (Copied to Clipboard)</span>
        </div>
      )}

      {/* Hero Banner / Pre-Exam Motivation */}
      <div className="p-5 sm:p-7 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-black text-xs shadow-neumorphic-inset">
              <AcademicCapIcon className="w-4 h-4" />
              <span>2026 Chapter Study 1級 သီးသန့် အလွတ်ကျက် စာရွက် (Cheat Sheet)</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              စာမေးပွဲခန်းမဝင်မီ မှတ်သားရမည့် အချက်များနှင့် အလွတ်ကျက် အနှစ်ချုပ်
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl">
              2026 1級 Textbook Chapter 1 မှ 5 အထိ မေးခွန်း <span className="font-mono font-black text-rose-600 dark:text-rose-400">၁၄၆ ပုဒ်လုံး</span> ၏ မဖြစ်မနေ အလွတ်ကျက်ရမည့် အဖြေမှန်များ၊ စံနှုန်းကိန်းဂဏန်းများ၊ စာမေးပွဲလှည့်ကွက်များနှင့် အဓိက သော့ချက်များကို သီးသန့်ထုတ်နုတ်စုစည်းထားပါသည်။
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-stretch sm:self-auto justify-between sm:justify-end">
            <div className="p-3 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-center min-w-[90px]">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">မေးခွန်းပေါင်း</span>
              <span className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">146</span>
              <span className="block text-[10px] text-slate-500">ပုဒ်</span>
            </div>
            <div className="p-3 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-center min-w-[90px]">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">ပြသနေသည်</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{filteredItems.length}</span>
              <span className="block text-[10px] text-slate-500">ပုဒ်</span>
            </div>
          </div>
        </div>

        {/* Chapter Stats Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 pt-4 border-t border-slate-300/30">
          {[1, 2, 3, 4, 5].map(ch => (
            <div
              key={ch}
              onClick={() => setSelectedChapter(ch)}
              className={`p-2.5 rounded-xl cursor-pointer transition-all text-center border ${
                selectedChapter === ch
                  ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-300 font-black shadow-neumorphic-inset'
                  : 'bg-neumorphic-bg border-slate-300/20 text-slate-600 dark:text-slate-400 hover:border-slate-400 shadow-neumorphic-outset'
              }`}
            >
              <div className="text-[10px] font-bold">2026 Ch {ch}</div>
              <div className="text-xs font-black font-mono">{counts[ch]} မေးခွန်း</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Selection Tabs (Matching the user's dropdown in screenshot) */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset">
        <button
          onClick={() => setSelectedChapter('all')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
            selectedChapter === 'all'
              ? 'bg-slate-800 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
          }`}
        >
          <span>အခန်းအားလုံး (All 146)</span>
        </button>

        {[1, 2, 3, 4, 5].map(ch => (
          <button
            key={ch}
            onClick={() => setSelectedChapter(ch)}
            className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
              selectedChapter === ch
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <span>2026 Chapter {ch}</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/20 font-mono">
              {counts[ch]}
            </span>
          </button>
        ))}
      </div>

      {/* Search, Star Filter, View Mode Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 sm:p-4 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset border border-slate-300/20">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <SearchIcon className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords, formulas, numbers, or question (e.g. 50℃, UT, 反力, 400N)..."
            className="w-full pl-10 pr-9 py-2.5 bg-neumorphic-bg text-neumorphic-text rounded-xl shadow-neumorphic-inset border border-transparent focus:outline-none text-xs sm:text-sm font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Starred Filter */}
          <button
            onClick={() => setOnlyStarred(!onlyStarred)}
            className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-black transition-all ${
              onlyStarred
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 bg-neumorphic-bg shadow-neumorphic-outset'
            }`}
            title="Show only starred high-yield questions"
          >
            {onlyStarred ? <BookmarkSolidIcon className="w-4 h-4 text-amber-200" /> : <BookmarkIcon className="w-4 h-4 text-amber-500" />}
            <span className="hidden sm:inline">အရေးကြီး</span>
            <span>({starredIds.size})</span>
          </button>

          {/* View Mode Toggle */}
          <div className="flex p-1 bg-neumorphic-bg rounded-xl shadow-neumorphic-inset">
            <button
              onClick={() => setViewMode('cards')}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1 ${
                viewMode === 'cards'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="Detailed Cards Mode"
            >
              <BookOpenIcon className="w-4 h-4" />
              <span className="hidden md:inline">ကတ်များ</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1 ${
                viewMode === 'table'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="Fast Table View Mode"
            >
              <ListBulletIcon className="w-4 h-4" />
              <span className="hidden md:inline">အမြန်ဇယား</span>
            </button>
          </div>

          {/* Expand/Collapse All (for Cards Mode) */}
          {viewMode === 'cards' && (
            <div className="flex items-center gap-1">
              <button
                onClick={expandAll}
                className="px-2.5 py-2 text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset active:shadow-neumorphic-inset"
                title="Expand All Cards"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-2.5 py-2 text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset active:shadow-neumorphic-inset"
                title="Collapse All Cards"
              >
                Collapse
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Active Chapter Header Indicator */}
      {selectedChapter !== 'all' && CHAPTER_TITLES[selectedChapter] && (
        <div className={`p-4 rounded-2xl border ${CHAPTER_TITLES[selectedChapter].badgeColor} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm`}>
          <div>
            <div className="text-xs font-black uppercase tracking-wider font-mono">
              {CHAPTER_TITLES[selectedChapter].titleJP}
            </div>
            <div className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100 mt-0.5">
              {CHAPTER_TITLES[selectedChapter].titleMY}
            </div>
          </div>
          <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-black/10 dark:bg-white/10 shrink-0">
            မေးခွန်း {counts[selectedChapter]} ပုဒ် ပြသနေသည်
          </span>
        </div>
      )}

      {/* No Results Fallback */}
      {filteredItems.length === 0 && (
        <div className="p-12 text-center bg-neumorphic-bg rounded-3xl shadow-neumorphic-inset border border-slate-300/20 space-y-3">
          <LightBulbIcon className="w-10 h-10 mx-auto text-amber-500/50" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            ရှာဖွေမှုနှင့် ကိုက်ညီသော မေးခွန်းမတွေ့ရှိပါ
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            အခြားသော စကားလုံး (ဥပမာ- UT, 400N, 予熱, ボルト သို့မဟုတ် အခန်းနံပါတ်) ဖြင့် ပြန်လည်ရှာဖွေကြည့်ပါ။
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedChapter('all'); setOnlyStarred(false); }}
            className="px-4 py-2 text-xs font-bold text-blue-600 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset active:shadow-neumorphic-inset"
          >
            Filter အားလုံး ပြန်ရှင်းရန်
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODE A: DETAILED HIGH-YIELD CARDS                                  */}
      {/* ========================================================================= */}
      {viewMode === 'cards' && filteredItems.length > 0 && (
        <div className="space-y-4">
          {filteredItems.map(item => {
            const isExpanded = expandedCards[String(item.id)] ?? true; // default open
            const isStarred = starredIds.has(String(item.id));
            const chMeta = CHAPTER_TITLES[item.chapter];

            return (
              <div
                key={item.id}
                className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-slate-300/25 overflow-hidden transition-all duration-200"
              >
                {/* Card Header Bar */}
                <div className="p-4 sm:p-5 flex items-start justify-between gap-3 border-b border-slate-300/20 bg-slate-50/20 dark:bg-slate-900/10">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Chapter & Question # */}
                    <span className="px-2.5 py-1 rounded-xl bg-amber-500 text-white font-mono font-black text-xs shadow-sm">
                      2026 Ch {item.chapter} - Q{item.qNumber}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px] font-bold">
                      ID: {item.id}
                    </span>

                    {/* Question Type Badge */}
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                      item.questionType === 'calculation'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        : item.questionType === 'correct'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {item.questionType === 'calculation'
                        ? '📐 တွက်ချက်မှု / ဖော်မြူလာ'
                        : item.questionType === 'correct'
                          ? '✅ မှန်ကန်သည့်အချက် ရွေးရန်'
                          : '⚠️ မမှန်ကန်သည့်အချက် ရွေးရန်'}
                    </span>
                  </div>

                  {/* Right Header Actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* Star / High Priority Toggle */}
                    <button
                      onClick={() => toggleStar(item.id)}
                      className={`p-2 rounded-xl transition-all ${
                        isStarred
                          ? 'text-amber-500 bg-amber-50/40 shadow-neumorphic-inset'
                          : 'text-slate-400 hover:text-amber-500 shadow-neumorphic-outset'
                      }`}
                      title={isStarred ? 'Unstar Question' : 'Star as High-Yield'}
                    >
                      {isStarred ? <BookmarkSolidIcon className="w-4 h-4 text-amber-500" /> : <BookmarkIcon className="w-4 h-4" />}
                    </button>

                    {/* TTS Audio */}
                    <button
                      onClick={() => handlePlayAudio(String(item.id), item.correctOptionJP)}
                      className={`p-2 rounded-xl transition-all ${
                        playingId === String(item.id)
                          ? 'text-blue-600 bg-blue-50/40 animate-pulse shadow-neumorphic-inset'
                          : 'text-slate-400 hover:text-blue-600 shadow-neumorphic-outset'
                      }`}
                      title="ဂျပန်ဘာသာဖြင့် အသံထွက် နားထောင်ရန်"
                    >
                      <SpeakerIcon className="w-4 h-4" />
                    </button>

                    {/* Copy Key Rule */}
                    <button
                      onClick={() => handleCopy(
                        String(item.id),
                        `[2026 Ch ${item.chapter} Q${item.qNumber}] ${item.correctOptionJP.replace(/<[^>]+>/g, '')}\nအဖြေမှန်: ${item.correctOptionMY}\nမှတ်သားရန်: ${item.memoryTipMY}`
                      )}
                      className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
                      title="Copy Key Rule to Clipboard"
                    >
                      <CopyIcon className="w-4 h-4" />
                    </button>

                    {/* Expand/Collapse */}
                    <button
                      onClick={() => toggleCard(String(item.id))}
                      className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 shadow-neumorphic-outset transition-all text-xs font-bold"
                      title={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? '▲' : '▼'}
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Question Prompt */}
                  <div className="space-y-1.5">
                    <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                      <JapaneseText text={item.questionJP} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {item.questionMY}
                    </div>
                  </div>

                  {/* 🎯 CORE HIGHLIGHT: The Correct Option to Memorize */}
                  <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/30 shadow-neumorphic-inset space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-emerald-500 text-white font-mono font-black text-xs">
                          Option ({item.correctOptionId})
                        </span>
                        <span className="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-300">
                          🎯 စာမေးပွဲခန်းမဝင်မီ အလွတ်ကျက်ရမည့် အဖြေမှန် (正解・核心規範)
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        KEY ANSWER
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 leading-relaxed pl-1 border-l-2 border-emerald-500">
                      <JapaneseText text={item.correctOptionJP} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-200 leading-relaxed pl-1">
                      {item.correctOptionMY}
                    </div>
                  </div>

                  {/* Detailed Explanation / Rationale & Memory Tip (Expanded view) */}
                  {isExpanded && (
                    <div className="space-y-3 pt-2">
                      {/* 📋 Standard Rationale / Explanation */}
                      {item.reasonMY && (
                        <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-300/20 space-y-1.5">
                          <div className="text-xs font-black text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            <span>📋</span>
                            <span>{item.titleMY || 'အဖြေမှန်ရရှိခြင်း အကြောင်းပြချက်နှင့် စံနှုန်း (Rationale)'}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {item.reasonMY}
                          </p>
                        </div>
                      )}

                      {/* 💡 Last-Minute Exam Hall Memory Tip (Golden Amber Box) */}
                      {item.memoryTipMY && (
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 shadow-neumorphic-inset space-y-1.5">
                          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-black text-xs sm:text-sm">
                            <LightBulbIcon className="w-4 h-4 text-amber-500 shrink-0" />
                            <span>စာမေးပွဲခန်းဝင် အလွတ်ကျက် အကြံပြုချက် (Pre-Exam Last-Minute Memory Tip)</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 leading-relaxed">
                            {item.memoryTipMY}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW MODE B: ULTRA-FAST RAPID-FIRE EXAM HALL TABLE                      */}
      {/* ========================================================================= */}
      {viewMode === 'table' && filteredItems.length > 0 && (
        <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset border border-slate-300/25 overflow-hidden">
          <div className="p-4 bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-300/20 flex items-center justify-between">
            <div className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <ListBulletIcon className="w-4 h-4 text-amber-500" />
              <span>စာမေးပွဲခန်းဝင် စက္ကန့်ပိုင်း အမြန်ကြည့် အနှစ်ချုပ် ဇယား (Rapid-Fire Table - {filteredItems.length} မေးခွန်း)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              စာမေးပွဲစတင်ရန် ၁၅ မိနစ်အလိုတွင် အလျင်အမြန် ပြန်လှန်ဖတ်ရှုနိုင်ရန်
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-300/30 bg-slate-100/50 dark:bg-slate-800/40 text-[11px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  <th className="py-3 px-3 w-16 text-center">No.</th>
                  <th className="py-3 px-3 w-28 text-center">အခန်း / ID</th>
                  <th className="py-3 px-4 min-w-[240px]">မေးခွန်း အကျဉ်းချုပ်</th>
                  <th className="py-3 px-4 min-w-[280px]">🎯 အလွတ်ကျက်ရမည့် အဖြေမှန် (Key Answer)</th>
                  <th className="py-3 px-4 min-w-[260px]">💡 စာမေးပွဲခန်းဝင် Memory Tip</th>
                  <th className="py-3 px-3 w-20 text-center">Audio / Copy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300/20 text-xs">
                {filteredItems.map(item => {
                  const isStarred = starredIds.has(String(item.id));

                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-amber-500/5 transition-colors ${
                        isStarred ? 'bg-amber-500/10' : ''
                      }`}
                    >
                      {/* Q# */}
                      <td className="py-3 px-3 text-center font-mono font-bold text-slate-400">
                        {item.qNumber}
                      </td>

                      {/* Chapter / ID */}
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300 font-mono font-black text-[10px] block">
                          Ch {item.chapter}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                          {item.id}
                        </span>
                      </td>

                      {/* Question Short */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-800 dark:text-slate-100 line-clamp-2">
                          <JapaneseText text={item.questionJP} />
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                          {item.questionMY}
                        </div>
                      </td>

                      {/* Correct Key Answer */}
                      <td className="py-3 px-4 bg-emerald-500/5 dark:bg-emerald-950/10">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-white font-mono font-black text-[10px]">
                            Opt ({item.correctOptionId})
                          </span>
                        </div>
                        <div className="font-bold text-emerald-900 dark:text-emerald-100">
                          <JapaneseText text={item.correctOptionJP} />
                        </div>
                        <div className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium mt-0.5">
                          {item.correctOptionMY}
                        </div>
                      </td>

                      {/* Memory Tip */}
                      <td className="py-3 px-4 bg-amber-500/5 dark:bg-amber-950/10">
                        <div className="text-amber-800 dark:text-amber-200 font-bold leading-relaxed">
                          {item.memoryTipMY || item.reasonMY}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => handlePlayAudio(String(item.id), item.correctOptionJP)}
                            className={`p-1.5 rounded-lg transition-all ${
                              playingId === String(item.id)
                                ? 'text-blue-600 bg-blue-100 shadow-inner'
                                : 'text-slate-400 hover:text-blue-600'
                            }`}
                            title="Listen Pronunciation"
                          >
                            <SpeakerIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleCopy(
                              String(item.id),
                              `[Ch ${item.chapter} Q${item.qNumber}] ${item.correctOptionJP.replace(/<[^>]+>/g, '')}\n${item.correctOptionMY}\n${item.memoryTipMY}`
                            )}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                            title="Copy"
                          >
                            <CopyIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => toggleStar(item.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500"
                            title={isStarred ? 'Starred' : 'Star'}
                          >
                            {isStarred ? <BookmarkSolidIcon className="w-3.5 h-3.5 text-amber-500" /> : <BookmarkIcon className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bottom Completion Footnote */}
      <div className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset text-center space-y-1">
        <p className="text-xs font-black text-slate-700 dark:text-slate-300">
          2026 Chapter Study 1級 過去問題＆標準仕様書 (Chapter 1 to 5 မေးခွန်း ၁၄၆ ပုဒ်လုံး အကျဉ်းချုပ်)
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          စာမေးပွဲခန်းမဝင်မီ ဤ Cheat Sheet ရှိ အဖြေမှန်များနှင့် Memory Tips များကို ထပ်ခါတလဲလဲ ပြန်လှန်ဖတ်ရှုခြင်းဖြင့် အမှတ်ပြည့်ရရှိနိုင်ပါစေ။
        </p>
      </div>
    </div>
  );
};

export default Chapter2026CheatSheet;
