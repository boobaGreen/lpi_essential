// RHCSA Quiz — Topic 5: File System (Spanish) — 20 questions

export const rhcsaTopic5QuizzesES = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Si quieres dar formato y crear un sistema de archivos ext4 nativo sobre una partición virgen /dev/sdb1, ¿qué comando invocas?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'Tanto A como B son equivalentes y válidas'],
    correct: 3,
    explanation: 'El envoltorio global (wrapper) mkfs -t ext4 llama por debajo a mkfs.ext4 directo. Se suele usar la B simplemente por ser más corta al teclear.',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'En todo el ecosistema de Red Hat (RHEL7+, RHEL9), ¿cuál es el filesystem por excelencia, oficial y puesto siempre por defecto al instalar?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'XFS destronó a ext4 por su arquitectura bestial soportando discos inmensos y un paralelismo agresivo de lectura/escritura (allocation groups).',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Necesitas hacer una autopsia o leer de qué manera XFS particionó sus bloques (block size, agcount) sobre tu disco ya montado en /data.',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: 'xfs_info apunta a un PUNTO DE MONTAJE vivo y extrae en volcado toda la biometría y metadata de la partición XFS. tune2fs es la magia equivalente reservada exlusivamente al formato ext2/3/4.',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Atención: Hubo un corte de luz brusco severo. Tu partición XFS /dev/sdb1 no quiere montar informando corrupción letal. ¿Cuál es la herramienta pesada de arreglo?',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'ATENCIÓN: xfs_repair asume el trabajo sucio. JAMAS puedes correrlo con esa partición montada (umount primero). Curiosamente fsck.xfs en RHEL no hace absolutamente nada, solo devuelve código de éxito por compatibilidad.',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Qué flag colocas en la sección de opciones al montar algo (via fstab) para delegar en systemd que la auto-monte únicamente cuando un usuario toque esa carpeta?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'x-systemd.automount intercepta llamadas mágicamente: el disco en realidad está desmontado, pero al momento en que entras a la carpeta, automount ensambla el filesystem instantáneamente on-the-fly.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando inicializa salvajemente destruyendo y creando la bóveda blindada estándar LUKS de Linux dentro de /dev/sdc1?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'cryptsetup luksFormat graba el header cifrado con los salting AES. Cuidado porque RHEL exige que digas "YES" en mayúsculas rotundas pre-formateo.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Ya pasaste la contraseña por consola, ¿cómo pides a LUKS que destrabe la partición /dev/sdc1 inyectando la llave y dejándola libre expuesta bautizada bajo el alias temporal de "datadisk"?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'Tanto A como B funcionan y son equivalentes',
    ],
    correct: 3,
    explanation: 'El comando base es "open", "luksOpen" es el alias antiguo y obsoleto que todavía funciona sin rechistar.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Para el examen práctico: te piden garantizar que tu disco cifrado LUKS inicie mágicamente el sistema en cada reinicio de forma desatendida, es decir de manera solitaria leyendo desde un archivo de llaves sin pedir que un operario digite la contraseña.',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: '/etc/crypttab ejecuta las reglas de desempaquetado de cifrados pre-fstab. Le pasas: nombre-alias, dispositivo crudo UUID, ruta de archivo key o passwd libre.',
  },
  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'En sistemas minimalistas instalados a mano, ¿qué paquete nativo tienes que asegurarte instalar vía dnf para que te funcionen los directorios compartidos por Linux-a-Linux (NFS)?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'Las herramientas maestras (cliente y servidor) que traen los comandos y demonios compatibles viven todos consolidados dentro del paquete "nfs-utils".',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'El host remoto (192.168.1.10) regala vía red su carpeta "/data". Escribe la sintaxis para amarrarlo eternamente editando `/etc/fstab`:',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'La IP o hostname va fundido con un ":" pegado a la carpeta remota compartida. (Ejemplo: serverX:/datos/exportados).',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Estás montando un laberinto temporal AutoFS. ¿Qué fichero matriz general es el primero delegado de enganchar todas las reglas de sub-rutas base apuntando a configuraciones menores?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 0,
    explanation: 'El demonio autofs siempre rastrea de inicio /etc/auto.master que es donde están definidos los mapeos raíz base y delega entonces en ficheros suplementarios donde van las subrutas hijas.',
  },
  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'El directorio /project es propiedad oficial de Root y grupo Wheel. Pero el usuario secundario (mario) requiere poder escribir de colado allí ¿cómo le otorgas el puente sin cambiar la propiedad nativa del grupo base?',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: 'setfacl (set file access control lists) agregando el flag -m (modify); seguidamente defines al u (usuario) especifico mario y que privilegios tendrá rw.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Lanzas ls -la a un directorio y ves que sus permisos terminan con un signo "+" osea: "drwxr-x---+". ¿Cómo logras desvelar sus secretos?',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: 'getfacl imprimirá el árbol detallado revelando exactamente qué usuarios "extra" esconden esos privilegios que ls callaba en el listado base.',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Tus programadores en un equipo están enfadados porque siempre que crean un archivo en /shared/ se guarda bajo su nombre personal y no pueden editarlo entre sí libremente. ¿Qué bit seteas a los permisos de esa carpeta madre a nivel grupo (chmod g+s) para solucionarlo?',
    options: [
      'Obliga que su ejecución sea forzada como súper-admin',
      'El flag especial setGID sobre directorios causa de inmediato que cualquier fichero interno recién creado herede por clonado el grupo matriz de la carpeta madre',
      'Permite solo al super root escribir archivos de configuración',
      'Otorga a ese directorio de la propiedad de ser inborrable e irremplazable',
    ],
    correct: 1,
    explanation: 'El setGID bit forzado sobre el flag (s) de Grupo, permite la gran colaboración compartida hereditaria entre proyectos.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'En un mundo avanzado RHCSA: ¿cómo le impones ACL por defecto al root de una ruta compartida forzando que todo documento engendrado posteriormente en su barriga contenga permisos rwx listos para mario?',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'Las tres, ya que tanto d: , -d , --default , hacen el mismo alias a configuraciones ACLs de fábrica para carpetas hijas',
    ],
    correct: 3,
    explanation: 'Un ACL predeterminado Default ("d:" o usar explícitamente la flag --default) se acopla a un directorio y se va copiando genéticamente hacia adelante de allí en toda su descendencia.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Qué opción de la línea predeterminada en el parseo fs/fstab se activa por atrás en el flag de montaje nativo para que las ACL posix finas no sean boicoteadas ni muertas?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'Normalmente todo fileystem ext moderno en RHEL lo trae default activado embebido. Y si le fallase por X razón arcaica, se inyectaría manualmente bajo la flag `acl`.',
  },
  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Por severa ley de seguridad te piden amarrar la carpeta basura compartida /tmp para que sea imposible para los cibercriminales detonar ni lanzar como ejecución scripts perversos alojados allí dentro. ¿Qué le metes en fstab?',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: 'El flag maestro "noexec" deniega por núcleo de Linux (kernel-level) que el binario salte en ram como ejecutable validado, no importa sus permisos read write execute pre-puestos locales.',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Comando clásico simple rápido human friendly para saber de un vistazo sin estresarse tamaño/libre en gigas de toooodas particiones.',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'df -h (Disk Free) es el pantallazo infaltable; te imprime la estadística viva humanizada y porcentaje usado en montajes finales reales.',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Enganchaste un NAS remoto SMB/CIFS vía mount red en el archivo de auto boot. ¿Cúal string o blindaje fstab te salva para que tu servidor redhat NO explote, se frize, y arranque normalmente de regreso incluso cuando el servidor NAS haya caído en picada oflline sin poder pinguearle la red local a la hora de rebootear RHEL?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: '"nofail" te salvará el grado. Systemd probará, y ante timeout asume la falla tolerada evadiendo mandarte al infierno de la consola Recovery Emergency boot y continúa armando a gusto resto sistema.',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Has abierto y roto los candados y la clave de acceso de una recién cruda cripto-tabla LUKS virgen vacía en /dev/mapper/secreto. Cúal es la orden de creación natural consecuente sobre /secreto para luego poder escribir libremente documentos?',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/secreto',
      'cryptsetup mkfs /dev/mapper/secreto',
      'luks-mkfs /dev/mapper/secreto',
    ],
    correct: 1,
    explanation: 'Llamas literalmente al formateador EXT4/XFS nativo puro directamente dirigiéndolo al Mapper descifrado abierto (es decir tu interfaz de puerta), JAMAS formatees al disco nativo LUKS sdc bloqueado raw por fuera porque lo destruyes todo y se va.',
  },
]
