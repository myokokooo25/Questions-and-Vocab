
import React, { useState, useEffect } from 'react';
import { StudyCardData } from '../types';
import { BookmarkIcon, SpeakerIcon, LoadingSpinnerIcon, SparkleIcon, PencilIcon, AcademicCapIcon, CheckCircleSolidIcon, XCircleSolidIcon, LightBulbIcon, FlagIcon } from './Icons';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLanguage } from '../contexts/LanguageContext';
import JapaneseText from './JapaneseText';
import { GoogleGenAI } from "@google/genai";
import { vocabularyData } from '../data/vocab';
import ReportModal from './ReportModal';

// Helper function to prepare text for TTS by removing furigana annotations.
const stripHtml = (html: string): string => {
  // This regex finds ruby tags and replaces the entire tag with only the base text.
  // e.g., for <ruby>漢字<rt>かんじ</rt></ruby>, it becomes "漢字".
  const textWithoutFurigana = html.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');
  
  // Strip any other remaining HTML tags that might exist.
  const doc = new DOMParser().parseFromString(textWithoutFurigana, 'text/html');
  return doc.body.textContent || "";
};

// Instantiate the AI client once at the module level.
// This improves performance and reliability by reusing the same client instance.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// --- IndexedDB Caching Logic ---
const DB_NAME = 'tts-cache';
const STORE_NAME = 'audios';

const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

const getCachedAudio = async (text: string): Promise<Uint8Array | null> => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(text);
            request.onsuccess = () => resolve(request.result ? (request.result as Uint8Array) : null);
            request.onerror = () => reject(request.error);
        });
    } catch (e) {
        console.error("Error reading from cache", e);
        return null;
    }
};

const saveCachedAudio = async (text: string, data: Uint8Array): Promise<void> => {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(data, text);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    } catch (e) {
        console.error("Error saving to cache", e);
    }
};
// -------------------------------

// Helper functions for Audio Decoding
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

interface CardProps {
  data: StudyCardData;
  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>) => void;
  mode: 'study'; // Mode is now fixed to 'study'
  onOptionSelect?: (optionId: number) => void;
  selectedOptionId?: number;
  isSubmitted?: boolean;
}

