// RHCSA Quiz — Topic 7: Basic Networking (Русский) — 20 questions

export const rhcsaTopic7QuizzesRU = [
  // ─── nmcli ───
  {
    id: 'q-rhcsa-7-1-001', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Какая команда выводит список всех настроенных сетевых подключений (connections) в системе?',
    options: ['ip addr', 'nmcli connection show', 'ifconfig -a', 'networkctl list'],
    correct: 1,
    explanation: 'Команда `nmcli con(nection) show` является главной точкой входа NetworkManager. Она выводит Имя профиля, его UUID, тип сети и физическое устройство (device), к которому привязан профиль.',
  },
  {
    id: 'q-rhcsa-7-1-002', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Каким образом через nmcli НАВСЕГДА (перманентно) назначить статический IP-адрес 192.168.1.100/24 существующему профилю подключения "ens3"?',
    options: [
      'nmcli con mod ens3 ipv4.addresses 192.168.1.100/24',
      'nmcli con mod ens3 ip4 192.168.1.100/24',
      'ip addr add 192.168.1.100/24 dev ens3',
      'ifconfig ens3 192.168.1.100 netmask 255.255.255.0',
    ],
    correct: 0,
    explanation: '`nmcli con mod <схема> параметры...` модифицирует конфигурационный файл на диске. (Команды `ip addr` или `ifconfig` меняют IP только в оперативной памяти до первой перезагрузки). Важно: после настройки нужно сделать `nmcli con up ens3`.',
  },
  {
    id: 'q-rhcsa-7-1-003', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Вы изменили настройки подключения с помощью nmcli con mod. Какая команда заставит NetworkManager ПРОЧИТАТЬ обновленный профиль и мгновенно ПРИМЕНИТЬ новые настройки к сетевой карте?',
    options: [
      'nmcli con reload',
      'nmcli con up <connection_name>',
      'systemctl restart NetworkManager',
      'Оба варианта B и C сработают',
    ],
    correct: 1,
    explanation: 'Команда `nmcli con up <название_профиля>` переподнимает профиль на интерфейсе, на лету применяя новые IP-адреса, DNS или роуты без обрыва других интерфейсов и без жесткого рестарта всего сервиса NetworkManager.',
  },
  {
    id: 'q-rhcsa-7-1-004', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Как установить новое имя компьютера (hostname) НА ПОСТОЯННОЙ основе, чтобы оно сохранилось после перезагрузки?',
    options: [
      'hostname new-name',
      'hostnamectl set-hostname new-name',
      'echo "new-name" > /etc/hostname',
      'Варианты B и C верны',
    ],
    correct: 3,
    explanation: 'Утилита `hostnamectl set-hostname` — это официальный способ RHEL, который записывает имя в `/etc/hostname` и обновляет ядро на лету. Ручное редактирование файла /etc/hostname тоже перманентно.',
  },
  {
    id: 'q-rhcsa-7-1-005', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'hard', type: 'mcq',
    question: 'Какое свойство (method) необходимо ОБЯЗАТЕЛЬНО установить профилю "ens3", чтобы он перестал ждать IP-адрес от DHCP-сервера и начал использовать только ваш вручную вбитый статический IP?',
    options: [
      'nmcli con mod ens3 ipv4.method manual',
      'nmcli con mod ens3 ipv4.type static',
      'nmcli con mod ens3 connection.type static',
      'nmcli set ens3 static',
    ],
    correct: 0,
    explanation: 'Запомните связку: если вы задали IP вручную, вы ДОЛЖНЫ отключить DHCP-клиент, переведя `ipv4.method` из значения "auto" в "manual".',
  },

  // ─── firewalld ───
  {
    id: 'q-rhcsa-7-2-001', lessonId: 'rhcsa-7-2', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Какая зона (zone) фаервола firewalld используется в RHEL9 по умолчанию (default zone) для всех сетевых интерфейсов, если вы не указывали иного?',
    options: ['public', 'external', 'internal', 'home'],
    correct: 0,
    explanation: 'Зона `public` (публичная сеть) навешивается на интерфейсы по умолчанию. Следовательно, если вы пишете правило без указания `--zone=...`, оно упадет именно в public.',
  },
  {
    id: 'q-rhcsa-7-2-002', lessonId: 'rhcsa-7-2', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Вам нужно открыть порт 8080/tcp в зоне по умолчанию НАВСЕГДА (permanent). Выберите правильную команду:',
    options: [
      'firewall-cmd --add-port=8080/tcp --permanent',
      'firewall-cmd --zone=public --add-port=8080/tcp --permanent',
      'iptables -A INPUT -p tcp --dport 8080 -j ACCEPT',
      'Оба варианта А и В сделают одно и то же',
    ],
    correct: 3,
    explanation: 'Если флаг `--zone=...` пропущен, firewalld автоматически добавит порт в дефолтную зону (которой является public). Вариант В просто более явный и строгий для скриптов.',
  },
  {
    id: 'q-rhcsa-7-2-003', lessonId: 'rhcsa-7-2', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Вы добавили порты с флагом `--permanent`. Какая команда ПЕРЕНОСИТ эти постоянные правила из конфигов диска в активную память ядра БЕЗ разрыва текущих интернет подключений?',
    options: ['firewall-cmd --reload', 'systemctl restart firewalld', 'firewall-cmd --apply', 'Варианты A и B'],
    correct: 3,
    explanation: 'Команда `firewall-cmd --reload` элегантно перечитывает правила. (Жесткий `systemctl restart` тоже сработает, но он сбросит состояния, "дропнув" активные tcp-сессии).',
  },
  {
    id: 'q-rhcsa-7-2-004', lessonId: 'rhcsa-7-2', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Как красиво, используя встроенный словарь (service-name), разрешить прохождение трафика для веб-сервера (http/port 80) через фаервол?',
    options: [
      'firewall-cmd --add-service=http --permanent',
      'firewall-cmd --open=http --permanent',
      'firewall-cmd --port=80 --permanent',
      'firewall-cmd --allow=http --permanent',
    ],
    correct: 0,
    explanation: 'Опция `--add-service=<имя>` позволяет фаерволу самому прочитать XML-файл (из /usr/lib/firewalld/services/http.xml) и открыть все нужные для этой службы порты. Это читается лучше, чем сухие цифры портов.',
  },
  {
    id: 'q-rhcsa-7-2-005', lessonId: 'rhcsa-7-2', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Как вывести АБСОЛЮТНО ВСЕ текущие активные правила, открытые порты, сервисы и привязанные интерфейсы для зоны public на экран ОС?',
    options: [
      'firewall-cmd --list-all',
      'firewall-cmd --zone=public --list-all',
      'iptables -L',
      'Оба варианта А и В',
    ],
    correct: 3,
    explanation: 'Команда `--list-all` распечатывает весь блок конфигурации зоны. В ней сразу видно: целевой accept/drop, список interfaces, разрешенные services и открытые ports.',
  },

  // ─── SSH ───
  {
    id: 'q-rhcsa-7-3-001', lessonId: 'rhcsa-7-3', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Какой командой создается новая персональная связка (пара) асимметричных крипто-ключей (закрытый и открытый ключ) по алгоритму RSA для беспарольного доступа SSH?',
    options: ['ssh-keygen -t rsa', 'ssh-keygen', 'ssh-create-key', 'openssl genrsa'],
    correct: 0,
    explanation: '`ssh-keygen -t rsa` генерирует ключи типа RSA. (Если тип `-t` не указан, современный RHEL9 по умолчанию создаст ключи более свежего алгоритма Ed25519, что тоже отлично).',
  },
  {
    id: 'q-rhcsa-7-3-002', lessonId: 'rhcsa-7-3', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Как АВТОМАТИЧЕСКИ (одной командой) отправить и прописать (скопировать) свой публичный SSH-ключ на удаленный сервер "server" для учетной записи "mario"?',
    options: [
      'ssh-copy-id mario@server',
      'scp ~/.ssh/id_rsa.pub mario@server:~/.ssh/authorized_keys',
      'ssh-keygen --copy mario@server',
      'И первый, и второй варианты — рабочие',
    ],
    correct: 3,
    explanation: 'Утилита `ssh-copy-id` (вариант А) — это скрипт-волшебник. Он сам логинится, создает папку ~/.ssh на сервере, выставляет ей правильные права (chmod 700) и бережно дописывает ключ в authorized_keys. Вариант В (ручной scp) затрет чужие ключи, если файл там уже существует.',
  },
  {
    id: 'q-rhcsa-7-3-003', lessonId: 'rhcsa-7-3', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'В каком крохотном файлике на удаленном сервере (куда вы хотите войти) хранятся открытые публичные ключи (public keys) тех, кому РАЗРЕШЕНО входить без пароля?',
    options: [
      '~/.ssh/id_rsa.pub',
      '~/.ssh/authorized_keys',
      '/etc/ssh/authorized_keys',
      '~/.ssh/known_hosts',
    ],
    correct: 1,
    explanation: 'Файл `~/.ssh/authorized_keys` — это список "гостей". Если публичный замок подходящий, сервер пускает гостя. Файл `known_hosts` хранит отпечатки САМИХ удаленных серверов (защита от MITM).',
  },
  {
    id: 'q-rhcsa-7-3-004', lessonId: 'rhcsa-7-3', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Какая команда СКОПИРУЕТ (передаст) локальную ПАПКУ (директорию со всем ее содержимым) /data/ на удаленный сервер в папку /tmp/ по защищенному SSH туннелю?',
    options: [
      'scp -r /data/ user@server:/tmp/',
      'scp /data/ user@server:/tmp/',
      'rsync /data/ user@server:/tmp/',
      'sftp /data/ user@server:/tmp/',
    ],
    correct: 0,
    explanation: 'Утилита `scp` (Secure Copy Protocol) с флагом `-r` (recursive, рекурсия) позволяет копировать целые директории и поддиректории по сети с шифрованием.',
  },

  // ─── Extra Networking Rules / DNS ───
  {
    id: 'q-rhcsa-7-1-006', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Файл, в котором вы жестко прописываете локальное разрешение (связку) "IP-адрес -> Имя хоста", и который система опрашивает ДАЖЕ РАНЬШЕ, чем DNS сервер?',
    options: ['/etc/resolv.conf', '/etc/hosts', '/etc/hostname', '/etc/nsswitch.conf'],
    correct: 1,
    explanation: 'Файл `/etc/hosts` — это локальная телефонная книга. Записи в нем (например `127.0.0.1 localhost` или IP серверов-соседей) имеют приоритет над любыми глобальными DNS-запросами.',
  },
  {
    id: 'q-rhcsa-7-1-007', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Как ПРАВИЛЬНО и НАВСЕГДА привязать внешний DNS-сервер 8.8.8.8 к сетевому профилю "ens3", используя NetworkManager (nmcli)?',
    options: [
      'nmcli con mod ens3 ipv4.dns "8.8.8.8"',
      'echo "nameserver 8.8.8.8" >> /etc/resolv.conf',
      'nmcli con mod ens3 dns 8.8.8.8',
      'Верны варианты А и B (В работает до перезапуска NM)',
    ],
    correct: 3,
    explanation: 'По правилам RHEL9, `resolv.conf` динамически перезаписывается демоном NetworkManager. Чтобы DNS не исчез после ребута, его надо "вшить" в сам профиль подключения через `nmcli con mod <connection> ipv4.dns IP`.',
  },
  {
    id: 'q-rhcsa-7-2-006', lessonId: 'rhcsa-7-2', topicId: 7, difficulty: 'hard', type: 'mcq',
    question: 'Ваш сервер "смотрит" одной ногой в интернет (ens3: public), а второй ногой во внутреннюю сеть (ens4). Как переместить/привязать сетевой адаптер "ens4" к специализированной зоне фаервола "internal"?',
    options: [
      'firewall-cmd --zone=internal --add-interface=ens4 --permanent',
      'nmcli con mod ens4 connection.zone internal',
      'Любая из команд А или B выполнит задачу',
      'firewall-cmd --change-interface=ens4 --zone=internal',
    ],
    correct: 2,
    explanation: 'NetworkManager и Firewalld давно "дружат". Вы можете сказать фаерволу переопределить зону для интерфейса (A) ИЛИ сказать NetworkManager-у записать желаемую зону прямо в сетевой профиль (B). Итог будет эквивалентным.',
  },
  {
    id: 'q-rhcsa-7-3-005', lessonId: 'rhcsa-7-3', topicId: 7, difficulty: 'easy', type: 'mcq',
    question: 'Как называется главный файл конфигурации СЕРВЕРА (демона) SSH, в котором вы можете настроить номер порта (Port 2222) или полностью ЗАПРЕТИТЬ вход по паролям (PasswordAuthentication no)?',
    options: [
      '/etc/ssh/ssh_config',
      '/etc/ssh/sshd_config',
      '~/.ssh/config',
      '/etc/pam.d/sshd',
    ],
    correct: 1,
    explanation: 'Файл с буквой "d" — `sshd_config` (SSH Daemon) — управляет логикой СЕРВЕРА, принимающего соединения. Файл `ssh_config` (без d) — отвечает за вашего исходящего клиента.',
  },
  {
    id: 'q-rhcsa-7-3-006', lessonId: 'rhcsa-7-3', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Какая из команд является абсолютным промышленным СТАНДАРТОМ для инкрементной (лишь измененные куски файлов) синхронизации папок по сети с сохранением всех их прав и временных меток?',
    options: [
      'scp -r /var/www/ user@server:/var/www/',
      'rsync -av /var/www/ user@server:/var/www/',
      'cp -r /var/www/ user@server:/var/www/',
      'sftp -r /var/www/ user@server:/var/www/',
    ],
    correct: 1,
    explanation: '`rsync` — король бэкапов. Флаги `-av` (archive + verbose) сохраняют владельца, группу, права доступа и время модификации файлов. И главное — при повторном деплое rsync "перекинет" по сети лишь дельта-разницу (кусочки измененных байт), а не целые мегабайты файлов.',
  },
  {
    id: 'q-rhcsa-7-1-008', lessonId: 'rhcsa-7-1', topicId: 7, difficulty: 'medium', type: 'mcq',
    question: 'Какая современная команда (нативная часть пакета iproute2 в RHEL) выводит таблицу системной IP-маршрутизации (routing table), показывая куда уходит трафик и где шлюз по умолчанию (default gateway)?',
    options: ['route', 'ip route', 'netstat -r', 'Все три команды покажут таблицу'],
    correct: 3,
    explanation: 'Все три утилиты способны показать роуты. Однако `ip route` (или `ip r`) — это нативный, современный и безальтернативный инструмент будущего. Старенькие утилиты `route` и `netstat` официально отложены (deprecated) во многих дистрибутивах Linux.',
  },
]
