export const topic1Extended = {
  "1-1": {
    "title": "Entwicklung von Linux und Betriebssystemen",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏛️",
        "text": "Von den Ursprüngen: Unix und die Revolution"
      },
      {
        "type": "timeline",
        "events": [
          {
            "year": "1969",
            "title": "Unix ist geboren",
            "desc": "Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi."
          },
          {
            "year": "1983",
            "title": "GNU-Projekt",
            "desc": "Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985."
          },
          {
            "year": "1987",
            "title": "Minix",
            "desc": "Andrew Tanenbaum crea Minix per scopi didattici. Sarà l'ispirazione diretta per Linus Torvalds."
          },
          {
            "year": "1991",
            "title": "Linux!",
            "desc": "Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: \"Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU\". Nasce il kernel Linux 0.01."
          },
          {
            "year": "1992",
            "title": "GPL-Lizenz",
            "desc": "Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero."
          },
          {
            "year": "2004",
            "title": "Ubuntu",
            "desc": "Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti."
          },
          {
            "year": "Oggi",
            "title": "Linux ist überall",
            "desc": "Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo."
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Linux vs. GNU/Linux",
        "content": "Technisch gesehen ist „Linux“ nur der Kernel. Das komplette System heißt GNU/Linux, weil es die GNU-Dienstprogramme (gcc, bash, coreutils) enthält. Im allgemeinen Sprachgebrauch bezeichnet „Linux“ jedoch das gesamte Betriebssystem."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Die Verbreitungsfamilien"
      },
      {
        "type": "paragraph",
        "text": "Eine Linux-Distribution ist ein vollständiges System bestehend aus: Linux-Kernel + GNU-Dienstprogrammen + Paketmanager + ausgewählter Software + Standardkonfiguration. Es gibt Hunderte von Distributionen, die nach Abstammung und Paketmanager in „Familien“ organisiert sind."
      },
      {
        "type": "diagram",
        "title": "Stammbaum",
        "boxes": [
          {
            "label": "Debian",
            "color": "#e11d48",
            "children": [
              "Ubuntu",
              "Linux Mint",
              "Kali Linux",
              "Raspbian"
            ]
          },
          {
            "label": "Red Hat",
            "color": "#f59e0b",
            "children": [
              "RHEL",
              "Fedora",
              "CentOS Stream",
              "Rocky Linux"
            ]
          },
          {
            "label": "SUSE",
            "color": "#10b981",
            "children": [
              "SLES",
              "openSUSE Leap",
              "openSUSE Tumbleweed"
            ]
          },
          {
            "label": "Indipendenti",
            "color": "#8b5cf6",
            "children": [
              "Arch Linux",
              "Gentoo",
              "Slackware"
            ]
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Verteilung",
          "Basic",
          "Pakete",
          "Freigeben",
          "Typische Verwendung"
        ],
        "rows": [
          [
            "Ubuntu",
            "Debian",
            "apt/.deb",
            "Fest (6 Monate)",
            "Desktop, Cloud, Server"
          ],
          [
            "Fedora",
            "Roter Hut",
            "dnf / .rpm",
            "Fest (6 Monate)",
            "Entwicklung, Desktop"
          ],
          [
            "RHEL",
            "Roter Hut",
            "yum/dnf / .rpm",
            "LTS (10 Jahre)",
            "Unternehmen, Produktion"
          ],
          [
            "ArchLinux",
            "Unabhängig",
            "Pacman",
            "Rollende Veröffentlichung",
            "Erfahrene Benutzer"
          ],
          [
            "openSUSE",
            "SUSE",
            "zypper / .rpm",
            "Gemischt",
            "Desktop, Unternehmen"
          ],
          [
            "Debian",
            "Original",
            "apt/.deb",
            "Behoben (~2 Jahre)",
            "Server, Stabilität"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "In der LPI-Prüfung werden Sie gebeten, Distributionsfamilien, ihre Paketmanager (.deb vs. .rpm) und die Unterschiede zwischen fester Version (Ubuntu) und fortlaufender Version (Arch) zu erkennen."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📱",
        "text": "Linux in der Embedded- und Cloud-Welt"
      },
      {
        "type": "paragraph",
        "text": "Linux ist nicht nur für Server und Desktops geeignet. Der Linux-Kernel ist das Herz von Milliarden von Geräten: Android-Smartphones, Smart-TVs, Router, Auto-Infotainmentsysteme, IoT-Geräte, Drohnen und sogar der Perseverance-Rover auf dem Mars nutzt einen Prozessor mit Linux!"
      },
      {
        "type": "table",
        "headers": [
          "Sektor",
          "Beispiel",
          "Warum Linux?"
        ],
        "rows": [
          [
            "Smartphones",
            "Android (3+ Milliarden Geräte)",
            "Bearbeitbarer Kernel, kostenlose Lizenz"
          ],
          [
            "Wolke",
            "AWS, Azure, GCP",
            "Über 90 % der Cloud-Workloads verwenden Linux"
          ],
          [
            "Supercomputer",
            "TOP500",
            "100 % der Supercomputer im Ranking"
          ],
          [
            "IoT",
            "Raspberry Pi, Smart Home",
            "Leicht, anpassbar, kostenlos"
          ],
          [
            "Automobil",
            "Tesla, Audi",
            "Echtzeit, zuverlässig, anpassbar"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Szenario: Warum die Cloud Linux liebt",
        "text": "Stellen Sie sich vor, Sie wären CTO eines Startups. Sie müssen das Betriebssystem für 100 Server in der Cloud auswählen. Windows Server kostet etwa 500 US-Dollar pro Server und Jahr an Lizenzen. Mit Linux? Keine Lizenzkosten, volle Kontrolle, riesige Support-Community und Sie können alles mit Bash-Skripten automatisieren. Deshalb nutzen 90 % der Cloud Linux."
      }
    ]
  },
  "1-2": {
    "title": "Open-Source-Anwendungen",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Open-Source-Software für jeden Bedarf"
      },
      {
        "type": "paragraph",
        "text": "Die Open-Source-Welt bietet kostenlose und leistungsstarke Alternativen zu fast jeder kommerziellen Software. Die Kenntnis dieser Anwendungen ist für die LPI-Prüfung und für das Berufsleben mit Linux unerlässlich."
      },
      {
        "type": "table",
        "headers": [
          "Kategorie",
          "Open Source",
          "Proprietäres Äquivalent"
        ],
        "rows": [
          [
            "Bürosuiten",
            "LibreOffice",
            "Microsoft Office"
          ],
          [
            "Webbrowser",
            "Firefox, Chromium",
            "Chrome, Edge, Safari"
          ],
          [
            "Bildeditor",
            "GIMP",
            "Adobe Photoshop"
          ],
          [
            "3D-Modellierung",
            "Mixer",
            "Maya, 3ds Max"
          ],
          [
            "Video-Editor",
            "Kdenlive, OpenShot",
            "Adobe Premiere"
          ],
          [
            "Audio-Editor",
            "Kühnheit",
            "Adobe Auditions"
          ],
          [
            "E-Mail-Client",
            "Donnervogel",
            "Ausblick"
          ],
          [
            "Vektorgrafiken",
            "Inkscape",
            "Adobe Illustrator"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "Serveranwendungen"
      },
      {
        "type": "paragraph",
        "text": "Linux dominiert die Serverwelt. Open-Source-Serversoftware wickelt den Großteil des weltweiten Internetverkehrs ab."
      },
      {
        "type": "table",
        "headers": [
          "Funktion",
          "Software",
          "Beschreibung"
        ],
        "rows": [
          [
            "Webserver",
            "Apache HTTP-Server",
            "Der in der Vergangenheit am häufigsten verwendete Webserver"
          ],
          [
            "Webserver",
            "Nginx",
            "Hochleistungs-Reverse-Proxy"
          ],
          [
            "Datenbanken",
            "MariaDB / MySQL",
            "Die beliebteste relationale Datenbank"
          ],
          [
            "Datenbanken",
            "PostgreSQL",
            "Datenbank der Enterprise-Klasse"
          ],
          [
            "Dateifreigabe",
            "Samba",
            "Teilen mit Windows-Clients (SMB/CIFS)"
          ],
          [
            "Dateifreigabe",
            "NFS",
            "Native Unix/Linux-Freigabe"
          ],
          [
            "E-Mail",
            "Postfix / Taubenschlag",
            "MTA- und IMAP/POP3-Server"
          ],
          [
            "DNS",
            "BINDEN",
            "Referenz-DNS-Server"
          ],
          [
            "Container",
            "Docker",
            "Containerplattform"
          ],
          [
            "Orchestrierung",
            "Kubernetes",
            "Container-Orchestrierung im großen Maßstab"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die LPI-Prüfung erfordert Kenntnisse über die wichtigsten Open-Source-Anwendungen für Desktops und Server sowie die Fähigkeit, zwischen kompilierter (C, C++) und interpretierter (Python, Bash, JavaScript) Software zu unterscheiden."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💻",
        "text": "Programmiersprachen"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Ausgefüllt",
          "items": [
            "C / C++ – maximale Leistung",
            "In Maschinencode kompiliert",
            "Das resultierende Programm ist eine Binärdatei",
            "Sie müssen für jede Plattform neu kompilieren"
          ]
        },
        "right": {
          "title": "Interpretiert",
          "items": [
            "Python, Perl, Ruby – vielseitig",
            "Zeile für Zeile erledigt",
            "Sie benötigen einen installierten Dolmetscher",
            "Ohne Modifikationen zwischen Plattformen tragbar"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Java ist ein Sonderfall",
        "content": "Java wird in Bytecode (.class) kompiliert, der dann von der JVM (Java Virtual Machine) ausgeführt wird. Es wird weder rein kompiliert noch interpretiert."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Paketverwaltung"
      },
      {
        "type": "paragraph",
        "text": "Paketmanager sind das Herzstück der Softwarewartung unter Linux. Sie installieren, aktualisieren und entfernen Software und verwalten dabei automatisch Abhängigkeiten."
      },
      {
        "type": "table",
        "headers": [
          "Familie",
          "Format",
          "Werkzeug mit niedrigem Niveau",
          "Hochwertiges Werkzeug"
        ],
        "rows": [
          [
            "Debian/Ubuntu",
            ".deb",
            "dpkg",
            "apt / apt-get"
          ],
          [
            "Roter Hut/Fedora",
            ".rpm",
            "U/min",
            "lecker / dnf"
          ],
          [
            "SUSE",
            ".rpm",
            "U/min",
            "Zypper"
          ],
          [
            "Bogen",
            ".pkg.tar.zst",
            "Pacman",
            "Pacman"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Beispiele für die Paketverwaltung",
        "prompt": "# Debian/Ubuntu\n$ sudo apt update && sudo apt install nginx\n\n# Red Hat/Fedora\n$ sudo dnf installiere Nginx\n\n# SUSE\n$ sudo zypper Nginx installieren",
        "output": ""
      }
    ]
  },
  "1-3": {
    "title": "Open-Source-Software und Lizenzen",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗽",
        "text": "Die 4 Freiheiten freier Software"
      },
      {
        "type": "paragraph",
        "text": "Richard Stallman definierte vier Grundfreiheiten, die Software „frei“ machen (frei im Sinne von Freiheit, nicht „frei“). Diese Freiheiten sind die philosophische Grundlage der gesamten Open-Source-Bewegung."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Libertà 0",
            "desc": "Usare il programma per qualsiasi scopo, senza restrizioni"
          },
          {
            "term": "Libertà 1",
            "desc": "Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)"
          },
          {
            "term": "Libertà 2",
            "desc": "Ridistribuire copie per aiutare altri"
          },
          {
            "term": "Libertà 3",
            "desc": "Migliorare il programma e distribuire le modifiche alla community"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "„Frei“ bedeutet nicht „kostenlos“",
        "content": "„Freie Software“ bezieht sich auf FREIHEIT, nicht auf den Preis. Sie können kostenlose Software verkaufen! Der Quellcode muss verfügbar sein, Sie können jedoch eine Vergütung für die Verbreitung, den Support oder die Anpassung verlangen."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Open-Source-Lizenzen im Vergleich"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔒 Copyleft (GPL, AGPL)",
          "items": [
            "Derivate MÜSSEN dieselbe Lizenz behalten",
            "Der geänderte Code muss Open Source bleiben",
            "GPL: am häufigsten verwendet (Linux-Kernel)",
            "AGPL: erweitert Copyleft auf Web-/SaaS-Dienste",
            "LGPL: ermöglicht die Verknüpfung mit proprietärem Code"
          ]
        },
        "right": {
          "title": "🔓 Freizügig (MIT, BSD, Apache)",
          "items": [
            "Derivate können proprietär werden",
            "Einige Einschränkungen: Zitieren Sie einfach den Autor",
            "MIT: das einfachste und kürzeste",
            "BSD: Ähnlich wie MIT, akademischer Ursprung",
            "Apache 2.0: Beinhaltet Patenterteilungen"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Lizenz",
          "Typ",
          "Copyleft?",
          "Kommerzielle Nutzung",
          "Beispiel"
        ],
        "rows": [
          [
            "GPL v3",
            "Starkes Copyleft",
            "Ja",
            "Ja",
            "Linux-Kernel, GCC"
          ],
          [
            "LGPL",
            "Schwaches Copyleft",
            "Teilweise",
            "Ja",
            "glibc, Qt"
          ],
          [
            "AGPL",
            "Netzwerk-Copyleft",
            "Ja (+ SaaS)",
            "Ja",
            "MongoDB (alt)"
          ],
          [
            "MIT",
            "Freizügig",
            "NEIN",
            "Ja",
            "jQuery, Node.js"
          ],
          [
            "Apache 2.0",
            "Freizügig",
            "NEIN",
            "Ja",
            "Android, Kubernetes"
          ],
          [
            "BSD",
            "Freizügig",
            "NEIN",
            "Ja",
            "FreeBSD, Nginx"
          ],
          [
            "Creative Commons",
            "Es variiert",
            "Optional",
            "Kommt darauf an",
            "Dokumentation, Medien"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Bei der LPI-Prüfung werden Sie aufgefordert, zwischen Copyleft-Lizenzen (GPL) und permissiven Lizenzen (MIT, BSD, Apache) zu unterscheiden. Denken Sie daran: GPL = Derivate müssen GPL bleiben. MIT/BSD = Derivate können proprietär werden."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💼",
        "text": "Open-Source-Geschäftsmodelle"
      },
      {
        "type": "paragraph",
        "text": "Entgegen der landläufigen Meinung können Unternehmen mit Open Source Geld verdienen. Hier sind die wichtigsten Modelle:"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Supporto e Sottoscrizioni",
            "desc": "Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no."
          },
          {
            "term": "Dual Licensing",
            "desc": "Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft)."
          },
          {
            "term": "SaaS",
            "desc": "Offri il software come servizio cloud (GitHub, GitLab)."
          },
          {
            "term": "Open Core",
            "desc": "Core open source + funzionalità premium proprietarie."
          },
          {
            "term": "Consulenza e Formazione",
            "desc": "Certificazioni LPI, RHCSA, corsi di formazione."
          }
        ]
      },
      {
        "type": "story",
        "title": "Szenario: Red Hat – vom Startup auf 34 Milliarden US-Dollar",
        "text": "Red Hat wurde 1993 mit der Distribution von Linux in einer Box gegründet. Das Modell: Die Software ist kostenlos, Unternehmen zahlen jedoch für Support, zertifizierte Updates und rechtliche Garantien. Im Jahr 2019 erwarb IBM Red Hat für 34 Milliarden US-Dollar und bewies damit, dass Open Source einen enormen Mehrwert schaffen kann."
      }
    ]
  },
  "1-4": {
    "title": "IKT- und Linux-Kenntnisse",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Desktop-Umgebung"
      },
      {
        "type": "paragraph",
        "text": "Linux bietet mehrere Desktop-Umgebungen. Im Gegensatz zu Windows und macOS, wo es nur einen Desktop gibt, können Sie unter Linux Ihren Desktop auswählen!"
      },
      {
        "type": "table",
        "headers": [
          "Desktops",
          "Toolkits",
          "Philosophie",
          "Mindest-RAM",
          "Typische Verteilung"
        ],
        "rows": [
          [
            "GNOME",
            "GTK",
            "Einfachheit, Modernität",
            "1 GB",
            "Ubuntu, Fedora"
          ],
          [
            "KDE-Plasma",
            "Menge",
            "Vollständige Individualisierung",
            "1 GB",
            "Kubuntu, openSUSE"
          ],
          [
            "XFCE",
            "GTK",
            "Leichtigkeit, Effizienz",
            "256 MB",
            "Xubuntu, Manjaro"
          ],
          [
            "LXDE/LXQt",
            "GTK/Qt",
            "Ultraleicht",
            "128 MB",
            "Lubuntu"
          ],
          [
            "Zimt",
            "GTK",
            "Traditionell, benutzerfreundlich",
            "512 MB",
            "Linux Mint"
          ],
          [
            "KUMPEL",
            "GTK",
            "Fork von GNOME 2",
            "512 MB",
            "Ubuntu MATE"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "content": "Wenn Ihr PC alt ist, sind XFCE oder LXQt perfekt. Wenn Sie maximale Anpassung wünschen, wählen Sie KDE Plasma. Wenn Sie Einfachheit bevorzugen, ist GNOME ideal."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "Datenschutz und Online-Sicherheit"
      },
      {
        "type": "paragraph",
        "text": "Im digitalen Zeitalter ist der Schutz Ihrer Privatsphäre und Sicherheit von entscheidender Bedeutung. Linux bietet leistungsstarke Tools für den Datenschutz."
      },
      {
        "type": "table",
        "headers": [
          "Gefahr",
          "Was macht er?",
          "So schützen Sie sich"
        ],
        "rows": [
          [
            "Cookies von Drittanbietern",
            "Sie verfolgen die Navigation zwischen verschiedenen Websites",
            "Blockieren Sie sie im Browser, verwenden Sie Erweiterungen (uBlock Origin)"
          ],
          [
            "Web-Tracker",
            "Sie profilieren die Gewohnheiten des Benutzers",
            "Verwenden Sie Firefox mit erweitertem Tracking-Schutz"
          ],
          [
            "Mann in der Mitte",
            "Unverschlüsselte Daten abfangen",
            "Überprüfen Sie HTTPS (Vorhängeschloss), verwenden Sie VPN"
          ],
          [
            "Phishing",
            "Gefälschte Websites zum Diebstahl von Zugangsdaten",
            "Überprüfen Sie URLs und klicken Sie nicht auf verdächtige Links"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Privates Surfen ≠ Anonymität",
        "content": "„Inkognito-Browsing“ macht Sie NICHT anonym! Ihr ISP, Ihr Unternehmen und Ihre Websites können den Datenverkehr weiterhin sehen. Versteckt nur die lokale Geschichte. Für echte Anonymität benötigen Sie Tor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "Kryptographie"
      },
      {
        "type": "paragraph",
        "text": "Verschlüsselung ist unerlässlich, um Daten während der Übertragung und im Ruhezustand zu schützen. Linux unterstützt verschiedene Verschlüsselungsstufen."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Symmetrische Verschlüsselung",
          "items": [
            "Nur ein Schlüssel zum Verschlüsseln und Entschlüsseln",
            "Schnell, wird für große Datenmengen verwendet",
            "Problem: Wie teile ich den Schlüssel?",
            "Algorithmen: AES, ChaCha20"
          ]
        },
        "right": {
          "title": "Asymmetrische Verschlüsselung",
          "items": [
            "Zwei Schlüssel: öffentlich + privat",
            "Öffentliche Krypto, privat entschlüsselt",
            "Löst das Verteilungsproblem",
            "Algorithmen: RSA, Ed25519"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Instrument",
          "Schützt",
          "Wie es funktioniert"
        ],
        "rows": [
          [
            "TLS/SSL",
            "Webverbindungen (HTTPS)",
            "Verschlüsseln Sie den Datenverkehr zwischen Browsern und Servern"
          ],
          [
            "SSH",
            "Fernverbindungen",
            "Verschlüsselter Tunnel für die Fernverwaltung"
          ],
          [
            "GnuPG (GPG)",
            "Dateien, E-Mails, digitale Signaturen",
            "Asymmetrische Verschlüsselung, Web of Trust"
          ],
          [
            "dm-crypt/LUKS",
            "Ganzes Album",
            "Vollständige Festplattenverschlüsselung unter Linux"
          ],
          [
            "OpenVPN/WireGuard",
            "Netzwerkverkehr",
            "VPN für sichere Verbindungen"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Verschlüsseln Sie eine Datei mit GPG",
        "prompt": "# Erzeugen Sie ein Schlüsselpaar\n$ gpg --gen-key\n\n# Eine Datei für einen Empfänger verschlüsseln\n$ gpg --encrypt --recipient user@email.com file.txt\n\n# Entschlüsseln\n$ gpg --decrypt file.txt.gpg > file.txt",
        "output": ""
      }
    ]
  }
};
