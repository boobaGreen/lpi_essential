// LPIC-1 102 Quiz Pool — Spanish — Topic 107 (Tareas Administrativas)

export const lpic1_102_topic3Quizzes_es = [
  // ─── 107.1 Gestionar cuentas de usuario y de grupo (8 preguntas) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿En qué archivo se almacenan las contraseñas de usuario cifradas y los datos de expiración de cuenta en la mayoría de los sistemas Linux modernos?',
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: '/etc/shadow solo es legible por root y contiene los hashes de las contraseñas.'
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando se utiliza para cambiar los parámetros de expiración de la contraseña, como hacer que expire en 90 días?',
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: 'chage (change age) es la herramienta para gestionar las políticas de expiración de contraseñas.'
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué representa el tercer campo en el archivo /etc/passwd?',
    options: [
      'Nombre de usuario',
      'ID de grupo (GID)',
      'ID de usuario (UID)',
      'Directorio personal (home)'
    ],
    correct: 2,
    explanation: 'El formato es nombre_de_usuario:contraseña:UID:GID:comentario:home:shell.'
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra el ID de usuario (UID) y los IDs de grupo (GID) del usuario actual?',
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: "El comando 'id' proporciona información completa sobre la identidad de un usuario."
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo contiene la lista de grupos y sus miembros?',
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: '/etc/group define los grupos disponibles en el sistema.',
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando se utiliza para añadir un usuario a un grupo secundario sin eliminarlo de sus grupos existentes?',
    options: ['usermod -g grupo usuario', 'usermod -aG grupo usuario', 'useradd -G grupo usuario', 'groupmod -A usuario grupo'],
    correct: 1,
    explanation: '`usermod -aG` añade al usuario al grupo o grupos especificados.',
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué archivo consulta el comando `useradd` para determinar la base predeterminada del directorio home y el directorio esqueleto?',
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', 'Tanto /etc/login.defs como /etc/default/useradd'],
    correct: 3,
    explanation: 'Ambos archivos proporcionan valores predeterminados para el proceso de creación de cuentas.',
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando borra una cuenta de usuario y opcionalmente elimina su directorio home?',
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: '`userdel -r` elimina el usuario y los archivos de su directorio personal.',
  },

  // ─── 107.2 Automatización de la administración del sistema (6 preguntas) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'En un archivo crontab, ¿qué representa el primer campo (extremo izquierdo)?',
    options: [
      'Hora',
      'Mes',
      'Minuto',
      'Día de la semana'
    ],
    correct: 2,
    explanation: 'La sincronización de Cron comienza con los minutos (0-59).'
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra la cola de trabajos programados con el comando "at"?',
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: "atq significa 'at queue' (cola de at)."
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué directorio se utiliza para los crontabs del sistema que se ejecutan cada hora?',
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: '/etc/cron.hourly/ es donde el sistema busca scripts para ejecutar cada hora.',
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué herramienta permite ejecutar trabajos recurrentes a una hora específica, pero también gestiona los casos en los que el sistema estaba apagado durante la hora programada?',
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: '`anacron` está diseñado para sistemas que no están funcionando las 24 horas del día.',
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se edita su archivo crontab personal de forma segura?',
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/usuario'],
    correct: 1,
    explanation: '`crontab -e` abre el crontab del usuario en el editor predeterminado y valida la sintaxis al salir.',
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué archivo especifica los usuarios a los que se les prohíbe explícitamente usar el comando `at`?',
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: '/etc/at.deny enumera los usuarios que no pueden programar trabajos con `at`.',
  },

  // ─── 107.3 Localización e internacionalización (6 preguntas) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué variable de entorno especifica el idioma y la codificación predeterminados globales para el sistema?',
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: 'LANG es la variable principal para los ajustes de localización.'
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se configura típicamente la zona horaria local en un sistema Linux?',
    options: [
      'Editando /etc/timezone.conf',
      'Enlazando /usr/share/zoneinfo/ a /etc/localtime',
      'Configurando la variable TZ en /etc/profile',
      'Ejecutando el comando "clockset"'
    ],
    correct: 1,
    explanation: 'Que /etc/localtime sea un enlace simbólico a un archivo en zoneinfo es el método estándar.'
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '¿Qué variable, si se establece, anula todas las demás variables de entorno LC_*?',
    options: ['LC_FORCE', 'LC_ALL', 'LANG', 'LC_OVERRIDE'],
    correct: 1,
    explanation: '`LC_ALL` tiene la máxima prioridad y anula las categorías individuales y la variable LANG.',
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando se utiliza para convertir la codificación de un archivo, por ejemplo, de ISO-8859-1 a UTF-8?',
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: '`iconv` (Internationalization Conversion) es la utilidad estándar para convertir codificaciones de archivos.',
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando muestra la fecha, hora y zona horaria actuales del sistema?',
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: '`date` muestra y ajusta el reloj del sistema.',
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Unicode (y su codificación UTF-8) está destinado a proporcionar ¿qué?',
    options: [
      'Una forma de comprimir archivos de texto',
      'Un conjunto de caracteres universal para todos los idiomas',
      'Un estándar de cifrado para el tráfico web',
      'Una velocidad de procesamiento más rápida para las consultas de la base de datos'
    ],
    correct: 1,
    explanation: 'Unicode proporciona un número único para cada carácter, independientemente de la plataforma o el idioma.',
  },
];
