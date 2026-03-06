export const lpic2_extendedContent_de = {
  // Topic 200: Capacity Planning
  'lpic2-200': [
    {
      title: 'Ressourcenplanung und Monitoring',
      content: 'Kapazitätsplanung ist der Prozess der Vorhersage zukünftiger IT-Ressourcenbedarfe, um Engpässe zu vermeiden, bevor sie auftreten. Dies beinhaltet die Überwachung der aktuellen Nutzung und die Projektion des zukünftigen Wachstums basierend auf historischen Trends und neuen Geschäftsanforderungen.',
    },
    {
      title: 'Ressourcenüberwachung mit vmstat und mpstat',
      content: 'Um zu verstehen, wie das System seine Ressourcen nutzt, verwenden wir Tools wie `vmstat` und `mpstat`.\n\n- **vmstat (Virtual Memory Statistics)**: Liefert Informationen über Prozesse, Speicher, Swap, E/S, System- und CPU-Aktivität. Ein hoher `iowait` deutet oft darauf hin, dass das System durch den Speicher gebremst wird.\n- **mpstat (Multiprocessor Statistics)**: Ermöglicht die Analyse der Nutzung jedes einzelnen CPU-Kerns. Dies ist entscheidend, um festzustellen, ob ein schlecht konzipierter Prozess einen einzelnen Kern auf einem Multi-Core-System sättigt.',
    },
    {
      title: 'Historische Analyse mit sar',
      content: 'Das Tool `sar` (System Activity Reporter), Teil des Pakets `sysstat`, ist grundlegend für die Planung. Es sammelt, berichtet und speichert Informationen über die Systemaktivität. Im Gegensatz zu Echtzeit-Tools ermöglicht `sar` den Rückblick in die Vergangenheit (normalerweise über Dateien in `/var/log/sysstat/`), um Lastspitzen zu analysieren, die nachts oder am Wochenende auftraten.',
    },
    {
      title: 'Benchmarking-Tools',
      content: 'Um herauszufinden, "wie weit man gehen kann", nutzen Sie Benchmarking-Tools:\n\n- **Iperf**: Zur Messung des maximalen Netzwerkdurchsatzes zwischen zwei Hosts.\n- **IOzone**: Zum Testen der Dateisystem-Performance und der Festplatten-E/S.\n- **Stress-ng**: Erlaubt es, das System einer künstlichen Last auszusetzen, um zu sehen, wie es sich unter extremem Druck verhält.',
    },
  ],

  // Topic 201: Linux Kernel
  'lpic2-201': [
    {
      title: 'Kernel-Komponenten und Funktionsweise',
      content: 'Der Linux-Kernel ist das Herz des Betriebssystems. Er verwaltet die Hardware und stellt Basiskomponenten für Anwendungen bereit. Schlüsselkomponenten sind:\n\n- **vmlinuz**: Das komprimierte Kernel-Image.\n- **initramfs**: Ein temporäres, im RAM geladenes Dateisystem, das die notwendigen Treiber enthält, um das reale Root-Dateisystem zu mounten.\n- **Module**: Codestücke, die bei Bedarf zur Laufzeit in den Kernel geladen oder daraus entfernt werden können.',
    },
    {
      title: 'Modulverwaltung',
      content: 'Module halten den Kernel schlank und unterstützen gleichzeitig eine breite Hardwarepalette.\n\n- **lsmod**: Listet aktuell geladene Module auf.\n- **modprobe**: Die empfohlene Methode zum Laden/Entfernen von Modulen, da sie Abhängigkeiten automatisch verarbeitet.\n- **insmod/rmmod**: Low-Level-Tools zum Laden/Entfernen einer spezifischen `.ko`-Datei ohne Abhängigkeitsprüfung.\n- **modinfo**: Zeigt detaillierte Informationen (Autor, Lizenz, Parameter) eines Moduls an.',
    },
    {
      title: 'Kernel-Kompilierung',
      content: 'Das Kompilieren eines eigenen Kernels ermöglicht die Optimierung für spezifische Hardware oder das Aktivieren experimenteller Funktionen. Die klassischen Schritte sind:\n\n1. `make menuconfig`: Interaktive Konfiguration.\n2. `make`: Kompilieren von Kernel und Modulen.\n3. `make modules_install`: Installation der Module in `/lib/modules/`.\n4. `make install`: Kopiert den Kernel nach `/boot` und aktualisiert den Bootloader.',
    },
    {
      title: 'Parameteränderung zur Laufzeit',
      content: 'Das Dateisystem `/proc/sys/` ermöglicht es, das Kernel-Verhalten dynamisch ohne Neustart zu ändern. Das Tool `sysctl` erleichtert diese Verwaltung.\n\n- **sysctl -a**: Zeigt alle änderbaren Parameter an.\n- **sysctl -p**: Lädt Parameter aus `/etc/sysctl.conf`, um sie permanent zu machen.',
    },
  ],

  // Topic 202: System Startup
  'lpic2-202': [
    {
      title: 'SysV-init Startanpassung',
      content: 'Obwohl systemd mittlerweile Standard ist, gehört SysV-init weiterhin zum LPIC-2 Programm. Die zentrale Datei ist `/etc/inittab`, die den Standard-Runlevel definiert und Startskripte anstößt.\n\n- **Runlevels**: 0 (Halt), 1 (Single User), 3 (Multi-User Konsole), 5 (Multi-User Grafisch), 6 (Reboot).',
    },
    {
      title: 'GRUB 2 Bootloader',
      content: 'GRUB 2 ist der dominierende Bootloader. Er unterstützt traditionelles BIOS und UEFI.\n\n- **Konfiguration**: Bearbeiten Sie niemals `/boot/grub/grub.cfg` direkt. Nutzen Sie `/etc/default/grub` und Skripte in `/etc/grub.d/`, führen Sie danach `grub-mkconfig -o /boot/grub/grub.cfg` aus.\n- **Installation**: Erfolgt meist über `grub-install /dev/sdX`.',
    },
    {
      title: 'Systemwiederherstellung',
      content: 'Im Fehlerfall gibt es mehrere Strategien:\n\n1. **Boot-Parameter**: Fügen Sie `1`, `s` oder `init=/bin/bash` zur Kernel-Kommandozeile in GRUB hinzu.\n2. **Rettungsmodus**: Booten von externen Medien (Live-CD), Mounten des Root-Dateisystems und Nutzen von `chroot`, um so zu agieren, als wäre man im installierten System (GRUB reparieren, Passwort zurücksetzen etc.).',
    },
  ],

  // Topic 203: Filesystem and Devices
  'lpic2-203': [
    {
      title: 'Betrieb von Dateisystemen',
      content: 'Linux unterstützt viele Dateisysteme (ext4, XFS, Btrfs).\n\n- **Tune2fs**: Erlaubt die Parameteränderung von ext2/3/4-Dateisystemen (z.B. Prüfintervalle).\n- **XFS**: Robustes und performantes System, verwaltet über Tools wie `xfs_admin` und `xfs_growfs`.\n- **UUID/Labels**: Das Nutzen der Unique ID (UUID) in `/etc/fstab` ist sicherer als Gerätenamen wie `/dev/sda1`, da diese sich ändern können.',
    },
    {
      title: 'Wartung und Speichergesundheit',
      content: 'Datensicherheit ist entscheidend.\n\n- **fsck**: Prüft und repariert die Integrität des Dateisystems. Niemals auf einer beschreibbar gemounteten Partition ausführen!\n- **S.M.A.R.T.**: In Festplatten integriertes Protokoll zur Eigenüberwachung. Nutzen Sie `smartctl`, um Hardware-Ausfällen vorzubeugen.',
    },
    {
      title: 'Geräteverwaltung mit udev',
      content: '`udev` ist der Gerätemanager, der dynamisch Dateien in `/dev/` erstellt. Er erlaubt das Definieren persistenter Regeln, damit z.B. ein Drucker oder eine Netzwerkkarte immer den gleichen Namen oder die gleichen Berechtigungen erhält.',
    },
  ],

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204': [
    {
      title: 'Software RAID Konfiguration',
      content: 'RAID (Redundant Array of Independent Disks) kombiniert mehrere physische Platten zu einer logischen Einheit für Performance, Redundanz oder beides.\n\n- **RAID-Level**: RAID 0 (Performance), RAID 1 (Spiegelung), RAID 5 (Verteilte Parität), RAID 6 (Doppelte Parität).\n- **mdadm**: Das Haupttool unter Linux zum Erstellen (`--create`), Überwachen (`--detail`) und Reparieren von RAID-Arrays.',
    },
    {
      title: 'Logical Volume Manager (LVM)',
      content: 'LVM fügt eine Abstraktionsschicht über physische Platten hinzu, was ein extrem flexibles Speichermanagement ermöglicht.\n\n- **PV (Physical Volume)**: Physische Platte oder Partition.\n- **VG (Volume Group)**: Zusammenschluss mehrerer PVs in einen gemeinsamen Pool.\n- **LV (Logical Volume)**: Logische "Partition" in einer VG, im laufenden Betrieb vergrößerbar.',
    },
    {
      title: 'Speicher-Optimierung',
      content: 'Finishen des Datendurchsatzes:\n\n- **hdparm**: Einstellung und Test von SATA/IDE-Parametern.\n- **nvme-cli**: Management und Monitoring moderner NVMe-Disks.\n- **SSD Trim**: Wichtig für die Performance-Erhaltung von SSDs durch Information über ungenutzte Blöcke.',
    },
  ],

  // Topic 205: Network Configuration
  'lpic2-205': [
    {
      title: 'IP-Konfiguration und Routing',
      content: 'Moderne Netzwerkkonfiguration unter Linux nutzt die `iproute2`-Suite.\n\n- **ip addr**: IP-Adressverwaltung.\n- **ip link**: Management des Interface-Status.\n- **ip route**: Routing-Tabellenverwaltung.\n- **Kernel-Variablen**: `/proc/sys/net/ipv4/ip_forward` muss aktiviert sein (1), damit Linux Pakete routen kann.',
    },
    {
      title: 'Erweiterte Netzwerktechnologien',
      content: 'Für spezifische Bedarfe nutzt man Bonding oder Bridging:\n\n- **Bonding**: Aggregation mehrerer physischer Interfaces zu einem logischen für Bandbreite oder Redundanz.\n- **Bridging**: Verbindet Netzwerksegmente auf Layer 2 (Data Link), oft in Virtualisierungsumgebungen genutzt.',
    },
    {
      title: 'Netzwerk-Troubleshooting',
      content: 'Essenzielle Diagnose-Tools:\n\n- **tcpdump**: Kommandozeilen-Paketanalysator.\n- **nc (netcat)**: "Schweizer Taschenmesser" zum Testen von Portverbindungen.\n- **ss / netstat**: Übersicht, welche Prozesse auf welchen Ports lauschen.',
    },
  ],

  // Topic 206: System Maintenance
  'lpic2-206': [
    {
      title: 'Software aus Quellen kompilieren',
      content: 'Manchmal reichen offizielle Pakete nicht. Der Zyklus ist meist: `tar xzf` (Entpacken), `./configure` (Check von Abhängigkeiten und Optionen), `make` (Kompilieren) und `sudo make install` (Installation).',
    },
    {
      title: 'Backup und Synchronisation mit rsync',
      content: '`rsync` ist das Referenz-Tool für Backups, da es Delta-Transfer nutzt (kopiert nur Unterschiede). Die Option `-a` (Archive) ist Pflicht, um Rechte, Links und Zeitstempel zu erhalten.',
    },
    {
      title: 'Nutzer-Information',
      content: 'Als Admin müssen Sie Wartungen kommunizieren:\n\n- **/etc/motd**: Nachricht nach dem Login.\n- **/etc/issue**: Nachricht vor dem Login auf lokalen Terminals.\n- **wall**: Sofortnachricht an alle offenen Terminals.',
    },
  ],

  // Topic 207: Domain Name Server
  'lpic2-207': [
    {
      title: 'BIND9 DNS Server',
      content: 'BIND (Berkeley Internet Name Domain) ist der weltweit meistgenutzte DNS-Server. Er agiert als Caching-only, Forwarder oder autoritativer Server.\n\n- **named.conf**: Hauptkonfigurationsdatei.',
    },
    {
      title: 'Zonen und Einträge',
      content: 'Domains sind in Zonen unterteilt (Forward/Reverse).\n\n- **A (Address)**: Name -> IPv4.\n- **AAAA**: Name -> IPv6.\n- **MX (Mail Exchange)**: Mailserver der Domain.\n- **CNAME (Canonical Name)**: Alias für einen bestehenden Namen.',
    },
    {
      title: 'Sicherheit und DNSSEC',
      content: 'Klassisches DNS ist anfällig für Cache-Poisoning. DNSSEC signiert Einträge digital, um ihre Authentizität zu garantieren.',
    },
  ],

  // Topic 208: Web Services
  'lpic2-208': [
    {
      title: 'Apache Webserver',
      content: 'Der Apache HTTP Server ist robust und modular. Er unterstützt VirtualHosts, um mehrere Domains auf einer IP zu hosten.',
    },
    {
      title: 'Nginx und Reverse Proxy',
      content: 'Nginx ist für seine Performance bei geringem Ressourcenverbrauch bekannt. Ideal für statische Dateien und als Reverse Proxy (Load Balancer).',
    },
    {
      title: 'HTTPS mit SSL/TLS',
      content: 'Web-Verschlüsselung ist Pflicht. `OpenSSL` generiert Zertifikate. `Let\'s Encrypt` bietet kostenlose, automatisierte Zertifikate.',
    },
  ],

  // Topic 209: File Sharing
  'lpic2-209': [
    {
      title: 'Samba: Linux im Windows-Netz',
      content: 'Samba erlaubt Interoperabilität via SMB/CIFS-Protokoll. Es agiert als File-, Print- oder Domain-Controller (Active Directory).',
    },
    {
      title: 'NFS: Natives Unix/Linux Sharing',
      content: 'NFS (Network File System) ist der Standard für Unix-Sharing. Remote-Ordner werden transparent in den lokalen Baum eingehängt.',
    },
  ],

  // Topic 210: Network Client Management
  'lpic2-210': [
    {
      title: 'DHCP: Automatische Konfiguration',
      content: 'DHCP automatisiert die Zuweisung von IP, Gateway und DNS. `isc-dhcp-server` ist die Linux-Referenz.',
    },
    {
      title: 'PAM: Modulare Authentifizierung',
      content: 'PAM (Pluggable Authentication Modules) zentralisiert die Identitätsprüfung. Methoden (Passwort, LDAP) können getauscht werden, ohne Anwendungen zu ändern.',
    },
    {
      title: 'LDAP: Zentrales Verzeichnis',
      content: 'LDAP speichert Nutzer, Gruppen und Ressourcen zentral ab, was das Zugriffsmanagement in großen Firmen massiv vereinfacht.',
    },
  ],

  // Topic 211: E-Mail Services
  'lpic2-211': [
    {
      title: 'Postfix Mailserver',
      content: 'Postfix ist ein MTA (Mail Transfer Agent), konzipiert für Speed und Sicherheit. Er verwaltet den Mailversand via SMTP.',
    },
    {
      title: 'Auslieferung und Zugriff: Dovecot',
      content: 'Während Postfix transportiert, erlaubt Dovecot den Zugriff via IMAP/POP3 und verwaltet die Speicherung (Maildir/mbox).',
    },
  ],

  // Topic 212: System Security
  'lpic2-212': [
    {
      title: 'Absicherung mit iptables',
      content: '`iptables` (und `nftables`) konfiguriert den Netfilter im Kernel. Filterregeln basieren auf Source/Destination IP, Port und Protokoll.',
    },
    {
      title: 'Einbruchserkennung und Audit',
      content: 'Sicherheit über die Firewall hinaus: `Fail2Ban` bannt verdächtige IPs, `rkhunter` sucht nach Rootkits.',
    },
    {
      title: 'SSH-Härtung',
      content: 'SSH ist das Haupttor. Deaktivieren Sie Root-Login, nutzen Sie Non-Standard-Ports und bevorzugen Sie Public-Key-Authentifizierung.',
    },
  ],
}
