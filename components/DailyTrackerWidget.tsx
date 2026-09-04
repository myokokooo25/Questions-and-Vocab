import React, { useState, useEffect } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { ClockIcon, CheckCircleSolidIcon, SparkleIcon } from './Icons';

interface DailyTrackerWidgetProps {
  onStartPractice?: () => void;
}

export const DailyTrackerWidget: React.FC<DailyTrackerWidgetProps> = ({ onStartPractice }) => {
  const { dailyGoal, setDailyTarget } = useProgress();
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showTargetMenu, setShowTargetMenu] = useState(false);

  // Target exam date: October 17, 2026 (09:00 AM JST)
  useEffect(() => {
    const examDate = new Date('2026-10-17T09:00:00+09:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = examDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const progressPercent = Math.min(100, Math.round((dailyGoal.answeredToday / Math.max(1, dailyGoal.target)) * 100));
  const isGoalAchieved = dailyGoal.answeredToday >= dailyGoal.target;

  const targetOptions = [5, 10, 15, 20, 30];

  return (
    <div className="w-full bg-neumorphic-bg rounded-2xl sm:rounded-[2.5rem] shadow-neumorphic-outset p-4 sm:p-6 lg:p-7 border border-slate-300/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
        
        {/* Left Column: Exam Countdown */}
        <div className="md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-300/30 pb-4 md:pb-0 md:pr-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shadow-neumorphic-inset">
              <ClockIcon className="w-4 h-4" />
            </span>
            <span className="text-[11px] sm:text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              2026 Exam Countdown (စာမေးပွဲရက်)
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 tracking-tight mb-2">
            鉄骨製作管理技術者 試験
          </h3>

          <div className="grid grid-cols-4 gap-2 text-center my-1">
            <div className="p-2 sm:p-2.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset">
              <span className="block text-lg sm:text-2xl font-black text-slate-800 dark:text-slate-100 font-mono">
                {timeLeft.days}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Days</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset">
              <span className="block text-lg sm:text-2xl font-black text-slate-800 dark:text-slate-100 font-mono">
                {timeLeft.hours}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hrs</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset">
              <span className="block text-lg sm:text-2xl font-black text-slate-800 dark:text-slate-100 font-mono">
                {timeLeft.minutes}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Min</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset">
              <span className="block text-lg sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">
                {timeLeft.seconds}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sec</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 font-medium mt-2">
            စာမေးပွဲကျင်းပမည့်နေ့: ၂၀၂၆ ခုနှစ် အောက်တိုဘာ ၁၇ ရက် (စနေနေ့)
          </p>
        </div>

        {/* Right Column: Daily Study Goal & Streak */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shadow-neumorphic-inset">
                <SparkleIcon className="w-4 h-4" />
              </span>
              <span className="text-[11px] sm:text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Daily Goal (နေ့စဉ် ပန်းတိုင်)
              </span>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset text-xs font-black text-amber-500">
              <span className="text-sm">🔥</span>
              <span>{dailyGoal.streak || 0} Day Streak</span>
            </div>
          </div>

          {/* Progress Bar & Numbers */}
          <div className="space-y-2 my-2">
            <div className="flex items-baseline justify-between text-xs sm:text-sm font-black">
              <div className="flex items-center gap-2">
                <span className="text-slate-700 dark:text-slate-200">
                  ယနေ့ဖြေဆိုပြီး: <span className="text-blue-600 dark:text-blue-400 font-mono text-base sm:text-lg">{dailyGoal.answeredToday}</span> / {dailyGoal.target} ပုဒ်
                </span>
                {isGoalAchieved && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <CheckCircleSolidIcon className="w-3.5 h-3.5" />
                    ပြည့်မီပါပြီ!
                  </span>
                )}
              </div>
              <span className="font-mono text-slate-500 dark:text-slate-400 font-bold">{progressPercent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-neumorphic-bg shadow-neumorphic-inset p-0.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isGoalAchieved
                    ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Target Changer and Motivation Message */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-[11px]">ပန်းတိုင်သတ်မှတ်ရန်:</span>
              <div className="flex items-center gap-1">
                {targetOptions.map(target => (
                  <button
                    key={target}
                    onClick={() => setDailyTarget(target)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-black transition-all ${
                      dailyGoal.target === target
                        ? 'shadow-neumorphic-inset text-blue-600 dark:text-blue-400 bg-blue-50/20'
                        : 'shadow-neumorphic-outset text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 active:shadow-neumorphic-inset'
                    }`}
                  >
                    {target}
                  </button>
                ))}
              </div>
            </div>

            {onStartPractice && (
              <button
                onClick={onStartPractice}
                className="px-3 py-1.5 rounded-xl shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-[11px] font-black text-blue-600 dark:text-blue-400 transition-all ml-auto"
              >
                မေးခွန်းလေ့ကျင့်ရန် →
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DailyTrackerWidget;
