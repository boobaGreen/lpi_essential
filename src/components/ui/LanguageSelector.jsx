import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Check } from 'lucide-react'

export default function LanguageSelector() {
  const { currentLang, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 })

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Calcola la posizione del dropdown in base alla posizione del bottone
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      })
    }
  }, [isOpen])

  const activeLang = languages.find(l => l.code === currentLang) || languages[0]

  // Chiude il dropdown cliccando fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '4px' : '8px',
          background: 'transparent',
          border: '1px solid var(--color-border)',
          padding: isMobile ? '5px 8px' : '6px 12px',
          borderRadius: '8px',
          color: 'var(--color-text-primary)',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: 600,
          transition: 'border-color 0.2s',
          flexShrink: 0,
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-neon-blue)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
      >
        {!isMobile && <Globe size={16} />}
        <span style={{ fontSize: isMobile ? '1.1rem' : '1.2rem' }}>{activeLang.flag}</span>
        {!isMobile && <ChevronDown size={14} style={{ color: 'var(--color-text-muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />}
      </button>

      {/* Portal: overlay blur + dropdown menu, entrambi nel body per stare sopra tutto */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay sfocato (solo mobile) */}
              {isMobile && (
                <motion.div
                  key="lang-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    zIndex: 9998,
                  }}
                />
              )}

              {/* Dropdown menu — sopra l'overlay */}
              <motion.div
                key="lang-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="glass-card glass-card--dropdown"
                style={{
                  position: 'fixed',
                  top: dropdownPos.top,
                  right: dropdownPos.right,
                  minWidth: '200px',
                  padding: '8px',
                  zIndex: 9999,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                }}
              >
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: '100%',
                      padding: '10px 12px',
                      background: currentLang === lang.code ? 'rgba(255,255,255,0.05)' : 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      color: currentLang === lang.code ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = currentLang === lang.code ? 'rgba(255,255,255,0.05)' : 'transparent'}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
                    <span style={{ flex: 1, fontWeight: currentLang === lang.code ? 700 : 500 }}>{lang.name}</span>
                    {currentLang === lang.code && <Check size={16} style={{ color: 'var(--color-neon-green)' }} />}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}
