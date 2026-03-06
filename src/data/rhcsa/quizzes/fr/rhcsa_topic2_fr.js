// RHCSA Quiz — Topic 2: Shell Scripting (French)
// 15 MCQ questions

export const rhcsaTopic2QuizzesFR = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Comment déclarez-vous correctement une variable locale dans bash ?',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'En bash, les mots pour variables sont assignés sans AUCUN ESPACE (ex: NAME="valeur"). Le caractère $ s\'utilise UNIQUEMENT pour lire, pas écrire.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle variable spéciale retourne le PID (Identificateur de Processus) du script bash actuellement en cours d\'exécution ?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '`$$` contient le PID du processus courant. Les autres : $? = code d\'erreur, $0 = nom du script, $! = PID de la dernière tâche lancée en l\'arrière-plan.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Que fait précisément l\'instruction `export VARIABLE="valeur"` ?',
    options: [
      'Elle crée une variable uniquement locale au script actuel.',
      'Elle élève la variable pour la rendre visible globalement aux processus enfants crées ensuite.',
      'Elle grave la variable à tout jamais dans le fichier /etc/environment.',
      'Elle détruit la variable dès la fin de l\'exécution du script.',
    ],
    correct: 1,
    explanation: '`export` envoie la variable à l\'environnement (environment variables), devenant ainsi visible pour tous les sous-scripts et commandes enfants ultérieurs.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Quelle syntaxe stocke la sortie d\'une commande directement à l\'intérieur d\'une variable ?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Tant la syntaxe A que la B sont valides', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Les backticks `commande` et `$()` ont le même effet de captation. Cependant, `$()` est préféré à l\'heure actuelle car sa lisibilité permet l\'imbrication de multiples commandes complexes.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Que va afficher le fragment de script suivant sur le terminal ?\n```bash\nNAME="monde"\necho "Bonjour ${NAME} !"\n```',
    options: ['Bonjour ${NAME} !', 'Bonjour monde !', 'Bonjour $NAME !', 'Erreur : variable indéfinie'],
    correct: 1,
    explanation: '${NAME} exécute une expansion ou interpolation complète de la variable puisque la chaîne réside entre `DOUBLE GUILLEMETS`. Le résultat affichera donc "Bonjour monde !". Les simples guillemets bloqueraient cette expansion.',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Quelle flag ou directive de test natif Bash évalue avec certitude si un fichier physique existe réellement ?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: 'Le flag `-e` teste l\'existence universelle (dossier, lien, ou fichier). Le test `-f` va plus loin et impose que le fichier existe ET soit un fichier plat régulier.',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Que crachera cette boucle à l\'écran ?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'L\'impression : 123 sur une unique ligne serrée',
      'L\'impression : 1, 2, 3 retournés sur trois lignes empilées séparément',
      'Une erreur de syntaxe car bash rejette le point-virgule ici',
      'Elle lance echo une unique fois et échoue en renvoyant : "1 2 3"',
    ],
    correct: 1,
    explanation: 'La boucle "for" itérera mathématiquement élément par élément, et comme le command `echo` effectue un saut de nouvelle ligne implicite après son appel, ils seront superposés et empilés chacun sur sa propre ligne.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Dans la stricte condition Bash `[ ... ]` quel est l\'opérateur valide pour déterminer si DEUX chaînes de caractères (strings) sont littéralement identiques ?',
    options: ['[ "$A" == "$B" ]', '[ "$A" -eq "$B" ]', '[ "$A" = "$B" ]', 'Les deux formats A et C sont justes textuellement'],
    correct: 3,
    explanation: 'Contrairement à une calculatrice, l\'égalité de chaîne dans l\'antique Bash valide aussi bien `=` que `==`. `-eq` (equal) en revanche échouera lamentablement sur des mots, car c\'est test réservé froidement aux équations mathématiques de Nombres.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Si le chemin doit exister ET de surcroît exiger être explicitement un DÉCLARÉ COMME RÉPERTOIRE (DIRECTORY)... quel flag test bash utiliseriez-vous ?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: 'Logiquement le d signifie (Directory). `-d` teste le chemin; s\'il cible un banal fichier plat `txt` alors le test échouera joyeusement.',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Dans la syntaxe traditionnelle brute, comment formuleriez-vous un "While loop" (tant-que) qui comptera itérativement des chiffres allant de 1 jusqu\'à 5 ?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Dans un script `while`, tout doit être laborieusement fractionné : tu déclares au préalable (i=1), ensuite la clause d\'arret `[ $i -le 5 ]`, et enfin la progression de la variable `((i++))` cachée entre double parenthèses mathématiques ou via `let`.',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'À quoi sert littéralement de faire `[ -z "$VARIABLE" ]` dans des scripts de sécurité de paramètre?',
    options: [
      'Vérifier que la variable porte un zéro mathématique (0)',
      'Débusquer impitoyablement si la variable est vide / chaîne vierge / ne fait aucune longueur',
      'Test pour comprendre si la variable est juste un chiffre',
      'Si elle a été libérée de la mémoire avec unset',
    ],
    correct: 1,
    explanation: 'La magie noire `Z`. (z = Zero length strings). Donc `-z` évaluera la victoire absolue (True) si ta variable textuelle ou ton paramètre d\'entrée n\'a rien, pèse zéro, ou est chaine vide.',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Tu as rédigé un script. L\'opérateur l\'exécute ainsi : `./start.sh production start` . Au cœur de ce dit script, quelle information précieuse cachera la constante globale nommée `$1` ?',
    options: [
      'Le PID aléatoire du script du jour',
      'Le tout premier paramètre injecté suite au nom, soit : "production"',
      'Le nom physique du fichier hébergeur soit : "start.sh"',
      'Le nombre total cumulé : soit "2 arguments" reçus',
    ],
    correct: 1,
    explanation: 'Dans l\'appel, `$1` capte le premier mot d\'entrée positionnelle reçu (`production`). Si tu sondais le nom du script ce serait `$0`, si tu inspectais la limite numerale (`2`) ce serait `$#`. ',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Le système Linux vient de chuter en appelant un binaire. Quelle variable fantôme stocke le "Code de Retour / de Sortie" de diagnostic concernant le succès ou l\'échec mortel de ce qui a frappé instantanément précedemment ?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: 'Le roi des diagnostiqueurs Linux : le `$?`. Il absorbera inéluctablement 0 lors de victoire et de succès. Toute déviance allant de 1 jusqu\'à 255 témoignera lâchement d\'une horrifique erreur logicielle.',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Ils ont l\'air des jumeaux parfaits. Quelle nuance philosophique distingue brutalement un `$@` d\'un `$*` vis à vis de l\'array contenant l\'amas entier de paramètres entrants du script ?',
    options: [
      'Absolument rien de différent, ni même historiquement',
      'La subtilité veut que `$@` garantisse une sanctuarisation protégeant en cases séparées tout paramètre mis entre double-guillemet. `$*` l\'es écrase et le fond tout sans âme en une unique phrase textuelle en une chaîne simple giga longue.',
      '$* respecte la fragmentation; alors et $@ les combine.',
      '$@ refuse et trie rejetant l\'alpha afin d\'encapsuler que les données numériques strictes',
    ],
    correct: 1,
    explanation: 'En itérant via "For" : un `"$@"` restituera 3 cases propres et individuelles si tu introduisis `"bonjour" "le" "monde"`. Alos qu\'en face `"$*"` restituera UNE SEULE chaîne colossale monolithique `"bonjour le monde"`.',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Conçois l\'amarrage syntaxique pour que tout en un , un script crache son désespoir (en rouge sur le terminal error log) puis ensuite s\'auto-termine sèchement sans exécuter le reste, simplement parce que l\'opérateur à eu l\'ignominie d\'oublier de fournir des paramètres.',
    options: [
      'if [ $# -eq 0 ]; then echo "Erreur"; fi\n(qui termine joyeusement tout en haut sans briser le code suite)',
      'if [ $# -eq 0 ]; then echo "Erreur absolue !" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi\n(Qui plante et ne supporte pas des chaînes vides ou d\'erreurs passées de travers)',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'La meilleure éthique RHCSA : Tester l\'opérateur total via (`$# -eq 0`). Si validé : hurler sur la sortie standard des erreurs en l\'aiguillant forcé via `>&2`, pour enfin forcer froidement la mort prématurée du script avec un statut erreur inéquivoque (comme `exit 1`).',
  },
]
