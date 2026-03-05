import { Link, useLocation, useParams } from 'react-router-dom'
import { useGame } from '../../context/GameContext.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useCourse } from '../../context/CourseContext.jsx'
import LanguageSelector from '../ui/LanguageSelector.jsx'
import { Flame, Gamepad2, GraduationCap, Home, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])
  return matches
}

export default function Navbar() {
  const { xp, level, levelTitle, xpProgress, streak } = useGame()
  const { t } = useLanguage()
  const { currentCourse } = useCourse()
  const location = useLocation()
  const { courseId } = useParams()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  // Build links dynamically: if we have a courseId in the URL, use it; otherwise link to home only
  const activeCourseId = courseId || null
  const links = activeCourseId ? [
    { to: `/course/${activeCourseId}`, label: t('navHome'), icon: Home },
    { to: `/course/${activeCourseId}/games`, label: t('navGames'), icon: Gamepad2 },
    { to: `/course/${activeCourseId}/exam`, label: t('navExam'), icon: GraduationCap },
  ] : [
    { to: '/', label: t('navHome'), icon: Home },
  ]

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop) setMobileOpen(false)
  }, [isDesktop])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(13, 17, 23, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        overflowX: 'clip',           // previene scroll orizzontale senza tagliare il dropdown
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px',         // ← ridotto da 24 a 16px su tutti, ma funzionale
          width: '100%',
          boxSizing: 'border-box',   // ← il padding non sfora il 100%
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
            gap: '8px',              // ← gap minimo tra logo e destra
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            className="no-underline"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>🐧</span>
            <span className="font-bold gradient-text" style={{ fontSize: '1.15rem', whiteSpace: 'nowrap' }}>LinuxQuest</span>
            {currentCourse && activeCourseId && (
              <span style={{
                fontSize: '0.6rem', fontWeight: 700, padding: '2px 7px', borderRadius: '99px',
                background: `${currentCourse.color}20`,
                border: `1px solid ${currentCourse.color}50`,
                color: currentCourse.color,
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                {currentCourse.code}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {links.map(({ to, label, icon: Icon }) => {
                const active = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    className="no-underline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: active ? 'var(--color-neon-blue)' : 'var(--color-text-secondary)',
                      background: active ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { 
                      if (!active) e.currentTarget.style.color = 'var(--color-text-primary)'
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={e => { 
                      if (!active) e.currentTarget.style.color = 'var(--color-text-secondary)'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>
                )
              })}
            </div>
          )}

          {/* XP Bar + Stats + Lang */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isDesktop ? '16px' : '8px', flexShrink: 0 }}>
            <LanguageSelector />

            {/* Streak — desktop only */}
            {isDesktop && streak > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-neon-orange)' }}>
                <Flame size={18} />
                <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{streak}</span>
              </div>
            )}

            {/* Level & XP — desktop only */}
            {isDesktop && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Lv.{level}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-neon-green)' }}>{xp} XP</div>
                </div>
                <div style={{ width: '100px', height: '7px', background: 'var(--color-xp-bg)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: 'linear-gradient(to right, var(--color-neon-green), var(--color-neon-blue))',
                      borderRadius: '9999px',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="animate-shimmer" style={{ width: '100%', height: '100%' }} />
                  </motion.div>
                </div>
              </div>
            )}

            {/* Mobile: compact XP pill + streak */}
            {!isDesktop && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {streak > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--color-neon-orange)', fontSize: '0.8rem', fontWeight: 700 }}>
                    <Flame size={15} />
                    <span>{streak}</span>
                  </div>
                )}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '3px 8px', borderRadius: '9999px',
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-neon-green)' }}>Lv.{level}</span>
                  <div style={{ width: '40px', height: '4px', background: 'var(--color-xp-bg)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <motion.div
                      style={{
                        height: '100%',
                        background: 'linear-gradient(to right, var(--color-neon-green), var(--color-neon-blue))',
                        borderRadius: '9999px',
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${xpProgress}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            {!isDesktop && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  padding: '8px',
                  color: 'var(--color-text-secondary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && !isDesktop && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              borderTop: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {links.map(({ to, label, icon: Icon }) => {
                const active = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className="no-underline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      color: active ? 'var(--color-neon-blue)' : 'var(--color-text-secondary)',
                      background: active ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                    }}
                  >
                    <Icon size={20} />
                    {label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
