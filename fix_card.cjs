const fs = require('fs');

let code = fs.readFileSync('components/Card.tsx', 'utf8');

code = code.replace(
  /\s*\}\s*<\/div>\s*\{language !== 'jp-only' && \(/,
  `
        <div className="space-y-4">
          {data.options?.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = option.isCorrect;
            
            let buttonClass = 'shadow-neumorphic-outset hover:shadow-neumorphic-outset text-slate-600 bg-neumorphic-bg';
            
            if (isSubmitted) {
              if (isCorrect) {
                buttonClass = 'shadow-neumorphic-inset border-2 border-green-400 bg-green-50/10 text-green-700';
              } else if (isSelected) {
                buttonClass = 'shadow-neumorphic-inset border-2 border-red-400 bg-red-50/10 text-red-700';
              } else {
                buttonClass = 'shadow-neumorphic-outset opacity-50 bg-neumorphic-bg text-slate-500';
              }
            } else if (isSelected) {
              buttonClass = 'shadow-neumorphic-inset bg-blue-50/10 text-blue-700 border border-blue-400/30';
            }

            return (
              <div key={index} className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      if (!isSubmitted) {
                        setSelectedOption(index);
                        if (onOptionSelect) onOptionSelect(index);
                      }
                    }}
                    disabled={isSubmitted}
                    className={\`flex-1 text-left p-5 sm:p-6 rounded-[2rem] transition-all duration-300 \${buttonClass}\`}
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                            <span className="shrink-0 w-10 h-10 rounded-full bg-neumorphic-bg shadow-neumorphic-outset flex items-center justify-center font-black text-slate-400 text-sm">{index + 1}</span>
                            <div className="flex flex-col gap-1">
                              {language === 'my' ? (
                                <>
                                  <p className={\`font-bold \${getFontSizeClass('base')}\`}>{option.textMY}</p>
                                  <p className={\`font-mono \${getFontSizeClass('sm')} font-bold opacity-60\`}>
                                    <JapaneseText text={option.textJP} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p className={\`font-mono \${getFontSizeClass('base')} font-bold\`}>
                                    <JapaneseText text={option.textJP} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                                  </p>
                                  {(language === 'jp' || language === 'both') && (
                                      <p className={\`\${getFontSizeClass('sm')} font-bold opacity-60 italic\`}>{option.textMY}</p>
                                  )}
                                </>
                              )}
                            </div>
                        </div>
                        <div className="self-end sm:self-auto ml-14 sm:ml-0">
                          <AudioButton text={option.textJP} id={\`opt-\${data.id}-\${index}\`} />
                        </div>
                    </div>
                  </button>
                  
                  {isSubmitted && (
                    <div className="pt-1 w-8 flex justify-center shrink-0">
                        {isCorrect && <CheckCircleSolidIcon className="w-8 h-8 text-green-500 drop-shadow-sm"/>}
                        {isSelected && !isCorrect && <XCircleSolidIcon className="w-8 h-8 text-red-500 drop-shadow-sm"/>}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
        
        {language !== 'jp-only' && (`
);

fs.writeFileSync('components/Card.tsx', code);
