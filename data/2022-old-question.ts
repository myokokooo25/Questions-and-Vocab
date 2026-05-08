import { StudyCardData } from '../types';
import { chapter2022Part1Data } from './2022-old-question-part1';
import { chapter2022Part2Data } from './2022-old-question-part2';
import { chapter2022Part3Data } from './2022-old-question-part3';

export const chapter2022Data: StudyCardData[] = [
  ...chapter2022Part1Data,
  ...chapter2022Part2Data,
  ...chapter2022Part3Data,
];

export const chapter2022Parts: Record<number, StudyCardData[]> = {
  1: chapter2022Part1Data,
  2: chapter2022Part2Data,
  3: chapter2022Part3Data,
};
