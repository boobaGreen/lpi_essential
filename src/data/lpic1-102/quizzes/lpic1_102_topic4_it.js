// LPIC-1 102 Quiz Pool — Italian — Topic 108 (Essential Services)

export const lpic1_102_topic4Quizzes_it = [
  {
    topicId: 4,
    question: "Quale comando permette di sincronizzare l'orologio hardware (RTC) con l'orologio di sistema (software)?",
    options: [
      "date --sync",
      "hwclock --systohc",
      "hwclock --hctosys",
      "swclock --write"
    ],
    correct: 1,
    explanation: "--systohc copia il valore dal sistema (System) all'hardware (HC)."
  },
  {
    topicId: 4,
    question: "Attraverso quale file di configurazione è possibile definire alias per gli indirizzi e-mail locali del sistema?",
    options: [
      "/etc/mail.conf",
      "/etc/postfix/main.cf",
      "/etc/aliases",
      "~/.mailrc"
    ],
    correct: 2,
    explanation: "/etc/aliases definisce i reindirizzamenti dei messaggi locali."
  },
  {
    topicId: 4,
    question: "Quale utility viene usata per gestire la rotazione automatica dei file di log per evitare che riempiano il disco?",
    options: [
      "logrotate",
      "syslog-rotate",
      "journalctl --vacuum",
      "cron-log"
    ],
    correct: 0,
    explanation: "logrotate ruota, comprime e gestisce la longevità dei log testuali."
  },
  {
    topicId: 4,
    question: "Quale comando journalctl permette di visualizzare i messaggi di log in tempo reale (man mano che arrivano)?",
    options: [
      "journalctl -r",
      "journalctl -f",
      "journalctl -u",
      "journalctl -n"
    ],
    correct: 1,
    explanation: "-f (follow) permette di vedere i log in tempo reale, similmente a 'tail -f'."
  },
  {
    topicId: 4,
    question: "Su quale porta di default risponde l'interfaccia web di amministrazione di CUPS?",
    options: [
      "80",
      "443",
      "631",
      "9100"
    ],
    correct: 2,
    explanation: "CUPS usa la porta 631 per l'interfaccia web e il protocollo IPP."
  },
  {
    topicId: 4,
    question: "Quale dei seguenti NON è un Mail Transfer Agent (MTA)?",
    options: [
      "Postfix",
      "Exim",
      "Apache",
      "Sendmail"
    ],
    correct: 2,
    explanation: "Apache è un web server, non un gestore di posta elettronica."
  },
  {
    topicId: 4,
    question: "Quale comando viene usato per rimuovere un lavoro di stampa specifico dalla coda?",
    options: [
      "lprm",
      "lpc remove",
      "cancel -all",
      "printdel"
    ],
    correct: 0,
    explanation: "lprm (line printer remove) cancella i job dalla coda di CUPS."
  },
  {
    topicId: 4,
    question: "Come viene chiamato il demone systemd che raccoglie i messaggi di log in formato binario?",
    options: [
      "syslogd",
      "journald",
      "logd",
      "binarylogd"
    ],
    correct: 1,
    explanation: "systemd-journald è il demone che gestisce il 'journal' binario."
  },
  {
    topicId: 4,
    question: "Qual è il protocollo standard usato per sincronizzare l'orario di sistema attraverso una rete?",
    options: [
      "SMTP",
      "NTP",
      "SNMP",
      "TIME-P"
    ],
    correct: 1,
    explanation: "Il Network Time Protocol (NTP) è usato per mantenere gli orologi sincronizzati tramite server di riferimento."
  },
  {
    topicId: 4,
    question: "Quale utility moderna di systemd viene usata per interrogare e cambiare le impostazioni dell'orologio di sistema?",
    options: [
      "clocktool",
      "timeconfig",
      "timedatectl",
      "sysclock"
    ],
    correct: 2,
    explanation: "'timedatectl' gestisce ora, data e timezone nelle distribuzioni basate su systemd."
  },
  {
    topicId: 4,
    question: "Quale software è un comune sostituto di ntpd, progettato per sincronizzare l'ora più velocemente su sistemi non sempre connessi?",
    options: [
      "chrony",
      "timesync",
      "sync-ntp",
      "timed"
    ],
    correct: 0,
    explanation: "Chrony è un'implementazione NTP eccellente per server e notebook che non hanno connettività costante."
  },
  {
    topicId: 4,
    question: "L'orologio hardware (RTC) sui server Linux è solitamente impostato su quale standard temporale?",
    options: [
      "Ora Locale",
      "PST",
      "UTC",
      "GMT+1"
    ],
    correct: 2,
    explanation: "I sistemi Linux generalmente si aspettano che l'orologio hardware sia in Coordinated Universal Time (UTC)."
  },
  {
    topicId: 4,
    question: "Dove si trova il file di configurazione principale del demone rsyslog?",
    options: [
      "/etc/rsyslog.conf",
      "/etc/syslog.conf",
      "/etc/log.conf",
      "/usr/share/rsyslog/rsyslog.conf"
    ],
    correct: 0,
    explanation: "/etc/rsyslog.conf definisce come i log vengono filtrati e dove vengono salvati."
  },
  {
    topicId: 4,
    question: "Quale comando permette a un utente di inviare manualmente un messaggio ai log di sistema da uno script?",
    options: [
      "log",
      "syslog",
      "logger",
      "writelog"
    ],
    correct: 2,
    explanation: "Il comando 'logger' fornisce un'interfaccia shell al modulo di sistema syslog."
  },
  {
    topicId: 4,
    question: "Quale comando deve essere eseguito dopo aver modificato /etc/aliases per rendere effettive le modifiche?",
    options: [
      "newaliases",
      "postfix restart",
      "alias -u",
      "rehash"
    ],
    correct: 0,
    explanation: "newaliases ricostruisce il database degli alias usato dall'MTA per la consegna locale."
  },
  {
    topicId: 4,
    question: "Quale comando permette a un amministratore di vedere la coda attuale dei messaggi e-mail in uscita?",
    options: [
      "mailp",
      "mailq",
      "ls -l /var/spool/mail",
      "atq"
    ],
    correct: 1,
    explanation: "'mailq' elenca tutti i messaggi attualmente presenti nella spool queue di posta."
  },
  {
    topicId: 4,
    question: "In Postfix, qual è il file di configurazione principale usato per impostare parametri globali come 'myhostname'?",
    options: [
      "/etc/postfix/master.cf",
      "/etc/postfix/main.cf",
      "/etc/mail/postfix.cf",
      "/etc/postfix.cf"
    ],
    correct: 1,
    explanation: "main.cf è il file di configurazione principale per i parametri di Postfix."
  },
  {
    topicId: 4,
    question: "Quale comando mostra lo stato delle code di stampa sul sistema?",
    options: [
      "lpstat",
      "lpq",
      "lpc status",
      "Tutti i precedenti"
    ],
    correct: 3,
    explanation: "lpstat, lpq e lpc status sono tutti comandi validi per controllare lo stato delle stampanti in CUPS."
  },
  {
    topicId: 4,
    question: "Qual è il comando principale (stile System V) usato per inviare un lavoro alla stampante?",
    options: [
      "lp",
      "lpr",
      "Sia lp che lpr sono validi",
      "sendprint"
    ],
    correct: 2,
    explanation: "CUPS supporta sia 'lp' (System V) che 'lpr' (BSD) per l'invio dei job di stampa."
  },
  {
    topicId: 4,
    question: "Qual è il nome del file di configurazione principale per il demone CUPS?",
    options: [
      "/etc/cups/cups.conf",
      "/etc/cups/cupsd.conf",
      "/etc/print/cupsd.conf",
      "/usr/share/cups/config"
    ],
    correct: 1,
    explanation: "cupsd.conf è il file di configurazione principale per lo scheduler di stampa CUPS."
  }
];
