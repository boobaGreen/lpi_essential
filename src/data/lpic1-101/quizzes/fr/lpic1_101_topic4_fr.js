// LPIC-1 101 Quiz — Thème 4 : Périphériques, Systèmes de fichiers, FHS (Français)

export const lpic1_101_topic4_fr = [
  // ─── 104.1 Création de partitions et de systèmes de fichiers (5 questions) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quel outil interactif en ligne de commande est traditionnellement utilisé pour créer et manipuler des tables de partitions MBR ?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` est l\'outil textuel interactif traditionnel pour manipuler les tables de partitions de disque (particulièrement MBR).',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quel outil de partitionnement est spécifiquement conçu pour travailler avec GPT (GUID Partition Table) en utilisant une interface similaire à fdisk ?',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) est calqué sur fdisk mais gère spécifiquement les tables de partitions GPT.',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Contrairement à fdisk, quel outil de partitionnement peut appliquer des changements immédiatement sans commande d\'écriture explicite ?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) exécute les commandes (comme la création ou la suppression de partitions) immédiatement sur le disque.',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande écrit un système de fichiers ext4 sur la partition /dev/sdb1 ?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` construit un système de fichiers ext4 sur un périphérique ou une partition spécifique.',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande prépare une partition pour être utilisée comme espace d\'échange (swap) ?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` formate la partition ou le fichier avec une signature de swap.',
  },

  // ─── 104.2 Maintien de l'intégrité des systèmes de fichiers (5 questions) ───
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Quelle est l\'exigence critique avant d\'exécuter `fsck` pour réparer un système de fichiers ?',
    options: [
      'Le système doit être redémarré en mode rescue',
      'Le système de fichiers doit être démonté ou monté en lecture seule',
      'L\'utilisateur root doit l\'exécuter avec l\'option --force',
      'Le système de fichiers doit être un volume logique'
    ],
    correct: 1,
    explanation: 'Exécuter fsck sur un système de fichiers monté activement en lecture-écriture peut entraîner une grave corruption de données.',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande affiche l\'espace disque total, utilisé et disponible sur tous les systèmes de fichiers montés ?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) rapporte l\'utilisation de l\'espace disque du système de fichiers. L\'option `-h` le rend lisible.',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Si vous avez besoin de savoir combien d\'espace disque un répertoire spécifique (comme /var/log) consomme, quelle commande utilisez-vous ?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) estime l\'espace utilisé par les fichiers ; `-s` affiche le total résumé.',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Quel outil permet de modifier des paramètres (comme le nombre max de montages ou le comportement en cas d\'erreur) sur un système ext4 existant ?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` permet d\'ajuster les paramètres réglables des systèmes de fichiers ext2/ext3/ext4.',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Quelle commande est spécifiquement utilisée pour vérifier et réparer les systèmes de fichiers XFS ?',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: 'Bien que `fsck.xfs` existe pour la compatibilité, `xfs_repair` est l\'outil principal pour vérifier et réparer les systèmes XFS.',
  },

  // ─── 104.3 Montage et démontage des systèmes de fichiers (5 questions) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quel fichier de configuration l\'OS lit-il au démarrage pour monter automatiquement les systèmes de fichiers ?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) contient des informations statiques sur les systèmes de fichiers et leurs points de montage.',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande monte tous les systèmes de fichiers mentionnés dans /etc/fstab avec l\'option "auto" ?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` exécute un montage pour chaque entrée dans /etc/fstab, sauf celles marquées "noauto".',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Dans /etc/fstab, quel est le but du sixième champ (pass) ?',
    options: [
      'Il définit le nombre de fois que le système de fichiers peut être monté',
      'Il contrôle si le système de fichiers utilise le swap',
      'Il détermine l\'ordre dans lequel fsck vérifie le système au démarrage',
      'Il définit la fréquence de sauvegarde pour dump'
    ],
    correct: 2,
    explanation: 'Le champ pass indique à fsck l\'ordre de vérification. La racine est 1, les autres 2, et 0 signifie pas de vérification.',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quelle option de montage fstab empêche les utilisateurs d\'exécuter des fichiers binaires sur ce système de fichiers ?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'L\'option `noexec` empêche l\'exécution de binaires sur le système de fichiers.',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Quel fichier (ou lien symbolique) fournit la liste des systèmes de fichiers actuellement montés selon le noyau ?',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` est un fichier virtuel qui reflète l\'état actuel des montages connus du noyau.',
  },

  // ─── 104.5 Gestion des permissions et de l'appartenance des fichiers (6 questions) ───
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Si un fichier a les permissions `rwxr-xr--`, quel est l\'équivalent numérique (octal) ?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4). Résultat : 754.',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande change le propriétaire et le groupe d\'un fichier nommé report.doc vers alice : finance ?',
    options: ['chmod alice:finance report.doc', 'chown alice:finance report.doc', 'chgrp alice:finance report.doc', 'chuser alice:finance report.doc'],
    correct: 1,
    explanation: '`chown utilisateur:groupe fichier` change à la fois le propriétaire et le groupe.',
  },
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Que se passe-t-il lorsqu\'un fichier binaire exécutable a le bit SUID (Set User ID) activé ?',
    options: [
      'Le fichier ne peut être modifié que par l\'utilisateur root',
      'Lors de l\'exécution, le processus s\'exécute avec les privilèges du propriétaire du fichier',
      'Le fichier s\'exécute automatiquement en arrière-plan',
      'Il ne peut être supprimé par personne sauf root'
    ],
    correct: 1,
    explanation: 'SUID permet à un processus de s\'exécuter avec les privilèges du propriétaire du fichier.',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Un répertoire (/shared) a les permissions 1777 (drwxrwxrwt). Que fait le sticky bit (le "t") ici ?',
    options: [
      'Tous les fichiers créés héritent de l\'appartenance au groupe',
      'Il force tous les fichiers en lecture seule',
      'Il empêche les utilisateurs de supprimer des fichiers appartenant à d\'autres utilisateurs dans ce répertoire',
      'Il rend le répertoire immuable'
    ],
    correct: 2,
    explanation: 'Le sticky bit sur un répertoire empêche les utilisateurs de supprimer les fichiers qu\'ils ne possèdent pas.',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Si l\'umask du système est 0022, quelles sont les permissions par défaut appliquées à un nouveau fichier texte ?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Les fichiers commencent avec 666 ; 666 - 022 = 644.',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quelle option est utilisée avec `chmod` ou `chown` pour appliquer les changements à tous les fichiers et sous-répertoires ?',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: 'L\'option `-R` (Récursif) applique la commande au répertoire et à toute son arborescence.',
  },

  // ─── 104.6 Création et modification de liens en dur et de liens symboliques (4 questions) ───
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Laquelle des commandes suivantes crée un lien symbolique nommé `shortcut` pointant vers `file.txt` ?',
    options: ['ln file.txt shortcut', 'ln -s file.txt shortcut', 'link file.txt shortcut', 'ln -c file.txt shortcut'],
    correct: 1,
    explanation: '`ln -s cible nom_du_lien` crée un lien symbolique.',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quelle affirmation est VRAIE concernant les liens en dur ?',
    options: [
      'Ils peuvent pointer vers des répertoires',
      'Ils peuvent traverser différents systèmes de fichiers',
      'Ils partagent exactement le même numéro d\'inode que le fichier original',
      'Si le fichier original est supprimé, le lien en dur s\'arrête de fonctionner'
    ],
    correct: 2,
    explanation: 'Les liens en dur pointent directement vers l\'inode et partagent le même numéro d\'inode.',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qu\'advient-il d\'un lien symbolique si le fichier original vers lequel il pointe est supprimé ?',
    options: [
      'Le lien symbolique devient "cassé" et s\'arrête de fonctionner',
      'Le lien symbolique est automatiquement supprimé',
      'Les données restent disponibles via le lien symbolique',
      'Le lien symbolique se convertit en lien en dur'
    ],
    correct: 0,
    explanation: 'Un lien symbolique devient orphelin (cassé) si sa cible est supprimée.',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Lorsque vous créez un lien en dur vers un fichier, qu\'advient-il de l\'inode de ce fichier ?',
    options: [
      'Le compteur de liens diminue de 1',
      'Le compteur de liens augmente de 1',
      'Il reste le même',
      'Il est remis à 0'
    ],
    correct: 1,
    explanation: 'La création d\'un lien en dur incrémente le compteur de liens (nlink) sur l\'inode.',
  },

  // ─── 104.7 Trouver des fichiers système et placer les fichiers au bon endroit (5 questions) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Selon la norme FHS (Filesystem Hierarchy Standard), où doivent se situer les fichiers de configuration du système ?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc contient les fichiers de configuration spécifiques à l\'hôte pour tout le système.',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quel répertoire est destiné aux données variables qui changent rapidement, comme les logs et les bases de données ?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var contient les fichiers de données variables.',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Où les progiciels tiers optionnels doivent-ils être installés selon la FHS ?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt est réservé à l\'installation de progiciels supplémentaires.',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Dans les systèmes Linux modernes adhérant à la FHS, quel répertoire est souvent un lien symbolique vers /usr/bin ?',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: 'De nombreuses distributions modernes ont fusionné `/bin` et `/usr/bin`, faisant de `/bin` un lien symbolique vers `/usr/bin`.',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Quel répertoire contient des fichiers temporaires qui ne sont PAS garantis d\'être conservés entre les redémarrages ?',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` est pour les fichiers temporaires ; de nombreux systèmes le nettoient au redémarrage. `/var/tmp` est pour les fichiers à conserver.',
  },
];
