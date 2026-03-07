// LPIC-1 101 Quiz — Thème 3 : Commandes GNU et Unix (Français)

export const lpic1_101_topic3_fr = [
  // ─── 103.1 Utilisation de la ligne de commande (7 questions) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Laquelle des commandes suivantes détermine si un nom donné est une commande intégrée au shell, un alias ou une commande externe ?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'La commande `type` indique exactement comment le shell interprète un nom (interne, alias, fichier ou fonction).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle variable d\'environnement contient une liste de répertoires séparés par des deux-points où le shell recherche les commandes exécutables ?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'La variable $PATH définit les répertoires où le shell recherche les fichiers exécutables.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande affiche des informations brèves sur l\'architecture du système, la version du noyau et le nom d\'hôte ?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname avec l\'option -a (all) affiche toutes les informations système, y compris le noyau et le matériel.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Comment définissez-vous une variable shell nommée `MYVAR` contenant le texte "Hello" pour qu\'elle soit disponible pour les processus fils ?',
    options: [
      'MYVAR="Hello"',
      'set MYVAR="Hello"',
      'export MYVAR="Hello"',
      'env MYVAR="Hello"'
    ],
    correct: 2,
    explanation: 'export crée une variable d\'environnement qui sera héritée par tous les processus fils.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle est la principale différence entre les guillemets simples (\') et doubles (") dans Bash ?',
    options: [
      'Les guillemets simples permettent l\'expansion des variables ($VAR), les doubles non',
      'Les guillemets doubles permettent l\'expansion des variables ($VAR), les simples empêchent toute expansion',
      'Les guillemets doubles sont pour les nombres, les simples pour les chaînes',
      'Il n\'y a aucune différence'
    ],
    correct: 1,
    explanation: 'Les doubles guillemets permettent l\'expansion des variables, tandis que les guillemets simples préservent la valeur littérale de tous les caractères.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quel raccourci clavier lance une recherche inversée dans l\'historique des commandes Bash ?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R lance une recherche inversée, permettant de retrouver des commandes exécutées précédemment.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Que réalise la commande `!55` dans Bash ?',
    options: [
      'Elle tue le processus avec le PID 55',
      'Elle exécute la commande numéro 55 de la liste de l\'historique',
      'Elle supprime la commande numéro 55 de l\'historique',
      'Elle lance la commande "55"'
    ],
    correct: 1,
    explanation: 'Le symbole `!` invoque l\'expansion de l\'historique. `!n` fait référence à la ligne n de l\'historique.',
  },

  // ─── 103.2 Traitement des flux de texte à l'aide de filtres (6 questions) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande affiche par défaut les 10 DERNIÈRES lignes d\'un fichier ?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail affiche les dernières lignes d\'un fichier ; 10 lignes par défaut.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande lit un fichier et l\'affiche en préfixant les numéros de ligne ?',
    options: ['nl', 'wc -l', 'cat -n', 'À la fois nl et cat -n'],
    correct: 3,
    explanation: 'À la fois `nl` (number lines) et `cat -n` préfixent les lignes de sortie avec des numéros.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'La commande `wc` compte quels trois attributs par défaut d\'un fichier ?',
    options: [
      'Lignes, caractères, octets',
      'Phrases, mots, caractères',
      'Lignes, mots, octets/caractères',
      'Lignes, mots, paragraphes'
    ],
    correct: 2,
    explanation: 'wc (word count) affiche le nombre de lignes, de mots et d\'octets/caractères.',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Pour supprimer les lignes en double consécutives d\'un fichier trié, quelle commande est utilisée ?',
    options: ['sort -u', 'uniq', 'À la fois sort -u et uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` supprime les doublons consécutifs. `sort -u` trie et supprime les doublons globalement.',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Quelle commande extrait le premier champ du fichier /etc/passwd, en supposant que les champs sont séparés par des deux-points (":") ?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` définit le délimiteur sur deux-points, et `-f1` sélectionne le premier champ.',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande sed remplace complètement le mot "apple" par "orange" à chaque occurrence dans file.txt ?',
    options: ['sed "r/apple/orange/" file.txt', 'sed "s/apple/orange/g" file.txt', 'sed "s/apple/orange" file.txt', 'sed "sub/apple/orange/all" file.txt'],
    correct: 1,
    explanation: 'La commande de substitution `s/motif/remplacement/g` remplace toutes les occurrences sur chaque ligne.',
  },

  // ─── 103.3 Gestion sommaire des fichiers (6 questions) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande crée un fichier vide nommé "notes.txt" ou met à jour son horodatage s\'il existe déjà ?',
    options: ['create notes.txt', 'touch notes.txt', 'echo notes.txt', 'mkfile notes.txt'],
    correct: 1,
    explanation: 'touch modifie l\'horodatage des fichiers ou crée un fichier vide s\'il n\'existe pas.',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande crée un répertoire nommé `project` et son parent `work` s\'il n\'existe pas ?',
    options: ['mkdir work/project', 'mkdir -p work/project', 'mkdir --all work/project', 'mkdir -r work/project'],
    correct: 1,
    explanation: 'mkdir -p (--parents) crée les répertoires intermédiaires si nécessaire.',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Vous voulez copier tout un répertoire `/docs` et son contenu vers `/backup`. Quelle commande utilisez-vous ?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'L\'option -r (récursive) indique à `cp` de copier les répertoires avec leur contenu.',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Dans le globbing Bash, que correspond le caractère générique `?` ?',
    options: ['N\'importe quel nombre de caractères', 'Exactement un caractère', 'Zéro ou un caractère', 'Chiffres uniquement'],
    correct: 1,
    explanation: 'Dans le globbing, `?` correspond exactement à un seul caractère.',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande recherche un fichier dans le système de fichiers en temps réel ?',
    options: ['locate file', 'updatedb', 'grep file', 'find / -name file'],
    correct: 3,
    explanation: '`find` parcourt l\'arborescence réelle du système de fichiers pour localiser des fichiers.',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Quelle commande compresse le répertoire `/home/user` dans une seule archive tar compressée avec gzip ?',
    options: [
      'tar -xzvf backup.tar.gz /home/user',
      'tar -czvf backup.tar.gz /home/user',
      'zip backup.tar.gz /home/user',
      'gzip /home/user > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` crée (-c) une archive compressée avec gzip (-z).',
  },

  // ─── 103.4 Utilisation des flux, des tubes et des redirections (4 questions) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Que fait l\'opérateur de redirection `>>` ?',
    options: [
      'Redirige stdout vers un fichier en l\'écrasant',
      'Redirige stdin depuis un fichier',
      'Redirige stdout vers un fichier en l\'ajoutant à la fin',
      'Redirige stderr vers un fichier'
    ],
    correct: 2,
    explanation: '`>>` ajoute la sortie standard à la fin d\'un fichier sans supprimer le contenu existant.',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Comment redirigez-vous l\'erreur standard (stderr) vers un fichier nommé `error.log` ?',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: 'Le descripteur de fichier 2 représente stderr ; `2>` le redirige.',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Quel est l\'effet d\'ajouter `2>&1` à une commande ?',
    options: [
      'Il redirige stdout vers stderr',
      'Il envoie à la fois stdout et stderr au même endroit',
      'Il fait taire toute sortie',
      'Il lance la commande 2 puis la commande 1'
    ],
    correct: 1,
    explanation: '`2>&1` redirige stderr vers l\'endroit où pointe actuellement stdout.',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quel outil lit depuis l\'entrée standard et écrit À LA FOIS vers stdout et vers un ou plusieurs fichiers ?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` divise l\'entrée, l\'envoyant à la fois vers la sortie et vers un fichier.',
  },

  // ─── 103.5 Création, surveillance et arrêt des processus (5 questions) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande fournit une vue dynamique et en temps réel des processus en cours d\'exécution dans le système ?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` affiche une liste interactive et mise à jour des processus système.',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quel est le signal par défaut envoyé par la commande `kill` si aucun n\'est spécifié ?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` envoie SIGTERM (15) par défaut, demandant une terminaison propre.',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Si un processus ignore une commande kill normale, comment pouvez-vous forcer son arrêt immédiat ?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` envoie SIGKILL, qui ne peut pas être ignoré par le processus.',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quel raccourci clavier suspend le job de premier plan actif dans un terminal ?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z suspend le processus de premier plan, qui peut ensuite être repris ou passé en arrière-plan.',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Comment lancez-vous une commande pour qu\'elle continue à s\'exécuter même après vous être déconnecté du terminal ?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` rend une commande insensible au signal de déconnexion (SIGHUP).',
  },

  // ─── 103.6 Modification des priorités d'exécution des processus (3 questions) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Sous Linux, quelle est la plage valide des valeurs "nice" ?',
    options: ['De 0 à 100', 'De -20 à +19', 'De -19 à +20', 'De 1 à 99'],
    correct: 1,
    explanation: 'Les valeurs nice vont de -20 (priorité maximale) à +19 (priorité minimale).',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Quelle action un utilisateur normal (non-root) peut-il effectuer concernant les priorités des processus ?',
    options: [
      'Diminuer la valeur nice de ses propres processus',
      'Augmenter la valeur nice (diminuer la priorité) de ses propres processus',
      'Changer la priorité du processus de n\'importe quel utilisateur',
      'Régler la valeur nice à -20'
    ],
    correct: 1,
    explanation: 'Les utilisateurs normaux ne peuvent qu\'augmenter la valeur nice (baisser la priorité) de leurs propres processus.',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande lance un nouveau processus avec une priorité d\'ordonnancement ajustée ?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` lance un nouveau processus avec une priorité modifiée ; `renice` modifie les processus existants.',
  },

  // ─── 103.7 Recherche dans des fichiers texte à l'aide d'expressions régulières (2 questions) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Dans les expressions régulières, que représente l\'ancre `^` ?',
    options: ['La fin de la ligne', 'N\'importe quel groupe de caractères', 'Le début de la ligne', 'Négation'],
    correct: 2,
    explanation: 'Le caractère `^` ancre la correspondance au début de la ligne.',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Dans une expression régulière, que signifie `.*` ?',
    options: [
      'Zéro ou plusieurs points littéraux',
      'Un point littéral suivi d\'un astérisque littéral',
      'Zéro ou plusieurs de n\'importe quel caractère',
      'Exactement un point'
    ],
    correct: 2,
    explanation: 'Le point correspond à n\'importe quel caractère, et l\'astérisque à zéro ou plus ; ensemble, ils correspondent à n\'importe quelle chaîne.',
  },

  // ─── 103.8 Édition simple de fichiers (3 questions) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Lorsque vous ouvrez vi, quel mode est actif par défaut ?',
    options: ['Mode Insertion', 'Mode Visuel', 'Mode Normal (commande)', 'Mode Ex'],
    correct: 2,
    explanation: 'vi s\'ouvre en mode Normal où les frappes sont interprétées comme des commandes.',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'En mode Normal de vi, que fait la commande `dd` ?',
    options: ['Supprime le caractère actuel', 'Supprime toute la ligne actuelle', 'Duplique la ligne actuelle', 'Enregistre le document'],
    correct: 1,
    explanation: '`dd` supprime (coupe) toute la ligne actuelle dans vi.',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Comment forcez-vous vi à quitter sans enregistrer les modifications ?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` force l\'éditeur à quitter sans enregistrer les modifications.',
  },
];
