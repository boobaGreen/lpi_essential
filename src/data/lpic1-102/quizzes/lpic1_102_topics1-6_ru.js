// LPIC-1 102 Quiz Pool — Russian — Topics 1-6 (Consolidated)
export const lpic1_102_topic1Quizzes_ru = [
  {
    topicId: 1,
    question: "Какой файл выполняется при выходе из Bash login shell?",
    options: ["~/.bashrc", "~/.bash_logout", "/etc/bash_exit", "~/.profile"],
    correct: 1,
    explanation: "~/.bash_logout используется для выполнения действий при завершении сеанса (например, очистка экрана)."
  }
];

export const lpic1_102_topic2Quizzes_ru = [
  {
    topicId: 2,
    question: "Какой компонент X11 напрямую взаимодействует с оборудованием (монитор, мышь, клавиатура)?",
    options: ["X Client", "X Server", "Window Manager", "Display Manager"],
    correct: 1,
    explanation: "X Server управляет локальным оборудованием и предоставляет ресурсы клиентам."
  }
];

export const lpic1_102_topic3Quizzes_ru = [
  {
    topicId: 3,
    question: "В каком файле хранятся хеши паролей в современных системах Linux?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/gshadow", "/etc/security"],
    correct: 1,
    explanation: "/etc/shadow содержит зашифрованные пароли и доступен только пользователю root."
  }
];

export const lpic1_102_topic4Quizzes_ru = [
  {
    topicId: 4,
    question: "Какой порт используется по умолчанию для веб-интерфейса CUPS?",
    options: ["80", "443", "631", "9100"],
    correct: 2,
    explanation: "CUPS использует порт 631 для администрирования по протоколу IPP."
  }
];

export const lpic1_102_topic5Quizzes_ru = [
  {
    topicId: 5,
    question: "Какой файл определяет порядок разрешения имен (например, сначала файлы, потом DNS)?",
    options: ["/etc/hosts", "/etc/resolv.conf", "/etc/nsswitch.conf", "/etc/networks"],
    correct: 2,
    explanation: "/etc/nsswitch.conf настраивает источники данных для системных баз."
  }
];

export const lpic1_102_topic6Quizzes_ru = [
  {
    topicId: 6,
    question: "Какая команда рекомендуется для безопасного редактирования файла /etc/sudoers?",
    options: ["nano", "visudo", "sudoedit", "vi"],
    correct: 1,
    explanation: "visudo проверяет синтаксис файла перед сохранением, предотвращая ошибки конфигурации."
  }
];
