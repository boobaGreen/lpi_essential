export const topic2Quizzes = [
  {
    "lessonId": "2-1",
    "question": "Welche Shell ist in den meisten Linux-Distributionen die Standard-Shell?",
    "options": [
      "zsh",
      "Fisch",
      "bash",
      "csh"
    ],
    "correct": 2,
    "explanation": "Bash (Bourne Again Shell) ist die Standard-Shell in den meisten Linux-Distributionen."
  },
  {
    "lessonId": "2-1",
    "question": "Welches Symbol weist in der Eingabeaufforderung auf einen Root-Benutzer hin?",
    "options": [
      "$",
      "#",
      "@",
      "!"
    ],
    "correct": 1,
    "explanation": "Das #-Symbol gibt den Root-Benutzer an, während $ für einen normalen Benutzer steht."
  },
  {
    "lessonId": "2-1",
    "question": "Was bewirkt das Zitieren mit doppelten Anführungszeichen (\"\")?",
    "options": [
      "Verhindert jegliche Ausdehnung",
      "Ermöglicht die Erweiterung von Variablen, jedoch kein Globbing",
      "Es hat keine Wirkung",
      "Führen Sie den Inhalt als Befehl aus"
    ],
    "correct": 1,
    "explanation": "Doppelte Anführungszeichen ermöglichen die Variablenerweiterung ($VAR), verhindern jedoch das Globbing (* und ?)."
  },
  {
    "lessonId": "2-1",
    "question": "Einfache Anführungszeichen (') in Bash:",
    "options": [
      "Sie erweitern die Variablen",
      "Sie behandeln alles als wörtlichen Text",
      "Sie führen Befehle aus",
      "Sie entsprechen Doppeln"
    ],
    "correct": 1,
    "explanation": "Einfache Anführungszeichen behandeln den gesamten Inhalt als wörtlichen Text ohne Erweiterung."
  },
  {
    "lessonId": "2-1",
    "question": "Welcher Charakter erlaubt das Entkommen einzelner Charaktere?",
    "options": [
      "/",
      "~",
      "\\",
      "!"
    ],
    "correct": 2,
    "explanation": "Der Backslash (\\) maskiert das nächste Zeichen."
  },
  {
    "lessonId": "2-1",
    "question": "Der „type“-Befehl in Bash zeigt:",
    "options": [
      "Der Dateityp",
      "Wie ein Befehl interpretiert wird",
      "Der Dateisystemtyp",
      "Die Arten von Benutzern"
    ],
    "correct": 1,
    "explanation": "Typ zeigt an, ob ein Befehl ein integriertes Programm, ein Alias, eine Funktion oder ein externes Programm ist."
  },
  {
    "lessonId": "2-1",
    "question": "Welcher Befehl zeigt den aktuellen Benutzer an?",
    "options": [
      "WHO",
      "Whoami",
      "Ausweis",
      "Benutzer"
    ],
    "correct": 1,
    "explanation": "whoami gibt den Namen des aktuellen Benutzers aus."
  },
  {
    "lessonId": "2-1",
    "question": "Welche Datei definiert die Standard-Shell eines Benutzers?",
    "options": [
      "/etc/shells",
      "/etc/passwd",
      "/etc/bashrc",
      "/etc/profile"
    ],
    "correct": 1,
    "explanation": "Das letzte Feld von /etc/passwd gibt die Standard-Shell des Benutzers an."
  },
  {
    "lessonId": "2-1",
    "question": "Was gibt „echo $SHELL“ aus?",
    "options": [
      "Die aktuelle Shell",
      "Die Standard-Anmeldeshell",
      "Alle Granaten installiert",
      "Die Bash-Version"
    ],
    "correct": 1,
    "explanation": "$SHELL enthält den Pfad zur Standard-Anmeldeshell des Benutzers."
  },
  {
    "lessonId": "2-1",
    "question": "Welcher Befehl zeigt Informationen zum Betriebssystem an?",
    "options": [
      "uname -a",
      "Betriebssystem-Info",
      "sysinfo",
      "Hostinfo"
    ],
    "correct": 0,
    "explanation": "uname -a zeigt Kernel, Hostnamen, Architektur und andere Systeminformationen an."
  },
  {
    "lessonId": "2-1",
    "question": "Die Befehlsersetzung $(command) ist äquivalent zu:",
    "options": [
      "$(Befehl)",
      "\"Befehl\"",
      "„Befehl“.",
      "{Befehl}"
    ],
    "correct": 2,
    "explanation": "Die Backticks „command“ und $(command) sind für die Befehlsersetzung gleichwertig."
  },
  {
    "lessonId": "2-1",
    "question": "Welcher Schlüssel ermöglicht die automatische Vervollständigung in Bash?",
    "options": [
      "Eingeben",
      "Tab",
      "Strg+C",
      "Esc"
    ],
    "correct": 1,
    "explanation": "Die Tab-Taste ermöglicht die automatische Vervollständigung von Befehlen, Dateien und Verzeichnissen."
  },
  {
    "lessonId": "2-2",
    "question": "Welcher Befehl zeigt den Wert der PATH-Variablen an?",
    "options": [
      "PFAD anzeigen",
      "echo $PATH",
      "PFAD drucken",
      "Katzenpfad"
    ],
    "correct": 1,
    "explanation": "echo $PATH gibt den Wert der Umgebungsvariablen PATH aus."
  },
  {
    "lessonId": "2-2",
    "question": "Welcher Befehl stellt untergeordneten Prozessen eine lokale Variable zur Verfügung?",
    "options": [
      "Aktie",
      "Export",
      "Satz",
      "drücken"
    ],
    "correct": 1,
    "explanation": "export stellt eine lokale Variable als Umgebungsvariable für untergeordnete Prozesse zur Verfügung."
  },
  {
    "lessonId": "2-2",
    "question": "Wie weist man einer Variablen in der Bash einen Wert zu?",
    "options": [
      "NAME = „Wert“",
      "NAME=\"Wert\"",
      "set NAME=\"Wert\"",
      "let NAME=\"value\""
    ],
    "correct": 1,
    "explanation": "In Bash-Zuweisungen dürfen KEINE Leerzeichen um das Gleiche stehen: NAME=\"value\"."
  },
  {
    "lessonId": "2-2",
    "question": "Die HOME-Variable enthält:",
    "options": [
      "Das Stammverzeichnis /",
      "Das Home-Verzeichnis des Benutzers",
      "Der Weg zum Bash",
      "Der Hostname"
    ],
    "correct": 1,
    "explanation": "$HOME enthält den Pfad zum persönlichen Verzeichnis des Benutzers (z. B. /home/user)."
  },
  {
    "lessonId": "2-2",
    "question": "Der Befehl „env“ zeigt:",
    "options": [
      "Nur lokale Variablen",
      "Umgebungsvariablen",
      "Die verfügbaren Befehle",
      "Systemvariablen"
    ],
    "correct": 1,
    "explanation": "env zeigt alle exportierten Umgebungsvariablen."
  },
  {
    "lessonId": "2-2",
    "question": "Welche Datei wird beim Starten einer interaktiven Bash-Sitzung gelesen?",
    "options": [
      "/etc/passwd",
      "~/.bashrc",
      "/etc/motd",
      "~/.bash_logout"
    ],
    "correct": 1,
    "explanation": "~/.bashrc wird jedes Mal gelesen, wenn eine interaktive Bash-Shell ohne Anmeldung geöffnet wird."
  },
  {
    "lessonId": "2-2",
    "question": "Wie löscht man eine Variable?",
    "options": [
      "VAR löschen",
      "VAR entfernen",
      "VAR nicht gesetzt",
      "Klarer VAR"
    ],
    "correct": 2,
    "explanation": "unset VAR entfernt die Variable aus der Shell-Umgebung."
  },
  {
    "lessonId": "2-2",
    "question": "Die LANG-Variable legt Folgendes fest:",
    "options": [
      "Die Programmiersprache",
      "Die Sprache und Lokalisierung des Systems",
      "Das Tastaturlayout",
      "Das LAN-Netzwerk"
    ],
    "correct": 1,
    "explanation": "LANG definiert die Sprache und Lokalisierung des Systems (z. B. it_IT.UTF-8)."
  },
  {
    "lessonId": "2-2",
    "question": "PATH enthält:",
    "options": [
      "Aktuelle Dateien",
      "Die Verzeichnisse, in denen nach Befehlen gesucht werden soll",
      "Passwörter",
      "Die Netzwerkpfade"
    ],
    "correct": 1,
    "explanation": "PATH ist eine durch : getrennte Liste von Verzeichnissen, in denen die Shell nach ausführbaren Dateien sucht."
  },
  {
    "lessonId": "2-2",
    "question": "Welche Datei wird für ALLE Benutzer beim Login gelesen?",
    "options": [
      "~/.bashrc",
      "~/.profile",
      "/etc/profile",
      "/etc/bashrc"
    ],
    "correct": 2,
    "explanation": "/etc/profile ist die globale Profildatei, die bei der Anmeldung für alle Benutzer gelesen wird."
  },
  {
    "lessonId": "2-2",
    "question": "Echo $? zeigen:",
    "options": [
      "Die aktuelle PID",
      "Der Exit-Code des letzten Befehls",
      "Der aktuelle Benutzer",
      "Das aktuelle Verzeichnis"
    ],
    "correct": 1,
    "explanation": "$? enthält den Exit-Code des zuletzt ausgeführten Befehls (0 = Erfolg)."
  },
  {
    "lessonId": "2-3",
    "question": "Welchen Befehl zeigt ein Linux-Befehlshandbuch?",
    "options": [
      "Hilfebefehl",
      "Mann Befehl",
      "Befehlsinformationen",
      "--help-Befehl"
    ],
    "correct": 1,
    "explanation": "man (manual) zeigt die vollständige Handbuchseite für einen Befehl an."
  },
  {
    "lessonId": "2-3",
    "question": "Welcher Befehl sucht nach einer Datei im Dateisystem anhand des Namens?",
    "options": [
      "suchen",
      "grep",
      "finden",
      "Aussehen"
    ],
    "correct": 2,
    "explanation": "find sucht nach Dateien und Verzeichnissen im Dateisystem. Beispiel: find / -name „file.txt“"
  },
  {
    "lessonId": "2-3",
    "question": "Abschnitt 1 des Mannes enthält:",
    "options": [
      "Konfigurationsdateien",
      "Benutzerbefehle",
      "Systemaufrufe",
      "Admin-Befehle"
    ],
    "correct": 1,
    "explanation": "Abschnitt 1 = Benutzerbefehle. 5 = Dateiformate. 8 = Admin-Befehle."
  },
  {
    "lessonId": "2-3",
    "question": "Der Befehl „apropos“ führt Folgendes aus:",
    "options": [
      "Durchsuchen Sie Manpages nach Schlüsselwörtern",
      "Pakete installieren",
      "Version anzeigen",
      "Benutzer auflisten"
    ],
    "correct": 0,
    "explanation": "Apropos durchsucht Manpage-Beschreibungen. Entspricht man -k."
  },
  {
    "lessonId": "2-3",
    "question": "Welcher Befehl zeigt an, wo sich eine ausführbare Datei befindet?",
    "options": [
      "finden",
      "lokalisieren",
      "welche",
      "Wo"
    ],
    "correct": 2,
    "explanation": "Hier wird der Pfad zur ausführbaren Datei angezeigt, die ausgeführt werden soll (siehe PATH)."
  },
  {
    "lessonId": "2-3",
    "question": "„locate“ ist schneller als „find“, weil:",
    "options": [
      "Verwenden Sie weniger RAM",
      "Verwenden Sie eine vorab ausgefüllte Datenbank",
      "Es ist in C geschrieben",
      "Es ist ein eingebautes"
    ],
    "correct": 1,
    "explanation": "„locate“ durchsucht eine von „updateb“ aktualisierte Datenbank und ist daher sehr schnell."
  },
  {
    "lessonId": "2-3",
    "question": "Abschnitt 5 des Mannes enthält:",
    "options": [
      "Benutzerbefehle",
      "Spiele",
      "Dateiformate und Konfiguration",
      "Admin-Befehle"
    ],
    "correct": 2,
    "explanation": "Abschnitt 5 dokumentiert Dateiformate und Konfigurationsdateien."
  },
  {
    "lessonId": "2-3",
    "question": "find /home -type f -name \"*.txt\" Suche:",
    "options": [
      ".txt-Verzeichnisse",
      ".txt-Datei im Zuhause",
      "Link .txt",
      "Verarbeitet TXT"
    ],
    "correct": 1,
    "explanation": "-type f = reguläre Dateien, -name „*.txt“ = Name, der mit .txt endet."
  },
  {
    "lessonId": "2-3",
    "question": "Welche Befehlsoption zeigt eine Kurzhilfe an?",
    "options": [
      "--Mann",
      "--Info",
      "--helfen",
      "--doc"
    ],
    "correct": 2,
    "explanation": "Fast alle Befehle unterstützen --help für prägnante Hilfe."
  },
  {
    "lessonId": "2-3",
    "question": "Der Befehl „whatis“ zeigt:",
    "options": [
      "Dateityp",
      "Kurze Beschreibung des Befehls",
      "Systemversion",
      "Aktuelles Verzeichnis"
    ],
    "correct": 1,
    "explanation": "whatis zeigt die Manpage-Beschreibungszeile für einen Befehl an."
  },
  {
    "lessonId": "2-4",
    "question": "In welchem ​​Verzeichnis liegen die Systemkonfigurationsdateien?",
    "options": [
      "/bin",
      "/usw",
      "/var",
      "/opt"
    ],
    "correct": 1,
    "explanation": "/etc enthält Systemkonfigurationsdateien."
  },
  {
    "lessonId": "2-4",
    "question": "Welcher Befehl erstellt ein Verzeichnis einschließlich fehlender übergeordneter Verzeichnisse?",
    "options": [
      "mkdir -f",
      "mkdir -r",
      "mkdir -p",
      "mkdir -a"
    ],
    "correct": 2,
    "explanation": "mkdir -p erstellt das Verzeichnis und alle erforderlichen übergeordneten Verzeichnisse."
  },
  {
    "lessonId": "2-4",
    "question": "Welches Glob-Muster passt zu einem einzelnen Zeichen?",
    "options": [
      "*",
      "?",
      "[]",
      "#"
    ],
    "correct": 1,
    "explanation": "? entspricht genau einem einzelnen Zeichen. * entspricht null oder mehr Zeichen."
  },
  {
    "lessonId": "2-4",
    "question": "Das Verzeichnis /var enthält:",
    "options": [
      "Grundlegende Befehle",
      "Variable Daten (Log, Spool, Mail)",
      "Konfiguration",
      "Kernel"
    ],
    "correct": 1,
    "explanation": "/var enthält Daten, die sich während des Betriebs ändern: Protokoll, Cache, E-Mail."
  },
  {
    "lessonId": "2-4",
    "question": "Der Befehl „ls -a“ zeigt:",
    "options": [
      "Nur große Dateien",
      "Sogar versteckte Dateien (beginnend mit .)",
      "Dateien nach Datum sortiert",
      "Nur ausführbare Dateien"
    ],
    "correct": 1,
    "explanation": "-a (all) zeigt auch versteckte Dateien an, die mit einem Punkt (.) beginnen."
  },
  {
    "lessonId": "2-4",
    "question": "„ . “ (einzelner Punkt) in einem Pfad bedeutet:",
    "options": [
      "Die Wurzel",
      "Das aktuelle Verzeichnis",
      "Das Zuhause",
      "Eine versteckte Datei"
    ],
    "correct": 1,
    "explanation": ". stellt das aktuelle Verzeichnis dar. .. stellt das übergeordnete Verzeichnis dar."
  },
  {
    "lessonId": "2-4",
    "question": "In welchem ​​Verzeichnis befindet sich das Zuhause des Benutzers?",
    "options": [
      "/Wurzel",
      "/Benutzer",
      "/heim",
      "/usr"
    ],
    "correct": 2,
    "explanation": "/home enthält die Home-Verzeichnisse normaler Benutzer. /root ist das Root-Home."
  },
  {
    "lessonId": "2-4",
    "question": "Der Globus [abc] entspricht:",
    "options": [
      "Die Zeichenfolge abc",
      "Ein einzelnes Zeichen: a, b oder c",
      "Jeder Charakter",
      "Drei Charaktere"
    ],
    "correct": 1,
    "explanation": "[abc] entspricht einem einzelnen Zeichen, das a, b oder c ist."
  },
  {
    "lessonId": "2-4",
    "question": "Touch-Dateiname erstellen:",
    "options": [
      "Ein Verzeichnis",
      "Ein Link",
      "Eine leere Datei (oder ein Aktualisierungszeitstempel)",
      "Ein Prozess"
    ],
    "correct": 2,
    "explanation": "touch erstellt eine leere Datei, wenn sie nicht vorhanden ist, oder aktualisiert den Zeitstempel, wenn er vorhanden ist."
  },
  {
    "lessonId": "2-4",
    "question": "/tmp wird verwendet für:",
    "options": [
      "Temporäre Dateien",
      "Systemdateien",
      "Backups",
      "Konfiguration"
    ],
    "correct": 0,
    "explanation": "/tmp enthält temporäre Dateien, die beim Neustart gelöscht werden können."
  },
  {
    "lessonId": "2-4",
    "question": "cp -r wird verwendet für:",
    "options": [
      "Nur Dateien kopieren",
      "Verzeichnisse rekursiv kopieren",
      "Dateien umbenennen",
      "Komprimieren Sie Dateien"
    ],
    "correct": 1,
    "explanation": "cp -r kopiert rekursiv ein Verzeichnis und seinen gesamten Inhalt."
  },
  {
    "lessonId": "2-1",
    "question": "Strg+C in Bash:",
    "options": [
      "Schließt die Shell",
      "Unterbricht den aktuellen Befehl (SIGINT)",
      "Text kopieren",
      "Löschen Sie die Zeile"
    ],
    "correct": 1,
    "explanation": "Strg+C sendet SIGINT an den Vordergrundprozess und beendet ihn."
  },
  {
    "lessonId": "2-1",
    "question": "Strg+D in Bash bedeutet:",
    "options": [
      "Ende der Eingabe (EOF)",
      "Stornierung",
      "Ein neues Terminal",
      "Befehlsvervollständigung"
    ],
    "correct": 0,
    "explanation": "Strg+D sendet EOF (End Of File) und schließt die Shell, wenn keine Eingabe erfolgt."
  },
  {
    "lessonId": "2-2",
    "question": "Die PS1-Variable steuert:",
    "options": [
      "Der WEG",
      "Der Shell-Prompt",
      "Das Passwort",
      "Die Prozesse"
    ],
    "correct": 1,
    "explanation": "PS1 definiert das Erscheinungsbild des Shell-Prompts (z. B. \\u@\\h:\\w$ )."
  },
  {
    "lessonId": "2-3",
    "question": "Das Schlüsselwort man -k entspricht:",
    "options": [
      "was ist",
      "Apropos",
      "wo ist",
      "welche"
    ],
    "correct": 1,
    "explanation": "man -k und apropos durchsuchen Manpage-Beschreibungen nach Schlüsselwörtern."
  },
  {
    "lessonId": "2-3",
    "question": "Abschnitt 8 des Mannes enthält:",
    "options": [
      "Benutzerbefehle",
      "Systemaufrufe",
      "Spiele",
      "Verwaltungsbefehle"
    ],
    "correct": 3,
    "explanation": "Abschnitt 8 enthält Systemverwaltungsbefehle (z. B. mount, useradd)."
  },
  {
    "lessonId": "2-4",
    "question": "/usr enthält:",
    "options": [
      "Persönliche Benutzerdateien",
      "Installierte Programme und Bibliotheken",
      "Temporäre Dateien",
      "Systemprotokolle"
    ],
    "correct": 1,
    "explanation": "/usr (Unix System Resources) enthält Programme, Bibliotheken und Dokumentation."
  },
  {
    "lessonId": "2-4",
    "question": "/dev enthält:",
    "options": [
      "Dokumentation",
      "Gerätedateien",
      "Entwicklungstools",
      "Firmware"
    ],
    "correct": 1,
    "explanation": "/dev enthält spezielle Dateien, die Hardwaregeräte darstellen."
  },
  {
    "lessonId": "2-4",
    "question": "Der Glob [!abc] entspricht:",
    "options": [
      "Die Zeichen a, b, c",
      "Beliebiges Zeichen AUSSER a, b, c",
      "Die Zeichenfolge !abc",
      "Keine Charaktere"
    ],
    "correct": 1,
    "explanation": "[!abc] oder [^abc] entspricht einem einzelnen Zeichen, das NICHT a, b oder c ist."
  },
  {
    "lessonId": "2-4",
    "question": "rm -r wird verwendet für:",
    "options": [
      "Dateien umbenennen",
      "Dateien rekursiv löschen",
      "Dateien wiederherstellen",
      "Protokoll drehen"
    ],
    "correct": 1,
    "explanation": "rm -r löscht rekursiv Verzeichnisse und deren Inhalte."
  },
  {
    "lessonId": "2-4",
    "question": "Welches Verzeichnis enthält gemeinsam genutzte Bibliotheken?",
    "options": [
      "/bin",
      "/lib",
      "/usw",
      "/src"
    ],
    "correct": 1,
    "explanation": "/lib und /lib64 enthalten die von Programmen benötigten gemeinsam genutzten Bibliotheken."
  }
];
