// LPIC-1 101 Games Data — French

export const memoryGameData = [
  // ─── TOPIC 1 ───
  { id: 1, concept: 'Système virtuel d\'informations matérielles', matchId: 1, type: 'concept' },
  { id: 2, concept: '/proc', matchId: 1, type: 'definition' },
  { id: 3, concept: 'Affiche tous les périphériques PCI', matchId: 2, type: 'concept' },
  { id: 4, concept: 'lspci', matchId: 2, type: 'definition' },
  { id: 5, concept: 'Charge intelligemment un module et ses dépendances', matchId: 3, type: 'concept' },
  { id: 6, concept: 'modprobe', matchId: 3, type: 'definition' },
  { id: 7, concept: 'Affiche le tampon de messages du noyau boot', matchId: 4, type: 'concept' },
  { id: 8, concept: 'dmesg', matchId: 4, type: 'definition' },
  { id: 9, concept: 'Dossier contenant le chargeur d\'amorçage et le noyau', matchId: 5, type: 'concept' },
  { id: 10, concept: '/boot', matchId: 5, type: 'definition' },
  { id: 11, concept: 'Cible systemd équivalente au Runlevel 5 (Graphique)', matchId: 6, type: 'concept' },
  { id: 12, concept: 'graphical.target', matchId: 6, type: 'definition' },
  { id: 13, concept: 'Cible systemd équivalente au Runlevel 1 (Maintenance)', matchId: 7, type: 'concept' },
  { id: 14, concept: 'rescue.target', matchId: 7, type: 'definition' },
  { id: 15, concept: 'Commande pour éteindre le système immédiatement', matchId: 8, type: 'concept' },
  { id: 16, concept: 'shutdown -h now', matchId: 8, type: 'definition' },
  
  // ─── TOPIC 2 ───
  { id: 17, concept: 'Partition utilisée comme mémoire virtuelle (RAM)', matchId: 9, type: 'concept' },
  { id: 18, concept: 'Swap', matchId: 9, type: 'definition' },
  { id: 19, concept: 'Fichier de configuration principal du menu GRUB2', matchId: 10, type: 'concept' },
  { id: 20, concept: '/boot/grub/grub.cfg', matchId: 10, type: 'definition' },
  { id: 21, concept: 'Affiche les bibliothèques partagées requises par un binaire', matchId: 11, type: 'concept' },
  { id: 22, concept: 'ldd', matchId: 11, type: 'definition' },
  { id: 23, concept: 'Met à jour le cache des bibliothèques (/etc/ld.so.cache)', matchId: 12, type: 'concept' },
  { id: 24, concept: 'ldconfig', matchId: 12, type: 'definition' },
  { id: 25, concept: 'Commande de bas niveau pour installer un fichier .deb', matchId: 13, type: 'concept' },
  { id: 26, concept: 'dpkg -i', matchId: 13, type: 'definition' },
  { id: 27, concept: 'Commande de bas niveau pour installer un fichier .rpm', matchId: 14, type: 'concept' },
  { id: 28, concept: 'rpm -i', matchId: 14, type: 'definition' },
  { id: 29, concept: 'Gestionnaire de paquets de haut niveau pour Debian/Ubuntu', matchId: 15, type: 'concept' },
  { id: 30, concept: 'apt / apt-get', matchId: 15, type: 'definition' },
  { id: 31, concept: 'Gestionnaire de paquets de haut niveau pour RHEL/Fedora moderne', matchId: 16, type: 'concept' },
  { id: 32, concept: 'dnf', matchId: 16, type: 'definition' },
  
  // ─── TOPIC 3 ───
  { id: 33, concept: 'Variable contenant les chemins de recherche des exécutables', matchId: 17, type: 'concept' },
  { id: 34, concept: '$PATH', matchId: 17, type: 'definition' },
  { id: 35, concept: 'Indique si une commande est un alias, un fichier ou un builtin', matchId: 18, type: 'concept' },
  { id: 36, concept: 'type', matchId: 18, type: 'definition' },
  { id: 37, concept: 'Transforme une variable locale en variable d\'environnement', matchId: 19, type: 'concept' },
  { id: 38, concept: 'export', matchId: 19, type: 'definition' },
  { id: 39, concept: 'Affiche dynamiquement la fin d\'un fichier en croissance', matchId: 20, type: 'concept' },
  { id: 40, concept: 'tail -f', matchId: 20, type: 'definition' },
  { id: 41, concept: 'Redirige et s\'ajoute à la fin du fichier sans l\'écraser (Append)', matchId: 21, type: 'concept' },
  { id: 42, concept: '>>', matchId: 21, type: 'definition' },
  { id: 43, concept: 'Redirige uniquement la sortie d\'erreur standard (stderr)', matchId: 22, type: 'concept' },
  { id: 44, concept: '2>', matchId: 22, type: 'definition' },
  { id: 45, concept: 'Connecte la sortie d\'une commande à l\'entrée d\'une autre', matchId: 23, type: 'concept' },
  { id: 46, concept: '| (Pipe)', matchId: 23, type: 'definition' },
  { id: 47, concept: 'Signal SIGTERM (Terminer gracieusement)', matchId: 24, type: 'concept' },
  { id: 48, concept: 'kill -15', matchId: 24, type: 'definition' },
  { id: 49, concept: 'Signal SIGKILL (Tuer violemment)', matchId: 25, type: 'concept' },
  { id: 50, concept: 'kill -9', matchId: 25, type: 'definition' },
  { id: 51, concept: 'Envoie une commande s\'exécuter en arrière-plan', matchId: 26, type: 'concept' },
  { id: 52, concept: '&', matchId: 26, type: 'definition' },
  { id: 53, concept: 'Symbole Regex pour "Début de la ligne"', matchId: 27, type: 'concept' },
  { id: 54, concept: '^', matchId: 27, type: 'definition' },
  { id: 55, concept: 'Symbole Regex pour "Fin de la ligne"', matchId: 28, type: 'concept' },
  { id: 56, concept: '$', matchId: 28, type: 'definition' },
  { id: 57, concept: 'Dans l\'éditeur Vi, sauvegarde et quitte le fichier', matchId: 29, type: 'concept' },
  { id: 58, concept: ':wq', matchId: 29, type: 'definition' },

  // ─── TOPIC 4 ───
  { id: 59, concept: 'Crée un système de fichiers ext4', matchId: 30, type: 'concept' },
  { id: 60, concept: 'mkfs.ext4', matchId: 30, type: 'definition' },
  { id: 61, concept: 'Affiche la taille d\'un répertoire spécifique', matchId: 31, type: 'concept' },
  { id: 62, concept: 'du -sh', matchId: 31, type: 'definition' },
  { id: 63, concept: 'Fichier de configuration des montages automatiques au démarrage', matchId: 32, type: 'concept' },
  { id: 64, concept: '/etc/fstab', matchId: 32, type: 'definition' },
  { id: 65, concept: 'Permissions d\'un fichier rwxr-xr--', matchId: 33, type: 'concept' },
  { id: 66, concept: '754', matchId: 33, type: 'definition' },
  { id: 67, concept: 'Permet à un dossier public /tmp de sécuriser la suppression à son auteur unique', matchId: 34, type: 'concept' },
  { id: 68, concept: 'Sticky Bit', matchId: 34, type: 'definition' },
  { id: 69, concept: 'Crée un lien symbolique (raccourci) vers un fichier', matchId: 35, type: 'concept' },
  { id: 70, concept: 'ln -s', matchId: 35, type: 'definition' },
  { id: 71, concept: 'Crée un lien physique (Hard Link) identique au fichier original', matchId: 36, type: 'concept' },
  { id: 72, concept: 'ln', matchId: 36, type: 'definition' },
  { id: 73, concept: 'Dossier FHS contenant les exécutables de base du système (binaires lus seuls)', matchId: 37, type: 'concept' },
  { id: 74, concept: '/usr/bin', matchId: 37, type: 'definition' },
  { id: 75, concept: 'Dossier FHS contenant les fichiers de configuration texte du système', matchId: 38, type: 'concept' },
  { id: 76, concept: '/etc', matchId: 38, type: 'definition' },
]

