export const dragDropData = [
  {
    "title": "Comandos básicos",
    "pairs": [
      {
        "left": "ls",
        "right": "Lista de archivos"
      },
      {
        "left": "cd",
        "right": "Cambiar directorio"
      },
      {
        "left": "pwd",
        "right": "directorio actual"
      },
      {
        "left": "cp",
        "right": "Copiar archivos"
      },
      {
        "left": "rm",
        "right": "Eliminar archivos"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Directorios de Linux",
    "pairs": [
      {
        "left": "/etc",
        "right": "Configuración del sistema"
      },
      {
        "left": "/home",
        "right": "casa de usuarios"
      },
      {
        "left": "/var",
        "right": "Datos variables (registro)"
      },
      {
        "left": "/tmp",
        "right": "Archivos temporales"
      },
      {
        "left": "/boot",
        "right": "Núcleo y gestor de arranque"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Distribuciones de Linux",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "Basado en Debian"
      },
      {
        "left": "Fedora",
        "right": "Base para RHEL"
      },
      {
        "left": "Arch",
        "right": "lanzamiento rodante"
      },
      {
        "left": "CentOS",
        "right": "Derivado de RHEL"
      },
      {
        "left": "openSUSE",
        "right": "Usar cremallera"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Aplicaciones de código abierto",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "paquete de oficina"
      },
      {
        "left": "Firefox",
        "right": "Navegadores web"
      },
      {
        "left": "GIMP",
        "right": "editor de imágenes"
      },
      {
        "left": "Blender",
        "right": "modelado 3D"
      },
      {
        "left": "Audacity",
        "right": "editor de audio"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Licencias de software",
    "pairs": [
      {
        "left": "GPL",
        "right": "Fuerte copyleft"
      },
      {
        "left": "MIT",
        "right": "Permisivo, muy corto."
      },
      {
        "left": "Apache 2.0",
        "right": "Permisivos + patentes"
      },
      {
        "left": "LGPL",
        "right": "Vinculación con el propietario"
      },
      {
        "left": "AGPL",
        "right": "Copyleft para SaaS"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Administradores de paquetes",
    "pairs": [
      {
        "left": "apt",
        "right": "Debian/Ubuntu"
      },
      {
        "left": "dnf",
        "right": "Fedora/RHEL"
      },
      {
        "left": "pacman",
        "right": "ArchLinux"
      },
      {
        "left": "zypper",
        "right": "openSUSE"
      },
      {
        "left": "snap",
        "right": "Paquetes universales (canónicos)"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Permisos de archivos (numéricos)",
    "pairs": [
      {
        "left": "777",
        "right": "Leer, escribir y actuar para todos."
      },
      {
        "left": "755",
        "right": "El propietario hace todo, otros leen/ejecutan"
      },
      {
        "left": "644",
        "right": "El propietario lee/escribe, otros leen"
      },
      {
        "left": "600",
        "right": "Sólo el dueño lee y escribe."
      },
      {
        "left": "400",
        "right": "Sólo el propietario puede leer"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Símbolos de golpe",
    "pairs": [
      {
        "left": ">",
        "right": "Redirigir salida (sobrescribir)"
      },
      {
        "left": ">>",
        "right": "Redirigir salida (añadir)"
      },
      {
        "left": "|",
        "right": "Tubería (comandos de conexión)"
      },
      {
        "left": "&",
        "right": "Se ejecuta en segundo plano"
      },
      {
        "left": "$$",
        "right": "PID del shell actual"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "Servicios del sistema",
    "pairs": [
      {
        "left": "systemd",
        "right": "Sistema de inicio moderno"
      },
      {
        "left": "sshd",
        "right": "servidor SSH"
      },
      {
        "left": "cron",
        "right": "Planificación demoníaca"
      },
      {
        "left": "cups",
        "right": "Servidor de impresión"
      },
      {
        "left": "rsyslog",
        "right": "Gestión de registros del sistema"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "Para crear un directorio: _____ dirname",
    "answer": "mkdir",
    "hint": "Crear directorio",
    "difficulty": 1
  },
  {
    "prompt": "Para eliminar un archivo: _____ nombre de archivo",
    "answer": "rm",
    "hint": "Eliminar",
    "difficulty": 1
  },
  {
    "prompt": "Para copiar un archivo: _____ origen destino",
    "answer": "cp",
    "hint": "Copiar",
    "difficulty": 1
  },
  {
    "prompt": "Para mover un archivo: _____ origen destino",
    "answer": "mv",
    "hint": "Mover",
    "difficulty": 1
  },
  {
    "prompt": "Para ver el directorio actual: _____",
    "answer": "pwd",
    "hint": "Imprimir directorio de trabajo",
    "difficulty": 1
  },
  {
    "prompt": "Para crear un archivo vacío: _____ nombre de archivo",
    "answer": "touch",
    "hint": "Tocar/crear",
    "difficulty": 1
  },
  {
    "prompt": "Para mostrar el contenido: _____ nombre de archivo",
    "answer": "cat",
    "hint": "Concatenar",
    "difficulty": 1
  },
  {
    "prompt": "Para leer el manual: _____ ls",
    "answer": "man",
    "hint": "Manual",
    "difficulty": 1
  },
  {
    "prompt": "Para imprimir texto: _____ \"Hola mundo\"",
    "answer": "echo",
    "hint": "Eco/impresión",
    "difficulty": 1
  },
  {
    "prompt": "Para enumerar archivos con detalles: _____ -la",
    "answer": "ls",
    "hint": "Lista",
    "difficulty": 1
  },
  {
    "prompt": "Para ver los procesos: _____ aux",
    "answer": "ps",
    "hint": "Estado del proceso",
    "difficulty": 2
  },
  {
    "prompt": "Para cambiar permisos: _____ 755 script.sh",
    "answer": "chmod",
    "hint": "Cambiar modo",
    "difficulty": 2
  },
  {
    "prompt": "Para cambiar la propiedad: _____ usuario:archivo de grupo",
    "answer": "chown",
    "hint": "Cambiar propietario",
    "difficulty": 2
  },
  {
    "prompt": "Para buscar texto: _____ archivo \"patrón\".txt",
    "answer": "grep",
    "hint": "Impresión de expresión regular global",
    "difficulty": 2
  },
  {
    "prompt": "Para extraer un archivo tar.gz: tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "extraer archivo gZip",
    "difficulty": 2
  },
  {
    "prompt": "Para agregar un usuario: _____ -m nuevo usuario",
    "answer": "useradd",
    "hint": "Agregar usuario",
    "difficulty": 2
  },
  {
    "prompt": "Para ver el espacio en disco: _____ -h",
    "answer": "df",
    "hint": "Disco libre",
    "difficulty": 2
  },
  {
    "prompt": "Para buscar archivos en el sistema de archivos: _____ / -name \"*.log\"",
    "answer": "find",
    "hint": "Buscar en el sistema de archivos",
    "difficulty": 2
  },
  {
    "prompt": "Para mostrar las primeras líneas: _____ -n 5 archivo.txt",
    "answer": "head",
    "hint": "cabeza/comienzo",
    "difficulty": 2
  },
  {
    "prompt": "Para mostrar las últimas líneas: _____ -n 5 archivo.txt",
    "answer": "tail",
    "hint": "Cola/final",
    "difficulty": 2
  },
  {
    "prompt": "Para montar un sistema de archivos: _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "Montar",
    "difficulty": 2
  },
  {
    "prompt": "Para probar la conectividad: _____ google.com",
    "answer": "ping",
    "hint": "Enviar paquete ICMP",
    "difficulty": 2
  },
  {
    "prompt": "Para descargar un archivo desde la URL: _____ http://example.com/file",
    "answer": "wget",
    "hint": "WebObtener",
    "difficulty": 2
  },
  {
    "prompt": "Para matar un proceso: _____ -9 PID",
    "answer": "kill",
    "hint": "Finalizar proceso",
    "difficulty": 3
  },
  {
    "prompt": "Para seguir un registro en tiempo real: tail _____ /var/log/syslog",
    "answer": "-f",
    "hint": "Seguir",
    "difficulty": 3
  },
  {
    "prompt": "Para crear un enlace simbólico: En _____ enlace de destino",
    "answer": "-s",
    "hint": "Simbólico",
    "difficulty": 3
  },
  {
    "prompt": "Para editar texto en línea: _____ -i archivo \"s/old/new/g\"",
    "answer": "sed",
    "hint": "Editor de secuencias",
    "difficulty": 3
  },
  {
    "prompt": "Para contar líneas/palabras/bytes: _____ -l archivo.txt",
    "answer": "wc",
    "hint": "Conteo de palabras",
    "difficulty": 3
  },
  {
    "prompt": "Para ordenar filas: _____ -rn data.txt",
    "answer": "sort",
    "hint": "Orden",
    "difficulty": 3
  },
  {
    "prompt": "Para cortar columnas: _____ -d: -f1 /etc/passwd",
    "answer": "cut",
    "hint": "Cortar/extraer",
    "difficulty": 3
  },
  {
    "prompt": "Para sincronizar archivos: _____ -avz src/ dest/",
    "answer": "rsync",
    "hint": "Sincronización remota",
    "difficulty": 3
  },
  {
    "prompt": "Para extraer columnas con patrón: archivo _____ '{print $1}'",
    "answer": "awk",
    "hint": "Lenguaje de procesamiento",
    "difficulty": 3
  },
  {
    "prompt": "Para mostrar archivos abiertos: _____ -i :80",
    "answer": "lsof",
    "hint": "Listar archivos abiertos",
    "difficulty": 3
  },
  {
    "prompt": "Para administrar los servicios systemd: _____ reinicie nginx",
    "answer": "systemctl",
    "hint": "Control del sistema",
    "difficulty": 3
  },
  {
    "prompt": "Para editar el crontab: _____ -e",
    "answer": "crontab",
    "hint": "Tabla cron",
    "difficulty": 3
  },
  {
    "prompt": "Para ver conexiones de red: _____ -tuln",
    "answer": "ss",
    "hint": "Estadísticas de sockets",
    "difficulty": 3
  },
  {
    "prompt": "Para traducir caracteres: echo \"hola\" | _____ az A-Z",
    "answer": "tr",
    "hint": "Traducir",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "Lista de archivos y directorios"
  },
  {
    "command": "cd",
    "description": "Cambiar directorio"
  },
  {
    "command": "pwd",
    "description": "Mostrar directorio actual"
  },
  {
    "command": "cp",
    "description": "Copiar archivos"
  },
  {
    "command": "mv",
    "description": "Mover o cambiar el nombre de archivos"
  },
  {
    "command": "rm",
    "description": "Eliminar archivos"
  },
  {
    "command": "cat",
    "description": "Ver contenido del archivo"
  },
  {
    "command": "mkdir",
    "description": "Crear directorio"
  },
  {
    "command": "touch",
    "description": "Crear archivo vacío"
  },
  {
    "command": "echo",
    "description": "Imprimir texto en salida estándar"
  },
  {
    "command": "man",
    "description": "mostrar el manual"
  },
  {
    "command": "sudo",
    "description": "Ejecutar como root"
  },
  {
    "command": "whoami",
    "description": "Mostrar usuario actual"
  },
  {
    "command": "exit",
    "description": "Cierra el caparazón"
  },
  {
    "command": "chmod",
    "description": "Cambiar permisos de archivos"
  },
  {
    "command": "grep",
    "description": "Buscar patrones en el texto."
  },
  {
    "command": "find",
    "description": "Buscar archivos en el sistema de archivos"
  },
  {
    "command": "tar",
    "description": "Archivar y comprimir archivos"
  },
  {
    "command": "chown",
    "description": "Cambiar propietario del archivo"
  },
  {
    "command": "df",
    "description": "Mostrar espacio libre en disco"
  },
  {
    "command": "du",
    "description": "Tamaño de archivo y directorio"
  },
  {
    "command": "top",
    "description": "Monitorear procesos en tiempo real"
  },
  {
    "command": "ps",
    "description": "Lista de procesos activos"
  },
  {
    "command": "kill",
    "description": "finalizar un proceso"
  },
  {
    "command": "ssh",
    "description": "Conexión remota segura"
  },
  {
    "command": "scp",
    "description": "Copiar archivos a través de SSH"
  },
  {
    "command": "ln",
    "description": "Crear enlaces a archivos"
  },
  {
    "command": "head",
    "description": "Primeras líneas de un archivo"
  },
  {
    "command": "tail",
    "description": "Últimas líneas de un archivo"
  },
  {
    "command": "wc",
    "description": "Contar líneas, palabras, bytes."
  },
  {
    "command": "sort",
    "description": "Ordenar líneas de texto"
  },
  {
    "command": "mount",
    "description": "Montar un sistema de archivos"
  },
  {
    "command": "umount",
    "description": "Desmontar un sistema de archivos"
  },
  {
    "command": "awk",
    "description": "Procesar texto por columnas"
  },
  {
    "command": "sed",
    "description": "editor de flujo de texto"
  },
  {
    "command": "xargs",
    "description": "Construye argumentos a partir de stdin"
  },
  {
    "command": "crontab",
    "description": "Programar tareas periódicas"
  },
  {
    "command": "iptables",
    "description": "Configurar el cortafuegos de Linux"
  },
  {
    "command": "rsync",
    "description": "Sincronizar archivos remotos"
  },
  {
    "command": "cut",
    "description": "Extraer columnas del texto"
  },
  {
    "command": "tr",
    "description": "Traducir/eliminar caracteres"
  },
  {
    "command": "tee",
    "description": "Salida a archivo y salida estándar"
  },
  {
    "command": "useradd",
    "description": "Agrega un usuario"
  },
  {
    "command": "passwd",
    "description": "Cambiar contraseña de usuario"
  },
  {
    "command": "groupadd",
    "description": "Crear un nuevo grupo"
  },
  {
    "command": "netstat",
    "description": "Estadísticas de conexión de red"
  },
  {
    "command": "ifconfig",
    "description": "Configurar la interfaz de red"
  },
  {
    "command": "ping",
    "description": "Probar la conectividad de la red"
  },
  {
    "command": "wget",
    "description": "Descargar archivos desde URL"
  },
  {
    "command": "curl",
    "description": "Transferir datos desde URL"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "Muestra el contenido del directorio actual.",
    "answer": "ls",
    "hints": [
      "Un comando de 2 letras",
      "Comienza con \"l\""
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Cambiar directorio a la casa del usuario",
    "answer": "cd ~",
    "hints": [
      "Usa CD...",
      "El símbolo ~ representa el hogar."
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostrar directorio actual (ruta absoluta)",
    "answer": "pwd",
    "hints": [
      "Imprimir trabajando...",
      "3 letras"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Crea un directorio llamado \"proyecto\"",
    "answer": "mkdir progetto",
    "hints": [
      "Crear directorio...",
      "mkdir + nombre"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Muestra el contenido del archivo /etc/hostname",
    "answer": "cat /etc/hostname",
    "hints": [
      "con CATenate...",
      "ch + camino"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Muestra el ID de usuario actual",
    "answer": "id",
    "hints": [
      "Un comando muy corto",
      "2 letras"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Crea un archivo vacío llamado test.txt",
    "answer": "touch test.txt",
    "hints": [
      "No es gato...",
      "tocar + nombre"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Muestra las primeras 10 líneas de un archivo log.txt",
    "answer": "head log.txt",
    "hints": [
      "Lo contrario de \"cola\"",
      "cabeza + archivo"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostrar el manual del comando ls",
    "answer": "man ls",
    "hints": [
      "Manual...",
      "hombre + comando"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Eliminar el archivo obsoleto.txt",
    "answer": "rm obsoleto.txt",
    "hints": [
      "Eliminar...",
      "habitación + nombre"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Copie el archivo config.txt a backup.txt",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "Copiar...",
      "destino fuente cp"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostrar historial de comandos",
    "answer": "history",
    "hints": [
      "La HISTORIA de los comandos.",
      "7 letras"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Busque la palabra \"error\" en el archivo syslog",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "Expresión regular global...",
      "archivo de patrón grep"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Hacer ejecutable el script hello.sh",
    "answer": "chmod +x hello.sh",
    "hints": [
      "Cambiar modo...",
      "chmod + algo"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Cree un archivo tar.gz de la carpeta docs/",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "alquitrán -c...",
      "c=crear z=gzip f=archivo"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Muestra el espacio en disco utilizado en formato legible.",
    "answer": "df -h",
    "hints": [
      "Disco libre...",
      "df + banderas"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Cuente las líneas en el archivo /etc/passwd",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "Contar palabras...",
      "baño -l"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Muestra los procesos en ejecución en tiempo real.",
    "answer": "top",
    "hints": [
      "3 letras",
      "Un monitor de sistema"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Conéctese a través de SSH para alojar 192.168.1.10",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "Carcasa segura...",
      "ssh + dirección"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Cambiar propietario del archivo al usuario \"admin\"",
    "answer": "chown admin file",
    "hints": [
      "Cambiar propietario...",
      "archivo de usuario chown"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Muestra el tamaño del directorio /var/log",
    "answer": "du -sh /var/log",
    "hints": [
      "Uso del disco...",
      "du-sh"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Siga el archivo /var/log/syslog en tiempo real",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "cola con una bandera...",
      "f = seguir"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Cree un enlace simbólico de /etc/hosts en /tmp/",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "Con una bandera...",
      "-s = simbólico"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Busque el comando ifconfig en la RUTA",
    "answer": "which ifconfig",
    "hints": [
      "¿Qué ifconfig...?",
      "cuál + comando"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Encuentre todos los archivos .log en /var de más de 10 MB",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "buscar + -nombre + -tamaño",
      "M = megabytes"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Ordene el archivo data.txt en orden numérico inverso",
    "answer": "sort -rn data.txt",
    "hints": [
      "ordenar -r = inverso, -n = numérico",
      "ordenar + bandera"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Mostrar solo el primer campo de /etc/passwd (nombre de usuario)",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "cortar con delimitador :...",
      "cortar -d: -f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Programe un trabajo cron diario a las 3:00 am",
    "answer": "0 3 * * *",
    "hints": [
      "minuto hora día mes día_semana",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Reemplace \"foo\" con \"bar\" en un archivo usando sed",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i \"s/viejo/nuevo/g\"",
      "Editor de secuencias"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Muestra conexiones de red activas",
    "answer": "ss -tuln",
    "hints": [
      "Estadísticas de zócalos...",
      "ss + bandera"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Extraiga la segunda columna separada por espacios con awk",
    "answer": "awk '{print $2}'",
    "hints": [
      "impresión awk...",
      "$2 = segunda columna"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Muestra la tabla de enrutamiento de red.",
    "answer": "ip route",
    "hints": [
      "ip...",
      "ruta/tabla de enrutamiento"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Mostrar archivos abiertos por proceso con PID 1234",
    "answer": "lsof -p 1234",
    "hints": [
      "Listar archivos abiertos...",
      "lsof + banderas"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Reinicie el servicio nginx con systemd",
    "answer": "systemctl restart nginx",
    "hints": [
      "sistemactl...",
      "reiniciar + nombre del servicio"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Agregar usuario \"mario\" al grupo \"sudo\"",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "mod de usuario...",
      "-aG = agregar grupo"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "El comando \"ls\" muestra archivos en el directorio actual.",
    "answer": true,
    "explanation": "¡Correcto! ls (lista) enumera archivos y directorios.",
    "difficulty": 1
  },
  {
    "text": "/etc contiene archivos de configuración del sistema.",
    "answer": true,
    "explanation": "¡Correcto! /etc es el directorio estándar para configuraciones.",
    "difficulty": 1
  },
  {
    "text": "El comando chmod cambia el propietario de un archivo.",
    "answer": false,
    "explanation": "chmod cambia los permisos. chown cambia de dueño.",
    "difficulty": 1
  },
  {
    "text": "Android utiliza el kernel de Linux.",
    "answer": true,
    "explanation": "¡Correcto! Android utiliza un kernel de Linux modificado por Google.",
    "difficulty": 1
  },
  {
    "text": "root siempre tiene UID 0.",
    "answer": true,
    "explanation": "¡Correcto! El usuario root siempre tiene UID 0 en todos los sistemas Unix/Linux.",
    "difficulty": 1
  },
  {
    "text": "La tubería (|) escribe la salida en un archivo.",
    "answer": false,
    "explanation": "La tubería pasa la salida a la siguiente. > escribe en un archivo.",
    "difficulty": 1
  },
  {
    "text": "Ubuntu está basado en Debian.",
    "answer": true,
    "explanation": "¡Correcto! Ubuntu deriva de Debian.",
    "difficulty": 1
  },
  {
    "text": "El símbolo ~ indica el directorio /tmp.",
    "answer": false,
    "explanation": "~ indica el directorio de inicio del usuario, no /tmp.",
    "difficulty": 1
  },
  {
    "text": "Bash es el shell predeterminado en la mayoría de las distribuciones de Linux.",
    "answer": true,
    "explanation": "¡Correcto! Bash (Bourne Again Shell) es el shell predeterminado.",
    "difficulty": 1
  },
  {
    "text": "El carácter # en un script bash indica un comentario.",
    "answer": true,
    "explanation": "¡Correcto! Las líneas que comienzan con # son comentarios en bash.",
    "difficulty": 1
  },
  {
    "text": "La tecla Tab completa automáticamente los comandos y nombres de archivos.",
    "answer": true,
    "explanation": "¡Correcto! La función de autocompletar de pestañas es una característica principal del shell.",
    "difficulty": 1
  },
  {
    "text": "El directorio /home contiene la página de inicio del usuario root.",
    "answer": false,
    "explanation": "El directorio raíz es /root. /home contiene los hogares de los usuarios normales.",
    "difficulty": 1
  },
  {
    "text": "La licencia GPL le permite hacer que el código derivado sea propietario.",
    "answer": false,
    "explanation": "La GPL (copyleft) obliga a los derivados a mantener la misma licencia.",
    "difficulty": 2
  },
  {
    "text": "La licencia MIT es una licencia permisiva.",
    "answer": true,
    "explanation": "El MIT es muy permisivo: permite casi cualquier uso.",
    "difficulty": 2
  },
  {
    "text": "SSH utiliza el puerto 443 de forma predeterminada.",
    "answer": false,
    "explanation": "SSH usa el puerto 22. El puerto 443 es para HTTPS.",
    "difficulty": 2
  },
  {
    "text": "El shebang #!/bin/bash debe estar en la primera línea del script.",
    "answer": true,
    "explanation": "¡Correcto! El shebang le dice al sistema qué intérprete utilizar.",
    "difficulty": 2
  },
  {
    "text": "RAID 1 crea una copia reflejada de los datos.",
    "answer": true,
    "explanation": "¡Correcto! RAID 1 duplica datos en dos discos.",
    "difficulty": 2
  },
  {
    "text": "DNS traduce nombres de dominio en direcciones IP.",
    "answer": true,
    "explanation": "¡Correcto! DNS resuelve nombres en IP.",
    "difficulty": 2
  },
  {
    "text": "El comando \"buscar\" busca texto dentro de los archivos.",
    "answer": false,
    "explanation": "find busca archivos en el sistema de archivos. grep busca texto dentro de archivos.",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow es legible por todos los usuarios.",
    "answer": false,
    "explanation": "/etc/shadow sólo es legible por root. Contiene contraseñas hash.",
    "difficulty": 2
  },
  {
    "text": "El comando \"exportar\" pone una variable a disposición de los procesos secundarios.",
    "answer": true,
    "explanation": "¡Correcto! export exporta la variable como una variable de entorno.",
    "difficulty": 2
  },
  {
    "text": "El archivo /etc/passwd contiene contraseñas de usuario en texto sin cifrar.",
    "answer": false,
    "explanation": "/etc/passwd ya no contiene contraseñas reales. Están en /etc/shadow como hashes.",
    "difficulty": 2
  },
  {
    "text": "El glob * también corresponde a archivos ocultos (que comienzan con punto).",
    "answer": false,
    "explanation": "El glob * no incluye archivos que comiencen con punto. Necesitas opciones como dotglob.",
    "difficulty": 2
  },
  {
    "text": "NFS es un protocolo para compartir archivos entre sistemas Unix/Linux.",
    "answer": true,
    "explanation": "¡Correcto! NFS (Network File System) comparte archivos a través de una red entre sistemas Unix.",
    "difficulty": 2
  },
  {
    "text": "El comando \"cat\" puede concatenar varios archivos.",
    "answer": true,
    "explanation": "¡Correcto! cat (concatenar) une el contenido de varios archivos: cat archivo1 archivo2.",
    "difficulty": 2
  },
  {
    "text": "apt es el administrador de paquetes utilizado por Fedora.",
    "answer": false,
    "explanation": "Fedora usa dnf (o yum). apt es para Debian/Ubuntu.",
    "difficulty": 2
  },
  {
    "text": "Linux es un sistema operativo completo.",
    "answer": false,
    "explanation": "Linux es sólo el núcleo. GNU/Linux es el sistema operativo completo.",
    "difficulty": 3
  },
  {
    "text": "Un enlace físico puede apuntar a un directorio.",
    "answer": false,
    "explanation": "Los enlaces físicos no pueden apuntar a directorios (para evitar bucles).",
    "difficulty": 3
  },
  {
    "text": "El comando tar -czf extrae un archivo.",
    "answer": false,
    "explanation": "-czf crea un archivo gzip. Para extraer utilice -xzf.",
    "difficulty": 3
  },
  {
    "text": "$1 en un script Bash indica el primer argumento.",
    "answer": true,
    "explanation": "¡Correcto! $1 = primer argumento, $2 = segundo, etc.",
    "difficulty": 3
  },
  {
    "text": "Los enlaces simbólicos sobreviven a la eliminación del objetivo.",
    "answer": false,
    "explanation": "Si elimina el objetivo, el enlace simbólico se \"roto\".",
    "difficulty": 3
  },
  {
    "text": "SIGKILL (9) puede ser interceptado por el proceso.",
    "answer": false,
    "explanation": "SIGKILL no puede ser interceptado. Termina inmediatamente.",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 es una variedad de IP privadas.",
    "answer": true,
    "explanation": "¡Correcto! Es uno de los tres rangos privados definidos por RFC 1918.",
    "difficulty": 3
  },
  {
    "text": "El sistema de archivos ext4 admite revistas.",
    "answer": true,
    "explanation": "¡Correcto! ext4 es un sistema de archivos de registro en diario.",
    "difficulty": 3
  },
  {
    "text": "El comando \"nice\" cambia la prioridad de un proceso.",
    "answer": true,
    "explanation": "¡Correcto! nice establece la prioridad de programación.",
    "difficulty": 3
  },
  {
    "text": "TCP es un protocolo sin conexión.",
    "answer": false,
    "explanation": "TCP está orientado a la conexión. UDP no tiene conexión.",
    "difficulty": 3
  },
  {
    "text": "El comando \"crontab -e\" modifica los trabajos programados del usuario.",
    "answer": true,
    "explanation": "¡Correcto! crontab -e abre el editor de trabajos cron del usuario.",
    "difficulty": 3
  },
  {
    "text": "Un proceso en estado zombie está utilizando mucha CPU.",
    "answer": false,
    "explanation": "Un proceso zombie ha finalizado pero el padre no ha leído su estado de salida. No utiliza recursos.",
    "difficulty": 3
  },
  {
    "text": "/dev/null descarta todo lo que se le envía.",
    "answer": true,
    "explanation": "¡Correcto! /dev/null es el \"agujero negro\" de Linux: descarta cualquier dato.",
    "difficulty": 3
  },
  {
    "text": "El archivo /etc/fstab define los sistemas de archivos que se montan automáticamente en el arranque.",
    "answer": true,
    "explanation": "¡Correcto! fstab (tabla del sistema de archivos) contiene información de montaje automático.",
    "difficulty": 3
  },
  {
    "text": "El comando \"df\" muestra el tamaño de un solo archivo.",
    "answer": false,
    "explanation": "df muestra el espacio en disco del sistema de archivos. Para tamaños de archivos, utilice du o ls -l.",
    "difficulty": 3
  },
  {
    "text": "systemd es el sistema de inicio utilizado por la mayoría de las distribuciones modernas.",
    "answer": true,
    "explanation": "¡Correcto! systemd ha reemplazado a SysVinit en la mayoría de las distribuciones.",
    "difficulty": 3
  },
  {
    "text": "El archivo ~/.bash_history contiene comandos escritos por el usuario.",
    "answer": true,
    "explanation": "¡Correcto! El historial de los comandos bash se guarda en ~/.bash_history.",
    "difficulty": 3
  },
  {
    "text": "El comando \"grep -r\" busca directorios de forma recursiva.",
    "answer": true,
    "explanation": "¡Correcto! grep -r (o -R) busca patrones en todos los archivos del directorio y subdirectorios.",
    "difficulty": 3
  },
  {
    "text": "El bit adhesivo evita que los usuarios eliminen los archivos de otras personas en directorios compartidos.",
    "answer": true,
    "explanation": "¡Correcto! El bit adhesivo (t) en /tmp impide que los usuarios eliminen los archivos de otras personas.",
    "difficulty": 3
  }
];