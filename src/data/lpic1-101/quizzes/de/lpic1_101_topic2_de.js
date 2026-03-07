// LPIC-1 101 Quiz — Thema 2: Installation und Paketverwaltung (Deutsch)

export const lpic1_101_topic2_de = [
  // ─── 102.1 Festplattenlayout entwerfen (8 Fragen) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Dateisystemhierarchie muss während der ersten Bootphase verfügbar sein, bevor andere Dateisysteme gemountet werden?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot enthält den Kernel und die initramfs-Dateien, die der Bootloader zum Starten des Betriebssystems benötigt.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der Hauptzweck einer Swap-Partition unter Linux?',
    options: [
      'Zum Speichern von Systemsicherungen',
      'Als virtueller Speicher, wenn der physische RAM voll ist',
      'Zum Datenaustausch zwischen Windows und Linux',
      'Zum Speichern temporärer Dateien, die beim Neustart gelöscht werden'
    ],
    correct: 1,
    explanation: 'Swap-Speicher fungiert als Überlaufbereich (virtueller Speicher), in den der Kernel Speicherseiten auslagert, wenn der RAM stark ausgelastet ist.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Warum wird dringend empfohlen, /home auf einer eigenen Partition zu platzieren?',
    options: [
      'Es erhöht die Systemleistung',
      'Es ermöglicht die Neuinstallation des Betriebssystems ohne Verlust von Benutzerdaten',
      'Es verhindert, dass Benutzer zu viel CPU-Zeit beanspruchen',
      'Der Kernel benötigt es zum Booten'
    ],
    correct: 1,
    explanation: 'Wenn /home auf einer separaten Partition liegt, kann die Root-Partition (/) gelöscht werden, um das Betriebssystem zu aktualisieren oder neu zu installieren, während alle Benutzerdateien erhalten bleiben.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welches Verzeichnis sollte auf einer eigenen Partition platziert werden, wenn das System eine Datenbank betreibt oder massive Logdateien generiert?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var enthält variable Daten wie Logs, Mail-Spools und Datenbanken. Wenn es voll läuft, kann das System abstürzen, sofern es nicht isoliert ist.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Was ist die absolute maximale Anzahl an primären Partitionen auf einer Festplatte mit der klassischen MBR-Partitionstabelle?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'MBR (Master Boot Record) erlaubt maximal 4 primäre Partitionen. Um mehr zu haben, muss eine eine erweiterte Partition sein.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Technologie ermöglicht es, mehrere physische Festplatten zu einer einzigen Volume-Gruppe zu kombinieren und größenveränderbare logische Volumes zu erstellen?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (Logical Volume Manager) bietet eine Abstraktionsebene über den physischen Speicher.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche spezielle Partition ist bei der Installation von Linux auf einem modernen UEFI-basierten System zwingend erforderlich?',
    options: ['Eine Swap-Partition', 'Ein physisches LVM-Volume', 'Eine EFI-Systempartition (ESP)', 'Eine als ext4 formatierte /boot-Partition'],
    correct: 2,
    explanation: 'Die UEFI-Firmware benötigt eine EFI-Systempartition (ESP), die normalerweise als FAT32 formatiert und unter /boot/efi gemountet ist.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt die aktuelle Partitionstabelle für eine bestimmte Festplatte wie /dev/sda an?',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'fdisk -l gefolgt von einem Gerätenamen zeigt die Partitionstabelle (MBR oder GPT) für dieses Blockgerät an.',
  },

  // ─── 102.2 Einen Bootloader installieren (4 Fragen) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl installiert den GRUB2-Bootloader in den Master Boot Record der ersten Festplatte?',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install ist der Befehl zum Installieren der GRUB-Bootloader-Dateien und zum Einrichten des Bootsektors auf einer Festplatte.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl muss auf einem Debian-System nach der Bearbeitung von /etc/default/grub ausgeführt werden, um die finale grub.cfg-Datei zu generieren?',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub ist ein Wrapper-Skript für `grub-mkconfig -o /boot/grub/grub.cfg` unter Debian.',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche GRUB2-Konfigurationsdatei sollten Sie laut den eigenen Header-Kommentaren NIEMALS manuell bearbeiten?',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg wird automatisch generiert und bei jedem Update überschrieben.',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Wie wird in der GRUB2-Terminologie die erste Partition der ersten Festplatte dargestellt?',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'GRUB2 zählt Festplatten ab 0 (hd0), Partitionen jedoch normalerweise ab 1 (hd0,1).',
  },

  // ─── 102.3 Gemeinsame Bibliotheken verwalten (4 Fragen) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt die Abhängigkeiten von gemeinsamen Bibliotheken an, die von einer dynamisch verknüpften ausführbaren Datei benötigt werden?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) gibt die gemeinsamen Bibliotheken (.so-Dateien) aus, die ein Programm benötigt.',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche Konfigurationsdatei listet die Verzeichnisse auf, in denen der dynamische Linker nach gemeinsamen Bibliotheken sucht?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf definiert die Verzeichnisse, die ld.so zur Suche nach Bibliotheken verwendet.',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl MUSS nach dem Hinzufügen eines neuen Verzeichnisses zu /etc/ld.so.conf ausgeführt werden, um den Bibliotheks-Cache zu aktualisieren?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig aktualisiert den Cache des dynamischen Linkers (/etc/ld.so.cache) basierend auf den konfigurierten Verzeichnissen.',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche Befehlsoption für ldconfig ermöglicht es Ihnen, die aktuell im Cache /etc/ld.so.cache gespeicherten Bibliotheken anzuzeigen?',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) zeigt die Listen der Verzeichnisse und Kandidatenbibliotheken an, die aktuell im Cache gespeichert sind.',
  },

  // ─── 102.4 Debian-Paketverwaltung (6 Fragen) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welches Low-Level-Debian-Tool wird verwendet, um eine lokale .deb-Datei zu installieren, ohne automatisch Abhängigkeiten herunterzuladen?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg ist die Basis für die Paketverwaltung unter Debian. `dpkg -i datei.deb` installiert ein lokales Paket.',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl aktualisiert den lokalen Index der verfügbaren Pakete aus den Repositorys auf einem Debian-System?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update lädt die neuesten Paketlisten aus den Repositorys herunter.',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Hauptunterschied zwischen `apt remove` und `apt purge`?',
    options: [
      'remove deinstalliert das Paket; purge löscht das Paket aus dem apt-Cache',
      'remove hinterlässt Konfigurationsdateien; purge entfernt das Paket UND seine Konfigurationsdateien',
      'purge erzwingt das Entfernen unter Ignorierung von Abhängigkeiten',
      'Es gibt keinen Unterschied'
    ],
    correct: 1,
    explanation: 'apt purge entfernt das Paket vollständig, einschließlich der globalen Konfigurationsdateien.',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl listet alle installierten Pakete auf einem Debian-basierten System auf?',
    options: ['dpkg -l', 'apt list --installed', 'Sowohl dpkg -l als auch apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Sowohl `dpkg -l` als auch `apt list --installed` führen diese Aktion aus.',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Welches dpkg-Flag ermöglicht es herauszufinden, welches installierte Paket eine bestimmte Datei bereitgestellt hat (z. B. /bin/ls)?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) sucht nach einem Dateinamen in installierten Paketen.',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche Datei speichert die Liste der Repository-URLs, die APT zum Herunterladen von Paketen verwendet?',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list ist die Hauptkonfigurationsdatei für APT-Paketquellen.',
  },

  // ─── 102.5 RPM- und YUM/DNF-Paketverwaltung (6 Fragen) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welches Low-Level-Tool wird verwendet, um eine lokale .rpm-Datei auf einem Red Hat-basierten System zu installieren?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) ist der Basisbefehl zum Installieren eines RPM-Pakets.',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welches moderne High-Level-Tool hat YUM als Standard-Paketmanager in Fedora und RHEL 8+ abgelöst?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) ist die nächste Generation von YUM.',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl listet alle installierten RPM-Pakete auf dem System auf?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) listet alle aktuell installierten RPM-Pakete auf.',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Welcher rpm-Befehl fragt ein installiertes Paket ab, um zu sehen, welche Dateien es installiert hat?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) listet die von einem bestimmten Paket installierten Dateien auf.',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Wie finden Sie heraus, welches RPM-Paket die Datei /etc/httpd/conf/httpd.conf bereitgestellt hat?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) durchsucht die RPM-Datenbank nach dem Paket, dem die Datei gehört.',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl überprüft die Integrität eines installierten RPM-Pakets?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) vergleicht installierte Dateien mit den ursprünglichen Metadaten.',
  },

  // ─── 102.6 Virtualisierung (4 Fragen) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der Hauptunterschied zwischen Typ-1- und Typ-2-Hypervisoren?',
    options: [
      'Typ 1 benötigt Windows, Typ 2 benötigt Linux',
      'Typ 1 läuft direkt auf der Hardware (Bare-Metal), Typ 2 läuft auf einem Host-Betriebssystem',
      'Typ 1 ist für Container, Typ 2 ist für virtuelle Maschinen',
      'Es gibt keinen Unterschied'
    ],
    correct: 1,
    explanation: 'Typ 1 läuft für maximale Leistung auf Bare-Metal. Typ 2 läuft als Anwendung innerhalb eines Host-Betriebssystems.',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Wie unterscheiden sich Linux-Container (wie Docker oder Podman) von vollständigen virtuellen Maschinen?',
    options: [
      'Container sind langsamer als VMs',
      'Container teilen sich den Kernel des Host-Betriebssystems und vermeiden den Overhead eines vollständigen Gast-Betriebssystems',
      'Container können Windows-Anwendungen nativ unter Linux ausführen',
      'Container benötigen dedizierte Hardware'
    ],
    correct: 1,
    explanation: 'Container teilen sich den Host-Kernel und isolieren Prozesse, anstatt Hardware zu emulieren.',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Linux-Technologie ist ein nativer, kernelbasierter Typ-1-Hypervisor?',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'KVM (Kernel-based Virtual Machine) macht den Linux-Kernel zu einem Typ-1-Hypervisor.',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Zweck von "Guest Additions" oder "Guest Tools" in einer virtuellen Maschine?',
    options: [
      'Um dem Gast den direkten Zugriff auf die Hardware des Hosts ohne Erlaubnis zu ermöglichen',
      'Zur Bereitstellung besserer Treiber für Video, Mausintegration und gemeinsame Ordner',
      'Zum Verschlüsseln der virtuellen Festplatte',
      'Damit die VM ohne Kernel laufen kann'
    ],
    correct: 1,
    explanation: 'Guest Additions bieten optimierte Treiber und Dienste, welche die Leistung und Benutzerfreundlichkeit des Gast-Betriebssystems verbessern.',
  },
];
