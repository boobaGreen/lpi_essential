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

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'Configuration RAID',
    comic: {
      title: 'L\'Union fait la Force (et la Sécurité) 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID : pourquoi compter sur un seul disque quand vous pouvez avoir une armée ?' },
        { emoji: '⚡', text: 'RAID 0 (Stripe) : double la vitesse, mais si un disque meurt, vous perdez tout !' },
        { emoji: '🪞', text: 'RAID 1 (Mirror) : chaque donnée a un jumeau. Sécurité maximale, moitié d\'espace.' },
        { emoji: '🏗️', text: 'RAID 5/6 : l\'équilibre magique entre vitesse, espace et tolérance aux pannes.' },
      ]
    },
    keyPoints: [
      { title: 'Niveaux RAID Communs', items: ['RAID 0 — Performance pure (pas de redondance)', 'RAID 1 — Duplication (haute disponibilité)', 'RAID 5 — Parité répartie (tolère 1 panne)', 'RAID 6 — Double parité (tolère 2 pannes)'] },
      { title: 'Outils Software RAID', items: ['mdadm — La commande universelle pour le RAID logiciel sous Linux', '/proc/mdstat — Fenêtre en temps réel sur l\'état des arrays'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Réglage des Dispositifs de Stockage',
    comic: {
      title: 'Optimisation Extrême 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm : repoussez les limites de votre vieux disque mécanique pour en tirer chaque goutte de vitesse.' },
        { emoji: '🌠', text: 'NVMe : entrez dans l\'ère du flash avec des protocoles nés pour la vitesse pure.' },
        { emoji: '⚡', text: 'SD Card / SSD : gérez les paramètres d\'écriture pour allonger la durée de vie de vos mémoires.' },
        { emoji: '🛠️', text: 'Smartctl : parce que prévenir vaut mieux que pleurer sur des données perdues.' },
      ]
    },
    keyPoints: [
      { title: 'Optimisation', items: ['hdparm -tT /dev/sda — Test de vitesse de lecture (cache et disque)', 'hdparm -S 120 /dev/sda — Définit la mise en veille du disque (10 minutes)'] },
      { title: 'Technologies Modernes', items: ['nvme-cli — Outil pour gérer les disques NVMe modernes', 'SSD Trim — Maintient les performances en libérant les blocs inutilisés'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM)',
    comic: {
      title: 'Des Disques comme des Lego 🧱',
      panels: [
        { emoji: '📦', text: 'PV (Physical Volume) : transformez vos disques durs en matière première.' },
        { emoji: '🏗️', text: 'VG (Volume Group) : unissez les PV dans un seul grand chaudron d\'espace.' },
        { emoji: '🍰', text: 'LV (Logical Volume) : coupez les tranches qu\'il vous faut et agrandissez-les à volonté.' },
        { emoji: '📸', text: 'Snapshot : figez le temps et prenez une photo de votre système avant une mise à jour risquée.' },
      ]
    },
    keyPoints: [
      { title: 'Hiérarchie LVM', items: ['pvcreate / pvdisplay — Gestion des disques physiques', 'vgcreate / vgextend — Gestion des groupes de volumes', 'lvcreate / lvextend — Gestion des volumes logiques'] },
      { title: 'Avantages', items: ['Resize Online — Agrandissez les partitions sans redémarrer', 'Snapshots — Sauvegardes cohérentes et tests rapides'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Configurations Réseau de Base',
    comic: {
      title: 'Citoyens du Réseau 🌐',
      panels: [
        { emoji: '📍', text: 'Adressage : chaque machine a besoin d\'un nom et d\'une place où résider.' },
        { emoji: '🗺️', text: 'Routing : "Si vous ne savez pas où aller, demandez à la passerelle par défaut".' },
        { emoji: '🔌', text: 'Interfaces : Ethernet, Wi-Fi o interfaces virtuelles pour conteneurs et VM.' },
        { emoji: '🛠️', text: 'Iproute2 : la nouvelle suite puissante qui a mis au placard le vieux ifconfig.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration IP', items: ['ip addr show — Affiche les adresses et interfaces', 'ip route show — Affiche la table de routage', 'ip -6 addr — Configuration IPv6'] },
      { title: 'Persistance', items: ['Debian/Ubuntu : /etc/network/interfaces o Netplan', 'RHEL/CentOS : /etc/sysconfig/network-scripts/ o NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: 'Configurations Réseau Avancées',
    comic: {
      title: 'Ponts et Canaux 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding : unissez plusieurs cartes réseau pour doubler la bande passante ou la redondance.' },
        { emoji: '🌉', text: 'Bridging : créez un pont virtuel pour faire communiquer vos VMs avec le monde.' },
        { emoji: '📡', text: 'Wi-Fi Professionnel : gérez vos connexions sans fil via la ligne de commande.' },
        { emoji: '🚀', text: 'Traffic Control (tc) : ralentissez les téléchargements des collègues pour prioriser vos serveurs !' },
      ]
    },
    keyPoints: [
      { title: 'Techniques Avancées', items: ['Bonding — Agrégation de liens (LACP, Round-robin)', 'Bridging — Utilisé typiquement en virtualisation (br0)'] },
      { title: 'Wireless', items: ['iw / iwconfig — Outils pour interfaces 802.11', 'wpa_supplicant — Gestionnaire d\'authentification WPA/WPA2'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Bureau_Linux\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: 'Troubleshooting Réseau',
    comic: {
      title: 'Détective des Paquets 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump : écoutez chaque bit qui passe sur votre carte réseau.' },
        { emoji: '🔬', text: 'Wireshark : le microscope pour analyser les paquets avec une interface graphique.' },
        { emoji: '📡', text: 'Nmap : frappez à chaque porte du serveur pour voir qui répond.' },
        { emoji: '🔎', text: 'Netstat/SS : qui écoute ? Vérifiez quels processus ouvrent des sockets.' },
      ]
    },
    keyPoints: [
      { title: 'Analyse de Trafic', items: ['tcpdump -i eth0 -n — Analyse en direct (sans résolution DNS)', 'nc (netcat) — Le couteau suisse du réseau'] },
      { title: 'Scan et Sockets', items: ['nmap -sV target — Scan de ports et versions de services', 'ss -tulpn — Affiche les sockets en écoute avec PID'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Compilation et Installation',
    comic: {
      title: 'Tailleur Numérique : Compilez votre Logiciel 🧵',
      panels: [
        { emoji: '📦', text: 'Sources : téléchargez le code brut (tarball) pour avoir la toute dernière version.' },
        { emoji: '🛠️', text: './configure : vérifie si vous avez tous les outils nécessaires pour construire le programme.' },
        { emoji: '⚙️', text: 'Make : transforme des milliers de lignes de code en un binaire prêt à l\'emploi.' },
        { emoji: '🚀', text: 'Make install : installe le programme dans les répertoires système comme /usr/local/bin.' },
      ]
    },
    keyPoints: [
      { title: 'Phases de Compilation', items: ['./configure — Configure et vérifie les dépendances', 'make — Compile le code source', 'make install — Installe les fichiers binaires'] },
      { title: 'Gestion des Sources', items: ['tar -xvf — Extrait l\'archive des sources', 'patch — Applique des corrections au code existant'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: 'Opérations de Sauvegarde',
    comic: {
      title: 'L\'Assurance Vie des Données 💾',
      panels: [
        { emoji: '🛡️', text: 'Backup : ne vous demandez pas SI le disque mourra, ma QUAND. Soyez prêt !' },
        { emoji: '🔄', text: 'Rsync : le génie qui ne copie que les parties de fichiers modifiées, gagnant du temps.' },
        { emoji: '📦', text: 'Tar : empaquette des systèmes de fichiers entiers dans un seul fichier.' },
        { emoji: '☁️', text: 'Off-site : gardez une copie des données loin du serveur (ex : cloud o autre bâtiment).' },
      ]
    },
    keyPoints: [
      { title: 'Tipi di Backup', items: ['Full — Copie complète de tutte le dati', 'Incremental — Uniquement ce qui a changé depuis le dernier backup', 'Differential — Uniquement ce qui a changé depuis le dernier full'] },
      { title: 'Outils', items: ['rsync -avz — Synchronisation atomique et compressée', 'tar -cvf — Crée des archives de fichiers et répertoires', 'mt — Gère les bandes magnétiques (legacy)'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/file.txt\nuser2/photo.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: 'Notifications aux Utilisateurs',
    comic: {
      title: 'L\'Héraut du Système 📢',
      panels: [
        { emoji: '🔔', text: 'Wall : hurle un message à tous les utilisateurs connectés en ce moment.' },
        { emoji: '📅', text: '/etc/motd : le message du jour que les utilisateurs lisent à chaque login.' },
        { emoji: '📔', text: '/etc/issue : le texte de bienvenue avant même d\'insérer le mot de passe.' },
        { emoji: '🛑', text: 'Shutdown : prévient tout le monde que le serveur va faire dodo pour maintenance.' },
      ]
    },
    keyPoints: [
      { title: 'Messages Directs', items: ['wall — Message à tous les terminaux ouverts', 'write — Message à un utilisateur spécifique'] },
      { title: 'Messages Statiques', items: ['/etc/motd — Message Of The Day (après login)', '/etc/issue — Bannière pre-login (locale)', '/etc/issue.net — Bannière pre-login (réseau/SSH)'] },
    ],
    terminal: { 
      prompt: '# wall "Maintenance prévue à 22h00"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\nMaintenance prévue à 22h00' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'Configuration de Base DNS',
    comic: {
      title: 'L\'Annuaire du Web 📖',
      panels: [
        { emoji: '🌐', text: 'DNS : transforme des noms mnémotechniques (google.fr) en adresses numériques (IP).' },
        { emoji: '🏗️', text: 'BIND : le serveur DNS le plus répandu et puissant de l\'histoire d\'Internet.' },
        { emoji: '🗺️', text: 'Hiérarchie : des serveurs Root (.) aux domaines de premier niveau (.fr) et au-delà.' },
        { emoji: '🔎', text: 'Query : demandez récursivement à ceux qui savent jusqu\'à trouver la réponse.' },
      ]
    },
    keyPoints: [
      { title: 'Composants BIND', items: ['named — Le démon du service DNS', '/etc/bind/named.conf — Configuration principale', 'rndc — Outil de contrôle à distance du service'] },
      { title: 'Types de Serveurs', items: ['Master — Contient la zone originale et modifiable', 'Slave — Copie la zone depuis le master pour la redondance (Zone Transfer)'] },
    ],
    terminal: { 
      prompt: '$ dig google.fr\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.fr.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: 'Créer et Gérer des Zones',
    comic: {
      title: 'Le Cadastre des Domaines 🗺️',
      panels: [
        { emoji: '📝', text: 'Record A : le lien de base entre un nom et une adresse IPv4.' },
        { emoji: '📛', text: 'CNAME : un surnom pour un hôte qui a déjà un nom principal.' },
        { emoji: '📧', text: 'MX : indique au monde quel serveur doit recevoir le courrier pour votre domaine.' },
        { emoji: '🔄', text: 'SOA : l\'acte de naissance de la zone avec les temps de refresh et le numéro de série.' },
      ]
    },
    keyPoints: [
      { title: 'Records DNS Communs', items: ['A / AAAA — Nom -> IPv4 / IPv6', 'PTR — IP -> Nom (Zone Inverse)', 'TXT — Texte libre (utilisé pour SPF, DKIM)', 'NS — Indique les Name Servers autoritaires'] },
      { title: 'Gestion des Zones', items: ['Standard serial : AAAAMMJJNN (ex. 2024030601)', 'named-checkzone — Vérifie les erreurs avant de charger la zone'] },
    ],
    terminal: { 
      prompt: '# named-checkzone exemple.fr /etc/bind/db.exemple.fr', 
      output: 'zone exemple.fr/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: 'Sécurité et DNS Avancé',
    comic: {
      title: 'DNS sous Bouclier 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC : signe numériquement les zones pour éviter qu\'on ne vous envoie sur de faux sites.' },
        { emoji: '🚫', text: 'Access Control : décidez qui peut faire des requêtes ou demander des transferts de zone.' },
        { emoji: '🔭', text: 'TSIG : utilise des clés secrètes pour authentifier la communication Master-Slave.' },
        { emoji: '🏰', text: 'Chroot : enfermez BIND dans une prison virtuelle pour protéger le système.' },
      ]
    },
    keyPoints: [
      { title: 'Protection', items: ['allow-query — Limite qui peut interroger le serveur', 'allow-transfer — Limite qui peut copier la zone (très important !)'] },
      { title: 'Mécanismes Avancés', items: ['Split DNS — Montre des données différentes aux utilisateurs internes vs externes', 'TSIG — Clés pour des Zone Transfers sécurisés'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.fr AXFR', 
      output: '; Transfer failed. (Permission refusée si bien configuré !)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Configuration Apache',
    comic: {
      title: 'L\'Hôte du Site 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server : le roi des serveurs web, flexible et indémodable.' },
        { emoji: '📂', text: 'VirtualHost : hébergez cent sites différents sur le même serveur sans qu\'ils ne se gênent.' },
        { emoji: '🧩', text: 'Modules : activez rewrite, proxy ou php avec une simple commande.' },
        { emoji: '🔎', text: 'Logs : espionnez qui visite votre site et découvrez pourquoi cette page donne une erreur 404.' },
      ]
    },
    keyPoints: [
      { title: 'Structure Apache', items: ['/etc/apache2/ (Debian) ou /etc/httpd/ (RHEL)', 'apache2ctl configtest — Vérifie la syntaxe avant de redémarrer'] },
      { title: 'Virtual Hosting', items: ['Name-based VirtualHost — Plusieurs sites sur une seule IP', 'ServerName / ServerAlias — Définit les noms du site'] },
    ],
    terminal: { 
      prompt: '# a2ensite monsite.conf\n# systemctl reload apache2', 
      output: 'Enabling site monsite.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS et Sécurité Web',
    comic: {
      title: 'Le Cadenas Vert 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS : crypte la conversation entre le navigateur et le serveur pour garder les secrets.' },
        { emoji: '📜', text: 'Certificats : la carte d\'identité de votre site, délivrée par une autorité de confiance.' },
        { emoji: '🏎️', text: 'HTTP/2 : la nouvelle voie rapide pour rendre le chargement des pages ultra-rapide.' },
        { emoji: '🛡️', text: 'HSTS : oblige le navigateur à utiliser toujours et uniquement des connexions sécurisées.' },
      ]
    },
    keyPoints: [
      { title: 'Certificats', items: ['CSR (Certificate Signing Request) — La demande pour l\'autorité', 'SSLCertificateFile / SSLCertificateKeyFile — Configuration Apache'] },
      { title: 'Outils', items: ['OpenSSL — Le couteau suisse pour générer clés et certificats', 'Let\'s Encrypt — Certificats gratuits et automatiques'] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = monsite.fr' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx et Reverse Proxy',
    comic: {
      title: 'L\'Alternative véloce : Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx : léger, asynchrone et né pour gérer des milliers de connexions simultanées.' },
        { emoji: '🔀', text: 'Reverse Proxy : placez Nginx devant vos serveurs pour les protéger et équilibrer la charge.' },
        { emoji: '💨', text: 'Caching : sauvegarde les fichiers statiques en mémoire pour servir les images en un millième de seconde.' },
        { emoji: '🛡️', text: 'WAF : utilisez Nginx comme bouclier contre les attaques web communes.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration Nginx', items: ['/etc/nginx/nginx.conf — Configuration globale', 'server { ... } — Définition du site (similaire au VirtualHost)'] },
      { title: 'Reverse Proxy', items: ['proxy_pass — Transmet la requête à un autre serveur (ex : Node.js ou Java)'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba : le Pont entre Linux et Windows',
    comic: {
      title: 'Deux Mondes, Un Seul Disque 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba : le protocole SMB qui permet à Windows de voir Linux comme un serveur de fichiers.' },
        { emoji: '👥', text: 'Domain Controller : gérez les utilisateurs et les permissions avec Active Directory.' },
        { emoji: '📂', text: 'Partages : définissez quels dossiers sont publics et lesquels sont réservés.' },
        { emoji: '📝', text: 'Smb.conf : le cœur de la configuration de Samba.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration', items: ['[global] — Paramètres réseau et sécurité', '[share] — Définition du dossier partagé'] },
      { title: 'Outils', items: ['testparm — Vérifie la syntaxe du fichier smb.conf', 'smbpasswd -a user — Ajoute un utilisateur à Samba'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS : Partage Natif Linux',
    comic: {
      title: 'Network File System : Transparence Pure 📁',
      panels: [
        { emoji: '🔌', text: 'NFS : montez des disques distants sur votre réseau local comme s\'ils étaient internes.' },
        { emoji: '🛡️', text: 'Exports : décidez quels IP peuvent accéder et avec quelles permissions (read-only ou rw).' },
        { emoji: '🧱', text: 'RPC : les petits messagers qui permettent à NFS de parler entre les serveurs.' },
        { emoji: '⚡', text: 'NFSv4 : l\'évolution moderne avec une meilleure sécurité et gestion firewall.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration', items: ['/etc/exports — Le registre des dossiers partagés et des permissions', 'exportfs -a — Applique les modifications aux exportations'] },
      { title: 'Options Mount', items: ['soft/hard — Décide de ce qui se passe si le serveur se déconnecte', 'proto=tcp — Utilise le protocole TCP au lieu de UDP'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/distant', 
      output: '/data  192.168.1.0/24(rw,sync,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP : Adresses Automatiques',
    comic: {
      title: 'Bienvenue dans la Copropriété IP 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP : le concierge qui assigne une chambre (IP) à chaque nouvel invité du système.' },
        { emoji: '⏱️', text: 'Lease Time : l\'IP est à vous pour un temps. N\'oubliez pas de renouveler le contrat !' },
        { emoji: '📍', text: 'Réservations : "Ce serveur doit toujours avoir la chambre 101". Utilisez son adresse MAC.' },
        { emoji: '📝', text: 'Dhcpd.conf : le tableau où vous écrivez les règles d\'assignation.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration DHCP', items: ['subnet { ... } — Définit la plage d\'IP', 'option routers — Indique la passerelle par défaut', 'option domain-name-servers — Indique les DNS'] },
      { title: 'Relay Agent', items: ['dhcrelay — Permet de faire passer les requêtes DHCP à travers différents segments de réseau'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'Authentification avec PAM',
    comic: {
      title: 'PAM : le Videur Modulaire 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM (Pluggable Authentication Modules) : un système unique pour gérer tout type de login.' },
        { emoji: '🧩', text: 'Modules : changez la façon de vous authentifier sans réécrire les programmes.' },
        { emoji: '📋', text: 'Stack : "D\'abord demande le mot de passe, puis vérifie si l\'utilisateur est dans le bon groupe".' },
        { emoji: '🔐', text: 'Sécurité : forcez des mots de passe robustes et bloquez les utilisateurs après trop d\'erreurs.' },
      ]
    },
    keyPoints: [
      { title: 'Types de Modules', items: ['auth — Vérifie l\'identité (mot de passe)', 'account — Vérifie si l\'account est valide/expiré', 'password — Gère le changement de mot de passe', 'session — Opérations pré/post login'] },
      { title: 'Configuration', items: ['/etc/pam.d/ — Répertoire avec les configurations par service (sshd, login, etc)'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'Client LDAP',
    comic: {
      title: 'L\'État Civil Centralisé 📂',
      panels: [
        { emoji: '📋', text: 'LDAP : un annuaire super efficace pour trouver utilisateurs et groupes dans l\'entreprise.' },
        { emoji: '🔍', text: 'Query : trouvez tout de suite qui est le responsable IT ou quel est l\'email de Pierre.' },
        { emoji: '🌐', text: 'Single Sign-On : un seul mot de passe pour accéder à tous les ordinateurs du bureau.' },
        { emoji: '⚡', text: 'NSS : explique à Linux de chercher les utilisateurs aussi sur LDAP, pas seulement dans /etc/passwd.' },
      ]
    },
    keyPoints: [
      { title: 'Outils LDAP', items: ['ldapsearch — Interroge la base LDAP depuis le terminal', 'ldapadd / ldapmodify — Gère les données dans la base'] },
      { title: 'Service NSS', items: ['/etc/nsswitch.conf — Configure l\'ordre de recherche des utilisateurs (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=exemple,dc=fr" "(uid=pierre)"', 
      output: 'dn: uid=pierre,ou=People,dc=exemple,dc=fr\nobjectClass: posixAccount\nuid: pierre\nmail: pierre@exemple.fr' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: 'Tunnels Privés sur le Web 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN (Virtual Private Network) : crée un tunnel sécurisé à travers l\'Internet public.' },
        { emoji: '🔐', text: 'Chiffrement : personne ne peut espionner les données qui passent dans le tunnel.' },
        { emoji: '🏠', text: 'Télétravail : travaillez depuis la maison comme si vous étiez assis à votre bureau.' },
        { emoji: '🔑', text: 'Certificats TLS : utilisez les clés pour garantir que seuls les appareils autorisés entrent.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration OpenVPN', items: ['/etc/openvpn/server.conf — Paramètres serveur', '/etc/openvpn/client.conf — Paramètres client'] },
      { title: 'Modes', items: ['Tun (Routing) — Crée un tunnel IP (plus commun)', 'Tap (Bridging) — Simule une carte réseau Ethernet'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'Serveur SMTP (Postfix)',
    comic: {
      title: 'Le Facteur Numérique 📩',
      panels: [
        { emoji: '📨', text: 'SMTP : le protocole qui expédie vos lettres numériques d\'un serveur à l\'autre.' },
        { emoji: '🏤', text: 'Postfix : fiable, rapide et très facile à configurer par rapport au vieux Sendmail.' },
        { emoji: '🛑', text: 'Anti-Spam : bloque les tonnes d\'emails indésirables avant qu\'ils n\'arrivent aux utilisateurs.' },
        { emoji: '📋', text: 'Main.cf : le fichier où vous instruisez le facteur sur son comportement.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration Postfix', items: ['myhostname — Le nom de votre serveur de mail', 'mynetworks — Qui est autorisé à envoyer des mails sans mot de passe', 'relayhost — Envoie la poste via un autre serveur (ex. provider)'] },
      { title: 'Alias et Files d\'Attente', items: ['/etc/aliases — Adresses fictives (ex : info -> pierre)', 'mailq — Contrôle la file d\'attente des mails en attente d\'envoi'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.exemple.fr\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: 'Gestion Delivery et Filtres',
    comic: {
      title: 'Tri des Colis 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve : le système automatique qui déplace les mails dans les bons dossiers.' },
        { emoji: '⚖️', text: 'Quotas : ne laissez pas un seul utilisateur remplir tout le disque du serveur !' },
        { emoji: '🚫', text: 'SpamAssasin : analyse le contenu du mail et assigne un score de dangerosité.' },
        { emoji: '🦠', text: 'ClamAV : scanne chaque pièce jointe en quête de virus cachés.' },
      ]
    },
    keyPoints: [
      { title: 'Delivery', items: ['Maildir/ — Un fichier par mail (moderne et rapide)', 'mbox — Tous les mails dans un seul fichier (vieux style)'] },
      { title: 'Protocoles d\'Accès', items: ['IMAP — Les mails restent sur le serveur (idéal pour plusieurs appareils)', 'POP3 — Vous téléchargez les mails et les enlevez du serveur'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: 'Accès au Courrier (Dovecot)',
    comic: {
      title: 'Votre Boîte aux Lettres 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot : le serveur qui ouvre votre boîte aux lettres quand vous utilisez Outlook ou Thunderbird.' },
        { emoji: '🔐', text: 'IMAPS/POPS : protégez votre mot de passe avec le chiffrement pendant la lecture.' },
        { emoji: '💼', text: 'Shared Folders : partagez un dossier de courrier entre plusieurs collègues.' },
        { emoji: '📊', text: 'Monitorage : gardez un œil sur le nombre d\'utilisateurs connectés simultanément.' },
      ]
    },
    keyPoints: [
      { title: 'Rôle de Dovecot', items: ['MDA (Mail Delivery Agent) — Livres le mail sur le disque', 'MRA (Mail Retrieval Agent) — Permet au client de le lire'] },
      { title: 'Authentification', items: ['Peut utiliser les utilisateurs système ou s\'intégrer avec LDAP/MySQL'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Configurer un Firewall (iptables)',
    comic: {
      title: 'Les Murs de la Cité 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter : le mur de feu qui décide quelles données peuvent entrer ou sortir.' },
        { emoji: '🚦', text: 'Chains : INPUT (vers le serveur), OUTPUT (depuis le serveur), FORWARD (à travers le serveur).' },
        { emoji: '🛑', text: 'Targets : ACCEPT (laisse passer), DROP (ignore), REJECT (refuse et prévient).' },
        { emoji: '⚡', text: 'Stateful : le firewall se souvient de qui a commencé et laisse passer les réponses.' },
      ]
    },
    keyPoints: [
      { title: 'Tables et Chaînes', items: ['Filter (défaut) — Pour le filtrage des paquets', 'NAT — Pour changer les adresses (ex : routeur)', 'INPUT / OUTPUT / FORWARD : Chaînes principales'] },
      { title: 'Syntaxe', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — Ouvre SSH', 'iptables -P INPUT DROP — Ferme tout le reste'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: 'Sécurité Locale et Intrusions',
    comic: {
      title: 'Sentinelles Numériques 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban : regarde qui se trompe trop de mot de passe et bannit leur IP automatiquement.' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter : cherche des traces de hackers qui pourraient s\'être cachés dans le système.' },
        { emoji: '📜', text: 'Logwatch : vous résume chaque matin par mail tout ce qui s\'est passé d\'étrange.' },
        { emoji: '🔒', text: 'Sudoers : ne donnez pas de clés universelles, donnez uniquement les accès nécessaires.' },
      ]
    },
    keyPoints: [
      { title: 'Outils de Défense', items: ['rkhunter / chkrootkit — Scan à la recherche de malware', 'aide / tripwire — Vérifie si les fichiers système ont été modifiés'] },
      { title: 'Suivi des Accès', items: ['last — Dernières personnes connectées', 'faillog — Rapport des logins échoués'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'Sécurité SSH Avancée',
    comic: {
      title: 'Une Serrure Blindée 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH : votre tunnel secret pour gérer le serveur à distance.' },
        { emoji: '🚫', text: 'No Password : utilisez les clés Publiques/Privées. Bien plus sûr et pratique !' },
        { emoji: '🕵️‍♂️', text: 'Audit : enregistre chaque commande exécutée pour savoir qui a fait quoi.' },
        { emoji: '🔒', text: 'Banner : un message d\'avertissement pour décourager les curieux.' },
      ]
    },
    keyPoints: [
      { title: 'Renforcement SSH', items: ['PermitRootLogin no — Interdit le login direct en root', 'PasswordAuthentication no — Force l\'usage des clés SSH', 'AllowUsers — Limite l\'accès à certains utilisateurs'] },
      { title: 'Gestion des Clés', items: ['ssh-keygen — Génère votre paire de clés', 'ssh-copy-id — Envoie votre clé publique sur le serveur'] },
    ],
    terminal: { 
      prompt: '$ ssh-keygen -t ed25519\n$ ssh-copy-id user@serveur', 
      output: 'Generating public/private ed25519 key pair.\nNumber of key(s) added: 1' 
    },
  },
}
