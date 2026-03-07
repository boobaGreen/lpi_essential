// LPIC-1 102 Extended Content  French
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_fr = {

  // Topic 1: Shells and Shell Scripting
  'lpic1-102-105-1': {
    title: 'Environnement Shell — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Personnalisation de l\'environnement BASH' },
      { type: 'paragraph', text: 'L\'environnement shell est géré via des fichiers d\'initialisation, des variables, des alias et des fonctions. Comprendre l\'ordre d\'appel de ces fichiers est crucial pour l\'examen LPIC-1.' },
      { type: 'table', headers: ['Fichier', 'Type de Shell', 'Usage'], rows: [
        ['/etc/profile', 'Login (Global)', 'Définit les variables d\'environnement globales pour tous les utilisateurs.'],
        ['~/.bash_profile', 'Login (Utilisateur)', 'Configuration spécifique à l\'utilisateur, appelle généralement ~/.bashrc.'],
        ['~/.bash_login', 'Login (Utilisateur)', 'Exécuté si ~/.bash_profile est absent.'],
        ['~/.profile', 'Login (Utilisateur)', 'Fichier générique utilisé si les deux précédents n\'existent pas.'],
        ['/etc/bash.bashrc', 'Non-login (Global)', 'Configuration globale pour les shells interactifs (ex: terminaux X).'],
        ['~/.bashrc', 'Non-login (Utilisateur)', 'Le fichier le plus utilisé pour les alias et les fonctions personnelles.'],
        ['~/.bash_logout', 'Logout (Sortie)', 'Exécute des tâches de nettoyage lors de la déconnexion.'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: 'Variables d\'environnement clés' },
      { type: 'table', headers: ['Variable', 'Description', 'Exemple'], rows: [
        ['PATH', 'Liste des répertoires pour la recherche de binaires', '/usr/bin:/bin'],
        ['PS1', 'Invite de commande principale (Prompt)', '"\\u@\\h:\\w\\$ "'],
        ['PS2', 'Invite pour les commandes multi-lignes', '"> "'],
        ['HISTFILE', 'Chemin du fichier d\'historique des commandes', '~/.bash_history'],
        ['HISTSIZE', 'Nombre de lignes gardées en mémoire RAM', '1000'],
        ['HISTFILESIZE', 'Nombre de lignes sauvegardées sur le disque', '2000'],
        ['HISTCONTROL', 'Contrôle l\'enregistrement (ex: ignoreboth)', 'ignoreboth'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Utilisez `source ~/.bashrc` ou `. ~/.bashrc` pour appliquer immédiatement les modifications sans redémarrer le terminal.' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Scripts Bash — Bases et Structures — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Shebang et Structure de Script' },
      { type: 'paragraph', text: 'Tout script Bash doit commencer par le Shebang (`#!`) pour indiquer l\'interpréteur à utiliser.' },
      { type: 'code', title: 'Première ligne', prompt: '#!/bin/bash', output: '' },
      { type: 'table', headers: ['Variable Spéciale', 'Signification'], rows: [
        ['$0', 'Nom du script lui-même'],
        ['$1, $2...', 'Arguments passés en ligne de commande'],
        ['$#', 'Nombre total d\'arguments passés'],
        ['$@', 'Liste de tous les arguments (chaque argument est entre guillemets)'],
        ['$*', 'Tous les arguments sous forme d\'une seule chaîne'],
        ['$?', 'Code de retour de la dernière commande (0 = Succès)'],
        ['$$', 'PID du processus actuel'],
      ]},
      { type: 'heading', level: 2, emoji: '🔄', text: 'Contrôle de flux : If, Case et Boucles' },
      { type: 'code', title: 'Exemples de structures', prompt: '# Bloc If\nif [ $# -gt 0 ]; then\n  echo "Arguments: $#"\nfi\n\n# Boucle For\nfor i in {1..5}; do\n  echo "Compteur: $i"\ndone', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Rappel : En Shell, `0` signifie succès. Toute valeur non-nulle (1-255) indique une erreur ou un cas spécifique.' },
    ]
  },

  // Topic 2: User Interfaces and Desktops
  'lpic1-102-106-1': {
    title: 'X11 et Wayland — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Serveurs d\'Affichage' },
      { type: 'paragraph', text: 'L\'interface graphique Linux repose sur un serveur d\'affichage pour gérer les fenêtres et les entrées. X11 est l\'ancien standard, tandis que Wayland est le remplaçant moderne.' },
      { type: 'comparison', left: {
        title: 'X Window System (X11)',
        items: ['Architecture Client-Serveur', 'Transparence réseau (X11 Forwarding)', 'Configuration via xorg.conf', 'Sécurité moins rigoureuse']
      }, right: {
        title: 'Wayland',
        items: ['Plus sécurisé et performant', 'L\'application dessine directement', 'Le compositeur gère tout', 'Remplaçant par défaut actuel']
      }},
      { type: 'table', headers: ['Fichier/Commande', 'Usage'], rows: [
        ['/etc/X11/xorg.conf.d/', 'Répertoire de configuration modulaire moderne'],
        ['/var/log/Xorg.0.log', 'Fichier journal pour le diagnostic'],
        ['DISPLAY', 'Variable indiquant l\'affichage Linux (ex: :0.0)'],
        ['xhost / xauth', 'Outils de gestion dles accès X11'],
      ]},
    ]
  },

  'lpic1-102-106-2': {
    title: 'Accessibilité (A11y) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Assistance Visuelle et Motrice' },
      { type: 'list', items: [
        { term: 'Orca', desc: 'Lecteur d\'écran (Screen Reader) pour les malvoyants.' },
        { term: 'BRLTTY', desc: 'Démon de support pour les terminaux Braille.' },
        { term: 'Sticky Keys', desc: 'Touches rémanentes : permet de presser Ctrl+C sans appui simultané.' },
        { term: 'Mouse Keys', desc: 'Utilisation du pavé numérique pour déplacer la souris.' },
      ]},
    ]
  },

  // Topic 3: Administrative Tasks
  'lpic1-102-107-1': {
    title: 'Gestion des Utilisateurs et des Groupes — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: 'Fichiers de Comptes' },
      { type: 'table', headers: ['Fichier', 'Description', 'Permissions'], rows: [
        ['/etc/passwd', 'Liste des comptes, UID, GID, Home, Shell', '644 (Public)'],
        ['/etc/shadow', 'Mots de passe chiffrés et expiration', '600 (Root seul)'],
        ['/etc/group', 'Définition des groupes et membres', '644'],
        ['/etc/gshadow', 'Mots de passe des groupes', '600'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: 'Commandes d\'Administration' },
      { type: 'table', headers: ['Commande', 'Action', 'Options communes'], rows: [
        ['useradd', 'Créer un utilisateur', '-m (Créer home), -s (Shell), -G (Groupes)'],
        ['usermod', 'Modifier un utilisateur', '-aG (Ajouter sans écraser), -L (Verrouiller)'],
        ['userdel', 'Supprimer un utilisateur', '-r (Supprime aussi le répertoire home)'],
        ['groupadd', 'Créer un groupe', '-g (Spécifier le GID)'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Ne confondez pas `useradd` (commande bas niveau) avec `adduser` (script interactif haut niveau sur Debian/Ubuntu).' },
    ]
  },

  'lpic1-102-107-2': {
    title: 'Planification de tâches (Cron/At) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: 'Tâches Périodiques : Cron' },
      { type: 'paragraph', text: 'Le démon `crond` exécute des scripts à des intervalles réguliers définis dans la crontab.' },
      { type: 'code', title: 'Syntaxe Crontab', prompt: '# min hour day month dow command\n30 4 * * 0 /root/backup.sh', output: 'Action : Tous les dimanches à 4h30 du matin' },
      { type: 'table', headers: ['Fichier/Commande', 'Usage'], rows: [
        ['crontab -e', 'Éditer les tâches cron de l\'utilisateur'],
        ['crontab -l', 'Lister les tâches cron'],
        ['/etc/cron.allow', 'Utilisateurs autorisés à utiliser cron'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: 'Tâches Ponctuelles : At' },
      { type: 'paragraph', text: 'Utilisez `at` pour programmer une exécution unique dans le futur.' },
      { type: 'code', title: 'Exemple At', prompt: '$ at 22:00\nat> reboot\nat> <Ctrl+D>', output: '' },
    ]
  },

  'lpic1-102-107-3': {
    title: 'Localisation et Internationalisation — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Variables de Localisation' },
      { type: 'table', headers: ['Variable', 'Rôle'], rows: [
        ['LANG', 'Réglage par défaut (ex: fr_FR.UTF-8)'],
        ['LC_ALL', 'Écrase toutes les autres variables LC_*'],
        ['LC_TIME', 'Format de date et heure'],
        ['LC_MESSAGES', 'Langue des messages d\'erreurs et menus'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Utilitaires' },
      { type: 'list', items: [
        { term: 'locale', desc: 'Affiche les réglages actuels.' },
        { term: 'localectl', desc: 'Outil systemd pour changer la langue ou le clavier.' },
        { term: 'iconv', desc: 'Convertit un fichier d\'un encodage à un autre (ex: ISO to UTF-8).' },
      ]},
    ]
  },

  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: 'Temps Système et Synchronisation NTP — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: 'Horloge Matérielle vs Horloge Système' },
      { type: 'comparison', left: {
        title: 'Horloge Matérielle (RTC/CMOS)',
        items: ['Alimentée par pile', 'Souvent réglée sur UTC', 'Gérée via `hwclock`']
      }, right: {
        title: 'Horloge Système (Noyau)',
        items: ['Gérée par le noyau', 'Gère les fuseaux horaires', 'Gérée via `date`']
      }},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Outils de synchronisation NTP' },
      { type: 'table', headers: ['Outil/Service', 'Caractéristiques', 'Configuration'], rows: [
        ['ntpd', 'Service classique, précis mais lent à synchroniser', '/etc/ntp.conf'],
        ['chronyd', 'Option moderne, idéale pour les PCs souvent déconnectés', '/etc/chrony.conf'],
        ['systemd-timesyncd', 'Client léger pour la synchronisation simple', '/etc/systemd/timesyncd.conf'],
      ]},
    ]
  },

  'lpic1-102-108-2': {
    title: 'Journalisation Système (Logging) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'rsyslog et Gestion des journaux' },
      { type: 'paragraph', text: '`rsyslog` est le service central de traitement des journaux sous Linux. Sa configuration repose sur les "Services (Facility)" et les "Priorités (Priority)".' },
      { type: 'table', headers: ['Symbole', 'Signification', 'Exemple'], rows: [
        ['Facility', 'Sous-système générant le log', 'auth, cron, mail, kern'],
        ['Priority', 'Gravité du message', 'debug, info, warn, err, crit'],
        ['Action', 'Destination du log', '/var/log/messages, @remote-host'],
      ]},
      { type: 'heading', level: 2, emoji: '🔍', text: 'Journal systemd (journalctl)' },
      { type: 'code', title: 'Commandes utiles', prompt: '# Voir tous les logs\n$ journalctl\n# Voir les logs noyau\n$ journalctl -k\n# Suivi en temps réel\n$ journalctl -f', output: '' },
    ]
  },

  'lpic1-102-108-3': {
    title: 'Agents de Transfert de Courrier (MTA) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Transfert de Mail et Gestion' },
      { type: 'paragraph', text: 'Sous Linux, les tâches système (comme Cron) utilisent souvent l\'email pour envoyer des rapports.' },
      { type: 'list', items: [
        { term: 'Postfix / Exim / Sendmail', desc: 'Implémentations courantes de MTA.' },
        { term: '/etc/aliases', desc: 'Définit des alias (ex: rediriger root vers un utilisateur).' },
        { term: 'newaliases', desc: 'Doit être exécuté après modification des alias.' },
        { term: 'mail / mailq', desc: 'Outil de lecture et gestion de la file d\'attente.' },
      ]},
    ]
  },

  'lpic1-102-108-4': {
    title: 'Gestion de l’impression (CUPS) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'CUPS et le flux d’impression' },
      { type: 'paragraph', text: 'CUPS (Common Unix Printing System) est la solution standard pour l’impression sous Linux.' },
      { type: 'table', headers: ['Commande', 'Fonction'], rows: [
        ['lp, lpr', 'Soumettre un travail d’impression'],
        ['lpq', 'Afficher l’état de la file d’attente'],
        ['lprm', 'Supprimer un travail d’impression'],
        ['lpadmin', 'Configurer les imprimantes et les files d’attente'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'L’interface de gestion Web de CUPS est généralement située sur `http://localhost:631`.' },
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: 'Protocoles Réseau et Infrastructure — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Protocole Internet (IP)' },
      { type: 'paragraph', text: 'Comprendre l’espace d’adressage IPv4, les masques de sous-réseau et la passerelle par défaut est la base de la configuration réseau.' },
      { type: 'table', headers: ['Protocole', 'Port', 'Description'], rows: [
        ['HTTP / HTTPS', '80 / 443', 'Transfert Web'],
        ['SSH', '22', 'Connexion chiffrée à distance'],
        ['DNS', '53', 'Résolution de noms'],
        ['DHCP', '67/68', 'Attribution automatique d’IP'],
      ]},
    ]
  },

  'lpic1-102-109-2': {
    title: 'Configuration Réseau Persistante — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Interfaces et Routage' },
      { type: 'table', headers: ['Fichier', 'Description'], rows: [
        ['/etc/hostname', 'Définir le nom d’hôte statique'],
        ['/etc/hosts', 'Mappage local nom d’hôte vers IP'],
        ['/etc/resolv.conf', 'Spécifier les adresses des serveurs DNS'],
        ['/etc/nsswitch.conf', 'Définir l’ordre de recherche des noms'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: 'Outils de gestion réseau' },
      { type: 'list', items: [
        { term: 'ip addr / ip route', desc: 'Outil principal pour la configuration moderne.' },
        { term: 'ifconfig / route', desc: 'Outils classiques obsolètes (à connaître pour l’examen).' },
        { term: 'nmcli / nmtui', desc: 'Outils en ligne de commande et texte pour NetworkManager.' },
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: 'Diagnostic Réseau — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Outils de diagnostic' },
      { type: 'list', items: [
        { term: 'ping', desc: 'Tester la connectivité.' },
        { term: 'traceroute', desc: 'Suivre le chemin des paquets.' },
        { term: 'netstat / ss', desc: 'Afficher les ports ouverts et les connexions actives.' },
        { term: 'dig / host', desc: 'Effectuer des requêtes DNS détaillées.' },
      ]},
    ]
  },

  // Topic 6: Security
  'lpic1-102-110-1': {
    title: 'Audit de Sécurité Système — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Permissions et bits spéciaux' },
      { type: 'paragraph', text: 'En plus des permissions rwx, Linux utilise des bits spéciaux pour renforcer la sécurité.' },
      { type: 'table', headers: ['Bit spécial', 'Abrév.', 'Signification'], rows: [
        ['SetUID', 'SUID', 'Exécution avec les droits du propriétaire'],
        ['SetGID', 'SGID', 'Exécution avec les droits du groupe (utile pour les partages)'],
        ['Sticky Bit', 't', 'Empêche la suppression par autrui (ex: /tmp)'],
      ]},
      { type: 'code', title: 'Trouver les fichiers SUID', prompt: '$ find /usr/bin -perm -4000', output: '/usr/bin/sudo\n/usr/bin/passwd' },
    ]
  },

  'lpic1-102-110-2': {
    title: 'Sécurité des comptes et limites de ressources — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Durcissement du système' },
      { type: 'list', items: [
        { term: 'ulimit', desc: 'Limiter les ressources par utilisateur (processus, fichiers).' },
        { term: 'sudo', desc: 'Exécuter des commandes en tant que root avec traçabilité.' },
        { term: '/etc/sudoers', desc: 'Fichier de configuration de sudo (utiliser `visudo`).' },
      ]},
    ]
  },

  'lpic1-102-110-3': {
    title: 'Technologies de chiffrement (GPG/SSH) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🔑', text: 'SSH et Chiffrement asymétrique' },
      { type: 'paragraph', text: 'Le protocole SSH offre des moyens de gestion à distance sécurisés.' },
      { type: 'table', headers: ['Fichier', 'Usage'], rows: [
        ['~/.ssh/id_rsa', 'Clé privée : ne jamais partager'],
        ['~/.ssh/id_rsa.pub', 'Clé publique : à distribuer aux serveurs'],
        ['~/.ssh/authorized_keys', 'Stocke les clés publiques autorisées'],
        ['/etc/ssh/sshd_config', 'Configuration principale du serveur SSH'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Pour la sécurité, désactivez la connexion Root (`PermitRootLogin no`) et préférez l’authentification par clé.' },
    ]
  },
};
