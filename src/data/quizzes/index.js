import { topic1Quizzes as itTopic1 } from './topic1.js'
import { topic2Quizzes as itTopic2 } from './topic2.js'
import { topic3Quizzes as itTopic3 } from './topic3.js'
import { topic4Quizzes as itTopic4 } from './topic4.js'
import { topic5Quizzes as itTopic5 } from './topic5.js'

import { topic1Quizzes as enTopic1 } from '../../locales/en/quizzes_topic1.js'
import { topic1Quizzes as esTopic1 } from '../../locales/es/quizzes_topic1.js'
import { topic2Quizzes as enTopic2 } from '../../locales/en/quizzes_topic2.js'
import { topic2Quizzes as esTopic2 } from '../../locales/es/quizzes_topic2.js'

export const itQuizzesByTopic = {
  1: itTopic1,
  2: itTopic2,
  3: itTopic3,
  4: itTopic4,
  5: itTopic5,
}

export const enQuizzesByTopic = {
  1: enTopic1,
  2: enTopic2,
  3: itTopic3,
  4: itTopic4,
  5: itTopic5,
}

export const esQuizzesByTopic = {
  1: esTopic1,
  2: esTopic2,
  3: itTopic3,
  4: itTopic4,
  5: itTopic5,
}

const fallbackQuizzesByTopic = itQuizzesByTopic;

export const quizzesDict = {
  it: itQuizzesByTopic,
  en: enQuizzesByTopic,
  es: esQuizzesByTopic,
  de: fallbackQuizzesByTopic,
  ru: fallbackQuizzesByTopic,
  pt: fallbackQuizzesByTopic,
  fr: fallbackQuizzesByTopic,
  zh: fallbackQuizzesByTopic,
}

export function getAllQuizzes(langQuizzesByTopic) {
  return [
    ...langQuizzesByTopic[1].map(q => ({ ...q, topicId: 1 })),
    ...langQuizzesByTopic[2].map(q => ({ ...q, topicId: 2 })),
    ...langQuizzesByTopic[3].map(q => ({ ...q, topicId: 3 })),
    ...langQuizzesByTopic[4].map(q => ({ ...q, topicId: 4 })),
    ...langQuizzesByTopic[5].map(q => ({ ...q, topicId: 5 })),
  ]
}
