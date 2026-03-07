// LPIC-1 101 Games Data — German

export const memoryGameData = [
  // ─── TOPIC 1 ───
  { id: 1, concept: 'Virtuelles Hardware-Dateisystem', matchId: 1, type: 'concept' },
  { id: 2, concept: '/proc', matchId: 1, type: 'definition' },
  { id: 3, concept: 'USB-Geräte auflisten', matchId: 2, type: 'concept' },
  { id: 4, concept: 'lsusb', matchId: 2, type: 'definition' },
  { id: 5, concept: 'Module intelligenter Name (Treiber laden)', matchId: 3, type: 'concept' },
  { id: 6, concept: 'modprobe', matchId: 3, type: 'definition' },
  { id: 7, concept: 'Erster Bootloader der Linux-Bootphase (Bios / EFI)', matchId: 4, type: 'concept' },
  { id: 8, concept: 'POST', matchId: 4, type: 'definition' },
  { id: 9, concept: 'Kernel Ring-Buffer Nachrichten anzeigen', matchId: 5, type: 'concept' },
  { id: 10, concept: 'dmesg', matchId: 5, type: 'definition' },
  { id: 11, concept: 'Systemd Target: Grafische Oberfläche (Runlevel 5)', matchId: 6, type: 'concept' },
  { id: 12, concept: 'graphical.target', matchId: 6, type: 'definition' },
  { id: 13, concept: 'Ziel für den nächsten Neustart setzen', matchId: 7, type: 'concept' },
  { id: 14, concept: 'systemctl set-default', matchId: 7, type: 'definition' },
  { id: 15, concept: 'System sofort anhalten', matchId: 8, type: 'concept' },
  { id: 16, concept: 'shutdown -h now', matchId: 8, type: 'definition' },

  // ─── TOPIC 2 ───
  { id: 17, concept: 'Veralteter Partitionstable-Standard (Max 2TB)', matchId: 9, type: 'concept' },
  { id: 18, concept: 'MBR', matchId: 9, type: 'definition' },
  { id: 19, concept: 'Dort liegen Logs, Spools und oft Webdaten', matchId: 10, type: 'concept' },
  { id: 20, concept: '/var', matchId: 10, type: 'definition' },
  { id: 21, concept: 'GRUB2 Konfigurationshauptdatei (Textedit)', matchId: 11, type: 'concept' },
  { id: 22, concept: '/etc/default/grub', matchId: 11, type: 'definition' },
  { id: 23, concept: 'GRUB Bootmanager Konfiguration generieren', matchId: 12, type: 'concept' },
  { id: 24, concept: 'grub2-mkconfig', matchId: 12, type: 'definition' },
  { id: 25, concept: 'Abhängigkeiten einer Binärdatei anzeigen', matchId: 13, type: 'concept' },
  { id: 26, concept: 'ldd', matchId: 13, type: 'definition' },
  { id: 27, concept: 'Paket komplett deinstallieren (inkl. Config)', matchId: 14, type: 'concept' },
  { id: 28, concept: 'dpkg -P', matchId: 14, type: 'definition' },
  { id: 29, concept: 'APT-Paketlisten aktualisieren', matchId: 15, type: 'concept' },
  { id: 30, concept: 'apt update', matchId: 15, type: 'definition' },
  { id: 31, concept: 'Welches Paket installierte Datei X (RPM)?', matchId: 16, type: 'concept' },
  { id: 32, concept: 'rpm -qf', matchId: 16, type: 'definition' },

  // ─── TOPIC 3 ───
  { id: 33, concept: 'Lokale Variable ans System vererben', matchId: 17, type: 'concept' },
  { id: 34, concept: 'export', matchId: 17, type: 'definition' },
  { id: 35, concept: 'Befehlsart ausgeben (Alias/Builtin/Datei)', matchId: 18, type: 'concept' },
  { id: 36, concept: 'type', matchId: 18, type: 'definition' },
  { id: 37, concept: 'Zählt Zeilen in einer Datei', matchId: 19, type: 'concept' },
  { id: 38, concept: 'wc -l', matchId: 19, type: 'definition' },
  { id: 39, concept: 'Liest Logs live von unten nach oben mit', matchId: 20, type: 'concept' },
  { id: 40, concept: 'tail -f', matchId: 20, type: 'definition' },
  { id: 41, concept: 'Verzeichnisse samt Inhalt kopieren', matchId: 21, type: 'concept' },
  { id: 42, concept: 'cp -r', matchId: 21, type: 'definition' },
  { id: 43, concept: 'Schnelle Dateisuche mittels Index-Datenbank', matchId: 22, type: 'concept' },
  { id: 44, concept: 'locate', matchId: 22, type: 'definition' },
  { id: 45, concept: 'Ein komprimiertes gzip-Tar-Archiv erstellen', matchId: 23, type: 'concept' },
  { id: 46, concept: 'tar -czvf', matchId: 23, type: 'definition' },
  { id: 47, concept: 'Zweigt stdout ab in eine Datei UND in pipe', matchId: 24, type: 'concept' },
  { id: 48, concept: 'tee', matchId: 24, type: 'definition' },

  // ─── TOPIC 4 ───
  { id: 49, concept: 'Dateisystem Ext4 anlegen / formatieren', matchId: 25, type: 'concept' },
  { id: 50, concept: 'mkfs.ext4', matchId: 25, type: 'definition' },
  { id: 51, concept: 'Swap-Speicher vorbereiten', matchId: 26, type: 'concept' },
  { id: 52, concept: 'mkswap', matchId: 26, type: 'definition' },
  { id: 53, concept: 'Gesamtspeicher der Partitionen anzeigen', matchId: 27, type: 'concept' },
  { id: 54, concept: 'df -h', matchId: 27, type: 'definition' },
  { id: 55, concept: 'Verteilte Block-IDs für Festplatten-Montage', matchId: 28, type: 'concept' },
  { id: 56, concept: 'UUID', matchId: 28, type: 'definition' },
  { id: 57, concept: 'Oktales Zugriffsrecht rw-r--r--', matchId: 29, type: 'concept' },
  { id: 58, concept: '644', matchId: 29, type: 'definition' },
  { id: 59, concept: 'Verhindert Fremd-Löschen im /tmp Ordner', matchId: 30, type: 'concept' },
  { id: 60, concept: 'Sticky Bit', matchId: 30, type: 'definition' },
  { id: 61, concept: 'Symbolischen Link erstellen', matchId: 31, type: 'concept' },
  { id: 62, concept: 'ln -s', matchId: 31, type: 'definition' },
  { id: 63, concept: 'Linux Dateisystem Hierarchie Standard', matchId: 32, type: 'concept' },
  { id: 64, concept: 'FHS', matchId: 32, type: 'definition' },
]

