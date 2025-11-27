import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { VALID_ACCESS_KEYS, TRIAL_ACCESS_KEYS } from '../data/keys';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (accessKey: string) => Promise<boolean>;
  logout: () => void;
}

const getDeviceId = (): string => {
  let deviceId = sessionStorage.getItem('deviceId');
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    sessionStorage.setItem('deviceId', deviceId);
  }
  return deviceId;
};

// --- localStorage Keys ---
const LOGGED_IN_USER_KEY = 'auth_loggedInUser_key';
const DEVICE_HISTORY_KEY = 'auth_device_history';

// --- Auth Context ---
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      const storedUserJSON = localStorage.getItem(LOGGED_IN_USER_KEY);
      if (storedUserJSON) {
        const storedUser = JSON.parse(storedUserJSON) as User;
        setUser(storedUser);
      }
    } catch (err) {
      console.error("Failed to process user from localStorage", err);
      localStorage.removeItem(LOGGED_IN_USER_KEY);
    }
    setLoading(false);
  }, []);

  const login = async (accessKey: string): Promise<boolean> => {
    setError(null);
    setLoading(true);

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const upperAccessKey = accessKey.toUpperCase();
    const allKeys = [...VALID_ACCESS_KEYS, ...TRIAL_ACCESS_KEYS];

    if (allKeys.includes(upperAccessKey)) {
      const deviceId = getDeviceId();
      
      // Record login history for admin panel
      try {
        const historyJSON = localStorage.getItem(DEVICE_HISTORY_KEY);
        const history = historyJSON ? JSON.parse(historyJSON) : [];
        const newEntry = {
          deviceId: deviceId,
          accessKey: upperAccessKey,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        };
        history.push(newEntry);
        localStorage.setItem(DEVICE_HISTORY_KEY, JSON.stringify(history));
      } catch (err) {
        console.error("Failed to record device history", err);
      }
      
      // Set user state
      const userData: User = { accessKey: upperAccessKey };
      localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(userData));
      setUser(userData);
      setLoading(false);
      return true;
    } else {
      setError('Invalid Redeem Code.');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
    setUser(null);
  };

  const value = { user, loading, error, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};