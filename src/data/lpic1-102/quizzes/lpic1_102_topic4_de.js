// LPIC-1 102 Quiz Pool — German — Topic 108 (Wichtige Systemdienste)

export const lpic1_102_topic4Quizzes_de = [
  // ─── 108.1 Systemzeit verwalten (5 Fragen) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ermöglicht es Ihnen, die Hardware-Uhr (RTC) mit der Systemzeit (Software) zu synchronisieren?',
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: '--systohc kopiert den Wert von der Systemzeit in die Hardware-Uhr.'
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Was ist das Standardprotokoll zur Synchronisierung der Systemzeit über ein Netzwerk?',
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: 'Das Network Time Protocol (NTP) wird verwendet, um Systemuhren über Zeitserver genau zu halten.',
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welches moderne systemd-Utility wird verwendet, um die Systemuhr und deren Einstellungen abzufragen und zu ändern?',
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: '`timedatectl` verwaltet Zeit-, Datums- und Zeitzoneneinstellungen auf systemd-basierten Distributionen.',
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welche Software ist ein gängiger Ersatz für das klassische ntpd und darauf ausgelegt, die Zeit auf unregelmäßig verbundenen Systemen schneller und genauer zu synchronisieren?',
    options: ['chrony', 'timesync', 'sync-ntp', 'timed'],
    correct: 0,
    explanation: 'Chrony ist eine alternative NTP-Implementierung, die besonders gut für Systeme geeignet ist, die nicht immer online sind.',
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Auf welchen Zeitstandard wird die Hardware-Uhr (RTC) auf Linux-Servern normalerweise eingestellt?',
    options: ['Lokale Zeit', 'PST', 'UTC', 'GMT+1'],
    correct: 2,
    explanation: 'Linux-Systeme erwarten im Allgemeinen, dass die Hardware-Uhr in Coordinated Universal Time (UTC) läuft.',
  },

  // ─── 108.2 Systemprotokollierung (Logging) (5 Fragen) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welches Utility wird verwendet, um die automatische Rotation von Protokolldateien zu steuern, damit diese nicht die Festplatte füllen?',
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: 'logrotate rotiert, komprimiert und verwaltet die Aufbewahrungsdauer von Textprotokollen.'
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welcher journalctl-Befehl ermöglicht es Ihnen, Protokollmeldungen in Echtzeit anzuzeigen, während sie eingehen?',
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: '-f (follow) funktioniert ähnlich wie "tail -f" für das binäre Journal.'
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Wie heißt der systemd-Daemon, der Protokollmeldungen im Binärformat sammelt?',
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: 'systemd-journald ist der Daemon, der das binäre "Journal" verwaltet.'
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wo befindet sich die Hauptkonfigurationsdatei für den rsyslog-Daemon?',
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: '/etc/rsyslog.conf definiert, wie Protokolle gefiltert und wo sie gespeichert werden.',
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Befehl ermöglicht es einem Benutzer, manuell eine Nachricht an das Systemprotokoll aus einem Skript zu senden?',
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: 'Der Befehl `logger` ist eine Shell-Schnittstelle zum syslog(3)-Systemprotokollmodul.',
  },

  // ─── 108.3 Mail Transfer Agent (MTA) Grundlagen (5 Fragen) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'In welcher Konfigurationsdatei können Sie Aliase für lokale E-Mail-Adressen auf dem System definieren?',
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: '/etc/aliases definiert Umleitungen für lokale E-Mail-Nachrichten.'
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welches der folgenden ist KEIN Mail Transfer Agent (MTA)?',
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: 'Apache ist ein Webserver, kein Mail Transfer Agent.'
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl muss ausgeführt werden, nachdem /etc/aliases bearbeitet wurde, damit die Änderungen wirksam werden?',
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: '`newaliases` baut die Datenbank neu auf, die vom MTA für Lookups verwendet wird.',
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ermöglicht es einem Administrator, die aktuelle Warteschlange der ausgehenden E-Mail-Nachrichten anzuzeigen?',
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: '`mailq` (oder `mail -bp`) listet alle Nachrichten auf, die sich derzeit in der E-Mail-Warteschlange befinden.',
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Was ist in Postfix die primäre Konfigurationsdatei, um globale Parameter wie `myhostname` zu setzen?',
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: 'main.cf ist die Hauptkonfigurationsdatei für Postfix-Einstellungen.',
  },

  // ─── 108.4 Drucker und Drucken verwalten (5 Fragen) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Auf welchem Standardport antwortet die CUPS-Web-Administrationsoberfläche?',
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: 'CUPS verwendet Port 631 für das IPP-Protokoll und das Web-Interface.'
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um einen bestimmten Druckauftrag aus der Warteschlange zu entfernen?',
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: 'lprm (line printer remove) löscht Aufträge aus der CUPS-Warteschlange.'
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt den Status der Druckerwarteschlangen auf einem System an?',
    options: ['lpstat', 'lpq', 'lpc status', 'Alle oben genannten'],
    correct: 3,
    explanation: '`lpstat`, `lpq` und `lpc status` sind allesamt gültige Befehle, um den Druckerstatus in modernen CUPS-Umgebungen zu prüfen.',
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welches Tool ist der primäre Line-Printer-Befehl, um einen Auftrag an einen Drucker zu senden?',
    options: ['lp', 'lpr', 'Sowohl lp als auch lpr sind gültig', 'sendprint'],
    correct: 2,
    explanation: 'In CUPS werden sowohl der System-V-Befehl `lp` als auch der BSD-Befehl `lpr` offiziell unterstützt.',
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Wie heißt die Hauptkonfigurationsdatei für den CUPS-Daemon?',
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: '`cupsd.conf` ist die primäre Konfigurationsdatei für den CUPS-Scheduler.',
  },
];
