
import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { vocabularyData } from './data/vocabulary';
import Flashcard from './components/Flashcard';
import ListView from './components/ListView';
import Login from './components/Login';
import StudyPlan from './components/StudyPlan';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import type { VocabularyWord } from './types';
import { ArrowLeftIcon, ArrowRightIcon, FlipIcon, HomeIcon, SunIcon, MoonIcon } from './components/Icons';
import { GoogleGenAI } from "@google/genai";
import { useTheme } from '../contexts/ThemeContext';

// Initialize the AI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// --- IndexedDB Caching Logic ---
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
        console.error("Error reading from cache", e);
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
    } catch (e) {
        console.error("Error saving to cache", e);
    }
};
// -------------------------------

interface DeviceKey {
  key: string;
  deviceIds: string[];
  limit: number;
  duration?: number; // in minutes
}

const TrialTimer: React.FC<{ loginTime: number, duration: number }> = ({ loginTime, duration }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = Date.now();
            const endTime = loginTime + duration * 60 * 1000;
            const remainingMs = Math.max(0, endTime - now);

            if (remainingMs === 0) {
                setTimeLeft('Expired');
                return;
            }
            const minutes = Math.floor((remainingMs / 1000 / 60) % 60);
            const seconds = Math.floor((remainingMs / 1000) % 60);
            
            setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        };

        const timerId = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // initial call

        return () => clearInterval(timerId);
    }, [loginTime, duration]);

    return (
        <div className="mt-2 text-center sm:text-left">
            <p className="text-sm text-slate-500">Trial Time Remaining:</p>
            <p className="text-lg font-mono font-bold text-blue-600">{timeLeft}</p>
        </div>
    );
};

type ViewMode = 'dashboard' | 'flashcard' | 'list' | 'study' | 'quiz';

