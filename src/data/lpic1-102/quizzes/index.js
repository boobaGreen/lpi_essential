import { lpic1_102_topic1Quizzes } from './lpic1_102_topic1_it';
import { lpic1_102_topic2Quizzes } from './lpic1_102_topic2_it';

export const quizzes_it = {
  1: lpic1_102_topic1Quizzes,
  2: lpic1_102_topic2Quizzes,
};

export const allQuizzes_it = [
  ...lpic1_102_topic1Quizzes,
  ...lpic1_102_topic2Quizzes,
];


export const quizzes_en = { ...quizzes_it }; // Fallback
export const allQuizzes_en = [ ...allQuizzes_it ]; // Fallback
