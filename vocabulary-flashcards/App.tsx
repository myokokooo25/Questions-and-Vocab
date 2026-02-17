
import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { vocabularyData } from './data/vocabulary';
import Flashcard from './components/Flashcard';
import ListView from './components/ListView';
import StudyPlan from './components/StudyPlan';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import type { VocabularyWord } from './types';
import { ArrowLeftIcon, ArrowRightIcon, FlipIcon, HomeIcon, SunIcon, MoonIcon } from './components/Icons';
import { GoogleGenAI } from "@google/genai";
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const DB_NAME = 'tts-cache';
const STORE_NAME = 'audios';

const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

const getCachedAudio = async (text: string): Promise<Uint8Array | null> => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(text);
            request.onsuccess = () => resolve(request.result ? (request.result as Uint8Array) : null);
            request.onerror = () => reject(request.error);
        });
    } catch (e) {
        return null;
    }
};

const saveCachedAudio = async (text: string, data: Uint8Array): Promise<void> => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(data, text);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    } catch (e) {}
};

interface DeviceKey {
  key: string;
  deviceIds: string[];
  limit: number;
  duration?: number;
}

type ViewMode = 'dashboard' | 'flashcard' | 'list' | 'study' | 'quiz';

const App: React.FC = () => {
    const { user } = useAuth();
    const { flashcardData, updateFlashcardProgress, toggleFlashcardLearned, isLoading } = useProgress();
    const { theme, toggleTheme } = useTheme();

    const [vocabulary, setVocabulary] = useState<VocabularyWord[]>(vocabularyData);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
    const [loadingAudioId, setLoadingAudioId] = useState<number | null>(null);
    
    // Sync with main app auth
    const auth = useMemo(() => {
        if (!user) return null;
        const key = user.accessKey.trim().toUpperCase();
        if (key === 'MKKOAMK') return { type: 'master' as const };
        return { type: 'standard' as const, key };
    }, [user]);

    const [activeStudyDay, setActiveStudyDay] = useState<number | null>(null);
    const TOTAL_STUDY_DAYS = 40;
    const WORDS_PER_DAY = 10;

    const [securityModal, setSecurityModal] = useState<{ isOpen: boolean; action: (() => void) | null; title: string }>({ isOpen: false, action: null, title: '' });
    const [securityCode, setSecurityCode] = useState('');
    const [securityError, setSecurityError] = useState('');
    const SECURITY_PIN = '454879';

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
    
    // Calculate learned words from the context
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

    function decode(b: string) { const s = atob(b); const len = s.length; const bytes = new Uint8Array(len); for (let i = 0; i < len; i++) bytes[i] = s.charCodeAt(i); return bytes; }
    async function decodeAudioData(d: Uint8Array, ctx: AudioContext, sr: number, ch: number) {
        const i16 = new Int16Array(d.buffer); const fc = i16.length / ch; const buf = ctx.createBuffer(ch, fc, sr);
        for (let c = 0; c < ch; c++) { const cd = buf.getChannelData(c); for (let i = 0; i < fc; i++) cd[i] = i16[i * ch + c] / 32768.0; }
        return buf;
    }

    const playWordAudio = useCallback(async (word: VocabularyWord) => {
        if (!word || loadingAudioId !== null) return;
        setLoadingAudioId(word.id);
        const text = word.reading || word.kanji;
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
            if (ctx.state === 'suspended') await ctx.resume();
            const cached = await getCachedAudio(text);
            let pcm = cached;
            if (!pcm) {
                const res = await ai.models.generateContent({
                    model: "gemini-2.5-flash-preview-tts", contents: [{ parts: [{ text }] }],
                    config: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } } },
                });
                const b64 = res.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
                if (!b64) throw new Error();
                pcm = decode(b64); await saveCachedAudio(text, pcm);
            }
            const buf = await decodeAudioData(pcm, ctx, 24000, 1);
            const src = ctx.createBufferSource(); src.buffer = buf; src.connect(ctx.destination); src.start();
        } catch (e) {} finally { setLoadingAudioId(null); }
    }, [loadingAudioId]);

    const handlePlayPronunciation = useCallback(() => { if (filteredWords[currentIndex]) playWordAudio(filteredWords[currentIndex]); }, [filteredWords, currentIndex, playWordAudio]);
    const handleNext = useCallback(() => { setIsFlipped(false); setTimeout(() => setCurrentIndex(p => (p + 1) % filteredWords.length), 150); }, [filteredWords.length]);
    const handlePrev = useCallback(() => { setIsFlipped(false); setTimeout(() => setCurrentIndex(p => (p - 1 + filteredWords.length) % filteredWords.length), 150); }, [filteredWords.length]);
    const handleFlip = useCallback(() => setIsFlipped(p => !p), []);
    
    const handleSecurityConfirm = () => { if (securityCode === SECURITY_PIN) { securityModal.action?.(); setSecurityModal({ isOpen: false, action: null, title: '' }); setSecurityCode(''); } else setSecurityError('Wrong PIN.'); };
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
                {viewMode === 'list' && <ListView words={filteredWords} isEditMode={isEditMode} setWords={setVocabulary} categories={categories.slice(1)} markedAsLearned={markedAsLearnedSet} onToggleMarkedAsLearned={toggleFlashcardLearned} onPlayAudio={playWordAudio} loadingAudioId={loadingAudioId} />}
            </main>
            
            <footer className="w-full max-w-5xl mt-12 mb-8">
                <div className="bg-neumorphic-bg shadow-neumorphic-outset p-6 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className={`flex items-center gap-4 w-full md:w-auto ${isEditMode ? 'opacity-30 pointer-events-none' : ''}`}>
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
            {securityModal.isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] p-4">
                    <div className="bg-neumorphic-bg shadow-2xl rounded-[2.5rem] w-full max-w-sm p-10">
                        <h2 className="text-2xl font-black text-slate-700 mb-4">{securityModal.title}</h2>
                        <input type="password" value={securityCode} onChange={e => setSecurityCode(e.target.value)} className="w-full bg-slate-200/50 p-4 rounded-2xl text-center font-bold tracking-widest outline-none mb-4" placeholder="PIN" autoFocus />
                        {securityError && <p className="text-red-500 text-xs font-bold text-center mb-4">{securityError}</p>}
                        <div className="flex gap-4"><button onClick={() => setSecurityModal({ isOpen: false, action: null, title: '' })} className="flex-1 py-4 font-black uppercase text-xs text-slate-500">Cancel</button><button onClick={handleSecurityConfirm} className="flex-1 py-4 font-black uppercase text-xs text-blue-600 shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-2xl">Confirm</button></div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App;
