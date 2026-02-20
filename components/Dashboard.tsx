import React, { useState, useMemo, useEffect } from 'react';
import Card from './Card';
import Dropdown from './Dropdown';
import { studyDataByChapter, chapterCount } from '../data/content';
import { chapter2021Data } from '../data/2021-old-question';
import { chapter2022Data } from '../data/2022-old-question';
import { chapter2023Data } from '../data/2023-old-question';
import { chapter2024Data } from '../data/2024-old-question';
import { chapter2025Data } from '../data/2025-old-question';
import { StudyCardData, Kanji } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { LogoutIcon, BookmarkIcon, SearchIcon, BookOpenIcon, PencilIcon, GlobeIcon, RefreshIcon, ClockIcon, ChevronLeftIcon, ListBulletIcon, CheckCircleSolidIcon, SunIcon, MoonIcon, AcademicCapIcon, UsersIcon, FolderIcon, LoadingSpinnerIcon } from './Icons';
import { useProgress } from '../contexts/ProgressContext';
import ChapterQuiz from './ChapterQuiz';
import { kanjiDictionary } from '../data/kanji';
import KanjiTooltip from './KanjiTooltip';
import { supabase } from '../lib/supabase';

interface HistoryEntry {
  deviceId: string;
  accessKey: string;
  timestamp: string;
  userAgent: string;
  status?: 'success' | 'failure';
}

