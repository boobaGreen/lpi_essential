// LPIC-1 102 Quiz Pool — Russian — Topic 108 (Основные системные службы)

export const lpic1_102_topic4Quizzes_ru = [
  // ─── 108.1 Поддержание системного времени (5 вопросов) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Какая команда позволяет синхронизировать аппаратные часы (RTC) с системным временем (программным)?",
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: "--systohc копирует значение системного времени в аппаратные часы (Hardware Clock)."
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Какой стандартный протокол используется для синхронизации системного времени через сеть?",
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: "Network Time Protocol (NTP) используется для поддержания точности системных часов через серверы времени.",
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Какая современная утилита systemd используется для запроса и изменения настроек системных часов?",
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: "`timedatectl` управляет настройками времени, даты и часового пояса в дистрибутивах на базе systemd.",
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Какая программа является распространенной заменой классического ntpd, разработанной для более быстрой и точной синхронизации времени на системах с прерывистым соединением?",
    options: ['chrony', 'timesync', 'sync-ntp', 'timed'],
    correct: 0,
    explanation: "Chrony — это альтернативная реализация NTP, которая особенно эффективна для систем, которые не всегда находятся в сети.",
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "На какой стандарт времени обычно настраиваются аппаратные часы (RTC) на серверах Linux?",
    options: ['Местное время', 'PST', 'UTC', 'GMT+1'],
    correct: 2,
    explanation: "Системы Linux обычно ожидают, что аппаратные часы работают по всемирному координированному времени (UTC).",
  },

  // ─── 108.2 Ведение системных журналов (Logging) (5 вопросов) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Какая утилита отвечает за автоматическую ротацию файлов журналов (логов), чтобы они не переполняли диск?",
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: "logrotate выполняет ротацию, сжатие и управляет сроком хранения текстовых журналов."
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Какая команда journalctl позволяет просматривать сообщения журналов в реальном времени по мере их поступления?",
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: "-f (follow) работает аналогично 'tail -f' для бинарного журнала.",
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Как называется демон systemd, который собирает сообщения журналов в бинарном формате?",
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: "systemd-journald — это демон, управляющий бинарным журналом (journal).",
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Где находится основной файл конфигурации демона rsyslog?",
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: "/etc/rsyslog.conf определяет, как фильтруются логи и где они хранятся.",
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Какая команда позволяет пользователю вручную отправить сообщение в системный журнал из скрипта?",
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: "Команда `logger` предоставляет shell-интерфейс к модулю ведения системных журналов syslog(3).",
  },

  // ─── 108.3 Основы почтового агента (MTA) (5 вопросов) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "В каком конфигурационном файле можно определить псевдонимы (aliases) для локальных адресов электронной почты в системе?",
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: "/etc/aliases определяет перенаправления для локальных почтовых сообщений."
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Что из перечисленного НЕ является почтовым агентом (MTA)?",
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: "Apache — это веб-сервер, а не агент передачи почты.",
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Какую команду необходимо выполнить после редактирования /etc/aliases, чтобы изменения вступили в силу?",
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: "`newaliases` перестраивает базу данных, используемую MTA для поиска.",
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Какая команда позволяет администратору просмотреть текущую очередь исходящих почтовых сообщений?",
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: "`mailq` (или `mail -bp`) перечисляет все сообщения, находящиеся в данный момент в почтовой очереди.",
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "В Postfix, какой основной файл конфигурации используется для установки глобальных параметров, таких как `myhostname`?",
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: "main.cf — основной конфигурационный файл для настроек Postfix.",
  },

  // ─── 108.4 Управление принтерами и печатью (5 вопросов) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "На каком порту по умолчанию отвечает веб-интерфейс администрирования CUPS?",
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: "CUPS использует порт 631 для протокола IPP и веб-интерфейса."
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Какая команда используется для удаления конкретного задания печати из очереди?",
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: "lprm (line printer remove) удаляет задания из очереди CUPS."
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Какая команда показывает статус очередей печати в системе?",
    options: ['lpstat', 'lpq', 'lpc status', 'Все вышеперечисленное'],
    correct: 3,
    explanation: "`lpstat`, `lpq` и `lpc status` — все они являются допустимыми командами для проверки статуса принтера в современных средах CUPS.",
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Какой инструмент является основной командой строчной печати (line printer), используемой для отправки задания на принтер?",
    options: ['lp', 'lpr', 'И lp, и lpr допустимы', 'sendprint'],
    correct: 2,
    explanation: "В CUPS официально поддерживаются как команда System V `lp`, так и команда BSD `lpr`.",
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Как называется основной файл конфигурации демона CUPS?",
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: "`cupsd.conf` — основной файл конфигурации планировщика CUPS.",
  },
];
