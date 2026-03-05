import { useState, useEffect, useRef } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, ThumbsUp, ThumbsDown, Timer } from 'lucide-react'

const allStatements = [
  // Livello 1: base
  { text: 'Il comando "ls" mostra i file nella directory corrente.', answer: true, explanation: 'Corretto! ls (list) elenca file e directory.', difficulty: 1 },
  { text: '/etc contiene i file di configurazione del sistema.', answer: true, explanation: 'Corretto! /etc è la directory standard per le configurazioni.', difficulty: 1 },
  { text: 'Il comando chmod modifica il proprietario di un file.', answer: false, explanation: 'chmod modifica i permessi. chown modifica il proprietario.', difficulty: 1 },
  { text: 'Android utilizza il kernel Linux.', answer: true, explanation: 'Corretto! Android usa un kernel Linux modificato da Google.', difficulty: 1 },
  { text: 'root ha sempre UID 0.', answer: true, explanation: 'Corretto! L\'utente root ha sempre UID 0 su tutti i sistemi Unix/Linux.', difficulty: 1 },
  { text: 'Il pipe (|) scrive l\'output in un file.', answer: false, explanation: 'Il pipe passa l\'output al successivo. > scrive in un file.', difficulty: 1 },
  { text: 'Ubuntu è basato su Debian.', answer: true, explanation: 'Corretto! Ubuntu deriva da Debian.', difficulty: 1 },
  { text: 'Il simbolo ~ indica la directory /tmp.', answer: false, explanation: '~ indica la home directory dell\'utente, non /tmp.', difficulty: 1 },
  { text: 'Bash è la shell predefinita nella maggior parte delle distribuzioni Linux.', answer: true, explanation: 'Corretto! Bash (Bourne Again Shell) è la shell di default.', difficulty: 1 },
  { text: 'Il carattere # in uno script bash indica un commento.', answer: true, explanation: 'Corretto! Le righe che iniziano con # sono commenti in bash.', difficulty: 1 },
  { text: 'Il tasto Tab completa automaticamente comandi e nomi file.', answer: true, explanation: 'Corretto! L\'auto-completamento con Tab è una funzionalità fondamentale della shell.', difficulty: 1 },
  { text: 'La directory /home contiene la home dell\'utente root.', answer: false, explanation: 'La home di root è /root. /home contiene le home degli utenti normali.', difficulty: 1 },
  // Livello 2: intermedi
  { text: 'La licenza GPL permette di rendere proprietario un codice derivato.', answer: false, explanation: 'La GPL (copyleft) obbliga i derivati a mantenere la stessa licenza.', difficulty: 2 },
  { text: 'La licenza MIT è una licenza permissiva.', answer: true, explanation: 'MIT è molto permissiva: consente quasi qualsiasi uso.', difficulty: 2 },
  { text: 'SSH usa la porta 443 di default.', answer: false, explanation: 'SSH usa la porta 22. La porta 443 è per HTTPS.', difficulty: 2 },
  { text: 'Lo shebang #!/bin/bash deve essere sulla prima riga dello script.', answer: true, explanation: 'Corretto! Lo shebang indica al sistema quale interprete usare.', difficulty: 2 },
  { text: 'RAID 1 crea una copia speculare dei dati (mirror).', answer: true, explanation: 'Corretto! RAID 1 duplica i dati su due dischi.', difficulty: 2 },
  { text: 'DNS traduce nomi di dominio in indirizzi IP.', answer: true, explanation: 'Corretto! DNS risolve nomi in IP.', difficulty: 2 },
  { text: 'Il comando "find" cerca testo all\'interno dei file.', answer: false, explanation: 'find cerca file nel filesystem. grep cerca testo dentro i file.', difficulty: 2 },
  { text: '/etc/shadow è leggibile da tutti gli utenti.', answer: false, explanation: '/etc/shadow è leggibile solo da root. Contiene le password hash.', difficulty: 2 },
  { text: 'Il comando "export" rende una variabile disponibile ai processi figli.', answer: true, explanation: 'Corretto! export esporta la variabile come variabile d\'ambiente.', difficulty: 2 },
  { text: 'Il file /etc/passwd contiene le password degli utenti in chiaro.', answer: false, explanation: '/etc/passwd non contiene più le password reali. Sono in /etc/shadow come hash.', difficulty: 2 },
  { text: 'Il glob * corrisponde anche ai file nascosti (che iniziano con punto).', answer: false, explanation: 'Il glob * non include i file che iniziano con punto. Servono opzioni come dotglob.', difficulty: 2 },
  { text: 'NFS è un protocollo per la condivisione file tra sistemi Unix/Linux.', answer: true, explanation: 'Corretto! NFS (Network File System) condivide file in rete tra sistemi Unix.', difficulty: 2 },
  { text: 'Il comando "cat" può concatenare più file.', answer: true, explanation: 'Corretto! cat (concatenate) unisce il contenuto di più file: cat file1 file2.', difficulty: 2 },
  { text: 'apt è il gestore pacchetti usato da Fedora.', answer: false, explanation: 'Fedora usa dnf (o yum). apt è per Debian/Ubuntu.', difficulty: 2 },
  // Livello 3: avanzati
  { text: 'Linux è un sistema operativo completo.', answer: false, explanation: 'Linux è solo il kernel. GNU/Linux è il sistema operativo completo.', difficulty: 3 },
  { text: 'Un hard link può puntare a una directory.', answer: false, explanation: 'Gli hard link non possono puntare a directory (per evitare loop).', difficulty: 3 },
  { text: 'Il comando tar -czf estrae un archivio.', answer: false, explanation: '-czf crea un archivio gzip. Per estrarre si usa -xzf.', difficulty: 3 },
  { text: '$1 in uno script Bash indica il primo argomento.', answer: true, explanation: 'Corretto! $1 = primo argomento, $2 = secondo, etc.', difficulty: 3 },
  { text: 'I symbolic link sopravvivono alla cancellazione del target.', answer: false, explanation: 'Se cancelli il target, il symlink diventa "broken".', difficulty: 3 },
  { text: 'SIGKILL (9) può essere intercettato dal processo.', answer: false, explanation: 'SIGKILL non può essere intercettato. Termina immediatamente.', difficulty: 3 },
  { text: '192.168.0.0/16 è un range di IP privati.', answer: true, explanation: 'Corretto! È uno dei tre range privati definiti da RFC 1918.', difficulty: 3 },
  { text: 'Il file system ext4 supporta journal.', answer: true, explanation: 'Corretto! ext4 è un filesystem con journaling.', difficulty: 3 },
  { text: 'Il comando "nice" modifica la priorità di un processo.', answer: true, explanation: 'Corretto! nice imposta la priorità di scheduling.', difficulty: 3 },
  { text: 'TCP è un protocollo connectionless.', answer: false, explanation: 'TCP è connection-oriented. UDP è connectionless.', difficulty: 3 },
  { text: 'Il comando "crontab -e" modifica i job pianificati dell\'utente.', answer: true, explanation: 'Corretto! crontab -e apre l\'editor dei job cron dell\'utente.', difficulty: 3 },
  { text: 'Un processo in stato zombie sta utilizzando molta CPU.', answer: false, explanation: 'Un processo zombie è terminato ma il padre non ha letto il suo exit status. Non usa risorse.', difficulty: 3 },
  { text: '/dev/null scarba tutto ciò che gli viene inviato.', answer: true, explanation: 'Corretto! /dev/null è il "buco nero" di Linux: scarta qualsiasi dato.', difficulty: 3 },
  { text: 'Il file /etc/fstab definisce i filesystem montati automaticamente al boot.', answer: true, explanation: 'Corretto! fstab (filesystem table) contiene le informazioni di mount automatico.', difficulty: 3 },
  { text: 'Il comando "df" mostra la dimensione di un singolo file.', answer: false, explanation: 'df mostra lo spazio disco del filesystem. Per le dimensioni dei file usa du o ls -l.', difficulty: 3 },
  { text: 'systemd è il sistema di init usato dalla maggior parte delle distribuzioni moderne.', answer: true, explanation: 'Corretto! systemd ha sostituito SysVinit nella maggior parte delle distro.', difficulty: 3 },
  { text: 'Il file ~/.bash_history contiene i comandi digitati dall\'utente.', answer: true, explanation: 'Corretto! La cronologia dei comandi bash viene salvata in ~/.bash_history.', difficulty: 3 },
  { text: 'Il comando "grep -r" cerca ricorsivamente nelle directory.', answer: true, explanation: 'Corretto! grep -r (o -R) cerca pattern in tutti i file della directory e sottodirectory.', difficulty: 3 },
  { text: 'Lo sticky bit impedisce agli utenti di cancellare file altrui in directory condivise.', answer: true, explanation: 'Corretto! Lo sticky bit (t) su /tmp impedisce agli utenti di eliminare file di altri.', difficulty: 3 },
]

