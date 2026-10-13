
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'gold' | 'mono';
type FontSize = 'small' | 'medium' | 'large';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  fontSizePx: number;
  setFontSizePx: (px: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const v2 = localStorage.getItem('app_theme_default_v2');
      if (!v2) {
        localStorage.setItem('app_theme', 'light');
        localStorage.setItem('app_theme_default_v2', 'applied');
        return 'light';
      }
      const storedTheme = localStorage.getItem('app_theme');
      if (storedTheme === 'dark' || storedTheme === 'light' || storedTheme === 'gold' || storedTheme === 'mono') {
        return storedTheme;
      }
      if (storedTheme === 'khachannel') {
        return 'gold';
      }
    } catch (error) {
      console.error("Could not read theme from localStorage", error);
    }
    return 'light'; // Default to light for all users and devices
  });

  const [fontSizePx, setFontSizePxState] = useState<number>(() => {
    try {
      const storedPx = localStorage.getItem('app_font_size_px');
      if (storedPx) {
        const parsed = parseInt(storedPx, 10);
        if (!isNaN(parsed) && parsed >= 12 && parsed <= 32) {
          return parsed;
        }
      }
      const storedSize = localStorage.getItem('app_font_size');
      if (storedSize === 'small') return 15;
      if (storedSize === 'large') return 21;
    } catch (error) {
      console.error("Could not read font size px from localStorage", error);
    }
    return 18; // Default 18px matching user design
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
    root.classList.remove('light', 'dark', 'gold', 'khachannel', 'mono');
    root.classList.add(theme);
    try {
      localStorage.setItem('app_theme', theme);
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content',
          theme === 'dark' ? '#151a23' : theme === 'gold' ? '#0a0a0a' : theme === 'mono' ? '#ffffff' : '#ecf0f3'
        );
      }
    } catch (error) {
      console.error("Failed to save theme to localStorage", error);
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--app-font-size-px', `${fontSizePx}px`);
    root.style.fontSize = `${fontSizePx}px`;
    try {
      localStorage.setItem('app_font_size_px', String(fontSizePx));
      const derivedCategory: FontSize = fontSizePx < 17 ? 'small' : fontSizePx > 20 ? 'large' : 'medium';
      localStorage.setItem('app_font_size', derivedCategory);
      setFontSizeState(derivedCategory);
    } catch (error) {
      console.error("Failed to save font size px to localStorage", error);
    }
  }, [fontSizePx]);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    if (size === 'small') setFontSizePxState(15);
    else if (size === 'large') setFontSizePxState(21);
    else setFontSizePxState(18);
    try {
      localStorage.setItem('app_font_size', size);
    } catch (error) {
      console.error("Failed to save font size to localStorage", error);
    }
  };

  const setFontSizePx = (px: number) => {
    const clamped = Math.max(12, Math.min(30, px));
    setFontSizePxState(clamped);
  };

  const increaseFontSize = () => {
    setFontSizePxState(prev => Math.min(30, prev + 1));
  };

  const decreaseFontSize = () => {
    setFontSizePxState(prev => Math.max(12, prev - 1));
  };

  const resetFontSize = () => {
    setFontSizePxState(18);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prevTheme => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'gold';
      if (prevTheme === 'gold') return 'mono';
      return 'light';
    });
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
    fontSize,
    setFontSize,
    fontSizePx,
    setFontSizePx,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
