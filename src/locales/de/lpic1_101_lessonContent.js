// LPIC-1 101 Lesson Content — German
// Kursinhalt für alle 28 Lektionen

export const lpic1_101_lessonContent_de = {
  // ──── Topic 1: Systemarchitektur ────
  'lpic1-101-1-1': {
    title: 'Hardware und Peripherie',
    comic: {
      title: 'Linux und Hardware: Eine perfekte Ehe 🤝',
      panels: [
        { emoji: '⚙️', text: 'Beim Booten scannt der Kernel den PCI- und USB-Bus, um jede Komponente zu finden.' },
        { emoji: '📁', text: 'Alles ist eine Datei! Hardware-Infos erscheinen in /proc und /sys als Textdateien.' },
        { emoji: '🔌', text: 'udev erstellt Knoten in /dev (z.B. /dev/sda), damit wir Disks nutzen können.' },
        { emoji: '🛠️', text: 'lspci und lsusb sind deine Spektroskope, um unter die Haube zu schauen!' },
      ]
    },
    keyPoints: [
      { title: 'Virtuelle FS', items: ['/proc — Dynamische Infos (cpuinfo, meminfo)', '/sys — Bus- und Treiberstruktur', '/dev — Spezielle Gerätedateien'] },
      { title: 'PCI/USB Tools', items: ['lspci — Listet PCI/PCIe-Geräte', 'lsusb — Listet USB-Peripheriegeräte', 'lsblk — Baumansicht von Blockgeräten'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Boot-Prozess',
    comic: {
      title: 'Vom Einschalten zum Desktop ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI: Führt den POST aus und sucht nach dem Bootloader im MBR oder ESP.' },
        { emoji: '🐧', text: 'GRUB2: Der Verkehrspolizist, der den Kernel und initramfs in den Speicher lädt.' },
        { emoji: '🧠', text: 'Kernel: Initialisiert die Hardware und mountet das Root-Dateisystem (/).' },
        { emoji: '🚀', text: 'Systemd: Der erste Prozess (PID 1), der alle Systemdienste startet.' },
      ]
    },
    keyPoints: [
      { title: 'Boot-Phasen', items: ['Firmware → Bootloader → Kernel → Init', 'dmesg — Liest Kernel-Meldungen beim Booten', 'journalctl -b — Logs des letzten Boots'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: 'Runlevel und systemd Targets', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: Installation und Paketverwaltung ────
  'lpic1-101-2-1': { title: 'Festplatten-Layout', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: 'Boot-Manager (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: 'Gemeinsame Bibliotheken', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Debian-Pakete (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'RPM- und YUM/DNF-Pakete', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Linux-Virtualisierung', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: GNU- und Unix-Befehle ────
  'lpic1-101-3-1-1': { title: 'Befehlszeile — Grundlagen', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: 'Befehlszeile — Variablen', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: 'Textfilter', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: 'Dateiverwaltung — Grundlagen', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: 'Dateiverwaltung — Fortgeschritten', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: 'Umleitungen und Pipes — Grundlagen', terminal: { prompt: '$ ls > list.txt', output: '' } },
  'lpic1-101-3-4-2': { title: 'Umleitungen und Pipes — Fortgeschritten', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: 'Prozesse — Grundlagen', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: 'Prozesse — Job-Steuerung', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: 'Prozess-Prioritäten', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: 'Regex — Grundlagen', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: 'Regex — Erweitert', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'vi/vim Editor', terminal: { prompt: 'vi file.txt', output: '[Öffnet Editor]' } },

  // ──── Topic 4: Geräte, Linux-Dateisysteme und FHS ────
  'lpic1-101-4-1-1': { title: 'Partitionen und Dateisysteme', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: 'Dateisystem-Integrität', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: 'Mounten und Unmounten', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: 'Berechtigungen und Besitz', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: 'Hard- und Softlinks', terminal: { prompt: '$ ln -s original link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS und Dateipositionen', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
