import { useLanguage } from '../context/LanguageContext.jsx'
import { useCourse } from '../context/CourseContext.jsx'

// ─── LPI Linux Essentials ───────────────────────────────────────────────────
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
import { lessonContent as deLessonContent } from '../locales/de/lessonContent.js'
import { lessonContent as frLessonContent } from '../locales/fr/lessonContent.js'
import { lessonContent as ptLessonContent } from '../locales/pt/lessonContent.js'
import { lessonContent as ruLessonContent } from '../locales/ru/lessonContent.js'
import { lessonContent as zhLessonContent } from '../locales/zh/lessonContent.js'

// ─── RHCSA ──────────────────────────────────────────────────────────────────
import { rhcsaTopics as rhcsaTopicsIT } from '../locales/it/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsEN } from '../locales/en/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsDE } from '../locales/de/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsFR } from '../locales/fr/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsES } from '../locales/es/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsPT } from '../locales/pt/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsRU } from '../locales/ru/rhcsa_topics.js'
import { rhcsaTopics as rhcsaTopicsZH } from '../locales/zh/rhcsa_topics.js'
import { rhcsaLessonContent as rhcsaLessonContentIT } from '../locales/it/rhcsa_lessonContent.js'
import { rhcsaLessonContent as rhcsaLessonContentEN } from '../locales/en/rhcsa_lessonContent.js'
import { rhcsaLessonContentES } from '../locales/es/rhcsa_lessonContent.js'
import { rhcsaLessonContentFR } from '../locales/fr/rhcsa_lessonContent.js'
import { rhcsaLessonContentDE } from '../locales/de/rhcsa_lessonContent.js'
import { rhcsaLessonContentPT } from '../locales/pt/rhcsa_lessonContent.js'
import { rhcsaLessonContentRU } from '../locales/ru/rhcsa_lessonContent.js'
import { rhcsaLessonContentZH } from '../locales/zh/rhcsa_lessonContent.js'
import { rhcsaQuizzesDict, rhcsaAllQuizzesDict } from '../data/rhcsa/quizzes/index.js'
import { rhcsaExtendedContentDict } from '../data/rhcsa/extendedContent/index.js'

// ─── LPIC-1 101 ──────────────────────────────────────────────────────────────
import { lpic1_101_topics as lpic1_101_TopicsIT } from '../locales/it/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsEN } from '../locales/en/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsES } from '../locales/es/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsFR } from '../locales/fr/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsDE } from '../locales/de/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsPT } from '../locales/pt/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsRU } from '../locales/ru/lpic1_101_topics.js'
import { lpic1_101_topics as lpic1_101_TopicsZH } from '../locales/zh/lpic1_101_topics.js'
import { lpic1_101_lessonContent as lpic1_101_LessonContentIT } from '../locales/it/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent as lpic1_101_LessonContentEN } from '../locales/en/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent_es as lpic1_101_LessonContentES } from '../locales/es/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent_fr as lpic1_101_LessonContentFR } from '../locales/fr/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent_de as lpic1_101_LessonContentDE } from '../locales/de/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent_pt as lpic1_101_LessonContentPT } from '../locales/pt/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent_ru as lpic1_101_LessonContentRU } from '../locales/ru/lpic1_101_lessonContent.js'
import { lpic1_101_lessonContent_zh as lpic1_101_LessonContentZH } from '../locales/zh/lpic1_101_lessonContent.js'
import { lpic1_101_quizzesDict, lpic1_101_allQuizzesDict } from '../data/lpic1-101/quizzes/index.js'
import { lpic1_101_extendedContentDict } from '../data/lpic1-101/extendedContent/index.js'

// ─── LPIC-1 102 ──────────────────────────────────────────────────────────────
import { lpic1_102_topics as lpic1_102_TopicsIT } from '../locales/it/lpic1_102_topics.js'
import { lpic1_102_lessonContent as lpic1_102_LessonContentIT } from '../locales/it/lpic1_102_lessonContent.js'
import { quizzes_it as lpic1_102_quizzesIT, allQuizzes_it as lpic1_102_allQuizzesIT } from '../data/lpic1-102/quizzes/index.js'
import { extendedContent as lpic1_102_extendedContent } from '../data/lpic1-102/extendedContent/index.js'


