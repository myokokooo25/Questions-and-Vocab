# CLAUDE.md - Instructions for Claude Code & AI Coding Agents

See [AGENTS.md](./AGENTS.md) for full project architecture, schemas, and design guidelines.

## Quick Reference Commands
- **Dev Server**: `npm run dev` (Starts Express + Vite on port 3000)
- **Type Check / Lint**: `npm run lint` (`tsc --noEmit`)
- **Build**: `npm run build` (`vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs`)
- **Start Production**: `npm run start` (`node dist/server.cjs`)

## Key Architecture Points
- **Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS (Neumorphic) + Express + Google GenAI (Gemini) + Supabase.
- **Port**: 3000 (bind to `0.0.0.0`).
- **Themes**: `light`, `dark`, and `gold` (Neumorphic styling with custom inset/outset shadows).
- **Data**: All questions in `/data/` must have `questionJP`, `questionMY`, `options` array, `correctOptionId`, and `explanation`.
- **Furigana**: Use HTML `<ruby>漢字<rt>かんじ</rt></ruby>` tags for Japanese technical terms.
- **Safety**: Keep `GEMINI_API_KEY` on the server side (`server.ts`).
