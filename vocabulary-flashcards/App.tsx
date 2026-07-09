
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { vocabularyData } from './data/vocabulary';
import { supabase } from '../lib/supabase';
import Flashcard from './components/Flashcard';
import ListView from './components/ListView';
import StudyPlan from './components/StudyPlan';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import type { VocabularyWord, Kanji } from './types';
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon, SunIcon, MoonIcon } from './components/Icons';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import KanjiTooltip from '../components/KanjiTooltip';
import { kanjiDictionary } from '../data/kanji';

type ViewMode = 'dashboard' | 'flashcard' | 'list' | 'study' | 'quiz';

const App: React.FC = () => {
    const { user } = useAuth();
    const { flashcardData, updateFlashcardProgress, toggleFlashcardLearned, isLoading } = useProgress();
    const { theme, toggleTheme } = useTheme();

    const [vocabulary, setVocabulary] = useState<VocabularyWord[]>(vocabularyData);
    const [isFetchingVocab, setIsFetchingVocab] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
    const [loadingAudioId, setLoadingAudioId] = useState<number | null>(null);

    const [supabaseStatus, setSupabaseStatus] = useState<{
        isConnected: boolean;
        rowCount: number;
        hasExplanationsCount: number;
        error: string | null;
    }>({
        isConnected: false,
        rowCount: 0,
        hasExplanationsCount: 0,
        error: null
    });

    // Kanji Tooltip State
    const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
    const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
    
    const auth = useMemo(() => {
        if (!user) return null;
        const key = user.accessKey.trim().toUpperCase();
        return { key };
    }, [user]);

    useEffect(() => {
        const fetchVocabulary = async () => {
            try {
                setIsFetchingVocab(true);
                const { data, error } = await supabase
                    .from('vocabulary_flashcards')
                    .select('*')
                    .order('id', { ascending: true });
                
                if (error) {
                    console.error('Error fetching vocabulary from Supabase:', error);
                    setSupabaseStatus({
                        isConnected: false,
                        rowCount: 0,
                        hasExplanationsCount: 0,
                        error: error.message
                    });
                    // Fallback to local data
                    setVocabulary(vocabularyData);
                } else if (data && data.length > 0) {
                    console.log('[SUPABASE_DEBUG] Row data fetched length:', data.length);
                    const withExplanationDb = data.filter((w: any) => w.ai_explanation);
                    console.log('[SUPABASE_DEBUG] DB items containing ai_explanation in DB:', withExplanationDb.length);
                    if (withExplanationDb.length > 0) {
                        console.log('[SUPABASE_DEBUG] First DB item with explanation ID:', withExplanationDb[0].id, 'text:', withExplanationDb[0].ai_explanation.slice(0, 50));
                    }
                    
                    setSupabaseStatus({
                        isConnected: true,
                        rowCount: data.length,
                        hasExplanationsCount: withExplanationDb.length,
                        error: null
                    });

                    // Merge DB data with local data so we don't lose words that aren't in DB yet
                    const mergedData = vocabularyData.map(localWord => {
                        const dbWord = data.find((w: any) => String(w.id) === String(localWord.id));
                        return dbWord ? { ...localWord, ...dbWord } : localWord;
                    });
                    setVocabulary(mergedData as VocabularyWord[]);
                    console.log('[SUPABASE_DEBUG] Final merged list items total:', mergedData.length, 'containing explanations:', mergedData.filter(w => w.ai_explanation).length);
                } else {
                    setSupabaseStatus({
                        isConnected: true,
                        rowCount: 0,
                        hasExplanationsCount: 0,
                        error: 'Table exists but has 0 rows'
                    });
                    // Fallback if table is empty
                    setVocabulary(vocabularyData);
                }
            } catch (err: any) {
                console.error('Failed to fetch vocabulary:', err);
                setSupabaseStatus({
                    isConnected: false,
                    rowCount: 0,
                    hasExplanationsCount: 0,
                    error: err?.message || 'Unknown exception'
                });
                setVocabulary(vocabularyData);
            } finally {
                setIsFetchingVocab(false);
            }
        };

        fetchVocabulary();
    }, []);

    const handleUpdateWord = useCallback((updatedWord: VocabularyWord) => {
        setVocabulary(prev => {
            const nextList = prev.map(w => w.id === updatedWord.id ? updatedWord : w);
            const explanationCount = nextList.filter(w => w.ai_explanation).length;
            setSupabaseStatus(status => ({
                ...status,
                hasExplanationsCount: explanationCount
            }));
            return nextList;
        });
    }, []);

    const [activeStudyDay, setActiveStudyDay] = useState<number | null>(null);
    const TOTAL_STUDY_DAYS = 40;
    const WORDS_PER_DAY = 10;

    const categories = useMemo(() => ['All', 'Steel Structure', 'Steel Fabrication', 'Quality Control', 'Steel Frame Erection', 'Safety Management'], []);

    const filteredWords = useMemo(() => {
        if (activeStudyDay !== null) return vocabulary.slice(activeStudyDay * WORDS_PER_DAY, (activeStudyDay + 1) * WORDS_PER_DAY);
        let words = vocabulary;
        if (currentCategory !== 'All') words = words.filter(word => word.category === currentCategory);
        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase().trim();
            words = words.filter(word => word.kanji.includes(term) || word.reading.includes(term) || word.english.toLowerCase().includes(term) || word.burmese.includes(term));
        }
        return words;
    }, [currentCategory, searchTerm, vocabulary, activeStudyDay]);
    
    const allLearnedWords = useMemo(() => {
        const learnedIds = new Set(Object.values(flashcardData.progress || {}).flat());
        flashcardData.learned.forEach(id => learnedIds.add(id));
        return vocabulary.filter(word => learnedIds.has(word.id));
    }, [flashcardData, vocabulary]);

    const markedAsLearnedSet = useMemo(() => new Set(flashcardData.learned), [flashcardData.learned]);

    useEffect(() => { setCurrentIndex(0); setIsFlipped(false); }, [filteredWords, viewMode, activeStudyDay]);

    const recordStudyProgress = useCallback(() => {
        if (activeStudyDay !== null && filteredWords[currentIndex]) {
            updateFlashcardProgress(activeStudyDay, filteredWords[currentIndex].id);
        }
    }, [activeStudyDay, currentIndex, filteredWords, updateFlashcardProgress]);

    useEffect(() => { if (viewMode === 'flashcard' && activeStudyDay !== null) recordStudyProgress(); }, [currentIndex, viewMode, activeStudyDay, recordStudyProgress]);

    const playWordAudio = useCallback((word: VocabularyWord) => {
        if (!word) return;
        if (!('speechSynthesis' in window)) return;
        
        window.speechSynthesis.cancel();
        setLoadingAudioId(word.id);

        const text = word.reading || word.kanji;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        
        const voices = window.speechSynthesis.getVoices();
        const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
        if (jaVoice) utterance.voice = jaVoice;

        utterance.onend = () => setLoadingAudioId(null);
        utterance.onerror = () => setLoadingAudioId(null);
        
        window.speechSynthesis.speak(utterance);
    }, []);

    const handlePlayPronunciation = useCallback(() => { if (filteredWords[currentIndex]) playWordAudio(filteredWords[currentIndex]); }, [filteredWords, currentIndex, playWordAudio]);
    const handleNext = useCallback(() => { setIsFlipped(false); setTimeout(() => setCurrentIndex(p => (p + 1) % filteredWords.length), 150); }, [filteredWords.length]);
    const handlePrev = useCallback(() => { setIsFlipped(false); setTimeout(() => setCurrentIndex(p => (p - 1 + filteredWords.length) % filteredWords.length), 150); }, [filteredWords.length]);
    const handleFlip = useCallback(() => setIsFlipped(p => !p), []);
    const handleSelectDay = (i: number) => { setActiveStudyDay(i); setViewMode('flashcard'); };
    const getTabClass = (m: string) => viewMode === m && activeStudyDay === null ? 'shadow-neumorphic-inset text-blue-600 bg-blue-50/10' : 'text-slate-500 hover:text-slate-700';

    const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {
        const data = kanjiDictionary[kanji];
        // Calculate position
        const rect = event.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        setTooltipPos({
          top: rect.bottom + scrollTop,
          left: rect.left + scrollLeft
        });
        setSelectedKanji(data || null);
        setSelectedKanjiChar(kanji);
    };

    if (!auth) return <div className="p-20 text-center font-bold text-slate-500">Access Denied. Please Login from main screen.</div>;

    if (isLoading || isFetchingVocab) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neumorphic-bg">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-indigo-600 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-neumorphic-bg text-neumorphic-text">
            {(selectedKanji || selectedKanjiChar) && (
                <KanjiTooltip
                    kanjiData={selectedKanji}
                    kanjiChar={selectedKanjiChar || undefined}
                    position={tooltipPos}
                    onClose={() => { setSelectedKanji(null); setSelectedKanjiChar(null); }}
                />
            )}
            <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center mb-6 gap-6">
                 <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-black text-slate-700 tracking-tight">Technical Vocabulary</h1>
                    <p className="text-slate-500 font-bold italic">Interactive Flashcards</p>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="p-4 rounded-2xl shadow-neumorphic-outset text-slate-500 active:shadow-neumorphic-inset transition-all">{theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}</button>
                </div>
            </header>

            {/* Supabase Connection Status Banner */}
            <div className="w-full max-w-5xl mb-10">
                {!supabaseStatus.isConnected ? (
                    <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400 text-sm font-bold flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block animate-pulse"></span>
                            <span>Supabase ချိတ်ဆက်မှုမရသေးပါ: {supabaseStatus.error || 'အကြောင်းပြချက်မသိရ'}</span>
                        </div>
                        <span className="text-xs bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full uppercase tracking-wider font-mono">Error</span>
                    </div>
                ) : supabaseStatus.rowCount === 0 ? (
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 text-sm font-bold flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse"></span>
                            <span>Supabase တွင် စကားလုံးအချက်အလက်မရှိသေးပါ။ Dashboard တက်ဘ်ရှိ "Upload All Vocabulary to Database" ကိုအရင်နှိပ်ပါ။</span>
                        </div>
                        <span className="text-xs bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full uppercase tracking-wider font-mono">No Data</span>
                    </div>
                ) : (
                    <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 text-green-700 dark:text-green-400 text-sm font-bold flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                            <span>Supabase ချိတ်ဆက်မှု အဆင်ပြေပါသည် (စကားလုံး စုစုပေါင်း: {supabaseStatus.rowCount} လုံး၊ AI ရှင်းလင်းချက်ရှိပြီးသား: {supabaseStatus.hasExplanationsCount} လုံး)</span>
                        </div>
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full uppercase tracking-wider font-mono">Connected</span>
                    </div>
                )}
            </div>
            
            <nav className="w-full max-w-4xl mb-12">
                <div className="bg-neumorphic-bg shadow-neumorphic-inset p-2 rounded-3xl flex flex-wrap justify-center gap-2">
                    {['dashboard', 'flashcard', 'list', 'study', 'quiz'].map(m => (
                        <button key={m} onClick={() => { setActiveStudyDay(null); setViewMode(m as ViewMode); }} className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${getTabClass(m)}`}>{m}</button>
                    ))}
                </div>
            </nav>

            <main className="w-full flex-grow flex flex-col items-center justify-center max-w-5xl">
                {viewMode === 'dashboard' && <Dashboard totalWords={vocabulary.length} learnedWordsCount={allLearnedWords.length} studyProgress={flashcardData.progress} totalDays={TOTAL_STUDY_DAYS} onNavigate={setViewMode} />}
                {viewMode === 'study' && <StudyPlan studyProgress={flashcardData.progress} onSelectDay={handleSelectDay} totalDays={TOTAL_STUDY_DAYS} wordsPerDay={WORDS_PER_DAY} />}
                {viewMode === 'quiz' && <Quiz learnedWords={allLearnedWords} onQuizComplete={() => setViewMode('study')} vocabulary={vocabulary} />}
                {viewMode === 'flashcard' && <Flashcard word={filteredWords[currentIndex]} isFlipped={isFlipped} onFlip={handleFlip} onPlayAudio={handlePlayPronunciation} isAudioLoading={loadingAudioId !== null} isMarkedAsLearned={markedAsLearnedSet.has(filteredWords[currentIndex]?.id)} onToggleMarkedAsLearned={() => filteredWords[currentIndex] && toggleFlashcardLearned(filteredWords[currentIndex].id)} onKanjiClick={handleKanjiClick} onUpdateWord={handleUpdateWord} />}
                {viewMode === 'list' && <ListView words={filteredWords} isEditMode={false} setWords={setVocabulary} categories={categories.slice(1)} markedAsLearned={markedAsLearnedSet} onToggleMarkedAsLearned={toggleFlashcardLearned} onPlayAudio={playWordAudio} loadingAudioId={loadingAudioId} onKanjiClick={handleKanjiClick} />}
            </main>
            
            <footer className="w-full max-w-5xl mt-12 mb-8">
                <div className="bg-neumorphic-bg shadow-neumorphic-outset p-6 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className={`flex items-center gap-4 w-full md:w-auto`}>
                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl"><select value={currentCategory} onChange={e => setCurrentCategory(e.target.value)} className="bg-transparent font-bold border-none outline-none text-slate-600 p-3 appearance-none">{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl flex-grow"><input type="search" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="bg-transparent border-none outline-none font-bold text-slate-600 p-3 w-full md:w-48"/></div>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {viewMode !== 'flashcard' && (
                            <>
                                <button
                                    onClick={() => {
                                        const exportData = filteredWords.map(word => {
                                            const term = word.reading ? `${word.kanji} (${word.reading})` : word.kanji;
                                            const definition = `${word.burmese} ${word.english ? `- ${word.english}` : ''}`;
                                            return `${term}\t${definition}`;
                                        }).join('\n');
                                        navigator.clipboard.writeText(exportData);
                                        alert('Copied to clipboard! You can now paste this into the Quizlet Import page.');
                                    }}
                                    className="px-6 py-3 shrink-0 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-2xl text-sm font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-all"
                                    title="Copy vocabulary to paste into Quizlet"
                                >
                                    Export for Quizlet
                                </button>
                                <div className="text-slate-500 shrink-0 font-bold px-2">
                                    Total: {filteredWords.length}
                                </div>
                            </>
                        )}
                    </div>
                    {viewMode === 'flashcard' && (
                        <div className="flex items-center gap-6">
                            <button onClick={handlePrev} className="p-4 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full disabled:opacity-30" disabled={filteredWords.length < 2}><ArrowLeftIcon /></button>
                            <button onClick={handleFlip} className="px-10 py-4 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full text-sm font-black uppercase tracking-widest text-slate-700">Flip</button>
                            <button onClick={handleNext} className="p-4 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full disabled:opacity-30" disabled={filteredWords.length < 2}><ArrowRightIcon /></button>
                        </div>
                    )}
                </div>
            </footer>
        </div>
    );
};
export default App;
