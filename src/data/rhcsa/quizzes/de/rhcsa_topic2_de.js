// RHCSA Quiz — Topic 2: Shell Scripting (Deutsch)
// 15 MCQ questions

export const rhcsaTopic2QuizzesDE = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Wie deklariert man eine Variable in einer Bash-Shell?',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'In der bash werden Variablen ohne Leerzeichen deklariert: NAME="value". Das $ wird nur zum Lesen verwendet.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Spezialvariable enthält die Prozess-ID (PID) der aktuellen Bash?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '$$ enthält die PID des laufenden Prozesses. $? = Exit-Code, $0 = Skriptname, $! = PID des letzen Hintergrundjobs.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was bewirkt der Befehl `export VARIABLE="value"`?',
    options: [
      'Erstellt eine lokale Variable für das aktuelle Skript',
      'Macht die Variable für untergeordnete (Child-)Prozesse verfügbar',
      'Speichert die Variable dauerhaft in /etc/environment',
      'Löscht die Variable nach Ausführung des Skripts',
    ],
    correct: 1,
    explanation: 'export macht aus einer lokalen Variable eine Umgebungsvariable (Environment Variable), die an Child-Prozesse weitergegeben wird.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Mit welcher Syntax fängt man die Ausgabe eines Befehls in einer Variablen auf?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Sowohl A als auch B sind richtig', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Sowohl der Backtick `cmd` als auch $() funktionieren (Command Substitution). $() wird bevorzugt, da es verschachtelbar und besser lesbar ist.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Was gibt dieses Skript aus?\n```bash\nNAME="world"\necho "Hello ${NAME}!"\n```',
    options: ['Hello ${NAME}!', 'Hello world!', 'Hello $NAME!', 'Error: variable undefined'],
    correct: 1,
    explanation: '${NAME} erweitert/auflöst die Variable NAME innerhalb von doppelten Anführungszeichen. Ausgabe: "Hello world!"',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Bash-Befehl prüft, ob eine Datei existiert?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: '-e testet, ob die Datei existiert (jeder Typ). -f testet, ob sie existiert und regulär ist.',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was macht die folgende Schleife?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'Gibt folgendes aus: 123 in einer Zeile',
      'Gibt folgendes aus: 1, 2, 3 in jeweils eigenen Zeilen',
      'Syntaxfehler',
      'Führt echo einmal mit dem Argument "1 2 3" aus',
    ],
    correct: 1,
    explanation: 'Die for-Schleife iteriert über jedes Element. "echo $i" gibt jeden Wert in einer separaten Zeile aus.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Mit welchem Operator prüft man in der bash, ob zwei Strings gleich sind?',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'Sowohl A als auch C sind richtig'],
    correct: 3,
    explanation: 'In der bash funktionieren sowohl = als auch == zum Vergleichen von Strings. -eq ist für Integer-Zahlen.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Welches Flag prüft, ob ein Verzeichnis (Directory) existiert?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: '-d testet auf Verzeichnisse. -f = reguläre Datei, -e = jeglicher Typ, -r = lesbar.',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Wie schreibt man eine while-Schleife, die von 1 bis 5 zählt?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Bash while Syntax: Variable initialisieren, Bedingung [ $i -le 5 ], inkrementieren ((i++)).',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Was überprüft `[ -z "$VARIABLE" ]`?',
    options: [
      'Ob die Variable Null (0) ist',
      'Ob die Variable ein leerer String ist (Zero-length)',
      'Ob die Variable eine Nummer ist',
      'Ob die Variable existiert',
    ],
    correct: 1,
    explanation: '-z testet, ob die Stringlänge Null ist (also leer). -n testet, ob er nicht leer ist.',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Was enthält `$1` innerhalb eines Bash-Skripts?',
    options: [
      'Die PID des Skripts',
      'Das erste übergebene Argument (Parameter)',
      'Den Namen des Skripts',
      'Die Gesamtanzahl der Parameter',
    ],
    correct: 1,
    explanation: '$1 ist das erste Positionsparameter-Argument. $0 = Skriptname, $# = Anzahl der Parameter, $@ = Alle Parameter.',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche Spezialvariable enthält den Exit-Code des ZULETZT ausgeführten Befehls?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '$? liefert den Exit-Code des letzten Kommandos. 0 bedeutet Erfolg, ungleich 0 bedeutet Fehler.',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Hauptunterschied zwischen `$@` und `$*`?',
    options: [
      'Es gibt keinen, sie sind vollkommen identisch',
      '$@ bewahrt alle Argumente als separate Wörter, $* fasst sie als einen einzigen String zusammen',
      '$* bewahrt Argumente separat, $@ fasst sie zusammen',
      '$@ enthält nur numerische Argumente',
    ],
    correct: 1,
    explanation: 'Innerhalb von Double-Quotes: "$@" → bewahrt Leerzeichen in einzelnen Parametern optimal. "$*" → alles verschmilzt zu einem String.',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Wie erzwingen Sie, dass das Skript einen Return-Fehlercode (exit 1) ausgibt, falls ihm KEINE Argumente mitgegeben wurden?',
    options: [
      'if [ $# -eq 0 ]; then echo "Error"; fi',
      'if [ $# -eq 0 ]; then echo "Error" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'Best Practice: Schreibe die Fehlermeldung nach stderr (>&2) und verlasse das Skript mit "exit 1".',
  },
]
