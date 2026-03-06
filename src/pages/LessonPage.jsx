import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTopics } from '../hooks/useTopics.js'
import { useGame } from '../context/GameContext.jsx'
import ExtendedContent from '../components/lesson/ExtendedContent.jsx'
import Quiz from '../components/games/Quiz.jsx'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, BookOpen, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

function MarkdownRenderer({ content, topicColor }) {
  if (!content) return null

  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'var(--color-text-primary)' }}>{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '2px 4px', 
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '0.9em'
        }}>{part.slice(1, -1)}</code>
      }
      return part
    })
  }

  const blocks = content.split(/\n\n+/)

  return (
    <div className="markdown-content" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        if (trimmed.startsWith('### ')) {
          return <h3 key={i} style={{ color: topicColor, marginTop: '24px', marginBottom: '12px', fontSize: '1.2rem', fontWeight: 700 }}>{trimmed.replace('### ', '')}</h3>
        }
        if (trimmed.startsWith('## ')) {
          return <h2 key={i} style={{ color: topicColor, marginTop: '28px', marginBottom: '16px', fontSize: '1.4rem', fontWeight: 800 }}>{trimmed.replace('## ', '')}</h2>
        }

        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter(l => l.trim()).map(line => line.replace(/^[-*]\s+/, ''))
          return (
            <ul key={i} style={{ paddingLeft: '20px', margin: '14px 0', listStyleType: 'disc' }}>
              {items.map((item, j) => (
                <li key={j} style={{ marginBottom: '8px' }}>
                  {renderFormattedText(item)}
                </li>
              ))}
            </ul>
          )
        }

        if (trimmed.startsWith('```')) {
          const lines = trimmed.split('\n')
          const code = lines.slice(1, lines[lines.length - 1].startsWith('```') ? -1 : undefined).join('\n')
          return (
            <pre key={i} style={{ 
              background: '#0d1117', 
              padding: '16px', 
              borderRadius: '10px', 
              overflowX: 'auto', 
              border: '1px solid var(--color-border)',
              margin: '18px 0',
              fontFamily: "'Fira Code', 'Cascadia Code', monospace",
              fontSize: '0.85rem'
            }}>
              <code>{code}</code>
            </pre>
          )
        }

        return <p key={i} style={{ marginBottom: '16px' }}>{renderFormattedText(trimmed)}</p>
      })}
    </div>
  )
}

