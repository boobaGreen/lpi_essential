// LPIC-1 101 Quiz — Topic 3 (Spanish)

export const lpic1_101_topic3QuizzesES = [
  // ─── 103.1 Command Line Basics ───
  {
    id: 'q-lpic1-103-1-001', lessonId: 'lpic1-103-1-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes comandos determina si un nombre dado es un comando integrado del shell, un alias o un comando externo?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'El comando `type` indica exactamente cómo el shell interpreta un nombre (integrado, alias, archivo o función). `which` solo busca archivos ejecutables en $PATH.',
  },
  {
    id: 'q-lpic1-103-1-002', lessonId: 'lpic1-103-1-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué variable de entorno contiene una lista de directorios separados por dos puntos donde el shell busca comandos ejecutables?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'La variable $PATH define los directorios donde el shell busca archivos ejecutables.',
  },
  {
    id: 'q-lpic1-103-1-003', lessonId: 'lpic1-103-1-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se define una variable de shell llamada `MIVAR` con el texto "Hola" para que esté disponible en los procesos hijos?',
    options: [
      'MIVAR="Hola"',
      'set MIVAR="Hola"',
      'export MIVAR="Hola"',
      'env MIVAR="Hola"'
    ],
    correct: 2,
    explanation: 'export crea (o modifica) una variable de entorno que será heredada por todos los procesos hijos creados por el shell actual.',
  },

  // ─── 103.2 Text Filters ───
  {
    id: 'q-lpic1-103-2-001', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra las ÚLTIMAS 10 líneas de un archivo por defecto?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail imprime las últimas 10 líneas de un archivo. Se suele usar con -f para seguir archivos de registro en crecimiento.',
  },
  {
    id: 'q-lpic1-103-2-002', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando extrae el primer campo del archivo /etc/passwd, asumiendo que los campos están separados por dos puntos (":")?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut` extrae secciones de cada línea. `-d:` establece el delimitador en dos puntos y `-f1` selecciona el primer campo.',
  },
  
  // ─── 103.3 File Management ───
  {
    id: 'q-lpic1-103-3-001', lessonId: 'lpic1-103-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando crea un archivo vacío llamado "notas.txt" o actualiza su marca de tiempo si ya existe?',
    options: ['create notas.txt', 'touch notas.txt', 'echo notas.txt', 'mkfile notas.txt'],
    correct: 1,
    explanation: 'touch cambia las marcas de tiempo de los archivos. Si el archivo no existe, se crea vacío.',
  },
  {
    id: 'q-lpic1-103-3-002', lessonId: 'lpic1-103-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando crea un directorio llamado `proyecto` y simultáneamente crea su directorio padre `trabajo` si no existe?',
    options: ['mkdir trabajo/proyecto', 'mkdir -p trabajo/proyecto', 'mkdir --all trabajo/proyecto', 'mkdir -r trabajo/proyecto'],
    correct: 1,
    explanation: 'mkdir -p (--parents) crea directorios intermedios según sea necesario.',
  },

  // ─── 103.4 Redirects and Pipes ───
  {
    id: 'q-lpic1-103-4-001', lessonId: 'lpic1-103-4-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué hace el operador de redirección `>>`?',
    options: [
      'Redirige la salida estándar a un archivo, sobrescribiéndolo',
      'Redirige la entrada estándar desde un archivo',
      'Redirige la salida estándar a un archivo, añadiendo al final (append)',
      'Redirige el error estándar a un archivo'
    ],
    correct: 2,
    explanation: '`>>` añade stdout a un archivo sin eliminar el contenido existente. `>` sobrescribe el archivo.',
  },

  // ─── 103.5 Process Management ───
  {
    id: 'q-lpic1-103-5-001', lessonId: 'lpic1-103-5-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando proporciona una vista dinámica y en tiempo real de los procesos en ejecución en el sistema?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` muestra una lista interactiva de procesos del sistema y uso de recursos.',
  },
  {
    id: 'q-lpic1-103-5-002', lessonId: 'lpic1-103-5-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la señal predeterminada enviada por el comando `kill` si no se especifica ninguna?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` envía SIGTERM (15) por defecto, pidiendo al proceso que termine con gracia.',
  },
]
