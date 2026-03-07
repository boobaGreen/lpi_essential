// LPIC-1 101 Quiz — Tema 4: Dispositivos, Sistemas de Archivos, FHS (Español)

export const lpic1_101_topic4QuizzesES = [
  // ─── 104.1 Particiones y Sistemas de Archivos (5 preguntas) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta interactiva de línea de comandos se usa tradicionalmente para crear y manipular tablas de particiones MBR?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` es la herramienta tradicional basada en texto interactivo para manipular tablas de particiones de discos (especialmente MBR).',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué herramienta de particionamiento está específicamente diseñada para trabajar con GPT (GUID Partition Table) usando una interfaz similar a fdisk?',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) está modelado según fdisk pero maneja específicamente tablas de particiones GPT.',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'A diferencia de fdisk, ¿qué herramienta de particionamiento puede aplicar cambios inmediatamente sin necesidad de un comando de escritura explícito?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) ejecuta comandos (como crear o eliminar particiones) inmediatamente en el disco.',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando escribe un sistema de archivos ext4 en la partición /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` construye un sistema de archivos ext4 en un dispositivo/partición específico.',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando prepara una partición para ser utilizada como espacio de intercambio (swap)?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` formatea la partición o archivo con una firma de intercambio.',
  },

  // ─── 104.2 Integridad del Sistema de Archivos (5 preguntas) ───
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es un requisito crítico antes de ejecutar `fsck` para reparar un sistema de archivos?',
    options: [
      'El sistema debe reiniciarse en el target rescue',
      'El sistema de archivos debe estar desmontado o montado como solo lectura',
      'El usuario root debe ejecutarlo con la bandera --force',
      'El sistema de archivos debe ser un volumen lógico'
    ],
    correct: 1,
    explanation: 'Ejecutar fsck en un sistema de archivos montado activamente en modo lectura-escritura puede provocar una corrupción grave de datos.',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra el espacio total en disco, el espacio utilizado y el disponible en todos los sistemas de archivos montados?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) informa sobre el uso del espacio en disco del sistema de archivos. La bandera `-h` lo hace legible para humanos.',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Si necesita saber cuánto espacio en disco consume un directorio específico (como /var/log), ¿qué comando usa?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) estima el uso del espacio de archivos; `-s` resume el total.',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué herramienta permite modificar parámetros (como el recuento máximo de montajes o el comportamiento ante errores) en un sistema de archivos ext4 existente?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: '`tune2fs` permite el ajuste de parámetros sintonizables del sistema de archivos en sistemas ext2/ext3/ext4.',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando se utiliza específicamente para verificar y reparar sistemas de archivos XFS?',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: 'Aunque `fsck.xfs` existe por compatibilidad, `xfs_repair` es la herramienta principal para verificar y reparar sistemas XFS.',
  },

  // ─── 104.3 Montaje y Desmontaje (5 preguntas) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué archivo de configuración lee el SO al arrancar para montar automáticamente los sistemas de archivos?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab contiene información estática sobre los sistemas de archivos y sus puntos de montaje.',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando monta todos los sistemas de archivos mencionados en /etc/fstab con la opción "auto"?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` ejecuta un montaje para cada entrada en /etc/fstab, excepto las marcadas con "noauto".',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'En /etc/fstab, ¿cuál es el propósito del sexto campo (pass)?',
    options: [
      'Define el número de veces que se puede montar el sistema de archivos',
      'Controla si el sistema de archivos usa swap',
      'Determina el orden en que fsck verifica el sistema de archivos al arrancar',
      'Establece la frecuencia de respaldo para dump'
    ],
    correct: 2,
    explanation: 'El campo pass indica a fsck el orden para verificar los sistemas de archivos. Raíz es 1, otros son 2, y 0 significa no verificar.',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué opción de montaje de fstab impide que los usuarios ejecuten cualquier archivo binario ubicado en ese sistema de archivos?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'La opción de montaje `noexec` impide la ejecución de binarios en el sistema de archivos.',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué archivo (o enlace simbólico) proporciona una lista de los sistemas de archivos montados actualmente según el kernel?',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` es un archivo virtual que refleja el estado actual de los montajes conocidos por el kernel.',
  },

  // ─── 104.5 Permisos y Propiedad (6 preguntas) ───
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Si un archivo tiene permisos `rwxr-xr--`, ¿cuál es el equivalente numérico (octal)?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4). Resultado: 754.',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando cambia el propietario y el grupo de un archivo llamado informe.doc al usuario "alice" y al grupo "finanzas"?',
    options: ['chmod alice:finanzas informe.doc', 'chown alice:finanzas informe.doc', 'chgrp alice:finanzas informe.doc', 'chuser alice:finanzas informe.doc'],
    correct: 1,
    explanation: '`chown usuario:grupo archivo` cambia tanto el propietario como el grupo.',
  },
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué sucede cuando un archivo ejecutable binario tiene activado el bit SUID (Set User ID)?',
    options: [
      'El archivo solo puede ser modificado por el usuario root',
      'Cuando se ejecuta, el proceso se ejecuta con los privilegios del propietario del archivo',
      'El archivo se ejecuta automáticamente en segundo plano',
      'No puede ser eliminado por nadie excepto root'
    ],
    correct: 1,
    explanation: 'SUID permite que un proceso se ejecute con los privilegios del propietario del archivo.',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Un directorio (/shared) tiene permisos 1777 (drwxrwxrwt). ¿Qué hace el sticky bit (la "t") aquí?',
    options: [
      'Todos los archivos recién creados heredan la propiedad del grupo',
      'Fuerza a que todos los archivos sean de solo lectura',
      'Impide que los usuarios eliminen archivos propiedad de otros usuarios dentro de este directorio',
      'Hace que el directorio sea inmutable'
    ],
    correct: 2,
    explanation: 'El sticky bit en un directorio impide que los usuarios eliminen archivos que no les pertenecen.',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Si el umask del sistema es 0022, ¿cuáles son los permisos predeterminados aplicados a un archivo de texto recién creado?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Los archivos comienzan con el permiso base 666; 666 - 022 = 644.',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué bandera se usa con `chmod` o `chown` para aplicar cambios a todos los archivos y subdirectorios dentro de un directorio?',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: 'La bandera `-R` significa recursivo y aplica el comando al directorio y a todo su árbol.',
  },

  // ─── 104.6 Enlaces Duros y Simbólicos (4 preguntas) ───
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes comandos crea un enlace simbólico (soft) llamado `acceso` que apunta a `archivo.txt`?',
    options: ['ln archivo.txt acceso', 'ln -s archivo.txt acceso', 'link archivo.txt acceso', 'ln -c archivo.txt acceso'],
    correct: 1,
    explanation: '`ln -s destino nombre_enlace` crea un enlace simbólico.',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué afirmación es VERDADERA con respecto a los enlaces duros?',
    options: [
      'Pueden apuntar a directorios',
      'Pueden cruzar diferentes sistemas de archivos',
      'Comparten exactamente el mismo número de inodo que el archivo original',
      'Si se elimina el archivo original, el enlace duro deja de funcionar'
    ],
    correct: 2,
    explanation: 'Los enlaces duros apuntan directamente al inodo y comparten el mismo número de inodo.',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué sucede con un enlace simbólico si se elimina el archivo original al que apunta?',
    options: [
      'El enlace simbólico se convierte en un enlace "roto" y deja de funcionar',
      'El enlace simbólico se elimina automáticamente',
      'Los datos permanecen disponibles a través del enlace simbólico',
      'El enlace simbólico se convierte en un enlace duro'
    ],
    correct: 0,
    explanation: 'Un enlace simbólico se rompe si se elimina su destino.',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Cuando crea un enlace duro a un archivo, ¿qué sucede con el recuento de enlaces (link count) del inodo de ese archivo?',
    options: [
      'Disminuye en 1',
      'Aumenta en 1',
      'Permanece igual',
      'Se restablece a 0'
    ],
    correct: 1,
    explanation: 'La creación de un enlace duro incrementa el recuento de enlaces duros (nlink) en el inodo.',
  },

  // ─── 104.7 FHS (5 preguntas) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Según el Filesystem Hierarchy Standard (FHS), ¿dónde deben ubicarse los archivos de configuración globales del sistema?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc contiene archivos de configuración específicos del host para todo el sistema.',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué directorio está destinado a datos variables que cambian rápidamente, como archivos de registro y bases de datos?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var contiene archivos de datos variables.',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Dónde deben instalarse los paquetes de software opcionales de terceros de acuerdo con el FHS?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt está reservado para la instalación de paquetes de software adicionales.',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'En los sistemas Linux modernos que se adhieren al FHS, ¿qué directorio suele ser un enlace simbólico a /usr/bin?',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: 'Muchas distribuciones modernas han fusionado `/bin` y `/usr/bin`, convirtiendo a `/bin` en un enlace simbólico a `/usr/bin`.',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué directorio contiene archivos temporales que NO se garantiza que se conserven entre reinicios del sistema?',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` es para archivos temporales; muchos sistemas lo limpian al reiniciar. `/var/tmp` es para archivos que deben preservarse entre reinicios.',
  },
];
