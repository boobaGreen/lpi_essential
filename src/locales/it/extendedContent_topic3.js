export const topic3Extended = {
  '3-1': {
    title: 'Archiviazione e Compressione',
    sections: [
      { type: 'heading', level: 2, emoji: '🗜️', text: 'Compressione vs Archiviazione' },
      { type: 'paragraph', text: 'Archiviazione e compressione sono due operazioni distinte spesso usate insieme. Archiviare significa raggruppare più file in uno solo. Comprimere significa ridurre la dimensione dei dati. tar archivia, gzip/bzip2/xz comprimono.' },
      { type: 'comparison', left: {
        title: '📦 Archiviazione (tar)',
        items: ['Raggruppa più file/directory in uno', 'NON comprime (dimensione ≈ uguale)', 'Preserva permessi, timestamp, struttura', 'Produce file .tar']
      }, right: {
        title: '🗜️ Compressione (gzip, bzip2, xz)',
        items: ['Riduce la dimensione di UN file', 'Algoritmi matematici per eliminare ridondanza', 'Più comprimi, più è lento', 'Produce .gz, .bz2, .xz']
      }},

      { type: 'heading', level: 2, emoji: '📊', text: 'Algoritmi a Confronto' },
      { type: 'table', headers: ['Algoritmo', 'Estensione', 'Velocità', 'Compressione', 'Comando', 'Decompressione'], rows: [
        ['gzip', '.gz', '⚡ Veloce', '⭐⭐⭐', 'gzip file', 'gunzip file.gz'],
        ['bzip2', '.bz2', '🐌 Medio', '⭐⭐⭐⭐', 'bzip2 file', 'bunzip2 file.bz2'],
        ['xz', '.xz', '🐢 Lento', '⭐⭐⭐⭐⭐', 'xz file', 'unxz file.xz'],
        ['zip', '.zip', '⚡ Veloce', '⭐⭐⭐', 'zip arch.zip file', 'unzip arch.zip'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'Quando usare quale?', content: 'gzip per uso quotidiano (veloce e buono). xz per distribuire software (massima compressione). bzip2 sta cadendo in disuso a favore di xz.' },

      { type: 'heading', level: 2, emoji: '📋', text: 'I Flag di tar — La Ricetta' },
      { type: 'table', headers: ['Flag', 'Significato', 'Mnemonico'], rows: [
        ['-c', 'Create (crea archivio)', 'C = Create'],
        ['-x', 'Extract (estrai)', 'X = eXtract'],
        ['-t', 'List (mostra contenuto)', 'T = lisT'],
        ['-f', 'File (specifica il nome)', 'F = File (sempre ultimo!)'],
        ['-z', 'gzip', 'Z come Zip'],
        ['-j', 'bzip2', 'J come bJip2'],
        ['-J', 'xz', 'J maiuscola = XZ (più potente)'],
        ['-v', 'Verbose (mostra progresso)', 'V = Verbose'],
      ]},
      { type: 'code', title: 'Esempi pratici con tar', prompt: '# Creare archivio compresso gzip\n$ tar -czf backup.tar.gz /home/user/docs/\n\n# Estrarre archivio\n$ tar -xzf backup.tar.gz\n\n# Estrarre in una directory specifica\n$ tar -xzf backup.tar.gz -C /tmp/\n\n# Listare il contenuto senza estrarre\n$ tar -tzf backup.tar.gz\n\n# Creare con xz (massima compressione)\n$ tar -cJf archivio.tar.xz directory/', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede i flag di tar per creare (-czf) e estrarre (-xzf) e di sapere la differenza tra -z (gzip), -j (bzip2) e -J (xz). Ricorda: gzip è il più usato di default.' },
    ]
  },

  '3-2': {
    title: 'Redirezione I/O e Pipe',
    sections: [
      { type: 'heading', level: 2, emoji: '0️⃣', text: 'I Tre File Descriptor Standard' },
      { type: 'paragraph', text: 'Ogni processo Linux ha tre canali I/O aperti di default. Comprendere questi canali è fondamentale per la redirezione e le pipe.' },
      { type: 'diagram', title: 'Flusso I/O Standard', boxes: [
        { label: 'stdin (0)', color: '#10b981', children: ['Tastiera (default)', 'File (<)', 'Pipe output'] },
        { label: 'stdout (1)', color: '#3b82f6', children: ['Schermo (default)', 'File (>)', 'Pipe input'] },
        { label: 'stderr (2)', color: '#ef4444', children: ['Schermo (default)', 'File (2>)', '/dev/null'] },
      ]},

      { type: 'heading', level: 2, emoji: '➡️', text: 'Operatori di Redirezione' },
      { type: 'table', headers: ['Operatore', 'Funzione', 'Esempio'], rows: [
        ['> file', 'stdout → file (sovrascrive)', 'ls > lista.txt'],
        ['>> file', 'stdout → file (appende)', 'echo "nuova riga" >> log.txt'],
        ['< file', 'file → stdin', 'sort < numeri.txt'],
        ['2> file', 'stderr → file', 'find / -name "x" 2> errori.txt'],
        ['2>&1', 'stderr → stesso output di stdout', 'cmd > tutto.log 2>&1'],
        ['&> file', 'stdout + stderr → file', 'cmd &> output.log'],
        ['/dev/null', '"Buco nero" — scarta tutto', 'cmd 2>/dev/null'],
      ]},
      { type: 'code', title: 'Scenari comuni di redirezione', prompt: '# Salvare output di un comando\n$ ls -la /etc > lista_etc.txt\n\n# Ignorare gli errori\n$ find / -name "config" 2>/dev/null\n\n# Salvare tutto (stdout + stderr)\n$ apt update &> update.log\n\n# Appendere a un log\n$ echo "$(date): backup completato" >> /var/log/backup.log', output: '' },

      { type: 'heading', level: 2, emoji: '🔗', text: 'Pipe — Il Potere della Composizione' },
      { type: 'paragraph', text: 'La pipe (|) è il concetto più potente della command line Unix. Connette lo stdout di un comando allo stdin del successivo, permettendo di costruire pipeline complesse da comandi semplici.' },
      { type: 'code', title: 'Pipeline: dalla semplice alla complessa', prompt: '# Conta quanti file ci sono in /etc\n$ ls /etc | wc -l\n\n# Trova i 5 processi che usano più RAM\n$ ps aux | sort -k4 -rn | head -5\n\n# Conta quante volte appare "error" nei log\n$ cat /var/log/syslog | grep -i error | wc -l\n\n# Estrai username unici che hanno fatto login\n$ last | awk \'{print $1}\' | sort | uniq -c | sort -rn', output: '' },

      { type: 'heading', level: 2, emoji: '🔀', text: 'Operatori Logici tra Comandi' },
      { type: 'table', headers: ['Operatore', 'Significato', 'Esempio'], rows: [
        ['cmd1 && cmd2', 'Esegui cmd2 SOLO se cmd1 ha successo (exit 0)', 'mkdir dir && cd dir'],
        ['cmd1 || cmd2', 'Esegui cmd2 SOLO se cmd1 fallisce (exit ≠ 0)', 'ping host || echo "Offline"'],
        ['cmd1 ; cmd2', 'Esegui cmd2 SEMPRE, indipendentemente', 'date ; whoami'],
        ['cmd &', 'Esegui cmd in background', 'sleep 100 &'],
      ]},
      { type: 'story', title: 'Scenario: Automatizzare un Backup', text: 'Sei un sysadmin e devi fare un backup giornaliero. Con la pipeline: tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo "Backup OK" >> /var/log/backup.log || echo "ERRORE backup" >> /var/log/backup.log — Crea l\'archivio, salva il risultato nel log. Se fallisce, logga l\'errore.' },
    ]
  },

  '3-3': {
    title: 'Grep e Espressioni Regolari',
    sections: [
      { type: 'heading', level: 2, emoji: '🔎', text: 'grep — Il Coltellino Svizzero del Testo' },
      { type: 'table', headers: ['Opzione', 'Funzione', 'Esempio'], rows: [
        ['-i', 'Case insensitive', 'grep -i "error" log.txt'],
        ['-v', 'Inverti match (righe che NON corrispondono)', 'grep -v "^#" config.txt'],
        ['-r / -R', 'Cerca ricorsivamente nelle directory', 'grep -r "TODO" src/'],
        ['-n', 'Mostra numero di riga', 'grep -n "main" program.c'],
        ['-c', 'Conta le righe trovate', 'grep -c "error" syslog'],
        ['-l', 'Mostra solo i nomi dei file', 'grep -rl "password" /etc/'],
        ['-w', 'Match solo parole intere', 'grep -w "is" file (non "this")'],
        ['-E', 'Extended regex (egrep)', 'grep -E "err|warn" log'],
      ]},

      { type: 'heading', level: 2, emoji: '🌟', text: 'Metacaratteri Regex' },
      { type: 'table', headers: ['Metacarattere', 'Significato', 'Esempio', 'Match'], rows: [
        ['.', 'Qualsiasi singolo carattere', 'c.t', 'cat, cut, cot'],
        ['^', 'Inizio riga', '^Error', 'Error al inizio riga'],
        ['$', 'Fine riga', 'end$', 'the end'],
        ['*', 'Zero o più del precedente', 'ab*c', 'ac, abc, abbc'],
        ['[ ]', 'Uno tra i caratteri nel set', '[aeiou]', 'Vocale singola'],
        ['[^ ]', 'Qualsiasi tranne i caratteri nel set', '[^0-9]', 'Non un numero'],
        ['\\', 'Escape del metacarattere', '\\.', 'Un punto letterale'],
      ]},
      { type: 'code', title: 'Esempi pratici con regex', prompt: '# Righe che iniziano con # (commenti)\n$ grep "^#" /etc/ssh/sshd_config\n\n# Righe vuote\n$ grep "^$" file.txt\n\n# Indirizzi IP (pattern semplice)\n$ grep -E "[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+" access.log\n\n# Righe NON vuote e NON commenti\n$ grep -v "^#" config | grep -v "^$"', output: '' },

      { type: 'heading', level: 2, emoji: '✂️', text: 'Manipolazione Testo: il Power Toolkit' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Esempio chiave'], rows: [
        ['cut', 'Estrae colonne/campi', 'cut -d: -f1 /etc/passwd'],
        ['sort', 'Ordina le righe', 'sort -n (numerico) -r (inverso)'],
        ['uniq', 'Rimuove duplicati adiacenti', 'sort file | uniq -c'],
        ['wc', 'Conta righe, parole, byte', 'wc -l (righe) -w (parole)'],
        ['head', 'Prime N righe', 'head -n 20 file'],
        ['tail', 'Ultime N righe', 'tail -f syslog (segui)'],
        ['tr', 'Traduce caratteri', "tr 'a-z' 'A-Z' (maiuscolo)"],
        ['sed', 'Stream editor', "sed 's/old/new/g' file"],
        ['awk', 'Elabora colonne', "awk '{print $1, $3}' file"],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI testa grep con -i, -v, -r e le regex base (^, $, ., *). Conosci anche cut, sort, wc e la differenza tra head e tail.' },
    ]
  },

  '3-4': {
    title: 'Script Bash',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Anatomia di uno Script Bash' },
      { type: 'code', title: 'Struttura base di uno script', prompt: '#!/bin/bash\n# Questo è un commento\n# Lo shebang (prima riga) dice al sistema quale interprete usare\n\n# Variabili\nNOME="LinuxQuest"\nVERSIONE=2.0\n\n# Stampa\necho "Benvenuto in $NOME v$VERSIONE!"\necho "Utente: $(whoami), Data: $(date +%F)"\n\n# Exit code: 0 = successo\nexit 0', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Non dimenticare chmod +x!', content: 'Uno script non è eseguibile di default. Devi aggiungere il permesso di esecuzione: chmod +x script.sh. Poi eseguilo con ./script.sh (il ./ è necessario se la directory corrente non è nel PATH).' },

      { type: 'heading', level: 2, emoji: '📥', text: 'Variabili Speciali negli Script' },
      { type: 'table', headers: ['Variabile', 'Contenuto', 'Esempio'], rows: [
        ['$0', 'Nome dello script', './backup.sh → backup.sh'],
        ['$1, $2, ...', 'Argomenti posizionali', './script.sh ciao → $1=ciao'],
        ['$#', 'Numero di argomenti', 'Se chiami con 3 args → $#=3'],
        ['$@', 'Tutti gli argomenti (separati)', '"$@" = "$1" "$2" "$3"'],
        ['$*', 'Tutti gli argomenti (uniti)', '"$*" = "$1 $2 $3"'],
        ['$?', 'Exit code ultimo comando', '0 = successo, altro = errore'],
        ['$$', 'PID dello script corrente', 'Utile per file temporanei'],
      ]},

      { type: 'heading', level: 2, emoji: '🔀', text: 'Condizioni e Cicli' },
      { type: 'code', title: 'If-then-else', prompt: '#!/bin/bash\nif [ -f "/etc/passwd" ]; then\n    echo "Il file esiste!"\nelif [ -d "/etc" ]; then\n    echo "È una directory"\nelse\n    echo "Non trovato"\nfi', output: '' },
      { type: 'table', headers: ['Test', 'Significato', 'Tipo'], rows: [
        ['[ -f file ]', 'File esiste ed è un file regolare', 'File'],
        ['[ -d dir ]', 'La directory esiste', 'File'],
        ['[ -e path ]', 'Il percorso esiste (qualsiasi tipo)', 'File'],
        ['[ -r file ]', 'Il file è leggibile', 'Permessi'],
        ['[ -x file ]', 'Il file è eseguibile', 'Permessi'],
        ['[ -z "$var" ]', 'La stringa è vuota', 'Stringa'],
        ['[ "$a" = "$b" ]', 'Stringhe uguali', 'Stringa'],
        ['[ $a -eq $b ]', 'Numeri uguali', 'Numero'],
        ['[ $a -lt $b ]', 'a < b (less than)', 'Numero'],
        ['[ $a -gt $b ]', 'a > b (greater than)', 'Numero'],
      ]},
      { type: 'code', title: 'Cicli for e while', prompt: '# Ciclo for su una lista\nfor file in *.txt; do\n    echo "Processo: $file"\n    wc -l "$file"\ndone\n\n# Ciclo for con range numerico\nfor i in $(seq 1 10); do\n    echo "Iterazione $i"\ndone\n\n# Ciclo while\ncontatore=1\nwhile [ $contatore -le 5 ]; do\n    echo "Contatore: $contatore"\n    contatore=$((contatore + 1))\ndone', output: '' },
      { type: 'story', title: 'Scenario: Script di Backup Automatico', text: 'Crea uno script backup.sh che: 1) Controlla se la directory di backup esiste (if -d), 2) Crea un archivio tar.gz con la data nel nome, 3) Conta i backup vecchi e li elimina se sono più di 7 (for + rm), 4) Logga il risultato. Questo è il tipo di automazione che ogni sysadmin fa quotidianamente!' },
    ]
  },
}
