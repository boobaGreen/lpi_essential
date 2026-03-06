// RHCSA Quiz — Topic 10: Containers with Podman (Русский) — 20 questions

export const rhcsaTopic10QuizzesRU = [
  // ─── Podman Basics ───
  {
    id: 'q-rhcsa-10-1-001', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'В чем заключается главное архитектурное отличие Podman от классического Docker?',
    options: [
      'Podman обязательно требует демона root; Docker — нет',
      'Podman работает без центрального демона (daemonless) и изначально поддерживает контейнеры без root (rootless); Docker требует фонового демона',
      'Docker поддерживает rootless контейнеры; Podman — нет',
      'Между ними нет никаких существенных отличий',
    ],
    correct: 1,
    explanation: 'Podman не имеет единой точки отказа (нет процесса daemon, висящего в фоне) и позволяет обычным пользователям запускать контейнеры без root-прав (rootless). Это делает его гораздо более безопасным решением для энтерпрайза (RHEL).',
  },
  {
    id: 'q-rhcsa-10-1-002', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда корректно скачает образ "ubi9" из официального реестра (registry) Red Hat?',
    options: [
      'podman pull ubi9',
      'podman pull registry.access.redhat.com/ubi9',
      'podman get ubi9',
      'Верны варианты А и B',
    ],
    correct: 3,
    explanation: 'Команда `podman pull` скачивает образ. Она принимает как полное имя с доменом (вариант B — самый надежный), так и шортнейм (вариант A), если в файле registries.conf настроен поиск по умолчанию.',
  },
  {
    id: 'q-rhcsa-10-1-003', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'Как вывести список ВООБЩЕ ВСЕХ контейнеров на хосте (и запущенных, и уже остановленных/упавших)?',
    options: [
      'podman ps',
      'podman ps -a',
      'podman list',
      'podman container list --all',
    ],
    correct: 1,
    explanation: 'Обычная команда `podman ps` показывает только живые (UP) контейнеры. Флаг `-a` (all) заставляет ее показать всю историю запущенных и остановленных (Exited) контейнеров.',
  },
  {
    id: 'q-rhcsa-10-1-004', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Как правильно запустить НОВЫЙ контейнер на базе образа ubi9 и сразу "провалиться" внутрь него в интерактивную оболочку bash?',
    options: [
      'podman run ubi9',
      'podman run -it ubi9 /bin/bash',
      'podman exec ubi9 bash',
      'podman start -i ubi9',
    ],
    correct: 1,
    explanation: 'Комбо-флаги `-i` (interactive, держать STDIN открытым) и `-t` (allocate tty, выделить псевдо-терминал) обязательны для того, чтобы ваш терминал соединился с bash внутри запускаемого контейнера.',
  },
  {
    id: 'q-rhcsa-10-1-005', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Как просмотреть список всех кэшированных (скачанных) локально ОБРАЗОВ (images) на вашем диске?',
    options: ['podman images', 'podman list images', 'podman image ls', 'Верны варианты А и С'],
    correct: 3,
    explanation: 'Команды `podman images` (старый синтаксис Docker) и `podman image ls` (новый синтаксис) абсолютно идентичны. Они выведут репозиторий, тэг, ID и размер занятого дискового пространства.',
  },
  {
    id: 'q-rhcsa-10-1-006', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'База данных крутится в УЖЕ РАБОТАЮЩЕМ фоновом контейнере с ID "abc12345". Как выполнить в нем новую команду (например, открыть bash или выполнить ls)?',
    options: [
      'podman run abc12345 command',
      'podman exec abc12345 command',
      'podman attach abc12345 -- command',
      'podman enter abc12345 command',
    ],
    correct: 1,
    explanation: 'Ключевое отличие: `podman run` создает контейнер с нуля из ОБРАЗА. Утилита `podman exec` (execute) запускает новый дополнительный процесс ВНУТРИ уже существующего и работающего КОНТЕЙНЕРА.',
  },

  // ─── Registry and Images ───
  {
    id: 'q-rhcsa-10-2-001', lessonId: 'rhcsa-10-2', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'С помощью какой команды вы можете аутентифицироваться (залогиниться) в приватный реестр (registry) компании для скачивания закрытых образов?',
    options: [
      'podman auth login registry.example.com',
      'podman login registry.example.com',
      'podman registry-login registry.example.com',
      'podman pull --auth registry.example.com',
    ],
    correct: 1,
    explanation: 'Команда `podman login <адрес_реестра>` попросит ввести логин и пароль, после чего сохранит токен доступа в локальном файле аутентификации authfile (обычно ~/.config/containers/auth.json).',
  },
  {
    id: 'q-rhcsa-10-2-002', lessonId: 'rhcsa-10-2', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Как прикрепить (назначить) локальному образу "myapp" новый тэг "v1.0" и привязать его к внешнему репозиторию подготовки к отправке (push)?',
    options: [
      'podman tag myapp registry.example.com/myapp:v1.0',
      'podman label myapp v1.0',
      'podman rename myapp:latest myapp:v1.0',
      'podman version myapp 1.0',
    ],
    correct: 0,
    explanation: 'Команда `podman tag <исходный_образ> <новое_длинное_имя>` создает ярлык (псевдоним) на тот же самый image id. Это обязательный шаг перед тем как сделать `podman push`.',
  },
  {
    id: 'q-rhcsa-10-2-003', lessonId: 'rhcsa-10-2', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'Как выполнить поиск образа (например, "nginx") по всем настроенным в вашей системе внешним реестрам?',
    options: ['podman find nginx', 'podman search nginx', 'podman lookup nginx', 'podman query nginx'],
    correct: 1,
    explanation: '`podman search <слово>` пройдется по реестрам, прописанным в файле registries.conf (обычно это docker.io, quay.io, registry.redhat.io), и выдаст табличку с найденными совпадениями, описанием и рейтингом звезд.',
  },
  {
    id: 'q-rhcsa-10-2-004', lessonId: 'rhcsa-10-2', topicId: 10, difficulty: 'hard', type: 'mcq',
    question: 'Где находится конфигурационный текстовый файл, в котором списками прописаны приоритетные реестры (registries) по умолчанию для поиска коротких имен образов?',
    options: [
      '/etc/containers/registries.conf',
      '/etc/podman/registry.conf',
      '~/.config/containers/registries.conf',
      'Верны варианты А и С (они дополняют друг друга)',
    ],
    correct: 3,
    explanation: 'Настройки Podman каскадные. Глобальный общесистемный файл лежит в `/etc/containers/registries.conf`. Обычный rootless юзер может переопределить настройки в своем домашнем профиле `~/.config/containers/registries.conf`.',
  },

  // ─── Containerfile ───
  {
    id: 'q-rhcsa-10-3-001', lessonId: 'rhcsa-10-3', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'Какая инструкция всегда ДОЛЖНА БЫТЬ ПЕРВОЙ в любом Containerfile (или Dockerfile), так как она задает базовый фундамент для собираемого образа?',
    options: ['BASE', 'FROM', 'SOURCE', 'IMAGE'],
    correct: 1,
    explanation: 'Инструкция `FROM <образ>:<тэг>` (например FROM ubi9:latest) инициализирует сборку и скачивает базовую подложку, поверх которой будут выполняться все последующие инструкции RUN, COPY и т.д.',
  },
  {
    id: 'q-rhcsa-10-3-002', lessonId: 'rhcsa-10-3', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'В чем заключается техническая разница между инструкциями COPY и ADD при написании Containerfile?',
    options: [
      'Между ними нет абсолютно никакой разницы, это исторические синонимы',
      'ADD умеет скачивать файлы по URL и автоматически распаковывать .tar архивы прямо в образ; COPY умеет только тупо копировать локальные файлы',
      'COPY умеет качать по URL; ADD работает только с локальными файлами',
      'COPY полностью заменила ADD, использование ADD вызывает ошибку',
    ],
    correct: 1,
    explanation: 'Инструкция `ADD` обладает "магией" (URL-загрузка и автораспаковка тарболов). Инструкция `COPY` предсказуемая, безопасная и тупая — она берет файл из папки, где лежит Containerfile, и кладет в образ. В 90% случаев Red Hat рекомендует использовать именно COPY.',
  },
  {
    id: 'q-rhcsa-10-3-003', lessonId: 'rhcsa-10-3', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Чем отличаются инструкции CMD и ENTRYPOINT?',
    options: [
      'CMD задает аргументы по умолчанию, которые легко переопределить при запуске(run); ENTRYPOINT жестко фиксирует неизменяемую программу-исполняемый файл',
      'ENTRYPOINT выполняется только в том случае, если в файле отсутствует CMD',
      'CMD и ENTRYPOINT — это одно и то же',
      'ENTRYPOINT всегда можно легко переопределить; а CMD — нет',
    ],
    correct: 0,
    explanation: 'Обычно ENTRYPOINT определяет сам бинарник демона (например `/usr/sbin/httpd`), который нельзя выкинуть. А CMD передает в него флаги (например `-D FOREGROUND`), которые пользователь может перебить в консоли, написав `podman run image --help`.',
  },
  {
    id: 'q-rhcsa-10-3-004', lessonId: 'rhcsa-10-3', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'Каково классическое заклинание для сборки (компиляции) нового образа с именем "myapp" и тэгом "1.0", если сам текстовый файл Containerfile лежит в текущей директории?',
    options: [
      'podman build myapp:1.0 .',
      'podman build -t myapp:1.0 .',
      'podman create -t myapp:1.0 .',
      'podman image build myapp:1.0',
    ],
    correct: 1,
    explanation: 'Команда `podman build` собирает образ. Флаг `-t` (tag) приклеивает к нему красивое имя. А одиночная ТОЧКА на конце (`.`) говорит Podman-у: "Возьми Containerfile и все нужные файлы для сборки прямо из той папки, где я сейчас нахожусь".',
  },
  {
    id: 'q-rhcsa-10-3-005', lessonId: 'rhcsa-10-3', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Какая инструкция в Containerfile лишь ЛОГИЧЕСКИ документирует (для сисадминов), что приложение внутри контейнера слушает определенный TCP-порт?',
    options: ['PORT', 'EXPOSE', 'OPEN', 'PUBLISH'],
    correct: 1,
    explanation: 'Инструкция `EXPOSE 80` работает как документация. Она сама по себе НЕ открывает проброс портов наружу в сеть хоста (для этого админ все равно должен явно указать флаг `-p` при команде run).',
  },

  // ─── Volumes and Networking ───
  {
    id: 'q-rhcsa-10-4-001', lessonId: 'rhcsa-10-4', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Как правильно пробросить порт (Port Mapping), чтобы порт 8080 вашего домашнего linux-хоста маршрутизировал трафик на внутренний порт 80 запущенного контейнера?',
    options: [
      'podman run -p 8080:80 image',
      'podman run -p 80:8080 image',
      'podman run --port 80=8080 image',
      'podman run --expose 80:8080 image',
    ],
    correct: 0,
    explanation: 'Синтаксис всегда идет СНАРУЖИ ВОВНУТРЬ. То есть `-p ВНЕШНИЙ_ПОРТ : ВНУТРЕННИЙ_ПОРТ`. Таким образом, `-p 8080:80` означает подключение внешнего 8080 к внутреннему apache (80).',
  },
  {
    id: 'q-rhcsa-10-4-002', lessonId: 'rhcsa-10-4', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Вам нужно прокинуть физическую папку сервера `/data/web/` внутрь контейнера по пути `/var/www/html/` (чтобы контейнер не потерял данные при смерти). Какой синтаксис верен?',
    options: [
      'podman run -v /data/web:/var/www/html image',
      'podman run --mount /data/web:/var/www/html image',
      'podman run -d /data/web /var/www/html image',
      'podman bind /data/web /var/www/html',
    ],
    correct: 0,
    explanation: 'Флаг `-v` (volume) отвечает за Bind Mounts. Синтаксис аналогичен портам: `-v ПУТЬ_НА_ХОСТЕ : ПУТЬ_В_КОНТЕЙНЕРЕ`.',
  },
  {
    id: 'q-rhcsa-10-4-003', lessonId: 'rhcsa-10-4', topicId: 10, difficulty: 'hard', type: 'mcq',
    question: 'Очень важный нюанс RHEL: Вы прокинули папку (volume), но контейнер пишет "Permission Denied". Какой суффикс нужно добавить к правилу монтирования `-v`, чтобы Podman автоматически переписал SELinux-метки файлов для доступа контейнеру?',
    options: [
      '-v /data:/data:selinux',
      '-v /data:/data:z',
      '-v /data:/data:Z',
      'Оба суффикса :z и :Z решат проблему (но у них разная логика расшаривания)',
    ],
    correct: 3,
    explanation: 'Эта магия называется "SELinux volume relabeling". Суффикс `:z` (маленькая) красит файлы как `s0` (доступны ВСЕМ запущенным контейнерам). Суффикс `:Z` (большая) красит файлы уникальным s0:c1,c2 (доступны ТОЛЬКО ЭТОМУ конкретному контейнеру, полная изоляция). Без них SELinux заблокирует доступ из контейнера к хостовой ФС.',
  },
  {
    id: 'q-rhcsa-10-4-004', lessonId: 'rhcsa-10-4', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Серверные демоны не должны блокировать ваш терминал. Какой флаг заставит контейнер "задауниться" и работать в фоновом режиме деаттаченно (detached)?',
    options: ['podman run -b image', 'podman run -d image', 'podman run --background image', 'podman run -D image'],
    correct: 1,
    explanation: 'Флаг `-d` (detach) запускает процесс в фоне и возвращает вам управление консолью хоста, плюнув на прощание длинным хэшем идентификатора созданного контейнера.',
  },
  {
    id: 'q-rhcsa-10-4-005', lessonId: 'rhcsa-10-4', topicId: 10, difficulty: 'easy', type: 'mcq',
    question: 'Контейнер "mycontainer" остановлен. Как полностью удалить его остатки из системы (удалить слой с записанными изменениями)?',
    options: ['podman rm mycontainer', 'podman delete mycontainer', 'podman stop mycontainer', 'podman remove mycontainer'],
    correct: 0,
    explanation: 'Команда `podman rm` (remove) уничтожает файловый слой контейнера. Если попытаться удалить работающий контейнер, нужна добавка флага `-f` (force), которая сначала сделает ему stop, а затем rm.',
  },
  {
    id: 'q-rhcsa-10-x-001', lessonId: 'rhcsa-10-1', topicId: 10, difficulty: 'medium', type: 'mcq',
    question: 'Фоновый веб-сервер внутри контейнера "myapp" перестал отвечать. Как прочитать текстовые сырые логи (stdout/stderr) этого конкретного контейнера?',
    options: ['podman logs myapp', 'podman log myapp', 'podman inspect myapp --logs', 'journalctl -u myapp'],
    correct: 0,
    explanation: 'Команда `podman logs <идентификатор>` извлекает весь накопившийся вывод консоли контейнера. Часто используется комбинация `podman logs -f` (follow) для слежки за логами в реальном времени, как tail -f.',
  },
]
