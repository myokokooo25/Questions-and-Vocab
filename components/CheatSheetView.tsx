import React, { useState, useMemo } from 'react';
import { STEEL_STANDARDS_DATA, STEEL_STANDARDS_CATEGORIES } from '../data/steelStandards';
import {
  JASS6_TOLERANCE_GROUPS,
  ToleranceCategoryGroup
} from '../data/standards/jass6ToleranceTables';
import {
  JASS6_WELDING_PERMISSIBLE_DATA,
  WELDING_PERMISSIBLE_CATEGORIES,
  WeldingPermissibleItem
} from '../data/standards/jass6WeldingPermissibleData';
import {
  WELDING_CLASSIFICATIONS,
  WELDING_PROCESS_COMPARISONS,
  ROBOT_VS_MANUAL_COMPARISON,
  JIS_WELDING_EXAMS,
  INSPECTION_METHODS,
  CHAPTER_HIGH_YIELD_CHECKPOINTS
} from '../data/standards/weldingComparisonData';
import { playJapaneseAudio, stopAudio } from '../lib/audio';
import JapaneseText from './JapaneseText';
import {
  SearchIcon,
  ChevronLeftIcon,
  SpeakerIcon,
  CheckCircleSolidIcon,
  ScaleIcon,
  AcademicCapIcon,
  LightBulbIcon,
  FireIcon,
  CopyIcon,
  BookOpenIcon
} from './Icons';
import Chapter2026CheatSheet from './Chapter2026CheatSheet';

export interface CheatSheetViewProps {
  onGoBack: () => void;
  initialSection?: ActiveSection;
}

export type ActiveSection = 'chapter2026_exam' | 'welding_limits' | 'cards' | 'tolerances_table' | 'welding_deep_dive' | 'inspection_chapters';

