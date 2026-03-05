import { topic1Quizzes } from './topic1.js'
import { topic2Quizzes } from './topic2.js'
import { topic3Quizzes } from './topic3.js'
import { topic4Quizzes } from './topic4.js'
import { topic5Quizzes } from './topic5.js'

export const quizzesByTopic = {
  1: topic1Quizzes,
  2: topic2Quizzes,
  3: topic3Quizzes,
  4: topic4Quizzes,
  5: topic5Quizzes,
}

// Flat list of ALL quizzes for exam simulation
export const allQuizzes = [
  ...topic1Quizzes.map(q => ({ ...q, topicId: 1 })),
  ...topic2Quizzes.map(q => ({ ...q, topicId: 2 })),
  ...topic3Quizzes.map(q => ({ ...q, topicId: 3 })),
  ...topic4Quizzes.map(q => ({ ...q, topicId: 4 })),
  ...topic5Quizzes.map(q => ({ ...q, topicId: 5 })),
]
