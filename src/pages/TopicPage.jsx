import { useParams, Link } from 'react-router-dom'
import { getTopic } from '../data/topics.js'
import { useGame } from '../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Lock } from 'lucide-react'

export default function TopicPage() {
  const { topicId } = useParams()
  const topic = getTopic(topicId)
  const { completedLessons } = useGame()

  if (!topic) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[var(--color-error)]">Topic non trovato</h2>
        <Link to="/" className="btn-primary mt-4 inline-block no-underline">Torna alla Home</Link>
      </div>
    )
  }

  const colorMap = {
    'neon-blue': 'var(--color-neon-blue)',
    'neon-green': 'var(--color-neon-green)',
    'neon-purple': 'var(--color-neon-purple)',
    'neon-orange': 'var(--color-neon-orange)',
    'neon-pink': 'var(--color-neon-pink)',
  }
  const topicColor = colorMap[topic.color]

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm">Torna alla Dashboard</span>
      </Link>

      {/* Topic Header */}
      <motion.div 
        className="glass-card p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{topic.icon}</span>
          <div>
            <h1 className="text-3xl font-black" style={{ color: topicColor }}>
              Topic {topic.id}: {topic.title}
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-1">{topic.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <span 
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: `${topicColor}20`, color: topicColor }}
          >
            Peso esame: {topic.weight}
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            {topic.lessons.length} lezioni
          </span>
        </div>
      </motion.div>

      {/* Lessons List */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <BookOpen size={20} style={{ color: topicColor }} />
          Lezioni
        </h2>

        {topic.lessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id)
          
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/topic/${topic.id}/lesson/${lesson.id}`}
                className="no-underline"
              >
                <div className={`glass-card p-5 flex items-center gap-4 group ${isCompleted ? 'border-[var(--color-success)]/30' : ''}`}>
                  {/* Number / Check */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                    style={{
                      background: isCompleted ? 'var(--color-success)' : `${topicColor}20`,
                      color: isCompleted ? 'white' : topicColor,
                    }}
                  >
                    {isCompleted ? <CheckCircle size={20} /> : index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--color-text-primary)] truncate">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] truncate">
                      {lesson.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight 
                    size={20} 
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-neon-blue)] transition-colors shrink-0" 
                  />
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
