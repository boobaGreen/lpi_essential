// LPIC-1 102 Quiz Pool — French — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_fr = [
  // ─── 105.1 Personnaliser et utiliser l'environnement shell (10 questions) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Quel fichier est exécuté lorsqu'un utilisateur ferme un shell Bash de connexion ?",
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: "~/.bash_logout est spécifiquement conçu pour les tâches de nettoyage lors de la sortie d'un shell de connexion."
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Quel répertoire contient les fichiers de configuration par défaut qui sont copiés dans le répertoire personnel d'un nouvel utilisateur lors de la création de son compte ?",
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: "Le répertoire /etc/skel (skeleton) contient les fichiers cachés par défaut pour les nouveaux utilisateurs."
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quelle est la façon correcte de rendre une variable 'MYVAR' accessible aux processus fils du shell actuel ?",
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: "La commande 'export' transforme une variable shell en variable d'environnement."
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quel fichier doit être édité pour définir des alias pour tous les utilisateurs dans un shell Bash ?",
    options: ['~/.bashrc', '/etc/bashrc ou /etc/bash.bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: "Les alias et fonctions système doivent généralement être placés dans /etc/bashrc ou /etc/bash.bashrc.",
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quel est le but de la commande `source` (ou de l'opérateur `.`) ?",
    options: [
      'Compiler un script shell',
      "Exécuter un script dans l'environnement shell actuel sans démarrer un sous-shell",
      'Télécharger un fichier sur Internet',
      'Réinitialiser le shell à son état par défaut'
    ],
    correct: 1,
    explanation: "`source` (ou `.`) exécute un fichier dans le contexte du shell actuel, permettant de modifier les variables et fonctions existantes.",
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Quelle variable contient le chemin de recherche pour la commande `unalias` ?",
    options: ['PATH', 'ALIAS_PATH', 'Le shell n\'utilise pas de chemin pour les alias', 'BASH_ALIASES'],
    correct: 2,
    explanation: "Les alias sont stockés en mémoire dans l'environnement shell actuel ; il n'y a pas de chemin de recherche sur disque comme pour les exécutables.",
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande affiche toutes les variables d'environnement actuellement définies ?",
    options: ['set', 'env', 'export -p', 'À la fois env et export -p'],
    correct: 3,
    explanation: "`env` montre les variables exportées, et `export -p` les liste dans un format destiné à l'entrée shell.",
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Quel fichier est lu en premier par un shell de connexion Bash pour la configuration du système ?",
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: "Un shell de connexion lit d'abord /etc/profile, qui charge généralement d'autres fichiers dans /etc/profile.d/.",
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Comment supprime-t-on une variable d'environnement nommée 'TEMP_DATA' pour le reste de la session ?",
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: "`unset` supprime une variable ou une fonction de l'environnement shell actuel.",
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Quelle fonctionnalité de Bash permet d'utiliser `ll` au lieu de taper `ls -l` ?",
    options: ['Fonction', 'Lien', 'Alias', 'Redirection'],
    correct: 2,
    explanation: "Un alias fournit un raccourci pour exécuter des commandes plus longues avec des options spécifiques.",
  },

  // ─── 105.2 Personnaliser ou écrire des scripts simples (10 questions) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Dans un script bash, quelle séquence de caractères indique l'interpréte qui doit être utilisé pour exécuter le script ?",
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: "Le shebang (#!) au début de la première ligne définit l'interpréteur du script."
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quel opérateur logique exécute la seconde commande uniquement si la première échoue (renvoie un code de sortie non nul) ?",
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: "L'opérateur OU (||) est utilisé pour la gestion d'erreurs ou l'exécution conditionnelle en cas d'échec."
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Comment affecter correctement la sortie de la commande 'whoami' à une variable nommée 'USER' ?",
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: "$(commande) effectue la substitution de commande dans les shells modernes."
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quelle variable contient le nombre d'arguments passés à un script shell ?",
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: "$# contient le nombre de paramètres positionnels."
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Quel est le code de sortie d'une commande qui s'est terminée avec succès ?",
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: "Sous Unix/Linux, 0 signifie succès ; toute valeur non nulle indique une erreur."
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Comment vérifier si un fichier nommé `data.txt` existe dans un script shell ?",
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      'À la fois [ -e data.txt ] et [ -f data.txt ] sont valides'
    ],
    correct: 3,
    explanation: "`-e` vérifie l'existence ; `-f` vérifie spécifiquement s'il s'agit d'un fichier régulier.",
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Que représente la variable `$?` dans un script shell ?",
    options: [
      'Le PID du shell actuel',
      "Le code de sortie de la commande précédemment exécutée",
      'Le premier argument du script',
      'Un nombre aléatoire généré par le shell'
    ],
    correct: 1,
    explanation: "$? capture le code de retour de la commande de premier plan la plus récente.",
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Quelle structure de boucle utiliseriez-vous pour itérer à travers une liste de noms de fichiers ?",
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: "La boucle `for` est idéale pour itérer sur une liste définie d'éléments.",
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Dans un script, comment accède-t-on au deuxième argument qui lui est passé ?",
    options: ['$2', '${2}', 'À la fois $2 et ${2}', '$ARG2'],
    correct: 2,
    explanation: "$2 ou ${2} fait référence au deuxième paramètre positionnel.",
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Quelle est la syntaxe correcte pour une condition `if` simple en Bash ?",
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: "Le `if` de Bash nécessite le mot-clé `then`, souvent sur la même ligne après un point-virgule, et doit se terminer par `fi`.",
  },
];
