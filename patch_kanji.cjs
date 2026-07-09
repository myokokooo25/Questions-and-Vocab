const fs = require('fs');

// Patch Dashboard.tsx
let dbCode = fs.readFileSync('./components/Dashboard.tsx', 'utf8');
dbCode = dbCode.replace(
  `  const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);`,
  `  const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);`
);
dbCode = dbCode.replace(
  `  const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {`,
  `  const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>, questionId?: string) => {
    setSelectedQuestionId(questionId || null);`
);
dbCode = dbCode.replace(
  `            kanjiChar={selectedKanjiChar || undefined}`,
  `            kanjiChar={selectedKanjiChar || undefined}
            questionId={selectedQuestionId || undefined}`
);
fs.writeFileSync('./components/Dashboard.tsx', dbCode);

// Patch Card.tsx
let cardCode = fs.readFileSync('./components/Card.tsx', 'utf8');
cardCode = cardCode.replace(
  `  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;`,
  `  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>, questionId?: string) => void;`
);
// Replace all <JapaneseText ... onKanjiClick={onKanjiClick} /> with <JapaneseText ... onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
cardCode = cardCode.replace(/onKanjiClick=\{onKanjiClick\}/g, `onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)}`);
fs.writeFileSync('./components/Card.tsx', cardCode);

// Patch ChapterQuiz.tsx
let quizCode = fs.readFileSync('./components/ChapterQuiz.tsx', 'utf8');
quizCode = quizCode.replace(
  `  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;`,
  `  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>, questionId?: string) => void;`
);
quizCode = quizCode.replace(/onKanjiClick=\{onKanjiClick\}/g, `onKanjiClick={(k, e) => onKanjiClick(k, e, currentQuestion.id)}`);
fs.writeFileSync('./components/ChapterQuiz.tsx', quizCode);

