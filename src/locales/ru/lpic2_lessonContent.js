export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Мониторинг ресурсов',
    comic: {
      title: 'Доктор, сервер горит! 🩺',
      panels: [
        { emoji: '📉', text: 'Планирование мощностей: Не ждите, пока сервер взорвется. Планируйте нагрузку заранее!' },
        { emoji: '🧠', text: 'Процессор и память: mpstat и vmstat — это ваши стетоскопы, чтобы слышать пульс системы.' },
        { emoji: '🚥', text: 'I/O Wait: Если диск медленный, процессор скучает, и вся система замедляется.' },
        { emoji: '📊', text: 'Исторический анализ: Используйте collectd или sar, чтобы видеть динамику нагрузки.' },
      ]
    },
    keyPoints: [
      { title: 'Мониторинг CPU/RAM', items: ['uptime — Средние значения нагрузки (1, 5, 15 мин)', 'vmstat — Статистика виртуальной памяти и подкачки', 'mpstat — Подробный отчет по каждому ядру процессора'] },
      { title: 'Мониторинг ввода-вывода и сети', items: ['iostat — Использование диска и пропускная способность', 'ss / netstat — Состояние соединений и сокетов', 'iftop / nload — Сетевой трафик в реальном времени'] },
      { title: 'Прогностический анализ', items: ['sar (sysstat) — Историческая база данных производительности', 'Benchmarks — Измерение теоретической максимальной производительности'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: 'Прогнозирование будущих потребностей',
    comic: {
      title: 'Хрустальный шар администратора 🔮',
      panels: [
        { emoji: '📅', text: 'Анализ трендов: Если данные растут на 10% в месяц, когда диск переполнится?' },
        { emoji: '📈', text: 'Графические инструменты: Cacti, MRTG и Graphite превращают цифры в понятные графики.' },
        { emoji: '🔔', text: 'Оповещения: Установите критические пороги. Лучше письмо сегодня, чем авария завтра!' },
        { emoji: '🏗️', text: 'Масштабирование: Выбирайте между мощностью (вертикальное) или количеством серверов (горизонтальное).' },
      ]
    },
    keyPoints: [
      { title: 'Централизованный мониторинг', items: ['Collectd — Легкий демон для сбора данных', 'Prometheus — Современная система мониторинга временных рядов', 'Nagios / Zabbix — Платформы для мониторинга и оповещения'] },
      { title: 'Визуализация', items: ['Grafana — Впечатляющие дашборды для ваших данных', 'Cacti — На базе RRDTool, идеально для исторических графиков'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Компоненты ядра',
    comic: {
      title: 'Что внутри ядра? 🧠',
      panels: [
        { emoji: '📦', text: 'Образ ядра: vmlinuz — это сжатое загрузочное сердце системы.' },
        { emoji: '🏗️', text: 'Initramfs: Маленький рюкзак с драйверами для монтирования основной файловой системы.' },
        { emoji: '🧩', text: 'Модули: Зачем загружать всё сразу? Модули (.ko) подгружаются по мере надобности.' },
        { emoji: '🩹', text: 'Патчинг: Обновляйте ядро, не переписывая его с нуля.' },
      ]
    },
    keyPoints: [
      { title: 'Образы и файлы', items: ['vmlinuz — Сжатый образ ядра', 'System.map — Таблица символов для отладки', 'config-X — Опции, использованные при компиляции'] },
      { title: 'Загрузка и RAM-диск', items: ['initrd / initramfs — Временная ФС для загрузки модулей корня', 'dracut / mkinitrd — Инструменты для создания initramfs'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: 'Компиляция ядра',
    comic: {
      title: 'Цифровой портной: Соберите своё ядро! 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig: Тщательно выбирайте, какие драйверы включить.' },
        { emoji: '⚙️', text: 'Компиляция: Превращает исходный код в бинарный файл, оптимизированный под ваш процессор.' },
        { emoji: '📦', text: 'Установка: Копирует файлы в /boot и модули в /lib/modules.' },
        { emoji: '🚀', text: 'Обновление GRUB: Загрузчик должен знать, что в городе новый шериф!' },
      ]
    },
    keyPoints: [
      { title: 'Цели конфигурации', items: ['make menuconfig — Графический интерфейс (ncurses)', 'make oldconfig — Использует текущую конфигурацию ядра', 'make localmodconfig — Включает только загруженные модули'] },
      { title: 'Фазы сборки', items: ['make — Компилирует ядро и модули', 'make modules_install — Устанавливает в /lib/modules', 'make install — Устанавливает в /boot и обновляет загрузчик'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: 'Управление ядром во время работы',
    comic: {
      title: 'Операция на открытом сердце 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo: Раскрывает секреты драйвера перед его загрузкой.' },
        { emoji: '🔧', text: 'Sysctl: Меняет параметры ядра (сеть, память) на ходу.' },
        { emoji: '⚠️', text: 'Dmesg: Слушает шепот (или крики) ядра в реальном времени.' },
        { emoji: '💾', text: '/proc/sys: Прямой доступ к внутренностям системы.' },
      ]
    },
    keyPoints: [
      { title: 'Инструменты модулей', items: ['lsmod — Показывает загруженные модули', 'insmod / rmmod — Загрузка/удаление (без зависимостей)', 'modprobe -v — Загрузка с деталями и зависимостями'] },
      { title: 'Параметры ядра', items: ['sysctl -a — Список всех параметров', 'sysctl -w net.ipv4.ip_forward=1 — Включение маршрутизации', '/etc/sysctl.conf — Делает изменения постоянными'] },
    ],
    terminal: { 
      prompt: '$ modprobe -v xfs\n$ sysctl kernel.hostname', 
      output: 'insmod /lib/modules/5.15.0/kernel/fs/xfs/xfs.ko\nkernel.hostname = linux-server' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'Настройка SysVinit',
    comic: {
      title: 'Старый мудрец: SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab: Партитура, говорящая системе, как запускаться строка за строкой.' },
        { emoji: '🔢', text: 'Уровни запуска (Runlevels): От 1 (однопользовательский) до 5 (графический).' },
        { emoji: '🚦', text: 'Скрипты K и S: Кто останавливается, а кто запускается на каждом уровне.' },
        { emoji: '🔄', text: 'Telinit q: Перезагружает конфигурацию без перезапуска всей деревни!' },
      ]
    },
    keyPoints: [
      { title: 'Файлы и директории', items: ['/etc/inittab — Основная конфигурация', '/etc/init.d/ — Директория сервисных скриптов', '/etc/rc[0-6].d/ — Символьные ссылки для уровней запуска'] },
      { title: 'Классические команды', items: ['runlevel — Показывает текущий и предыдущий уровни', 'init 6 — Перезагрузка системы', 'telinit q — Перезагрузка /etc/inittab'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\ nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: 'Восстановление системы',
    comic: {
      title: 'Команда спасения Linux 🚑',
      panels: [
        { emoji: '⌨️', text: 'Правка GRUB: Нажмите \'e\' при загрузке, чтобы дать ядру экстренные команды.' },
        { emoji: '🔧', text: 'init=/bin/bash: Возьмите управление до загрузки сервисов.' },
        { emoji: '📀', text: 'Live-CD / Rescue Mode: Смонтируйте вашу систему в /mnt и работайте через chroot.' },
        { emoji: '🛠️', text: 'LILO: Древний предок GRUB, всё еще обитающий в темных углах.' },
      ]
    },
    keyPoints: [
      { title: 'Параметры загрузки', items: ['1, s, single — Загрузка в однопользовательском режиме', 'systemd.unit=rescue.target — Современный эквивалент', 'rd.break — Остановка загрузки в initramfs'] },
      { title: 'Методы восстановления', items: ['chroot — Смена корня для исправления извне', 'fsck — Исправление ФС, мешающих загрузке'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: 'Продвинутые загрузчики',
    comic: {
      title: 'Властелины загрузки 👑',
      panels: [
        { emoji: '💿', text: 'UEFI против BIOS: Переход от старых MBR-секторов к современным ESP-разделам.' },
        { emoji: '📦', text: 'GRUB 2: Гибкий, мощный и способный грузить ядро почти с любой ФС.' },
        { emoji: '🌐', text: 'PXE: Загружайте армию серверов прямо по сети, без локальных дисков!' },
        { emoji: '🔑', text: 'Secure Boot: Цифровая подпись ядра для защиты от вторжений.' },
      ]
    },
    keyPoints: [
      { title: 'Компоненты GRUB 2', items: ['/boot/grub/grub.cfg — Финальный файл (не править!)', '/etc/default/grub — Переменные для пользовательской настройки', 'grub-mkconfig — Генерирует финальный файл'] },
      { title: 'Современные стандарты', items: ['GPT — Новая таблица разделов для дисков > 2 ТБ', 'ESP — EFI System Partition (FAT32)', 'systemd-boot — Легкая альтернатива для UEFI-систем'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Управление файловыми системами',
    comic: {
      title: 'Архитектор дисков 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs: Подправляет параметры ext2/3/4 без форматирования.' },
        { emoji: '🏷️', text: 'LABEL и UUID: Дайте дискам имена, чтобы не потеряться в /dev.' },
        { emoji: '💾', text: 'XFS_info: Изучайте продвинутую геометрию высокопроизводительных систем XFS.' },
        { emoji: '🔧', text: 'Mount -o: Добавьте суперспособности, такие как "noatime", для ускорения чтения.' },
      ]
    },
    keyPoints: [
      { title: 'Инструменты настройки', items: ['tune2fs -L DATA /dev/sdb1 — Установка метки', 'xfs_admin — Управление параметрами XFS', 'dumpe2fs — Технические детали ФС'] },
      { title: 'Идентификация', items: ['blkid — Показывает UUID и TYPE всех блоков', 'findmnt — Дерево текущих монтирований'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: 'Обслуживание файловых систем',
    comic: {
      title: 'Файловый механик 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck: Хирург, залечивающий раны ФС после сбоя питания.' },
        { emoji: '🧠', text: 'SMART: Слушайте знаки диска, пока он не умер окончательно.' },
        { emoji: '🧹', text: 'Badblocks: Проверяет каждый угол на наличие битых секторов.' },
        { emoji: '🧪', text: 'Debugfs: Погрузитесь во внутренности ФС для спасения удаленных файлов.' },
      ]
    },
    keyPoints: [
      { title: 'Здоровье диска', items: ['smartctl -a /dev/sda — Полный отчет о состоянии "железа"', 'smartctl -t short — Запуск быстрой проверки'] },
      { title: 'Восстановление', items: ['fsck.ext4 -v /dev/sdb1 — Детальная проверка и очистка', 'xfs_repair — Специфический инструмент для XFS'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: 'Управление устройствами с udev',
    comic: {
      title: 'Udev: Регулировщик ядра 🚨',
      panels: [
        { emoji: '⚡', text: 'Hotplug: Вставьте флешку, и udev узнает её в мгновение ока.' },
        { emoji: '📜', text: 'Свои правила: "Когда я втыкаю этот диск, всегда монтируй его в /backup".' },
        { emoji: '🔍', text: 'Udevadm: Инструмент для опроса udev и тестирования новых правил.' },
        { emoji: '📁', text: '/dev: Где udev создает узлы, чтобы мы могли говорить с "железом".' },
      ]
    },
    keyPoints: [
      { title: 'Конфигурация', items: ['/etc/udev/rules.d/ — Здесь пишутся пользовательские правила', '/lib/udev/rules.d/ — Системные правила (не трогать)'] },
      { title: 'Команды отладки', items: ['udevadm monitor — Слежка за событиями "железа" в реальном времени', 'udevadm info -a -p /sys/class/net/eth0 — Поиск атрибутов для правила'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'Настройка RAID',
    comic: {
      title: 'Вместе мы сила (и безопасность) 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID: Зачем верить одному диску, если можно собрать целую армию?' },
        { emoji: '⚡', text: 'RAID 0 (Stripe): Скорость вдвое выше, но если один диск умрет — всё пропало!' },
        { emoji: '🪞', text: 'RAID 1 (Mirror): У каждых данных есть близнец. Максимум защиты, половина места.' },
        { emoji: '🏗️', text: 'RAID 5/6: Магический баланс между скоростью, местом и отказоустойчивостью.' },
      ]
    },
    keyPoints: [
      { title: 'Популярные уровни RAID', items: ['RAID 0 — Чистая скорость (без избыточности)', 'RAID 1 — Зеркалирование (высокая доступность)', 'RAID 5 — Распределенная четность (терпит 1 отказ)', 'RAID 6 — Двойная четность (терпит 2 отказа)'] },
      { title: 'Инструменты Software RAID', items: ['mdadm — Универсальная команда для программного RAID в Linux', '/proc/mdstat — Окно в реальном времени в состояние массивов'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Олимпиада хранилищ',
    comic: {
      title: 'Экстремальная скорость 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm: Выжмите максимум из своего старого механического диска.' },
        { emoji: '🌠', text: 'NVMe: Шагните в эру флеш-памяти с протоколами для чистой скорости.' },
        { emoji: '⚡', text: 'SD-карты / SSD: Управляйте параметрами записи для долгого срока службы.' },
        { emoji: '🛠️', text: 'Smartctl: Потому что профилактика лучше слез над потерянными данными.' },
      ]
    },
    keyPoints: [
      { title: 'Оптимизация', items: ['hdparm -tT /dev/sda — Тест скорости чтения (кэш и диск)', 'hdparm -S 120 /dev/sda — Установка времени засыпания (10 мин)'] },
      { title: 'Современные технологии', items: ['nvme-cli — Инструмент для современных NVMe-дисков', 'SSD Trim — Поддерживает скорость, освобождая неиспользуемые блоки'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM)',
    comic: {
      title: 'Диски как кубики LEGO 🧱',
      panels: [
        { emoji: '📦', text: 'PV (Physical Volume): Превратите диски в сырьё.' },
        { emoji: '🏗️', text: 'VG (Volume Group): Соберите PV в один большой пул места.' },
        { emoji: '🍰', text: 'LV (Logical Volume): Отрезайте куски места и меняйте их размер на лету.' },
        { emoji: '📸', text: 'Snapshot: Заморозьте время для бэкапа перед рискованным обновлением.' },
      ]
    },
    keyPoints: [
      { title: 'Иерархия LVM', items: ['pvcreate / pvdisplay — Управление физическими дисками', 'vgcreate / vgextend — Управление группами томов', 'lvcreate / lvextend — Управление логическими томами'] },
      { title: 'Преимущества', items: ['Онлайн-расширение — Увеличение разделов без перезагрузки', 'Снапшоты — Согласованные бэкапы и быстрые тесты'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Базовая настройка сети',
    comic: {
      title: 'Гражданин сети 🌐',
      panels: [
        { emoji: '📍', text: 'Адресация: Каждому нужно имя и место для жительства.' },
        { emoji: '🗺️', text: 'Маршрутизация: "Если не знаешь пути — спроси шлюз по умолчанию".' },
        { emoji: '🔌', text: 'Интерфейсы: Ethernet, Wi-Fi или виртуальные карты для контейнеров и виртуалок.' },
        { emoji: '🛠️', text: 'Iproute2: Новая мощная сюита, заменившая старый ifconfig.' },
      ]
    },
    keyPoints: [
      { title: 'Конфигурация IP', items: ['ip addr show — Показ адресов и интерфейсов', 'ip route show — Таблица маршрутизации', 'ip -6 addr — Настройка IPv6'] },
      { title: 'Постоянство', items: ['Debian/Ubuntu: /etc/network/interfaces или Netplan', 'RHEL/CentOS: /etc/sysconfig/network-scripts/ или NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: 'Продвинутая настройка сети',
    comic: {
      title: 'Мосты и каналы 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding: Объединение карт для скорости или надежности.' },
        { emoji: '🌉', text: 'Bridging: Виртуальные мосты для связи виртуалок с внешним миром.' },
        { emoji: '📡', text: 'Профи Wi-Fi: Управляйте беспроводной связью через консоль.' },
        { emoji: '🚀', text: 'Traffic Control (tc): Тормозите закачки, чтобы серверы были в приоритете!' },
      ]
    },
    keyPoints: [
      { title: 'Технологии', items: ['Bonding — Агрегация линков (LACP, Round-robin)', 'Bridging — Типично для виртуализации (br0)'] },
      { title: 'Wireless', items: ['iw / iwconfig — Инструменты для 802.11 интерфейсов', 'wpa_supplicant — Менеджер аутентификации WPA/WPA2'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Office_Linux\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: 'Сетевой Troubleshooting',
    comic: {
      title: 'Детектив пакетов 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: Прослушивайте каждый бит, проходящий через вашу карту.' },
        { emoji: '🔬', text: 'Wireshark: Микроскоп для анализа пакетов через графику.' },
        { emoji: '📡', text: 'Nmap: Стучитесь в каждую дверь сервера, чтобы увидеть, кто ответит.' },
        { emoji: '🔎', text: 'Netstat/SS: Кто слушает? Проверяйте сокеты и процессы.' },
      ]
    },
    keyPoints: [
      { title: 'Анализ трафика', items: ['tcpdump -i eth0 -n — Живой анализ (без DNS-проверок)', 'nc (netcat) — Швейцарский нож для сети'] },
      { title: 'Сканы и сокеты', items: ['nmap -sV target — Сканирование портов и версий сервисов', 'ss -tulpn — Показ слушающих сокетов с PID'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Компиляция и установка',
    comic: {
      title: 'Цифровое шитьё: Компиляция софта 🧵',
      panels: [
        { emoji: '📦', text: 'Исходники: Качайте оригинал (tarball), чтобы получить новейшую версию.' },
        { emoji: '🛠️', text: './configure: Проверяет, всё ли готово для сборки.' },
        { emoji: '⚙️', text: 'Make: Готовит тысячи строк кода в одну готовую программу.' },
        { emoji: '🚀', text: 'Make install: Устанавливает программу в системные папки.' },
      ]
    },
    keyPoints: [
      { title: 'Фазы компиляции', items: ['./configure — Настройка и проверка зависимостей', 'make — Сборка исходного кода', 'make install — Установка бинарников'] },
      { title: 'Управление кодом', items: ['tar -xvf — Распаковка исходников', 'patch — Применение исправлений к коду'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: 'Операции бэкапа',
    comic: {
      title: 'Страховка жизни данных 💾',
      panels: [
        { emoji: '🛡️', text: 'Бэкап: Не спрашивайте, умрет ЛИ диск, спрашивайте — КОГДА. Будьте готовы!' },
        { emoji: '🔄', text: 'Rsync: Гений, копирующий только изменения и экономящий время.' },
        { emoji: '📦', text: 'Tar: Упаковывает целые ФС в один файл.' },
        { emoji: '☁️', text: 'Вне офиса: Храните копии подальше от сервера (в облаке или другом месте).' },
      ]
    },
    keyPoints: [
      { title: 'Типы бэкапа', items: ['Полный — Копия всех данных', 'Инкрементальный — Только изменения с последнего бэкапа', 'Дифференциальный — Только изменения с последнего полного бэкапа'] },
      { title: 'Инструменты', items: ['rsync -avz — Атомарная сжатая синхронизация', 'tar -cvf — Создание архивов файлов/папок', 'mt — Управление магнитными лентами (Legacy)'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/file.txt\nuser2/photo.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: 'Оповещение пользователей',
    comic: {
      title: 'Системный глашатай 📢',
      panels: [
        { emoji: '🔔', text: 'Wall: Транслирует сообщение на все открытые терминалы.' },
        { emoji: '📅', text: '/etc/motd: Сообщение дня, всплывающее при каждом входе.' },
        { emoji: '📔', text: '/etc/issue: Приветствие еще до ввода пароля.' },
        { emoji: '🛑', text: 'Shutdown: Предупреждает всех, что сервер уходит на техработы.' },
      ]
    },
    keyPoints: [
      { title: 'Прямые сообщения', items: ['wall — Сообщение всем залогиненным', 'write — Сообщение конкретному юзеру'] },
      { title: 'Статичные сообщения', items: ['/etc/motd — Message Of The Day (после входа)', '/etc/issue — Баннер перед локальным входом', '/etc/issue.net — Баннер перед SSH-входом'] },
    ],
    terminal: { 
      prompt: '# wall "Техработы в 22:00"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\nТехработы в 22:00' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'Базовая настройка DNS',
    comic: {
      title: 'Телефонная книга Сети 📖',
      panels: [
        { emoji: '🌐', text: 'DNS: Превращает имена (google.ru) в числа (IP-адреса).' },
        { emoji: '🏗️', text: 'BIND: Самый распространенный и мощный DNS-сервер всех времен.' },
        { emoji: '🗺️', text: 'Иерархия: От корневых серверов (.) через домены (.ru) до хоста.' },
        { emoji: '🔎', text: 'Запрос: Рекурсивно спрашивайте, пока кто-то не узнает ответ.' },
      ]
    },
    keyPoints: [
      { title: 'Компоненты BIND', items: ['named — Демон службы DNS', '/etc/bind/named.conf — Главная конфигурация', 'rndc — Инструмент удаленного управления BIND'] },
      { title: 'Типы серверов', items: ['Master — Содержит оригинал зоны', 'Slave — Копирует зону с мастера для избыточности (Zone Transfer)'] },
    ],
    terminal: { 
      prompt: '$ dig google.ru\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.ru.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: 'Управление зонами',
    comic: {
      title: 'Реестр доменов 🗺️',
      panels: [
        { emoji: '📝', text: 'A Record: Базовая связь Имя -> IPv4.' },
        { emoji: '📛', text: 'CNAME: Псевдоним для хоста, у которого уже есть имя.' },
        { emoji: '📧', text: 'MX: Говорит миру, кто принимает почту для домена.' },
        { emoji: '🔄', text: 'SOA: Свидетельство о рождении зоны с серийниками.' },
      ]
    },
    keyPoints: [
      { title: 'Записи DNS', items: ['A / AAAA — Имя -> IPv4 / IPv6', 'PTR — IP -> Имя (Обратная зона)', 'TXT — Свободный текст (SPF, DKIM)', 'NS — Указывает на авторитетные Name Servers'] },
      { title: 'Управление зоной', items: ['Стандартный Serial: YYYYMMDDNN (напр. 2024030601)', 'named-checkzone — Проверка ошибок перед загрузкой'] },
    ],
    terminal: { 
      prompt: '# named-checkzone primer.ru /etc/bind/db.primer', 
      output: 'zone primer.ru/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: 'Безопасность и DNSSEC',
    comic: {
      title: 'DNS под щитом 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: Цифровая подпись зон против фейковых перенаправлений.' },
        { emoji: '🚫', text: 'Контроль доступа: Решайте, кому можно спрашивать или копировать зону.' },
        { emoji: '🔭', text: 'TSIG: Секретные ключи для связи Master-Slave.' },
        { emoji: '🏰', text: 'Chroot: Запирает BIND в виртуальной тюрьме для защиты системы.' },
      ]
    },
    keyPoints: [
      { title: 'Защита', items: ['allow-query — Кто может спрашивать', 'allow-transfer — Кто может копировать зону (Критично!)'] },
      { title: 'Продвинутое', items: ['Split DNS — Разные данные для внутренних и внешних юзеров', 'TSIG — Ключи для безопасного Zone Transfer'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.ru AXFR', 
      output: '; Transfer failed. (Отказ, если настроено верно!)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Настройка Apache',
    comic: {
      title: 'Хозяин сайта 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server: Король веб-серверов, гибкий и вечный.' },
        { emoji: '📂', text: 'VirtualHost: Держите 100 сайтов на одном сервере без конфликтов.' },
        { emoji: '🧩', text: 'Модули: Включайте rewrite, proxy или php одной командой.' },
        { emoji: '🔎', text: 'Логи: Следите за визитерами или ищите причины 404 ошибки.' },
      ]
    },
    keyPoints: [
      { title: 'Структура Apache', items: ['/etc/apache2/ (Debian) или /etc/httpd/ (RHEL)', 'apache2ctl configtest — Проверка синтаксиса перед рестартом'] },
      { title: 'Virtual Hosting', items: ['Name-based VirtualHost — Много сайтов на одном IP', 'ServerName / ServerAlias — Имена сайта'] },
    ],
    terminal: { 
      prompt: '# a2ensite moj-sait.conf\n# systemctl reload apache2', 
      output: 'Enabling site moj-sait.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS и веб-безопасность',
    comic: {
      title: 'Зеленый замок 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS: Шифрует разговор браузера с сервером.' },
        { emoji: '📜', text: 'Сертификаты: Паспорт сайта от доверенного центра.' },
        { emoji: '🏎️', text: 'HTTP/2: Новая скоростная полоса для быстрой загрузки.' },
        { emoji: '🛡️', text: 'HSTS: Заставляет браузер всегда использовать защищенное соединение.' },
      ]
    },
    keyPoints: [
      { title: 'Сертификаты', items: ['CSR (Certificate Signing Request) — Запрос в центр', 'SSLCertificateFile / SSLCertificateKeyFile — Конфиг Apache'] },
      { title: 'Инструменты', items: ['OpenSSL — Работа с ключами и сертификатами', 'Let\'s Encrypt — Бесплатные авто-сертификаты'] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = moj-sait.ru' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx и Reverse Proxy',
    comic: {
      title: 'Быстрая альтернатива: Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx: Легкий, асинхронный и для тысяч юзеров сразу.' },
        { emoji: '🔀', text: 'Reverse Proxy: Ставьте Nginx перед серверами для защиты и балансировки.' },
        { emoji: '💨', text: 'Caching: Хранит статику в RAM для молниеносной выдачи.' },
        { emoji: '🛡️', text: 'WAF: Используйте Nginx как щит против веб-атак.' },
      ]
    },
    keyPoints: [
      { title: 'Конфиг Nginx', items: ['/etc/nginx/nginx.conf — Глобальный конфиг', 'server { ... } — Определение сайта (как VirtualHost)'] },
      { title: 'Reverse Proxy', items: ['proxy_pass — Пересылает запросы на другие серверы (напр. Node.js)'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: Мост к Windows',
    comic: {
      title: 'Два мира, один диск 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba: Протокол SMB, чтобы Windows видела Linux как файл-сервер.' },
        { emoji: '👥', text: 'Domain Controller: Управление юзерами и правами в Active Directory.' },
        { emoji: '📂', text: 'Шары: Решайте, что публично, а что приватно.' },
        { emoji: '📝', text: 'Smb.conf: Сердце настройки Samba.' },
      ]
    },
    keyPoints: [
      { title: 'Конфигурация', items: ['[global] — Сеть и безопасность', '[share] — Настройка папки-шары'] },
      { title: 'Инструменты', items: ['testparm — Проверка синтаксиса smb.conf', 'smbpasswd -a user — Добавление юзера в Samba'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Родной шеринг Linux',
    comic: {
      title: 'Network File System: Чистая прозрачность 📁',
      panels: [
        { emoji: '🔌', text: 'NFS: Монтируйте удаленные диски в LAN как локальные.' },
        { emoji: '🛡️', text: 'Exports: Кто может зайти? Права (ro/rw) по IP.' },
        { emoji: '🧱', text: 'RPC: Маленькие боты для связи между серверами.' },
        { emoji: '⚡', text: 'NFSv4: Современный, защищенный и дружит с файрволами.' },
      ]
    },
    keyPoints: [
      { title: 'Настройка', items: ['/etc/exports — Список шар и прав', 'exportfs -a — Применяет изменения мигом'] },
      { title: 'Опции монтирования', items: ['soft/hard — Поведение при обрыве связи', 'proto=tcp — TCP вместо UDP для стабильности'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/distant', 
      output: '/data  192.168.1.0/24(rw,sync,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP: Авто-адреса',
    comic: {
      title: 'Добро пожаловать в IP-отель 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP: Завхоз, выдающий комнату (IP) каждому гостю.' },
        { emoji: '⏱️', text: 'Lease Time: IP твой только на время. Продлевай вовремя!' },
        { emoji: '📍', text: 'Резервация: "Серверу всегда комнату 101". По MAC-адресу.' },
        { emoji: '📝', text: 'Dhcpd.conf: Правила распределения комнат.' },
      ]
    },
    keyPoints: [
      { title: 'DHCP Конфиг', items: ['subnet { ... } — Диапазон IP', 'option routers — Сообщить шлюз', 'option domain-name-servers — Сообщить DNS'] },
      { title: 'Relay Agent', items: ['dhcrelay — Пересылка запросов через границы сети'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'Аутентификация через PAM',
    comic: {
      title: 'PAM: Модульный вышибала 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM: Система для любых логинов (пароль, палец и прочее).' },
        { emoji: '🧩', text: 'Модули: Меняйте тип входа без переписывания софта.' },
        { emoji: '📋', text: 'Stack: "Сначала спроси пароль, потом проверь группу".' },
        { emoji: '🔐', text: 'Безопасность: Требуйте сложные пароли и бан после ошибок.' },
      ]
    },
    keyPoints: [
      { title: 'Типы модулей', items: ['auth — Проверка личности (пароль)', 'account — Активен ли аккаунт?', 'password — Управление сменой паролей', 'session — Дела до/после входа'] },
      { title: 'Настройка', items: ['/etc/pam.d/ — Директория с конфигами под сервисы'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'Клиент LDAP',
    comic: {
      title: 'Центральный ЗАГС Сети 📂',
      panels: [
        { emoji: '📋', text: 'LDAP: Эффективный справочник юзеров и групп в компании.' },
        { emoji: '🔍', text: 'Поиск: Найдите почту шефа или отдел коллеги мгновенно.' },
        { emoji: '🌐', text: 'Single Sign-On: Один пароль на все компы в офисе.' },
        { emoji: '⚡', text: 'NSS: Говорит Linux искать юзеров еще и в LDAP.' },
      ]
    },
    keyPoints: [
      { title: 'LDAP инструменты', items: ['ldapsearch — Запрос LDAP из консоли', 'ldapadd / ldapmodify — Управление базой данных'] },
      { title: 'Сервис NSS', items: ['/etc/nsswitch.conf — Порядок поиска (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=primer,dc=ru" "(uid=ivan)"', 
      output: 'dn: uid=ivan,ou=People,dc=primer,dc=ru\nobjectClass: posixAccount\nuid: ivan\nmail: ivan@primer.ru' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: 'Приватные туннели в Вебе 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN: Защищенный путь через публичный интернет.' },
        { emoji: '🔐', text: 'Шифрование: Никто не подслушает в туннеле.' },
        { emoji: '🏠', text: 'Хоум-офис: Работа из дома как за столом в офисе.' },
        { emoji: '🔑', text: 'TLS сертификаты: Только свои устройства заходят в туннель.' },
      ]
    },
    keyPoints: [
      { title: 'OpenVPN конфиг', items: ['/etc/openvpn/server.conf — Настройка сервера', '/etc/openvpn/client.conf — Настройка клиента'] },
      { title: 'Режимы', items: ['Tun (Routing) — IP-туннель (самый частый)', 'Tap (Bridging) — Эмуляция Ethernet-карты'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'Почтовый сервер (Postfix)',
    comic: {
      title: 'Цифровой почтальон 📩',
      panels: [
        { emoji: '📨', text: 'SMTP: Протокол, кидающий письма от сервера к серверу.' },
        { emoji: '🏤', text: 'Postfix: Надежный, быстрый и проще старого Sendmail.' },
        { emoji: '🛑', text: 'Анти-спам: Блочит мусор до того, как он выбесит юзеров.' },
        { emoji: '📋', text: 'Main.cf: Правила поведения почтальона.' },
      ]
    },
    keyPoints: [
      { title: 'Postfix Конфиг', items: ['myhostname — Имя вашего почтовика', 'mynetworks — Кому можно слать без пароля?', 'relayhost — Шлем почту через провайдера'] },
      { title: 'Алиасы и очередь', items: ['/etc/aliases — Перенаправления (напр. info -> ivan)', 'mailq — Чек зависших писем в очереди'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.primer.ru\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: 'Доставка и фильтры',
    comic: {
      title: 'Сортировка посылок 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve: Раскидывает письма по папкам автоматом.' },
        { emoji: '⚖️', text: 'Квоты: Никто не забьет диск своими письмами!' },
        { emoji: '🚫', text: 'SpamAssasin: Баллы опасности для почты.' },
        { emoji: '🦠', text: 'ClamAV: Скан вложений на вирусы.' },
      ]
    },
    keyPoints: [
      { title: 'Доставка', items: ['Maildir/ — Одно письмо — один файл (модно и быстро)', 'mbox — Все письма в одном толстом файле (олдскул)'] },
      { title: 'Протоколы', items: ['IMAP — Почта на сервере (для многих устройств)', 'POP3 — Скачать и удалить с сервера'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: 'Доступ к почте (Dovecot)',
    comic: {
      title: 'Твой почтовый ящик 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot: Сервер, который Outlook или Thunderbird юзают для чтения.' },
        { emoji: '🔐', text: 'IMAPS/POPS: Защита пароля шифрованием при чтении.' },
        { emoji: '💼', text: 'Shared Folders: Дележка папок с коллегами.' },
        { emoji: '📊', text: 'Мониторинг: Кто сейчас в сети?' },
      ]
    },
    keyPoints: [
      { title: 'Роли', items: ['MDA (Mail Delivery Agent) — Кладет почту на диск', 'MRA (Mail Retrieval Agent) — Дает клиенту читать'] },
      { title: 'Вход', items: ['Может брать системных юзеров или LDAP/MySQL'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Файрвол (iptables)',
    comic: {
      title: 'Городские стены 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter: Решает, что пускать, а что гнать.' },
        { emoji: '🚦', text: 'Chains: INPUT (ко мне), OUTPUT (от меня), FORWARD (через меня).' },
        { emoji: '🛑', text: 'Targets: ACCEPT (ок), DROP (игнор), REJECT (отказ).' },
        { emoji: '⚡', text: 'Stateful: Файрвол помнит, кто начал разговор.' },
      ]
    },
    keyPoints: [
      { title: 'Таблицы и Цепочки', items: ['Filter (дефолт) — Фильтрация пакетов', 'NAT — Подмена адресов (напр. роутер)', 'INPUT / OUTPUT / FORWARD : Главные цепи'] },
      { title: 'Синтаксис', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — Открыть SSH', 'iptables -P INPUT DROP — Закрыть всё остальное'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: 'Локальная безопасность и вторжения',
    comic: {
      title: 'Цифровые стражи 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban: Ошибся паролем — в тюрьму (бан IP).' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter: Ищет следы хакеров в засаде.' },
        { emoji: '📜', text: 'Logwatch: Утренняя выжимка логов на почту.' },
        { emoji: '🔒', text: 'Sudoers: Не давай всем все ключи. Только минимум!' },
      ]
    },
    keyPoints: [
      { title: 'Оружие защиты', items: ['rkhunter / chkrootkit — Скан на малварь/руткиты', 'aide / tripwire — Чек изменений системных файлов'] },
      { title: 'Следы входа', items: ['last — Последние входы', 'faillog — Отчет о провалах'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'Безопасность SSH',
    comic: {
      title: 'Бронированный замок 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH: Твой секретный лаз в сервер.' },
        { emoji: '🚫', text: 'Без пароля: Юзай ключи (Public/Private). Так в сто раз надежнее!' },
        { emoji: '🕵️‍♂️', text: 'Audit: Кто, когда и какую команду слал?' },
        { emoji: '🔒', text: 'Banner: Предупреждение для любопытных.' },
      ]
    },
    keyPoints: [
      { title: 'Закалка SSH', items: ['PermitRootLogin no — Никакого рута напрямую', 'PasswordAuthentication no — Только ключи', 'AllowUsers — Пускать только избранных'] },
      { title: 'Управление ключами', items: ['ssh-keygen — Твоя пара ключей', 'ssh-copy-id — Закинуть публичный ключ на сервер'] },
    ],
    terminal: { 
      prompt: '$ ssh-keygen -t ed25519\n$ ssh-copy-id user@server', 
      output: 'Generating public/private ed25519 key pair.\nNumber of key(s) added: 1' 
    },
  },
}
