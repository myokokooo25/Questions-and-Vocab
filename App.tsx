
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import AuthScreen from './components/Login';
import Dashboard from './components/Dashboard';
import WelcomeScreen from './components/WelcomeScreen';
import FlashcardApp from './vocabulary-flashcards/App';
import TechnicalDictionary from './components/TechnicalDictionary';
import CheatSheetView from './components/CheatSheetView';
import WeakPointNotebook from './components/WeakPointNotebook';
import EngineeringCalculator from './components/EngineeringCalculator';
import InstallPrompt from './components/InstallPrompt';
import { ChevronLeftIcon } from './components/Icons';

type AppMode = 'main' | '2026' | '2026-level2' | '2021' | '2022' | '2023' | '2024' | '2025' | 'flashcards' | 'dictionary' | 'cheat-sheet' | 'weak-points' | 'calculator';

const FlashcardAppWrapper: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-neumorphic-bg p-2 sticky top-0 z-30 shadow-neumorphic-outset">
         <div className="max-w-5xl lg:max-w-6xl px-2 mx-auto sm:px-4 lg:px-6">
            <button
              onClick={onGoBack}
              className="p-2.5 rounded-lg shadow-neumorphic-outset text-slate-500 hover:text-slate-700 active:shadow-neumorphic-inset transition-all duration-200"
              title="Go Back to Main Menu"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <FlashcardApp />
      </div>
    </div>
  );
};


const AppContent: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<AppMode | null>(null);
  const { user, loading } = useAuth();

  const handleSelectApp = (app: AppMode) => {
    setSelectedApp(app);
  };

  const handleGoBack = () => {
    setSelectedApp(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full border-t-indigo-600 animate-spin"></div>
      </div>
    );
  }
  
  if (!user) {
    return <AuthScreen />;
  }

  if (!selectedApp) {
    return <WelcomeScreen onSelectApp={handleSelectApp} />;
  }

  const isOldQuestionMode = typeof selectedApp === 'string' 
    && /^\d{4}$/.test(selectedApp) 
    && selectedApp !== '2026';

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <InstallPrompt />
      <div className="w-full flex-1 flex flex-col">
        { (selectedApp === 'main' || selectedApp === '2026' || selectedApp === '2026-level2' || isOldQuestionMode) && <Dashboard selectedApp={selectedApp as 'main' | '2026' | '2026-level2' | '2021' | '2022' | '2023' | '2024' | '2025'} onGoBack={handleGoBack} /> }
        { selectedApp === 'flashcards' && <FlashcardAppWrapper onGoBack={handleGoBack} /> }
        { selectedApp === 'dictionary' && <TechnicalDictionary onGoBack={handleGoBack} /> }
        { selectedApp === 'cheat-sheet' && <CheatSheetView onGoBack={handleGoBack} /> }
        { selectedApp === 'weak-points' && <WeakPointNotebook onGoBack={handleGoBack} /> }
        { selectedApp === 'calculator' && <EngineeringCalculator onGoBack={handleGoBack} /> }
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProgressProvider>
        <ThemeProvider>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </ThemeProvider>
      </ProgressProvider>
    </AuthProvider>
  );
};

export default App;
