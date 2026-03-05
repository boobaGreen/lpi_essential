import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTopics } from '../hooks/useTopics.js'
import { useGame } from '../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight } from 'lucide-react'

export default function TopicPage() {
  const { t } = useLanguage()
  const { topicId } = useParams()
  const { getTopic } = useTopics()
  const topic = getTopic(topicId)
  const { completedLessons } = useGame()

  if (!topic) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h2 className="text-2xl font-bold text-[var(--color-error)]">{t('topicNotFound')}</h2>
        <Link to="/" className="btn-primary no-underline" style={{ display: 'inline-block', marginTop: '16px' }}>{t('backToHome')}</Link>
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
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Back */}
      <Link
        to="/"
        className="no-underline"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}
      >
        <ArrowLeft size={18} />
        <span>{t('backToDashboard')}</span>
      </Link>

      {/* Topic Header */}
      <motion.div
        className="glass-card"
        style={{ padding: '32px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <span style={{ fontSize: '3rem' }}>{topic.icon}</span>
          <div style={{ flex: 1 }}>
            <h1 className="font-black" style={{ fontSize: '1.75rem', color: topicColor }}>
              {t('topic') || 'Topic'} {topic.id}: {topic.title}
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '4px', fontSize: '0.95rem' }}>{topic.description}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
          <span
            className="font-bold"
            style={{
              fontSize: '0.75rem',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: `${topicColor}20`,
              color: topicColor,
            }}
          >
            {t('examWeight')} {topic.weight}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {topic.lessons.length} {t('lessonsCount')}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-neon-green)', fontWeight: 600 }}>
            {topic.lessons.filter(l => completedLessons.includes(l.id)).length}/{topic.lessons.length} {t('lessonsCompleted')}
          </span>
        </div>
      </motion.div>

      {/* Lessons List */}
      <div>
        <h2 className="font-bold" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <BookOpen size={20} style={{ color: topicColor }} />
          {t('lessons')}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                  style={{ display: 'block' }}
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      borderColor: isCompleted ? 'rgba(34, 197, 94, 0.3)' : undefined,
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = topicColor}
                    onMouseLeave={e => e.currentTarget.style.borderColor = isCompleted ? 'rgba(34, 197, 94, 0.3)' : ''}
                  >
                    {/* Number / Check */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        flexShrink: 0,
                        background: isCompleted ? 'var(--color-success)' : `${topicColor}20`,
                        color: isCompleted ? 'white' : topicColor,
                      }}
                    >
                      {isCompleted ? <CheckCircle size={20} /> : index + 1}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 className="font-semibold" style={{ color: 'var(--color-text-primary)', fontSize: '1rem' }}>
                        {lesson.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        {lesson.subtitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={20}
                      style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
