// LPIC-1 102 Quiz Pool — Spanish — Topic 106 (Desktop)
export const lpic1_102_topic2Quizzes_es = [
  {
    topicId: 2,
    question: "¿Qué componente de X11 gestiona directamente el hardware (monitor, teclado, ratón)?",
    options: ["X Client", "X Server", "Window Manager", "Display Manager"],
    correct: 1,
    explanation: "El X Server es el encargado de interactuar con el hardware local."
  },
  {
    topicId: 2,
    question: "¿Qué variable de entorno indica dónde se debe enviar la salida gráfica?",
    options: ["XSERVER", "DISPLAY", "SCREEN", "GRAPHICS"],
    correct: 1,
    explanation: "La variable DISPLAY (ej.: :0.0) es fundamental en X11."
  },
  {
    topicId: 2,
    question: "¿Qué tecnología es el sucesor moderno de X11?",
    options: ["Wayland", "Mir", "X12", "GLX"],
    correct: 0,
    explanation: "Wayland es el protocolo moderno que busca reemplazar a X11."
  }
];

// Topic 107 (Admin Tasks)
export const lpic1_102_topic3Quizzes_es = [
  {
    topicId: 3,
    question: "¿En qué archivo se almacenan los hashes de las contraseñas de forma segura?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/gshadow", "/etc/secure"],
    correct: 1,
    explanation: "/etc/shadow contiene las contraseñas cifradas y solo es legible por root."
  },
  {
    topicId: 3,
    question: "¿Qué comando se usa para configurar la expiración de contraseñas de un usuario?",
    options: ["passwd -e", "chage", "usermod -p", "expiry"],
    correct: 1,
    explanation: "chage (change age) gestiona las políticas de expiración."
  }
];

// Topic 108 (Services)
export const lpic1_102_topic4Quizzes_es = [
  {
    topicId: 4,
    question: "¿Qué comando sincroniza el reloj de sistema con el reloj de hardware?",
    options: ["date --sync", "hwclock --systohc", "hwclock --hctosys", "swclock"],
    correct: 1,
    explanation: "--systohc copia del Sistema al Hardware Clock."
  },
  {
    topicId: 4,
    question: "¿Cuál es el puerto predeterminado para la interfaz web de CUPS?",
    options: ["80", "443", "631", "9100"],
    correct: 2,
    explanation: "CUPS usa el puerto 631 para administración web e IPP."
  }
];

// Topic 109 (Networking)
export const lpic1_102_topic5Quizzes_es = [
  {
    topicId: 5,
    question: "¿Qué archivo mapea nombres de host con direcciones IP de forma estática local?",
    options: ["/etc/resolv.conf", "/etc/hosts", "/etc/networks", "/etc/dns"],
    correct: 1,
    explanation: "/etc/hosts tiene prioridad sobre el DNS habitualmente."
  },
  {
    topicId: 5,
    question: "¿Qué comando moderno reemplaza a 'ifconfig'?",
    options: ["ip addr", "netstat -i", "nmcli", "ifup"],
    correct: 0,
    explanation: "El comando 'ip' es el estándar actual en Linux."
  }
];

// Topic 110 (Security)
export const lpic1_102_topic6Quizzes_es = [
  {
    topicId: 6,
    question: "¿Qué comando se recomienda usar para editar /etc/sudoers?",
    options: ["nano", "visudo", "sudoedit", "vi"],
    correct: 1,
    explanation: "visudo verifica la sintaxis antes de guardar el archivo."
  },
  {
    topicId: 6,
    question: "¿Cuál es la función del bit SUID?",
    options: [
      "No permite borrar archivos",
      "Ejecuta el archivo con privilegios del propietario",
      "Cifra el archivo automáticamente",
      "Oculta el archivo a otros usuarios"
    ],
    correct: 1,
    explanation: "SUID (Set User ID) ejecuta programas con los permisos del dueño (ej. root)."
  }
];
// Note: Combined export for brevity, but I will split if needed.
