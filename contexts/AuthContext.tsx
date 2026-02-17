
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (accessKey: string) => Promise<boolean>;
  logout: () => void;
  syncLocalKeys: () => Promise<string>;
}

// Use localStorage to persist device ID across browser sessions
const getDeviceId = (): string => {
  let deviceId = localStorage.getItem('unique_device_id');
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem('unique_device_id', deviceId);
  }
  return deviceId;
};

const LOGGED_IN_USER_KEY = 'auth_loggedInUser_key';
const DEVICE_HISTORY_KEY = 'auth_device_history';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      try {
        const storedUserJSON = localStorage.getItem(LOGGED_IN_USER_KEY);
        if (storedUserJSON) {
          let storedUser = JSON.parse(storedUserJSON) as User;
          
          // If trial user, check if expired on load
          if (storedUser.type === 'trial' && storedUser.trialExpiresAt) {
              const expires = new Date(storedUser.trialExpiresAt).getTime();
              const now = new Date().getTime();
              if (now > expires) {
                  logout(); // Auto logout if expired
                  setLoading(false);
                  return;
              }
          }

          // --- FIX FOR EXISTING USERS: Fetch dbId if missing ---
          // Progress saving requires dbId. Old sessions might not have it.
          if (!storedUser.dbId) {
             try {
                const { data } = await supabase
                    .from('access_codes')
                    .select('id')
                    .eq('code', storedUser.accessKey)
                    .single();
                
                if (data) {
                    storedUser = { ...storedUser, dbId: data.id };
                    localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(storedUser));
                }
             } catch (fetchErr) {
                 console.error("Failed to patch user dbId", fetchErr);
             }
          }
          // -----------------------------------------------------

          setUser(storedUser);
        }
      } catch (err) {
        console.error("Failed to process user from localStorage", err);
        localStorage.removeItem(LOGGED_IN_USER_KEY);
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (accessKey: string): Promise<boolean> => {
    setError(null);
    setLoading(true);

    const upperAccessKey = accessKey.trim().toUpperCase();
    const deviceId = getDeviceId();

    try {
      // 1. Fetch Code Data from Supabase
      const { data, error: dbError } = await supabase
        .from('access_codes')
        .select('*') // Select all to get type, device_ids, first_used_at, id
        .eq('code', upperAccessKey)
        .eq('is_active', true)
        .single();

      if (dbError || !data) {
        setError('Invalid Redeem Code.');
        setLoading(false);
        return false;
      }

      let userData: User = { 
          accessKey: upperAccessKey,
          type: data.type || 'permanent', // Default to permanent if null
          dbId: data.id // Store the database ID for progress syncing
      };

      // --- LOGIC FOR PERMANENT KEYS (Device Limit) ---
      if (userData.type === 'permanent') {
          const currentDevices = data.device_ids || [];
          
          // Check if this device is already registered
          if (!currentDevices.includes(deviceId)) {
              // EXCEPTION: 'BESTFRIEND' key has NO device limit.
              // For all other keys, enforce limit of 3.
              if (upperAccessKey !== 'BESTFRIEND' && currentDevices.length >= 3) {
                  setError('Device Limit Reached (Max 3 Devices). Contact Admin.');
                  setLoading(false);
                  return false;
              }
              
              // Register new device
              const { error: updateError } = await supabase
                  .from('access_codes')
                  .update({ device_ids: [...currentDevices, deviceId] })
                  .eq('id', data.id);

              if (updateError) {
                  setError('Failed to register device. Try again.');
                  setLoading(false);
                  return false;
              }
          }
      } 
      // --- LOGIC FOR TRIAL KEYS (Time Limit) ---
      else if (userData.type === 'trial') {
          const now = new Date();
          let firstUsed = data.first_used_at ? new Date(data.first_used_at) : null;

          if (!firstUsed) {
              // First time use: Set timestamp in DB
              const { error: updateError } = await supabase
                  .from('access_codes')
                  .update({ first_used_at: now.toISOString() })
                  .eq('id', data.id);
              
              if (updateError) {
                   setError('Failed to start trial. Try again.');
                   setLoading(false);
                   return false;
              }
              firstUsed = now;
          }

          // Calculate Expiration (15 minutes)
          const EXPIRE_MINUTES = 15;
          const expiresAt = new Date(firstUsed.getTime() + EXPIRE_MINUTES * 60000);
          
          if (now > expiresAt) {
              setError('Trial Period Expired (15 Minutes Limit).');
              setLoading(false);
              return false;
          }

          userData.trialExpiresAt = expiresAt.toISOString();
      }

      // Login Successful
      localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(userData));
      
      // Log History (Local)
      const historyJSON = localStorage.getItem(DEVICE_HISTORY_KEY);
      const history = historyJSON ? JSON.parse(historyJSON) : [];
      history.push({
        deviceId: deviceId,
        accessKey: upperAccessKey,
        timestamp: new Date().toISOString(),
        status: 'success'
      });
      localStorage.setItem(DEVICE_HISTORY_KEY, JSON.stringify(history.slice(-50)));

      setUser(userData);
      setLoading(false);
      return true;

    } catch (err: any) {
      console.error("Login error", err);
      setError(err.message || 'An unexpected error occurred.');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
    setUser(null);
  };

  const syncLocalKeys = async (): Promise<string> => {
    return "Sync disabled in strict mode.";
  };

  const value = { user, loading, error, login, logout, syncLocalKeys };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
