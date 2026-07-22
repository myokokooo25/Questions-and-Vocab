import React, { useState, useMemo, useEffect } from 'react';
import Card from './Card';
import Dropdown from './Dropdown';
import { studyDataByChapter, studyDataByChapter2026, studyDataByChapter2026Level2, chapterCount } from '../data/content';
import { chapter2021Data, chapter2021Parts } from '../data/2021-old-question';
import { chapter2022Data } from '../data/2022-old-question';
import { chapter2023Data } from '../data/2023-old-question';
import { chapter2024Data } from '../data/2024-old-question';
import { chapter2025Data } from '../data/2025-old-question';
import { StudyCardData, Kanji } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { LogoutIcon, BookmarkIcon, SearchIcon, BookOpenIcon, PencilIcon, GlobeIcon, RefreshIcon, ClockIcon, ChevronLeftIcon, ListBulletIcon, CheckCircleSolidIcon, SunIcon, MoonIcon, AcademicCapIcon, UsersIcon, FolderIcon, LoadingSpinnerIcon, SparkleIcon, InfoIcon, TextSizeIcon, MenuIcon } from './Icons';
import { useProgress } from '../contexts/ProgressContext';
import ChapterQuiz from './ChapterQuiz';
import { kanjiDictionary } from '../data/kanji';
import KanjiTooltip from './KanjiTooltip';
import { supabase } from '../lib/supabase';
import { vocabularyData } from '../vocabulary-flashcards/data/vocabulary';
import AnswerKeyView from './AnswerKeyView';

interface HistoryEntry {
  deviceId: string;
  accessKey: string;
  timestamp: string;
  userAgent: string;
  status?: 'success' | 'failure';
}

