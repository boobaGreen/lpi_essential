// LPIC-1 101 Quiz — Тема 4: Устройства, файловые системы Linux, FHS (Русский)

export const lpic1_101_topic4_ru = [
  // ─── 104.1 Создание разделов и файловых систем (5 вопросов) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какой интерактивный инструмент командной строки традиционно используется для создания и управления таблицами разделов MBR?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` — это традиционный интерактивный текстовый инструмент для управления таблицами разделов диска (особенно MBR).',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какой инструмент разбиения диска специально разработан для работы с GPT (GUID Partition Table) и имеет интерфейс, похожий на fdisk?',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) создан по образцу fdisk, но предназначен специально для работы с таблицами разделов GPT.',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'В отличие от fdisk, какой инструмент может применять изменения немедленно, не требуя явной команды записи?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) выполняет команды (например, создание или удаление разделов) немедленно на диске.',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда записывает файловую систему ext4 на раздел /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` создает файловую систему ext4 на указанном устройстве или разделе.',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда подготавливает раздел для использования в качестве пространства подкачки (swap)?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` форматирует раздел или файл с сигнатурой раздела подкачки.',
  },

  // ─── 104.2 Поддержание целостности файловых систем (5 вопросов) ───
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Что является критическим требованием перед запуском `fsck` для восстановления файловой системы?',
    options: [
      'Систему необходимо перезагрузить в режим восстановления (rescue)',
      'Файловая система должна быть размонтирована или смонтирована только для чтения',
      'Пользователь root должен запустить ее с флагом --force',
      'Файловая система должна быть логическим томом'
    ],
    correct: 1,
    explanation: 'Запуск fsck на активно смонтированной файловой системе в режиме чтения-записи может привести к серьезному повреждению данных.',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда показывает общий объем диска, используемое и свободное место во всех смонтированных файловых системах?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) сообщает об использовании дискового пространства файловой системы. Флаг `-h` делает вывод понятным для человека.',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какую команду использовать, чтобы узнать объем дискового пространства, занимаемого конкретным каталогом (например, /var/log)?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) оценивает использование пространства файлами; `-s` выводит итоговую сумму.',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Какой инструмент позволяет изменять параметры (например, максимальное количество монтирований или поведение при ошибках) в существующей файловой системе ext4?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` позволяет настраивать параметры файловых систем ext2/ext3/ext4.',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Какая команда специально используется для проверки и восстановления файловых систем XFS?',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: 'Хотя `fsck.xfs` существует для совместимости, `xfs_repair` является основным инструментом для проверки и восстановления XFS.',
  },

  // ─── 104.3 Управление монтированием и размонтированием файловых систем (5 вопросов) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какой конфигурационный файл ОС считывает при загрузке для автоматического монтирования файловых систем?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) содержит статическую информацию о файловых системах и точках их монтирования.',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда монтирует все файловые системы, указанные в /etc/fstab с опцией "auto"?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` выполняет монтирование для каждой записи в /etc/fstab, за исключением тех, что отмечены "noauto".',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Каково назначение шестого поля (pass) в файле /etc/fstab?',
    options: [
      'Оно определяет количество раз, которое файловая система может быть смонтирована',
      'Оно контролирует, использует ли файловая система подкачку',
      'Оно определяет порядок, в котором fsck проверяет файловую систему при загрузке',
      'Оно устанавливает частоту резервного копирования для dump'
    ],
    correct: 2,
    explanation: 'Поле pass указывает fsck порядок проверки. Корень — 1, остальные — 2, 0 означает не проверять.',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какая опция монтирования в fstab запрещает пользователям запускать любые исполняемые файлы в этой файловой системе?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'Опция монтирования `noexec` предотвращает выполнение бинарных файлов в файловой системе.',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Какой файл (или символическая ссылка) предоставляет список текущих смонтированных файловых систем по данным ядра?',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` — это виртуальный файл, отражающий текущее состояние монтирований в ядре.',
  },

  // ─── 104.5 Управление правами доступа к файлам и владением (6 вопросов) ───
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Если файл имеет права доступа `rwxr-xr--`, каков числовой (восьмеричный) эквивалент?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4). Итог: 754.',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда изменяет владельца и группу файла report.doc на пользователя "alice" и группу "finance"?',
    options: ['chmod alice:finance report.doc', 'chown alice:finance report.doc', 'chgrp alice:finance report.doc', 'chuser alice:finance report.doc'],
    correct: 1,
    explanation: '`chown user:group file` изменяет и владельца, и группу.',
  },
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Что происходит, когда для бинарного исполняемого файла установлен бит SUID (Set User ID)?',
    options: [
      'Файл может быть изменен только пользователем root',
      'При запуске процесс выполняется с правами владельца файла',
      'Файл автоматически запускается в фоновом режиме',
      'Никто, кроме root, не может его удалить'
    ],
    correct: 1,
    explanation: 'SUID позволяет процессу выполняться с привилегиями владельца файла.',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Каталог (/shared) имеет права доступа 1777 (drwxrwxrwt). Что здесь делает sticky bit ("t")?',
    options: [
      'Все вновь создаваемые файлы наследуют владение группой',
      'Он делает все файлы доступными только для чтения',
      'Он запрещает пользователям удалять чужие файлы внутри этого каталога',
      'Он делает каталог неизменяемым'
    ],
    correct: 2,
    explanation: 'Sticky bit в каталоге не позволяет пользователям удалять файлы, владельцами которых они не являются.',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Если системная umask равна 0022, какие права доступа по умолчанию будут у вновь созданного текстового файла?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Файлы начинаются с базовых прав 666; 666 - 022 = 644.',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какой флаг используется с `chmod` или `chown` для применения изменений ко всем файлам и подкаталогам внутри каталога?',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: 'Флаг `-R` означает рекурсивное применение команды к каталогу и всему его дереву.',
  },

  // ─── 104.6 Создание и изменение жестких и символических ссылок (4 вопроса) ───
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какая из следующих команд создает символическую ссылку с именем `shortcut`, указывающую на `file.txt`?',
    options: ['ln file.txt shortcut', 'ln -s file.txt shortcut', 'link file.txt shortcut', 'ln -c file.txt shortcut'],
    correct: 1,
    explanation: '`ln -s target link_name` создает символическую ссылку.',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Какое утверждение верно в отношении жестких ссылок?',
    options: [
      'Они могут указывать на каталоги',
      'Они могут охватывать различные файловые системы',
      'Они имеют тот же номер inode, что и исходный файл',
      'Если исходный файл удален, жесткая ссылка перестает работать'
    ],
    correct: 2,
    explanation: 'Жесткие ссылки указывают непосредственно на inode и имеют тот же номер inode, что и оригинал.',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Что происходит с символической ссылкой, если исходный файл, на который она указывает, удален?',
    options: [
      'Символическая ссылка становится "битой" и перестает работать',
      'Символическая ссылка автоматически удаляется',
      'Данные остаются доступными через символическую ссылку',
      'Символическая ссылка преобразуется в жесткую ссылку'
    ],
    correct: 0,
    explanation: 'Символическая ссылка становится "битой" (dangling), если ее цель удалена.',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Что происходит со счетчиком ссылок в inode файла при создании на него жесткой ссылки?',
    options: [
      'Он уменьшается на 1',
      'Он увеличивается на 1',
      'Он не меняется',
      'Он сбрасывается в 0'
    ],
    correct: 1,
    explanation: 'Создание жесткой ссылки увеличивает счетчик ссылок (nlink) в inode.',
  },

  // ─── 104.7 Поиск системных файлов и размещение файлов в соответствии с FHS (5 вопросов) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Согласно стандарту FHS, где должны располагаться общесистемные конфигурационные файлы?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc содержит специфичные для хоста общесистемные конфигурационные файлы.',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Какой каталог предназначен для быстро меняющихся данных, таких как лог-файлы и базы данных?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var содержит переменные файлы данных.',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Где должны устанавливаться дополнительные программные пакеты сторонних разработчиков согласно FHS?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt зарезервирован для установки дополнительных программных пакетов.',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'В современных системах Linux, придерживающихся FHS, какой каталог часто является символической ссылкой на /usr/bin?',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: 'Многие современные дистрибутивы объединили `/bin` и `/usr/bin`, сделав `/bin` ссылкой на `/usr/bin`.',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Какой каталог содержит временные файлы, сохранность которых ПРИ ПЕРЕЗАГРУЗКЕ не гарантируется?',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` предназначен для временных файлов; во многих системах он очищается при загрузке.',
  },
];
