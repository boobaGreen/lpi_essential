export const memoryGameData = [
  { command: 'export', description: 'Définit une variable globalement' },
  { command: 'alias', description: 'Raccourcis de commandes' },
  { command: 'source', description: 'Exécute un script dans le shell actuel' },
  { command: '/etc/skel', description: 'Modèle pour les nouveaux homes' },
  { command: 'DISPLAY', description: 'Cible de sortie graphique X11' },
  { command: 'Wayland', description: 'Successeur moderne de X11' },
  { command: 'Orca', description: 'Lecteur d\'écran (Accessibilité)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Mots de passe chiffrés' },
  { command: 'chage', description: 'Gère l\'expiration des mots de passe' },
  { command: 'crontab -e', description: 'Édition des tâches planifiées' },
  // Topic 108
  { command: 'hwclock', description: 'Gère l\'horloge matérielle' },
  { command: 'journalctl', description: 'Lit les logs de systemd' },
  { command: 'logrotate', description: 'Rotation automatique des logs' },
  { command: 'CUPS', description: 'Système d\'impression' },
  // Topic 109
  { command: 'ip addr', description: 'Affiche les adresses IP' },
  { command: 'ping', description: 'Teste la connectivité' },
  { command: 'dig', description: 'Requête DNS' },
  // Topic 110
  { command: 'SUID', description: 'Exécution avec droits du proprio' },
  { command: 'visudo', description: 'Édition sécurisée de sudoers' },
  { command: 'ssh-keygen', description: 'Génère des clés SSH' },
];

export const trueFalseData = [
  { text: '/etc/skel sert de base pour les nouveaux utilisateurs.', answer: true, explanation: 'Vrai ! C\'est le squelette du home.', difficulty: 1 },
  { text: 'Le shebang #! doit être sur la dernière ligne.', answer: false, explanation: 'Faux. Il doit être sur la toute première ligne.', difficulty: 1 },
  { text: 'X11 est transparent au réseau.', answer: true, explanation: 'Vrai. Les applications peuvent être distantes.', difficulty: 1 },
  { text: '/etc/shadow est lisible par n\'importe quel utilisateur.', answer: false, explanation: 'Faux. Seul root peut le lire.', difficulty: 1 },
  { text: 'Le port par défaut de CUPS est 631.', answer: true, explanation: 'Vrai.', difficulty: 1 },
  { text: 'journalctl permet de lire des logs binaires.', answer: true, explanation: 'Vrai. Le journal systemd est binaire.', difficulty: 1 },
];

export const terminalChallengeData = [
  { id: 'tc-fr-1', description: 'Exporte la variable EDITOR à nano', prompt: 'export EDITOR=nano', expectedOutput: '', hint: 'Utilise export', difficulty: 1 },
  { id: 'tc-fr-2', description: 'Affiche ton UID et tes groupes', prompt: 'id', expectedOutput: '', hint: 'id', difficulty: 1 },
  { id: 'tc-fr-3', description: 'Vérifie la connexion vers google.com', prompt: 'ping google.com', expectedOutput: '', hint: 'ping', difficulty: 1 },
  { id: 'tc-fr-4', description: 'Génère une paire de clés SSH', prompt: 'ssh-keygen', expectedOutput: '', hint: 'ssh-keygen', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-fr-1',
    category: 'Fichiers de Configuration',
    question: 'Associez le fichier à son rôle :',
    items: [
      { text: '/etc/profile', matches: 'Login Global' },
      { text: '~/.bashrc', matches: 'Interactif Utilisateur' },
      { text: '/etc/skel', matches: 'Modèle nouvel utilisateur' },
    ],
  },
];

export const fillGapData = [
  { prompt: '_____ VAR="val"', answer: 'export', hint: 'Variable globale', difficulty: 1 },
  { prompt: 'Port standard HTTP : _____', answer: '80', hint: 'Entier', difficulty: 1 },
  { prompt: 'Fichier DNS : /etc/_____.conf', answer: 'resolv', hint: 'resolv', difficulty: 1 },
];