interface DashboardProps {
  selectedApp: 'main' | '2026' | '2026-level2' | '2021' | '2022' | '2023' | '2024' | '2025';
  onGoBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedApp, onGoBack }) => {
  const { user, logout, syncLocalKeys } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme, fontSize, setFontSize } = useTheme();
  const { bookmarkedIds, studyHistory, recordAnswer } = useProgress(); 
  
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showAppGuide, setShowAppGuide] = useState(false);
  const [showInstallInfo, setShowInstallInfo] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>('');

  // Questions State
  const [onlineQuestions, setOnlineQuestions] = useState<StudyCardData[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  
  // Mock Exam State
  const [isMockExam, setIsMockExam] = useState(false);
  const [mockQuestions, setMockQuestions] = useState<StudyCardData[]>([]);

  // Kanji Tooltip State
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
  const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  const [showFontSizeMenu, setShowFontSizeMenu] = useState(false);

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
          if (selectedApp === '2021') {
              setActiveChapter(1); // Default to Part 1 for 2021
          } else {
              setActiveChapter(parseInt(selectedApp));
          }
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
      const category = isOldQuestionMode 
        ? (selectedApp === '2021' ? '2021' : selectedApp)
        : selectedApp === '2026' 
            ? `2026-${activeChapter}` 
            : selectedApp === '2026-level2'
              ? `2026-level2-${activeChapter}`
              : activeChapter.toString();

      try {
        let query = supabase.from('questions').select('*');
        
        if (selectedApp === '2021') {
           // Fetch all parts for 2021
           query = query.like('category', '2021-%');
        } else {
           query = query.in('category', [category, `chapter${category}`]);
        }

        const { data, error } = await query;

        if (error) throw error;

        if (data && data.length > 0 && !(selectedApp === '2021' && data.length < 50)) {
          // Map DB columns to StudyCardData interface
          const mappedQuestions: StudyCardData[] = data.map((q: any) => ({
            id: q.id,
            category: q.category,
            questionJP: q.question_jp,
            questionMY: q.question_my,
            options: q.options,
            correctOptionId: q.correct_option_id,
            explanation: q.explanation,
            ai_explanation: q.ai_explanation
          }));
          
          // Sort by ID to ensure order
           mappedQuestions.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

          setOnlineQuestions(mappedQuestions);
        } else {
          // If no data in DB, use local data
          let localData: StudyCardData[] = [];
          if (isOldQuestionMode) {
             if (selectedApp === '2021') {
                 localData = chapter2021Data;
             } else {
                 const oldDataMap: Record<string, StudyCardData[]> = {
                    '2022': chapter2022Data,
                    '2023': chapter2023Data,
                    '2024': chapter2024Data,
                    '2025': chapter2025Data,
                  };
                  localData = oldDataMap[selectedApp] || [];
             }
          } else if (selectedApp === '2026') {
              localData = studyDataByChapter2026[activeChapter] || [];
          } else if (selectedApp === '2026-level2') {
              localData = studyDataByChapter2026Level2[activeChapter] || [];
          } else {
              localData = studyDataByChapter[activeChapter] || [];
          }
          setOnlineQuestions(localData);
        }
      } catch (err: any) {
        // Silent fallback for missing table or connection issues
        // Only log if it's NOT the expected "table missing" error to keep console clean for user
        if (err.code !== 'PGRST205') {
             console.warn("Using local data due to DB error:", err.message);
        }
        
        let localData: StudyCardData[] = [];
        if (isOldQuestionMode) {
           if (selectedApp === '2021') {
               localData = chapter2021Data;
           } else {
               const oldDataMap: Record<string, StudyCardData[]> = {
                  '2022': chapter2022Data,
                  '2023': chapter2023Data,
                  '2024': chapter2024Data,
                  '2025': chapter2025Data,
                };
                localData = oldDataMap[selectedApp] || [];
           }
        } else if (selectedApp === '2026') {
            localData = studyDataByChapter2026[activeChapter] || [];
        } else if (selectedApp === '2026-level2') {
            localData = studyDataByChapter2026Level2[activeChapter] || [];
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
  const [currentSessionAnswer, setCurrentSessionAnswer] = useState<number | null>(null);

  // Admin View State
  const [isAdminViewVisible, setIsAdminViewVisible] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<{key: string, userName: string, count: number}[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSyncingVocab, setIsSyncingVocab] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState('');
  const [bulkJson, setBulkJson] = useState('');
  const [isBulkUploading, setIsBulkUploading] = useState(false);
  
  const DEVICE_HISTORY_KEY = 'auth_device_history';

  // --- REALTIME PRESENCE ---
  useEffect(() => {
    if (!user) return;

    const channel = supabase.channel('online-users', {
      config: {
        presence: {
          key: user.accessKey,
        },
      },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const onlineList = Object.keys(state).map(key => {
            const presences = state[key] as any[];
            return {
                key,
                userName: presences[0]?.user_name || 'Unknown',
                count: presences.length // Number of devices using this key
            };
        });
        setOnlineUsers(onlineList);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_name: user.userName || 'Unknown',
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

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
    if (isAdminViewVisible) setIsAdminViewVisible(false);
    setSearchQuery(value);
  };

  // --- MIGRATION LOGIC ---
  // --- MIGRATION LOGIC FOR 2026 ---
  const handleMigrate2026DataToDB = async () => {
      setMigrationStatus("Starting migration for 2026 data...");
      setIsSyncing(true);
      try {
          const allDataToUpload: {category: string, data: StudyCardData[]}[] = [];
          
          for (let i = 1; i <= 5; i++) {
              if (studyDataByChapter2026[i]) {
                  allDataToUpload.push({ category: `2026-${i}`, data: studyDataByChapter2026[i] });
              }
              if (studyDataByChapter2026Level2[i]) {
                  allDataToUpload.push({ category: `2026-level2-${i}`, data: studyDataByChapter2026Level2[i] });
              }
          }

          let successCount = 0;
          let failCount = 0;
          let lastError = '';

          setMigrationStatus("Checking database for existing records...");
          const { data: existingRows, error: fetchErr } = await supabase
            .from('questions')
            .select('id, ai_explanation');

          if (fetchErr) {
            console.error("Error fetching existing rows:", fetchErr);
          }

          const existingMap = new Map<string, string | null>(
            existingRows?.map(row => [String(row.id), row.ai_explanation]) || []
          );

          setMigrationStatus("Synchronizing 2026 questions (preserving existing AI explanations)...");

          for (const group of allDataToUpload) {
              for (const q of group.data) {
                  const idStr = String(q.id);
                  const existingExplanation = existingMap.get(idStr);
                  
                  const finalExplanation = existingExplanation || q.ai_explanation || null;

                  const payload = {
                      id: q.id,
                      category: group.category,
                      question_jp: q.questionJP,
                      question_my: q.questionMY,
                      options: q.options, // Supabase handles JSON automatically
                      correct_option_id: q.correctOptionId,
                      explanation: q.explanation,
                      ai_explanation: finalExplanation
                  };

                  const { error } = await supabase.from('questions').upsert(payload);
                  if (error) {
                      console.error(`Error migrating question ${q.id}:`, error);
                      failCount++;
                      lastError = error.message;
                  } else {
                      successCount++;
                  }
                  
                  setMigrationStatus(`Migrated ${successCount} 2026 questions... ${failCount > 0 ? `(${failCount} failed)` : ''}`);
              }
          }

          if (failCount > 0) {
              setMigrationStatus(`Completed with errors. Success: ${successCount}, Failed: ${failCount}. Last error: ${lastError}`);
          } else {
              setMigrationStatus(`Successfully migrated ${successCount} 2026 questions!`);
          }
      } catch (error: any) {
          console.error("Migration failed:", error);
          setMigrationStatus(`Migration failed: ${error.message}`);
      } finally {
          setIsSyncing(false);
          setTimeout(() => setMigrationStatus(''), 5000);
      }
  };

  React.useEffect(() => {
    if (localStorage.getItem('force_migrate_2026_v14') !== 'done') {
      localStorage.setItem('force_migrate_2026_v14', 'done');
      handleMigrate2026DataToDB();
    }
  }, []);

  const handleMigrateDataToDB = async () => {
      setMigrationStatus("Starting migration...");
      setIsSyncing(true);

      try {
          const allDataToUpload: {category: string, data: StudyCardData[]}[] = [];

          // 1. Gather all local data
          // Chapters 1-5
          for (let i = 1; i <= 5; i++) {
              if (studyDataByChapter[i]) {
                  allDataToUpload.push({ category: i.toString(), data: studyDataByChapter[i] });
              }
              if (studyDataByChapter2026[i]) {
                  allDataToUpload.push({ category: `2026-${i}`, data: studyDataByChapter2026[i] });
              }
              if (studyDataByChapter2026Level2[i]) {
                  allDataToUpload.push({ category: `2026-level2-${i}`, data: studyDataByChapter2026Level2[i] });
              }
          }
          // Years
          if (chapter2021Parts[1]) allDataToUpload.push({ category: '2021-1', data: chapter2021Parts[1] });
          if (chapter2021Parts[2]) allDataToUpload.push({ category: '2021-2', data: chapter2021Parts[2] });
          if (chapter2021Parts[3]) allDataToUpload.push({ category: '2021-3', data: chapter2021Parts[3] });
          allDataToUpload.push({ category: '2022', data: chapter2022Data });
          allDataToUpload.push({ category: '2023', data: chapter2023Data });
          allDataToUpload.push({ category: '2024', data: chapter2024Data });
          allDataToUpload.push({ category: '2025', data: chapter2025Data });

          let successCount = 0;
          let failCount = 0;
          let lastError = '';

          setMigrationStatus("Checking database for existing records...");
          const { data: existingRows, error: fetchErr } = await supabase
            .from('questions')
            .select('id, ai_explanation');

          if (fetchErr) {
            console.error("Error fetching existing rows:", fetchErr);
          }

          const existingMap = new Map<string, string | null>(
            existingRows?.map(row => [String(row.id), row.ai_explanation]) || []
          );

          setMigrationStatus("Synchronizing questions (preserving existing AI explanations)...");

          for (const group of allDataToUpload) {
              for (const q of group.data) {
                  const idStr = String(q.id);
                  const existingExplanation = existingMap.get(idStr);
                  
                  const finalExplanation = existingExplanation || q.ai_explanation || null;

                  const payload = {
                      id: q.id,
                      category: group.category,
                      question_jp: q.questionJP,
                      question_my: q.questionMY,
                      options: q.options, // Supabase handles JSON automatically
                      correct_option_id: q.correctOptionId,
                      explanation: q.explanation,
                      ai_explanation: finalExplanation
                  };

                  const { error } = await supabase.from('questions').upsert(payload);
                  if (error) {
                      console.error("Migration error for", q.id, error);
                      lastError = error.message;
                      failCount++;
                  } else {
                      successCount++;
                  }
              }
          }

          if (failCount > 0) {
             setMigrationStatus(`Migration Finished. Success: ${successCount}, Failed: ${failCount}. Last Error: ${lastError}`);
          } else {
             setMigrationStatus(`Migration Complete. Successfully uploaded ${successCount} questions.`);
          }
      } catch (err: any) {
          console.error("Fatal migration error:", err);
          setMigrationStatus(`Fatal Error: ${err.message}`);
      } finally {
          setIsSyncing(false);
      }
  };

  const handleMigrateVocabToDB = async () => {
      setMigrationStatus("Clearing old vocabulary data...");
      setIsSyncingVocab(true);

      try {
          // Clear existing vocabulary table first
          const { error: deleteError } = await supabase.from('vocabulary_flashcards').delete().gt('id', 0);
          
          if (deleteError) {
              console.error("Error clearing old vocab:", deleteError.message);
              setMigrationStatus(`Error clearing old database: ${deleteError.message}`);
              setIsSyncingVocab(false);
              return;
          }

          let successCount = 0;
          let failCount = 0;
          let lastError = '';

          setMigrationStatus(`Uploading ${vocabularyData.length} new vocabulary words...`);

          const batchSize = 100;
          for (let i = 0; i < vocabularyData.length; i += batchSize) {
              const batch = vocabularyData.slice(i, i + batchSize);
              
              const records = batch.map(word => ({
                  id: word.id,
                  category: word.category,
                  kanji: word.kanji,
                  reading: word.reading,
                  english: word.english,
                  burmese: word.burmese
              }));

              const { error } = await supabase.from('vocabulary_flashcards').insert(records);
              
              if (error) {
                  console.error(`Error inserting batch ${i / batchSize + 1}:`, error.message);
                  lastError = error.message;
                  failCount += batch.length;
              } else {
                  successCount += batch.length;
              }
          }

          if (failCount > 0) {
             setMigrationStatus(`Vocabulary Migration Finished. Success: ${successCount}, Failed: ${failCount}. Last Error: ${lastError}`);
          } else {
             setMigrationStatus(`Vocabulary Migration Complete. Successfully uploaded ${successCount} words.`);
          }
      } catch (err: any) {
          console.error("Fatal vocabulary migration error:", err);
          setMigrationStatus(`Fatal Error: ${err.message}`);
      } finally {
          setIsSyncingVocab(false);
      }
  };

  const handleBulkUpload = async () => {
    if (!bulkJson.trim()) {
      setMigrationStatus("Please paste JSON data first.");
      return;
    }
    
    setIsBulkUploading(true);
    setMigrationStatus("Parsing JSON...");
    
    try {
      const parsedData = JSON.parse(bulkJson);
      if (!Array.isArray(parsedData)) {
        throw new Error("JSON must be an array of questions.");
      }
      
      setMigrationStatus(`Uploading ${parsedData.length} questions...`);
      let successCount = 0;
      let failCount = 0;
      let lastError = '';

      for (const q of parsedData) {
        try {
          const payload = {
              id: q.id,
              category: q.category,
              question_jp: q.questionJP,
              question_my: q.questionMY,
              options: q.options,
              correct_option_id: q.correctOptionId,
              explanation: q.explanation,
              ai_explanation: q.ai_explanation
          };

          const { error } = await supabase.from('questions').upsert(payload);
          if (error) {
              console.error("Upload error for", q.id, error);
              lastError = error.message;
              failCount++;
          } else {
              successCount++;
          }
        } catch (e: any) {
           lastError = e.message;
           failCount++;
        }
      }

      if (failCount > 0) {
         setMigrationStatus(`Upload Finished. Success: ${successCount}, Failed: ${failCount}. Last Error: ${lastError}`);
      } else {
         setMigrationStatus(`Upload Complete. Successfully added ${successCount} questions.`);
         setBulkJson(''); // Clear on success
      }
    } catch (err: any) {
      console.error("Bulk upload error:", err);
      setMigrationStatus(`Error: ${err.message}`);
    } finally {
      setIsBulkUploading(false);
    }
  };

  const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>, questionId?: string) => {
    setSelectedQuestionId(questionId || null);
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
    setCurrentSessionAnswer(null);
    // Don't reset study answers on chapter change anymore
    setView('study');
    setIsMockExam(false);
  }, [activeChapter, showOnlyBookmarked, searchQuery]);

  const goToNextCard = () => {
    setCurrentCardIndex(prev => Math.min(prev + 1, filteredData.length - 1));
    setCurrentSessionAnswer(null);
  };
  
  const goToPreviousCard = () => {
    setCurrentCardIndex(prev => Math.max(prev - 1, 0));
    setCurrentSessionAnswer(null);
  };
  
  const handleChapterChange = (chapter: number) => {
    setActiveChapter(chapter);
  }

  const handleQuestionSelect = (index: number) => {
    setCurrentCardIndex(index);
    setCurrentSessionAnswer(null);
    setView('study');
  };
  
  const handleOptionSelect = (cardId: string, optionId: number) => {
    if (currentSessionAnswer !== null) return; // Prevent changing answer in current session view
    setCurrentSessionAnswer(optionId);
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
        if (studyDataByChapter2026[i]) {
            allQuestions = [...allQuestions, ...studyDataByChapter2026[i]];
        }
        if (studyDataByChapter2026Level2[i]) {
            allQuestions = [...allQuestions, ...studyDataByChapter2026Level2[i]];
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
      if (selectedApp === '2021') {
        return [
          { value: 1, label: '2021年 過去問題 (全50問)' },
        ];
      }
      return [{ value: Number(selectedApp), label: `${selectedApp}年 過去問題` }];
    }
    const prefix = selectedApp === '2026' ? '2026 ' : selectedApp === '2026-level2' ? '2026 Level 2 ' : '2022-2025 ';
    const options = Array.from({ length: localTotalChapters }, (_, i) => ({
      value: i + 1,
      label: `${prefix}Chapter ${i + 1}`,
    }));
    
    // Add generic "Test" category (e.g., category '6' or 'test')
    options.push({ value: 6, label: `${prefix}Test Questions` });
    
    return options;
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
                    <button onClick={handleMigrateDataToDB} disabled={isSyncing || isSyncingVocab} className="px-4 py-2 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors shadow-lg text-xs font-bold uppercase tracking-wider disabled:opacity-50">
                         {isSyncing ? 'Migrating Questions...' : 'Migrate Questions'}
                    </button>
                    <button onClick={handleMigrate2026DataToDB} disabled={isSyncing || isSyncingVocab} className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors shadow-lg text-xs font-bold uppercase tracking-wider disabled:opacity-50">
                         {isSyncing ? 'Migrating 2026...' : 'Migrate 2026 Questions'}
                    </button>
                    <button onClick={handleMigrateVocabToDB} disabled={isSyncing || isSyncingVocab} className="px-4 py-2 bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg text-xs font-bold uppercase tracking-wider disabled:opacity-50">
                         {isSyncingVocab ? 'Migrating 399 Flashcards...' : 'Migrate 399 Flashcards'}
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

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                <h3 className="text-lg font-bold text-slate-200">Bulk Add Questions (JSON)</h3>
                <p className="text-xs text-slate-400">Paste an array of question objects here. Make sure the format matches the standard JSON structure.</p>
                <textarea 
                    value={bulkJson}
                    onChange={(e) => setBulkJson(e.target.value)}
                    className="w-full h-48 bg-slate-800 border border-slate-600 rounded-xl p-4 text-sm font-mono text-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder={`[
  {
    "id": "new-1",
    "category": "1",
    "questionJP": "日本語の質問",
    "questionMY": "မြန်မာလို မေးခွန်း",
    "options": [
      { "id": 1, "textJP": "選択肢 1", "textMY": "အဖြေ ၁" },
      { "id": 2, "textJP": "選択肢 2", "textMY": "အဖြေ ၂" }
    ],
    "correctOptionId": 1,
    "explanation": {
      "titleMY": "ရှင်းလင်းချက်",
      "reasonMY": "အဖြေမှန်ရတဲ့ အကြောင်းရင်း",
      "memoryTipMY": "မှတ်သားရန်"
    }
  }
]`}
                />
                <div className="flex justify-end">
                    <button 
                        onClick={handleBulkUpload} 
                        disabled={isBulkUploading || !bulkJson.trim()} 
                        className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors shadow-lg text-sm font-bold uppercase tracking-wider disabled:opacity-50"
                    >
                        {isBulkUploading ? 'Uploading...' : 'Upload JSON'}
                    </button>
                </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        Online Users (Realtime)
                    </h3>
                    <span className="text-xs font-bold bg-slate-800 px-3 py-1 rounded-full text-slate-300">
                        {onlineUsers.length} Active Keys
                    </span>
                </div>
                
                {onlineUsers.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {onlineUsers.map((ou) => (
                            <div key={ou.key} className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-slate-200">{ou.userName}</span>
                                    <span className="font-mono text-xs text-blue-400">{ou.key}</span>
                                </div>
                                <span className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded-md">
                                    {ou.count} {ou.count === 1 ? 'device' : 'devices'}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-slate-400 py-6 font-medium text-sm">No other users online right now.</p>
                )}
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                <h3 className="text-lg font-bold text-slate-200">Local Login History</h3>
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
        </div>
      );
    }

    if (view === 'quiz') {
      const quizQuestions = isMockExam ? mockQuestions : onlineQuestions.filter(q => studyHistory[q.id] !== undefined);

      if (!isMockExam && quizQuestions.length === 0) {
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-outset text-center">
            <AcademicCapIcon className="w-16 h-16 text-slate-300 mb-4" />
            <h3 className="text-xl font-black text-slate-700">No Learnt Questions</h3>
            <p className="mt-2 text-slate-500 font-medium">
              You haven't answered any questions in this chapter yet. Please study some questions first to take a quiz.
            </p>
            <button
              onClick={() => setView('study')}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors shadow-lg text-sm font-bold uppercase tracking-wider"
            >
              Go to Study
            </button>
          </div>
        );
      }

      return (
        <ChapterQuiz 
          questions={quizQuestions} 
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
                    <h2 className="text-xl font-black text-slate-700">
                        {isOldQuestionMode && selectedApp !== '2021'
                            ? `${selectedApp} Past Questions` 
                            : `${activeChapterLabel} Questions`}
                    </h2>
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

    if (showAnswerKey) {
        return <AnswerKeyView onClose={() => setShowAnswerKey(false)} />;
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
          selectedOptionId={currentSessionAnswer !== null ? currentSessionAnswer : undefined}
          isSubmitted={currentSessionAnswer !== null}
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
       {(selectedKanji || selectedKanjiChar) && (
          <KanjiTooltip
            kanjiData={selectedKanji}
            kanjiChar={selectedKanjiChar || undefined}
            questionId={selectedQuestionId || undefined}
            position={tooltipPos}
            onClose={() => { setSelectedKanji(null); setSelectedKanjiChar(null); }}
          />
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
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">User Name</p>
                    <p className="text-xl font-bold text-slate-700 mt-1">{user?.userName || 'Unknown'}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-300/30">
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

                  {user && onlineUsers.find(ou => ou.key === user.accessKey) && (
                      <div className="pt-4 border-t border-slate-300/30">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Devices</p>
                        <p className="text-sm font-black text-blue-600 mt-1 flex items-center gap-2">
                            {onlineUsers.find(ou => ou.key === user.accessKey)?.count} Device(s) Currently Online
                        </p>
                      </div>
                  )}
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
      

      {showAppGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-blue-100 rounded-2xl shadow-neumorphic-inset text-blue-600">
                    <InfoIcon className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl sm:text-2xl font-black text-slate-700">အသုံးပြုနည်းနှင့် လေ့လာရန် အကြံပြုချက်များ</h2>
              </div>
              
              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  <div className="p-4 bg-blue-50/50 rounded-2xl shadow-neumorphic-inset">
                      <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                         <span className="text-xl">📅</span> ၁၀ လပိုင်း ၁၇ ရက်နေ့အတွက် ၃ လတာ (ရက် ၉၀) လေ့လာရန် အစီအစဉ်
                      </h3>
                      <p className="text-blue-700/80 mb-3 text-sm font-bold">ဂျပန်စာခက်ခဲသူများအတွက် ဖြည်းဖြည်းမှန်မှန် လေ့လာရန် အထူးအကြံပြုချက်</p>
                      
                      <div className="space-y-4">
                          <div>
                              <p className="font-bold text-slate-700 mb-1">၁။ အခန်းအလိုက် အစီအစဉ် (ပထမ ၁ လခွဲ)</p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                                  <li><span className="font-semibold text-blue-600">Chapter 2</span> (သံမဏိထုတ်လုပ်ခြင်း - မေးခွန်းအများဆုံးထွက်လေ့ရှိသည်) ကို အရင်ဆုံး စတင်ပါ။ (၁ ပတ်ခွဲခန့်)</li>
                                  <li><span className="font-semibold text-blue-600">Chapter 1</span> (ပစ္စည်းများ) ကို ဆက်ကြည့်ပါ။ (၁ ပတ်ခန့်)</li>
                                  <li><span className="font-semibold text-blue-600">Chapter 3</span> (အရည်အသွေးထိန်းချုပ်ခြင်း) (၁ ပတ်ခွဲခန့်)</li>
                                  <li><span className="font-semibold text-blue-600">Chapter 4 & 5</span> (ဘေးကင်းရေး နှင့် ဥပဒေ) (၁ ပတ်ခန့်)</li>
                              </ul>
                              <p className="mt-2 text-sm text-slate-500 bg-white/50 p-2 rounded-lg italic">💡 တစ်ရက်ကို မေးခွန်း ၁၀ ပုဒ် မှ ၁၅ ပုဒ်ခန့် ပုံမှန်လေ့လာပါ။ အလွတ်ကျက်ရန်ထက် ရှင်းလင်းချက်များကို နားလည်အောင် ဖတ်ရန် အရေးကြီးပါသည်။</p>
                          </div>

                          <div>
                              <p className="font-bold text-slate-700 mb-1">၂။ မေးခွန်းဟောင်းများ လေ့ကျင့်ခြင်း (ဒုတိယ ၁ လ)</p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                                  <li>2021 မှ 2025 အထိ မေးခွန်းဟောင်းများကို တစ်နှစ်ချင်းစီ လေ့ကျင့်ပါ။</li>
                                  <li>တစ်ပတ်လျှင် မေးခွန်းဟောင်း ၁ နှစ်စာ ကို ပြီးမြောက်အောင် ကြိုးစားပါ။</li>
                              </ul>
                          </div>

                          <div>
                              <p className="font-bold text-slate-700 mb-1">၃။ ပြန်လည်သုံးသပ်ခြင်းနှင့် Mock Quiz (နောက်ဆုံး ၂ ပတ်)</p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                                  <li>Bookmark မှတ်ထားသော ခက်ခဲသည့် မေးခွန်းများကိုသာ အာရုံစိုက်ပြီး ပြန်ကြည့်ပါ။</li>
                                  <li>App ထဲရှိ "Quiz" mode ကို အသုံးပြု၍ အချိန်မှတ်ကာ တကယ့်စာမေးပွဲကဲ့သို့ စမ်းသပ်ဖြေဆိုပါ။</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl shadow-neumorphic-inset">
                      <h3 className="text-lg font-bold text-slate-800 mb-2">💡 App အသုံးပြုနည်း (How to use)</h3>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                          <li><span className="font-bold text-blue-600">Kanji Tooltip:</span> ဂျပန်စာလုံးများ (Kanji) ကို နားမလည်ပါက စာလုံးပေါ်တွင် ထောက်ကြည့်/ဖိကြည့်ခြင်းဖြင့် မြန်မာလို အဓိပ္ပာယ်ကို လေ့လာပါ။</li>
                          <li><span className="font-bold text-blue-600">Bookmarks (မှတ်သားခြင်း):</span> မေးခွန်းကတ်များ၏ ညာဘက်အပေါ်ထောင့်ရှိ Bookmark icon ကိုနှိပ်၍ သိမ်းဆည်းပါ။</li>
                          <li><span className="font-bold text-blue-600">Display Modes:</span> 
                              <br/>- <span className="font-semibold">Study:</span> တစ်ပုဒ်ချင်းစီ လေ့လာရန်
                              <br/>- <span className="font-semibold">Bank:</span> မေးခွန်းများကို စာရင်းလိုက် ကြည့်ရန်
                              <br/>- <span className="font-semibold">Quiz:</span> စာမေးပွဲဖြေဆိုသကဲ့သို့ လေ့ကျင့်ရန်
                          </li>
                      </ul>
                  </div>
              </div>

              <button
                onClick={() => setShowAppGuide(false)}
                className="w-full py-4 mt-8 text-sm font-black uppercase tracking-widest text-white bg-blue-600 rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all hover:bg-blue-700"
              >
                နားလည်ပါပြီ
              </button>
           </div>
        </div>
      )}
            {showInstallInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset p-8 max-w-md w-full animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-neumorphic-bg shadow-neumorphic-inset rounded-2xl">
                  <InfoIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-700 leading-tight">သင့် iPhone သို့မဟုတ် iPad တွင် App အဖြစ် ထည့်သွင်းအသုံးပြုနည်း</h2>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Add to Home Screen</p>
                </div>
              </div>
              <div className="p-6 bg-neumorphic-bg shadow-neumorphic-inset rounded-[2rem] space-y-4 text-sm text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto">
                  <p>ဤ App ကို သင့်စက်ပစ္စည်း၏ Home Screen ပေါ်တွင် ပုံမှန် App တစ်ခုကဲ့သို့ ထည့်သွင်းအသုံးပြုနိုင်ပါသည်။ ဤသို့ပြုလုပ်ခြင်းဖြင့် Safari Address Bar များမပါဝင်ဘဲ Full-screen (မျက်နှာပြင်အပြည့်) စနစ်ဖြင့် ပိုမိုရှင်းလင်းလွယ်ကူစွာ အသုံးပြုနိုင်မည်ဖြစ်ပါသည်။</p>
                  
                  <p className="font-bold text-slate-700 mt-4">လုပ်ဆောင်ရမည့် အဆင့်များ</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၁) - Safari ဖြင့် ဝင်ရောက်ခြင်း</p>
                      <p>သင့် iPhone/iPad ရှိ Safari Browser ကိုအသုံးပြု၍ ဤ App ၏ Link ကို ဖွင့်ပါ။<br/>
                      <span className="text-xs text-slate-500">(မှတ်ချက် - Chrome၊ Facebook သို့မဟုတ် Messenger In-app Browser များဖြင့် အသုံးပြု၍မရပါ။ Safari Browser တစ်ခုတည်းဖြင့်သာ လုပ်ဆောင်နိုင်ပါသည်။)</span></p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၂) - Share Button ကို နှိပ်ခြင်း</p>
                      <p>Safari Browser ၏ အောက်ခြေ (သို့မဟုတ် အပေါ်ဘက်) တွင်ရှိသော Share Button (လေးထောင့်ကွက်ထဲမှ မြှားအပေါ်သို့ ထွက်နေသောပုံ) ကို နှိပ်ပါ။</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၃) - Add to Home Screen ကို ရွေးချယ်ခြင်း</p>
                      <p>ပေါ်လာသော Menu Options များထဲမှ အောက်ဘက်သို့ အနည်းငယ်ဆွဲချ (Scroll down) ပြီး "Add to Home Screen" ဆိုသည့် စာသားကို ရွေးချယ်ပါ။</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">အဆင့် (၄) - အတည်ပြု၍ ထည့်သွင်းခြင်း</p>
                      <p>App အမည်ကို မိမိစိတ်ကြိုက် ပြင်ဆင်နိုင်ပြီးနောက် ညာဘက်အပေါ်ထောင့်ရှိ "Add" ကို နှိပ်ပါ။</p>
                    </div>
                  </div>

                  <p className="mt-4">ယခုဆိုလျှင် သင့်ဖုန်း၏ Home Screen ပေါ်တွင် App Icon လေး ရောက်ရှိသွားပြီဖြစ်၍ နောက်နောင်တွင် အခြား Application များကဲ့သို့ပင် တိုက်ရိုက်နှိပ်၍ အလွယ်တကူ ဝင်ရောက်အသုံးပြုနိုင်ပြီ ဖြစ်ပါသည်။</p>
              </div>
              <button
                onClick={() => setShowInstallInfo(false)}
                className="w-full py-4 mt-6 text-sm font-black uppercase tracking-widest text-slate-700 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all"
              >
                Close
              </button>
           </div>
        </div>
      )}
      
      <header className="sticky top-0 z-50 w-full bg-neumorphic-bg/80 backdrop-blur-md">
        <div className="flex items-center justify-between h-20 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={onGoBack}
                className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all shrink-0"
                title="Go Back"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-black text-slate-700 hidden sm:block ml-2 whitespace-nowrap truncate">
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

            {/* --- Device Count Display --- */}
            {user && onlineUsers.find(ou => ou.key === user.accessKey) && (
                <div className="hidden sm:flex items-center px-4 py-2 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                    <span className="text-xs font-bold text-blue-700">
                        {onlineUsers.find(ou => ou.key === user.accessKey)?.count} Device(s) Active
                    </span>
                </div>
            )}

            <div className="flex items-center gap-2 sm:gap-3">
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-24 sm:w-48 pl-9 pr-3 py-2.5 text-sm font-bold bg-neumorphic-bg text-neumorphic-text placeholder-slate-400 rounded-2xl shadow-neumorphic-inset border-2 border-transparent focus:outline-none transition-all"
                    />
                </div>
                 <button
                    onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
                    className={`p-2 sm:p-3 rounded-2xl transition-all ${
                    showOnlyBookmarked
                        ? 'shadow-neumorphic-inset text-blue-600'
                        : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700'
                    }`}
                    title="Bookmarks"
                >
                    <BookmarkIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setShowAnswerKey(true)}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all"
                    title="Answer Key"
                >
                    <ListBulletIcon className="w-5 h-5" />
                </button>
                {user?.isAdmin && (
                    <button
                        onClick={() => setIsAdminViewVisible(!isAdminViewVisible)}
                        className={`p-2 sm:p-3 rounded-2xl transition-all ${
                        isAdminViewVisible
                            ? 'shadow-neumorphic-inset text-purple-600'
                            : 'shadow-neumorphic-outset text-slate-400 hover:text-purple-600'
                        }`}
                        title="Admin Panel"
                    >
                        <SparkleIcon className="w-5 h-5" />
                    </button>
                )}
                <button
                    onClick={() => setShowProfile(true)}
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all relative"
                    title="Account"
                >
                    <UsersIcon className="w-5 h-5" />
                    <span className="hidden md:block text-xs font-bold text-slate-600 max-w-[80px] truncate">
                        {user?.userName || 'Profile'}
                    </span>
                    {user?.type === 'trial' && <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border border-white"></span>}
                </button>
                <button
                    onClick={() => setShowAppGuide(true)}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all"
                    title="App Guide"
                >
                    <InfoIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={toggleLanguage}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                    title="Language"
                >
                    <GlobeIcon className="w-5 h-5" />
                </button>
                <div className="relative">
                    <button
                        onClick={() => setShowFontSizeMenu(!showFontSizeMenu)}
                        className={`p-2 sm:p-3 rounded-2xl transition-all ${showFontSizeMenu ? 'shadow-neumorphic-inset text-slate-700' : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset'}`}
                        title="Font Size"
                    >
                        <TextSizeIcon className="w-5 h-5" />
                    </button>
                    {showFontSizeMenu && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowFontSizeMenu(false)}></div>
                            <div className="absolute right-0 mt-2 w-32 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset z-50 p-2 flex flex-col gap-2">
                                <button
                                    onClick={() => { setFontSize('small'); setShowFontSizeMenu(false); }}
                                    className={`px-4 py-2 text-sm text-left rounded-xl transition-all ${fontSize === 'small' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}`}
                                >
                                    Small
                                </button>
                                <button
                                    onClick={() => { setFontSize('medium'); setShowFontSizeMenu(false); }}
                                    className={`px-4 py-2 text-sm text-left rounded-xl transition-all ${fontSize === 'medium' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}`}
                                >
                                    Medium
                                </button>
                                <button
                                    onClick={() => { setFontSize('large'); setShowFontSizeMenu(false); }}
                                    className={`px-4 py-2 text-sm text-left rounded-xl transition-all ${fontSize === 'large' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}`}
                                >
                                    Large
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                    title="Theme"
                >
                    {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : theme === 'dark' ? <SparkleIcon className="w-5 h-5 text-amber-500" /> : <SunIcon className="w-5 h-5" />}
                </button>
                <button
                    onClick={() => setShowInstallInfo(true)}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-500 active:shadow-neumorphic-inset transition-all"
                    title="iOS Install Guide"
                >
                    <InfoIcon className="w-5 h-5" />
                </button>
                <button
                onClick={() => setShowLogoutConfirm(true)}
                className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-red-500 active:shadow-neumorphic-inset transition-all"
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
                        disabled={isOldQuestionMode && selectedApp !== '2021'}
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
        </>
       )}
       
       {renderContent()}
      </main>

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-neumorphic-bg rounded-3xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-4 mb-6 text-red-500">
                    <LogoutIcon className="w-8 h-8" />
                    <h3 className="text-xl font-bold text-slate-700">Confirm Logout</h3>
                </div>
                <p className="text-slate-500 mb-8">Are you sure you want to log out of your account?</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowLogoutConfirm(false)}
                        className="flex-1 px-4 py-3 rounded-2xl shadow-neumorphic-outset text-slate-600 hover:text-slate-800 active:shadow-neumorphic-inset transition-all font-bold"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => { setShowLogoutConfirm(false); logout(); }}
                        className="flex-1 px-4 py-3 rounded-2xl bg-red-500 text-white shadow-md hover:bg-red-600 active:bg-red-700 transition-all font-bold"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