export const terminalChallengeData = [
  // ─── TOPIC 1 ───
  {
    id: 1,
    task: 'Listet alle PCI-Busse und -Geräte des Systems auf',
    solution: 'lspci',
    type: 'command',
    category: 'hardware'
  },
  {
    id: 2,
    task: 'Das Verzeichnis auflisten, welches dynamisch geräte-Dateien wie sda enthält',
    solution: 'ls /dev',
    type: 'command',
    category: 'hardware'
  },
  {
    id: 3,
    task: 'Anzeigen der Kernel-Ringpad Nachrichten vom letzten Boot',
    solution: 'dmesg',
    type: 'command',
    category: 'boot'
  },
  {
    id: 4,
    task: 'Den Status auflisten, ohne die grafische GUI neuzustarten (Runlevel 3 ersetzen)',
    solution: 'systemctl isolate multi-user.target',
    type: 'command',
    category: 'systemd'
  },
  
  // ─── TOPIC 2 ───
  {
    id: 5,
    task: 'Aktualisiere die Paketlisten-Info für Debian/Ubuntu',
    solution: 'apt update',
    type: 'command',
    category: 'package_apt'
  },
  {
    id: 6,
    task: 'Installiere ein lokales .deb Paket manuell über dpkg',
    solution: 'dpkg -i package.deb',
    type: 'command',
    category: 'package_dpkg'
  },
  {
    id: 7,
    task: 'Listen Sie alle vom RPM-Paket "bash" installierten Dateien auf',
    solution: 'rpm -ql bash',
    type: 'command',
    category: 'package_rpm'
  },
  {
    id: 8,
    task: 'Welche Systembibliotheken (.so) benötigt z.B. das ls Kommando?',
    solution: 'ldd /bin/ls',
    type: 'command',
    category: 'libraries'
  },

  // ─── TOPIC 3 ───
  {
    id: 9,
    task: 'Suchen Sie rekursiv von der Root / aus eine Datei namens "conf" (mit find)',
    solution: 'find / -name "conf"',
    type: 'command',
    category: 'files'
  },
  {
    id: 10,
    task: 'Erstellen Sie ein gepacktes Archiv (tar.gz) des Ordners "docs"',
    solution: 'tar -czvf docs.tar.gz docs',
    type: 'command',
    category: 'archive'
  },
  {
    id: 11,
    task: 'Lassen Sie den Textstrom "text" in die Datei "log.txt" schreiben und überschreiben',
    solution: 'echo "text" > log.txt',
    type: 'command',
    category: 'redirection'
  },
  {
    id: 12,
    task: 'Erzwungener Signal-Kill (Zerstören) der Prozess-ID 1234',
    solution: 'kill -9 1234',
    type: 'command',
    category: 'process'
  },

  // ─── TOPIC 4 ───
  {
    id: 13,
    task: 'Formatieren Sie die Partition /dev/sdb1 in das ext4 Dateisystem',
    solution: 'mkfs.ext4 /dev/sdb1',
    type: 'command',
    category: 'filesystem'
  },
  {
    id: 14,
    task: 'Stellen Sie den Festplattenspeicher-Bedarf der Systeme grafisch lesbar dar (-h)',
    solution: 'df -h',
    type: 'command',
    category: 'filesystem'
  },
  {
    id: 15,
    task: 'Einen Hard Link von "file" zu "link" erstellen',
    solution: 'ln file link',
    type: 'command',
    category: 'links'
  },
  {
    id: 16,
    task: 'Setzen Sie die Dateirechte script.sh auf rwx r-x r-x (Nutzer darf alles, Gruppe und Welt nur Lesen/Ausführen)',
    solution: 'chmod 755 script.sh',
    type: 'command',
    category: 'permissions'
  }
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1
  { text: 'BIOS ist moderner als UEFI.', answer: false, explanation: 'UEFI ist der moderne Nachfolger mit GPT, Secure Boot und schnellerem Boot.', difficulty: 1 },
  { text: '/proc ist ein virtuelles Dateisystem, das nur im RAM liegt.', answer: true, explanation: '/proc belegt keinen Plattenplatz; es wird dynamisch vom Kernel erzeugt.', difficulty: 1 },
  { text: 'Der init/systemd-Prozess hat immer die PID 1.', answer: true, explanation: 'init oder systemd ist der erste vom Kernel gestartete Benutzerprozess mit PID 1.', difficulty: 1 },
  { text: 'MBR unterstützt Festplatten größer als 2TB.', answer: false, explanation: 'MBR ist auf 2TB begrenzt. GPT unterstützt Festplatten bis zu 8ZiB.', difficulty: 1 },
  { text: 'apt-get update installiert Paketaktualisierungen.', answer: false, explanation: 'update lädt nur die Paketlisten herunter. upgrade installiert die eigentlichen Updates.', difficulty: 1 },
  { text: 'Gemeinsam genutzte .so-Bibliotheken werden zur Laufzeit geladen.', answer: true, explanation: '.so (Shared Objects) werden vom dynamischen Linker beim Ausführen eines Programms geladen.', difficulty: 1 },
  { text: 'Der cat-Befehl dient hauptsächlich zum Erstellen leerer Dateien.', answer: false, explanation: 'cat verkettet und zeigt Dateien an. touch erstellt leere Dateien.', difficulty: 1 },
  { text: 'Die | Pipe verbindet stdout eines Befehls mit stdin des nächsten.', answer: true, explanation: 'Eine Pipe erstellt eine Pipeline, die Ausgabe als Eingabe weitergibt.', difficulty: 1 },
  { text: 'SIGKILL (9) kann von einem Prozess abgefangen werden.', answer: false, explanation: 'SIGKILL kann nicht abgefangen oder ignoriert werden. Es beendet sofort.', difficulty: 1 },
  { text: 'Das ext4-Dateisystem unterstützt Journaling.', answer: true, explanation: 'ext4 hat eingebautes Journaling zum Schutz vor Abstürzen.', difficulty: 1 },
  { text: 'chmod 644 macht eine Datei für alle ausführbar.', answer: false, explanation: '644 = rw-r--r--. Keine Ausführungsrechte. 755 enthält Ausführungsrechte.', difficulty: 1 },
  { text: '/etc/fstab definiert Dateisysteme, die beim Booten automatisch eingehängt werden.', answer: true, explanation: 'fstab enthält Gerät, Einhängepunkt, Typ und Optionen.', difficulty: 1 },
  // Difficulty 2
  { text: 'modprobe handhabt Kernelmodul-Abhängigkeiten automatisch.', answer: true, explanation: 'modprobe nutzt depmod zur Abhängigkeitsauflösung, anders als insmod.', difficulty: 2 },
  { text: 'rescue.target entspricht dem SysVinit Runlevel 5.', answer: false, explanation: 'rescue.target ist Einzelbenutzer (Runlevel 1). Grafisch ist Runlevel 5.', difficulty: 2 },
  { text: 'dpkg installiert automatisch Paketabhängigkeiten.', answer: false, explanation: 'dpkg installiert .deb, löst aber KEINE Abhängigkeiten auf. apt tut dies.', difficulty: 2 },
  { text: 'Der uniq-Befehl entfernt alle doppelten Zeilen in einer Datei.', answer: false, explanation: 'uniq entfernt nur AUFEINANDERFOLGENDE Duplikate. Nutze sort | uniq für alle.', difficulty: 2 },
  { text: 'In einem Regex stimmt der . Punkt mit jedem Zeichen überein.', answer: true, explanation: 'Das . Metazeichen stimmt mit jedem einzelnen Zeichen (außer Newline) überein.', difficulty: 2 },
  { text: 'Ein nice-Wert von -20 bedeutet die NIEDRIGSTE Priorität.', answer: false, explanation: '-20 ist die HÖCHSTE Priorität. +19 ist die niedrigste.', difficulty: 2 },
  { text: 'parted wendet Partitionsänderungen sofort an.', answer: true, explanation: 'Anders als fdisk, das Änderungen puffert, wendet parted sie direkt auf die Platte an.', difficulty: 2 },
  { text: 'Das Sticky Bit auf einem Verzeichnis verhindert, dass jemand Dateien löscht.', answer: false, explanation: 'Nur der Dateibesitzer (oder root) kann löschen. Es verhindert das Löschen fremder Dateien.', difficulty: 2 },
  { text: 'fsck muss auf einem eingehängten Dateisystem ausgeführt werden.', answer: false, explanation: 'fsck muss auf AUSGEHÄNGTEN Dateisystemen laufen, um Datenverlust zu vermeiden.', difficulty: 2 },
  { text: 'UUID ist eine eindeutige und permanente Kennung für ein Dateisystem.', answer: true, explanation: 'UUIDs werden bei der Formatierung erstellt und ändern sich nicht, anders als /dev/sdX-Namen.', difficulty: 2 },
  // Difficulty 3
  { text: 'In ERE-Regex benötigt + ein Escape (\\\\+) um zu funktionieren.', answer: false, explanation: 'In Extended RE (-E) funktioniert + ohne Escape. Es braucht Escape in Basic RE.', difficulty: 3 },
  { text: 'emergency.target hängt nur / im Read-only ein und startet keine Dienste.', answer: true, explanation: 'emergency ist das restriktivste Target für extreme Wiederherstellung.', difficulty: 3 },
  { text: 'Mit umask 077 erhalten neue Dateien rw------- (600) Berechtigungen.', answer: true, explanation: '666 Standard - 077 umask = 600.', difficulty: 3 },
  { text: 'rpm -V überprüft die Abhängigkeiten eines installierten Pakets.', answer: false, explanation: 'rpm -V überprüft Integrität (Prüfsummen, Berechtigungen). rpm -R prüft Abhängigkeiten.', difficulty: 3 },
  { text: 'Hard Links können auf Verzeichnisse zeigen.', answer: false, explanation: 'Linux verhindert Hard Links auf Verzeichnisse, um Dateisystem-Schleifen zu vermeiden.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: 'PCI-Geräte auflisten', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: 'Standard-Target anzeigen', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: 'Paketliste aktualisieren', difficulty: 1 },
  { prompt: 'head -n _____ file', answer: '10', hint: 'Standard-Zeilenanzahl', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: 'übergeordnete Verzeichnisse erstellen', difficulty: 1 },
  { prompt: 'chmod _____ file', answer: '755', hint: 'setze rwxr-xr-x', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: 'Dateisystem einhängen', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: 'rekursiv entfernen', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: 'alle Prozesse anzeigen', difficulty: 1 },
  { prompt: 'grep _____ \"pattern\" file', answer: '-i', hint: 'Groß-/Kleinschreibung ignorieren', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ module', answer: '-r', hint: 'Modul entfernen', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: 'System anhalten', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'GRUB-Konfigurationspfad', difficulty: 2 },
  { prompt: 'dpkg _____ /path/to/file', answer: '-S', hint: 'Paket zu Datei suchen', difficulty: 2 },
  { prompt: 'rpm _____ package', answer: '-qi', hint: 'Paketinfo anzeigen', difficulty: 2 },
  { prompt: 'find /etc -name \"_____\"', answer: '*.conf', hint: 'Konfigurationsdateien', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'SIGKILL-Signal', difficulty: 2 },
  { prompt: 'nice -n _____ cmd', answer: '10', hint: 'niedrige Priorität', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: 'gängiges Linux-Dateisystem', difficulty: 2 },
  { prompt: 'ln _____ /original /link', answer: '-s', hint: 'symbolischen Link erstellen', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'Target ohne Neustart wechseln', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: 'ergibt Datei 644, Verz. 755', difficulty: 3 },
  { prompt: 'sed \"s/old/new/_____\" file', answer: 'g', hint: 'global ersetzen', difficulty: 3 },
  { prompt: 'grep -_____ \"error|warning\" file', answer: 'E', hint: 'Extended Regex aktivieren', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: 'Prozess-ID angeben', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: 'Boot-Reihenfolge',
    question: 'Ordne die Linux-Bootphasen:',
    items: [
      { text: 'Kernel initialisiert Hardware', order: 3 },
      { text: 'init/systemd startet Dienste', order: 4 },
      { text: 'BIOS/UEFI führt POST aus', order: 1 },
      { text: 'GRUB2 lädt Kernel/initramfs', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: 'Runlevel → Target',
    question: 'Ordne SysVinit Runlevel dem systemd Target zu:',
    items: [
      { text: 'Runlevel 3 (Mehrbenutzermodus Text)', matches: 'multi-user.target' },
      { text: 'Runlevel 5 (GUI)', matches: 'graphical.target' },
      { text: 'Runlevel 1 (Einzelbenutzer)', matches: 'rescue.target' },
      { text: 'Runlevel 0 (Halt)', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: 'Paketfamilien',
    question: 'Ordne die Befehle der Paketfamilie zu:',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RPM' },
      { text: 'dnf install', category: 'RPM' },
      { text: 'zypper install', category: 'RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: 'Oktale Berechtigungen',
    question: 'Ordne die Oktalnotation den Berechtigungen zu:',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]
