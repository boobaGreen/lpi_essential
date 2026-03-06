import { Link, useParams } from 'react-router-dom'
import { useGame } from '../context/GameContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTopics } from '../hooks/useTopics.js'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, GraduationCap, Clock, AlertTriangle, Trophy, CheckCircle, XCircle, ArrowRight, BarChart3 } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

function shuffleArray(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function ExamTimer({ timeLeft, total }) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const percentage = (timeLeft / total) * 100
  const isLow = timeLeft < 300 // < 5 min

  return (
    <div className="flex items-center" style={{ gap: '8px' }}>
      <Clock size={18} className={isLow ? 'text-[var(--color-error)]' : 'text-[var(--color-neon-blue)]'} />
      <span className={`font-mono font-bold ${isLow ? 'text-[var(--color-error)]' : ''}`}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <div className="w-20 h-2 bg-[var(--color-bg-primary)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${percentage}%`,
            background: isLow ? 'var(--color-error)' : 'var(--color-neon-blue)',
          }}
        />
      </div>
    </div>
  )
}

function ExamResults({ answers, questions, score, timeUsed, onClose, onRetry, courseId }) {
  const { t } = useLanguage()
  const { saveExamAttempt, addXP, earnBadge, examAttempts } = useGame()
  const { topics } = useTopics()
  const isRhcsa = courseId === 'rhcsa'
  const isLpic1 = courseId === 'lpic1-101'
  const isLpic2 = courseId === 'lpic1-102'
  const maxScore = isRhcsa ? 300 : ((isLpic1 || isLpic2) ? 800 : 800)
  const passingScore = isRhcsa ? 210 : ((isLpic1 || isLpic2) ? 500 : 500)
  const scaledScore = Math.round((score / questions.length) * maxScore)
  const passed = scaledScore >= passingScore
  const percentage = Math.round((score / questions.length) * 100)

  // Per-topic breakdown
  const topicResults = {}
  questions.forEach((q, i) => {
    const tid = q.topicId
    if (!topicResults[tid]) topicResults[tid] = { correct: 0, total: 0 }
    topicResults[tid].total++
    if (answers[i]?.correct) topicResults[tid].correct++
  })

  useEffect(() => {
    saveExamAttempt({ score: scaledScore, date: new Date().toISOString(), passed, timeUsed })
    addXP(passed ? 100 : 30)
    if (passed && examAttempts.length === 0) earnBadge('first-exam-pass')
    if (percentage === 100) earnBadge('perfect-exam')
  }, [])

  const topicColorMap = {
    1: 'var(--color-neon-blue)',
    2: 'var(--color-neon-green)',
    3: 'var(--color-neon-purple)',
    4: 'var(--color-neon-orange)',
    5: 'var(--color-neon-pink)',
    6: 'var(--color-neon-yellow)',
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Score banner */}
      <div className="glass-card text-center" style={{ padding: '32px' }}>
        <Trophy size={56} className="mx-auto" style={{ color: passed ? 'var(--color-success)' : 'var(--color-error)', marginBottom: '16px' }} />
        <h2 className="text-3xl font-black" style={{ marginBottom: '8px' }}>
          {passed ? '🎉 ' + t('passedTitle') : '📚 ' + t('notYetTitle')}
        </h2>
        <div className="font-black" style={{ fontSize: '3rem', color: passed ? 'var(--color-success)' : 'var(--color-error)' }}>
          {scaledScore}/{maxScore}
        </div>
        <p className="text-[var(--color-text-secondary)]" style={{ marginTop: '8px' }}>
          {score}/{questions.length} {t('correctAnswers')} ({percentage}%)
          {passed ? ' — ' + t('minToPass1') + ' ✅' : ` — Min: ${passingScore}/${maxScore}`}
        </p>
        <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem', marginTop: '4px' }}>
          {t('timeLabel')} {Math.floor(timeUsed / 60)}m {timeUsed % 60}s
        </p>
      </div>

      {/* Topic breakdown */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 className="font-bold" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart3 size={20} className="text-[var(--color-neon-blue)]" />
          {t('resultsByTopic')}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.entries(topicResults).map(([tid, result]) => {
            const topic = topics.find(t => t.id === parseInt(tid))
            const pct = Math.round((result.correct / result.total) * 100)
            return (
              <div key={tid}>
                <div className="flex justify-between" style={{ fontSize: '0.875rem', marginBottom: '4px' }}>
                  <span className="text-[var(--color-text-primary)]">{topic?.icon} {topic?.title}</span>
                  <span className="font-bold" style={{ color: pct >= 70 ? 'var(--color-success)' : 'var(--color-error)' }}>
                    {result.correct}/{result.total} ({pct}%)
                  </span>
                </div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: '8px', background: 'var(--color-bg-primary)' }}>
                  <div className="rounded-full" style={{ width: `${pct}%`, height: '100%', background: topicColorMap[tid] }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Answer review */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 className="font-bold" style={{ marginBottom: '16px' }}>📝 {t('reviewAnswers')}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '400px', overflowY: 'auto' }}>
          {answers.map((a, i) => (
            <div
              key={i}
              className="flex items-start rounded-lg"
              style={{
                padding: '10px 12px',
                gap: '8px',
                background: a.correct ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                fontSize: '0.875rem',
              }}
            >
              {a.correct ? <CheckCircle size={16} className="text-[var(--color-success)] shrink-0" style={{ marginTop: '2px' }} /> : <XCircle size={16} className="text-[var(--color-error)] shrink-0" style={{ marginTop: '2px' }} />}
              <span className="text-[var(--color-text-secondary)]">
                <strong>{t('questionNum')} {i + 1}:</strong> {questions[i]?.question?.substring(0, 80)}...
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <button onClick={onRetry} className="btn-primary" style={{ flex: 1 }}>🔄 {t('retryBtn')}</button>
        <Link to={`/course/${courseId}`} className="btn-secondary no-underline text-center" style={{ flex: 1 }}>← Dashboard</Link>
      </div>
    </motion.div>
  )
}

export default function ExamPage() {
  const { courseId } = useParams()
  const { t } = useLanguage()
  const { topics, allQuizzes } = useTopics()

  // ─── Configurazione per corso ────────────────────────────
  const isRhcsa = courseId === 'rhcsa'
  const isLpic1 = courseId === 'lpic1-101'
  const isLpic1_102 = courseId === 'lpic1-102'
  const isLpic2 = courseId === 'lpic-2'

  let examConfig
  if (isRhcsa) {
    examConfig = {
      name: 'RHCSA EX200',
      questions: 50,
      timeMinutes: 60,   // simulazione (vero = 210 min pratico)
      passingScore: 210,  // RHCSA: 210/300 punti
      maxScore: 300,
      disclaimer: '⚠️ Simulazione teorica. L\'esame reale RHCSA è 100% pratico su VM (210 min).',
    }
  } else if (isLpic1) {
    examConfig = {
      name: 'LPIC-1 Exam 101 (101-500)',
      questions: 60,
      timeMinutes: 90,
      passingScore: 500,
      maxScore: 800,
      disclaimer: null,
    }
  } else if (isLpic1_102) {
    examConfig = {
      name: 'LPIC-1 Exam 102 (102-500)',
      questions: 60,
      timeMinutes: 90,
      passingScore: 500,
      maxScore: 800,
      disclaimer: null,
    }
  } else if (isLpic2) {
    examConfig = {
      name: 'LPIC-2 (201 & 202) Exam Sim',
      questions: 60,
      timeMinutes: 90,
      passingScore: 500,
      maxScore: 800,
      disclaimer: null,
    }
  } else {
    examConfig = {
      name: 'LPI Linux Essentials (010-160)',
      questions: 40,

      timeMinutes: 60,
      passingScore: 500,
      maxScore: 800,
      disclaimer: null,
    }
  }
  const EXAM_TIME = examConfig.timeMinutes * 60

  const [mode, setMode] = useState('intro') // intro | exam | results
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME)
  const [startTime, setStartTime] = useState(null)
  const timerRef = useRef(null)

  const startExam = useCallback(() => {
    const shuffled = shuffleArray(allQuizzes)
    const selected = shuffled.slice(0, Math.min(examConfig.questions, shuffled.length))
    setQuestions(selected)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
    setTimeLeft(EXAM_TIME)
    setStartTime(Date.now())
    setMode('exam')
  }, [allQuizzes, examConfig.questions, EXAM_TIME])

  useEffect(() => {
    if (mode === 'exam') {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            setMode('results')
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
  }, [mode])

  const question = questions[currentIndex]
  const total = questions.length
  const score = answers.filter(a => a.correct).length

  const handleSelect = (index) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    const correct = index === question.correct
    setAnswers(prev => [...prev, { selected: index, correct }])
  }

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      clearInterval(timerRef.current)
      setMode('results')
    }
  }

  const timeUsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0

  // --- INTRO ---
  if (mode === 'intro') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '768px', margin: '0 auto' }}>
        <Link to={`/course/${courseId}`} className="inline-flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors" style={{ gap: '8px' }}>
          <ArrowLeft size={18} />
          <span style={{ fontSize: '0.875rem' }}>{t('navDashboard')}</span>
        </Link>

        <motion.div className="text-center" style={{ paddingTop: '32px', paddingBottom: '16px' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <GraduationCap size={64} className="mx-auto text-[var(--color-neon-pink)]" style={{ marginBottom: '16px' }} />
          <h1 className="text-3xl font-black gradient-text">{t('examSim')}</h1>
          <p className="text-[var(--color-text-secondary)]" style={{ marginTop: '12px', fontSize: '1.125rem' }}>{examConfig.name}</p>
        </motion.div>

        <div className="glass-card" style={{ padding: '28px' }}>
          <h2 className="font-bold" style={{ fontSize: '1.25rem', marginBottom: '20px' }}>📋 {t('examRules')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div className="text-center rounded-xl" style={{ padding: '20px', background: 'var(--color-bg-primary)' }}>
              <div className="font-black text-[var(--color-neon-blue)]" style={{ fontSize: '2rem' }}>{examConfig.questions}</div>
              <div className="text-[var(--color-text-muted)]" style={{ fontSize: '0.75rem' }}>{t('examQuestions')}</div>
            </div>
            <div className="text-center rounded-xl" style={{ padding: '20px', background: 'var(--color-bg-primary)' }}>
              <div className="font-black text-[var(--color-neon-orange)]" style={{ fontSize: '2rem' }}>{examConfig.timeMinutes}</div>
              <div className="text-[var(--color-text-muted)]" style={{ fontSize: '0.75rem' }}>{t('minutes')}</div>
            </div>
            <div className="text-center rounded-xl" style={{ padding: '20px', background: 'var(--color-bg-primary)' }}>
              <div className="font-black text-[var(--color-neon-green)]" style={{ fontSize: '2rem' }}>{examConfig.passingScore}</div>
              <div className="text-[var(--color-text-muted)]" style={{ fontSize: '0.75rem' }}>{t('minScore') || 'Min'} /{examConfig.maxScore}</div>
            </div>
          </div>
        </div>

        {isRhcsa && (
          <div className="glass-card flex items-start" style={{ padding: '20px', gap: '12px', borderColor: 'rgba(239, 68, 68, 0.4)', background: 'rgba(239,68,68,0.06)' }}>
            <AlertTriangle size={20} className="text-[var(--color-error)] shrink-0" style={{ marginTop: '2px' }} />
            <div>
              <p className="font-bold" style={{ fontSize: '0.875rem', color: 'var(--color-error)' }}>{t('rhcsaPracticalWarning')}</p>
              <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem', marginTop: '4px' }}>
                {t('rhcsaPracticalDesc')}
              </p>
            </div>
          </div>
        )}

        <div className="glass-card flex items-start" style={{ padding: '20px', gap: '12px', borderColor: 'rgba(234, 179, 8, 0.3)' }}>
          <AlertTriangle size={20} className="text-[var(--color-warning)] shrink-0" style={{ marginTop: '2px' }} />
          <div>
            <p className="font-bold text-[var(--color-warning)]" style={{ fontSize: '0.875rem' }}>{t('examWarningTitle')}</p>
            <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>{t('examWarningText').replace('{{total}}', allQuizzes.length)}</p>
          </div>
        </div>

        <motion.button
          className="btn-primary text-center font-bold"
          style={{ padding: '16px', fontSize: '1.125rem' }}
          onClick={startExam}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          🚀 {t('startExam')}
        </motion.button>
      </div>
    )
  }

  // --- RESULTS ---
  if (mode === 'results') {
    return (
      <ExamResults
        answers={answers}
        questions={questions}
        score={score}
        timeUsed={timeUsed}
        courseId={courseId}
        onClose={() => setMode('intro')}
        onRetry={startExam}
      />
    )
  }

  // --- EXAM ---
  if (!question) return null

  const isCorrect = selectedAnswer === question.correct

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div className="glass-card flex items-center justify-between" style={{ padding: '16px 20px' }}>
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          📝 {t('questionNum')} <strong>{currentIndex + 1}</strong>/{total}
        </span>
        <ExamTimer timeLeft={timeLeft} total={EXAM_TIME} />
        <span className="font-bold text-[var(--color-neon-green)]" style={{ fontSize: '0.875rem' }}>
          ✅ {score} {t('correctBadge')}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full rounded-full overflow-hidden" style={{ height: '4px', background: 'var(--color-bg-card)' }}>
        <div className="rounded-full bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-pink)]" style={{ width: `${((currentIndex + 1) / total) * 100}%`, height: '100%', transition: 'width 0.3s' }} />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="glass-card"
          style={{ padding: '28px' }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
        >
          {/* Topic badge */}
          <span
            className="font-bold rounded-full"
            style={{
              fontSize: '0.7rem',
              padding: '3px 10px',
              background: `${topicColorMap[question.topicId]}20`,
              color: topicColorMap[question.topicId],
              marginBottom: '12px',
              display: 'inline-block',
            }}
          >
            {topics.find(t => t.id === question.topicId)?.icon} Topic {question.topicId}
          </span>

          <h3 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: '1.125rem', marginTop: '12px', marginBottom: '20px' }}>
            {question.question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {question.options.map((option, i) => {
              let borderColor = 'var(--color-border)'
              let bg = 'transparent'

              if (showResult) {
                if (i === question.correct) {
                  borderColor = 'var(--color-success)'
                  bg = 'rgba(34, 197, 94, 0.1)'
                } else if (i === selectedAnswer && !isCorrect) {
                  borderColor = 'var(--color-error)'
                  bg = 'rgba(239, 68, 68, 0.1)'
                }
              }

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="w-full text-left rounded-xl border transition-all"
                  style={{ padding: '14px 16px', borderColor, background: bg }}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  disabled={showResult}
                >
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <span
                      className="rounded-full border flex items-center justify-center font-bold shrink-0"
                      style={{ width: '32px', height: '32px', borderColor, fontSize: '0.875rem',
                        color: showResult && i === question.correct ? 'var(--color-success)' : 'var(--color-text-secondary)' }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-[var(--color-text-primary)]" style={{ fontSize: '0.9rem' }}>{option}</span>
                    {showResult && i === question.correct && <CheckCircle size={18} className="ml-auto text-[var(--color-success)]" />}
                    {showResult && i === selectedAnswer && !isCorrect && i !== question.correct && <XCircle size={18} className="ml-auto text-[var(--color-error)]" />}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {showResult && question.explanation && (
            <motion.div
              className="border border-[var(--color-border)] rounded-xl"
              style={{ marginTop: '16px', padding: '14px', background: 'var(--color-bg-primary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-[var(--color-text-secondary)]" style={{ fontSize: '0.875rem' }}>
                💡 <strong>{t('explanation')}</strong> {question.explanation}
              </p>
            </motion.div>
          )}

          {showResult && (
            <motion.button
              className="btn-primary w-full flex items-center justify-center"
              style={{ marginTop: '16px', gap: '8px' }}
              onClick={handleNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {currentIndex < total - 1 ? (
                <>{t('nextBtn')} <ArrowRight size={18} /></>
              ) : (
                <>{t('seeResultsBtn')} <Trophy size={18} /></>
              )}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const topicColorMap = {
  1: 'var(--color-neon-blue)',
  2: 'var(--color-neon-green)',
  3: 'var(--color-neon-purple)',
  4: 'var(--color-neon-orange)',
  5: 'var(--color-neon-pink)',
  6: 'var(--color-neon-yellow)',
}
