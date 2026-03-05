export const topic2Extended = {
  "2-1": {
    "title": "Bases de la ligne de commande",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🐚",
        "text": "Qu’est-ce que Shell ?"
      },
      {
        "type": "paragraph",
        "text": "Le shell est un programme qui interprète les commandes utilisateur et les transmet au noyau pour exécution. C'est l'interface texte entre vous et le système d'exploitation. Chaque fois que vous ouvrez un terminal, vous démarrez un shell."
      },
      {
        "type": "table",
        "headers": [
          "Coquille",
          "Déposer",
          "Caractéristiques",
          "Distribution"
        ],
        "rows": [
          [
            "Frapper",
            "/bin/bash",
            "Scripts les plus populaires et les plus puissants, complétion par onglets",
            "Presque tous"
          ],
          [
            "Zsh",
            "/bin/zsh",
            "Avancé, plugins (Oh My Zsh), thème personnalisable",
            "macOS par défaut"
          ],
          [
            "Poisson",
            "/usr/bin/poisson",
            "Convivial, coloration syntaxique, suggestions automatiques",
            "Alternative moderne"
          ],
          [
            "Tiret",
            "/bin/tiret",
            "POSIX minimal, démarrage rapide, utilisé par Debian pour /bin/sh",
            "Debian/Ubuntu"
          ],
          [
            "merde",
            "/bin/sh",
            "Coque POSIX originale, compatibilité maximale",
            "Tous les Unix"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI demande quel est le shell par défaut sur la plupart des distributions : c'est Bash (Bourne Again Shell). N'oubliez pas non plus que $SHELL affiche le shell de connexion, pas nécessairement celui utilisé."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💲",
        "text": "L'invite et ses symboles"
      },
      {
        "type": "paragraph",
        "text": "L'invite est la ligne que le terminal affiche lorsqu'il est prêt à recevoir des commandes. Contient des informations utiles."
      },
      {
        "type": "code",
        "title": "Anatomie de l'invite",
        "prompt": "utilisateur@nom d'hôte :~/documents$\n│ │ │ │\n│ │ │ └── $ = utilisateur normal (# = root)\n│ │ └── répertoire actuel (~ = home)\n│ └── nom de la machine\n└── nom d'utilisateur",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "$ contre #",
        "content": "Le symbole $ indique un utilisateur normal. Le symbole # indique l'utilisateur root. Si vous voyez # dans l’invite, vous utilisez tous les privilèges – soyez prudent !"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "Citation : guillemets et échappement"
      },
      {
        "type": "paragraph",
        "text": "Les guillemets contrôlent la façon dont le shell interprète les caractères spéciaux. C'est l'un des concepts les plus testés à l'examen LPI."
      },
      {
        "type": "table",
        "headers": [
          "Taper",
          "Syntaxe",
          "Développer $VAR ?",
          "Développer *?",
          "Exemple"
        ],
        "rows": [
          [
            "Guillemets doubles",
            "\"texte\"",
            "✅ Oui",
            "❌ Non",
            "\"Salut $USER\" → Salut Mario"
          ],
          [
            "Citations simples",
            "'texte'",
            "❌ Non",
            "❌ Non",
            "'Bonjour $USER' → Bonjour $USER"
          ],
          [
            "Barre oblique inverse",
            "\\personnage",
            "Évasion unique",
            "Évasion unique",
            "écho \\$HOME → $HOME"
          ],
          [
            "Personne",
            "texte",
            "✅ Oui",
            "✅ Oui",
            "echo * → lister tous les fichiers"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemples pratiques de citation",
        "prompt": "$ echo \"Ma maison est $HOME\"\nMa maison est /home/étudiant\n\n$ echo 'Ma maison est $HOME'\nMa maison est $HOME\n\n$ echo \"Il y a des fichiers $(ls | wc -l)\"\nIl y a 42 fichiers",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⌨️",
        "text": "Raccourcis clavier essentiels"
      },
      {
        "type": "table",
        "headers": [
          "Raccourci",
          "Action",
          "Quand l'utiliser"
        ],
        "rows": [
          [
            "Languette",
            "Complétion automatique",
            "Commandes complètes et chemins de fichiers"
          ],
          [
            "Onglet Onglet",
            "Afficher toutes les options",
            "Quand il y a plus de possibilités"
          ],
          [
            "Ctrl+C",
            "Commande d'arrêt (SIGINT)",
            "Pour arrêter un processus bloqué"
          ],
          [
            "Ctrl+D",
            "Fin de fichier (EOF)",
            "Pour fermer le shell ou l'entrée"
          ],
          [
            "Ctrl+L",
            "Nettoie l'écran",
            "Équivalent à effacer"
          ],
          [
            "Ctrl+R",
            "Historique de recherche",
            "Pour retrouver les commandes précédentes"
          ],
          [
            "↑ / ↓",
            "Parcourir l'historique",
            "Pour répéter les commandes récentes"
          ],
          [
            "Ctrl+A / Ctrl+E",
            "Début / Fin de ligne",
            "Pour avancer rapidement dans la commande"
          ]
        ]
      }
    ]
  },
  "2-2": {
    "title": "Variables et environnement",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Variables locales et variables environnementales"
      },
      {
        "type": "paragraph",
        "text": "Il existe deux types de variables dans bash. Les variables locales n'existent que dans le shell actuel. Les variables d'environnement sont exportées et disponibles pour tous les processus enfants."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Variables locales",
          "items": [
            "NOM=\"valeur\" (AUCUN espace autour de =)",
            "Visible uniquement dans le shell actuel",
            "Non hérité des processus enfants",
            "Rues dont le NOM n'est pas défini"
          ]
        },
        "right": {
          "title": "Variables d'environnement",
          "items": [
            "exporter NOM=\"valeur\"",
            "Visible par tous les processus enfants",
            "Hériter automatiquement",
            "Visible avec env"
          ]
        }
      },
      {
        "type": "code",
        "title": "Variables locales vs environnement",
        "prompt": "$ LOCALE=\"uniquement ici\" # variable locale\n$ export GLOBAL=\"partout\" # variable d'environnement\n$ écho $LOCAL $GLOBAL\nseulement ici partout\n\n$ bash -c 'echo $LOCAL $GLOBAL' # nouveau shell enfant\npartout\n#LOCALE n'est pas visible dans le shell enfant !",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Attention aux espaces !",
        "content": "En bash, NAME=\"value\" avec des espaces autour de égal ne fonctionne PAS ! Bash interprétera NAME comme une commande. La syntaxe correcte est NAME=\"value\" sans espaces."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛤️",
        "text": "La variable CHEMIN"
      },
      {
        "type": "paragraph",
        "text": "PATH est la variable la plus importante sous Linux. Contient la liste des répertoires dans lesquels le shell recherche les exécutables lorsque vous tapez une commande. Les répertoires sont séparés par : (deux-points)."
      },
      {
        "type": "code",
        "title": "Comment fonctionne PATH",
        "prompt": "$ écho $CHEMIN\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# Lorsque vous tapez \"ls\", le shell recherche dans l'ordre :\n# 1. /usr/local/sbin/ls (introuvable)\n# 2. /usr/local/bin/ls (introuvable)\n#3. /usr/sbin/ls (introuvable)\n# 4. /usr/bin/ls ← TROUVÉ ! Ça fait ça.\n\n# Pour ajouter un répertoire au PATH :\n$ export PATH=\"$PATH:/opt/monprogramme/bin\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌍",
        "text": "Variables environnementales importantes"
      },
      {
        "type": "table",
        "headers": [
          "Variable",
          "Contenu",
          "Exemple"
        ],
        "rows": [
          [
            "$ACCUEIL",
            "Le répertoire personnel de l'utilisateur",
            "/domicile/étudiant"
          ],
          [
            "$UTILISATEUR",
            "Nom d'utilisateur actuel",
            "étudiant"
          ],
          [
            "$COQUILLE",
            "Coquille de connexion",
            "/bin/bash"
          ],
          [
            "$CHEMIN",
            "Répertoire des exécutables",
            "/usr/bin:/bin:..."
          ],
          [
            "$LANG",
            "Langue et localisation",
            "it_IT.UTF-8"
          ],
          [
            "$PWD",
            "Répertoire actuel",
            "/accueil/étudiant/docs"
          ],
          [
            "$NOMHÔTE",
            "Nom de l'appareil",
            "Linux-PC"
          ],
          [
            "$PS1",
            "Format d'invite",
            "\\u@\\h :\\w\\$"
          ],
          [
            "$?",
            "Code de sortie de la dernière commande",
            "0 (succès)"
          ],
          [
            "$$",
            "PID du shell actuel",
            "1234"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📄",
        "text": "Fichier de configuration du shell"
      },
      {
        "type": "paragraph",
        "text": "Bash lit différents fichiers de configuration selon la manière dont il est démarré :"
      },
      {
        "type": "table",
        "headers": [
          "Déposer",
          "Quand il est lu",
          "Portée",
          "Utilisation typique"
        ],
        "rows": [
          [
            "/etc/profil",
            "Connexion Shell (tous les utilisateurs)",
            "Mondial",
            "Variables d'environnement globales"
          ],
          [
            "~/.bash_profile",
            "Connexion au shell",
            "Utilisateur",
            "Connexion de configuration (appelez .bashrc)"
          ],
          [
            "~/.profil",
            "Connexion Shell (si .bash_profile n'existe pas)",
            "Utilisateur",
            "Alternatives à .bash_profile"
          ],
          [
            "~/.bashrc",
            "Shell interactif sans connexion",
            "Utilisateur",
            "Alias, invites, fonctions"
          ],
          [
            "/etc/bash.bashrc",
            "Shell interactif (tous)",
            "Mondial",
            "Configuration globale du bash"
          ],
          [
            "~/.bash_logout",
            "Déconnexion",
            "Utilisateur",
            "Nettoyage, messages de sortie"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI demande quels fichiers sont lus lors de la connexion par rapport au shell interactif. N'oubliez pas : connectez-vous → /etc/profile + ~/.bash_profile. Interactif → ~/.bashrc."
      }
    ]
  },
  "2-3": {
    "title": "Obtenir de l'aide",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📖",
        "text": "Les pages de manuel"
      },
      {
        "type": "paragraph",
        "text": "La commande man est le système de documentation intégré de Linux. Chaque commande, fichier de configuration et appel système a (ou devrait avoir) une page de manuel."
      },
      {
        "type": "table",
        "headers": [
          "Section",
          "Contenu",
          "Exemple"
        ],
        "rows": [
          [
            "1",
            "Commandes utilisateur",
            "homme 1 ls"
          ],
          [
            "2",
            "Appels système (noyau)",
            "homme 2 ouvert"
          ],
          [
            "3",
            "Fonctions de la bibliothèque C",
            "homme 3 printf"
          ],
          [
            "4",
            "Fichiers spéciaux (/dev)",
            "homme 4 nul"
          ],
          [
            "5",
            "Formats de fichiers et configuration",
            "homme 5 mot de passe"
          ],
          [
            "6",
            "Jeux",
            "homme 6 fortunes"
          ],
          [
            "7",
            "Divers",
            "homme 7 ip"
          ],
          [
            "8",
            "Commandes d'administration",
            "homme 8 monture"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Commandes pour obtenir de l'aide",
        "prompt": "$ man ls # Manuel complet de ls\n$ man -k \"copier le fichier\" # Recherche par mot-clé (= à propos)\n$ man 5 passwd # Section 5 : Format de fichier\n$ qu'est-ce que ls # Brève description\n$ info coreutils # Documentation GNU détaillée\n$ ls --help # Aide intégrée à la commande",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Naviguez à l'intérieur de l'homme",
        "content": "Dans une page de manuel : Espace = avant, b = retour, /text = recherche, q = sortie. L'homme utilise le programme « moins » comme téléavertisseur."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔍",
        "text": "Rechercher des fichiers dans le système"
      },
      {
        "type": "comparison",
        "left": {
          "title": "trouver (en temps réel)",
          "items": [
            "Rechercher le système de fichiers en temps réel",
            "Lent sur les grands systèmes de fichiers",
            "Puissant : recherche par nom, type, taille, date, autorisations",
            "Toujours à jour"
          ]
        },
        "right": {
          "title": "localiser (base de données)",
          "items": [
            "Rechercher dans une base de données pré-indexée",
            "Très rapide",
            "Limité : recherche par nom uniquement",
            "Base de données mise à jour avec updateb (généralement quotidiennement)"
          ]
        }
      },
      {
        "type": "code",
        "title": "Exemples de recherche de fichiers",
        "prompt": "$ find /home -name \"*.txt\" # fichier .txt dans /home\n$ find / -type d -name \"config\" # Répertoires appelés config\n$ find /var -size +10M # Fichiers de plus de 10 Mo\n$ trouver . -mtime -7 # Modifié au cours des 7 derniers jours\n$ trouver . -perm 755 # Avec 755 autorisations\n\n$ localiser passwd # Rechercher dans la base de données\n$ quel python # Où se trouve-t-il dans le PATH\n$ où est ls # Binaire, source et homme",
        "output": ""
      }
    ]
  },
  "2-4": {
    "title": "Navigation et gestion de fichiers",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌳",
        "text": "FHS — Norme de hiérarchie du système de fichiers"
      },
      {
        "type": "paragraph",
        "text": "Le FHS définit la structure de répertoires Linux standard. Toutes les distributions suivent ces conventions, ce qui permet de savoir où trouver chaque type de fichier."
      },
      {
        "type": "table",
        "headers": [
          "Annuaires",
          "Contenu",
          "Exemple"
        ],
        "rows": [
          [
            "/",
            "Root – racine de tout le système de fichiers",
            "Tout commence à partir d'ici"
          ],
          [
            "/bin",
            "Commandes essentielles pour tous les utilisateurs",
            "ls, cp, mv, chat, bash"
          ],
          [
            "/sbin",
            "Commandes système pour l'administrateur",
            "monter, fdisk, iptables"
          ],
          [
            "/etc",
            "Fichier de configuration du système",
            "mot de passe, fstab, nginx.conf"
          ],
          [
            "/maison",
            "Annuaires personnels des utilisateurs",
            "/maison/mario, /maison/étudiant"
          ],
          [
            "/racine",
            "Accueil de l'utilisateur root",
            "Séparé de /home pour des raisons de sécurité"
          ],
          [
            "/var",
            "Données variables (journal, spool, cache)",
            "/var/log/syslog, /var/www"
          ],
          [
            "/tmp",
            "Fichiers temporaires (supprimés au redémarrage)",
            "Fichiers de session, téléchargements temporaires"
          ],
          [
            "/usr",
            "Programmes et bibliothèques installés",
            "/usr/bin, /usr/lib, /usr/share"
          ],
          [
            "/opter",
            "Logiciel facultatif/tiers",
            "Navigateurs, IDE, applications personnalisées"
          ],
          [
            "/dév",
            "Fichiers de périphérique",
            "/dev/sda (disque), /dev/null"
          ],
          [
            "/proc",
            "Système de fichiers virtuel - informations sur le noyau/processus",
            "/proc/cpuinfo, /proc/meminfo"
          ],
          [
            "/sys",
            "Système de fichiers virtuel – informations sur le matériel",
            "Informations sur le périphérique et le pilote"
          ],
          [
            "/botte",
            "Noyau et chargeur de démarrage",
            "vmlinuz, initramfs, grub"
          ],
          [
            "/lib",
            "Bibliothèques partagées essentielles",
            "libc.so, libpthread.so"
          ],
          [
            "/mnt, /média",
            "Points de montage pour les appareils",
            "USB, CD-ROM, disques externes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧭",
        "text": "Chemins absolus ou relatifs"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Chemin absolu",
          "items": [
            "Commence toujours par /",
            "Identifie un fichier de manière unique",
            "Indépendant de votre emplacement actuel",
            "Exemple : /home/mario/documenti/file.txt"
          ]
        },
        "right": {
          "title": "Chemin relatif",
          "items": [
            "Ne commence PAS par /",
            "Par rapport au répertoire actuel (pwd)",
            "États-Unis. (actuel) et .. (père)",
            "Exemple : ../documents/file.txt"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔠",
        "text": "Globbing – Correspondance de modèles"
      },
      {
        "type": "paragraph",
        "text": "Le globaling vous permet de sélectionner des fichiers à l'aide de modèles spéciaux. Le shell développe le modèle avant de le transmettre à la commande."
      },
      {
        "type": "table",
        "headers": [
          "Motifs",
          "Signification",
          "Exemple",
          "Résultat"
        ],
        "rows": [
          [
            "*",
            "Zéro ou plusieurs caractères",
            "ls *.txt",
            "fichier.txt, rapport.txt"
          ],
          [
            "?",
            "Exactement un personnage",
            "fichier ls?.txt",
            "fichier1.txt, fichierA.txt"
          ],
          [
            "[abc]",
            "L'un des a, b ou c",
            "fichier ls[123].txt",
            "fichier1.txt, fichier2.txt"
          ],
          [
            "[a-z]",
            "Un personnage à portée",
            "ls [a-c]*.txt",
            "abc.txt, bêta.txt"
          ],
          [
            "[!abc]",
            "Tous SAUF a, b, c",
            "ls [!0-9]*",
            "fichier.txt (pas 1fichier)"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Commandes essentielles pour la gestion des fichiers",
        "prompt": "$ mkdir -p project/src/main # Créer avec tous les répertoires parents\n$ cp -r src/ backup/ # Copie récursive\n$ mv old.txt new.txt # Renommer (ou déplacer)\n$ rm -rf obsolete_directory/ # Supprimer récursivement (ATTENTION !)\n$ touch new.txt # Créer un fichier vide ou mettre à jour l'horodatage\n$ ls -la # Liste détaillée des fichiers cachés",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "rm -rf est dangereux !",
        "content": "La commande rm -rf supprime tout de manière récursive SANS demander de confirmation. Une erreur telle que \"rm -rf /\" peut détruire l'ensemble du système. Utilisez toujours avec une extrême prudence !"
      }
    ]
  }
};
