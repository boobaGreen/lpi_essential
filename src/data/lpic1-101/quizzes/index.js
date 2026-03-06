// LPIC-1 101 Quizzes — Index completo
// 4 topic, ~224 domande MCQ totali

// --- Italiano (base) ---
import { lpic1_101_topic1Quizzes } from './lpic1_101_topic1.js'
import { lpic1_101_topic2Quizzes } from './lpic1_101_topic2.js'
import { lpic1_101_topic3Quizzes } from './lpic1_101_topic3.js'
import { lpic1_101_topic4Quizzes } from './lpic1_101_topic4.js'

// --- Inglese (fallback) ---
import { lpic1_101_topic1QuizzesEN } from './en/lpic1_101_topic1_en.js'
import { lpic1_101_topic2QuizzesEN } from './en/lpic1_101_topic2_en.js'
import { lpic1_101_topic3QuizzesEN } from './en/lpic1_101_topic3_en.js'
import { lpic1_101_topic4QuizzesEN } from './en/lpic1_101_topic4_en.js'

// --- Español (traducción) ---
import { lpic1_101_topic1QuizzesES } from './es/lpic1_101_topic1_es.js'
import { lpic1_101_topic2QuizzesES } from './es/lpic1_101_topic2_es.js'
import { lpic1_101_topic3QuizzesES } from './es/lpic1_101_topic3_es.js'
import { lpic1_101_topic4QuizzesES } from './es/lpic1_101_topic4_es.js'

// --- By Topic Dictionaries ---
export const lpic1_101_quizzesByTopicIT = {
  1: lpic1_101_topic1Quizzes,
  2: lpic1_101_topic2Quizzes,
  3: lpic1_101_topic3Quizzes,
  4: lpic1_101_topic4Quizzes,
}

export const lpic1_101_quizzesByTopicEN = {
  1: lpic1_101_topic1QuizzesEN,
  2: lpic1_101_topic2QuizzesEN,
  3: lpic1_101_topic3QuizzesEN,
  4: lpic1_101_topic4QuizzesEN,
}

export const lpic1_101_quizzesByTopicES = {
  1: lpic1_101_topic1QuizzesES,
  2: lpic1_101_topic2QuizzesES,
  3: lpic1_101_topic3QuizzesES,
  4: lpic1_101_topic4QuizzesES,
}


// --- All Quizzes Flat Array (IT, EN, ES) ---
export const allLpic1_101_quizzesIT = [
  ...lpic1_101_topic1Quizzes,
  ...lpic1_101_topic2Quizzes,
  ...lpic1_101_topic3Quizzes,
  ...lpic1_101_topic4Quizzes,
]

export const allLpic1_101_quizzesEN = [
  ...lpic1_101_topic1QuizzesEN,
  ...lpic1_101_topic2QuizzesEN,
  ...lpic1_101_topic3QuizzesEN,
  ...lpic1_101_topic4QuizzesEN,
]

export const allLpic1_101_quizzesES = [
  ...lpic1_101_topic1QuizzesES,
  ...lpic1_101_topic2QuizzesES,
  ...lpic1_101_topic3QuizzesES,
  ...lpic1_101_topic4QuizzesES,
]

// --- Per-locale exports ---
// IT base, EN as fallback for all un-translated languages
export const lpic1_101_quizzesDict = {
  it: lpic1_101_quizzesByTopicIT,
  en: lpic1_101_quizzesByTopicEN,
  es: lpic1_101_quizzesByTopicES,
  fr: lpic1_101_quizzesByTopicEN,
  de: lpic1_101_quizzesByTopicEN,
  pt: lpic1_101_quizzesByTopicEN,
  ru: lpic1_101_quizzesByTopicEN,
  zh: lpic1_101_quizzesByTopicEN,
}

export const lpic1_101_allQuizzesDict = {
  it: allLpic1_101_quizzesIT,
  en: allLpic1_101_quizzesEN,
  es: allLpic1_101_quizzesES,
  fr: allLpic1_101_quizzesEN,
  de: allLpic1_101_quizzesEN,
  pt: allLpic1_101_quizzesEN,
  ru: allLpic1_101_quizzesEN,
  zh: allLpic1_101_quizzesEN,
}
