// LPIC-1 102 Quiz Pool — Italian — Topic 108 (Essential Services)

export const lpic1_102_topic4Quizzes = [
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
  }
];
