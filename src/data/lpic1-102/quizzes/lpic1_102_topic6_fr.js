// LPIC-1 102 Quiz Pool — French — Topic 110 (Sécurité)

export const lpic1_102_topic6Quizzes_fr = [
  // ─── 110.1 Effectuer des tâches d'administration de la sécurité (7 questions) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande permet de trouver tous les fichiers du système qui ont le bit SUID activé ?",
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: "find avec -perm /4000 (ou -4000) recherche les fichiers avec le bit SUID activé."
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est fortement recommandée pour modifier le fichier /etc/sudoers afin d'éviter les erreurs de syntaxe ?",
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: "visudo effectue une vérification de syntaxe avant d'enregistrer, évitant ainsi les erreurs qui pourraient bloquer l'accès sudo."
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Quelle commande affiche une liste des derniers utilisateurs connectés et leurs horaires ?",
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: "La commande `last` recherche dans le fichier /var/log/wtmp pour montrer l'historique de connexion des utilisateurs.",
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Comment accordez-vous des privilèges administratifs à un utilisateur dans le fichier /etc/sudoers en utilisant un nom de groupe ?",
    options: ['ADMIN ALL=(ALL) ALL', '%admin ALL=(ALL) ALL', 'group admin: ALL', '@admin ALL=(ALL) ALL'],
    correct: 1,
    explanation: "Le préfixe `%` dans le fichier sudoers indique que le nom qui suit est un groupe système.",
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Quelle commande est utilisée pour lister tous les fichiers ouverts et les processus qui les ont ouverts, souvent utilisée lors d'audits de sécurité ?",
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: "`lsof` (List Open Files) est un outil essentiel pour vérifier quel processus accède à des fichiers ou sockets spécifiques.",
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quel utilitaire est utilisé pour limiter le nombre maximal de processus ouverts par un utilisateur dans le shell actuel ?",
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: "ulimit (user limit) permet de définir des limites de ressources pour le shell et ses processus fils."
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Dans quel fichier pouvez-vous définir des limites de ressources persistantes par utilisateur, telles que la taille maximale de fichier ou le nombre de connexions ?",
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: "/etc/security/limits.conf est utilisé par le module pam_limits pour appliquer les ressources système.",
  },

  // ─── 110.2 Configurer la sécurité de l'hôte (6 questions) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Quel est l'effet du 'Sticky Bit' configuré sur un répertoire comme /tmp ?",
    options: [
      "Rend les fichiers du répertoire immuables",
      "Permet uniquement au propriétaire du fichier (ou root) de supprimer ou de renommer le fichier",
      "Chiffre automatiquement tous les fichiers créés à l'intérieur",
      "Garantit que le répertoire reste toujours en mémoire vive (RAM)"
    ],
    correct: 1,
    explanation: "Le Sticky Bit sur des répertoires accessibles en écriture par tous garantit que les utilisateurs ne peuvent pas supprimer les fichiers des autres."
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Quel fichier est utilisé pour interdire explicitement l'accès aux services protégés par les TCP Wrappers ?",
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: "Les TCP Wrappers utilisent /etc/hosts.allow et /etc/hosts.deny pour le contrôle d'accès."
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande identifie quels ports réseau sont actuellement ouverts et à l'écoute sur votre serveur ?",
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', 'Toutes les réponses ci-dessus'],
    correct: 3,
    explanation: "`nmap`, `ss` et `netstat` peuvent tous être utilisés pour auditer les services réseau à l'écoute.",
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Quel utilitaire GnuPG est utilisé pour chiffrer un fichier de manière symétrique (par mot de passe) ?",
    options: [
      'gpg --gen-key',
      'gpg -c fichier',
      'gpg --encrypt fichier',
      'gpg --sign fichier'
    ],
    correct: 1,
    explanation: "L'option -c (symmetric) chiffre le fichier en demandant une phrase de passe manuelle."
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Comment lister toutes les clés publiques de votre trousseau (keyring) GPG ?",
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: "`gpg --list-keys` (ou `gpg -k`) affiche les clés publiques actuellement dans votre stockage local.",
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Quel problème de sécurité des anciens fichiers /etc/passwd les mots de passe 'shadow' (cachés) résolvent-ils ?",
    options: [
      "Ils empêchent les utilisateurs de se connecter plusieurs fois",
      "Ils déplacent les empreintes chiffrées dans un fichier lisible uniquement par root",
      "Ils imposent automatiquement des mots de passe complexes",
      "Ils chiffrent le nom d'utilisateur"
    ],
    correct: 1,
    explanation: "/etc/passwd est lisible par tous, tandis que /etc/shadow est restreint à root, protégeant les empreintes des attaques hors ligne par cassage de mots de passe."
  },

  // ─── 110.3 Configuration de la sécurité au niveau de l'utilisateur (7 questions) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quel est l'effet du paramètre 'PermitRootLogin no' dans le fichier sshd_config ?",
    options: [
      "Empêche tout utilisateur de se connecter en tant que root via SSH",
      "Exige un mot de passe spécial pour l'utilisateur root",
      "Autorise l'accès root uniquement via clés publiques",
      "Désactive complètement le compte root sur le système"
    ],
    correct: 0,
    explanation: "Cette directive empêche les attaques par force brute sur le compte root via le réseau."
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quel est le but de la commande 'ssh-agent' ?",
    options: [
      "Chiffrer tout le disque dur",
      "Stocker les clés privées déchiffrées pour ne pas avoir à ressaisir la phrase de passe à chaque connexion",
      "Générer une nouvelle paire de clés SSH",
      "Surveiller les tentatives de connexion SSH échouées"
    ],
    correct: 1,
    explanation: "L'agent SSH conserve les clés en mémoire pendant la session utilisateur."
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Quel outil est utilisé pour générer une nouvelle paire de clés SSH publique/privée ?",
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: "`ssh-keygen` est l'outil standard pour créer des clés d'authentification pour SSH.",
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Où la clé publique d'un utilisateur est-elle typiquement stockée sur un serveur distant pour permettre la connexion sans mot de passe ?",
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: "Le fichier `authorized_keys` contient toutes les clés publiques autorisées à se connecter en tant que cet utilisateur.",
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Quel est le nom de fichier par défaut pour la clé privée RSA d'un utilisateur ?",
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: "`id_rsa` est le nom standard pour la partie privée d'une paire de clés RSA.",
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est utilisée pour copier facilement votre clé publique SSH sur un serveur distant ?",
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: "`ssh-copy-id` gère la connexion et ajoute votre clé publique au fichier authorized_keys distant.",
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Quel paramètre dans sshd_config devrait être réglé sur 'no' pour imposer UNIQUEMENT l'authentification par clés ?",
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: "Régler `PasswordAuthentication no` désactive la connexion par mot de passe, faisant des clés la seule option."
  },
];
