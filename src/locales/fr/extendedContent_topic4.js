export const topic4Extended = {
  "4-1": {
    "title": "Choisir un système d'exploitation",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Catégories de systèmes d'exploitation"
      },
      {
        "type": "paragraph",
        "text": "Le choix du système d'exploitation dépend du cas d'utilisation. Linux propose des solutions pour chaque scénario, des postes de travail de bureau aux centres de données d'entreprise, des appareils IoT au cloud."
      },
      {
        "type": "table",
        "headers": [
          "Catégorie",
          "Caractéristiques",
          "Distributions typiques",
          "Exemple d'utilisation"
        ],
        "rows": [
          [
            "Ordinateurs de bureau",
            "Interface graphique, multimédia, productivité",
            "Ubuntu, Menthe, Fedora",
            "Bureau, développement, usage personnel"
          ],
          [
            "Serveur",
            "Sans tête, services 24h/24 et 7j/7, stabilité",
            "RHEL, serveur Ubuntu, Debian",
            "Serveur Web, base de données, messagerie"
          ],
          [
            "Entreprise",
            "Prise en charge LTS, certifications, SLA",
            "RHEL, SLES",
            "Banques, hôpitaux, gouvernements"
          ],
          [
            "Intégré",
            "Léger, spécifique, en temps réel",
            "Yocto, Buildroot, Android",
            "Routeurs, IoT, automobile"
          ],
          [
            "Conteneurs/Cloud",
            "Minimal, immuable",
            "Alpine, CoreOS, wagon plat",
            "Microservices, Kubernetes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "☁️",
        "text": "Cloud computing et Linux"
      },
      {
        "type": "paragraph",
        "text": "Le cloud computing est la fourniture à la demande de ressources informatiques sur un réseau. Linux domine le cloud : plus de 90 % des charges de travail publiques s'exécutent sur des noyaux Linux."
      },
      {
        "type": "table",
        "headers": [
          "Modèle",
          "Vous gérez",
          "Le prestataire gère",
          "Exemple"
        ],
        "rows": [
          [
            "IaaS",
            "Système d'exploitation, applications, données",
            "Matériel, réseau, stockage",
            "AWS EC2, machine virtuelle Azure"
          ],
          [
            "PaaS",
            "Applications, données",
            "Système d'exploitation, runtime, middleware",
            "Heroku, Google App Engine"
          ],
          [
            "SaaS",
            "Juste les données",
            "Tout le reste",
            "Gmail, Salesforce, Office 365"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏗️",
        "text": "Virtualisation et conteneurs"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🖥️ Machine Virtuelle",
          "items": [
            "Émuler un ordinateur entier",
            "Il a son propre système d'exploitation du noyau",
            "Isolation complète",
            "Lourd (Go de RAM)",
            "Démarrez en quelques minutes",
            "Hyperviseur : KVM, VMware, VirtualBox"
          ]
        },
        "right": {
          "title": "📦 Conteneurs",
          "items": [
            "Partage le noyau de l'hôte",
            "Bibliothèques d'applications uniquement",
            "Isolation au niveau du processus",
            "Léger (Mo de RAM)",
            "Commencez en quelques secondes",
            "Runtimes : Docker, Podman, conteneurd"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI vous demande de faire la distinction entre IaaS, PaaS et SaaS, et entre virtualisation (VM avec hyperviseur) et conteneurisation (Docker). Vous connaissez également KVM en tant qu’hyperviseur Linux natif."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Parcours de certification LPI"
      },
      {
        "type": "diagram",
        "title": "Parcours de certification",
        "boxes": [
          {
            "label": "Linux Essentials",
            "color": "#10b981",
            "children": [
              "Esame 010-160",
              "1 solo esame",
              "Nessun prerequisito"
            ]
          },
          {
            "label": "LPIC-1",
            "color": "#3b82f6",
            "children": [
              "Esami 101 + 102",
              "Sysadmin base",
              "5 anni validità"
            ]
          },
          {
            "label": "LPIC-2",
            "color": "#f59e0b",
            "children": [
              "Esami 201 + 202",
              "Sysadmin avanzato",
              "Richiede LPIC-1"
            ]
          },
          {
            "label": "LPIC-3",
            "color": "#ef4444",
            "children": [
              "Specialità: Security/Virt/HA",
              "Livello enterprise",
              "Richiede LPIC-2"
            ]
          }
        ]
      }
    ]
  },
  "4-2": {
    "title": "Matériel informatique",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧠",
        "text": "Composants matériels et commandes Linux"
      },
      {
        "type": "paragraph",
        "text": "Linux voit tout le matériel via les fichiers virtuels dans /proc et /sys. Chaque composant dispose de commandes dédiées pour l'interroger."
      },
      {
        "type": "table",
        "headers": [
          "Composant",
          "Commande",
          "Fichier virtuel",
          "Informations affichées"
        ],
        "rows": [
          [
            "Processeur",
            "lscpu",
            "/proc/cpuinfo",
            "Modèle, noyau, vitesse, cache"
          ],
          [
            "BÉLIER",
            "gratuit -h",
            "/proc/meminfo",
            "Total, occasion, gratuit, échange"
          ],
          [
            "Disques",
            "lsblk",
            "/proc/partitions",
            "Périphériques, partitions, supports"
          ],
          [
            "Espace disque",
            "df-h",
            "/proc/montages",
            "Espace utilisé/libre pour le système de fichiers"
          ],
          [
            "Réal. dimension",
            "du -sh rép/",
            "—",
            "Espace occupé par le répertoire"
          ],
          [
            "PCI",
            "lspci",
            "/proc/bus/pci",
            "Cartes vidéo, réseau, contrôleurs"
          ],
          [
            "USB",
            "lsusb",
            "/proc/bus/usb",
            "Périphériques USB connectés"
          ],
          [
            "Noyau",
            "uname -a",
            "/proc/version",
            "Version et architecture du noyau"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💽",
        "text": "Stockage : disque dur, SSD et NVMe"
      },
      {
        "type": "table",
        "headers": [
          "Taper",
          "Technologie",
          "Vitesse de lecture",
          "Latence",
          "Prix/Go",
          "Durée"
        ],
        "rows": [
          [
            "Disque dur",
            "Plaques magnétiques rotatives",
            "100-200 Mo/s",
            "5-10 ms",
            "0,02 €",
            "Mécanique (usure)"
          ],
          [
            "Disque SSD SATA",
            "Flash NAND, bus SATA",
            "500-550 Mo/s",
            "0,1 ms",
            "0,08 €",
            "Electronique (cycles d'écriture)"
          ],
          [
            "NVMe",
            "Flash NAND, bus PCIe",
            "3-7 Go/s",
            "0,02 ms",
            "0,10 €",
            "Électronique (plus rapide)"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "RAID — Matrice redondante de disques indépendants"
      },
      {
        "type": "paragraph",
        "text": "RAID combine plusieurs disques physiques pour obtenir une redondance (protection des données) et/ou des performances."
      },
      {
        "type": "table",
        "headers": [
          "Niveau",
          "Technique",
          "Min. disques",
          "Redondance",
          "Performance",
          "Capacité utile"
        ],
        "rows": [
          [
            "RAID0",
            "Rayures",
            "2",
            "❌ Aucun",
            "⚡ Lecture/écriture rapide",
            "100%"
          ],
          [
            "RAID1",
            "Mise en miroir",
            "2",
            "✅ 1 disque",
            "⚡ Lecture rapide",
            "50%"
          ],
          [
            "RAID5",
            "Striping + parité",
            "3",
            "✅ 1 disque",
            "⚡ Lecture rapide",
            "(N-1)/Non"
          ],
          [
            "RAID6",
            "Rayures + 2 liens",
            "4",
            "✅ 2 disques",
            "⚡ Lecture rapide",
            "(N-2)/N"
          ],
          [
            "RAID10",
            "Miroir + Bande",
            "4",
            "✅ 1 par miroir",
            "⚡⚡ Des hauts",
            "50%"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Le RAID n'est PAS une sauvegarde !",
        "content": "RAID protège contre les pannes matérielles des disques, mais n'est PAS une sauvegarde ! Si vous supprimez un fichier, il est supprimé de tous les disques RAID. La sauvegarde est une copie distincte de vos données."
      }
    ]
  },
  "4-3": {
    "title": "Noyau, processus et journaux",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎯",
        "text": "Le noyau Linux"
      },
      {
        "type": "paragraph",
        "text": "Le noyau est le cœur du système d'exploitation. Gère le processeur, la mémoire, les E/S, le réseau et les appareils. Le noyau Linux est monolithique mais modulaire : vous pouvez charger/décharger des modules sans redémarrer."
      },
      {
        "type": "diagram",
        "title": "Séquence de démarrage",
        "boxes": [
          {
            "label": "1. BIOS/UEFI",
            "color": "#ef4444",
            "children": [
              "POST hardware",
              "Cerca bootloader"
            ]
          },
          {
            "label": "2. GRUB",
            "color": "#f59e0b",
            "children": [
              "Menu di boot",
              "Carica kernel"
            ]
          },
          {
            "label": "3. Kernel",
            "color": "#10b981",
            "children": [
              "Inizializza hardware",
              "Monta root filesystem"
            ]
          },
          {
            "label": "4. systemd (PID 1)",
            "color": "#3b82f6",
            "children": [
              "Avvia servizi",
              "Target multi-user"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚙️",
        "text": "Gestion des processus"
      },
      {
        "type": "table",
        "headers": [
          "Commande",
          "Fonction",
          "Utilisation typique"
        ],
        "rows": [
          [
            "psaux",
            "Lister tous les processus",
            "Présentation des processus en cours d'exécution"
          ],
          [
            "haut / htop",
            "Moniteur en temps réel",
            "Voir CPU/RAM en temps réel"
          ],
          [
            "tuer le PID",
            "Envoyer un signal au processus",
            "Terminer poliment un processus"
          ],
          [
            "tuer -9 PID",
            "Arrêt forcé (SIGKILL)",
            "Processus bloqué et ne répond pas"
          ],
          [
            "bg/fg",
            "Arrière-plan / premier plan",
            "Déplacer les processus entre bg et fg"
          ],
          [
            "emplois",
            "Liste des processus en arrière-plan",
            "Voir ce qui s'exécute en arrière-plan"
          ],
          [
            "non, cmd &",
            "Le processus survit à la déconnexion",
            "Des commandes qui doivent continuer"
          ],
          [
            "nom du pgrep",
            "Rechercher le PID par nom",
            "Recherchez des processus spécifiques"
          ],
          [
            "nom de pkill",
            "Terminer par le nom",
            "Tuer par son nom au lieu de son PID"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "👻",
        "text": "Signaux Unix"
      },
      {
        "type": "table",
        "headers": [
          "Signal",
          "Nombre",
          "Action",
          "Interceptable ?"
        ],
        "rows": [
          [
            "SIGTERM",
            "15",
            "Terminer (poli, nettoyage)",
            "✅ Oui"
          ],
          [
            "SIGTUER",
            "9",
            "Fin (forcée, immédiate)",
            "❌ Non"
          ],
          [
            "SOUPIR",
            "1",
            "Raccrocher / Recharger la configuration",
            "✅ Oui"
          ],
          [
            "SIGINT",
            "2",
            "Interrompre (Ctrl+C)",
            "✅ Oui"
          ],
          [
            "ARRÊT DE SIGNALISATION",
            "19",
            "Suspendre le processus",
            "❌ Non"
          ],
          [
            "SIGCONT",
            "18",
            "Reprendre le processus suspendu",
            "✅ Oui"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI demande la différence entre SIGTERM (15, interceptable) et SIGKILL (9, non interceptable). Utilisez toujours SIGTERM avant SIGKILL."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Journaux système"
      },
      {
        "type": "table",
        "headers": [
          "Fichier/Commande",
          "Contenu",
          "Format"
        ],
        "rows": [
          [
            "/var/log/syslog",
            "Journal système général",
            "Texte (rsyslog)"
          ],
          [
            "/var/log/auth.log",
            "Connexion, sudo, authentification",
            "Texte"
          ],
          [
            "/var/log/kern.log",
            "Messages du noyau",
            "Texte"
          ],
          [
            "/var/log/dmesg",
            "Démarrage et matériel",
            "Noyau de tampon en anneau"
          ],
          [
            "journalctl",
            "Tous les journaux (journal systemd)",
            "Binaire (systemd)"
          ],
          [
            "journalctl -u nginx",
            "Journal d'un service spécifique",
            "Filtré par unité"
          ],
          [
            "journalctl -f",
            "Suivez les logs en temps réel",
            "Comme queue -f"
          ]
        ]
      }
    ]
  },
  "4-4": {
    "title": "Réseautage",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📡",
        "text": "Concepts fondamentaux du réseau"
      },
      {
        "type": "paragraph",
        "text": "Chaque appareil du réseau a besoin d'une adresse IP, d'un masque de sous-réseau (pour définir le réseau local), d'une passerelle (pour quitter le réseau) et d'un serveur DNS (pour traduire les noms en IP)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "IPv4 — Adresses et sous-réseaux"
      },
      {
        "type": "paragraph",
        "text": "IPv4 utilise des adresses 32 bits, représentées par 4 groupes décimaux de 0 à 255 (par exemple 192.168.1.100)."
      },
      {
        "type": "table",
        "headers": [
          "Gamme",
          "Taper",
          "Classe",
          "Réseau/Hôte"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "Privé",
            "À",
            "16 millions d'adresses"
          ],
          [
            "172.16.0.0/12",
            "Privé",
            "B",
            "1 million d'adresses"
          ],
          [
            "192.168.0.0/16",
            "Privé",
            "C",
            "65 000 adresses"
          ],
          [
            "127.0.0.0/8",
            "Bouclages",
            "—",
            "localhost (la machine elle-même)"
          ],
          [
            "0.0.0.0",
            "Itinéraire par défaut",
            "—",
            "Toutes les adresses non précisées"
          ],
          [
            "255.255.255.255",
            "Diffuser",
            "—",
            "Tout le monde dans le réseau local"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Notation CIDR",
        "content": "/24 signifie que les 24 premiers bits sont la partie « réseau » et les 8 derniers bits sont la partie « hôte ». 192.168.1.0/24 = réseau de 192.168.1.0 à 192.168.1.255 (256 adresses, 254 utilisables)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "IPv6"
      },
      {
        "type": "paragraph",
        "text": "IPv6 utilise des adresses de 128 bits, écrites en hexadécimal (par exemple 2001:0db8:85a3::8a2e:0370:7334). Résout le problème d'épuisement IPv4 (4 milliards d'adresses contre 340 undécillions)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "DNS et ports"
      },
      {
        "type": "table",
        "headers": [
          "Apporte",
          "Protocole",
          "Service",
          "Description"
        ],
        "rows": [
          [
            "20/21",
            "TCP",
            "FTP",
            "Protocole de transfert de fichiers"
          ],
          [
            "22",
            "TCP",
            "SSH",
            "Accès à distance sécurisé"
          ],
          [
            "23",
            "TCP",
            "Telnet",
            "Accès à distance NON sécurisé"
          ],
          [
            "25",
            "TCP",
            "SMTP",
            "J'envoie un email"
          ],
          [
            "53",
            "TCP/UDP",
            "DNS",
            "Traduction du nom → IP"
          ],
          [
            "80",
            "TCP",
            "HTTP",
            "Web non crypté"
          ],
          [
            "110",
            "TCP",
            "POP3",
            "Réception des emails"
          ],
          [
            "143",
            "TCP",
            "IMAP",
            "Gestion des e-mails à distance"
          ],
          [
            "443",
            "TCP",
            "HTTPS",
            "Web crypté (TLS)"
          ],
          [
            "3306",
            "TCP",
            "MySQL",
            "Bases de données MySQL/MariaDB"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Commandes réseau"
      },
      {
        "type": "code",
        "title": "Commandes de diagnostic réseau",
        "prompt": "# Afficher les adresses IP des interfaces\n$ip adresse afficher\n\n# Afficher la table de routage\nAfficher l'itinéraire $ip\n\n# Tester la connectivité\n$ping -c 4 google.com\n\n# Tracer le chemin des paquets\n$ traceroute google.com\n\n# Afficher les ports d'écoute\n$ss-tuln\n\n# requêtes DNS\n$ creuser google.com\n$nslookup google.com\n\n# Afficher la configuration DNS\n$ chat /etc/resolv.conf",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Déposer",
          "Fonction"
        ],
        "rows": [
          [
            "/etc/hôtes",
            "Nom du mappage statique → IP (priorité sur DNS)"
          ],
          [
            "/etc/resolv.conf",
            "Serveur DNS système (serveur de noms 8.8.8.8)"
          ],
          [
            "/etc/nom d'hôte",
            "Nom d'hôte de la machine"
          ],
          [
            "/etc/nsswitch.conf",
            "Ordre de résolution des noms (fichiers → DNS)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "L'examen LPI demande des ports standard (22=SSH, 80=HTTP, 443=HTTPS, 53=DNS) et des fichiers de configuration réseau (/etc/resolv.conf, /etc/hosts). Connaissez également la différence entre IPv4 (32 bits) et IPv6 (128 bits)."
      }
    ]
  }
};
