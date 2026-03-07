// LPIC-1 102 Quiz Pool — Russian — Topic 107 (Административные задачи)

export const lpic1_102_topic3Quizzes_ru = [
  // ─── 107.1 Управление учетными записями пользователей и групп и связанными системными файлами (8 вопросов) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "В каком файле в большинстве современных систем Linux хранятся зашифрованные пароли пользователей и данные об истечении срока действия учетной записи?",
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: "Файл /etc/shadow доступен для чтения только root и содержит хеши паролей."
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Какая команда используется для изменения параметров истечения срока действия пароля?",
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: "chage (change age) — это инструмент для управления политиками истечения срока действия паролей."
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Что представляет собой третье поле в файле /etc/passwd?",
    options: [
      'Имя пользователя',
      'Идентификатор группы (GID)',
      'Идентификатор пользователя (UID)',
      'Домашний каталог'
    ],
    correct: 2,
    explanation: "Формат: Пользователь:Пароль:UID:GID:Комментарий:Home:Shell."
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Какая команда отображает идентификатор пользователя (UID) и идентификаторы групп (GID) текущего пользователя?",
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: "Команда `id` предоставляет полную информацию об идентичности пользователя."
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Какой файл содержит список групп и их участников?",
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: "/etc/group определяет доступные группы в системе.",
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Какая команда используется для добавления пользователя в дополнительную группу без удаления его из существующих групп?",
    options: ['usermod -g group user', 'usermod -aG group user', 'useradd -G group user', 'groupmod -A user group'],
    correct: 1,
    explanation: "`usermod -aG` добавляет пользователя в указанную группу(ы), не влияя на текущее членство в группах.",
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "К какому файлу обращается команда `useradd`, чтобы определить базовый домашний каталог по умолчанию и каталог скелета (skeleton)?",
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', 'И /etc/login.defs, и /etc/default/useradd'],
    correct: 3,
    explanation: "Оба файла предоставляют значения по умолчанию для процесса создания учетной записи.",
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Какая команда удаляет учетную запись пользователя и, опционально, его домашний каталог?",
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: "`userdel -r` удаляет пользователя вместе с файлами в его домашнем каталоге.",
  },

  // ─── 107.2 Автоматизация задач системного администрирования (6 вопросов) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Что в файле crontab представляет собой первое поле (крайнее слева)?",
    options: [
      'Час',
      'Месяц',
      'Минута',
      'День недели'
    ],
    correct: 2,
    explanation: "Расписание cron начинается с минут (0-59)."
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Какая команда отображает очередь заданий, запланированных с помощью команды 'at'?",
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: "atq означает 'at queue' (очередь at)."
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Какой каталог используется для системных заданий crontab, выполняемых каждый час?",
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: "/etc/cron.hourly/ — это место, где система ищет скрипты для ежечасного выполнения.",
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Какой инструмент позволяет выполнять повторяющиеся задания в заданное время, но также обрабатывает случаи, когда система была выключена в запланированное время?",
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: "`anacron` предназначен для систем, которые не работают 24 часа в сутки.",
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Как безопасно отредактировать свой личный файл crontab?",
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/user'],
    correct: 1,
    explanation: "`crontab -e` открывает пользовательский crontab в редакторе по умолчанию и проверяет синтаксис при сохранении.",
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Какой файл указывает пользователей, которым явно запрещено использовать команду `at`?",
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: "/etc/at.deny перечисляет пользователей, которые не могут планировать задания с помощью `at`.",
  },

  // ─── 107.3 Локализация и интернационализация (6 вопросов) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Какая переменная окружения задает глобальный язык по умолчанию и кодировку для системы?",
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: "LANG — основная переменная для настроек локализации (locales)."
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Как обычно настраивается локальный часовой пояс в системе Linux?",
    options: [
      'Путем редактирования /etc/timezone.conf',
      'Путем создания ссылки /usr/share/zoneinfo/ на /etc/localtime',
      'Путем установки переменной TZ в /etc/profile',
      'С помощью команды "clockset"'
    ],
    correct: 1,
    explanation: "Символическая ссылка /etc/localtime на файл в zoneinfo является стандартным методом.",
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Какая переменная, если она установлена, переопределяет все остальные переменные окружения LC_*?",
    options: ['LC_FORCE', 'LC_ALL', 'LANG', 'LC_OVERRIDE'],
    correct: 1,
    explanation: "`LC_ALL` имеет наивысший приоритет и заменяет индивидуальные категории, а также переменную LANG.",
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Какая команда используется для конвертации кодировки файла, например из ISO-8859-1 в UTF-8?",
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: "`iconv` (Internationalization Conversion) — стандартная утилита для преобразования кодировок файлов.",
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Какая команда отображает текущую системную дату, время и часовой пояс?",
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: "`date` показывает системное время, а также может его настраивать.",
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Что призван обеспечить Unicode (и его кодировка UTF-8)?",
    options: [
      'Способ сжатия текстовых файлов',
      'Универсальный набор символов для всех языков',
      'Стандарт шифрования для веб-трафика',
      'Более высокую скорость обработки запросов к базе данных'
    ],
    correct: 1,
    explanation: "Unicode присваивает уникальный номер каждому символу, независимо от платформы или языка.",
  },
];
