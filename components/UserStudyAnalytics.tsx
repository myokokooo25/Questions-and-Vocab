import React, { useState, useEffect, useMemo } from 'react';
import {
  UsersIcon,
  AcademicCapIcon,
  ClockIcon,
  RefreshIcon,
  SearchIcon,
  CopyIcon,
  CheckIcon,
  SparkleIcon,
  LoadingSpinnerIcon,
  SmartphoneIcon,
  BookOpenIcon,
  ChevronDownIcon
} from './Icons';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface UserStudyRecord {
  id: number;
  code: string;
  userName: string;
  memo?: string;
  type?: string;
  isActive: boolean;
  deviceCount: number;
  deviceIds: string[];
  questionsAnswered: number;
  flashcardsLearned: number;
  bookmarksCount: number;
  chapterCounts: {
    ch1: number;
    ch2: number;
    ch3: number;
    ch4: number;
    ch5: number;
    pastExams: number;
    other: number;
  };
  isOnline: boolean;
  isIdle: boolean;
  status: 'online' | 'idle' | 'offline';
  currentAction?: string;
  createdAt?: string | null;
  firstUsedAt?: string | null;
  lastActiveAt?: string | null;
  updatedAt?: string | null;
}

interface AnalyticsSummary {
  totalStudents: number;
  activeLearnersCount: number;
  onlineNowCount: number;
  totalQuestionsAnsweredSum: number;
  totalFlashcardsLearnedSum: number;
  totalBookmarksSum: number;
  lastRefreshedAt: string;
}

interface UserStudyAnalyticsProps {
  adminToken?: string;
}

