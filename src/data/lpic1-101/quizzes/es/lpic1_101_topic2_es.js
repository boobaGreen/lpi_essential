// LPIC-1 101 Quiz — Tema 2: Instalación y Gestión de Paquetes (Español)

export const lpic1_101_topic2QuizzesES = [
  // ─── 102.1 Diseño de la disposición del disco (8 preguntas) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué jerarquía del sistema de archivos debe estar disponible durante la fase inicial de arranque antes de que se monten otros sistemas de archivos?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: '/boot contiene el kernel y los archivos initramfs requeridos por el gestor de arranque para iniciar el sistema operativo.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el propósito principal de una partición de intercambio (swap) en Linux?',
    options: [
      'Almacenar copias de seguridad del sistema',
      'Actuar como memoria virtual cuando la RAM física está llena',
      'Intercambiar datos entre Windows y Linux',
      'Almacenar archivos temporales borrados al reiniciar'
    ],
    correct: 1,
    explanation: 'El espacio swap actúa como un área de desbordamiento (memoria virtual) donde el kernel vuelca bloques de memoria cuando la RAM está muy utilizada.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Por qué es muy recomendable colocar /home en una partición separada?',
    options: [
      'Aumenta el rendimiento del sistema',
      'Permite reinstalar el sistema operativo sin perder los datos de usuario',
      'Evita que los usuarios consuman demasiado tiempo de CPU',
      'El kernel lo requiere para arrancar'
    ],
    correct: 1,
    explanation: 'Tener /home en una partición separada significa que puedes borrar la partición raíz (/) para actualizar o reinstalar el SO preservando los archivos de usuario.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué directorio debería colocarse en una partición separada si el sistema ejecuta una base de datos o genera archivos de registro masivos?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: '/var contiene datos variables como registros, colas de correo y bases de datos. Si se llena, puede bloquear el sistema a menos que esté aislado.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es el número máximo absoluto de particiones primarias permitido en un disco usando la tabla de particiones MBR clásica?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'MBR (Master Boot Record) permite un máximo de 4 particiones primarias. Para tener más, una debe ser una partición extendida.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué tecnología permite combinar múltiples discos físicos en un solo grupo de volúmenes y crear volúmenes lógicos redimensionables?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'LVM (Logical Volume Manager) proporciona una capa de abstracción sobre el almacenamiento físico.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Al instalar Linux en un sistema moderno basado en UEFI, ¿qué partición especial es estrictamente necesaria?',
    options: ['Una partición swap', 'Un volumen físico LVM', 'Una partición de sistema EFI (ESP)', 'Una partición /boot formateada como ext4'],
    correct: 2,
    explanation: 'El firmware UEFI requiere una ESP, típicamente formateada como FAT32 y montada en /boot/efi.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando muestra la tabla de particiones actual de un disco específico como /dev/sda?',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'fdisk -l seguido del nombre del dispositivo muestra la tabla de particiones (MBR o GPT) de ese dispositivo.',
  },

  // ─── 102.2 Instalación de un gestor de arranque (4 preguntas) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando instala el cargador de arranque GRUB2 en el Master Boot Record (MBR) del primer disco duro?',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install es el comando para instalar los archivos de GRUB y configurar el sector de arranque en un disco.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Después de editar /etc/default/grub, ¿qué comando debe ejecutarse para generar el archivo grub.cfg final en un sistema Debian?',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub es un script que ejecuta `grub-mkconfig -o /boot/grub/grub.cfg` en distribuciones basadas en Debian.',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo de configuración de GRUB2 NUNCA debe editarse manualmente según los comentarios de su encabezado?',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg se genera automáticamente y se sobrescribirá ante cualquier actualización.',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'En la terminología de GRUB2, ¿cómo se representa la primera partición del primer disco duro?',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'GRUB2 cuenta los discos desde 0 (hd0) pero las particiones típicamente desde 1 (hd0,1).',
  },

  // ─── 102.3 Gestión de bibliotecas compartidas (4 preguntas) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra las dependencias de bibliotecas compartidas requeridas por un ejecutable vinculado dinámicamente?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) imprime las bibliotecas compartidas (.so) requeridas por un programa.',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo de configuración enumera los directorios donde el enlazador dinámico busca bibliotecas compartidas?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: '/etc/ld.so.conf define los directorios que ld.so utiliza para buscar bibliotecas.',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Después de agregar un nuevo directorio a /etc/ld.so.conf, ¿qué comando DEBE ejecutarse para actualizar la caché de bibliotecas?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'ldconfig actualiza la caché del enlazador dinámico (/etc/ld.so.cache).',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué opción de comando para ldconfig permite ver las bibliotecas almacenadas actualmente en caché en /etc/ld.so.cache?',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) muestra las listas de directorios y bibliotecas candidatas almacenadas en la caché.',
  },

  // ─── 102.4 Gestión de paquetes Debian (6 preguntas) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta de bajo nivel de Debian se utiliza para instalar un archivo .deb local sin descargar dependencias automáticamente?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'dpkg es el gestor base de Debian. `dpkg -i archivo.deb` instala un paquete local.',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando actualiza el índice local de paquetes disponibles desde los repositorios en un sistema Debian?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update descarga las listas de paquetes más recientes de los repositorios.',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la diferencia principal entre `apt remove` y `apt purge`?',
    options: [
      'remove desinstala el paquete; purge lo borra de la caché de apt',
      'remove deja los archivos de configuración; purge elimina el paquete Y sus archivos de configuración',
      'purge fuerza la eliminación ignorando dependencias',
      'No hay diferencia'
    ],
    correct: 1,
    explanation: 'apt purge elimina completamente el paquete, incluyendo los archivos de configuración global.',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando enumera todos los paquetes instalados en un sistema basado en Debian?',
    options: ['dpkg -l', 'apt list --installed', 'Tanto dpkg -l como apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Tanto `dpkg -l` como `apt list --installed` realizan esta acción.',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Qué indicador de dpkg permite averiguar qué paquete instalado proporcionó un archivo específico (ej. /bin/ls)?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) busca un nombre de archivo entre los paquetes instalados.',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo almacena la lista de URLs de repositorios que APT utiliza para descargar paquetes?',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list es el archivo de configuración principal de las fuentes de paquetes de APT.',
  },

  // ─── 102.5 Gestión de paquetes RPM y YUM/DNF (6 preguntas) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta de bajo nivel se utiliza para instalar un archivo .rpm local en un sistema basado en Red Hat?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) es el comando base para instalar un paquete RPM.',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué herramienta moderna de alto nivel reemplazó a YUM como gestor de paquetes por defecto en Fedora y RHEL 8+?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) es la versión de próxima generación de YUM.',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando enumera todos los paquetes RPM instalados en el sistema?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) enumera todos los paquetes RPM instalados actualmente.',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando rpm consulta un paquete instalado para ver qué archivos instaló?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) enumera los archivos instalados por un paquete específico.',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se encuentra qué paquete RPM proporcionó el archivo /etc/httpd/conf/httpd.conf?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) busca qué paquete instalado posee el archivo especificado.',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando verifica la integridad de un paquete RPM instalado?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) compara los archivos instalados con los metadatos originales.',
  },

  // ─── 102.6 Virtualización (4 preguntas) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es la diferencia principal entre los hipervisores de Tipo 1 y Tipo 2?',
    options: [
      'El Tipo 1 requiere Windows, el Tipo 2 requiere Linux',
      'El Tipo 1 se ejecuta directamente sobre el hardware, el Tipo 2 se ejecuta sobre un sistema operativo anfitrión',
      'El Tipo 1 es para contenedores, el Tipo 2 es para máquinas virtuales',
      'No hay diferencia'
    ],
    correct: 1,
    explanation: 'El Tipo 1 se ejecuta en metal desnudo para máximo rendimiento. El Tipo 2 se ejecuta como una aplicación.',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿En qué se diferencian los contenedores Linux (como Docker) de las máquinas virtuales completas?',
    options: [
      'Los contenedores son más lentos que las VMs',
      'Los contenedores comparten el kernel del sistema operativo anfitrión, evitando la sobrecarga de un SO invitado completo',
      'Los contenedores pueden ejecutar apps de Windows de forma nativa en Linux',
      'Los contenedores requieren hardware dedicado'
    ],
    correct: 1,
    explanation: 'Los contenedores comparten el kernel del anfitrión, aislando procesos en lugar de emular hardware.',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: '¿Qué tecnología de Linux es un hipervisor de Tipo 1 nativo basado en el kernel?',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'KVM (Kernel-based Virtual Machine) convierte al kernel de Linux en un hipervisor de Tipo 1.',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el propósito de las "Guest Additions" en una máquina virtual?',
    options: [
      'Permitir que el invitado acceda al hardware del anfitrión directamente sin permiso',
      'Proporcionar mejores controladores de video, integración del ratón y carpetas compartidas',
      'Cifrar el disco virtual',
      'Permitir que la VM funcione sin kernel'
    ],
    correct: 1,
    explanation: 'Las Guest Additions proporcionan controladores optimizados que mejoran el rendimiento y usabilidad del SO invitado.',
  },
];
