import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Shuffle } from 'lucide-react'

const matchSets = [
  {
    title: 'Licenze Software',
    pairs: [
      { left: 'GPL', right: 'Copyleft forte' },
      { left: 'MIT', right: 'Permissiva, molto breve' },
      { left: 'Apache 2.0', right: 'Permissiva + brevetti' },
      { left: 'LGPL', right: 'Permette linking proprietario' },
      { left: 'AGPL', right: 'Copyleft per SaaS' },
    ]
  },
  {
    title: 'Porte di Rete',
    pairs: [
      { left: 'SSH', right: 'Porta 22' },
      { left: 'HTTP', right: 'Porta 80' },
      { left: 'HTTPS', right: 'Porta 443' },
      { left: 'FTP', right: 'Porta 21' },
      { left: 'DNS', right: 'Porta 53' },
    ]
  },
  {
    title: 'Permessi File',
    pairs: [
      { left: 'r (read)', right: 'Valore 4' },
      { left: 'w (write)', right: 'Valore 2' },
      { left: 'x (execute)', right: 'Valore 1' },
      { left: 'chmod 755', right: 'rwxr-xr-x' },
      { left: 'chmod 644', right: 'rw-r--r--' },
    ]
  },
  {
    title: 'Directory Linux',
    pairs: [
      { left: '/etc', right: 'Configurazione sistema' },
      { left: '/home', right: 'Home degli utenti' },
      { left: '/var', right: 'Dati variabili (log)' },
      { left: '/tmp', right: 'File temporanei' },
      { left: '/boot', right: 'Kernel e bootloader' },
    ]
  },
  {
    title: 'Comandi e Funzioni',
    pairs: [
      { left: 'grep', right: 'Cerca pattern nel testo' },
      { left: 'chmod', right: 'Modifica permessi' },
      { left: 'chown', right: 'Cambia proprietario' },
      { left: 'tar -czf', right: 'Crea archivio .tar.gz' },
      { left: 'kill -9', right: 'Termina processo forzato' },
    ]
  },
]

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function DragDropGame({ onComplete }) {
  const { addXP, completeGame } = useGame()
  const [setIndex, setSetIndex] = useState(0)
  const [shuffledRight, setShuffledRight] = useState([])
  const [selected, setSelected] = useState({ left: null, right: null })
  const [matched, setMatched] = useState([])
  const [wrong, setWrong] = useState(null)
  const [score, setScore] = useState(0)
  const [totalSets, setTotalSets] = useState(0)
  const [finished, setFinished] = useState(false)

  const currentSet = matchSets[setIndex]
  const SETS_TO_PLAY = 3

  useEffect(() => {
    startNewSet()
  }, [setIndex])

  const startNewSet = () => {
    setShuffledRight(shuffleArray(matchSets[setIndex].pairs.map(p => p.right)))
    setSelected({ left: null, right: null })
    setMatched([])
    setWrong(null)
  }

  const handleLeftClick = (index) => {
    if (matched.includes(index)) return
    const newSelected = { ...selected, left: index }
    setSelected(newSelected)
    checkMatch(newSelected)
  }

  const handleRightClick = (rightText) => {
    if (matched.some(i => currentSet.pairs[i].right === rightText)) return
    const newSelected = { ...selected, right: rightText }
    setSelected(newSelected)
    checkMatch(newSelected)
  }

  const checkMatch = (sel) => {
    if (sel.left === null || sel.right === null) return

    const pair = currentSet.pairs[sel.left]
    if (pair.right === sel.right) {
      // Correct match
      const newMatched = [...matched, sel.left]
      setMatched(newMatched)
      setSelected({ left: null, right: null })
      setWrong(null)

      if (newMatched.length === currentSet.pairs.length) {
        // Set complete
        setScore(s => s + 1)
        addXP(15)

        setTimeout(() => {
          const nextSet = setIndex + 1
          if (nextSet < SETS_TO_PLAY && nextSet < matchSets.length) {
            setSetIndex(nextSet)
            setTotalSets(t => t + 1)
          } else {
            setFinished(true)
            completeGame('drag-drop')
            addXP(20) // bonus
          }
        }, 600)
      }
    } else {
      // Wrong
      setWrong({ left: sel.left, right: sel.right })
      setTimeout(() => {
        setSelected({ left: null, right: null })
        setWrong(null)
      }, 600)
    }
  }

  if (finished) {
    return (
      <motion.div className="glass-card text-center" style={{ padding: '32px' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} className="mx-auto text-[var(--color-neon-orange)]" style={{ marginBottom: '16px' }} />
        <h2 className="text-2xl font-black" style={{ marginBottom: '8px' }}>🎉 Completato!</h2>
        <p className="text-[var(--color-text-secondary)]">{SETS_TO_PLAY} set completati! (+{15 * SETS_TO_PLAY + 20} XP)</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setSetIndex(0); setScore(0); setFinished(false); setTotalSets(0) }} className="btn-primary flex items-center" style={{ gap: '6px' }}>
            <RotateCcw size={16} /> Gioca ancora
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
        <span className="font-bold" style={{ fontSize: '0.9rem', color: 'var(--color-neon-orange)' }}>
          🧩 {currentSet.title}
        </span>
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          Set {setIndex + 1}/{SETS_TO_PLAY} • {matched.length}/{currentSet.pairs.length} coppie
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="text-[var(--color-text-muted)] font-bold" style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Seleziona</div>
          {currentSet.pairs.map((pair, i) => {
            const isMatched = matched.includes(i)
            const isSelected = selected.left === i
            const isWrong = wrong?.left === i

            return (
              <motion.button
                key={`l-${i}`}
                onClick={() => handleLeftClick(i)}
                className="w-full text-left rounded-xl border font-bold"
                style={{
                  padding: '12px 14px',
                  fontSize: '0.85rem',
                  borderColor: isMatched ? 'var(--color-success)' : isWrong ? 'var(--color-error)' : isSelected ? 'var(--color-neon-orange)' : 'var(--color-border)',
                  background: isMatched ? 'rgba(34,197,94,0.1)' : isWrong ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(251,146,60,0.1)' : 'transparent',
                  color: isMatched ? 'var(--color-success)' : 'var(--color-text-primary)',
                  opacity: isMatched ? 0.6 : 1,
                }}
                whileTap={{ scale: 0.97 }}
                disabled={isMatched}
              >
                {pair.left}
              </motion.button>
            )
          })}
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="text-[var(--color-text-muted)] font-bold" style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Abbina</div>
          {shuffledRight.map((text, i) => {
            const isMatched = matched.some(mi => currentSet.pairs[mi].right === text)
            const isSelected = selected.right === text
            const isWrong = wrong?.right === text

            return (
              <motion.button
                key={`r-${i}`}
                onClick={() => handleRightClick(text)}
                className="w-full text-left rounded-xl border"
                style={{
                  padding: '12px 14px',
                  fontSize: '0.85rem',
                  borderColor: isMatched ? 'var(--color-success)' : isWrong ? 'var(--color-error)' : isSelected ? 'var(--color-neon-orange)' : 'var(--color-border)',
                  background: isMatched ? 'rgba(34,197,94,0.1)' : isWrong ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(251,146,60,0.1)' : 'transparent',
                  color: isMatched ? 'var(--color-success)' : 'var(--color-text-secondary)',
                  opacity: isMatched ? 0.6 : 1,
                }}
                whileTap={{ scale: 0.97 }}
                disabled={isMatched}
              >
                {text}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
