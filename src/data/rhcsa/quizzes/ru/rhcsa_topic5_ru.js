// RHCSA Quiz — Topic 5: File System (Русский) — 20 questions

export const rhcsaTopic5QuizzesRU = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда используется для создания (форматирования) файловой системы ext4 на разделе /dev/sdb1?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'Оба варианта A и B верны'],
    correct: 3,
    explanation: 'Команды `mkfs.ext4` и `mkfs -t ext4` абсолютно равнозначны. Вариант `mkfs.ext4` является более современным и кратким алиасом.',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Какая файловая система является стандартом по умолчанию (default) в RHEL9 для форматирования новых разделов?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'Red Hat выбрал XFS в качестве файловой системы по умолчанию начиная еще с RHEL7, благодаря ее высочайшей производительности и масштабируемости на огромных томах.',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'С помощью какой утилиты можно просмотреть детальную геометрическую и структурную информацию о ФС XFS, смонтированной в папке /data?',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: 'Команда `xfs_info <точка_монтирования>` выдает полную сводку по блокам и структуре XFS. Утилиты `tune2fs` и `dumpe2fs` принадлежат семейству ext2/3/4 и с XFS не работают.',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Поврежденная файловая система XFS на устройстве /dev/sdb1 может быть отремонтирована с помощью:',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'Инструмент `xfs_repair` является мощнейшим сканером и реставратором XFS. Важное условие: перед запуском ремонта устройство ОБЯЗАТЕЛЬНО должно быть ОТМОНТИРОВАНО (umount).',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Какой параметр монтирования (mount option) используется демоном systemd для ленивого, автоматического отмонтирования диска при его длительном простое?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'Опция `x-systemd.automount` не только делегирует управление монтированием демону systemd (монтируя "по требованию" при первом обращении к папке), но и часто работает в связке с таймаутом бездействия для авто-отключения.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Какая из команд первично зашифрует раздел /dev/sdc1, инициализировав на нем контейнер LUKS (потребует ввода нового пароля и фразы "YES")?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'Команда `cryptsetup luksFormat` жестко затирает данные и инициализирует новый зашифрованный том LUKS на физическом устройстве. Это деструктивное действие.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'После успешного luksFormat, какой командой нужно "отпереть" (расшифровать) контейнер на /dev/sdc1, назвав виртуальное устройство "datadisk"?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'Оба варианта A и B верны',
    ],
    correct: 3,
    explanation: 'В современных версиях cryptsetup глагол `open` универсален и является синонимом для более старого специфичного `luksOpen`. После ввода пароля расшифрованный диск появится по пути /dev/mapper/datadisk.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'В каком системном файле вы должны настроить автоматическое "отпирание" тома LUKS при загрузке сервера (связав его с заранее заготовленным файлом-ключом keyfile)?',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: 'Файл `/etc/crypttab` (Cryptography Table) занимается "распаковкой" шифрованных томов на раннем этапе загрузки до того, как в дело вступает fstab для их непосредственного монтирования.',
  },

  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Какая группа RPM-пакетов жизненно необходима к установке на клиенте RHEL9, чтобы он смог "подцепить" сетевой диск по протоколу NFS?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'Пакет `nfs-utils` содержит в себе все необходимые бинарники (типа mount.nfs) и демоны как для клиентской функции, так и для серверной отдачи папок по сети.',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Как выглядит безупречная запись в /etc/fstab для постоянного авто-монтирования расшаренной NFS папки с IP 192.168.1.10:/data в локальный каталог /mnt/data?',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Синтаксис 1-й колонки для NFS: `IP-адрес:/путь_на_сервере`. Указание типа ФС (3-я колонка): `nfs` (в RHEL9 это автоматом будет NFSv4 протокол).',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'При настройке автомаунтера AutoFS, какой конфигурационный файл будет содержать специфичные правила монтирования отдельных NFS шар ИМЕННО внутрь каталога-мастера /misc?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 1,
    explanation: 'Файл `/etc/auto.master` лишь указывает ДИРЕКТОРИЮ (/misc), а затем перенаправляет в отдельный текстовый файл-схему (map-file), такой как `/etc/auto.misc`, где уже лежат IP-адреса и папки.',
  },

  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда точечно выдаст права на чтение и запись (read/write) ИСКЛЮЧИТЕЛЬНО пользователю "mario" на директорию /project, не меняя при этом базовые POSIX (ugo) права?',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: 'Система ACL (Access Control Lists) позволяет выдать права кому угодно вне зависимости от владельца. `setfacl -m` (modify) `u:user:разрешения` создает гибкое исключение.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'С помощью какой утилиты можно просмотреть наложенные на файл расширенные списки контроля доступа (ACL)? (Т.к. ls -la покажет лишь знак "+" рядом с правами).',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: 'Команда `getfacl` распишет все права ACL в легко читаемом виде, с разбивкой по конкретным юзерам, группам, и эффективной (effective) маске.',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Каков главный эффект применения специального бита "setGID" (chmod g+s) к ОБЩИМ ДИРЕКТОРИЯМ сотрудников?',
    options: [
      'Любой бинарник, запущенный в директории, получит права рута (root)',
      'Любой новый файл или папка внутри этой директории будут автоматически НАСЛЕДОВАТЬ Группу родительской директории, а не группу своего создателя',
      'Оно блокирует право на запись (write) в папку для всех, кроме рута',
      'Папку становится физически невозможно удалить (даже руту)',
    ],
    correct: 1,
    explanation: 'Бит SGID (добавляет букву "s" в группу, например `rwxrwsr-x`) на директории обеспечивает коллаборацию: если группа папки — "devs", то файлы Васи, созданные в ней, тоже будут принадлежать группе "devs", и Петя из "devs" сможет их редактировать.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Вы хотите, чтобы новые файлы, появляющиеся в /shared, АВТОМАТИЧЕСКИ получали ACL "mario:rw". Какими синтаксическими вариациями можно наложить такой "дефолтный" (Default) ACL на папку?',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'Любой из вариантов А и С верны',
    ],
    correct: 3,
    explanation: 'Префикс `d:` перед правилом или аргумент `--default` делают одно: они накладывают ACL-правило "на будущее". Текущие файлы это не тронет, а вот новые будут появляться уже с правами марио.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Чтобы старая или кастомная файловая система ext4 начала поддерживать команды setfacl/getfacl, какой флаг-опцию нужно прописать колонке "Options" в /etc/fstab при ее монтировании?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'Флаг-опция `acl` включает поддержку расширенных атрибутов прав POSIX. Во многих современных дистрибутивах (включая стоковый RHEL9) ядро монтирует ext4 и xfs с этой опцией по умолчанию "из коробки".',
  },

  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Какая мощная опция в /etc/fstab категорически ЗАПРЕЩАЕТ выполнение любых бинарных программ (и скриптов) из смонтированной файловой системы (часто применяется к /tmp для защиты от взломов)?',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: 'Опция `noexec` лишает файлы свойства "исполняемый" на всем жестком диске. Да, даже bash-скрипт с 777 правами не запустится (хотя его можно накормить в bash силой: `bash script.sh`).',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Какая классическая утилита выведет сводную таблицу по всем примонтированным дискам системы с указанием ПОЛНОГО, ИСПОЛЬЗУЕМОГО и СВОБОДНОГО места на них?',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'Команда `df -h` (Disk Free, human-readable) — это первый инструмент мониторинга занимаемого места. Она сканирует файловые системы. (В отличие от `du`, которая бегает и рекурсивно весит каждый файлик на диске).',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Какой параметр в fstab скажет демону init (systemd) спокойно проигнорировать недоступный диск при загрузке сервера и ГАРАНТИРОВАТЬ то, что система стартанет без зависания в "Emergency Mode"?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: 'Опция `nofail` — лучший друг для сетевых NFS шар и периодически втыкаемых USB дисков. С ней сервер просто плюнет в лог об ошибке монтирования, но загрузит GUI/CLI и пустит юзеров работать.',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Вы только что расшифровали LUKS-накопитель /dev/sdc1. К КАКОМУ ИМЕННО пути устройства вы должны теперь применить команду `mkfs.ext4`, чтобы безопасно отформатировать его нутро, а не сломать сам контейнер шифрования?',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/volume_name',
      'cryptsetup mkfs /dev/mapper/volume_name',
      'luks-mkfs /dev/mapper/volume_name',
    ],
    correct: 1,
    explanation: 'После `luksOpen` вы всегда работаете ИСКЛЮЧИТЕЛЬНО с виртуальным блочным устройством внутри `/dev/mapper/<ваше_имя>`. Если вы запустите mkfs поверх голой "железки" /dev/sdc1 — вы навсегда затрете заголовок LUKS (LUKS Header) и убьете зашифрованные данные.',
  },
]
