// Lesson content data for all topics
// Each lesson has: comic (animated comic strip), keyPoints (organized concepts), terminal (demo command)

export const lessonContent = {
  // === TOPIC 1: La Comunità Linux ===
  '1-1': {
    comic: {
      title: 'La Nascita di Linux 🐧',
      panels: [
        { emoji: '🏛️', text: '1969 — Nei laboratori AT&T nasce Unix, un sistema operativo rivoluzionario...' },
        { emoji: '👨‍💻', text: '1991 — Un giovane studente finlandese, Linus Torvalds, inizia a sviluppare un kernel libero...' },
        { emoji: '🐧', text: '"Sto facendo un sistema operativo libero, solo un hobby..." — Il post che cambiò tutto!' },
        { emoji: '🌍', text: 'Oggi Linux è ovunque: server, cloud, smartphone (Android), IoT, supercomputer!' },
      ]
    },
    keyPoints: [
      { title: 'Famiglie di Distribuzioni', items: ['Debian → Ubuntu, Mint', 'Red Hat → RHEL, Fedora, CentOS', 'SUSE → SLES, openSUSE'] },
      { title: 'Gestori Pacchetti', items: ['Debian: dpkg, apt (.deb)', 'Red Hat: rpm, yum, dnf (.rpm)', 'SUSE: rpm, zypper (.rpm)'] },
      { title: 'Sistemi Embedded', items: ['Android = kernel Linux modificato', 'Raspberry Pi + Raspbian', 'Linux nel 90% del cloud pubblico'] },
    ],
    terminal: { prompt: '$ cat /etc/os-release', output: 'NAME="Ubuntu"\nVERSION="22.04 LTS"\nID=ubuntu\nID_LIKE=debian' },
  },
  '1-2': {
    comic: {
      title: 'Il Mondo delle App Open Source 📦',
      panels: [
        { emoji: '📝', text: 'LibreOffice: Writer, Calc, Impress — la suite libera che sfida Microsoft Office!' },
        { emoji: '🌐', text: 'Firefox e Chromium: browser web liberi e potenti.' },
        { emoji: '🖥️', text: 'Apache e Nginx: i server web che fanno girare Internet!' },
        { emoji: '💻', text: 'C, Java, Python, Bash: i linguaggi che fanno vivere Linux.' },
      ]
    },
    keyPoints: [
      { title: 'App Desktop', items: ['LibreOffice, GIMP, Blender, VLC, Audacity'] },
      { title: 'App Server', items: ['Apache, Nginx (web)', 'MariaDB, PostgreSQL (database)', 'Samba, NFS (file sharing)'] },
      { title: 'Linguaggi', items: ['Compilato: C, Java', 'Interpretato: Python, Perl, JavaScript, Bash'] },
    ],
    terminal: { prompt: '$ apt search libreoffice', output: 'libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor' },
  },
  '1-3': {
    comic: {
      title: 'Le 4 Libertà del Software 🔓',
      panels: [
        { emoji: '0️⃣', text: 'Libertà 0: Usare il programma per qualsiasi scopo!' },
        { emoji: '1️⃣', text: 'Libertà 1: Studiare come funziona e modificarlo!' },
        { emoji: '2️⃣', text: 'Libertà 2: Ridistribuire copie ad altri!' },
        { emoji: '3️⃣', text: 'Libertà 3: Distribuire le tue versioni modificate!' },
      ]
    },
    keyPoints: [
      { title: 'Licenze Copyleft', items: ['GPL: codice derivato deve restare GPL', 'LGPL: permette linking con proprietario', 'AGPL: estende GPL al SaaS'] },
      { title: 'Licenze Permissive', items: ['MIT: molto breve e permissiva', 'BSD: simile a MIT', 'Apache 2.0: concessione brevetti'] },
      { title: 'Business Open Source', items: ['Supporto (Red Hat)', 'Doppia licenza', 'SaaS, Certificazioni'] },
    ],
    terminal: { prompt: '$ head -5 /usr/share/common-licenses/GPL-3', output: 'GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation' },
  },
  '1-4': {
    comic: {
      title: 'Privacy e Sicurezza Digitale 🔒',
      panels: [
        { emoji: '🖥️', text: 'GNOME o KDE? Scegli il tuo Desktop Environment!' },
        { emoji: '🍪', text: 'Attenzione ai cookie di terze parti: ti tracciano ovunque!' },
        { emoji: '🔒', text: 'HTTPS = HTTP + TLS. Cerca il lucchetto nel browser!' },
        { emoji: '🔑', text: 'GnuPG: crittografia asimmetrica. Chiave pubblica per crittare, privata per decrittare.' },
      ]
    },
    keyPoints: [
      { title: 'Desktop Environment', items: ['GNOME (GTK) — Semplicità', 'KDE (Qt) — Personalizzazione', 'XFCE, LXDE — Leggeri'] },
      { title: 'Privacy', items: ['Cookie terze parti = tracciamento', 'DNT ≠ garanzia di privacy', 'Navigazione privata ≠ anonimato'] },
      { title: 'Crittografia', items: ['TLS/SSL per connessioni', 'GnuPG per file/email', 'dm-crypt/LUKS per dischi'] },
    ],
    terminal: { prompt: '$ gpg --list-keys', output: 'pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>' },
  },

  // === TOPIC 2: Uso del Sistema Linux ===
  '2-1': {
    comic: {
      title: 'Benvenuto nella Shell! 💻',
      panels: [
        { emoji: '⌨️', text: 'La shell è la tua finestra sul sistema. Scrivi comandi, ottieni risultati!' },
        { emoji: '🐚', text: 'Bash = Bourne Again Shell. La shell più usata su Linux!' },
        { emoji: '💲', text: 'Il prompt $ indica un utente normale. Il # indica root — attenzione!' },
        { emoji: '🔤', text: 'Quoting: "doppi" espandono $variabili, \'singoli\' prendono tutto letteralmente.' },
      ]
    },
    keyPoints: [
      { title: 'Tipi di Shell', items: ['bash — predefinita', 'zsh — avanzata (macOS)', 'fish — user-friendly', 'sh — POSIX base'] },
      { title: 'Comandi Base', items: ['pwd — directory corrente', 'whoami — utente attuale', 'hostname — nome macchina', 'uname -a — info sistema'] },
      { title: 'Quoting', items: ['"doppi" → espande $VAR', '\'singoli\' → letterale', '\\backslash → escape singolo'] },
    ],
    terminal: { prompt: '$ echo "Ciao, sono $(whoami) su $(hostname)"', output: 'Ciao, sono studente su linux-pc' },
  },
  '2-2': {
    comic: {
      title: 'Variabili: la Memoria della Shell 🧠',
      panels: [
        { emoji: '📦', text: 'Le variabili sono contenitori che memorizzano valori: NOME="Mario"' },
        { emoji: '🌐', text: 'Le variabili d\'ambiente sono globali. PATH dice alla shell dove cercare i comandi!' },
        { emoji: '📤', text: 'export rende una variabile locale accessibile ai processi figli.' },
        { emoji: '🔍', text: 'env mostra tutte le variabili d\'ambiente. echo $HOME la tua home!' },
      ]
    },
    keyPoints: [
      { title: 'Variabili Locali', items: ['NOME="valore" (no spazi!)', 'echo $NOME per leggere', 'unset NOME per eliminare'] },
      { title: 'Variabili d\'Ambiente', items: ['PATH — percorsi comandi', 'HOME — directory personale', 'USER — nome utente', 'LANG — lingua sistema'] },
      { title: 'Persistenza', items: ['~/.bashrc — login interattivo', '~/.profile — login iniziale', '/etc/environment — globale'] },
    ],
    terminal: { prompt: '$ echo $PATH', output: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' },
  },
  '2-3': {
    comic: {
      title: 'Aiuto! Man e Info 📚',
      panels: [
        { emoji: '📖', text: 'man è il tuo miglior amico! man ls ti dice tutto su ls.' },
        { emoji: '🔢', text: 'Le sezioni del man: 1=Comandi utente, 5=File config, 8=Comandi admin.' },
        { emoji: '🔎', text: 'apropos cerca comandi per descrizione: apropos "copy files"' },
        { emoji: '📁', text: 'find cerca file nel filesystem. locate è più veloce ma usa un database.' },
      ]
    },
    keyPoints: [
      { title: 'Documentazione', items: ['man comando — manuale completo', 'info comando — formato GNU', 'comando --help — aiuto breve', 'apropos keyword — cerca'] },
      { title: 'Sezioni Man', items: ['1 — Comandi utente', '5 — Formati file', '8 — Comandi sysadmin'] },
      { title: 'Trova File', items: ['find / -name "*.txt"', 'find / -type d -name logs', 'locate nomefile (database)', 'which comando (nel PATH)'] },
    ],
    terminal: { prompt: '$ man -k "copy files"', output: 'cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool' },
  },
  '2-4': {
    comic: {
      title: 'L\'Albero del Filesystem 🌳',
      panels: [
        { emoji: '/', text: 'Tutto inizia dalla root /. L\'albero cresce verso il basso!' },
        { emoji: '📂', text: '/home — le tue cose personali. /etc — configurazione sistema.' },
        { emoji: '💾', text: '/var — dati variabili (log, mail). /tmp — file temporanei.' },
        { emoji: '⚙️', text: '/bin e /sbin — comandi essenziali. /usr — programmi installati.' },
      ]
    },
    keyPoints: [
      { title: 'Directory Importanti', items: ['/bin — comandi base', '/etc — configurazione', '/home — utenti', '/var — dati variabili'] },
      { title: 'Navigazione', items: ['cd /percorso — cambia dir', 'ls -la — lista dettagliata', 'pwd — dove sono', '. (corrente) .. (padre)'] },
      { title: 'Gestione File', items: ['cp, mv, rm — copia, sposta, rimuovi', 'mkdir -p — crea cartelle', 'touch — crea file vuoto', 'Globbing: * ? [abc]'] },
    ],
    terminal: { prompt: '$ ls /', output: 'bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var' },
  },

  // === TOPIC 3: Il Potere della Command Line ===
  '3-1': {
    comic: {
      title: 'Comprimi e Archivia! 📦',
      panels: [
        { emoji: '🗜️', text: 'tar = Tape ARchive. Raggruppa più file in un solo archivio!' },
        { emoji: '💨', text: 'gzip → .gz (veloce). bzip2 → .bz2 (comprime di più). xz → .xz (comprime meglio!)' },
        { emoji: '📋', text: 'tar -czf = Create + gzip + File. Il trio magico!' },
        { emoji: '📂', text: 'tar -xzf = eXtract + gzip + File. Decomprimi tutto!' },
      ]
    },
    keyPoints: [
      { title: 'Algoritmi', items: ['gzip (.gz) — veloce, buono', 'bzip2 (.bz2) — più lento, meglio', 'xz (.xz) — lentissimo, ottimo'] },
      { title: 'Comandi tar', items: ['tar -czf arch.tar.gz dir/', 'tar -cjf arch.tar.bz2 dir/', 'tar -xzf arch.tar.gz', 'tar -tf arch.tar.gz (lista)'] },
      { title: 'Singoli File', items: ['gzip file → file.gz', 'gunzip file.gz → file', 'bzip2 / bunzip2', 'xz / unxz'] },
    ],
    terminal: { prompt: '$ tar -czf backup.tar.gz /home/user/docs/', output: '' },
  },
  '3-2': {
    comic: {
      title: 'Pipe e Redirect: il Flusso dei Dati 🔀',
      panels: [
        { emoji: '0️⃣', text: 'stdin (0) = input. stdout (1) = output. stderr (2) = errori.' },
        { emoji: '➡️', text: '> scrive in un file (sovrascrive). >> appende alla fine.' },
        { emoji: '🔗', text: '| (pipe) connette l\'output di un comando all\'input del successivo!' },
        { emoji: '🔇', text: '2>/dev/null — manda gli errori nel "buco nero" di Linux!' },
      ]
    },
    keyPoints: [
      { title: 'File Descriptors', items: ['0 = stdin (tastiera)', '1 = stdout (schermo)', '2 = stderr (errori)'] },
      { title: 'Redirect', items: ['> file (sovrascrive)', '>> file (appende)', '2> errori.log', '&> tutto.log (stdout+stderr)'] },
      { title: 'Pipe & Comandi', items: ['cmd1 | cmd2 (pipe)', 'tee file (T-splitter)', 'xargs (stdin → argomenti)', 'cmd1 && cmd2 (se ok)'] },
    ],
    terminal: { prompt: '$ cat /var/log/syslog | grep error | wc -l', output: '42' },
  },
  '3-3': {
    comic: {
      title: 'Grep e i Supereroi del Testo 🦸',
      panels: [
        { emoji: '🔎', text: 'grep cerca pattern nel testo. Il detective della command line!' },
        { emoji: '✂️', text: 'cut taglia colonne. sort ordina. uniq rimuove duplicati.' },
        { emoji: '📊', text: 'wc conta righe (-l), parole (-w), caratteri (-c).' },
        { emoji: '🌟', text: 'Regex: ^ inizio riga, $ fine, . qualsiasi, * ripeti, [abc] set.' },
      ]
    },
    keyPoints: [
      { title: 'grep', items: ['grep pattern file', 'grep -i (case insensitive)', 'grep -r (ricorsivo)', 'grep -v (inverti match)'] },
      { title: 'Manipolazione', items: ['cut -d: -f1 (campo 1)', 'sort -n (numerico)', 'uniq -c (conta)', 'head/tail -n 5'] },
      { title: 'Regex Base', items: ['^ inizio riga', '$ fine riga', '. qualsiasi char', '* zero o più', '[a-z] range'] },
    ],
    terminal: { prompt: '$ grep -i "error" /var/log/syslog | tail -5', output: 'Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting' },
  },
  '3-4': {
    comic: {
      title: 'Scripting Bash: Automatizza Tutto! 🤖',
      panels: [
        { emoji: '📜', text: '#!/bin/bash — lo shebang! Dice al sistema: "Usa bash per questo script!"' },
        { emoji: '🔄', text: 'for, while, if/then/else — i costrutti per controllare il flusso.' },
        { emoji: '📥', text: '$1 = primo argomento, $# = quanti, $@ = tutti. Il potere dei parametri!' },
        { emoji: '✅', text: 'exit 0 = successo. exit 1 = errore. Ogni comando ha un codice di uscita!' },
      ]
    },
    keyPoints: [
      { title: 'Struttura Script', items: ['#!/bin/bash (shebang)', 'chmod +x script.sh', './script.sh per eseguire'] },
      { title: 'Variabili Speciali', items: ['$0 — nome script', '$1, $2... — argomenti', '$# — numero argomenti', '$? — exit code ultimo cmd'] },
      { title: 'Costrutti', items: ['if [ cond ]; then...fi', 'for i in lista; do...done', 'while [ cond ]; do...done', 'case $var in pattern)...esac'] },
    ],
    terminal: { prompt: '$ cat hello.sh', output: '#!/bin/bash\necho "Ciao, $1!"\necho "Oggi è $(date)"\nexit 0' },
  },

  // === TOPIC 4: Il Sistema Operativo Linux ===
  '4-1': {
    comic: {
      title: 'Dove Gira Linux? Ovunque! 🌐',
      panels: [
        { emoji: '🖥️', text: 'Desktop: Ubuntu, Fedora, Mint — Linux per tutti!' },
        { emoji: '🏢', text: 'Enterprise: RHEL, SLES — supporto, certificazioni, SLA!' },
        { emoji: '☁️', text: 'Cloud: 90% dei server web gira Linux. AWS, Azure, GCP lo adorano!' },
        { emoji: '📱', text: 'Mobile e IoT: Android = Linux! Smart TV, auto, droni... tutto Linux!' },
      ]
    },
    keyPoints: [
      { title: 'Desktop vs Server', items: ['Desktop: GUI, multimedia', 'Server: headless, servizi 24/7', 'Enterprise: supporto LTS'] },
      { title: 'Cloud & Virtualizzazione', items: ['KVM/QEMU — virtualizzazione', 'Docker — container', 'Kubernetes — orchestrazione', 'IaaS, PaaS, SaaS'] },
      { title: 'Certificazioni', items: ['LPI Linux Essentials', 'LPIC-1 (admin base)', 'LPIC-2 (admin avanzato)', 'RHCSA, RHCE (Red Hat)'] },
    ],
    terminal: { prompt: '$ uname -a', output: 'Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux' },
  },
  '4-2': {
    comic: {
      title: 'Hardware: il Ferro sotto Linux ⚙️',
      panels: [
        { emoji: '🧠', text: 'CPU, RAM, disco, scheda di rete — Linux vede tutto in /proc e /sys!' },
        { emoji: '💽', text: 'HDD = meccanico, lento. SSD = flash, veloce. NVMe = super veloce!' },
        { emoji: '🔒', text: 'RAID 0 = velocità. RAID 1 = sicurezza. RAID 5 = equilibrio.' },
        { emoji: '🖨️', text: 'Periferiche hot-plug: USB, Thunderbolt. Il kernel le riconosce al volo!' },
      ]
    },
    keyPoints: [
      { title: 'Componenti', items: ['CPU: lscpu', 'RAM: free -h', 'Disco: lsblk, df -h', 'PCI: lspci, USB: lsusb'] },
      { title: 'Storage', items: ['HDD — piatti magnetici', 'SSD — memoria flash NAND', 'NVMe — bus PCIe diretto', 'RAID — ridondanza/prestazioni'] },
      { title: 'Livelli RAID', items: ['RAID 0 — stripe (no backup)', 'RAID 1 — mirror (copia)', 'RAID 5 — stripe + parità', 'RAID 10 — mirror + stripe'] },
    ],
    terminal: { prompt: '$ lsblk', output: 'NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /' },
  },
  '4-3': {
    comic: {
      title: 'Kernel, Processi e Demoni 👻',
      panels: [
        { emoji: '🎯', text: 'Il kernel è il cuore di Linux. Gestisce CPU, RAM, I/O, rete.' },
        { emoji: '🌱', text: 'systemd = PID 1, il padre di tutti i processi. Gestisce il boot!' },
        { emoji: '👻', text: 'Demoni = processi in background. Terminano con "d": sshd, httpd, crond.' },
        { emoji: '💀', text: 'kill -9 PID = l\'arma finale! Termina qualsiasi processo.' },
      ]
    },
    keyPoints: [
      { title: 'Boot & Kernel', items: ['BIOS/UEFI → bootloader', 'GRUB → carica kernel', 'Kernel → monta root', 'systemd → avvia servizi'] },
      { title: 'Processi', items: ['ps aux — lista processi', 'top/htop — monitor real-time', 'bg/fg — background/foreground', '& — avvia in background'] },
      { title: 'Segnali', items: ['SIGTERM (15) — termina pulito', 'SIGKILL (9) — termina forzato', 'SIGHUP (1) — ricarica config', 'SIGSTOP (19) — sospendi'] },
    ],
    terminal: { prompt: '$ ps aux | head -5', output: 'USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox' },
  },
  '4-4': {
    comic: {
      title: 'Networking: Linux in Rete 🌐',
      panels: [
        { emoji: '📡', text: 'IP, subnet mask, gateway — le coordinate della tua macchina in rete!' },
        { emoji: '🔤', text: 'DNS traduce nomi in IP. google.com → 142.250.180.14' },
        { emoji: '🔐', text: 'SSH (porta 22) = accesso remoto sicuro. La porta d\'ingresso del sysadmin!' },
        { emoji: '🌐', text: 'HTTP(80), HTTPS(443), FTP(21), SMTP(25) — le porte che fanno girare Internet!' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione', items: ['ip addr — mostra IP', 'ip route — mostra route', '/etc/resolv.conf — DNS', '/etc/hosts — nomi locali'] },
      { title: 'IP Privati', items: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', 'IPv6: fc00::/7 (ULA)'] },
      { title: 'Porte Comuni', items: ['22 — SSH', '80 — HTTP', '443 — HTTPS', '53 — DNS'] },
    ],
    terminal: { prompt: '$ ip addr show eth0', output: 'inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link' },
  },

  // === TOPIC 5: Sicurezza e Permessi ===
  '5-1': {
    comic: {
      title: 'Root: il Supereroe di Linux 🦸',
      panels: [
        { emoji: '👑', text: 'root = UID 0. Può fare TUTTO. Con grandi poteri, grandi responsabilità!' },
        { emoji: '🔑', text: 'sudo = "Super User DO". Esegui un comando come root con la TUA password.' },
        { emoji: '⚠️', text: 'Mai lavorare sempre come root! Usa sudo solo quando serve.' },
        { emoji: '📋', text: '/etc/sudoers definisce chi può usare sudo e per quali comandi.' },
      ]
    },
    keyPoints: [
      { title: 'Utenti', items: ['root = UID 0 (superutente)', 'Utenti normali: UID ≥ 1000', 'Utenti di sistema: UID 1-999', 'nobody = UID 65534'] },
      { title: 'Comandi', items: ['su - (switch user)', 'sudo comando (esegui come root)', 'whoami (chi sono?)', 'id (UID, GID, gruppi)'] },
      { title: 'Sicurezza', items: ['Principio minimo privilegio', 'sudo > su (tracciabile)', '/etc/sudoers (visudo)', 'Log: /var/log/auth.log'] },
    ],
    terminal: { prompt: '$ id', output: 'uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)' },
  },
  '5-2': {
    comic: {
      title: 'Utenti e Gruppi: l\'Anagrafe di Linux 👥',
      panels: [
        { emoji: '📒', text: '/etc/passwd — il registro di tutti gli utenti. Nome, UID, home, shell.' },
        { emoji: '🔒', text: '/etc/shadow — le password crittate. Solo root può leggerlo!' },
        { emoji: '👥', text: '/etc/group — i gruppi. Ogni utente ha un gruppo primario e può far parte di altri.' },
        { emoji: '🛠️', text: 'useradd, usermod, userdel — gli strumenti per gestire l\'anagrafe!' },
      ]
    },
    keyPoints: [
      { title: 'File Chiave', items: ['/etc/passwd — info utenti', '/etc/shadow — password hash', '/etc/group — gruppi', '/etc/skel — template home'] },
      { title: 'Gestione Utenti', items: ['useradd -m user (crea)', 'usermod -aG gruppo user', 'userdel -r user (elimina)', 'passwd user (password)'] },
      { title: 'Formato passwd', items: ['user:x:UID:GID:info:home:shell', 'x → password in shadow', 'UID 0 → root', '/sbin/nologin → no login'] },
    ],
    terminal: { prompt: '$ grep studente /etc/passwd', output: 'studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash' },
  },
  '5-3': {
    comic: {
      title: 'Permessi: Chi Può Fare Cosa? 🔐',
      panels: [
        { emoji: '📊', text: 'r=read(4) w=write(2) x=execute(1). Tre set: Owner, Group, Others.' },
        { emoji: '🔢', text: 'chmod 755 = rwxr-xr-x. Il proprietario fa tutto, gli altri leggono.' },
        { emoji: '✏️', text: 'chmod u+x = aggiungi esecuzione al proprietario. Notazione simbolica!' },
        { emoji: '⚡', text: 'SUID, SGID, Sticky Bit — i permessi speciali per casi speciali!' },
      ]
    },
    keyPoints: [
      { title: 'Permessi Base', items: ['r (read) = 4', 'w (write) = 2', 'x (execute) = 1', '--- = 0, rwx = 7'] },
      { title: 'Comandi', items: ['chmod 644 file (ottale)', 'chmod u+x file (simbolico)', 'chown user:group file', 'chgrp gruppo file'] },
      { title: 'Speciali', items: ['SUID (4xxx) — esegui come owner', 'SGID (2xxx) — eredita gruppo', 'Sticky (1xxx) — protegge /tmp', 'umask 022 — default 755'] },
    ],
    terminal: { prompt: '$ ls -la /etc/passwd /tmp', output: '-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp' },
  },
  '5-4': {
    comic: {
      title: 'Link: Scorciatoie nel Filesystem 🔗',
      panels: [
        { emoji: '🔗', text: 'Hard link: due nomi per lo stesso file (inode). Indistinguibili!' },
        { emoji: '➡️', text: 'Symbolic link: una scorciatoia. Punta a un percorso, non a un inode.' },
        { emoji: '💔', text: 'Se elimini il target di un symlink, diventa "broken". Hard link sopravvive!' },
        { emoji: '📁', text: 'I symlink possono attraversare filesystem. Gli hard link no.' },
      ]
    },
    keyPoints: [
      { title: 'Hard Link', items: ['ln file hardlink', 'Stesso inode', 'Non attraversa filesystem', 'No link a directory'] },
      { title: 'Symbolic Link', items: ['ln -s target symlink', 'Inode diverso', 'Attraversa filesystem', 'Può linkare directory'] },
      { title: 'Confronto', items: ['Hard: robusto, limitato', 'Sym: flessibile, fragile', 'ls -li mostra inode', 'readlink mostra target'] },
    ],
    terminal: { prompt: '$ ln -s /etc/passwd link_passwd && ls -l link_passwd', output: 'lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd' },
  },
}
