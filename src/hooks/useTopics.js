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
import { lpic1_101_lessonContent_en as lpic1_101_LessonContentEN } from '../locales/en/lpic1_101_lessonContent.js'
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
import { lpic1_102_topics as lpic1_102_TopicsEN } from '../locales/en/lpic1_102_topics.js'
import { lpic1_102_topics as lpic1_102_TopicsES } from '../locales/es/lpic1_102_topics.js'
import { lpic1_102_topics as lpic1_102_TopicsFR } from '../locales/fr/lpic1_102_topics.js'
import { lpic1_102_topics as lpic1_102_TopicsDE } from '../locales/de/lpic1_102_topics.js'
import { lpic1_102_topics as lpic1_102_TopicsPT } from '../locales/pt/lpic1_102_topics.js'
import { lpic1_102_topics as lpic1_102_TopicsRU } from '../locales/ru/lpic1_102_topics.js'
import { lpic1_102_topics as lpic1_102_TopicsZH } from '../locales/zh/lpic1_102_topics.js'
import { lpic1_102_lessonContent as lpic1_102_LessonContentIT } from '../locales/it/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_en as lpic1_102_LessonContentEN } from '../locales/en/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_es as lpic1_102_LessonContentES } from '../locales/es/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_fr as lpic1_102_LessonContentFR } from '../locales/fr/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_de as lpic1_102_LessonContentDE } from '../locales/de/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_pt as lpic1_102_LessonContentPT } from '../locales/pt/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_ru as lpic1_102_LessonContentRU } from '../locales/ru/lpic1_102_lessonContent.js'
import { lpic1_102_lessonContent_zh as lpic1_102_LessonContentZH } from '../locales/zh/lpic1_102_lessonContent.js'
import { quizzes_it as lpic1_102_quizzesIT, allQuizzes_it as lpic1_102_allQuizzesIT, quizzes_en as lpic1_102_quizzesEN, allQuizzes_en as lpic1_102_allQuizzesEN, quizzes_es as lpic1_102_quizzesES, allQuizzes_es as lpic1_102_allQuizzesES, quizzes_fr as lpic1_102_quizzesFR, allQuizzes_fr as lpic1_102_allQuizzesFR, quizzes_de as lpic1_102_quizzesDE, allQuizzes_de as lpic1_102_allQuizzesDE, quizzes_pt as lpic1_102_quizzesPT, allQuizzes_pt as lpic1_102_allQuizzesPT, quizzes_ru as lpic1_102_quizzesRU, allQuizzes_ru as lpic1_102_allQuizzesRU, quizzes_zh as lpic1_102_quizzesZH, allQuizzes_zh as lpic1_102_allQuizzesZH } from '../data/lpic1-102/quizzes/index.js'
import { extendedContent as lpic1_102_extendedContent } from '../data/lpic1-102/extendedContent/index.js'

// ─── LPIC-2 ──────────────────────────────────────────────────────────────────
import { lpic2_topics as lpic2_TopicsIT } from '../locales/it/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsEN } from '../locales/en/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsES } from '../locales/es/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsFR } from '../locales/fr/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsDE } from '../locales/de/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsPT } from '../locales/pt/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsRU } from '../locales/ru/lpic2_topics.js'
import { lpic2_topics as lpic2_TopicsZH } from '../locales/zh/lpic2_topics.js'

import { lpic2_lessonContent as lpic2_LessonContentIT } from '../locales/it/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentEN } from '../locales/en/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentES } from '../locales/es/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentFR } from '../locales/fr/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentDE } from '../locales/de/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentPT } from '../locales/pt/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentRU } from '../locales/ru/lpic2_lessonContent.js'
import { lpic2_lessonContent as lpic2_LessonContentZH } from '../locales/zh/lpic2_lessonContent.js'

import { lpic2_quizzesDict, lpic2_allQuizzesDict } from '../data/lpic2/quizzes/index.js'
import { lpic2_extendedContentDict } from '../data/lpic2/extendedContent/index.js'

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
const lpic1_102_TopicDict = { 
  it: lpic1_102_TopicsIT, en: lpic1_102_TopicsEN, es: lpic1_102_TopicsES,
  fr: lpic1_102_TopicsFR, de: lpic1_102_TopicsDE, pt: lpic1_102_TopicsPT,
  ru: lpic1_102_TopicsRU, zh: lpic1_102_TopicsZH
}
const lpic1_102_LessonContentDict = { 
  it: lpic1_102_LessonContentIT, en: lpic1_102_LessonContentEN, es: lpic1_102_LessonContentES,
  fr: lpic1_102_LessonContentFR, de: lpic1_102_LessonContentDE, pt: lpic1_102_LessonContentPT,
  ru: lpic1_102_LessonContentRU, zh: lpic1_102_LessonContentZH
}
const lpic1_102_quizzesDict = { 
  it: lpic1_102_quizzesIT, en: lpic1_102_quizzesEN, es: lpic1_102_quizzesES,
  fr: lpic1_102_quizzesFR, de: lpic1_102_quizzesDE, pt: lpic1_102_quizzesPT,
  ru: lpic1_102_quizzesRU, zh: lpic1_102_quizzesZH
}
const lpic1_102_allQuizzesDict = { 
  it: lpic1_102_allQuizzesIT, en: lpic1_102_allQuizzesEN, es: lpic1_102_allQuizzesES,
  fr: lpic1_102_allQuizzesFR, de: lpic1_102_allQuizzesDE, pt: lpic1_102_allQuizzesPT,
  ru: lpic1_102_allQuizzesRU, zh: lpic1_102_allQuizzesZH
}

