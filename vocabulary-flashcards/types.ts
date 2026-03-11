
export interface VocabularyWord {
  id: number;
  category: string;
  kanji: string;
  reading: string;
  english: string;
  burmese: string;
  ai_explanation?: string;
}

export interface Kanji {
  character: string;
  meaning: string;
  meaningMY: string;
  onyomi: string;
  kunyomi: string;
}
