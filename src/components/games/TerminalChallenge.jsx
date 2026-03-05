import { useState, useRef } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Terminal } from 'lucide-react'

const allChallenges = [
  // Livello 1: comandi base
  { prompt: 'Mostra il contenuto della directory corrente', answer: 'ls', hints: ['Un comando di 2 lettere', 'Inizia con "l"'], accept: ['ls', 'ls -la', 'ls -l'], difficulty: 1 },
  { prompt: 'Cambia directory alla home dell\'utente', answer: 'cd ~', hints: ['Usa cd...', 'Il simbolo ~ rappresenta home'], accept: ['cd ~', 'cd', 'cd $HOME'], difficulty: 1 },
  { prompt: 'Mostra la directory corrente (percorso assoluto)', answer: 'pwd', hints: ['Print Working...', '3 lettere'], accept: ['pwd'], difficulty: 1 },
  { prompt: 'Crea una directory chiamata "progetto"', answer: 'mkdir progetto', hints: ['Make Directory...', 'mkdir + nome'], accept: ['mkdir progetto'], difficulty: 1 },
  { prompt: 'Mostra il contenuto del file /etc/hostname', answer: 'cat /etc/hostname', hints: ['conCATenate...', 'cat + percorso'], accept: ['cat /etc/hostname'], difficulty: 1 },
  { prompt: 'Mostra l\'ID dell\'utente corrente', answer: 'id', hints: ['Un comando molto corto', '2 lettere'], accept: ['id', 'whoami'], difficulty: 1 },
  { prompt: 'Crea un file vuoto chiamato test.txt', answer: 'touch test.txt', hints: ['Non è cat...', 'touch + nome'], accept: ['touch test.txt'], difficulty: 1 },
  { prompt: 'Mostra le prime 10 righe di un file log.txt', answer: 'head log.txt', hints: ['Il contrario di "tail"', 'head + file'], accept: ['head log.txt', 'head -10 log.txt', 'head -n 10 log.txt'], difficulty: 1 },
  { prompt: 'Mostra il manuale del comando ls', answer: 'man ls', hints: ['MANual...', 'man + comando'], accept: ['man ls'], difficulty: 1 },
  { prompt: 'Cancella il file obsoleto.txt', answer: 'rm obsoleto.txt', hints: ['ReMove...', 'rm + nome'], accept: ['rm obsoleto.txt', 'rm -f obsoleto.txt'], difficulty: 1 },
  { prompt: 'Copia il file config.txt in backup.txt', answer: 'cp config.txt backup.txt', hints: ['CoPy...', 'cp sorgente destinazione'], accept: ['cp config.txt backup.txt'], difficulty: 1 },
  { prompt: 'Mostra la cronologia dei comandi', answer: 'history', hints: ['La STORIA dei comandi', '7 lettere'], accept: ['history'], difficulty: 1 },
  // Livello 2: comandi intermedi
  { prompt: 'Cerca la parola "error" nel file syslog', answer: 'grep error /var/log/syslog', hints: ['Global Regular Expression...', 'grep pattern file'], accept: ['grep error /var/log/syslog', 'grep "error" /var/log/syslog', 'grep -i error /var/log/syslog'], difficulty: 2 },
  { prompt: 'Rendi eseguibile lo script hello.sh', answer: 'chmod +x hello.sh', hints: ['Change Mode...', 'chmod + qualcosa'], accept: ['chmod +x hello.sh', 'chmod u+x hello.sh', 'chmod 755 hello.sh'], difficulty: 2 },
  { prompt: 'Crea un archivio tar.gz della cartella docs/', answer: 'tar -czf docs.tar.gz docs/', hints: ['tar -c...', 'c=create z=gzip f=file'], accept: ['tar -czf docs.tar.gz docs/', 'tar czf docs.tar.gz docs/', 'tar -czf docs.tar.gz docs'], difficulty: 2 },
  { prompt: 'Mostra lo spazio disco usato in formato leggibile', answer: 'df -h', hints: ['Disk Free...', 'df + flag'], accept: ['df -h'], difficulty: 2 },
  { prompt: 'Conta le righe del file /etc/passwd', answer: 'wc -l /etc/passwd', hints: ['Word Count...', 'wc -l'], accept: ['wc -l /etc/passwd'], difficulty: 2 },
  { prompt: 'Mostra i processi in esecuzione in tempo reale', answer: 'top', hints: ['3 lettere', 'Un monitor di sistema'], accept: ['top', 'htop'], difficulty: 2 },
  { prompt: 'Connettiti via SSH all\'host 192.168.1.10', answer: 'ssh 192.168.1.10', hints: ['Secure Shell...', 'ssh + indirizzo'], accept: ['ssh 192.168.1.10', 'ssh root@192.168.1.10', 'ssh user@192.168.1.10'], difficulty: 2 },
  { prompt: 'Cambia proprietario del file a utente "admin"', answer: 'chown admin file', hints: ['Change Owner...', 'chown user file'], accept: ['chown admin file', 'sudo chown admin file'], difficulty: 2 },
  { prompt: 'Mostra la dimensione della directory /var/log', answer: 'du -sh /var/log', hints: ['Disk Usage...', 'du -sh'], accept: ['du -sh /var/log', 'du -h /var/log'], difficulty: 2 },
  { prompt: 'Segui in tempo reale il file /var/log/syslog', answer: 'tail -f /var/log/syslog', hints: ['tail con un flag...', 'f = follow'], accept: ['tail -f /var/log/syslog'], difficulty: 2 },
  { prompt: 'Crea un link simbolico di /etc/hosts in /tmp/', answer: 'ln -s /etc/hosts /tmp/hosts', hints: ['ln con un flag...', '-s = symbolic'], accept: ['ln -s /etc/hosts /tmp/hosts', 'ln -s /etc/hosts /tmp/'], difficulty: 2 },
  { prompt: 'Cerca il comando ifconfig nel PATH', answer: 'which ifconfig', hints: ['Quale ifconfig...', 'which + comando'], accept: ['which ifconfig'], difficulty: 2 },
  // Livello 3: comandi avanzati
  { prompt: 'Trova tutti i file .log in /var più grandi di 10MB', answer: 'find /var -name "*.log" -size +10M', hints: ['find + -name + -size', 'M = megabyte'], accept: ['find /var -name "*.log" -size +10M', 'find /var -name *.log -size +10M'], difficulty: 3 },
  { prompt: 'Ordina il file data.txt in ordine numerico inverso', answer: 'sort -rn data.txt', hints: ['sort -r = reverse, -n = numeric', 'sort + flag'], accept: ['sort -rn data.txt', 'sort -nr data.txt', 'sort -r -n data.txt'], difficulty: 3 },
  { prompt: 'Mostra solo il primo campo di /etc/passwd (username)', answer: 'cut -d: -f1 /etc/passwd', hints: ['cut con delimitatore :...', 'cut -d: -f1'], accept: ['cut -d: -f1 /etc/passwd', "cut -d ':' -f1 /etc/passwd"], difficulty: 3 },
  { prompt: 'Pianifica un cron job giornaliero alle 3:00', answer: '0 3 * * *', hints: ['minuto ora giorno mese giorno_sett', '0 3 ...'], accept: ['0 3 * * *'], difficulty: 3 },
  { prompt: 'Sostituisci "foo" con "bar" in un file usando sed', answer: 'sed -i s/foo/bar/g file', hints: ['sed -i "s/old/new/g"', 'Stream Editor'], accept: ['sed -i s/foo/bar/g file', "sed -i 's/foo/bar/g' file", 'sed s/foo/bar/g file'], difficulty: 3 },
  { prompt: 'Mostra le connessioni di rete attive', answer: 'ss -tuln', hints: ['Socket Statistics...', 'ss + flag'], accept: ['ss -tuln', 'ss -tulnp', 'netstat -tuln', 'ss'], difficulty: 3 },
  { prompt: 'Estrai la seconda colonna separata da spazi con awk', answer: 'awk \'{print $2}\'', hints: ['awk print...', '$2 = seconda colonna'], accept: ["awk '{print $2}'", 'awk \'{print $2}\''], difficulty: 3 },
  { prompt: 'Mostra la tabella di routing di rete', answer: 'ip route', hints: ['ip ...', 'route/routing table'], accept: ['ip route', 'route', 'ip route show', 'netstat -r'], difficulty: 3 },
  { prompt: 'Mostra i file aperti dal processo con PID 1234', answer: 'lsof -p 1234', hints: ['List Open Files...', 'lsof + flag'], accept: ['lsof -p 1234'], difficulty: 3 },
  { prompt: 'Riavvia il servizio nginx con systemd', answer: 'systemctl restart nginx', hints: ['systemctl...', 'restart + nome servizio'], accept: ['systemctl restart nginx', 'sudo systemctl restart nginx'], difficulty: 3 },
  { prompt: 'Aggiungi l\'utente "mario" al gruppo "sudo"', answer: 'usermod -aG sudo mario', hints: ['usermod...', '-aG = append Group'], accept: ['usermod -aG sudo mario', 'sudo usermod -aG sudo mario'], difficulty: 3 },
]

