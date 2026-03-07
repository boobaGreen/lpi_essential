// LPIC-1 102 Quiz Pool — Italian — Topic 110 (Security)

export const lpic1_102_topic6Quizzes_it = [
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
  },
  {
    topicId: 6,
    question: "Quale comando mostra l'elenco degli ultimi utenti che hanno effettuato l'accesso e l'orario del login?",
    options: [
      "who",
      "last",
      "w",
      "history"
    ],
    correct: 1,
    explanation: "Il comando 'last' legge il file /var/log/wtmp per mostrare lo storico dei login."
  },
  {
    topicId: 6,
    question: "In che modo si concedono privilegi amministrativi a un intero gruppo nel file /etc/sudoers?",
    options: [
      "ADMIN ALL=(ALL) ALL",
      "%admin ALL=(ALL) ALL",
      "group admin: ALL",
      "@admin ALL=(ALL) ALL"
    ],
    correct: 1,
    explanation: "Il prefisso '%' nel file sudoers indica che il nome seguente è un gruppo di sistema."
  },
  {
    topicId: 6,
    question: "Quale comando elenca tutti i file aperti e i processi che li hanno aperti, utile per l'auditing di sicurezza?",
    options: [
      "lsopen",
      "fileshow",
      "lsof",
      "procview"
    ],
    correct: 2,
    explanation: "'lsof' (List Open Files) è uno strumento essenziale per verificare quali processi accedono a file o socket."
  },
  {
    topicId: 6,
    question: "In quale file si possono impostare limiti persistenti per utente sulle risorse (es. dimensione file, numero loginabili)?",
    options: [
      "/etc/limits",
      "/etc/security/limits.conf",
      "/etc/profile",
      "/etc/sysctl.conf"
    ],
    correct: 1,
    explanation: "/etc/security/limits.conf è usato dal modulo PAM pam_limits per imporre restrizioni sulle risorse."
  },
  {
    topicId: 6,
    question: "Quale comando permette di identificare quali porte di rete sono attualmente aperte e in ascolto sul server?",
    options: [
      "nmap localhost",
      "ss -tuln",
      "netstat -an",
      "Tutti i precedenti"
    ],
    correct: 3,
    explanation: "nmap, ss e netstat possono essere tutti usati per auditare i servizi di rete in ascolto."
  },
  {
    topicId: 6,
    question: "Come si elencano tutte le chiavi pubbliche presenti nel proprio portachiavi GPG?",
    options: [
      "gpg --show-keys",
      "gpg --list-keys",
      "gpg --keys-all",
      "gpg -k"
    ],
    correct: 1,
    explanation: "gpg --list-keys (o gpg -k) mostra le chiavi pubbliche memorizzate localmente."
  },
  {
    topicId: 6,
    question: "Quale problema di sicurezza risolvono le 'shadow passwords'?",
    options: [
      "Impediscono agli utenti di loggarsi più volte",
      "Spostano gli hash delle password in un file leggibile solo da root",
      "Impongono automaticamente password complesse",
      "Crittografano il nome utente"
    ],
    correct: 1,
    explanation: "Il file /etc/passwd è leggibile da tutti; spostando gli hash in /etc/shadow si prevengono attacchi di cracking offline."
  },
  {
    topicId: 6,
    question: "Quale strumento viene usato per generare una nuova coppia di chiavi SSH (pubblica/privata)?",
    options: [
      "ssh-create",
      "ssh-keygen",
      "ssh-init",
      "keytool"
    ],
    correct: 1,
    explanation: "ssh-keygen è il tool standard per creare chiavi di autenticazione per SSH."
  },
  {
    topicId: 6,
    question: "Dove viene solitamente memorizzata la chiave pubblica di un utente su un server remoto per permettere il login senza password?",
    options: [
      "~/.ssh/id_rsa.pub",
      "~/.ssh/authorized_keys",
      "/etc/ssh/authorized_keys",
      "~/.ssh/known_hosts"
    ],
    correct: 1,
    explanation: "Il file 'authorized_keys' contiene le chiavi pubbliche autorizzate ad accedere a quell'account."
  },
  {
    topicId: 6,
    question: "Qual è il nome predefinito per il file della chiave privata RSA di un utente?",
    options: [
      "id_rsa.pub",
      "id_rsa",
      "ssh_key",
      "private_key"
    ],
    correct: 1,
    explanation: "id_rsa è il nome standard per la parte privata di una coppia di chiavi RSA."
  },
  {
    topicId: 6,
    question: "Quale comando permette di copiare facilmente la propria chiave pubblica SSH su un server remoto?",
    options: [
      "ssh-install",
      "ssh-push-key",
      "ssh-copy-id",
      "scp-id"
    ],
    correct: 2,
    explanation: "ssh-copy-id gestisce la connessione e aggiunge la chiave al file authorized_keys remoto."
  },
  {
    topicId: 6,
    question: "Quale impostazione in sshd_config deve essere impostata a 'no' per imporre SOLO l'autenticazione tramite chiavi?",
    options: [
      "PasswordAuthentication no",
      "KeyOnly yes",
      "DisablePasswords yes",
      "PermitKeysOnly"
    ],
    correct: 0,
    explanation: "Disabilitando PasswordAuthentication, le chiavi SSH diventano l'unico metodo di accesso possibile."
  }
];
