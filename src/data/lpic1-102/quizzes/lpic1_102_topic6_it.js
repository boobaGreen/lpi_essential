// LPIC-1 102 Quiz Pool — Italian — Topic 110 (Security)

export const lpic1_102_topic6Quizzes = [
  {
    topicId: 6,
    question: "Quale comando permette di trovare tutti i file nel sistema che hanno il bit SUID impostato?",
    options: [
      "ls -lR | grep suid",
      "find / -perm /4000",
      "check-suid /",
      "locate --perm suid"
    ],
    correct: 1,
    explanation: "find con -perm /4000 (o -4000) cerca i file con il bit SUID ( valore ottale 4000)."
  },
  {
    topicId: 6,
    question: "Attraverso quale comando è caldamente consigliato modificare il file /etc/sudoers per evitare errori di sintassi bloccanti?",
    options: [
      "nano /etc/sudoers",
      "visudo",
      "sudoedit",
      "vi /etc/sudoers"
    ],
    correct: 1,
    explanation: "visudo effettua un controllo sintattico prima di salvare il file, prevenendo errori che potrebbero bloccare l'accesso sudo."
  },
  {
    topicId: 6,
    question: "Cosa permette di fare il comando 'ssh-agent'?",
    options: [
      "Cifrare l'intero disco fisso",
      "Memorizzare le chiavi private decifrate per non reinserire la passphrase ad ogni connessione",
      "Generare una nuova coppia di chiavi SSH",
      "Monitorare i tentativi di accesso falliti via SSH"
    ],
    correct: 1,
    explanation: "L'agente SSH mantiene le chiavi in memoria durante la sessione dell'utente."
  },
  {
    topicId: 6,
    question: "Quale file viene usato per negare esplicitamente l'accesso a servizi protetti da TCP Wrappers?",
    options: [
      "/etc/deny.hosts",
      "/etc/hosts.deny",
      "/etc/network.deny",
      "/etc/firewall.deny"
    ],
    correct: 1,
    explanation: "TCP Wrappers usa /etc/hosts.allow e /etc/hosts.deny per controllare gli accessi."
  },
  {
    topicId: 6,
    question: "Qual è l'effetto dell'impostazione 'PermitRootLogin no' nel file sshd_config?",
    options: [
      "Impedisce a chiunque di connettersi come root via SSH",
      "Richiede una password speciale per l'utente root",
      "Permette l'accesso root solo tramite chiavi pubbliche",
      "Disabilita completamente l'account root sul sistema"
    ],
    correct: 0,
    explanation: "Questa direttiva è una best practice di sicurezza per impedire attacchi brute-force sull'account root via rete."
  },
  {
    topicId: 6,
    question: "Quale comando viene usato per limitare il numero massimo di processi aperti da un utente nella shell corrente?",
    options: [
      "limit",
      "ulimit",
      "sysctl",
      "quota"
    ],
    correct: 1,
    explanation: "ulimit (user limit) permette di impostare limiti sulle risorse del sistema per la shell e i processi figli."
  },
  {
    topicId: 6,
    question: "A cosa serve lo 'Sticky Bit' impostato su una directory come /tmp?",
    options: [
      "Rende i file nella directory immutabili",
      "Permette solo al proprietario del file (o a root) di eliminare o rinominare il file",
      "Cifra automaticamente tutti i file creati all'interno",
      "Assicura che la directory rimanga sempre in RAM"
    ],
    correct: 1,
    explanation: "Lo Sticky Bit su directory scrivibili da tutti garantisce che gli utenti non possano cancellare i file altrui."
  },
  {
    topicId: 6,
    question: "Quale utility GnuPG viene usata per cifrare un file in modo simmetrico (usando solo una password)?",
    options: [
      "gpg --gen-key",
      "gpg -c file",
      "gpg --encrypt file",
      "gpg --sign file"
    ],
    correct: 1,
    explanation: "L'opzione -c (symmetric) cifra il file chiedendo una passphrase manuale."
  }
];
