import { useState } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, ArrowRight } from 'lucide-react'

import { useGameData } from '../../hooks/useGameData.js'

const levelConfig = {
  1: { count: 6, maxDiff: 1, xp: 10, label: 'Principiante' },
  2: { count: 8, maxDiff: 2, xp: 20, label: 'Intermedio' },
  3: { count: 12, maxDiff: 3, xp: 35, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FillGapGame({ onComplete, level = 1 }) {
  const { addXP, completeGame } = useGame()
  const { fillGapData: allChallenges } = useGameData()
  const config = levelConfig[level] || levelConfig[1]
  const pool = allChallenges.filter(c => c.difficulty <= config.maxDiff)
  const [challenges] = useState(() => shuffleArray(pool).slice(0, config.count))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const challenge = challenges[currentIndex]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (result) return
    const trimmed = input.trim().toLowerCase()
    const correct = trimmed === challenge.answer.toLowerCase()
    setResult(correct ? 'correct' : 'wrong')
    if (correct) { setScore(s => s + 1); addXP(config.xp) }
  }

  const handleNext = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex(i => i + 1); setInput(''); setResult(null); setShowHint(false)
    } else {
      setFinished(true)
      completeGame(`fillgap-lv${level}`)
      if (score + (result === 'correct' ? 1 : 0) === challenges.length) addXP(25)
    }
  }

  if (finished) {
    const finalScore = score + (result === 'correct' ? 1 : 0)
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-pink)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {finalScore >= challenges.length - 1 ? '🎉 Ottimo!' : '💪 Continua!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-pink)' }}>{finalScore}/{challenges.length}</p>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '0.875rem' }}>Livello: {config.label}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setInput(''); setShowHint(false) }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RotateCcw size={16} /> Riprova
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  const parts = challenge.prompt.split('_____')

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Domanda {currentIndex + 1}/{challenges.length}
        </span>
        <span className="font-bold" style={{ fontSize: '0.875rem', color: 'var(--color-neon-pink)' }}>
          ✅ {score} corrette
        </span>
      </div>

      <div className="glass-card" style={{ padding: '24px' }}>
        <p className="font-bold" style={{ fontSize: '1rem', marginBottom: '20px', color: 'var(--color-text-primary)' }}>
          📝 Completa il comando:
        </p>

        <div className="terminal-box" style={{ marginBottom: '16px' }}>
          <div className="font-mono" style={{ fontSize: '1rem', lineHeight: '2' }}>
            <span style={{ color: 'var(--color-neon-green)' }}>$ </span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{parts[0]}</span>
            {result ? (
              <span className="font-bold" style={{
                color: result === 'correct' ? 'var(--color-success)' : 'var(--color-error)',
                textDecoration: result === 'wrong' ? 'line-through' : 'none',
                padding: '2px 8px', borderRadius: '4px',
                background: result === 'correct' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
              }}>{input || '???'}</span>
            ) : (
              <span style={{ display: 'inline-block', minWidth: '80px', borderBottom: '2px dashed var(--color-neon-pink)', padding: '0 4px', color: 'var(--color-neon-pink)' }}>
                {input || '...'}
              </span>
            )}
            <span style={{ color: 'var(--color-text-secondary)' }}>{parts[1]}</span>
          </div>
          {result === 'wrong' && (
            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #30363d' }}>
              <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Risposta corretta: <span className="font-bold" style={{ color: 'var(--color-neon-green)' }}>{challenge.answer}</span>
              </span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Scrivi qui..."
            disabled={!!result} autoFocus className="font-mono"
            style={{ flex: 1, padding: '12px 16px', fontSize: '0.9rem', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', outline: 'none' }}
          />
          {!result ? (
            <button type="submit" className="btn-primary" disabled={!input.trim()}>Verifica</button>
          ) : (
            <button type="button" onClick={handleNext} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {currentIndex < challenges.length - 1 ? <>Avanti <ArrowRight size={16} /></> : 'Risultati 🏆'}
            </button>
          )}
        </form>

        {!result && (
          <div style={{ marginTop: '12px' }}>
            {!showHint ? (
              <button onClick={() => setShowHint(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', color: 'var(--color-neon-yellow)' }}>
                💡 Mostra suggerimento
              </button>
            ) : (
              <span style={{ fontSize: '0.8rem', color: 'var(--color-neon-yellow)' }}>💡 {challenge.hint}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
