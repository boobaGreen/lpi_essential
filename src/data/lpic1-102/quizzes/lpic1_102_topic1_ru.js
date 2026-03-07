// LPIC-1 102 Quiz Pool — Russian — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_ru = [
  // ─── 105.1 Настройка и использование среды shell (10 вопросов) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Какой файл выполняется при выходе из Bash login shell?",
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: "~/.bash_logout используется для выполнения действий при завершении сеанса (например, очистка экрана)."
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Какой каталог содержит файлы конфигурации по умолчанию, которые копируются в домашний каталог нового пользователя при создании его учетной записи?",
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: "Каталог /etc/skel (skeleton) содержит стандартные скрытые файлы для новых пользователей."
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Как правильно сделать переменную 'MYVAR' доступной для дочерних процессов текущего shell?",
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: "Команда 'export' превращает переменную оболочки в переменную окружения."
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Какой файл нужно отредактировать, чтобы установить псевдонимы (aliases) для всех пользователей в Bash?",
    options: ['~/.bashrc', '/etc/bashrc или /etc/bash.bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: "Общесистемные псевдонимы и функции обычно размещаются в /etc/bashrc или /etc/bash.bashrc.",
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Какова цель команды `source` (или оператора `.`)?",
    options: [
      'Скомпилировать shell-скрипт',
      'Выполнить скрипт в текущей среде shell без запуска дочерней оболочки',
      'Скачать файл из Интернета',
      'Сбросить shell в состояние по умолчанию'
    ],
    correct: 1,
    explanation: "`source` (или `.`) выполняет файл в контексте текущей оболочки, позволяя изменять существующие переменные и функции.",
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Какая переменная содержит путь поиска для команды `unalias`?",
    options: ['PATH', 'ALIAS_PATH', 'Shell не использует путь для псевдонимов', 'BASH_ALIASES'],
    correct: 2,
    explanation: "Псевдонимы хранятся в памяти текущей среды shell; для них нет поиска по диску.",
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Какая команда отображает все определенные в данный момент переменные окружения?",
    options: ['set', 'env', 'export -p', 'И env, и export -p'],
    correct: 3,
    explanation: "`env` показывает экспортированные переменные, а `export -p` перечисляет их в формате, пригодном для ввода в shell.",
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Какой файл первым считывается Bash при входе в систему (login shell) для общесистемной настройки?",
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: "Login shell сначала читает /etc/profile, который обычно загружает другие файлы из /etc/profile.d/.",
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Как удалить переменную окружения 'TEMP_DATA' до конца сеанса?",
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: "`unset` удаляет переменную или функцию из текущей среды shell.",
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Какая возможность Bash позволяет использовать `ll` вместо ввода `ls -l`?",
    options: ['Функция', 'Ссылка', 'Alias (псевдоним)', 'Перенаправление'],
    correct: 2,
    explanation: "Alias предоставляет сокращение для выполнения более длинных команд со специфическими флагами.",
  },

  // ─── 105.2 Настройка или написание простых скриптов (10 вопросов) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Ккакая последовательность символов в начале bash-скрипта указывает на интерпретатор, который должен использоваться для его выполнения?",
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: "Shebang (#!) в начале первой строки определяет интерпретатор скрипта."
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Какой логический оператор выполняет вторую команду только в том случае, если первая команда завершилась неудачно?",
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: "Оператор ИЛИ (||) используется для обработки ошибок или условного выполнения при сбое."
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Как правильно присвоить вывод команды 'whoami' переменной с именем 'USER'?",
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: "$(команда) выполняет подстановку вывода команды в современных оболочках."
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Какая переменная содержит количество аргументов, переданных shell-скрипту?",
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: "$# хранит количество позиционных параметров."
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Какой код выхода возвращает команда, завершившаяся успешно?",
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: "В Unix/Linux 0 означает успех; любое ненулевое значение указывает на ошибку."
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Как проверить, существует ли файл с именем `data.txt` в shell-скрипте?",
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      'И [ -e data.txt ], и [ -f data.txt ] допустимы'
    ],
    correct: 3,
    explanation: "`-e` проверяет существование; `-f` проверяет, является ли объект обычным файлом.",
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Что представляет собой переменная `$?` в shell-скриптах?",
    options: [
      'PID текущей оболочки',
      'Код завершения последней выполненной команды',
      'Первый аргумент скрипта',
      'Случайное число, сгенерированное оболочкой'
    ],
    correct: 1,
    explanation: "$? фиксирует код возврата последней выполненной команды.",
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Какую структуру цикла вы бы использовали для итерации по списку имен файлов?",
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: "Цикл `for` идеально подходит для итерации по определенному списку элементов.",
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Как в скрипте обратиться ко второму переданному ему аргументу?",
    options: ['$2', '${2}', 'Как $2, так и ${2}', '$ARG2'],
    correct: 2,
    explanation: "$2 или ${2} ссылается на второй позиционный параметр.",
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Каков правильный синтаксис простого условия `if` в Bash?",
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: "В Bash `if` требует ключевого слова `then` (часто после точки с запятой) и должен заканчиваться `fi`.",
  },
];
