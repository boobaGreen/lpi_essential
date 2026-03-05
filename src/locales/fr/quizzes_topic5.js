export const topic5Quizzes = [
  {
    "lessonId": "5-1",
    "question": "Quel UID possède l’utilisateur root ?",
    "options": [
      "1",
      "0",
      "1000",
      "999"
    ],
    "correct": 1,
    "explanation": "L'utilisateur root a toujours l'UID 0."
  },
  {
    "lessonId": "5-1",
    "question": "Quelle commande vous permet d’exécuter des commandes en tant que root ?",
    "options": [
      "sur",
      "je transpire",
      "racine",
      "administrateur"
    ],
    "correct": 1,
    "explanation": "sudo exécute une seule commande avec les privilèges root, en utilisant votre mot de passe."
  },
  {
    "lessonId": "5-1",
    "question": "su - (avec le trait d'union) va :",
    "options": [
      "Changer uniquement d'utilisateur",
      "Changez d'utilisateur et chargez leur environnement complet",
      "Créer un nouvel utilisateur",
      "Supprimer un utilisateur"
    ],
    "correct": 1,
    "explanation": "su - simule une connexion complète de l'utilisateur cible, en chargeant toutes les variables d'environnement."
  },
  {
    "lessonId": "5-1",
    "question": "/etc/sudoers est modifié avec :",
    "options": [
      "nain",
      "vim",
      "visudo",
      "chmod"
    ],
    "correct": 2,
    "explanation": "visudo est le moyen sûr d'éditer /etc/sudoers : vérifiez la syntaxe avant de sauvegarder."
  },
  {
    "lessonId": "5-1",
    "question": "Le principe du « moindre privilège » signifie :",
    "options": [
      "Donnez toujours racine",
      "Donnez uniquement les autorisations nécessaires",
      "Je n'ai pas de mot de passe",
      "Utilisez toujours sudo"
    ],
    "correct": 1,
    "explanation": "Accordez aux utilisateurs et aux processus uniquement les privilèges strictement nécessaires à leur tâche."
  },
  {
    "lessonId": "5-1",
    "question": "sudo par rapport à su a l'avantage de :",
    "options": [
      "Ne demandez pas de mots de passe",
      "Être traçable dans les logs",
      "Soyez plus rapide",
      "Ne demandez pas de privilèges"
    ],
    "correct": 1,
    "explanation": "sudo enregistre chaque commande dans le journal (/var/log/auth.log), rendant les actions traçables."
  },
  {
    "lessonId": "5-1",
    "question": "La commande \"id\" affiche :",
    "options": [
      "Le nom d'hôte",
      "L'UID, le GID et les groupes de l'utilisateur",
      "Le PID",
      "La version du noyau"
    ],
    "correct": 1,
    "explanation": "id affiche l'UID, le GID et tous les groupes auxquels l'utilisateur appartient."
  },
  {
    "lessonId": "5-1",
    "question": "Les utilisateurs du système ont l'UID :",
    "options": [
      "0",
      "De 1 à 999",
      "À partir de 1000 et plus",
      "Points négatifs"
    ],
    "correct": 1,
    "explanation": "Les utilisateurs du système (démons, services) ont généralement des UID compris entre 1 et 999."
  },
  {
    "lessonId": "5-1",
    "question": "L'utilisateur \"personne\" est utilisé pour :",
    "options": [
      "L'administrateur",
      "Processus qui ne nécessitent pas de privilèges",
      "Les sauvegardes",
      "Connexion à distance"
    ],
    "correct": 1,
    "explanation": "personne (UID 65534) n'est utilisé pour les processus qui doivent s'exécuter avec le moins de privilèges."
  },
  {
    "lessonId": "5-1",
    "question": "Les journaux d'authentification se trouvent dans :",
    "options": [
      "/var/log/auth.log",
      "/etc/log/auth",
      "/tmp/auth.log",
      "/accueil/journal"
    ],
    "correct": 0,
    "explanation": "/var/log/auth.log (Debian) ou /var/log/secure (RHEL) contient des journaux d'authentification."
  },
  {
    "lessonId": "5-2",
    "question": "Dans quel fichier les mots de passe cryptés sont-ils stockés ?",
    "options": [
      "/etc/mot de passe",
      "/etc/ombre",
      "/etc/groupe",
      "/etc/connexion"
    ],
    "correct": 1,
    "explanation": "/etc/shadow contient des mots de passe cryptés et n'est lisible que par root."
  },
  {
    "lessonId": "5-2",
    "question": "Quelle commande crée un nouvel utilisateur avec le répertoire personnel ?",
    "options": [
      "ajouter un utilisateur",
      "utilisateurajouter -m",
      "nouvel utilisateur",
      "mkuser"
    ],
    "correct": 1,
    "explanation": "useradd -m crée l'utilisateur et son répertoire personnel. -m est essentiel."
  },
  {
    "lessonId": "5-2",
    "question": "Le format de /etc/passwd est :",
    "options": [
      "utilisateur: mot de passe: domicile",
      "utilisateur: x: UID: GID: info: home: shell",
      "utilisateur:UID:shell",
      "nom : hachage : sel"
    ],
    "correct": 1,
    "explanation": "user:x:UID:GID:gecos:home:shell — le x indique que le mot de passe est dans /etc/shadow."
  },
  {
    "lessonId": "5-2",
    "question": "usermod -aG usergroup fait :",
    "options": [
      "Supprime l'utilisateur du groupe",
      "Ajoute l'utilisateur au groupe supplémentaire",
      "Changer le groupe principal",
      "Créer un nouveau groupe"
    ],
    "correct": 1,
    "explanation": "-aG (append Group) ajoute l'utilisateur à un groupe supplémentaire sans le supprimer des autres."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/skel contient :",
    "options": [
      "Mots de passe",
      "Modèles pour les nouveaux répertoires personnels",
      "Les groupes",
      "Les journaux"
    ],
    "correct": 1,
    "explanation": "/etc/skel contient les fichiers copiés dans le répertoire personnel de chaque nouvel utilisateur (par exemple .bashrc)."
  },
  {
    "lessonId": "5-2",
    "question": "userdel -r supprime :",
    "options": [
      "Seul l'utilisateur",
      "L'utilisateur et son répertoire personnel",
      "Seulement la maison",
      "Juste le mot de passe"
    ],
    "correct": 1,
    "explanation": "-r supprime également le répertoire personnel et le spool de courrier de l'utilisateur."
  },
  {
    "lessonId": "5-2",
    "question": "le mot de passe utilisateur est utilisé pour :",
    "options": [
      "Créer l'utilisateur",
      "Changer le mot de passe de l'utilisateur",
      "Supprimer l'utilisateur",
      "Bloquer l'utilisateur"
    ],
    "correct": 1,
    "explanation": "passwd modifie le mot de passe d'un utilisateur. Root peut changer celui de n’importe quel utilisateur."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/group contient :",
    "options": [
      "Mots de passe de groupe",
      "La liste des groupes et de leurs membres",
      "Autorisations de fichiers",
      "La configuration du réseau"
    ],
    "correct": 1,
    "explanation": "/etc/group répertorie les groupes système et leurs membres supplémentaires."
  },
  {
    "lessonId": "5-2",
    "question": "groupadd nom de groupe créer :",
    "options": [
      "Un utilisateur",
      "Un nouveau groupe",
      "Un fichier",
      "Un répertoire"
    ],
    "correct": 1,
    "explanation": "groupadd crée un nouveau groupe dans le système."
  },
  {
    "lessonId": "5-2",
    "question": "Quel champ dans /etc/passwd contient le shell de connexion ?",
    "options": [
      "Le premier",
      "Le troisième",
      "L'avant-dernier",
      "Le dernier"
    ],
    "correct": 3,
    "explanation": "Le dernier (7ème) champ de /etc/passwd spécifie le shell de connexion de l'utilisateur."
  },
  {
    "lessonId": "5-2",
    "question": "/sbin/nologin en tant que shell signifie :",
    "options": [
      "Coquille de racine",
      "L'utilisateur ne peut pas se connecter de manière interactive",
      "Coque d'urgence",
      "Shell sans mot de passe"
    ],
    "correct": 1,
    "explanation": "/sbin/nologin empêche la connexion interactive (utilisée pour les comptes de service)."
  },
  {
    "lessonId": "5-2",
    "question": "Chaque utilisateur dispose d'un groupe :",
    "options": [
      "Facultatif",
      "Primaire (obligatoire)",
      "Seulement si administrateur",
      "Seulement s'il a une maison"
    ],
    "correct": 1,
    "explanation": "Chaque utilisateur possède un groupe principal (GID dans /etc/passwd) et peut avoir des groupes supplémentaires."
  },
  {
    "lessonId": "5-3",
    "question": "Quelle valeur octale correspond aux autorisations rwxr-xr-- ?",
    "options": [
      "644",
      "755",
      "754",
      "764"
    ],
    "correct": 2,
    "explanation": "rwx=7, r-x=5, r--=4 → 754."
  },
  {
    "lessonId": "5-3",
    "question": "Quelle commande change le propriétaire d’un fichier ?",
    "options": [
      "chmod",
      "chown",
      "chgrp",
      "chperm"
    ],
    "correct": 1,
    "explanation": "chown (changer de propriétaire) change le propriétaire. chmod modifie les autorisations."
  },
  {
    "lessonId": "5-3",
    "question": "Que fait la commande chmod u+x script.sh ?",
    "options": [
      "Supprime l'autorisation d'exécution",
      "Ajoute l'autorisation d'exécution au propriétaire",
      "Ajoute l'autorisation d'exécution à tous",
      "Changer le propriétaire"
    ],
    "correct": 1,
    "explanation": "u+x ajoute (+) l'autorisation d'exécution (x) au propriétaire (u=utilisateur)."
  },
  {
    "lessonId": "5-3",
    "question": "Quelle autorisation spéciale fait que les nouveaux fichiers d’un répertoire héritent du groupe ?",
    "options": [
      "Morceaux collants",
      "SUID",
      "SGID",
      "Liste de contrôle d'accès"
    ],
    "correct": 2,
    "explanation": "Le SGID sur un répertoire fait que les nouveaux fichiers héritent du groupe du répertoire."
  },
  {
    "lessonId": "5-3",
    "question": "La valeur octale de r (lecture) est :",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "correct": 2,
    "explanation": "r=4, w=2, x=1. Les valeurs s'ajoutent : rw=6, rwx=7."
  },
  {
    "lessonId": "5-3",
    "question": "chmod 644 définit :",
    "options": [
      "rwxr-xr-x",
      "rw-r--r--",
      "rwx------",
      "rw-rw-rw-"
    ],
    "correct": 1,
    "explanation": "6=rw-, 4=r--, 4=r-- → rw-r--r-- (le propriétaire lit/écrit, les autres lisent uniquement)."
  },
  {
    "lessonId": "5-3",
    "question": "Le Sticky Bit sur /tmp empêche :",
    "options": [
      "Lire des autres",
      "La suppression des fichiers d'autrui",
      "L'écriture",
      "L'exécution"
    ],
    "correct": 1,
    "explanation": "Le Sticky Bit empêche un utilisateur de supprimer des fichiers dont il ne possède pas dans /tmp."
  },
  {
    "lessonId": "5-3",
    "question": "umask 022 produit des autorisations par défaut pour les fichiers de :",
    "options": [
      "777",
      "755",
      "644",
      "600"
    ],
    "correct": 2,
    "explanation": "Pour les fichiers : 666 - 022 = 644 (rw-r--r--). Pour les annuaires : 777 - 022 = 755."
  },
  {
    "lessonId": "5-3",
    "question": "changements chgrp :",
    "options": [
      "Le propriétaire",
      "Le groupe de propriété",
      "Les permis",
      "Le nom du fichier"
    ],
    "correct": 1,
    "explanation": "chgrp (changer de groupe) change le groupe propriétaire d'un fichier."
  },
  {
    "lessonId": "5-3",
    "question": "Le SUID sur un exécutable le fait s'exécuter avec les autorisations :",
    "options": [
      "De l'utilisateur qui l'exécute",
      "Du propriétaire du fichier",
      "Toujours rooter",
      "Du groupe"
    ],
    "correct": 1,
    "explanation": "SUID fait exécuter le programme avec les autorisations du propriétaire du fichier (par exemple, passwd a la racine SUID)."
  },
  {
    "lessonId": "5-3",
    "question": "Le fichier chmod o-w supprime :",
    "options": [
      "Écrire pour tout le monde",
      "Écrire pour « les autres »",
      "Lire pour les « autres »",
      "Courir pour \"propriétaire\""
    ],
    "correct": 1,
    "explanation": "o=autres, -w=supprimer l'écriture. Supprimez l'autorisation d'écriture pour les \"autres\"."
  },
  {
    "lessonId": "5-3",
    "question": "ls -l affiche les autorisations au format :",
    "options": [
      "Octal (755)",
      "Symbolique (rwxr-xr-x)",
      "Pistes",
      "Hexadécimal"
    ],
    "correct": 1,
    "explanation": "ls -l affiche les autorisations au format symbolique : rwxr-xr-x."
  },
  {
    "lessonId": "5-3",
    "question": "Un fichier avec 700 autorisations n'est accessible que par :",
    "options": [
      "Tout le monde",
      "Le propriétaire",
      "Le groupe",
      "Racine"
    ],
    "correct": 1,
    "explanation": "700 = rwx------ — seul le propriétaire dispose des autorisations (et root contourne tout)."
  },
  {
    "lessonId": "5-4",
    "question": "Quel type de lien peut traverser différents systèmes de fichiers ?",
    "options": [
      "Liens physiques",
      "Liens symboliques",
      "Les deux",
      "Personne"
    ],
    "correct": 1,
    "explanation": "Les liens symboliques peuvent traverser différents systèmes de fichiers. Les liens physiques ne le sont pas."
  },
  {
    "lessonId": "5-4",
    "question": "Que se passe-t-il lorsque vous supprimez le fichier cible d'un lien physique ?",
    "options": [
      "Le lien devient « rompu »",
      "Le dossier reste accessible via le lien",
      "Le lien est également supprimé",
      "Le système échoue"
    ],
    "correct": 1,
    "explanation": "Avec les liens physiques, le fichier reste accessible tant qu'il existe au moins un lien vers l'inode."
  },
  {
    "lessonId": "5-4",
    "question": "le lien cible ln -s crée :",
    "options": [
      "Un lien dur",
      "Un lien symbolique",
      "Un exemplaire",
      "Un pseudonyme"
    ],
    "correct": 1,
    "explanation": "-s indique un lien symbolique. Sans -s, ln crée un lien physique."
  },
  {
    "lessonId": "5-4",
    "question": "Un lien symbolique « rompu » est celui dont :",
    "options": [
      "L'autorisation est refusée",
      "Le fichier cible a été supprimé",
      "L'inode est corrompu",
      "Le système de fichiers est plein"
    ],
    "correct": 1,
    "explanation": "Un lien symbolique devient \"cassé\" lorsque le fichier cible n'existe plus."
  },
  {
    "lessonId": "5-4",
    "question": "Un lien physique pointe vers :",
    "options": [
      "Un chemin",
      "Un inode",
      "Un autre lien",
      "Un répertoire"
    ],
    "correct": 1,
    "explanation": "Un lien physique est un nom supplémentaire qui pointe vers le même inode que le fichier d'origine."
  },
  {
    "lessonId": "5-4",
    "question": "Pouvez-vous créer des liens physiques vers des répertoires ?",
    "options": [
      "Oui, toujours",
      "Non (normalement)",
      "Seule la racine peut",
      "Seulement avec -d"
    ],
    "correct": 1,
    "explanation": "Les liens physiques vers des répertoires ne sont pas autorisés pour éviter les boucles dans le système de fichiers."
  },
  {
    "lessonId": "5-4",
    "question": "ls -i montre :",
    "options": [
      "Le type de fichier",
      "Le numéro d'inode",
      "Le propriétaire",
      "La date de création"
    ],
    "correct": 1,
    "explanation": "ls -i affiche le numéro d'inode de chaque fichier."
  },
  {
    "lessonId": "5-4",
    "question": "le lien de lecture montre :",
    "options": [
      "Le contenu du fichier",
      "La cible d'un lien symbolique",
      "Les permis",
      "Le propriétaire"
    ],
    "correct": 1,
    "explanation": "readlink affiche le fichier/chemin vers lequel pointe un lien symbolique."
  },
  {
    "lessonId": "5-4",
    "question": "Deux liens physiques vers le même fichier contiennent :",
    "options": [
      "Différents inodes",
      "Le même inode",
      "Différents contenus",
      "Différents propriétaires"
    ],
    "correct": 1,
    "explanation": "Les liens physiques partagent le même inode. Ils ne peuvent pas être distingués du fichier \"original\"."
  },
  {
    "lessonId": "5-4",
    "question": "Un lien symbolique a la taille :",
    "options": [
      "Zéro octet",
      "Identique à la cible",
      "Égal à la longueur du chemin cible",
      "4096 octets"
    ],
    "correct": 2,
    "explanation": "La taille d'un lien symbolique est la longueur du chemin cible (par exemple /etc/passwd = 11 octets)."
  }
];
