export const topic4Extended = {
  "4-1": {
    "title": "Auswahl eines Betriebssystems",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Betriebssystemkategorien"
      },
      {
        "type": "paragraph",
        "text": "Die Wahl des Betriebssystems hängt vom Anwendungsfall ab. Linux bietet Lösungen für jedes Szenario, von Desktop-Workstations bis hin zu Unternehmensrechenzentren, von IoT-Geräten bis zur Cloud."
      },
      {
        "type": "table",
        "headers": [
          "Kategorie",
          "Eigenschaften",
          "Typische Verteilungen",
          "Anwendungsbeispiel"
        ],
        "rows": [
          [
            "Desktops",
            "GUI, Multimedia, Produktivität",
            "Ubuntu, Mint, Fedora",
            "Büro, Entwicklung, persönlicher Gebrauch"
          ],
          [
            "Server",
            "Headless, 24/7-Dienste, Stabilität",
            "RHEL, Ubuntu-Server, Debian",
            "Webserver, Datenbank, E-Mail"
          ],
          [
            "Unternehmen",
            "LTS-Unterstützung, Zertifizierungen, SLA",
            "RHEL, SLES",
            "Banken, Krankenhäuser, Regierungen"
          ],
          [
            "Eingebettet",
            "Leicht, spezifisch, in Echtzeit",
            "Yocto, Buildroot, Android",
            "Router, IoT, Automotive"
          ],
          [
            "Container/Cloud",
            "Minimal, unveränderlich",
            "Alpine, CoreOS, Flatcar",
            "Microservices, Kubernetes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "☁️",
        "text": "Cloud Computing und Linux"
      },
      {
        "type": "paragraph",
        "text": "Unter Cloud Computing versteht man die bedarfsgerechte Bereitstellung von IT-Ressourcen über ein Netzwerk. Linux dominiert die Cloud: Über 90 % der öffentlichen Workloads laufen auf Linux-Kerneln."
      },
      {
        "type": "table",
        "headers": [
          "Modell",
          "Du schaffst es",
          "Der Anbieter verwaltet",
          "Beispiel"
        ],
        "rows": [
          [
            "IaaS",
            "Betriebssystem, Apps, Daten",
            "Hardware, Netzwerk, Speicher",
            "AWS EC2, Azure VM"
          ],
          [
            "PaaS",
            "Apps, Daten",
            "Betriebssystem, Laufzeit, Middleware",
            "Heroku, Google App Engine"
          ],
          [
            "SaaS",
            "Nur die Daten",
            "Alles andere",
            "Gmail, Salesforce, Office 365"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏗️",
        "text": "Virtualisierung und Container"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🖥️ Virtuelle Maschine",
          "items": [
            "Emulieren Sie einen gesamten Computer",
            "Es verfügt über ein eigenes Kernel-Betriebssystem",
            "Vollständige Isolierung",
            "Schwer (GB RAM)",
            "Booten Sie in wenigen Minuten",
            "Hypervisor: KVM, VMware, VirtualBox"
          ]
        },
        "right": {
          "title": "📦 Container",
          "items": [
            "Gibt den Kernel des Hosts frei",
            "Nur App-Bibliotheken",
            "Isolierung auf Prozessebene",
            "Geringes Gewicht (MB RAM)",
            "Starten Sie in Sekundenschnelle",
            "Laufzeiten: Docker, Podman, Containerd"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Bei der LPI-Prüfung müssen Sie zwischen IaaS, PaaS und SaaS sowie zwischen Virtualisierung (VM mit Hypervisor) und Containerisierung (Docker) unterscheiden. Sie kennen KVM auch als nativen Linux-Hypervisor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "LPI-Zertifizierungspfad"
      },
      {
        "type": "diagram",
        "title": "Zertifizierungspfad",
        "boxes": [
          {
            "label": "Linux Essentials",
            "color": "#10b981",
            "children": [
              "Esame 010-160",
              "1 solo esame",
              "Nessun prerequisito"
            ]
          },
          {
            "label": "LPIC-1",
            "color": "#3b82f6",
            "children": [
              "Esami 101 + 102",
              "Sysadmin base",
              "5 anni validità"
            ]
          },
          {
            "label": "LPIC-2",
            "color": "#f59e0b",
            "children": [
              "Esami 201 + 202",
              "Sysadmin avanzato",
              "Richiede LPIC-1"
            ]
          },
          {
            "label": "LPIC-3",
            "color": "#ef4444",
            "children": [
              "Specialità: Security/Virt/HA",
              "Livello enterprise",
              "Richiede LPIC-2"
            ]
          }
        ]
      }
    ]
  },
  "4-2": {
    "title": "Computerhardware",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧠",
        "text": "Hardwarekomponenten und Linux-Befehle"
      },
      {
        "type": "paragraph",
        "text": "Linux erkennt die gesamte Hardware über virtuelle Dateien in /proc und /sys. Jede Komponente verfügt über dedizierte Befehle, um sie abzufragen."
      },
      {
        "type": "table",
        "headers": [
          "Komponente",
          "Befehl",
          "Virtuelle Datei",
          "Informationen angezeigt"
        ],
        "rows": [
          [
            "CPU",
            "lscpu",
            "/proc/cpuinfo",
            "Modell, Kern, Geschwindigkeit, Cache"
          ],
          [
            "RAM",
            "frei -h",
            "/proc/meminfo",
            "Gesamt, gebraucht, kostenlos, zum Tausch"
          ],
          [
            "Scheiben",
            "lsblk",
            "/proc/partitions",
            "Geräte, Partitionen, Mounts"
          ],
          [
            "Speicherplatz",
            "df -h",
            "/proc/mounts",
            "Verwendeter/freier Speicherplatz für das Dateisystem"
          ],
          [
            "Dir. Dimension",
            "du -sh dir/",
            "—",
            "Vom Verzeichnis belegter Speicherplatz"
          ],
          [
            "PCI",
            "lspci",
            "/proc/bus/pci",
            "Grafikkarten, Netzwerk, Controller"
          ],
          [
            "USB",
            "lsusb",
            "/proc/bus/usb",
            "Angeschlossene USB-Geräte"
          ],
          [
            "Kernel",
            "uname -a",
            "/proc/version",
            "Kernelversion und Architektur"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💽",
        "text": "Speicher: HDD vs. SSD vs. NVMe"
      },
      {
        "type": "table",
        "headers": [
          "Typ",
          "Technologie",
          "Lesegeschwindigkeit",
          "Latenz",
          "Preis/GB",
          "Dauer"
        ],
        "rows": [
          [
            "Festplatte",
            "Rotierende Magnetplatten",
            "100-200 MB/s",
            "5-10 ms",
            "0,02 €",
            "Mechanisch (Verschleiß)"
          ],
          [
            "SATA-SSD",
            "NAND-Flash, SATA-Bus",
            "500-550 MB/s",
            "0,1 ms",
            "0,08 €",
            "Elektronisch (Schreibzyklen)"
          ],
          [
            "NVMe",
            "NAND-Flash, PCIe-Bus",
            "3–7 GB/s",
            "0,02 ms",
            "0,10 €",
            "Elektronisch (schneller)"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "RAID – Redundantes Array unabhängiger Festplatten"
      },
      {
        "type": "paragraph",
        "text": "RAID kombiniert mehrere physische Festplatten, um Redundanz (Datenschutz) und/oder Leistung zu erreichen."
      },
      {
        "type": "table",
        "headers": [
          "Ebene",
          "Technik",
          "Min. Scheiben",
          "Redundanz",
          "Leistung",
          "Nutzkapazität"
        ],
        "rows": [
          [
            "RAID 0",
            "Streifen",
            "2",
            "❌ Keine",
            "⚡ Schnelles Lesen/Schreiben",
            "100 %"
          ],
          [
            "RAID 1",
            "Spiegelung",
            "2",
            "✅ 1 Scheibe",
            "⚡ Kurz gelesen",
            "50 %"
          ],
          [
            "RAID 5",
            "Striping + Parität",
            "3",
            "✅ 1 Scheibe",
            "⚡ Kurz gelesen",
            "(N-1)/Nr"
          ],
          [
            "RAID 6",
            "Streifen + 2 Krawatten",
            "4",
            "✅ 2 Scheiben",
            "⚡ Kurz gelesen",
            "(N-2)/N"
          ],
          [
            "RAID 10",
            "Spiegel + Streifen",
            "4",
            "✅ 1 pro Spiegel",
            "⚡⚡ Höchstwerte",
            "50 %"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "RAID ist KEIN Backup!",
        "content": "RAID schützt vor Hardware-Ausfällen von Festplatten, ist aber KEIN Backup! Wenn Sie eine Datei löschen, wird sie von allen RAID-Festplatten gelöscht. Beim Backup handelt es sich um eine separate Kopie Ihrer Daten."
      }
    ]
  },
  "4-3": {
    "title": "Kernel, Prozesse und Protokolle",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎯",
        "text": "Der Linux-Kernel"
      },
      {
        "type": "paragraph",
        "text": "Der Kernel ist das Herzstück des Betriebssystems. Verwaltet CPU, Speicher, E/A, Netzwerk und Geräte. Der Linux-Kernel ist monolithisch, aber modular: Sie können Module ohne Neustart laden/entladen."
      },
      {
        "type": "diagram",
        "title": "Boot-Sequenz",
        "boxes": [
          {
            "label": "1. BIOS/UEFI",
            "color": "#ef4444",
            "children": [
              "POST hardware",
              "Cerca bootloader"
            ]
          },
          {
            "label": "2. GRUB",
            "color": "#f59e0b",
            "children": [
              "Menu di boot",
              "Carica kernel"
            ]
          },
          {
            "label": "3. Kernel",
            "color": "#10b981",
            "children": [
              "Inizializza hardware",
              "Monta root filesystem"
            ]
          },
          {
            "label": "4. systemd (PID 1)",
            "color": "#3b82f6",
            "children": [
              "Avvia servizi",
              "Target multi-user"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚙️",
        "text": "Prozessmanagement"
      },
      {
        "type": "table",
        "headers": [
          "Befehl",
          "Funktion",
          "Typische Verwendung"
        ],
        "rows": [
          [
            "PS Aux",
            "Listen Sie alle Prozesse auf",
            "Übersicht über laufende Prozesse"
          ],
          [
            "oben / htop",
            "Echtzeitüberwachung",
            "Siehe Echtzeit-CPU/RAM"
          ],
          [
            "PID töten",
            "Signal an den Prozess senden",
            "Beenden Sie einen Prozess höflich"
          ],
          [
            "kill -9 PID",
            "Beendigung erzwingen (SIGKILL)",
            "Prozess blockiert und reagiert nicht"
          ],
          [
            "bg / fg",
            "Hintergrund / Vordergrund",
            "Verschieben Sie Prozesse zwischen bg und fg"
          ],
          [
            "Arbeitsplätze",
            "Liste der Hintergrundprozesse",
            "Sehen Sie, was im Hintergrund läuft"
          ],
          [
            "nohup cmd &",
            "Der Prozess überlebt die Abmeldung",
            "Befehle, die fortgesetzt werden müssen"
          ],
          [
            "pgrep-Name",
            "Finden Sie die PID anhand ihres Namens",
            "Suchen Sie nach bestimmten Prozessen"
          ],
          [
            "pkill-Name",
            "Ende mit Namen",
            "Töte mit Namen statt mit PID"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "👻",
        "text": "Unix-Signale"
      },
      {
        "type": "table",
        "headers": [
          "Signal",
          "Nummer",
          "Aktion",
          "Abfangbar?"
        ],
        "rows": [
          [
            "SIGTERM",
            "15",
            "Beenden (höflich, aufräumen)",
            "✅ Ja"
          ],
          [
            "SIGKILL",
            "9",
            "Ende (erzwungen, sofort)",
            "❌ Nein"
          ],
          [
            "SCHWEIF",
            "1",
            "Auflegen / Konfiguration neu laden",
            "✅ Ja"
          ],
          [
            "SIGNIEREN",
            "2",
            "Unterbrechen (Strg+C)",
            "✅ Ja"
          ],
          [
            "SIGSTOP",
            "19",
            "Unterbrechen Sie den Vorgang",
            "❌ Nein"
          ],
          [
            "SIGCONT",
            "18",
            "Setzen Sie den unterbrochenen Prozess fort",
            "✅ Ja"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Die LPI-Prüfung fragt nach dem Unterschied zwischen SIGTERM (15, abfangbar) und SIGKILL (9, nicht abfangbar). Verwenden Sie immer SIGTERM vor SIGKILL."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Systemprotokolle"
      },
      {
        "type": "table",
        "headers": [
          "Datei/Befehl",
          "Inhalt",
          "Format"
        ],
        "rows": [
          [
            "/var/log/syslog",
            "Allgemeines Systemprotokoll",
            "Text (rsyslog)"
          ],
          [
            "/var/log/auth.log",
            "Login, Sudo, Authentifizierung",
            "Text"
          ],
          [
            "/var/log/kern.log",
            "Kernel-Nachrichten",
            "Text"
          ],
          [
            "/var/log/dmesg",
            "Boot und Hardware",
            "Ringpufferkernel"
          ],
          [
            "Journalctl",
            "Alle Protokolle (Systemd-Journal)",
            "Binär (systemd)"
          ],
          [
            "journalctl -u nginx",
            "Protokoll eines bestimmten Dienstes",
            "Gefiltert nach Einheit"
          ],
          [
            "journalctl -f",
            "Verfolgen Sie Protokolle in Echtzeit",
            "Wie tail -f"
          ]
        ]
      }
    ]
  },
  "4-4": {
    "title": "Vernetzung",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📡",
        "text": "Grundlegende Netzwerkkonzepte"
      },
      {
        "type": "paragraph",
        "text": "Jedes Gerät im Netzwerk benötigt eine IP-Adresse, eine Subnetzmaske (um das lokale Netzwerk zu definieren), ein Gateway (um das Netzwerk zu verlassen) und einen DNS-Server (um Namen in IPs zu übersetzen)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "IPv4 – Adressen und Subnetze"
      },
      {
        "type": "paragraph",
        "text": "IPv4 verwendet 32-Bit-Adressen, dargestellt als 4 Dezimalgruppen von 0 bis 255 (z. B. 192.168.1.100)."
      },
      {
        "type": "table",
        "headers": [
          "Reichweite",
          "Typ",
          "Klasse",
          "Netzwerk/Host"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "Privat",
            "ZU",
            "16 Millionen Adressen"
          ],
          [
            "172.16.0.0/12",
            "Privat",
            "B",
            "1 Mio. Adressen"
          ],
          [
            "192.168.0.0/16",
            "Privat",
            "C",
            "65.000 Adressen"
          ],
          [
            "127.0.0.0/8",
            "Loopbacks",
            "—",
            "localhost (die Maschine selbst)"
          ],
          [
            "0.0.0.0",
            "Standardroute",
            "—",
            "Alle Adressen nicht angegeben"
          ],
          [
            "255.255.255.255",
            "Übertragen",
            "—",
            "Jeder im lokalen Netzwerk"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "CIDR-Notation",
        "content": "/24 bedeutet, dass die ersten 24 Bits der „Netzwerk“-Teil und die letzten 8 Bits der „Host“-Teil sind. 192.168.1.0/24 = Netzwerk von 192.168.1.0 bis 192.168.1.255 (256 Adressen, 254 nutzbar)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "IPv6"
      },
      {
        "type": "paragraph",
        "text": "IPv6 verwendet 128-Bit-Adressen, die hexadezimal geschrieben sind (z. B. 2001:0db8:85a3::8a2e:0370:7334). Behebt das Problem der IPv4-Erschöpfung (4 Milliarden Adressen gegenüber 340 Undezillionen)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "DNS und Ports"
      },
      {
        "type": "table",
        "headers": [
          "Bringt",
          "Protokoll",
          "Service",
          "Beschreibung"
        ],
        "rows": [
          [
            "20/21",
            "TCP",
            "FTP",
            "Dateiübertragungsprotokoll"
          ],
          [
            "22",
            "TCP",
            "SSH",
            "Sicherer Fernzugriff"
          ],
          [
            "23",
            "TCP",
            "Telnet",
            "Fernzugriff NICHT sicher"
          ],
          [
            "25",
            "TCP",
            "SMTP",
            "Ich sende E-Mails"
          ],
          [
            "53",
            "TCP/UDP",
            "DNS",
            "Namensübersetzung → IP"
          ],
          [
            "80",
            "TCP",
            "HTTP",
            "Unverschlüsseltes Web"
          ],
          [
            "110",
            "TCP",
            "POP3",
            "E-Mail-Empfang"
          ],
          [
            "143",
            "TCP",
            "IMAP",
            "Remote-E-Mail-Verwaltung"
          ],
          [
            "443",
            "TCP",
            "HTTPS",
            "Verschlüsseltes Web (TLS)"
          ],
          [
            "3306",
            "TCP",
            "MySQL",
            "MySQL/MariaDB-Datenbanken"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Netzwerkbefehle"
      },
      {
        "type": "code",
        "title": "Netzwerkdiagnosebefehle",
        "prompt": "# IP-Adressen von Schnittstellen anzeigen\n$IP-Adresse anzeigen\n\n# Zeigen Sie die Routing-Tabelle an\n$ip-Route anzeigen\n\n# Konnektivität testen\n$ping -c 4 google.com\n\n# Verfolgen Sie den Pfad von Paketen\n$ Traceroute google.com\n\n# Abhörports anzeigen\n$ss -tuln\n\n# DNS-Abfragen\n$ dig google.com\n$nslookup google.com\n\n# DNS-Konfiguration anzeigen\n$ cat /etc/resolv.conf",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Datei",
          "Funktion"
        ],
        "rows": [
          [
            "/etc/hosts",
            "Statischer Zuordnungsname → IP (Priorität vor DNS)"
          ],
          [
            "/etc/resolv.conf",
            "System-DNS-Server (Nameserver 8.8.8.8)"
          ],
          [
            "/etc/hostname",
            "Hostname der Maschine"
          ],
          [
            "/etc/nsswitch.conf",
            "Reihenfolge der Namensauflösung (Dateien → DNS)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Bei der LPI-Prüfung werden Standardports (22=SSH, 80=HTTP, 443=HTTPS, 53=DNS) und Netzwerkkonfigurationsdateien (/etc/resolv.conf, /etc/hosts) abgefragt. Kennen Sie auch den Unterschied zwischen IPv4 (32 Bit) und IPv6 (128 Bit)."
      }
    ]
  }
};
