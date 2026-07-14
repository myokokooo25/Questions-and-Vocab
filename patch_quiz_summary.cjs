const fs = require('fs');
let code = fs.readFileSync('components/QuizSummary.tsx', 'utf8');

code = code.replace(
  "bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-white/10",
  "bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset"
);

code = code.replace(
  "text-indigo-500 dark:text-indigo-400",
  "text-slate-500"
);

code = code.replace(
  "text-gray-900 dark:text-slate-100",
  "text-slate-700"
);

code = code.replace(
  "text-gray-600 dark:text-gray-400",
  "text-slate-600"
);

code = code.replace(
  "text-indigo-600 dark:text-indigo-400",
  "text-slate-700"
);

code = code.replace(
  "text-gray-800 dark:text-slate-200",
  "text-slate-600"
);

code = code.replace(
  "text-indigo-700 bg-indigo-100 border border-transparent rounded-lg shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-slate-700 dark:text-indigo-300 dark:hover:bg-slate-600 dark:focus:ring-offset-slate-800",
  "text-slate-700 bg-neumorphic-bg rounded-xl shadow-neumorphic-sm hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all"
);

code = code.replace(
  "text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-slate-600 dark:text-slate-200 dark:border-slate-500 dark:hover:bg-slate-500 dark:focus:ring-offset-slate-800",
  "text-slate-500 bg-neumorphic-bg rounded-xl shadow-neumorphic-sm hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all"
);

fs.writeFileSync('components/QuizSummary.tsx', code);
