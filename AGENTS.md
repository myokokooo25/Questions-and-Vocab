# AGENTS.md - Japanese Structural Engineering Exam & Flashcard App

This guide provides complete instructions and architecture documentation for AI coding agents (such as Google AI Studio, Claude, Cursor, ChatGPT) to develop, maintain, and extend this web application.

---

## 1. Project Overview & Objective

- **Application Name**: Japanese Structural Engineering Exam Study App (鉄骨製作管理技術者 試験対策 & Flashcards)
- **Target Audience**: Myanmar engineers and students preparing for the Japanese Steel Structure Fabrication Management Technical Examination (鉄骨製作管理技術者 1級・2級) and related technical exams.
- **Core Value**:
  - Bilingual learning (Japanese with Furigana `<ruby>` + Myanmar translation).
  - Past examination questions (2021–2025) and Textbook Chapters (Chapters 1 to 5, Level 1 & Level 2).
  - Flashcard memorization mode, interactive quiz testing mode, and search-ready Answer Key viewer.
  - Built-in Japanese-Myanmar Technical Dictionary.
  - Server-side Gemini AI explanations generator for detailed question breakdown.
  - Multi-theme neumorphic interface (`Light`, `Dark`, `Gold`).

---

## 2. Tech Stack & Environment

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 19 + TypeScript | Component-based UI with strict type safety |
| **Bundler** | Vite 6 + `@vitejs/plugin-react` | Ultra-fast HMR and build pipeline |
| **Styling** | Tailwind CSS + Custom Neumorphic CSS | Tactile neumorphic design (`shadow-neumorphic-outset`, `shadow-neumorphic-inset`) |
| **Icons** | `@heroicons/react` / `lucide-react` | Clean vector UI icons |
| **Backend Server** | Express 5 + `tsx` / `esbuild` | Secure API gateway, Gemini API proxy, Vite middleware integration |
| **AI Integration** | `@google/genai` (Gemini API) | Generates in-depth bilingual explanations for technical questions |
| **Database** | Supabase (`@supabase/supabase-js`) | Cloud sync for question updates, user progress, and custom AI explanations |
| **PWA** | `vite-plugin-pwa` | Installable offline-capable Progressive Web App |

---

## 3. Directory & File Structure

```
/
├── App.tsx                    # Root application component & routing/view coordinator
├── index.html                 # HTML entry point, theme color definitions, and Neumorphic CSS
├── index.tsx                  # React DOM mount point
├── server.ts                  # Express server entry point (port 3000, Gemini API proxy, Vite dev server)
├── types.ts                   # Global TypeScript definitions
├── metadata.json              # Platform metadata & permissions
├── components/
│   ├── Dashboard.tsx          # Main navigation hub (category selector, mode switcher, statistics)
│   ├── Card.tsx               # Flashcard component with 3D flip, audio, furigana toggle, and options
│   ├── ChapterQuiz.tsx        # Timed quiz practice engine with immediate feedback
│   ├── QuizSummary.tsx        # Post-quiz score summary, accuracy calculation, and answer review
│   ├── AnswerKeyView.tsx      # Comprehensive list of questions with answers and instant search
│   ├── TechnicalDictionary.tsx# Searchable Japanese-Myanmar engineering dictionary
│   ├── WelcomeScreen.tsx      # User greeting and study goal selection
│   ├── Login.tsx              # Supabase user authentication modal
│   ├── JapaneseText.tsx       # Helper to render Japanese Furigana ruby annotations
│   ├── KanjiTooltip.tsx       # Kanji breakdown and vocabulary tooltip
│   ├── InstallPrompt.tsx      # PWA installation banner
│   └── ErrorBoundary.tsx      # Application error barrier
├── contexts/
│   ├── AuthContext.tsx        # Supabase auth state provider
│   └── ThemeContext.tsx       # Theme switcher (`light`, `dark`, `gold`) and Font Size controller
├── data/
│   ├── chapter1.ts ... chapter5.ts         # Textbook chapters categorized questions
│   ├── chapter*-2026-level2-*.ts           # 2026 Level 2 revised questions
│   ├── 2021-old-question.ts ... 2025-*.ts  # Past exam questions
│   ├── content.ts                          # Chapter master index aggregator
│   ├── kanji.ts                            # Kanji dictionary database
│   └── vocab/                              # Technical vocabulary sets
└── lib/
    ├── supabase.ts            # Supabase client initialization
    └── syncData.ts            # Data migration & synchronization utilities
```

