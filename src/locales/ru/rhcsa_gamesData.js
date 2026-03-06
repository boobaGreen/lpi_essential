// RHCSA Games Data — Russian
// Used by useGameData() when courseId === 'rhcsa'

export const memoryGameData = [
  // Topic 1
  { command: 'grep -r "pattern" /etc/', description: 'Рекурсивный поиск шаблона в каталоге /etc/' },
  { command: 'tar -czvf archive.tar.gz /dir', description: 'Создает сжатый архив gzip' },
  { command: 'tar -xzvf archive.tar.gz', description: 'Распаковывает архив tar.gz' },
  { command: 'find / -name "*.conf" -type f', description: 'Находит все файлы .conf в системе' },
  { command: 'chmod 755 file', description: 'rwxr-xr-x — владелец выполняет, остальные читают/выполняют' },
  { command: 'chown mario:dev file', description: 'Изменяет владельца и группу файла' },
  { command: 'ln -s /real/src /symbolic/link', description: 'Создает символическую ссылку (Symlink)' },
  { command: 'man -k "keyword"', description: 'Поиск ключевого слова в страницах руководства (man)' },
  // Topic 2
  { command: 'export VAR="value"', description: 'Делает переменную доступной для дочерних процессов' },
  { command: 'RESULT=$(command)', description: 'Захват вывода команды в переменную' },
  { command: '[ -f "$FILE" ]', description: 'Проверяет, указывает ли переменная на существующий файл' },
  { command: '[ -d "$DIR" ]', description: 'Проверяет, указывает ли переменная на существующий каталог' },
  { command: '[ -z "$VAR" ]', description: 'Проверяет, пуста ли строка (длина равна нулю)' },
  { command: 'for f in /etc/*.conf; do echo $f; done', description: 'Перебирает все .conf файлы в /etc/' },
  // Topic 3
  { command: 'systemctl enable --now sshd', description: 'Включает автозапуск и сразу запускает sshd' },
  { command: 'systemctl mask httpd', description: 'Полностью предотвращает запуск службы httpd' },
  { command: 'systemctl set-default multi-user.target', description: 'Устанавливает цель загрузки по умолчанию (CLI)' },
  { command: 'journalctl -u sshd -f', description: 'Отслеживает логи службы sshd в режиме реального времени' },
  { command: 'kill -9 PID', description: 'Отправляет SIGKILL для принудительного завершения процесса' },
  { command: 'renice -n -5 -p PID', description: 'Изменяет приоритет запущенного процесса' },
  // Topic 4
  { command: 'pvcreate /dev/sdb1', description: 'Инициализирует раздел как Физический Том (PV) LVM' },
  { command: 'vgcreate datavg /dev/sdb1', description: 'Создает Группу Томов (VG) из PV' },
  { command: 'lvcreate -L 2G -n datalv datavg', description: 'Создает Логический Том (LV) размером 2GiB' },
  { command: 'lvextend -L +1G -r /dev/vg/lv', description: 'Расширяет LV и автоматически изменяет размер ФС' },
  { command: 'xfs_growfs /mountpoint', description: 'Увеличивает смонтированную файловую систему XFS' },
  // Topic 5
  { command: 'mkfs.xfs /dev/sdb1', description: 'Форматирует раздел с файловой системой XFS' },
  { command: 'cryptsetup luksFormat /dev/sdc1', description: 'Форматирует раздел с шифрованием LUKS' },
  { command: 'cryptsetup open /dev/sdc1 vault', description: 'Открывает контейнер LUKS как /dev/mapper/vault' },
  { command: 'setfacl -m u:mario:rw file', description: 'Добавляет права ACL для пользователя mario' },
  { command: 'getfacl file', description: 'Отображает расширенные записи ACL файла' },
  // Topic 6
  { command: 'dnf install package', description: 'Устанавливает пакет со всеми его зависимостями' },
  { command: 'dnf provides /usr/bin/vim', description: 'Определяет, какой пакет предоставляет файл/команду' },
  { command: 'rpm -qf /usr/bin/passwd', description: 'Определяет пакет, установивший данный файл' },
  { command: 'rpm -ql package', description: 'Выводит список всех файлов, входящих в пакет' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Генерирует конфигурацию GRUB2' },
  // Topic 7
  { command: 'nmcli con mod ens3 ipv4.addresses 192.168.1.100/24', description: 'Устанавливает статический IP для соединения' },
  { command: 'nmcli con up ens3', description: 'Активирует и применяет сетевую конфигурацию' },
  { command: 'firewall-cmd --add-service=http --permanent', description: 'Постоянно открывает порт 80 в брандмауэре' },
  { command: 'firewall-cmd --reload', description: 'Применяет постоянные правила firewalld без перезагрузки' },
  { command: 'ssh-copy-id mario@server', description: 'Копирует открытый ключ SSH на удаленный сервер' },
  // Topic 8
  { command: 'useradd -m -s /bin/bash mario', description: 'Создает пользователя с домашним каталогом и оболочкой bash' },
  { command: 'usermod -aG wheel mario', description: 'Добавляет mario в группу wheel (доступ sudo)' },
  { command: 'chage -M 90 mario', description: 'Устанавливает срок действия пароля 90 дней' },
  { command: 'visudo', description: 'Безопасное редактирование /etc/sudoers с проверкой синтаксиса' },
  { command: 'userdel -r mario', description: 'Удаляет пользователя и его домашний каталог' },
  // Topic 9
  { command: 'getenforce', description: 'Отображает текущий режим SELinux' },
  { command: 'setenforce 0', description: 'Переводит SELinux в разрешающий режим (permissive) временно' },
  { command: 'restorecon -Rv /path', description: 'Восстанавливает контексты SELinux по умолчанию рекурсивно' },
  { command: 'setsebool -P httpd_can_network_connect on', description: 'Включает логическое (boolean) значение SELinux постоянно' },
  { command: 'semanage port -a -t http_port_t -p tcp 8443', description: 'Добавляет порт 8443 к типу http_port_t' },
  // Topic 10
  { command: 'podman run -d --name web -p 8080:80 nginx', description: 'Запускает контейнер nginx в фоновом режиме на порту 8080' },
  { command: 'podman exec -it container bash', description: 'Открывает оболочку bash в работающем контейнере' },
  { command: 'podman build -t myapp:1.0 .', description: 'Собирает образ из Containerfile в текущем каталоге' },
]

export const trueFalseData = [
  // Nivel 1
  { text: 'Файловая система по умолчанию в RHEL9 — это XFS.', answer: true, explanation: 'XFS — файловая система по умолчанию в RHEL7+ из-за ее масштабируемости.', difficulty: 1 },
  { text: '"systemctl enable sshd" запускает службу немедленно.', answer: false, explanation: 'enable настраивает только автозапуск при загрузке. Используйте --now, чтобы запустить ее сразу.', difficulty: 1 },
  { text: 'Файл /etc/fstab управляет ФС, монтируемыми автоматически при загрузке.', answer: true, explanation: 'systemd читает /etc/fstab при загрузке системы.', difficulty: 1 },
  { text: 'Значение "nice" -20 означает наивысший приоритет процессора.', answer: true, explanation: 'Диапазон составляет от -20 (самый высокий/наиболее приоритетный) до +19 (самый низкий).', difficulty: 1 },
  { text: 'Сигнал SIGKILL (9) может быть перехвачен процессом.', answer: false, explanation: 'SIGKILL нельзя перехватить, заблокировать или проигнорировать. Он немедленно завершает процесс.', difficulty: 1 },
  { text: '"pvcreate" создает Логический Том в LVM.', answer: false, explanation: 'pvcreate инициализирует Физический Том (PV). Логические Тома создаются с помощью lvcreate.', difficulty: 1 },
  { text: 'SELinux в режиме "permissive" блокирует нарушения политики.', answer: false, explanation: 'Отклонения только регистрируются (audit), но НЕ блокируются. Только режим enforcing блокирует их.', difficulty: 1 },
  { text: 'Для работы Podman требуется демон (daemon) с правами root.', answer: false, explanation: 'Podman работает без демона (daemonless) и поддерживает запуск контейнеров без прав root (rootless).', difficulty: 1 },
  { text: '"restorecon" восстанавливает исходные контексты файлов SELinux.', answer: true, explanation: 'Он восстанавливает контексты в соответствии с правилами, определенными semanage fcontext.', difficulty: 1 },
  { text: 'UUID устройства изменяется при каждом его монтировании.', answer: false, explanation: 'UUID назначается при форматировании файловой системы и никогда не меняется (статичен).', difficulty: 1 },
  // Nivel 2
  { text: '"lvextend -r" автоматически изменяет размер ФС после расширения LV.', answer: true, explanation: 'Опция -r (resize) автоматически вызывает resize2fs или xfs_growfs.', difficulty: 2 },
  { text: '"firewall-cmd --add-port=8080/tcp" без --permanent сохраняется после перезагрузки.', answer: false, explanation: 'Без --permanent правило временно (runtime) и теряется после reload или перезагрузки.', difficulty: 2 },
  { text: '"semanage fcontext" немедленно применяет контекст к файлам.', answer: false, explanation: 'semanage обновляет только БД политик. Для применения изменений нужен "restorecon".', difficulty: 2 },
  { text: '"usermod -G wheel mario" (без -a) сохраняет текущие группы пользователя mario.', answer: false, explanation: 'Без -a флаг -G ЗАМЕНЯЕТ все группы. Используйте -aG для добавления.', difficulty: 2 },
  { text: 'XFS поддерживает уменьшение размера файловой системы (shrink).', answer: false, explanation: 'XFS может ТОЛЬКО расти (expand). Она не поддерживает уменьшение размера.', difficulty: 2 },
  { text: 'Команда setsebool без параметра -P вносит изменения временно.', answer: true, explanation: 'Да, отсутствие -P делает изменения временными, и они потеряются при перезагрузке.', difficulty: 2 },
  { text: 'Метка ":z" в Podman volumes означает, что контекст SELinux является общим (shareable) между контейнерами.', answer: true, explanation: 'Метка :z означает общую (shareable) ФС. Метка :Z означает частную (private) ФС.', difficulty: 2 },
  { text: '"journalctl -b" показывает логи только с момента текущей загрузки системы.', answer: true, explanation: 'Опция -b фильтрует вывод, показывая логи только для текущей сессии (от последней загрузки).', difficulty: 2 },
  // Nivel 3
  // В русском, если переводим дальше, пусть будет просто "Level 3". Я оставлю // Nivel 3 для единообразия.
  { text: 'После сброса пароля root (rd.break) обязательно использование "touch /.autorelabel".', answer: true, explanation: 'Изменение /etc/shadow без загруженных политик SELinux требует перемаркировки всей ФС при следующей загрузке.', difficulty: 3 },
  { text: 'Опция монтирования "nosuid" предотвращает выполнение любых бинарных файлов.', answer: false, explanation: 'Опция "nosuid" игнорирует биты setuid/setgid. Опция "noexec" блокирует выполнение бинарных файлов.', difficulty: 3 },
  { text: 'Значение pass=2 в /etc/fstab означает, что ФС проверяется приоритетно, как и корневая ФС (root).', answer: false, explanation: 'pass=1 зарезервировано для root (наивысший приоритет). pass=2 означает, что ФС проверяется после root.', difficulty: 3 },
  { text: '"systemctl daemon-reload" требуется выполнять после изменения любого unit-сценария systemd.', answer: true, explanation: 'systemd кэширует конфигурации; daemon-reload заставляет его перечитать конфигурации с диска.', difficulty: 3 },
  { text: '"semanage port -a" применяет изменения порта не требуя перезагрузки SELinux или всего сервера.', answer: true, explanation: 'semanage динамически обновляет базу данных политики и применяет изменения на лету (on-the-fly).', difficulty: 3 },
  { text: 'Команда переименования/перемещения "mv" сохраняет исходный контекст SELinux файла.', answer: true, explanation: 'Да, в отличие от cp (которая генерирует контекст целевого каталога), mv перемещает файл с его исходной меткой, что может вызвать ошибки в целевой директории.', difficulty: 3 },
]

export const fillGapData = [
  // Difficulty 1
  { prompt: 'systemctl _____ sshd', answer: 'enable --now', hint: 'включить в автозагрузку и сразу старт', difficulty: 1 },
  { prompt: 'dnf _____ httpd', answer: 'install', hint: 'установка пакета', difficulty: 1 },
  { prompt: 'useradd -m -s /bin/bash _____', answer: 'mario', hint: 'имя пользователя', difficulty: 1 },
  { prompt: 'pvcreate _____', answer: '/dev/sdb1', hint: 'имя/путь раздела', difficulty: 1 },
  { prompt: 'getenforce', answer: 'getenforce', hint: 'команда для вывода текущего статуса SELinux', difficulty: 1 },
  { prompt: 'firewall-cmd --add-service=http _____', answer: '--permanent', hint: 'сделать правило firewalld постоянным', difficulty: 1 },
  { prompt: 'podman _____ -it ubi9 /bin/bash', answer: 'run', hint: 'переключатель запуска контейнера', difficulty: 1 },
  { prompt: 'tar -czvf backup.tar.gz _____', answer: '/etc/ssh/', hint: 'каталог для сжатия', difficulty: 1 },
  { prompt: 'passwd _____', answer: 'mario', hint: 'целевой пользователь для смены пароля', difficulty: 1 },
  { prompt: 'systemctl _____ httpd', answer: 'status', hint: 'команда для обзора рабочих состояний сервиса', difficulty: 1 },
  // Difficulty 2
  { prompt: 'vgcreate datavg _____', answer: '/dev/sdb1', hint: 'Физический диск (Volume), который добавляется в VG', difficulty: 2 },
  { prompt: 'lvcreate _____ 2G -n datalv datavg', answer: '-L', hint: 'Опция для точного размера Volume Logical', difficulty: 2 },
  { prompt: 'lvextend -L +1G _____ /dev/datavg/datalv', answer: '-r', hint: 'Флаг авто-расширения файловой системы', difficulty: 2 },
  { prompt: 'setenforce _____', answer: '0', hint: 'Переключить SELinux в permissive', difficulty: 2 },
  { prompt: 'usermod _____ wheel mario', answer: '-aG', hint: 'Добавление (append) пользователя к дополнительной группе', difficulty: 2 },
  { prompt: 'chage _____ 90 mario', answer: '-M', hint: 'Опция максимальной (Max) валидности пароля, дней', difficulty: 2 },
  { prompt: 'firewall-cmd _____', answer: '--reload', hint: 'мягкая загрузка (перезагрузка) правил межсетевого экрана без сброса активных сессий', difficulty: 2 },
  { prompt: 'ssh-keygen -t _____', answer: 'ed25519', hint: 'Современный, наиболее рекомендуемый математический крипто-алгоритм для SSH', difficulty: 2 },
  { prompt: 'cryptsetup _____ /dev/sdc1', answer: 'luksFormat', hint: 'Опция форматирования раздела как крипто-контейнера', difficulty: 2 },
  { prompt: 'grub2-mkconfig -o _____', answer: '/boot/grub2/grub.cfg', hint: 'Стандартный файл вывода конфига grub2', difficulty: 2 },
]

export const dragDropData = [
  {
    id: 'dd-lvm-order',
    category: 'Правильный порядок LVM',
    question: 'Перетащите команды LVM в порядке их логического выполнения:',
    items: [
      { text: 'lvcreate -L 2G -n datalv datavg', order: 3 },
      { text: 'mkfs.xfs /dev/datavg/datalv', order: 4 },
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
    ],
  },
  {
    id: 'dd-selinux-modes',
    category: 'Режимы SELinux',
    question: 'Сопоставьте действие/описание с нужным режимом SELinux:',
    items: [
      { text: 'Блокирует и записывает нарушения политик', matches: 'Enforcing' },
      { text: 'Только записывает в журнал (не блокирует)', matches: 'Permissive' },
      { text: 'Игнорирует фреймворк и не загружает политики', matches: 'Disabled' },
    ],
  },
  {
    id: 'dd-systemd-match',
    category: 'Цели systemd (Targets)',
    question: 'Сопоставьте цель (target) systemd с её эквивалентом runlevel:',
    items: [
      { text: 'multi-user.target', matches: 'Runlevel 3 (CLI, без графики)' },
      { text: 'graphical.target', matches: 'Runlevel 5 (GUI)' },
      { text: 'rescue.target', matches: 'Runlevel 1 (Однопользовательский режим)' },
    ],
  },
  {
    id: 'dd-firewall-cmds',
    category: 'Типы правил брандмауэра',
    question: 'Классифицируйте команды как Временные (runtime) или Постоянные:',
    items: [
      { text: 'firewall-cmd --add-service=http', category: 'Временное' },
      { text: 'firewall-cmd --add-service=http --permanent', category: 'Постоянное' },
      { text: 'firewall-cmd --add-port=8080/tcp', category: 'Временное' },
      { text: 'firewall-cmd --add-port=8080/tcp --permanent', category: 'Постоянное' },
    ],
  },
]

export const terminalChallengeData = [
  { id: 'tc-rhcsa-1', description: 'Отображает текущий режим SELinux', prompt: 'getenforce', expectedOutput: 'Enforcing', hint: 'getenforce команда', difficulty: 1 },
  { id: 'tc-rhcsa-2', description: 'Отображает текущий target загрузки.', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'get-default флаг от сисадмина', difficulty: 1 },
  { id: 'tc-rhcsa-3', description: 'Список блочных хранилищ дисков.', prompt: 'lsblk', expectedOutput: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS', hint: 'Списочник блочного блока', difficulty: 1 },
  { id: 'tc-rhcsa-4', description: 'Источник пакета vim repo.', prompt: 'dnf provides */vim', expectedOutput: 'vim-enhanced', hint: 'Какой rpm provides', difficulty: 2 },
  { id: 'tc-rhcsa-5', description: 'Who did install passwd binary?', prompt: 'rpm -qf /usr/bin/passwd', expectedOutput: 'passwd-', hint: 'Квери файла в rpm db', difficulty: 1 },
  { id: 'tc-rhcsa-8', description: 'Точки монтирования и размеры в удобном виде mb', prompt: 'df -Th', expectedOutput: 'Filesystem', hint: 'Disk Free человеко-читаемый и типом fs', difficulty: 1 },
  { id: 'tc-rhcsa-9', description: 'Network devices IP listing config', prompt: 'nmcli connection show', expectedOutput: 'NAME', hint: 'Network Manager CLI show devices', difficulty: 2 },
  { id: 'tc-rhcsa-10', description: 'Podman listing the background tasks', prompt: 'podman ps', expectedOutput: 'CONTAINER ID', hint: 'Process status from podman scope', difficulty: 1 },
]
