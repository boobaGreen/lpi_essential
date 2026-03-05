export const topic1Extended = {
  "1-1": {
    "title": "Evolución de Linux y los sistemas operativos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏛️",
        "text": "Desde los orígenes: Unix y la revolución"
      },
      {
        "type": "timeline",
        "events": [
          {
            "year": "1969",
            "title": "Nace Unix",
            "desc": "Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi."
          },
          {
            "year": "1983",
            "title": "Proyecto GNU",
            "desc": "Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985."
          },
          {
            "year": "1987",
            "title": "minix",
            "desc": "Andrew Tanenbaum crea Minix per scopi didattici. Sarà l'ispirazione diretta per Linus Torvalds."
          },
          {
            "year": "1991",
            "title": "¡Linux!",
            "desc": "Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: \"Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU\". Nasce il kernel Linux 0.01."
          },
          {
            "year": "1992",
            "title": "Licencia GPL",
            "desc": "Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero."
          },
          {
            "year": "2004",
            "title": "ubuntu",
            "desc": "Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti."
          },
          {
            "year": "Oggi",
            "title": "Linux está en todas partes",
            "desc": "Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo."
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Linux frente a GNU/Linux",
        "content": "Técnicamente \"Linux\" es sólo el núcleo. El sistema completo se llama GNU/Linux porque incluye las utilidades GNU (gcc, bash, coreutils). Sin embargo, en el uso común \"Linux\" significa todo el sistema operativo."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Las familias de distribución"
      },
      {
        "type": "paragraph",
        "text": "Una distribución de Linux es un sistema completo que consta de: kernel de Linux + utilidades GNU + administrador de paquetes + software seleccionado + configuración predeterminada. Hay cientos de distribuciones, organizadas en \"familias\" según el linaje y el administrador de paquetes."
      },
      {
        "type": "diagram",
        "title": "Árbol genealógico",
        "boxes": [
          {
            "label": "Debian",
            "color": "#e11d48",
            "children": [
              "Ubuntu",
              "Linux Mint",
              "Kali Linux",
              "Raspbian"
            ]
          },
          {
            "label": "Red Hat",
            "color": "#f59e0b",
            "children": [
              "RHEL",
              "Fedora",
              "CentOS Stream",
              "Rocky Linux"
            ]
          },
          {
            "label": "SUSE",
            "color": "#10b981",
            "children": [
              "SLES",
              "openSUSE Leap",
              "openSUSE Tumbleweed"
            ]
          },
          {
            "label": "Indipendenti",
            "color": "#8b5cf6",
            "children": [
              "Arch Linux",
              "Gentoo",
              "Slackware"
            ]
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Distribución",
          "Básico",
          "Paquetes",
          "Liberar",
          "Uso típico"
        ],
        "rows": [
          [
            "ubuntu",
            "Debian",
            "apto/.deb",
            "Fijo (6 meses)",
            "Escritorio, nube, servidor"
          ],
          [
            "sombrero",
            "sombrero rojo",
            "dnf/.rpm",
            "Fijo (6 meses)",
            "Desarrollo, Escritorio"
          ],
          [
            "RHEL",
            "sombrero rojo",
            "mmm/dnf / .rpm",
            "LTS (10 años)",
            "Empresa, Producción"
          ],
          [
            "ArchLinux",
            "Independiente",
            "pacman",
            "Lanzamiento rodante",
            "Usuarios experimentados"
          ],
          [
            "openSUSE",
            "SUSE",
            "zyper / .rpm",
            "Mezclado",
            "Escritorio, Empresa"
          ],
          [
            "Debian",
            "Original",
            "apto/.deb",
            "Fijo (~2 años)",
            "Servidor, Estabilidad"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "En el examen LPI se le pedirá que reconozca las familias de distribuciones, sus administradores de paquetes (.deb frente a .rpm) y las diferencias entre la versión fija (Ubuntu) y la versión continua (Arch)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📱",
        "text": "Linux en el mundo integrado y en la nube"
      },
      {
        "type": "paragraph",
        "text": "Linux no es sólo para servidores y escritorios. El kernel de Linux es el corazón de miles de millones de dispositivos: teléfonos inteligentes Android, televisores inteligentes, enrutadores, sistemas de información y entretenimiento para automóviles, dispositivos IoT, drones e incluso el rover Perseverance en Marte utiliza un procesador con Linux."
      },
      {
        "type": "table",
        "headers": [
          "Sector",
          "Ejemplo",
          "¿Por qué Linux?"
        ],
        "rows": [
          [
            "Teléfonos inteligentes",
            "Android (más de 3 mil millones de dispositivos)",
            "Kernel editable, licencia gratuita"
          ],
          [
            "Nube",
            "AWS, Azure, GCP",
            "Más del 90 % de las cargas de trabajo en la nube utilizan Linux"
          ],
          [
            "Supercomputadoras",
            "TOP500",
            "El 100% de los superordenadores del ranking"
          ],
          [
            "IoT",
            "Raspberry Pi, hogar inteligente",
            "Ligero, personalizable, gratuito"
          ],
          [
            "Automotor",
            "Tesla, Audi",
            "En tiempo real, confiable y personalizable"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Escenario: Por qué la nube ama Linux",
        "text": "Imagina que eres el CTO de una startup. Debes elegir el sistema operativo para 100 servidores en la nube. Windows Server cuesta aproximadamente $500/servidor/año en licencias. ¿Con Linux? Costos de licencia cero, control total, una gran comunidad de soporte y puedes automatizar todo con scripts Bash. Por eso el 90% de la nube utiliza Linux."
      }
    ]
  },
  "1-2": {
    "title": "Aplicaciones de código abierto",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Software de código abierto para cada necesidad"
      },
      {
        "type": "paragraph",
        "text": "El mundo del código abierto ofrece alternativas potentes y gratuitas a casi todos los programas comerciales. Conocer estas aplicaciones es fundamental para el examen LPI y para la vida profesional con Linux."
      },
      {
        "type": "table",
        "headers": [
          "Categoría",
          "Código abierto",
          "Equivalente propietario"
        ],
        "rows": [
          [
            "Suites de oficina",
            "LibreOffice",
            "oficina de microsoft"
          ],
          [
            "Navegadores web",
            "Firefox, cromo",
            "Cromo, Borde, Safari"
          ],
          [
            "Editor de imágenes",
            "CAÑUTILLO",
            "Adobe Photoshop"
          ],
          [
            "modelado 3D",
            "Licuadora",
            "Maya, 3ds Max"
          ],
          [
            "Editor de vídeo",
            "Kdenlive, OpenShot",
            "Estreno de Adobe"
          ],
          [
            "editor de audio",
            "Audacia",
            "Audiciones de Adobe"
          ],
          [
            "Cliente de correo electrónico",
            "pájaro trueno",
            "Perspectiva"
          ],
          [
            "Gráficos vectoriales",
            "paisaje de tinta",
            "Ilustrador Adobe"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "Aplicaciones de servidor"
      },
      {
        "type": "paragraph",
        "text": "Linux domina el mundo de los servidores. El software de servidor de código abierto maneja la mayor parte del tráfico de Internet del mundo."
      },
      {
        "type": "table",
        "headers": [
          "Función",
          "Software",
          "Descripción"
        ],
        "rows": [
          [
            "Servidor web",
            "Servidor HTTP Apache",
            "El servidor web más utilizado históricamente"
          ],
          [
            "Servidor web",
            "nginx",
            "Alto rendimiento, proxy inverso"
          ],
          [
            "Bases de datos",
            "MaríaDB/MySQL",
            "Base de datos relacional más popular"
          ],
          [
            "Bases de datos",
            "PostgreSQL",
            "Base de datos de nivel empresarial"
          ],
          [
            "Compartir archivos",
            "Samba",
            "Compartir con clientes de Windows (SMB/CIFS)"
          ],
          [
            "Compartir archivos",
            "NFS",
            "Uso compartido nativo de Unix/Linux"
          ],
          [
            "Correo electrónico",
            "Postfijo / Palomar",
            "Servidor MTA e IMAP/POP3"
          ],
          [
            "DNS",
            "UNIR",
            "Servidor DNS de referencia"
          ],
          [
            "Recipiente",
            "Estibador",
            "Plataforma de contenedores"
          ],
          [
            "Orquestación",
            "Kubernetes",
            "Orquestación de contenedores a escala"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI requiere conocimiento de las principales aplicaciones de código abierto para escritorios y servidores, y la capacidad de distinguir entre software compilado (C, C++) e interpretado (Python, Bash, JavaScript)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💻",
        "text": "Lenguajes de programación"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Llenado",
          "items": [
            "C/C++: máximo rendimiento",
            "Compilado en código de máquina",
            "El programa resultante es un binario.",
            "Necesitas recompilar para cada plataforma."
          ]
        },
        "right": {
          "title": "interpretado",
          "items": [
            "Python, Perl, Ruby: versátiles",
            "Hecho línea por línea",
            "Necesitan un intérprete instalado",
            "Portátil entre plataformas sin modificaciones"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Java es un caso especial",
        "content": "Java se compila en código de bytes (.class), que luego es ejecutado por la JVM (máquina virtual Java). No es puramente compilado ni interpretado."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Gestión de paquetes"
      },
      {
        "type": "paragraph",
        "text": "Los administradores de paquetes son el corazón del mantenimiento del software en Linux. Instalan, actualizan y eliminan software mientras administran automáticamente las dependencias."
      },
      {
        "type": "table",
        "headers": [
          "Familia",
          "Formato",
          "herramienta de bajo nivel",
          "herramienta de alto nivel"
        ],
        "rows": [
          [
            "Debian/Ubuntu",
            ".debutante",
            "dpkg",
            "apto / apto-obtener"
          ],
          [
            "Sombrero rojo/Fedora",
            ".rpm",
            "rpm",
            "mmm / dnf"
          ],
          [
            "SUSE",
            ".rpm",
            "rpm",
            "cremallera"
          ],
          [
            "Arco",
            ".pkg.tar.zst",
            "pacman",
            "pacman"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Ejemplos de gestión de paquetes",
        "prompt": "#Debian/Ubuntu\n$ sudo apt actualizar && sudo apt instalar nginx\n\n# Sombrero rojo/Fedora\n$ sudo dnf instalar nginx\n\n#SUSE\n$ sudo zypper instalar nginx",
        "output": ""
      }
    ]
  },
  "1-3": {
    "title": "Licencias y software de código abierto",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗽",
        "text": "Las 4 libertades del software libre"
      },
      {
        "type": "paragraph",
        "text": "Richard Stallman definió 4 libertades fundamentales que hacen que el software sea \"libre\" (libre en libertad, no \"libre\"). Estas libertades son la base filosófica de todo el movimiento de código abierto."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Libertà 0",
            "desc": "Usare il programma per qualsiasi scopo, senza restrizioni"
          },
          {
            "term": "Libertà 1",
            "desc": "Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)"
          },
          {
            "term": "Libertà 2",
            "desc": "Ridistribuire copie per aiutare altri"
          },
          {
            "term": "Libertà 3",
            "desc": "Migliorare il programma e distribuire le modifiche alla community"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "\"Gratis\" no significa \"gratis\"",
        "content": "\"Software libre\" se refiere a LIBERTAD, no a precio. ¡Puedes vender software gratuito! El código fuente debe estar disponible, pero puedes solicitar una compensación por distribución, soporte o personalización."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Licencias de código abierto comparadas"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔒 Copyleft (GPL, AGPL)",
          "items": [
            "Los derivados DEBEN mantener la misma licencia",
            "El código modificado debe permanecer como código abierto",
            "GPL: la más utilizada (kernel Linux)",
            "AGPL: extiende el copyleft a los servicios web/SaaS",
            "LGPL: permite vincular con código propietario"
          ]
        },
        "right": {
          "title": "🔓 Permisivo (MIT, BSD, Apache)",
          "items": [
            "Los derivados pueden volverse propietarios",
            "Pocas limitaciones: basta con citar al autor",
            "MIT: el más simple y corto",
            "BSD: Similar al MIT, origen académico",
            "Apache 2.0: Incluye concesión de patentes"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Licencia",
          "Tipo",
          "¿Copyleft?",
          "Uso comercial",
          "Ejemplo"
        ],
        "rows": [
          [
            "GPL v3",
            "Copyleft fuerte",
            "Sí",
            "Sí",
            "Kernel de Linux, CCG"
          ],
          [
            "LGPL",
            "Copyleft débil",
            "Parcial",
            "Sí",
            "glibc, Qt"
          ],
          [
            "AGPL",
            "Red Copyleft",
            "Sí (+SaaS)",
            "Sí",
            "MongoDB (antiguo)"
          ],
          [
            "MIT",
            "Permisivo",
            "No",
            "Sí",
            "jQuery, Nodo.js"
          ],
          [
            "apache 2.0",
            "Permisivo",
            "No",
            "Sí",
            "Android, Kubernetes"
          ],
          [
            "BSD",
            "Permisivo",
            "No",
            "Sí",
            "FreeBSD, nginx"
          ],
          [
            "Bienes comunes creativos",
            "varía",
            "Opcional",
            "depende",
            "Documentación, medios"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "El examen LPI le pide que distinga entre licencias copyleft (GPL) y permisivas (MIT, BSD, Apache). Recuerde: GPL = los derivados deben seguir siendo GPL. MIT/BSD = los derivados pueden convertirse en propietarios."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💼",
        "text": "Modelos de negocio de código abierto"
      },
      {
        "type": "paragraph",
        "text": "Contrariamente a la creencia popular, las empresas pueden ganar dinero con el código abierto. Aquí están los principales modelos:"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Supporto e Sottoscrizioni",
            "desc": "Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no."
          },
          {
            "term": "Dual Licensing",
            "desc": "Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft)."
          },
          {
            "term": "SaaS",
            "desc": "Offri il software come servizio cloud (GitHub, GitLab)."
          },
          {
            "term": "Open Core",
            "desc": "Core open source + funzionalità premium proprietarie."
          },
          {
            "term": "Consulenza e Formazione",
            "desc": "Certificazioni LPI, RHCSA, corsi di formazione."
          }
        ]
      },
      {
        "type": "story",
        "title": "Escenario: Red Hat: desde su puesta en marcha hasta 34.000 millones de dólares",
        "text": "Red Hat nació en 1993 distribuyendo Linux en una caja. El modelo: el software es gratuito, pero las empresas pagan por soporte, actualizaciones certificadas y garantías legales. En 2019, IBM adquirió Red Hat por 34 mil millones de dólares, lo que demuestra que el código abierto puede crear un valor enorme."
      }
    ]
  },
  "1-4": {
    "title": "Habilidades TIC y Linux.",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Entorno de escritorio"
      },
      {
        "type": "paragraph",
        "text": "Linux ofrece varios entornos de escritorio. A diferencia de Windows y macOS, donde solo hay un escritorio, ¡en Linux puedes elegir el tuyo!"
      },
      {
        "type": "table",
        "headers": [
          "Escritorios",
          "Cajas de herramientas",
          "Filosofía",
          "RAM mínima",
          "Distribución típica"
        ],
        "rows": [
          [
            "GNOMO",
            "GTK",
            "Simplicidad, modernidad.",
            "1GB",
            "Ubuntu, Fedora"
          ],
          [
            "Plasma KDE",
            "Cantidad",
            "Personalización total",
            "1GB",
            "Kubuntu, openSUSE"
          ],
          [
            "XFCE",
            "GTK",
            "Ligereza, eficiencia",
            "256MB",
            "Xubuntu, Manjaro"
          ],
          [
            "LXDE/LXQt",
            "GTK/Qt",
            "Ultraligero",
            "128MB",
            "Lubuntu"
          ],
          [
            "Canela",
            "GTK",
            "Tradicional, fácil de usar",
            "512MB",
            "menta linux"
          ],
          [
            "COMPAÑERO",
            "GTK",
            "Bifurcación de GNOME 2",
            "512MB",
            "Ubuntu compañero"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "content": "Si tu PC es antigua, XFCE o LXQt son perfectos. Si desea la máxima personalización, elija KDE Plasma. Si prefieres la simplicidad, GNOME es ideal."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "Privacidad y seguridad en línea"
      },
      {
        "type": "paragraph",
        "text": "En la era digital, proteger su privacidad y seguridad es crucial. Linux ofrece potentes herramientas para la protección de datos."
      },
      {
        "type": "table",
        "headers": [
          "Amenaza",
          "Qué él ha hecho",
          "Cómo protegerte"
        ],
        "rows": [
          [
            "Cookies de terceros",
            "Realizan un seguimiento de la navegación entre diferentes sitios",
            "Bloquearlos en el navegador, usar extensiones (uBlock Origin)"
          ],
          [
            "Rastreadores web",
            "Perfilan los hábitos del usuario",
            "Utilice Firefox con protección de seguimiento mejorada"
          ],
          [
            "Hombre en el medio",
            "Interceptar datos no cifrados",
            "Verifique HTTPS (candado), use VPN"
          ],
          [
            "Phishing",
            "Sitios falsos para robar credenciales",
            "Verifique las URL, no haga clic en enlaces sospechosos"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Navegación privada ≠ Anonimato",
        "content": "¡La “navegación de incógnito” NO te hace anónimo! Su ISP, su empresa y sus sitios web aún pueden ver el tráfico. Oculta sólo la historia local. Para un verdadero anonimato necesitas Tor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "Criptografía"
      },
      {
        "type": "paragraph",
        "text": "El cifrado es esencial para proteger los datos en tránsito y en reposo. Linux admite diferentes niveles de cifrado."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Cifrado simétrico",
          "items": [
            "Sólo una clave para cifrar y descifrar",
            "Rápido, utilizado para grandes cantidades de datos.",
            "Problema: ¿Cómo compartir la clave?",
            "Algoritmos: AES, ChaCha20"
          ]
        },
        "right": {
          "title": "Cifrado asimétrico",
          "items": [
            "Dos claves: pública + privada",
            "Cripto público, descifrado privado",
            "Resuelve el problema de distribución.",
            "Algoritmos: RSA, Ed25519"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Instrumento",
          "Protege",
          "como funciona"
        ],
        "rows": [
          [
            "TLS/SSL",
            "Conexiones web (HTTPS)",
            "Cifrar el tráfico entre navegadores y servidores"
          ],
          [
            "SSH",
            "Conexiones remotas",
            "Túnel cifrado para administración remota"
          ],
          [
            "GnuPG (GPG)",
            "Archivos, correos electrónicos, firmas digitales.",
            "Cifrado asimétrico, red de confianza"
          ],
          [
            "dm-cripta/LUKS",
            "álbum completo",
            "Cifrado de disco completo en Linux"
          ],
          [
            "OpenVPN/WireGuard",
            "Tráfico de red",
            "VPN para conexiones seguras"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Cifrar un archivo con GPG",
        "prompt": "# Generar un par de claves\n$ gpg --gen-clave\n\n# Cifrar un archivo para un destinatario\n$ gpg --encrypt --destinatario usuario@email.com archivo.txt\n\n# Descifrar\n$ gpg --descifrar archivo.txt.gpg > archivo.txt",
        "output": ""
      }
    ]
  }
};
