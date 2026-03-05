export const topic3Extended = {
  "3-1": {
    "title": "Archivado y compresión",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗜️",
        "text": "Compresión versus almacenamiento"
      },
      {
        "type": "paragraph",
        "text": "El archivado y la compresión son dos operaciones distintas que a menudo se utilizan juntas. Archivar significa agrupar varios archivos en uno. Comprimir significa reducir el tamaño de los datos. archivo tar, comprimir gzip/bzip2/xz."
      },
      {
        "type": "comparison",
        "left": {
          "title": "📦 Almacenamiento (alquitrán)",
          "items": [
            "Agrupe varios archivos/directorios en uno",
            "NO comprime (tamaño ≈ igual)",
            "Preservar permisos, marcas de tiempo y estructura.",
            "Produce archivos .tar"
          ]
        },
        "right": {
          "title": "🗜️ Compresión (gzip, bzip2, xz)",
          "items": [
            "Reduce el tamaño de UN archivo",
            "Algoritmos matemáticos para eliminar la redundancia.",
            "Cuanto más comprimes, más lento es",
            "Produce .gz, .bz2, .xz"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Comparación de algoritmos"
      },
      {
        "type": "table",
        "headers": [
          "Algoritmo",
          "Extensión",
          "Velocidad",
          "Compresión",
          "Dominio",
          "Descompresión"
        ],
        "rows": [
          [
            "zip",
            ".gz",
            "⚡ Rápido",
            "⭐⭐⭐",
            "archivos gzip",
            "archivo gunzip.gz"
          ],
          [
            "bzip2",
            ".bz2",
            "🐌 Medio",
            "⭐⭐⭐⭐",
            "archivos bzip2",
            "archivo bunzip2.bz2"
          ],
          [
            "xz",
            ".xz",
            "🐢 Lento",
            "⭐⭐⭐⭐⭐",
            "archivos xz",
            "archivo unxz.xz"
          ],
          [
            "cremallera",
            ".cremallera",
            "⚡ Rápido",
            "⭐⭐⭐",
            "archivo zip arch.zip",
            "descomprimir arch.zip"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "¿Cuándo usar cuál?",
        "content": "gzip para uso diario (rápido y bueno). xz para distribuir software (compresión máxima). bzip2 está cayendo en desuso a favor de xz."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Banderas de alquitrán: la receta"
      },
      {
        "type": "table",
        "headers": [
          "Banderas",
          "Significado",
          "Mnemotécnico"
        ],
        "rows": [
          [
            "-do",
            "Crear (crear archivo)",
            "C = Crear"
          ],
          [
            "-incógnita",
            "Extracto",
            "X = extraer"
          ],
          [
            "-t",
            "Lista (mostrar contenidos)",
            "T = listaT"
          ],
          [
            "-F",
            "Archivo (especificar nombre)",
            "F = Archivo (¡siempre el último!)"
          ],
          [
            "-z",
            "zip",
            "Z es para Zip"
          ],
          [
            "-j",
            "bzip2",
            "J es para bJip2"
          ],
          [
            "-J",
            "xz",
            "Capital J = XZ (más poderosa)"
          ],
          [
            "-v",
            "Detallado (mostrar progreso)",
            "V = Detallado"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Ejemplos prácticos con alquitrán",
        "prompt": "# Crear archivo comprimido gzip\n$ tar -czf backup.tar.gz /home/user/docs/\n\n# Extraer archivo\n$ tar -xzf copia de seguridad.tar.gz\n\n# Extraer a un directorio específico\n$ tar -xzf copia de seguridad.tar.gz -C /tmp/\n\n# Listar contenidos sin extraer\n$ tar -tzf copia de seguridad.tar.gz\n\n# Crear con xz (compresión máxima)\n$ tar -cJf archive.tar.xz directorio/",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI solicita los indicadores tar para crear (-czf) y extraer (-xzf) y conocer la diferencia entre -z (gzip), -j (bzip2) y -J (xz). Recuerda: gzip es el más utilizado por defecto."
      }
    ]
  },
  "3-2": {
    "title": "E/S y redirección de tuberías",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "0️⃣",
        "text": "Los tres descriptores de archivos estándar"
      },
      {
        "type": "paragraph",
        "text": "Cada proceso de Linux tiene tres canales de E/S abiertos de forma predeterminada. Comprender estos canales es fundamental para la redirección y las canalizaciones."
      },
      {
        "type": "diagram",
        "title": "Flujo de E/S estándar",
        "boxes": [
          {
            "label": "stdin (0)",
            "color": "#10b981",
            "children": [
              "Tastiera (default)",
              "File (<)",
              "Pipe output"
            ]
          },
          {
            "label": "stdout (1)",
            "color": "#3b82f6",
            "children": [
              "Schermo (default)",
              "File (>)",
              "Pipe input"
            ]
          },
          {
            "label": "stderr (2)",
            "color": "#ef4444",
            "children": [
              "Schermo (default)",
              "File (2>)",
              "/dev/null"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "➡️",
        "text": "Operadores de redirección"
      },
      {
        "type": "table",
        "headers": [
          "Operador",
          "Función",
          "Ejemplo"
        ],
        "rows": [
          [
            "> archivos",
            "stdout → archivo (sobrescribir)",
            "ls > lista.txt"
          ],
          [
            ">> archivos",
            "stdout → archivo (añadir)",
            "echo \"nueva línea\" >> log.txt"
          ],
          [
            "< archivo",
            "archivo → entrada estándar",
            "ordenar <números.txt"
          ],
          [
            "2> archivos",
            "stderr → archivo",
            "buscar / -nombre \"x\" 2> errores.txt"
          ],
          [
            "2>&1",
            "stderr → misma salida que stdout",
            "cmd > todo.log 2>&1"
          ],
          [
            "&> archivos",
            "salida estándar + stderr → archivo",
            "cmd &> salida.log"
          ],
          [
            "/desarrollador/nulo",
            "“Agujero negro”: descarta todo",
            "cmd 2>/dev/nulo"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Escenarios de redireccionamiento comunes",
        "prompt": "# Guardar salida del comando\n$ ls -la /etc > lista_etc.txt\n\n# Ignorar errores\n$ buscar / -name \"config\" 2>/dev/null\n\n# Guardar todo (stdout + stderr)\n$ actualización adecuada &> update.log\n\n# Cuélgate de un tronco\n$ echo \"$(fecha): copia de seguridad completada\" >> /var/log/backup.log",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Pipa: el poder de la composición"
      },
      {
        "type": "paragraph",
        "text": "La tubería (|) es el concepto más poderoso de la línea de comando de Unix. Conecta la salida estándar de un comando con la entrada estándar del siguiente, lo que le permite crear canalizaciones complejas a partir de comandos simples."
      },
      {
        "type": "code",
        "title": "Tubería: de lo simple a lo complejo",
        "prompt": "# Cuente cuantos archivos hay en /etc\n$ls /etc | baño -l\n\n# Encuentra los 5 procesos que usan más RAM\n$ps auxiliar | ordenar -k4 -rn | cabeza -5\n\n# Cuente cuantas veces aparece \"error\" en los registros\n$ gato /var/log/syslog | error grep -i | baño -l\n\n# Extraer nombres de usuario únicos que iniciaron sesión\n$último | awk '{imprimir $1}' | ordenar | único -c | ordenar -rn",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Operadores lógicos entre comandos"
      },
      {
        "type": "table",
        "headers": [
          "Operador",
          "Significado",
          "Ejemplo"
        ],
        "rows": [
          [
            "cmd1 && cmd2",
            "Ejecute cmd2 SÓLO si cmd1 tiene éxito (salga 0)",
            "directorio mkdir && directorio cd"
          ],
          [
            "cmd1 || cmd2",
            "Ejecute cmd2 SÓLO si cmd1 falla (salir ≠ 0)",
            "host de ping || eco \"sin conexión\""
          ],
          [
            "cmd1; cmd2",
            "Ejecute cmd2 SIEMPRE, independientemente",
            "fecha ; whoami"
          ],
          [
            "cmd y",
            "Ejecute cmd en segundo plano",
            "dormir 100 y"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Escenario: Automatización de una copia de seguridad",
        "text": "Eres administrador de sistemas y necesitas realizar una copia de seguridad diaria. Con la canalización: tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo \"Copia de seguridad OK\" >> /var/log/backup.log || echo \"ERROR de copia de seguridad\" >> /var/log/backup.log: crea un archivo, guarda el resultado en el registro. Si falla, registre el error."
      }
    ]
  },
  "3-3": {
    "title": "Grep y expresiones regulares",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔎",
        "text": "grep: la navaja suiza del texto"
      },
      {
        "type": "table",
        "headers": [
          "Opción",
          "Función",
          "Ejemplo"
        ],
        "rows": [
          [
            "-el",
            "No distingue entre mayúsculas y minúsculas",
            "grep -i \"error\" log.txt"
          ],
          [
            "-v",
            "Coincidencia inversa (filas que NO coinciden)",
            "grep -v \"^#\" configuración.txt"
          ],
          [
            "-r / -R",
            "Buscar directorios de forma recursiva",
            "grep -r \"TODO\" src/"
          ],
          [
            "-norte",
            "Mostrar número de línea",
            "grep -n programa \"principal\".c"
          ],
          [
            "-do",
            "Cuente las filas encontradas",
            "grep -c \"error\" registro del sistema"
          ],
          [
            "-el",
            "Mostrar solo nombres de archivos",
            "grep -rl \"contraseña\" /etc/"
          ],
          [
            "-w",
            "Emparejar solo palabras completas",
            "grep -w \"es\" el archivo (no \"este\")"
          ],
          [
            "-Y",
            "Expresión regular extendida (egrep)",
            "grep -E registro \"err|advertir\""
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌟",
        "text": "Metacaracteres de expresiones regulares"
      },
      {
        "type": "table",
        "headers": [
          "Metacarácter",
          "Significado",
          "Ejemplo",
          "Fósforo"
        ],
        "rows": [
          [
            ".",
            "Cualquier carácter",
            "Connecticut",
            "gato, corte, cuna"
          ],
          [
            "^",
            "inicio de linea",
            "^Error",
            "Error al principio de la línea."
          ],
          [
            "$",
            "Fin de linea",
            "fin $",
            "el fin"
          ],
          [
            "*",
            "Cero o más que el anterior",
            "abecedario",
            "c a, a b c, a b c"
          ],
          [
            "[ ]",
            "Uno de los personajes del set.",
            "[aeiou]",
            "vocal única"
          ],
          [
            "[^]",
            "Cualquiera excepto los personajes del conjunto.",
            "[^0-9]",
            "no es un numero"
          ],
          [
            "\\",
            "Escape comodín",
            "\\.",
            "Un punto literal"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Ejemplos prácticos con expresiones regulares",
        "prompt": "# Líneas que comienzan con # (comentarios)\n$ grep \"^#\" /etc/ssh/sshd_config\n\n# Líneas vacías\n$ grep \"^$\" archivo.txt\n\n# Direcciones IP (patrón simple)\n$ grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" acceso.log\n\n# NO líneas vacías y NO comentarios\n$ grep -v \"^#\" configuración | grep -v \"^$\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "✂️",
        "text": "Manipulación de texto: el kit de herramientas de poder"
      },
      {
        "type": "table",
        "headers": [
          "Dominio",
          "Función",
          "Ejemplo clave"
        ],
        "rows": [
          [
            "cortar",
            "Extraer columnas/campos",
            "cortar -d: -f1 /etc/contraseña"
          ],
          [
            "clasificar",
            "ordenar las filas",
            "ordenar -n (numérico) -r (inverso)"
          ],
          [
            "único",
            "Eliminar duplicados adyacentes",
            "ordenar archivo | único -c"
          ],
          [
            "baño",
            "Contar líneas, palabras, bytes.",
            "wc -l (líneas) -w (palabras)"
          ],
          [
            "cabeza",
            "Primeras N líneas",
            "cabeza -n 20 archivos"
          ],
          [
            "cola",
            "Últimas N líneas",
            "cola -f syslog (seguir)"
          ],
          [
            "tr",
            "Traduce caracteres",
            "tr 'a-z' 'A-Z' (mayúscula)"
          ],
          [
            "sed",
            "editor de secuencias",
            "archivo sed 's/antiguo/nuevo/g'"
          ],
          [
            "awk",
            "Columnas de proceso",
            "archivo awk '{imprimir $1, $3}'"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI prueba grep con -i, -v, -r y las expresiones regulares básicas (^, $, ., *). También sabes cortar, clasificar, wc y la diferencia entre cabeza y cola."
      }
    ]
  },
  "3-4": {
    "title": "scripts de bash",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Anatomía de un script Bash"
      },
      {
        "type": "code",
        "title": "Estructura básica de un guión.",
        "prompt": "#!/bin/bash\n# Este es un comentario\n# El shebang (primera línea) le dice al sistema qué intérprete usar\n\n#Variables\nNOMBRE=\"LinuxQuest\"\nVERSIÓN=2.0\n\n# Imprimir\necho \"¡Bienvenido a $NAME v$VERSION!\"\necho \"Usuario: $(whoami), Fecha: $(fecha +%F)\"\n\n# Código de salida: 0 = éxito\nsalir 0",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "¡No olvides chmod +x!",
        "content": "Un script no es ejecutable de forma predeterminada. Debe agregar permiso de ejecución: chmod +x script.sh. Luego ejecútelo con ./script.sh (el ./ es necesario si el directorio actual no está en la RUTA)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📥",
        "text": "Variables especiales en scripts"
      },
      {
        "type": "table",
        "headers": [
          "Variable",
          "Contenido",
          "Ejemplo"
        ],
        "rows": [
          [
            "$0",
            "Nombre del guión",
            "./backup.sh → copia de seguridad.sh"
          ],
          [
            "$1, $2,...",
            "Argumentos posicionales",
            "./script.sh hola → $1=hola"
          ],
          [
            "$#",
            "Número de temas",
            "Si llamas con 3 argumentos → $#=3"
          ],
          [
            "$@",
            "Todos los temas (separados)",
            "\"$@\" = \"$1\" \"$2\" \"$3\""
          ],
          [
            "$*",
            "Todos los temas (fusionados)",
            "\"$*\" = \"$1 $2 $3\""
          ],
          [
            "$?",
            "Código de salida último comando",
            "0 = éxito, otro = error"
          ],
          [
            "$$",
            "PID del script actual",
            "Útil para archivos temporales"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Condiciones y ciclos"
      },
      {
        "type": "code",
        "title": "Si-entonces-si no",
        "prompt": "#!/bin/bash\nsi [ -f \"/etc/contraseña\" ]; entonces\n    echo \"¡El archivo existe!\"\nelif [-d \"/etc\"]; entonces\n    echo \"Es un directorio\"\notra cosa\n    eco \"No encontrado\"\nfi",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Prueba",
          "Significado",
          "Tipo"
        ],
        "rows": [
          [
            "[archivo -f]",
            "El archivo existe y es un archivo normal.",
            "Archivo"
          ],
          [
            "[-d directorio]",
            "El directorio existe",
            "Archivo"
          ],
          [
            "[-e ruta]",
            "La ruta existe (cualquier tipo)",
            "Archivo"
          ],
          [
            "[-r archivo]",
            "El archivo es legible",
            "Permisos"
          ],
          [
            "[-x archivo]",
            "El archivo es ejecutable",
            "Permisos"
          ],
          [
            "[ -z \"$var\" ]",
            "La cadena esta vacia",
            "Cadena"
          ],
          [
            "[ \"$a\" = \"$b\" ]",
            "cadenas iguales",
            "Cadena"
          ],
          [
            "[ $a -eq $b ]",
            "Números iguales",
            "Número"
          ],
          [
            "[ $a -lt $b ]",
            "a < b (menor que)",
            "Número"
          ],
          [
            "[ $a -gt $b ]",
            "a > b (mayor que)",
            "Número"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Bucles for y while",
        "prompt": "# Bucle For en una lista\npara archivo en *.txt; hacer\n    echo \"Proceso: $archivo\"\n    wc -l \"$archivo\"\nhecho\n\n# Bucle For con rango numérico\npara i en $(seq 1 10); hacer\n    echo \"Iteración $i\"\nhecho\n\n# Mientras bucle\ncontador=1\nmientras [ $contador -le 5 ]; hacer\n    echo \"Contador: $contador\"\n    contador=$((contador + 1))\nhecho",
        "output": ""
      },
      {
        "type": "story",
        "title": "Escenario: secuencia de comandos de copia de seguridad automática",
        "text": "Cree un script backup.sh que: 1) Verifique si el directorio de respaldo existe (si es -d), 2) Crea un archivo tar.gz con la fecha en el nombre, 3) Cuente los respaldos antiguos y los elimine si hay más de 7 (para + rm), 4) Registra el resultado. ¡Este es el tipo de automatización que todo administrador de sistemas realiza a diario!"
      }
    ]
  }
};
