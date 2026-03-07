// LPIC-1 102 Quiz Pool — French — Topic 108 (Services système essentiels)

export const lpic1_102_topic4Quizzes_fr = [
  // ─── 108.1 Maintenir l'heure du système (5 questions) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande permet de synchroniser l'horloge matérielle (RTC) avec l'heure du système (logiciel) ?",
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: "--systohc copie la valeur de l'heure système dans l'horloge matérielle."
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Quel est le protocole standard utilisé pour synchroniser l'heure du système via un réseau ?",
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: "Le protocole NTP (Network Time Protocol) est utilisé pour maintenir la précision des horloges système via des serveurs de temps.",
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quel utilitaire moderne de systemd est utilisé pour consulter et modifier les paramètres de l'horloge système ?",
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: "`timedatectl` gère les paramètres d'heure, de date et de fuseau horaire sur les distributions basées sur systemd.",
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Quel logiciel est un remplaçant courant du ntpd classique, conçu pour synchroniser l'heure plus rapidement et avec plus de précision sur les systèmes à connexion intermittente ?",
    options: ['chrony', 'timesync', 'sync-ntp', 'timed'],
    correct: 0,
    explanation: "Chrony est une implémentation alternative de NTP particulièrement adaptée aux systèmes qui ne sont pas toujours en ligne.",
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "L'horloge matérielle (RTC) est généralement configurée sur quel standard de temps sur les serveurs Linux ?",
    options: ['Heure locale', 'PST', 'UTC', 'GMT+1'],
    correct: 2,
    explanation: "Les systèmes Linux s'attendent généralement à ce que l'horloge matérielle soit en temps universel coordonné (UTC).",
  },

  // ─── 108.2 Journalisation du système (Logging) (5 questions) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Quel utilitaire est chargé de la rotation automatique des fichiers journaux pour éviter qu'ils ne remplissent le disque ?",
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: "logrotate effectue la rotation, la compression et gère la durée de conservation des journaux texte."
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Quelle commande journalctl permet de voir les messages journaux en temps réel au fur et à mesure qu'ils arrivent ?",
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: "-f (follow) fonctionne de manière similaire à 'tail -f' pour le journal binaire."
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Quel est le nom du démon systemd qui collecte les messages journaux au format binaire ?",
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: "systemd-journald est le démon qui gère le 'journal' binaire."
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Où se trouve le fichier de configuration principal du démon rsyslog ?",
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: "/etc/rsyslog.conf définit la façon dont les journaux sont filtrés et où ils sont stockés.",
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Quelle commande permet à un utilisateur d'envoyer manuellement un message au journal du système depuis un script ?",
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: "La commande `logger` fournit une interface shell au module de journalisation du système syslog(3).",
  },

  // ─── 108.3 Notions de Mail Transfer Agent (MTA) (5 questions) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Dans quel fichier de configuration peut-on définir des alias pour des adresses e-mail locales sur le système ?",
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: "/etc/aliases définit les redirections pour les messages e-mail locaux."
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Lequel des éléments suivants n'est PAS un Mail Transfer Agent (MTA) ?",
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: "Apache est un serveur web, pas un agent de transfert de courrier.",
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande doit être exécutée après l'édition de /etc/aliases pour que les changements prennent effet ?",
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: "`newaliases` reconstruit la base de données utilisée par le MTA pour les recherches.",
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande permet à un administrateur de voir la file d'attente actuelle des messages e-mail sortants ?",
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: "`mailq` (ou `mail -bp`) liste tous les messages actuellement dans la file d'attente de courrier.",
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Sous Postfix, quel est le fichier de configuration principal utilisé pour définir les paramètres globaux comme `myhostname` ?",
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: "main.cf est le fichier de configuration principal pour les paramètres de Postfix.",
  },

  // ─── 108.4 Gérer les imprimantes et l'impression (5 questions) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Sur quel port par défaut l'interface web d'administration de CUPS répond-elle ?",
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: "CUPS utilise le port 631 pour le protocole IPP et l'interface web."
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est utilisée pour supprimer un travail d'impression spécifique de la file d'attente ?",
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: "lprm (line printer remove) supprime les travaux de la file d'attente CUPS."
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Quelle commande affiche l'état des files d'attente d'impression sur un système ?",
    options: ['lpstat', 'lpq', 'lpc status', 'Toutes les réponses ci-dessus'],
    correct: 3,
    explanation: "`lpstat`, `lpq` et `lpc status` sont toutes des commandes valides pour vérifier l'état des imprimantes dans les environnements CUPS modernes.",
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quel outil est la commande principale de l'imprimante ligne utilisée pour envoyer un travail à une imprimante ?",
    options: ['lp', 'lpr', 'À la fois lp et lpr sont valides', 'sendprint'],
    correct: 2,
    explanation: "Sous CUPS, la commande System V `lp` et la commande BSD `lpr` sont toutes deux officiellement supportées.",
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Quel est le nom du fichier de configuration principal du démon CUPS ?",
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: "`cupsd.conf` est le fichier de configuration principal pour le planificateur CUPS.",
  },
];
