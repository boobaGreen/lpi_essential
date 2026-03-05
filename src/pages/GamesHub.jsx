import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Gamepad2, ArrowLeft } from 'lucide-react'
import MemoryGame from '../components/games/MemoryGame.jsx'
import TerminalChallenge from '../components/games/TerminalChallenge.jsx'
import DragDropGame from '../components/games/DragDropGame.jsx'
import FillGapGame from '../components/games/FillGapGame.jsx'
import TrueFalseGame from '../components/games/TrueFalseGame.jsx'
import { useState } from 'react'

const gameComponents = {
  memory: { component: MemoryGame, title: '🃏 Memory Game', color: 'var(--color-neon-green)' },
  terminal: { component: TerminalChallenge, title: '💻 Terminal Challenge', color: 'var(--color-neon-purple)' },
  dragdrop: { component: DragDropGame, title: '🧩 Drag & Drop', color: 'var(--color-neon-orange)' },
  fillgap: { component: FillGapGame, title: '📝 Completa il Comando', color: 'var(--color-neon-pink)' },
  truefalse: { component: TrueFalseGame, title: '⚡ Vero o Falso', color: 'var(--color-neon-yellow)' },
}

export default function GamesHub() {
  const [activeGame, setActiveGame] = useState(null)

  const games = [
    {
      id: 'quiz',
      icon: '🧠',
      title: 'Quiz Rapidi',
      description: 'Metti alla prova le tue conoscenze con quiz a scelta multipla per ogni topic.',
      link: '/topic/1',
      color: 'var(--color-neon-blue)',
      isLink: true,
    },
    {
      id: 'memory',
      icon: '🃏',
      title: 'Memory Game',
      description: 'Abbina comandi Linux alle loro descrizioni. Allena la tua memoria!',
      color: 'var(--color-neon-green)',
    },
    {
      id: 'terminal',
      icon: '💻',
      title: 'Terminal Challenge',
      description: 'Scrivi il comando giusto! Come un vero sysadmin!',
      color: 'var(--color-neon-purple)',
    },
    {
      id: 'dragdrop',
      icon: '🧩',
      title: 'Drag & Drop',
      description: 'Associa concetti: licenze, permessi, porte di rete e altro!',
      color: 'var(--color-neon-orange)',
    },
    {
      id: 'fillgap',
      icon: '📝',
      title: 'Completa il Comando',
      description: 'Riempi gli spazi vuoti nei comandi Linux. Fill-the-gap!',
      color: 'var(--color-neon-pink)',
    },
    {
      id: 'truefalse',
      icon: '⚡',
      title: 'Vero o Falso',
      description: 'Rispondi il più velocemente possibile: è vero o falso? Hai 10 secondi!',
      color: 'var(--color-neon-yellow)',
    },
  ]

  // Active game view
  if (activeGame && gameComponents[activeGame]) {
    const GameComp = gameComponents[activeGame].component
    const gameInfo = gameComponents[activeGame]
    return (
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <button
          onClick={() => setActiveGame(null)}
          className="inline-flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          style={{ gap: '8px', marginBottom: '16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
        >
          <ArrowLeft size={18} /> Hub Giochi
        </button>
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
          <span style={{ color: gameInfo.color }}>{gameInfo.title}</span>
        </h2>
        <GameComp onComplete={() => setActiveGame(null)} />
      </div>
    )
  }

  // Hub grid view
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Link to="/" className="inline-flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors" style={{ gap: '8px' }}>
        <ArrowLeft size={18} />
        <span style={{ fontSize: '0.875rem' }}>Dashboard</span>
      </Link>

      <div className="text-center" style={{ padding: '16px 0' }}>
        <h1 className="font-black" style={{ fontSize: '2rem' }}>
          <Gamepad2 className="inline text-[var(--color-neon-purple)]" size={32} style={{ marginRight: '8px' }} />
          <span className="gradient-text">Hub Giochi</span>
        </h1>
        <p className="text-[var(--color-text-secondary)]" style={{ marginTop: '8px' }}>Scegli un gioco e guadagna XP mentre impari! 🎮</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {games.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            {game.isLink ? (
              <Link to={game.link} className="no-underline">
                <div className="glass-card cursor-pointer h-full hover:border-[var(--color-neon-blue)]" style={{ padding: '24px', transition: 'border-color 0.2s' }}>
                  <span style={{ fontSize: '2.5rem' }}>{game.icon}</span>
                  <h3 className="font-bold" style={{ marginTop: '12px', fontSize: '1.1rem', color: game.color }}>{game.title}</h3>
                  <p className="text-[var(--color-text-muted)]" style={{ marginTop: '8px', fontSize: '0.875rem' }}>{game.description}</p>
                  <span className="inline-block font-bold" style={{ marginTop: '12px', fontSize: '0.75rem', color: game.color }}>Gioca →</span>
                </div>
              </Link>
            ) : (
              <div
                className="glass-card cursor-pointer h-full"
                style={{ padding: '24px', transition: 'border-color 0.2s' }}
                onClick={() => setActiveGame(game.id)}
                onMouseEnter={e => e.currentTarget.style.borderColor = game.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
              >
                <span style={{ fontSize: '2.5rem' }}>{game.icon}</span>
                <h3 className="font-bold" style={{ marginTop: '12px', fontSize: '1.1rem', color: game.color }}>{game.title}</h3>
                <p className="text-[var(--color-text-muted)]" style={{ marginTop: '8px', fontSize: '0.875rem' }}>{game.description}</p>
                <span className="inline-block font-bold" style={{ marginTop: '12px', fontSize: '0.75rem', color: game.color }}>Gioca →</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
