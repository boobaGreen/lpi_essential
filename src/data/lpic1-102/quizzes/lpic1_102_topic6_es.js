// LPIC-1 102 Quiz Pool — Spanish — Topic 110 (Seguridad)

export const lpic1_102_topic6Quizzes_es = [
  // ─── 110.1 Realizar tareas de administración de seguridad (7 preguntas) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando permite encontrar todos los archivos del sistema que tienen activado el bit SUID?',
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: 'find con -perm /4000 (o -4000) busca archivos con el bit SUID activado.'
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando es muy recomendable para modificar el archivo /etc/sudoers para evitar errores de sintaxis?',
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: 'visudo realiza una comprobación de sintaxis antes de guardar, evitando errores que podrían bloquear el acceso a sudo.'
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra una lista de los últimos usuarios que han iniciado sesión y sus horarios?',
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: 'El comando `last` busca en el archivo /var/log/wtmp para mostrar el historial de inicio de sesión de los usuarios.',
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se conceden privilegios administrativos a un usuario en el archivo /etc/sudoers utilizando un nombre de grupo?',
    options: ['ADMIN ALL=(ALL) ALL', '%admin ALL=(ALL) ALL', 'group admin: ALL', '@admin ALL=(ALL) ALL'],
    correct: 1,
    explanation: 'El prefijo `%` en el archivo sudoers indica que el nombre que le sigue es un grupo del sistema.',
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando se utiliza para listar todos los archivos abiertos y los procesos que los abrieron, a menudo utilizado para auditorías de seguridad?',
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: '`lsof` (List Open Files) es una herramienta esencial para verificar qué proceso está accediendo a archivos o sockets específicos.',
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Qué utilidad se utiliza para limitar el número máximo de procesos abiertos por un usuario en la shell actual?',
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: 'ulimit (user limit) permite establecer límites de recursos para la shell y sus procesos hijos.'
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: '¿En qué archivo se pueden establecer límites de recursos persistentes por usuario, como el tamaño máximo de archivo o el número de inicios de sesión?',
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: '/etc/security/limits.conf es utilizado por el módulo pam_limits para aplicar los recursos del sistema.',
  },

  // ─── 110.2 Configurar la seguridad del host (6 preguntas) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '¿Qué hace el "Sticky Bit" (bit de permanencia) configurado en un directorio como /tmp?',
    options: [
      'Hace que los archivos del directorio sean inmutables',
      'Permite que solo el propietario del archivo (o root) borre o cambie el nombre del archivo',
      'Cifra automáticamente todos los archivos creados en su interior',
      'Asegura que el directorio permanezca siempre en la RAM'
    ],
    correct: 1,
    explanation: 'El Sticky Bit en directorios con permisos de escritura para todos asegura que los usuarios no puedan borrar los archivos de los demás.'
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '¿Qué archivo se utiliza para denegar explícitamente el acceso a los servicios protegidos por TCP Wrappers?',
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: 'TCP Wrappers utiliza /etc/hosts.allow y /etc/hosts.deny para el control de acceso.'
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando identifica qué puertos de red están actualmente abiertos y escuchando en su servidor?',
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', 'Todas las anteriores'],
    correct: 3,
    explanation: '`nmap`, `ss` y `netstat` pueden utilizarse para auditar los servicios de red que están a la escucha.',
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: '¿Qué utilidad de GnuPG se utiliza para cifrar un archivo de forma simétrica (mediante una frase de contraseña)?',
    options: [
      'gpg --gen-key',
      'gpg -c archivo',
      'gpg --encrypt archivo',
      'gpg --sign archivo'
    ],
    correct: 1,
    explanation: 'La opción -c (symmetric) cifra el archivo pidiendo una frase de contraseña manual.'
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se listan todas las claves públicas en su llavero (keyring) de GPG?',
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: '`gpg --list-keys` (o `gpg -k`) muestra las claves públicas que se encuentran actualmente en su almacén local.',
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: '¿Qué problema de seguridad de los archivos /etc/passwd tradicionales resuelven las contraseñas shadow (ocultas)?',
    options: [
      'Evitan que los usuarios inicien sesión varias veces',
      'Mueven los hashes cifrados a un archivo legible solo por root',
      'Aplican automáticamente contraseñas complejas',
      'Cifran el nombre de usuario'
    ],
    correct: 1,
    explanation: '/etc/passwd es legible por todos, mientras que /etc/shadow está restringido a root, protegiendo los hashes de posibles ataques de crakeo fuera de línea.',
  },

  // ─── 110.3 Configurar la seguridad a nivel de usuario (7 preguntas) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el efecto del ajuste "PermitRootLogin no" en el archivo sshd_config?',
    options: [
      'Impide que cualquier usuario se conecte como root a través de SSH',
      'Requiere una contraseña especial para el usuario root',
      'Permite el acceso de root solo mediante claves públicas',
      'Desactiva completamente la cuenta root en el sistema'
    ],
    correct: 0,
    explanation: 'Esta directiva evita ataques de fuerza bruta a la cuenta de root a través de la red.'
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el propósito del comando "ssh-agent"?',
    options: [
      'Cifrar todo el disco duro',
      'Almacenar las claves privadas descifradas para que no tenga que volver a introducir la frase de contraseña en cada conexión',
      'Generar un nuevo par de claves SSH',
      'Supervisar los intentos fallidos de inicio de sesión por SSH'
    ],
    correct: 1,
    explanation: 'El agente SSH mantiene las claves en la memoria durante la sesión del usuario.'
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta se utiliza para generar un nuevo par de claves pública/privada de SSH?',
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: '`ssh-keygen` es la herramienta estándar para crear claves de autenticación para SSH.',
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Dónde se almacena típicamente la clave pública de un usuario en un servidor remoto para permitir el inicio de sesión sin contraseña?',
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: 'El archivo `authorized_keys` contiene todas las claves públicas que tienen permitido iniciar sesión como ese usuario.',
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el nombre de archivo predeterminado para la clave privada RSA de un usuario?',
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: '`id_rsa` es el nombre estándar para la parte privada de un par de claves RSA.',
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando se utiliza para copiar fácilmente su clave pública SSH a un servidor remoto?',
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: '`ssh-copy-id` gestiona la conexión y añade su clave pública al archivo authorized_keys remoto.',
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué ajuste en sshd_config debería establecerse en "no" para imponer ÚNICAMENTE la autenticación basada en claves?',
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: 'Establecer `PasswordAuthentication no` desactiva el inicio de sesión con contraseña, convirtiendo a las claves en la única opción.',
  },
];