export const trueFalseData = [
  // TOPIC 1
  { id: 1, text: 'Le système de fichiers /sys est un espace RAM logique qui reflète le modèle des périphériques du noyau.', isTrue: true, explanation: '/sys (sysfs) maintient la hiérarchie en temps réel des périphériques exposés par le noyau depuis le boot.' },
  { id: 2, text: 'La commande `lsusb` nécessite toujours d\'être exécutée en tant que root pour fonctionner.', isTrue: false, explanation: 'Un utilisateur normal peut exécuter lsusb pour lire les informations générales, le mode verbeux pourra toutefois être bridé sur des IDs internes.' },
  { id: 3, text: 'Dans le processus de démarrage, GRUB2 cède la main en chargeant d’abord l\'initramfs avant même le kernel en RAM.', isTrue: false, explanation: 'GRUB2 charge le noyau (vmlinuz) matériellement en RAM et l\'initramfs, donne le contrôle AU noyau qui ensuite utilisera l\'initramfs comme pont adaptatif !' },
  { id: 4, text: 'La cible (target) `rescue.target` correspond rigoureusement à l\'ancien mode Runlevel 1 de maintenance de SystemV.', isTrue: true, explanation: 'C\'est l\'équivalence parfaite : un bash brut, root seul autorité, sans serveurs webs n\'y accès réseaux externes pour les dépannages d\'urgence.' },
  { id: 5, text: 'La commande `shutdown -r now` éteindra définitivement et coupera l\'électricité du serveur.', isTrue: false, explanation: 'Le paramètre "-r" invoque le redémarrage (Reboot), l\'option pour stopper est "-h" (Halt).' },
  // TOPIC 2
  { id: 6, text: 'La table de partitions MBR prend en charge nativement et mondialement des disques jusqu\'à 8 Pétaoctets de données.', isTrue: false, explanation: 'MBR (Master Boot Record) limite historiquement ses registres sur les secteurs de 2 Téraoctets. La table GPT a brisée ce plafond !' },
  { id: 7, text: 'Placer le dossier `/var` sur une partition informatique racine séparée au disque est une bonne pratique recommandable pour se protéger du remplissage système.', isTrue: true, explanation: 'Cela empêche que la base d\'un "Log d\'Erreurs en expansion illimité" (\'/var/log\') finisse d\'engloutir mortellement votre Root OS (/)' },
  { id: 8, text: 'Le fichier directement modifiable par l\'administrateur pur configurer le GRUB 2 de boot est systématiquement "/boot/grub/grub.cfg".', isTrue: false, explanation: 'Faux ! Il ne faut jamais éditer manuellement grub.cfg ! Les données en dur se formulent sous "/etc/default/grub" afin que le script les compiles dynamiquement lui par-dessus !' },
  { id: 9, text: 'La commande `ldconfig` est vitale afin de mettre en cache persistante toute modifications effectuée au conf de bibliothèques du système.', isTrue: true, explanation: 'Sans exécuter ldconfig à la main, le Kernel Linux ne sera point conscient que vous avez glissé de nouveaux dossiers de bibliothèques *.so en ses murs !' },
  { id: 10, text: 'L\'outil `dpkg` peut résoudre automatiquement de lui même et de plein grès le téléchargement sur le web d\'une dépendance externe requise par un .deb qu\'il installe.', isTrue: false, explanation: 'dpkg est aveugle et de très "bas-niveaux". Il ne s\'intéresse qu\'à ce qui est présent localement de branché . Seul le dictionnaire APT navigue le World Wide Web réseau!' },
  { id: 11, text: '`apt purge` ou `dpkg -P` suppriment toutes les fichiers de paramétrages config existants en supplément au désinstallation d\'application elle même.', isTrue: true, explanation: 'C\'est la définition d\'une "Purge" contre une Removal (-r) classique qui est polie qui conservera pour toujours votre setup en dossier.' },
  { id: 12, text: 'Un conteneur Docker inclut obligatoirement son propre BIOS émulé et un Linux booté virtuel distinct pour exister dans la RAM de l\'hôte.', isTrue: false, explanation: 'Il s\'agit d\'une Machine Virtuel (VM/KVM) traditionnelle. Le conteneur ne lance que l\'application en utilisant les appels du KERNEL Nul et Physique commun à  l\'hôte Linux réel !' },
  // TOPIC 3
  { id: 13, text: 'La commande `type` peut formellement dire si une commande UNIX (ex: "cd") est native interne (builtin) ou proviens d\'un chemin de fichier lointain.', isTrue: true, explanation: 'C\'est le rôle suprême du vérificateur "type". Il dévoilera le code de traitement du bash de votre mot !' },
  { id: 14, text: 'La variable "$PATH" enregistre en boucle fermée la géolocalisation GPS du serveur RedHat.', isTrue: false, explanation: '$PATH est le vecteur contenant des registres textuels de tous les chemins (/usr/bin:/bin) scrupuleusement analysés à la recherche d\'exécutable lors de toute commande du Bash.' },
  { id: 15, text: 'La redirections Chevron Simple ">", appliquée vers un document rempli existant et lisible l\'écrasera et annulera sa taille précédente pour ne contenir que la sortie terminale !.', isTrue: true, explanation: 'Le simple chevron remplace et détruit la cible sans avertir. Pour conca-génerer, privilégiez le double Chevron de déviations (`>>`).' },
  { id: 16, text: 'La commande `grep -v "Erreur"` affichera avec sélectivité à la loupe et l\'isolera EXCLUSIVEMENT que les phrases ayant "Erreur" sur l\'écran.', isTrue: false, explanation: 'C\'EST L\'INVERSE : L\'option "-v" (InVert) rejette avec force et supprime de la vue l\'unique sélection et gardera tout "Le RESTE du fichier" !' },
  { id: 17, text: 'Le caractère "Tube ou Pipeline" `|` transforme la sortie de données (stdout) de son application gauche en l\'alimentation forcée primaire (stdin) de l\'autre d\'à droite.', isTrue: true, explanation: 'C\'est le fondement et l\'architecture mère absolue du Bash (Ex: cat passwd | grep home).' },
  { id: 18, text: 'Le signal d\'extinction et tuerie fatale Unix `kill -9` (SIGKILL) autorise amicalement par la loi un logiciel à purger son écriture disque un millième de seconde avant son oblitération par Kernel.', isTrue: false, explanation: 'Le -9 ne demande ni politesse ni aménagement au processeur logic. La mort proc est directe et sans préavis. C\'est le rôle standard du `kill -15 (SIGTERM)` ! ' },
  { id: 19, text: 'Le modificateur "renice -n +15 3045", rend l\'app 3045 très amicale (+15), rétrogradant de fait dramatiquement sa puissance d\'attention et de tir devant tous les autres processeur Unix serveur.', isTrue: true, explanation: 'Une valeur de politesse Nice "Positive" s\'efface devant ses pair qui on priorité, et "s\'offre au public"!  A l\'inverse d\'une Négativité d\'Egoïste monopoliste d\'accaparement base processeur agressives de -20 urgentes !' },
  { id: 20, text: 'L\'étoile Regex `*` posée dans un motif symbolise indéniablement la présence obligatoire d\'un minimum 1 caractère absolu au sein du texte décodé de recherche.', isTrue: false, explanation: 'Une Regex Astérisque ne remplace et matche du "Zéro caractère" à l\'Infinité, "0 ou plusieurs!". Un document sans occurence la satisfera également! Pour obliger la présence strict d\'au moins un caractère (Le VRAI 1 a X fois pur !), on s\'appuie du Signe PLUS (`+`) unix.' },
  { id: 21, text: 'En éditeur VIM natif pur Unix, l\'appuie inopinée sans paramétrage la lettre `d` doublée `dd`, vous effacera avec rage une ligne globale entière textuel et l\'enverra au presse papier mort !.', isTrue: true, explanation: 'En mode de Commande (le panel de lancement du vim Linux ! ), `dd` est l\'abatteur et le bourreau (delete) de la ligne intégrale ! Il se colle avec "p". ' },
  // TOPIC 4
  { id: 22, text: 'La commande `fdisk` formatte et implante intelligemment un format système Ext4 fonctionnel dans la foulé et la seconde à un nouveau disque qu\'elle parcellise.', isTrue: false, explanation: '`fdisk` n\'est qu\'un simple architecte traçant "Les zones frontières des blocs" du disque. Il faut appeler l\'artisan `mkfs.ext4` logiciel par dessus ses plans brut pour écrire des formats systèmes de bits et l\'instancier formel et vital !.' },
  { id: 23, text: 'Il est formellement interdit de procéder à un "fsck" base check-up d\'erreur au sein d\'un dossier/disque local si de dernier est activement paramétré `Monté et d\'Accès L-Ecriture` à ses utilisateurs!.', isTrue: true, explanation: 'Cela corromps toute arborescence d\'inodes l\'instant ou une autre commande viendrait créer un fichier pendant son balayage indexatif de récupération Kernel fsck.' },
  { id: 24, text: 'La commande UNIX `du -sh /var` pèse virtuellement sur base et vous énumère en clair (Mégabytes) la lourdeur exacte du tronc /var de son intégralité cumulative des feuillages .', isTrue: true, explanation: 'Disk Usage (du ) de paramètres "s (Summiry-Totale unitaire globale de fin! ) et "h (HumanReadable pour lecture claire homme)" ! ' },
  { id: 25, text: 'Le fichier universel `/etc/fstab` décrit à chaque allumage d\'ordinateurs quels périphériques se branche sur lequels des dossiers mount points !', isTrue: true, explanation: 'Le `File System Table` automatise sa liste avec la commande implicite système de boot mount -a pour accrocher tous volume vital d\'existence.' },
  { id: 26, text: 'Le Numérique des permission Unix `600` confère à ce dossier/fichier un droits mondiaux en "Full contrôles 100%" à vous utilisateur, ses Groupes, et Autres monde entier !.', isTrue: false, explanation: 'En Permission d\'Octé le chiffre complet "6" correspond en mathe a Read (4) + Write (2) = Le proprio User  !  Le Zéro central "0" aux frères associés . L\'ultime Zéro extérieurs "0" , aux gens du publique ! ("R-W -------") ' },
  { id: 27, text: 'Un Symlink ou "Lien Doux", une fois que le fichier noyau source qu\'il dépeint à été éradiqué de la terre , le suit dans la tombe et détruit son code de fichier de raccourcis du disque pur également pour nettoyage de place de fait du Kernel.', isTrue: false, explanation: 'Un Linux ne check pas l’intégralité des chaines du filesystem pour désavouer en cascade ! Le Raccourci Soft-link survivra avec l\'effigie et visuel brisé orphelin "Broken Link rouge " au pointeur pathétique du néant !' },
]

