export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Monitorage et Ressources',
    comic: {
      title: 'Docteur, le serveur est brûlant ! 🩺',
      panels: [
        { emoji: '📉', text: 'Capacity Planning : n\'attendez pas que le serveur explose. Prévoyez la charge avant qu\'elle n\'arrive !' },
        { emoji: '🧠', text: 'CPU et RAM : mpstat et vmstat sont vos stéthoscopes pour écouter le pouls du système.' },
        { emoji: '🚥', text: 'I/O Wait : si le disque est lent, le CPU s\'ennuie et tout le système ralentit.' },
        { emoji: '📊', text: 'Analyse Historique : utilisez collectd ou sar pour voir comment la charge évolue dans le temps.' },
      ]
    },
    keyPoints: [
      { title: 'Monitorage CPU/RAM', items: ['uptime — Charge moyenne (1, 5, 15 min)', 'vmstat — Statistiques de mémoire virtuelle et swap', 'mpstat — Rapport détaillé pour chaque cœur CPU'] },
      { title: 'Monitorage I/O et Réseau', items: ['iostat — Utilisation des disques et débit', 'ss / netstat — État des connexions et sockets', 'iftop / nload — Trafic réseau en temps réel'] },
      { title: 'Analyse Prédictive', items: ['sar (sysstat) — Base de données historique des performances', 'Benchmarks — Mesurer les performances maximales théoriques'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: 'Prévoir les Besoins Futurs',
    comic: {
      title: 'La Boule de Cristal du SysAdmin 🔮',
      panels: [
        { emoji: '📅', text: 'Analyse de Tendance : si les données croissent de 10% par mois, quand l\'espace sera-t-il plein ?' },
        { emoji: '📈', text: 'Outils Graphiques : Cacti, MRTG et Graphite transforment les chiffres en graphiques compréhensibles.' },
        { emoji: '🔔', text: 'Alertes : définissez des seuils critiques. Mieux vaut un mail aujourd\'hui qu\'un crash demain !' },
        { emoji: '🏗️', text: 'Scaling : décidez s\'il faut ajouter de la puissance (Vertical) ou plus de serveurs (Horizontal).' },
      ]
    },
    keyPoints: [
      { title: 'Monitorage Centralisé', items: ['Collectd — Démon léger pour collecter des données', 'Prometheus — Système moderne de monitoring et séries temporelles', 'Nagios / Zabbix — Plateformes de monitoring et d\'alerte'] },
      { title: 'Visualisation', items: ['Grafana — Tableaux de bord spectaculaires pour vos données', 'Cacti — Basé sur RRDTool, idéal pour les graphiques historiques'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Composants du Noyau',
    comic: {
      title: 'Qu\'y a-t-il dans un Noyau ? 🧠',
      panels: [
        { emoji: '📦', text: 'Image du Noyau : vmlinuz est le cœur compressé et amorçable du système.' },
        { emoji: '🏗️', text: 'Initramfs : le petit sac à dos avec les pilotes nécessaires pour monter le vrai système de fichiers.' },
        { emoji: '🧩', text: 'Modules : pourquoi tout charger tout de suite ? Les modules (.ko) se chargent au besoin.' },
        { emoji: '🩹', text: 'Patching : mettez à jour le noyau sans avoir à le réécrire de zéro.' },
      ]
    },
    keyPoints: [
      { title: 'Images et Fichiers', items: ['vmlinuz — Image du noyau compressée', 'System.map — Table de symboles pour le débogage', 'config-X — Options utilisées lors de la compilation'] },
      { title: 'Démarrage et RAM Disk', items: ['initrd / initramfs — Système de fichiers temporaire pour charger les modules root', 'dracut / mkinitrd — Outils pour générer l\'initramfs'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: 'Compilation du Noyau',
    comic: {
      title: 'Tailleur sur mesure : Compilez votre Noyau ! 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig : choisissez avec soin quels pilotes activer et lesquels écarter.' },
        { emoji: '⚙️', text: 'Compilation : transforme le code source en un binaire optimisé pour votre CPU.' },
        { emoji: '📦', text: 'Installation : copie les fichiers dans /boot et les modules dans /lib/modules.' },
        { emoji: '🚀', text: 'Mise à jour GRUB : le chargeur d\'amorçage doit savoir qu\'il y a un nouveau pilote en ville !' },
      ]
    },
    keyPoints: [
      { title: 'Cibles de Configuration', items: ['make menuconfig — Interface graphique (ncurses)', 'make oldconfig — Utilise la configuration du noyau actuel', 'make localmodconfig — Active uniquement les modules chargés'] },
      { title: 'Phases de Build', items: ['make — Compile noyau et modules', 'make modules_install — Installe dans /lib/modules', 'make install — Installe dans /boot et met à jour le chargeur d\'amorçage'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: 'Gestion du Noyau à l\'Exécution',
    comic: {
      title: 'Chirurgie à cœur ouvert 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo : révèle les secrets d\'un pilote avant même de le charger.' },
        { emoji: '🔧', text: 'Sysctl : modifie les paramètres du noyau (réseau, mémoire) pendant que le système tourne.' },
        { emoji: '⚠️', text: 'Dmesg : écoute les murmures (ou les cris) du noyau en temps réel.' },
        { emoji: '💾', text: '/proc/sys : la porte d\'accès directe aux entrailles du système.' },
      ]
    },
    keyPoints: [
      { title: 'Outils Modules', items: ['lsmod — Affiche les modules chargés', 'insmod / rmmod — Charge/Supprime (sans dépendances)', 'modprobe -v — Charge avec détails et dépendances'] },
      { title: 'Paramètres Noyau', items: ['sysctl -a — Liste tous les paramètres', 'sysctl -w net.ipv4.ip_forward=1 — Active le routage', '/etc/sysctl.conf — Rend les modifications permanentes'] },
    ],
    terminal: { 
      prompt: '$ modprobe -v xfs\n$ sysctl kernel.hostname', 
      output: 'insmod /lib/modules/5.15.0/kernel/fs/xfs/xfs.ko\nkernel.hostname = linux-server' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'Personnaliser SysVinit',
    comic: {
      title: 'Le Vieux Sage : SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab : la partition qui dit au système comment démarrer ligne par ligne.' },
        { emoji: '🔢', text: 'Runlevel : du niveau 1 (single-user) au niveau 5 (graphique).' },
        { emoji: '🚦', text: 'Scripts K et S : qui s\'arrête et qui part dans chaque niveau d\'exécution.' },
        { emoji: '🔄', text: 'Telinit q : recharge la configuration sans avoir à redémarrer tout le village !' },
      ]
    },
    keyPoints: [
      { title: 'Fichiers et Répertoires', items: ['/etc/inittab — Configuration principale', '/etc/init.d/ — Répertoire des scripts de service', '/etc/rc[0-6].d/ — Liens symboliques pour les runlevels'] },
      { title: 'Commandes Classiques', items: ['runlevel — Affiche les niveaux actuel et précédent', 'init 6 — Redémarre le système', 'telinit q — Recharge /etc/inittab'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: 'Récupération du Système',
    comic: {
      title: 'Équipe de Secours Linux 🚑',
      panels: [
        { emoji: '⌨️', text: 'GRUB Edit : appuyez sur \'e\' au démarrage pour donner des ordres d\'urgence au noyau.' },
        { emoji: '🔧', text: 'init=/bin/bash : prenez le contrôle du système avant même qu\'il ne charge les services.' },
        { emoji: '📀', text: 'Live CD / Rescue Mode : montez votre système blessé dans /mnt et opérez avec chroot.' },
        { emoji: '🛠️', text: 'LILO : le vieil ancêtre de GRUB qui résiste encore dans certains coins obscurs.' },
      ]
    },
    keyPoints: [
      { title: 'Paramètres Boot', items: ['1, s, single — Démarre en mode utilisateur unique', 'systemd.unit=rescue.target — Équivalent moderne', 'rd.break — Arrête le démarrage dans l\'initramfs'] },
      { title: 'Techniques de Recovery', items: ['chroot — Change le répertoire racine pour réparer le système de l\'extérieur', 'fsck — Répare les systèmes de fichiers qui empêchent le boot'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: 'Chargeurs d\'Amorçage Avancés',
    comic: {
      title: 'Les Seigneurs du Boot 👑',
      panels: [
        { emoji: '💿', text: 'UEFI vs BIOS : le passage des vieux secteurs MBR aux partitions ESP modernes.' },
        { emoji: '📦', text: 'GRUB 2 : flexible, puissant et capable de charger des noyaux depuis presque tout FS.' },
        { emoji: '🌐', text: 'PXE : démarrez votre armée de serveurs directement du réseau, sans disques locaux !' },
        { emoji: '🔑', text: 'Secure Boot : signez numériquement votre noyau pour bloquer les intrus.' },
      ]
    },
    keyPoints: [
      { title: 'Composants GRUB 2', items: ['/boot/grub/grub.cfg — Fichier final (ne pas éditer !)', '/etc/default/grub — Variables de configuration utilisateur', 'grub-mkconfig — Génère le fichier final'] },
      { title: 'Standards Modernes', items: ['GPT — Nouvelle table de partitions pour disques > 2To', 'ESP — EFI System Partition (FAT32)', 'systemd-boot — Alternative légère pour systèmes UEFI'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Opérer sur les Systèmes de Fichiers',
    comic: {
      title: 'L\'Architecte des Disques 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs : règle les paramètres des FS ext2/3/4 sans rien formater.' },
        { emoji: '🏷️', text: 'LABEL et UUID : donnez un nom à vos disques pour ne pas les perdre dans /dev.' },
        { emoji: '💾', text: 'XFS_info : explorez les géométries avancées des FS XFS haute performance.' },
        { emoji: '🔧', text: 'Mount -o : ajoutez des super-pouvoirs comme "noatime" pour accélérer la lecture.' },
      ]
    },
    keyPoints: [
      { title: 'Outils de Tuning', items: ['tune2fs -L DATA /dev/sdb1 — Définit l\'étiquette', 'xfs_admin — Gère les paramètres XFS', 'dumpe2fs — Affiche les détails techniques du FS'] },
      { title: 'Identification', items: ['blkid — Affiche l\'UUID et le TYPE de tous les blocs', 'findmnt — Vue en arbre des montages actuels'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: 'Maintenance du Système de Fichiers',
    comic: {
      title: 'Le Mécanicien du Fichier 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck : le chirurgien qui répare les blessures du FS après un crash imprévu.' },
        { emoji: '🧠', text: 'SMART : écoute les présages du disque dur avant qu\'il ne meure définitivement.' },
        { emoji: '🧹', text: 'Badblocks : scanne chaque coin du disque en quête de secteurs défectueux.' },
        { emoji: '🧪', text: 'Debugfs : entrez dans les entrailles du FS pour récupérer des fichiers effacés.' },
      ]
    },
    keyPoints: [
      { title: 'Santé du Disque', items: ['smartctl -a /dev/sda — Rapport complet de santé matérielle', 'smartctl -t short — Lance un test rapide'] },
      { title: 'Réparation', items: ['fsck.ext4 -v /dev/sdb1 — Vérification et réparation détaillée', 'xfs_repair — Outil spécifique pour XFS'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: 'Gestion des Périphériques avec udev',
    comic: {
      title: 'Udev : l\'Agent de Circulation du Noyau 🚨',
      panels: [
        { emoji: '⚡', text: 'Hotplug : insérez une clé et udev la reconnaît en un clin d\'œil.' },
        { emoji: '📜', text: 'Règles Personnalisées : "Si j\'insère ce disque, monte-le toujours dans /backup".' },
        { emoji: '🔍', text: 'Udevadm : l\'outil pour interroger udev et tester vos nouvelles règles.' },
        { emoji: '📁', text: '/dev : là où udev crée les nœuds pour nous permettre de parler au matériel.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration', items: ['/etc/udev/rules.d/ — Là où vous écrivez vos propres règles', '/lib/udev/rules.d/ — Règles système (ne pas toucher)'] },
      { title: 'Commandes de Debug', items: ['udevadm monitor — Regarde les événements matériels en temps réel', 'udevadm info -a -p /sys/class/net/eth0 — Obtient tous les attributs pour une règle'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },
}
