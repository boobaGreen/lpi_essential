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

}
