// LPIC-1 101 Quiz — Thema 3: GNU- und Unix-Befehle (Deutsch)

export const lpic1_101_topic3_de = [
  // ─── 103.1 Auf der Befehlszeile arbeiten (7 Fragen) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher der folgenden Befehle bestimmt, ob ein bestimmter Name ein Shell-Builtin, ein Alias oder ein externer Befehl ist?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'Der Befehl `type` zeigt genau an, wie die Shell einen Namen interpretiert (Builtin, Alias, Datei oder Funktion).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welche Umgebungsvariable enthält eine durch Doppelpunkte getrennte Liste von Verzeichnissen, in denen die Shell nach ausführbaren Befehlen sucht?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'Die Variable $PATH definiert die Verzeichnisse, in denen die Shell nach ausführbaren Dateien sucht.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt Kurzinformationen über die Systemarchitektur, die Kernel-Version und den Hostnamen an?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname mit dem Flag -a (all) gibt alle Systeminformationen einschließlich Kernel und Hardware aus.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie definieren Sie eine Shell-Variable namens `MYVAR` mit dem Text "Hallo", so dass sie auch für Kindprozesse verfügbar ist?',
    options: [
      'MYVAR="Hallo"',
      'set MYVAR="Hallo"',
      'export MYVAR="Hallo"',
      'env MYVAR="Hallo"'
    ],
    correct: 2,
    explanation: 'export erstellt eine Umgebungsvariable, die von allen Kindprozessen geerbt wird.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der Hauptunterschied zwischen einfachen Anführungszeichen (\') und doppelten Anführungszeichen (") in Bash?',
    options: [
      'Einfache Anführungszeichen erlauben Variablenexpansion ($VAR), doppelte nicht',
      'Doppelte Anführungszeichen erlauben Variablenexpansion ($VAR), einfache verhindern jegliche Expansion',
      'Doppelte Anführungszeichen sind für Zahlen, einfache für Strings',
      'Es gibt keinen Unterschied'
    ],
    correct: 1,
    explanation: 'Doppelte Anführungszeichen erlauben die Variablenexpansion, während einfache Anführungszeichen den literalen Wert aller Zeichen beibehalten.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welche Tastenkombination startet eine Rückwärtssuche in der Bash-Befehlshistorie?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R startet eine Rückwärtssuche, mit der Sie zuvor ausgeführte Befehle abrufen können.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was bewirkt der Befehl `!55` in Bash?',
    options: [
      'Er beendet den Prozess mit der PID 55',
      'Er führt den Befehl Nummer 55 aus der Historienliste aus',
      'Er löscht den Befehl Nummer 55 aus der Historie',
      'Er führt den Befehl "55" aus'
    ],
    correct: 1,
    explanation: 'Das Symbol `!` ruft die Historienerweiterung auf. `!n` bezieht sich auf die Befehlszeile n in der Historienliste.',
  },

  // ─── 103.2 Textströme mit Filtern verarbeiten (6 Fragen) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl gibt standardmäßig die LETZTEN 10 Zeilen einer Datei aus?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail gibt die letzten Zeilen einer Datei aus; standardmäßig 10 Zeilen.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl liest eine Datei und gibt sie mit vorangestellten Zeilennummern aus?',
    options: ['nl', 'wc -l', 'cat -n', 'Sowohl nl als auch cat -n'],
    correct: 3,
    explanation: 'Sowohl `nl` (number lines) als auch `cat -n` stellen den Ausgabezeilen Nummern voran.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welche drei Standardattribute einer Datei zählt der Befehl `wc`?',
    options: [
      'Zeilen, Zeichen, Bytes',
      'Sätze, Wörter, Zeichen',
      'Zeilen, Wörter, Bytes/Zeichen',
      'Zeilen, Wörter, Absätze'
    ],
    correct: 2,
    explanation: 'wc (word count) gibt die Anzahl der Zeilen, Wörter und Bytes/Zeichen aus.',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um aufeinanderfolgende doppelte Zeilen aus einer sortierten Datei zu entfernen?',
    options: ['sort -u', 'uniq', 'Sowohl sort -u als auch uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` entfernt aufeinanderfolgende Dubletten. `sort -u` sortiert und entfernt Dubletten global.',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Befehl extrahiert das erste Feld der Datei /etc/passwd, wenn die Felder durch Doppelpunkte (":") getrennt sind?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` setzt das Trennzeichen auf Doppelpunkt und `-f1` wählt das erste Feld aus.',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher sed-Befehl ersetzt das Wort "apple" bei jedem Vorkommen in file.txt vollständig durch "orange"?',
    options: ['sed "r/apple/orange/" file.txt', 'sed "s/apple/orange/g" file.txt', 'sed "s/apple/orange" file.txt', 'sed "sub/apple/orange/all" file.txt'],
    correct: 1,
    explanation: 'Der Ersetzungsbefehl `s/Muster/Ersatz/g` ersetzt alle Vorkommen in jeder Zeile.',
  },

  // ─── 103.3 Grundlegende Dateiverwaltung (6 Fragen) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl erstellt eine leere Datei namens "notes.txt" oder aktualisiert deren Zeitstempel, falls sie bereits existiert?',
    options: ['create notes.txt', 'touch notes.txt', 'echo notes.txt', 'mkfile notes.txt'],
    correct: 1,
    explanation: 'touch ändert Dateizeitstempel oder erstellt eine leere Datei, wenn sie nicht existiert.',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl erstellt ein Verzeichnis namens `project` und dessen übergeordnetes Verzeichnis `work`, falls dieses nicht existiert?',
    options: ['mkdir work/project', 'mkdir -p work/project', 'mkdir --all work/project', 'mkdir -r work/project'],
    correct: 1,
    explanation: 'mkdir -p (--parents) erstellt Zwischenverzeichnisse nach Bedarf.',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Sie möchten ein gesamtes Verzeichnis `/docs` und seinen Inhalt nach `/backup` kopieren. Welchen Befehl verwenden Sie?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'Das Flag -r (rekursiv) weist `cp` an, Verzeichnisse zusammen mit ihrem Inhalt zu kopieren.',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Worauf passt der Platzhalter `?` beim Bash-Globbing?',
    options: ['Beliebige Anzahl von Zeichen', 'Genau ein Zeichen', 'Null oder ein Zeichen', 'Nur Zahlen'],
    correct: 1,
    explanation: 'Beim Globbing passt `?` auf genau ein Zeichen.',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl sucht in Echtzeit im aktiven Dateisystem nach einer Datei?',
    options: ['locate file', 'updatedb', 'grep file', 'find / -name file'],
    correct: 3,
    explanation: '`find` durchläuft den tatsächlichen Dateisystembaum, um Dateien zu lokalisieren.',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Befehl komprimiert das Verzeichnis `/home/user` in ein einzelnes mit gzip komprimiertes tar-Archiv?',
    options: [
      'tar -xzvf backup.tar.gz /home/user',
      'tar -czvf backup.tar.gz /home/user',
      'zip backup.tar.gz /home/user',
      'gzip /home/user > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` erstellt (-c) ein mit gzip komprimiertes (-z) Archiv.',
  },

  // ─── 103.4 Ströme, Rohre und Umleitungen verwenden (4 Fragen) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Was bewirkt der Umleitungsoperator `>>`?',
    options: [
      'Leitet stdout in eine Datei um und überschreibt diese',
      'Leitet stdin aus einer Datei um',
      'Leitet stdout in eine Datei um und hängt sie an das Ende an',
      'Leitet stderr in eine Datei um'
    ],
    correct: 2,
    explanation: '`>>` hängt stdout an eine Datei an, ohne den vorhandenen Inhalt zu löschen.',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie leiten Sie die Standardfehlerausgabe (stderr) in eine Datei namens `error.log` um?',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: 'Der Dateideskriptor 2 repräsentiert stderr; `2>` leitet diesen um.',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Was bewirkt das Anhängen von `2>&1` an einen Befehl?',
    options: [
      'Es leitet stdout nach stderr um',
      'Es sendet sowohl stdout als auch stderr an denselben Ort',
      'Es unterdrückt jegliche Ausgabe',
      'Es führt Befehl 2 und dann Befehl 1 aus'
    ],
    correct: 1,
    explanation: '`2>&1` leitet stderr dorthin um, wohin stdout gerade zeigt.',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welches Tool liest von der Standardeingabe und schreibt SOWOHL in die Standardausgabe als auch in eine oder mehrere Dateien?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` teilt die Eingabe und sendet sie sowohl an die Ausgabe als auch an eine Datei.',
  },

  // ─── 103.5 Prozesse erstellen, überwachen und beenden (5 Fragen) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl bietet eine dynamische Echtzeitansicht der laufenden Prozesse im System?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` zeigt eine interaktive, aktualisierte Liste der Systemprozesse an.',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welches Signal wird standardmäßig vom Befehl `kill` gesendet, wenn keines angegeben ist?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` sendet standardmäßig SIGTERM (15) und bittet damit um eine saubere Beendung.',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wenn ein Prozess einen normalen kill-Befehl ignoriert, wie können Sie dessen sofortige Beendigung erzwingen?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` sendet SIGKILL, welches vom Prozess nicht ignoriert werden kann.',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welche Tastenkombination pausiert den aktiven Vordergrund-Job in einem Terminal?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z pausiert den Vordergrundprozess, der dann fortgesetzt oder in den Hintergrund verschoben werden kann.',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Wie führen Sie einen Befehl so aus, dass er auch nach dem Abmelden vom Terminal weiterläuft?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` macht einen Befehl immun gegen das Auflegesignal (SIGHUP).',
  },

  // ─── 103.6 Ausführungsprioritäten von Prozessen ändern (3 Fragen) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der gültige Bereich für "nice"-Werte unter Linux?',
    options: ['Von 0 bis 100', 'Von -20 bis +19', 'Von -19 bis +20', 'Von 1 bis 99'],
    correct: 1,
    explanation: 'Nice-Werte reichen von -20 (höchste Priorität) bis +19 (niedrigste Priorität).',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welche Aktion kann ein normaler Benutzer (nicht root) bezüglich Prozessprioritäten durchführen?',
    options: [
      'Den nice-Wert seiner eigenen Prozesse verringern',
      'Den nice-Wert seiner eigenen Prozesse erhöhen (Priorität verringern)',
      'Die Priorität jedes beliebiger Benutzerprozesse ändern',
      'Den nice-Wert auf -20 setzen'
    ],
    correct: 1,
    explanation: 'Normale Benutzer können nur den nice-Wert erhöhen (Priorität senken) ihrer eigenen Prozesse.',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl startet einen neuen Prozess mit einer angepassten Scheduling-Priorität?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` startet einen neuen Prozess mit geänderter Priorität; `renice` ändert bestehende Prozesse.',
  },

  // ─── 103.7 Textdateien mit regulären Ausdrücken durchsuchen (2 Fragen) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was stellt der Anker `^` in regulären Ausdrücken dar?',
    options: ['Das Zeilenende', 'Beliebige Gruppe von Zeichen', 'Der Zeilenanfang', 'Negation'],
    correct: 2,
    explanation: 'Das Zeichen `^` ankert die Übereinstimmung am Anfang der Zeile.',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was bedeutet `.*` in einem regulären Ausdruck?',
    options: [
      'Null oder mehr literale Punkte',
      'Ein literaler Punkt gefolgt von einem literalen Sternchen',
      'Null oder mehr beliebige Zeichen',
      'Genau ein Punkt'
    ],
    correct: 2,
    explanation: 'Der Punkt passt auf jedes Zeichen und das Sternchen auf null oder mehr; zusammen passen sie auf jede Zeichenkette.',
  },

  // ─── 103.8 Grundlegende Dateibearbeitung (3 Fragen) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Modus ist standardmäßig aktiv, wenn Sie vi öffnen?',
    options: ['Einfügemodus', 'Visueller Modus', 'Normal- (Befehls-) Modus', 'Ex-Modus'],
    correct: 2,
    explanation: 'vi öffnet sich im Normalmodus, in dem Tasteneingaben als Befehle interpretiert werden.',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was bewirkt der Befehl `dd` im Normalmodus von vi?',
    options: ['Löscht das aktuelle Zeichen', 'Löscht die gesamte aktuelle Zeile', 'Verdoppelt die aktuelle Zeile', 'Speichert das Dokument'],
    correct: 1,
    explanation: '`dd` löscht (schneidet aus) die gesamte aktuelle Zeile in vi.',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Wie erzwingen Sie das Beenden von vi, ohne Änderungen zu speichern?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` erzwingt das Beenden des Editors, ohne Änderungen zu speichern.',
  },
];