// ─── Dizionari LPIC-2 ────────────────────────────────────────────────────────
const lpic2_TopicDict = { 
  it: lpic2_TopicsIT, en: lpic2_TopicsEN, es: lpic2_TopicsES,
  fr: lpic2_TopicsFR, de: lpic2_TopicsDE, pt: lpic2_TopicsPT,
  ru: lpic2_TopicsRU, zh: lpic2_TopicsZH
}
const lpic2_LessonContentDict = { 
  it: lpic2_LessonContentIT, en: lpic2_LessonContentEN, es: lpic2_LessonContentES,
  fr: lpic2_LessonContentFR, de: lpic2_LessonContentDE, pt: lpic2_LessonContentPT,
  ru: lpic2_LessonContentRU, zh: lpic2_LessonContentZH
}








export function useTopics() {
  const { currentLang } = useLanguage()
  const { currentCourseId } = useCourse()

  // ─── LPIC-1 101 ──────────────────────────────────────────────────────────
  if (currentCourseId === 'lpic1-101') {
    const topics = lpic1_101_TopicDict[currentLang] ?? lpic1_101_TopicDict['en'] ?? lpic1_101_TopicDict['it']
    const lessonContent = lpic1_101_LessonContentDict[currentLang] ?? lpic1_101_LessonContentDict['en'] ?? lpic1_101_LessonContentDict['it']
    const quizzesByTopic = lpic1_101_quizzesDict[currentLang] ?? lpic1_101_quizzesDict['en'] ?? lpic1_101_quizzesDict['it']
    const allQuizzes = lpic1_101_allQuizzesDict[currentLang] ?? lpic1_101_allQuizzesDict['en'] ?? lpic1_101_allQuizzesDict['it']

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
      extendedContent: lpic1_101_extendedContentDict[currentLang] ?? lpic1_101_extendedContentDict['en'] ?? lpic1_101_extendedContentDict['it'] ?? {},
    }
  }

  // ─── LPIC-1 102 ──────────────────────────────────────────────────────────
  if (currentCourseId === 'lpic1-102') {
    const topics = lpic1_102_TopicDict[currentLang] ?? lpic1_102_TopicDict['en'] ?? lpic1_102_TopicDict['it']
    const lessonContent = lpic1_102_LessonContentDict[currentLang] ?? lpic1_102_LessonContentDict['en'] ?? lpic1_102_LessonContentDict['it']
    const quizzesByTopic = lpic1_102_quizzesDict[currentLang] ?? lpic1_102_quizzesDict['en'] ?? lpic1_102_quizzesDict['it']
    const allQuizzes = lpic1_102_allQuizzesDict[currentLang] ?? lpic1_102_allQuizzesDict['en'] ?? lpic1_102_allQuizzesDict['it']

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
      extendedContent: lpic1_102_extendedContent[currentLang] ?? lpic1_102_extendedContent['en'] ?? lpic1_102_extendedContent['it'] ?? {},
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

  // ─── LPIC-2 ────────────────────────────────────────────────────────────────
  if (currentCourseId === 'lpic-2') {
    const topics = lpic2_TopicDict[currentLang] ?? lpic2_TopicDict['en'] ?? lpic2_TopicDict['it']
    const lessonContent = lpic2_LessonContentDict[currentLang] ?? lpic2_LessonContentDict['en'] ?? lpic2_LessonContentDict['it']
    const quizzesByTopic = lpic2_quizzesDict[currentLang] ?? lpic2_quizzesDict['en'] ?? lpic2_quizzesDict['it']
    const allQuizzes = lpic2_allQuizzesDict[currentLang] ?? lpic2_allQuizzesDict['en'] ?? lpic2_allQuizzesDict['it']

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
      extendedContent: lpic2_extendedContentDict[currentLang] ?? lpic2_extendedContentDict['en'] ?? lpic2_extendedContentDict['it'] ?? {},
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
