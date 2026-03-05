// RHCSA Quizzes — Index
// Importa e aggrega tutti i quiz RHCSA per topic

import { rhcsaTopic1Quizzes } from './rhcsa_topic1.js'
// import { rhcsaTopic2Quizzes } from './rhcsa_topic2.js'  // TODO
// import { rhcsaTopic3Quizzes } from './rhcsa_topic3.js'  // TODO
// import { rhcsaTopic4Quizzes } from './rhcsa_topic4.js'  // TODO
// import { rhcsaTopic5Quizzes } from './rhcsa_topic5.js'  // TODO
// import { rhcsaTopic6Quizzes } from './rhcsa_topic6.js'  // TODO
// import { rhcsaTopic7Quizzes } from './rhcsa_topic7.js'  // TODO
// import { rhcsaTopic8Quizzes } from './rhcsa_topic8.js'  // TODO
// import { rhcsaTopic9Quizzes } from './rhcsa_topic9.js'  // TODO
// import { rhcsaTopic10Quizzes } from './rhcsa_topic10.js' // TODO

export const allRhcsaQuizzes = [
  ...rhcsaTopic1Quizzes,
  // ...rhcsaTopic2Quizzes,
  // ...rhcsaTopic3Quizzes,
  // ...rhcsaTopic4Quizzes,
  // ...rhcsaTopic5Quizzes,
  // ...rhcsaTopic6Quizzes,
  // ...rhcsaTopic7Quizzes,
  // ...rhcsaTopic8Quizzes,
  // ...rhcsaTopic9Quizzes,
  // ...rhcsaTopic10Quizzes,
]

export const rhcsaQuizzesByTopic = {
  1: rhcsaTopic1Quizzes,
  // 2: rhcsaTopic2Quizzes,
  // ...
}