export const CheatSheetView: React.FC<CheatSheetViewProps> = ({ onGoBack, initialSection = 'chapter2026_exam' }) => {
  // Default to 2026 Chapter Study 1級 pre-exam memorization cheat sheet
  const [activeSection, setActiveSection] = useState<ActiveSection>(initialSection);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWeldingCategory, setSelectedWeldingCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToleranceGroup, setSelectedToleranceGroup] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Filtered Welding Permissible Data (管理許溶接 & 限界許溶接)
  const filteredWeldingPermissibles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return JASS6_WELDING_PERMISSIBLE_DATA.filter(item => {
      const matchCategory = selectedWeldingCategory === 'all' || item.category === selectedWeldingCategory;
      if (!matchCategory) return false;

      if (!q) return true;
      return (
        item.itemJP.toLowerCase().includes(q) ||
        item.itemMY.toLowerCase().includes(q) ||
        item.categoryTitleJP.toLowerCase().includes(q) ||
        item.categoryTitleMY.toLowerCase().includes(q) ||
        item.standardValueJP.toLowerCase().includes(q) ||
        item.standardValueMY.toLowerCase().includes(q) ||
        item.managementPermissibleJP.toLowerCase().includes(q) ||
        item.managementPermissibleMY.toLowerCase().includes(q) ||
        item.limitPermissibleJP.toLowerCase().includes(q) ||
        item.limitPermissibleMY.toLowerCase().includes(q) ||
        item.remedyActionMY.toLowerCase().includes(q) ||
        item.remedyActionJP.toLowerCase().includes(q) ||
        item.examKeyTipMY.toLowerCase().includes(q)
      );
    });
  }, [selectedWeldingCategory, searchQuery]);

  // Filtered Cards Data
  const filteredCards = useMemo(() => {
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

  // Filtered Tolerance Table Groups
  const filteredToleranceGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return JASS6_TOLERANCE_GROUPS.map(group => {
      if (selectedToleranceGroup !== 'all' && group.id !== selectedToleranceGroup) {
        return null;
      }
      if (!q) return group;

      const filteredRows = group.rows.filter(row => {
        return (
          row.itemJP.toLowerCase().includes(q) ||
          row.itemMY.toLowerCase().includes(q) ||
          row.standardValueJP.toLowerCase().includes(q) ||
          row.standardValueMY.toLowerCase().includes(q) ||
          row.controlToleranceJP.toLowerCase().includes(q) ||
          row.controlToleranceMY.toLowerCase().includes(q) ||
          row.limitToleranceJP.toLowerCase().includes(q) ||
          row.limitToleranceMY.toLowerCase().includes(q) ||
          row.remedyActionMY.toLowerCase().includes(q) ||
          (row.notes && row.notes.toLowerCase().includes(q))
        );
      });

      if (filteredRows.length === 0) return null;
      return { ...group, rows: filteredRows };
    }).filter((g): g is ToleranceCategoryGroup => g !== null);
  }, [selectedToleranceGroup, searchQuery]);

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
      {/* Toast Notification */}
      {copiedId && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-slate-800 text-white text-xs font-bold rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <CheckCircleSolidIcon className="w-4 h-4 text-emerald-400" />
          <span>စံနှုန်း/ဖော်မြူလာအား ကူးယူပြီးပါပြီ (Copied to Clipboard)</span>
        </div>
      )}

      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-6">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset border border-slate-300/20">
          <div className="flex items-center gap-4">
            <button
              onClick={onGoBack}
              className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 active:shadow-neumorphic-inset transition-all"
              title="Go Back"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-100/70 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shadow-neumorphic-inset">
                  <FireIcon className="w-5 h-5" />
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
                  鉄骨 基準・数値まとめ (Cheat Sheet)
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                JASS-6 管理許溶接 & 限界許溶接 ဇယား၊ 融接・圧接・ろう接၊ MAG/MIG၊ JIS 3841 နှင့် အဓိက စံနှုန်းများ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset text-xs font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <span>ဂဟေစံနှုန်း စုစုပေါင်း:</span>
              <span className="text-rose-600 dark:text-rose-400 font-mono text-sm">{JASS6_WELDING_PERMISSIBLE_DATA.length}</span>
              <span>ခု</span>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 p-2 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset">
          {/* 1. 2026 CHAPTER STUDY 1級 PRE-EXAM MEMORIZATION CHEAT SHEET */}
          <button
            onClick={() => setActiveSection('chapter2026_exam')}
            className={`py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 col-span-2 sm:col-span-1 ${
              activeSection === 'chapter2026_exam'
                ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/40'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <AcademicCapIcon className="w-4 h-4 shrink-0 text-amber-500" />
            <span>🎯 2026 1級 (146問)</span>
          </button>

          {/* 2. DEDICATED WELDING PERMISSIBLE SECTION */}
          <button
            onClick={() => setActiveSection('welding_limits')}
            className={`py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'welding_limits'
                ? 'shadow-neumorphic-inset text-rose-600 dark:text-rose-400 bg-rose-50/30'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <FireIcon className="w-4 h-4 shrink-0 text-rose-500" />
            <span>🔥 管理・限界許溶接</span>
          </button>

          {/* 3. ALL STANDARD CARDS */}
          <button
            onClick={() => setActiveSection('cards')}
            className={`py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'cards'
                ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <BookOpenIcon className="w-4 h-4 shrink-0" />
            <span>📚 စံနှုန်းကတ်များ</span>
          </button>

          {/* 4. FABRICATION TOLERANCES TABLE */}
          <button
            onClick={() => setActiveSection('tolerances_table')}
            className={`py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'tolerances_table'
                ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <ScaleIcon className="w-4 h-4 shrink-0" />
            <span>📊 工作精度 ဇယား</span>
          </button>

          {/* 5. WELDING DEEP DIVE */}
          <button
            onClick={() => setActiveSection('welding_deep_dive')}
            className={`py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'welding_deep_dive'
                ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <FireIcon className="w-4 h-4 shrink-0" />
            <span>🔬 工法・JIS 3841</span>
          </button>

          {/* 6. INSPECTION & CHAPTERS */}
          <button
            onClick={() => setActiveSection('inspection_chapters')}
            className={`py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeSection === 'inspection_chapters'
                ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 shadow-neumorphic-outset'
            }`}
          >
            <AcademicCapIcon className="w-4 h-4 shrink-0" />
            <span>🔍 検査 & Ch 1~5</span>
          </button>
        </div>

        {/* Search Bar (Only shown for other tabs, since 2026 exam cheat sheet has its own dedicated search & chapter filter) */}
        {activeSection !== 'chapter2026_exam' && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-slate-400">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="စံနှုန်း၊ ကိန်းဂဏန်း (ဥပမာ- 管理許容差, 7mm, ±1.5mm, 16mm, Undercut 0.5mm, 350℃, 1:2.5) ရှာဖွေရန်..."
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-neumorphic-bg rounded-2xl sm:rounded-3xl shadow-neumorphic-inset text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
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
        )}

        {/* ============================================================== */}
        {/* NEW SECTION: 2026 CHAPTER STUDY 1級 PRE-EXAM MEMORIZATION CHEAT */}
        {/* ============================================================== */}
        {activeSection === 'chapter2026_exam' && (
          <Chapter2026CheatSheet />
        )}

        {/* ============================================================== */}
        {/* NEW SECTION: JASS-6 管理許溶接 & 限界許溶接 COMPREHENSIVE TABLE */}
        {/* ============================================================== */}
        {activeSection === 'welding_limits' && (
          <div className="space-y-6">

            {/* Visual Engineering Concept Explainer Banner */}
            <div className="p-5 sm:p-7 rounded-3xl bg-neumorphic-bg shadow-neumorphic-outset border-2 border-rose-400/30 space-y-4">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 shadow-neumorphic-inset">
                    <FireIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2.5 py-0.5 rounded-md">
                      JASS 6 鉄骨工事 溶接基準表
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1">
                      「管理許溶接」&「限界許溶接」判定基準 ဇယားကြီး
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-bold mt-0.5">
                      Management Permissible Welding vs Limit Permissible Welding Standards
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-black text-slate-600 dark:text-slate-300 shadow-neumorphic-inset">
                    ရလဒ်: <span className="text-rose-600 dark:text-rose-400 font-mono text-sm">{filteredWeldingPermissibles.length}</span> ခု
                  </div>
                </div>
              </div>

              {/* 3 Pillars Visual Comparison Gauge */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                {/* Pillar 1: 管理許溶接 */}
                <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border-2 border-sky-400/40 shadow-neumorphic-inset flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-black text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                        🎯 管理許溶接 (Target Control)
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200">
                        日常品質目標
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed mt-2">
                      စက်ရုံထုတ်လုပ်မှု ပုံမှန်လည်ပတ်နေစဉ် ရရှိထိန်းသိမ်းရမည့် စံနှုန်းဖြစ်သည်။
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-sky-300/40 text-[11px] font-medium text-sky-800 dark:text-sky-300">
                    💡 ဤပမာဏကျော်ပါက အကြောင်းရင်းကို စစ်ဆေးပြီး လုပ်ငန်းစဉ်ကို ညှိယူရမည်။
                  </div>
                </div>

                {/* Pillar 2: 限界許溶接 */}
                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border-2 border-rose-400/40 shadow-neumorphic-inset flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-black text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        ⛔ 限界許溶接 (Safety Limit)
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200">
                        最終許容限界
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed mt-2">
                      အဆောက်အအုံ ဖွဲ့စည်းပုံအရ ဘေးကင်းစိတ်ချရသည့် နောက်ဆုံးအဆင့် ကန့်သတ်ချက်ဖြစ်သည်။
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-rose-300/40 text-[11px] font-medium text-rose-800 dark:text-rose-300">
                    ⚠️ ဤပမာဏကျော်လွန်ပါက စာမေးပွဲနှင့် လုပ်ငန်းခွင်အရ လုံးဝ လက်မခံပါ။
                  </div>
                </div>

                {/* Pillar 3: 限界超過時の補修処置 */}
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border-2 border-amber-400/40 shadow-neumorphic-inset flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-black text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        🛠️ 限界超過時の処置 (Remedy)
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                        補修又は取替え
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed mt-2">
                      ကန့်သတ်ချက် ကျော်လွန်ပါက သတ်မှတ်နည်းလမ်းဖြင့်သာ ပြုပြင်ခွင့်ရှိသည်။
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-amber-300/40 text-[11px] font-medium text-amber-800 dark:text-amber-300">
                    📌 ဥပမာ: 9~16mm 肉盛り補修可, 16mm超 部材取替え, 1:2.5 以下の勾配削り။
                  </div>
                </div>
              </div>
            </div>

            {/* Category Sub-Filters */}
            <div className="bg-neumorphic-bg p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-neumorphic-inset flex flex-wrap gap-1.5 sm:gap-2">
              {WELDING_PERMISSIBLE_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedWeldingCategory(cat.id)}
                  className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    selectedWeldingCategory === cat.id
                      ? 'shadow-neumorphic-inset text-rose-600 dark:text-rose-400 bg-rose-50/30'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{cat.labelMY}</span>
                </button>
              ))}
            </div>

            {/* Comprehensive Table Component */}
            {filteredWeldingPermissibles.length === 0 ? (
              <div className="text-center py-16 px-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset text-slate-400 font-bold">
                ရှာဖွေမှုနှင့် ကိုက်ညီသော ဂဟေစံနှုန်း မတွေ့ရှိပါ။
              </div>
            ) : (
              <div className="space-y-4">
                {/* Desktop View Table */}
                <div className="hidden lg:block overflow-x-auto rounded-3xl shadow-neumorphic-outset bg-neumorphic-bg p-4 border border-slate-300/30">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-300/50 text-[11px] font-black uppercase text-slate-500 dark:text-slate-400">
                        <th className="py-3 px-3 w-[25%]">項目 (Item & Japanese)</th>
                        <th className="py-3 px-2 w-[12%] text-center">標準値 (Standard)</th>
                        <th className="py-3 px-3 w-[18%] text-center text-sky-700 dark:text-sky-300 bg-sky-50/40 dark:bg-sky-950/20 rounded-t-xl">
                          🎯 管理許溶接 (Target)
                        </th>
                        <th className="py-3 px-3 w-[18%] text-center text-rose-700 dark:text-rose-300 bg-rose-50/40 dark:bg-rose-950/20 rounded-t-xl">
                          ⛔ 限界許溶接 (Limit)
                        </th>
                        <th className="py-3 px-3 w-[27%]">ကျော်လွန်ပါက ပြုပြင်မှု (Remedy) & စာမေးပွဲ အမှတ်</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300/30 font-medium text-slate-700 dark:text-slate-200">
                      {filteredWeldingPermissibles.map(item => (
                        <tr key={item.id} className="hover:bg-slate-200/30 dark:hover:bg-slate-800/30 transition-colors">
                          {/* Item Column */}
                          <td className="py-4 px-3 align-top">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                                item.examImportance === 'critical'
                                  ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                                  : item.examImportance === 'very_high'
                                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300'
                                  : 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                              }`}>
                                {item.examImportance.toUpperCase()}
                              </span>
                              <span className="text-[10px] font-bold text-slate-400">
                                {item.categoryTitleMY}
                              </span>
                            </div>
                            <div className="font-black text-slate-900 dark:text-slate-100 text-sm leading-snug">
                              {item.itemMY}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                              <JapaneseText text={item.itemJP} />
                              <button
                                onClick={() => handlePlayAudio(item.id, item.itemJP)}
                                className={`p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${
                                  playingId === item.id ? 'text-blue-600' : 'text-slate-400'
                                }`}
                                title="Pronounce"
                              >
                                <SpeakerIcon className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>

                          {/* Standard Value */}
                          <td className="py-4 px-2 align-top text-center">
                            <span className="inline-block px-2.5 py-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 font-mono font-black text-xs shadow-neumorphic-inset">
                              {item.standardValueMY}
                            </span>
                            <div className="text-[10px] text-slate-400 mt-1 font-mono">
                              {item.standardValueJP}
                            </div>
                          </td>

                          {/* Management Permissible (管理許溶接) */}
                          <td className="py-4 px-3 align-top text-center bg-sky-50/20 dark:bg-sky-950/10">
                            <div className="inline-block px-3 py-1.5 rounded-2xl bg-sky-100 dark:bg-sky-950/80 border border-sky-400/50 text-sky-800 dark:text-sky-200 font-mono font-black text-xs sm:text-sm shadow-neumorphic-outset">
                              {item.managementPermissibleMY}
                            </div>
                            <div className="text-[10px] text-sky-600 dark:text-sky-400 mt-1 font-mono font-bold">
                              {item.managementPermissibleJP}
                            </div>
                          </td>

                          {/* Limit Permissible (限界許溶接) */}
                          <td className="py-4 px-3 align-top text-center bg-rose-50/20 dark:bg-rose-950/10">
                            <div className="inline-block px-3 py-1.5 rounded-2xl bg-rose-100 dark:bg-rose-950/80 border border-rose-400/50 text-rose-800 dark:text-rose-200 font-mono font-black text-xs sm:text-sm shadow-neumorphic-outset">
                              {item.limitPermissibleMY}
                            </div>
                            <div className="text-[10px] text-rose-600 dark:text-rose-400 mt-1 font-mono font-bold">
                              {item.limitPermissibleJP}
                            </div>
                          </td>

                          {/* Remedy Action & Exam Tip */}
                          <td className="py-4 px-3 align-top text-xs leading-relaxed space-y-2">
                            <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-amber-300/40">
                              <span className="font-black text-[10px] uppercase text-amber-700 dark:text-amber-400 block mb-0.5">
                                🛠️ ကျော်လွန်ပါက ပြုပြင်မှု (Remedy):
                              </span>
                              <p className="font-medium">{item.remedyActionMY}</p>
                            </div>
                            <div className="text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-start gap-1">
                              <LightBulbIcon className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                              <span>{item.examKeyTipMY}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile / Tablet Responsive Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
                  {filteredWeldingPermissibles.map(item => (
                    <div
                      key={item.id}
                      className="p-5 rounded-3xl bg-neumorphic-bg shadow-neumorphic-outset border border-slate-300/30 space-y-3 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                              item.examImportance === 'critical'
                                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                                : 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300'
                            }`}>
                              {item.examImportance.toUpperCase()}
                            </span>
                            <h3 className="text-base font-black text-slate-900 dark:text-slate-100 mt-1">
                              {item.itemMY}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              <JapaneseText text={item.itemJP} />
                            </div>
                          </div>

                          <button
                            onClick={() => handlePlayAudio(item.id, item.itemJP)}
                            className="p-2 rounded-xl shadow-neumorphic-outset active:shadow-neumorphic-inset text-slate-500 shrink-0"
                            title="Pronounce"
                          >
                            <SpeakerIcon className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Standard Value */}
                        <div className="p-2.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 flex items-center justify-between text-xs font-bold mb-3">
                          <span className="text-slate-500 uppercase text-[10px]">標準値 (Standard):</span>
                          <span className="font-mono font-black text-slate-900 dark:text-slate-100">
                            {item.standardValueMY}
                          </span>
                        </div>

                        {/* Dual Permissible Cards */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* 管理許溶接 */}
                          <div className="p-3 rounded-2xl bg-sky-50/80 dark:bg-sky-950/50 border border-sky-400/40 shadow-neumorphic-inset space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-300 block">
                              🎯 管理許溶接
                            </span>
                            <div className="font-mono font-black text-xs sm:text-sm text-sky-900 dark:text-sky-100">
                              {item.managementPermissibleMY}
                            </div>
                            <div className="text-[10px] text-sky-600 dark:text-sky-400 font-mono">
                              {item.managementPermissibleJP}
                            </div>
                          </div>

                          {/* 限界許溶接 */}
                          <div className="p-3 rounded-2xl bg-rose-50/80 dark:bg-rose-950/50 border border-rose-400/40 shadow-neumorphic-inset space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-300 block">
                              ⛔ 限界許溶接
                            </span>
                            <div className="font-mono font-black text-xs sm:text-sm text-rose-900 dark:text-rose-100">
                              {item.limitPermissibleMY}
                            </div>
                            <div className="text-[10px] text-rose-600 dark:text-rose-400 font-mono">
                              {item.limitPermissibleJP}
                            </div>
                          </div>
                        </div>

                        {/* Remedy Action */}
                        <div className="mt-3 p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-amber-300/40 text-xs">
                          <span className="font-black text-[10px] uppercase text-amber-700 dark:text-amber-400 block mb-0.5">
                            🛠️ ကျော်လွန်ပါက ပြုပြင်မှု (Remedy):
                          </span>
                          <p className="leading-relaxed">{item.remedyActionMY}</p>
                        </div>
                      </div>

                      {/* Exam Tip */}
                      <div className="mt-3 pt-3 border-t border-slate-300/30 flex items-start gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <LightBulbIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p>{item.examKeyTipMY}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* SECTION 2: ALL STANDARD CARDS */}
        {activeSection === 'cards' && (
          <div className="space-y-6">
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

            {/* Standards Cards Grid */}
            {filteredCards.length === 0 ? (
              <div className="text-center py-16 px-6 bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset text-slate-400 font-bold">
                ရှာဖွေမှုနှင့် ကိုက်ညီသော စံနှုန်း မတွေ့ရှိပါ။
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {filteredCards.map(item => (
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
                          className={`p-2.5 rounded-xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all shrink-0 ${
                            playingId === item.id ? 'text-blue-600 shadow-neumorphic-inset' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                          }`}
                          title="ဂျပန်အသံထွက် နားထောင်ရန်"
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
                              className="text-[10px] font-black px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 transition-colors flex items-center gap-1"
                              title="Copy standard value"
                            >
                              <CopyIcon className="w-3 h-3" />
                              <span>Copy</span>
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
                          <div className="mt-2 pt-2 border-t border-slate-300/30 flex items-center gap-2 flex-wrap">
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
        )}

        {/* SECTION 3: JASS 6 GENERAL FABRICATION TOLERANCES TABLE */}
        {activeSection === 'tolerances_table' && (
          <div className="space-y-6">
            {/* Tolerances Group Selector */}
            <div className="bg-neumorphic-bg p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-neumorphic-inset flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedToleranceGroup('all')}
                className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  selectedToleranceGroup === 'all'
                    ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                ဇယားအားလုံး (All Tolerances)
              </button>
              {JASS6_TOLERANCE_GROUPS.map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedToleranceGroup(g.id)}
                  className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    selectedToleranceGroup === g.id
                      ? 'shadow-neumorphic-inset text-amber-600 dark:text-amber-400 bg-amber-50/20'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {g.badge}
                </button>
              ))}
            </div>

            {/* Tolerance Table Groups */}
            {filteredToleranceGroups.map(group => (
              <div
                key={group.id}
                className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-4 sm:p-6 border border-slate-300/20 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-300/30 pb-3">
                  <div>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 mr-2">
                      {group.badge}
                    </span>
                    <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 inline-block align-middle">
                      {group.titleMY}
                    </h2>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                      {group.titleJP}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    {group.rows.length} မျိုး
                  </span>
                </div>

                {/* Table Component */}
                <div className="overflow-x-auto rounded-2xl shadow-neumorphic-inset bg-neumorphic-bg p-1">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[720px]">
                    <thead>
                      <tr className="border-b border-slate-300/40 text-[11px] sm:text-xs font-black uppercase text-slate-500 dark:text-slate-400">
                        <th className="py-3 px-3 sm:px-4 w-[28%]">項目 (Item / စံနှုန်း)</th>
                        <th className="py-3 px-3 w-[15%]">標準値 (Standard)</th>
                        <th className="py-3 px-3 w-[18%] text-blue-600 dark:text-blue-400">管理許容差 (Control)</th>
                        <th className="py-3 px-3 w-[18%] text-rose-600 dark:text-rose-400">限界許容差 (Limit)</th>
                        <th className="py-3 px-3 w-[21%]">ကျော်လွန်ပါက ပြုပြင်မှု (Remedy)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300/30 font-medium text-slate-700 dark:text-slate-200">
                      {group.rows.map(row => (
                        <tr key={row.id} className="hover:bg-slate-200/30 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="py-3.5 px-3 sm:px-4 align-top">
                            <div className="font-black text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-snug">
                              {row.itemMY}
                            </div>
                            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                              {row.itemJP}
                            </div>
                            {row.notes && (
                              <div className="mt-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                                <span>📌 {row.notes}</span>
                              </div>
                            )}
                          </td>

                          <td className="py-3.5 px-3 align-top font-mono font-bold text-slate-800 dark:text-slate-200">
                            <div>{row.standardValueMY}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{row.standardValueJP}</div>
                          </td>

                          <td className="py-3.5 px-3 align-top">
                            <span className="inline-block px-2 py-1 rounded-lg bg-blue-100/70 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-black text-xs sm:text-sm">
                              {row.controlToleranceMY}
                            </span>
                            <div className="text-[10px] text-slate-400 mt-1 font-mono">{row.controlToleranceJP}</div>
                          </td>

                          <td className="py-3.5 px-3 align-top">
                            <span className="inline-block px-2 py-1 rounded-lg bg-rose-100/70 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-mono font-black text-xs sm:text-sm">
                              {row.limitToleranceMY}
                            </span>
                            <div className="text-[10px] text-slate-400 mt-1 font-mono">{row.limitToleranceJP}</div>
                          </td>

                          <td className="py-3.5 px-3 align-top text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                            <p>{row.remedyActionMY}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECTION 4: WELDING DEEP-DIVE (融接・圧接・ろう接 / MAG vs MIG / JIS 3841 / ロボット溶接) */}
        {activeSection === 'welding_deep_dive' && (
          <div className="space-y-8">
            
            {/* PART 1: 融接・圧接・ろう接 ၃ မျိုး နှိုင်းယှဉ်ချက်နှင့် အလွတ်မှတ်နည်း */}
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-300/30 pb-3">
                <span className="p-2 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 shadow-neumorphic-inset">
                  <FireIcon className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100">
                    ① 接合・溶接の3大分類 (融接・圧接・ろう接) နှင့် အလွတ်မှတ်နည်း
                  </h2>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    စာမေးပွဲတွင် အမြဲမေးလေ့ရှိသော သံမဏိနှင့် သတ္တုဆက်စပ်နည်း ၃ မျိုး၏ အဓိက သဘောတရားများ
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {WELDING_CLASSIFICATIONS.map(cls => (
                  <div
                    key={cls.typeJP}
                    className="p-4 sm:p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-amber-400/20 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300">
                          {cls.kanjiMeaning}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
                        {cls.typeMY}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                        {cls.typeJP}
                      </p>

                      <div className="my-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                        <p>{cls.principleMY}</p>
                      </div>

                      {/* Included Processes */}
                      <div className="space-y-1.5 mt-2">
                        <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                          ပါဝင်သော နည်းလမ်းများ (Methods):
                        </span>
                        <ul className="text-xs font-bold text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                          {cls.methodsMY.map((m, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-300/30 space-y-2">
                      <div className="p-2.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-xs font-bold leading-relaxed">
                        {cls.mnemonicMY}
                      </div>
                      <p className="text-[11px] font-medium text-rose-600 dark:text-rose-400">
                        ⚠️ {cls.examPointsMY}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PART 2: MAG vs MIG vs TIG vs 被覆アーク手溶接 (SMAW) နှိုင်းယှဉ်ဇယား */}
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-4">
              <div className="border-b border-slate-300/30 pb-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300">
                  WELDING PROCESS MATRIX
                </span>
                <h2 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                  ② MAG vs MIG vs TIG vs 被覆アーク手溶接 နှိုင်းယှဉ်ချက် ဇယားကြီး
                </h2>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  အသုံးအများဆုံး ဂဟေဆက်နည်း ၄ မျိုး၏ ကာကွယ်ဓာတ်ငွေ့၊ အသုံးပြုနိုင်သော သတ္တုနှင့် ထူးခြားချက်များ
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl shadow-neumorphic-inset bg-neumorphic-bg p-1">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[760px]">
                  <thead>
                    <tr className="border-b border-slate-300/40 text-[11px] sm:text-xs font-black uppercase text-slate-500 dark:text-slate-400">
                      <th className="py-3 px-3 w-[18%]">ဂဟေအမျိုးအစား (Process)</th>
                      <th className="py-3 px-3 w-[24%] text-blue-600 dark:text-blue-400">ကာကွယ်ဓာတ်ငွေ့ (Shielding Gas)</th>
                      <th className="py-3 px-3 w-[22%]">အသုံးပြုသော သတ္တု (Metals)</th>
                      <th className="py-3 px-3 w-[18%]">Arc နှင့် Spatter အခြေအနေ</th>
                      <th className="py-3 px-3 w-[18%] text-amber-600 dark:text-amber-400">စာမေးပွဲ လှည့်ကွက် (Exam Pitfall)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300/30 font-medium text-slate-700 dark:text-slate-200">
                    {WELDING_PROCESS_COMPARISONS.map(proc => (
                      <tr key={proc.name} className="hover:bg-slate-200/30 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3.5 px-3 align-top">
                          <div className="font-black text-slate-900 dark:text-slate-100 text-sm">
                            {proc.name}
                          </div>
                          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            {proc.fullForm}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-1 font-mono">
                            {proc.electrodeTypeJP}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 align-top">
                          <div className="font-black text-blue-700 dark:text-blue-300 text-xs sm:text-sm">
                            {proc.shieldingGasMY}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                            {proc.shieldingGasJP}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 align-top text-xs leading-relaxed">
                          {proc.applicableMetalsMY}
                        </td>

                        <td className="py-3.5 px-3 align-top text-xs leading-relaxed">
                          <div>{proc.arcCharacteristicsMY}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                            {proc.spatterAndQualityMY}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 align-top text-xs leading-relaxed font-bold text-amber-700 dark:text-amber-300">
                          {proc.examTrapMY}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* PART 3: ロボット溶接 (Robot Welding) vs 手溶接 (Manual Welding) */}
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-4">
              <div className="border-b border-slate-300/30 pb-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                  ROBOT VS MANUAL
                </span>
                <h2 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                  ③ 建築鉄骨 ロボット溶接 (Robot) vs 手溶接 (Manual) နှိုင်းယှဉ်ချက်
                </h2>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  စက်ရုံထုတ်လုပ်မှုတွင် သုံးသော ဂဟေစက်ရုပ် (Robot Welding) နှင့် လူကိုယ်တိုင်ဆော်သော လက်ဂဟေ စည်းမျဉ်းများ
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ROBOT_VS_MANUAL_COMPARISON.map((comp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-slate-300/20 space-y-2">
                    <h3 className="text-xs font-black uppercase text-amber-600 dark:text-amber-400">
                      {comp.itemJP}
                    </h3>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200">
                        <span className="font-black text-blue-600 dark:text-blue-400 block mb-0.5">🤖 ロボット溶接 (Robot):</span>
                        <p className="font-medium leading-relaxed">{comp.robotMY}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{comp.robotJP}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200">
                        <span className="font-black text-slate-600 dark:text-slate-400 block mb-0.5">👨‍🏭 手溶接 (Manual):</span>
                        <p className="font-medium leading-relaxed">{comp.manualMY}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{comp.manualJP}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PART 4: JIS Z 3801 & JIS Z 3841 (JIS 3840/3841) 資格・検定詳細 */}
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-4">
              <div className="border-b border-slate-300/30 pb-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300">
                  JIS WELDING CERTIFICATIONS
                </span>
                <h2 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                  ④ JIS Z 3801 (手溶接) & JIS Z 3841 (半自動溶接) 検定規格
                </h2>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  ဂဟေဆော်သူများ၏ အရည်အချင်းစစ် စာမေးပွဲစံနှုန်း၊ လက်မှတ်သက်တမ်းနှင့် အရေးကြီးသော စည်းကမ်းများ
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {JIS_WELDING_EXAMS.map(exam => (
                  <div key={exam.code} className="p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-purple-400/20 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono font-black text-sm">
                        {exam.code}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-800 dark:text-slate-100">
                      {exam.titleMY}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {exam.titleJP}
                    </p>

                    <div className="space-y-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                      <div className="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/40">
                        <span className="font-black text-slate-500 block mb-0.5">ပစ်မှတ်ထားသော ဂဟေနည်း:</span>
                        <p>{exam.targetMethod}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/40">
                        <span className="font-black text-slate-500 block mb-0.5">နမူနာ လက်မှတ်အဆင့်များ:</span>
                        <code className="text-purple-600 dark:text-purple-400 font-mono font-black">{exam.qualificationsSample}</code>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
                        <span className="font-black block mb-0.5">⏳ သက်တမ်းနှင့် နှစ်စဉ်အတည်ပြုချက်:</span>
                        <p>{exam.validityMY}</p>
                        <p className="mt-1">{exam.surveillanceMY}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-bold">
                        <span className="font-black block mb-0.5">⚠️ စာမေးပွဲ အဓိက အချက်:</span>
                        <p>{exam.examCrucialPointsMY}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* SECTION 5: INSPECTION & 2026 CHAPTERS 1~5 HIGH-YIELD REVIEW */}
        {activeSection === 'inspection_chapters' && (
          <div className="space-y-8">
            
            {/* PART 1: 検査 (Inspection) & NDT 4 大工法 */}
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-4">
              <div className="border-b border-slate-300/30 pb-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300">
                  QUALITY & NDT INSPECTION
                </span>
                <h2 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                  ① 鉄骨非破壊検査 (NDT) 4大工法 နှိုင်းယှဉ်ချက်
                </h2>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  UT (超音波), MT (磁粉), PT (浸透), RT (放射線) တို့၏ ရှာဖွေနိုင်သော ချို့ယွင်းချက်များနှင့် စံနှုန်းများ
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {INSPECTION_METHODS.map(ins => (
                  <div key={ins.method} className="p-4 sm:p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-slate-300/20 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-mono font-black text-sm">
                        {ins.method}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {ins.nameJP}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-800 dark:text-slate-100">
                      {ins.nameMY}
                    </h3>

                    <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                      <div className="p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/40">
                        <span className="font-black text-slate-500 block mb-0.5">ရှာဖွေနိုင်သော ချို့ယွင်းချက်:</span>
                        <p className="font-medium leading-relaxed">{ins.targetDefectMY}</p>
                      </div>
                      <div className="p-2 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200">
                        <span className="font-black block mb-0.5">အောင်/ကျ စံနှုန်း (Acceptance):</span>
                        <p className="font-medium leading-relaxed">{ins.acceptanceCriteriaMY}</p>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 font-bold">
                        <span>💡 {ins.examPointMY}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* UT Sampling Rate Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-outset border border-amber-400/30 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-sm font-black text-slate-800 dark:text-slate-100">
                    စက်ရုံအဆင့် (Factory Grade) အလိုက် UT စစ်ဆေးရမည့် နှုန်းထားနှင့် ၂ ဆ စစ်ဆေးခြင်း:
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    M Grade: 10% ｜ H Grade: 20% ｜ S Grade: 30% (Lot အတွင်း ကျရှုံးပါက ထပ်မံ ၂ ဆ 2倍 追検査 စစ်ဆေးရမည်)
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono font-black text-xs">
                  <span className="px-2.5 py-1.5 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">M: 10%</span>
                  <span className="px-2.5 py-1.5 rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">H: 20%</span>
                  <span className="px-2.5 py-1.5 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">S: 30%</span>
                </div>
              </div>
            </div>

            {/* PART 2: 2026 Chapter Study 1, 2, 3, 4, 5 High-Yield Checkpoints */}
            <div className="bg-neumorphic-bg rounded-3xl shadow-neumorphic-outset p-5 sm:p-7 border border-slate-300/20 space-y-6">
              <div className="border-b border-slate-300/30 pb-3">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300">
                  2026 CHAPTER STUDY CHECKLIST
                </span>
                <h2 className="text-base sm:text-xl font-black text-slate-800 dark:text-slate-100 mt-1">
                  ② 2026 Chapter 1 to 5 အဓိက High-Yield စံနှုန်းများ အနှစ်ချုပ်
                </h2>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                  စာမေးပွဲမေးခွန်းများမှ အမေးအများဆုံး ကိန်းဂဏန်းနှင့် အချက်အလက်များကို အခန်းလိုက် စုစည်းထားခြင်း
                </p>
              </div>

              <div className="space-y-6">
                {CHAPTER_HIGH_YIELD_CHECKPOINTS.map(ch => (
                  <div key={ch.chapter} className="p-4 sm:p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset border border-slate-300/20 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-white font-mono font-black text-xs">
                        {ch.chapter}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-slate-800 dark:text-slate-100">
                        {ch.chapterTitleMY}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {ch.keyPoints.map((pt, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 space-y-1.5 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-black text-slate-900 dark:text-slate-100">
                              {pt.titleMY}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400">
                              {pt.titleJP}
                            </p>
                            <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                              {pt.standardRule}
                            </p>
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-300/30 text-[10px] font-bold text-amber-700 dark:text-amber-300">
                            💡 {pt.examTip}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CheatSheetView;
