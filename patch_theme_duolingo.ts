import fs from 'fs';
let content = fs.readFileSync('index.html', 'utf-8');

const newStyles = `
      :root {
        --color-neumorphic-bg: 255 255 255;
        --color-neumorphic-text: 60 60 60;
        --color-slate-400: 175 175 175;
        --color-slate-500: 119 119 119;
        --color-slate-600: 90 90 90;
        --color-slate-700: 60 60 60;
        
        --shadow-outset: 0 4px 0 0 #e5e5e5, 0 0 0 2px #e5e5e5;
        --shadow-inset: 0 0 0 0 #e5e5e5, 0 0 0 2px #e5e5e5;
        --shadow-sm: 0 2px 0 0 #e5e5e5, 0 0 0 2px #e5e5e5;
      }
      
      html.khachannel {
        --color-neumorphic-bg: 255 244 220;
        --color-neumorphic-text: 60 40 10;
        --shadow-outset: 0 4px 0 0 #f5d070, 0 0 0 2px #f5d070;
        --shadow-inset: 0 0 0 0 #f5d070, 0 0 0 2px #f5d070;
        --shadow-sm: 0 2px 0 0 #f5d070, 0 0 0 2px #f5d070;
      }

      html.dark {
        --color-neumorphic-bg: 19 20 21;
        --color-neumorphic-text: 255 255 255;
        --shadow-outset: 0 4px 0 0 #374151, 0 0 0 2px #374151;
        --shadow-inset: 0 0 0 0 #374151, 0 0 0 2px #374151;
        --shadow-sm: 0 2px 0 0 #374151, 0 0 0 2px #374151;
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
`;

content = content.replace(/<style>[\s\S]*?<\/style>/, '<style>\n' + newStyles + '\n      * { transition: background-color 0.2s ease, color 0.2s ease, transform 0.1s cubic-bezier(0.4, 0, 0.2, 1); }\n      html { font-size: clamp(0.9rem, 0.6rem + 0.8vw, 1.15rem); }\n      ruby { font-family: inherit; font-size: inherit; }\n      rt { font-size: 0.6em; user-select: none; opacity: 0.85; font-weight: 500; text-align: center; }\n    </style>');

// Also change the google fonts to use standard rounded bold font like Nunito or Quicksand to make it cuter
content = content.replace(/family=Poppins:wght@400;500;600;700/, 'family=Nunito:wght@400;600;700;800;900');
content = content.replace(/Poppins/, 'Nunito');

fs.writeFileSync('index.html', content);