export const fillGapData = [
  // TOPIC 1
  {
    id: 1,
    sentence: "Le pseudo-système de fichiers virtuel en ram {gap} expose une vue complète sur les processus actifs par identifiants, mais aussi sur les interruptions d'infos /meminfo du chipset global.",
    answer: "/proc",
    hints: ["Le 'système de fichiers des processus'.", "Un répertoire situé à la racine et géré par la RAM."],
  },
  {
    id: 2,
    sentence: "On vérifie instantanément et sans effort que l'interface Wi-Fi de marque Intel sur son architecture est bien arrimée de fond sur les ports logiques de la carte mère, en appelant {gap}.",
    answer: "lspci",
    hints: ["Liste des périphériques connectés au bus PCI.", "Ne commence pas par `lsusb`."],
  },
  {
    id: 3,
    sentence: "Le tout premier processus que le noyau s'attache à démarrer après avoir monté son disque possède l'immuable PID 1, aujourd'hui dans de nombreuses distributions mondiales il s'agit de l'exécutable binaire {gap}.",
    answer: "systemd",
    hints: ["Il remplace l'antique SysV init.", "Son unité est la 'target'."],
  },
  // TOPIC 2
  {
    id: 4,
    sentence: "Lors d'installation système d'entreprises sécurisées (Nginx, Sql), un ingénieur parquera judicieusement le dossier très mouvant {gap} sous sa propre partition hermétique afin de ne pas paralyser l'ordinateur par la croissances fulgurent des Logs de Crashs !",
    answer: "/var",
    hints: ["Ce dossier contient les journaux (logs) et les données variables.", "Son nom fait 4 lettres et commence par /v"],
  },
  {
    id: 5,
    sentence: "Le script vital de reconfiguration qui doit être imposé d'invocation post-création pour regénérer à la volée le binaire compilé final '/boot/grub2/grub.cfg' basé des dictés de l'utilisateur sous terminal se nomme : {gap} .",
    answer: "grub-mkconfig",
    hints: ["Make Configuration pour GRUB.", "Commande longue GRUB commençant par 'grub'."],
  },
  {
    id: 6,
    sentence: "La liste texte du gestionnaire de paquets intelligent global APT (celui dictant les URL miroirs l'autorisant d'opérer du cloud les mises à jour et requêtes au web sans accros base) campe dans ledit fichier dictionnaire {gap}.",
    answer: "/etc/apt/sources.list",
    hints: ["C'est un fichier spécifique contenant le mot 'sources'.", "Situé dans la configuration de APT."],
  },
  // TOPIC 3
  {
    id: 7,
    sentence: "Un enchaînement inactif sur le fond bash est requis lors d'une extraction d'archive pesant des Terra données, il faudra impérativement inscrire le glyphe caractère {gap} totalement au bout d'extrême droite finale à la frappe et syntaxe envoyée  !",
    answer: "&",
    hints: ["L'esperluette.", "Gère l'arrière-plan (Background) de la commande."],
  },
  {
    id: 8,
    sentence: "Utilisez la combinaison astucieuse du clavier logiques de type {gap} à la fenêtre terminal afin de susciter l'appel récursif magique du Bash pour extirper du passé obscur son log d'histoires par des mots clés tapés !.",
    answer: "Ctrl+R",
    hints: ["C'est une combinaison de touches.", "Sert à lancer une 'Reverse-i-search'."],
  },
  {
    id: 9,
    sentence: "Le puissant opérateur d'archivages gnou et natif d'une commande concaténant des répertoires pour n'en forger un colosse unifié, et le compacter violemment à l'algorithme 'GZip' invoquera d'argument {gap} pour se déclencher ! (Exemple: de mon_dossier > mon_zip.tar.gz)",
    answer: "tar -czvf",
    hints: ["S'applique avec 4 lettres paramétriques.", "C de create, Z de gzip."],
  },
  {
    id: 10,
    sentence: "Toute erreur fatale logicielle générant des blocs rouges effroyables est logiquement balisée en architecture UNIX du puits numérial du FLUX de Base Stream {gap}.",
    answer: "2",
    hints: ["Le 'Standard Error' (stderr).", "Le chiffre qui vient après standard output (1)."],
  },
  {
    id: 11,
    sentence: "Un procédé monopoliste d'agressive ressource sous votre terminal accaparant brutalement sa machine requiert que son Administrateur (Root imposé) déclasse dynamiquement à la volée ses attributions et politesse CPU par l'outil de temps d'action : {gap}.",
    answer: "renice",
    hints: ["Change la priorité d'un processus existant.", "Commence par 're' et finit par 'nice'."],
  },
  // TOPIC 4
  {
    id: 12,
    sentence: "Afin de relier un disque dur physique d'un Téractoctés (/dev/sdb1) par terminal, nous utiliserons expressément une logique logicielle de pontage temporaire nommée la commande : {gap}.",
    answer: "mount",
    hints: ["Pour raccrocher et ancrer dans le système un périphérique.", "Équivalent textuel de 'monter' en anglais."],
  },
  {
    id: 13,
    sentence: "Le programme brut en charge exclusif par le système pour arpenter, retrouver, diagnostiquer de ré-injecter les 'inodes et fichiers corrompus endommagés' orphelins sur système d'index ext4 Unix se dénomme : {gap} .",
    answer: "fsck",
    hints: ["File System Check.", "Exécutable avant le montage ou sur partition read-only."],
  },
  {
    id: 14,
    sentence: "Pour sécuriser un dossier partagé d'upload massif ('/tmp') afin que Paul d'un coté et Marie de l'autre ne puissent impunément détruire, vider et écraser effroyablement l'édit de leur voisin d'utilisation publique... L'admin ancrera la restriction binaire spéciale UNIX dites {gap} !",
    answer: "Sticky Bit",
    hints: ["Bit collant.", "C'est souvent représenté par un 't' dans les permissions 'rwxrwxrwt'."],
  },
  {
    id: 15,
    sentence: "L'institution mondiale imposant la cartographie dogmatique et absolue UNIX de Linux, imposant que '/etc' reçoive que textes natifs configs vs '/bin' des purs binaires s'acronyme logiquement de: {gap}.",
    answer: "FHS",
    hints: ["Filesystem Hierarchy Standard.", "Une norme gérée pour les chemins du système.", "S'écrit en trois lettres."],
  },
]

