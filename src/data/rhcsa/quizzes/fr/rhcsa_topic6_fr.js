// RHCSA Quiz — Topic 6: System Maintenance (French) — 15 questions

export const rhcsaTopic6QuizzesFR = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Quelle est la commande canonique moderne (RHEL9) pour télécharger et installer proprement le logiciel "httpd" et toutes ses librairies associées d\'un coup ?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: '`dnf install <paquet>` gère magnifiquement l\'arbre des dépendances et procède à l\'installation. Note : `yum` existe encore comme pur alias rétro-compatible.',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'C\'est l\'heure du grand nettoyage de printemps de sécurité. Comment déclencher l\'actualisation massive de TOUS les paquets logiciels de la machine existants ?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'Les réponses A et B sont équivalentes.'],
    correct: 3,
    explanation: 'Sur l\'écosystème récent DNF (contrairement à feu-Yum) taper `update` ou bien `upgrade` fait exactement le même travail d\'élévation globale de tout soft machine.',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Le système réclame qu\'il lui manque un fichier précis obscur (ex: `/usr/bin/vim`). Comment sondes-tu le catalogue internet pour savoir "Quel paquet Dnf au monde livre et contient ce foutu fichier ?"',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'Ce sont les commandes B ou C qui détiennent ce pouvoir de pistage.',
    ],
    correct: 3,
    explanation: 'L\'arsenal `dnf provides <chemin>` cherchera vaillamment en ligne sur internet. Si le programme est DÉJÀ présent chez toi, le rapide `rpm -qf <chemin>` fera pareil en local instantanément.',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'La boite noire sans réseau : Tu as glissé un DVD CentOS/Rhel dans le lecteur `/mnt/cdrom`. Comment bricoler le fichier source référent (Repository) local dans le précieux conf dossier /etc/yum.repos.d/ ?',
    options: [
      'Bâtir à la main un fichier .repo avec l\'URL pointant baseurl=file:///mnt/cdrom',
      'dnf addrepo file:///mnt/cdrom',
      'rpm --import /mnt/cdrom',
      'dnf config-manager --add-repo /mnt/cdrom',
    ],
    correct: 0,
    explanation: 'Sur un système isolé brut, la méthode universelle d\'orge reste d\'engendrer un fichier bidon (ex: `local.repo`) et de l\'enseigner (baseurl=`file://`) et gpgcheck=0.',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Pour ton inventaire parc informatique, quelle incantation vomit d\'une traite la base de données entière des milliards de packages actuellement présents et ancrés sur ta machine ?',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Les options B et C font brillamment le listing.'],
    correct: 3,
    explanation: '`dnf list installed` ou `rpm -qa (query all)` sont les fers de lance pour pondre le grand dictionnaire entier des logiciels implantés chez vous.',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Le vieux mais redoutable outil `rpm`. Quel est le code terminal strict pour afficher et énumérer finement l\'inventaire de CHAQUE fichier planqué que l\'installeur Apache "httpd" a vomi en l\'installant ?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'Le couteau `rpm -ql` (Query List-files) désossera l\'enregistrement du paquet et te montrera la grappe exhaustive de tout path crée ou touché (les binaires, logs dirs, docs).',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Soupçon de Hack. Le binaire httpd semble avoir été corrompu. Comment exiges-tu de rpm de comparer les signatures md5 et permissions actuelles versus l\'état immaculé du jour d\'installation originel de ce package ?',
    options: ['rpm -qi nom', 'rpm -V nom', 'rpm --check nom', 'dnf verify nom'],
    correct: 1,
    explanation: '`rpm -V` (Verify) est ton scanner d\'intégrité absolu. S\'il décèle une différence de condensat Mtime, taille ou droit, il hurlera des lettres obscures (ex: 5...S.T) avertissant le Sysadmin.',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Le logiciel tierce ultra secret est un fichier binaire physique "logiciel.rpm". L\'installation par rpm classique pleure d\'horribles soucis de dépendances manquantes. Force-le brutalement à s\'étaler de force sur le disque en ignorant ces alertes ?',
    options: ['rpm -i pacquet.rpm', 'rpm -ivh pacquet.rpm', 'rpm --nodeps -ivh pacquet.rpm', 'dnf localinstall pacquet.rpm'],
    correct: 2,
    explanation: 'C\'est dangereux au plus haut point : l\'option `--nodeps` court-circuitera le cerveau analytique de RPM lui imposant d\'implanter aveuglément cette coquille coquace ignorants ses cris d\'alerte.',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Tu as besoin de changer le comportement du boot kernel RHEL9. Où se dissimule la "Matrice modifiable Humaine" (Le fichier texte originel autorisé à recevoir tes variables grub crües) ?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: 'JAMAIS Ô GRAND JAMAIS tu de touchera directement à /boot/grub2/grub.cfg. Les Dieux t\'assomeraient. La seule zone humaine modifiable licite est `/etc/default/grub`.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Tu as fini de modifier les variables dans le `/etc/default/grub`. Génial. Quelle est la foudre magique nécessaire pour compiler en dur ces altérations vers la vraie matrice `/boot/grub2/grub.cfg` du kernel en l\'écrasant à vie ?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'Le moteur de reconstruction d\'index Redhat se nomme `grub2-mkconfig`. Dirigé via son output (-o) pour écraser violemment et recréer la cible terminale de boot.',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Le stress du boot. Par défaut le grub s\'affiche brièvement au démarrage. Comment réduire l\'attente passive d\'un Grub à "5 secondes" pétantes et chronométrées avant de foncer tout droit dans le kernel defaut ?',
    options: [
      'Modifier la variable GRUB_TIMEOUT=5 au sein de /etc/default/grub, puis le rendre viable en bombardant grub2-mkconfig',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'Il convient d\'aller manuellement forcer à la valeur `5` de l\'entité `GRUB_TIMEOUT=5` enfouie dans le `/etc/default/grub`, couronné bien entendu par la compilation finale indispensable.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'La machine est un vaste océan de complexité, mais quel dossier maudit détient intimement les "recettes de génération automatisées numérotées" (ex. "10_linux") par devers desquels grub2-mkconfig va sucer son intelligence autolytique?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 2,
    explanation: 'L\'arsenal scriptaire qui engendre le fichier magique de démarrage siège tous sagement sous ce dossier racine : `/etc/grub.d/`.',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Au lieu d\'installer 30 paquets à la virgule près, c\'est un nid de dev C++, ordonne froidement dnf de télécharger d\'un bloc massif le groupe fonctionnel entier "Development Tools" ?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'Les formes B et C sont toutes les deux sémantiquement parfaites.',
    ],
    correct: 3,
    explanation: 'Les deux alias (historiques contre modernes) sont reconnus. Un groupe (`Groupinstall`) n\'est qu\'une gigantesque enveloppe métaphorique rattachant des douzaines de packages tiers de même famille entre eux d\'un trait.',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Que fais cette option vitale du `rpm` qui consiste à cracher les grandes lignes CV textuelles (Auteur, signature, Architecture, Descriptif encyclopédique) rattachéee au nom d\'un paquet posé là ?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: '`rpm -qi` (Query Info), c\'est l\'équivalent de sa carte de visite administrative détaillée.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Les ténèbres n\'ont pas de réseau internet local. Tu désires "voler" le paquet binaire "httpd.rpm" depuis un serveur connecté pour le mettre au chaud dans ton dossier téléchargement local SANS que Dnf veuille l\'installer in situ ?',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: '`dnf download <paquet>` effectue ni plus ni moins qu\'un miroring sec aspirateur déposant sagement en l\'état de pur .rpm original la graine non compilée dans ton Pwd, utile pour transferts de clés USB.',
  },
]
