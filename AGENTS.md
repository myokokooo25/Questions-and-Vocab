# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single web app: a Japanese "鉄骨製作管理技術者" (steel-frame production management engineer) exam-prep PWA. It is a React 19 + Vite frontend served by a small Express server (`server.ts`), which also proxies an AI "simpler explanation" endpoint (`/api/generate`) to the Gemini API. All exam questions, kanji, and vocabulary content are bundled locally under `data/` and `vocabulary-flashcards/data/`.

Standard commands live in `package.json` scripts — use those rather than duplicating them:
- `npm run dev` / `npm start` — dev server (`tsx server.ts`): Express + Vite middleware on `http://localhost:3000` (binds `0.0.0.0`). This is the command to run for development (there is no separate frontend/backend split).
- `npm run lint` — type-check only (`tsc --noEmit`).
- `npm run build` — production build (`vite build`). `npm run preview` serves the built output.

Non-obvious caveats:
- The update script only runs `npm install`. Just run `npm run dev` to start the app.
- The server now loads `.env` via `dotenv` at the top of `server.ts`, so env vars in a gitignored `.env` are picked up on `npm run dev`. Secrets may also be injected as real environment variables; either source works. Provide `GEMINI_API_KEY` (for the optional "AI SIMPLER EXPLANATION" feature) and `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` (for real login + DB-synced questions) in `.env`.
- Supabase is optional at runtime. `lib/supabase.ts` falls back to a hardcoded project URL and a dummy anon key when the env vars are unset. Data fetches (`components/Dashboard.tsx`) silently fall back to the bundled local `data/` content when Supabase is unavailable, so studying/quizzing works fully offline. When `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are set, the app pulls questions from the `questions` table and logs in against the `access_codes` table.
- Login IS a hard gate and requires a valid Supabase access code (queried from the `access_codes` table, which has RLS-readable rows). There are no offline fallback codes (`FALLBACK_KEYS` is empty). When the Supabase env vars are set you can log in with any active `access_codes.code`. Without Supabase credentials, reach the study UI by seeding the app's own session in the browser: `localStorage.setItem('auth_loggedInUser_key', JSON.stringify({accessKey:'DEMO', userName:'Cloud Agent', type:'permanent', loggedInAt:new Date().toISOString()}))` then reload. The `loggedInAt` field is required or the app force-redirects to an external domain.
- Quiz mode ("QUIZ" toggle) shows "No Learnt Questions" until you first answer questions in Study/Bank mode; that empty state is expected, not a bug.
- The repo root holds many one-off data/authoring scripts (`check_*.ts`, `seed_*.ts`, `translate_*.js`, `create_part*.py`, `patch_*.ts`, `gen_vocab*.cjs`, etc.). These are ad-hoc tooling for content generation/DB seeding, not part of the app runtime; ignore them for normal dev.
