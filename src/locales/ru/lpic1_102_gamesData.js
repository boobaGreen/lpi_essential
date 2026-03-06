export const memoryGameData = [
  { command: 'export', description: 'Сделать переменную глобальной' },
  { command: 'alias', description: 'Создать сокращение команды' },
  { command: 'source', description: 'Выполнить скрипт в текущей оболочке' },
  { command: '/etc/skel', description: 'Шаблон для новых пользователей' },
  { command: 'DISPLAY', description: 'Цель графического вывода X11' },
  { command: 'Wayland', description: 'Современная замена X11' },
  { command: 'Orca', description: 'Экранный диктор (Доступность)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Зашифрованные пароли' },
  { command: 'chage', description: 'Управление сроком действия пароля' },
  { command: 'crontab -e', description: 'Редактирование заданий cron' },
  // Topic 108
  { command: 'hwclock', description: 'Управление аппаратными часами' },
  { command: 'journalctl', description: 'Чтение логов systemd' },
  { command: 'logrotate', description: 'Автоматическая ротация логов' },
  { command: 'CUPS', description: 'Система печати' },
  // Topic 109
  { command: 'ip addr', description: 'Просмотр IP-адресов' },
  { command: 'ping', description: 'Проверка доступности' },
  { command: 'dig', description: 'Утилита DNS-запросов' },
  // Topic 110
  { command: 'SUID', description: 'Выполнение с правами владельца' },
  { command: 'visudo', description: 'Безопасная правка sudoers' },
  { command: 'ssh-keygen', description: 'Генерация ключей SSH' },
];

export const trueFalseData = [
  { text: '/etc/skel используется при создании новых пользователей.', answer: true, explanation: 'Верно! Это "скелет" домашнего каталога.', difficulty: 1 },
  { text: 'Shebang #! должен быть в последней строке.', answer: false, explanation: 'Неверно. Он должен быть в самой первой строке.', difficulty: 1 },
  { text: 'X11 поддерживает работу через сеть.', answer: true, explanation: 'Верно. Приложения могут запускаться удаленно.', difficulty: 1 },
  { text: '/etc/passwd содержит пароли в открытом виде.', answer: false, explanation: 'Неверно. Они хранятся в /etc/shadow.', difficulty: 1 },
  { text: 'Порт CUPS по умолчанию — 631.', answer: true, explanation: 'Верно.', difficulty: 1 },
  { text: 'journalctl читает бинарные логи.', answer: true, explanation: 'Верно. Журнал systemd — бинарный.', difficulty: 1 },
];

export const terminalChallengeData = [
  { id: 'tc-ru-1', description: 'Экспортируй переменную VAR со значением 10', prompt: 'export VAR=10', expectedOutput: '', hint: 'Используй export', difficulty: 1 },
  { id: 'tc-ru-2', description: 'Покажи свой UID и группы', prompt: 'id', expectedOutput: '', hint: 'id', difficulty: 1 },
  { id: 'tc-ru-3', description: 'Проверь соединение с google.com', prompt: 'ping google.com', expectedOutput: '', hint: 'ping', difficulty: 1 },
  { id: 'tc-ru-4', description: 'Сгенерируй новую пару SSH ключей', prompt: 'ssh-keygen', expectedOutput: '', hint: 'ssh-keygen', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-ru-1',
    category: 'Конфигурационные файлы',
    question: 'Сопоставьте файл с его ролью:',
    items: [
      { text: '/etc/profile', matches: 'Глобальный Login' },
      { text: '~/.bashrc', matches: 'Пользовательский (интерактивный)' },
      { text: '/etc/skel', matches: 'Шаблон нового пользователя' },
    ],
  },
];

export const fillGapData = [
  { prompt: '_____ VAR="val"', answer: 'export', hint: 'Глобальная переменная', difficulty: 1 },
  { prompt: 'Порт HTTP по умолчанию: _____', answer: '80', hint: 'Число', difficulty: 1 },
  { prompt: 'Файл DNS: /etc/_____.conf', answer: 'resolv', hint: 'resolv', difficulty: 1 },
];
