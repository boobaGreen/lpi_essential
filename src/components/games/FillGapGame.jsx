import { useState } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, ArrowRight } from 'lucide-react'

const fillGapChallenges = [
  { prompt: 'Per creare una directory: _____ nomedir', answer: 'mkdir', hint: 'Make Directory' },
  { prompt: 'Per cancellare un file: _____ nomefile', answer: 'rm', hint: 'Remove' },
  { prompt: 'Per copiare un file: _____ sorgente destinazione', answer: 'cp', hint: 'Copy' },
  { prompt: 'Per spostare un file: _____ sorgente destinazione', answer: 'mv', hint: 'Move' },
  { prompt: 'Per vedere i processi: _____ aux', answer: 'ps', hint: 'Process Status' },
  { prompt: 'Per cambiare permessi: _____ 755 script.sh', answer: 'chmod', hint: 'Change Mode' },
  { prompt: 'Per cambiare proprietario: _____ user:group file', answer: 'chown', hint: 'Change Owner' },
  { prompt: 'Per cercare testo: _____ "pattern" file.txt', answer: 'grep', hint: 'Global Regular Expression Print' },
  { prompt: 'Per estrarre un archivio tar.gz: tar _____ archivio.tar.gz', answer: '-xzf', hint: 'eXtract gZip File' },
  { prompt: 'Per aggiungere un utente: _____ -m nuovoutente', answer: 'useradd', hint: 'User Add' },
  { prompt: 'Per vedere lo spazio disco: _____ -h', answer: 'df', hint: 'Disk Free' },
  { prompt: 'Per cercare file nel filesystem: _____ / -name "*.log"', answer: 'find', hint: 'Cerca nel filesystem' },
  { prompt: 'Per terminare un processo: _____ -9 PID', answer: 'kill', hint: 'Termina processo' },
  { prompt: 'Per mostrare le ultime righe: _____ -f /var/log/syslog', answer: 'tail', hint: 'Coda del file' },
  { prompt: 'Per creare un link simbolico: ln _____ target link', answer: '-s', hint: 'Symbolic' },
]

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FillGapGame({ onComplete }) {
  const { addXP, completeGame } = useGame()
  const [challenges] = useState(() => shuffleArray(fillGapChallenges).slice(0, 8))
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
    if (correct) {
      setScore(s => s + 1)
      addXP(10)
    }
  }

  const handleNext = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex(i => i + 1)
      setInput('')
      setResult(null)
      setShowHint(false)
    } else {
      setFinished(true)
      completeGame('fill-gap')
      if (score + (result === 'correct' ? 1 : 0) === challenges.length) addXP(25)
    }
  }

  if (finished) {
    const finalScore = score + (result === 'correct' ? 1 : 0)
    return (
      <motion.div className="glass-card text-center" style={{ padding: '32px' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} className="mx-auto text-[var(--color-neon-pink)]" style={{ marginBottom: '16px' }} />
        <h2 className="text-2xl font-black" style={{ marginBottom: '8px' }}>
          {finalScore >= 6 ? '🎉 Ottimo!' : '💪 Continua!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-pink)' }}>{finalScore}/{challenges.length}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setInput(''); setShowHint(false) }} className="btn-primary flex items-center" style={{ gap: '6px' }}>
            <RotateCcw size={16} /> Riprova
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  // Split prompt around _____
  const parts = challenge.prompt.split('_____')

  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          Domanda {currentIndex + 1}/{challenges.length}
        </span>
        <span className="font-bold text-[var(--color-neon-pink)]" style={{ fontSize: '0.875rem' }}>
          ✅ {score} corrette
        </span>
      </div>

      <div className="glass-card" style={{ padding: '24px' }}>
        <p className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: '1rem', marginBottom: '20px' }}>
          📝 Completa il comando:
        </p>

        {/* Fill the gap display */}
        <div className="terminal-box" style={{ marginBottom: '16px' }}>
          <div className="font-mono" style={{ fontSize: '1rem', lineHeight: '2' }}>
            <span className="text-[var(--color-neon-green)]">$ </span>
            <span className="text-[var(--color-text-secondary)]">{parts[0]}</span>
            {result ? (
              <span className="font-bold" style={{ 
                color: result === 'correct' ? 'var(--color-success)' : 'var(--color-error)',
                textDecoration: result === 'wrong' ? 'line-through' : 'none',
                padding: '2px 8px',
                borderRadius: '4px',
                background: result === 'correct' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
              }}>
                {input || '???'}
              </span>
            ) : (
              <span style={{
                display: 'inline-block',
                minWidth: '80px',
                borderBottom: '2px dashed var(--color-neon-pink)',
                padding: '0 4px',
                color: 'var(--color-neon-pink)',
              }}>
                {input || '...'}
              </span>
            )}
            <span className="text-[var(--color-text-secondary)]">{parts[1]}</span>
          </div>

          {result === 'wrong' && (
            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #30363d' }}>
              <span className="text-[var(--color-text-muted)] font-mono" style={{ fontSize: '0.85rem' }}>
                Risposta corretta: <span className="text-[var(--color-neon-green)] font-bold">{challenge.answer}</span>
              </span>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Scrivi qui..."
            disabled={!!result}
            autoFocus
            className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-mono"
            style={{ padding: '12px 16px', fontSize: '0.9rem', outline: 'none' }}
          />
          {!result ? (
            <button type="submit" className="btn-primary" disabled={!input.trim()}>Verifica</button>
          ) : (
            <button type="button" onClick={handleNext} className="btn-primary flex items-center" style={{ gap: '4px' }}>
              {currentIndex < challenges.length - 1 ? <>Avanti <ArrowRight size={16} /></> : 'Risultati 🏆'}
            </button>
          )}
        </form>

        {/* Hint */}
        {!result && (
          <div style={{ marginTop: '12px' }}>
            {!showHint ? (
              <button onClick={() => setShowHint(true)} className="text-[var(--color-neon-yellow)]" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}>
                💡 Mostra suggerimento
              </button>
            ) : (
              <span className="text-[var(--color-neon-yellow)]" style={{ fontSize: '0.8rem' }}>💡 {challenge.hint}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
