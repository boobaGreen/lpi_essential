// LPIC-1 102 Quiz Pool — Spanish — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_es = [
  // ─── 105.1 Personalizar y usar el entorno shell (10 preguntas) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué archivo se ejecuta cuando un usuario cierra una shell Bash de inicio de sesión?',
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: '~/.bash_logout está diseñado específicamente para tareas de limpieza al salir.'
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué directorio contiene archivos de configuración predeterminados que se copian al hogar de un nuevo usuario?',
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: 'El directorio /etc/skel (skeleton) contiene los archivos ocultos base para nuevos usuarios.'
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la forma correcta de hacer que una variable "MYVAR" sea accesible para los procesos hijos?',
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: 'El comando "export" convierte una variable de shell en una variable de entorno.'
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo debe editarse para definir alias para todos los usuarios en una shell Bash?',
    options: ['~/.bashrc', '/etc/bash.bashrc o /etc/bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: 'Los alias y funciones de todo el sistema suelen colocarse en /etc/bash.bashrc o /etc/bashrc.',
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el propósito del comando `source` (o el operador `.`)?',
    options: [
      'Compilar un script de shell',
      'Ejecutar un script en el entorno de la shell actual sin iniciar una subshell',
      'Descargar un archivo de internet',
      'Reiniciar la shell a su estado predeterminado'
    ],
    correct: 1,
    explanation: '`source` (o `.`) ejecuta un archivo en el contexto actual, permitiendo modificar variables y funciones existentes.',
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué variable contiene la ruta de búsqueda para el comando `unalias`?',
    options: ['PATH', 'ALIAS_PATH', 'La shell no usa una ruta para los alias', 'BASH_ALIASES'],
    correct: 2,
    explanation: 'Los alias se almacenan en la memoria de la shell actual; no hay una ruta de búsqueda en disco.',
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando muestra todas las variables de entorno definidas actualmente?',
    options: ['set', 'env', 'export -p', 'Tanto env como export -p'],
    correct: 3,
    explanation: '`env` muestra las variables exportadas y `export -p` las enumera en un formato de entrada para la shell.',
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Qué archivo es el primero que lee una shell de inicio de sesión Bash para la configuración de todo el sistema?',
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: 'Una shell de inicio de sesión lee primero /etc/profile, que suele llamar a otros archivos en /etc/profile.d/.',
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se elimina una variable de entorno llamada "TEMP_DATA" para el resto de la sesión?',
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: '`unset` elimina una variable o función del entorno de la shell actual.',
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué característica de Bash permite usar `ll` en lugar de escribir `ls -l`?',
    options: ['Función', 'Enlace', 'Alias', 'Redirección'],
    correct: 2,
    explanation: 'Un alias proporciona una forma abreviada de ejecutar comandos largos con banderas específicas.',
  },

  // ─── 105.2 Personalizar o escribir scripts simples (10 preguntas) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'En un script bash, ¿qué secuencia de caracteres indica el intérprete que debe usarse para ejecutar el script?',
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: 'El shebang (#!) al inicio de la primera línea define el intérprete del script.'
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué operador lógico ejecuta el segundo comando solo si el primero falla (devuelve un código de salida distinto de cero)?',
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: 'El operador OR (||) se utiliza para el manejo de errores o la ejecución condicional en caso de fallo.'
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se asigna correctamente la salida del comando "whoami" a una variable llamada "USER"?',
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: '$(comando) realiza la sustitución de comandos en las shells modernas.'
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué variable contiene el número de argumentos pasados a un script de shell?',
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: '$# contiene el recuento de los parámetros posicionales.'
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el código de salida de un comando que ha terminado correctamente?',
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: 'En Unix/Linux, 0 significa éxito; cualquier valor distinto de cero indica un error.'
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se comprueba si un archivo llamado "data.txt" existe dentro de un script de shell?',
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      'Tanto [ -e data.txt ] como [ -f data.txt ] son válidos'
    ],
    correct: 3,
    explanation: '"-e" comprueba la existencia; "-f" comprueba específicamente si es un archivo regular.',
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Qué representa la variable `$?` en los scripts de shell?',
    options: [
      'El PID de la shell actual',
      'El estado de salida del comando ejecutado anteriormente',
      'El primer argumento del script',
      'Un número aleatorio generado por la shell'
    ],
    correct: 1,
    explanation: '$? captura el código de retorno del comando de primer plano más reciente.',
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué estructura de bucle usaría para iterar a través de una lista de nombres de archivo?',
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: 'El bucle `for` es ideal para iterar sobre una lista definida de elementos.',
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'En un script, ¿cómo se accede al segundo argumento que se le ha pasado?',
    options: ['$2', '${2}', 'Tanto $2 como ${2}', '$ARG2'],
    correct: 2,
    explanation: '$2 o ${2} se refiere al segundo parámetro posicional.',
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es la sintaxis correcta para una condición "if" simple en Bash?',
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: 'El `if` de Bash requiere la palabra clave `then`, a menudo en la misma línea tras un punto y coma, y debe terminar con `fi`.',
  },
];
