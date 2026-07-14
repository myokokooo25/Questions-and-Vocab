const fs = require('fs');
let code = fs.readFileSync('components/KanjiTooltip.tsx', 'utf8');

code = code.replace(
  "bg-white rounded-lg shadow-2xl ring-1 ring-slate-900/10 transition-opacity duration-200 dark:bg-slate-800 dark:ring-white/20",
  "bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset ring-1 ring-slate-400/20 transition-opacity duration-200 text-neumorphic-text"
);

code = code.replace(
  "border-gray-200 dark:border-slate-700",
  "border-slate-400/20"
);
code = code.replace(
  "border-gray-200 dark:border-slate-700",
  "border-slate-400/20"
);
code = code.replace(
  "border-gray-100 dark:border-slate-700",
  "border-slate-400/20"
);


code = code.replace(
  "text-indigo-600 dark:text-indigo-400",
  "text-slate-700"
);
code = code.replace(
  "text-indigo-600 dark:text-indigo-400",
  "text-slate-700"
);

code = code.replace(
  "text-gray-800 dark:text-slate-100",
  "text-slate-700"
);

code = code.replace(
  "text-indigo-700 dark:text-indigo-300",
  "text-slate-600"
);

code = code.replace(
  "text-gray-600 dark:text-slate-300",
  "text-slate-600"
);

code = code.replace(
  "text-gray-900 w-20 inline-block dark:text-slate-100",
  "text-slate-700 w-20 inline-block"
);
code = code.replace(
  "text-gray-900 w-20 inline-block dark:text-slate-100",
  "text-slate-700 w-20 inline-block"
);

code = code.replace(
  "text-slate-700 dark:text-slate-200",
  "text-slate-700"
);

code = code.replace(
  "text-slate-600 dark:text-slate-400",
  "text-slate-600"
);

code = code.replace(
  "text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-slate-700 dark:hover:text-slate-300",
  "text-slate-400 rounded-xl hover:shadow-neumorphic-inset hover:text-slate-600 active:shadow-neumorphic-inset transition-all"
);

fs.writeFileSync('components/KanjiTooltip.tsx', code);
