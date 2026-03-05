// RHCSA Quiz — Topic 5: File System (Italiano) — 20 domande

export const rhcsaTopic5Quizzes = [
  // ─── ext4 e XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando crea un filesystem ext4 su /dev/sdb1?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'Sia A che B'],
    correct: 3,
    explanation: 'mkfs.ext4 e mkfs -t ext4 sono equivalenti. mkfs.ext4 è la forma più comune.',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Quale filesystem è il default di RHEL9 per nuove partizioni?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'XFS è il filesystem di default su RHEL7+ e RHEL9 per la sua scalabilità e performance.',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando mostra informazioni dettagliate su un filesystem XFS montato su /data?',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: 'xfs_info <mount_point> mostra i parametri del filesystem XFS. tune2fs e dumpe2fs sono per ext2/3/4.',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Un filesystem XFS danneggiato può essere riparato con:',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'xfs_repair ripara filesystem XFS non montati. Nota: il device NON deve essere montato.',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Quale opzione di mount fa sì che il filesystem venga smontato automaticamente dopo un timeout?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'x-systemd.automount gestisce il mount automatico via systemd. nofail ignora errori al boot.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando formatta /dev/sdc1 con cifratura LUKS?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'cryptsetup luksFormat inizializza un container LUKS sul dispositivo. Richiede conferma e passphrase.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Dopo luksFormat, quale comando apre il container LUKS come "datadisk"?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'Sia A che B',
    ],
    correct: 3,
    explanation: 'In versioni recenti di cryptsetup, sia "open" che "luksOpen" sono equivalenti. Il device diventa /dev/mapper/datadisk.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Dove si configura il mount automatico di un volume LUKS all\'avvio (senza password interattiva)?',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: '/etc/crypttab definisce i container LUKS da aprire al boot, con nome, device, keyfile e opzioni.',
  },
  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Quale pacchetto installare per montare filesystem NFS su RHEL9?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'nfs-utils contiene i client e server NFS. cifs-utils è per Samba/Windows shares.',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Come si monta permanentemente la share NFS 192.168.1.10:/data su /mnt/data in fstab?',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Formato: server:/export /mountpoint nfs options 0 0. NFSv4 usa nfs4, ma "nfs" funziona anche.',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Quale file di autofs mappa le condivisioni NFS per la directory /misc?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 1,
    explanation: '/etc/auto.master punta a /etc/auto.misc (o simili) che contengono le singole mappature.',
  },
  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando aggiunge permessi di lettura/scrittura all\'utente "mario" su /project?',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: 'setfacl -m (modify) u:user:permissions aggiunge una voce ACL per un utente specifico.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando visualizza le ACL di un file?',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: 'getfacl mostra le ACL estese di file e directory in formato leggibile.',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Cosa fa il permesso setGID su una directory?',
    options: [
      'Esegue i file binari nella directory come root',
      'I nuovi file creati nella directory ereditano il gruppo della directory',
      'Solo root può scrivere nella directory',
      'La directory non può essere eliminata',
    ],
    correct: 1,
    explanation: 'Il bit setGID (chmod g+s) su una directory fa sì che i nuovi file ereditino il gruppo della directory, non quello del creatore.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Come si impone che le ACL di default si applicano ai nuovi file in /shared?',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'Sia A che C',
    ],
    correct: 3,
    explanation: 'setfacl -m d: (o --default) imposta ACL di default per nuovi file. d:u:mario:rw è la forma compatta.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Quale opzione di mount abilita il supporto ACL per un filesystem ext4?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'L\'opzione di mount "acl" abilita le ACL POSIX. Su RHEL, moderni kernel hanno spesso acl di default.',
  },
  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Quale opzione di mount impedisce l\'esecuzione di programmi su quel filesystem?',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: 'noexec impedisce l\'esecuzione di binari. nosuid ignora i bit setuid/setgid. Usati per sicurezza su /tmp.',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando mostra lo spazio disco usato e disponibile per ogni filesystem montato?',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'df -h (disk free, human readable) mostra spazio totale, usato e disponibile per ogni filesystem montato.',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Quale opzione fstab fa sì che un errore di mount al boot non impedisca il sistema di avviarsi?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: 'nofail fa sì che systemd ignori errori di mount invece di entrare in emergency mode. Utile per storage esterno.',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Dopo aver aperto un volume LUKS, quale comando crea il filesystem ext4 al suo interno?',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/nome_volume',
      'cryptsetup mkfs /dev/mapper/nome_volume',
      'luks-mkfs /dev/mapper/nome_volume',
    ],
    correct: 1,
    explanation: 'Dopo luksOpen si formatta il device mapper risultante (/dev/mapper/nome), non il device fisico.',
  },
]
