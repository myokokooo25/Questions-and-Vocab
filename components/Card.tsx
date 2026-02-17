
import React, { useState, useEffect } from 'react';
import { StudyCardData } from '../types';
import { BookmarkIcon, SpeakerIcon, LoadingSpinnerIcon, SparkleIcon, PencilIcon, AcademicCapIcon, CheckCircleSolidIcon, XCircleSolidIcon, LightBulbIcon, FlagIcon, BookOpenIcon } from './Icons';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';
import JapaneseText from './JapaneseText';
import { GoogleGenAI } from "@google/genai";
import { vocabularyData } from '../data/vocab';
import ReportModal from './ReportModal';

// Helper function to prepare text for TTS by removing furigana annotations.
const stripHtml = (html: string): string => {
  const textWithoutFurigana = html.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');
  const doc = new DOMParser().parseFromString(textWithoutFurigana, 'text/html');
  return doc.body.textContent || "";
};

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
    } catch (e) {}
};

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
  mode: 'study';
  onOptionSelect?: (optionId: number) => void;
  selectedOptionId?: number;
  isSubmitted?: boolean;
}

const Card: React.FC<CardProps> = ({ 
    data, 
    onKanjiClick,
    onOptionSelect,
    selectedOptionId,
    isSubmitted = false,
}) => {
  const { language } = useLanguage();
  const { bookmarkedIds, toggleBookmark } = useProgress(); // Use new progress hook
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
      }, 5000);
    } else {
      setShowWaitMessage(false);
    }
    return () => clearTimeout(timer);
  }, [isAiLoading]);
  
  const handleGetHint = async () => {
    if (isHintLoading || hint) return;
    setIsHintLoading(true);
    setHintError(null);

    const prompt = `expert teacher hint for MC question. Burmese only, 1 sentence, don't reveal answer. Q: ${data.questionMY}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      setHint(response.text);
    } catch (err) {
      setHintError("Error generating hint.");
    } finally {
      setIsHintLoading(false);
    }
  };

  const handleExplainAgain = async () => {
    setIsAiLoading(true);
    setAiError(null);
    setAiExplanation(null);

    const correctOption = data.options.find(opt => opt.id === data.correctOptionId);
    const prompt = `Simpler Burmese explanation for structural engineering. Q: ${data.questionMY}, Correct: ${correctOption?.textMY}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      setAiExplanation(response.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />'));
    } catch (err) {
      setAiError("Error generating AI explanation.");
    } finally {
      setIsAiLoading(false);
    }
  };


  const handlePlayAudio = async (textToSpeak: string, id: string) => {
    if (audioLoadingId) return;
    setAudioLoadingId(id);
    const cleanText = stripHtml(textToSpeak);
    if (!cleanText.trim()) { setAudioLoadingId(null); return; }

    try {
        const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        if (outputAudioContext.state === 'suspended') await outputAudioContext.resume();
        const cachedData = await getCachedAudio(cleanText);
        let pcmData: Uint8Array;
        if (cachedData) {
             pcmData = cachedData;
        } else {
             const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-tts",
                contents: [{ parts: [{ text: cleanText }] }],
                config: {
                    responseModalities: ['AUDIO'],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
                },
            });
            const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
            if (!base64Audio) throw new Error("No audio data");
            pcmData = decode(base64Audio);
            await saveCachedAudio(cleanText, pcmData);
        }
        const audioBuffer = await decodeAudioData(pcmData, outputAudioContext, 24000, 1);
        const source = outputAudioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(outputAudioContext.destination);
        source.start();
    } catch (error) {
    } finally {
        setAudioLoadingId(null);
    }
  };
  
  const AudioButton = ({ text, id }: { text: string, id: string }) => (
    <button
      onClick={(e) => { e.stopPropagation(); handlePlayAudio(text, id); }}
      disabled={audioLoadingId !== null}
      className="p-2 text-slate-400 rounded-full shrink-0 shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all hover:text-blue-500 disabled:opacity-50"
      aria-label="Play audio"
    >
      {audioLoadingId === id ? <LoadingSpinnerIcon className="w-4 h-4 text-blue-500" /> : <SpeakerIcon className="w-4 h-4" />}
    </button>
  );

  return (
    <div className="bg-neumorphic-bg rounded-[2.5rem] shadow-neumorphic-outset overflow-hidden">
      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} contextInfo={`Question ${data.id}`} />
      <div className="p-8">
        <div className='flex items-start justify-between mb-8'>
            <div className="flex-1 pr-6">
                <p className="mb-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Question {data.id}</p>
                 {language === 'my' ? (
                  <>
                    <p className="text-xl font-bold leading-relaxed text-slate-700">{data.questionMY}</p>
                    <div className="flex items-center gap-3 mt-4 w-full">
                      <div className="flex-1 font-mono text-base text-slate-500 bg-neumorphic-bg shadow-neumorphic-inset px-6 py-4 rounded-2xl leading-relaxed">
                        <JapaneseText text={data.questionJP} onKanjiClick={onKanjiClick} />
                      </div>
                      <AudioButton text={data.questionJP} id={`q-${data.id}`} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mb-4 w-full">
                      <div className="flex-1 font-mono text-xl font-bold text-slate-700 bg-neumorphic-bg shadow-neumorphic-inset px-8 py-6 rounded-[2rem] leading-loose">
                        <JapaneseText text={data.questionJP} onKanjiClick={onKanjiClick} />
                      </div>
                      <AudioButton text={data.questionJP} id={`q-${data.id}`} />
                    </div>
                     {language === 'jp' && (
                        <p className="text-lg font-bold leading-relaxed text-slate-500 italic ml-2">{data.questionMY}</p>
                    )}
                  </>
                )}
            </div>
            <div className="flex flex-col gap-3">
                 <button 
                    onClick={() => toggleBookmark(data.id)}
                    className={`p-3.5 rounded-full transition-all duration-300 ${isBookmarked ? 'shadow-neumorphic-inset text-blue-600 bg-blue-50/10' : 'shadow-neumorphic-outset text-slate-400 hover:text-blue-500'}`}
                >
                  <BookmarkIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={handleGetHint}
                    disabled={isHintLoading || !!hint || isSubmitted}
                    className={`p-3.5 rounded-full transition-all duration-300 disabled:opacity-30 ${hint ? 'shadow-neumorphic-inset text-amber-600 bg-amber-50/10' : 'shadow-neumorphic-outset text-slate-400 hover:text-amber-500'}`}
                >
                    {isHintLoading ? <LoadingSpinnerIcon className="w-6 h-6" /> : <LightBulbIcon className="w-6 h-6" />}
                </button>
                <button
                    onClick={() => setIsReportOpen(true)}
                    className="p-3.5 rounded-full shadow-neumorphic-outset text-slate-400 hover:text-red-500 transition-all duration-300 active:shadow-neumorphic-inset"
                >
                    <FlagIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
        
        { (hint || hintError) && (
          <div className="mb-8 p-6 rounded-[2rem] bg-neumorphic-bg shadow-neumorphic-inset border border-amber-400/20">
            <h4 className="font-black text-amber-600 flex items-center uppercase text-xs tracking-widest mb-2">
              <LightBulbIcon className="w-4 h-4 mr-2" /> အကူအညီ (Hint)
            </h4>
            {hint && <div className="text-sm font-bold text-slate-600 italic leading-relaxed">{hint}</div>}
            {hintError && <div className="text-sm font-bold text-red-500">{hintError}</div>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {data.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = isSubmitted && option.id === data.correctOptionId;
            const isIncorrect = isSelected && isSubmitted && !isCorrect;

            let cardStyle = 'shadow-neumorphic-outset';
            if (isSelected) cardStyle = 'shadow-neumorphic-inset bg-slate-50/5';
            
            const textStyle = isCorrect ? 'text-green-600' : isIncorrect ? 'text-red-600' : 'text-slate-600';

            return (
              <button
                key={option.id}
                onClick={!isSubmitted ? () => onOptionSelect && onOptionSelect(option.id) : undefined}
                disabled={isSubmitted}
                className={`w-full p-6 rounded-[2rem] transition-all duration-300 flex items-start justify-between text-left ${cardStyle} ${textStyle} group`}
              >
                  <div className="flex-1 pr-6">
                     {language === 'my' ? (
                        <>
                            <p className="font-black text-lg mb-1">{option.textMY}</p>
                            <div className="flex items-center gap-3 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                <p className="font-mono text-sm font-bold">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </p>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <p className="font-mono font-black text-lg">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </p>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                             {language === 'jp' && (
                                <p className="mt-2 text-sm font-bold opacity-60 italic">{option.textMY}</p>
                            )}
                        </>
                    )}
                  </div>
                  {isSubmitted && (
                    <div className="pt-1">
                        {isCorrect && <CheckCircleSolidIcon className="w-8 h-8 text-green-500 drop-shadow-sm"/>}
                        {isIncorrect && <XCircleSolidIcon className="w-8 h-8 text-red-500 drop-shadow-sm"/>}
                    </div>
                  )}
              </button>
            )
          })}
        </div>
        
        {language !== 'jp-only' && (
          <div className="pt-10 mt-4">
            <div className="flex mb-6 p-2 bg-neumorphic-bg rounded-[2rem] shadow-neumorphic-inset">
              <button
                onClick={() => setActiveTab('explanation')}
                className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-black uppercase tracking-widest rounded-[1.5rem] transition-all ${activeTab === 'explanation' ? 'text-slate-700 shadow-neumorphic-outset bg-neumorphic-bg' : 'text-slate-400'}`}
              >
                <PencilIcon className="w-5 h-5 mr-2" /> Explanation
              </button>
              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-black uppercase tracking-widest rounded-[1.5rem] transition-all ${activeTab === 'vocab' ? 'text-slate-700 shadow-neumorphic-outset bg-neumorphic-bg' : 'text-slate-400'}`}
              >
                <AcademicCapIcon className="w-5 h-5 mr-2" /> Vocabulary
              </button>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-neumorphic-bg shadow-neumorphic-inset min-h-[150px]">
              {activeTab === 'explanation' && (
                <>
                  {isSubmitted ? (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <h3 className="text-xl font-black text-slate-700 mb-6 border-b border-slate-300/30 pb-4">
                        <JapaneseText text={data.explanation.titleMY} onKanjiClick={onKanjiClick} />
                      </h3>
                      <div className="space-y-6 text-base font-bold text-slate-600">
                        <div className="flex gap-4">
                            <span className="shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-black">!</span>
                            <p className="pt-1"><JapaneseText text={data.explanation.reasonMY} onKanjiClick={onKanjiClick} /></p>
                        </div>
                        <div className="flex gap-4">
                            <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-black">★</span>
                            <p className="pt-1 italic"><JapaneseText text={data.explanation.memoryTipMY} onKanjiClick={onKanjiClick} /></p>
                        </div>
                      </div>
                      <div className="mt-10">
                        <button 
                            onClick={handleExplainAgain}
                            disabled={isAiLoading}
                            className="flex items-center justify-center w-full py-4 text-sm font-black uppercase tracking-[0.2em] text-blue-600 bg-neumorphic-bg rounded-[1.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-50"
                        >
                            {isAiLoading ? <LoadingSpinnerIcon className="w-5 h-5 mr-2 animate-spin" /> : <SparkleIcon className="w-5 h-5 mr-2" />}
                            {isAiLoading ? 'Thinking...' : 'AI Simpler explanation'}
                        </button>
                      </div>
                      {aiExplanation && (
                          <div className="mt-6 p-6 rounded-3xl bg-neumorphic-bg shadow-neumorphic-inset border-l-4 border-blue-500 animate-in zoom-in duration-300">
                              <h4 className="font-black text-blue-600 flex items-center uppercase text-xs tracking-widest mb-3"><SparkleIcon className="w-4 h-4 mr-2" /> AI Clarification</h4>
                              <div className="text-sm font-bold text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: aiExplanation }}></div>
                          </div>
                      )}
                    </div>
                  ) : (
                      <div className="flex flex-col items-center justify-center py-10 opacity-40">
                          <BookOpenIcon className="w-12 h-12 mb-2 text-slate-300" />
                          <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">Answer to see explanation</p>
                      </div>
                  )}
                </>
              )}
              
              {activeTab === 'vocab' && (
                  <div className="animate-in fade-in duration-500">
                  {vocabData && vocabData.length > 0 ? (
                      <div className="overflow-x-auto">
                      <table className="w-full text-left text-slate-600">
                          <thead className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">
                          <tr>
                              <th className="px-4 py-3">Term</th>
                              <th className="px-4 py-3">Meaning</th>
                          </tr>
                          </thead>
                          <tbody className="font-bold text-sm">
                          {vocabData.map((item, index) => (
                              <tr key={index} className="border-t border-slate-300/20 group">
                              <td className="px-4 py-4 font-mono text-slate-700 group-hover:text-blue-600 transition-colors">
                                <JapaneseText text={item.jp} onKanjiClick={onKanjiClick} />
                              </td>
                              <td className="px-4 py-4">{item.my}</td>
                              </tr>
                          ))}
                          </tbody>
                      </table>
                      </div>
                  ) : (
                      <div className="text-center py-10 opacity-40">
                          <AcademicCapIcon className="w-12 h-12 mb-2 text-slate-300" />
                          <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">No vocabulary for this item</p>
                      </div>
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
