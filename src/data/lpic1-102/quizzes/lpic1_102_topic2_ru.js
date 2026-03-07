// LPIC-1 102 Quiz Pool — Russian — Topic 106 (Пользовательские интерфейсы и рабочие столы)

export const lpic1_102_topic2Quizzes_ru = [
  // ─── 106.1 Установка и настройка X11 (8 вопросов) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Какой программный компонент в архитектуре X11 отвечает за управление оборудованием дисплея, а также мышью и клавиатурой?",
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: "X Server напрямую взаимодействует с локальным оборудованием."
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Какая переменная окружения используется программами X11, чтобы узнать, какой экран и какой сервер использовать для графического вывода?",
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: "Переменная DISPLAY (например, :0.0) указывает клиенту на правильный X Server."
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Что является современной заменой системы X Window, разработанной для обеспечения большей простоты и безопасности?",
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: "Wayland является современным преемником X11 во многих дистрибутивах Linux."
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "В каком каталоге обычно хранятся современные фрагменты конфигурации X11?",
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: "Современные системы используют /etc/X11/xorg.conf.d/ для модульной конфигурации вместо одного монолитного файла.",
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какая команда используется для разрешения конкретному удаленному пользователю доступа к вашей X-сессии с использованием механизма на основе куки?",
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: "`xauth` управляет файлом .Xauthority, содержащим токены аутентификации MIT-MAGIC-COOKIE-1.",
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Как разрешить любому хосту подключаться к вашему локальному X-серверу (предупреждение: это небезопасно)?",
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: "xhost + отключает весь контроль доступа для X-сервера."
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какой протокол позволяет запускать графические приложения на сервере, но отображать их на клиенте через сеть?",
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: "XDMCP (X Display Manager Control Protocol) позволяет проводить сеансы удаленного входа через сеть.",
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "Какой инструмент позволяет изменять разрешение и ориентацию экрана в X11 через командную строку?",
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: "`xrandr` (X Resize, Rotate and Reflect) — стандартная утилита для настройки экранов.",
  },

  // ─── 106.2 Графические рабочие столы (6 вопросов) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Какой компонент предоставляет графический экран входа в систему и запускает сеанс пользователя?",
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: "Менеджеры дисплеев, такие как GDM или LightDM, управляют первоначальной аутентификацией пользователя."
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Какой инструментарий (toolkit) в основном используется средой рабочего стола KDE Plasma?",
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: "KDE построен на инструментарии Qt, тогда как GNOME использует GTK."
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Что из перечисленного НЕ является средой рабочего стола Linux?",
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: "Apache — это веб-сервер, а не среда рабочего стола.",
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какова основная задача оконного менеджера (Window Manager)?",
    options: [
      'Проверка паролей пользователей',
      'Предоставление рамок окон, заголовков и элементов управления (свернуть/развернуть)',
      'Управление сетевыми подключениями',
      'Установка драйверов видеокарт'
    ],
    correct: 1,
    explanation: "Оконные менеджеры (например, Openbox или Mutter) управляют внешним видом и размещением окон приложений.",
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какая технология позволяет пользователю получить доступ к графическому рабочему столу на удаленном сервере через соединение с низкой пропускной способностью?",
    options: ['VNC', 'SSH с -X', 'RDP', 'Все вышеперечисленное'],
    correct: 3,
    explanation: "VNC, RDP и перенаправление X через SSH являются распространенными методами удаленного доступа к рабочему столу.",
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Spice — это протокол удаленного отображения, в основном используемый с какой технологией виртуализации?",
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: "Spice активно используется в средах KVM для обеспечения высокопроизводительного удаленного доступа к виртуальным машинам.",
  },

  // ─── 106.3 Специальные возможности (6 вопросов) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Какая функция специальных возможностей позволяет пользователю нажимать клавиши-модификаторы (например, Ctrl или Shift) последовательно, а не одновременно?",
    options: [
      'Медленные клавиши (Slow Keys)',
      'Залипание клавиш (Sticky Keys)',
      'Упругие клавиши (Bounce Keys)',
      'Клавиши мыши (Mouse Keys)'
    ],
    correct: 1,
    explanation: "Залипание клавиш помогает пользователям, которым трудно нажимать несколько клавиш одновременно."
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Какая программа экранного диктора обычно используется в среде GNOME для обеспечения специальных возможностей?",
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: "Orca — стандартный экранный диктор и увеличитель для GNOME."
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какая функция игнорирует кратковременные или быстрые повторные нажатия одной и той же клавиши?",
    options: ['Медленные клавиши', 'Залипание клавиш', 'Упругие клавиши', 'Клавиши повтора'],
    correct: 2,
    explanation: "Упругие клавиши (Bounce Keys) предназначены для пользователей с тремором, которые могут случайно нажать клавишу несколько раз.",
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какова цель функции 'Медленные клавиши' (Slow Keys)?",
    options: [
      'Она замедляет указатель мыши',
      'Она требует, чтобы клавиша удерживалась нажатой определенное время до того, как нажатие будет принято',
      'Она медленно читает текст на экране',
      'Она снижает частоту обновления монитора'
    ],
    correct: 1,
    explanation: "Медленные клавиши помогают избежать случайных нажатий, требуя более длительного удержания клавиши.",
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Какая функция позволяет управлять указателем мыши с помощью цифровой панели клавиатуры?",
    options: ['Sticky Mouse', 'Numeric Cursor', 'Mouse Keys (Клавиши мыши)', 'Key Mouse'],
    correct: 2,
    explanation: "Mouse Keys позволяют управлять визуальным указателем с помощью клавиатуры.",
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "К какому типу технологий относятся брайлевские терминалы и экранные лупы?",
    options: ['Ассистивные технологии', 'Визуальные расширения', 'Драйверы оборудования', 'Модули ядра'],
    correct: 0,
    explanation: "Это ассистивные (вспомогательные) технологии (AT), которые помогают пользователям с физическими ограничениями взаимодействовать с системой.",
  },
];
