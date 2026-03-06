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
  // Topic 108
  { command: 'hwclock', description: 'Gestione orologio hardware RTC' },
  { command: 'chrony', description: 'Sincronizzazione ora (NTP)' },
  { command: 'journalctl', description: 'Lettura log di systemd' },
  { command: 'logrotate', description: 'Rotazione automatica dei log' },
  { command: 'Postfix/Exim', description: 'Esempi di MTA (Mail)' },
  { command: 'CUPS', description: 'Sistema di stampa Linux' },
  // Topic 109
  { command: 'ip addr', description: 'Visualizza indirizzi IP' },
  { command: 'nmcli', description: 'Configurazione rete CLI' },
  { command: 'ping', description: 'Verifica connettività host' },
  { command: 'traceroute', description: 'Traccia hop verso destinazione' },
  { command: 'dig', description: 'Query DNS' },
  { command: '/etc/hosts', description: 'Mapping IP-Nome locale' },
  // Topic 110
  { command: 'SUID/SGID', description: 'Permessi speciali esecuzione' },
  { command: 'Sticky Bit', description: 'Protezione eliminazione file' },
  { command: 'visudo', description: 'Modifica sicura di /etc/sudoers' },
  { command: 'ss -tulpn', description: 'Mostra servizi in ascolto' },
  { command: 'ssh-keygen', description: 'Generazione chiavi SSH' },
  { command: 'gpg -c', description: 'Cifratura simmetrica file' },
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
  // Topic 108
  { text: 'CUPS è accessibile via web sulla porta 631.', answer: true, explanation: 'Vero! È lo standard per CUPS.', difficulty: 1 },
  { text: 'journalctl permette di leggere log in formato binario.', answer: true, explanation: 'Vero! Il journal di systemd è binario per performance.', difficulty: 1 },
  { text: 'L\'MTA Sendmail è semplice da configurare manualmente.', answer: false, explanation: 'Falso! È noto per essere molto complesso (m4).', difficulty: 2 },
  // Topic 109
  { text: 'Il file /etc/hosts ha priorità sul DNS (default).', answer: true, explanation: 'Vero! Se un nome è in hosts, il sistema non interroga il DNS.', difficulty: 1 },
  { text: 'UDP è un protocollo orientato alla connessione.', answer: false, explanation: 'Falso! TCP è orientato alla connessione, UDP no.', difficulty: 1 },
  { text: 'netstat è considerato un comando deprecato.', answer: true, explanation: 'Vero! Viene sostituito da "ss" e "ip".', difficulty: 2 },
  // Topic 110
  { text: 'Il bit SUID permette di eseguire un file con i privilegi del proprietario.', answer: true, explanation: 'Vero! È usato per comandi come passwd.', difficulty: 1 },
  { text: 'SSH usa la porta 22 di default.', answer: true, explanation: 'Vero! È lo standard per le connessioni sicure.', difficulty: 1 },
  { text: 'visudo non controlla la sintassi del file sudoers.', answer: false, explanation: 'Falso! Lo scopo principale di visudo è proprio il controllo sintattico.', difficulty: 2 },
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
  // Topic 108
  { id: 'tc-102-8', description: 'Segui i log di sistema in tempo reale', prompt: 'journalctl -f', expectedOutput: '', hint: 'Usa -f', difficulty: 1 },
  { id: 'tc-102-9', description: 'Mostra la coda dei messaggi e-mail', prompt: 'mailq', expectedOutput: '', hint: 'Usa mailq', difficulty: 2 },
  // Topic 109
  { id: 'tc-102-10', description: 'Mostra gli indirizzi IP assegnati', prompt: 'ip addr', expectedOutput: '', hint: 'Usa ip addr', difficulty: 1 },
  { id: 'tc-102-11', description: 'Risolvi l\'indirizzo IP di google.com', prompt: 'dig google.com', expectedOutput: '', hint: 'Usa dig', difficulty: 2 },
  // Topic 110
  { id: 'tc-102-12', description: 'Trova file con bit SUID nel sistema', prompt: 'find / -perm /4000', expectedOutput: '', hint: 'Usa find e -perm', difficulty: 3 },
  { id: 'tc-102-13', description: 'Genera una nuova coppia di chiavi SSH', prompt: 'ssh-keygen', expectedOutput: '', hint: 'Usa ssh-keygen', difficulty: 1 },
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
  },
  {
    id: 'dd-services-comps',
    category: 'Servizi di Sistema',
    question: 'Abbina il servizio al suo ambito:',
    items: [
      { text: 'chony/ntpd', matches: 'Time Sync' },
      { text: 'Postfix/Sendmail', matches: 'E-mail (MTA)' },
      { text: 'CUPS', matches: 'Printing' },
      { text: 'rsyslog/journald', matches: 'Logging' },
    ],
  },
  {
    id: 'dd-network-tools',
    category: 'Strumenti di Rete',
    question: 'Abbina lo strumento al suo scopo:',
    items: [
      { text: 'ping', matches: 'Connettività base' },
      { text: 'traceroute', matches: 'Analisi percorso' },
      { text: 'dig/host', matches: 'Risoluzione DNS' },
      { text: 'nsswitch.conf', matches: 'Ordine risoluzione' },
    ],
  },
  {
    id: 'dd-security-tools',
    category: 'Sicurezza',
    question: 'Abbina lo strumento alla sua funzione:',
    items: [
      { text: 'visudo', matches: 'Sudoers config' },
      { text: 'ssh-agent', matches: 'Key management' },
      { text: 'GPG', matches: 'File encryption' },
      { text: 'ulimit', matches: 'Resource limits' },
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
  // Topic 108
  { prompt: 'Comando stampa: _____ file.txt', answer: 'lp', hint: 'Inizia con l', difficulty: 1 },
  { prompt: 'Demone log binari: systemd-_____', answer: 'journald', hint: 'Inizia con j', difficulty: 2 },
  // Topic 109
  { prompt: 'File server DNS: /etc/_____.conf', answer: 'resolv', hint: 'Risoluzione nomi', difficulty: 1 },
  { prompt: 'Porta standard HTTP: _____', answer: '80', hint: 'Numero intero', difficulty: 1 },
  // Topic 110
  { prompt: 'Cifratura simmetrica: gpg -_____', answer: 'c', hint: 'Stà per crypt/symmetric', difficulty: 2 },
  { prompt: 'Permesso speciale (4xxx): _____', answer: 'SUID', hint: 'Inizia con S', difficulty: 2 },
];





