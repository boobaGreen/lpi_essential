// RHCSA Quiz — Topic 6: System Maintenance (Русский) — 15 questions

export const rhcsaTopic6QuizzesRU = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда используется для установки пакета "httpd" с помощью пакетного менеджера dnf?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: 'Команда `dnf install <package>` скачивает и устанавливает пакет вместе со всеми его зависимостями. (Старый yum оставлен в RHEL9 лишь как алиас-симлинк на dnf).',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Как обновить все установленные пакеты в системе до последних доступных версий?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'Оба варианта A и B верны'],
    correct: 3,
    explanation: 'В современном dnf (RHEL8/9) команды `update` и `upgrade` абсолютно идентичны и взаимозаменяемы. Они обе обновляют всю систему и удаляют устаревшие пакеты-обертки (obsoletes).',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Вы нашли в системе файл /usr/bin/vim. Как узнать, КАКОМУ ИМЕННО RPM-пакету принадлежит данный файл (кто его принес)?',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'И варианты B, и вариант C справятся с задачей',
    ],
    correct: 3,
    explanation: 'Обе команды ответят на вопрос. `rpm -qf <файл>` (query file) работает быстро, но ТОЛЬКО если пакет уже установлен. `dnf provides <поиск>` ищет по всей базе репозиториев, даже среди еще не установленных пакетов.',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Вы смонтировали установочный DVD-диск RHEL в папку. Как правильно прописать его как локальный репозиторий в /etc/yum.repos.d/?',
    options: [
      'Создать файл .repo и прописать там baseurl=file:///mount/point',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: 'Для локальных репозиториев (с диска или флешки) нужно создать текстовый файл *.repo, где путь указывается через протокол `file://` (с тремя слешами: два от протокола, один от корня /).',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выведет полный список УЖЕ УСТАНОВЛЕННЫХ пакетов в вашей ОС?',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Верны варианты B и C'],
    correct: 3,
    explanation: 'Классическая команда `rpm -qa` (query all) выдаст сырой спам всех пакетов. Команда `dnf list installed` выдаст ту же информацию, но в красивой таблице с указанием репозитория, откуда пакет был взят.',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Какая из опций команды rpm покажет список всех физических файлов (и их пути), которые установил в систему пакет "httpd"?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'Флаг `-ql` (query list) заглядывает внутрь установленного пакета и распечатывает полный манифест всех его файлов, бинарников и папок.',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Вы подозреваете, что кто-то изменил бинарники пакета. Как сверить хэш-суммы и права файлов установленного пакета с его оригинальным эталоном из RPM-базы?',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: 'Ключ `-V` (Verify) проводит глубокую проверку: он сверяет размер, MD5/SHA хэш, права (permissions) и владельца (ownership) файлов на диске с оригинальной базой RPM. Там, где есть изменения — выведет буквенный код.',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'У вас есть скачанный руками локальный файл package.rpm. Как заставить rpm установить его ЖЕСТКО, проигнорировав любые ошибки отсутствия зависимостей (dependencies)?',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: 'Флаг `--nodeps` (no dependencies) заставляет rpm закрыть глаза на недостающие библиотеки и вбить пакет силой. (Ключи -ivh добавляют прогресс-бар и детали). Полезно для грязных хаков, но опасно!',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'В каком текстовом файле на RHEL9 администратор должен делать ручные правки параметров ядра (например, отключать графическую загрузку rhgb), чтобы настроить загрузчик GRUB2 на постоянной основе?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: 'Файл `/etc/default/grub` — это единственный правильный шаблон для ручного редактирования. Основной файл `/boot/grub2/grub.cfg` генерируется скриптами автоматически и перезапишется при первом же обновлении ядра.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Вы только что отредактировали файл /etc/default/grub. КАКАЯ КОМАНДА сгенерирует новый боевой конфиг загрузчика и применит ваши изменения?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'Команда `grub2-mkconfig -o <путь>` (make config & output) читает шаблоны из /etc и собирает из них монструозный финальный скрипт grub.cfg. В RHEL9 этот путь единый: `/boot/grub2/grub.cfg` (даже для UEFI систем!).',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Экзаменационный вопрос: Как изменить время ожидания (таймаут) меню GRUB при загрузке сервера ровно на 5 секунд?',
    options: [
      'Изменить GRUB_TIMEOUT=5 в файле /etc/default/grub, а затем запустить grub2-mkconfig',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'Любое вмешательство в GRUB состоит из двух шагов: 1. Поправить переменную (в данном случае GRUB_TIMEOUT) в `/etc/default/grub`. 2. Собрать меню заново командой `grub2-mkconfig -o /boot/grub2/grub.cfg`.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Начиная с современных версий RHEL (и Fedora), спецификация BLS (Boot Loader Spec) вынесла отдельные пункты ядер из общего меню. В какой директории теперь лежат текстовые файлы (кусочки конфигов) для каждого установленного ядра?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/loader/entries/'],
    correct: 1,
    explanation: 'В RHEL9 используется формат Boot Loader Spec. Теперь при установке нового ядра RPM-пакет не пересобирает весь GRUB, а просто кидает маленький текстовый .conf файлик с описанием очередного ядра в папку `/boot/loader/entries/` (и она симлинком связана с /boot/grub2/). **Примечание: В некоторых старых учебниках правильным ответом мог быть сам grub.cfg, поэтому важно знать контекст BLS.**',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Как установить целую связку пакетов, объединенных в мета-группу, например "Development Tools" (Инструменты разработки)?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'Оба варианта B и C сработают',
    ],
    correct: 3,
    explanation: 'Оба синтаксиса `group install` (новый) и `groupinstall` (старый legacy) сработают и установят разом десятки пакетов (gcc, make, git), привязанных к этой группе.',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Какой ключ-аргумент утилиты rpm выведет текстовое ОПИСАНИЕ (description) установленного пакета, его версию, архитектуру и дату сборки?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: 'Флаг `-qi` (query info) печатает красивую карточку-паспорт пакета с его метаданными, описанием и URL-сайта разработчика.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Вам нужно срочно унести пакет (например, httpd) на флешке на закрытый сервер без интернета. Как СКАЧАТЬ этот пакет с помощью dnf, но НЕ устанавливать его в локальную систему?',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: 'Команда (точнее плагин) `dnf download <пакет>` просто скачает .rpm файл утилиты в вашу текущую директорию из репозитория. Полезно для создания локальных зеркал или оффлайн-переноса.',
  },
]
