import { StudyCardData } from '../types';
import { chapter2021Part1Data } from './2021-old-question-part1';
import { chapter2021Part2Data } from './2021-old-question-part2';
import { chapter2021Part3Data } from './2021-old-question-part3';

export const chapter2021Data: StudyCardData[] = [
  ...chapter2021Part1Data,
  ...chapter2021Part2Data,
  ...chapter2021Part3Data,
];

export const chapter2021Parts: Record<number, StudyCardData[]> = {
  1: chapter2021Part1Data,
  2: chapter2021Part2Data,
  3: chapter2021Part3Data,
};
