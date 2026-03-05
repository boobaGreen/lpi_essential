// RHCSA Lesson Content — Italiano
// Struttura: { [lessonId]: { comic, keyPoints, terminal } }

export const rhcsaLessonContent = {

  // ─── TOPIC 1: Strumenti Essenziali ─────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell e Redirezione I/O',
      panels: [
        { emoji: '📤', text: '`>` sovrascrive un file con l\'output: `echo "ciao" > file.txt` crea o sovrascrive.' },
        { emoji: '📥', text: '`>>` aggiunge in coda senza sovrascrivere: `echo "altro" >> file.txt`.' },
        { emoji: '🔗', text: '`|` (pipe) passa l\'output di un comando come input del successivo: `ls | grep conf`.' },
        { emoji: '⚠️', text: '`2>` redirige solo gli errori: `find / -name "*.conf" 2> /dev/null` nasconde gli errori.' },
        { emoji: '🎯', text: '`&>` redirige sia stdout che stderr nello stesso file: `comando &> output.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Operatori di Redirezione',
        items: [
          '`>` — sovrascrive stdout su file',
          '`>>` — aggiunge stdout a file',
          '`2>` — redirige stderr su file',
          '`&>` — redirige stdout + stderr',
          '`<` — prende input da file',
        ],
      },
      {
        title: 'La Pipe `|`',
        items: [
          'Concatena comandi: output del primo → input del secondo',
          '`ls -la | grep "^d"` — solo directory',
          '`cat file | sort | uniq` — righe uniche ordinate',
          '`ps aux | grep httpd` — processi httpd',
        ],
      },
      {
        title: '/dev/null',
        items: [
          'File speciale che scarta tutto l\'input',
          'Usato per sopprimere output indesiderato',
          '`comando 2>/dev/null` — ignora errori',
          '`comando &>/dev/null` — silenzio totale',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep e Regular Expressions',
      panels: [
        { emoji: '🔎', text: '`grep "pattern" file` cerca righe contenenti il pattern nel file.' },
        { emoji: '🔄', text: '`grep -r "pattern" /etc/` cerca ricorsivamente in una directory.' },
        { emoji: '❌', text: '`grep -v "pattern"` mostra le righe che NON corrispondono al pattern.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` usa extended regex con alternativa.' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` conta le righe corrispondenti.' },
      ],
    },
    keyPoints: [
      {
        title: 'Opzioni grep essenziali',
        items: [
          '`-i` — case-insensitive',
          '`-r` o `-R` — ricerca ricorsiva',
          '`-v` — inverti il match (NOT)',
          '`-n` — mostra numero di riga',
          '`-c` — conta le corrispondenze',
          '`-l` — mostra solo nomi file',
          '`-E` — extended regex (egrep)',
        ],
      },
      {
        title: 'Regex di base',
        items: [
          '`.` — qualsiasi carattere singolo',
          '`*` — zero o più del precedente',
          '`^` — inizio riga',
          '`$` — fine riga',
          '`[abc]` — uno tra a, b, c',
          '`[0-9]` — cifra da 0 a 9',
          '`\\b` — confine di parola',
        ],
      },
      {
        title: 'Comandi correlati',
        items: [
          '`egrep` = `grep -E` (extended)',
          '`fgrep` = `grep -F` (fixed string)',
          '`grep -A 3` — 3 righe dopo il match',
          '`grep -B 2` — 2 righe prima del match',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Permessi e Link',
      panels: [
        { emoji: '🔐', text: 'I permessi UNIX: `rwxrwxrwx` — User, Group, Other. `chmod 755 file` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown user:group file` cambia proprietario e gruppo. Root può cambiare qualsiasi file.' },
        { emoji: '🔗', text: 'Hard link: `ln file link` — stesso inode, eliminare uno non cancella i dati.' },
        { emoji: '🔁', text: 'Symbolic link: `ln -s /percorso/reale link` — punta a un path, come un alias.' },
        { emoji: '📊', text: '`ls -l` mostra: tipo, permessi, hard links, owner, group, size, data, nome.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — notazione ottale',
        items: [
          '`4` = read (r), `2` = write (w), `1` = execute (x)',
          '`755` = rwxr-xr-x (directory tipica)',
          '`644` = rw-r--r-- (file tipico)',
          '`700` = rwx------ (solo proprietario)',
          '`chmod u+x file` — aggiunge execute al proprietario',
        ],
      },
      {
        title: 'chown e chgrp',
        items: [
          '`chown mario file` — cambia proprietario',
          '`chown mario:dev file` — cambia owner e gruppo',
          '`chown -R mario /dir` — ricorsivo su directory',
          '`chgrp developers file` — cambia solo gruppo',
        ],
      },
      {
        title: 'Hard vs Symbolic link',
        items: [
          'Hard: stessa inode, stesso filesystem, no link a dir',
          'Soft: punta a path, cross-filesystem, può essere dangling',
          '`ln -s /etc/httpd/conf /var/www/conf` — link simbolico',
          '`ls -l` mostra `->` per i link simbolici',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Archivi e Compressione',
      panels: [
        { emoji: '📦', text: '`tar -czvf archivio.tar.gz /directory` — crea archivio compresso con gzip.' },
        { emoji: '📂', text: '`tar -xzvf archivio.tar.gz` — estrae archivio tar.gz nella directory corrente.' },
        { emoji: '📋', text: '`tar -tzvf archivio.tar.gz` — lista il contenuto senza estrarre.' },
        { emoji: '🗜️', text: 'gzip = .gz, bzip2 = .bz2 (più lento ma più compresso), xz = .xz (massima compressione).' },
        { emoji: '💡', text: 'Ricorda i flag tar: c=Crea, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Flags tar fondamentali',
        items: [
          '`c` — crea archivio',
          '`x` — estrae archivio',
          '`t` — lista contenuto',
          '`f` — specifica filename (sempre alla fine!)',
          '`v` — verbose (mostra file)',
          '`z` — filtro gzip (.tar.gz)',
          '`j` — filtro bzip2 (.tar.bz2)',
          '`J` — filtro xz (.tar.xz)',
        ],
      },
      {
        title: 'Esempi pratici esame',
        items: [
          'Crea: `tar -cJf backup.tar.xz /home/mario`',
          'Estrai qui: `tar -xzf file.tar.gz`',
          'Estrai in path: `tar -xzf file.tar.gz -C /tmp/`',
          'Lista: `tar -tf file.tar`',
        ],
      },
      {
        title: 'Compressione singolo file',
        items: [
          '`gzip file` → `file.gz` (elimina originale)',
          '`gunzip file.gz` → ripristina',
          '`gzip -k file` → mantiene originale',
          '`bzip2 file` → `file.bz2`',
          '`xz file` → `file.xz`',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/\' from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 Documentazione di Sistema',
      panels: [
        { emoji: '📖', text: '`man comando` — mostra il manuale completo. Naviga con frecce, cerca con `/pattern`, esci con `q`.' },
        { emoji: '🔎', text: '`man -k keyword` — cerca in tutti i man page per keyword (come apropos).' },
        { emoji: 'ℹ️', text: '`info comando` — documentazione estesa in formato ipertestuale, spesso più dettagliata.' },
        { emoji: '📁', text: '`/usr/share/doc/` contiene file README, CHANGELOG, esempi per ogni pacchetto installato.' },
        { emoji: '💡', text: '`comando --help` — help rapido inline. Molto usato all\'esame per ricordare opzioni.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — sezioni e navigazione',
        items: [
          'Sezione 1: comandi utente, 5: file di config, 8: comandi root',
          '`man 5 passwd` — man della sezione 5 per passwd',
          '`/` — cerca nel man (n=successivo, N=precedente)',
          '`q` — esce, `G` — va alla fine, `g` — inizio',
          '`man -k "user account"` — cerca per keyword',
        ],
      },
      {
        title: 'info e altre fonti',
        items: [
          '`info coreutils` — documentazione GNU estesa',
          '`pinfo` — versione più user-friendly di info',
          '`whatis comando` — descrizione breve',
          '`apropos keyword` — cerca nei sommari man',
        ],
      },
      {
        title: '/usr/share/doc/',
        items: [
          'Esiste per ogni pacchetto RPM installato',
          'Contiene: README, ChangeLog, esempi, licenza',
          '`ls /usr/share/doc/httpd/`',
          'Utile all\'esame per trovare file di configurazione di esempio',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "network interface" | head -5',
      output: 'arp (7)              - Linux ARP kernel module\neth (4)              - Ethernet drivers\nif_nameindex (3)     - get network interface names and indexes\nifconfig (8)         - configure a network interface\nip (8)               - show / manipulate routing, devices, policy routing',
    },
  },


  // ─── TOPIC 2: Shell Scripting ───────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '📜 Variabili e Sintassi Bash',
      panels: [
        { emoji: '📝', text: '`NOME="valore"` — dichiara una variabile. Nessun spazio attorno a =!' },
        { emoji: '💬', text: '`echo $NOME` — legge la variabile. `echo "${NOME}_suffix"` evita ambiguità.' },
        { emoji: '🔄', text: '`export VAR` — rende la variabile disponibile ai processi figli (ambiente).' },
        { emoji: '⚡', text: '`RESULT=$(ls /etc)` — cattura l\'output di un comando in una variabile.' },
        { emoji: '🔢', text: '`$?` = exit code, `$$` = PID corrente, `$0` = nome script, `$#` = n° argomenti.' },
      ],
    },
    keyPoints: [
      {
        title: 'Dichiarazione e uso variabili',
        items: [
          '`VAR="valore"` — nessun spazio attorno a =',
          '`echo $VAR` o `echo "${VAR}"` — legge il valore',
          '`unset VAR` — elimina la variabile',
          '`readonly VAR` — variabile costante (non modificabile)',
          '`declare -i N=5` — variabile intera',
        ],
      },
      {
        title: 'Variabili speciali',
        items: [
          '`$?` — exit code dell\'ultimo comando (0 = successo)',
          '`$$` — PID del processo bash corrente',
          '`$0` — nome dello script',
          '`$1..$9` — argomenti posizionali',
          '`$#` — numero di argomenti',
          '`$@` — tutti gli argomenti come parole separate',
        ],
      },
      {
        title: 'Command Substitution',
        items: [
          '`VAR=$(comando)` — forma moderna (raccomandata)',
          '``VAR=`comando``` — vecchia sintassi con backtick',
          '`DATA=$(date +%Y-%m-%d)` — data in variabile',
          '`FILES=$(ls /etc/*.conf | wc -l)` — conta file',
        ],
      },
    ],
    terminal: {
      prompt: '$ HOSTNAME=$(hostname); echo "Sono su: ${HOSTNAME^^}"',
      output: 'Sono su: SERVER01.EXAMPLE.COM',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Condizionali e Loop',
      panels: [
        { emoji: '🤔', text: '`if [ condizione ]; then ... fi` — struttura base. -e=esiste, -f=file, -d=dir, -z=vuoto.' },
        { emoji: '🔁', text: '`for i in 1 2 3; do echo $i; done` — itera su lista. `for f in *.txt` — su file.' },
        { emoji: '⏳', text: '`while [ $i -lt 10 ]; do ...; ((i++)); done` — loop con condizione.' },
        { emoji: '📊', text: 'Operatori numerici: `-eq` =, `-ne` ≠, `-lt` <, `-le` ≤, `-gt` >, `-ge` ≥.' },
        { emoji: '🎭', text: '`case $VAR in pattern) comandi;; esac` — switch multiplo, più leggibile.' },
      ],
    },
    keyPoints: [
      {
        title: 'if/then/else',
        items: [
          '`if [ -f "$FILE" ]; then echo "esiste"; fi`',
          '`if [ -d "$DIR" ] && [ -w "$DIR" ]`',
          '`if [[ "$STR" == *"pattern"* ]]` — glob matching',
          '`elif` per condizioni multiple',
          '`[ -z "$VAR" ]` — stringa vuota',
          '`[ -n "$VAR" ]` — stringa non vuota',
        ],
      },
      {
        title: 'For loop',
        items: [
          '`for i in {1..10}; do echo $i; done`',
          '`for f in /etc/*.conf; do cat $f; done`',
          '`for ((i=0; i<5; i++)); do echo $i; done`',
          '`for host in server1 server2; do ssh $host uptime; done`',
        ],
      },
      {
        title: 'While e case',
        items: [
          '`while read line; do echo $line; done < file.txt`',
          '`until [ condizione ]; do ...; done` — inverso di while',
          '`break` — esce dal loop, `continue` — salta iterazione',
          '`case "$opt" in a) cmd1;; b) cmd2;; *) default;; esac`',
        ],
      },
    ],
    terminal: {
      prompt: '$ for f in /etc/ssh/*.conf; do echo "=== $f ==="; done',
      output: '=== /etc/ssh/ssh_config ===\n=== /etc/ssh/sshd_config ===',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '🎯 Parametri, Exit Code e Output',
      panels: [
        { emoji: '1️⃣', text: '`$1`, `$2`... sono gli argomenti passati allo script: `./script.sh arg1 arg2`.' },
        { emoji: '✅', text: '`$?` dopo ogni comando: 0 = successo. Se diverso da 0, c\'è stato un errore.' },
        { emoji: '📢', text: '`echo "Errore" >&2` — invia messaggi di errore su stderr (buona pratica).' },
        { emoji: '🚪', text: '`exit 0` — termina lo script con successo. `exit 1` — con errore.' },
        { emoji: '🔐', text: '`if [ $# -lt 2 ]; then echo "Usage: $0 <arg1> <arg2>" >&2; exit 1; fi`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Argomenti posizionali',
        items: [
          '`$0` — nome dello script/comando',
          '`$1` - `$9` — argomenti (oltre 9: `${10}`)',
          '`$#` — numero totale argomenti',
          '`$@` — tutti gli argomenti (separati)',
          '`$*` — tutti uniti in stringa',
          '`shift` — scorre gli argomenti di N posizioni',
        ],
      },
      {
        title: 'Exit code e controllo errori',
        items: [
          '`exit 0` — successo, `exit 1..255` — errore',
          '`comando || exit 1` — esci se comando fallisce',
          '`set -e` — lo script esce al primo errore',
          '`set -u` — errore su variabile non definita',
          '`trap "echo cleanup" EXIT` — esegui al termine',
        ],
      },
      {
        title: 'Pattern di validazione input',
        items: [
          '`[ $# -eq 0 ] && { echo "Usage..." >&2; exit 1; }`',
          '`[ -z "$1" ] && echo "Argomento richiesto" >&2`',
          '`[ ! -f "$1" ] && echo "File non trovato" >&2`',
          'Inviare errori su stderr con `>&2`',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat check_user.sh\n#!/bin/bash\n[ $# -eq 0 ] && { echo "Usage: $0 <username>" >&2; exit 1; }\nid "$1" &>/dev/null && echo "Utente esiste" || echo "Utente non trovato"',
      output: '#!/bin/bash\n[ $# -eq 0 ] && { echo "Usage: $0 <username>" >&2; exit 1; }\nid "$1" &>/dev/null && echo "Utente esiste" || echo "Utente non trovato"',
    },
  },

  // ─── TOPIC 3: Gestione Sistema ──────────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '⚙️ Boot e Target systemd',
      panels: [
        { emoji: '🚀', text: 'RHEL9 usa systemd come init. I "target" sostituiscono i runlevel: multi-user.target = CLI, graphical.target = GUI.' },
        { emoji: '🎯', text: '`systemctl get-default` mostra il target di boot. `systemctl set-default` lo cambia permanentemente.' },
        { emoji: '🔧', text: '`systemctl isolate rescue.target` porta il sistema in modalità rescue SENZA reboot.' },
        { emoji: '🔑', text: 'Per resettare la password root: al boot GRUB, aggiungere `rd.break` ai parametri del kernel.' },
        { emoji: '🏷️', text: 'Dopo rd.break: `chroot /sysroot`, `passwd root`, `touch /.autorelabel`, poi reboot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Target systemd principali',
        items: [
          '`multi-user.target` — CLI multi-utente (ex runlevel 3)',
          '`graphical.target` — GUI (ex runlevel 5)',
          '`rescue.target` — single user, filesystem montato',
          '`emergency.target` — root shell, solo rootfs',
          '`reboot.target` / `poweroff.target`',
        ],
      },
      {
        title: 'Gestione target',
        items: [
          '`systemctl get-default` — target di boot corrente',
          '`systemctl set-default multi-user.target` — permanente',
          '`systemctl isolate <target>` — cambia subito',
          '`who -r` o `runlevel` — mostra runlevel attuale',
        ],
      },
      {
        title: 'Reset password root (RHEL9)',
        items: [
          '1. Al GRUB: tasto `e` per editare la voce',
          '2. Alla riga `linux`: aggiungere `rd.break` alla fine',
          '3. `Ctrl+X` per avviare',
          '4. `mount -o remount,rw /sysroot`',
          '5. `chroot /sysroot`',
          '6. `passwd root`',
          '7. `touch /.autorelabel` (SELinux!)',
          '8. `exit; exit` → reboot',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '⚡ Gestione Processi',
      panels: [
        { emoji: '👁️', text: '`ps aux` — lista tutti i processi. `top` o `htop` — vista live interattiva.' },
        { emoji: '💀', text: '`kill -9 PID` — SIGKILL (forza). `kill PID` — SIGTERM (soft). `killall nome` — per nome.' },
        { emoji: '📊', text: '`nice -n -10 comando` — lancia con priorità alta. `renice -n 5 -p PID` — cambia in esecuzione.' },
        { emoji: '⏸️', text: '`Ctrl+Z` sospende un processo. `bg` lo manda in background. `fg` lo riporta in foreground.' },
        { emoji: '🔍', text: '`pgrep httpd` — trova PID per nome. `pkill httpd` — termina per nome.' },
      ],
    },
    keyPoints: [
      {
        title: 'Visualizzazione processi',
        items: [
          '`ps aux` — tutti i processi (BSD syntax)',
          '`ps -ef` — tutti i processi (POSIX syntax)',
          '`ps -o pid,ppid,cmd,%cpu,%mem` — output custom',
          '`pstree` — albero dei processi',
          '`top` — interattivo (k=kill, r=renice, q=quit)',
        ],
      },
      {
        title: 'Segnali e kill',
        items: [
          'SIGTERM (15) — terminazione soft (default kill)',
          'SIGKILL (9) — terminazione immediata (non ignorabile)',
          'SIGHUP (1) — rielaborazione configurazione',
          'SIGSTOP (19) — pausa; SIGCONT (18) — riprendi',
          '`kill -l` — lista tutti i segnali',
        ],
      },
      {
        title: 'Priorità nice',
        items: [
          'Range: -20 (max CPU) → +19 (min CPU)',
          '`nice -n -10 comando` — lancia con nice -10',
          '`renice -n -5 -p PID` — modifica in esecuzione',
          'Solo root può impostare nice negativo',
          '`ps -o pid,ni,cmd` — mostra il nice',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps aux | grep httpd | grep -v grep',
      output: 'apache   1234  0.1  0.5 456789 12345 ?   Ss  10:00  0:01 /usr/sbin/httpd -DFOREGROUND\napache   1235  0.0  0.3 456789  8901 ?   S   10:00  0:00 /usr/sbin/httpd -DFOREGROUND',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🔧 Servizi con systemctl',
      panels: [
        { emoji: '▶️', text: '`systemctl start sshd` — avvia il servizio. `systemctl stop sshd` — ferma.' },
        { emoji: '🔄', text: '`systemctl restart sshd` — riavvia. `systemctl reload sshd` — ricarica config senza restart.' },
        { emoji: '🔌', text: '`systemctl enable --now sshd` — abilita all\'avvio E avvia subito in un comando.' },
        { emoji: '🚫', text: '`systemctl mask sshd` — impedisce qualsiasi avvio (anche manuale). `unmask` per sbloccare.' },
        { emoji: '📋', text: '`systemctl status sshd` — stato, log recenti e se è enabled/running.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandi systemctl essenziali',
        items: [
          '`start/stop/restart/reload` — gestione immediata',
          '`enable/disable` — avvio automatico al boot',
          '`enable --now` — enable + start insieme',
          '`disable --now` — disable + stop insieme',
          '`mask/unmask` — blocco totale',
          '`status` — stato dettagliato e log',
          '`is-active/is-enabled` — verifica stato scriptabile',
        ],
      },
      {
        title: 'Gestione unit file',
        items: [
          'Unit file di sistema: `/usr/lib/systemd/system/`',
          'Personalizzazioni: `/etc/systemd/system/`',
          '`systemctl daemon-reload` — dopo modifica unit file',
          '`systemctl edit servizio` — override senza modificare originale',
          '`systemctl cat sshd` — visualizza unit file attivo',
        ],
      },
      {
        title: 'Listing e debug',
        items: [
          '`systemctl list-units --type=service` — servizi attivi',
          '`systemctl list-units --failed` — servizi falliti',
          '`journalctl -u sshd -n 50` — ultimi 50 log del servizio',
          '`systemctl show sshd` — tutte le proprietà',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl status sshd',
      output: '● sshd.service - OpenSSH server daemon\n   Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled)\n   Active: active (running) since Thu 2024-01-15 10:00:00 CET\n  Process: 1234 ExecStartPre=/usr/sbin/sshd -t\n Main PID: 1235 (sshd)',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📋 Logging e Scheduling',
      panels: [
        { emoji: '📰', text: '`journalctl` — log di systemd. `-f`=live, `-u sshd`=per servizio, `-b`=dal boot corrente.' },
        { emoji: '📁', text: '/var/log/ — log tradizionali: messages, secure, audit/audit.log, cron, maillog.' },
        { emoji: '⏰', text: 'cron: `crontab -e` — editor personale. Formato: min ora giorno mese weekday comando.' },
        { emoji: '🕐', text: 'at: `echo "comando" | at 14:30` — esegue una volta a orario specificato.' },
        { emoji: '📌', text: 'journal persistente: aggiungere `Storage=persistent` in `/etc/systemd/journald.conf`.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl opzioni chiave',
        items: [
          '`-f` — segui in tempo reale (tail -f)',
          '`-u sshd` — filtra per unit service',
          '`-b` — solo dal boot corrente',
          '`-b -1` — dal boot precedente',
          '`--since "1 hour ago"` — per periodo',
          '`-p err` — solo priorità error e superiori',
          '`-n 100` — ultime 100 righe',
        ],
      },
      {
        title: 'cron — formato e gestione',
        items: [
          'Formato: `MIN ORA GIORNO MESE WEEKDAY CMD`',
          '`*` = qualsiasi, `*/5` = ogni 5, `1,3` = giorni 1 e 3',
          '`crontab -e` — modifica, `-l` — lista, `-r` — rimuovi',
          'File sistema: `/etc/cron.d/`, `/etc/cron.daily/`',
          '`/etc/cron.allow` / `/etc/cron.deny` — controllo accesso',
        ],
      },
      {
        title: 'at — esecuzione singola',
        items: [
          '`at 14:30` — poi inserisci comandi, `Ctrl+D` per finire',
          '`at now + 1 hour`',
          '`atq` — lista job pendenti',
          '`atrm <id>` — rimuovi job',
          '`/etc/at.allow` / `/etc/at.deny` — controllo accesso',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -u sshd --since "1 hour ago" | tail -3',
      output: 'Jan 15 10:00:01 server sshd[1234]: Server listening on 0.0.0.0 port 22\nJan 15 10:05:33 server sshd[1235]: Accepted publickey for mario\nJan 15 10:05:33 server sshd[1235]: pam_unix(sshd:session): session opened for user mario',
    },
  },

  // ─── TOPIC 4: Storage Locale — LVM ─────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 Partizioni GPT',
      panels: [
        { emoji: '🖥️', text: '`lsblk` — mostra tutti i dispositivi a blocchi con struttura ad albero e punti di mount.' },
        { emoji: '🔍', text: '`blkid` — mostra UUID, LABEL e tipo filesystem di ogni partizione.' },
        { emoji: '⚒️', text: '`parted /dev/sdb` — tool interattivo per creare/modificare partizioni GPT (raccomandato su RHEL9).' },
        { emoji: '📐', text: '`parted /dev/sdb mkpart primary xfs 1GiB 5GiB` — crea una partizione da 1 a 5 GiB.' },
        { emoji: '🔄', text: '`partprobe /dev/sdb` — aggiorna il kernel sulla nuova tabella senza reboot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Esplorazione storage',
        items: [
          '`lsblk` — albero dispositivi con dimensioni e mount',
          '`lsblk -f` — aggiunge UUID e filesystem type',
          '`blkid` — UUID, LABEL, tipo filesystem',
          '`fdisk -l` — lista partizioni (legacy, ancora usato)',
          '`df -h` — spazio usato/libero per filesystem montati',
        ],
      },
      {
        title: 'parted — comandi essenziali',
        items: [
          '`parted /dev/sdb print` — mostra tabella partizioni',
          '`parted /dev/sdb mklabel gpt` — crea tabella GPT',
          '`parted /dev/sdb mkpart primary xfs 1GiB 5GiB`',
          '`parted /dev/sdb rm 1` — rimuove partizione 1',
          '`parted /dev/sdb set 1 lvm on` — flag LVM',
        ],
      },
      {
        title: 'LVM partition type',
        items: [
          'Per usare LVM, la partizione deve avere tipo "Linux LVM"',
          'Con parted: `set N lvm on` dopo mkpart',
          'Con fdisk: tipo `8e` (Linux LVM)',
          'Poi eseguire partprobe per aggiornare il kernel',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk -f /dev/sdb',
      output: 'NAME   FSTYPE LABEL UUID                                 MOUNTPOINT\nsdb\n├─sdb1 xfs          a1b2c3d4-...                          /data\n└─sdb2 LVM2_m       e5f6g7h8-...                          ',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🏗️ LVM — Physical e Volume Groups',
      panels: [
        { emoji: '1️⃣', text: '`pvcreate /dev/sdb1` — inizializza la partizione come Physical Volume LVM.' },
        { emoji: '2️⃣', text: '`vgcreate datavg /dev/sdb1` — crea un Volume Group usando il PV.' },
        { emoji: '➕', text: '`vgextend datavg /dev/sdc1` — aggiunge un PV esistente al VG per aumentare lo spazio.' },
        { emoji: '📊', text: '`pvdisplay` / `vgdisplay` — mostra info dettagliate su PV e VG.' },
        { emoji: '🔑', text: 'L\'ordine è SEMPRE: PV → VG → LV. Non si salta nessun passaggio!' },
      ],
    },
    keyPoints: [
      {
        title: 'Physical Volume (PV)',
        items: [
          '`pvcreate /dev/sdb1` — inizializza PV',
          '`pvdisplay` — info dettagliate tutti i PV',
          '`pvs` — riepilogo compatto PV',
          '`pvremove /dev/sdb1` — rimuove metadati PV',
          '`pvmove /dev/sdb1` — sposta dati su altri PV',
        ],
      },
      {
        title: 'Volume Group (VG)',
        items: [
          '`vgcreate myvg /dev/sdb1 /dev/sdc1` — crea VG',
          '`vgextend myvg /dev/sdd1` — aggiunge PV a VG esistente',
          '`vgreduce myvg /dev/sdd1` — rimuove PV dal VG',
          '`vgdisplay` — info dettagliate VG',
          '`vgs` — riepilogo compatto VG',
        ],
      },
      {
        title: 'Dimensioni e PE',
        items: [
          'PE = Physical Extent (unità base LVM, default 4MiB)',
          '`vgcreate -s 8M myvg /dev/sdb1` — PE size personalizzata',
          '`vgdisplay` mostra PE Free e PE Size',
          'La dimensione max di un LV = PE Free del VG',
        ],
      },
    ],
    terminal: {
      prompt: '$ pvcreate /dev/sdb1 && vgcreate datavg /dev/sdb1 && vgdisplay datavg',
      output: '  Physical volume "/dev/sdb1" successfully created.\n  Volume group "datavg" successfully created\n  --- Volume group ---\n  VG Name               datavg\n  VG Size               <10.00 GiB\n  PE Size               4.00 MiB\n  Free  PE / Size       2559 / <10.00 GiB',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '📦 LVM — Logical Volumes',
      panels: [
        { emoji: '3️⃣', text: '`lvcreate -L 2G -n datalv datavg` — crea LV da 2GiB nel VG datavg.' },
        { emoji: '📁', text: '`mkfs.xfs /dev/datavg/datalv` — formatta il LV. Poi `mount /dev/datavg/datalv /data`.' },
        { emoji: '📈', text: '`lvextend -L +1G -r /dev/datavg/datalv` — estende LV E filesystem (-r = resize automatico).' },
        { emoji: '🔍', text: 'XFS: `xfs_growfs /data` (richiede mount point). ext4: `resize2fs /dev/datavg/datalv`.' },
        { emoji: '📊', text: '`lvdisplay` o `lvs` — visualizza tutti i Logical Volumes e le loro proprietà.' },
      ],
    },
    keyPoints: [
      {
        title: 'lvcreate opzioni',
        items: [
          '`-L 2G` — dimensione assoluta (GiB, MiB)',
          '`-l 100%FREE` — usa tutto lo spazio libero del VG',
          '`-l 512` — 512 Physical Extents',
          '`-n nome` — nome del Logical Volume',
          'Device risultante: `/dev/VGname/LVname`',
        ],
      },
      {
        title: 'Estensione LV + filesystem',
        items: [
          '`lvextend -L +1G /dev/vg/lv` — solo LV (no fs)',
          '`lvextend -L +1G -r /dev/vg/lv` — LV + filesystem',
          'XFS: `xfs_growfs /mountpoint` (DEVE essere mounted)',
          'ext4: `resize2fs /dev/vg/lv`',
          '`lvresize -L 5G -r /dev/vg/lv` — ridimensiona a 5G',
        ],
      },
      {
        title: 'Workflow completo LVM',
        items: [
          '1. `pvcreate /dev/sdb1`',
          '2. `vgcreate myvg /dev/sdb1`',
          '3. `lvcreate -L 3G -n mylv myvg`',
          '4. `mkfs.xfs /dev/myvg/mylv`',
          '5. `mkdir /mydata && mount /dev/myvg/mylv /mydata`',
          '6. Aggiungere a `/etc/fstab` per persistenza',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvcreate -L 3G -n datalv datavg && mkfs.xfs /dev/datavg/datalv',
      output: '  Logical volume "datalv" created.\nmeta-data=/dev/datavg/datalv     isize=512    agcount=4\ndata     =                       bsize=4096   blocks=786432\nnaming   =version 2              bsize=4096   ascii-ci=0\nlog      =internal log           bsize=4096   blocks=2560',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '📌 Mount, fstab e Swap',
      panels: [
        { emoji: '🔑', text: '`blkid` trova l\'UUID. Usare UUID in fstab invece di /dev/sdb1 — l\'UUID non cambia mai!' },
        { emoji: '📝', text: 'Formato fstab: `UUID=xxx /mountpoint fstype options dump pass`.' },
        { emoji: '✅', text: '`mount -a` testa tutte le voci di fstab. Se nessun errore, la configurazione è corretta.' },
        { emoji: '💫', text: 'Swap: `mkswap /dev/sdb2` → formato. `swapon /dev/sdb2` → attiva. Poi aggiungi a fstab.' },
        { emoji: '📊', text: '`swapon --show` e `free -h` mostrano la swap disponibile e quella in uso.' },
      ],
    },
    keyPoints: [
      {
        title: 'fstab — formato e opzioni',
        items: [
          'Campi: device mountpoint fstype options dump pass',
          '`defaults` = rw,suid,dev,exec,auto,nouser,async',
          '`nofail` — ignora errori al boot',
          '`_netdev` — attendere la rete (NFS/CIFS)',
          '`x-systemd.automount` — mount automatico on-demand',
          'dump=0 (no backup), pass=0 (no fsck)',
        ],
      },
      {
        title: 'Swap setup',
        items: [
          '`mkswap /dev/sdb2` — formatta come swap',
          '`swapon /dev/sdb2` — attiva immediatamente',
          '`swapoff /dev/sdb2` — disattiva',
          'In fstab: `UUID=xxx none swap defaults 0 0`',
          '`swapon --show` — mostra swap attiva',
        ],
      },
      {
        title: 'Verifica e debug fstab',
        items: [
          '`mount -a` — monta tutto in fstab (test)',
          '`mount -t xfs` — monta solo filesystem xfs',
          '`umount /mountpoint` — smonta',
          '`umount -l /mountpoint` — lazy unmount',
          '`findmnt` — visualizza tutti i mount attivi',
        ],
      },
    ],
    terminal: {
      prompt: '$ blkid /dev/datavg/datalv',
      output: '/dev/datavg/datalv: UUID="a1b2c3d4-e5f6-7890-abcd-efghij123456" TYPE="xfs"',
    },
  },

  // ─── TOPIC 5: File System ────────────────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 e XFS',
      panels: [
        { emoji: '🔵', text: '`mkfs.ext4 /dev/sdb1` — file system ext4. `mkfs.xfs /dev/sdb1` — file system XFS (default RHEL9).' },
        { emoji: '🔧', text: '`tune2fs -l /dev/sdb1` — mostra parametri ext4. `xfs_info /mountpoint` — mostra parametri XFS.' },
        { emoji: '🔨', text: '`e2fsck /dev/sdb1` — controlla e ripara ext4 (NON montato). `xfs_repair /dev/sdb1` — per XFS.' },
        { emoji: '📈', text: 'ext4 può ridursi. XFS può solo crescere! `resize2fs` per ext4, `xfs_growfs /mount` per XFS.' },
        { emoji: '💡', text: 'XFS è ottimizzato per file grandi e alta concorrenza. ext4 più versatile per uso generico.' },
      ],
    },
    keyPoints: [
      {
        title: 'Creazione filesystem',
        items: [
          '`mkfs.ext4 -L "datalabel" /dev/sdb1`',
          '`mkfs.xfs -L "xfslabel" /dev/sdb1`',
          '`mkfs -t ext4 /dev/sdb1` (equivalente)',
          '`-L label` — assegna etichetta al filesystem',
          'Il device NON deve essere montato durante mkfs!',
        ],
      },
      {
        title: 'Informazioni filesystem',
        items: [
          '`tune2fs -l /dev/sdb1` — metadati ext4',
          '`xfs_info /mountpoint` — metadati XFS (richiede mount)',
          '`dumpe2fs /dev/sdb1` — info molto dettagliate ext4',
          '`df -Th` — tipo filesystem + spazio',
          '`stat /file` — inode, permessi, timestamp',
        ],
      },
      {
        title: 'Riparazione filesystem',
        items: [
          'SEMPRE smontare prima di riparare!',
          '`e2fsck -f /dev/sdb1` — forza check ext4',
          '`xfs_repair /dev/sdb1` — ripara XFS',
          '`fsck /dev/sdb1` — generico (chiama il tool corretto)',
          'In emergenza: `xfs_repair -L /dev/sdb` (distrugge journal)',
        ],
      },
    ],
    terminal: {
      prompt: '$ xfs_info /data',
      output: 'meta-data=/dev/sdb1  isize=512    agcount=4, agsize=655360 blks\n         =            sectsz=512   attr=2, projid32bit=1\ndata     =            bsize=4096   blocks=2621440, imaxpct=25\nnaming   =version 2  bsize=4096   ascii-ci=0, ftype=1\nlog      =internal   bsize=4096   blocks=2560, version=2',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔐 LUKS Encryption',
      panels: [
        { emoji: '🔒', text: '`cryptsetup luksFormat /dev/sdc1` — formatta con cifratura LUKS. Inserire passphrase.' },
        { emoji: '🔓', text: '`cryptsetup open /dev/sdc1 myvol` — apre il container. Device: `/dev/mapper/myvol`.' },
        { emoji: '💻', text: '`mkfs.ext4 /dev/mapper/myvol` — poi `mount /dev/mapper/myvol /secure`.' },
        { emoji: '📝', text: 'Per mount automatico al boot: `/etc/crypttab` (nome device passphrase) + `/etc/fstab`.' },
        { emoji: '🔑', text: '`cryptsetup luksAddKey /dev/sdc1` — aggiunge un keyfile per evitare password al boot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Setup LUKS step-by-step',
        items: [
          '1. `cryptsetup luksFormat /dev/sdc1` (interattivo)',
          '2. `cryptsetup open /dev/sdc1 nomevolume`',
          '3. `mkfs.xfs /dev/mapper/nomevolume`',
          '4. `mount /dev/mapper/nomevolume /secure`',
          '5. Aggiungi /etc/crypttab e /etc/fstab per persistenza',
        ],
      },
      {
        title: '/etc/crypttab formato',
        items: [
          'Formato: `nome device password opzioni`',
          '`myvol /dev/sdc1 none` — chiede password al boot',
          '`myvol /dev/sdc1 /root/keyfile` — usa keyfile',
          '`myvol UUID=xxx none luks` — usa UUID',
          'Dopo crypttab: `/etc/fstab` monta `/dev/mapper/myvol`',
        ],
      },
      {
        title: 'Gestione LUKS',
        items: [
          '`cryptsetup status myvol` — stato container',
          '`cryptsetup luksAddKey /dev/sdc1` — aggiunge key',
          '`cryptsetup luksRemoveKey /dev/sdc1` — rimuove key',
          '`cryptsetup luksClose myvol` — chiude il container',
          '`cryptsetup luksDump /dev/sdc1` — info header',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status myvol',
      output: '/dev/mapper/myvol is active and is in use.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits\n  device:  /dev/sdc1\n  offset:  32768 sectors',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🌐 NFS, CIFS e autofs',
      panels: [
        { emoji: '📡', text: '`mount -t nfs server:/export /mountpoint` — monta una share NFS manualmente.' },
        { emoji: '🪟', text: '`mount -t cifs //server/share /mountpoint -o user=u,password=p` — share Windows/Samba.' },
        { emoji: '⚙️', text: 'Per mount permanente NFS in fstab: `server:/export /mp nfs defaults 0 0`.' },
        { emoji: '🤖', text: 'autofs monta on-demand: `/etc/auto.master` → `/misc /etc/auto.misc` → `cd server:/cdrom`.' },
        { emoji: '📦', text: 'Installare: `nfs-utils` per NFS, `cifs-utils` per CIFS/Samba.' },
      ],
    },
    keyPoints: [
      {
        title: 'NFS client',
        items: [
          '`dnf install nfs-utils` — installa client NFS',
          '`showmount -e server` — lista export disponibili',
          '`mount -t nfs 192.168.1.10:/data /mnt/data`',
          '`mount -t nfs4 server:/data /mnt` — forza NFSv4',
          'fstab: `server:/data /mnt nfs defaults,_netdev 0 0`',
        ],
      },
      {
        title: 'CIFS/Samba client',
        items: [
          '`dnf install cifs-utils` — installa client CIFS',
          '`mount -t cifs //srv/share /mnt -o user=u,pass=p`',
          'fstab: `//srv/share /mnt cifs credentials=/etc/creds 0 0`',
          'File credentials: `username=u\\npassword=p`',
          '`chmod 600 /etc/creds` — proteggi il file!',
        ],
      },
      {
        title: 'autofs',
        items: [
          '`dnf install autofs` → `systemctl enable --now autofs`',
          '/etc/auto.master: `/misc /etc/auto.misc`',
          '/etc/auto.misc: `nfs server:/export` (monta /misc/nfs)',
          'Si smonta automaticamente dopo inattività',
          '`automount -f -v` — debug autofs',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e nfsserver',
      output: 'Export list for nfsserver:\n/data/shared  192.168.1.0/24\n/home         *',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🔑 ACL e Permessi Avanzati',
      panels: [
        { emoji: '📋', text: '`getfacl file` — mostra le ACL estese. Il + in `ls -l` indica che il file ha ACL.' },
        { emoji: '➕', text: '`setfacl -m u:mario:rw file` — aggiunge permessi rw all\'utente mario sul file.' },
        { emoji: '👥', text: '`setfacl -m g:developers:rx /project` — permessi al gruppo developers.' },
        { emoji: '🔄', text: '`setfacl -m d:u:mario:rw /dir` — ACL di default: i nuovi file le ereditano.' },
        { emoji: '🏷️', text: 'setGID su directory: `chmod g+s /shared` — i nuovi file ereditano il gruppo.' },
      ],
    },
    keyPoints: [
      {
        title: 'setfacl — opzioni principali',
        items: [
          '`-m user:nome:perm` — modifica/aggiunge ACL utente',
          '`-m group:nome:perm` — ACL gruppo',
          '`-m other::perm` — ACL others',
          '`-x user:nome` — rimuove ACL utente',
          '`-b` — rimuove TUTTE le ACL',
          '`-R` — ricorsivo su directory',
          '`-m d:user:nome:perm` — ACL di default',
        ],
      },
      {
        title: 'getfacl e ACL mask',
        items: [
          '`getfacl /path` — mostra tutte le ACL',
          'La `mask` limita i permessi massimi per user/group',
          '`setfacl -m mask::rx /dir` — imposta la mask',
          '`ls -l` mostra `+` se ci sono ACL estese',
          '`cp --preserve=all` mantiene le ACL',
        ],
      },
      {
        title: 'Permessi speciali',
        items: [
          '**setUID** (4): esegui come owner del file (`chmod u+s`)',
          '**setGID** (2): esegui come owner group, su dir eredita group (`chmod g+s`)',
          '**sticky bit** (1): solo il proprietario può eliminare file in /dir (`chmod +t`)',
          '`chmod 2775 /shared` — setGID + rwxrwxr-x',
        ],
      },
    ],
    terminal: {
      prompt: '$ setfacl -m u:mario:rw /project/file.txt && getfacl /project/file.txt',
      output: '# file: project/file.txt\n# owner: root\n# group: root\nuser::rw-\nuser:mario:rw-\ngroup::r--\nmask::rw-\nother::r--',
    },
  },


  // ─── TOPIC 6: Manutenzione Sistema ──────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Gestione Pacchetti dnf',
      panels: [
        { emoji: '⬇️', text: '`dnf install httpd` — installa il pacchetto httpd e le sue dipendenze automaticamente.' },
        { emoji: '🔍', text: '`dnf search keyword` — cerca pacchetti. `dnf info nome` — dettagli su un pacchetto.' },
        { emoji: '🔄', text: '`dnf update` — aggiorna tutti i pacchetti. `dnf update nome` — solo uno specifico.' },
        { emoji: '❓', text: '`dnf provides /usr/bin/vim` — trova quale pacchetto fornisce un file o comando.' },
        { emoji: '📁', text: 'Repository in `/etc/yum.repos.d/*.repo`. `dnf repolist` — lista i repo attivi.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandi dnf essenziali',
        items: [
          '`dnf install pacchetto` — installa',
          '`dnf remove pacchetto` — rimuove (non le dipendenze)',
          '`dnf update` — aggiorna tutto',
          '`dnf search parola` — cerca nei nomi e descrizioni',
          '`dnf info pacchetto` — versione, repo, dimensione',
          '`dnf list installed` — pacchetti installati',
          '`dnf provides /percorso/file` — chi possiede il file',
        ],
      },
      {
        title: 'Gestione repository',
        items: [
          'File .repo in `/etc/yum.repos.d/`',
          '`dnf repolist` — lista repo abilitati',
          '`dnf repolist all` — tutti compresi disabilitati',
          '`dnf config-manager --enable <repo>` — abilita repo',
          '`dnf --disablerepo="*" --enablerepo=local install pkg`',
        ],
      },
      {
        title: 'Gruppi e storico',
        items: [
          '`dnf group list` — lista gruppi disponibili',
          '`dnf group install "Development Tools"`',
          '`dnf history` — cronologia transazioni',
          '`dnf history undo <id>` — annulla una transazione',
          '`dnf download pacchetto` — scarica RPM senza installare',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides */semanage',
      output: 'policycoreutils-python-utils-3.4-1.el9.noarch : SELinux policy core python utilities\nRepo        : baseos',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '⚙️ rpm — Query e Verifica',
      panels: [
        { emoji: '🔍', text: '`rpm -qa` — lista TUTTI i pacchetti installati. `rpm -qi nome` — info dettagliate.' },
        { emoji: '📄', text: '`rpm -ql nome` — lista i file inclusi nel pacchetto installato.' },
        { emoji: '🔗', text: '`rpm -qf /usr/bin/ls` — quale pacchetto ha installato questo file?' },
        { emoji: '✅', text: '`rpm -V nome` — verifica integrità: controlla se i file sono stati modificati.' },
        { emoji: '📦', text: '`rpm -ivh pacchetto.rpm` — installa localmente. `-i`=installa, `-v`=verbose, `-h`=progress.' },
      ],
    },
    keyPoints: [
      {
        title: 'Query rpm (-q)',
        items: [
          '`rpm -qa` — tutti i pacchetti installati',
          '`rpm -qi nome` — informazioni pacchetto (info)',
          '`rpm -ql nome` — file del pacchetto (list)',
          '`rpm -qf /path/file` — pacchetto proprietario (file)',
          '`rpm -qd nome` — solo file di documentazione',
          '`rpm -qc nome` — solo file di configurazione',
          '`rpm -qR nome` — dipendenze richieste (requires)',
        ],
      },
      {
        title: 'Verifica e install locale',
        items: [
          '`rpm -V nome` — verifica integrità file',
          '`rpm -Va` — verifica tutti i pacchetti',
          'Output: S=dimensione, M=permessi, c=config modificata',
          '`rpm -ivh file.rpm` — installa RPM locale',
          '`rpm --nodeps -ivh file.rpm` — ignora dipendenze',
          '`rpm -e nome` — rimuove pacchetto',
        ],
      },
      {
        title: 'Query su file .rpm non installati',
        items: [
          '`rpm -qpi file.rpm` — info sul file RPM',
          '`rpm -qpl file.rpm` — lista file nel RPM',
          'Utile per esaminare un RPM prima di installarlo',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /usr/bin/passwd',
      output: 'passwd-0.80-12.el9.x86_64',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🥾 GRUB2 e Kernel',
      panels: [
        { emoji: '📝', text: 'La configurazione GRUB2 si modifica in `/etc/default/grub` (NON in grub.cfg direttamente).' },
        { emoji: '🔄', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — rigenera grub.cfg dopo le modifiche.' },
        { emoji: '⏱️', text: '`GRUB_TIMEOUT=5` — timeout menu boot. `GRUB_DEFAULT=0` — voce di default.' },
        { emoji: '🔢', text: '`dnf update kernel-*` — aggiorna il kernel. Il vecchio kernel rimane come fallback.' },
        { emoji: '🎯', text: '`grubby --default-kernel` — mostra il kernel di default. `grubby --set-default` — cambia.' },
      ],
    },
    keyPoints: [
      {
        title: '/etc/default/grub',
        items: [
          '`GRUB_TIMEOUT=5` — tempo in secondi del menu',
          '`GRUB_DEFAULT=saved` — ricorda ultima selezione',
          '`GRUB_CMDLINE_LINUX="..."` — parametri kernel di default',
          'Dopo modifiche: rigenerare grub.cfg con grub2-mkconfig',
          'UEFI: `/boot/efi/EFI/redhat/grub.cfg`',
        ],
      },
      {
        title: 'Gestione kernel',
        items: [
          '`rpm -qa kernel*` — kernel installati',
          '`uname -r` — kernel corrente in uso',
          '`dnf install kernel` — installa nuovo kernel',
          '`grubby --default-kernel` — kernel di default',
          '`grubby --set-default /boot/vmlinuz-xxx`',
          'Vecchi kernel: `dnf remove kernel-old`',
        ],
      },
      {
        title: '/etc/grub.d/ scripts',
        items: [
          'Gli script in /etc/grub.d/ generano grub.cfg',
          '10_linux — genera voci per i kernel Linux',
          '40_custom — voci personalizzate (editabile)',
          'Non modificare grub.cfg direttamente!',
        ],
      },
    ],
    terminal: {
      prompt: '$ grub2-mkconfig -o /boot/grub2/grub.cfg',
      output: 'Generating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.14.0-362.el9.x86_64\nFound initrd image: /boot/initramfs-5.14.0-362.el9.x86_64.img\ndone',
    },
  },

  // ─── TOPIC 7: Networking Base ────────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli e Configurazione Rete',
      panels: [
        { emoji: '📋', text: '`nmcli connection show` — lista tutte le connessioni. `nmcli device status` — stato dispositivi.' },
        { emoji: '🔧', text: '`nmcli con mod ens3 ipv4.addresses 192.168.1.100/24` — imposta IP statico sulla connessione.' },
        { emoji: '🔄', text: '`nmcli con up ens3` — applica i cambiamenti. `nmcli con down ens3` — disattiva.' },
        { emoji: '🖥️', text: '`hostnamectl set-hostname server.example.com` — imposta il hostname permanentemente.' },
        { emoji: '📁', text: '`/etc/hosts` — risoluzione locale. `/etc/resolv.conf` — server DNS.' },
      ],
    },
    keyPoints: [
      {
        title: 'nmcli — connessioni',
        items: [
          '`nmcli con show` — lista connessioni',
          '`nmcli con show ens3` — dettagli connessione',
          '`nmcli con add type ethernet ifname ens3` — crea nuova',
          '`nmcli con mod ens3 ipv4.method manual` — IP statico',
          '`nmcli con mod ens3 ipv4.gateway 192.168.1.1`',
          '`nmcli con mod ens3 ipv4.dns "8.8.8.8 8.8.4.4"`',
        ],
      },
      {
        title: 'ip — comandi moderni',
        items: [
          '`ip addr show` — indirizzi IP di tutte le interfacce',
          '`ip addr add 10.0.0.5/24 dev eth0` — aggiunge IP (temporaneo)',
          '`ip route show` — tabella di routing',
          '`ip link set eth0 up/down` — attiva/disattiva',
          '`ss -tlnp` — porte TCP in ascolto con processi',
        ],
      },
      {
        title: 'Hostname e DNS',
        items: [
          '`hostnamectl` — mostra info hostname completo',
          '`hostnamectl set-hostname nome.dominio`',
          '`/etc/hosts` — IP hostname mapping locale',
          '`/etc/resolv.conf` — nameserver, search domain',
          '`/etc/nsswitch.conf` — ordine risoluzione nomi',
          '`dig +short hostname` — test risoluzione DNS',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli con show ens3 | grep ipv4',
      output: 'ipv4.method:                            manual\nipv4.addresses:                         192.168.1.100/24\nipv4.gateway:                           192.168.1.1\nipv4.dns:                               8.8.8.8,8.8.4.4',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld',
      panels: [
        { emoji: '🏠', text: 'firewalld usa zone: "public" è la default. Ogni interfaccia è assegnata a una zona.' },
        { emoji: '🚪', text: '`firewall-cmd --add-service=http --permanent` — apre la porta 80. Poi `--reload`.' },
        { emoji: '🔢', text: '`firewall-cmd --add-port=8080/tcp --permanent` — apre una porta specifica.' },
        { emoji: '📋', text: '`firewall-cmd --list-all` — mostra tutto ciò che è configurato nella zona corrente.' },
        { emoji: '⚡', text: 'Senza `--permanent` la regola è solo temporanea (si perde al reboot o --reload).' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestione servizi e porte',
        items: [
          '`--add-service=nome` — apre per nome servizio conosciuto',
          '`--remove-service=nome` — chiude servizio',
          '`--add-port=8443/tcp` — porta specifica',
          '`--remove-port=8443/tcp` — rimuove porta',
          '`--permanent` — rende la regola persistente',
          '`--reload` — applica le regole permanenti',
        ],
      },
      {
        title: 'Zone e interfacce',
        items: [
          '`--list-all-zones` — tutte le zone',
          '`--get-active-zones` — zone con interfacce assegnate',
          '`--zone=internal --add-interface=eth1 --permanent`',
          '`--get-default-zone` — zona di default',
          '`--set-default-zone=internal`',
        ],
      },
      {
        title: 'Rich rules e masquerade',
        items: [
          '`--add-masquerade` — abilita NAT/masquerade',
          '`--add-rich-rule="rule family=ipv4 source address=10.0.0.0/8 accept"`',
          '`--query-service=ssh` — verifica se servizio è aperto',
          'Servizi definiti in: `/usr/lib/firewalld/services/`',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --zone=public --list-all',
      output: 'public (active)\n  target: default\n  interfaces: ens3\n  services: cockpit dhcpv6-client http https ssh\n  ports: 8080/tcp\n  masquerade: no',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔐 SSH e Trasferimento File',
      panels: [
        { emoji: '🔑', text: '`ssh-keygen -t ed25519` — genera coppia chiavi SSH. Salva in `~/.ssh/id_ed25519`.' },
        { emoji: '📤', text: '`ssh-copy-id mario@server` — copia la chiave pubblica su server (aggiunge a authorized_keys).' },
        { emoji: '🔒', text: 'In `/etc/ssh/sshd_config`: `PasswordAuthentication no` per forzare solo chiavi.' },
        { emoji: '📁', text: '`scp -r /dir user@server:/dest` — copia ricorsiva. `rsync -av /src/ server:/dst/` — incrementale.' },
        { emoji: '🔧', text: '`~/.ssh/config` — configura alias host SSH per connessioni più veloci.' },
      ],
    },
    keyPoints: [
      {
        title: 'SSH key authentication',
        items: [
          '`ssh-keygen -t ed25519 -C "commento"` — genera chiavi',
          'Chiave privata: `~/.ssh/id_ed25519` (chmod 600!)',
          'Chiave pubblica: `~/.ssh/id_ed25519.pub`',
          '`ssh-copy-id -i ~/.ssh/id_ed25519.pub user@host`',
          'authorized_keys sul server: `~/.ssh/authorized_keys` (chmod 600)',
          'Cartella .ssh sul server: chmod 700!',
        ],
      },
      {
        title: 'scp e rsync',
        items: [
          '`scp file user@host:/path` — copia singolo file',
          '`scp -r /dir user@host:/path` — copia directory',
          '`rsync -av /src/ user@host:/dst/` — sync incrementale',
          '`rsync -avz` — aggiunge compressione',
          '`rsync --delete` — rimuove file non presenti in sorgente',
          '`sftp user@host` — sessione interattiva SFTP',
        ],
      },
      {
        title: '/etc/ssh/sshd_config',
        items: [
          '`PasswordAuthentication no` — disabilita login con password',
          '`PermitRootLogin no` — disabilita login root diretto',
          '`AllowUsers mario admin` — whitelist utenti',
          '`Port 22` — porta SSH (cambiare per sicurezza)',
          'Dopo modifiche: `systemctl restart sshd`',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""',
      output: 'Generating public/private ed25519 key pair.\nYour identification has been saved in /home/mario/.ssh/id_ed25519\nYour public key has been saved in /home/mario/.ssh/id_ed25519.pub\nThe key fingerprint is:\nSHA256:abc123... mario@localhost',
    },
  },

  // ─── TOPIC 8: Utenti e Gruppi ────────────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 Gestione Utenti',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — crea utente mario con home e shell bash.' },
        { emoji: '🔑', text: '`passwd mario` — imposta la password. Solo root può cambiare password di altri utenti.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — aggiunge mario al gruppo wheel (sudo). Il -a è FONDAMENTALE!' },
        { emoji: '⏰', text: '`chage -M 90 mario` — password scade ogni 90 giorni. `-l mario` mostra le info di scadenza.' },
        { emoji: '🗑️', text: '`userdel -r mario` — elimina utente E la sua home. Senza -r la home rimane.' },
      ],
    },
    keyPoints: [
      {
        title: 'useradd opzioni',
        items: [
          '`-m` — crea home directory',
          '`-s /bin/bash` — shell di default',
          '`-u 1500` — UID specifico',
          '`-g groupname` — gruppo primario',
          '`-G grp1,grp2` — gruppi supplementari',
          '`-c "Nome Cognome"` — commento GECOS',
          '`-r` — account di sistema (UID < 1000)',
          '`-M` — NON creare home directory',
        ],
      },
      {
        title: 'usermod e userdel',
        items: [
          '`usermod -aG wheel mario` — aggiunge a gruppo',
          '`usermod -s /sbin/nologin mario` — blocca shell',
          '`usermod -L mario` — blocca account (! in shadow)',
          '`usermod -U mario` — sblocca account',
          '`userdel mario` — rimuove utente (non la home)',
          '`userdel -r mario` — rimuove utente + home',
        ],
      },
      {
        title: 'chage — scadenza password',
        items: [
          '`chage -l mario` — mostra info scadenza',
          '`chage -M 90 mario` — max giorni password',
          '`chage -m 7 mario` — min giorni tra cambi',
          '`chage -W 14 mario` — avviso scadenza (giorni)',
          '`chage -E 2024-12-31 mario` — scadenza account',
          '`passwd -x 90 mario` — equivalente a chage -M',
        ],
      },
    ],
    terminal: {
      prompt: '$ useradd -m -u 1500 -s /bin/bash -c "Mario Rossi" mario && passwd mario',
      output: 'Changing password for user mario.\nNew password:\nRetype new password:\npasswd: all authentication tokens updated successfully.',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Gruppi e sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 1500 developers` — crea gruppo con GID specifico.' },
        { emoji: '👤', text: '`usermod -aG developers mario` — aggiunge mario al gruppo (supplementare).' },
        { emoji: '⚠️', text: 'ATTENZIONE: `usermod -G developers mario` (senza -a) RIMUOVE gli altri gruppi!' },
        { emoji: '🔐', text: '`visudo` — apre /etc/sudoers in modo sicuro con validazione sintassi.' },
        { emoji: '📁', text: 'File in `/etc/sudoers.d/` — modifiche senza toccare il file principale (best practice).' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestione gruppi',
        items: [
          '`groupadd -g 1500 nome` — crea gruppo',
          '`groupmod -n nuovo nome` — rinomina gruppo',
          '`groupdel nome` — elimina gruppo',
          '`gpasswd -a mario developers` — aggiunge utente',
          '`gpasswd -d mario developers` — rimuove utente',
          '`id mario` — UID, GID e gruppi di mario',
          '`groups mario` — solo i nomi dei gruppi',
        ],
      },
      {
        title: 'sudo e sudoers',
        items: [
          '`visudo` — editor sicuro per /etc/sudoers',
          'Formato: `WHO HOST=(AS_WHO) COMMAND`',
          '`mario ALL=(ALL) ALL` — sudo completo con password',
          '`mario ALL=(ALL) NOPASSWD:ALL` — senza password',
          '`%wheel ALL=(ALL) ALL` — tutti gli utenti del gruppo wheel',
          '`mario ALL=(ALL) /usr/bin/systemctl` — solo systemctl',
        ],
      },
      {
        title: '/etc/sudoers.d/',
        items: [
          'Creare file in /etc/sudoers.d/ invece di modificare sudoers',
          '`echo "mario ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/mario`',
          '`chmod 440 /etc/sudoers.d/mario` — permessi corretti',
          'Viene incluso automaticamente da #includedir',
          '`visudo -c` — valida la sintassi di sudoers',
        ],
      },
    ],
    terminal: {
      prompt: '$ groupadd -g 1500 developers && usermod -aG developers mario && id mario',
      output: 'uid=1500(mario) gid=1500(mario) groups=1500(mario),1500(developers)',
    },
  },

  // ─── TOPIC 9: SELinux e Sicurezza ───────────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 Modalità SELinux',
      panels: [
        { emoji: '🟢', text: 'Enforcing = SELinux attivo e blocca le violazioni. È la modalità di default su RHEL.' },
        { emoji: '🟡', text: 'Permissive = SELinux logga le violazioni ma NON blocca. Ottimo per il debugging.' },
        { emoji: '🔴', text: 'Disabled = SELinux spento. Non raccomandato in produzione. Richiede reboot per cambiare.' },
        { emoji: '⚡', text: '`setenforce 0/1` — cambia tra enforcing/permissive SENZA reboot (temporaneo).' },
        { emoji: '📝', text: 'Configurazione permanente: `SELINUX=enforcing` in `/etc/selinux/config`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Controllo modalità SELinux',
        items: [
          '`getenforce` — Enforcing / Permissive / Disabled',
          '`sestatus` — info complete su SELinux',
          '`setenforce 1` — enforcing (temporaneo)',
          '`setenforce 0` — permissive (temporaneo, per debug)',
          '`/etc/selinux/config` — configurazione permanente',
          'Passaggio da/a disabled richiede reboot + autorelabel',
        ],
      },
      {
        title: 'Policy types su RHEL',
        items: [
          '**targeted** — default RHEL: protegge demoni specifici',
          '**mls** — Multi-Level Security (alta sicurezza)',
          '**minimum** — policy minimale',
          '`SELINUXTYPE=targeted` in /etc/selinux/config',
          '`semanage` e `restorecon` richiedono policy-targeted',
        ],
      },
      {
        title: 'Log SELinux essenziale',
        items: [
          '`/var/log/audit/audit.log` — log principal (AVC denials)',
          '`journalctl | grep AVC` — deny nel journal',
          '`ausearch -m AVC` — cerca AVC nell\'audit log',
          '`sealert -a /var/log/audit/audit.log` — analisi guidata',
          'Installa: `dnf install setroubleshoot-server`',
        ],
      },
    ],
    terminal: {
      prompt: '$ sestatus',
      output: 'SELinux status:                 enabled\nSELinuxfs mount:                /sys/fs/selinux\nSELinux mount point:            /sys/fs/selinux\nLoaded policy name:             targeted\nCurrent mode:                   enforcing\nMode from config file:          enforcing\nPolicy MLS status:              enabled\nPolicy deny_unknown status:     allowed',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ Contesti File e Processo',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — mostra il contesto SELinux: user:role:type:level.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — ripristina i contesti di default (PERSISTENTE e raccomandato).' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — aggiunge regola permanente.' },
        { emoji: '⚡', text: '`chcon -t httpd_sys_content_t /web/file.html` — cambia contesto temporaneo (si perde con restorecon).' },
        { emoji: '📊', text: 'mv mantiene il vecchio contesto; cp crea con contesto della destinazione. Usare restorecon dopo mv!' },
      ],
    },
    keyPoints: [
      {
        title: 'Visualizzazione contesti',
        items: [
          '`ls -Z file` — contesto file',
          '`ls -Zd /directory` — contesto directory',
          '`ps -eZ | grep httpd` — contesto processo',
          '`id -Z` — contesto utente corrente',
          'Formato: user:role:type:sensitivity_level',
          'Il type (es. httpd_sys_content_t) è il campo più importante',
        ],
      },
      {
        title: 'Modifica contesti',
        items: [
          '`restorecon /path` — ripristina contesto default',
          '`restorecon -Rv /path` — ricorsivo e verbose',
          '`chcon -t tipo /file` — cambia temporaneamente',
          '`semanage fcontext -a -t tipo "/path(/.*)?"` — regola permanente',
          'Sempre: semanage fcontext + restorecon (NON solo chcon)',
        ],
      },
      {
        title: 'Workflow corretto per nuovi path',
        items: [
          '1. `semanage fcontext -a -t httpd_sys_content_t "/data/web(/.*)?"` — aggiungi regola',
          '2. `restorecon -Rv /data/web` — applica ai file esistenti',
          '3. Verifica: `ls -Z /data/web`',
          'Così le regole sopravvivono a reboot e restorecon futuri',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 Boolean e Porte SELinux',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — lista tutti i boolean. `getsebool httpd_can_network_connect` — stato specifico.' },
        { emoji: '🔄', text: '`setsebool -P httpd_can_network_connect on` — abilita permanentemente (-P = persistent).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — mostra le porte assegnate al tipo http_port_t.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8443` — aggiunge porta 8443 per httpd.' },
        { emoji: '🔍', text: '`semanage boolean -l | grep httpd` — boolean relativi ad httpd con descrizione.' },
      ],
    },
    keyPoints: [
      {
        title: 'Boolean SELinux',
        items: [
          '`getsebool -a` — tutti i boolean',
          '`getsebool nome` — stato un boolean',
          '`setsebool nome on` — attiva (temporaneo)',
          '`setsebool -P nome on` — attiva permanente',
          '`semanage boolean -m --on nome` — alternativa permanente',
          'Boolean comuni: httpd_can_network_connect, ftpd_anon_write, samba_enable_home_dirs',
        ],
      },
      {
        title: 'Gestione porte SELinux',
        items: [
          '`semanage port -l` — tutte le assegnazioni porta-tipo',
          '`semanage port -a -t tipo -p tcp PORTA` — aggiunge porta',
          '`semanage port -d -t tipo -p tcp PORTA` — rimuove porta',
          '`semanage port -m -t tipo -p tcp PORTA` — modifica porta',
          'Necessario se un servizio usa una porta non standard',
        ],
      },
      {
        title: 'Debug SELinux completo',
        items: [
          '1. `setenforce 0` — permissive per diagnostica',
          '2. Controlla `/var/log/audit/audit.log` per AVC',
          '3. `sealert -a /var/log/audit/audit.log`',
          '4. Applica fix (boolean, contesto, porta)',
          '5. `setenforce 1` — torna enforcing',
          '6. Verifica che il servizio funzioni',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t     tcp    80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Container con Podman ─────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Podman Basics',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — scarica l\'immagine UBI9 (Universal Base Image di Red Hat).' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — lancia container interattivo con shell bash.' },
        { emoji: '🔍', text: '`podman ps` — container in esecuzione. `podman ps -a` — tutti, inclusi quelli fermati.' },
        { emoji: '⚡', text: '`podman exec mycontainer ls /etc` — esegue comando in container già in esecuzione.' },
        { emoji: '🗑️', text: '`podman rm mycontainer` — elimina container fermo. `podman rmi immagine` — elimina immagine.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandi fondamentali Podman',
        items: [
          '`podman pull immagine:tag` — scarica immagine',
          '`podman run [options] immagine [cmd]` — crea e avvia',
          '`podman ps` / `podman ps -a` — lista container',
          '`podman images` — lista immagini locali',
          '`podman exec -it container bash` — shell nel container',
          '`podman stop/start/restart container`',
          '`podman rm container` / `podman rmi immagine`',
        ],
      },
      {
        title: 'Opzioni run essenziali',
        items: [
          '`-d` — detached (background)',
          '`-it` — interactive + pseudo-TTY',
          '`--name miocontainer` — nome personalizzato',
          '`-p 8080:80` — mappa porta host:container',
          '`-v /host/path:/container/path` — bind mount',
          '`-e VAR=valore` — variabile d\'ambiente',
          '`--rm` — rimuovi container quando fermato',
        ],
      },
      {
        title: 'Differenze Podman vs Docker',
        items: [
          'Podman è **daemonless** — no socket root',
          'Supporta container **rootless** per sicurezza',
          'Compatibile con Docker CLI (stessa sintassi)',
          '`podman generate systemd` — genera unit file',
          'Su RHEL9: Podman è lo strumento raccomandato',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d --name webserver -p 8080:80 nginx:latest',
      output: 'Trying to pull docker.io/library/nginx:latest...\nGetting image source signatures\n...Done\nabc123def456789...',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Registry e Immagini',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — cerca immagini nei registry configurati.' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — autenticazione registry privato. Salva token localmente.' },
        { emoji: '🏷️', text: '`podman tag myapp:latest registry.example.com/myapp:v1.0` — assegna tag per il push.' },
        { emoji: '📤', text: '`podman push registry.example.com/myapp:v1.0` — carica immagine nel registry.' },
        { emoji: '🔍', text: '`skopeo inspect docker://registry.redhat.io/ubi9` — info immagine senza scaricarla.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestione immagini',
        items: [
          '`podman images` — lista immagini locali',
          '`podman image inspect nome` — metadati dettagliati',
          '`podman image history nome` — layer dell\'immagine',
          '`podman tag sorgente:tag dest:tag` — rinomina/aggiunge tag',
          '`podman rmi immagine` — rimuove immagine locale',
          '`podman image prune` — rimuove immagini non usate',
        ],
      },
      {
        title: 'Registry e autenticazione',
        items: [
          '`podman login registry.redhat.io` — login registry',
          '`podman logout registry.redhat.io` — logout',
          'Credenziali in `~/.config/containers/auth.json`',
          'Registry configurati: `/etc/containers/registries.conf`',
          'Regola "short-name": `ubi9` → cerca nei registry configurati',
        ],
      },
      {
        title: 'Push/pull workflow',
        items: [
          '1. `podman login registry.example.com`',
          '2. `podman build -t myapp:1.0 .`',
          '3. `podman tag myapp:1.0 registry.example.com/team/myapp:1.0`',
          '4. `podman push registry.example.com/team/myapp:1.0`',
          '`skopeo copy` — copia tra registry senza download',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -3',
      output: 'NAME                   DESCRIPTION                    STARS  OFFICIAL\ndocker.io/library/nginx  Official build of Nginx.       18000  [OK]\nquay.io/nginx/nginx-ingress  NGINX and F5 Ingress...       100',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — prima istruzione obbligatoria: immagine base da cui partire.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd && dnf clean all` — esegue comandi durante il build.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — copia file locali nell\'immagine. COPY è preferito a ADD.' },
        { emoji: '🚪', text: '`EXPOSE 80` — documenta la porta. `CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]` — comando di default.' },
        { emoji: '🔨', text: '`podman build -t myhttpd:1.0 .` — costruisce l\'immagine dalla directory corrente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Istruzioni Containerfile',
        items: [
          '`FROM immagine:tag` — immagine base (prima istruzione)',
          '`RUN comando` — esegue durante build (crea layer)',
          '`COPY src dest` — copia file locali nell\'immagine',
          '`ADD src dest` — come COPY + URL + tar auto-extract',
          '`ENV VAR=valore` — variabile d\'ambiente',
          '`EXPOSE porta` — documenta porta (non apre!)',
          '`CMD ["cmd", "arg"]` — comando default (sovrascrivibile)',
          '`ENTRYPOINT ["cmd"]` — punto di ingresso fisso',
        ],
      },
      {
        title: 'COPY vs ADD vs ENTRYPOINT vs CMD',
        items: [
          'COPY: solo file/dir locali (raccomandato)',
          'ADD: aggiunge URL e auto-extract .tar (usa solo se serve)',
          'ENTRYPOINT: sempre eseguito, non sovrascrivibile facilmente',
          'CMD: argomenti default (sovrascrivibili con podman run args)',
          'Combo: ENTRYPOINT=["/app"] + CMD=["--help"]',
        ],
      },
      {
        title: 'Best practices build',
        items: [
          'Unire RUN in un unico layer: `RUN cmd1 && cmd2`',
          'Pulizia nella stessa RUN: `... && dnf clean all`',
          'Usare .dockerignore per escludere file non necessari',
          'Usare immagini base ufficiali (ubi9 per RHEL)',
          '`podman build --no-cache -t app:1.0 .` — build pulita',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd && dnf clean all\nCOPY index.html /var/www/html/\nEXPOSE 80\nCMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Volumi e Networking Container',
      panels: [
        { emoji: '🔗', text: '`-v /host/dir:/container/dir` — bind mount: il container accede ai file dell\'host.' },
        { emoji: '🔐', text: 'Con SELinux: `-v /data:/data:z` (condiviso) o `:Z` (uso esclusivo). FONDAMENTALE su RHEL!' },
        { emoji: '🔌', text: '`-p 8080:80` — mappa porta host 8080 alla porta container 80.' },
        { emoji: '📦', text: '`podman volume create mydata` — volume gestito da Podman (più portabile del bind mount).' },
        { emoji: '🌐', text: 'Container nella stessa pod comunicano via localhost. `--network host` usa la rete dell\'host.' },
      ],
    },
    keyPoints: [
      {
        title: 'Volumi e bind mount',
        items: [
          '`-v /host:/container` — bind mount',
          '`-v /host:/container:ro` — read-only',
          '`-v /host:/container:z` — SELinux shared label',
          '`-v /host:/container:Z` — SELinux private label',
          '`podman volume create myvol` — volume Podman',
          '`-v myvol:/container/path` — usa volume Podman',
          '`podman volume ls` / `podman volume rm`',
        ],
      },
      {
        title: 'Port mapping e networking',
        items: [
          '`-p HOST_PORT:CONTAINER_PORT` — mappa porta',
          '`-p 0.0.0.0:8080:80` — specifica interfaccia host',
          '`--network host` — condivide rete host',
          '`--network bridge` — rete bridge (default)',
          '`-p 8080:80/udp` — per protocollo UDP',
          '`podman port container` — mostra mapping attivi',
        ],
      },
      {
        title: 'Persistenza container (systemd)',
        items: [
          '`podman generate systemd --name container --files`',
          'Crea unit file per gestire container come servizio',
          'Copia in `~/.config/systemd/user/` (rootless)',
          '`systemctl --user enable --now container-nome`',
          '`loginctl enable-linger username` — avvio senza login',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d --name webapp -p 8080:80 -v /var/www/html:/usr/share/nginx/html:Z nginx',
      output: 'a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef12345678',
    },
  },

}
