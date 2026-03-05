// RHCSA Quiz — Topic 3: Gestione Sistema in Esecuzione (Italiano)
// 22 domande MCQ

export const rhcsaTopic3Quizzes = [
  // ─── Lezione 3.1: Boot e Target systemd (6 domande) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale target systemd corrisponde al vecchio runlevel 3 (multi-user, no grafica)?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: 'multi-user.target = runlevel 3 (CLI). graphical.target = runlevel 5 (GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Come si cambia il target di default del sistema permanentemente?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: 'systemctl set-default <target> imposta il target di default permanente, creando un symlink in /etc/systemd/system/default.target.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Durante il boot, quale parametro del kernel aggiungsgi a GRUB per interrompere il boot e accedere a una shell di emergenza (RHCSA rescue)?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: 'rd.break interrompe il boot nella fase initramfs, prima di montare /sysroot. Utile per reset password root su RHEL9.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Dopo aver usato rd.break per resettare la password root su RHEL9 con SELinux, quale comando esegui prima di reboot?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'touch /.autorelabel forza SELinux a rietichettare tutto il filesystem al prossimo boot, necessario dopo aver modificato /etc/shadow.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando porta il sistema al target rescue (single user) senza reboot?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'systemctl isolate <target> passa immediatamente al target specificato, avviando solo i servizi di quel target.',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Come visualizzi il target di default corrente?',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: 'systemctl get-default mostra il target di default corrente (il symlink default.target).',
  },

  // ─── Lezione 3.2: Gestione Processi (6 domande) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale segnale invia `kill -9 <PID>`?',
    options: ['SIGTERM (15) — terminazione soft', 'SIGKILL (9) — terminazione immediata', 'SIGHUP (1) — ricarica config', 'SIGSTOP (19) — pausa processo'],
    correct: 1,
    explanation: 'SIGKILL (9) forza la terminazione immediata del processo. Non può essere ignorato o gestito.',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando modifica la priorità nice di un processo già in esecuzione con PID 1234 a -5?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: 'renice -n <valore> -p <PID> modifica il nice di un processo in esecuzione. nice vale solo per nuovi processi.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale range di valori nice indica la massima priorità per un processo?',
    options: ['100 (valore più alto)', '-20 (valore più basso, massima priorità)', '+19 (valore più alto)', '0 (default)'],
    correct: 1,
    explanation: 'Nice va da -20 (massima priorità, solo root) a +19 (minima priorità). Valori negativi = più CPU.',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando mostra tutti i processi di tutti gli utenti in formato esteso?',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: 'ps aux — a=tutti gli utenti, u=formato utente (user-oriented), x=include processi senza terminale.',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando invia SIGTERM al processo chiamato "httpd"?',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: 'killall <nome> invia SIGTERM (per default) a tutti i processi con quel nome. pkill funziona con pattern.',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Come si porta in foreground un job sospeso con numero job %2?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: 'fg %<n> porta il job in foreground. bg %<n> lo continua in background. jobs lista i job correnti.',
  },

  // ─── Lezione 3.3: Servizi systemctl (5 domande) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando abilita sshd all\'avvio e lo avvia immediatamente?',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'systemctl enable --now <servizio> combina enable (avvio automatico al boot) e start (avvio immediato) in un solo comando.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Differenza tra `systemctl stop` e `systemctl disable`?',
    options: [
      'Sono identici',
      'stop ferma il servizio ora; disable impedisce l\'avvio al prossimo boot',
      'disable ferma il servizio ora; stop rimuove il servizio',
      'stop rimuove il servizio permanentemente',
    ],
    correct: 1,
    explanation: 'stop = ferma subito ma si riavvia al boot. disable = non si avvia più al boot ma il servizio ora rimane attivo.',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando impedisce completamente l\'avvio di un servizio (anche manuale)?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: 'mask crea un symlink verso /dev/null per l\'unit file, impedendo qualsiasi avvio. unmask rimuove il mask.',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Come si controlla lo stato dettagliato di un servizio?',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: 'systemctl status <servizio> mostra stato, PID, log recenti, se enabled/disabled.',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Dopo aver modificato il file di configurazione di un servizio systemd (.service), quale comando ricarica la configurazione?',
    options: [
      'systemctl restart servizio',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'systemctl daemon-reload ricarica tutti i file unit dal disco. Va eseguito dopo aver modificato unit file in /etc/systemd/system/.',
  },

  // ─── Lezione 3.4: Logging e Scheduling (5 domande) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando mostra i log di sistema in tempo reale?',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'journalctl -f (follow) mostra i log in tempo reale, come tail -f per i file di log.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Come visualizzi i log solo del servizio sshd con journalctl?',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: '-u (unit) filtra i log per unità systemd. journalctl -u sshd mostra solo i log di sshd.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Dove si configura la persistenza del journal di systemd?',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: '/etc/systemd/journald.conf — imposta Storage=persistent per rendere il journal permanente su disco.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quale file si modifica per aggiungere un cron job per l\'utente corrente?',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'crontab -e apre l\'editor per il crontab dell\'utente corrente. Il formato è: min ora giorno mese weekday comando.',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quale entry cron esegue uno script ogni lunedì alle 3:30?',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Formato cron: minuto ora giorno_mese mese giorno_settimana. 30 3 * * 1 = 3:30 ogni lunedì (1=lunedì).',
  },
]
