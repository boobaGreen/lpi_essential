export const topic2Extended = {
  '2-1': {
    title: 'Nozioni di Base sulla Command Line',
    sections: [
      { type: 'heading', level: 2, emoji: '🐚', text: 'Cos\'è la Shell?' },
      { type: 'paragraph', text: 'La shell è un programma che interpreta i comandi dell\'utente e li passa al kernel per l\'esecuzione. È l\'interfaccia testuale tra te e il sistema operativo. Ogni volta che apri un terminale, stai avviando una shell.' },
      { type: 'table', headers: ['Shell', 'File', 'Caratteristiche', 'Distribuzione'], rows: [
        ['Bash', '/bin/bash', 'La più diffusa, scripting potente, completamento Tab', 'Quasi tutte'],
        ['Zsh', '/bin/zsh', 'Avanzata, plugin (Oh My Zsh), tema personalizzabili', 'macOS default'],
        ['Fish', '/usr/bin/fish', 'User-friendly, syntax highlighting, autosuggestions', 'Alternativa moderna'],
        ['Dash', '/bin/dash', 'POSIX minimale, boot veloce, usata da Debian per /bin/sh', 'Debian/Ubuntu'],
        ['sh', '/bin/sh', 'Shell POSIX originale, compatibilità massima', 'Tutti gli Unix'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede quale sia la shell predefinita sulla maggior parte delle distribuzioni: è Bash (Bourne Again Shell). Ricorda anche che $SHELL mostra la shell di login, non necessariamente quella in uso.' },

      { type: 'heading', level: 2, emoji: '💲', text: 'Il Prompt e i Suoi Simboli' },
      { type: 'paragraph', text: 'Il prompt è la riga che il terminale mostra quando è pronto a ricevere comandi. Contiene informazioni utili.' },
      { type: 'code', title: 'Anatomia del prompt', prompt: 'utente@hostname:~/documenti$\n│       │        │            │\n│       │        │            └── $ = utente normale (# = root)\n│       │        └── directory corrente (~ = home)\n│       └── nome della macchina\n└── nome utente', output: '' },
      { type: 'infobox', variant: 'warning', title: '$ vs #', content: 'Il simbolo $ indica un utente normale. Il simbolo # indica l\'utente root. Se vedi # nel prompt, stai operando con pieni privilegi — massima attenzione!' },

      { type: 'heading', level: 2, emoji: '🔤', text: 'Quoting: Virgolette e Escape' },
      { type: 'paragraph', text: 'Il quoting controlla come la shell interpreta caratteri speciali. È uno dei concetti più testati nell\'esame LPI.' },
      { type: 'table', headers: ['Tipo', 'Sintassi', 'Espande $VAR?', 'Espande *?', 'Esempio'], rows: [
        ['Doppi apici', '"testo"', '✅ Sì', '❌ No', '"Ciao $USER" → Ciao mario'],
        ['Singoli apici', "'testo'", '❌ No', '❌ No', "'Ciao $USER' → Ciao $USER"],
        ['Backslash', '\\carattere', 'Escape singolo', 'Escape singolo', 'echo \\$HOME → $HOME'],
        ['Nessuno', 'testo', '✅ Sì', '✅ Sì', 'echo * → lista tutti i file'],
      ]},
      { type: 'code', title: 'Esempi pratici di quoting', prompt: '$ echo "La mia home è $HOME"\nLa mia home è /home/studente\n\n$ echo \'La mia home è $HOME\'\nLa mia home è $HOME\n\n$ echo "Ci sono $(ls | wc -l) file"\nCi sono 42 file', output: '' },

      { type: 'heading', level: 2, emoji: '⌨️', text: 'Scorciatoie da Tastiera Essenziali' },
      { type: 'table', headers: ['Scorciatoia', 'Azione', 'Quando usarla'], rows: [
        ['Tab', 'Auto-completamento', 'Completa comandi e percorsi file'],
        ['Tab Tab', 'Mostra tutte le opzioni', 'Quando ci sono più possibilità'],
        ['Ctrl+C', 'Interrompe il comando (SIGINT)', 'Per fermare un processo bloccato'],
        ['Ctrl+D', 'End of File (EOF)', 'Per chiudere la shell o l\'input'],
        ['Ctrl+L', 'Pulisce lo schermo', 'Equivale a clear'],
        ['Ctrl+R', 'Ricerca nella cronologia', 'Per trovare comandi precedenti'],
        ['↑ / ↓', 'Naviga la cronologia', 'Per ripetere comandi recenti'],
        ['Ctrl+A / Ctrl+E', 'Inizio / Fine riga', 'Per spostarsi rapidamente nel comando'],
      ]},
    ]
  },

  '2-2': {
    title: 'Variabili e Ambiente',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Variabili Locali vs Variabili d\'Ambiente' },
      { type: 'paragraph', text: 'In bash esistono due tipi di variabili. Le variabili locali esistono solo nella shell corrente. Le variabili d\'ambiente sono esportate e disponibili a tutti i processi figli.' },
      { type: 'comparison', left: {
        title: 'Variabili Locali',
        items: ['NOME="valore" (NO spazi intorno a =)', 'Visibili solo nella shell corrente', 'Non ereditate dai processi figli', 'Vie con unset NOME']
      }, right: {
        title: 'Variabili d\'Ambiente',
        items: ['export NOME="valore"', 'Visibili a tutti i processi figli', 'Ereditate automaticamente', 'Visualizzabili con env']
      }},
      { type: 'code', title: 'Variabili locali vs ambiente', prompt: '$ LOCALE="solo qui"       # variabile locale\n$ export GLOBALE="ovunque" # variabile d\'ambiente\n$ echo $LOCALE $GLOBALE\nsolo qui ovunque\n\n$ bash -c \'echo $LOCALE $GLOBALE\'  # nuova shell figlia\novunque\n# LOCALE non è visibile nella shell figlia!', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Attenzione agli spazi!', content: 'In bash, NOME = "valore" con spazi intorno all\'uguale NON funziona! Bash interpreterà NOME come un comando. La sintassi corretta è NOME="valore" senza spazi.' },

      { type: 'heading', level: 2, emoji: '🛤️', text: 'La Variabile PATH' },
      { type: 'paragraph', text: 'PATH è la variabile più importante di Linux. Contiene la lista di directory dove la shell cerca gli eseguibili quando digiti un comando. Le directory sono separate da : (due punti).' },
      { type: 'code', title: 'Come funziona PATH', prompt: '$ echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# Quando digiti "ls", la shell cerca in ordine:\n# 1. /usr/local/sbin/ls  (non trovato)\n# 2. /usr/local/bin/ls   (non trovato)\n# 3. /usr/sbin/ls        (non trovato)\n# 4. /usr/bin/ls          ← TROVATO! Esegue questo.\n\n# Per aggiungere una directory al PATH:\n$ export PATH="$PATH:/opt/mioprogramma/bin"', output: '' },

      { type: 'heading', level: 2, emoji: '🌍', text: 'Variabili d\'Ambiente Importanti' },
      { type: 'table', headers: ['Variabile', 'Contenuto', 'Esempio'], rows: [
        ['$HOME', 'Directory home dell\'utente', '/home/studente'],
        ['$USER', 'Nome utente corrente', 'studente'],
        ['$SHELL', 'Shell di login', '/bin/bash'],
        ['$PATH', 'Directory per gli eseguibili', '/usr/bin:/bin:...'],
        ['$LANG', 'Lingua e localizzazione', 'it_IT.UTF-8'],
        ['$PWD', 'Directory corrente', '/home/studente/docs'],
        ['$HOSTNAME', 'Nome della macchina', 'linux-pc'],
        ['$PS1', 'Formato del prompt', '\\u@\\h:\\w\\$ '],
        ['$?', 'Exit code ultimo comando', '0 (successo)'],
        ['$$', 'PID della shell corrente', '1234'],
      ]},

      { type: 'heading', level: 2, emoji: '📄', text: 'File di Configurazione della Shell' },
      { type: 'paragraph', text: 'La bash legge diversi file di configurazione a seconda di come viene avviata:' },
      { type: 'table', headers: ['File', 'Quando viene letto', 'Ambito', 'Uso tipico'], rows: [
        ['/etc/profile', 'Login shell (tutti gli utenti)', 'Globale', 'Variabili ambiente globali'],
        ['~/.bash_profile', 'Login shell', 'Utente', 'Setup login (chiama .bashrc)'],
        ['~/.profile', 'Login shell (se non esiste .bash_profile)', 'Utente', 'Alternative a .bash_profile'],
        ['~/.bashrc', 'Shell interattiva non-login', 'Utente', 'Alias, prompt, funzioni'],
        ['/etc/bash.bashrc', 'Shell interattiva (tutti)', 'Globale', 'Configurazione globale bash'],
        ['~/.bash_logout', 'Logout', 'Utente', 'Pulizia, messaggi di uscita'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede quali file vengono letti al login vs shell interattiva. Ricorda: login → /etc/profile + ~/.bash_profile. Interattiva → ~/.bashrc.' },
    ]
  },

  '2-3': {
    title: 'Ottenere Aiuto',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'Le Pagine Man' },
      { type: 'paragraph', text: 'Il comando man è il sistema di documentazione integrato di Linux. Ogni comando, file di configurazione e chiamata di sistema ha (o dovrebbe avere) una pagina man.' },
      { type: 'table', headers: ['Sezione', 'Contenuto', 'Esempio'], rows: [
        ['1', 'Comandi utente', 'man 1 ls'],
        ['2', 'Chiamate di sistema (kernel)', 'man 2 open'],
        ['3', 'Funzioni di libreria C', 'man 3 printf'],
        ['4', 'File speciali (/dev)', 'man 4 null'],
        ['5', 'Formati file e configurazione', 'man 5 passwd'],
        ['6', 'Giochi', 'man 6 fortune'],
        ['7', 'Miscellanea', 'man 7 ip'],
        ['8', 'Comandi di amministrazione', 'man 8 mount'],
      ]},
      { type: 'code', title: 'Comandi per ottenere aiuto', prompt: '$ man ls            # Manuale completo di ls\n$ man -k "copy file" # Cerca per keyword (= apropos)\n$ man 5 passwd      # Sezione 5: formato del file\n$ whatis ls         # Descrizione breve\n$ info coreutils    # Documentazione GNU dettagliata\n$ ls --help         # Aiuto integrato del comando', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Navigare dentro man', content: 'Dentro una pagina man: Spazio = avanti, b = indietro, /testo = cerca, q = esci. Man usa il programma "less" come pager.' },

      { type: 'heading', level: 2, emoji: '🔍', text: 'Cercare File nel Sistema' },
      { type: 'comparison', left: {
        title: 'find (tempo reale)',
        items: ['Cerca nel filesystem in tempo reale', 'Lento su grandi filesystem', 'Potente: cerca per nome, tipo, dimensione, data, permessi', 'Sempre aggiornato']
      }, right: {
        title: 'locate (database)',
        items: ['Cerca in un database pre-indicizzato', 'Velocissimo', 'Limitato: solo ricerca per nome', 'Database aggiornato con updatedb (di solito giornaliero)']
      }},
      { type: 'code', title: 'Esempi di ricerca file', prompt: '$ find /home -name "*.txt"        # File .txt in /home\n$ find / -type d -name "config"   # Directory chiamate config\n$ find /var -size +10M            # File più grandi di 10MB\n$ find . -mtime -7                 # Modificati negli ultimi 7 giorni\n$ find . -perm 755                 # Con permessi 755\n\n$ locate passwd                    # Cerca nel database\n$ which python                     # Dove si trova nel PATH\n$ whereis ls                       # Binario, sorgente e man', output: '' },
    ]
  },

  '2-4': {
    title: 'Navigazione e Gestione File',
    sections: [
      { type: 'heading', level: 2, emoji: '🌳', text: 'FHS — Filesystem Hierarchy Standard' },
      { type: 'paragraph', text: 'Il FHS definisce la struttura standard delle directory Linux. Tutte le distribuzioni seguono queste convenzioni, rendendo prevedibile dove trovare ogni tipo di file.' },
      { type: 'table', headers: ['Directory', 'Contenuto', 'Esempio'], rows: [
        ['/', 'Root — radice di tutto il filesystem', 'Tutto parte da qui'],
        ['/bin', 'Comandi essenziali per tutti gli utenti', 'ls, cp, mv, cat, bash'],
        ['/sbin', 'Comandi di sistema per l\'amministratore', 'mount, fdisk, iptables'],
        ['/etc', 'File di configurazione del sistema', 'passwd, fstab, nginx.conf'],
        ['/home', 'Directory personali degli utenti', '/home/mario, /home/studente'],
        ['/root', 'Home dell\'utente root', 'Separata da /home per sicurezza'],
        ['/var', 'Dati variabili (log, spool, cache)', '/var/log/syslog, /var/www'],
        ['/tmp', 'File temporanei (cancellati al reboot)', 'File di sessione, download temp'],
        ['/usr', 'Programmi e librerie installati', '/usr/bin, /usr/lib, /usr/share'],
        ['/opt', 'Software opzionale/terze parti', 'Browser, IDEs, applicazioni custom'],
        ['/dev', 'File di dispositivo', '/dev/sda (disco), /dev/null'],
        ['/proc', 'Filesystem virtuale — info kernel/processi', '/proc/cpuinfo, /proc/meminfo'],
        ['/sys', 'Filesystem virtuale — info hardware', 'Info dispositivi e driver'],
        ['/boot', 'Kernel e bootloader', 'vmlinuz, initramfs, grub'],
        ['/lib', 'Librerie condivise essenziali', 'libc.so, libpthread.so'],
        ['/mnt, /media', 'Mount point per dispositivi', 'USB, CD-ROM, dischi esterni'],
      ]},

      { type: 'heading', level: 2, emoji: '🧭', text: 'Percorsi Assoluti vs Relativi' },
      { type: 'comparison', left: {
        title: 'Percorso Assoluto',
        items: ['Inizia sempre con /', 'Identifica un file in modo univoco', 'Indipendente dalla posizione corrente', 'Esempio: /home/mario/documenti/file.txt']
      }, right: {
        title: 'Percorso Relativo',
        items: ['NON inizia con /', 'Relativo alla directory corrente (pwd)', 'Usa . (corrente) e .. (padre)', 'Esempio: ../documenti/file.txt']
      }},

      { type: 'heading', level: 2, emoji: '🔠', text: 'Globbing — Pattern Matching' },
      { type: 'paragraph', text: 'Il globbing permette di selezionare file usando pattern speciali. La shell espande il pattern prima di passarlo al comando.' },
      { type: 'table', headers: ['Pattern', 'Significato', 'Esempio', 'Risultato'], rows: [
        ['*', 'Zero o più caratteri qualsiasi', 'ls *.txt', 'file.txt, report.txt'],
        ['?', 'Esattamente un carattere', 'ls file?.txt', 'file1.txt, fileA.txt'],
        ['[abc]', 'Uno tra a, b, o c', 'ls file[123].txt', 'file1.txt, file2.txt'],
        ['[a-z]', 'Un carattere nel range', 'ls [a-c]*.txt', 'abc.txt, beta.txt'],
        ['[!abc]', 'Qualsiasi TRANNE a, b, c', 'ls [!0-9]*', 'file.txt (non 1file)'],
      ]},
      { type: 'code', title: 'Comandi essenziali per gestire i file', prompt: '$ mkdir -p progetto/src/main    # Crea con tutte le directory padre\n$ cp -r src/ backup/             # Copia ricorsiva\n$ mv old.txt new.txt             # Rinomina (o sposta)\n$ rm -rf directory_obsoleta/     # Elimina ricorsivamente (ATTENZIONE!)\n$ touch nuovo.txt                # Crea file vuoto o aggiorna timestamp\n$ ls -la                         # Lista dettagliata con file nascosti', output: '' },
      { type: 'infobox', variant: 'warning', title: 'rm -rf è pericoloso!', content: 'Il comando rm -rf cancella tutto ricorsivamente SENZA chiedere conferma. Un errore come "rm -rf /" può distruggere l\'intero sistema. Usa sempre con estrema cautela!' },
    ]
  },
}
