// LPIC-1 102 Quiz Pool — German — Topic 106 (Desktop)

export const lpic1_102_topic2Quizzes_de = [
  // ─── 106.1 X11 installieren und konfigurieren (8 Fragen) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Softwarekomponente in der X11-Architektur ist für die Verwaltung der Anzeigehardware, der Maus und der Tastatur verantwortlich?',
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: 'Der X-Server interagiert direkt mit der lokalen Hardware.'
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Umgebungsvariable wird von X11-Programmen verwendet, um zu wissen, welcher Bildschirm und welcher Server für die grafische Ausgabe verwendet werden sollen?',
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: 'Die Variable DISPLAY (z. B. :0.0) weist den Client auf den richtigen X-Server hin.'
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der moderne Ersatz für das X Window System, der einfacher und sicherer sein soll?',
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: 'Wayland ist der moderne Nachfolger von X11 auf vielen Linux-Distributionen.'
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'In welchem Verzeichnis werden moderne X11-Konfigurations-Snippets normalerweise gespeichert?',
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: 'Moderne Systeme verwenden /etc/X11/xorg.conf.d/ für modulare Konfigurationen anstatt einer einzigen monolithischen Datei.',
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um einen bestimmten entfernten Benutzer für den Zugriff auf Ihre X-Sitzung mithilfe eines Cookie-basierten Mechanismus zu autorisieren?',
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: '`xauth` verwaltet die .Xauthority-Datei, die MIT-MAGIC-COOKIE-1 Authentifizierungs-Token enthält.',
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Wie können Sie jedem Host erlauben, sich mit Ihrem lokalen X-Server zu verbinden (Hinweis: Dies ist unsicher)?',
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: 'xhost + deaktiviert die gesamte Zugriffskontrolle für den X-Server.'
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welches Protokoll ermöglicht es, grafische Anwendungen auf einem Server auszuführen, sie aber auf einem Client über ein Netzwerk anzuzeigen?',
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: 'XDMCP (X Display Manager Control Protocol) ermöglicht Remote-Login-Sitzungen über das Netzwerk.',
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Welches Tool ermöglicht es Ihnen, die Auflösung und Ausrichtung Ihres Bildschirms in X11 über die Kommandozeile zu ändern?',
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: '`xrandr` (X Resize, Rotate and Reflect) ist das Standard-Utility für die Bildschirmkonfiguration.',
  },

  // ─── 106.2 Grafische Desktops (6 Fragen) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welche Komponente stellt den grafischen Anmeldebildschirm bereit und startet die Benutzersitzung?',
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: 'Display Manager wie GDM oder LightDM übernehmen die initiale Benutzerauthentifizierung.'
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welches Toolkit wird primär von der KDE Plasma Desktop-Umgebung verwendet?',
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: 'KDE basiert auf dem Qt-Toolkit, während GNOME GTK verwendet.'
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welches der folgenden ist KEINE Linux-Desktop-Umgebung?',
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: 'Apache ist ein Webserver, keine Desktop-Umgebung.',
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was ist die primäre Aufgabe eines Window Managers?',
    options: [
      'Benutzerpasswörter verifizieren',
      'Fenster mit Rahmen, Titeln und Steuerelementen (Minimieren/Maximieren) versehen',
      'Netzwerkverbindungen verwalten',
      'Grafikkartentreiber installieren'
    ],
    correct: 1,
    explanation: 'Window Manager (wie Openbox oder Mutter) verwalten das Erscheinungsbild und die Platzierung von Anwendungsfenstern.',
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welche Technologie ermöglicht es einem Benutzer, auf einen grafischen Desktop auf einem Remote-Server über eine Verbindung mit geringer Bandbreite zuzugreifen?',
    options: ['VNC', 'SSH mit -X', 'RDP', 'Alle oben genannten'],
    correct: 3,
    explanation: 'VNC, RDP und X-Forwarding über SSH sind gängige Methoden für den Remote-Desktop-Zugriff.',
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Spice ist ein Remote-Display-Protokoll, das primär mit welcher Virtualisierungstechnologie verwendet wird?',
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: 'Spice wird intensiv in KVM-Umgebungen eingesetzt, um Hochleistungs-Remote-Zugriff auf VMs zu ermöglichen.',
  },

  // ─── 106.3 Barrierefreiheit (6 Fragen) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welches Bedienungshilfen-Feature ermöglicht es einem Benutzer, Modifikatortasten (wie Strg oder Umschalt) nacheinander zu drücken, anstatt sie gleichzeitig gedrückt zu halten?',
    options: [
      'Tastenverzögerung (Slow Keys)',
      'Einrastfunktion (Sticky Keys)',
      'Anschlagverzögerung (Bounce Keys)',
      'Tastaturmaus (Mouse Keys)'
    ],
    correct: 1,
    explanation: 'Die Einrastfunktion (Sticky Keys) hilft Benutzern, die Schwierigkeiten haben, mehrere Tasten gleichzeitig zu drücken.'
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Screenreader wird in der GNOME-Desktop-Umgebung üblicherweise für die Barrierefreiheit verwendet?',
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: 'Orca ist der Standard-Screenreader und Bildschirmlupe für GNOME.'
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welches Feature ignoriert kurze oder schnell wiederholte Tastendrücke derselben Taste?',
    options: ['Tastenverzögerung', 'Einrastfunktion', 'Anschlagverzögerung', 'Wiederholtasten'],
    correct: 2,
    explanation: 'Anschlagverzögerung (Bounce Keys) ist für Benutzer mit Tremor gedacht, die versehentlich eine Taste mehrmals treffen könnten.',
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Zweck des "Tastenverzögerung" (Slow Keys) Bedienungshilfen-Features?',
    options: [
      'Es verlangsamt den Mauszeiger',
      'Es erfordert, dass eine Taste für eine bestimmte Zeit gedrückt gehalten wird, bevor sie akzeptiert wird',
      'Es liest den Bildschirmtext langsam vor',
      'Es verringert die Bildwiederholfrequenz des Monitors'
    ],
    correct: 1,
    explanation: 'Tastenverzögerung (Slow Keys) hilft, versehentliches Tippen zu verhindern, indem ein längeres Halten der Taste erforderlich ist.',
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Welches Feature ermöglicht die Steuerung des Mauszeigers über den Ziffernblock der Tastatur?',
    options: ['Sticky Mouse', 'Numeric Cursor', 'Tastaturmaus', 'Key Mouse'],
    correct: 2,
    explanation: 'Die Tastaturmaus (Mouse Keys) ermöglicht die Navigation des visuellen Zeigers über die Tastatur.',
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Braille-Zeilen und Bildschirmlupen fallen unter welche Art von Technologien?',
    options: ['Assistive Technologien', 'Visuelle Erweiterungen', 'Hardware-Treiber', 'Kernel-Module'],
    correct: 0,
    explanation: 'Dies sind assistive Technologien (AT), die Benutzern mit körperlichen Einschränkungen helfen, mit dem System zu interagieren.',
  },
];
