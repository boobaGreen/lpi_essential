// LPIC-1 101 Quiz — Тема 3: Команды GNU и Unix (Русский)

export const lpic1_101_topic3_ru = [
  // ─── 103.1 Работа в командной строке (7 вопросов) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая из следующих команд определяет, является ли данное имя встроенной командой оболочки, псевдонимом или внешней командой?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'Команда `type` показывает, как именно оболочка интерпретирует имя (встроенная команда, псевдоним, файл или функция).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая переменная окружения содержит список каталогов, разделенных двоеточием, в которых оболочка ищет исполняемые команды?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'Переменная $PATH определяет каталоги, в которых оболочка ищет исполняемые файлы.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда выводит краткую информацию об архитектуре системы, версии ядра и имени хоста?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname с флагом -a (all) выводит всю системную информацию, включая ядро и аппаратную часть.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Как определить переменную оболочки с именем `MYVAR` и текстом "Hello", чтобы она была доступна в дочерних процессах?',
    options: [
      'MYVAR="Hello"',
      'set MYVAR="Hello"',
      'export MYVAR="Hello"',
      'env MYVAR="Hello"'
    ],
    correct: 2,
    explanation: 'export создает переменную окружения, которая будет наследоваться всеми дочерними процессами.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'В чем основная разница между одинарными (\') и двойными (") кавычками в Bash?',
    options: [
      'Одинарные кавычки допускают подстановку переменных ($VAR), а двойные — нет',
      'Двойные кавычки допускают подстановку переменных ($VAR), а одинарные предотвращают любую подстановку',
      'Двойные кавычки для чисел, одинарные для строк',
      'Разницы нет'
    ],
    correct: 1,
    explanation: 'Двойные кавычки позволяют выполнять подстановку переменных, тогда как одинарные сохраняют литеральное значение всех символов.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какое сочетание клавиш запускает обратный поиск в истории команд Bash?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R запускает обратный поиск, позволяя найти ранее выполненные команды.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Что делает команда `!55` в Bash?',
    options: [
      'Завершает процесс с PID 55',
      'Выполняет команду под номером 55 из списка истории',
      'Удаляет команду номер 55 из истории',
      'Выполняет команду "55"'
    ],
    correct: 1,
    explanation: 'Символ `!` вызывает подстановку из истории. `!n` относится к строке команды n в списке истории.',
  },

  // ─── 103.2 Обработка текстовых потоков с помощью фильтров (6 вопросов) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда по умолчанию выводит ПОСЛЕДНИЕ 10 строк файла?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail выводит последние строки файла; по умолчанию 10 строк.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда читает файл и выводит его, добавляя номера строк?',
    options: ['nl', 'wc -l', 'cat -n', 'Как nl, так и cat -n'],
    correct: 3,
    explanation: 'Как `nl` (number lines), так и `cat -n` добавляют номера строк к выводу.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какие три стандартных атрибута файла подсчитывает команда `wc`?',
    options: [
      'Строки, символы, байты',
      'Предложения, слова, символы',
      'Строки, слова, байты/символы',
      'Строки, слова, абзацы'
    ],
    correct: 2,
    explanation: 'wc (word count) показывает количество строк, слов и байтов/символов.',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда используется для удаления последовательных дубликатов строк в отсортированном файле?',
    options: ['sort -u', 'uniq', 'Как sort -u, так и uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` удаляет последовательные дубликаты. `sort -u` сортирует и удаляет дубликаты во всем файле.',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Какая команда извлекает первое поле из файла /etc/passwd, предполагая, что поля разделены двоеточием (":")?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` устанавливает разделитель в двоеточие, а `-f1` выбирает первое поле.',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда sed полностью заменяет слово "apple" на "orange" при каждом вхождении в file.txt?',
    options: ['sed "r/apple/orange/" file.txt', 'sed "s/apple/orange/g" file.txt', 'sed "s/apple/orange" file.txt', 'sed "sub/apple/orange/all" file.txt'],
    correct: 1,
    explanation: 'Команда подстановки `s/шаблон/замена/g` заменяет все вхождения в каждой строке.',
  },

  // ─── 103.3 Базовое управление файлами (6 вопросов) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда создает пустой файл с именем "notes.txt" или обновляет его метку времени, если он уже существует?',
    options: ['create notes.txt', 'touch notes.txt', 'echo notes.txt', 'mkfile notes.txt'],
    correct: 1,
    explanation: 'touch изменяет метки времени файлов или создает пустой файл, если он не существует.',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда создает каталог с именем `project` и его родительский каталог `work`, если он не существует?',
    options: ['mkdir work/project', 'mkdir -p work/project', 'mkdir --all work/project', 'mkdir -r work/project'],
    correct: 1,
    explanation: 'mkdir -p (--parents) создает промежуточные каталоги по мере необходимости.',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Вы хотите скопировать весь каталог `/docs` и его содержимое в `/backup`. Какую команду вы воспользуетесь?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'Флаг -r (рекурсивно) указывает `cp` копировать каталоги вместе с их содержимым.',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'В Bash-глоббинге (globbing), чему соответствует подстановочный знак `?`?',
    options: ['Любому количеству символов', 'Ровно одному символу', 'Нулю или одному символу', 'Только цифрам'],
    correct: 1,
    explanation: 'В глоббинге `?` соответствует ровно одному символу.',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда ищет файл в файловой системе в режиме реального времени?',
    options: ['locate file', 'updatedb', 'grep file', 'find / -name file'],
    correct: 3,
    explanation: '`find` обходит реальное дерево файловой системы для поиска файлов.',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Какая команда сжимает каталог `/home/user` в один tar-архив, сжатый с помощью gzip?',
    options: [
      'tar -xzvf backup.tar.gz /home/user',
      'tar -czvf backup.tar.gz /home/user',
      'zip backup.tar.gz /home/user',
      'gzip /home/user > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` создает (-c) архив, сжатый с помощью gzip (-z).',
  },

  // ─── 103.4 Использование потоков, конвейеров и перенаправлений (4 вопроса) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Что делает оператор перенаправления `>>`?',
    options: [
      'Перенаправляет stdout в файл, перезаписывая его',
      'Перенаправляет stdin из файла',
      'Перенаправляет stdout в файл, добавляя в конец',
      'Перенаправляет stderr в файл'
    ],
    correct: 2,
    explanation: '`>>` добавляет стандартный вывод в конец файла, не удаляя существующее содержимое.',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Как перенаправить стандартный вывод ошибок (stderr) в файл с именем `error.log`?',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: 'Дескриптор файла 2 представляет stderr; `2>` перенаправляет его.',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Каков эффект от добавления `2>&1` к команде?',
    options: [
      'Перенаправляет stdout в stderr',
      'Направляет и stdout, и stderr в одно и то же место',
      'Подавляет весь вывод',
      'Выполняет команду 2, а затем команду 1'
    ],
    correct: 1,
    explanation: '`2>&1` перенаправляет stderr туда же, куда в данный момент указывает stdout.',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какая утилита читает данные из стандартного ввода и записывает их КАК в stdout, ТАК и в один или несколько файлов?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` разделяет ввод, направляя его как на вывод, так и в файл.',
  },

  // ─── 103.5 Создание, мониторинг и завершение процессов (5 вопросов) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда предоставляет динамическое представление запущенных в системе процессов в реальном времени?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` отображает интерактивный, обновляемый список системных процессов.',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какой сигнал по умолчанию отправляется командой `kill`, если он не указан явно?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` по умолчанию отправляет SIGTERM (15), запрашивая корректное завершение.',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Если процесс игнорирует обычную команду kill, как можно форсировать его немедленное завершение?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` отправляет сигнал SIGKILL, который процесс не может игнорировать.',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Какое сочетание клавиш приостанавливает активную фоновую задачу в терминале?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z приостанавливает процесс переднего плана, который затем можно возобновить или перевести в фоновый режим.',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Как запустить команду так, чтобы она продолжала выполняться даже после закрытия терминала?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` делает команду невосприимчивой к сигналу разрыва соединения (SIGHUP).',
  },

  // ─── 103.6 Изменение приоритетов выполнения процессов (3 вопроса) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'В Linux, каков допустимый диапазон значений "nice"?',
    options: ['От 0 до 100', 'От -20 до +19', 'От -19 до +20', 'От 1 до 99'],
    correct: 1,
    explanation: 'Значения nice варьируются от -20 (самый высокий приоритет) до +19 (самый низкий приоритет).',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Какое действие может выполнить обычный пользователь (не root) в отношении приоритетов процессов?',
    options: [
      'Уменьшить значение nice своих собственных процессов',
      'Увеличить значение nice (уменьшить приоритет) своих собственных процессов',
      'Изменить приоритет процесса любого пользователя',
      'Установить значение nice равным -20'
    ],
    correct: 1,
    explanation: 'Обычные пользователи могут только увеличивать значение nice (понижать приоритет) своих собственных процессов.',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда запускает новый процесс с измененным приоритетом планирования?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` запускает новый процесс с измененным приоритетом; `renice` изменяет существующие процессы.',
  },

  // ─── 103.7 Поиск в текстовых файлах с использованием регулярных выражений (2 вопроса) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'В регулярных выражениях, что представляет собой якорь `^`?',
    options: ['Конец строки', 'Любая группа символов', 'Начало строки', 'Отрицание'],
    correct: 2,
    explanation: 'Символ `^` привязывает совпадение к началу строки.',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Что означает `.*` в регулярном выражении?',
    options: [
      'Ноль или более литеральных точек',
      'Литеральная точка, за которой следует литеральная звездочка',
      'Ноль или более любых символов',
      'Ровно одна точка'
    ],
    correct: 2,
    explanation: 'Точка соответствует любому символу, а звездочка — нулю или более вхождений; вместе они соответствуют любой строке.',
  },

  // ─── 103.8 Базовое редактирование файлов (3 вопроса) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'При открытии vi, какой режим активен по умолчанию?',
    options: ['Режим вставки', 'Визуальный режим', 'Нормальный (командный) режим', 'Ex-режим'],
    correct: 2,
    explanation: 'vi открывается в нормальном режиме, где нажатия клавиш интерпретируются как команды.',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'В нормальном режиме vi, что делает команда `dd`?',
    options: ['Удаляет текущий символ', 'Удаляет всю текущую строку', 'Дублирует текущую строку', 'Сохраняет документ'],
    correct: 1,
    explanation: '`dd` удаляет (вырезает) всю текущую строку в vi.',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Как принудительно выйти из vi без сохранения изменений?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` заставляет редактор выйти без сохранения изменений.',
  },
];
