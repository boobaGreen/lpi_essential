// RHCSA Quiz — Topic 4: Local Storage — LVM (Русский)
// 20 MCQ questions

export const rhcsaTopic4QuizzesRU = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выводит древовидный список всех блочных устройств (дисков и разделов) в системе?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: '`lsblk` (list block devices) наглядно рисует дерево дисков, их размеры, типы и куда они смонтированы (mount points).',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какая современная утилита безоговорочно рекомендуется для создания таблиц разделов GPT в RHEL9?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: '`parted` имеет нативную поддержку GPT и является официальным рекомендуемым инструментом RHCSA. (Хотя современный fdisk >= 2.26 тоже умеет GPT, parted предпочтительнее в скриптах).',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда в parted синтаксически верно создаст новый первичный (primary) раздел занимающий пространство диска от 1GiB до 2GiB на диске /dev/sdb?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'Классический синтаксис parted: `mkpart <тип> <файловая_система_метка> <старт> <конец>`. Слово "ext4" здесь не форматирует раздел, а лишь цепляет на него описательный ярлык-метку для ОС.',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда(ы) покажет уникальные идентификаторы (UUID) и фактический тип файловой системы для всех дисковых устройств?',
    options: ['lsblk -f', 'blkid', 'df -T', 'Оба варианта А и B верны'],
    correct: 3,
    explanation: '`blkid` выдает строгий построчный вывод UUID и TYPE. А `lsblk -f` (filesystem) выводит ту же информацию, но в красивой древовидной таблице. Оба инструмента незаменимы при верстке /etc/fstab.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Вы нарезали новые партиции утилитой parted. Какой волшебной командой надо "пнуть" ядро (kernel) системы, чтобы оно увидело новые диски СРАЗУ и БЕЗ ПЕРЕЗАГРУЗКИ (reboot)?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'Утилита `partprobe` сканирует таблицу разделов устройства и обновляет кэш ядра (создавая файлы-узлы /dev/sdb1), избавляя инженера от вынужденной перезагрузки сервера.',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какова строго-обязательная хронологическая цепочка команд создания Логического Тома (LVM) из голого чистого раздела?',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'Матрёшка LVM собирается снизу-вверх: Сначала готовим физику (`pvcreate`), затем объединяем их в виртуальную группу-пул (`vgcreate`), и только потом из этого пула нарезаем логические куски (`lvcreate`).',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда инициализирует и "клеймит" голый раздел диска, превращая его в строительный блок LVM (Physical Volume)?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: '`pvcreate <устройство>` записывает метаданные LVM на диск, официально делая его Физическим Томом (PV), пригодным для включения в Группы.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Как создать новую Группу Томов (Volume Group) с именем "datavg", сразу объединив в ней два физических диска: /dev/sdb1 и /dev/sdc1?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'Синтаксис: `vgcreate <ИМЯ_Группы> <Том1> [Том2...]`. Группа "проглатывает" физические диски и объединяет их емкость в единый виртуальный бассейн гигабайт.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'На сервере кончается место. Как "докинуть" новый физический жесткий диск /dev/sdd1 (уже прошедший стадию pvcreate) в СУЩЕСТВУЮЩУЮ Группу Томов "datavg", увеличив её объем?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: 'Команда `vgextend <ИмяГруппы> <НовыйPV>` расширяет (дополняет) существующую группу, вбрасывая в её "бассейн" новые экстенты (PE) с нового носителя.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выкинет на экран развернутую, детальную простыню метаинформации о существующих в ОС Группах Томов (VG)?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: '`vgdisplay` показывает имя пула, его суммарный размер, размер кубиков (PE Size, обычно 4MB), и главное — сколько свободного места (Free PE) в группе осталось для новых партиций.',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Как вырезать/создать НОВЫЙ Логический Том (LV) размером ровно 2 Гигабайта и назвать его "datalv", откусив это место от пула "datavg"?',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'Команда `lvcreate -L <Объем> -n <Название> <ИмяИсточника_VG>`. Большое `-L` позволяет задавать абсолютный вес в Мега/Гигабайтах (M/G), в то время как маленькое `-l` оперировало бы физическими экстентами (PE).',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Магический трюк админа! Как увеличить физический раздел LVM "datalv" (формат ext4) на 1 Гигабайт И ОДНОВРЕМЕННО автоматически "растянуть" саму файловую систему под новые границы одной командой?',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'Оба варианта А и В верны и приведут к нужному итогу',
    ],
    correct: 3,
    explanation: 'Вариант А — это классический "старый" ручной подход в два шага. Но вариант В — это золотой стандарт. Ключ `-r` (resizefs) заставляет утилиту автоматом за кулисами дернуть `resize2fs` для ext4 или `xfs_growfs` для xfs.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Вы расширили диск через lvextend БЕЗ ключа -r. У вас на нем крутится Файловая Система XFS. Какой командой вы должны растянуть эту файловую систему РУКАМИ, чтобы ОС увидела новое место?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'Ловушка XFS! В отличие от `resize2fs` (для семейства ext), команда `xfs_growfs` принципиально принимает в качестве цели НЕ файл блочного устройства (/dev/..), а СМОНТИРОВАННУЮ ДИРЕКТОРИЮ (Mount Point), на которой висит диск!',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Вы создали LV "datalv" в группе "datavg". По какому ДВОЙНОМУ пути (путям) система создаст символические файлы этого устройства в папке /dev для работы с ним?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv (а так же /dev/mapper/datavg-datalv)', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'LVM пробрасывает удобные симлинки: `/dev/<Имя_Группы>/<Имя_Тома>` (например /dev/vg0/lv_root). А в недрах ОС устройство всегда дублируется по пути маппера устройства ядра: `/dev/mapper/<ИмяГруппы>-<ИмяТома>`.',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какими командами можно посмотреть статистику (сводку или детальную) по всем Логическим Томам (LVs)?',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'Оба варианта B и C'],
    correct: 3,
    explanation: '`lvdisplay` вываливает многоэтажную детальную информацию по каждому тому. В то время как утилита `lvs` выдаст компактную, лаконичную и удобную строчную таблицу сводки (summary).',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Почему в таблице автозагрузки /etc/fstab профессионалы ВСЕГДА используют UUID вместо имен устройств (типа /dev/sdb1)?',
    options: [
      'UUID короче и его легче вбить руками в консоль',
      'Имена устройств (sda/sdb) плавающие: они могут сместиться, если воткнуть новую флешку или диск при ребуте. UUID же выжжен в FS аппаратно-намертво.',
      'Только формат UUID поддерживается парсером в RHEL9',
      'Проброс через UUID аппаратно ускоряет монтирование диска ядром',
    ],
    correct: 1,
    explanation: 'Имена блочных устройств назначаются ядром динамически: кто первым включился — тот /sda. Жестко привязывая диск в fstab к /sdb можно убить сервер при перезагрузке с вставленной флешкой. UUID решает эту проблему.',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Вы руками дописали строчку в системный /etc/fstab! Как ПРОВЕРИТЬ, что вы не опечатались в файле и не убьете сервер в "Kernel Panic" при следующем жестком ребуте?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: 'Важнейшее правило сисадмина RHEL: Всегда делай `mount -a` после редактирования fstab! Эта команда эмулирует процесс загрузки и попытается подгрузить всё, что еще не смонтировано из этого файла. Если есть опечатки или пробелы — она выбьет ошибку вам в консоль.',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Какая из строк содержит безупречно-идеальный и корректный синтаксис для файла /etc/fstab, для авто-монтирования LVM-тома в папку /data в формате ext4?',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Формат классического fstab — это строгие 6 колонок (столбцов): `<Устройство>  <К_какой_папке_подвязать> <Формат_ФС> <Опции(defaults)> <Dumb-backup=0> <FSCK_проверка=0>`.',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Как создать на пустом выделенном разделе диска /dev/sdb2 область кэш-подкачки оперативной памяти (SWAP) и сразу "согреть" (включить) её в работу?',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'Команда `mkswap` форматирует блочное устройство, нанося на него файловую систему подкачки. Команда `swapon` "вгрызается" в нее, горячим образом добавляя в текущую RAM. Чтобы не сбросило — закрепить в fstab.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какой из предложенных вариантов позволит вам своими глазами узреть активную память подкачки SWAP и её размер в ОС прямо сейчас?',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'Все вышеперечисленные варианты делают именно это'],
    correct: 3,
    explanation: 'И `swapon --show`, и чтение виртуального файла ядра `cat /proc/swaps`, и классическая утилита `free -h` покажут вам в своих колонках/формате, что своп существует и сколько Гигабайт кэша доступно ядру.',
  },
]
