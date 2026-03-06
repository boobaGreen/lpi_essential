// RHCSA Quiz — Topic 4: Local Storage — LVM (French)
// 20 MCQ questions

export const rhcsaTopic4QuizzesFR = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quelle commande affiche la géométrie des périphériques blocs sous la forme ludique et claire d\'un arbre descendant ?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: '`lsblk` (list block devices) dessine une séduisante arborescence répertoriant les disques, LVMs, partitions et points de montage correspondants.',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Dans la philosophie RHEL9, quel outil est "le standard officiel recommandé" pour partitionner avec la table moderne GPT de gros disques ?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: 'Même si `fdisk` avale aujourd\'hui très bien le format GPT, `parted` demeure l\'outil canonique et incontesté nativement mis en avant par les syllabus officiels RedHat.',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Si tu exécutes le formateur silencieux Parted, quelle est la commande CLI valide pour sectionner une nouvelle partition du `Go numéro 1` jusqu\'au `Go numéro 2` sur /dev/sdb ?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'La rigide syntaxe parted exige la directive mathématique : `mkpart` + label(prim./log.) + flag(fs-type) + début physique + fin absolue.',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Tirer les identifiants uniques universels (les longues chaînes alphanumériques UUID) rattachées génétiquement à l\'identité même des partitions s\'effectue au mieux via :',
    options: ['lsblk -f', 'blkid', 'df -T', 'La proposition A aussi bien que la B le réussiront'],
    correct: 3,
    explanation: '`blkid` te crache les paires brutes (idéales pour les scripts) tandis que l\'argument magique `-f` accordée à lsblk présentera tes UUID bien formatées en belle colonne terminale.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Tu viens d\'user du scalpel et tu as découpé sdb en partitions... pourtant le Linux refuse encore obstinément de le voir. Que hurler immédiatement pour conjurer la re-lecture du disque sans subir un redémarrage (Reboot) onéreux ?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'L\'ultime commande `partprobe` enclenche une interruption brutale ordonnant au kernel d\'inspecter religieusement et acter les modifications fraîches subies sur le partitionnement matériel.',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Dans LVM (Logical Volume Manager) nomme chronologiquement l\'ordre universel de création partant du matériel brut allant jusqu\'à la strate la plus fine logicielle :',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'C\'est immuable. Étape 1: on estampille le disque vierge en Physical Volume(PV). Étape 2: On l\'accueille en groupe mère la Volume Group(VG). Étape 3: On le tranche logiquement en lamelles exploitables Logical Volumes(LV).',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quel est l\'outil exact pour marquer ou tatouer d\'une entête magique LVM2 le crâne d\'une banale partition brute /dev/sdb1?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: '`pvcreate` grave inexorablement la métadonnée d’adoption (header LVM) habilitant officiellement ce bout de ferraille à rentrer plus tard fusionner en Groupe LVM géant.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Fusionne sdb1 et sdc1. Comment construiras-tu techniquement ta colossale Volume Group que les hommes nommeront `datavg` ?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'Syntaxe de la forge : la commande `vgcreate` appelant en premier le Nom-du-Groupe puis à la chaîne listant, tous les chemins absolus des partitions physiques rattachés.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'La place manque follement ! Tu as branché physiquement le disque /dev/sdd1. Comment faire avaler et dilater ce nouveau stockage pour étendre les entrailles abyssales existantes du Groupe "datavg" ?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: '`vgextend <TonGroupe> <NouveauMatériel>` repousse joyeusement repoussant par-là les bornes du stockage colossal d\'un VG pré-existant.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Puis-je lire l\'ADN et vérifier l\'intégralité des métadonnées comme (PE size, espaces octroyés et libres restants, allocs maxis) assignés aux Groupes Volume VG de la machine ?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: '`vgdisplay` imprimera sur le TTY une très longue et verbeuse fiche avec absolutement TOUTES les variables cruciales de ton pool de disques global.',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Écris sagement la prière magique pour découper finement un Volume Logique pur de capacité `2GiB` que l\'on nommera `datalv`, tailladée directement dans notre colosse "datavg".',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'L (grand L) prend les tailles absolues Gigabytes, -n dicte le patronyme du LV.. et en bout de queue tu dois lui dicter la source : le Groupe volume.',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Extrême Urgence: Il faut dilater immédiatement la tranche ext4 de "datalv" de `1GiB` de plus ET redimensionner son file-system d\'un seul battement pour qu\'il le capte.',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'La A en deux mouvements ou le combo B en un coup feront le travail parfaitement.',
    ],
    correct: 3,
    explanation: 'Si tu exécutes le formidale Flag `"-r"` (ResizeFS on-the-fly), LVM commandera lui-même secrètement au kernel d\'étirer le filesystem EXT à la minute où LVM allonge l\'UUID brute, fusionnant les temps.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Si le Volume Logique LVM allongé ne recelais pas du ext4 mais plutôt un indomptable `XFS` moderne natif, quel commande terminal exiges-tu pour l\'étendre en l\'air ("on the fly") ?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'Attention au piège : Avec XFS, il est interdit de repointer et viser l\'enveloppe `/dev/mapper..`. Tu DOIS viser textuellement un Répertoire pointant sur le point de chute final monté en vie.',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Où le démon magique Dev-Mapper tapit-il au fond des ténèbres les adresses et points d\'accroche crues de notre enfant "datalv" émanant du papa "datavg" ?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'En format archaïque ce fut toujour `/dev/NomVG/NomLV` . L\'équivalent sous la toile de fond étant l\'autre symlink vers `/dev/mapper/NomVG-NomLV`.',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Pour le résumé du patron hyper stressé, cite la directive qui imprime la grille condensée hyper minimaliste affichant taille/place/nom de la panoplie des Volumes Logiques actuels.',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'B tout autant que C t\'illumineront la voix'],
    correct: 3,
    explanation: 'Si lvdisplay t\'assommera de paragraphes infinis détaillants des id et timestamps obscurs, la minuscule commende `lvs` crachera quant à elle une unique grille tableau d\'une ligne percutante laconique.',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Les gourous interdisent désormais formellement l\'écriture statique `/dev/sdc1` dans `/etc/fstab`. Mais bon sang pourquoi cette intolérance ?',
    options: [
      'Il occupe trois caractères de moins à l\'écriture pure UUID',
      'Le BIOS redonne au premier branché le label /sda. Si un intrus USB boote d\'abord, tu perds ta table de disque physique. L\'UUID est la constante indestructible invariable.',
      'Sda sdb est une relique désactivée unie-directionnement par le kernel 5+.',
      'Améliorer ses perf RAM (IOPS caché).',
    ],
    correct: 1,
    explanation: 'Les acronymes sda, sdb, sdc sont volatiles et tributaires du bon vouloir d\'énumération de scan des câbles sata aux boot. Si ça rote, ta bécane crashe.',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Tu viens de tapoter nerveusement tes ajouts salvateurs au ventre noir du `fstab`. Comment purges-tu tes effrois de typo vérifiant silencieusement l\'impeccable syntaxe sans lancer bêtement un redémarrage kamikaze ?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: '`mount -a` balaye frénétiquement ligne par ligne l\'enclos fstab, s\'efforçant violemment de monter ou accrocher ce qui reste lâche. Et surtout il crachotera des hurlements de terminal s\'il cogne face une virgule mal placée t\'offrant sa bénédiction de tester tranquillement (avant de rebooter un serveur cassé).',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Le boss te dicte: "Fais l\'accroche totale à l\'armature fstab du LVM datavg-datalv pour atterrir sur /data avec le format standard ext4 et sans chichis au démarrage". Tu tapes :',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'L\'anatomie draconienne du fstab en RHEL : (Piller #1 Fichier Périphérique bloc) (Piller #2 Trajectoire montage Point) (Piller #3 File System Type ExtX) (Piller #4 Params/Defaults) et enfin (les Digites bêtes Dump(0) de sauvegarde et Fsck test Boot order 0, 1, ou 2).',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Ta machine s\'asphyxie de mémoire RAM. Prépare le pansement magique "zone d\'échange" (SWAP) visant sur la tranche perdue et vierge `sdb2` et enclenche y l\'étincelle.',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'Surtout pas de "mkfs." le swap de mémoire vive est structuré hors logique classique fs. Tu l\'infuses de base via `mkswap` et l\'intronises en vie au Kernel avec son bouton `swapon`.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Sonde de diagnostics universelle: Comment vérifies-tu de tes yeux fatigués que l\'étincelle de mémoire Swap avale bien des megas alloués vivant sa meilleure vie ?',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'Elles s\'avèreront formidables toutes les trois'],
    correct: 3,
    explanation: 'Tandis que `swapon` tire un listing brut natif, `cat proc` renvoie un diagnostic noyau abstrait, et enfin le bien aimé `free -h` pondra les pourcentages ram d\'une frappe instantanement visualisable et intelligible.',
  },
]
