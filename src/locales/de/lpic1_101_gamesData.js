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
