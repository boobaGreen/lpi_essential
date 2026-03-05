export const topic3Extended = {
  "3-1": {
    "title": "Archivierung und Komprimierung",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗜️",
        "text": "Komprimierung vs. Speicherung"
      },
      {
        "type": "paragraph",
        "text": "Archivierung und Komprimierung sind zwei unterschiedliche Vorgänge, die häufig zusammen verwendet werden. Archivieren bedeutet, mehrere Dateien zu einer zusammenzufassen. Komprimieren bedeutet, die Größe der Daten zu reduzieren. tar-Archiv, gzip/bzip2/xz-Komprimierung."
      },
      {
        "type": "comparison",
        "left": {
          "title": "📦 Lagerung (Teer)",
          "items": [
            "Gruppieren Sie mehrere Dateien/Verzeichnisse zu einer",
            "Komprimiert NICHT (Größe ≈ gleich)",
            "Behalten Sie Berechtigungen, Zeitstempel und Struktur bei",
            "Erstellt .tar-Dateien"
          ]
        },
        "right": {
          "title": "🗜️ Komprimierung (gzip, bzip2, xz)",
          "items": [
            "Reduziert die Größe EINER Datei",
            "Mathematische Algorithmen zur Beseitigung von Redundanz",
            "Je stärker Sie komprimieren, desto langsamer ist es",
            "Erzeugt .gz, .bz2, .xz"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Vergleich von Algorithmen"
      },
      {
        "type": "table",
        "headers": [
          "Algorithmus",
          "Verlängerung",
          "Geschwindigkeit",
          "Kompression",
          "Befehl",
          "Dekompression"
        ],
        "rows": [
          [
            "gzip",
            ".gz",
            "⚡ Schnell",
            "⭐⭐⭐",
            "gzip-Dateien",
            "gunzip-Datei.gz"
          ],
          [
            "bzip2",
            ".bz2",
            "🐌 Mittel",
            "⭐⭐⭐⭐",
            "bzip2-Dateien",
            "bunzip2-Datei.bz2"
          ],
          [
            "xz",
            ".xz",
            "🐢 Langsam",
            "⭐⭐⭐⭐⭐",
            "xz-Dateien",
            "unxz-Datei.xz"
          ],
          [
            "Reißverschluss",
            ".Reißverschluss",
            "⚡ Schnell",
            "⭐⭐⭐",
            "zip arch.zip-Datei",
            "entpacken Sie arch.zip"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Wann was verwenden?",
        "content": "gzip für den täglichen Gebrauch (schnell und gut). xz zum Verteilen von Software (maximale Komprimierung). bzip2 wird zugunsten von xz nicht mehr verwendet."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Teerflaggen – Das Rezept"
      },
      {
        "type": "table",
        "headers": [
          "Flaggen",
          "Bedeutung",
          "Gedächtnisstütze"
        ],
        "rows": [
          [
            "-C",
            "Erstellen (Archiv erstellen)",
            "C = Erstellen"
          ],
          [
            "-X",
            "Extrakt",
            "X = eXtract"
          ],
          [
            "-T",
            "Liste (Inhalt anzeigen)",
            "T = listT"
          ],
          [
            "-F",
            "Datei (Name angeben)",
            "F = Datei (immer zuletzt!)"
          ],
          [
            "-z",
            "gzip",
            "Z steht für Zip"
          ],
          [
            "-J",
            "bzip2",
            "J steht für bJip2"
          ],
          [
            "-J",
            "xz",
            "Großbuchstabe J = XZ (leistungsstärker)"
          ],
          [
            "-v",
            "Ausführlich (Fortschritt anzeigen)",
            "V = Ausführlich"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Praxisbeispiele mit Teer",
        "prompt": "# Erstellen Sie ein gzip-komprimiertes Archiv\n$ tar -czf backup.tar.gz /home/user/docs/\n\n# Archiv extrahieren\n$ tar -xzf backup.tar.gz\n\n# In ein bestimmtes Verzeichnis extrahieren\n$ tar -xzf backup.tar.gz -C /tmp/\n\n# Inhalte auflisten, ohne sie zu extrahieren\n$ tar -tzf backup.tar.gz\n\n# Erstellen mit xz (maximale Komprimierung)\n$ tar -cJf archive.tar.xz Verzeichnis/",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Bei der LPI-Prüfung werden die Tar-Flags zum Erstellen (-czf) und Extrahieren (-xzf) abgefragt und der Unterschied zwischen -z (gzip), -j (bzip2) und -J (xz) muss bekannt sein. Denken Sie daran: gzip wird standardmäßig am häufigsten verwendet."
      }
    ]
  },
  "3-2": {
    "title": "E/A- und Pipe-Umleitung",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "0️⃣",
        "text": "Die drei Standard-Dateideskriptoren"
      },
      {
        "type": "paragraph",
        "text": "Jeder Linux-Prozess verfügt standardmäßig über drei offene E/A-Kanäle. Das Verständnis dieser Kanäle ist für Umleitung und Pipes von entscheidender Bedeutung."
      },
      {
        "type": "diagram",
        "title": "Standard-E/A-Fluss",
        "boxes": [
          {
            "label": "stdin (0)",
            "color": "#10b981",
            "children": [
              "Tastiera (default)",
              "File (<)",
              "Pipe output"
            ]
          },
          {
            "label": "stdout (1)",
            "color": "#3b82f6",
            "children": [
              "Schermo (default)",
              "File (>)",
              "Pipe input"
            ]
          },
          {
            "label": "stderr (2)",
            "color": "#ef4444",
            "children": [
              "Schermo (default)",
              "File (2>)",
              "/dev/null"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "➡️",
        "text": "Umleitungsoperatoren"
      },
      {
        "type": "table",
        "headers": [
          "Operator",
          "Funktion",
          "Beispiel"
        ],
        "rows": [
          [
            "> Dateien",
            "stdout → Datei (überschreiben)",
            "ls > list.txt"
          ],
          [
            ">> Dateien",
            "stdout → Datei (anhängen)",
            "echo „neue Zeile“ >> log.txt"
          ],
          [
            "< Datei",
            "Datei → stdin",
            "sortieren < zahlen.txt"
          ],
          [
            "2> Dateien",
            "stderr → Datei",
            "find / -name „x“ 2>errors.txt"
          ],
          [
            "2>&1",
            "stderr → gleiche Ausgabe wie stdout",
            "cmd > all.log 2>&1"
          ],
          [
            "&> Dateien",
            "stdout + stderr → Datei",
            "cmd &> Ausgabe.log"
          ],
          [
            "/dev/null",
            "„Schwarzes Loch“ – alles wegwerfen",
            "cmd 2>/dev/null"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Häufige Umleitungsszenarien",
        "prompt": "# Befehlsausgabe speichern\n$ ls -la /etc > list_etc.txt\n\n# Fehler ignorieren\n$ find / -name \"config\" 2>/dev/null\n\n# Alles speichern (stdout + stderr)\n$ apt update &> update.log\n\n# Hängen Sie sich an einen Baumstamm\n$ echo „$(date): Sicherung abgeschlossen“ >> /var/log/backup.log",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Pfeife – Die Kraft der Komposition"
      },
      {
        "type": "paragraph",
        "text": "Die Pipe (|) ist das mächtigste Konzept der Unix-Befehlszeile. Es verbindet die Standardausgabe eines Befehls mit der Standardausgabe des nächsten, sodass Sie aus einfachen Befehlen komplexe Pipelines erstellen können."
      },
      {
        "type": "code",
        "title": "Pipeline: von einfach bis komplex",
        "prompt": "# Zählen Sie, wie viele Dateien sich in /etc befinden\n$ls /etc | wc -l\n\n# Finden Sie die 5 Prozesse, die den meisten RAM verbrauchen\n$ps aux | sort -k4 -rn | Kopf -5\n\n# Zählen Sie, wie oft „Fehler“ in den Protokollen erscheint\n$ cat /var/log/syslog | grep -i Fehler | wc -l\n\n# Extrahieren Sie eindeutige Benutzernamen, die sich angemeldet haben\n$last | awk '{print $1}' | sortieren | uniq -c | sortieren -rn",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Logische Operatoren zwischen Befehlen"
      },
      {
        "type": "table",
        "headers": [
          "Operator",
          "Bedeutung",
          "Beispiel"
        ],
        "rows": [
          [
            "cmd1 && cmd2",
            "Führen Sie cmd2 NUR aus, wenn cmd1 erfolgreich ist (Exit 0).",
            "MKDIR-Verzeichnis && CD-Verzeichnis"
          ],
          [
            "cmd1 || cmd2",
            "Führen Sie cmd2 NUR aus, wenn cmd1 fehlschlägt (Exit ≠ 0).",
            "Ping-Host || echo „Offline“"
          ],
          [
            "cmd1 ; cmd2",
            "Führen Sie cmd2 IMMER aus, unabhängig davon",
            "Datum ; Whoami"
          ],
          [
            "cmd &",
            "Führen Sie cmd im Hintergrund aus",
            "Schlaf 100 &"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Szenario: Automatisieren eines Backups",
        "text": "Sie sind Systemadministrator und müssen täglich ein Backup durchführen. Mit der Pipeline: tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo \"Backup OK\" >> /var/log/backup.log || echo „Backup ERROR“ >> /var/log/backup.log – Archiv erstellen, Ergebnis im Protokoll speichern. Wenn dies fehlschlägt, protokollieren Sie den Fehler."
      }
    ]
  },
  "3-3": {
    "title": "Grep und reguläre Ausdrücke",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔎",
        "text": "grep – Das Schweizer Taschenmesser des Textes"
      },
      {
        "type": "table",
        "headers": [
          "Option",
          "Funktion",
          "Beispiel"
        ],
        "rows": [
          [
            "-Die",
            "Groß- und Kleinschreibung wird nicht beachtet",
            "grep -i „error“ log.txt"
          ],
          [
            "-v",
            "Reverse Match (Zeilen, die NICHT übereinstimmen)",
            "grep -v \"^#\" config.txt"
          ],
          [
            "-r / -R",
            "Verzeichnisse rekursiv durchsuchen",
            "grep -r \"TODO\" src/"
          ],
          [
            "-N",
            "Zeilennummer anzeigen",
            "grep -n \"main\" program.c"
          ],
          [
            "-C",
            "Zählen Sie die gefundenen Zeilen",
            "grep -c „Fehler“ Syslog"
          ],
          [
            "-Die",
            "Nur Dateinamen anzeigen",
            "grep -rl \"Passwort\" /etc/"
          ],
          [
            "-w",
            "Passen Sie nur ganze Wörter an",
            "grep -w „ist“ eine Datei (nicht „dies“)"
          ],
          [
            "-UND",
            "Erweiterter regulärer Ausdruck (egrep)",
            "grep -E „err|warn“ Protokoll"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌟",
        "text": "Regex-Metazeichen"
      },
      {
        "type": "table",
        "headers": [
          "Metazeichen",
          "Bedeutung",
          "Beispiel",
          "Übereinstimmen"
        ],
        "rows": [
          [
            ".",
            "Ein beliebiges einzelnes Zeichen",
            "c.t",
            "Katze, Schnitt, Kinderbett"
          ],
          [
            "^",
            "Anfang der Linie",
            "^Fehler",
            "Fehler am Zeilenanfang"
          ],
          [
            "$",
            "Ende der Zeile",
            "Ende$",
            "das Ende"
          ],
          [
            "*",
            "Null oder mehr als der vorherige",
            "ABC",
            "ac, abc, abc"
          ],
          [
            "[ ]",
            "Einer der Charaktere im Set",
            "[aeiou]",
            "Einzelner Vokal"
          ],
          [
            "[^]",
            "Alle außer den Zeichen im Satz",
            "[^0-9]",
            "Keine Zahl"
          ],
          [
            "\\",
            "Wildcard-Escape",
            "\\.",
            "Ein wörtlicher Punkt"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Praktische Beispiele mit Regex",
        "prompt": "# Zeilen beginnend mit # (Kommentare)\n$ grep \"^#\" /etc/ssh/sshd_config\n\n# Leere Zeilen\n$ grep \"^$\" file.txt\n\n# IP-Adressen (einfaches Muster)\n$ grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" access.log\n\n# KEINE Leerzeilen und KEINE Kommentare\n$ grep -v \"^#\" config | grep -v \"^$\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "✂️",
        "text": "Textmanipulation: das Power Toolkit"
      },
      {
        "type": "table",
        "headers": [
          "Befehl",
          "Funktion",
          "Schlüsselbeispiel"
        ],
        "rows": [
          [
            "schneiden",
            "Spalten/Felder extrahieren",
            "schneiden -d: -f1 /etc/passwd"
          ],
          [
            "Sortieren",
            "Sortieren Sie die Zeilen",
            "sort -n (numerisch) -r (umgekehrt)"
          ],
          [
            "einzigartig",
            "Entfernen Sie benachbarte Duplikate",
            "Datei sortieren | uniq -c"
          ],
          [
            "Toilette",
            "Zählen Sie Zeilen, Wörter, Bytes",
            "wc -l (Zeilen) -w (Wörter)"
          ],
          [
            "Kopf",
            "Erste N Zeilen",
            "head -n 20 Dateien"
          ],
          [
            "Schwanz",
            "Letzte N Zeilen",
            "tail -f syslog (folgen)"
          ],
          [
            "tr",
            "Übersetzt Zeichen",
            "tr 'a-z' 'A-Z' (Großbuchstaben)"
          ],
          [
            "sed",
            "Stream-Editor",
            "sed 's/old/new/g'-Datei"
          ],
          [
            "awk",
            "Prozessspalten",
            "awk '{print $1, $3}' Datei"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die LPI-Prüfung testet grep mit -i, -v, -r und den grundlegenden regulären Ausdrücken (^, ​​$, ., *). Sie kennen auch Schneiden, Sortieren, WC und den Unterschied zwischen Kopf und Schwanz."
      }
    ]
  },
  "3-4": {
    "title": "Bash-Skripte",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Anatomie eines Bash-Skripts"
      },
      {
        "type": "code",
        "title": "Grundstruktur eines Skripts",
        "prompt": "#!/bin/bash\n# Dies ist ein Kommentar\n# Der Shebang (erste Zeile) teilt dem System mit, welchen Interpreter es verwenden soll\n\n# Variablen\nNAME=\"LinuxQuest\"\nVERSION=2.0\n\n# Drucken\necho „Willkommen bei $NAME v$VERSION!“\necho „Benutzer: $(whoami), Datum: $(date +%F)“\n\n# Exit-Code: 0 = Erfolg\nAusgang 0",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Vergessen Sie nicht chmod +x!",
        "content": "Ein Skript ist standardmäßig nicht ausführbar. Sie müssen die Ausführungsberechtigung hinzufügen: chmod +x script.sh. Führen Sie es dann mit ./script.sh aus (das ./ wird benötigt, wenn sich das aktuelle Verzeichnis nicht im PATH befindet)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📥",
        "text": "Spezielle Variablen in Skripten"
      },
      {
        "type": "table",
        "headers": [
          "Variable",
          "Inhalt",
          "Beispiel"
        ],
        "rows": [
          [
            "0 $",
            "Name des Skripts",
            "./backup.sh → backup.sh"
          ],
          [
            "1 $, 2 $, ...",
            "Positionsargumente",
            "./script.sh hallo → $1=hallo"
          ],
          [
            "$#",
            "Anzahl der Themen",
            "Wenn Sie mit 3 Argumenten aufrufen → $#=3"
          ],
          [
            "$@",
            "Alle Themen (getrennt)",
            "„$@“ = „$1“ „$2“ „$3“"
          ],
          [
            "$*",
            "Alle Themen (zusammengeführt)",
            "„$*“ = „$1 $2 $3“"
          ],
          [
            "$?",
            "Exit-Code des letzten Befehls",
            "0 = Erfolg, andere = Fehler"
          ],
          [
            "$$",
            "PID des aktuellen Skripts",
            "Nützlich für temporäre Dateien"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Bedingungen und Zyklen"
      },
      {
        "type": "code",
        "title": "Wenn-dann-sonst",
        "prompt": "#!/bin/bash\nif [ -f \"/etc/passwd\" ]; dann\n    echo „Die Datei existiert!“\nelif [ -d \"/etc\" ]; dann\n    echo „Es ist ein Verzeichnis“\nsonst\n    echo „Nicht gefunden“\nfi",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Prüfen",
          "Bedeutung",
          "Typ"
        ],
        "rows": [
          [
            "[-f Datei]",
            "Die Datei existiert und ist eine reguläre Datei",
            "Datei"
          ],
          [
            "[ -d dir ]",
            "Das Verzeichnis existiert",
            "Datei"
          ],
          [
            "[-e Pfad]",
            "Pfad existiert (beliebiger Typ)",
            "Datei"
          ],
          [
            "[-r Datei]",
            "Die Datei ist lesbar",
            "Berechtigungen"
          ],
          [
            "[-x-Datei]",
            "Die Datei ist ausführbar",
            "Berechtigungen"
          ],
          [
            "[ -z \"$var\" ]",
            "Die Zeichenfolge ist leer",
            "Zeichenfolge"
          ],
          [
            "[ \"$a\" = \"$b\" ]",
            "Gleiche Saiten",
            "Zeichenfolge"
          ],
          [
            "[ $a -eq $b ]",
            "Gleiche Zahlen",
            "Nummer"
          ],
          [
            "[ $a -lt $b ]",
            "a < b (kleiner als)",
            "Nummer"
          ],
          [
            "[ $a -gt $b ]",
            "a > b (größer als)",
            "Nummer"
          ]
        ]
      },
      {
        "type": "code",
        "title": "For- und While-Schleifen",
        "prompt": "# For-Schleife auf einer Liste\nfür Datei in *.txt; tun\n    echo „Prozess: $file“\n    wc -l \"$file\"\nerledigt\n\n# For-Schleife mit numerischem Bereich\nfor i in $(seq 1 10); tun\n    echo „Iteration $i“\nerledigt\n\n# While-Schleife\nZähler=1\nwhile [ $counter -le 5 ]; tun\n    echo „Zähler: $counter“\n    counter=$((counter + 1))\nerledigt",
        "output": ""
      },
      {
        "type": "story",
        "title": "Szenario: Automatisches Backup-Skript",
        "text": "Erstellen Sie ein Backup.sh-Skript, das: 1) prüft, ob das Backup-Verzeichnis existiert (falls -d), 2) ein tar.gz-Archiv mit Datum im Namen erstellt, 3) alte Backups zählt und sie löscht, wenn es mehr als 7 gibt (für + rm), 4) das Ergebnis protokolliert. Dies ist die Art der Automatisierung, die jeder Systemadministrator täglich durchführt!"
      }
    ]
  }
};
