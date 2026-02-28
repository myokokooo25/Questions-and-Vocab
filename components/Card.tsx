
import React, { useState, useEffect } from 'react';
import { StudyCardData } from '../types';
import { BookmarkIcon, SpeakerIcon, LoadingSpinnerIcon, SparkleIcon, PencilIcon, AcademicCapIcon, CheckCircleSolidIcon, XCircleSolidIcon, LightBulbIcon, FlagIcon, BookOpenIcon } from './Icons';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';
import JapaneseText from './JapaneseText';
import { vocabularyData } from '../data/vocab';
import ReportModal from './ReportModal';
import { GoogleGenAI } from "@google/genai";
import { supabase } from '../lib/supabase';

// Helper function to safely get the API key in both AI Studio and Vercel/GitHub Pages environments
const getApiKey = () => {
  // 1. Try AI Studio injected environment variables
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
    if (process.env.API_KEY) return process.env.API_KEY;
  }
  // 2. Try Vite environment variables (for Vercel/GitHub Pages)
  return import.meta.env.VITE_GEMINI_API_KEY;
};

// Helper function to prepare text for TTS by removing furigana annotations.
const stripHtml = (html: string): string => {
  const textWithoutFurigana = html.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');
  const doc = new DOMParser().parseFromString(textWithoutFurigana, 'text/html');
  return doc.body.textContent || "";
};

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
  const { bookmarkedIds, toggleBookmark } = useProgress();
  const isBookmarked = bookmarkedIds.has(data.id);
  
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'explanation' | 'vocab'>('explanation');
  const vocabData = vocabularyData[data.id] || [];

  const [hint, setHint] = useState<string | null>(null);
  const [isHintLoading, setIsHintLoading] = useState(false);
  const [hintError, setHintError] = useState<string | null>(null);
  
  const [audioPlayingId, setAudioPlayingId] = useState<string | null>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);

  // Clear states when question changes
  useEffect(() => {
    setAiExplanation(null);
    setIsAiLoading(false);
    setAiError(null);
    setHint(null);
    setIsHintLoading(false);
    setHintError(null);
    setAudioPlayingId(null);
    // Cancel any ongoing speech when card changes
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [data.id]);

  const handleGetHint = async () => {
    if (isHintLoading || hint) return;
    setIsHintLoading(true);
    setHintError(null);

    try {
      const apiKey = getApiKey();
      let responseText = '';
      const prompt = `You are an expert structural engineering teacher. Give a very short hint in Burmese for this question (max 1 sentence). Do not reveal the answer directly. Question: ${data.questionMY}`;

      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
        });
        responseText = response.text || '';
      } else {
        // Fallback to Supabase Edge Function
        const { data: funcData, error } = await supabase.functions.invoke('ask-gemini', {
          body: { prompt }
        });
        if (error) throw error;
        responseText = funcData?.text || '';
      }

      if (!responseText) throw new Error("No response from AI");
      setHint(responseText);
    } catch (err: any) {
      setHintError("Hint ရယူ၍မရပါ။");
      console.error("AI Error:", err);
    } finally {
      setIsHintLoading(false);
    }
  };

  const handleExplainAgain = async () => {
    setIsAiLoading(true);
    setAiError(null);
    setAiExplanation(null);

    const correctOption = data.options.find(opt => opt.id === data.correctOptionId);
    const prompt = `Explain why this is the correct answer in simple Burmese for a student. 
    Question: ${data.questionMY}
    Correct Answer: ${correctOption?.textMY}
    Please use bullet points for clarity and make it easy to understand for a steel structure engineering student.`;

    try {
      const apiKey = getApiKey();
      let responseText = '';

      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
        });
        responseText = response.text || '';
      } else {
        // Fallback to Supabase Edge Function
        const { data: funcData, error } = await supabase.functions.invoke('ask-gemini', {
          body: { prompt }
        });
        if (error) throw error;
        responseText = funcData?.text || '';
      }

      if (!responseText) throw new Error("No response from AI");
      
      // Basic formatting: bold and newlines
      const formatted = responseText
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
        
      setAiExplanation(formatted);
    } catch (err: any) {
      setAiError("AI ရှင်းလင်းချက် ရယူ၍မရပါ။");
      console.error("AI Error:", err);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handlePlayAudio = (textToSpeak: string, id: string) => {
    if (!('speechSynthesis' in window)) return;

    // Stop current speech
    window.speechSynthesis.cancel();

    if (audioPlayingId === id) {
      setAudioPlayingId(null);
      return;
    }

    const cleanText = stripHtml(textToSpeak);
    if (!cleanText.trim()) return;

    setAudioPlayingId(id);

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9; 
    
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
    if (jaVoice) utterance.voice = jaVoice;

    utterance.onend = () => setAudioPlayingId(null);
    utterance.onerror = () => setAudioPlayingId(null);

    window.speechSynthesis.speak(utterance);
  };
  
  const AudioButton = ({ text, id }: { text: string, id: string }) => (
    <button
      onClick={(e) => { e.stopPropagation(); handlePlayAudio(text, id); }}
      className={`p-2 rounded-full shrink-0 shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all ${audioPlayingId === id ? 'text-blue-500 shadow-neumorphic-inset' : 'text-slate-400 hover:text-blue-500'}`}
      aria-label="Play audio"
    >
      <SpeakerIcon className="w-4 h-4" />
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
          {(data.options || []).map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = isSubmitted && option.id === data.correctOptionId;
            const isIncorrect = isSelected && isSubmitted && !isCorrect;

            let cardStyle = 'shadow-neumorphic-outset';
            if (isSelected) cardStyle = 'shadow-neumorphic-inset bg-slate-50/5';
            
            const textStyle = isCorrect ? 'text-green-600' : isIncorrect ? 'text-red-600' : 'text-slate-600';

            return (
              <div
                key={option.id}
                onClick={!isSubmitted ? () => onOptionSelect && onOptionSelect(option.id) : undefined}
                className={`w-full p-6 rounded-[2rem] transition-all duration-300 flex items-start justify-between text-left ${cardStyle} ${textStyle} group ${!isSubmitted ? 'cursor-pointer' : ''}`}
                role="button"
                aria-disabled={isSubmitted}
              >
                  <div className="flex-1 pr-6">
                     {language === 'my' ? (
                        <>
                            <p className="font-black text-lg mb-1">{option.textMY}</p>
                            <div className="flex items-center gap-3 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="font-mono text-sm font-bold">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </div>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <div className="font-mono font-black text-lg">
                                    <JapaneseText text={option.textJP} onKanjiClick={onKanjiClick} />
                                </div>
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
              </div>
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
                        <JapaneseText text={typeof data.explanation === 'string' ? 'ရှင်းလင်းချက်' : data.explanation?.titleMY || 'Explanation'} onKanjiClick={onKanjiClick} />
                      </h3>
                      <div className="space-y-6 text-base font-bold text-slate-600">
                        <div className="flex gap-4">
                            <span className="shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-black">!</span>
                            <p className="pt-1"><JapaneseText text={typeof data.explanation === 'string' ? data.explanation : data.explanation?.reasonMY || ''} onKanjiClick={onKanjiClick} /></p>
                        </div>
                        {typeof data.explanation !== 'string' && data.explanation?.memoryTipMY && (
                          <div className="flex gap-4">
                              <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-black">★</span>
                              <p className="pt-1 italic"><JapaneseText text={data.explanation.memoryTipMY} onKanjiClick={onKanjiClick} /></p>
                          </div>
                        )}
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
                      {aiError && <p className="mt-4 text-sm text-red-500 font-bold text-center">{aiError}</p>}
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