function ComicStrip({ comic }) {
  if (!comic || !comic.title) return null
  return (
    <div className="glass-card" style={{ padding: '28px', marginBottom: '24px' }}>
      <h3 className="font-bold" style={{ fontSize: '1.15rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sparkles className="text-[var(--color-neon-yellow)]" size={20} />
        {comic.title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
        {comic.panels.map((panel, i) => (
          <motion.div
            key={i}
            style={{
              background: 'var(--color-bg-primary)',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid var(--color-border)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{panel.emoji}</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{panel.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function KeyPoints({ points, topicColor }) {
  if (!points || !Array.isArray(points)) return null
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="glass-card"
          style={{ padding: '22px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.15 }}
        >
          <h4 className="font-bold" style={{ fontSize: '0.875rem', marginBottom: '14px', color: topicColor }}>{point.title}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {point.items.map((item, j) => (
              <li key={j} style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--color-neon-green)', marginTop: '2px' }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

function TerminalDemo({ terminal, t }) {
  if (!terminal || !terminal.prompt) return null
  return (
    <div className="terminal-box" style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid #30363d' }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
        <span style={{ fontSize: '0.75rem', color: '#8b949e', marginLeft: '8px' }}>{t('terminalLabel')}</span>
      </div>
      <div className="prompt">{terminal.prompt}</div>
      <div className="output" style={{ whiteSpace: 'pre-line', marginTop: '6px' }}>{terminal.output}</div>
    </div>
  )
}

export default function LessonPage() {
  const { t } = useLanguage()
  const { topicId, lessonId, courseId } = useParams()
  const { getTopic, getLesson, lessonContent, quizzesByTopic, extendedContent } = useTopics()
  const topic = getTopic(topicId)
  const lesson = getLesson(topicId, lessonId)
  const { completedLessons, completeLesson, addXP, earnBadge, completedQuizzes } = useGame()
  const [showQuiz, setShowQuiz] = useState(false)

  // Reset quiz view when navigating between lessons
  useEffect(() => {
    setShowQuiz(false)
  }, [lessonId])
  
  const content = lessonContent[lessonId]
  const isCompleted = completedLessons.includes(lessonId)
  const quizId = `quiz-${lessonId}`
  const quizDone = completedQuizzes.includes(quizId)

  const topicQuizzes = quizzesByTopic[topicId] || []
  const lessonQuizzes = topicQuizzes.filter(q => q.lessonId === lessonId)

  const colorMap = {
    'neon-blue': 'var(--color-neon-blue)',
    'neon-green': 'var(--color-neon-green)',
    'neon-purple': 'var(--color-neon-purple)',
    'neon-orange': 'var(--color-neon-orange)',
    'neon-pink': 'var(--color-neon-pink)',
  }
  const topicColor = topic ? colorMap[topic.color] : 'var(--color-neon-blue)'

  if (!topic || !lesson) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h2 className="text-2xl font-bold text-[var(--color-error)]">{t('lessonNotFound')}</h2>
        <Link to="/" className="btn-primary no-underline" style={{ display: 'inline-block', marginTop: '16px' }}>{t('backToHome')}</Link>
      </div>
    )
  }

  const handleCompleteLesson = () => {
    if (!isCompleted) {
      completeLesson(lessonId)
      addXP(20)
      if (completedLessons.length === 0) {
        earnBadge('first-lesson')
      }
    }
  }

  const lessonIndex = topic.lessons.findIndex(l => l.id === lessonId)
  const prev = topic.lessons[lessonIndex - 1]
  const next = topic.lessons[lessonIndex + 1]

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Back */}
      <Link
        to={`/course/${courseId}/topic/${topicId}`}
        className="no-underline"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}
      >
        <ArrowLeft size={18} />
        <span>{t('backToTopic').replace('{{topic}}', topic.title)}</span>
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '2rem' }}>{topic.icon}</span>
          <span
            className="font-bold"
            style={{
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '9999px',
              background: `${topicColor}20`,
              color: topicColor,
            }}
          >
            {t('topic') || 'Topic'} {topicId}
          </span>
          {isCompleted && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--color-success)' }}>
              <CheckCircle size={14} /> {t('completedBadge')}
            </span>
          )}
        </div>
        <h1 className="font-black" style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)' }}>
          {lesson.title}
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '6px' }}>{lesson.subtitle}</p>
      </motion.div>

      {/* Content */}
      <div className="lesson-content">
        {typeof content === 'string' ? (
          <div className="glass-card" style={{ padding: '32px' }}>
            <MarkdownRenderer content={content} topicColor={topicColor} />
          </div>
        ) : content ? (
          <div>
            <ComicStrip comic={content.comic} />
            <KeyPoints points={content.keyPoints} topicColor={topicColor} />
            <TerminalDemo terminal={content.terminal} t={t} />
            {content.content && typeof content.content === 'string' && (
              <div className="glass-card" style={{ padding: '32px', marginTop: '24px' }}>
                <MarkdownRenderer content={content.content} topicColor={topicColor} />
              </div>
            )}
          </div>
        ) : (
          <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
            <BookOpen size={48} style={{ margin: '0 auto 16px', color: 'var(--color-text-muted)' }} />
            <h3 className="font-bold" style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{t('contentArriving')}</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{t('contentArrivingDesc')}</p>
          </div>
        )}
      </div>

      {/* Extended Content */}
      {extendedContent[lessonId] && (
        <ExtendedContent data={extendedContent[lessonId]} topicColor={topicColor} t={t} />
      )}

      {/* Quiz Section */}
      {lessonQuizzes.length > 0 && (
        <div>
          {!showQuiz ? (
            <motion.button
              className="btn-primary"
              onClick={() => setShowQuiz(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', textAlign: 'center' }}
            >
              🎯 {quizDone ? t('redoQuiz') : t('startQuiz')} ({lessonQuizzes.length} {t('questionsCount')})
            </motion.button>
          ) : (
            <Quiz
              key={quizId}
              questions={lessonQuizzes}
              quizId={quizId}
              topicColor={topicColor}
              onComplete={() => setShowQuiz(false)}
            />
          )}
        </div>
      )}

      {/* Complete Button */}
      {!isCompleted && (
        <motion.button
          className="btn-secondary"
          onClick={handleCompleteLesson}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ width: '100%' }}
        >
          ✅ {t('markCompleted')} (+20 XP)
        </motion.button>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
        {prev ? (
          <Link to={`/course/${courseId}/topic/${topicId}/lesson/${prev.id}`} className="btn-secondary no-underline" style={{ fontSize: '0.875rem' }}>
            ← {prev.title}
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/course/${courseId}/topic/${topicId}/lesson/${next.id}`} className="btn-primary no-underline" style={{ fontSize: '0.875rem' }}>
            {next.title} →
          </Link>
        ) : (
          <Link to={`/course/${courseId}/topic/${topicId}`} className="btn-primary no-underline" style={{ fontSize: '0.875rem' }}>
            {t('endTopic')}
          </Link>
        )}
      </div>
    </div>
  )
}
