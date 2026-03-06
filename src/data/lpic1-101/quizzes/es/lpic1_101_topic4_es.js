// LPIC-1 101 Quiz — Topic 4 (Spanish)

export const lpic1_101_topic4QuizzesES = [
  // ─── 104.1 Partitions and Filesystems ───
  {
    id: 'q-lpic1-104-1-001', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta interactiva de línea de comandos se usa tradicionalmente para crear y manipular tablas de particiones MBR?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` es la herramienta tradicional basada en texto interactivo para manipular tablas de particiones de discos (especialmente MBR).',
  },
  {
    id: 'q-lpic1-104-1-002', lessonId: 'lpic1-104-1-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando escribe un sistema de archivos ext4 en la partición /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` construye un sistema de archivos ext4 en un dispositivo/partición específico.',
  },

  // ─── 104.2 Filesystem Integrity ───
  {
    id: 'q-lpic1-104-2-001', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es un requisito crítico antes de ejecutar `fsck` para reparar un sistema de archivos?',
    options: [
      'El sistema debe reiniciarse en el target rescue',
      'El sistema de archivos debe estar desmontado o montado como solo lectura',
      'El usuario root debe ejecutarlo con la bandera --force',
      'El sistema de archivos debe ser un volumen lógico'
    ],
    correct: 1,
    explanation: 'Ejecutar fsck en un sistema de archivos activo (lectura/escritura) puede provocar daños graves.',
  },
  {
    id: 'q-lpic1-104-2-002', lessonId: 'lpic1-104-2-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Si necesita saber cuánto espacio en disco consume un directorio específico (como /var/log), ¿qué comando usa?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) estima el uso de espacio. `-s` proporciona un total resumido y `-h` lo hace legible.',
  },

  // ─── 104.3 Mounting and Unmounting ───
  {
    id: 'q-lpic1-104-3-001', lessonId: 'lpic1-104-3-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué archivo de configuración lee el SO durante el arranque para montar sistemas de archivos automáticamente?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab contiene información estática sobre los sistemas de archivos y sus puntos de montaje.',
  },

  // ─── 104.5 Permissions and Ownership ───
  {
    id: 'q-lpic1-104-5-001', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Si un archivo tiene permisos `rwxr-xr--`, ¿cuál es el equivalente numérico (octal)?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (4+2+1=7) para el usuario, r-x (4+0+1=5) para el grupo, r-- (4+0+0=4) para los demás. Resultado: 754.',
  },
  {
    id: 'q-lpic1-104-5-002', lessonId: 'lpic1-104-5-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué ocurre cuando un archivo ejecutable binario tiene activado el bit SUID (Set User ID)?',
    options: [
      'El archivo solo puede ser modificado por root',
      'Al ejecutarse, el proceso se ejecuta con los privilegios del propietario del archivo, no de quien lo ejecuta',
      'El archivo se ejecuta automáticamente en segundo plano',
      'Nadie excepto root puede eliminarlo'
    ],
    correct: 1,
    explanation: 'SUID permite que un usuario normal ejecute un archivo con los privilegios temporales del propietario (comúnmente root, como el comando passwd).',
  },

  // ─── 104.6 Hard and Soft Links ───
  {
    id: 'q-lpic1-104-6-001', lessonId: 'lpic1-104-6-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes comandos crea un enlace simbólico (soft link) llamado `acceso` que apunta a `archivo.txt`?',
    options: ['ln archivo.txt acceso', 'ln -s archivo.txt acceso', 'link archivo.txt acceso', 'ln -c archivo.txt acceso'],
    correct: 1,
    explanation: '`ln -s destino nombre_enlace` crea un enlace simbólico. Sin `-s`, crea un enlace duro.',
  },

  // ─── 104.7 FHS ───
  {
    id: 'q-lpic1-104-7-001', lessonId: 'lpic1-104-7-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Según el FHS (Filesystem Hierarchy Standard), ¿dónde deben ubicarse los archivos de configuración globales del sistema?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc contiene archivos de configuración de todo el sistema.',
  },
]
