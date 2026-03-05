import { useParams, Link } from 'react-router-dom'
import { getTopic, getLesson } from '../data/topics.js'
import { useGame } from '../context/GameContext.jsx'
import { quizzesByTopic } from '../data/quizzes/index.js'
import Quiz from '../components/games/Quiz.jsx'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, BookOpen, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const lessonContent = {
  '1-1': {
    comic: {
      title: 'La Nascita di Linux 🐧',
      panels: [
        { emoji: '🏛️', text: '1969 — Nei laboratori AT&T nasce Unix, un sistema operativo rivoluzionario...' },
        { emoji: '👨‍💻', text: '1991 — Un giovane studente finlandese, Linus Torvalds, inizia a sviluppare un kernel libero...' },
        { emoji: '🐧', text: '"Sto facendo un sistema operativo libero, solo un hobby..." — Il post che cambiò tutto!' },
        { emoji: '🌍', text: 'Oggi Linux è ovunque: server, cloud, smartphone (Android), IoT, supercomputer!' },
      ]
    },
    keyPoints: [
      { title: 'Famiglie di Distribuzioni', items: ['Debian → Ubuntu, Mint', 'Red Hat → RHEL, Fedora, CentOS', 'SUSE → SLES, openSUSE'] },
      { title: 'Gestori Pacchetti', items: ['Debian: dpkg, apt (.deb)', 'Red Hat: rpm, yum, dnf (.rpm)', 'SUSE: rpm, zypper (.rpm)'] },
      { title: 'Sistemi Embedded', items: ['Android = kernel Linux modificato', 'Raspberry Pi + Raspbian', 'Linux nel 90% del cloud pubblico'] },
    ],
    terminal: { prompt: '$ cat /etc/os-release', output: 'NAME="Ubuntu"\nVERSION="22.04 LTS"\nID=ubuntu\nID_LIKE=debian' },
  },
  '1-2': {
    comic: {
      title: 'Il Mondo delle App Open Source 📦',
      panels: [
        { emoji: '📝', text: 'LibreOffice: Writer, Calc, Impress — la suite libera che sfida Microsoft Office!' },
        { emoji: '🌐', text: 'Firefox e Chromium: browser web liberi e potenti.' },
        { emoji: '🖥️', text: 'Apache e Nginx: i server web che fanno girare Internet!' },
        { emoji: '💻', text: 'C, Java, Python, Bash: i linguaggi che fanno vivere Linux.' },
      ]
    },
    keyPoints: [
      { title: 'App Desktop', items: ['LibreOffice, GIMP, Blender, VLC, Audacity'] },
      { title: 'App Server', items: ['Apache, Nginx (web)', 'MariaDB, PostgreSQL (database)', 'Samba, NFS (file sharing)'] },
      { title: 'Linguaggi', items: ['Compilato: C, Java', 'Interpretato: Python, Perl, JavaScript, Bash'] },
    ],
    terminal: { prompt: '$ apt search libreoffice', output: 'libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor' },
  },
  '1-3': {
    comic: {
      title: 'Le 4 Libertà del Software 🔓',
      panels: [
        { emoji: '0️⃣', text: 'Libertà 0: Usare il programma per qualsiasi scopo!' },
        { emoji: '1️⃣', text: 'Libertà 1: Studiare come funziona e modificarlo!' },
        { emoji: '2️⃣', text: 'Libertà 2: Ridistribuire copie ad altri!' },
        { emoji: '3️⃣', text: 'Libertà 3: Distribuire le tue versioni modificate!' },
      ]
    },
    keyPoints: [
      { title: 'Licenze Copyleft', items: ['GPL: codice derivato deve restare GPL', 'LGPL: permette linking con proprietario', 'AGPL: estende GPL al SaaS'] },
      { title: 'Licenze Permissive', items: ['MIT: molto breve e permissiva', 'BSD: simile a MIT', 'Apache 2.0: concessione brevetti'] },
      { title: 'Business Open Source', items: ['Supporto (Red Hat)', 'Doppia licenza', 'SaaS, Certificazioni'] },
    ],
    terminal: { prompt: '$ head -5 /usr/share/common-licenses/GPL-3', output: 'GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation' },
  },
  '1-4': {
    comic: {
      title: 'Privacy e Sicurezza Digitale 🔒',
      panels: [
        { emoji: '🖥️', text: 'GNOME o KDE? Scegli il tuo Desktop Environment!' },
        { emoji: '🍪', text: 'Attenzione ai cookie di terze parti: ti tracciano ovunque!' },
        { emoji: '🔒', text: 'HTTPS = HTTP + TLS. Cerca il lucchetto nel browser!' },
        { emoji: '🔑', text: 'GnuPG: crittografia asimmetrica. Chiave pubblica per crittare, privata per decrittare.' },
      ]
    },
    keyPoints: [
      { title: 'Desktop Environment', items: ['GNOME (GTK) — Semplicità', 'KDE (Qt) — Personalizzazione', 'XFCE, LXDE — Leggeri'] },
      { title: 'Privacy', items: ['Cookie terze parti = tracciamento', 'DNT ≠ garanzia di privacy', 'Navigazione privata ≠ anonimato'] },
      { title: 'Crittografia', items: ['TLS/SSL per connessioni', 'GnuPG per file/email', 'dm-crypt/LUKS per dischi'] },
    ],
    terminal: { prompt: '$ gpg --list-keys', output: 'pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>' },
  },
}

