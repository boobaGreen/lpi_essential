// RHCSA Quiz — Topic 6: System Maintenance (Spanish) — 15 questions

export const rhcsaTopic6QuizzesES = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando instala el paquete "httpd" descargando todas sus necesidades empleando el gestor oficial dnf?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: 'dnf install <paquete> descarga e instala tanto el software como sus dependencias. "yum" es su antecesor y ya está obsoleto arquitectónicamente (aunque sea un alias a dnf en rhel9).',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Si quieres forzar una actualización profunda de todos los paquetes instalados en RHEL9, ¿cómo lo escribes?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'Tanto A como B hacen exactamente lo mismo en este SO'],
    correct: 3,
    explanation: 'A diferencia de Debian (apt), en la familia Red Hat actual dnf update y dnf upgrade son alias perfectos: ambos actualizan todos los paquetes eliminando los binarios obsoletos.',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Tienes el ejecutable /usr/bin/vim pero no sabes quién diablos lo instaló. ¿Cómo descubres el paquete padre que lo provee?',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'Tanto B como C resuelven el problema',
    ],
    correct: 3,
    explanation: 'dnf provides busca en los repositorios online y locales; rpm -qf (query file) busca rápido en la base de datos local asumiendo que ya fue instalado. Ambas responden a "quién trajo este archivo a mi disco".',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Estás en un búnker sin internet y has amarrado el pendrive USB ISO rhel9 en /mount/point. ¿Cómo lo configuras como el repositorio maestro local copiando las credenciales correctas en tu terminal?',
    options: [
      'Debes crear a mano un archivo .repo que contenga: baseurl=file:///mount/point',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: 'Definir repos locales oflline exige añadir un archivo en `/etc/yum.repos.d/` usando la notación URI "file:///" mas la ruta absoluta (con triple barra total). config-manager también funciona pero la A es el fundamento manual a entender.',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Se te pide listar el testamento completo de cada programa o paquete inyectado en la máquina Linux en toda su historia. ¿Cuáles comandos hacen eso?',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Tanto B como C'],
    correct: 3,
    explanation: '`dnf list installed` o su versión corta tradicional `rpm -qa` (query all) imprimen una avalancha inmensa línea por línea del software que actualmente reside instalado.',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Tienes httpd instalado pero quieres saber a dónde fue a parar y desmembrar cada archivito interno que lo forma. ¿Qué opción de rpm le lanzas?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'rpm -ql (query list) enumera absolutamente todos los archivos y rutas de instalación esparcidos por el sistema originarios de ese paquete.',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Sospechas que un hacker corrompió los binarios oficiales del httpd. ¿Cómo mandas a RPM a escanear, auditar e inspeccionar que las sumas MD5 midan lo prometido de fábrica?',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: 'rpm -V (Verify) compara sigilosamente el estado actual de los archivos en disco (tamaños, permisos, sumas sha) frente a cómo venían en la base de datos de instalación inicial (virgen).',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Tienes en un pen-drive un instalador manual ".rpm". Quieres forzar al sistema a tragárselo sin conectarse a internet e INCLUSO sin resolver dependencias ni prerrequisitos de librerías faltantes.',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: '--nodeps fuerza ciegamente (y muy peligrosamente) la instalación ignorando las bibliotecas requeridas omitidas. -ivh instala con barra de progreso de hashtags en consola.',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Dónde reside el único archivo oficial legal que el sysadmin de RedHat 9 puede manosear para editar el comportamiento basal de gestor de arranque de GRUB2?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: '`/etc/default/grub` contiene los pre-ajustes textuales (timer, línea del kernel, etc). El archivo que descansa en `/boot` es el resultante autogenerado y el manual prohíbe tocarlo directamente.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Acabas de hacer tus cambios en configuración de `/etc/default/grub`. ¿Cómo horneas e inyectas el verdadero binario de compilación nuevo final del arranque?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'El super comando en Linux Red Hat es `grub2-mkconfig` con bandera -o (output file) fijando destino al archivo estático matriz de `/boot/grub2/grub.cfg`.',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Si quieres que el menú oscuro del GRUB al arrancar ponga una cuenta regresiva de 5 segundos pidiendo opciones antes de auto iniciar Linux...',
    options: [
      'Editas GRUB_TIMEOUT=5 en el /etc/default/grub, luego compilas con grub2-mkconfig',
      'Haces grub2-set-default 5',
      'Metes echo 5 > /boot/grub2/timeout',
      'Corres grub2-mkconfig --timeout=5 en la shell cruda',
    ],
    correct: 0,
    explanation: 'Todo control superficial como los plazos (timeout default de 5s en rhel9) ocurren cambiando el label interno de `/etc/default/grub` y re-compilando tras guardar.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '¿Qué directorio sufre todo el escrutinio de parseo con scripts y menús anidados crudos dictando los kernels a los que un operador de RHCSA debiese poder ingresar?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 1,
    explanation: '`/boot/grub2/grub.cfg` es como la mega-constitución intocable, el compendio donde se pegaron y listan final e inseparablemente las alternativas kernel instaladas desde /boot y scripts locales de /etc/grub.d.',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Si quieres traerte un arsenal completo de compiladores o un bloque completo empaquetado como "Development Tools", ¿qué invocas de una sola tacada con dnf?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'Las formas B y C son sinónimas y válidas',
    ],
    correct: 3,
    explanation: 'Tanto "group install" (formal moderno) como "groupinstall" (retro) invocan repositorios englobadores cargando en avalancha todos los sub-paquetes catalogados dentro de dicho Grupo.',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Al auditar un paquete con la directiva rpm, ¿con qué letras conjuntas consigues imprimir los créditos descriptivos, info del desarrollador, link URL y resumen del código?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: 'rpm -qi saca el panel (Query Info) que despliega metadatos humanizados sobre fecha elaborada, creador y utilidad del binario en software libre.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Urge pasar el instalador del paquete httpd a un servidor seguro desvinculado offline por lo que solo deseas bajar el instalable bruto .rpm (para echarlo al USB) sin aplicarlo al PC que lo bajó.',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: '`dnf download` coge el binario bruto pre-formado (.rpm) y lo guarda donde estés parado en lugar de proceder a desempacarlo como lo haría `install`.',
  },
]