const Card: React.FC<CardProps> = ({ 
    data, 
    onKanjiClick,
    mode,
    onOptionSelect,
    selectedOptionId,
    isSubmitted = false,
}) => {
  const { language } = useLanguage();
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarkedIds.has(data.id);
  
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [showWaitMessage, setShowWaitMessage] = useState(false);

  const [activeTab, setActiveTab] = useState<'explanation' | 'vocab'>('explanation');
  const vocabData = vocabularyData[data.id] || [];

  const [hint, setHint] = useState<string | null>(null);
  const [isHintLoading, setIsHintLoading] = useState(false);
  const [hintError, setHintError] = useState<string | null>(null);
  
  const [audioLoadingId, setAudioLoadingId] = useState<string | null>(null);

  const [isReportOpen, setIsReportOpen] = useState(false);

  useEffect(() => {
    setAiExplanation(null);
    setIsAiLoading(false);
    setAiError(null);
    setActiveTab('explanation');
    setHint(null);
    setIsHintLoading(false);
    setHintError(null);
    setAudioLoadingId(null);
    setIsReportOpen(false);
  }, [data.id]);

  useEffect(() => {
    let timer: number;
    if (isAiLoading) {
      timer = window.setTimeout(() => {
        setShowWaitMessage(true);
      }, 5000); // 5 seconds
    } else {
      setShowWaitMessage(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isAiLoading]);
  
  const handleGetHint = async () => {
    if (isHintLoading || hint) return;

    setIsHintLoading(true);
    setHintError(null);

    const prompt = `
      You are an expert teacher for Japanese structural engineering exams.
      A user has asked for a hint for the following multiple-choice question.

      Your task is to provide a single, simple sentence in Burmese that gives a hint about the core concept needed to solve the problem.
      - DO NOT reveal the answer.
      - DO NOT mention the correct option number.
      - DO NOT explain why other options are wrong.
      - Just provide one guiding sentence in Burmese to help the user think in the right direction.

      **Question Details:**
      **Question (JP):** ${stripHtml(data.questionJP)}
      **Question (MY):** ${data.questionMY}

      **Options:**
      ${data.options.map(opt => `- (${opt.id}) ${stripHtml(opt.textJP)} / ${opt.textMY}`).join('\n')}

      **Correct Option ID:** ${data.correctOptionId}

      **Your Hint (one simple sentence in Burmese):**
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setHint(response.text);

    } catch (err) {
      console.error("Error fetching AI hint:", err);
      setHintError("Sorry, an error occurred while generating the hint. Please try again.");
    } finally {
      setIsHintLoading(false);
    }
  };


  const handleExplainAgain = async () => {
    setIsAiLoading(true);
    setAiError(null);
    setAiExplanation(null);

    const correctOption = data.options.find(opt => opt.id === data.correctOptionId);
    if (!correctOption) {
      setAiError("Correct option details could not be found.");
      setIsAiLoading(false);
      return;
    }

    const prompt = `
      You are a helpful AI assistant for Japanese structural engineering. A user didn't understand the original explanation for a quiz question.
      Your task is to explain the concept again in a simpler way in Burmese.

      **Instructions:**
      1.  **Start your entire response with this exact Burmese phrase, without any changes or additions before it:** "မင်္ဂလာပါ ဒီမေးခွန်းနဲ့ ပတ်သက်ပြီး နားမလည်တာကို ကျွန်တော်က ပိုရှင်းလင်းအောင် ထပ်ရှင်းပြပေးပါမယ်နော်။"
      2.  After the initial phrase, provide a clear explanation focusing on *why the correct answer is right* and *why the other options are wrong*.
      3.  The entire response must be in Burmese.
      4.  Use simple Markdown for formatting (e.g., bolding with **text**, lists with -).

      **Question Details:**
      **Question (JP):** ${stripHtml(data.questionJP)}
      **Question (MY):** ${data.questionMY}

      **Options:**
      ${data.options.map(opt => `- (${opt.id}) ${stripHtml(opt.textJP)} / ${opt.textMY}`).join('\n')}

      **Correct Answer:** (${data.correctOptionId}) ${stripHtml(correctOption.textJP)} / ${correctOption.textMY}

      **Original Explanation:** ${stripHtml(data.explanation.reasonMY)}

      **Your New, Simpler Explanation in Burmese:**
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      
      let formattedText = response.text;
      // Basic markdown replacement
      formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
      formattedText = formattedText.replace(/\n/g, '<br />'); // Newlines
      
      setAiExplanation(formattedText);

    } catch (err) {
      console.error("Error fetching AI explanation:", err);
      setAiError("Sorry, an error occurred while generating the explanation. Please try again.");
    } finally {
      setIsAiLoading(false);
    }
  };


  const handlePlayAudio = async (textToSpeak: string, id: string) => {
    if (audioLoadingId) return; // Prevent multiple clicks
    setAudioLoadingId(id);

    const cleanText = stripHtml(textToSpeak);
    if (!cleanText.trim()) {
        setAudioLoadingId(null);
        return;
    }

    try {
        // Create context only on user gesture to ensure playback
        const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        
        if (outputAudioContext.state === 'suspended') {
            await outputAudioContext.resume();
        }

        // Check cache first
        const cachedData = await getCachedAudio(cleanText);
        let pcmData: Uint8Array;

        if (cachedData) {
             // Hit cache
             pcmData = cachedData;
        } else {
             // Miss cache - fetch from AI
             const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-tts",
                contents: [{ parts: [{ text: cleanText }] }],
                config: {
                    responseModalities: ['AUDIO'],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Kore' is good for clear reading
                        },
                    },
                },
            });

            const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
            if (!base64Audio) throw new Error("No audio data received from AI");
            
            pcmData = decode(base64Audio);
            // Save to cache
            await saveCachedAudio(cleanText, pcmData);
        }

        const audioBuffer = await decodeAudioData(
            pcmData,
            outputAudioContext,
            24000,
            1,
        );
        const source = outputAudioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(outputAudioContext.destination);
        source.start();

    } catch (error) {
        console.error("Error playing AI audio:", error);
    } finally {
        setAudioLoadingId(null);
    }
  };
  
  const AudioButton = ({ text, id }: { text: string, id: string }) => (
    <button
      onClick={(e) => { e.stopPropagation(); handlePlayAudio(text, id); }}
      disabled={audioLoadingId !== null}
      className="p-1.5 text-slate-400 rounded-full shrink-0 shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all hover:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Play audio"
      title="Click to listen"
    >
      {audioLoadingId === id ? (
          <LoadingSpinnerIcon className="w-4 h-4 text-blue-500" />
      ) : (
          <SpeakerIcon className="w-4 h-4" />
      )}
    </button>
  );

  return (
    <div className="bg-neumorphic-bg rounded-2xl shadow-neumorphic-outset">
      <ReportModal 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
        contextInfo={`Question ${data.id}: ${data.questionMY.substring(0, 30)}...`} 
      />
      <div className="p-6">
        <div className='flex items-start justify-between mb-6'>
            <div className="flex-1 pr-4">
                <p className="mb-1 text-sm font-semibold text-slate-500">Question {data.id}</p>
                 {language === 'my' ? (
                  <>
                    <p className="text-lg font-semibold leading-relaxed text-slate-700">{data.questionMY}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="font-mono text-base text-slate-500">
                        <JapaneseText text={data.questionJP} onKanjiClick={onKanjiClick} />
                      </p>
                      <AudioButton text={data.questionJP} id={`q-${data.id}`} />
                    </div>
                  </>
                ) : ( // Covers 'jp' and 'jp-only'
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-mono text-lg text-slate-700">
                        <JapaneseText text={data.questionJP} onKanjiClick={onKanjiClick} />
                      </p>
                      <AudioButton text={data.questionJP} id={`q-${data.id}`} />
                    </div>
                     {language === 'jp' && (
                        <p className="text-base font-semibold leading-relaxed text-slate-500">{data.questionMY}</p>
                    )}
                  </>
                )}
            </div>
            <div className="flex items-center -mt-2 -mr-2 gap-1">
                <button
                    onClick={() => setIsReportOpen(true)}
                    className="p-2.5 rounded-full shadow-neumorphic-outset text-slate-400 hover:text-red-500 transition-all duration-200 active:shadow-neumorphic-inset"
                    aria-label="Report an error"
                    title="Report error in this question"
                >
                    <FlagIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={handleGetHint}
                    disabled={isHintLoading || !!hint || isSubmitted}
                    className={`p-2.5 rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${hint ? 'shadow-neumorphic-inset text-blue-600' : 'shadow-neumorphic-outset text-slate-400 hover:text-blue-600'}`}
                    aria-label="Get a hint"
                    title="Get a hint"
                >
                    {isHintLoading ? <LoadingSpinnerIcon className="w-6 h-6" /> : <LightBulbIcon className="w-6 h-6" />}
                </button>
                 <button 
                    onClick={() => toggleBookmark(data.id)}
                    className={`p-2.5 rounded-full transition-all duration-200 ${isBookmarked ? 'shadow-neumorphic-inset text-slate-700' : 'shadow-neumorphic-outset text-slate-400'}`}
                    aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                    title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                >
                  <BookmarkIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
        
        { (hint || hintError) && (
          <div className="mb-6 p-4 rounded-lg bg-neumorphic-bg shadow-neumorphic-inset">
            <h4 className="font-semibold text-slate-600 flex items-center">
              <LightBulbIcon className="w-5 h-5 mr-2 text-blue-600" /> အကူအညီ (Hint)
            </h4>
            {hint && <div className="mt-2 text-sm text-slate-500">{hint}</div>}
            {hintError && <div className="mt-2 text-sm text-red-500">{hintError}</div>}
          </div>
        )}

        <div className={`space-y-4`}>
          {data.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = isSubmitted && option.id === data.correctOptionId;
            const isIncorrect = isSelected && isSubmitted && !isCorrect;

            let shadowClass = 'shadow-neumorphic-outset';
            if (isSelected) {
              shadowClass = 'shadow-neumorphic-inset';
            }
            
            const textColorClass = isCorrect ? 'text-green-600' : isIncorrect ? 'text-red-600' : 'text-neumorphic-text';
            const cursorClass = isSubmitted ? 'cursor-default' : 'cursor-pointer';

            return (
              <div
                key={option.id}
                onClick={!isSubmitted ? () => onOptionSelect && onOptionSelect(option.id) : undefined}
                className={`w-full p-4 rounded-lg transition-all duration-200 flex items-start justify-between text-left ${shadowClass} ${cursorClass} ${textColorClass}`}
              >
                  <div className="flex-1 pr-4">
                     {language === 'my' ? (
                        <>
                            <p className="font-medium">{option.textMY}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="font-mono text-sm text-slate-500">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </p>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                        </>
                    ) : ( // Covers 'jp' and 'jp-only'
                        <>
                            <div className="flex items-center gap-2">
                                <p className="font-mono font-medium">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </p>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                             {language === 'jp' && (
                                <p className="mt-1 text-sm text-slate-500">{option.textMY}</p>
                            )}
                        </>
                    )}
                  </div>
                  {isSubmitted && (
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        {isCorrect && <CheckCircleSolidIcon className="w-6 h-6 text-green-500"/>}
                        {isIncorrect && <XCircleSolidIcon className="w-6 h-6 text-red-500"/>}
                    </div>
                  )}
              </div>
            )
          })}
        </div>
        
        {language !== 'jp-only' && (
          <div className="pt-6 mt-6">
            <div className="flex mb-4 p-1 bg-neumorphic-bg rounded-lg shadow-neumorphic-inset">
              <button
                onClick={() => setActiveTab('explanation')}
                className={`flex-1 flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'explanation' ? 'text-slate-700 shadow-neumorphic-outset' : 'text-slate-500'}`}
              >
                <PencilIcon className="w-5 h-5 mr-2" /> ရှင်းလင်းချက်
              </button>
              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex-1 flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'vocab' ? 'text-slate-700 shadow-neumorphic-outset' : 'text-slate-500'}`}
              >
                <AcademicCapIcon className="w-5 h-5 mr-2" /> ဝေါဟာရ
              </button>
            </div>

            <div className="p-4 rounded-lg bg-neumorphic-bg shadow-neumorphic-inset">
              {activeTab === 'explanation' && (
                <>
                  {isSubmitted ? (
                    <div>
                      <h3 className="text-lg font-semibold text-slate-700">
                        <JapaneseText text={data.explanation.titleMY} onKanjiClick={onKanjiClick} />
                      </h3>
                      <div className="mt-4 space-y-4 text-sm text-slate-600">
                        <p><strong className="font-semibold text-red-600">အကြောင်းရင်း:</strong> <JapaneseText text={data.explanation.reasonMY} onKanjiClick={onKanjiClick} /></p>
                        <p><strong className="font-semibold text-blue-600">မှတ်သားရန်:</strong> <JapaneseText text={data.explanation.memoryTipMY} onKanjiClick={onKanjiClick} /></p>
                      </div>
                      <div className="mt-6">
                        <button 
                            onClick={handleExplainAgain}
                            disabled={isAiLoading}
                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-neumorphic-text bg-neumorphic-bg rounded-lg shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-70 disabled:cursor-wait"
                        >
                            {isAiLoading ? <LoadingSpinnerIcon className="w-5 h-5 mr-2" /> : <SparkleIcon className="w-5 h-5 mr-2" />}
                            {isAiLoading ? 'စဉ်းစားနေသည်...' : '✨ ရှင်းလင်းချက်အသစ်တောင်းမည်'}
                        </button>
                      </div>

                      {isAiLoading && showWaitMessage && (
                        <p className="mt-4 text-sm text-center text-slate-500">
                          စောင့်ရတာ အရမ်းကြာသွားရင် တောင်းပန်ပါတယ်...
                        </p>
                      )}
                      
                      {aiError && <div className="mt-4 p-4 text-center text-red-600 bg-red-100 rounded-lg">{aiError}</div>}
                      {aiExplanation && (
                          <div className="mt-4 p-4 rounded-lg bg-neumorphic-bg shadow-neumorphic-inset">
                              <h4 className="font-semibold text-slate-600 flex items-center"><SparkleIcon className="w-5 h-5 mr-2" /> AI မှ ရှင်းလင်းချက်</h4>
                              <div className="mt-2 space-y-2 text-sm text-slate-500" dangerouslySetInnerHTML={{ __html: aiExplanation }}></div>
                          </div>
                      )}
                    </div>
                  ) : (
                      <div className="text-center py-4">
                          <p className="text-slate-500">ရှင်းလင်းချက်ကို ကြည့်ရှုရန် အဖြေတစ်ခုကို ရွေးချယ်ပေးပါ။</p>
                      </div>
                  )}
                </>
              )}
              
              {activeTab === 'vocab' && (
                  <div>
                  {vocabData && vocabData.length > 0 ? (
                      <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-slate-600">
                          <thead className="text-xs text-slate-500 uppercase">
                          <tr>
                              <th scope="col" className="px-4 py-2">Japanese</th>
                              <th scope="col" className="px-4 py-2">Burmese</th>
                              <th scope="col" className="px-4 py-2">Type</th>
                          </tr>
                          </thead>
                          <tbody>
                          {vocabData.map((item, index) => (
                              <tr key={index} className="border-t border-neumorphic-shadow-dark/20">
                              <td className="px-4 py-2 font-mono"><JapaneseText text={item.jp} onKanjiClick={onKanjiClick} /></td>
                              <td className="px-4 py-2">{item.my}</td>
                              <td className="px-4 py-2 text-slate-500">{item.type}</td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                      </div>
                  ) : (
                      <p className="text-center text-slate-500 py-4">ဤမေးခွန်းအတွက် ဝေါဟာရ မရှိပါ။</p>
                  )}
                  </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
