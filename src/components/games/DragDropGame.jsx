import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw } from 'lucide-react'

import { useGameData } from '../../hooks/useGameData.js'


const levelConfig = {
  1: { setsToPlay: 2, maxDiff: 1, xp: 20, label: 'Principiante' },
  2: { setsToPlay: 3, maxDiff: 2, xp: 35, label: 'Intermedio' },
  3: { setsToPlay: 5, maxDiff: 3, xp: 55, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function DragDropGame({ onComplete, level = 1 }) {
  const { addXP, completeGame } = useGame()
  const { dragDropData: matchSets } = useGameData()
  const config = levelConfig[level] || levelConfig[1]
  const availableSets = matchSets.filter(s => s.difficulty <= config.maxDiff)
  const [gameSets] = useState(() => shuffleArray(availableSets).slice(0, config.setsToPlay))
  const [setIndex, setSetIndex] = useState(0)
  const [shuffledRight, setShuffledRight] = useState([])
  const [selected, setSelected] = useState({ left: null, right: null })
  const [matched, setMatched] = useState([])
  const [wrong, setWrong] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const currentSet = gameSets[setIndex]

  useEffect(() => { startNewSet() }, [setIndex])

  const startNewSet = () => {
    setShuffledRight(shuffleArray(gameSets[setIndex].pairs.map(p => p.right)))
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
      const newMatched = [...matched, sel.left]
      setMatched(newMatched)
      setSelected({ left: null, right: null })
      setWrong(null)

      if (newMatched.length === currentSet.pairs.length) {
        setScore(s => s + 1)
        addXP(15)
        setTimeout(() => {
          if (setIndex + 1 < config.setsToPlay && setIndex + 1 < gameSets.length) {
            setSetIndex(s => s + 1)
          } else {
            setFinished(true)
            completeGame(`dragdrop-lv${level}`)
            addXP(config.xp)
          }
        }, 600)
      }
    } else {
      setWrong({ left: sel.left, right: sel.right })
      setTimeout(() => { setSelected({ left: null, right: null }); setWrong(null) }, 600)
    }
  }

  if (finished) {
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-orange)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎉 Completato!</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>{config.setsToPlay} set completati! Livello: <strong>{config.label}</strong> (+{15 * config.setsToPlay + config.xp} XP)</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setSetIndex(0); setScore(0); setFinished(false) }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RotateCcw size={16} /> Gioca ancora
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span className="font-bold" style={{ fontSize: '0.9rem', color: 'var(--color-neon-orange)' }}>
          🧩 {currentSet.title}
        </span>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Set {setIndex + 1}/{config.setsToPlay} • {matched.length}/{currentSet.pairs.length} coppie
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="font-bold" style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', color: 'var(--color-text-muted)' }}>Seleziona</div>
          {currentSet.pairs.map((pair, i) => {
            const isMatched = matched.includes(i)
            const isSelected = selected.left === i
            const isWrong = wrong?.left === i
            return (
              <motion.button
                key={`l-${i}`}
                onClick={() => handleLeftClick(i)}
                className="font-bold"
                style={{
                  width: '100%', textAlign: 'left', borderRadius: '12px', border: '1px solid',
                  padding: '12px 14px', fontSize: '0.85rem',
                  borderColor: isMatched ? 'var(--color-success)' : isWrong ? 'var(--color-error)' : isSelected ? 'var(--color-neon-orange)' : 'var(--color-border)',
                  background: isMatched ? 'rgba(34,197,94,0.1)' : isWrong ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(251,146,60,0.1)' : 'transparent',
                  color: isMatched ? 'var(--color-success)' : 'var(--color-text-primary)',
                  opacity: isMatched ? 0.6 : 1, cursor: isMatched ? 'default' : 'pointer',
                }}
                whileTap={{ scale: 0.97 }}
                disabled={isMatched}
              >
                {pair.left}
              </motion.button>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="font-bold" style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', color: 'var(--color-text-muted)' }}>Abbina</div>
          {shuffledRight.map((text, i) => {
            const isMatched = matched.some(mi => currentSet.pairs[mi].right === text)
            const isSelected = selected.right === text
            const isWrong = wrong?.right === text
            return (
              <motion.button
                key={`r-${i}`}
                onClick={() => handleRightClick(text)}
                style={{
                  width: '100%', textAlign: 'left', borderRadius: '12px', border: '1px solid',
                  padding: '12px 14px', fontSize: '0.85rem',
                  borderColor: isMatched ? 'var(--color-success)' : isWrong ? 'var(--color-error)' : isSelected ? 'var(--color-neon-orange)' : 'var(--color-border)',
                  background: isMatched ? 'rgba(34,197,94,0.1)' : isWrong ? 'rgba(239,68,68,0.1)' : isSelected ? 'rgba(251,146,60,0.1)' : 'transparent',
                  color: isMatched ? 'var(--color-success)' : 'var(--color-text-secondary)',
                  opacity: isMatched ? 0.6 : 1, cursor: isMatched ? 'default' : 'pointer',
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
