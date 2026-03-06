// LPIC-1 101 Topic 4 Quiz - French

export const lpic1_101_topic4_fr = [
  // L1: Partitions et Formats
  {
    id: 10411,
    question: "La commande interactive fdisk prépare et dessine virtuellement des tables logiques d'ordinateur. Mais quelle conjuration d'exécution va réellement couler le ciment du format d'index (Inodes) Ext4 indispensable à Linux pour y déposer ses dossiers de façon permanente ?",
    options: [
      "make:ext4 /dev/sdb",
      "mkfs.ext4 /dev/sda1",
      "format -ext4 /dev/sdc",
      "fdisk --write ext4"
    ],
    correctAnswer: "mkfs.ext4 /dev/sda1",
    explanation: "Le binaire Make File System (mkfs) suivi de la déclinaison d'index exigé (.ext4 / .xfs) initie techniquement à zéro l'arborescence des racines logiques prêtes à la montée (Et prévient la corruptions base fichiers journalisés) !"
  },
  {
    id: 10412,
    question: "Parmi la panoplie des montures possibles, le format dédié exclusif Swap Kernel se distingue de par sa création. Quelle est la nomenclature correcte de sa fondation et de son activation au bloc disque /dev/sdb2 ?",
    options: [
      "mkfs.swap /dev/sdb2 puis mount",
      "mkswap /dev/sdb2 puis swapon /dev/sdb2",
      "fdisk swap puis active /dev/sdb2",
      "init-swap /dev/sdb2"
    ],
    correctAnswer: "mkswap /dev/sdb2 puis swapon /dev/sdb2",
    explanation: "L'espace virtuel RAM ne supportant aucun registre humain de fichiers, il s'arroge la commande de formatage distinctive mkswap, avant d'obliger le Noyau à l'engloutir de ressources par l'exécutoire swapon."
  },

  // L2: Fsck et Santé
  {
    id: 10421,
    question: "Que risque fatalement et impérativement un SysAdmin débutant s'il force l'examen de vérifications de blocs défectueux 'fsck' sur une partition Disque Serveur qui est à cet instant même Montée Actuellement en mode d'Écriture (R/W) dans le réseau de l'entreprise ?",
    options: [
      "Absolument rien, c'est conseillé d'agir 'A chaud' !",
      "L'opération s'exécute lentement car elle patiente aux utilisateurs.",
      "C'est la garantie mortelle absolue de pervertir de bits et de ruiner instantanément de Corruptions Massives Fatales l'Intégrité de ses Dossiers Locaux et Datas irréparables de fichiers (Inodes broyés) !",
      "L'application se déporte en Background."
    ],
    correctAnswer: "C'est la garantie mortelle absolue de pervertir de bits et de ruiner instantanément de Corruptions Massives Fatales l'Intégrité de ses Dossiers Locaux et Datas irréparables de fichiers (Inodes broyés) !",
    explanation: "C'est la Ligne Rouge de Linux (LPIC). On ne nettoie ni inspecte logiciellement les pistes vitales si le Kernel de front, de par les utilisateurs de serveurs d'APIs tierces, vient et peut y inscrire simultanément logiquement du code !"
  },
  {
    id: 10422,
    question: "Quelle alternative binaire s'impose d'architecture pour rattraper des erreurs systèmes et diagnostiquer un check-up exclusif au fameux format Entreprise massif 'XFS' développé chez Fedora/RedHat ?",
    options: [
      "xfs_repair",
      "fsck.xfs",
      "mkfs.xfs check",
      "e2fsck -xfs"
    ],
    correctAnswer: "xfs_repair",
    explanation: "XFS ne se diagnostique presque plus à travers l'alias du pont standard traditionnel fsck. En système CentOS/RedHat on use de son monstre spécifique 'xfs_repair -n' pour déceler de ses entrailles ses erreurs réseaux corrompus de bloc data."
  },

  // L3: Mounts
  {
    id: 10431,
    question: "Dans les arcanes et registres de l'Orchestrateur Universel fstab (/etc/fstab), pourquoi la certification LPIC-1 ordonne-t-elle avec virulence en bonnes pratiques de configurer la première colonne Média des Disques Durs à travers son Universel Unique Identifier (UUID=xxx) plutôt qu'avec sa dénomination matérielle éphémère classique (/dev/sda1) ?",
    options: [
      "Les UUID compressent physiquement les formats logiques EXT4.",
      "Le parcours des bus Sata physiques carte mère n'est pas fiable. Si l'on rebranche un câble, SDA peut basculer illogiquement en SDB... brisant net les ciblages fstab basés nom de lettre au reboot du Kernel !",
      "L'UUID confère l'attribution de l'immuable Root et SUID sécurisé logiques.",
      "C'est une obligation graphique de Systemd."
    ],
    correctAnswer: "Le parcours des bus Sata physiques carte mère n'est pas fiable. Si l'on rebranche un câble, SDA peut basculer illogiquement en SDB... brisant net les ciblages fstab basés nom de lettre au reboot du Kernel !",
    explanation: "SDA n'est pas un nom, c'est la séquence temporelle de port physique du premier de liste reconnu PC ! Changez votre CDROM ou la nappe IDE, sda bascule de port d'adresses d'une erreur fatale bloquant toute monture OS de démarrage . (Récupérez l'identifiant disque unique avec de 'blkid') !"
  },

  // L4: Permissions Utilisateurs et Avancées UNIX (SUID/Sticky)
  {
    id: 10441,
    question: "Si l'octal de base accorde au document 'rapport.txt' les droits numériques UNIX de '644', quelle serait l'interprétation formelle exacte au format visuel de chaînes qu'une impression système (ls -l) traduirait à notre moniteur textuel ?",
    options: [
      "rw-r--r--",
      "rwxrwxrwx",
      "rwxrw-r--",
      "rwxr-xr-x"
    ],
    correctAnswer: "rw-r--r--",
    explanation: "Le premier 6 pour l'Auteur = Read 4 + Write 2. Les 4 finaux alloués aux Groupes associés de listes, puis au Reste du monde public global sont limités de droits à l'exclusive Lecture seule (Read 4)."
  },
  {
    id: 10442,
    question: "En hack et administration fine, le privilège Spécial de 'SUID (Set User ID)' confère historiquement (en s'appliquant avec l'apparition du drapeau 's') :",
    options: [
      "Au ficher de rester de ciment bloqué en /tmp pour ses utilisateurs isolés.",
      "Au lambda public d'outrepasser ses droits locaux par une Usurpation d'identitité brève et de lancer ce binaire pur (comme 'passwd') tout en arborant des pouvoirs d'éxécution temporels de son VRAI Maître dépositaire Originel !",
      "A un groupe spécifique l'héritage d'appartenance partages exclusifs !",
      "A compacter en mémoire le binaire du dossier de système Ext4."
    ],
    correctAnswer: "Au lambda public d'outrepasser ses droits locaux par une Usurpation d'identitité brève et de lancer ce binaire pur (comme 'passwd') tout en arborant des pouvoirs d'éxécution temporels de son VRAI Maître dépositaire Originel !",
    explanation: "C'est l'essence de passwd (/usr/bin/passwd géré par root) ! De vous attribuer un passe-droit magique Unix de super-user l'instant millième de seconde de son exécution de programme."
  },

  // L5: Les Liens Logiques d'Atajos et Inodes (Ln)
  {
    id: 10451,
    question: "La différence monumentale entre un 'Symlink (Lien Symbolique / -s)' de raccourci, vis-à-vis d'un 'Hard Link (Lien en Dur Physique / base)' est que le Hard Link :",
    options: [
      "Peut bondir entre deux disques de l'ordinateur de formats différents (Clé USB vs Disque dur local C) !",
      "Ne sauvegarde que le Nom des fichiers sous forme des chaines caractères dans une boucle.",
      "S'ancre profondément à son créateur et partage avec lui le MÊME Inode numérial ext4 physique sur la partition. La suppression isolée de la source initiale logicielle de nom n'effacera donc nullement la Data physique octet résiduel persistante du fils base Link ! ",
      "Taille toujours plus de gigaoctets que le lien doux Symlink !"
    ],
    correctAnswer: "S'ancre profondément à son créateur et partage avec lui le MÊME Inode numérial ext4 physique sur la partition. La suppression isolée de la source initiale logicielle de nom n'effacera donc nullement la Data physique octet résiduel persistante du fils base Link ! ",
    explanation: "C'est la force Unix du lien Fort (Hard). Les 'fichiers 1 (original)' et '2 (Hard-link)' ciblent TOUS LES DEUX au puits d'un seul amas bloc physique Inodes ! Par design, Linux de base interceptera la commande RM en l'effaçant textuellement du nom du dossier visuel... mais ne détruira la Vraie présence physique disque ext4 ! Qu'à la SEULE condition absolue que le second/dernier de ses clones du système d'OS d'inodes s'annihile formellement ! "
  },

  // L6: PHS! Architecture OS! 
  {
    id: 10461,
    question: "Quelle convention internationale sacrée définit et coordonne mondialement toutes les familles majeures OS Linux posant des bases comme : '/etc héberge sans condition que la configuration de textes' ou 'que /usr/bin s'emplit de la liste des d'utilitaires binaires mondiaux RO' ?",
    options: [
      "FHS (Filesystem Hierarchy Standard)",
      "GNU Posix GPL",
      "LBS (Linux Base Specifications)",
      "LFS (Linux From Scratch)"
    ],
    correctAnswer: "FHS (Filesystem Hierarchy Standard)",
    explanation: "Validée par la Linux Foundation. Cette nomenclature universelle contraint et permet aux scripts et administrateurs cloud du globe entier de toujours repérer intuitivement chaque bloc à son logis (les logs au /var, l'utilisateur au /home)."
  }
]
