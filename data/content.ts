import { StudyCardData } from '../types';

import { chapter1Data } from './chapter1';
import { chapter2Data } from './chapter2';
import { chapter3Data } from './chapter3';
import { chapter4Data } from './chapter4';
import { chapter5Data } from './chapter5';

import { chapter1Data2026Part1 } from './chapter1-2026-part1';
import { chapter1Data2026Part2 } from './chapter1-2026-part2';
import { chapter1Data2026Part3 } from './chapter1-2026-part3';
import { chapter1Data2026Part4 } from './chapter1-2026-part4';

import { chapter2Data2026Part1 } from './chapter2-2026-part1';
import { chapter2Data2026Part2 } from './chapter2-2026-part2';
import { chapter2Data2026Part3 } from './chapter2-2026-part3';
import { chapter2Data2026Part4 } from './chapter2-2026-part4';

import { chapter3Data2026Part1 } from './chapter3-2026-part1';
import { chapter3Data2026Part2 } from './chapter3-2026-part2';
import { chapter3Data2026Part3 } from './chapter3-2026-part3';
import { chapter3Data2026Part4 } from './chapter3-2026-part4';

import { chapter4Data2026Part1 } from './chapter4-2026-part1';
import { chapter5Data2026Part1 } from './chapter5-2026-part1';

import { chapter1Data2026Level2Part1 } from './chapter1-2026-level2-part1';
import { chapter1Data2026Level2Part2 } from './chapter1-2026-level2-part2';
import { chapter2Data2026Level2Part1 } from './chapter2-2026-level2-part1';
import { chapter2Data2026Level2Part2 } from './chapter2-2026-level2-part2';
import { chapter2Data2026Level2Part3 } from './chapter2-2026-level2-part3';
import { chapter2Data2026Level2Part4 } from './chapter2-2026-level2-part4';

export const studyDataByChapter: { [key: number]: StudyCardData[] } = {
  1: chapter1Data,
  2: chapter2Data,
  3: chapter3Data,
  4: chapter4Data,
  5: chapter5Data,
};

export const studyDataByChapter2026: { [key: number]: StudyCardData[] } = {
  1: [
    ...chapter1Data2026Part1,
    ...chapter1Data2026Part2,
    ...chapter1Data2026Part3,
    ...chapter1Data2026Part4,
  ],
  2: [
    ...chapter2Data2026Part1,
    ...chapter2Data2026Part2,
    ...chapter2Data2026Part3,
    ...chapter2Data2026Part4,
  ],
  3: [
    ...chapter3Data2026Part1,
    ...chapter3Data2026Part2,
    ...chapter3Data2026Part3,
    ...chapter3Data2026Part4,
  ],
  4: [
    ...chapter4Data2026Part1,
  ],
  5: [
    ...chapter5Data2026Part1,
  ],
};

export const studyDataByChapter2026Level2: { [key: number]: StudyCardData[] } = {
  1: [
    ...chapter1Data2026Level2Part1,
    ...chapter1Data2026Level2Part2,
  ],
  2: [
    ...chapter2Data2026Level2Part1,
    ...chapter2Data2026Level2Part2,
    ...chapter2Data2026Level2Part3,
    ...chapter2Data2026Level2Part4,
  ]
};

export const chapterCount = Object.keys(studyDataByChapter).length;