---

## 4. Data Models & TypeScript Schemas

All questions must adhere to the standardized schema in `types.ts`:

```typescript
export interface Option {
  id: number;
  textJP: string; // Japanese with optional <ruby>漢字<rt>かんじ</rt></ruby> tags
  textMY: string; // Myanmar translation
}

export interface QuestionExplanation {
  reasonJP?: string;     // Japanese rationale
  reasonMY?: string;     // Myanmar rationale explaining why the answer is correct/incorrect
  memoryTipMY?: string;  // High-yield memory tip in Myanmar
}

export interface Question {
  id: string | number;
  questionJP: string;
  questionMY: string;
  options: Option[];
  correctOptionId: number;   // 1-based index (e.g. 1, 2, 3, 4, 5)
  explanation?: QuestionExplanation;
  aiExplanation?: string;
  userNote?: string;
  tags?: string[];
}
```

---

## 5. Theme System & Design Guidelines

### Available Themes
1. **Light Mode (`html.light`)**: Soft neutral slate/gray neumorphic background (`#e0e5ec`).
2. **Dark Mode (`html.dark`)**: High-contrast, eye-safe slate navy dark theme (`#151a23` soothing dark canvas, crisp luminous typography with >6:1 contrast ratio, high-visibility cyan `#38bdf8` Furigana `<rt>`, and subtle 1px border outlines on cards).
3. **Gold Mode (`html.gold`)**: Premium luxury dark & gold theme (`#0a0a0a` background, `#d9b340` gold accents, `#fbbf24` ruby text).
4. **Minimalist Black & White (`html.mono`)**: Pure high-contrast black & white minimalist theme. Strictly flat 1px crisp borders, zero blurry drop-shadows or shade, zero glassmorphism blur, clean readable typography.

### Styling Rules
- Use Tailwind utility classes with custom shadow tokens:
  - `shadow-neumorphic-outset`: Elevated tactile button or card.
  - `shadow-neumorphic-inset`: Pressed-in / input field state.
- **PC & Mobile Responsiveness**:
  - Always center large screen content using `w-full max-w-4xl lg:max-w-5xl mx-auto`.
  - Maintain touch target heights of at least 44px on mobile devices.
  - Do not alter or break Mobile/Tablet layouts when adjusting PC views.

---

## 6. Server & Gemini AI Integration

### Server Configuration (`server.ts`)
- The server runs on **port 3000** binding to `0.0.0.0`.
- Proxies requests to Google Gemini via `/api/generate`.
- In development, mounts Vite middleware; in production, serves static build from `dist/`.

### AI Prompting Strategy
When generating explanations for exam questions:
- Use model `gemini-3.1-pro-preview` or `gemini-2.5-flash`.
- Format responses in clean Markdown with clear Japanese engineering terms and precise Myanmar technical translation.

---

## 7. Development & Deployment Workflow

### Essential Commands
```bash
# Start local development server (Frontend + Backend on Port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Build full-stack application for production
npm run build

# Start production server
npm run start
```

### Build Details
- `npm run build` runs `vite build` followed by `esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs`.
- This bundles the Express backend into `dist/server.cjs` while keeping all node packages external.

---

## 8. Rules for AI Agents Working on this Project

1. **Bilingual Consistency**: Ensure all question content preserves both Japanese technical accuracy and clear Myanmar wording.
2. **Furigana Tags**: Japanese technical Kanji should ideally have `<ruby>漢字<rt>かんじ</rt></ruby>` annotations for pronunciation.
3. **Never hardcode secrets**: Access `GEMINI_API_KEY` on the server-side via `process.env.GEMINI_API_KEY`.
4. **Preserve User Settings**: Maintain user preferences stored in `localStorage` (`app_theme`, `app_fontSize`, `user_answers`, `bookmarks`).
5. **No Regressions on Mobile/Tablet**: Test responsive breakpoints when tweaking desktop PC styles.
