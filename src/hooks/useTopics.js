import { useLanguage } from '../context/LanguageContext.jsx'
import { quizzesDict, getAllQuizzes } from '../data/quizzes/index.js'
import { extendedContentDict } from '../data/extendedContent/index.js'
import { itTopics } from '../locales/it/topics.js'
import { enTopics } from '../locales/en/topics.js'
import { esTopics } from '../locales/es/topics.js'
import { deTopics } from '../locales/de/topics.js'
import { ruTopics } from '../locales/ru/topics.js'
import { ptTopics } from '../locales/pt/topics.js'
import { frTopics } from '../locales/fr/topics.js'
import { zhTopics } from '../locales/zh/topics.js'

import { lessonContent as itLessonContent } from '../locales/it/lessonContent.js'
import { lessonContent as enLessonContent } from '../locales/en/lessonContent.js'
import { lessonContent as esLessonContent } from '../locales/es/lessonContent.js'

const fallbackLessonContent = itLessonContent

const lessonContentDict = {
  it: itLessonContent,
  en: enLessonContent,
  es: esLessonContent,
  de: fallbackLessonContent,
  ru: fallbackLessonContent,
  pt: fallbackLessonContent,
  fr: fallbackLessonContent,
  zh: fallbackLessonContent,
}

const topicDict = {
  it: itTopics,
  en: enTopics,
  es: esTopics,
  de: deTopics,
  ru: ruTopics,
  pt: ptTopics,
  fr: frTopics,
  zh: zhTopics,
}

export function useTopics() {
  const { currentLang } = useLanguage()
  const topics = topicDict[currentLang] || topicDict['it']
  const lessonContent = lessonContentDict[currentLang] || lessonContentDict['it']
  const quizzesByTopic = quizzesDict[currentLang] || quizzesDict['it']
  const allQuizzes = Object.keys(quizzesByTopic).length > 0 ? getAllQuizzes(quizzesByTopic) : []
  const extendedContent = extendedContentDict[currentLang] || extendedContentDict['it']

  const getTopic = (id) => {
    return topics.find(t => t.id === Number(id))
  }

  const getLesson = (topicId, lessonId) => {
    const topic = getTopic(topicId)
    return topic?.lessons.find(l => l.id === lessonId)
  }

  const getTotalLessons = () => {
    return topics.reduce((sum, t) => sum + t.lessons.length, 0)
  }

  return { topics, getTopic, getLesson, getTotalLessons, lessonContent, quizzesByTopic, allQuizzes, extendedContent }
}
