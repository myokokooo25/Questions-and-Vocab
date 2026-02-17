
export interface StudyOption {
  id: number;
  textJP: string;
  textMY: string;
}

export interface Explanation {
  titleMY: string;
  reasonMY: string;
  memoryTipMY: string;
}

export interface StudyCardData {
  id: string;
  questionJP: string;
  questionMY: string;
  options: StudyOption[];
  explanation: Explanation;
  correctOptionId: number;
}

export interface User {
  accessKey: string;
  type: 'permanent' | 'trial';
  trialExpiresAt?: string | null; // ISO Date string for trial users
  dbId?: number; // Added: The ID from the access_codes table
}

export interface Kanji {
  character: string;
  meaning: string;
  meaningMY: string;
  onyomi: string;
  kunyomi: string;
}

export type Language = 'jp' | 'my' | 'jp-only';

export interface VocabItem {
  id: number; // Added id for consistency
  category?: string;
  jp: string;
  my: string;
  reading?: string;
  english?: string;
  type?: string;
}
