// LPIC-1 102 Lesson Content — Russian
// Содержание всех 20+ уроков экзамена 102

export const lpic1_102_lessonContent_ru = {
  // ──── Topic 105: Оболочки и написание скриптов ────
  'lpic1-102-105-1': {
    title: "Настройка окружения оболочки",
    comic: {
      title: 'Ваш цифровой дом 🏠',
      panels: [
        { emoji: '🎒', text: 'Конфиг-файлы: /etc/profile для всех, ~/.bashrc — ваш личный рюкзак.' },
        { emoji: '🗺️', text: 'PATH: Карта оболочки. Если команды нет в списке, оболочка её не найдет!' },
        { emoji: '🔦', text: 'Alias: ll=\'ls -la\'. Не пишите метры кода, используйте сокращения.' },
        { emoji: '📦', text: '/etc/skel: Аптечка первой помощи. Новые пользователи получают эти базовые файлы.' },
      ]
    },
    keyPoints: [
      { title: 'Конфигурационные файлы', items: ['/etc/profile — Глобальный (Login)', '~/.bashrc — Личный (Interactive)', '/etc/skel/ — Шаблон для новых пользователей'] },
      { title: 'Переменные окружения', items: ['export — Передает переменные дочерним процессам', 'PATH — Где искать программы', 'env / printenv — Список переменных'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Написание простых скриптов",
    comic: {
      title: 'Робот Bash 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash. Говорит ядру: "Эй, используй Bash для этого!"' },
        { emoji: '🏃', text: 'Chmod +x: Без прав на выполнение ваш скрипт — просто камень.' },
        { emoji: '🔀', text: 'If/Then/Else: Мозг скрипта. Принимает решения на основе тестов.' },
        { emoji: '🔄', text: 'Циклы (For/While): Повторяйте задачу 100 раз не уставая.' },
      ]
    },
    keyPoints: [
      { title: 'Структура', items: ['#!/bin/bash — Шебанг', 'chmod +x script.sh — Важно', 'exit [0-255] — Статус выхода (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Привет, $USER"', 
      output: 'Привет, root' 
    },
  },

  // ──── Topic 106: Пользовательские интерфейсы и рабочие столы ────
  'lpic1-102-106-1': { title: "Установка и настройка X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "Рабочие столы", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Специальные возможности", terminal: { prompt: '$ orca --setup', output: '[Меню чтения с экрана]' } },

  // ──── Topic 107: Административные задачи ────
  'lpic1-102-107-1': { title: "Управление учетными записями", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "Автоматизация (Cron и Таймеры)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Локализация", terminal: { prompt: '$ locale', output: 'LANG=ru_RU.UTF-8' } },

  // ──── Topic 108: Основные системные службы ────
  'lpic1-102-108-1': { title: "Синхронизация времени (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Логирование (Rsyslog и Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Почта MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'Очередь почты пуста' } },
  'lpic1-102-108-4': { title: "Печать (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'принтер PDF свободен.' } },

  // ──── Topic 109: Основы сетевых технологий ────
  'lpic1-102-109-1': { title: "Интернет-протоколы (TCP/IP)", keyPoints: [{ title: 'Стек', items: ['IPv4/IPv6 — Адреса', 'TCP/UDP — Транспорт', 'ICMP — Диагностика'] }] },
  'lpic1-102-109-2': { title: "Настройка сети", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Устранение сетевых проблем", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "Настройка DNS", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Безопасность ────
  'lpic1-102-110-1': { title: "Задачи безопасности", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "Безопасность хоста", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Шифрование (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
