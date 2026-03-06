// RHCSA Quiz — Topic 1: Essential Tools (French)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesFR = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quel opérateur redirige à la fois la sortie standard (stdout) ET l\'erreur standard (stderr) vers le même fichier ?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> redirige à la fois la sortie standard (file descriptor 1) et l\'erreur standard (file descriptor 2) vers un même fichier.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Que fait la commande `ls -la /etc >> /tmp/output.txt` ?',
    options: [
      'Elle écrase /tmp/output.txt avec le contenu de /etc',
      'Elle ajoute la sortie de ls à la fin de /tmp/output.txt',
      'Elle redirige les erreurs de ls vers /tmp/output.txt',
      'Elle crée un lien physique entre /etc et /tmp/output.txt',
    ],
    correct: 1,
    explanation: '>> (append) ajoute la sortie à la fin du fichier, sans rien écraser.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Vous voulez exécuter `find / -name "*.log"` en supprimant uniquement les erreurs "Permission denied" (Permission non accordée). Quelle commande utilisez-vous ?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null redirige le flux d\'erreurs (file descriptor 2) vers /dev/null, écartant ainsi seulement les erreurs.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'À quoi sert le tube (pipe) `|` dans `ps aux | grep httpd` ?',
    options: [
      'À sauvegarder la sortie de ps aux dans un fichier nommé "grep httpd"',
      'À passer la sortie de ps aux comme entrée à la commande grep httpd',
      'À exécuter ps aux et grep httpd en parallèle sans lien',
      'À rediriger les erreurs de ps aux vers grep',
    ],
    correct: 1,
    explanation: 'Le tube (pipe) | connecte la sortie (stdout) de la première commande à l\'entrée (stdin) de la deuxième, créant une chaîne de données.',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande envoie à la fois stdout et stderr vers /dev/null (silence total) ?',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null redirige la sortie standard, puis 2>&1 force la sortie d\'erreur (2) à pointer là où pointe la sortie standard (1) (soit /dev/null). C\'est l\'équivalent de &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'À quel descripteur de fichier (file descriptor) correspond stderr ?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'Descripteurs standards : 0=stdin (entrée), 1=stdout (sortie), 2=stderr (erreur).',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Que représente `/dev/null` ?',
    options: [
      'Un fichier vide qui ne peut contenir que du texte',
      'Un périphérique spécial (trou noir) qui détruit tout ce qu\'il reçoit',
      'Le fichier de log du noyau (kernel log)',
      'Un lien symbolique vers le répertoire personnel (home)',
    ],
    correct: 1,
    explanation: '/dev/null est un pseudo-périphérique spécial (null device) qui détruit silencieusement toutes les données écrites à l\'intérieur.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Comment utiliser `tee` pour voir la sortie à l\'écran ET la sauvegarder dans un fichier simultanément ?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` lit depuis stdin, écrit en même temps sur stdout (l\'écran) et dans le fichier spécifié.',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle option de grep permet d\'ignorer la casse (majuscules/minuscules) ?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) rend grep insensible à la casse : `grep -i "erreur" fichier`.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande affiche les lignes de /etc/passwd qui NE contiennent PAS "nologin" ?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) affiche uniquement les lignes qui ne correspondent pas au motif.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Dans une expression régulière (Regex), que signifie le motif `^root` ?',
    options: [
      'Le mot "root" situé n\'importe où dans la ligne',
      'Toutes les lignes qui commencent par "root"',
      'Toutes les lignes qui finissent par "root"',
      'N\'importe quel caractère suivi de "root"',
    ],
    correct: 1,
    explanation: '^ est l\'ancre (anchor) qui définit le début de ligne. `^root` cherchera uniquement les lignes débutant par "root".',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle option de grep compte le nombre total de lignes correspondantes sans les afficher ?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) affiche uniquement le nombre statique de lignes où le motif a été trouvé.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande active l\'utilisation des Expressions Régulières Étendues (ERE) ?',
    options: ['grep "motif"', 'grep -E "motif"', 'grep -n "motif"', 'grep -v "motif"'],
    correct: 1,
    explanation: '-E (ou egrep) active le mode d\'Expression Régulière Étendue, permettant d\'utiliser les caractères +, ?, |, () sans avoir à les échapper.',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Quelle commande grep trouve les lignes qui commencent obligatoirement par un chiffre ?',
    options: [
      'grep "^[0-9]" fichier',
      'grep "$[0-9]" fichier',
      'grep "[0-9]$" fichier',
      'grep ".[0-9]" fichier',
    ],
    correct: 0,
    explanation: '`^` équivaut au début de la ligne, `[0-9]` désigne n\'importe quel chiffre. L\'ensemble capture les lignes commençant par un chiffre.',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle option permet de chercher de manière récursive dans tous les sous-dossiers ?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) oblige grep à fouiller tous les sous-répertoires. Extrêmement utile pour scruter /etc/.',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'À quelle permission en format octal correspond `rwxr-xr-x` ?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=7 (4+2+1), r-x=5 (4+0+1), r-x=5 (4+0+1) → 755.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande crée un lien symbolique de /etc/hosts vers /tmp/hosts ?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s` forge un lien symbolique. Sans le paramètre -s cela créerait un lien dur (hard link).',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle est la différence fondamentale entre un lien en dur (hard link) et un lien symbolique ?',
    options: [
      'Les liens symboliques s\'exécutent plus vite que les liens durs',
      'Les liens durs partagent le même i-node ; les liens symboliques ne sont qu\'un fichier pointant vers un chemin',
      'Les liens durs peuvent traverser les partitions ; pas les liens symboliques',
      'Les liens symboliques ne peuvent pas cibler des fichiers texte',
    ],
    correct: 1,
    explanation: 'Le lien en dur pointe vers la même adresse physique, le même Inode sur la même partition. Le lien symbolique n\'est qu\'un pointeur textuel (raccourci).',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle ligne de commande ajoute le droit d\'exécution spécifiquement au propriétaire (user), sans modifier les autres permissions ?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`chmod u+x` (User + eXecute) octroie au propriétaire (user) le droit d\'exécuter le fichier.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quelle commande altère à la fois de manière atomique le propriétaire ET le groupe d\'un fichier ?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown utilisateur:groupe fichier` permet de basculer la propriété de l\'utilisateur et du groupe en une seule frappe rapide.',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande compresse avec GZIP le répertoire /home/mario pour générer une archive tar.gz nommée backup.tar.gz ?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'c=create, z=compress with gzip, v=verbose, f=file name. D\'où la commande `tar -czvf archive.tar.gz source`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quel flag du programme tar invoque la compression bzip2 (qui génère des fichiers .tar.bz2) ?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'La lettre magique `j` = bzip2 (.tar.bz2), `z` = gzip (.tar.gz) et le Grand `J` = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Comment décompresser (extraire) une archive tar.gz directement dans le dossier distant /opt/ depuis ton répertoire actuel ?',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: '-C (grand C) précise le répertoire de chute (Change directory) où le tar explosera l\'extraction.',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande extirpe la page de manuel de la section 5 (dédiée aux fichiers de configuration) pour renseigner sur le fichier "passwd"?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man N command` cible la section. Section 1=Exécutables utilisateurs, Section 5=Format des fichiers conf, Section 8=Outils d\'administration.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Dans les systèmes basés sur RedHat, où repose de façon habituelle la documentation locale apportée par les paquets RPM ?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: 'Le monde Linux regroupe historiquement les README, exemples de config et licences sous `/usr/share/doc/`.',
  },
]
