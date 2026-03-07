// LPIC-1 102 Quiz Pool — Spanish — Topic 109 (Conceptos Básicos de Red)

export const lpic1_102_topic5Quizzes_es = [
  // ─── 109.1 Fundamentos de los protocolos de internet (5 preguntas) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál es el puerto predeterminado para el protocolo HTTP no cifrado?',
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: 'El puerto 80 está reservado para el tráfico HTTP no cifrado.'
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Cuál de los siguientes puertos utiliza el protocolo SSH (Secure Shell) por defecto?',
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: 'El puerto 22 es el puerto estándar para el acceso remoto por SSH.',
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Cuántos bits se utilizan en una dirección IPv6 estándar?',
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: 'IPv6 utiliza direcciones de 128 bits, lo que amplía significativamente el espacio de direcciones en comparación con IPv4 (32 bits).',
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué protocolo utiliza la utilidad `ping` para probar la conectividad de la red?',
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: '`ping` envía mensajes ICMP (Internet Control Message Protocol) Echo Request.',
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Qué protocolo se considera "sin conexión" y no garantiza la entrega de paquetes?',
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: 'UDP (User Datagram Protocol) es un protocolo sin conexión y tiene menos sobrecarga que TCP.',
  },

  // ─── 109.2 Configuración persistente de la red (5 preguntas) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando moderno reemplaza a "ifconfig" para ver y configurar las direcciones IP de las interfaces?',
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: 'El comando "ip" de la suite iproute2 es el estándar moderno que reemplaza a ifconfig.'
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'En Netplan, ¿qué formato de archivo se utiliza para escribir las configuraciones de red?',
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: 'Netplan utiliza archivos .yaml para definir las configuraciones.'
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando se utiliza para mostrar la tabla de enrutamiento actual del sistema?',
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: '`ip route` (o el legado `route -n`) muestra la tabla de enrutamiento del kernel.',
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué utilidad de NetworkManager proporciona una interfaz de línea de comandos para gestionar las conexiones de red?',
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: '`nmcli` es la herramienta de línea de comandos para controlar NetworkManager.',
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'En un sistema basado en Debian (sin Netplan), ¿qué archivo se utiliza principalmente para la configuración estática de las interfaces de red?',
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: '/etc/network/interfaces es el archivo de configuración tradicional para la red en Debian.',
  },

  // ─── 109.3 Resolución de problemas básicos de red (5 preguntas) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Qué utilidad permite ver la ruta completa (saltos) que toman los paquetes hasta un host remoto?',
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: 'traceroute rastrea todos los routers intermedios (saltos) atravesados por los paquetes.'
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando permite ver qué procesos están escuchando en puertos de red específicos (sustituto de netstat)?',
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: 'ss (socket statistics) es el comando moderno para analizar las conexiones de red.'
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué proporciona típicamente la salida de `hostname -i`?',
    options: [
      'El tiempo de actividad actual del host',
      'La dirección IP del nombre de host local',
      'El estado de la conexión a internet',
      'La dirección de la puerta de enlace predeterminada'
    ],
    correct: 1,
    explanation: 'La bandera `-i` con `hostname` devuelve la(s) dirección(es) IP asociada(s) al host.',
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando se utiliza para mostrar o manipular la caché ARP (Address Resolution Protocol)?',
    options: ['arping', 'arp', 'ip neighbor', 'Tanto arp como ip neighbor'],
    correct: 3,
    explanation: 'El comando tradicional `arp` y el moderno `ip neighbor` tratan ambos con la tabla ARP.',
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Si un servidor no puede llegar a ningún host fuera de su subred local, ¿qué configuración debería comprobarse primero?',
    options: ['El nameserver en resolv.conf', 'La puerta de enlace predeterminada (default gateway) en la tabla de enrutamiento', 'El archivo /etc/hosts', 'El tamaño MTU de la interfaz'],
    correct: 1,
    explanation: 'La puerta de enlace predeterminada es responsable de encaminar el tráfico destinado a redes remotas.',
  },

  // ─── 109.4 Configurar el DNS del lado del cliente (5 preguntas) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '¿Qué archivo consulta primero un sistema Linux para resolver un nombre de host en una dirección IP, antes de consultar al DNS?',
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: '/etc/hosts es la base de datos estática local que suele tener precedencia sobre el DNS.'
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué indica la directiva "nameserver" dentro del archivo /etc/resolv.conf?',
    options: [
      'La dirección IP del servidor de correo',
      'La dirección IP de un servidor DNS a consultar',
      'El nombre de host de la computadora local',
      'La dirección de la puerta de enlace predeterminada'
    ],
    correct: 1,
    explanation: 'nameserver define los servidores DNS que el cliente utilizará para la resolución de nombres.'
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué archivo define el orden en el que el sistema intenta resolver los nombres de host (por ejemplo, primero archivos y luego dns)?',
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: '/etc/nsswitch.conf controla el orden de búsqueda para varias bases de datos del sistema.'
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '¿Qué utilidad de línea de comandos se utiliza para realizar consultas DNS y solucionar problemas de resolución de nombres?',
    options: ['dig', 'host', 'nslookup', 'Todas las anteriores'],
    correct: 3,
    explanation: '`dig`, `host` y `nslookup` son herramientas estándar para realizar consultas DNS.',
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '¿Qué hace la directiva "search" en /etc/resolv.conf?',
    options: [
      'Busca todos los servidores DNS disponibles en la subred',
      'Define el nombre de dominio que se debe añadir a los nombres de host no calificados durante la resolución',
      'Permite buscar archivos en el servidor',
      'Fuerza una búsqueda recursiva en el servidor de nombres'
    ],
    correct: 1,
    explanation: 'La directiva "search" enumera los nombres de dominio que se deben probar cuando no se proporciona un nombre de host con un FQDN.',
  },
];
