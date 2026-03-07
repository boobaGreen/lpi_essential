// LPIC-1 102 Quiz Pool — Italian — Topic 107 (Admin Tasks)

export const lpic1_102_topic3Quizzes_it = [
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
  },
  {
    topicId: 3,
    question: "Quale comando viene usato per gestire i parametri di invecchiamento della password (es. scadenza tra 90 giorni)?",
    options: [
      "passwd -e",
      "chage",
      "usermod -p",
      "expiry"
    ],
    correct: 1,
    explanation: "chage (change age) è lo strumento per gestire le policy di scadenza delle password."
  },
  {
    topicId: 3,
    question: "Quale comando mostra l'UID e i GID dell'utente corrente?",
    options: [
      "whoami",
      "id",
      "users",
      "groups"
    ],
    correct: 1,
    explanation: "Il comando 'id' fornisce informazioni complete sull'identità di un utente."
  },
  {
    topicId: 3,
    question: "Quale file contiene l'elenco dei gruppi e dei loro membri?",
    options: [
      "/etc/groups",
      "/etc/group",
      "/etc/passwd",
      "/etc/shadow"
    ],
    correct: 1,
    explanation: "/etc/group definisce i gruppi disponibili sul sistema."
  },
  {
    topicId: 3,
    question: "Quale comando aggiunge un utente a un gruppo secondario senza rimuoverlo dai gruppi esistenti?",
    options: [
      "usermod -g gruppo user",
      "usermod -aG gruppo user",
      "useradd -G gruppo user",
      "groupmod -A user gruppo"
    ],
    correct: 1,
    explanation: "'usermod -aG' aggiunge l'utente ai gruppi specificati (append)."
  },
  {
    topicId: 3,
    question: "Quale comando elimina un account utente e rimuove (opzionalmente) la sua home directory?",
    options: [
      "userdel -r",
      "userrm",
      "rmuser",
      "deleteuser"
    ],
    correct: 0,
    explanation: "L'opzione -r di userdel rimuove anche la directory home e i file associati."
  },
  {
    topicId: 3,
    question: "Quale directory viene usata per i cron job di sistema che devono essere eseguiti ogni ora?",
    options: [
      "/etc/cron.hourly",
      "/etc/cron.hour",
      "/var/cron/hourly",
      "/etc/crontab/hour"
    ],
    correct: 0,
    explanation: "/etc/cron.hourly/ contiene gli script eseguiti con cadenza oraria."
  },
  {
    topicId: 3,
    question: "Quale strumento permette di eseguire job pianificati gestendo i casi in cui il sistema era spento all'ora programmata?",
    options: [
      "cron",
      "anacron",
      "at",
      "systemd-timer"
    ],
    correct: 1,
    explanation: "anacron è progettato per sistemi che non sono sempre accesi."
  },
  {
    topicId: 3,
    question: "In che modo si modifica in sicurezza il proprio file crontab personale?",
    options: [
      "vi /etc/crontab",
      "crontab -e",
      "crontab -edit",
      "nano /var/spool/cron/crontabs/user"
    ],
    correct: 1,
    explanation: "'crontab -e' apre l'editor predefinito e valida la sintassi all'uscita."
  },
  {
    topicId: 3,
    question: "Quale file specifica gli utenti che NON possono usare il comando 'at'?",
    options: [
      "/etc/at.allow",
      "/etc/at.deny",
      "/etc/cron.deny",
      "/etc/security/at"
    ],
    correct: 1,
    explanation: "/etc/at.deny elenca gli utenti a cui è proibita la pianificazione con 'at'."
  },
  {
    topicId: 3,
    question: "Quale variabile d'ambiente specifica la lingua e la codifica predefinita del sistema?",
    options: [
      "LANGUAGE",
      "LOCALE",
      "LANG",
      "LC_ALL"
    ],
    correct: 2,
    explanation: "LANG è la variabile principale per le impostazioni di localizzazione."
  },
  {
    topicId: 3,
    question: "Quale comando converte la codifica di un file (es. da ISO-8859-1 a UTF-8)?",
    options: [
      "convert",
      "recode",
      "iconv",
      "translate"
    ],
    correct: 2,
    explanation: "iconv è lo strumento standard per la conversione dei set di caratteri."
  },
  {
    topicId: 3,
    question: "Qual è lo scopo principale di Unicode e della sua codifica UTF-8?",
    options: [
      "Comprimere i file di testo",
      "Fornire un set di caratteri universale per tutte le lingue",
      "Crittografare il traffico web",
      "Velocizzare le query dei database"
    ],
    correct: 1,
    explanation: "Unicode assegna un numero unico a ogni carattere di ogni lingua del mondo."
  }
];
