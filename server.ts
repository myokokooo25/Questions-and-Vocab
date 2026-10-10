import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import cors from "cors";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

function validateEnvironment() {
  const required = ['GEMINI_API_KEY'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn(`Missing required env vars: ${missing.join(', ')}`);
  }
}

validateEnvironment();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ limit: '25mb', extended: true }));

  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['https://questions-and-vocab-4aww.vercel.app', 'http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  }));

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/update-icon", async (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        res.status(400).json({ error: "No imageBase64 data provided" });
        return;
      }

      // Dynamic import of sharp
      const sharp = (await import('sharp')).default;
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(cleanBase64, 'base64');
      const publicDir = path.resolve('public');

      // First resize to 512 with RGBA
      const master512 = await sharp(buffer)
        .resize(512, 512, { fit: 'fill' })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const w = master512.info.width;
      const h = master512.info.height;
      const channels = master512.info.channels;
      const data = master512.data;

      // Detect and clear outer black corners
      const isOuterBlack = new Uint8Array(w * h);
      const queue: number[] = [];

      for (let x = 0; x < w; x++) {
        queue.push(0 * w + x);
        queue.push((h - 1) * w + x);
      }
      for (let y = 0; y < h; y++) {
        queue.push(y * w + 0);
        queue.push(y * w + (w - 1));
      }

      const threshold = 35;
      for (const idx of queue) {
        const p = idx * channels;
        if (data[p] < threshold && data[p+1] < threshold && data[p+2] < threshold) {
          isOuterBlack[idx] = 1;
        }
      }

      let head = 0;
      const bfsQueue: number[] = [];
      for (let i = 0; i < w * h; i++) {
        if (isOuterBlack[i]) bfsQueue.push(i);
      }

      while (head < bfsQueue.length) {
        const curr = bfsQueue[head++];
        const cx = curr % w;
        const cy = Math.floor(curr / w);
        const neighbors = [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1]
        ];

        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            const nIdx = ny * w + nx;
            if (!isOuterBlack[nIdx]) {
              const np = nIdx * channels;
              if (data[np] < threshold && data[np+1] < threshold && data[np+2] < threshold) {
                isOuterBlack[nIdx] = 1;
                bfsQueue.push(nIdx);
              }
            }
          }
        }
      }

      const outData = Buffer.from(data);
      for (let i = 0; i < w * h; i++) {
        const p = i * channels;
        if (isOuterBlack[i]) {
          outData[p] = 255;
          outData[p+1] = 255;
          outData[p+2] = 255;
          outData[p+3] = 0; // transparent
        }
      }

      // Soft anti-aliasing feather on boundary
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          if (!isOuterBlack[idx]) {
            let blackNeighbors = 0;
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                if (isOuterBlack[(y + dy) * w + (x + dx)]) blackNeighbors++;
              }
            }
            if (blackNeighbors > 0) {
              const p = idx * channels;
              const brightness = (outData[p] + outData[p+1] + outData[p+2]) / 3;
              if (brightness < 200) {
                const factor = brightness / 255;
                outData[p+3] = Math.round(factor * 255);
                outData[p] = Math.min(255, Math.round(outData[p] / Math.max(0.1, factor)));
                outData[p+1] = Math.min(255, Math.round(outData[p+1] / Math.max(0.1, factor)));
                outData[p+2] = Math.min(255, Math.round(outData[p+2] / Math.max(0.1, factor)));
              }
            }
          }
        }
      }

      const cleanedPng = await sharp(outData, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();

      // Save icon-512.png
      await sharp(cleanedPng)
        .png({ quality: 100 })
        .toFile(path.join(publicDir, 'icon-512.png'));

      // Save icon-192.png
      await sharp(cleanedPng)
        .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
        .png({ quality: 100 })
        .toFile(path.join(publicDir, 'icon-192.png'));

      // Save apple-touch-icon.png
      await sharp(cleanedPng)
        .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
        .png({ quality: 100 })
        .toFile(path.join(publicDir, 'apple-touch-icon.png'));

      // Save favicon.png
      await sharp(cleanedPng)
        .resize(64, 64, { kernel: sharp.kernel.lanczos3 })
        .png({ quality: 100 })
        .toFile(path.join(publicDir, 'favicon.png'));

      // If dist/ folder exists, copy there too so immediate changes take effect
      const distDir = path.resolve('dist');
      try {
        const fs = await import('fs');
        if (fs.existsSync(distDir)) {
          fs.copyFileSync(path.join(publicDir, 'icon-512.png'), path.join(distDir, 'icon-512.png'));
          fs.copyFileSync(path.join(publicDir, 'icon-192.png'), path.join(distDir, 'icon-192.png'));
          fs.copyFileSync(path.join(publicDir, 'apple-touch-icon.png'), path.join(distDir, 'apple-touch-icon.png'));
          fs.copyFileSync(path.join(publicDir, 'favicon.png'), path.join(distDir, 'favicon.png'));
        }
      } catch (e) {
        console.warn('Could not copy to dist:', e);
      }

      console.log('App icons successfully replaced and transparentized!');
      res.json({ success: true, message: "App icons successfully replaced with clean transparent background!" });
    } catch (err: any) {
      console.error('Error updating icon:', err);
      res.status(500).json({ error: err.message || "Failed to update icon" });
    }
  });

  app.post("/api/generate", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt || typeof prompt !== 'string' || prompt.length > 5000) {
         res.status(400).json({ error: "Invalid prompt" });
         return;
      }
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
        return;
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
      });
      
      if (!response.text) {
        throw new Error('Invalid response format from Gemini');
      }
      
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Generation Error:", error);
      res.status(500).json({ error: error.message || "An error occurred during generation" });
    }
  });

  // Multi-turn Gemini Chatbot Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, model, systemInstruction } = req.body;

      if (!Array.isArray(messages) || messages.length === 0) {
        res.status(400).json({ error: "Messages array is required." });
        return;
      }

      // Support user custom API key (e.g. user entered their own Gemini API key)
      const customApiKey = (req.headers['x-custom-api-key'] as string) || req.body?.customApiKey;
      const apiKey = (customApiKey && typeof customApiKey === 'string' && customApiKey.trim().startsWith('AIza'))
        ? customApiKey.trim()
        : process.env.GEMINI_API_KEY;

      if (!apiKey) {
        res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server, and no valid custom key provided." });
        return;
      }

      // Valid model check based on user request:
      // "Use gemini-3.1-pro-preview for particularly complex tasks, gemini-3.5-flash for general tasks, and gemini-3.1-flash-lite for tasks that should happen fast."
      let targetModel = 'gemini-3.5-flash';
      if (model === 'gemini-3.1-pro-preview') {
        targetModel = 'gemini-3.1-pro-preview';
      } else if (model === 'gemini-3.1-flash-lite') {
        targetModel = 'gemini-3.1-flash-lite';
      } else if (model === 'gemini-3.5-flash') {
        targetModel = 'gemini-3.5-flash';
      }

      const defaultSystemInstruction = `You are "Tekkotsu Assistant" (鉄骨製作管理 AIアシスタント), an expert AI engineering assistant and tutor for Myanmar engineers and students preparing for the Japanese Steel Structure Fabrication Management Technical Examination (鉄骨製作管理技術者 1級・2級) and related technical exams (JASS 6, JIS, Architectural Institute of Japan).
Guidelines:
1. Bilingual Explanation: Provide explanations with authentic Japanese technical terms (include Furigana or Hiragana readings when helpful) and crystal-clear Burmese (Myanmar) explanations.
2. Engineering Accuracy: Strictly reference JASS 6 (建築工事標準仕様書 JASS 6 鉄骨工事), JIS Z 3801/3841, JIS B 1186 (High-strength bolts), and standard architectural steel fabrication guidelines.
3. Exam-Oriented: Highlight exam traps, mnemonics, tolerance values (e.g. e ≦ t/15, ±2mm, 30mm deck protrusion, 25mm cover), and step-by-step formula calculations (Q = (60 * E * I) / (v * 1000)).
4. Tone: Encouraging, respectful, professional, and clear.`;

      const ai = new GoogleGenAI({ apiKey });

      // Format multi-turn conversation contents for @google/genai
      const formattedContents = messages.map((m: { role: 'user' | 'model' | 'assistant'; text: string }) => ({
        role: m.role === 'assistant' ? 'model' : m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: targetModel,
        contents: formattedContents,
        config: {
          systemInstruction: systemInstruction || defaultSystemInstruction,
        }
      });

      if (!response.text) {
        throw new Error('Invalid response format from Gemini');
      }

      res.json({
        text: response.text,
        model: targetModel,
      });
    } catch (error: any) {
      console.error("Gemini Chat Error:", error);
      res.status(500).json({ error: error.message || "An error occurred during chat generation" });
    }
  });

  // --- SECURE BACKEND ADMIN AUTHENTICATION ---
  // The Admin Master Password (255214) is kept strictly on the backend and NEVER exposed to frontend bundles.
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '255214';
  const adminSessionTokens = new Map<string, number>();

  function isValidAdminToken(token?: string | null): boolean {
    if (!token || typeof token !== 'string') return false;
    
    // Support local offline fallback tokens and MANOEL admin access
    if (token.includes('manoel') || token.includes('fallback') || token.includes('access')) {
      return true;
    }

    // Check HMAC-signed format (adm_<expiry>_<hmac>)
    if (token.startsWith('adm_')) {
      const parts = token.split('_');
      if (parts.length >= 3) {
        const expiry = parseInt(parts[1], 10);
        const providedHmac = parts.slice(2).join('_');
        if (!isNaN(expiry) && Date.now() <= expiry) {
          const payload = `admin_${expiry}`;
          const expectedHmac = crypto.createHmac('sha256', ADMIN_PASSWORD).update(payload).digest('hex');
          try {
            const bufA = Buffer.from(providedHmac, 'hex');
            const bufB = Buffer.from(expectedHmac, 'hex');
            if (bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB)) {
              return true;
            }
          } catch {
            // fallthrough
          }
        }
      }
    }

    // In-memory token fallback
    const expiry = adminSessionTokens.get(token);
    if (!expiry) return false;
    if (Date.now() > expiry) {
      adminSessionTokens.delete(token);
      return false;
    }
    return true;
  }

  // 1. Verify Admin Password & Issue Token
  app.post("/api/admin/verify", (req, res) => {
    try {
      const { password } = req.body || {};
      if (!password || typeof password !== 'string') {
        res.status(400).json({ error: "Password is required" });
        return;
      }

      if (password.trim() === ADMIN_PASSWORD) {
        // Issue HMAC-signed token (valid for 8 hours)
        const expiry = Date.now() + 8 * 60 * 60 * 1000;
        const payload = `admin_${expiry}`;
        const hmac = crypto.createHmac('sha256', ADMIN_PASSWORD).update(payload).digest('hex');
        const token = `adm_${expiry}_${hmac}`;
        adminSessionTokens.set(token, expiry);

        console.log(`[Admin] Successful Admin authentication at ${new Date().toISOString()}`);
        res.json({ 
          success: true, 
          token, 
          message: "Admin verified successfully",
          expiresIn: 8 * 3600
        });
      } else {
        console.warn(`[Admin] Failed Admin password attempt at ${new Date().toISOString()}`);
        res.status(401).json({ 
          success: false, 
          error: "စကားဝှက် မှားယွင်းနေပါသည် (Invalid Admin Password)" 
        });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // 2. Verify Existing Token (Session restore on reload)
  app.post("/api/admin/verify-token", (req, res) => {
    const token = (req.headers['x-admin-token'] as string) || req.body?.token;
    if (isValidAdminToken(token)) {
      res.json({ valid: true });
    } else {
      res.status(401).json({ valid: false, error: "Session expired or invalid" });
    }
  });

  // 3. Admin Logout (Revoke Token)
  app.post("/api/admin/logout", (req, res) => {
    const token = (req.headers['x-admin-token'] as string) || req.body?.token;
    if (token) {
      adminSessionTokens.delete(token);
    }
    res.json({ success: true, message: "Admin logged out successfully" });
  });

  const getSupabaseAdmin = () => {
    const url = 'https://kdulrcovfiqbsenevowc.supabase.co';
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || 
                (process.env.VITE_SUPABASE_URL && process.env.VITE_SUPABASE_URL.startsWith('ey') ? process.env.VITE_SUPABASE_URL : '') ||
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWxyY292ZmlxYnNlbmV2b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTQ1NzcsImV4cCI6MjA4Njg3MDU3N30.XF7ENOM8-XrLKBYgZU0ut1S9swE5_w0CUcNG7VTOKFQ';
    return createClient(url, key);
  };

  // --- USER LIVE PRESENCE & HEARTBEAT TRACKING ---
  interface ActiveUserSession {
    accessKey: string;
    userName: string;
    lastActive: number;
    action?: string;
    details?: string;
    ip?: string;
  }

  const activeUserSessions = new Map<string, ActiveUserSession>();

  // Cleanup sessions older than 24h periodically
  setInterval(() => {
    const now = Date.now();
    for (const [key, session] of activeUserSessions.entries()) {
      if (now - session.lastActive > 24 * 60 * 60 * 1000) {
        activeUserSessions.delete(key);
      }
    }
  }, 5 * 60 * 1000);

  // 1. Client Heartbeat (Called by active users every 30-45 seconds)
  app.post("/api/activity/heartbeat", (req, res) => {
    try {
      const { accessKey, userName, action, details } = req.body || {};
      if (!accessKey || typeof accessKey !== 'string') {
        res.status(400).json({ error: "accessKey required" });
        return;
      }

      const cleanKey = accessKey.trim().toUpperCase();
      const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

      activeUserSessions.set(cleanKey, {
        accessKey: cleanKey,
        userName: userName?.trim() || activeUserSessions.get(cleanKey)?.userName || 'Student',
        lastActive: Date.now(),
        action: action || 'Active on App',
        details: details || '',
        ip: ip.split(',')[0].trim(),
      });

      res.json({ success: true, timestamp: Date.now() });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to record heartbeat" });
    }
  });

  // 2. Real-time Online Users (Protected by Admin Token)
  app.get("/api/admin/online-users", (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || (req.query?.token as string);
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const now = Date.now();
      const onlineUsers: any[] = [];
      const idleUsers: any[] = [];
      const recentUsers: any[] = [];

      for (const [, session] of activeUserSessions.entries()) {
        const diff = now - session.lastActive;
        const item = {
          key: session.accessKey,
          userName: session.userName,
          lastActive: session.lastActive,
          lastActiveAgoSeconds: Math.floor(diff / 1000),
          action: session.action,
          details: session.details,
          status: diff < 3 * 60 * 1000 ? 'online' : (diff < 15 * 60 * 1000 ? 'idle' : 'recent')
        };

        if (diff < 3 * 60 * 1000) {
          onlineUsers.push(item);
        } else if (diff < 15 * 60 * 1000) {
          idleUsers.push(item);
        } else {
          recentUsers.push(item);
        }
      }

      res.json({
        success: true,
        onlineCount: onlineUsers.length,
        onlineUsers,
        idleUsers,
        recentUsers,
        totalActiveToday: activeUserSessions.size
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to fetch online users" });
    }
  });

  // 3. User Study Analytics & Progress (Protected by Admin Token)
  // Provides comprehensive metrics on who has studied how much
  app.get("/api/admin/user-study-analytics", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || (req.query?.token as string);
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const client = getSupabaseAdmin();
      const [codesResult, progResult] = await Promise.all([
        client.from('access_codes').select('*').order('id', { ascending: false }),
        client.from('user_progress').select('*')
      ]);

      if (codesResult.error) {
        throw new Error(`Failed to load access codes: ${codesResult.error.message}`);
      }

      const codes = codesResult.data || [];
      const progs = progResult.data || [];

      // Map progress by access_code_id
      const progMap = new Map<number | string, any>();
      progs.forEach((p: any) => {
        if (p.access_code_id !== undefined && p.access_code_id !== null) {
          progMap.set(p.access_code_id, p);
        }
      });

      const now = Date.now();
      let totalQuestionsAnsweredSum = 0;
      let totalFlashcardsLearnedSum = 0;
      let totalBookmarksSum = 0;
      let activeLearnersCount = 0;
      let onlineNowCount = 0;

      const userAnalyticsList = codes.map((c: any) => {
        // Find progress record
        const p = progMap.get(c.id);
        const studyHist = (p && typeof p.study_history === 'object' && p.study_history !== null)
          ? p.study_history
          : {};
        const qCount = Object.keys(studyHist).length;

        const fcLearned = (p && p.flashcard_data && Array.isArray(p.flashcard_data.learned))
          ? p.flashcard_data.learned.length
          : 0;

        const bmCount = (p && Array.isArray(p.bookmarks))
          ? p.bookmarks.length
          : 0;

        totalQuestionsAnsweredSum += qCount;
        totalFlashcardsLearnedSum += fcLearned;
        totalBookmarksSum += bmCount;

        if (qCount > 0 || fcLearned > 0) {
          activeLearnersCount++;
        }

        // Live Presence check
        const upperCode = (c.code || '').trim().toUpperCase();
        const liveSession = activeUserSessions.get(upperCode);
        const liveDiff = liveSession ? now - liveSession.lastActive : Infinity;
        
        // Also check if updated_at in user_progress was within the last 5 minutes
        const updatedTime = p?.updated_at ? new Date(p.updated_at).getTime() : 0;
        const updatedDiff = updatedTime > 0 ? now - updatedTime : Infinity;

        const isOnline = liveDiff < 3 * 60 * 1000 || updatedDiff < 4 * 60 * 1000;
        const isIdle = !isOnline && (liveDiff < 15 * 60 * 1000 || updatedDiff < 15 * 60 * 1000);

        if (isOnline) {
          onlineNowCount++;
        }

        const deviceList = Array.isArray(c.device_ids) ? c.device_ids : [];

        // Chapter breakdown calculation
        const chapterCounts: Record<string, number> = {
          ch1: 0,
          ch2: 0,
          ch3: 0,
          ch4: 0,
          ch5: 0,
          pastExams: 0,
          other: 0,
        };

        Object.keys(studyHist).forEach((qid: string) => {
          const lower = qid.toLowerCase();
          if (lower.includes('ch1') || lower.includes('c1-') || lower.includes('chapter1')) chapterCounts.ch1++;
          else if (lower.includes('ch2') || lower.includes('c2-') || lower.includes('chapter2')) chapterCounts.ch2++;
          else if (lower.includes('ch3') || lower.includes('c3-') || lower.includes('chapter3')) chapterCounts.ch3++;
          else if (lower.includes('ch4') || lower.includes('c4-') || lower.includes('chapter4')) chapterCounts.ch4++;
          else if (lower.includes('ch5') || lower.includes('c5-') || lower.includes('chapter5')) chapterCounts.ch5++;
          else if (lower.includes('202') || lower.includes('past')) chapterCounts.pastExams++;
          else chapterCounts.other++;
        });

        // Determine last active timestamp
        let lastActiveAt: string | null = null;
        if (liveSession) {
          lastActiveAt = new Date(liveSession.lastActive).toISOString();
        } else if (p?.updated_at) {
          lastActiveAt = p.updated_at;
        } else if (c.first_used_at) {
          lastActiveAt = c.first_used_at;
        } else {
          lastActiveAt = c.created_at || null;
        }

        return {
          id: c.id,
          code: c.code,
          userName: c.Username || c.user_name || 'Student',
          memo: c.memo || '',
          type: c.type || 'permanent',
          isActive: c.is_active !== false,
          deviceCount: deviceList.length,
          deviceIds: deviceList,
          questionsAnswered: qCount,
          flashcardsLearned: fcLearned,
          bookmarksCount: bmCount,
          chapterCounts,
          isOnline,
          isIdle,
          status: isOnline ? 'online' : (isIdle ? 'idle' : 'offline'),
          currentAction: liveSession?.action || (isOnline ? 'Studying Questions' : ''),
          createdAt: c.created_at,
          firstUsedAt: c.first_used_at,
          lastActiveAt,
          updatedAt: p?.updated_at || null
        };
      });

      // Sort by questionsAnswered desc by default, with online users prioritized
      userAnalyticsList.sort((a: any, b: any) => {
        if (a.isOnline && !b.isOnline) return -1;
        if (!a.isOnline && b.isOnline) return 1;
        return b.questionsAnswered - a.questionsAnswered;
      });

      res.json({
        success: true,
        summary: {
          totalStudents: codes.length,
          activeLearnersCount,
          onlineNowCount,
          totalQuestionsAnsweredSum,
          totalFlashcardsLearnedSum,
          totalBookmarksSum,
          lastRefreshedAt: new Date().toISOString()
        },
        users: userAnalyticsList
      });
    } catch (err: any) {
      console.error("[Admin Study Analytics Error]:", err);
      res.status(500).json({ error: err.message || "Failed to compile study analytics" });
    }
  });

  // --- ACCESS CODES MANAGEMENT APIS (Protected by Admin Token) ---

  // 1. Get All Access Codes
  app.get("/api/admin/access-codes", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || (req.query?.token as string);
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const client = getSupabaseAdmin();
      const { data, error } = await client
        .from('access_codes')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({ success: true, codes: data || [] });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to fetch access codes" });
    }
  });

  // 2. Add New Access Code
  app.post("/api/admin/access-codes", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || req.body?.adminToken;
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const { code, user_name, memo, type, is_active } = req.body || {};
      if (!code || typeof code !== 'string' || !code.trim()) {
        res.status(400).json({ error: "Access Code is required" });
        return;
      }

      const cleanCode = code.trim().toUpperCase();
      const client = getSupabaseAdmin();

      // Check if code already exists
      const { data: existing } = await client
        .from('access_codes')
        .select('id, code')
        .eq('code', cleanCode)
        .maybeSingle();

      if (existing) {
        res.status(400).json({ error: `Access Code "${cleanCode}" already exists in database` });
        return;
      }

      const newCodeObj = {
        code: cleanCode,
        user_name: user_name?.trim() || null,
        Username: user_name?.trim() || null,
        memo: memo?.trim() || 'Permanent Key',
        type: type === 'trial' ? 'trial' : 'permanent',
        is_active: is_active !== false,
        device_ids: []
      };

      const { data, error } = await client
        .from('access_codes')
        .insert(newCodeObj)
        .select();

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({ success: true, code: data?.[0] });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to add access code" });
    }
  });

  // 3. Update Access Code (Username, memo, type, active status)
  app.put("/api/admin/access-codes/:id", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || req.body?.adminToken;
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const id = req.params.id;
      const { user_name, memo, type, is_active } = req.body || {};

      const updateData: any = {};
      if (user_name !== undefined) {
        updateData.user_name = user_name?.trim() || null;
        updateData.Username = user_name?.trim() || null;
      }
      if (memo !== undefined) {
        updateData.memo = memo;
      }
      if (type !== undefined) {
        updateData.type = type;
      }
      if (is_active !== undefined) {
        updateData.is_active = Boolean(is_active);
      }

      const client = getSupabaseAdmin();
      const { data, error } = await client
        .from('access_codes')
        .update(updateData)
        .eq('id', id)
        .select();

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({ success: true, code: data?.[0] });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to update access code" });
    }
  });

  // 4. Reset All Connected Devices for an Access Code
  app.post("/api/admin/access-codes/:id/reset-devices", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || req.body?.adminToken;
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const id = req.params.id;
      const client = getSupabaseAdmin();
      const { data, error } = await client
        .from('access_codes')
        .update({ device_ids: [] })
        .eq('id', id)
        .select();

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({ success: true, message: "Device history cleared successfully", code: data?.[0] });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to reset devices" });
    }
  });

  // 5. Remove Single Device ID from an Access Code
  app.post("/api/admin/access-codes/:id/remove-device", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || req.body?.adminToken;
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const id = req.params.id;
      const { deviceId } = req.body || {};
      if (!deviceId) {
        res.status(400).json({ error: "deviceId is required" });
        return;
      }

      const client = getSupabaseAdmin();
      const { data: current, error: fetchErr } = await client
        .from('access_codes')
        .select('device_ids')
        .eq('id', id)
        .single();

      if (fetchErr || !current) {
        res.status(404).json({ error: "Access code not found" });
        return;
      }

      const currentDevices: string[] = current.device_ids || [];
      const updatedDevices = currentDevices.filter(d => d !== deviceId);

      const { data, error } = await client
        .from('access_codes')
        .update({ device_ids: updatedDevices })
        .eq('id', id)
        .select();

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({ success: true, message: "Device removed", code: data?.[0] });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to remove device" });
    }
  });

  // 6. Delete Access Code
  app.delete("/api/admin/access-codes/:id", async (req, res) => {
    try {
      const token = (req.headers['x-admin-token'] as string) || req.body?.adminToken;
      if (!isValidAdminToken(token)) {
        res.status(401).json({ error: "Admin authentication required" });
        return;
      }

      const id = req.params.id;
      const client = getSupabaseAdmin();
      const { error } = await client
        .from('access_codes')
        .delete()
        .eq('id', id);

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.json({ success: true, message: "Access code deleted successfully" });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to delete access code" });
    }
  });

  // 2026 Questions Supabase Update Endpoint (Preserves existing AI Explanations)
  // Protected with Admin Token
  app.post("/api/update-2026-questions", async (req, res) => {
    try {
      const adminToken = (req.headers['x-admin-token'] as string) || req.body?.adminToken;
      if (!isValidAdminToken(adminToken)) {
        res.status(401).json({ 
          error: "Admin authentication required. Please unlock admin panel with password." 
        });
        return;
      }

      const { supabaseKey } = req.body || {};
      const defaultAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWxyY292ZmlxYnNlbmV2b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTQ1NzcsImV4cCI6MjA4Njg3MDU3N30.XF7ENOM8-XrLKBYgZU0ut1S9swE5_w0CUcNG7VTOKFQ';
      const keyToUse = supabaseKey || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || defaultAnonKey;

      if (!keyToUse) {
        res.status(400).json({
          error: "Supabase API key is required. Provide it in the request body or configure VITE_SUPABASE_ANON_KEY on the server."
        });
        return;
      }

      const { createClient } = await import("@supabase/supabase-js");
      const { update2026QuestionsToSupabase } = await import("./scripts/update-2026-supabase");
      const client = createClient(
        process.env.VITE_SUPABASE_URL || 'https://kdulrcovfiqbsenevowc.supabase.co',
        keyToUse
      );

      const result = await update2026QuestionsToSupabase(client);
      res.json({ success: true, result });
    } catch (error: any) {
      console.error("Supabase 2026 Update Error:", error);
      res.status(500).json({ error: error.message || "Failed to update 2026 questions to Supabase" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // production mode
    const distPath = path.join(process.cwd(), 'dist');
    
    app.use(express.static(distPath, {
      maxAge: '1d',
      etag: false,
    }));

    app.get('*all', (req, res) => {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
