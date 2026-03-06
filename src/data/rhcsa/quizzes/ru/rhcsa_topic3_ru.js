// RHCSA Quiz — Topic 3: Running System Management (Русский)
// 22 MCQ questions

export const rhcsaTopic3QuizzesRU = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какой systemd target (цель) соответствует старому уровню выполнения runlevel 3 (многопользовательский режим, без графики)?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: 'Цель `multi-user.target` эквивалентна классическому runlevel 3 (режим командной строки / CLI server). Цель `graphical.target` соответствует runlevel 5 (с графическим интерфейсом GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Как установить системный target по умолчанию на постоянной основе (переживающий перезагрузку)?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: 'Команда `systemctl set-default <цель>` изменяет target по умолчанию, перезаписывая символическую ссылку в файле /etc/systemd/system/default.target.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Во время загрузки системы, какой параметр ядра (kernel parameter) вы добавляете в конце строки GRUB (linux), чтобы прервать загрузку и попасть в аварийную командную оболочку (полезно для сброса пароля root на RHCSA)?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: 'Параметр `rd.break` прерывает процесс ранней загрузки (на этапе initramfs) еще до монтирования настоящего корневого раздела /sysroot. Это стандартный и единственный экзаменационный метод RHEL9 для сброса утерянного пароля root.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'После использования rd.break, chroot /sysroot и сброса пароля root (passwd), какую ОБЯЗАТЕЛЬНУЮ команду в RHEL9 с включенным SELinux вы должны выполнить прямо перед окончательной перезагрузкой, чтобы система не сломалась при старте?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'Пустой скрытый файл `touch /.autorelabel` — это сигнал ядру. Он заставляет подсистему SELinux при следующем старте ОС провести полное перемаркирование (relabeling) всех файлов (включая измененный извне /etc/shadow без SE-контекста), чтобы восстановить им правильные метки безопасности.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда переводит РАБОТАЮЩУЮ систему в аварийный rescue target (однопользовательский режим) для обслуживания, БЕЗ совершения жесткой перезагрузки?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'Глагол `isolate` для systemctl немедленно переключает машину в указанный target "на живую", жестко останавливая все службы, которые не требуются для этой конкретной новой цели.',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Как просмотреть текущий целевой уровень (target) системы, установленный по умолчанию?',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: 'Команда `systemctl get-default` читает симлинк default.target и выводит на экран текущую цель загрузки ОС (например, graphical.target).',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какой именно сигнал ОС посылает процессу команда `kill -9 <PID>`?',
    options: [
      'SIGTERM (15) — мягкое (вежливое) завершение (soft termination)',
      'SIGKILL (9) — немедленное и жесткое убийство процесса',
      'SIGHUP (1) — мягкая перезагрузка конфигурации (перечитывание конфигов)',
      'SIGSTOP (19) — временная пауза / заморозка процесса',
    ],
    correct: 1,
    explanation: 'Сигнал SIGKILL (9) заставляет ядро немедленно прибить процесс. Приложение не может перехватить (-9) или проигнорировать этот сигнал для корректного сохранения своих файлов. К нему прибегают только когда процесс намертво завис. По умолчанию kill отправляет SIGTERM (15).',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Каким образом можно изменить приоритет nice (вежливости к процессору) УЖЕ РАБОТАЮЩЕГО процесса с PID 1234, установив ему значение "-5" (высокий приоритет)?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: 'Утилита `renice` меняет (n)ice-value УЖЕ запущенных процессов. Команда `nice` (без префикса) используется ИСКЛЮЧИТЕЛЬНО для запуска НОВЫХ процессов с заданным начальным приоритетом.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какой диапазон и полюс значений параметра nice указывает на НАИВЫСШИЙ приоритет получения процессорного времени (CPU) для процесса?',
    options: [
      '100 (самое высокое значение)',
      '-20 (самое низкое отрицательное значение = наивысший приоритет CPU)',
      '+19 (самое высокое положительное значение)',
      '0 (значение по умолчанию)',
    ],
    correct: 1,
    explanation: 'Интервал nice от -20 (максимальнейший приоритет, доступен только Root-администратору) до +19 (самый "добродушный" и низкоприоритетный фоновый процесс). Отрицательные значения = жадность до CPU.',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда выведет список абсолютно всех фоновых и активных процессов от лица ВСЕХ ПОЛЬЗОВАТЕЛЕЙ в подробном (extended) формате?',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: '`ps aux` — золотая классика BSD стиля. (a) = все юзеры, (u) = формат ориентированный на юзера (с процентами CPU/RAM), (x) = включить процессы-демоны, не привязанные к консольному терминалу (TTY).',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая утилита позволяет послать сигнал завершения (SIGTERM) всем процессам одновременно по их ТЕКСТОВОМУ ИМЕНИ "httpd", не выискивая их PIDs?',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: '`killall <имя_демона>` посылает сигнал стае процессов строго совпадающих по указанному имени. (Утилита `pkill` также подходит, но обычно работает по гибким кускам паттернов/regex).',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Вы приостановили работу скрипта через Ctrl+Z (он получился "Suspended" в фоне с номером "job %2"). Как вытащить номер джобы обратно на передний план (foreground)?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: 'Команда `fg %<номер_задачи>` (foreground) вытаскивает фоновую приостановленную/свернутую задчу обратно под ваш контроль на экран ТТY. `bg %<номер>` заставит замороженный процесс продолжиться беззвучно в фоне.',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая комбинированная команда ОДНОВРЕМЕННО включает автозагрузку сервиса sshd при перезагрузках (enable) и СРАЗУ ЖЕ запускает его (start) в данный момент?',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'Флаг `--now` — это швейцарский нож systemctl. Команда `systemctl enable --now <служба>` элегантно совмещает добавление симлинка в автозапуск с моментальным поднятием демона в память.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'В чем радикальная разница между `systemctl stop` и `systemctl disable`?',
    options: [
      'Они делают одно и то же',
      'stop останавливает службу прямо сейчас в RAM; disable не дает ей завестись в будущем при следующей перезагрузке (снимает с автозапуска)',
      'disable останавливает службу прямо сейчас; stop удаляет ее бинарники из ОС',
      'stop перманентно удаляет службу с жесткого диска',
    ],
    correct: 1,
    explanation: 'stop = убивает процесс в текущей сессии (но если он в enable, то при ребуте он воскреснет). disable = отключает воскрешение на ребуте (но не убивает УЖЕ работающий прям сейчас в RAM процесс демона).',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда ПОЛНОСТЬЮ блокирует любые попытки старта службы (защита от "отстрела ноги" или авто-стартов от зависимостей других демонов)?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: 'Глагол `mask` жестко привязывает файл службы к /dev/null пустышкой. После маскировки даже ручной `systemctl start` или другая левая служба-сосед не смогут запустить этот сервис, пока вы не сделаете `unmask`.',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Как проверить подробный статус "здоровья" службы, ее PID номер, uptime и последние 10 строк её свежих логов?',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: '`systemctl status <имя_службы>` — главный врач сисадмина. Выводит всю подноготную: active(running), enabled/disabled статус, PID группу и свежайший хвост логов из journald.',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Вы отредактировали текстовый .service конфигурационный юнит-файл ручками через редактор (например /etc/systemd/system/zabbix.service). Какую команду ЖИЗНЕННО НЕОБХОДИМО подать в systemd, прежде чем пытаться сделать рестарт этой службы?',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'Команда `systemctl daemon-reload` бьет systemd по шапке, заставляя его заново перечитать ВСЕ отредактированные на жестком диске unit-файлы и загрузить их новую конфигурацию в свою оперативную память.',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выводит сырой поток системных логов на экран в режиме реального времени "live-наблюдения" (как это делает tail -f)?',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'Утилита `journalctl -f` (follow) привязывает курсор к концу бинарного журнала systemd и в реальном времени подгружает и печатает каждую новую строчку логов, падающую в систему.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'У вас миллион записей в логах. Как с помощью journalctl вычленить и отфильтровать логи, принадлежащие ИСКЛЮЧИТЕЛЬНО службе sshd.service?',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: 'Ключ `-u` (unit) — мощнейший фильтр journalctl. `journalctl -u sshd` покажет только те логи и ошибки, источником (unit) которых был сервис SSH.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'В каком конфигурационном файле RHCSA вы должны включить опцию `Storage=persistent`, чтобы журналы логов systemd перестали стираться в RAM после каждой перезагрузки сервера?',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: 'Файл `/etc/systemd/journald.conf` управляет демоном логов. В RHEL9 persistent (сохранение на диск в /var/log/journal) включен по умолчанию, но на старых системах его приходилось форсировать именно там.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какой командой вы вызываете безопасный текстовый редактор для внедрения запланированных задач (cron jobs) для того пользователя, под которым вы сейчас залогинены в bash?',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'Команда `crontab -e` (edit) безопасно открывает персональное расписание текущего юзера во временном файле через vi, проверяет синтаксис при сохранении и инжектит файл в спулер демона.',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая запись cron-расписания будет автоматически выполнять скрипт каждый понедельник в 3:30 утра (глубокой ночью)?',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Синтаксис Cron: [минуты] [часы] [день_месяца] [месяц] [день_недели]. Формат `30 (минуты) 3 (ночи) * (любой день мес) * (любой мес) 1 (Понедельник)` идеально бьет в 03:30 утра каждого понедельника.',
  },
]
