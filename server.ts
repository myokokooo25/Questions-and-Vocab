import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import cors from "cors";

async function startServer() {
  const app = express();
  const PORT = 3000; // Hardcoded to 3000 as per AI Studio rules

  app.use(express.json());
  app.use(cors());

  // API routes FIRST
  app.post("/api/generate", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
         res.status(400).json({ error: "No prompt provided" });
         return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview', // upgraded model, or the one requested
        contents: prompt,
      });

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
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
