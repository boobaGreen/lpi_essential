export const topic3Quizzes = [
  {
    "lessonId": "3-1",
    "question": "Welcher Komprimierungsalgorithmus erzeugt im Allgemeinen die kleinsten Dateien?",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "komprimiert"
    ],
    "correct": 2,
    "explanation": "xz bietet das beste Komprimierungsverhältnis, ist aber auch das langsamste."
  },
  {
    "lessonId": "3-1",
    "question": "Welcher Befehl erstellt ein komprimiertes TAR-Archiv?",
    "options": [
      "tar -czf archive.tar.gz dir/",
      "tar -xzf archive.tar.gz dir/",
      "gzip-Verzeichnis/",
      "zip -r archive.tar.gz dir/"
    ],
    "correct": 0,
    "explanation": "tar -czf: c=erstellen, z=gzip, f=Datei."
  },
  {
    "lessonId": "3-1",
    "question": "Welche Erweiterung weist auf eine mit bzip2 komprimierte Datei hin?",
    "options": [
      ".gz",
      ".bz2",
      ".xz",
      ".Reißverschluss"
    ],
    "correct": 1,
    "explanation": "bzip2 erzeugt Dateien mit der Erweiterung .bz2."
  },
  {
    "lessonId": "3-1",
    "question": "Das Flag -t in tar wird verwendet, um:",
    "options": [
      "Archiv erstellen",
      "Archiv extrahieren",
      "Inhalte auflisten",
      "Testen Sie die Integrität"
    ],
    "correct": 2,
    "explanation": "tar -tf archive.tar.gz listet den Inhalt auf, ohne ihn zu extrahieren."
  },
  {
    "lessonId": "3-1",
    "question": "tar -xjf extrahiert ein komprimiertes Archiv mit:",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "lz4"
    ],
    "correct": 1,
    "explanation": "-j gibt bzip2 an. -z gibt gzip an. -J gibt xz an."
  },
  {
    "lessonId": "3-1",
    "question": "Welches Tar-Flag zeigt die XZ-Komprimierung an?",
    "options": [
      "-z",
      "-J",
      "-J",
      "-X"
    ],
    "correct": 2,
    "explanation": "-J gibt xz an. -z gibt gzip an. -j gibt bzip2 an."
  },
  {
    "lessonId": "3-1",
    "question": "Der Befehl „gunzip“ entspricht:",
    "options": [
      "gzip -d",
      "gzip -c",
      "gzip -r",
      "gzip -l"
    ],
    "correct": 0,
    "explanation": "gunzip und gzip -d entpacken eine .gz-Datei."
  },
  {
    "lessonId": "3-1",
    "question": "gzip komprimiert eine Datei und:",
    "options": [
      "Behält das Original",
      "Ersetzt das Original durch .gz",
      "Machen Sie eine Kopie",
      "Verschiebt es nach /tmp"
    ],
    "correct": 1,
    "explanation": "gzip ersetzt die Originaldatei durch die .gz-Version. Verwenden Sie -k, um das Original beizubehalten."
  },
  {
    "lessonId": "3-1",
    "question": "Welches ist schneller in der Komprimierung?",
    "options": [
      "xz",
      "bzip2",
      "gzip",
      "lzma"
    ],
    "correct": 2,
    "explanation": "gzip ist am schnellsten, komprimiert jedoch weniger. xz ist am langsamsten, komprimiert aber am meisten."
  },
  {
    "lessonId": "3-1",
    "question": "tar ohne Komprimierung erzeugt eine Datei:",
    "options": [
      ".tar.gz",
      ".Teer",
      ".gz",
      ".Reißverschluss"
    ],
    "correct": 1,
    "explanation": "tar ohne Komprimierungsflags (-z/-j/-J) erstellt ein einfaches unkomprimiertes .tar-Archiv."
  },
  {
    "lessonId": "3-2",
    "question": "Welcher Operator leitet stdout um und überschreibt die Datei?",
    "options": [
      ">>",
      ">",
      "<",
      "|"
    ],
    "correct": 1,
    "explanation": "> leitet stdout in eine Datei um und überschreibt diese. >> hängt."
  },
  {
    "lessonId": "3-2",
    "question": "Welcher Operator leitet stderr um?",
    "options": [
      "1>",
      "2>",
      "0>",
      "3>"
    ],
    "correct": 1,
    "explanation": "2> leitet stderr um (Dateideskriptor 2)."
  },
  {
    "lessonId": "3-2",
    "question": "Was macht die Pipe (|)?",
    "options": [
      "Schreibt in eine Datei",
      "Verbindet die Standardausgabe eines Befehls mit der Standardausgabe des nächsten",
      "Führt zwei Befehle parallel aus",
      "Erstellen Sie einen symbolischen Link"
    ],
    "correct": 1,
    "explanation": "Die Pipe (|) übergibt die Ausgabe eines Befehls als Eingabe an den nächsten Befehl."
  },
  {
    "lessonId": "3-2",
    "question": ">> im Gegensatz zu > tut:",
    "options": [
      "Überschreibt",
      "Wird an die Datei angehängt",
      "Liest aus einer Datei",
      "Löschen Sie die Datei"
    ],
    "correct": 1,
    "explanation": ">> wird an das Ende der Datei angehängt, ohne den vorhandenen Inhalt zu überschreiben."
  },
  {
    "lessonId": "3-2",
    "question": "/dev/null ist:",
    "options": [
      "Eine virtuelle Festplatte",
      "Ein „Schwarzes Loch“, das alles wegwirft",
      "Eine Protokolldatei",
      "Ein temporäres Verzeichnis"
    ],
    "correct": 1,
    "explanation": "/dev/null verwirft alle geschriebenen Daten. Nützlich, um unerwünschte Ausgaben zu eliminieren."
  },
  {
    "lessonId": "3-2",
    "question": "< Weiterleitungen:",
    "options": [
      "stdin aus einer Datei",
      "stdout in eine Datei",
      "stderr in eine Datei",
      "Niemand"
    ],
    "correct": 0,
    "explanation": "< stdin umleiten: Der Befehl liest Eingaben aus der angegebenen Datei."
  },
  {
    "lessonId": "3-2",
    "question": "Der Befehl „tee“ führt Folgendes aus:",
    "options": [
      "Liest aus zwei Dateien",
      "Schreibt Standardausgabe sowohl auf den Bildschirm als auch in eine Datei",
      "Teilt eine Datei in zwei Teile",
      "Führt zwei Dateien zusammen"
    ],
    "correct": 1,
    "explanation": "tee ist ein „T-Splitter“: Er zeigt die Ausgabe auf dem Bildschirm an und speichert sie gleichzeitig in einer Datei."
  },
  {
    "lessonId": "3-2",
    "question": "&> Weiterleitungen:",
    "options": [
      "Nur Stdout",
      "Nur Standard",
      "Sowohl stdout als auch stderr",
      "Der Hintergrund"
    ],
    "correct": 2,
    "explanation": "&> leitet sowohl stdout (1) als auch stderr (2) in dieselbe Datei um."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 && cmd2 führt cmd2 nur aus, wenn:",
    "options": [
      "cmd1 schlägt fehl",
      "cmd1 ist erfolgreich (Exit 0)",
      "Stets",
      "Niemals"
    ],
    "correct": 1,
    "explanation": "&& führt den zweiten Befehl nur aus, wenn der erste Exit-Code 0 (Erfolg) hat."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 || cmd2 führt cmd2 nur aus, wenn:",
    "options": [
      "cmd1 ist erfolgreich",
      "cmd1 schlägt fehl",
      "Stets",
      "cmd1 existiert nicht"
    ],
    "correct": 1,
    "explanation": "|| führt den zweiten Befehl nur aus, wenn der erste fehlschlägt (Exit-Code ≠ 0)."
  },
  {
    "lessonId": "3-2",
    "question": "xargs konvertiert:",
    "options": [
      "Dateien in Verzeichnissen",
      "stdin in Befehlszeilenargumenten",
      "Text in Zahlen",
      "Skriptbefehle"
    ],
    "correct": 1,
    "explanation": "xargs liest aus stdin und erstellt Argumente für einen anderen Befehl."
  },
  {
    "lessonId": "3-2",
    "question": "Dateideskriptor 0 steht für:",
    "options": [
      "stdout",
      "stderr",
      "stdin",
      "Systemdateien"
    ],
    "correct": 2,
    "explanation": "0 = stdin (Tastatur), 1 = stdout (Bildschirm), 2 = stderr (Fehler)."
  },
  {
    "lessonId": "3-3",
    "question": "Welche grep-Option führt eine Suche ohne Berücksichtigung der Groß-/Kleinschreibung durch?",
    "options": [
      "-R",
      "-Die",
      "-v",
      "-C"
    ],
    "correct": 1,
    "explanation": "grep -i ignoriert die Groß-/Kleinschreibung."
  },
  {
    "lessonId": "3-3",
    "question": "Was bedeutet in der Regex der Platzhalter „.“ bedeuten? ?",
    "options": [
      "Ende der Zeile",
      "Ein wörtlicher Punkt",
      "Ein beliebiges einzelnes Zeichen",
      "Anfang der Linie"
    ],
    "correct": 2,
    "explanation": "Der Punkt (.) in regulären Ausdrücken entspricht jedem einzelnen Zeichen."
  },
  {
    "lessonId": "3-3",
    "question": "grep -v zeigt:",
    "options": [
      "Nur die erste Zeile",
      "Die Linien, die NICHT mit dem Muster übereinstimmen",
      "Die Anzahl der Vorkommen",
      "Binärdateien"
    ],
    "correct": 1,
    "explanation": "-v (invertieren) zeigt Linien an, die nicht dem Muster entsprechen."
  },
  {
    "lessonId": "3-3",
    "question": "Im regulären Ausdruck bedeutet ^:",
    "options": [
      "Ende der Zeile",
      "Jeder Charakter",
      "Anfang der Linie",
      "Verweigerung"
    ],
    "correct": 2,
    "explanation": "^ (Caret) gibt den Zeilenanfang in einem regulären Ausdruck an."
  },
  {
    "lessonId": "3-3",
    "question": "$ in einem regulären Ausdruck bedeutet:",
    "options": [
      "Variable",
      "Ende der Zeile",
      "Anfang der Linie",
      "Buchstäblicher Dollar"
    ],
    "correct": 1,
    "explanation": "$ gibt in regulären Ausdrücken das Ende der Zeile an."
  },
  {
    "lessonId": "3-3",
    "question": "cut -d: -f1 /etc/passwd extrahiert:",
    "options": [
      "Die gesamte Datei",
      "Das erste Feld (Benutzername)",
      "Die letzte Zeile",
      "Die erste Zeile"
    ],
    "correct": 1,
    "explanation": "-d: Verwenden Sie: als Trennzeichen, -f1 wählt das erste Feld aus."
  },
  {
    "lessonId": "3-3",
    "question": "Der Befehl „sort -n“ sortiert:",
    "options": [
      "Alphabetisch",
      "Numerisch",
      "Nach Datum",
      "Zufällig"
    ],
    "correct": 1,
    "explanation": "-n sortiert nach numerischem Wert, nicht alphabetisch."
  },
  {
    "lessonId": "3-3",
    "question": "uniq funktioniert nur korrekt auf:",
    "options": [
      "Große Dateien",
      "Zeilen bereits sortiert",
      "Binärdateien",
      "Jede Datei"
    ],
    "correct": 1,
    "explanation": "uniq entfernt Duplikate nur, wenn sie benachbart sind. Verwenden Sie Sortieren vor Uniq."
  },
  {
    "lessonId": "3-3",
    "question": "wc -l zählt:",
    "options": [
      "Die Worte",
      "Die Charaktere",
      "Die Linien",
      "Die Dateien"
    ],
    "correct": 2,
    "explanation": "wc -l zählt Zeilen. -w zählt Wörter, -c zählt Bytes."
  },
  {
    "lessonId": "3-3",
    "question": "head -n 5 zeigt:",
    "options": [
      "Die letzten 5 Zeilen",
      "Die ersten 5 Zeilen",
      "5 zufällige Zeilen",
      "Alle 5 Zeilen"
    ],
    "correct": 1,
    "explanation": "head -n 5 zeigt die ersten 5 Zeilen einer Datei oder Eingabe an."
  },
  {
    "lessonId": "3-3",
    "question": "grep -r Suche:",
    "options": [
      "Nur in der angegebenen Datei",
      "Rekursiv in Verzeichnissen",
      "Nur in TXT-Dateien",
      "In Variablen"
    ],
    "correct": 1,
    "explanation": "-r (rekursiv) sucht in allen Dateien innerhalb von Verzeichnissen nach dem Muster."
  },
  {
    "lessonId": "3-3",
    "question": "sed ist Herausgeber von:",
    "options": [
      "Binärdateien",
      "Textstream (nicht interaktiv)",
      "Bilder",
      "Datenbanken"
    ],
    "correct": 1,
    "explanation": "sed (Stream EDitor) bearbeitet Text nicht interaktiv."
  },
  {
    "lessonId": "3-4",
    "question": "Welche Zeile sollte in einem Bash-Skript an erster Stelle stehen?",
    "options": [
      "#!/bin/bash",
      "#/bin/bash",
      "//bin/bash",
      "!#/bin/bash"
    ],
    "correct": 0,
    "explanation": "#!/bin/bash ist der Knaller: Es teilt dem System mit, welchen Interpreter es verwenden soll."
  },
  {
    "lessonId": "3-4",
    "question": "Wie greifen Sie auf das erste Argument zu, das an ein Skript übergeben wird?",
    "options": [
      "0 $",
      "1 $",
      "$#",
      "$@"
    ],
    "correct": 1,
    "explanation": "$1 ist das erste Argument. $0 ist der Name des Skripts. $# ist die Anzahl der Argumente."
  },
  {
    "lessonId": "3-4",
    "question": "$# enthält:",
    "options": [
      "Der Name des Skripts",
      "Alle Themen",
      "Die Anzahl der Themen",
      "Der Exit-Code"
    ],
    "correct": 2,
    "explanation": "$# enthält die Anzahl der an das Skript übergebenen Argumente."
  },
  {
    "lessonId": "3-4",
    "question": "$0 in einem Skript enthält:",
    "options": [
      "Das erste Thema",
      "Der Name des Skripts",
      "Der Benutzer",
      "Die PID"
    ],
    "correct": 1,
    "explanation": "$0 ist der Name, unter dem das Skript aufgerufen wurde."
  },
  {
    "lessonId": "3-4",
    "question": "Ausgang 0 bedeutet:",
    "options": [
      "Fehler",
      "Erfolg",
      "Neustart",
      "Zwangskündigung"
    ],
    "correct": 1,
    "explanation": "Exit 0 zeigt einen erfolgreichen Exit an. Andere Werte als 0 weisen auf einen Fehler hin."
  },
  {
    "lessonId": "3-4",
    "question": "Um ein Skript ausführbar zu machen:",
    "options": [
      "mv script.sh /bin",
      "chmod +x script.sh",
      "Führen Sie script.sh aus",
      "exec script.sh"
    ],
    "correct": 1,
    "explanation": "chmod +x fügt dem Skript die Ausführungsberechtigung hinzu."
  },
  {
    "lessonId": "3-4",
    "question": "In einer if-Bash lautet die Syntax:",
    "options": [
      "if (cond) {}",
      "if [ cond ]; dann ... fi",
      "if cond: ... Ende",
      "if {cond} do ... fertig"
    ],
    "correct": 1,
    "explanation": "Die korrekte Syntax lautet: if [ Bedingung ]; dann ... fi"
  },
  {
    "lessonId": "3-4",
    "question": "Die for-Schleife in Bash:",
    "options": [
      "für mich in der Liste; tun ... erledigt",
      "für (i in Liste) {}",
      "Für jedes Ende meiner Liste",
      "für i = Liste; Ende"
    ],
    "correct": 0,
    "explanation": "für Variable in Liste; Ich gebe Befehle; Erledigt"
  },
  {
    "lessonId": "3-4",
    "question": "$@ steht für:",
    "options": [
      "Alle Argumente als separate Zeichenfolgen",
      "Die Anzahl der Themen",
      "Die PID",
      "Der Exit-Code"
    ],
    "correct": 0,
    "explanation": "$@ wird auf alle übergebenen Argumente erweitert, jedes als separate Zeichenfolge."
  },
  {
    "lessonId": "3-4",
    "question": "Der [ -f file ]-Test prüft, ob:",
    "options": [
      "Die Datei ist ein Verzeichnis",
      "Die Datei existiert und ist eine reguläre Datei",
      "Die Datei ist leer",
      "Die Datei ist ausführbar"
    ],
    "correct": 1,
    "explanation": "-f prüft, ob der Pfad existiert und eine reguläre Datei ist (kein Verzeichnis/Link)."
  },
  {
    "lessonId": "3-4",
    "question": "Welcher Test prüft, ob ein Verzeichnis existiert?",
    "options": [
      "[ -f dir ]",
      "[ -d dir ]",
      "[ -e dir ]",
      "[ -r dir ]"
    ],
    "correct": 1,
    "explanation": "-d prüft, ob der Pfad existiert und ein Verzeichnis ist."
  },
  {
    "lessonId": "3-4",
    "question": "# in einem Bash-Skript bedeutet:",
    "options": [
      "Ein Root-Befehl",
      "Ein Kommentar",
      "Eine Richtlinie",
      "Ein Fehler"
    ],
    "correct": 1,
    "explanation": "# startet einen Kommentar – alles, was danach folgt, wird ignoriert (außer dem Kram in der ersten Zeile)."
  }
];
