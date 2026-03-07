export const lpic2_extendedContent_es = {
  'lpic2-200-1': {
    title: 'Análisis Profundo: Midiendo los Recursos del Sistema',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Planificación de Capacidad (Capacity Planning)' },
      { type: 'paragraph', text: 'La planificación de capacidad no es solo mirar el "ahora", sino predecir el "mañana". Implica entender el crecimiento de los datos y la carga de los usuarios para evitar interrupciones en el servicio.' },
      { type: 'table', headers: ['Comando', 'Uso Principal', 'Métrica Clave'], rows: [
        ['vmstat', 'Memoria y CPU', 'si / so (Swap In/Out)'],
        ['iostat', 'Rendimiento de Disco', '%util (Utilización del disco)'],
        ['sar', 'Histórico del Sistema', 'Carga media a lo largo del tiempo'],
        ['netstat / ss', 'Conexiones de Red', 'sockets en espera (TIME_WAIT)'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Usa `sar` (del paquete sysstat) para recolectar datos automáticamente en segundo plano. Es la mejor forma de comparar el rendimiento de hoy con el de la semana pasada.' }
    ]
  },

  'lpic2-201-1': {
    title: 'Arquitectura del Kernel de Linux',
    sections: [
      { type: 'heading', level: 2, emoji: '🧠', text: 'El Corazón del Sistema' },
      { type: 'paragraph', text: 'El kernel de Linux es monolítico: todo el código crítico (drivers, gestión de memoria, red) se ejecuta en un espacio de memoria privilegiado para máxima velocidad.' },
      { type: 'code', title: 'Verificar la versión del kernel', prompt: '$ uname -a', output: 'Linux debian 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC (...) x86_64 GNU/Linux' },
      { type: 'infobox', variant: 'exam', content: 'Debes conocer la diferencia entre parches oficiales (vanilla) y parches específicos de distribuciones como Debian o Red Hat.' }
    ]
  },

  'lpic2-201-2': {
    title: 'Gestión en Tiempo de Ejecución y Carga de Módulos',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Módulos: Plug-and-Play del Kernel' },
      { type: 'paragraph', text: 'Los módulos permiten añadir funcionalidades (como controladores Wi-Fi o sistemas de archivos) sin necesidad de reiniciar.' },
      { type: 'table', headers: ['Comando', 'Función'], rows: [
        ['lsmod', 'Lista los módulos cargados actualmente'],
        ['insmod', 'Carga un archivo .ko específico (sin manejar dependencias)'],
        ['rmmod', 'Elimina un módulo'],
        ['modprobe', 'Forma recomendada: carga/elimina manejando dependencias automáticamente'],
        ['modinfo', 'Muestra detalles, parámetros y licencia de un módulo'],
      ]},
      { type: 'code', title: 'Ejemplo con modprobe', prompt: '# modinfo e1000\n# modprobe e1000\n# modprobe -r e1000', output: 'filename: /lib/modules/.../e1000.ko\nlicense: GPL\ndescription: Intel(R) PRO/1000 Network Driver' },
      { type: 'heading', level: 3, emoji: '📁', text: 'Persistencia de Módulos' },
      { type: 'paragraph', text: 'Para cargar un módulo en el arranque, añádelo a `/etc/modules` o crea un archivo en `/etc/modules-load.d/`. Para pasar parámetros, utiliza los archivos en `/etc/modprobe.d/`.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Personalización y Parcheo',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Manteniendo el Kernel Actualizado' },
      { type: 'paragraph', text: 'A menudo no necesitas descargar todo el kernel nuevo (GBs de datos), sino simplemente aplicar un "parche" para corregir errores o fallos de seguridad.' },
      { type: 'code', title: 'Aplicando un parche', prompt: '$ bzcat patch-5.10.x.bz2 | patch -p1', output: 'patching file Makefile\npatching file arch/x86/Makefile\n...' },
      { type: 'infobox', variant: 'exam', content: 'La opción `-p1` en el comando patch se utiliza para "saltar" el primer nivel de directorio en la ruta de archivos que contiene el parche, adaptándolo a tu directorio actual.' }
    ]
  },

  'lpic2-202-1': {
    title: 'Dominando Systemd y el Arranque',
    sections: [
      { type: 'heading', level: 2, emoji: '⚡', text: 'Gestión Moderna con Systemd' },
      { type: 'paragraph', text: 'Systemd ha reemplazado a SysVinit en casi todas las distribuciones modernas. Se basa en "Units" y permite un arranque paralelo mucho más rápido.' },
      { type: 'table', headers: ['Tipo de Unit', 'Sufijo', 'Propósito'], rows: [
        ['Service', '.service', 'Inicia y gestiona demonio'],
        ['Target', '.target', 'Grupo lógico de unidades (similar a runlevels)'],
        ['Mount', '.mount', 'Define un punto de montaje'],
        ['Timer', '.timer', 'Alternativa moderna a cron'],
      ]},
      { type: 'code', title: 'Crear un override para un servicio', prompt: '# systemctl edit ssh.service', output: '[Service]\nExecStart=\nExecStart=/usr/sbin/sshd -D $SSHD_OPTS' }
    ]
  },

  'lpic2-202-2': {
    title: 'Recuperación del Sistema y Gestor de Arranque',
    sections: [
      { type: 'heading', level: 2, emoji: '🆘', text: 'Salvando un Sistema Comprometido' },
      { type: 'paragraph', text: 'Si el cargador de arranque (GRUB) está dañado, el sistema no iniciará. Debes saber cómo usar una shell de emergencia o un disco live.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'GRUB 2' },
      { type: 'code', title: 'Restaurar GRUB', prompt: '# grub-install /dev/sda\n# update-grub', output: 'Installing for i386-pc platform.\nInstallation finished. No error reported.' },
      { type: 'paragraph', text: 'El archivo de configuración generado es `/boot/grub/grub.cfg`, pero nunca debe modificarse a mano. En su lugar, usa `/etc/default/grub`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Gestores de Arranque Alternativos',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX e ISOLINUX' },
      { type: 'paragraph', text: 'A menudo utilizados para unidades USB y Live CDs debido a su rapidez y simplicidad.' },
      { type: 'table', headers: ['Variante', 'Uso'], rows: [
        ['SYSLINUX', 'Sistema de archivos FAT (Memorias USB)'],
        ['ISOLINUX', 'Estándar ISO-9660 (CD/DVD)'],
        ['EXTLINUX', 'Sistemas de archivos ext2/3/4 o btrfs'],
        ['PXELINUX', 'Arranque por red mediante TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Sistemas de Archivos Avanzados',
    sections: [
      { type: 'heading', level: 2, emoji: '🏡', text: 'Más allá de Ext4' },
      { type: 'paragraph', text: 'Mientras que Ext4 es fiable, sistemas como XFS son preferidos para archivos gigantes, y Btrfs para funciones avanzadas como snapshots integrados.' },
      { type: 'infobox', variant: 'warning', content: 'Nunca intentes redimensionar un volumen XFS hacia abajo (shrink); XFS solo permite crecer.' }
    ]
  },

  'lpic2-203-2': {
    title: 'Mantenimiento del Sistema de Archivos',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Optimización con tune2fs' },
      { type: 'paragraph', text: 'Puedes cambiar parámetros como la frecuencia de las comprobaciones automáticas o la etiqueta del volumen sin necesidad de volver a formatear.' },
      { type: 'table', headers: ['Comando', 'Efecto'], rows: [
        ['tune2fs -L "BACKUP" /dev/sdc1', 'Establece la etiqueta del sistema de archivos'],
        ['tune2fs -m 1 /dev/sdc1', 'Reduce el espacio reservado para root al 1%'],
        ['tune2fs -i 30d /dev/sdc1', 'Comprobación forzada cada 30 días'],
        ['xfs_admin -L "DATA_XFS" /dev/sdd1', 'Gestión para sistema de archivos XFS'],
      ]}
    ]
  },

  'lpic2-203-3': {
    title: 'Gestión de Dispositivos con udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🔌', text: 'El demonio que lo ve todo' },
      { type: 'paragraph', text: '`udev` gestiona los archivos en `/dev` de forma dinámica cuando conectas o desconectas hardware.' },
      { type: 'heading', level: 3, emoji: '📝', text: 'Creando Reglas Personalizadas' },
      { type: 'paragraph', text: 'Puedes decidir que tu impresora siempre tenga el mismo nombre simbólico, independientemente del puerto USB al que se conecte.' },
      { type: 'code', title: 'Ejemplo de regla udev', prompt: '# /etc/udev/rules.d/99-custom.rules\nSUBSYSTEM=="usb", ATTR{idVendor}=="1234", SYMLINK+="mydevice"', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Usa `udevadm monitor` para ver las acciones del kernel en tiempo real cuando insertas un periférico.' }
    ]
  },

  'lpic2-204-1': {
    title: 'RAID y Almacenamiento Avanzado',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Seguridad de Datos con RAID' },
      { type: 'paragraph', text: 'El RAID por software en Linux es extremadamente flexible. Permite crear conjuntos de discos redundantes sin necesidad de controladoras hardware costosas.' },
      { type: 'table', headers: ['Comando mdadm', 'Acción'], rows: [
        ['--create', 'Crea un nuevo array'],
        ['--manage --add', 'Añade un disco (spare) al array'],
        ['--manage --fail', 'Simula el fallo de un disco'],
        ['--detail', 'Muestra información técnica del array'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Para el examen LPIC-2, debes recordar que `/proc/mdstat` es la forma más rápida de verificar si un RAID se está reconstruyendo.' }
    ]
  },

  'lpic2-204-2': {
    title: 'Ajuste de Almacenamiento y Optimización',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Exprimiendo el rendimiento' },
      { type: 'paragraph', text: 'Además del RAID, debes saber cómo optimizar discos individuales, especialmente si usas tecnologías modernas como NVMe o discos antiguos que necesitan ajustes.' },
      { type: 'code', title: 'Hdparm y NVMe', prompt: '# hdparm -tT /dev/sda\n# nvme list', output: 'Timing cached reads:   15342 MB in  2.00 seconds = 7673.41 MB/sec\nTiming buffered disk reads:  540 MB in  3.01 seconds = 179.62 MB/sec' },
      { type: 'paragraph', text: 'El comando `hdparm` es histórico para discos SATA/IDE, mientras que `nvme-cli` es el estándar para discos SSD de última generación.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Gestor de Volúmenes Lógicos (LVM) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Elasticidad Total del Disco' },
      { type: 'paragraph', text: 'LVM añade una capa de abstracción entre el disco físico y la partición que ves. Esto permite ampliar o reducir volúmenes "al vuelo".' },
      { type: 'table', headers: ['Componente', 'Nombre Completo', 'Significado'], rows: [
        ['PV', 'Physical Volume', 'El disco o partición física (ej., /dev/sda3)'],
        ['VG', 'Volume Group', 'El "pool" (piscina) de espacio creado al unir múltiples PVs'],
        ['LV', 'Logical Volume', 'La partición virtual que formateas y montas'],
      ]},
      { type: 'code', title: 'Expandir un volumen', prompt: '# lvextend -L +10G /dev/vg0/root\n# resize2fs /dev/vg0/root', output: 'Size of logical volume vg0/root changed from 20.00 GiB to 30.00 GiB.\nFilesystem at /dev/vg0/root is mounted on /; on-line resizing required' },
      { type: 'infobox', variant: 'exam', content: 'Recuerda: `lvextend` agranda el contenedor, pero debes usar `resize2fs` (para ext4) o `xfs_growfs` (para XFS) para agrandar realmente el sistema de archivos en su interior.' }
    ]
  },

  'lpic2-205-1': {
    title: 'Redes Avanzadas y Enrutamiento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Configuración de Interfaces' },
      { type: 'paragraph', text: 'Dominar la suite `iproute2` es esencial. El comando `ip` sustituye a los antiguos `ifconfig` y `route`.' },
      { type: 'code', title: 'Configurar una IP y Ruta', prompt: '# ip addr add 192.168.10.1/24 dev eth1\n# ip route add default via 192.168.10.254', output: '' },
      { type: 'paragraph', text: 'Para la resolución de problemas, herramientas como `tcpdump` permiten analizar el tráfico a nivel de paquete.' }
    ]
  },

  'lpic2-205-2': {
    title: 'Resolución de Problemas de Red (Troubleshooting)',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Detective de Tráfico' },
      { type: 'paragraph', text: 'Cuando la red falla, debes saber "escuchar" los cables.' },
      { type: 'heading', level: 3, emoji: '👂', text: 'Tcpdump' },
      { type: 'code', title: 'Capturando paquetes', prompt: '# tcpdump -i eth0 icmp', output: '12:00:01.123 IP 192.168.1.50 > 8.8.8.8: ICMP echo request\n12:00:01.145 IP 8.8.8.8 > 192.168.1.50: ICMP echo reply' },
      { type: 'paragraph', text: 'Puedes guardar las capturas en un archivo con `-w archivo.pcap` y luego analizarlas cómodamente con Wireshark.' },
      { type: 'infobox', variant: 'tip', content: 'Usa `ss -tulpn` para ver al instante qué procesos están ocupando qué puertos en el servidor.' }
    ]
  },

  'lpic2-205-3': {
    title: 'Agrupación y Puenteo (Bonding and Bridging)',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Bonding y Bridging' },
      { type: 'paragraph', text: 'Fundamentales para la virtualización y alta disponibilidad.' },
      { type: 'table', headers: ['Técnica', 'Propósito Principal'], rows: [
        ['Bonding', 'Unir 2+ tarjetas físicas para redundancia o velocidad (LACP)'],
        ['Bridging', 'Crear un switch virtual para que las VMs se comuniquen con el mundo'],
      ]},
      { type: 'code', title: 'Comprobar bridges', prompt: '$ brctl show\n# ip link show type bridge', output: 'bridge name     bridge id               STP enabled     interfaces\nbr0             8000.001122334455       no              eth0\n                                                        vnet0' }
    ]
  },

  'lpic2-206-1': {
    title: 'Mantenimiento y Compilación',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Compilando desde el Origen' },
      { type: 'paragraph', text: 'Compilar software permite activar optimizaciones específicas para tu CPU o incluir parches de seguridad que aún no están en los repositorios oficiales.' },
      { type: 'infobox', variant: 'tip', content: 'Si vas a aplicar un parche, usa siempre `patch -p1` dentro del directorio raíz del código fuente para que las rutas coincidan correctamente.' }
    ]
  },

  'lpic2-206-2': {
    title: 'Estrategias de Copia de Seguridad y Recuperación de Desastres',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: 'No Juegues con tus Datos' },
      { type: 'paragraph', text: 'Un administrador sin copias de seguridad es un administrador que ya ha perdido su trabajo.' },
      { type: 'heading', level: 3, emoji: '🛡️', text: 'Rsync: El Rey de la Copia Incremental' },
      { type: 'code', title: 'Sincronización Remota', prompt: '$ rsync -avz --delete -e ssh /data/ user@backup-server:/backups/', output: 'sending incremental file list\ndata/database.sql\n\nsent 5.6M bytes  received 2.1k bytes  1.2M bytes/sec' },
      { type: 'table', headers: ['Solución', 'Uso Típico'], rows: [
        ['Bacula / Bareos', 'Copia de seguridad corporativa centralizada compleja'],
        ['Amanda', 'Copias en cinta y gestión por red'],
        ['LVM Snapshot', 'Copia "congelada" de sistemas activos'],
      ]}
    ]
  },

  'lpic2-206-3': {
    title: 'Monitorización y Notificación de Usuarios',
    sections: [
      { type: 'heading', level: 2, emoji: '📢', text: 'Comunicando Tiempos de Inactividad' },
      { type: 'paragraph', text: 'Antes de una intervención, es buena práctica avisar a quienes están conectados.' },
      { type: 'code', title: 'Mensajes del Sistema', prompt: '# wall "El sistema se reiniciará en 10 minutos para mantenimiento de hardware."', output: '' },
      { type: 'paragraph', text: 'El archivo `/etc/motd` (Message Of The Day) se muestra al iniciar sesión, mientras que `/etc/issue` se muestra antes del prompt de inicio de sesión.' }
    ]
  },

  'lpic2-207-1': {
    title: 'DNS y Servidor BIND',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'El Directorio de Internet' },
      { type: 'paragraph', text: 'BIND (Berkeley Internet Name Domain) es el estándar de facto. Se configura mediante el archivo `named.conf` y archivos de zona específicos.' },
      { type: 'table', headers: ['Tipo de Registro', 'Propósito'], rows: [
        ['A', 'Nombre IPv4'],
        ['AAAA', 'Nombre IPv6'],
        ['MX', 'Servidor de Correo'],
        ['CNAME', 'Alias (Nombre a Nombre)'],
        ['PTR', 'Búsqueda Inversa (IP a Nombre)'],
      ]}
    ]
  },

  'lpic2-207-2': {
    title: 'Gestión de Zonas DNS',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Búsqueda Directa e Inversa' },
      { type: 'paragraph', text: 'Una zona Directa (Forward) traduce nombres a IPs, una zona Inversa (Reverse) hace lo contrario (fundamental para servidores de correo).' },
      { type: 'table', headers: ['Registro', 'Función'], rows: [
        ['SOA', 'Start of Authority (parámetros de la zona)'],
        ['NS', 'Authoritative Name Servers'],
        ['A', 'Mapea nombre a dirección IPv4'],
        ['AAAA', 'Mapea nombre a dirección IPv6'],
        ['PTR', 'Mapea IP a nombre (usado en Inversa)'],
        ['MX', 'Mail Exchanger (servidor de correo)'],
        ['CNAME', 'Alias (un nombre que apunta a otro nombre)'],
      ]},
      { type: 'code', title: 'Ejemplo de registro SOA', prompt: '@  IN  SOA  ns1.example.com. root.example.com. (\n  2024030601 ; Serial\n  3600       ; Refresh\n  1800       ; Retry\n  604800     ; Expire\n  86400      ; Minimum TTL\n)', output: '' }
    ]
  },

  'lpic2-207-3': {
    title: 'Seguridad DNS y DNSSEC',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Protegiendo los Nombres' },
      { type: 'paragraph', text: 'El DNS clásico no es seguro. DNSSEC añade firmas digitales para garantizar que la respuesta no ha sido interceptada ni modificada.' },
      { type: 'infobox', variant: 'warning', content: 'DNSSEC protege contra el Cache Poisoning pero no cifra los datos. El tráfico DNS sigue siendo visible en texto claro.' },
      { type: 'heading', level: 3, emoji: '🛡️', text: 'TSIG (Transaction Signatures)' },
      { type: 'paragraph', text: 'Utiliza claves secretas compartidas para autenticar transferencias de zona entre servidores Maestro y Esclavo.' }
    ]
  },

  'lpic2-208-1': {
    title: 'Servicios Web con Apache y Nginx',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Servidores de Alto Rendimiento' },
      { type: 'paragraph', text: 'Apache es el servidor web más versátil, mientras que Nginx destaca por su velocidad y bajo consumo de recursos.' },
      { type: 'table', headers: ['Característica', 'Apache', 'Nginx'], rows: [
        ['Arquitectura', 'Basada en procesos (MPM)', 'Basada en eventos'],
        ['Configuración', '.htaccess permitido', 'Solo configuración central'],
        ['Uso ideal', 'Webs dinámicas complejas', 'Carga masiva y estática'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Usa Nginx como proxy inverso delante de Apache para obtener lo mejor de ambos mundos: flexibilidad y velocidad.' }
    ]
  },

  'lpic2-208-2': {
    title: 'Seguridad Web y HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'El Protocolo Seguro' },
      { type: 'paragraph', text: 'Configurar HTTPS ya no es opcional. En LPIC-2, debes saber cómo administrar certificados manualmente.' },
      { type: 'code', title: 'Configuración SSL en Apache', prompt: '<VirtualHost *:443>\n  ServerName mysite.com\n  SSLEngine on\n  SSLCertificateFile /etc/ssl/certs/mysite.crt\n  SSLCertificateKeyFile /etc/ssl/private/mysite.key\n</VirtualHost>', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Protege siempre la clave privada (.key) con permisos restrictivos: `chmod 600`. ¡Si un atacante la obtiene, puede descifrar todo el tráfico del sitio!' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx y Rendimiento Excepcional',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: '¿Por qué Elegir Nginx?' },
      { type: 'paragraph', text: 'Nginx destaca al servir archivos estáticos y al actuar como Proxy Inverso frente a otros servidores.' },
      { type: 'table', headers: ['Función', 'Directiva Nginx'], rows: [
        ['Proxy Inverso', 'proxy_pass http://backend_server;'],
        ['Balanceo de Carga', 'upstream backend { server s1; server s2; }'],
        ['Caché', 'proxy_cache_path /var/cache/nginx ...'],
        ['FastCGI (PHP)', 'fastcgi_pass unix:/var/run/php.sock;'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Nginx no procesa archivos `.htaccess`. Todas las configuraciones deben hacerse en los archivos principales de configuración en `/etc/nginx/sites-available/`.' }
    ]
  },

  'lpic2-209-1': {
    title: 'Compartición de Archivos: Samba y NFS',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Entornos Heterogéneos' },
      { type: 'paragraph', text: 'En una red moderna, Linux debe compartir archivos tanto con otros sistemas Linux (NFS) como con máquinas Windows (Samba).' },
      { type: 'infobox', variant: 'warning', content: 'En Samba, recuerda que los permisos de Linux y los permisos de Samba deben coincidir para que el usuario pueda escribir realmente en la carpeta.' }
    ]
  },

  'lpic2-209-2': {
    title: 'NFS: Network File System',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Compartición Unix Nativa' },
      { type: 'paragraph', text: 'NFS es increíblemente rápido para compartir archivos entre servidores Linux en una red local.' },
      { type: 'code', title: 'Exportando carpetas', prompt: '# cat /etc/exports\n/shared  192.168.1.0/24(rw,sync,no_root_squash)', output: '' },
      { type: 'paragraph', text: 'La opción `no_root_squash` permite al usuario root del cliente poseer permisos de root también en la carpeta remota (¡peligroso, úsalo solo si es estrictamente necesario!).' }
    ]
  },

  'lpic2-210-1': {
    title: 'Gestión de Clientes: DHCP, PAM y LDAP',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Redes y Autenticación' },
      { type: 'paragraph', text: 'La gestión centralizada es la clave de los sistemas empresariales.' },
      { type: 'table', headers: ['Tecnología', 'Función'], rows: [
        ['DHCP', 'Configuración IP automática'],
        ['PAM', 'Módulos de autenticación flexible'],
        ['LDAP', 'Directorio central de usuarios y recursos'],
      ]}
    ]
  },

  'lpic2-210-2': {
    title: 'PAM: Pluggable Authentication Modules',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Flexibilidad de Inicio de Sesión' },
      { type: 'paragraph', text: 'PAM permite cambiar la política de seguridad de todo el sistema modificando archivos de texto simples en `/etc/pam.d/`.' },
      { type: 'table', headers: ['Modificador', 'Efecto'], rows: [
        ['required', 'El éxito es obligatorio. Si falla, el usuario es rechazado, pero sigue ejecutando el resto de los módulos (para no dar pistas al atacante).'],
        ['requisite', 'El éxito es obligatorio. Si falla, interrumpe el proceso inmediatamente.'],
        ['sufficient', 'Si tiene éxito y ningún módulo "required" previo ha fallado, la autenticación se aprueba de inmediato.'],
        ['optional', 'El éxito o fracaso solo importa si es el único módulo de la lista.'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Los módulos se ejecutan en orden (la "pila" o "stack"). El resultado final depende de los modificadores de cada módulo.' },
      { type: 'infobox', variant: 'warning', content: '¡Un error en un archivo PAM puede dejarte fuera del sistema! Mantén siempre una sesión root abierta mientras experimentas.' }
    ]
  },

  'lpic2-210-3': {
    title: 'LDAP: Servicios de Directorio',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Gestionando Miles de Usuarios' },
      { type: 'paragraph', text: 'LDAP no es una base de datos relacional, sino un servicio de directorio optimizado para lecturas rápidas.' },
      { type: 'code', title: 'Estructura DN', prompt: 'dn: uid=claudio,ou=Users,dc=linuxquest,dc=it\nobjectClass: inetOrgPerson\ncn: Claudio\nsn: Dall\'Ara', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Servicios de Correo Electrónico',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Postfix y Dovecot' },
      { type: 'paragraph', text: 'Postfix se encarga de enviar y recibir correos (MTA), mientras que Dovecot permite a los usuarios leerlos (IMAP/POP3).' },
      { type: 'code', title: 'Verificar la cola de correo', prompt: '# mailq', output: '-Queue ID-  --Size-- ----Arrival Time---- -Sender/Recipient-------\nBC123456    1024 Wed Mar  6 10:00:00  user@example.com' }
    ]
  },

  'lpic2-211-2': {
    title: 'Dovecot y Entrega Local',
    sections: [
      { type: 'heading', level: 2, emoji: '📮', text: 'Acceso IMAP y POP3' },
      { type: 'paragraph', text: 'Mientras Postfix envía correos, Dovecot permite a los usuarios leerlos.' },
      { type: 'infobox', variant: 'tip', content: 'Configura Dovecot siempre utilizando SSL/TLS. Enviar contraseñas en texto claro mediante los protocolos estándar IMAP/POP3 representa un grave riesgo de seguridad.' }
    ]
  },

  'lpic2-212-1': {
    title: 'Seguridad y Auditoría del Sistema',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'Blindando el Servidor' },
      { type: 'paragraph', text: 'La seguridad no es un producto, sino un proceso continuo de filtrado y detección.' },
      { type: 'table', headers: ['Herramienta', 'Área de Seguridad'], rows: [
        ['Iptables', 'Cortafuegos (Netfilter)'],
        ['Fail2Ban', 'Protección contra fuerza bruta'],
        ['AIDE', 'Integridad de archivos'],
        ['Lynis', 'Auditoría de seguridad completa'],
      ]}
    ]
  },

  'lpic2-212-2': {
    title: 'Detección de Intrusiones y Auditoría',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Centinelas Tecnológicos' },
      { type: 'paragraph', text: 'El uso e instalación de programas como `Fail2Ban` o `AIDE` resulta de gran ayuda a la hora de poder evitar y ayudar tanto a dar caza como a interceptar de raíz los diversos indicios y pruebas concretas de modificación del sistema.' },
      { type: 'table', headers: ['Herramienta', 'Lo que Monitoriza'], rows: [
        ['Fail2Ban', 'Los registros (logs) del sistema para bloquear Ips infractoras ejecutando ataques continuos basados en el diccionario/fuerza bruta.'],
        ['AIDE', 'Guardián que comprueba la integridad a nivel base para cualquier archivo (descubriendo cambios e inyecciones encubiertas en ficheros críticos de sistema).'],
        ['Lynis', 'Escáner total que proporciona un examen completo de todos los rincones para elaborar una auditoría sobre salud global del sistema.'],
        ['Nmap', 'Herramienta experta que mapea y detalla la red visible exterior y puertos abiertos y accesibles.'],
      ]}
    ]
  },
}
