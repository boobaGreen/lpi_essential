// LPIC-1 101 Quiz — Тема 2: Установка и управление пакетами (Русский)

export const lpic1_101_topic2_ru = [
  // ─── 102.1 Проектирование разметки жесткого диска (8 вопросов) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая иерархия файловой системы должна быть доступна на начальном этапе загрузки до того, как будут смонтированы другие файловые системы?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot содержит ядро и файлы initramfs, необходимые загрузчику для запуска операционной системы.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какова основная цель раздела подкачки (swap) в Linux?',
    options: [
      'Для хранения резервных копий системы',
      'Для работы в качестве виртуальной памяти, когда физическая оперативная память (RAM) заполнена',
      'Для обмена данными между Windows и Linux',
      'Для хранения временных файлов, удаляемых при перезагрузке'
    ],
    correct: 1,
    explanation: 'Пространство подкачки (swap) действует как область переполнения (виртуальная память), куда ядро выгружает блоки памяти при высокой загрузке RAM.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Почему настоятельно рекомендуется размещать каталог /home на отдельном разделе?',
    options: [
      'Это повышает производительность системы',
      'Это позволяет переустанавливать операционную систему без потери пользовательских данных',
      'Это предотвращает чрезмерное использование процессорного времени пользователями',
      'Ядро требует этого для загрузки'
    ],
    correct: 1,
    explanation: 'Размещение /home на отдельном разделе позволяет стереть корневой раздел (/) для обновления или переустановки ОС, сохранив все пользовательские файлы и настройки.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какой каталог следует разместить на отдельном разделе, если система работает с базой данных или генерирует огромные файлы журналов (логов)?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var содержит переменные данные, такие как логи, почтовые очереди и базы данных. Если он переполнится, это может привести к сбою системы.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Какое абсолютное максимальное количество основных разделов разрешено на диске с использованием классической таблицы разделов MBR?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'MBR (Master Boot Record) допускает максимум 4 основных раздела. Чтобы иметь больше, один из них должен быть расширенным (extended).',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая технология позволяет объединять несколько физических дисков в одну группу томов и создавать логические тома с изменяемым размером?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (Logical Volume Manager) обеспечивает уровень абстракции над физическим хранилищем.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'При установке Linux на современную систему с UEFI, какой специальный раздел является строго обязательным?',
    options: ['Раздел подкачки (swap)', 'Физический том LVM', 'Системный раздел EFI (ESP)', 'Раздел /boot, форматированный в ext4'],
    correct: 2,
    explanation: 'Прошивка UEFI требует системного раздела EFI (ESP), обычно форматированного в FAT32 и смонтированного в /boot/efi.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда отображает текущую таблицу разделов для конкретного диска, например /dev/sda?',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'Команда fdisk -l с указанием имени устройства отображает таблицу разделов (MBR или GPT) для этого блочного устройства.',
  },

  // ─── 102.2 Установка менеджера загрузки (4 вопроса) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда устанавливает загрузчик GRUB2 в основную загрузочную запись (MBR) первого жесткого диска?',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install — это команда для установки файлов загрузчика GRUB и настройки загрузочного сектора на диске.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какую команду необходимо выполнить после редактирования /etc/default/grub для создания финального файла grub.cfg в системах Debian?',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub — это скрипт-оболочка для `grub-mkconfig -o /boot/grub/grub.cfg`, используемый в дистрибутивах на базе Debian.',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какой файл конфигурации GRUB2 НИКОГДА не следует редактировать вручную согласно комментариям в его заголовке?',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg генерируется автоматически и будет перезаписан. Изменения следует вносить в /etc/default/grub.',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Как в терминологии GRUB2 представляется первый раздел первого жесткого диска?',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'GRUB2 считает диски с 0 (hd0), а разделы обычно с 1 (hd0,1).',
  },

  // ─── 102.3 Управление общими библиотеками (4 вопроса) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда отображает зависимости от общих библиотек, необходимые динамически скомпилированному исполняемому файлу?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) выводит список общих библиотек (.so), необходимых указанной программе.',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'В каком конфигурационном файле перечислены каталоги, в которых динамический компоновщик ищет общие библиотеки?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf определяет каталоги, которые ld.so использует для поиска библиотек.',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какую команду НУЖНО выполнить после добавления нового каталога в /etc/ld.so.conf для обновления кэша библиотек?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig обновляет кэш динамического компоновщика (/etc/ld.so.cache) на основе настроенных каталогов.',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какая опция команды ldconfig позволяет просмотреть текущие кэшированные библиотеки, хранящиеся в /etc/ld.so.cache?',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) отображает списки каталогов и библиотек-кандидатов, хранящихся в данный момент в кэше.',
  },

  // ─── 102.4 Управление пакетами Debian (6 вопросов) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какой низкоуровневый инструмент Debian используется для установки локального файла .deb без автоматической загрузки зависимостей?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg — базовый менеджер пакетов в Debian. `dpkg -i file.deb` устанавливает локальный пакет.',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда обновляет локальный индекс доступных пакетов из репозиториев в системе Debian?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update загружает самые свежие списки пакетов из репозиториев.',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'В чем основная разница между `apt remove` и `apt purge`?',
    options: [
      'remove деинсталлирует пакет; purge удаляет пакет из кэша apt',
      'remove оставляет файлы конфигурации; purge удаляет пакет И его файлы конфигурации',
      'purge принудительно удаляет, игнорируя зависимости',
      'Разницы нет'
    ],
    correct: 1,
    explanation: 'apt purge полностью удаляет пакет, включая глобальные файлы конфигурации.',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда выводит список всех установленных пакетов в системе на базе Debian?',
    options: ['dpkg -l', 'apt list --installed', 'Как dpkg -l, так и apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Как `dpkg -l`, так и `apt list --installed` выполняют это действие.',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Какой флаг dpkg позволяет узнать, какой установленный пакет предоставил конкретный файл (например, /bin/ls)?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) ищет имя файла среди установленных пакетов.',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'В каком файле хранится список URL-адресов репозиториев, которые APT использует для загрузки пакетов?',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list — основной конфигурационный файл для источников пакетов APT.',
  },

  // ─── 102.5 Управление пакетами RPM и YUM/DNF (6 вопросов) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какой низкоуровневый инструмент используется для установки локального файла .rpm в системе на базе Red Hat?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) — базовая команда для установки RPM-пакета.',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какой современный высокоуровневый инструмент заменил YUM в качестве менеджера пакетов по умолчанию в Fedora и RHEL 8+?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) — это следующее поколение YUM.',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда выводит список всех установленных RPM-пакетов в системе?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) выводит список всех установленных в данный момент RPM-пакетов.',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Какая команда rpm опрашивает установленный пакет, чтобы увидеть, какие файлы он установил?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) выводит список файлов, установленных конкретным пакетом.',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Как найти, какой RPM-пакет предоставил файл /etc/httpd/conf/httpd.conf?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) находит, какой установленный пакет владеет указанным файлом.',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда проверяет целостность установленного RPM-пакета?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) сравнивает установленные файлы с исходными метаданными.',
  },

  // ─── 102.6 Виртуализация (4 вопроса) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'В чем основная разница между гипервизорами 1-го и 2-го типа?',
    options: [
      'Тип 1 требует Windows, тип 2 требует Linux',
      'Тип 1 работает непосредственно на оборудовании (bare-metal), тип 2 работает поверх хостовой операционной системы',
      'Тип 1 предназначен для контейнеров, тип 2 — для виртуальных машин',
      'Разницы нет'
    ],
    correct: 1,
    explanation: 'Тип 1 работает на «голом железе» для максимальной производительности. Тип 2 работает как приложение внутри хостовой ОС.',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Чем контейнеры Linux (например, Docker или Podman) отличаются от полноценных виртуальных машин?',
    options: [
      'Контейнеры медленнее виртуальных машин',
      'Контейнеры используют ядро хостовой операционной системы, избегая накладных расходов на запуск полноценной гостевой ОС',
      'Контейнеры могут нативно запускать приложения Windows в Linux',
      'Контейнеры требуют выделенного оборудования'
    ],
    correct: 1,
    explanation: 'Контейнеры используют ядро хоста, изолируя процессы вместо эмуляции оборудования.',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая технология Linux является нативным гипервизором типа 1 на базе ядра?',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'KVM (Kernel-based Virtual Machine) превращает ядро Linux в гипервизор типа 1.',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какова цель "Guest Additions" или "Guest Tools" в виртуальной машине?',
    options: [
      'Разрешить гостю прямой доступ к оборудованию хоста без разрешения',
      'Предоставить улучшенные драйверы для видео, интеграцию мыши и общие папки',
      'Зашифровать виртуальный диск',
      'Разрешить виртуальной машине работать без ядра'
    ],
    correct: 1,
    explanation: 'Guest Additions предоставляют оптимизированные драйверы и службы, которые улучшают производительность и удобство гостевой ОС.',
  },
];