const levelConfig = {
  1: { count: 8, maxDiff: 1, questionTime: 12, xp: 8, label: 'Principiante' },
  2: { count: 10, maxDiff: 2, questionTime: 10, xp: 12, label: 'Intermedio' },
  3: { count: 14, maxDiff: 3, questionTime: 7, xp: 18, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TrueFalseGame({ onComplete, level = 1 }) {
  const { addXP, completeGame } = useGame()
  const config = levelConfig[level] || levelConfig[1]
  const pool = allStatements.filter(s => s.difficulty <= config.maxDiff)
  const [questions] = useState(() => shuffleArray(pool).slice(0, config.count))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(config.questionTime)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const timerRef = useRef(null)

  const question = questions[currentIndex]
  const QUESTION_TIME = config.questionTime

  useEffect(() => {
    if (finished || result) return
    setTimeLeft(QUESTION_TIME)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          handleAnswer(null)
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
    if (correct) { setScore(s => s + 1); addXP(config.xp) }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setResult(null); setCurrentIndex(i => i + 1)
    } else {
      setFinished(true)
      completeGame(`truefalse-lv${level}`)
      const finalScore = score + (result === 'correct' ? 1 : 0)
      if (finalScore === questions.length) addXP(30)
    }
  }

  if (finished) {
    const finalScore = answers.filter(a => a.correct).length
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-yellow)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {finalScore >= questions.length - 1 ? '⚡ Super veloce!' : finalScore >= Math.ceil(questions.length * 0.6) ? '🎉 Bene!' : '💪 Riprova!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-yellow)' }}>{finalScore}/{questions.length}</p>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '0.875rem' }}>Livello: {config.label} • Timer: {QUESTION_TIME}s</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setAnswers([]) }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          {currentIndex + 1}/{questions.length}
        </span>
        <span className="font-mono font-bold" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: timeLeft <= 3 ? 'var(--color-error)' : 'var(--color-neon-yellow)' }}>
          <Timer size={16} /> {timeLeft}s
        </span>
        <span className="font-bold" style={{ fontSize: '0.875rem', color: 'var(--color-neon-green)' }}>
          ✅ {score}
        </span>
      </div>

      <div style={{ width: '100%', borderRadius: '9999px', overflow: 'hidden', height: '4px', marginBottom: '20px', background: 'var(--color-bg-card)' }}>
        <div style={{
          width: `${timePct}%`, height: '100%', borderRadius: '9999px',
          background: timeLeft <= 3 ? 'var(--color-error)' : 'var(--color-neon-yellow)',
          transition: 'width 1s linear',
        }} />
      </div>

      <motion.div
        key={currentIndex}
        className="glass-card"
        style={{ padding: '32px 24px', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px', color: 'var(--color-text-primary)' }}>
          "{question.text}"
        </p>

        {!result ? (
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <motion.button
              onClick={() => handleAnswer(true)}
              className="font-bold"
              style={{ display: 'flex', alignItems: 'center', padding: '14px 32px', gap: '8px', borderRadius: '12px', border: '1px solid var(--color-success)', color: 'var(--color-success)', background: 'rgba(34,197,94,0.08)', fontSize: '1rem', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <ThumbsUp size={20} /> VERO
            </motion.button>
            <motion.button
              onClick={() => handleAnswer(false)}
              className="font-bold"
              style={{ display: 'flex', alignItems: 'center', padding: '14px 32px', gap: '8px', borderRadius: '12px', border: '1px solid var(--color-error)', color: 'var(--color-error)', background: 'rgba(239,68,68,0.08)', fontSize: '1rem', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <ThumbsDown size={20} /> FALSO
            </motion.button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="font-bold" style={{ fontSize: '1.2rem', marginBottom: '8px', color: result === 'correct' ? 'var(--color-success)' : 'var(--color-error)' }}>
              {result === 'correct' ? '✅ Corretto!' : '❌ Sbagliato!'}
            </div>
            <p style={{ fontSize: '0.875rem', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
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
