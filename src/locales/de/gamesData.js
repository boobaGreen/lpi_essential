export const dragDropData = [
  {
    "title": "Grundlegende Befehle",
    "pairs": [
      {
        "left": "ls",
        "right": "Dateiliste"
      },
      {
        "left": "cd",
        "right": "Verzeichnis wechseln"
      },
      {
        "left": "pwd",
        "right": "Aktuelles Verzeichnis"
      },
      {
        "left": "cp",
        "right": "Dateien kopieren"
      },
      {
        "left": "rm",
        "right": "Dateien löschen"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux-Verzeichnisse",
    "pairs": [
      {
        "left": "/etc",
        "right": "Systemkonfiguration"
      },
      {
        "left": "/home",
        "right": "Zuhause der Benutzer"
      },
      {
        "left": "/var",
        "right": "Variable Daten (Protokoll)"
      },
      {
        "left": "/tmp",
        "right": "Temporäre Dateien"
      },
      {
        "left": "/boot",
        "right": "Kernel und Bootloader"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux-Distributionen",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "Basierend auf Debian"
      },
      {
        "left": "Fedora",
        "right": "Basis für RHEL"
      },
      {
        "left": "Arch",
        "right": "Rollende Veröffentlichung"
      },
      {
        "left": "CentOS",
        "right": "Abgeleitet von RHEL"
      },
      {
        "left": "openSUSE",
        "right": "Verwenden Sie Zypper"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Open-Source-Anwendungen",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "Office-Suite"
      },
      {
        "left": "Firefox",
        "right": "Webbrowser"
      },
      {
        "left": "GIMP",
        "right": "Bildeditor"
      },
      {
        "left": "Blender",
        "right": "3D-Modellierung"
      },
      {
        "left": "Audacity",
        "right": "Audio-Editor"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Softwarelizenzen",
    "pairs": [
      {
        "left": "GPL",
        "right": "Starkes Copyleft"
      },
      {
        "left": "MIT",
        "right": "Freizügig, sehr kurz"
      },
      {
        "left": "Apache 2.0",
        "right": "Freizügigkeit + Patente"
      },
      {
        "left": "LGPL",
        "right": "Verknüpfung mit Eigentümer"
      },
      {
        "left": "AGPL",
        "right": "Copyleft für SaaS"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Paketmanager",
    "pairs": [
      {
        "left": "apt",
        "right": "Debian/Ubuntu"
      },
      {
        "left": "dnf",
        "right": "Fedora/RHEL"
      },
      {
        "left": "pacman",
        "right": "ArchLinux"
      },
      {
        "left": "zypper",
        "right": "openSUSE"
      },
      {
        "left": "snap",
        "right": "Universelle Pakete (kanonisch)"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Dateiberechtigungen (Numerisch)",
    "pairs": [
      {
        "left": "777",
        "right": "Lesen, Schreiben, Aufführen für alle"
      },
      {
        "left": "755",
        "right": "Besitzer macht alles, andere lesen/ausführen"
      },
      {
        "left": "644",
        "right": "Besitzer liest/schreibt, andere lesen"
      },
      {
        "left": "600",
        "right": "Nur der Eigentümer liest und schreibt"
      },
      {
        "left": "400",
        "right": "Nur der Besitzer kann lesen"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Bash-Symbole",
    "pairs": [
      {
        "left": ">",
        "right": "Ausgabe umleiten (überschreiben)"
      },
      {
        "left": ">>",
        "right": "Ausgabe umleiten (Anhängen)"
      },
      {
        "left": "|",
        "right": "Pipe (Verbindungsbefehle)"
      },
      {
        "left": "&",
        "right": "Läuft im Hintergrund"
      },
      {
        "left": "$$",
        "right": "PID der aktuellen Shell"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "Systemdienste",
    "pairs": [
      {
        "left": "systemd",
        "right": "Modernes Init-System"
      },
      {
        "left": "sshd",
        "right": "SSH-Server"
      },
      {
        "left": "cron",
        "right": "Dämonenplanung"
      },
      {
        "left": "cups",
        "right": "Druckserver"
      },
      {
        "left": "rsyslog",
        "right": "Systemprotokollverwaltung"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "So erstellen Sie ein Verzeichnis: _____ Verzeichnisname",
    "answer": "mkdir",
    "hint": "Verzeichnis erstellen",
    "difficulty": 1
  },
  {
    "prompt": "Um eine Datei zu löschen: _____ Dateiname",
    "answer": "rm",
    "hint": "Entfernen",
    "difficulty": 1
  },
  {
    "prompt": "So kopieren Sie eine Datei: _____ Quellziel",
    "answer": "cp",
    "hint": "Kopie",
    "difficulty": 1
  },
  {
    "prompt": "So verschieben Sie eine Datei: _____ Quellziel",
    "answer": "mv",
    "hint": "Bewegen",
    "difficulty": 1
  },
  {
    "prompt": "Um das aktuelle Verzeichnis anzuzeigen: _____",
    "answer": "pwd",
    "hint": "Arbeitsverzeichnis drucken",
    "difficulty": 1
  },
  {
    "prompt": "So erstellen Sie eine leere Datei: _____ Dateiname",
    "answer": "touch",
    "hint": "Tippen/erstellen",
    "difficulty": 1
  },
  {
    "prompt": "Um den Inhalt anzuzeigen: _____ Dateiname",
    "answer": "cat",
    "hint": "Verketten",
    "difficulty": 1
  },
  {
    "prompt": "Um das Handbuch zu lesen: _____ ls",
    "answer": "man",
    "hint": "Handbuch",
    "difficulty": 1
  },
  {
    "prompt": "Text drucken: _____ „Hallo Welt“",
    "answer": "echo",
    "hint": "Öko/Druck",
    "difficulty": 1
  },
  {
    "prompt": "Um Dateien mit Details aufzulisten: _____ -la",
    "answer": "ls",
    "hint": "Liste",
    "difficulty": 1
  },
  {
    "prompt": "So sehen Sie die Prozesse: _____ aux",
    "answer": "ps",
    "hint": "Prozessstatus",
    "difficulty": 2
  },
  {
    "prompt": "So ändern Sie Berechtigungen: _____ 755 script.sh",
    "answer": "chmod",
    "hint": "Modus ändern",
    "difficulty": 2
  },
  {
    "prompt": "Um den Besitzer zu ändern: _____ Benutzer:Gruppendatei",
    "answer": "chown",
    "hint": "Besitzer wechseln",
    "difficulty": 2
  },
  {
    "prompt": "So suchen Sie nach Text: _____ „pattern“ file.txt",
    "answer": "grep",
    "hint": "Globaler Druck mit regulären Ausdrücken",
    "difficulty": 2
  },
  {
    "prompt": "So extrahieren Sie ein tar.gz-Archiv: tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "gZip-Datei extrahieren",
    "difficulty": 2
  },
  {
    "prompt": "So fügen Sie einen Benutzer hinzu: _____ -m neuer Benutzer",
    "answer": "useradd",
    "hint": "Benutzer hinzufügen",
    "difficulty": 2
  },
  {
    "prompt": "So sehen Sie den Speicherplatz: _____ -h",
    "answer": "df",
    "hint": "Festplattenfrei",
    "difficulty": 2
  },
  {
    "prompt": "So suchen Sie nach Dateien im Dateisystem: _____ / -name \"*.log\"",
    "answer": "find",
    "hint": "Durchsuchen Sie das Dateisystem",
    "difficulty": 2
  },
  {
    "prompt": "Um die ersten Zeilen anzuzeigen: _____ -n 5 file.txt",
    "answer": "head",
    "hint": "Kopf/Anfang",
    "difficulty": 2
  },
  {
    "prompt": "Um die letzten Zeilen anzuzeigen: _____ -n 5 file.txt",
    "answer": "tail",
    "hint": "Schwanz/Ende",
    "difficulty": 2
  },
  {
    "prompt": "So mounten Sie ein Dateisystem: _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "Montieren",
    "difficulty": 2
  },
  {
    "prompt": "So testen Sie die Konnektivität: _____ google.com",
    "answer": "ping",
    "hint": "ICMP-Paket senden",
    "difficulty": 2
  },
  {
    "prompt": "So laden Sie eine Datei von der URL herunter: _____ http://example.com/file",
    "answer": "wget",
    "hint": "WebGet",
    "difficulty": 2
  },
  {
    "prompt": "Um einen Prozess zu beenden: _____ -9 PID",
    "answer": "kill",
    "hint": "Vorgang beenden",
    "difficulty": 3
  },
  {
    "prompt": "Um einem Echtzeitprotokoll zu folgen: tail _____ /var/log/syslog",
    "answer": "-f",
    "hint": "Folgen",
    "difficulty": 3
  },
  {
    "prompt": "So erstellen Sie einen symbolischen Link: ln _____ Ziellink",
    "answer": "-s",
    "hint": "Symbolisch",
    "difficulty": 3
  },
  {
    "prompt": "So bearbeiten Sie Inline-Text: _____ -i „s/old/new/g“-Datei",
    "answer": "sed",
    "hint": "Stream-Editor",
    "difficulty": 3
  },
  {
    "prompt": "So zählen Sie Zeilen/Wörter/Bytes: _____ -l file.txt",
    "answer": "wc",
    "hint": "WordCount",
    "difficulty": 3
  },
  {
    "prompt": "So sortieren Sie Zeilen: _____ -rn data.txt",
    "answer": "sort",
    "hint": "Befehl",
    "difficulty": 3
  },
  {
    "prompt": "So schneiden Sie Spalten aus: _____ -d: -f1 /etc/passwd",
    "answer": "cut",
    "hint": "Ausschneiden/extrahieren",
    "difficulty": 3
  },
  {
    "prompt": "So synchronisieren Sie Dateien: _____ -avz src/ dest/",
    "answer": "rsync",
    "hint": "Remote-Synchronisierung",
    "difficulty": 3
  },
  {
    "prompt": "So extrahieren Sie gemusterte Spalten: _____ '{print $1}' Datei",
    "answer": "awk",
    "hint": "Verarbeitungssprache",
    "difficulty": 3
  },
  {
    "prompt": "Um geöffnete Dateien anzuzeigen: _____ -i :80",
    "answer": "lsof",
    "hint": "Geöffnete Dateien auflisten",
    "difficulty": 3
  },
  {
    "prompt": "So verwalten Sie Systemd-Dienste: _____ starten Sie Nginx neu",
    "answer": "systemctl",
    "hint": "Systemsteuerung",
    "difficulty": 3
  },
  {
    "prompt": "So bearbeiten Sie die Crontab: _____ -e",
    "answer": "crontab",
    "hint": "Cron-Tabelle",
    "difficulty": 3
  },
  {
    "prompt": "Um Netzwerkverbindungen anzuzeigen: _____ -tuln",
    "answer": "ss",
    "hint": "Socket-Statistiken",
    "difficulty": 3
  },
  {
    "prompt": "Um Zeichen zu übersetzen: echo „hello“ | _____ a-z A-Z",
    "answer": "tr",
    "hint": "Übersetzen",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "Liste der Dateien und Verzeichnisse"
  },
  {
    "command": "cd",
    "description": "Verzeichnis wechseln"
  },
  {
    "command": "pwd",
    "description": "Aktuelles Verzeichnis anzeigen"
  },
  {
    "command": "cp",
    "description": "Dateien kopieren"
  },
  {
    "command": "mv",
    "description": "Dateien verschieben oder umbenennen"
  },
  {
    "command": "rm",
    "description": "Dateien löschen"
  },
  {
    "command": "cat",
    "description": "Dateiinhalte anzeigen"
  },
  {
    "command": "mkdir",
    "description": "Verzeichnis erstellen"
  },
  {
    "command": "touch",
    "description": "Leere Datei erstellen"
  },
  {
    "command": "echo",
    "description": "Text auf Standardausgabe ausgeben"
  },
  {
    "command": "man",
    "description": "Zeigen Sie das Handbuch"
  },
  {
    "command": "sudo",
    "description": "Als Root ausführen"
  },
  {
    "command": "whoami",
    "description": "Aktuellen Benutzer anzeigen"
  },
  {
    "command": "exit",
    "description": "Schließt die Shell"
  },
  {
    "command": "chmod",
    "description": "Dateiberechtigungen ändern"
  },
  {
    "command": "grep",
    "description": "Suchen Sie nach Mustern im Text"
  },
  {
    "command": "find",
    "description": "Suchen Sie nach Dateien im Dateisystem"
  },
  {
    "command": "tar",
    "description": "Dateien archivieren und komprimieren"
  },
  {
    "command": "chown",
    "description": "Dateieigentümer ändern"
  },
  {
    "command": "df",
    "description": "Freier Speicherplatz anzeigen"
  },
  {
    "command": "du",
    "description": "Datei- und Verzeichnisgröße"
  },
  {
    "command": "top",
    "description": "Überwachen Sie Echtzeitprozesse"
  },
  {
    "command": "ps",
    "description": "Liste der aktiven Prozesse"
  },
  {
    "command": "kill",
    "description": "Beenden Sie einen Prozess"
  },
  {
    "command": "ssh",
    "description": "Sichere Remote-Verbindung"
  },
  {
    "command": "scp",
    "description": "Kopieren Sie Dateien über SSH"
  },
  {
    "command": "ln",
    "description": "Erstellen Sie Links zu Dateien"
  },
  {
    "command": "head",
    "description": "Erste Zeilen einer Datei"
  },
  {
    "command": "tail",
    "description": "Letzte Zeilen einer Datei"
  },
  {
    "command": "wc",
    "description": "Zählen Sie Zeilen, Wörter, Bytes"
  },
  {
    "command": "sort",
    "description": "Textzeilen sortieren"
  },
  {
    "command": "mount",
    "description": "Mounten Sie ein Dateisystem"
  },
  {
    "command": "umount",
    "description": "Hängen Sie ein Dateisystem aus"
  },
  {
    "command": "awk",
    "description": "Text spaltenweise verarbeiten"
  },
  {
    "command": "sed",
    "description": "Text-Stream-Editor"
  },
  {
    "command": "xargs",
    "description": "Konstruiert Argumente aus stdin"
  },
  {
    "command": "crontab",
    "description": "Planen Sie regelmäßige Aufgaben"
  },
  {
    "command": "iptables",
    "description": "Konfigurieren Sie die Linux-Firewall"
  },
  {
    "command": "rsync",
    "description": "Remote-Dateien synchronisieren"
  },
  {
    "command": "cut",
    "description": "Extrahieren Sie Spalten aus Text"
  },
  {
    "command": "tr",
    "description": "Zeichen übersetzen/löschen"
  },
  {
    "command": "tee",
    "description": "Ausgabe in Datei und Standardausgabe"
  },
  {
    "command": "useradd",
    "description": "Fügt einen Benutzer hinzu"
  },
  {
    "command": "passwd",
    "description": "Benutzerpasswort ändern"
  },
  {
    "command": "groupadd",
    "description": "Erstellen Sie eine neue Gruppe"
  },
  {
    "command": "netstat",
    "description": "Statistiken zur Netzwerkverbindung"
  },
  {
    "command": "ifconfig",
    "description": "Netzwerkschnittstelle konfigurieren"
  },
  {
    "command": "ping",
    "description": "Testen Sie die Netzwerkkonnektivität"
  },
  {
    "command": "wget",
    "description": "Laden Sie Dateien von der URL herunter"
  },
  {
    "command": "curl",
    "description": "Übertragen Sie Daten von der URL"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "Zeigt den Inhalt des aktuellen Verzeichnisses an",
    "answer": "ls",
    "hints": [
      "Ein 2-Buchstaben-Befehl",
      "Beginnt mit „l“"
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Wechseln Sie in das Home-Verzeichnis des Benutzers",
    "answer": "cd ~",
    "hints": [
      "CD verwenden...",
      "Das ~-Symbol steht für Zuhause"
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Aktuelles Verzeichnis anzeigen (absoluter Pfad)",
    "answer": "pwd",
    "hints": [
      "Drucken funktioniert...",
      "3 Buchstaben"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Erstellen Sie ein Verzeichnis mit dem Namen „Projekt“.",
    "answer": "mkdir progetto",
    "hints": [
      "Verzeichnis erstellen...",
      "mkdir + Name"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Zeigt den Inhalt der Datei /etc/hostname an",
    "answer": "cat /etc/hostname",
    "hints": [
      "mitCATenate...",
      "ch + Pfad"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Zeigt die aktuelle Benutzer-ID an",
    "answer": "id",
    "hints": [
      "Ein sehr kurzer Befehl",
      "2 Buchstaben"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Erstellen Sie eine leere Datei mit dem Namen test.txt",
    "answer": "touch test.txt",
    "hints": [
      "Es ist keine Katze...",
      "Berühren Sie + Name"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Zeigt die ersten 10 Zeilen einer log.txt-Datei an",
    "answer": "head log.txt",
    "hints": [
      "Das Gegenteil von „Schwanz“",
      "Kopf + Datei"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Zeigen Sie das ls-Befehlshandbuch an",
    "answer": "man ls",
    "hints": [
      "Handbuch...",
      "Mann + Befehl"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Löschen Sie die obsolete.txt-Datei",
    "answer": "rm obsoleto.txt",
    "hints": [
      "Entfernen...",
      "rm + Name"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Kopieren Sie die Datei config.txt nach backup.txt",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "Kopie...",
      "CP-Quelle Ziel"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Befehlsverlauf anzeigen",
    "answer": "history",
    "hints": [
      "Die GESCHICHTE der Befehle",
      "7 Buchstaben"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Suchen Sie in der Syslog-Datei nach dem Wort „error“.",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "Globaler regulärer Ausdruck...",
      "grep-Musterdatei"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Machen Sie das hello.sh-Skript ausführbar",
    "answer": "chmod +x hello.sh",
    "hints": [
      "Modus ändern...",
      "chmod + etwas"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Erstellen Sie ein tar.gz-Archiv des Ordners docs/",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "tar -c...",
      "c=erstelle z=gzip f=Datei"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Zeigt den belegten Speicherplatz in lesbarem Format an",
    "answer": "df -h",
    "hints": [
      "Festplattenfrei...",
      "df + Flags"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Zählen Sie die Zeilen in der Datei /etc/passwd",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "Wortanzahl...",
      "wc -l"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Zeigt laufende Prozesse in Echtzeit an",
    "answer": "top",
    "hints": [
      "3 Buchstaben",
      "Ein Systemmonitor"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Stellen Sie über SSH eine Verbindung zum Host 192.168.1.10 her",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "Sichere Shell...",
      "ssh + Adresse"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Ändern Sie den Dateieigentümer in den Benutzer „admin“",
    "answer": "chown admin file",
    "hints": [
      "Besitzer wechseln...",
      "chown-Benutzerdatei"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Zeigt die Größe des Verzeichnisses /var/log an",
    "answer": "du -sh /var/log",
    "hints": [
      "Festplattennutzung...",
      "du -sh"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Verfolgen Sie die Datei /var/log/syslog in Echtzeit",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "Schwanz mit einer Fahne...",
      "f = folgen"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Erstellen Sie einen symbolischen Link von /etc/hosts in /tmp/",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "ln mit einer Fahne...",
      "-s = symbolisch"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Suchen Sie im PATH nach dem Befehl ifconfig",
    "answer": "which ifconfig",
    "hints": [
      "Welche ifconfig...",
      "welcher + Befehl"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Finden Sie alle .log-Dateien in /var, die größer als 10 MB sind",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "find + -name + -size",
      "M = Megabyte"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Sortieren Sie die Datei data.txt in umgekehrter numerischer Reihenfolge",
    "answer": "sort -rn data.txt",
    "hints": [
      "Sortieren -r = umgekehrt, -n = numerisch",
      "sortieren + markieren"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Nur das erste Feld von /etc/passwd (Benutzername) anzeigen",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "Ausschneiden mit Trennzeichen:...",
      "Schnitt -d: -f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Planen Sie täglich um 3:00 Uhr einen Cronjob",
    "answer": "0 3 * * *",
    "hints": [
      "Minute Stunde Tag Monat Woche_Tag",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Ersetzen Sie „foo“ durch „bar“ in einer Datei mit sed",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i \"s/alt/neu/g\"",
      "Stream-Editor"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Zeigt aktive Netzwerkverbindungen an",
    "answer": "ss -tuln",
    "hints": [
      "Socket-Statistiken...",
      "SS + Flagge"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Extrahieren Sie die zweite durch Leerzeichen getrennte Spalte mit awk",
    "answer": "awk '{print $2}'",
    "hints": [
      "awk drucken...",
      "$2 = zweite Spalte"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Zeigt die Netzwerk-Routing-Tabelle an",
    "answer": "ip route",
    "hints": [
      "IP ...",
      "Route/Routing-Tabelle"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Vom Prozess mit PID 1234 geöffnete Dateien anzeigen",
    "answer": "lsof -p 1234",
    "hints": [
      "Geöffnete Dateien auflisten...",
      "lsof + Flags"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Starten Sie den Nginx-Dienst mit systemd neu",
    "answer": "systemctl restart nginx",
    "hints": [
      "systemctl...",
      "Neustart + Dienstname"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Benutzer „mario“ zur Gruppe „sudo“ hinzufügen",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "Benutzermod...",
      "-aG = Gruppe anhängen"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "Der Befehl „ls“ zeigt Dateien im aktuellen Verzeichnis an.",
    "answer": true,
    "explanation": "Richtig! ls (list) listet Dateien und Verzeichnisse auf.",
    "difficulty": 1
  },
  {
    "text": "/etc enthält Systemkonfigurationsdateien.",
    "answer": true,
    "explanation": "Richtig! /etc ist das Standardverzeichnis für Konfigurationen.",
    "difficulty": 1
  },
  {
    "text": "Der Befehl chmod ändert den Eigentümer einer Datei.",
    "answer": false,
    "explanation": "chmod ändert Berechtigungen. chown wechselt den Besitzer.",
    "difficulty": 1
  },
  {
    "text": "Android verwendet den Linux-Kernel.",
    "answer": true,
    "explanation": "Richtig! Android verwendet einen von Google modifizierten Linux-Kernel.",
    "difficulty": 1
  },
  {
    "text": "root hat immer UID 0.",
    "answer": true,
    "explanation": "Richtig! Der Root-Benutzer hat auf allen Unix/Linux-Systemen immer die UID 0.",
    "difficulty": 1
  },
  {
    "text": "Die Pipe (|) schreibt die Ausgabe in eine Datei.",
    "answer": false,
    "explanation": "Die Pipe leitet die Ausgabe an die nächste weiter. > schreibt in eine Datei.",
    "difficulty": 1
  },
  {
    "text": "Ubuntu basiert auf Debian.",
    "answer": true,
    "explanation": "Richtig! Ubuntu leitet sich von Debian ab.",
    "difficulty": 1
  },
  {
    "text": "Das ~-Symbol gibt das Verzeichnis /tmp an.",
    "answer": false,
    "explanation": "~ gibt das Home-Verzeichnis des Benutzers an, nicht /tmp.",
    "difficulty": 1
  },
  {
    "text": "Bash ist die Standard-Shell in den meisten Linux-Distributionen.",
    "answer": true,
    "explanation": "Richtig! Bash (Bourne Again Shell) ist die Standard-Shell.",
    "difficulty": 1
  },
  {
    "text": "Das #-Zeichen in einem Bash-Skript weist auf einen Kommentar hin.",
    "answer": true,
    "explanation": "Richtig! Zeilen, die mit # beginnen, sind Kommentare in der Bash.",
    "difficulty": 1
  },
  {
    "text": "Die Tab-Taste vervollständigt Befehle und Dateinamen automatisch.",
    "answer": true,
    "explanation": "Richtig! Die automatische Vervollständigung von Tabs ist eine Kernfunktion der Shell.",
    "difficulty": 1
  },
  {
    "text": "Das Verzeichnis /home enthält das Zuhause des Root-Benutzers.",
    "answer": false,
    "explanation": "Das Root-Home ist /root. /home enthält die Häuser normaler Benutzer.",
    "difficulty": 1
  },
  {
    "text": "Mit der GPL-Lizenz können Sie abgeleiteten Code proprietär machen.",
    "answer": false,
    "explanation": "Die GPL (Copyleft) zwingt Derivate dazu, die gleiche Lizenz beizubehalten.",
    "difficulty": 2
  },
  {
    "text": "Die MIT-Lizenz ist eine permissive Lizenz.",
    "answer": true,
    "explanation": "MIT ist sehr freizügig: Es erlaubt nahezu jede Nutzung.",
    "difficulty": 2
  },
  {
    "text": "SSH verwendet standardmäßig Port 443.",
    "answer": false,
    "explanation": "SSH verwendet Port 22. Port 443 ist für HTTPS.",
    "difficulty": 2
  },
  {
    "text": "Der Schebang #!/bin/bash muss in der ersten Zeile des Skripts stehen.",
    "answer": true,
    "explanation": "Richtig! Der Schebang teilt dem System mit, welchen Interpreter es verwenden soll.",
    "difficulty": 2
  },
  {
    "text": "RAID 1 erstellt eine Spiegelkopie der Daten.",
    "answer": true,
    "explanation": "Richtig! RAID 1 dupliziert Daten auf zwei Festplatten.",
    "difficulty": 2
  },
  {
    "text": "DNS übersetzt Domänennamen in IP-Adressen.",
    "answer": true,
    "explanation": "Richtig! DNS löst Namen in IPs auf.",
    "difficulty": 2
  },
  {
    "text": "Der Befehl „find“ sucht nach Text in Dateien.",
    "answer": false,
    "explanation": "find sucht nach Dateien im Dateisystem. grep sucht nach Text in Dateien.",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow ist für alle Benutzer lesbar.",
    "answer": false,
    "explanation": "/etc/shadow ist nur für Root lesbar. Enthält gehashte Passwörter.",
    "difficulty": 2
  },
  {
    "text": "Der Befehl „export“ stellt untergeordneten Prozessen eine Variable zur Verfügung.",
    "answer": true,
    "explanation": "Richtig! export exportiert die Variable als Umgebungsvariable.",
    "difficulty": 2
  },
  {
    "text": "Die Datei /etc/passwd enthält Benutzerkennwörter im Klartext.",
    "answer": false,
    "explanation": "/etc/passwd enthält keine echten Passwörter mehr. Sie liegen als Hashes in /etc/shadow.",
    "difficulty": 2
  },
  {
    "text": "Der Glob * entspricht auch versteckten Dateien (beginnend mit einem Punkt).",
    "answer": false,
    "explanation": "Der Glob * umfasst keine Dateien, die mit einem Punkt beginnen. Sie benötigen Optionen wie dotglob.",
    "difficulty": 2
  },
  {
    "text": "NFS ist ein Protokoll zum Teilen von Dateien zwischen Unix/Linux-Systemen.",
    "answer": true,
    "explanation": "Richtig! NFS (Network File System) teilt Dateien über ein Netzwerk zwischen Unix-Systemen.",
    "difficulty": 2
  },
  {
    "text": "Der Befehl „cat“ kann mehrere Dateien verketten.",
    "answer": true,
    "explanation": "Richtig! cat (verketten) fügt den Inhalt mehrerer Dateien zusammen: cat file1 file2.",
    "difficulty": 2
  },
  {
    "text": "apt ist der von Fedora verwendete Paketmanager.",
    "answer": false,
    "explanation": "Fedora verwendet dnf (oder yum). apt ist für Debian/Ubuntu.",
    "difficulty": 2
  },
  {
    "text": "Linux ist ein vollständiges Betriebssystem.",
    "answer": false,
    "explanation": "Linux ist nur der Kernel. GNU/Linux ist das vollständige Betriebssystem.",
    "difficulty": 3
  },
  {
    "text": "Ein Hardlink kann auf ein Verzeichnis verweisen.",
    "answer": false,
    "explanation": "Hardlinks können nicht auf Verzeichnisse verweisen (um Schleifen zu vermeiden).",
    "difficulty": 3
  },
  {
    "text": "Der Befehl tar -czf extrahiert ein Archiv.",
    "answer": false,
    "explanation": "-czf erstellt ein gzip-Archiv. Zum Extrahieren verwenden Sie -xzf.",
    "difficulty": 3
  },
  {
    "text": "$1 in einem Bash-Skript gibt das erste Argument an.",
    "answer": true,
    "explanation": "Richtig! $1 = erstes Argument, $2 = zweites usw.",
    "difficulty": 3
  },
  {
    "text": "Symbolische Links überleben das Löschen des Ziels.",
    "answer": false,
    "explanation": "Wenn Sie das Ziel löschen, wird der Symlink „defekt“.",
    "difficulty": 3
  },
  {
    "text": "SIGKILL (9) kann vom Prozess abgefangen werden.",
    "answer": false,
    "explanation": "SIGKILL kann nicht abgefangen werden. Sofort beenden.",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 ist ein Bereich privater IPs.",
    "answer": true,
    "explanation": "Richtig! Es ist einer von drei privaten Bereichen, die in RFC 1918 definiert sind.",
    "difficulty": 3
  },
  {
    "text": "Das ext4-Dateisystem unterstützt Journale.",
    "answer": true,
    "explanation": "Richtig! ext4 ist ein Journaling-Dateisystem.",
    "difficulty": 3
  },
  {
    "text": "Der Befehl „nice“ ändert die Priorität eines Prozesses.",
    "answer": true,
    "explanation": "Richtig! nice legt die Planungspriorität fest.",
    "difficulty": 3
  },
  {
    "text": "TCP ist ein verbindungsloses Protokoll.",
    "answer": false,
    "explanation": "TCP ist verbindungsorientiert. UDP ist verbindungslos.",
    "difficulty": 3
  },
  {
    "text": "Der Befehl „crontab -e“ ändert die geplanten Jobs des Benutzers.",
    "answer": true,
    "explanation": "Richtig! crontab -e öffnet den Cron-Job-Editor des Benutzers.",
    "difficulty": 3
  },
  {
    "text": "Ein Prozess im Zombie-Zustand verbraucht viel CPU.",
    "answer": false,
    "explanation": "Ein Zombie-Prozess wurde beendet, aber der übergeordnete Prozess hat seinen Exit-Status nicht gelesen. Es verbraucht keine Ressourcen.",
    "difficulty": 3
  },
  {
    "text": "/dev/null verwirft alles, was an es gesendet wird.",
    "answer": true,
    "explanation": "Richtig! /dev/null ist das „schwarze Loch“ von Linux: Es verwirft alle Daten.",
    "difficulty": 3
  },
  {
    "text": "Die Datei /etc/fstab definiert Dateisysteme, die beim Booten automatisch gemountet werden.",
    "answer": true,
    "explanation": "Richtig! fstab (Dateisystemtabelle) enthält Automount-Informationen.",
    "difficulty": 3
  },
  {
    "text": "Der Befehl „df“ zeigt die Größe einer einzelnen Datei an.",
    "answer": false,
    "explanation": "df zeigt den Speicherplatz des Dateisystems an. Für Dateigrößen verwenden Sie du oder ls -l.",
    "difficulty": 3
  },
  {
    "text": "systemd ist das Init-System, das von den meisten modernen Distributionen verwendet wird.",
    "answer": true,
    "explanation": "Richtig! systemd hat SysVinit in den meisten Distributionen ersetzt.",
    "difficulty": 3
  },
  {
    "text": "Die Datei ~/.bash_history enthält vom Benutzer eingegebene Befehle.",
    "answer": true,
    "explanation": "Richtig! Der Verlauf der Bash-Befehle wird in ~/.bash_history gespeichert.",
    "difficulty": 3
  },
  {
    "text": "Der Befehl „grep -r“ durchsucht Verzeichnisse rekursiv.",
    "answer": true,
    "explanation": "Richtig! grep -r (oder -R) sucht nach Mustern in allen Dateien im Verzeichnis und in den Unterverzeichnissen.",
    "difficulty": 3
  },
  {
    "text": "Das Sticky-Bit verhindert, dass Benutzer die Dateien anderer Personen in freigegebenen Verzeichnissen löschen.",
    "answer": true,
    "explanation": "Richtig! Das Sticky-Bit (t) in /tmp verhindert, dass Benutzer die Dateien anderer Personen löschen.",
    "difficulty": 3
  }
];