// ─── Dizionari LPI ──────────────────────────────────────────────────────────
const lessonContentDict = {
  it: itLessonContent, en: enLessonContent, es: esLessonContent,
  de: deLessonContent, fr: frLessonContent, pt: ptLessonContent,
  ru: ruLessonContent, zh: zhLessonContent,
}
const topicDict = {
  it: itTopics, en: enTopics, es: esTopics, de: deTopics,
  ru: ruTopics, pt: ptTopics, fr: frTopics, zh: zhTopics,
}

// ─── Dizionari RHCSA ─────────────────────────────────────────────────────────
const rhcsaTopicDict = {
  it: rhcsaTopicsIT, en: rhcsaTopicsEN, de: rhcsaTopicsDE, fr: rhcsaTopicsFR,
  es: rhcsaTopicsES, pt: rhcsaTopicsPT, ru: rhcsaTopicsRU, zh: rhcsaTopicsZH,
}
// Per le lingue senza traduzione RHCSA, usare EN come fallback (poi IT come ultima risorsa)
const getRhcsaTopics = (lang) =>
  (rhcsaTopicDict[lang]?.length ? rhcsaTopicDict[lang] : null)
  ?? rhcsaTopicsEN

// lessonContent RHCSA: IT e EN complete, altre lingue fallback a EN poi IT
const rhcsaLessonContentDict = {
  it: rhcsaLessonContentIT,
  en: rhcsaLessonContentEN,
  es: rhcsaLessonContentES,
  fr: rhcsaLessonContentFR,
  de: rhcsaLessonContentDE,
  pt: rhcsaLessonContentPT,
  ru: rhcsaLessonContentRU,
  zh: rhcsaLessonContentZH,
}

// ─── Dizionari LPIC-1 101 ────────────────────────────────────────────────────
const lpic1_101_TopicDict = {
  it: lpic1_101_TopicsIT, en: lpic1_101_TopicsEN, es: lpic1_101_TopicsES,
  fr: lpic1_101_TopicsFR, de: lpic1_101_TopicsDE, pt: lpic1_101_TopicsPT,
  ru: lpic1_101_TopicsRU, zh: lpic1_101_TopicsZH,
}
// lessonContent: IT e EN complete, altre lingue fallback a EN
const lpic1_101_LessonContentDict = {
  it: lpic1_101_LessonContentIT,
  en: lpic1_101_LessonContentEN,
  es: lpic1_101_LessonContentES,
  fr: lpic1_101_LessonContentFR,
  de: lpic1_101_LessonContentDE,
  pt: lpic1_101_LessonContentPT,
  ru: lpic1_101_LessonContentRU,
  zh: lpic1_101_LessonContentZH,
}

// ─── Dizionari LPIC-1 102 ────────────────────────────────────────────────────
const lpic1_102_TopicDict = { it: lpic1_102_TopicsIT, en: lpic1_102_TopicsIT }
const lpic1_102_LessonContentDict = { it: lpic1_102_LessonContentIT, en: lpic1_102_LessonContentIT }
const lpic1_102_quizzesDict = { it: lpic1_102_quizzesIT, en: lpic1_102_quizzesIT }
const lpic1_102_allQuizzesDict = { it: lpic1_102_allQuizzesIT, en: lpic1_102_allQuizzesIT }


