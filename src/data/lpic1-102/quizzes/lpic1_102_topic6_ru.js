// LPIC-1 102 Quiz Pool — Russian — Topic 110 (Безопасность)

export const lpic1_102_topic6Quizzes_ru = [
  // ─── 110.1 Выполнение задач по администрированию безопасности (7 вопросов) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какая команда позволяет найти все файлы в системе, у которых установлен бит SUID?",
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: "find с `-perm /4000` (или `-4000`) ищет файлы с включенным битом SUID."
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какая команда настоятельно рекомендуется для редактирования файла /etc/sudoers во избежание синтаксических ошибок?",
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: "visudo выполняет проверку синтаксиса перед сохранением, предотвращая ошибки, которые могут заблокировать доступ к sudo."
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Какая команда выводит список последних вошедших в систему пользователей и время их сеансов?",
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: "Команда `last` ищет информацию в файле /var/log/wtmp, чтобы показать историю входов пользователей.",
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Как предоставить административные привилегии пользователю в файле /etc/sudoers, используя имя группы?",
    options: ['ADMIN ALL=(ALL) ALL', '%admin ALL=(ALL) ALL', 'group admin: ALL', '@admin ALL=(ALL) ALL'],
    correct: 1,
    explanation: "Префикс `%` в файле sudoers указывает, что следующее за ним имя является системной группой.",
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Какая команда используется для вывода списка всех открытых файлов и процессов, которые их открыли?",
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: "`lsof` (List Open Files) — важный инструмент для проверки того, какие процессы обращаются к конкретным файлам или сокетам.",
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какая утилита используется для ограничения максимального количества процессов, открытых пользователем в текущем shell?",
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: "ulimit (user limit) позволяет устанавливать лимиты ресурсов для оболочки и ее дочерних процессов."
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "В каком файле можно задать постоянные ограничения ресурсов для каждого пользователя, такие как максимальный размер файла или количество входов?",
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: "/etc/security/limits.conf используется модулем pam_limits для применения системных ресурсов.",
  },

  // ─── 110.2 Настройка безопасности хоста (6 вопросов) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Каков эффект установленного `Sticky Bit` на таком каталоге, как /tmp?",
    options: [
      "Делает файлы в каталоге неизменяемыми (immutable)",
      "Разрешает только владельцу файла (или root) удалять или переименовывать файл",
      "Автоматически шифрует все файлы, созданные внутри него",
      "Гарантирует, что каталог всегда остается в ОЗУ (памяти)"
    ],
    correct: 1,
    explanation: "Sticky Bit в общедоступных для записи каталогах гарантирует, что пользователи не смогут удалять файлы друг друга."
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Какой файл используется для явного запрета доступа к службам, защищенным TCP Wrappers?",
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: "TCP Wrappers использует `/etc/hosts.allow` и `/etc/hosts.deny` для контроля доступа."
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какая команда определяет, какие сетевые порты в данный момент открыты и прослушиваются на вашем сервере?",
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', 'Все вышеперечисленные'],
    correct: 3,
    explanation: "`nmap`, `ss` и `netstat` могут использоваться для проверки прослушиваемых сетевых служб.",
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Какая утилита GnuPG используется для симметричного шифрования файла (по паролю)?",
    options: [
      'gpg --gen-key',
      'gpg -c file',
      'gpg --encrypt file',
      'gpg --sign file'
    ],
    correct: 1,
    explanation: "Опция `-c` (symmetric) шифрует файл, запрашивая кодовую фразу вручную."
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Как вывести список всех публичных ключей в вашем связке ключей (keyring) GPG?",
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: "`gpg --list-keys` (или `gpg -k`) отображает открытые ключи в локальном хранилище.",
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Какую проблему безопасности решают 'теневые' (shadow) пароли по сравнению со старыми файлами /etc/passwd?",
    options: [
      "Они предотвращают множественный вход пользователей",
      "Они перемещают зашифрованные хеши паролей в файл, доступный только root",
      "Они автоматически навязывают сложные пароли",
      "Они шифруют само имя пользователя"
    ],
    correct: 1,
    explanation: "/etc/passwd доступен для чтения всем, а /etc/shadow — только root, что защищает хеши от офлайн-атак по подбору паролей."
  },

  // ─── 110.3 Настройка безопасности на уровне пользователя (7 вопросов) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Каков эффект настройки `PermitRootLogin no` в файле sshd_config?",
    options: [
      "Запрещает любому пользователю входить в систему как root через SSH",
      "Требует специальный пароль для пользователя root",
      "Разрешает доступ root только через публичные ключи",
      "Полностью отключает учетную запись root в системе"
    ],
    correct: 0,
    explanation: "Эта директива предотвращает атаки перебором на учетную запись root через сеть."
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какова цель команды `ssh-agent`?",
    options: [
      "Шифрование всего жесткого диска",
      "Хранение расшифрованных приватных ключей в памяти, чтобы не вводить пароль при каждом входе",
      "Генерация новой пары SSH-ключей",
      "Мониторинг неудачных попыток входа по SSH"
    ],
    correct: 1,
    explanation: "SSH-агент удерживает ключи в памяти на протяжении сеанса пользователя."
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Какой инструмент используется для генерации новой пары открытого/закрытого ключей SSH?",
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: "`ssh-keygen` — стандартный инструмент для создания ключей аутентификации SSH.",
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Где обычно хранится открытый ключ пользователя на удаленном сервере для входа без пароля?",
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: "Файл `authorized_keys` содержит все открытые ключи, которым разрешен вход под данным пользователем.",
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какое имя файла по умолчанию используется для приватного RSA-ключа пользователя?",
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: "`id_rsa` — стандартное имя приватной части пары ключей RSA.",
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Какая команда используется для легкого копирования вашего публичного ключа SSH на удаленный сервер?",
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: "`ssh-copy-id` управляет подключением и добавляет ваш публичный ключ в удаленный файл authorized_keys.",
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Какой параметр в sshd_config должен быть установлен в `no`, чтобы разрешить ТОЛЬКО аутентификацию по ключам?",
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: "Установка `PasswordAuthentication no` отключает вход по паролю, делая ключи единственным вариантом."
  },
];
