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

  'lpic2-203-1': {
    title: 'Sistemas de Archivos Avanzados',
    sections: [
      { type: 'heading', level: 2, emoji: '🏡', text: 'Más allá de Ext4' },
      { type: 'paragraph', text: 'Mientras que Ext4 es fiable, sistemas como XFS son preferidos para archivos gigantes, y Btrfs para funciones avanzadas como snapshots integrados.' },
      { type: 'infobox', variant: 'warning', content: 'Nunca intentes redimensionar un volumen XFS hacia abajo (shrink); XFS solo permite crecer.' }
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

  'lpic2-205-1': {
    title: 'Redes Avanzadas y Enrutamiento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Configuración de Interfaces' },
      { type: 'paragraph', text: 'Dominar la suite `iproute2` es esencial. El comando `ip` sustituye a los antiguos `ifconfig` y `route`.' },
      { type: 'code', title: 'Configurar una IP y Ruta', prompt: '# ip addr add 192.168.10.1/24 dev eth1\n# ip route add default via 192.168.10.254', output: '' },
      { type: 'paragraph', text: 'Para la resolución de problemas, herramientas como `tcpdump` permiten analizar el tráfico a nivel de paquete.' }
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

  'lpic2-209-1': {
    title: 'Compartición de Archivos: Samba y NFS',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Entornos Heterogéneos' },
      { type: 'paragraph', text: 'En una red moderna, Linux debe compartir archivos tanto con otros sistemas Linux (NFS) como con máquinas Windows (Samba).' },
      { type: 'infobox', variant: 'warning', content: 'En Samba, recuerda que los permisos de Linux y los permisos de Samba deben coincidir para que el usuario pueda escribir realmente en la carpeta.' }
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

  'lpic2-211-1': {
    title: 'Servicios de Correo Electrónico',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Postfix y Dovecot' },
      { type: 'paragraph', text: 'Postfix se encarga de enviar y recibir correos (MTA), mientras que Dovecot permite a los usuarios leerlos (IMAP/POP3).' },
      { type: 'code', title: 'Verificar la cola de correo', prompt: '# mailq', output: '-Queue ID-  --Size-- ----Arrival Time---- -Sender/Recipient-------\nBC123456    1024 Wed Mar  6 10:00:00  user@example.com' }
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
}
