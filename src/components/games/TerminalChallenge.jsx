import { useState, useRef } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Terminal } from 'lucide-react'

import { useGameData } from '../../hooks/useGameData.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

const levelConfig = {
  1: { count: 6, maxDiff: 1, xp: 15, label: 'Principiante' },
  2: { count: 8, maxDiff: 2, xp: 25, label: 'Intermedio' },
  3: { count: 10, maxDiff: 3, xp: 40, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TerminalChallenge({ onComplete, level = 1 }) {
  const { addXP, completeGame } = useGame()
  const { t } = useLanguage()
  const { terminalChallengeData } = useGameData()
  const allChallenges = terminalChallengeData || []
  const config = levelConfig[level] || levelConfig[1]
  const pool = allChallenges.filter(c => c.difficulty <= config.maxDiff)
  const [shuffled] = useState(() => shuffleArray(pool).slice(0, config.count))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)
  const [hintIndex, setHintIndex] = useState(-1)
  const [finished, setFinished] = useState(false)
  const inputRef = useRef(null)

  const challenge = shuffled[currentIndex]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (result) return
    const trimmed = input.trim().toLowerCase()
    const correct = challenge.accept.some(a => a.toLowerCase() === trimmed)
    setResult(correct ? 'correct' : 'wrong')
    if (correct) { setScore(s => s + 1); addXP(config.xp) }
  }

  const handleNext = () => {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex(i => i + 1); setInput(''); setResult(null); setHintIndex(-1)
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setFinished(true)
      completeGame(`terminal-lv${level}`)
      if (score + (result === 'correct' ? 1 : 0) === shuffled.length) addXP(30)
    }
  }

  const showHint = () => { if (hintIndex < challenge.hints.length - 1) setHintIndex(h => h + 1) }

  if (finished) {
    const finalScore = score + (result === 'correct' ? 1 : 0)
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-green)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {finalScore === shuffled.length ? `🏆 ${t('perfectTitle') || 'Perfetto!'}` : finalScore >= config.count - 1 ? `🎉 ${t('greatTitle') || 'Ottimo!'}` : `💪 ${t('keepGoingTitle') || 'Continua!'}`}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-green)' }}>{finalScore}/{shuffled.length}</p>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '0.875rem' }}>{t('levelLabel') || 'Livello:'} {config.label}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setInput(''); setHintIndex(-1) }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RotateCcw size={16} /> {t('retryBtn') || 'Riprova'}
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">{t('closeBtn') || 'Chiudi'}</button>}
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          {t('challenge') || 'Challenge'} {currentIndex + 1}/{shuffled.length}
        </span>
        <span className="font-bold" style={{ fontSize: '0.875rem', color: 'var(--color-neon-green)' }}>
          ✅ {score} {t('correctAnswers') || 'corrette'}
        </span>
      </div>

      <div className="glass-card" style={{ padding: '24px', marginBottom: '16px' }}>
        <p className="font-bold" style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
          🎯 {challenge.prompt}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="terminal-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-mono font-bold" style={{ color: 'var(--color-neon-green)' }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={t('writeCommand') || "Scrivi il comando..."}
                disabled={!!result}
                autoFocus
                className="font-mono"
                style={{ flex: 1, fontSize: '0.9rem', background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text-primary)' }}
              />
            </div>
            {result && (
              <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '1px solid #30363d' }}>
                {result === 'correct' ? (
                  <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--color-success)' }}>✅ {t('correctBadge') || 'Corretto!'} +{config.xp} XP</p>
                ) : (
                  <p className="font-mono" style={{ fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--color-error)' }}>❌ {t('notExact') || 'Non esatto.'}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}> {t('answerLabel') || 'Risposta:'} </span>
                    <span style={{ color: 'var(--color-neon-green)' }}>{challenge.answer}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </form>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' }}>
          {!result && (
            <button onClick={showHint} className="btn-secondary" style={{ fontSize: '0.75rem', padding: '4px 12px' }} disabled={hintIndex >= challenge.hints.length - 1}>
              💡 {t('hintBtn') || 'Suggerimento'}
            </button>
          )}
          {hintIndex >= 0 && challenge.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <span key={i} style={{ fontSize: '0.8rem', color: 'var(--color-neon-yellow)' }}>💡 {hint}</span>
          ))}
        </div>
      </div>

      {!result ? (
        <button onClick={handleSubmit} className="btn-primary" disabled={!input.trim()} style={{ width: '100%' }}>
          <Terminal size={16} style={{ display: 'inline', marginRight: '8px' }} /> {t('executeBtn') || 'Esegui'}
        </button>
      ) : (
        <button onClick={handleNext} className="btn-primary" style={{ width: '100%' }}>
          {currentIndex < shuffled.length - 1 ? `${t('nextChallengeBtn') || 'Prossima challenge'} →` : `${t('seeResultsBtn') || 'Vedi risultati'} 🏆`}
        </button>
      )}
    </div>
  )
}
