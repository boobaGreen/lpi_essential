// LPIC-1 101 Lesson Content — French
// Contenu des 28 leçons

export const lpic1_101_lessonContent_fr = {
  // ──── Topic 1: Architecture Système ────
  'lpic1-101-1-1': {
    title: 'Matériel et Périphériques',
    comic: {
      title: 'Linux et le Matériel : Un Mariage Parfait 🤝',
      panels: [
        { emoji: '⚙️', text: 'Au démarrage, le noyau scanne les bus PCI et USB pour trouver chaque composant.' },
        { emoji: '📁', text: 'Tout est un fichier ! Les infos matériel apparaissent dans /proc et /sys comme des fichiers texte.' },
        { emoji: '🔌', text: 'udev crée les nœuds dans /dev (ex. /dev/sda) pour que nous puissions utiliser les disques.' },
        { emoji: '🛠️', text: 'lspci et lsusb sont vos microscopes pour voir ce qu\'il y a sous le capot !' },
      ]
    },
    keyPoints: [
      { title: 'FS Virtuels', items: ['/proc — Infos dynamiques (cpuinfo, meminfo)', '/sys — Structure des bus et pilotes', '/dev — Fichiers spéciaux des périphériques'] },
      { title: 'Outils', items: ['lspci — Liste les périphériques PCI/PCIe', 'lsusb — Liste les périphériques USB', 'lsblk — Vue en arbre des blocs (disques)'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Processus de Démarrage',
    comic: {
      title: 'De la Mise sous Tension au Bureau ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI : Exécute le POST et cherche le chargeur d\'amorçage dans le MBR ou la partition ESP.' },
        { emoji: '🐧', text: 'GRUB2 : L\'agent de circulation qui charge le Noyau et l\'initramfs en mémoire.' },
        { emoji: '🧠', text: 'Noyau : Initialise le matériel et monte le système de fichiers racine (/) final.' },
        { emoji: '🚀', text: 'Systemd : Le premier processus (PID 1) qui lance tous les services système.' },
      ]
    },
    keyPoints: [
      { title: 'Phases', items: ['Logiciel → Bootloader → Noyau → Init', 'dmesg — Lit les messages du noyau au démarrage', 'journalctl -b — Logs du dernier démarrage'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: 'Runlevels et Targets systemd', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: Installation et Gestion des Paquets ────
  'lpic1-101-2-1': { title: 'Disposition du Disque Dur', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: 'Chargeur d\'Amorçage (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: 'Bibliothèques Partagées', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Paquets Debian (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'Paquets RPM et YUM/DNF', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Virtualisation Linux', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: Commandes GNU et Unix ────
  'lpic1-101-3-1-1': { title: 'Ligne de Commande — Base', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: 'Ligne de Commande — Variables', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: 'Filtres de Texte', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: 'Gestion de Fichiers — Base', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: 'Gestion de Fichiers — Avancée', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: 'Redirections et Pipes — Base', terminal: { prompt: '$ ls > liste.txt', output: '' } },
  'lpic1-101-3-4-2': { title: 'Redirections et Pipes — Avancées', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: 'Processus — Base', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: 'Processus — Job Control', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: 'Priorité des Processus', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: 'Regex — Base', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: 'Regex — Étendues', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'Éditeur vi/vim', terminal: { prompt: 'vi fichier.txt', output: '[Ouvre l\'éditeur]' } },

  // ──── Topic 4: Périphériques, Filesystems et Standard FHS ────
  'lpic1-101-4-1-1': { title: 'Partitions et Filesystems', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: 'Intégrité des Filesystems', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: 'Montage et Démontage', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: 'Permissions et Propriété', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: 'Liens Hard et Soft', terminal: { prompt: '$ ln -s original link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS et Emplacements des Fichiers', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
