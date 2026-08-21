
import React, { useState, useEffect } from 'react';
import { StudyCardData } from '../types';
import { BookmarkIcon, SpeakerIcon, LoadingSpinnerIcon, SparkleIcon, PencilIcon, AcademicCapIcon, CheckCircleSolidIcon, XCircleSolidIcon, LightBulbIcon, FlagIcon, BookOpenIcon, RefreshIcon } from './Icons';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import JapaneseText from './JapaneseText';
import { vocabularyData } from '../data/vocab';
import ReportModal from './ReportModal';
import { supabase } from '../lib/supabase';
import { playJapaneseAudio, playSequentialJapaneseAudio, stopAudio, cleanJapaneseForTTS } from '../lib/audio';

// Helper function to prepare text for TTS by removing furigana annotations.
const stripHtml = (html: string): string => {
  const textWithoutFurigana = html.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');
  const doc = new DOMParser().parseFromString(textWithoutFurigana, 'text/html');
  return doc.body.textContent || "";
};

interface CardProps {
  data: StudyCardData;
  onKanjiClick: (kanji: string, event: React.MouseEvent<HTMLSpanElement>, questionId?: string) => void;
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
  const { fontSize } = useTheme();
  const isBookmarked = bookmarkedIds.has(data.id);

  const getFontSizeClass = (baseSize: 'sm' | 'base' | 'lg' | 'xl') => {
    if (fontSize === 'small') {
      if (baseSize === 'sm') return 'text-xs sm:text-sm';
      if (baseSize === 'base') return 'text-sm sm:text-base';
      if (baseSize === 'lg') return 'text-base sm:text-lg';
      if (baseSize === 'xl') return 'text-lg sm:text-xl';
    }
    if (fontSize === 'large') {
      if (baseSize === 'sm') return 'text-base sm:text-lg';
      if (baseSize === 'base') return 'text-lg sm:text-xl';
      if (baseSize === 'lg') return 'text-xl sm:text-2xl';
      if (baseSize === 'xl') return 'text-2xl sm:text-3xl';
    }
    // medium (default)
    if (baseSize === 'sm') return 'text-sm sm:text-base';
    if (baseSize === 'base') return 'text-base sm:text-lg';
    if (baseSize === 'lg') return 'text-lg sm:text-xl';
    if (baseSize === 'xl') return 'text-xl sm:text-2xl';
    return '';
  };
  
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'explanation' | 'vocab'>('explanation');
  const vocabData = vocabularyData[data.id] || [];

  const [hint, setHint] = useState<string | null>(null);
  const [isHintLoading, setIsHintLoading] = useState(false);
  const [hintError, setHintError] = useState<string | null>(null);
  
  const [audioPlayingId, setAudioPlayingId] = useState<string | null>(null);
  const [isPlayingAllVocab, setIsPlayingAllVocab] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  // Clear states and stop audio when question changes
  useEffect(() => {
    setAiExplanation(data.ai_explanation || null);
    setIsAiLoading(false);
    setAiError(null);
    setHint(null);
    setIsHintLoading(false);
    setHintError(null);
    setAudioPlayingId(null);
    setIsPlayingAllVocab(false);
    stopAudio();

    return () => {
      stopAudio();
    };
  }, [data.id, data.ai_explanation]);

  const handleGetHint = async () => {
    if (isHintLoading || hint) return;
    setIsHintLoading(true);
    setHintError(null);

    try {
      const prompt = `You are an expert structural engineering teacher. Give a very short hint in Burmese for this question (max 1 sentence). Do not reveal the answer directly. Question: ${data.questionMY}`;

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        let errorMessage = "Failed to generate hint";
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = `Server Error (${response.status}): ${errorText.slice(0, 50)}... Make sure Vercel Serverless Functions are deployed.`;
        }
        throw new Error(errorMessage);
      }