export const dragDropData = [
  {
    id: 1,
    title: "1. Matcher les Périphériques avec leurs Répertoires Outils Linux",
    items: [
      { id: '1-1', text: 'Liste détaillée des matériels PCI locaux' },
      { id: '1-2', text: 'Dépendances modules drivers Kernel ' },
      { id: '1-3', text: 'Pseudo système Fichiers Hardware dynamique d\'état !' },
      { id: '1-4', text: 'Pseudo fichiers processus RAM Actives et interrupt' },
    ],
    targets: [
      { id: 't-1-1', label: 'lspci' },
      { id: 't-1-2', label: 'modprobe' },
      { id: 't-1-3', label: '/sys' },
      { id: 't-1-4', label: '/proc' },
    ],
    matches: {
      '1-1': 't-1-1',
      '1-2': 't-1-2',
      '1-3': 't-1-3',
      '1-4': 't-1-4',
    }
  },
  {
    id: 2,
    title: "2. Niveaux SystemD : Cibles (Targets) de Base de d'Opération OS Linux",
    items: [
      { id: '2-1', text: 'Restaure environnement Terminal Basique Solo Root Urgences' },
      { id: '2-2', text: 'Initialise un serveur Web CLI complet 100% services Networks' },
      { id: '2-3', text: 'Environnement Bureautique Clavier Souris Pleins Graphismes!' },
      { id: '2-4', text: 'Ordre Extrême Terminal Reboot Disques Moteurs' },
    ],
    targets: [
      { id: 't-2-1', label: 'rescue.target' },
      { id: 't-2-2', label: 'multi-user.target' },
      { id: 't-2-3', label: 'graphical.target' },
      { id: 't-2-4', label: 'reboot.target' },
    ],
    matches: {
      '2-1': 't-2-1',
      '2-2': 't-2-2',
      '2-3': 't-2-3',
      '2-4': 't-2-4',
    }
  },
  {
    id: 3,
    title: "3. Séparation Logique d'Outils et de Tuyauterie Terminales Bash Pipelinés UNIX !",
    items: [
      { id: '3-1', text: "Le 'Tuyau' d'alimentation d'outil texte vers le suivant d'après" },
      { id: '3-2', text: "L'Abattoir pur et sans retour écrasant des fichiers de Logs" },
      { id: '3-3', text: "Concatène d'accumulation propre les sorties succès stdout sans détruire l'existant" },
      { id: '3-4', text: "Sépare uniquement les Crashes Fatales d'outils Stderr sans pourrir le flux visuel propre à l'écran !" },
    ],
    targets: [
      { id: 't-3-1', label: '|' },
      { id: 't-3-2', label: '>' },
      { id: 't-3-3', label: '>>' },
      { id: 't-3-4', label: '2>' },
    ],
    matches: {
      '3-1': 't-3-1',
      '3-2': 't-3-2',
      '3-3': 't-3-3',
      '3-4': 't-3-4',
    }
  },
  {
    id: 4,
    title: "4. Permissivités Unix : Conversions de Formats Logiques (Ugo) <-> Octals",
    items: [
      { id: '4-1', text: 'Tous Permis : Lire écrire traverser Totalité User Groupe et Public' },
      { id: '4-2', text: 'La Norme Commune Pure: Modifie l\'auteur, Le reste et monde Lise seulement' },
      { id: '4-3', text: 'Propriété Absolue d\'Exécutions Script: User Fait l\'ensemble , Monde rejeté' },
      { id: '4-4', text: 'Secret de Défense Dossiers Perso: Totalement Accrédités en L et W et X pour Auteur Uniquement !' },
    ],
    targets: [
      { id: 't-4-1', label: '777 (rwxrwxrwx)' },
      { id: 't-4-2', label: '644 (rw-r--r--)' },
      { id: 't-4-3', label: '700 (rwx------)' },
      { id: 't-4-4', label: '600 (rw-------)' },
    ],
    matches: {
      '4-1': 't-4-1',
      '4-2': 't-4-2',
      '4-3': 't-4-3',
      '4-4': 't-4-4',
    }
  }
]

