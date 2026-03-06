// RHCSA Quiz — Topic 4: Local Storage — LVM (Deutsch)
// 20 MCQ questions

export const rhcsaTopic4QuizzesDE = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Konsolen-Befehl listet Ihnen Hardware-Blockgeräte wie Festplatten übersichtlich samt visuellem Partitions-Baumstamm-Layout (Tree) auf?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: 'Der unentbehrliche List Block Devices: `lsblk` liefert den besten visuellen Überblick über Partitionierungen, Platten, LVM und Mount-Ziele.',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welches moderne Tool ist auf RHEL9 der empfohlene Standard, um Festplatten in weiser Vorraussicht via dem zukunftssicheren `GPT`-Standard einzuteilen?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: 'Parted wurde in Red Hat als DAS Werkzeug für Scripting, LVM und moderne GPT Disks vorangestellt. (fdisk hat zwar zu GPT aufgeholt, parted bleibt aber im Lehrplan prominent)',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Sie nutzen `parted`. Das Kommando, um brutal einen 1GiB großen Brocken auf sdb ab Byte 1GiB bis 2GiB Dauer als neue Partition herauszumeißeln lautet?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'Die strenge Syntax bei parted lautet `mkpart Bezeichnung Fs-art Startmarke Endmarke`. Die Fs-art formatiert nicht, sie tagt nur!',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Wie druckt man die exakten UUIDs (Identifiers) mitsamt Filesystem-Typart von ALLEN formatierten Datenträgern aufs Display, nützlich für die FSTAB?',
    options: ['lsblk -f', 'blkid', 'df -T', 'Sowohl A als auch B funktionen tadellos'],
    correct: 3,
    explanation: 'Das Klassische blkid verrät Ihnen sofort die reinen UUIDs. `lsblk -f` fügt die tolle visuelle Baum-Struktur im Terminal als Bonus hinzu.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Sie schufen im Live-System soeben eine Platte "sdb2". Der Kernel zickt rum "Ich kenne sdb2 nicht". Ohne lästigen Reboot zwingen Sie ihn seinen Cache mit welch Kommando neu einzulesen?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'partprobe stösst den OS-Kernel freundlich aber bestimmt an, die aktualisierte Partitions-Tabelle des benannten Blocks sofort einzulesen.',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Der Weg eines LVM. Welche Chronologie im "Erschaffen eines Laufwerkes" (Bottom bis zum fertigen Laufwerk) gibt Red Hat eiserne LVM Architektur vor?',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'Aus PV (Echte Disks) backsteinen wir eine Volumen Gruppe (VG, dicker Speicherpool), aus deren Masse wir abschließend die LVs (Partitionen) stanzen. (PV → VG → LV)',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Der Startschuss im LVM: Welcher Befehl brandmarkt eine völlig rohe, ahnungslose Partition (z.B. sdb1) physikalisch, damit sie zukünftig dem LVM angehört?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: 'pvcreate knallt einen LVM-Metadaten Header an den Anfang des Datenträgers.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wie erschaffen Sie eine fette aggregierende Volume Group "datavg", indem sie sofort zwei vorbereitete Physical Volumes sdb1 & sdc1 verschmelzen?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'Mit vgcreate nennen sie den neuen Gruppennamen und folgelisten einfach alle PVs ab, die hier dem Pool einverleibt werden sollen.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Ihre VG "datavg" droht platzen. Sie steckten eine frische Platte sdd1 rein (pvcreated). Wie schütten sie die Masse dieser sdd1 nun nachträglich in den Datenpool datavg?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: 'vgextend <Ziel_VG> <zusätzliches_PV> vergrößert einen Pool augenblicklich im Betrieb.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Mit welchem Diagnose-Druck überprüfen Sie alle metadaten, die Größe (GB) und Extents einer Volume Group?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: 'Ein `vgdisplay` listet ihnen auf den Punkt die Freien Platzressourcen (Free PE), zugewiesenen Platten und VG Kapazitäten auf.',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wie fräsen Sie endgültig ein logisches Volume namens "datalv" mit präzisen `2 GigaByte` Kapazität aus dem vollen VG Reservoir "datavg" heraus?',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'G merken für "Großartiges Gigabyte". `-L` steht für direkte Kapazitäten. `-n` ist der Namens-Tag.',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Die Königsdisziplin im LVM: Das EXT4 LW `datalv` ist live. Sie wollen es um 1GB vergrößern. ABER die Formate/Blöcke auf Ebene des Dateisystems müssen sich auch passend vergrößern ohne Neustart!',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'Sowohl A (in 2 Runden) als auch den bequemen Parameter R in (B) erledigen dies.',
    ],
    correct: 3,
    explanation: 'Ob via hartem händischen Aufruf des `resize2fs` nachgestützt, oder direkt bequem per Auto-Resize Flag `-r` im lvextend: Es expandiert im Hintergrund transparent das Ext-Dateisystem.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Ext4 verwendet `resize2fs`. Was aber, wenn sich auf jenem vergrößerten LVM-Volume ein starres XFS-Dateisystem befindet? Welchen brutalen Befehl schleudern sie nun?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'XFS ist sturer. Hier rufen Sie das spezialisierte `xfs_growfs` auf. Achtung: Im Gegensatz zu lvextend müssen Sie zwingend den aktiven Mount-Pfad (Ordner) und NICHT das /dev/ Blockdevice anpeilen.',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Wo liegt physikalisch adressierbar die LVM-"Gerätedatei" für das soeben erstelle Logical Volume `datalv` das Sie im `datavg` bastelten?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'Das Device landet bei Redhat mustergültig unter dem Pfad `/dev/<VolumeGroup>/<LogicalVolume>`. (Alternativ verweist auch der /dev/mapper Pfad dorthin).',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Mit welch kurzem, knackigen Kommando reihen Sie eine saubere tabellarische und kompakte Ausgabe JEDES erstellten logischen Volumes horizontal auf dem Bildschirm aneinander?',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'Option B ist ausgiebig, Option C ist super kurz. Beide listen aber LVMs.'],
    correct: 3,
    explanation: '`lvdisplay` klatscht gigantische textwände an Output hin. `lvs` destilliert das ganze auf eine kompakte coole tabellarische Kurz-Zeile runter.',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wieso predigen Sysadmins seit Jahren religiös die Nutzung von ellenlangen abstrakten `UUID=` Einträgen anstatt von simplen Wegen wie `/dev/sdb1` um Datenträger im `/etc/fstab` einzutragen?',
    options: [
      'Garnicht, UUIDs sind veralteter RHCSA-7 Müll, fdisk /vdb1 regiert.',
      'Weil bei Neustarts durch Anstecken von USB/PCI-Ports der Kernel eventuell Laufwerksbuchstaben willkürlich neu vergeben könnte, was bei `/sdb1` in Datenverlust und Bootschleifen endet. Die UUID ist persistent!',
      'Weil EXT4 exklusiv zwingend UUID mag',
      'Der UUID Code steigert Lese-Zugriff',
    ],
    correct: 1,
    explanation: 'Der Bezeichner SDB, SDA, SDC unterliegt chronologisch dynamischen Device-Enumerations Prinzipien. UUIDs (Universell unigue IDs) sind absolut narrensicher ans Device gebunden.',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Gefahr im Verzug: Sie bastelten an `/etc/fstab`. Stimmt ein Feld nicht, blockiert RHEL den Server-Neustart unweigerlich hart im "Emergency Mode". Wie verifizieren Sie ob die Eintragung fehlerfrei geschrieben wurde?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: 'Der unentbehrliche Lifesaver: Bevor man bootet ruft man `mount -a` auf. Linux mountet daraufhin simuliert ALLES frisch ab, was noch ungelesen der fstab rumlungert. Wirft es einen Fehler -> Alarm!',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Schmieden Sie blind die FSTAB-Spaltenstruktur: Ziel ist es ein frisches LVM (mapper/datavg-datalv) stur zum Boot auf dem Ordner `/data` als reines ext4 standardmässig einzubinden, ohne fsck check.',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Korrekte Konvention von Left nach Right: <Device> <DerZiel.MountDirectory> <Filesystem> <Attribute> <Dump> <FSCK>.',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Wie pressen Sie einer Partition `/dev/sdb2` die Auslagerungsdateien (RAM Swapping) auf, und wie weisen Sie den Kernel direkt an diese zu nutzen?',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'Auslagerungs-Dateisystem erschafft sich rigoros mittels `mkswap`. Erwecken und füllen tut man es final über den `swapon` Befehl.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Irgendetwas frist den RAM. Das System scheint zu hängen. Welche flinken Aufrufe checken rasend schnell Ihre gesamte lebendig aktive Swap-Pool Quote?',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'Sie können getrost alle drei oben genannten Befehle abfeuern.'],
    correct: 3,
    explanation: '`free -h` bietet die populärste menschlich Lesbare Quote von RAM+SWAP gleichzeitig an, die anderen entblößen gezielt Swap Adressen und Limits.',
  },
]
