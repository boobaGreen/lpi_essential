export const lpic2_extendedContent_de = {
  'lpic2-200-1': {
    title: 'Ressourcenmessung und -planung',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Tiefe Ressourcenanalyse' },
      { type: 'paragraph', text: 'Kapazitätsplanung bedeutet nicht nur, "auf Graphen zu schauen", sondern zu verstehen, wie das System unter Last reagiert. Sie müssen ermitteln, ob der Engpass bei der CPU, dem RAM, dem I/O-Subsystem oder dem Netzwerk liegt.' },
      { type: 'heading', level: 3, emoji: '🧠', text: 'Speicher und Swap mit vmstat' },
      { type: 'paragraph', text: 'Während `free -m` eine Momentaufnahme liefert, zeigt `vmstat` den Trend. Die Felder `si` (swap in) und `so` (swap out) sind am kritischsten: Wenn sie konstant über null liegen, "thrasht" das System, was bedeutet, dass es mehr Zeit damit verbringt, Daten auf die Festplatte auszulagern, als Code auszuführen.' },
      { type: 'code', title: 'Dynamische Überwachung', prompt: '$ vmstat 1 5', output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78910 234567    0    0     5    10  123  456  2  1 96  1  0' },
      { type: 'heading', level: 3, emoji: '💾', text: 'I/O-Analyse mit iostat' },
      { type: 'paragraph', text: 'Das Paket `sysstat` stellt `iostat` zur Verfügung. Dies ist wichtig, um zu verstehen, ob Ihre Festplatten zu langsam sind.' },
      { type: 'table', headers: ['Metrik', 'Beschreibung', 'Kritischer Schwellenwert'], rows: [
        ['%util', 'Prozentsatz der Zeit, in der das Laufwerk ausgelastet ist', '> 80% deutet auf Sättigung hin'],
        ['await', 'Durchschnittliche Wartezeit (ms) auf eine Anfrage', '> 10-20ms für mechanische Festplatten ist hoch'],
        ['svctm', 'Durchschnittliche effektive Servicezeit der Festplatte', 'Wenn nah an await: Festplatte ist okay, aber stark belastet'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Nutzen Sie `iostat -xz 1`, um nur Geräte mit Aktivität und erweiterte Statistiken zu sehen.' }
    ]
  },

  'lpic2-201-1': {
    title: 'Kernel-Komponenten und Kompilierung',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Linux Kernel-Architektur' },
      { type: 'paragraph', text: 'Der Kernel ist kein einzelner Block, sondern eine Reihe von Subsystemen, die bereit sind, Hardware, Speicher und Prozesse zu verwalten. Zu wissen, wie man ihn kompiliert, ermöglicht die Erstellung von Systemen, die für spezifische Hardware optimiert sind.' },
      { type: 'heading', level: 3, emoji: '📦', text: 'Quellcode' },
      { type: 'paragraph', text: 'Die Quellen befinden sich normalerweise in `/usr/src/linux`. Die `.config`-Datei ist das Herzstück der Anpassung: Sie enthält Tausende von Optionen, die entscheiden, was eingebunden oder ausgeschlossen wird.' },
      { type: 'table', headers: ['Make-Target', 'Beschreibung'], rows: [
        ['make menuconfig', 'Textbasierte Oberfläche (ncurses) zur Konfiguration'],
        ['make xconfig', 'Grafische Oberfläche (Qt) zur Konfiguration'],
        ['make oldconfig', 'Aktualisiert eine alte .config mit neuen Optionen'],
        ['make bzImage', 'Kompiliert das komprimierte Kernel-Image'],
        ['make modules', 'Kompiliert separate Module'],
        ['make modules_install', 'Kopiert Module nach /lib/modules/$(uname -r)'],
      ]},
      { type: 'code', title: 'Moderner Kompilierungs-Workflow', prompt: '# make bzImage\n# make modules\n# make modules_install\n# make install', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Vergessen Sie niemals `make modules_install` vor `make install` auszuführen, da der neue Kernel sonst zwar startet, aber keine Treiber findet, um den Rest des Systems zu laden!' }
    ]
  },

  'lpic2-201-2': {
    title: 'Laufzeitverwaltung und Modul-Laden',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Module: Kernel Plug-and-Play' },
      { type: 'paragraph', text: 'Module erlauben das Hinzufügen von Funktionalitäten (wie WLAN-Treiber oder Dateisysteme) ohne Neustart.' },
      { type: 'table', headers: ['Befehl', 'Funktion'], rows: [
        ['lsmod', 'Listet aktuell geladene Module auf'],
        ['insmod', 'Lädt eine spezifische .ko-Datei (ohne Abhängigkeiten zu behandeln)'],
        ['rmmod', 'Entfernt ein Modul'],
        ['modprobe', 'Empfohlene Methode: lädt/entfernt Module inkl. Abhängigkeiten'],
        ['modinfo', 'Zeigt Details, Parameter und die Lizenz eines Moduls'],
      ]},
      { type: 'code', title: 'modprobe-Beispiel', prompt: '# modinfo e1000\n# modprobe e1000\n# modprobe -r e1000', output: 'filename: /lib/modules/.../e1000.ko\nlicense: GPL\ndescription: Intel(R) PRO/1000 Network Driver' },
      { type: 'heading', level: 3, emoji: '📁', text: 'Modul-Persistenz' },
      { type: 'paragraph', text: 'Um ein Modul beim Start zu laden, fügen Sie es zu `/etc/modules` hinzu oder erstellen Sie eine Datei in `/etc/modules-load.d/`. Um Parameter zu übergeben, nutzen Sie Dateien in `/etc/modprobe.d/`.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Anpassung und Patching',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Den Kernel aktuell halten' },
      { type: 'paragraph', text: 'Oft müssen Sie nicht den gesamten neuen Kernel (GB an Daten) herunterladen, sondern nur einen "Patch" anwenden, um Fehler oder Sicherheitslücken zu beheben.' },
      { type: 'code', title: 'Einen Patch anwenden', prompt: '$ bzcat patch-5.10.x.bz2 | patch -p1', output: 'patching file Makefile\npatching file arch/x86/Makefile\n...' },
      { type: 'infobox', variant: 'exam', content: 'Die Option `-p1` im patch-Befehl wird verwendet, um die erste Verzeichnisebene im Dateipfad des Patches zu "überspringen" und an das aktuelle Verzeichnis anzupassen.' }
    ]
  },

  'lpic2-202-1': {
    title: 'Systemstart-Anpassung',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Weit mehr als ein einfacher Boot' },
      { type: 'paragraph', text: 'Zu verstehen, wie das System von BIOS/UEFI zu einem einsatzbereiten Desktop oder Server übergeht, ist fundamental für das Disaster Recovery.' },
      { type: 'heading', level: 3, emoji: '⚙️', text: 'SysVinit vs Systemd' },
      { type: 'paragraph', text: 'Obwohl Systemd dominiert, erfordert LPIC-2 weiterhin Kenntnisse über SysVinit und Runlevels. Die Hauptdatei für SysVinit ist `/etc/inittab`.' },
      { type: 'table', headers: ['Runlevel', 'Zweck'], rows: [
        ['0', 'Halt (Herunterfahren)'],
        ['1 / S', 'Single User Mode (Wartung)'],
        ['2', 'Multi-User ohne Netzwerk (oft in Debian)'],
        ['3', 'Multi-User mit Netzwerk (CLI)'],
        ['5', 'Multi-User mit Netzwerk + Grafische Oberfläche'],
        ['6', 'Reboot (Neustart)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'In Systemd werden Runlevels als "Targets" abgebildet. Beispiel: `multi-user.target` entspricht normalerweise Runlevel 3.' }
    ]
  },

  'lpic2-202-2': {
    title: 'Systemwiederherstellung und Bootloader',
    sections: [
      { type: 'heading', level: 2, emoji: '🆘', text: 'Ein kompromittiertes System retten' },
      { type: 'paragraph', text: 'Wenn der Bootloader (GRUB) beschädigt ist, startet das System nicht. Sie müssen wissen, wie Sie eine Notfall-Shell oder eine Live-CD nutzen.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'GRUB 2' },
      { type: 'code', title: 'GRUB wiederherstellen', prompt: '# grub-install /dev/sda\n# update-grub', output: 'Installing for i386-pc platform.\nInstallation finished. No error reported.' },
      { type: 'paragraph', text: 'Die generierte Konfigurationsdatei ist `/boot/grub/grub.cfg`, diese sollte jedoch niemals manuell bearbeitet werden. Nutzen Sie stattdessen `/etc/default/grub`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Alternative Bootloader',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX und ISOLINUX' },
      { type: 'paragraph', text: 'Oft genutzt für USB-Laufwerke und Live-CDs aufgrund ihrer Leichtigkeit und Einfachheit.' },
      { type: 'table', headers: ['Variante', 'Nutzung'], rows: [
        ['SYSLINUX', 'FAT-Dateisystem (USB-Sticks)'],
        ['ISOLINUX', 'ISO-9660 Standard (CD/DVD)'],
        ['EXTLINUX', 'ext2/3/4 oder btrfs Dateisystem'],
        ['PXELINUX', 'Netzwerk-Boot via TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Erweiterte Dateisystem-Operationen',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Verwaltung und Wartung' },
      { type: 'paragraph', text: 'Ein Administrator muss wissen, wie man Dateisysteme ohne Angst erstellt, überprüft und repariert.' },
      { type: 'heading', level: 3, emoji: '🔍', text: 'Überprüfung und Reparatur' },
      { type: 'code', title: 'Festplatte überprüfen (ausgehängt!)', prompt: '# fsck -y /dev/sdb1\n# dumpe2fs /dev/sdb1 | head', output: 'Filesystem volume name:   Dati\nLast mounted on:          /mnt/dati\nFilesystem revision #:    1 (dynamic)' },
      { type: 'infobox', variant: 'warning', content: 'Führen Sie `fsck` NIEMALS auf einem eingehängten Dateisystem aus: Sie riskieren unwiderrufliche Datenkorruption!' }
    ]
  },

  'lpic2-203-2': {
    title: 'Dateisystem-Wartung',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Optimierung mit tune2fs' },
      { type: 'paragraph', text: 'Sie können Parameter wie die Häufigkeit automatischer Überprüfungen oder das Volume-Label ändern, ohne neu formatieren zu müssen.' },
      { type: 'table', headers: ['Befehl', 'Effekt'], rows: [
        ['tune2fs -L "BACKUP" /dev/sdc1', 'Setzt das Label'],
        ['tune2fs -m 1 /dev/sdc1', 'Reduziert den für root reservierten Speicher auf 1%'],
        ['tune2fs -i 30d /dev/sdc1', 'Erzwungene Prüfung alle 30 Tage'],
        ['xfs_admin -L "DATA_XFS" /dev/sdd1', 'Verwaltung eines XFS-Dateisystems'],
      ]}
    ]
  },

  'lpic2-203-3': {
    title: 'Geräteverwaltung mit udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🤖', text: 'Der moderne Dirigent der Geräte' },
      { type: 'paragraph', text: 'Das System `/dev` ist heute dynamisch dank `udev`. Es erstellt Geräteknoten automatisch beim Einstecken von Hardware, basierend auf Regeln.' },
      { type: 'heading', level: 3, emoji: '📜', text: 'Die Regeln umschreiben' },
      { type: 'paragraph', text: 'Regeln befinden sich in `/etc/udev/rules.d/`. Sie erlauben tiefgehende Anpassungen.' },
      { type: 'code', title: 'Stabile Netzwerknamen vergeben', prompt: 'SUBSYSTEM=="net", ACTION=="add", ATTR{address}=="00:11:22:33:44:55", NAME="eth-admin"', output: '' }
    ]
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'Software-RAID-Konfiguration',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: 'Redundanz und Performance' },
      { type: 'paragraph', text: 'RAID (Redundant Array of Independent Disks) kombiniert mehrere physische Festplatten zu einer logischen Einheit. Unter Linux wird dies meist über das Software-RAID-Subsystem des Kernels realisiert.' },
      { type: 'table', headers: ['RAID-Level', 'Vorteil', 'Nachteil'], rows: [
        ['RAID 0 (Striping)', 'Maximale Geschwindigkeit', 'Keine Redundanz (eine defekte Platte = totaler Datenverlust)'],
        ['RAID 1 (Mirroring)', 'Hohe Ausfallsicherheit', 'Nur 50% der Gesamtkapazität nutzbar'],
        ['RAID 5 (Parity)', 'Gute Balance aus Kapazität und Sicherheit', 'Schreibzugriffe langsamer wegen Paritätsberechnung'],
        ['RAID 6 (Dual Parity)', 'Überlebt Ausfall von ZWEI Platten gleichzeitig', 'Höherer Kapazitätsverlust als bei RAID 5'],
      ]},
      { type: 'code', title: 'Ein RAID 1 Array erstellen', prompt: '# mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Vergessen Sie nicht, die Datei `/etc/mdadm/mdadm.conf` mit dem Befehl `mdadm --detail --scan` zu aktualisieren, damit das System das RAID-Array beim nächsten Booten automatisch erkennt!' }
    ]
  },

  'lpic2-204-2': {
    title: 'Logical Volume Manager (LVM)',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Flexibler Speicher statt fester Partitionen' },
      { type: 'paragraph', text: 'LVM fügt eine Abstraktionsschicht über physische Festplatten hinzu, was es ermöglicht, Partitionen (Logical Volumes) im laufenden Betrieb zu vergrößern oder über mehrere Platten zu spannen.' },
      { type: 'table', headers: ['Ebene', 'Bedeutung'], rows: [
        ['PV (Physical Volume)', 'Die physische Basis (eine Partition oder ganze Platte)'],
        ['VG (Volume Group)', 'Ein Speicherpool, der ein oder mehrere PVs zusammenfasst'],
        ['LV (Logical Volume)', 'Die "logische Partition", die in der VG erstellt wird und ein Dateisystem enthält'],
      ]},
      { type: 'code', title: 'Eine VG erweitern und ein LV vergrößern', prompt: '# vgextend mein_pool /dev/sdd1\n# lvextend -L +10G /dev/mein_pool/meine_daten\n# resize2fs /dev/mein_pool/meine_daten', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Mit dem Befehl `lvcreate -s` können Sie Snapshots erstellen – eingefrorene Momentaufnahmen eines LVs, die sich hervorragend für konsistente Backups eignen.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Speicher-Optimierung und Tuning',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Das Letzte aus der Hardware herausholen' },
      { type: 'paragraph', text: 'Hardware-Parameter und Kernel-Einstellungen beeinflussen massiv den Durchsatz und die Latenz.' },
      { type: 'table', headers: ['Tool', 'Zweck'], rows: [
        ['hdparm', 'Analyse und Einstellung von SATA/PATA-Parametern (z.B. DMA, Cache-Modus)'],
        ['sdparm', 'Das Äquivalent zu hdparm für SCSI/SAS-Geräte'],
        ['nvme-cli', 'Spezialwerkzeug zum Management und Monitoring von NVMe-Laufwerken'],
        ['fstrim', 'Wichtig für SSDs: Informiert das Laufwerk über nicht mehr genutzte Datenblöcke'],
      ]},
      { type: 'code', title: 'SSD-Performance optimieren', prompt: '# fstrim -av', output: '/: 10 GB (10737418240 bytes) trimmed' }
    ]
  },

  'lpic2-205-1': {
    title: 'IP-Konfiguration und Routing',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Wegebau im Netzwerk' },
      { type: 'paragraph', text: 'Ein Administrator muss in der Lage sein, Netzwerkschnittstellen manuell zu konfigurieren und Routing-Tabellen zu steuern.' },
      { type: 'table', headers: ['iproute2 Befehl', 'Zweck'], rows: [
        ['ip addr show', 'Anzeige der IP-Adressen pro Interface'],
        ['ip link set eth0 up', 'Aktiviert eine Netzwerkschnittstelle'],
        ['ip route show', 'Anzeige der aktuellen Routing-Tabelle'],
        ['ip route add default via 192.168.1.1', 'Setzt das Standard-Gateway'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Damit ein Linux-System als Router fungieren kann, muss das IP-Forwarding im Kernel aktiviert sein: `sysctl -w net.ipv4.ip_forward=1`.' }
    ]
  },

  'lpic2-205-2': {
    title: 'Bonding und Bridging',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Schnittstellen bündeln und verbinden' },
      { type: 'paragraph', text: 'bonding integriert mehrere physische Karten in ein logisches Interface für mehr Bandbreite oder Redundanz. bridging verbindet Netzwerksegmente auf Layer 2.' },
      { type: 'table', headers: ['Technik', 'Einsatzgebiet'], rows: [
        ['Bonding (Mode 1)', 'Active-Backup: Sorgt für Redundanz (High Availability)'],
        ['Bonding (Mode 4)', '802.3ad: Nutzt LACP für maximale Performance (Link Aggregation)'],
        ['Bridging', 'Wird häufig genutzt, um virtuelle Maschinen direkt in ein physisches LAN zu bringen'],
      ]}
    ]
  },

  'lpic2-205-3': {
    title: 'Netzwerk-Fehlersuche',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Dem Problem auf der Spur' },
      { type: 'paragraph', text: 'Wenn das Netz streikt, helfen Diagnosewerkzeuge, den Fehler einzugrenzen.' },
      { type: 'table', headers: ['Befehl', 'Nutzen'], rows: [
        ['tcpdump', 'Der Standard-Sniffer zum Analysieren von Paketen auf dem Draht'],
        ['nc (netcat)', 'Das Schweizer Taschenmesser: Testet, ob ein Port offen ist oder schickt Daten direkt'],
        ['ss / netstat', 'Zeigt alle offenen Sockets und welche Programme sie nutzen'],
        ['tracepath / traceroute', 'Zeigt den Weg der Pakete durch verschiedene Router bis zum Ziel'],
      ]},
      { type: 'code', title: 'Verkehr auf Port 80 mitschneiden', prompt: '# tcpdump -i eth0 port 80', output: '12:34:56.789 IP client > server.http: Flags [S], seq 12345...' }
    ]
  },

  'lpic2-206-1': {
    title: 'Software aus Quellen kompilieren',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Selber bauen statt nur konsumieren' },
      { type: 'paragraph', text: 'Manchmal benötigt man aktuellere Software oder spezielle Optionen, die die Distribution nicht bietet.' },
      { type: 'table', headers: ['Schritt', 'Bedeutung'], rows: [
        ['./configure', 'Überprüft das System auf Abhängigkeiten und erstellt das Makefile'],
        ['make', 'Kompiliert den Quellcode in ausführbare Binärdateien'],
        ['sudo make install', 'Kopiert die Binärdateien und Handbücher in die Systemordner'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Nutzen Sie Tools wie `checkinstall` anstelle von `make install`, um automatisch ein .deb oder .rpm Paket zu erstellen. So lässt sich die Software später sauber wieder deinstallieren!' }
    ]
  },

  'lpic2-206-2': {
    title: 'Backup und Synchronisation mit rsync',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Sicherung ist Überleben' },
      { type: 'paragraph', text: 'Ein Admin, der keine Backups hat, lebt gefährlich. `rsync` ist das ideale Werkzeug für lokale und entfernte Backups.' },
      { type: 'code', title: 'Inkrementelles Backup über SSH', prompt: '$ rsync -avz --delete -e ssh /daten/ user@backup-server:/backup/', output: 'sending incremental file list\ndaten/archiv.tar.gz\n\nsent 5.6M bytes  received 2.1k bytes  1.2M bytes/sec' },
      { type: 'table', headers: ['Option', 'Funktion'], rows: [
        ['-a (archive)', 'Kombiniert viele wichtige Optionen (Rechte, Zeitstempel, Links bleiben erhalten)'],
        ['-v (verbose)', 'Zeigt Fortschritt und Dateinamen an'],
        ['-z (compress)', 'Komprimiert Daten wärend der Übertragung'],
        ['--delete', 'Löscht Dateien am Ziel, die an der Quelle nicht mehr existieren'],
      ]}
    ]
  },

  'lpic2-206-3': {
    title: 'Nutzer-Information und Kommunikation',
    sections: [
      { type: 'heading', level: 2, emoji: '📢', text: 'Sagen Sie Bescheid!' },
      { type: 'paragraph', text: 'Bevor Sie ein System rebooten oder Wartungsarbeiten durchführen, müssen Sie die Benutzer informieren.' },
      { type: 'paragraph', text: 'Die Datei `/etc/motd` (Message Of The Day) wird Benutzern nach dem Login präsentiert. `/etc/issue` wird vor dem Login am Terminal angezeigt.' },
      { type: 'code', title: 'Sofortige Warnung an alle angemeldeten User', prompt: '# wall "Das System wird in 10 Minuten wegen Hardware-Wartung neu gestartet!"', output: '' }
    ]
  },

  'lpic2-207-1': {
    title: 'DNS-Server BIND9 Grundkonfiguration',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Das Adressbuch des Internets' },
      { type: 'paragraph', text: 'BIND (Berkeley Internet Name Domain) ist der am weitesten verbreitete DNS-Server. Er kann als reine Cache-Instanz, als Weiterleiter (Forwarder) oder als autoritativer Server für eine Domain agieren.' },
      { type: 'table', headers: ['Modus', 'Funktion'], rows: [
        ['Caching Only', 'Speichert Antworten auf Anfragen lokal zwischen, um die Geschwindigkeit für das lokale Netz zu erhöhen'],
        ['Forwarder', 'Leitet Anfragen, die er nicht selbst beantworten kann, an andere DNS-Server weiter'],
        ['Authoritative', 'Die primäre Quelle der Wahrheit für eine bestimmte Domain'],
      ]},
      { type: 'code', title: 'Konfiguration auf Syntaxfehler prüfen', prompt: '# named-checkconf /etc/bind/named.conf', output: '' }
    ]
  },

  'lpic2-207-2': {
    title: 'DNS-Zonen und Einträge verwalten',
    sections: [
      { type: 'heading', level: 2, emoji: '🗺️', text: 'Wer ist wer im Netz' },
      { type: 'paragraph', text: 'Zonen teilen den Namensraum auf. In der Forward-Zone werden Namen zu IPs aufgelöst, in der Reverse-Zone IPs zu Namen.' },
      { type: 'table', headers: ['Eintragstyp', 'Bedeutung'], rows: [
        ['SOA (Start of Authority)', 'Metadaten der Zone (Admin-Mail, Seriennummer, Refresh-Zeiten)'],
        ['NS (Name Server)', 'Gibt die zuständigen DNS-Server für diese Zone an'],
        ['A / AAAA', 'Verknüpft Hostnamen mit IPv4 bzw. IPv6 Adressen'],
        ['PTR (Pointer)', 'Wird für Reverse-DNS genutzt (IP -> Name)'],
        ['MX (Mail Exchange)', 'Bestimmt, welche Server E-Mails für die Domain entgegennehmen'],
        ['CNAME', 'Ein Alias für einen anderen Namen (darf nicht auf einen anderen CNAME zeigen)'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Erhöhen Sie bei jeder Änderung an einer Zonendatei die Seriennummer (Serial) im SOA-Eintrag, damit Slave-Server die Änderung bemerken und synchronisieren!' }
    ]
  },

  'lpic2-207-3': {
    title: 'DNS-Sicherheit und DNSSEC',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Gegen Manipulation schützen' },
      { type: 'paragraph', text: 'Klassisches DNS bietet keinen Schutz gegen Fälschungen. DNSSEC fügt digitale Signaturen hinzu, um sicherzustellen, dass die Daten vom rechtmäßigen Absender stammen.' },
      { type: 'table', headers: ['Technik', 'Zweck'], rows: [
        ['DNSSEC', 'Signiert Ressource Records kryptografisch'],
        ['TSIG', 'Sichert den Zonenaustausch zwischen Master und Slave per Shared Secret'],
        ['Chroot', 'Isoliert den named-Prozess in einem eigenen Verzeichnisbaum zur Schadensbegrenzung bei Einbrüchen'],
      ]}
    ]
  },

  'lpic2-208-1': {
    title: 'Apache HTTP Server Grundlagen',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Der Klassiker unter den Webservern' },
      { type: 'paragraph', text: 'Apache zeichnet sich durch seine Stabilität und seine modulare Architektur aus.' },
      { type: 'table', headers: ['Konzept', 'Bedeutung'], rows: [
        ['VirtualHost', 'Ermöglicht das Hosten mehrerer Websites mit unterschiedlichen Namen auf nur einer IP-Adresse'],
        ['DocumentRoot', 'Das Verzeichnis im Dateisystem, in dem die Web-Dateien liegen'],
        ['.htaccess', 'Ermöglicht verzeichnisbasierte Konfigurationsänderungen durch Benutzer'],
        ['MPM', 'Multi-Processing-Module (prefork, worker, event) regeln, wie Anfragen verarbeitet werden'],
      ]},
      { type: 'code', title: 'Eine neue Seite unter Debian/Ubuntu aktivieren', prompt: '# a2ensite meine-seite.conf\n# systemctl reload apache2', output: '' }
    ]
  },

  'lpic2-208-2': {
    title: 'Webserver-Sicherheit und HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Verschlüsselt surfen' },
      { type: 'paragraph', text: 'HTTPS ist heute Standard. Es schützt die Privatsphäre der Nutzer und verhindert Manipulationen während der Übertragung.' },
      { type: 'table', headers: ['SSL-Direktive', 'Zweck'], rows: [
        ['SSLEngine on', 'Aktiviert das SSL/TLS-Modul für diesen VirtualHost'],
        ['SSLCertificateFile', 'Pfad zum öffentlichen Zertifikat des Servers'],
        ['SSLCertificateKeyFile', 'Pfad zum geheimen privaten Schlüssel'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Nutzen Sie `certbot` von Let\'s Encrypt, um kostenlose SSL-Zertifikate vollautomatisch zu beziehen und zu erneuern.' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx als Webserver und Reverse Proxy',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Leichtgewicht mit Hochleistung' },
      { type: 'paragraph', text: 'Nginx wurde entwickelt, um die Performance-Probleme klassischer Webserver bei vielen gleichzeitigen Verbindungen zu lösen.' },
      { type: 'table', headers: ['Rolle', 'Besonderheit'], rows: [
        ['Statische Dateien', 'Liefert Bilder, CSS und JS extrem effizient aus'],
        ['Reverse Proxy', 'Nimmt Anfragen entgegen und leitet sie an Backend-Applikationen (z.B. PHP-FPM, Node.js) weiter'],
        ['Load Balancer', 'Verteilt die Last auf mehrere Backend-Server'],
      ]},
      { type: 'code', title: 'Nginx als Proxy-Konfiguration', prompt: 'server {\n  listen 80;\n  location / {\n    proxy_pass http://localhost:8080;\n  }\n}', output: '' }
    ]
  },

  'lpic2-209-1': {
    title: 'Samba-Dateidienste',
    sections: [
      { type: 'heading', level: 2, emoji: '🤝', text: 'Brückenschlag zu Windows' },
      { type: 'paragraph', text: 'Samba implementiert das SMB-Protokoll und ermöglicht Linux-Servern die nahtlose Integration in Windows-Netzwerke als Datei- oder Druckserver.' },
      { type: 'table', headers: ['smb.conf Sektion', 'Bedeutung'], rows: [
        ['[global]', 'Allgemeine Einstellungen wie Servername, Workgroup und Security-Modus'],
        ['[homes]', 'Automatischer Zugriff auf das Home-Verzeichnis des angemeldeten Benutzers'],
        ['[printers]', 'Teilt im System installierte Drucker im Netzwerk'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Passwörter für Samba werden separat verwaltet. Nutzen Sie `smbpasswd -a benutzername`, um einen Linux-Nutzer für Samba freizuschalten.' }
    ]
  },

  'lpic2-209-2': {
    title: 'NFS - Network File System',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Nativer Dateiaustausch unter Unix' },
      { type: 'paragraph', text: 'NFS ist der Standard für das Teilen von Verzeichnissen zwischen Linux/Unix-Systemen über das Netzwerk.' },
      { type: 'table', headers: ['Export-Option', 'Wirkung'], rows: [
        ['rw / ro', 'Lese- und Schreibzugriff oder nur Lesen'],
        ['root_squash', 'Sicherheitsfunktion: Wandelt root-Zugriffe des Clients in anonyme Zugriffe um (Standard)'],
        ['no_root_squash', 'Gefährlich: Erlaubt dem Client-Root volle Rechte auf dem Server'],
        ['sync', 'Bestätigt Schreibvorgänge erst, wenn sie physisch auf der Platte liegen'],
      ]},
      { type: 'code', title: 'Neue Freigaben ohne Neustart einlesen', prompt: '# exportfs -ra', output: '' }
    ]
  },

  'lpic2-210-1': {
    title: 'DHCP-Server-Konfiguration',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Automatische IP-Zuweisung' },
      { type: 'paragraph', text: 'Das DHCP-Protokoll (Dynamic Host Configuration Protocol) automatisiert die Zuweisung von Netzwerkparametern wie IP-Adresse, Subnetzmaske, Gateway und DNS-Server. Der Standard-Server unter Linux ist `isc-dhcp-server`.' },
      { type: 'table', headers: ['Parameter', 'Bedeutung'], rows: [
        ['subnet / netmask', 'Definiert das Netzwerksegment, für das der Server zuständig ist'],
        ['range', 'Der Pool von IP-Adressen, die dynamisch vergeben werden können'],
        ['option routers', 'Gibt das Standard-Gateway für die Clients an'],
        ['option domain-name-servers', 'Gibt die DNS-Server an, die die Clients nutzen sollen'],
      ]},
      { type: 'code', title: 'Statische IP für eine bestimmte MAC-Adresse reservieren', prompt: 'host arbeitsstation1 {\n  hardware ethernet 00:11:22:33:44:55;\n  fixed-address 192.168.1.50;\n}', output: '' }
    ]
  },

  'lpic2-210-2': {
    title: 'PAM - Modulare Authentifizierung',
    sections: [
      { type: 'heading', level: 2, emoji: '🚪', text: 'Der Türsteher des Systems' },
      { type: 'paragraph', text: 'PAM (Pluggable Authentication Modules) ermöglicht es, die Authentifizierungsmethode für Anwendungen zentral zu verwalten, ohne die Anwendungen selbst ändern zu müssen.' },
      { type: 'table', headers: ['Control Flag', 'Bedeutung'], rows: [
        ['required', 'Das Modul muss erfolgreich sein. Schlägt es fehl, wird der Zugriff verweigert, aber erst nachdem alle anderen Module abgearbeitet wurden (aus Sicherheitsgründen)'],
        ['requisite', 'Das Modul muss erfolgreich sein. Schlägt es fehl, wird der Zugriff SOFORT abgebrochen und verweigert'],
        ['sufficient', 'Ist dieses Modul erfolgreich (und kein required davor ist fehlgeschlagen), wird der Zugriff sofort gewährt'],
        ['optional', 'Der Erfolg oder Misserfolg hat keine direkten Auswirkungen auf die Gewährung des Zugriffs'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Seien Sie extrem vorsichtig beim Bearbeiten von Dateien in `/etc/pam.d/`. Ein Fehler kann dazu führen, dass Sie sich komplett vom System aussperren!' }
    ]
  },

  'lpic2-210-3': {
    title: 'LDAP-Client-Nutzung',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'Das zentrale Telefonbuch' },
      { type: 'paragraph', text: 'LDAP (Lightweight Directory Access Protocol) wird häufig verwendet, um Benutzerkonten und Gruppen zentral in einem Netzwerk zu speichern. Linux-Clients können sich gegen einen LDAP-Server authentifizieren.' },
      { type: 'table', headers: ['LDAP Begriff', 'Bedeutung'], rows: [
        ['DN (Distinguished Name)', 'Der eindeutige Pfad zu einem Objekt (z.B. uid=max,ou=user,dc=example,dc=com)'],
        ['OU (Organizational Unit)', 'Eine Organisationseinheit (ähnlich wie Ordner)'],
        ['DC (Domain Component)', 'Bestandteile des Domainnamens'],
      ]},
      { type: 'code', title: 'LDAP-Verzeichnis abfragen', prompt: '$ ldapsearch -x -b "dc=example,dc=com"', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Posteingang und -versand mit Postfix',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Der Postbote des Netzwerks' },
      { type: 'paragraph', text: 'Postfix ist ein sicherer und modularer Mail Transfer Agent (MTA). Er ist für den Transport von E-Mails via SMTP zuständig.' },
      { type: 'table', headers: ['Tool', 'Zweck'], rows: [
        ['postconf', 'Anzeige und Konfiguration von Postfix-Parametern'],
        ['postmap', 'Erstellt indexierte Datenbanken aus Textdateien (z.B. Aliase)'],
        ['postqueue', 'Verwaltung der Warteschlange (z.B. `postqueue -f` zum Erzwingen des Versands)'],
        ['postsuper', 'Administrative Aufgaben wie das Löschen von Mails aus der Queue'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Nach jeder Änderung an `/etc/aliases` muss der Befehl `newaliases` ausgeführt werden, um die Datenbank für Postfix zu aktualisieren.' }
    ]
  },

  'lpic2-211-2': {
    title: 'Dovecot - POP3 und IMAP Server',
    sections: [
      { type: 'heading', level: 2, emoji: '📥', text: 'Die Post entgegennehmen' },
      { type: 'paragraph', text: 'Dovecot ist ein IMAP- und POP3-Server, der es Benutzern ermöglicht, ihre E-Mails vom Server abzurufen.' },
      { type: 'table', headers: ['Protokoll', 'Bedeutung'], rows: [
        ['IMAP', 'E-Mails bleiben auf dem Server und werden synchronisiert (Ideal für mehrere Endgeräte)'],
        ['POP3', 'E-Mails werden standardmäßig vom Server heruntergeladen und lokal gespeichert'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Übertragen Sie Passwörter niemals im Klartext. Nutzen Sie für IMAP und POP3 immer Verschlüsselung (SSL/TLS).' }
    ]
  },

  'lpic2-212-1': {
    title: 'Netzwerksicherheit mit iptables',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'Der Brandschutz für Ihr System' },
      { type: 'paragraph', text: '`iptables` ist das Werkzeug zur Steuerung des Netfilter-Frameworks im Kernel. Es filtert Pakete anhand von Regeln.' },
      { type: 'table', headers: ['Tabelle', 'Zweck'], rows: [
        ['filter', 'Die Standardtabelle für Paketfilterregeln (INPUT, OUTPUT, FORWARD)'],
        ['nat', 'Network Address Translation: Wird für Portforwarding oder Masquerading genutzt'],
        ['mangle', 'Wird für spezielle Änderungen am Header eines Pakets genutzt'],
      ]},
      { type: 'code', title: 'Alle Eingehenden Verbindungen außer SSH verbieten', prompt: '# iptables -P INPUT DROP\n# iptables -A INPUT -p tcp --dport 22 -j ACCEPT', output: '' }
    ]
  },

  'lpic2-212-2': {
    title: 'Einbruchserkennung und Audits',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Wachsame Augen' },
      { type: 'paragraph', text: 'Sicherheit ist ein kontinuierlicher Prozess aus Überwachung und Härtung.' },
      { type: 'table', headers: ['Werkzeug', 'Zweck'], rows: [
        ['Fail2Ban', 'Sperrt automatisch IP-Adressen, die zu viele fehlgeschlagene Login-Versuche verursachen'],
        ['AIDE', 'Prüft die Integrität von Dateien durch Vergleich von kryptografischen Prüfsummen'],
        ['Nmap', 'Netzwerkscanner zum Finden offener Ports und Dienste'],
        ['Lynis', 'Sicherheits-Audit-Tool, das das System scannt und Verbesserungsvorschläge macht'],
      ]}
    ]
  }
}
