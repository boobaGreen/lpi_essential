import { useState, useRef } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Terminal } from 'lucide-react'

const challenges = [
  { prompt: 'Mostra il contenuto della directory corrente', answer: 'ls', hints: ['Un comando di 2 lettere', 'Inizia con "l"'], accept: ['ls', 'ls -la', 'ls -l'] },
  { prompt: 'Cambia directory alla home dell\'utente', answer: 'cd ~', hints: ['Usa cd...', 'Il simbolo ~ rappresenta home'], accept: ['cd ~', 'cd', 'cd $HOME'] },
  { prompt: 'Mostra la directory corrente (percorso assoluto)', answer: 'pwd', hints: ['Print Working...', '3 lettere'], accept: ['pwd'] },
  { prompt: 'Crea una directory chiamata "progetto"', answer: 'mkdir progetto', hints: ['Make Directory...', 'mkdir + nome'], accept: ['mkdir progetto'] },
  { prompt: 'Mostra il contenuto del file /etc/hostname', answer: 'cat /etc/hostname', hints: ['conCATenate...', 'cat + percorso'], accept: ['cat /etc/hostname'] },
  { prompt: 'Cerca la parola "error" nel file syslog', answer: 'grep error /var/log/syslog', hints: ['Global Regular Expression...', 'grep pattern file'], accept: ['grep error /var/log/syslog', 'grep "error" /var/log/syslog', 'grep -i error /var/log/syslog'] },
  { prompt: 'Mostra l\'ID dell\'utente corrente', answer: 'id', hints: ['Un comando molto corto', '2 lettere'], accept: ['id', 'whoami'] },
  { prompt: 'Rendi eseguibile lo script hello.sh', answer: 'chmod +x hello.sh', hints: ['Change Mode...', 'chmod + qualcosa'], accept: ['chmod +x hello.sh', 'chmod u+x hello.sh', 'chmod 755 hello.sh'] },
  { prompt: 'Crea un archivio tar.gz della cartella docs/', answer: 'tar -czf docs.tar.gz docs/', hints: ['tar -c...', 'c=create z=gzip f=file'], accept: ['tar -czf docs.tar.gz docs/', 'tar czf docs.tar.gz docs/', 'tar -czf docs.tar.gz docs'] },
  { prompt: 'Mostra le prime 10 righe di un file log.txt', answer: 'head log.txt', hints: ['Il contrario di "tail"', 'head + file'], accept: ['head log.txt', 'head -10 log.txt', 'head -n 10 log.txt'] },
]

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TerminalChallenge({ onComplete }) {
  const { addXP, completeGame } = useGame()
  const [shuffled] = useState(() => shuffleArray(challenges).slice(0, 6))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null) // 'correct' | 'wrong' | null
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
    if (correct) {
      setScore(s => s + 1)
      addXP(15)
    }
  }

  const handleNext = () => {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex(i => i + 1)
      setInput('')
      setResult(null)
      setHintIndex(-1)
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setFinished(true)
      completeGame('terminal-challenge')
      if (score + (result === 'correct' ? 1 : 0) === shuffled.length) addXP(30)
    }
  }

  const showHint = () => {
    if (hintIndex < challenge.hints.length - 1) setHintIndex(h => h + 1)
  }

  if (finished) {
    const finalScore = score + (result === 'correct' ? 1 : 0)
    return (
      <motion.div className="glass-card text-center" style={{ padding: '32px' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} className="mx-auto text-[var(--color-neon-green)]" style={{ marginBottom: '16px' }} />
        <h2 className="text-2xl font-black" style={{ marginBottom: '8px' }}>
          {finalScore === shuffled.length ? '🏆 Perfetto!' : finalScore >= 4 ? '🎉 Ottimo!' : '💪 Continua!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-green)' }}>{finalScore}/{shuffled.length}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setInput(''); setHintIndex(-1) }} className="btn-primary flex items-center" style={{ gap: '6px' }}>
            <RotateCcw size={16} /> Riprova
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          Challenge {currentIndex + 1}/{shuffled.length}
        </span>
        <span className="font-bold text-[var(--color-neon-green)]" style={{ fontSize: '0.875rem' }}>
          ✅ {score} corrette
        </span>
      </div>

      {/* Challenge */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '16px' }}>
        <p className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: '1rem', marginBottom: '16px' }}>
          🎯 {challenge.prompt}
        </p>

        {/* Terminal input */}
        <form onSubmit={handleSubmit}>
          <div className="terminal-box">
            <div className="flex items-center" style={{ gap: '8px' }}>
              <span className="text-[var(--color-neon-green)] font-mono font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="bg-transparent border-none outline-none font-mono text-[var(--color-text-primary)] flex-1"
                placeholder="Scrivi il comando..."
                disabled={!!result}
                autoFocus
                style={{ fontSize: '0.9rem' }}
              />
            </div>
            {result && (
              <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '1px solid #30363d' }}>
                {result === 'correct' ? (
                  <p className="text-[var(--color-success)] font-mono" style={{ fontSize: '0.85rem' }}>✅ Corretto! +15 XP</p>
                ) : (
                  <p className="font-mono" style={{ fontSize: '0.85rem' }}>
                    <span className="text-[var(--color-error)]">❌ Non esatto.</span>
                    <span className="text-[var(--color-text-muted)]"> Risposta: </span>
                    <span className="text-[var(--color-neon-green)]">{challenge.answer}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </form>

        {/* Hints */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' }}>
          {!result && (
            <button onClick={showHint} className="btn-secondary" style={{ fontSize: '0.75rem', padding: '4px 12px' }} disabled={hintIndex >= challenge.hints.length - 1}>
              💡 Suggerimento
            </button>
          )}
          {hintIndex >= 0 && challenge.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <span key={i} className="text-[var(--color-neon-yellow)]" style={{ fontSize: '0.8rem' }}>💡 {hint}</span>
          ))}
        </div>
      </div>

      {/* Action button */}
      {!result ? (
        <button onClick={handleSubmit} className="btn-primary w-full" disabled={!input.trim()}>
          <Terminal size={16} className="inline mr-2" /> Esegui
        </button>
      ) : (
        <button onClick={handleNext} className="btn-primary w-full">
          {currentIndex < shuffled.length - 1 ? 'Prossima challenge →' : 'Vedi risultati 🏆'}
        </button>
      )}
    </div>
  )
}