export const UserStudyAnalytics: React.FC<UserStudyAnalyticsProps> = ({
  adminToken = 'adm_manoel_access',
}) => {
  const [users, setUsers] = useState<UserStudyRecord[]>([]);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterTab, setFilterTab] = useState<'all' | 'online' | 'active' | 'top10' | 'inactive'>('all');
  const [sortBy, setSortBy] = useState<'questions' | 'recent' | 'name' | 'flashcards'>('questions');
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const fetchAnalytics = async (isSilent: boolean = false) => {
    if (!isSilent) setIsLoading(true);
    setError('');

    try {
      // 1. Try server-side aggregation API
      const res = await fetch('/api/admin/user-study-analytics', {
        headers: {
          'x-admin-token': adminToken,
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.users)) {
          setUsers(data.users);
          setSummary(data.summary);
          setIsLoading(false);
          return;
        }
      }

      // 2. Client-side fallback via Supabase direct query
      if (isSupabaseConfigured) {
        const [codesRes, progRes] = await Promise.all([
          supabase.from('access_codes').select('*').order('id', { ascending: false }),
          supabase.from('user_progress').select('*'),
        ]);

        if (codesRes.data) {
          const codes = codesRes.data;
          const progs = progRes.data || [];
          const progMap = new Map<number | string, any>();
          progs.forEach((p: any) => {
            if (p.access_code_id != null) progMap.set(p.access_code_id, p);
          });

          let qSum = 0;
          let fcSum = 0;
          let bmSum = 0;
          let activeCount = 0;

          const mapped: UserStudyRecord[] = codes.map((c: any) => {
            const p = progMap.get(c.id);
            const studyHist = p?.study_history || {};
            const qCount = Object.keys(studyHist).length;
            const fcLearned = Array.isArray(p?.flashcard_data?.learned) ? p.flashcard_data.learned.length : 0;
            const bmCount = Array.isArray(p?.bookmarks) ? p.bookmarks.length : 0;

            qSum += qCount;
            fcSum += fcLearned;
            bmSum += bmCount;
            if (qCount > 0 || fcLearned > 0) activeCount++;

            const chapterCounts = { ch1: 0, ch2: 0, ch3: 0, ch4: 0, ch5: 0, pastExams: 0, other: 0 };
            Object.keys(studyHist).forEach((qid: string) => {
              const lower = qid.toLowerCase();
              if (lower.includes('ch1') || lower.includes('c1-')) chapterCounts.ch1++;
              else if (lower.includes('ch2') || lower.includes('c2-')) chapterCounts.ch2++;
              else if (lower.includes('ch3') || lower.includes('c3-')) chapterCounts.ch3++;
              else if (lower.includes('ch4') || lower.includes('c4-')) chapterCounts.ch4++;
              else if (lower.includes('ch5') || lower.includes('c5-')) chapterCounts.ch5++;
              else if (lower.includes('202')) chapterCounts.pastExams++;
              else chapterCounts.other++;
            });

            return {
              id: c.id,
              code: c.code,
              userName: c.Username || c.user_name || 'Student',
              memo: c.memo || '',
              type: c.type || 'permanent',
              isActive: c.is_active !== false,
              deviceCount: Array.isArray(c.device_ids) ? c.device_ids.length : 0,
              deviceIds: c.device_ids || [],
              questionsAnswered: qCount,
              flashcardsLearned: fcLearned,
              bookmarksCount: bmCount,
              chapterCounts,
              isOnline: false,
              isIdle: false,
              status: 'offline',
              createdAt: c.created_at,
              firstUsedAt: c.first_used_at,
              lastActiveAt: p?.updated_at || c.first_used_at || c.created_at,
              updatedAt: p?.updated_at || null,
            };
          });

          mapped.sort((a, b) => b.questionsAnswered - a.questionsAnswered);
          setUsers(mapped);
          setSummary({
            totalStudents: codes.length,
            activeLearnersCount: activeCount,
            onlineNowCount: 0,
            totalQuestionsAnsweredSum: qSum,
            totalFlashcardsLearnedSum: fcSum,
            totalBookmarksSum: bmSum,
            lastRefreshedAt: new Date().toISOString(),
          });
          setIsLoading(false);
          return;
        }
      }

      throw new Error('Could not load user analytics data');
    } catch (err: any) {
      console.error('Fetch study analytics error:', err);
      setError(err.message || 'Failed to fetch user analytics');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [adminToken]);

  // Periodic polling for realtime updates
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      fetchAnalytics(true);
    }, 15000);
    return () => clearInterval(interval);
  }, [autoRefresh, adminToken]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Format relative time
  const formatTimeAgo = (dateStr?: string | null) => {
    if (!dateStr) return 'Never';
    try {
      const past = new Date(dateStr).getTime();
      const now = Date.now();
      const diffSec = Math.floor((now - past) / 1000);
      if (diffSec < 60) return 'Just now';
      if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
      if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
      const days = Math.floor(diffSec / 86400);
      if (days === 1) return 'Yesterday';
      if (days < 30) return `${days}d ago`;
      return new Date(dateStr).toLocaleDateString();
    } catch {
      return 'Unknown';
    }
  };

  // Filtered and Sorted Users
  const filteredUsers = useMemo(() => {
    let result = users.filter((u) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = u.userName.toLowerCase().includes(q);
        const matchesCode = u.code.toLowerCase().includes(q);
        const matchesMemo = (u.memo || '').toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesMemo) return false;
      }

      // Filter tabs
      if (filterTab === 'online') return u.isOnline;
      if (filterTab === 'active') return u.questionsAnswered > 0 || u.flashcardsLearned > 0;
      if (filterTab === 'inactive') return u.questionsAnswered === 0 && u.flashcardsLearned === 0;
      return true;
    });

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'questions') {
        if (a.isOnline && !b.isOnline && filterTab !== 'online') return -1;
        if (!a.isOnline && b.isOnline && filterTab !== 'online') return 1;
        return b.questionsAnswered - a.questionsAnswered;
      }
      if (sortBy === 'recent') {
        const timeA = a.lastActiveAt ? new Date(a.lastActiveAt).getTime() : 0;
        const timeB = b.lastActiveAt ? new Date(b.lastActiveAt).getTime() : 0;
        return timeB - timeA;
      }
      if (sortBy === 'name') {
        return a.userName.localeCompare(b.userName);
      }
      if (sortBy === 'flashcards') {
        return b.flashcardsLearned - a.flashcardsLearned;
      }
      return 0;
    });

    if (filterTab === 'top10') {
      return result.slice(0, 10);
    }

    return result;
  }, [users, searchQuery, filterTab, sortBy]);

  // Online Users List
  const onlineStudents = useMemo(() => {
    return users.filter((u) => u.isOnline);
  }, [users]);

  // Total syllabus questions reference (Level 2 + Level 1 standard syllabus ~292 Qs)
  const SYLLABUS_TOTAL = 292;

  return (
    <div className="space-y-6 text-slate-100">
      {/* ========================================================================= */}
      {/* 1. TOP STATS OVERVIEW CARDS (HIGH CONTRAST & CLEAR) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Live Online */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Realtime Online
            </span>
            <span className="text-xs bg-emerald-500/30 text-emerald-200 px-2.5 py-1 rounded-full font-black border border-emerald-500/40">
              Live
            </span>
          </div>
          <div className="my-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-white">
              {summary?.onlineNowCount ?? onlineStudents.length}
            </span>
            <span className="text-sm text-emerald-300 font-extrabold">Students Active</span>
          </div>
          <p className="text-xs text-slate-300 font-semibold truncate">
            {onlineStudents.length > 0
              ? `${onlineStudents.map((s) => s.userName).join(', ')}`
              : 'No other students online right now'}
          </p>
        </div>

        {/* Card 2: Total Questions Answered */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border-2 border-blue-500/50 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-blue-300 flex items-center gap-2">
              <BookOpenIcon className="w-4 h-4 text-blue-400" />
              Questions Studied
            </span>
            <span className="text-xs bg-blue-500/30 text-blue-200 px-2.5 py-1 rounded-full font-black border border-blue-500/40">
              Total
            </span>
          </div>
          <div className="my-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-white">
              {(summary?.totalQuestionsAnsweredSum || 0).toLocaleString()}
            </span>
            <span className="text-sm text-blue-300 font-extrabold">Times Answered</span>
          </div>
          <p className="text-xs text-slate-300 font-semibold">Across all registered learners</p>
        </div>

        {/* Card 3: Active Learners */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border-2 border-indigo-500/50 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-indigo-300 flex items-center gap-2">
              <UsersIcon className="w-4 h-4 text-indigo-400" />
              Active Students
            </span>
            <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2.5 py-1 rounded-full font-black border border-indigo-500/40">
              {summary ? Math.round((summary.activeLearnersCount / (summary.totalStudents || 1)) * 100) : 0}%
            </span>
          </div>
          <div className="my-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-white">
              {summary?.activeLearnersCount || 0}
            </span>
            <span className="text-sm text-indigo-300 font-extrabold">/ {summary?.totalStudents || users.length} Users</span>
          </div>
          <p className="text-xs text-slate-300 font-semibold">Have answered &gt;0 questions</p>
        </div>

        {/* Card 4: Flashcards Mastered */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border-2 border-amber-500/50 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-2">
              <AcademicCapIcon className="w-4 h-4 text-amber-400" />
              Vocab Mastered
            </span>
            <span className="text-xs bg-amber-500/30 text-amber-200 px-2.5 py-1 rounded-full font-black border border-amber-500/40">
              Words
            </span>
          </div>
          <div className="my-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-white">
              {(summary?.totalFlashcardsLearnedSum || 0).toLocaleString()}
            </span>
            <span className="text-sm text-amber-300 font-extrabold">Words Learned</span>
          </div>
          <p className="text-xs text-slate-300 font-semibold">Technical flashcards mastered</p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. LIVE ONLINE STUDENTS BANNER (CRISP & LUMINOUS) */}
      {/* ========================================================================= */}
      <div className="p-5 rounded-2xl bg-slate-900 border-2 border-emerald-500/60 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-slate-800">
          <div className="flex items-center gap-3">
            <span className="relative flex h-4 w-4 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2.5">
                လက်ရှိ Online ဖြစ်နေသော ကျောင်းသားများ (Live Online Students)
                <span className="text-xs bg-emerald-500/30 text-emerald-200 px-3 py-1 rounded-full border border-emerald-500/50 font-mono font-black">
                  {onlineStudents.length} Online Now
                </span>
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                App တွင် လက်ရှိအချိန် တိုက်ရိုက် စာကျက်/လေ့ကျင့်နေသော ကျောင်းသားများ (Heartbeat စနစ်ဖြင့် တိုက်ရိုက်ပြသ)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setAutoRefresh((prev) => !prev)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
                autoRefresh
                  ? 'bg-emerald-600 text-white shadow-md border border-emerald-400'
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }`}
              title="Toggle 15s auto-refresh"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${autoRefresh ? 'bg-white animate-pulse' : 'bg-slate-400'}`} />
              <span>{autoRefresh ? 'Auto-Sync: ON (15s)' : 'Manual Sync'}</span>
            </button>

            <button
              onClick={() => fetchAnalytics(false)}
              disabled={isLoading}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white rounded-xl transition-all border border-slate-700 shadow-md"
              title="Refresh Now"
            >
              <RefreshIcon className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Live List */}
        <div className="pt-3">
          {onlineStudents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {onlineStudents.map((st) => (
                <div
                  key={st.id}
                  className="p-3.5 rounded-xl bg-slate-800/90 border-2 border-emerald-500/50 flex items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-black text-sm shrink-0 shadow">
                      {st.userName.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-sm text-white truncate">{st.userName}</p>
                      <p className="text-xs font-mono text-emerald-300 flex items-center gap-1 truncate font-bold">
                        <span>{st.code}</span>
                        {st.memo && <span className="text-slate-300 truncate font-normal">({st.memo})</span>}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs bg-emerald-500 text-black px-2.5 py-0.5 rounded-full font-black block shadow-sm">
                      Active Now
                    </span>
                    <span className="text-xs text-slate-200 font-extrabold mt-0.5 block">
                      {st.questionsAnswered} Qs done
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-4 text-center text-xs text-slate-300 font-bold flex items-center justify-center gap-2">
              <ClockIcon className="w-4 h-4 text-slate-400" />
              <span>ယခုအချိန်တွင် တိုက်ရိုက် Online ဖြစ်နေသူ မရှိသေးပါ (မကြာသေးမီက လေ့ကျင့်ထားသော ကျောင်းသားမှတ်တမ်းများကို အောက်တွင် ကြည့်ရှုနိုင်ပါသည်)</span>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SEARCH, FILTERS & CONTROLS (HIGH CONTRAST & INTUITIVE) */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by student name, code, or memo..."
            className="w-full pl-10 pr-9 py-3 bg-slate-900 border-2 border-slate-700 rounded-xl text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-sm font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setFilterTab('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all shrink-0 ${
              filterTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg border-2 border-blue-400'
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            All Students ({users.length})
          </button>

          <button
            onClick={() => setFilterTab('online')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${
              filterTab === 'online'
                ? 'bg-emerald-600 text-white shadow-lg border-2 border-emerald-400'
                : 'bg-slate-800 text-emerald-300 hover:text-white border border-slate-700'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Online ({onlineStudents.length})</span>
          </button>

          <button
            onClick={() => setFilterTab('active')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all shrink-0 ${
              filterTab === 'active'
                ? 'bg-indigo-600 text-white shadow-lg border-2 border-indigo-400'
                : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            Active Learners ({users.filter((u) => u.questionsAnswered > 0).length})
          </button>

          <button
            onClick={() => setFilterTab('top10')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${
              filterTab === 'top10'
                ? 'bg-amber-600 text-white shadow-lg border-2 border-amber-400'
                : 'bg-slate-800 text-amber-300 hover:text-white border border-slate-700'
            }`}
          >
            <SparkleIcon className="w-3.5 h-3.5" />
            <span>Top 10 Leaders</span>
          </button>

          <button
            onClick={() => setFilterTab('inactive')}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all shrink-0 ${
              filterTab === 'inactive'
                ? 'bg-slate-700 text-white shadow-lg border-2 border-slate-500'
                : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
            }`}
          >
            Not Started ({users.filter((u) => u.questionsAnswered === 0).length})
          </button>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-300 font-extrabold">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-900 border-2 border-slate-700 rounded-xl text-xs font-black text-white px-3.5 py-2.5 focus:outline-none focus:border-blue-400 shadow-md"
          >
            <option value="questions">Questions Studied (Most)</option>
            <option value="recent">Recently Active</option>
            <option value="name">Name (A-Z)</option>
            <option value="flashcards">Flashcards Mastered</option>
          </select>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. STUDENTS STUDY PROGRESS LIST / CARDS */}
      {/* ========================================================================= */}
      {isLoading ? (
        <div className="py-20 text-center text-slate-300 flex flex-col items-center justify-center gap-3">
          <LoadingSpinnerIcon className="w-10 h-10 text-blue-400" />
          <p className="text-sm font-extrabold text-white">ကျောင်းသားများ၏ လေ့လာမှုမှတ်တမ်းများကို ရယူနေပါသည်...</p>
        </div>
      ) : error ? (
        <div className="p-6 rounded-2xl bg-red-950/40 border-2 border-red-500 text-center space-y-3">
          <p className="text-sm font-extrabold text-red-300">{error}</p>
          <button
            onClick={() => fetchAnalytics(false)}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-black rounded-xl shadow-lg"
          >
            Try Again
          </button>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="py-20 text-center text-slate-300 bg-slate-900/60 rounded-3xl border-2 border-slate-800">
          <AcademicCapIcon className="w-14 h-14 text-slate-500 mx-auto mb-3" />
          <p className="text-base font-black text-white">ရှာဖွေမှုနှင့် ကိုက်ညီသော ကျောင်းသား မရှိပါ</p>
          <p className="text-xs text-slate-400 mt-1 font-semibold">အခြား အမည် သို့မဟုတ် Access Code ဖြင့် ထပ်မံစမ်းသပ်ပါ</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredUsers.map((student, idx) => {
            const isExpanded = expandedUserId === student.id;
            const progressPercent = Math.min(100, Math.round((student.questionsAnswered / SYLLABUS_TOTAL) * 100));

            return (
              <div
                key={student.id}
                className={`rounded-2xl transition-all border-2 ${
                  student.isOnline
                    ? 'bg-slate-900 border-emerald-500/80 shadow-xl'
                    : 'bg-slate-900/90 border-slate-700/80 hover:border-blue-500/60 shadow-lg'
                }`}
              >
                {/* Main Card Row */}
                <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Avatar, Rank, Name, Code */}
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                    {/* Rank Badge */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 shadow-md ${
                        idx === 0 && sortBy === 'questions'
                          ? 'bg-amber-400 text-black border border-amber-300'
                          : idx === 1 && sortBy === 'questions'
                          ? 'bg-slate-200 text-black border border-white'
                          : idx === 2 && sortBy === 'questions'
                          ? 'bg-amber-700 text-white border border-amber-600'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      #{idx + 1}
                    </div>

                    {/* Avatar with Status Ring */}
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white text-lg shadow-inner border border-blue-400/40">
                        {student.userName.charAt(0).toUpperCase()}
                      </div>
                      <span
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900 ${
                          student.isOnline
                            ? 'bg-emerald-400 ring-2 ring-emerald-400/50'
                            : student.isIdle
                            ? 'bg-amber-400'
                            : 'bg-slate-600'
                        }`}
                        title={student.isOnline ? 'Online now' : student.isIdle ? 'Away' : 'Offline'}
                      />
                    </div>

                    {/* Student Info */}
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-black text-base sm:text-lg text-white tracking-wide truncate">
                          {student.userName}
                        </h4>

                        {/* Live Online Badge */}
                        {student.isOnline && (
                          <span className="text-xs bg-emerald-500 text-black px-2.5 py-0.5 rounded-full font-black flex items-center gap-1 shadow">
                            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                            <span>Online Now</span>
                          </span>
                        )}

                        {student.type === 'trial' && (
                          <span className="text-xs bg-amber-500/30 text-amber-300 px-2.5 py-0.5 rounded-full font-bold border border-amber-500/40">
                            Trial
                          </span>
                        )}
                      </div>

                      {/* Code & Devices row */}
                      <div className="flex items-center gap-2 flex-wrap text-xs font-semibold">
                        <div className="flex items-center gap-1.5 font-mono bg-blue-950/80 border border-blue-500/50 px-2.5 py-1 rounded-lg text-blue-300 font-bold shadow-sm">
                          <span>{student.code}</span>
                          <button
                            onClick={() => handleCopyCode(student.code)}
                            className="hover:text-white transition-colors"
                            title="Copy code"
                          >
                            {copiedCode === student.code ? (
                              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <CopyIcon className="w-3.5 h-3.5 text-blue-400" />
                            )}
                          </button>
                        </div>

                        {student.memo && (
                          <span className="text-slate-300 truncate max-w-[180px]">
                            • {student.memo}
                          </span>
                        )}

                        <span className="text-slate-300 flex items-center gap-1 font-bold">
                          <SmartphoneIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>{student.deviceCount} device{student.deviceCount === 1 ? '' : 's'}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle / Right: Study Progress & Numbers */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-5 shrink-0">
                    {/* Questions Progress Metric */}
                    <div className="space-y-1.5 sm:w-60">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs text-slate-300 font-black uppercase tracking-wider">Questions Studied:</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-black text-blue-400">
                            {student.questionsAnswered}
                          </span>
                          <span className="text-xs text-slate-300 font-extrabold">/ {SYLLABUS_TOTAL} Qs</span>
                        </div>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full bg-slate-950 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-700 shadow-inner">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            student.questionsAnswered >= SYLLABUS_TOTAL
                              ? 'bg-gradient-to-r from-emerald-400 to-teal-300 shadow-sm'
                              : student.questionsAnswered > 100
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-400'
                              : student.questionsAnswered > 0
                              ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                              : 'bg-slate-700'
                          }`}
                          style={{ width: `${Math.max(student.questionsAnswered > 0 ? 5 : 0, progressPercent)}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-xs font-black">
                        <span className="text-slate-300">{progressPercent}% Syllabus Completed</span>
                        {student.flashcardsLearned > 0 && (
                          <span className="text-amber-400">
                            ⭐ {student.flashcardsLearned} Vocab
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Last Active Timestamp */}
                    <div className="text-left sm:text-right space-y-0.5 min-w-[120px]">
                      <span className="text-xs uppercase font-black text-slate-400 block tracking-wider">
                        Last Active
                      </span>
                      <p className="text-sm font-black text-white">
                        {formatTimeAgo(student.lastActiveAt)}
                      </p>
                      <p className="text-xs text-slate-300 font-mono font-bold">
                        {student.lastActiveAt ? new Date(student.lastActiveAt).toLocaleDateString() : 'Never'}
                      </p>
                    </div>

                    {/* Expand Details Button */}
                    <button
                      onClick={() => setExpandedUserId((prev) => (prev === student.id ? null : student.id))}
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white rounded-xl text-xs font-black flex items-center gap-2 transition-all self-end sm:self-center border border-slate-600 shadow-md"
                    >
                      <span>{isExpanded ? 'Hide' : 'Details'}</span>
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* EXPANDABLE CHAPTER BREAKDOWN & DETAILS */}
                {/* ========================================================================= */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-3 border-t-2 border-slate-800 bg-slate-950 rounded-b-2xl space-y-4">
                    {/* Chapter Breakdown Pills */}
                    <div>
                      <h5 className="text-xs font-black text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <BookOpenIcon className="w-4 h-4 text-blue-400" />
                        <span>Chapter-by-Chapter Learning Breakdown</span>
                      </h5>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Chapter 1</span>
                          <span className="text-base font-black text-blue-400">
                            {student.chapterCounts.ch1}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Chapter 2</span>
                          <span className="text-base font-black text-indigo-400">
                            {student.chapterCounts.ch2}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Chapter 3</span>
                          <span className="text-base font-black text-purple-400">
                            {student.chapterCounts.ch3}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Chapter 4</span>
                          <span className="text-base font-black text-teal-400">
                            {student.chapterCounts.ch4}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Chapter 5</span>
                          <span className="text-base font-black text-emerald-400">
                            {student.chapterCounts.ch5}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Past Exams</span>
                          <span className="text-base font-black text-amber-400">
                            {student.chapterCounts.pastExams}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                          <span className="text-xs font-black text-slate-400 block">Other / 2026</span>
                          <span className="text-base font-black text-slate-200">
                            {student.chapterCounts.other}
                          </span>
                          <span className="text-xs text-slate-300 block font-bold">Qs</span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-xs uppercase font-black text-slate-400 block">Vocabulary Flashcards</span>
                        <p className="font-black text-amber-400 text-sm">
                          {student.flashcardsLearned} Words Mastered
                        </p>
                        <p className="text-xs text-slate-300 font-bold">
                          Bookmarks: <span className="text-white font-black">{student.bookmarksCount}</span> saved
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-xs uppercase font-black text-slate-400 block">Key Registration Date</span>
                        <p className="font-mono text-white text-xs font-bold">
                          {student.createdAt ? new Date(student.createdAt).toLocaleString() : 'N/A'}
                        </p>
                        <p className="text-xs text-slate-300 font-bold">
                          Type: <span className="text-blue-400 font-black uppercase">{student.type || 'permanent'}</span>
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-xs uppercase font-black text-slate-400 block">Connected Device Fingerprints</span>
                        <p className="text-xs font-black text-white">
                          {student.deviceCount} Registered Devices
                        </p>
                        <div className="max-h-20 overflow-y-auto space-y-1 scrollbar-none font-bold">
                          {student.deviceIds.map((did, didIdx) => (
                            <p key={didIdx} className="font-mono text-[10px] text-slate-400 truncate">
                              Device #{didIdx + 1}: {did.slice(0, 20)}...
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserStudyAnalytics;
