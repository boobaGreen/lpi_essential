export const lessonContent = {
  "1-1": {
    "comic": {
      "title": "El nacimiento de Linux 🐧",
      "panels": [
        {
          "emoji": "🏛️",
          "text": "1969 — Nace Unix, un sistema operativo revolucionario, en los laboratorios de AT&T..."
        },
        {
          "emoji": "👨‍💻",
          "text": "1991 — Un joven estudiante finlandés, Linus Torvalds, comienza a desarrollar un núcleo libre..."
        },
        {
          "emoji": "🐧",
          "text": "“Estoy creando un sistema operativo gratuito, sólo un hobby…” — ¡La publicación que lo cambió todo!"
        },
        {
          "emoji": "🌍",
          "text": "Hoy en día, Linux está en todas partes: servidores, nube, teléfonos inteligentes (Android), IoT, supercomputadoras."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Familias de distribución",
        "items": [
          "Debian → Ubuntu, menta",
          "Sombrero rojo → RHEL, Fedora, CentOS",
          "SUSE → SLES, openSUSE"
        ]
      },
      {
        "title": "Administradores de paquetes",
        "items": [
          "Debian: dpkg, apto (.deb)",
          "Red Hat: rpm, mmm, dnf (.rpm)",
          "SUSE: rpm, zypper (.rpm)"
        ]
      },
      {
        "title": "Sistemas integrados",
        "items": [
          "Android = kernel de Linux modificado",
          "Frambuesa Pi + Raspbian",
          "Linux en el 90% de la nube pública"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gato /etc/os-liberación",
      "output": "NAME=\"Ubuntu\"\nVERSION=\"22.04 LTS\"\nID=ubuntu\nID_LIKE=debian"
    }
  },
  "1-2": {
    "comic": {
      "title": "El mundo de las aplicaciones de código abierto 📦",
      "panels": [
        {
          "emoji": "📝",
          "text": "LibreOffice: Writer, Calc, Impress: ¡la suite gratuita que desafía a Microsoft Office!"
        },
        {
          "emoji": "🌐",
          "text": "Firefox y Chromium: navegadores web gratuitos y potentes."
        },
        {
          "emoji": "🖥️",
          "text": "Apache y Nginx: ¡los servidores web que hacen funcionar Internet!"
        },
        {
          "emoji": "💻",
          "text": "C, Java, Python, Bash: los lenguajes que hacen que Linux cobre vida."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Aplicaciones de escritorio",
        "items": [
          "LibreOffice, GIMP, Blender, VLC, Audacity"
        ]
      },
      {
        "title": "Servidor de aplicaciones",
        "items": [
          "Apache, Nginx (web)",
          "MariaDB, PostgreSQL (base de datos)",
          "Samba, NFS (compartir archivos)"
        ]
      },
      {
        "title": "Idiomas",
        "items": [
          "Compilado: C, Java",
          "Interpretado: Python, Perl, JavaScript, Bash"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ búsqueda adecuada en libreoffice",
      "output": "libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor"
    }
  },
  "1-3": {
    "comic": {
      "title": "Las 4 libertades del software 🔓",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "Libertad 0: ¡Utiliza el programa para cualquier propósito!"
        },
        {
          "emoji": "1️⃣",
          "text": "Libertad 1: ¡Estudia cómo funciona y cámbialo!"
        },
        {
          "emoji": "2️⃣",
          "text": "Libertad 2: ¡Redistribuya copias a otros!"
        },
        {
          "emoji": "3️⃣",
          "text": "Freedom 3: ¡Distribuye tus versiones modificadas!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Licencias Copyleft",
        "items": [
          "GPL: el código derivado debe seguir siendo GPL",
          "LGPL: Permite enlaces propietarios",
          "AGPL: Extiende GPL a SaaS"
        ]
      },
      {
        "title": "Licencias permisivas",
        "items": [
          "MIT: muy breve e indulgente",
          "BSD: similar al MIT",
          "Apache 2.0: concesión de patente"
        ]
      },
      {
        "title": "Código abierto empresarial",
        "items": [
          "Soporte (Sombrero Rojo)",
          "Doble licencia",
          "SaaS, Certificaciones"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cabeza -5 /usr/share/common-licenses/GPL-3",
      "output": "GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation"
    }
  },
  "1-4": {
    "comic": {
      "title": "Privacidad y Seguridad Digital 🔒",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "¿GNOME o KDE? ¡Elija su entorno de escritorio!"
        },
        {
          "emoji": "🍪",
          "text": "Ten cuidado con las cookies de terceros: ¡te rastrean a todas partes!"
        },
        {
          "emoji": "🔒",
          "text": "HTTPS = HTTP + TLS. ¡Busca el candado en tu navegador!"
        },
        {
          "emoji": "🔑",
          "text": "GnuPG: Criptografía asimétrica. Clave pública para cifrar, clave privada para descifrar."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Entorno de escritorio",
        "items": [
          "GNOME (GTK) — Simplicidad",
          "KDE (Qt) — Personalización",
          "XFCE, LXDE: ligero"
        ]
      },
      {
        "title": "Privacidad",
        "items": [
          "Cookies de terceros = seguimiento",
          "DNT ≠ garantía de privacidad",
          "Navegación privada ≠ anonimato"
        ]
      },
      {
        "title": "Criptografía",
        "items": [
          "TLS/SSL para conexiones",
          "GnuPG para archivos/correo electrónico",
          "dm-crypt/LUKS para discos"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gpg --lista-claves",
      "output": "pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>"
    }
  },
  "2-1": {
    "comic": {
      "title": "¡Bienvenidos a Shell! 💻",
      "panels": [
        {
          "emoji": "⌨️",
          "text": "El shell es su ventana al sistema. ¡Escribe comandos y obtén resultados!"
        },
        {
          "emoji": "🐚",
          "text": "Bash = Bourne otra vez Shell. ¡El shell más utilizado en Linux!"
        },
        {
          "emoji": "💲",
          "text": "El símbolo $ indica un usuario normal. El # indica raíz: ¡ten cuidado!"
        },
        {
          "emoji": "🔤",
          "text": "Citando: \"dobles\" expanden $variables, \"individuales\" toman todo literalmente."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Tipos de conchas",
        "items": [
          "bash - predeterminado",
          "zsh - avanzado (macOS)",
          "pescado - fácil de usar",
          "sh-base POSIX"
        ]
      },
      {
        "title": "Comandos básicos",
        "items": [
          "pwd - directorio actual",
          "whoami - usuario actual",
          "nombre de host: nombre de la máquina",
          "uname -a — información del sistema"
        ]
      },
      {
        "title": "Citando",
        "items": [
          "\"dobles\" → expande $VAR",
          "'solteros' → literal",
          "\\barra invertida → escape único"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo \"Hola, soy $(whoami) en $(hostname)\"",
      "output": "Ciao, sono studente su linux-pc"
    }
  },
  "2-2": {
    "comic": {
      "title": "Variables: Memoria Shell 🧠",
      "panels": [
        {
          "emoji": "📦",
          "text": "Las variables son contenedores que almacenan valores: NAME=\"John\""
        },
        {
          "emoji": "🌐",
          "text": "Las variables ambientales son globales. ¡PATH le dice al shell dónde buscar comandos!"
        },
        {
          "emoji": "📤",
          "text": "export hace que una variable local sea accesible para los procesos secundarios."
        },
        {
          "emoji": "🔍",
          "text": "env muestra todas las variables de entorno. echo $HOME tu hogar!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Variables locales",
        "items": [
          "NOMBRE=\"valor\" (¡sin espacios!)",
          "echo $NAME para leer",
          "desarmar NOMBRE para eliminar"
        ]
      },
      {
        "title": "Variables de entorno",
        "items": [
          "RUTA: rutas de comando",
          "INICIO — directorio personal",
          "USUARIO - nombre de usuario",
          "LANG — idioma del sistema"
        ]
      },
      {
        "title": "Persistencia",
        "items": [
          "~/.bashrc — inicio de sesión interactivo",
          "~/.profile — inicio de sesión inicial",
          "/etc/entorno—global"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ eco $RUTA",
      "output": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
  "2-3": {
    "comic": {
      "title": "¡Ayuda! Hombre e información 📚",
      "panels": [
        {
          "emoji": "📖",
          "text": "¡El hombre es tu mejor amigo! man ls te cuenta todo sobre ls."
        },
        {
          "emoji": "🔢",
          "text": "Las secciones del man: 1=Comandos de usuario, 5=Archivo de configuración, 8=Comandos de administrador."
        },
        {
          "emoji": "🔎",
          "text": "a propósito de comandos de búsqueda por descripción: a propósito de \"copiar archivos\""
        },
        {
          "emoji": "📁",
          "text": "find busca archivos en el sistema de archivos. localizar es más rápido pero utiliza una base de datos."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Documentación",
        "items": [
          "comando man - manual completo",
          "información de comando - formato GNU",
          "--comando de ayuda - ayuda breve",
          "palabra clave adecuada: búsqueda"
        ]
      },
      {
        "title": "Secciones Hombre",
        "items": [
          "1 - Comandos de usuario",
          "5 - Formatos de archivo",
          "8 - Comandos del administrador de sistemas"
        ]
      },
      {
        "title": "Buscar archivos",
        "items": [
          "buscar / -nombre \"*.txt\"",
          "buscar / -escribir d -nombre registros",
          "localizar nombre de archivo (base de datos)",
          "qué comando (en la RUTA)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$man -k \"copiar archivos\"",
      "output": "cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool"
    }
  },
  "2-4": {
    "comic": {
      "title": "El árbol del sistema de archivos 🌳",
      "panels": [
        {
          "emoji": "/",
          "text": "Todo empieza desde la raíz /. ¡El árbol crece hacia abajo!"
        },
        {
          "emoji": "📂",
          "text": "/home: tus cosas personales. /etc: configuración del sistema."
        },
        {
          "emoji": "💾",
          "text": "/var — datos variables (registro, correo). /tmp: archivos temporales."
        },
        {
          "emoji": "⚙️",
          "text": "/bin y /sbin: comandos esenciales. /usr: programas instalados."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Directorios importantes",
        "items": [
          "/bin - comandos básicos",
          "/etc-configuración",
          "/home - usuarios",
          "/var - datos variables"
        ]
      },
      {
        "title": "Navegación",
        "items": [
          "cd /ruta - cambiar dirección",
          "ls -la — lista detallada",
          "pwd - ¿dónde están?",
          ". (actual) .. (padre)"
        ]
      },
      {
        "title": "Gestión de archivos",
        "items": [
          "cp, mv, rm: copiar, mover, eliminar",
          "mkdir -p - crear directorios",
          "toque - crear un archivo vacío",
          "Globo: * ? [abecedario]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ls/",
      "output": "bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var"
    }
  },
  "3-1": {
    "comic": {
      "title": "¡Comprime y archiva! 📦",
      "panels": [
        {
          "emoji": "🗜️",
          "text": "tar = Archivo de cintas. ¡Agrupe varios archivos en un solo archivo!"
        },
        {
          "emoji": "💨",
          "text": "gzip → .gz (rápido). bzip2 → .bz2 (comprime más). xz → .xz (¡comprime mejor!)"
        },
        {
          "emoji": "📋",
          "text": "tar -czf = Crear + gzip + Archivo. ¡El trío mágico!"
        },
        {
          "emoji": "📂",
          "text": "tar -xzf = extraer + gzip + Archivo. ¡Descomprime todo!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Algoritmos",
        "items": [
          "gzip (.gz): rápido, bueno",
          "bzip2 (.bz2): más lento, mejor",
          "xz (.xz) - muy lento, excelente"
        ]
      },
      {
        "title": "Comandos de alquitrán",
        "items": [
          "tar -czf arch.tar.gz dir/",
          "alquitrán -cjf arch.tar.bz2 dir/",
          "tar -xzf arch.tar.gz",
          "tar -tf arch.tar.gz (lista)"
        ]
      },
      {
        "title": "Archivos individuales",
        "items": [
          "archivo gzip → archivo.gz",
          "archivo gunzip.gz → archivo",
          "bzip2 / bunzip2",
          "xz/unxz"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tar -czf backup.tar.gz /home/user/docs/",
      "output": ""
    }
  },
  "3-2": {
    "comic": {
      "title": "Tuberías y redirecciones: el flujo de datos 🔀",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "entrada estándar (0) = entrada. salida estándar (1) = salida. stderr (2) = errores."
        },
        {
          "emoji": "➡️",
          "text": "> escribe en un archivo (sobrescribe). >> cuelga al final."
        },
        {
          "emoji": "🔗",
          "text": "| (tubería) conecta la salida de un comando a la entrada del siguiente."
        },
        {
          "emoji": "🔇",
          "text": "2>/dev/null — ¡envía errores al \"agujero negro\" de Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Descriptores de archivos",
        "items": [
          "0 = entrada estándar (teclado)",
          "1 = salida estándar (pantalla)",
          "2 = stderr (errores)"
        ]
      },
      {
        "title": "Redirigir",
        "items": [
          "> archivo (sobrescribir)",
          ">> archivo (añadir)",
          "2> errores.log",
          "&> todo.log (salida estándar+stderr)"
        ]
      },
      {
        "title": "Tuberías y comandos",
        "items": [
          "cmd1 | cmd2 (tubería)",
          "lima en T (divisor en T)",
          "xargs (stdin → argumentos)",
          "cmd1 && cmd2 (si está bien)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gato /var/log/syslog | error de grep | baño -l",
      "output": "42"
    }
  },
  "3-3": {
    "comic": {
      "title": "Grep y los superhéroes del texto 🦸",
      "panels": [
        {
          "emoji": "🔎",
          "text": "grep busca patrones en el texto. ¡El detective de la línea de comandos!"
        },
        {
          "emoji": "✂️",
          "text": "cortar corta columnas. ordenar ordenar. uniq elimina duplicados."
        },
        {
          "emoji": "📊",
          "text": "wc cuenta líneas (-l), palabras (-w), caracteres (-c)."
        },
        {
          "emoji": "🌟",
          "text": "Regex: ^ inicio de línea, $ final, . cualquiera, * repetir, [abc] establecer."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "grep",
        "items": [
          "archivo de patrón grep",
          "grep -i (no distingue entre mayúsculas y minúsculas)",
          "grep -r (recursivo)",
          "grep -v (coincidencia inversa)"
        ]
      },
      {
        "title": "Manejo",
        "items": [
          "cortar -d: -f1 (campo 1)",
          "ordenar -n (numérico)",
          "uniq -c (recuento)",
          "cabeza/cola -n 5"
        ]
      },
      {
        "title": "Expresión regular básica",
        "items": [
          "^ inicio de línea",
          "$ final de línea",
          ". cualquier carácter",
          "* cero o más",
          "[a-z] rango"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep -i \"error\" /var/log/syslog | cola -5",
      "output": "Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting"
    }
  },
  "3-4": {
    "comic": {
      "title": "Bash Scripting: ¡Automatiza todo! 🤖",
      "panels": [
        {
          "emoji": "📜",
          "text": "#!/bin/bash - ¡el tinglado! Le dice al sistema: \"¡Utilice bash para este script!\""
        },
        {
          "emoji": "🔄",
          "text": "for, while, if/then/else: las construcciones para controlar el flujo."
        },
        {
          "emoji": "📥",
          "text": "$1 = primer argumento, $# = cuántos, $@ = todos. ¡El poder de los parámetros!"
        },
        {
          "emoji": "✅",
          "text": "salida 0 = éxito. salida 1 = error. ¡Cada comando tiene un código de salida!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Estructura del guión",
        "items": [
          "#!/bin/bash (shebang)",
          "chmod +x script.sh",
          "./script.sh para ejecutar"
        ]
      },
      {
        "title": "Variables especiales",
        "items": [
          "$0: nombre del script",
          "$1, $2... — argumentos",
          "$# — número de argumentos",
          "$? — código de salida último cmd"
        ]
      },
      {
        "title": "Construcciones",
        "items": [
          "si [cond]; entonces...fi",
          "para yo en la lista; hacer...hecho",
          "mientras [cond]; hacer...hecho",
          "caso $var en patrón)...esac"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gato hola.sh",
      "output": "#!/bin/bash\necho \"Ciao, $1!\"\necho \"Oggi è $(date)\"\nexit 0"
    }
  },
  "4-1": {
    "comic": {
      "title": "¿Dónde se ejecuta Linux? ¡En todos lados! 🌐",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "Escritorio: Ubuntu, Fedora, Mint: ¡Linux para todos!"
        },
        {
          "emoji": "🏢",
          "text": "Empresa: RHEL, SLES: soporte, certificaciones, SLA."
        },
        {
          "emoji": "☁️",
          "text": "Nube: el 90% de los servidores web ejecutan Linux. ¡A AWS, Azure y GCP les encanta!"
        },
        {
          "emoji": "📱",
          "text": "Móvil e IoT: Android = Linux! Smart TVs, coches, drones... ¡todo Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Escritorio versus servidor",
        "items": [
          "Escritorio: GUI, multimedia",
          "Servidor: sin cabeza, servicios 24 horas al día, 7 días a la semana",
          "Empresa: soporte LTS"
        ]
      },
      {
        "title": "Nube y virtualización",
        "items": [
          "KVM/QEMU: virtualización",
          "Docker-contenedores",
          "Kubernetes: orquestación",
          "IaaS, PaaS, SaaS"
        ]
      },
      {
        "title": "Certificaciones",
        "items": [
          "Conceptos básicos de LPI Linux",
          "LPIC-1 (base administrativa)",
          "LPIC-2 (administrador avanzado)",
          "RHCSA, RHCE (Sombrero rojo)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ uname -a",
      "output": "Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
    }
  },
  "4-2": {
    "comic": {
      "title": "Hardware: Hierro bajo Linux ⚙️",
      "panels": [
        {
          "emoji": "🧠",
          "text": "CPU, RAM, disco, tarjeta de red: ¡Linux ve todo en /proc y /sys!"
        },
        {
          "emoji": "💽",
          "text": "HDD = mecánico, lento. SSD = flash, rápido. NVMe = ¡súper rápido!"
        },
        {
          "emoji": "🔒",
          "text": "RAID 0 = velocidad. RAID 1 = seguridad. RAID 5 = equilibrio."
        },
        {
          "emoji": "🖨️",
          "text": "Periféricos conectables en caliente: USB, Thunderbolt. ¡El kernel los reconoce inmediatamente!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Componentes",
        "items": [
          "CPU: lscpu",
          "RAM: libre -h",
          "Disco: lsblk, df -h",
          "PCI: lspci, USB: lsusb"
        ]
      },
      {
        "title": "Almacenamiento",
        "items": [
          "HDD: platos magnéticos",
          "SSD: memoria flash NAND",
          "NVMe: bus PCIe directo",
          "RAID: redundancia/rendimiento"
        ]
      },
      {
        "title": "Niveles de RAID",
        "items": [
          "RAID 0: banda (sin copia de seguridad)",
          "RAID 1: espejo (copia)",
          "RAID 5: banda + paridad",
          "RAID 10: espejo + banda"
        ]
      }
    ],
    "terminal": {
      "prompt": "$lsblk",
      "output": "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /"
    }
  },
  "4-3": {
    "comic": {
      "title": "Núcleos, Procesos y Demonios 👻",
      "panels": [
        {
          "emoji": "🎯",
          "text": "El kernel es el corazón de Linux. Gestiona CPU, RAM, E/S, red."
        },
        {
          "emoji": "🌱",
          "text": "systemd = PID 1, el padre de todos los procesos. Gestiona el arranque!"
        },
        {
          "emoji": "👻",
          "text": "Demonios = procesos en segundo plano. Terminando con \"d\": sshd, httpd, crond."
        },
        {
          "emoji": "💀",
          "text": "matar -9 PID = ¡el arma definitiva! Terminar cualquier proceso."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Arranque y núcleo",
        "items": [
          "BIOS/UEFI → gestor de arranque",
          "GRUB → cargar kernel",
          "Kernel → montar raíz",
          "systemd → iniciar servicios"
        ]
      },
      {
        "title": "Procesos",
        "items": [
          "ps aux — lista de procesos",
          "top/htop: monitor en tiempo real",
          "bg/fg - fondo/primer plano",
          "& - comenzar en segundo plano"
        ]
      },
      {
        "title": "Señales",
        "items": [
          "SIGTERM (15) — termina limpio",
          "SIGKILL (9) — final forzado",
          "SIGHUP (1) - recargar configuración",
          "SIGSTOP (19) — suspender"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ps auxiliar | cabeza -5",
      "output": "USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox"
    }
  },
  "4-4": {
    "comic": {
      "title": "Redes: Linux en la Red 🌐",
      "panels": [
        {
          "emoji": "📡",
          "text": "IP, máscara de subred, puerta de enlace: ¡las coordenadas de su máquina en la red!"
        },
        {
          "emoji": "🔤",
          "text": "DNS traduce nombres a IP. google.com → 142.250.180.14"
        },
        {
          "emoji": "🔐",
          "text": "SSH (puerto 22) = acceso remoto seguro. ¡La puerta de entrada del administrador de sistemas!"
        },
        {
          "emoji": "🌐",
          "text": "HTTP(80), HTTPS(443), FTP(21), SMTP(25): ¡los puertos que ejecutan Internet!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Configuración",
        "items": [
          "dirección IP: muestra IP",
          "ruta ip — mostrar ruta",
          "/etc/resolv.conf — DNS",
          "/etc/hosts — nombres locales"
        ]
      },
      {
        "title": "IP privadas",
        "items": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "IPv6: fc00::/7 (ULA)"
        ]
      },
      {
        "title": "Puertas Comunes",
        "items": [
          "22-SSH",
          "80-HTTP",
          "443-HTTPS",
          "53-DNS"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ dirección IP mostrar eth0",
      "output": "inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link"
    }
  },
  "5-1": {
    "comic": {
      "title": "Root: el superhéroe de Linux 🦸",
      "panels": [
        {
          "emoji": "👑",
          "text": "raíz = UID 0. Puede hacer TODO. ¡Con grandes poderes, grandes responsabilidades!"
        },
        {
          "emoji": "🔑",
          "text": "sudo = \"Superusuario DO\". Ejecute un comando como root con SU contraseña."
        },
        {
          "emoji": "⚠️",
          "text": "¡Nunca trabajes como root todo el tiempo! Utilice sudo sólo cuando sea necesario."
        },
        {
          "emoji": "📋",
          "text": "/etc/sudoers define quién puede usar sudo y para qué comandos."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Usuarios",
        "items": [
          "raíz = UID 0 (superusuario)",
          "Usuarios normales: UID ≥ 1000",
          "Usuarios del sistema: UID 1-999",
          "nadie = UID 65534"
        ]
      },
      {
        "title": "Comandos",
        "items": [
          "arriba - (cambiar de usuario)",
          "comando sudo (ejecutar como root)",
          "whoami (¿quién soy yo?)",
          "identificación (UID, GID, grupos)"
        ]
      },
      {
        "title": "Seguridad",
        "items": [
          "Principio de privilegio mínimo",
          "sudo > su (rastreable)",
          "/etc/sudoers (visudo)",
          "Registro: /var/log/auth.log"
        ]
      }
    ],
    "terminal": {
      "prompt": "$identificación",
      "output": "uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)"
    }
  },
  "5-2": {
    "comic": {
      "title": "Usuarios y Grupos: el Registro de Linux 👥",
      "panels": [
        {
          "emoji": "📒",
          "text": "/etc/passwd: el registro de todos los usuarios. Nombre, UID, casa, shell."
        },
        {
          "emoji": "🔒",
          "text": "/etc/shadow: contraseñas cifradas. ¡Solo el root puede leerlo!"
        },
        {
          "emoji": "👥",
          "text": "/etc/group: los grupos. Cada usuario tiene un grupo primario y puede formar parte de otros."
        },
        {
          "emoji": "🛠️",
          "text": "useradd, usermod, userdel: ¡las herramientas para administrar el registro!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Archivo clave",
        "items": [
          "/etc/passwd — información del usuario",
          "/etc/shadow — contraseña con hash",
          "/etc/group — grupos",
          "/etc/skel — plantilla de inicio"
        ]
      },
      {
        "title": "Gestión de usuarios",
        "items": [
          "useradd -m usuario (crear)",
          "usermod -aG grupo de usuarios",
          "userdel -r usuario (eliminar)",
          "usuario passwd (contraseña)"
        ]
      },
      {
        "title": "formato de contraseña",
        "items": [
          "usuario:x:UID:GID:info:inicio:shell",
          "x → contraseña oculta",
          "UID 0 → raíz",
          "/sbin/nologin → sin iniciar sesión"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep estudiante /etc/contraseña",
      "output": "studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash"
    }
  },
  "5-3": {
    "comic": {
      "title": "Permisos: ¿Quién puede hacer qué? 🔐",
      "panels": [
        {
          "emoji": "📊",
          "text": "r=leer(4) w=escribir(2) x=ejecutar(1). Tres conjuntos: Propietario, Grupo, Otros."
        },
        {
          "emoji": "🔢",
          "text": "chmod 755 = rwxr-xr-x. El dueño hace todo, los demás leen."
        },
        {
          "emoji": "✏️",
          "text": "chmod u+x = agregar ejecución al propietario. ¡Notación simbólica!"
        },
        {
          "emoji": "⚡",
          "text": "SUID, SGID, Sticky Bit: ¡permisos especiales para casos especiales!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Permisos básicos",
        "items": [
          "r (leer) = 4",
          "w (escribir) = 2",
          "x (ejecutar) = 1",
          "--- = 0, rwx = 7"
        ]
      },
      {
        "title": "Comandos",
        "items": [
          "archivo chmod 644 (octal)",
          "Archivo chmod u+x (simbólico)",
          "usuario chown: archivo de grupo",
          "grupo de archivos chgrp"
        ]
      },
      {
        "title": "Especiales",
        "items": [
          "SUID (4xxx): ejecutar como propietario",
          "SGID (2xxx) — heredar grupo",
          "Sticky (1xxx) — protege /tmp",
          "máscara de usuario 022 - predeterminado 755"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ls -la /etc/contraseña /tmp",
      "output": "-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp"
    }
  },
  "5-4": {
    "comic": {
      "title": "Enlace: Atajos en el sistema de archivos 🔗",
      "panels": [
        {
          "emoji": "🔗",
          "text": "Enlace físico: dos nombres para el mismo archivo (inodo). ¡Indistinguible!"
        },
        {
          "emoji": "➡️",
          "text": "Enlace simbólico: un atajo. Apunta a un camino, no a un inodo."
        },
        {
          "emoji": "💔",
          "text": "Si elimina el destino de un enlace simbólico, éste queda \"roto\". ¡El enlace duro sobrevive!"
        },
        {
          "emoji": "📁",
          "text": "Los enlaces simbólicos pueden atravesar sistemas de archivos. Los enlaces físicos no lo son."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Enlaces duros",
        "items": [
          "En el archivo de enlace duro",
          "Mismo inodo",
          "No atraviesa sistemas de archivos.",
          "Sin enlaces de directorio"
        ]
      },
      {
        "title": "Enlaces simbólicos",
        "items": [
          "ln -s enlace simbólico de destino",
          "Inodo diferente",
          "Atravesar el sistema de archivos",
          "Puede vincular directorios"
        ]
      },
      {
        "title": "Comparación",
        "items": [
          "Duro: robusto, limitado",
          "Síntoma: flexible, frágil",
          "ls -li mostrar inodo",
          "enlace de lectura mostrar objetivo"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ln -s /etc/passwd enlace_contraseña && ls -l enlace_contraseña",
      "output": "lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd"
    }
  }
};
