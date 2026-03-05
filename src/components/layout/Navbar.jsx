import { Link, useLocation } from 'react-router-dom'
import { useGame } from '../../context/GameContext.jsx'
import { Flame, Gamepad2, GraduationCap, Home, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { xp, level, levelTitle, xpProgress, streak } = useGame()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/games', label: 'Giochi', icon: Gamepad2 },
    { to: '/exam', label: 'Esame', icon: GraduationCap },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg-secondary)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl">🐧</span>
            <span className="text-xl font-bold gradient-text hidden sm:inline">LinuxQuest</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
                  location.pathname === to
                    ? 'text-[var(--color-neon-blue)] bg-[var(--color-neon-blue)]/10'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>

          {/* XP Bar + Stats */}
          <div className="flex items-center gap-4">
            {/* Streak */}
            {streak > 0 && (
              <div className="flex items-center gap-1 text-[var(--color-neon-orange)]">
                <Flame size={18} />
                <span className="text-sm font-bold">{streak}</span>
              </div>
            )}

            {/* Level & XP */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-[var(--color-text-muted)]">Lv.{level}</div>
                <div className="text-xs font-semibold text-[var(--color-neon-green)]">{xp} XP</div>
              </div>
              <div className="w-24 h-2 bg-[var(--color-xp-bg)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--color-neon-green)] to-[var(--color-neon-blue)] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${xpProgress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[var(--color-text-secondary)]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {links.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg no-underline transition-colors ${
                    location.pathname === to
                      ? 'text-[var(--color-neon-blue)] bg-[var(--color-neon-blue)]/10'
                      : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
