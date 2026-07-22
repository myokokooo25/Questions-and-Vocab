import fs from 'fs';
let content = fs.readFileSync('components/Dashboard.tsx', 'utf-8');

// Add showMoreMenu state
content = content.replace(
  'const [showProfile, setShowProfile] = useState(false);',
  'const [showProfile, setShowProfile] = useState(false);\n  const [showMoreMenu, setShowMoreMenu] = useState(false);'
);

const headerOriginal = `
            <div className="flex items-center gap-2 sm:gap-3">
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-24 sm:w-48 pl-9 pr-3 py-2.5 text-sm font-bold bg-neumorphic-bg text-neumorphic-text placeholder-slate-400 rounded-2xl shadow-neumorphic-inset border-2 border-transparent focus:outline-none transition-all"
                    />
                </div>
                 <button
                    onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
                    className={\`p-2 sm:p-3 rounded-2xl transition-all \${
                    showOnlyBookmarked
                        ? 'shadow-neumorphic-inset text-blue-600'
                        : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700'
                    }\`}
                    title="Bookmarks"
                >
                    <BookmarkIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setShowAnswerKey(true)}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all"
                    title="Answer Key"
                >
                    <ListBulletIcon className="w-5 h-5" />
                </button>
                {user?.isAdmin && (
                    <button
                        onClick={() => setIsAdminViewVisible(!isAdminViewVisible)}
                        className={\`p-2 sm:p-3 rounded-2xl transition-all \${
                        isAdminViewVisible
                            ? 'shadow-neumorphic-inset text-purple-600'
                            : 'shadow-neumorphic-outset text-slate-400 hover:text-purple-600'
                        }\`}
                        title="Admin Panel"
                    >
                        <SparkleIcon className="w-5 h-5" />
                    </button>
                )}
                <button
                    onClick={() => setShowProfile(true)}
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all relative"
                    title="Account"
                >
                    <UsersIcon className="w-5 h-5" />
                    <span className="hidden md:block text-xs font-bold text-slate-600 max-w-[80px] truncate">
                        {user?.userName || 'Profile'}
                    </span>
                    {user?.type === 'trial' && <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border border-white"></span>}
                </button>
                <button
                    onClick={() => setShowAppGuide(true)}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all"
                    title="App Guide"
                >
                    <InfoIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={toggleLanguage}
                    className="p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                    title="Language"
                >
                    <GlobeIcon className="w-5 h-5" />
                </button>
                <div className="relative">
                    <button
                        onClick={() => setShowFontSizeMenu(!showFontSizeMenu)}
                        className={\`p-2 sm:p-3 rounded-2xl transition-all \${showFontSizeMenu ? 'shadow-neumorphic-inset text-slate-700' : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset'}\`}
                        title="Font Size"
                    >
                        <TextSizeIcon className="w-5 h-5" />
                    </button>
                    {showFontSizeMenu && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowFontSizeMenu(false)}></div>
                            <div className="absolute right-0 mt-2 w-32 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset z-50 p-2 flex flex-col gap-2">
                                <button
                                    onClick={() => { setFontSize('small'); setShowFontSizeMenu(false); }}
                                    className={\`px-4 py-2 text-sm text-left rounded-xl transition-all \${fontSize === 'small' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}\`}
                                >
                                    Small
                                </button>
                                <button
                                    onClick={() => { setFontSize('medium'); setShowFontSizeMenu(false); }}
                                    className={\`px-4 py-2 text-sm text-left rounded-xl transition-all \${fontSize === 'medium' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}\`}
                                >
                                    Medium
                                </button>
                                <button
                                    onClick={() => { setFontSize('large'); setShowFontSizeMenu(false); }}
                                    className={\`px-4 py-2 text-sm text-left rounded-xl transition-all \${fontSize === 'large' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}\`}
                                >
                                    Large
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>`;

