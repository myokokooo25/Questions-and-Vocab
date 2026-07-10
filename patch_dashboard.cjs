const fs = require('fs');
let code = fs.readFileSync('components/Dashboard.tsx', 'utf8');

// 1. Add state
code = code.replace(
  "const [showInstallInfo, setShowInstallInfo] = useState(false);",
  "const [showInstallInfo, setShowInstallInfo] = useState(false);\n  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);"
);

// 2. Change logout button
code = code.replace(
  "onClick={logout}\n                className=\"p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-red-500 active:shadow-neumorphic-inset transition-all\"\n                title=\"Logout\"",
  "onClick={() => setShowLogoutConfirm(true)}\n                className=\"p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-red-500 active:shadow-neumorphic-inset transition-all\"\n                title=\"Logout\""
);

// 3. Add modal before </main>
code = code.replace(
  "      {renderContent()}\n      </main>",
  `      {renderContent()}
      </main>

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-neumorphic-bg rounded-3xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-4 mb-6 text-red-500">
                    <LogoutIcon className="w-8 h-8" />
                    <h3 className="text-xl font-bold text-slate-700">Confirm Logout</h3>
                </div>
                <p className="text-slate-500 mb-8">Are you sure you want to log out of your account?</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowLogoutConfirm(false)}
                        className="flex-1 px-4 py-3 rounded-2xl shadow-neumorphic-outset text-slate-600 hover:text-slate-800 active:shadow-neumorphic-inset transition-all font-bold"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => { setShowLogoutConfirm(false); logout(); }}
                        className="flex-1 px-4 py-3 rounded-2xl bg-red-500 text-white shadow-md hover:bg-red-600 active:bg-red-700 transition-all font-bold"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
      )}`
);

fs.writeFileSync('components/Dashboard.tsx', code);
