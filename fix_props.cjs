const fs = require('fs');

let tooltipCode = fs.readFileSync('./components/KanjiTooltip.tsx', 'utf8');

tooltipCode = tooltipCode.replace(
  `const KanjiTooltip: React.FC<KanjiTooltipProps> = ({ kanjiData, kanjiChar, position, onClose }) => {`,
  `const KanjiTooltip: React.FC<KanjiTooltipProps> = ({ kanjiData, kanjiChar, questionId, position, onClose }) => {`
);

tooltipCode = tooltipCode.replace(
  `  // Search for vocabulary words containing this Kanji
  // Search for vocabulary words containing this Kanji`,
  `  // Search for vocabulary words containing this Kanji`
);

fs.writeFileSync('./components/KanjiTooltip.tsx', tooltipCode);
