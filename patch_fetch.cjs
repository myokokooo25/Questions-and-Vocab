const fs = require('fs');
const file = '/app/applet/components/Dashboard.tsx';
let code = fs.readFileSync(file, 'utf8');

const target = `      try {
        let query = supabase.from('questions').select('*');
        
        if (selectedApp === '2021') {
           // Fetch all parts for 2021
           query = query.like('category', '2021-%');
        } else {
           query = query.in('category', [category, \`chapter\${category}\`]);
        }

        const { data, error } = await query;
        if (error) throw error;`;

const replacement = `      try {
        throw new Error('Force local data'); // Bypass supabase for now to show code changes`;

code = code.replace(target, replacement);
fs.writeFileSync(file, code);
console.log('Patched');
