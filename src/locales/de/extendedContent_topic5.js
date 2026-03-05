export const topic5Extended = {
  "5-1": {
    "title": "Sicherheit und Benutzertypen",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "👑",
        "text": "Der Root-Benutzer – Der Superuser"
      },
      {
        "type": "paragraph",
        "text": "Der Root-Benutzer (UID 0) hat uneingeschränkten Zugriff auf das System. Es kann jede Datei lesen, schreiben und löschen, jeden Prozess beenden und jede Konfiguration ändern. Aus diesem Grund sollten Sie niemals standardmäßig als Root arbeiten."
      },
      {
        "type": "table",
        "headers": [
          "Benutzertyp",
          "UID",
          "Umfang",
          "Login?"
        ],
        "rows": [
          [
            "Wurzel",
            "0",
            "Komplette Systemadministration",
            "Nur wenn nötig"
          ],
          [
            "Normale Benutzer",
            "≥ 1000",
            "Menschliche Benutzer mit persönlichen Konten",
            "Ja, mit eigener Shell"
          ],
          [
            "Systembenutzer",
            "1-999",
            "Dienste und Daemons (www-data, mysql)",
            "Nein (/sbin/nologin)"
          ],
          [
            "niemand",
            "65534",
            "Prozesse mit den geringsten Privilegien",
            "NEIN"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "su vs sudo – Zwei Ansätze zur Sicherheit"
      },
      {
        "type": "comparison",
        "left": {
          "title": "ein (Benutzer wechseln)",
          "items": [
            "Benutzer komplett wechseln",
            "Erfordert ROOT-Passwort",
            "su - = vollständige Anmeldung (Root-Umgebung)",
            "Kein detailliertes Befehlsprotokoll",
            "Weniger sicher: Sie müssen Root-Passwörter teilen"
          ]
        },
        "right": {
          "title": "sudo (Super User DO)",
          "items": [
            "Führen Sie EINEN Befehl als Root aus",
            "Erfordert IHR Passwort",
            "Jeder Befehl wird protokolliert",
            "Granulare Kontrolle (wer kann was tun)",
            "Sicherer: Niemand kennt das Root-Passwort"
          ]
        }
      },
      {
        "type": "code",
        "title": "su vs sudo im Grunde",
        "prompt": "# su: Root werden (fragt nach dem ROOT-Passwort)\n$ hoch -\nPasswort: [Root-Passwort]\n#whoami\nWurzel\n\n# sudo: Führen Sie einen Befehl als Root aus (fragt nach IHREM Passwort)\n$ sudo apt-Update\n[sudo] Passwort für Mario: [Marios Passwort]\n\n# Sehen Sie, wer Sudo verwenden kann\n$ sudo -l # Ihre Berechtigungen\n$ cat /etc/sudoers # Konfigurationsdatei (visudo verwenden!)",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Verwenden Sie immer visudo!",
        "content": "/etc/sudoers sollte NUR mit dem Befehl visudo bearbeitet werden, der die Syntax vor dem Speichern überprüft. Ein Fehler in sudoers kann den Zugriff auf das System blockieren!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛡️",
        "text": "Prinzip der geringsten Privilegien"
      },
      {
        "type": "paragraph",
        "text": "Das Prinzip der geringsten Rechte ist die goldene Sicherheitsregel: Jeder Benutzer und Prozess darf NUR über die Berechtigungen verfügen, die zur Ausführung seiner Aufgabe unbedingt erforderlich sind. Mehr nicht."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Non lavorare come root",
            "desc": "Usa sudo solo quando serve, poi torna al tuo utente"
          },
          {
            "term": "Servizi dedicati",
            "desc": "Ogni servizio gira con il proprio utente (www-data, mysql)"
          },
          {
            "term": "sudo granulare",
            "desc": "In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo"
          },
          {
            "term": "Audit trail",
            "desc": "sudo logga tutto in /var/log/auth.log — tracciabilità completa"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die LPI-Prüfung fragt nach dem Unterschied zwischen su und sudo, dem Prinzip der geringsten Rechte und wo sich die Authentifizierungsprotokolle befinden (/var/log/auth.log oder /var/log/secure)."
      }
    ]
  },
  "5-2": {
    "title": "Benutzer- und Gruppenverwaltung",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📒",
        "text": "Linux-Registrierungsdateien"
      },
      {
        "type": "table",
        "headers": [
          "Datei",
          "Eigentümer",
          "Berechtigungen",
          "Inhalt"
        ],
        "rows": [
          [
            "/etc/passwd",
            "Wurzel",
            "644 (für alle lesbar)",
            "Benutzerinformationen: Name, UID, GID, Home, Shell"
          ],
          [
            "/etc/shadow",
            "Wurzel",
            "640 (nur Root)",
            "Verschlüsselte Passwörter und Richtlinien"
          ],
          [
            "/etc/group",
            "Wurzel",
            "644",
            "Zusätzliche Gruppen und Mitglieder"
          ],
          [
            "/etc/gshadow",
            "Wurzel",
            "640",
            "Gruppenpasswörter (selten)"
          ],
          [
            "/etc/skel",
            "Wurzel",
            "755",
            "Vorlage für neue Home-Verzeichnisse"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Format von /etc/passwd"
      },
      {
        "type": "code",
        "title": "Anatomie einer /etc/passwd-Zeile",
        "prompt": "mario:x:1000:1000:Mario Rossi:/home/mario:/bin/bash\n  │ │ │ │ │ │ │\n  │ │ │ │ │ │ └── Login-Shell\n  │ │ │ │ │ └── Home-Verzeichnis\n  │ │ │ │ └── GECOS-Feld (Benutzerinfo)\n  │ │ │ └── GID (Primärgruppen-ID)\n  │ │ └── UID (Benutzer-ID)\n  │ └── „x“ = Passwort in /etc/shadow\n  └── Benutzername",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Warum „x“ im Passwort?",
        "content": "Früher befanden sich Passwörter in /etc/passwd (für jedermann lesbar!). Aus Sicherheitsgründen wurden sie nach /etc/shadow verschoben (nur für Root lesbar). Das „x“ zeigt an, dass sich das Passwort in der Schattendatei befindet."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Befehle zum Verwalten von Benutzern und Gruppen"
      },
      {
        "type": "table",
        "headers": [
          "Befehl",
          "Funktion",
          "Wichtige Optionen"
        ],
        "rows": [
          [
            "useradd -m Benutzer",
            "Benutzer mit Home erstellen",
            "-m Home erstellen, -s Shell, -G Gruppen"
          ],
          [
            "usermod -aG grp Benutzer",
            "Benutzer bearbeiten",
            "-aG Gruppe anhängen, -L sperren, -U entsperren"
          ],
          [
            "userdel -r Benutzer",
            "Benutzer + Zuhause löschen",
            "-r entfernt auch das Home-Verzeichnis"
          ],
          [
            "passwd-Benutzer",
            "Kennwort ändern",
            "-l sperren, -u entsperren, -e Änderung erzwingen"
          ],
          [
            "Name der Gruppe hinzufügen",
            "Gruppe erstellen",
            "-g Spezifische GID"
          ],
          [
            "Gruppe des Namens",
            "Gruppe löschen",
            "Nur wenn kein Benutzer es als primär hat"
          ],
          [
            "Gruppenbenutzer",
            "Benutzergruppen anzeigen",
            "Liste der Mitgliedergruppen"
          ],
          [
            "Benutzer-ID",
            "UID/GID/Gruppen anzeigen",
            "Vollständige Benutzerinformationen"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Workflow: Erstellen Sie einen vollständigen Benutzer",
        "prompt": "#1. Benutzer mit Home-Verzeichnis erstellen\n$ sudo useradd -m -s /bin/bash -c „Mario Rossi“ Mario\n\n#2. Legen Sie Ihr Passwort fest\n$ sudo passwd mario\n\n#3. Zu weiteren Gruppen hinzufügen\n$ sudo usermod -aG sudo,docker mario\n\n#4. Überprüfen\n$ Mario-ID\nuid=1001(mario) gid=1001(mario) groups=1001(mario),27(sudo),999(docker)\n\n$ ls -la /home/mario/\n# Enthält Dateien, die aus /etc/skel/ kopiert wurden.",
        "output": ""
      }
    ]
  },
  "5-3": {
    "title": "Dateiberechtigungen",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Das Unix-Berechtigungssystem"
      },
      {
        "type": "paragraph",
        "text": "Jede Datei und jedes Verzeichnis in Linux verfügt über drei Berechtigungssätze (Eigentümer, Gruppe, andere) und drei Arten von Berechtigungen (Lesen, Schreiben, Ausführen). Dadurch wird ein Array mit 9 Berechtigungen erstellt."
      },
      {
        "type": "table",
        "headers": [
          "Erlauben",
          "In den Akten",
          "Auf Verzeichnissen",
          "Oktalwert"
        ],
        "rows": [
          [
            "r (lesen)",
            "Lesen Sie den Inhalt",
            "Dateien auflisten (ls)",
            "4"
          ],
          [
            "w (schreiben)",
            "Bearbeiten Sie den Inhalt",
            "Dateien erstellen/löschen",
            "2"
          ],
          [
            "x (ausführen)",
            "Führen Sie es wie geplant aus",
            "Geben Sie das Verzeichnis ein (cd).",
            "1"
          ],
          [
            "- (Niemand)",
            "Kein Zugriff",
            "Kein Zugriff",
            "0"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Leseberechtigungen mit ls -l",
        "prompt": "$ ls -l /etc/passwd\n-rw-r--r-- 1 root root 2847 5. März /etc/passwd\n│├──┤├──┤├──┤\n││ │ │\n││ │ └── andere: r-- (schreibgeschützt)\n││ └── Gruppe: r-- (schreibgeschützt)\n│└── Besitzer: rw- (lesen + schreiben)\n└── Typ: - = Datei (d = Verzeichnis, l = Link)",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "Oktale vs. symbolische Notation"
      },
      {
        "type": "table",
        "headers": [
          "Oktal",
          "Symbolisch",
          "Bedeutung",
          "Typische Verwendung"
        ],
        "rows": [
          [
            "755",
            "rwxr-xr-x",
            "Besitzer macht alles, andere lesen/ausführen",
            "Skripte, Verzeichnisse"
          ],
          [
            "644",
            "rw-r--r--",
            "Besitzer liest/schreibt, andere nur lesen",
            "Textdatei, Konfiguration"
          ],
          [
            "700",
            "rwx------",
            "Nur der Eigentümer hat Zugriff",
            "Private Dateien, SSH-Schlüssel"
          ],
          [
            "600",
            "rw-------",
            "Nur der Besitzer liest/schreibt",
            "Geheime Akten"
          ],
          [
            "777",
            "rwxrwxrwx",
            "Jeder kann alles machen",
            "⚠️ NIEMALS in der Produktion verwenden!"
          ],
          [
            "750",
            "rwxr-x---",
            "Besitzer + Gruppe lesen, andere nicht",
            "Freigegebene Verzeichnisse"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚡",
        "text": "Sondergenehmigungen"
      },
      {
        "type": "table",
        "headers": [
          "Erlauben",
          "Oktal",
          "In den Akten",
          "Auf Verzeichnissen",
          "Beispiel"
        ],
        "rows": [
          [
            "SUID",
            "4xxx",
            "Mit Eigentümerberechtigungen ausführen",
            "—",
            "/usr/bin/passwd (Root-SUID)"
          ],
          [
            "SGID",
            "2xxx",
            "Mit Gruppenberechtigungen ausführen",
            "Neue Dateien erben die Gruppe",
            "Gemeinsame Projektverzeichnisse"
          ],
          [
            "Klebrige Teile",
            "1xxx",
            "—",
            "Nur der Eigentümer kann stornieren",
            "/tmp (1777 Berechtigungen)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die Prüfung fragt: ls -l zeigt Berechtigungen im symbolischen Format (rwxr-xr-x) an. chmod verwendet Oktal (755) oder symbolisch (u+x). umask 022 erzeugt 755 Berechtigungen für Verzeichnisse und 644 Berechtigungen für Dateien."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎭",
        "text": "umask – Die Maske der Berechtigungen"
      },
      {
        "type": "paragraph",
        "text": "umask definiert die Berechtigungen, die beim Erstellen einer neuen Datei oder eines neuen Verzeichnisses ENTFERNT werden. Der Standardwert für normale Benutzer ist 022."
      },
      {
        "type": "table",
        "headers": [
          "umask",
          "Dateiberechtigungen (666-Maske)",
          "Verzeichnisberechtigungen (777-Maske)"
        ],
        "rows": [
          [
            "022",
            "644 (rw-r--r--)",
            "755 (rwxr-xr-x)"
          ],
          [
            "077",
            "600 (rw-------)",
            "700 (rwx------)"
          ],
          [
            "002",
            "664 (rw-rw-r--)",
            "775 (rwxrwxr-x)"
          ]
        ]
      }
    ]
  },
  "5-4": {
    "title": "Spezielle Dateien und Links",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Harter Link vs. symbolischer Link"
      },
      {
        "type": "paragraph",
        "text": "Links sind „Verknüpfungen“ im Dateisystem. Für die LPI-Prüfung und die tägliche Arbeit mit Linux ist es wichtig, den Unterschied zwischen Hardlinks und symbolischen Links zu verstehen."
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔗 Harter Link",
          "items": [
            "Zeigen Sie direkt auf den Inode",
            "Vom Original nicht zu unterscheiden",
            "Die Datei überlebt das Löschen des Originals",
            "Es KANN KEINE Dateisysteme durchqueren",
            "Es KANN KEINE Verzeichnisse verknüpfen",
            "Gleicher Inode, Linkanzahl +1",
            "LN-Datei-Hardlink"
          ]
        },
        "right": {
          "title": "➡️ Symbolischer Link (Symlink)",
          "items": [
            "Zeigt auf einen PATH (Dateinamen)",
            "Es handelt sich um eine spezielle Datei (Typ „l“)",
            "Es wird „kaputt“, wenn das Ziel gelöscht wird",
            "Kann Dateisysteme durchqueren",
            "KANN Verzeichnisse verknüpfen",
            "Anderer Inode, Größe = Pfadlänge",
            "ln -s Ziel-Symlink"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💡",
        "text": "Was sind Inodes?"
      },
      {
        "type": "paragraph",
        "text": "Ein Inode ist eine Dateisystem-Datenstruktur, die Informationen zu einer Datei enthält: Berechtigungen, Besitzer, Größe, Zeitstempel, Datenblöcke. Der Dateiname befindet sich nicht im Inode, sondern in dem Verzeichnis, das auf den Inode verweist. Aus diesem Grund können für denselben Inode mehrere Namen (Hardlinks) existieren."
      },
      {
        "type": "diagram",
        "title": "Inode- und Linkstruktur",
        "boxes": [
          {
            "label": "Directory",
            "color": "#3b82f6",
            "children": [
              "file.txt → inode 42",
              "hardlink.txt → inode 42",
              "symlink.txt → \"file.txt\""
            ]
          },
          {
            "label": "Inode 42",
            "color": "#10b981",
            "children": [
              "Permessi: rw-r--r--",
              "Owner: mario",
              "Size: 1024 bytes",
              "Link count: 2"
            ]
          },
          {
            "label": "Blocchi Dati",
            "color": "#f59e0b",
            "children": [
              "Block 100",
              "Block 101",
              "(contenuto effettivo)"
            ]
          }
        ]
      },
      {
        "type": "code",
        "title": "Arbeiten mit Links",
        "prompt": "# Erstellen Sie einen Hardlink\n$ ln original.txt hardlink.txt\n$ ls -li # -i zeigt die Inode-Nummer an\n42 -rw-r--r-- 2 mario mario 1024 original.txt\n42 -rw-r--r-- 2 mario mario 1024 hardlink.txt\n# Gleicher Inode (42)! Linkanzahl = 2\n\n# Erstellen Sie einen symbolischen Link\n$ ln -s /etc/passwd link_passwd\n$ ls -l link_passwd\nlrwxrwxrwx 1 Mario Mario 11 link_passwd -> /etc/passwd\n# Anderer Inode, Größe = 11 (Länge „/etc/passwd“)\n\n# Das Ziel eines Symlinks finden\n$ readlink link_passwd\n/etc/passwd\n\n# Alle defekten Symlinks finden\n$ find /home -xtype l",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📁",
        "text": "Temporäre Dateien"
      },
      {
        "type": "table",
        "headers": [
          "Verzeichnisse",
          "Umfang",
          "Beharrlichkeit",
          "Notizen"
        ],
        "rows": [
          [
            "/tmp",
            "Temporäre Dateien für alle",
            "Beim Neustart gelöscht",
            "Wichtiger Punkt: Nur der Eigentümer kann seine Dateien löschen"
          ],
          [
            "/var/tmp",
            "Permanente temporäre Dateien",
            "Sie überleben den Neustart",
            "Für Daten, die zwischen Neustarts benötigt werden"
          ],
          [
            "~/.cache",
            "Benutzercache",
            "Hartnäckig",
            "Browser-Cache, Anwendungen"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die Prüfung fragt: Fester Link = gleicher Inode, durchquert kein Dateisystem, kein Verzeichnis. Symlink = anderer Inode, durchquert Dateisysteme, kann Verzeichnisse verknüpfen, kann „kaputt“ werden. ln -s erstellt einen symbolischen Link, ln ohne Flag erstellt einen festen Link."
      }
    ]
  }
};
