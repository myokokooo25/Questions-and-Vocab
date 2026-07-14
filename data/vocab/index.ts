import { VocabItem } from '../../types';

const processVocab = (vocab: any[], categoryId: string): VocabItem[] => {
    return vocab.map((item, index) => ({
        id: parseInt(categoryId.replace(/-/g, '')) * 1000 + index,
        jp: item.jp,
        my: item.my,
        reading: item.reading || '',
        english: item.english || ''
    }));
};

import vocab1_1 from './questions/1-1.js';
import vocab1_10 from './questions/1-10.js';
import vocab1_11 from './questions/1-11.js';
import vocab1_12 from './questions/1-12.js';
import vocab1_13 from './questions/1-13.js';
import vocab1_14 from './questions/1-14.js';
import vocab1_15 from './questions/1-15.js';
import vocab1_16 from './questions/1-16.js';
import vocab1_17 from './questions/1-17.js';
import vocab1_18 from './questions/1-18.js';
import vocab1_19 from './questions/1-19.js';
import vocab1_2 from './questions/1-2.js';
import vocab1_20 from './questions/1-20.js';
import vocab1_21 from './questions/1-21.js';
import vocab1_22 from './questions/1-22.js';
import vocab1_23 from './questions/1-23.js';
import vocab1_24 from './questions/1-24.js';
import vocab1_25 from './questions/1-25.js';
import vocab1_26 from './questions/1-26.js';
import vocab1_27 from './questions/1-27.js';
import vocab1_3 from './questions/1-3.js';
import vocab1_4 from './questions/1-4.js';
import vocab1_5 from './questions/1-5.js';
import vocab1_6 from './questions/1-6.js';
import vocab1_7 from './questions/1-7.js';
import vocab1_8 from './questions/1-8.js';
import vocab1_9 from './questions/1-9.js';
import vocab2_1 from './questions/2-1.js';
import vocab2_10 from './questions/2-10.js';
import vocab2_11 from './questions/2-11.js';
import vocab2_12 from './questions/2-12.js';
import vocab2_13 from './questions/2-13.js';
import vocab2_14 from './questions/2-14.js';
import vocab2_15 from './questions/2-15.js';
import vocab2_16 from './questions/2-16.js';
import vocab2_17 from './questions/2-17.js';
import vocab2_18 from './questions/2-18.js';
import vocab2_19 from './questions/2-19.js';
import vocab2_2 from './questions/2-2.js';
import vocab2_20 from './questions/2-20.js';
import vocab2_21 from './questions/2-21.js';
import vocab2_22 from './questions/2-22.js';
import vocab2_23 from './questions/2-23.js';
import vocab2_24 from './questions/2-24.js';
import vocab2_25 from './questions/2-25.js';
import vocab2_26 from './questions/2-26.js';
import vocab2_27 from './questions/2-27.js';
import vocab2_28 from './questions/2-28.js';
import vocab2_29 from './questions/2-29.js';
import vocab2_3 from './questions/2-3.js';
import vocab2_30 from './questions/2-30.js';
import vocab2_31 from './questions/2-31.js';
import vocab2_32 from './questions/2-32.js';
import vocab2_33 from './questions/2-33.js';
import vocab2_34 from './questions/2-34.js';
import vocab2_35 from './questions/2-35.js';
import vocab2_36 from './questions/2-36.js';
import vocab2_37 from './questions/2-37.js';
import vocab2_38 from './questions/2-38.js';
import vocab2_39 from './questions/2-39.js';
import vocab2_4 from './questions/2-4.js';
import vocab2_40 from './questions/2-40.js';
import vocab2_41 from './questions/2-41.js';
import vocab2_42 from './questions/2-42.js';
import vocab2_43 from './questions/2-43.js';
import vocab2_44 from './questions/2-44.js';
import vocab2_45 from './questions/2-45.js';
import vocab2_46 from './questions/2-46.js';
import vocab2_47 from './questions/2-47.js';
import vocab2_48 from './questions/2-48.js';
import vocab2_49 from './questions/2-49.js';
import vocab2_5 from './questions/2-5.js';
import vocab2_50 from './questions/2-50.js';
import vocab2_51 from './questions/2-51.js';
import vocab2_52 from './questions/2-52.js';
import vocab2_53 from './questions/2-53.js';
import vocab2_54 from './questions/2-54.js';
import vocab2_55 from './questions/2-55.js';
import vocab2_56 from './questions/2-56.js';
import vocab2_57 from './questions/2-57.js';
import vocab2_58 from './questions/2-58.js';
import vocab2_59 from './questions/2-59.js';
import vocab2_6 from './questions/2-6.js';
import vocab2_60 from './questions/2-60.js';
import vocab2_7 from './questions/2-7.js';
import vocab2_8 from './questions/2-8.js';
import vocab2_9 from './questions/2-9.js';
import vocab2026_1_1 from './questions/2026-1-1.js';
import vocab2026_1_10 from './questions/2026-1-10.js';
import vocab2026_1_11 from './questions/2026-1-11.js';
import vocab2026_1_12 from './questions/2026-1-12.js';
import vocab2026_1_13 from './questions/2026-1-13.js';
import vocab2026_1_14 from './questions/2026-1-14.js';
import vocab2026_1_15 from './questions/2026-1-15.js';
import vocab2026_1_16 from './questions/2026-1-16.js';
import vocab2026_1_17 from './questions/2026-1-17.js';
import vocab2026_1_18 from './questions/2026-1-18.js';
import vocab2026_1_19 from './questions/2026-1-19.js';
import vocab2026_1_2 from './questions/2026-1-2.js';
import vocab2026_1_20 from './questions/2026-1-20.js';
import vocab2026_1_21 from './questions/2026-1-21.js';
import vocab2026_1_22 from './questions/2026-1-22.js';
import vocab2026_1_23 from './questions/2026-1-23.js';
import vocab2026_1_24 from './questions/2026-1-24.js';
import vocab2026_1_25 from './questions/2026-1-25.js';
import vocab2026_1_26 from './questions/2026-1-26.js';
import vocab2026_1_3 from './questions/2026-1-3.js';
import vocab2026_1_4 from './questions/2026-1-4.js';
import vocab2026_1_5 from './questions/2026-1-5.js';
import vocab2026_1_6 from './questions/2026-1-6.js';
import vocab2026_1_7 from './questions/2026-1-7.js';
import vocab2026_1_8 from './questions/2026-1-8.js';
import vocab2026_1_9 from './questions/2026-1-9.js';
import vocab2026_2_1 from './questions/2026-2-1.js';
import vocab2026_2_10 from './questions/2026-2-10.js';
import vocab2026_2_11 from './questions/2026-2-11.js';
import vocab2026_2_12 from './questions/2026-2-12.js';
import vocab2026_2_13 from './questions/2026-2-13.js';
import vocab2026_2_14 from './questions/2026-2-14.js';
import vocab2026_2_15 from './questions/2026-2-15.js';
import vocab2026_2_16 from './questions/2026-2-16.js';
import vocab2026_2_17 from './questions/2026-2-17.js';
import vocab2026_2_18 from './questions/2026-2-18.js';
import vocab2026_2_19 from './questions/2026-2-19.js';
import vocab2026_2_2 from './questions/2026-2-2.js';
import vocab2026_2_20 from './questions/2026-2-20.js';
import vocab2026_2_21 from './questions/2026-2-21.js';
import vocab2026_2_22 from './questions/2026-2-22.js';
import vocab2026_2_23 from './questions/2026-2-23.js';
import vocab2026_2_24 from './questions/2026-2-24.js';
import vocab2026_2_25 from './questions/2026-2-25.js';
import vocab2026_2_26 from './questions/2026-2-26.js';
import vocab2026_2_27 from './questions/2026-2-27.js';
import vocab2026_2_28 from './questions/2026-2-28.js';
import vocab2026_2_29 from './questions/2026-2-29.js';
import vocab2026_2_3 from './questions/2026-2-3.js';
import vocab2026_2_30 from './questions/2026-2-30.js';
import vocab2026_2_31 from './questions/2026-2-31.js';
import vocab2026_2_32 from './questions/2026-2-32.js';
import vocab2026_2_33 from './questions/2026-2-33.js';
import vocab2026_2_34 from './questions/2026-2-34.js';
import vocab2026_2_35 from './questions/2026-2-35.js';
import vocab2026_2_36 from './questions/2026-2-36.js';
import vocab2026_2_37 from './questions/2026-2-37.js';
import vocab2026_2_38 from './questions/2026-2-38.js';
import vocab2026_2_39 from './questions/2026-2-39.js';
import vocab2026_2_4 from './questions/2026-2-4.js';
import vocab2026_2_40 from './questions/2026-2-40.js';
import vocab2026_2_41 from './questions/2026-2-41.js';
import vocab2026_2_42 from './questions/2026-2-42.js';
import vocab2026_2_43 from './questions/2026-2-43.js';
import vocab2026_2_44 from './questions/2026-2-44.js';
import vocab2026_2_45 from './questions/2026-2-45.js';
import vocab2026_2_46 from './questions/2026-2-46.js';
import vocab2026_2_47 from './questions/2026-2-47.js';
import vocab2026_2_48 from './questions/2026-2-48.js';
import vocab2026_2_49 from './questions/2026-2-49.js';
import vocab2026_2_5 from './questions/2026-2-5.js';
import vocab2026_2_50 from './questions/2026-2-50.js';
import vocab2026_2_51 from './questions/2026-2-51.js';
import vocab2026_2_52 from './questions/2026-2-52.js';
import vocab2026_2_53 from './questions/2026-2-53.js';
import vocab2026_2_54 from './questions/2026-2-54.js';
import vocab2026_2_55 from './questions/2026-2-55.js';
import vocab2026_2_56 from './questions/2026-2-56.js';
import vocab2026_2_57 from './questions/2026-2-57.js';
import vocab2026_2_6 from './questions/2026-2-6.js';
import vocab2026_2_7 from './questions/2026-2-7.js';
import vocab2026_2_8 from './questions/2026-2-8.js';
import vocab2026_2_9 from './questions/2026-2-9.js';
import vocab2026_3_1 from './questions/2026-3-1.js';
import vocab2026_3_10 from './questions/2026-3-10.js';
import vocab2026_3_11 from './questions/2026-3-11.js';
import vocab2026_3_12 from './questions/2026-3-12.js';
import vocab2026_3_13 from './questions/2026-3-13.js';
import vocab2026_3_14 from './questions/2026-3-14.js';
import vocab2026_3_15 from './questions/2026-3-15.js';
import vocab2026_3_16 from './questions/2026-3-16.js';
import vocab2026_3_17 from './questions/2026-3-17.js';
import vocab2026_3_18 from './questions/2026-3-18.js';
import vocab2026_3_19 from './questions/2026-3-19.js';
import vocab2026_3_2 from './questions/2026-3-2.js';
import vocab2026_3_20 from './questions/2026-3-20.js';
import vocab2026_3_21 from './questions/2026-3-21.js';
import vocab2026_3_22 from './questions/2026-3-22.js';
import vocab2026_3_23 from './questions/2026-3-23.js';
import vocab2026_3_24 from './questions/2026-3-24.js';
import vocab2026_3_25 from './questions/2026-3-25.js';
import vocab2026_3_26 from './questions/2026-3-26.js';
import vocab2026_3_27 from './questions/2026-3-27.js';
import vocab2026_3_28 from './questions/2026-3-28.js';
import vocab2026_3_29 from './questions/2026-3-29.js';
import vocab2026_3_3 from './questions/2026-3-3.js';
import vocab2026_3_30 from './questions/2026-3-30.js';
import vocab2026_3_31 from './questions/2026-3-31.js';
import vocab2026_3_32 from './questions/2026-3-32.js';
import vocab2026_3_33 from './questions/2026-3-33.js';
import vocab2026_3_34 from './questions/2026-3-34.js';
import vocab2026_3_35 from './questions/2026-3-35.js';
import vocab2026_3_36 from './questions/2026-3-36.js';
import vocab2026_3_37 from './questions/2026-3-37.js';
import vocab2026_3_38 from './questions/2026-3-38.js';
import vocab2026_3_39 from './questions/2026-3-39.js';
import vocab2026_3_4 from './questions/2026-3-4.js';
import vocab2026_3_40 from './questions/2026-3-40.js';
import vocab2026_3_41 from './questions/2026-3-41.js';
import vocab2026_3_42 from './questions/2026-3-42.js';
import vocab2026_3_43 from './questions/2026-3-43.js';
import vocab2026_3_44 from './questions/2026-3-44.js';
import vocab2026_3_45 from './questions/2026-3-45.js';
import vocab2026_3_46 from './questions/2026-3-46.js';
import vocab2026_3_5 from './questions/2026-3-5.js';
import vocab2026_3_6 from './questions/2026-3-6.js';
import vocab2026_3_7 from './questions/2026-3-7.js';
import vocab2026_3_8 from './questions/2026-3-8.js';
import vocab2026_3_9 from './questions/2026-3-9.js';
import vocab2026_4_1 from './questions/2026-4-1.js';
import vocab2026_4_2 from './questions/2026-4-2.js';
import vocab2026_4_3 from './questions/2026-4-3.js';
import vocab2026_4_4 from './questions/2026-4-4.js';
import vocab2026_4_5 from './questions/2026-4-5.js';
import vocab2026_4_6 from './questions/2026-4-6.js';
import vocab2026_4_7 from './questions/2026-4-7.js';
import vocab2026_4_8 from './questions/2026-4-8.js';
import vocab2026_5_1 from './questions/2026-5-1.js';
import vocab2026_5_2 from './questions/2026-5-2.js';
import vocab2026_5_3 from './questions/2026-5-3.js';
import vocab2026_5_4 from './questions/2026-5-4.js';
import vocab2026_5_5 from './questions/2026-5-5.js';
import vocab2026_5_6 from './questions/2026-5-6.js';
import vocab2026_5_7 from './questions/2026-5-7.js';
import vocab2026_5_8 from './questions/2026-5-8.js';
import vocab2026_5_9 from './questions/2026-5-9.js';
import vocab3_1 from './questions/3-1.js';
import vocab3_10 from './questions/3-10.js';
import vocab3_11 from './questions/3-11.js';
import vocab3_12 from './questions/3-12.js';
import vocab3_13 from './questions/3-13.js';
import vocab3_14 from './questions/3-14.js';
import vocab3_15 from './questions/3-15.js';
import vocab3_16 from './questions/3-16.js';
import vocab3_17 from './questions/3-17.js';
import vocab3_18 from './questions/3-18.js';
import vocab3_19 from './questions/3-19.js';
import vocab3_2 from './questions/3-2.js';
import vocab3_20 from './questions/3-20.js';
import vocab3_21 from './questions/3-21.js';
import vocab3_22 from './questions/3-22.js';
import vocab3_23 from './questions/3-23.js';
import vocab3_24 from './questions/3-24.js';
import vocab3_25 from './questions/3-25.js';
import vocab3_26 from './questions/3-26.js';
import vocab3_27 from './questions/3-27.js';
import vocab3_28 from './questions/3-28.js';
import vocab3_29 from './questions/3-29.js';
import vocab3_3 from './questions/3-3.js';
import vocab3_30 from './questions/3-30.js';
import vocab3_31 from './questions/3-31.js';
import vocab3_32 from './questions/3-32.js';
import vocab3_33 from './questions/3-33.js';
import vocab3_34 from './questions/3-34.js';
import vocab3_35 from './questions/3-35.js';
import vocab3_36 from './questions/3-36.js';
import vocab3_37 from './questions/3-37.js';
import vocab3_38 from './questions/3-38.js';
import vocab3_39 from './questions/3-39.js';
import vocab3_4 from './questions/3-4.js';
import vocab3_40 from './questions/3-40.js';
import vocab3_41 from './questions/3-41.js';
import vocab3_42 from './questions/3-42.js';
import vocab3_43 from './questions/3-43.js';
import vocab3_44 from './questions/3-44.js';
import vocab3_45 from './questions/3-45.js';
import vocab3_5 from './questions/3-5.js';
import vocab3_6 from './questions/3-6.js';
import vocab3_7 from './questions/3-7.js';
import vocab3_8 from './questions/3-8.js';
import vocab3_9 from './questions/3-9.js';
import vocab4_1 from './questions/4-1.js';
import vocab4_2 from './questions/4-2.js';
import vocab4_3 from './questions/4-3.js';
import vocab4_4 from './questions/4-4.js';
import vocab4_5 from './questions/4-5.js';
import vocab4_6 from './questions/4-6.js';
import vocab4_7 from './questions/4-7.js';
import vocab4_8 from './questions/4-8.js';
import vocab5_1 from './questions/5-1.js';
import vocab5_2 from './questions/5-2.js';
import vocab5_3 from './questions/5-3.js';
import vocab5_4 from './questions/5-4.js';
import vocab5_5 from './questions/5-5.js';
import vocab5_6 from './questions/5-6.js';
import vocab5_7 from './questions/5-7.js';
import vocab5_8 from './questions/5-8.js';

