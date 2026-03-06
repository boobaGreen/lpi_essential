// LPIC-1 102 Extended Content  Italian
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_it = {

  'lpic1-102-105-1': {
    title: 'Ambiente Shell — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Personalizzare l\'Ambiente Bash' },
      { type: 'paragraph', text: 'L\'ambiente della shell è personalizzabile attraverso file di avvio, variabili, alias e funzioni. L\'esame richiede di conoscere l\'ordine di esecuzione di questi file.' },
      { type: 'table', headers: ['File', 'Tipo Shell', 'Funzione'], rows: [
        ['/etc/profile', 'Login (Globale)', 'Impostazioni sistema per tutte le shell di login'],
        ['~/.bash_profile', 'Login (Utente)', 'Precedenza 1: impostazioni utente (chiama .bashrc)'],
        ['~/.bash_login', 'Login (Utente)', 'Precedenza 2: letto se .bash_profile non esiste'],
        ['~/.profile', 'Login (Utente)', 'Precedenza 3: file generico (usato anche da Bourne/Korn sh)'],
        ['/etc/bash.bashrc', 'Non-login (Globale)', 'Impostazioni sistema per shell interattive non-login'],
        ['~/.bashrc', 'Non-login (Utente)', 'Alias e funzioni utente (letto a ogni nuovo terminale)'],
        ['~/.bash_logout', 'Logout (Utente)', 'Eseguito all\'uscita da una shell di login'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: 'Variabili d\'Ambiente Critiche' },
      { type: 'table', headers: ['Variabile', 'Significato', 'Esempio'], rows: [
        ['PATH', 'Directory dove la shell cerca i comandi', '/usr/local/bin:/usr/bin:/bin'],
        ['PS1', 'Prompt primario', '"\\u@\\h:\\w\\$ " (user@host:dir$ )'],
        ['PS2', 'Prompt secondario (comando multilinea)', '"> "'],
        ['HISTFILE', 'Dove salvare lo storico comandi', '~/.bash_history'],
        ['HISTSIZE', 'Linee tenute in memoria', '1000'],
        ['HISTFILESIZE', 'Linee salvate su file', '2000'],
        ['HISTCONTROL', 'Controllo salvataggio', 'ignoreboth (ignora spazi iniziali e duplicati)'],
      ]},
      { type: 'code', title: 'Impostare variabili e alias', prompt: '# Rendere permanente un alias (in ~/.bashrc)\nalias update="sudo apt update && sudo apt upgrade"\n\n# Modificare il PATH (in ~/.profile o ~/.bashrc)\nexport PATH="$PATH:$HOME/bin"\n\n# Applicare subito le modifiche a .bashrc\n$ source ~/.bashrc\n# o in alternativa:\n$ . ~/.bashrc', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Ricorda: per ricaricare un file di configurazione nella shell corrente usa `source file` oppure `. file`. I file ~/.bash_profile e ~/.profile sono letti SOLO al login (es: via ssh), mentre ~/.bashrc è letto aprendo un nuovo terminale (non-login).' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Scripting Bash — Basi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Struttura di uno Script' },
      { type: 'paragraph', text: 'Uno script bash è un file di testo contenente comandi eseguiti sequenzialmente. Il primo elemento essenziale è la riga "shebang" (o hashbang) che indica quale interprete usare.' },
      { type: 'code', title: 'Esempio base script', prompt: '#!/bin/bash\n# Questo è un commento\n\necho "Inizio script"\n\nNOME="Linux"\necho "Sistema: $NOME"\n\n# Esecuzione:\n# 1. Dare permessi di esecuzione: chmod +x script.sh\n# 2. Eseguire: ./script.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🔢', text: 'Variabili Speciali e Argomenti' },
      { type: 'table', headers: ['Variabile', 'Significato'], rows: [
        ['$0', 'Nome dello script (es: ./script.sh)'],
        ['$1, $2... $9', 'Argomenti passati allo script (parametro 1, 2, ecc.)'],
        ['$#', 'Numero totale di argomenti passati'],
        ['$@', 'Tutti gli argomenti individualmente ("$1" "$2" "$3")'],
        ['$*', 'Tutti gli argomenti come singola stringa ("$1 $2 $3")'],
        ['$?', 'Codice di uscita dell\'ultimo comando (0=successo, >0=errore)'],
        ['$$', 'PID dello script attuale'],
        ['$!', 'PID dell\'ultimo job in background'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Ritorno dei comandi ($?)', content: 'In Linux e Bash, un exit status pari a 0 significa che il comando ha avuto SUCCESSO. Qualsiasi numero diverso da 0 (es. 1, 2, 127) indica un ERRORE. Questo è l\'opposto di come funzionano i boolean in molti linguaggi di programmazione.' },
      { type: 'code', title: 'Strutture condizionali: if / case', prompt: '# Struttura if-then-elif-else-fi\nif [ -f "/etc/passwd" ]; then\n  echo "Il file esiste"\nelif [ -d "/etc" ]; then\n  echo "È una directory"\nelse\n  echo "Non trovato"\nfi\n\n# Struttura case (switch)\ncase "$1" in\n  start)\n    echo "Avvio servizio..."\n    ;;\n  stop)\n    echo "Arresto servizio..."\n    ;;\n  *)\n    echo "Uso: $0 {start|stop}"\n    exit 1\n    ;;\nesac', output: '' },
      { type: 'heading', level: 2, emoji: '🔄', text: 'Cicli: for e while' },
      { type: 'code', title: 'Strutture iterative', prompt: '# Ciclo for - su una lista\nfor FILE in *.txt; do\n  echo "Elaboro $FILE"\n  cp "$FILE" "$FILE.bak"\ndone\n\n# Ciclo while - finché la condizione è vera\nCONTATORE=1\nwhile [ $CONTATORE -le 5 ]; do\n  echo "Giro numero $CONTATORE"\n  CONTATORE=$((CONTATORE + 1))\ndone\n\n# Esecuzione comandi (Command Substitution)\nDATA=$(date +%Y-%m-%d)\n# sintassi legacy equivalente: DATA=`date +%Y-%m-%d`', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPIC-1 si aspetta che tu sappia usare il costrutto seq all\'interno di un for (es: for i in $(seq 1 10)), capire la differenza tra "$@" (argomenti come entità separate) e "$*" (stringa singola), e riconoscere i comparatori numerici (-eq, -lt) rispetto a quelli alfabetici (=, <).' },
    ]
  },

  'lpic1-102-106-1': {
    title: 'X11 e Wayland — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'I Display Server in Linux' },
      { type: 'paragraph', text: 'Un display server è il componente responsabile del disegno delle finestre sullo schermo e della gestione di input (mouse/tastiera). Storicamente Linux usa X11, ma i sistemi moderni stanno migrando verso Wayland.' },
      { type: 'comparison', left: {
        title: 'X Window System (X11)',
        items: ['Architettura client/server di rete', 'Le app comunicano col server X', 'Permette il forward via SSH (X11 Forwarding)', 'Vecchio e complesso', 'Menù e finestre gestite dal Window Manager', 'Client storici: xhost, xauth']
      }, right: {
        title: 'Wayland',
        items: ['Protocollo moderno e più sicuro', 'Le app disegnano direttamente il buffer', 'Compositing integrato nel server', 'Minore latenza e tearing', 'Sopraffarà X11 (default su Fedora/Ubuntu)', 'XWayland per app legacy']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Configurazione di X11' },
      { type: 'table', headers: ['File / Directory', 'Funzione'], rows: [
        ['/etc/X11/xorg.conf', 'File di configurazione monolitico tradizionale (ora opzionale)'],
        ['/etc/X11/xorg.conf.d/', 'Directory per frammenti di configurazione modulari'],
        ['~/.xsession', 'Script utente eseguito all\'avvio tramite Display Manager'],
        ['~/.Xresources', 'Gestione personalizzazioni programmi X (colore, font)'],
        ['/usr/share/X11/', 'Dati di sistema del server X11'],
        ['/var/log/Xorg.0.log', 'Log principale del server X11 per troubleshooting'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Accesso Remoto e X11 Forwarding' },
      { type: 'paragraph', text: 'L\'architettura client-server di X11 permette di eseguire un\'applicazione grafica su un server remoto ma farla apparire sul proprio monitor locale, usando SSH.' },
      { type: 'code', title: 'X11 Forwarding', prompt: '# Sul client (PC locale) abilitare l\'inoltro X11\n$ ssh -X user@remote-server\n# oppure -Y per abilitarlo saltando i controlli di sicurezza\n$ ssh -Y user@remote-server\n\n# Eseguire il programma remoto che si aprirà sul display locale\nuser@remote:~$ firefox &', output: '' },
      { type: 'table', headers: ['Comando per Accesso', 'Azione'], rows: [
        ['xhost +IP', 'Vecchia mod. insicura: permette a IP di connettersi al display X locale'],
        ['DISPLAY', 'Variabile d\'ambiente che definisce quale monitor usare (es. :0.0)'],
        ['VNC / RDP', 'Protocolli moderni per l\'accesso desktop remoto (Wayland e X11)'],
        ['SPICE', 'Protocollo per gestire macchine virtuali KVM graficamente'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 richiede di distinguere tra X Window System (architettura), i file chiave come `xorg.conf.d`, il log di debug `Xorg.0.log`, e comprendere il concetto e la variabile display come `DISPLAY=:0` e l\'opzione ssh `-X`.' },
    ]
  },

  'lpic1-102-106-2': {
    title: 'Accessibilità (a11y) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Funzioni di Accessibilità Visiva' },
      { type: 'paragraph', text: 'I desktop environment Linux offrono funzioni per aiutare utenti con deficienze visive, uditive o motorie. Questi strumenti sono noti come a11y (Accessibility).' },
      { type: 'table', headers: ['Stato Fisico', 'Software Tool', 'Scopo e Funzione'], rows: [
        ['Ipovisione', 'Orca', 'Screen Reader (lettore dello schermo con sintesi vocale GNOME)'],
        ['Ipovisione', 'High Contrast Theme', 'Tema ad alto contrasto (bianco su nero / testi grandi)'],
        ['Ipovisione', 'Magnifier / KMagnifier', 'Strumento di ingrandimento dello schermo (lente di ingrandimento)'],
        ['Cecità', 'BRLTTY', 'Demone per gestire i display Braille in modalità solo testo/console'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: 'Accessibilità Motoria (Tastiera)' },
      { type: 'list', items: [
        { term: 'Sticky Keys (Tasti Singoli)', desc: 'Permette di premere combinazioni come Ctrl+Alt+Canc in sequenza (uno alla volta) per chi non può premere più tasti simultaneamente.' },
        { term: 'Slow Keys (Tasti Lenti)', desc: 'Previene battiture involontarie richiedendo che un tasto sia tenuto premuto per una frazione di secondo prima di essere accettato.' },
        { term: 'Bounce Keys (Filtro Tasti)', desc: 'Ignora pressioni ripetute e veloci dello stesso tasto. Utile per tremori.' },
        { term: 'Mouse Keys', desc: 'Permette di muovere il cursore del mouse usando il tastierino numerico.' },
        { term: 'On-Screen Keyboard', desc: 'Tastiera virtuale a schermo comandabile col mouse o con sistemi di puntamento oculare.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'Assistive Tools', content: 'Ricorda l\'associazione: Orca = Screen Reader. BRLTTY = Braille. Sticky/Slow/Bounce Keys = per limitazioni al movimento.' },
    ]
  },

  'lpic1-102-107-1': {
    title: 'Gestione Utenti e Gruppi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: 'I File degli Utenti' },
      { type: 'paragraph', text: 'La gestione di utenti e gruppi in Linux poggia su quattro file testuali fondamentali, modificati tramite comandi dedicati e mai (o quasi) editati a mano.' },
      { type: 'table', headers: ['File', 'Contenuto e Scopo', 'Permessi Tipici'], rows: [
        ['/etc/passwd', 'Informazioni pubbliche degli utenti (nome, UID, shell, home)', '644 (Tutti lo leggono)'],
        ['/etc/shadow', 'Hash delle password, scadenza account (shadowing)', '640 o 600 (Solo root+shadow)'],
        ['/etc/group', 'Definizione dei gruppi e dei GID', '644 (Tutti lo leggono)'],
        ['/etc/gshadow', 'Password ed amministratori dei gruppi', '640 o 600 (Solo root+shadow)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: 'Il file /etc/passwd in Dettaglio' },
      { type: 'code', title: 'Struttura /etc/passwd (7 campi separati da due punti)', prompt: 'user1:x:1001:1001:Mario Rossi:/home/user1:/bin/bash', output: '1. Nome utente (user1)\n2. Password (x = è in /etc/shadow)\n3. UID (User ID, es. 1001)\n4. GID (Group ID primario, es. 1001)\n5. GECOS (Info, es. "Mario Rossi")\n6. Home directory (/home/user1)\n7. Login Shell (/bin/bash)' },
      { type: 'heading', level: 2, emoji: '🔐', text: 'Amministrazione Utenti (useradd, mod, del)' },
      { type: 'table', headers: ['Comando', 'Azione Tipica', 'Opzioni Frequenti'], rows: [
        ['useradd user2', 'Crea un nuovo utente', '-m (crea home), -s (shell), -G (gruppi supp), -c (gecos)'],
        ['usermod user2', 'Modifica utente esistente', '-aG (aggiungi a gruppo supp senza togliere), -L (lock acct)'],
        ['userdel user2', 'Elimina utente', '-r (elimina anche home directory e mail spool)'],
        ['groupadd group1', 'Crea gruppo', '-g (GID specifico)'],
        ['passwd user1', 'Cambia password a user1', '-l (lock password), -S (status password)'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Il comando usermod -G', content: 'ATTENZIONE: Usare usermod -G gruppo utente SOSTITUISCE tutti i gruppi supplementari dell\'utente con quello indicato. Per AGGIUNGERE un utente a un gruppo mantenendo i precedenti, USARE SEMPRE: usermod -aG gruppo utente (-a = append).' },
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Configurazioni e Template' },
      { type: 'list', items: [
        { term: '/etc/skel', desc: 'Directory "skeleton". Quando si crea un utente con -m, il contenuto di questa directory viene copiato nella sua nuova home dir (file come .bashrc).' },
        { term: '/etc/login.defs', desc: 'Configurazioni per shadowing, scadenze password default e range UID/GID automatici.' },
        { term: '/etc/default/useradd', desc: 'Costanti e default che usa il comando useradd (es: shell base, skeleton, mount home).' },
      ]},
    ]
  },

  'lpic1-102-107-2': {
    title: 'Schedulazione dei Task — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: 'Esecuzione Periodica con cron' },
      { type: 'paragraph', text: 'Il demone crond serve ad eseguire comandi (job) ad orari o intervalli regolari specificati nei crontab (cron tables).' },
      { type: 'table', headers: ['Comando / File', 'Azione'], rows: [
        ['crontab -e', 'Modifica (edit) il crontab dell\'utente corrente'],
        ['crontab -l', 'Stampa a video (list) i job del crontab'],
        ['crontab -r', 'Rimuove (remove) interamente il proprio crontab'],
        ['/var/spool/cron/', 'Directory dove sono salvati i crontab utente'],
        ['/etc/crontab', 'Il crontab di sistema (aggiunge il campo USER)'],
        ['/etc/cron.d/', 'Directory per frammenti di crontab di sistema (es. /etc/cron.d/sysstat)'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: 'Sintassi del Crontab Utente' },
      { type: 'code', title: 'Formato a 5 campi temporali', prompt: '# m h  dom mon dow   command\n# * = ogni, */n = ogni n, a,b = lista, a-b = range\n\n# Ogni lunedì alle 3:15 del mattino\n15 3 * * 1 /scripts/backup.sh\n\n# Ogni 5 minuti durante il mese di Dicembre\n*/5 * * 12 * /scripts/check_log.sh\n\n# Ogni mezzora (0 e 30) feriale (lun-ven)\n0,30 * * * 1-5 /scripts/sync.sh', output: 'Campi (Min : Ora : Giorno Mese : Mese 1-12 : Giorno Sett 0-7, 0=Dom)' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Controllo degli Accessi a cron e at' },
      { type: 'paragraph', text: 'Il comando at serve a schedulare un job una TANTUM nel futuro.' },
      { type: 'table', headers: ['Comando at', 'Descrizione e uso'], rows: [
        ['at 14:00', 'Apri prompt per comando da eseguire oggi alle 14 (Ctrl-D per salvare)'],
        ['atq / at -l', 'Mostra la lista (queue) dei job at in attesa'],
        ['atrm 3 / at -r', 'Rimuovi il job specifico numero 3'],
        ['/var/spool/at/', 'Directory di sistema dei job (atjob)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame richiede la conoscenza del controllo accessi: Se esiste cron.allow (at.allow), SOLO gli utenti lì elencati possono usare cron (at). Se NON esiste allow, cron.deny (at.deny) decreta chi E\' BLOCCATO, gli altri default SI. Se non esiste né allow né deny, di default usa root o tutti a seconda della distro.' },
    ]
  },

  'lpic1-102-107-3': {
    title: 'Localizzazione e Internazionalizzazione (i18n) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Variabili LANG e Locale' },
      { type: 'paragraph', text: 'La "locale" è un set di variabili ambientali (iniziano spesso in LC_) che impostano la lingua, i formati della valuta, dei numeri, delle date e della codifica dei caratteri nel sistema Linux.' },
      { type: 'table', headers: ['Variabile', 'Descrizione ed uso'], rows: [
        ['LANG', 'Variabile base (fallback) di localizzazione (es. en_US.UTF-8)'],
        ['LC_ALL', 'Override totale: bypassa e "vince" su tutte le LC_* e LANG'],
        ['LC_MESSAGES', 'Lingua dei messaggi di sistema dei comandi'],
        ['LC_TIME', 'Formato delle date e orari (24h vs AM/PM, ordine GG-MM)'],
        ['LC_CTYPE', 'Classificazione e conversione di set di caratteri'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Gestione e Comandi per il Timezone' },
      { type: 'table', headers: ['Strumento/File', 'Operazione e Azione'], rows: [
        ['locale', 'Stampa le variabili locali correntemente esportate'],
        ['locale -a', 'Elenco delle locale generate e disponibili'],
        ['/etc/timezone', 'Contiene testualmente il fuso orario attuale (Debian)'],
        ['/etc/localtime', 'Simlink compilato o copia binaria che punta al file del fuso in zoneinfo'],
        ['/usr/share/zoneinfo/', 'Database dei files binari timezone (es. /usr/share/zoneinfo/Europe/Rome)'],
      ]},
      { type: 'code', title: 'Comandi Pratici', prompt: '# Impostare il timezone modificando il symlink\n# o usando il file /etc/localtime\n$ sudo ln -sf /usr/share/zoneinfo/Europe/Rome /etc/localtime\n\n# Strumento preferito su systemd (cambia NTP, hardware clock e timezone)\n$ timedatectl set-timezone Europe/Rome\n\n# Impostare UTF-8 per la sessione\n$ export LANG=it_IT.UTF-8\n\n# Convertire encodings (es converti file da ISO ad UTF-8)\n$ iconv -f ISO-8859-15 -t UTF-8 input.txt > output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'iconv per le conversioni', content: 'iconv è uno strumento essenziale richiesto all\'esame 102 per convertire l\'encoding dei file. L\'opzione -f sta per FROM e -t per TO.' },
    ]
  },

  'lpic1-102-108-1': {
    title: 'NTP ed Ora di Sistema — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: 'Hardware Clock vs System Clock' },
      { type: 'paragraph', text: 'Linux gestisce due orologi: l\'Hardware Clock (RTC o BIOS clock, a batteria) e il System Clock (kernel in RAM). Al boot il kernel legge l\'RTC e tiene l\'ora in memoria. Allo shutdown salva l\'ora di sistema nell\'RTC.' },
      { type: 'comparison', left: {
        title: 'Hardware Clock (RTC)',
        items: ['Mantenuto dalla batteria CMOS', 'Indipendente dal SO', 'Letto solo al boot', 'Tipicamente impostato in UTC', 'Comando: hwclock (storicamente)']
      }, right: {
        title: 'System Clock (Kernel)',
        items: ['Mantenuto dal kernel Linux in RAM', 'Include fuso orario (timezone)', 'Sincronizzato via rete (NTP)', 'Usato per timestamp dei file', 'Comando: date']
      }},
      { type: 'heading', level: 2, emoji: '⏱️', text: 'Sincronizzazione Network Time Protocol' },
      { type: 'paragraph', text: 'NTP mantiene il System Clock sincronizzato con server esatti su internet. Usa la porta UDP 123. Esistono storicamente tre demoni (ntpd, chrony, systemd-timesyncd).' },
      { type: 'table', headers: ['Demone/Comando', 'Caratteristica/File Configurazione', 'Note d\'uso'], rows: [
        ['ntpd (Network Time Protocol daemon)', '/etc/ntp.conf', 'Classico. Lento a sincronizzare, richiede rete fissa'],
        ['chronyd', '/etc/chrony.conf', 'Moderno. Sincronizza velocemente, ottimo per laptop offline/online. Usa chronyc'],
        ['systemd-timesyncd', '/etc/systemd/timesyncd.conf', 'Client SNTP minimale integrato in systemd.'],
        ['ntpq -p', '(ntp query)', 'Mostra i server (peers), l\'offset e lo stato (strato)'],
        ['hwclock -w', '(write)', 'Scrive l\'ora attuale del server nel clock hardware'],
      ]},
    ]
  },

  'lpic1-102-108-2': {
    title: 'Logger di Sistema (Syslog, Journald) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Demoni di Logging' },
      { type: 'paragraph', text: 'I servizi e il kernel mandano log che sono centralizzati e scritti su file da servizi come rsyslogd (storico, config /etc/rsyslog.conf) o systemd-journald (moderno, binario).' },
      { type: 'table', headers: ['Facility (Origine)', 'Priority (Livello Gravità)', 'Sintassi rsyslog.conf'], rows: [
        ['auth/authpriv, cron, daemon', '0-emerg, 1-alert, 2-crit, 3-err', 'facility.priority  azione (file/remoto/utente)'],
        ['kern, lpr, mail, user', '4-warning, 5-notice, 6-info, 7-debug', 'mail.info   /var/log/maillog (TUTTE le info e GIU: war,err,crit)'],
        ['local0 ... local7 (custom)', 'none (esclude la facility)', 'cron.*      /var/log/cron (TUTTE le priority per cron)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'Comandi di Ricerca e Log Rotation' },
      { type: 'code', title: 'Consultare Journald', prompt: '# Visualizza i log del boot attuale (vince dmesg intero)\n$ journalctl -b\n\n# Solo riga di un\'unità/servizio specifico\n$ journalctl -u nginx.service\n\n# Log di oggi, segui (follow) in tempo reale\n$ journalctl --since today -f\n\n# Usa logger per creare un log manuale da script\n$ logger -p user.notice "Script di backup terminato"', output: '' },
      { type: 'paragraph', text: 'logrotate evita che i file di log in /var/log riempiano il filesystem. Viene lanciato da cron giornalmente. Ruota, comprime e cancella vecchi log. (Config: /etc/logrotate.conf e /etc/logrotate.d/*).' },
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 richiede: Struttura facility.priority, i principali file come /var/log/messages (o syslog), /var/log/secure (o auth.log per i login). Journald scrive log persistenti solo se la directory /var/log/journal/ esiste.' },
    ]
  },

  'lpic1-102-108-3': {
    title: 'Sistema Mail (MTA) e Aliases — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Flusso delle Email Locali' },
      { type: 'paragraph', text: 'Storicamente i server UNIX/Linux inviano notifiche di sistema, output di cron, e report amministrativi alla mail "root" locale usando un MTA (Mail Transfer Agent) come Postfix o Sendmail.' },
      { type: 'table', headers: ['Protocollo/Componente', 'Azione Eseguita'], rows: [
        ['SMTP / tcp 25', 'Simple Mail Transfer Protocol, inoltra mail server->server'],
        ['MTA (Mail Transfer Agent)', 'Accetta l\'email locale e la reinoltra o consegna ('],
        ['MUA (Mail User Agent)', 'Il client, esegue il comando `mail` oppure mutt'],
        ['~/.forward', 'Ogni utente modella questo file per deviare la SUA posta a nuovo indirizzo.'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'Inoltro di Sistema: /etc/aliases' },
      { type: 'paragraph', text: 'L\'alias redirige la local mail (MTA). È fondamentale che "root" riceva mail ma root raramente fa login, quindi tutte le email da root sono inoltrate agli utenti "sysadmin".' },
      { type: 'code', title: 'File /etc/aliases', prompt: '# /etc/aliases\npostmaster: root\nwebmaster: root\n\n# TUTTO ciò che va a root, terminalo in user1\nroot: user1\n\n# DOPO LA MODIFICA bisogna compilare il DB binario (aliases.db):\n$ sudo newaliases', output: '' },
      { type: 'infobox', variant: 'warning', title: 'newaliases', content: 'All\'esame è fondamentale ricordare: l\'MTA non legge MAI il file di testo /etc/aliases. L\'MTA usa il database /etc/aliases.db. Ogni volta che editi il file testuale devi eseguire `newaliases`!' },
    ]
  },

  'lpic1-102-108-4': {
    title: 'Manutenzione Stampanti (CUPS) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'Common UNIX Printing System (CUPS)' },
      { type: 'paragraph', text: 'CUPS è il gestore delle code di stampa su Linux. Usa IPP (Internet Printing Protocol, porta 631) ed espone una pagina di amministrazione web su localhost:631. I file di conf sono in /etc/cups/.' },
      { type: 'table', headers: ['Comando CUPS/LPD', 'Azione', 'Opzioni'], rows: [
        ['lp / lpr', 'Invia file alla coda di stampa', 'lp -d NOME_STAMPANTE file.pdf'],
        ['lpstat', 'Stato delle stampanti o code', 'lpstat -p (tutte stampanti), lpstat -d (default)'],
        ['lpq', 'Mostra i job nella coda', 'Mostra ID Job utente'],
        ['cancel / lprm', 'Elimina job/cancella', 'cancel JOB_ID / lprm ID'],
        ['cupsaccept / cupsreject', 'Accetta o rifiuta nuovi job in coda', '(Admin)'],
        ['cupsenable / cupsdisable', 'Avvia o ferma la stampa fisica dei job su HW', '(Admin)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'La differenza logica tra ACCETTARE e ABILITARE è un perno d\'esame: `cupsreject` respinge chi stampa dicendo "coda chiusa". `cupsdisable` permette di stampare (la coda ACCETTA i job nel server) ma la stampante fisica resta spenta e non "succhia" job. LPD è il protocollo storico legacy (porta 515).' },
    ]
  },

  'lpic1-102-109-1': {
    title: 'Fondamenti di Rete — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Indirizzi IPv4 e Subnetting' },
      { type: 'paragraph', text: 'Un indirizzo IPv4 è formato da 32 bit divisi in 4 ottetti (es: 192.168.1.10). La Subnet Mask (es: 255.255.255.0 o /24) determina quale parte dell\'indirizzo identifica la rete (Network ID) e quale l\'host (Host ID).' },
      { type: 'table', headers: ['Classe', 'Range Primo Ottetto', 'Subnet Mask Default', 'Notazione CIDR'], rows: [
        ['A', '1 - 126', '255.0.0.0', '/8'],
        ['B', '128 - 191', '255.255.0.0', '/16'],
        ['C', '192 - 223', '255.255.255.0', '/24'],
        ['D (Multicast)', '224 - 239', '—', '—'],
        ['E (Sperimentale)', '240 - 255', '—', '—'],
      ]},
      { type: 'heading', level: 2, emoji: '🔒', text: 'Indirizzi Privati (RFC 1918)' },
      { type: 'paragraph', text: 'Questi indirizzi non sono instradabili su Internet (non-routable). Richiedono NAT (Network Address Translation) per comunicare con l\'esterno.' },
      { type: 'list', items: [
        { term: 'Classe A', desc: '10.0.0.0 - 10.255.255.255 (1 rete /8)' },
        { term: 'Classe B', desc: '172.16.0.0 - 172.31.255.255 (16 reti /16)' },
        { term: 'Classe C', desc: '192.168.0.0 - 192.168.255.255 (256 reti /24)' },
        { term: 'APIPA/Link-Local', desc: '169.254.0.0/16 — Assegnati automaticamente se DHCP fallisce' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPIC-1 si aspetta la conoscenza delle 3 classi di IP privati, della subnet mask /24 (=255.255.255.0), e del concetto di Default Gateway (l\'IP del router che permette di uscire dalla rete locale).' },
    ]
  },

  'lpic1-102-109-2': {
    title: 'Configurazioni e Porte di Rete — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'File di Configurazione (Debian/Ubuntu)' },
      { type: 'table', headers: ['File / Directory', 'Scopo'], rows: [
        ['/etc/network/interfaces', 'Configurazione statica/DHCP delle schede di rete (legacy)'],
        ['/etc/resolv.conf', 'Elenco dei server DNS (es: nameserver 8.8.8.8)'],
        ['/etc/hosts', 'Risoluzione nomi locale (bypassa il DNS)'],
        ['/etc/nsswitch.conf', 'Ordine di risoluzione (es: hosts: files dns)'],
        ['/etc/services', 'Mappatura porte/protocolli standard (es: ssh 22/tcp)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔌', text: 'Porte Standard' },
      { type: 'table', headers: ['Porta', 'Protocollo', 'Servizio'], rows: [
        ['20, 21', 'TCP', 'FTP (File Transfer Protocol)'],
        ['22', 'TCP', 'SSH (Secure Shell)'],
        ['23', 'TCP', 'Telnet (In chiaro, insicuro)'],
        ['25', 'TCP', 'SMTP (Invio Email)'],
        ['53', 'TCP/UDP', 'DNS (Risoluzione nomi)'],
        ['80, 443', 'TCP', 'HTTP, HTTPS (Web)'],
        ['110, 143', 'TCP', 'POP3, IMAP (Ricezione Email)'],
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: 'Troubleshooting di Rete — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Strumenti di Diagnostica' },
      { type: 'table', headers: ['Comando', 'Funzione e Uso'], rows: [
        ['ping', 'Testa la raggiungibilità ICMP (ping -c 4 8.8.8.8)'],
        ['traceroute / tracepath', 'Mostra i router attraversati per raggiungere la meta'],
        ['host / nslookup / dig', 'Interroga i server DNS per risolvere nomi (dig A www.linux.org)'],
        ['netstat / ss', 'Mostra connessioni aperte e porte in ascolto'],
        ['nc (netcat)', 'Testa connessioni a porte specifiche (nc -vz 10.0.0.1 22)'],
      ]},
      { type: 'code', title: 'netstat e ss (Socket Statistics)', prompt: '# Mostra le porte TCP in ascolto (L) con il PID (p)\n$ ss -tulpn\n$ netstat -tulpn\n\n# Mostra la routing table usata dal kernel (n = numeri, niente nomi DNS)\n$ netstat -rn', output: '' },
      { type: 'infobox', variant: 'tip', title: 'ss vs netstat', content: 'Il comando `ss` è il rimpiazzo moderno e più veloce di `netstat`. L\'opzione -t significa TCP, -u UDP, -l listening, -p process PID, -n non risolvere i nomi (rimani su IP/Port in formato numerico per maggiore velocità).' },
    ]
  },

  'lpic1-102-110-1': {
    title: 'Sicurezza, SUID e GPG — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Permessi Speciali (SUID/SGID)' },
      { type: 'paragraph', text: 'I permessi SUID (Set User ID = 4xxx) permettono a un utente di eseguire un eseguibile con i permessi del PROPRIETARIO (di solito root) al posto dei propri.' },
      { type: 'code', title: 'Trova SUID Files (Comando Tipico LPIC-1)', prompt: '# Cerca tutti i file normali (-type f) con il bit SetUID abilitato (4000)\n$ find / -perm /4000 -user root -type f -exec ls -l {} \\; 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '🔑', text: 'Crittografia asimmetrica: GPG (GnuPG)' },
      { type: 'paragraph', text: 'GnuPG implementa lo standard OpenPGP per cifrare, firmare e decifrare file usando coppie di chiavi Pubblica/Privata.' },
      { type: 'table', headers: ['Comando gpg', 'Operazione GPG'], rows: [
        ['gpg --gen-key', 'Creazione del keyring iniziale (pubblico e segreto)'],
        ['gpg --export email', 'Esporta CHIAVE PUBBLICA (da diffondere agli altri) in binario'],
        ['gpg -a --export email', 'Esporta CHIAVE PUBBLICA in testo ASCII (armor)'],
        ['gpg --import key.asc', 'Importa la chiave pubblica di qualcun altro'],
        ['gpg --list-keys', 'Mostra il keyring pubblico'],
        ['gpg -e -r user file', 'Cifra (encrypt) per il destinatario specificato (-r)'],
        ['gpg -d file.gpg', 'Decifra (decrypt) il documento usando la TUA chiave privata'],
      ]},
    ]
  },

  'lpic1-102-110-2': {
    title: 'Sicurezza delle Password e Limiti (ulimit) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🛂', text: 'Shadow Passwords e Scadenza' },
      { type: 'table', headers: ['Opzione chage', 'Parametro di invecchiamento /etc/shadow'], rows: [
        ['chage -l user', 'Mostra lo stato (list) attuale per utente'],
        ['chage -M 90 user', 'Max giorni validità password. Passati 90gg deve cambiarla'],
        ['chage -m 10 user', 'Min giorni prima di rimpiazzare. Non può cambiarla prima di 10gg'],
        ['chage -W 7 user', 'Warning. Avvisa utente ai login 7 giorni prima della scadenza'],
        ['chage -E 2025-12-31', 'Expire: L\'intero account utente cessa di funzionare in questa data'],
      ]},
      { type: 'heading', level: 2, emoji: '👮', text: 'Limiti di Risorse per gli Utenti' },
      { type: 'paragraph', text: 'Un utente senza limiti (es "ulimit -a" infinito) può scrivere un fork-bomb (:(){:|:&};:) che intasa la RAM in millisecondi saturando root, mandando il Kernel in panico.' },
      { type: 'list', items: [
        { term: 'Comando: ulimit', desc: 'Imposta o visualizza i limiti della sessione utente corrente (soft/hard)' },
        { term: 'File: /etc/security/limits.conf', desc: 'File per limitare memoria (RSS), file aperti (nofile) o processi max (nproc)' },
        { term: 'Hard vs Soft Limit', desc: 'Soft (S) = val predefinito che l\'utente stesso può alzare fino all\'hard limit. Hard (H) = massimo assoluto imposto da root' },
      ]},
      { type: 'infobox', variant: 'warning', title: 'Comandi lsof, nmap, netstat', content: 'In LPIC-1: `lsof -i` (lista porte e socket apparsi aperti), nmap e netstat servono a vedere DA FUORI ed IN LOCALE chi (e cosa) ci sta ascoltando (Security audit).' },
    ]
  },

  'lpic1-102-110-3': {
    title: 'Configurazioni Sicure per Rete e Servizi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Connessioni e SSH' },
      { type: 'paragraph', text: 'SSH (Secure Shell) rimpiazza tool storici mandando il traffico crittografato sulla tcp/22. Ha un file di base /etc/ssh/sshd_config (demone server) ed ssh_config (client locale).' },
      { type: 'code', title: 'File di Configurazione Sicuri /etc/ssh/sshd_config', prompt: '# Impostazioni vitali (dopo le quali: sudo systemctl restart sshd)\nPort 2222                 # Cambia porta\nPermitRootLogin no        # MAI via root con password\nPasswordAuthentication no # Solo chiavi RSA/Ed25519', output: '' },
      { type: 'table', headers: ['Comandi OpenSSH', 'Operazioni Sicurezza SSH'], rows: [
        ['ssh-keygen', 'Genera chiavi (RSA o moderna ed25519) in ~/.ssh/id_rsa'],
        ['ssh-copy-id remote', 'Copia SICURA della /id_rsa.pub/ nel /authorized_keys/ del remoto'],
        ['ssh-agent', 'Tiene la passphrase "sbloccata" temporaneamente in ram'],
      ]},
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Sicurezza a livello di Wrapper (TCPD)' },
      { type: 'list', items: [
        { term: '/etc/hosts.allow', desc: 'Regole permit. Permette il demone X all\'indirizzo o CDIR Y. (sshd: 192.168.)' },
        { term: '/etc/hosts.deny', desc: 'Regole deny (es: sshd: ALL blocco mondo esterno escluso l\'allow)' },
      ]},
    ]
  },

}
