import { StudyCardData } from '../types';
import { chapter1Part1Data } from './chapter1-part1';
import { chapter1Part2Data } from './chapter1-part2';
import { chapter1Part3Data } from './chapter1-part3';
import { chapter1Part4Data } from './chapter1-part4';

export const chapter1Data: StudyCardData[] = [
  ...chapter1Part1Data,
  ...chapter1Part2Data,
  ...chapter1Part3Data,
  ...chapter1Part4Data
];
