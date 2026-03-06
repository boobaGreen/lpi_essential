// LPIC-1 102 Lesson Content — Italian
// Contenuto lezioni per tutte le 20+ lezioni dell'esame 102

export const lpic1_102_lessonContent = {
  // ──── Topic 105: Shell e Shell Scripting ────
  'lpic1-102-105-1': {
    title: "Personalizzare l'Ambiente Shell",
    comic: {
      title: 'La Tua Casa Digitale 🏠',
      panels: [
        { emoji: '🎒', text: 'File di config: /etc/profile è per tutti, ~/.bashrc è il tuo zaino personale.' },
        { emoji: '🗺️', text: 'PATH: La mappa della shell. Se non è in lista, la shell non lo trova!' },
        { emoji: '🔦', text: 'Alias: ll=\'ls -la\'. Non scrivere chilometri di codice, usa le scorciatoie.' },
        { emoji: '📦', text: '/etc/skel: Il kit di pronto soccorso. I nuovi utenti ricevono questi file base.' },
      ]
    },
    keyPoints: [
      { title: 'File di Configurazione', items: ['/etc/profile — Globale (Login)', '~/.bashrc — Personale (Interattivo)', '/etc/skel/ — Modello per i nuovi utenti'] },
      { title: 'Variabili d\'Ambiente', items: ['export — Passa variabili ai figli', 'PATH — Dove cercare i programmi', 'env / printenv — Elenca variabili'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Scrivere Script Semplici",
    comic: {
      title: 'Il Robot di Bash 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash. Dice al kernel: "Ehi, usa Bash per questo!"' },
        { emoji: '🏃', text: 'Chmod +x: Senza il permesso di esecuzione, il tuo script è solo un sasso.' },
        { emoji: '🔀', text: 'If/Then/Else: Il cervello dello script. Prende decisioni basate su test.' },
        { emoji: '🔄', text: 'Loop (For/While): Ripeti un compito 100 volte senza stancarti.' },
      ]
    },
    keyPoints: [
      { title: 'Struttura', items: ['#!/bin/bash — Lo Shebang', 'chmod +x script.sh — Fondamentale', 'exit [0-255] — Status d\'uscita (0 = OK)'] },
      { title: 'Cicli e Test', items: ['test [ condition ] — Verifica condizioni', 'while / for — Strutture iterative', 'read — Legge input dall\'utente'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Ciao $USER"', 
      output: 'Ciao root' 
    },
  },

  // ──── Topic 106: Interfacce Utente e Desktop ────
  'lpic1-102-106-1': {
    title: "Installare e Configurare X11",
    comic: {
      title: 'Dipingere lo Schermo 🖼️',
      panels: [
        { emoji: '🏛️', text: 'X11 (X Window System) è l\'architettura classica per la grafica in Linux.' },
        { emoji: '🔌', text: 'Architettura Client-Server: l\'app grafica può girare su un altro computer!' },
        { emoji: '🏗️', text: 'Wayland: Il successore moderno, più semplice, fluido e sicuro.' },
      ]
    },
    keyPoints: [
      { title: 'Componenti', items: ['X Server — Gestisce hardware (video, mouse)', 'X Client — L\'app grafica stessa', 'Window Manager — Gestisce i bordi delle finestre'] },
      { title: 'Configurazione', items: ['/etc/X11/xorg.conf — File storico (spesso automatico)', 'xdpyinfo — Info sul server X attivo', 'xhost — Gestisce i permessi d\'accesso'] },
    ],
    terminal: { 
      prompt: '$ xdpyinfo | grep dimensions\n$ xset q', 
      output: 'dimensions:    1920x1080 pixels (508x285 millimeters)\nKeyboard Control:\n  auto repeat:  on    key click percent:  0' 
    },
  },

  'lpic1-102-106-2': { title: "Desktop Grafici", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Accessibilità", terminal: { prompt: '$ orca --setup', output: '[Menu istruzioni per screen reader]' } },

  // ──── Topic 107: Compiti Amministrativi ────
  'lpic1-102-107-1': {
    title: "Gestire Utenti, Gruppi e File di Sistema",
    comic: {
      title: 'Chi è il Capo? 👔',
      panels: [
        { emoji: '👑', text: 'Root (UID 0) è il re: può fare tutto, anche distruggere il sistema.' },
        { emoji: '🆔', text: '/etc/passwd: L\'anagrafe di Linux. Qui ogni utente ha un suo ID unico.' },
        { emoji: '👥', text: 'I Gruppi permettono di condividere file tra colleghi senza aprire tutto a tutti.' },
        { emoji: '🔐', text: '/etc/shadow: La cassaforte che contiene le password criptate.' },
      ]
    },
    keyPoints: [
      { title: 'File Chiave', items: ['/etc/passwd — Dati utente (shell, home, UID)', '/etc/group — Dati gruppo (membri)', '/etc/shadow — Password criptate e scadenza'] },
      { title: 'Comandi Utente', items: ['useradd / usermod / userdel — Gestione utente', 'id — Mostra UID e GID attuali', 'chage — Gestisce la scadenza password'] },
      { title: 'Comandi Gruppo', items: ['groupadd / groupdel — Gestione gruppi', 'groups — Mostra i gruppi di un utente'] },
    ],
    terminal: { 
      prompt: '$ id\n$ grep root /etc/passwd', 
      output: 'uid=0(root) gid=0(root) gruppi=0(root)\nroot:x:0:0:root:/root:/bin/bash' 
    },
  },

  'lpic1-102-107-2': { title: "Automazione (Cron e Timer)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Localizzazione", terminal: { prompt: '$ locale', output: 'LANG=it_IT.UTF-8' } },

  // ──── Topic 108: Servizi di Sistema Essenziali ────
  'lpic1-102-108-1': { title: "Sincronizzare l'Orario (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Logging (Rsyslog e Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Mail MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'Mail queue is empty' } },
  'lpic1-102-108-4': { title: "Gestione Stampanti (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'printer PDF is idle.' } },

  // ──── Topic 109: Fondamenti di Rete ────
  'lpic1-102-109-1': {
    title: "Protocolli Internet (TCP/IP)",
    comic: {
      title: 'La Lingua del Web 🌐',
      panels: [
        { emoji: '📬', text: 'IP: L\'indirizzo di casa tua. Senza questo, i pacchetti si perdono.' },
        { emoji: '🏷️', text: 'Porte: Il citofono. Porta 80 per il web, 22 per SSH.' },
        { emoji: '📦', text: 'TCP: Consegna garantita. Se un pezzo cade, lo richiede.' },
        { emoji: '🚀', text: 'UDP: Spara e dimentica. Ideale per video e giochi.' },
      ]
    },
    keyPoints: [
      { title: 'Stack IP', items: ['IPv4 — 32 bit (es. 192.168.1.1)', 'IPv6 — 128 bit (es. 2001:db8::1)', 'Maschera di Rete — Divide Rete da Host'] },
      { title: 'Protocolli', items: ['TCP — Affidabile, orientato alla connessione', 'UDP — Veloce, senza garanzia', 'ICMP — Diagnostica (es. Ping)'] },
      { title: 'Porte Comuni', items: ['22 (SSH), 25 (SMTP), 53 (DNS), 80/443 (HTTP/S)'] },
    ],
    terminal: { prompt: '$ ping -c 3 google.it', output: '64 bytes from ... time=15ms' },
  },

  'lpic1-102-109-2': { title: "Configurazione di Rete", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Risoluzione Problemi di Rete", terminal: { prompt: '$ traceroute google.it', output: '1  192.168.1.1 ...' } },
  'lpic1-102-109-4': { title: "Configurazioni DNS", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Sicurezza ────
  'lpic1-102-110-1': {
    title: "Compiti di Sicurezza",
    comic: {
      title: 'Le Mura della Fortezza 🏰',
      panels: [
        { emoji: '🗝️', text: 'SUID: Un file che corre con i poteri del proprietario. Potente ma rischioso!' },
        { emoji: '⛓️', text: 'Limiti di Risorsa: Evita che un utente blocchi tutto il server (DoS).' },
        { emoji: '🕵️', text: 'Audit: Controlla sempre chi ha i permessi di scrittura nelle cartelle critiche.' },
      ]
    },
    keyPoints: [
      { title: 'Permessi Speciali', items: ['SUID (4000) — Esegue come owner', 'SGID (2000) — Esegue come gruppo', 'Sticky Bit (1000) — Solo owner può eliminare'] },
      { title: 'Limiti', items: ['/etc/security/limits.conf — Configura ulimit', 'ulimit -a — Mostra limiti attuali'] },
    ],
    terminal: { 
      prompt: '$ ls -l /usr/bin/passwd\n$ ulimit -u', 
      output: '-rwsr-xr-x 1 root root ...\n63428' 
    },
  },

  'lpic1-102-110-2': { title: "Sicurezza dell'Host", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Crittografia (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
