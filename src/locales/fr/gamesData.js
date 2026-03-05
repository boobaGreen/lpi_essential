export const dragDropData = [
  {
    "title": "Commandes de base",
    "pairs": [
      {
        "left": "ls",
        "right": "Liste des fichiers"
      },
      {
        "left": "cd",
        "right": "Changer de répertoire"
      },
      {
        "left": "pwd",
        "right": "Répertoire actuel"
      },
      {
        "left": "cp",
        "right": "Copier des fichiers"
      },
      {
        "left": "rm",
        "right": "Supprimer des fichiers"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Répertoires Linux",
    "pairs": [
      {
        "left": "/etc",
        "right": "Configuration du système"
      },
      {
        "left": "/home",
        "right": "Accueil des utilisateurs"
      },
      {
        "left": "/var",
        "right": "Données variables (journal)"
      },
      {
        "left": "/tmp",
        "right": "Fichiers temporaires"
      },
      {
        "left": "/boot",
        "right": "Noyau et chargeur de démarrage"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Distribution Linux",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "Basé sur Debian"
      },
      {
        "left": "Fedora",
        "right": "Base pour RHEL"
      },
      {
        "left": "Arch",
        "right": "Version continue"
      },
      {
        "left": "CentOS",
        "right": "Dérivé de RHEL"
      },
      {
        "left": "openSUSE",
        "right": "Utiliser Zipper"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Applications libres",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "Suite bureautique"
      },
      {
        "left": "Firefox",
        "right": "Navigateurs Web"
      },
      {
        "left": "GIMP",
        "right": "Éditeur d'images"
      },
      {
        "left": "Blender",
        "right": "modélisation 3D"
      },
      {
        "left": "Audacity",
        "right": "Éditeur audio"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Licences de logiciels",
    "pairs": [
      {
        "left": "GPL",
        "right": "Un copyleft fort"
      },
      {
        "left": "MIT",
        "right": "Permissif, très court"
      },
      {
        "left": "Apache 2.0",
        "right": "Permissif + brevets"
      },
      {
        "left": "LGPL",
        "right": "Lien avec le propriétaire"
      },
      {
        "left": "AGPL",
        "right": "Copyleft pour SaaS"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Gestionnaires de paquets",
    "pairs": [
      {
        "left": "apt",
        "right": "Debian/Ubuntu"
      },
      {
        "left": "dnf",
        "right": "Fedora/RHEL"
      },
      {
        "left": "pacman",
        "right": "ArchLinux"
      },
      {
        "left": "zypper",
        "right": "ouvertSUSE"
      },
      {
        "left": "snap",
        "right": "Forfaits universels (canoniques)"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Autorisations de fichiers (numériques)",
    "pairs": [
      {
        "left": "777",
        "right": "Lire, écrire, jouer pour tous"
      },
      {
        "left": "755",
        "right": "Le propriétaire fait tout, les autres lisent/exécutent"
      },
      {
        "left": "644",
        "right": "Le propriétaire lit/écrit, les autres lisent"
      },
      {
        "left": "600",
        "right": "Seul le propriétaire lit et écrit"
      },
      {
        "left": "400",
        "right": "Seul le propriétaire peut lire"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Symboles de frappe",
    "pairs": [
      {
        "left": ">",
        "right": "Rediriger la sortie (écraser)"
      },
      {
        "left": ">>",
        "right": "Redirection de la sortie (ajouter)"
      },
      {
        "left": "|",
        "right": "Pipe (commandes de connexion)"
      },
      {
        "left": "&",
        "right": "Fonctionne en arrière-plan"
      },
      {
        "left": "$$",
        "right": "PID du shell actuel"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "Services système",
    "pairs": [
      {
        "left": "systemd",
        "right": "Système d'initialisation moderne"
      },
      {
        "left": "sshd",
        "right": "Serveur SSH"
      },
      {
        "left": "cron",
        "right": "Planification des démons"
      },
      {
        "left": "cups",
        "right": "Serveur d'impression"
      },
      {
        "left": "rsyslog",
        "right": "Gestion des journaux système"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "Pour créer un répertoire : _____ dirname",
    "answer": "mkdir",
    "hint": "Créer un répertoire",
    "difficulty": 1
  },
  {
    "prompt": "Pour supprimer un fichier : _____ nom du fichier",
    "answer": "rm",
    "hint": "Retirer",
    "difficulty": 1
  },
  {
    "prompt": "Pour copier un fichier : _____ source destination",
    "answer": "cp",
    "hint": "Copie",
    "difficulty": 1
  },
  {
    "prompt": "Pour déplacer un fichier : _____ source destination",
    "answer": "mv",
    "hint": "Se déplacer",
    "difficulty": 1
  },
  {
    "prompt": "Pour voir le répertoire actuel : _____",
    "answer": "pwd",
    "hint": "Imprimer le répertoire de travail",
    "difficulty": 1
  },
  {
    "prompt": "Pour créer un fichier vide : _____ nom de fichier",
    "answer": "touch",
    "hint": "Appuyez/créez",
    "difficulty": 1
  },
  {
    "prompt": "Pour afficher le contenu : _____ nom de fichier",
    "answer": "cat",
    "hint": "Enchaîner",
    "difficulty": 1
  },
  {
    "prompt": "Pour lire le manuel : _____ ls",
    "answer": "man",
    "hint": "Manuel",
    "difficulty": 1
  },
  {
    "prompt": "Pour imprimer le texte : _____ \"Hello World\"",
    "answer": "echo",
    "hint": "Éco/imprimé",
    "difficulty": 1
  },
  {
    "prompt": "Pour lister les fichiers avec des détails : _____ -la",
    "answer": "ls",
    "hint": "Liste",
    "difficulty": 1
  },
  {
    "prompt": "Pour voir les processus : _____ aux",
    "answer": "ps",
    "hint": "Statut du processus",
    "difficulty": 2
  },
  {
    "prompt": "Pour modifier les autorisations : _____ 755 script.sh",
    "answer": "chmod",
    "hint": "Changer de mode",
    "difficulty": 2
  },
  {
    "prompt": "Pour changer de propriétaire : _____ utilisateur : fichier de groupe",
    "answer": "chown",
    "hint": "Changer de propriétaire",
    "difficulty": 2
  },
  {
    "prompt": "Pour rechercher du texte : _____ \"pattern\" file.txt",
    "answer": "grep",
    "hint": "Impression d'expressions régulières globales",
    "difficulty": 2
  },
  {
    "prompt": "Pour extraire une archive tar.gz : tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "extraire le fichier gZip",
    "difficulty": 2
  },
  {
    "prompt": "Pour ajouter un utilisateur : _____ -m newuser",
    "answer": "useradd",
    "hint": "Ajouter un utilisateur",
    "difficulty": 2
  },
  {
    "prompt": "Pour voir l'espace disque : _____ -h",
    "answer": "df",
    "hint": "Disque libre",
    "difficulty": 2
  },
  {
    "prompt": "Pour rechercher des fichiers dans le système de fichiers : _____ / -name \"*.log\"",
    "answer": "find",
    "hint": "Rechercher dans le système de fichiers",
    "difficulty": 2
  },
  {
    "prompt": "Pour afficher les premières lignes : _____ -n 5 file.txt",
    "answer": "head",
    "hint": "Tête/départ",
    "difficulty": 2
  },
  {
    "prompt": "Pour afficher les dernières lignes : _____ -n 5 file.txt",
    "answer": "tail",
    "hint": "Queue/fin",
    "difficulty": 2
  },
  {
    "prompt": "Pour monter un système de fichiers : _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "Monter",
    "difficulty": 2
  },
  {
    "prompt": "Pour tester la connectivité : _____ google.com",
    "answer": "ping",
    "hint": "Envoyer un paquet ICMP",
    "difficulty": 2
  },
  {
    "prompt": "Pour télécharger un fichier à partir de l'URL : _____ http://example.com/file",
    "answer": "wget",
    "hint": "WebObtenir",
    "difficulty": 2
  },
  {
    "prompt": "Pour tuer un processus : _____ -9 PID",
    "answer": "kill",
    "hint": "Fin du processus",
    "difficulty": 3
  },
  {
    "prompt": "Pour suivre un journal en temps réel : tail _____ /var/log/syslog",
    "answer": "-f",
    "hint": "Suivre",
    "difficulty": 3
  },
  {
    "prompt": "Pour créer un lien symbolique : ln _____ lien cible",
    "answer": "-s",
    "hint": "Symbolique",
    "difficulty": 3
  },
  {
    "prompt": "Pour modifier le texte en ligne : _____ -i fichier \"s/old/new/g\"",
    "answer": "sed",
    "hint": "Éditeur de flux",
    "difficulty": 3
  },
  {
    "prompt": "Pour compter les lignes/mots/octets : _____ -l file.txt",
    "answer": "wc",
    "hint": "Nombre de mots",
    "difficulty": 3
  },
  {
    "prompt": "Pour trier les lignes : _____ -rn data.txt",
    "answer": "sort",
    "hint": "Commande",
    "difficulty": 3
  },
  {
    "prompt": "Pour couper des colonnes : _____ -d : -f1 /etc/passwd",
    "answer": "cut",
    "hint": "Couper/extraire",
    "difficulty": 3
  },
  {
    "prompt": "Pour synchroniser les fichiers : _____ -avz src/ dest/",
    "answer": "rsync",
    "hint": "Synchronisation à distance",
    "difficulty": 3
  },
  {
    "prompt": "Pour extraire des colonnes à motifs : _____ fichier '{print $1}'",
    "answer": "awk",
    "hint": "Langage de traitement",
    "difficulty": 3
  },
  {
    "prompt": "Pour afficher les fichiers ouverts : _____ -i :80",
    "answer": "lsof",
    "hint": "Liste des fichiers ouverts",
    "difficulty": 3
  },
  {
    "prompt": "Pour gérer les services systemd : _____ redémarrer nginx",
    "answer": "systemctl",
    "hint": "Contrôle du système",
    "difficulty": 3
  },
  {
    "prompt": "Pour modifier la crontab : _____ -e",
    "answer": "crontab",
    "hint": "Tableau Cron",
    "difficulty": 3
  },
  {
    "prompt": "Pour voir les connexions réseau : _____ -tuln",
    "answer": "ss",
    "hint": "Statistiques des sockets",
    "difficulty": 3
  },
  {
    "prompt": "Pour traduire des caractères : echo \"bonjour\" | _____ a-z A-Z",
    "answer": "tr",
    "hint": "Traduire",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "Liste des fichiers et répertoires"
  },
  {
    "command": "cd",
    "description": "Changer de répertoire"
  },
  {
    "command": "pwd",
    "description": "Afficher le répertoire actuel"
  },
  {
    "command": "cp",
    "description": "Copier des fichiers"
  },
  {
    "command": "mv",
    "description": "Déplacer ou renommer des fichiers"
  },
  {
    "command": "rm",
    "description": "Supprimer des fichiers"
  },
  {
    "command": "cat",
    "description": "Afficher le contenu du fichier"
  },
  {
    "command": "mkdir",
    "description": "Créer un répertoire"
  },
  {
    "command": "touch",
    "description": "Créer un fichier vide"
  },
  {
    "command": "echo",
    "description": "Imprimer le texte sur la sortie standard"
  },
  {
    "command": "man",
    "description": "Afficher le manuel"
  },
  {
    "command": "sudo",
    "description": "Exécuter en tant que root"
  },
  {
    "command": "whoami",
    "description": "Afficher l'utilisateur actuel"
  },
  {
    "command": "exit",
    "description": "Ferme la coque"
  },
  {
    "command": "chmod",
    "description": "Modifier les autorisations des fichiers"
  },
  {
    "command": "grep",
    "description": "Rechercher des modèles dans le texte"
  },
  {
    "command": "find",
    "description": "Rechercher des fichiers dans le système de fichiers"
  },
  {
    "command": "tar",
    "description": "Archiver et compresser des fichiers"
  },
  {
    "command": "chown",
    "description": "Changer le propriétaire du fichier"
  },
  {
    "command": "df",
    "description": "Afficher l'espace disque libre"
  },
  {
    "command": "du",
    "description": "Taille du fichier et du répertoire"
  },
  {
    "command": "top",
    "description": "Surveiller les processus en temps réel"
  },
  {
    "command": "ps",
    "description": "Liste des processus actifs"
  },
  {
    "command": "kill",
    "description": "Terminer un processus"
  },
  {
    "command": "ssh",
    "description": "Connexion à distance sécurisée"
  },
  {
    "command": "scp",
    "description": "Copier des fichiers via SSH"
  },
  {
    "command": "ln",
    "description": "Créer des liens vers des fichiers"
  },
  {
    "command": "head",
    "description": "Premières lignes d'un fichier"
  },
  {
    "command": "tail",
    "description": "Dernières lignes d'un fichier"
  },
  {
    "command": "wc",
    "description": "Compter les lignes, les mots, les octets"
  },
  {
    "command": "sort",
    "description": "Trier les lignes de texte"
  },
  {
    "command": "mount",
    "description": "Monter un système de fichiers"
  },
  {
    "command": "umount",
    "description": "Démonter un système de fichiers"
  },
  {
    "command": "awk",
    "description": "Traiter le texte par colonnes"
  },
  {
    "command": "sed",
    "description": "Éditeur de flux de texte"
  },
  {
    "command": "xargs",
    "description": "Construit des arguments à partir de stdin"
  },
  {
    "command": "crontab",
    "description": "Planifier des tâches périodiques"
  },
  {
    "command": "iptables",
    "description": "Configurer le pare-feu Linux"
  },
  {
    "command": "rsync",
    "description": "Synchroniser les fichiers distants"
  },
  {
    "command": "cut",
    "description": "Extraire les colonnes du texte"
  },
  {
    "command": "tr",
    "description": "Traduire/supprimer des caractères"
  },
  {
    "command": "tee",
    "description": "Sortie vers un fichier et une sortie standard"
  },
  {
    "command": "useradd",
    "description": "Ajoute un utilisateur"
  },
  {
    "command": "passwd",
    "description": "Changer le mot de passe utilisateur"
  },
  {
    "command": "groupadd",
    "description": "Créer un nouveau groupe"
  },
  {
    "command": "netstat",
    "description": "Statistiques de connexion réseau"
  },
  {
    "command": "ifconfig",
    "description": "Configurer l'interface réseau"
  },
  {
    "command": "ping",
    "description": "Tester la connectivité réseau"
  },
  {
    "command": "wget",
    "description": "Télécharger des fichiers à partir d'une URL"
  },
  {
    "command": "curl",
    "description": "Transférer des données depuis une URL"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "Affiche le contenu du répertoire actuel",
    "answer": "ls",
    "hints": [
      "Une commande de 2 lettres",
      "Commence par \"l\""
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Changer le répertoire pour accéder au domicile de l'utilisateur",
    "answer": "cd ~",
    "hints": [
      "Utilisez un CD...",
      "Le symbole ~ représente la maison"
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Afficher le répertoire actuel (chemin absolu)",
    "answer": "pwd",
    "hints": [
      "Impression en cours...",
      "3 lettres"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Créez un répertoire appelé \"projet\"",
    "answer": "mkdir progetto",
    "hints": [
      "Créer un répertoire...",
      "mkdir + nom"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Affiche le contenu du fichier /etc/hostname",
    "answer": "cat /etc/hostname",
    "hints": [
      "avecCATenate...",
      "ch + chemin"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Affiche l'ID utilisateur actuel",
    "answer": "id",
    "hints": [
      "Une commande très courte",
      "2 lettres"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Créez un fichier vide appelé test.txt",
    "answer": "touch test.txt",
    "hints": [
      "Ce n'est pas un chat...",
      "toucher + nom"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Affiche les 10 premières lignes d'un fichier log.txt",
    "answer": "head log.txt",
    "hints": [
      "Le contraire de « queue »",
      "tête + fichier"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Afficher le manuel de commande ls",
    "answer": "man ls",
    "hints": [
      "Manuel...",
      "homme + commandement"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Supprimez le fichier obsolète.txt",
    "answer": "rm obsoleto.txt",
    "hints": [
      "Retirer...",
      "salle + nom"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Copiez le fichier config.txt dans backup.txt",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "Copie...",
      "cp source destination"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Afficher l'historique des commandes",
    "answer": "history",
    "hints": [
      "L'HISTOIRE des commandes",
      "7 lettres"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Recherchez le mot « erreur » dans le fichier syslog",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "Expression régulière globale...",
      "fichier de modèles grep"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Rendre le script hello.sh exécutable",
    "answer": "chmod +x hello.sh",
    "hints": [
      "Changer de mode...",
      "chmod + quelque chose"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Créez une archive tar.gz du dossier docs/",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "tar -c...",
      "c=créer z=gzip f=fichier"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Affiche l'espace disque utilisé dans un format lisible",
    "answer": "df -h",
    "hints": [
      "Disque libre...",
      "df + drapeaux"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Comptez les lignes dans le fichier /etc/passwd",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "Nombre de mots...",
      "toilettes -l"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Affiche les processus en cours en temps réel",
    "answer": "top",
    "hints": [
      "3 lettres",
      "Un moniteur système"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Connectez-vous via SSH à l'hôte 192.168.1.10",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "Coque sécurisée...",
      "ssh + adresse"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Changer le propriétaire du fichier en utilisateur \"admin\"",
    "answer": "chown admin file",
    "hints": [
      "Changer de propriétaire...",
      "fichier utilisateur chown"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Affiche la taille du répertoire /var/log",
    "answer": "du -sh /var/log",
    "hints": [
      "Utilisation du disque...",
      "du -sh"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Suivez le fichier /var/log/syslog en temps réel",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "queue avec un drapeau...",
      "f = suivre"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Créez un lien symbolique de /etc/hosts dans /tmp/",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "Avec un drapeau...",
      "-s = symbolique"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Recherchez la commande ifconfig dans le PATH",
    "answer": "which ifconfig",
    "hints": [
      "Quel ifconfig...",
      "quelle + commande"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Recherchez tous les fichiers .log dans /var de plus de 10 Mo",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "trouver + -nom + -taille",
      "M = mégaoctets"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Triez le fichier data.txt dans l'ordre numérique inverse",
    "answer": "sort -rn data.txt",
    "hints": [
      "trier -r = inversé, -n = numérique",
      "trier + indicateur"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Afficher uniquement le premier champ de /etc/passwd (nom d'utilisateur)",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "couper avec délimiteur :...",
      "couper -d : -f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Planifier une tâche cron quotidienne à 3h00",
    "answer": "0 3 * * *",
    "hints": [
      "minute heure jour mois jour_semaine",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Remplacez \"foo\" par \"bar\" dans un fichier en utilisant sed",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i \"s/ancien/nouveau/g\"",
      "Éditeur de flux"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Affiche les connexions réseau actives",
    "answer": "ss -tuln",
    "hints": [
      "Statistiques des sockets...",
      "ss + drapeau"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Extrayez la deuxième colonne séparée par des espaces avec awk",
    "answer": "awk '{print $2}'",
    "hints": [
      "impression dégueulasse...",
      "$2 = deuxième colonne"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Affiche la table de routage réseau",
    "answer": "ip route",
    "hints": [
      "IP...",
      "route/table de routage"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Afficher les fichiers ouverts par processus avec le PID 1234",
    "answer": "lsof -p 1234",
    "hints": [
      "Liste des fichiers ouverts...",
      "lsof + drapeaux"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Redémarrez le service nginx avec systemd",
    "answer": "systemctl restart nginx",
    "hints": [
      "systèmectl...",
      "redémarrer + nom du service"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Ajouter l'utilisateur \"mario\" au groupe \"sudo\"",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "mode utilisateur...",
      "-aG = ajouter un groupe"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "La commande \"ls\" affiche les fichiers dans le répertoire courant.",
    "answer": true,
    "explanation": "Correct! ls (liste) répertorie les fichiers et les répertoires.",
    "difficulty": 1
  },
  {
    "text": "/etc contient les fichiers de configuration du système.",
    "answer": true,
    "explanation": "Correct! /etc est le répertoire standard pour les configurations.",
    "difficulty": 1
  },
  {
    "text": "La commande chmod change le propriétaire d'un fichier.",
    "answer": false,
    "explanation": "chmod modifie les autorisations. chown change de propriétaire.",
    "difficulty": 1
  },
  {
    "text": "Android utilise le noyau Linux.",
    "answer": true,
    "explanation": "Correct! Android utilise un noyau Linux modifié par Google.",
    "difficulty": 1
  },
  {
    "text": "root a toujours l'UID 0.",
    "answer": true,
    "explanation": "Correct! L'utilisateur root a toujours l'UID 0 sur tous les systèmes Unix/Linux.",
    "difficulty": 1
  },
  {
    "text": "Le tube (|) écrit la sortie dans un fichier.",
    "answer": false,
    "explanation": "Le tuyau transmet la sortie au suivant. > écrit dans un fichier.",
    "difficulty": 1
  },
  {
    "text": "Ubuntu est basé sur Debian.",
    "answer": true,
    "explanation": "Correct! Ubuntu dérive de Debian.",
    "difficulty": 1
  },
  {
    "text": "Le symbole ~ indique le répertoire /tmp.",
    "answer": false,
    "explanation": "~ indique le répertoire personnel de l'utilisateur, pas /tmp.",
    "difficulty": 1
  },
  {
    "text": "Bash est le shell par défaut dans la plupart des distributions Linux.",
    "answer": true,
    "explanation": "Correct! Bash (Bourne Again Shell) est le shell par défaut.",
    "difficulty": 1
  },
  {
    "text": "Le caractère # dans un script bash indique un commentaire.",
    "answer": true,
    "explanation": "Correct! Les lignes commençant par # sont des commentaires en bash.",
    "difficulty": 1
  },
  {
    "text": "La touche Tab complète automatiquement les commandes et les noms de fichiers.",
    "answer": true,
    "explanation": "Correct! La saisie semi-automatique des onglets est une fonctionnalité essentielle du shell.",
    "difficulty": 1
  },
  {
    "text": "Le répertoire /home contient la maison de l'utilisateur root.",
    "answer": false,
    "explanation": "Le répertoire racine est /root. /home contient les maisons des utilisateurs normaux.",
    "difficulty": 1
  },
  {
    "text": "La licence GPL vous permet de rendre propriétaire le code dérivé.",
    "answer": false,
    "explanation": "La GPL (copyleft) oblige les produits dérivés à conserver la même licence.",
    "difficulty": 2
  },
  {
    "text": "La licence MIT est une licence permissive.",
    "answer": true,
    "explanation": "Le MIT est très permissif : il autorise presque toutes les utilisations.",
    "difficulty": 2
  },
  {
    "text": "SSH utilise le port 443 par défaut.",
    "answer": false,
    "explanation": "SSH utilise le port 22. Le port 443 est pour HTTPS.",
    "difficulty": 2
  },
  {
    "text": "Le shebang #!/bin/bash doit être sur la première ligne du script.",
    "answer": true,
    "explanation": "Correct! Le shebang indique au système quel interprète utiliser.",
    "difficulty": 2
  },
  {
    "text": "RAID 1 crée une copie miroir des données.",
    "answer": true,
    "explanation": "Correct! RAID 1 duplique les données sur deux disques.",
    "difficulty": 2
  },
  {
    "text": "DNS traduit les noms de domaine en adresses IP.",
    "answer": true,
    "explanation": "Correct! DNS résout les noms en adresses IP.",
    "difficulty": 2
  },
  {
    "text": "La commande \"Rechercher\" recherche du texte dans les fichiers.",
    "answer": false,
    "explanation": "find recherche des fichiers dans le système de fichiers. grep recherche du texte dans les fichiers.",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow est lisible par tous les utilisateurs.",
    "answer": false,
    "explanation": "/etc/shadow n'est lisible que par root. Contient des mots de passe hachés.",
    "difficulty": 2
  },
  {
    "text": "La commande \"export\" met une variable à disposition des processus enfants.",
    "answer": true,
    "explanation": "Correct! export exporte la variable en tant que variable d'environnement.",
    "difficulty": 2
  },
  {
    "text": "Le fichier /etc/passwd contient les mots de passe des utilisateurs en texte clair.",
    "answer": false,
    "explanation": "/etc/passwd ne contient plus de vrais mots de passe. Ils sont dans /etc/shadow sous forme de hachages.",
    "difficulty": 2
  },
  {
    "text": "Le glob* correspond également aux fichiers cachés (commençant par un point).",
    "answer": false,
    "explanation": "Le glob * n'inclut pas les fichiers commençant par un point. Vous avez besoin d'options comme dotglob.",
    "difficulty": 2
  },
  {
    "text": "NFS est un protocole de partage de fichiers entre systèmes Unix/Linux.",
    "answer": true,
    "explanation": "Correct! NFS (Network File System) partage des fichiers sur un réseau entre les systèmes Unix.",
    "difficulty": 2
  },
  {
    "text": "La commande \"cat\" peut concaténer plusieurs fichiers.",
    "answer": true,
    "explanation": "Correct! cat (concaténation) joint le contenu de plusieurs fichiers : cat file1 file2.",
    "difficulty": 2
  },
  {
    "text": "apt est le gestionnaire de paquets utilisé par Fedora.",
    "answer": false,
    "explanation": "Fedora utilise dnf (ou miam). apt est pour Debian/Ubuntu.",
    "difficulty": 2
  },
  {
    "text": "Linux est un système d'exploitation complet.",
    "answer": false,
    "explanation": "Linux n'est que le noyau. GNU/Linux est le système d'exploitation complet.",
    "difficulty": 3
  },
  {
    "text": "Un lien physique peut pointer vers un répertoire.",
    "answer": false,
    "explanation": "Les liens physiques ne peuvent pas pointer vers des répertoires (pour éviter les boucles).",
    "difficulty": 3
  },
  {
    "text": "La commande tar -czf extrait une archive.",
    "answer": false,
    "explanation": "-czf crée une archive gzip. Pour extraire, utilisez -xzf.",
    "difficulty": 3
  },
  {
    "text": "$1 dans un script Bash indique le premier argument.",
    "answer": true,
    "explanation": "Correct! $1 = premier argument, $2 = deuxième, etc.",
    "difficulty": 3
  },
  {
    "text": "Les liens symboliques survivent à la suppression de la cible.",
    "answer": false,
    "explanation": "Si vous supprimez la cible, le lien symbolique devient \"cassé\".",
    "difficulty": 3
  },
  {
    "text": "SIGKILL (9) peut être intercepté par le processus.",
    "answer": false,
    "explanation": "SIGKILL ne peut pas être intercepté. Terminez immédiatement.",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 est une gamme d’adresses IP privées.",
    "answer": true,
    "explanation": "Correct! Il s'agit de l'une des trois plages privées définies par la RFC 1918.",
    "difficulty": 3
  },
  {
    "text": "Le système de fichiers ext4 prend en charge les journaux.",
    "answer": true,
    "explanation": "Correct! ext4 est un système de fichiers de journalisation.",
    "difficulty": 3
  },
  {
    "text": "La commande \"nice\" change la priorité d'un processus.",
    "answer": true,
    "explanation": "Correct! nice définit la priorité de planification.",
    "difficulty": 3
  },
  {
    "text": "TCP est un protocole sans connexion.",
    "answer": false,
    "explanation": "TCP est orienté connexion. UDP est sans connexion.",
    "difficulty": 3
  },
  {
    "text": "La commande \"crontab -e\" modifie les tâches planifiées de l'utilisateur.",
    "answer": true,
    "explanation": "Correct! crontab -e ouvre l'éditeur de tâches cron de l'utilisateur.",
    "difficulty": 3
  },
  {
    "text": "Un processus en état zombie utilise beaucoup de CPU.",
    "answer": false,
    "explanation": "Un processus zombie s'est terminé mais le parent n'a pas lu son statut de sortie. Il n'utilise aucune ressource.",
    "difficulty": 3
  },
  {
    "text": "/dev/null supprime tout ce qui lui est envoyé.",
    "answer": true,
    "explanation": "Correct! /dev/null est le « trou noir » de Linux : il supprime toutes les données.",
    "difficulty": 3
  },
  {
    "text": "Le fichier /etc/fstab définit les systèmes de fichiers qui sont automatiquement montés au démarrage.",
    "answer": true,
    "explanation": "Correct! fstab (table du système de fichiers) contient des informations de montage automatique.",
    "difficulty": 3
  },
  {
    "text": "La commande \"df\" affiche la taille d'un seul fichier.",
    "answer": false,
    "explanation": "df affiche l'espace disque du système de fichiers. Pour la taille des fichiers, utilisez du ou ls -l.",
    "difficulty": 3
  },
  {
    "text": "systemd est le système d'initialisation utilisé par la plupart des distributions modernes.",
    "answer": true,
    "explanation": "Correct! systemd a remplacé SysVinit dans la plupart des distributions.",
    "difficulty": 3
  },
  {
    "text": "Le fichier ~/.bash_history contient les commandes saisies par l'utilisateur.",
    "answer": true,
    "explanation": "Correct! L'historique des commandes bash est enregistré dans ~/.bash_history.",
    "difficulty": 3
  },
  {
    "text": "La commande \"grep -r\" recherche les répertoires de manière récursive.",
    "answer": true,
    "explanation": "Correct! grep -r (ou -R) recherche des modèles dans tous les fichiers du répertoire et des sous-répertoires.",
    "difficulty": 3
  },
  {
    "text": "Le bit collant empêche les utilisateurs de supprimer les fichiers d'autres personnes dans les répertoires partagés.",
    "answer": true,
    "explanation": "Correct! Le bit collant (t) sur /tmp empêche les utilisateurs de supprimer les fichiers d'autres personnes.",
    "difficulty": 3
  }
];