import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, RotateCcw } from 'lucide-react'

const cardPairs = [
  { command: 'ls', description: 'Lista file e directory' },
  { command: 'cd', description: 'Cambia directory' },
  { command: 'pwd', description: 'Mostra directory corrente' },
  { command: 'cp', description: 'Copia file' },
  { command: 'mv', description: 'Sposta o rinomina file' },
  { command: 'rm', description: 'Elimina file' },
  { command: 'chmod', description: 'Modifica permessi' },
  { command: 'grep', description: 'Cerca pattern nel testo' },
  { command: 'cat', description: 'Visualizza contenuto file' },
  { command: 'sudo', description: 'Esegui come root' },
  { command: 'find', description: 'Cerca file nel filesystem' },
  { command: 'tar', description: 'Archivia e comprime file' },
]

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function MemoryGame({ onComplete }) {
  const { addXP, completeGame, earnBadge } = useGame()
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const PAIRS_COUNT = 8

  useEffect(() => {
    const selected = shuffleArray(cardPairs).slice(0, PAIRS_COUNT)
    const allCards = shuffleArray([
      ...selected.map((p, i) => ({ id: `cmd-${i}`, pairId: i, text: p.command, type: 'command' })),
      ...selected.map((p, i) => ({ id: `desc-${i}`, pairId: i, text: p.description, type: 'description' })),
    ])
    setCards(allCards)
  }, [])

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].pairId)) return
    
    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)
      const [first, second] = newFlipped

      if (cards[first].pairId === cards[second].pairId && cards[first].type !== cards[second].type) {
        const newMatched = [...matched, cards[first].pairId]
        setMatched(newMatched)
        setFlipped([])

        if (newMatched.length === PAIRS_COUNT) {
          setGameComplete(true)
          addXP(30)
          completeGame('memory-commands')
          if (moves + 1 <= PAIRS_COUNT + 2) earnBadge('memory-master')
        }
      } else {
        setTimeout(() => setFlipped([]), 800)
      }
    }
  }

  const resetGame = () => {
    const selected = shuffleArray(cardPairs).slice(0, PAIRS_COUNT)
    const allCards = shuffleArray([
      ...selected.map((p, i) => ({ id: `cmd-${i}`, pairId: i, text: p.command, type: 'command' })),
      ...selected.map((p, i) => ({ id: `desc-${i}`, pairId: i, text: p.description, type: 'description' })),
    ])
    setCards(allCards)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameComplete(false)
  }

  if (gameComplete) {
    return (
      <motion.div className="glass-card text-center" style={{ padding: '32px' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} className="mx-auto text-[var(--color-neon-yellow)]" style={{ marginBottom: '16px' }} />
        <h2 className="text-2xl font-black" style={{ marginBottom: '8px' }}>🎉 Complimenti!</h2>
        <p className="text-[var(--color-text-secondary)]">Hai completato il Memory in <strong>{moves}</strong> mosse! (+30 XP)</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={resetGame} className="btn-primary flex items-center" style={{ gap: '6px' }}>
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
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          Coppie trovate: <strong className="text-[var(--color-neon-green)]">{matched.length}/{PAIRS_COUNT}</strong>
        </span>
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          Mosse: <strong>{moves}</strong>
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index)
          const isMatched = matched.includes(card.pairId)

          return (
            <motion.div
              key={card.id}
              onClick={() => handleFlip(index)}
              className="cursor-pointer rounded-xl border"
              style={{
                padding: '14px 8px',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '0.8rem',
                fontWeight: isFlipped || isMatched ? 'bold' : 'normal',
                background: isMatched ? 'rgba(34,197,94,0.1)' : isFlipped ? 'var(--color-bg-card)' : 'var(--color-bg-primary)',
                borderColor: isMatched ? 'var(--color-success)' : isFlipped ? 'var(--color-neon-blue)' : 'var(--color-border)',
                color: isFlipped || isMatched
                  ? (card.type === 'command' ? 'var(--color-neon-green)' : 'var(--color-text-primary)')
                  : 'var(--color-text-muted)',
              }}
              whileHover={{ scale: isMatched ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isFlipped || isMatched ? (
                <span>{card.type === 'command' ? `$ ${card.text}` : card.text}</span>
              ) : (
                <span style={{ fontSize: '1.5rem' }}>❓</span>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
