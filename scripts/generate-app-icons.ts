import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-fidelity SVG recreating the user's exact "TEKKOTSU PASS" logo design
const tekkotsuPassSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#edf2f7"/>
    </linearGradient>

    <!-- Enso Calligraphy Brush Gradient -->
    <linearGradient id="brushGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0e3a8a"/>
      <stop offset="40%" stop-color="#1e40af"/>
      <stop offset="70%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>

    <!-- Red Sun Gradient -->
    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>

    <!-- Mount Fuji Shading -->
    <linearGradient id="fujiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="40%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>

    <!-- Steel H-Beam Top Flange Gradient -->
    <linearGradient id="steelTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="35%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>

    <!-- Steel H-Beam Web Inner Gradient -->
    <linearGradient id="steelWebGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f2b5c"/>
      <stop offset="50%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>

    <!-- Steel Front Face Gradient -->
    <linearGradient id="steelFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="25%" stop-color="#94a3b8"/>
      <stop offset="75%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>

    <!-- Tekkotsu Title Gradient -->
    <linearGradient id="tekkotsuTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#082f49"/>
      <stop offset="30%" stop-color="#0c4a6e"/>
      <stop offset="70%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>

    <!-- Pass Title Gradient -->
    <linearGradient id="passTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>

    <!-- Soft Drop Shadow -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.12"/>
    </filter>

    <filter id="beamShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="-10" dy="25" stdDeviation="20" flood-color="#0284c7" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Squircle Canvas Container with Rounded Corners -->
  <rect width="1024" height="1024" rx="220" fill="url(#bgGrad)" stroke="#e2e8f0" stroke-width="6"/>

  <!-- Subtle Outer Border Accent -->
  <rect x="16" y="16" width="992" height="992" rx="208" fill="none" stroke="#f1f5f9" stroke-width="4"/>

  <!-- ==================== BACKGROUND ARTWORK ==================== -->

  <!-- Rising Red Sun (Hinomaru) -->
  <circle cx="660" cy="210" r="68" fill="url(#sunGrad)" opacity="0.95"/>

  <!-- Mount Fuji (富士山) -->
  <g opacity="0.85">
    <!-- Mountain base & body -->
    <polygon points="530,180 340,360 720,360" fill="url(#fujiGrad)"/>
    <!-- Snow peak (White Cap) -->
    <polygon points="530,180 475,235 500,245 520,230 535,248 555,232 585,235" fill="#ffffff"/>
    <path d="M 475 235 Q 530 220 585 235 L 530 180 Z" fill="#ffffff"/>
  </g>

  <!-- Enso Blue Calligraphy Brush Stroke (円相 書道ブラシ) -->
  <g filter="url(#cardShadow)">
    <path d="M 240 590 
             C 170 510 130 380 160 270 
             C 195 155 310 70 450 50 
             C 590 30 730 80 810 170 
             C 870 240 885 320 860 360 
             C 845 350 835 310 800 245 
             C 740 160 620 100 480 110 
             C 340 120 230 200 195 305 
             C 170 380 195 475 250 540 
             Z" 
          fill="url(#brushGrad)" 
          opacity="0.92"/>
    <!-- Textured dry brush specks / strokes -->
    <path d="M 180 340 C 170 280 190 220 230 170 C 215 220 200 290 210 345 Z" fill="#1e3a8a" opacity="0.4"/>
    <path d="M 750 140 C 800 185 840 250 835 310 C 825 260 790 200 740 155 Z" fill="#2563eb" opacity="0.35"/>
  </g>

  <!-- Steel Skyscraper Structure Blueprint Grid (Right side) -->
  <g stroke="#0284c7" stroke-opacity="0.45" stroke-width="3" fill="none">
    <!-- Vertical structural columns -->
    <line x1="620" y1="360" x2="620" y2="590"/>
    <line x1="700" y1="300" x2="700" y2="590"/>
    <line x1="780" y1="260" x2="780" y2="590"/>
    <line x1="860" y1="350" x2="860" y2="590"/>

    <!-- Horizontal floor beams -->
    <line x1="620" y1="380" x2="860" y2="380"/>
    <line x1="620" y1="440" x2="860" y2="440"/>
    <line x1="620" y1="510" x2="860" y2="510"/>
    <line x1="620" y1="580" x2="860" y2="580"/>

    <!-- Cross bracing trusses (X-bracing) -->
    <line x1="620" y1="380" x2="700" y2="440"/>
    <line x1="700" y1="380" x2="620" y2="440"/>
    <line x1="700" y1="380" x2="780" y2="440"/>
    <line x1="780" y1="380" x2="700" y2="440"/>

    <line x1="620" y1="440" x2="700" y2="510"/>
    <line x1="700" y1="440" x2="620" y2="510"/>
    <line x1="700" y1="440" x2="780" y2="510"/>
    <line x1="780" y1="440" x2="700" y2="510"/>

    <!-- Fine scaffolding & dimension lines -->
    <line x1="780" y1="210" x2="780" y2="260" stroke-dasharray="4,4"/>
    <line x1="700" y1="240" x2="700" y2="300" stroke-dasharray="4,4"/>
  </g>

  <!-- ==================== 3D STEEL H-BEAM (H形鋼) ==================== -->
  <g filter="url(#beamShadow)">
    <!-- 3D Perspective Projection of H-Beam -->

    <!-- Top Flange - Isometric Upper Face -->
    <polygon points="300,320 540,265 770,390 530,455" fill="url(#steelTopGrad)" stroke="#64748b" stroke-width="2"/>

    <!-- Top Flange - Front Edge Thickness -->
    <polygon points="300,320 530,455 530,485 300,350" fill="url(#steelFrontGrad)" stroke="#334155" stroke-width="2"/>

    <!-- Front Face - Left Vertical Edge -->
    <polygon points="250,345 300,320 300,565 250,590" fill="#94a3b8" stroke="#334155" stroke-width="2"/>

    <!-- Bottom Flange - Front Lip -->
    <polygon points="250,590 500,590 500,620 250,620" fill="url(#steelFrontGrad)"/>

    <!-- Front H-Section Profile (The Cut Face of the Beam) -->
    <!-- Top Flange Front -->
    <rect x="250" y="340" width="290" height="40" rx="4" fill="url(#steelFrontGrad)" stroke="#1e293b" stroke-width="3"/>
    <!-- Bottom Flange Front -->
    <rect x="250" y="550" width="290" height="40" rx="4" fill="url(#steelFrontGrad)" stroke="#1e293b" stroke-width="3"/>
    <!-- Vertical Web Front -->
    <rect x="375" y="378" width="40" height="174" fill="url(#steelFrontGrad)" stroke="#1e293b" stroke-width="3"/>

    <!-- Inner Web Depth (Perspective going inwards towards right) -->
    <polygon points="415,380 710,430 710,540 415,550" fill="url(#steelWebGrad)"/>

    <!-- Bottom Flange Inner Depth Surface -->
    <polygon points="290,550 540,550 710,540 415,550" fill="#1e3a8a" opacity="0.6"/>

    <!-- Highlights & Chamfers (Polished Steel Reflections) -->
    <line x1="250" y1="342" x2="540" y2="342" stroke="#ffffff" stroke-width="3" opacity="0.9"/>
    <line x1="250" y1="552" x2="540" y2="552" stroke="#ffffff" stroke-width="3" opacity="0.9"/>
    <line x1="378" y1="380" x2="378" y2="550" stroke="#ffffff" stroke-width="2" opacity="0.7"/>
    <line x1="415" y1="380" x2="710" y2="430" stroke="#38bdf8" stroke-width="2" opacity="0.8"/>
  </g>

  <!-- ==================== JAPANESE VERTICAL CALLIGRAPHY ==================== -->
  <!-- Left Side: 学びが未来をつくる ― -->
  <g transform="translate(105, 150)" font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" font-weight="700" fill="#334155" opacity="0.85">
    <text x="0" y="0" font-size="28" letter-spacing="4">学</text>
    <text x="0" y="38" font-size="28" letter-spacing="4">び</text>
    <text x="0" y="76" font-size="28" letter-spacing="4">が</text>
    <text x="0" y="130" font-size="28" letter-spacing="4">未</text>
    <text x="0" y="168" font-size="28" letter-spacing="4">来</text>
    <text x="0" y="206" font-size="28" letter-spacing="4">を</text>
    <text x="0" y="260" font-size="28" letter-spacing="4">つ</text>
    <text x="0" y="298" font-size="28" letter-spacing="4">く</text>
    <text x="0" y="336" font-size="28" letter-spacing="4">る</text>
    <text x="2" y="375" font-size="28" font-weight="300">―</text>
  </g>

  <!-- Right Side: ― 一歩ずつ合格へ ― -->
  <g transform="translate(900, 180)" font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" font-weight="700" fill="#334155" opacity="0.85">
    <text x="2" y="0" font-size="28" font-weight="300">―</text>
    <text x="0" y="42" font-size="28" letter-spacing="4">一</text>
    <text x="0" y="80" font-size="28" letter-spacing="4">歩</text>
    <text x="0" y="118" font-size="28" letter-spacing="4">ず</text>
    <text x="0" y="156" font-size="28" letter-spacing="4">つ</text>
    <text x="0" y="210" font-size="28" letter-spacing="4">合</text>
    <text x="0" y="248" font-size="28" letter-spacing="4">格</text>
    <text x="0" y="286" font-size="28" letter-spacing="4">へ</text>
    <text x="2" y="328" font-size="28" font-weight="300">―</text>
  </g>

  <!-- ==================== BRANDING & TYPOGRAPHY ==================== -->

  <!-- TEKKOTSU Title with Red Dot Hinomaru inside O -->
  <g transform="translate(512, 725)" text-anchor="middle">
    <!-- TEKK -->
    <text x="-120" y="0" 
          font-family="'Poppins', 'Montserrat', 'Arial Black', sans-serif" 
          font-size="116" 
          font-weight="900" 
          font-style="italic" 
          letter-spacing="-1" 
          fill="url(#tekkotsuTextGrad)">TEKK</text>

    <!-- O (with red dot center) -->
    <g transform="translate(54, -36)">
      <!-- Outer O Ring -->
      <circle cx="0" cy="0" r="48" fill="url(#tekkotsuTextGrad)"/>
      <circle cx="0" cy="0" r="28" fill="#ffffff"/>
      <!-- Inner Red Hinomaru Sun Dot -->
      <circle cx="0" cy="0" r="20" fill="url(#sunGrad)"/>
    </g>

    <!-- TSU -->
    <text x="250" y="0" 
          font-family="'Poppins', 'Montserrat', 'Arial Black', sans-serif" 
          font-size="116" 
          font-weight="900" 
          font-style="italic" 
          letter-spacing="-1" 
          fill="url(#tekkotsuTextGrad)">TSU</text>
  </g>

  <!-- PASS Subtitle with Wing Accent Lines -->
  <g transform="translate(512, 792)">
    <!-- Left Flair Bar -->
    <line x1="-390" y1="-12" x2="-200" y2="-12" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
    <!-- Right Flair Bar -->
    <line x1="200" y1="-12" x2="390" y2="-12" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>

    <!-- PASS Text -->
    <text x="0" y="0" 
          text-anchor="middle" 
          font-family="'Poppins', 'Montserrat', sans-serif" 
          font-size="64" 
          font-weight="900" 
          letter-spacing="18" 
          fill="url(#passTextGrad)">PASS</text>
  </g>

  <!-- Japanese Exam Subtitle -->
  <text x="512" y="865" 
        text-anchor="middle" 
        font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif" 
        font-size="34" 
        font-weight="900" 
        letter-spacing="4" 
        fill="#0f172a">鉄骨製作管理技術者 試験対策アプリ</text>

  <!-- Divider Rule -->
  <line x1="260" y1="900" x2="764" y2="900" stroke="#cbd5e1" stroke-width="2"/>
  <circle cx="512" cy="900" r="4" fill="#0284c7"/>

  <!-- STUDY • PRACTICE • PASS Tagline -->
  <text x="512" y="938" 
        text-anchor="middle" 
        font-family="'Poppins', 'Montserrat', sans-serif" 
        font-size="22" 
        font-weight="600" 
        letter-spacing="6" 
        fill="#64748b">STUDY  •  PRACTICE  •  PASS</text>
</svg>`;

async function generateAppIcons() {
  const publicDir = path.resolve('public');

  // Save master SVG
  const svgPath = path.join(publicDir, 'icon.svg');
  fs.writeFileSync(svgPath, tekkotsuPassSvg);
  console.log('Saved icon.svg');

  // Generate 512x512 PNG
  await sharp(Buffer.from(tekkotsuPassSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Saved icon-512.png');

  // Generate 192x192 PNG
  await sharp(Buffer.from(tekkotsuPassSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Saved icon-192.png');

  // Generate 180x180 apple-touch-icon.png
  await sharp(Buffer.from(tekkotsuPassSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved apple-touch-icon.png');

  // Generate 64x64 favicon.png
  await sharp(Buffer.from(tekkotsuPassSvg))
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Saved favicon.png');

  console.log('Tekkotsu Pass icons generated successfully!');
}

generateAppIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
