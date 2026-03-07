// LPIC-1 101 Games Data — Russian
// Used by useGameData() when courseId === 'lpic1-101'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1
  { command: 'lspci', description: 'Список всех PCI-устройств' },
  { command: 'lsusb', description: 'Список всех USB-устройств' },
  { command: 'lsmod', description: 'Показать загруженные модули ядра' },
  { command: 'modprobe module', description: 'Загрузить модуль ядра с зависимостями' },
  { command: 'modprobe -r module', description: 'Удалить модуль ядра' },
  { command: 'dmesg', description: 'Показать сообщения кольцевого буфера ядра' },
  { command: 'systemctl get-default', description: 'Показать цель systemd по умолчанию' },
  { command: 'systemctl set-default multi-user.target', description: 'Установить цель загрузки — текстовый режим' },
  // Topic 2
  { command: 'grub-mkconfig -o /boot/grub/grub.cfg', description: 'Пересоздать конфигурацию GRUB2' },
  { command: 'grub-install /dev/sda', description: 'Установить GRUB2 в MBR' },
  { command: 'ldd /usr/bin/ls', description: 'Показать зависимости разделяемых библиотек' },
  { command: 'ldconfig', description: 'Обновить кэш разделяемых библиотек' },
  { command: 'dpkg -i package.deb', description: 'Установить локальный пакет Debian' },
  { command: 'apt-get update', description: 'Обновить список пакетов' },
  { command: 'rpm -qa', description: 'Список всех установленных RPM-пакетов' },
  { command: 'dnf install package', description: 'Установить RPM-пакет из репозитория' },
  // Topic 3
  { command: 'which cmd', description: 'Показать полный путь к исполняемому файлу' },
  { command: 'type cmd', description: 'Определить тип: встроенная, алиас или программа' },
  { command: 'head -n 20 file', description: 'Показать первые 20 строк файла' },
  { command: 'tail -f /var/log/syslog', description: 'Следить за лог-файлом в реальном времени' },
  { command: 'sort -rn file', description: 'Обратная числовая сортировка' },
  { command: 'cut -d: -f1 /etc/passwd', description: 'Извлечь первое поле, разделённое двоеточием' },
  { command: 'find / -name "*.conf" -type f', description: 'Найти все файлы .conf' },
  { command: 'grep -rn "pattern" /etc/', description: 'Рекурсивный поиск с номерами строк' },
  { command: 'ps aux', description: 'Показать все процессы с подробностями' },
  { command: 'kill -9 PID', description: 'Принудительное завершение процесса (SIGKILL)' },
  { command: 'nice -n 10 cmd', description: 'Запустить команду с низким приоритетом' },
  { command: 'nohup cmd &', description: 'Запустить процесс, устойчивый к SIGHUP' },
  // Topic 4
  { command: 'fdisk -l', description: 'Список разделов диска' },
  { command: 'mkfs.ext4 /dev/sda1', description: 'Форматировать раздел в ext4' },
  { command: 'blkid', description: 'Показать UUID и типы файловых систем' },
  { command: 'mount /dev/sda1 /mnt', description: 'Смонтировать файловую систему' },
  { command: 'umount /mnt', description: 'Размонтировать файловую систему' },
  { command: 'fsck /dev/sda1', description: 'Проверить и восстановить файловую систему' },
  { command: 'df -h', description: 'Показать место на диске (читаемый формат)' },
  { command: 'du -sh /home', description: 'Показать размер каталога' },
  { command: 'chmod 755 file', description: 'Установить права rwxr-xr-x' },
  { command: 'ln -s /original /link', description: 'Создать символическую ссылку' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1
  { text: 'BIOS более современный, чем UEFI.', answer: false, explanation: 'UEFI — современный преемник с GPT, Secure Boot и быстрой загрузкой.', difficulty: 1 },
  { text: '/proc — виртуальная файловая система, находящаяся только в оперативной памяти.', answer: true, explanation: '/proc не занимает место на диске; она генерируется ядром динамически.', difficulty: 1 },
  { text: 'Процесс init/systemd всегда имеет PID 1.', answer: true, explanation: 'init или systemd — первый пользовательский процесс, запущенный ядром с PID 1.', difficulty: 1 },
  { text: 'MBR поддерживает диски размером более 2ТБ.', answer: false, explanation: 'MBR ограничен 2ТБ. GPT поддерживает диски до 8ЗиБ.', difficulty: 1 },
  { text: 'apt-get update устанавливает обновления пакетов.', answer: false, explanation: 'update загружает списки пакетов. upgrade устанавливает фактические обновления.', difficulty: 1 },
  { text: 'Разделяемые библиотеки .so загружаются во время выполнения.', answer: true, explanation: '.so (shared objects) загружаются динамическим компоновщиком при запуске программы.', difficulty: 1 },
  { text: 'Команда cat предназначена в первую очередь для создания пустых файлов.', answer: false, explanation: 'cat объединяет и отображает файлы. touch создаёт пустые файлы.', difficulty: 1 },
  { text: 'Конвейер | соединяет stdout одной команды с stdin следующей.', answer: true, explanation: 'Конвейер создаёт цепочку, передавая вывод как ввод.', difficulty: 1 },
  { text: 'SIGKILL (9) может быть перехвачен процессом.', answer: false, explanation: 'SIGKILL нельзя перехватить или проигнорировать. Завершает немедленно.', difficulty: 1 },
  { text: 'Файловая система ext4 поддерживает журналирование.', answer: true, explanation: 'ext4 имеет встроенное журналирование для защиты от сбоев.', difficulty: 1 },
  { text: 'chmod 644 делает файл исполняемым для всех.', answer: false, explanation: '644 = rw-r--r--. Нет прав на выполнение. 755 включает выполнение.', difficulty: 1 },
  { text: '/etc/fstab определяет файловые системы, монтируемые автоматически при загрузке.', answer: true, explanation: 'fstab содержит устройство, точку монтирования, тип и опции.', difficulty: 1 },
  // Difficulty 2
  { text: 'modprobe автоматически обрабатывает зависимости модулей ядра.', answer: true, explanation: 'modprobe использует depmod для разрешения зависимостей, в отличие от insmod.', difficulty: 2 },
  { text: 'rescue.target эквивалентен SysVinit runlevel 5.', answer: false, explanation: 'rescue.target — однопользовательский режим (runlevel 1). Графический — runlevel 5.', difficulty: 2 },
  { text: 'dpkg автоматически устанавливает зависимости пакетов.', answer: false, explanation: 'dpkg устанавливает .deb, но НЕ разрешает зависимости. Это делает apt.', difficulty: 2 },
  { text: 'Команда uniq удаляет все дублирующиеся строки в файле.', answer: false, explanation: 'uniq удаляет только ПОСЛЕДОВАТЕЛЬНЫЕ дубликаты. Используйте sort | uniq для всех.', difficulty: 2 },
  { text: 'В регулярном выражении . точка соответствует любому символу.', answer: true, explanation: 'Метасимвол . соответствует любому одиночному символу (кроме перевода строки).', difficulty: 2 },
  { text: 'Значение nice -20 означает НАИМЕНЬШИЙ приоритет.', answer: false, explanation: '-20 — это НАИВЫСШИЙ приоритет. +19 — наименьший.', difficulty: 2 },
  { text: 'parted применяет изменения разделов немедленно.', answer: true, explanation: 'В отличие от fdisk, буферизующего изменения, parted применяет их сразу к диску.', difficulty: 2 },
  { text: 'Sticky bit на каталоге запрещает кому-либо удалять файлы.', answer: false, explanation: 'Только владелец файла (или root) может удалить его, предотвращая удаление чужих файлов.', difficulty: 2 },
  { text: 'fsck нужно запускать на смонтированной файловой системе.', answer: false, explanation: 'fsck нужно запускать на РАЗМОНТИРОВАННЫХ файловых системах для предотвращения повреждения данных.', difficulty: 2 },
  { text: 'UUID — уникальный и постоянный идентификатор файловой системы.', answer: true, explanation: 'UUID создаётся при форматировании и не меняется, в отличие от имён /dev/sdX.', difficulty: 2 },
  // Difficulty 3
  { text: 'В ERE-regex + требует экранирования (\\\\+) для работы.', answer: false, explanation: 'В Extended RE (-E) + работает без экранирования. Экранирование нужно в Basic RE.', difficulty: 3 },
  { text: 'emergency.target монтирует только / в read-only и не запускает сервисы.', answer: true, explanation: 'emergency — самый ограничительный target для экстренного восстановления.', difficulty: 3 },
  { text: 'При umask 077 новые файлы получают права rw------- (600).', answer: true, explanation: '666 по умолчанию - 077 umask = 600.', difficulty: 3 },
  { text: 'rpm -V проверяет зависимости установленного пакета.', answer: false, explanation: 'rpm -V проверяет целостность (контрольные суммы, права). rpm -R проверяет зависимости.', difficulty: 3 },
  { text: 'Жёсткие ссылки могут указывать на каталоги.', answer: false, explanation: 'Linux запрещает жёсткие ссылки на каталоги для предотвращения циклов в файловой системе.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: 'список PCI-устройств', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: 'показать цель по умолчанию', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: 'обновить список пакетов', difficulty: 1 },
  { prompt: 'head -n _____ file', answer: '10', hint: 'количество строк по умолчанию', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: 'создать родительские каталоги', difficulty: 1 },
  { prompt: 'chmod _____ file', answer: '755', hint: 'установить rwxr-xr-x', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: 'монтировать файловую систему', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: 'удалить рекурсивно', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: 'показать все процессы', difficulty: 1 },
  { prompt: 'grep _____ "pattern" file', answer: '-i', hint: 'поиск без учёта регистра', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ module', answer: '-r', hint: 'удалить модуль', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: 'остановить систему', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'путь к конфигурации GRUB', difficulty: 2 },
  { prompt: 'dpkg _____ /path/to/file', answer: '-S', hint: 'найти пакет файла', difficulty: 2 },
  { prompt: 'rpm _____ package', answer: '-qi', hint: 'показать информацию о пакете', difficulty: 2 },
  { prompt: 'find /etc -name "_____"', answer: '*.conf', hint: 'файлы конфигурации', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'сигнал SIGKILL', difficulty: 2 },
  { prompt: 'nice -n _____ cmd', answer: '10', hint: 'низкий приоритет', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: 'обычная файловая система Linux', difficulty: 2 },
  { prompt: 'ln _____ /original /link', answer: '-s', hint: 'создать символическую ссылку', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'переключить цель без перезагрузки', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: 'файл 644, каталог 755', difficulty: 3 },
  { prompt: 'sed "s/old/new/_____" file', answer: 'g', hint: 'заменить глобально', difficulty: 3 },
  { prompt: 'grep -_____ "error|warning" file', answer: 'E', hint: 'включить расширенные регулярные выражения', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: 'указать ID процесса', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: 'Порядок загрузки',
    question: 'Расположите фазы загрузки Linux по порядку:',
    items: [
      { text: 'Ядро инициализирует оборудование', order: 3 },
      { text: 'init/systemd запускает сервисы', order: 4 },
      { text: 'BIOS/UEFI выполняет POST', order: 1 },
      { text: 'GRUB2 загружает ядро/initramfs', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: 'Runlevel → Target',
    question: 'Сопоставьте SysVinit runlevel с systemd target:',
    items: [
      { text: 'Runlevel 3 (текстовый многопользовательский)', matches: 'multi-user.target' },
      { text: 'Runlevel 5 (GUI)', matches: 'graphical.target' },
      { text: 'Runlevel 1 (однопользовательский)', matches: 'rescue.target' },
      { text: 'Runlevel 0 (остановка)', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: 'Семейства пакетов',
    question: 'Классифицируйте команды по семейству пакетов:',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RPM' },
      { text: 'dnf install', category: 'RPM' },
      { text: 'zypper install', category: 'RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: 'Восьмеричные права',
    question: 'Сопоставьте восьмеричную запись с правами доступа:',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic1-1', description: 'Показать PCI-устройства', prompt: 'lspci', expectedOutput: 'VGA compatible controller', hint: 'Используйте lspci', difficulty: 1 },
  { id: 'tc-lpic1-2', description: 'Показать цель systemd по умолчанию', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Используйте systemctl get-default', difficulty: 1 },
  { id: 'tc-lpic1-3', description: 'Показать загруженные модули ядра', prompt: 'lsmod', expectedOutput: 'Module', hint: 'Используйте lsmod', difficulty: 1 },
  { id: 'tc-lpic1-4', description: 'Показать информацию о процессоре', prompt: 'cat /proc/cpuinfo', expectedOutput: 'model name', hint: 'Прочитайте /proc/cpuinfo', difficulty: 1 },
  { id: 'tc-lpic1-5', description: 'Показать место на диске', prompt: 'df -h', expectedOutput: 'Filesystem', hint: 'Используйте df -h', difficulty: 1 },
  { id: 'tc-lpic1-6', description: 'Найти файлы .conf в /etc', prompt: 'find /etc -name "*.conf"', expectedOutput: '.conf', hint: 'Используйте find с -name', difficulty: 2 },
  { id: 'tc-lpic1-7', description: 'Показать первые 5 строк /etc/passwd', prompt: 'head -n 5 /etc/passwd', expectedOutput: 'root:', hint: 'Используйте head -n 5', difficulty: 1 },
  { id: 'tc-lpic1-8', description: 'Подсчитать строки в /etc/passwd', prompt: 'wc -l /etc/passwd', expectedOutput: '[0-9]+', hint: 'Используйте wc -l', difficulty: 1 },
  { id: 'tc-lpic1-9', description: 'Показать тип файла /usr/bin/ls', prompt: 'file /usr/bin/ls', expectedOutput: 'ELF', hint: 'Используйте команду file', difficulty: 2 },
  { id: 'tc-lpic1-10', description: 'Найти пакет, содержащий /usr/bin/vim', prompt: 'dpkg -S /usr/bin/vim', expectedOutput: 'vim', hint: 'Используйте dpkg -S', difficulty: 2 },
  { id: 'tc-lpic1-11', description: 'Показать UUID блочных устройств', prompt: 'blkid', expectedOutput: 'UUID=', hint: 'Используйте blkid', difficulty: 2 },
  { id: 'tc-lpic1-12', description: 'Показать права доступа к /etc/passwd', prompt: 'ls -l /etc/passwd', expectedOutput: '-rw-r--r--', hint: 'Используйте ls -l', difficulty: 1 },
  { id: 'tc-lpic1-13', description: 'Показать inode /etc/hostname', prompt: 'ls -i /etc/hostname', expectedOutput: '[0-9]+', hint: 'Используйте ls -i', difficulty: 2 },
  { id: 'tc-lpic1-14', description: 'Показать библиотеки для /bin/ls', prompt: 'ldd /bin/ls', expectedOutput: 'libc.so', hint: 'Используйте ldd', difficulty: 2 },
  { id: 'tc-lpic1-15', description: 'Показать версию ядра', prompt: 'uname -r', expectedOutput: '[0-9]+\\.[0-9]+', hint: 'Используйте uname -r', difficulty: 1 },
]
