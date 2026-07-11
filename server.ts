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

  app.use(express.json());

  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });

  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['https://questions-and-vocab-4aww.vercel.app', 'http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  }));

  // API routes FIRST
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
