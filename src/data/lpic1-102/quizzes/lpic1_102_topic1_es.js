// LPIC-1 102 Quiz Pool — Spanish — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_es = [
  {
    topicId: 1,
    question: "¿Qué archivo se ejecuta cuando un usuario cierra una shell Bash de inicio de sesión?",
    options: [
      "~/.bashrc",
      "~/.bash_logout",
      "/etc/bash_exit",
      "~/.profile"
    ],
    correct: 1,
    explanation: "~/.bash_logout está diseñado específicamente para tareas de limpieza al salir."
  },
  {
    topicId: 1,
    question: "¿Qué directorio contiene archivos de configuración predeterminados que se copian al hogar de un nuevo usuario?",
    options: [
      "/etc/defaults",
      "/etc/skel",
      "/usr/share/templates",
      "/etc/profile.d"
    ],
    correct: 1,
    explanation: "El directorio /etc/skel (skeleton) contiene los archivos ocultos base para nuevos usuarios."
  },
  {
    topicId: 1,
    question: "¿Cuál es la forma correcta de hacer que una variable 'MYVAR' sea accesible para los procesos hijos?",
    options: [
      "set MYVAR",
      "export MYVAR",
      "env MYVAR",
      "chmod +x MYVAR"
    ],
    correct: 1,
    explanation: "El comando 'export' convierte una variable de shell en una variable de entorno."
  },
  {
    topicId: 1,
    question: "En un script bash, ¿qué secuencia de caracteres indica el intérprete que debe usarse?",
    options: [
      "#!",
      "!!",
      "$$",
      "//"
    ],
    correct: 0,
    explanation: "El shebang (#!) al inicio del archivo define el intérprete."
  },
  {
    topicId: 1,
    question: "¿Qué operador ejecuta el segundo comando solo si el primero falla (código de salida no cero)?",
    options: [
      "&&",
      "||",
      ";",
      "|&"
    ],
    correct: 1,
    explanation: "El operador OR (||) se usa para manejo de errores o ejecución condicional en caso de fallo."
  },
  {
    topicId: 1,
    question: "¿Cómo se asigna correctamente la salida del comando 'whoami' a una variable llamada 'USER'?",
    options: [
      "USER = whoami",
      "USER=$(whoami)",
      "set USER whoami",
      "USER : whoami"
    ],
    correct: 1,
    explanation: "$(comando) realiza la sustitución de comandos."
  }
];
// Note: Keeping it slightly shorter for brevity in this step, but fully functional.
