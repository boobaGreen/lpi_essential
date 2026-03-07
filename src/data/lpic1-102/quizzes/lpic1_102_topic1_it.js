// LPIC-1 102 Quiz Pool — Italian — Topic 105 (Shells & Shell Scripting)

export const lpic1_102_topic1Quizzes_it = [
  {
    topicId: 1,
    question: "Quale file viene caricato per primo da una login shell Bash su un sistema Linux standard?",
    options: [
      "~/.bashrc",
      "/etc/profile",
      "~/.bash_profile",
      "/etc/bashrc"
    ],
    correct: 1,
    explanation: "/etc/profile è il file di configurazione globale caricato per primo dalle login shell."
  },
  {
    topicId: 1,
    question: "Quale comando permette di rendere una variabile di shell disponibile ai processi figli?",
    options: [
      "set",
      "env",
      "export",
      "declare -l"
    ],
    correct: 2,
    explanation: "export marca una variabile per essere esportata nell'ambiente dei processi derivati."
  },
  {
    topicId: 1,
    question: "Cosa contiene la directory /etc/skel?",
    options: [
      "I file binari essenziali per il sistema",
      "I file di configurazione del kernel",
      "I file predefiniti copiati nella home directory di un nuovo utente",
      "I file temporanei eliminati al riavvio"
    ],
    correct: 2,
    explanation: "/etc/skel (skeleton) fornisce il template per la home directory dei nuovi utenti."
  },
  {
    topicId: 1,
    question: "Qual è la funzione del costrutto 'set -e' in uno script Bash?",
    options: [
      "Abilita la modalità di debug (echo dei comandi)",
      "Termina immediatamente lo script se un comando fallisce (exit code != 0)",
      "Esporta tutte le variabili definite nello script",
      "Permette l'uso di alias all'interno dello script"
    ],
    correct: 1,
    explanation: "'set -e' (errexit) provoca l'uscita dello script al primo errore riscontrato."
  },
  {
    topicId: 1,
    question: "In uno script Bash, a cosa corrisponde la variabile speciale $#?",
    options: [
      "Al Process ID (PID) dello script",
      "Al codice di uscita dell'ultimo comando",
      "Al numero di argomenti passati allo script",
      "Al nome dello script stesso"
    ],
    correct: 2,
    explanation: "$# contiene il conteggio dei parametri posizionali passati."
  },
  {
    topicId: 1,
    question: "Quale operatore viene usato per eseguire un comando solo se quello precedente è fallito?",
    options: [
      "&&",
      "||",
      ";",
      "&"
    ],
    correct: 1,
    explanation: "|| è l'operatore logico OR; esegue il comando a destra solo se quello a sinistra restituisce un errore."
  },
  {
    topicId: 1,
    question: "Quale comando viene usato per leggere ed eseguire i comandi di un file nella shell corrente?",
    options: [
      "sh",
      "bash",
      "source",
      "exec"
    ],
    correct: 2,
    explanation: "source (o il built-in '.') esegue il file nel contesto della shell attuale, mantenendo le variabili definite."
  },
  {
    topicId: 1,
    question: "Qual è lo scopo dello 'shebang' (#!/bin/bash) all'inizio di un file?",
    options: [
      "Indica che il file è protetto da scrittura",
      "Specifica il percorso dell'interprete da usare per eseguire il file",
      "È un commento che descrive l'autore dello script",
      "Serve per caricare le librerie grafiche"
    ],
    correct: 1,
    explanation: "Lo shebang indica al kernel quale programma caricare per interpretare il resto del file."
  },
  {
    topicId: 1,
    question: "Quale file viene eseguito quando un utente chiude una login shell Bash?",
    options: [
      "~/.bashrc",
      "~/.bash_logout",
      "/etc/bash_exit",
      "~/.profile"
    ],
    correct: 1,
    explanation: "~/.bash_logout è progettato per compiti di pulizia alla chiusura di una login shell."
  },
  {
    topicId: 1,
    question: "In quale file dovrebbero essere definiti gli alias di sistema validi per tutti gli utenti?",
    options: [
      "~/.bashrc",
      "/etc/bash.bashrc o /etc/bashrc",
      "~/.profile",
      "/etc/skel/.bashrc"
    ],
    correct: 1,
    explanation: "Gli alias globali sono solitamente configurati in /etc/bash.bashrc o /etc/bashrc."
  },
  {
    topicId: 1,
    question: "Qual è il percorso di ricerca (path) che la shell usa per trovare gli alias?",
    options: [
      "PATH",
      "ALIAS_PATH",
      "La shell non usa un percorso su disco per gli alias",
      "BASH_ALIASES"
    ],
    correct: 2,
    explanation: "I sinonimi (alias) sono memorizzati direttamente nella sessione della shell corrente."
  },
  {
    topicId: 1,
    question: "Quale comando mostra tutte le variabili d'ambiente attualmente definite?",
    options: [
      "set",
      "env",
      "export -p",
      "Sia env che export -p"
    ],
    correct: 3,
    explanation: "env mostra le variabili esportate, mentre export -p le elenca in un formato riutilizzabile dalla shell."
  },
  {
    topicId: 1,
    question: "Come si rimuove una variabile d'ambiente chiamata 'DATI_TEMP' per il resto della sessione?",
    options: [
      "delete DATI_TEMP",
      "clear DATI_TEMP",
      "unset DATI_TEMP",
      "rm $DATI_TEMP"
    ],
    correct: 2,
    explanation: "Il comando 'unset' rimuove una variabile o una funzione dall'ambiente della shell."
  },
  {
    topicId: 1,
    question: "Quale funzionalità di Bash permette di usare 'll' invece di digitare 'ls -l'?",
    options: [
      "Funzione",
      "Link",
      "Alias",
      "Ridirezione"
    ],
    correct: 2,
    explanation: "Un alias fornisce un modo abbreviato per eseguire comandi lunghi con flag specifici."
  },
  {
    topicId: 1,
    question: "In uno script Bash, come si assegna correttamente l'output del comando 'whoami' a una variabile chiamata 'UTENTE'?",
    options: [
      "UTENTE = whoami",
      "UTENTE=$(whoami)",
      "set UTENTE whoami",
      "UTENTE : whoami"
    ],
    correct: 1,
    explanation: "$(comando) esegue la sostituzione di comando nelle shell moderne."
  },
  {
    topicId: 1,
    question: "Qual è il codice di uscita (exit code) di un comando terminato con successo?",
    options: [
      "0",
      "1",
      "255",
      "-1"
    ],
    correct: 0,
    explanation: "In ambiente Unix/Linux, 0 indica successo; ogni altro valore indica un errore."
  },
  {
    topicId: 1,
    question: "Come si verifica se un file chiamato 'dati.txt' esiste all'interno di uno script?",
    options: [
      "[ -e dati.txt ]",
      "[ -f dati.txt ]",
      "if exists dati.txt",
      "Sia [ -e dati.txt ] che [ -f dati.txt ] sono validi"
    ],
    correct: 3,
    explanation: "-e verifica l'esistenza; -f verifica specificamente che sia un file regolare."
  },
  {
    topicId: 1,
    question: "Cosa rappresenta la variabile '$?' in uno script di shell?",
    options: [
      "Il PID della shell corrente",
      "Lo stato di uscita dell'ultimo comando eseguito",
      "Il primo argomento dello script",
      "Un numero casuale"
    ],
    correct: 1,
    explanation: "$? cattura il codice di ritorno dell'ultimo comando eseguito in foreground."
  },
  {
    topicId: 1,
    question: "Quale struttura di ciclo useresti per iterare attraverso una lista di nomi di file?",
    options: [
      "for",
      "while",
      "until",
      "repeat"
    ],
    correct: 0,
    explanation: "Il ciclo 'for' è l'ideale per iterare su una lista definita di elementi."
  },
  {
    topicId: 1,
    question: "Qual è la sintassi corretta per una condizione 'if' in Bash?",
    options: [
      "if [ $val -gt 10 ] then ... fi",
      "if [ $val -gt 10 ]; then ... fi",
      "if (val > 10) { ... }",
      "if [ $val > 10 ] then ... fi"
    ],
    correct: 1,
    explanation: "Bash richiede la parola chiave 'then' (spesso sulla stessa riga dopo un punto e virgola) e termina con 'fi'."
  }
];
