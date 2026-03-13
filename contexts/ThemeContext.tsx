
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const storedTheme = localStorage.getItem('app_theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (error) {
      console.error("Could not read theme from localStorage", error);
    }
    return 'dark'; // Default to dark
  });

  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    try {
      const storedFontSize = localStorage.getItem('app_font_size');
      if (storedFontSize === 'small' || storedFontSize === 'medium' || storedFontSize === 'large') {
        return storedFontSize;
      }
    } catch (error) {
      console.error("Could not read font size from localStorage", error);
    }
    return 'medium'; // Default to medium
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('app_theme', theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage", error);
    }
  }, [theme]);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    try {
      localStorage.setItem('app_font_size', size);
    } catch (error) {
      console.error("Failed to save font size to localStorage", error);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme, fontSize, setFontSize };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