export function useTopics() {
  const { currentLang } = useLanguage()
  const { currentCourseId } = useCourse()

  // ─── LPIC-1 101 ──────────────────────────────────────────────────────────
  if (currentCourseId === 'lpic1-101') {
    const topics = lpic1_101_TopicDict[currentLang] ?? lpic1_101_TopicDict['it']
    const lessonContent = lpic1_101_LessonContentDict[currentLang] ?? lpic1_101_LessonContentDict['it']
    const quizzesByTopic = lpic1_101_quizzesDict[currentLang] ?? lpic1_101_quizzesDict['it']
    const allQuizzes = lpic1_101_allQuizzesDict[currentLang] ?? lpic1_101_allQuizzesDict['it']

    const getTopic = (id) => topics.find(t => t.id === Number(id))
    const getLesson = (topicId, lessonId) => getTopic(topicId)?.lessons.find(l => l.id === lessonId)
    const getTotalLessons = () => topics.reduce((sum, t) => sum + t.lessons.length, 0)

    return {
      topics,
      getTopic,
      getLesson,
      getTotalLessons,
      lessonContent,
      quizzesByTopic,
      allQuizzes,
      extendedContent: lpic1_101_extendedContentDict[currentLang] ?? lpic1_101_extendedContentDict['it'] ?? {},
    }
  }

  // ─── LPIC-1 102 ──────────────────────────────────────────────────────────
  if (currentCourseId === 'lpic1-102') {
    const topics = lpic1_102_TopicDict[currentLang] ?? lpic1_102_TopicDict['it']
    const lessonContent = lpic1_102_LessonContentDict[currentLang] ?? lpic1_102_LessonContentDict['it']
    const quizzesByTopic = lpic1_102_quizzesDict[currentLang] ?? lpic1_102_quizzesDict['it']
    const allQuizzes = lpic1_102_allQuizzesDict[currentLang] ?? lpic1_102_allQuizzesDict['it']

    const getTopic = (id) => topics.find(t => t.id === Number(id))
    const getLesson = (topicId, lessonId) => getTopic(topicId)?.lessons.find(l => l.id === lessonId)
    const getTotalLessons = () => topics.reduce((sum, t) => sum + t.lessons.length, 0)

    return {
      topics,
      getTopic,
      getLesson,
      getTotalLessons,
      lessonContent,
      quizzesByTopic,
      allQuizzes,
      extendedContent: lpic1_102_extendedContent[currentLang] ?? lpic1_102_extendedContent['it'] ?? {},
    }
  }

  // ─── RHCSA ────────────────────────────────────────────────────────────────
  if (currentCourseId === 'rhcsa') {
    const topics = getRhcsaTopics(currentLang)
    const lessonContent = rhcsaLessonContentDict[currentLang] ?? rhcsaLessonContentDict['en'] ?? rhcsaLessonContentDict['it']
    
    // Fallback a EN se non c'è quiz trans, e in fine a IT
    const quizzesByTopic = rhcsaQuizzesDict[currentLang] ?? rhcsaQuizzesDict['en'] ?? rhcsaQuizzesDict['it']
    const allQuizzes = rhcsaAllQuizzesDict[currentLang] ?? rhcsaAllQuizzesDict['en'] ?? rhcsaAllQuizzesDict['it']

    const getTopic = (id) => topics.find(t => t.id === Number(id))
    const getLesson = (topicId, lessonId) => getTopic(topicId)?.lessons.find(l => l.id === lessonId)
    const getTotalLessons = () => topics.reduce((sum, t) => sum + t.lessons.length, 0)

    return {
      topics,
      getTopic,
      getLesson,
      getTotalLessons,
      lessonContent,
      quizzesByTopic,
      allQuizzes,
      extendedContent: rhcsaExtendedContentDict[currentLang] ?? rhcsaExtendedContentDict['en'] ?? rhcsaExtendedContentDict['it'] ?? {},
    }
  }

  // ─── LPI Linux Essentials (default) ──────────────────────────────────────
  const topics = topicDict[currentLang] || topicDict['it']
  const lessonContent = lessonContentDict[currentLang] || lessonContentDict['it']
  const quizzesByTopic = quizzesDict[currentLang] || quizzesDict['it']
  const allQuizzes = Object.keys(quizzesByTopic).length > 0 ? getAllQuizzes(quizzesByTopic) : []
  const extendedContent = extendedContentDict[currentLang] || extendedContentDict['it']

  const getTopic = (id) => topics.find(t => t.id === Number(id))
  const getLesson = (topicId, lessonId) => getTopic(topicId)?.lessons.find(l => l.id === lessonId)
  const getTotalLessons = () => topics.reduce((sum, t) => sum + t.lessons.length, 0)

  return { topics, getTopic, getLesson, getTotalLessons, lessonContent, quizzesByTopic, allQuizzes, extendedContent }
}
