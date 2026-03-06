// RHCSA Quizzes — Index completo
// 10 topic, ~177 domande MCQ totali

// --- Italiano ---
import { rhcsaTopic1Quizzes } from './rhcsa_topic1.js'
import { rhcsaTopic2Quizzes } from './rhcsa_topic2.js'
import { rhcsaTopic3Quizzes } from './rhcsa_topic3.js'
import { rhcsaTopic4Quizzes } from './rhcsa_topic4.js'
import { rhcsaTopic5Quizzes } from './rhcsa_topic5.js'
import { rhcsaTopic6Quizzes } from './rhcsa_topic6.js'
import { rhcsaTopic7Quizzes } from './rhcsa_topic7.js'
import { rhcsaTopic8Quizzes } from './rhcsa_topic8.js'
import { rhcsaTopic9Quizzes } from './rhcsa_topic9.js'
import { rhcsaTopic10Quizzes } from './rhcsa_topic10.js'

// --- English ---
import { rhcsaTopic1QuizzesEN } from './en/rhcsa_topic1_en.js'
import { rhcsaTopic2QuizzesEN } from './en/rhcsa_topic2_en.js'
import { rhcsaTopic3QuizzesEN } from './en/rhcsa_topic3_en.js'
import { rhcsaTopic4QuizzesEN } from './en/rhcsa_topic4_en.js'
import { rhcsaTopic5QuizzesEN } from './en/rhcsa_topic5_en.js'
import { rhcsaTopic6QuizzesEN } from './en/rhcsa_topic6_en.js'
import { rhcsaTopic7QuizzesEN } from './en/rhcsa_topic7_en.js'
import { rhcsaTopic8QuizzesEN } from './en/rhcsa_topic8_en.js'
import { rhcsaTopic9QuizzesEN } from './en/rhcsa_topic9_en.js'
import { rhcsaTopic10QuizzesEN } from './en/rhcsa_topic10_en.js'

// --- Dictionaries By Topic ---
export const rhcsaQuizzesByTopicIT = {
  1: rhcsaTopic1Quizzes,
  2: rhcsaTopic2Quizzes,
  3: rhcsaTopic3Quizzes,
  4: rhcsaTopic4Quizzes,
  5: rhcsaTopic5Quizzes,
  6: rhcsaTopic6Quizzes,
  7: rhcsaTopic7Quizzes,
  8: rhcsaTopic8Quizzes,
  9: rhcsaTopic9Quizzes,
  10: rhcsaTopic10Quizzes,
}

export const rhcsaQuizzesByTopicEN = {
  1: rhcsaTopic1QuizzesEN,
  2: rhcsaTopic2QuizzesEN,
  3: rhcsaTopic3QuizzesEN,
  4: rhcsaTopic4QuizzesEN,
  5: rhcsaTopic5QuizzesEN,
  6: rhcsaTopic6QuizzesEN,
  7: rhcsaTopic7QuizzesEN,
  8: rhcsaTopic8QuizzesEN,
  9: rhcsaTopic9QuizzesEN,
  10: rhcsaTopic10QuizzesEN,
}

// --- All Quizzes Flat Arrays ---
export const allRhcsaQuizzesIT = [
  ...rhcsaTopic1Quizzes,
  ...rhcsaTopic2Quizzes,
  ...rhcsaTopic3Quizzes,
  ...rhcsaTopic4Quizzes,
  ...rhcsaTopic5Quizzes,
  ...rhcsaTopic6Quizzes,
  ...rhcsaTopic7Quizzes,
  ...rhcsaTopic8Quizzes,
  ...rhcsaTopic9Quizzes,
  ...rhcsaTopic10Quizzes,
]

export const allRhcsaQuizzesEN = [
  ...rhcsaTopic1QuizzesEN,
  ...rhcsaTopic2QuizzesEN,
  ...rhcsaTopic3QuizzesEN,
  ...rhcsaTopic4QuizzesEN,
  ...rhcsaTopic5QuizzesEN,
  ...rhcsaTopic6QuizzesEN,
  ...rhcsaTopic7QuizzesEN,
  ...rhcsaTopic8QuizzesEN,
  ...rhcsaTopic9QuizzesEN,
  ...rhcsaTopic10QuizzesEN,
]

// --- Exports per locale ---
export const rhcsaQuizzesDict = {
  it: rhcsaQuizzesByTopicIT,
  en: rhcsaQuizzesByTopicEN,
}

export const rhcsaAllQuizzesDict = {
  it: allRhcsaQuizzesIT,
  en: allRhcsaQuizzesEN,
}
