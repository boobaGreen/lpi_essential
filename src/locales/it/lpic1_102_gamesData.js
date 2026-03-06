// LPIC-1 102 Games Data — Italian (Topic 105)

export const memoryGameData = [
  { command: '/etc/profile', description: 'Configurazione globale login shell' },
  { command: '~/.bashrc', description: 'Configurazione interattiva utente' },
  { command: 'export VAR="val"', description: 'Esporta variabile ai processi figli' },
  { command: 'alias ll="ls -la"', description: 'Crea un alias per un comando' },
  { command: '/etc/skel/', description: 'Template per nuove home directory' },
  { command: '#!/bin/bash', description: 'Shebang per interprete Bash' },
  { command: 'chmod +x script.sh', description: 'Rende uno script eseguibile' },
  { command: '$(comando)', description: 'Sostituzione di comando' },
  { command: 'source file', description: 'Esegue script nella shell corrente' },
  { command: 'env', description: 'Mostra variabili d\'ambiente' },
  // Topic 106
  { command: 'DISPLAY', description: 'Variabile indirizzo server grafico' },
  { command: 'xhost', description: 'Gestione permessi accesso server X' },
  { command: 'GDM/SDDM', description: 'Esempi di Display Manager' },
  { command: 'KDE/GNOME', description: 'Esempi di Desktop Environment' },
  { command: 'Wayland', description: 'Successore moderno di X11' },
  { command: 'Orca', description: 'Lettore di schermo (Accessibilità)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Password criptate e scadenze' },
  { command: 'chage', description: 'Gestione invecchiamento password' },
  { command: 'crontab -e', description: 'Modifica i job pianificati' },
  { command: 'at', description: 'Esecuzione singola posticipata' },
  { command: 'LC_ALL', description: 'Sovrascrive tutte le locali' },
  { command: 'timedatectl', description: 'Gestione ora e fuso orario' },
];

export const trueFalseData = [
  { text: '/etc/skel contiene i file copiati nelle nuove home directory.', answer: true, explanation: 'Corretto! È la directory "skeleton" per i nuovi utenti.', difficulty: 1 },
  { text: 'Lo shebang #! deve essere nell\'ultima riga dello script.', answer: false, explanation: 'Falso! Deve essere assolutamente nella prima riga.', difficulty: 1 },
  { text: 'L\'operatore && esegue il secondo comando solo se il primo fallisce.', answer: false, explanation: 'Falso! && esegue se il primo ha SUCCESSO. || esegue se fallisce.', difficulty: 2 },
  { text: '~/.bash_logout viene eseguito quando si chiude una login shell.', answer: true, explanation: 'Corretto! È usato per pulizie post-sessione.', difficulty: 2 },
  // Topic 106
  { text: 'X11 è un protocollo "network transparent".', answer: true, explanation: 'Vero! Permette di eseguire app grafiche su rete.', difficulty: 1 },
  { text: 'Un Window Manager (WM) gestisce il login grafico.', answer: false, explanation: 'Falso! Il login è gestito dal Display Manager (DM).', difficulty: 1 },
  { text: 'Wayland è considerato più sicuro del vecchio protocollo X11.', answer: true, explanation: 'Vero! Ha un isolamento tra finestre migliore.', difficulty: 2 },
  // Topic 107
  { text: '/etc/passwd contiene le password criptate.', answer: false, explanation: 'Falso! Sono in /etc/shadow. In passwd c\'è solo una "x".', difficulty: 1 },
  { text: 'In crontab, il primo campo rappresenta le ore.', answer: false, explanation: 'Falso! Il primo campo sono i minuti.', difficulty: 1 },
  { text: 'Il comando atq mostra i job in attesa di esecuzione.', answer: true, explanation: 'Vero! "atq" sta per "at queue".', difficulty: 2 },
];

export const terminalChallengeData = [
  { id: 'tc-102-1', description: 'Esporta la variabile EDITOR come nano', prompt: 'export EDITOR=nano', expectedOutput: '', hint: 'Usa export', difficulty: 1 },
  { id: 'tc-102-2', description: 'Crea un alias "c" per il comando clear', prompt: 'alias c=clear', expectedOutput: '', hint: 'Usa alias', difficulty: 1 },
  { id: 'tc-102-3', description: 'Esegui il file .bashrc nella shell corrente', prompt: 'source ~/.bashrc', expectedOutput: '', hint: 'Usa source o il punto .', difficulty: 2 },
  // Topic 106
  { id: 'tc-102-4', description: 'Mostra info sul server X corrente', prompt: 'xdpyinfo', expectedOutput: '', hint: 'Usa xdpyinfo', difficulty: 2 },
  { id: 'tc-102-5', description: 'Abilita accesso a ogni client (insicuro)', prompt: 'xhost +', expectedOutput: '', hint: 'Usa xhost +', difficulty: 3 },
  // Topic 107
  { id: 'tc-102-6', description: 'Mostra il tuo UID e i tuoi gruppi', prompt: 'id', expectedOutput: '', hint: 'Usa id', difficulty: 1 },
  { id: 'tc-102-7', description: 'Lista i timer attivi nel sistema', prompt: 'systemctl list-timers', expectedOutput: '', hint: 'Usa systemctl', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-bash-files',
    category: 'File di Configurazione',
    question: 'Abbina il file al suo scopo:',
    items: [
      { text: '/etc/profile', matches: 'Globale (Login)' },
      { text: '~/.bashrc', matches: 'Utente (Interactive)' },
      { text: '/etc/skel', matches: 'Template nuovi utenti' },
      { text: '~/.bash_logout', matches: 'Chiusura sessione' },
    ],
  },
  {
    id: 'dd-desktop-comps',
    category: 'Componenti Grafici',
    question: 'Abbina il componente al suo tipo:',
    items: [
      { text: 'Mutter/KWin', matches: 'Window Manager' },
      { text: 'GDM/LightDM', matches: 'Display Manager' },
      { text: 'Orca', matches: 'Accessibilità' },
      { text: 'Qt/GTK', matches: 'Toolkit GUI' },
    ],
  },
  {
    id: 'dd-admin-files',
    category: 'File Amministrativi',
    question: 'Abbina il file al suo contenuto:',
    items: [
      { text: '/etc/shadow', matches: 'Password hash' },
      { text: '/etc/passwd', matches: 'User info (UID)' },
      { text: '/etc/group', matches: 'Group info' },
      { text: '/etc/localtime', matches: 'Timezone' },
    ],
  }
];

export const fillGapData = [
  { prompt: '_____ VAR="valore"', answer: 'export', hint: 'Rende variabile globale', difficulty: 1 },
  { prompt: '#!/bin/_____', answer: 'bash', hint: 'Interprete comune', difficulty: 1 },
  { prompt: 'if [ $V -eq 1 ]; _____ echo "Ok"; fi', answer: 'then', hint: 'Seguente alla condizione if', difficulty: 2 },
  // Topic 106
  { prompt: 'Variabile per output grafico: _____', answer: 'DISPLAY', hint: 'Inizia con D', difficulty: 1 },
  { prompt: 'Tool x accessibilità non vedenti: _____', answer: 'Orca', hint: 'Simile a una balena', difficulty: 2 },
  // Topic 107
  { prompt: 'Comando per editare crontab: crontab -_____', answer: 'e', hint: 'Stà per edit', difficulty: 1 },
  { prompt: 'Variabile locale principale: _____', answer: 'LANG', hint: 'Inizia con L', difficulty: 1 },
];


