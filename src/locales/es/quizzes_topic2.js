export const topic2Quizzes = [
  {
    "lessonId": "2-1",
    "question": "¿Qué shell es el predeterminado en la mayoría de las distribuciones de Linux?",
    "options": [
      "zsh",
      "pez",
      "intento",
      "csh"
    ],
    "correct": 2,
    "explanation": "Bash (Bourne Again Shell) es el shell predeterminado en la mayoría de las distribuciones de Linux."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué símbolo indica un usuario root en el mensaje?",
    "options": [
      "$",
      "#",
      "@",
      "!"
    ],
    "correct": 1,
    "explanation": "El símbolo # indica el usuario root, mientras que $ indica un usuario normal."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué hacen las comillas dobles (\")?",
    "options": [
      "Previene cualquier expansión",
      "Permite expansión variable pero no globbing.",
      "No tiene ningún efecto",
      "Ejecutar el contenido como un comando."
    ],
    "correct": 1,
    "explanation": "Las comillas dobles permiten la expansión variable ($VAR) pero evitan el globbing (* y ?)."
  },
  {
    "lessonId": "2-1",
    "question": "Comillas simples (') en bash:",
    "options": [
      "Amplían las variables",
      "Tratan todo como texto literal.",
      "Ejecutan comandos",
      "Son equivalentes a dobles."
    ],
    "correct": 1,
    "explanation": "Las comillas simples tratan todo el contenido como texto literal, sin expansión."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué personaje permite escapar a un solo personaje?",
    "options": [
      "/",
      "~",
      "\\",
      "!"
    ],
    "correct": 2,
    "explanation": "La barra invertida (\\) escapa al siguiente carácter."
  },
  {
    "lessonId": "2-1",
    "question": "El comando \"escribir\" en bash muestra:",
    "options": [
      "El tipo de archivo",
      "Cómo se interpreta un comando",
      "El tipo de sistema de archivos",
      "Los tipos de usuarios"
    ],
    "correct": 1,
    "explanation": "tipo muestra si un comando es un programa integrado, alias, función o externo."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué comando muestra el usuario actual?",
    "options": [
      "OMS",
      "whoami",
      "identificación",
      "usuarios"
    ],
    "correct": 1,
    "explanation": "whoami imprime el nombre del usuario actual."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué archivo define el shell predeterminado de un usuario?",
    "options": [
      "/etc/conchas",
      "/etc/contraseña",
      "/etc/bashrc",
      "/etc/perfil"
    ],
    "correct": 1,
    "explanation": "El último campo de /etc/passwd especifica el shell predeterminado del usuario."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué imprime \"echo $SHELL\"?",
    "options": [
      "El caparazón actual",
      "El shell de inicio de sesión predeterminado",
      "Todas las carcasas instaladas",
      "La versión bash"
    ],
    "correct": 1,
    "explanation": "$SHELL contiene la ruta al shell de inicio de sesión predeterminado del usuario."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué comando muestra información sobre el sistema operativo?",
    "options": [
      "uname -a",
      "información del sistema operativo",
      "información del sistema",
      "información de host"
    ],
    "correct": 0,
    "explanation": "uname -a muestra el kernel, el nombre de host, la arquitectura y otra información del sistema."
  },
  {
    "lessonId": "2-1",
    "question": "La sustitución del comando $(command) es equivalente a:",
    "options": [
      "$(comando)",
      "\"dominio\"",
      "`comando`",
      "{dominio}"
    ],
    "correct": 2,
    "explanation": "Las comillas invertidas `command` y $(command) son equivalentes para la sustitución de comandos."
  },
  {
    "lessonId": "2-1",
    "question": "¿Qué clave permite el autocompletado en bash?",
    "options": [
      "Ingresar",
      "Pestaña",
      "Ctrl+C",
      "ESC"
    ],
    "correct": 1,
    "explanation": "La tecla Tab permite completar automáticamente comandos, archivos y directorios."
  },
  {
    "lessonId": "2-2",
    "question": "¿Qué comando muestra el valor de la variable PATH?",
    "options": [
      "mostrar RUTA",
      "eco $ RUTA",
      "imprimir RUTA",
      "camino del gato"
    ],
    "correct": 1,
    "explanation": "echo $PATH imprime el valor de la variable de entorno PATH."
  },
  {
    "lessonId": "2-2",
    "question": "¿Qué comando hace que una variable local esté disponible para los procesos secundarios?",
    "options": [
      "compartir",
      "exportar",
      "colocar",
      "empujar"
    ],
    "correct": 1,
    "explanation": "export hace que una variable local esté disponible como variable de entorno para procesos secundarios."
  },
  {
    "lessonId": "2-2",
    "question": "¿Cómo se asigna un valor a una variable en bash?",
    "options": [
      "NOMBRE = \"valor\"",
      "NOMBRE=\"valor\"",
      "establecer NOMBRE = \"valor\"",
      "dejar NOMBRE=\"valor\""
    ],
    "correct": 1,
    "explanation": "En bash, las asignaciones NO deben tener espacios alrededor del igual: NOMBRE=\"valor\"."
  },
  {
    "lessonId": "2-2",
    "question": "La variable INICIO contiene:",
    "options": [
      "El directorio raíz /",
      "El directorio de inicio del usuario.",
      "El camino al ataque",
      "El nombre de host"
    ],
    "correct": 1,
    "explanation": "$HOME contiene la ruta al directorio personal del usuario (por ejemplo, /home/usuario)."
  },
  {
    "lessonId": "2-2",
    "question": "El comando \"env\" muestra:",
    "options": [
      "Solo variables locales",
      "Variables ambientales",
      "Los comandos disponibles",
      "variables del sistema"
    ],
    "correct": 1,
    "explanation": "env muestra todas las variables de entorno exportadas."
  },
  {
    "lessonId": "2-2",
    "question": "¿Qué archivo se lee al iniciar una sesión de bash interactiva?",
    "options": [
      "/etc/contraseña",
      "~/.bashrc",
      "/etc/motd",
      "~/.bash_logout"
    ],
    "correct": 1,
    "explanation": "~/.bashrc se lee cada vez que se abre un shell bash interactivo sin inicio de sesión."
  },
  {
    "lessonId": "2-2",
    "question": "¿Cómo se elimina una variable?",
    "options": [
      "eliminar var",
      "eliminar VAR",
      "VAR desarmado",
      "borrar VAR"
    ],
    "correct": 2,
    "explanation": "unset VAR elimina la variable del entorno del shell."
  },
  {
    "lessonId": "2-2",
    "question": "La variable LANG establece:",
    "options": [
      "El lenguaje de programación",
      "El idioma y la localización del sistema.",
      "La distribución del teclado",
      "La red LAN"
    ],
    "correct": 1,
    "explanation": "LANG define el idioma y la localización del sistema (por ejemplo, it_IT.UTF-8)."
  },
  {
    "lessonId": "2-2",
    "question": "La RUTA contiene:",
    "options": [
      "Archivos recientes",
      "Los directorios donde buscar comandos",
      "Contraseñas",
      "Los caminos de la red"
    ],
    "correct": 1,
    "explanation": "PATH es una lista de directorios separados por : donde el shell busca ejecutables."
  },
  {
    "lessonId": "2-2",
    "question": "¿Qué archivo se lee para TODOS los usuarios al iniciar sesión?",
    "options": [
      "~/.bashrc",
      "~/.perfil",
      "/etc/perfil",
      "/etc/bashrc"
    ],
    "correct": 2,
    "explanation": "/etc/profile es el archivo de perfil global leído al iniciar sesión para todos los usuarios."
  },
  {
    "lessonId": "2-2",
    "question": "eco $? espectáculo:",
    "options": [
      "El PID actual",
      "El código de salida del último comando.",
      "El usuario actual",
      "El directorio actual"
    ],
    "correct": 1,
    "explanation": "$? contiene el código de salida del último comando ejecutado (0 = éxito)."
  },
  {
    "lessonId": "2-3",
    "question": "¿Qué comando muestra un manual de comandos de Linux?",
    "options": [
      "comando de ayuda",
      "comando hombre",
      "información de comando",
      "--comando de ayuda"
    ],
    "correct": 1,
    "explanation": "man (manual) muestra la página del manual completa de un comando."
  },
  {
    "lessonId": "2-3",
    "question": "¿Qué comando busca un archivo en el sistema de archivos por su nombre?",
    "options": [
      "buscar",
      "grep",
      "encontrar",
      "aspecto"
    ],
    "correct": 2,
    "explanation": "encontrar búsquedas de archivos y directorios en el sistema de archivos. Ejemplo: buscar / -nombre \"archivo.txt\""
  },
  {
    "lessonId": "2-3",
    "question": "La sección 1 del hombre contiene:",
    "options": [
      "Archivos de configuración",
      "Comandos de usuario",
      "llamadas al sistema",
      "Comandos de administrador"
    ],
    "correct": 1,
    "explanation": "Sección 1 = comandos de usuario. 5 = formatos de archivo. 8 = comandos de administrador."
  },
  {
    "lessonId": "2-3",
    "question": "El comando \"apropos\" hace:",
    "options": [
      "Buscar páginas de manual por palabra clave",
      "Instalar paquetes",
      "Mostrar versión",
      "Listar usuarios"
    ],
    "correct": 0,
    "explanation": "búsquedas apropiadas en descripciones de páginas de manual. Equivalente a man -k."
  },
  {
    "lessonId": "2-3",
    "question": "¿Qué comando muestra dónde se encuentra un ejecutable?",
    "options": [
      "encontrar",
      "localizar",
      "cual",
      "dónde"
    ],
    "correct": 2,
    "explanation": "que muestra la ruta al ejecutable que se ejecutaría (busque en la RUTA)."
  },
  {
    "lessonId": "2-3",
    "question": "\"localizar\" es más rápido que \"buscar\" porque:",
    "options": [
      "Usa menos RAM",
      "Utilice una base de datos previamente completada",
      "esta escrito en c",
      "es un incorporado"
    ],
    "correct": 1,
    "explanation": "localizar busca en una base de datos actualizada por updateb, por lo que es muy rápido."
  },
  {
    "lessonId": "2-3",
    "question": "La sección 5 del hombre contiene:",
    "options": [
      "Comandos de usuario",
      "Juegos",
      "Formatos de archivos y configuración.",
      "Comandos de administrador"
    ],
    "correct": 2,
    "explanation": "La Sección 5 documenta formatos de archivos y archivos de configuración."
  },
  {
    "lessonId": "2-3",
    "question": "buscar /home -tipo f -nombre \"*.txt\" buscar:",
    "options": [
      "directorios .txt",
      "archivo .txt en el hogar",
      "Enlace .txt",
      "Texto de procesos"
    ],
    "correct": 1,
    "explanation": "-type f = archivos normales, -name \"*.txt\" = nombre que termina en .txt."
  },
  {
    "lessonId": "2-3",
    "question": "¿Qué opción de comando muestra una breve ayuda?",
    "options": [
      "--hombre",
      "--información",
      "--ayuda",
      "--doc"
    ],
    "correct": 2,
    "explanation": "Casi todos los comandos admiten --help para obtener ayuda concisa."
  },
  {
    "lessonId": "2-3",
    "question": "El comando \"whatis\" muestra:",
    "options": [
      "tipo de archivo",
      "Breve descripción del comando.",
      "Versión del sistema",
      "directorio actual"
    ],
    "correct": 1,
    "explanation": "whatis muestra la línea de descripción de la página de manual para un comando."
  },
  {
    "lessonId": "2-4",
    "question": "¿En qué directorio se encuentran los archivos de configuración del sistema?",
    "options": [
      "/papelera",
      "/etc",
      "/var",
      "/optar"
    ],
    "correct": 1,
    "explanation": "/etc contiene archivos de configuración del sistema."
  },
  {
    "lessonId": "2-4",
    "question": "¿Qué comando crea un directorio que incluye los directorios principales que faltan?",
    "options": [
      "mkdir-f",
      "mkdir-r",
      "mkdir-p",
      "mkdir-a"
    ],
    "correct": 2,
    "explanation": "mkdir -p crea el directorio y los directorios principales necesarios."
  },
  {
    "lessonId": "2-4",
    "question": "¿Qué patrón global coincide con un solo carácter?",
    "options": [
      "*",
      "?",
      "[]",
      "#"
    ],
    "correct": 1,
    "explanation": "? coincide exactamente con un solo carácter. * coincide con cero o más caracteres."
  },
  {
    "lessonId": "2-4",
    "question": "El directorio /var contiene:",
    "options": [
      "Comandos básicos",
      "Datos variables (registro, spool, correo)",
      "Configuración",
      "Núcleo"
    ],
    "correct": 1,
    "explanation": "/var contiene datos que cambian durante la operación: registro, caché, correo."
  },
  {
    "lessonId": "2-4",
    "question": "El comando \"ls -a\" muestra:",
    "options": [
      "Sólo archivos grandes",
      "Incluso los archivos ocultos (que empiezan con .)",
      "Archivos ordenados por fecha",
      "Sólo archivos ejecutables"
    ],
    "correct": 1,
    "explanation": "-a (todos) también muestra archivos ocultos que comienzan con punto (.)."
  },
  {
    "lessonId": "2-4",
    "question": "\" . \" (punto único) en una ruta indica:",
    "options": [
      "la raiz",
      "El directorio actual",
      "el hogar",
      "Un archivo oculto"
    ],
    "correct": 1,
    "explanation": ". representa el directorio actual. .. representa el directorio principal."
  },
  {
    "lessonId": "2-4",
    "question": "¿Qué directorio contiene la casa de los usuarios?",
    "options": [
      "/raíz",
      "/usuarios",
      "/hogar",
      "/usr"
    ],
    "correct": 2,
    "explanation": "/home contiene los directorios personales de los usuarios normales. /root es el directorio raíz."
  },
  {
    "lessonId": "2-4",
    "question": "El globo [abc] corresponde a:",
    "options": [
      "la cuerda abc",
      "Un solo carácter: a, b o c",
      "cualquier personaje",
      "tres personajes"
    ],
    "correct": 1,
    "explanation": "[abc] coincide con un solo carácter que es a, b o c."
  },
  {
    "lessonId": "2-4",
    "question": "toque nombre de archivo crear:",
    "options": [
      "un directorio",
      "un enlace",
      "Un archivo vacío (o actualizar la marca de tiempo)",
      "un proceso"
    ],
    "correct": 2,
    "explanation": "touch crea un archivo vacío si no existe, o actualiza la marca de tiempo si existe."
  },
  {
    "lessonId": "2-4",
    "question": "/tmp se utiliza para:",
    "options": [
      "Archivos temporales",
      "Archivos del sistema",
      "Copias de seguridad",
      "Configuración"
    ],
    "correct": 0,
    "explanation": "/tmp contiene archivos temporales que se pueden eliminar al reiniciar."
  },
  {
    "lessonId": "2-4",
    "question": "cp -r se utiliza para:",
    "options": [
      "Copiar solo archivos",
      "Copiar directorios recursivamente",
      "Cambiar el nombre de los archivos",
      "Comprimir archivos"
    ],
    "correct": 1,
    "explanation": "cp -r copia recursivamente un directorio y todo su contenido."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl+C en bash:",
    "options": [
      "Cierra el caparazón",
      "Interrumpe el comando actual (SIGINT)",
      "Copiar texto",
      "eliminar la linea"
    ],
    "correct": 1,
    "explanation": "Ctrl+C envía SIGINT al proceso de primer plano, matándolo."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl+D en bash significa:",
    "options": [
      "Fin de entrada (EOF)",
      "Cancelación",
      "una nueva terminal",
      "Finalización del comando"
    ],
    "correct": 0,
    "explanation": "Ctrl+D envía EOF (Fin del archivo), cerrando el shell si no hay entrada."
  },
  {
    "lessonId": "2-2",
    "question": "La variable PS1 controla:",
    "options": [
      "El CAMINO",
      "El indicador de shell",
      "la contraseña",
      "los procesos"
    ],
    "correct": 1,
    "explanation": "PS1 define la apariencia del símbolo del shell (por ejemplo, \\u@\\h:\\w$ )."
  },
  {
    "lessonId": "2-3",
    "question": "La palabra clave man -k es equivalente a:",
    "options": [
      "qué es",
      "a propósito",
      "dónde es",
      "cual"
    ],
    "correct": 1,
    "explanation": "man -k y a propósito buscar descripciones de páginas de manual para palabras clave."
  },
  {
    "lessonId": "2-3",
    "question": "El artículo 8 del hombre contiene:",
    "options": [
      "Comandos de usuario",
      "llamadas al sistema",
      "Juegos",
      "Comandos administrativos"
    ],
    "correct": 3,
    "explanation": "La sección 8 contiene comandos de administración del sistema (por ejemplo, montar, agregar usuario)."
  },
  {
    "lessonId": "2-4",
    "question": "/usr contiene:",
    "options": [
      "Archivos personales de usuario",
      "Programas y bibliotecas instalados.",
      "Archivos temporales",
      "Registros del sistema"
    ],
    "correct": 1,
    "explanation": "/usr (Recursos del sistema Unix) contiene programas, bibliotecas y documentación."
  },
  {
    "lessonId": "2-4",
    "question": "/desarrollo contiene:",
    "options": [
      "Documentación",
      "Archivos de dispositivo",
      "Herramientas de desarrollo",
      "firmware"
    ],
    "correct": 1,
    "explanation": "/dev contiene archivos especiales que representan dispositivos de hardware."
  },
  {
    "lessonId": "2-4",
    "question": "El globo [!abc] corresponde a:",
    "options": [
      "Los personajes a, b, c",
      "Cualquier carácter EXCEPTO a, b, c",
      "La cadena !abc",
      "Sin personajes"
    ],
    "correct": 1,
    "explanation": "[!abc] o [^abc] coincide con un solo carácter que NO es a, b o c."
  },
  {
    "lessonId": "2-4",
    "question": "rm -r se utiliza para:",
    "options": [
      "Cambiar el nombre de los archivos",
      "Eliminar archivos de forma recursiva",
      "Restaurar archivos",
      "Rotar registro"
    ],
    "correct": 1,
    "explanation": "rm -r elimina recursivamente directorios y su contenido."
  },
  {
    "lessonId": "2-4",
    "question": "¿Qué directorio contiene bibliotecas compartidas?",
    "options": [
      "/papelera",
      "/lib",
      "/etc",
      "/fuente"
    ],
    "correct": 1,
    "explanation": "/lib y /lib64 contienen las bibliotecas compartidas que necesitan los programas."
  }
];
