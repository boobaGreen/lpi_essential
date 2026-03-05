import { useState, useEffect, useRef } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, ThumbsUp, ThumbsDown, Timer } from 'lucide-react'

const statements = [
  { text: 'Linux è un sistema operativo completo.', answer: false, explanation: 'Linux è solo il kernel. GNU/Linux è il sistema operativo completo.' },
  { text: 'La licenza GPL permette di rendere proprietario un codice derivato.', answer: false, explanation: 'La GPL (copyleft) obbliga i derivati a mantenere la stessa licenza.' },
  { text: 'La licenza MIT è una licenza permissiva.', answer: true, explanation: 'MIT è molto permissiva: consente quasi qualsiasi uso, incluso proprietario.' },
  { text: 'Il comando chmod modifica il proprietario di un file.', answer: false, explanation: 'chmod modifica i permessi. chown modifica il proprietario.' },
  { text: '/etc contiene i file di configurazione del sistema.', answer: true, explanation: 'Corretto! /etc è la directory standard per le configurazioni di sistema.' },
  { text: 'Il pipe (|) scrive l\'output in un file.', answer: false, explanation: 'Il pipe passa l\'output di un comando come input al successivo. > scrive in un file.' },
  { text: 'SSH usa la porta 443 di default.', answer: false, explanation: 'SSH usa la porta 22. La porta 443 è per HTTPS.' },
  { text: 'root ha sempre UID 0.', answer: true, explanation: 'Corretto! L\'utente root ha sempre UID 0 su tutti i sistemi Unix/Linux.' },
  { text: 'Un hard link può puntare a una directory.', answer: false, explanation: 'Gli hard link non possono puntare a directory (per evitare loop nel filesystem).' },
  { text: 'Lo shebang #!/bin/bash deve essere sulla prima riga dello script.', answer: true, explanation: 'Corretto! Lo shebang indica al sistema quale interprete usare.' },
  { text: 'Il comando "find" cerca testo all\'interno dei file.', answer: false, explanation: 'find cerca file e directory nel filesystem. grep cerca testo dentro i file.' },
  { text: 'RAID 1 crea una copia speculare dei dati (mirror).', answer: true, explanation: 'Corretto! RAID 1 duplica i dati su due dischi per ridondanza.' },
  { text: 'DNS traduce nomi di dominio in indirizzi IP.', answer: true, explanation: 'Corretto! DNS (Domain Name System) risolve nomi in IP.' },
  { text: '/etc/shadow è leggibile da tutti gli utenti.', answer: false, explanation: '/etc/shadow è leggibile solo da root. Contiene le password hash.' },
  { text: 'Il comando tar -czf estrae un archivio.', answer: false, explanation: '-czf crea (c) un archivio gzip (z). Per estrarre si usa -xzf.' },
  { text: '$1 in uno script Bash indica il primo argomento.', answer: true, explanation: 'Corretto! $1 = primo argomento, $2 = secondo, etc.' },
  { text: 'I symbolic link sopravvivono alla cancellazione del target.', answer: false, explanation: 'Se cancelli il target, il symlink diventa "broken" (non funzionante).' },
  { text: 'SIGKILL (9) può essere intercettato dal processo.', answer: false, explanation: 'SIGKILL non può essere intercettato. Termina il processo immediatamente.' },
  { text: '192.168.0.0/16 è un range di IP privati.', answer: true, explanation: 'Corretto! È uno dei tre range privati definiti da RFC 1918.' },
  { text: 'Android utilizza il kernel Linux.', answer: true, explanation: 'Corretto! Android usa un kernel Linux modificato da Google.' },
]

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TrueFalseGame({ onComplete }) {
  const { addXP, completeGame } = useGame()
  const [questions] = useState(() => shuffleArray(statements).slice(0, 10))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const timerRef = useRef(null)

  const question = questions[currentIndex]
  const QUESTION_TIME = 10

  useEffect(() => {
    if (finished || result) return
    setTimeLeft(QUESTION_TIME)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          handleAnswer(null) // timeout = wrong
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [currentIndex, finished])

  const handleAnswer = (userAnswer) => {
    clearInterval(timerRef.current)
    const correct = userAnswer === question.answer
    setResult(correct ? 'correct' : 'wrong')
    setAnswers(prev => [...prev, { correct, timedOut: userAnswer === null }])
    if (correct) {
      setScore(s => s + 1)
      addXP(8)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setResult(null)
      setCurrentIndex(i => i + 1)
    } else {
      setFinished(true)
      completeGame('true-false')
      const finalScore = score + (result === 'correct' ? 1 : 0)
      if (finalScore === questions.length) addXP(30)
    }
  }

  if (finished) {
    const finalScore = answers.filter(a => a.correct).length
    return (
      <motion.div className="glass-card text-center" style={{ padding: '32px' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} className="mx-auto text-[var(--color-neon-yellow)]" style={{ marginBottom: '16px' }} />
        <h2 className="text-2xl font-black" style={{ marginBottom: '8px' }}>
          {finalScore >= 8 ? '⚡ Super veloce!' : finalScore >= 5 ? '🎉 Bene!' : '💪 Riprova!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-yellow)' }}>{finalScore}/{questions.length}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setAnswers([]) }} className="btn-primary flex items-center" style={{ gap: '6px' }}>
            <RotateCcw size={16} /> Riprova
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  const timePct = (timeLeft / QUESTION_TIME) * 100

  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: '12px' }}>
        <span className="text-[var(--color-text-muted)]" style={{ fontSize: '0.875rem' }}>
          {currentIndex + 1}/{questions.length}
        </span>
        <span className="flex items-center font-mono font-bold" style={{ gap: '6px', color: timeLeft <= 3 ? 'var(--color-error)' : 'var(--color-neon-yellow)' }}>
          <Timer size={16} /> {timeLeft}s
        </span>
        <span className="font-bold text-[var(--color-neon-green)]" style={{ fontSize: '0.875rem' }}>
          ✅ {score}
        </span>
      </div>

      {/* Timer bar */}
      <div className="w-full rounded-full overflow-hidden" style={{ height: '4px', marginBottom: '20px', background: 'var(--color-bg-card)' }}>
        <div
          className="rounded-full transition-all"
          style={{
            width: `${timePct}%`,
            height: '100%',
            background: timeLeft <= 3 ? 'var(--color-error)' : 'var(--color-neon-yellow)',
            transition: 'width 1s linear',
          }}
        />
      </div>

      {/* Statement */}
      <motion.div
        key={currentIndex}
        className="glass-card text-center"
        style={{ padding: '32px 24px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
          "{question.text}"
        </p>

        {!result ? (
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <motion.button
              onClick={() => handleAnswer(true)}
              className="flex items-center rounded-xl border font-bold"
              style={{ padding: '14px 32px', gap: '8px', borderColor: 'var(--color-success)', color: 'var(--color-success)', background: 'rgba(34,197,94,0.08)', fontSize: '1rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThumbsUp size={20} /> VERO
            </motion.button>
            <motion.button
              onClick={() => handleAnswer(false)}
              className="flex items-center rounded-xl border font-bold"
              style={{ padding: '14px 32px', gap: '8px', borderColor: 'var(--color-error)', color: 'var(--color-error)', background: 'rgba(239,68,68,0.08)', fontSize: '1rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThumbsDown size={20} /> FALSO
            </motion.button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="font-bold" style={{ fontSize: '1.2rem', marginBottom: '8px', color: result === 'correct' ? 'var(--color-success)' : 'var(--color-error)' }}>
              {result === 'correct' ? '✅ Corretto!' : '❌ Sbagliato!'}
            </div>
            <p className="text-[var(--color-text-secondary)]" style={{ fontSize: '0.875rem', marginBottom: '16px' }}>
              {question.explanation}
            </p>
            <button onClick={handleNext} className="btn-primary">
              {currentIndex < questions.length - 1 ? 'Prossima →' : 'Risultati 🏆'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
