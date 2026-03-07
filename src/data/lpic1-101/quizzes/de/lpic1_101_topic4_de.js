// LPIC-1 101 Quiz — Thema 4: Geräte, Linux-Dateisysteme, FHS (Deutsch)

export const lpic1_101_topic4_de = [
  // ─── 104.1 Partitionen und Dateisysteme erstellen (5 Fragen) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welches interaktive Befehlszeilenwerkzeug wird traditionell zum Erstellen und Bearbeiten von MBR-Partitionstabellen verwendet?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` ist das traditionelle interaktive textbasierte Werkzeug zur Bearbeitung von Partitionstabellen (insbesondere MBR).',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welches Partitionierungswerkzeug wurde speziell für die Arbeit mit GPT (GUID Partition Table) entwickelt und bietet eine fdisk-ähnliche Oberfläche?',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) ist an fdisk angelehnt, verarbeitet aber speziell GPT-Partitionstabellen.',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welches Partitionierungswerkzeug kann im Gegensatz zu fdisk Änderungen sofort anwenden, ohne dass ein expliziter Schreibbefehl erforderlich ist?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) führt Befehle (wie das Erstellen oder Löschen von Partitionen) sofort auf der Festplatte aus.',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl schreibt ein ext4-Dateisystem auf die Partition /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` erstellt ein ext4-Dateisystem auf einem angegebenen Gerät oder einer Partition.',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl bereitet eine Partition für die Verwendung als Auslagerungsspeicher (Swap) vor?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` formatiert die Partition oder Datei mit einer Swap-Signatur.',
  },

  // ─── 104.2 Integrität von Dateisystemen aufrechterhalten (5 Fragen) ───
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Was ist eine kritische Voraussetzung vor dem Ausführen von `fsck`, um ein Dateisystem zu reparieren?',
    options: [
      'Das System muss in das Rescue-Target neu gestartet werden',
      'Das Dateisystem muss ausgehängt oder nur lesbar eingehängt sein',
      'Der Root-Benutzer muss es mit dem Flag --force ausführen',
      'Das Dateisystem muss ein logisches Volume sein'
    ],
    correct: 1,
    explanation: 'Das Ausführen von fsck auf einem aktiv eingehängten Schreib-Lese-Dateisystem kann zu schwerer Datenkorruption führen.',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt den gesamten Festplattenspeicher, den belegten und den verfügbaren Speicher auf allen eingehängten Dateisystemen an?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) berichtet über die Speicherplatzbelegung des Dateisystems. Das Flag `-h` macht die Ausgabe menschenlesbar.',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wenn Sie wissen müssen, wie viel Speicherplatz ein bestimmtes Verzeichnis (wie /var/log) verbraucht, welchen Befehl verwenden Sie?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) schätzt den Dateispeicherverbrauch; `-s` fasst die Summe zusammen.',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welches Tool ermöglicht es Ihnen, Parameter (wie maximale Einhängezyklen oder Fehlerverhalten) eines bestehenden ext4-Dateisystems zu ändern?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` ermöglicht die Anpassung einstellbarer Dateisystemparameter auf ext2/ext3/ext4-Systemen.',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Befehl wird speziell zum Prüfen und Reparieren von XFS-Dateisystemen verwendet?',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: 'Obwohl `fsck.xfs` aus Kompatibilitätsgründen existiert, ist `xfs_repair` das Hauptwerkzeug für XFS-Prüfungen.',
  },

  // ─── 104.3 Einhängen und Aushängen von Dateisystemen steuern (5 Fragen) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welche Konfigurationsdatei liest das Betriebssystem beim Booten, um Dateisysteme automatisch einzuhängen?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) enthält statische Informationen über Dateisysteme und Einhängepunkte.',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl hängt alle in /etc/fstab erwähnten Dateisysteme ein, die die Option "auto" haben?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` führt einen Einhängebefehl für jeden Eintrag in /etc/fstab aus, außer für solche mit "noauto".',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Wozu dient in /etc/fstab das sechste Feld (pass)?',
    options: [
      'Es definiert die Anzahl der Einhängevorgänge vor einer Prüfung',
      'Es steuert, ob das Dateisystem Swap verwendet',
      'Es bestimmt die Reihenfolge, in der fsck die Dateisysteme beim Booten prüft',
      'Es legt die Backup-Frequenz für dump fest'
    ],
    correct: 2,
    explanation: 'Das pass-Feld gibt fsck die Reihenfolge vor. Root ist 1, andere sind 2, 0 bedeutet keine Prüfung.',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welche fstab-Option verhindert, dass Benutzer ausführbare Dateien auf diesem Dateisystem starten?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'Die Option `noexec` verhindert die Ausführung von Binärdateien auf dem Dateisystem.',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welche Datei (oder symbolischer Link) liefert eine Liste der aktuell vom Kernel eingehängten Dateisysteme?',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` ist eine virtuelle Datei, die den aktuellen Zustand der Einhängungen des Kernels widerspiegelt.',
  },

  // ─── 104.5 Dateiberechtigungen und -eigentum verwalten (6 Fragen) ───
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Wenn eine Datei die Berechtigungen `rwxr-xr--` hat, was ist die numerische (oktale) Entsprechung?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4). Ergebnis: 754.',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ändert Eigentümer und Gruppe einer Datei bericht.doc auf Benutzer "alice" und Gruppe "finanzen"?',
    options: ['chmod alice:finanzen bericht.doc', 'chown alice:finanzen bericht.doc', 'chgrp alice:finanzen bericht.doc', 'chuser alice:finanzen bericht.doc'],
    correct: 1,
    explanation: '`chown benutzer:gruppe datei` ändert sowohl Eigentümer als auch Gruppe.',
  },
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Was passiert, wenn bei einer ausführbaren Binärdatei das SUID-Bit (Set User ID) gesetzt ist?',
    options: [
      'Die Datei kann nur vom Root-Benutzer geändert werden',
      'Der Prozess wird bei Ausführung mit den Rechten des Dateieigentümers gestartet',
      'Die Datei wird automatisch im Hintergrund ausgeführt',
      'Sie kann von niemandem außer Root gelöscht werden'
    ],
    correct: 1,
    explanation: 'SUID ermöglicht es einem Prozess, mit den Rechten des Dateieigentümers zu laufen.',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Ein Verzeichnis (/shared) hat die Berechtigungen 1777 (drwxrwxrwt). Was bewirkt das Sticky Bit (das "t") hier?',
    options: [
      'Neu erstellte Dateien erben die Gruppenzugehörigkeit',
      'Es erzwingt Nur-Lese-Zugriff für alle Dateien',
      'Benutzer können nur Dateien löschen, die ihnen selbst gehören',
      'Es macht das Verzeichnis unveränderlich'
    ],
    correct: 2,
    explanation: 'Das Sticky Bit verhindert das Löschen von Dateien in einem Verzeichnis durch Nicht-Eigentümer.',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wenn die umask 0022 ist, welche Standardberechtigungen erhält eine neu erstellte Textdatei?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Dateien starten mit 666 Basisrechten; 666 - 022 = 644.',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welches Flag wird mit `chmod` oder `chown` verwendet, um Änderungen rekursiv auf alle Dateien in einem Verzeichnis anzuwenden?',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: 'Das Flag `-R` steht für rekursiv und wendet den Befehl auf den gesamten Verzeichnisbaum an.',
  },

  // ─── 104.6 Harte und symbolische Links erstellen und ändern (4 Fragen) ───
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl erstellt einen symbolischen Link namens `shortcut` auf `datei.txt`?',
    options: ['ln datei.txt shortcut', 'ln -s datei.txt shortcut', 'link datei.txt shortcut', 'ln -c datei.txt shortcut'],
    correct: 1,
    explanation: '`ln -s ziel name` erstellt einen symbolischen Link.',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welche Aussage über harte Links ist RICHTIG?',
    options: [
      'Sie können auf Verzeichnisse zeigen',
      'Sie können über Dateisystemgrenzen hinweg zeigen',
      'Sie teilen sich exakt dieselbe Inode-Nummer mit der Originaldatei',
      'Wird das Original gelöscht, funktioniert der harte Link nicht mehr'
    ],
    correct: 2,
    explanation: 'Harte Links zeigen direkt auf die Inode und teilen sich dieselbe Inode-Nummer.',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Was passiert mit einem symbolischen Link, wenn die Originaldatei gelöscht wird?',
    options: [
      'Der symbolische Link wird "gebrochen" und funktioniert nicht mehr',
      'Der symbolische Link wird automatisch gelöscht',
      'Die Daten bleiben über den symbolischen Link erreichbar',
      'Der symbolische Link wird in einen harten Link umgewandelt'
    ],
    correct: 0,
    explanation: 'Ein symbolischer Link wird "tot" (dangling), wenn sein Ziel entfernt wird.',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Was passiert mit dem Link-Zähler einer Inode, wenn Sie einen harten Link auf eine Datei erstellen?',
    options: [
      'Er verringert sich um 1',
      'Er erhöht sich um 1',
      'Er bleibt gleich',
      'Er wird auf 0 gesetzt'
    ],
    correct: 1,
    explanation: 'Das Erstellen eines harten Links erhöht den nlink-Zähler in der Inode.',
  },

  // ─── 104.7 Systemdateien finden und Dateien an den richtigen Ort platzieren (5 Fragen) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Wo sollten laut Filesystem Hierarchy Standard (FHS) systemweite Konfigurationsdateien liegen?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc enthält hostspezifische systemweite Konfigurationsdateien.',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welches Verzeichnis ist für sich schnell ändernde Daten wie Protokolldateien und Datenbanken vorgesehen?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var enthält variable Datendateien.',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wo sollten optionale Softwarepakete von Drittanbietern laut FHS installiert werden?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt ist für die Installation zusätzlicher Softwarepakete reserviert.',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'In modernen Linux-Systemen ist welches Verzeichnis oft ein symbolischer Link auf /usr/bin?',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: 'Viele moderne Distributionen haben `/bin` und `/usr/bin` zusammengeführt, wobei `/bin` ein Link auf `/usr/bin` ist.',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welches Verzeichnis enthält temporäre Dateien, deren Erhalt zwischen Systemneustarts NICHT garantiert ist?',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` ist für temporäre Dateien; viele Systeme leeren es beim Neustart.',
  },
];
