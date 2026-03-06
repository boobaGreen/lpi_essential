// RHCSA Quiz — Topic 5: File System (French) — 20 questions

export const rhcsaTopic5QuizzesFR = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Quelle combinaison incante la création basique d\'un file-system structuré ext4 frappant droit au cœur de `/dev/sdb1`?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'La formulation A et B forgent conjointement le même clou final'],
    correct: 3,
    explanation: 'Le shell wrapper racine `mkfs -t ext4` traînera secrètement vers l\'invocation stricte de l\'outil système réel appelé `mkfs.ext4` qui effectuera la manœuvre concrète formatrice.',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Si j\'implante brutalement un RHEL9 vierge tout neuf en mode autopilot... sur quel champion technologique pariera et posera-t-il systématiquement toute partition / d\'usine par pur défaut en RedHat enterprise?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'EXT4 a dû courbé l\'échine aux environs de Rhel7-8 face au titan colosse natif "XFS" encensé pour supporter de phénoménales I/O scalaires taillées pour BigData et méga-grappes volumiques gigantesques.',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Tu plonges mains poisseuses aux tréfonds et exiges lire toute l\'enveloppe méta-data (geometry, block size, secteurs) d\'un répertoire `XFS` mystérieux actuellement harnaché sous `/data` de ta bécane ?',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: 'Le radar à rayons X absolu de l\'agencement s\'appelle XFS INFO qu\'il te faut taper à l\'aveugle face au POINT de MONTAGE `/repertoires/` actif, car il aborbe et renifle pas un point sda crû d\'I/O hardware.',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'L\'XFS de sdb1 corrompu a rendu l\'âme lors d\'une micro coupure évitant au boot. La machine suffoque. Au secours, ramenez la chirurgie et son scalpel le plus fou pour le soigner à cœur ouvert !',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'S\'il est un dogme universel en Linux RHCSA sur les montages de la série XFS modernes, l\'action divine du chirurgien passera systématiquement par `xfs_repair` opérant sur le bloc sdb nu démonter, reléguant fsck à faire pot-de-fleur obsolète stérile sans force d\'actes face au colossal format.',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Magie Oubliée : En taggant la config FSTAB de quel fabuleux grigri dictes-tu subrepticement à systemd de ne brancher physiquement la disquette que si par hasard un utilisateur naviguait dans sa racine par le biais d\'un CD invisible ?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'Si positionnée intelligemment `x-systemd.automount` intercepte la demande "on boot", laisse la clé libre froide offline aux vents mais bondit fulgureusement injectant le /dev au fs au quart de seconde où un script l\'approche. L\'outil le plus furtif de fstab.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Remplis le trou manquant : Comment bâtir le blindage maudit atomique inébranlable `LUKS` (chiffrage plein disque d\'état) par effacement complet et broyeur militaire au sein même des secteurs du `/dev/sdc1` visé en l\'ignorant?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'Le couteau du chiffrage ultime redoude ce mot magique `cryptsetup` emboité d\'une injonction `luksFormat`. Ne faiblit pas face à lui car il crachera l\'exigence folle qu\'il faut lui renvoyer "YES" entier majuscule à ton écran.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'On détient la clé d\'or de la chambre forte LUKS. La serrure blindée gît sur sdc1. Comment demander au cryptsetup de décanter et cracher sagement le volume nu aux yeux de Linux le baptisant temporallement "datadisk" au mapping mapper ?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'Toutes proportions gardées, formuler de façon A ou B invoque la même serrure de mapper.',
    ],
    correct: 3,
    explanation: 'D\'antan le mot canonique fût `luksOpen` de version vieille garde. Les puristes et versions modernes tolèrent raccourci absolu au mot vierge brut `open`. La bête finira pendue et lisible dans le point d\'accès `/dev/mapper/datadisk`.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'L\'exam t\'ordonne l\'impossible. Le serveur qui abrite sdc1 chiffré Luks doit impérativement auto-redémarrer tout seul ce weekend. Il ne posera aucune prompt PassWord ni gémissement humain aux boots à cause de quoi ?',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: 'Il suffit que tout humain injecte sagement et configure pointilleusement une ligne dérobée au fichier `/etc/crypttab` ! Ce fameux sésame avalera un nom cible, identifiant disque crû UUID mais surtout la `path file secret` du fichier texte pass clé usb pendrive offline posé là exprès ou d\'un trou caché en dur pour automatiser le décadenassier du monstre LUKS .',
  },
  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'La mission est d\'héberger depuis ma RedHat ou centoS un partage pur sang de pingouin vers pingouin. Un répertoire transparent `(NFS)`. Quel gros conteneur à piocher dnf manque à l\'appel d\'urgence sur ton host si Linux ignore commandes de partage NFS ?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'Dès Rhel 8/9, l\'arsenal atomique client mais aussi Server-Demon pour NFS s\'encapsule confortablement lové en ce package colysée massif sobrement prénommé `nfs-utils`.',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Une baie lointaine résidant au royaume (192.168.1.10) nous offre généreusement `/data`. Cloue en dur (fstab) ton harnachement à la matrice terrestre d\'ancrage local `/mnt/data/` en NFS classique ?',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Prestigieuse formule : L\'IP hôtesse soudée d\'urgence de ce redoutable tag `(Deux Points :)` épousant le sac NFS export remote visé.',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Dans des toiles d\'araignées d\'un lab de grande échelle AutoFS... Qui trône souverain à la racine comme manuscrit de référence et de mappage orientant global la machine vers qu\'elles foutues pages cibles .misc ou .nfs on délèguera le boulot granulaire des noeuds enfants ?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 0,
    explanation: 'AutoFS a ses hiérarchies. Et l\'architecte central qui abrite tous les chemins racine s\'appelle indubitablement `/etc/auto.master`.',
  },
  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Règle stricte et démoniaque dictatorial Unix: on ne confie la chgrp base de `/project` qu\'à un certain cercle élitiste. Mais "Mario" le petit simple tech boy doit se balader s\'y écrire dedidans. Comment triches-tu percer un tunnel par dérogation spéciale de droits purs à sa seule misérable personne (RW) sans aliéner les groupes souches natifs ?',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: '`set file access control lists (-m modifier)` + u(sers) ou g(roupe) + son Nom + l\'attribut final espéré pour la brèche et le Path total.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Tu inspectes piteusement l\'abîme "drwxr-x---+" balancé au bout d\'un fastidieux ls-la sans vraiment y voir clair sur QUI tire ces ficelles plus . Donne un coup de poignard dévoilant en plain air tous possesseur de ces mystique flag + .',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: 'Les secrets du `+` enfouis s\'illuminent textuellement lorsque tu sondes en dur par l\'auscultation chirurgical `getfacl`.',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Devinette RHCSA experte. Quel sort s\'apprête et abattra si je force le droit ésotérique `setGID` en surcouche d\'un répèrtoire `/dossier` collaboratif ?',
    options: [
      'Fait passer à cet objet tout exécution logicielle au poing serré au rang divin du Grand Master Root sans répliques directes',
      'Ordonne sans sommation par hérédité formelle flaggée, que chaques bébés fichiers qui naitront aux fond de cette coupe boieront pour la vie par clonage, l\'identité Groupesca stricte dictée initialement par la mère matrice /dossier (en ignorant l\'adn groupe père créateur du tech du jour).',
      'Foudroit la terre mère restreignant sans merci les écritures uniques au Root supreme',
      'Immortalise l\'impossibilité des deletes',
    ],
    correct: 1,
    explanation: 'L\'usage magique du set GId flag (chmod g+s). Implique un pont vers la création harmonieuse évitant le chaos où chaque humain engendre égoistement son fichier de root perso, le ramenant obligatoirement à être hébergé rattaché par le "ProjectGroup Mother" d\'office.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Oulah! Mario veut du RW sur tous. Établis la Default ACL prédominatrice à `/shared` causant ainsi aux progénitures nouvellement créés qui tomberont là demain d\'incorporer déjà sa passoire spéciale mario rw pré-collée .',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'L\'A ou la B ou flag --default de la C ... Toutes ordonneront cet avènement propagateur d\'hérédité ACL de descendance',
    ],
    correct: 3,
    explanation: 'Poser les directives `-d` ou flag longue (`--default ` ou `d:` inline notation compacte ) marque brutalement le dossier cible imposant la transmission de contagion de l\'ACL paramétrée vers tout gosse du file tree avenir interne.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Tu crames des manuels linux pre-historiques. Sur l\'ancestral kernel et fstab, comment ressusciterais tu via paramètrage le flag de montage sur la ligne ext4 d\'antan, l\'octroy d\'outils et support complet Posix ACL d\'époque ?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'Aujourd\'hui il trône d\'usine, mais pour en jouir en pure théorie ou le paramétrer si dénié, insiste violemment sur flag `"acl"` sur le param options Fstab.',
  },
  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Pour le compte des seigneurs de la cybersécurité auditant notre RHEL, brise à vie les genoux au moindre exécutable, script, trojan, ou malware se planquant aux travers des dossiers de la poubelle partagée commune globale (/tmp/). Ne tape rien. Juste quel flag fstab tu vas figer là-bas?',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: 'Le cadenas atomique de la branche montage "NOEXEC". Qu\'importe l\'incantation rwX d\'un simple humain, le grand mur physique ou logiciel refusera que la ram fasse "spawner le process" de toute chose issu depuis cet arpent maudit de montage du FS monté en flag NOEXEC.',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Commande laconique pour épier discrètement de tes yeux hagards le taux et le gouffre Gigabyte Libre Restants pour tous les stockages sans se froisser .',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'Df (-humanreadable). L\'essentiel outil historique du sysadmin en panique scrutant d\'un pan de vue sa colonne `Disponibilité`, `Utilisé%` de sa machine serveuse.',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Et boom ! le Storage NAS (en CIFS monté par réseau LAN) perd les pédales foudroyé durant minuit. Le Serveur RHEL9 redémarre pendant sa disparition fâcheuse. Par quel sort as-tu préservé au boot d\'antan cet accident qui aurait logiquement envoyé Linux et le Boot Kernel crever de trouille et de désespoir s\'écrasant en emergency console car incapable de trouver le NAS NFS SMB ?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: 'Il n\'y a qu\'un unique talisman capable de cette sauvette dans les options de la file-system table d\'autoboot: "NOFAIL" ordonnera de zappé ce pépin et passera par-delà aux suivants montages sans mourrir ni décapiter l\'avancement dD boot final du pauvre serveur en état de chute serveur source distant temporaire !',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'La boite de pandore d\'un cryptovolume cru Luks fut crevée et craquée de toutes parts trônant grand ouverte dans un pont in-ram en `/dev/mapper/coffrefort`. Il n\'y a hélas rien. Tu devras façonner au tractopel quel terrain plat `ext4` interne à poser par-dessus tout pour qu\'un humain puisse y lister en l\'ancrant ?',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/coffrefort',
      'cryptsetup mkfs /dev/mapper/coffrefort',
      'luks-mkfs /dev/mapper/coffrefort',
    ],
    correct: 1,
    explanation: 'En touchant au raw crû sous-jacent sdc tu pulvériserais la serrure mère Luks2. On opère au marteau piqueur exclusivement SUR le `pont mapping` crëe par LuksOpen (à savoir ta gateway mapper coffrefort).',
  },
]
