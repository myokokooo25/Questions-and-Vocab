const fs = require('fs');

let indexCode = fs.readFileSync('data/vocab/index.ts', 'utf8');

// The file got messed up. Let's find "export const vocabularyData: {" and see what happened.
// Actually, it's easier to recreate the whole file since it's just a bunch of imports and exports.
