import { Link } from 'react-router-dom'
import { useGame } from '../context/GameContext.jsx'
import { topics, getTotalLessons } from '../data/topics.js'
import { motion } from 'framer-motion'
import { 
  BookOpen, Trophy, Flame, Target, Gamepad2, GraduationCap, 
  ChevronRight, Zap, Star 
} from 'lucide-react'

function TopicCard({ topic, progress, completedLessons }) {
  const totalLessons = topic.lessons.length
  const doneLessons = topic.lessons.filter(l => completedLessons.includes(l.id)).length
  const percentage = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0
  
  const colorMap = {
    'neon-blue': 'var(--color-neon-blue)',
    'neon-green': 'var(--color-neon-green)',
    'neon-purple': 'var(--color-neon-purple)',
    'neon-orange': 'var(--color-neon-orange)',
    'neon-pink': 'var(--color-neon-pink)',
  }
  const topicColor = colorMap[topic.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/topic/${topic.id}`} className="block no-underline">
        <div className="glass-card cursor-pointer group" style={{ padding: '24px' }}>
          <div className="flex items-start justify-between" style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '2.5rem' }}>{topic.icon}</span>
            <span 
              className="font-bold rounded-full"
              style={{ 
                fontSize: '0.75rem',
                padding: '4px 12px',
                background: `${topicColor}20`,
                color: topicColor 
              }}
            >
              Peso: {topic.weight}
            </span>
          </div>
          
          <h3 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: '1.125rem', marginBottom: '4px' }}>
            {topic.title}
          </h3>
          <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem', marginBottom: '16px' }}>
            {topic.subtitle}
          </p>
          
          {/* Progress bar */}
          <div style={{ marginBottom: '8px' }}>
            <div className="flex justify-between" style={{ fontSize: '0.75rem', marginBottom: '6px' }}>
              <span className="text-[var(--color-text-muted)]">{doneLessons}/{totalLessons} lezioni</span>
              <span style={{ color: topicColor }} className="font-semibold">{percentage}%</span>
            </div>
            <div className="w-full bg-[var(--color-bg-primary)] rounded-full overflow-hidden" style={{ height: '8px' }}>
              <motion.div
                className="rounded-full"
                style={{ background: topicColor, height: '100%' }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              />
            </div>
          </div>
          
          <div className="flex items-center text-[var(--color-text-muted)] group-hover:text-[var(--color-neon-blue)] transition-colors" style={{ fontSize: '0.875rem', marginTop: '12px', gap: '4px' }}>
            <span>{percentage === 100 ? 'Rivedi' : 'Continua'}</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <motion.div 
      className="glass-card flex items-center"
      style={{ padding: '20px', gap: '16px' }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="flex items-center justify-center rounded-xl"
        style={{ width: '48px', height: '48px', background: `${color}20`, flexShrink: 0 }}
      >
        <Icon size={24} style={{ color }} />
      </div>
      <div>
        <div className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: '1.5rem' }}>{value}</div>
        <div className="text-[var(--color-text-muted)]" style={{ fontSize: '0.75rem' }}>{label}</div>
      </div>
    </motion.div>
  )
}

export default function Dashboard() {
  const { 
    xp, level, levelTitle, streak, completedLessons, 
    completedQuizzes, badges, examAttempts, topicProgress 
  } = useGame()

  const totalLessons = getTotalLessons()
  const completedCount = completedLessons.length
  const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  const bestExam = examAttempts.length > 0
    ? Math.max(...examAttempts.map(a => a.score))
    : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {/* Hero */}
      <motion.div 
        className="text-center"
        style={{ paddingTop: '32px', paddingBottom: '32px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '12px' }}>
          <span className="gradient-text">LinuxQuest</span> 🐧
        </h1>
        <p className="text-[var(--color-text-secondary)]" style={{ fontSize: '1.125rem', maxWidth: '640px', margin: '0 auto' }}>
          Impara Linux giocando e supera l'esame <strong>LPI Linux Essentials</strong>
        </p>
        <div 
          className="bg-[var(--color-bg-card)] border border-[var(--color-border)]"
          style={{ 
            marginTop: '16px', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 20px', 
            borderRadius: '999px' 
          }}
        >
          <span style={{ fontSize: '1.125rem' }}>{levelTitle.split(' ')[0]}</span>
          <span className="font-semibold text-[var(--color-text-primary)]" style={{ fontSize: '0.875rem' }}>{levelTitle.split(' ').slice(1).join(' ')}</span>
          <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.75rem' }}>• Livello {level}</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px' 
      }}>
        <StatCard icon={Zap} label="Punti XP" value={xp} color="var(--color-neon-green)" />
        <StatCard icon={Flame} label="Streak giorni" value={streak} color="var(--color-neon-orange)" />
        <StatCard icon={BookOpen} label="Lezioni completate" value={`${completedCount}/${totalLessons}`} color="var(--color-neon-blue)" />
        <StatCard icon={Trophy} label="Badge ottenuti" value={badges.length} color="var(--color-neon-purple)" />
      </div>

      {/* Overall Progress */}
      <div className="glass-card" style={{ padding: '28px' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
          <h2 className="font-bold flex items-center" style={{ fontSize: '1.125rem', gap: '8px' }}>
            <Target size={20} className="text-[var(--color-neon-blue)]" />
            Progresso Globale
          </h2>
          <span className="font-black gradient-text" style={{ fontSize: '1.5rem' }}>{overallProgress}%</span>
        </div>
        <div className="w-full bg-[var(--color-bg-primary)] rounded-full overflow-hidden" style={{ height: '12px' }}>
          <motion.div
            className="rounded-full bg-gradient-to-r from-[var(--color-neon-blue)] via-[var(--color-neon-purple)] to-[var(--color-neon-pink)]"
            style={{ height: '100%' }}
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px' 
      }}>
        <Link to="/games" className="no-underline">
          <motion.div 
            className="glass-card flex items-center cursor-pointer"
            style={{ padding: '24px', gap: '16px' }}
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="rounded-xl bg-[var(--color-neon-purple)]/20 flex items-center justify-center"
              style={{ width: '48px', height: '48px', flexShrink: 0 }}
            >
              <Gamepad2 size={24} className="text-[var(--color-neon-purple)]" />
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-text-primary)]">🎮 Gioca & Impara</h3>
              <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>Quiz, Memory, Terminal Challenge...</p>
            </div>
          </motion.div>
        </Link>
        
        <Link to="/exam" className="no-underline">
          <motion.div 
            className="glass-card flex items-center cursor-pointer"
            style={{ padding: '24px', gap: '16px' }}
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="rounded-xl bg-[var(--color-neon-pink)]/20 flex items-center justify-center"
              style={{ width: '48px', height: '48px', flexShrink: 0 }}
            >
              <GraduationCap size={24} className="text-[var(--color-neon-pink)]" />
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-text-primary)]">📝 Simulazione Esame</h3>
              <p className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
                {bestExam !== null ? `Miglior punteggio: ${bestExam}/800` : '40 domande • 60 minuti'}
              </p>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Topics Grid */}
      <div>
        <h2 className="font-bold flex items-center" style={{ fontSize: '1.25rem', marginBottom: '24px', gap: '8px' }}>
          <Star size={20} className="text-[var(--color-neon-yellow)]" />
          I 5 Topic dell'Esame
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px' 
        }}>
          {topics.map((topic) => (
            <TopicCard 
              key={topic.id} 
              topic={topic} 
              progress={topicProgress[topic.id]}
              completedLessons={completedLessons}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
