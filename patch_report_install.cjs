const fs = require('fs');

let report = fs.readFileSync('components/ReportModal.tsx', 'utf8');
report = report.replace(
  "bg-white shadow-sm text-blue-600",
  "bg-blue-600 shadow-neumorphic-sm text-white"
);
report = report.replace(
  "bg-blue-50",
  "border border-slate-400/20 shadow-neumorphic-inset"
);
report = report.replace(
  "bg-green-100",
  "bg-neumorphic-bg shadow-neumorphic-inset border-2 border-green-500"
);
fs.writeFileSync('components/ReportModal.tsx', report);

let install = fs.readFileSync('components/InstallPrompt.tsx', 'utf8');
install = install.replace(
  "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 border border-slate-200 dark:border-slate-700",
  "bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset p-4 ring-1 ring-slate-400/20"
);
install = install.replace(
  "text-gray-900 dark:text-slate-100",
  "text-slate-700"
);
install = install.replace(
  "text-gray-600 dark:text-slate-400",
  "text-slate-600"
);
install = install.replace(
  "text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200",
  "text-slate-500 hover:text-slate-700"
);
install = install.replace(
  "text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800",
  "text-slate-700 bg-neumorphic-bg shadow-neumorphic-sm hover:shadow-neumorphic-inset active:shadow-neumorphic-inset transition-all"
);
fs.writeFileSync('components/InstallPrompt.tsx', install);