export const terminalChallengeData = [
  // TOPIC 1
  {
    id: 1,
    description: "Comment afficher tous les matériels connectés via un port USB avec leurs ID sur ce nœud Linux natif ?",
    command: "lsusb",
    expectedOutput: "Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 001 Device 002: ID 8087:0a2b Intel Corp. Bluetooth wireless interface\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub",
  },
  {
    id: 2,
    description: "Affichez-moi lister de toutes urgences la nature et le nombre de module Kernels Linux attachés chargés vive-memoirs au système actuellement (Outil de base mod !)",
    command: "lsmod",
    expectedOutput: "Module                  Size  Used by\nrfcomm                 86016  0\nmac80211             1122304  0\ncfg80211              909312  1 mac80211\ne1000e                294912  0",
  },
  {
    id: 3,
    description: "Analysez promptement en profondeur le cache de message de ring-buffer au démarrage boot du OS Kernel (Pour traquer un soucis de bus de port et SATA défectueux !)",
    command: "dmesg",
    expectedOutput: "[    0.000000] Linux version 5.15.0-generic (buildd@lcy01-amd64)\n[    0.342111] PCI: Using ACPI for IRQ routing\n[    1.253012] libata version 3.00 loaded.\n[    2.569911] usb 1-1: new high-speed USB device number 2 using xhci_hcd",
  },
  // TOPIC 2
  {
    id: 4,
    description: "Régénérez logiquement le ficher global d'instruction humain final 'grub.cfg' car vous avez altéré '/etc/default/' hier soir! (Commande longue non raccourci dpkg /ubuntu de MK !). L'endroit output à sauver (flag \"-o\") et la cible standart '/boot/grub/grub.cfg'.",
    command: "grub-mkconfig -o /boot/grub/grub.cfg",
    expectedOutput: "Generating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.15.0-generic\nFound initrd image: /boot/initrd.img-5.15.0-generic\ndone",
  },
  {
    id: 5,
    description: "Quelles bibliothèques (.so dynamiques) sont impérativement nécessaires pour amorcer l'exécutable '/bin/bash' du Kernel UNIX ?",
    command: "ldd /bin/bash",
    expectedOutput: "        linux-vdso.so.1 (0x00007ffe34383000)\n        libtinfo.so.6 => /lib/x86_64-linux-gnu/libtinfo.so.6 (0x00007fb184d00000)\n        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fb184a00000)\n        /lib64/ld-linux-x86-64.so.2 (0x00007fb184e5b000)",
  },
  {
    id: 6,
    description: "Sous Debian. Lancez la suppression Totale, Configuration globale comprise par dpkg (Pas un apt remove!) du package logiciel appelé 'nginx'.",
    command: "dpkg -P nginx",
    expectedOutput: "(Reading database ... 128475 files and directories currently installed.)\nRemoving nginx (1.18.0) ...\nPurging configuration files for nginx (1.18.0) ...\nProcessing triggers for man-db (2.10.0-2) ...",
  },
  {
    id: 7,
    description: "Sur machine Rhel fedora. Purger ou ôter et supprimer le serveur base paquet 'httpd' (utilisant le haut-niveau réseau intelligent moderne d'aujourd'hui, alias DANDIFIED ).",
    command: "dnf remove httpd",
    expectedOutput: "Dependencies resolved.\n====================================\n Package        Architecture\n====================================\nRemoving:\n httpd          x86_64\n\nTransaction Summary\n====================================\nRemove  1 Package\n\nFreed space: 4.8 M\nIs this ok [y/N]: y\nRemoving: httpd... Complete!",
  },
  // TOPIC 3
  {
    id: 8,
    description: "Le Serveur se gèle!. Dénicher quels PID process sature de CPU/RAM en direct et en Dynamique temps réels secondes et triés par charges d'applications l'OS (Sans htop !) ?",
    command: "top",
    expectedOutput: "top - 14:23:45 up 2 days,  1:12,  1 user,  load average: 1.02, 0.98, 0.99\nTasks: 123 total,   2 running, 121 sleeping\n%Cpu(s): 25.0 us,  5.0 sy,  0.0 ni, 69.0 id\n\n  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n 5678 root      20   0 1345020  41048  23456 R  99.9   1.0  10:00.00 runaway_task",
  },
  {
    id: 9,
    description: "Demander subtilement l'Arrêt à ce process PID : 455 (Utilisation classique SigTerm base Kill ).",
    command: "kill 455",
    expectedOutput: "[1]+  Terminated              sleep 1000",
  },
  {
    id: 10,
    description: "L'outil est cassé!. Assommage brute sans aucune pitié au kernel et détruisez instantanément pour couper l'elec CPU à l'instance PID '999'. Arrêt d'Urgenes fatal direct UNIX !",
    command: "kill -9 999",
    expectedOutput: "[2]+  Killed                  unresponsive_app",
  },
  {
    id: 11,
    description: "Extraire textuellement à base du fichier /etc/passwd QUE les lignes strictes d'index appartenant aux mots-clefs uniques 'root' , (Pas d'awk , en pure simplicité filtre de chaine UNIX).",
    command: "grep root /etc/passwd",
    expectedOutput: "root:x:0:0:root:/root:/bin/bash\noperator:x:11:0:operator:/root:/sbin/nologin",
  },
  // TOPIC 4
  {
    id: 12,
    description: "Vérifier la place d'espace en % qui me reste sur chacun de la panoplie des Disques et montures totales racine, en format Gigas Megas humains lisible ?",
    command: "df -h",
    expectedOutput: "Filesystem      Size  Used Avail Use% Mounted on\ntmpfs           1.6G  1.5M  1.6G   1% /run\n/dev/sda1        50G   25G   23G  53% /\n/dev/sdb1       100G   10G   85G  11% /data",
  },
  {
    id: 13,
    description: "Le serveur base se traîne! Analysez et Sommer du Poid condensé Global (Human Readable) ce put**n de dossier base /var/log en une ligne de console sans dérouler tous les mini composants arborescents ?",
    command: "du -sh /var/log",
    expectedOutput: "4.2G    /var/log",
  },
  {
    id: 14,
    description: "Construire sur votre nouvelle clé formatée logicielle à 0  (/dev/sdb1) un super index de system fichiers étalons Journalisé linux Linux V.4 universel , formattage de bloc absolu ?",
    command: "mkfs.ext4 /dev/sdb1",
    expectedOutput: "mke2fs 1.46.5 (30-Dec-2021)\nCreating filesystem with 262144 4k blocks and 65536 inodes\nAllocating group tables: done\nWriting inode tables: done\nCreating journal (8192 blocks): done\nWriting superblocks and filesystem accounting information: done",
  },
]
