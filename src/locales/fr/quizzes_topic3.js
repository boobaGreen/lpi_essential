export const topic3Quizzes = [
  {
    "lessonId": "3-1",
    "question": "Quel algorithme de compression produit généralement les fichiers les plus petits ?",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "comprimé"
    ],
    "correct": 2,
    "explanation": "xz offre le meilleur taux de compression, mais est aussi le plus lent."
  },
  {
    "lessonId": "3-1",
    "question": "Quelle commande crée une archive tar compressée ?",
    "options": [
      "tar -czf archive.tar.gz rép/",
      "tar -xzf archive.tar.gz rép/",
      "répertoire gzip/",
      "zip -r archive.tar.gz rép/"
    ],
    "correct": 0,
    "explanation": "tar -czf : c=créer, z=gzip, f=fichier."
  },
  {
    "lessonId": "3-1",
    "question": "Quelle extension indique un fichier compressé avec bzip2 ?",
    "options": [
      ".gz",
      ".bz2",
      ".xz",
      ".fermeture éclair"
    ],
    "correct": 1,
    "explanation": "bzip2 produit des fichiers avec l'extension .bz2."
  },
  {
    "lessonId": "3-1",
    "question": "L'indicateur -t dans tar est utilisé pour :",
    "options": [
      "Créer des archives",
      "Extraire les archives",
      "Contenu de la liste",
      "Intégrité des tests"
    ],
    "correct": 2,
    "explanation": "tar -tf archive.tar.gz répertorie le contenu sans extraction."
  },
  {
    "lessonId": "3-1",
    "question": "tar -xjf extrait une archive compressée avec :",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "lz4"
    ],
    "correct": 1,
    "explanation": "-j indique bzip2. -z indique gzip. -J indique xz."
  },
  {
    "lessonId": "3-1",
    "question": "Quel indicateur tar indique une compression xz ?",
    "options": [
      "-z",
      "-j",
      "-J",
      "-x"
    ],
    "correct": 2,
    "explanation": "-J indique xz. -z indique gzip. -j indique bzip2."
  },
  {
    "lessonId": "3-1",
    "question": "La commande \"gunzip\" équivaut à :",
    "options": [
      "gzip -d",
      "gzip-c",
      "gzip -r",
      "gzip -l"
    ],
    "correct": 0,
    "explanation": "gunzip et gzip -d décompressent un fichier .gz."
  },
  {
    "lessonId": "3-1",
    "question": "gzip compresse un fichier et :",
    "options": [
      "Conserve l'original",
      "Remplace l'original par .gz",
      "Faire une copie",
      "Le déplace vers /tmp"
    ],
    "correct": 1,
    "explanation": "gzip remplace le fichier original par la version .gz. Utilisez -k pour conserver l'original."
  },
  {
    "lessonId": "3-1",
    "question": "Lequel est le plus rapide en compression ?",
    "options": [
      "xz",
      "bzip2",
      "gzip",
      "lzma"
    ],
    "correct": 2,
    "explanation": "gzip est le plus rapide mais se compresse moins. xz est le plus lent mais se compresse le plus."
  },
  {
    "lessonId": "3-1",
    "question": "tar sans compression produit un fichier :",
    "options": [
      ".tar.gz",
      ".goudron",
      ".gz",
      ".fermeture éclair"
    ],
    "correct": 1,
    "explanation": "tar sans indicateurs de compression (-z/-j/-J) crée une simple archive .tar non compressée."
  },
  {
    "lessonId": "3-2",
    "question": "Quel opérateur redirige la sortie standard en écrasant le fichier ?",
    "options": [
      ">>",
      ">",
      "<",
      "|"
    ],
    "correct": 1,
    "explanation": "> redirige la sortie standard vers un fichier en l'écrasant. >> se bloque."
  },
  {
    "lessonId": "3-2",
    "question": "Quel opérateur redirige stderr ?",
    "options": [
      "1>",
      "2>",
      "0>",
      "3>"
    ],
    "correct": 1,
    "explanation": "2> redirige stderr (descripteur de fichier 2)."
  },
  {
    "lessonId": "3-2",
    "question": "À quoi sert le tuyau (|) ?",
    "options": [
      "Écrit dans un fichier",
      "Connecte la sortie standard d'une commande à la sortie standard de la suivante",
      "Exécute deux commandes en parallèle",
      "Créer un lien symbolique"
    ],
    "correct": 1,
    "explanation": "Le tube (|) transmet la sortie d'une commande en entrée de la commande suivante."
  },
  {
    "lessonId": "3-2",
    "question": ">> contrairement à > fait :",
    "options": [
      "Écrase",
      "S'ajoute au fichier",
      "Lit à partir du fichier",
      "Supprimer le fichier"
    ],
    "correct": 1,
    "explanation": ">> s'ajoute à la fin du fichier sans écraser le contenu existant."
  },
  {
    "lessonId": "3-2",
    "question": "/dev/null est :",
    "options": [
      "Un disque virtuel",
      "Un « trou noir » qui rejette tout",
      "Un fichier journal",
      "Un répertoire temporaire"
    ],
    "correct": 1,
    "explanation": "/dev/null supprime toutes les données écrites. Utile pour éliminer les sorties indésirables."
  },
  {
    "lessonId": "3-2",
    "question": "< redirections :",
    "options": [
      "stdin à partir d'un fichier",
      "sortie standard vers un fichier",
      "stderr vers un fichier",
      "Personne"
    ],
    "correct": 0,
    "explanation": "< redirect stdin : la commande lit les entrées du fichier spécifié."
  },
  {
    "lessonId": "3-2",
    "question": "La commande \"tee\" fait :",
    "options": [
      "Lit à partir de deux fichiers",
      "Écrit la sortie standard à la fois à l'écran et dans un fichier",
      "Divise un fichier en deux",
      "Fusionne deux fichiers"
    ],
    "correct": 1,
    "explanation": "tee est un \"T-splitter\" : il affiche la sortie à l'écran et l'enregistre dans un fichier en même temps."
  },
  {
    "lessonId": "3-2",
    "question": "&> redirections :",
    "options": [
      "Sortie standard uniquement",
      "Stderr uniquement",
      "Sortie standard et stderr",
      "Le contexte"
    ],
    "correct": 2,
    "explanation": "&> redirige à la fois stdout (1) et stderr (2) vers le même fichier."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 && cmd2 exécute cmd2 uniquement si :",
    "options": [
      "cmd1 échoue",
      "cmd1 réussit (sortie 0)",
      "Toujours",
      "Jamais"
    ],
    "correct": 1,
    "explanation": "&& exécute la deuxième commande uniquement si la première a le code de sortie 0 (succès)."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 || cmd2 exécute cmd2 uniquement si :",
    "options": [
      "cmd1 réussit",
      "cmd1 échoue",
      "Toujours",
      "cmd1 n'existe pas"
    ],
    "correct": 1,
    "explanation": "|| exécute la deuxième commande uniquement si la première échoue (code de sortie ≠ 0)."
  },
  {
    "lessonId": "3-2",
    "question": "xargs convertit :",
    "options": [
      "Fichiers dans les répertoires",
      "stdin dans les arguments de ligne de commande",
      "Texte en chiffres",
      "Commandes scriptées"
    ],
    "correct": 1,
    "explanation": "xargs lit depuis stdin et construit des arguments pour une autre commande."
  },
  {
    "lessonId": "3-2",
    "question": "Le descripteur de fichier 0 représente :",
    "options": [
      "sortie standard",
      "stderr",
      "entrée standard",
      "fichiers système"
    ],
    "correct": 2,
    "explanation": "0 = stdin (clavier), 1 = stdout (écran), 2 = stderr (erreurs)."
  },
  {
    "lessonId": "3-3",
    "question": "Quelle option grep effectue une recherche insensible à la casse ?",
    "options": [
      "-r",
      "-le",
      "-v",
      "-c"
    ],
    "correct": 1,
    "explanation": "grep -i ignore la sensibilité à la casse."
  },
  {
    "lessonId": "3-3",
    "question": "Dans l'expression régulière, que signifie le caractère générique \".\" signifier? ?",
    "options": [
      "Fin de ligne",
      "Un point littéral",
      "N'importe quel personnage",
      "Début de ligne"
    ],
    "correct": 2,
    "explanation": "Le point (.) dans les expressions rationnelles correspond à n’importe quel caractère."
  },
  {
    "lessonId": "3-3",
    "question": "grep -v montre :",
    "options": [
      "Seule la première ligne",
      "Les lignes qui ne correspondent PAS au motif",
      "Le nombre d'occurrences",
      "Fichiers binaires"
    ],
    "correct": 1,
    "explanation": "-v (inverser) affiche les lignes qui ne correspondent pas au modèle."
  },
  {
    "lessonId": "3-3",
    "question": "Dans l'expression régulière, ^ signifie :",
    "options": [
      "Fin de ligne",
      "N'importe quel personnage",
      "Début de ligne",
      "Dénégation"
    ],
    "correct": 2,
    "explanation": "^ (caret) indique le début de la ligne dans une expression régulière."
  },
  {
    "lessonId": "3-3",
    "question": "$ dans une expression régulière signifie :",
    "options": [
      "Variable",
      "Fin de ligne",
      "Début de ligne",
      "Dollar littéral"
    ],
    "correct": 1,
    "explanation": "$ indique la fin de la ligne dans les expressions régulières."
  },
  {
    "lessonId": "3-3",
    "question": "cut -d : -f1 /etc/passwd extrait :",
    "options": [
      "L'intégralité du dossier",
      "Le premier champ (nom d'utilisateur)",
      "La dernière ligne",
      "La première ligne"
    ],
    "correct": 1,
    "explanation": "-d : utiliser : comme délimiteur, -f1 sélectionne le premier champ."
  },
  {
    "lessonId": "3-3",
    "question": "La commande \"sort -n\" trie :",
    "options": [
      "Alphabétiquement",
      "Numériquement",
      "Par date",
      "Par coïncidence"
    ],
    "correct": 1,
    "explanation": "-n trie par valeur numérique et non alphabétique."
  },
  {
    "lessonId": "3-3",
    "question": "uniq fonctionne correctement uniquement sur :",
    "options": [
      "Fichiers volumineux",
      "Lignes déjà triées",
      "Fichiers binaires",
      "N'importe quel fichier"
    ],
    "correct": 1,
    "explanation": "uniq supprime les doublons uniquement s'ils sont adjacents. Utilisez le tri avant uniq."
  },
  {
    "lessonId": "3-3",
    "question": "wc -l compte :",
    "options": [
      "Les mots",
      "Les personnages",
      "Les lignes",
      "Les fichiers"
    ],
    "correct": 2,
    "explanation": "wc -l compte les lignes. -w compte les mots, -c compte les octets."
  },
  {
    "lessonId": "3-3",
    "question": "head -n 5 montre :",
    "options": [
      "Les 5 dernières lignes",
      "Les 5 premières lignes",
      "5 lignes aléatoires",
      "Toutes les 5 lignes"
    ],
    "correct": 1,
    "explanation": "head -n 5 affiche les 5 premières lignes d'un fichier ou d'une entrée."
  },
  {
    "lessonId": "3-3",
    "question": "grep -r recherche :",
    "options": [
      "Uniquement dans le fichier spécifié",
      "Récursivement dans les répertoires",
      "Uniquement dans les fichiers .txt",
      "Dans les variables"
    ],
    "correct": 1,
    "explanation": "-r (récursif) recherche le modèle dans tous les fichiers des répertoires."
  },
  {
    "lessonId": "3-3",
    "question": "sed est un éditeur de :",
    "options": [
      "Fichiers binaires",
      "Flux de texte (non interactif)",
      "Images",
      "Bases de données"
    ],
    "correct": 1,
    "explanation": "sed (Stream EDitor) édite le texte de manière non interactive."
  },
  {
    "lessonId": "3-4",
    "question": "Quelle ligne doit être la première dans un script Bash ?",
    "options": [
      "#!/bin/bash",
      "#/bin/bash",
      "//bin/bash",
      "!#/bin/bash"
    ],
    "correct": 0,
    "explanation": "#!/bin/bash est le shebang : il indique au système quel interpréteur utiliser."
  },
  {
    "lessonId": "3-4",
    "question": "Comment accéder au premier argument passé à un script ?",
    "options": [
      "0 $",
      "1 $",
      "$#",
      "$@"
    ],
    "correct": 1,
    "explanation": "$1 est le premier argument. $0 est le nom du script. $# est le nombre d'arguments."
  },
  {
    "lessonId": "3-4",
    "question": "$# contient :",
    "options": [
      "Le nom du scénario",
      "Tous les sujets",
      "Le nombre de sujets",
      "Le code de sortie"
    ],
    "correct": 2,
    "explanation": "$# contient le nombre d'arguments passés au script."
  },
  {
    "lessonId": "3-4",
    "question": "$0 dans un script contient :",
    "options": [
      "Le premier sujet",
      "Le nom du scénario",
      "L'utilisateur",
      "Le PID"
    ],
    "correct": 1,
    "explanation": "$0 est le nom sous lequel le script a été invoqué."
  },
  {
    "lessonId": "3-4",
    "question": "la sortie 0 signifie :",
    "options": [
      "Erreur",
      "Succès",
      "Redémarrer",
      "Résiliation forcée"
    ],
    "correct": 1,
    "explanation": "exit 0 indique une sortie réussie. Les valeurs autres que 0 indiquent une erreur."
  },
  {
    "lessonId": "3-4",
    "question": "Pour rendre un script exécutable :",
    "options": [
      "mv script.sh /bin",
      "chmod +x script.sh",
      "exécuter script.sh",
      "script d'exécution.sh"
    ],
    "correct": 1,
    "explanation": "chmod +x ajoute l'autorisation d'exécution au script."
  },
  {
    "lessonId": "3-4",
    "question": "Dans un if bash, la syntaxe est :",
    "options": [
      "si (cond) {}",
      "si [ cond ]; alors... fi",
      "si cond : ... fin",
      "si {cond} fais... c'est fait"
    ],
    "correct": 1,
    "explanation": "La syntaxe correcte est : if [ condition ]; alors... fi"
  },
  {
    "lessonId": "3-4",
    "question": "La boucle for dans bash :",
    "options": [
      "pour moi dans la liste ; faire ... fait",
      "pour (je dans la liste) {}",
      "foreach je liste la fin",
      "pour i = liste ; fin"
    ],
    "correct": 0,
    "explanation": "pour variable dans la liste ; Je donne des ordres ; fait"
  },
  {
    "lessonId": "3-4",
    "question": "$@ représente :",
    "options": [
      "Tous les arguments sous forme de chaînes distinctes",
      "Le nombre de sujets",
      "Le PID",
      "Le code de sortie"
    ],
    "correct": 0,
    "explanation": "$@ s'étend à tous les arguments passés, chacun sous forme de chaîne distincte."
  },
  {
    "lessonId": "3-4",
    "question": "Le test [ -f file ] vérifie si :",
    "options": [
      "Le fichier est un répertoire",
      "Le fichier existe et est un fichier normal",
      "Le fichier est vide",
      "Le fichier est exécutable"
    ],
    "correct": 1,
    "explanation": "-f vérifie que le chemin existe et qu'il s'agit d'un fichier normal (pas d'un répertoire/lien)."
  },
  {
    "lessonId": "3-4",
    "question": "Quel test vérifie si un répertoire existe ?",
    "options": [
      "[ -f rép ]",
      "[ -d rép ]",
      "[ -e répertoire ]",
      "[ -r rép ]"
    ],
    "correct": 1,
    "explanation": "-d vérifie que le chemin existe et qu'il s'agit d'un répertoire."
  },
  {
    "lessonId": "3-4",
    "question": "# dans un script bash indique :",
    "options": [
      "Une commande racine",
      "Un commentaire",
      "Une directive",
      "Une erreur"
    ],
    "correct": 1,
    "explanation": "# commence un commentaire — tout ce qui suit est ignoré (sauf le shebang sur la première ligne)."
  }
];
