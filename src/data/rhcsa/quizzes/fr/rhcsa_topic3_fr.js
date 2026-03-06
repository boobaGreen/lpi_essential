// RHCSA Quiz — Topic 3: Running System Management (French)
// 22 MCQ questions

export const rhcsaTopic3QuizzesFR = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle cible (target) systemd correspond historiquement à l\'ancien runlevel 3 (multi-utilisateur, sans interface graphique) ?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: '`multi-user.target` incarne l\'ancien runlevel 3 (Console texte). `graphical.target` incarne quant à lui le runlevel 5 (GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Comment modifier la cible par défaut du système pour que le changement persiste après les redémarrages ?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: '`systemctl set-default <cible>` fixe et crée un lien symbolique maître dans `/etc/systemd/system/default.target` dictant comment Booter à tout jamais.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Pendant le boot, quel paramètre noyau (kernel parameter) l\'admin ajoute-t-il dans GRUB afin d\'interrompre la séquence et obtenir un shell d\'urgence (souvent utilisé pour réinitialiser le pass root) ?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: '`rd.break` freine brusquement le démarrage en plein milieu de la phase initramfs, c\'est-à-dire précisément avant que /sysroot ne devienne root total.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Après avoir usé de rd.break pour réinitialiser le mot de passe root de force sur un RHEL9 avec SELinux actif, quelle commande magique dois-tu graver sur l\'arbre avant de rebooter la machine ?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'Un `touch /.autorelabel` garantit que SELinux recalculera méthodiquement tous ses contextes et tags pour tout fichier altéré hors de son contrôle lors de ce démarrage sauvage.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande rabaisse sauvagement un PC allumé normal vers la cible de sauvetage exclusive \`rescue.target\` (mode mono-utilisateur) TANT PIS pour l\'uptime ?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'Le verbe `isolate` dans systemctl détruit brusquement les services non essentiels de là cible et vous isole sur-le-champ (équivalent init 1 live).',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quel est le moyen le plus sûr de demander "Dis-moi, système, quelle est la cible sur laquelle ton boot se branchera la prochaine fois que tu redémarreras ?"',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: '`systemctl get-default` réclame à SystemD l\'affichage en texte brut de ce pointeur.',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quel signal précis envoie brutalement le commandement `kill -9 <PID>` ?',
    options: [
      'SIGTERM (15) — terminaison douce amicale',
      'SIGKILL (9) — meurtre foudroyant immédiat',
      'SIGHUP (1) — recharger simple la config',
      'SIGSTOP (19) — figer sur place sans l\'abattre',
    ],
    correct: 1,
    explanation: 'SIGKILL (9) est infaillible. Le noyau fauche le processus sur l\'instant avec zero délicatesse. Rien ne peut ignorer (catch) cette faux.',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle syntaxe modifie "à vif" la priorité d\'amabilité (nice) d\'un processus DÉJÀ en cours d\'exécution (ex: PID 1234) pour la forcer à la valeur -5 ?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: '`renice` (ré-aimabiliser) tape sur un programme vivant; le -n définit la jauge amabilité, -p le pointe. La commande nice quant à elle ne s\'utilise que pour appeler de toutes pièces un programme avec du prioritaire.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Dans la notation historique `nice`, quelle limite mathématique garantit qu\'un programme vole TOUT le temps de calcul maximum au CPU sans clémence ?',
    options: [
      '100 (la valeur astronomique)',
      '-20 (l\'amabilité minimale négative)',
      '+19 (la courtoisie extrême)',
      '0 (le défaut mortel)',
    ],
    correct: 1,
    explanation: 'En Linux, avoir un "nice" bas implique que tu agisses tel d\'un goujat, égoïste accaparant le CPU (valeur de -20 = egoistissime. C\'est l\'apanage dictatorial de root).',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande affiche magistralement tous les processus et threads vivants émanant de tous les utilisateurs dans le très renommé "format BSD étendu" ?',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: '`ps aux` est un indispensable. `a` inclut les spectateurs/users, `u` imprime leurs colonnes CPU/MEM, `x` englobe les deamons tapis en arrière fond (sans shell).',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande lance spécifiquement un soft kill diplomatique SIGTERM au processus nommé directement "httpd" sans même devoir chercher son PID ?',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: '`killall` massacre tout binaire répondant au nom visé d\'un coup, sans s\'encombrer de chercher la ribambelle PIDs et en leur infligeant par defaut ce -15 (SIGTERM). Pkill quant à lui le fait mais ciblerait en regex.',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Comment arraches-tu une lourde tâche (Job ID %2) mise en pause de l\'arrière plan, la propulsant ainsi brutalement au premier plan visuel de ton terminal interactif ?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: '`fg` (Foreground) tire en avant un thread background/suspendu. Inversement `bg` (Background) commande subtilement à la tâche figée de courir discrètement sans faire de bruit derrière l\'écran.',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quelle formulation condense la directive d\'Habiliter un service (pour le boot) ET de le Start instantanément en plein vol sans attendre la moindre seconde ?',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'L\'ajout inestimable de flag `--now` couplé avec *enable*, force d\'un geste un start simultané au daemon visé.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Quelle est la distinction cardinale au sein de systemctl entre invoquer `stop` plutôt que `disable` ?',
    options: [
      'Même chose en arrière-plan',
      'Stop freine tout net le service aujourd\'hui ; mais ne prémunit aucun redémarrage naturel demain (Disable lui rompt tout lien d\'autostart du lendemain)',
      'Disable stoppe immédiatement le service par nature',
      'Stop supprime fatalement la machine du journal',
    ],
    correct: 1,
    explanation: 'Attention : Stop ne le rend pas amnésique au boot suivant. Disable ne l\'arrête pas aujourd\'hui, il brise l\'autostart suivant.',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Comment empêcher absolument et totalement que ce service ne soit JAMAIS invoqué bêtement un beau jour manuellement par un administrateur somnolant sur RHEL9 ?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: '`mask` jette un puissant sortilège de malédiction créant un lien trompeur emmurant la configuration de l\'Unité vers /dev/null, rendant nul l\'accès du daemon à la vie.',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'L\'ultime commande basique pour scanner en lisant la fiche clinique récente, le passif loggué et l\'état de vol ou mort du PID de Systemd ?',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: 'Bien vu, `status` déballe le graal tout-en-un sur les 10 dernières traces logs, le fichier unit path et le runtime PID status vivo.',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'CATASTROPHE... Tu as manuellement altéré dans tes configs Systemd crudes un fichier (.service). Tant que tu n\'exécuteras quelle injonction systemD snobbera brutalement ton fichier altéré en ignorant qu\'il a muté ?',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'Sans `daemon-reload`, le cœur profond de systemd, n\'actualisera pas ses caches avec ta nouvelle ré-édition et il lancera la config fantôme passée qui vit déjà cacheé en RAM de SystemD.',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Quel est l\'outil et flag par de-facto du système (journald) pour coller passivement la rétine à la matrice en regardant le journal de bord entier SystemD s\'auto-imprimer indéfiniment en temps-réel à l\'écran ?',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'La touche `-f` (Follow) fait boucler ton visionnement, rafraîchissant sans cesse. tail historique et archaïque cède sa place moderne au surpuissant filtre de journalctl.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Le serveur est enseveli de messages; filtre radicalement le journal pour lui exiger par force TOUS (et seulement CEUX) les logs crachés isolément de la source fautive `sshd`.',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: 'Le flag `-u` correspond à l\'Unité systemD ciblée (ici sshd.service) extirpant alors le bruit blanc de fond pour garder tout ce que son PID respectif à balancé et consigné en erreur.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Les logs journalctl RHEL9 subissent de base l\'amnésie foudroyante par défaut au premier redémarrage du kernel. Editez ce config file spécifique sur Disque afin d\'injecter "Storage=persistent".',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: 'Dans `journald.conf` en dé-commetant pour `auto` (et si créer la dir mkdir /var/log/journal suffira en 9) ou en l\'assignent explicitement `persistent` tu as gagné face à l\'amnésie vive de `volatile`.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Ton patron veut un backup chaque nuit par script. Comment ouvres-tu l\'éditeur secret vi dédié pour configurer légalement les crons temporels spécifiques dévolus à TON compte loggé utilisateur récurrent ?',
    options: [
      'sudo vi /etc/cron.d/monJob',
      'crontab -e',
      'vi /var/spool/cron/monNomDutilisateur',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'Ne modifie JAMAIS brutalement la zone pure spool à la hache. Fais simple : tapes `crontab -e` (edit). Le moteur Cron évaluera le format sans t\'invalider si possible.',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Le redouté format 5 digit des plannings (Min H J M Sem). Identifie l\'exact syntaxe pour ordonner au Kernel "Ce script run TOUS les Lundi pile à 3h30 du matin".',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Lecture sacrée : minute(30), heure(3), mois_jour(*), mois(*), La Semaine(1. Sachant lundi de RHCSA = 1. Dimanche = 0).',
  },
]
