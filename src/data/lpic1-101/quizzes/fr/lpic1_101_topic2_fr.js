// LPIC-1 101 Quiz — Thème 2 : Installation et gestion de paquets (Français)

export const lpic1_101_topic2_fr = [
  // ─── 102.1 Conception du partitionnement (8 questions) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle hiérarchie du système de fichiers doit être disponible pendant la phase initiale de démarrage avant que les autres systèmes de fichiers ne soient montés ?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot contient le noyau (kernel) et les fichiers initramfs nécessaires au chargeur d\'amorçage pour démarrer le système d\'exploitation.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quel est le but principal d\'une partition d\'échange (swap) sous Linux ?',
    options: [
      'Stocker les sauvegardes du système',
      'Agir comme mémoire virtuelle lorsque la RAM physique est pleine',
      'Échanger des données entre Windows et Linux',
      'Stocker les fichiers temporaires supprimés au redémarrage'
    ],
    correct: 1,
    explanation: 'L\'espace swap sert de zone de débordement (mémoire virtuelle) où le noyau déplace des blocs de mémoire lorsque la RAM est saturée.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Pourquoi est-il fortement recommandé de placer /home sur une partition séparée ?',
    options: [
      'Cela augmente les performances du système',
      'Cela permet de réinstaller le système d\'exploitation sans perdre les données utilisateur',
      'Cela empêche les utilisateurs de consommer trop de temps processeur',
      'Le noyau l\'exige pour démarrer'
    ],
    correct: 1,
    explanation: 'Avoir /home sur une partition séparée permet d\'effacer la partition racine (/) pour mettre à jour ou réinstaller l\'OS tout en préservant les fichiers utilisateur.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quel répertoire devrait être placé sur une partition séparée si le système exécute une base de données ou génère massivement des fichiers de journaux (logs) ?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var contient des données variables comme les journaux, les files d\'attente de courrier et les bases de données. S\'il est saturé, il peut bloquer le système.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Quel est le nombre maximum absolu de partitions primaires autorisé sur un disque utilisant la table de partition MBR classique ?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'Le MBR (Master Boot Record) autorise un maximum de 4 partitions primaires. Pour en avoir plus, l\'une d\'elles doit être une partition étendue.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle technologie permet de combiner plusieurs disques physiques en un seul groupe de volumes et de créer des volumes loqiues redimensionnables ?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (Logical Volume Manager) fournit une couche d\'abstraction sur le stockage physique, permettant le redimensionnement dynamique.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Lors de l\'installation de Linux sur un système moderne basé sur UEFI, quelle partition spéciale est strictement requise ?',
    options: ['Une partition swap', 'Un volume physique LVM', 'Une partition système EFI (ESP)', 'Une partition /boot formatée en ext4'],
    correct: 2,
    explanation: 'Le micrologiciel UEFI nécessite une partition ESP, généralement formatée en FAT32 et montée sur /boot/efi.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande affiche la table de partition actuelle pour un disque spécifique comme /dev/sda ?',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'fdisk -l suivi d\'un nom de périphérique affiche la table de partition (MBR ou GPT) pour ce périphérique spécifique.',
  },

  // ─── 102.2 Installation d'un gestionnaire d'amorçage (4 questions) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande installe le chargeur d\'amorçage GRUB2 dans le Master Boot Record (MBR) du premier disque dur ?',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install est la commande pour installer les fichiers GRUB et configurer le secteur d\'amorçage sur un disque.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Après avoir édité /etc/default/grub, quelle commande doit être exécutée pour générer le fichier grub.cfg final sur un système Debian ?',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub est un script d\'enveloppe pour `grub-mkconfig -o /boot/grub/grub.cfg` sous Debian.',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quel fichier de configuration GRUB2 ne devez-vous JAMAIS éditer manuellement selon ses propres commentaires d\'en-tête ?',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg est généré automatiquement et sera écrasé. Les modifications doivent être faites dans /etc/default/grub.',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Dans la terminologie GRUB2, comment est représentée la première partition du premier disque dur ?',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'GRUB2 compte les disques à partir de 0 (hd0) mais les partitions généralement à partir de 1 (hd0,1).',
  },

  // ─── 102.3 Gestion des bibliothèques partagées (4 questions) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande affiche les dépendances de bibliothèques partagées requises par un exécutable lié dynamiquement ?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) affiche les bibliothèques partagées (.so) requises par un programme.',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quel fichier de configuration liste les répertoires dans lesquels le lieur dynamique cherche les bibliothèques partagées ?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf définit les répertoires que ld.so utilise pour rechercher des bibliothèques.',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Après avoir ajouté un nouveau répertoire à /etc/ld.so.conf, quelle commande DOIT être exécutée pour mettre à jour le cache ?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig met à jour le cache du lieur dynamique (/etc/ld.so.cache) basé sur les répertoires configurés.',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle option de ldconfig permet de voir les bibliothèques actuellement stockées dans le cache /etc/ld.so.cache ?',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) affiche les listes de répertoires et de bibliothèques candidates actuellement en cache.',
  },

  // ─── 102.4 Gestion des paquets Debian (6 questions) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quel outil Debian de bas niveau est utilisé pour installer un fichier .deb local sans télécharger les dépendances ?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg est le gestionnaire de base. `dpkg -i fichier.deb` installe un paquet local.',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande met à jour l\'index local des paquets disponibles à partir des dépôts ?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update télécharge les dernières listes de paquets depuis les dépôts.',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle est la différence principale entre `apt remove` et `apt purge` ?',
    options: [
      'remove désinstalle le paquet ; purge le supprime du cache apt',
      'remove laisse les fichiers de configuration ; purge supprime le paquet ET ses fichiers de configuration',
      'purge force la suppression en ignorant les dépendances',
      'Il n\'y a aucune différence'
    ],
    correct: 1,
    explanation: 'apt purge supprime complètement le paquet, y compris les fichiers de configuration globaux.',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande liste tous les paquets installés sur un système Debian ?',
    options: ['dpkg -l', 'apt list --installed', 'À la fois dpkg -l et apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Les deux commandes `dpkg -l` et `apt list --installed` permettent d\'effectuer cette action.',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Quel indicateur de dpkg permet de savoir quel paquet installé a fourni un fichier spécifique (ex : /bin/ls) ?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) recherche un nom de fichier parmi les paquets installés.',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quel fichier stocke la liste des URL des dépôts que APT utilise pour télécharger les paquets ?',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list est le fichier de configuration principal pour les sources de paquets APT.',
  },

  // ─── 102.5 Gestion des paquets RPM et YUM/DNF (6 questions) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quel outil de bas niveau est utilisé pour installer un fichier .rpm local sur un système Red Hat ?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) est la commande de base pour installer un paquet RPM.',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quel outil moderne de haut niveau a remplacé YUM comme gestionnaire de paquets par défaut dans Fedora et RHEL 8+ ?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) est la version de nouvelle génération de YUM.',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande liste tous les paquets RPM installés sur le système ?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) liste tous les paquets RPM actuellement installés.',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Quelle commande rpm interroge un paquet installé pour voir quels fichiers il a installés ?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) liste les fichiers installés par un paquet spécifique.',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Comment trouver quel paquet RPM a fourni le fichier /etc/httpd/conf/httpd.conf ?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) trouve quel paquet installé possède le fichier spécifié.',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande vérifie l\'intégrité d\'un paquet RPM installé ?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) compare les fichiers installés aux métadonnées d\'origine.',
  },

  // ─── 102.6 Virtualisation (4 questions) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle est la différence principale entre les hyperviseurs de Type 1 et de Type 2 ?',
    options: [
      'Le Type 1 nécessite Windows, le Type 2 nécessite Linux',
      'Le Type 1 s\'exécute directement sur le matériel (bare-metal), le Type 2 s\'exécute sur un système d\'exploitation hôte',
      'Le Type 1 est pour les conteneurs, le Type 2 est pour les machines virtuelles',
      'Il n\'y a aucune différence'
    ],
    correct: 1,
    explanation: 'Le Type 1 s\'exécute sur le matériel pour des performances max. Le Type 2 s\'exécute comme une application.',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'En quoi les conteneurs Linux (comme Docker) diffèrent-ils des machines virtuelles complètes ?',
    options: [
      'Les conteneurs sont plus lents que les VM',
      'Les conteneurs partagent le noyau du système d\'exploitation hôte, évitant la surcharge d\'un OS invité complet',
      'Les conteneurs peuvent exécuter nativement des apps Windows sur Linux',
      'Les conteneurs nécessitent un matériel dédié'
    ],
    correct: 1,
    explanation: 'Les conteneurs partagent le noyau de l\'hôte, isolant les processus au lieu d\'émuler le matériel.',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle technologie Linux est un hyperviseur de Type 1 natif basé sur le noyau ?',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'KVM (Kernel-based Virtual Machine) transforme le noyau Linux en un hyperviseur de Type 1.',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quel est le but des "Guest Additions" dans une machine virtuelle ?',
    options: [
      'Permettre à l\'invité d\'accéder directement au matériel de l\'hôte sans permission',
      'Fournir de meilleurs pilotes pour la vidéo, l\'intégration de la souris et les dossiers partagés',
      'Chiffrer le disque virtuel',
      'Permettre à la VM de fonctionner sans noyau'
    ],
    correct: 1,
    explanation: 'Les Guest Additions fournissent des pilotes optimisés qui améliorent les performances et l\'ergonomie de l\'OS invité.',
  },
];
