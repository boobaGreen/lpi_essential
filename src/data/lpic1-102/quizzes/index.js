import { lpic1_102_topic1Quizzes } from './lpic1_102_topic1_it';
import { lpic1_102_topic2Quizzes } from './lpic1_102_topic2_it';
import { lpic1_102_topic3Quizzes } from './lpic1_102_topic3_it';
import { lpic1_102_topic4Quizzes } from './lpic1_102_topic4_it';
import { lpic1_102_topic5Quizzes } from './lpic1_102_topic5_it';
import { lpic1_102_topic6Quizzes } from './lpic1_102_topic6_it';

import { lpic1_102_topic1Quizzes_en } from './lpic1_102_topic1_en';
import { lpic1_102_topic2Quizzes_en } from './lpic1_102_topic2_en';
import { lpic1_102_topic3Quizzes_en } from './lpic1_102_topic3_en';
import { lpic1_102_topic4Quizzes_en } from './lpic1_102_topic4_en';
import { lpic1_102_topic5Quizzes_en } from './lpic1_102_topic5_en';
import { lpic1_102_topic6Quizzes_en } from './lpic1_102_topic6_en';

export const quizzes_it = {
  1: lpic1_102_topic1Quizzes,
  2: lpic1_102_topic2Quizzes,
  3: lpic1_102_topic3Quizzes,
  4: lpic1_102_topic4Quizzes,
  5: lpic1_102_topic5Quizzes,
  6: lpic1_102_topic6Quizzes,
};

export const allQuizzes_it = [
  ...lpic1_102_topic1Quizzes,
  ...lpic1_102_topic2Quizzes,
  ...lpic1_102_topic3Quizzes,
  ...lpic1_102_topic4Quizzes,
  ...lpic1_102_topic5Quizzes,
  ...lpic1_102_topic6Quizzes,
];

export const quizzes_en = {
  1: lpic1_102_topic1Quizzes_en,
  2: lpic1_102_topic2Quizzes_en,
  3: lpic1_102_topic3Quizzes_en,
  4: lpic1_102_topic4Quizzes_en,
  5: lpic1_102_topic5Quizzes_en,
  6: lpic1_102_topic6Quizzes_en,
};

export const allQuizzes_en = [
  ...lpic1_102_topic1Quizzes_en,
  ...lpic1_102_topic2Quizzes_en,
  ...lpic1_102_topic3Quizzes_en,
  ...lpic1_102_topic4Quizzes_en,
  ...lpic1_102_topic5Quizzes_en,
  ...lpic1_102_topic6Quizzes_en,
];

// Fallbacks for other languages
export const quizzes_es = { ...quizzes_en };
export const allQuizzes_es = [ ...allQuizzes_en ];
export const quizzes_fr = { ...quizzes_en };
export const allQuizzes_fr = [ ...allQuizzes_en ];
export const quizzes_de = { ...quizzes_en };
export const allQuizzes_de = [ ...allQuizzes_en ];
export const quizzes_pt = { ...quizzes_en };
export const allQuizzes_pt = [ ...allQuizzes_en ];
export const quizzes_ru = { ...quizzes_en };
export const allQuizzes_ru = [ ...allQuizzes_en ];
export const quizzes_zh = { ...quizzes_en };
export const allQuizzes_zh = [ ...allQuizzes_en ];
