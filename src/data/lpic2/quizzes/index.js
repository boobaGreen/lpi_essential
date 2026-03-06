import { lpic2_quiz_pool as quizzes_en } from './en/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_it } from './it/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_es } from './es/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_fr } from './fr/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_de } from './de/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_pt } from './pt/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_ru } from './ru/lpic2_quiz_pool.js'
import { lpic2_quiz_pool as quizzes_zh } from './zh/lpic2_quiz_pool.js'

// Simple map
// We don't have separate sub-topics arranged by object here, it's just an array of quizzes
export const lpic2_quizzesDict = {
  en: { all: quizzes_en },
  it: { all: quizzes_it },
  es: { all: quizzes_es },
  fr: { all: quizzes_fr },
  de: { all: quizzes_de },
  pt: { all: quizzes_pt },
  ru: { all: quizzes_ru },
  zh: { all: quizzes_zh },
}

export const lpic2_allQuizzesDict = {
  en: quizzes_en,
  it: quizzes_it,
  es: quizzes_es,
  fr: quizzes_fr,
  de: quizzes_de,
  pt: quizzes_pt,
  ru: quizzes_ru,
  zh: quizzes_zh,
}
