export const topic5Extended = {
  "5-1": {
    "title": "Seguridad y tipos de usuarios",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "👑",
        "text": "El usuario raíz: el superusuario"
      },
      {
        "type": "paragraph",
        "text": "El usuario root (UID 0) tiene acceso ilimitado al sistema. Puede leer, escribir y eliminar cualquier archivo, finalizar cualquier proceso, cambiar cualquier configuración. Por este motivo, nunca deberías trabajar como root de forma predeterminada."
      },
      {
        "type": "table",
        "headers": [
          "Tipo de usuario",
          "UID",
          "Alcance",
          "¿Acceso?"
        ],
        "rows": [
          [
            "raíz",
            "0",
            "Administración completa del sistema",
            "Sólo cuando sea necesario"
          ],
          [
            "Usuarios normales",
            "≥ 1000",
            "Usuarios humanos con cuentas personales",
            "Si, con su propia concha"
          ],
          [
            "Usuarios del sistema",
            "1-999",
            "Servicios y demonios (www-data, mysql)",
            "No (/sbin/nologin)"
          ],
          [
            "nadie",
            "65534",
            "Procesos con privilegios mínimos",
            "No"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "su vs sudo: dos enfoques de seguridad"
      },
      {
        "type": "comparison",
        "left": {
          "title": "encendido (Cambiar de usuario)",
          "items": [
            "Cambiar de usuario por completo",
            "Requiere contraseña ROOT",
            "su - = inicio de sesión completo (entorno raíz)",
            "Sin registro de comandos detallado",
            "Menos seguro: tienes que compartir contraseñas de root"
          ]
        },
        "right": {
          "title": "sudo (superusuario DO)",
          "items": [
            "Ejecute UN comando como root",
            "Requiere TU contraseña",
            "Cada comando se registra",
            "Control granular (quién puede hacer qué)",
            "Más seguro: nadie sabe la contraseña de root"
          ]
        }
      },
      {
        "type": "code",
        "title": "su vs sudo básicamente",
        "prompt": "# su: convertirse en root (solicita la contraseña ROOT)\n$ arriba -\nContraseña: [contraseña raíz]\n#whoami\nraíz\n\n# sudo: ejecuta un comando como root (solicita TU contraseña)\n$ sudo actualización apta\n[sudo] contraseña para mario: [contraseña de mario]\n\n# Ver quién puede usar sudo\n$ sudo -l # Tus permisos\n$ cat /etc/sudoers # Archivo de configuración (¡usa visudo!)",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "¡Utiliza siempre visudo!",
        "content": "/etc/sudoers debe editarse SÓLO con el comando visudo, que comprueba la sintaxis antes de guardar. ¡Un error en sudoers puede bloquear el acceso al sistema!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛡️",
        "text": "Principio de privilegio mínimo"
      },
      {
        "type": "paragraph",
        "text": "El Principio de Mínimo Privilegio es la regla de oro de la seguridad: cada usuario y proceso debe tener SÓLO los permisos estrictamente necesarios para realizar su tarea. Nada más."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Non lavorare come root",
            "desc": "Usa sudo solo quando serve, poi torna al tuo utente"
          },
          {
            "term": "Servizi dedicati",
            "desc": "Ogni servizio gira con il proprio utente (www-data, mysql)"
          },
          {
            "term": "sudo granulare",
            "desc": "In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo"
          },
          {
            "term": "Audit trail",
            "desc": "sudo logga tutto in /var/log/auth.log — tracciabilità completa"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI pregunta sobre la diferencia entre su y sudo, el principio de privilegio mínimo y dónde se encuentran los registros de autenticación (/var/log/auth.log o /var/log/secure)."
      }
    ]
  },
  "5-2": {
    "title": "Gestión de usuarios y grupos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📒",
        "text": "Archivos de registro de Linux"
      },
      {
        "type": "table",
        "headers": [
          "Archivo",
          "Dueño",
          "Permisos",
          "Contenido"
        ],
        "rows": [
          [
            "/etc/contraseña",
            "raíz",
            "644 (legible por todos)",
            "Información de usuario: nombre, UID, GID, inicio, shell"
          ],
          [
            "/etc/sombra",
            "raíz",
            "640 (solo raíz)",
            "Contraseñas y políticas cifradas"
          ],
          [
            "/etc/grupo",
            "raíz",
            "644",
            "Grupos y miembros adicionales"
          ],
          [
            "/etc/gshadow",
            "raíz",
            "640",
            "Contraseñas de grupo (raras)"
          ],
          [
            "/etc/skel",
            "raíz",
            "755",
            "Plantilla para nuevos directorios personales"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Formato de /etc/contraseña"
      },
      {
        "type": "code",
        "title": "Anatomía de una línea /etc/passwd",
        "prompt": "mario:x:1000:1000:Mario Rossi:/home/mario:/bin/bash\n  │ │ │ │ │ │ │\n  │ │ │ │ │ │ └── Iniciar sesión shell\n  │ │ │ │ │ └── Directorio de inicio\n  │ │ │ │ └── Campo GECOS (información de usuario)\n  │ │ │ └── GID (ID de grupo principal)\n  │ │ └── UID (ID de usuario)\n  │ └── \"x\" = contraseña en /etc/shadow\n  └── Nombre de usuario",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "¿Por qué \"x\" en la contraseña?",
        "content": "En el pasado, las contraseñas estaban en /etc/passwd (¡legibles para todos!). Por seguridad, se han movido a /etc/shadow (legible sólo por root). La \"x\" indica que la contraseña está en el archivo oculto."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Comandos para administrar usuarios y grupos"
      },
      {
        "type": "table",
        "headers": [
          "Dominio",
          "Función",
          "Opciones importantes"
        ],
        "rows": [
          [
            "usuario agregar -m usuario",
            "Crear usuario con inicio",
            "-m crear casa, -s shell, -G grupos"
          ],
          [
            "usermod -aG usuario grp",
            "Editar usuario",
            "-aG Agregar grupo, -L bloquear, -U desbloquear"
          ],
          [
            "usuariodel -r usuario",
            "Eliminar usuario + inicio",
            "-r también elimina el directorio de inicio"
          ],
          [
            "usuario contraseña",
            "Cambiar la contraseña",
            "-l bloquear, -u desbloquear, -e forzar el cambio"
          ],
          [
            "grupo agregar nombre",
            "Crear grupo",
            "-g GID específico"
          ],
          [
            "grupo del nombre",
            "Eliminar grupo",
            "Sólo si ningún usuario lo tiene como principal"
          ],
          [
            "usuario de grupos",
            "Mostrar grupos de usuarios",
            "Lista de grupos de membresía"
          ],
          [
            "ID de usuario",
            "Mostrar UID/GID/grupos",
            "Información completa del usuario"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Flujo de trabajo: crear un usuario completo",
        "prompt": "#1. Crear usuario con directorio de inicio\n$ sudo useradd -m -s /bin/bash -c \"Mario Rossi\" mario\n\n#2. Establece tu contraseña\n$ sudo contraseña mario\n\n#3. Agregar a grupos adicionales\n$ sudo usermod -aG sudo,docker mario\n\n#4. comprobar\n$ identificación de mario\nuid=1001(mario) gid=1001(mario) grupos=1001(mario),27(sudo),999(docker)\n\n$ ls -la /home/mario/\n# Contiene archivos copiados de /etc/skel/",
        "output": ""
      }
    ]
  },
  "5-3": {
    "title": "Permisos de archivos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "El sistema de permisos Unix"
      },
      {
        "type": "paragraph",
        "text": "Cada archivo y directorio en Linux tiene tres conjuntos de permisos (propietario, grupo, otros) y tres tipos de permisos (lectura, escritura, ejecución). Esto crea una serie de 9 permisos."
      },
      {
        "type": "table",
        "headers": [
          "Permiso",
          "Fichado",
          "En directorios",
          "valor octal"
        ],
        "rows": [
          [
            "r (leer)",
            "Leer el contenido",
            "Listado de archivos (ls)",
            "4"
          ],
          [
            "w (escribir)",
            "Editar el contenido",
            "Crear/eliminar archivos",
            "2"
          ],
          [
            "x (ejecutar)",
            "Ejecutar según lo programado",
            "Ingrese (cd) el directorio",
            "1"
          ],
          [
            "- (Nadie)",
            "Sin acceso",
            "Sin acceso",
            "0"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Leer permisos con ls -l",
        "prompt": "$ ls -l /etc/contraseña\n-rw-r--r-- 1 raíz raíz 2847 5 de marzo /etc/passwd\n│├──┤├──┤├──┤\n││ │ │\n││ │ └── otros: r-- (solo lectura)\n││ └── grupo: r-- (solo lectura)\n│└── propietario: rw- (leer + escribir)\n└── tipo: - = archivo (d = directorio, l = enlace)",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "Notación octal vs simbólica"
      },
      {
        "type": "table",
        "headers": [
          "octal",
          "Simbólico",
          "Significado",
          "Uso típico"
        ],
        "rows": [
          [
            "755",
            "rwxr-xr-x",
            "El propietario hace todo, otros leen/ejecutan",
            "Guiones, directorios"
          ],
          [
            "644",
            "rw-r--r--",
            "El propietario lee/escribe, los demás solo leen",
            "Archivo de texto, configuración."
          ],
          [
            "700",
            "rwx------",
            "Sólo el propietario tiene acceso.",
            "Archivos privados, claves SSH"
          ],
          [
            "600",
            "rw-------",
            "Sólo el propietario lee/escribe",
            "Archivos secretos"
          ],
          [
            "777",
            "rwxrwxrwx",
            "Todos pueden hacer todo",
            "⚠️ ¡NUNCA lo use en producción!"
          ],
          [
            "750",
            "rwxr-x---",
            "Propietario + grupo lee, otros no",
            "Directorios compartidos"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚡",
        "text": "Permisos Especiales"
      },
      {
        "type": "table",
        "headers": [
          "Permiso",
          "octal",
          "Fichado",
          "En directorios",
          "Ejemplo"
        ],
        "rows": [
          [
            "SUIDO",
            "4xxx",
            "Ejecutar con permisos de propietario",
            "—",
            "/usr/bin/contraseña (SUID raíz)"
          ],
          [
            "SGID",
            "2xxx",
            "Ejecutar con permisos de grupo",
            "Los archivos nuevos heredan el grupo.",
            "Directorios de proyectos compartidos"
          ],
          [
            "pedazos pegajosos",
            "1xxx",
            "—",
            "Sólo el propietario puede cancelar",
            "/tmp (1777 permisos)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen pregunta: ls -l muestra permisos en formato simbólico (rwxr-xr-x). chmod usa octal (755) o simbólico (u+x). umask 022 produce 755 permisos para directorios y 644 permisos para archivos."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎭",
        "text": "umask - La máscara de los permisos"
      },
      {
        "type": "paragraph",
        "text": "umask define los permisos que se QUITAN al crear un nuevo archivo o directorio. El valor predeterminado para usuarios normales es 022."
      },
      {
        "type": "table",
        "headers": [
          "máscara",
          "Permisos de archivos (máscara 666)",
          "Permisos de directorio (máscara 777)"
        ],
        "rows": [
          [
            "022",
            "644 (rw-r--r--)",
            "755 (rwxr-xr-x)"
          ],
          [
            "077",
            "600 (rw-------)",
            "700 (rwx------)"
          ],
          [
            "002",
            "664 (rw-rw-r--)",
            "775 (rwxrwxr-x)"
          ]
        ]
      }
    ]
  },
  "5-4": {
    "title": "Archivos y enlaces especiales",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Enlace duro versus enlace simbólico"
      },
      {
        "type": "paragraph",
        "text": "Los enlaces son \"atajos\" en el sistema de archivos. Comprender la diferencia entre enlaces físicos y enlaces simbólicos es esencial para el examen LPI y para el trabajo diario con Linux."
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔗 Enlace duro",
          "items": [
            "Apunta directamente al inodo.",
            "Indistinguible del original",
            "El archivo sobrevive a la eliminación del original.",
            "NO PUEDE atravesar sistemas de archivos",
            "NO PUEDE vincular directorios",
            "Mismo inodo, recuento de enlaces +1",
            "En el archivo de enlace duro"
          ]
        },
        "right": {
          "title": "➡️ Enlace simbólico (enlace simbólico)",
          "items": [
            "Apunta a una RUTA (nombre de archivo)",
            "Es un archivo especial (tipo \"l\")",
            "Se \"rompe\" si se elimina el objetivo.",
            "PUEDE atravesar sistemas de archivos",
            "Directorios de enlace CAN",
            "Inodo diferente, tamaño = longitud del camino",
            "ln -s enlace simbólico de destino"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💡",
        "text": "¿Qué son los inodos?"
      },
      {
        "type": "paragraph",
        "text": "Un inodo es una estructura de datos del sistema de archivos que contiene información sobre un archivo: permisos, propietario, tamaño, marca de tiempo, bloques de datos. El archivo NOMBRE no está en el inodo, está en el directorio que apunta al inodo. Esta es la razón por la que pueden existir varios nombres (enlaces físicos) para el mismo inodo."
      },
      {
        "type": "diagram",
        "title": "Estructura de inodo y enlace",
        "boxes": [
          {
            "label": "Directory",
            "color": "#3b82f6",
            "children": [
              "file.txt → inode 42",
              "hardlink.txt → inode 42",
              "symlink.txt → \"file.txt\""
            ]
          },
          {
            "label": "Inode 42",
            "color": "#10b981",
            "children": [
              "Permessi: rw-r--r--",
              "Owner: mario",
              "Size: 1024 bytes",
              "Link count: 2"
            ]
          },
          {
            "label": "Blocchi Dati",
            "color": "#f59e0b",
            "children": [
              "Block 100",
              "Block 101",
              "(contenuto effettivo)"
            ]
          }
        ]
      },
      {
        "type": "code",
        "title": "Trabajar con enlaces",
        "prompt": "# Crea un enlace físico\n$ ln original.txt enlace duro.txt\n$ ls -li # -i muestra el número de inodo\n42 -rw-r--r-- 2 mario mario 1024 original.txt\n42 -rw-r--r-- 2 mario mario 1024 enlace duro.txt\n# ¡Mismo inodo (42)! Recuento de enlaces = 2\n\n# Crea un enlace simbólico\n$ ln -s /etc/contraseña enlace_contraseña\n$ ls -l enlace_contraseña\nlrwxrwxrwx 1 mario mario 11 enlace_contraseña -> /etc/contraseña\n# Inodo diferente, tamaño = 11 (longitud \"/etc/passwd\")\n\n# Encontrar el objetivo de un enlace simbólico\n$ enlace de lectura enlace_contraseña\n/etc/contraseña\n\n# Encuentra todos los enlaces simbólicos rotos\n$ buscar /home -xtype l",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📁",
        "text": "Archivos temporales"
      },
      {
        "type": "table",
        "headers": [
          "Directorios",
          "Alcance",
          "Persistencia",
          "Notas"
        ],
        "rows": [
          [
            "/tmp",
            "Archivos temporales para todos",
            "Borrado al reiniciar",
            "Bit adhesivo: solo el propietario puede eliminar sus archivos"
          ],
          [
            "/var/tmp",
            "Archivos temporales persistentes",
            "Sobreviven al reinicio",
            "Para los datos necesarios entre reinicios"
          ],
          [
            "~/.cache",
            "caché de usuario",
            "Persistente",
            "Caché del navegador, aplicaciones"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen pregunta: Enlace físico = mismo inodo, no atraviesa el sistema de archivos, no hay directorio. Enlace simbólico = inodo diferente, atraviesa sistemas de archivos, puede vincular directorios, puede \"romperse\". ln -s crea un enlace simbólico, ln sin bandera crea un enlace físico."
      }
    ]
  }
};
