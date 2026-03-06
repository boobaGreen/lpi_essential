// LPIC-1 101 Topic 2 Quiz - French

export const lpic1_101_topic2_fr = [
  // L1: Disques et Partitions
  {
    id: 10211,
    question: "Laquelle des affirmations sur les tables de partitions MBR (Master Boot Record) classiques de base OS DOS est systématiquement vraie techniquement ?",
    options: [
      "Le MBR peut accommoder universellement l'index de partitions disques colossale de plus de 8 Téraoctets.",
      "L'index brut se situe exclusivement caché au sein du premier répertoire /boot.",
      "On ne peut pas créer directement plus de quatre (4) partitions physiques purement primaires.",
      "L'interface est obligatoirement du type Ext4 Linux pour MBR."
    ],
    correctAnswer: "On ne peut pas créer directement plus de quatre (4) partitions physiques purement primaires.",
    explanation: "Le MBR est limitatif (taille max 2Tb disque) et structurellement bridé par sa fondation à allouer un maximum strict de 4 emplacements d'adresses d'index de partition primaire direct. (Ce qui a poussé l'invention des 'Partitions Étendues' à sous-divisions logiques multiples)."
  },
  {
    id: 10212,
    question: "Quelle nomenclature et topographie standard moderne remplace et surpasse grandement la structure MBR pour administrer jusqu'à 128 partitions gigantesques sans aucune contrainte de mémoire ?",
    options: [
      "APFS",
      "UEFI",
      "GPT (GUID Partition Table)",
      "LVM Volumes"
    ],
    correctAnswer: "GPT (GUID Partition Table)",
    explanation: "GPT (GUID Partition Table) accompagne de la naissance matérielle de l'UEFI (Firmware Bios Moderne). Son index peut étiqueter un disque physique au-delà de Zebibytes pour de colossales configurations Datacenter RAID !"
  },
  {
    id: 10213,
    question: "Sachant qu'un système Web est saturé d'activités, quel est le bénéfice critique principal du cloisonnement indépendant de l'espace /var (Isolé de test) sur une partition ou un disque secondaire distinct du racine / ?",
    options: [
      "Il compresse automatiquement d'algotithmes les journaux pour augmenter de vitesse Apache.",
      "Le volume empêche le système d'OS complet Kernel Ext4 Root d'être inatteignable ou asséché à mort si soudainement de lourds Logs Web crashent et se remplissent hors de contrôle de la mémoire !",
      "Cela multiplie au double d'horloges virtuelles le nombre strict inodes du Root système parent.",
      "On isole les librairies /var pour qu'elles gagnent le pouvoir exécutoire SUID de base."
    ],
    correctAnswer: "Le volume empêche le système d'OS complet Kernel Ext4 Root d'être inatteignable ou asséché à mort si soudainement de lourds Logs Web crashent et se remplissent hors de contrôle de la mémoire !",
    explanation: "Dossier très fluctuant (/var hébergeant /var/log, /var/www, Spool mails...). Lorsqu'un afflux massif internet sature en écriture folle ses logs sans fins du tout, le serveur web isolé d'engorgement '/var = 100% full' implosera seul, laissant votre Racine Root de Survie OS intacte (car les 100% touche de sa partition tierce non partagée de base OS) !"
  },

  // L2: Bootloader
  {
    id: 10221,
    question: "Avec l'architecture complexe GRUB 2 (GRand Unified Bootloader), quel sous-dossier ou ficher local ne doit de ses entêtes interdire impérativement toute altération par écriture humaine manuelle directe ?",
    options: [
      "/etc/default/grub",
      "/boot/grub/grub.cfg (ou /boot/grub2/grub.cfg)",
      "/etc/grub.d/40_custom",
      "Le fichier de /etc/rc.local"
    ],
    correctAnswer: "/boot/grub/grub.cfg (ou /boot/grub2/grub.cfg)",
    explanation: "Ce document volumique .cfg final est l'amalgamation généré machine. Il sera pulvérisé et de nouveau recréé dynamiquement de la main par le gestionnaire d'update de package noyaux ou lors du lancement explicite grub-mkconfig à l'instant."
  },
  {
    id: 10222,
    question: "Où allez-vous modifier précautionneusement la variable de délai au chronomètre du menu visible d'amorçages 'GRUB_TIMEOUT=15' ?",
    options: [
      "Dans l'index algorithme /etc/grub.d/00_header",
      "Exclusif à l'édition d'interface Bios.",
      "Sur la matrice racine /boot/grub/menu.lst",
      "/etc/default/grub"
    ],
    correctAnswer: "/etc/default/grub",
    explanation: "C'est l'emplacement consacré où de tous les modificateurs de configurations variables statiques brutes humaines s'inscrivent 'GRUB_DEFAULT', 'GRUB_CMDLINE_LINUX'..."
  },
  {
    id: 10223,
    question: "Lors d'installation système d'entreprises, quelle ligne d'opération 'compile' vos récentes rééditons du ficher d'environnement d'une distribution RHEL/CentOS pour en concevoir son fichier .cfg physique validement pris en compte au boot ?",
    options: [
      "grub2-mkconfig -o /boot/grub2/grub.cfg",
      "grub-install /dev/sda",
      "grub-update /etc/default/grub",
      "make -j4 grub"
    ],
    correctAnswer: "grub2-mkconfig -o /boot/grub2/grub.cfg",
    explanation: "grub-mkconfig est le monteur assembleurs qui en compile logiquement le tout de sources /etc, afin d'y écraser via paramètre directionnels d'export -o un nouveau fichier propre et utilisable de /boot OS."
  },

  // L3: Bibliothèques Partagées
  {
    id: 10231,
    question: "Quel exécutable système vous renseignera avec précision de savoir de quelles bibliothèques externes dynamiques (les composants .so) est dépendant un fichier logiciel autonome spécifique ?",
    options: [
      "lsmod fichier_test",
      "ldconfig -p fichier_test",
      "ldd /bin/bash",
      "file /usr/bin/cat"
    ],
    correctAnswer: "ldd /bin/bash",
    explanation: "'Ldd' va fouiller le binaire (List dynamic dependencies) afin d'afficher la nomenclature compléte de tout ses appels requis à du code des ressources de Librairies partagées (par exemple libc.so.6, ou linux-vdso.so) !"
  },
  {
    id: 10232,
    question: "Que doit-il impérativement se passer, si vous venez manuellement de déplacer une nouvelle collection critique de fichiers 'Objets Partagés' (*.so) dans un répertoire alternatif comme '/opt/mondossier/lib/' ?",
    options: [
      "Editer le bash_profile pour créer LD_LIB_ALL.",
      "Rien ne se fera automatiquement par magie ; On enregistre ce chemin sur une ligne sous de '/etc/ld.so.conf.d/' ET invoque ensuite manuellement `ldconfig` pour que l'OS base crée un jour un index de la cache valide de prise en compte au .",
      "Recompiler le logiciel apt local.",
      "Lier localement par symlinks la ressource sous le Kernel virtuel."
    ],
    correctAnswer: "Rien ne se fera automatiquement par magie ; On enregistre ce chemin sur une ligne sous de '/etc/ld.so.conf.d/' ET invoque ensuite manuellement `ldconfig` pour que l'OS base crée un jour un index de la cache valide de prise en compte au .",
    explanation: "La configuration Linux (ld.so.conf) pointe les dossiers autorisés . 'Ldconfig' en est le moteur et force l’exécution matérielle brute d'assimilation et génération binaire (/etc/ld.so.cache) !."
  },
  
  // L4: Paquets Debian (apt, dpkg)
  {
    id: 10241,
    question: "Je détiens sur ma clé USB physique une archive d'application au format '.deb' isolée d'Internet. Laquelle de ces exécutions primitives forcées engendre le lancement d'installations locale du binaire ?",
    options: [
      "apt-get install monfichier.deb",
      "dpkg -i monfichier.deb",
      "apt-install -f monfichier.deb",
      "rpm -ivh monfichier.deb"
    ],
    correctAnswer: "dpkg -i monfichier.deb",
    explanation: "DPKG est un traitement au Niveau Inférieur (Low-level). Si on l'utilise directement sous forme pure (-i Install) pour appliquer le composant, il se stoppera violemment s'il ne peut pas se débrouiller par ses limites et qu'il rencontre toute lacune de modules tierces ('Echec lié au problème de dépendances introuvables')."
  },
  {
    id: 10242,
    question: "Que se déroule-t-il lorsque je lance volontairement `dpkg -P mondemon_apache` ?",
    options: [
      "Il Protège (-P protect) le logiciel d'effaçage de purge de par aptitude APT update !",
      "L'application procède au Purge pur d'oblitération base: Il le désinstalle de fait ET efface formellement son bagage annexe configuration (/etc/) et ses arborescences.",
      "Il met le daemon Pause.",
      "L'action de package Purged n’opère que la désinstallation pure, maintenant au calme l'état configuré aux serveurs en sauvegarde."
    ],
    correctAnswer: "L'application procède au Purge pur d'oblitération base: Il le désinstalle de fait ET efface formellement son bagage annexe configuration (/etc/) et ses arborescences.",
    explanation: "Face au (-r Remove) qui retire que ses binaires logiciel mais maintien précieusement 'pour d'éventuels retours utilisateurs le /etc/apache/config_backup' ... L'action '-P' anéanti complètement ses résidus de passage d'OS."
  },
  {
    id: 10243,
    question: "Où se paramètrent obligatoirement d'un document format textuel strictes d'URLs les sources distantes 'repositories Mirrors' dont se servira APT (Apt-get update !) pour scruter et bâtir de sa base d'interrogation de catalogues logiciels sur le web mondiaux ?",
    options: [
      "/var/lib/apt/mirrors",
      "/etc/apt/sources.list",
      "/etc/dpkg/network.url",
      "/etc/apt.repos.d/default.repo"
    ],
    correctAnswer: "/etc/apt/sources.list",
    explanation: "Le 'sources.list' (et ses dérivés fragmentés à apt/sources.list.d/) encadre fermement les serveurs sécuritaires Debian et PPAs locaux autorisés (ex: deb http://archive.ubuntu.com/ubuntu focal main)."
  },

  // L5: Paquets RedHat (rpm, yum, dnf)
  {
    id: 10251,
    question: "Quelle commande RPM pure peut interroger précisément ses bases et 'Lister silencieusement' (Query List) virtuellement tous les chemins répertoire des dossiers complet que cet outil package X a bien pu éparpiller a travers ce Pc en s'y greffant ?",
    options: [
      "rpm -ql application_X",
      "rpm -qa --grep application_X",
      "rpm -i --verbose application_X",
      "yum list application_X"
    ],
    correctAnswer: "rpm -ql application_X",
    explanation: "En combinaison du Queries 'q', L'association du 'l' (List) liste textuellement tout arborescence (/usr/bin/x, /etc/x/logs ...)  pour répondre de l’étendue implantologique qu’occupe logiquement ce nom binaire RPM OS !"
  },
  {
    id: 10252,
    question: "Grâce à Fedora 22 (et plus tard adopté des RHEL/CentOS 8), comment s'attribue aujourd'hui la domination d'architecture succédant globalement au Yum, au sommet du classement Haut-Niveau pour un téléchargement distant avec intelligente résolutions de son réseau !",
    options: [
      "Pacman",
      "Zypper",
      "APT",
      "DNF (Dandified YUM)"
    ],
    correctAnswer: "DNF (Dandified YUM)",
    explanation: "Conçu initialement en ôtant de goulot l'obsolète fondation algorithmiques originelle lente YUM, son alternative Dandified ('DNF') exécute un trait calcul matriciel fulgurent instantané à gérer tout arbres dépendancières des App distantes complexes RHEL!"
  }
]
