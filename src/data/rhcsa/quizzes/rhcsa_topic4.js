// RHCSA Quiz — Topic 4: Storage Locale — LVM (Italiano)
// 20 domande MCQ

export const rhcsaTopic4Quizzes = [
  // ─── Lezione 4.1: Partizioni GPT (5 domande) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando mostra i dispositivi a blocchi e la loro struttura ad albero?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: 'lsblk (list block devices) mostra i dispositivi in formato ad albero con dimensioni, tipo e punti di mount.',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando è raccomandato per creare partizioni GPT su RHEL9?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: 'parted supporta nativamente GPT ed è lo strumento raccomandato su RHEL9. fdisk supporta GPT dalla versione 2.26 ma parted è preferito.',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando di parted crea una nuova partizione da 1GiB a 2GiB su /dev/sdb?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'Sintassi parted: mkpart <type> <fs-type> <start> <end>. Il fs-type in parted è solo un label.',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando mostra gli UUID e il tipo di filesystem di tutti i dispositivi?',
    options: ['lsblk -f', 'blkid', 'df -T', 'Sia A che B'],
    correct: 3,
    explanation: 'Sia blkid che lsblk -f mostrano UUID e filesystem type. blkid è più dettagliato, lsblk -f più visuale.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Dopo aver creato una nuova partizione con parted, quale comando aggiorna il kernel senza reboot?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'partprobe informa il kernel delle modifiche alla tabella delle partizioni senza reboot.',
  },

  // ─── Lezione 4.2: LVM — PV e VG (5 domande) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quale è il corretto ordine per creare un Logical Volume da una nuova partizione?',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'L\'ordine LVM è sempre: Physical Volume → Volume Group → Logical Volume (PV → VG → LV).',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando inizializza una partizione come Physical Volume LVM?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: 'pvcreate <device> inizializza un dispositivo come Physical Volume LVM, scrivendo i metadati.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Come si crea un Volume Group "datavg" usando /dev/sdb1 e /dev/sdc1?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'vgcreate <nome_vg> <pv1> [pv2...] crea un VG usando uno o più Physical Volumes.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Come si aggiunge un nuovo PV /dev/sdd1 a un Volume Group esistente "datavg"?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: 'vgextend <vg> <pv> aggiunge un PV esistente a un VG, espandendo lo spazio disponibile.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando mostra informazioni dettagliate sui Volume Group?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: 'vgdisplay mostra nome VG, dimensione totale, PE free, PE size e i PV che lo compongono.',
  },

  // ─── Lezione 4.3: LVM — LV ed estensione (5 domande) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Come si crea un Logical Volume "datalv" da 2GiB nel VG "datavg"?',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'lvcreate -L <dimensione> -n <nome_lv> <nome_vg>. -L usa unità assolute (G, M). -l usa PE.',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Come si estende un LV ext4 "datalv" di 1GiB E si ridimensiona il filesystem insieme?',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'Sia A che B sono corrette',
    ],
    correct: 3,
    explanation: 'Sia A (lvextend + resize2fs separati) che B (lvextend -r che include il resize) funzionano. -r ridimensiona automaticamente.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Per un LV con filesystem XFS, quale comando ridimensiona il filesystem dopo lvextend?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'resize2fs è per ext2/3/4. XFS usa xfs_growfs e richiede il MOUNT POINT, non il device.',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Dove si trova il device file di un LV chiamato "datalv" nel VG "datavg"?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'I device LV si trovano in /dev/<vgname>/<lvname>. Esiste anche /dev/mapper/<vgname>-<lvname>.',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando mostra le informazioni di tutti i Logical Volumes?',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'Sia B che C'],
    correct: 3,
    explanation: 'lvdisplay mostra informazioni dettagliate, lvs mostra un riepilogo compatto. Entrambi utili.',
  },

  // ─── Lezione 4.4: Mount, fstab e Swap (5 domande) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Perché è preferibile usare l\'UUID invece del device name (/dev/sdb1) in /etc/fstab?',
    options: [
      'L\'UUID è più corto e facile da ricordare',
      'Il device name può cambiare dopo un reboot; l\'UUID è permanente',
      'Solo l\'UUID è supportato da RHEL9',
      'L\'UUID aumenta le performance di mount',
    ],
    correct: 1,
    explanation: 'I device name (sda, sdb) possono cambiare all\'aggiunta/rimozione di dischi. L\'UUID è univoco e immutabile.',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando testa la correttezza di /etc/fstab senza rebootare?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: 'mount -a monta tutte le voci in /etc/fstab non ancora montate. Errori = problemi in fstab.',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qual è la corretta voce fstab per montare /dev/mapper/datavg-datalv su /data con ext4, con opzioni default, al boot?',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Formato fstab: <device> <mount_point> <fs_type> <options> <dump> <pass>. 0 0 = no dump, no fsck.',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Come si crea uno spazio swap su una partizione /dev/sdb2 e lo si attiva?',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'mkswap formatta la partizione come area swap, swapon la attiva. Da aggiungere a fstab per persistenza.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando mostra la swap attualmente attiva e la sua dimensione?',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'Tutti e tre'],
    correct: 3,
    explanation: 'swapon --show, cat /proc/swap e free -h mostrano tutti informazioni sulla swap. Sono complementari.',
  },
]
