import { vocabularyData } from '../data/vocab';
import { VocabItem } from '../types';

export interface DictionaryEntry {
  id: string;
  term: string;          // Pure Kanji/Kana word, e.g. "支点", "曲げモーメント"
  reading: string;       // Furigana/Reading in Hiragana/Katakana, e.g. "してん", "まげモーメント"
  fullJp: string;        // Formatted display: "支点 (してん)"
  romaji: string;        // Romaji transliteration, e.g. "shiten"
  burmese: string;       // Curated, comprehensive Burmese definition
  english: string;       // English meaning if available
  allDefinitions: string[]; // List of all distinct definitions found across questions
  types: string[];       // Part of speech, e.g. ["Technical Term", "Noun"]
  sourceQuestions: string[]; // Questions where it appears, e.g. ["1-1", "2026-1-1"]
  chapters: string[];    // e.g. ["Chapter 1", "2026 Q1"]
  frequency: number;     // Occurrence count
  score: number;         // Quality score for ranking
}

/**
 * Converts Hiragana/Katakana to Romaji for search
 */
export const toRomaji = (str: string): string => {
  if (!str) return '';
  const romajiMap: Record<string, string> = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
    'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
    'ー': ''
  };

  let result = '';
  let i = 0;
  while (i < str.length) {
    // Check 2-character combo first (e.g. きゃ, しゃ)
    if (i + 1 < str.length) {
      const twoChar = str.slice(i, i + 2);
      if (romajiMap[twoChar]) {
        result += romajiMap[twoChar];
        i += 2;
        continue;
      }
    }
    const oneChar = str[i];
    if (romajiMap[oneChar]) {
      result += romajiMap[oneChar];
    } else {
      result += oneChar;
    }
    i++;
  }
  return result.toLowerCase();
};

/**
 * Parses a raw Japanese term into clean term and reading
 */
const parseJapaneseTerm = (rawJp: string): { term: string; reading: string } => {
  if (!rawJp) return { term: '', reading: '' };

  const match = rawJp.match(/^([^\(（]+)[\(（]([^\)）]+)[\)）]/);
  if (match) {
    const term = match[1].trim();
    const reading = match[2].trim();
    return { term, reading };
  }

  return { term: rawJp.trim(), reading: '' };
};

/**
 * Extracts English and Burmese parts from definition string
 */
const parseDefinition = (rawMy: string, rawEnglish?: string): { burmese: string; english: string } => {
  if (!rawMy) return { burmese: '', english: rawEnglish || '' };

  let burmese = rawMy.trim();
  let english = rawEnglish ? rawEnglish.trim() : '';

  // Extract English found inside parentheses e.g. "ဖွဲ့စည်းပုံ၊ Frame" or "ပစ္စည်း (Material)"
  const parenMatch = burmese.match(/[\(（]([a-zA-Z0-9\s\/\-_,]+)[\)）]/);
  if (parenMatch && !english) {
    english = parenMatch[1].trim();
  }

  return { burmese, english };
};

/**
 * Formats chapter label from question key e.g. "1-1" -> "Chapter 1", "2026-1-5" -> "2026 Ch 1"
 */
const formatChapterLabel = (questionKey: string): string => {
  if (questionKey.startsWith('2026-')) {
    const parts = questionKey.split('-');
    return `2026 Ch ${parts[1]}`;
  }
  const parts = questionKey.split('-');
  return `Chapter ${parts[0]}`;
};

/**
 * Calculates a quality score for a definition to pick the best representation
 */
const scoreDefinition = (item: { burmese: string; english: string; type?: string }): number => {
  let score = 0;
  if (item.burmese) score += item.burmese.length * 2;
  if (item.english) score += item.english.length * 3 + 15;
  if (item.type) score += 10;
  if (item.burmese.includes('(') || item.burmese.includes('၊') || item.burmese.includes('/')) score += 10;
  return score;
};

/**
 * Read-only builder that compiles all vocabulary from data/vocab into a deduplicated, rich dictionary
 */
