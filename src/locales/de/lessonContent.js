export const lessonContent = {
  "1-1": {
    "comic": {
      "title": "Die Geburt von Linux 🐧",
      "panels": [
        {
          "emoji": "🏛️",
          "text": "1969 – Unix, ein revolutionäres Betriebssystem, wird in den AT&T-Labors geboren ..."
        },
        {
          "emoji": "👨‍💻",
          "text": "1991 – Ein junger finnischer Student, Linus Torvalds, beginnt mit der Entwicklung eines kostenlosen Kernels ..."
        },
        {
          "emoji": "🐧",
          "text": "„Ich mache ein kostenloses Betriebssystem, nur ein Hobby …“ – Der Beitrag, der alles verändert hat!"
        },
        {
          "emoji": "🌍",
          "text": "Heute ist Linux überall: Server, Cloud, Smartphones (Android), IoT, Supercomputer!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Verbreitungsfamilien",
        "items": [
          "Debian → Ubuntu, Mint",
          "Red Hat → RHEL, Fedora, CentOS",
          "SUSE → SLES, openSUSE"
        ]
      },
      {
        "title": "Paketmanager",
        "items": [
          "Debian: dpkg, apt (.deb)",
          "Red Hat: rpm, yum, dnf (.rpm)",
          "SUSE: rpm, zypper (.rpm)"
        ]
      },
      {
        "title": "Eingebettete Systeme",
        "items": [
          "Android = modifizierter Linux-Kernel",
          "Raspberry Pi + Raspbian",
          "Linux in 90 % der öffentlichen Cloud"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /etc/os-release",
      "output": "NAME=\"Ubuntu\"\nVERSION=\"22.04 LTS\"\nID=ubuntu\nID_LIKE=debian"
    }
  },
  "1-2": {
    "comic": {
      "title": "Die Welt der Open-Source-Apps 📦",
      "panels": [
        {
          "emoji": "📝",
          "text": "LibreOffice: Writer, Calc, Impress – die kostenlose Suite, die Microsoft Office herausfordert!"
        },
        {
          "emoji": "🌐",
          "text": "Firefox und Chromium: kostenlose und leistungsstarke Webbrowser."
        },
        {
          "emoji": "🖥️",
          "text": "Apache und Nginx: die Webserver, die das Internet zum Laufen bringen!"
        },
        {
          "emoji": "💻",
          "text": "C, Java, Python, Bash: die Sprachen, die Linux zum Leben erwecken."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop-Apps",
        "items": [
          "LibreOffice, GIMP, Blender, VLC, Audacity"
        ]
      },
      {
        "title": "App-Server",
        "items": [
          "Apache, Nginx (Web)",
          "MariaDB, PostgreSQL (Datenbank)",
          "Samba, NFS (Filesharing)"
        ]
      },
      {
        "title": "Sprachen",
        "items": [
          "Kompiliert: C, Java",
          "Interpretiert: Python, Perl, JavaScript, Bash"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ apt suche libreoffice",
      "output": "libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor"
    }
  },
  "1-3": {
    "comic": {
      "title": "Die 4 Freiheiten der Software 🔓",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "Freiheit 0: Nutzen Sie das Programm für jeden Zweck!"
        },
        {
          "emoji": "1️⃣",
          "text": "Freiheit 1: Studieren Sie, wie es funktioniert, und ändern Sie es!"
        },
        {
          "emoji": "2️⃣",
          "text": "Freiheit 2: Kopien an andere weitergeben!"
        },
        {
          "emoji": "3️⃣",
          "text": "Freiheit 3: Verteilen Sie Ihre modifizierten Versionen!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Copyleft-Lizenzen",
        "items": [
          "GPL: Abgeleiteter Code muss GPL bleiben",
          "LGPL: Ermöglicht proprietäres Verknüpfen",
          "AGPL: Erweitert GPL auf SaaS"
        ]
      },
      {
        "title": "Freizügige Lizenzen",
        "items": [
          "MIT: Sehr kurz und nachsichtig",
          "BSD: Ähnlich wie MIT",
          "Apache 2.0: Patenterteilung"
        ]
      },
      {
        "title": "Open Source für Unternehmen",
        "items": [
          "Support (Red Hat)",
          "Doppellizenz",
          "SaaS, Zertifizierungen"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ head -5 /usr/share/common-licenses/GPL-3",
      "output": "GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation"
    }
  },
  "1-4": {
    "comic": {
      "title": "Datenschutz und digitale Sicherheit 🔒",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "GNOME oder KDE? Wählen Sie Ihre Desktop-Umgebung!"
        },
        {
          "emoji": "🍪",
          "text": "Seien Sie vorsichtig mit Cookies von Drittanbietern: Sie verfolgen Sie überall!"
        },
        {
          "emoji": "🔒",
          "text": "HTTPS = HTTP + TLS. Suchen Sie in Ihrem Browser nach dem Vorhängeschloss!"
        },
        {
          "emoji": "🔑",
          "text": "GnuPG: Asymmetrische Kryptographie. Öffentlicher Schlüssel zum Verschlüsseln, privater Schlüssel zum Entschlüsseln."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop-Umgebung",
        "items": [
          "GNOME (GTK) – Einfachheit",
          "KDE (Qt) – Anpassung",
          "XFCE, LXDE – Leicht"
        ]
      },
      {
        "title": "Privatsphäre",
        "items": [
          "Cookies von Drittanbietern = Tracking",
          "DNT ≠ Datenschutzgarantie",
          "Privates Surfen ≠ Anonymität"
        ]
      },
      {
        "title": "Kryptographie",
        "items": [
          "TLS/SSL für Verbindungen",
          "GnuPG für Dateien/E-Mail",
          "dm-crypt/LUKS für Festplatten"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gpg --list-keys",
      "output": "pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>"
    }
  },
  "2-1": {
    "comic": {
      "title": "Willkommen bei Shell! 💻",
      "panels": [
        {
          "emoji": "⌨️",
          "text": "Die Shell ist Ihr Fenster zum System. Befehle schreiben, Ergebnisse erzielen!"
        },
        {
          "emoji": "🐚",
          "text": "Bash = Bourne Again Shell. Die am häufigsten verwendete Shell unter Linux!"
        },
        {
          "emoji": "💲",
          "text": "Die $-Eingabeaufforderung weist auf einen normalen Benutzer hin. Das # steht für root – seien Sie vorsichtig!"
        },
        {
          "emoji": "🔤",
          "text": "Zitat: „Doppel“ erweitert $-Variablen, „Einzel“ nehmen alles wörtlich."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Shell-Typen",
        "items": [
          "bash – Standard",
          "zsh – erweitert (macOS)",
          "Fisch – benutzerfreundlich",
          "sh – POSIX-Basis"
        ]
      },
      {
        "title": "Grundlegende Befehle",
        "items": [
          "pwd – aktuelles Verzeichnis",
          "whoami – aktueller Benutzer",
          "Hostname – Maschinenname",
          "uname -a – Systeminformationen"
        ]
      },
      {
        "title": "Zitieren",
        "items": [
          "„doppelt“ → erweitert $VAR",
          "'Singles' → wörtlich",
          "\\backslash → escape singolo"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo „Hallo, ich bin $(whoami) auf $(hostname)“",
      "output": "Ciao, sono studente su linux-pc"
    }
  },
  "2-2": {
    "comic": {
      "title": "Variablen: Shell-Speicher 🧠",
      "panels": [
        {
          "emoji": "📦",
          "text": "Variablen sind Container, die Werte speichern: NAME=\"John\""
        },
        {
          "emoji": "🌐",
          "text": "Umgebungsvariablen sind global. PATH teilt der Shell mit, wo sie nach Befehlen suchen soll!"
        },
        {
          "emoji": "📤",
          "text": "Export macht eine lokale Variable für untergeordnete Prozesse zugänglich."
        },
        {
          "emoji": "🔍",
          "text": "env zeigt alle Umgebungsvariablen. echo $HOME dein Zuhause!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Lokale Variablen",
        "items": [
          "NAME=\"Wert\" (keine Leerzeichen!)",
          "echo $NAME zum Lesen",
          "NAME zum Löschen aufheben"
        ]
      },
      {
        "title": "Umgebungsvariablen",
        "items": [
          "PATH – Befehlspfade",
          "HOME – persönliches Verzeichnis",
          "BENUTZER – Benutzername",
          "LANG – Systemsprache"
        ]
      },
      {
        "title": "Beharrlichkeit",
        "items": [
          "~/.bashrc – interaktive Anmeldung",
          "~/.profile – Erstanmeldung",
          "/etc/environment – ​​global"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo $PATH",
      "output": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
  "2-3": {
    "comic": {
      "title": "Helfen! Mann und Info 📚",
      "panels": [
        {
          "emoji": "📖",
          "text": "Der Mann ist dein bester Freund! man ls erzählt dir alles über ls."
        },
        {
          "emoji": "🔢",
          "text": "Die Abschnitte des Mannes: 1=Benutzerbefehle, 5=Konfigurationsdatei, 8=Administratorbefehle."
        },
        {
          "emoji": "🔎",
          "text": "Apropos Suchbefehle nach Beschreibung: Apropos „Dateien kopieren“"
        },
        {
          "emoji": "📁",
          "text": "find sucht nach Dateien im Dateisystem. „locate“ ist schneller, verwendet aber eine Datenbank."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Dokumentation",
        "items": [
          "man-Befehl – ​​vollständiges Handbuch",
          "Befehlsinfo – GNU-Format",
          "--help-Befehl – ​​kurze Hilfe",
          "Apropos Stichwort – Suche"
        ]
      },
      {
        "title": "Abschnitte Mann",
        "items": [
          "1 – Benutzerbefehle",
          "5 – Dateiformate",
          "8 – Sysadmin-Befehle"
        ]
      },
      {
        "title": "Dateien suchen",
        "items": [
          "find / -name „*.txt“",
          "d-Name-Protokolle finden / -type",
          "Dateinamen suchen (Datenbank)",
          "welcher Befehl (im PATH)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$man -k „Dateien kopieren“",
      "output": "cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool"
    }
  },
  "2-4": {
    "comic": {
      "title": "Der Dateisystembaum 🌳",
      "panels": [
        {
          "emoji": "/",
          "text": "Alles beginnt mit der Wurzel /. Der Baum wächst nach unten!"
        },
        {
          "emoji": "📂",
          "text": "/home – Ihre persönlichen Sachen. /etc – Systemkonfiguration."
        },
        {
          "emoji": "💾",
          "text": "/var – variable Daten (Protokoll, E-Mail). /tmp – temporäre Dateien."
        },
        {
          "emoji": "⚙️",
          "text": "/bin und /sbin – wichtige Befehle. /usr – installierte Programme."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Wichtige Verzeichnisse",
        "items": [
          "/bin – grundlegende Befehle",
          "/etc – Konfiguration",
          "/home – Benutzer",
          "/var – variable Daten"
        ]
      },
      {
        "title": "Navigation",
        "items": [
          "cd /path – Richtung ändern",
          "ls -la – detaillierte Liste",
          "pwd – wo sind sie?",
          ". (aktuell) .. (Vater)"
        ]
      },
      {
        "title": "Dateiverwaltung",
        "items": [
          "cp, mv, rm – kopieren, verschieben, entfernen",
          "mkdir -p – Verzeichnisse erstellen",
          "berühren – leere Datei erstellen",
          "Globbing: * ? [ABC]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ls/",
      "output": "bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var"
    }
  },
  "3-1": {
    "comic": {
      "title": "Komprimieren und archivieren! 📦",
      "panels": [
        {
          "emoji": "🗜️",
          "text": "tar = Bandarchiv. Gruppieren Sie mehrere Dateien in einem Archiv!"
        },
        {
          "emoji": "💨",
          "text": "gzip → .gz (schnell). bzip2 → .bz2 (komprimiert stärker). xz → .xz (komprimiert besser!)"
        },
        {
          "emoji": "📋",
          "text": "tar -czf = Erstellen + gzip + Datei. Das Zaubertrio!"
        },
        {
          "emoji": "📂",
          "text": "tar -xzf = eXtract + gzip + Datei. Alles entpacken!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Algorithmen",
        "items": [
          "gzip (.gz) – schnell, gut",
          "bzip2 (.bz2) – langsamer, besser",
          "xz (.xz) – sehr langsam, ausgezeichnet"
        ]
      },
      {
        "title": "Tar-Befehle",
        "items": [
          "tar -czf arch.tar.gz dir/",
          "tar -cjf arch.tar.bz2 dir/",
          "tar -xzf arch.tar.gz",
          "tar -tf arch.tar.gz (Liste)"
        ]
      },
      {
        "title": "Einzelne Dateien",
        "items": [
          "gzip-Datei → file.gz",
          "gunzip file.gz → Datei",
          "bzip2 / bunzip2",
          "xz / unxz"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tar -czf backup.tar.gz /home/user/docs/",
      "output": ""
    }
  },
  "3-2": {
    "comic": {
      "title": "Pipes und Weiterleitungen: der Datenfluss 🔀",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "stdin (0) = Eingabe. stdout (1) = Ausgabe. stderr (2) = Fehler."
        },
        {
          "emoji": "➡️",
          "text": "> schreibt in eine Datei (überschreibt). >> hängt am Ende."
        },
        {
          "emoji": "🔗",
          "text": "| (Pipe) verbindet die Ausgabe eines Befehls mit der Eingabe des nächsten!"
        },
        {
          "emoji": "🔇",
          "text": "2>/dev/null – sendet Fehler in das „schwarze Loch“ von Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Dateideskriptoren",
        "items": [
          "0 = stdin (Tastatur)",
          "1 = stdout (Bildschirm)",
          "2 = stderr (Fehler)"
        ]
      },
      {
        "title": "Umleiten",
        "items": [
          "> Datei (überschreiben)",
          ">> Datei (anhängen)",
          "2> Fehler.log",
          "&> all.log (stdout+stderr)"
        ]
      },
      {
        "title": "Pipes & Befehle",
        "items": [
          "cmd1 | cmd2 (Pipe)",
          "T-Stück-Datei (T-Splitter)",
          "xargs (stdin → Argumente)",
          "cmd1 && cmd2 (wenn ok)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /var/log/syslog | grep-Fehler | wc -l",
      "output": "42"
    }
  },
  "3-3": {
    "comic": {
      "title": "Grep und die Superhelden des Textes 🦸",
      "panels": [
        {
          "emoji": "🔎",
          "text": "grep sucht nach Mustern im Text. Der Kommandozeilen-Detektiv!"
        },
        {
          "emoji": "✂️",
          "text": "Schnitt schneidet Spalten. sortieren sortieren. uniq entfernt Duplikate."
        },
        {
          "emoji": "📊",
          "text": "wc zählt Zeilen (-l), Wörter (-w) und Zeichen (-c)."
        },
        {
          "emoji": "🌟",
          "text": "Regex: ^ Zeilenanfang, $ Ende, . beliebig, * wiederholen, [abc] eingestellt."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "grep",
        "items": [
          "grep-Musterdatei",
          "grep -i (Groß- und Kleinschreibung wird nicht beachtet)",
          "grep -r (rekursiv)",
          "grep -v (umgekehrte Übereinstimmung)"
        ]
      },
      {
        "title": "Handhabung",
        "items": [
          "cut -d: -f1 (Feld 1)",
          "sort -n (numerisch)",
          "uniq -c (Anzahl)",
          "Kopf/Schwanz -n 5"
        ]
      },
      {
        "title": "Grundlegende Regex",
        "items": [
          "^ Zeilenanfang",
          "$ Ende der Zeile",
          ". irgendein Zeichen",
          "* Null oder mehr",
          "[a-z]-Bereich"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep -i \"error\" /var/log/syslog | Schwanz -5",
      "output": "Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting"
    }
  },
  "3-4": {
    "comic": {
      "title": "Bash-Scripting: Automatisieren Sie alles! 🤖",
      "panels": [
        {
          "emoji": "📜",
          "text": "#!/bin/bash – der Krach! Es teilt dem System mit: „Verwenden Sie Bash für dieses Skript!“"
        },
        {
          "emoji": "🔄",
          "text": "for, while, if/then/else – die Konstrukte zur Steuerung des Flusses."
        },
        {
          "emoji": "📥",
          "text": "$1 = erstes Argument, $# = wie viele, $@ = alle. Die Macht der Parameter!"
        },
        {
          "emoji": "✅",
          "text": "Exit 0 = Erfolg. Ausgang 1 = Fehler. Jeder Befehl hat einen Exit-Code!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Skriptstruktur",
        "items": [
          "#!/bin/bash (shebang)",
          "chmod +x script.sh",
          "./script.sh zum Ausführen"
        ]
      },
      {
        "title": "Spezielle Variablen",
        "items": [
          "$0 – Skriptname",
          "$1, $2... – Argumente",
          "$# – Anzahl der Argumente",
          "$? – Exit-Code letzter Befehl"
        ]
      },
      {
        "title": "Konstrukte",
        "items": [
          "if [ cond ]; dann...fi",
          "für mich in der Liste; tun...fertig",
          "while [ cond ]; tun...fertig",
          "case $var im Muster)...esac"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ Katze hallo.sh",
      "output": "#!/bin/bash\necho \"Ciao, $1!\"\necho \"Oggi è $(date)\"\nexit 0"
    }
  },
  "4-1": {
    "comic": {
      "title": "Wo läuft Linux? Überall! 🌐",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "Desktop: Ubuntu, Fedora, Mint – Linux für alle!"
        },
        {
          "emoji": "🏢",
          "text": "Unternehmen: RHEL, SLES – Support, Zertifizierungen, SLAs!"
        },
        {
          "emoji": "☁️",
          "text": "Cloud: 90 % der Webserver laufen unter Linux. AWS, Azure, GCP love it!"
        },
        {
          "emoji": "📱",
          "text": "Mobile und IoT: Android = Linux! Smart-TVs, Autos, Drohnen ... alles Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop vs. Server",
        "items": [
          "Desktop: GUI, Multimedia",
          "Server: Headless, 24/7-Dienste",
          "Unternehmen: LTS-Unterstützung"
        ]
      },
      {
        "title": "Cloud & Virtualisierung",
        "items": [
          "KVM/QEMU – Virtualisierung",
          "Docker – Container",
          "Kubernetes – Orchestrierung",
          "IaaS, PaaS, SaaS"
        ]
      },
      {
        "title": "Zertifizierungen",
        "items": [
          "LPI Linux Essentials",
          "LPIC-1 (Administratorbasis)",
          "LPIC-2 (Administrator erweitert)",
          "RHCSA, RHCE (Red Hat)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ uname -a",
      "output": "Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
    }
  },
  "4-2": {
    "comic": {
      "title": "Hardware: Eisen unter Linux ⚙️",
      "panels": [
        {
          "emoji": "🧠",
          "text": "CPU, RAM, Festplatte, Netzwerkkarte – Linux sieht alles in /proc und /sys!"
        },
        {
          "emoji": "💽",
          "text": "HDD = mechanisch, langsam. SSD = Flash, schnell. NVMe = superschnell!"
        },
        {
          "emoji": "🔒",
          "text": "RAID 0 = Geschwindigkeit. RAID 1 = Sicherheit. RAID 5 = Gleichgewicht."
        },
        {
          "emoji": "🖨️",
          "text": "Hot-Plug-Peripheriegeräte: USB, Thunderbolt. Der Kernel erkennt sie sofort!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Komponenten",
        "items": [
          "CPU: lscpu",
          "RAM: frei -h",
          "Datenträger: lsblk, df -h",
          "PCI: lspci, USB: lsusb"
        ]
      },
      {
        "title": "Lagerung",
        "items": [
          "HDD – magnetische Platten",
          "SSD – NAND-Flash-Speicher",
          "NVMe – direkter PCIe-Bus",
          "RAID – Redundanz/Leistung"
        ]
      },
      {
        "title": "RAID-Level",
        "items": [
          "RAID 0 – Stripe (kein Backup)",
          "RAID 1 – Spiegelung (Kopie)",
          "RAID 5 – Stripe + Parität",
          "RAID 10 – Spiegel + Stripe"
        ]
      }
    ],
    "terminal": {
      "prompt": "$lsblk",
      "output": "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /"
    }
  },
  "4-3": {
    "comic": {
      "title": "Kernel, Prozesse und Dämonen 👻",
      "panels": [
        {
          "emoji": "🎯",
          "text": "Der Kernel ist das Herzstück von Linux. Verwaltet CPU, RAM, I/O, Netzwerk."
        },
        {
          "emoji": "🌱",
          "text": "systemd = PID 1, das übergeordnete Element aller Prozesse. Verwaltet Boot!"
        },
        {
          "emoji": "👻",
          "text": "Dämonen = Hintergrundprozesse. Endend mit „d“: sshd, httpd, crond."
        },
        {
          "emoji": "💀",
          "text": "kill -9 PID = die ultimative Waffe! Beenden Sie jeden Prozess."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Boot & Kernel",
        "items": [
          "BIOS/UEFI → Bootloader",
          "GRUB → Kernel laden",
          "Kernel → Root mounten",
          "systemd → Dienste starten"
        ]
      },
      {
        "title": "Prozesse",
        "items": [
          "ps aux – Prozessliste",
          "top/htop – Echtzeitmonitor",
          "bg/fg – Hintergrund/Vordergrund",
          "& – im Hintergrund starten"
        ]
      },
      {
        "title": "Signale",
        "items": [
          "SIGTERM (15) – endet sauber",
          "SIGKILL (9) – erzwungener Abschluss",
          "SIGHUP (1) – Konfiguration neu laden",
          "SIGSTOP (19) – aussetzen"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ps aux | Kopf -5",
      "output": "USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox"
    }
  },
  "4-4": {
    "comic": {
      "title": "Netzwerken: Linux im Netz 🌐",
      "panels": [
        {
          "emoji": "📡",
          "text": "IP, Subnetzmaske, Gateway – die Koordinaten Ihrer Maschine im Netzwerk!"
        },
        {
          "emoji": "🔤",
          "text": "DNS übersetzt Namen in IPs. google.com → 142.250.180.14"
        },
        {
          "emoji": "🔐",
          "text": "SSH (Port 22) = sicherer Fernzugriff. Die Haustür des Systemadministrators!"
        },
        {
          "emoji": "🌐",
          "text": "HTTP(80), HTTPS(443), FTP(21), SMTP(25) – die Ports, über die das Internet läuft!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Konfiguration",
        "items": [
          "IP-Adresse – IP anzeigen",
          "IP-Route – Route anzeigen",
          "/etc/resolv.conf – DNS",
          "/etc/hosts – lokale Namen"
        ]
      },
      {
        "title": "Private IPs",
        "items": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "IPv6: fc00::/7 (ULA)"
        ]
      },
      {
        "title": "Gemeinsame Türen",
        "items": [
          "22 – SSH",
          "80 – HTTP",
          "443 – HTTPS",
          "53 – DNS"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ IP-Adresse anzeigen eth0",
      "output": "inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link"
    }
  },
  "5-1": {
    "comic": {
      "title": "Root: der Linux-Superheld 🦸",
      "panels": [
        {
          "emoji": "👑",
          "text": "root = UID 0. Kann ALLES. Mit großer Macht, großer Verantwortung!"
        },
        {
          "emoji": "🔑",
          "text": "sudo = „Super User DO“. Führen Sie einen Befehl als Root mit IHREM Passwort aus."
        },
        {
          "emoji": "⚠️",
          "text": "Arbeiten Sie niemals ständig als Root! Verwenden Sie sudo nur bei Bedarf."
        },
        {
          "emoji": "📋",
          "text": "/etc/sudoers definiert, wer sudo für welche Befehle verwenden kann."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Benutzer",
        "items": [
          "root = UID 0 (Superuser)",
          "Normale Benutzer: UID ≥ 1000",
          "Systembenutzer: UID 1-999",
          "niemand = UID 65534"
        ]
      },
      {
        "title": "Befehle",
        "items": [
          "up – (Benutzer wechseln)",
          "sudo-Befehl (als Root ausführen)",
          "whoami (wer bin ich?)",
          "id (UID, GID, Gruppen)"
        ]
      },
      {
        "title": "Sicherheit",
        "items": [
          "Prinzip der geringsten Privilegien",
          "sudo > su (verfolgbar)",
          "/etc/sudoers (visudo)",
          "Protokoll: /var/log/auth.log"
        ]
      }
    ],
    "terminal": {
      "prompt": "$id",
      "output": "uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)"
    }
  },
  "5-2": {
    "comic": {
      "title": "Benutzer und Gruppen: die Linux-Registrierung 👥",
      "panels": [
        {
          "emoji": "📒",
          "text": "/etc/passwd – die Registrierung aller Benutzer. Name, UID, Zuhause, Shell."
        },
        {
          "emoji": "🔒",
          "text": "/etc/shadow – verschlüsselte Passwörter. Nur root kann es lesen!"
        },
        {
          "emoji": "👥",
          "text": "/etc/group – die Gruppen. Jeder Benutzer hat eine primäre Gruppe und kann Teil anderer sein."
        },
        {
          "emoji": "🛠️",
          "text": "useradd, usermod, userdel – die Tools zum Verwalten der Registrierung!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Schlüsseldatei",
        "items": [
          "/etc/passwd – Benutzerinformationen",
          "/etc/shadow – gehashtes Passwort",
          "/etc/group – Gruppen",
          "/etc/skel – Startseite der Vorlage"
        ]
      },
      {
        "title": "Benutzerverwaltung",
        "items": [
          "useradd -m Benutzer (erstellen)",
          "usermod -aG Benutzergruppe",
          "userdel -r Benutzer (löschen)",
          "passwd Benutzer (Passwort)"
        ]
      },
      {
        "title": "Passwortformat",
        "items": [
          "Benutzer:x:UID:GID:info:home:shell",
          "x → Schattenpasswort",
          "UID 0 → root",
          "/sbin/nologin → kein Login"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep student /etc/passwd",
      "output": "studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash"
    }
  },
  "5-3": {
    "comic": {
      "title": "Berechtigungen: Wer kann was tun? 🔐",
      "panels": [
        {
          "emoji": "📊",
          "text": "r=lesen(4) w=schreiben(2) x=ausführen(1). Drei Sätze: Eigentümer, Gruppe, Andere."
        },
        {
          "emoji": "🔢",
          "text": "chmod 755 = rwxr-xr-x. Der Besitzer macht alles, die anderen lesen."
        },
        {
          "emoji": "✏️",
          "text": "chmod u+x = Ausführung zum Besitzer hinzufügen. Symbolische Notation!"
        },
        {
          "emoji": "⚡",
          "text": "SUID, SGID, Sticky Bit – Sonderberechtigungen für Sonderfälle!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Grundlegende Berechtigungen",
        "items": [
          "r (lesen) = 4",
          "w (schreiben) = 2",
          "x (ausführen) = 1",
          "--- = 0, rwx = 7"
        ]
      },
      {
        "title": "Befehle",
        "items": [
          "chmod 644-Datei (oktal)",
          "chmod u+x-Datei (symbolisch)",
          "chown user:group-Datei",
          "chgrp-Dateigruppe"
        ]
      },
      {
        "title": "Sonderangebote",
        "items": [
          "SUID (4xxx) – als Eigentümer ausführen",
          "SGID (2xxx) – Gruppe erben",
          "Sticky (1xxx) – schützt /tmp",
          "umask 022 – Standard 755"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ls -la /etc/passwd /tmp",
      "output": "-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp"
    }
  },
  "5-4": {
    "comic": {
      "title": "Link: Verknüpfungen im Dateisystem 🔗",
      "panels": [
        {
          "emoji": "🔗",
          "text": "Harter Link: zwei Namen für dieselbe Datei (Inode). Nicht zu unterscheiden!"
        },
        {
          "emoji": "➡️",
          "text": "Symbolischer Link: eine Abkürzung. Zeigt auf einen Pfad, nicht auf einen Inode."
        },
        {
          "emoji": "💔",
          "text": "Wenn Sie das Ziel eines Symlinks löschen, wird dieser „kaputt“. Hardlink überlebt!"
        },
        {
          "emoji": "📁",
          "text": "Symlinks können Dateisysteme durchqueren. Hardlinks sind es nicht."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Harte Links",
        "items": [
          "LN-Datei-Hardlink",
          "Gleicher Inode",
          "Dateisysteme werden nicht durchquert",
          "Keine Verzeichnislinks"
        ]
      },
      {
        "title": "Symbolische Links",
        "items": [
          "ln -s Ziel-Symlink",
          "Anderer Inode",
          "Dateisystem durchqueren",
          "Kann Verzeichnisse verknüpfen"
        ]
      },
      {
        "title": "Vergleich",
        "items": [
          "Hart: robust, begrenzt",
          "Sym: flexibel, zerbrechlich",
          "ls -li Inode anzeigen",
          "Readlink Ziel anzeigen"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ln -s /etc/passwd link_passwd && ls -l link_passwd",
      "output": "lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd"
    }
  }
};
