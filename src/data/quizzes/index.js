import { topic1Quizzes as itTopic1 } from './topic1.js'
import { topic2Quizzes as itTopic2 } from './topic2.js'
import { topic3Quizzes as itTopic3 } from './topic3.js'
import { topic4Quizzes as itTopic4 } from './topic4.js'
import { topic5Quizzes as itTopic5 } from './topic5.js'

import { topic1Quizzes as enTopic1 } from '../../locales/en/quizzes_topic1.js'
import { topic2Quizzes as enTopic2 } from '../../locales/en/quizzes_topic2.js'
import { topic3Quizzes as enTopic3 } from '../../locales/en/quizzes_topic3.js'
import { topic4Quizzes as enTopic4 } from '../../locales/en/quizzes_topic4.js'
import { topic5Quizzes as enTopic5 } from '../../locales/en/quizzes_topic5.js'

import { topic1Quizzes as esTopic1 } from '../../locales/es/quizzes_topic1.js'
import { topic2Quizzes as esTopic2 } from '../../locales/es/quizzes_topic2.js'
import { topic3Quizzes as esTopic3 } from '../../locales/es/quizzes_topic3.js'
import { topic4Quizzes as esTopic4 } from '../../locales/es/quizzes_topic4.js'
import { topic5Quizzes as esTopic5 } from '../../locales/es/quizzes_topic5.js'

import { topic1Quizzes as frTopic1 } from '../../locales/fr/quizzes_topic1.js'
import { topic2Quizzes as frTopic2 } from '../../locales/fr/quizzes_topic2.js'
import { topic3Quizzes as frTopic3 } from '../../locales/fr/quizzes_topic3.js'
import { topic4Quizzes as frTopic4 } from '../../locales/fr/quizzes_topic4.js'
import { topic5Quizzes as frTopic5 } from '../../locales/fr/quizzes_topic5.js'

import { topic1Quizzes as deTopic1 } from '../../locales/de/quizzes_topic1.js'
import { topic2Quizzes as deTopic2 } from '../../locales/de/quizzes_topic2.js'
import { topic3Quizzes as deTopic3 } from '../../locales/de/quizzes_topic3.js'
import { topic4Quizzes as deTopic4 } from '../../locales/de/quizzes_topic4.js'
import { topic5Quizzes as deTopic5 } from '../../locales/de/quizzes_topic5.js'

import { topic1Quizzes as ptTopic1 } from '../../locales/pt/quizzes_topic1.js'
import { topic2Quizzes as ptTopic2 } from '../../locales/pt/quizzes_topic2.js'
import { topic3Quizzes as ptTopic3 } from '../../locales/pt/quizzes_topic3.js'
import { topic4Quizzes as ptTopic4 } from '../../locales/pt/quizzes_topic4.js'
import { topic5Quizzes as ptTopic5 } from '../../locales/pt/quizzes_topic5.js'

import { topic1Quizzes as ruTopic1 } from '../../locales/ru/quizzes_topic1.js'
import { topic2Quizzes as ruTopic2 } from '../../locales/ru/quizzes_topic2.js'
import { topic3Quizzes as ruTopic3 } from '../../locales/ru/quizzes_topic3.js'
import { topic4Quizzes as ruTopic4 } from '../../locales/ru/quizzes_topic4.js'
import { topic5Quizzes as ruTopic5 } from '../../locales/ru/quizzes_topic5.js'

import { topic1Quizzes as zhTopic1 } from '../../locales/zh/quizzes_topic1.js'
import { topic2Quizzes as zhTopic2 } from '../../locales/zh/quizzes_topic2.js'
import { topic3Quizzes as zhTopic3 } from '../../locales/zh/quizzes_topic3.js'
import { topic4Quizzes as zhTopic4 } from '../../locales/zh/quizzes_topic4.js'
import { topic5Quizzes as zhTopic5 } from '../../locales/zh/quizzes_topic5.js'

export const itQuizzesByTopic = {
  1: itTopic1, 2: itTopic2, 3: itTopic3, 4: itTopic4, 5: itTopic5,
}

export const enQuizzesByTopic = {
  1: enTopic1, 2: enTopic2, 3: enTopic3, 4: enTopic4, 5: enTopic5,
}

export const esQuizzesByTopic = {
  1: esTopic1, 2: esTopic2, 3: esTopic3, 4: esTopic4, 5: esTopic5,
}

export const frQuizzesByTopic = {
  1: frTopic1, 2: frTopic2, 3: frTopic3, 4: frTopic4, 5: frTopic5,
}

export const deQuizzesByTopic = {
  1: deTopic1, 2: deTopic2, 3: deTopic3, 4: deTopic4, 5: deTopic5,
}

export const ptQuizzesByTopic = {
  1: ptTopic1, 2: ptTopic2, 3: ptTopic3, 4: ptTopic4, 5: ptTopic5,
}

export const ruQuizzesByTopic = {
  1: ruTopic1, 2: ruTopic2, 3: ruTopic3, 4: ruTopic4, 5: ruTopic5,
}

export const zhQuizzesByTopic = {
  1: zhTopic1, 2: zhTopic2, 3: zhTopic3, 4: zhTopic4, 5: zhTopic5,
}

export const quizzesDict = {
  it: itQuizzesByTopic,
  en: enQuizzesByTopic,
  es: esQuizzesByTopic,
  de: deQuizzesByTopic,
  fr: frQuizzesByTopic,
  pt: ptQuizzesByTopic,
  ru: ruQuizzesByTopic,
  zh: zhQuizzesByTopic,
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
