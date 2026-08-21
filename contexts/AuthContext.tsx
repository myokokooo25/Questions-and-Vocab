
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (accessKey: string, userName?: string) => Promise<boolean>;
  logout: () => void;
  syncLocalKeys: () => Promise<string>;
}

// Robust Device Fingerprinting logic
const getDeviceFingerprint = async (): Promise<string> => {
  try {
    // 1. Collect browser/hardware metadata
    const fingerprintData = {
      ua: navigator.userAgent,
      lang: navigator.language,
      platform: navigator.platform,
      screen: `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      cores: navigator.hardwareConcurrency || 'unknown'
    };

    // 2. Fetch IP Address (Optional but recommended)
    let ip = 'unknown';
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      ip = ipData.ip;
    } catch (e) {
      console.warn("Failed to fetch IP for fingerprinting");
    }

    // 3. Combine with persistent LocalStorage ID (if exists)
    let persistentId = localStorage.getItem('unique_device_id');
    if (!persistentId) {
      persistentId = crypto.randomUUID();
      localStorage.setItem('unique_device_id', persistentId);
    }

    // 4. Create a combined hash
    const rawString = JSON.stringify({ ...fingerprintData, ip, persistentId });
    const msgUint8 = new TextEncoder().encode(rawString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
  } catch (err) {
    console.error("Fingerprinting failed, falling back to basic ID", err);
    let fallbackId = localStorage.getItem('unique_device_id');
    if (!fallbackId) {
      fallbackId = crypto.randomUUID();
      localStorage.setItem('unique_device_id', fallbackId);
    }
    return fallbackId;
  }
};

const LOGGED_IN_USER_KEY = 'auth_loggedInUser_key';
const DEVICE_HISTORY_KEY = 'auth_device_history';

// Fallback keys in case DB is not set up or offline
const FALLBACK_KEYS: string[] = ['420', 'MANOEL', 'BESTFRIEND', 'DEMO', 'ADMIN', 'STUDENT', 'FREE', 'VIP', 'TEST', '2026', 'MYOKOKOOO'];

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
          
          if (!storedUser.loggedInAt) {
            storedUser.loggedInAt = new Date().toISOString();
            localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(storedUser));
          }

          // Security check if DB is available
          if (storedUser.isAdmin && storedUser.accessKey !== 'MANOEL' && storedUser.accessKey !== 'ADMIN') {
             try {
               const { data } = await supabase
                  .from('access_codes')
                  .select('code')
                  .eq('code', storedUser.accessKey)
                  .eq('is_active', true)
                  .maybeSingle();
               
               if (!data) {
                  storedUser.isAdmin = false;
                  localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(storedUser));
               }
             } catch {
               // DB offline or not configured
             }
          }

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

          // Fix for existing users: fetch dbId if missing
          if (!storedUser.dbId && !FALLBACK_KEYS.includes(storedUser.accessKey)) {
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
                 // DB not configured or offline, continue with local state
             }
          }

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

  const login = async (accessKey: string, userName: string = ''): Promise<boolean> => {
    setError(null);
    setLoading(true);

    const upperAccessKey = accessKey.trim().toUpperCase();
    const deviceId = await getDeviceFingerprint();

    const createFallbackUser = (): User => ({
      accessKey: upperAccessKey,
      userName: userName || 'User',
      type: 'permanent',
      dbId: undefined,
      isAdmin: upperAccessKey === 'MANOEL' || upperAccessKey === 'ADMIN',
      loggedInAt: new Date().toISOString()
    });

    try {
      // 1. Fetch Code Data from Supabase
      const { data, error: dbError } = await supabase
        .from('access_codes')
        .select('*')
        .eq('code', upperAccessKey)
        .eq('is_active', true)
        .maybeSingle();

      if (dbError || !data) {
        // Fallback login if key is in FALLBACK_KEYS or if DB is offline/unconfigured
        const isDbUnreachable = Boolean(dbError) || !data;
        const isFallbackKey = FALLBACK_KEYS.includes(upperAccessKey) || upperAccessKey === '420' || upperAccessKey.startsWith('DEMO') || upperAccessKey.startsWith('TEST');

        if (isFallbackKey || isDbUnreachable) {
          const userData = createFallbackUser();
          localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(userData));
          setUser(userData);
          setLoading(false);
          return true;
        }

        setError('Invalid Redeem Code. (If database is not set up, try 420)');
        setLoading(false);
        return false;
      }

      let userData: User = { 
          accessKey: upperAccessKey,
          userName: userName || data.user_name || 'Unknown',
          type: data.type || 'permanent',
          dbId: data.id,
          isAdmin: upperAccessKey === 'MANOEL' || upperAccessKey === 'ADMIN',
          loggedInAt: new Date().toISOString()
      };

      // Logic for Permanent Keys (Device Limit)
      if (userData.type === 'permanent') {
          const currentDevices = data.device_ids || [];
          
          if (!currentDevices.includes(deviceId)) {
              if (upperAccessKey !== 'BESTFRIEND' && upperAccessKey !== 'MANOEL' && upperAccessKey !== 'ADMIN') {
                  const limit = upperAccessKey.startsWith('CHANSU14-') ? 20 : 3;
                  if (currentDevices.length >= limit) {
                      setError(`Device Limit Reached (Max ${limit} Devices). Contact Admin.`);
                      setLoading(false);
                      return false;
                  }
              }
              
              let { error: updateError } = await supabase
                  .from('access_codes')
                  .update({ 
                      device_ids: [...currentDevices, deviceId],
                      user_name: userName || data.user_name
                  })
                  .eq('id', data.id);

              if (updateError && updateError.message.includes('user_name')) {
                  const fallbackUpdate = await supabase
                      .from('access_codes')
                      .update({ device_ids: [...currentDevices, deviceId] })
                      .eq('id', data.id);
                  updateError = fallbackUpdate.error;
              }

              if (updateError) {
                  console.warn("DB update failed, proceeding with login:", updateError);
              }
          } else {
              if (userName && data.user_name !== userName) {
                  await supabase
                      .from('access_codes')
                      .update({ user_name: userName })
                      .eq('id', data.id);
              }
          }
      } 
      // Logic for Trial Keys
      else if (userData.type === 'trial') {
          const now = new Date();
          let firstUsed = data.first_used_at ? new Date(data.first_used_at) : null;

          if (!firstUsed) {
              await supabase
                  .from('access_codes')
                  .update({ 
                      first_used_at: now.toISOString(),
                      user_name: userName || data.user_name
                  })
                  .eq('id', data.id);
              firstUsed = now;
          }

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
      // Always allow fallback login on error
      const userData = createFallbackUser();
      localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(userData));
      setUser(userData);
      setLoading(false);
      return true;
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
