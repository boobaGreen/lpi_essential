// RHCSA Quiz — Topic 8: Users and Groups (Русский) — 15 questions

export const rhcsaTopic8QuizzesRU = [
  // ─── Users ───
  {
    id: 'q-rhcsa-8-1-001', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'Какая из команд корректно создаст нового пользователя "mario", автоматически сгенерировав для него домашнюю директорию и назначив оболочку bash?',
    options: [
      'useradd mario',
      'useradd -m -s /bin/bash mario',
      'adduser mario --shell bash',
      'usermod -m -s /bin/bash mario',
    ],
    correct: 1,
    explanation: 'Флаг `-m` принудительно создает домашнюю папку из скелета (/etc/skel), а `-s` указывает путь к shell-оболочке.',
  },
  {
    id: 'q-rhcsa-8-1-002', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда используется администратором (root), чтобы задать или изменить пароль для пользователя "mario"?',
    options: ['usermod -p mario', 'passwd mario', 'chpasswd mario', 'shadow mario'],
    correct: 1,
    explanation: 'Утилита `passwd <имя_юзера>` интерактивно просит ввести новый пароль дважды. Только пользователь root имеет право менять пароли ДРУГИМ пользователям.',
  },
  {
    id: 'q-rhcsa-8-1-003', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'medium', type: 'mcq',
    question: 'Вам нужно создать "сервисный" (системный) аккаунт для демона без права интерактивного входа. Как создать юзера "service" без домашней папки и с оболочкой /sbin/nologin?',
    options: [
      'useradd -r -s /sbin/nologin service',
      'useradd -M -s /sbin/nologin service',
      'useradd --no-home --system service',
      'Оба варианта А и В практически эквивалентны для этой цели',
    ],
    correct: 3,
    explanation: 'Флаг `-r` создает системный аккаунт (ему выдается низкий UID < 1000, и папка не создается по умолчанию). Флаг `-M` явно запрещает создание папки. Оболочка `/sbin/nologin` (или `/bin/false`) блокирует SSH-вход.',
  },
  {
    id: 'q-rhcsa-8-1-004', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'medium', type: 'mcq',
    question: 'Сотрудник уволен. Как быстро и надежно заблокировать учетную запись "mario", предотвратив любой вход по паролю?',
    options: [
      'usermod -L mario',
      'passwd -l mario',
      'usermod -s /sbin/nologin mario',
      'Все вышеперечисленные методы справятся с задачей блокировки',
    ],
    correct: 3,
    explanation: 'Команды `usermod -L` (Lock) и `passwd -l` (lock) подставляют восклицательный знак `!` перед хэшем пароля в файле /etc/shadow, делая его недействительным. Замена shell на nologin — другой, но тоже рабочий метод жесткой блокировки.',
  },
  {
    id: 'q-rhcsa-8-1-005', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'medium', type: 'mcq',
    question: 'Политика безопасности требует смены пароля каждые 90 дней. Какой командой вы заставите пароль пользователя "mario" протухать через этот срок?',
    options: [
      'passwd -x 90 mario',
      'chage -M 90 mario',
      'usermod --max-age 90 mario',
      'И вариант А, и вариант В',
    ],
    correct: 3,
    explanation: 'Как утилита `chage -M <дни>` (Max days), так и утилита `passwd -x <дни>` (eXpire max days) изменяют одно и то же поле (Maximum password age) в системном файле /etc/shadow.',
  },
  {
    id: 'q-rhcsa-8-1-006', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'hard', type: 'mcq',
    question: 'В каких двух файлах Linux хранит базовую информацию о профиле пользователя и его зашифрованный (хэшированный) пароль соответственно?',
    options: [
      '/etc/passwd и /etc/shadow',
      '/etc/users и /etc/passwords',
      '/etc/shadow и /etc/passwd',
      '/etc/passwd и /etc/group',
    ],
    correct: 0,
    explanation: 'Файл `/etc/passwd` содержит публичную инфу (UID, GID, домашнюю папку, shell) и доступен для чтения всем. Файл `/etc/shadow` содержит соли и хэши паролей, он строго доступен ТОЛЬКО руту.',
  },
  {
    id: 'q-rhcsa-8-1-007', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'Как пользователю быстро проверить, членом каких групп он в данный момент является?',
    options: ['whoami', 'id', 'groups', 'Команды из вариантов B и C'],
    correct: 3,
    explanation: 'Команда `id` выдает самую исчерпывающую информацию: UID номер, основную группу GID и номера всех дополнительных групп. Утилита `groups` выводит только текстовые имена групп. Обе полезны.',
  },

  // ─── Groups and sudo ───
  {
    id: 'q-rhcsa-8-2-001', lessonId: 'rhcsa-8-2', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'Вы хотите дать юзеру "mario" привилегии админа. Как ДОБАВИТЬ его во вторичную (дополнительную) группу "wheel", не удаляя его из других групп, в которых он уже состоит?',
    options: [
      'usermod -G wheel mario',
      'usermod -aG wheel mario',
      'groupadd wheel mario',
      'gpasswd -a mario wheel',
    ],
    correct: 1,
    explanation: 'Классическая ловушка для новичков. Флаг `-a` (append) обязателен! Команда `usermod -aG wheel mario` ДОБАВЛЯЕТ группу. Если выполнить просто `-G wheel`, юзер вылетит из всех своих старых вторичных групп и останется только в wheel.',
  },
  {
    id: 'q-rhcsa-8-2-002', lessonId: 'rhcsa-8-2', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'В системе RHEL9 (и CentOS/Fedora), нахождение пользователя в системной группе "wheel" дает ему право на:',
    options: [
      'Физический доступ к консоли сервера в дата-центре',
      'Выполнение ЛЮБЫХ команд от имени суперпользователя (root) через утилиту sudo',
      'Прямое редактирование системных файлов без ввода пароля',
      'Свободное чтение всех домашних директорий других пользователей',
    ],
    correct: 1,
    explanation: 'В RHEL группа `wheel` — это группа администраторов. В файле `/etc/sudoers` по умолчанию раскомментирована строка `%wheel ALL=(ALL) ALL`, что переводится как: "Разрешить членам группы wheel выполнять что угодно под sudo".',
  },
  {
    id: 'q-rhcsa-8-2-003', lessonId: 'rhcsa-8-2', topicId: 8, difficulty: 'medium', type: 'mcq',
    question: 'Как правильно создать sudo-правило, которое разрешит пользователю "mario" выполнять любые команды от имени рута БЕЗ ВВОДА собственного пароля (NOPASSWD)?',
    options: [
      'Прописать в /etc/sudoers: mario ALL=(ALL) NOPASSWD:ALL',
      'Положить файлик в /etc/sudoers.d/mario с текстом: mario ALL=(ALL) NOPASSWD:ALL',
      'usermod -G sudo mario',
      'Варианты А и В',
    ],
    correct: 3,
    explanation: 'Оба варианта синтаксически верны. Однако вариант В (использование директории `/etc/sudoers.d/`) считается лучшей современной практикой (best practice), так как спасает главный файл от случайной поломки и облегчает автоматизацию конфигурациями (Ansible).',
  },
  {
    id: 'q-rhcsa-8-2-004', lessonId: 'rhcsa-8-2', topicId: 8, difficulty: 'medium', type: 'mcq',
    question: 'С помощью какой ТОЛЬКО ОДНОЙ безопасной команды разрешается вносить ручные правки в главный файл администраторов /etc/sudoers?',
    options: ['vi /etc/sudoers', 'visudo', 'sudo edit /etc/sudoers', 'nano /etc/sudoers'],
    correct: 1,
    explanation: 'Использовать прямой редактор (vi/nano) — фатальная ошибка. Если вы опечатаетесь, сломается синтаксис, и ВСЕ админы намертво потеряют доступ к root. Команда `visudo` блокирует файл на время редактирования, а при сохранении жестко ПРОВЕРЯЕТ СИНТАКСИС, не давая сохранить сломанный файл.',
  },
  {
    id: 'q-rhcsa-8-2-005', lessonId: 'rhcsa-8-2', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'Как создать новую группу пользователей с именем "developers" и ЖЕСТКО задать ей идентификатор GID равный 1500?',
    options: [
      'groupadd -g 1500 developers',
      'groupadd developers --gid 1500',
      'addgroup -g 1500 developers',
      'groupmod -g 1500 developers',
    ],
    correct: 0,
    explanation: 'Команда `groupadd -g <цифра_GID> <имя_группы>` создает новую группу с указанным ID. (Если группу нужно просто переименовать или поменять ей ID позже — используется groupmod).',
  },
  {
    id: 'q-rhcsa-8-1-008', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'hard', type: 'mcq',
    question: 'Сборный вопрос-комбо: Какая строка создаст пользователя "mario" с UID 1500, включенным созданием домашней папки и текстовым комментарием (GECOS) "Mario Rossi"?',
    options: [
      'useradd -u 1500 -c "Mario Rossi" -m mario',
      'useradd -i 1500 -d "Mario Rossi" mario',
      'useradd -U 1500 --comment "Mario Rossi" mario',
      'adduser mario -u 1500',
    ],
    correct: 0,
    explanation: 'Разбор ключей useradd: `-u` = задать UID; `-c` = comment (записывается в 5-е поле /etc/passwd для ФИО и телефонов); `-m` = make home dir (скопировать /etc/skel). Ловушка: ключ `-d` используется для изменения ПУТИ папки, а не комментария.',
  },
  {
    id: 'q-rhcsa-8-2-006', lessonId: 'rhcsa-8-2', topicId: 8, difficulty: 'medium', type: 'mcq',
    question: 'Как вывести на экран красивую и понятную статистику о том, КОГДА в последний раз менялся пароль "mario" и сколько дней осталось до его принудительного устаревания (expiration)?',
    options: ['chage -l mario', 'passwd -S mario', 'cat /etc/shadow | grep mario', 'Вся предложенная троица команд способна вывести этот статус'],
    correct: 3,
    explanation: '`chage -l` (list) выдает самую приятную человекочитаемую табличку со сроками. `passwd -S` (Status) выдает компактную, но криптованную строчку статуса. Прямое чтение файла `shadow` даст голые цифры эпохи Unix (в днях начиная с 1970 года).',
  },
  {
    id: 'q-rhcsa-8-1-009', lessonId: 'rhcsa-8-1', topicId: 8, difficulty: 'easy', type: 'mcq',
    question: 'Как удалить пользователя "mario" так, чтобы система бесследно стерла И ЕГО домашнюю директорию (/home/mario), И его почтовый ящик (mail spool)?',
    options: ['userdel mario', 'userdel -r mario', 'deluser mario --remove-home', 'usermod -d /dev/null mario'],
    correct: 1,
    explanation: 'Флаг `-r` (remove) утилиты `userdel` говорит ядру удалить профиль из баз passwd/shadow И рекурсивно зачистить домашнюю папку пользователя со всеми его файлами. Без флага `-r` папка останется лежать в /home мертвым грузом (orphan files).',
  },
]
