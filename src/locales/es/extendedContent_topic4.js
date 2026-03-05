export const topic4Extended = {
  "4-1": {
    "title": "Elegir un sistema operativo",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Categorías de sistemas operativos"
      },
      {
        "type": "paragraph",
        "text": "La elección del sistema operativo depende del caso de uso. Linux ofrece soluciones para cada escenario, desde estaciones de trabajo de escritorio hasta centros de datos empresariales, desde dispositivos IoT hasta la nube."
      },
      {
        "type": "table",
        "headers": [
          "Categoría",
          "Características",
          "Distribuciones típicas",
          "Ejemplo de uso"
        ],
        "rows": [
          [
            "Escritorios",
            "GUI, multimedia, productividad",
            "Ubuntu, Menta, Fedora",
            "Oficina, desarrollo, uso personal."
          ],
          [
            "Servidor",
            "Headless, servicios 24 horas al día, 7 días a la semana, estabilidad",
            "RHEL, servidor Ubuntu, Debian",
            "Servidor web, base de datos, correo electrónico."
          ],
          [
            "Empresa",
            "Soporte LTS, certificaciones, SLA",
            "RHEL, SLES",
            "Bancos, hospitales, gobiernos."
          ],
          [
            "Incorporado",
            "Ligero, específico, en tiempo real",
            "Yocto, Buildroot, Android",
            "Enrutadores, IoT, automoción"
          ],
          [
            "Contenedores/Nube",
            "Mínimo, inmutable",
            "Alpine, CoreOS, Flatcar",
            "Microservicios, Kubernetes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "☁️",
        "text": "Computación en la nube y Linux"
      },
      {
        "type": "paragraph",
        "text": "La computación en la nube es la provisión bajo demanda de recursos de TI a través de una red. Linux domina la nube: más del 90% de las cargas de trabajo públicas se ejecutan en kernels de Linux."
      },
      {
        "type": "table",
        "headers": [
          "Modelo",
          "tu manejas",
          "El proveedor gestiona",
          "Ejemplo"
        ],
        "rows": [
          [
            "IaaS",
            "SO, aplicaciones, datos",
            "Hardware, red, almacenamiento.",
            "AWS EC2, máquina virtual de Azure"
          ],
          [
            "PaaS",
            "aplicaciones, datos",
            "SO, tiempo de ejecución, middleware",
            "Heroku, motor de aplicaciones de Google"
          ],
          [
            "SaaS",
            "solo los datos",
            "Todo lo demás",
            "Gmail, Salesforce, Office 365"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏗️",
        "text": "Virtualización y contenedores"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🖥️ Máquina virtual",
          "items": [
            "Emular una computadora completa",
            "Tiene su propio sistema operativo kernel.",
            "Aislamiento completo",
            "Pesado (GB de RAM)",
            "Arranque en minutos",
            "Hipervisor: KVM, VMware, VirtualBox"
          ]
        },
        "right": {
          "title": "📦 Contenedores",
          "items": [
            "Comparte el kernel del host.",
            "Solo bibliotecas de aplicaciones",
            "Aislamiento a nivel de proceso",
            "Ligero (MB de RAM)",
            "Comience en segundos",
            "Tiempos de ejecución: Docker, Podman, contenedores"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI le pide que distinga entre IaaS, PaaS y SaaS, y entre virtualización (VM con hipervisor) y contenedorización (Docker). También conoce KVM como hipervisor nativo de Linux."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Ruta de certificación LPI"
      },
      {
        "type": "diagram",
        "title": "Ruta de certificación",
        "boxes": [
          {
            "label": "Linux Essentials",
            "color": "#10b981",
            "children": [
              "Esame 010-160",
              "1 solo esame",
              "Nessun prerequisito"
            ]
          },
          {
            "label": "LPIC-1",
            "color": "#3b82f6",
            "children": [
              "Esami 101 + 102",
              "Sysadmin base",
              "5 anni validità"
            ]
          },
          {
            "label": "LPIC-2",
            "color": "#f59e0b",
            "children": [
              "Esami 201 + 202",
              "Sysadmin avanzato",
              "Richiede LPIC-1"
            ]
          },
          {
            "label": "LPIC-3",
            "color": "#ef4444",
            "children": [
              "Specialità: Security/Virt/HA",
              "Livello enterprise",
              "Richiede LPIC-2"
            ]
          }
        ]
      }
    ]
  },
  "4-2": {
    "title": "Hardware de computadora",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧠",
        "text": "Componentes de hardware y comandos de Linux"
      },
      {
        "type": "paragraph",
        "text": "Linux ve todo el hardware a través de archivos virtuales en /proc y /sys. Cada componente tiene comandos dedicados para consultarlo."
      },
      {
        "type": "table",
        "headers": [
          "Componente",
          "Dominio",
          "archivo virtual",
          "Información mostrada"
        ],
        "rows": [
          [
            "UPC",
            "lscpu",
            "/proc/cpuinfo",
            "Modelo, núcleo, velocidad, caché."
          ],
          [
            "RAM",
            "libre -h",
            "/proc/meminfo",
            "Total, usado, gratis, permuta"
          ],
          [
            "Discos",
            "lsblk",
            "/proc/particiones",
            "Dispositivos, particiones, soportes."
          ],
          [
            "Espacio en disco",
            "df-h",
            "/proc/montajes",
            "Espacio usado/libre para el sistema de archivos"
          ],
          [
            "Dir. dimensión",
            "du -sh dir/",
            "—",
            "Espacio ocupado por el directorio"
          ],
          [
            "PCI",
            "lspci",
            "/proc/bus/pci",
            "Tarjetas de video, red, controladores."
          ],
          [
            "USB",
            "lsusb",
            "/proc/bus/usb",
            "Dispositivos USB conectados"
          ],
          [
            "Núcleo",
            "uname -a",
            "/proc/versión",
            "Versión y arquitectura del kernel"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💽",
        "text": "Almacenamiento: HDD frente a SSD frente a NVMe"
      },
      {
        "type": "table",
        "headers": [
          "Tipo",
          "Tecnología",
          "Velocidad de lectura",
          "Estado latente",
          "Precio/GB",
          "Duración"
        ],
        "rows": [
          [
            "disco duro",
            "Placas magnéticas giratorias",
            "100-200 MB/s",
            "5-10 ms",
            "0,02€",
            "Mecánico (desgaste)"
          ],
          [
            "SSD SATA",
            "Flash NAND, bus SATA",
            "500-550 MB/s",
            "0,1 ms",
            "0,08€",
            "Electrónica (ciclos de escritura)"
          ],
          [
            "NVMe",
            "Memoria flash NAND, bus PCIe",
            "3-7 GB/s",
            "0,02 ms",
            "0,10 €",
            "Electrónica (más rápida)"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "RAID: matriz redundante de discos independientes"
      },
      {
        "type": "paragraph",
        "text": "RAID combina múltiples discos físicos para lograr redundancia (protección de datos) y/o rendimiento."
      },
      {
        "type": "table",
        "headers": [
          "Nivel",
          "Técnica",
          "Mín. discos",
          "Redundancia",
          "Actuación",
          "Capacidad útil"
        ],
        "rows": [
          [
            "RAID 0",
            "rayado",
            "2",
            "❌ Ninguno",
            "⚡ Lectura/escritura rápida",
            "100%"
          ],
          [
            "RAID 1",
            "Duplicación",
            "2",
            "✅ 1 disco",
            "⚡ Lectura rápida",
            "50%"
          ],
          [
            "RAID 5",
            "Rayado + paridad",
            "3",
            "✅ 1 disco",
            "⚡ Lectura rápida",
            "(N-1)/No"
          ],
          [
            "RAID 6",
            "Rayas + 2 lazos",
            "4",
            "✅ 2 discos",
            "⚡ Lectura rápida",
            "(N-2)/N"
          ],
          [
            "RAID 10",
            "Espejo + Raya",
            "4",
            "✅ 1 por espejo",
            "⚡⚡ Máximos",
            "50%"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "¡RAID NO es una copia de seguridad!",
        "content": "RAID protege contra fallas de hardware de los discos, ¡pero NO es una copia de seguridad! Si elimina un archivo, se elimina de todos los discos RAID. La copia de seguridad es una copia separada de sus datos."
      }
    ]
  },
  "4-3": {
    "title": "Kernel, procesos y registros",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎯",
        "text": "El núcleo de Linux"
      },
      {
        "type": "paragraph",
        "text": "El kernel es el corazón del sistema operativo. Gestiona CPU, memoria, E/S, red y dispositivos. El kernel de Linux es monolítico pero modular: puede cargar/descargar módulos sin reiniciar."
      },
      {
        "type": "diagram",
        "title": "Secuencia de arranque",
        "boxes": [
          {
            "label": "1. BIOS/UEFI",
            "color": "#ef4444",
            "children": [
              "POST hardware",
              "Cerca bootloader"
            ]
          },
          {
            "label": "2. GRUB",
            "color": "#f59e0b",
            "children": [
              "Menu di boot",
              "Carica kernel"
            ]
          },
          {
            "label": "3. Kernel",
            "color": "#10b981",
            "children": [
              "Inizializza hardware",
              "Monta root filesystem"
            ]
          },
          {
            "label": "4. systemd (PID 1)",
            "color": "#3b82f6",
            "children": [
              "Avvia servizi",
              "Target multi-user"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚙️",
        "text": "Gestión de procesos"
      },
      {
        "type": "table",
        "headers": [
          "Dominio",
          "Función",
          "Uso típico"
        ],
        "rows": [
          [
            "ps auxiliar",
            "Listar todos los procesos",
            "Descripción general de los procesos en ejecución"
          ],
          [
            "arriba / arriba",
            "monitor en tiempo real",
            "Ver CPU/RAM en tiempo real"
          ],
          [
            "matar PID",
            "Enviar señal para procesar",
            "Terminar un proceso cortésmente"
          ],
          [
            "matar -9 PID",
            "Terminación forzada (SIGKILL)",
            "Proceso bloqueado y no responde"
          ],
          [
            "bg/fg",
            "Fondo/primer plano",
            "Mover procesos entre bg y fg"
          ],
          [
            "empleos",
            "Lista de procesos en segundo plano",
            "Ver lo que se ejecuta en segundo plano"
          ],
          [
            "cmd nohup &",
            "El proceso sobrevive al cierre de sesión",
            "Comandos que deben continuar"
          ],
          [
            "nombre de pgrep",
            "Buscar PID por nombre",
            "Busque procesos específicos"
          ],
          [
            "nombre pkill",
            "Terminar por nombre",
            "Matar por nombre en lugar de PID"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "👻",
        "text": "Señales Unix"
      },
      {
        "type": "table",
        "headers": [
          "Señal",
          "Número",
          "Acción",
          "¿Interceptable?"
        ],
        "rows": [
          [
            "SIGNO",
            "15",
            "Terminar (educado, limpieza)",
            "✅ Sí"
          ],
          [
            "SIGKILL",
            "9",
            "Fin (forzado, inmediato)",
            "❌No"
          ],
          [
            "Suspiro",
            "1",
            "Colgar/Recargar configuración",
            "✅ Sí"
          ],
          [
            "FIRMA",
            "2",
            "Interrumpir (Ctrl+C)",
            "✅ Sí"
          ],
          [
            "SIGSTOP",
            "19",
            "suspender el proceso",
            "❌No"
          ],
          [
            "SEÑAL",
            "18",
            "Reanudar el proceso suspendido",
            "✅ Sí"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI pregunta la diferencia entre SIGTERM (15, interceptable) y SIGKILL (9, no interceptable). Utilice siempre SIGTERM antes que SIGKILL."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Registros del sistema"
      },
      {
        "type": "table",
        "headers": [
          "Archivo/Comando",
          "Contenido",
          "Formato"
        ],
        "rows": [
          [
            "/var/log/syslog",
            "Registro general del sistema",
            "Texto (rsyslog)"
          ],
          [
            "/var/log/auth.log",
            "Iniciar sesión, sudo, autenticación",
            "Texto"
          ],
          [
            "/var/log/kern.log",
            "Mensajes del núcleo",
            "Texto"
          ],
          [
            "/var/log/dmesg",
            "Arranque y hardware",
            "Núcleo de búfer de anillo"
          ],
          [
            "diarioctl",
            "Todos los registros (diario systemd)",
            "Binario (sistema)"
          ],
          [
            "diarioctl -u nginx",
            "Registro de un servicio específico",
            "Filtrado por unidad"
          ],
          [
            "diarioctl -f",
            "Seguir registros en tiempo real",
            "Como cola -f"
          ]
        ]
      }
    ]
  },
  "4-4": {
    "title": "Redes",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📡",
        "text": "Conceptos fundamentales de red"
      },
      {
        "type": "paragraph",
        "text": "Cada dispositivo de la red necesita una dirección IP, una máscara de subred (para definir la red local), una puerta de enlace (para salir de la red) y un servidor DNS (para traducir nombres a IP)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "IPv4: direcciones y subredes"
      },
      {
        "type": "paragraph",
        "text": "IPv4 utiliza direcciones de 32 bits, representadas como 4 grupos decimales del 0 al 255 (por ejemplo, 192.168.1.100)."
      },
      {
        "type": "table",
        "headers": [
          "Rango",
          "Tipo",
          "Clase",
          "Red/Anfitrión"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "Privado",
            "A",
            "16 millones de direcciones"
          ],
          [
            "172.16.0.0/12",
            "Privado",
            "B",
            "1 millón de direcciones"
          ],
          [
            "192.168.0.0/16",
            "Privado",
            "do",
            "65K direcciones"
          ],
          [
            "127.0.0.0/8",
            "Bucles",
            "—",
            "localhost (la máquina misma)"
          ],
          [
            "0.0.0.0",
            "Ruta predeterminada",
            "—",
            "Todas las direcciones no especificadas"
          ],
          [
            "255.255.255.255",
            "Transmisión",
            "—",
            "Todos en la red local"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Notación CIDR",
        "content": "/24 significa que los primeros 24 bits son la parte de \"red\" y los últimos 8 bits son la parte de \"host\". 192.168.1.0/24 = red de 192.168.1.0 a 192.168.1.255 (256 direcciones, 254 utilizables)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "IPv6"
      },
      {
        "type": "paragraph",
        "text": "IPv6 utiliza direcciones de 128 bits, escritas en hexadecimal (por ejemplo, 2001:0db8:85a3::8a2e:0370:7334). Soluciona el problema del agotamiento de IPv4 (4 mil millones de direcciones frente a 340 undecillones)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "DNS y puertos"
      },
      {
        "type": "table",
        "headers": [
          "trae",
          "Protocolo",
          "Servicio",
          "Descripción"
        ],
        "rows": [
          [
            "20/21",
            "tcp",
            "ftp",
            "Protocolo de transferencia de archivos"
          ],
          [
            "22",
            "tcp",
            "SSH",
            "Acceso remoto seguro"
          ],
          [
            "23",
            "tcp",
            "Telnet",
            "Acceso remoto NO seguro"
          ],
          [
            "25",
            "tcp",
            "SMTP",
            "envío correo electrónico"
          ],
          [
            "53",
            "TCP/UDP",
            "DNS",
            "Traducción de nombre → IP"
          ],
          [
            "80",
            "tcp",
            "HTTP",
            "Web sin cifrar"
          ],
          [
            "110",
            "tcp",
            "POP3",
            "Recepción de correo electrónico"
          ],
          [
            "143",
            "tcp",
            "IMAP",
            "Gestión remota de correo electrónico"
          ],
          [
            "443",
            "tcp",
            "HTTPS",
            "Web cifrada (TLS)"
          ],
          [
            "3306",
            "tcp",
            "mysql",
            "Bases de datos MySQL/MariaDB"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Comandos de red"
      },
      {
        "type": "code",
        "title": "Comandos de diagnóstico de red",
        "prompt": "# Mostrar direcciones IP de interfaces\nMostrar dirección $ip\n\n# Mostrar la tabla de enrutamiento\nMostrar ruta $ip\n\n# Prueba de conectividad\n$ping -c 4 google.com\n\n# Trazar la ruta de los paquetes\n$ traceroute google.com\n\n# Mostrar puertos de escucha\n$ss-tuln\n\n# consultas DNS\n$ excavar google.com\n$nslookup google.com\n\n# Mostrar configuración DNS\n$ gato /etc/resolv.conf",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Archivo",
          "Función"
        ],
        "rows": [
          [
            "/etc/hosts",
            "Nombre de mapeo estático → IP (prioridad sobre DNS)"
          ],
          [
            "/etc/resolv.conf",
            "Servidor DNS del sistema (servidor de nombres 8.8.8.8)"
          ],
          [
            "/etc/nombre de host",
            "Nombre de host de la máquina"
          ],
          [
            "/etc/nsswitch.conf",
            "Orden de resolución de nombres (archivos → dns)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI solicita puertos estándar (22=SSH, 80=HTTP, 443=HTTPS, 53=DNS) y archivos de configuración de red (/etc/resolv.conf, /etc/hosts). Conozca también la diferencia entre IPv4 (32 bits) e IPv6 (128 bits)."
      }
    ]
  }
};
