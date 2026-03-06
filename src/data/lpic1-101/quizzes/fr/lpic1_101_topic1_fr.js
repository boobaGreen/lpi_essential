// LPIC-1 101 Topic 1 Quiz - French

export const lpic1_101_topic1_fr = [
  // L1: Développer votre connaissance
  {
    id: 10111,
    question: "Laquelle de ces commandes va scanner le bus USB matériel et imprimer la liste de tous ses périphériques détectés localement au contrôleur d'un système Linux ?",
    options: [
      "lspci",
      "pciusb",
      "lsusb",
      "usbinfo"
    ],
    correctAnswer: "lsusb",
    explanation: "La commande lsusb (List USB) interroge le sous-système udev et sysfs pour lister les contrôleurs USB et les appareils qui y sont connectés."
  },
  {
    id: 10112,
    question: "Depuis quel répertoire virtuel le noyau (Kernel) expose-t-il directement en temps réel à l'utilisateur des informations systèmes cruciales comme les interruptions IRQ et les statistiques pure mémoire (cpuinfo, meminfo) ?",
    options: [
      "/dev",
      "/sys",
      "/proc",
      "/var/run"
    ],
    correctAnswer: "/proc",
    explanation: "Le répertoire numérique RAM /proc est le système de fichiers virtuel historique fournissant un regard interne et des interfaces d'accès immédiats sur l'état général du processeur, des processus et du cœur dynamique de base Linux (kernel runtime)."
  },
  {
    id: 10113,
    question: "Si vous désirez inspecter explicitement quels 'drivers' (Modules Kernel) sont instantanément branchés pour piloter la carte réseau, quelle commande de consultation utiliserez-vous ?",
    options: [
      "lsmod",
      "modprobe",
      "insmod",
      "dmesg"
    ],
    correctAnswer: "lsmod",
    explanation: "lsmod 'List Modules' liste proprement un dump formaté lu depuis le fichier brut /proc/modules, permettant à l'humain d'observer tout élément additionnel (comme un module audio ou réseau) actuellement chargé en RAM dans l'espace kernel."
  },
  {
    id: 10114,
    question: "Quelle commande permet d'obtenir des données détaillées (Paramètre, auteur, licence logiciel) à propos d'un module compilé du noyau, sans pour autant le forcer purement à se charger ou s'activer au système ?",
    options: [
      "lsmod",
      "modprobe",
      "modinfo",
      "sysctl"
    ],
    correctAnswer: "modinfo",
    explanation: "modinfo prend en argument brut le nom d'un driver/module (.ko) et l'analyse techniquement avant de requérir qu'il ne se lance, offrant transparence sur sa conception et configuration potentielle admise."
  },
  {
    id: 10115,
    question: "Parmi les assertions suivantes vis-à-vis la gestion des pilotes Linux (Modules), laquelle représente la bonne pratique pour INJECTER un module .ko et prendre en charge gracieusement et automatiquement toute dépendance manquante qu'il réclame en cascade ?",
    options: [
      "insmod e1000",
      "modprobe e1000",
      "systemctl start e1000",
      "kernel-load e1000"
    ],
    correctAnswer: "modprobe e1000",
    explanation: "modprobe est l'outil intelligent de haut niveau absolu. Contrairement à 'insmod' qui insère aveuglément (au risque d'échec critique module introuvable frère), modprobe sonde et active d'abord ses sous-dépendances primaires via (modules.dep) assurant sa bonne intégration globale OS."
  },

  // L2: Boot
  {
    id: 10121,
    question: "Immédiatement au démarrage de la machine, où sont conservées et archivées les dizaines de messages diagnostics de vérifications matérielles signalées par le kernel Linux lors de l'amorçage (Boot Ring-Buffer) ?",
    options: [
      "/var/log/boot.log",
      "Dans le tampon d'anneau d'information système lisible par 'dmesg'",
      "Seulement affichable via le BIOS/UEFI",
      "Dans /dev/kernel_boot"
    ],
    correctAnswer: "Dans le tampon d'anneau d'information système lisible par 'dmesg'",
    explanation: "Le kernel imprime de fond ces données dans un buffer RAM circulaire que la commande 'dmesg' vient extraire et récupérer sur l'interface terminal (souvent archivés par la suite statiquement sous /var)."
  },
  {
    id: 10122,
    question: "Durant la séquence d'amorçage classique standard Linux moderne, quelle composante succède chronologiquement à l'initialisation brut POST du BIOS (ou phase UEFI boot) pour prendre immédiatement la main d'action matériel de l'ordinateur ?",
    options: [
      "Le noyau (Vmlinuz)",
      "Le Chargeur d'Amorçage (Bootloader, tel que GRUB2)",
      "Le système global systemd (PID 1)",
      "Le système de fichiers /proc"
    ],
    correctAnswer: "Le Chargeur d'Amorçage (Bootloader, tel que GRUB2)",
    explanation: "Le firmware amorce et appelle le Bootloader (situé au secteur zéro MBR ou /boot/efi). Le rôle fondamental du chargeur (GRUB) est de trouver le Noyau Kernel dans le disque et de le charger en mémoire centrale."
  },
  {
    id: 10123,
    question: "Quel rôle technique fondamental est assuré par le dossier condensé de démarrage 'initramfs' ou 'initrd' lors du processus initial Kernel au boot de Linux ?",
    options: [
      "Démarrer the serveur de fenêtre graphique X11 (GUI) pour les logins.",
      "Vérifier manuellement et scanner physiquement le BIOS de virus.",
      "Offrir temporairement l'environnement de base de drivers/pilotes vitaux pour que le kernel puisse voir, monter et débloquer physiquement le VRAI disque Root racine (/) de sa machine.",
      "Chiffrement logique local des mots de passe en bootant."
    ],
    correctAnswer: "Offrir temporairement l'environnement de base de drivers/pilotes vitaux pour que le kernel puisse voir, monter et débloquer physiquement le VRAI disque Root racine (/) de sa machine.",
    explanation: "L'initial RAM file system est un mini-linux éphémère. Il fournit au Kernel (qui ne peut pas stocker dans son binaire TOUT driver) l'extension requise (pilote RAID, pilote LVM, Ext4 module) suffisante de décoder et comprendre comment accéder à la gigantesque et véritable partition / externe du disque physique de l'ordinateur !"
  },

  // L3: Niveaux et Targets SystemD
  {
    id: 10131,
    question: "Quelle cibles (Target) de remplacement de systemd s'aligne exactement sur le fonctionnement restrictif et historique de secours de feu 'l'ancien Runlevel 1 ou S' mono-utilisateur (Single-User) ?",
    options: [
      "rescue.target",
      "multi-user.target",
      "graphical.target",
      "emergency.target"
    ],
    correctAnswer: "rescue.target",
    explanation: "La rescue.target fournit l'accès direct en console Root exclusif et brut local, en omettant délibérément de charger tout logiciel et de monter le serveur Web réseau, utile lors de graves cassures système base locale !"
  },
  {
    id: 10132,
    question: "Par quel ordre systemctl basculerons-nous IMMÉDIATEMENT sur un environnement Terminal de pure Console sans Interface graphique ni serveur (Passant donc vivement du Target graphical -> multi-user.target) sur la plateforme locale active Systemd ?",
    options: [
      "systemctl restart multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl isolate multi-user.target",
      "telinit 5"
    ],
    correctAnswer: "systemctl isolate multi-user.target",
    explanation: "La commande 'isolate' ferme brutalement toutes les applications graphiques non rattachées à ce sous-niveau pour conformer le système instantanément au nouveau stade sélectionné ciblé (Similaire à switcher de telinit 5 à init 3)."
  },
  {
    id: 10133,
    question: "Le runlevel historique 'Runlevel 5' ou mode d'utilisation de Base Visuel pour postes clients, se traduit chez l'architecture de systemd par la cible par défaut nommée :",
    options: [
      "graphical.target",
      "multi-user.target",
      "default.target",
      "desktop.target"
    ],
    correctAnswer: "graphical.target",
    explanation: "graphical.target englobe toutes les fonctionnalités réseaux complètes (multi-user.target) en y additionnant logiquement les serveurs d'affichages d'UI (Display Manager, X11, serveur audio)."
  },
  {
    id: 10134,
    question: "Un agent logiciel doit exiger l'Extinction globale immédiate des instances locales sans attendre (Halt pur OS et mise hors tension). Quelle commande UNIX classique est d'application universelle correcte pour cet effet ?",
    options: [
      "shutdown -r now",
      "shutdown -h now",
      "kill -9 pid_1",
      "halt -reboot"
    ],
    correctAnswer: "shutdown -h now",
    explanation: "Le flag '-h' pour Halt arrête formellement en fermant sagement processus et signaux. (Son ami associé et contraire le paramétrage '-r' déclencherai de sa part un Redémarrage d'ordinateur ou Reboot)."
  }
]
