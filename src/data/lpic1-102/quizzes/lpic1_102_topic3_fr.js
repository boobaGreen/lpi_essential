// LPIC-1 102 Quiz Pool — French — Topic 107 (Tâches administratives)

export const lpic1_102_topic3Quizzes_fr = [
  // ─── 107.1 Gérer les comptes utilisateurs et de groupes et les fichiers système associés (8 questions) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Dans quel fichier les mots de passe chiffrés et les données d'expiration de compte sont-ils stockés sur la plupart des systèmes Linux modernes ?",
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: "/etc/shadow n'est lisible que par root et contient les empreintes des mots de passe."
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est utilisée pour changer les paramètres d'expiration de mot de passe ?",
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: "chage (change age) est l'outil pour gérer les politiques d'expiration des mots de passe."
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Que représente le troisième champ dans le fichier /etc/passwd ?",
    options: [
      'Nom d\'utilisateur',
      'ID de groupe (GID)',
      'ID d\'utilisateur (UID)',
      'Répertoire personnel'
    ],
    correct: 2,
    explanation: "Le format est Utilisateur:MotDePasse:UID:GID:Commentaire:Home:Shell."
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Quelle commande affiche l'identifiant de l'utilisateur (UID) et les identifiants de groupe (GID) de l'utilisateur actuel ?",
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: "La commande `id` fournit des informations complètes sur l'identité d'un utilisateur."
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quel fichier contient la liste des groupes et leurs membres ?",
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: "/etc/group définit les groupes disponibles sur le système.",
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Quelle commande permet d'ajouter un utilisateur à un groupe secondaire sans le supprimer de ses groupes actuels ?",
    options: ['usermod -g groupe user', 'usermod -aG groupe user', 'useradd -G groupe user', 'groupmod -A user groupe'],
    correct: 1,
    explanation: "`usermod -aG` (append group) ajoute l'utilisateur aux groupes spécifiés sans affecter son groupe principal ou ses groupes secondaires déjà configurés.",
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Quel fichier est consulté par la commande `useradd` pour déterminer la base par défaut du répertoire personnel et le répertoire squelette ?",
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', 'À la fois /etc/login.defs et /etc/default/useradd'],
    correct: 3,
    explanation: "Les deux fichiers fournissent des valeurs par défaut pour le processus de création de compte.",
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande supprime un compte utilisateur et, en option, retire son répertoire personnel ?",
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: "`userdel -r` supprime l'utilisateur ainsi que les fichiers présents dans son répertoire personnel.",
  },

  // ─── 107.2 Automatiser les tâches d'administration système (6 questions) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Dans un fichier crontab, que représente le premier champ (à l'extrême gauche) ?",
    options: [
      'Heure',
      'Mois',
      'Minute',
      'Jour de la semaine'
    ],
    correct: 2,
    explanation: "Les horaires cron commencent par les minutes (0-59)."
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Quelle commande affiche la file d'attente des travaux planifiés avec la commande 'at' ?",
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: "atq signifie 'at queue' (file d'attente at)."
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quel répertoire est utilisé pour les tâches crontab système exécutées toutes les heures ?",
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: "/etc/cron.hourly/ est l'emplacement où le système cherche les scripts à exécuter chaque heure.",
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Quel outil permet d'exécuter des tâches récurrentes à un moment donné, mais gère également les cas où le système était éteint pendant l'horaire prévu ?",
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: "`anacron` est conçu pour les systèmes qui ne fonctionnent pas 24h/24.",
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Comment éditer son fichier crontab personnel de manière sécurisée ?",
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/user'],
    correct: 1,
    explanation: "`crontab -e` ouvre la crontab utilisateur dans l'éditeur par défaut et valide la syntaxe à l'enregistrement.",
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Quel fichier spécifie les utilisateurs à qui l'utilisation de la commande `at` est explicitement interdite ?",
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: "/etc/at.deny liste les utilisateurs qui ne peuvent pas planifier de travaux avec `at`.",
  },

  // ─── 107.3 Localisation et internationalisation (6 questions) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Quelle variable d'environnement spécifie la langue et l'encodage par défaut pour le système ?",
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: "LANG est la variable principale pour les paramètres de localisation (locales)."
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Comment le fuseau horaire local est-il généralement configuré sur un système Linux ?",
    options: [
      'En éditant /etc/timezone.conf',
      'En liant /usr/share/zoneinfo/ avec /etc/localtime',
      'En définissant la variable TZ dans /etc/profile',
      'En exécutant la commande "clockset"'
    ],
    correct: 1,
    explanation: "Un lien symbolique entre /etc/localtime et un fichier dans zoneinfo est la méthode standard.",
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Quelle variable écrase, si elle est définie, toutes les autres variables d'environnement LC_* ?",
    options: ['LC_FORCE', 'LC_ALL', 'LANG', 'LC_OVERRIDE'],
    correct: 1,
    explanation: "`LC_ALL` a la priorité la plus élevée et remplace les catégories individuelles ainsi que la variable LANG.",
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est utilisée pour convertir l'encodage d'un fichier, par exemple de ISO-8859-1 vers UTF-8 ?",
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: "`iconv` (Internationalization Conversion) est l'utilitaire standard de conversion d'encodage.",
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande affiche la date système actuelle, l'heure et le fuseau horaire ?",
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: "`date` affiche l'heure système et peut également l'ajuster.",
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Quel est le but d'Unicode (et de son encodage UTF-8) ?",
    options: [
      'Fournir un moyen de compresser les fichiers texte',
      'Fournir un jeu de caractères universel pour toutes les langues',
      'Définir une norme de chiffrement pour le trafic web',
      'Accélérer la vitesse de traitement des requêtes de base de données'
    ],
    correct: 1,
    explanation: "Unicode attribue un numéro unique à chaque caractère, quels que soient la plate-forme ou le langage.",
  },
];
