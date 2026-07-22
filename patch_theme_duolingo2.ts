import fs from 'fs';
let content = fs.readFileSync('index.html', 'utf-8');

const newStyles = `
      :root {
        --color-neumorphic-bg: 255 255 255;
        --color-neumorphic-text: 75 85 99;
        --color-slate-400: 156 163 175;
        --color-slate-500: 107 114 128;
        --color-slate-600: 75 85 99;
        --color-slate-700: 55 65 81;
        
        --shadow-outset: 0 4px 0 0 #e5e7eb, 0 0 0 2px #e5e7eb;
        --shadow-inset: 0 0 0 0 #e5e7eb, 0 0 0 2px #e5e7eb;
        --shadow-sm: 0 3px 0 0 #e5e7eb, 0 0 0 2px #e5e7eb;
      }
      
      html.khachannel {
        --color-neumorphic-bg: 255 244 220;
        --color-neumorphic-text: 60 40 10;
        --shadow-outset: 0 4px 0 0 #f5d070, 0 0 0 2px #f5d070;
        --shadow-inset: 0 0 0 0 #f5d070, 0 0 0 2px #f5d070;
        --shadow-sm: 0 3px 0 0 #f5d070, 0 0 0 2px #f5d070;
      }

      html.dark {
        --color-neumorphic-bg: 19 31 36;
        --color-neumorphic-text: 255 255 255;
        --shadow-outset: 0 4px 0 0 #37464f, 0 0 0 2px #37464f;
        --shadow-inset: 0 0 0 0 #37464f, 0 0 0 2px #37464f;
        --shadow-sm: 0 3px 0 0 #37464f, 0 0 0 2px #37464f;
      }

      /* Duolingo button press effect */
      .shadow-neumorphic-inset {
         transform: translateY(4px);
      }
      .active\\:shadow-neumorphic-inset:active {
         transform: translateY(4px) !important;
         box-shadow: var(--shadow-inset) !important;
      }

      /* Change border radius everywhere for cuter look */
      .rounded-2xl {
         border-radius: 1.25rem !important;
      }
      .rounded-xl {
         border-radius: 1rem !important;
      }
      .rounded-3xl {
         border-radius: 1.5rem !important;
      }
      
      /* Make inputs look like Duolingo */
      input {
         border-radius: 1rem !important;
      }
`;

content = content.replace(/:root\s*{[\s\S]*?}\s*\.rounded-xl\s*{[\s\S]*?}/, newStyles.trim());

fs.writeFileSync('index.html', content);
