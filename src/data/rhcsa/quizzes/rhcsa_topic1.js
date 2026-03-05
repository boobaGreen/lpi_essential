// RHCSA Quiz — Topic 1: Strumenti Essenziali (Italiano)
// 25 domande MCQ per il Topic 1

export const rhcsaTopic1Quizzes = [
  // ─── Lezione 1.1: Shell e I/O Redirection (8 domande) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale operatore redirige stdout E stderr nello stesso file?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> redirige sia lo standard output (fd 1) che lo standard error (fd 2) nello stesso file.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Cosa fa il comando `ls -la /etc >> /tmp/output.txt`?',
    options: [
      'Sovrascrive /tmp/output.txt con il contenuto di /etc',
      'Aggiunge l\'output di ls in coda a /tmp/output.txt',
      'Redirige gli errori di ls in /tmp/output.txt',
      'Crea un hard link tra /etc e /tmp/output.txt',
    ],
    correct: 1,
    explanation: '>> aggiunge (append) l\'output in coda al file, senza sovrascriverlo.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Vuoi eseguire `find / -name "*.log"` sopprimendo solo gli errori "Permission denied". Quale comando usi?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null redirige stderr (file descriptor 2) verso /dev/null, scartando solo gli errori.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Cosa fa la pipe `|` in `ps aux | grep httpd`?',
    options: [
      'Salva l\'output di ps aux in un file chiamato "grep httpd"',
      'Passa l\'output di ps aux come input di grep httpd',
      'Esegue ps aux e grep httpd in parallelo senza connessione',
      'Redirige gli errori di ps aux verso grep',
    ],
    correct: 1,
    explanation: 'La pipe | collega stdout del primo comando a stdin del secondo, permettendo il "piping" dei dati.',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando invia sia stdout che stderr in /dev/null (silenzio totale)?',
    options: [
      'comando > /dev/null 2>&1',
      'comando 2> /dev/null',
      'comando > /dev/null',
      'comando >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null redirige stdout, poi 2>&1 redirige stderr dove punta stdout (cioè /dev/null). Equivalente a &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quale file descriptor corrisponde a stderr?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'I file descriptor standard: 0=stdin, 1=stdout, 2=stderr.',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Cosa rappresenta `/dev/null`?',
    options: [
      'Un file vuoto che può contenere solo testo',
      'Una periferica speciale che scarta tutto ciò che riceve',
      'Il file di log del kernel',
      'Un link simbolico alla directory home',
    ],
    correct: 1,
    explanation: '/dev/null è una periferica speciale (null device) che scarta silenziosamente tutto l\'input.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Come usi `tee` per vedere l\'output a schermo E salvarlo in un file contemporaneamente?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` legge stdin, scrive sia su stdout che sul file specificato. Utile in pipeline.',
  },

  // ─── Lezione 1.2: grep e Regex (7 domande) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale opzione di grep esegue una ricerca case-insensitive?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) rende grep insensibile alle maiuscole: `grep -i "error" file`.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando mostra le righe di /etc/passwd che NON contengono "nologin"?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) mostra le righe che NON corrispondono al pattern.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'In una regex, cosa corrisponde il pattern `^root`?',
    options: [
      'La parola "root" in qualsiasi posizione della riga',
      'Le righe che iniziano con "root"',
      'Le righe che terminano con "root"',
      'Qualsiasi carattere seguito da "root"',
    ],
    correct: 1,
    explanation: '^ è un anchor che indica l\'inizio della riga. `^root` corrisponde solo a righe che iniziano con "root".',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quale opzione di grep conta il numero di righe corrispondenti?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) stampa solo il numero di righe che corrispondono al pattern, non le righe stesse.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando usa le Extended Regular Expressions?',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '-E (o egrep) abilita le Extended Regex che supportano +, ?, |, () senza escape.',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quale grep trova righe che iniziano con una cifra?',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = inizio riga, `[0-9]` = qualsiasi cifra. Insieme trovano righe che iniziano con una cifra.',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale opzione cerca ricorsivamente in tutte le sottodirectory?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) fa sì che grep scenda nelle sottodirectory. Utile per cercare in /etc/.',
  },

  // ─── Lezione 1.3: Permessi e Link (5 domande) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale permesso in notazione ottale corrisponde a `rwxr-xr-x`?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=7, r-x=5, r-x=5 → 755. È il permesso tipico per file eseguibili e directory pubbliche.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando crea un link simbolico di /etc/hosts in /tmp/?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s` crea un symbolic link. Senza -s si crea un hard link.',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual è la differenza principale tra hard link e symbolic link?',
    options: [
      'I symbolic link sono più veloci degli hard link',
      'Gli hard link condividono lo stesso inode; i symbolic link puntano a un path',
      'Gli hard link funzionano cross-filesystem; i symbolic link no',
      'I symbolic link non possono puntare a file regolari',
    ],
    correct: 1,
    explanation: 'Hard link: stesso inode, stesso filesystem. Symbolic link: punta a un percorso, può essere cross-filesystem.',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando aggiunge il permesso di esecuzione per il proprietario, senza toccare gli altri?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`chmod u+x` aggiunge execute solo all\'utente (user). a+x lo aggiungerebbe a tutti.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando cambia sia proprietario che gruppo di un file?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown user:group file` cambia sia il proprietario che il gruppo con un solo comando.',
  },

  // ─── Lezione 1.4: Archivi e Compressione (3 domande) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando crea un archivio tar compresso con gzip chiamato backup.tar.gz dalla directory /home/mario?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'c=crea, z=gzip, v=verbose, f=file. `tar -czvf archivio.tar.gz sorgente`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quale flag tar usa la compressione bzip2?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'j = bzip2 (.tar.bz2), z = gzip (.tar.gz), J = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Come estrai un archivio tar.gz in /opt/ senza cambiare directory?',
    options: [
      'tar -xzf archivio.tar.gz /opt/',
      'tar -xzf archivio.tar.gz -C /opt/',
      'tar -xzf archivio.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archivio.tar.gz',
    ],
    correct: 1,
    explanation: '-C specifica la directory di destinazione per l\'estrazione.',
  },

  // ─── Lezione 1.5: Documentazione (2 domande) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando visualizza la pagina man della sezione 5 (file di configurazione) per passwd?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man N comando` specifica la sezione. Sezione 1=comandi, 5=file config, 8=comandi sysadmin.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Dove si trovano i file di documentazione installati con i pacchetti RPM?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: '/usr/share/doc/ contiene README, esempi e documentazione per ogni pacchetto installato.',
  },
]
