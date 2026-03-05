// RHCSA Quizzes — Index completo
// 10 topic, ~177 domande MCQ totali

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

export const allRhcsaQuizzes = [
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

export const rhcsaQuizzesByTopic = {
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
