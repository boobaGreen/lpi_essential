export const dragDropData = [
  {
    "title": "Основные команды",
    "pairs": [
      {
        "left": "ls",
        "right": "Список файлов"
      },
      {
        "left": "cd",
        "right": "Изменить каталог"
      },
      {
        "left": "pwd",
        "right": "Текущий каталог"
      },
      {
        "left": "cp",
        "right": "Копировать файлы"
      },
      {
        "left": "rm",
        "right": "Удалить файлы"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux-каталоги",
    "pairs": [
      {
        "left": "/etc",
        "right": "Конфигурация системы"
      },
      {
        "left": "/home",
        "right": "Домашняя страница пользователей"
      },
      {
        "left": "/var",
        "right": "Переменные данные (журнал)"
      },
      {
        "left": "/tmp",
        "right": "Временные файлы"
      },
      {
        "left": "/boot",
        "right": "Ядро и загрузчик"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Дистрибутивы Linux",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "На основе Debian"
      },
      {
        "left": "Fedora",
        "right": "База для RHEL"
      },
      {
        "left": "Arch",
        "right": "Подвижный выпуск"
      },
      {
        "left": "CentOS",
        "right": "Получено из RHEL"
      },
      {
        "left": "openSUSE",
        "right": "Используйте молнию"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Приложения с открытым исходным кодом",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "Офисный пакет"
      },
      {
        "left": "Firefox",
        "right": "Веб-браузеры"
      },
      {
        "left": "GIMP",
        "right": "Редактор изображений"
      },
      {
        "left": "Blender",
        "right": "3D моделирование"
      },
      {
        "left": "Audacity",
        "right": "Аудио редактор"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Лицензии на программное обеспечение",
    "pairs": [
      {
        "left": "GPL",
        "right": "Сильное авторское лево"
      },
      {
        "left": "MIT",
        "right": "Разрешительный, очень короткий"
      },
      {
        "left": "Apache 2.0",
        "right": "Разрешительное + патенты"
      },
      {
        "left": "LGPL",
        "right": "Связь с владельцем"
      },
      {
        "left": "AGPL",
        "right": "Авторское лево для SaaS"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Менеджеры пакетов",
    "pairs": [
      {
        "left": "apt",
        "right": "Дебиан/Убунту"
      },
      {
        "left": "dnf",
        "right": "Федора/RHEL"
      },
      {
        "left": "pacman",
        "right": "АрчЛинукс"
      },
      {
        "left": "zypper",
        "right": "openSUSE"
      },
      {
        "left": "snap",
        "right": "Универсальные пакеты (канонические)"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Разрешения для файлов (числовые)",
    "pairs": [
      {
        "left": "777",
        "right": "Чтение, письмо, исполнение для всех"
      },
      {
        "left": "755",
        "right": "Владелец делает все, другие читают/выполняют"
      },
      {
        "left": "644",
        "right": "Владелец читает/пишет, другие читают"
      },
      {
        "left": "600",
        "right": "Только владелец читает и пишет"
      },
      {
        "left": "400",
        "right": "Только владелец может читать"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Баш-символы",
    "pairs": [
      {
        "left": ">",
        "right": "Перенаправить вывод (перезаписать)"
      },
      {
        "left": ">>",
        "right": "Перенаправление вывода (добавление)"
      },
      {
        "left": "|",
        "right": "Труба (команды подключения)"
      },
      {
        "left": "&",
        "right": "Работает в фоновом режиме"
      },
      {
        "left": "$$",
        "right": "PID текущей оболочки"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "Системные службы",
    "pairs": [
      {
        "left": "systemd",
        "right": "Современная система инициализации"
      },
      {
        "left": "sshd",
        "right": "SSH-сервер"
      },
      {
        "left": "cron",
        "right": "Демоническое планирование"
      },
      {
        "left": "cups",
        "right": "Сервер печати"
      },
      {
        "left": "rsyslog",
        "right": "Управление системным журналом"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "Чтобы создать каталог: _____ имя_каталога.",
    "answer": "mkdir",
    "hint": "Создать каталог",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы удалить файл: _____ имя файла",
    "answer": "rm",
    "hint": "Удалять",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы скопировать файл: _____ источник, место назначения.",
    "answer": "cp",
    "hint": "Копировать",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы переместить файл: _____ источник, место назначения.",
    "answer": "mv",
    "hint": "Двигаться",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы увидеть текущий каталог: _____",
    "answer": "pwd",
    "hint": "Распечатать рабочий каталог",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы создать пустой файл: _____ имя файла",
    "answer": "touch",
    "hint": "Нажмите/создайте",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы показать содержимое: _____ имя файла",
    "answer": "cat",
    "hint": "Объединить",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы прочитать руководство: _____ ls",
    "answer": "man",
    "hint": "Руководство",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы напечатать текст: _____ «Hello World»",
    "answer": "echo",
    "hint": "Эко/принт",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы просмотреть файлы с подробностями: _____ -la",
    "answer": "ls",
    "hint": "Список",
    "difficulty": 1
  },
  {
    "prompt": "Чтобы увидеть процессы: _____ aux",
    "answer": "ps",
    "hint": "Статус процесса",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы изменить разрешения: _____ 755 script.sh",
    "answer": "chmod",
    "hint": "Изменить режим",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы изменить владельца: _____ пользователь:групповой файл.",
    "answer": "chown",
    "hint": "Изменить владельца",
    "difficulty": 2
  },
  {
    "prompt": "Для поиска текста: _____ «шаблон» file.txt",
    "answer": "grep",
    "hint": "Глобальная печать регулярных выражений",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы извлечь архив tar.gz: tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "извлечь файл gZip",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы добавить пользователя: _____ -m newuser",
    "answer": "useradd",
    "hint": "Добавить пользователя",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы увидеть место на диске: _____ -h",
    "answer": "df",
    "hint": "Диск бесплатно",
    "difficulty": 2
  },
  {
    "prompt": "Для поиска файлов в файловой системе: _____/-имя \"*.log\"",
    "answer": "find",
    "hint": "Поиск в файловой системе",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы показать первые строки: _____ -n 5 file.txt",
    "answer": "head",
    "hint": "Начало/старт",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы показать последние строки: _____ -n 5 file.txt",
    "answer": "tail",
    "hint": "Хвост/конец",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы смонтировать файловую систему: _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "Устанавливать",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы проверить подключение: _____ google.com.",
    "answer": "ping",
    "hint": "Отправить ICMP-пакет",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы загрузить файл по URL-адресу: _____ http://example.com/file.",
    "answer": "wget",
    "hint": "WebGet",
    "difficulty": 2
  },
  {
    "prompt": "Чтобы завершить процесс: _____ -9 PID",
    "answer": "kill",
    "hint": "Завершить процесс",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы следить за журналом в реальном времени: хвост _____ /var/log/syslog",
    "answer": "-f",
    "hint": "Следовать",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы создать символическую ссылку: ln _____ целевая ссылка.",
    "answer": "-s",
    "hint": "Символический",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы отредактировать встроенный текст: _____ -i файл \"s/old/new/g\"",
    "answer": "sed",
    "hint": "Редактор потока",
    "difficulty": 3
  },
  {
    "prompt": "Для подсчета строк/слов/байтов: _____ -l file.txt",
    "answer": "wc",
    "hint": "Количество слов",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы отсортировать строки: _____ -rn data.txt",
    "answer": "sort",
    "hint": "Заказ",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы вырезать столбцы: _____ -d: -f1 /etc/passwd",
    "answer": "cut",
    "hint": "Вырезать/извлечь",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы синхронизировать файлы: _____ -avz src/dest/",
    "answer": "rsync",
    "hint": "Удаленная синхронизация",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы извлечь столбцы с шаблоном: _____ файл '{print $1}'",
    "answer": "awk",
    "hint": "Язык обработки",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы показать открытые файлы: _____ -i :80",
    "answer": "lsof",
    "hint": "Получение списка открытых файлов",
    "difficulty": 3
  },
  {
    "prompt": "Для управления службами systemd: _____ перезапустите nginx.",
    "answer": "systemctl",
    "hint": "Управление системой",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы отредактировать crontab: _____ -e",
    "answer": "crontab",
    "hint": "Таблица Крон",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы увидеть сетевые подключения: _____ -tuln",
    "answer": "ss",
    "hint": "Статистика сокетов",
    "difficulty": 3
  },
  {
    "prompt": "Чтобы перевести символы: echo \"hello\" | _____ а-я А-Я",
    "answer": "tr",
    "hint": "Переводить",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "Список файлов и каталогов"
  },
  {
    "command": "cd",
    "description": "Изменить каталог"
  },
  {
    "command": "pwd",
    "description": "Показать текущий каталог"
  },
  {
    "command": "cp",
    "description": "Копировать файлы"
  },
  {
    "command": "mv",
    "description": "Переместить или переименовать файлы"
  },
  {
    "command": "rm",
    "description": "Удалить файлы"
  },
  {
    "command": "cat",
    "description": "Просмотр содержимого файла"
  },
  {
    "command": "mkdir",
    "description": "Создать каталог"
  },
  {
    "command": "touch",
    "description": "Создать пустой файл"
  },
  {
    "command": "echo",
    "description": "Вывести текст на стандартный вывод"
  },
  {
    "command": "man",
    "description": "Показать руководство"
  },
  {
    "command": "sudo",
    "description": "Запуск от имени пользователя root"
  },
  {
    "command": "whoami",
    "description": "Показать текущего пользователя"
  },
  {
    "command": "exit",
    "description": "Закрывает оболочку"
  },
  {
    "command": "chmod",
    "description": "Изменить права доступа к файлу"
  },
  {
    "command": "grep",
    "description": "Ищите закономерности в тексте"
  },
  {
    "command": "find",
    "description": "Поиск файлов в файловой системе"
  },
  {
    "command": "tar",
    "description": "Архивируйте и сжимайте файлы"
  },
  {
    "command": "chown",
    "description": "Сменить владельца файла"
  },
  {
    "command": "df",
    "description": "Показать свободное место на диске"
  },
  {
    "command": "du",
    "description": "Размер файла и каталога"
  },
  {
    "command": "top",
    "description": "Мониторинг процессов в реальном времени"
  },
  {
    "command": "ps",
    "description": "Список активных процессов"
  },
  {
    "command": "kill",
    "description": "Завершить процесс"
  },
  {
    "command": "ssh",
    "description": "Безопасное удаленное соединение"
  },
  {
    "command": "scp",
    "description": "Копирование файлов через SSH"
  },
  {
    "command": "ln",
    "description": "Создание ссылок на файлы"
  },
  {
    "command": "head",
    "description": "Первые строки файла"
  },
  {
    "command": "tail",
    "description": "Последние строки файла"
  },
  {
    "command": "wc",
    "description": "Считать строки, слова, байты"
  },
  {
    "command": "sort",
    "description": "Сортировка строк текста"
  },
  {
    "command": "mount",
    "description": "Смонтировать файловую систему"
  },
  {
    "command": "umount",
    "description": "Размонтировать файловую систему"
  },
  {
    "command": "awk",
    "description": "Обработка текста по столбцам"
  },
  {
    "command": "sed",
    "description": "Редактор текстового потока"
  },
  {
    "command": "xargs",
    "description": "Создает аргументы из стандартного ввода"
  },
  {
    "command": "crontab",
    "description": "Планируйте периодические задачи"
  },
  {
    "command": "iptables",
    "description": "Настроить брандмауэр Linux"
  },
  {
    "command": "rsync",
    "description": "Синхронизировать удаленные файлы"
  },
  {
    "command": "cut",
    "description": "Извлечь столбцы из текста"
  },
  {
    "command": "tr",
    "description": "Перевести/удалить символы"
  },
  {
    "command": "tee",
    "description": "Вывод в файл и стандартный вывод"
  },
  {
    "command": "useradd",
    "description": "Добавляет пользователя"
  },
  {
    "command": "passwd",
    "description": "Изменить пароль пользователя"
  },
  {
    "command": "groupadd",
    "description": "Создать новую группу"
  },
  {
    "command": "netstat",
    "description": "Статистика сетевых подключений"
  },
  {
    "command": "ifconfig",
    "description": "Настроить сетевой интерфейс"
  },
  {
    "command": "ping",
    "description": "Проверка сетевого подключения"
  },
  {
    "command": "wget",
    "description": "Загрузка файлов с URL"
  },
  {
    "command": "curl",
    "description": "Перенос данных с URL"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "Показывает содержимое текущего каталога",
    "answer": "ls",
    "hints": [
      "Команда из двух букв",
      "Начинается на \"л\""
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Сменить каталог на дом пользователя",
    "answer": "cd ~",
    "hints": [
      "Используйте компакт-диск...",
      "Символ ~ обозначает дом."
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Показать текущий каталог (абсолютный путь)",
    "answer": "pwd",
    "hints": [
      "Печать работает...",
      "3 буквы"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Создайте каталог под названием «проект»",
    "answer": "mkdir progetto",
    "hints": [
      "Создать каталог...",
      "мкдир + имя"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Показывает содержимое файла /etc/hostname.",
    "answer": "cat /etc/hostname",
    "hints": [
      "с CATenate...",
      "ч + путь"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Показывает текущий идентификатор пользователя",
    "answer": "id",
    "hints": [
      "Очень короткая команда",
      "2 буквы"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Создайте пустой файл с именем test.txt.",
    "answer": "touch test.txt",
    "hints": [
      "Это не кот...",
      "коснуться + имя"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Показывает первые 10 строк файла log.txt.",
    "answer": "head log.txt",
    "hints": [
      "Противоположность «хвоста»",
      "голова + файл"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Показать руководство по команде ls",
    "answer": "man ls",
    "hints": [
      "Руководство...",
      "человек + команда"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Удалите устаревший файл.txt.",
    "answer": "rm obsoleto.txt",
    "hints": [
      "Удалять...",
      "РМ + имя"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Скопируйте файл config.txt в backup.txt.",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "Копировать...",
      "cp источник назначения"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Показать историю команд",
    "answer": "history",
    "hints": [
      "ИСТОРИЯ команд",
      "7 букв"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Найдите слово «ошибка» в файле системного журнала.",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "Глобальное регулярное выражение...",
      "файл шаблона grep"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Сделайте скрипт hello.sh исполняемым.",
    "answer": "chmod +x hello.sh",
    "hints": [
      "Изменить режим...",
      "chmod + что-то"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Создайте архив tar.gz в папке docs/.",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "смола -с...",
      "c=создать z=gzip f=файл"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Показывает использованное дисковое пространство в читаемом формате.",
    "answer": "df -h",
    "hints": [
      "Диск свободен...",
      "df + флаги"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Подсчитайте строки в файле /etc/passwd.",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "Количество слов...",
      "туалет -л"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Показывает запущенные процессы в режиме реального времени",
    "answer": "top",
    "hints": [
      "3 буквы",
      "Системный монитор"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Подключитесь через SSH к хосту 192.168.1.10.",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "Безопасная оболочка...",
      "ssh + адрес"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Измените владельца файла на пользователя «admin».",
    "answer": "chown admin file",
    "hints": [
      "Сменить владельца...",
      "изменить файл пользователя"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Показывает размер каталога /var/log.",
    "answer": "du -sh /var/log",
    "hints": [
      "Использование диска...",
      "ду -ш"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Следите за файлом /var/log/syslog в режиме реального времени.",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "хвост с флагом...",
      "е = следовать"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Создайте символическую ссылку /etc/hosts в /tmp/.",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "с флагом...",
      "-s = символический"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Найдите команду ifconfig в PATH.",
    "answer": "which ifconfig",
    "hints": [
      "Какой ifconfig...",
      "какая + команда"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Найдите все файлы .log в /var размером более 10 МБ.",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "найти + -имя + -размер",
      "М = мегабайты"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Отсортируйте файл data.txt в обратном порядке номеров.",
    "answer": "sort -rn data.txt",
    "hints": [
      "сортировка -r = обратная, -n = числовая",
      "сортировка + флаг"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Показывать только первое поле /etc/passwd (имя пользователя)",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "вырезать с разделителем:...",
      "вырезать -d: -f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Запланируйте ежедневное задание cron на 3:00 утра.",
    "answer": "0 3 * * *",
    "hints": [
      "минута час день месяц неделя_день",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Замените «foo» на «bar» в файле с помощью sed.",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i \"с/старый/новый/г\"",
      "Редактор потока"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Показывает активные сетевые подключения",
    "answer": "ss -tuln",
    "hints": [
      "Статистика сокетов...",
      "сс + флаг"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Извлеките второй столбец, разделенный пробелами, с помощью awk",
    "answer": "awk '{print $2}'",
    "hints": [
      "ок печать...",
      "$2 = второй столбец"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Показывает таблицу сетевой маршрутизации",
    "answer": "ip route",
    "hints": [
      "айп...",
      "таблица маршрутизации/маршрутизации"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Показать файлы, открытые процессом с PID 1234",
    "answer": "lsof -p 1234",
    "hints": [
      "Список открытых файлов...",
      "lsof + флаги"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Перезапустите службу nginx с помощью systemd.",
    "answer": "systemctl restart nginx",
    "hints": [
      "системный...",
      "перезапуск + имя службы"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Добавьте пользователя «Марио» в группу «Судо».",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "пользовательский мод...",
      "-aG = добавить группу"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "Команда «ls» отображает файлы в текущем каталоге.",
    "answer": true,
    "explanation": "Правильный! ls (список) перечисляет файлы и каталоги.",
    "difficulty": 1
  },
  {
    "text": "/etc содержит файлы конфигурации системы.",
    "answer": true,
    "explanation": "Правильный! /etc — стандартный каталог для конфигураций.",
    "difficulty": 1
  },
  {
    "text": "Команда chmod меняет владельца файла.",
    "answer": false,
    "explanation": "chmod меняет разрешения. chown меняет владельца.",
    "difficulty": 1
  },
  {
    "text": "Android использует ядро ​​Linux.",
    "answer": true,
    "explanation": "Правильный! Android использует ядро ​​Linux, модифицированное Google.",
    "difficulty": 1
  },
  {
    "text": "root всегда имеет UID 0.",
    "answer": true,
    "explanation": "Правильный! Пользователь root всегда имеет UID 0 во всех системах Unix/Linux.",
    "difficulty": 1
  },
  {
    "text": "Канал (|) записывает выходные данные в файл.",
    "answer": false,
    "explanation": "Труба передает выходные данные следующему. > записывает в файл.",
    "difficulty": 1
  },
  {
    "text": "Ubuntu основана на Debian.",
    "answer": true,
    "explanation": "Правильный! Ubuntu происходит от Debian.",
    "difficulty": 1
  },
  {
    "text": "Символ ~ указывает каталог /tmp.",
    "answer": false,
    "explanation": "~ указывает домашний каталог пользователя, а не /tmp.",
    "difficulty": 1
  },
  {
    "text": "Bash — оболочка по умолчанию в большинстве дистрибутивов Linux.",
    "answer": true,
    "explanation": "Правильный! Bash (Bourne Again Shell) — оболочка по умолчанию.",
    "difficulty": 1
  },
  {
    "text": "Символ # в сценарии bash обозначает комментарий.",
    "answer": true,
    "explanation": "Правильный! Строки, начинающиеся с #, являются комментариями в bash.",
    "difficulty": 1
  },
  {
    "text": "Клавиша Tab автоматически завершает команды и имена файлов.",
    "answer": true,
    "explanation": "Правильный! Автозаполнение вкладок — это основная функция оболочки.",
    "difficulty": 1
  },
  {
    "text": "Каталог /home содержит домашний каталог пользователя root.",
    "answer": false,
    "explanation": "Корневой дом — /root. /home содержит дома обычных пользователей.",
    "difficulty": 1
  },
  {
    "text": "Лицензия GPL позволяет сделать производный код собственностью.",
    "answer": false,
    "explanation": "GPL (авторское лево) заставляет производные продукты сохранять ту же лицензию.",
    "difficulty": 2
  },
  {
    "text": "Лицензия MIT является разрешительной лицензией.",
    "answer": true,
    "explanation": "MIT очень либерален: он допускает практически любое использование.",
    "difficulty": 2
  },
  {
    "text": "SSH по умолчанию использует порт 443.",
    "answer": false,
    "explanation": "SSH использует порт 22. Порт 443 предназначен для HTTPS.",
    "difficulty": 2
  },
  {
    "text": "Shebang #!/bin/bash должен находиться в первой строке скрипта.",
    "answer": true,
    "explanation": "Правильный! Шебанг сообщает системе, какой интерпретатор использовать.",
    "difficulty": 2
  },
  {
    "text": "RAID 1 создает зеркальную копию данных.",
    "answer": true,
    "explanation": "Правильный! RAID 1 дублирует данные на двух дисках.",
    "difficulty": 2
  },
  {
    "text": "DNS преобразует доменные имена в IP-адреса.",
    "answer": true,
    "explanation": "Правильный! DNS преобразует имена в IP-адреса.",
    "difficulty": 2
  },
  {
    "text": "Команда «найти» ищет текст в файлах.",
    "answer": false,
    "explanation": "find ищет файлы в файловой системе. grep ищет текст внутри файлов.",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow доступен для чтения всем пользователям.",
    "answer": false,
    "explanation": "/etc/shadow доступен для чтения только пользователю root. Содержит хешированные пароли.",
    "difficulty": 2
  },
  {
    "text": "Команда «экспорт» делает переменную доступной для дочерних процессов.",
    "answer": true,
    "explanation": "Правильный! Export экспортирует переменную как переменную среды.",
    "difficulty": 2
  },
  {
    "text": "Файл /etc/passwd содержит пароли пользователей в открытом виде.",
    "answer": false,
    "explanation": "/etc/passwd больше не содержит настоящих паролей. Они находятся в /etc/shadow как хеши.",
    "difficulty": 2
  },
  {
    "text": "Символ * также соответствует скрытым файлам (начинающимся с точки).",
    "answer": false,
    "explanation": "Глоб * не включает файлы, начинающиеся с точки. Вам нужны такие параметры, как dotglob.",
    "difficulty": 2
  },
  {
    "text": "NFS — это протокол для обмена файлами между системами Unix/Linux.",
    "answer": true,
    "explanation": "Правильный! NFS (сетевая файловая система) разделяет файлы по сети между системами Unix.",
    "difficulty": 2
  },
  {
    "text": "Команда «cat» может объединить несколько файлов.",
    "answer": true,
    "explanation": "Правильный! cat (объединить) объединяет содержимое нескольких файлов: cat file1 file2.",
    "difficulty": 2
  },
  {
    "text": "apt — это менеджер пакетов, используемый Fedora.",
    "answer": false,
    "explanation": "Fedora использует dnf (или yum). apt предназначен для Debian/Ubuntu.",
    "difficulty": 2
  },
  {
    "text": "Linux — это полноценная операционная система.",
    "answer": false,
    "explanation": "Linux — это просто ядро. GNU/Linux — это полноценная операционная система.",
    "difficulty": 3
  },
  {
    "text": "Жесткая ссылка может указывать на каталог.",
    "answer": false,
    "explanation": "Жесткие ссылки не могут указывать на каталоги (во избежание петель).",
    "difficulty": 3
  },
  {
    "text": "Команда tar -czf извлекает архив.",
    "answer": false,
    "explanation": "-czf создает архив gzip. Для извлечения используйте -xzf.",
    "difficulty": 3
  },
  {
    "text": "$1 в сценарии Bash указывает первый аргумент.",
    "answer": true,
    "explanation": "Правильный! $1 = первый аргумент, $2 = второй и т. д.",
    "difficulty": 3
  },
  {
    "text": "Символические ссылки сохраняются после целевого удаления.",
    "answer": false,
    "explanation": "Если вы удалите цель, символическая ссылка станет «сломанной».",
    "difficulty": 3
  },
  {
    "text": "SIGKILL (9) может быть перехвачен процессом.",
    "answer": false,
    "explanation": "SIGKILL не может быть перехвачен. Конец немедленно.",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 — это диапазон частных IP-адресов.",
    "answer": true,
    "explanation": "Правильный! Это один из трех частных диапазонов, определенных в RFC 1918.",
    "difficulty": 3
  },
  {
    "text": "Файловая система ext4 поддерживает журналы.",
    "answer": true,
    "explanation": "Правильный! ext4 — это журналируемая файловая система.",
    "difficulty": 3
  },
  {
    "text": "Команда «nice» меняет приоритет процесса.",
    "answer": true,
    "explanation": "Правильный! nice устанавливает приоритет планирования.",
    "difficulty": 3
  },
  {
    "text": "TCP — это протокол без установления соединения.",
    "answer": false,
    "explanation": "TCP ориентирован на соединение. UDP не поддерживает соединение.",
    "difficulty": 3
  },
  {
    "text": "Команда «crontab -e» изменяет запланированные задания пользователя.",
    "answer": true,
    "explanation": "Правильный! crontab -e открывает редактор заданий cron пользователя.",
    "difficulty": 3
  },
  {
    "text": "Процесс в состоянии зомби использует много ресурсов ЦП.",
    "answer": false,
    "explanation": "Процесс-зомби завершился, но родительский процесс не прочитал статус его завершения. Он не использует никаких ресурсов.",
    "difficulty": 3
  },
  {
    "text": "/dev/null отбрасывает все отправленное на него.",
    "answer": true,
    "explanation": "Правильный! /dev/null — это «черная дыра» Linux: она отбрасывает любые данные.",
    "difficulty": 3
  },
  {
    "text": "Файл /etc/fstab определяет файловые системы, которые автоматически монтируются при загрузке.",
    "answer": true,
    "explanation": "Правильный! fstab (таблица файловой системы) содержит информацию об автомонтировании.",
    "difficulty": 3
  },
  {
    "text": "Команда «df» отображает размер одного файла.",
    "answer": false,
    "explanation": "df показывает дисковое пространство файловой системы. Для размера файла используйте du или ls -l.",
    "difficulty": 3
  },
  {
    "text": "systemd — это система инициализации, используемая в большинстве современных дистрибутивов.",
    "answer": true,
    "explanation": "Правильный! systemd заменил SysVinit в большинстве дистрибутивов.",
    "difficulty": 3
  },
  {
    "text": "Файл ~/.bash_history содержит команды, введенные пользователем.",
    "answer": true,
    "explanation": "Правильный! История команд bash сохраняется в ~/.bash_history.",
    "difficulty": 3
  },
  {
    "text": "Команда «grep -r» рекурсивно ищет каталоги.",
    "answer": true,
    "explanation": "Правильный! grep -r (или -R) ищет шаблоны во всех файлах в каталоге и подкаталогах.",
    "difficulty": 3
  },
  {
    "text": "Бит липкости не позволяет пользователям удалять файлы других людей в общих каталогах.",
    "answer": true,
    "explanation": "Правильный! Бит закрепления (t) в /tmp не позволяет пользователям удалять чужие файлы.",
    "difficulty": 3
  }
];