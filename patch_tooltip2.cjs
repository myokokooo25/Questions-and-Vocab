const fs = require('fs');
let code = fs.readFileSync('./vocabulary-flashcards/App.tsx', 'utf8');

code = code.replace(
`    const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);`,
`    const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);
    const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);`
);

code = code.replace(
`    const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {
        const data = kanjiDictionary[kanji];
        if (data) {
          // Calculate position
          const rect = event.currentTarget.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          
          setTooltipPos({
            top: rect.bottom + scrollTop,
            left: rect.left + scrollLeft
          });
          setSelectedKanji(data);
        }
    };`,
`    const handleKanjiClick = (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => {
        const data = kanjiDictionary[kanji];
        // Calculate position
        const rect = event.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        setTooltipPos({
          top: rect.bottom + scrollTop,
          left: rect.left + scrollLeft
        });
        setSelectedKanji(data || null);
        setSelectedKanjiChar(kanji);
    };`
);

code = code.replace(
`            {selectedKanji && (
                <KanjiTooltip
                    kanjiData={selectedKanji}
                    position={tooltipPos}
                    onClose={() => setSelectedKanji(null)}
                />
            )}`,
`            {(selectedKanji || selectedKanjiChar) && (
                <KanjiTooltip
                    kanjiData={selectedKanji}
                    kanjiChar={selectedKanjiChar || undefined}
                    position={tooltipPos}
                    onClose={() => { setSelectedKanji(null); setSelectedKanjiChar(null); }}
                />
            )}`
);

fs.writeFileSync('./vocabulary-flashcards/App.tsx', code);