function ComicStrip({ comic }) {
  return (
    <div className="glass-card p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Sparkles className="text-[var(--color-neon-yellow)]" size={20} />
        {comic.title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {comic.panels.map((panel, i) => (
          <motion.div
            key={i}
            className="bg-[var(--color-bg-primary)] rounded-xl p-4 border border-[var(--color-border)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-3xl mb-2">{panel.emoji}</div>
            <p className="text-sm text-[var(--color-text-secondary)]">{panel.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function KeyPoints({ points, topicColor }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="glass-card p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.15 }}
        >
          <h4 className="font-bold text-sm mb-3" style={{ color: topicColor }}>{point.title}</h4>
          <ul className="space-y-1">
            {point.items.map((item, j) => (
              <li key={j} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                <span className="text-[var(--color-neon-green)] mt-1">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

function TerminalDemo({ terminal }) {
  return (
    <div className="terminal-box mb-6">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#30363d]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
        <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
        <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
        <span className="text-xs text-[#8b949e] ml-2">terminale</span>
      </div>
      <div className="prompt">{terminal.prompt}</div>
      <div className="output whitespace-pre-line mt-1">{terminal.output}</div>
    </div>
  )
}

export default function LessonPage() {
  const { topicId, lessonId } = useParams()
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
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[var(--color-error)]">Lezione non trovata</h2>
        <Link to="/" className="btn-primary mt-4 inline-block no-underline">Torna alla Home</Link>
      </div>
    )
  }

  const handleCompleteLesson = () => {
    if (!isCompleted) {
      completeLesson(lessonId)
      addXP(20)
      // Check first lesson badge
      if (completedLessons.length === 0) {
        earnBadge('first-lesson')
      }
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Back */}
      <Link 
        to={`/topic/${topicId}`} 
        className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors"
      >
        <ArrowLeft size={18} />
        <span className="text-sm">Torna a {topic.title}</span>
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{topic.icon}</span>
          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${topicColor}20`, color: topicColor }}>
            Topic {topicId}
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 text-xs text-[var(--color-success)]">
              <CheckCircle size={14} /> Completata
            </span>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)]">
          {lesson.title}
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">{lesson.subtitle}</p>
      </motion.div>

      {/* Content */}
      {content ? (
        <>
          <ComicStrip comic={content.comic} />
          <KeyPoints points={content.keyPoints} topicColor={topicColor} />
          <TerminalDemo terminal={content.terminal} />
        </>
      ) : (
        <div className="glass-card p-8 text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
          <h3 className="text-lg font-bold mb-2">Contenuto in arrivo!</h3>
          <p className="text-[var(--color-text-muted)]">Questa lezione sarà disponibile presto con fumetti e contenuti interattivi.</p>
        </div>
      )}

      {/* Quiz Section */}
      {lessonQuizzes.length > 0 && (
        <div>
          {!showQuiz ? (
            <motion.button
              className="btn-primary w-full text-center"
              onClick={() => setShowQuiz(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🎯 {quizDone ? 'Rifai il Quiz' : 'Inizia il Quiz!'} ({lessonQuizzes.length} domande)
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
          className="btn-secondary w-full"
          onClick={handleCompleteLesson}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ✅ Segna come completata (+20 XP)
        </motion.button>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-[var(--color-border)]">
        {(() => {
          const lessonIndex = topic.lessons.findIndex(l => l.id === lessonId)
          const prev = topic.lessons[lessonIndex - 1]
          const next = topic.lessons[lessonIndex + 1]
          return (
            <>
              {prev ? (
                <Link to={`/topic/${topicId}/lesson/${prev.id}`} className="btn-secondary text-sm no-underline">
                  ← {prev.title}
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/topic/${topicId}/lesson/${next.id}`} className="btn-primary text-sm no-underline">
                  {next.title} →
                </Link>
              ) : (
                <Link to={`/topic/${topicId}`} className="btn-primary text-sm no-underline">
                  Fine Topic →
                </Link>
              )}
            </>
          )
        })()}
      </div>
    </div>
  )
}
