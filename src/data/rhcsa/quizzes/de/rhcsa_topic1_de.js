// RHCSA Quiz — Topic 1: Essential Tools (Deutsch)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesDE = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Operator leitet sowohl stdout ALS AUCH stderr in dieselbe Datei um?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> leitet sowohl die Standardausgabe (fd 1) als auch die Standardfehlerausgabe (fd 2) in dieselbe Datei um.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was bewirkt der Befehl `ls -la /etc >> /tmp/output.txt`?',
    options: [
      'Überschreibt /tmp/output.txt mit dem Inhalt von /etc',
      'Hängt die Ausgabe von ls an /tmp/output.txt an',
      'Leitet ls-Fehler nach /tmp/output.txt um',
      'Erstellt einen Hardlink zwischen /etc und /tmp/output.txt',
    ],
    correct: 1,
    explanation: '>> hängt die Ausgabe an das Ende der Datei an, ohne sie zu überschreiben.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Sie möchten `find / -name "*.log"` ausführen und nur die "Permission denied"-Fehler unterdrücken. Welchen Befehl verwenden Sie?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null leitet stderr (Dateideskriptor 2) nach /dev/null um und verwirft somit nur die Fehler.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was macht die Pipe `|` in `ps aux | grep httpd`?',
    options: [
      'Speichert die Ausgabe von ps aux in einer Datei namens "grep httpd"',
      'Übergibt die Ausgabe von ps aux als Eingabe an grep httpd',
      'Führt ps aux und grep httpd parallel ohne Verbindung aus',
      'Leitet Fehler von ps aux an grep um',
    ],
    correct: 1,
    explanation: 'Die Pipe | verbindet stdout des ersten Befehls mit stdin des zweiten und ermöglicht so das "Piping" von Daten.',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl sendet sowohl stdout als auch stderr nach /dev/null (vollkommene Stille)?',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null leitet stdout um, und 2>&1 leitet stderr dorthin um, wohin stdout zeigt (d. h. /dev/null). Äquivalent zu &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Dateideskriptor entspricht stderr?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'Standard-Dateideskriptoren: 0=stdin, 1=stdout, 2=stderr.',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was stellt `/dev/null` dar?',
    options: [
      'Eine leere Datei, die nur Text enthalten kann',
      'Ein spezielles Gerät, das alles empfangene verwirft',
      'Die Kernel-Protokolldatei',
      'Ein symbolischer Link zum Home-Verzeichnis',
    ],
    correct: 1,
    explanation: '/dev/null ist ein spezielles Gerät (Zufallsdatensenke), das leise alle Eingaben verwirft.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie verwendet man `tee`, um die Ausgabe auf dem Bildschirm zu sehen UND sie gleichzeitig in einer Datei zu speichern?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` liest von stdin und schreibt sowohl nach stdout als auch in die angegebene Datei. Nützlich in Pipelines.',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welche grep-Option führt eine Suche durch, die Groß- und Kleinschreibung ignoriert?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) macht grep unabhängig von Groß- und Kleinschreibung: `grep -i "error" file`.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt die Zeilen von /etc/passwd, die NICHT "nologin" enthalten?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) zeigt die Zeilen, die NICHT mit dem Muster übereinstimmen.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'In einem regulären Ausdruck (Regex), was findet das Muster `^root`?',
    options: [
      'Das Wort "root" irgendwo in der Zeile',
      'Zeilen, die mit "root" beginnen',
      'Zeilen, die mit "root" enden',
      'Beliebiges Zeichen gefolgt von "root"',
    ],
    correct: 1,
    explanation: '^ ist ein Anker, der den Zeilenanfang anzeigt. `^root` findet nur Zeilen, die mit "root" beginnen.',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welche grep-Option zählt die Anzahl der übereinstimmenden Zeilen?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) gibt nur die Anzahl der Zeilen aus, die mit dem Muster übereinstimmen, nicht die Zeilen selbst.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl verwendet erweiterte reguläre Ausdrücke (Extended Regex)?',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '-E (oder egrep) aktiviert Extended Regex, was +, ?, |, () ohne maskieren (escaping) unterstützt.',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Welcher grep-Befehl findet Zeilen, die mit einer Ziffer beginnen?',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = Zeilenanfang, `[0-9]` = beliebige Ziffer. Zusammen finden sie Zeilen, die mit einer Ziffer beginnen.',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welche Option sucht rekursiv in allen Unterverzeichnissen?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) weist grep an, in Unterverzeichnisse abzusteigen. Nützlich für die Suche in /etc/.',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welche oktale Berechtigung entspricht `rwxr-xr-x`?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=7, r-x=5, r-x=5 → 755. Dies ist die typische Berechtigung für ausführbare Dateien und öffentliche Verzeichnisse.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl erstellt einen symbolischen Link von /etc/hosts in /tmp/?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s` erstellt einen symbolischen Link (Symlink). Ohne -s wird ein Hardlink erstellt.',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Hauptunterschied zwischen einem Hardlink und einem symbolischen Link?',
    options: [
      'Symbolische Links sind schneller als Hardlinks',
      'Hardlinks teilen sich denselben Inode; symbolische Links verweisen auf einen Pfad',
      'Hardlinks funktionieren dateisystemübergreifend; symbolische Links nicht',
      'Symbolische Links können nicht auf reguläre Dateien verweisen',
    ],
    correct: 1,
    explanation: 'Hardlink: selbe Inode, selbes Dateisystem. Symlink: verweist auf einen Pfad, kann dateisystemübergreifend sein.',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl fügt das Ausführungsrecht (Execute) für den Besitzer (Owner) hinzu, ohne den Rest zu ändern?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`chmod u+x` fügt x nur für den Benutzer (Owner) hinzu. a+x würde es für alle hinzufügen.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ändert sowohl den Besitzer als auch die Gruppe einer Datei in einem Schritt?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown user:group file` ändert sowohl Besitzer als auch Gruppe mit nur einem Befehl.',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl erstellt ein gzip-komprimiertes Tar-Archiv namens backup.tar.gz aus dem Verzeichnis /home/mario?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'c=create, z=gzip, v=verbose, f=file. `tar -czvf archive.tar.gz source`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welches tar-Flag nutzt die bzip2-Kompression?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'j = bzip2 (.tar.bz2), z = gzip (.tar.gz), J = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie entpackt man ein tar.gz-Archiv nach /opt/, ohne das Verzeichnis zu wechseln?',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: '-C (Wechseln nach) gibt das Zielverzeichnis für die Extraktion an.',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt die Manpage aus Sektion 5 (Konfigurationsdateien) für passwd?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man N command` gibt die Sektion an. Sektion 1=Benutzerbefehle, 5=Konfigurationsdateien, 8=Systemverwaltungsbefehle.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wo befinden sich die Dokumentationsdateien, die mit RPM-Paketen installiert werden?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: '/usr/share/doc/ enthält READMEs, Beispiele und Dokumentationen für jedes installierte Paket.',
  },
]
