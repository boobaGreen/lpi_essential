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
      { type: 'code', title: 'Définition des variables et alias', prompt: '# Rendre un alias permanent (dans ~/.bashrc)\nalias update="sudo apt update && sudo apt upgrade"\n\n# Modifier le PATH (dans ~/.profile o ~/.bashrc)\nexport PATH="$PATH:$HOME/bin"\n\n# Appliquer les changements immédiatement\n$ source ~/.bashrc\n# ou alternativement :\n$ . ~/.bashrc', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Rappel : pour recharger un fichier de configuration dans le shell actuel, utilisez `source fichier` ou `. fichier`. Les fichiers ~/.bash_profile et ~/.profile sont lus UNIQUEMENT lors du login (ex: via ssh), alors que ~/.bashrc est lu à l\'ouverture d\'un nouveau terminal (non-login).' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Scripts Bash — Bases et Structures — Analyse approfondie',
    sections: [
      { type: 'code', title: 'Exemple de script de base', prompt: '#!/bin/bash\n# Ceci est un commentaire\n\necho "Début du script"\n\nNAME="Linux"\necho "Système : $NAME"\n\n# Exécution :\n# 1. Donner les permissions d\'exécution : chmod +x script.sh\n# 2. Exécuter : ./script.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🔢', text: 'Variables Spéciales et Arguments' },
      { type: 'table', headers: ['Variable', 'Signification'], rows: [
        ['$0', 'Nom du script lui-même (ex: ./script.sh)'],
        ['$1, $2... $9', 'Arguments passés au script (paramètre 1, 2, etc.)'],
        ['$#', 'Nombre total d\'arguments passés'],
        ['$@', 'Tous les arguments individuellement ("$1" "$2" "$3")'],
        ['$*', 'Tous les arguments sous forme d\'une seule chaîne ("$1 $2 $3")'],
        ['$?', 'Code de retour de la dernière commande (0=succès, >0=erreur)'],
        ['$$', 'PID du processus actuel'],
        ['$!', 'PID du dernier job en arrière-plan'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Valeurs de retour ($?)', content: 'Sous Linux et Bash, un code de sortie 0 signifie que la commande a RÉUSSI. Tout autre nombre (ex: 1, 2, 127) indique une ERREUR. C\'est l\'opposé du fonctionnement des booléens dans beaucoup de langages de programmation.' },
      { type: 'code', title: 'Structures conditionnelles : if / case', prompt: '# Structure if-then-elif-else-fi\nif [ -f "/etc/passwd" ]; then\n  echo "Le fichier existe"\nelif [ -d "/etc" ]; then\n  echo "C\'est un répertoire"\nelse\n  echo "Non trouvé"\nfi\n\n# Structure case (switch)\ncase "$1" in\n  start)\n    echo "Démarrage du service..."\n    ;;\n  stop)\n    echo "Arrêt du service..."\n    ;;\n  *)\n    echo "Usage: $0 {start|stop}"\n    exit 1\n    ;;\nesac', output: '' },
      { type: 'heading', level: 2, emoji: '🔄', text: 'Boucles : for et while' },
      { type: 'code', title: 'Structures itératives', prompt: '# Boucle for - sur une liste\nfor FILE in *.txt; do\n  echo "Traitement de $FILE"\n  cp "$FILE" "$FILE.bak"\ndone\n\n# Boucle while - tant que la condition est vraie\nCOUNTER=1\nwhile [ $COUNTER -le 5 ]; do\n  echo "Boucle $COUNTER"\n  COUNTER=$((COUNTER + 1))\ndone\n\n# Exécution de commande (Command Substitution)\nDATE=$(date +%Y-%m-%d)\n# syntaxe équivalente classique : DATE=`date +%Y-%m-%d`', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'examen LPIC-1 attend que vous sachiez utiliser le construit seq dans une boucle for (ex: for i in $(seq 1 10)), comprendre la différence entre "$@" (arguments en entités séparées) et "$*" (chaîne unique), et reconnaître les comparateurs numériques (-eq, -lt) vs comparateurs de chaînes (=, <).' },
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
        items: ['Architecture client-serveur', 'Les applications communiquent avec le serveur X', 'Permet le déport d\'affichage via SSH (X11 Forwarding)', 'Ancien et complexe', 'Menus et fenêtres gérés par le Window Manager', 'Clients historiques : xhost, xauth']
      }, right: {
        title: 'Wayland',
        items: ['Protocole moderne et plus sécurisé', 'Les apps dessinent directement dans le tampon', 'Composition intégrée au serveur', 'Latence et tearing réduits', 'Remplacera X11 (par défaut sur Fedora/Ubuntu)', 'XWayland pour les apps héritées']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Configuration X11' },
      { type: 'table', headers: ['Fichier / Répertoire', 'Fonction'], rows: [
        ['/etc/X11/xorg.conf', 'Fichier de configuration monolithique traditionnel (désormais optionnel)'],
        ['/etc/X11/xorg.conf.d/', 'Répertoire pour des extraits de configuration modulaires'],
        ['~/.xsession', 'Script utilisateur exécuté au démarrage via le Display Manager'],
        ['~/.Xresources', 'Gérer les personnalisations des programmes X (couleurs, polices)'],
        ['/usr/share/X11/', 'Données système pour le serveur X11'],
        ['/var/log/Xorg.0.log', 'Journal principal du serveur X11 pour le dépannage'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Accès à distance et X11 Forwarding' },
      { type: 'paragraph', text: 'L\'architecture client-serveur de X11 vous permet d\'exécuter une application graphique sur un serveur distant mais de l\'afficher sur votre moniteur local, via SSH.' },
      { type: 'code', title: 'X11 Forwarding', prompt: '# Sur le client (PC local) activez le transfert X11\n$ ssh -X user@remote-server\n# ou -Y pour l\'activer en ignorant les contrôles de sécurité\n$ ssh -Y user@remote-server\n\n# Exécutez le programme distant qui s\'ouvrira sur l\'affichage local\nuser@remote:~$ firefox &', output: '' },
      { type: 'table', headers: ['Commande d\'accès', 'Action'], rows: [
        ['xhost +IP', 'Ancien mode peu sûr : autorise l\'IP à se connecter à l\'affichage X local'],
        ['DISPLAY', 'Variable d\'environnement définissant le moniteur à utiliser (ex: :0.0)'],
        ['VNC / RDP', 'Protocoles modernes pour l\'accès au bureau à distance (Wayland et X11)'],
        ['SPICE', 'Protocole pour gérer les machines virtuelles KVM graphiquement'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Le LPIC-1 nécessite de distinguer le système X Window (architecture), les fichiers clés comme `xorg.conf.d`, le journal de débogage `Xorg.0.log`, et de comprendre le concept de variable display comme `DISPLAY=:0` et l\'option ssh `-X`.' },
    ]
  },

  'lpic1-102-106-2': {
    title: 'Accessibilité (A11y) — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Fonctionnalités d\'accessibilité visuelle' },
      { type: 'paragraph', text: 'Les environnements de bureau Linux proposent des fonctionnalités pour aider les utilisateurs présentant des déficiences visuelles, auditives ou motrices. Ces outils sont connus sous le nom d\'a11y (Accessibility).' },
      { type: 'table', headers: ['Condition physique', 'Outil logiciel', 'But et fonction'], rows: [
        ['Basse vision', 'Orca', 'Lecteur d\'écran (lit l\'écran avec synthèse vocale dans GNOME)'],
        ['Basse vision', 'Thème à haut contraste', 'Thème à contraste élevé (blanc sur noir / texte large)'],
        ['Basse vision', 'Loupe / KMagnifier', 'Outil de grossissement de l\'écran'],
        ['Cécité', 'BRLTTY', 'Démon pour gérer les afficheurs Braille en mode texte/console uniquement'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: 'Accessibilité motrice (Clavier)' },
      { type: 'list', items: [
        { term: 'Sticky Keys', desc: 'Permet de presser des combinaisons comme Ctrl+Alt+Suppr séquentiellement (l\'une après l\'autre) pour ceux qui ne peuvent pas presser plusieurs touches simultanément.' },
        { term: 'Slow Keys', desc: 'Prévient les frappes accidentelles en exigeant qu\'une touche soit maintenue enfoncée pendant une fraction de seconde avant d\'être acceptée.' },
        { term: 'Bounce Keys', desc: 'Ignore les pressions rapides et répétées sur une même touche. Utile pour les tremblements.' },
        { term: 'Mouse Keys', desc: 'Permet de déplacer le curseur de la souris à l\'aide du pavé numérique.' },
        { term: 'Clavier visuel', desc: 'Clavier virtuel à l\'écran contrôlable avec une souris ou des systèmes de suivi oculaire.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'Outils d\'assistance', content: 'Rappelez-vous les associations : Orca = Lecteur d\'écran. BRLTTY = Braille. Sticky/Slow/Bounce Keys = pour les limitations de mouvement.' },
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
      { type: 'table', headers: ['Fichier/Commande', 'Usage'], rows: [
        ['at -l / atq', 'Lister les tâches en attente'],
        ['at -r / atrm', 'Supprimer une tâche en attente'],
        ['/etc/at.allow', 'Utilisateurs autorisés à utiliser at'],
        ['/etc/at.deny', 'Utilisateurs non autorisés à utiliser at'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Retenez la syntaxe de la crontab (min heure jour mois jour_semaine commande) et la différence entre les crontabs utilisateur (`crontab -e`) et système (`/etc/crontab`, `/etc/cron.d/*`).' },
    ]
  },

  'lpic1-102-107-3': {
    title: 'Localisation et Internationalisation — Analyse approfondie',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Variables de Locale (LC_*)' },
      { type: 'table', headers: ['Variable', 'Description'], rows: [
        ['LANG', 'Valeur par défaut pour toutes les catégories si non définies'],
        ['LC_CTYPE', 'Classification des caractères et encodage (ex: UTF-8)'],
        ['LC_TIME', 'Format de date et d\'heure'],
        ['LC_NUMERIC', 'Format des nombres (séparateur décimal)'],
        ['LC_MONETARY', 'Symbole monétaire et formatage'],
        ['LC_MESSAGES', 'Langue des messages d\'erreurs et menus'],
        ['LC_ALL', 'L\'emporte sur toutes les autres variables locales'],
      ]},
      { type: 'heading', level: 2, emoji: '🔤', text: 'Encodage : ASCII vs UTF-8' },
      { type: 'comparison', left: {
        title: 'ASCII',
          items: ['7 bits par caractère', 'Uniquement l\'alphabet anglais de base', '128 caractères maximum', 'Ancien standard']
      }, right: {
        title: 'UTF-8 (Unicode)',
          items: ['Variable (1 à 4 octets)', 'Supporte toutes les langues et emojis', 'Compatible avec ASCII', 'Standard moderne universel']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Utilitaires' },
      { type: 'list', items: [
        { term: 'locale', desc: 'Affiche les réglages actuels.' },
        { term: 'localectl', desc: 'Outil systemd pour changer la langue ou le clavier.' },
        { term: 'iconv', desc: 'Convertit un fichier d\'un encodage à un autre (ex: ISO to UTF-8).' },
      ]},
      { type: 'code', title: 'Commandes de localisation', prompt: '# Afficher la configuration actuelle\n$ locale\n\n# Lister toutes les locales installées\n$ locale -a\n\n# Changer temporairement la langue\n$ export LANG=en_US.UTF-8\n\n# Configurer le fuseau horaire (interactivement)\n$ tzselect', output: '' },
      { type: 'infobox', variant: 'tip', title: 'I18n vs L10n', content: 'I18n (Internationalisation) prépare le logiciel pour plusieurs langues. L10n (Localisation) est l\'adaptation réelle à une région spécifique.' },
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
      { type: 'paragraph', text: 'Les MTA (Mail Transfer Agents) sont responsables de l\'envoi et du routage des emails. Sur Linux, les plus courants sont Postfix, Exim et Sendmail.' },
      { type: 'table', headers: ['Composant', 'Description'], rows: [
        ['/etc/aliases', 'Définit les redirections d\'emails (ex: root vers un utilisateur réel)'],
        ['newaliases', 'Commande à lancer après avoir modifié /etc/aliases pour appliquer les changements'],
        ['mailq / postqueue -p', 'Affiche la file d\'attente des emails sortants'],
        ['~/.forward', 'Fichier utilisateur pour rediriger ses propres emails'],
      ]},
      { type: 'code', title: 'Tester l\'envoi de mail', prompt: '# Envoyer un mail rapide par la console\n$ echo "Test body" | mail -s "Sujet" user@example.com\n\n# Vérifier la file d\'attente\n$ mailq', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'examen porte sur les fichiers `/etc/aliases`, l\'importance de lancer `newaliases`, et la connaissance des grands noms des MTA.' },
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
      { type: 'heading', level: 2, emoji: '📄', text: 'Fichiers de configuration et de spool' },
      { type: 'table', headers: ['Fichier/Répertoire', 'Description'], rows: [
        ['/etc/cups/cupsd.conf', 'Fichier de configuration principal du démon CUPS'],
        ['/etc/cups/printers.conf', 'Définit les imprimantes configurées et leurs options'],
        ['/var/spool/cups/', 'Répertoire de spool où les travaux d\'impression sont stockés temporairement'],
        ['/usr/share/cups/model/', 'Contient les fichiers PPD (PostScript Printer Description)'],
      ]},
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Commandes d\'administration CUPS' },
      { type: 'list', items: [
        { term: 'cupsenable / cupsdisable', desc: 'Active ou désactive une imprimante.' },
        { term: 'cupsaccept / cupsreject', desc: 'Accepte ou rejette les travaux d\'impression pour une file d\'attente.' },
        { term: 'cancel', desc: 'Annule un travail d\'impression par son ID.' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'Le LPIC-1 se concentre sur les commandes de base (`lp`, `lpq`, `lprm`) et la compréhension de l\'architecture CUPS, y compris l\'accès via l\'interface web.' },
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: 'Protocoles Réseau et Infrastructure — Analyse approfondie',
    sections: [
      { type: 'paragraph', text: 'Comprendre TCP/IP est essentiel pour tout administrateur Linux. Voici les concepts clés abordés dans l\'examen.' },
      { type: 'comparison', left: {
        title: 'IPv4',
        items: ['32 bits (ex: 192.168.1.1)', 'Environ 4 milliards d\'adresses (épuisement)', 'Configuration via DHCP ou statique', 'Format décimal à points']
      }, right: {
        title: 'IPv6',
        items: ['128 bits (ex: 2001:db8::1)', 'Quasiment illimité', 'Auto-configuration native (SLAAC)', 'Format hexadécimal avec deux-points']
      }},
      { type: 'heading', level: 2, emoji: '🔌', text: 'Ports et Services Communs' },
      { type: 'table', headers: ['Port', 'Protocole', 'Service'], rows: [
        ['21', 'FTP', 'Transfert de fichiers'],
        ['22', 'SSH', 'Accès sécurisé à distance'],
        ['25', 'SMTP', 'Envoi d\'emails'],
        ['53', 'DNS', 'Résolution de noms'],
        ['80 / 443', 'HTTP / HTTPS', 'Web (non-sécurisé / sécurisé)'],
        ['123', 'NTP', 'Synchronisation de l\'heure'],
      ]},
      { type: 'heading', level: 2, emoji: '📦', text: 'TCP vs UDP' },
      { type: 'comparison', left: {
        title: 'TCP (Connection-oriented)',
        items: ['Fiable (vérifie la réception)', 'Contrôle de flux', 'Plus lent (overhead)', 'Utilisé pour : Web, SSH, Mail']
      }, right: {
        title: 'UDP (Connectionless)',
        items: ['Rapide (pas de vérification)', 'Léger', 'Pas de garantie d\'ordre', 'Utilisé pour : Streaming, DNS, DHCP']
      }},
      { type: 'infobox', variant: 'tip', title: 'Le masque de sous-réseau', content: 'Le masque (ex: 255.255.255.0 ou /24) définit la partie "réseau" et la partie "hôte" de l\'adresse IP.' },
    ]
  },

  'lpic1-102-109-2': {
    title: 'Configuration Réseau Persistante — Analyse approfondie',
    sections: [
      { type: 'paragraph', text: 'Sur Linux, la configuration réseau peut être gérée par des fichiers texte ou des utilitaires comme NetworkManager.' },
      { type: 'table', headers: ['Fichier', 'Fonction'], rows: [
        ['/etc/hostname', 'Nom de la machine'],
        ['/etc/hosts', 'Mappage local statique IP <-> Noms'],
        ['/etc/resolv.conf', 'Définit les serveurs DNS à interroger'],
        ['/etc/nsswitch.conf', 'Définit l\'ordre de priorité pour la résolution (ex: hosts avant dns)'],
        ['/etc/network/interfaces', 'Configuration Debian/Ubuntu classique'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: 'Outils de configuration et diagnostic' },
      { type: 'table', headers: ['Outil', 'Usage'], rows: [
        ['ifconfig / ip addr', 'Configurer ou afficher les interfaces réseau'],
        ['route / ip route', 'Gérer la table de routage'],
        ['netstat / ss', 'Afficher les connexions réseau et ports ouverts'],
        ['nmcli / nmtui', 'Gérer NetworkManager via console'],
      ]},
      { type: 'code', title: 'Exemples avec la commande ip', prompt: '# Afficher les adresses IP\n$ ip addr show\n\n# Activer une interface\n$ sudo ip link set eth0 up\n\n# Afficher la route par défaut (gateway)\n$ ip route show\n\n# Afficher les ports en écoute (ss est plus rapide que netstat)\n$ ss -tulpn', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Soyez capable de localiser où configurer le DNS (`/etc/resolv.conf`) et de comprendre comment `ss` et `ip` remplacent les anciennes commandes `netstat` et `ifconfig`.' },
    ]
  },

  'lpic1-102-109-3': {
    title: 'Diagnostic Réseau — Analyse approfondie',
    sections: [
      { type: 'paragraph', text: 'Une approche méthodique est nécessaire pour résoudre les problèmes réseau.' },
      { type: 'table', headers: ['Outil', 'Diagnostic'], rows: [
        ['ping', 'Vérifier la connectivité ICMP de base'],
        ['traceroute', 'Identifier le chemin et les routeurs intermédiaires'],
        ['host / dig', 'Tester la résolution de nom DNS'],
        ['netstat -r', 'Vérifier la table de routage'],
        ['telnet / nc', 'Vérifier si un port distant est ouvert'],
      ]},
      { type: 'heading', level: 2, emoji: '🩹', text: 'Flux de dépannage classique' },
      { type: 'code', title: 'Étapes de vérification', prompt: '# 1. L\'interface est-elle active ?\n$ ip link\n# 2. Ai-je une IP ?\n$ ip addr\n# 3. Puis-je pinger ma passerelle (gateway) ?\n$ ping -c 4 192.168.1.1\n# 4. Le DNS fonctionne-t-il ?\n$ host google.com\n# 5. La route externe fonctionne-t-elle ?\n$ traceroute 8.8.8.8', output: '' },
      { type: 'infobox', variant: 'exam', content: 'On vous demandera souvent quel outil utiliser pour : tester la route (`traceroute`), tester le DNS (`dig`), ou voir les ports ouverts localement (`ss`).' },
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
      { type: 'code', title: 'Utiliser les bits spéciaux', prompt: '# Ajouter le SUID à un exécutable\n$ chmod u+s /usr/bin/mon-outil\n\n# Ajouter le SGID à un répertoire (héritage du groupe)\n$ chmod g+s /shared/data\n\n# Trouver tous les fichiers SUID sur le système\n$ find / -perm -4000 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '📉', text: 'Limites de ressources (ulimit)' },
      { type: 'paragraph', text: 'La commande `ulimit` permet de définir des limites sur les ressources consommées par les processus utilisateur pour éviter les attaques par déni de service.' },
      { type: 'code', title: 'Exemples ulimit', prompt: '# Afficher toutes les limites actuelles\n$ ulimit -a\n\n# Limiter le nombre maximum de fichiers ouverts\n$ ulimit -n 1024\n\n# Limiter la taille maximale d\'un fichier créé\n$ ulimit -f 100000', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'examen LPIC-1 demande de savoir identifier les fichiers SUID/SGID par leur lettre (s) dans `ls -l` et de comprendre l\'utilité de `ulimit` pour la stabilité du système.' },
    ]
  },

  'lpic1-102-110-2': {
    title: 'Sécurité des comptes et limites de ressources — Analyse approfondie',
    sections: [
      { type: 'paragraph', text: 'La gestion des accès root via `sudo` est la méthode recommandée pour l\'administration, car elle est tracée et granulaire.' },
      { type: 'table', headers: ['Fichier / Commande', 'Rôle'], rows: [
        ['/etc/sudoers', 'Fichier de configuration principal (ne pas éditer directement)'],
        ['visudo', 'Commande sécurisée pour éditer /etc/sudoers (vérifie la syntaxe)'],
        ['/etc/login.defs', 'Configuration globale des limites de compte et mots de passe'],
        ['/etc/securetty', 'Lister les terminaux où root peut se connecter directement'],
      ]},
      { type: 'heading', level: 2, emoji: '🚫', text: 'Désactiver les comptes' },
      { type: 'table', headers: ['Méthode', 'Action'], rows: [
        ['/etc/nologin', 'Si ce fichier existe, seul root peut se connecter'],
        ['passwd -l', 'Verrouille le mot de passe de l\'utilisateur'],
        ['usermod -s /sbin/nologin', 'Empêche l\'accès au shell'],
      ]},
      { type: 'code', title: 'Utilisation de Sudo', prompt: '# Exécuter une commande comme root\n$ sudo apt update\n\n# Devenir root temporairement (shell interactif)\n$ sudo -i\n\n# Vérifier ses propres droits sudo\n$ sudo -l', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Concentrez-vous sur `visudo`, la différence entre verrouiller un compte et changer son shell, et l\'importance de `/etc/securetty`.' },
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
