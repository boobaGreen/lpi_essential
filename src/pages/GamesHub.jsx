import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Gamepad2, Brain, Terminal, Puzzle, ArrowLeft } from 'lucide-react'

export default function GamesHub() {
  const games = [
    {
      icon: '🧠',
      title: 'Quiz Rapidi',
      description: 'Metti alla prova le tue conoscenze con quiz a scelta multipla per ogni topic.',
      link: '/topic/1/lesson/1-1',
      color: 'var(--color-neon-blue)',
      available: true,
    },
    {
      icon: '🃏',
      title: 'Memory Game',
      description: 'Abbina comandi Linux alle loro descrizioni. Allena la tua memoria!',
      link: '#',
      color: 'var(--color-neon-green)',
      available: false,
    },
    {
      icon: '💻',
      title: 'Terminal Challenge',
      description: 'Scrivi il comando giusto e verifica l\'output. Come un vero sysadmin!',
      link: '#',
      color: 'var(--color-neon-purple)',
      available: false,
    },
    {
      icon: '🧩',
      title: 'Drag & Drop',
      description: 'Trascina e rilascia per associare concetti: licenze, permessi, porte...',
      link: '#',
      color: 'var(--color-neon-orange)',
      available: false,
    },
    {
      icon: '📝',
      title: 'Completa il Comando',
      description: 'Riempi gli spazi vuoti nei comandi Linux. Fill-the-gap!',
      link: '#',
      color: 'var(--color-neon-pink)',
      available: false,
    },
    {
      icon: '⚡',
      title: 'Vero o Falso',
      description: 'Rispondi il più velocemente possibile: è vero o falso?',
      link: '#',
      color: 'var(--color-neon-yellow)',
      available: false,
    },
  ]

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm">Dashboard</span>
      </Link>

      <div className="text-center py-4">
        <h1 className="text-3xl font-black">
          <Gamepad2 className="inline mr-2 text-[var(--color-neon-purple)]" size={32} />
          <span className="gradient-text">Hub Giochi</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-2">Scegli un gioco e guadagna XP mentre impari!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {game.available ? (
              <Link to={game.link} className="no-underline">
                <div className="glass-card p-6 cursor-pointer h-full">
                  <span className="text-4xl">{game.icon}</span>
                  <h3 className="text-lg font-bold mt-3" style={{ color: game.color }}>{game.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-2">{game.description}</p>
                </div>
              </Link>
            ) : (
              <div className="glass-card p-6 opacity-50 h-full">
                <span className="text-4xl">{game.icon}</span>
                <h3 className="text-lg font-bold mt-3" style={{ color: game.color }}>{game.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-2">{game.description}</p>
                <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-[var(--color-bg-primary)] text-[var(--color-text-muted)]">🔒 Prossimamente</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
