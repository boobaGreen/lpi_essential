// LPIC-1 102 Quiz Pool — French — Topic 106 (Interfaces utilisateur et bureaux)

export const lpic1_102_topic2Quizzes_fr = [
  // ─── 106.1 Installer et configurer X11 (8 questions) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quel composant logiciel de l'architecture X11 est responsable de la gestion du matériel d'affichage, ainsi que de la souris et du clavier ?",
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: "Le serveur X communique directement avec le matériel local."
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quelle variable d'environnement est utilisée par les programmes X11 pour savoir quel écran et quel serveur utiliser pour la sortie graphique ?",
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: "La variable DISPLAY (par ex. :0.0) indique au client le bon serveur X."
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quel est le remplaçant moderne du système X Window, conçu pour être plus simple et plus sûr ?",
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: "Wayland est le successeur moderne de X11 sur de nombreuses distributions Linux."
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "Dans quel répertoire sont généralement stockés les extraits de configuration X11 modernes ?",
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: "Les systèmes modernes utilisent /etc/X11/xorg.conf.d/ pour des configurations modulaires plutôt qu'un seul fichier monolithique.",
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est utilisée pour autoriser un utilisateur distant spécifique à accéder à votre session X en utilisant un mécanisme de cookie ?",
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: "`xauth` gère le fichier .Xauthority contenant les jetons d'authentification MIT-MAGIC-COOKIE-1.",
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Comment autoriser n'importe quel hôte à se connecter à votre serveur X local (attention : non sécurisé) ?",
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: "xhost + désactive tout contrôle d'accès pour le serveur X."
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quel protocole permet d'exécuter des applications graphiques sur un serveur mais de les afficher sur un client via un réseau ?",
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: "XDMCP (X Display Manager Control Protocol) permet des sessions de connexion à distance via le réseau.",
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "Quel outil vous permet de changer la résolution et l'orientation de votre écran sous X11 via la ligne de commande ?",
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: "`xrandr` (X Resize, Rotate and Reflect) est l'utilitaire standard de configuration d'affichage.",
  },

  // ─── 106.2 Bureaux graphiques (6 questions) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quel composant fournit l'écran de connexion graphique et démarre la session utilisateur ?",
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: "Les Display Managers comme GDM ou LightDM gèrent l'authentification initiale de l'utilisateur."
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quel toolkit est principalement utilisé par l'environnement de bureau KDE Plasma ?",
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: "KDE est basé sur le toolkit Qt, tandis que GNOME utilise GTK."
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Lequel des éléments suivants n'est PAS un environnement de bureau Linux ?",
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: "Apache est un serveur web, pas un environnement de bureau.",
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quelle est la tâche principale d'un gestionnaire de fenêtres (Window Manager) ?",
    options: [
      'Vérifier les mots de passe des utilisateurs',
      'Fournir des cadres de fenêtres, des titres et des commandes (minimiser/maximiser)',
      'Gérer les connexions réseau',
      'Installer les pilotes de carte graphique'
    ],
    correct: 1,
    explanation: "Les gestionnaires de fenêtres (comme Openbox ou Mutter) gèrent l'apparence et l'emplacement des fenêtres d'application.",
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quelle technologie permet à un utilisateur d'accéder à un bureau graphique sur un serveur distant via une connexion à faible bande passante ?",
    options: ['VNC', 'SSH avec -X', 'RDP', 'Toutes les réponses ci-dessus'],
    correct: 3,
    explanation: "VNC, RDP et le transfert X via SSH sont des méthodes courantes d'accès à distance.",
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Spice est un protocole d'affichage à distance principalement utilisé avec quelle technologie de virtualisation ?",
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: "Spice est fortement utilisé dans les environnements KVM pour fournir un accès distant haute performance aux machines virtuelles.",
  },

  // ─── 106.3 Accessibilité (6 questions) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quelle fonctionnalité d'accessibilité permet à un utilisateur d'appuyer sur des touches de modification (comme Ctrl ou Maj) de manière séquentielle plutôt que simultanément ?",
    options: [
      'Touches lentes (Slow Keys)',
      'Touches rémanentes (Sticky Keys)',
      'Touches rebonds (Bounce Keys)',
      'Touches souris (Mouse Keys)'
    ],
    correct: 1,
    explanation: "Les touches rémanentes (Sticky Keys) aident les utilisateurs qui ont des difficultés à appuyer sur plusieurs touches à la fois."
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Quel lecteur d'écran est couramment utilisé dans l'environnement de bureau GNOME pour l'accessibilité ?",
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: "Orca est le lecteur d'écran et la loupe par défaut pour GNOME."
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quelle fonctionnalité ignore les pressions de touches brèves ou répétées rapidement de la même touche ?",
    options: ['Touches lentes', 'Touches rémanentes', 'Touches rebonds', 'Touches de répétition'],
    correct: 2,
    explanation: "Les touches rebonds (Bounce Keys) sont destinées aux utilisateurs ayant des tremblements qui pourraient frapper accidentellement une touche plusieurs fois.",
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quel est le but de la fonctionnalité d'accessibilité 'Touches lentes' (Slow Keys) ?",
    options: [
      'Elle ralentit le pointeur de la souris',
      "Elle nécessite qu'une touche soit maintenue enfoncée pendant un certain temps avant qu'elle ne soit acceptée",
      'Elle lit le texte à l\'écran lentement',
      'Elle réduit le taux de rafraîchissement du moniteur'
    ],
    correct: 1,
    explanation: "Les touches lentes (Slow Keys) aident à éviter les frappes accidentelles en exigeant une pression prolongée.",
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Quelle fonctionnalité permet de contrôler le pointeur de la souris à l'aide du pavé numérique du clavier ?",
    options: ['Sticky Mouse', 'Numeric Cursor', 'Touches souris', 'Key Mouse'],
    correct: 2,
    explanation: "Les touches souris (Mouse Keys) permettent de diriger le pointeur visuel à l'aide du clavier.",
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Les terminaux braille et les loupes d'écran appartiennent à quel type de technologies ?",
    options: ['Technologies d\'assistance', 'Extensions visuelles', 'Pilotes matériels', 'Modules Noyau'],
    correct: 0,
    explanation: "Ce sont des technologies d'assistance (AT) qui aident les utilisateurs ayant des limitations physiques à interagir avec le système.",
  },
];