      const responseTextRaw = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseTextRaw);
      } catch (e) {
        throw new Error(`Invalid JSON response: ${responseTextRaw.slice(0, 50)}...`);
      }
      const responseTextValue = responseData.text;

      if (!responseTextValue) throw new Error("No response from AI");
      setHint(responseTextValue);
    } catch (err: any) {
      setHintError("Hint ရယူ၍မရပါ။ " + (err.message || ''));
      console.error("AI Error:", err);
    } finally {
      setIsHintLoading(false);
    }
  };

  const handleExplainAgain = async (forceNew: boolean = false) => {
    if (!forceNew && data.ai_explanation) {
      setAiExplanation(data.ai_explanation);
      return;
    }

    setIsAiLoading(true);
    setAiError(null);
    setAiExplanation(null);

    const correctOption = data.options.find(opt => opt.id === data.correctOptionId);
    const prompt = `Explain why this is the correct answer in simple Burmese for a student. 
    Question: ${data.questionMY}
    Correct Answer: ${correctOption?.textMY}
    Please use bullet points for clarity and make it easy to understand for a steel structure engineering student.`;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        let errorMessage = "Failed to generate explanation";
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = `Server Error (${response.status}): ${errorText.slice(0, 50)}... Make sure Vercel APIs are deployed.`;
        }
        throw new Error(errorMessage);
      }

      const responseTextRaw = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseTextRaw);
      } catch (e) {
        throw new Error(`Invalid JSON response: ${responseTextRaw.slice(0, 50)}...`);
      }
      const responseTextValue = responseData.text;

      if (!responseTextValue) throw new Error("No response from AI");
      
      // Basic formatting: bold and newlines
      const formatted = responseTextValue
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
        
      setAiExplanation(formatted);

      // Save to Supabase
      const payload = {
        id: data.id,
        category: data.category || data.id.toString().split('-')[0] || 'unknown',
        question_jp: data.questionJP,
        question_my: data.questionMY,
        options: data.options,
        correct_option_id: data.correctOptionId,
        explanation: data.explanation,
        ai_explanation: formatted
      };

      const { error } = await supabase
        .from('questions')
        .upsert(payload);
        
      if (error) {
        console.error("Failed to save AI explanation to DB:", error);
        setAiError(`Database Error: ${error.message} (Please check Supabase RLS policies or column names)`);
      } else {
        // Update local reference so it doesn't refetch if clicked again without forceNew
        data.ai_explanation = formatted;
      }

    } catch (err: any) {
      setAiError(`Error: ${err.message || 'Unknown error'}`);
      console.error("AI Error:", err);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handlePlayAudio = (textToSpeak: string, id: string) => {
    if (isPlayingAllVocab) {
      stopAudio();
      setIsPlayingAllVocab(false);
    }

    if (audioPlayingId === id) {
      stopAudio();
      setAudioPlayingId(null);
      return;
    }

    const success = playJapaneseAudio(textToSpeak, {
      onStart: () => setAudioPlayingId(id),
      onEnd: () => setAudioPlayingId(null),
      onError: () => setAudioPlayingId(null)
    });

    if (!success) {
      setAudioPlayingId(null);
    }
  };

  const handleTogglePlayAllVocab = () => {
    if (isPlayingAllVocab) {
      stopAudio();
      setIsPlayingAllVocab(false);
      setAudioPlayingId(null);
      return;
    }

    if (!vocabData || vocabData.length === 0) return;

    setIsPlayingAllVocab(true);
    const playlist = vocabData.map((item, idx) => ({
      id: `vocab-${data.id}-${idx}`,
      text: item.jp
    }));

    playSequentialJapaneseAudio(
      playlist,
      (activeId) => setAudioPlayingId(activeId),
      () => {
        setIsPlayingAllVocab(false);
        setAudioPlayingId(null);
      }
    );
  };
  
  const AudioButton = ({ text, id, title }: { text: string, id: string, title?: string }) => {
    const isPlaying = audioPlayingId === id;
    return (
      <button
        onClick={(e) => { e.stopPropagation(); handlePlayAudio(text, id); }}
        className={`p-2 rounded-full shrink-0 transition-all duration-200 ${
          isPlaying 
            ? 'text-blue-600 bg-blue-100/60 shadow-neumorphic-inset scale-105 ring-2 ring-blue-400/40 animate-pulse' 
            : 'text-slate-400 hover:text-blue-500 shadow-neumorphic-outset active:shadow-neumorphic-inset'
        }`}
        title={title || (isPlaying ? "Stop audio" : "Listen pronunciation")}
        aria-label={title || (isPlaying ? "Stop audio" : "Listen pronunciation")}
      >
        <SpeakerIcon className="w-4 h-4" />
      </button>
    );
  };

  return (
    <div className="bg-neumorphic-bg rounded-3xl sm:rounded-[2.5rem] shadow-neumorphic-outset overflow-hidden">
      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} contextInfo={`Question ${data.id}`} />
      <div className="p-4 sm:p-8">
        <div className='flex flex-col sm:flex-row items-start justify-between mb-6 sm:mb-8 gap-4 sm:gap-0'>
            <div className="flex-1 pr-0 sm:pr-6 w-full">
                <p className="mb-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Question {data.id}</p>
                 {language === 'my' ? (
                  <>
                    <p className={`${getFontSizeClass('lg')} font-bold leading-relaxed text-slate-700`}>{data.questionMY}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 w-full">
                      <div className={`flex-1 w-full font-mono ${getFontSizeClass('sm')} font-semibold text-slate-700 bg-neumorphic-bg shadow-neumorphic-inset px-4 sm:px-6 py-3 sm:py-4 rounded-2xl leading-relaxed`}>
                        <JapaneseText text={data.questionJP} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                      </div>
                      <div className="self-end sm:self-auto">
                        <AudioButton text={data.questionJP} id={`q-${data.id}`} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 w-full">
                      <div className={`flex-1 w-full font-mono ${getFontSizeClass('lg')} font-bold text-slate-700 bg-neumorphic-bg shadow-neumorphic-inset px-4 sm:px-8 py-3 sm:py-6 rounded-2xl sm:rounded-[2rem] leading-relaxed sm:leading-loose`}>
                        <JapaneseText text={data.questionJP} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                      </div>
                      <div className="self-end sm:self-auto">
                        <AudioButton text={data.questionJP} id={`q-${data.id}`} />
                      </div>
                    </div>
                     {language === 'jp' && (
                        <p className={`${getFontSizeClass('base')} font-bold leading-relaxed text-slate-500 italic ml-2`}>{data.questionMY}</p>
                    )}
                  </>
                )}
            </div>
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 w-full sm:w-auto justify-end sm:justify-start">
                 <button 
                    onClick={() => toggleBookmark(data.id)}
                    className={`p-2.5 sm:p-3.5 rounded-full transition-all duration-300 ${isBookmarked ? 'shadow-neumorphic-inset text-blue-600 bg-blue-50/10' : 'shadow-neumorphic-outset text-slate-400 hover:text-blue-500'}`}
                >
                  <BookmarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                    onClick={handleGetHint}
                    disabled={isHintLoading || !!hint || isSubmitted}
                    className={`p-2.5 sm:p-3.5 rounded-full transition-all duration-300 disabled:opacity-30 ${hint ? 'shadow-neumorphic-inset text-amber-600 bg-amber-50/10' : 'shadow-neumorphic-outset text-slate-400 hover:text-amber-500'}`}
                >
                    {isHintLoading ? <LoadingSpinnerIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <LightBulbIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>
                <button
                    onClick={() => setIsReportOpen(true)}
                    className="p-2.5 sm:p-3.5 rounded-full shadow-neumorphic-outset text-slate-400 hover:text-red-500 transition-all duration-300 active:shadow-neumorphic-inset"
                >
                    <FlagIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
        
        { (hint || hintError) && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-neumorphic-bg shadow-neumorphic-inset border border-amber-400/20">
            <h4 className="font-black text-amber-600 flex items-center uppercase text-xs tracking-widest mb-2">
              <LightBulbIcon className="w-4 h-4 mr-2" /> အကူအညီ (Hint)
            </h4>
            {hint && <div className="text-sm font-bold text-slate-600 italic leading-relaxed">{hint}</div>}
            {hintError && <div className="text-sm font-bold text-red-500">{hintError}</div>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
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
                className={`w-full p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] transition-all duration-300 flex items-start justify-between text-left ${cardStyle} ${textStyle} group ${!isSubmitted ? 'cursor-pointer' : ''}`}
                role="button"
                aria-disabled={isSubmitted}
              >
                  <div className="flex-1 pr-3 sm:pr-6">
                     {language === 'my' ? (
                        <>
                            <p className={`font-black ${getFontSizeClass('lg')} mb-1 text-slate-800`}>{option.textMY}</p>
                            <div className="flex items-center gap-3 mt-2 text-slate-700">
                                <div className={`font-mono ${getFontSizeClass('sm')} font-bold text-slate-800`}>
                                    <JapaneseText text={option.textJP} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                                </div>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <div className={`font-mono font-black ${getFontSizeClass('lg')} text-slate-800`}>
                                    <JapaneseText text={option.textJP} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                                </div>
                                <AudioButton text={option.textJP} id={`opt-${data.id}-${option.id}`} />
                            </div>
                             {language === 'jp' && (
                                <p className={`mt-2 ${getFontSizeClass('sm')} font-bold text-slate-600 italic`}>{option.textMY}</p>
                            )}
                        </>
                    )}
                  </div>
                  {isSubmitted && (
                    <div className="pt-1 shrink-0">
                        {isCorrect && <CheckCircleSolidIcon className="w-7 h-7 sm:w-8 sm:h-8 text-green-500 drop-shadow-sm"/>}
                        {isIncorrect && <XCircleSolidIcon className="w-7 h-7 sm:w-8 sm:h-8 text-red-500 drop-shadow-sm"/>}
                    </div>
                  )}
              </div>
            )
          })}
        </div>
        
        {language !== 'jp-only' && (
          <div className="pt-8 sm:pt-10 mt-4">
            <div className="flex mb-4 sm:mb-6 p-1.5 sm:p-2 bg-neumorphic-bg rounded-2xl sm:rounded-[2rem] shadow-neumorphic-inset">
              <button
                onClick={() => setActiveTab('explanation')}
                className={`flex-1 flex items-center justify-center px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-[1.5rem] transition-all ${activeTab === 'explanation' ? 'text-slate-700 shadow-neumorphic-outset bg-neumorphic-bg' : 'text-slate-400'}`}
              >
                <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" /> Explanation
              </button>
              <button
                onClick={() => setActiveTab('vocab')}
                className={`flex-1 flex items-center justify-center px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-[1.5rem] transition-all ${activeTab === 'vocab' ? 'text-slate-700 shadow-neumorphic-outset bg-neumorphic-bg' : 'text-slate-400'}`}
              >
                <AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" /> Vocabulary
              </button>
            </div>

            <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-neumorphic-bg shadow-neumorphic-inset min-h-[150px]">
              {activeTab === 'explanation' && (
                <>
                  {isSubmitted ? (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <h3 className="text-xl font-black text-slate-700 mb-6 border-b border-slate-300/30 pb-4">
                        <JapaneseText text={typeof data.explanation === 'string' ? 'ရှင်းလင်းချက်' : data.explanation?.titleMY || 'Explanation'} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                      </h3>
                      <div className="space-y-6 text-base font-bold text-slate-600">
                        <div className="flex gap-4">
                            <span className="shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-black">!</span>
                            <p className="pt-1"><JapaneseText text={typeof data.explanation === 'string' ? data.explanation : data.explanation?.reasonMY || ''} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} /></p>
                        </div>
                        {typeof data.explanation !== 'string' && data.explanation?.memoryTipMY && (
                          <div className="flex gap-4">
                              <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-black">★</span>
                              <p className="pt-1 italic"><JapaneseText text={data.explanation.memoryTipMY} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} /></p>
                          </div>
                        )}
                      </div>
                      <div className="mt-10">
                        {!aiExplanation ? (
                          <button 
                              onClick={() => handleExplainAgain(false)}
                              disabled={isAiLoading}
                              className="flex items-center justify-center w-full py-4 text-sm font-black uppercase tracking-[0.2em] text-blue-600 bg-neumorphic-bg rounded-[1.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-50"
                          >
                              {isAiLoading ? <LoadingSpinnerIcon className="w-5 h-5 mr-2 animate-spin" /> : <SparkleIcon className="w-5 h-5 mr-2" />}
                              {isAiLoading ? 'Thinking...' : 'AI Simpler explanation'}
                          </button>
                        ) : (
                          <div className="flex flex-col gap-4">
                            <div className="p-6 rounded-3xl bg-neumorphic-bg shadow-neumorphic-inset border-l-4 border-blue-500 animate-in zoom-in duration-300">
                                <h4 className="font-black text-blue-600 flex items-center uppercase text-xs tracking-widest mb-3"><SparkleIcon className="w-4 h-4 mr-2" /> AI Clarification</h4>
                                <div className="text-sm font-bold text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: aiExplanation }}></div>
                            </div>
                            <button 
                                onClick={() => handleExplainAgain(true)}
                                disabled={isAiLoading}
                                className="flex items-center justify-center w-full py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500 bg-neumorphic-bg rounded-[1.5rem] shadow-neumorphic-outset hover:shadow-neumorphic-outset active:shadow-neumorphic-inset transition-all disabled:opacity-50"
                            >
                                {isAiLoading ? <LoadingSpinnerIcon className="w-4 h-4 mr-2 animate-spin" /> : <RefreshIcon className="w-4 h-4 mr-2" />}
                                {isAiLoading ? 'Regenerating...' : 'Regenerate AI Explanation'}
                            </button>
                          </div>
                        )}
                      </div>
                      {aiError && <p className="mt-4 text-sm text-red-500 font-bold text-center">{aiError}</p>}
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
                      <div className="space-y-4">
                        {/* Vocab Header Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-300/30">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 text-xs font-black rounded-lg bg-blue-100/50 text-blue-600 shadow-neumorphic-inset">
                              {vocabData.length} Words
                            </span>
                            <span className="text-xs font-bold text-slate-400">
                              နှိပ်၍ အသံထွက် နားထောင်နိုင်ပါသည်
                            </span>
                          </div>
                          
                          <button
                            onClick={handleTogglePlayAllVocab}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                              isPlayingAllVocab
                                ? 'text-red-500 bg-red-50/50 shadow-neumorphic-inset animate-pulse ring-1 ring-red-400/30'
                                : 'text-blue-600 bg-neumorphic-bg shadow-neumorphic-outset hover:text-blue-700 active:shadow-neumorphic-inset'
                            }`}
                            title={isPlayingAllVocab ? "Stop Audio Playlist" : "Play All Vocabulary Audio"}
                          >
                            <SpeakerIcon className={`w-4 h-4 ${isPlayingAllVocab ? 'animate-bounce' : ''}`} />
                            <span>{isPlayingAllVocab ? 'အသံရပ်မည် (Stop)' : 'အားလုံး အသံဖွင့်မည် (Play All)'}</span>
                          </button>
                        </div>

                        {/* Vocab Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-slate-600">
                            <thead className="text-[0.65rem] font-black text-slate-400 uppercase tracking-widest">
                              <tr>
                                <th className="px-3 py-3 w-12 text-center">Audio</th>
                                <th className="px-4 py-3">Term (ဂျပန်)</th>
                                <th className="px-4 py-3">Meaning (မြန်မာ)</th>
                              </tr>
                            </thead>
                            <tbody className="font-bold text-sm">
                              {vocabData.map((item, index) => {
                                const rowAudioId = `vocab-${data.id}-${index}`;
                                const isRowPlaying = audioPlayingId === rowAudioId;
                                return (
                                  <tr 
                                    key={index} 
                                    className={`border-t border-slate-300/20 group transition-all duration-200 rounded-xl ${
                                      isRowPlaying ? 'bg-blue-50/20 shadow-neumorphic-inset text-blue-700 font-extrabold' : 'hover:bg-slate-50/5'
                                    }`}
                                  >
                                    <td className="px-3 py-3 text-center align-middle">
                                      <AudioButton 
                                        text={item.jp} 
                                        id={rowAudioId} 
                                        title={`Play pronunciation for ${item.jp}`} 
                                      />
                                    </td>
                                    <td className="px-4 py-4 font-mono text-slate-700 group-hover:text-blue-600 transition-colors align-middle">
                                      <div className="flex items-center gap-2">
                                        <JapaneseText text={item.jp} onKanjiClick={(k, e) => onKanjiClick(k, e, data.id)} />
                                        {(item as any).type && (
                                          <span className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-md bg-slate-200/50 text-slate-500 shadow-neumorphic-inset">
                                            {(item as any).type}
                                          </span>
                                        )}
                                      </div>
                                    </td>
                                    <td className="px-4 py-4 align-middle">
                                      <span className={isRowPlaying ? 'text-blue-600' : 'text-slate-600'}>
                                        {item.my}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                  ) : (
                      <div className="text-center py-10 opacity-40">
                          <AcademicCapIcon className="w-12 h-12 mb-2 text-slate-300 mx-auto" />
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
