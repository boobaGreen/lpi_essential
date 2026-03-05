export const topic5Extended = {
  "5-1": {
    "title": "Sécurité et types d'utilisateurs",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "👑",
        "text": "L'utilisateur root - Le superutilisateur"
      },
      {
        "type": "paragraph",
        "text": "L'utilisateur root (UID 0) dispose d'un accès illimité au système. Il peut lire, écrire et supprimer n'importe quel fichier, tuer n'importe quel processus, modifier n'importe quelle configuration. Pour cette raison, vous ne devriez jamais travailler en tant que root par défaut."
      },
      {
        "type": "table",
        "headers": [
          "Type d'utilisateur",
          "UID",
          "Portée",
          "Se connecter?"
        ],
        "rows": [
          [
            "racine",
            "0",
            "Administration complète du système",
            "Seulement lorsque cela est nécessaire"
          ],
          [
            "Utilisateurs normaux",
            "≥ 1000",
            "Utilisateurs humains avec des comptes personnels",
            "Oui, avec sa propre coque"
          ],
          [
            "Utilisateurs du système",
            "1-999",
            "Services et démons (www-data, mysql)",
            "Non (/sbin/nologin)"
          ],
          [
            "personne",
            "65534",
            "Processus de moindre privilège",
            "Non"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "su vs sudo - Deux approches de la sécurité"
      },
      {
        "type": "comparison",
        "left": {
          "title": "activé (Changer d'utilisateur)",
          "items": [
            "Changer complètement d'utilisateur",
            "Nécessite un mot de passe ROOT",
            "su - = connexion complète (environnement root)",
            "Pas de journal de commandes détaillé",
            "Moins sécurisé : vous devez partager les mots de passe root"
          ]
        },
        "right": {
          "title": "sudo (super utilisateur DO)",
          "items": [
            "Exécutez UNE commande en tant que root",
            "Nécessite VOTRE mot de passe",
            "Chaque commande est enregistrée",
            "Contrôle granulaire (qui peut faire quoi)",
            "Plus sécurisé : personne ne connaît le mot de passe root"
          ]
        }
      },
      {
        "type": "code",
        "title": "su contre sudo en gros",
        "prompt": "# su : devenez root (demande le mot de passe ROOT)\n$ en hausse -\nMot de passe : [mot de passe root]\n# whoami\nracine\n\n# sudo : exécute une commande en tant que root (demande VOTRE mot de passe)\n$ sudo apt mise à jour\n[sudo] mot de passe pour Mario : [mot de passe de Mario]\n\n# Voir qui peut utiliser sudo\n$ sudo -l # Vos autorisations\n$ cat /etc/sudoers # Fichier de configuration (utilisez visudo !)",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Utilisez toujours Visudo !",
        "content": "/etc/sudoers doit être modifié UNIQUEMENT avec la commande visudo, qui vérifie la syntaxe avant de l'enregistrer. Une erreur dans sudoers peut bloquer l’accès au système !"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛡️",
        "text": "Principe du moindre privilège"
      },
      {
        "type": "paragraph",
        "text": "Le principe du moindre privilège est la règle d'or de la sécurité : chaque utilisateur et processus doit disposer UNIQUEMENT des autorisations strictement nécessaires pour mener à bien sa tâche. Rien de plus."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Non lavorare come root",
            "desc": "Usa sudo solo quando serve, poi torna al tuo utente"
          },
          {
            "term": "Servizi dedicati",
            "desc": "Ogni servizio gira con il proprio utente (www-data, mysql)"
          },
          {
            "term": "sudo granulare",
            "desc": "In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo"
          },
          {
            "term": "Audit trail",
            "desc": "sudo logga tutto in /var/log/auth.log — tracciabilità completa"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI pose des questions sur la différence entre su et sudo, le principe du moindre privilège et l'endroit où se trouvent les journaux d'authentification (/var/log/auth.log ou /var/log/secure)."
      }
    ]
  },
  "5-2": {
    "title": "Gestion des utilisateurs et des groupes",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📒",
        "text": "Fichiers de registre Linux"
      },
      {
        "type": "table",
        "headers": [
          "Déposer",
          "Propriétaire",
          "Autorisations",
          "Contenu"
        ],
        "rows": [
          [
            "/etc/mot de passe",
            "racine",
            "644 (lisible par tous)",
            "Informations utilisateur : nom, UID, GID, domicile, shell"
          ],
          [
            "/etc/ombre",
            "racine",
            "640 (racine uniquement)",
            "Mots de passe et politiques cryptés"
          ],
          [
            "/etc/groupe",
            "racine",
            "644",
            "Groupes et membres supplémentaires"
          ],
          [
            "/etc/gshadow",
            "racine",
            "640",
            "Mots de passe de groupe (rares)"
          ],
          [
            "/etc/skel",
            "racine",
            "755",
            "Modèle pour les nouveaux répertoires personnels"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Format de /etc/passwd"
      },
      {
        "type": "code",
        "title": "Anatomie d'une ligne /etc/passwd",
        "prompt": "mario:x:1000:1000:Mario Rossi:/home/mario:/bin/bash\n  │ │ │ │ │ │ │\n  │ │ │ │ │ │ └── Shell de connexion\n  │ │ │ │ │ └── Répertoire personnel\n  │ │ │ │ └── Champ GECOS (informations utilisateur)\n  │ │ │ └── GID (ID de groupe principal)\n  │ │ └── UID (ID utilisateur)\n  │ └── \"x\" = mot de passe dans /etc/shadow\n  └── Nom d'utilisateur",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Pourquoi \"x\" dans le mot de passe ?",
        "content": "Dans le passé, les mots de passe étaient dans /etc/passwd (lisible par tout le monde !). Pour des raisons de sécurité, ils ont été déplacés vers /etc/shadow (lisible uniquement par root). Le « x » indique que le mot de passe se trouve dans le fichier fantôme."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Commandes pour gérer les utilisateurs et les groupes"
      },
      {
        "type": "table",
        "headers": [
          "Commande",
          "Fonction",
          "Options importantes"
        ],
        "rows": [
          [
            "useradd -m utilisateur",
            "Créer un utilisateur avec la maison",
            "-m créer une maison, -s shell, -G groupes"
          ],
          [
            "usermod -aG utilisateur grp",
            "Modifier l'utilisateur",
            "-aG Ajouter un groupe, -L verrouiller, -U déverrouiller"
          ],
          [
            "userdel -r utilisateur",
            "Supprimer l'utilisateur + la maison",
            "-r supprime également le répertoire personnel"
          ],
          [
            "mot de passe utilisateur",
            "Changer le mot de passe",
            "-l verrouiller, -u déverrouiller, -e forcer le changement"
          ],
          [
            "groupeajouter un nom",
            "Créer un groupe",
            "-g GID spécifique"
          ],
          [
            "groupe du nom",
            "Supprimer le groupe",
            "Uniquement si aucun utilisateur ne l'a comme utilisateur principal"
          ],
          [
            "groupes d'utilisateurs",
            "Afficher les groupes d'utilisateurs",
            "Liste des groupes de membres"
          ],
          [
            "ID de l'utilisateur",
            "Afficher l'UID/GID/les groupes",
            "Informations complètes sur l'utilisateur"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Workflow : créer un utilisateur complet",
        "prompt": "#1. Créer un utilisateur avec le répertoire personnel\n$ sudo useradd -m -s /bin/bash -c \"Mario Rossi\" mario\n\n#2. Définissez votre mot de passe\n$ sudo mot de passe mario\n\n#3. Ajouter à des groupes supplémentaires\n$ sudo usermod -aG sudo, docker mario\n\n#4. Vérifier\n$ identifiant Mario\nuid=1001(mario) gid=1001(mario) groupes=1001(mario),27(sudo),999(docker)\n\n$ ls -la /home/mario/\n# Contient les fichiers copiés depuis /etc/skel/",
        "output": ""
      }
    ]
  },
  "5-3": {
    "title": "Autorisations de fichiers",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Le système d'autorisations Unix"
      },
      {
        "type": "paragraph",
        "text": "Chaque fichier et répertoire sous Linux dispose de trois ensembles d'autorisations (propriétaire, groupe, autres) et de trois types d'autorisations (lecture, écriture, exécution). Cela crée un tableau de 9 autorisations."
      },
      {
        "type": "table",
        "headers": [
          "Permis",
          "Au dossier",
          "Sur les annuaires",
          "Valeur octale"
        ],
        "rows": [
          [
            "r (lire)",
            "Lire le contenu",
            "Liste des fichiers (ls)",
            "4"
          ],
          [
            "w (écrire)",
            "Modifier le contenu",
            "Créer/supprimer des fichiers",
            "2"
          ],
          [
            "x (exécuter)",
            "Exécuter comme prévu",
            "Entrez (cd) le répertoire",
            "1"
          ],
          [
            "- (Personne)",
            "Pas d'accès",
            "Pas d'accès",
            "0"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Lire les autorisations avec ls -l",
        "prompt": "$ ls -l /etc/passwd\n-rw-r--r-- 1 racine racine 2847 5 mars /etc/passwd\n│├──┤├──┤├──┤\n││ │ │\n││ │ └── autres : r-- (lecture seule)\n││ └── groupe : r-- (lecture seule)\n│└── propriétaire : rw- (lecture + écriture)\n└── tapez : - = fichier (d = répertoire, l = lien)",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "Notation octale ou symbolique"
      },
      {
        "type": "table",
        "headers": [
          "Octal",
          "Symbolique",
          "Signification",
          "Utilisation typique"
        ],
        "rows": [
          [
            "755",
            "rwxr-xr-x",
            "Le propriétaire fait tout, les autres lisent/exécutent",
            "Scripts, répertoires"
          ],
          [
            "644",
            "rw-r--r--",
            "Le propriétaire lit/écrit, les autres lisent uniquement",
            "Fichier texte, configuration"
          ],
          [
            "700",
            "rwx------",
            "Seul le propriétaire y a accès",
            "Fichiers privés, clés SSH"
          ],
          [
            "600",
            "rw-------",
            "Seul le propriétaire lit/écrit",
            "Fichiers secrets"
          ],
          [
            "777",
            "rwxrwxrwx",
            "Tout le monde peut tout faire",
            "⚠️ NE JAMAIS utiliser en production !"
          ],
          [
            "750",
            "rwxr-x ---",
            "Le propriétaire + le groupe lisent, les autres ne le font pas",
            "Répertoires partagés"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚡",
        "text": "Permis spéciaux"
      },
      {
        "type": "table",
        "headers": [
          "Permis",
          "Octal",
          "Au dossier",
          "Sur les annuaires",
          "Exemple"
        ],
        "rows": [
          [
            "SUID",
            "4xxx",
            "Exécuter avec les autorisations du propriétaire",
            "—",
            "/usr/bin/passwd (SUID racine)"
          ],
          [
            "SGID",
            "2xxx",
            "Exécuter avec les autorisations de groupe",
            "Les nouveaux fichiers héritent du groupe",
            "Répertoires de projets partagés"
          ],
          [
            "Morceaux collants",
            "1xxx",
            "—",
            "Seul le propriétaire peut annuler",
            "/tmp (1777 autorisations)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen demande : ls -l affiche les autorisations au format symbolique (rwxr-xr-x). chmod utilise octal (755) ou symbolique (u+x). umask 022 produit 755 autorisations pour les répertoires et 644 autorisations pour les fichiers."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎭",
        "text": "umask — Le masque des autorisations"
      },
      {
        "type": "paragraph",
        "text": "umask définit les autorisations qui sont SUPPRIMÉES lors de la création d'un nouveau fichier ou répertoire. La valeur par défaut pour les utilisateurs normaux est 022."
      },
      {
        "type": "table",
        "headers": [
          "umask",
          "Autorisations de fichiers (masque 666)",
          "Autorisations de répertoire (masque 777)"
        ],
        "rows": [
          [
            "022",
            "644 (rw-r--r--)",
            "755 (rwxr-xr-x)"
          ],
          [
            "077",
            "600 (rw-------)",
            "700 (rwx------)"
          ],
          [
            "002",
            "664 (rw-rw-r--)",
            "775 (rwxrwxr-x)"
          ]
        ]
      }
    ]
  },
  "5-4": {
    "title": "Fichiers et liens spéciaux",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Lien physique vs lien symbolique"
      },
      {
        "type": "paragraph",
        "text": "Les liens sont des « raccourcis » dans le système de fichiers. Comprendre la différence entre les liens physiques et les liens symboliques est essentiel pour l'examen LPI et pour le travail quotidien avec Linux."
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔗 Lien dur",
          "items": [
            "Pointez directement vers l'inode",
            "Impossible à distinguer de l'original",
            "Le fichier survit à la suppression de l'original",
            "Il NE PEUT PAS traverser les systèmes de fichiers",
            "Il NE PEUT PAS lier des répertoires",
            "Même inode, nombre de liens +1",
            "Lien physique du fichier In"
          ]
        },
        "right": {
          "title": "➡️ Lien symbolique (Lien symbolique)",
          "items": [
            "Pointe vers un PATH (nom du fichier)",
            "C'est un fichier spécial (tapez \"l\")",
            "Il devient \"cassé\" si la cible est supprimée",
            "PEUT traverser les systèmes de fichiers",
            "Répertoires de liaison CAN",
            "Inode différent, taille = longueur du chemin",
            "ln -s lien symbolique cible"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💡",
        "text": "Que sont les inodes ?"
      },
      {
        "type": "paragraph",
        "text": "Un inode est une structure de données de système de fichiers qui contient des informations sur un fichier : autorisations, propriétaire, taille, horodatage, blocs de données. Le fichier NOM n'est pas dans l'inode — il se trouve dans le répertoire pointant vers l'inode. C'est pourquoi plusieurs noms (liens physiques) peuvent exister pour le même inode."
      },
      {
        "type": "diagram",
        "title": "Structure des inodes et des liens",
        "boxes": [
          {
            "label": "Directory",
            "color": "#3b82f6",
            "children": [
              "file.txt → inode 42",
              "hardlink.txt → inode 42",
              "symlink.txt → \"file.txt\""
            ]
          },
          {
            "label": "Inode 42",
            "color": "#10b981",
            "children": [
              "Permessi: rw-r--r--",
              "Owner: mario",
              "Size: 1024 bytes",
              "Link count: 2"
            ]
          },
          {
            "label": "Blocchi Dati",
            "color": "#f59e0b",
            "children": [
              "Block 100",
              "Block 101",
              "(contenuto effettivo)"
            ]
          }
        ]
      },
      {
        "type": "code",
        "title": "Travailler avec des liens",
        "prompt": "# Créer un lien physique\n$ ln original.txt lien dur.txt\n$ ls -li # -i affiche le numéro d'inode\n42 -rw-r--r-- 2 mario mario 1024 original.txt\n42 -rw-r--r-- 2 mario mario 1024 hardlink.txt\n# Même inode (42) ! Nombre de liens = 2\n\n# Créer un lien symbolique\n$ ln -s /etc/passwd lien_passwd\n$ ls -l lien_passwd\nlrwxrwxrwx 1 mario mario 11 link_passwd -> /etc/passwd\n# Inode différent, taille = 11 (longueur \"/etc/passwd\")\n\n# Trouver la cible d'un lien symbolique\n$ readlink lien_passwd\n/etc/mot de passe\n\n# Trouver tous les liens symboliques brisés\n$ trouver /home -xtype l",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📁",
        "text": "Fichiers temporaires"
      },
      {
        "type": "table",
        "headers": [
          "Annuaires",
          "Portée",
          "Persistance",
          "Remarques"
        ],
        "rows": [
          [
            "/tmp",
            "Fichiers temporaires pour tout le monde",
            "Effacé au redémarrage",
            "Bit collant : seul le propriétaire peut supprimer ses fichiers"
          ],
          [
            "/var/tmp",
            "Fichiers temporaires persistants",
            "Ils survivent au redémarrage",
            "Pour les données nécessaires entre les redémarrages"
          ],
          [
            "~/.cache",
            "Cache utilisateur",
            "Persistant",
            "Cache du navigateur, applications"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen demande : Lien physique = même inode, ne traverse pas le système de fichiers, pas de répertoire. Lien symbolique = inode différent, traverse les systèmes de fichiers, peut lier des répertoires, peut devenir \"cassé\". ln -s crée un lien symbolique, ln sans indicateur crée un lien physique."
      }
    ]
  }
};
