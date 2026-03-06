// LPIC-1 102 Quiz Pool — Italian — Topic 107 (Admin Tasks)

export const lpic1_102_topic3Quizzes = [
  {
    topicId: 3,
    question: "In quale file vengono memorizzati gli hash delle password degli utenti in modo sicuro (accessibile solo a root)?",
    options: [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/safe",
      "/etc/gshadow"
    ],
    correct: 1,
    explanation: "/etc/shadow contiene le password criptate e i dati sulla loro scadenza."
  },
  {
    topicId: 3,
    question: "Quale campo nel file /etc/passwd rappresenta l'identificatore unico dell'utente (UID)?",
    options: [
      "Il primo campo",
      "Il secondo campo",
      "Il terzo campo",
      "Il quarto campo"
    ],
    correct: 2,
    explanation: "Il formato è: username:x:UID:GID:... quindi l'UID è il terzo campo."
  },
  {
    topicId: 3,
    question: "Quale comando viene usato per forzare un utente a cambiare la password al prossimo login?",
    options: [
      "chage -d 0 utente",
      "passwd -f utente",
      "usermod -p 0 utente",
      "chage -E 0 utente"
    ],
    correct: 0,
    explanation: "Impostando la data dell'ultimo cambio a 0 (1 genn 1970), il sistema richiede il cambio immediato."
  },
  {
    topicId: 3,
    question: "Nella sintassi di crontab, cosa rappresenta il terzo campo?",
    options: [
      "L'ora",
      "Il giorno del mese",
      "Il giorno della settimana",
      "I minuti"
    ],
    correct: 1,
    explanation: "L'ordine è: minuti ore giorno_mese mese giorno_sett."
  },
  {
    topicId: 3,
    question: "Quale comando permette di visualizzare i job pianificati per una sola esecuzione (at)?",
    options: [
      "at -l",
      "atq",
      "cron -l",
      "atlist"
    ],
    correct: 1,
    explanation: "atq (at queue) mostra l'elenco dei job pianificati con il comando at."
  },
  {
    topicId: 3,
    question: "Quale variabile d'ambiente sovrascrive TUTTE le altre impostazioni di localizzazione?",
    options: [
      "LANG",
      "LC_ALL",
      "LC_LANG",
      "LOCALES"
    ],
    correct: 1,
    explanation: "LC_ALL ha la precedenza su LANG e su tutte le variabili LC_ specifiche."
  },
  {
    topicId: 3,
    question: "Come viene configurato il fuso orario (timezone) in modo tradizionale su sistemi Linux?",
    options: [
      "Modificando /etc/clock",
      "Creando un link simbolico da /usr/share/zoneinfo/... a /etc/localtime",
      "Eseguendo il comando timezoneit",
      "Modificando il file /boot/config"
    ],
    correct: 1,
    explanation: "Il link simbolico /etc/localtime è il metodo standard per definire la timezone locale."
  },
  {
    topicId: 3,
    question: "Quale directory contiene i file predefiniti per la creazione di nuovi profili utente?",
    options: [
      "/etc/defaults",
      "/etc/skel",
      "/usr/share/skel",
      "/etc/user-defaults"
    ],
    correct: 1,
    explanation: "/etc/skel viene usato come template dal comando useradd."
  }
];
