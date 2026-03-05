import { createContext, useContext, useReducer, useEffect } from 'react'
import { useCourse } from './CourseContext.jsx'
import { DEFAULT_COURSE_ID } from '../data/courses.js'

const GameContext = createContext(null)

const STORAGE_KEY = 'linuxquest_save'

// ─── Initial per-course progress ───
function initialCourseProgress() {
  return {
    completedLessons: [],
    completedQuizzes: [],
    examAttempts: [],
    topicProgress: {
      1: { lessonsCompleted: 0, quizzesCompleted: 0 },
      2: { lessonsCompleted: 0, quizzesCompleted: 0 },
      3: { lessonsCompleted: 0, quizzesCompleted: 0 },
      4: { lessonsCompleted: 0, quizzesCompleted: 0 },
      5: { lessonsCompleted: 0, quizzesCompleted: 0 },
    },
  }
}

const initialState = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  completedGames: [],
  badges: [],
  // Per-course progress namespace
  progress: {
    [DEFAULT_COURSE_ID]: initialCourseProgress(),
  },
}

const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 1500, 2200, 3000]
const LEVEL_TITLES = [
  '🐣 Noob',
  '🔰 Principiante',
  '📖 Studente',
  '💻 Praticante',
  '🛠️ Competente',
  '🧑‍💻 Esperto',
  '🏆 Maestro',
  '🐧 Linux Guru',
]

function calculateLevel(xp) {
  let level = 1
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) { level = i + 1; break }
  }
  return Math.min(level, LEVEL_TITLES.length)
}

function getLevelTitle(level) {
  return LEVEL_TITLES[level - 1] || LEVEL_TITLES[0]
}

function getXPForNextLevel(level) {
  if (level >= LEVEL_THRESHOLDS.length) return null
  return LEVEL_THRESHOLDS[level]
}

function checkStreak(state) {
  const today = new Date().toDateString()
  if (state.lastActiveDate === today) return state.streak
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  if (state.lastActiveDate === yesterday.toDateString()) return state.streak + 1
  return 1
}

// ─── Migrate old flat save → new per-course structure ───
function migrateSave(saved) {
  if (!saved) return null
  // If save already has the new structure, skip
  if (saved.progress) return saved
  // Old structure: completedLessons, completedQuizzes, topicProgress at root
  return {
    xp: saved.xp ?? 0,
    level: saved.level ?? 1,
    streak: saved.streak ?? 0,
    lastActiveDate: saved.lastActiveDate ?? null,
    completedGames: saved.completedGames ?? [],
    badges: saved.badges ?? [],
    progress: {
      [DEFAULT_COURSE_ID]: {
        completedLessons: saved.completedLessons ?? [],
        completedQuizzes: saved.completedQuizzes ?? [],
        examAttempts: saved.examAttempts ?? [],
        topicProgress: saved.topicProgress ?? initialCourseProgress().topicProgress,
      },
    },
  }
}

// ─── Helpers to update per-course progress immutably ───
function updateCourseProgress(state, courseId, updater) {
  const current = state.progress[courseId] ?? initialCourseProgress()
  return {
    ...state,
    progress: {
      ...state.progress,
      [courseId]: updater(current),
    },
  }
}

