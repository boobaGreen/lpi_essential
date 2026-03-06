export const topic3Extended = {
  "3-1": {
    "title": "Archivage et compression",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗜️",
        "text": "Compression ou stockage"
      },
      {
        "type": "paragraph",
        "text": "L'archivage et la compression sont deux opérations distinctes souvent utilisées ensemble. L'archivage signifie regrouper plusieurs fichiers en un seul. Compresser signifie réduire la taille des données. archive tar, compression gzip/bzip2/xz."
      },
      {
        "type": "comparison",
        "left": {
          "title": "📦 Stockage (goudron)",
          "items": [
            "Regrouper plusieurs fichiers/répertoires en un seul",
            "NE compresse PAS (taille ≈ égale)",
            "Préserver les autorisations, les horodatages et la structure",
            "Produit des fichiers .tar"
          ]
        },
        "right": {
          "title": "🗜️ Compression (gzip, bzip2, xz)",
          "items": [
            "Réduit la taille d’UN fichier",
            "Des algorithmes mathématiques pour éliminer la redondance",
            "Plus vous compressez, plus c'est lent",
            "Produit .gz, .bz2, .xz"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Comparaison des algorithmes"
      },
      {
        "type": "table",
        "headers": [
          "Algorithme",
          "Extension",
          "Vitesse",
          "Compression",
          "Commande",
          "Décompression"
        ],
        "rows": [
          [
            "gzip",
            ".gz",
            "⚡ Vite",
            "⭐⭐⭐",
            "fichiers gzip",
            "fichier gunzip.gz"
          ],
          [
            "bzip2",
            ".bz2",
            "🐌 Moyen",
            "⭐⭐⭐⭐",
            "fichiers bzip2",
            "fichier bunzip2.bz2"
          ],
          [
            "xz",
            ".xz",
            "🐢 Lent",
            "⭐⭐⭐⭐⭐",
            "fichiers xz",
            "fichier unxz.xz"
          ],
          [
            "fermeture éclair",
            ".fermeture éclair",
            "⚡ Vite",
            "⭐⭐⭐",
            "fichier zip arch.zip",
            "décompresser arch.zip"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Quand utiliser lequel ?",
        "content": "gzip pour un usage quotidien (rapide et bon). xz pour distribuer des logiciels (compression maximale). bzip2 n'est plus utilisé au profit de xz."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Drapeaux de goudron — La recette"
      },
      {
        "type": "table",
        "headers": [
          "Drapeaux",
          "Signification",
          "Mnémonique"
        ],
        "rows": [
          [
            "-c",
            "Créer (créer une archive)",
            "C = Créer"
          ],
          [
            "-x",
            "Extrait",
            "X = extraire"
          ],
          [
            "-t",
            "Liste (afficher le contenu)",
            "T = listeT"
          ],
          [
            "-f",
            "Fichier (préciser le nom)",
            "F = Fichier (toujours en dernier !)"
          ],
          [
            "-z",
            "gzip",
            "Z est pour Zip"
          ],
          [
            "-j",
            "bzip2",
            "J est pour bJip2"
          ],
          [
            "-J",
            "xz",
            "Capital J = XZ (plus puissant)"
          ],
          [
            "-v",
            "Verbeux (afficher la progression)",
            "V = verbeux"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemples pratiques avec tar",
        "prompt": "# Créer une archive compressée gzip\n$ tar -czf sauvegarde.tar.gz /home/user/docs/\n\n# Extraire les archives\n$ tar -xzf sauvegarde.tar.gz\n\n# Extraire dans un répertoire spécifique\n$ tar -xzf sauvegarde.tar.gz -C /tmp/\n\n# Lister le contenu sans extraire\n$ tar -tzf sauvegarde.tar.gz\n\n# Créer avec xz (compression maximale)\n$ tar -cJf répertoire archive.tar.xz/",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI demande les indicateurs tar pour créer (-czf) et extraire (-xzf) et connaître la différence entre -z (gzip), -j (bzip2) et -J (xz). N'oubliez pas : gzip est le plus utilisé par défaut."
      }
    ]
  },
  "3-2": {
    "title": "Redirection d'E/S et de canalisations",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "0️⃣",
        "text": "Les trois descripteurs de fichiers standards"
      },
      {
        "type": "paragraph",
        "text": "Chaque processus Linux dispose de trois canaux d'E/S ouverts par défaut. Comprendre ces canaux est essentiel pour la redirection et les tuyaux."
      },
      {
        "type": "diagram",
        "title": "Flux d'E/S standard",
        "boxes": [
          {
            "label": "stdin (0)",
            "color": "#10b981",
            "children": [
              "Tastiera (default)",
              "File (<)",
              "Pipe output"
            ]
          },
          {
            "label": "stdout (1)",
            "color": "#3b82f6",
            "children": [
              "Schermo (default)",
              "File (>)",
              "Pipe input"
            ]
          },
          {
            "label": "stderr (2)",
            "color": "#ef4444",
            "children": [
              "Schermo (default)",
              "File (2>)",
              "/dev/null"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "➡️",
        "text": "Opérateurs de redirection"
      },
      {
        "type": "table",
        "headers": [
          "Opérateur",
          "Fonction",
          "Exemple"
        ],
        "rows": [
          [
            "> fichiers",
            "stdout → fichier (écraser)",
            "ls > liste.txt"
          ],
          [
            ">> fichiers",
            "stdout → fichier (ajouter)",
            "echo \"nouvelle ligne\" >> log.txt"
          ],
          [
            "< fichier",
            "fichier → stdin",
            "trier <numéros.txt"
          ],
          [
            "2> fichiers",
            "stderr → fichier",
            "find / -name \"x\" 2> erreurs.txt"
          ],
          [
            "2>&1",
            "stderr → même sortie que stdout",
            "cmd > all.log 2>&1"
          ],
          [
            "&> fichiers",
            "sortie standard + stderr → fichier",
            "cmd &> sortie.log"
          ],
          [
            "/dev/null",
            "« Trou noir » : jetez tout",
            "cmd 2>/dev/null"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Scénarios de redirection courants",
        "prompt": "# Enregistrer le résultat de la commande\n$ ls -la /etc > list_etc.txt\n\n# Ignorer les erreurs\n$ find / -name \"config\" 2>/dev/null\n\n# Enregistrer tout (stdout + stderr)\n$ apt update &> update.log\n\n# Accrochez-vous à un journal\n$ echo \"$(date) : sauvegarde terminée\" >> /var/log/backup.log",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Pipe — Le pouvoir de la composition"
      },
      {
        "type": "paragraph",
        "text": "Le tube (|) est le concept le plus puissant de la ligne de commande Unix. Il connecte la sortie standard d'une commande au standard de la suivante, vous permettant de créer des pipelines complexes à partir de commandes simples."
      },
      {
        "type": "code",
        "title": "Pipeline : du simple au complexe",
        "prompt": "# Comptez le nombre de fichiers dans /etc\n$ls /etc | toilettes -l\n\n# Trouvez les 5 processus qui utilisent le plus de RAM\n$ps aux | trier -k4 -rn | tête -5\n\n# Comptez combien de fois \"erreur\" apparaît dans les journaux\n$ cat /var/log/syslog | erreur grep -i | toilettes -l\n\n# Extraire les noms d'utilisateur uniques qui se sont connectés\n$dernier | awk '{print $1}' | trier | uniq-c | trier -rn",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Opérateurs logiques entre les commandes"
      },
      {
        "type": "table",
        "headers": [
          "Opérateur",
          "Signification",
          "Exemple"
        ],
        "rows": [
          [
            "cmd1 && cmd2",
            "Exécutez cmd2 UNIQUEMENT si cmd1 réussit (sortie 0)",
            "répertoire mkdir && répertoire cd"
          ],
          [
            "cmd1 || cmd2",
            "Exécutez cmd2 UNIQUEMENT si cmd1 échoue (exit ≠ 0)",
            "hôte ping || echo \"Hors ligne\""
          ],
          [
            "cmd1 ; cmd2",
            "Exécutez cmd2 TOUJOURS, peu importe",
            "date ; whoami"
          ],
          [
            "cmd &",
            "Exécuter cmd en arrière-plan",
            "dormir 100 &"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Scénario : automatisation d'une sauvegarde",
        "text": "Vous êtes un administrateur système et devez effectuer une sauvegarde quotidienne. Avec le pipeline : tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo \"Backup OK\" >> /var/log/backup.log || echo \"Backup ERROR\" >> /var/log/backup.log — Créez une archive, enregistrez le résultat dans le journal. En cas d'échec, enregistrez l'erreur."
      }
    ]
  },
  "3-3": {
    "title": "Grep et expressions régulières",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔎",
        "text": "grep — Le couteau suisse du texte"
      },
      {
        "type": "table",
        "headers": [
          "Option",
          "Fonction",
          "Exemple"
        ],
        "rows": [
          [
            "-le",
            "Insensible à la casse",
            "grep -i \"erreur\" log.txt"
          ],
          [
            "-v",
            "Correspondance inversée (lignes qui ne correspondent PAS)",
            "grep -v \"^#\" config.txt"
          ],
          [
            "-r / -R",
            "Rechercher des répertoires de manière récursive",
            "grep -r \"À FAIRE\" src/"
          ],
          [
            "-n",
            "Afficher le numéro de ligne",
            "grep -n programme \"principal\".c"
          ],
          [
            "-c",
            "Comptez les lignes trouvées",
            "grep -c journal système \"erreur\""
          ],
          [
            "-le",
            "Afficher uniquement les noms de fichiers",
            "grep -rl \"mot de passe\" /etc/",
            "grep -rl \"mot de passe\" \"/etc/\""
          ],
          [
            "-w",
            "Faire correspondre des mots entiers uniquement",
            "grep -w \"est\" le fichier (pas \"ceci\")"
          ],
          [
            "-ET",
            "Regex étendue (egrep)",
            "grep -E journal \"err|warn\""
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌟",
        "text": "Métacaractères Regex"
      },
      {
        "type": "table",
        "headers": [
          "Métacaractère",
          "Signification",
          "Exemple",
          "Correspondre"
        ],
        "rows": [
          [
            ".",
            "N'importe quel personnage",
            "c.t",
            "chat, coupe, lit bébé"
          ],
          [
            "^",
            "Début de ligne",
            "^Erreur",
            "Erreur en début de ligne"
          ],
          [
            "$",
            "Fin de ligne",
            "fin$",
            "la fin"
          ],
          [
            "*",
            "Zéro ou plus que le précédent",
            "abc",
            "ac, abc, abc"
          ],
          [
            "[ ]",
            "Un des personnages du set",
            "[aeiou]",
            "Voyelle unique"
          ],
          [
            "[^ ]",
            "Tous sauf les personnages de l'ensemble",
            "[^0-9]",
            "Pas un numéro"
          ],
          [
            "\\",
            "Évasion générique",
            "\\.",
            "Un point littéral"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemples pratiques avec regex",
        "prompt": "# Lignes commençant par # (commentaires)\n$ grep \"^#\" /etc/ssh/sshd_config\n\n# Lignes vides\n$ grep \"^$\" fichier.txt\n\n# adresses IP (modèle simple)\n$ grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" access.log\n\n# PAS de lignes vides ni PAS de commentaires\n$ grep -v \"^#\" configuration | grep -v \"^$\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "✂️",
        "text": "Manipulation de texte : la boîte à outils Power"
      },
      {
        "type": "table",
        "headers": [
          "Commande",
          "Fonction",
          "Exemple clé"
        ],
        "rows": [
          [
            "couper",
            "Extraire les colonnes/champs",
            "couper -d : -f1 /etc/passwd"
          ],
          [
            "trier",
            "Trier les lignes",
            "trier -n (numérique) -r (inverse)"
          ],
          [
            "unique",
            "Supprimer les doublons adjacents",
            "trier le fichier | uniq -c"
          ],
          [
            "toilettes",
            "Compter les lignes, les mots, les octets",
            "wc -l (lignes) -w (mots)"
          ],
          [
            "tête",
            "N premières lignes",
            "head -n 20 fichiers"
          ],
          [
            "queue",
            "N dernières lignes",
            "tail -f syslog (suivre)"
          ],
          [
            "tr",
            "Traduit les caractères",
            "tr 'a-z' 'A-Z' (majuscule)"
          ],
          [
            "sed",
            "Éditeur de flux",
            "fichier sed '/ancien/nouveau/g'"
          ],
          [
            "embarrassant",
            "Colonnes de processus",
            "awk fichier '{print $1, $3}'"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI teste grep avec -i, -v, -r et les expressions régulières de base (^, $, ., *). Vous connaissez aussi la coupe, le tri, le wc et la différence entre tête et queue."
      }
    ]
  },
  "3-4": {
    "title": "Scripts bash",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Anatomie d'un script Bash"
      },
      {
        "type": "code",
        "title": "Structure de base d'un script",
        "prompt": "#!/bin/bash\n# Ceci est un commentaire\n# Le shebang (première ligne) indique au système quel interprète utiliser\n\n# Variables\nNOM=\"LinuxQuest\"\nVERSION=2.0\n\n# Imprimer\necho \"Bienvenue dans $NAME v$VERSION !\"\necho \"Utilisateur : $(whoami), Date : $(date +%F)\"\n\n# Code de sortie : 0 = succès\nsortie 0",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "N'oubliez pas chmod +x !",
        "content": "Un script n'est pas exécutable par défaut. Vous devez ajouter l'autorisation d'exécution : chmod +x script.sh. Ensuite, exécutez-le avec ./script.sh (le ./ est nécessaire si le répertoire courant n'est pas dans le PATH)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📥",
        "text": "Variables spéciales dans les scripts"
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
            "0 $",
            "Nom du scénario",
            "./backup.sh → sauvegarde.sh"
          ],
          [
            "1$, 2$,...",
            "Arguments positionnels",
            "./script.sh bonjour → $1=bonjour"
          ],
          [
            "$#",
            "Nombre de sujets",
            "Si vous appelez avec 3 arguments → $#=3"
          ],
          [
            "$@",
            "Tous les sujets (séparés)",
            "\"$@\" = \"$1\" \"$2\" \"$3\""
          ],
          [
            "$*",
            "Tous les sujets (fusionnés)",
            "\"$*\" = \"$1 $2 $3\""
          ],
          [
            "$?",
            "Code de sortie de la dernière commande",
            "0 = succès, autre = erreur"
          ],
          [
            "$$",
            "PID du script actuel",
            "Utile pour les fichiers temporaires"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Conditions et cycles"
      },
      {
        "type": "code",
        "title": "Si-alors-sinon",
        "prompt": "#!/bin/bash\nsi [ -f \"/etc/passwd\" ]; alors\n    echo \"Le fichier existe !\"\nelif [ -d \"/etc\" ]; alors\n    echo \"C'est un répertoire\"\nsinon\n    echo \"Pas trouvé\"\nfi",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Test",
          "Signification",
          "Taper"
        ],
        "rows": [
          [
            "[ -f fichier ]",
            "Le fichier existe et est un fichier normal",
            "Déposer"
          ],
          [
            "[ -d rép ]",
            "Le répertoire existe",
            "Déposer"
          ],
          [
            "[ -e chemin ]",
            "Le chemin existe (n'importe quel type)",
            "Déposer"
          ],
          [
            "[ -r fichier ]",
            "Le fichier est lisible",
            "Autorisations"
          ],
          [
            "[ -x fichier ]",
            "Le fichier est exécutable",
            "Autorisations"
          ],
          [
            "[ -z \"$var\" ]",
            "La chaîne est vide",
            "Chaîne"
          ],
          [
            "[ \"$a\" = \"$b\" ]",
            "Cordes égales",
            "Chaîne"
          ],
          [
            "[ $a -eq $b ]",
            "Nombres égaux",
            "Nombre"
          ],
          [
            "[ $a -lt $b ]",
            "a < b (inférieur à)",
            "Nombre"
          ],
          [
            "[ $a -gt $b ]",
            "a > b (supérieur à)",
            "Nombre"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Boucles For et while",
        "prompt": "# Boucle For sur une liste\npour le fichier en *.txt ; faire\n    echo \"Processus : $fichier\"\n    wc -l \"$fichier\"\nfait\n\n# Boucle For avec plage numérique\npour je dans $(seq 1 10); faire\n    echo \"Itération $i\"\nfait\n\n# Boucle while\ncompteur=1\nwhile [ $counter -le 5 ]; faire\n    echo \"Compteur : $compteur\"\n    compteur=$((compteur + 1))\nfait",
        "output": ""
      },
      {
        "type": "story",
        "title": "Scénario : Script de sauvegarde automatique",
        "text": "Créez un script backup.sh qui : 1) Vérifie si le répertoire de sauvegarde existe (si -d), 2) Crée une archive tar.gz avec la date dans le nom, 3) Compte les anciennes sauvegardes et les supprime s'il y en a plus de 7 (pour + rm), 4) Enregistre le résultat. C’est le type d’automatisation que chaque administrateur système effectue quotidiennement !"
      }
    ]
  }
};
