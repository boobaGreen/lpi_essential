import { createContext, useContext, useReducer, useEffect } from 'react'

const GameContext = createContext(null)

const STORAGE_KEY = 'linuxquest_save'

const initialState = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  completedLessons: [],
  completedQuizzes: [],
  completedGames: [],
  badges: [],
  examAttempts: [],
  topicProgress: {
    1: { lessonsCompleted: 0, quizzesCompleted: 0 },
    2: { lessonsCompleted: 0, quizzesCompleted: 0 },
    3: { lessonsCompleted: 0, quizzesCompleted: 0 },
    4: { lessonsCompleted: 0, quizzesCompleted: 0 },
    5: { lessonsCompleted: 0, quizzesCompleted: 0 },
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
    if (xp >= LEVEL_THRESHOLDS[i]) {
      level = i + 1
      break
    }
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
  if (state.lastActiveDate === yesterday.toDateString()) {
    return state.streak + 1
  }
  return 1 // Reset streak
}

function gameReducer(state, action) {
  let newState
  
  switch (action.type) {
    case 'ADD_XP': {
      const newXP = state.xp + action.payload
      const newLevel = calculateLevel(newXP)
      const today = new Date().toDateString()
      const streak = state.lastActiveDate !== today ? checkStreak(state) : state.streak
      
      newState = {
        ...state,
        xp: newXP,
        level: newLevel,
        streak,
        lastActiveDate: today,
      }
      break
    }
    
    case 'COMPLETE_LESSON': {
      if (state.completedLessons.includes(action.payload)) return state
      // lesson ID format: "1-1" → topicId = "1"
      const topicId = action.payload.split('-')[0]
      const topicEntry = state.topicProgress[topicId]
      newState = {
        ...state,
        completedLessons: [...state.completedLessons, action.payload],
        topicProgress: {
          ...state.topicProgress,
          ...(topicEntry ? {
            [topicId]: {
              ...topicEntry,
              lessonsCompleted: topicEntry.lessonsCompleted + 1,
            },
          } : {}),
        },
      }
      break
    }
    
    case 'COMPLETE_QUIZ': {
      if (state.completedQuizzes.includes(action.payload)) return state
      // quiz ID format: "quiz-1-1" → topicId = "1"
      const parts = action.payload.split('-')
      const qTopicId = parts.length >= 3 ? parts[1] : parts[0]
      const qTopicEntry = state.topicProgress[qTopicId]
      newState = {
        ...state,
        completedQuizzes: [...state.completedQuizzes, action.payload],
        topicProgress: {
          ...state.topicProgress,
          ...(qTopicEntry ? {
            [qTopicId]: {
              ...qTopicEntry,
              quizzesCompleted: qTopicEntry.quizzesCompleted + 1,
            },
          } : {}),
        },
      }
      break
    }
    
    case 'COMPLETE_GAME': {
      if (state.completedGames.includes(action.payload)) return state
      newState = {
        ...state,
        completedGames: [...state.completedGames, action.payload],
      }
      break
    }
    
    case 'EARN_BADGE': {
      if (state.badges.includes(action.payload)) return state
      newState = {
        ...state,
        badges: [...state.badges, action.payload],
      }
      break
    }
    
    case 'SAVE_EXAM_ATTEMPT': {
      newState = {
        ...state,
        examAttempts: [...state.examAttempts, action.payload],
      }
      break
    }
    
    case 'RESET_PROGRESS': {
      newState = { ...initialState }
      break
    }
    
    case 'LOAD_SAVE': {
      newState = action.payload
      break
    }
    
    default:
      return state
  }
  
  // Persist to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  } catch (e) {
    console.warn('Failed to save progress:', e)
  }
  
  return newState
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  
  // Load saved state on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        dispatch({ type: 'LOAD_SAVE', payload: { ...initialState, ...parsed } })
      }
    } catch (e) {
      console.warn('Failed to load save:', e)
    }
  }, [])
  
  const addXP = (amount) => dispatch({ type: 'ADD_XP', payload: amount })
  const completeLesson = (id) => dispatch({ type: 'COMPLETE_LESSON', payload: id })
  const completeQuiz = (id) => dispatch({ type: 'COMPLETE_QUIZ', payload: id })
  const completeGame = (id) => dispatch({ type: 'COMPLETE_GAME', payload: id })
  const earnBadge = (id) => dispatch({ type: 'EARN_BADGE', payload: id })
  const saveExamAttempt = (attempt) => dispatch({ type: 'SAVE_EXAM_ATTEMPT', payload: attempt })
  const resetProgress = () => dispatch({ type: 'RESET_PROGRESS' })
  
  const value = {
    ...state,
    levelTitle: getLevelTitle(state.level),
    xpForNextLevel: getXPForNextLevel(state.level),
    xpProgress: state.level < LEVEL_THRESHOLDS.length
      ? ((state.xp - LEVEL_THRESHOLDS[state.level - 1]) / (LEVEL_THRESHOLDS[state.level] - LEVEL_THRESHOLDS[state.level - 1])) * 100
      : 100,
    addXP,
    completeLesson,
    completeQuiz,
    completeGame,
    earnBadge,
    saveExamAttempt,
    resetProgress,
  }
  
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

export default GameContext
