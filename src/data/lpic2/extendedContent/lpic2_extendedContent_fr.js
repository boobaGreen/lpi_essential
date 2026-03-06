export const lpic2_extendedContent_fr = {
  // Topic 200: Capacity Planning
  'lpic2-200': [
    {
      title: 'Planification des Ressources et Monitorage',
      content: 'La planification des ressources est le processus de prédiction des besoins futurs en ressources informatiques pour éviter les goulots d\'étranglement avant qu\'ils ne surviennent. Cela implique de surveiller l\'utilisation actuelle et de projeter la croissance future en fonction des tendances historiques et des nouveaux besoins métier.',
    },
    {
      title: 'Monitorage des Ressources avec vmstat et mpstat',
      content: 'Pour comprendre comment le système utilise ses ressources, nous utilisons des outils comme `vmstat` et `mpstat`.\n\n- **vmstat (Virtual Memory Statistics)** : Fournit des informations sur les processus, la mémoire, le swap, les E/S, le système et l\'activité du processeur. Un `iowait` élevé indique souvent que le système est freiné par le stockage.\n- **mpstat (Multiprocessor Statistics)** : Permet d\'analyser l\'utilisation de chaque cœur CPU individuellement. C\'est crucial pour identifier si un processus mal conçu sature un seul cœur sur un système multi-cœur.',
    },
    {
      title: 'Analyse Historique avec sar',
      content: 'L\'outil `sar` (System Activity Reporter), qui fait partie du package `sysstat`, est fondamental pour la planification. Il collecte, rapporte et sauvegarde les informations sur l\'activité du système. Contrairement aux outils en temps réel, `sar` permet de remonter dans le temps (généralement via les fichiers stockés dans `/var/log/sysstat/`) pour analyser un pic de charge survenu durant la nuit ou le week-end.',
    },
    {
      title: 'Outils de Benchmarking',
      content: 'Pour savoir "jusqu\'où on peut aller", utilise des outils de benchmarking :\n\n- **Iperf** : Pour mesurer le débit réseau maximal entre deux hôtes.\n- **IOzone** : Pour tester les performances du système de fichiers et des entrées/sorties disque.\n- **Stress-ng** : Permet de soumettre le système à une charge artificielle pour voir comment il se comporte sous pression extrême.',
    },
  ],

  // Topic 201: Linux Kernel
  'lpic2-201': [
    {
      title: 'Composants et Fonctionnement du Noyau',
      content: 'Le noyau Linux est le cœur du système d\'exploitation. Il gère le matériel et fournit les services de base aux applications. Les composants clés incluent :\n\n- **vmlinuz** : L\'image compressée du noyau.\n- **initramfs** : Un système de fichiers temporaire chargé en RAM qui contient les pilotes nécessaires pour monter le système de fichiers racine réel.\n- **Modules** : Morceaux de code qui peuvent être chargés ou déchargés du noyau à la volée.',
    },
    {
      title: 'Gestion des Modules',
      content: 'Les modules permettent au noyau de rester léger tout en supportant une vaste gamme de matériel.\n\n- **lsmod** : Liste les modules actuellement chargés.\n- **modprobe** : La manière recommandée de charger/décharger des modules car elle gère automatiquement les dépendances.\n- **insmod/rmmod** : Outils de bas niveau qui chargent/déchargent un fichier `.ko` spécifique sans gérer les dépendances.\n- **modinfo** : Affiche les informations détaillées (auteur, licence, paramètres) d\'un module.',
    },
    {
      title: 'Compilation du Noyau',
      content: 'Compiler son propre noyau permet de l\'optimiser pour un matériel spécifique ou d\'activer des fonctionnalités expérimentales. Les étapes classiques sont :\n\n1. `make menuconfig` : Configuration interactive.\n2. `make` : Compilation du noyau et des modules.\n3. `make modules_install` : Installation des modules dans `/lib/modules/`.\n4. `make install` : Copie le noyau dans `/boot` et met à jour le chargeur d\'amorçage.',
    },
    {
      title: 'Modification des Paramètres à l\'Exécution',
      content: 'Le système de fichiers `/proc/sys/` permet de modifier dynamiquement le comportement du noyau sans redémarrer. L\'outil `sysctl` facilite cette gestion.\n\n- **sysctl -a** : Affiche tous les paramètres modifiables.\n- **sysctl -p** : Charge les paramètres depuis `/etc/sysctl.conf` pour les rendre permanents.',
    },
  ],

  // Topic 202: System Startup
  'lpic2-202': [
    {
      title: 'Personnalisation du Démarrage SysV-init',
      content: 'Bien que systemd soit désormais le standard, la connaissance de SysV-init reste au programme de la LPIC-2. Le fichier central est `/etc/inittab`, qui définit le niveau d\'exécution (runlevel) par défaut et lance les scripts initiaux.\n\n- **Runlevels** : 0 (Arrêt), 1 (Single user), 3 (Multi-user console), 5 (Multi-user graphique), 6 (Reboot).',
    },
    {
      title: 'Chargeur d\'Amorçage GRUB 2',
      content: 'GRUB 2 est le chargeur d\'amorçage dominant. Il supporte le BIOS traditionnel et l\'UEFI.\n\n- **Configuration** : Ne modifiez jamais `/boot/grub/grub.cfg` directement. Utilisez `/etc/default/grub` et les scripts dans `/etc/grub.d/`, puis exécutez `grub-mkconfig -o /boot/grub/grub.cfg`.\n- **Installation** : Se fait généralement via `grub-install /dev/sdX`.',
    },
    {
      title: 'Récupération du Système',
      content: 'En cas de panne, plusieurs stratégies sont possibles :\n\n1. **Paramètres de boot** : Ajouter `1`, `s` ou `init=/bin/bash` à la ligne de commande du noyau dans GRUB.\n2. **Mode rescue** : Démarrer depuis un support externe (Live CD), monter le système de fichiers racine et utiliser `chroot` pour opérer comme si on était sur le système réel (réparer GRUB, changer un mot de passe perdu, etc.).',
    },
  ],

  // Topic 203: Filesystem and Devices
  'lpic2-203': [
    {
      title: 'Opérer sur les Systèmes de Fichiers',
      content: 'Linux supporte de nombreux systèmes de fichiers (ext4, XFS, Btrfs).\n\n- **Tune2fs** : Permet de modifier les paramètres des FS ext2/3/4 (ex: changer l\'intervalle entre les vérifications).\n- **XFS** : Un système robuste et performant, géré par des outils comme `xfs_admin` et `xfs_growfs`.\n- **UUID/Labels** : Utiliser l\'identifiant unique (UUID) dans `/etc/fstab` est plus sûr que d\'utiliser des noms de périphériques comme `/dev/sda1` qui peuvent changer.',
    },
    {
      title: 'Maintenance et Santé du Stockage',
      content: 'La fiabilité des données est cruciale.\n\n- **fsck** : Vérifie et répare l\'intégrité du système de fichiers. Ne jamais l\'exécuter sur une partition montée en lecture-écriture !\n- **S.M.A.R.T.** : Protocole intégré aux disques durs pour surveiller leur propre santé. Utilisez `smartctl` pour prévenir les pannes matérielles.',
    },
    {
      title: 'Gestion des Périphériques avec udev',
      content: '`udev` est le gestionnaire de périphériques qui crée dynamiquement les fichiers dans `/dev/`. Il permet de définir des règles persistantes pour que, par exemple, une imprimante ou une interface réseau reçoive toujours le même nom ou les mêmes permissions.',
    },
  ],

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204': [
    {
      title: 'Configuration RAID Logiciel',
      content: 'Le RAID (Redundant Array of Independent Disks) permet de combiner plusieurs disques physiques en une seule unité logique pour améliorer les performances, la redondance, ou les deux.\n\n- **Niveaux RAID** : RAID 0 (Performance), RAID 1 (Miroir/Redondance), RAID 5 (Parité répartie), RAID 6 (Double parité).\n- **mdadm** : L\'outil principal sous Linux. On l\'utilise pour créer (`--create`), surveiller (`--detail`) et réparer les arrays RAID.',
    },
    {
      title: 'Logical Volume Manager (LVM)',
      content: 'LVM ajoute une couche d\'abstraction sur les disques physiques, permettant une gestion extrêmement flexible de l\'espace disque.\n\n- **PV (Physical Volume)** : Disque dur ou partition physique.\n- **VG (Volume Group)** : Réunion de plusieurs PV dans un pool d\'espace commun.\n- **LV (Logical Volume)** : "Partition" logique créée dans un VG, redimensionnable à chaud (agrandissement).',
    },
    {
      title: 'Optimisation du Stockage',
      content: 'Certains outils permettent d\'ajuster finement les performances :\n\n- **hdparm** : Pour régler et tester les paramètres des disques SATA/IDE.\n- **nvme-cli** : Pour la gestion et le monitorage des disques NVMe modernes.\n- **SSD Trim** : Crucial pour maintenir les performances des SSD en informant le disque des blocs qui ne sont plus utilisés.',
    },
  ],

  // Topic 205: Network Configuration
  'lpic2-205': [
    {
      title: 'Configuration et Routage IP',
      content: 'La configuration réseau moderne sous Linux s\'appuie sur la suite `iproute2`.\n\n- **ip addr** : Gestion des adresses IP.\n- **ip link** : Gestion de l\'état des interfaces réseau.\n- **ip route** : Gestion de la table de routage.\n- **Variables du noyau** : `/proc/sys/net/ipv4/ip_forward` doit être activé (1) pour que Linux puisse router des paquets.',
    },
    {
      title: 'Technologies Réseau Avancées',
      content: 'Pour des besoins spécifiques, on utilise le Bonding ou le Bridging :\n\n- **Bonding** : Agrégation de plusieurs interfaces physiques en une seule logique pour augmenter la bande passante ou assurer la redondance.\n- **Bridging** : Utilisé pour connecter plusieurs segments réseau au niveau 2 (Data Link), très courant dans les environnements de virtualisation.',
    },
    {
      title: 'Dépannage Réseau',
      content: 'Les outils de diagnostic essentiels incluent :\n\n- **tcpdump** : Analyseur de paquets en ligne de commande.\n- **nc (netcat)** : Le "couteau suisse" pour tester la connectivité sur des ports spécifiques.\n- **ss / netstat** : Pour voir quels processus écoutent sur quels ports.',
    },
  ],

  // Topic 206: System Maintenance
  'lpic2-206': [
    {
      title: 'Compilation de Logiciels depuis les Sources',
      content: 'Parfois, les packages officiels ne suffisent pas. La compilation suit généralement le cycle : `tar xzf` (extraction), `./configure` (vérification des dépendances et options), `make` (compilation), et `sudo make install` (installation).',
    },
    {
      title: 'Sauvegarde et Synchronisation avec rsync',
      content: '`rsync` est l\'outil de référence pour les backups car il utilise un algorithme de transfert delta (ne copie que les différences). L\'option `-a` (archive) est cruciale car elle préserve les permissions, les liens symboliques et les dates.',
    },
    {
      title: 'Information aux Utilisateurs',
      content: 'En tant qu\'administrateur, vous devez communiquer sur les maintenances :\n\n- **/etc/motd** : Message affiché après le login.\n- **/etc/issue** : Message affiché avant le login sur les terminaux locaux.\n- **wall** : Envoie un message immédiat sur tous les terminaux ouverts.',
    },
  ],

  // Topic 207: Domain Name Server
  'lpic2-207': [
    {
      title: 'Le Serveur DNS BIND9',
      content: 'BIND (Berkeley Internet Name Domain) est le serveur DNS le plus utilisé au monde. Il peut fonctionner en mode "caching only", "forwarder", ou comme serveur faisant autorité pour un domaine.\n\n- **named.conf** : Fichier principal de configuration.',
    },
    {
      title: 'Gestion des Zones et Enregistrements',
      content: 'Un domaine est découpé en zones (forward et reverse).\n\n- **A (Address)** : Nom -> IPv4.\n- **AAAA** : Nom -> IPv6.\n- **MX (Mail Exchange)** : Serveur de mail du domaine.\n- **CNAME (Canonical Name)** : Alias vers un autre nom.',
    },
    {
      title: 'Sécurité et DNSSEC',
      content: 'Le DNS classique est vulnérable aux attaques de type "cache poisoning". DNSSEC ajoute une couche de sécurité en signant numériquement les enregistrements pour garantir leur authenticité.',
    },
  ],

  // Topic 208: Web Services
  'lpic2-208': [
    {
      title: 'Le Serveur Web Apache',
      content: 'Apache HTTP Server est un serveur web robuste et modulaire. Il supporte les hôtes virtuels (VirtualHosts), permettant d\'héberger plusieurs domaines sur une seule adresse IP.',
    },
    {
      title: 'Nginx et Reverse Proxy',
      content: 'Nginx est souvent choisi pour sa performance et sa faible consommation de ressources. Il excelle en tant que serveur de fichiers statiques et en tant que "reverse proxy" pour équilibrer la charge entre plusieurs serveurs d\'application (Load Balancer).',
    },
    {
      title: 'HTTPS avec SSL/TLS',
      content: 'La sécurisation du trafic web est indispensable. `OpenSSL` est l\'outil de base pour générer des certificats. `Let\'s Encrypt` permet désormais d\'obtenir et de renouveler des certificats SSL/TLS gratuitement et de manière automatisée.',
    },
  ],

  // Topic 209: File Sharing
  'lpic2-209': [
    {
      title: 'Samba : Linux dans un réseau Windows',
      content: 'Samba permet l\'interopérabilité entre les systèmes Linux et Windows via le protocole SMB/CIFS. Il peut fonctionner comme serveur de fichiers, d\'impression ou même comme contrôleur de domaine (Active Directory).',
    },
    {
      title: 'NFS : Partage natif Unix/Linux',
      content: 'NFS (Network File System) est le protocole standard pour partager des fichiers entre machines Unix. Il est transparent pour l\'utilisateur, car les dossiers distants sont montés dans l\'arborescence locale.',
    },
  ],

  // Topic 210: Network Client Management
  'lpic2-210': [
    {
      title: 'DHCP : Configuration Automatique',
      content: 'Le protocole DHCP automatise l\'assignation des adresses IP, des passerelles et des serveurs DNS aux clients du réseau. Le serveur `isc-dhcp-server` est la référence sous Linux.',
    },
    {
      title: 'PAM : Authentification Modulaire',
      content: 'PAM (Pluggable Authentication Modules) permet de centraliser la gestion de l\'authentification. Un administrateur peut changer la méthode d\'authentification (ex: passer des mots de passe locaux à LDAP) sans modifier les applications.',
    },
    {
      title: 'LDAP : Annuaire Centralisé',
      content: 'LDAP est utilisé pour stocker et interroger des informations sur les utilisateurs, les groupes et les ressources de manière centralisée, facilitant la gestion des accès dans les grandes infrastructures.',
    },
  ],

  // Topic 211: E-Mail Services
  'lpic2-211': [
    {
      title: 'Le Serveur de Mail Postfix',
      content: 'Postfix est un agent de transfert de mail (MTA) conçu pour être rapide, facile à administrer et sécurisé. Il gère l\'envoi et la réception des emails via le protocole SMTP.',
    },
    {
      title: 'Livraison et Accès : Dovecot',
      content: 'Alors que Postfix transporte les mails, des outils comme Dovecot permettent aux utilisateurs de les lire via les protocoles IMAP ou POP3. Dovecot s\'occupe également du stockage des messages (formats Maildir ou mbox).',
    },
  ],

  // Topic 212: System Security
  'lpic2-212': [
    {
      title: 'Sécuriser le Système avec iptables',
      content: '`iptables` (et son remplaçant `nftables`) permet de configurer le pare-feu netfilter intégré au noyau Linux. Il filtre les paquets en fonction de règles basées sur l\'IP source/destination, le port et le protocole.',
    },
    {
      title: 'Détection d\'Intrusion et Audit',
      content: 'La sécurité ne s\'arrête pas au firewall. Des outils comme `Fail2Ban` bannissent automatiquement les IPs suspectes, tandis que des scanners comme `rkhunter` cherchent des traces de logiciels malveillants (rootkits) sur le système.',
    },
    {
      title: 'Sécurisation de SSH',
      content: 'SSH est la porte d\'entrée principale du serveur. Il est crucial de le sécuriser en désactivant le login root direct, en changeant le port par défaut et, surtout, en privilégiant l\'authentification par clés publiques plutôt que par mot de passe.',
    },
  ],
}
