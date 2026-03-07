// LPIC-1 102 Quiz Pool — Spanish — Topic 106 (Desktop)

export const lpic1_102_topic2Quizzes_es = [
  // ─── 106.1 Instalar y configurar X11 (8 preguntas) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué componente de software en la arquitectura X11 es responsable de gestionar el hardware de pantalla, el ratón y el teclado?',
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: 'El X Server interactúa directamente con el hardware local.'
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué variable de entorno utilizan los programas X11 para saber qué pantalla y servidor usar para la salida gráfica?',
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: 'La variable DISPLAY (por ejemplo, :0.0) apunta al cliente al servidor X correcto.'
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el reemplazo moderno del X Window System, diseñado para ser más simple y seguro?',
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: 'Wayland es el sucesor moderno de X11 en muchas distribuciones de Linux.'
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿En qué directorio se almacenan típicamente los fragmentos de configuración modernos de X11?',
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: 'Los sistemas modernos utilizan /etc/X11/xorg.conf.d/ para una configuración modular en lugar de un único archivo monolítico.',
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando se usa para autorizar a un usuario remoto específico a acceder a su sesión X usando un mecanismo basado en cookies?',
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: '`xauth` gestiona el archivo .Xauthority que contiene tokens de autenticación MIT-MAGIC-COOKIE-1.',
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se puede permitir que cualquier host se conecte a su servidor X local (nota: esto es inseguro)?',
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: 'xhost + desactiva todo el control de acceso del servidor X.'
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué protocolo permite que las aplicaciones gráficas se ejecuten en un servidor pero se muestren en un cliente a través de una red?',
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: 'XDMCP (X Display Manager Control Protocol) permite sesiones de inicio de sesión remoto a través de la red.',
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Qué herramienta permite cambiar la resolución y orientación de su pantalla en X11 desde la línea de comandos?',
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: '`xrandr` (X Resize, Rotate and Reflect) es la utilidad estándar para la configuración de la pantalla.',
  },

  // ─── 106.2 Escritorios gráficos (6 preguntas) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué componente proporciona la pantalla de inicio de sesión gráfica y comienza la sesión del usuario?',
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: 'Los Display Managers como GDM o LightDM gestionan la autenticación inicial del usuario.'
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué kit de herramientas (toolkit) utiliza principalmente el entorno de escritorio KDE Plasma?',
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: 'KDE está construido usando el toolkit Qt, mientras que GNOME usa GTK.'
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál de los siguientes NO es un entorno de escritorio de Linux?',
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: 'Apache es un servidor web, no un entorno de escritorio.',
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la función principal de un Gestor de Ventanas (Window Manager)?',
    options: [
      'Verificar las contraseñas de los usuarios',
      'Proporcionar a las ventanas bordes, títulos y controles (minimizar/maximizar)',
      'Gestionar las conexiones de red',
      'Instalar controladores de tarjeta de vídeo'
    ],
    correct: 1,
    explanation: 'Los Window Managers (como Openbox o Mutter) gestionan la apariencia y colocación de las ventanas de las aplicaciones.',
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué tecnología permite a un usuario acceder a un escritorio gráfico en un servidor remoto a través de una conexión de bajo ancho de banda?',
    options: ['VNC', 'SSH con -X', 'RDP', 'Todas las anteriores'],
    correct: 3,
    explanation: 'VNC, RDP y el reenvío de X a través de SSH son métodos comunes para el acceso remoto al escritorio.',
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Spice es un protocolo de visualización remota utilizado principalmente con qué tecnología de virtualización?',
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: 'Spice se utiliza ampliamente en entornos KVM para proporcionar acceso remoto de alto rendimiento a las máquinas virtuales.',
  },

  // ─── 106.3 Accesibilidad (6 preguntas) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué función de accesibilidad permite a un usuario presionar las teclas modificadoras (como Ctrl o Shift) una por una en lugar de mantenerlas presionadas?',
    options: [
      'Teclas lentas (Slow Keys)',
      'Teclas persistentes (Sticky Keys)',
      'Teclas de rebote (Bounce Keys)',
      'Teclas de ratón (Mouse Keys)'
    ],
    correct: 1,
    explanation: 'Las Sticky Keys ayudan a los usuarios que tienen dificultades para presionar varias teclas simultáneamente.'
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué lector de pantalla se utiliza comúnmente en el entorno de escritorio GNOME para la accesibilidad?',
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: 'Orca es el lector de pantalla y magnificador estándar para GNOME.'
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué función ignora las pulsaciones de teclas breves o las repeticiones rápidas de la misma tecla?',
    options: ['Teclas lentas', 'Teclas persistentes', 'Teclas de rebote', 'Teclas de repetición'],
    correct: 2,
    explanation: 'Las Bounce Keys están diseñadas para usuarios con temblores que podrían golpear accidentalmente una tecla varias veces.',
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el propósito de la función de accesibilidad "Teclas lentas" (Slow Keys)?',
    options: [
      'Ralentiza el cursor del ratón',
      'Requiere que se mantenga presionada una tecla durante un cierto periodo antes de que sea aceptada',
      'Lee el texto de la pantalla lentamente',
      'Disminuye la frecuencia de actualización del monitor'
    ],
    correct: 1,
    explanation: 'Las Slow Keys ayudan a evitar pulsaciones accidentales al requerir una pulsación prolongada.',
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué función permite controlar el puntero del ratón usando el teclado numérico?',
    options: ['Ratón persistente', 'Cursor numérico', 'Teclas de ratón', 'Teclado ratón'],
    correct: 2,
    explanation: 'Las Mouse Keys permiten la navegación por teclado del puntero visual.',
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿En qué categoría de tecnologías se incluyen las pantallas Braille y los magnificadores de pantalla?',
    options: ['Tecnologías de asistencia', 'Mejoras visuales', 'Controladores de hardware', 'Módulos de kernel'],
    correct: 0,
    explanation: 'Se trata de Tecnologías de Asistencia (AT) diseñadas para ayudar a los usuarios con discapacidades a interactuar con el sistema.',
  },
];
