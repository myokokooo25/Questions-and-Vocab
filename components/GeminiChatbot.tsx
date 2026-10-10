import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  ChevronLeftIcon,
  BotIcon,
  SendIcon,
  SparkleIcon,
  TrashIcon,
  CopyIcon,
  CheckIcon,
  SpeakerIcon,
  RefreshIcon,
  LoadingSpinnerIcon,
  LightBulbIcon,
  BookOpenIcon,
  CalculatorIcon,
  ScaleIcon,
  AcademicCapIcon,
  KeyIcon,
  XIcon
} from './Icons';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  model?: string;
  roleId?: string;
}

export type GeminiModelType = 'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview';

export interface TutorRole {
  id: string;
  titleJP: string;
  titleMY: string;
  badge: string;
  icon: 'sensei' | 'calc' | 'vocab' | 'strategy';
  descriptionMY: string;
  systemInstruction: string;
  starters: { labelJP: string; labelMY: string; prompt: string }[];
}

export const TUTOR_ROLES: TutorRole[] = [
  {
    id: 'sensei',
    titleJP: '鉄骨製作管理 AIアシスタント',
    titleMY: 'Steel Structure Fabrication AI Assistant',
    badge: 'JASS 6 & 施工管理',
    icon: 'sensei',
    descriptionMY: 'JASS 6၊ JIS စံနှုန်းများ၊ ဂဟေဆက်ခြင်း (Welding) နှင့် သံပေါင်ထုတ်လုပ်မှု စစ်ဆေးခြင်းဆိုင်ရာ အထူးကျွမ်းကျင် လက်ထောက်',
    systemInstruction: `You are "Tekkotsu Assistant" (鉄骨製作管理 AIアシスタント), an expert master engineering assistant and tutor for Myanmar students and engineers preparing for the Japanese Steel Structure Fabrication Management Technical Examination (鉄骨製作管理技術者 1級・2級) and Japanese steel fabrication factory work.
Guidelines:
1. Language: Always provide explanations in a clear bilingual style with authentic Japanese technical terms and crystal-clear Burmese (Myanmar).
2. Reference Standards: Strictly reference 建築工事標準仕様書 JASS 6 鉄骨工事, JIS Z 3801/3841, JIS B 1186 (High-strength bolts), and standard architectural guidelines.
3. Content: Focus on tolerances (管理許容差, 限界許容差), non-destructive testing (UT, MT, PT), factory certification grades (S, H, M, R, J), and fabrication workflows.
4. Format: Use clean markdown, bullet points, and highlight high-yield exam takeaways.`,
    starters: [
      {
        labelJP: 'JASS 6 抜取検査方式',
        labelMY: 'JASS 6 နမူနာစစ်ဆေးမှု နည်းလမ်းအနှစ်ချုပ်',
        prompt: 'JASS 6 における溶接部の抜取検査方式（検査ロットの構成、受領・不合格の判定基準、再検査の手順）について分かりやすく教えてください。'
      },
      {
        labelJP: '仕口のずれ許容差',
        labelMY: 'Bracket အံလွဲခွင့်ပြုဘောင် စံနှုန်းများ',
        prompt: '仕口のずれ（ブラケットと通しダイアフラム）の管理許容差と限界許容差の基準値（t ≧ t3 および t < t3 の場合）を教えてください。'
      },
      {
        labelJP: '高力ボルト締付け検査',
        labelMY: 'High-strength bolt ကျပ်အားစစ်ဆေးမှု စံနှုန်း',
        prompt: 'トルシア形高力ボルトおよびJIS形高力ボルトの締付け管理、トルク検査、マーキングずれの合格判定基準を教えてください。'
      }
    ]
  },
  {
    id: 'calc',
    titleJP: '計算問題・工学力学 コーチ',
    titleMY: 'Calculation & Mechanics Coach',
    badge: '入熱量 & スタッド計算',
    icon: 'calc',
    descriptionMY: 'ဂဟေဆက် အပူစွမ်းအင် (Heat Input)၊ Stud တံအလျား၊ ရိုးရိုးရက်မ တုံ့ပြန်အား စသည့် တွက်ချက်မှုပုစ္ဆာများ လမ်းညွှန်',
    systemInstruction: `You are "Calculation & Structural Mechanics Coach" (計算問題・構造力学 コーチ) for the Japanese Steel Structure Fabrication Management Technical Exam.
Guidelines:
1. Step-by-Step Breakdown: Whenever explaining a formula, always write the standard equation clearly (e.g. Q = (60 * E * I) / (v * 1000) [kJ/cm], L_finish = L0 - delta_L), list the variables with their proper units, and demonstrate step-by-step substitution.
2. Unit Conversions: Highlight frequent exam conversion traps (such as mm/s vs cm/min: 1 mm/s = 6 cm/min; J/cm vs kJ/cm).
3. Stud Rules: Explain the JASS 6 rules (Through-deck protrusion >= 30mm, Concrete cover >= 25mm, Flange tf >= d / 2.5).
4. Language: Clear Japanese formula notation paired with thorough Myanmar explanations.`,
    starters: [
      {
        labelJP: '溶接入熱の計算式 Q',
        labelMY: 'Heat Input (Q) တွက်နည်းနှင့် ယူနစ်ပြောင်းပုံ',
        prompt: '溶接入熱の計算式 Q = (60 × E × I) / (v × 1000) [kJ/cm] の意味と、溶接速度が mm/s で与えられた場合の換算手順を例題付きで教えてください。'
      },
      {
        labelJP: 'デッキ貫通スタッド長さ',
        labelMY: 'Deck Plate ပေါ် Stud အလျား သတ်မှတ်ချက်',
        prompt: 'デッキプレート貫通スタッドの仕上がり軸長計算において、デッキ上突出長さ（≧30mm）とコンクリートかぶり厚さ（≧25mm）を満たすための計算手順を具体例で教えてください。'
      },
      {
        labelJP: '梁の反力・曲げモーメント',
        labelMY: 'Simple Beam Reaction နှင့် Bending Moment',
        prompt: '単純梁における集中荷重作用時の支点反力 (VA, VB) および最大曲げモーメント Mmax の求め方を分かりやすく解説してください。'
      }
    ]
  },
  {
    id: 'vocab',
    titleJP: '専門用語・漢字 チューター',
    titleMY: 'Technical Vocab & Kanji Tutor',
    badge: 'ふりがな & 語彙',
    icon: 'vocab',
    descriptionMY: 'သံပေါင်အင်ဂျင်နီယာ ဂျပန်စကားလုံးများ၊ Furigana ဖတ်နည်း၊ Kanji မျက်စိဆင်တူများနှင့် မြန်မာပြန်ဆိုချက်များ',
    systemInstruction: `You are "Technical Japanese & Kanji Tutor" (専門用語・漢字 チューター) specialized in Japanese architectural steel structure terminology.
Guidelines:
1. Furigana: Always provide Furigana or Hiragana reading alongside Kanji for key technical terms (e.g. 溶接 [ようせつ], 許容差 [きょようさ], 食違い [くいちがい], 延性破壊 [えんせいはかい]).
2. Myanmar Meanings: Give precise Myanmar technical definitions and describe what the part or phenomenon looks like in the factory.
3. Antonyms / Confusing Pairs: Compare easily confused terms (e.g. 溶接入熱 vs 予熱, 延性 vs 脆性, 炭素当量 Ceq vs PCM).`,
    starters: [
      {
        labelJP: '超音波探傷用語',
        labelMY: 'UT စစ်ဆေးခြင်းဆိုင်ရာ အဓိက ဝေါဟာရများ',
        prompt: '超音波探傷試験（UT）で頻出する用語（斜角探触子、エコー高さ区分線、欠陥指示長さ、不合格限界）の読み方と意味を教えてください。'
      },
      {
        labelJP: '溶接欠陥の用語まとめ',
        labelMY: 'ဂဟေဆက် ချို့ယွင်းချက် (Defects) ဂျပန်ဝေါဟာရများ',
        prompt: '溶接欠陥（ブローホール、ピット、スラグ巻込み、融合不良、アンダーカット、オーバラップ）の漢字の読み方とそれぞれの特徴を教えてください。'
      },
      {
        labelJP: '鋼材規格の記号と意味',
        labelMY: 'Steel စံသတ်မှတ်ချက် သင်္ကေတများ (SN, SM, SS, BCP)',
        prompt: '建築構造用鋼材の規格記号（SN400A/B/C, SM490A/B/C, SS400, BCP235/325, BCR295）の違いと特徴を教えてください。'
      }
    ]
  },
  {
    id: 'strategy',
    titleJP: '試験対策・出題傾向 アドバイザー',
    titleMY: 'Exam Strategy & Passing Consultant',
    badge: '1級 / 2級 傾向',
    icon: 'strategy',
    descriptionMY: '၁ တန်းနှင့် ၂ တန်း စာမေးပွဲ မေးခွန်းပုံစံများ၊ မကြာခဏ အမှားများတတ်သော လှည့်ကွက်များနှင့် အောင်မှတ်ရယူနည်း ဗျူဟာ',
    systemInstruction: `You are "Exam Strategy & Passing Consultant" (試験対策・合格コンサルタント) for the Japanese Steel Structure Fabrication Management Examination.
Guidelines:
1. Exam Blueprint: Clarify the difference between Level 1 (1級) and Level 2 (2級), passing marks (typically 60-70%), and chapter question distribution (Chapter 1 to Chapter 5).
2. Question Traps: Teach students how to spot trick wording (e.g. "〜しなければならない" vs "〜することが望ましい", "以上" vs "超える", "直ちに水冷" vs "空冷").
3. Study Strategy: Provide realistic daily study plans for foreign engineers working full-time in Japan or preparing abroad.`,
    starters: [
      {
        labelJP: '1級と2級の違いと対策',
        labelMY: '၁တန်း နှင့် ၂တန်း အဓိကကွာခြားချက်များ',
        prompt: '鉄骨製作管理技術者の 1級 と 2級 の試験範囲、難易度、および勉強方法の違いを詳しく教えてください。'
      },
      {
        labelJP: 'よく出る「ひっかけ」表現',
        labelMY: 'မေးခွန်းများတွင် အမှားလွယ်သော လှည့်ကွက်စကားလုံးများ',
        prompt: '本試験で正誤判定（不適当なものを選ぶ問題）でよく使われる「ひっかけ表現」や注意すべき語尾（〜のみ、〜に限る、など）のパターンを教えてください。'
      },
      {
        labelJP: '本番直前の総仕上げ戦略',
        labelMY: 'စာမေးပွဲနီးကပ်ချိန် အထိရောက်ဆုံး လေ့လာနည်း',
        prompt: '試験直前の1ヶ月間で効率よく合格点を取るための勉強スケジュールと優先すべき分野をアドバイスしてください。'
      }
    ]
  }
];

