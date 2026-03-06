export const rhcsaLessonContentRU = {

  // ─── TOPIC 1: Основные инструменты ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell и перенаправление ввода/вывода',
      panels: [
        { emoji: '📤', text: '`>` перезаписывает файл выводом: `echo "привет" > file.txt` создает или перезаписывает.' },
        { emoji: '📥', text: '`>>` добавляет вывод в конец файла: `echo "строка" >> file.txt` сохраняет содержимое.' },
        { emoji: '🔗', text: '`|` (pipe) передает вывод одной команды на вход следующей: `ls -l | grep ".txt"`.' },
        { emoji: '⚠️', text: '`2>` перенаправляет только ошибки: `find / -name "*.conf" 2> /dev/null` скрывает ошибки.' },
        { emoji: '🎯', text: '`&>` перенаправляет stdout и stderr в один и тот же файл: `command &> out.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Операторы перенаправления',
        items: [
          '`>` — перезаписать стандартный вывод (stdout) в файл',
          '`>>` — добавить стандартный вывод в файл',
          '`2>` — перенаправить стандартную ошибку (stderr) в файл',
          '`2> /dev/null` — игнорировать сообщения об ошибках',
          '`&>` — перенаправить оба (stdout и stderr) в одно место',
          '`|` — соединить вывод одного процесса с вводом другого',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep и регулярные выражения',
      panels: [
        { emoji: '🔎', text: '`grep "шаблон" file` ищет строки, содержащие шаблон в файле.' },
        { emoji: '🚫', text: '`grep -v "шаблон"` показывает все строки, КРОМЕ совпадающих.' },
        { emoji: '📏', text: '`^` соответствует началу строки, `$` — концу. `^root` найдет строки, начинающиеся с root.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` использует расширенные regex с ИЛИ.' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` считает количество совпадающих строк.' },
      ],
    },
    keyPoints: [
      {
        title: 'Основные опции grep',
        items: [
          '`-i` — игнорировать регистр',
          '`-r` или `-R` — рекурсивный поиск в директориях',
          '`-v` — инвертировать поиск (НЕ)',
          '`-n` — показывать номера строк',
          '`-E` — включить расширенные регулярные выражения (ERE)',
          '`-w` — искать только целые слова',
        ],
      },
      {
        title: 'Базовые спецсимволы Regex',
        items: [
          '`.` — любой один символ',
          '`*` — ноль или более повторений предыдущего символа',
          '`^` — привязка к началу строки',
          '`$` — привязка к концу строки',
          '`[a-z]` — любой символ из указанного диапазона',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Права доступа и ссылки',
      panels: [
        { emoji: '🔐', text: 'Права UNIX: `rwxrwxrwx` — Владелец, Группа, Остальные. `chmod 755 file` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown mario:dev file` меняет владельца на mario и группу на dev.' },
        { emoji: '🔗', text: 'Жесткая ссылка: `ln file link` — тот же inode, выживает при удалении оригинала.' },
        { emoji: '🔁', text: 'Символьная ссылка: `ln -s /real/path link` — указывает на путь (псевдоним).' },
        { emoji: '📊', text: '`ls -l` показывает: тип, права, жесткие ссылки, владелец, группа, размер, дата, имя.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — восьмеричная нотация',
        items: [
          '`4` = чтение (r), `2` = запись (w), `1` = выполнение (x)',
          '`755` = rwxr-xr-x (типично для директорий)',
          '`644` = rw-r--r-- (типично для обычных файлов)',
        ],
      },
      {
        title: 'Жесткие ссылки vs Символьные',
        items: [
          'Жесткая ссылка: указывает на те же данные на диске; не может пересекать файловые системы.',
          'Символьная ссылка (Soft): маленький файл, содержащий путь к реальному файлу.',
          '`ls -l` отображает `l` в начале для символьных ссылок.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Архивы и сжатие',
      panels: [
        { emoji: '📦', text: '`tar -czvf archive.tar.gz /dir` — создает сжатый архив gzip.' },
        { emoji: '📂', text: '`tar -xzvf archive.tar.gz` — извлекает содержимое сжатого архива.' },
        { emoji: '🔍', text: '`tar -tzvf archive.tar.gz` — список содержимого без извлечения.' },
        { emoji: '⚡', text: 'Инструменты сжатия: `gzip` (.gz), `bzip2` (.bz2), `xz` (.xz). XZ самый медленный, но сжимает лучше всего.' },
        { emoji: '💡', text: 'Запомните флаги tar: c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Основные флаги tar',
        items: [
          '`c` — создать архив',
          '`x` — извлечь архив',
          '`t` — вывести список содержимого',
          '`f` — указать имя файла (всегда в конце!)',
          '`v` — подробный режим (показывать прогресс)',
        ],
      },
      {
        title: 'Форматы сжатия',
        items: [
          '`z` — gzip (быстрый, стандартный)',
          '`j` — bzip2 (сжатие лучше, чем у gzip)',
          '`J` — xz (лучшее сжатие, требует больше ресурсов CPU)',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/` from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 Системная документация',
      panels: [
        { emoji: '📖', text: '`man command` — показывает полное руководство. Навигация стрелками, поиск через `/шаблон`, выход — `q`.' },
        { emoji: '❓', text: '`man -k word` (или `apropos`) ищет команды по теме.' },
        { emoji: 'ℹ️', text: '`info command` — более подробная и структурированная документация, чем man.' },
        { emoji: '📁', text: '`/usr/share/doc/` содержит README, CHANGELOG и примеры для каждого пакета.' },
        { emoji: '💡', text: '`command --help` — быстрая справка. Очень полезно на экзамене, чтобы вспомнить опции.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — разделы и навигация',
        items: [
          'Раздел 1: команды пользователя, 5: файлы конфигурации, 8: команды root',
          '`man 5 passwd` — посмотреть формат файла /etc/passwd (не команды)',
          'Используйте `/слово` для поиска внутри man и `n` для следующего результата.',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "password" | head -3',
      output: 'chpasswd (8) - update passwords in batch mode\ngpasswd (1) - administer /etc/group and /etc/gshadow\npasswd (1) - update user\'s authentication tokens',
    },
  },

  // ─── TOPIC 2: Shell Scripting ──────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '🐚 Переменные и синтаксис Bash',
      panels: [
        { emoji: '📝', text: 'Начинайте с `#!/bin/bash` (Shebang), чтобы указать интерпретатор.' },
        { emoji: '🏷️', text: '`VAR="value"` (без пробелов!). Доступ через `$VAR` или `${VAR}`.' },
        { emoji: '💬', text: 'Двойные кавычки `"` разрешают раскрытие переменных ($), одинарные `\'` — строгие.' },
        { emoji: '💻', text: '`OUTPUT=$(ls)` сохраняет вывод команды в переменную.' },
        { emoji: '🚀', text: 'Дайте права: `chmod +x script.sh` и запустите через `./script.sh`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Shebang и права доступа',
        items: [
          'Первая строка должна быть `#!/bin/bash` или аналогом.',
          'Используйте `chmod +x`, чтобы сделать скрипт исполняемым напрямую.',
        ],
      },
      {
        title: 'Переменные и подстановка',
        items: [
          'Нет пробелов вокруг `=` : `NAME="mario"` (ВЕРНО), `NAME = "mario"` (ОШИБКА).',
          '`$(команда)` — современная форма подстановки вывода команды.',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat hello.sh && ./hello.sh',
      output: '#!/bin/bash\nNAME="RHCSA"\necho "Hello $NAME"\n---\nHello RHCSA',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Условия и циклы',
      panels: [
        { emoji: '❓', text: '`if [ $A -gt $B ]; then ... fi` — Условная структура. Внимание на пробелы в `[` и `]` !' },
        { emoji: '🔄', text: '`for file in *.txt; do ... done` — Перебор списка элементов.' },
        { emoji: '⏳', text: '`while [ условие ]; do ... done` — Повторять, пока условие истинно.' },
        { emoji: '🚥', text: '`case $VAR in шаблон) ... ;; esac` — Эффективный множественный выбор.' },
        { emoji: '✅', text: 'Операторы проверки: `-f` (файл), `-d` (папка), `-z` (пусто), `-eq` (равно-число).' },
      ],
    },
    keyPoints: [
      {
        title: 'Операторы проверки [ ]',
        items: [
          '`-eq`, `-ne`, `-lt`, `-gt` — сравнение чисел',
          '`==`, `!=` — сравнение строк',
          '`-f файл` — истина, если файл существует и это обычный файл',
          '`-d папка` — истина, если это директория',
        ],
      },
      {
        title: 'Циклы',
        items: [
          '`for` идеален для обработки файлов.',
          '`while` часто используется с `read` для построчного чтения файлов.',
        ],
      },
    ],
    terminal: {
      prompt: '$ if [ 10 -gt 5 ]; then echo "Больше"; fi',
      output: 'Больше',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '📥 Параметры и вывод',
      panels: [
        { emoji: '🔢', text: '`$1`, `$2`... — аргументы скрипта. `$0` — имя самого скрипта.' },
        { emoji: '👥', text: '`$@` представляет все аргументы как список.' },
        { emoji: '📊', text: '`$#` — общее количество переданных аргументов.' },
        { emoji: '❓', text: '`$?` — код выхода последней команды. `0` = УСПЕХ, иначе = ОШИБКА.' },
        { emoji: '🚪', text: '`exit 0` завершает скрипт успешно. `exit 1` указывает на сбой.' },
      ],
    },
    keyPoints: [
      {
        title: 'Аргументы командной строки',
        items: [
          '`$1` — первый аргумент',
          '`$#` — количество аргументов',
          '`$@` — все аргументы',
        ],
      },
      {
        title: 'Код выхода ($?)',
        items: [
          'Критически важен для обработки ошибок.',
          'Проверяйте его сразу после выполнения важных команд.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls /non/existent/dir; echo $?',
      output: 'ls: cannot access ...: No such file or directory\n2',
    },
  },

  // ─── TOPIC 3: Системное администрирование ────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '🚀 Загрузка и таргеты systemd',
      panels: [
        { emoji: '🎯', text: 'Target определяет состояние системы. `multi-user.target` = консоль, `graphical.target` = рабочий стол.' },
        { emoji: '⚙️', text: '`systemctl get-default` показывает таргет по умолчанию.' },
        { emoji: '🔄', text: '`systemctl set-default graphical.target` меняет режим загрузки навсегда.' },
        { emoji: '⚡', text: '`systemctl isolate multi-user.target` переключает в консоль немедленно.' },
        { emoji: '🛠️', text: 'Для ремонта: добавьте `rd.break` в GRUB для входа в режим отладки.' },
      ],
    },
    keyPoints: [
      {
        title: 'Таргеты systemd',
        items: [
          '`multi-user.target` — традиционный Runlevel 3 (консоль)',
          '`graphical.target` — традиционный Runlevel 5 (GUI)',
          '`rescue.target` — базовый режим обслуживания',
        ],
      },
      {
        title: 'Сброс пароля root (rd.break)',
        items: [
          '1. Редактировать GRUB, добавить `rd.break` в конце строки `linux`.',
          '2. `mount -o remount,rw /sysroot` (перемонтировать на чтение-запись).',
          '3. `chroot /sysroot` (войти в реальный корень).',
          '4. `passwd root` (сменить пароль).',
          '5. `touch /.autorelabel` (ОБЯЗАТЕЛЬНО для SELinux).',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '📊 Управление процессами',
      panels: [
        { emoji: '👁️', text: '`ps aux` или `ps -ef` выводят список всех активных процессов с их PID.' },
        { emoji: '📈', text: '`top` показывает процессы с высоким потреблением CPU и RAM в реальном времени.' },
        { emoji: '🛑', text: '`kill PID` посылает сигнал мягкого завершения. `kill -9 PID` (SIGKILL) — принудительно.' },
        { emoji: '⚖️', text: 'Приоритет: "Nice" от -20 (макс.) до +19 (мин.). `nice -n -5 command` запустит с высоким приоритетом.' },
        { emoji: '🔧', text: '`renice -n 10 -p PID` меняет приоритет уже запущенного процесса.' },
      ],
    },
    keyPoints: [
      {
        title: 'Основные сигналы',
        items: [
          '`15` (SIGTERM) — чистое завершение (по умолчанию)',
          '`9` (SIGKILL) — немедленное прекращение процесса',
          '`1` (SIGHUP) — перезагрузить конфигурацию',
        ],
      },
      {
        title: 'Nice и приоритет',
        items: [
          'Только root может назначать отрицательные значения (выше приоритет).',
          'Чем выше число Nice, тем "вежливее" процесс к другим (ниже приоритет).',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps -ef | grep httpd | head -2',
      output: 'root      1234     1  0 10:00 ?        00:00:00 /usr/sbin/httpd\napache    1235  1234  0 10:00 ?        00:00:00 /usr/sbin/httpd',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🛠️ Управление службами через systemctl',
      panels: [
        { emoji: '🟢', text: '`systemctl start sshd` запускает службу немедленно.' },
        { emoji: '📌', text: '`systemctl enable sshd` включает автозапуск службы при загрузке.' },
        { emoji: '🔄', text: '`systemctl restart sshd` останавливает и снова запускает службу.' },
        { emoji: '🚫', text: '`systemctl mask firewalld` полностью блокирует запуск службы, даже вручную.' },
        { emoji: '🔍', text: '`systemctl status sshd` показывает состояние, автозапуск и последние логи.' },
      ],
    },
    keyPoints: [
      {
        title: 'Основные команды',
        items: [
          '`start`, `stop`, `restart`, `reload` — управление выполнением',
          '`enable`, `disable` — управление автозагрузкой',
          '`status`, `is-active`, `is-enabled` — проверка состояния',
          '`mask`, `unmask` — защита от случайного запуска',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl is-active sshd',
      output: 'active',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📔 Логи и планировщик задач',
      panels: [
        { emoji: '📜', text: '`journalctl` показывает все логи systemd. `journalctl -u sshd` фильтрует по службе.' },
        { emoji: '⏲️', text: '`crontab -e` планирует периодические задачи (мин час день мес день_нед команда).' },
        { emoji: '🏃', text: '`at 15:00` планирует разовую задачу в будущем.' },
        { emoji: '🔦', text: '`journalctl -f` следит за логами в реальном времени (как tail -f).' },
        { emoji: '🗓️', text: '`crontab -l` выводит список задач текущего пользователя.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl — расширенная фильтрация',
        items: [
          '`-b` — только логи текущей загрузки',
          '`-p err` — только сообщения об ошибках',
          '`--since "1 hour ago"` — свежие логи',
        ],
      },
      {
        title: 'Планирование cron',
        items: [
          'Формат: `* * * * * команда` (минуты, часы, день месяца, месяц, день недели).',
          '`/etc/cron.allow` и `/etc/cron.deny` управляют доступом к cron.',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -n 5 -p err',
      output: '-- Journal begins at ... --\nJan 15 10:00:01 systemd[1]: Failed to start ...',
    },
  },

  // ─── TOPIC 4: Локальное хранилище — LVM ────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 Разметка GPT',
      panels: [
        { emoji: '🏗️', text: '`parted /dev/sdb` — инструмент для создания разделов. Используйте `mklabel gpt` для новых дисков.' },
        { emoji: '📏', text: '`mkpart primary xfs 1MiB 2GiB` создает раздел на 2 ГБ.' },
        { emoji: '👀', text: '`lsblk` визуально показывает структуру блоков (диски и разделы).' },
        { emoji: '❗', text: '`udevadm settle` заставляет систему немедленно распознать изменения.' },
        { emoji: '🔍', text: '`blkid` показывает UUID разделов, необходимый для постоянного монтирования.' },
      ],
    },
    keyPoints: [
      {
        title: 'Инструменты разметки',
        items: [
          '`fdisk` — интерактивный, классика для MBR/GPT',
          '`gdisk` — специально для GPT',
          '`parted` — поддерживает скрипты и очень функционален',
        ],
      },
      {
        title: 'Действия после разметки',
        items: [
          'Используйте `lsblk`, чтобы убедиться, что система видит раздел.',
          'Отформатируйте через `mkfs` перед использованием.',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk /dev/nvme0n1',
      output: 'NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nnvme0n1     259:0    0   20G  0 disk \n├─nvme0n1p1 259:1    0  600M  0 part /boot/efi\n└─nvme0n1p2 259:2    0 19.4G  0 part /',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🧱 LVM — Физические тома и Группы',
      panels: [
        { emoji: '🔨', text: '`pvcreate /dev/sdb1` подготавливает физический раздел для LVM.' },
        { emoji: '📦', text: '`vgcreate vg_data /dev/sdb1` объединяет Physical Volumes (PV) в Volume Group (VG).' },
        { emoji: '➕', text: '`vgextend vg_data /dev/sdc1` добавляет место в существующую группу томов.' },
        { emoji: '📊', text: '`pvs`, `vgs`, `lvs` показывают краткие сводки по каждому уровню LVM.' },
        { emoji: '🔍', text: '`pvdisplay` или `vgdisplay` дают детали (размер, сектора, UUID).' },
      ],
    },
    keyPoints: [
      {
        title: 'Архитектура LVM',
        items: [
          'PV (Physical Volume) — физическая часть (раздел или диск).',
          'VG (Volume Group) — пул хранения.',
          'LV (Logical Volume) — "виртуальный раздел", который мы форматируем.',
        ],
      },
    ],
    terminal: {
      prompt: '$ vgs',
      output: '  VG      #PV #LV #SN Attr   VSize  VFree \n  cs        1   2   0 wz--n- <19.00g    0 \n  vg_data   1   0   0 wz--n-   2.00g  2.00g',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '💎 LVM — Логические тома',
      panels: [
        { emoji: '🔪', text: '`lvcreate -L 1G -n lv_docs vg_data` берет 1 ГБ из группы для создания логического тома.' },
        { emoji: '📈', text: '`lvextend -L +500M /dev/vg_data/lv_docs` добавляет 500 МБ к логическому тому.' },
        { emoji: '✨', text: '`lvextend -r -l +100%FREE ...` расширяет LV И файловую систему до максимума.' },
        { emoji: '💾', text: 'Форматирование: `mkfs.xfs /dev/vg_data/lv_docs` готовит LV для файлов.' },
        { emoji: '📏', text: '`xfs_growfs /mnt/docs` расширяет XFS после увеличения LV.' },
      ],
    },
    keyPoints: [
      {
        title: 'Управление LV',
        items: [
          '`lvcreate -n имя -L размер VG` — создание',
          '`lvextend -L +размер -r LV` — расширить том и ФС одновременно (рекомендуется)',
          '`lvremove` — удалить том (требует подтверждения)',
        ],
      },
      {
        title: 'Разница XFS и EXT4',
        items: [
          'XFS можно только увеличивать, нельзя уменьшать.',
          'EXT4 можно увеличивать и уменьшать (хотя уменьшение рискованно и требует размонтирования).',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvs vg_data',
      output: '  LV      VG      Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv_docs vg_data -wi-a----- 1.00g',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '🔗 Монтирование, fstab и Swap',
      panels: [
        { emoji: '📍', text: '`mount /dev/sdb1 /mnt/data` временно подключает устройство.' },
        { emoji: '📝', text: '`/etc/fstab` — ключевой файл. Определяет, что монтировать при загрузке (UUID, точка, тип, опции).' },
        { emoji: '🔄', text: '`mount -a` проверяет fstab и монтирует всё необходимое.' },
        { emoji: '🧠', text: 'Swap: `mkswap /dev/sdb2` затем `swapon /dev/sdb2` активирует раздел подкачки.' },
        { emoji: '🔒', text: 'Постоянное монтирование: всегда используйте UUID во избежание проблем при смене имен дисков.' },
      ],
    },
    keyPoints: [
      {
        title: 'Формат /etc/fstab',
        items: [
          'Кол 1: Устройство (UUID=...)',
          'Кол 2: Точка монтирования (/data)',
          'Кол 3: Тип ФС (xfs, ext4, swap, nfs)',
          'Кол 4: Опции (defaults)',
          'Кол 5: Dump (0)',
          'Кол 6: Проверка FSCK (0 для XFS, 1 или 2 для остальных)',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat /etc/fstab | grep data',
      output: 'UUID=a1b2c3d4-e5f6... /data  xfs  defaults  0 0',
    },
  },

  // ─── TOPIC 5: Файловые системы ──────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 и XFS',
      panels: [
        { emoji: '🛠️', text: '`mkfs.xfs /dev/vg_data/lv_docs` — создает ФС XFS, стандарт для RHEL.' },
        { emoji: '📦', text: '`mkfs.ext4 /dev/vg_data/lv_old` — создает ext4 для совместимости.' },
        { emoji: '📍', text: '`mount /dev/vg/lv /point` — немедленное подключение. `/etc/fstab` для постоянного.' },
        { emoji: '🏷️', text: '`xfs_admin -L "DATA" /dev/sdb1` — задает метку (Label) разделу XFS.' },
        { emoji: '🔍', text: '`df -hT` — показывает свободное место и тип каждой смонтированной ФС.' },
      ],
    },
    keyPoints: [
      {
        title: 'Создание и обслуживание',
        items: [
          '`mkfs.xfs`, `mkfs.ext4` — форматирование',
          '`xfs_growfs` — расширение XFS',
          '`resize2fs` — расширение/уменьшение ext4',
          '`mount -o loop` — монтирование ISO или образов',
        ],
      },
    ],
    terminal: {
      prompt: '$ df -hT /data',
      output: 'Filesystem              Type  Size  Used Avail Use% Mounted on\n/dev/mapper/vg_data-lv  xfs   2.0G   45M  2.0G   3% /data',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔒 Шифрование с LUKS',
      panels: [
        { emoji: '🔐', text: '`cryptsetup luksFormat /dev/sdb1` — форматирует раздел под шифрование (стирает всё!).' },
        { emoji: '🔑', text: '`cryptsetup open /dev/sdb1 safe` — открывает сейф и сопоставляет его с `/dev/mapper/safe`.' },
        { emoji: '📦', text: 'После открытия форматируем маппер: `mkfs.xfs /dev/mapper/safe`.' },
        { emoji: '📝', text: 'Для авто-монтирования: правьте `/etc/crypttab` (имя, UUID, файл ключа или `none`).' },
        { emoji: '🚪', text: '`cryptsetup close safe` — закрывает сейф и снова защищает данные.' },
      ],
    },
    keyPoints: [
      {
        title: 'Шаги для постоянного LUKS',
        items: [
          '1. `luksFormat` (создать)',
          '2. `open` (открыть под именем)',
          '3. Создать файловую систему в `/dev/mapper/имя`',
          '4. Записать в `/etc/crypttab` (для запроса пароля при загрузке)',
          '5. Записать в `/etc/fstab` через путь маппера',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status safe',
      output: '/dev/mapper/safe is active.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🔗 Сетевое хранилище — NFS и autofs',
      panels: [
        { emoji: '🌎', text: '`mount -t nfs server:/path /local` — монтирует общую сетевую папку.' },
        { emoji: '🤖', text: '`autofs` — служба, монтирующая папки по запросу (когда в них заходят) и отключающая их при бездействии.' },
        { emoji: '📝', text: 'Настройка: `/etc/auto.master` задает базу, файл мэппинга — правила.' },
        { emoji: '📁', text: 'Пример мэппинга: `data -rw,soft server:/export/data`.' },
        { emoji: '💡', text: 'Очень важно на экзамене для автоматического монтирования домашних папок.' },
      ],
    },
    keyPoints: [
      {
        title: 'Настройка autofs',
        items: [
          '`dnf install autofs` — установка',
          'Строка в `/etc/auto.master`: `/projets /etc/auto.projets`',
          'Мэп `/etc/auto.proyectos`: `web -rw,sync server:/shares/web`',
          'Перезапустить службу: `systemctl enable --now autofs`',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e 192.168.1.100',
      output: 'Export list for 192.168.1.100:\n/shares/web  *\n/shares/data 192.168.1.0/24',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🛡️ ACL и специальные права доступа',
      panels: [
        { emoji: '👥', text: '`setfacl -m u:mario:rwx file` — дает права Марио без смены владельца.' },
        { emoji: '🔍', text: '`getfacl file` — показывает все расширенные права и ACL.' },
        { emoji: '📌', text: '`chmod g+s /dir` — (SetGID) новые файлы наследуют группу директории.' },
        { emoji: '🧊', text: '`chmod +t /dir` — (Sticky Bit) только владелец может удалять свои файлы (например, /tmp).' },
        { emoji: '👑', text: '`chmod u+s /bin/binary` — (SetUID) программа выполняется с правами владельца (обычно root).' },
      ],
    },
    keyPoints: [
      {
        title: 'ACL (Access Control Lists)',
        items: [
          '`-m` — изменить правило',
          '`-x` — удалить конкретное правило',
          '`-b` — удалить все ACL с файла',
          '`d:u:user:rpx` — Default ACL: авто-применение к новым файлам в папке',
        ],
      },
      {
        title: 'Специальные права (SUID, SGID, Sticky)',
        items: [
          'SUID (4): `s` на месте `x` владельца. Выполнение от имени владельца.',
          'SGID (2): `s` на месте `x` группы. Общая работа в папках.',
          'Sticky (1): `t` в конце. Безопасность в общих папках.',
        ],
      },
    ],
    terminal: {
      prompt: '$ getfacl shared_dir',
      output: '# file: shared_dir\n# owner: root\n# group: root\nuser::rwx\nuser:mario:rwx\ngroup::r-x\nmask::rwx\nother::r-x',
    },
  },

  // ─── TOPIC 6: Обслуживание системы ─────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Управление ПО через DNF',
      panels: [
        { emoji: '📥', text: '`dnf install httpd` — устанавливает пакет и зависимости автоматически.' },
        { emoji: '🔍', text: '`dnf search nginx` — ищет пакеты в репозиториях.' },
        { emoji: '📂', text: '`dnf list installed` — показывает всё, что установлено в системе.' },
        { emoji: '📜', text: '`dnf history` — история операций с возможностью `undo`.' },
        { emoji: '⚙️', text: '`dnf provides /etc/mime.types` — сообщает, какой пакет содержит этот файл.' },
      ],
    },
    keyPoints: [
      {
        title: 'Основные команды dnf',
        items: [
          '`install`, `remove`, `update` — базовые операции',
          '`group install "Development Tools"` — установка групп пакетов',
          '`repoinfo` — список активных репозиториев',
          '`clean all` — очистка кэша загрузок',
        ],
      },
      {
        title: 'Настройка репозиториев',
        items: [
          'Путь: `/etc/yum.repos.d/*.repo`',
          'Должен включать `[id]`, `name`, `baseurl`, `enabled=1` и `gpgcheck=1`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides /usr/bin/python3',
      output: 'python3-3.9.7-1.el9.x86_64 : Interpreter of the Python programming language',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '🕵️ RPM — запросы и проверка',
      panels: [
        { emoji: '🔎', text: '`rpm -qa` — список всех установленных пакетов.' },
        { emoji: '📦', text: '`rpm -ivh package.rpm` — установка RPM-файла локально (без сетевых зависимостей!).' },
        { emoji: '🔍', text: '`rpm -ql httpd` — список всех файлов, установленных пакетом httpd.' },
        { emoji: '🛠️', text: '`rpm -V httpd` — проверка целостности файлов пакета.' },
        { emoji: '❓', text: '`rpm -qi httpd` — детальная информация (версия, описание и т.д.).' },
      ],
    },
    keyPoints: [
      {
        title: 'Флаги запросов (rpm -q)',
        items: [
          '`-i` — Информация',
          '`-l` — Список файлов',
          '`-c` — Только файлы конфигурации',
          '`-d` — Только документация',
          '`-f /path/to/file` — Какому пакету принадлежит файл?',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /etc/passwd',
      output: 'setup-2.13.7-6.el9.noarch',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🎡 GRUB2 и ядро системы',
      panels: [
        { emoji: '🐧', text: 'Ядро (Kernel) — это сердце системы. `uname -r` показывает текущую версию.' },
        { emoji: '⚙️', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — обновление меню загрузки.' },
        { emoji: '📝', text: '`/etc/default/grub` — место для правки параметров загрузки (напр. консоль).' },
        { emoji: '🛠️', text: '`grubby --info=ALL` — инструмент RHEL для настройки параметров ядра.' },
        { emoji: '🆙', text: 'Новое установленное ядро обычно становится загружаемым по умолчанию.' },
      ],
    },
    keyPoints: [
      {
        title: 'Настройка GRUB2',
        items: [
          'Никогда не правьте `/boot/grub2/grub.cfg` вручную.',
          'Используйте `/etc/default/grub`, затем запустите `grub2-mkconfig`.',
          '`GRUB_TIMEOUT=5`, `GRUB_CMDLINE_LINUX="..."`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ uname -r',
      output: '5.14.0-70.13.1.el9_0.x86_64',
    },
  },

  // ─── TOPIC 7: Сетевые основы ──────────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli и настройка сети',
      panels: [
        { emoji: '🔌', text: '`nmcli device status` — состояние физических интерфейсов (eth0 и др.).' },
        { emoji: '🛠️', text: '`nmcli connection show` — список профилей соединений.' },
        { emoji: '📍', text: '`nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual`.' },
        { emoji: '🚀', text: '`nmcli con up "eth0"` — применить изменения и активировать.' },
        { emoji: '🏠', text: '`hostnamectl set-hostname rhel9-lab.example.com` — сменить имя хоста навсегда.' },
      ],
    },
    keyPoints: [
      {
        title: 'Структура NetworkManager',
        items: [
          'Device — оборудование (интерфейс).',
          'Connection — программный профиль (конфигурация).',
          'Для одного Device можно иметь несколько профилей Connection.',
        ],
      },
      {
        title: 'hostname и DNS',
        items: [
          '`/etc/hostname` — имя машины.',
          '`/etc/hosts` — локальное разрешение имен (IP имя).',
          '`/etc/resolv.conf` — DNS-серверы (управляется NetworkManager).',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli connection show --active',
      output: 'NAME                UUID                                  TYPE      DEVICE \nenp1s0              7d7c6b5a-4e3d-2c1b-0a9f-8e7d...       ethernet  enp1s0',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld — Межсетевой экран',
      panels: [
        { emoji: '🛡️', text: '`firewall-cmd --get-active-zones` — какие зоны защищают интерфейсы.' },
        { emoji: '🔓', text: '`firewall-cmd --add-service=http --permanent` — разрешить веб-трафик постоянно.' },
        { emoji: '🔌', text: '`firewall-cmd --add-port=8080/tcp --permanent` — открыть конкретный порт.' },
        { emoji: '🔄', text: '`firewall-cmd --reload` — ОБЯЗАТЕЛЬНО! Применяет правила в текущей сессии.' },
        { emoji: '🔍', text: '`firewall-cmd --list-all` — полный обзор настроек зоны по умолчанию.' },
      ],
    },
    keyPoints: [
      {
        title: 'Зоны и правила',
        items: [
          'Зона `public` — обычно используется по умолчанию.',
          'Флаг `--permanent` — иначе правила пропадут после перезагрузки.',
          'Runtime (текущие) правила vs Permanent (постоянные).',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --list-services',
      output: 'cockpit dhcpv6-client ssh',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔑 SSH и передача файлов',
      panels: [
        { emoji: '🔐', text: '`ssh-keygen` — генерация пары ключей (публичного и приватного).' },
        { emoji: '📤', text: '`ssh-copy-id user@server` — передача публичного ключа на сервер.' },
        { emoji: '📂', text: '`scp file.txt root@server:/tmp/` — безопасное копирование файлов по сети.' },
        { emoji: '🔄', text: '`rsync -av /local/ /remote/` — эффективная синхронизация папок.' },
        { emoji: '🛡️', text: 'Конфиг: `/etc/ssh/sshd_config`. Управляет доступом root и портами.' },
      ],
    },
    keyPoints: [
      {
        title: 'Безопасность SSH',
        items: [
          '`PermitRootLogin no` — запретить прямой вход под root (рекомендуется).',
          '`PasswordAuthentication no` — вход только по ключам (RSA/Ed25519).',
          'Используйте `systemctl reload sshd` после внесения правок.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server',
      output: 'Number of key(s) added: 1\nNow try logging into the machine...',
    },
  },

  // ─── TOPIC 8: Пользователи и группы ──────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 Управление пользователями',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — создать пользователя с домом и bash.' },
        { emoji: '🔑', text: '`passwd mario` — задать пароль. Только root может менять чужие пароли.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — добавить Марио в группу wheel (sudo). Всегда с -a!' },
        { emoji: '⏰', text: '`chage -M 90 mario` — срок действия пароля 90 дней.' },
        { emoji: '🗑️', text: '`userdel -r mario` — удалить пользователя и его домашнюю директорию.' },
      ],
    },
    keyPoints: [
      {
        title: 'Опции useradd',
        items: [
          '`-m` — создать домашнюю директорию',
          '`-s` — задать оболочку (shell) по умолчанию',
          '`-u` — задать конкретный UID',
          '`-c` — добавить комментарий (напр. реальное имя)',
        ],
      },
      {
        title: 'Управление аккаунтом (chage)',
        items: [
          '`-l` — вывести данные о сроках аккаунта',
          '`-E` — дата истечения срока аккаунта',
          '`-W` — предупреждение за N дней до смены пароля',
        ],
      },
    ],
    terminal: {
      prompt: '$ id mario',
      output: 'uid=1001(mario) gid=1001(mario) groups=1001(mario),10(wheel)',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Группы и sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 2000 devs` — создать группу с конкретным GID.' },
        { emoji: '👤', text: '`usermod -g primary -G secondary user` — смена групп.' },
        { emoji: '🔐', text: '`visudo` — безопасная правка `/etc/sudoers` (с проверкой синтаксиса).' },
        { emoji: '📁', text: '`/etc/sudoers.d/` — лучшее место для отдельных правил sudo.' },
        { emoji: '❌', text: '`groupdel devs` — удалить группу (если она не основная для кого-то).' },
      ],
    },
    keyPoints: [
      {
        title: 'Конфигурация sudoers',
        items: [
          '`%wheel ALL=(ALL) ALL` — разрешить всё участникам wheel.',
          '`user ALL=(ALL) NOPASSWD: /usr/bin/dnf` — выполнение команды без пароля.',
        ],
      },
    ],
    terminal: {
      prompt: '$ groups root',
      output: 'root : root',
    },
  },

  // ─── TOPIC 9: SELinux и безопасность ───────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 3 режима SELinux',
      panels: [
        { emoji: '🟢', text: 'Enforcing: активный режим. Блокирует запрещенные действия и пишет логи.' },
        { emoji: '🟡', text: 'Permissive: ничего не блокирует, но ЛОГИРУЕТ то, что было бы заблокировано.' },
        { emoji: '🔴', text: 'Disabled: SELinux полностью отключен. Не рекомендуется.' },
        { emoji: '⚡', text: '`setenforce 0/1` переключает между Permissive и Enforcing на лету.' },
        { emoji: '📝', text: '`/etc/selinux/config` задает режим, который будет при следующей загрузке.' },
      ],
    },
    keyPoints: [
      {
        title: 'Команды состояния',
        items: [
          '`getenforce` — текущий режим работы',
          '`sestatus` — детальный статус загруженной политики',
        ],
      },
    ],
    terminal: {
      prompt: '$ getenforce',
      output: 'Enforcing',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ Контексты: файлы и процессы',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — показывает метки (контексты) файлов.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — восстанавливает контекст по умолчанию из БД.' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — постоянное правило.' },
        { emoji: '⚡', text: '`chcon -t type file` — временная смена контекста (слетит при restorecon).' },
        { emoji: '📊', text: 'Типовой контекст: `user:role:type:level`. Поле "type" самое важное.' },
      ],
    },
    keyPoints: [
      {
        title: 'Устранение проблем',
        items: [
          'Если служба сбоит при верных правах доступа, проверьте контекст SELinux.',
          '`mv` сохраняет исходный контекст, `cp` наследует контекст места назначения.',
          'Всегда используйте `semanage fcontext` + `restorecon` для надежных изменений.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 Булевы значения и порты SELinux',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — список всех системных переключателей (booleans).' },
        { emoji: '🔄', text: '`setsebool -P httpd_enable_homedirs on` — смена булева значения навсегда (-P).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — список портов, разрешенных службе.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8088` — добавить доп. порт службе.' },
        { emoji: '🔍', text: 'Ошибки видны в `/var/log/audit/audit.log` как события "AVC".' },
      ],
    },
    keyPoints: [
      {
        title: 'Booleans vs Ports',
        items: [
          'Booleans — включают штатные функции (напр. разрешить Apache читать домашние папки).',
          'Ports — разрешают сетевые соединения на конкретных портах.',
        ],
      },
      {
        title: 'Инструменты аудита',
        items: [
          '`sealert -a /var/log/audit/audit.log` — анализ логов с человеческими советами.',
          '`ausearch -m AVC` — точный поиск отказов SELinux.',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Контейнеры с Podman ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Основы Podman',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — скачать официальный Red Hat Universal Base Image.' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — запустить интерактивный контейнер.' },
        { emoji: '🔍', text: '`podman ps` — список активных контейнеров. `-a` покажет и остановленные.' },
        { emoji: '⚡', text: '`podman exec my_con ls /` — выполнить команду внутри запущенного контейнера.' },
        { emoji: '🗑️', text: '`podman rm my_con` — удалить контейнер. `podman rmi ubi9` — удалить образ.' },
      ],
    },
    keyPoints: [
      {
        title: 'Управление жизненным циклом',
        items: [
          '`run` — создать и запустить (it=интерактивно, d=фоновый режим, --name=имя)',
          '`stop` / `start` — остановить / возобновить',
          '`logs` — посмотреть логи внутри',
          '`inspect` — детали сети и монтирования',
        ],
      },
      {
        title: 'Отличие от Docker',
        items: [
          'Daemonless — нет единого root-демона, управляющего всем.',
          'Rootless — можно запускать безопасные контейнеры от имени обычного пользователя.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman ps',
      output: 'CONTAINER ID  IMAGE                           COMMAND     CREATED      STATUS      PORTS       NAMES\n9abc12345678  registry.access.../ubi9:latest  /bin/bash   2 hours ago  Up 2 hours              my_ubi',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Реестры и образы',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — поиск образов в реестрах (docker.io, quay.io).' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — авторизация в закрытом реестре.' },
        { emoji: '🏷️', text: '`podman tag app:v1 repo.com/app:v1` — переименовать образ для загрузки.' },
        { emoji: '📤', text: '`podman push repo.com/app:v1` — отправить образ на сервер.' },
        { emoji: '📄', text: 'Конфиг: `/etc/containers/registries.conf` задает порядок поиска реестров.' },
      ],
    },
    keyPoints: [
      {
        title: 'Управление образами',
        items: [
          '`podman images` — список скачанных',
          '`podman history` — просмотр слоев сборки',
          '`podman image prune` — удаление неиспользуемых образов',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -2',
      output: 'NAME                      DESCRIPTION                STARS   OFFICIAL\ndocker.io/library/nginx   Official build of Nginx.   18000   [OK]',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 Файл Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — задает базовый образ.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd` — выполнение команд при сборке.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — добавление файлов в контейнер.' },
        { emoji: '🚪', text: '`EXPOSE 80` — уведомляет о порте прослушивания. `CMD` — команда запуска.' },
        { emoji: '🔨', text: '`podman build -t my_web:v1 .` — компиляция файла в новый образ.' },
      ],
    },
    keyPoints: [
      {
        title: 'Основные инструкции',
        items: [
          '`ENV` — задать переменные окружения',
          '`WORKDIR` — задать рабочую директорию',
          '`ENTRYPOINT` — главная команда (сложно переопределить)',
          '`USER` — переключение на не-root пользователя для безопасности',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd\nCOPY . /var/www/html/\nCMD ["httpd", "-DFOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Постоянные данные и сеть',
      panels: [
        { emoji: '📂', text: '`-v /host:/container:Z` — проброс папки. Внимание на :Z для SELinux!' },
        { emoji: '🔌', text: '`-p 8080:80` — маппинг порта 8080 хоста на 80 контейнера.' },
        { emoji: '📦', text: '`podman volume create data` — создание тома под управлением podman.' },
        { emoji: '🌐', text: '`podman network create my_net` — связь между контейнерами по именам.' },
        { emoji: '⚙️', text: '`podman generate systemd --name mycon --files` — сервис для автозагрузки.' },
      ],
    },
    keyPoints: [
      {
        title: 'Постоянные данные и SELinux',
        items: [
          'Без флага `:z` (общий) или `:Z` (приватный) SELinux заблокирует запись контейнера в том.',
          'Это причина провала №1 на экзамене RHCSA.',
        ],
      },
      {
        title: 'Интеграция с systemd (rootless)',
        items: [
          'Размещайте `.service` файлы в `~/.config/systemd/user/`.',
          'Используйте `systemctl --user enable --now container-xxx`.',
          'Важно: `loginctl enable-linger`, чтобы контейнер жил после выхода из системы.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d -p 8080:80 -v /web:/var/www/html:Z my_web',
      output: '7d7c6b5a4e3d2c1b...',
    },
  },

};