const App: React.FC = () => {
    const [vocabulary, setVocabulary] = useState<VocabularyWord[]>([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
    const [loadingAudioId, setLoadingAudioId] = useState<number | null>(null);
    const { theme, toggleTheme } = useTheme();
    
    // Auth state
    const [auth, setAuth] = useState<{ type: 'master' | 'standard'; key?: string, loginTime?: number } | null>(null);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [deviceKeys, setDeviceKeys] = useState<DeviceKey[]>([]);
    const [newKeyInput, setNewKeyInput] = useState('');
    const [copiedKeys, setCopiedKeys] = useState<Record<string, boolean>>({});

    // Study & Quiz State
    const [studyProgress, setStudyProgress] = useState<Record<number, number[]>>({});
    const [activeStudyDay, setActiveStudyDay] = useState<number | null>(null);
    const [markedAsLearned, setMarkedAsLearned] = useState<Set<number>>(new Set());
    const TOTAL_STUDY_DAYS = 40;
    const WORDS_PER_DAY = 10;

    // Security Modal State
    const [securityModal, setSecurityModal] = useState<{ isOpen: boolean; action: (() => void) | null; title: string }>({ isOpen: false, action: null, title: '' });
    const [securityCode, setSecurityCode] = useState('');
    const [securityError, setSecurityError] = useState('');
    const SECURITY_PIN = '454879';

    const deviceIdRef = useRef<string | null>(null);

    const categories = useMemo(() => ['All', 'Steel Structure', 'Steel Fabrication', 'Quality Control', 'Steel Frame Erection', 'Safety Management'], []);

    const filteredWords = useMemo(() => {
        if (activeStudyDay !== null) {
            return vocabulary.slice(activeStudyDay * WORDS_PER_DAY, (activeStudyDay + 1) * WORDS_PER_DAY);
        }

        let words = vocabulary;
        if (currentCategory !== 'All') {
            words = words.filter(word => word.category === currentCategory);
        }

        if (searchTerm.trim()) {
            const lowercasedTerm = searchTerm.toLowerCase().trim();
            words = words.filter(word =>
                word.kanji.toLowerCase().includes(lowercasedTerm) ||
                word.reading.toLowerCase().includes(lowercasedTerm) ||
                word.english.toLowerCase().includes(lowercasedTerm) ||
                word.burmese.toLowerCase().includes(lowercasedTerm)
            );
        }
        return words;
    }, [currentCategory, searchTerm, vocabulary, activeStudyDay]);
    
    const allLearnedWords = useMemo(() => {
        const learnedIds = new Set(Object.values(studyProgress || {}).flat());
        markedAsLearned.forEach(id => learnedIds.add(id));
        return vocabulary.filter(word => learnedIds.has(word.id));
    }, [studyProgress, vocabulary, markedAsLearned]);

    const handleLogout = useCallback(() => { setAuth(null); setIsEditMode(false); localStorage.removeItem('authData'); }, []);
    
    const userKeyData = useMemo(() => {
        if (auth?.type === 'standard' && auth.key) {
            return deviceKeys.find(dk => dk.key.toUpperCase() === auth.key!.toUpperCase());
        }
        return undefined;
    }, [auth, deviceKeys]);

    useEffect(() => {
        if (auth?.type === 'standard' && auth.loginTime && userKeyData?.duration) {
            const checkExpiration = () => {
                const elapsedMinutes = (Date.now() - auth.loginTime!) / (1000 * 60);
                if (elapsedMinutes > userKeyData.duration!) {
                    alert('Your trial session has expired.');
                    handleLogout();
                }
            };
            const intervalId = setInterval(checkExpiration, 30 * 1000);
            checkExpiration();
            return () => clearInterval(intervalId);
        }
    }, [auth, userKeyData, handleLogout]);


    useEffect(() => {
        // Load vocabulary
        try {
            const storedVocabulary = localStorage.getItem('customVocabulary');
            const parsed = storedVocabulary ? JSON.parse(storedVocabulary) : null;
            if (Array.isArray(parsed) && parsed.length > 0) {
                setVocabulary(parsed);
            } else {
                setVocabulary(vocabularyData);
            }
        } catch (e) { 
            console.error("Failed to parse vocabulary, using default.", e); 
            setVocabulary(vocabularyData); 
        }

        // Load auth status
        try {
            const storedAuth = localStorage.getItem('authData');
            if (storedAuth) setAuth(JSON.parse(storedAuth));
        } catch (e) { console.error("Failed to parse auth data", e); localStorage.removeItem('authData'); }

        // Load study progress
         try {
            const storedProgress = localStorage.getItem('studyProgress');
            if (storedProgress) {
                const parsed = JSON.parse(storedProgress);
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    setStudyProgress(parsed);
                }
            }
        } catch (e) { console.error("Failed to parse study progress", e); localStorage.removeItem('studyProgress'); }

        // Load marked words
        try {
            const storedMarked = localStorage.getItem('markedLearnedWords');
            if (storedMarked) {
                const parsed = JSON.parse(storedMarked);
                if (Array.isArray(parsed)) {
                    setMarkedAsLearned(new Set(parsed));
                }
            }
        } catch (e) { console.error("Failed to load marked words", e); }

        // Get or set a unique device ID
        let id = localStorage.getItem('deviceId');
        if (!id) { id = crypto.randomUUID(); localStorage.setItem('deviceId', id); }
        deviceIdRef.current = id;

        // Load and migrate device keys
        try {
             const standardKeysList = ['A1B2C3D4E5','F6G7H8I9J0','K1L2M3N4P5','Q6R7S8T9U0','V1W2X3Y4Z5','A9B8C7D6E5','F4G3H2I1J0','K9L8M7N6P5','Q4R3S2T1U0','V9W8X7Y6Z5','8JS2X6Y7Z8','QW4E5R6T7Y','U8I9O0P1A2','S3D4F5G6H7','J8K9L0Z1X2','C3V4B5N6M7','1Q2W3E4R5T','6Y7U8I9O0P','Z1X2C3V4B5','N6M7J8K9L0','P9O8I7U6Y5','T4R3E2W1Q0','M1N2B3V4C5','X6Z7L8K9J0','H1G2F3D4S5','A6P7O8I9U0','Y1T2R3E4W5','Q6A7Z8S9X0','E1D2C3F4V5','G6T7B8H9N0','U1J2M3K4I5','L6P7O8A9S0','D1F2G3H4J5','K6L7Z8X9C0','V1B2N3M4Q5','W6E7R8T9Y0','U1I2O3P4A5','S6D7F8G9H0','J1K2L3Z4X5','C6V7B8N9M0','3G4H5J6K7L','8M9N0B1V2C','XZ5Y4W3E2R','T1S2D3F4G5','H6J7K8L9P0','QAZWSXEDCR','FVTGBYHNUJ','MIKOLP1234','5T6Y7U8I9O','ABCDE12345'];
            const standardKeysToAdd = standardKeysList.map(key => ({ key, deviceIds: [], limit: 1 }));
            const trialKeysToAdd = [
                { key: 'TESTKEY001', deviceIds: [], limit: Infinity, duration: 15 },
                { key: 'TRIALKEY02', deviceIds: [], limit: Infinity, duration: 15 },
            ];
            const baseKeys: DeviceKey[] = [ { key: 'HTETHTET', deviceIds: [], limit: 1 }, { key: 'EIEIPYONE', deviceIds: [], limit: 1 }, { key: 'BESTFRIEND', deviceIds: [], limit: 10 }];
            const allKeysToEnsure = [...baseKeys, ...standardKeysToAdd, ...trialKeysToAdd];

            const storedKeys = localStorage.getItem('deviceKeys');
            let finalKeys: DeviceKey[] = [];
            
            if (storedKeys) {
                let parsedKeys: DeviceKey[] = JSON.parse(storedKeys);
                let migratedKeys = (parsedKeys as any[]).map(key => key.hasOwnProperty('deviceId') ? { key: key.key, deviceIds: key.deviceId ? [key.deviceId] : [], limit: 1 } : { ...key, deviceIds: key.deviceIds || [], limit: key.limit || 1 });
                let keysUpdated = false;
                allKeysToEnsure.forEach(keyToAdd => {
                    if (!migratedKeys.some(k => k.key.toUpperCase() === keyToAdd.key.toUpperCase())) {
                        migratedKeys.push(keyToAdd);
                        keysUpdated = true;
                    }
                });
                finalKeys = migratedKeys;
                if (keysUpdated) {
                    localStorage.setItem('deviceKeys', JSON.stringify(finalKeys));
                }
            } else { 
                finalKeys = allKeysToEnsure;
                localStorage.setItem('deviceKeys', JSON.stringify(finalKeys)); 
            }
            setDeviceKeys(finalKeys);
        } catch(e) { 
             console.error("Failed to load/parse device keys, resetting.", e);
             // Fallback logic...
        }
    }, []);

    useEffect(() => {
        setCurrentIndex(0);
        setIsFlipped(false);
    }, [filteredWords, viewMode, activeStudyDay]);
    
    useEffect(() => {
        localStorage.setItem('studyProgress', JSON.stringify(studyProgress));
    }, [studyProgress]);

    useEffect(() => {
        localStorage.setItem('markedLearnedWords', JSON.stringify(Array.from(markedAsLearned)));
    }, [markedAsLearned]);

    const recordStudyProgress = useCallback(() => {
        if (activeStudyDay !== null && filteredWords[currentIndex]) {
            const wordId = filteredWords[currentIndex].id;
            setStudyProgress(prev => {
                const dayProgress = prev[activeStudyDay] || [];
                if (!dayProgress.includes(wordId)) {
                    const newProgress = { ...prev, [activeStudyDay]: [...dayProgress, wordId] };
                    return newProgress;
                }
                return prev;
            });
        }
    }, [activeStudyDay, currentIndex, filteredWords]);

    useEffect(() => {
        if (viewMode === 'flashcard' && activeStudyDay !== null) {
            recordStudyProgress();
        }
    }, [currentIndex, viewMode, activeStudyDay, recordStudyProgress]);

    const toggleMarkedAsLearned = useCallback((id: number) => {
        setMarkedAsLearned(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, []);

    // --- Helper functions for Audio Decoding ---
    function decode(base64: string) {
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }

    async function decodeAudioData(
        data: Uint8Array,
        ctx: AudioContext,
        sampleRate: number,
        numChannels: number,
    ): Promise<AudioBuffer> {
        const dataInt16 = new Int16Array(data.buffer);
        const frameCount = dataInt16.length / numChannels;
        const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

        for (let channel = 0; channel < numChannels; channel++) {
            const channelData = buffer.getChannelData(channel);
            for (let i = 0; i < frameCount; i++) {
                channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
            }
        }
        return buffer;
    }
    // -------------------------------------------

    const playWordAudio = useCallback(async (word: VocabularyWord) => {
        if (!word) return;
        if (loadingAudioId !== null) return; // Prevent multiple clicks

        setLoadingAudioId(word.id);
        const text = word.reading || word.kanji;

        try {
            // Create context only on user gesture
            const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
            if (outputAudioContext.state === 'suspended') {
                await outputAudioContext.resume();
            }

            // Check cache first
            const cachedData = await getCachedAudio(text);
            let pcmData: Uint8Array;

            if (cachedData) {
                // Hit cache
                pcmData = cachedData;
            } else {
                // Miss cache - fetch from AI
                const response = await ai.models.generateContent({
                    model: "gemini-2.5-flash-preview-tts",
                    contents: [{ parts: [{ text: text }] }],
                    config: {
                        responseModalities: ['AUDIO'],
                        speechConfig: {
                            voiceConfig: {
                                prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Kore' is good for clear reading
                            },
                        },
                    },
                });

                const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
                if (!base64Audio) throw new Error("No audio data from AI");
                
                pcmData = decode(base64Audio);
                // Save to cache
                await saveCachedAudio(text, pcmData);
            }
            
            // Play audio
            const audioBuffer = await decodeAudioData(
                pcmData,
                outputAudioContext,
                24000,
                1,
            );
            const source = outputAudioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(outputAudioContext.destination);
            source.start();

        } catch (error) {
            console.error("Error playing audio:", error);
        } finally {
            setLoadingAudioId(null);
        }
    }, [loadingAudioId]);

    const handlePlayPronunciation = useCallback(() => {
        const word = filteredWords[currentIndex];
        if (word) playWordAudio(word);
    }, [filteredWords, currentIndex, playWordAudio]);

    const handleNext = useCallback(() => { setIsFlipped(false); setTimeout(() => { setCurrentIndex((prev) => (prev + 1) % filteredWords.length); }, 150); }, [filteredWords.length]);
    const handlePrev = useCallback(() => { setIsFlipped(false); setTimeout(() => { setCurrentIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length); }, 150); }, [filteredWords.length]);
    const handleFlip = useCallback(() => setIsFlipped(prev => !prev), []);

    const handleLogin = (key: string) => {
        const upperKey = key.toUpperCase();
        if (upperKey === 'MKKOAMK') { const authData = { type: 'master' as const }; setAuth(authData); localStorage.setItem('authData', JSON.stringify(authData)); setLoginError(null); return; }
        const currentDeviceId = deviceIdRef.current;
        if (!currentDeviceId) { setLoginError('Could not identify device.'); return; }
        const keyIndex = deviceKeys.findIndex(dk => dk.key.toUpperCase() === upperKey);
        if (keyIndex !== -1) {
            const deviceKey = deviceKeys[keyIndex];
            if (deviceKey.deviceIds.includes(currentDeviceId) || deviceKey.deviceIds.length < deviceKey.limit) {
                if (!deviceKey.deviceIds.includes(currentDeviceId)) {
                    const updatedKeys = [...deviceKeys];
                    updatedKeys[keyIndex] = { ...deviceKey, deviceIds: [...deviceKey.deviceIds, currentDeviceId] };
                    setDeviceKeys(updatedKeys);
                    localStorage.setItem('deviceKeys', JSON.stringify(updatedKeys));
                }
                const authData: { type: 'standard'; key: string; loginTime?: number } = { type: 'standard', key: deviceKey.key };
                 if (deviceKey.duration) {
                    authData.loginTime = Date.now();
                }
                setAuth(authData);
                localStorage.setItem('authData', JSON.stringify(authData));
                setLoginError(null);
            } else { setLoginError('This key has reached its device limit.'); }
        } else { setLoginError('Invalid key provided.'); }
    };

    const generateRandomKey = useCallback(() => { const gen = () => Math.random().toString(36).substring(2, 10).toUpperCase(); let newKey = gen(); while (deviceKeys.some(dk => dk.key.toUpperCase() === newKey) || newKey === 'MKKOAMK') { newKey = gen(); } return newKey; }, [deviceKeys]);
    const handleGenerateKey = () => setNewKeyInput(generateRandomKey());
    const handleSecurityConfirm = () => { if (securityCode === SECURITY_PIN) { securityModal.action?.(); handleSecurityCancel(); } else { setSecurityError('Incorrect security code.'); setTimeout(() => setSecurityCode(''), 500); } };
    const handleSecurityCancel = () => { setSecurityModal({ isOpen: false, action: null, title: '' }); setSecurityCode(''); setSecurityError(''); };
    const withSecurityCheck = (action: () => void, title: string) => { setSecurityError(''); setSecurityCode(''); setSecurityModal({ isOpen: true, action, title }); };
    const handleAddKey = () => { const keyToAdd = newKeyInput.trim(); if (keyToAdd && !deviceKeys.some(dk => dk.key.toUpperCase() === keyToAdd.toUpperCase()) && keyToAdd.toUpperCase() !== 'MKKOAMK') { withSecurityCheck(() => { const newKey: DeviceKey = { key: keyToAdd, deviceIds: [], limit: 1 }; const updatedKeys = [...deviceKeys, newKey]; setDeviceKeys(updatedKeys); localStorage.setItem('deviceKeys', JSON.stringify(updatedKeys)); setNewKeyInput(''); }, "Confirm Saving New Key"); } else { alert("Error: Key cannot be empty, already exists, or is master key."); } };
    const handleDeleteKey = (key: string) => withSecurityCheck(() => { const updated = deviceKeys.filter(k => k.key !== key); setDeviceKeys(updated); localStorage.setItem('deviceKeys', JSON.stringify(updated)); }, `Confirm Deletion of Key: "${key}"`);
    const handleCopyKey = (key: string) => { navigator.clipboard.writeText(key).then(() => { setCopiedKeys(p => ({ ...p, [key]: true })); setTimeout(() => setCopiedKeys(p => ({ ...p, [key]: false })), 2000); }).catch(err => console.error('Failed to copy', err)); };
    const handleSaveChanges = () => withSecurityCheck(() => { try { localStorage.setItem('customVocabulary', JSON.stringify(vocabulary)); alert('Changes saved!'); setIsEditMode(false); } catch (e) { alert('Could not save changes.'); } }, "Confirm Saving Vocabulary Changes");
    const handleResetData = () => withSecurityCheck(() => { localStorage.removeItem('customVocabulary'); setVocabulary(vocabularyData); setIsEditMode(false); alert('Vocabulary reset.'); }, "Confirm Resetting Vocabulary Data");
    
    const handleSelectDay = (dayIndex: number) => { setActiveStudyDay(dayIndex); setViewMode('flashcard'); };
    const handleExitStudySession = () => { setActiveStudyDay(null); setViewMode('study'); };
    const handleQuizComplete = () => setViewMode('study');
    const handleViewChange = (mode: ViewMode) => {
        setActiveStudyDay(null);
        setViewMode(mode);
    }
    
    const currentWord = filteredWords[currentIndex];
    const wordsToShow = isEditMode ? vocabulary : filteredWords;

    const getActiveViewClass = (mode: string) => viewMode === mode && activeStudyDay === null ? 'shadow-neumorphic-inset text-blue-600' : 'hover:shadow-neumorphic-inset text-slate-500';
    
    if (!auth) return <Login onLogin={handleLogin} error={loginError} />;

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 font-sans bg-neumorphic-bg text-neumorphic-text">
            <header className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                 <div className="text-center sm:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-700">Japanese Technical Vocabulary</h1>
                    <p className="text-slate-500 mt-2">Flashcards for Construction & Engineering Terms</p>
                    {userKeyData?.duration && auth.loginTime && (
                        <TrialTimer loginTime={auth.loginTime} duration={userKeyData.duration} />
                    )}
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all duration-200 bg-neumorphic-bg"
                    title="Toggle Theme"
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                </button>
            </header>
            
            <div className="w-full max-w-4xl text-center mb-8">
                <div className="bg-neumorphic-bg shadow-neumorphic-inset p-1 rounded-full w-fit mx-auto flex flex-wrap justify-center">
                    <button onClick={() => handleViewChange('dashboard')} className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${getActiveViewClass('dashboard')}`}>Dashboard</button>
                    <button onClick={() => handleViewChange('flashcard')} className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${getActiveViewClass('flashcard')}`}>Flashcard</button>
                    <button onClick={() => handleViewChange('list')} className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${getActiveViewClass('list')}`}>List View</button>
                    <button onClick={() => handleViewChange('study')} className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${getActiveViewClass('study')}`}>Study Plan</button>
                    <button onClick={() => handleViewChange('quiz')} className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${getActiveViewClass('quiz')}`}>Quiz</button>
                </div>
            </div>

            <main className="w-full flex-grow flex flex-col items-center justify-center">
                {viewMode === 'dashboard' && activeStudyDay === null && (
                    <Dashboard
                        totalWords={vocabulary.length}
                        learnedWordsCount={allLearnedWords.length}
                        studyProgress={studyProgress}
                        totalDays={TOTAL_STUDY_DAYS}
                        onNavigate={handleViewChange}
                    />
                )}
                {viewMode === 'study' && activeStudyDay === null && (
                    <StudyPlan studyProgress={studyProgress} onSelectDay={handleSelectDay} totalDays={TOTAL_STUDY_DAYS} wordsPerDay={WORDS_PER_DAY} />
                )}
                {viewMode === 'quiz' && activeStudyDay === null && (
                    <Quiz learnedWords={allLearnedWords} onQuizComplete={handleQuizComplete} vocabulary={vocabulary} />
                )}
                {viewMode === 'flashcard' && (
                    <Flashcard 
                        word={currentWord} 
                        isFlipped={isFlipped} 
                        onFlip={handleFlip} 
                        onPlayAudio={handlePlayPronunciation} 
                        isAudioLoading={loadingAudioId !== null}
                        isMarkedAsLearned={currentWord ? markedAsLearned.has(currentWord.id) : false}
                        onToggleMarkedAsLearned={() => currentWord && toggleMarkedAsLearned(currentWord.id)}
                    />
                )}
                {viewMode === 'list' && activeStudyDay === null && (
                    <ListView 
                        words={wordsToShow} 
                        isEditMode={isEditMode} 
                        setWords={setVocabulary} 
                        categories={categories.filter(c => c !== 'All')}
                        markedAsLearned={markedAsLearned}
                        onToggleMarkedAsLearned={toggleMarkedAsLearned}
                        onPlayAudio={playWordAudio}
                        loadingAudioId={loadingAudioId}
                    />
                )}
            </main>
            
            <footer className="w-full max-w-4xl mt-8">
                 {activeStudyDay !== null && viewMode === 'flashcard' && (
                    <div className="text-center mb-4">
                        <button onClick={handleExitStudySession} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-6 rounded-lg text-slate-600">
                           Back to Study Plan
                        </button>
                    </div>
                )}
                <div className="bg-neumorphic-bg shadow-neumorphic-outset p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                   <div className={`flex items-center gap-4 w-full md:w-auto transition-opacity ${isEditMode || activeStudyDay !== null ? 'opacity-50 pointer-events-none' : ''}`}>
                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-lg"><select value={currentCategory} onChange={(e) => setCurrentCategory(e.target.value)} className="bg-transparent border-none outline-none text-neumorphic-text p-2.5 rounded-lg appearance-none" disabled={isEditMode || activeStudyDay !== null}>{categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}</select></div>
                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-lg flex-grow"><input type="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent border-none outline-none text-neumorphic-text p-2.5 w-full md:w-48" disabled={isEditMode || activeStudyDay !== null}/></div>
                    </div>
                    
                     {viewMode === 'flashcard' ? (
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <button onClick={handlePrev} className="p-3 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full disabled:opacity-50" disabled={filteredWords.length < 2} aria-label="Previous card"><ArrowLeftIcon /></button>
                                <button onClick={handleFlip} className="px-6 py-3 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full flex items-center gap-2 disabled:opacity-50" disabled={!currentWord}><FlipIcon className="h-6 w-6" />Flip</button>
                                <button onClick={handleNext} className="p-3 bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-full disabled:opacity-50" disabled={filteredWords.length < 2} aria-label="Next card"><ArrowRightIcon /></button>
                            </div>
                            <div className="text-center text-slate-500 min-w-[60px]">{filteredWords.length > 0 ? `${currentIndex + 1} / ${filteredWords.length}` : '0 / 0'}</div>
                        </div>
                    ) : (
                         <div className="text-slate-500 text-center md:text-right">Showing {wordsToShow.length} of {vocabulary.length} words</div>
                    )}
                </div>

                {auth?.type === 'master' && (
                     <div className="w-full max-w-4xl mt-4 bg-neumorphic-bg shadow-neumorphic-outset p-4 rounded-xl">
                        <h3 className="text-lg font-semibold text-slate-700 text-center mb-4">Master Controls</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-md font-semibold text-slate-600 mb-2">Device Key Management</h4>
                                <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 mb-2">
                                    <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-lg flex-grow"><input type="text" placeholder="Enter or generate a key" value={newKeyInput} onChange={(e) => setNewKeyInput(e.target.value.toUpperCase())} className="bg-transparent border-none w-full p-2.5 outline-none font-mono"/></div>
                                    <button onClick={handleGenerateKey} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-4 rounded-lg w-full sm:w-auto">Generate</button>
                                    <button onClick={handleAddKey} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-4 rounded-lg w-full sm:w-auto">Save Key</button>
                                </div>
                                {deviceKeys.length > 0 && (
                                    <div className="pt-2">
                                        <h5 className="text-sm font-semibold text-slate-500 mb-2 text-center">Active Keys ({deviceKeys.length})</h5>
                                        <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-lg max-h-32 overflow-y-auto space-y-2 p-2">{deviceKeys.map(dk => (<li key={dk.key} className="bg-neumorphic-bg shadow-neumorphic-outset p-2 rounded-lg flex justify-between items-center text-sm gap-2"><div className="flex-grow overflow-hidden"><span className="font-mono text-slate-600 select-all truncate">{dk.key}</span><div className={`mt-1 text-xs ${dk.duration ? 'text-blue-500' : (dk.deviceIds.length > 0 ? 'text-green-500' : 'text-yellow-500')}`}>{dk.duration ? `Trial (${dk.duration}m)` : `Used: ${dk.deviceIds.length} / ${dk.limit}`}</div></div><div className="flex items-center gap-2 flex-shrink-0"><button onClick={() => handleCopyKey(dk.key)} className={`text-xs font-medium py-1 px-2 rounded-md transition-colors ${copiedKeys[dk.key] ? 'bg-green-600 text-white' : 'bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset'}`}>{copiedKeys[dk.key] ? 'Copied!' : 'Copy'}</button><button onClick={() => handleDeleteKey(dk.key)} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset text-xs font-medium py-1 px-2 rounded-md text-red-500">Delete</button></div></li>))}</div>
                                    </div>
                                )}
                            </div>
                             <div>
                                <h4 className="text-md font-semibold text-slate-600 mb-2">Vocabulary Data Management</h4>
                                <div className="flex items-center justify-center p-2 rounded-lg bg-neumorphic-bg shadow-neumorphic-inset">
                                    <label htmlFor="edit-mode-toggle" className="mr-4 text-slate-500">Edit Data</label>
                                    <button id="edit-mode-toggle" role="switch" aria-checked={isEditMode} onClick={() => setIsEditMode(p => !p)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-neumorphic-bg shadow-neumorphic-inset`}><span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-neumorphic-outset ${isEditMode ? 'translate-x-6 bg-blue-600' : 'translate-x-1'}`} /></button>
                                </div>
                                {isEditMode && (<div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center"><button onClick={handleSaveChanges} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-4 rounded-lg text-green-600">Save Changes</button><button onClick={handleResetData} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-4 rounded-lg text-amber-600">Reset to Default</button></div>)}
                            </div>
                        </div>
                    </div>
                )}
            </footer>
            
            {securityModal.isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-neumorphic-bg shadow-neumorphic-outset rounded-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-slate-700 mb-4">{securityModal.title}</h2>
                        <p className="text-slate-500 mb-4">For security, please enter the master confirmation code to proceed.</p>
                        <div className="space-y-2">
                            <label htmlFor="security-code" className="block text-sm font-medium text-slate-600">Security Code</label>
                            <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-lg"><input id="security-code" type="password" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSecurityConfirm()} className="bg-transparent border-none w-full p-2.5 outline-none font-mono tracking-widest text-center" placeholder="******" autoFocus /></div>
                        </div>
                        {securityError && <p className="text-red-500 text-sm mt-2 text-center">{securityError}</p>}
                        <div className="mt-6 flex justify-end gap-3"><button onClick={handleSecurityCancel} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-medium py-2 px-4 rounded-lg">Cancel</button><button onClick={handleSecurityConfirm} className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-2 px-4 rounded-lg text-blue-600">Confirm</button></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
