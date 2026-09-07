import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import cors from "cors";

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

  // 2026 Questions Supabase Update Endpoint (Preserves existing AI Explanations)
  app.post("/api/update-2026-questions", async (req, res) => {
    try {
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
      server: { middlewareMode: true },
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

    app.get('*', (req, res) => {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