interface GeminiChatbotProps {
  onGoBack: () => void;
}

const STORAGE_KEY = 'tekkotsu_gemini_chat_history_v1';
const MODEL_STORAGE_KEY = 'tekkotsu_gemini_selected_model';
const ROLE_STORAGE_KEY = 'tekkotsu_gemini_selected_role';

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ onGoBack }) => {
  const { user } = useAuth();
  const isAdmin = Boolean(user?.isAdmin || user?.accessKey?.toUpperCase() === 'MANOEL');
  const DAILY_LIMIT = 10;
  const todayDateStr = new Date().toISOString().slice(0, 10);
  const quotaStorageKey = `tekkotsu_daily_ai_usage_${todayDateStr}`;
  const CUSTOM_KEY_STORAGE = 'tekkotsu_custom_gemini_api_key';

  const [customApiKey, setCustomApiKey] = useState<string>(() => {
    try {
      return localStorage.getItem(CUSTOM_KEY_STORAGE) || '';
    } catch {
      return '';
    }
  });
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [keyInput, setKeyInput] = useState<string>('');

  const [dailyUsedCount, setDailyUsedCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(`tekkotsu_daily_ai_usage_${new Date().toISOString().slice(0, 10)}`);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch (e) {
      return 0;
    }
  });

  const hasValidCustomKey = Boolean(customApiKey && customApiKey.trim().startsWith('AIza'));
  const remainingQuestions = Math.max(0, DAILY_LIMIT - dailyUsedCount);
  const isQuotaExceeded = !isAdmin && !hasValidCustomKey && remainingQuestions <= 0;

  // Selected Model State
  const [selectedModel, setSelectedModel] = useState<GeminiModelType>(() => {
    try {
      const saved = localStorage.getItem(MODEL_STORAGE_KEY);
      if (saved === 'gemini-3.1-pro-preview' || saved === 'gemini-3.1-flash-lite' || saved === 'gemini-3.5-flash') {
        return saved;
      }
    } catch (e) {}
    return 'gemini-3.5-flash';
  });

  // Selected Tutor Role State
  const [selectedRoleId, setSelectedRoleId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(ROLE_STORAGE_KEY);
      if (saved && TUTOR_ROLES.some(r => r.id === saved)) {
        return saved;
      }
    } catch (e) {}
    return 'sensei';
  });

  const activeRole = TUTOR_ROLES.find(r => r.id === selectedRoleId) || TUTOR_ROLES[0];

  // Conversation Messages State
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {}
    // Initial Welcome Message
    return [
      {
        id: 'welcome-msg',
        role: 'model',
        text: `မင်္ဂလာပါ! ကျွန်တော်က **Tekkotsu Assistant (鉄骨製作管理 AIアシスタント)** ဖြစ်ပါတယ်။ 🇯🇵🇲🇲

ဂျပန်နိုင်ငံ သံပေါင်ထုတ်လုပ်မှု စီမံခန့်ခွဲမှု နည်းပညာရှင် စာမေးပွဲ (**鉄骨製作管理技術者 1級・2級**) နှင့် ပတ်သက်ပြီး:
- 📖 **JASS 6 & JIS စံနှုန်းများ** (ဂဟေဆက်ခြင်း၊ UT စစ်ဆေးခြင်း၊ Bolt ကျပ်အား၊ အံလွဲခွင့်ပြုဘောင်များ)
- 📐 **တွက်ချက်မှု ပုစ္ဆာများ** (溶接入熱 Q, スタッド軸長, Deck Rib protrusion)
- 🇯🇵 **အင်ဂျင်နီယာ ဂျပန်ဝေါဟာရများ** (ဖတ်နည်း Furigana + မြန်မာဘာသာပြန်)
- 🎯 **စာမေးပွဲ အောင်မြင်ရေး ဗျူဟာများ**

သိလိုသည့် မေးခွန်းများကို မည်သည့်အချိန်မဆို မေးမြန်းနိုင်ပါသည်။ အောက်ပါ အမေးများသော မေးခွန်းများကို နှိပ်၍လည်း စတင်နိုင်ပါသည်!`,
        timestamp: Date.now(),
        model: 'gemini-3.5-flash',
        roleId: 'sensei'
      }
    ];
  });

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of thread
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Persist messages
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {}
  }, [messages]);

  // Persist settings
  useEffect(() => {
    try {
      localStorage.setItem(MODEL_STORAGE_KEY, selectedModel);
      localStorage.setItem(ROLE_STORAGE_KEY, selectedRoleId);
    } catch (e) {}
  }, [selectedModel, selectedRoleId]);

  // Auto-resize textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputPrompt(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
    }
  };

  // Send message to Gemini
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    if (isQuotaExceeded) {
      setErrorMsg("ယနေ့အတွက် သတ်မှတ်ထားသော အခမဲ့ AI မေးခွန်း ၁၀ ပုဒ် ကုန်ဆုံးသွားပါပြီ။ မနက်ဖြန်တွင် မေးခွန်း ၁၀ ပုဒ် အလိုအလျောက် ပြန်လည်ရရှိပါမည်။");
      return;
    }

    setErrorMsg(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: Date.now(),
      model: selectedModel,
      roleId: selectedRoleId
    };

    const newThread = [...messages, userMsg];
    setMessages(newThread);
    setInputPrompt('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    setIsLoading(true);

    try {
      // Build conversation history payload for the backend proxy
      // Send last 12 messages to keep context relevant without token overflow
      const recentMessages = newThread.slice(-12).map(m => ({
        role: m.role,
        text: m.text
      }));

      const reqHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
      if (hasValidCustomKey) {
        reqHeaders['x-custom-api-key'] = customApiKey.trim();
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: reqHeaders,
        body: JSON.stringify({
          messages: recentMessages,
          model: selectedModel,
          systemInstruction: activeRole.systemInstruction
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get response from Gemini.');
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.text,
        timestamp: Date.now(),
        model: data.model || selectedModel,
        roleId: selectedRoleId
      };

      setMessages(prev => [...prev, botMsg]);

      // Decrement remaining quota for regular users without custom key
      if (!isAdmin && !hasValidCustomKey) {
        setDailyUsedCount(prev => {
          const nextCount = prev + 1;
          try {
            localStorage.setItem(quotaStorageKey, nextCount.toString());
          } catch (e) {}
          return nextCount;
        });
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || 'Error communicating with Tekkotsu Assistant.');
    } finally {
      setIsLoading(false);
    }
  };

  // Copy message to clipboard
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Text to speech for Japanese terms
  const handleSpeak = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Extract Japanese portions or read cleanly
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Clear chat thread
  const handleClearHistory = () => {
    const welcomeMsg: ChatMessage = {
      id: `welcome-${Date.now()}`,
      role: 'model',
      text: `စကားဝိုင်းအသစ်ကို စတင်ပါပြီ! 🇯🇵🇲🇲\n\nသံပေါင် စာမေးပွဲအတွက် မရှင်းလင်းသည့် အချက်များ၊ JASS 6 စံနှုန်းများ သို့မဟုတ် တွက်နည်းများကို မေးမြန်းနိုင်ပါသည်။`,
      timestamp: Date.now(),
      model: selectedModel,
      roleId: selectedRoleId
    };
    setMessages([welcomeMsg]);
    setShowClearConfirm(false);
  };

  // Render markdown text with bold, lists, and formatted blocks
  const renderFormattedText = (raw: string) => {
    // Split into paragraphs / lines
    const lines = raw.split('\n');
    return lines.map((line, idx) => {
      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Headers (### or ##)
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-sm font-black text-indigo-600 dark:text-indigo-400 mt-2 mb-1">
            {formatInlineText(line.replace('### ', ''))}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-base font-black text-slate-800 dark:text-slate-100 mt-2.5 mb-1 border-b border-slate-300/30 pb-0.5">
            {formatInlineText(line.replace('## ', ''))}
          </h3>
        );
      }

      // Bullet points
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return (
          <div key={idx} className="flex items-start gap-2 pl-2 my-0.5">
            <span className="text-indigo-500 font-bold">•</span>
            <div className="flex-1 leading-relaxed">
              {formatInlineText(line.trim().substring(2))}
            </div>
          </div>
        );
      }

      // Numbered points (1. 2.)
      const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        return (
          <div key={idx} className="flex items-start gap-2 pl-2 my-0.5">
            <span className="text-indigo-600 dark:text-indigo-400 font-black font-mono text-xs">
              {numMatch[1]}.
            </span>
            <div className="flex-1 leading-relaxed">
              {formatInlineText(numMatch[2])}
            </div>
          </div>
        );
      }

      // Normal paragraph
      return (
        <p key={idx} className="leading-relaxed my-0.5">
          {formatInlineText(line)}
        </p>
      );
    });
  };

  // Format bold (**), code (`), and LaTeX inline math ($...$)
  const formatInlineText = (text: string) => {
    // Split by **bold**
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|\$.*?\$)/g);
    return parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={pIdx} className="font-bold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={pIdx}
            className="font-mono text-[11px] bg-slate-200/70 dark:bg-slate-800 px-1.5 py-0.5 rounded text-indigo-600 dark:text-indigo-300 font-semibold"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('$') && part.endsWith('$')) {
        return (
          <span
            key={pIdx}
            className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40 px-1.5 py-0.5 rounded text-[11px] border border-blue-500/20"
          >
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="w-full min-h-screen bg-neumorphic-bg flex flex-col items-center p-2 sm:p-4">
      {/* Container with standard max-w for responsiveness */}
      <div className="w-full max-w-4xl lg:max-w-5xl flex flex-col flex-1 h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)]">
        
        {/* ========================================================================= */}
        {/* HEADER BAR */}
        {/* ========================================================================= */}
        <header className="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-neumorphic-bg shadow-neumorphic-outset mb-3 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-indigo-500/10">
          
          {/* Left: Back button & Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onGoBack}
              className="p-2 sm:p-2.5 rounded-xl bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-500 hover:text-slate-800 transition-all shrink-0"
              title="Return to Main Menu"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                <BotIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                    <span>Tekkotsu Assistant AI</span>
                    <SparkleIcon className="w-4 h-4 text-amber-500" />
                  </h1>
                  {isAdmin ? (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 font-mono">
                      👑 Admin: Unlimited
                    </span>
                  ) : hasValidCustomKey ? (
                    <button
                      type="button"
                      onClick={() => {
                        setKeyInput(customApiKey);
                        setShowKeyModal(true);
                      }}
                      className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-mono flex items-center gap-1 hover:opacity-80 transition-opacity"
                      title="Custom Key is active (Unlimited). Click to edit/remove."
                    >
                      <span>🔑 Custom Key: Unlimited</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full font-mono flex items-center gap-1 ${
                        isQuotaExceeded 
                          ? 'bg-red-100 dark:bg-red-950/40 text-red-600 border border-red-500/30' 
                          : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                      }`}>
                        <span>📊 ယနေ့ {remainingQuestions}/{DAILY_LIMIT} ပုဒ်</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setKeyInput(customApiKey);
                          setShowKeyModal(true);
                        }}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 flex items-center gap-1"
                        title="Add Custom Gemini API Key for Unlimited Access"
                      >
                        <KeyIcon className="w-3 h-3 text-amber-500" />
                        <span>Add Key</span>
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {activeRole.titleMY}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Model Selector & Actions */}
          <div className="flex items-center gap-2 flex-wrap justify-end">
            
            {/* Model Selector Dropdown / Pills */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-neumorphic-bg shadow-neumorphic-inset text-[11px] font-bold">
              <button
                onClick={() => setSelectedModel('gemini-3.5-flash')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  selectedModel === 'gemini-3.5-flash'
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-indigo-600 dark:text-indigo-300'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                title="General Tasks (Default - balanced intelligence and speed)"
              >
                <span>🌟 3.5 Flash</span>
              </button>
              <button
                onClick={() => setSelectedModel('gemini-3.1-flash-lite')}
                className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  selectedModel === 'gemini-3.1-flash-lite'
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-emerald-600 dark:text-emerald-300'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Fast Tasks (Ultra-fast responses)"
              >
                <span>⚡ Lite</span>
              </button>
              <button
                onClick={() => setSelectedModel('gemini-3.1-pro-preview')}
                className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  selectedModel === 'gemini-3.1-pro-preview'
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-purple-600 dark:text-purple-300'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Complex Tasks (Deep engineering reasoning)"
              >
                <span>🧠 Pro</span>
              </button>
            </div>

            {/* Clear History Button */}
            <button
              onClick={() => setShowClearConfirm(true)}
              className="p-2 rounded-xl bg-neumorphic-bg shadow-neumorphic-outset hover:text-red-500 active:shadow-neumorphic-inset transition-all text-slate-400"
              title="Clear conversation history (စကားဝိုင်း အသစ်စတင်မည်)"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* TUTOR ROLE SELECTION TABS */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-2 shrink-0 scrollbar-none px-1">
          <span className="text-[10px] font-black uppercase text-slate-400 shrink-0">
            AI Role:
          </span>
          {TUTOR_ROLES.map(role => {
            const isSelected = selectedRoleId === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-neumorphic-bg shadow-neumorphic-outset text-indigo-600 dark:text-indigo-400 border border-indigo-500/30'
                    : 'text-slate-500 hover:text-slate-700 bg-neumorphic-bg'
                }`}
              >
                {role.icon === 'sensei' && <BookOpenIcon className="w-3.5 h-3.5 text-indigo-500" />}
                {role.icon === 'calc' && <CalculatorIcon className="w-3.5 h-3.5 text-amber-500" />}
                {role.icon === 'vocab' && <AcademicCapIcon className="w-3.5 h-3.5 text-emerald-500" />}
                {role.icon === 'strategy' && <ScaleIcon className="w-3.5 h-3.5 text-purple-500" />}
                <span>{role.titleJP}</span>
              </button>
            );
          })}
        </div>

        {/* Clear History Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-sm p-6 bg-neumorphic-bg rounded-3xl shadow-2xl space-y-4 border border-slate-300/30">
              <h3 className="text-base font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <TrashIcon className="w-5 h-5 text-red-500" />
                <span>စကားဝိုင်း အသစ်စတင်မည်လား?</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                လက်ရှိ စကားဝိုင်းမှတ်တမ်း အားလုံးကို ရှင်းလင်းပြီး Tekkotsu Sensei နှင့် စကားဝိုင်း အသစ်ကို ပြန်လည်စတင်ပါမည်။
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  မလုပ်တော့ပါ (Cancel)
                </button>
                <button
                  onClick={handleClearHistory}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md transition-all"
                >
                  ရှင်းလင်းမည် (Clear)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CHAT MESSAGES SCROLLABLE THREAD */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-neumorphic-bg shadow-neumorphic-inset space-y-4 mb-3 border border-slate-300/20">
          
          {messages.map(msg => {
            const isUser = msg.role === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 sm:gap-3.5 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {/* Bot Avatar */}
                {!isUser && (
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md text-xs">
                    <BotIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                )}

                {/* Message Bubble Card */}
                <div
                  className={`max-w-[88%] sm:max-w-[80%] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 text-xs sm:text-sm transition-all shadow-neumorphic-outset ${
                    isUser
                      ? 'bg-indigo-600 text-white shadow-indigo-500/20 rounded-br-sm'
                      : 'bg-neumorphic-bg text-slate-800 dark:text-slate-100 rounded-bl-sm border border-slate-200/40 dark:border-slate-800/60'
                  }`}
                >
                  {/* Sender badge & Model tag for Bot */}
                  {!isUser && (
                    <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-300/30 text-[10px] text-slate-400 font-mono">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        Tekkotsu Assistant
                      </span>
                      <span>
                        {msg.model || selectedModel}
                      </span>
                    </div>
                  )}

                  {/* Formatted Message Body */}
                  <div className={`space-y-1 ${isUser ? 'text-white font-medium' : ''}`}>
                    {isUser ? (
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}
                  </div>

                  {/* Bot Message Bottom Action Toolbar */}
                  {!isUser && (
                    <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-300/30 text-[11px] text-slate-400">
                      <span className="text-[10px]">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Audio speech button */}
                        <button
                          onClick={() => handleSpeak(msg.text, msg.id)}
                          className={`p-1.5 rounded-lg hover:text-indigo-600 active:scale-95 transition-all ${
                            speakingId === msg.id ? 'text-indigo-600 font-bold' : ''
                          }`}
                          title="Read Japanese aloud (အသံထွက် နားထောင်မည်)"
                        >
                          <SpeakerIcon className="w-3.5 h-3.5" />
                        </button>

                        {/* Copy text button */}
                        <button
                          onClick={() => handleCopy(msg.text, msg.id)}
                          className="p-1.5 rounded-lg hover:text-indigo-600 active:scale-95 transition-all"
                          title="Copy response (စာသား ကူးယူမည်)"
                        >
                          {copiedId === msg.id ? (
                            <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <CopyIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing Loading Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <BotIcon className="w-4 h-4 animate-pulse" />
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neumorphic-bg shadow-neumorphic-outset flex items-center gap-2 text-xs text-slate-500 border border-indigo-500/20">
                <LoadingSpinnerIcon className="w-4 h-4 text-indigo-600" />
                <span className="font-bold text-indigo-600 dark:text-indigo-400 animate-pulse">
                  Tekkotsu Assistant စဉ်းစားတွေးခေါ်နေပါသည်...
                </span>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMsg && (
            <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-500/30 text-xs text-red-600 flex items-center justify-between gap-2">
              <span>⚠️ {errorMsg}</span>
              <button
                onClick={() => handleSendMessage()}
                className="px-2.5 py-1 rounded-lg bg-red-600 text-white font-bold text-[10px] shrink-0"
              >
                ပြန်စမ်းမည် (Retry)
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ========================================================================= */}
        {/* QUICK SUGGESTIONS STARTER PILLS */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 shrink-0 scrollbar-none px-1">
          <span className="text-[10px] font-black uppercase text-slate-400 shrink-0 flex items-center gap-1">
            <LightBulbIcon className="w-3 h-3 text-amber-500" />
            <span>အမေးများသော မေးခွန်းများ:</span>
          </span>
          {activeRole.starters.map((starter, sIdx) => (
            <button
              key={sIdx}
              onClick={() => handleSendMessage(starter.prompt)}
              disabled={isLoading || isQuotaExceeded}
              className="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-neumorphic-bg shadow-neumorphic-outset hover:shadow-neumorphic-inset text-slate-600 dark:text-slate-300 transition-all shrink-0 hover:text-indigo-600 disabled:opacity-50"
            >
              <span>{starter.labelJP}</span>
              <span className="text-[10px] text-slate-400 ml-1">({starter.labelMY})</span>
            </button>
          ))}
        </div>

        {/* Daily Quota Limit Banner for regular users */}
        {isQuotaExceeded && (
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/40 text-xs text-amber-800 dark:text-amber-200 flex flex-col gap-2.5 mb-2 shrink-0">
            <div className="flex items-start gap-2.5">
              <LightBulbIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold">ယနေ့အတွက် သတ်မှတ်ထားသော အခမဲ့ AI မေးခွန်း ၁၀ ပုဒ် ကုန်ဆုံးသွားပါပြီ။</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  မနက်ဖြန်တွင် နောက်ထပ် ၁၀ ပုဒ် အလိုအလျောက် ပြန်လည်ရရှိပါမည်။ သို့မဟုတ် မိမိ၏ ကိုယ်ပိုင် Google Gemini API Key ကို ထည့်သွင်းကာ အကန့်အသတ်မရှိ (Unlimited) ဆက်လက် အသုံးပြုနိုင်ပါသည်။
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-amber-500/20 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  setKeyInput(customApiKey);
                  setShowKeyModal(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <KeyIcon className="w-3.5 h-3.5" />
                <span>🔑 ကိုယ်ပိုင် Gemini API Key ထည့်သွင်းမည်</span>
              </button>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-blue-600 dark:text-blue-400 underline font-semibold"
              >
                အခမဲ့ API Key ရယူရန် (Google AI Studio) ↗
              </a>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* INPUT FORM AREA */}
        {/* ========================================================================= */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-neumorphic-bg shadow-neumorphic-outset shrink-0 flex items-end gap-2 border border-indigo-500/10"
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputPrompt}
            onChange={handleInputChange}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder={
              isQuotaExceeded
                ? "ယနေ့အတွက် မေးခွန်း ၁၀ ပုဒ် ပြည့်သွားပါပြီ (မနက်ဖြန် ပြန်လည်မေးမြန်းနိုင်ပါသည်)..."
                : "မေးခွန်း သို့မဟုတ် သိလိုသည်များကို ရိုက်ထည့်ပါ... (Enter ဖြင့် ပို့နိုင်ပါသည်)"
            }
            disabled={isLoading || isQuotaExceeded}
            className="flex-1 bg-neumorphic-bg shadow-neumorphic-inset rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none resize-none max-h-36 min-h-[42px] leading-relaxed disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={isLoading || !inputPrompt.trim() || isQuotaExceeded}
            className={`p-3 rounded-xl sm:rounded-2xl transition-all shrink-0 flex items-center justify-center ${
              isLoading || !inputPrompt.trim() || isQuotaExceeded
                ? 'bg-slate-300/40 dark:bg-slate-800 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white shadow-md shadow-indigo-600/30'
            }`}
            title="Send message"
          >
            {isLoading ? (
              <LoadingSpinnerIcon className="w-5 h-5 text-white" />
            ) : (
              <SendIcon className="w-5 h-5" />
            )}
          </button>
        </form>

      </div>

      {/* ========================================================================= */}
      {/* CUSTOM GEMINI API KEY MODAL */}
      {/* ========================================================================= */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <KeyIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">Custom Gemini API Key</h3>
                  <p className="text-xs text-slate-400">Unlimited AI Assistant Access</p>
                </div>
              </div>
              <button
                onClick={() => setShowKeyModal(false)}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <p className="text-slate-300 leading-relaxed">
                သင့်တွင် Google AI Studio မှ ရယူထားသော Gemini API Key ရှိပါက ဤနေရာတွင် ထည့်သွင်းအသုံးပြုနိုင်ပါသည်။
                မိမိ Key ကို ထည့်ထားပါက နေ့စဉ် ၁၀ ပုဒ် ကန့်သတ်ချက် မရှိတော့ဘဲ စိတ်ကြိုက် အကန့်အသတ်မရှိ (Unlimited) ဆက်လက် မေးမြန်းနိုင်မည် ဖြစ်ပါသည်။
              </p>

              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                <span className="font-bold text-slate-300 block">Key လုံခြုံရေး:</span>
                <p className="text-[11px] text-slate-400">
                  သင်၏ Key ကို သင့်ဖုန်း/ကွန်ပျူတာ၏ Browser (LocalStorage) တွင်သာ သိမ်းဆည်းထားပြီး လုံခြုံစွာ တိုက်ရိုက် အသုံးပြုပါမည်။
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <label className="font-bold text-slate-300 block">
                  Gemini API Key (စတင်ပုံ: AIzaSy...)
                </label>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1">
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline font-semibold flex items-center gap-1"
                >
                  <span>Google AI Studio Key အခမဲ့ ရယူရန်</span>
                  <span>↗</span>
                </a>

                {customApiKey && (
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem(CUSTOM_KEY_STORAGE);
                      setCustomApiKey('');
                      setKeyInput('');
                      setShowKeyModal(false);
                    }}
                    className="text-red-400 hover:text-red-300 underline font-medium"
                  >
                    Remove Saved Key
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const trimmed = keyInput.trim();
                  if (trimmed) {
                    localStorage.setItem(CUSTOM_KEY_STORAGE, trimmed);
                    setCustomApiKey(trimmed);
                  } else {
                    localStorage.removeItem(CUSTOM_KEY_STORAGE);
                    setCustomApiKey('');
                  }
                  setShowKeyModal(false);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-indigo-600 hover:from-amber-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg"
              >
                Save & Activate Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChatbot;
