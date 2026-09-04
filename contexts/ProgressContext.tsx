
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';
import { StudyCardData } from '../types';

// Define the shape of our Flashcard Progress data
export interface FlashcardProgressData {
  progress: Record<number, number[]>; // Day Index -> Array of learned IDs
  learned: number[]; // Array of fully learned IDs
}

export interface WeakQuestionItem {
  question: StudyCardData;
  wrongCount: number;
  lastWrongAt: string;
  userSelectedOptionId?: number;
}

export interface DailyGoalData {
  target: number;
  answeredToday: number;
  date: string;
  streak: number;
  lastCompletedDate?: string;
}

interface ProgressContextType {
  bookmarkedIds: Set<string>;
  toggleBookmark: (id: string) => void;
  flashcardData: FlashcardProgressData;
  updateFlashcardProgress: (dayIndex: number, id: number) => void;
  toggleFlashcardLearned: (id: number) => void;
  studyHistory: Record<string, number>; // QuestionID -> Selected OptionID
  recordAnswer: (questionId: string, optionId: number) => void;
  weakQuestions: Record<string, WeakQuestionItem>;
  recordWrongQuestion: (question: StudyCardData, selectedOptionId?: number) => void;
  removeWeakQuestion: (questionId: string) => void;
  clearAllWeakQuestions: () => void;
  dailyGoal: DailyGoalData;
  incrementDailyAnswered: () => void;
  setDailyTarget: (target: number) => void;
  isLoading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Keys for LocalStorage backup
const BOOKMARKS_KEY = 'study_app_bookmarks';
const FLASHCARD_PROGRESS_KEY = 'studyProgress';
const FLASHCARD_LEARNED_KEY = 'markedLearnedWords';
const STUDY_HISTORY_KEY = 'study_app_history';
const WEAK_QUESTIONS_KEY = 'study_app_weak_questions';
const DAILY_GOAL_KEY = 'study_app_daily_goal';

const getTodayDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  // State
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [flashcardData, setFlashcardData] = useState<FlashcardProgressData>({ progress: {}, learned: [] });
  const [studyHistory, setStudyHistory] = useState<Record<string, number>>({});
  const [weakQuestions, setWeakQuestions] = useState<Record<string, WeakQuestionItem>>({});
  const [dailyGoal, setDailyGoal] = useState<DailyGoalData>({
    target: 10,
    answeredToday: 0,
    date: getTodayDateString(),
    streak: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  
  // To debounce database updates
  const updateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Initial Load (From Supabase if logged in, else LocalStorage)
  useEffect(() => {
    const loadProgress = async () => {
      setIsLoading(true);
      const todayStr = getTodayDateString();
      
      // Default: Load from LocalStorage
      let loadedBookmarks = new Set<string>();
      let loadedFlashcardProgress = {};
      let loadedFlashcardLearned: number[] = [];
      let loadedStudyHistory: Record<string, number> = {};
      let loadedWeakQuestions: Record<string, WeakQuestionItem> = {};
      let loadedDailyGoal: DailyGoalData = {
        target: 10,
        answeredToday: 0,
        date: todayStr,
        streak: 0,
      };

      try {
        const localBookmarks = localStorage.getItem(BOOKMARKS_KEY);
        if (localBookmarks) loadedBookmarks = new Set(JSON.parse(localBookmarks));

        const localFCProgress = localStorage.getItem(FLASHCARD_PROGRESS_KEY);
        if (localFCProgress) loadedFlashcardProgress = JSON.parse(localFCProgress);

        const localFCLearned = localStorage.getItem(FLASHCARD_LEARNED_KEY);
        if (localFCLearned) loadedFlashcardLearned = JSON.parse(localFCLearned);

        const localHistory = localStorage.getItem(STUDY_HISTORY_KEY);
        if (localHistory) loadedStudyHistory = JSON.parse(localHistory);

        const localWeak = localStorage.getItem(WEAK_QUESTIONS_KEY);
        if (localWeak) loadedWeakQuestions = JSON.parse(localWeak);

        const localDaily = localStorage.getItem(DAILY_GOAL_KEY);
        if (localDaily) {
          const parsed = JSON.parse(localDaily);
          // If stored date is today, retain count; else reset answeredToday to 0
          if (parsed.date === todayStr) {
            loadedDailyGoal = parsed;
          } else {
            loadedDailyGoal = {
              target: parsed.target || 10,
              answeredToday: 0,
              date: todayStr,
              streak: parsed.streak || 0,
              lastCompletedDate: parsed.lastCompletedDate,
            };
          }
        }

      } catch (e) {
        console.error("Error loading local progress", e);
      }

      // If user is logged in with a DB ID, try to fetch from Supabase
      if (user && user.dbId) {
        try {
          const { data, error } = await supabase
            .from('user_progress')
            .select('bookmarks, flashcard_data, study_history')
            .eq('access_code_id', user.dbId)
            .single();

          if (data && !error) {
            if (data.bookmarks) {
                const bmArray = Array.isArray(data.bookmarks) ? data.bookmarks : [];
                loadedBookmarks = new Set(bmArray as string[]);
            }

            if (data.flashcard_data) {
                const fcData = data.flashcard_data as any;
                loadedFlashcardProgress = fcData?.progress || loadedFlashcardProgress;
                loadedFlashcardLearned = Array.isArray(fcData?.learned) ? fcData.learned : loadedFlashcardLearned;
            }

            if (data.study_history) {
                loadedStudyHistory = data.study_history as Record<string, number>;
            }

          } else if (error && error.code === 'PGRST116') {
             // Row doesn't exist yet, we will create it on first save.
          } else if (error) {
             console.error("Error loading progress from Supabase:", error);
          }
        } catch (e) {
          console.error("Supabase load error exception", e);
        }
      }

      setBookmarkedIds(loadedBookmarks);
      setFlashcardData({ progress: loadedFlashcardProgress, learned: loadedFlashcardLearned });
      setStudyHistory(loadedStudyHistory);
      setWeakQuestions(loadedWeakQuestions);
      setDailyGoal(loadedDailyGoal);
      setIsLoading(false);
    };

    loadProgress();
  }, [user]);

  // 2. Persist to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarkedIds)));
    localStorage.setItem(FLASHCARD_PROGRESS_KEY, JSON.stringify(flashcardData.progress));
    localStorage.setItem(FLASHCARD_LEARNED_KEY, JSON.stringify(flashcardData.learned));
    localStorage.setItem(STUDY_HISTORY_KEY, JSON.stringify(studyHistory));
    localStorage.setItem(WEAK_QUESTIONS_KEY, JSON.stringify(weakQuestions));
    localStorage.setItem(DAILY_GOAL_KEY, JSON.stringify(dailyGoal));
  }, [bookmarkedIds, flashcardData, studyHistory, weakQuestions, dailyGoal]);

