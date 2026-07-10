import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'; // We will use our own X icon or existing Icons.tsx

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    setIsStandalone(!!isPWA);

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    // If not standalone and is iOS, we might want to show instructions
    if (isIOSDevice && !isPWA) {
       // Optional: don't show every single time.
       const hasDismissed = localStorage.getItem('pwa_prompt_dismissed');
       if (!hasDismissed) {
         setShowPrompt(true);
       }
    }

    // Android/Chrome beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const hasDismissed = localStorage.getItem('pwa_prompt_dismissed');
      if (!hasDismissed) {
         setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (!showPrompt || isStandalone) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-[100] animate-in slide-in-from-bottom-full duration-300">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 border border-slate-200 dark:border-slate-700 max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/icon.svg" alt="App Icon" className="w-12 h-12 rounded-xl object-cover bg-slate-100" />
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100">Install App</h3>
            {isIOS ? (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tap <span className="inline-block px-1 border border-slate-300 dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700">Share</span> and <strong>Add to Home Screen</strong>
              </p>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">Add to home screen for offline use.</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isIOS && deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-sm shadow-md hover:bg-blue-700 transition-colors"
            >
              Install
            </button>
          )}
          <button onClick={handleDismiss} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
