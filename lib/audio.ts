/**
 * Audio and Text-to-Speech (TTS) utility for Japanese language pronunciation
 */

/**
 * Prepares Japanese text for accurate Text-To-Speech pronunciation.
 * Strips HTML ruby/rt tags, parenthesized furigana annotations, and extraneous punctuation.
 */
export const cleanJapaneseForTTS = (text: string): string => {
  if (!text) return '';

  // 1. Remove ruby furigana tags: keep the base kanji or inner text
  let cleaned = text.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');

  // 2. Parse HTML entities if any
  if (typeof document !== 'undefined') {
    try {
      const doc = new DOMParser().parseFromString(cleaned, 'text/html');
      cleaned = doc.body.textContent || cleaned;
    } catch {
      // Ignore DOMParser error if running in non-standard context
    }
  }

  // 3. Clean up parenthesized furigana / translations like "図 (ず)", "水平 (すいへい)", "梁 (Beam)"
  // If there is Japanese text before parenthesis, extract the main Japanese word
  const matchWithParenthesis = cleaned.match(/^([^\(（]+)[\(（]([^\)）]+)[\)）]/);
  if (matchWithParenthesis) {
    const mainWord = matchWithParenthesis[1].trim();
    const insideParen = matchWithParenthesis[2].trim();
    // If the main word is Japanese characters, prefer the main word
    if (mainWord.length > 0) {
      return mainWord;
    }
    // Otherwise use inside of parenthesis
    if (insideParen.length > 0) {
      return insideParen;
    }
  }

  // 4. Strip any remaining trailing parenthesis annotations
  cleaned = cleaned.replace(/\s*[\(（][^\)）]*[\)）]/g, '').trim();

  return cleaned || text.trim();
};

/**
 * Global reference to handle sequential audio playback
 */
let currentPlaylistCancel: (() => void) | null = null;

export const stopAudio = () => {
  if (currentPlaylistCancel) {
    currentPlaylistCancel();
    currentPlaylistCancel = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Plays Japanese pronunciation for a given text using Web Speech API
 */
export const playJapaneseAudio = (
  text: string,
  options?: {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: () => void;
    rate?: number;
  }
): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this browser.');
    options?.onError?.();
    return false;
  }

  stopAudio();

  const cleanText = cleanJapaneseForTTS(text);
  if (!cleanText) {
    options?.onEnd?.();
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP';
  utterance.rate = options?.rate ?? 0.88; // Slightly relaxed, clear pace for learners
  utterance.pitch = 1.0;

  // Try to find native Japanese voice if available
  const voices = window.speechSynthesis.getVoices();
  const jaVoice = voices.find(
    v => v.lang === 'ja-JP' || v.lang === 'ja_JP' || v.lang.startsWith('ja')
  );
  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  utterance.onstart = () => {
    options?.onStart?.();
  };

  utterance.onend = () => {
    options?.onEnd?.();
  };

  utterance.onerror = (e) => {
    console.warn('Speech synthesis error:', e);
    options?.onError?.();
    options?.onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

/**
 * Sequentially plays an array of Japanese vocabulary items with callbacks
 */
export const playSequentialJapaneseAudio = (
  items: Array<{ id: string; text: string }>,
  onActiveItemChange: (activeId: string | null) => void,
  onComplete: () => void,
  delayBetweenMs: number = 700
) => {
  stopAudio();

  if (!items || items.length === 0) {
    onComplete();
    return;
  }

  let isCancelled = false;
  let currentIndex = 0;
  let timeoutId: any = null;

  currentPlaylistCancel = () => {
    isCancelled = true;
    if (timeoutId) clearTimeout(timeoutId);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    onActiveItemChange(null);
  };

  const playNext = () => {
    if (isCancelled || currentIndex >= items.length) {
      currentPlaylistCancel = null;
      onActiveItemChange(null);
      onComplete();
      return;
    }

    const currentItem = items[currentIndex];
    onActiveItemChange(currentItem.id);

    playJapaneseAudio(currentItem.text, {
      onEnd: () => {
        if (isCancelled) return;
        currentIndex++;
        timeoutId = setTimeout(() => {
          if (!isCancelled) {
            playNext();
          }
        }, delayBetweenMs);
      },
      onError: () => {
        if (isCancelled) return;
        currentIndex++;
        timeoutId = setTimeout(() => {
          if (!isCancelled) {
            playNext();
          }
        }, delayBetweenMs);
      }
    });
  };

  playNext();
};
