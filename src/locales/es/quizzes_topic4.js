export const topic4Quizzes = [
  {
    "lessonId": "4-1",
    "question": "¿Qué tipo de sistema operativo está diseñado para garantizar soporte y tiempo de actividad a largo plazo?",
    "options": [
      "Consumidor",
      "Empresa",
      "Incorporado",
      "Móvil"
    ],
    "correct": 1,
    "explanation": "Los sistemas empresariales (por ejemplo, RHEL, SLES) ofrecen soporte a largo plazo y alta confiabilidad."
  },
  {
    "lessonId": "4-1",
    "question": "¿Qué sistema operativo utilizan la mayoría de las supercomputadoras del mundo?",
    "options": [
      "Servidor Windows",
      "macos",
      "linux",
      "FreeBSD"
    ],
    "correct": 2,
    "explanation": "Linux es utilizado por más del 90% de los superordenadores del ranking TOP500."
  },
  {
    "lessonId": "4-1",
    "question": "IaaS significa:",
    "options": [
      "Internet como servicio",
      "Infraestructura como servicio",
      "Integración como servicio",
      "Interfaz como servicio"
    ],
    "correct": 1,
    "explanation": "IaaS = Infraestructura como servicio. Proporciona VM, almacenamiento y red (por ejemplo, AWS EC2)."
  },
  {
    "lessonId": "4-1",
    "question": "PaaS proporciona:",
    "options": [
      "Sólo hardware",
      "Plataforma de desarrollo y ejecución.",
      "Sólo red",
      "Sólo almacenamiento"
    ],
    "correct": 1,
    "explanation": "PaaS = Plataforma como Servicio. Proporciona el entorno de desarrollo (por ejemplo, Heroku, Google App Engine)."
  },
  {
    "lessonId": "4-1",
    "question": "SaaS es:",
    "options": [
      "Software accesible a través del navegador",
      "Un solo sistema operativo",
      "Hardware dedicado",
      "Un tipo de red"
    ],
    "correct": 0,
    "explanation": "SaaS = Software como servicio. El usuario utiliza el software a través de un navegador (por ejemplo, Gmail, Salesforce)."
  },
  {
    "lessonId": "4-1",
    "question": "RHEL es el acrónimo de:",
    "options": [
      "Red Hat Enterprise Linux",
      "Red Hat Esencial Linux",
      "Red Hat Linux extendido",
      "Red Hat Linux integrado"
    ],
    "correct": 0,
    "explanation": "RHEL = Red Hat Enterprise Linux, distribución empresarial con soporte comercial."
  },
  {
    "lessonId": "4-1",
    "question": "La certificación LPIC-1 requiere:",
    "options": [
      "solo un examen",
      "Dos exámenes (101 y 102)",
      "Tres exámenes",
      "Sin exámenes"
    ],
    "correct": 1,
    "explanation": "LPIC-1 requiere aprobar los exámenes 101 y 102."
  },
  {
    "lessonId": "4-1",
    "question": "¿Qué tecnología le permite ejecutar varios sistemas operativos en una máquina?",
    "options": [
      "Contenedorización",
      "Virtualización",
      "Emulación",
      "Compilación"
    ],
    "correct": 1,
    "explanation": "La virtualización (KVM, VMware, VirtualBox) le permite ejecutar varios sistemas operativos en un host."
  },
  {
    "lessonId": "4-1",
    "question": "Usos de Docker:",
    "options": [
      "Máquinas virtuales",
      "Recipiente",
      "Emuladores",
      "metal desnudo"
    ],
    "correct": 1,
    "explanation": "Docker utiliza contenedores: entornos aislados que comparten el kernel del host."
  },
  {
    "lessonId": "4-1",
    "question": "Kubernetes se utiliza para:",
    "options": [
      "desarrollo web",
      "Orquestación de contenedores",
      "Gestión de bases de datos",
      "Edición de texto"
    ],
    "correct": 1,
    "explanation": "Kubernetes (K8) organiza y gestiona contenedores a escala."
  },
  {
    "lessonId": "4-1",
    "question": "KVM es:",
    "options": [
      "un editor",
      "Un hipervisor de Linux",
      "un sistema de archivos",
      "Un protocolo de red"
    ],
    "correct": 1,
    "explanation": "KVM (Máquina virtual basada en kernel) es el hipervisor integrado en el kernel de Linux."
  },
  {
    "lessonId": "4-2",
    "question": "¿Qué tipo de almacenamiento tiene partes mecánicas móviles?",
    "options": [
      "SSD",
      "NVMe",
      "disco duro",
      "RAM"
    ],
    "correct": 2,
    "explanation": "HDD (disco duro) tiene platos magnéticos giratorios y un cabezal mecánico."
  },
  {
    "lessonId": "4-2",
    "question": "¿Qué nivel RAID ofrece duplicación?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    "correct": 1,
    "explanation": "RAID 1 crea una copia idéntica de los datos en dos discos (duplicación)."
  },
  {
    "lessonId": "4-2",
    "question": "RAID 0 ofrece:",
    "options": [
      "Redundancia",
      "Solo velocidad (striping)",
      "Igualdad",
      "Espejo + raya"
    ],
    "correct": 1,
    "explanation": "RAID 0 distribuye datos en varios discos para mayor velocidad, pero sin redundancia."
  },
  {
    "lessonId": "4-2",
    "question": "¿Qué comando muestra información de la CPU?",
    "options": [
      "información de la CPU",
      "lscpu",
      "mostrar CPU",
      "gato / CPU"
    ],
    "correct": 1,
    "explanation": "lscpu muestra información detallada de la CPU."
  },
  {
    "lessonId": "4-2",
    "question": "libre -h muestra:",
    "options": [
      "Espacio en disco",
      "Memoria RAM libre y usada",
      "Abrir archivos",
      "Procesos"
    ],
    "correct": 1,
    "explanation": "Gratis muestra el uso de RAM y memoria de intercambio. -h = formato legible por humanos."
  },
  {
    "lessonId": "4-2",
    "question": "espectáculo lsblk:",
    "options": [
      "Procesos",
      "Dispositivos de bloque (discos)",
      "Archivos de texto",
      "Usuarios"
    ],
    "correct": 1,
    "explanation": "lsblk (lista de dispositivos de bloque) muestra discos y particiones."
  },
  {
    "lessonId": "4-2",
    "question": "df -h muestra:",
    "options": [
      "memoria RAM",
      "Espacio en disco de los sistemas de archivos montados",
      "Archivos duplicados",
      "Dispositivos de red"
    ],
    "correct": 1,
    "explanation": "df (disco libre) muestra el espacio libre y usado en los sistemas de archivos montados."
  },
  {
    "lessonId": "4-2",
    "question": "NVMe se conecta a través de:",
    "options": [
      "sata",
      "USB",
      "PCIe",
      "IED"
    ],
    "correct": 2,
    "explanation": "NVMe (Non-Volatile Memory Express) utiliza el bus PCIe para velocidades más altas."
  },
  {
    "lessonId": "4-2",
    "question": "lspci muestra:",
    "options": [
      "dispositivos USB",
      "Dispositivos PCI/PCIe",
      "Archivos del sistema",
      "Procesos"
    ],
    "correct": 1,
    "explanation": "lspci enumera los dispositivos conectados al bus PCI/PCIe."
  },
  {
    "lessonId": "4-2",
    "question": "lsusb muestra:",
    "options": [
      "dispositivos PCI",
      "Dispositivos USB conectados",
      "Abrir archivos",
      "Directorios"
    ],
    "correct": 1,
    "explanation": "lsusb enumera los dispositivos USB conectados al sistema."
  },
  {
    "lessonId": "4-2",
    "question": "RAID 5 combina:",
    "options": [
      "Sólo duplicación",
      "Striping con paridad distribuida",
      "Sólo paridad",
      "Solo rayas"
    ],
    "correct": 1,
    "explanation": "RAID 5 distribuye datos y paridad en al menos 3 discos. Tolera la pérdida de 1 disco."
  },
  {
    "lessonId": "4-3",
    "question": "¿En qué directorio se encuentra el kernel de Linux?",
    "options": [
      "/núcleo",
      "/bota",
      "/sistema",
      "/proceso"
    ],
    "correct": 1,
    "explanation": "El kernel de Linux (vmlinuz) se encuentra en el directorio /boot."
  },
  {
    "lessonId": "4-3",
    "question": "¿Qué comando muestra los procesos en ejecución en tiempo real?",
    "options": [
      "PD",
      "es",
      "arriba",
      "gato /proc"
    ],
    "correct": 2,
    "explanation": "top muestra los procesos en tiempo real con actualización continua."
  },
  {
    "lessonId": "4-3",
    "question": "¿Qué señal se utiliza para finalizar con fuerza un proceso?",
    "options": [
      "SIGNO (15)",
      "SUSPIRACIÓN (1)",
      "SIGKILL (9)",
      "SIGSTOP (19)"
    ],
    "correct": 2,
    "explanation": "SIGKILL (kill -9) finaliza forzosamente un proceso."
  },
  {
    "lessonId": "4-3",
    "question": "systemd es:",
    "options": [
      "un editor de texto",
      "El sistema de inicio con PID 1",
      "un sistema de archivos",
      "Un protocolo de red"
    ],
    "correct": 1,
    "explanation": "systemd es el sistema de inicio predeterminado. Es el primer proceso (PID 1)."
  },
  {
    "lessonId": "4-3",
    "question": "SIGTERM (15) a diferencia de SIGKILL (9):",
    "options": [
      "No se pueden matar procesos",
      "Puede ser interceptado por el proceso.",
      "es mas poderoso",
      "no existe"
    ],
    "correct": 1,
    "explanation": "SIGTERM es \"amable\": el proceso puede interceptarlo y realizar una limpieza antes de finalizar."
  },
  {
    "lessonId": "4-3",
    "question": "ps aux mostrar:",
    "options": [
      "Solo procesos de usuario",
      "Todos los procesos de todos los usuarios.",
      "Sólo los demonios",
      "Sólo procesos raíz"
    ],
    "correct": 1,
    "explanation": "ps aux muestra todos los procesos (a=todos los usuarios, u=formato de usuario, x=incluso sin terminal)."
  },
  {
    "lessonId": "4-3",
    "question": "& al final de un comando lo envía a:",
    "options": [
      "primer piso",
      "Fondo",
      "un archivo",
      "Otro usuario"
    ],
    "correct": 1,
    "explanation": "& ejecuta el comando en segundo plano, devolviendo el control de la terminal."
  },
  {
    "lessonId": "4-3",
    "question": "GRUB es:",
    "options": [
      "un sistema de archivos",
      "Un gestor de arranque",
      "un núcleo",
      "un demonio"
    ],
    "correct": 1,
    "explanation": "GRUB (Grand Unified Bootloader) carga el kernel de Linux en el arranque."
  },
  {
    "lessonId": "4-3",
    "question": "El PID de init/systemd es:",
    "options": [
      "0",
      "1",
      "-1",
      "100"
    ],
    "correct": 1,
    "explanation": "init/systemd es siempre el proceso con PID 1, el padre de todos los demás procesos."
  },
  {
    "lessonId": "4-3",
    "question": "/proc es:",
    "options": [
      "Un directorio en el disco",
      "Un sistema de archivos virtual con información de proceso.",
      "Un directorio para registros",
      "una partición"
    ],
    "correct": 1,
    "explanation": "/proc es un sistema de archivos virtual que expone información del kernel y del proceso."
  },
  {
    "lessonId": "4-3",
    "question": "Los demonios convencionalmente terminan con:",
    "options": [
      "\"Sí\"",
      "\"d\"",
      "\"incógnita\"",
      "\"r\""
    ],
    "correct": 1,
    "explanation": "Los demonios tienen nombres que terminan en \"d\": sshd, httpd, crond, systemd."
  },
  {
    "lessonId": "4-4",
    "question": "¿Qué rango de IP es privado (no enrutable en Internet)?",
    "options": [
      "8.8.8.0/24",
      "192.168.0.0/16",
      "200.100.0.0/16",
      "1.1.1.0/24"
    ],
    "correct": 1,
    "explanation": "192.168.0.0/16 es un rango de IP privado (RFC 1918)."
  },
  {
    "lessonId": "4-4",
    "question": "¿Qué archivo contiene la configuración del servidor DNS?",
    "options": [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/dns.conf",
      "/etc/red"
    ],
    "correct": 1,
    "explanation": "/etc/resolv.conf contiene los servidores DNS utilizados por el sistema."
  },
  {
    "lessonId": "4-4",
    "question": "¿Qué puerto utiliza por defecto el protocolo SSH?",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "correct": 1,
    "explanation": "SSH utiliza el puerto 22. FTP=21, HTTP=80, HTTPS=443."
  },
  {
    "lessonId": "4-4",
    "question": "El comando \"ip addr\" muestra:",
    "options": [
      "El DNS",
      "Las direcciones IP de las interfaces.",
      "las puertas se abren",
      "Procesos de red"
    ],
    "correct": 1,
    "explanation": "ip addr (o ip a) muestra las direcciones IP configuradas en las interfaces de red."
  },
  {
    "lessonId": "4-4",
    "question": "/etc/hosts se utiliza para:",
    "options": [
      "Configurar DNS",
      "Asignar nombres a IP localmente",
      "Configurar el cortafuegos",
      "Listar los servidores"
    ],
    "correct": 1,
    "explanation": "/etc/hosts le permite definir nombre → asignaciones de IP sin usar DNS."
  },
  {
    "lessonId": "4-4",
    "question": "¿Qué puerto utiliza HTTPS?",
    "options": [
      "22",
      "80",
      "443",
      "8080"
    ],
    "correct": 2,
    "explanation": "HTTPS usa el puerto 443. HTTP usa 80."
  },
  {
    "lessonId": "4-4",
    "question": "DNS traduce:",
    "options": [
      "IP a MAC",
      "Nombres de dominio en direcciones IP",
      "Puertas en servicios",
      "Usuarios en grupos"
    ],
    "correct": 1,
    "explanation": "DNS (Sistema de nombres de dominio) traduce nombres (google.com) en direcciones IP."
  },
  {
    "lessonId": "4-4",
    "question": "IPv6 utiliza direcciones de:",
    "options": [
      "32 bits",
      "64 bits",
      "128 bits",
      "256 bits"
    ],
    "correct": 2,
    "explanation": "IPv6 utiliza direcciones de 128 bits, en comparación con los 32 bits de IPv4."
  },
  {
    "lessonId": "4-4",
    "question": "El comando \"ping\" comprueba:",
    "options": [
      "La velocidad del disco.",
      "La accesibilidad de un host en la red.",
      "Memoria",
      "La CPU"
    ],
    "correct": 1,
    "explanation": "ping envía paquetes ICMP para comprobar si se puede acceder a un host."
  },
  {
    "lessonId": "4-4",
    "question": "ss o netstat muestra:",
    "options": [
      "Abrir archivos",
      "Conexiones de red y puertos.",
      "los procesos",
      "las particiones"
    ],
    "correct": 1,
    "explanation": "ss (estadísticas de sockets) muestra las conexiones de red y los puertos de escucha."
  },
  {
    "lessonId": "4-4",
    "question": "10.0.0.0/8 es un rango:",
    "options": [
      "Público",
      "Privado",
      "Multidifusión reservada",
      "Bucles"
    ],
    "correct": 1,
    "explanation": "10.0.0.0/8 es uno de los 3 rangos privados RFC 1918 (junto con 172.16.0.0/12 y 192.168.0.0/16)."
  },
  {
    "lessonId": "4-2",
    "question": "El intercambio en Linux sirve como:",
    "options": [
      "Copia de seguridad automática",
      "memoria de disco virtual",
      "Espacio para troncos",
      "caché DNS"
    ],
    "correct": 1,
    "explanation": "Swap es espacio en disco que se utiliza como extensión de la RAM cuando está llena."
  },
  {
    "lessonId": "4-3",
    "question": "diarioctl muestra:",
    "options": [
      "Archivos del sistema",
      "Los registros del diario systemd",
      "las particiones",
      "los procesos"
    ],
    "correct": 1,
    "explanation": "journalctl consulta el diario de systemd para ver los registros del sistema."
  },
  {
    "lessonId": "4-3",
    "question": "El comando \"nombre de host\" muestra:",
    "options": [
      "El usuario actual",
      "El nombre de la maquina",
      "La versión del núcleo",
      "La dirección IP"
    ],
    "correct": 1,
    "explanation": "hostname muestra o establece el nombre de host del sistema."
  },
  {
    "lessonId": "4-3",
    "question": "pantalla y tmux son:",
    "options": [
      "editor de texto",
      "multiplexor de terminales",
      "Administradores de red",
      "Gestor de archivos"
    ],
    "correct": 1,
    "explanation": "screen y tmux le permiten tener múltiples sesiones de terminal y mantenerlas activas."
  },
  {
    "lessonId": "4-3",
    "question": "El estado de systemctl nginx muestra:",
    "options": [
      "El código fuente",
      "El estado del servicio nginx",
      "la configuracion",
      "las puertas se abren"
    ],
    "correct": 1,
    "explanation": "El estado de systemctl muestra si un servicio está activo, sus registros recientes y su PID."
  },
  {
    "lessonId": "4-2",
    "question": "El comando \"tiempo de actividad\" muestra:",
    "options": [
      "Espacio en disco",
      "¿Cuánto tiempo ha estado encendido el sistema?",
      "La velocidad de la red",
      "la temperatura"
    ],
    "correct": 1,
    "explanation": "El tiempo de actividad muestra el tiempo de actividad del sistema, el número de usuarios y el promedio de carga."
  },
  {
    "lessonId": "4-3",
    "question": "Un proceso en el estado S (dormir) es:",
    "options": [
      "Usando la CPU",
      "Esperando un evento (E/S, señal)",
      "Refinamiento",
      "Equivocado"
    ],
    "correct": 1,
    "explanation": "S = sueño interrumpible. El proceso espera un evento como entrada E/S."
  },
  {
    "lessonId": "4-3",
    "question": "lsmod muestra:",
    "options": [
      "Módulos del kernel cargados",
      "las particiones",
      "Los archivos de registro",
      "Los paquetes instalados"
    ],
    "correct": 0,
    "explanation": "lsmod enumera los módulos del kernel actualmente cargados en la memoria."
  },
  {
    "lessonId": "4-4",
    "question": "La dirección de bucle invertido es:",
    "options": [
      "10.0.0.1",
      "192.168.1.1",
      "127.0.0.1",
      "255.255.255.255"
    ],
    "correct": 2,
    "explanation": "127.0.0.1 es la dirección de bucle invertido (localhost) que se utiliza para comunicarse con usted mismo."
  },
  {
    "lessonId": "4-4",
    "question": "El comando \"excavar\" se utiliza para:",
    "options": [
      "Archivos de excavación",
      "consultas DNS",
      "Diagnóstico de hardware",
      "Administrar discos"
    ],
    "correct": 1,
    "explanation": "dig (Domain Information Groper) realiza consultas DNS para resolver nombres de dominio."
  }
];
