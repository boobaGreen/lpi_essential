export const lessonContent = {
  "1-1": {
    "comic": {
      "title": "La naissance de Linux 🐧",
      "panels": [
        {
          "emoji": "🏛️",
          "text": "1969 — Unix, système d'exploitation révolutionnaire, naît dans les laboratoires d'AT&T..."
        },
        {
          "emoji": "👨‍💻",
          "text": "1991 — Un jeune étudiant finlandais, Linus Torvalds, commence à développer un noyau libre..."
        },
        {
          "emoji": "🐧",
          "text": "« Je crée un système d'exploitation gratuit, juste un passe-temps… » — Le post qui a tout changé !"
        },
        {
          "emoji": "🌍",
          "text": "Aujourd’hui Linux est partout : serveurs, cloud, smartphones (Android), IoT, supercalculateurs !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Familles de distribution",
        "items": [
          "Debian → Ubuntu, Menthe",
          "Chapeau rouge → RHEL, Fedora, CentOS",
          "SUSE → SLES, ouvertSUSE"
        ]
      },
      {
        "title": "Gestionnaires de paquets",
        "items": [
          "Debian : dpkg, apt (.deb)",
          "Red Hat : rpm, miam, dnf (.rpm)",
          "SUSE : rpm, zypper (.rpm)"
        ]
      },
      {
        "title": "Systèmes embarqués",
        "items": [
          "Android = noyau Linux modifié",
          "Framboise Pi + Raspbian",
          "Linux dans 90 % du cloud public"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /etc/os-release",
      "output": "NAME=\"Ubuntu\"\nVERSION=\"22.04 LTS\"\nID=ubuntu\nID_LIKE=debian"
    }
  },
  "1-2": {
    "comic": {
      "title": "Le monde des applications Open Source 📦",
      "panels": [
        {
          "emoji": "📝",
          "text": "LibreOffice : Writer, Calc, Impress — la suite gratuite qui défie Microsoft Office !"
        },
        {
          "emoji": "🌐",
          "text": "Firefox et Chromium : navigateurs web gratuits et puissants."
        },
        {
          "emoji": "🖥️",
          "text": "Apache et Nginx : les serveurs web qui font fonctionner Internet !"
        },
        {
          "emoji": "💻",
          "text": "C, Java, Python, Bash : les langages qui donnent vie à Linux."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Applications de bureau",
        "items": [
          "LibreOffice, GIMP, Blender, VLC, Audacity"
        ]
      },
      {
        "title": "Serveur d'applications",
        "items": [
          "Apache, Nginx (Internet)",
          "MariaDB, PostgreSQL (base de données)",
          "Samba, NFS (partage de fichiers)"
        ]
      },
      {
        "title": "Langues",
        "items": [
          "Compilé : C, Java",
          "Interprété : Python, Perl, JavaScript, Bash"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ recherche appropriée libreoffice",
      "output": "libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor"
    }
  },
  "1-3": {
    "comic": {
      "title": "Les 4 libertés du logiciel 🔓",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "Liberté 0 : utilisez le programme à n’importe quelle fin !"
        },
        {
          "emoji": "1️⃣",
          "text": "Liberté 1 : Etudier son fonctionnement et changer !"
        },
        {
          "emoji": "2️⃣",
          "text": "Liberté 2 : Redistribuez les copies aux autres !"
        },
        {
          "emoji": "3️⃣",
          "text": "Liberté 3 : Distribuez vos versions modifiées !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Licences copyleft",
        "items": [
          "GPL : le code dérivé doit rester GPL",
          "LGPL : permet la liaison propriétaire",
          "AGPL : étend la GPL au SaaS"
        ]
      },
      {
        "title": "Licences permissives",
        "items": [
          "MIT : Très court et indulgent",
          "BSD : similaire au MIT",
          "Apache 2.0 : délivrance de brevet"
        ]
      },
      {
        "title": "Entreprise Open Source",
        "items": [
          "Assistance (chapeau rouge)",
          "Double licence",
          "SaaS, Certifications"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tête -5 /usr/share/common-licenses/GPL-3",
      "output": "GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation"
    }
  },
  "1-4": {
    "comic": {
      "title": "Confidentialité et sécurité numérique 🔒",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "GNOME ou KDE ? Choisissez votre environnement de bureau !"
        },
        {
          "emoji": "🍪",
          "text": "Attention aux cookies tiers : ils vous suivent partout !"
        },
        {
          "emoji": "🔒",
          "text": "HTTPS = HTTP + TLS. Recherchez le cadenas dans votre navigateur !"
        },
        {
          "emoji": "🔑",
          "text": "GnuPG : Cryptographie asymétrique. Clé publique pour le cryptage, clé privée pour le déchiffrement."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Environnement de bureau",
        "items": [
          "GNOME (GTK) — Simplicité",
          "KDE (Qt) — Personnalisation",
          "XFCE, LXDE — Léger"
        ]
      },
      {
        "title": "Confidentialité",
        "items": [
          "Cookies tiers = suivi",
          "DNT ≠ garantie de confidentialité",
          "Navigation privée ≠ anonymat"
        ]
      },
      {
        "title": "Cryptographie",
        "items": [
          "TLS/SSL pour les connexions",
          "GnuPG pour les fichiers/e-mails",
          "dm-crypt/LUKS pour les disques"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gpg --list-clés",
      "output": "pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>"
    }
  },
  "2-1": {
    "comic": {
      "title": "Bienvenue chez Shell ! 💻",
      "panels": [
        {
          "emoji": "⌨️",
          "text": "Le shell est votre fenêtre sur le système. Écrivez des commandes, obtenez des résultats !"
        },
        {
          "emoji": "🐚",
          "text": "Bash = Bourne à nouveau Shell. Le shell le plus utilisé sous Linux !"
        },
        {
          "emoji": "💲",
          "text": "L'invite $ indique un utilisateur normal. Le # indique la racine – soyez prudent !"
        },
        {
          "emoji": "🔤",
          "text": "Citant : les « doubles » développent les variables $, les « simples » prennent tout au pied de la lettre."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Types de coques",
        "items": [
          "bash — par défaut",
          "zsh — avancé (macOS)",
          "poisson — convivial",
          "sh — Base POSIX"
        ]
      },
      {
        "title": "Commandes de base",
        "items": [
          "pwd — répertoire courant",
          "whoami — utilisateur actuel",
          "nom d'hôte - nom de la machine",
          "uname -a — informations système"
        ]
      },
      {
        "title": "Citation",
        "items": [
          "\"double\" → développe $VAR",
          "'singles' → littéral",
          "\\backslash → échappement simple"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo \"Bonjour, je m'appelle $(whoami) sur $(hostname)\"",
      "output": "Ciao, sono studente su linux-pc"
    }
  },
  "2-2": {
    "comic": {
      "title": "Variables : Mémoire Shell 🧠",
      "panels": [
        {
          "emoji": "📦",
          "text": "Les variables sont des conteneurs qui stockent des valeurs : NAME=\"John\""
        },
        {
          "emoji": "🌐",
          "text": "Les variables d'environnement sont globales. PATH indique au shell où chercher les commandes !"
        },
        {
          "emoji": "📤",
          "text": "export rend une variable locale accessible aux processus enfants."
        },
        {
          "emoji": "🔍",
          "text": "env affiche toutes les variables d'environnement. echo $HOME votre maison !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Variables locales",
        "items": [
          "NOM=\"valeur\" (pas d'espaces !)",
          "echo $NAME pour lire",
          "désactivez NOM pour supprimer"
        ]
      },
      {
        "title": "Variables d'environnement",
        "items": [
          "PATH - chemins de commande",
          "ACCUEIL — répertoire personnel",
          "UTILISATEUR — nom d'utilisateur",
          "LANG — langue du système"
        ]
      },
      {
        "title": "Persistance",
        "items": [
          "~/.bashrc — connexion interactive",
          "~/.profile — connexion initiale",
          "/etc/environnement — global"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ écho $CHEMIN",
      "output": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
  "2-3": {
    "comic": {
      "title": "Aide! L'homme et l'info 📚",
      "panels": [
        {
          "emoji": "📖",
          "text": "l'homme est ton meilleur ami ! man ls vous dit tout sur ls."
        },
        {
          "emoji": "🔢",
          "text": "Les sections du man : 1=Commandes utilisateur, 5=Fichier de configuration, 8=Commandes Admin."
        },
        {
          "emoji": "🔎",
          "text": "à propos des commandes de recherche par description : à propos de \"copier des fichiers\""
        },
        {
          "emoji": "📁",
          "text": "find recherche des fichiers dans le système de fichiers. la localisation est plus rapide mais utilise une base de données."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Documentation",
        "items": [
          "commande man - manuel complet",
          "informations sur la commande — format GNU",
          "Commande --help — aide courte",
          "à propos de mot-clé — recherche"
        ]
      },
      {
        "title": "Sections Homme",
        "items": [
          "1 — Commandes utilisateur",
          "5 — Formats de fichiers",
          "8 — Commandes d'administrateur système"
        ]
      },
      {
        "title": "Rechercher des fichiers",
        "items": [
          "rechercher / -nom \"*.txt\"",
          "rechercher / -type d -name journaux",
          "localiser le nom du fichier (base de données)",
          "quelle commande (dans le PATH)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$man -k \"copier les fichiers\"",
      "output": "cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool"
    }
  },
  "2-4": {
    "comic": {
      "title": "L'arborescence du système de fichiers 🌳",
      "panels": [
        {
          "emoji": "/",
          "text": "Tout commence à la racine /. L'arbre pousse vers le bas !"
        },
        {
          "emoji": "📂",
          "text": "/home — vos affaires personnelles. /etc — configuration du système."
        },
        {
          "emoji": "💾",
          "text": "/var — données variables (journal, courrier). /tmp — fichiers temporaires."
        },
        {
          "emoji": "⚙️",
          "text": "/bin et /sbin – commandes essentielles. /usr — programmes installés."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Répertoires importants",
        "items": [
          "/bin — commandes de base",
          "/etc —configuration",
          "/home — utilisateurs",
          "/var — données variables"
        ]
      },
      {
        "title": "Navigation",
        "items": [
          "cd /path — changer de direction",
          "ls -la — liste détaillée",
          "pwd - où sont-ils",
          ". (actuel) .. (père)"
        ]
      },
      {
        "title": "Gestion des fichiers",
        "items": [
          "cp, mv, rm — copier, déplacer, supprimer",
          "mkdir -p — créer des répertoires",
          "touch - créer un fichier vide",
          "Globulation : * ? [abc]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ls/",
      "output": "bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var"
    }
  },
  "3-1": {
    "comic": {
      "title": "Compressez et archivez ! 📦",
      "panels": [
        {
          "emoji": "🗜️",
          "text": "tar = archive sur bande. Regroupez plusieurs fichiers dans une seule archive !"
        },
        {
          "emoji": "💨",
          "text": "gzip → .gz (rapide). bzip2 → .bz2 (compresse davantage). xz → .xz (compresse mieux !)"
        },
        {
          "emoji": "📋",
          "text": "tar -czf = Créer + gzip + Fichier. Le trio magique !"
        },
        {
          "emoji": "📂",
          "text": "tar -xzf = extraire + gzip + Fichier. Décompressez tout !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Algorithmes",
        "items": [
          "gzip (.gz) – rapide, bon",
          "bzip2 (.bz2) — plus lent, mieux",
          "xz (.xz) — très lent, excellent"
        ]
      },
      {
        "title": "Commandes tar",
        "items": [
          "tar -czf arch.tar.gz rép/",
          "tar -cjf arch.tar.bz2 rép/",
          "tar -xzf arch.tar.gz",
          "tar -tf arch.tar.gz (liste)"
        ]
      },
      {
        "title": "Fichiers uniques",
        "items": [
          "fichier gzip → fichier.gz",
          "fichier gunzip.gz → fichier",
          "bzip2 / bunzip2",
          "xz / unxz"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tar -czf sauvegarde.tar.gz /home/user/docs/",
      "output": ""
    }
  },
  "3-2": {
    "comic": {
      "title": "Pipes et redirections : le flux de données 🔀",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "stdin (0) = entrée. stdout (1) = sortie. stderr (2) = erreurs."
        },
        {
          "emoji": "➡️",
          "text": "> écrit dans un fichier (écrase). >> se bloque à la fin."
        },
        {
          "emoji": "🔗",
          "text": "| (pipe) connecte la sortie d'une commande à l'entrée de la suivante !"
        },
        {
          "emoji": "🔇",
          "text": "2>/dev/null — envoie des erreurs dans le « trou noir » de Linux !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Descripteurs de fichiers",
        "items": [
          "0 = stdin (clavier)",
          "1 = sortie standard (écran)",
          "2 = stderr (erreurs)"
        ]
      },
      {
        "title": "Réorienter",
        "items": [
          "> fichier (écraser)",
          ">> fichier (ajouter)",
          "2> erreurs.log",
          "&> all.log (stdout+stderr)"
        ]
      },
      {
        "title": "Tuyaux et commandes",
        "items": [
          "cmd1 | cmd2 (tuyau)",
          "fichier tee (séparateur en T)",
          "xargs (stdin → arguments)",
          "cmd1 && cmd2 (si ok)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /var/log/syslog | erreur grep | toilettes -l",
      "output": "42"
    }
  },
  "3-3": {
    "comic": {
      "title": "Grep et les super-héros du texte 🦸",
      "panels": [
        {
          "emoji": "🔎",
          "text": "grep recherche des modèles dans le texte. Le détective en ligne de commande !"
        },
        {
          "emoji": "✂️",
          "text": "couper coupe les colonnes. trier trier. uniq supprime les doublons."
        },
        {
          "emoji": "📊",
          "text": "wc compte les lignes (-l), les mots (-w), les caractères (-c)."
        },
        {
          "emoji": "🌟",
          "text": "Regex : ^ début de ligne, $ fin, . n'importe lequel, * répéter, [abc] défini."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "grep",
        "items": [
          "fichier de modèles grep",
          "grep -i (insensible à la casse)",
          "grep -r (récursif)",
          "grep -v (correspondance inversée)"
        ]
      },
      {
        "title": "Manutention",
        "items": [
          "cut -d : -f1 (champ 1)",
          "trier -n (numérique)",
          "uniq -c (compte)",
          "tête/queue -n 5"
        ]
      },
      {
        "title": "Expression régulière de base",
        "items": [
          "^ début de ligne",
          "$ fin de ligne",
          ". n'importe quel caractère",
          "* zéro ou plus",
          "Plage [a-z]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep -i \"erreur\" /var/log/syslog | queue -5",
      "output": "Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting"
    }
  },
  "3-4": {
    "comic": {
      "title": "Scripts Bash : automatisez tout ! 🤖",
      "panels": [
        {
          "emoji": "📜",
          "text": "#!/bin/bash — le shebang! Il indique au système : \"Utilisez bash pour ce script !\""
        },
        {
          "emoji": "🔄",
          "text": "for, while, if/then/else — les constructions pour contrôler le flux."
        },
        {
          "emoji": "📥",
          "text": "$1 = premier argument, $# = combien, $@ = tous. La puissance des paramètres !"
        },
        {
          "emoji": "✅",
          "text": "sortie 0 = succès. sortie 1 = erreur. Chaque commande a un code de sortie !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Structure du script",
        "items": [
          "#!/bin/bash (shebang)",
          "chmod +x script.sh",
          "./script.sh à exécuter"
        ]
      },
      {
        "title": "Variables spéciales",
        "items": [
          "$0 — nom du script",
          "1 $, 2 $... — arguments",
          "$# — nombre d'arguments",
          "$? - code de sortie dernière cmd"
        ]
      },
      {
        "title": "Constructions",
        "items": [
          "si [ cond ]; alors...fi",
          "pour moi dans la liste ; faire... c'est fait",
          "tandis que [ cond ]; faire... c'est fait",
          "cas $var dans le modèle)...esac"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ chat bonjour.sh",
      "output": "#!/bin/bash\necho \"Ciao, $1!\"\necho \"Oggi è $(date)\"\nexit 0"
    }
  },
  "4-1": {
    "comic": {
      "title": "Où fonctionne Linux ? Partout! 🌐",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "Bureau : Ubuntu, Fedora, Mint — Linux pour tous !"
        },
        {
          "emoji": "🏢",
          "text": "Entreprise : RHEL, SLES — support, certifications, SLA !"
        },
        {
          "emoji": "☁️",
          "text": "Cloud : 90 % des serveurs Web fonctionnent sous Linux. AWS, Azure, GCP adorent ça !"
        },
        {
          "emoji": "📱",
          "text": "Mobile et IoT : Android = Linux ! Téléviseurs intelligents, voitures, drones... tous sous Linux !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Ordinateur de bureau ou serveur",
        "items": [
          "Bureau : interface graphique, multimédia",
          "Serveur : sans tête, services 24h/24 et 7j/7",
          "Entreprise : prise en charge LTS"
        ]
      },
      {
        "title": "Nuage et virtualisation",
        "items": [
          "KVM/QEMU — virtualisation",
          "Docker — conteneurs",
          "Kubernetes – orchestration",
          "IaaS, PaaS, SaaS"
        ]
      },
      {
        "title": "Certifications",
        "items": [
          "LPI Linux : les essentiels",
          "LPIC-1 (base d'administration)",
          "LPIC-2 (administrateur avancé)",
          "RHCSA, RHCE (Red Hat)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ unname -a",
      "output": "Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
    }
  },
  "4-2": {
    "comic": {
      "title": "Matériel : Fer sous Linux ⚙️",
      "panels": [
        {
          "emoji": "🧠",
          "text": "CPU, RAM, disque, carte réseau — Linux voit tout dans /proc et /sys !"
        },
        {
          "emoji": "💽",
          "text": "HDD = mécanique, lent. SSD = flash, rapide. NVMe = super rapide !"
        },
        {
          "emoji": "🔒",
          "text": "RAID 0 = vitesse. RAID 1 = sécurité. RAID 5 = équilibre."
        },
        {
          "emoji": "🖨️",
          "text": "Périphériques hot-plug : USB, Thunderbolt. Le noyau les reconnaît immédiatement !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Composants",
        "items": [
          "Processeur : lscpu",
          "RAM : libre -h",
          "Disque : lsblk, df -h",
          "PCI : lspci, USB : lsusb"
        ]
      },
      {
        "title": "Stockage",
        "items": [
          "HDD – plateaux magnétiques",
          "SSD-mémoire flash NAND",
          "NVMe – bus PCIe direct",
          "RAID — redondance/performance"
        ]
      },
      {
        "title": "Niveaux RAID",
        "items": [
          "RAID 0 – bande (pas de sauvegarde)",
          "RAID 1 — miroir (copie)",
          "RAID 5 – bande + parité",
          "RAID 10 — miroir + bande"
        ]
      }
    ],
    "terminal": {
      "prompt": "$lsblk",
      "output": "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /"
    }
  },
  "4-3": {
    "comic": {
      "title": "Noyaux, processus et démons 👻",
      "panels": [
        {
          "emoji": "🎯",
          "text": "Le noyau est le cœur de Linux. Gère le CPU, la RAM, les E/S et le réseau."
        },
        {
          "emoji": "🌱",
          "text": "systemd = PID 1, le parent de tous les processus. Gère le démarrage !"
        },
        {
          "emoji": "👻",
          "text": "Démons = processus en arrière-plan. Se terminant par \"d\" : sshd, httpd, crond."
        },
        {
          "emoji": "💀",
          "text": "kill -9 PID = l'arme ultime ! Terminez tout processus."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Démarrage et noyau",
        "items": [
          "BIOS/UEFI → chargeur de démarrage",
          "GRUB → charger le noyau",
          "Noyau → monter la racine",
          "systemd → démarrer les services"
        ]
      },
      {
        "title": "Processus",
        "items": [
          "ps aux — liste des processus",
          "top/htop — moniteur en temps réel",
          "bg/fg — arrière-plan/premier plan",
          "& — démarre en arrière-plan"
        ]
      },
      {
        "title": "Signaux",
        "items": [
          "SIGTERM (15) — se termine proprement",
          "SIGKILL (9) – finition forcée",
          "SIGHUP (1) — recharger la configuration",
          "SIGSTOP (19) — suspendre"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ps aux | tête -5",
      "output": "USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox"
    }
  },
  "4-4": {
    "comic": {
      "title": "Réseautage : Linux sur le Net 🌐",
      "panels": [
        {
          "emoji": "📡",
          "text": "IP, masque de sous-réseau, passerelle — les coordonnées de votre machine sur le réseau !"
        },
        {
          "emoji": "🔤",
          "text": "DNS traduit les noms en adresses IP. google.com → 142.250.180.14"
        },
        {
          "emoji": "🔐",
          "text": "SSH (port 22) = accès distant sécurisé. La porte d'entrée de l'administrateur système !"
        },
        {
          "emoji": "🌐",
          "text": "HTTP(80), HTTPS(443), FTP(21), SMTP(25) — les ports qui font fonctionner Internet !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Configuration",
        "items": [
          "adresse IP — afficher l'IP",
          "route IP — afficher l'itinéraire",
          "/etc/resolv.conf — DNS",
          "/etc/hosts — noms locaux"
        ]
      },
      {
        "title": "IP privées",
        "items": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "IPv6 : fc00::/7 (ULA)"
        ]
      },
      {
        "title": "Portes communes",
        "items": [
          "22 — SSH",
          "80 — HTTP",
          "443 — HTTPS",
          "53 —DNS"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ adresse IP afficher eth0",
      "output": "inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link"
    }
  },
  "5-1": {
    "comic": {
      "title": "Root : le super-héros Linux 🦸",
      "panels": [
        {
          "emoji": "👑",
          "text": "root = UID 0. Peut TOUT faire. Avec de grands pouvoirs, de grandes responsabilités !"
        },
        {
          "emoji": "🔑",
          "text": "sudo = \"Super utilisateur DO\". Exécutez une commande en tant que root avec VOTRE mot de passe."
        },
        {
          "emoji": "⚠️",
          "text": "Ne travaillez jamais en tant que root tout le temps ! Utilisez sudo uniquement en cas de besoin."
        },
        {
          "emoji": "📋",
          "text": "/etc/sudoers définit qui peut utiliser sudo et pour quelles commandes."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Utilisateurs",
        "items": [
          "root = UID 0 (superutilisateur)",
          "Utilisateurs normaux : UID ≥ 1000",
          "Utilisateurs du système : UID 1-999",
          "personne = UID 65534"
        ]
      },
      {
        "title": "Commandes",
        "items": [
          "up - (changer d'utilisateur)",
          "Commande sudo (exécutée en tant que root)",
          "whoami (qui suis-je ?)",
          "identifiant (UID, GID, groupes)"
        ]
      },
      {
        "title": "Sécurité",
        "items": [
          "Principe du moindre privilège",
          "sudo > su (traçable)",
          "/etc/sudoers (visudo)",
          "Journal : /var/log/auth.log"
        ]
      }
    ],
    "terminal": {
      "prompt": "$id",
      "output": "uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)"
    }
  },
  "5-2": {
    "comic": {
      "title": "Utilisateurs et groupes : le registre Linux 👥",
      "panels": [
        {
          "emoji": "📒",
          "text": "/etc/passwd — le registre de tous les utilisateurs. Nom, UID, domicile, shell."
        },
        {
          "emoji": "🔒",
          "text": "/etc/shadow — mots de passe cryptés. Seul root peut le lire !"
        },
        {
          "emoji": "👥",
          "text": "/etc/group — les groupes. Chaque utilisateur possède un groupe principal et peut faire partie d'autres."
        },
        {
          "emoji": "🛠️",
          "text": "useradd, usermod, userdel — les outils pour gérer le registre !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Fichier clé",
        "items": [
          "/etc/passwd — informations utilisateur",
          "/etc/shadow — mot de passe haché",
          "/etc/group — groupes",
          "/etc/skel — page d'accueil du modèle"
        ]
      },
      {
        "title": "Gestion des utilisateurs",
        "items": [
          "useradd -m utilisateur (créer)",
          "usermod -aG groupe d'utilisateurs",
          "userdel -r utilisateur (supprimer)",
          "mot de passe utilisateur (mot de passe)"
        ]
      },
      {
        "title": "Format du mot de passe",
        "items": [
          "utilisateur: x: UID: GID: info: home: shell",
          "x → mot de passe fantôme",
          "UID 0 → racine",
          "/sbin/nologin → pas de connexion"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep étudiant /etc/passwd",
      "output": "studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash"
    }
  },
  "5-3": {
    "comic": {
      "title": "Autorisations : qui peut faire quoi ? 🔐",
      "panels": [
        {
          "emoji": "📊",
          "text": "r=lire(4) w=écrire(2) x=exécuter(1). Trois ensembles : Propriétaire, Groupe, Autres."
        },
        {
          "emoji": "🔢",
          "text": "chmod 755 = rwxr-xr-x. Le propriétaire fait tout, les autres lisent."
        },
        {
          "emoji": "✏️",
          "text": "chmod u+x = ajouter l'exécution au propriétaire. Notation symbolique !"
        },
        {
          "emoji": "⚡",
          "text": "SUID, SGID, Sticky Bit — autorisations spéciales pour des cas particuliers !"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Autorisations de base",
        "items": [
          "r (lire) = 4",
          "w (écrire) = 2",
          "x (exécuter) = 1",
          "--- = 0, rwx = 7"
        ]
      },
      {
        "title": "Commandes",
        "items": [
          "fichier chmod 644 (octal)",
          "fichier chmod u+x (symbolique)",
          "utilisateur chown:fichier de groupe",
          "groupe de fichiers chgrp"
        ]
      },
      {
        "title": "Offres spéciales",
        "items": [
          "SUID (4xxx) – exécuter en tant que propriétaire",
          "SGID (2xxx) – hériter du groupe",
          "Sticky (1xxx) — protège /tmp",
          "umask 022 — par défaut 755"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ls -la /etc/passwd /tmp",
      "output": "-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp"
    }
  },
  "5-4": {
    "comic": {
      "title": "Lien : Raccourcis dans le système de fichiers 🔗",
      "panels": [
        {
          "emoji": "🔗",
          "text": "Lien physique : deux noms pour le même fichier (inode). Indiscernable!"
        },
        {
          "emoji": "➡️",
          "text": "Lien symbolique : un raccourci. Pointe vers un chemin, pas un inode."
        },
        {
          "emoji": "💔",
          "text": "Si vous supprimez la cible d'un lien symbolique, elle devient \"cassé\". Le lien physique survit !"
        },
        {
          "emoji": "📁",
          "text": "Les liens symboliques peuvent traverser les systèmes de fichiers. Les liens physiques ne le sont pas."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Liens physiques",
        "items": [
          "Lien physique du fichier In",
          "Même inode",
          "Il ne traverse pas les systèmes de fichiers",
          "Aucun lien vers l'annuaire"
        ]
      },
      {
        "title": "Liens symboliques",
        "items": [
          "ln -s lien symbolique cible",
          "Inode différent",
          "Traverser le système de fichiers",
          "Peut lier des répertoires"
        ]
      },
      {
        "title": "Comparaison",
        "items": [
          "Difficile : robuste, limité",
          "Sym : souple, fragile",
          "ls -li afficher l'inode",
          "readlink afficher la cible"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ln -s /etc/passwd lien_passwd && ls -l lien_passwd",
      "output": "lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd"
    }
  }
};
