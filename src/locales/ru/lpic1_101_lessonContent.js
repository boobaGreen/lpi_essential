// LPIC-1 101 Lesson Content — Russian
// Содержание всех 28 уроков

export const lpic1_101_lessonContent_ru = {
  // ──── Topic 1: Архитектура системы ────
  'lpic1-101-1-1': {
    title: 'Оборудование и периферия',
    comic: {
      title: 'Linux и железо: Идеальный союз 🤝',
      panels: [
        { emoji: '⚙️', text: 'При загрузке ядро сканирует шины PCI и USB, чтобы найти каждый компонент.' },
        { emoji: '📁', text: 'Всё есть файл! Информация о железе появляется в /proc и /sys в виде текстовых файлов.' },
        { emoji: '🔌', text: 'udev создает узлы в /dev (например, /dev/sda), чтобы мы могли использовать диски.' },
        { emoji: '🛠️', text: 'lspci и lsusb — это ваши микроскопы, чтобы заглянуть под капот!' },
      ]
    },
    keyPoints: [
      { title: 'Виртуальные ФС', items: ['/proc — Динамическая инфо (cpuinfo, meminfo)', '/sys — Структура шин и драйверов', '/dev — Специальные файлы устройств'] },
      { title: 'Инструменты', items: ['lspci — Список PCI/PCIe устройств', 'lsusb — Список USB периферии', 'lsblk — Дерево блочных устройств (диски)'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Процесс загрузки',
    comic: {
      title: 'От включения до рабочего стола ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI: Выполняет POST и ищет загрузчик в MBR или ESP разделе.' },
        { emoji: '🐧', text: 'GRUB2: Регулировщик, который загружает Ядро и initramfs в память.' },
        { emoji: '🧠', text: 'Ядро: Инициализирует железо и монтирует финальную корневую систему (/).' },
        { emoji: '🚀', text: 'Systemd: Первый процесс (PID 1), запускающий все службы системы.' },
      ]
    },
    keyPoints: [
      { title: 'Фазы загрузки', items: ['Firmware → Загрузчик → Ядро → Init', 'dmesg — Читает сообщения ядра при загрузке', 'journalctl -b — Логи последней загрузки'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: 'Уровни запуска и цели systemd', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: Установка и управление пакетами ────
  'lpic1-101-2-1': { title: 'Разметка жесткого диска', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: 'Менеджер загрузки (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: 'Общие библиотеки', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Пакеты Debian (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'Пакеты RPM и YUM/DNF', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Виртуализация Linux', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: Команды GNU и Unix ────
  'lpic1-101-3-1-1': { title: 'Командная строка — База', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: 'Командная строка — Переменные', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: 'Текстовые фильтры', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: 'Управление файлами — База', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: 'Управление файлами — Продвинутое', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: 'Перенаправления и пайпы — База', terminal: { prompt: '$ ls > list.txt', output: '' } },
  'lpic1-101-3-4-2': { title: 'Перенаправления и пайпы — Продвинутое', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: 'Процессы — База', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: 'Процессы — Управление заданиями', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: 'Приоритеты процессов', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: 'Регулярные выражения — База', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: 'Регулярные выражения — Расширенные', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'Редактор vi/vim', terminal: { prompt: 'vi file.txt', output: '[Открывает редактор]' } },

  // ──── Topic 4: Устройства, файловые системы и стандарт FHS ────
  'lpic1-101-4-1-1': { title: 'Разделы и файловые системы', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: 'Целостность файловых систем', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: 'Монтирование и размонтирование', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: 'Права и владение', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: 'Жесткие и мягкие ссылки', terminal: { prompt: '$ ln -s origin link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS и расположение файлов', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
