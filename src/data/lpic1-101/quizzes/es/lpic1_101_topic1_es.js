// LPIC-1 101 Quiz — Topic 1 (Spanish)

export const lpic1_101_topic1QuizzesES = [
  // ─── 101.1 Hardware and Peripherals ───
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

  // ─── 101.2 Boot Process ───
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
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Cuál es el archivo de configuración principal generado para GRUB2?',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg es el archivo principal generado por grub-mkconfig.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Para configurar el tiempo de espera de GRUB2 o parámetros predeterminados del kernel, ¿qué archivo debe editar?',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: '/etc/default/grub contiene variables personalizables por el usuario usadas para generar grub.cfg.',
  },

  // ─── 101.3 Runlevels & Targets ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'En SysVinit, ¿qué nivel de ejecución (runlevel) se usa tradicionalmente para un entorno multiusuario CON interfaz gráfica?',
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
]
