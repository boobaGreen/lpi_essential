export const topic1Extended = {
  "1-1": {
    "title": "Évolution de Linux et des systèmes d'exploitation",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏛️",
        "text": "Depuis les origines : Unix et la révolution"
      },
      {
        "type": "timeline",
        "events": [
          {
            "year": "1969",
            "title": "Unix est né",
            "desc": "Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi."
          },
          {
            "year": "1983",
            "title": "Projet GNU",
            "desc": "Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985."
          },
          {
            "year": "1987",
            "title": "Minix",
            "desc": "Andrew Tanenbaum crea Minix per scopi didattici. Sarà l'ispirazione diretta per Linus Torvalds."
          },
          {
            "year": "1991",
            "title": "Linux !",
            "desc": "Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: \"Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU\". Nasce il kernel Linux 0.01."
          },
          {
            "year": "1992",
            "title": "Licence GPL",
            "desc": "Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero."
          },
          {
            "year": "2004",
            "title": "Ubuntu",
            "desc": "Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti."
          },
          {
            "year": "Oggi",
            "title": "Linux est partout",
            "desc": "Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo."
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Linux contre GNU/Linux",
        "content": "Techniquement, \"Linux\" n'est que le noyau. Le système complet est appelé GNU/Linux car il inclut les utilitaires GNU (gcc, bash, coreutils). Cependant, dans l'usage courant, « Linux » désigne l'ensemble du système d'exploitation."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Les familles de distribution"
      },
      {
        "type": "paragraph",
        "text": "Une distribution Linux est un système complet composé de : noyau Linux + utilitaires GNU + gestionnaire de packages + logiciels sélectionnés + configuration par défaut. Il existe des centaines de distributions, organisées en « familles » basées sur la lignée et le gestionnaire de packages."
      },
      {
        "type": "diagram",
        "title": "Arbre généalogique",
        "boxes": [
          {
            "label": "Debian",
            "color": "#e11d48",
            "children": [
              "Ubuntu",
              "Linux Mint",
              "Kali Linux",
              "Raspbian"
            ]
          },
          {
            "label": "Red Hat",
            "color": "#f59e0b",
            "children": [
              "RHEL",
              "Fedora",
              "CentOS Stream",
              "Rocky Linux"
            ]
          },
          {
            "label": "SUSE",
            "color": "#10b981",
            "children": [
              "SLES",
              "openSUSE Leap",
              "openSUSE Tumbleweed"
            ]
          },
          {
            "label": "Indipendenti",
            "color": "#8b5cf6",
            "children": [
              "Arch Linux",
              "Gentoo",
              "Slackware"
            ]
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Distribution",
          "Basique",
          "Forfaits",
          "Libérer",
          "Utilisation typique"
        ],
        "rows": [
          [
            "Ubuntu",
            "Debian",
            "apt/.deb",
            "Fixe (6 mois)",
            "Ordinateur de bureau, cloud, serveur"
          ],
          [
            "Feutre",
            "Chapeau rouge",
            "dnf/.rpm",
            "Fixe (6 mois)",
            "Développement, Bureau"
          ],
          [
            "RHEL",
            "Chapeau rouge",
            "miam/dnf / .rpm",
            "LTS (10 ans)",
            "Entreprise, Production"
          ],
          [
            "ArchLinux",
            "Indépendant",
            "Pacman",
            "Version continue",
            "Utilisateurs expérimentés"
          ],
          [
            "ouvertSUSE",
            "SUSE",
            "zypper / .rpm",
            "Mixte",
            "Ordinateur de bureau, entreprise"
          ],
          [
            "Debian",
            "Original",
            "apt/.deb",
            "Fixe (~2 ans)",
            "Serveur, Stabilité"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "Lors de l'examen LPI, il vous sera demandé de reconnaître les familles de distribution, leurs gestionnaires de packages (.deb vs .rpm) et les différences entre la version fixe (Ubuntu) et la version continue (Arch)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📱",
        "text": "Linux dans le monde de l'embarqué et du cloud"
      },
      {
        "type": "paragraph",
        "text": "Linux n'est pas réservé aux serveurs et aux ordinateurs de bureau. Le noyau Linux est le cœur de milliards d'appareils : les smartphones Android, les téléviseurs intelligents, les routeurs, les systèmes d'infodivertissement automobiles, les appareils IoT, les drones et même le rover Perseverance sur Mars utilise un processeur avec Linux !"
      },
      {
        "type": "table",
        "headers": [
          "Secteur",
          "Exemple",
          "Pourquoi Linux ?"
        ],
        "rows": [
          [
            "Téléphones intelligents",
            "Android (plus de 3 milliards d'appareils)",
            "Noyau modifiable, licence gratuite"
          ],
          [
            "Nuage",
            "AWS, Azure, GCP",
            "Plus de 90 % des charges de travail cloud utilisent Linux"
          ],
          [
            "Supercalculateurs",
            "TOP500",
            "100% des supercalculateurs du classement"
          ],
          [
            "IdO",
            "Raspberry Pi, maison intelligente",
            "Léger, personnalisable, gratuit"
          ],
          [
            "Automobile",
            "Tesla, Audi",
            "En temps réel, fiable, personnalisable"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Scénario : Pourquoi le Cloud aime Linux",
        "text": "Imaginez que vous êtes le CTO d'une startup. Vous devez choisir un système d'exploitation pour 100 serveurs dans le cloud. Windows Server coûte environ 500 $/serveur/an en licences. Avec Linux ? Aucun coût de licence, un contrôle total, une énorme communauté d'assistance et vous pouvez tout automatiser avec des scripts Bash. C'est pourquoi 90 % du cloud utilise Linux."
      }
    ]
  },
  "1-2": {
    "title": "Applications libres",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Logiciel Open Source pour tous les besoins"
      },
      {
        "type": "paragraph",
        "text": "Le monde open source offre des alternatives gratuites et puissantes à presque tous les logiciels commerciaux. Connaître ces applications est essentiel pour l'examen LPI et pour la vie professionnelle avec Linux."
      },
      {
        "type": "table",
        "headers": [
          "Catégorie",
          "Source ouverte",
          "Équivalent propriétaire"
        ],
        "rows": [
          [
            "Suites bureautiques",
            "LibreOffice",
            "Microsoft Office"
          ],
          [
            "Navigateurs Web",
            "Firefox, Chrome",
            "Chrome, Bord, Safari"
          ],
          [
            "Éditeur d'images",
            "Gimp",
            "Adobe Photoshop"
          ],
          [
            "modélisation 3D",
            "Mixer",
            "Maya, 3ds Max"
          ],
          [
            "Éditeur vidéo",
            "Kdenlive, OpenShot",
            "Adobe Première"
          ],
          [
            "Éditeur audio",
            "Audace",
            "AdobeAuditions"
          ],
          [
            "Client de messagerie",
            "Oiseau-tonnerre",
            "Perspectives"
          ],
          [
            "Graphiques vectoriels",
            "Paysage d'encre",
            "Adobe Illustrator"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "Applications serveur"
      },
      {
        "type": "paragraph",
        "text": "Linux domine le monde des serveurs. Les logiciels serveur open source gèrent la majorité du trafic Internet mondial."
      },
      {
        "type": "table",
        "headers": [
          "Fonction",
          "Logiciel",
          "Description"
        ],
        "rows": [
          [
            "Serveur Web",
            "Serveur HTTP Apache",
            "Le serveur Web le plus utilisé historiquement"
          ],
          [
            "Serveur Web",
            "Nginx",
            "Haute performance, proxy inverse"
          ],
          [
            "Bases de données",
            "MariaDB / MySQL",
            "Base de données relationnelle la plus populaire"
          ],
          [
            "Bases de données",
            "PostgreSQL",
            "Base de données de niveau entreprise"
          ],
          [
            "Partage de fichiers",
            "Samba",
            "Partage avec les clients Windows (SMB/CIFS)"
          ],
          [
            "Partage de fichiers",
            "NFS",
            "Partage natif Unix/Linux"
          ],
          [
            "E-mail",
            "Postfix / Pigeonnier",
            "Serveur MTA et IMAP/POP3"
          ],
          [
            "DNS",
            "LIER",
            "Serveur DNS de référence"
          ],
          [
            "Récipient",
            "Docker",
            "Plateforme de conteneurs"
          ],
          [
            "Orchestration",
            "Kubernetes",
            "Orchestration de conteneurs à grande échelle"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI nécessite la connaissance des principales applications open source pour postes de travail et serveurs, ainsi que la capacité de distinguer les logiciels compilés (C, C++) et interprétés (Python, Bash, JavaScript)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💻",
        "text": "Langages de programmation"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Rempli",
          "items": [
            "C / C++ — performances maximales",
            "Compilé en code machine",
            "Le programme résultant est un binaire",
            "Vous devez recompiler pour chaque plateforme"
          ]
        },
        "right": {
          "title": "Interprété",
          "items": [
            "Python, Perl, Ruby — polyvalents",
            "Fait ligne par ligne",
            "Ils ont besoin d'un interprète installé",
            "Portable entre plates-formes sans modifications"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Java est un cas particulier",
        "content": "Java est compilé en bytecode (.class), qui est ensuite exécuté par la JVM (Java Virtual Machine). Il n'est ni purement compilé ni interprété."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Gestion des paquets"
      },
      {
        "type": "paragraph",
        "text": "Les gestionnaires de packages sont au cœur de la maintenance logicielle sous Linux. Ils installent, mettent à jour et suppriment des logiciels tout en gérant automatiquement les dépendances."
      },
      {
        "type": "table",
        "headers": [
          "Famille",
          "Format",
          "Outil de bas niveau",
          "Outil de haut niveau"
        ],
        "rows": [
          [
            "Debian/Ubuntu",
            ".deb",
            "dpkg",
            "apt / apt-get"
          ],
          [
            "Chapeau rouge/Fedora",
            ".rpm",
            "tr/min",
            "miam / dnf"
          ],
          [
            "SUSE",
            ".rpm",
            "tr/min",
            "zipper"
          ],
          [
            "Cambre",
            ".pkg.tar.zst",
            "Pacman",
            "Pacman"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemples de gestion de packages",
        "prompt": "#Debian/Ubuntu\n$ sudo apt update && sudo apt installer nginx\n\n# Chapeau rouge/Fedora\n$ sudo dnf installer nginx\n\n# SUSE\n$ sudo zypper installer nginx",
        "output": ""
      }
    ]
  },
  "1-3": {
    "title": "Logiciels et licences Open Source",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗽",
        "text": "Les 4 libertés du logiciel libre"
      },
      {
        "type": "paragraph",
        "text": "Richard Stallman a défini 4 libertés fondamentales qui rendent le logiciel « libre » (libre comme dans la liberté, pas « libre »). Ces libertés constituent la base philosophique de tout le mouvement open source."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Libertà 0",
            "desc": "Usare il programma per qualsiasi scopo, senza restrizioni"
          },
          {
            "term": "Libertà 1",
            "desc": "Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)"
          },
          {
            "term": "Libertà 2",
            "desc": "Ridistribuire copie per aiutare altri"
          },
          {
            "term": "Libertà 3",
            "desc": "Migliorare il programma e distribuire le modifiche alla community"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "« Gratuit » ne veut pas dire « gratuit »",
        "content": "Le « logiciel libre » fait référence à la LIBERTÉ et non au prix. Vous pouvez vendre des logiciels gratuits ! Le code source doit être disponible, mais vous pouvez demander une compensation pour la distribution, le support ou la personnalisation."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Comparaison des licences Open Source"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔒 Copyleft (GPL, AGPL)",
          "items": [
            "Les produits dérivés DOIVENT conserver la même licence",
            "Le code modifié doit rester open source",
            "GPL : la plus utilisée (noyau Linux)",
            "AGPL : étend le copyleft aux services web/SaaS",
            "LGPL : permet la liaison avec du code propriétaire"
          ]
        },
        "right": {
          "title": "🔓 Permissif (MIT, BSD, Apache)",
          "items": [
            "Les dérivés peuvent devenir propriétaires",
            "Peu de contraintes : il suffit de citer l'auteur",
            "MIT : le plus simple et le plus court",
            "BSD : similaire au MIT, origine académique",
            "Apache 2.0 : inclut l'octroi de brevets"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Licence",
          "Taper",
          "Copyleft ?",
          "Utilisation commerciale",
          "Exemple"
        ],
        "rows": [
          [
            "GPLv3",
            "Copyleft fort",
            "Oui",
            "Oui",
            "Noyau Linux, GCC"
          ],
          [
            "LGPL",
            "Faible copyleft",
            "Partiel",
            "Oui",
            "glibc, Qt"
          ],
          [
            "AGPL",
            "Copyleft réseau",
            "Oui (+ SaaS)",
            "Oui",
            "MongoDB (ancien)"
          ],
          [
            "MIT",
            "Permissif",
            "Non",
            "Oui",
            "jQuery, Node.js"
          ],
          [
            "Apache2.0",
            "Permissif",
            "Non",
            "Oui",
            "Android, Kubernetes"
          ],
          [
            "BSD",
            "Permissif",
            "Non",
            "Oui",
            "FreeBSD, nginx"
          ],
          [
            "Creative Commons",
            "Cela varie",
            "Facultatif",
            "Cela dépend",
            "Documentation, médias"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI vous demande de faire la distinction entre les licences copyleft (GPL) et permissives (MIT, BSD, Apache). N'oubliez pas : GPL = les produits dérivés doivent rester GPL. MIT/BSD = les dérivés peuvent devenir propriétaires."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💼",
        "text": "Modèles commerciaux open source"
      },
      {
        "type": "paragraph",
        "text": "Contrairement à la croyance populaire, les entreprises peuvent gagner de l’argent grâce à l’open source. Voici les principaux modèles :"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Supporto e Sottoscrizioni",
            "desc": "Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no."
          },
          {
            "term": "Dual Licensing",
            "desc": "Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft)."
          },
          {
            "term": "SaaS",
            "desc": "Offri il software come servizio cloud (GitHub, GitLab)."
          },
          {
            "term": "Open Core",
            "desc": "Core open source + funzionalità premium proprietarie."
          },
          {
            "term": "Consulenza e Formazione",
            "desc": "Certificazioni LPI, RHCSA, corsi di formazione."
          }
        ]
      },
      {
        "type": "story",
        "title": "Scénario : Red Hat – du démarrage à 34 milliards de dollars",
        "text": "Red Hat est né en 1993 en distribuant Linux dans une boîte. Le modèle : le logiciel est gratuit, mais les entreprises paient pour le support, les mises à jour certifiées et les garanties légales. En 2019, IBM a acquis Red Hat pour 34 milliards de dollars, prouvant ainsi que l'open source peut créer une énorme valeur."
      }
    ]
  },
  "1-4": {
    "title": "Compétences TIC et Linux",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Environnement de bureau"
      },
      {
        "type": "paragraph",
        "text": "Linux propose plusieurs environnements de bureau. Contrairement à Windows et macOS où il n’y a qu’un seul bureau, sous Linux vous pouvez choisir le vôtre !"
      },
      {
        "type": "table",
        "headers": [
          "Ordinateurs de bureau",
          "Boîtes à outils",
          "Philosophie",
          "RAM minimale",
          "Distribution typique"
        ],
        "rows": [
          [
            "GNOME",
            "GTK",
            "Simplicité, modernité",
            "1 Go",
            "Ubuntu, Fedora"
          ],
          [
            "Plasma KDE",
            "Quantité",
            "Personnalisation totale",
            "1 Go",
            "Kubuntu, ouvertSUSE"
          ],
          [
            "XFCE",
            "GTK",
            "Légèreté, efficacité",
            "256 Mo",
            "Xubuntu, Manjaro"
          ],
          [
            "LXDE/LXQt",
            "GTK/Qt",
            "Ultra-léger",
            "128 Mo",
            "Lubuntu"
          ],
          [
            "Cannelle",
            "GTK",
            "Traditionnel et convivial",
            "512 Mo",
            "Linux Menthe"
          ],
          [
            "COPAIN",
            "GTK",
            "Fourchette de GNOME 2",
            "512 Mo",
            "Ubuntu MATE"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "content": "Si votre PC est ancien, XFCE ou LXQt sont parfaits. Si vous souhaitez une personnalisation maximale, choisissez KDE Plasma. Si vous préférez la simplicité, GNOME est idéal."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "Confidentialité et sécurité en ligne"
      },
      {
        "type": "paragraph",
        "text": "À l’ère du numérique, la protection de votre vie privée et de votre sécurité est cruciale. Linux offre des outils puissants pour la protection des données."
      },
      {
        "type": "table",
        "headers": [
          "Menace",
          "Que fait-il",
          "Comment se protéger"
        ],
        "rows": [
          [
            "Cookies tiers",
            "Ils suivent la navigation entre différents sites",
            "Bloquez-les dans le navigateur, utilisez des extensions (uBlock Origin)"
          ],
          [
            "Traqueurs Web",
            "Ils profilent les habitudes de l'utilisateur",
            "Utilisez Firefox avec une protection améliorée contre le pistage"
          ],
          [
            "L'homme du milieu",
            "Intercepter des données non cryptées",
            "Vérifiez HTTPS (cadenas), utilisez VPN"
          ],
          [
            "Phishing",
            "Faux sites pour voler des identifiants",
            "Vérifiez les URL, ne cliquez pas sur les liens suspects"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Navigation privée ≠ Anonymat",
        "content": "La « navigation incognito » ne vous rend PAS anonyme ! Votre FAI, votre entreprise et vos sites Web peuvent toujours voir le trafic. Masque uniquement l’histoire locale. Pour un véritable anonymat, vous avez besoin de Tor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "Cryptographie"
      },
      {
        "type": "paragraph",
        "text": "Le chiffrement est essentiel pour protéger les données en transit et au repos. Linux prend en charge différents niveaux de cryptage."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Chiffrement symétrique",
          "items": [
            "Une seule clé pour chiffrer et déchiffrer",
            "Rapide, utilisé pour de grandes quantités de données",
            "Problème : Comment partager la clé ?",
            "Algorithmes : AES, ChaCha20"
          ]
        },
        "right": {
          "title": "Chiffrement asymétrique",
          "items": [
            "Deux clés : publique + privée",
            "Crypto publique, décryptée privée",
            "Résout le problème de distribution",
            "Algorithmes : RSA, Ed25519"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Instrument",
          "Protège",
          "Comment ça marche"
        ],
        "rows": [
          [
            "TLS/SSL",
            "Connexions Web (HTTPS)",
            "Chiffrer le trafic entre les navigateurs et les serveurs"
          ],
          [
            "SSH",
            "Connexions à distance",
            "Tunnel crypté pour l'administration à distance"
          ],
          [
            "GnuPG (GPG)",
            "Fichiers, e-mails, signatures numériques",
            "Chiffrement asymétrique, toile de confiance"
          ],
          [
            "dm-crypt/LUKS",
            "Album entier",
            "Chiffrement complet du disque sous Linux"
          ],
          [
            "OpenVPN/WireGuard",
            "Trafic réseau",
            "VPN pour des connexions sécurisées"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Chiffrer un fichier avec GPG",
        "prompt": "# Générer une paire de clés\n$ gpg --gen-key\n\n# Chiffrer un fichier pour un destinataire\n$ gpg --encrypt --recipient user@email.com fichier.txt\n\n# Décrypter\n$ gpg --decrypt fichier.txt.gpg > fichier.txt",
        "output": ""
      }
    ]
  }
};
