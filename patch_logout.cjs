const fs = require('fs');

let code = fs.readFileSync('components/Dashboard.tsx', 'utf8');

// Add showLogoutConfirm state
if (!code.includes('showLogoutConfirm')) {
    code = code.replace(
        "const [showInstallInfo, setShowInstallInfo] = useState(false);",
        "const [showInstallInfo, setShowInstallInfo] = useState(false);\n  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);"
    );
    
    // Change onClick={logout} to onClick={() => setShowLogoutConfirm(true)}
    code = code.replace(
        "onClick={logout}",
        "onClick={() => setShowLogoutConfirm(true)}"
    );

    // Add confirmation modal JSX
    const modalJSX = `
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-neumorphic-bg rounded-[2rem] shadow-2xl p-6 sm:p-8 w-full max-w-sm border border-slate-200/50 dark:border-slate-700/50">
                <h3 className="text-xl font-black text-slate-700 dark:text-slate-200 mb-2">Logout?</h3>
                <p className="text-slate-500 font-bold mb-6">Are you sure you want to log out?</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowLogoutConfirm(false)}
                        className="flex-1 p-3 rounded-2xl shadow-neumorphic-outset text-slate-600 font-bold hover:text-slate-800 transition-all active:shadow-neumorphic-inset"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => { setShowLogoutConfirm(false); logout(); }}
                        className="flex-1 p-3 rounded-2xl shadow-neumorphic-inset bg-red-50/10 border border-red-400/20 text-red-600 font-bold hover:bg-red-50 hover:text-red-700 transition-all"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
      )}
    `;

    code = code.replace(
        "<main className=\"max-w-4xl p-4 mx-auto sm:p-6 lg:p-8 pb-20\">",
        "<main className=\"max-w-4xl p-4 mx-auto sm:p-6 lg:p-8 pb-20\">" + modalJSX
    );
    
    fs.writeFileSync('components/Dashboard.tsx', code);
}