export const vocabularyData: { [key: string]: VocabItem[] } = {
  '1-1': processVocab(vocab1_1, '1-1'),
  '1-10': processVocab(vocab1_10, '1-10'),
  '1-11': processVocab(vocab1_11, '1-11'),
  '1-12': processVocab(vocab1_12, '1-12'),
  '1-13': processVocab(vocab1_13, '1-13'),
  '1-14': processVocab(vocab1_14, '1-14'),
  '1-15': processVocab(vocab1_15, '1-15'),
  '1-16': processVocab(vocab1_16, '1-16'),
  '1-17': processVocab(vocab1_17, '1-17'),
  '1-18': processVocab(vocab1_18, '1-18'),
  '1-19': processVocab(vocab1_19, '1-19'),
  '1-2': processVocab(vocab1_2, '1-2'),
  '1-20': processVocab(vocab1_20, '1-20'),
  '1-21': processVocab(vocab1_21, '1-21'),
  '1-22': processVocab(vocab1_22, '1-22'),
  '1-23': processVocab(vocab1_23, '1-23'),
  '1-24': processVocab(vocab1_24, '1-24'),
  '1-25': processVocab(vocab1_25, '1-25'),
  '1-26': processVocab(vocab1_26, '1-26'),
  '1-27': processVocab(vocab1_27, '1-27'),
  '1-3': processVocab(vocab1_3, '1-3'),
  '1-4': processVocab(vocab1_4, '1-4'),
  '1-5': processVocab(vocab1_5, '1-5'),
  '1-6': processVocab(vocab1_6, '1-6'),
  '1-7': processVocab(vocab1_7, '1-7'),
  '1-8': processVocab(vocab1_8, '1-8'),
  '1-9': processVocab(vocab1_9, '1-9'),
  '2-1': processVocab(vocab2_1, '2-1'),
  '2-10': processVocab(vocab2_10, '2-10'),
  '2-11': processVocab(vocab2_11, '2-11'),
  '2-12': processVocab(vocab2_12, '2-12'),
  '2-13': processVocab(vocab2_13, '2-13'),
  '2-14': processVocab(vocab2_14, '2-14'),
  '2-15': processVocab(vocab2_15, '2-15'),
  '2-16': processVocab(vocab2_16, '2-16'),
  '2-17': processVocab(vocab2_17, '2-17'),
  '2-18': processVocab(vocab2_18, '2-18'),
  '2-19': processVocab(vocab2_19, '2-19'),
  '2-2': processVocab(vocab2_2, '2-2'),
  '2-20': processVocab(vocab2_20, '2-20'),
  '2-21': processVocab(vocab2_21, '2-21'),
  '2-22': processVocab(vocab2_22, '2-22'),
  '2-23': processVocab(vocab2_23, '2-23'),
  '2-24': processVocab(vocab2_24, '2-24'),
  '2-25': processVocab(vocab2_25, '2-25'),
  '2-26': processVocab(vocab2_26, '2-26'),
  '2-27': processVocab(vocab2_27, '2-27'),
  '2-28': processVocab(vocab2_28, '2-28'),
  '2-29': processVocab(vocab2_29, '2-29'),
  '2-3': processVocab(vocab2_3, '2-3'),
  '2-30': processVocab(vocab2_30, '2-30'),
  '2-31': processVocab(vocab2_31, '2-31'),
  '2-32': processVocab(vocab2_32, '2-32'),
  '2-33': processVocab(vocab2_33, '2-33'),
  '2-34': processVocab(vocab2_34, '2-34'),
  '2-35': processVocab(vocab2_35, '2-35'),
  '2-36': processVocab(vocab2_36, '2-36'),
  '2-37': processVocab(vocab2_37, '2-37'),
  '2-38': processVocab(vocab2_38, '2-38'),
  '2-39': processVocab(vocab2_39, '2-39'),
  '2-4': processVocab(vocab2_4, '2-4'),
  '2-40': processVocab(vocab2_40, '2-40'),
  '2-41': processVocab(vocab2_41, '2-41'),
  '2-42': processVocab(vocab2_42, '2-42'),
  '2-43': processVocab(vocab2_43, '2-43'),
  '2-44': processVocab(vocab2_44, '2-44'),
  '2-45': processVocab(vocab2_45, '2-45'),
  '2-46': processVocab(vocab2_46, '2-46'),
  '2-47': processVocab(vocab2_47, '2-47'),
  '2-48': processVocab(vocab2_48, '2-48'),
  '2-49': processVocab(vocab2_49, '2-49'),
  '2-5': processVocab(vocab2_5, '2-5'),
  '2-50': processVocab(vocab2_50, '2-50'),
  '2-51': processVocab(vocab2_51, '2-51'),
  '2-52': processVocab(vocab2_52, '2-52'),
  '2-53': processVocab(vocab2_53, '2-53'),
  '2-54': processVocab(vocab2_54, '2-54'),
  '2-55': processVocab(vocab2_55, '2-55'),
  '2-56': processVocab(vocab2_56, '2-56'),
  '2-57': processVocab(vocab2_57, '2-57'),
  '2-58': processVocab(vocab2_58, '2-58'),
  '2-59': processVocab(vocab2_59, '2-59'),
  '2-6': processVocab(vocab2_6, '2-6'),
  '2-60': processVocab(vocab2_60, '2-60'),
  '2-7': processVocab(vocab2_7, '2-7'),
  '2-8': processVocab(vocab2_8, '2-8'),
  '2-9': processVocab(vocab2_9, '2-9'),
  '2026-1-1': processVocab(vocab2026_1_1, '2026-1-1'),
  '2026-1-10': processVocab(vocab2026_1_10, '2026-1-10'),
  '2026-1-11': processVocab(vocab2026_1_11, '2026-1-11'),
  '2026-1-12': processVocab(vocab2026_1_12, '2026-1-12'),
  '2026-1-13': processVocab(vocab2026_1_13, '2026-1-13'),
  '2026-1-14': processVocab(vocab2026_1_14, '2026-1-14'),
  '2026-1-15': processVocab(vocab2026_1_15, '2026-1-15'),
  '2026-1-16': processVocab(vocab2026_1_16, '2026-1-16'),
  '2026-1-17': processVocab(vocab2026_1_17, '2026-1-17'),
  '2026-1-18': processVocab(vocab2026_1_18, '2026-1-18'),
  '2026-1-19': processVocab(vocab2026_1_19, '2026-1-19'),
  '2026-1-2': processVocab(vocab2026_1_2, '2026-1-2'),
  '2026-1-20': processVocab(vocab2026_1_20, '2026-1-20'),
  '2026-1-21': processVocab(vocab2026_1_21, '2026-1-21'),
  '2026-1-22': processVocab(vocab2026_1_22, '2026-1-22'),
  '2026-1-23': processVocab(vocab2026_1_23, '2026-1-23'),
  '2026-1-24': processVocab(vocab2026_1_24, '2026-1-24'),
  '2026-1-25': processVocab(vocab2026_1_25, '2026-1-25'),
  '2026-1-26': processVocab(vocab2026_1_26, '2026-1-26'),
  '2026-1-3': processVocab(vocab2026_1_3, '2026-1-3'),
  '2026-1-4': processVocab(vocab2026_1_4, '2026-1-4'),
  '2026-1-5': processVocab(vocab2026_1_5, '2026-1-5'),
  '2026-1-6': processVocab(vocab2026_1_6, '2026-1-6'),
  '2026-1-7': processVocab(vocab2026_1_7, '2026-1-7'),
  '2026-1-8': processVocab(vocab2026_1_8, '2026-1-8'),
  '2026-1-9': processVocab(vocab2026_1_9, '2026-1-9'),
  '2026-2-1': processVocab(vocab2026_2_1, '2026-2-1'),
  '2026-2-10': processVocab(vocab2026_2_10, '2026-2-10'),
  '2026-2-11': processVocab(vocab2026_2_11, '2026-2-11'),
  '2026-2-12': processVocab(vocab2026_2_12, '2026-2-12'),
  '2026-2-13': processVocab(vocab2026_2_13, '2026-2-13'),
  '2026-2-14': processVocab(vocab2026_2_14, '2026-2-14'),
  '2026-2-15': processVocab(vocab2026_2_15, '2026-2-15'),
  '2026-2-16': processVocab(vocab2026_2_16, '2026-2-16'),
  '2026-2-17': processVocab(vocab2026_2_17, '2026-2-17'),
  '2026-2-18': processVocab(vocab2026_2_18, '2026-2-18'),
  '2026-2-19': processVocab(vocab2026_2_19, '2026-2-19'),
  '2026-2-2': processVocab(vocab2026_2_2, '2026-2-2'),
  '2026-2-20': processVocab(vocab2026_2_20, '2026-2-20'),
  '2026-2-21': processVocab(vocab2026_2_21, '2026-2-21'),
  '2026-2-22': processVocab(vocab2026_2_22, '2026-2-22'),
  '2026-2-23': processVocab(vocab2026_2_23, '2026-2-23'),
  '2026-2-24': processVocab(vocab2026_2_24, '2026-2-24'),
  '2026-2-25': processVocab(vocab2026_2_25, '2026-2-25'),
  '2026-2-26': processVocab(vocab2026_2_26, '2026-2-26'),
  '2026-2-27': processVocab(vocab2026_2_27, '2026-2-27'),
  '2026-2-28': processVocab(vocab2026_2_28, '2026-2-28'),
  '2026-2-29': processVocab(vocab2026_2_29, '2026-2-29'),
  '2026-2-3': processVocab(vocab2026_2_3, '2026-2-3'),
  '2026-2-30': processVocab(vocab2026_2_30, '2026-2-30'),
  '2026-2-31': processVocab(vocab2026_2_31, '2026-2-31'),
  '2026-2-32': processVocab(vocab2026_2_32, '2026-2-32'),
  '2026-2-33': processVocab(vocab2026_2_33, '2026-2-33'),
  '2026-2-34': processVocab(vocab2026_2_34, '2026-2-34'),
  '2026-2-35': processVocab(vocab2026_2_35, '2026-2-35'),
  '2026-2-36': processVocab(vocab2026_2_36, '2026-2-36'),
  '2026-2-37': processVocab(vocab2026_2_37, '2026-2-37'),
  '2026-2-38': processVocab(vocab2026_2_38, '2026-2-38'),
  '2026-2-39': processVocab(vocab2026_2_39, '2026-2-39'),
  '2026-2-4': processVocab(vocab2026_2_4, '2026-2-4'),
  '2026-2-40': processVocab(vocab2026_2_40, '2026-2-40'),
  '2026-2-41': processVocab(vocab2026_2_41, '2026-2-41'),
  '2026-2-42': processVocab(vocab2026_2_42, '2026-2-42'),
  '2026-2-43': processVocab(vocab2026_2_43, '2026-2-43'),
  '2026-2-44': processVocab(vocab2026_2_44, '2026-2-44'),
  '2026-2-45': processVocab(vocab2026_2_45, '2026-2-45'),
  '2026-2-46': processVocab(vocab2026_2_46, '2026-2-46'),
  '2026-2-47': processVocab(vocab2026_2_47, '2026-2-47'),
  '2026-2-48': processVocab(vocab2026_2_48, '2026-2-48'),
  '2026-2-49': processVocab(vocab2026_2_49, '2026-2-49'),
  '2026-2-5': processVocab(vocab2026_2_5, '2026-2-5'),
  '2026-2-50': processVocab(vocab2026_2_50, '2026-2-50'),
  '2026-2-51': processVocab(vocab2026_2_51, '2026-2-51'),
  '2026-2-52': processVocab(vocab2026_2_52, '2026-2-52'),
  '2026-2-53': processVocab(vocab2026_2_53, '2026-2-53'),
  '2026-2-54': processVocab(vocab2026_2_54, '2026-2-54'),
  '2026-2-55': processVocab(vocab2026_2_55, '2026-2-55'),
  '2026-2-56': processVocab(vocab2026_2_56, '2026-2-56'),
  '2026-2-57': processVocab(vocab2026_2_57, '2026-2-57'),
  '2026-2-6': processVocab(vocab2026_2_6, '2026-2-6'),
  '2026-2-7': processVocab(vocab2026_2_7, '2026-2-7'),
  '2026-2-8': processVocab(vocab2026_2_8, '2026-2-8'),
  '2026-2-9': processVocab(vocab2026_2_9, '2026-2-9'),
  '2026-3-1': processVocab(vocab2026_3_1, '2026-3-1'),
  '2026-3-10': processVocab(vocab2026_3_10, '2026-3-10'),
  '2026-3-11': processVocab(vocab2026_3_11, '2026-3-11'),
  '2026-3-12': processVocab(vocab2026_3_12, '2026-3-12'),
  '2026-3-13': processVocab(vocab2026_3_13, '2026-3-13'),
  '2026-3-14': processVocab(vocab2026_3_14, '2026-3-14'),
  '2026-3-15': processVocab(vocab2026_3_15, '2026-3-15'),
  '2026-3-16': processVocab(vocab2026_3_16, '2026-3-16'),
  '2026-3-17': processVocab(vocab2026_3_17, '2026-3-17'),
  '2026-3-18': processVocab(vocab2026_3_18, '2026-3-18'),
  '2026-3-19': processVocab(vocab2026_3_19, '2026-3-19'),
  '2026-3-2': processVocab(vocab2026_3_2, '2026-3-2'),
  '2026-3-20': processVocab(vocab2026_3_20, '2026-3-20'),
  '2026-3-21': processVocab(vocab2026_3_21, '2026-3-21'),
  '2026-3-22': processVocab(vocab2026_3_22, '2026-3-22'),
  '2026-3-23': processVocab(vocab2026_3_23, '2026-3-23'),
  '2026-3-24': processVocab(vocab2026_3_24, '2026-3-24'),
  '2026-3-25': processVocab(vocab2026_3_25, '2026-3-25'),
  '2026-3-26': processVocab(vocab2026_3_26, '2026-3-26'),
  '2026-3-27': processVocab(vocab2026_3_27, '2026-3-27'),
  '2026-3-28': processVocab(vocab2026_3_28, '2026-3-28'),
  '2026-3-29': processVocab(vocab2026_3_29, '2026-3-29'),
  '2026-3-3': processVocab(vocab2026_3_3, '2026-3-3'),
  '2026-3-30': processVocab(vocab2026_3_30, '2026-3-30'),
  '2026-3-31': processVocab(vocab2026_3_31, '2026-3-31'),
  '2026-3-32': processVocab(vocab2026_3_32, '2026-3-32'),
  '2026-3-33': processVocab(vocab2026_3_33, '2026-3-33'),
  '2026-3-34': processVocab(vocab2026_3_34, '2026-3-34'),
  '2026-3-35': processVocab(vocab2026_3_35, '2026-3-35'),
  '2026-3-36': processVocab(vocab2026_3_36, '2026-3-36'),
  '2026-3-37': processVocab(vocab2026_3_37, '2026-3-37'),
  '2026-3-38': processVocab(vocab2026_3_38, '2026-3-38'),
  '2026-3-39': processVocab(vocab2026_3_39, '2026-3-39'),
  '2026-3-4': processVocab(vocab2026_3_4, '2026-3-4'),
  '2026-3-40': processVocab(vocab2026_3_40, '2026-3-40'),
  '2026-3-41': processVocab(vocab2026_3_41, '2026-3-41'),
  '2026-3-42': processVocab(vocab2026_3_42, '2026-3-42'),
  '2026-3-43': processVocab(vocab2026_3_43, '2026-3-43'),
  '2026-3-44': processVocab(vocab2026_3_44, '2026-3-44'),
  '2026-3-45': processVocab(vocab2026_3_45, '2026-3-45'),
  '2026-3-46': processVocab(vocab2026_3_46, '2026-3-46'),
  '2026-3-5': processVocab(vocab2026_3_5, '2026-3-5'),
  '2026-3-6': processVocab(vocab2026_3_6, '2026-3-6'),
  '2026-3-7': processVocab(vocab2026_3_7, '2026-3-7'),
  '2026-3-8': processVocab(vocab2026_3_8, '2026-3-8'),
  '2026-3-9': processVocab(vocab2026_3_9, '2026-3-9'),
  '2026-4-1': processVocab(vocab2026_4_1, '2026-4-1'),
  '2026-4-2': processVocab(vocab2026_4_2, '2026-4-2'),
  '2026-4-3': processVocab(vocab2026_4_3, '2026-4-3'),
  '2026-4-4': processVocab(vocab2026_4_4, '2026-4-4'),
  '2026-4-5': processVocab(vocab2026_4_5, '2026-4-5'),
  '2026-4-6': processVocab(vocab2026_4_6, '2026-4-6'),
  '2026-4-7': processVocab(vocab2026_4_7, '2026-4-7'),
  '2026-4-8': processVocab(vocab2026_4_8, '2026-4-8'),
  '2026-5-1': processVocab(vocab2026_5_1, '2026-5-1'),
  '2026-5-2': processVocab(vocab2026_5_2, '2026-5-2'),
  '2026-5-3': processVocab(vocab2026_5_3, '2026-5-3'),
  '2026-5-4': processVocab(vocab2026_5_4, '2026-5-4'),
  '2026-5-5': processVocab(vocab2026_5_5, '2026-5-5'),
  '2026-5-6': processVocab(vocab2026_5_6, '2026-5-6'),
  '2026-5-7': processVocab(vocab2026_5_7, '2026-5-7'),
  '2026-5-8': processVocab(vocab2026_5_8, '2026-5-8'),
  '2026-5-9': processVocab(vocab2026_5_9, '2026-5-9'),
  '3-1': processVocab(vocab3_1, '3-1'),
  '3-10': processVocab(vocab3_10, '3-10'),
  '3-11': processVocab(vocab3_11, '3-11'),
  '3-12': processVocab(vocab3_12, '3-12'),
  '3-13': processVocab(vocab3_13, '3-13'),
  '3-14': processVocab(vocab3_14, '3-14'),
  '3-15': processVocab(vocab3_15, '3-15'),
  '3-16': processVocab(vocab3_16, '3-16'),
  '3-17': processVocab(vocab3_17, '3-17'),
  '3-18': processVocab(vocab3_18, '3-18'),
  '3-19': processVocab(vocab3_19, '3-19'),
  '3-2': processVocab(vocab3_2, '3-2'),
  '3-20': processVocab(vocab3_20, '3-20'),
  '3-21': processVocab(vocab3_21, '3-21'),
  '3-22': processVocab(vocab3_22, '3-22'),
  '3-23': processVocab(vocab3_23, '3-23'),
  '3-24': processVocab(vocab3_24, '3-24'),
  '3-25': processVocab(vocab3_25, '3-25'),
  '3-26': processVocab(vocab3_26, '3-26'),
  '3-27': processVocab(vocab3_27, '3-27'),
  '3-28': processVocab(vocab3_28, '3-28'),
  '3-29': processVocab(vocab3_29, '3-29'),
  '3-3': processVocab(vocab3_3, '3-3'),
  '3-30': processVocab(vocab3_30, '3-30'),
  '3-31': processVocab(vocab3_31, '3-31'),
  '3-32': processVocab(vocab3_32, '3-32'),
  '3-33': processVocab(vocab3_33, '3-33'),
  '3-34': processVocab(vocab3_34, '3-34'),
  '3-35': processVocab(vocab3_35, '3-35'),
  '3-36': processVocab(vocab3_36, '3-36'),
  '3-37': processVocab(vocab3_37, '3-37'),
  '3-38': processVocab(vocab3_38, '3-38'),
  '3-39': processVocab(vocab3_39, '3-39'),
  '3-4': processVocab(vocab3_4, '3-4'),
  '3-40': processVocab(vocab3_40, '3-40'),
  '3-41': processVocab(vocab3_41, '3-41'),
  '3-42': processVocab(vocab3_42, '3-42'),
  '3-43': processVocab(vocab3_43, '3-43'),
  '3-44': processVocab(vocab3_44, '3-44'),
  '3-45': processVocab(vocab3_45, '3-45'),
  '3-5': processVocab(vocab3_5, '3-5'),
  '3-6': processVocab(vocab3_6, '3-6'),
  '3-7': processVocab(vocab3_7, '3-7'),
  '3-8': processVocab(vocab3_8, '3-8'),
  '3-9': processVocab(vocab3_9, '3-9'),
  '4-1': processVocab(vocab4_1, '4-1'),
  '4-2': processVocab(vocab4_2, '4-2'),
  '4-3': processVocab(vocab4_3, '4-3'),
  '4-4': processVocab(vocab4_4, '4-4'),
  '4-5': processVocab(vocab4_5, '4-5'),
  '4-6': processVocab(vocab4_6, '4-6'),
  '4-7': processVocab(vocab4_7, '4-7'),
  '4-8': processVocab(vocab4_8, '4-8'),
  '5-1': processVocab(vocab5_1, '5-1'),
  '5-2': processVocab(vocab5_2, '5-2'),
  '5-3': processVocab(vocab5_3, '5-3'),
  '5-4': processVocab(vocab5_4, '5-4'),
  '5-5': processVocab(vocab5_5, '5-5'),
  '5-6': processVocab(vocab5_6, '5-6'),
  '5-7': processVocab(vocab5_7, '5-7'),
  '5-8': processVocab(vocab5_8, '5-8'),
};