const levelConfig = {
  1: { count: 6, maxDiff: 1, xp: 15, label: 'Principiante' },
  2: { count: 8, maxDiff: 2, xp: 25, label: 'Intermedio' },
  3: { count: 10, maxDiff: 3, xp: 40, label: 'Esperto' },
}

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TerminalChallenge({ onComplete, level = 1 }) {
  const { addXP, completeGame } = useGame()
  const config = levelConfig[level] || levelConfig[1]
  const pool = allChallenges.filter(c => c.difficulty <= config.maxDiff)
  const [shuffled] = useState(() => shuffleArray(pool).slice(0, config.count))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)
  const [hintIndex, setHintIndex] = useState(-1)
  const [finished, setFinished] = useState(false)
  const inputRef = useRef(null)

  const challenge = shuffled[currentIndex]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (result) return
    const trimmed = input.trim().toLowerCase()
    const correct = challenge.accept.some(a => a.toLowerCase() === trimmed)
    setResult(correct ? 'correct' : 'wrong')
    if (correct) { setScore(s => s + 1); addXP(config.xp) }
  }

  const handleNext = () => {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex(i => i + 1); setInput(''); setResult(null); setHintIndex(-1)
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setFinished(true)
      completeGame(`terminal-lv${level}`)
      if (score + (result === 'correct' ? 1 : 0) === shuffled.length) addXP(30)
    }
  }

  const showHint = () => { if (hintIndex < challenge.hints.length - 1) setHintIndex(h => h + 1) }

  if (finished) {
    const finalScore = score + (result === 'correct' ? 1 : 0)
    return (
      <motion.div className="glass-card" style={{ padding: '32px', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <Trophy size={48} style={{ margin: '0 auto 16px', color: 'var(--color-neon-green)' }} />
        <h2 className="font-black" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {finalScore === shuffled.length ? '🏆 Perfetto!' : finalScore >= config.count - 1 ? '🎉 Ottimo!' : '💪 Continua!'}
        </h2>
        <p className="font-black" style={{ fontSize: '2rem', color: 'var(--color-neon-green)' }}>{finalScore}/{shuffled.length}</p>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', fontSize: '0.875rem' }}>Livello: {config.label}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', justifyContent: 'center' }}>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setFinished(false); setResult(null); setInput(''); setHintIndex(-1) }} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RotateCcw size={16} /> Riprova
          </button>
          {onComplete && <button onClick={onComplete} className="btn-secondary">Chiudi</button>}
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Challenge {currentIndex + 1}/{shuffled.length}
        </span>
        <span className="font-bold" style={{ fontSize: '0.875rem', color: 'var(--color-neon-green)' }}>
          ✅ {score} corrette
        </span>
      </div>

      <div className="glass-card" style={{ padding: '24px', marginBottom: '16px' }}>
        <p className="font-bold" style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
          🎯 {challenge.prompt}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="terminal-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-mono font-bold" style={{ color: 'var(--color-neon-green)' }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Scrivi il comando..."
                disabled={!!result}
                autoFocus
                className="font-mono"
                style={{ flex: 1, fontSize: '0.9rem', background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text-primary)' }}
              />
            </div>
            {result && (
              <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '1px solid #30363d' }}>
                {result === 'correct' ? (
                  <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--color-success)' }}>✅ Corretto! +{config.xp} XP</p>
                ) : (
                  <p className="font-mono" style={{ fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--color-error)' }}>❌ Non esatto.</span>
                    <span style={{ color: 'var(--color-text-muted)' }}> Risposta: </span>
                    <span style={{ color: 'var(--color-neon-green)' }}>{challenge.answer}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </form>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' }}>
          {!result && (
            <button onClick={showHint} className="btn-secondary" style={{ fontSize: '0.75rem', padding: '4px 12px' }} disabled={hintIndex >= challenge.hints.length - 1}>
              💡 Suggerimento
            </button>
          )}
          {hintIndex >= 0 && challenge.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <span key={i} style={{ fontSize: '0.8rem', color: 'var(--color-neon-yellow)' }}>💡 {hint}</span>
          ))}
        </div>
      </div>

      {!result ? (
        <button onClick={handleSubmit} className="btn-primary" disabled={!input.trim()} style={{ width: '100%' }}>
          <Terminal size={16} style={{ display: 'inline', marginRight: '8px' }} /> Esegui
        </button>
      ) : (
        <button onClick={handleNext} className="btn-primary" style={{ width: '100%' }}>
          {currentIndex < shuffled.length - 1 ? 'Prossima challenge →' : 'Vedi risultati 🏆'}
        </button>
      )}
    </div>
  )
}
