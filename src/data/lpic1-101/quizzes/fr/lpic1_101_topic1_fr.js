// LPIC-1 101 Quiz — Topic 1: Architecture du système (Français)

export const lpic1_101_topic1_fr = [
  // ─── 101.1 Matériel et périphériques (12 questions) ───
  {
    id: 'q-lpic1-101-1-001', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quel est l’avantage principal de l’UEFI par rapport au BIOS traditionnel ?',
    options: [
      'C’est un matériel open source',
      'Il ne supporte que les systèmes 32 bits',
      'Il supporte les partitions GPT supérieures à 2 To et le Secure Boot',
      'Il ne nécessite pas de chargeur d’amorçage comme GRUB2'
    ],
    correct: 2,
    explanation: 'L’UEFI remplace le BIOS traditionnel, offrant le support des disques GPT > 2 To, le Secure Boot et un processus de démarrage plus rapide.',
  },
  {
    id: 'q-lpic1-101-1-002', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quel répertoire virtuel du noyau contient des informations sur le matériel et les processus système ?',
    options: ['/dev', '/sys', '/proc', '/etc'],
    correct: 2,
    explanation: '/proc est un système de fichiers virtuel en mémoire qui fournit une vue sur le noyau, affichant les processus en cours et les infos matériel.',
  },
  {
    id: 'q-lpic1-101-1-003', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quel répertoire virtuel est utilisé par udev pour créer dynamiquement des nœuds de périphériques ?',
    options: ['/dev', '/udev', '/sys', '/proc'],
    correct: 0,
    explanation: '/dev contient les nœuds de périphériques (ex: /dev/sda) gérés dynamiquement par le service udev.',
  },
  {
    id: 'q-lpic1-101-1-004', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande liste tous les périphériques PCI connectés au système ?',
    options: ['lsusb', 'lshw', 'lspci', 'lsscsi'],
    correct: 2,
    explanation: 'lspci affiche des informations détaillées sur tous les bus et périphériques PCI du système.',
  },
  {
    id: 'q-lpic1-101-1-005', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande liste les modules du noyau actuellement chargés en mémoire ?',
    options: ['modprobe', 'lsmod', 'insmod', 'modinfo'],
    correct: 1,
    explanation: 'lsmod lit /proc/modules et affiche une liste formatée des modules du noyau actuellement chargés.',
  },
  {
    id: 'q-lpic1-101-1-006', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande est la méthode recommandée pour charger un module du noyau avec ses dépendances ?',
    options: ['insmod', 'depmod', 'modprobe', 'lsmod'],
    correct: 2,
    explanation: 'modprobe charge intelligemment un module et résout/charge automatiquement tous les modules dépendants.',
  },
  {
    id: 'q-lpic1-101-1-007', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Comment supprimer en toute sécurité un module du noyau nommé "e1000" ?',
    options: ['rmmod -f e1000', 'modprobe -r e1000', 'delete e1000', 'rm /lib/modules/e1000'],
    correct: 1,
    explanation: 'modprobe -r supprime proprement un module et ses dépendances inutilisées.',
  },
  {
    id: 'q-lpic1-101-1-008', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quel est le but du système de fichiers /sys (sysfs) ?',
    options: [
      'Stocker les fichiers de configuration système (comme /etc)',
      'Contenir les images compilées du noyau',
      'Exposer le modèle de périphériques du noyau et la hiérarchie matérielle',
      'Enregistrer les erreurs système'
    ],
    correct: 2,
    explanation: 'sysfs (/sys) expose la hiérarchie interne des objets et pilotes du noyau vers l’espace utilisateur.',
  },
  {
    id: 'q-lpic1-101-1-009', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande affiche les messages générés par le noyau pendant le processus de démarrage ?',
    options: ['syslog', 'dmesg', 'tail /var/log/messages', 'journalctl -k'],
    correct: 1,
    explanation: 'dmesg affiche le tampon circulaire du noyau (kernel ring buffer), contenant les messages de détection de matériel.',
  },
  {
    id: 'q-lpic1-101-1-010', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quel fichier contient les options de configuration exactes passées au noyau par le chargeur d’amorçage ?',
    options: ['/boot/grub/grub.cfg', '/sys/kernel', '/etc/default/grub', '/proc/cmdline'],
    correct: 3,
    explanation: '/proc/cmdline contient les arguments passés au noyau lors du démarrage.',
  },
  {
    id: 'q-lpic1-101-1-011', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quel répertoire contient les fichiers de configuration pour charger automatiquement des modules au démarrage ?',
    options: ['/etc/modprobe.d/', '/etc/modules-load.d/', '/lib/modules/', '/boot/modules/'],
    correct: 1,
    explanation: '/etc/modules-load.d/ est utilisé par systemd pour charger des modules inconditionnellement au boot.',
  },
  {
    id: 'q-lpic1-101-1-012', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande affiche des informations détaillées sur un module (description, auteur, paramètres) ?',
    options: ['modprobe -i', 'modinfo', 'lsmod -v', 'sysctl'],
    correct: 1,
    explanation: 'modinfo extrait et affiche les métadonnées d’un fichier de module du noyau.',
  },

  // ─── 101.2 Processus de démarrage (10 questions) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quel est l’ordre correct du processus de démarrage Linux ?',
    options: [
      'Bootloader -> BIOS -> init -> Kernel',
      'BIOS/UEFI -> Bootloader -> Kernel -> init/systemd',
      'Kernel -> BIOS -> Bootloader -> systemd',
      'Bootloader -> Kernel -> BIOS -> init'
    ],
    correct: 1,
    explanation: 'Le firmware (BIOS/UEFI) s’exécute en premier, passe le contrôle au chargeur (GRUB), qui charge le Noyau, lequel lance le premier processus (init/systemd).',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quel est le but de l’initramfs pendant le processus de démarrage ?',
    options: [
      'Formater le disque dur',
      'Fournir un système de fichiers racine temporaire avec les pilotes essentiels pour monter la racine réelle',
      'Vérifier la RAM pour les erreurs matérielles',
      'C’est une copie de sauvegarde du noyau'
    ],
    correct: 1,
    explanation: 'L’initramfs est chargé par le bootloader et fournit les modules nécessaires (ex: RAID, LVM) pour monter le système de fichiers racine réel.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quel processus est historiquement le premier processus utilisateur lancé par le noyau avec le PID 1 ?',
    options: ['bash', 'grub', 'init', 'kthreadd'],
    correct: 2,
    explanation: 'init (ou systemd sur les systèmes modernes) est le premier processus lancé après le boot du noyau, prenant l’ID 1.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quel est le fichier de configuration principal généré pour GRUB2 ?',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg est le fichier principal généré par grub-mkconfig.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Pour configurer le délai de GRUB2 ou les paramètres noyau par défaut, quel fichier faut-il éditer ?',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: '/etc/default/grub contient les variables personnalisables utilisées pour générer le grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Après avoir édité /etc/default/grub sur Debian/Ubuntu, quelle commande applique les changements ?',
    options: ['grub-install /dev/sda', 'update-grub', 'grub-update', 'systemctl restart grub'],
    correct: 1,
    explanation: 'update-grub est un script sur Debian qui lance grub-mkconfig pour régénérer la configuration.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande installe le chargeur GRUB2 dans le MBR du premier disque ?',
    options: ['grub-mkconfig /dev/sda', 'update-grub /dev/sda', 'grub-install /dev/sda', 'fdisk /dev/sda'],
    correct: 2,
    explanation: 'grub-install copie les images GRUB et les intègre dans le MBR du disque spécifié.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Où se trouvent les scripts shell que GRUB2 utilise pour générer le fichier de configuration ?',
    options: ['/boot/grub/', '/etc/default/grub.d/', '/etc/grub.d/', '/usr/lib/grub/'],
    correct: 2,
    explanation: '/etc/grub.d/ contient les scripts exécutables utilisés par grub-mkconfig.',
  },
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle est la taille maximale de disque supportée par la table de partition MBR traditionnelle ?',
    options: ['2 Go', '2 To', '8 To', '8 ZiB'],
    correct: 1,
    explanation: 'L’MBR utilise un adressage 32 bits, ce qui limite la taille des partitions à 2 Téraoctets.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Sur un système utilisant systemd, quelle commande affiche les logs du démarrage actuel ?',
    options: ['journalctl -b', 'dmesg -boot', 'tail /var/log/boot.log', 'systemctl logs'],
    correct: 0,
    explanation: 'journalctl -b filtre le journal systemd pour ne montrer que les messages depuis le dernier boot.',
  },

  // ─── 101.3 Niveaux d’exécution et Targets (10 questions) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Dans SysVinit, quel runlevel est traditionnellement utilisé pour un environnement multi-utilisateur AVEC interface graphique ?',
    options: ['Runlevel 1', 'Runlevel 3', 'Runlevel 5', 'Runlevel 6'],
    correct: 2,
    explanation: 'Le Runlevel 5 inclut le réseau, le support multi-utilisateur et lance l’interface graphique.',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quel target systemd équivaut au Runlevel 3 de SysVinit (mode texte multi-utilisateur) ?',
    options: ['graphical.target', 'multi-user.target', 'network.target', 'rescue.target'],
    correct: 1,
    explanation: 'multi-user.target fournit un système multi-utilisateur complet sans interface graphique.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande affiche la cible de démarrage par défaut sur un système systemd ?',
    options: ['systemctl default', 'systemctl status', 'systemctl get-default', 'runlevel'],
    correct: 2,
    explanation: 'systemctl get-default affiche le target dans lequel systemd démarrera par défaut.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Comment basculer systemd vers le mode texte (multi-user.target) sans redémarrer ?',
    options: [
      'systemctl switch multi-user.target',
      'systemctl isolate multi-user.target',
      'systemctl start multi-user.target',
      'systemctl default multi-user.target'
    ],
    correct: 1,
    explanation: 'systemctl isolate arrête les unités non nécessaires et lance le nouveau target immédiatement.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quelle est la différence principale entre rescue.target et emergency.target ?',
    options: [
      'Aucune différence, ce sont des alias',
      'rescue.target monte les fichiers locaux et services de base ; emergency.target monte uniquement / en lecture seule',
      'emergency.target fournit le réseau, rescue.target non',
      'rescue.target est pour GRUB'
    ],
    correct: 1,
    explanation: 'emergency.target est le mode de récupération le plus minimal. rescue.target (runlevel 1) monte plus de systèmes de fichiers.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande redémarre le système immédiatement et en toute sécurité ?',
    options: ['shutdown -h now', 'shutdown -r now', 'halt', 'init 0'],
    correct: 1,
    explanation: 'shutdown -r now (ou reboot) redémarre le système immédiatement.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande planifie un arrêt du système dans 15 minutes avec un message d’avertissement ?',
    options: [
      'shutdown -t 15 "Arret"',
      'shutdown +15 "Arret"',
      'shutdown -h 15m "Arret"',
      'halt +15'
    ],
    correct: 1,
    explanation: 'shutdown +15 planifie un arrêt dans 15 minutes et prévient les utilisateurs.',
  },
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Comment annuler un arrêt programmé ?',
    options: ['shutdown -a', 'shutdown -c', 'killall shutdown', 'systemctl cancel shutdown'],
    correct: 1,
    explanation: 'shutdown -c annule tout arrêt programmé en attente.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande envoie un message aux terminaux de tous les utilisateurs connectés ?',
    options: ['broadcast', 'echo-all', 'wall', 'send'],
    correct: 2,
    explanation: 'wall (write all) envoie un message à tous les terminaux actifs.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'En SysVinit, quelle commande affiche le niveau d’exécution précédent et actuel ?',
    options: ['showlevel', 'runlevel', 'who -r', 'runlevel OU who -r'],
    correct: 3,
    explanation: 'Les deux commandes `runlevel` et `who -r` affichent les niveaux d’exécution (précédent et actuel).',
  },
];

