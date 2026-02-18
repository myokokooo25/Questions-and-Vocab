
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { vocabularyData } from './data/vocabulary';
import Flashcard from './components/Flashcard';
import ListView from './components/ListView';
import StudyPlan from './components/StudyPlan';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import type { VocabularyWord } from './types';
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon, SunIcon, MoonIcon } from './components/Icons';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';

type ViewMode = 'dashboard' | 'flashcard' | 'list' | 'study' | 'quiz';

const App: React.FC = () => {
    const { user } = useAuth();
    const { flashcardData, updateFlashcardProgress, toggleFlashcardLearned, isLoading } = useProgress();
    const { theme, toggleTheme } = useTheme();

    const [vocabulary, setVocabulary] = useState<VocabularyWord[]>(vocabularyData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
    const [loadingAudioId, setLoadingAudioId] = useState<number | null>(null);
    
    const auth = useMemo(() => {
        if (!user) return null;
        const key = user.accessKey.trim().toUpperCase();
        return { key };
    }, [user]);

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

    if (!auth) return <div className="p-20 text-center font-bold text-slate-500">Access Denied. Please Login from main screen.</div>;

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neumorphic-bg">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-indigo-600 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-neumorphic-bg text-neumorphic-text">
            <header className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
                 <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-black text-slate-700 tracking-tight">Technical Vocabulary</h1>
                    <p className="text-slate-500 font-bold italic">Interactive Flashcards</p>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="p-4 rounded-2xl shadow-neumorphic-outset text-slate-500 active:shadow-neumorphic-inset transition-all">{theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}</button>
                </div>
            </header>
            
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
                {viewMode === 'flashcard' && <Flashcard word={filteredWords[currentIndex]} isFlipped={isFlipped} onFlip={handleFlip} onPlayAudio={handlePlayPronunciation} isAudioLoading={loadingAudioId !== null} isMarkedAsLearned={markedAsLearnedSet.has(filteredWords[currentIndex]?.id)} onToggleMarkedAsLearned={() => filteredWords[currentIndex] && toggleFlashcardLearned(filteredWords[currentIndex].id)} />}
                {viewMode === 'list' && <ListView words={filteredWords} isEditMode={false} setWords={setVocabulary} categories={categories.slice(1)} markedAsLearned={markedAsLearnedSet} onToggleMarkedAsLearned={toggleFlashcardLearned} onPlayAudio={playWordAudio} loadingAudioId={loadingAudioId} />}
            </main>
            
            <footer className="w-full max-w-5xl mt-12 mb-8">
                <div className="bg-neumorphic-bg shadow-neumorphic-outset p-6 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className={`flex items-center gap-4 w-full md:w-auto`}>
                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl"><select value={currentCategory} onChange={e => setCurrentCategory(e.target.value)} className="bg-transparent font-bold border-none outline-none text-slate-600 p-3 appearance-none">{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl flex-grow"><input type="search" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="bg-transparent border-none outline-none font-bold text-slate-600 p-3 w-full md:w-48"/></div>
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