  // 3. Persist to Supabase (Debounced)
  const saveToSupabase = async () => {
    if (!user || !user.dbId) return;

    try {
      const payload = {
        access_code_id: user.dbId,
        bookmarks: Array.from(bookmarkedIds),
        flashcard_data: flashcardData,
        study_history: studyHistory,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('user_progress')
        .upsert(payload, { onConflict: 'access_code_id' });

      if (error) console.error("Error saving progress to DB:", error);
    } catch (e) {
      console.error("DB Save Exception:", e);
    }
  };

  // Trigger save on change (with debounce)
  useEffect(() => {
    if (!user?.dbId) return;

    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }

    updateTimeoutRef.current = setTimeout(() => {
      saveToSupabase();
    }, 2000); // Save after 2 seconds of inactivity

    return () => {
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    };
  }, [bookmarkedIds, flashcardData, studyHistory, user]);


  // --- Actions ---

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const updateFlashcardProgress = (dayIndex: number, wordId: number) => {
    setFlashcardData(prev => {
      const currentDayProgress = prev.progress[dayIndex] || [];
      if (currentDayProgress.includes(wordId)) return prev; // Already recorded
      
      return {
        ...prev,
        progress: {
          ...prev.progress,
          [dayIndex]: [...currentDayProgress, wordId]
        }
      };
    });
  };

  const toggleFlashcardLearned = (id: number) => {
    setFlashcardData(prev => {
      const isLearned = prev.learned.includes(id);
      let newLearned;
      if (isLearned) {
        newLearned = prev.learned.filter(wId => wId !== id);
      } else {
        newLearned = [...prev.learned, id];
      }
      return { ...prev, learned: newLearned };
    });
  };

  const recordAnswer = (questionId: string, optionId: number) => {
      setStudyHistory(prev => ({
          ...prev,
          [questionId]: optionId
      }));
  };

  const recordWrongQuestion = (question: StudyCardData, selectedOptionId?: number) => {
    if (!question || !question.id) return;
    const qId = String(question.id);
    setWeakQuestions(prev => {
      const existing = prev[qId];
      const count = existing ? existing.wrongCount + 1 : 1;
      return {
        ...prev,
        [qId]: {
          question,
          wrongCount: count,
          lastWrongAt: new Date().toISOString(),
          userSelectedOptionId: selectedOptionId,
        }
      };
    });
  };

  const removeWeakQuestion = (questionId: string) => {
    setWeakQuestions(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const clearAllWeakQuestions = () => {
    setWeakQuestions({});
  };

  const incrementDailyAnswered = () => {
    const todayStr = getTodayDateString();
    setDailyGoal(prev => {
      const isSameDay = prev.date === todayStr;
      const count = isSameDay ? prev.answeredToday + 1 : 1;
      let newStreak = prev.streak;
      let newLastCompleted = prev.lastCompletedDate;

      if (count >= prev.target && newLastCompleted !== todayStr) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
        
        if (newLastCompleted === yStr) {
          newStreak = (prev.streak || 0) + 1;
        } else if (newLastCompleted !== todayStr) {
          newStreak = 1;
        }
        newLastCompleted = todayStr;
      }

      return {
        ...prev,
        date: todayStr,
        answeredToday: count,
        streak: newStreak,
        lastCompletedDate: newLastCompleted,
      };
    });
  };

  const setDailyTarget = (target: number) => {
    setDailyGoal(prev => ({ ...prev, target }));
  };

  return (
    <ProgressContext.Provider value={{
      bookmarkedIds,
      toggleBookmark,
      flashcardData,
      updateFlashcardProgress,
      toggleFlashcardLearned,
      studyHistory,
      recordAnswer,
      weakQuestions,
      recordWrongQuestion,
      removeWeakQuestion,
      clearAllWeakQuestions,
      dailyGoal,
      incrementDailyAnswered,
      setDailyTarget,
      isLoading
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
