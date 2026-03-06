// RHCSA Quiz — Topic 1: Essential Tools (Русский)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesRU = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какой оператор перенаправляет как стандартный вывод (stdout), так и ошибки (stderr) в один и тот же файл?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: 'Оператор &> перенаправляет и стандартный вывод (дескриптор 1), и стандартный поток ошибок (дескриптор 2) в один указанный файл.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Что делает команда `ls -la /etc >> /tmp/output.txt`?',
    options: [
      'Перезаписывает файл /tmp/output.txt содержимым каталога /etc',
      'Добавляет вывод команды ls в конец файла /tmp/output.txt',
      'Перенаправляет ошибки команды ls в файл /tmp/output.txt',
      'Создает жесткую ссылку между /etc и /tmp/output.txt',
    ],
    correct: 1,
    explanation: 'Оператор >> выполняет добавление (append) вывода в конец существующего файла, не удаляя его предыдущее содержимое.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Вам нужно выполнить команду `find / -name "*.log"`, скрыв только сообщения об ошибках "Permission denied". Какую команду использовать?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: 'Оператор 2> /dev/null перенаправляет исключительно поток ошибок (дескриптор 2) в /dev/null, скрывая их с экрана.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какова функция символа конвейера (pipe) `|` в конструкции `ps aux | grep httpd`?',
    options: [
      'Сохраняет вывод ps aux в файл с именем "grep httpd"',
      'Передает стандартный вывод команды ps aux на стандартный ввод команды grep httpd',
      'Запускает ps aux и grep httpd параллельно, независимо друг от друга',
      'Перенаправляет ошибки от ps aux в команду grep',
    ],
    correct: 1,
    explanation: 'Конвейер | соединяет стандартный вывод (stdout) первой команды со стандартным вводом (stdin) второй команды.',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая из команд отправляет и обычный вывод, и ошибки в /dev/null (режим полной тишины)?',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: 'Сначала > /dev/null перенаправляет stdout в "черную дыру", а затем 2>&1 перенаправляет stderr туда же, куда указывает stdout. Это эквивалентно современному &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Какой файловый дескриптор (file descriptor) соответствует стандартному потоку ошибок (stderr)?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'Стандартные дескрипторы: 0 = stdin (ввод), 1 = stdout (вывод), 2 = stderr (ошибки).',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Что представляет собой файл `/dev/null` в Linux?',
    options: [
      'Пустой текстовый файл для временных заметок',
      'Специальное устройство, которое безвозвратно уничтожает все записанные в него данные',
      'Файл журналов ядра системы',
      'Символическая ссылка на домашний каталог пользователя',
    ],
    correct: 1,
    explanation: '/dev/null — это виртуальное пустое устройство ("черная дыра"), которое тихо уничтожает любой входящий поток данных.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Как использовать утилиту `tee`, чтобы увидеть вывод команды на экране И ОДНОВРЕМЕННО сохранить его в файл?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: 'Команда `tee` читает из stdin и дублирует поток: выводит его на экран (stdout) и записывает в указанный файл. Идеально подходит для конвейеров.',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какой ключ команды grep используется для поиска без учета регистра символов (большие/маленькие буквы)?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: 'Ключ -i (ignore-case) делает поиск нечувствительным к регистру.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выведет строки из файла /etc/passwd, которые НЕ содержат слова "nologin"?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: 'Ключ -v (invert-match) инвертирует поиск: выводятся строки, НЕ совпадающие с шаблоном.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'В регулярных выражениях, что означает шаблон `^root`?',
    options: [
      'Слово "root" в любом месте строки',
      'Строки, НАЧИНАЮЩИЕСЯ со слова "root"',
      'Строки, ЗАКАНЧИВАЮЩИЕСЯ словом "root"',
      'Любой один символ, за которым следует "root"',
    ],
    correct: 1,
    explanation: 'Символ "^" (карет) является якорем начала строки. `^root` найдет только те строки, которые стартуют с "root".',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какой параметр grep выводит только КОЛИЧЕСТВО совпадающих строк, а не сами строки?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: 'Ключ -c (count) ведет подсчет строк с совпадениями и выводит лишь итоговое число.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'С помощью какого флага grep включает поддержку расширенных регулярных выражений (Extended Regular Expressions)?',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: 'Флаг -E (или псевдоним egrep) включает расширенные regex, позволяя использовать символы +, ?, |, () без обратных слэшей (экранирования).',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Какая команда grep найдет все строки, которые начинаются с цифры?',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = якорь начала строки, `[0-9]` = любой класс цифр. Вместе они описывают "начало с цифры".',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая опция grep выполняет рекурсивный поиск во всех вложенных подкаталогах?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: 'Ключ -r (recursive) заставляет grep сканировать не только указанную директорию, но и все ее вложенные папки.',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какое восьмеричное число соответствует правам доступа `rwxr-xr-x`?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=7 (4+2+1), r-x=5 (4+0+1), r-x=5. Итого: 755. Это типичные права для скриптов и общих папок.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какой командой можно создать символическую (мягкую) ссылку на /etc/hosts внутри каталога /tmp/?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: 'Команда `ln -s` создает soft-link. Без флага -s команда ln создаст жесткую (hard) ссылку.',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'В чем главное принципиальное отличие жесткой ссылки (hard link) от символической (symlink)?',
    options: [
      'Символические ссылки работают быстрее, чем жесткие',
      'Жесткие ссылки указывают на один и тот же inode; символические — это файлы, указывающие на текстовый путь',
      'Жесткие ссылки пересекают границы разных файловых систем, а символические — нет',
      'Символические ссылки нельзя указывать на обычные файлы',
    ],
    correct: 1,
    explanation: 'Жесткая ссылка делит один inode с оригиналом (они равноправны), и не работает между разными разделами. Symlink — это отдельный файл-указатель.',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда добавит право на ИСПОЛНЕНИЕ файла (execute) ТОЛЬКО для владельца (user), не затрагивая группы и остальных?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: 'Синтаксис `u+x` значит: Владельцу (user) добавить (+) право на исполнение (x). Вариант `a+x` добавил бы всем.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда позволяет одним махом изменить и Владельца, и Группу файла?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: 'Формат `chown пользователь:группа файл` изменяет сразу оба атрибута за одно действие.',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда создаст сжатый архив gzip с именем backup.tar.gz из каталога /home/mario?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'Ключи: c=создать, z=использовать gzip, v=подробно, f=имя файла. Получается `tar -czvf archive.tar.gz папка_источник`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Какой флаг утилиты tar указывает на использование алгоритма сжатия bzip2?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'Ключ -j = bzip2 (.tar.bz2), ключ -z = gzip (.tar.gz), а ключ -J = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Вы находитесь в /home. Как разархивировать tar.gz архив напрямую в каталог /opt/, не переходя в него через cd?',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: 'Флаг `-C` (Change directory) перед распаковкой указывает tar перепрыгнуть в каталог назначения для извлечения файлов туда.',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Как просмотреть страницу руководства man для конфигурационного файла passwd (секция 5), а не саму команду passwd (секция 1)?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: 'Синтаксис `man [раздел] [имя_страницы]`. Раздел 1 — команды пользователя, раздел 5 — форматы конфигурационных файлов.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'В каком системном каталоге обычно лежат файлы README, шаблоны настроек и другая документация, поставляемая с RPM-пакетами?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: 'Каталог /usr/share/doc/ стандартизирован для хранения документации по каждому установленному пакету в RHEL.',
  },
]
