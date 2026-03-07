// LPIC-1 102 Quiz Pool — German — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_de = [
  // ─── 105.1 Anpassung und Verwendung der Shell-Umgebung (10 Fragen) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welche Datei wird ausgeführt, wenn ein Benutzer eine Bash-Login-Shell schließt?',
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: '~/.bash_logout wird speziell für Aufräumarbeiten beim Beenden einer Login-Shell verwendet.'
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welches Verzeichnis enthält Standardkonfigurationsdateien, die beim Erstellen eines neuen Benutzerkontos in dessen Home-Verzeichnis kopiert werden?',
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: 'Das Verzeichnis /etc/skel (skeleton) speichert standardmäßig versteckte Dateien für neue Benutzer.'
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie macht man eine Variable "MYVAR" für Kindprozesse der aktuellen Shell zugänglich?',
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: 'Der Befehl "export" macht eine Shell-Variable zu einer Umgebungsvariable.'
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welche Datei sollte bearbeitet werden, um Aliase für alle Benutzer in einer Bash-Shell zu definieren?',
    options: ['~/.bashrc', '/etc/bashrc oder /etc/bash.bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: 'Systemweite Aliase und Funktionen sollten normalerweise in /etc/bashrc oder /etc/bash.bashrc platziert werden.',
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Zweck des Befehls `source` (oder des Operators `.`)?',
    options: [
      'Ein Shell-Skript kompilieren',
      'Ein Skript in der aktuellen Shell-Umgebung ausführen, ohne eine Subshell zu starten',
      'Eine Datei aus dem Internet herunterladen',
      'Die Shell auf ihren Standardzustand zurücksetzen'
    ],
    correct: 1,
    explanation: '`source` (oder `.`) führt eine Datei im aktuellen Shell-Kontext aus, wodurch Variablen und Funktionen geändert werden können.',
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welche Variable enthält den Suchpfad für den Befehl `unalias`?',
    options: ['PATH', 'ALIAS_PATH', 'Die Shell verwendet keinen Pfad für Aliase', 'BASH_ALIASES'],
    correct: 2,
    explanation: 'Aliase werden im Speicher des aktuellen Shell-Prozesses gespeichert; es gibt keinen diskbasierten Suchpfad.',
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt alle aktuell definierten Umgebungsvariablen an?',
    options: ['set', 'env', 'export -p', 'Sowohl env als auch export -p'],
    correct: 3,
    explanation: '`env` zeigt exportierte Variablen an, und `export -p` listet sie in einem Format auf, das für die Shell-Eingabe gedacht ist.',
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Welche Datei wird von einer Bash-Login-Shell zuerst für die systemweite Konfiguration gelesen?',
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: 'Eine Login-Shell liest zuerst /etc/profile, die dann normalerweise andere Dateien in /etc/profile.d/ einbindet.',
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie entfernt man eine Umgebungsvariable namens "TEMP_DATA" für den Rest der Sitzung?',
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: '`unset` entfernt eine Variable oder Funktion aus der aktuellen Shell-Umgebung.',
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welches Bash-Feature ermöglicht die Verwendung von `ll` anstelle von `ls -l`?',
    options: ['Funktion', 'Link', 'Alias', 'Umleitung'],
    correct: 2,
    explanation: 'Ein Alias bietet eine Kurzschreibweise, um längere Befehle mit spezifischen Flags auszuführen.',
  },

  // ─── 105.2 Einfache Skripte schreiben oder anpassen (10 Fragen) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welche Zeichenfolge in einem Bash-Skript gibt den Interpreter an, der zum Ausführen des Skripts verwendet werden soll?',
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: 'Der Shebang (#!) am Anfang der ersten Zeile definiert den Skript-Interpreter.'
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher logische Operator führt den zweiten Befehl nur aus, wenn der erste Befehl fehlschlägt (einen Exit-Code ungleich Null zurückgibt)?',
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: 'Der OR-Operator (||) wird für die Fehlerbehandlung oder bedingte Ausführung bei Fehlern verwendet.'
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie weist man die Ausgabe des Befehls "whoami" korrekt einer Variablen namens "USER" zu?',
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: '$(Befehl) führt in modernen Shells eine Befehlssubstitution durch.'
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welche Variable enthält die Anzahl der an ein Shell-Skript übergebenen Argumente?',
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: '$# speichert die Anzahl der Positionsparameter.'
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der Exit-Code eines Befehls, der erfolgreich abgeschlossen wurde?',
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: 'In Unix/Linux bedeutet 0 Erfolg; jeder Wert ungleich Null zeigt einen Fehler an.'
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie prüft man in einem Shell-Skript, ob eine Datei namens "data.txt" existiert?',
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      'Sowohl [ -e data.txt ] als auch [ -f data.txt ] sind gültig'
    ],
    correct: 3,
    explanation: '"-e" prüft auf Existenz; "-f" prüft spezifisch, ob es eine reguläre Datei ist.',
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Was repräsentiert die Variable `$?` in Shell-Skripten?',
    options: [
      'Die PID der aktuellen Shell',
      'Den Exit-Status des zuletzt ausgeführten Befehls',
      'Das erste Argument des Skripts',
      'Eine von der Shell generierte Zufallszahl'
    ],
    correct: 1,
    explanation: '$? erfasst den Rückgabecode des letzten Vordergrundbefehls.',
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welche Schleifenstruktur würden Sie verwenden, um über eine Liste von Dateinamen zu iterieren?',
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: 'Die `for`-Schleife ist ideal zum Iterieren über eine definierte Liste oder Menge von Elementen.',
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie greift man in einem Skript auf das zweite übergebene Argument zu?',
    options: ['$2', '${2}', 'Sowohl $2 als auch ${2}', '$ARG2'],
    correct: 2,
    explanation: '$2 oder ${2} bezieht sich auf den zweiten Positionsparameter.',
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Was ist die korrekte Syntax für eine einfache `if`-Bedingung in Bash?',
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: 'Ein Bash-`if` benötigt das Schlüsselwort `then` (oft mit Semikolon auf derselben Zeile) und muss mit `fi` enden.',
  },
];
