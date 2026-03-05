export const topic3Quizzes = [
  {
    "lessonId": "3-1",
    "question": "¿Qué algoritmo de compresión generalmente produce los archivos más pequeños?",
    "options": [
      "zip",
      "bzip2",
      "xz",
      "comprimido"
    ],
    "correct": 2,
    "explanation": "xz ofrece la mejor relación de compresión, pero también es la más lenta."
  },
  {
    "lessonId": "3-1",
    "question": "¿Qué comando crea un archivo tar comprimido con gzip?",
    "options": [
      "tar -czf archive.tar.gz dir/",
      "tar -xzf archivo.tar.gz dir/",
      "directorio gzip/",
      "zip -r archivo.tar.gz dir/"
    ],
    "correct": 0,
    "explanation": "tar -czf: c=crear, z=gzip, f=archivo."
  },
  {
    "lessonId": "3-1",
    "question": "¿Qué extensión indica un archivo comprimido con bzip2?",
    "options": [
      ".gz",
      ".bz2",
      ".xz",
      ".cremallera"
    ],
    "correct": 1,
    "explanation": "bzip2 produce archivos con la extensión .bz2."
  },
  {
    "lessonId": "3-1",
    "question": "El indicador -t en tar se utiliza para:",
    "options": [
      "Crear archivo",
      "Extraer archivo",
      "Contenidos de la lista",
      "Integridad de la prueba"
    ],
    "correct": 2,
    "explanation": "tar -tf archive.tar.gz enumera el contenido sin extraerlo."
  },
  {
    "lessonId": "3-1",
    "question": "tar -xjf extrae un archivo comprimido con:",
    "options": [
      "zip",
      "bzip2",
      "xz",
      "lz4"
    ],
    "correct": 1,
    "explanation": "-j indica bzip2. -z indica gzip. -J indica xz."
  },
  {
    "lessonId": "3-1",
    "question": "¿Qué bandera tar indica la compresión xz?",
    "options": [
      "-z",
      "-j",
      "-J",
      "-incógnita"
    ],
    "correct": 2,
    "explanation": "-J indica xz. -z indica gzip. -j indica bzip2."
  },
  {
    "lessonId": "3-1",
    "question": "El comando \"gunzip\" equivale a:",
    "options": [
      "gzip-d",
      "gzip-c",
      "gzip-r",
      "gzip-l"
    ],
    "correct": 0,
    "explanation": "gunzip y gzip -d descomprimen un archivo .gz."
  },
  {
    "lessonId": "3-1",
    "question": "gzip comprime un archivo y:",
    "options": [
      "Mantiene el original",
      "Reemplaza el original con .gz",
      "hacer una copia",
      "Lo mueve a /tmp"
    ],
    "correct": 1,
    "explanation": "gzip reemplaza el archivo original con la versión .gz. Utilice -k para conservar el original."
  },
  {
    "lessonId": "3-1",
    "question": "¿Cuál es más rápido en compresión?",
    "options": [
      "xz",
      "bzip2",
      "zip",
      "lzma"
    ],
    "correct": 2,
    "explanation": "gzip es el más rápido pero se comprime menos. xz es el más lento pero el que más se comprime."
  },
  {
    "lessonId": "3-1",
    "question": "tar sin compresión produce un archivo:",
    "options": [
      ".tar.gz",
      ".alquitrán",
      ".gz",
      ".cremallera"
    ],
    "correct": 1,
    "explanation": "tar sin indicadores de compresión (-z/-j/-J) crea un archivo .tar simple sin comprimir."
  },
  {
    "lessonId": "3-2",
    "question": "¿Qué operador redirige la salida estándar sobrescribiendo el archivo?",
    "options": [
      ">>",
      ">",
      "<",
      "|"
    ],
    "correct": 1,
    "explanation": "> redirige stdout a un archivo, sobrescribiéndolo. >> cuelga."
  },
  {
    "lessonId": "3-2",
    "question": "¿Qué operador redirige stderr?",
    "options": [
      "1>",
      "2>",
      "0>",
      "3>"
    ],
    "correct": 1,
    "explanation": "2> redirige stderr (descriptor de archivo 2)."
  },
  {
    "lessonId": "3-2",
    "question": "¿Qué hace la tubería (|)?",
    "options": [
      "Escribe en un archivo",
      "Conecta la salida estándar de un comando a la entrada estándar del siguiente",
      "Ejecuta dos comandos en paralelo.",
      "Crear un enlace simbólico"
    ],
    "correct": 1,
    "explanation": "La tubería (|) pasa la salida de un comando como entrada al siguiente comando."
  },
  {
    "lessonId": "3-2",
    "question": ">> a diferencia > hace:",
    "options": [
      "Sobrescribe",
      "Se adjunta al archivo",
      "Lee desde el archivo",
      "Eliminar el archivo"
    ],
    "correct": 1,
    "explanation": ">> se agrega al final del archivo sin sobrescribir el contenido existente."
  },
  {
    "lessonId": "3-2",
    "question": "/dev/nulo es:",
    "options": [
      "un disco virtual",
      "Un \"agujero negro\" que lo descarta todo",
      "Un archivo de registro",
      "Un directorio temporal"
    ],
    "correct": 1,
    "explanation": "/dev/null descarta cualquier dato escrito. Útil para eliminar resultados no deseados."
  },
  {
    "lessonId": "3-2",
    "question": "<redirecciones:",
    "options": [
      "stdin de un archivo",
      "salida estándar a un archivo",
      "stderr a un archivo",
      "Nadie"
    ],
    "correct": 0,
    "explanation": "<redireccionar stdin: el comando lee la entrada del archivo especificado."
  },
  {
    "lessonId": "3-2",
    "question": "El comando \"tee\" hace:",
    "options": [
      "Lee de dos archivos",
      "Escribe stdout tanto en la pantalla como en un archivo.",
      "Divide un archivo en dos",
      "Fusiona dos archivos"
    ],
    "correct": 1,
    "explanation": "tee es un \"divisor en T\": muestra la salida en la pantalla y la guarda en un archivo al mismo tiempo."
  },
  {
    "lessonId": "3-2",
    "question": "&> redirecciones:",
    "options": [
      "Sólo salida estándar",
      "Sólo estándar",
      "Tanto stdout como stderr",
      "El fondo"
    ],
    "correct": 2,
    "explanation": "&> redirige tanto stdout (1) como stderr (2) al mismo archivo."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 && cmd2 ejecuta cmd2 solo si:",
    "options": [
      "cmd1 falla",
      "cmd1 tiene éxito (salida 0)",
      "Siempre",
      "Nunca"
    ],
    "correct": 1,
    "explanation": "&& ejecuta el segundo comando solo si el primero tiene el código de salida 0 (éxito)."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 || cmd2 ejecuta cmd2 solo si:",
    "options": [
      "cmd1 es exitoso",
      "cmd1 falla",
      "Siempre",
      "cmd1 no existe"
    ],
    "correct": 1,
    "explanation": "|| ejecuta el segundo comando solo si el primero falla (código de salida ≠ 0)."
  },
  {
    "lessonId": "3-2",
    "question": "xargs convierte:",
    "options": [
      "Archivos en directorios",
      "stdin en argumentos de línea de comando",
      "Texto en números",
      "Comandos escritos"
    ],
    "correct": 1,
    "explanation": "xargs lee desde stdin y construye argumentos para otro comando."
  },
  {
    "lessonId": "3-2",
    "question": "El descriptor de archivo 0 representa:",
    "options": [
      "salida estándar",
      "stderr",
      "entrada estándar",
      "archivos del sistema"
    ],
    "correct": 2,
    "explanation": "0 = stdin (teclado), 1 = stdout (pantalla), 2 = stderr (errores)."
  },
  {
    "lessonId": "3-3",
    "question": "¿Qué opción grep realiza una búsqueda que no distingue entre mayúsculas y minúsculas?",
    "options": [
      "-r",
      "-el",
      "-v",
      "-do"
    ],
    "correct": 1,
    "explanation": "grep -i ignora la distinción entre mayúsculas y minúsculas."
  },
  {
    "lessonId": "3-3",
    "question": "En la expresión regular, ¿qué significa el comodín \".\" ¿significar? ?",
    "options": [
      "Fin de linea",
      "Un punto literal",
      "Cualquier carácter",
      "inicio de linea"
    ],
    "correct": 2,
    "explanation": "El punto (.) en las expresiones regulares coincide con cualquier carácter."
  },
  {
    "lessonId": "3-3",
    "question": "grep -v muestra:",
    "options": [
      "Sólo la primera línea",
      "Las líneas que NO coinciden con el patrón.",
      "El número de ocurrencias",
      "Archivos binarios"
    ],
    "correct": 1,
    "explanation": "-v (invertir) muestra líneas que no coinciden con el patrón."
  },
  {
    "lessonId": "3-3",
    "question": "En la expresión regular, ^ significa:",
    "options": [
      "Fin de linea",
      "cualquier personaje",
      "inicio de linea",
      "Negación"
    ],
    "correct": 2,
    "explanation": "^ (carácter) indica el comienzo de la línea en una expresión regular."
  },
  {
    "lessonId": "3-3",
    "question": "$ en una expresión regular significa:",
    "options": [
      "Variable",
      "Fin de linea",
      "inicio de linea",
      "dólar literal"
    ],
    "correct": 1,
    "explanation": "$ indica el final de la línea en expresiones regulares."
  },
  {
    "lessonId": "3-3",
    "question": "cut -d: -f1 /etc/passwd extrae:",
    "options": [
      "El archivo completo",
      "El primer campo (nombre de usuario)",
      "la ultima linea",
      "la primera linea"
    ],
    "correct": 1,
    "explanation": "-d: use: como delimitador, -f1 selecciona el primer campo."
  },
  {
    "lessonId": "3-3",
    "question": "El comando \"sort -n\" ordena:",
    "options": [
      "Alfabéticamente",
      "Numéricamente",
      "Por fecha",
      "Casualmente"
    ],
    "correct": 1,
    "explanation": "-n ordena por valor numérico, no alfabético."
  },
  {
    "lessonId": "3-3",
    "question": "uniq funciona correctamente sólo en:",
    "options": [
      "Archivos grandes",
      "Filas ya ordenadas",
      "Archivos binarios",
      "cualquier archivo"
    ],
    "correct": 1,
    "explanation": "uniq elimina duplicados sólo si son adyacentes. Utilice ordenar antes de uniq."
  },
  {
    "lessonId": "3-3",
    "question": "wc -l cuenta:",
    "options": [
      "las palabras",
      "los personajes",
      "las lineas",
      "los archivos"
    ],
    "correct": 2,
    "explanation": "wc -l cuenta líneas. -w cuenta palabras, -c cuenta bytes."
  },
  {
    "lessonId": "3-3",
    "question": "cabeza -n 5 muestra:",
    "options": [
      "Las últimas 5 líneas",
      "Las primeras 5 líneas",
      "5 líneas aleatorias",
      "Cada 5 lineas"
    ],
    "correct": 1,
    "explanation": "head -n 5 muestra las primeras 5 líneas de un archivo o entrada."
  },
  {
    "lessonId": "3-3",
    "question": "grep -r búsqueda:",
    "options": [
      "Sólo en el archivo especificado",
      "Recursivamente en directorios",
      "Sólo en archivos .txt",
      "en variables"
    ],
    "correct": 1,
    "explanation": "-r (recursivo) busca el patrón en todos los archivos dentro de los directorios."
  },
  {
    "lessonId": "3-3",
    "question": "sed es editor de:",
    "options": [
      "Archivos binarios",
      "Flujo de texto (no interactivo)",
      "Imágenes",
      "Bases de datos"
    ],
    "correct": 1,
    "explanation": "sed (Stream EDitor) edita texto de forma no interactiva."
  },
  {
    "lessonId": "3-4",
    "question": "¿Qué línea debería ser la primera en un script Bash?",
    "options": [
      "#!/bin/bash",
      "#/bin/bash",
      "//bin/bash",
      "!#/bin/bash"
    ],
    "correct": 0,
    "explanation": "#!/bin/bash es el shebang: le dice al sistema qué intérprete usar."
  },
  {
    "lessonId": "3-4",
    "question": "¿Cómo se accede al primer argumento pasado a un script?",
    "options": [
      "$0",
      "$1",
      "$#",
      "$@"
    ],
    "correct": 1,
    "explanation": "$1 es el primer argumento. $0 es el nombre del script. $# es el número de argumentos."
  },
  {
    "lessonId": "3-4",
    "question": "$# contiene:",
    "options": [
      "El nombre del guión.",
      "Todos los temas",
      "El número de temas",
      "El código de salida"
    ],
    "correct": 2,
    "explanation": "$# contiene el número de argumentos pasados ​​al script."
  },
  {
    "lessonId": "3-4",
    "question": "$0 en un script contiene:",
    "options": [
      "el primer tema",
      "El nombre del guión.",
      "el usuario",
      "El PID"
    ],
    "correct": 1,
    "explanation": "$0 es el nombre con el que se invocó el script."
  },
  {
    "lessonId": "3-4",
    "question": "salir 0 significa:",
    "options": [
      "Error",
      "Éxito",
      "Reiniciar",
      "Terminación forzada"
    ],
    "correct": 1,
    "explanation": "La salida 0 indica una salida exitosa. Los valores distintos de 0 indican error."
  },
  {
    "lessonId": "3-4",
    "question": "Para hacer un script ejecutable:",
    "options": [
      "mv script.sh/bin",
      "chmod +x script.sh",
      "ejecutar script.sh",
      "script ejecutivo.sh"
    ],
    "correct": 1,
    "explanation": "chmod +x agrega permiso de ejecución al script."
  },
  {
    "lessonId": "3-4",
    "question": "En un if bash, la sintaxis es:",
    "options": [
      "si (continuo) {}",
      "si [cond]; entonces...fi",
      "si cond: ... final",
      "si {cond} hace... hecho"
    ],
    "correct": 1,
    "explanation": "La sintaxis correcta es: si [condición]; entonces...fi"
  },
  {
    "lessonId": "3-4",
    "question": "El bucle for en bash:",
    "options": [
      "para yo en la lista; hacer... hecho",
      "para (yo en la lista) {}",
      "para cada uno enumero el final",
      "para i = lista; fin"
    ],
    "correct": 0,
    "explanation": "para variable en la lista; Doy órdenes; hecho"
  },
  {
    "lessonId": "3-4",
    "question": "$@ representa:",
    "options": [
      "Todos los argumentos como cadenas separadas",
      "El número de temas",
      "El PID",
      "El código de salida"
    ],
    "correct": 0,
    "explanation": "$@ se expande a todos los argumentos pasados, cada uno como una cadena separada."
  },
  {
    "lessonId": "3-4",
    "question": "La prueba [-f archivo] comprueba si:",
    "options": [
      "El archivo es un directorio.",
      "El archivo existe y es un archivo normal.",
      "El archivo esta vacio",
      "El archivo es ejecutable"
    ],
    "correct": 1,
    "explanation": "-f comprueba que la ruta existe y que es un archivo normal (no un directorio/enlace)."
  },
  {
    "lessonId": "3-4",
    "question": "¿Qué prueba comprueba si existe un directorio?",
    "options": [
      "[-f directorio]",
      "[-d directorio]",
      "[-e dir]",
      "[-r directorio]"
    ],
    "correct": 1,
    "explanation": "-d comprueba que la ruta existe y es un directorio."
  },
  {
    "lessonId": "3-4",
    "question": "# en un script bash indica:",
    "options": [
      "Un comando raíz",
      "un comentario",
      "una directiva",
      "un error"
    ],
    "correct": 1,
    "explanation": "# inicia un comentario: todo lo que sigue se ignora (excepto el tinglado de la primera línea)."
  }
];
