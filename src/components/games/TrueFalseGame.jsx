import { useState, useEffect, useRef } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, ThumbsUp, ThumbsDown, Timer } from 'lucide-react'

import { useGameData } from '../../hooks/useGameData.js'

const levelConfig = {
  1: { count: 8, maxDiff: 1, questionTime: 12, xp: 8, label: 'Principiante' },
  2: { count: 10, maxDiff: 2, questionTime: 10, xp: 12, label: 'Intermedio' },
  3: { count: 14, maxDiff: 3, questionTime: 7, xp: 18, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TrueFalseGame({ onComplete, level = 1 }) {
  const { addXP, completeGame } = useGame()
  const { trueFalseData } = useGameData()
  const allStatements = trueFalseData || []
  const config = levelConfig[level] || levelConfig[1]
  const pool = allStatements.filter(s => s.difficulty <= config.maxDiff)
  const [questions] = useState(() => shuffleArray(pool).slice(0, config.count))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(config.questionTime)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const timerRef = useRef(null)

  const question = questions[currentIndex]
  const QUESTION_TIME = config.questionTime

  useEffect(() => {
    if (finished || result) return
    setTimeLeft(QUESTION_TIME)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          handleAnswer(null)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [currentIndex, finished])

  const handleAnswer = (userAnswer) => {
    clearInterval(timerRef.current)
    const correct = userAnswer === question.answer
    setResult(correct ? 'correct' : 'wrong')
    setAnswers(prev => [...prev, { correct, timedOut: userAnswer === null }])
    if (correct) { setScore(s => s + 1); addXP(config.xp) }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setResult(null); setCurrentIndex(i => i + 1)
    } else {
      setFinished(true)
      completeGame(`truefalse-lv${level}`)
      const finalScore = score + (result === 'correct' ? 1 : 0)
      if (finalScore === questions.length) addXP(30)
    }
  }

  if (finished) {
    const finalScore = answers.filter(a => a.correct).length
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-yellow)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {finalScore >= questions.length - 1 ? '⚡ Super veloce!' : finalScore >= Math.ceil(questions.length * 0.6) ? '🎉 Bene!' : '💪 Riprova!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-yellow)' }}>{finalScore}/{questions.length}</p>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '0.875rem' }}>Livello: {config.label} • Timer: {QUESTION_TIME}s</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setAnswers([]) }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RotateCcw size={16} /> Riprova
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  const timePct = (timeLeft / QUESTION_TIME) * 100

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          {currentIndex + 1}/{questions.length}
        </span>
        <span className="font-mono font-bold" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: timeLeft <= 3 ? 'var(--color-error)' : 'var(--color-neon-yellow)' }}>
          <Timer size={16} /> {timeLeft}s
        </span>
        <span className="font-bold" style={{ fontSize: '0.875rem', color: 'var(--color-neon-green)' }}>
          ✅ {score}
        </span>
      </div>

      <div style={{ width: '100%', borderRadius: '9999px', overflow: 'hidden', height: '4px', marginBottom: '20px', background: 'var(--color-bg-card)' }}>
        <div style={{
          width: `${timePct}%`, height: '100%', borderRadius: '9999px',
          background: timeLeft <= 3 ? 'var(--color-error)' : 'var(--color-neon-yellow)',
          transition: 'width 1s linear',
        }} />
      </div>

      <motion.div
        key={currentIndex}
        className="glass-card"
        style={{ padding: '32px 24px', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px', color: 'var(--color-text-primary)' }}>
          "{question.text}"
        </p>

        {!result ? (
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <motion.button
              onClick={() => handleAnswer(true)}
              className="font-bold"
              style={{ display: 'flex', alignItems: 'center', padding: '14px 32px', gap: '8px', borderRadius: '12px', border: '1px solid var(--color-success)', color: 'var(--color-success)', background: 'rgba(34,197,94,0.08)', fontSize: '1rem', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <ThumbsUp size={20} /> VERO
            </motion.button>
            <motion.button
              onClick={() => handleAnswer(false)}
              className="font-bold"
              style={{ display: 'flex', alignItems: 'center', padding: '14px 32px', gap: '8px', borderRadius: '12px', border: '1px solid var(--color-error)', color: 'var(--color-error)', background: 'rgba(239,68,68,0.08)', fontSize: '1rem', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <ThumbsDown size={20} /> FALSO
            </motion.button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="font-bold" style={{ fontSize: '1.2rem', marginBottom: '8px', color: result === 'correct' ? 'var(--color-success)' : 'var(--color-error)' }}>
              {result === 'correct' ? '✅ Corretto!' : '❌ Sbagliato!'}
            </div>
            <p style={{ fontSize: '0.875rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
              {question.explanation}
            </p>
            <button onClick={handleNext} className="btn-primary">
              {currentIndex < questions.length - 1 ? 'Prossima →' : 'Risultati 🏆'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
