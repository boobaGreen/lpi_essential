export const rhcsaLessonContentFR = {

  // ─── TOPIC 1: Outils Essentiels ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell et Redirection I/O',
      panels: [
        { emoji: '📤', text: '`>` écrase un fichier avec la sortie : `echo "hello" > fichier.txt` crée ou écrase.' },
        { emoji: '📥', text: '`>>` ajoute la sortie à la fin du fichier : `echo "ligne" >> fichier.txt` préserve le contenu.' },
        { emoji: '🔗', text: '`|` (pipe) passe la sortie d\'une commande à la suivante : `ls -l | grep ".txt"`.' },
        { emoji: '⚠️', text: '`2>` redirige uniquement les erreurs : `find / -name "*.conf" 2> /dev/null` cache les erreurs.' },
        { emoji: '🎯', text: '`&>` redirige à la fois stdout et stderr vers le même fichier : `commande &> sortie.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Opérateurs de redirection',
        items: [
          '`>` — écrase la sortie standard (stdout) vers un fichier',
          '`>>` — ajoute la sortie standard à un fichier',
          '`2>` — redirige l\'erreur standard (stderr) vers un fichier',
          '`2> /dev/null` — ignore les messages d\'erreur',
          '`&>` — redirige les deux (stdout et stderr) au même endroit',
          '`|` — connecte la sortie d\'un processus à l\'entrée d\'un autre',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep et Expressions Régulières',
      panels: [
        { emoji: '🔎', text: '`grep "motif" fichier` recherche les lignes contenant le motif dans le fichier.' },
        { emoji: '🚫', text: '`grep -v "motif"` affiche toutes les lignes SAUF celles qui correspondent.' },
        { emoji: '📏', text: '`^` correspond au début de ligne, `$` à la fin. `^root` trouve les lignes commençant par root.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` utilise des regex étendues avec alternative (OU).' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` compte le nombre de lignes correspondantes.' },
      ],
    },
    keyPoints: [
      {
        title: 'Options essentielles de grep',
        items: [
          '`-i` — insensible à la casse',
          '`-r` ou `-R` — recherche récursive dans les répertoires',
          '`-v` — inverse la correspondance (NON)',
          '`-n` — affiche les numéros de ligne',
          '`-E` — active les Expressions Régulières Étendues (ERE)',
          '`-w` — recherche des mots entiers uniquement',
        ],
      },
      {
        title: 'Métacaractères Regex de base',
        items: [
          '`.` — n\'importe quel caractère unique',
          '`*` — zéro ou plusieurs répétitions du caractère précédent',
          '`^` — ancrage en début de ligne',
          '`$` — ancrage en fin de ligne',
          '`[a-z]` — n\'importe quel caractère dans la plage spécifiée',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Permissions et Liens',
      panels: [
        { emoji: '🔐', text: 'Permissions UNIX : `rwxrwxrwx` — Utilisateur, Groupe, Autres. `chmod 755 fichier` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown mario:dev fichier` change le propriétaire en mario et le groupe en dev.' },
        { emoji: '🔗', text: 'Lien physique : `ln fichier lien` — même inode, survit si l\'original est supprimé.' },
        { emoji: '🔁', text: 'Lien symbolique : `ln -s /chemin/reel lien` — pointe vers un chemin (alias).' },
        { emoji: '📊', text: '`ls -l` montre : type, permissions, liens physiques, propriétaire, groupe, taille, date, nom.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — notation octale',
        items: [
          '`4` = lecture (r), `2` = écriture (w), `1` = exécution (x)',
          '`755` = rwxr-xr-x (typique pour les répertoires)',
          '`644` = rw-r--r-- (typique pour les fichiers standards)',
        ],
      },
      {
        title: 'Liens physiques vs symboliques',
        items: [
          'Lien physique : pointe vers les mêmes données sur disque ; ne peut pas traverser les systèmes de fichiers.',
          'Lien symbolique (Soft) : un petit fichier contenant le chemin vers le fichier réel.',
          '`ls -l` affiche `l` au début pour les liens symboliques.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Archives et Compression',
      panels: [
        { emoji: '📦', text: '`tar -czvf archive.tar.gz /rep` — crée une archive compressée avec gzip.' },
        { emoji: '📂', text: '`tar -xzvf archive.tar.gz` — extrait le contenu de l\'archive compressée.' },
        { emoji: '🔍', text: '`tar -tzvf archive.tar.gz` — liste le contenu sans rien extraire.' },
        { emoji: '⚡', text: 'Outils de compression : `gzip` (.gz), `bzip2` (.bz2), `xz` (.xz). XZ est le plus lent mais compresse mieux.' },
        { emoji: '💡', text: 'Retenez les drapeaux tar : c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Drapeaux essentiels de tar',
        items: [
          '`c` — créer une archive',
          '`x` — extraire une archive',
          '`t` — lister le contenu',
          '`f` — spécifier le nom du fichier (toujours à la fin !)',
          '`v` — mode verbeux (affiche la progression)',
        ],
      },
      {
        title: 'Formats de compression',
        items: [
          '`z` — gzip (rapide, standard)',
          '`j` — bzip2 (meilleure compression que gzip)',
          '`J` — xz (meilleur taux de compression, plus de CPU)',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/` from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 Documentation du Système',
      panels: [
        { emoji: '📖', text: '`man commande` — affiche le manuel complet. Naviguez avec les flèches, cherchez avec `/motif`, quittez avec `q`.' },
        { emoji: '❓', text: '`man -k mot` (ou `apropos`) cherche les commandes liées à un sujet.' },
        { emoji: 'ℹ️', text: '`info commande` — documentation plus détaillée et structurée que man.' },
        { emoji: '📁', text: '`/usr/share/doc/` contient README, CHANGELOG et exemples pour chaque paquet installé.' },
        { emoji: '💡', text: '`commande --help` — aide rapide en ligne. Très utile en examen pour se rappeler des options.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — sections et navigation',
        items: [
          'Section 1 : commandes utilisateur, 5 : fichiers de config, 8 : commandes root',
          '`man 5 passwd` — consulte le format du fichier /etc/passwd (pas la commande)',
          'Utilisez `/mot` pour chercher dans man et `n` pour le résultat suivant.',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "password" | head -3',
      output: 'chpasswd (8) - update passwords in batch mode\ngpasswd (1) - administer /etc/group and /etc/gshadow\npasswd (1) - update user\'s authentication tokens',
    },
  },

  // ─── TOPIC 2: Scripting Shell ──────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '🐚 Variables et Syntaxe Bash',
      panels: [
        { emoji: '📝', text: 'Commencez par `#!/bin/bash` (Shebang) pour indiquer l\'interpréteur.' },
        { emoji: '🏷️', text: '`VAR="valeur"` (pas d\'espaces !). Accédez-y avec `$VAR` ou `${VAR}`.' },
        { emoji: '💬', text: 'Les guillemets doubles `"` permettent l\'expansion ($), les simples `\'` sont littéraux.' },
        { emoji: '💻', text: '`OUTPUT=$(ls)` enregistre la sortie d\'une commande dans une variable.' },
        { emoji: '🚀', text: 'Donnez les droits : `chmod +x script.sh` et lancez-le avec `./script.sh`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Shebang et permissions',
        items: [
          'La première ligne doit être `#!/bin/bash` ou similaire.',
          'Utilisez `chmod +x` pour le rendre exécutable directement.',
        ],
      },
      {
        title: 'Variables et expansion',
        items: [
          'Pas d\'espaces autour du `=` : `NAME="mario"` (CORRECT), `NAME = "mario"` (ERREUR).',
          '`$(commande)` est la forme moderne de substitution de commande.',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat hello.sh && ./hello.sh',
      output: '#!/bin/bash\nNAME="RHCSA"\necho "Hello $NAME"\n---\nHello RHCSA',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Conditionnels et Boucles',
      panels: [
        { emoji: '❓', text: '`if [ $A -gt $B ]; then ... fi` — Structure conditionnelle. Attention aux espaces dans `[` et `]` !' },
        { emoji: '🔄', text: '`for file in *.txt; do ... done` — Itère sur une liste d\'éléments.' },
        { emoji: '⏳', text: '`while [ condition ]; do ... done` — Répète tant que la condition est vraie.' },
        { emoji: '🚥', text: '`case $VAR in pattern) ... ;; esac` — Sélection multiple efficace.' },
        { emoji: '✅', text: 'Opérateurs de test : `-f` (fichier), `-d` (dossier), `-z` (vide), `-eq` (égal-num).' },
      ],
    },
    keyPoints: [
      {
        title: 'Opérateurs de Test [ ]',
        items: [
          '`-eq`, `-ne`, `-lt`, `-gt` — comparaisons numériques',
          '`==`, `!=` — comparaisons de chaînes',
          '`-f fichier` — vrai si le fichier existe et est régulier',
          '`-d dossier` — vrai si c\'est un répertoire',
        ],
      },
      {
        title: 'Boucles',
        items: [
          '`for` est idéal pour traiter des fichiers.',
          '`while` est souvent utilisé avec `read` pour traiter un fichier ligne par ligne.',
        ],
      },
    ],
    terminal: {
      prompt: '$ if [ 10 -gt 5 ]; then echo "Plus grand"; fi',
      output: 'Plus grand',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '📥 Paramètres et Sorties',
      panels: [
        { emoji: '🔢', text: '`$1`, `$2`... sont les arguments passés au script. `$0` est le nom du script.' },
        { emoji: '👥', text: '`$@` représente tous les arguments sous forme de liste.' },
        { emoji: '📊', text: '`$#` est le nombre total d\'arguments passés.' },
        { emoji: '❓', text: '`$?` est le Code de Sortie de la dernière commande. `0` = SUCCÈS, sinon = ERREUR.' },
        { emoji: '🚪', text: '`exit 0` termine le script avec succès. `exit 1` indique un échec.' },
      ],
    },
    keyPoints: [
      {
        title: 'Arguments de ligne de commande',
        items: [
          '`$1` — premier argument',
          '`$#` — nombre d\'arguments',
          '`$@` — tous les arguments',
        ],
      },
      {
        title: 'Exit Status ($?)',
        items: [
          'Crucial pour la gestion d\'erreurs.',
          'Vérifiez-le immédiatement après une commande importante.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls /rep/inexistant; echo $?',
      output: 'ls: cannot access ...: No such file or directory\n2',
    },
  },

  // ─── TOPIC 3: Administration Système ──────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '🚀 Démarrage et Cibles systemd',
      panels: [
        { emoji: '🎯', text: 'Un "Target" définit l\'état du système. `multi-user.target` = terminal, `graphical.target` = bureau.' },
        { emoji: '⚙️', text: '`systemctl get-default` montre comment le système démarrera par défaut.' },
        { emoji: '🔄', text: '`systemctl set-default graphical.target` change le mode de démarrage de façon permanente.' },
        { emoji: '⚡', text: '`systemctl isolate multi-user.target` passe en mode terminal pour la session actuelle.' },
        { emoji: '🛠️', text: 'Pour les réparations : ajoutez `rd.break` dans GRUB pour passer en mode urgence.' },
      ],
    },
    keyPoints: [
      {
        title: 'Cibles systemd',
        items: [
          '`multi-user.target` — niveau 3 traditionnel (console)',
          '`graphical.target` — niveau 5 traditionnel (GUI)',
          '`rescue.target` — mode maintenance de base',
        ],
      },
      {
        title: 'Changer le mot de passe root (rd.break)',
        items: [
          '1. Éditer GRUB, ajouter `rd.break` à la fin de la ligne `linux`.',
          '2. `mount -o remount,rw /sysroot` (remonter en lecture/écriture).',
          '3. `chroot /sysroot` (entrer dans la racine réelle).',
          '4. `passwd root` (changer le code).',
          '5. `touch /.autorelabel` (obligatoire pour SELinux).',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '📊 Gestion des Processus',
      panels: [
        { emoji: '👁️', text: '`ps aux` ou `ps -ef` listent tous les processus actifs avec leur PID (Process ID).' },
        { emoji: '📈', text: '`top` affiche en temps réel les processus les plus gourmands en CPU et RAM.' },
        { emoji: '🛑', text: '`kill PID` envoie un signal de fin douce. `kill -9 PID` (SIGKILL) est forcé.' },
        { emoji: '⚖️', text: 'Priorité : "Nice" va de -20 (max) à +19 (min). `nice -n -5 commande` lance en priorité.' },
        { emoji: '🔧', text: '`renice -n 10 -p PID` change la priorité d\'un processus déjà en cours.' },
      ],
    },
    keyPoints: [
      {
        title: 'Signaux courants',
        items: [
          '`15` (SIGTERM) — fin propre (par défaut)',
          '`9` (SIGKILL) — tue immédiatement le processus',
          '`1` (SIGHUP) — recharge la configuration',
        ],
      },
      {
        title: 'Nice et Priorité',
        items: [
          'Seul root peut assigner des valeurs négatives (plus de priorité).',
          'Plus le nombre Nice est élevé, plus le processus est "gentil" (moins prioritaire).',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps -ef | grep httpd | head -2',
      output: 'root      1234     1  0 10:00 ?        00:00:00 /usr/sbin/httpd\napache    1235  1234  0 10:00 ?        00:00:00 /usr/sbin/httpd',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🛠️ Gestion des Services avec systemctl',
      panels: [
        { emoji: '🟢', text: '`systemctl start sshd` active le service immédiatement.' },
        { emoji: '📌', text: '`systemctl enable sshd` active le service au démarrage de l\'ordinateur.' },
        { emoji: '🔄', text: '`systemctl restart sshd` arrête et relance le service.' },
        { emoji: '🚫', text: '`systemctl mask firewalld` empêche tout lancement du service, même manuel.' },
        { emoji: '🔍', text: '`systemctl status sshd` montre s\'il est actif, activé et les dernières erreurs.' },
      ],
    },
    keyPoints: [
      {
        title: 'Commandes essentielles',
        items: [
          '`start`, `stop`, `restart`, `reload` — contrôle d\'exécution',
          '`enable`, `disable` — contrôle du démarrage automatique',
          '`status`, `is-active`, `is-enabled` — consultation d\'état',
          '`mask`, `unmask` — protection contre les lancements accidentels',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl is-active sshd',
      output: 'active',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📔 Logs et Tâches Planifiées',
      panels: [
        { emoji: '📜', text: '`journalctl` affiche tous les logs systemd. `journalctl -u sshd` filtre par service.' },
        { emoji: '⏲️', text: '`crontab -e` planifie des tâches périodiques (min heure jour mois sem commande).' },
        { emoji: '🏃', text: '`at 15:00` planifie une tâche ponctuelle dans le futur.' },
        { emoji: '🔦', text: '`journalctl -f` suit les logs en temps réel (comme tail -f).' },
        { emoji: '🗓️', text: '`crontab -l` liste les tâches planifiées de l\'utilisateur actuel.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl — filtrage avancé',
        items: [
          '`-b` — uniquement les logs du démarrage actuel',
          '`-p err` — uniquement les erreurs',
          '`--since "1 hour ago"` — logs récents',
        ],
      },
      {
        title: 'Planification cron',
        items: [
          'Format : `* * * * * commande` (minutes, heures, jour du mois, mois, jour de la semaine).',
          '`/etc/cron.allow` et `/etc/cron.deny` contrôlent l\'accès à cron.',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -n 5 -p err',
      output: '-- Journal begins at ... --\nJan 15 10:00:01 systemd[1]: Failed to start ...',
    },
  },

  // ─── TOPIC 4: Stockage Local — LVM ────────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 Partitionnement GPT',
      panels: [
        { emoji: '🏗️', text: '`parted /dev/sdb` — outil pour créer des partitions. Utilisez `mklabel gpt` pour les nouveaux disques.' },
        { emoji: '📏', text: '`mkpart primary xfs 1MiB 2GiB` crée une partition de 2 Go.' },
        { emoji: '👀', text: '`lsblk` montre la structure des blocs (disques et partitions) visuellement.' },
        { emoji: '❗', text: '`udevadm settle` force le système à reconnaître les changements immédiatement.' },
        { emoji: '🔍', text: '`blkid` affiche l\'UUID des partitions, nécessaire pour les montages persistants.' },
      ],
    },
    keyPoints: [
      {
        title: 'Outils de partitionnement',
        items: [
          '`fdisk` — interactif, classique pour MBR/GPT',
          '`gdisk` — spécifique au GPT',
          '`parted` — supporte les scripts et est très puissant',
        ],
      },
      {
        title: 'Étapes après partitionnement',
        items: [
          'Exécutez `lsblk` pour vérifier que le système voit la partition.',
          'Formatez avec `mkfs` avant de l\'utiliser.',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk /dev/nvme0n1',
      output: 'NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nnvme0n1     259:0    0   20G  0 disk \n├─nvme0n1p1 259:1    0  600M  0 part /boot/efi\n└─nvme0n1p2 259:2    0 19.4G  0 part /',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🧱 LVM — Volumes Physiques et Groupes',
      panels: [
        { emoji: '🔨', text: '`pvcreate /dev/sdb1` prépare une partition physique pour LVM.' },
        { emoji: '📦', text: '`vgcreate vg_data /dev/sdb1` regroupe un ou plusieurs Physical Volumes (PV) dans un Volume Group (VG).' },
        { emoji: '➕', text: '`vgextend vg_data /dev/sdc1` ajoute de l\'espace à un groupe de volumes existant.' },
        { emoji: '📊', text: '`pvs`, `vgs`, `lvs` affichent des résumés rapides de chaque niveau LVM.' },
        { emoji: '🔍', text: '`pvdisplay` ou `vgdisplay` donnent des infos détaillées (taille, secteurs, UUID).' },
      ],
    },
    keyPoints: [
      {
        title: 'Architecture LVM',
        items: [
          'PV (Physical Volume) — La partie physique (partition ou disque).',
          'VG (Volume Group) — Le "pool" de stockage.',
          'LV (Logical Volume) — La "partition virtuelle" qu\'on formate.',
        ],
      },
    ],
    terminal: {
      prompt: '$ vgs',
      output: '  VG      #PV #LV #SN Attr   VSize  VFree \n  cs        1   2   0 wz--n- <19.00g    0 \n  vg_data   1   0   0 wz--n-   2.00g  2.00g',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '💎 LVM — Volumes Logiques',
      panels: [
        { emoji: '🔪', text: '`lvcreate -L 1G -n lv_docs vg_data` extrait 1 Go du groupe pour créer un volume logique.' },
        { emoji: '📈', text: '`lvextend -L +500M /dev/vg_data/lv_docs` ajoute 500 Mo au volume logique.' },
        { emoji: '✨', text: '`lvextend -r -l +100%FREE ...` étend le volume ET le système de fichiers au maximum.' },
        { emoji: '💾', text: 'Formatage : `mkfs.xfs /dev/vg_data/lv_docs` prépare le LV pour les fichiers.' },
        { emoji: '📏', text: '`xfs_growfs /mnt/docs` étend le système XFS après avoir agrandi le LV.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestion des LV',
        items: [
          '`lvcreate -n nom -L taille VG` — créer',
          '`lvextend -L +taille -r LV` — étendre le volume et le FS en une fois (recommandé)',
          '`lvremove` — supprimer un volume (demande confirmation)',
        ],
      },
      {
        title: 'Différence XFS vs EXT4',
        items: [
          'XFS peut seulement être étendu, pas shrunk (réduit).',
          'EXT4 peut être étendu et réduit (bien que réduire soit risqué et doive être fait hors-ligne).',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvs vg_data',
      output: '  LV      VG      Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv_docs vg_data -wi-a----- 1.00g',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '🔗 Montage, fstab et Swap',
      panels: [
        { emoji: '📍', text: '`mount /dev/sdb1 /mnt/data` monte un périphérique temporairement.' },
        { emoji: '📝', text: '`/etc/fstab` est le fichier clé. Il définit quoi monter au démarrage (UUID, point, type, options).' },
        { emoji: '🔄', text: '`mount -a` vérifie que /etc/fstab est correct et monte tout ce qui est en attente.' },
        { emoji: '🧠', text: 'Swap : `mkswap /dev/sdb2` puis `swapon /dev/sdb2` active la mémoire d\'échange.' },
        { emoji: '🔒', text: 'Montages persistants : utilisez toujours l\'UUID pour éviter les erreurs si les noms de disques changent.' },
      ],
    },
    keyPoints: [
      {
        title: 'Format /etc/fstab',
        items: [
          'Col 1 : Périphérique (UUID=...)',
          'Col 2 : Point de montage (/data)',
          'Col 3 : Type de FS (xfs, ext4, swap, nfs)',
          'Col 4 : Options (defaults)',
          'Col 5 : Dump (0)',
          'Col 6 : FSCK check (0 pour XFS, 1 ou 2 pour les autres)',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat /etc/fstab | grep data',
      output: 'UUID=a1b2c3d4-e5f6... /data  xfs  defaults  0 0',
    },
  },

  // ─── TOPIC 5: Systèmes de Fichiers ──────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 et XFS',
      panels: [
        { emoji: '🛠️', text: '`mkfs.xfs /dev/vg_data/lv_docs` — crée un FS XFS, le standard sous RHEL.' },
        { emoji: '📦', text: '`mkfs.ext4 /dev/vg_data/lv_old` — crée un FS ext4 pour la compatibilité ou la réduction.' },
        { emoji: '📍', text: '`mount /dev/vg/lv /point` — connexion immédiate. `/etc/fstab` pour le permanent.' },
        { emoji: '🏷️', text: '`xfs_admin -L "DATA" /dev/sdb1` — définit une étiquette (Label) sur un volume XFS.' },
        { emoji: '🔍', text: '`df -hT` — montre l\'espace libre et le type (T) de chaque FS monté.' },
      ],
    },
    keyPoints: [
      {
        title: 'Création et maintenance',
        items: [
          '`mkfs.xfs`, `mkfs.ext4` — formatage',
          '`xfs_growfs` — étendre XFS',
          '`resize2fs` — étendre/réduire ext4',
          '`mount -o loop` — monter des fichiers ISO ou images',
        ],
      },
    ],
    terminal: {
      prompt: '$ df -hT /data',
      output: 'Filesystem              Type  Size  Used Avail Use% Mounted on\n/dev/mapper/vg_data-lv  xfs   2.0G   45M  2.0G   3% /data',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔒 Chiffrement avec LUKS',
      panels: [
        { emoji: '🔐', text: '`cryptsetup luksFormat /dev/sdb1` — formate une partition pour le chiffrement (efface tout !).' },
        { emoji: '🔑', text: '`cryptsetup open /dev/sdb1 coffre` — ouvre le coffre et le mappe dans `/dev/mapper/coffre`.' },
        { emoji: '📦', text: 'Une fois ouvert, on formate le mapper : `mkfs.xfs /dev/mapper/coffre`.' },
        { emoji: '📝', text: 'Pour le montage auto : éditez `/etc/crypttab` (nom, UUID, fichier de clé ou `none`).' },
        { emoji: '🚪', text: '`cryptsetup close coffre` — ferme le coffre et protège à nouveau les données.' },
      ],
    },
    keyPoints: [
      {
        title: 'Étapes pour la persistance LUKS',
        items: [
          '1. `luksFormat` (créer)',
          '2. `open` (ouvrir avec un nom)',
          '3. Créer le filesystem dans `/dev/mapper/nom`',
          '4. L\'enregistrer dans `/etc/crypttab` (pour demander la clé au boot)',
          '5. L\'enregistrer dans `/etc/fstab` via le chemin mapper',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status coffre',
      output: '/dev/mapper/coffre is active.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🔗 Stockage Réseau — NFS et autofs',
      panels: [
        { emoji: '🌎', text: '`mount -t nfs serveur:/chemin /local` — monte un dossier partagé par réseau.' },
        { emoji: '🤖', text: '`autofs` — service qui monte les dossiers uniquement quand on y entre, et les démonte après.' },
        { emoji: '📝', text: 'Configuration : `/etc/auto.master` définit la base, et le fichier de map les règles.' },
        { emoji: '📁', text: 'Exemple map : `data -rw,soft serveur:/export/data`.' },
        { emoji: '💡', text: 'Très important pour l\'examen afin de monter les homes réseau automatiquement.' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuration d\'autofs',
        items: [
          '`dnf install autofs` — installer',
          'Ligne dans `/etc/auto.master` : `/projets /etc/auto.projets`',
          'Dossier `/etc/auto.proyectos` : `web -rw,sync serveur:/shares/web`',
          'Relancer le service : `systemctl enable --now autofs`',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e 192.168.1.100',
      output: 'Export list for 192.168.1.100:\n/shares/web  *\n/shares/data 192.168.1.0/24',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🛡️ ACL et Permissions Spéciales',
      panels: [
        { emoji: '👥', text: '`setfacl -m u:mario:rwx fichier` — donne des droits spécifiques à Mario sans changer le proprio.' },
        { emoji: '🔍', text: '`getfacl fichier` — montre tous les droits étendus et ACL appliquées.' },
        { emoji: '📌', text: '`chmod g+s /rep` — (SetGID) fait que les nouveaux fichiers héritent du groupe du répertoire.' },
        { emoji: '🧊', text: '`chmod +t /rep` — (Sticky Bit) seul le proprio peut supprimer ses fichiers (ex: /tmp).' },
        { emoji: '👑', text: '`chmod u+s /bin/binaire` — (SetUID) le programme s\'exécute avec les droits du proprio (souvent root).' },
      ],
    },
    keyPoints: [
      {
        title: 'ACL (Access Control Lists)',
        items: [
          '`-m` — modifier une règle',
          '`-x` — supprimer une règle spécifique',
          '`-b` — supprimer toutes les ACL du fichier',
          '`d:u:user:rpx` — Default ACL : s\'applique auto aux nouveaux fichiers du dossier',
        ],
      },
      {
        title: 'Permissions Spéciales (SUID, SGID, Sticky)',
        items: [
          'SUID (4) : `s` à la place du `x` proprio. Exécute comme le proprio.',
          'SGID (2) : `s` à la place du `x` groupe. Collaboration dans les dossiers.',
          'Sticky (1) : `t` à la fin. Sécurité dans les dossiers partagés.',
        ],
      },
    ],
    terminal: {
      prompt: '$ getfacl shared_dir',
      output: '# file: shared_dir\n# owner: root\n# group: root\nuser::rwx\nuser:mario:rwx\ngroup::r-x\nmask::rwx\nother::r-x',
    },
  },

  // ─── TOPIC 6: Maintenance Système ────────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Gestion Logicielle avec DNF',
      panels: [
        { emoji: '📥', text: '`dnf install httpd` — installe un paquet et gère ses dépendances automatiquement.' },
        { emoji: '🔍', text: '`dnf search nginx` — cherche des paquets dans les dépôts configurés.' },
        { emoji: '📂', text: '`dnf list installed` — affiche tout ce qui est présent sur le système.' },
        { emoji: '📜', text: '`dnf history` — permet de voir les installs passées et de les annuler avec `undo`.' },
        { emoji: '⚙️', text: '`dnf provides /etc/mime.types` — indique quel paquet contient ce fichier spécifique.' },
      ],
    },
    keyPoints: [
      {
        title: 'Commandes dnf communes',
        items: [
          '`install`, `remove`, `update` — opérations de base',
          '`group install "Development Tools"` — installer des groupes de paquets',
          '`repoinfo` — lister les dépôts actifs',
          '`clean all` — vider le cache de téléchargement',
        ],
      },
      {
        title: 'Configuration de Dépôts',
        items: [
          'Lieu : `/etc/yum.repos.d/*.repo`',
          'Doit inclure `[id]`, `name`, `baseurl`, `enabled=1` et `gpgcheck=1`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides /usr/bin/python3',
      output: 'python3-3.9.7-1.el9.x86_64 : Interpreter of the Python programming language',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '🕵️ RPM — Requêtes et Vérification',
      panels: [
        { emoji: '🔎', text: '`rpm -qa` — liste tous les paquets installés (plus brut que dnf list).' },
        { emoji: '📦', text: '`rpm -ivh paquet.rpm` — installe un fichier RPM local (sans gérer les dépendances réseau !).' },
        { emoji: '🔍', text: '`rpm -ql httpd` — liste tous les fichiers installés par le paquet httpd.' },
        { emoji: '🛠️', text: '`rpm -V httpd` — vérifie si les fichiers du paquet ont été altérés.' },
        { emoji: '❓', text: '`rpm -qi httpd` — affiche des informations détaillées (version, date, description).' },
      ],
    },
    keyPoints: [
      {
        title: 'Drapeaux de requête (rpm -q)',
        items: [
          '`-i` — Info',
          '`-l` — Liste de fichiers',
          '`-c` — Uniquement fichiers de configuration',
          '`-d` — Uniquement fichiers de documentation',
          '`-f /chemin/fichier` — À quel paquet appartient ce fichier ?',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /etc/passwd',
      output: 'setup-2.13.7-6.el9.noarch',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🎡 GRUB2 et le Kernel',
      panels: [
        { emoji: '🐧', text: 'Le Kernel est le cœur du système. `uname -r` montre la version en cours.' },
        { emoji: '⚙️', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — met à jour le menu de boot après modif.' },
        { emoji: '📝', text: '`/etc/default/grub` — lieu pour éditer les paramètres de démarrage (ex: console).' },
        { emoji: '🛠️', text: '`grubby --info=ALL` — outil RHEL pour voir et changer la config kernel facilement.' },
        { emoji: '🆙', text: 'Après install d\'un nouveau noyau, il devient souvent le défaut automatiquement.' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuration de GRUB2',
        items: [
          'Ne modifiez pas `/boot/grub2/grub.cfg` à la main.',
          'Utilisez `/etc/default/grub` puis régénérez avec `grub2-mkconfig`.',
          '`GRUB_TIMEOUT=5`, `GRUB_CMDLINE_LINUX="..."`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ uname -r',
      output: '5.14.0-70.13.1.el9_0.x86_64',
    },
  },

  // ─── TOPIC 7: Réseaux Basiques ──────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli et Config Réseau',
      panels: [
        { emoji: '🔌', text: '`nmcli device status` — montre l\'état des interfaces physiques (eth0, etc).' },
        { emoji: '🛠️', text: '`nmcli connection show` — liste les profils de connexion configurés.' },
        { emoji: '📍', text: '`nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual`.' },
        { emoji: '🚀', text: '`nmcli con up "eth0"` — applique les changements et active la connexion.' },
        { emoji: '🏠', text: '`hostnamectl set-hostname rhel9-lab.example.com` — change le nom de la machine.' },
      ],
    },
    keyPoints: [
      {
        title: 'Structure de NetworkManager',
        items: [
          'Device — le matériel (interface).',
          'Connection — le profil logiciel (la config).',
          'On peut avoir plusieurs Connections pour un seul Device.',
        ],
      },
      {
        title: 'hostname et DNS',
        items: [
          '`/etc/hostname` — nom de l\'hôte.',
          '`/etc/hosts` — résolution locale de noms (IP nom).',
          '`/etc/resolv.conf` — serveurs DNS (géré par NetworkManager).',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli connection show --active',
      output: 'NAME                UUID                                  TYPE      DEVICE \nenp1s0              7d7c6b5a-4e3d-2c1b-0a9f-8e7d...       ethernet  enp1s0',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld — Le Pare-feu',
      panels: [
        { emoji: '🛡️', text: '`firewall-cmd --get-active-zones` — montre quelles zones protègent chaque interface.' },
        { emoji: '🔓', text: '`firewall-cmd --add-service=http --permanent` — autorise le web de façon persistante.' },
        { emoji: '🔌', text: '`firewall-cmd --add-port=8080/tcp --permanent` — ouvre un port spécifique.' },
        { emoji: '🔄', text: '`firewall-cmd --reload` — Indispensable ! Applique les règles permanentes à la session.' },
        { emoji: '🔍', text: '`firewall-cmd --list-all` — montre un résumé complet de la zone par défaut.' },
      ],
    },
    keyPoints: [
      {
        title: 'Zones et Règles',
        items: [
          'Zone `public` — la zone par défaut généralement.',
          'Drapeau `--permanent` — sinon la règle est perdue au reboot.',
          'Règles Runtime (en cours) vs Permanentes.',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --list-services',
      output: 'cockpit dhcpv6-client ssh',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔑 SSH et Transfert de Fichiers',
      panels: [
        { emoji: '🔐', text: '`ssh-keygen` — génère votre paire de clés (publique et privée).' },
        { emoji: '📤', text: '`ssh-copy-id utilisateur@serveur` — envoie votre clé publique au serveur.' },
        { emoji: '📂', text: '`scp fichier.txt root@serveur:/tmp/` — copie des fichiers de façon sécurisée par le réseau.' },
        { emoji: '🔄', text: '`rsync -av /local/ /distant/` — synchronise efficacement les dossiers.' },
        { emoji: '🛡️', text: 'Configuration : `/etc/ssh/sshd_config`. Contrôle l\'accès root et les ports.' },
      ],
    },
    keyPoints: [
      {
        title: 'Sécurité SSH',
        items: [
          '`PermitRootLogin no` — désactive l\'accès direct root (recommandé).',
          '`PasswordAuthentication no` — oblige à utiliser les clés (RSA/Ed25519).',
          'Utilisez `systemctl reload sshd` après modification.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server',
      output: 'Number of key(s) added: 1\nNow try logging into the machine...',
    },
  },

  // ─── TOPIC 8: Utilisateurs et Groupes ────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 Gestion des Utilisateurs',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — crée l\'utilisateur Mario avec son home et bash.' },
        { emoji: '🔑', text: '`passwd mario` — définit le mot de passe. Seul root peut changer les clés d\'autrui.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — ajoute Mario au groupe wheel (sudo). Toujours avec -a !' },
        { emoji: '⏰', text: '`chage -M 90 mario` — définit que le mot de passe expire tous les 90 jours.' },
        { emoji: '🗑️', text: '`userdel -r mario` — supprime l\'utilisateur et son répertoire personnel.' },
      ],
    },
    keyPoints: [
      {
        title: 'Options de useradd',
        items: [
          '`-m` — créer le home directory',
          '`-s` — définir le shell par défaut',
          '`-u` — définir un UID spécifique',
          '`-c` — ajouter un commentaire (nom réel)',
        ],
      },
      {
        title: 'Expiration des comptes (chage)',
        items: [
          '`-l` — lister les infos d\'expiration',
          '`-E` — date d\'expiration du compte',
          '`-W` — jours d\'avertissement avant la fin du mot de passe',
        ],
      },
    ],
    terminal: {
      prompt: '$ id mario',
      output: 'uid=1001(mario) gid=1001(mario) groups=1001(mario),10(wheel)',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Groupes et sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 2000 devs` — crée un groupe avec un GID spécifique.' },
        { emoji: '👤', text: '`usermod -g primaire -G secondaire utilisateur` — change les groupes.' },
        { emoji: '🔐', text: '`visudo` — édite `/etc/sudoers` de façon sécurisée (vérifie la syntaxe).' },
        { emoji: '📁', text: '`/etc/sudoers.d/` — meilleur endroit pour ajouter des règles sudo via un fichier séparé.' },
        { emoji: '❌', text: '`groupdel devs` — supprime un groupe (si personne ne l\'a comme groupe primaire).' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuration sudoers',
        items: [
          '`%wheel ALL=(ALL) ALL` — autorise les membres de wheel à tout faire.',
          '`utilisateur ALL=(ALL) NOPASSWD: /usr/bin/dnf` — autorise une commande sans clé.',
        ],
      },
    ],
    terminal: {
      prompt: '$ groups root',
      output: 'root : root',
    },
  },

  // ─── TOPIC 9: SELinux et Sécurité ───────────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 Les 3 modes de SELinux',
      panels: [
        { emoji: '🟢', text: 'Enforcing : Le mode actif. Bloque les accès non permis et les log.' },
        { emoji: '🟡', text: 'Permissive : Ne bloque rien, mais LOG ce qu\'il aurait bloqué.' },
        { emoji: '🔴', text: 'Disabled : SELinux est totalement éteint. Non recommandé.' },
        { emoji: '⚡', text: '`setenforce 0/1` bascule entre Permissive et Enforcing à la volée.' },
        { emoji: '📝', text: '`/etc/selinux/config` définit le mode persistant après redémarrage.' },
      ],
    },
    keyPoints: [
      {
        title: 'Commandes d\'état',
        items: [
          '`getenforce` — montre le mode actuel',
          '`sestatus` — montre l\'état détaillé de la politique chargée',
        ],
      },
    ],
    terminal: {
      prompt: '$ getenforce',
      output: 'Enforcing',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ Contextes : Fichiers et Processus',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — affiche les étiquettes (contextes) des fichiers.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — restaure le contexte par défaut via la base de données.' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — définit la règle permanente.' },
        { emoji: '⚡', text: '`chcon -t type fichier` — change le contexte temporairement (perdu si restorecon).' },
        { emoji: '📊', text: 'Contexte type : `utilisateur:rôle:type:niveau`. Le "type" est le plus important.' },
      ],
    },
    keyPoints: [
      {
        title: 'Résolution de problèmes',
        items: [
          'Si un service échoue malgré les bons droits, vérifiez le contexte SELinux.',
          '`mv` préserve le contexte d\'origine, `cp` hérite de celui de la destination.',
          'Utilisez toujours `semanage fcontext` + `restorecon` pour des changements définitifs.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 Booléens et Ports SELinux',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — liste tous les interrupteurs (booleans) du système.' },
        { emoji: '🔄', text: '`setsebool -P httpd_enable_homedirs on` — change un booléen de façon permanente (-P).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — liste les ports autorisés pour un service.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8088` — ajoute un port à un service.' },
        { emoji: '🔍', text: 'Les erreurs se voient dans `/var/log/audit/audit.log` via les événements "AVC".' },
      ],
    },
    keyPoints: [
      {
        title: 'Booléens vs Ports',
        items: [
          'Booleans — activent des fonctions intégrées (ex. laisser Apache lire les homes).',
          'Ports — autorisent des sockets réseau spécifiques.',
        ],
      },
      {
        title: 'Outils d\'audit',
        items: [
          '`sealert -a /var/log/audit/audit.log` — analyse les logs et donne des conseils humains.',
          '`ausearch -m AVC` — cherche précisément les dénis SELinux.',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Conteneurs avec Podman ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Fondamentaux de Podman',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — télécharge l\'image officielle Red Hat Universal Base Image.' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — lance un conteneur interactif.' },
        { emoji: '🔍', text: '`podman ps` — liste les conteneurs actifs. `podman ps -a` montre aussi les arrêtés.' },
        { emoji: '⚡', text: '`podman exec my_con ls /` — lance une commande dans un conteneur en cours.' },
        { emoji: '🗑️', text: '`podman rm my_con` — supprime un conteneur. `podman rmi ubi9` supprime l\'image.' },
      ],
    },
    keyPoints: [
      {
        title: 'Commandes de cycle de vie',
        items: [
          '`run` — crée et lance (it=interactif, d=arrière-plan, --name=nom)',
          '`stop` / `start` — mettre en pause / reprendre',
          '`logs` — voir ce qu\'il se passe dedans',
          '`inspect` — voir les détails réseau et montages',
        ],
      },
      {
        title: 'Différence avec Docker',
        items: [
          'Daemonless — pas de gros démon root qui contrôle tout.',
          'Rootless — vous pouvez lancer des conteneurs sécurisés en tant qu\'utilisateur simple.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman ps',
      output: 'CONTAINER ID  IMAGE                           COMMAND     CREATED      STATUS      PORTS       NAMES\n9abc12345678  registry.access.../ubi9:latest  /bin/bash   2 hours ago  Up 2 hours              my_ubi',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Registres et Images',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — cherche des images dans les registres (docker.io, quay.io).' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — identifiez-vous sur un registre privé.' },
        { emoji: '🏷️', text: '`podman tag app:v1 repo.com/app:v1` — renomme une image pour l\'envoi.' },
        { emoji: '📤', text: '`podman push repo.com/app:v1` — envoie votre image vers le serveur central.' },
        { emoji: '📄', text: 'Configuration : `/etc/containers/registries.conf` définit où chercher par défaut.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestion d\'Images',
        items: [
          '`podman images` — lister les téléchargées',
          '`podman history` — voir les couches de construction',
          '`podman image prune` — supprimer les images orphelines',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -2',
      output: 'NAME                      DESCRIPTION                STARS   OFFICIAL\ndocker.io/library/nginx   Official build of Nginx.   18000   [OK]',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 Le Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — définit l\'image de base sur laquelle on construit.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd` — exécute des commandes pendant la création de l\'image.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — ajoute des fichiers de votre PC dans le conteneur.' },
        { emoji: '🚪', text: '`EXPOSE 80` — indique le port d\'écoute. `CMD ["httpd", "-D", "FOREGROUND"]` — commande de démarrage.' },
        { emoji: '🔨', text: '`podman build -t my_web:v1 .` — compile le fichier en une image neuve.' },
      ],
    },
    keyPoints: [
      {
        title: 'Instructions communes',
        items: [
          '`ENV` — définir des variables d\'environnement',
          '`WORKDIR` — définir le répertoire de travail',
          '`ENTRYPOINT` — commande principale impossible à écraser facilement',
          '`USER` — passer à un utilisateur non-root pour la sécurité',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd\nCOPY . /var/www/html/\nCMD ["httpd", "-DFOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Persistance et Réseau',
      panels: [
        { emoji: '📂', text: '`-v /host:/container:Z` — monte un dossier PC dans le conteneur. Attention au :Z pour SELinux !' },
        { emoji: '🔌', text: '`-p 8080:80` — mappe le port 8080 du PC au 80 du conteneur.' },
        { emoji: '📦', text: '`podman volume create data` — crée un volume géré par podman.' },
        { emoji: '🌐', text: '`podman network create mon_res` — permet aux conteneurs de se parler par nom.' },
        { emoji: '⚙️', text: '`podman generate systemd --name mycon --files` — crée un service pour lancer le conteneur au boot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Persistance avec SELinux',
        items: [
          'Sans le drapeau `:z` (partagé) ou `:Z` (privé), le conteneur ne pourra pas écrire dans le volume à cause de SELinux.',
          'C\'est la cause d\'échec n°1 à l\'examen RHCSA.',
        ],
      },
      {
        title: 'Intégration systemd (rootless)',
        items: [
          'Placez les fichiers `.service` dans `~/.config/systemd/user/`.',
          'Utilisez `systemctl --user enable --now container-xxx`.',
          'Important : `loginctl enable-linger` pour que le conteneur vive après fermeture de session.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d -p 8080:80 -v /web:/var/www/html:Z my_web',
      output: '7d7c6b5a4e3d2c1b...',
    },
  },

};
