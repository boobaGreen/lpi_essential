import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw } from 'lucide-react'

const cardPairsAll = [
  // Livello 1: comandi base
  { command: 'ls', description: 'Lista file e directory' },
  { command: 'cd', description: 'Cambia directory' },
  { command: 'pwd', description: 'Mostra directory corrente' },
  { command: 'cp', description: 'Copia file' },
  { command: 'mv', description: 'Sposta o rinomina file' },
  { command: 'rm', description: 'Elimina file' },
  { command: 'cat', description: 'Visualizza contenuto file' },
  { command: 'mkdir', description: 'Crea directory' },
  { command: 'touch', description: 'Crea file vuoto' },
  { command: 'echo', description: 'Stampa testo su stdout' },
  { command: 'man', description: 'Mostra il manuale' },
  { command: 'sudo', description: 'Esegui come root' },
  { command: 'whoami', description: 'Mostra utente corrente' },
  { command: 'exit', description: 'Chiude la shell' },
  // Livello 2: comandi intermedi
  { command: 'chmod', description: 'Modifica permessi file' },
  { command: 'grep', description: 'Cerca pattern nel testo' },
  { command: 'find', description: 'Cerca file nel filesystem' },
  { command: 'tar', description: 'Archivia e comprime file' },
  { command: 'chown', description: 'Cambia proprietario file' },
  { command: 'df', description: 'Mostra spazio disco libero' },
  { command: 'du', description: 'Dimensione file e directory' },
  { command: 'top', description: 'Monitor processi real-time' },
  { command: 'ps', description: 'Lista processi attivi' },
  { command: 'kill', description: 'Termina un processo' },
  { command: 'ssh', description: 'Connessione remota sicura' },
  { command: 'scp', description: 'Copia file via SSH' },
  { command: 'ln', description: 'Crea link a file' },
  { command: 'head', description: 'Prime righe di un file' },
  { command: 'tail', description: 'Ultime righe di un file' },
  { command: 'wc', description: 'Conta righe, parole, byte' },
  { command: 'sort', description: 'Ordina righe di testo' },
  { command: 'mount', description: 'Monta un filesystem' },
  { command: 'umount', description: 'Smonta un filesystem' },
  // Livello 3: comandi avanzati
  { command: 'awk', description: 'Elabora testo per colonne' },
  { command: 'sed', description: 'Editor di stream di testo' },
  { command: 'xargs', description: 'Costruisce argomenti da stdin' },
  { command: 'crontab', description: 'Pianifica task periodici' },
  { command: 'iptables', description: 'Configura firewall Linux' },
  { command: 'rsync', description: 'Sincronizza file remoti' },
  { command: 'cut', description: 'Estrae colonne dal testo' },
  { command: 'tr', description: 'Traduce/elimina caratteri' },
  { command: 'tee', description: 'Output su file e stdout' },
  { command: 'useradd', description: 'Aggiunge un utente' },
  { command: 'passwd', description: 'Cambia password utente' },
  { command: 'groupadd', description: 'Crea un nuovo gruppo' },
  { command: 'netstat', description: 'Statistiche connessioni rete' },
  { command: 'ifconfig', description: 'Configura interfaccia rete' },
  { command: 'ping', description: 'Testa connettività rete' },
  { command: 'wget', description: 'Scarica file da URL' },
  { command: 'curl', description: 'Trasferisce dati da URL' },
]

// Level config: { pairsCount, pool }
const levelConfig = {
  1: { pairs: 6, pool: 14, xp: 25, gridCols: 4, label: 'Principiante' },
  2: { pairs: 8, pool: 33, xp: 40, gridCols: 4, label: 'Intermedio' },
  3: { pairs: 12, pool: 50, xp: 60, gridCols: 6, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function MemoryGame({ onComplete, level = 1 }) {
  const { addXP, completeGame, earnBadge } = useGame()
  const config = levelConfig[level] || levelConfig[1]
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const PAIRS_COUNT = config.pairs

  const initCards = () => {
    const pool = cardPairsAll.slice(0, config.pool)
    const selected = shuffleArray(pool).slice(0, PAIRS_COUNT)
    const allCards = shuffleArray([
      ...selected.map((p, i) => ({ id: `cmd-${i}`, pairId: i, text: p.command, type: 'command' })),
      ...selected.map((p, i) => ({ id: `desc-${i}`, pairId: i, text: p.description, type: 'description' })),
    ])
    setCards(allCards)
  }

  useEffect(() => { initCards() }, [level])

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
          addXP(config.xp)
          completeGame(`memory-lv${level}`)
          if (moves + 1 <= PAIRS_COUNT + 2) earnBadge('memory-master')
        }
      } else {
        setTimeout(() => setFlipped([]), 800)
      }
    }
  }

  const resetGame = () => {
    initCards()
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameComplete(false)
  }

  if (gameComplete) {
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-yellow)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎉 Complimenti!</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>Hai completato il Memory <strong>{config.label}</strong> in <strong>{moves}</strong> mosse! (+{config.xp} XP)</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={resetGame} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Coppie trovate: <strong style={{ color: 'var(--color-neon-green)' }}>{matched.length}/{PAIRS_COUNT}</strong>
        </span>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Mosse: <strong>{moves}</strong>
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${config.gridCols}, 1fr)`, gap: '10px' }}>
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index)
          const isMatched = matched.includes(card.pairId)

          return (
            <motion.div
              key={card.id}
              onClick={() => handleFlip(index)}
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
                border: '1px solid',
                borderColor: isMatched ? 'var(--color-success)' : isFlipped ? 'var(--color-neon-blue)' : 'var(--color-border)',
                borderRadius: '12px',
                cursor: 'pointer',
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
