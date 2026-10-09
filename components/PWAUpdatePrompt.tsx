import React, { useEffect, useState } from 'react';
import { RefreshIcon, SparkleIcon, XIcon, LoadingSpinnerIcon } from './Icons';

// Global helper that any component can call to force refresh the PWA
export async function forceAppUpdateAndRefresh(): Promise<void> {
  try {
    // 1. Clear caches
    if ('caches' in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map(key => caches.delete(key)));
    }

    // 2. Update service worker registration if available
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.update();
      }
    }
  } catch (e) {
    console.warn('Cache clear warning:', e);
  } finally {
    // 3. Force hard reload from server
    window.location.reload();
  }
}

export const PWAUpdatePrompt: React.FC = () => {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateFunction, setUpdateFunction] = useState<(() => Promise<void>) | null>(null);

  useEffect(() => {
    // Dynamically register service worker with auto-update listener
    let updateSW: ((reloadPage?: boolean) => Promise<void>) | undefined;

    const setupSW = async () => {
      try {
        const { registerSW } = await import('virtual:pwa-register');
        updateSW = registerSW({
          immediate: true,
          onNeedRefresh() {
            setNeedRefresh(true);
            setUpdateFunction(() => async () => {
              setIsUpdating(true);
              if (updateSW) {
                await updateSW(true);
              } else {
                await forceAppUpdateAndRefresh();
              }
            });
          },
          onOfflineReady() {
            console.log('[PWA] App is ready for offline usage');
          },
          onRegisteredSW(swUrl, registration) {
            if (registration) {
              // 1. Periodically check for updates every 15 minutes
              setInterval(() => {
                registration.update().catch(() => {});
              }, 15 * 60 * 1000);

              // 2. Check for updates whenever user returns to the app
              const handleVisibilityChange = () => {
                if (document.visibilityState === 'visible') {
                  registration.update().catch(() => {});
                }
              };
              document.addEventListener('visibilitychange', handleVisibilityChange);
            }
          }
        });
      } catch (err) {
        // In dev or unsupported environments, ignore
      }
    };

    setupSW();
  }, []);

  const handleUpdateClick = async () => {
    setIsUpdating(true);
    if (updateFunction) {
      await updateFunction();
    } else {
      await forceAppUpdateAndRefresh();
    }
  };

  if (!needRefresh) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-[9999] max-w-md mx-auto animate-in slide-in-from-top-6 duration-300">
      <div className="bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-md border border-purple-500/40 rounded-2xl shadow-2xl p-4 text-white">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-purple-600/30 border border-purple-400/30 text-purple-300 shrink-0 mt-0.5">
            <SparkleIcon className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                ဗားရှင်းအသစ် ရောက်ရှိနေပါပြီ!
              </h4>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 font-semibold font-mono">
                UPDATE
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              နောက်ဆုံးထွက် Questions များနှင့် အချက်အလက်အသစ်များ ရယူရန် App ကို Update လုပ်ပေးပါခင်ဗျာ။
            </p>

            <div className="flex items-center gap-2.5 mt-3">
              <button
                onClick={handleUpdateClick}
                disabled={isUpdating}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg transition-all active:scale-95 flex items-center gap-1.5 disabled:opacity-50"
              >
                {isUpdating ? (
                  <>
                    <LoadingSpinnerIcon className="w-3.5 h-3.5" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshIcon className="w-3.5 h-3.5" />
                    <span>အခုပဲ Update လုပ်မည်</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setNeedRefresh(false)}
                className="px-3 py-2 text-slate-400 hover:text-white text-xs font-semibold rounded-xl hover:bg-slate-800/60 transition-colors"
              >
                ခဏထားမည်
              </button>
            </div>
          </div>
          <button
            onClick={() => setNeedRefresh(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors shrink-0"
            title="Dismiss"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAUpdatePrompt;
