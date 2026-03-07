// LPIC-1 101 Quiz — Topic 1 (Spanish)

export const lpic1_101_topic1QuizzesES = [
  // ─── 101.1 Arquitectura del Sistema (Hardware y Periféricos - 12 preguntas) ───
  {
    id: 'q-lpic1-101-1-001', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es la principal ventaja de UEFI sobre el BIOS tradicional?',
    options: [
      'Es hardware de código abierto',
      'Solo soporta sistemas de 32 bits',
      'Soporta particiones GPT mayores a 2TB y Secure Boot',
      'No requiere un gestor de arranque como GRUB2'
    ],
    correct: 2,
    explanation: 'UEFI reemplaza al BIOS, proporcionando soporte para discos GPT > 2TB, arranque seguro (Secure Boot) y un proceso de arranque más rápido.',
  },
  {
    id: 'q-lpic1-101-1-002', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué directorio virtual del kernel contiene información sobre el hardware del sistema y los procesos?',
    options: ['/dev', '/sys', '/proc', '/etc'],
    correct: 2,
    explanation: '/proc es un sistema de archivos virtual en memoria que proporciona una ventana al kernel, mostrando procesos en ejecución e información del hardware.',
  },
  {
    id: 'q-lpic1-101-1-003', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué directorio virtual es utilizado por udev para crear dinámicamente nodos de dispositivos?',
    options: ['/dev', '/udev', '/sys', '/proc'],
    correct: 0,
    explanation: '/dev contiene nodos de dispositivos (ej. /dev/sda) gestionados dinámicamente por el servicio udev.',
  },
  {
    id: 'q-lpic1-101-1-004', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando lista todos los dispositivos PCI conectados al sistema?',
    options: ['lsusb', 'lshw', 'lspci', 'lsscsi'],
    correct: 2,
    explanation: 'lspci muestra información detallada sobre todos los buses y dispositivos PCI. lsusb se usa para dispositivos USB.',
  },
  {
    id: 'q-lpic1-101-1-005', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando lista los módulos del kernel actualmente cargados en memoria?',
    options: ['modprobe', 'lsmod', 'insmod', 'modinfo'],
    correct: 1,
    explanation: 'lsmod lee /proc/modules e imprime una lista de los módulos del kernel cargados.',
  },
  {
    id: 'q-lpic1-101-1-006', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la forma recomendada de cargar un módulo del kernel junto con sus dependencias?',
    options: ['insmod', 'depmod', 'modprobe', 'lsmod'],
    correct: 2,
    explanation: 'modprobe carga inteligentemente un módulo y resuelve/carga automáticamente cualquier módulo dependiente.',
  },
  {
    id: 'q-lpic1-101-1-007', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo se elimina de forma segura un módulo del kernel cargado llamado "e1000"?',
    options: ['rmmod -f e1000', 'modprobe -r e1000', 'delete e1000', 'rm /lib/modules/e1000'],
    correct: 1,
    explanation: 'modprobe -r elimina de forma segura un módulo y sus dependencias no utilizadas.',
  },
  {
    id: 'q-lpic1-101-1-008', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es el propósito del sistema de archivos /sys (sysfs)?',
    options: [
      'Almacenar archivos de configuración (como /etc)',
      'Contener imágenes compiladas del kernel',
      'Exponer el modelo de dispositivos del kernel y la jerarquía de hardware',
      'Registrar errores del sistema'
    ],
    correct: 2,
    explanation: 'sysfs (/sys) expone la jerarquía de objetos y controladores de dispositivos del kernel hacia el espacio de usuario.',
  },
  {
    id: 'q-lpic1-101-1-009', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra los mensajes generados por el kernel durante el proceso de arranque?',
    options: ['syslog', 'dmesg', 'tail /var/log/messages', 'journalctl -k'],
    correct: 1,
    explanation: 'dmesg imprime el búfer circular del kernel, que contiene mensajes de detección de hardware e inicialización de controladores.',
  },
  {
    id: 'q-lpic1-101-1-010', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo contiene los parámetros exactos pasados al kernel por el gestor de arranque al inicio?',
    options: ['/boot/grub/grub.cfg', '/sys/kernel', '/etc/default/grub', '/proc/cmdline'],
    correct: 3,
    explanation: '/proc/cmdline muestra los argumentos pasados al kernel durante el arranque.',
  },
  {
    id: 'q-lpic1-101-1-011', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Qué directorio debe contener archivos para cargar automáticamente módulos específicos del kernel al arrancar?',
    options: ['/etc/modprobe.d/', '/etc/modules-load.d/', '/lib/modules/', '/boot/modules/'],
    correct: 1,
    explanation: '/etc/modules-load.d/ se utiliza para especificar qué módulos deben cargarse incondicionalmente al inicio.',
  },
  {
    id: 'q-lpic1-101-1-012', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando muestra información detallada sobre un módulo específico (descripción, autor, parámetros)?',
    options: ['modprobe -i', 'modinfo', 'lsmod -v', 'sysctl'],
    correct: 1,
    explanation: 'modinfo extrae y muestra metadatos de un archivo de módulo del kernel.',
  },

  // ─── 101.2 Proceso de Arranque (10 preguntas) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el orden correcto del proceso de arranque de Linux?',
    options: [
      'Bootloader -> BIOS -> init -> Kernel',
      'BIOS/UEFI -> Bootloader -> Kernel -> init/systemd',
      'Kernel -> BIOS -> Bootloader -> systemd',
      'Bootloader -> Kernel -> BIOS -> init'
    ],
    correct: 1,
    explanation: 'El firmware (BIOS/UEFI) se ejecuta primero, pasa el control al cargador de arranque (GRUB), que carga el Kernel, el cual inicia el primer proceso (init/systemd).',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es el propósito del initramfs durante el proceso de arranque?',
    options: [
      'Formatear el disco duro',
      'Proporcionar un sistema de archivos raíz temporal con controladores esenciales para montar la raíz real',
      'Comprobar errores de hardware en la RAM',
      'Es una copia de seguridad del kernel'
    ],
    correct: 1,
    explanation: 'initramfs (sistema de archivos RAM inicial) proporciona módulos del kernel necesarios (como controladores RAID o LVM) para montar el sistema de archivos raíz real.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué proceso es históricamente el primero en el espacio de usuario, iniciado por el kernel con el PID 1?',
    options: ['bash', 'grub', 'init', 'kthreadd'],
    correct: 2,
    explanation: 'init (o systemd en sistemas modernos) es el primer proceso que se inicia tras el arranque del kernel, tomando el PID 1.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es el archivo de configuración principal generado para GRUB2?',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg es el archivo principal generado por grub-mkconfig.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Para configurar el tiempo de espera de GRUB2 o parámetros predeterminados del kernel, ¿qué archivo debe editar?',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: '/etc/default/grub contiene variables personalizables por el usuario usadas para generar grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Tras editar /etc/default/grub en un sistema Debian/Ubuntu, ¿qué comando aplica los cambios?',
    options: ['grub-install /dev/sda', 'update-grub', 'grub-update', 'systemctl restart grub'],
    correct: 1,
    explanation: 'update-grub es un script que ejecuta grub-mkconfig para generar la nueva configuración.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando instala el gestor de arranque GRUB2 en el MBR del primer disco duro?',
    options: ['grub-mkconfig /dev/sda', 'update-grub /dev/sda', 'grub-install /dev/sda', 'fdisk /dev/sda'],
    correct: 2,
    explanation: 'grub-install copia las imágenes de GRUB y las incrusta en el MBR del disco especificado.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Dónde se encuentran los scripts que usa GRUB2 para generar el archivo de configuración?',
    options: ['/boot/grub/', '/etc/default/grub.d/', '/etc/grub.d/', '/usr/lib/grub/'],
    correct: 2,
    explanation: '/etc/grub.d/ contiene scripts ejecutables que grub-mkconfig usa para construir el grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el tamaño máximo de disco soportado por la tabla de particiones MBR tradicional?',
    options: ['2 GB', '2 TB', '8 TB', '8 ZiB'],
    correct: 1,
    explanation: 'MBR utiliza direccionamiento de 32 bits, lo que limita el tamaño del disco a 2 Terabytes.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'En un sistema con systemd, ¿qué comando muestra los registros (logs) específicamente del arranque actual?',
    options: ['journalctl -b', 'dmesg -boot', 'tail /var/log/boot.log', 'systemctl logs'],
    correct: 0,
    explanation: 'journalctl -b filtra el registro de systemd para mostrar solo los mensajes desde el último inicio.',
  },

  // ─── 101.3 Runlevels y Targets (10 preguntas) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'En SysVinit, ¿qué nivel de ejecución (runlevel) se usa tradicionalmente para un entorno multiusuario CON interfaz gráfica (GUI)?',
    options: ['Runlevel 1', 'Runlevel 3', 'Runlevel 5', 'Runlevel 6'],
    correct: 2,
    explanation: 'El Runlevel 5 incluye red, soporte multiusuario e inicia el entorno gráfico (X Window System).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué target de systemd equivale al Runlevel 3 de SysVinit (modo texto multiusuario)?',
    options: ['graphical.target', 'multi-user.target', 'network.target', 'rescue.target'],
    correct: 1,
    explanation: 'multi-user.target proporciona un sistema multiusuario sin entorno gráfico, correspondiente al runlevel 3.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando muestra el target de arranque predeterminado en un sistema systemd?',
    options: ['systemctl default', 'systemctl status', 'systemctl get-default', 'runlevel'],
    correct: 2,
    explanation: 'systemctl get-default imprime el target en el que systemd arrancará por defecto.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo cambia el sistema systemd actual al target multiusuario (modo texto) sin reiniciar?',
    options: [
      'systemctl switch multi-user.target',
      'systemctl isolate multi-user.target',
      'systemctl start multi-user.target',
      'systemctl default multi-user.target'
    ],
    correct: 1,
    explanation: 'systemctl isolate detiene las unidades no requeridas y arranca el nuevo target de inmediato.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es la diferencia principal entre rescue.target y emergency.target?',
    options: [
      'No hay diferencia, son alias',
      'rescue.target monta archivos locales y servicios básicos; emergency.target monta solo / como solo lectura y nada más',
      'emergency.target proporciona red, rescue.target no',
      'rescue.target es para recuperación de GRUB'
    ],
    correct: 1,
    explanation: 'emergency.target es el modo más minimalista posible para recuperación grave. rescue.target (runlevel 1) monta más sistemas de archivos.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes comandos reinicia el sistema de forma segura e inmediata?',
    options: ['shutdown -h now', 'shutdown -r now', 'halt', 'init 0'],
    correct: 1,
    explanation: 'shutdown -r now reinicia el equipo de inmediato.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando programa un apagado del sistema en 15 minutos con un mensaje de advertencia?',
    options: [
      'shutdown -t 15 "Apagado"',
      'shutdown +15 "Apagado"',
      'shutdown -h 15m "Apagado"',
      'halt +15'
    ],
    correct: 1,
    explanation: 'shutdown +15 programa el apagado en 15 minutos y notifica a los usuarios.',
  },
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Cómo se cancela un apagado que ya está programado?',
    options: ['shutdown -a', 'shutdown -c', 'killall shutdown', 'systemctl cancel shutdown'],
    correct: 1,
    explanation: 'shutdown -c cancela cualquier apagado pendiente.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando envía (broadcast) un mensaje a las terminales de todos los usuarios conectados?',
    options: ['broadcast', 'echo-all', 'wall', 'send'],
    correct: 2,
    explanation: 'wall (write all) envía un mensaje a todos los usuarios con sesión abierta.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'En SysVinit, ¿qué comando imprime el nivel de ejecución previo y el actual?',
    options: ['showlevel', 'runlevel', 'who -r', 'runlevel O who -r'],
    correct: 3,
    explanation: 'Tanto `runlevel` como `who -r` muestran el nivel de ejecución anterior y el actual.',
  },
];