function gameReducer(state, action) {
  let newState

  switch (action.type) {
    case 'ADD_XP': {
      const newXP = state.xp + action.payload
      const newLevel = calculateLevel(newXP)
      const today = new Date().toDateString()
      const streak = state.lastActiveDate !== today ? checkStreak(state) : state.streak
      newState = { ...state, xp: newXP, level: newLevel, streak, lastActiveDate: today }
      break
    }

    case 'COMPLETE_LESSON': {
      const { courseId, lessonId } = action.payload
      newState = updateCourseProgress(state, courseId, (cp) => {
        if (cp.completedLessons.includes(lessonId)) return cp
        const topicIdStr = lessonId.split('-')[0]
        const tp = cp.topicProgress[topicIdStr]
        return {
          ...cp,
          completedLessons: [...cp.completedLessons, lessonId],
          topicProgress: {
            ...cp.topicProgress,
            ...(tp ? { [topicIdStr]: { ...tp, lessonsCompleted: tp.lessonsCompleted + 1 } } : {}),
          },
        }
      })
      break
    }

    case 'COMPLETE_QUIZ': {
      const { courseId, quizId } = action.payload
      newState = updateCourseProgress(state, courseId, (cp) => {
        if (cp.completedQuizzes.includes(quizId)) return cp
        const parts = quizId.split('-')
        const topicIdStr = parts.length >= 3 ? parts[1] : parts[0]
        const tp = cp.topicProgress[topicIdStr]
        return {
          ...cp,
          completedQuizzes: [...cp.completedQuizzes, quizId],
          topicProgress: {
            ...cp.topicProgress,
            ...(tp ? { [topicIdStr]: { ...tp, quizzesCompleted: tp.quizzesCompleted + 1 } } : {}),
          },
        }
      })
      break
    }

    case 'COMPLETE_GAME': {
      if (state.completedGames.includes(action.payload)) return state
      newState = { ...state, completedGames: [...state.completedGames, action.payload] }
      break
    }

    case 'EARN_BADGE': {
      if (state.badges.includes(action.payload)) return state
      newState = { ...state, badges: [...state.badges, action.payload] }
      break
    }

    case 'SAVE_EXAM_ATTEMPT': {
      const { courseId, attempt } = action.payload
      newState = updateCourseProgress(state, courseId, (cp) => ({
        ...cp,
        examAttempts: [...cp.examAttempts, attempt],
      }))
      break
    }

    case 'RESET_PROGRESS': {
      const { courseId } = action.payload
      newState = updateCourseProgress(state, courseId, () => initialCourseProgress())
      break
    }

    case 'LOAD_SAVE': {
      newState = action.payload
      break
    }

    default:
      return state
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  } catch (e) {
    console.warn('Failed to save progress:', e)
  }

  return newState
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        const migrated = migrateSave(parsed)
        dispatch({ type: 'LOAD_SAVE', payload: { ...initialState, ...migrated } })
      }
    } catch (e) {
      console.warn('Failed to load save:', e)
    }
  }, [])

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

// ─── useGame — course-aware hook ───
export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used within a GameProvider')
  const { state, dispatch } = ctx

  let currentCourseId = DEFAULT_COURSE_ID
  try {
    // useCourse is safe to call here since CourseProvider wraps GameProvider
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const courseCtx = useCourse()
    currentCourseId = courseCtx.currentCourseId
  } catch {}

  const courseProgress = state.progress[currentCourseId] ?? initialCourseProgress()

  const addXP = (amount) => dispatch({ type: 'ADD_XP', payload: amount })
  const completeLesson = (id) => dispatch({ type: 'COMPLETE_LESSON', payload: { courseId: currentCourseId, lessonId: id } })
  const completeQuiz = (id) => dispatch({ type: 'COMPLETE_QUIZ', payload: { courseId: currentCourseId, quizId: id } })
  const completeGame = (id) => dispatch({ type: 'COMPLETE_GAME', payload: id })
  const earnBadge = (id) => dispatch({ type: 'EARN_BADGE', payload: id })
  const saveExamAttempt = (attempt) => dispatch({ type: 'SAVE_EXAM_ATTEMPT', payload: { courseId: currentCourseId, attempt } })
  const resetProgress = () => dispatch({ type: 'RESET_PROGRESS', payload: { courseId: currentCourseId } })

  const level = calculateLevel(state.xp)

  return {
    // Global
    xp: state.xp,
    level,
    levelTitle: getLevelTitle(level),
    xpForNextLevel: getXPForNextLevel(level),
    xpProgress: level < LEVEL_THRESHOLDS.length
      ? ((state.xp - LEVEL_THRESHOLDS[level - 1]) / (LEVEL_THRESHOLDS[level] - LEVEL_THRESHOLDS[level - 1])) * 100
      : 100,
    streak: state.streak,
    badges: state.badges,
    completedGames: state.completedGames,
    allProgress: state.progress,
    // Per-course
    completedLessons: courseProgress.completedLessons,
    completedQuizzes: courseProgress.completedQuizzes,
    examAttempts: courseProgress.examAttempts,
    topicProgress: courseProgress.topicProgress,
    // Actions
    addXP,
    completeLesson,
    completeQuiz,
    completeGame,
    earnBadge,
    saveExamAttempt,
    resetProgress,
  }
}

export default GameContext
