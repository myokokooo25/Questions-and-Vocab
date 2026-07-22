import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Pattern 1: Blue neumorphic buttons
    content = content.replace(/bg-blue-600 rounded-2xl shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all hover:bg-blue-700/g, 'bg-blue-600 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all hover:bg-blue-500');
    
    // Pattern 2: Generic blue buttons with shadow-lg
    content = content.replace(/bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors shadow-lg/g, 'bg-blue-600 rounded-xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all hover:bg-blue-500');
    content = content.replace(/bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors shadow-lg/g, 'bg-blue-600 text-white rounded-xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all hover:bg-blue-500');

    // Pattern 3: Big quiz button
    content = content.replace(/bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95/g, 'bg-blue-600 text-white rounded-2xl font-black text-lg border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all hover:bg-blue-500');

    fs.writeFileSync(filePath, content);
}

const componentsDir = path.join(process.cwd(), 'components');
const files = fs.readdirSync(componentsDir);
files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        replaceInFile(path.join(componentsDir, file));
    }
});
