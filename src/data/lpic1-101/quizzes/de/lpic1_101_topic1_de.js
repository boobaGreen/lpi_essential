// LPIC-1 101 Quiz — Topic 1: Systemarchitektur (Deutsch)

export const lpic1_101_topic1_de = [
  // ─── 101.1 Hardware und Peripherie (12 Fragen) ───
  {
    id: 'q-lpic1-101-1-001', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der Hauptvorteil von UEFI gegenüber dem traditionellen BIOS?',
    options: [
      'Es ist Open-Source-Hardware',
      'Es unterstützt nur 32-Bit-Systeme',
      'Es unterstützt GPT-Partitionen größer als 2 TB und Secure Boot',
      'Es benötigt keinen Bootloader wie GRUB2'
    ],
    correct: 2,
    explanation: 'UEFI ersetzt das traditionelle BIOS und bietet Unterstützung für GPT-Festplatten > 2 TB, Secure Boot und einen schnelleren Startvorgang.',
  },
  {
    id: 'q-lpic1-101-1-002', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welches virtuelle Kernel-Verzeichnis enthält Informationen über Systemhardware und Prozesse?',
    options: ['/dev', '/sys', '/proc', '/etc'],
    correct: 2,
    explanation: '/proc ist ein speicherbasiertes virtuelles Dateisystem, das einen Einblick in den Kernel bietet und laufende Prozesse sowie Hardware-Infos anzeigt.',
  },
  {
    id: 'q-lpic1-101-1-003', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welches virtuelle Verzeichnis wird von udev verwendet, um Geräteknoten dynamisch zu erstellen?',
    options: ['/dev', '/udev', '/sys', '/proc'],
    correct: 0,
    explanation: '/dev enthält Geräteknoten (z. B. /dev/sda), die dynamisch vom udev-Dienst verwaltet und erstellt werden.',
  },
  {
    id: 'q-lpic1-101-1-004', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl listet alle an das System angeschlossenen PCI-Geräte auf?',
    options: ['lsusb', 'lshw', 'lspci', 'lsscsi'],
    correct: 2,
    explanation: 'lspci zeigt detaillierte Informationen über alle PCI-Busse und Geräte im System an.',
  },
  {
    id: 'q-lpic1-101-1-005', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl listet die aktuell im Speicher geladenen Kernel-Module auf?',
    options: ['modprobe', 'lsmod', 'insmod', 'modinfo'],
    correct: 1,
    explanation: 'lsmod liest /proc/modules und gibt eine formatierte Liste der aktuell geladenen Kernel-Module aus.',
  },
  {
    id: 'q-lpic1-101-1-006', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ist der empfohlene Weg, um ein Kernel-Modul zusammen mit seinen Abhängigkeiten zu laden?',
    options: ['insmod', 'depmod', 'modprobe', 'lsmod'],
    correct: 2,
    explanation: 'modprobe lädt ein Modul intelligent und löst automatisch alle abhängigen Module mithilfe der Datei modules.dep auf.',
  },
  {
    id: 'q-lpic1-101-1-007', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie entfernen Sie sicher ein geladenes Kernel-Modul namens "e1000"?',
    options: ['rmmod -f e1000', 'modprobe -r e1000', 'delete e1000', 'rm /lib/modules/e1000'],
    correct: 1,
    explanation: 'modprobe -r entfernt sicher ein Modul und alle nicht verwendeten abhängigen Module.',
  },
  {
    id: 'q-lpic1-101-1-008', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Was ist der Zweck des /sys-Dateisystems (sysfs)?',
    options: [
      'Speichern von Systemkonfigurationsdateien (wie /etc)',
      'Vorhalten von kompilierten Kernel-Images',
      'Exportieren des Kernel-Gerätemodells und der Hardware-Hierarchie',
      'Protokollieren von Systemfehlern'
    ],
    correct: 2,
    explanation: 'sysfs (/sys) macht die interne Kernel-Objekt- und Gerätetreiber-Hierarchie für den User-Space verfügbar.',
  },
  {
    id: 'q-lpic1-101-1-009', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt die vom Kernel während des Startvorgangs erzeugten Meldungen an?',
    options: ['syslog', 'dmesg', 'tail /var/log/messages', 'journalctl -k'],
    correct: 1,
    explanation: 'dmesg gibt den Kernel-Ringpuffer aus, der Hardware-Erkennungs- und Treiberinitialisierungsnachrichten enthält.',
  },
  {
    id: 'q-lpic1-101-1-010', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welche Datei enthält die exakten Parameter, die beim Booten an den Kernel übergeben wurden?',
    options: ['/boot/grub/grub.cfg', '/sys/kernel', '/etc/default/grub', '/proc/cmdline'],
    correct: 3,
    explanation: '/proc/cmdline enthält die Argumente, die vom Bootloader beim Start an den Kernel übergeben wurden.',
  },
  {
    id: 'q-lpic1-101-1-011', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Welches Verzeichnis sollte Konfigurationsdateien enthalten, um Kernel-Module beim Booten automatisch zu laden?',
    options: ['/etc/modprobe.d/', '/etc/modules-load.d/', '/lib/modules/', '/boot/modules/'],
    correct: 1,
    explanation: '/etc/modules-load.d/ wird von systemd verwendet, um Module beim Systemstart bedingungslos zu laden.',
  },
  {
    id: 'q-lpic1-101-1-012', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt detaillierte Informationen über ein Kernel-Modul an (Autor, Beschreibung, Parameter)?',
    options: ['modprobe -i', 'modinfo', 'lsmod -v', 'sysctl'],
    correct: 1,
    explanation: 'modinfo extrahiert und zeigt Metadaten (wie Beschreibung, Lizenz und Parameter) aus einer Kernel-Modul-Datei an.',
  },

  // ─── 101.2 Startvorgang (10 Fragen) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was ist die richtige Reihenfolge des Linux-Bootvorgangs?',
    options: [
      'Bootloader -> BIOS -> init -> Kernel',
      'BIOS/UEFI -> Bootloader -> Kernel -> init/systemd',
      'Kernel -> BIOS -> Bootloader -> systemd',
      'Bootloader -> Kernel -> BIOS -> init'
    ],
    correct: 1,
    explanation: 'Zuerst läuft die Firmware (BIOS/UEFI), übergibt an den Bootloader (GRUB), dieser lädt den Kernel, welcher schließlich den ersten Prozess (init/systemd) startet.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Zweck der initramfs während des Bootvorgangs?',
    options: [
      'Formatieren der Festplatte',
      'Bereitstellen eines temporären Root-Dateisystems mit wichtigen Treibern zum Einbinden des echten Root-Dateisystems',
      'Prüfen des Arbeitsspeichers auf Hardwarefehler',
      'Es ist eine Sicherungskopie des Kernels'
    ],
    correct: 1,
    explanation: 'Die initramfs wird vom Bootloader geladen und liefert notwendige Kernel-Module (z. B. RAID- oder LVM-Treiber), um das eigentliche Root-Dateisystem einzuhängen.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Prozess ist historisch gesehen der erste User-Space-Prozess, der vom Kernel mit der PID 1 gestartet wird?',
    options: ['bash', 'grub', 'init', 'kthreadd'],
    correct: 2,
    explanation: 'init (oder systemd in modernen Systemen) ist der erste Prozess, der nach dem Kernel-Boot startet und die Prozess-ID (PID) 1 erhält.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Welches ist die Hauptkonfigurationsdatei, die für GRUB2 generiert wird?',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg ist die Hauptdatei, die von grub-mkconfig erstellt wird.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wenn Sie den GRUB2-Timeout oder Standard-Kernel-Parameter konfigurieren möchten, welche Datei sollten Sie bearbeiten?',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: '/etc/default/grub enthält die vom Benutzer anpassbaren Variablen, die zur Erstellung der grub.cfg verwendet werden.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'An welchem Speicherort befinden sich die Shell-Skripte, die GRUB2 zur Erstellung der Konfigurationsdatei verwendet?',
    options: ['/boot/grub/', '/etc/default/grub.d/', '/etc/grub.d/', '/usr/lib/grub/'],
    correct: 2,
    explanation: '/etc/grub.d/ enthält ausführbare Skripte, die von grub-mkconfig ausgeführt werden, um die grub.cfg aufzubauen.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Nach dem Bearbeiten von /etc/default/grub auf einem Debian/Ubuntu-System, welcher Befehl wendet die Änderungen an?',
    options: ['grub-install /dev/sda', 'update-grub', 'grub-update', 'systemctl restart grub'],
    correct: 1,
    explanation: 'update-grub ist ein Debian-spezifisches Skript, das grub-mkconfig aufruft, um die Konfiguration zu regenerieren.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl installiert den GRUB2-Bootloader in den MBR der ersten Festplatte?',
    options: ['grub-mkconfig /dev/sda', 'update-grub /dev/sda', 'grub-install /dev/sda', 'fdisk /dev/sda'],
    correct: 2,
    explanation: 'grub-install kopiert die GRUB-Images und bettet das Code-Image in den MBR der angegebenen Platte ein.',
  },
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Was ist die maximale Festplattengröße, die von der traditionellen MBR-Partitionstabelle unterstützt wird?',
    options: ['2 GB', '2 TB', '8 TB', '8 ZiB'],
    correct: 1,
    explanation: 'MBR verwendet eine 32-Bit-Sektoradressierung, was die Größe auf 2 Terabyte begrenzt.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt unter systemd spezifisch die Protokolle des aktuellen Startvorgangs an?',
    options: ['journalctl -b', 'dmesg -boot', 'tail /var/log/boot.log', 'systemctl logs'],
    correct: 0,
    explanation: 'journalctl -b filtert das systemd-Journal, um nur Meldungen seit dem letzten Systemstart anzuzeigen.',
  },

  // ─── 101.3 Runlevels und Targets (10 Fragen) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Runlevel wird in SysVinit traditionell für eine Mehrbenutzerumgebung MIT grafischer Oberfläche (GUI) verwendet?',
    options: ['Runlevel 1', 'Runlevel 3', 'Runlevel 5', 'Runlevel 6'],
    correct: 2,
    explanation: 'Runlevel 5 beinhaltet Netzwerk, Mehrbenutzer-Unterstützung und startet das grafische System.',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welches systemd-Target entspricht dem SysVinit Runlevel 3 (Mehrbenutzermodus Text)?',
    options: ['graphical.target', 'multi-user.target', 'network.target', 'rescue.target'],
    correct: 1,
    explanation: 'multi-user.target bietet ein volles Mehrbenutzersystem ohne grafische Oberfläche.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt das aktuell konfigurierte Standard-Target unter systemd an?',
    options: ['systemctl default', 'systemctl status', 'systemctl get-default', 'runlevel'],
    correct: 2,
    explanation: 'systemctl get-default gibt das Target aus, in das systemd standardmäßig bootet.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Wie wechseln Sie im laufenden systemd in den reinen Textmodus (multi-user.target), ohne neu zu starten?',
    options: [
      'systemctl switch multi-user.target',
      'systemctl isolate multi-user.target',
      'systemctl start multi-user.target',
      'systemctl default multi-user.target'
    ],
    correct: 1,
    explanation: 'systemctl isolate stoppt alle nicht benötigten Units und startet die für das neue Target erforderlichen.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Was ist der Hauptunterschied zwischen rescue.target und emergency.target?',
    options: [
      'Es gibt keinen Unterschied, sie sind Aliase.',
      'rescue.target hängt lokale Dateisysteme ein; emergency.target hängt nur / schreibgeschützt ein und startet fast nichts.',
      'emergency.target bietet Netzwerkzugriff, rescue.target nicht.',
      'rescue.target ist für GRUB-Reparaturen.'
    ],
    correct: 1,
    explanation: 'emergency.target ist die absolut minimale Shell für schwere Reparaturen. rescue.target (Runlevel 1) geht etwas weiter und hängt Dateisysteme ein.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Welcher dieser Befehle startet das System sofort sicher neu?',
    options: ['shutdown -h now', 'shutdown -r now', 'halt', 'init 0'],
    correct: 1,
    explanation: 'shutdown -r now (oder reboot) weist das System an, sofort neu zu starten.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl plant ein Herunterfahren des Systems in 15 Minuten mit einer Warnmeldung ein?',
    options: [
      'shutdown -t 15 "System-Shutdown"',
      'shutdown +15 "System-Shutdown"',
      'shutdown -h 15m "System-Shutdown"',
      'halt +15'
    ],
    correct: 1,
    explanation: 'shutdown +15 plant das Herunterfahren in 15 Minuten und warnt alle angemeldeten Benutzer.',
  },
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Wie brechen Sie ein bereits geplantes Herunterfahren ab?',
    options: ['shutdown -a', 'shutdown -c', 'killall shutdown', 'systemctl cancel shutdown'],
    correct: 1,
    explanation: 'shutdown -c bricht jedes aktuell geplante Herunterfahren des Systems ab.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl sendet eine Nachricht an die Terminals aller aktuell angemeldeten Benutzer?',
    options: ['broadcast', 'echo-all', 'wall', 'send'],
    correct: 2,
    explanation: 'wall (write all) sendet eine Nachricht an alle angemeldeten Benutzer.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl gibt in SysVinit den vorherigen und den aktuellen Runlevel aus?',
    options: ['showlevel', 'runlevel', 'who -r', 'runlevel ODER who -r'],
    correct: 3,
    explanation: 'Sowohl `runlevel` als auch `who -r` zeigen den vorherigen und den aktuellen Runlevel an.',
  },
];

