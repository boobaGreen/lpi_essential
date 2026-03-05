import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, GraduationCap, Clock, AlertTriangle } from 'lucide-react'

export default function ExamPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm">Dashboard</span>
      </Link>

      <motion.div 
        className="text-center py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <GraduationCap size={64} className="mx-auto mb-4 text-[var(--color-neon-pink)]" />
        <h1 className="text-3xl font-black gradient-text">Simulazione Esame</h1>
        <p className="text-[var(--color-text-secondary)] mt-3 text-lg">
          LPI Linux Essentials (010-160)
        </p>
      </motion.div>

      <div className="glass-card p-6 space-y-4">
        <h2 className="text-xl font-bold">📋 Regole dell'Esame</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[var(--color-bg-primary)] rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-[var(--color-neon-blue)]">40</div>
            <div className="text-xs text-[var(--color-text-muted)]">Domande</div>
          </div>
          <div className="bg-[var(--color-bg-primary)] rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-[var(--color-neon-orange)]">60</div>
            <div className="text-xs text-[var(--color-text-muted)]">Minuti</div>
          </div>
          <div className="bg-[var(--color-bg-primary)] rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-[var(--color-neon-green)]">500</div>
            <div className="text-xs text-[var(--color-text-muted)]">Punteggio minimo / 800</div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 border-[var(--color-warning)]/30">
        <div className="flex items-start gap-3">
          <AlertTriangle size={24} className="text-[var(--color-warning)] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-[var(--color-warning)]">Simulazione in arrivo!</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              La simulazione d'esame completa con 40 domande randomizzate, timer di 60 minuti e analisi dei risultati per topic sarà disponibile nella prossima versione.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-2">
              Nel frattempo, completa tutte le lezioni e i quiz per prepararti al meglio! 💪
            </p>
          </div>
        </div>
      </div>

      <Link to="/" className="btn-primary w-full text-center block no-underline">
        ← Torna a studiare
      </Link>
    </div>
  )
}
