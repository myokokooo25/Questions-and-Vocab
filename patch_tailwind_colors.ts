import fs from 'fs';
let content = fs.readFileSync('index.html', 'utf-8');

const colorsBlock = `
            colors: {
              'neumorphic-bg': 'rgb(var(--color-neumorphic-bg) / <alpha-value>)',
              'neumorphic-text': 'rgb(var(--color-neumorphic-text) / <alpha-value>)',
              slate: {
                400: 'rgb(var(--color-slate-400) / <alpha-value>)',
                500: 'rgb(var(--color-slate-500) / <alpha-value>)',
                600: 'rgb(var(--color-slate-600) / <alpha-value>)',
                700: 'rgb(var(--color-slate-700) / <alpha-value>)',
              },
              blue: {
                50: '#ddf4ff',
                100: '#b1e5ff',
                200: '#7ad4ff',
                300: '#3ac1ff',
                400: '#1cb0f6',
                500: '#1899d6',
                600: '#1cb0f6',
                700: '#1899d6',
                800: '#117baf',
                900: '#0c5b84',
              },
              green: {
                400: '#58cc02',
                500: '#58cc02',
                600: '#58a700',
                700: '#468700',
              },
              red: {
                400: '#ff4b4b',
                500: '#ff4b4b',
                600: '#ea2b2b',
                700: '#c32121',
              },
              yellow: {
                400: '#ffc800',
                500: '#ffc800',
                600: '#d9aa00',
                700: '#b28c00',
              }
            },
`;

content = content.replace(/colors:\s*{[\s\S]*?},(?=\s*boxShadow)/, colorsBlock);

fs.writeFileSync('index.html', content);
