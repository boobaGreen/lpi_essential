// LPIC-1 102 Quiz Pool — Spanish — Topic 108 (Servicios Esenciales del Sistema)

export const lpic1_102_topic4Quizzes_es = [
  // ─── 108.1 Mantener la hora del sistema (5 preguntas) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando permite sincronizar el reloj de hardware (RTC) con el reloj del sistema (software)?',
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: '--systohc copia el valor del sistema al Hardware Clock.'
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el protocolo estándar utilizado para sincronizar la hora del sistema a través de una red?',
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: 'El Protocolo de Tiempo de Red (NTP) se utiliza para mantener los relojes del sistema precisos a través de servidores de tiempo.',
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué utilidad moderna de systemd se utiliza para consultar y cambiar los ajustes del reloj del sistema?',
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: '`timedatectl` gestiona la configuración de hora, fecha y zona horaria en distribuciones basadas en systemd.',
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué software es un reemplazo común para el clásico ntpd, diseñado para sincronizar la hora más rápido y de forma más precisa en sistemas con conexión esporádica?',
    options: ['chrony', 'timesync', 'sync-ntp', 'timed'],
    correct: 0,
    explanation: 'Chrony es una implementación alternativa de NTP que es particularmente buena para sistemas que no están siempre en línea.',
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'El reloj de hardware (RTC) suele estar configurado en qué estándar de tiempo en los servidores Linux?',
    options: ['Hora Local', 'PST', 'UTC', 'GMT+1'],
    correct: 2,
    explanation: 'Los sistemas Linux suelen esperar que el reloj de hardware esté en Tiempo Universal Coordinado (UTC).',
  },

  // ─── 108.2 Registro del sistema (Logging) (5 preguntas) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué utilidad se encarga de la rotación automática de los archivos de log para evitar que llenen el disco?',
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: 'logrotate rota, comprime y gestiona la longevidad de los logs de texto.'
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando de journalctl permite ver los mensajes de log en tiempo real a medida que llegan?',
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: '-f (follow) funciona de forma similar a "tail -f" para el journal binario.'
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el nombre del demonio de systemd que recoge los mensajes de log en formato binario?',
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: 'systemd-journald es el demonio que gestiona el "journal" binario.'
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Dónde se encuentra el archivo de configuración principal para el demonio rsyslog?',
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: '/etc/rsyslog.conf define cómo se filtran los logs y dónde se almacenan.',
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando permite a un usuario enviar manualmente un mensaje al log del sistema desde un script?',
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: 'El comando `logger` proporciona una interfaz de shell para el módulo de registro del sistema syslog(3).',
  },

  // ─── 108.3 Conceptos básicos de Mail Transfer Agent (MTA) (5 preguntas) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿En qué archivo de configuración se pueden definir alias para direcciones de correo electrónico locales en el sistema?',
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: '/etc/aliases define redirecciones para mensajes de correo locales.'
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes NO es un Mail Transfer Agent (MTA)?',
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: 'Apache es un servidor web, no un agente de transferencia de correo.'
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando debe ejecutarse después de editar /etc/aliases para asegurar que los cambios surtan efecto?',
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: '`newaliases` reconstruye la base de datos utilizada por el MTA para las consultas.',
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando permite a un administrador ver la cola actual de mensajes de correo salientes?',
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: '`mailq` (o `mail -bp`) enumera todos los mensajes que se encuentran actualmente en la cola de correo.',
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'En Postfix, ¿cuál es el archivo de configuración principal utilizado para establecer parámetros globales como `myhostname`?',
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: 'main.cf es el archivo de configuración principal para los ajustes de Postfix.',
  },

  // ─── 108.4 Gestionar impresoras e impresión (5 preguntas) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿En qué puerto predeterminado responde la interfaz de administración web de CUPS?',
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: 'CUPS utiliza el puerto 631 para el protocolo IPP y la interfaz web.'
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando se utiliza para eliminar un trabajo de impresión específico de la cola?',
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: 'lprm (line printer remove) elimina trabajos de la cola de CUPS.'
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra el estado de las colas de impresión en un sistema?',
    options: ['lpstat', 'lpq', 'lpc status', 'Todas las anteriores'],
    correct: 3,
    explanation: '`lpstat`, `lpq` y `lpc status` son comandos válidos para comprobar el estado de la impresora en los entornos CUPS modernos.',
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Qué herramienta es el comando de impresora de línea principal utilizado para enviar un trabajo a una impresora?',
    options: ['lp', 'lpr', 'Tanto lp como lpr son válidos', 'sendprint'],
    correct: 2,
    explanation: 'En CUPS, tanto el comando `lp` de System V como el comando `lpr` de BSD están soportados oficialmente.',
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es el nombre del archivo de configuración principal para el demonio CUPS?',
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: '`cupsd.conf` es el archivo de configuración principal para el programador de CUPS.',
  },
];