export const buildTechnicalDictionary = (): DictionaryEntry[] => {
  const termMap = new Map<string, {
    term: string;
    reading: string;
    definitions: { burmese: string; english: string; type?: string; score: number }[];
    types: Set<string>;
    sourceQuestions: Set<string>;
    chapters: Set<string>;
  }>();

  // Iterate over all question keys in vocabularyData read-only
  for (const [questionKey, items] of Object.entries(vocabularyData)) {
    if (!Array.isArray(items)) continue;

    for (const item of items) {
      if (!item || !item.jp) continue;

      const { term, reading } = parseJapaneseTerm(item.jp);
      if (!term) continue;

      // Normalization key for grouping
      const normKey = term.trim();

      const { burmese, english } = parseDefinition(item.my, item.english);
      const itemType = item.type || (item as any).category;
      const defScore = scoreDefinition({ burmese, english, type: itemType });

      if (!termMap.has(normKey)) {
        termMap.set(normKey, {
          term,
          reading: reading || item.reading || '',
          definitions: [],
          types: new Set<string>(),
          sourceQuestions: new Set<string>(),
          chapters: new Set<string>()
        });
      }

      const entry = termMap.get(normKey)!;
      if (!entry.reading && (reading || item.reading)) {
        entry.reading = reading || item.reading || '';
      }

      if (burmese) {
        entry.definitions.push({
          burmese,
          english,
          type: itemType,
          score: defScore
        });
      }

      if (itemType) {
        entry.types.add(itemType);
      }

      entry.sourceQuestions.add(questionKey);
      entry.chapters.add(formatChapterLabel(questionKey));
    }
  }

  // Convert map to finalized DictionaryEntry array
  const dictionary: DictionaryEntry[] = [];
  let idCounter = 1;

  for (const [, data] of termMap) {
    // Sort definitions by quality score descending
    data.definitions.sort((a, b) => b.score - a.score);

    // Pick best Burmese & English definition
    const bestDef = data.definitions[0] || { burmese: '', english: '' };
    
    // Combine unique English meanings
    const uniqueEnglishList = Array.from(
      new Set(data.definitions.map(d => d.english).filter(Boolean))
    );
    const combinedEnglish = uniqueEnglishList.join(' / ') || bestDef.english || '';

    // Collect all distinct definitions for full display
    const uniqueBurmeseList = Array.from(
      new Set(data.definitions.map(d => d.burmese).filter(Boolean))
    );

    // Build the richest, most comprehensive Burmese definition
    let primaryBurmese = bestDef.burmese;
    if (uniqueBurmeseList.length > 1) {
      // If there are other distinct definitions that add extra context, combine cleanly
      const extras = uniqueBurmeseList
        .filter(b => b !== primaryBurmese && !primaryBurmese.includes(b))
        .slice(0, 2);
      if (extras.length > 0) {
        primaryBurmese = `${primaryBurmese} (သို့မဟုတ် ${extras.join('၊ ')})`;
      }
    }

    const fullJp = data.reading ? `${data.term} (${data.reading})` : data.term;
    const romaji = toRomaji(data.reading || data.term);

    dictionary.push({
      id: `dict-${idCounter++}`,
      term: data.term,
      reading: data.reading,
      fullJp,
      romaji,
      burmese: primaryBurmese,
      english: combinedEnglish,
      allDefinitions: uniqueBurmeseList,
      types: Array.from(data.types),
      sourceQuestions: Array.from(data.sourceQuestions).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
      chapters: Array.from(data.chapters).sort(),
      frequency: data.sourceQuestions.size,
      score: bestDef.score + data.sourceQuestions.size * 5
    });
  }

  // Default sorting: Japanese Alphabetical (reading/term)
  return dictionary.sort((a, b) => {
    const readingA = a.reading || a.term;
    const readingB = b.reading || b.term;
    return readingA.localeCompare(readingB, 'ja');
  });
};

// Cached singleton instance so computation only runs once
let cachedDictionary: DictionaryEntry[] | null = null;

export const getTechnicalDictionary = (): DictionaryEntry[] => {
  if (!cachedDictionary) {
    cachedDictionary = buildTechnicalDictionary();
  }
  return cachedDictionary;
};
