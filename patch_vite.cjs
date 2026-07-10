const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');
if (!code.includes('VitePWA')) {
  code = code.replace(
    "import react from '@vitejs/plugin-react';",
    "import react from '@vitejs/plugin-react';\nimport { VitePWA } from 'vite-plugin-pwa';"
  );
  code = code.replace(
    "plugins: [react()],",
    `plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
          manifest: {
            name: 'Japanese Tech Flashcards',
            short_name: 'Tech Vocab',
            description: 'Japanese Technical Vocabulary Flashcards',
            theme_color: '#ffffff',
            background_color: '#f8fafc',
            display: 'standalone',
            icons: [
              {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png'
              },
              {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],`
  );
  fs.writeFileSync('vite.config.ts', code);
}
