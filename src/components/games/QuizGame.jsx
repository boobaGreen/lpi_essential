import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, ArrowRight, Trophy, Clock } from 'lucide-react'
import { useTopics } from '../../hooks/useTopics.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const levelConfig = {
  1: { count: 8, timePerQuestion: 30, xp: 15, label: 'Principiante' },
  2: { count: 12, timePerQuestion: 20, xp: 25, label: 'Intermedio' },
  3: { count: 18, timePerQuestion: 15, xp: 40, label: 'Esperto' },
}

const topicNames = {
  1: 'Comunità Linux',
  2: 'Uso del Sistema',
  3: 'Command Line',
  4: 'Sistema Operativo',
  5: 'Sicurezza & Permessi',
}

export default function QuizGame({ level = 1, onComplete }) {
  const config = levelConfig[level]
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(config.timePerQuestion)
  const { addXP, completeGame } = useGame()
  const { allQuizzes } = useTopics()
  const { language, t } = useLanguage()

  useEffect(() => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setShowFeedback(false)
    setFinished(false)
    const pool = shuffleArray(allQuizzes)
    setQuestions(pool.slice(0, config.count))
    setTimeLeft(config.timePerQuestion)
  }, [level, config.count, config.timePerQuestion, language])

  // Timer per question
  useEffect(() => {
    if (finished || showFeedback || questions.length === 0) return
    if (timeLeft <= 0) {
      handleSelect(-1) // time expired
      return
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, finished, showFeedback, questions])

  const handleSelect = (index) => {
    if (showFeedback) return
    setSelected(index)
    setShowFeedback(true)
    const q = questions[current]
    const correctIdx = typeof q.correct !== 'undefined' ? q.correct : q.correctAnswer;
    if (index === correctIdx) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true)
      const currentQ = questions[current];
      const correctIdx = typeof currentQ?.correct !== 'undefined' ? currentQ?.correct : currentQ?.correctAnswer;
      const pct = ((score + (selected === correctIdx ? 0 : 0)) / questions.length) * 100
      const actualScore = score + (selected === correctIdx ? 0 : 0)
      if (actualScore >= Math.ceil(questions.length * 0.6)) {
        addXP(config.xp)
        completeGame(`quiz-lv${level}`)
      }
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowFeedback(false)
      setTimeLeft(config.timePerQuestion)
    }
  }

  if (questions.length === 0) return null

  // ── Finished Screen ──
  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    const passed = pct >= 60
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '12px' }}>{passed ? '🎉' : '📚'}</div>
        <h2 className="font-black" style={{ fontSize: '1.5rem', color: passed ? '#22c55e' : '#f59e0b' }}>
          {passed ? 'Quiz Superato!' : 'Continua a Studiare!'}
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: '12px 0' }}>
          Risultato: <strong style={{ color: passed ? '#22c55e' : '#ef4444' }}>{score}/{questions.length}</strong> ({pct}%)
        </p>
        {passed && <p style={{ color: '#22c55e', fontWeight: 600 }}>+{config.xp} XP guadagnati! ⭐</p>}
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Soglia superamento: 60%</p>
        <button className="btn-primary" onClick={onComplete} style={{ marginTop: '20px' }}>
          Torna ai Giochi
        </button>
      </motion.div>
    )
  }

  // ── Question UI ──
  const q = questions[current]
  const progress = ((current) / questions.length) * 100
  const timerPct = (timeLeft / config.timePerQuestion) * 100

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Progress */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
        <span>{t('questionNum') || 'Domanda'} {current + 1}/{questions.length}</span>
        <span style={{ color: q.topicId ? `var(--color-neon-${['blue','green','purple','orange','pink'][q.topicId-1]})` : 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.75rem' }}>
          {topicNames[q.topicId] || ''}
        </span>
        <span style={{ fontWeight: 700, color: score > 0 ? '#22c55e' : 'inherit' }}>✅ {score}</span>
      </div>
      <div style={{ height: '4px', background: 'var(--color-border)', borderRadius: '4px' }}>
        <motion.div animate={{ width: `${progress}%` }} style={{ height: '100%', background: 'var(--color-neon-blue)', borderRadius: '4px' }} />
      </div>

      {/* Timer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Clock size={14} style={{ color: timeLeft <= 5 ? '#ef4444' : 'var(--color-text-muted)' }} />
        <div style={{ flex: 1, height: '3px', background: 'var(--color-border)', borderRadius: '2px' }}>
          <motion.div
            animate={{ width: `${timerPct}%` }}
            transition={{ duration: 0.5 }}
            style={{
              height: '100%', borderRadius: '2px',
              background: timeLeft <= 5 ? '#ef4444' : timeLeft <= 10 ? '#f59e0b' : '#22c55e',
            }}
          />
        </div>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: timeLeft <= 5 ? '#ef4444' : 'var(--color-text-muted)', minWidth: '24px' }}>{timeLeft}s</span>
      </div>

      {/* Question */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 className="font-bold" style={{ fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--color-text-primary)' }}>
          {q.question}
        </h3>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {q.options.map((opt, i) => {
          const correctIdx = typeof q.correct !== 'undefined' ? q.correct : q.correctAnswer;
          const isCorrect = i === correctIdx;
          const isSelected = i === selected
          let bg = 'rgba(255,255,255,0.03)'
          let border = 'var(--color-border)'
          if (showFeedback && isCorrect) { bg = 'rgba(34,197,94,0.15)'; border = '#22c55e' }
          else if (showFeedback && isSelected && !isCorrect) { bg = 'rgba(239,68,68,0.15)'; border = '#ef4444' }

          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showFeedback}
              whileHover={!showFeedback ? { scale: 1.01 } : {}}
              whileTap={!showFeedback ? { scale: 0.99 } : {}}
              style={{
                padding: '14px 18px', borderRadius: '10px', textAlign: 'left',
                background: bg, border: `1px solid ${border}`,
                cursor: showFeedback ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', gap: '12px',
                color: 'var(--color-text-secondary)', fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              <span style={{
                width: '28px', height: '28px', borderRadius: '50%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontWeight: 800,
                fontSize: '0.8rem', flexShrink: 0,
                background: showFeedback && isCorrect ? '#22c55e' : showFeedback && isSelected ? '#ef4444' : 'rgba(255,255,255,0.1)',
                color: showFeedback && (isCorrect || isSelected) ? '#fff' : 'var(--color-text-muted)',
              }}>
                {showFeedback && isCorrect ? <CheckCircle size={16} /> : showFeedback && isSelected ? <XCircle size={16} /> : String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Feedback + Next */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <div style={{
              padding: '14px 18px', borderRadius: '10px', fontSize: '0.88rem', lineHeight: 1.6,
              background: selected === (typeof q.correct !== 'undefined' ? q.correct : q.correctAnswer) ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
              border: `1px solid ${selected === (typeof q.correct !== 'undefined' ? q.correct : q.correctAnswer) ? '#22c55e40' : '#ef444440'}`,
              color: 'var(--color-text-secondary)',
            }}>
              {selected === -1 ? `⏱️ ${t('timeUp', 'Tempo scaduto!')} ` : selected === (typeof q.correct !== 'undefined' ? q.correct : q.correctAnswer) ? `✅ ${t('correctAnswerFallback', 'Corretto!')} ` : `❌ ${t('wrongAnswerFallback', 'Sbagliato!')} `}
              {q.explanation}
            </div>
            <button className="btn-primary" onClick={handleNext} style={{ width: '100%', marginTop: '12px' }}>
              {current + 1 >= questions.length ? `📊 ${t('seeResultsBtn') || 'Vedi Risultati'}` : `${t('nextBtn') || 'Prossima Domanda'} →`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
