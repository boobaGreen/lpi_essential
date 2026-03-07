// LPIC-1 101 Quiz — Tema 3: Comandos GNU y Unix (Español)

export const lpic1_101_topic3QuizzesES = [
  // ─── 103.1 Conceptos Básicos de la Línea de Comandos (7 preguntas) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes comandos determina si un nombre dado es un comando integrado del shell, un alias o un comando externo?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'El comando `type` indica exactamente cómo el shell interpreta un nombre (integrado, alias, archivo o función).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué variable de entorno contiene una lista de directorios separados por dos puntos donde el shell busca comandos ejecutables?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'La variable $PATH define los directorios donde el shell busca archivos ejecutables.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando muestra información breve sobre la arquitectura del sistema, la versión del kernel y el nombre del host?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname con el flag -a (all) imprime toda la información del sistema, incluyendo kernel y hardware.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se define una variable de shell llamada `MIVAR` con el texto "Hola" para que esté disponible en los procesos hijos?',
    options: [
      'MIVAR="Hola"',
      'set MIVAR="Hola"',
      'export MIVAR="Hola"',
      'env MIVAR="Hola"'
    ],
    correct: 2,
    explanation: 'export crea una variable de entorno que será heredada por todos los procesos hijos.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es la principal diferencia entre comillas simples (\') y dobles (") en Bash?',
    options: [
      'Las comillas simples permiten expansión de variables ($VAR), las dobles no',
      'Las comillas dobles permiten expansión de variables ($VAR), las simples evitan toda expansión',
      'Las comillas dobles son para números, las simples para cadenas',
      'No hay diferencia'
    ],
    correct: 1,
    explanation: 'Las comillas dobles permiten la expansión de variables, mientras que las simples preservan el valor literal de todos los caracteres.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué atajo de teclado inicia una búsqueda inversa en el historial de comandos de Bash?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R inicia una búsqueda inversa, permitiendo recuperar comandos ejecutados anteriormente.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué logra el comando `!55` en Bash?',
    options: [
      'Mata el proceso con PID 55',
      'Ejecuta el comando número 55 de la lista del historial',
      'Borra el comando número 55 del historial',
      'Ejecuta el comando "55"'
    ],
    correct: 1,
    explanation: 'El símbolo `!` invoca la expansión del historial. `!n` se refiere a la línea de comando n en la lista del historial.',
  },

  // ─── 103.2 Filtros de Texto (6 preguntas) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra las ÚLTIMAS 10 líneas de un archivo por defecto?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail imprime las últimas líneas de un archivo; 10 líneas por defecto.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando lee un archivo y lo muestra prefijando números de línea?',
    options: ['nl', 'wc -l', 'cat -n', 'Tanto nl como cat -n'],
    correct: 3,
    explanation: 'Tanto `nl` (number lines) como `cat -n` prefijan las líneas de salida con números.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'El comando `wc` cuenta ¿qué tres atributos predeterminados de un archivo?',
    options: [
      'Líneas, caracteres, bytes',
      'Oraciones, palabras, caracteres',
      'Líneas, palabras, bytes/caracteres',
      'Líneas, palabras, párrafos'
    ],
    correct: 2,
    explanation: 'wc (word count) muestra el número de líneas, palabras y bytes/caracteres.',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Para eliminar líneas duplicadas consecutivas de un archivo ordenado, ¿qué comando se usa?',
    options: ['sort -u', 'uniq', 'Tanto sort -u como uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` elimina duplicados consecutivos. `sort -u` ordena y elimina duplicados globalmente.',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando extrae el primer campo del archivo /etc/passwd, asumiendo que los campos están separados por dos puntos (":")?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` establece el delimitador en dos puntos, y `-f1` selecciona el primer campo.',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando sed reemplaza completamente la palabra "manzana" con "naranja" en cada aparición en archivo.txt?',
    options: ['sed "r/manzana/naranja/" archivo.txt', 'sed "s/manzana/naranja/g" archivo.txt', 'sed "s/manzana/naranja" archivo.txt', 'sed "sub/manzana/naranja/all" archivo.txt'],
    correct: 1,
    explanation: 'El comando de sustitución `s/patrón/reemplazo/g` reemplaza todas las apariciones en cada línea.',
  },

  // ─── 103.3 Gestión de Archivos (6 preguntas) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando crea un archivo vacío llamado "notas.txt" o actualiza su marca de tiempo si ya existe?',
    options: ['create notas.txt', 'touch notas.txt', 'echo notas.txt', 'mkfile notas.txt'],
    correct: 1,
    explanation: 'touch cambia las marcas de tiempo de los archivos o crea un archivo vacío si no existe.',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando crea un directorio llamado `proyecto` y su padre `trabajo` si no existe?',
    options: ['mkdir trabajo/proyecto', 'mkdir -p trabajo/proyecto', 'mkdir --all trabajo/proyecto', 'mkdir -r trabajo/proyecto'],
    correct: 1,
    explanation: 'mkdir -p (--parents) crea directorios intermedios según sea necesario.',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Desea copiar un directorio completo `/docs` y su contenido a `/backup`. ¿Qué comando usa?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'El flag -r (recursivo) indica a `cp` que copie los directorios junto con su contenido.',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'En el globbing de Bash, ¿qué coincide con el comodín `?`?',
    options: ['Cualquier número de caracteres', 'Exactamente un carácter', 'Cero o un carácter', 'Solo números'],
    correct: 1,
    explanation: 'En el globbing, `?` coincide exactamente con un carácter.',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando busca un archivo en el sistema de archivos en tiempo real?',
    options: ['locate archivo', 'updatedb', 'grep archivo', 'find / -name archivo'],
    correct: 3,
    explanation: '`find` recorre el árbol del sistema de archivos real para localizar archivos.',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando comprime el directorio `/home/usuario` en un solo archivo tar comprimido con gzip?',
    options: [
      'tar -xzvf backup.tar.gz /home/usuario',
      'tar -czvf backup.tar.gz /home/usuario',
      'zip backup.tar.gz /home/usuario',
      'gzip /home/usuario > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` crea (-c) un archivo comprimido con gzip (-z).',
  },

  // ─── 103.4 Redirecciones y Tuberías (4 preguntas) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué hace el operador de redirección `>>`?',
    options: [
      'Redirige stdout a un archivo, sobrescribiéndolo',
      'Redirige stdin desde un archivo',
      'Redirige stdout a un archivo, añadiéndolo al final',
      'Redirige stderr a un archivo'
    ],
    correct: 2,
    explanation: '`>>` añade stdout a un archivo sin eliminar el contenido existente.',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se redirige el error estándar (stderr) a un archivo llamado `error.log`?',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: 'El descriptor de archivo 2 representa stderr; `2>` lo redirige.',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es el efecto de añadir `2>&1` a un comando?',
    options: [
      'Redirige stdout a stderr',
      'Envía tanto stdout como stderr a la misma ubicación',
      'Silencia toda la salida',
      'Ejecuta el comando 2 y luego el comando 1'
    ],
    correct: 1,
    explanation: '`2>&1` redirige stderr a donde sea que apunte actualmente stdout.',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué herramienta lee de la entrada estándar y escribe TANTO en stdout como en uno o más archivos?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` divide la entrada, enviándola tanto a la salida como a un archivo.',
  },

  // ─── 103.5 Gestión de Procesos (5 preguntas) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando proporciona una vista dinámica y en tiempo real de los procesos en ejecución en el sistema?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` muestra una lista interactiva y actualizada de los procesos del sistema.',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la señal predeterminada enviada por el comando `kill` si no se especifica ninguna?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` envía SIGTERM (15) por defecto, solicitando una terminación graciosa.',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Si un proceso ignora un comando kill normal, ¿cómo puede forzar su terminación inmediata?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` envía SIGKILL, que el proceso no puede ignorar.',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué atajo de teclado suspende el trabajo activo en primer plano en una terminal?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z suspende el proceso en primer plano, que luego puede reanudarse o pasarse a segundo plano.',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Cómo se ejecuta un comando para que continúe ejecutándose incluso después de cerrar la terminal?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` hace que un comando sea inmune a la señal de colgado (SIGHUP).',
  },

  // ─── 103.6 Prioridades de Procesos (3 preguntas) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'En Linux, ¿cuál es el rango válido de valores "nice"?',
    options: ['De 0 a 100', 'De -20 a +19', 'De -19 a +20', 'De 1 a 99'],
    correct: 1,
    explanation: 'Los valores nice van desde -20 (máxima prioridad) hasta +19 (mínima prioridad).',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué acción puede realizar un usuario normal (no root) respecto a las prioridades de procesos?',
    options: [
      'Disminuir el valor nice de sus propios procesos',
      'Aumentar el valor nice (disminuir prioridad) de sus propios procesos',
      'Cambiar la prioridad del proceso de cualquier usuario',
      'Establecer el valor nice en -20'
    ],
    correct: 1,
    explanation: 'Los usuarios normales solo pueden aumentar el valor nice (bajar prioridad) de sus propios procesos.',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando inicia un nuevo proceso con una prioridad de planificación ajustada?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` inicia un nuevo proceso con prioridad modificada; `renice` cambia procesos existentes.',
  },

  // ─── 103.7 RegEx (2 preguntas) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'En Expresiones Regulares, ¿qué representa el ancla `^`?',
    options: ['El final de la línea', 'Cualquier grupo de caracteres', 'El inicio de la línea', 'Negación'],
    correct: 2,
    explanation: 'El carácter `^` ancla la coincidencia al inicio de la línea.',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In una expresión regular, ¿qué significa `.*`?',
    options: [
      'Cero o más puntos literales',
      'Un punto literal seguido de un asterisco literal',
      'Cero o más de cualquier carácter',
      'Exactamente un punto'
    ],
    correct: 2,
    explanation: 'El punto coincide con cualquier carácter, y el asterisco con cero o más; juntos coinciden con cualquier cadena.',
  },

  // ─── 103.8 vi/vim (3 preguntas) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Al abrir vi, ¿qué modo está activo por defecto?',
    options: ['Modo de inserción', 'Modo visual', 'Modo normal (comando)', 'Modo Ex'],
    correct: 2,
    explanation: 'vi se abre en modo Normal, donde las pulsaciones de teclado se interpretan como comandos.',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'En el modo Normal de vi, ¿qué hace el comando `dd`?',
    options: ['Borra el carácter actual', 'Borra toda la línea actual', 'Duplica la línea actual', 'Guarda el documento'],
    correct: 1,
    explanation: '`dd` borra (corta) toda la línea actual en vi.',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Cómo se fuerza a vi a salir sin guardar los cambios?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` obliga al editor a salir sin guardar los cambios.',
  },
];
