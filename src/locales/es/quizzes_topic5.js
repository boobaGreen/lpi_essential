export const topic5Quizzes = [
  {
    "lessonId": "5-1",
    "question": "¿Qué UID tiene el usuario root?",
    "options": [
      "1",
      "0",
      "1000",
      "999"
    ],
    "correct": 1,
    "explanation": "El usuario root siempre tiene UID 0."
  },
  {
    "lessonId": "5-1",
    "question": "¿Qué comando te permite ejecutar comandos como root?",
    "options": [
      "en",
      "yo sudo",
      "raíz",
      "administración"
    ],
    "correct": 1,
    "explanation": "sudo ejecuta un único comando con privilegios de root, usando su contraseña."
  },
  {
    "lessonId": "5-1",
    "question": "su - (con el guión) dice:",
    "options": [
      "Solo cambiar de usuario",
      "Cambie de usuario y cargue su entorno completo",
      "Crear un nuevo usuario",
      "Eliminar un usuario"
    ],
    "correct": 1,
    "explanation": "su: simula un inicio de sesión completo del usuario objetivo, cargando todas las variables de entorno."
  },
  {
    "lessonId": "5-1",
    "question": "/etc/sudoers se modifica con:",
    "options": [
      "enano",
      "empuje",
      "visudo",
      "chmod"
    ],
    "correct": 2,
    "explanation": "visudo es la forma segura de editar /etc/sudoers: verifique la sintaxis antes de guardar."
  },
  {
    "lessonId": "5-1",
    "question": "El principio de \"privilegio mínimo\" significa:",
    "options": [
      "Siempre dale raíz",
      "Dar sólo los permisos necesarios",
      "no tener contraseña",
      "Utilice siempre sudo"
    ],
    "correct": 1,
    "explanation": "Otorgue a los usuarios y procesos sólo los privilegios estrictamente necesarios para su tarea."
  },
  {
    "lessonId": "5-1",
    "question": "sudo comparado con su tiene la ventaja de:",
    "options": [
      "No pidas contraseñas",
      "Ser rastreable en los registros",
      "ser mas rapido",
      "No pidas privilegios"
    ],
    "correct": 1,
    "explanation": "sudo registra cada comando en el registro (/var/log/auth.log), lo que hace que las acciones sean rastreables."
  },
  {
    "lessonId": "5-1",
    "question": "El comando \"id\" muestra:",
    "options": [
      "El nombre de host",
      "El UID, GID y grupos del usuario.",
      "El PID",
      "La versión del núcleo"
    ],
    "correct": 1,
    "explanation": "id muestra UID, GID y todos los grupos a los que pertenece el usuario."
  },
  {
    "lessonId": "5-1",
    "question": "Los usuarios del sistema tienen UID:",
    "options": [
      "0",
      "Del 1 al 999",
      "Desde 1000 en adelante",
      "Negativos"
    ],
    "correct": 1,
    "explanation": "Los usuarios del sistema (demonios, servicios) generalmente tienen UID del 1 al 999."
  },
  {
    "lessonId": "5-1",
    "question": "El usuario \"nadie\" se utiliza para:",
    "options": [
      "el administrador",
      "Procesos que no requieren privilegios",
      "las copias de seguridad",
      "Inicio de sesión remoto"
    ],
    "correct": 1,
    "explanation": "nadie (UID 65534) se utiliza para procesos que deben ejecutarse con el mínimo privilegio."
  },
  {
    "lessonId": "5-1",
    "question": "Los registros de autenticación se encuentran en:",
    "options": [
      "/var/log/auth.log",
      "/etc/log/auth",
      "/tmp/auth.log",
      "/inicio/registro"
    ],
    "correct": 0,
    "explanation": "/var/log/auth.log (Debian) o /var/log/secure (RHEL) contiene registros de autenticación."
  },
  {
    "lessonId": "5-2",
    "question": "¿En qué archivo se almacenan las contraseñas cifradas?",
    "options": [
      "/etc/contraseña",
      "/etc/sombra",
      "/etc/grupo",
      "/etc/iniciar sesión"
    ],
    "correct": 1,
    "explanation": "/etc/shadow contiene contraseñas cifradas y sólo puede leerlo el usuario root."
  },
  {
    "lessonId": "5-2",
    "question": "¿Qué comando crea un nuevo usuario con el directorio de inicio?",
    "options": [
      "agregar usuario",
      "agregar usuario -m",
      "nuevo usuario",
      "mkuser"
    ],
    "correct": 1,
    "explanation": "useradd -m crea el usuario y su directorio de inicio. -m es esencial."
  },
  {
    "lessonId": "5-2",
    "question": "El formato de /etc/passwd es:",
    "options": [
      "usuario:contraseña:casa",
      "usuario:x:UID:GID:info:inicio:shell",
      "usuario:UID:shell",
      "nombre:hachís:sal"
    ],
    "correct": 1,
    "explanation": "usuario:x:UID:GID:gecos:home:shell: la x indica que la contraseña está en /etc/shadow."
  },
  {
    "lessonId": "5-2",
    "question": "usermod -aG grupo de usuarios hace:",
    "options": [
      "Elimina al usuario del grupo.",
      "Agrega el usuario al grupo adicional",
      "Cambiar el grupo principal",
      "Crear un nuevo grupo"
    ],
    "correct": 1,
    "explanation": "-aG (añadir grupo) agrega al usuario a un grupo adicional sin eliminarlo de los demás."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/skel contiene:",
    "options": [
      "Contraseñas",
      "Plantillas para nuevos directorios personales",
      "los grupos",
      "los troncos"
    ],
    "correct": 1,
    "explanation": "/etc/skel contiene los archivos copiados en la página de inicio de cada nuevo usuario (por ejemplo, .bashrc)."
  },
  {
    "lessonId": "5-2",
    "question": "userdel -r elimina:",
    "options": [
      "Sólo el usuario",
      "El usuario y su directorio personal.",
      "solo el hogar",
      "solo la contraseña"
    ],
    "correct": 1,
    "explanation": "-r también elimina el directorio de inicio y el spool de correo del usuario."
  },
  {
    "lessonId": "5-2",
    "question": "contraseña de usuario se utiliza para:",
    "options": [
      "Crear el usuario",
      "Cambiar la contraseña del usuario",
      "Eliminar el usuario",
      "Bloquear al usuario"
    ],
    "correct": 1,
    "explanation": "passwd cambia la contraseña de un usuario. Root puede cambiar el de cualquier usuario."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/grupo contiene:",
    "options": [
      "Contraseñas de grupo",
      "La lista de grupos y sus miembros.",
      "Permisos de archivos",
      "La configuración de red"
    ],
    "correct": 1,
    "explanation": "/etc/group enumera los grupos del sistema y sus miembros adicionales."
  },
  {
    "lessonId": "5-2",
    "question": "grupo agregar nombre de grupo crear:",
    "options": [
      "un usuario",
      "un nuevo grupo",
      "un archivo",
      "un directorio"
    ],
    "correct": 1,
    "explanation": "groupadd crea un nuevo grupo en el sistema."
  },
  {
    "lessonId": "5-2",
    "question": "¿Qué campo en /etc/passwd contiene el shell de inicio de sesión?",
    "options": [
      "La primera",
      "el tercero",
      "El penúltimo",
      "el ultimo"
    ],
    "correct": 3,
    "explanation": "El último (séptimo) campo de /etc/passwd especifica el shell de inicio de sesión del usuario."
  },
  {
    "lessonId": "5-2",
    "question": "/sbin/nologin como shell significa:",
    "options": [
      "cáscara de raíz",
      "El usuario no puede iniciar sesión de forma interactiva.",
      "caparazón de emergencia",
      "Shell sin contraseña"
    ],
    "correct": 1,
    "explanation": "/sbin/nologin impide el inicio de sesión interactivo (utilizado para cuentas de servicio)."
  },
  {
    "lessonId": "5-2",
    "question": "Cada usuario tiene un grupo:",
    "options": [
      "Opcional",
      "Primaria (obligatoria)",
      "Solo si es administrador",
      "Sólo si tiene casa"
    ],
    "correct": 1,
    "explanation": "Cada usuario tiene un grupo principal (GID en /etc/passwd) y puede tener grupos adicionales."
  },
  {
    "lessonId": "5-3",
    "question": "¿Qué valor octal corresponde a los permisos rwxr-xr--?",
    "options": [
      "644",
      "755",
      "754",
      "764"
    ],
    "correct": 2,
    "explanation": "rwx=7, r-x=5, r--=4 → 754."
  },
  {
    "lessonId": "5-3",
    "question": "¿Qué comando cambia el propietario de un archivo?",
    "options": [
      "chmod",
      "chown",
      "chgrp",
      "chpermo"
    ],
    "correct": 1,
    "explanation": "chown (cambiar propietario) cambia de propietario. chmod cambia los permisos."
  },
  {
    "lessonId": "5-3",
    "question": "¿Qué hace el comando chmod u+x script.sh?",
    "options": [
      "Elimina el permiso de ejecución",
      "Agrega permiso de ejecución al propietario",
      "Agrega permiso de ejecución a todos",
      "cambiar el dueño"
    ],
    "correct": 1,
    "explanation": "u+x agrega (+) permiso de ejecución (x) al propietario (u=usuario)."
  },
  {
    "lessonId": "5-3",
    "question": "¿Qué permiso especial hace que los archivos nuevos en un directorio hereden el grupo?",
    "options": [
      "pedazos pegajosos",
      "SUIDO",
      "SGID",
      "LCA"
    ],
    "correct": 2,
    "explanation": "SGID en un directorio hace que los archivos nuevos hereden el grupo del directorio."
  },
  {
    "lessonId": "5-3",
    "question": "El valor octal de r (leído) es:",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "correct": 2,
    "explanation": "r=4, w=2, x=1. Los valores suman: rw=6, rwx=7."
  },
  {
    "lessonId": "5-3",
    "question": "conjuntos chmod 644:",
    "options": [
      "rwxr-xr-x",
      "rw-r--r--",
      "rwx------",
      "rw-rw-rw-"
    ],
    "correct": 1,
    "explanation": "6=rw-, 4=r--, 4=r-- → rw-r--r-- (el propietario lee/escribe, otros solo leen)."
  },
  {
    "lessonId": "5-3",
    "question": "El Sticky Bit en /tmp previene:",
    "options": [
      "Leyendo de otros",
      "La eliminación de archivos de otras personas.",
      "la escritura",
      "la ejecución"
    ],
    "correct": 1,
    "explanation": "Sticky Bit evita que un usuario elimine archivos que no son de su propiedad en /tmp."
  },
  {
    "lessonId": "5-3",
    "question": "umask 022 produce permisos predeterminados para archivos de:",
    "options": [
      "777",
      "755",
      "644",
      "600"
    ],
    "correct": 2,
    "explanation": "Para archivos: 666 - 022 = 644 (rw-r--r--). Para directorios: 777 - 022 = 755."
  },
  {
    "lessonId": "5-3",
    "question": "cambios de cambio:",
    "options": [
      "el dueño",
      "El grupo propietario",
      "los permisos",
      "El nombre del archivo"
    ],
    "correct": 1,
    "explanation": "chgrp (cambiar grupo) cambia el grupo propietario de un archivo."
  },
  {
    "lessonId": "5-3",
    "question": "El SUID de un ejecutable hace que se ejecute con permisos:",
    "options": [
      "Del usuario que lo ejecuta",
      "Del propietario del fichero",
      "Siempre rootear",
      "del grupo"
    ],
    "correct": 1,
    "explanation": "SUID hace que el programa se ejecute con los permisos del propietario del archivo (por ejemplo, passwd tiene raíz SUID)."
  },
  {
    "lessonId": "5-3",
    "question": "El archivo chmod ow elimina:",
    "options": [
      "Escribiendo para todos",
      "Escribir para \"otros\"",
      "Leer para \"otros\"",
      "Corriendo por \"dueño\""
    ],
    "correct": 1,
    "explanation": "o=otros, -w=eliminar escritura. Eliminar el permiso de escritura para \"otros\"."
  },
  {
    "lessonId": "5-3",
    "question": "ls -l muestra permisos en el formato:",
    "options": [
      "Octales (755)",
      "Simbólico (rwxr-xr-x)",
      "Pistas",
      "hexadecimal"
    ],
    "correct": 1,
    "explanation": "ls -l muestra permisos en formato simbólico: rwxr-xr-x."
  },
  {
    "lessonId": "5-3",
    "question": "Solo se puede acceder a un archivo con 700 permisos mediante:",
    "options": [
      "Todos",
      "el dueño",
      "el grupo",
      "Raíz"
    ],
    "correct": 1,
    "explanation": "700 = rwx------ — sólo el propietario tiene permisos (y root omite todo)."
  },
  {
    "lessonId": "5-4",
    "question": "¿Qué tipo de enlace puede cruzar diferentes sistemas de archivos?",
    "options": [
      "Enlaces duros",
      "Enlaces simbólicos",
      "Ambos",
      "Nadie"
    ],
    "correct": 1,
    "explanation": "Los enlaces simbólicos pueden cruzar diferentes sistemas de archivos. Los enlaces físicos no lo son."
  },
  {
    "lessonId": "5-4",
    "question": "¿Qué sucede cuando eliminas el archivo de destino de un enlace físico?",
    "options": [
      "El enlace queda \"roto\"",
      "El archivo permanece accesible a través del enlace.",
      "El enlace también está eliminado.",
      "El sistema falla"
    ],
    "correct": 1,
    "explanation": "Con enlaces físicos, el archivo permanece accesible siempre que exista al menos un enlace al inodo."
  },
  {
    "lessonId": "5-4",
    "question": "ln -s enlace de destino crea:",
    "options": [
      "Un vínculo duro",
      "Un vínculo simbólico",
      "una copia",
      "Un alias"
    ],
    "correct": 1,
    "explanation": "-s indica un enlace simbólico. Sin -s, ln crea un vínculo físico."
  },
  {
    "lessonId": "5-4",
    "question": "Un enlace simbólico \"roto\" es aquel cuyo:",
    "options": [
      "Se deniega el permiso",
      "El archivo de destino ha sido eliminado",
      "El inodo está corrupto",
      "El sistema de archivos está lleno"
    ],
    "correct": 1,
    "explanation": "Un enlace simbólico queda \"roto\" cuando el archivo de destino ya no existe."
  },
  {
    "lessonId": "5-4",
    "question": "Un enlace duro apunta a:",
    "options": [
      "un camino",
      "un inodo",
      "Otro enlace",
      "un directorio"
    ],
    "correct": 1,
    "explanation": "Un enlace físico es un nombre adicional que apunta al mismo inodo que el archivo original."
  },
  {
    "lessonId": "5-4",
    "question": "¿Puedes crear enlaces físicos a directorios?",
    "options": [
      "si, siempre",
      "No (normalmente)",
      "Sólo el root puede",
      "Sólo con -d"
    ],
    "correct": 1,
    "explanation": "No se permiten enlaces físicos a directorios para evitar bucles en el sistema de archivos."
  },
  {
    "lessonId": "5-4",
    "question": "ls -i muestra:",
    "options": [
      "El tipo de archivo",
      "El número de inodo",
      "el dueño",
      "La fecha de creación"
    ],
    "correct": 1,
    "explanation": "ls -i muestra el número de inodo de cada archivo."
  },
  {
    "lessonId": "5-4",
    "question": "enlace de lectura muestra:",
    "options": [
      "El contenido del archivo.",
      "El objetivo de un enlace simbólico",
      "los permisos",
      "el dueño"
    ],
    "correct": 1,
    "explanation": "readlink muestra el archivo/ruta al que apunta un enlace simbólico."
  },
  {
    "lessonId": "5-4",
    "question": "Dos enlaces duros al mismo archivo tienen:",
    "options": [
      "Diferentes inodos",
      "el mismo inodo",
      "Diferentes contenidos",
      "Diferentes propietarios"
    ],
    "correct": 1,
    "explanation": "Los enlaces duros comparten el mismo inodo. Son indistinguibles del archivo \"original\"."
  },
  {
    "lessonId": "5-4",
    "question": "Un enlace simbólico tiene tamaño:",
    "options": [
      "bytes cero",
      "Igual que el objetivo",
      "Igual a la longitud de la ruta objetivo",
      "4096 bytes"
    ],
    "correct": 2,
    "explanation": "El tamaño de un enlace simbólico es la longitud de la ruta de destino (por ejemplo, /etc/passwd = 11 bytes)."
  }
];
