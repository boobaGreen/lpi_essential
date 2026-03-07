export const lpic2_extendedContent_ru = {
  'lpic2-200-1': {
    title: 'Измерение и планирование ресурсов',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Глубокий анализ ресурсов' },
      { type: 'paragraph', text: 'Планирование мощностей — это не просто просмотр графиков, а понимание того, как система реагирует под нагрузкой. Вы должны определить, где находится узкое место: в процессоре (CPU), оперативной памяти (RAM), подсистеме ввода-вывода (I/O) или сети.' },
      { type: 'heading', level: 3, emoji: '🧠', text: 'Память и Swap с vmstat' },
      { type: 'paragraph', text: 'В то время как `free -m` дает мгновенный снимок, `vmstat` показывает тенденцию. Поля `si` (swap in) и `so` (swap out) являются критическими: если они постоянно выше нуля, система находится в состоянии "thrashing" (пробуксовка), тратя больше времени на перемещение данных на диск, чем на выполнение кода.' },
      { type: 'code', title: 'Динамический мониторинг', prompt: '$ vmstat 1 5', output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78910 234567    0    0     5    10  123  456  2  1 96  1  0' },
      { type: 'heading', level: 3, emoji: '💾', text: 'Анализ ввода-вывода с iostat' },
      { type: 'paragraph', text: 'Пакет `sysstat` предоставляет `iostat`. Это необходимо для понимания того, не слишком ли медленны ваши диски.' },
      { type: 'table', headers: ['Метрика', 'Описание', 'Критический предел'], rows: [
        ['%util', 'Процент времени, в течение которого диск был занят', '> 80% указывает на сатурацию'],
        ['await', 'Среднее время (мс) ответа на запрос', '> 10-20 мс для механических HDD — это много'],
        ['svctm', 'Эффективное время обслуживания диска', 'Если близко к await: диск в порядке, но перегружен'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Используйте `iostat -xz 1` для просмотра только активных устройств и расширенной статистики.' }
    ]
  },

  'lpic2-201-1': {
    title: 'Компоненты и компиляция ядра',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Архитектура ядра Linux' },
      { type: 'paragraph', text: 'Ядро — это не монолитный блок, а серия подсистем, готовых управлять оборудованием, памятью и процессами. Умение компилировать его позволяет создавать системы, оптимизированные под конкретное железо.' },
      { type: 'heading', level: 3, emoji: '📦', text: 'Исходный код' },
      { type: 'paragraph', text: 'Исходники обычно находятся в `/usr/src/linux`. Файл `.config` — это душа кастомизации: он содержит тысячи опций, определяющих, что будет включено или исключено.' },
      { type: 'table', headers: ['Цель make', 'Описание'], rows: [
        ['make menuconfig', 'Текстовый интерфейс (ncurses) для настройки'],
        ['make xconfig', 'Графический интерфейс (Qt) для настройки'],
        ['make oldconfig', 'Обновляет старый .config новыми опциями'],
        ['make bzImage', 'Компилирует сжатый образ ядра'],
        ['make modules', 'Компилирует отдельные модули'],
        ['make modules_install', 'Копирует модули в /lib/modules/$(uname -r)'],
      ]},
      { type: 'code', title: 'Современный процесс компиляции', prompt: '# make bzImage\n# make modules\n# make modules_install\n# make install', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Никогда не забывайте выполнять `make modules_install` перед `make install`, иначе ядро загрузится, но не найдет драйверов для остальной части системы!' }
    ]
  },

  'lpic2-201-2': {
    title: 'Управление во время работы и загрузка модулей',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Модули: Plug-and-Play ядра' },
      { type: 'paragraph', text: 'Модули позволяют добавлять функции (например, драйверы Wi-Fi или файловые системы) без перезагрузки сервера.' },
      { type: 'table', headers: ['Команда', 'Функция'], rows: [
        ['lsmod', 'Список загруженных модулей'],
        ['insmod', 'Загружает конкретный .ko файл (без зависимостей)'],
        ['rmmod', 'Удаляет модуль'],
        ['modprobe', 'Рекомендуемый способ: загрузка/удаление с учетом зависимостей'],
        ['modinfo', 'Показывает детали, параметры и лицензию модуля'],
      ]},
      { type: 'code', title: 'Пример использования modprobe', prompt: '# modinfo e1000\n# modprobe e1000\n# modprobe -r e1000', output: 'filename: /lib/modules/.../e1000.ko\nlicense: GPL\ndescription: Intel(R) PRO/1000 Network Driver' },
      { type: 'heading', level: 3, emoji: '📁', text: 'Персистентность модулей' },
      { type: 'paragraph', text: 'Чтобы модуль загружался при загрузке, добавьте его в `/etc/modules` или создайте файл в `/etc/modules-load.d/`. Для передачи параметров используйте файлы в `/etc/modprobe.d/`.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Кастомизация и исправления (Patching)',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Поддержание ядра в актуальном состоянии' },
      { type: 'paragraph', text: 'Часто вам не нужно скачивать новое ядро целиком (это гигабайты данных), а достаточно применить "патч" для исправления багов или уязвимостей.' },
      { type: 'code', title: 'Применение патча', prompt: '$ bzcat patch-5.10.x.bz2 | patch -p1', output: 'patching file Makefile\npatching file arch/x86/Makefile\n...' },
      { type: 'infobox', variant: 'exam', content: 'Опция `-p1` в команде patch используется для "пропуска" первого уровня директорий в пути файла патча, подстраивая его под текущую директорию.' }
    ]
  },

  'lpic2-202-1': {
    title: 'Настройка запуска системы',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Больше, чем просто загрузка' },
      { type: 'paragraph', text: 'Понимание того, как система переходит от BIOS/UEFI к готовому серверу или рабочему столу, критически важно для аварийного восстановления (Disaster Recovery).' },
      { type: 'heading', level: 3, emoji: '⚙️', text: 'SysVinit vs Systemd' },
      { type: 'paragraph', text: 'Хотя Systemd доминирует, LPIC-2 требует знаний SysVinit и уровней запуска (runlevels). Главный файл SysVinit — это `/etc/inittab`.' },
      { type: 'table', headers: ['Уровень запуска', 'Назначение'], rows: [
        ['0', 'Halt (Выключение)'],
        ['1 / S', 'Однопользовательский режим (Обслуживание)'],
        ['2', 'Многопользовательский без сети (обычно в Debian)'],
        ['3', 'Многопользовательский с сетью (CLI)'],
        ['5', 'Многопользовательский с сетью + Графика'],
        ['6', 'Reboot (Перезагрузка)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'В Systemd уровни запуска сопоставляются с "Targets". Например: `multi-user.target` обычно соответствует runlevel 3.' }
    ]
  },

  'lpic2-202-2': {
    title: 'Восстановление системы и загрузчики',
    sections: [
      { type: 'heading', level: 2, emoji: '🆘', text: 'Спасение сломанной системы' },
      { type: 'paragraph', text: 'Если загрузчик (GRUB) поврежден, система не загрузится. Вы должны уметь использовать аварийную оболочку (emergency shell) или Live-CD.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'GRUB 2' },
      { type: 'code', title: 'Восстановление GRUB', prompt: '# grub-install /dev/sda\n# update-grub', output: 'Installing for i386-pc platform.\nInstallation finished. No error reported.' },
      { type: 'paragraph', text: 'Финальный файл конфигурации — `/boot/grub/grub.cfg`, но его никогда нельзя редактировать вручную. Используйте файл `/etc/default/grub`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Альтернативные загрузчики',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX и ISOLINUX' },
      { type: 'paragraph', text: 'Часто используются для USB-накопителей и Live-CD благодаря своей легкости и простоте.' },
      { type: 'table', headers: ['Вариант', 'Применение'], rows: [
        ['SYSLINUX', 'Файловые системы FAT (флешки)'],
        ['ISOLINUX', 'Стандарт ISO-9660 (CD/DVD)'],
        ['EXTLINUX', 'Файловые системы ext2/3/4 или btrfs'],
        ['PXELINUX', 'Загрузка по сети через TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Продвинутые операции с файловыми системами',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Управление и обслуживание' },
      { type: 'paragraph', text: 'Администратор должен уметь создавать, проверять и восстанавливать файловые системы без страха.' },
      { type: 'heading', level: 3, emoji: '🔍', text: 'Проверка и ремонт' },
      { type: 'code', title: 'Проверка диска (размонтированного!)', prompt: '# fsck -y /dev/sdb1\n# dumpe2fs /dev/sdb1 | head', output: 'Filesystem volume name:   Data\nLast mounted on:          /mnt/data\nFilesystem revision #:    1 (dynamic)' },
      { type: 'infobox', variant: 'warning', content: 'НИКОГДА не запускайте `fsck` на смонтированной файловой системе: вы рискуете необратимо потерять данные!' }
    ]
  },

  'lpic2-203-2': {
    title: 'Обслуживание файловых систем',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Оптимизация с tune2fs' },
      { type: 'paragraph', text: 'Вы можете изменять параметры, такие как частота автоматических проверок или метка тома (label), без переформатирования.' },
      { type: 'table', headers: ['Команда', 'Эффект'], rows: [
        ['tune2fs -L "BACKUP" /dev/sdc1', 'Устанавливает метку тома (Label)'],
        ['tune2fs -m 1 /dev/sdc1', 'Снижает зарезервированное место для root до 1%'],
        ['tune2fs -i 30d /dev/sdc1', 'Принудительная проверка каждые 30 дней'],
        ['xfs_admin -L "DATA_XFS" /dev/sdd1', 'Управление системой XFS'],
      ]}
    ]
  },

  'lpic2-203-3': {
    title: 'Управление устройствами с помощью udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🤖', text: 'Современный маэстро устройств' },
      { type: 'paragraph', text: 'Система `/dev` сегодня динамична благодаря `udev`. Он автоматически создает узлы устройств при подключении оборудования на основе правил.' },
      { type: 'heading', level: 3, emoji: '📜', text: 'Переписывание правил' },
      { type: 'paragraph', text: 'Правила находятся в `/etc/udev/rules.d/`. Они позволяют проводить глубокую кастомизацию.' },
      { type: 'code', title: 'Создание стабильных имен сети', prompt: 'SUBSYSTEM=="net", ACTION=="add", ATTR{address}=="00:11:22:33:44:55", NAME="eth-adm"', output: '' }
    ]
  },

  'lpic2-204-1': {
    title: 'Настройка программного RAID',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: 'Избыточность и производительность' },
      { type: 'paragraph', text: 'RAID (Redundant Array of Independent Disks) объединяет несколько физических дисков в одну логическую единицу. В Linux это реализуется в основном через подсистему программного RAID ядра.' },
      { type: 'table', headers: ['Уровень RAID', 'Преимущество', 'Недостаток'], rows: [
        ['RAID 0 (Striping)', 'Максимальная скорость', 'Нет избыточности (отказ одного диска = полная потеря данных)'],
        ['RAID 1 (Mirroring)', 'Высокая безопасность данных', 'Только 50% полезного объема'],
        ['RAID 5 (Parity)', 'Баланс объема и безопасности', 'Медленная запись из-за расчета четности'],
        ['RAID 6 (Dual Parity)', 'Выдерживает отказ ДВУХ дисков', 'Больше потеря объема, чем в RAID 5'],
      ]},
      { type: 'code', title: 'Создание массива RAID 1', prompt: '# mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Не забудьте обновить файл `/etc/mdadm/mdadm.conf` командой `mdadm --detail --scan`, чтобы система распознала RAID при следующей загрузке!' }
    ]
  },

  'lpic2-204-2': {
    title: 'Logical Volume Manager (LVM)',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Гибкость хранилища' },
      { type: 'paragraph', text: 'LVM добавляет уровень абстракции, который позволяет динамически изменять размер разделов (Logical Volumes) или распределять их по нескольким физическим дискам.' },
      { type: 'table', headers: ['Уровень', 'Значение'], rows: [
        ['PV (Physical Volume)', 'Физическая основа (раздел или целый диск)'],
        ['VG (Volume Group)', 'Пул пространства, объединяющий один или несколько PV'],
        ['LV (Logical Volume)', 'Логический "раздел", созданный в VG, на котором размещается файловая система'],
      ]},
      { type: 'code', title: 'Расширение VG и LV', prompt: '# vgextend my_pool /dev/sdd1\n# lvextend -L +10G /dev/my_pool/my_data\n# resize2fs /dev/my_pool/my_data', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Используйте `lvcreate -s` для создания снапшотов (Snapshots) — мгновенных снимков LV, полезных для консистентного бэкапа.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Оптимизация и настройка хранилища',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Выжимаем максимум из железа' },
      { type: 'paragraph', text: 'Аппаратные параметры и настройки ядра радикально влияют на производительность.' },
      { type: 'table', headers: ['Инструмент', 'Применение'], rows: [
        ['hdparm', 'Настройка параметров SATA/PATA (например, DMA, кэш)'],
        ['sdparm', 'Эквивалент hdparm для устройств SCSI/SAS'],
        ['nvme-cli', 'Управление и мониторинг NVMe-дисков'],
        ['fstrim', 'Важно для SSD: сообщает о неиспользуемых блоках'],
      ]},
      { type: 'code', title: 'Оптимизация производительности SSD', prompt: '# fstrim -av', output: '/: 10 GB (10737418240 bytes) trimmed' }
    ]
  },

  'lpic2-205-1': {
    title: 'Конфигурация IP и маршрутизация',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Пути в сети' },
      { type: 'paragraph', text: 'Администратор должен уметь настраивать интерфейсы вручную и управлять таблицами маршрутизации.' },
      { type: 'table', headers: ['Команда iproute2', 'Действие'], rows: [
        ['ip addr show', 'Показывает IP-адреса интерфейсов'],
        ['ip link set eth0 up', 'Активирует сетевой интерфейс'],
        ['ip route show', 'Отображает текущую таблицу маршрутов'],
        ['ip route add default via 192.168.1.1', 'Устанавливает основной шлюз'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Чтобы Linux работал как роутер, в ядре должна быть включена пересылка IP-пакетов: `sysctl -w net.ipv4.ip_forward=1`.' }
    ]
  },

  'lpic2-205-2': {
    title: 'Bonding и Bridging',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Агрегация и соединение интерфейсов' },
      { type: 'paragraph', text: 'Bonding объединяет несколько карт в один логический интерфейс для увеличения скорости или избыточности. Bridging соединяет сегменты на уровне 2.' },
      { type: 'table', headers: ['Техника', 'Сценарий использования'], rows: [
        ['Bonding (Mode 1)', 'Active-Backup: обеспечивает избыточность (High Availability)'],
        ['Bonding (Mode 4)', '802.3ad: агрегация каналов для производительности'],
        ['Bridging', 'Обычно используется для подключения VM напрямую к физической сети'],
      ]}
    ]
  },

  'lpic2-205-3': {
    title: 'Устранение сетевых неполадок',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Поиск неисправности' },
      { type: 'paragraph', text: 'Когда сеть сбоит, диагностические инструменты помогают изолировать проблему.' },
      { type: 'table', headers: ['Команда', 'Польза'], rows: [
        ['tcpdump', 'Стандартный сниффер для анализа пакетов в канале'],
        ['nc (netcat)', 'Швейцарский нож: проверяет открытость порта или отправляет данные'],
        ['ss / netstat', 'Показывает все открытые сокеты и какие программы их используют'],
        ['tracepath / traceroute', 'Показывает путь пакетов до цели'],
      ]},
      { type: 'code', title: 'Захват трафика на порту 80', prompt: '# tcpdump -i eth0 port 80', output: '12:34:56.789 IP client > server.http: Flags [S], seq 12345...' }
    ]
  },

  'lpic2-206-1': {
    title: 'Компиляция программ из исходного кода',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Сборка собственных инструментов' },
      { type: 'paragraph', text: 'Иногда вам нужно более актуальное ПО или опции, которые не предлагает дистрибутив.' },
      { type: 'table', headers: ['Этап', 'Значение'], rows: [
        ['./configure', 'Проверяет зависимости и создает Makefile'],
        ['make', 'Компилирует код в исполняемые бинарные файлы'],
        ['sudo make install', 'Копирует бинарники и мануалы в системные папки'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Используйте такие команды, как `checkinstall`, вместо `make install` для автоматического создания пакета .deb или .rpm. Это облегчит последующее удаление!' }
    ]
  },

  'lpic2-206-2': {
    title: 'Бэкап и синхронизация с rsync',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Безопасность — это выживание' },
      { type: 'paragraph', text: 'Администратор без бэкапа живет рискованно. `rsync` идеален для локальных и удаленных бэкапов.' },
      { type: 'code', title: 'Инкрементальный бэкап через SSH', prompt: '$ rsync -avz --delete -e ssh /data/ user@backup-server:/backup/', output: 'sending incremental file list\ndata/file.tar.gz\n\nsent 5.6M bytes  received 2.1k bytes  1.2M bytes/sec' },
      { type: 'table', headers: ['Опция', 'Функция'], rows: [
        ['-a (archive)', 'Сохраняет права, даты и символические ссылки'],
        ['-v (verbose)', 'Показывает прогресс и имена файлов'],
        ['-z (compress)', 'Сжимает данные во время передачи'],
        ['--delete', 'Удаляет в месте назначения файлы, которых больше нет в источнике'],
      ]}
    ]
  },

  'lpic2-206-3': {
    title: 'Информирование и общение с пользователями',
    sections: [
      { type: 'heading', level: 2, emoji: '📢', text: 'Держите всех в курсе' },
      { type: 'paragraph', text: 'Перед перезагрузкой или техобслуживанием вы должны сообщить об этом подключенным пользователям.' },
      { type: 'paragraph', text: 'Файл `/etc/motd` (Message Of The Day) показывается после входа. `/etc/issue` показывается перед входом в терминале.' },
      { type: 'code', title: 'Мгновенное уведомление всех пользователей', prompt: '# wall "Система будет перезагружена через 10 минут для обслуживания оборудования!"', output: '' }
    ]
  },

  'lpic2-207-1': {
    title: 'Базовая настройка BIND9',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Телефонная книга Интернета' },
      { type: 'paragraph', text: 'BIND (Berkeley Internet Name Domain) — это самый распространенный DNS-сервер. Он может работать как простой кэширующий узел, форвардер или авторитетный сервер для домена.' },
      { type: 'table', headers: ['Режим', 'Функция'], rows: [
        ['Caching Only', 'Хранит ответы локально для ускорения будущих запросов из локальной сети'],
        ['Forwarder', 'Пересылает запросы, на которые не может ответить сам, другим DNS-серверам'],
        ['Authoritative', 'Первоисточник данных для конкретной зоны (домена)'],
      ]},
      { type: 'code', title: 'Проверка синтаксиса конфигурации', prompt: '# named-checkconf /etc/bind/named.conf', output: '' }
    ]
  },

  'lpic2-207-2': {
    title: 'Управление зонами и записями DNS',
    sections: [
      { type: 'heading', level: 2, emoji: '🗺️', text: 'Кто есть кто в сети' },
      { type: 'paragraph', text: 'Пространство имен делится на зоны. В прямой зоне имена сопоставляются с IP, в обратной — IP с именами.' },
      { type: 'table', headers: ['Тип записи', 'Назначение'], rows: [
        ['SOA (Start of Authority)', 'Метаданные зоны (email админа, серийный номер, время обновления)'],
        ['NS (Name Server)', 'Указывает на DNS-серверы, отвечающие за зону'],
        ['A / AAAA', 'Связывает имя с адресом IPv4 или IPv6'],
        ['PTR (Pointer)', 'Используется для обратного DNS (IP -> Имя)'],
        ['MX (Mail Exchange)', 'Определяет почтовые серверы домена'],
        ['CNAME', 'Псевдоним (alias) для другого имени'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Всегда увеличивайте серийный номер в записи SOA при изменении файла зоны, чтобы вторичные (slave) серверы узнали об изменениях!' }
    ]
  },

  'lpic2-207-3': {
    title: 'Безопасность DNS и DNSSEC',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Защита от подмены' },
      { type: 'paragraph', text: 'Классический DNS не защищен от фальсификации данных. DNSSEC добавляет цифровые подписи, гарантируя, что данные получены от законного владельца.' },
      { type: 'table', headers: ['Технология', 'Цель'], rows: [
        ['DNSSEC', 'Криптографическая подпись ресурсных записей'],
        ['TSIG', 'Защита передачи рых зон (zone transfer) с помощью секретного ключа'],
        ['Chroot', 'Изоляция процесса named в собственной директории для минимизации ущерба при взломе'],
      ]}
    ]
  },

  'lpic2-208-1': {
    title: 'Основы веб-сервера Apache',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Классика веб-серверов' },
      { type: 'paragraph', text: 'Apache отличается своей стабильностью и модульной архитектурой.' },
      { type: 'table', headers: ['Концепция', 'Значение'], rows: [
        ['VirtualHost', 'Позволяет хостить несколько сайтов с разными именами на одном IP-адресе'],
        ['DocumentRoot', 'Директория на диске, где лежат файлы сайта'],
        ['.htaccess', 'Позволяет переопределять настройки для конкретной директории пользователями'],
        ['MPM', 'Multi-Processing Modules (prefork, worker, event) определяют способ обработки запросов'],
      ]},
      { type: 'code', title: 'Активация сайта в Debian/Ubuntu', prompt: '# a2ensite my-site.conf\n# systemctl reload apache2', output: '' }
    ]
  },

  'lpic2-208-2': {
    title: 'Веб-безопасность и HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Зашифрованный веб' },
      { type: 'paragraph', text: 'HTTPS сегодня является стандартом. Он защищает конфиденциальность и целостность трафика.' },
      { type: 'table', headers: ['Директива SSL', 'Цель'], rows: [
        ['SSLEngine on', 'Активирует модуль SSL/TLS для VirtualHost'],
        ['SSLCertificateFile', 'Путь к публичному сертификату сервера'],
        ['SSLCertificateKeyFile', 'Путь к секретному закрытому ключу'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Используйте Let\'s Encrypt и утилиту `certbot` для бесплатного получения и автоматического продления SSL-сертификатов.' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx как сервер и Reverse Proxy',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Высокая производительность' },
      { type: 'paragraph', text: 'Nginx был разработан для решения проблем производительности классических серверов при огромном количестве одновременных соединений.' },
      { type: 'table', headers: ['Роль', 'Особенность'], rows: [
        ['Static Files', 'Чрезвычайно эффективная отдача картинок, CSS и JS'],
        ['Reverse Proxy', 'Принимает запросы и пересылает их бэкенд-приложениям (PHP-FPM, Node.js)'],
        ['Load Balancer', 'Распределяет нагрузку между несколькими серверами приложений'],
      ]},
      { type: 'code', title: 'Базовая настройка прокси в Nginx', prompt: 'server {\n  listen 80;\n  location / {\n    proxy_pass http://localhost:8080;\n  }\n}', output: '' }
    ]
  },

  'lpic2-209-1': {
    title: 'Файловые сервисы Samba',
    sections: [
      { type: 'heading', level: 2, emoji: '🤝', text: 'Интеграция с Windows' },
      { type: 'paragraph', text: 'Samba реализует протокол SMB и позволяет серверам Linux бесшовно встраиваться в сети Windows как файловые серверы или серверы печати.' },
      { type: 'table', headers: ['Секция smb.conf', 'Значение'], rows: [
        ['[global]', 'Общие настройки: имя сервера, рабочая группа, режим безопасности'],
        ['[homes]', 'Автоматический доступ пользователя к своей домашней директории'],
        ['[printers]', 'Общий доступ к принтерам, установленным в системе'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Пароли Samba управляются отдельно. Используйте `smbpasswd -a user` для включения пользователя в базу Samba.' }
    ]
  },

  'lpic2-209-2': {
    title: 'NFS - Network File System',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Нативный шеринг Unix' },
      { type: 'paragraph', text: 'NFS — это стандарт для общего доступа к директориям между системами Linux/Unix по сети.' },
      { type: 'table', headers: ['Опция экспорта', 'Эффект'], rows: [
        ['rw / ro', 'Доступ на чтение и запись или только чтение'],
        ['root_squash', 'Безопасность: мапит root\'а клиента в анонимного пользователя (по умолчанию)'],
        ['no_root_squash', 'Опасно: позволяет root\'у клиента иметь права root\'а на сервере'],
        ['sync', 'Подтверждает запись только после физического сохранения данных на диск'],
      ]},
      { type: 'code', title: 'Обновление экспорта без перезагрузки', prompt: '# exportfs -ra', output: '' }
    ]
  },

  'lpic2-210-1': {
    title: 'Настройка DHCP-сервера',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Автоматическое назначение IP' },
      { type: 'paragraph', text: 'Протокол DHCP (Dynamic Host Configuration Protocol) автоматизирует выдачу сетевых параметров, таких как IP, маска, шлюз и DNS. Стандартным сервером в Linux является `isc-dhcp-server`.' },
      { type: 'table', headers: ['Параметр', 'Значение'], rows: [
        ['subnet / netmask', 'Определяет сегмент сети, за который отвечает сервер'],
        ['range', 'Пул IP-адресов для динамической выдачи'],
        ['option routers', 'Указывает основной шлюз для клиентов'],
        ['option domain-name-servers', 'Указывает DNS-серверы для клиентов'],
      ]},
      { type: 'code', title: 'Резервирование статического IP по MAC-адресу', prompt: 'host station1 {\n  hardware ethernet 00:11:22:33:44:55;\n  fixed-address 192.168.1.50;\n}', output: '' }
    ]
  },

  'lpic2-210-2': {
    title: 'PAM - Модульная аутентификация',
    sections: [
      { type: 'heading', level: 2, emoji: '🚪', text: 'Привратник системы' },
      { type: 'paragraph', text: 'PAM (Pluggable Authentication Modules) позволяет централизованно управлять методами входа для приложений, не меняя сами приложения.' },
      { type: 'table', headers: ['Control Flag', 'Значение'], rows: [
        ['required', 'Модуль должен вернуть успех. При неудаче доступ будет закрыт, но только после обработки всех модулей (для безопасности)'],
        ['requisite', 'Модуль должен вернуть успех. При неудаче доступ закрывается НЕМЕДЛЕННО'],
        ['sufficient', 'Если этот модуль успешен (и не было провалов в "required"), доступ разрешается немедленно'],
        ['optional', 'Успех или провал модуля не влияет напрямую на результат'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Будьте крайне осторожны при редактировании файлов в `/etc/pam.d/`. Ошибка может полностью заблокировать доступ к системе!' }
    ]
  },

  'lpic2-210-3': {
    title: 'Использование LDAP-клиента',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'Центральная телефонная книга' },
      { type: 'paragraph', text: 'LDAP (Lightweight Directory Access Protocol) часто используется для хранения учетных записей и групп централизованно. Linux-клиенты могут аутентифицироваться через LDAP-сервер.' },
      { type: 'table', headers: ['Термин LDAP', 'Значение'], rows: [
        ['DN (Distinguished Name)', 'Уникальный путь к объекту (напр. uid=max,ou=user,dc=example,dc=com)'],
        ['OU (Organizational Unit)', 'Организационная единица (аналог папки)'],
        ['DC (Domain Component)', 'Компоненты доменного имени'],
      ]},
      { type: 'code', title: 'Запрос к каталогу LDAP', prompt: '$ ldapsearch -x -b "dc=example,dc=com"', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Почта и отправка через Postfix',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Почтальон сети' },
      { type: 'paragraph', text: 'Postfix — это безопасный и модульный Mail Transfer Agent (MTA). Он отвечает за транспортировку почты по протоколу SMTP.' },
      { type: 'table', headers: ['Инструмент', 'Цель'], rows: [
        ['postconf', 'Отображение и настройка параметров Postfix'],
        ['postmap', 'Создание индексных баз из текстовых файлов (напр. aliases)'],
        ['postqueue', 'Управление очередью (напр. `postqueue -f` для принудительной отправки)'],
        ['postsuper', 'Административные задачи, вроде удаления писем из очереди'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'После любых изменений в `/etc/aliases` необходимо выполнить команду `newaliases`, чтобы обновить базу данных Postfix.' }
    ]
  },

  'lpic2-211-2': {
    title: 'Dovecot - сервер POP3 и IMAP',
    sections: [
      { type: 'heading', level: 2, emoji: '📥', text: 'Получение почты' },
      { type: 'paragraph', text: 'Dovecot — это сервер IMAP и POP3, который позволяет пользователям забирать свою почту с сервера.' },
      { type: 'table', headers: ['Протокол', 'Значение'], rows: [
        ['IMAP', 'Письма остаются на сервере и синхронизируются (идеально для нескольких устройств)'],
        ['POP3', 'Письма скачиваются и обычно удаляются с сервера'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Никогда не передавайте пароли в открытом виде. Всегда используйте шифрование (SSL/TLS) для IMAP и POP3.' }
    ]
  },

  'lpic2-212-1': {
    title: 'Сетевая безопасность с iptables',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'Брандмауэр вашей системы' },
      { type: 'paragraph', text: '`iptables` — это инструмент для управления фреймворком Netfilter в ядре. Он фильтрует пакеты на основе правил.' },
      { type: 'table', headers: ['Таблица', 'Цель'], rows: [
        ['filter', 'Таблица по умолчанию для фильтрации (цепочки INPUT, OUTPUT, FORWARD)'],
        ['nat', 'Network Address Translation: проброс портов или маскировка (MASQUERADE)'],
        ['mangle', 'Для специальных правок заголовков пакетов'],
      ]},
      { type: 'code', title: 'Запретить все входящие, кроме SSH', prompt: '# iptables -P INPUT DROP\n# iptables -A INPUT -p tcp --dport 22 -j ACCEPT', output: '' }
    ]
  },

  'lpic2-212-2': {
    title: 'Обнаружение вторжений и аудит',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Неусыпное око' },
      { type: 'paragraph', text: 'Безопасность — это непрерывный процесс мониторинга и "закаливания" (hardening) системы.' },
      { type: 'table', headers: ['Инструмент', 'Цель'], rows: [
        ['Fail2Ban', 'Автоматически банит IP при многочисленных неудачных попытках входа'],
        ['AIDE', 'Проверка целостности файлов через сравнение криптографических хешей'],
        ['Nmap', 'Сетевой сканер для поиска открытых портов и сервисов'],
        ['Lynis', 'Инструмент аудита: сканирует систему и дает рекомендации по защите'],
      ]}
    ]
  }
}
