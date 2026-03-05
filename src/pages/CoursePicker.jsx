import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useCourse } from '../context/CourseContext.jsx'
import { useGame } from '../context/GameContext.jsx'
import { COURSES_LIST } from '../data/courses.js'
import { Lock, ChevronRight, Trophy, BookOpen, Zap } from 'lucide-react'

function CourseCard({ course, index, onSelect }) {
  const { allProgress } = useGame()
  const cp = allProgress?.[course.id]
  const done = cp?.completedLessons?.length ?? 0
  const exams = cp?.examAttempts ?? []
  const best = exams.length > 0 ? Math.max(...exams.map(a => a.score)) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.4 }}
      whileHover={course.available ? { y: -4, boxShadow: `0 12px 40px ${course.color}30` } : {}}
      whileTap={course.available ? { scale: 0.98 } : {}}
      onClick={() => course.available && onSelect(course.id)}
      style={{
        background: course.available
          ? `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, ${course.color}12 100%)`
          : 'rgba(255,255,255,0.02)',
        border: `2px solid ${course.available ? course.color + '50' : 'var(--color-border)'}`,
        borderRadius: '18px',
        padding: '28px',
        cursor: course.available ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Top accent */}
      {course.available && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: `linear-gradient(90deg, ${course.color}, ${course.color}60, transparent)`,
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* Icon */}
        <div style={{
          width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.8rem',
          background: course.available ? `${course.color}18` : 'rgba(255,255,255,0.04)',
          border: `2px solid ${course.available ? course.color + '40' : 'var(--color-border)'}`,
          filter: course.available ? 'none' : 'grayscale(1)',
        }}>
          {course.icon}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <span style={{
              fontSize: '0.68rem', fontWeight: 800, padding: '2px 10px', borderRadius: '99px',
              background: course.available ? `${course.color}25` : 'rgba(255,255,255,0.06)',
              border: `1px solid ${course.available ? course.color + '60' : 'var(--color-border)'}`,
              color: course.available ? course.color : 'var(--color-text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              {course.code}
            </span>
            {!course.available && (
              <span style={{
                fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: '99px',
                background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)',
                color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em',
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                <Lock size={10} /> Coming Soon
              </span>
            )}
          </div>

          <h2 style={{
            fontWeight: 800, fontSize: '1.1rem', margin: '2px 0 6px',
            color: course.available ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
          }}>
            {course.name}
          </h2>

          <p style={{
            fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.5,
            margin: '0 0 14px',
          }}>
            {course.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {course.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.65rem', padding: '2px 8px', borderRadius: '6px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)', fontWeight: 600,
              }}>{tag}</span>
            ))}
          </div>

          {/* Progress stats — only if started */}
          {course.available && done > 0 && (
            <div style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: course.color }}>
                <BookOpen size={13} /> <span>{done} lezioni</span>
              </div>
              {best !== null && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#f59e0b' }}>
                  <Trophy size={13} /> <span>Best: {best}%</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Arrow or lock */}
        <div style={{ flexShrink: 0, alignSelf: 'center' }}>
          {course.available
            ? <ChevronRight size={22} style={{ color: course.color }} />
            : <Lock size={18} style={{ color: 'var(--color-text-muted)' }} />
          }
        </div>
      </div>
    </motion.div>
  )
}

export default function CoursePicker() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { setCourse } = useCourse()
  const { xp, level, levelTitle, streak } = useGame()

  const handleSelect = (courseId) => {
    setCourse(courseId)
    navigate(`/course/${courseId}`)
  }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', paddingTop: '32px' }}
      >
        <div style={{ fontSize: '3.5rem', marginBottom: '8px' }}>🐧</div>
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', marginBottom: '8px' }}>
          <span className="gradient-text">LinuxQuest</span>
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
          {t('coursePickerSubtitle') || 'Scegli la certificazione che vuoi preparare'}
        </p>

        {/* Global stats pill */}
        {xp > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '16px',
              marginTop: '16px', padding: '10px 22px', borderRadius: '99px',
              background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: 'var(--color-neon-green)' }}>
              <Zap size={14} /> <strong>{xp}</strong> XP
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
              {levelTitle} • Lv.{level}
            </div>
            {streak > 0 && (
              <div style={{ fontSize: '0.82rem', color: 'var(--color-neon-orange)' }}>
                🔥 {streak}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Course list */}
      <div>
        <h2 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {t('availableCourses') || 'Certificazioni disponibili'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {COURSES_LIST.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </div>
  )
}
