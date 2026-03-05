import { useState } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react'

export default function Quiz({ questions, quizId, topicColor, onComplete }) {
  const { addXP, completeQuiz, earnBadge, completedQuizzes } = useGame()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  if (!questions || questions.length === 0) {
    return <div className="glass-card" style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-muted)' }}>Nessuna domanda disponibile.</div>
  }

  const question = questions[currentIndex]
  const isCorrect = selectedAnswer === question?.correct
  const total = questions.length

  if (!question) {
    return <div className="glass-card" style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-muted)' }}>Caricamento...</div>
  }

  const handleSelect = (index) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)

    const correct = index === question.correct
    if (correct) {
      setScore(s => s + 1)
      addXP(10)
    }
    setAnswers(prev => [...prev, { question: currentIndex, selected: index, correct }])
  }

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setFinished(true)
      completeQuiz(quizId)
      
      if (score + (isCorrect ? 1 : 0) === total) {
        earnBadge('perfect-quiz')
        addXP(20)
      }
      if (completedQuizzes.length === 0) {
        earnBadge('first-quiz')
      }
    }
  }

  if (finished) {
    const finalScore = answers.filter(a => a.correct).length
    const percentage = Math.round((finalScore / total) * 100)
    
    return (
      <motion.div
        className="glass-card"
        style={{ padding: '32px', textAlign: 'center' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Trophy size={48} style={{ margin: '0 auto 16px', color: percentage >= 70 ? 'var(--color-success)' : 'var(--color-warning)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {percentage >= 70 ? '🎉 Ottimo lavoro!' : '💪 Continua a studiare!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2.5rem', margin: '16px 0', color: topicColor }}>
          {finalScore}/{total}
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
          {percentage >= 90 ? 'Perfetto! Sei prontissimo!' : 
           percentage >= 70 ? 'Bene! Rivedi gli errori per migliorare.' :
           'Rivedi la lezione e riprova!'}
        </p>
        
        {/* Answer review */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', textAlign: 'left' }}>
          {answers.map((a, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.875rem',
                padding: '10px 12px',
                borderRadius: '10px',
                background: a.correct ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
              }}
            >
              {a.correct ? <CheckCircle size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} /> : <XCircle size={16} style={{ color: 'var(--color-error)', flexShrink: 0 }} />}
              <span style={{ color: 'var(--color-text-secondary)' }}>
                D{i + 1}: {questions[i]?.question?.substring(0, 60) || 'Domanda'}...
              </span>
            </div>
          ))}
        </div>

        <button onClick={onComplete} className="btn-primary">
          Chiudi Quiz
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="glass-card"
      style={{ padding: '28px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Domanda {currentIndex + 1}/{total}
        </span>
        <span className="font-bold" style={{ fontSize: '0.875rem', color: topicColor }}>
          {score} corrette
        </span>
      </div>
      <div style={{ width: '100%', height: '6px', background: 'var(--color-bg-primary)', borderRadius: '9999px', marginBottom: '24px', overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', borderRadius: '9999px', background: topicColor }}
          animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="font-bold" style={{ fontSize: '1.1rem', marginBottom: '24px', color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
            {question.question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
              } else if (selectedAnswer === i) {
                borderColor = topicColor
              }

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="border"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '16px 18px',
                    borderRadius: '12px',
                    borderColor,
                    background: bg,
                    cursor: showResult ? 'default' : 'pointer',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                  disabled={showResult}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      className="font-bold"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: `1px solid ${borderColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.875rem',
                        flexShrink: 0,
                        color: showResult && i === question.correct ? 'var(--color-success)' : 'var(--color-text-secondary)',
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{option}</span>
                    {showResult && i === question.correct && <CheckCircle size={18} style={{ marginLeft: 'auto', color: 'var(--color-success)' }} />}
                    {showResult && i === selectedAnswer && !isCorrect && i !== question.correct && <XCircle size={18} style={{ marginLeft: 'auto', color: 'var(--color-error)' }} />}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          {showResult && question.explanation && (
            <motion.div
              style={{
                marginTop: '20px',
                padding: '16px',
                borderRadius: '12px',
                background: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border)',
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                💡 <strong>Spiegazione:</strong> {question.explanation}
              </p>
            </motion.div>
          )}

          {/* Next button */}
          {showResult && (
            <motion.button
              className="btn-primary"
              onClick={handleNext}
              style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {currentIndex < total - 1 ? (
                <>Prossima <ArrowRight size={18} /></>
              ) : (
                <>Vedi Risultati <Trophy size={18} /></>
              )}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
