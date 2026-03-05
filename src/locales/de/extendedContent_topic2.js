export const topic2Extended = {
  "2-1": {
    "title": "Befehlszeilen-Grundlagen",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🐚",
        "text": "Was ist Shell?"
      },
      {
        "type": "paragraph",
        "text": "Die Shell ist ein Programm, das Benutzerbefehle interpretiert und zur Ausführung an den Kernel weiterleitet. Es ist die Textschnittstelle zwischen Ihnen und dem Betriebssystem. Jedes Mal, wenn Sie ein Terminal öffnen, starten Sie eine Shell."
      },
      {
        "type": "table",
        "headers": [
          "Hülse",
          "Datei",
          "Eigenschaften",
          "Verteilung"
        ],
        "rows": [
          [
            "Bash",
            "/bin/bash",
            "Beliebteste, leistungsstärkste Skripterstellung, Tab-Vervollständigung",
            "Fast alle"
          ],
          [
            "Zsh",
            "/bin/zsh",
            "Erweitert, Plugins (Oh My Zsh), anpassbares Theme",
            "macOS-Standardeinstellung"
          ],
          [
            "Fisch",
            "/usr/bin/fish",
            "Benutzerfreundlich, Syntaxhervorhebung, automatische Vorschläge",
            "Moderne Alternative"
          ],
          [
            "Bindestrich",
            "/bin/dash",
            "Minimaler POSIX-Schnellstart, der von Debian für /bin/sh verwendet wird",
            "Debian/Ubuntu"
          ],
          [
            "sh",
            "/bin/sh",
            "Original POSIX-Shell, maximale Kompatibilität",
            "Alle Unixe"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die LPI-Prüfung fragt nach der Standard-Shell der meisten Distributionen: Bash (Bourne Again Shell). Denken Sie auch daran, dass $SHELL die Login-Shell anzeigt, nicht unbedingt die verwendete."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💲",
        "text": "Die Aufforderung und ihre Symbole"
      },
      {
        "type": "paragraph",
        "text": "Die Eingabeaufforderung ist die Zeile, die das Terminal anzeigt, wenn es zum Empfang von Befehlen bereit ist. Enthält nützliche Informationen."
      },
      {
        "type": "code",
        "title": "Anatomie der Eingabeaufforderung",
        "prompt": "Benutzer@Hostname:~/Dokumente$\n│ │ │ │\n│ │ │ └── $ = normaler Benutzer (# = root)\n│ │ └── aktuelles Verzeichnis (~ = Home)\n│ └── Maschinenname\n└── Benutzername",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "$ vs. #",
        "content": "Das $-Symbol weist auf einen normalen Benutzer hin. Das #-Symbol gibt den Root-Benutzer an. Wenn Sie # in der Eingabeaufforderung sehen, arbeiten Sie mit vollen Berechtigungen – seien Sie vorsichtig!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "Zitieren: Anführungszeichen und Escape"
      },
      {
        "type": "paragraph",
        "text": "Anführungszeichen steuern, wie die Shell Sonderzeichen interpretiert. Es ist eines der am häufigsten getesteten Konzepte der LPI-Prüfung."
      },
      {
        "type": "table",
        "headers": [
          "Typ",
          "Syntax",
          "$VAR erweitern?",
          "Expandieren *?",
          "Beispiel"
        ],
        "rows": [
          [
            "Doppelte Anführungszeichen",
            "\"Text\"",
            "✅ Ja",
            "❌ Nein",
            "„Hallo $USER“ → Hallo Mario"
          ],
          [
            "Einfache Anführungszeichen",
            "'Text'",
            "❌ Nein",
            "❌ Nein",
            "'Hallo $USER' → Hallo $USER"
          ],
          [
            "Backslash",
            "\\Charakter",
            "Einzelflucht",
            "Einzelflucht",
            "echo \\$HOME → $HOME"
          ],
          [
            "Niemand",
            "Text",
            "✅ Ja",
            "✅ Ja",
            "echo * → alle Dateien auflisten"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Praktische Beispiele für das Zitieren",
        "prompt": "$ echo „Mein Zuhause ist $HOME“\nMein Zuhause ist /home/student\n\n$ echo „Mein Zuhause ist $HOME“\nMein Zuhause ist $HOME\n\n$ echo „Es gibt $(ls | wc -l)-Dateien“\nEs gibt 42 Dateien",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⌨️",
        "text": "Wichtige Tastaturkürzel"
      },
      {
        "type": "table",
        "headers": [
          "Abkürzung",
          "Aktion",
          "Wann sollte man es verwenden?"
        ],
        "rows": [
          [
            "Tab",
            "Automatische Vervollständigung",
            "Vollständige Befehle und Dateipfade"
          ],
          [
            "Tab Tab",
            "Alle Optionen anzeigen",
            "Wenn es mehr Möglichkeiten gibt"
          ],
          [
            "Strg+C",
            "Stoppbefehl (SIGINT)",
            "Um einen blockierten Prozess zu stoppen"
          ],
          [
            "Strg+D",
            "Dateiende (EOF)",
            "Zum Schließen der Shell oder Eingabe"
          ],
          [
            "Strg+L",
            "Reinigt den Bildschirm",
            "Entspricht klar"
          ],
          [
            "Strg+R",
            "Suchverlauf",
            "Um frühere Befehle zu finden"
          ],
          [
            "↑ / ↓",
            "Durchsuchen Sie den Verlauf",
            "Um letzte Befehle zu wiederholen"
          ],
          [
            "Strg+A / Strg+E",
            "Anfang/Ende der Zeile",
            "Um sich schnell durch den Befehl zu bewegen"
          ]
        ]
      }
    ]
  },
  "2-2": {
    "title": "Variablen und Umgebung",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Lokale Variablen vs. Umgebungsvariablen"
      },
      {
        "type": "paragraph",
        "text": "Es gibt zwei Arten von Variablen in der Bash. Lokale Variablen existieren nur in der aktuellen Shell. Umgebungsvariablen werden exportiert und stehen allen untergeordneten Prozessen zur Verfügung."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Lokale Variablen",
          "items": [
            "NAME=\"Wert\" (KEINE Leerzeichen um =)",
            "Nur in der aktuellen Shell sichtbar",
            "Wird nicht von untergeordneten Prozessen geerbt",
            "Straßen mit nicht festgelegtem NAME"
          ]
        },
        "right": {
          "title": "Umgebungsvariablen",
          "items": [
            "export NAME=\"Wert\"",
            "Für alle untergeordneten Prozesse sichtbar",
            "Automatisch erben",
            "Sichtbar mit Umgebung"
          ]
        }
      },
      {
        "type": "code",
        "title": "Lokale Variablen vs. Umgebung",
        "prompt": "$ LOCALE=\"nur hier\" # lokale Variable\n$ export GLOBAL=\"everywhere\" # Umgebungsvariable\n$ echo $LOCAL $GLOBAL\nnur hier überall\n\n$ bash -c 'echo $LOCAL $GLOBAL' # neue untergeordnete Shell\nüberall\n#LOCALE ist in der untergeordneten Shell nicht sichtbar!",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Auf die Leerzeichen achten!",
        "content": "In Bash funktioniert NAME=\"value\" mit Leerzeichen um equal NICHT! Bash interpretiert NAME als Befehl. Die korrekte Syntax ist NAME=\"value\" ohne Leerzeichen."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛤️",
        "text": "Die PATH-Variable"
      },
      {
        "type": "paragraph",
        "text": "PATH ist die wichtigste Variable in Linux. Enthält die Liste der Verzeichnisse, in denen die Shell nach ausführbaren Dateien sucht, wenn Sie einen Befehl eingeben. Verzeichnisse werden durch : (Doppelpunkt) getrennt."
      },
      {
        "type": "code",
        "title": "So funktioniert PATH",
        "prompt": "$ echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# Wenn Sie „ls“ eingeben, sucht die Shell in der folgenden Reihenfolge:\n# 1. /usr/local/sbin/ls (nicht gefunden)\n# 2. /usr/local/bin/ls (nicht gefunden)\n#3. /usr/sbin/ls (nicht gefunden)\n# 4. /usr/bin/ls ← GEFUNDEN! Es tut dies.\n\n# So fügen Sie dem PATH ein Verzeichnis hinzu:\n$ export PATH=\"$PATH:/opt/myprogram/bin\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌍",
        "text": "Wichtige Umgebungsvariablen"
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
            "$HOME",
            "Das Home-Verzeichnis des Benutzers",
            "/home/student"
          ],
          [
            "$USER",
            "Aktueller Benutzername",
            "Student"
          ],
          [
            "$SHELL",
            "Login-Shell",
            "/bin/bash"
          ],
          [
            "$PATH",
            "Verzeichnis für ausführbare Dateien",
            "/usr/bin:/bin:..."
          ],
          [
            "$LANG",
            "Sprache und Lokalisierung",
            "it_IT.UTF-8"
          ],
          [
            "$PWD",
            "Aktuelles Verzeichnis",
            "/home/student/docs"
          ],
          [
            "$HOSTNAME",
            "Maschinenname",
            "Linux-PC"
          ],
          [
            "$PS1",
            "Eingabeaufforderungsformat",
            "\\u@\\h:\\w\\$"
          ],
          [
            "$?",
            "Exit-Code des letzten Befehls",
            "0 (Erfolg)"
          ],
          [
            "$$",
            "PID der aktuellen Shell",
            "1234"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📄",
        "text": "Shell-Konfigurationsdatei"
      },
      {
        "type": "paragraph",
        "text": "Bash liest je nach Start unterschiedliche Konfigurationsdateien:"
      },
      {
        "type": "table",
        "headers": [
          "Datei",
          "Wenn es gelesen wird",
          "Umfang",
          "Typische Verwendung"
        ],
        "rows": [
          [
            "/etc/profile",
            "Shell-Login (alle Benutzer)",
            "Global",
            "Globale Umgebungsvariablen"
          ],
          [
            "~/.bash_profile",
            "Shell-Anmeldung",
            "Benutzer",
            "Login einrichten (.bashrc aufrufen)"
          ],
          [
            "~/.profile",
            "Shell-Anmeldung (falls .bash_profile nicht vorhanden ist)",
            "Benutzer",
            "Alternativen zu .bash_profile"
          ],
          [
            "~/.bashrc",
            "Interaktive Shell ohne Anmeldung",
            "Benutzer",
            "Aliase, Eingabeaufforderungen, Funktionen"
          ],
          [
            "/etc/bash.bashrc",
            "Interaktive Shell (alle)",
            "Global",
            "Globale Bash-Konfiguration"
          ],
          [
            "~/.bash_logout",
            "Abmelden",
            "Benutzer",
            "Reinigung, Exit-Meldungen"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Bei der LPI-Prüfung wird abgefragt, welche Dateien bei der Anmeldung im Vergleich zur interaktiven Shell gelesen werden. Denken Sie daran: Anmelden → /etc/profile + ~/.bash_profile. Interaktiv → ~/.bashrc."
      }
    ]
  },
  "2-3": {
    "title": "Holen Sie sich Hilfe",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📖",
        "text": "Die Manpages"
      },
      {
        "type": "paragraph",
        "text": "Der man-Befehl ist das integrierte Dokumentationssystem von Linux. Jeder Befehl, jede Konfigurationsdatei und jeder Systemaufruf hat (oder sollte) eine Manpage haben."
      },
      {
        "type": "table",
        "headers": [
          "Abschnitt",
          "Inhalt",
          "Beispiel"
        ],
        "rows": [
          [
            "1",
            "Benutzerbefehle",
            "Mann 1 ls"
          ],
          [
            "2",
            "Systemaufrufe (Kernel)",
            "Mann 2 offen"
          ],
          [
            "3",
            "C-Bibliotheksfunktionen",
            "Mann 3 printf"
          ],
          [
            "4",
            "Spezielle Dateien (/dev)",
            "Mann 4 null"
          ],
          [
            "5",
            "Dateiformate und Konfiguration",
            "Mann 5 Passwort"
          ],
          [
            "6",
            "Spiele",
            "Mann 6 Vermögen"
          ],
          [
            "7",
            "Verschiedenes",
            "Mann 7 ip"
          ],
          [
            "8",
            "Verwaltungsbefehle",
            "Mann 8 montieren"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Befehle, um Hilfe zu bekommen",
        "prompt": "$ man ls # Komplettes ls-Handbuch\n$ man -k \"Datei kopieren\" # Suche nach Schlüsselwort (= apropos)\n$ man 5 passwd # Abschnitt 5: Dateiformat\n$ whatis ls # Kurzbeschreibung\n$ info coreutils # Detaillierte GNU-Dokumentation\n$ ls --help # Integrierte Hilfe für den Befehl",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Navigieren Sie im Inneren des Menschen",
        "content": "Innerhalb einer Manpage: Leertaste = vorwärts, b = zurück, /text = Suche, q = Beenden. Der Mensch nutzt das Programm „less“ als Pager."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔍",
        "text": "Suchen Sie nach Dateien im System"
      },
      {
        "type": "comparison",
        "left": {
          "title": "finden (Echtzeit)",
          "items": [
            "Durchsuchen Sie das Dateisystem in Echtzeit",
            "Langsam auf großen Dateisystemen",
            "Leistungsstark: Suche nach Name, Typ, Größe, Datum, Berechtigungen",
            "Immer auf dem neuesten Stand"
          ]
        },
        "right": {
          "title": "lokalisieren (Datenbank)",
          "items": [
            "Durchsuchen Sie eine vorindizierte Datenbank",
            "Sehr schnell",
            "Eingeschränkt: Nur nach Namen suchen",
            "Datenbank wird mit „updateb“ aktualisiert (normalerweise täglich)"
          ]
        }
      },
      {
        "type": "code",
        "title": "Beispiele für die Dateisuche",
        "prompt": "$ find /home -name \"*.txt\" # .txt-Datei in /home\n$ find / -type d -name \"config\" # Verzeichnisse mit dem Namen config\n$ find /var -size +10M # Dateien größer als 10 MB\n$ finden . -mtime -7 # In den letzten 7 Tagen geändert\n$ finden . -perm 755 # Mit 755 Berechtigungen\n\n$locate passwd # Datenbank durchsuchen\n$ which python # Wo ist es im PATH?\n$ whereis ls # Binär, Quelle und Mann",
        "output": ""
      }
    ]
  },
  "2-4": {
    "title": "Navigation und Dateiverwaltung",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌳",
        "text": "FHS – Dateisystemhierarchiestandard"
      },
      {
        "type": "paragraph",
        "text": "Der FHS definiert die Standard-Linux-Verzeichnisstruktur. Alle Distributionen befolgen diese Konventionen, sodass vorhersehbar ist, wo sich die einzelnen Dateitypen befinden."
      },
      {
        "type": "table",
        "headers": [
          "Verzeichnisse",
          "Inhalt",
          "Beispiel"
        ],
        "rows": [
          [
            "/",
            "Root – Root des gesamten Dateisystems",
            "Von hier aus beginnt alles"
          ],
          [
            "/bin",
            "Wichtige Befehle für alle Benutzer",
            "ls, cp, mv, cat, bash"
          ],
          [
            "/sbin",
            "Systembefehle für den Administrator",
            "mount, fdisk, iptables"
          ],
          [
            "/usw",
            "Systemkonfigurationsdatei",
            "passwd, fstab, nginx.conf"
          ],
          [
            "/heim",
            "Persönliche Verzeichnisse der Benutzer",
            "/home/mario, /home/student"
          ],
          [
            "/Wurzel",
            "Heimat des Root-Benutzers",
            "Aus Sicherheitsgründen von /home getrennt"
          ],
          [
            "/var",
            "Variable Daten (Log, Spool, Cache)",
            "/var/log/syslog, /var/www"
          ],
          [
            "/tmp",
            "Temporäre Dateien (beim Neustart gelöscht)",
            "Sitzungsdateien, temporäre Downloads"
          ],
          [
            "/usr",
            "Installierte Programme und Bibliotheken",
            "/usr/bin, /usr/lib, /usr/share"
          ],
          [
            "/opt",
            "Optionale Software/Software von Drittanbietern",
            "Browser, IDEs, benutzerdefinierte Anwendungen"
          ],
          [
            "/dev",
            "Gerätedateien",
            "/dev/sda (Festplatte), /dev/null"
          ],
          [
            "/proc",
            "Virtuelles Dateisystem – Kernel-/Prozessinformationen",
            "/proc/cpuinfo, /proc/meminfo"
          ],
          [
            "/sys",
            "Virtuelles Dateisystem – Hardwareinformationen",
            "Geräte- und Treiberinformationen"
          ],
          [
            "/Stiefel",
            "Kernel und Bootloader",
            "vmlinuz, initramfs, grub"
          ],
          [
            "/lib",
            "Wichtige gemeinsam genutzte Bibliotheken",
            "libc.so, libpthread.so"
          ],
          [
            "/mnt, /media",
            "Mountpunkte für Geräte",
            "USB, CD-ROM, externe Datenträger"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧭",
        "text": "Absolute vs. relative Pfade"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Absoluter Weg",
          "items": [
            "Beginnt immer mit /",
            "Identifiziert eine Datei eindeutig",
            "Unabhängig von Ihrem aktuellen Standort",
            "Esempio: /home/mario/documenti/file.txt"
          ]
        },
        "right": {
          "title": "Relativer Pfad",
          "items": [
            "Beginnt NICHT mit /",
            "Relativ zum aktuellen Verzeichnis (pwd)",
            "USA. (current) and .. (father)",
            "Beispiel: ../documents/file.txt"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔠",
        "text": "Globbing – Mustervergleich"
      },
      {
        "type": "paragraph",
        "text": "Mit Globbing können Sie Dateien anhand spezieller Muster auswählen. Die Shell erweitert das Muster, bevor sie es an den Befehl übergibt."
      },
      {
        "type": "table",
        "headers": [
          "Muster",
          "Bedeutung",
          "Beispiel",
          "Ergebnis"
        ],
        "rows": [
          [
            "*",
            "Keine oder mehr beliebige Zeichen",
            "ls *.txt",
            "Datei.txt, Bericht.txt"
          ],
          [
            "?",
            "Genau ein Zeichen",
            "ls-Datei?.txt",
            "Datei1.txt, DateiA.txt"
          ],
          [
            "[ABC]",
            "Einer von a, b oder c",
            "ls-Datei[123].txt",
            "Datei1.txt, Datei2.txt"
          ],
          [
            "[a-z]",
            "Ein Charakter in Reichweite",
            "ls [a-c]*.txt",
            "abc.txt, beta.txt"
          ],
          [
            "[!ABC]",
            "Beliebig AUSSER a, b, c",
            "ls [!0-9]*",
            "file.txt (nicht 1file)"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Wichtige Befehle zum Verwalten von Dateien",
        "prompt": "$ mkdir -p project/src/main # Mit allen übergeordneten Verzeichnissen erstellen\n$ cp -r src/ backup/ # Rekursive Kopie\n$ mv old.txt new.txt # Umbenennen (oder verschieben)\n$ rm -rf obsolete_directory/ # Rekursiv löschen (WARNUNG!)\n$ touch new.txt # Leere Datei erstellen oder Zeitstempel aktualisieren\n$ ls -la # Detaillierte Liste mit versteckten Dateien",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "rm -rf ist gefährlich!",
        "content": "Der Befehl rm -rf löscht alles rekursiv OHNE eine Bestätigung abzufragen. Ein Fehler wie „rm -rf /“ kann das gesamte System zerstören. Immer mit äußerster Vorsicht verwenden!"
      }
    ]
  }
};
