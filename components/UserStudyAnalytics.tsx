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
  BookmarkIcon,
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
    <div className="space-y-6">
      {/* ========================================================================= */}
      {/* 1. TOP STATS OVERVIEW CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Live Online */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Live Online
            </span>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
              Realtime
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {summary?.onlineNowCount ?? onlineStudents.length}
            </span>
            <span className="text-xs text-slate-400 font-medium">students</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1 truncate">
            {onlineStudents.length > 0
              ? `${onlineStudents.map((s) => s.userName).join(', ')}`
              : 'No students online right now'}
          </p>
        </div>

        {/* Card 2: Total Questions Answered */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <BookOpenIcon className="w-3.5 h-3.5 text-blue-400" />
              Questions Studied
            </span>
            <span className="text-[10px] text-slate-400">Total</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {(summary?.totalQuestionsAnsweredSum || 0).toLocaleString()}
            </span>
            <span className="text-xs text-slate-400 font-medium">times</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Across all registered learners</p>
        </div>

        {/* Card 3: Active Learners */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <UsersIcon className="w-3.5 h-3.5 text-indigo-400" />
              Active Learners
            </span>
            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-bold">
              {summary ? Math.round((summary.activeLearnersCount / (summary.totalStudents || 1)) * 100) : 0}%
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {summary?.activeLearnersCount || 0}
            </span>
            <span className="text-xs text-slate-400 font-medium">/ {summary?.totalStudents || users.length} users</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Have answered &gt;0 questions</p>
        </div>

        {/* Card 4: Flashcards Mastered */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <AcademicCapIcon className="w-3.5 h-3.5 text-amber-400" />
              Vocab Mastered
            </span>
            <span className="text-[10px] text-slate-400">Flashcards</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white">
              {(summary?.totalFlashcardsLearnedSum || 0).toLocaleString()}
            </span>
            <span className="text-xs text-slate-400 font-medium">words</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Technical terms learned</p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. LIVE ONLINE STUDENTS BANNER (REALTIME) */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                လက်ရှိ Online ဖြစ်နေသော သင်တန်းသားများ (Live Online Students)
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/40 font-mono font-bold">
                  {onlineStudents.length} Online
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                လတ်တလော ၃ မိနစ်အတွင်း App ကို အသုံးပြုလေ့ကျင့်နေသော ကျောင်းသားများ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setAutoRefresh((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                autoRefresh
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
              title="Toggle 15s auto-refresh"
            >
              <span className={`w-2 h-2 rounded-full ${autoRefresh ? 'bg-emerald-400' : 'bg-slate-500'}`} />
              <span>{autoRefresh ? 'Auto-Sync (15s)' : 'Manual Sync'}</span>
            </button>

            <button
              onClick={() => fetchAnalytics(false)}
              disabled={isLoading}
              className="p-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 rounded-xl transition-all border border-slate-700"
              title="Refresh Now"
            >
              <RefreshIcon className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
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
                  className="p-3 rounded-xl bg-slate-800/80 border border-emerald-500/30 flex items-center justify-between gap-3 shadow-sm hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-500/30">
                      {st.userName.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-white truncate">{st.userName}</p>
                      <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 truncate">
                        <span>{st.code}</span>
                        {st.memo && <span className="text-slate-400 truncate">({st.memo})</span>}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-bold block">
                      Active Now
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {st.questionsAnswered} Qs done
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <ClockIcon className="w-4 h-4 text-slate-500" />
              <span>ယခုအချိန်တွင် တိုက်ရိုက် Online ဖြစ်နေသူ မရှိသေးပါ (မကြာသေးမီက လေ့ကျင့်ထားသူများကို အောက်တွင် ကြည့်ရှုနိုင်ပါသည်)</span>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SEARCH, FILTERS & CONTROLS */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by student name, code, or memo..."
            className="w-full pl-9 pr-8 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setFilterTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              filterTab === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            All ({users.length})
          </button>

          <button
            onClick={() => setFilterTab('online')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              filterTab === 'online'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Online ({onlineStudents.length})</span>
          </button>

          <button
            onClick={() => setFilterTab('active')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              filterTab === 'active'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Learners ({users.filter((u) => u.questionsAnswered > 0).length})
          </button>

          <button
            onClick={() => setFilterTab('top10')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
              filterTab === 'top10'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <SparkleIcon className="w-3.5 h-3.5" />
            <span>Top 10 Leaders</span>
          </button>

          <button
            onClick={() => setFilterTab('inactive')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              filterTab === 'inactive'
                ? 'bg-slate-700 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Not Started ({users.filter((u) => u.questionsAnswered === 0).length})
          </button>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 font-bold">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 px-3 py-2 focus:outline-none focus:border-blue-500 font-semibold"
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
        <div className="py-16 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
          <LoadingSpinnerIcon className="w-8 h-8 text-blue-500" />
          <p className="text-xs font-bold">ကျောင်းသားများ၏ လေ့လာမှုမှတ်တမ်းများကို ရယူနေပါသည်...</p>
        </div>
      ) : error ? (
        <div className="p-6 rounded-2xl bg-red-950/30 border border-red-500/50 text-center space-y-2">
          <p className="text-xs font-bold text-red-400">{error}</p>
          <button
            onClick={() => fetchAnalytics(false)}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl"
          >
            Try Again
          </button>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="py-16 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          <AcademicCapIcon className="w-12 h-12 text-slate-600 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-300">ရှာဖွေမှုနှင့် ကိုက်ညီသော ကျောင်းသား မရှိပါ</p>
          <p className="text-xs text-slate-500 mt-1">အခြား အမည် သို့မဟုတ် Access Code ဖြင့် ထပ်မံစမ်းသပ်ပါ</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredUsers.map((student, idx) => {
            const isExpanded = expandedUserId === student.id;
            const progressPercent = Math.min(100, Math.round((student.questionsAnswered / SYLLABUS_TOTAL) * 100));

            return (
              <div
                key={student.id}
                className={`rounded-2xl transition-all border ${
                  student.isOnline
                    ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Main Card Row */}
                <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Avatar, Rank, Name, Code */}
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                    {/* Rank Badge */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        idx === 0 && sortBy === 'questions'
                          ? 'bg-amber-500 text-black shadow-md'
                          : idx === 1 && sortBy === 'questions'
                          ? 'bg-slate-300 text-black'
                          : idx === 2 && sortBy === 'questions'
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Avatar with Status Ring */}
                    <div className="relative shrink-0">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center font-black text-slate-200 text-base shadow-inner border border-slate-700">
                        {student.userName.charAt(0).toUpperCase()}
                      </div>
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${
                          student.isOnline
                            ? 'bg-emerald-500 ring-2 ring-emerald-400/40'
                            : student.isIdle
                            ? 'bg-amber-400'
                            : 'bg-slate-600'
                        }`}
                        title={student.isOnline ? 'Online now' : student.isIdle ? 'Away' : 'Offline'}
                      />
                    </div>

                    {/* Student Info */}
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-extrabold text-sm sm:text-base text-white truncate">
                          {student.userName}
                        </h4>

                        {/* Live Online Badge */}
                        {student.isOnline && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Online Now</span>
                          </span>
                        )}

                        {student.type === 'trial' && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                            Trial
                          </span>
                        )}
                      </div>

                      {/* Code & Devices row */}
                      <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400">
                        <div className="flex items-center gap-1 font-mono bg-slate-800 px-2 py-0.5 rounded-md text-blue-400">
                          <span>{student.code}</span>
                          <button
                            onClick={() => handleCopyCode(student.code)}
                            className="hover:text-white transition-colors"
                            title="Copy code"
                          >
                            {copiedCode === student.code ? (
                              <CheckIcon className="w-3 h-3 text-green-400" />
                            ) : (
                              <CopyIcon className="w-3 h-3 text-slate-400" />
                            )}
                          </button>
                        </div>

                        {student.memo && (
                          <span className="text-[11px] text-slate-400 truncate max-w-[160px]">
                            • {student.memo}
                          </span>
                        )}

                        <span className="text-[11px] text-slate-500 flex items-center gap-1">
                          <SmartphoneIcon className="w-3 h-3" />
                          <span>{student.deviceCount} device{student.deviceCount === 1 ? '' : 's'}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle / Right: Study Progress & Numbers */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-4 shrink-0">
                    {/* Questions Progress Metric */}
                    <div className="space-y-1 sm:w-56">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs text-slate-400 font-bold">Questions Studied:</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-black text-white">
                            {student.questionsAnswered}
                          </span>
                          <span className="text-xs text-slate-400">/ {SYLLABUS_TOTAL} Qs</span>
                        </div>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            student.questionsAnswered >= SYLLABUS_TOTAL
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                              : student.questionsAnswered > 100
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                              : student.questionsAnswered > 0
                              ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                              : 'bg-slate-700'
                          }`}
                          style={{ width: `${Math.max(student.questionsAnswered > 0 ? 5 : 0, progressPercent)}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>{progressPercent}% syllabus completed</span>
                        {student.flashcardsLearned > 0 && (
                          <span className="text-amber-400 font-bold">
                            ⭐ {student.flashcardsLearned} vocab
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Last Active Timestamp */}
                    <div className="text-left sm:text-right space-y-0.5 min-w-[110px]">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Last Active
                      </span>
                      <p className="text-xs font-bold text-slate-200">
                        {formatTimeAgo(student.lastActiveAt)}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {student.lastActiveAt ? new Date(student.lastActiveAt).toLocaleDateString() : 'Never'}
                      </p>
                    </div>

                    {/* Expand Details Button */}
                    <button
                      onClick={() => setExpandedUserId((prev) => (prev === student.id ? null : student.id))}
                      className="px-3 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all self-end sm:self-center border border-slate-700"
                    >
                      <span>{isExpanded ? 'Hide' : 'Details'}</span>
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* EXPANDABLE CHAPTER BREAKDOWN & DETAILS */}
                {/* ========================================================================= */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-800 bg-slate-950/40 rounded-b-2xl space-y-4">
                    {/* Chapter Breakdown Pills */}
                    <div>
                      <h5 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <BookOpenIcon className="w-3.5 h-3.5 text-blue-400" />
                        <span>Chapter-by-Chapter Learning Breakdown</span>
                      </h5>
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Chapter 1</span>
                          <span className="text-sm font-black text-blue-400">
                            {student.chapterCounts.ch1}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Chapter 2</span>
                          <span className="text-sm font-black text-indigo-400">
                            {student.chapterCounts.ch2}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Chapter 3</span>
                          <span className="text-sm font-black text-purple-400">
                            {student.chapterCounts.ch3}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Chapter 4</span>
                          <span className="text-sm font-black text-teal-400">
                            {student.chapterCounts.ch4}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Chapter 5</span>
                          <span className="text-sm font-black text-emerald-400">
                            {student.chapterCounts.ch5}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Past Exams</span>
                          <span className="text-sm font-black text-amber-400">
                            {student.chapterCounts.pastExams}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Other / 2026</span>
                          <span className="text-sm font-black text-slate-300">
                            {student.chapterCounts.other}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Qs</span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Vocabulary Flashcards</span>
                        <p className="font-bold text-amber-400 text-sm">
                          {student.flashcardsLearned} Words Mastered
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Bookmarks: <span className="text-white font-bold">{student.bookmarksCount}</span> saved
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Key Registration Date</span>
                        <p className="font-mono text-slate-300 text-xs">
                          {student.createdAt ? new Date(student.createdAt).toLocaleString() : 'N/A'}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Type: <span className="text-blue-400 font-bold uppercase">{student.type || 'permanent'}</span>
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Connected Device Fingerprints</span>
                        <p className="text-xs font-bold text-slate-300">
                          {student.deviceCount} registered devices
                        </p>
                        <div className="max-h-16 overflow-y-auto space-y-1 scrollbar-none">
                          {student.deviceIds.map((did, didIdx) => (
                            <p key={didIdx} className="font-mono text-[9px] text-slate-400 truncate">
                              #{didIdx + 1}: {did.slice(0, 16)}...
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
