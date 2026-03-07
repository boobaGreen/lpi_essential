// LPIC-1 102 Quiz Pool — Russian — Topic 109 (Основы сетей)

export const lpic1_102_topic5Quizzes_ru = [
  // ─── 109.1 Основы интернет-протоколов (5 вопросов) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Какой порт по умолчанию используется протоколом HTTP?",
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: "Порт 80 зарезервирован для незашифрованного трафика HTTP."
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Какой из перечисленных ниже портов используется по умолчанию протоколом SSH (Secure Shell)?",
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: "Порт 22 является стандартным для удаленного доступа по SSH.",
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Сколько бит используется в стандартном адресе IPv6?",
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: "IPv6 использует 128-битные адреса, что значительно увеличивает адресное пространство по сравнению с IPv4 (32 бита).",
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какой протокол используется утилитой `ping` для тестирования сетевой связности?",
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: "`ping` отправляет сообщения ICMP (Internet Control Message Protocol) типа Echo Request.",
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Какой протокол считается протоколом 'без установления соединения' (connectionless) и не гарантирует доставку пакетов?",
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: "UDP (User Datagram Protocol) работает без установления соединения и имеет меньше накладных расходов, чем TCP.",
  },

  // ─── 109.2 Настройка постоянной конфигурации сети (5 вопросов) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Какая современная команда заменяет `ifconfig` для просмотра и настройки IP-адресов интерфейсов?",
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: "Команда `ip` из пакета iproute2 является современным стандартом, заменяющим устаревшие инструменты net-tools."
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какой формат файлов используется в Netplan для написания сетевых конфигураций?",
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: "Netplan использует файлы .yaml для определения настроек."
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какая команда используется для отображения текущей таблицы маршрутизации ядра?",
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: "`ip route` (или устаревшая `route -n`) отображает таблицу маршрутизации.",
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какая утилита NetworkManager предоставляет интерфейс командной строки для управления сетевыми подключениями?",
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: "`nmcli` — это инструмент командной строки для контроля NetworkManager.",
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "В системе на базе Debian (без Netplan), какой файл в основном используется для статической настройки сетевых интерфейсов?",
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: "/etc/network/interfaces — традиционный файл конфигурации сети в Debian.",
  },

  // ─── 109.3 Базовое устранение сетевых неполадок (5 вопросов) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Какая утилита позволяет увидеть полный путь (узел за узлом), проходимый пакетами до удаленного хоста?",
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: "traceroute отслеживает все промежуточные маршрутизаторы, через которые проходят пакеты."
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какая команда позволяет увидеть, какие процессы прослушивают определенные сетевые порты (заменяет netstat)?",
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: "ss (socket statistics) — современная команда для анализа сетевых соединений."
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Что обычно выводит команда `hostname -i`?",
    options: [
      "Текущее время аптайма хоста",
      "IP-адрес локального имени хоста",
      "Статус интернет-соединения",
      "Адрес шлюза по умолчанию"
    ],
    correct: 1,
    explanation: "Опция `-i` команды `hostname` возвращает IP-адрес(а), связанные с именем хоста.",
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Какая команда используется для просмотра или изменения кэша ARP (Address Resolution Protocol)?",
    options: ['arping', 'arp', 'ip neighbor', 'Как arp, так и ip neighbor'],
    correct: 3,
    explanation: "И традиционная команда `arp`, и современная `ip neighbor` работают с таблицей ARP.",
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Если сервер не может связаться ни с одним хостом за пределами своей локальной подсети, какую настройку следует проверить в первую очередь?",
    options: ["Сервер имен в resolv.conf", "Шлюз по умолчанию (default gateway) в таблице маршрутизации", "Файл /etc/hosts", "Размер MTU интерфейса"],
    correct: 1,
    explanation: "Шлюз по умолчанию отвечает за пересылку трафика, предназначенного для удаленных сетей.",
  },

  // ─── 109.4 Настройка DNS на стороне клиента (5 вопросов) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "В какой файл Linux-система обращается в первую очередь для разрешения имени хоста в IP-адрес перед запросом к DNS?",
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: "/etc/hosts — это локальная статическая база данных, которая обычно имеет приоритет над DNS."
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Что указывает директива `nameserver` в файле `/etc/resolv.conf`?",
    options: [
      "IP-адрес почтового сервера",
      "IP-адрес DNS-сервера для запросов",
      "Имя хоста локального компьютера",
      "Адрес шлюза по умолчанию"
    ],
    correct: 1,
    explanation: "nameserver определяет, какие DNS-серверы клиент будет использовать для разрешения имен."
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какой файл определяет порядок, в котором система пытается разрешать имена хостов (например, сначала файлы, затем dns)?",
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: "/etc/nsswitch.conf управляет порядком поиска для различных системных баз данных."
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Какая утилита командной строки используется для выполнения DNS-запросов и устранения проблем с разрешением имен?",
    options: ['dig', 'host', 'nslookup', 'Все вышеперечисленные'],
    correct: 3,
    explanation: "`dig`, `host` и `nslookup` — инструменты для проверки работы DNS.",
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Что делает директива `search` в `/etc/resolv.conf`?",
    options: [
      "Ищет все доступные DNS-серверы в подсети",
      "Определяет суффиксы доменных имен для дополнения неполных имен хостов при разрешении",
      "Позволяет искать файлы на сервере",
      "Принудительно выполняет рекурсивный поиск на сервере имен"
    ],
    correct: 1,
    explanation: "Директива `search` перечисляет доменные имена, которые будут пробоваться, если указано короткое имя хоста (не FQDN)."
  },
];
