const fs = require('fs');

let tooltipCode = fs.readFileSync('./components/KanjiTooltip.tsx', 'utf8');

tooltipCode = tooltipCode.replace(
  `import { vocabularyData } from '../vocabulary-flashcards/data/vocabulary';`,
  `import { vocabularyData } from '../vocabulary-flashcards/data/vocabulary';
import { vocabularyData as questionVocabData } from '../data/vocab';`
);

tooltipCode = tooltipCode.replace(
  `  kanjiChar?: string;
  position: { top: number; left: number };`,
  `  kanjiChar?: string;
  questionId?: string;
  position: { top: number; left: number };`
);

tooltipCode = tooltipCode.replace(
  `  const relatedWords = vocabularyData.filter(v => v.kanji.includes(character)).slice(0, 5); // Limit to 5`,
  `  // Search for vocabulary words containing this Kanji
  let relatedWords = vocabularyData.filter(v => v.kanji.includes(character));
  let specificWords: any[] = [];
  if (questionId && questionVocabData[questionId]) {
    specificWords = questionVocabData[questionId].filter(v => v.jp.includes(character));
  }
  
  // Format specific words to match the vocabularyData structure
  const formattedSpecificWords = specificWords.map(word => ({
    id: \`specific-\${word.jp}\`,
    kanji: word.jp,
    reading: word.reading || '',
    burmese: word.my,
    english: word.english || ''
  }));

  // Combine and deduplicate
  const seenKanji = new Set<string>();
  const combinedWords = [];
  
  for (const word of [...formattedSpecificWords, ...relatedWords]) {
    if (!seenKanji.has(word.kanji)) {
      seenKanji.add(word.kanji);
      combinedWords.push(word);
    }
  }
  
  relatedWords = combinedWords.slice(0, 5); // Limit to 5
`
);

fs.writeFileSync('./components/KanjiTooltip.tsx', tooltipCode);
