// LPIC-1 102 Quiz Pool — Italian — Topic 105 (Shells & Shell Scripting)

export const lpic1_102_topic1Quizzes = [
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
  }
];
