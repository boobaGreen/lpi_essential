export const rhcsaLessonContentES = {

  // ─── TOPIC 1: Herramientas Esenciales ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell y Redireccionamiento I/O',
      panels: [
        { emoji: '📤', text: '`>` sobreescribe un archivo con la salida: `echo "hola" > archivo.txt` crea o sobreescribe.' },
        { emoji: '📥', text: '`>>` añade la salida al final del archivo: `echo "otra línea" >> archivo.txt` preserva lo anterior.' },
        { emoji: '🔗', text: '`|` (pipe) pasa la salida de un comando al siguiente: `ls -l | grep ".txt"` filtra la lista.' },
        { emoji: '⚠️', text: '`2>` redirecciona solo errores: `find / -name "*.conf" 2> /dev/null` oculta errores.' },
        { emoji: '🎯', text: '`&>` redirecciona tanto stdout como stderr al mismo archivo: `comando &> salida.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Operadores de Redireccionamiento',
        items: [
          '`>` — sobreescribe la salida estándar (stdout) en un archivo',
          '`>>` — añade la salida estándar a un archivo',
          '`2>` — redirecciona el error estándar (stderr) a un archivo',
          '`2> /dev/null` — descarta los mensajes de error',
          '`&>` — redirecciona ambos (stdout y stderr) a la misma ubicación',
          '`|` — conecta la salida de un proceso con la entrada de otro',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep y Expresiones Regulares',
      panels: [
        { emoji: '🔎', text: '`grep "patron" archivo` busca líneas que contengan el patrón en el archivo.' },
        { emoji: '🚫', text: '`grep -v "patron"` muestra todas las líneas EXCEPTO las que coinciden.' },
        { emoji: '📏', text: '`^` coincide con el inicio de línea, `$` coincide con el final. `^root` busca líneas que empiezan por root.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` usa regex extendida con alternancia (OR).' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` cuenta el número de líneas que coinciden.' },
      ],
    },
    keyPoints: [
      {
        title: 'Opciones esenciales de grep',
        items: [
          '`-i` — ignora mayúsculas/minúsculas (insensible al caso)',
          '`-r` o `-R` — búsqueda recursiva en directorios',
          '`-v` — invierte la coincidencia (NO)',
          '`-n` — muestra los números de línea',
          '`-E` — activa Expresiones Regulares Extendidas (ERE)',
          '`-w` — busca solo palabras completas',
        ],
      },
      {
        title: 'Metacaracteres Regex básicos',
        items: [
          '`.` — cualquier carácter único',
          '`*` — cero o más repeticiones del carácter anterior',
          '`^` — anclaje al inicio de línea',
          '`$` — anclaje al final de línea',
          '`[a-z]` — cualquier carácter en el rango especificado',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Permisos y Enlaces',
      panels: [
        { emoji: '🔐', text: 'Permisos UNIX: `rwxrwxrwx` — Usuario, Grupo, Otros. `chmod 755 archivo` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown mario:dev archivo` cambia el propietario a mario y el grupo a dev.' },
        { emoji: '🔗', text: 'Enlace duro: `ln archivo enlace` — mismo inodo, sobrevive si el original se borra.' },
        { emoji: '🔁', text: 'Enlace simbólico: `ln -s /ruta/real enlace` — apunta a una ruta, como un acceso directo.' },
        { emoji: '📊', text: '`ls -l` muestra: tipo, permisos, enlaces duros, dueño, grupo, tamaño, fecha, nombre.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — notación octal',
        items: [
          '`4` = lectura (r), `2` = escritura (w), `1` = ejecución (x)',
          '`755` = rwxr-xr-x (típico para directorios)',
          '`644` = rw-r--r-- (típico para archivos estándar)',
        ],
      },
      {
        title: 'Enlaces Duros vs Simbólicos',
        items: [
          'Enlace Duro: apunta al mismo inodo en el disco; no puede cruzar sistemas de archivos.',
          'Enlace Simbólico (Soft): un archivo pequeño que contiene la ruta al archivo real.',
          '`ls -l` muestra `l` al principio para enlaces simbólicos.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Archivos y Compresión',
      panels: [
        { emoji: '📦', text: '`tar -czvf archivo.tar.gz /directorio` — crea un archivo comprimido con gzip.' },
        { emoji: '📂', text: '`tar -xzvf archivo.tar.gz` — extrae el contenido del archivo comprimido.' },
        { emoji: '🔍', text: '`tar -tzvf archivo.tar.gz` — lista el contenido sin extraer nada.' },
        { emoji: '⚡', text: 'Herramientas de compresión: `gzip` (.gz), `bzip2` (.bz2), `xz` (.xz). XZ es la más lenta pero comprime más.' },
        { emoji: '💡', text: 'Recuerda las flags de tar: c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Flags esenciales de tar',
        items: [
          '`c` — crear archivo',
          '`x` — extraer archivo',
          '`t` — listar contenido',
          '`f` — especificar nombre de archivo (siempre al final)',
          '`v` — modo verboso (muestra qué está pasando)',
        ],
      },
      {
        title: 'Formatos de compresión',
        items: [
          '`z` — gzip (rápido, estándar)',
          '`j` — bzip2 (mejor compresión que gzip)',
          '`J` — xz (mejor ratio de compresión, más CPU)',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/` from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 Documentación del Sistema',
      panels: [
        { emoji: '📖', text: '`man comando` — muestra el manual completo. Navega con flechas, busca con `/patron`, sal con `q`.' },
        { emoji: '❓', text: '`man -k palabra` (o `apropos`) busca comandos relacionados con un tema.' },
        { emoji: 'ℹ️', text: '`info comando` — documentación más detallada y estructurada que man.' },
        { emoji: '📁', text: '`/usr/share/doc/` contiene README, CHANGELOG y ejemplos de cada paquete instalado.' },
        { emoji: '💡', text: '`comando --help` — ayuda rápida en línea. Muy útil en exámenes para recordar opciones.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — secciones y navegación',
        items: [
          'Sección 1: comandos de usuario, 5: archivos de config, 8: comandos de root',
          '`man 5 passwd` — consulta el formato del archivo /etc/passwd (no el comando)',
          'Usa `/palabra` para buscar dentro de man y `n` para siguiente resultado.',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "password" | head -3',
      output: 'chpasswd (8) - update passwords in batch mode\ngpasswd (1) - administer /etc/group and /etc/gshadow\npasswd (1) - update user\'s authentication tokens',
    },
  },

  // ─── TOPIC 2: Scripting en Shell ─────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '🐚 Variables y Sintaxis de Bash',
      panels: [
        { emoji: '📝', text: 'Comienza con `#!/bin/bash` (Shebang) para indicar el intérprete.' },
        { emoji: '🏷️', text: '`VAR="valor"` (sin espacios!). Accede con `$VAR` o `${VAR}`.' },
        { emoji: '💬', text: 'Comillas dobles `"` permiten expansión ($), comillas simples `\'` son literales.' },
        { emoji: '💻', text: '`OUTPUT=$(ls)` guarda la salida de un comando en una variable.' },
        { emoji: '🚀', text: 'Dale permisos: `chmod +x script.sh` y ejecútalo con `./script.sh`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Shebang y permisos',
        items: [
          'La primera línea debe ser `#!/bin/bash` o similar.',
          'Usa `chmod +x` para que sea ejecutable de forma directa.',
        ],
      },
      {
        title: 'Variables y expansion',
        items: [
          'No pongas espacios alrededor del `=`: `NAME="mario"` (CORRECTO), `NAME = "mario"` (ERROR).',
          '`$(comando)` es la forma moderna de sustitución de comandos.',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat hello.sh && ./hello.sh',
      output: '#!/bin/bash\nNAME="RHCSA"\necho "Hello $NAME"\n---\nHello RHCSA',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Condicionales y Bucles',
      panels: [
        { emoji: '❓', text: '`if [ $A -gt $B ]; then ... fi` — Estructura condicional. ¡Ojo a los espacios dentro de `[` e `]`!' },
        { emoji: '🔄', text: '`for file in *.txt; do ... done` — Itera sobre una lista de elementos.' },
        { emoji: '⏳', text: '`while [ condicion ]; do ... done` — Repite mientras la condición sea cierta.' },
        { emoji: '🚥', text: '`case $VAR in pattern) ... ;; esac` — Selección múltiple eficiente.' },
        { emoji: '✅', text: 'Operadores de test: `-f` (archivo), `-d` (directorio), `-z` (vacío), `-eq` (igual-num).' },
      ],
    },
    keyPoints: [
      {
        title: 'Operadores de Test [ ]',
        items: [
          '`-eq`, `-ne`, `-lt`, `-gt` — comparaciones numéricas',
          '`==`, `!=` — comparaciones de cadenas',
          '`-f archivo` — verdadero si el archivo existe y es regular',
          '`-d directorio` — verdadero si es un directorio',
        ],
      },
      {
        title: 'Bucles',
        items: [
          '`for` es ideal para procesar archivos.',
          '`while` se usa a menudo con `read` para procesar archivos línea por línea.',
        ],
      },
    ],
    terminal: {
      prompt: '$ if [ 10 -gt 5 ]; then echo "Greater"; fi',
      output: 'Greater',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '📥 Parámetros y Salidas',
      panels: [
        { emoji: '🔢', text: '`$1`, `$2`... son los argumentos pasados al script. `$0` es el nombre del script.' },
        { emoji: '👥', text: '`$@` representa todos los argumentos como una lista.' },
        { emoji: '📊', text: '`$#` es el número total de argumentos pasados.' },
        { emoji: '❓', text: '`$?` es el "Exit Status" del último comando. `0` = ÉXITO, distinto de 0 = ERROR.' },
        { emoji: '🚪', text: '`exit 0` termina el script indicando éxito. `exit 1` indica falla.' },
      ],
    },
    keyPoints: [
      {
        title: 'Argumentos de línea de comandos',
        items: [
          '`$1` — primer argumento',
          '`$#` — cantidad de argumentos',
          '`$@` — todos los argumentos',
        ],
      },
      {
        title: 'Exit Status ($?)',
        items: [
          'Es vital para el control de errores.',
          'Consúltalo inmediatamente después de ejecutar un comando importante.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls /directorio/que/no/existe; echo $?',
      output: 'ls: cannot access ...: No such file or directory\n2',
    },
  },

  // ─── TOPIC 3: Administración del Sistema ──────────────────
  'rhcsa-3-1': {
    comic: {
      title: '🚀 Arranque y Objetivos de systemd',
      panels: [
        { emoji: '🎯', text: 'Un "Target" define el estado del sistema. `multi-user.target` = terminal, `graphical.target` = escritorio.' },
        { emoji: '⚙️', text: '`systemctl get-default` muestra cómo arrancará el equipo por defecto.' },
        { emoji: '🔄', text: '`systemctl set-default graphical.target` cambia el arranque a modo gráfico permanentemente.' },
        { emoji: '⚡', text: '`systemctl isolate multi-user.target` cambia al modo terminal en la sesión actual sin reiniciar.' },
        { emoji: '🛠️', text: 'Para reparaciones: añade `rd.break` en la línea di GRUB para entrar en modo emergencia.' },
      ],
    },
    keyPoints: [
      {
        title: 'systemd Targets',
        items: [
          '`multi-user.target` — nivel 3 tradicional (consola)',
          '`graphical.target` — nivel 5 tradicional (GUI)',
          '`rescue.target` — modo mantenimiento básico',
        ],
      },
      {
        title: 'Cambio de contraseña root (rd.break)',
        items: [
          '1. Editar GRUB, añadir `rd.break` al final de la línea `linux` o `linux16`.',
          '2. `mount -o remount,rw /sysroot` (remontar como lectura/escritura).',
          '3. `chroot /sysroot` (entrar en la raíz real).',
          '4. `passwd root` (cambiar clave).',
          '5. `touch /.autorelabel` (obligatorio para SELinux).',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '📊 Gestión de Procesos',
      panels: [
        { emoji: '👁️', text: '`ps aux` o `ps -ef` listan todos los procesos activos con su PID (Process ID).' },
        { emoji: '📈', text: '`top` muestra en tiempo real los procesos que más CPU y RAM consumen.' },
        { emoji: '🛑', text: '`kill PID` envía una señal de término suave. `kill -9 PID` (SIGKILL) es la señal forzosa.' },
        { emoji: '⚖️', text: 'Prioridad: "Nice" va de -20 (máxima) a +19 (mínima). `nice -n -5 comando` inicia un proceso prioritario.' },
        { emoji: '🔧', text: '`renice -n 10 -p PID` cambia la prioridad de un proceso que ya se está ejecutando.' },
      ],
    },
    keyPoints: [
      {
        title: 'Señales habituales',
        items: [
          '`15` (SIGTERM) — termina gratamente (opción por defecto)',
          '`9` (SIGKILL) — mata el proceso de forma inmediata y forzosa',
          '`1` (SIGHUP) — recarga la configuración del proceso',
        ],
      },
      {
        title: 'Nice y Priority',
        items: [
          'Solo root puede asignar valores negativos (más prioridad).',
          'A mayor número Nice, "más amable" es el proceso con los demás (menos prioridad).',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps -ef | grep httpd | head -2',
      output: 'root      1234     1  0 10:00 ?        00:00:00 /usr/sbin/httpd\napache    1235  1234  0 10:00 ?        00:00:00 /usr/sbin/httpd',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🛠️ Gestión de Servicios con systemctl',
      panels: [
        { emoji: '🟢', text: '`systemctl start sshd` activa el servicio ahora mismo.' },
        { emoji: '📌', text: '`systemctl enable sshd` hace que el servicio arranque automáticamente al encender el PC.' },
        { emoji: '🔄', text: '`systemctl restart sshd` para y vuelve a arrancar el servicio.' },
        { emoji: '🚫', text: '`systemctl mask firewalld` impide que el servicio sea arrancado, incluso manualmente.' },
        { emoji: '🔍', text: '`systemctl status sshd` muestra si está activo, habilitado y los últimos errores.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos esenciales',
        items: [
          '`start`, `stop`, `restart`, `reload` — control de ejecución',
          '`enable`, `disable` — control de arranque automático',
          '`status`, `is-active`, `is-enabled` — consulta de estado',
          '`mask`, `unmask` — protección contra arranques accidentales',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl is-active sshd',
      output: 'active',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📔 Logs y Tareas Programadas',
      panels: [
        { emoji: '📜', text: '`journalctl` muestra todos los logs de systemd. `journalctl -u sshd` filtra por servicio.' },
        { emoji: '⏲️', text: '`crontab -e` programa tareas periódicas (min hora día mes sem comando).' },
        { emoji: '🏃', text: '`at 15:00` programa una tarea para ejecutarse una sola vez en el futuro.' },
        { emoji: '🔦', text: '`journalctl -f` sigue los logs en tiempo real (como tail -f).' },
        { emoji: '🗓️', text: '`crontab -l` lista las tareas programadas del usuario actual.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl — filtrado avanzado',
        items: [
          '`-b` — solo logs del arranque actual',
          '`-p err` — solo errores',
          '`--since "1 hour ago"` — logs recientes',
        ],
      },
      {
        title: 'Programación cron',
        items: [
          'Formato: `* * * * * comando` (minutos, horas, día mes, mes, día semana).',
          '`/etc/cron.allow` y `/etc/cron.deny` controlan quién puede usar cron.',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -n 5 -p err',
      output: '-- Journal begins at ... --\nJan 15 10:00:01 systemd[1]: Failed to start ...',
    },
  },

  // ─── TOPIC 4: Almacenamiento Local — LVM ──────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 Particionado GPT',
      panels: [
        { emoji: '🏗️', text: '`parted /dev/sdb` — herramienta para crear particiones. Usa `mklabel gpt` para discos nuevos.' },
        { emoji: '📏', text: '`mkpart primary xfs 1MiB 2GiB` crea una partición de 2GB.' },
        { emoji: '👀', text: '`lsblk` muestra la estructura de bloques (discos y particiones) de forma visual.' },
        { emoji: '❗', text: '`udevadm settle` fuerza al sistema a reconocer los cambios en las particiones inmediatamente.' },
        { emoji: '🔍', text: '`blkid` muestra el UUID de las particiones, necesario para montajes persistentes.' },
      ],
    },
    keyPoints: [
      {
        title: 'Herramientas de particionado',
        items: [
          '`fdisk` — interactiva, clásica para MBR/GPT',
          '`gdisk` — específica para GPT',
          '`parted` — soporta scripts y es muy potente',
        ],
      },
      {
        title: 'Pasos tras particionar',
        items: [
          'Ejecuta `lsblk` para verificar que el sistema ve la partición.',
          'Formatea con `mkfs` antes de usarla.',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk /dev/nvme0n1',
      output: 'NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nnvme0n1     259:0    0   20G  0 disk \n├─nvme0n1p1 259:1    0  600M  0 part /boot/efi\n└─nvme0n1p2 259:2    0 19.4G  0 part /',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🧱 LVM — Volúmenes Físicos y Grupos',
      panels: [
        { emoji: '🔨', text: '`pvcreate /dev/sdb1` prepara una partición física para ser usada por LVM.' },
        { emoji: '📦', text: '`vgcreate vg_data /dev/sdb1` agrupa uno o más Physical Volumes (PV) en un Volume Group (VG).' },
        { emoji: '➕', text: '`vgextend vg_data /dev/sdc1` añade más espacio a un grupo de volúmenes existente.' },
        { emoji: '📊', text: '`pvs`, `vgs`, `lvs` muestran resúmenes rápidos de cada nivel de LVM.' },
        { emoji: '🔍', text: '`pvdisplay` o `vgdisplay` dan información detallada (tamaño, sectores, UUID).' },
      ],
    },
    keyPoints: [
      {
        title: 'Arquitectura LVM',
        items: [
          'PV (Physical Volume) — La parte física (partición o disco).',
          'VG (Volume Group) — La "bolsa" o piscina de almacenamiento.',
          'LV (Logical Volume) — La "partición virtual" que formateamos.',
        ],
      },
    ],
    terminal: {
      prompt: '$ vgs',
      output: '  VG      #PV #LV #SN Attr   VSize  VFree \n  cs        1   2   0 wz--n- <19.00g    0 \n  vg_data   1   0   0 wz--n-   2.00g  2.00g',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '💎 LVM — Volúmenes Lógicos',
      panels: [
        { emoji: '🔪', text: '`lvcreate -L 1G -n lv_docs vg_data` extrae 1GB del grupo para crear un volumen lógico.' },
        { emoji: '📈', text: '`lvextend -L +500M /dev/vg_data/lv_docs` añade 500MB más al volumen lógico.' },
        { emoji: '✨', text: '`lvextend -r -l +100%FREE ...` extiende el volumen Y el sistema de archivos al máximo disponible.' },
        { emoji: '💾', text: 'Formateo: `mkfs.xfs /dev/vg_data/lv_docs` prepara el LV para guardar archivos.' },
        { emoji: '📏', text: '`xfs_growfs /mnt/docs` extiende el sistema de archivos XFS tras haber ampliado el LV.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestión de LV',
        items: [
          '`lvcreate -n nombre -L tamaño VG` — crear',
          '`lvextend -L +tamaño -r LV` — extender el volumen y el filesystem a la vez (recomendado)',
          '`lvremove` — borrar volumen (pide confirmación)',
        ],
      },
      {
        title: 'Diferencia XFS vs EXT4',
        items: [
          'XFS solo se puede extender, no reducir.',
          'EXT4 se puede extender y reducir (aunque reducir es arriesgado y debe hacerse offline).',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvs vg_data',
      output: '  LV      VG      Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv_docs vg_data -wi-a----- 1.00g',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '🔗 Montaje, fstab y Swap',
      panels: [
        { emoji: '📍', text: '`mount /dev/sdb1 /mnt/data` monta un dispositivo en una carpeta temporalmente.' },
        { emoji: '📝', text: '`/etc/fstab` es el archivo clave. Contiene qué montar al arrancar (UUID, punto, tipo, opciones).' },
        { emoji: '🔄', text: '`mount -a` comprueba que /etc/fstab sea correcto y monta todo lo pendiente.' },
        { emoji: '🧠', text: 'Swap: `mkswap /dev/sdb2` seguido de `swapon /dev/sdb2` activa la memoria de intercambio.' },
        { emoji: '🔒', text: 'Puntos de montaje persistentes: usa siempre UUID para evitar fallos si cambian los cables de los discos.' },
      ],
    },
    keyPoints: [
      {
        title: 'Formato /etc/fstab',
        items: [
          'Columna 1: Dispositivo (UUID=...)',
          'Columna 2: Punto de montaje (/data)',
          'Columna 3: Tipo de FS (xfs, ext4, swap, nfs)',
          'Columna 4: Opciones (defaults)',
          'Columna 5: Dump (0)',
          'Columna 6: FSCK check (0 para XFS, 1 o 2 para otros)',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat /etc/fstab | grep data',
      output: 'UUID=a1b2c3d4-e5f6... /data  xfs  defaults  0 0',
    },
  },

  // ─── TOPIC 5: Sistemas de Archivos ─────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 y XFS',
      panels: [
        { emoji: '🛠️', text: '`mkfs.xfs /dev/vg_data/lv_docs` — crea un filesystem XFS, el estándar en RHEL.' },
        { emoji: '📦', text: '`mkfs.ext4 /dev/vg_data/lv_old` — crea un filesystem ext4 si necesitas compatibilidad o reducir tamaño.' },
        { emoji: '📍', text: '`mount /dev/vg/lv /punto` — conexión inmediata. `/etc/fstab` para conexión permanente.' },
        { emoji: '🏷️', text: '`xfs_admin -L "DATOS" /dev/sdb1` — asigna una etiqueta (Label) a un volumen XFS.' },
        { emoji: '🔍', text: '`df -hT` — muestra el espacio libre y el tipo (T) de cada filesystem montado.' },
      ],
    },
    keyPoints: [
      {
        title: 'Creación y mantenimiento',
        items: [
          '`mkfs.xfs`, `mkfs.ext4` — formateo',
          '`xfs_growfs` — extender XFS',
          '`resize2fs` — extender/reducir ext4',
          '`mount -o loop` — montar archivos ISO o imágenes',
        ],
      },
    ],
    terminal: {
      prompt: '$ df -hT /data',
      output: 'Filesystem              Type  Size  Used Avail Use% Mounted on\n/dev/mapper/vg_data-lv  xfs   2.0G   45M  2.0G   3% /data',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔒 Cifrado con LUKS',
      panels: [
        { emoji: '🔐', text: '`cryptsetup luksFormat /dev/sdb1` — formatea una partición para cifrado (borra todo!).' },
        { emoji: '🔑', text: '`cryptsetup open /dev/sdb1 vault` — abre el cofre y lo mapea en `/dev/mapper/vault`.' },
        { emoji: '📦', text: 'Tras abrirlo, formateamos el mapper: `mkfs.xfs /dev/mapper/vault`.' },
        { emoji: '📝', text: 'Para automontar: edita `/etc/crypttab` (nombre, UUID, archivo de password o `none`).' },
        { emoji: '🚪', text: '`cryptsetup close vault` — cierra el cofre y protege los datos de nuevo.' },
      ],
    },
    keyPoints: [
      {
        title: 'Pasos para LUKS persistence',
        items: [
          '1. `luksFormat` (crear)',
          '2. `open` (abrir con nombre)',
          '3. Crear filesystem en `/dev/mapper/nombre`',
          '4. Registrar en `/etc/crypttab` para que pida clave al boot',
          '5. Registrar en `/etc/fstab` usando el path del mapper',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status vault',
      output: '/dev/mapper/vault is active.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🔗 Almacenamiento en Red — NFS y autofs',
      panels: [
        { emoji: '🌎', text: '`mount -t nfs servidor:/ruta /local` — monta una carpeta compartida por red.' },
        { emoji: '🤖', text: '`autofs` — servizio que monta carpetas solo con entras en ellas y las desmonta tras inactividad.' },
        { emoji: '📝', text: 'Configuración: `/etc/auto.master` indica el mapa base, y el archivo de mapa las reglas.' },
        { emoji: '📁', text: 'Ejemplo mapa: `datos -rw,soft servidor:/export/datos`.' },
        { emoji: '💡', text: 'Muy importante en el examen para montar directorios home de red automáticamente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuración de autofs',
        items: [
          '`dnf install autofs` — instalar',
          'Añadir línea en `/etc/auto.master`: `/proyectos /etc/auto.proyectos`',
          'Urrar `/etc/auto.proyectos`: `web -rw,sync servidor:/shares/web`',
          'Reiniciar servizio: `systemctl enable --now autofs`',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e 192.168.1.100',
      output: 'Export list for 192.168.1.100:\n/shares/web  *\n/shares/data 192.168.1.0/24',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🛡️ ACL y Permisos Especiales',
      panels: [
        { emoji: '👥', text: '`setfacl -m u:mario:rwx archivo` — da permisos específicos a Mario sin cambiar el dueño.' },
        { emoji: '🔍', text: '`getfacl archivo` — muestra todos los permisos extendidos y ACLs aplicadas.' },
        { emoji: '📌', text: '`chmod g+s /directorio` — (SetGID) hace que los archivos nuevos hereden el grupo del directorio.' },
        { emoji: '🧊', text: '`chmod +t /directorio` — (Sticky Bit) solo el dueño puede borrar sus archivos (ej: /tmp).' },
        { emoji: '👑', text: '`chmod u+s /bin/binario` — (SetUID) el programa corre con los permisos del dueño (usualmente root).' },
      ],
    },
    keyPoints: [
      {
        title: 'ACL (Access Control Lists)',
        items: [
          '`-m` — modificar una regola',
          '`-x` — eliminar una regola específica',
          '`-b` — eliminar todas las ACLs del archivo',
          '`d:u:user:rpx` — Default ACL: se aplica automáticamente a archivos nuevos en el directorio',
        ],
      },
      {
        title: 'Permisos Especiales (SUID, SGID, Sticky)',
        items: [
          'SUID (4): `s` en lugar de `x` del dueño. Ejecuta como dueño.',
          'SGID (2): `s` en lugar de `x` del grupo. Colaboración en carpetas.',
          'Sticky (1): `t` al final. Seguridad en carpetas compartidas.',
        ],
      },
    ],
    terminal: {
      prompt: '$ getfacl shared_dir',
      output: '# file: shared_dir\n# owner: root\n# group: root\nuser::rwx\nuser:mario:rwx\ngroup::r-x\nmask::rwx\nother::r-x',
    },
  },

  // ─── TOPIC 6: Mantenimiento del Sistema ──────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Gestión de Software con DNF',
      panels: [
        { emoji: '📥', text: '`dnf install httpd` — instala un paquete y gestiona sus dependencias automáticamente.' },
        { emoji: '🔍', text: '`dnf search nginx` — busca paquetes en los repositorios configurados.' },
        { emoji: '📂', text: '`dnf list installed` — muestra todo lo que hay en el sistema actualmente.' },
        { emoji: '📜', text: '`dnf history` — permite ver qué se instaló y cuándo, e incluso deshacerlo con `undo`.' },
        { emoji: '⚙️', text: '`dnf provides /etc/mime.types` — indica qué paquete contiene ese archivo específico.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos dnf comunes',
        items: [
          '`install`, `remove`, `update` — operaciones básicas',
          '`group install "Development Tools"` — instalar grupos de paquetes',
          '`repoinfo` — listar repositorios activos',
          '`clean all` — limpiar caché de descarga',
        ],
      },
      {
        title: 'Configuracion de Repositorios',
        items: [
          'Ubicación: `/etc/yum.repos.d/*.repo`',
          'Debe incluir `[id]`, `name`, `baseurl`, `enabled=1` y `gpgcheck=1`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides /usr/bin/python3',
      output: 'python3-3.9.7-1.el9.x86_64 : Interpreter of the Python programming language',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '🕵️ RPM — Consultas y Verificación',
      panels: [
        { emoji: '🔎', text: '`rpm -qa` — lista todos los paquetes instalados (como dnf list, pero más crudo).' },
        { emoji: '📦', text: '`rpm -ivh paquete.rpm` — instala un archivo RPM local (¡pero no baja dependencias de red!).' },
        { emoji: '🔍', text: '`rpm -ql httpd` — lista todos los archivos que instaló el paquete httpd.' },
        { emoji: '🛠️', text: '`rpm -V httpd` — verifica si los archivos del paquete han sido alterados tras la instalación.' },
        { emoji: '❓', text: '`rpm -qi httpd` — muestra información detallada (versión, fecha, descripción).' },
      ],
    },
    keyPoints: [
      {
        title: 'Flags de consulta (rpm -q)',
        items: [
          '`-i` — Info',
          '`-l` — Lista de archivos',
          '`-c` — Solo archivos de configuración',
          '`-d` — Solo archivos de documentación',
          '`-f /ruta/archivo` — ¿A qué paquete pertenece este archivo?',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /etc/passwd',
      output: 'setup-2.13.7-6.el9.noarch',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🎡 GRUB2 y el Kernel',
      panels: [
        { emoji: '🐧', text: 'El Kernel es el corazón del sistema. `uname -r` muestra la versión que corre actualmente.' },
        { emoji: '⚙️', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — actualiza el menú de arranque tras cambios.' },
        { emoji: '📝', text: '`/etc/default/grub` — aquí se editan los parámetros del arranque (como el resume o console).' },
        { emoji: '🛠️', text: '`grubby --info=ALL` — herramienta de RHEL para ver y cambiar configuraciones del kernel fácilmente.' },
        { emoji: '🆙', text: 'Tras instalar un kernel nuevo, el sistema suele ponerlo como predeterminado automáticamente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuración de GRUB2',
        items: [
          'No edites `/boot/grub2/grub.cfg` manualmente.',
          'Usa `/etc/default/grub` y luego regenera con `grub2-mkconfig`.',
          '`GRUB_TIMEOUT=5`, `GRUB_CMDLINE_LINUX="..."`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ uname -r',
      output: '5.14.0-70.13.1.el9_0.x86_64',
    },
  },

  // ─── TOPIC 7: Redes Básicas ──────────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli y Configuración de Red',
      panels: [
        { emoji: '🔌', text: '`nmcli device status` — muestra el estado de las interfaces físicas (eth0, etc).' },
        { emoji: '🛠️', text: '`nmcli connection show` — lista los perfiles de conexión configurados.' },
        { emoji: '📍', text: '`nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual`.' },
        { emoji: '🚀', text: '`nmcli con up "eth0"` — aplica los cambios y levanta la conexión.' },
        { emoji: '🏠', text: '`hostnamectl set-hostname rhel9-lab.example.com` — cambia el nombre del equipo permanentemente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Estructura de NetworkManager',
        items: [
          'Device — el hardware (interfaz).',
          'Connection — el profilo de software (la configuración).',
          'Puedes tener varias Connections para un mismo Device (ej: casa, oficina).',
        ],
      },
      {
        title: 'hostname y DNS',
        items: [
          '`/etc/hostname` — nombre del equipo.',
          '`/etc/hosts` — resolución local de nombres (IP nombre).',
          '`/etc/resolv.conf` — servidores DNS (manejado por NetworkManager).',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli connection show --active',
      output: 'NAME                UUID                                  TYPE      DEVICE \nenp1s0              7d7c6b5a-4e3d-2c1b-0a9f-8e7d...       ethernet  enp1s0',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld — El Cortafuegos',
      panels: [
        { emoji: '🛡️', text: '`firewall-cmd --get-active-zones` — muestra qué zonas están protegiendo cada interfaz.' },
        { emoji: '🔓', text: '`firewall-cmd --add-service=http --permanent` — permite tráfico web de forma persistente.' },
        { emoji: '🔌', text: '`firewall-cmd --add-port=8080/tcp --permanent` — abre un puerto específico si no hay un servicio predefinido.' },
        { emoji: '🔄', text: '`firewall-cmd --reload` — ¡Imprescindible! Aplica las reglas permanentes a la sesión actual.' },
        { emoji: '🔍', text: '`firewall-cmd --list-all` — muestra un resumen completo de la zona por defecto.' },
      ],
    },
    keyPoints: [
      {
        title: 'Zonas y Reglas',
        items: [
          'Zona `public` — la predeterminada por lo general.',
          'Flag `--permanent` — si no se pone, la regola se pierde al reiniciar.',
          'Reglas di esecuzione (Runtime) vs Permanentes.',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --list-services',
      output: 'cockpit dhcpv6-client ssh',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔑 SSH y Transferencia de Archivos',
      panels: [
        { emoji: '🔐', text: '`ssh-keygen` — genera tu par de llaves (pública y privada) para entrar sin contraseña.' },
        { emoji: '📤', text: '`ssh-copy-id usuario@servidor` — envía tu llave pública al servidor para autorizarte.' },
        { emoji: '📂', text: '`scp archivo.txt root@servidor:/tmp/` — copia archivos de forma segura por la red.' },
        { emoji: '🔄', text: '`rsync -av /local/ /remoto/` — sincroniza carpetas eficientemente (solo envía cambios).' },
        { emoji: '🛡️', text: 'Configuración: `/etc/ssh/sshd_config`. Controla acceso de root y puertos.' },
      ],
    },
    keyPoints: [
      {
        title: 'Seguridad en SSH',
        items: [
          '`PermitRootLogin no` — desactiva el acceso directo de root (recomendado).',
          '`PasswordAuthentication no` — obliga a usar llaves RSA/Ed25519.',
          'Usa `systemctl reload sshd` tras cambiar la configuración.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server',
      output: 'Number of key(s) added: 1\nNow try logging into the machine...',
    },
  },

  // ─── TOPIC 8: Usuarios y Grupos ──────────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 Gestión de Usuarios',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — crea el usuario Mario con su home y shell bash.' },
        { emoji: '🔑', text: '`passwd mario` — establece la contraseña. Solo root puede cambiar claves ajenas.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — añade a Mario al grupo wheel (sudo). ¡Usa siempre -a!' },
        { emoji: '⏰', text: '`chage -M 90 mario` — establece que la clave caduque cada 90 días.' },
        { emoji: '🗑️', text: '`userdel -r mario` — elimina al usuario y su directorio personal.' },
      ],
    },
    keyPoints: [
      {
        title: 'Opciones de useradd',
        items: [
          '`-m` — crear home directory',
          '`-s` — definir shell por defecto',
          '`-u` — definir UID específico',
          '`-c` — añadir comentario (nombre real)',
        ],
      },
      {
        title: 'Expiracion de cuentas (chage)',
        items: [
          '`-l` — listar info de expiración',
          '`-E` — fecha de expiración de la cuenta',
          '`-W` — días de aviso antes de caducar la clave',
        ],
      },
    ],
    terminal: {
      prompt: '$ id mario',
      output: 'uid=1001(mario) gid=1001(mario) groups=1001(mario),10(wheel)',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Grupos y sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 2000 devs` — crea un grupo con un GID específico.' },
        { emoji: '👤', text: '`usermod -g primaria -G secundaria usuario` — cambia grupos primarios y adicionales.' },
        { emoji: '🔐', text: '`visudo` — edita `/etc/sudoers` de forma segura (con chequeo de sintaxis).' },
        { emoji: '📁', text: '`/etc/sudoers.d/` — mejor lugar para añadir reglas sudo por archivo separado.' },
        { emoji: '❌', text: '`groupdel devs` — elimina un grupo (siempre que no sea el primario de nadie).' },
      ],
    },
    keyPoints: [
      {
        title: 'sudoers configuration',
        items: [
          '`%wheel ALL=(ALL) ALL` — permite a los miembros de wheel hacer de todo.',
          '`usuario ALL=(ALL) NOPASSWD: /usr/bin/dnf` — permitir un comando sin clave.',
        ],
      },
    ],
    terminal: {
      prompt: '$ groups root',
      output: 'root : root',
    },
  },

  // ─── TOPIC 9: SELinux y Seguridad ──────────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 Los 3 modos de SELinux',
      panels: [
        { emoji: '🟢', text: 'Enforcing: El modo activo. Bloquea accesos no permitidos y los registra.' },
        { emoji: '🟡', text: 'Permissive: No bloquea nada, pero REGISTRA en el log lo que habría bloqueado.' },
        { emoji: '🔴', text: 'Disabled: SELinux está totalmente apagado. No recomendado.' },
        { emoji: '⚡', text: '`setenforce 0/1` alterna entre Permissive e Enforcing en caliente.' },
        { emoji: '📝', text: '`/etc/selinux/config` define el modo persistente tras el próximo reinicio.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos de estado',
        items: [
          '`getenforce` — muestra el modo actual (Enforcing o Permissive)',
          '`sestatus` — muestra el estado detallado de la política cargada',
        ],
      },
    ],
    terminal: {
      prompt: '$ getenforce',
      output: 'Enforcing',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ Contextos: Archivos y Procesos',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — muestra las etiquetas (contextos) de los archivos.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — restaura el contexto por defecto según la base de datos.' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — define regla permanente.' },
        { emoji: '⚡', text: '`chcon -t tipo archivo` — cambia el contexto temporalmente (se pierde al reconectar).' },
        { emoji: '📊', text: 'Contexto típico: `usuario:rol:tipo:nivel`. El "tipo" es lo que más nos importa.' },
      ],
    },
    keyPoints: [
      {
        title: 'Resolución de problemas',
        items: [
          'Si un servizio no funciona y los permisos son correctos, comprueba el contexto.',
          '`mv` preserva el contexto original (puede causar problemas), `cp` hereda el del destino.',
          'Usa siempre `semanage fcontext` + `restorecon` para cambios definitivos.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 Booleanos y Puertos SELinux',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — lista todos los interruptores (booleans) del sistema.' },
        { emoji: '🔄', text: '`setsebool -P httpd_enable_homedirs on` — cambia un booleano de forma permanente (-P).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — lista qué puertos tiene permitidos un servicio.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8088` — añade un puerto extra a un servicio.' },
        { emoji: '🔍', text: 'Los errores se ven en `/var/log/audit/audit.log` como eventos "AVC".' },
      ],
    },
    keyPoints: [
      {
        title: 'Booleans vs Ports',
        items: [
          'Booleans — habilitan funciones prediseñadas (ej. dejar que apache lea homes).',
          'Ports — habilitan sockets de red específicos.',
        ],
      },
      {
        title: 'Herramientas de auditoría',
        items: [
          '`sealert -a /var/log/audit/audit.log` — analiza logs y da sugerencias humanas.',
          '`ausearch -m AVC` — busca específicamente denegaciones de SELinux.',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Contenedores con Podman ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Fundamentos de Podman',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — descarga la imagen oficial de Red Hat Universal Base Image.' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — arranca un contenedor interactivo.' },
        { emoji: '🔍', text: '`podman ps` — lista contenedores activos. `podman ps -a` muestra también los parados.' },
        { emoji: '⚡', text: '`podman exec my_con ls /` — ejecuta un comando dentro de un contenedor en marcha.' },
        { emoji: '🗑️', text: '`podman rm my_con` — elimina un contenedor. `podman rmi ubi9` elimina la imagen.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos de ciclo de vida',
        items: [
          '`run` — crea y arranca (it=interactivo, d=segundo plano, --name=nombre)',
          '`stop` / `start` — pausar y reanudar',
          '`logs` — ver que está pasando dentro',
          '`inspect` — ver detalles de red y montajes',
        ],
      },
      {
        title: 'Diferencia con Docker',
        items: [
          'Daemonless — no hay un proceso root gigante controlándolo todo.',
          'Rootless — puedes correr contenedores seguros como usuario normal.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman ps',
      output: 'CONTAINER ID  IMAGE                           COMMAND     CREATED      STATUS      PORTS       NAMES\n9abc12345678  registry.access.../ubi9:latest  /bin/bash   2 hours ago  Up 2 hours              my_ubi',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Registros e Imágenes',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — busca imágenes en los registros configurados (docker.io, quay.io).' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — identifícate en un registro privado.' },
        { emoji: '🏷️', text: '`podman tag app:v1 repo.com/app:v1` — renombra una imagen para subirla.' },
        { emoji: '📤', text: '`podman push repo.com/app:v1` — sube tu imagen al servidor central.' },
        { emoji: '📄', text: 'Configuración: `/etc/containers/registries.conf` define dónde buscar por defecto.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestión de Imágenes',
        items: [
          '`podman images` — listar descargadas',
          '`podman history` — ver capas de construcción',
          '`podman image prune` — borrar imágenes huérfanas',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -2',
      output: 'NAME                      DESCRIPTION                STARS   OFFICIAL\ndocker.io/library/nginx   Official build of Nginx.   18000   [OK]',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 El Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — define la imagen base sobre la que construiremos.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd` — ejecuta comandos durante la creación de la imagen.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — añade archivos de tu PC al contenedor.' },
        { emoji: '🚪', text: '`EXPOSE 80` — indica qué puerto escuchará. `CMD ["httpd", "-D", "FOREGROUND"]` — comando de arranque.' },
        { emoji: '🔨', text: '`podman build -t my_web:v1 .` — compila el archivo actual en una imagen nueva.' },
      ],
    },
    keyPoints: [
      {
        title: 'Instrucciones comunes',
        items: [
          '`ENV` — definir variables de entorno',
          '`WORKDIR` — establecer directorio de trabajo',
          '`ENTRYPOINT` — comando principal que no se sobreescribe fácilmente',
          '`USER` — cambiar a usuario no-root para mayor seguridad',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd\nCOPY . /var/www/html/\nCMD ["httpd", "-DFOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Persistencia y Red',
      panels: [
        { emoji: '📂', text: '`-v /host:/container:Z` — monta una carpeta del PC en el contenedor. ¡Ojo al :Z para SELinux!' },
        { emoji: '🔌', text: '`-p 8080:80` — mapea el puerto 8080 del PC al 80 del contenedor.' },
        { emoji: '📦', text: '`podman volume create datos` — crea un volumen gestionado por podman.' },
        { emoji: '🌐', text: '`podman network create mi_red` — permite que varios contenedores se hablen por nombre.' },
        { emoji: '⚙️', text: '`podman generate systemd --name mycon --files` — crea un servizio para arrancar el contenedor al boot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Persistencia con SELinux',
        items: [
          'Sin la flag `:z` (compartido) o `:Z` (privado), el contenedor no podrá escribir en el volumen por culpa de SELinux.',
          'Esta es la causa de fallo #1 en el examen RHCSA.',
        ],
      },
      {
        title: 'Integración con systemd (rootless)',
        items: [
          'Coloca los archivos `.service` en `~/.config/systemd/user/`.',
          'Usa `systemctl --user enable --now container-xxx`.',
          'Importante: `loginctl enable-linger` para que el contenedor siga vivo al cerrar sesión.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d -p 8080:80 -v /web:/var/www/html:Z my_web',
      output: '7d7c6b5a4e3d2c1b...',
    },
  },

};
