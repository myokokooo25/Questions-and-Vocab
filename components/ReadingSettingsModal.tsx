import React from 'react';
import { useTheme, Theme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import {
  XIcon,
  SunIcon,
  MoonIcon,
  SparkleIcon,
  ContrastIcon,
  GlobeIcon,
  RefreshIcon,
  TextSizeIcon,
  UsersIcon,
  LogoutIcon,
  InfoIcon
} from './Icons';

interface ReadingSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppGuide?: () => void;
  onOpenInstallInfo?: () => void;
  onOpenAdminPanel?: () => void;
}

export const ReadingSettingsModal: React.FC<ReadingSettingsModalProps> = ({
  isOpen,
  onClose,
  onOpenAppGuide,
  onOpenInstallInfo,
  onOpenAdminPanel,
}) => {
  const {
    theme,
    setTheme,
    fontSizePx,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  } = useTheme();

  const { language, setLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  if (!isOpen) return null;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const r of registrations) {
          await r.unregister();
        }
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      window.location.reload();
    } catch (e) {
      window.location.reload();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-neumorphic-bg rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-8 max-w-md w-full border border-slate-300/30 dark:border-slate-700/50 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header matching user image: စာဖတ်ရန် ချိန်ညှိချက် + ✕ */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-300/30 dark:border-slate-700/50 mb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              စာဖတ်ရန် ချိန်ညှိချက်
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 active:shadow-neumorphic-inset transition-all"
            title="Close"
            aria-label="Close"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Row 1: Font Size Stepper (Exact match for Image 3: AA Font [ A- ] 18px [ A+ ]) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-black text-slate-400 dark:text-slate-500 font-mono tracking-tighter">
                AA
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200">
                Font
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* [ A- ] button */}
              <button
                onClick={decreaseFontSize}
                disabled={fontSizePx <= 12}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-slate-700 dark:text-slate-200 font-black text-sm sm:text-base transition-all disabled:opacity-40 select-none active:scale-95"
                title="Decrease font size (A-)"
                aria-label="Decrease font size"
              >
                A-
              </button>

              {/* [ 18px ] middle display (clickable to reset to default 18px) */}
              <button
                onClick={resetFontSize}
                className="min-w-[54px] text-center font-mono font-bold text-sm sm:text-base text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors py-1 px-1 rounded-lg"
                title="Click to reset font size to 18px (မူလ 18px သို့ ပြန်ထားမည်)"
              >
                {fontSizePx}px
              </button>

              {/* [ A+ ] button */}
              <button
                onClick={increaseFontSize}
                disabled={fontSizePx >= 30}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-slate-700 dark:text-slate-200 font-black text-sm sm:text-base transition-all disabled:opacity-40 select-none active:scale-95"
                title="Increase font size (A+)"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          {/* Theme Selector */}
          <div>
            <label className="text-xs font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest block mb-2.5">
              Theme (အရောင်ပုံစံ)
            </label>
            <div className="grid grid-cols-4 gap-2 bg-neumorphic-bg p-1.5 rounded-2xl shadow-neumorphic-inset">
              {(
                [
                  { id: 'light', label: 'Light', icon: SunIcon, color: 'text-amber-500' },
                  { id: 'dark', label: 'Dark', icon: MoonIcon, color: 'text-blue-400' },
                  { id: 'gold', label: 'Gold', icon: SparkleIcon, color: 'text-amber-400' },
                  { id: 'mono', label: 'B&W', icon: ContrastIcon, color: 'text-slate-800 dark:text-slate-200' },
                ] as const
              ).map(({ id, label, icon: Icon, color }) => (
                <button
                  key={id}
                  onClick={() => setTheme(id as Theme)}
                  className={`py-2 px-1 text-xs font-bold rounded-xl transition-all flex flex-col items-center justify-center gap-1 ${
                    theme === id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${theme === id ? 'text-white' : color}`} />
                  <span className="text-[11px]">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div>
            <label className="text-xs font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest block mb-2.5">
              Language (ဘာသာစကား)
            </label>
            <div className="grid grid-cols-3 gap-2 bg-neumorphic-bg p-1.5 rounded-2xl shadow-neumorphic-inset">
              <button
                onClick={() => setLanguage('my')}
                className={`py-2.5 px-2 text-xs font-bold rounded-xl transition-all text-center ${
                  language === 'my'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                🇲🇲 မြန်မာ
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className={`py-2.5 px-2 text-xs font-bold rounded-xl transition-all text-center ${
                  language === 'jp'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                🇯🇵 JP+🇲🇲
              </button>
              <button
                onClick={() => setLanguage('jp-only')}
                className={`py-2.5 px-2 text-xs font-bold rounded-xl transition-all text-center ${
                  language === 'jp-only'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                🇯🇵 JP Only
              </button>
            </div>
          </div>

          {/* User Account Info (if authenticated) */}
          {user && (
            <div className="p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-inset space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">အသုံးပြုသူ</span>
                <span className="text-xs font-black text-slate-700 dark:text-slate-200">
                  {user.userName || 'Student'}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-300/20">
                <span className="text-xs font-bold text-slate-400 uppercase">Access Code</span>
                <span className="text-xs font-mono font-bold text-blue-600">
                  {user.accessKey}
                </span>
              </div>
            </div>
          )}

          {/* Additional Action Buttons */}
          <div className="space-y-2.5 pt-2">
            {onOpenAdminPanel && user?.isAdmin && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAdminPanel();
                }}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                <SparkleIcon className="w-4 h-4" />
                <span>Admin Panel (အက်ဒမင် စီမံခန့်ခွဲမှု)</span>
              </button>
            )}

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset text-indigo-600 dark:text-indigo-400 font-bold text-xs transition-all"
            >
              <RefreshIcon className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Refreshing App...' : 'Check Update & Refresh (ဗားရှင်းအသစ် စစ်ဆေးမည်)'}</span>
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 mt-6 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg active:scale-95 transition-all"
        >
          ပြီးပါပြီ (Done)
        </button>
      </div>
    </div>
  );
};

export default ReadingSettingsModal;