interface DashboardProps {
  selectedApp: 'main' | '2021' | '2022' | '2023' | '2024' | '2025';
  onGoBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedApp, onGoBack }) => {
  const { user, logout, syncLocalKeys } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { bookmarkedIds, studyHistory, recordAnswer } = useProgress(); 
  
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>('');

  // Questions State
  const [onlineQuestions, setOnlineQuestions] = useState<StudyCardData[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  
  // Mock Exam State
  const [isMockExam, setIsMockExam] = useState(false);
  const [mockQuestions, setMockQuestions] = useState<StudyCardData[]>([]);

  // Kanji Tooltip State
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  // --- Trial Timer Logic ---
  useEffect(() => {
    if (user?.type === 'trial' && user.trialExpiresAt) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const expires = new Date(user.trialExpiresAt!).getTime();
        const distance = expires - now;

        if (distance < 0) {
          clearInterval(interval);
          alert("Trial period expired (15 minutes). Please contact admin for full access.");
          logout();
        } else {
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setTimeLeft(`${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [user, logout]);


  const isOldQuestionMode = ['2021', '2022', '2023', '2024', '2025'].includes(selectedApp);

  // Local fallback data calculation
  const { localTotalChapters } = useMemo(() => {
    if (isOldQuestionMode) {
      return { localTotalChapters: 1 };
    }
    return { localTotalChapters: chapterCount };
  }, [isOldQuestionMode, selectedApp]);
  
  // Chapter Selection State
  const [activeChapter, setActiveChapter] = useState(1); // Default to 1

  // Handle Initial Chapter for Old Questions
  useEffect(() => {
      if (isOldQuestionMode) {
          setActiveChapter(parseInt(selectedApp));
      } else {
          // Reset to chapter 1 when switching back to main
          // But only if we are currently on a "year" chapter
          if (activeChapter > 100) setActiveChapter(1);
      }
  }, [selectedApp, isOldQuestionMode]);

  // --- FETCH QUESTIONS FROM DB ---
  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoadingQuestions(true);
      const category = isOldQuestionMode ? selectedApp : activeChapter.toString();

      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('category', category);

        if (error) throw error;

        if (data && data.length > 0) {
          // Map DB columns to StudyCardData interface
          const mappedQuestions: StudyCardData[] = data.map((q: any) => ({
            id: q.id,
            questionJP: q.question_jp,
            questionMY: q.question_my,
            options: q.options,
            correctOptionId: q.correct_option_id,
            explanation: q.explanation
          }));
          
          // Sort by ID to ensure order
           mappedQuestions.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

          setOnlineQuestions(mappedQuestions);
        } else {
          throw new Error("No data found in DB, triggering fallback");
        }
      } catch (err: any) {
        // Silent fallback for missing table or connection issues
        // Only log if it's NOT the expected "table missing" error to keep console clean for user
        if (err.code !== 'PGRST205' && err.message !== "No data found in DB, triggering fallback") {
             console.warn("Using local data due to DB error:", err.message);
        }
        
        let localData: StudyCardData[] = [];
        if (isOldQuestionMode) {
           const oldDataMap: Record<string, StudyCardData[]> = {
              '2021': chapter2021Data,
              '2022': chapter2022Data,
              '2023': chapter2023Data,
              '2024': chapter2024Data,
              '2025': chapter2025Data,
            };
            localData = oldDataMap[selectedApp] || [];
        } else {
            localData = studyDataByChapter[activeChapter] || [];
        }
        setOnlineQuestions(localData);
      } finally {
        setIsLoadingQuestions(false);
      }
    };

    fetchQuestions();
  }, [activeChapter, selectedApp, isOldQuestionMode]);


  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [view, setView] = useState<'study' | 'list' | 'quiz'>('study');

  // Admin View State
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');
  const [isAdminViewVisible, setIsAdminViewVisible] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);
  const [syncStatus, setSyncStatus] = useState<string>('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState('');
  
  const DEVICE_HISTORY_KEY = 'auth_device_history';
  const ADMIN_PASSCODE = '454879';

  const loadHistoryData = () => {
    try {
      const historyJSON = localStorage.getItem(DEVICE_HISTORY_KEY);
      setHistoryData(historyJSON ? JSON.parse(historyJSON) : []);
    } catch (e) {
      console.error("Failed to parse history data from localStorage", e);
      setHistoryData([]);
    }
  };

  useEffect(() => {
    if (isAdminViewVisible) {
      loadHistoryData();
    }
  }, [isAdminViewVisible]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.toLowerCase() === 'mkkocheck') {
      setShowAdminLogin(true);
      setAdminPassword('');
      setAdminLoginError('');
      setSearchQuery('');
    } else {
      if (isAdminViewVisible) setIsAdminViewVisible(false);
      setSearchQuery(value);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSCODE) {
      setIsAdminViewVisible(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      setAdminLoginError('Incorrect Passcode.');
    }
  };

  const handleSyncKeys = async () => {
      setIsSyncing(true);
      setSyncStatus('Syncing...');
      try {
          const result = await syncLocalKeys();
          setSyncStatus(result);
      } catch (e) {
          setSyncStatus('Sync Failed.');
      } finally {
          setIsSyncing(false);
      }
  };

  // --- MIGRATION LOGIC ---
  const handleMigrateDataToDB = async () => {
      if (!window.confirm("This will upload all local content to Supabase. Continue?")) return;
      
      setMigrationStatus("Starting migration...");
      setIsSyncing(true);

      const allDataToUpload: {category: string, data: StudyCardData[]}[] = [];

      // 1. Gather all local data
      // Chapters 1-5
      for (let i = 1; i <= 5; i++) {
          if (studyDataByChapter[i]) {
              allDataToUpload.push({ category: i.toString(), data: studyDataByChapter[i] });
          }
      }
      // Years
      allDataToUpload.push({ category: '2021', data: chapter2021Data });
      allDataToUpload.push({ category: '2022', data: chapter2022Data });
      allDataToUpload.push({ category: '2023', data: chapter2023Data });
      allDataToUpload.push({ category: '2024', data: chapter2024Data });
      allDataToUpload.push({ category: '2025', data: chapter2025Data });

      let successCount = 0;
      let failCount = 0;

      for (const group of allDataToUpload) {
          for (const q of group.data) {
              const payload = {
                  id: q.id,
                  category: group.category,
                  question_jp: q.questionJP,
                  question_my: q.questionMY,
                  options: q.options, // Supabase handles JSON automatically
                  correct_option_id: q.correctOptionId,
                  explanation: q.explanation
              };

              const { error } = await supabase.from('questions').upsert(payload);
              if (error) {
                  console.error("Migration error for", q.id, error);
                  failCount++;
              } else {
                  successCount++;
              }
          }
      }

      setMigrationStatus(`Migration Complete. Success: ${successCount}, Failed: ${failCount}`);
      setIsSyncing(false);
  };

  const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {
    const data = kanjiDictionary[kanji];
    if (data) {
      // Calculate position
      const rect = event.currentTarget.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
      setTooltipPos({
        top: rect.bottom + scrollTop,
        left: rect.left + scrollLeft
      });
      setSelectedKanji(data);
    }
  };

  // Filter Logic
  const filteredData = useMemo(() => {
    let data = onlineQuestions;
    if (showOnlyBookmarked) {
      data = data.filter(item => bookmarkedIds.has(item.id));
    }
    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      data = data.filter(item => {
        const inQuestionJP = item.questionJP.toLowerCase().includes(lowercasedQuery);
        const inQuestionMY = item.questionMY.toLowerCase().includes(lowercasedQuery);
        const inOptions = item.options.some(opt => 
          opt.textMY.toLowerCase().includes(lowercasedQuery) ||
          opt.textJP.toLowerCase().includes(lowercasedQuery)
        );
        return inQuestionJP || inQuestionMY || inOptions;
      });
    }
    return data;
  }, [onlineQuestions, showOnlyBookmarked, bookmarkedIds, searchQuery]);

  useEffect(() => {
    setCurrentCardIndex(0);
    // Don't reset study answers on chapter change anymore
    setView('study');
    setIsMockExam(false);
  }, [activeChapter, showOnlyBookmarked, searchQuery]);

  const goToNextCard = () => {
    setCurrentCardIndex(prev => Math.min(prev + 1, filteredData.length - 1));
  };
  
  const goToPreviousCard = () => {
    setCurrentCardIndex(prev => Math.max(prev - 1, 0));
  };
  
  const handleChapterChange = (chapter: number) => {
    setActiveChapter(chapter);
  }

  const handleQuestionSelect = (index: number) => {
    setCurrentCardIndex(index);
    setView('study');
  };
  
  const handleOptionSelect = (cardId: string, optionId: number) => {
    if (studyHistory[cardId] !== undefined) return;
    recordAnswer(cardId, optionId);
  };

  const startMockExam = () => {
    // Gather all questions
    let allQuestions: StudyCardData[] = [];
    
    // Add chapters 1-5
    for (let i = 1; i <= 5; i++) {
        if (studyDataByChapter[i]) {
            allQuestions = [...allQuestions, ...studyDataByChapter[i]];
        }
    }
    // Add old questions
    allQuestions = [
        ...allQuestions,
        ...chapter2021Data,
        ...chapter2022Data,
        ...chapter2023Data,
        ...chapter2024Data,
        ...chapter2025Data
    ];

    // Shuffle and pick 40
    const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 40);
    setMockQuestions(shuffled);
    setIsMockExam(true);
    setView('quiz');
  };

  const currentCard = filteredData[currentCardIndex];
  
  const chapterOptions = useMemo(() => {
    if (isOldQuestionMode) {
      return [{ value: Number(selectedApp), label: `${selectedApp}年 過去問題` }];
    }
    return Array.from({ length: localTotalChapters }, (_, i) => ({
      value: i + 1,
      label: `Chapter ${i + 1}`,
    }));
  }, [isOldQuestionMode, localTotalChapters, selectedApp]);

  const activeChapterLabel = useMemo(() => {
    if (isMockExam) return "Mock Exam (40 Questions)";
    const opt = chapterOptions.find(o => o.value === activeChapter);
    return opt ? opt.label : '';
  }, [activeChapter, chapterOptions, isMockExam]);

  const answeredIDsInFilter = useMemo(() => {
    const filteredIds = new Set(filteredData.map(c => c.id));
    return Object.keys(studyHistory).filter(answeredId => filteredIds.has(answeredId));
  }, [studyHistory, filteredData]);
  
  const answeredCount = answeredIDsInFilter.length;

  const correctCount = useMemo(() => {
    return answeredIDsInFilter.reduce((count, cardId) => {
      const card = filteredData.find(c => c.id === cardId);
      if (card && studyHistory[cardId] === card.correctOptionId) {
        return count + 1;
      }
      return count;
    }, 0);
  }, [studyHistory, filteredData, answeredIDsInFilter]);

  const renderContent = () => {
    if (isAdminViewVisible) {
      return (
         <div className="space-y-4 p-6 rounded-[2rem] shadow-neumorphic-inset bg-slate-800 text-slate-100">
            {/* Admin Dashboard content... */}
             <div className="flex flex-col sm:flex-row justify-between items-center pb-4 border-b border-slate-700 gap-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                    <ClockIcon className="w-8 h-8 text-blue-400" />
                    Admin Dashboard
                </h2>
                <div className='flex gap-3 flex-wrap'>
                    <button onClick={handleMigrateDataToDB} disabled={isSyncing} className="px-4 py-2 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors shadow-lg text-xs font-bold uppercase tracking-wider disabled:opacity-50">
                         {isSyncing ? 'Migrating...' : 'Migrate Data to DB'}
                    </button>
                    <button onClick={loadHistoryData} className="p-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors shadow-lg" title="Refresh History">
                        <RefreshIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {migrationStatus && (
                <div className="p-3 bg-slate-700 rounded-xl text-center">
                    <p className="text-sm font-mono text-green-400">{migrationStatus}</p>
                </div>
            )}

            {/* ... rest of admin panel ... */}
            <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                {historyData.length > 0 ? (
                    <ul className="space-y-4">
                        {historyData.slice().reverse().map((entry, index) => {
                             const isFailure = entry.status === 'failure';
                            return (
                                <li key={index} className={`p-4 rounded-2xl border text-sm flex items-start justify-between gap-4 ${isFailure ? 'bg-red-900/20 border-red-500/50' : 'bg-slate-900/60 border-green-500/30'}`}>
                                    <div className="space-y-1">
                                      <p className="flex items-center gap-2">
                                           {isFailure ? <span className="text-red-500 font-bold">Failed</span> : <span className="text-green-500 font-bold">Success</span>}
                                          <span className="font-mono text-slate-300">{entry.accessKey}</span>
                                      </p>
                                      <p className="text-xs text-slate-400">ID: {entry.deviceId}</p>
                                    </div>
                                    <div className="text-right text-xs text-slate-400 whitespace-nowrap">
                                        <p>{new Date(entry.timestamp).toLocaleDateString()}</p>
                                        <p>{new Date(entry.timestamp).toLocaleTimeString()}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-center text-slate-400 py-12 font-medium">No login history found.</p>
                )}
            </div>
        </div>
      );
    }

    if (view === 'quiz') {
      return (
        <ChapterQuiz 
          questions={isMockExam ? mockQuestions : onlineQuestions} 
          chapterTitle={activeChapterLabel}
          onExit={() => {
              setView('study');
              setIsMockExam(false);
          }}
          onKanjiClick={handleKanjiClick}
          isMockExam={isMockExam}
          timeLimit={isMockExam ? 3600 : undefined} // 1 hour for mock exam
        />
      );
    }
    
    if (view === 'list') {
        return (
            <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-inset p-4 sm:p-6">
                <div className="pb-4 mb-4 border-b border-slate-300/30">
                    <h2 className="text-xl font-black text-slate-700">{isOldQuestionMode ? `${selectedApp} Past Questions` : `Chapter ${activeChapter} Questions`}</h2>
                </div>
                <ul className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                    {filteredData.map((card, index) => {
                        const isAnswered = studyHistory[card.id] !== undefined;
                        const isCorrect = isAnswered && studyHistory[card.id] === card.correctOptionId;
                        return (
                             <li key={card.id}>
                                <button onClick={() => handleQuestionSelect(index)} className="w-full text-left p-6 bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all duration-300 flex items-start justify-between gap-6 rounded-3xl group">
                                    <div className="flex-1">
                                        <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Question {card.id}</p>
                                        <p className="text-base font-bold text-slate-700 leading-snug group-hover:text-slate-900">
                                            {language === 'my' ? card.questionMY : card.questionJP.replace(/<[^>]+>/g, '')}
                                        </p>
                                    </div>
                                    {isAnswered && (
                                        <div className={`p-2 rounded-full shadow-neumorphic-inset ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                            <CheckCircleSolidIcon className="w-7 h-7 shrink-0" />
                                        </div>
                                    )}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    if (isLoadingQuestions) {
        return (
             <div className="flex flex-col items-center justify-center py-20">
                <LoadingSpinnerIcon className="w-12 h-12 text-blue-600 mb-4" />
                <p className="text-slate-500 font-bold">Loading Questions...</p>
             </div>
        )
    }

    if (filteredData.length === 0) {
      return (
        <div className="text-center py-20 px-8 bg-neumorphic-bg rounded-[3rem] shadow-neumorphic-outset">
          {searchQuery ? (
            <>
              <SearchIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-black text-slate-700">No Results Found</h3>
              <p className="mt-2 text-slate-500 font-medium italic">
                Your search for "{searchQuery}" did not match any questions.
              </p>
            </>
          ) : showOnlyBookmarked ? (
            <>
              <BookmarkIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-black text-slate-700">No Bookmarks</h3>
              <p className="mt-2 text-slate-500 font-medium italic">
                No bookmarked questions in this chapter.
              </p>
            </>
          ) : (
             <>
              <FolderIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-black text-slate-700">Database Empty</h3>
              <p className="mt-2 text-slate-500 font-medium italic">
                  This section currently has no data. (Try Syncing in Admin Panel)
              </p>
            </>
          )}
        </div>
      );
    }

    return (
      <div className="relative">
        
        {/* Floating Navigation - Left (Visible on large screens) */}
        <button
            onClick={goToPreviousCard}
            disabled={currentCardIndex === 0}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-16 h-16 bg-neumorphic-bg rounded-full shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all disabled:opacity-0 text-slate-500 hover:text-blue-600"
            title="Previous Question"
        >
            <ChevronLeftIcon className="w-8 h-8" />
        </button>

        {/* Floating Navigation - Right (Visible on large screens) */}
        <button
            onClick={goToNextCard}
            disabled={currentCardIndex === filteredData.length - 1}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-16 h-16 bg-neumorphic-bg rounded-full shadow-neumorphic-outset hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all disabled:opacity-0 text-slate-500 hover:text-blue-600"
            title="Next Question"
        >
            <ChevronLeftIcon className="w-8 h-8 rotate-180" />
        </button>

        <p className="text-center mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
          Question <span className="text-slate-700 px-1">{currentCardIndex + 1}</span> of <span className="text-slate-700 px-1">{filteredData.length}</span>
        </p>

        <Card 
          key={currentCard.id} 
          data={currentCard}
          onKanjiClick={handleKanjiClick}
          mode="study"
          onOptionSelect={(optionId) => handleOptionSelect(currentCard.id, optionId)}
          selectedOptionId={studyHistory[currentCard.id]}
          isSubmitted={studyHistory[currentCard.id] !== undefined}
        />
        
        <div className="flex items-center justify-between mt-8 gap-6">
          <button 
              onClick={goToPreviousCard}
              disabled={currentCardIndex === 0}
              className="flex-1 py-4 text-sm font-black uppercase tracking-widest text-slate-600 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-30 disabled:grayscale"
          >
            Prev
          </button>
          <button 
              onClick={goToNextCard}
              disabled={currentCardIndex === filteredData.length - 1}
              className="flex-1 py-4 text-sm font-black uppercase tracking-widest text-blue-600 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-30 disabled:grayscale"
          >
            Next
          </button>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-neumorphic-bg">
       {/* Tooltip */}
       {selectedKanji && (
          <KanjiTooltip
            kanjiData={selectedKanji}
            position={tooltipPos}
            onClose={() => setSelectedKanji(null)}
          />
        )}

       {showAdminLogin && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm p-10 space-y-6 bg-slate-900 rounded-[2.5rem] shadow-2xl ring-1 ring-white/10">
            <h2 className="text-2xl font-black text-center text-slate-100 uppercase tracking-widest">Admin Access</h2>
            <form onSubmit={handleAdminLogin} className="space-y-6">
              <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="block w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl shadow-inner text-center font-bold tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100" placeholder="••••••" autoComplete="off" autoFocus />
              {adminLoginError && <p className="text-sm text-center text-red-400 font-bold">{adminLoginError}</p>}
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowAdminLogin(false)} className="flex-1 py-4 text-xs font-black uppercase bg-slate-700 text-slate-300 rounded-2xl hover:bg-slate-600">Cancel</button>
                <button type="submit" className="flex-1 py-4 text-xs font-black uppercase text-white bg-blue-600 rounded-2xl hover:bg-blue-500">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showProfile && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setShowProfile(false)}>
           <div className="w-full max-w-sm p-10 space-y-8 bg-neumorphic-bg rounded-[3rem] shadow-2xl animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
              <div className="text-center">
                  <div className="inline-block p-6 bg-neumorphic-bg rounded-full shadow-neumorphic-outset">
                    <UsersIcon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h2 className="mt-6 text-2xl font-black text-slate-700">Access Details</h2>
              </div>
              <div className="p-6 bg-neumorphic-bg shadow-neumorphic-inset rounded-[2rem] space-y-5">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Code</p>
                    <p className="text-xl font-mono font-black text-blue-600 tracking-wider mt-1">{user?.accessKey}</p>
                  </div>
                  
                  {/* --- Type & Expiration Info --- */}
                  <div className="pt-4 border-t border-slate-300/30">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Type</p>
                    <p className={`text-sm font-black mt-1 ${user?.type === 'trial' ? 'text-amber-500' : 'text-blue-600'}`}>
                        {user?.type === 'trial' ? 'TRIAL ACCESS' : 'PERMANENT ACCESS'}
                    </p>
                  </div>

                   {user?.type === 'trial' && timeLeft && (
                      <div className="pt-4 border-t border-slate-300/30">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Time Remaining</p>
                        <p className="text-xl font-black text-red-500 mt-1 font-mono">{timeLeft}</p>
                      </div>
                   )}

                  <div className="pt-4 border-t border-slate-300/30">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Status</p>
                    <p className="text-sm font-black text-green-600 mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        ACTIVE
                    </p>
                  </div>
              </div>
              <button
                onClick={() => setShowProfile(false)}
                className="w-full py-4 text-sm font-black uppercase tracking-widest text-slate-700 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
              >
                Close
              </button>
           </div>
        </div>
      )}
      
      <header className="sticky top-0 z-50 w-full bg-neumorphic-bg/80 backdrop-blur-md">
        <div className="flex items-center justify-between h-20 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={onGoBack}
                className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                title="Go Back"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-black text-slate-700 hidden sm:block ml-2">
                {isOldQuestionMode ? `${selectedApp}年 過去問題` : '鉄骨技術者 試験対策'}
              </h1>
            </div>
            
            {/* --- Trial Timer Display in Header --- */}
            {user?.type === 'trial' && timeLeft && (
                <div className="hidden sm:flex items-center px-4 py-2 bg-red-100 rounded-xl border border-red-200">
                    <ClockIcon className="w-4 h-4 text-red-500 mr-2 animate-pulse" />
                    <span className="text-xs font-black text-red-600 font-mono tracking-widest">{timeLeft}</span>
                </div>
            )}

            <div className="flex items-center gap-3">
                 <div className="relative group hidden sm:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <SearchIcon className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-24 sm:w-48 pl-10 pr-4 py-2.5 text-sm font-bold bg-neumorphic-bg text-neumorphic-text placeholder-slate-400 rounded-2xl shadow-neumorphic-inset border-2 border-transparent focus:outline-none transition-all"
                    />
                </div>
                 <button
                    onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
                    className={`p-3 rounded-2xl transition-all ${
                    showOnlyBookmarked
                        ? 'shadow-neumorphic-inset text-blue-600'
                        : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700'
                    }`}
                    title="Bookmarks"
                >
                    <BookmarkIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setShowProfile(true)}
                    className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all relative"
                    title="Account"
                >
                    <UsersIcon className="w-5 h-5" />
                    {user?.type === 'trial' && <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border border-white"></span>}
                </button>
                <button
                    onClick={toggleLanguage}
                    className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                    title="Language"
                >
                    <GlobeIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                    title="Theme"
                >
                    {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                </button>
                <button
                onClick={logout}
                className="p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-red-500 active:shadow-neumorphic-inset transition-all"
                title="Logout"
                >
                    <LogoutIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
      </header>

      <main className="max-w-4xl p-4 mx-auto sm:p-6 lg:p-8 pb-20">
        
       {!isAdminViewVisible && (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 mb-10 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset gap-6">
                <div className="w-full sm:w-[45%]">
                    <Dropdown
                        options={chapterOptions}
                        value={activeChapter}
                        onChange={(val) => handleChapterChange(Number(val))}
                        ariaLabel="Select Chapter"
                        disabled={isOldQuestionMode}
                    />
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                    <button
                        onClick={() => setView(view === 'study' ? 'list' : 'study')}
                        className="flex-1 flex items-center justify-center px-6 py-3 text-sm font-black uppercase tracking-wider text-slate-600 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
                    >
                        {view === 'list' ? <BookOpenIcon className="w-5 h-5 mr-2"/> : <ListBulletIcon className="w-5 h-5 mr-2"/>}
                        {view === 'list' ? 'Study' : 'Bank'}
                    </button>
                    <button
                        onClick={() => setView(view === 'quiz' ? 'study' : 'quiz')}
                        className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-black uppercase tracking-wider rounded-2xl transition-all ${view === 'quiz' ? 'text-blue-600 shadow-neumorphic-inset' : 'text-slate-600 bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset'}`}
                    >
                        <AcademicCapIcon className="w-5 h-5 mr-2"/>
                        {view === 'quiz' ? 'Exit' : 'Quiz'}
                    </button>
                </div>
            </div>

            {view !== 'quiz' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="bg-neumorphic-bg p-6 rounded-[2rem] shadow-neumorphic-outset flex items-center justify-between group">
                      <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Total</p>
                          <p className="text-3xl font-black text-slate-700">{filteredData.length}</p>
                      </div>
                      <div className="p-4 rounded-2xl shadow-neumorphic-inset text-slate-400 group-hover:text-blue-500 transition-colors">
                          <BookOpenIcon className="w-8 h-8"/>
                      </div>
                  </div>
                  <div className="bg-neumorphic-bg p-6 rounded-[2rem] shadow-neumorphic-outset flex items-center justify-between group">
                      <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Done</p>
                          <p className="text-3xl font-black text-slate-700">{answeredCount}</p>
                      </div>
                       <div className="p-4 rounded-2xl shadow-neumorphic-inset text-slate-400 group-hover:text-amber-500 transition-colors">
                          <PencilIcon className="w-8 h-8"/>
                      </div>
                  </div>
                  <div className="bg-neumorphic-bg p-6 rounded-[2rem] shadow-neumorphic-outset flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform" onClick={startMockExam}>
                      <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Mock Exam</p>
                          <p className="text-3xl font-black text-slate-700">Start</p>
                      </div>
                       <div className="p-4 rounded-2xl shadow-neumorphic-inset text-slate-400 group-hover:text-green-500 transition-colors">
                          <ClockIcon className="w-8 h-8"/>
                      </div>
                  </div>
              </div>
            )}

            {renderContent()}
        </>
       )}
      </main>
    </div>
  );
};

export default Dashboard;
