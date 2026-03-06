export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Ressourcenüberwachung',
    comic: {
      title: 'Doktor, der Server brennt! 🩺',
      panels: [
        { emoji: '📉', text: 'Kapazitätsplanung: Warten Sie nicht, bis der Server explodiert. Planen Sie die Last voraus!' },
        { emoji: '🧠', text: 'CPU und RAM: mpstat und vmstat sind Ihre Stethoskope, um den Puls des Systems zu hören.' },
        { emoji: '🚥', text: 'I/O Wait: Wenn die Festplatte langsam ist, langweilt sich die CPU und das ganze System bremst.' },
        { emoji: '📊', text: 'Historische Analyse: Nutzen Sie collectd oder sar, um zu sehen, wie sich die Last über Zeit entwickelt.' },
      ]
    },
    keyPoints: [
      { title: 'Monitorage CPU/RAM', items: ['uptime — Last-Durchschnitt (1, 5, 15 Min)', 'vmstat — Statistiken zu virtuellem Speicher und Swap', 'mpstat — Detaillierter Bericht pro CPU-Kern'] },
      { title: 'Monitorage I/O und Netzwerk', items: ['iostat — Festplattennutzung und Durchsatz', 'ss / netstat — Status von Verbindungen und Sockets', 'iftop / nload — Netzwerkverkehr in Echtzeit'] },
      { title: 'Prädiktive Analyse', items: ['sar (sysstat) — Historische Leistungsdatenbank', 'Benchmarks — Theoretische maximale Leistung messen'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: 'Zukünftigen Bedarf vorhersagen',
    comic: {
      title: 'Die Kristallkugel des Admins 🔮',
      panels: [
        { emoji: '📅', text: 'Trendanalyse: Wenn die Daten monatlich um 10% wachsen, wann ist die Platte voll?' },
        { emoji: '📈', text: 'Grafische Tools: Cacti, MRTG und Graphite verwandeln Zahlen in verständliche Graphen.' },
        { emoji: '🔔', text: 'Alarme: Definieren Sie kritische Schwellenwerte. Besser heute eine Mail als morgen ein Crash!' },
        { emoji: '🏗️', text: 'Skalierung: Entscheiden Sie zwischen mehr Power (Vertikal) oder mehr Servern (Horizontal).' },
      ]
    },
    keyPoints: [
      { title: 'Zentrales Monitoring', items: ['Collectd — Leichter Daemon zum Sammeln von Daten', 'Prometheus — Modernes Monitoring-System für Zeitreihen', 'Nagios / Zabbix — Plattformen für Monitoring und Alarmierung'] },
      { title: 'Visualisierung', items: ['Grafana — Spektakuläre Dashboards für Ihre Daten', 'Cacti — Basiert auf RRDTool, ideal für historische Graphen'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Kernel-Komponenten',
    comic: {
      title: 'Was steckt in einem Kernel? 🧠',
      panels: [
        { emoji: '📦', text: 'Kernel-Image: vmlinuz ist das komprimierte und bootfähige Herz des Systems.' },
        { emoji: '🏗️', text: 'Initramfs: Der kleine Rucksack mit den Treibern, um das echte Dateisystem zu mounten.' },
        { emoji: '🧩', text: 'Module: Warum alles sofort laden? Module (.ko) werden bei Bedarf geladen.' },
        { emoji: '🩹', text: 'Patching: Aktualisieren Sie den Kernel, ohne ihn von Grund auf neu zu schreiben.' },
      ]
    },
    keyPoints: [
      { title: 'Images und Dateien', items: ['vmlinuz — Komprimiertes Kernel-Image', 'System.map — Symboltabelle für das Debugging', 'config-X — Bei der Kompilierung verwendete Optionen'] },
      { title: 'Boot und RAM Disk', items: ['initrd / initramfs — Temporäres Dateisystem zum Laden von Root-Modulen', 'dracut / mkinitrd — Tools zum Erstellen von initramfs'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: 'Kernel-Kompilierung',
    comic: {
      title: 'Maßschneider: Kompilieren Sie Ihren Kernel! 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig: Wählen Sie sorgfältig aus, welche Treiber aktiviert werden sollen.' },
        { emoji: '⚙️', text: 'Kompilierung: Verwandelt Quellcode in eine für Ihre CPU optimierte Binärdatei.' },
        { emoji: '📦', text: 'Installation: Kopiert Dateien nach /boot und Module nach /lib/modules.' },
        { emoji: '🚀', text: 'GRUB-Update: Der Bootloader muss wissen, dass ein neuer Chef in der Stadt ist!' },
      ]
    },
    keyPoints: [
      { title: 'Konfigurationsziele', items: ['make menuconfig— Grafische Oberfläche (ncurses)', 'make oldconfig — Nutzt die aktuelle Kernel-Konfiguration', 'make localmodconfig — Aktiviert nur aktuell geladene Module'] },
      { title: 'Build-Phasen', items: ['make — Kompiliert Kernel und Module', 'make modules_install — Installiert in /lib/modules', 'make install — Installiert in /boot und aktualisiert Bootloader'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: 'Kernel-Verwaltung zur Laufzeit',
    comic: {
      title: 'Chirurgie am offenen Herzen 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo: Verrät die Geheimnisse eines Treibers, bevor er geladen wird.' },
        { emoji: '🔧', text: 'Sysctl: Ändert Kernel-Parameter (Netzwerk, Speicher), während das System läuft.' },
        { emoji: '⚠️', text: 'Dmesg: Hört auf das Flüstern (oder Schreien) des Kernels in Echtzeit.' },
        { emoji: '💾', text: '/proc/sys: Der direkte Zugang zu den Eingeweiden des Systems.' },
      ]
    },
    keyPoints: [
      { title: 'Modul-Tools', items: ['lsmod — Zeigt geladene Module', 'insmod / rmmod — Laden/Entfernen (ohne Abhängigkeiten)', 'modprobe -v — Lädt mit Details und Abhängigkeiten'] },
      { title: 'Kernel-Parameter', items: ['sysctl -a — Listet alle Parameter auf', 'sysctl -w net.ipv4.ip_forward=1 — Aktiviert Routing', '/etc/sysctl.conf — Macht Änderungen permanent'] },
    ],
    terminal: { 
      prompt: '$ modprobe -v xfs\n$ sysctl kernel.hostname', 
      output: 'insmod /lib/modules/5.15.0/kernel/fs/xfs/xfs.ko\nkernel.hostname = linux-server' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'SysVinit anpassen',
    comic: {
      title: 'Der alte Weise: SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab: Die Partitur, die dem System sagt, wie es Zeile für Zeile startet.' },
        { emoji: '🔢', text: 'Runlevel: Von Level 1 (Einzelbenutzer) bis Level 5 (Grafisch).' },
        { emoji: '🚦', text: 'K- und S-Skripte: Wer stoppt und wer startet in jedem Runlevel.' },
        { emoji: '🔄', text: 'Telinit q: Lädt die Konfiguration neu, ohne das ganze Dorf neu zu starten!' },
      ]
    },
    keyPoints: [
      { title: 'Dateien und Verzeichnisse', items: ['/etc/inittab — Hauptkonfiguration', '/etc/init.d/ — Verzeichnis der Service-Skripte', '/etc/rc[0-6].d/ — Symbolische Links für die Runlevel'] },
      { title: 'Klassische Befehle', items: ['runlevel — Zeigt aktuellen und vorherigen Level', 'init 6 — Startet das System neu', 'telinit q — Lädt /etc/inittab neu'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: 'Systemwiederherstellung',
    comic: {
      title: 'Linux-Rettungsteam 🚑',
      panels: [
        { emoji: '⌨️', text: 'GRUB Edit: Drücken Sie \'e\' beim Booten, um dem Kernel Notbefehle zu geben.' },
        { emoji: '🔧', text: 'init=/bin/bash: Übernehmen Sie die Kontrolle, bevor Dienste geladen werden.' },
        { emoji: '📀', text: 'Live-CD / Rescue Mode: Mounten Sie Ihr verletztes System in /mnt und operieren Sie mit chroot.' },
        { emoji: '🛠️', text: 'LILO: Der uralte Vorfahre von GRUB, der in dunklen Ecken noch überlebt.' },
      ]
    },
    keyPoints: [
      { title: 'Boot-Parameter', items: ['1, s, single — Startet im Einzelbenutzermodus', 'systemd.unit=rescue.target — Modernes Äquivalent', 'rd.break — Stoppt den Bootvorgang im initramfs'] },
      { title: 'Recovery-Techniken', items: ['chroot — Ändert das Root-Verzeichnis zur Reparatur von außen', 'fsck — Repariert Dateisysteme, die den Boot verhindern'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: 'Fortgeschrittene Bootloader',
    comic: {
      title: 'Die Herren des Boots 👑',
      panels: [
        { emoji: '💿', text: 'UEFI vs BIOS: Der Wechsel von alten MBR-Sektoren zu modernen ESP-Partitionen.' },
        { emoji: '📦', text: 'GRUB 2: Flexibel, mächtig und kann Kernel von fast jedem FS laden.' },
        { emoji: '🌐', text: 'PXE: Booten Sie Ihre Server-Armee direkt aus dem Netz, ohne lokale Disks!' },
        { emoji: '🔑', text: 'Secure Boot: Signieren Sie Ihren Kernel digital, um Eindringlinge zu blockieren.' },
      ]
    },
    keyPoints: [
      { title: 'GRUB 2 Komponenten', items: ['/boot/grub/grub.cfg — Finaldatei (nicht editieren!)', '/etc/default/grub — Variablen für die Nutzerkonfiguration', 'grub-mkconfig — Generiert die finale Datei'] },
      { title: 'Moderne Standards', items: ['GPT — Neue Partitionstabelle für Disks > 2TB', 'ESP — EFI System Partition (FAT32)', 'systemd-boot — Leichte Alternative für UEFI-Systeme'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Dateisysteme verwalten',
    comic: {
      title: 'Der Architekt der Festplatten 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs: Passt Parameter von ext2/3/4-FS an, ohne zu formatieren.' },
        { emoji: '🏷️', text: 'LABEL und UUID: Geben Sie Ihren Platten Namen, um sie in /dev nicht zu verlieren.' },
        { emoji: '💾', text: 'XFS_info: Erkunden Sie fortgeschrittene Geometrien von XFS-Hochleistungsdateisystemen.' },
        { emoji: '🔧', text: 'Mount -o: Fügen Sie Superkräfte wie "noatime" hinzu, um das Lesen zu beschleunigen.' },
      ]
    },
    keyPoints: [
      { title: 'Tuning-Tools', items: ['tune2fs -L DATA /dev/sdb1 — Setzt Label', 'xfs_admin — Verwaltet XFS-Parameter', 'dumpe2fs — Zeigt technische Details des FS'] },
      { title: 'Identifikation', items: ['blkid — Zeigt UUID und TYPE aller Blöcke', 'findmnt — Baumansicht der aktuellen Mounts'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: 'Dateisystem-Wartung',
    comic: {
      title: 'Der Dateimechaniker 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck: Der Chirurg, der FS-Wunden nach einem Absturz heilt.' },
        { emoji: '🧠', text: 'SMART: Hört auf die Vorzeichen der Festplatte, bevor sie endgültig stirbt.' },
        { emoji: '🧹', text: 'Badblocks: Scannt jeden Winkel nach defekten Sektoren.' },
        { emoji: '🧪', text: 'Debugfs: Tauchen Sie in die Eingeweide des FS ein, um gelöschte Dateien zu retten.' },
      ]
    },
    keyPoints: [
      { title: 'Plattengesundheit', items: ['smartctl -a /dev/sda — Vollständiger Hardware-Statusbericht', 'smartctl -t short — Startet einen Schnelltest'] },
      { title: 'Reparatur', items: ['fsck.ext4 -v /dev/sdb1 — Detaillierte Prüfung und Reparatur', 'xfs_repair — Spezifisches Tool für XFS'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: 'Geräteverwaltung mit udev',
    comic: {
      title: 'Udev: Der Verkehrspolizist des Kernels 🚨',
      panels: [
        { emoji: '⚡', text: 'Hotplug: Stick einstecken und udev erkennt ihn im Handumdrehen.' },
        { emoji: '📜', text: 'Eigene Regeln: "Wenn ich diese Disk einstecke, mounte sie immer in /backup".' },
        { emoji: '🔍', text: 'Udevadm: Das Tool, um udev abzufragen und neue Regeln zu testen.' },
        { emoji: '📁', text: '/dev: Wo udev Knoten erstellt, damit wir mit der Hardware sprechen können.' },
      ]
    },
    keyPoints: [
      { title: 'Konfiguration', items: ['/etc/udev/rules.d/ — Hier schreiben Sie eigene Regeln', '/lib/udev/rules.d/ — Systemregeln (nicht anfassen)'] },
      { title: 'Debug-Befehle', items: ['udevadm monitor — Hardware-Events in Echtzeit beobachten', 'udevadm info -a -p /sys/class/net/eth0 — Alle Attribute für eine Regel finden'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'RAID-Konfiguration',
    comic: {
      title: 'Gemeinsam Stark (und Sicher) 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID: Warum auf eine Disk vertrauen, wenn man eine Armee haben kann?' },
        { emoji: '⚡', text: 'RAID 0 (Stripe): Verdoppelt den Speed, aber wenn eine Disk stirbt, ist alles weg!' },
        { emoji: '🪞', text: 'RAID 1 (Mirror): Jedes Datum hat einen Zwilling. Max. Sicherheit, halber Platz.' },
        { emoji: '🏗️', text: 'RAID 5/6: Die magische Balance zwischen Speed, Platz und Fehlertoleranz.' },
      ]
    },
    keyPoints: [
      { title: 'Gängige RAID-Level', items: ['RAID 0 — Pure Performance (keine Redundanz)', 'RAID 1 — Spiegelung (hohe Verfügbarkeit)', 'RAID 5 — Verteilte Parität (toleriert 1 Ausfall)', 'RAID 6 — Doppelte Parität (toleriert 2 Ausfälle)'] },
      { title: 'Software RAID Tools', items: ['mdadm — Der Universalbefehl für Software RAID unter Linux', '/proc/mdstat — Echtzeit-Fenster zum Status der Arrays'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Speichermedien-Optimierung',
    comic: {
      title: 'Extremer Speed 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm: Reizen Sie Ihre alte mechanische Disk bis zum Letzten aus.' },
        { emoji: '🌠', text: 'NVMe: Treten Sie mit Protokollen für puren Speed ins Flash-Zeitalter ein.' },
        { emoji: '⚡', text: 'SD Card / SSD: Verwalten Sie Schreibparameter für maximale Lebensdauer.' },
        { emoji: '🛠️', text: 'Smartctl: Weil Vorbeugen besser ist als Weinen über Datenverlust.' },
      ]
    },
    keyPoints: [
      { title: 'Optimierung', items: ['hdparm -tT /dev/sda — Lesegeschwindigkeitstest (Cache und Disk)', 'hdparm -S 120 /dev/sda — Setzt Spindown-Zeit (10 Min)'] },
      { title: 'Moderne Technologien', items: ['nvme-cli — Tool für moderne NVMe-Disks', 'SSD Trim — Hält die Performance durch Freigabe ungenutzter Blöcke hoch'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM)',
    comic: {
      title: 'Disks wie Legosteine 🧱',
      panels: [
        { emoji: '📦', text: 'PV (Physical Volume): Verwandeln Sie Ihre Platten in Rohmaterial.' },
        { emoji: '🏗️', text: 'VG (Volume Group): Vereinen Sie PVs in einem großen Platz-Pool.' },
        { emoji: '🍰', text: 'LV (Logical Volume): Schneiden Sie sich Stücke ab und vergrößern Sie diese beliebig.' },
        { emoji: '📸', text: 'Snapshot: Frieren Sie die Zeit ein für ein Backup vor riskanten Updates.' },
      ]
    },
    keyPoints: [
      { title: 'LVM Hierarchie', items: ['pvcreate / pvdisplay — Verwaltung physischer Disks', 'vgcreate / vgextend — Verwaltung von Volume-Gruppen', 'lvcreate / lvextend — Verwaltung logischer Volumes'] },
      { title: 'Vorteile', items: ['Resize Online — Partitionen ohne Reboot vergrößern', 'Snapshots — Konsistente Backups und schnelle Tests'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Grundlegende Netzwerk-Konfiguration',
    comic: {
      title: 'Bürger des Netzes 🌐',
      panels: [
        { emoji: '📍', text: 'Adressierung: Man braucht einen Namen und einen Platz zum Wohnen.' },
        { emoji: '🗺️', text: 'Routing: "Wenn du nicht weiter weißt, frag das Default Gateway".' },
        { emoji: '🔌', text: 'Interfaces: Ethernet, Wi-Fi oder virtuelle Karten für Container & VMs.' },
        { emoji: '🛠️', text: 'Iproute2: Die neue Power-Suite, die das alte ifconfig abgelöst hat.' },
      ]
    },
    keyPoints: [
      { title: 'IP Konfiguration', items: ['ip addr show — Zeigt Adressen und Interfaces', 'ip route show — Zeigt die Routing-Tabelle', 'ip -6 addr — IPv6 Konfiguration'] },
      { title: 'Persistenz', items: ['Debian/Ubuntu: /etc/network/interfaces oder Netplan', 'RHEL/CentOS: /etc/sysconfig/network-scripts/ oder NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: 'Fortgeschrittene Netzwerk-Konfiguration',
    comic: {
      title: 'Brücken und Kanäle 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding: Mehrere Karten für Speed oder Redundanz vereinen.' },
        { emoji: '🌉', text: 'Bridging: Virtuelle Brücken, damit VMs mit der Außenwelt sprechen.' },
        { emoji: '📡', text: 'Profi Wi-Fi: Verwalten Sie Funkverbindungen per Kommandozeile.' },
        { emoji: '🚀', text: 'Traffic Control (tc): Downloads bremsen, damit Server Vorrang haben!' },
      ]
    },
    keyPoints: [
      { title: 'Techniken', items: ['Bonding — Link Aggregation (LACP, Round-robin)', 'Bridging — Typisch in der Virtualisierung (br0)'] },
      { title: 'Wireless', items: ['iw / iwconfig — Tools für 802.11 Interfaces', 'wpa_supplicant — WPA/WPA2 Authentifizierungs-Manager'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Bureau_Linux\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: 'Netzwerk Troubleshooting',
    comic: {
      title: 'Paket-Detektiv 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: Belauschen Sie jedes Bit auf Ihrer Netzwerkkarte.' },
        { emoji: '🔬', text: 'Wireshark: Das Mikroskop zum Analysieren von Paketen per GUI.' },
        { emoji: '📡', text: 'Nmap: Klopfen Sie an jede Tür am Server, um zu sehen, wer antwortet.' },
        { emoji: '🔎', text: 'Netstat/SS: Wer hört zu? Prüfen Sie Sockets und Prozesse.' },
      ]
    },
    keyPoints: [
      { title: 'Verkehrsanalyse', items: ['tcpdump -i eth0 -n — Live-Analyse (ohne DNS-Auflösung)', 'nc (netcat) — Das Schweizer Taschenmesser fürs Netz'] },
      { title: 'Scans und Sockets', items: ['nmap -sV target — Portscan und Service-Versionen', 'ss -tulpn — Zeigt hörende Sockets mit PID'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Kompilierung und Installation',
    comic: {
      title: 'Digitaler Schneider: Software kompilieren 🧵',
      panels: [
        { emoji: '📦', text: 'Quellen: Laden Sie den Code (Tarball) für die allerneueste Version.' },
        { emoji: '🛠️', text: './configure: Prüft, ob alle Werkzeuge zum Bauen da sind.' },
        { emoji: '⚙️', text: 'Make: Verwandelt tausende Zeilen Code in ein fertiges Programm.' },
        { emoji: '🚀', text: 'Make install: Installiert das Programm in Systemordner wie /usr/local/bin.' },
      ]
    },
    keyPoints: [
      { title: 'Kompilierungsphasen', items: ['./configure — Konfiguriert und prüft Abhängigkeiten', 'make — Kompiliert den Quellcode', 'make install — Installiert Binärdateien'] },
      { title: 'Quellcode-Verwaltung', items: ['tar -xvf — Entpackt das Quellarchiv', 'patch — Wendet Korrekturen auf Code an'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: 'Backup-Operationen',
    comic: {
      title: 'Die Lebensversicherung der Daten 💾',
      panels: [
        { emoji: '🛡️', text: 'Backup: Fragen Sie nicht, OB die Disk stirbt, sondern WANN. Seien Sie bereit!' },
        { emoji: '🔄', text: 'Rsync: Das Genie, das nur geänderte Teile kopiert und Zeit spart.' },
        { emoji: '📦', text: 'Tar: Packt ganze Dateisysteme in eine einzige Datei.' },
        { emoji: '☁️', text: 'Off-site: Behalten Sie Kopien fern vom Server (Cloud oder anderes Haus).' },
      ]
    },
    keyPoints: [
      { title: 'Backup-Typen', items: ['Vollständig — Kopie aller Daten', 'Inkrementell — Nur Änderungen seit dem letzten Backup', 'Differenziell — Nur Änderungen seit dem letzten Full-Backup'] },
      { title: 'Tools', items: ['rsync -avz — Atomare, komprimierte Synchronisation', 'tar -cvf — Erstellt Archive von Dateien/Ordnern', 'mt — Steuert Magnetbänder (Legacy)'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/file.txt\nuser2/photo.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: 'Nutzer-Benachrichtigungen',
    comic: {
      title: 'Der System-Ausrufer 📢',
      panels: [
        { emoji: '🔔', text: 'Wall: Schreit eine Nachricht an alle gerade angemeldeten User.' },
        { emoji: '📅', text: '/etc/motd: Die "Message of the Day" bei jedem Login.' },
        { emoji: '📔', text: '/etc/issue: Der Willkommenstext noch vor der Passworteingabe.' },
        { emoji: '🛑', text: 'Shutdown: Warnt alle, dass der Server wegen Wartung schlafen geht.' },
      ]
    },
    keyPoints: [
      { title: 'Direkte Nachrichten', items: ['wall — Nachricht an alle Terminals', 'write — Nachricht an einen spezifischen User'] },
      { title: 'Statische Nachrichten', items: ['/etc/motd — Message Of The Day (nach Login)', '/etc/issue — Banner vor lokalem Login', '/etc/issue.net — Banner vor SSH/Remote Login'] },
    ],
    terminal: { 
      prompt: '# wall "Wartung um 22:00 Uhr"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\nWartung um 22:00 Uhr' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'DNS-Grundkonfiguration',
    comic: {
      title: 'Das Telefonbuch des Web 📖',
      panels: [
        { emoji: '🌐', text: 'DNS: Verwandelt Namen (google.de) in Nummern (IP-Adressen).' },
        { emoji: '🏗️', text: 'BIND: Der verbreitetste und mächtigste DNS-Server aller Zeiten.' },
        { emoji: '🗺️', text: 'Hierarchie: Von Root-Servern (.) über Top-Level (.de) bis zum Host.' },
        { emoji: '🔎', text: 'Query: Rekursiv fragen, bis jemand die Antwort kennt.' },
      ]
    },
    keyPoints: [
      { title: 'BIND Komponenten', items: ['named — Der DNS-Dienst Daemon', '/etc/bind/named.conf — Hauptkonfiguration', 'rndc — Remote-Control Tool für BIND'] },
      { title: 'Server-Typen', items: ['Master — Enthält die Original-Zone', 'Slave — Kopiert die Zone vom Master zur Redundanz (Zone Transfer)'] },
    ],
    terminal: { 
      prompt: '$ dig google.de\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.de.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: 'Zonen verwalten',
    comic: {
      title: 'Das Kataster der Domains 🗺️',
      panels: [
        { emoji: '📝', text: 'A Record: Die Basis-Verknüpfung Name -> IPv4.' },
        { emoji: '📛', text: 'CNAME: Ein Alias für einen Host, der schon einen Namen hat.' },
        { emoji: '📧', text: 'MX: Sagt der Welt, welcher Server die Post für die Domain annimmt.' },
        { emoji: '🔄', text: 'SOA: Die Geburtsurkunde der Zone mit Seriennummer und Timern.' },
      ]
    },
    keyPoints: [
      { title: 'DNS Records', items: ['A / AAAA — Name -> IPv4 / IPv6', 'PTR — IP -> Name (Reverse Zone)', 'TXT — Freitext (für SPF, DKIM)', 'NS — Zeigt autoritative Name Server'] },
      { title: 'Zonen-Management', items: ['Standard Seriell: YYYYMMDDNN (ex. 2024030601)', 'named-checkzone — Prüft Fehler vor dem Laden'] },
    ],
    terminal: { 
      prompt: '# named-checkzone beispiel.de /etc/bind/db.beispiel.de', 
      output: 'zone beispiel.de/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: 'Sicherheit und DNSSEC',
    comic: {
      title: 'DNS im Schutzschild 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: Signiert Zonen digital, um Fake-Webseiten-Umleitungen zu verhindern.' },
        { emoji: '🚫', text: 'Access Control: Entscheiden Sie, wer Anfragen or Zone Transfers darf.' },
        { emoji: '🔭', text: 'TSIG: Nutzt geheime Schlüssel für die Master-Slave Kommunikation.' },
        { emoji: '🏰', text: 'Chroot: Sperrt BIND in ein virtuelles Gefängnis zum Schutz des Systems.' },
      ]
    },
    keyPoints: [
      { title: 'Schutz', items: ['allow-query — Begrenzt, wer Anfragen stellen darf', 'allow-transfer — Begrenzt, wer die Zone kopieren darf (Wichtig!)'] },
      { title: 'Fortgeschritten', items: ['Split DNS — Zeigt internen/externen Usern verschiedene Daten', 'TSIG — Keys für sichere Zonentransfers'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.de AXFR', 
      output: '; Transfer failed. (Zugriff verweigert bei guter Konfig!)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Apache Konfiguration',
    comic: {
      title: 'Der Gastgeber der Seite 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server: Der König der Webserver, flexibel und zeitlos.' },
        { emoji: '📂', text: 'VirtualHost: Hosten Sie 100 Seiten auf einem Server, ohne dass sie sich stören.' },
        { emoji: '🧩', text: 'Module: Aktiveren Sie rewrite, proxy oder php mit einem Befehl.' },
        { emoji: '🔎', text: 'Logs: Spionieren Sie Besucher aus oder finden Sie den Grund für den 404 Fehler.' },
      ]
    },
    keyPoints: [
      { title: 'Apache Struktur', items: ['/etc/apache2/ (Debian) oder /etc/httpd/ (RHEL)', 'apache2ctl configtest — Prüft Syntax vor dem Restart'] },
      { title: 'Virtual Hosting', items: ['Name-based VirtualHost — Mehrere Seiten auf einer IP', 'ServerName / ServerAlias — Definiert die Namen der Seite'] },
    ],
    terminal: { 
      prompt: '# a2ensite meine-seite.conf\n# systemctl reload apache2', 
      output: 'Enabling site meine-seite.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS und Web-Sicherheit',
    comic: {
      title: 'Das grüne Schloss 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS: Verschlüsselt das Gespräch zwischen Browser und Server.' },
        { emoji: '📜', text: 'Zertifikate: Der Ausweis Ihrer Seite, von einer vertrauenswürdigen Stelle.' },
        { emoji: '🏎️', text: 'HTTP/2: Die neue Überholspur für extrem schnelle Ladezeiten.' },
        { emoji: '🛡️', text: 'HSTS: Zwingt Browser, immer die sichere Verbindung zu nutzen.' },
      ]
    },
    keyPoints: [
      { title: 'Zertifikate', items: ['CSR (Certificate Signing Request) — Die Anfrage an die Behörde', 'SSLCertificateFile / SSLCertificateKeyFile — Apache Konfig'] },
      { title: 'Tools', items: ['OpenSSL — Das Werkzeug für Keys und Zertifikate', 'Let\'s Encrypt — Kostenlose, automatische Zertifikate'] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = meine-seite.de' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx und Reverse Proxy',
    comic: {
      title: 'Die schnelle Alternative: Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx: Leicht, asynchron und für tausende gleichzeitige User gemacht.' },
        { emoji: '🔀', text: 'Reverse Proxy: Stellen Sie Nginx vor Ihre Server zum Schutz und Loadbalancing.' },
        { emoji: '💨', text: 'Caching: Speichert statische Dateien im RAM für Blitz-Auslieferung.' },
        { emoji: '🛡️', text: 'WAF: Nutzen Sie Nginx als Schild gegen Web-Angriffe.' },
      ]
    },
    keyPoints: [
      { title: 'Nginx Konfiguration', items: ['/etc/nginx/nginx.conf — Globale Konfig', 'server { ... } — Seiten-Definition (wie VirtualHost)'] },
      { title: 'Reverse Proxy', items: ['proxy_pass — Leitet Anfragen an andere Server weiter (z.B. Node.js)'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: Brücke zu Windows',
    comic: {
      title: 'Zwei Welten, eine Disk 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba: Das SMB-Protokoll, damit Windows Linux als Fileserver sieht.' },
        { emoji: '👥', text: 'Domain Controller: Verwalten Sie User und Rechte mit Active Directory.' },
        { emoji: '📂', text: 'Freigaben: Definieren Sie, was öffentlich ist und was privat bleibt.' },
        { emoji: '📝', text: 'Smb.conf: Das Herz der Samba-Konfiguration.' },
      ]
    },
    keyPoints: [
      { title: 'Konfiguration', items: ['[global] — Netzwerk- und Sicherheitseinstellungen', '[share] — Definition des Freigabe-Ordners'] },
      { title: 'Tools', items: ['testparm — Prüft Syntax der smb.conf', 'smbpasswd -a user — Fügt User zu Samba hinzu'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Natives Linux Sharing',
    comic: {
      title: 'Network File System: Pure Transparenz 📁',
      panels: [
        { emoji: '🔌', text: 'NFS: Mounten Sie entfernte Disks im LAN wie lokale Platten.' },
        { emoji: '🛡️', text: 'Exports: Wer darf rein? IPs und Rechte (ro/rw) festlegen.' },
        { emoji: '🧱', text: 'RPC: Die kleinen Boten für die Kommunikation zwischen Servern.' },
        { emoji: '⚡', text: 'NFSv4: Modern, sicher und besser für Firewalls geeignet.' },
      ]
    },
    keyPoints: [
      { title: 'Konfiguration', items: ['/etc/exports — Liste der Freigaben und Rechte', 'exportfs -a — Wendet Änderungen sofort an'] },
      { title: 'Mount Optionen', items: ['soft/hard — Wie reagieren bei Verbindungsabbruch?', 'proto=tcp — Nutzt TCP statt UDP für Stabilität'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/distant', 
      output: '/data  192.168.1.0/24(rw,sync,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP: Automatische Adressen',
    comic: {
      title: 'Willkommen im IP-Mietshaus 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP: Der Hausmeister, der jedem neuen Gast ein Zimmer (IP) zuweist.' },
        { emoji: '⏱️', text: 'Lease Time: Die IP gehört dir nur auf Zeit. Verlängern nicht vergessen!' },
        { emoji: '📍', text: 'Reservierungen: "Dieser Server kriegt immer Zimmer 101". Per MAC-Adresse.' },
        { emoji: '📝', text: 'Dhcpd.conf: Hier stehen die Regeln für die Zimmerverteilung.' },
      ]
    },
    keyPoints: [
      { title: 'DHCP Konfig', items: ['subnet { ... } — Definiert den IP-Bereich', 'option routers — Das Default Gateway mitteilen', 'option domain-name-servers — DNS-Server mitteilen'] },
      { title: 'Relay Agent', items: ['dhcrelay — Leitet DHCP-Anfragen über Netzgrenzen hinweg'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'Authentifizierung mit PAM',
    comic: {
      title: 'PAM: Der modulare Türsteher 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM: Ein System für alle Arten von Logins (Passwort, Fingerabdruck, etc.).' },
        { emoji: '🧩', text: 'Module: Login-Art ändern, ohne Programme neu zu schreiben.' },
        { emoji: '📋', text: 'Stack: "Erst PW fragen, dann checken ob der User in der Gruppe ist".' },
        { emoji: '🔐', text: 'Sicherheit: Starke Passwörter erzwingen und Sperren nach Fehlversuchen.' },
      ]
    },
    keyPoints: [
      { title: 'Modultypen', items: ['auth — Identität prüfen (Passwort)', 'account — Ist der Account gültig/aktiv?', 'password — Passwortänderung verwalten', 'session — Vor/Nach dem Login-Ereignisse'] },
      { title: 'Konfiguration', items: ['/etc/pam.d/ — Verzeichnis mit Konfig pro Dienst (sshd, login, etc)'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'LDAP Client',
    comic: {
      title: 'Das zentrale Melderegister 📂',
      panels: [
        { emoji: '📋', text: 'LDAP: Effizientes Verzeichnis für User und Gruppen in der Firma.' },
        { emoji: '🔍', text: 'Query: Finden Sie sofort die Email vom Chef oder die Abteilung von Max.' },
        { emoji: '🌐', text: 'Single Sign-On: Ein Passwort für alle Rechner im Büro.' },
        { emoji: '⚡', text: 'NSS: Sagt Linux, dass User auch in LDAP gesucht werden sollen.' },
      ]
    },
    keyPoints: [
      { title: 'LDAP Tools', items: ['ldapsearch — LDAP vom Terminal abfragen', 'ldapadd / ldapmodify — Daten in der Basis verwalten'] },
      { title: 'NSS Dienst', items: ['/etc/nsswitch.conf — Suchreihenfolge festlegen (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=beispiel,dc=de" "(uid=max)"', 
      output: 'dn: uid=max,ou=People,dc=beispiel,dc=de\nobjectClass: posixAccount\nuid: max\nmail: max@beispiel.de' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: 'Private Tunnel im Web 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN: Ein sicherer Tunnel durch das öffentliche Internet.' },
        { emoji: '🔐', text: 'Verschlüsselung: Keiner kann im Tunnel lauschen.' },
        { emoji: '🏠', text: 'Home Office: Arbeiten von zu Hause wie am Schreibtisch im Büro.' },
        { emoji: '🔑', text: 'TLS Zertifikate: Nur autorisierte Geräte dürfen in den Tunnel.' },
      ]
    },
    keyPoints: [
      { title: 'OpenVPN Konfig', items: ['/etc/openvpn/server.conf — Server-Einstellungen', '/etc/openvpn/client.conf — Client-Einstellungen'] },
      { title: 'Modi', items: ['Tun (Routing) — IP-Tunnel (am gängigsten)', 'Tap (Bridging) — Simuliert eine Ethernet-Karte'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'SMTP Server (Postfix)',
    comic: {
      title: 'Der digitale Postbote 📩',
      panels: [
        { emoji: '📨', text: 'SMTP: Das Protokoll, das Briefe von Server zu Server schickt.' },
        { emoji: '🏤', text: 'Postfix: Zuverlässig, schnell und viel einfacher als das alte Sendmail.' },
        { emoji: '🛑', text: 'Anti-Spam: Blockt Müll, bevor er die User nervt.' },
        { emoji: '📋', text: 'Main.cf: Hier lernt der Bote seine Verhaltensregeln.' },
      ]
    },
    keyPoints: [
      { title: 'Postfix Konfig', items: ['myhostname — Der Name Ihres Mail-Servers', 'mynetworks — Wer darf ohne PW Mails schicken?', 'relayhost — Post über Provider schicken'] },
      { title: 'Alias und Warteschlange', items: ['/etc/aliases — Namen umleiten (z.B. info -> max)', 'mailq — Checkt hängende Mails in der Schlange'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.beispiel.de\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: 'Delivery und Filter',
    comic: {
      title: 'Pakete sortieren 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve: Verschiebt Mails automatisch in die richtigen Ordner.' },
        { emoji: '⚖️', text: 'Quotas: Keiner darf die ganze Festplatte vollschreiben!' },
        { emoji: '🚫', text: 'SpamAssasin: Bewertet Mails nach ihrer Gefährlichkeit.' },
        { emoji: '🦠', text: 'ClamAV: Scannt Anhänge nach Viren.' },
      ]
    },
    keyPoints: [
      { title: 'Delivery', items: ['Maildir/ — Eine Datei pro Mail (modern & schnell)', 'mbox — Alle Mails in einer dicken Datei (alter Stil)'] },
      { title: 'Protokolle', items: ['IMAP — Mails bleiben am Server (ideal für mehrere Geräte)', 'POP3 — Mails laden und am Server löschen'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: 'Mail-Zugriff (Dovecot)',
    comic: {
      title: 'Dein Briefkasten 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot: Der Server, den Outlook oder Thunderbird zum Abrufen nutzen.' },
        { emoji: '🔐', text: 'IMAPS/POPS: Schützt dein Passwort beim Lesen durch Verschlüsselung.' },
        { emoji: '💼', text: 'Shared Folders: Postfächer mit Kollegen teilen.' },
        { emoji: '📊', text: 'Monitoring: Wer ist gerade eingeloggt?' },
      ]
    },
    keyPoints: [
      { title: 'Rolle', items: ['MDA (Mail Delivery Agent) — Legt die Mail auf die Platte', 'MRA (Mail Retrieval Agent) — Lässt den Client lesen'] },
      { title: 'Login', items: ['Kann System-User nutzen oder LDAP/MySQL einbinden'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Firewall (iptables)',
    comic: {
      title: 'Die Stadtmauer 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter: Entscheidet, was rein oder raus darf.' },
        { emoji: '🚦', text: 'Chains: INPUT (zu mir), OUTPUT (von mir), FORWARD (durch mich).' },
        { emoji: '🛑', text: 'Targets: ACCEPT (okay), DROP (ignorieren), REJECT (ablehnen).' },
        { emoji: '⚡', text: 'Stateful: Die Firewall merkt sich, wer angefangen hat.' },
      ]
    },
    keyPoints: [
      { title: 'Tabellen & Ketten', items: ['Filter (Standard) — Zum Filtern von Paketen', 'NAT — Für Adressänderungen (ex. Router)', 'INPUT / OUTPUT / FORWARD : Hauptketten'] },
      { title: 'Syntax', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — SSH auf', 'iptables -P INPUT DROP — Alles andere zu'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: 'Lokale Sicherheit & Intrusion',
    comic: {
      title: 'Digitale Wächter 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban: Wer sich zu oft vertippt, landet im Gefängnis (IP-Bann).' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter: Sucht Spuren von Hackern, die sich verstecken.' },
        { emoji: '📜', text: 'Logwatch: Fasst dir jeden Morgen per Mail das Wichtigste zusammen.' },
        { emoji: '🔒', text: 'Sudoers: Nicht jedem alle Schlüssel geben. Nur was nötig ist!' },
      ]
    },
    keyPoints: [
      { title: 'Abwehr-Tools', items: ['rkhunter / chkrootkit — Scan nach Malware/Rootkits', 'aide / tripwire — Checkt, ob Systemdateien verändert wurden'] },
      { title: 'Zugriffsverfolgung', items: ['last — Letzte Logins', 'faillog — Bericht über gescheiterte Versuche'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'SSH Sicherheit',
    comic: {
      title: 'Das Panzerschloss 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH: Dein Geheimgang zum Server.' },
        { emoji: '🚫', text: 'No Password: Nutze Keys (Public/Private). Viel sicherer!' },
        { emoji: '🕵️‍♂️', text: 'Audit: Wer hat wann welchen Befehl getippt?' },
        { emoji: '🔒', text: 'Banner: Eine Warnung für Neugierige.' },
      ]
    },
    keyPoints: [
      { title: 'SSH Härtung', items: ['PermitRootLogin no — Kein direkter Root-Login', 'PasswordAuthentication no — Zwingt zu SSH-Keys', 'AllowUsers — Nur bestimmten Leuten Zutritt geben'] },
      { title: 'Key-Management', items: ['ssh-keygen — Dein Schlüsselpaar erstellen', 'ssh-copy-id — öffentlichen Key zum Server schicken'] },
    ],
    terminal: { 
      prompt: '$ ssh-keygen -t ed25519\n$ ssh-copy-id user@server', 
      output: 'Generating public/private ed25519 key pair.\nNumber of key(s) added: 1' 
    },
  },
}
