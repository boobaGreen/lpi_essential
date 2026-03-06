// LPIC-1 101 Quiz — Topic 2 (Spanish)

export const lpic1_101_topic2QuizzesES = [
  // ─── 102.1 Hard Disk Layout ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué directorio debe estar disponible durante la fase inicial de arranque antes de montar otros sistemas de archivos?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot contiene el kernel y los archivos initramfs requeridos por el gestor de arranque.',
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el propósito principal de una partición de intercambio (swap) en Linux?',
    options: [
      'Almacenar copias de seguridad',
      'Actuar como memoria virtual cuando la RAM física está llena',
      'Intercambiar datos entre Windows y Linux',
      'Almacenar archivos temporales borrados al reiniciar'
    ],
    correct: 1,
    explanation: 'El espacio Swap actúa como memoria virtual donde el kernel pagina bloques de memoria cuando la RAM está muy utilizada.',
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Por qué es muy recomendable colocar /home en una partición separada?',
    options: [
      'Aumenta el rendimiento del sistema',
      'Permite reinstalar el sistema operativo sin perder los datos de los usuarios',
      'Evita que los usuarios consuman demasiado tiempo de CPU',
      'El kernel lo requiere para arrancar'
    ],
    correct: 1,
    explanation: 'Tener /home separado permite formatear la partición raíz (/) para actualizar el SO preservando los archivos de usuario.',
  },

  // ─── 102.3 Shared Libraries ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-1-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra las dependencias de bibliotecas compartidas requeridas por un ejecutable?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) imprime las bibliotecas compartidas (.so) requeridas por un programa.',
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-1-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Después de agregar un nuevo directorio a /etc/ld.so.conf, ¿qué comando DEBE ejecutarse para actualizar la caché de bibliotecas?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig actualiza la caché del enlazador dinámico (/etc/ld.so.cache).',
  },

  // ─── 102.4 Debian Package Management ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta de bajo nivel de Debian se utiliza para instalar un archivo .deb sin descargar dependencias automáticamente?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg es el gestor base. dpkg -i instala un paquete local pero falla si faltan dependencias.',
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-1-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la diferencia principal entre `apt remove` y `apt purge`?',
    options: [
      'remove desinstala el paquete; purge lo borra de la caché de apt',
      'remove deja los archivos de configuración; purge elimina el paquete Y sus archivos de configuración',
      'purge fuerza la eliminación ignorando dependencias',
      'No hay diferencia'
    ],
    correct: 1,
    explanation: 'apt purge o dpkg -P elimina completamente el paquete incluyendo archivos de configuración globales.',
  },

  // ─── 102.5 RPM and YUM/DNF ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta moderna de alto nivel reemplazó a YUM como gestor de paquetes por defecto en Fedora y RHEL reciente?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) es la versión de próxima generación de YUM.',
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-1-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando rpm consulta a un paquete instalado para ver qué archivos instaló?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) lista los archivos instalados por un paquete específico.',
  },
]
