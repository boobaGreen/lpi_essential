export const lpic2_extendedContent_fr = {
  'lpic2-200-1': {
    title: 'Monitorage des Ressources avec sar, vmstat et iostat',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Prendre le Pouls du Système' },
      { type: 'paragraph', text: 'Avant de pouvoir planifier, il faut savoir ce qui se passe. Le package sysstat offre les outils fondamentaux pour cette tâche.' },
      { type: 'table', headers: ['Outil', 'Fonction Principale'], rows: [
        ['sar', 'Le collecteur historique. Enregistre l\'activité (CPU, mémoire, E/S) pour une analyse a posteriori'],
        ['vmstat', 'Affiche l\'état de la mémoire virtuelle, des processus et de l\'activité CPU en temps réel'],
        ['iostat', 'Se concentre sur les statistiques des dispositifs de stockage (IOPS, temps d\'attente)'],
        ['mpstat', 'Affiche les statistiques de chaque processeur individuellement dans un système multi-cœur'],
      ]},
      { type: 'code', title: 'Exemple d\'utilisation de sar pour voir la charge CPU d\'hier', prompt: 'sar -u -f /var/log/sysstat/sa15', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Un `iowait` élevé dans `vmstat` ou `sar` indique souvent que votre CPU attend après votre disque dur. C\'est un signe clair qu\'il faut investir dans du stockage plus rapide !' }
    ]
  },

  'lpic2-201-1': {
    title: 'Composants du Noyau et Compilation',
    sections: [
      { type: 'heading', level: 2, emoji: '🧠', text: 'Le Cerveau de Linux' },
      { type: 'paragraph', text: 'Le noyau est le cœur du système. Savoir le compiler permet de le tailler sur mesure pour des besoins spécifiques.' },
      { type: 'table', headers: ['Commande', 'Utilité lors de la Compilation'], rows: [
        ['make menuconfig', 'L\'interface en pseudo-graphique (ncurses) pour choisir quoi inclure dans le noyau'],
        ['make', 'Lance la compilation du noyau (vmlinuz) et de ses modules'],
        ['make modules_install', 'Copie les modules nouvellement compilés dans /lib/modules/'],
        ['make install', 'Installe le noyau dans /boot et met à jour le chargeur d\'amorçage'],
      ]},
      { type: 'code', title: 'Nettoyer l\'arbre source avant de compiler', prompt: 'make mrproper', output: '' }
    ]
  },

  'lpic2-201-2': {
    title: 'Gestion des Modules du Noyau',
    sections: [
      { type: 'heading', level: 2, emoji: '🧩', text: 'Les Pièces du Puzzle' },
      { type: 'paragraph', text: 'Les modules permettent d\'ajouter des fonctionnalités (souvent des pilotes de périphériques) sans avoir à recompiler ou redémarrer le système complet.' },
      { type: 'table', headers: ['Outil', 'Ce qu\'il fait'], rows: [
        ['lsmod', 'Liste tous les modules actuellement chargés en mémoire'],
        ['modinfo', 'Affiche des informations détaillées sur un module (options, dépendances, auteur)'],
        ['modprobe', 'L\'outil intelligent pour charger un module. Il résout et charge automatiquement les dépendances'],
        ['insmod / rmmod', 'Outils de bas niveau pour insérer/retirer un module. Ne gèrent pas les dépendances !'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Privilégiez toujours `modprobe` plutôt que `insmod`. `insmod` échouera lamentablement si le module dépend d\'un autre module qui n\'est pas encore chargé.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Personnalisation et Application de Correctifs (Patching)',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Maintenir le Noyau à Jour' },
      { type: 'paragraph', text: 'Souvent, vous n\'avez pas besoin de télécharger l\'intégralité du nouveau noyau (des Go de données), mais juste d\'appliquer un "patch" (correctif) pour corriger des bugs ou failles de sécurité.' },
      { type: 'code', title: 'Application d\'un correctif', prompt: 'bzcat patch-5.10.x.bz2 | patch -p1', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'option `-p1` dans la commande `patch` est utilisée pour "ignorer" le premier niveau de répertoire dans le chemin de fichier contenu dans le correctif, l\'adaptant à votre répertoire actuel.' }
    ]
  },

  'lpic2-202-1': {
    title: 'Démarrage du Système et System V Init',
    sections: [
      { type: 'heading', level: 2, emoji: '🎬', text: 'Le Moteur s\'Allume' },
      { type: 'paragraph', text: 'Bien que `systemd` soit aujourd\'hui dominant, LPIC-2 couvre en détail le processus de démarrage traditionnel SysV, centré autour de `/etc/inittab`.' },
      { type: 'table', headers: ['Niveau d\'Exécution (Runlevel)', 'Description'], rows: [
        ['1 ou S', 'Mode Mono-utilisateur (Single user). Généralement utilisé pour la maintenance d\'urgence sans réseau'],
        ['3', 'Mode Multi-utilisateur complet avec réseau, sans interface graphique'],
        ['5', 'Comme le 3, mais démarre le gestionnaire de connexion graphique (X11 / Wayland)'],
      ]},
      { type: 'code', title: 'Changer le runlevel par défaut via le noyau (sous GRUB)', prompt: 'linux16 /vmlinuz... root=... x-systemd.unit=rescue.target', output: '' }
    ]
  },

  'lpic2-202-2': {
    title: 'GRUB 2 et Récupération du Système',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Le Maître de l\'Amorçage' },
      { type: 'paragraph', text: 'GRUB 2 a remplacé l\'ancien GRUB (Classic). Il est plus modulaire et prend en charge l\'UEFI.' },
      { type: 'table', headers: ['Fichier / Commande', 'Rôle dans GRUB 2'], rows: [
        ['/etc/default/grub', 'Le fichier texte où vous modifiez les options principales (comme le timeout)'],
        ['/etc/grub.d/', 'Le dossier contenant les scripts qui génèrent le menu final'],
        ['grub-mkconfig', 'La commande vitale qui lit les éléments ci-dessus et crée le véritable fichier grub.cfg'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Ne modifiez jamais manuellement le fichier `/boot/grub/grub.cfg` (ou `/boot/grub2/grub.cfg`) ! Vos modifications seront écrasées à la prochaine mise à jour du noyau ou appel de `grub-mkconfig`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Chargeurs d\'Amorçage Alternatifs',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX et ISOLINUX' },
      { type: 'paragraph', text: 'Souvent utilisés pour les clés USB et les Live CD en raison de leur légèreté et de leur simplicité.' },
      { type: 'table', headers: ['Variante', 'Utilisation'], rows: [
        ['SYSLINUX', 'Système de fichiers FAT (clés USB)'],
        ['ISOLINUX', 'Standard ISO-9660 (CD/DVD)'],
        ['EXTLINUX', 'Systèmes de fichiers ext2/3/4 ou btrfs'],
        ['PXELINUX', 'Démarrage par le réseau via TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Opérer sur les Systèmes de Fichiers (ext et xfs)',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Les Fondations du Stockage' },
      { type: 'paragraph', text: 'Comprendre comment manipuler les structures des systèmes de fichiers est crucial pour tout système Linux.' },
      { type: 'table', headers: ['Commande', 'Système', 'Fonction'], rows: [
        ['tune2fs', 'ext2/3/4', 'Ajuste les paramètres (ex: réserver de l\'espace pour root, changer le label)'],
        ['dumpe2fs', 'ext2/3/4', 'Affiche les informations internes du super-bloc et des groupes de blocs'],
        ['xfs_info', 'XFS', 'Affiche la géométrie détaillée et les détails d\'un système XFS monté'],
        ['xfs_growfs', 'XFS', 'Agrandit un système de fichiers XFS pour occuper tout l\'espace de sa partition'],
      ]}
    ]
  },

  'lpic2-203-2': {
    title: 'Maintenance du Stockage et S.M.A.R.T.',
    sections: [
      { type: 'heading', level: 2, emoji: '🏥', text: 'La Clinique des Disques Durs' },
      { type: 'paragraph', text: 'Surveiller la santé matérielle permet de réagir avant la perte de données castastrophique.' },
      { type: 'table', headers: ['Outil', 'Explication'], rows: [
        ['fsck', 'Vérifie et répare l\'intégrité logique du système de fichiers (Ne jamais exécuter sur une partition montée en lecture-écriture !)'],
        ['smartctl', 'Interroge le matériel du disque dur pour connaître son état de santé physique, ses températures et ses erreurs'],
      ]},
      { type: 'code', title: 'Lancer un test SMART court sur le disque', prompt: 'smartctl -t short /dev/sda', output: '' }
    ]
  },

  'lpic2-203-3': {
    title: 'Gestion des Périphériques avec udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🤖', text: 'Le Chef d\'Orchestre Moderne des Dispositifs' },
      { type: 'paragraph', text: '`udev` a remplacé l\'ancien `/dev` statique. Il écoute le noyau et crée les nœuds de périphériques dynamiquement quand le matériel est branché.' },
      { type: 'table', headers: ['Concept udev', 'Utilité'], rows: [
        ['/etc/udev/rules.d/', 'Dossier où l\'administrateur écrit ses propres règles personnalisées (pour forcer un nom de périphérique ou des droits)'],
        ['udevadm info', 'Permet de voir les attributs complets d\'un périphérique (nécessaires pour écrire une bonne règle)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Une règle udev permet de donner toujours le nom `cle_usb_backup` à un disque dur externe spécifique, peu importe le port USB où on le branche, en se basant sur son numéro de série.' }
    ]
  },

  'lpic2-204-1': {
    title: 'Configuration RAID Logiciel',
    sections: [
      { type: 'heading', level: 2, emoji: '💽', text: 'Combinaison de Disques pour Plus de Puissance' },
      { type: 'paragraph', text: 'Le RAID (Redundant Array of Independent Disks) permet de combiner plusieurs disques physiques en une seule unité logique pour améliorer les performances, la redondance, ou les deux.' },
      { type: 'table', headers: ['Niveau RAID', 'Objectif Principal'], rows: [
        ['RAID 0', 'Performance pure (Stripping). Aucune tolérance aux pannes'],
        ['RAID 1', 'Miroir (Mirroring). Tolérance aux pannes totale (1 disque) mais divise l\'espace par 2'],
        ['RAID 5', 'Parité répartie. Bon compromis performance/sécurité. Tolère la perte d\'un disque. Nécessite 3 disques minimum'],
        ['RAID 6', 'Double parité. Tolère la perte de deux disques simultanément'],
      ]},
      { type: 'code', title: 'Créer un RAID 1 avec deux partitions', prompt: 'mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1', output: '' }
    ]
  },

  'lpic2-204-2': {
    title: 'Logical Volume Manager (LVM)',
    sections: [
      { type: 'heading', level: 2, emoji: '🍰', text: 'Couper son Espace comme un Gâteau' },
      { type: 'paragraph', text: 'LVM ajoute une couche d\'abstraction sur les disques physiques, ce qui permet une gestion extrêmement flexible de l\'espace disque : vous pouvez redimensionner des partitions ou ajouter des disques à un système de fichiers en fonctionnement.' },
      { type: 'table', headers: ['Composant LVM', 'Description'], rows: [
        ['PV (Physical Volume)', 'Disque dur ou partition physique brute (ex: /dev/sdb)'],
        ['VG (Volume Group)', 'Le "pool" d\'espace de stockage créé en réunissant plusieurs PV'],
        ['LV (Logical Volume)', 'La "partition" logique finale, créée dans le VG, et formatable avec ext4, xfs, etc.'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'LVM permet aussi de créer des "Snapshots", une image instantanée d\'un volume logique, pratique pour faire des sauvegardes cohérentes sans arrêter les services.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Optimisation du Stockage (iSCSI, hdparm)',
    sections: [
      { type: 'heading', level: 2, emoji: '⚡', text: 'Extraire le Maximum du Stockage' },
      { type: 'paragraph', text: 'Une fois le stockage monté, on peut l\'optimiser.' },
      { type: 'table', headers: ['Outil/Technologie', 'Rôle'], rows: [
        ['hdparm', 'Régler et tester les paramètres bas niveau des disques SATA/IDE (ex: hdparm -tT /dev/sda pour un test de vitesse)'],
        ['nvme-cli', 'L\'équivalent moderne pour la gestion fine des disques NVMe ultra rapides'],
        ['iSCSI', 'Permet d\'attacher un disque distant via le réseau IP, apparaissant localement comme un disque /dev/sdX'],
        ['SSD Trim', 'Commande (fstrim) primordiale pour avertir le SSD des blocs libres et préserver ses performances'],
      ]}
    ]
  },

  'lpic2-205-1': {
    title: 'Configuration et Routage IP',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Le Centre de Tri du Trafic' },
      { type: 'paragraph', text: 'La configuration réseau moderne sous Linux s\'appuie sur la suite `iproute2` (qui remplace l\'ancien ifconfig).' },
      { type: 'table', headers: ['Commande ip', 'Utilité'], rows: [
        ['ip addr', 'Affiche et modifie les adresses IP des interfaces'],
        ['ip link', 'Affiche et modifie l\'état des liens (ex: monter/descendre une interface, changer la MAC)'],
        ['ip route', 'Affiche et gère la table de routage, décidant où les paquets doivent aller'],
      ]},
      { type: 'code', title: 'Activer le routage (faire de Linux un routeur)', prompt: 'echo 1 > /proc/sys/net/ipv4/ip_forward\n# ou modifier /etc/sysctl.conf', output: '' }
    ]
  },

  'lpic2-205-2': {
    title: 'Technologies Réseau Avancées',
    sections: [
      { type: 'heading', level: 2, emoji: '🌉', text: 'Ponts et Agrégations' },
      { type: 'paragraph', text: 'Pour des besoins spécifiques comme la haute disponibilité ou la virtualisation, on fusionne ou on relie les interfaces.' },
      { type: 'table', headers: ['Technologie', 'Objectif'], rows: [
        ['Bonding', 'Agrégation de plusieurs cartes réseau physiques en une seule logique pour doubler la bande passante ou tolérer la panne d\'un câble'],
        ['Bridging', 'Un "pont" réseau. Connecte plusieurs segments réseau au niveau 2 (Liaison de données). Parfait pour les machines virtuelles'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Le mode de bonding le plus intelligent est souvent le "Mode 4" (802.3ad / LACP) qui nécessite que le switch en face soit aussi configuré.' }
    ]
  },

  'lpic2-205-3': {
    title: 'Dépannage Réseau',
    sections: [
      { type: 'heading', level: 2, emoji: '🩺', text: 'Le Stéthoscope du Réseau' },
      { type: 'paragraph', text: 'L\'arsenal de diagnostic réseau sous Linux est incroyablement puissant.' },
      { type: 'table', headers: ['Outil', 'Ce qu\'il dépanne'], rows: [
        ['ping / traceroute', 'Vérifie si la cible est joignable et par quels routeurs passe le paquet'],
        ['ss (ou netstat)', 'Affiche les ports ouverts (en écoute) et les connexions actives'],
        ['nc (netcat)', 'Le "couteau suisse" TCP/UDP. Idéal pour tester si un port est ouvert ou envoyer des données brutes'],
        ['tcpdump', 'L\'analyseur de paquets ultime pour observer le trafic brut directement sur le fil'],
      ]},
      { type: 'code', title: 'Capturer les paquets HTTP (port 80) sur l\'interface eth0', prompt: 'tcpdump -i eth0 port 80 -n', output: '' }
    ]
  },

  'lpic2-206-1': {
    title: 'Compilation de Logiciels depuis les Sources',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Forger ses Propres Outils' },
      { type: 'paragraph', text: 'Parfois, la version des dépôts officiels est trop vieille, ou vous avez besoin d\'activer une option très spécifique. La compilation devient la seule voie.' },
      { type: 'table', headers: ['Cérémonial de Compilation', 'Ce qu\'il fait'], rows: [
        ['tar xzf', 'Extraire l\'archive (le code source)'],
        ['./configure', 'Vérifie que vous avez tous les prérequis et crée le Makefile. C\'est ici qu\'on ajoute les options comme --prefix=/opt/monapp'],
        ['make', 'C\'est le forgeage lui-même, il compile le code en machine'],
        ['sudo make install', 'Copie les binaires et fichiers produits dans les répertoires système finaux (/usr/local/bin etc.)'],
      ]}
    ]
  },

  'lpic2-206-2': {
    title: 'Sauvegarde et Synchronisation avec rsync',
    sections: [
      { type: 'heading', level: 2, emoji: '🔄', text: 'Copier Seulements les Différences' },
      { type: 'paragraph', text: '`rsync` est le roi incontesté de la sauvegarde à chaud et de la synchronisation distante grâce à son algorithme delta : il ne copie que les bouts de fichiers qui ont changé !' },
      { type: 'code', title: 'La commande magique de sauvegarde d\'archive', prompt: 'rsync -avz /home/ /backup/home/', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'option `-a` (archive) équivaut à `-rlptgoD`. Elle est cruciale car elle copie récursivement ET préserve les permissions, les dates de modification, les liens symboliques et les propriétaires !' }
    ]
  },

  'lpic2-206-3': {
    title: 'Information Systématique aux Utilisateurs',
    sections: [
      { type: 'heading', level: 2, emoji: '📣', text: 'Le Mégaphone de l\'Admin' },
      { type: 'paragraph', text: 'Un bon administrateur prévient ses usagers avant de couper un serveur.' },
      { type: 'table', headers: ['Moyen de Communication', 'Quand est-ce affiché / envoyé ?'], rows: [
        ['/etc/motd', '(Message of the Day) S\'affiche APRES qu\'un utilisateur a réussi à se connecter (SSH ou local)'],
        ['/etc/issue', 'S\'affiche AVANT le prompt de connexion, mais uniquement sur les terminaux locaux/ttys'],
        ['wall', 'Envoie un message tapageur immédiatement sur tous les terminaux de tous les utilisateurs actuellement connectés'],
      ]}
    ]
  },

  'lpic2-207-1': {
    title: 'Configuration de Base du Serveur DNS BIND9',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'L\'Annuaire Géant d\'Internet' },
      { type: 'paragraph', text: 'BIND (Berkeley Internet Name Domain) est le serveur DNS le plus utilisé au monde. Son fichier névralgique est `/etc/bind/named.conf`.' },
      { type: 'table', headers: ['Rôle du Serveur BIND', 'Ce qu\'il fait'], rows: [
        ['Caching Only (Cache pur)', 'Ne fait que retenir en mémoire les résultats des requêtes pour accélérer les prochaines demandes identiques'],
        ['Forwarder (Transitaire)', 'Passe la patate chaude des requêtes qu\'il ne connaît pas à un autre serveur DNS supérieur'],
        ['Authoritative (Faisant Autorité)', 'Le boss final pour un domaine spécifique. C\'est lui qui détient les VRAIS enregistrements d\'une zone'],
      ]},
      { type: 'code', title: 'Vérifier la syntaxe de named.conf sans tout casser', prompt: 'named-checkconf /etc/bind/named.conf', output: '' }
    ]
  },

  'lpic2-207-2': {
    title: 'Création et Gestion des Zones DNS',
    sections: [
      { type: 'heading', level: 2, emoji: '🗺️', text: 'Cartographier son Domaine' },
      { type: 'paragraph', text: 'Un domaine est découpé en zones : la zone directe (Nom -> IP) et la zone inverse (IP -> Nom).' },
      { type: 'table', headers: ['Enregistrement', 'Son Vrai Rôle'], rows: [
        ['SOA (Start of Authority)', 'Déclare l\'autorité sur la zone, avec des paramètres vitaux comme le numéro de série (Serial) à incrémenter à chaque modif'],
        ['NS (Name Server)', 'Pointe vers les serveurs DNS de la zone'],
        ['A / AAAA', 'Associe un Nom à une IP (v4 / v6)'],
        ['PTR (Pointer)', 'Fait l\'inverse : associe une IP à un Nom (utilisé dans les zones in-addr.arpa)'],
        ['MX (Mail Exchange)', 'Indique vers quel serveur envoyer les E-Mails de ce domaine'],
        ['CNAME', 'Un simple alias. Attention : un CNAME ne doit jamais pointer vers un autre CNAME !'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Si vous modifiez un fichier de zone manuellement, IL FAUT TOUJOURS augmenter le numéro "Serial". Sinon, les serveurs esclaves penseront qu\'il n\'y a eu aucun changement et ne se mettront pas à jour !' }
    ]
  },

  'lpic2-207-3': {
    title: 'Sécurisation d\'un Serveur DNS',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Empêcher l\'Empoisonnement' },
      { type: 'paragraph', text: 'Le DNS classique est très vulnérable. Des pirates peuvent falsifier des réponses (Cache Poisoning) pour rediriger vos utilisateurs.' },
      { type: 'table', headers: ['Technologie de Sécurité', 'Comment ça marche'], rows: [
        ['DNSSEC', 'Signe numériquement les enregistrements avec un jeu de clés publiques/privées. Garantit que la réponse n\'a pas été altérée en chemin'],
        ['TSIG (Transaction Signature)', 'Utilise une clé secrète partagée pour authentifier les seuls serveurs (Maître/Esclave) autorisés à se synchroniser (Zone Transfer)'],
        ['Chroot', 'Enferme le processus BIND dans un faux dossier racine. Si un pirate exploite BIND, il ne pourra pas toucher au vrai système'],
      ]}
    ]
  },

  'lpic2-208-1': {
    title: 'Configuration de Base d\'Apache Web Server',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Le Patriarche du Web' },
      { type: 'paragraph', text: 'Apache s\'appuie sur une structure extrêmement modulaire. Ses fameux "VirtualHosts" sont sa plus grande force.' },
      { type: 'table', headers: ['Concept Apache', 'Rôle'], rows: [
        ['VirtualHost', 'Permet d\'héberger plusieurs sites web (noms de domaine différents) sur la MÊME adresse IP'],
        ['DocumentRoot', 'Le répertoire physique exact où se trouvent les fichiers HTML/PHP de ce VirtualHost'],
        ['.htaccess', 'Un fichier caché permettant de surcharger la configuration d\'Apache répertoire par répertoire (très utilisé mais freine les performances)'],
        ['MPM (Multi-Processing Module)', 'Gère la façon dont Apache traite les requêtes : Prefork (processus), Worker (threads) ou Event'],
      ]},
      { type: 'code', title: 'Activer un nouveau site (sur Debian/Ubuntu)', prompt: 'a2ensite mondomaine.conf\nsystemctl reload apache2', output: '' }
    ]
  },

  'lpic2-208-2': {
    title: 'Configuration Apache pour HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Le Cadenas Vert' },
      { type: 'paragraph', text: 'Proposer du HTTPS est aujourd\'hui incontournable. Il faut chiffrer la connexion entre le navigateur et Apache.' },
      { type: 'table', headers: ['Directive SSL', 'Ce qu\'elle attend'], rows: [
        ['SSLEngine on', 'Active simplement le moteur de chiffrement (généralement dans un VirtualHost sur le port 443)'],
        ['SSLCertificateFile', 'Pointe vers le certificat public (celui que tout le monde peut voir)'],
        ['SSLCertificateKeyFile', 'Pointe vers la CLÉ PRIVÉE. Ce fichier doit être ultra-sécurisé (chmod 600, root uniquement) !'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Ne perdez plus de temps à acheter des certificats ! Utilisez le client `certbot` de Let\'s Encrypt qui génère et installe les certificats TLS gratuitement et automatiquement dans Apache.' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx comme Reverse Proxy et Serveur Web',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Le TGV Russe' },
      { type: 'paragraph', text: 'Nginx a été créé pour régler le problème dit "C10K" (gérer 10 000 connexions simultanées). Il excelle grâce à son architecture asynchrone pilotée par les événements.' },
      { type: 'table', headers: ['Rôle de Nginx', 'Explication'], rows: [
        ['Serveur de Statique', 'Sert très rapidement les images, CSS et JS'],
        ['Reverse Proxy', 'Nginx reçoit la requête web externe et la transmet en interne à une autre application plus lente (ex: un serveur NodeJS ou Tomcat)'],
        ['Load Balancer', 'Nginx répartit la charge en envoyant les requêtes à tour de rôle à plusieurs serveurs en backend ("upstream")'],
      ]},
      { type: 'code', title: 'Un bloc "server" et "location" type dans nginx.conf', prompt: 'server {\n    listen 80;\n    server_name www.linuxquest.fr;\n\n    location / {\n        proxy_pass http://localhost:8080;\n    }\n}', output: '' }
    ]
  },

  'lpic2-209-1': {
    title: 'Configuration de Base de Samba',
    sections: [
      { type: 'heading', level: 2, emoji: '🤝', text: 'Quand Pingouin et Fenêtre se Donnent la Main' },
      { type: 'paragraph', text: 'Samba implémente le protocole Microsoft SMB/CIFS, permettant à Linux de partager des dossiers et des imprimantes comme s\'il était un serveur Windows natif.' },
      { type: 'table', headers: ['Section /etc/samba/smb.conf', 'Ce que ça gère'], rows: [
        ['[global]', 'Les fondations : nom du Workgroup, type de sécurité, chaîne du serveur'],
        ['[homes]', 'Partage magique ! Crée dynamiquement un accès au répertoire personnel /home/utilisateur de celui qui se connecte'],
        ['[print$] et [printers]', 'Permet de piocher dans le système CUPS de Linux pour partager les imprimantes aux Windows'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Attention ! Pour qu\'un utilisateur puisse se connecter à Samba, il doit exister sur le système Linux (dans /etc/passwd) ET avoir été ajouté à la base Samba via la commande `smbpasswd -a nom_utilisateur`.' }
    ]
  },

  'lpic2-209-2': {
    title: 'Clients NFS et Configuration Avancée',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Le Partage Pur Souche Unix' },
      { type: 'paragraph', text: 'NFS (Network File System) est incroyablement rapide entre serveurs Linux. Le fichier clé du serveur est `/etc/exports`.' },
      { type: 'table', headers: ['Option NFS dans /etc/exports', 'Son Effet Exact'], rows: [
        ['rw / ro', 'Read-Write ou Read-Only'],
        ['sync / async', '`sync` attend que la donnée soit vraiment écrite sur le disque avant de répondre (plus sûr), `async` répond de suite (plus rapide mais risqué)'],
        ['root_squash', '(Sécurité vitale) Transforme l\'utilisateur "root" du client distant en simple "nobody" sur le serveur'],
        ['no_root_squash', '(DANGER) Laisse le "root" distant agir comme "root" sur vos dossiers partagés !'],
      ]},
      { type: 'code', title: 'Rafraîchir les partages après avoir modifié /etc/exports', prompt: 'exportfs -ra', output: '' }
    ]
  },

  'lpic2-210-1': {
    title: 'Configuration du Serveur DHCP',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Le Distributeur Automatique d\'IP' },
      { type: 'paragraph', text: 'Le protocole DHCP automatise l\'assignation des paramètres réseau (IP, Masque, Passerelle, Serveurs DNS) aux clients. Le serveur historique est `isc-dhcp-server`, configuré via `/etc/dhcp/dhcpd.conf`.' },
      { type: 'table', headers: ['Paramètre DHCP', 'Ce qu\'il définit'], rows: [
        ['subnet / netmask', 'Définit le bloc réseau sur lequel le serveur écoute'],
        ['range', 'La plage d\'adresses IP dynamiques qui peuvent être distribuées'],
        ['option routers', 'Définit la passerelle par défaut (Gateway) à donner aux clients'],
        ['option domain-name-servers', 'Indique quels serveurs DNS les clients doivent utiliser'],
      ]},
      { type: 'code', title: 'Fixer une IP statique pour une adresse MAC précise', prompt: 'host imprimante_direction {\n  hardware ethernet 00:11:22:33:44:55;\n  fixed-address 192.168.1.50;\n}', output: '' }
    ]
  },

  'lpic2-210-2': {
    title: 'Authentification Modulaire avec PAM',
    sections: [
      { type: 'heading', level: 2, emoji: '🚪', text: 'Les Vigiles du Système' },
      { type: 'paragraph', text: 'PAM (Pluggable Authentication Modules) permet de centraliser la politique d\'authentification. Au lieu que chaque programme (ssh, su, login) gère ses propres mots de passe, ils délèguent tous cette tâche à PAM.' },
      { type: 'table', headers: ['Drapeau de Contrôle (Control Flag)', 'Comportement'], rows: [
        ['required', 'Le module DOIT réussir. S\'il échoue, l\'utilisateur sera refusé, mais PAM continuera d\'exécuter les autres modules (pour ne pas révéler où ça a bloqué)'],
        ['requisite', 'Le module DOIT réussir. S\'il échoue, PAM arrête tout IMMÉDIATEMENT et refuse l\'accès'],
        ['sufficient', 'Si ce module réussit (et qu\'aucun "required" précédent n\'a échoué), l\'accès est accordé de suite sans tester la suite'],
        ['optional', 'Son succès ou son échec n\'est pas critique, souvent utilisé pour déclencher des actions (comme ouvrir un répertoire personnel)'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Ne modifiez jamais les fichiers dans `/etc/pam.d/` sans garder une session root déjà ouverte à côté ! Une erreur de syntaxe vous enfermera dehors de votre propre machine de manière irrémédiable.' }
    ]
  },

  'lpic2-210-3': {
    title: 'Utilisation d\'un Client LDAP',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'L\'Annuaire Centralisé' },
      { type: 'paragraph', text: 'LDAP (Lightweight Directory Access Protocol) est optimisé pour les lectures ultra-rapides d\'une arborescence d\'informations (utilisateurs, groupes). Les administrateurs l\'utilisent souvent conjointement avec PAM.' },
      { type: 'table', headers: ['Format LDAP (LDIF)', 'Signification'], rows: [
        ['dn (Distinguished Name)', 'L\'identifiant unique et le chemin absolu de l\'entrée (ex: uid=bob,ou=Users,dc=linuxquest,dc=com)'],
        ['ou (Organizational Unit)', 'Une "branche" ou un "dossier" dans l\'arbre (ex: Users, Computers)'],
        ['dc (Domain Component)', 'Les parties du nom de domaine racine (ex: linuxquest puis com)'],
        ['cn (Common Name)', 'Le nom complet d\'une personne ou d\'un objet'],
      ]},
      { type: 'code', title: 'Chercher tous les utilisateurs dans LDAP', prompt: 'ldapsearch -x -b "ou=Users,dc=linuxquest,dc=com"', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Le Serveur d\'Envoi d\'E-mails : Postfix',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Poste Restante : Le Facteur' },
      { type: 'paragraph', text: 'Postfix est un agent de transfert de mail (MTA) ultra-sécurisé et modulaire qui gère l\'envoi et la réception de messages via SMTP. Sa configuration principale se trouve dans `/etc/postfix/main.cf`.' },
      { type: 'table', headers: ['Outil Postfix', 'Usage'], rows: [
        ['postconf', 'Permet d\'afficher (`-n`) ou de modifier les paramètres de configuration en ligne de commande'],
        ['postmap', 'Convertit un fichier texte (comme les redirections) en une base de données indexée lue par Postfix'],
        ['postqueue', 'Affiche ou force l\'envoi (Flush) des e-mails coincés dans la file d\'attente'],
        ['postsuper', 'Outil pour effacer ou suspendre des e-mails spécifiques directement dans les queues (réservé à root)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Le fichier `/etc/aliases` permet de rediriger le courrier interne (ex: envoyer le mail de "root" vers "admin@mondomaine.com"). N\'oubliez jamais de lancer la commande `newaliases` après l\'avoir modifié !' }
    ]
  },

  'lpic2-211-2': {
    title: 'Serveur POP/IMAP pour la Réception : Dovecot',
    sections: [
      { type: 'heading', level: 2, emoji: '📥', text: 'La Boîte aux Lettres Personnelle' },
      { type: 'paragraph', text: 'Alors que Postfix s\'occupe du transport (SMTP), Dovecot permet aux utilisateurs finaux de relever leur courrier via les protocoles IMAP ou POP3.' },
      { type: 'table', headers: ['Protocole', 'Différence Principale'], rows: [
        ['POP3 (Post Office)', 'Télécharge les e-mails sur l\'appareil local et les supprime (souvent) du serveur. Obsolète pour un usage multi-appareils'],
        ['IMAP', 'Synchronise les e-mails et les dossiers. Idéal si on lit ses mails sur un PC ET un smartphone'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'N\'autorisez jamais l\'authentification en texte clair sur IMAP ou POP3 ! Configurez toujours Dovecot pour exiger le SSL/TLS (IMAPS sur le port 993) afin de chiffrer les mots de passe lors de la connexion.' }
    ]
  },

  'lpic2-212-1': {
    title: 'Configuration de Pare-feu : iptables',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'Le Mur de Feu du Noyau' },
      { type: 'paragraph', text: '`iptables` est l\'outil historique (maintenant remplacé par `nftables`) pour configurer le puissant pare-feu `netfilter` intégré au noyau Linux.' },
      { type: 'table', headers: ['Table iptables', 'Fonction Primaire'], rows: [
        ['filter', 'La table par défaut. Décide si un paquet passe (ACCEPT), est jeté (DROP) ou rejeté (REJECT)'],
        ['nat', 'Network Address Translation. Modifie l\'IP source (SNAT/Masquerade) ou destination (DNAT/Port Forwarding)'],
        ['mangle', 'Modifie des champs spécifiques dans l\'en-tête IP du paquet (comme le TTL ou le Type de Service)'],
      ]},
      { type: 'code', title: 'Fermer tout par défaut, n\'ouvrir que le Web (Port 80 TCP)', prompt: 'iptables -P INPUT DROP\niptables -A INPUT -p tcp --dport 80 -j ACCEPT', output: '' }
    ]
  },

  'lpic2-212-2': {
    title: 'Détection d\'Intrusions et Audits',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Les Chiens de Garde' },
      { type: 'paragraph', text: 'Avoir un pare-feu ne suffit pas, il faut surveiller activement qui essaie de forcer la porte et s\'assurer qu\'aucune modification sournoise n\'a eu lieu sur les fichiers vitaux du système.' },
      { type: 'table', headers: ['Outil de Sécurité', 'Ce qu\'il surveille'], rows: [
        ['Fail2Ban', 'Analyse en permanence les journaux (logs). S\'il détecte trop d\'échecs de connexion SSH d\'une même IP, il bannit cette IP dans iptables temporairement'],
        ['AIDE (Advanced Intrusion Detection Environment)', 'Prend une base de référence ("snapshot" cryptographique) des fichiers système critiques, et alerte en cas de modification suspecte'],
        ['Nmap', 'Le scanner de réseau ultime. Utilisé de l\'extérieur pour vérifier quels ports/services votre serveur laisse malencontreusement ouverts'],
        ['Lynis', 'Outil d\'audit interne complet qui analyse la configuration de votre Linux et donne un score de sécurité avec des recommandations'],
      ]}
    ]
  }
}
