export const topic2Quizzes = [
  {
    "lessonId": "2-1",
    "question": "Quel shell est le shell par défaut dans la plupart des distributions Linux ?",
    "options": [
      "zsh",
      "poisson",
      "frapper",
      "csh"
    ],
    "correct": 2,
    "explanation": "Bash (Bourne Again Shell) est le shell par défaut dans la plupart des distributions Linux."
  },
  {
    "lessonId": "2-1",
    "question": "Quel symbole indique un utilisateur root dans l'invite ?",
    "options": [
      "$",
      "#",
      "@",
      "!"
    ],
    "correct": 1,
    "explanation": "Le symbole # indique l'utilisateur root, tandis que $ indique un utilisateur normal."
  },
  {
    "lessonId": "2-1",
    "question": "Que font les guillemets avec les guillemets doubles (\") ?",
    "options": [
      "Empêche toute expansion",
      "Permet une expansion variable mais pas de globalisation",
      "Cela n'a aucun effet",
      "Exécuter le contenu sous forme de commande"
    ],
    "correct": 1,
    "explanation": "Les guillemets doubles permettent l'expansion des variables ($VAR) mais empêchent la globalisation (* et ?)."
  },
  {
    "lessonId": "2-1",
    "question": "Guillemets simples (') en bash :",
    "options": [
      "Ils élargissent les variables",
      "Ils traitent tout comme un texte littéral",
      "Ils exécutent des commandes",
      "Ils sont équivalents aux doubles"
    ],
    "correct": 1,
    "explanation": "Les guillemets simples traitent tout le contenu comme du texte littéral, sans extension."
  },
  {
    "lessonId": "2-1",
    "question": "Quel caractère permet à un seul caractère de s'échapper ?",
    "options": [
      "/",
      "~",
      "\\",
      "!"
    ],
    "correct": 2,
    "explanation": "La barre oblique inverse (\\) échappe au caractère suivant."
  },
  {
    "lessonId": "2-1",
    "question": "La commande \"type\" dans bash montre :",
    "options": [
      "Le type de fichier",
      "Comment une commande est interprétée",
      "Le type de système de fichiers",
      "Les types d'utilisateurs"
    ],
    "correct": 1,
    "explanation": "type indique si une commande est un programme intégré, un alias, une fonction ou un programme externe."
  },
  {
    "lessonId": "2-1",
    "question": "Quelle commande affiche l'utilisateur actuel ?",
    "options": [
      "OMS",
      "whoami",
      "identifiant",
      "utilisateurs"
    ],
    "correct": 1,
    "explanation": "whoami affiche le nom de l'utilisateur actuel."
  },
  {
    "lessonId": "2-1",
    "question": "Quel fichier définit le shell par défaut d'un utilisateur ?",
    "options": [
      "/etc/shells",
      "/etc/mot de passe",
      "/etc/bashrc",
      "/etc/profil"
    ],
    "correct": 1,
    "explanation": "Le dernier champ de /etc/passwd spécifie le shell par défaut de l'utilisateur."
  },
  {
    "lessonId": "2-1",
    "question": "Qu'est-ce que \"echo $SHELL\" imprime ?",
    "options": [
      "La coque actuelle",
      "Le shell de connexion par défaut",
      "Toutes les coques installées",
      "La version bash"
    ],
    "correct": 1,
    "explanation": "$SHELL contient le chemin d'accès au shell de connexion par défaut de l'utilisateur."
  },
  {
    "lessonId": "2-1",
    "question": "Quelle commande affiche des informations sur le système d'exploitation ?",
    "options": [
      "uname -a",
      "informations sur le système d'exploitation",
      "info système",
      "informations sur l'hôte"
    ],
    "correct": 0,
    "explanation": "uname -a affiche le noyau, le nom d'hôte, l'architecture et d'autres informations système."
  },
  {
    "lessonId": "2-1",
    "question": "La substitution de commande $(command) équivaut à :",
    "options": [
      "$(commande)",
      "\"commande\"",
      "`commande`",
      "{commande}"
    ],
    "correct": 2,
    "explanation": "Les backticks `command` et $(command) sont équivalents pour la substitution de commande."
  },
  {
    "lessonId": "2-1",
    "question": "Quelle clé permet la saisie semi-automatique dans bash ?",
    "options": [
      "Entrer",
      "Languette",
      "Ctrl+C",
      "Échap"
    ],
    "correct": 1,
    "explanation": "La touche Tab permet la saisie semi-automatique des commandes, des fichiers et des répertoires."
  },
  {
    "lessonId": "2-2",
    "question": "Quelle commande affiche la valeur de la variable PATH ?",
    "options": [
      "afficher le CHEMIN",
      "écho $ CHEMIN",
      "imprimer CHEMIN",
      "CHEMIN du chat"
    ],
    "correct": 1,
    "explanation": "echo $PATH imprime la valeur de la variable d'environnement PATH."
  },
  {
    "lessonId": "2-2",
    "question": "Quelle commande met une variable locale à la disposition des processus enfants ?",
    "options": [
      "partager",
      "exporter",
      "ensemble",
      "pousser"
    ],
    "correct": 1,
    "explanation": "L'exportation rend une variable locale disponible en tant que variable d'environnement pour les processus enfants."
  },
  {
    "lessonId": "2-2",
    "question": "Comment attribuer une valeur à une variable dans bash ?",
    "options": [
      "NOM = \"valeur\"",
      "NOM=\"valeur\"",
      "définir NOM=\"valeur\"",
      "laissez NOM=\"valeur\""
    ],
    "correct": 1,
    "explanation": "Dans bash, les affectations ne doivent PAS avoir d'espaces autour de l'égalité : NAME=\"valeur\"."
  },
  {
    "lessonId": "2-2",
    "question": "La variable HOME contient :",
    "options": [
      "Le répertoire racine /",
      "Le répertoire personnel de l'utilisateur",
      "Le chemin à parcourir",
      "Le nom d'hôte"
    ],
    "correct": 1,
    "explanation": "$HOME contient le chemin d'accès au répertoire personnel de l'utilisateur (par exemple /home/user)."
  },
  {
    "lessonId": "2-2",
    "question": "La commande \"env\" affiche :",
    "options": [
      "Uniquement les variables locales",
      "Variables d'environnement",
      "Les commandes disponibles",
      "Variables système"
    ],
    "correct": 1,
    "explanation": "env affiche toutes les variables d'environnement exportées."
  },
  {
    "lessonId": "2-2",
    "question": "Quel fichier est lu lors du démarrage d’une session bash interactive ?",
    "options": [
      "/etc/mot de passe",
      "~/.bashrc",
      "/etc/motd",
      "~/.bash_logout"
    ],
    "correct": 1,
    "explanation": "~/.bashrc est lu à chaque fois qu'un shell bash interactif sans connexion s'ouvre."
  },
  {
    "lessonId": "2-2",
    "question": "Comment supprimer une variable ?",
    "options": [
      "supprimer le VAR",
      "supprimer le VAR",
      "Désactiver le VAR",
      "effacer le VAR"
    ],
    "correct": 2,
    "explanation": "unset VAR supprime la variable de l'environnement shell."
  },
  {
    "lessonId": "2-2",
    "question": "La variable LANG définit :",
    "options": [
      "Le langage de programmation",
      "La langue et la localisation du système",
      "La disposition du clavier",
      "Le réseau LAN"
    ],
    "correct": 1,
    "explanation": "LANG définit la langue et la localisation du système (par exemple it_IT.UTF-8)."
  },
  {
    "lessonId": "2-2",
    "question": "PATH contient :",
    "options": [
      "Fichiers récents",
      "Les répertoires où chercher les commandes",
      "Mots de passe",
      "Les chemins du réseau"
    ],
    "correct": 1,
    "explanation": "PATH est une liste de répertoires séparés par : -séparés dans lesquels le shell recherche les exécutables."
  },
  {
    "lessonId": "2-2",
    "question": "Quel fichier est lu pour TOUS les utilisateurs lors de la connexion ?",
    "options": [
      "~/.bashrc",
      "~/.profil",
      "/etc/profil",
      "/etc/bashrc"
    ],
    "correct": 2,
    "explanation": "/etc/profile est le fichier de profil global lu lors de la connexion pour tous les utilisateurs."
  },
  {
    "lessonId": "2-2",
    "question": "écho $? montrer:",
    "options": [
      "Le PID actuel",
      "Le code de sortie de la dernière commande",
      "L'utilisateur actuel",
      "Le répertoire actuel"
    ],
    "correct": 1,
    "explanation": "$? contient le code de sortie de la dernière commande exécutée (0 = succès)."
  },
  {
    "lessonId": "2-3",
    "question": "Quelle commande un manuel de commandes Linux affiche-t-il ?",
    "options": [
      "commande d'aide",
      "commande d'homme",
      "informations sur la commande",
      "--commande help"
    ],
    "correct": 1,
    "explanation": "man (manuel) affiche la page de manuel complète d'une commande."
  },
  {
    "lessonId": "2-3",
    "question": "Quelle commande recherche un fichier dans le système de fichiers par son nom ?",
    "options": [
      "recherche",
      "grep",
      "trouver",
      "regarde"
    ],
    "correct": 2,
    "explanation": "rechercher des recherches de fichiers et de répertoires dans le système de fichiers. Ex : find / -name \"file.txt\""
  },
  {
    "lessonId": "2-3",
    "question": "La section 1 de l'homme contient :",
    "options": [
      "Fichiers de configuration",
      "Commandes utilisateur",
      "Appels système",
      "Commandes d'administration"
    ],
    "correct": 1,
    "explanation": "Section 1 = commandes utilisateur. 5 = formats de fichiers. 8 = commandes d'administration."
  },
  {
    "lessonId": "2-3",
    "question": "La commande \"à propos\" fait :",
    "options": [
      "Rechercher des pages de manuel par mot-clé",
      "Installer des packages",
      "Afficher la version",
      "Liste des utilisateurs"
    ],
    "correct": 0,
    "explanation": "à propos des recherches dans les descriptions des pages de manuel. Équivalent à homme -k."
  },
  {
    "lessonId": "2-3",
    "question": "Quelle commande indique où se trouve un exécutable ?",
    "options": [
      "trouver",
      "situer",
      "lequel",
      "où"
    ],
    "correct": 2,
    "explanation": "qui montre le chemin d'accès à l'exécutable qui serait exécuté (regardez dans le PATH)."
  },
  {
    "lessonId": "2-3",
    "question": "\"localiser\" est plus rapide que \"trouver\" car :",
    "options": [
      "Utiliser moins de RAM",
      "Utiliser une base de données pré-remplie",
      "C'est écrit en C",
      "C'est un intégré"
    ],
    "correct": 1,
    "explanation": "Locate recherche une base de données mise à jour par Updateb, donc c'est très rapide."
  },
  {
    "lessonId": "2-3",
    "question": "La section 5 de l'homme contient :",
    "options": [
      "Commandes utilisateur",
      "Jeux",
      "Formats de fichiers et configuration",
      "Commandes d'administration"
    ],
    "correct": 2,
    "explanation": "La section 5 documente les formats de fichiers et les fichiers de configuration."
  },
  {
    "lessonId": "2-3",
    "question": "find /home -type f -name \"*.txt\" recherche :",
    "options": [
      "Répertoires .txt",
      "Fichier .txt à la maison",
      "Lien .txt",
      "Processus txt"
    ],
    "correct": 1,
    "explanation": "-type f = fichiers normaux, -name \"*.txt\" = nom se terminant par .txt."
  },
  {
    "lessonId": "2-3",
    "question": "Quelle option de commande affiche une aide courte ?",
    "options": [
      "--homme",
      "--informations",
      "--aide",
      "--doc"
    ],
    "correct": 2,
    "explanation": "Presque toutes les commandes prennent en charge --help pour une aide concise."
  },
  {
    "lessonId": "2-3",
    "question": "La commande \"whatis\" affiche :",
    "options": [
      "Type de fichier",
      "Brève description de la commande",
      "Version du système",
      "Répertoire actuel"
    ],
    "correct": 1,
    "explanation": "whatis affiche la ligne de description de la page de manuel pour une commande."
  },
  {
    "lessonId": "2-4",
    "question": "Dans quel répertoire se trouvent les fichiers de configuration du système ?",
    "options": [
      "/bin",
      "/etc",
      "/var",
      "/opter"
    ],
    "correct": 1,
    "explanation": "/etc contient les fichiers de configuration du système."
  },
  {
    "lessonId": "2-4",
    "question": "Quelle commande crée un répertoire comprenant les répertoires parents manquants ?",
    "options": [
      "mkdir -f",
      "mkdir -r",
      "mkdir -p",
      "mkdir -a"
    ],
    "correct": 2,
    "explanation": "mkdir -p crée le répertoire et tous les répertoires parents nécessaires."
  },
  {
    "lessonId": "2-4",
    "question": "Quel modèle global correspond à un caractère unique ?",
    "options": [
      "*",
      "?",
      "[]",
      "#"
    ],
    "correct": 1,
    "explanation": "? correspond exactement à un seul caractère. * correspond à zéro ou plusieurs caractères."
  },
  {
    "lessonId": "2-4",
    "question": "Le répertoire /var contient :",
    "options": [
      "Commandes de base",
      "Données variables (log, spool, mail)",
      "Configuration",
      "Noyau"
    ],
    "correct": 1,
    "explanation": "/var contient des données qui changent pendant le fonctionnement : journal, cache, courrier."
  },
  {
    "lessonId": "2-4",
    "question": "La commande \"ls -a\" affiche :",
    "options": [
      "Fichiers volumineux uniquement",
      "Même les fichiers cachés (commençant par .)",
      "Fichiers triés par date",
      "Uniquement les fichiers exécutables"
    ],
    "correct": 1,
    "explanation": "-a (tous) affiche également les fichiers cachés commençant par un point (.)."
  },
  {
    "lessonId": "2-4",
    "question": "\" . \" (un seul point) dans un chemin indique :",
    "options": [
      "La racine",
      "Le répertoire actuel",
      "La maison",
      "Un fichier caché"
    ],
    "correct": 1,
    "explanation": ". représente le répertoire courant. .. représente le répertoire parent."
  },
  {
    "lessonId": "2-4",
    "question": "Quel répertoire contient l'accueil des utilisateurs ?",
    "options": [
      "/racine",
      "/utilisateurs",
      "/maison",
      "/usr"
    ],
    "correct": 2,
    "explanation": "/home contient les répertoires personnels des utilisateurs normaux. /root est le répertoire racine."
  },
  {
    "lessonId": "2-4",
    "question": "Le glob [abc] correspond à :",
    "options": [
      "La chaîne ABC",
      "Un seul caractère : a, b ou c",
      "N'importe quel personnage",
      "Trois personnages"
    ],
    "correct": 1,
    "explanation": "[abc] correspond à un seul caractère a, b ou c."
  },
  {
    "lessonId": "2-4",
    "question": "appuyez sur le nom du fichier pour créer :",
    "options": [
      "Un répertoire",
      "Un lien",
      "Un fichier vide (ou un horodatage de mise à jour)",
      "Un processus"
    ],
    "correct": 2,
    "explanation": "touch crée un fichier vide s'il n'existe pas, ou met à jour l'horodatage s'il existe."
  },
  {
    "lessonId": "2-4",
    "question": "/tmp est utilisé pour :",
    "options": [
      "Fichiers temporaires",
      "Fichiers système",
      "Sauvegardes",
      "Configuration"
    ],
    "correct": 0,
    "explanation": "/tmp contient des fichiers temporaires qui peuvent être supprimés au redémarrage."
  },
  {
    "lessonId": "2-4",
    "question": "cp -r est utilisé pour :",
    "options": [
      "Copier les fichiers uniquement",
      "Copier récursivement des répertoires",
      "Renommer les fichiers",
      "Compresser des fichiers"
    ],
    "correct": 1,
    "explanation": "cp -r copie récursivement un répertoire et tout son contenu."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl+C en bash :",
    "options": [
      "Ferme la coque",
      "Interrompt la commande en cours (SIGINT)",
      "Copier le texte",
      "Supprimer la ligne"
    ],
    "correct": 1,
    "explanation": "Ctrl+C envoie SIGINT au processus de premier plan, le tuant."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl+D en bash signifie :",
    "options": [
      "Fin de saisie (EOF)",
      "Annulation",
      "Une nouvelle borne",
      "Achèvement de la commande"
    ],
    "correct": 0,
    "explanation": "Ctrl+D envoie EOF (End Of File), fermant le shell s'il n'y a pas d'entrée."
  },
  {
    "lessonId": "2-2",
    "question": "La variable PS1 contrôle :",
    "options": [
      "Le CHEMIN",
      "L'invite du shell",
      "Le mot de passe",
      "Les processus"
    ],
    "correct": 1,
    "explanation": "PS1 définit l'apparence de l'invite du shell (par exemple \\u@\\h:\\w$ )."
  },
  {
    "lessonId": "2-3",
    "question": "Le mot-clé man -k équivaut à :",
    "options": [
      "qu'est-ce que",
      "à propos",
      "où est",
      "lequel"
    ],
    "correct": 1,
    "explanation": "man -k et à propos, recherchez les descriptions des pages de manuel pour les mots-clés."
  },
  {
    "lessonId": "2-3",
    "question": "La section 8 de l'homme contient :",
    "options": [
      "Commandes utilisateur",
      "Appels système",
      "Jeux",
      "Commandes administratives"
    ],
    "correct": 3,
    "explanation": "La section 8 contient les commandes d'administration système (par exemple mount, useradd)."
  },
  {
    "lessonId": "2-4",
    "question": "/usr contient :",
    "options": [
      "Fichiers utilisateur personnels",
      "Programmes et bibliothèques installés",
      "Fichiers temporaires",
      "Journaux système"
    ],
    "correct": 1,
    "explanation": "/usr (Unix System Resources) contient des programmes, des bibliothèques et de la documentation."
  },
  {
    "lessonId": "2-4",
    "question": "/dev contient :",
    "options": [
      "Documentation",
      "Fichiers de périphérique",
      "Outils de développement",
      "Micrologiciel"
    ],
    "correct": 1,
    "explanation": "/dev contient des fichiers spéciaux qui représentent les périphériques matériels."
  },
  {
    "lessonId": "2-4",
    "question": "Le glob [!abc] correspond à :",
    "options": [
      "Les caractères a, b, c",
      "N'importe quel caractère SAUF a, b, c",
      "La chaîne !abc",
      "Aucun personnage"
    ],
    "correct": 1,
    "explanation": "[!abc] ou [^abc] correspond à un seul caractère qui n'est PAS a, b ou c."
  },
  {
    "lessonId": "2-4",
    "question": "rm -r est utilisé pour :",
    "options": [
      "Renommer les fichiers",
      "Supprimer des fichiers de manière récursive",
      "Restaurer des fichiers",
      "Rotation du journal"
    ],
    "correct": 1,
    "explanation": "rm -r supprime récursivement les répertoires et leur contenu."
  },
  {
    "lessonId": "2-4",
    "question": "Quel répertoire contient les bibliothèques partagées ?",
    "options": [
      "/bin",
      "/lib",
      "/etc",
      "/src"
    ],
    "correct": 1,
    "explanation": "/lib et /lib64 contiennent les bibliothèques partagées nécessaires aux programmes."
  }
];
