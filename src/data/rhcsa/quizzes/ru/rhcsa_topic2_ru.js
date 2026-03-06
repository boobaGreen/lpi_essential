// RHCSA Quiz — Topic 2: Shell Scripting (Русский)
// 15 MCQ questions

export const rhcsaTopic2QuizzesRU = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Как объявить и присвоить значение переменной в bash (без экспорта)?',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'В bash переменные объявляются строго без пробелов вокруг знака равенства: `NAME="value"`. Знак доллара `$` используется только при чтении переменной.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая специальная переменная содержит PID (идентификатор) текущего процесса bash?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '`$$` содержит PID текущего процесса. `$?` = код возврата (exit code), `$0` = имя запущенного скрипта, `$!` = PID последней фоновой задачи.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какое действие выполняет команда `export VARIABLE="value"`?',
    options: [
      'Создает локальную переменную, доступную только внутри текущего скрипта',
      'Делает переменную доступной для дочерних процессов (превращает ее в переменную окружения)',
      'Сохраняет переменную в системном файле /etc/environment',
      'Удаляет переменную сразу после завершения скрипта',
    ],
    correct: 1,
    explanation: 'Команда `export` помечает переменную для экспорта в среду исполнения всех последующих (дочерних) процессов, порождаемых данным shell.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какой синтаксис используется для сохранения (подстановки) результата выполнения команды в переменную?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Оба варианта A и B верны', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Оба варианта — и бэктики (обратные кавычки) `cmd`, и конструкция `$()` перехватывают вывод. Формат `$()` предпочтительнее, так как он более читаем и позволяет легкую вложенность.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Что выведет на экран этот скрипт?\n```bash\nNAME="world"\necho "Hello ${NAME}!"\n```',
    options: ['Hello ${NAME}!', 'Hello world!', 'Hello $NAME!', 'Ошибка: переменная не определена'],
    correct: 1,
    explanation: 'Конструкция `${NAME}` корректно раскрывает значение переменной внутри двойных кавычек. Вывод будет: "Hello world!".',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда test внутри bash проверяет базовое существование файла (любого типа)?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: 'Флаг `-e` проверяет, существует ли файл (включая каталоги, сокеты и т.д.). Флаг `-f` строже: файл существует И является обычным файлом (regular file).',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Что в точности сделает данный цикл?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'Выведет: 123 на одной строке без пробелов',
      'Выведет: 1, 2, 3 последовательно, каждый на новой строке',
      'Выдаст синтаксическую ошибку',
      'Выполнит команду echo один раз с аргументом "1 2 3"',
    ],
    correct: 1,
    explanation: 'Цикл `for` итерируется по каждому элементу списка. Команда echo печатает значение `$i` и по умолчанию добавляет перенос на новую строку.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какой оператор(ы) в bash используется для проверки равенства двух строк?',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'Оба оператора A и C корректны для строк'],
    correct: 3,
    explanation: 'В bash для сравнения СТРОК работают оба оператора: `=` (POSIX-совместимый) и `==` (расширение bash). Оператор `-eq` математический и служит только для ЦЕЛЫХ ЧИСЕЛ.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Какой флаг оператора test проверяет, что указанный путь существует и является именно КАТАЛОГОМ (директорией)?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: 'Флаг `-d` (directory) возвращает истину, если путь — это папка. `-f` = обычный файл, `-e` = любой тип, `-r` = право на чтение.',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Как правильно написать классический bash цикл while, который считает от 1 до 5?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Синтаксис while в bash: сначала инициализация счетчика (`i=1`), проверка условия в test (`[ $i -le 5 ]` — где -le значит less or equal), и арифметический инкремент (`((i++))`).',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Что именно проверяет конструкция `[ -z "$VARIABLE" ]`?',
    options: [
      'Равна ли переменная математическому нулю (0)',
      'Является ли строка переменной ПУСТОЙ (нулевая длина)',
      'Является ли переменная числовым типом',
      'Существует ли такая переменная вообще',
    ],
    correct: 1,
    explanation: 'Флаг `-z` (zero length) проверяет, что строка пуста. Его антоним `-n` (non-zero) проверяет, что строка содержит хотя бы один символ.',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Внутри bash-скрипта, какое значение несет специальная переменная `$1`?',
    options: [
      'PID самого скрипта',
      'Значение первого позиционного аргумента, переданного скрипту',
      'Имя самого скрипта (под которым он был вызван)',
      'Общее количество переданных аргументов',
    ],
    correct: 1,
    explanation: '`$1` — это первый аргумент. `$0` = имя скрипта, `$#` = количество аргументов, `$@` = все аргументы массивом.',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Какая переменная содержит код возврата (exit code) ПОСЛЕДНЕЙ выполненной команды?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '`$?` хранит код статуса. Значение 0 означает успех, любое число неравное нулю (часто 1 или 2) — ошибку выполнения.',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'В чем заключается тонкая разница между специальными переменными `$@` и `$*`?',
    options: [
      'Разницы нет, они абсолютно идентичны во всех случаях',
      'В кавычках "$@" сохраняет аргументы как отдельные слова (массив), а "$*" сливает их в одну гигантскую строку',
      '"$*" сохраняет аргументы массивом, а "$@" сливает их',
      '$@ содержит только числовые аргументы, игнорируя текст',
    ],
    correct: 1,
    explanation: 'При обрамлении в двойные кавычки: `"$@"` → каждый аргумент остается самостоятельной строкой (полезно в циклах); `"$*"` → все аргументы склеиваются в единый монолит через первый пробел разделителя IFS.',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Как заставить скрипт завершиться с ошибкой (exit code 1) и правильно вывести текст ошибки, если он не получил ни одного аргумента?',
    options: [
      'if [ $# -eq 0 ]; then echo "Error"; fi',
      'if [ $# -eq 0 ]; then echo "Error" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'Лучшая практика POSIX: вывести сообщение в поток ошибок (stderr) с помощью `>&2`, а затем жестко завершить скрипт, вернув ОС код ошибки командой `exit 1`.',
  },
]
