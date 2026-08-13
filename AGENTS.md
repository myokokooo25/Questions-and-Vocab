# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single web app: a Japanese "鉄骨製作管理技術者" (steel-frame production management engineer) exam-prep PWA. It is a React 19 + Vite frontend served by a small Express server (`server.ts`), which also proxies an AI "simpler explanation" endpoint (`/api/generate`) to the Gemini API. All exam questions, kanji, and vocabulary content are bundled locally under `data/` and `vocabulary-flashcards/data/`.

Standard commands live in `package.json` scripts — use those rather than duplicating them:
- `npm run dev` / `npm start` — dev server (`tsx server.ts`): Express + Vite middleware on `http://localhost:3000` (binds `0.0.0.0`). This is the command to run for development (there is no separate frontend/backend split).
- `npm run lint` — type-check only (`tsc --noEmit`).
- `npm run build` — production build (`vite build`). `npm run preview` serves the built output.

Non-obvious caveats:
- The update script only runs `npm install`. Just run `npm run dev` to start the app.
- Environment variables are optional for core functionality. `.env.example` lists only `GEMINI_API_KEY` / `VITE_GEMINI_API_KEY`; the server logs `Missing required env vars: GEMINI_API_KEY` and still starts fine. `GEMINI_API_KEY` is only needed for the optional "AI SIMPLER EXPLANATION" feature.
- Supabase is optional at runtime too. `lib/supabase.ts` falls back to a hardcoded project URL and a dummy anon key when `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are unset. Data fetches (`components/Dashboard.tsx`) silently fall back to the bundled local `data/` content when Supabase is unavailable, so studying/quizzing works fully offline.
- Login IS a hard gate, and it requires a valid Supabase access code (queried from the `access_codes` table). There are no offline fallback codes (`FALLBACK_KEYS` is empty), so real login is impossible without real Supabase credentials + a valid code. To reach the study UI locally without credentials, seed the app's own session in the browser: `localStorage.setItem('auth_loggedInUser_key', JSON.stringify({accessKey:'DEMO', userName:'Cloud Agent', type:'permanent', loggedInAt:new Date().toISOString()}))` then reload. The `loggedInAt` field is required or the app force-redirects to an external domain.
- Quiz mode ("QUIZ" toggle) shows "No Learnt Questions" until you first answer questions in Study/Bank mode; that empty state is expected, not a bug.
- The repo root holds many one-off data/authoring scripts (`check_*.ts`, `seed_*.ts`, `translate_*.js`, `create_part*.py`, `patch_*.ts`, `gen_vocab*.cjs`, etc.). These are ad-hoc tooling for content generation/DB seeding, not part of the app runtime; ignore them for normal dev.
