const fs = require('fs');
let code = fs.readFileSync('./components/Dashboard.tsx', 'utf8');
code = code.replace(
`       {selectedKanji && (
          <KanjiTooltip
            kanjiData={selectedKanji}
            position={tooltipPos}
            onClose={() => setSelectedKanji(null)}
          />
        )}`,
`       {(selectedKanji || selectedKanjiChar) && (
          <KanjiTooltip
            kanjiData={selectedKanji}
            kanjiChar={selectedKanjiChar || undefined}
            position={tooltipPos}
            onClose={() => { setSelectedKanji(null); setSelectedKanjiChar(null); }}
          />
        )}`
);
fs.writeFileSync('./components/Dashboard.tsx', code);
