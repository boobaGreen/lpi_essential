export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Medición del Uso de Recursos',
    comic: {
      title: 'El Chequeo del Sistema 🩺',
      panels: [
        { emoji: '📈', text: 'Planificación de Capacidad: no esperes a que el servidor explote para añadir más RAM.' },
        { emoji: '🕵️‍♂️', text: 'Análisis: identifica los cuellos de botella (CPU, Memoria, I/O o Red) antes de que afecten a los usuarios.' },
        { emoji: '📊', text: 'Herramientas: usa comandos como vmstat, iostat y sar para ver la película completa, no solo una foto.' },
        { emoji: '⚖️', text: 'Equilibrio: encuentra el punto óptimo entre rendimiento y coste de infraestructura.' },
      ]
    },
    keyPoints: [
      { title: 'Métricas Críticas', items: ['Carga de CPU (Load Average)', 'Uso de Memoria y Swap (Thrashing)', 'Latencia de Disco (Wait time)', 'Ancho de banda de Red'] },
      { title: 'Comandos Maestros', items: ['vmstat — Tendencias de memoria y procesos', 'iostat — Rendimiento detallado de los discos', 'sar — Histórico completo de actividad del sistema'] },
    ],
    terminal: { 
      prompt: '$ top -n 1\n$ free -m', 
      output: 'load average: 0.15, 0.08, 0.02\nMem: 16384 total, 4120 used, 12264 free, 1200 buff/cache\nSwap: 2048 total, 0 used' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Componentes del Kernel',
    comic: {
      title: 'El Director de Orquesta 🎼',
      panels: [
        { emoji: '🧠', text: 'El Kernel: el corazón del sistema operativo que gestiona el hardware.' },
        { emoji: '📦', text: 'Módulos: piezas de código que se pueden cargar y descargar "en caliente".' },
        { emoji: '🏗️', text: 'Compilación: crear un kernel a medida para maximizar el rendimiento.' },
        { emoji: '⚙️', text: 'vmlinuz: el archivo del kernel comprimido y listo para arrancar.' },
      ]
    },
    keyPoints: [
      { title: 'Tipos de Kernel', items: ['Monolítico (Linux) — Rápido y eficiente', 'Microkernel — Más modular pero con más latencia'] },
      { title: 'Versiones', items: ['Mainline — La versión más reciente de desarrollo', 'Stable/LTS — Soporte a largo plazo para servidores de producción'] },
    ],
    terminal: { 
      prompt: '$ uname -r\n$ ls /boot/vmlinuz*', 
      output: '6.1.0-18-amd64\n/boot/vmlinuz-6.1.0-18-amd64' 
    },
  },

  'lpic2-201-2': {
    title: 'Compilación del Kernel',
    comic: {
      title: 'Cocinando el Sistema 🍳',
      panels: [
        { emoji: '📝', text: '.config: la receta que dice qué incluir en tu kernel personalizado.' },
        { emoji: '🛠️', text: 'Make menuconfig: la interfaz visual para elegir tus drivers y opciones.' },
        { emoji: '⏳', text: 'Compilación: el procesador trabajando duro para crear los binarios.' },
        { emoji: '🚚', text: 'Install: moviendo el nuevo kernel y sus módulos a su sitio final.' },
      ]
    },
    keyPoints: [
      { title: 'Pasos de Compilación', items: ['make menuconfig — Configuración', 'make bzImage — Compilación del kernel', 'make modules — Compilación de módulos', 'make modules_install — Instalación'] },
      { title: 'Gestión de Parches', items: ['patch -p1 < diff_file — Aplicar correcciones o nuevas funciones sin bajar todo el código'] },
    ],
    terminal: { 
      prompt: '# make menuconfig\n# make -j$(nproc)', 
      output: 'HOSTCC  scripts/basic/fixdep\n  GEN     Makefile\n  CC      arch/x86/boot/version.o\nKernel: arch/x86/boot/bzImage is ready' 
    },
  },

  'lpic2-201-3': {
    title: 'Gestión de Módulos en Runtime',
    comic: {
      title: 'Piezas Intercambiables 🧩',
      panels: [
        { emoji: '🔌', text: 'Modprobe: la forma inteligente de cargar módulos con sus dependencias.' },
        { emoji: '🔍', text: 'Lsmod: mira qué piezas de hardware están activas ahora mismo.' },
        { emoji: 'ℹ️', text: 'Modinfo: lee el manual de instrucciones de un módulo específico.' },
        { emoji: '🚫', text: 'Rmmod: quita lo que no necesites (si no está en uso).' },
      ]
    },
    keyPoints: [
      { title: 'Persistencia', items: ['/etc/modules — Lista de carga al arranque', '/etc/modprobe.d/ — Configuraciones y alias de módulos'] },
      { title: 'Ubicación', items: ['/lib/modules/$(uname -r)/ — Donde viven los archivos .ko'] },
    ],
    terminal: { 
      prompt: '# lsmod | head -n 3\n# modinfo e1000', 
      output: 'Module                  Size  Used by\nkvm_intel             385024  0\ne1000                 163840  0\ndescription: Intel(R) PRO/1000 Network Driver' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'Personalización de Systemd',
    comic: {
      title: 'El Switch de Encendido ⚡',
      panels: [
        { emoji: '🚦', text: 'Systemd: el primer proceso que arranca y gestiona todos los servicios.' },
        { emoji: '📋', text: 'Units: archivos .service que definen cómo debe comportarse un programa.' },
        { emoji: '🎯', text: 'Targets: grupos de servicios (ej: multi-user.target para el modo consola).' },
        { emoji: '🔄', text: 'Journald: el sistema de logs centralizado y binario de Systemd.' },
      ]
    },
    keyPoints: [
      { title: 'Comandos Clave', items: ['systemctl start/stop/enable — Gestión de servicios', 'systemctl get-default — Ver el modo de arranque actual', 'journalctl -u service — Ver logs de un servicio'] },
      { title: 'Jerarquía', items: ['/lib/systemd/system/ — Archivos por defecto del sistema', '/etc/systemd/system/ — Tus personalizaciones (prioridad alta)'] },
    ],
    terminal: { 
      prompt: '$ systemctl status ssh\n$ systemctl list-units --type=target', 
      output: '● ssh.service - OpenBSD Secure Shell server\n   Active: active (running)\ngraphical.target loaded active' 
    },
  },

  'lpic2-202-2': {
    title: 'Cargadores de Arranque (GRUB2)',
    comic: {
      title: 'El Menú de Inicio 📜',
      panels: [
        { emoji: '🚪', text: 'GRUB 2: el portero que te permite elegir qué sistema operativo arrancar.' },
        { emoji: '🛠️', text: 'Configuración: edita /etc/default/grub, no el archivo final /boot/grub/grub.cfg.' },
        { emoji: '🔑', text: 'Seguridad: añade contraseñas a GRUB para evitar cambios no autorizados en el arranque.' },
        { emoji: '🆘', text: 'Modo Rescate: entra en la consola de GRUB para arreglar un sistema que no arranca.' },
      ]
    },
    keyPoints: [
      { title: 'Comandos de Instalación', items: ['grub-install /dev/sda — Instala el código en el MBR/GPT', 'update-grub — Regenera el archivo de configuración'] },
      { title: 'Estructura', items: ['/boot/grub/ — Donde residen los módulos de GRUB', '/etc/grub.d/ — Scripts que generan la configuración'] },
    ],
    terminal: { 
      prompt: '# update-grub', 
      output: 'Generating grub configuration file...\nFound linux image: /boot/vmlinuz-6.1.0-18-amd64\nFound initrd image: /boot/initrd.img-6.1.0-18-amd64\ndone' 
    },
  },

  'lpic2-202-3': {
    title: 'Recuperación de Sistemas',
    comic: {
      title: 'Primeros Auxilios 🚑',
      panels: [
        { emoji: '💿', text: 'Live CD/USB: arranca desde fuera para reparar el sistema de dentro.' },
        { emoji: '🔗', text: 'Chroot: entra en tu sistema roto como si estuvieras dentro de él.' },
        { emoji: '🩹', text: 'Fsck: repara sistemas de archivos dañados después de un apagón.' },
        { emoji: '💾', text: 'Backup de MBR: guarda una copia del sector de arranque por si acaso.' },
      ]
    },
    keyPoints: [
      { title: 'Flujo de Rescate', items: ['Montar partición raíz en /mnt', 'Montar sistemas virtuales: proc, sys, dev', 'Ejecutar chroot /mnt', 'Reparar (ej: reinstalar GRUB)'] },
      { title: 'Discos de Rescate', items: ['SystemRescueCD', 'Modo rescate del instalador de la distribución'] },
    ],
    terminal: { 
      prompt: '# mount /dev/sda1 /mnt\n# chroot /mnt /bin/bash', 
      output: 'root@rescue:/# (estás dentro de tu sistema instalado)' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Sistemas de Archivos Avanzados',
    comic: {
      title: 'Viviendas para Datos 🏡',
      panels: [
        { emoji: '📁', text: 'Ext4: el estándar sólido y fiable con journaling.' },
        { emoji: '⚡', text: 'XFS: diseñado para archivos grandes y alto rendimiento.' },
        { emoji: '♾️', text: 'Btrfs: el sistema del futuro con snapshots y compresión.' },
        { emoji: '🏗️', text: 'Mkfs: la herramienta para construir los cimientos del disco.' },
      ]
    },
    keyPoints: [
      { title: 'Comparativa', items: ['XFS — Escalable, excelente para bases de datos', 'Btrfs — Copy-on-Write, permite volver atrás en el tiempo', 'Ext4 — Compatible y robusto para uso general'] },
      { title: 'Mantenimiento', items: ['xfs_repair — Arreglar XFS', 'btrfs filesystem show — Estado de Btrfs'] },
    ],
    terminal: { 
      prompt: '# mkfs.xfs /dev/sdb1\n# btrfs subvolume create /data', 
      output: 'meta-data=/dev/sdb1  isize=512  agcount=4\nCreate subvolume "/data"' 
    },
  },

  'lpic2-203-2': {
    title: 'Mantenimiento de Dispositivos',
    comic: {
      title: 'Tuning de Discos 🏎️',
      panels: [
        { emoji: '⚙️', text: 'Tune2fs: ajusta parámetros de Ext4 sin formatear nada.' },
        { emoji: '🏷️', text: 'Labels y UUIDs: identifica tus discos por nombre, no por puerto.' },
        { emoji: '🔍', text: 'Smartmontools: escucha los susurros del disco antes de que muera.' },
        { emoji: '⚖️', text: 'Quotas: limita cuánto espacio puede llenar cada usuario.' },
      ]
    },
    keyPoints: [
      { title: 'Identificación', items: ['blkid — Ver UUID y formato de las particiones', 'lsblk — Ver el árbol de dispositivos de bloque'] },
      { title: 'Cuotas de Disco', items: ['quotacheck — Escanear el uso de disco', 'edquota — Editar límites de un usuario'] },
    ],
    terminal: { 
      prompt: '# blkid /dev/sda1\n# tune2fs -L "BACKUP" /dev/sda1', 
      output: '/dev/sda1: UUID="550e8400-e29b-41d4-a716-446655440000" TYPE="ext4"\ntune2fs: Label set to BACKUP' 
    },
  },

  'lpic2-203-3': {
    title: 'Dispositivos Ópticos y Otros',
    comic: {
      title: 'Datos en el Aire 💿',
      panels: [
        { emoji: '📀', text: 'ISO 9660: el formato universal para CDs y DVDs.' },
        { emoji: '🔥', text: 'Wodim/Cdrecord: las herramientas para "quemar" tus imágenes ISO.' },
        { emoji: '📦', text: 'Udev: el guardián que detecta cuando conectas algo nuevo.' },
        { emoji: '📁', text: 'Fuser: averigua quién está usando ese archivo que no puedes borrar.' },
      ]
    },
    keyPoints: [
      { title: 'Udev', items: ['/etc/udev/rules.d/ — Donde creas tus reglas personalizadas', 'udevadm — Comando para gestionar el demonio de dispositivos'] },
      { title: 'Análisis de Procesos', items: ['fuser -v /mnt/usb — Ver qué procesos usan el montaje', 'lsof — Listado de todos los archivos abiertos'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor\n$ fuser -m /dev/sdb1', 
      output: 'KERNEL[123.456] add /devices/pci0000:00/...\n/dev/sdb1: 1234c' 
    },
  },

  // Topic 204: Advanced Storage
  'lpic2-204-1': {
    title: 'Configuración RAID Avanzada',
    comic: {
      title: 'La Red de Seguridad 🛡️',
      panels: [
        { emoji: '🧱', text: 'RAID: combina varios discos para ganar velocidad o seguridad (o ambas).' },
        { emoji: '🪞', text: 'RAID 1 (Mirroring): todo se escribe por duplicado. Si un disco muere, no pasa nada.' },
        { emoji: '🧩', text: 'RAID 5: el equilibrio perfecto entre espacio, rapidez y seguridad mediante paridad.' },
        { emoji: '🛠️', text: 'Mdadm: la herramienta suiza para gestionar tu RAID por software.' },
      ]
    },
    keyPoints: [
      { title: 'Niveles de RAID', items: ['RAID 0 — Velocidad pura (sin seguridad)', 'RAID 1 — Duplicación total', 'RAID 5/6 — Seguridad con aprovechamiento de espacio', 'RAID 10 — Lo mejor de ambos mundos'] },
      { title: 'Monitorización', items: ['/proc/mdstat — Estado actual de los RAIDs', 'mdadm --detail /dev/md0 — Información técnica profunda'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      level 5, 512k chunk [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Ajuste del Almacenamiento',
    comic: {
      title: 'A toda Mecha 🚀',
      panels: [
        { emoji: '🏎️', text: 'Ajuste de Discos: exprime cada MB/s de tus dispositivos SATA o NVMe.' },
        { emoji: '🔧', text: 'Hdparm: el comando clásico para configurar discos mecánicos y SSDs.' },
        { emoji: '📊', text: 'Benchmark: comprueba si tus cambios realmente han acelerado el sistema.' },
        { emoji: '🔋', text: 'Gestión de Energía: decide cuándo poner tus discos a dormir para ahorrar luz.' },
      ]
    },
    keyPoints: [
      { title: 'Optimización', items: ['hdparm -tT — Medir la velocidad de lectura', 'sdparm — Configurar parámetros de discos SCSI/SAS', 'nvme-cli — Gestión de discos SSD NVMe modernos'] },
    ],
    terminal: { 
      prompt: '# hdparm -tT /dev/sda\n# nvme list', 
      output: 'Timing buffered disk reads: 540 MB in 3.01 seconds = 179.62 MB/sec\nNode SN Model' 
    },
  },

  'lpic2-204-3': {
    title: 'Gestor de Volúmenes Lógicos (LVM)',
    comic: {
      title: 'Discos de Chicle 🧱',
      panels: [
        { emoji: '🧱', text: 'LVM: olvida las particiones fijas. Crea volúmenes que crecen y encogen como chicles.' },
        { emoji: '🏗️', text: 'PV, VG, LV: los tres pasos para la libertad total del almacenamiento.' },
        { emoji: '📸', text: 'Snapshots: haz una foto instantánea de tus datos para backups perfectos.' },
        { emoji: '⬆️', text: 'Resize: añade un disco nuevo y agranda tu carpeta ROOT sin reiniciar.' },
      ]
    },
    keyPoints: [
      { title: 'Conceptos', items: ['PV (Physical Volume) — El disco físico', 'VG (Volume Group) — La bolsa de espacio común', 'LV (Logical Volume) — La partición virtual que usamos'] },
      { title: 'Comandos', items: ['vgextend — Añadir más espacio a la bolsa', 'lvextend — Agrandar una participión virtual', 'resize2fs — Avisar al sistema de archivos del nuevo tamaño'] },
    ],
    terminal: { 
      prompt: '# lvextend -L +10G /dev/vg0/data\n# resize2fs /dev/vg0/data', 
      output: 'Size of logical volume vg0/data changed from 20G to 30G.\nFilesystem resized.' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Configuración Básica de Red',
    comic: {
      title: 'Caminos de Datos 🌐',
      panels: [
        { emoji: '📍', text: 'Direccionamiento: pon nombre y dirección a tus interfaces de red.' },
        { emoji: '🚦', text: 'Comando IP: el sucesor moderno que sustituye al viejo ifconfig.' },
        { emoji: '🛣️', text: 'Rutas: enseña a tus paquetes de datos qué camino seguir para llegar a internet.' },
        { emoji: '🔍', text: 'Arp y Vecinos: descubre quién más está en tu red local.' },
      ]
    },
    keyPoints: [
      { title: 'iproute2', items: ['ip addr — Gestionar direcciones IP', 'ip route — Gestionar la tabla de rutas', 'ip link — Gestionar el estado de las interfaces (up/down)'] },
      { title: 'Configuración', items: ['/etc/network/interfaces (Debian)', '/etc/sysconfig/network-scripts/ (RedHat)'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route add 10.0.0.0/24 via 192.168.1.1', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0' 
    },
  },

  'lpic2-205-2': {
    title: 'Configuración Avanzada de Red',
    comic: {
      title: 'Súper Conexiones 🔗',
      panels: [
        { emoji: '👯', text: 'Bonding/Teaming: une dos tarjetas de red para que trabajen como una sola.' },
        { emoji: '🌉', text: 'Bridging: crea un puente virtual para que tus máquinas virtuales salgan al exterior.' },
        { emoji: '🏷️', text: 'VLANs: divide una sola interfaz física en múltiples redes virtuales.' },
        { emoji: '📡', text: 'Wireless: gestiona conexiones Wi-Fi desde la línea de comandos con iw e iwconfig.' },
      ]
    },
    keyPoints: [
      { title: 'Alta Disponibilidad', items: ['Bonding Mode 0 — Carga balanceada', 'Bonding Mode 1 — Respaldado (Active-Backup)'] },
      { title: 'Virtualización', items: ['Bridge-utils (brctl) — Herramientas para gestionar puentes virtuales'] },
    ],
    terminal: { 
      prompt: '$ brctl show\n# ip link add link eth0 name eth0.10 type vlan id 10', 
      output: 'bridge name     bridge id               STP enabled     interfaces\nbr0             8000.001122334455       no              eth0' 
    },
  },

  'lpic2-205-3': {
    title: 'Resolución de Problemas de Red',
    comic: {
      title: 'El Detective de Redes 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: escucha todo lo que pasa por el cable en tiempo real.' },
        { emoji: '📡', text: 'Nmap: escanea puertos para ver qué servicios están abiertos y cuáles cerrados.' },
        { emoji: '🚪', text: 'Netstat/SS: mira qué programas están escuchando conexiones ahora mismo.' },
        { emoji: '⚡', text: 'Ping y Traceroute: los clásicos que nunca fallan para ver si hay conexión.' },
      ]
    },
    keyPoints: [
      { title: 'Monitorización', items: ['mtr — Una mezcla moderna de ping y traceroute', 'ss -tulpan — Ver todos los procesos con sockets abiertos'] },
      { title: 'Captura', items: ['tcpdump -i eth0 icmp — Ver solo los pings que entran o salen'] },
    ],
    terminal: { 
      prompt: '# ss -tulpn\n# nmap localhost', 
      output: 'Netid  State   Local Address:Port\ntcp    LISTEN  0.0.0.0:22\nPORT   STATE SERVICE\n22/tcp open  ssh' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Compilación de Software desde el Código Fuente',
    comic: {
      title: 'Artesanía Digital 🏗️',
      panels: [
        { emoji: '🏗️', text: 'Compilación: transforma el código que leen los humanos en programas que lee el PC.' },
        { emoji: '📋', text: './configure: comprueba que tienes todas las piezas necesarias antes de empezar.' },
        { emoji: '⚒️', text: 'Make: el obrero que sigue las instrucciones para construir el programa.' },
        { emoji: '📥', text: 'Make install: coloca el programa terminado en su sitio final.' },
      ]
    },
    keyPoints: [
      { title: 'Flujo Estándar', items: ['./configure — Configuración y chequeo', 'make — Compilación del código', 'make install — Instalación final (normalmente en /usr/local)'] },
      { title: 'Parches', items: ['diff -u — Crear una diferencia', 'patch — Aplicar cambios de otros al código'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/mysoft\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nCompiling... done.\nInstalling to /opt/mysoft' 
    },
  },

  'lpic2-206-2': {
    title: 'Operaciones de Backup',
    comic: {
      title: 'El Seguro de Vida 💾',
      panels: [
        { emoji: '🛡️', text: 'Backup: la única forma de dormir tranquilo por las noches.' },
        { emoji: '🔄', text: 'Rsync: sincroniza tus archivos de forma eficiente, enviando solo lo que ha cambiado.' },
        { emoji: '📦', text: 'Tar y Cpio: empaqueta miles de archivos en un solo bloque manejable.' },
        { emoji: '☁️', text: 'Offsite: guarda siempre una copia fuera de la oficina por si hay un incendio.' },
      ]
    },
    keyPoints: [
      { title: 'Estrategias', items: ['Completo (Full) — Copia todo cada vez', 'Incremental — Solo lo que ha cambiado desde el último backup', 'Diferencial — Solo lo que ha cambiado desde el último Full'] },
      { title: 'Herramientas', items: ['Bacula/Bareos — Soluciones empresariales de backup', 'Amanda — Backup en red avanzado'] },
    ],
    terminal: { 
      prompt: '$ rsync -avz /home/user /backup/drive\n$ tar -cvzf backup.tar.gz /etc', 
      output: 'sending incremental file list\nhome/user/docs/\n/etc/passwd' 
    },
  },

  'lpic2-206-3': {
    title: 'Notificación a los Usuarios',
    comic: {
      title: 'El Megáfono 📢',
      panels: [
        { emoji: '📢', text: 'Wall: envía un mensaje de texto instantáneo a todos los que estén conectados.' },
        { emoji: '📜', text: '/etc/motd: el "mensaje del día" que sale al entrar por SSH.' },
        { emoji: '🛑', text: 'Shutdown: avisa a todos antes de apagar el servidor.' },
        { emoji: '✍️', text: '/etc/issue: el mensaje que sale justo antes del prompt de login.' },
      ]
    },
    keyPoints: [
      { title: 'Comunicación', items: ['wall — Mensaje para todos los terminales abiertos', 'mesg n — Bloquear mensajes de otros usuarios'] },
      { title: 'Archivos Informativos', items: ['/etc/motd — Información estática post-login', '/etc/issue — Información pre-login (ej: versión del kernel)'] },
    ],
    terminal: { 
      prompt: '# wall "Mantenimiento en 5 minutos!"\n$ shutdown +5 "Reinicio planificado"', 
      output: 'Broadcast message from root@server: Mantenimiento en 5 minutos!' 
    },
  },

  // Topic 207: DNS
  'lpic2-207-1': {
    title: 'Servidor DNS con BIND',
    comic: {
      title: 'La Guía Telefónica de Internet 📖',
      panels: [
        { emoji: '🈯', text: 'DNS: traduce nombres fáciles (google.com) en IPs difíciles (142.250.x.x).' },
        { emoji: '📖', text: 'BIND: el servidor DNS más veterano y potente que existe.' },
        { emoji: '🏠', text: 'Hostnames: ponle nombres con sentido a tus servidores.' },
        { emoji: '🔍', text: 'Dig/Domain: las lupas para ver qué dice el servidor DNS sobre un dominio.' },
      ]
    },
    keyPoints: [
      { title: 'BIND (Named)', items: ['named.conf — Archivo de configuración principal', '/var/cache/bind/ — Donde viven los archivos de zonas'] },
      { title: 'Herramientas de Consulta', items: ['host — Búsqueda rápida', 'dig — Análisis DNS profesional y detallado'] },
    ],
    terminal: { 
      prompt: '$ dig +short google.com\n$ host 8.8.8.8', 
      output: '142.250.200.110\n8.8.8.8.in-addr.arpa domain name pointer dns.google.' 
    },
  },

  'lpic2-207-2': {
    title: 'Zonas y Registros DNS',
    comic: {
      title: 'El Archivo de Direcciones 🌍',
      panels: [
        { emoji: '🌍', text: 'Zonas: el trozo de internet del que tu servidor es el jefe.' },
        { emoji: '🅰️', text: 'Registros A y AAAA: apuntan un nombre a una dirección IPv4 o IPv6.' },
        { emoji: '📮', text: 'Registro MX: dice a qué servidor deben ir los correos electrónicos.' },
        { emoji: '🔄', text: 'PTR (Inversa): traduce una IP de vuelta a su nombre de dominio.' },
      ]
    },
    keyPoints: [
      { title: 'Tipos de Registro', items: ['SOA (Start of Authority) — Parámetros de la zona', 'NS — Servidores de Nombres autoritativos', 'CNAME — Un alias que apunta a otro nombre'] },
      { title: 'Jerarquía', items: ['Zonas Forward — Nombre -> IP', 'Zonas Reverse — IP -> Nombre'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/bind/db.example.com', 
      output: '@ IN SOA ns1.example.com. root.example.com. (...)\nwww IN A 192.168.1.10\nmail IN MX 10 mail.example.com.' 
    },
  },

  'lpic2-207-3': {
    title: 'Seguridad en DNS',
    comic: {
      title: 'Nombres Falsos 🕵️‍♂️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: añade firmas digitales para que nadie pueda engañarte con IPs falsas.' },
        { emoji: '🤝', text: 'Transferencia de Zona: solo permite que tus servidores secundarios copien los datos.' },
        { emoji: '🚫', text: 'Recursión: evita que desconocidos usen tu servidor para atacar a otros.' },
        { emoji: '🔑', text: 'TSIG: usa llaves compartidas para que los servidores se reconozcan entre sí.' },
      ]
    },
    keyPoints: [
      { title: 'Protección', items: ['allow-transfer { IP; }; — Limitar quién copia tus zonas', 'recursion no; — Convertir en servidor autoritativo puro'] },
      { title: 'Integridad', items: ['dnssec-signzone — Firmar manualmente una zona', 'named-checkconf — Validar la sintaxis antes de reiniciar'] },
    ],
    terminal: { 
      prompt: '# named-checkconf -z\n# rndc reload', 
      output: 'zone example.com/IN: loaded serial 2024030601\nserver reload successful' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Servidor Web Apache',
    comic: {
      title: 'El Camarero de Internet 🍽️',
      panels: [
        { emoji: '🌐', text: 'Apache: el servidor web más clásico y configurable del mundo.' },
        { emoji: '📜', text: 'Módulos: añade funciones como PHP o SSL activando "piezas" de software.' },
        { emoji: '📁', text: 'Virtual Hosts: aloja cientos de webs distintas en un solo servidor.' },
        { emoji: '🚦', text: 'Htaccess: permite a los usuarios cambiar la configuración de su carpeta sin ser root.' },
      ]
    },
    keyPoints: [
      { title: 'Gestión en Debian/Ubuntu', items: ['a2enmod / a2dismod — Activar/Desactivar módulos', 'a2ensite / a2dissite — Activar/Desactivar sitios web'] },
      { title: 'Configuración', items: ['apache2.conf — Configuración central', 'sites-available/ — Donde defines tus webs'] },
    ],
    terminal: { 
      prompt: '# a2ensite my-web.conf\n# systemctl reload apache2', 
      output: 'Enabling site my-web.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'Apache Avanzado y Seguridad',
    comic: {
      title: 'Escudo Web 🛡️',
      panels: [
        { emoji: '🔐', text: 'HTTPS: cifra la conexión para que nadie espíe a tus visitantes.' },
        { emoji: '🔑', text: 'OpenSSL: genera tus propias llaves y certificados de seguridad.' },
        { emoji: '🚫', text: 'Control de Acceso: decide quién puede entrar a cada carpeta por IP o contraseña.' },
        { emoji: '🛰️', text: 'Proxy Inverso: pon a Apache delante de otros servidores para protegerlos.' },
      ]
    },
    keyPoints: [
      { title: 'SSL/TLS', items: ['SSLEngine on — Activar el cifrado', 'SSLCertificateFile — Ruta al certificado público'] },
      { title: 'Seguridad', items: ['LimitRequestBody — Evitar subidas de archivos gigantes', 'Directory/Location — Bloques de configuración por ruta'] },
    ],
    terminal: { 
      prompt: '# openssl req -new -x509 -days 365 -nodes -out cert.pem -keyout key.pem', 
      output: 'Generating a RSA private key\nwriting new private key to \'key.pem\'' 
    },
  },

  'lpic2-208-3': {
    title: 'Servidor Nginx y Proxies',
    comic: {
      title: 'El Ágil Veloz ⚡',
      panels: [
        { emoji: '⚡', text: 'Nginx: extremadamente rápido y ligero, ideal para mucho tráfico.' },
        { emoji: '🏗️', text: 'Arquitectura de Eventos: maneja miles de conexiones sin sudar.' },
        { emoji: '⚖️', text: 'Balanceador de Carga: reparte el trabajo entre varios servidores.' },
        { emoji: '📂', text: 'Caché: guarda copias de tus webs para servirlas al instante.' },
      ]
    },
    keyPoints: [
      { title: 'Conceptos Nginx', items: ['server_name — Define el dominio de la web', 'location — Reglas de procesamiento por URL', 'proxy_pass — Envía la petición a otro servidor'] },
      { title: 'Uso Común', items: ['Como terminador SSL (descarga de trabajo)', 'Como servidor de archivos estáticos (imágenes/JS/CSS)'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/nginx/sites-enabled/default', 
      output: 'server {\n    listen 80;\n    server_name example.com;\n    location / {\n        proxy_pass http://localhost:8080;\n    }\n}' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: Windows y Linux de la mano',
    comic: {
      title: 'El Traductor de Archivos 🤝',
      panels: [
        { emoji: '🐧', text: 'Samba: permite que Linux comparta carpetas e impresoras con Windows.' },
        { emoji: '📁', text: 'SMB/CIFS: el protocolo estándar de red de Microsoft.' },
        { emoji: '🔑', text: 'Seguridad: integra Linux en un Dominio de Active Directory.' },
        { emoji: '👤', text: 'Smbpasswd: crea usuarios específicos para compartir archivos.' },
      ]
    },
    keyPoints: [
      { title: 'Configuración', items: ['smb.conf — El corazón de Samba', '[global] — Ajustes de todo el servidor', '[share] — Ajustes de una carpeta específica'] },
      { title: 'Herramientas', items: ['testparm — Comprobar errores en smb.conf', 'smbstatus — Ver quién está conectado ahora'] },
    ],
    terminal: { 
      prompt: '# smbpasswd -a claudio\n# testparm', 
      output: 'New SMB password: *****\nLoaded services file OK.' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Compartición Nativa Linux',
    comic: {
      title: 'Discos Remotos 📂',
      panels: [
        { emoji: '📂', text: 'NFS: monta carpetas de otro servidor como si fueran discos locales.' },
        { emoji: '📑', text: 'Exports: define qué carpetas vas a compartir y con quién.' },
        { emoji: '🚦', text: 'RPC: el sistema de llamadas remotas que usa NFS para comunicarse.' },
        { emoji: '🛡️', text: 'NFSv4: la versión más moderna y segura, fácil de pasar por firewalls.' },
      ]
    },
    keyPoints: [
      { title: 'Servidor', items: ['/etc/exports — Lista de carpetas compartidas', 'exportfs -a — Aplicar cambios sin reiniciar'] },
      { title: 'Cliente', items: ['mount -t nfs server:/folder /mnt — Montaje manual', 'fstab — Montaje automático al arrancar'] },
    ],
    terminal: { 
      prompt: '# cat /etc/exports\n# showmount -e localhost', 
      output: '/home/public 192.168.1.0/24(rw,sync,no_subtree_check)\nExport list for localhost: /home/public' 
    },
  },

  // Topic 210: Network Management
  'lpic2-210-1': {
    title: 'DHCP y Autoconfiguración',
    comic: {
      title: 'El Repartidor de IPs 📡',
      panels: [
        { emoji: '📡', text: 'DHCP: asigna IPs automáticamente para que no tengas que ir PC por PC.' },
        { emoji: '⏱️', text: 'Lease (Alquiler): las IPs no son tuyas para siempre, tienen fecha de caducidad.' },
        { emoji: '📑', text: 'Opciones: entrega también la puerta de enlace (gateway) y los DNS.' },
        { emoji: '📅', text: 'Reservas: asegúrate de que tus servidores reciban siempre la misma IP.' },
      ]
    },
    keyPoints: [
      { title: 'Configuración ISC-DHCP', items: ['dhcpd.conf — Archivo principal', 'subnet — Define el rango de IPs', 'host — Para hacer reservas por dirección MAC'] },
      { title: 'Cliente', items: ['dhclient — Pedir una IP nueva ahora mismo', '/var/lib/dhcp/dhclient.leases — Historial de IPs recibidas'] },
    ],
    terminal: { 
      prompt: '# dhclient -v eth0', 
      output: 'DHCPDISCOVER on eth0\nDHCPACK from 192.168.1.1\nbound to 192.168.1.50 -- renewal in 3600 seconds.' 
    },
  },

  'lpic2-210-2': {
    title: 'PAM: Autenticación Modular',
    comic: {
      title: 'El Portero de la Discoteca 🔐',
      panels: [
        { emoji: '🔐', text: 'PAM: un sistema centralizado para que todos los programas se identifiquen igual.' },
        { emoji: '🧱', text: 'Módulos: permite usar contraseñas, huellas dactilares o tarjetas inteligentes.' },
        { emoji: '📋', text: 'Stack: una lista de reglas que el usuario debe cumplir para entrar.' },
        { emoji: '⚠️', text: 'Cuidado: un error en PAM puede dejarte fuera de tu propio sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Configuración', items: ['/etc/pam.d/ — Archivos de reglas por cada programa (ssh, login...)', '/etc/security/ — Límites de recursos y acceso'] },
      { title: 'Tipos de Control', items: ['required — Éxito obligatorio', 'sufficient — Suficiente para entrar si nada falló antes'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/sshd', 
      output: 'auth       required     pam_nologin.so\nauth       include      common-auth' 
    },
  },

  'lpic2-210-3': {
    title: 'LDAP: Directorios Centralizados',
    comic: {
      title: 'La Agenda Global 📂',
      panels: [
        { emoji: '📂', text: 'LDAP: un directorio para gestionar miles de usuarios en un solo sitio.' },
        { emoji: '🌳', text: 'Árbol (DIT): organiza los datos de forma jerárquica (País, Empresa, Persona).' },
        { emoji: '🔍', text: 'Optimización: diseñado para buscar y leer datos muy, muy rápido.' },
        { emoji: '📝', text: 'LDIF: el formato de texto plano para añadir o cambiar datos.' },
      ]
    },
    keyPoints: [
      { title: 'Estructura', items: ['dn (Distinguished Name) — La ruta completa al objeto', 'dc (Domain Component) — Parte del dominio (ej: dc=linux, dc=org)'] },
      { title: 'Comandos', items: ['ldapsearch — Buscar datos', 'ldapadd — Añadir nuevos objetos'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=example,dc=com"', 
      output: '# claudio, example.com\ndn: uid=claudio,dc=example,dc=com\nobjectClass: posixAccount' 
    },
  },

  // Topic 211: Mail Services
  'lpic2-211-1': {
    title: 'Servidor de Correo Postfix',
    comic: {
      title: 'El Cartero Digital ✉️',
      panels: [
        { emoji: '✉️', text: 'Postfix: el servidor de correos más seguro y fácil de administrar.' },
        { emoji: '🧱', text: 'Arquitectura Modular: varios procesos pequeños que hacen una sola cosa muy bien.' },
        { emoji: '📦', text: 'Cola de Correo: gestiona miles de mensajes esperando a ser entregados.' },
        { emoji: '🔍', text: 'Postconf: la herramienta para ver y cambiar toda la configuración sin errores.' },
      ]
    },
    keyPoints: [
      { title: 'Comandos Maestros', items: ['postmap — Generar bases de datos (ej: aliases)', 'postqueue -p — Ver la cola de mensajes', 'postsuper -d ALL — Borrar todos los correos de la cola'] },
      { title: 'Protocolos', items: ['SMTP (Puerto 25) — Envío de correos entre servidores', 'SMTPS (Puerto 465) — Envío seguro con SSL/TLS'] },
    ],
    terminal: { 
      prompt: '# postconf -n\n# postqueue -p', 
      output: 'myhostname = mail.example.com\n-Queue ID-  --Size-- ----Arrival Time---- -Sender/Recipient-------\nBC123456    1024 Wed Mar  6 10:00:00  user@sender.com' 
    },
  },

  'lpic2-211-2': {
    title: 'Dovecot y Entrega Local',
    comic: {
      title: 'El Buzón de tu Casa 📮',
      panels: [
        { emoji: '📮', text: 'Dovecot: permite que los usuarios lean su correo mediante IMAP o POP3.' },
        { emoji: '📂', text: 'Maildir vs Mbox: decide cómo guardar los correos en el disco duro.' },
        { emoji: '🔐', text: 'Seguridad: obliga a usar conexiones cifradas para proteger las contraseñas.' },
        { emoji: '🧹', text: 'Sieve: crea filtros automáticos para mover el spam a la papelera.' },
      ]
    },
    keyPoints: [
      { title: 'IMAP vs POP3', items: ['IMAP — Los correos se quedan en el servidor (sincronizado)', 'POP3 — Los correos se descargan y se borran del servidor'] },
      { title: 'Formatos', items: ['Mbox — Todo el correo en un solo archivo gigante', 'Maildir — Cada correo es un archivo individual (más rápido y seguro)'] },
    ],
    terminal: { 
      prompt: '$ doveconf -n\n# systemctl status dovecot', 
      output: 'protocols = imap pop3 lmtp\n● dovecot.service - Dovecot IMAP/POP3 email server\n   Active: active (running)' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Cortafuegos y Filtros de Red',
    comic: {
      title: 'El Muro de Fuego 🔥',
      panels: [
        { emoji: '🔥', text: 'Iptables: la herramienta clásica para decir qué entra y qué sale de tu PC.' },
        { emoji: '🧱', text: 'Tablas: Filter (filtrado), NAT (redirección) y Mangle (modificación).' },
        { emoji: '🚦', text: 'Cadenas: INPUT (lo que entra), OUTPUT (lo que sale), FORWARD (lo que pasa de largo).' },
        { emoji: '🛡️', text: 'Nftables: el sucesor moderno, más rápido y con una sintaxis más limpia.' },
      ]
    },
    keyPoints: [
      { title: 'Acciones (Targets)', items: ['ACCEPT — Dejar pasar el paquete', 'DROP — Tirar el paquete a la basura (sin avisar)', 'REJECT — Rechazar e informar al remitente'] },
      { title: 'NAT', items: ['MASQUERADE — Compartir internet con otros equipos', 'DNAT — Abrir puertos hacia un servidor interno'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n\n# iptables -A INPUT -p tcp --dport 22 -j ACCEPT', 
      output: 'Chain INPUT (policy DROP)\ntarget     prot opt source               destination         \nACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:22' 
    },
  },

  'lpic2-212-2': {
    title: 'Detección de Intrusos y Auditoría',
    comic: {
      title: 'El Centinela 🕵️‍♂️',
      panels: [
        { emoji: '🕵️‍♂️', text: 'Fail2Ban: bloquea automáticamente a quien intente adivinar contraseñas.' },
        { emoji: '🔍', text: 'AIDE: comprueba si alguien ha modificado archivos importantes del sistema.' },
        { emoji: '📊', text: 'Lynis: realiza una auditoría completa para ver qué tan seguro es tu Linux.' },
        { emoji: '🚨', text: 'Nmap: escanea tus propios puertos para ver qué ve un atacante desde fuera.' },
      ]
    },
    keyPoints: [
      { title: 'Integridad', items: ['AIDE — Compara el estado actual de los archivos con una base de datos limpia'] },
      { title: 'Monitorización', items: ['Logwatch — Envía resúmenes diarios de lo más importante que ha pasado en los logs'] },
    ],
    terminal: { 
      prompt: '# lynis audit system\n# fail2ban-client status', 
      output: '[+] Software auditing... [DONE]\nStatus for the jail: sshd\n|- Filter\n|  `- Currently failed: 0\n`- Actions\n   `- Currently banned: 5' 
    },
  },
}
