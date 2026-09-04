import React, { useState, useMemo, useEffect } from 'react';
import { getTechnicalDictionary, DictionaryEntry } from '../lib/dictionary';
import { playJapaneseAudio, playSequentialJapaneseAudio, stopAudio } from '../lib/audio';
import { kanjiDictionary } from '../data/kanji';
import { Kanji } from '../types';
import KanjiTooltip from './KanjiTooltip';
import JapaneseText from './JapaneseText';
import {
  SearchIcon,
  SpeakerIcon,
  BookmarkIcon,
  BookmarkSolidIcon,
  ChevronLeftIcon,
  SparkleIcon,
  BookOpenIcon,
  AcademicCapIcon,
  CheckCircleSolidIcon
} from './Icons';

interface TechnicalDictionaryProps {
  onGoBack: () => void;
}

const GOJUON_ROWS = [
  { label: 'All', value: 'all' },
  { label: 'あ', chars: ['あ', 'い', 'う', 'え', 'お', 'ア', 'イ', 'ウ', 'エ', 'オ'] },
  { label: 'か', chars: ['か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'カ', 'キ', 'ク', 'ケ', 'コ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ'] },
  { label: 'さ', chars: ['さ', 'し', 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'] },
  { label: 'た', chars: ['た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド'] },
  { label: 'な', chars: ['な', 'に', 'ぬ', 'ね', 'န', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ'] },
  { label: 'は', chars: ['は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ'] },
  { label: 'ま', chars: ['ま', 'み', 'む', 'め', 'も', 'マ', 'ミ', 'ム', 'メ', 'モ'] },
  { label: 'や', chars: ['や', 'ゆ', 'よ', 'ヤ', 'ユ', 'ヨ'] },
  { label: 'ら', chars: ['ら', 'り', 'る', 'れ', 'ろ', 'ラ', 'リ', 'ル', 'レ', 'ロ'] },
  { label: 'わ', chars: ['わ', 'を', 'ん', 'ワ', 'ヲ', 'ン'] },
];

export const TechnicalDictionary: React.FC<TechnicalDictionaryProps> = ({ onGoBack }) => {
  const dictionary = useMemo(() => getTechnicalDictionary(), []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGojuon, setSelectedGojuon] = useState('all');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [showOnlyFrequent, setShowOnlyFrequent] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  // Bookmarks state (persisted locally)
  const [bookmarkedTerms, setBookmarkedTerms] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dict_bookmarked_terms');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Audio state
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  // Copy toast state
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  // Expanded card state for detailed occurrences
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // Kanji Tooltip state
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
  const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  // Save bookmarks
  const toggleBookmark = (term: string) => {
    setBookmarkedTerms(prev => {
      const next = prev.includes(term) ? prev.filter(t => t !== term) : [...prev, term];
      try {
        localStorage.setItem('dict_bookmarked_terms', JSON.stringify(next));
      } catch (err) {
        console.warn('Failed to save bookmark:', err);
      }
      return next;
    });
  };

  // Extract all unique chapters and types for filters
  const chapterOptions = useMemo(() => {
    const set = new Set<string>();
    dictionary.forEach(entry => entry.chapters.forEach(ch => set.add(ch)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [dictionary]);

  const typeOptions = useMemo(() => {
    const set = new Set<string>();
    dictionary.forEach(entry => entry.types.forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, [dictionary]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // Filtered dictionary
  const filteredEntries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return dictionary.filter(entry => {
      // Favorites filter
      if (showOnlyFavorites && !bookmarkedTerms.includes(entry.term)) {
        return false;
      }

      // High frequency filter (words appearing across 2+ questions)
      if (showOnlyFrequent && entry.frequency < 2) {
        return false;
      }

      // Chapter filter
      if (selectedChapter !== 'all' && !entry.chapters.includes(selectedChapter)) {
        return false;
      }

      // Type filter
      if (selectedType !== 'all' && !entry.types.includes(selectedType)) {
        return false;
      }

      // Gojuon / Alphabet filter
      if (selectedGojuon !== 'all') {
        const row = GOJUON_ROWS.find(r => r.label === selectedGojuon);
        if (row && row.chars) {
          const firstChar = (entry.reading || entry.term)[0];
          if (!row.chars.includes(firstChar)) {
            return false;
          }
        }
      }

      // Text search matching Japanese term, reading, romaji, Burmese, English, or source question
      if (query) {
        const matchTerm = entry.term.toLowerCase().includes(query);
        const matchReading = entry.reading.toLowerCase().includes(query);
        const matchRomaji = entry.romaji.includes(query);
        const matchBurmese = entry.burmese.toLowerCase().includes(query);
        const matchEnglish = entry.english.toLowerCase().includes(query);
        const matchAllDefs = entry.allDefinitions.some(d => d.toLowerCase().includes(query));
        const matchQuestions = entry.sourceQuestions.some(q => q.toLowerCase().includes(query));

        if (!matchTerm && !matchReading && !matchRomaji && !matchBurmese && !matchEnglish && !matchAllDefs && !matchQuestions) {
          return false;
        }
      }

      return true;
    });
  }, [dictionary, searchQuery, selectedGojuon, selectedChapter, selectedType, showOnlyFavorites, showOnlyFrequent, bookmarkedTerms]);

  // Audio Playback
  const handlePlayAudio = (text: string, id: string) => {
    if (isPlayingAll) {
      stopAudio();
      setIsPlayingAll(false);
    }

    if (playingId === id) {
      stopAudio();
      setPlayingId(null);
      return;
    }

    setPlayingId(id);
    playJapaneseAudio(text, {
      onStart: () => setPlayingId(id),
      onEnd: () => setPlayingId(null),
      onError: () => setPlayingId(null)
    });
  };

  const handleTogglePlayAll = () => {
    if (isPlayingAll) {
      stopAudio();
      setIsPlayingAll(false);
      setPlayingId(null);
      return;
    }

    if (filteredEntries.length === 0) return;

    setIsPlayingAll(true);
    const playlist = filteredEntries.slice(0, 50).map(entry => ({
      id: entry.id,
      text: entry.reading || entry.term
    }));

    playSequentialJapaneseAudio(
      playlist,
      activeId => setPlayingId(activeId),
      () => {
        setIsPlayingAll(false);
        setPlayingId(null);
      }
    );
  };

  // Copy to clipboard
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTerm(label);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  // Kanji click handler
  const handleKanjiClick = (char: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const kanjiData = kanjiDictionary[char] || null;
    const rect = e.currentTarget.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    let top = rect.bottom + scrollTop + 8;
    let left = rect.left + scrollLeft - 100;
    if (left < 10) left = 10;
    if (typeof window !== 'undefined' && left + 340 > window.innerWidth) {
      left = Math.max(10, window.innerWidth - 350);
    }

    setSelectedKanji(kanjiData);
    setSelectedKanjiChar(char);
    setTooltipPos({ top, left });
  };

  return (
    <div className="min-h-screen bg-neumorphic-bg text-slate-700 py-6 px-3 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      {/* Kanji Tooltip Modal */}
      {selectedKanjiChar && (
        <KanjiTooltip
          kanjiData={selectedKanji}
          kanjiChar={selectedKanjiChar}
          questionId={undefined}
          position={tooltipPos}
          onClose={() => {
            setSelectedKanji(null);
            setSelectedKanjiChar(null);
          }}
        />
      )}

      {/* Copy Toast Alert */}
      {copiedTerm && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-slate-800 text-white text-xs font-bold rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <CheckCircleSolidIcon className="w-4 h-4 text-emerald-400" />
          <span>"{copiedTerm}" ကို ကူးယူပြီးပါပြီ (Copied to Clipboard)</span>
        </div>
      )}

      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-6">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset">
          <div className="flex items-center gap-4">
            <button
              onClick={onGoBack}
              className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-800 active:shadow-neumorphic-inset transition-all"
              title="Go Back to Main Menu"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100/60 text-blue-600 shadow-neumorphic-inset">
                  <BookOpenIcon className="w-5 h-5" />
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
                  Technical Dictionary (ဝေါဟာရ အဘိဓာန်)
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                မေးခွန်းများအားလုံးရှိ နည်းပညာဝေါဟာရများကို စုစည်း၍ အပြည့်စုံဆုံး အဓိပ္ပာယ်များဖြင့် ရှာဖွေလေ့လာနိုင်ပါသည်
              </p>
            </div>
          </div>

          {/* Quick Stat Pill & Play All */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset text-center">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">စုစုပေါင်း</span>
              <span className="text-sm font-black text-blue-600">{dictionary.length} စာလုံး</span>
            </div>

            <button
              onClick={handleTogglePlayAll}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                isPlayingAll
                  ? 'text-red-500 bg-red-50/70 shadow-neumorphic-inset ring-2 ring-red-400/40 animate-pulse'
                  : 'text-blue-600 bg-neumorphic-bg shadow-neumorphic-outset hover:text-blue-700 active:shadow-neumorphic-inset'
              }`}
              title={isPlayingAll ? 'Stop audio' : 'Play pronunciation for filtered list'}
            >
              <SpeakerIcon className={`w-4 h-4 ${isPlayingAll ? 'animate-bounce' : ''}`} />
              <span className="hidden sm:inline">{isPlayingAll ? 'အသံရပ်မည်' : 'ဆက်တိုက်နားဆင်မည် (Play All)'}</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-6 bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset space-y-5">
          {/* Main Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ဂျပန်စာလုံး (Kanji / Hiragana), Romaji, မြန်မာအဓိပ္ပာယ် သို့မဟုတ် English ဖြင့် ရှာဖွေပါ..."
              className="w-full pl-12 pr-10 py-3.5 bg-neumorphic-bg rounded-2xl shadow-neumorphic-inset text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-black text-slate-400 hover:text-slate-600"
              >
                ✕ ရှင်းမည်
              </button>
            )}
          </div>

          {/* Gojuon Japanese Alphabet Filter Bar */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block ml-1">
              အက္ခရာစဉ်အလိုက် ရွေးချယ်ရန် (50-Sound Index)
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {GOJUON_ROWS.map(row => (
                <button
                  key={row.label}
                  onClick={() => setSelectedGojuon(row.label)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                    selectedGojuon === row.label
                      ? 'text-blue-600 bg-blue-50/80 shadow-neumorphic-inset ring-1 ring-blue-400/40'
                      : 'text-slate-500 shadow-neumorphic-outset hover:text-slate-700 active:shadow-neumorphic-inset'
                  }`}
                >
                  {row.label}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Quick Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-300/30">
            <div className="flex flex-wrap items-center gap-2">
              {/* Starred / Bookmarks toggle */}
              <button
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  showOnlyFavorites
                    ? 'text-amber-600 bg-amber-50 shadow-neumorphic-inset ring-1 ring-amber-400/50 font-black'
                    : 'text-slate-500 shadow-neumorphic-outset hover:text-amber-600 active:shadow-neumorphic-inset'
                }`}
              >
                <BookmarkSolidIcon className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'text-amber-500' : 'text-slate-400'}`} />
                <span>သိမ်းထားသည်များ ({bookmarkedTerms.length})</span>
              </button>

              {/* High Frequency Duplicate Words Filter */}
              <button
                onClick={() => setShowOnlyFrequent(!showOnlyFrequent)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  showOnlyFrequent
                    ? 'text-purple-600 bg-purple-50 shadow-neumorphic-inset ring-1 ring-purple-400/50 font-black'
                    : 'text-slate-500 shadow-neumorphic-outset hover:text-purple-600 active:shadow-neumorphic-inset'
                }`}
                title="မေးခွန်းတစ်ခုထက်ပို၍ ပါဝင်သော အရေးကြီးစာလုံးများ"
              >
                <SparkleIcon className="w-3.5 h-3.5 text-purple-500" />
                <span>ထပ်ခါတလဲလဲပါသော စာလုံးများ (Frequent)</span>
              </button>

              {/* Chapter Dropdown */}
              <select
                value={selectedChapter}
                onChange={e => setSelectedChapter(e.target.value)}
                className="px-3 py-1.5 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset text-xs font-bold text-slate-600 focus:outline-none active:shadow-neumorphic-inset cursor-pointer"
              >
                <option value="all">အခန်း အားလုံး (All Chapters)</option>
                {chapterOptions.map(ch => (
                  <option key={ch} value={ch}>
                    {ch}
                  </option>
                ))}
              </select>

              {/* Type / Part of speech filter */}
              {typeOptions.length > 0 && (
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="px-3 py-1.5 bg-neumorphic-bg rounded-xl shadow-neumorphic-outset text-xs font-bold text-slate-600 focus:outline-none active:shadow-neumorphic-inset cursor-pointer"
                >
                  <option value="all">အမျိုးအစား အားလုံး (All Types)</option>
                  {typeOptions.map(t => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-neumorphic-bg rounded-xl shadow-neumorphic-inset">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-blue-100/70 text-blue-600 font-black shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                ကတ်ပုံစံ (Grid)
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  viewMode === 'table' ? 'bg-blue-100/70 text-blue-600 font-black shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                စာရင်းပုံစံ (Table)
              </button>
            </div>
          </div>
        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-500">
          <span>
            တွေ့ရှိသော စာလုံးအရေအတွက်: <span className="font-black text-blue-600">{filteredEntries.length}</span> လုံး
          </span>
          {(searchQuery || selectedGojuon !== 'all' || selectedChapter !== 'all' || selectedType !== 'all' || showOnlyFavorites || showOnlyFrequent) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGojuon('all');
                setSelectedChapter('all');
                setSelectedType('all');
                setShowOnlyFavorites(false);
                setShowOnlyFrequent(false);
              }}
              className="text-blue-600 hover:underline font-black"
            >
              Filter အားလုံး ပြန်ဖျက်မည် (Reset Filters)
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <div className="p-12 text-center bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset space-y-3">
            <AcademicCapIcon className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-base font-black text-slate-600">သင်ရှာဖွေသော ဝေါဟာရ မတွေ့ရှိပါ</p>
            <p className="text-xs text-slate-400">ရှာဖွေသည့် စာလုံး သို့မဟုတ် Filter များကို ပြောင်းလဲ၍ ထပ်မံကြိုးစားကြည့်ပါ</p>
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && filteredEntries.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredEntries.map(entry => {
              const isPlaying = playingId === entry.id;
              const isBookmarked = bookmarkedTerms.includes(entry.term);
              const isExpanded = expandedCardId === entry.id;

              return (
                <div
                  key={entry.id}
                  className={`p-6 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset transition-all duration-200 flex flex-col justify-between ${
                    isPlaying ? 'ring-2 ring-blue-500/50 bg-blue-50/10 scale-[1.01]' : 'hover:shadow-lg'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Top Row: Word, Reading, Audio, Bookmark */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-2xl font-bold font-mono text-slate-800">
                            <JapaneseText text={entry.term} onKanjiClick={handleKanjiClick} />
                          </span>
                          {entry.reading && (
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono">
                              ({entry.reading})
                            </span>
                          )}
                          {entry.romaji && (
                            <span className="text-xs font-mono text-slate-400">
                              [{entry.romaji}]
                            </span>
                          )}
                        </div>

                        {/* Badges: Frequency, Types, Chapters */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {entry.frequency > 1 && (
                            <span className="px-2 py-0.5 text-[10px] font-black rounded-md bg-purple-100/70 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 shadow-neumorphic-inset">
                              မေးခွန်း {entry.frequency} ခုတွင်ပါရှိ
                            </span>
                          )}
                          {entry.types.map(t => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 shadow-neumorphic-inset"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Action Icons */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handlePlayAudio(entry.reading || entry.term, entry.id)}
                          className={`p-2 rounded-full transition-all ${
                            isPlaying
                              ? 'text-blue-600 bg-blue-100/70 shadow-neumorphic-inset animate-pulse ring-1 ring-blue-400/40'
                              : 'text-slate-400 hover:text-blue-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
                          }`}
                          title="အသံထွက်နားဆင်မည် (Listen Pronunciation)"
                        >
                          <SpeakerIcon className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => toggleBookmark(entry.term)}
                          className={`p-2 rounded-full transition-all ${
                            isBookmarked
                              ? 'text-amber-500 shadow-neumorphic-inset bg-amber-50/60'
                              : 'text-slate-400 hover:text-amber-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
                          }`}
                          title={isBookmarked ? 'Remove Bookmark' : 'Save Word'}
                        >
                          {isBookmarked ? (
                            <BookmarkSolidIcon className="w-4 h-4" />
                          ) : (
                            <BookmarkIcon className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Burmese Meaning Display */}
                    <div className="p-3.5 bg-neumorphic-bg rounded-xl shadow-neumorphic-inset space-y-1">
                      <p className="text-sm font-bold text-slate-700 leading-relaxed">
                        {entry.burmese}
                      </p>
                      {entry.english && (
                        <p className="text-xs font-semibold text-slate-500 italic">
                          Eng: {entry.english}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer Bar: Source Questions & Expand Details */}
                  <div className="pt-3 mt-3 border-t border-slate-300/30 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold text-slate-400">မေးခွန်းများ:</span>
                      {entry.sourceQuestions.slice(0, 4).map(q => (
                        <span
                          key={q}
                          className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 shadow-sm border border-blue-100 dark:border-blue-800/40"
                        >
                          {q}
                        </span>
                      ))}
                      {entry.sourceQuestions.length > 4 && (
                        <span className="text-[10px] text-slate-400 font-bold">
                          +{entry.sourceQuestions.length - 4} ပို
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(entry.term, entry.term)}
                        className="text-[11px] font-bold text-slate-400 hover:text-blue-600 transition-colors"
                        title="Copy Japanese word"
                      >
                        Copy
                      </button>

                      {entry.allDefinitions.length > 1 && (
                        <button
                          onClick={() => setExpandedCardId(isExpanded ? null : entry.id)}
                          className="text-[11px] font-bold text-blue-600 hover:underline"
                        >
                          {isExpanded ? 'ခေါက်မည် ▲' : 'အပြည့်အစုံ ▼'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Variations Accordion */}
                  {isExpanded && entry.allDefinitions.length > 1 && (
                    <div className="mt-3 p-3 bg-slate-50/50 rounded-xl border border-slate-200/50 text-xs space-y-1.5 animate-in fade-in">
                      <p className="font-bold text-slate-600">အခြားမေးခွန်းများတွင် ဖော်ပြထားသော အဓိပ္ပာယ်များ -</p>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        {entry.allDefinitions.map((def, idx) => (
                          <li key={idx}>{def}</li>
                        ))}
                      </ul>
                      <p className="text-[10px] text-slate-400 pt-1">
                        ပါဝင်သော အခန်းများ: {entry.chapters.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TABLE VIEW */}
        {viewMode === 'table' && filteredEntries.length > 0 && (
          <div className="p-4 sm:p-6 bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset overflow-x-auto">
            <table className="w-full text-left text-slate-600">
              <thead className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest border-b border-slate-300/40">
                <tr>
                  <th className="px-3 py-3 w-12 text-center">Audio</th>
                  <th className="px-4 py-3">Term (ဂျပန်)</th>
                  <th className="px-4 py-3">Meaning (မြန်မာ/Eng)</th>
                  <th className="px-3 py-3 text-center">Occurrences</th>
                  <th className="px-3 py-3 text-center w-12">Save</th>
                </tr>
              </thead>
              <tbody className="font-medium text-sm">
                {filteredEntries.map(entry => {
                  const isPlaying = playingId === entry.id;
                  const isBookmarked = bookmarkedTerms.includes(entry.term);

                  return (
                    <tr
                      key={entry.id}
                      className={`border-t border-slate-300/20 transition-all ${
                        isPlaying ? 'bg-blue-50/30 text-blue-700 font-bold' : 'hover:bg-slate-100/30'
                      }`}
                    >
                      <td className="px-3 py-3 text-center align-middle">
                        <button
                          onClick={() => handlePlayAudio(entry.reading || entry.term, entry.id)}
                          className={`p-1.5 rounded-full transition-all ${
                            isPlaying
                              ? 'text-blue-600 bg-blue-100/70 shadow-neumorphic-inset animate-pulse ring-1 ring-blue-400/40'
                              : 'text-slate-400 hover:text-blue-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
                          }`}
                          title="Listen pronunciation"
                        >
                          <SpeakerIcon className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="px-4 py-3 align-middle font-mono">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 text-base">
                            <JapaneseText text={entry.term} onKanjiClick={handleKanjiClick} />
                          </span>
                          {entry.reading && (
                            <span className="text-xs text-blue-600/90 font-medium font-sans">
                              {entry.reading}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 align-middle">
                        <div className="space-y-0.5">
                          <p className="font-bold text-slate-700">{entry.burmese}</p>
                          {entry.english && (
                            <p className="text-xs text-slate-400 italic">Eng: {entry.english}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center align-middle">
                        <span className="px-2 py-0.5 text-xs font-mono font-bold rounded-lg bg-blue-50 text-blue-600 shadow-neumorphic-inset">
                          {entry.frequency} Qs
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center align-middle">
                        <button
                          onClick={() => toggleBookmark(entry.term)}
                          className={`p-1.5 rounded-full transition-all ${
                            isBookmarked
                              ? 'text-amber-500 shadow-neumorphic-inset bg-amber-50/60'
                              : 'text-slate-400 hover:text-amber-500'
                          }`}
                        >
                          {isBookmarked ? (
                            <BookmarkSolidIcon className="w-4 h-4" />
                          ) : (
                            <BookmarkIcon className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicalDictionary;
