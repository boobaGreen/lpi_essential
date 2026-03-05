export const topic2Extended = {
  "2-1": {
    "title": "Conceptos básicos de la línea de comandos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🐚",
        "text": "¿Qué es Shell?"
      },
      {
        "type": "paragraph",
        "text": "El shell es un programa que interpreta los comandos del usuario y los pasa al kernel para su ejecución. Es la interfaz de texto entre usted y el sistema operativo. Cada vez que abres una terminal, estás iniciando un shell."
      },
      {
        "type": "table",
        "headers": [
          "Caparazón",
          "Archivo",
          "Características",
          "Distribución"
        ],
        "rows": [
          [
            "Intento",
            "/bin/bash",
            "Scripting más popular y potente, finalización de pestañas",
            "Casi todos ellos"
          ],
          [
            "Zsh",
            "/bin/zsh",
            "Avanzado, complementos (Oh My Zsh), tema personalizable",
            "predeterminado de macOS"
          ],
          [
            "Pez",
            "/usr/bin/pescado",
            "Fácil de usar, resaltado de sintaxis, sugerencias automáticas",
            "Alternativa moderna"
          ],
          [
            "Estrellarse",
            "/bin/dash",
            "Arranque rápido y mínimo POSIX, utilizado por Debian para /bin/sh",
            "Debian/Ubuntu"
          ],
          [
            "sh",
            "/bin/sh",
            "Shell POSIX original, máxima compatibilidad",
            "Todos los sistemas Unix"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI pregunta cuál es el shell predeterminado en la mayoría de las distribuciones: es Bash (Bourne Again Shell). Recuerde también que $SHELL muestra el shell de inicio de sesión, no necesariamente el que está en uso."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💲",
        "text": "El mensaje y sus símbolos"
      },
      {
        "type": "paragraph",
        "text": "El mensaje es la línea que muestra el terminal cuando está listo para recibir comandos. Contiene información útil."
      },
      {
        "type": "code",
        "title": "Anatomía del mensaje",
        "prompt": "usuario@nombredehost:~/documentos$\n│ │ │ │\n│ │ │ └── $ = usuario normal (# = root)\n│ │ └── directorio actual (~ = inicio)\n│ └── nombre de la máquina\n└── nombre de usuario",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "$ frente a #",
        "content": "El símbolo $ indica un usuario normal. El símbolo # indica el usuario root. Si ve # en el mensaje, está operando con todos los privilegios: ¡tenga cuidado!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "Citando: comillas y escape"
      },
      {
        "type": "paragraph",
        "text": "Las comillas controlan cómo el shell interpreta los caracteres especiales. Es uno de los conceptos más probados en el examen LPI."
      },
      {
        "type": "table",
        "headers": [
          "Tipo",
          "Sintaxis",
          "¿Ampliar $VAR?",
          "Expandir *?",
          "Ejemplo"
        ],
        "rows": [
          [
            "comillas dobles",
            "\"texto\"",
            "✅ Sí",
            "❌No",
            "\"Hola $USER\" → Hola mario"
          ],
          [
            "comillas simples",
            "'texto'",
            "❌No",
            "❌No",
            "'Hola $USER' → Hola $USER"
          ],
          [
            "Barra invertida",
            "\\personaje",
            "escape único",
            "escape único",
            "eco \\$INICIO → $INICIO"
          ],
          [
            "Nadie",
            "texto",
            "✅ Sí",
            "✅ Sí",
            "echo * → enumera todos los archivos"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Ejemplos prácticos de citar",
        "prompt": "$ echo \"Mi casa es $HOME\"\nMi casa es /casa/estudiante\n\n$ echo 'Mi casa es $HOME'\nMi casa es $HOME\n\n$ echo \"Hay archivos $(ls | wc -l)\"\nHay 42 archivos",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⌨️",
        "text": "Atajos de teclado esenciales"
      },
      {
        "type": "table",
        "headers": [
          "Atajo",
          "Acción",
          "Cuando usarlo"
        ],
        "rows": [
          [
            "Pestaña",
            "Autocompletar",
            "Comandos completos y rutas de archivos."
          ],
          [
            "Pestaña Pestaña",
            "Mostrar todas las opciones",
            "Cuando hay más posibilidades"
          ],
          [
            "Ctrl+C",
            "Comando de parada (SIGINT)",
            "Para detener un proceso bloqueado"
          ],
          [
            "Ctrl+D",
            "Fin de archivo (EOF)",
            "Para cerrar el shell o la entrada"
          ],
          [
            "Ctrl+L",
            "Limpia la pantalla",
            "Equivalente a claro"
          ],
          [
            "Ctrl+R",
            "Historial de búsqueda",
            "Para buscar comandos anteriores"
          ],
          [
            "↑ / ↓",
            "Explorar el historial",
            "Para repetir comandos recientes"
          ],
          [
            "Ctrl+A / Ctrl+E",
            "Inicio / Fin de línea",
            "Para moverse rápidamente a través del comando"
          ]
        ]
      }
    ]
  },
  "2-2": {
    "title": "Variables y entorno",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Variables locales versus variables ambientales"
      },
      {
        "type": "paragraph",
        "text": "Hay dos tipos de variables en bash. Las variables locales existen sólo en el shell actual. Las variables de entorno se exportan y están disponibles para todos los procesos secundarios."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Variables locales",
          "items": [
            "NOMBRE=\"valor\" (SIN espacios alrededor =)",
            "Visible sólo en el shell actual",
            "No heredado de procesos secundarios",
            "Calles con NOMBRE no configurado"
          ]
        },
        "right": {
          "title": "Variables de entorno",
          "items": [
            "exportar NOMBRE=\"valor\"",
            "Visible para todos los procesos secundarios.",
            "Heredar automáticamente",
            "Visible con env"
          ]
        }
      },
      {
        "type": "code",
        "title": "Variables locales vs entorno",
        "prompt": "$ LOCALE=\"sólo aquí\" # variable local\n$ exportar GLOBAL=\"en todas partes\" # variable de entorno\n$ eco $LOCAL $GLOBAL\nsolo aquí en todas partes\n\n$ bash -c 'echo $LOCAL $GLOBAL' # nuevo shell secundario\nen todas partes\n¡#LOCALE no es visible en el shell secundario!",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "¡Presta atención a los espacios!",
        "content": "¡En bash, NAME=\"value\" con espacios alrededor de iguales NO funciona! Bash interpretará NOMBRE como un comando. La sintaxis correcta es NOMBRE=\"valor\" sin espacios."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛤️",
        "text": "La variable RUTA"
      },
      {
        "type": "paragraph",
        "text": "PATH es la variable más importante en Linux. Contiene la lista de directorios donde el shell busca ejecutables cuando escribe un comando. Los directorios están separados por: (dos puntos)."
      },
      {
        "type": "code",
        "title": "Cómo funciona la RUTA",
        "prompt": "$ eco $RUTA\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# Cuando escribes \"ls\", el shell busca en orden:\n# 1. /usr/local/sbin/ls (no encontrado)\n# 2. /usr/local/bin/ls (no encontrado)\n#3. /usr/sbin/ls (no encontrado)\n# 4. /usr/bin/ls ← ¡LO ENCONTRÉ! Hace esto.\n\n# Para agregar un directorio a la RUTA:\n$ export PATH=\"$PATH:/opt/miprograma/bin\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌍",
        "text": "Variables ambientales importantes"
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
            "$INICIO",
            "El directorio de inicio del usuario.",
            "/casa/estudiante"
          ],
          [
            "$USUARIO",
            "Nombre de usuario actual",
            "alumno"
          ],
          [
            "$CÁSCARA",
            "shell de inicio de sesión",
            "/bin/bash"
          ],
          [
            "$RUTA",
            "Directorio de ejecutables",
            "/usr/bin:/bin:..."
          ],
          [
            "$IDIOMA",
            "Idioma y localización",
            "it_IT.UTF-8"
          ],
          [
            "$PWD",
            "directorio actual",
            "/inicio/estudiante/docs"
          ],
          [
            "$ NOMBRE DE HOST",
            "Nombre de la máquina",
            "PC Linux"
          ],
          [
            "$PS1",
            "formato de aviso",
            "\\u@\\h:\\w\\$"
          ],
          [
            "$?",
            "Código de salida último comando",
            "0 (éxito)"
          ],
          [
            "$$",
            "PID del shell actual",
            "1234"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📄",
        "text": "Archivo de configuración del shell"
      },
      {
        "type": "paragraph",
        "text": "Bash lee diferentes archivos de configuración dependiendo de cómo se inicia:"
      },
      {
        "type": "table",
        "headers": [
          "Archivo",
          "cuando se lee",
          "Alcance",
          "Uso típico"
        ],
        "rows": [
          [
            "/etc/perfil",
            "Inicio de sesión de Shell (todos los usuarios)",
            "Global",
            "Variables del entorno global"
          ],
          [
            "~/.bash_profile",
            "Iniciar sesión en el shell",
            "Usuario",
            "Configurar inicio de sesión (llamar a .bashrc)"
          ],
          [
            "~/.perfil",
            "Inicio de sesión de Shell (si .bash_profile no existe)",
            "Usuario",
            "Alternativas a .bash_profile"
          ],
          [
            "~/.bashrc",
            "Shell interactivo sin inicio de sesión",
            "Usuario",
            "Alias, indicaciones, funciones."
          ],
          [
            "/etc/bash.bashrc",
            "Shell interactivo (todos)",
            "Global",
            "Configuración global de bash"
          ],
          [
            "~/.bash_logout",
            "Cerrar sesión",
            "Usuario",
            "Limpieza, mensajes de salida."
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI pregunta qué archivos se leen al iniciar sesión y qué archivos se leen al iniciar sesión en comparación con el shell interactivo. Recuerde: iniciar sesión → /etc/profile + ~/.bash_profile. Interactivo → ~/.bashrc."
      }
    ]
  },
  "2-3": {
    "title": "Obtener ayuda",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📖",
        "text": "Las páginas man"
      },
      {
        "type": "paragraph",
        "text": "El comando man es el sistema de documentación integrado de Linux. Cada comando, archivo de configuración y llamada al sistema tiene (o debería tener) una página de manual."
      },
      {
        "type": "table",
        "headers": [
          "Sección",
          "Contenido",
          "Ejemplo"
        ],
        "rows": [
          [
            "1",
            "Comandos de usuario",
            "hombre 1 l"
          ],
          [
            "2",
            "Llamadas al sistema (kernel)",
            "hombre 2 abierto"
          ],
          [
            "3",
            "funciones de la biblioteca C",
            "hombre 3 printf"
          ],
          [
            "4",
            "Archivos especiales (/dev)",
            "hombre 4 nulo"
          ],
          [
            "5",
            "Formatos de archivos y configuración.",
            "hombre 5 contraseña"
          ],
          [
            "6",
            "Juegos",
            "hombre 6 fortunas"
          ],
          [
            "7",
            "Misceláneas",
            "hombre 7 ip"
          ],
          [
            "8",
            "Comandos de administración",
            "hombre 8 montar"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Comandos para obtener ayuda",
        "prompt": "$ man ls # Manual completo de ls\n$ man -k \"copiar archivo\" # Buscar por palabra clave (= apropiado)\n$ man 5 passwd # Sección 5: Formato de archivo\n$ whatis ls # Breve descripción\n$ info coreutils # Documentación detallada de GNU\n$ ls --help # Ayuda integrada del comando",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Navega dentro del hombre",
        "content": "Dentro de una página de manual: Espacio = adelante, b = atrás, /texto = buscar, q = salir. El hombre utiliza el programa \"menos\" como buscapersonas."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔍",
        "text": "Buscar archivos en el sistema"
      },
      {
        "type": "comparison",
        "left": {
          "title": "encontrar (tiempo real)",
          "items": [
            "Busque en el sistema de archivos en tiempo real",
            "Lento en sistemas de archivos grandes",
            "Potente: busque por nombre, tipo, tamaño, fecha, permisos",
            "Siempre actualizado"
          ]
        },
        "right": {
          "title": "localizar (base de datos)",
          "items": [
            "Buscar en una base de datos preindexada",
            "muy rapido",
            "Limitado: buscar solo por nombre",
            "Base de datos actualizada con updateb (generalmente diariamente)"
          ]
        }
      },
      {
        "type": "code",
        "title": "Ejemplos de búsqueda de archivos",
        "prompt": "$ buscar /home -name \"*.txt\" # archivo .txt en /home\n$ buscar / -tipo d -nombre \"config\" # Directorios llamados config\n$ buscar /var -size +10M # Archivos de más de 10MB\n$ encontrar . -mtime -7 # Modificado en los últimos 7 días\n$ encontrar . -perm 755 # Con permisos 755\n\n$ localizar contraseña # Buscar en la base de datos\n$ cual python # ¿Dónde está en la RUTA?\n$whereis ls # Binario, fuente y man",
        "output": ""
      }
    ]
  },
  "2-4": {
    "title": "Navegación y gestión de archivos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌳",
        "text": "FHS: estándar de jerarquía del sistema de archivos"
      },
      {
        "type": "paragraph",
        "text": "El FHS define la estructura de directorios estándar de Linux. Todas las distribuciones siguen estas convenciones, lo que hace que sea predecible dónde encontrar cada tipo de archivo."
      },
      {
        "type": "table",
        "headers": [
          "Directorios",
          "Contenido",
          "Ejemplo"
        ],
        "rows": [
          [
            "/",
            "Root: raíz de todo el sistema de archivos",
            "Todo empieza desde aquí"
          ],
          [
            "/papelera",
            "Comandos esenciales para todos los usuarios.",
            "ls, cp, mv, gato, fiesta"
          ],
          [
            "/sbin",
            "Comandos del sistema para el administrador.",
            "montar, fdisk, iptables"
          ],
          [
            "/etc",
            "Archivo de configuración del sistema",
            "contraseña, fstab, nginx.conf"
          ],
          [
            "/hogar",
            "Directorios personales de los usuarios",
            "/casa/mario, /casa/estudiante"
          ],
          [
            "/raíz",
            "Inicio del usuario root",
            "Separado de /hogar por seguridad"
          ],
          [
            "/var",
            "Datos variables (registro, spool, caché)",
            "/var/log/syslog, /var/www"
          ],
          [
            "/tmp",
            "Archivos temporales (eliminados al reiniciar)",
            "Archivos de sesión, descargas temporales"
          ],
          [
            "/usr",
            "Programas y bibliotecas instalados.",
            "/usr/bin, /usr/lib, /usr/compartir"
          ],
          [
            "/optar",
            "Software opcional/de terceros",
            "Navegadores, IDE, aplicaciones personalizadas"
          ],
          [
            "/desarrollador",
            "Archivos de dispositivo",
            "/dev/sda (disco), /dev/null"
          ],
          [
            "/proceso",
            "Sistema de archivos virtual: información del kernel/proceso",
            "/proc/cpuinfo, /proc/meminfo"
          ],
          [
            "/sistema",
            "Sistema de archivos virtual: información de hardware",
            "Información del dispositivo y del controlador"
          ],
          [
            "/bota",
            "Núcleo y gestor de arranque",
            "vmlinuz, initramfs, comida"
          ],
          [
            "/lib",
            "Bibliotecas compartidas esenciales",
            "libc.so, libpthread.so"
          ],
          [
            "/mnt, /medios",
            "Puntos de montaje para dispositivos",
            "USB, CD-ROM, discos externos"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧭",
        "text": "Rutas absolutas vs relativas"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Camino Absoluto",
          "items": [
            "Siempre comienza con /",
            "Identifica un archivo de forma única",
            "Independiente de tu ubicación actual",
            "Ejemplo: /home/mario/documenti/file.txt"
          ]
        },
        "right": {
          "title": "Ruta relativa",
          "items": [
            "NO comienza con /",
            "Relativo al directorio actual (contraseña)",
            "EE.UU . (actual) y .. (padre)",
            "Ejemplo: ../documentos/archivo.txt"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔠",
        "text": "Globalización: coincidencia de patrones"
      },
      {
        "type": "paragraph",
        "text": "Global le permite seleccionar archivos usando patrones especiales. El shell expande el patrón antes de pasarlo al comando."
      },
      {
        "type": "table",
        "headers": [
          "Patrones",
          "Significado",
          "Ejemplo",
          "Resultado"
        ],
        "rows": [
          [
            "*",
            "Cero o más caracteres",
            "es *.txt",
            "archivo.txt, informe.txt"
          ],
          [
            "?",
            "exactamente un personaje",
            "¿Es el archivo? .txt",
            "archivo1.txt, archivoA.txt"
          ],
          [
            "[abecedario]",
            "Uno de a, b o c",
            "ls archivo[123].txt",
            "archivo1.txt, archivo2.txt"
          ],
          [
            "[Arizona]",
            "Un personaje en rango",
            "ls [a-c]*.txt",
            "abc.txt, beta.txt"
          ],
          [
            "[!abecedario]",
            "Cualquiera EXCEPTO a, b, c",
            "Es [!0-9]*",
            "archivo.txt (no 1 archivo)"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Comandos esenciales para administrar archivos",
        "prompt": "$ mkdir -p proyecto/src/main # Crear con todos los directorios principales\n$ cp -r src/ backup/ # Copia recursiva\n$ mv old.txt new.txt # Cambiar nombre (o mover)\n$ rm -rf directorio_obsoleto/ # Eliminar recursivamente (¡ADVERTENCIA!)\n$ touch new.txt # Crear archivo vacío o actualizar marca de tiempo\n$ ls -la # Lista detallada con archivos ocultos",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "rm -rf es peligroso!",
        "content": "El comando rm -rf borra todo de forma recursiva SIN pedir confirmación. Un error como \"rm -rf /\" puede destruir todo el sistema. ¡Úselo siempre con extrema precaución!"
      }
    ]
  }
};
