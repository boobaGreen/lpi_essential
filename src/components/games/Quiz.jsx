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
    return <div className="glass-card p-6 text-center text-[var(--color-text-muted)]">Nessuna domanda disponibile.</div>
  }

  const question = questions[currentIndex]
  const isCorrect = selectedAnswer === question?.correct
  const total = questions.length

  if (!question) {
    return <div className="glass-card p-6 text-center text-[var(--color-text-muted)]">Caricamento...</div>
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
        addXP(20) // bonus perfect
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
        className="glass-card p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Trophy size={48} className="mx-auto mb-4" style={{ color: percentage >= 70 ? 'var(--color-success)' : 'var(--color-warning)' }} />
        <h2 className="text-2xl font-black mb-2">
          {percentage >= 70 ? '🎉 Ottimo lavoro!' : '💪 Continua a studiare!'}
        </h2>
        <p className="text-4xl font-black my-4" style={{ color: topicColor }}>
          {finalScore}/{total}
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          {percentage >= 90 ? 'Perfetto! Sei prontissimo!' : 
           percentage >= 70 ? 'Bene! Rivedi gli errori per migliorare.' :
           'Rivedi la lezione e riprova!'}
        </p>
        
        {/* Answer review */}
        <div className="space-y-2 mb-6 text-left">
          {answers.map((a, i) => (
            <div key={i} className={`flex items-center gap-2 text-sm p-2 rounded-lg ${a.correct ? 'bg-[var(--color-success)]/10' : 'bg-[var(--color-error)]/10'}`}>
              {a.correct ? <CheckCircle size={16} className="text-[var(--color-success)]" /> : <XCircle size={16} className="text-[var(--color-error)]" />}
              <span className="text-[var(--color-text-secondary)]">
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
      className="glass-card p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[var(--color-text-muted)]">
          Domanda {currentIndex + 1}/{total}
        </span>
        <span className="text-sm font-bold" style={{ color: topicColor }}>
          {score} corrette
        </span>
      </div>
      <div className="w-full h-1.5 bg-[var(--color-bg-primary)] rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: topicColor }}
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
          <h3 className="text-lg font-bold mb-5 text-[var(--color-text-primary)]">
            {question.question}
          </h3>

          <div className="space-y-3">
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
                  className="w-full text-left p-4 rounded-xl border transition-all"
                  style={{ borderColor, background: bg }}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ borderColor, color: showResult && i === question.correct ? 'var(--color-success)' : 'var(--color-text-secondary)' }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-[var(--color-text-primary)] text-sm">{option}</span>
                    {showResult && i === question.correct && <CheckCircle size={18} className="ml-auto text-[var(--color-success)]" />}
                    {showResult && i === selectedAnswer && !isCorrect && i !== question.correct && <XCircle size={18} className="ml-auto text-[var(--color-error)]" />}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          {showResult && question.explanation && (
            <motion.div 
              className="mt-4 p-4 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <p className="text-sm text-[var(--color-text-secondary)]">
                💡 <strong>Spiegazione:</strong> {question.explanation}
              </p>
            </motion.div>
          )}

          {/* Next button */}
          {showResult && (
            <motion.button 
              className="btn-primary mt-4 w-full flex items-center justify-center gap-2"
              onClick={handleNext}
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
