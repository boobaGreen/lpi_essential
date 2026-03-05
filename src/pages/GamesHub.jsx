import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, ArrowLeft, Lock, Star, Trophy, Zap } from 'lucide-react'
import MemoryGame from '../components/games/MemoryGame.jsx'
import TerminalChallenge from '../components/games/TerminalChallenge.jsx'
import DragDropGame from '../components/games/DragDropGame.jsx'
import FillGapGame from '../components/games/FillGapGame.jsx'
import TrueFalseGame from '../components/games/TrueFalseGame.jsx'
import QuizGame from '../components/games/QuizGame.jsx'
import { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function GamesHub() {
  const { courseId } = useParams()
  const [activeGame, setActiveGame] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [showLevelPicker, setShowLevelPicker] = useState(null)
  const { completedGames = [] } = useGame()
  const { t } = useLanguage()

  const levels = [
    { id: 1, name: t('levelBeginner'), icon: '🌱', color: '#22c55e', label: t('difficultyEasy'), stars: 1 },
    { id: 2, name: t('levelIntermediate'), icon: '⚔️', color: '#f59e0b', label: t('difficultyMedium'), stars: 2 },
    { id: 3, name: t('levelExpert'), icon: '🏆', color: '#ef4444', label: t('difficultyHard'), stars: 3 },
  ]

  const gameComponents = {
    quiz: { component: QuizGame, title: `🧠 ${t('quizTitle')}`, color: 'var(--color-neon-blue)' },
    memory: { component: MemoryGame, title: `🃏 ${t('memoryTitle')}`, color: 'var(--color-neon-green)' },
    terminal: { component: TerminalChallenge, title: `💻 ${t('terminalTitle')}`, color: 'var(--color-neon-purple)' },
    dragdrop: { component: DragDropGame, title: `🧩 ${t('dragdropTitle')}`, color: 'var(--color-neon-orange)' },
    fillgap: { component: FillGapGame, title: `📝 ${t('fillgapTitle')}`, color: 'var(--color-neon-pink)' },
    truefalse: { component: TrueFalseGame, title: `⚡ ${t('truefalseTitle')}`, color: 'var(--color-neon-yellow)' },
  }



  // Check if a level is unlocked: level 1 always, level 2 needs level 1 complete, level 3 needs level 2 complete
  const isLevelUnlocked = (gameId, levelId) => {
    if (levelId === 1) return true
    const prevKey = `${gameId}-lv${levelId - 1}`
    return completedGames.includes(prevKey)
  }

  const getHighestCompleted = (gameId) => {
    for (let i = 3; i >= 1; i--) {
      if (completedGames.includes(`${gameId}-lv${i}`)) return i
    }
    return 0
  }

  const games = [
    {
      id: 'quiz',
      icon: '🧠',
      title: t('quizTitle'),
      description: t('quizDesc'),
      color: 'var(--color-neon-blue)',
    },
    { id: 'memory', icon: '🃏', title: t('memoryTitle'), description: t('memoryDesc'), color: 'var(--color-neon-green)' },
    { id: 'terminal', icon: '💻', title: t('terminalTitle'), description: t('terminalDesc'), color: 'var(--color-neon-purple)' },
    { id: 'dragdrop', icon: '🧩', title: t('dragdropTitle'), description: t('dragdropDesc'), color: 'var(--color-neon-orange)' },
    { id: 'fillgap', icon: '📝', title: t('fillgapTitle'), description: t('fillgapDesc'), color: 'var(--color-neon-pink)' },
    { id: 'truefalse', icon: '⚡', title: t('truefalseTitle'), description: t('truefalseDesc'), color: 'var(--color-neon-yellow)' },
  ]

  // Active game view with selected level
  if (activeGame && selectedLevel && gameComponents[activeGame]) {
    const GameComp = gameComponents[activeGame].component
    const gameInfo = gameComponents[activeGame]
    const level = levels[selectedLevel - 1]
    return (
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <button
          onClick={() => { setActiveGame(null); setSelectedLevel(null); setShowLevelPicker(null) }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={18} /> {t('gamesHubTitle')}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <h2 className="font-black" style={{ fontSize: '1.5rem' }}>
            <span style={{ color: gameInfo.color }}>{gameInfo.title}</span>
          </h2>
          <span className="font-bold" style={{ fontSize: '0.7rem', padding: '3px 10px', borderRadius: '9999px', background: `${level.color}20`, color: level.color }}>
            {level.icon} {level.name}
          </span>
        </div>
        <GameComp level={selectedLevel} onComplete={() => { setActiveGame(null); setSelectedLevel(null); setShowLevelPicker(null) }} />
      </div>
    )
  }

  // Level picker modal
  if (showLevelPicker) {
    const game = games.find(g => g.id === showLevelPicker)
    const highest = getHighestCompleted(showLevelPicker)
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <button
          onClick={() => setShowLevelPicker(null)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={18} /> {t('gamesHubTitle')}
        </button>

        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '3.5rem' }}>{game.icon}</span>
          <h2 className="font-black" style={{ fontSize: '1.75rem', color: game.color, marginTop: '8px' }}>{game.title}</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: '6px', fontSize: '0.9rem' }}>{game.description}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {levels.map(level => {
            const unlocked = isLevelUnlocked(showLevelPicker, level.id)
            const completed = completedGames.includes(`${showLevelPicker}-lv${level.id}`)

            return (
              <motion.button
                key={level.id}
                onClick={() => {
                  if (unlocked) {
                    setActiveGame(showLevelPicker)
                    setSelectedLevel(level.id)
                  }
                }}
                className="glass-card"
                style={{
                  padding: '22px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: unlocked ? 'pointer' : 'not-allowed',
                  opacity: unlocked ? 1 : 0.45,
                  borderColor: completed ? level.color : undefined,
                  transition: 'border-color 0.2s',
                }}
                whileHover={unlocked ? { scale: 1.02 } : {}}
                whileTap={unlocked ? { scale: 0.98 } : {}}
                onMouseEnter={e => { if (unlocked) e.currentTarget.style.borderColor = level.color }}
                onMouseLeave={e => { if (!completed) e.currentTarget.style.borderColor = '' }}
              >
                <span style={{ fontSize: '2rem' }}>{unlocked ? level.icon : '🔒'}</span>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div className="font-bold" style={{ fontSize: '1.05rem', color: unlocked ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}>
                    {t('level')} {level.id}: {level.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    {level.id === 1 && t('level1Desc')}
                    {level.id === 2 && t('level2Desc')}
                    {level.id === 3 && t('level3Desc')}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} size={16} style={{
                      color: i < level.id ? level.color : 'var(--color-text-muted)',
                      fill: (completed && i < level.id) ? level.color : 'transparent',
                    }} />
                  ))}
                </div>
                {completed && <Trophy size={18} style={{ color: level.color }} />}
                {!unlocked && <Lock size={18} style={{ color: 'var(--color-text-muted)' }} />}
              </motion.button>
            )
          })}
        </div>

        {highest > 0 && (
          <div className="glass-card" style={{ padding: '16px 20px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              {t('maxLevelCompleted')} <strong style={{ color: levels[highest - 1].color }}>{levels[highest - 1].name} {levels[highest - 1].icon}</strong>
            </span>
          </div>
        )}
      </div>
    )
  }

  // Hub grid view
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Link to={`/course/${courseId}`} className="no-underline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
        <ArrowLeft size={18} />
        <span>{t('navDashboard')}</span>
      </Link>

      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <h1 className="font-black" style={{ fontSize: '2rem' }}>
          <Gamepad2 className="inline" size={32} style={{ marginRight: '8px', color: 'var(--color-neon-purple)' }} />
          <span className="gradient-text">{t('gamesHubTitle')}</span>
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px' }}>{t('gamesHubDesc')}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {games.map((game, i) => {
          const highest = getHighestCompleted(game.id)
          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="glass-card"
                style={{ padding: '24px', cursor: 'pointer', transition: 'border-color 0.2s', height: '100%' }}
                onClick={() => setShowLevelPicker(game.id)}
                onMouseEnter={e => e.currentTarget.style.borderColor = game.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2.5rem' }}>{game.icon}</span>
                  {/* Level stars */}
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[1, 2, 3].map(lv => (
                      <Star key={lv} size={14} style={{
                        color: highest >= lv ? levels[lv - 1].color : '#555',
                        fill: highest >= lv ? levels[lv - 1].color : 'transparent',
                      }} />
                    ))}
                  </div>
                </div>
                <h3 className="font-bold" style={{ marginTop: '12px', fontSize: '1.1rem', color: game.color }}>{game.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '8px', fontSize: '0.875rem' }}>{game.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <span className="font-bold" style={{ fontSize: '0.75rem', color: game.color }}>{t('chooseLevel')}</span>
                  {highest > 0 && (
                    <span style={{ fontSize: '0.7rem', color: levels[highest - 1].color, fontWeight: 600 }}>{levels[highest - 1].icon} {t('level')}.{highest}</span>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
