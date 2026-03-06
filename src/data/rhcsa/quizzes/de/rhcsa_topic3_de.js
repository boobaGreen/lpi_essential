// RHCSA Quiz — Topic 3: Running System Management (Deutsch)
// 22 MCQ questions

export const rhcsaTopic3QuizzesDE = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welches systemd-Target entspricht dem alten Runlevel 3 (Multi-User, keine grafische Oberfläche)?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: 'multi-user.target = Runlevel 3 (Kommandozeile/CLI). graphical.target = Runlevel 5 (GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie ändern Sie das Standard-Target (Default Target) des Systems dauerhaft?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: 'systemctl set-default <target> setzt das permanente Boot-Ziel, indem er einen symbolischen Link in /etc/systemd/system/default.target erzeugt.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welchen Kernel-Parameter hängen Sie beim Systemstart (GRUB) an, um den Bootvorgang zu unterbrechen und in eine Notfall-Shell zu wechseln (RHCSA Password Rescue)?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: 'rd.break unterbricht in der initramfs-Phase, bevor das echte System auf /sysroot gemountet ist. Lebenswichtig für Root.Passwort-Resets in RHEL.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Was MÜSSEN Sie nach dem Ändern des Root-Passworts über rd.break tun, bevor Sie RHEL9 neu starten (aufgrund von SELinux)?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'touch /.autorelabel zwingt SELinux, die Dateisystem-Kontexte beim folgenden Bootvorgang sauber neu zu labeln; dies ist Pflicht nach dem manuellen Herumpfuschen an Passwort-Dateien im Rescue.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl versetzt das aktuelle Live-System augenblicklich in das Rescue Target (Single User), ohne komplett neu zu booten?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'systemctl isolate <target> springt in ein definiertes Target und stoppt dabei alle Dienste, die dorthin nicht gehören.',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie überprüfen Sie das momentan gesetzte Standard-Startziel (Default Target)?',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: 'systemctl get-default gibt das aktuelle dauerhafte Boot-Ziel zurück.',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher System-Signal (Signal) wird durch `kill -9 <PID>` gesendet?',
    options: ['SIGTERM (15) — sanftes Beenden', 'SIGKILL (9) — sofortiger Zwangsabbruch', 'SIGHUP (1) — Konfiguration neu laden', 'SIGSTOP (19) — Prozess pausieren'],
    correct: 1,
    explanation: 'SIGKILL (Signal 9) erzwingt die brutale und unmittelbare Beendung durch den Kernel. Es kann vom Prozess nicht abgewehrt werden.',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie ändern Sie im Laufenden Betrieb die Priorität (Nice) des Prozesses PID 1234 auf den Wert -5?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: 'renice wird verwendet, um den Nice-Wert BEREITS laufender Prozesse (-p) zu modifizieren (-n). nice ist nur für Neustarts von frischen Befehlen.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Nice-Wert gewährt einem Prozess die absolut meiste CPU-Zeit (höchste Priorität)?',
    options: ['100', '-20', '+19', '0'],
    correct: 1,
    explanation: 'Die Skala reicht von -20 (höchste Priorität) bis +19 (niedrigste). Werte im Minusbereich dürfen nur von Root erteilt werden.',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher ps-Befehl gibt detailliert alle laufenden Prozesse des gesamten Systems aller Benutzer aus?',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: 'ps aux — a = all users, u = benutzerspezifische Spalten (CPU/RAM), x = zeige auch daemons ohne Terminal-Bindung.',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl sendet ein sauberes SIGTERM an ALLE Prozessinstanzen, die "httpd" im Namen tragen?',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: 'killall beendet Applikationen direkt über die Angabe des Namens statt der PID. Standardmäßig sendet es wie kill das SIGTERM (15).',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Sie haben einen Prozess via STRG+Z pausiert (job %2). Wie holen Sie diesen sofort wieder aktiv in den Vordergrund des Terminals?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: 'fg <id> holt den verwaisten Hintergrundjob zurück in den "Foreground".',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl konfiguriert "sshd" so, dass er ab sofort bei jedem Systemstart mit hochfährt UND startet ihn zudem direkt manuell JETZT?',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'Mit dem flinken Flag `--now` führt systemctl enable (Einschalten für Boot) sofort im selben Zuge auch einen Start in der aktuellen Sitzung aus.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Worin liegt der fundamentale Unterschied zwischen `systemctl stop` und `systemctl disable`?',
    options: [
      'Sie sind exakt dasselbe',
      'Stop hält den Dienst nur im aktuellen Laufzeitbetrieb an; Disable entfernt nur seinen Autostart für den nächsten Boot-Vorgang, belässt eine laufende Instanz aber intakt',
      'Disable stoppt den Dienst JETZT dauerhaft, Stop wirft den Daemon vom System runter',
      'Stop löscht den Dienst für immer',
    ],
    correct: 1,
    explanation: 'Stop ist temporär für "jetzt" (Dienst kehrt beim Reboot zurück). Disable ist persitent gegen den Startvorgang gemeint, tötet jedoch keinen akut live-drehenden Dienst.',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Mit welchem Kommando können Sie jeglichen Start (sogar manuell erzwungene Starts über Kommandozeile) eines spezifizierten Daemons in RHEL ultimativ untersagen/sabotieren?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: 'systemctl mask verlinkt die Startup-Unit hart nach /dev/null; danach kann rein garnichts (auch kein verzweifelter root `start`) den Vorgang anstupsen, bis zu einem unmask.',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Wie überprüfen Sie das Protokoll und den Gesundheitszustand eines laufenden Daemons?',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: 'systemctl status gewährt Einblicke in PID, Cgroups, Aktivitätsstempel sowie die aktuellsten Output-Logs (der letzten Momente).',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Sie haben eine SystemD Unit (Dateiendung .service) modifiziert. Welchen Befehl MÜSSEN Sie zwingend absenden, bevor Sie die Änderungen am Dienst testen dürfen?',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'Solange systemd nicht durch ein hartes `systemctl daemon-reload` angewiesen wird seine Register neu aus dem Dateisystem einzulesen, weigert er sich, händische Dateiveränderungen an Unit-Files anzuerkennen.',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Wie spuckt das moderne journalctl frische Log-Meldungen live (Echtzeit-Verfolgung) in die Konsole?',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'Wie beim guten alten tail -f steht auch im neuen universellen journald das `-f` für "follow", was den Strom endlos verfolgt.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie filtern Sie riesige Journal-Datenberge, um präzise AUSSCHLIESSLICH die Meldungen der "sshd" Applikation/Unit auszuwerfen?',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: 'Das filter-Flag `-u` (Unit) separiert blitzsauber alle Logs die auf eine ganz dedizierte target-Unit gemünzt sind.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In welcher Zentralkonfiguration schalten Sie ein, dass RHEL sein SystemD Journal auch nach einem Reboot über Tage behält (Persistenz Storage=persistent)?',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: '/etc/systemd/journald.conf ist die Steuerkonfiguration des Journal-Kerns.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Mit welchem Kommandozauber rufen Sie Ihren persönhlichen Editor auf, um eigene zyklische Hintergrund-Automatisierungen (Jobs) in Cron einzutragen?',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'crontab -e (edit) öffnet den designierten Weg, wodurch cron garantiert, dass er das Format annimmt, prüft und sofort aktiviert (in /var/spool/cron/).',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Eine crontab-Zeile soll rigoros und exakt "Jeden Montag (Monday) in der Nacht um 03:30 Uhr" triggern. Der Befehl ist /script. Wie sieht das Zeitkorsett aus?',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Crontab Notation: Minute (30) | Stunde (3) | Tag des Monats (*) | Monat (*) | Wochentag (1=Montag).',
  },
]