const headerNew = `
            <div className="flex items-center gap-2 sm:gap-3">
                 <div className="relative group hidden md:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-48 pl-9 pr-3 py-2.5 text-sm font-bold bg-neumorphic-bg text-neumorphic-text placeholder-slate-400 rounded-2xl shadow-neumorphic-inset border-2 border-transparent focus:outline-none transition-all"
                    />
                </div>
                 
                 <button
                    onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
                    className={\`p-2 sm:p-3 rounded-2xl transition-all \${
                    showOnlyBookmarked
                        ? 'shadow-neumorphic-inset text-blue-600'
                        : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700'
                    }\`}
                    title="Bookmarks"
                >
                    <BookmarkIcon className="w-5 h-5" />
                </button>
                
                <button
                    onClick={() => setShowProfile(true)}
                    className="flex items-center gap-2 p-2 sm:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all relative"
                    title="Account"
                >
                    <UsersIcon className="w-5 h-5" />
                    <span className="hidden lg:block text-xs font-bold text-slate-600 max-w-[80px] truncate">
                        {user?.userName || 'Profile'}
                    </span>
                    {user?.type === 'trial' && <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border border-white"></span>}
                </button>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-2 lg:gap-3">
                    <button
                        onClick={() => setShowAnswerKey(true)}
                        className="p-2 lg:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all"
                        title="Answer Key"
                    >
                        <ListBulletIcon className="w-5 h-5" />
                    </button>
                    {user?.isAdmin && (
                        <button
                            onClick={() => setIsAdminViewVisible(!isAdminViewVisible)}
                            className={\`p-2 lg:p-3 rounded-2xl transition-all \${
                            isAdminViewVisible
                                ? 'shadow-neumorphic-inset text-purple-600'
                                : 'shadow-neumorphic-outset text-slate-400 hover:text-purple-600'
                            }\`}
                            title="Admin Panel"
                        >
                            <SparkleIcon className="w-5 h-5" />
                        </button>
                    )}
                    <button
                        onClick={() => setShowAppGuide(true)}
                        className="p-2 lg:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-blue-600 active:shadow-neumorphic-inset transition-all"
                        title="App Guide"
                    >
                        <InfoIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="p-2 lg:p-3 rounded-2xl shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset transition-all"
                        title="Language"
                    >
                        <GlobeIcon className="w-5 h-5" />
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setShowFontSizeMenu(!showFontSizeMenu)}
                            className={\`p-2 lg:p-3 rounded-2xl transition-all \${showFontSizeMenu ? 'shadow-neumorphic-inset text-slate-700' : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700 active:shadow-neumorphic-inset'}\`}
                            title="Font Size"
                        >
                            <TextSizeIcon className="w-5 h-5" />
                        </button>
                        {showFontSizeMenu && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setShowFontSizeMenu(false)}></div>
                                <div className="absolute right-0 mt-2 w-32 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset z-50 p-2 flex flex-col gap-2">
                                    <button
                                        onClick={() => { setFontSize('small'); setShowFontSizeMenu(false); }}
                                        className={\`px-4 py-2 text-sm text-left rounded-xl transition-all \${fontSize === 'small' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}\`}
                                    >
                                        Small
                                    </button>
                                    <button
                                        onClick={() => { setFontSize('medium'); setShowFontSizeMenu(false); }}
                                        className={\`px-4 py-2 text-sm text-left rounded-xl transition-all \${fontSize === 'medium' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}\`}
                                    >
                                        Medium
                                    </button>
                                    <button
                                        onClick={() => { setFontSize('large'); setShowFontSizeMenu(false); }}
                                        className={\`px-4 py-2 text-sm text-left rounded-xl transition-all \${fontSize === 'large' ? 'shadow-neumorphic-inset text-blue-600 font-bold' : 'text-slate-500 hover:shadow-neumorphic-inset hover:text-slate-700'}\`}
                                    >
                                        Large
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden relative">
                    <button
                        onClick={() => setShowMoreMenu(!showMoreMenu)}
                        className={\`p-2 rounded-2xl transition-all \${showMoreMenu ? 'shadow-neumorphic-inset text-blue-600' : 'shadow-neumorphic-outset text-slate-400 hover:text-slate-700'}\`}
                    >
                        <MenuIcon className="w-5 h-5" />
                    </button>
                    {showMoreMenu && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowMoreMenu(false)}></div>
                            <div className="absolute right-0 mt-2 w-56 bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset z-50 p-3 flex flex-col gap-3">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <SearchIcon className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className="w-full pl-9 pr-3 py-2 text-sm font-bold bg-neumorphic-bg text-neumorphic-text placeholder-slate-400 rounded-xl shadow-neumorphic-inset border-2 border-transparent focus:outline-none"
                                    />
                                </div>
                                <hr className="border-slate-300/30" />
                                <button
                                    onClick={() => { setShowAnswerKey(true); setShowMoreMenu(false); }}
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-left text-slate-600 hover:text-blue-600 active:bg-slate-100 rounded-xl transition-all"
                                >
                                    <ListBulletIcon className="w-4 h-4" /> Answer Key
                                </button>
                                <button
                                    onClick={() => { setShowAppGuide(true); setShowMoreMenu(false); }}
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-left text-slate-600 hover:text-blue-600 active:bg-slate-100 rounded-xl transition-all"
                                >
                                    <InfoIcon className="w-4 h-4" /> App Guide
                                </button>
                                <button
                                    onClick={() => { toggleLanguage(); setShowMoreMenu(false); }}
                                    className="flex items-center gap-3 px-3 py-2 text-sm text-left text-slate-600 hover:text-blue-600 active:bg-slate-100 rounded-xl transition-all"
                                >
                                    <GlobeIcon className="w-4 h-4" /> Language
                                </button>
                                <button
                                    onClick={() => { 
                                        setFontSize(fontSize === 'small' ? 'medium' : fontSize === 'medium' ? 'large' : 'small');
                                    }}
                                    className="flex items-center justify-between px-3 py-2 text-sm text-left text-slate-600 hover:text-blue-600 active:bg-slate-100 rounded-xl transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <TextSizeIcon className="w-4 h-4" /> Font Size
                                    </div>
                                    <span className="font-bold text-xs uppercase tracking-widest text-slate-400">{fontSize}</span>
                                </button>
                                {user?.isAdmin && (
                                    <button
                                        onClick={() => { setIsAdminViewVisible(!isAdminViewVisible); setShowMoreMenu(false); }}
                                        className="flex items-center gap-3 px-3 py-2 text-sm text-left text-purple-600 font-bold active:bg-purple-50 rounded-xl transition-all"
                                    >
                                        <SparkleIcon className="w-4 h-4" /> Admin Panel
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>`;

content = content.replace(headerOriginal.trim(), headerNew.trim());
fs.writeFileSync('components/Dashboard.tsx', content);
