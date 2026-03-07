// LPIC-1 101 Quiz — Тема 1: Архитектура системы (Русский)

export const lpic1_101_topic1_ru = [
  // ─── 101.1 Аппаратное обеспечение и периферия (12 вопросов) ───
  {
    id: 'q-lpic1-101-1-001', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какое главное преимущество UEFI перед традиционным BIOS?',
    options: [
      'Это открытое аппаратное обеспечение (open source)',
      'Поддерживает только 32-битные системы',
      'Поддерживает разделы GPT более 2 ТБ и Secure Boot',
      'Не требует загрузчика, такого как GRUB2'
    ],
    correct: 2,
    explanation: 'UEFI заменяет традиционный BIOS, предлагая поддержку дисков GPT > 2 ТБ, Secure Boot и более быстрый процесс загрузки.',
  },
  {
    id: 'q-lpic1-101-1-002', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какой виртуальный каталог ядра содержит информацию об оборудовании системы и процессах?',
    options: ['/dev', '/sys', '/proc', '/etc'],
    correct: 2,
    explanation: '/proc — это виртуальная файловая система в памяти, которая предоставляет доступ к данным ядра, процессам и информации об оборудовании.',
  },
  {
    id: 'q-lpic1-101-1-003', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какой виртуальный каталог используется udev для динамического создания узлов устройств?',
    options: ['/dev', '/udev', '/sys', '/proc'],
    correct: 0,
    explanation: '/dev содержит узлы устройств (например, /dev/sda), которыми динамически управляет служба udev.',
  },
  {
    id: 'q-lpic1-101-1-004', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выводит список всех PCI-устройств, подключенных к системе?',
    options: ['lsusb', 'lshw', 'lspci', 'lsscsi'],
    correct: 2,
    explanation: 'lspci отображает подробную информацию обо всех шинах и устройствах PCI в системе.',
  },
  {
    id: 'q-lpic1-101-1-005', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выводит список модулей ядра, загруженных в данный момент в память?',
    options: ['modprobe', 'lsmod', 'insmod', 'modinfo'],
    correct: 1,
    explanation: 'lsmod читает /proc/modules и выводит отформатированный список загруженных модулей ядра.',
  },
  {
    id: 'q-lpic1-101-1-006', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда является рекомендуемым способом загрузки модуля ядра вместе с его зависимостями?',
    options: ['insmod', 'depmod', 'modprobe', 'lsmod'],
    correct: 2,
    explanation: 'modprobe интеллектуально загружает модуль и автоматически разрешает/загружает все зависимые модули.',
  },
  {
    id: 'q-lpic1-101-1-007', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Как безопасно удалить загруженный модуль ядра с именем "e1000"?',
    options: ['rmmod -f e1000', 'modprobe -r e1000', 'delete e1000', 'rm /lib/modules/e1000'],
    correct: 1,
    explanation: 'modprobe -r безопасно удаляет модуль и все неиспользуемые зависимые модули.',
  },
  {
    id: 'q-lpic1-101-1-008', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Какова цель файловой системы /sys (sysfs)?',
    options: [
      'Хранение конфигурационных файлов системы (как /etc)',
      'Хранение скомпилированных образов ядра',
      'Отображение модели устройств ядра и иерархии оборудования',
      'Регистрация системных ошибок'
    ],
    correct: 2,
    explanation: 'sysfs (/sys) предоставляет иерархию внутренних объектов ядра и драйверов устройств пользовательскому пространству.',
  },
  {
    id: 'q-lpic1-101-1-009', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда показывает сообщения, сгенерированные ядром во время процесса загрузки?',
    options: ['syslog', 'dmesg', 'tail /var/log/messages', 'journalctl -k'],
    correct: 1,
    explanation: 'dmesg выводит кольцевой буфер ядра (kernel ring buffer), содержащий сообщения об обнаружении оборудования.',
  },
  {
    id: 'q-lpic1-101-1-010', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какой файл содержит точные параметры конфигурации, переданные ядру загрузчиком?',
    options: ['/boot/grub/grub.cfg', '/sys/kernel', '/etc/default/grub', '/proc/cmdline'],
    correct: 3,
    explanation: '/proc/cmdline содержит аргументы, переданные ядру при загрузке.',
  },
  {
    id: 'q-lpic1-101-1-011', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'В каком каталоге должны находиться файлы для автоматической загрузки модулей ядра при загрузке системы?',
    options: ['/etc/modprobe.d/', '/etc/modules-load.d/', '/lib/modules/', '/boot/modules/'],
    correct: 1,
    explanation: '/etc/modules-load.d/ используется systemd для безусловной загрузки модулей при старте.',
  },
  {
    id: 'q-lpic1-101-1-012', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда показывает подробную информацию о модуле (автор, описание, параметры)?',
    options: ['modprobe -i', 'modinfo', 'lsmod -v', 'sysctl'],
    correct: 1,
    explanation: 'modinfo извлекает и отображает метаданные из файла модуля ядра.',
  },

  // ─── 101.2 Процесс загрузки (10 вопросов) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Каков правильный порядок процесса загрузки Linux?',
    options: [
      'Bootloader -> BIOS -> init -> Kernel',
      'BIOS/UEFI -> Bootloader -> Kernel -> init/systemd',
      'Kernel -> BIOS -> Bootloader -> systemd',
      'Bootloader -> Kernel -> BIOS -> init'
    ],
    correct: 1,
    explanation: 'Cначала выполняется прошивка (BIOS/UEFI), затем управление передается загрузчику (GRUB), который загружает ядро (Kernel), а оно запускает первый процесс (init/systemd).',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какова цель initramfs во время процесса загрузки?',
    options: [
      'Форматирование жесткого диска',
      'Предоставление временной корневой файловой системы с драйверами для монтирования реального корня',
      'Проверка оперативной памяти на наличие ошибок',
      'Это резервная копия ядра'
    ],
    correct: 1,
    explanation: 'initramfs загружается загрузчиком и предоставляет модули (например, RAID, LVM), необходимые для монтирования основной файловой системы.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какой процесс исторически является первым процессом пользователя, запускаемым ядром с PID 1?',
    options: ['bash', 'grub', 'init', 'kthreadd'],
    correct: 2,
    explanation: 'init (или systemd в современных системах) — это первый процесс, запускаемый после загрузки ядра, получающий ID 1.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Какой основной конфигурационный файл генерируется для GRUB2?',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg — основной файл, генерируемый командой grub-mkconfig.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какой файл следует редактировать для настройки времени ожидания GRUB2 или параметров ядра по умолчанию?',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: '/etc/default/grub содержит настраиваемые переменные, используемые для генерации grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'В каком каталоге находятся скрипты, которые GRUB2 использует для создания конфигурационного файла?',
    options: ['/boot/grub/', '/etc/default/grub.d/', '/etc/grub.d/', '/usr/lib/grub/'],
    correct: 2,
    explanation: '/etc/grub.d/ содержит исполняемые скрипты, используемые grub-mkconfig для построения grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'После редактирования /etc/default/grub в системе Debian/Ubuntu, какая команда применяет изменения?',
    options: ['grub-install /dev/sda', 'update-grub', 'grub-update', 'systemctl restart grub'],
    correct: 1,
    explanation: 'update-grub — это скрипт в Debian, который запускает grub-mkconfig для обновления конфигурации.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда устанавливает загрузчик GRUB2 в MBR первого жесткого диска?',
    options: ['grub-mkconfig /dev/sda', 'update-grub /dev/sda', 'grub-install /dev/sda', 'fdisk /dev/sda'],
    correct: 2,
    explanation: 'grub-install копирует образы GRUB и встраивает их в MBR указанного диска.',
  },
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Каков максимальный размер диска, поддерживаемый традиционной таблицей разделов MBR?',
    options: ['2 ГБ', '2 ТБ', '8 ТБ', '8 ZiB'],
    correct: 1,
    explanation: 'MBR использует 32-битную адресацию секторов, что ограничивает размер разделов 2 терабайтами.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда в системе с systemd показывает логи именно текущей загрузки?',
    options: ['journalctl -b', 'dmesg -boot', 'tail /var/log/boot.log', 'systemctl logs'],
    correct: 0,
    explanation: 'journalctl -b фильтрует журнал systemd, чтобы показать сообщения только с момента последнего запуска.',
  },

  // ─── 101.3 Уровни выполнения и цели (10 вопросов) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'В SysVinit какой уровень выполнения традиционно используется для многопользовательского режима С графическим интерфейсом?',
    options: ['Runlevel 1', 'Runlevel 3', 'Runlevel 5', 'Runlevel 6'],
    correct: 2,
    explanation: 'Уровень выполнения 5 включает сеть, многопользовательский режим и запускает графическую оболочку.',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая цель (target) systemd эквивалентна уровню выполнения 3 SysVinit (текстовый многопользовательский режим)?',
    options: ['graphical.target', 'multi-user.target', 'network.target', 'rescue.target'],
    correct: 1,
    explanation: 'multi-user.target обеспечивает полноценную многопользовательскую среду без графики.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда показывает текущую цель загрузки по умолчанию в системе systemd?',
    options: ['systemctl default', 'systemctl status', 'systemctl get-default', 'runlevel'],
    correct: 2,
    explanation: 'systemctl get-default выводит цель, в которую systemd будет загружаться по умолчанию.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Как переключить работающую систему в текстовый режим (multi-user.target) без перезагрузки?',
    options: [
      'systemctl switch multi-user.target',
      'systemctl isolate multi-user.target',
      'systemctl start multi-user.target',
      'systemctl default multi-user.target'
    ],
    correct: 1,
    explanation: 'systemctl isolate останавливает ненужные юниты и немедленно переходит к новой цели.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'В чем основное различие между rescue.target и emergency.target?',
    options: [
      'Разницы нет, это псевдонимы',
      'rescue.target монтирует локальные файлы и базовые службы; emergency.target монтирует только / в режиме чтения',
      'emergency.target предоставляет сеть, rescue.target — нет',
      'rescue.target предназначен для GRUB'
    ],
    correct: 1,
    explanation: 'emergency.target — самый минимальный режим восстановления. rescue.target (runlevel 1) монтирует больше файловых систем.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая из следующих команд немедленно и безопасно перезагружает систему?',
    options: ['shutdown -h now', 'shutdown -r now', 'halt', 'init 0'],
    correct: 1,
    explanation: 'shutdown -r now (или reboot) немедленно перезагружает систему.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда планирует выключение системы через 15 минут с предупреждающим сообщением?',
    options: [
      'shutdown -t 15 "Выключение"',
      'shutdown +15 "Выключение"',
      'shutdown -h 15m "Выключение"',
      'halt +15'
    ],
    correct: 1,
    explanation: 'shutdown +15 планирует выключение через 15 минут и уведомляет об этом пользователей.',
  },
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Как отменить запланированное выключение (shutdown)?',
    options: ['shutdown -a', 'shutdown -c', 'killall shutdown', 'systemctl cancel shutdown'],
    correct: 1,
    explanation: 'shutdown -c отменяет любое ожидающее запланированное выключение.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда отправляет сообщение на терминалы всех вошедших в систему пользователей?',
    options: ['broadcast', 'echo-all', 'wall', 'send'],
    correct: 2,
    explanation: 'wall (write all) отправляет сообщение на все активные терминалы.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'В SysVinit какая команда выводит предыдущий и текущий уровни выполнения?',
    options: ['showlevel', 'runlevel', 'who -r', 'runlevel ИЛИ who -r'],
    correct: 3,
    explanation: 'Обе команды `runlevel` и `who -r` отображают предыдущий и текущий уровни выполнения.',
  },
];

