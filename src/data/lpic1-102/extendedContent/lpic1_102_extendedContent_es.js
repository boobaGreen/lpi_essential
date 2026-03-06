// LPIC-1 102 Extended Content  Spanish
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_es = {

  // Topic 1: Shells and Shell Scripting
  'lpic1-102-105-1': {
    title: 'Entorno Shell — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Personalización del Entorno Bash' },
      { type: 'paragraph', text: 'El entorno de la shell se puede personalizar a través de archivos de inicio, variables, alias y funciones. El examen exige conocer el orden de ejecución de estos archivos.' },
      { type: 'table', headers: ['Archivo', 'Tipo de Shell', 'Función'], rows: [
        ['/etc/profile', 'Login (Global)', 'Ajustes del sistema para todas las shells de login'],
        ['~/.bash_profile', 'Login (Usuario)', 'Precedencia 1: ajustes de usuario (llama a .bashrc)'],
        ['~/.bash_login', 'Login (Usuario)', 'Precedencia 2: se lee si no existe .bash_profile'],
        ['~/.profile', 'Login (Usuario)', 'Precedencia 3: archivo genérico (también usado por sh/Korn)'],
        ['/etc/bash.bashrc', 'Non-login (Global)', 'Ajustes del sistema para shells interactivas sin login'],
        ['~/.bashrc', 'Non-login (Usuario)', 'Alias y funciones de usuario (leído en cada nueva terminal)'],
        ['~/.bash_logout', 'Logout (Usuario)', 'Se ejecuta al salir de una shell de login'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: 'Variables de Entorno Críticas' },
      { type: 'table', headers: ['Variable', 'Significado', 'Ejemplo'], rows: [
        ['PATH', 'Directorios donde la shell busca comandos', '/usr/local/bin:/usr/bin:/bin'],
        ['PS1', 'Prompt primario', '"\\u@\\h:\\w\\$ " (usuario@host:dir$ )'],
        ['PS2', 'Prompt secundario (comando multilínea)', '"> "'],
        ['HISTFILE', 'Dónde guardar el historial de comandos', '~/.bash_history'],
        ['HISTSIZE', 'Líneas mantenidas en memoria', '1000'],
        ['HISTFILESIZE', 'Líneas guardadas en el archivo', '2000'],
        ['HISTCONTROL', 'Control de guardado de historial', 'ignoreboth (ignora espacios iniciales y duplicados)'],
      ]},
      { type: 'code', title: 'Configurar variables y alias', prompt: '# Hacer permanente un alias (en ~/.bashrc)\nalias update="sudo apt update && sudo apt upgrade"\n\n# Modificar el PATH (en ~/.profile o ~/.bashrc)\nexport PATH="$PATH:$HOME/bin"\n\n# Aplicar cambios a .bashrc de inmediato\n$ source ~/.bashrc\n# o alternativamente:\n$ . ~/.bashrc', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Recuerda: para recargar un archivo de configuración en la shell actual usa `source archivo` o `. archivo`. Los archivos ~/.bash_profile y ~/.profile se leen SOLAMENTE al iniciar sesión (ej., vía ssh), mientras que ~/.bashrc se lee al abrir una nueva terminal (sin login).' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Scripting en Bash — Fundamentos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Estructura de un Script' },
      { type: 'paragraph', text: 'Un script bash es un archivo de texto con comandos ejecutados en forma secuencial. El primer elemento esencial es la línea "shebang" (o hashbang) que indica qué intérprete se debe usar.' },
      { type: 'code', title: 'Ejemplo básico de script', prompt: '#!/bin/bash\n# Esto es un comentario\n\necho "Inicio del script"\n\nNOMBRE="Linux"\necho "Sistema: $NOMBRE"\n\n# Ejecución:\n# 1. Dar permisos de ejecución: chmod +x script.sh\n# 2. Ejecutar: ./script.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🔢', text: 'Variables Especiales y Argumentos' },
      { type: 'table', headers: ['Variable', 'Significado'], rows: [
        ['$0', 'Nombre del script (ej: ./script.sh)'],
        ['$1, $2... $9', 'Argumentos pasados al script (parámetro 1, 2, etc.)'],
        ['$#', 'Cantidad total de argumentos pasados'],
        ['$@', 'Todos los argumentos individualmente ("$1" "$2" "$3")'],
        ['$*', 'Todos los argumentos como una única cadena ("$1 $2 $3")'],
        ['$?', 'Código de salida del último comando (0=éxito, >0=error)'],
        ['$$', 'PID del script actual'],
        ['$!', 'PID del último trabajo en segundo plano (background)'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Retorno de los comandos ($?)', content: 'En Linux y Bash, un estado de salida de 0 significa que el comando tuvo ÉXITO. Cualquier número distinto de 0 (ej. 1, 2, 127) indica un ERROR. Es lo opuesto a cómo funcionan los booleanos en muchos lenguajes de programación.' },
      { type: 'code', title: 'Estructuras condicionales: if / case', prompt: '# Estructura if-then-elif-else-fi\nif [ -f "/etc/passwd" ]; then\n  echo "El archivo existe"\nelif [ -d "/etc" ]; then\n  echo "Es un directorio"\nelse\n  echo "No encontrado"\nfi\n\n# Estructura case (switch)\ncase "$1" in\n  start)\n    echo "Iniciando servicio..."\n    ;;\n  stop)\n    echo "Deteniendo servicio..."\n    ;;\n  *)\n    echo "Uso: $0 {start|stop}"\n    exit 1\n    ;;\nesac', output: '' },
      { type: 'heading', level: 2, emoji: '🔄', text: 'Bucles (Loops): for y while' },
      { type: 'code', title: 'Estructuras iterativas', prompt: '# Bucle for - sobre una lista\nfor FILE in *.txt; do\n  echo "Procesando $FILE"\n  cp "$FILE" "$FILE.bak"\ndone\n\n# Bucle while - mientras la condición sea cierta\nCONTADOR=1\nwhile [ $CONTADOR -le 5 ]; do\n  echo "Vuelta número $CONTADOR"\n  CONTADOR=$((CONTADOR + 1))\ndone\n\n# Ejecución de comandos (Command Substitution)\nFECHA=$(date +%Y-%m-%d)\n# sintaxis antigua equivalente: FECHA=`date +%Y-%m-%d`', output: '' },
      { type: 'infobox', variant: 'exam', content: 'El examen LPIC-1 espera que sepas usar el constructo seq dentro de un bucle for (ej: for i in $(seq 1 10)), que conozcas la diferencia entre "$@" y "$*", y que reconozcas los comparadores numéricos (-eq, -lt) frente a los de texto (=, <).' },
    ]
  },

  // Topic 2: User Interfaces and Desktops
  'lpic1-102-106-1': {
    title: 'X11 y Wayland — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Servidores de Visualización (Display Servers)' },
      { type: 'paragraph', text: 'Un servidor de base (display server) es el componente responsable principal de dibujar las ventanas y recolectar el input ratón/teclado. X11 es el rey obsoleto, pero Wayland domina ahora.' },
      { type: 'comparison', left: {
        title: 'X Window (X11)',
        items: ['Arquitectura de red Cliente/Servidor', 'Apps le piden al Server que dibuje', 'Forward asombrosamente fácil sobre SSH', 'Inmenso y pesado legado', 'Las decoraciones se delegan al WM externo', 'Utilidades legacy: xhost y xauth']
      }, right: {
        title: 'Wayland',
        items: ['Simple, moderno y altamente seguro', 'Las Apps tienen control de pintar y solo "ensamblan" el final', 'Anti-Tearing y fluidez natural total', 'Aisla ventanas impidiendo keyloggings', 'XWayland levanta un entorno X11 falso por retrocompatibilidad']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Composición de la Arquitectura Clásica' },
      { type: 'table', headers: ['Directorio de Config / Log / Demonio', 'Uso Fundamental'], rows: [
        ['/etc/X11/xorg.conf', 'Configuración maestra gigante legacy (monolitica)'],
        ['/etc/X11/xorg.conf.d/', 'Directorio moderno modularizado para parches/archivos de teclado, y gpu'],
        ['~/.xsession', 'Script ejecutable del propio usuario, que define que GUI se levanta pos-login'],
        ['/usr/share/X11/', 'Múltiples datos read only globales estáticos del X11'],
        ['/var/log/Xorg.0.log', 'Log de urgencia si la pantalla negra te invade.'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'X11 Forwarding via SSH' },
      { type: 'paragraph', text: 'Transportar de manera remota a través de internet una "app" corriendo en hardware del Servidor, pero visualizada en tu pantalla local de escritorio.' },
      { type: 'code', title: 'Ejemplo Práctico para LPIC', prompt: '# 1. Modificar el sshd_config en el SERVER:\n# X11Forwarding yes\n\n# 2. Conexión del cliente desde su propio PC asumiendo riesgos:\n$ ssh -X root@servidor_aws\n\n# 3. Y al ejecutar la app allá, la ventana se dibuja magicamente acá.\nrobot@AWS_Server:~$ firefox &', output: '' },
      { type: 'table', headers: ['Concepto/Archivo', 'Notas Extra'], rows: [
        ['Variable DISPLAY', 'Apariencia de la pantalla general: `echo $DISPLAY` usualmente retorna ":0" o ":0.0"'],
        ['xauth list', 'Revisa cookies del archivo ~/.Xauthority'],
        ['xhost + 10.0.0.99', 'Peligrosamente da acceso total de tu display gráfico X al atacante o vecino.'],
        ['VNC y RDP', 'Herramientas de reflejo total del escritorio (Tanto Wayland como X11)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Debes tener claro que ssh `-X` pasa a ser seguro (forwardea por el túnel usando cookies falsas proxy). Mientras que ssh `-Y` confía completamente a ciegas en el remoto reduciendo la defensa.' },
    ]
  },

  'lpic1-102-106-2': {
    title: 'Tecnologías Adaptables de Accesibilidad — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Brazos Extendidos VisoEspaciales' },
      { type: 'paragraph', text: 'Tanto KDE como GNOME están muy adaptados en ayudar al humano, esta categoría es conocida frecuentemente como a11y (por Accessibility).' },
      { type: 'table', headers: ['Necesidad Humana', 'Traducción de Soft Linux Base', '¿Qué Logra?'], rows: [
        ['Ceguera', 'Demónio BRLTTY o Orca Base', 'Refleja toda la Terminal TTY cruda a teclados de Display brailles, u Orca vociferando lo apuntado.'],
        ['Visión Muy Pobre', 'Lupa (Magnifier/Kmag)', 'Herramienta Zoom persistente sobre puntero.'],
        ['Daltonismo', 'Sistemas de High Contrast Themes', 'Filtros invertidos blanqui-negros extemos en la GUI de Gnome.'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: 'A11y Motores y de Flexibilidad' },
      { type: 'list', items: [
        { term: 'Sticky Keys (Teclas Pegajosas)', desc: 'Para presionar combos de a pedazos. Pulsas Control, SUELTAS. Pulsas ALT. Sueltas. Pulsas L. Y el SO interpreta Ctrl+Alt+L todo a la vez.' },
        { term: 'Slow Keys (Teclas Perezosas/Lentas)', desc: 'Ataques al mal de Parkinson. No emite la letra hasta que fue presionada más de varios milisegundos reales.' },
        { term: 'Bounce Keys', desc: 'Previene tecleos repetitivos rapidos y rebotados.' },
        { term: 'Screen Keyboard (Teclado en Pantalla)', desc: 'Clickar virtualmente teclas o con sensores oculares guiando el puntero del mouse al abecedario en la pantalla.' },
      ]},
    ]
  },

  // Topic 3: Administrative Tasks
  'lpic1-102-107-1': {
    title: 'Gestión Principal de Usuarios/Grupos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: 'El Altar de las Entidades' },
      { type: 'paragraph', text: 'A diferencia de SOs donde todo está empaquetado y confuso en un disco ciego como Windows, la administración pura y orgánica de usuarios de Linux yace en 4 formidables simples ficheros de texto llano, separados por dos puntos.' },
      { type: 'table', headers: ['Ruta', 'Seguridad Clásica en Octal', 'Composición del Texto Físico'], rows: [
        ['/etc/passwd', '-rw-r--r-- (644)', 'Listado maestro universal Inocuo. USER:X:UID:GID:GECOS(Comentarios extras):/home/:/bin/bash'],
        ['/etc/shadow', '-rw-r----- (640 Root y Grupo Shadow) o 600', 'Hash militar salteado $6$(SHA512) password con flags del envejecimiento.'],
        ['/etc/group', '-rw-r--r-- (644)', 'Listado de clanes. grupo:x:GID:integranteA,integranteB'],
        ['/etc/gshadow', 'Idem al shadow normal', 'Extensión que asegura administradores delegados y hashes de contraseñas de cambio de grupo ciego.'],
      ]},
      { type: 'heading', level: 2, emoji: '🔐', text: 'El Arsenal de Herramientas Usermod' },
      { type: 'code', title: 'Maniobras y Parametros Clásicos de CLI', prompt: '# SUMAR / APILAR el grupo sudo sin lastimar e impactar otros grupos del usuario (-a append, -G)\n$ sudo usermod -aG sudo andres\n\n# FORZAR A CAMBIAR la Shell default a ser un zologíco ciego(no shell).\n$ sudo usermod -s /sbin/nologin userA\n\n# CREAR DE CERO forzando un ID custom (-u) y fabricando el Home completo autimatica (-m)\n$ sudo useradd -u 1900 -m nuevofiliado', output: '' },
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Plantillas Auto-Magicas' },
      { type: 'list', items: [
        { term: '/etc/skel', desc: 'Directorio "esqueleto". Plantilla que se copia idéntica a cada HOME nuevo (ahí dentro dejas los templates futuros de cada desarrollador de la compañia).' },
        { term: '/etc/login.defs', desc: 'Archivo Maestro Global del sistema. Define la encriptación hash a usarse (SHA512 usual), si se hace Mailbox (yes/no), limitantes pasivos, y el Default rango de las UID generadas (> 1000 Debian).' },
      ]},
      { type: 'infobox', variant: 'warning', title: 'Cuidado al Eliminar (userdel)', content: 'Lanzar `userdel pablo` te quita el usuario entero del radar de /etc/passwd pero la home dir y TODO su trabajo queda ahí vivo ocupando disco eternamente. Acostúmbrate al -r flag de recursive: `userdel -r pablo` para matanza completa física.' },
    ]
  },

  'lpic1-102-107-2': {
    title: 'Agendador de Tiempos Cron (Task Scheduling) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: 'Relojes Repetitivos: El Demonio Crond' },
      { type: 'paragraph', text: 'Si quieres lanzar un backup repetitivo a diario como un ritual infinito de la máquina, necesitas programarlo en las tablas "cron tables" del demonio histórico cron.' },
      { type: 'table', headers: ['Modo y Fichero', 'Impacto Operacional'], rows: [
        ['/etc/crontab', 'Crontab del Sistema. La sintaxis del archivo acá PIDE y EXIGE a gritos un campo extra de "Usuario que lo ejecuta" (ej. "root" pegado antes de invocar la ruta del bash)'],
        ['/etc/cron.d/', 'Directorio para empaquetados ciegos. Si instalas NGINX, probable el demonio de rotador de logs del servidor web tire un archivito texto acá.'],
        ['crontab -e', 'Editas TÚ crontab aislado privado (sin el campo usuario) de forma segura.'],
        ['crontab -l', 'Lista las misiones activas de TÚ crontab o del root.'],
        ['/var/spool/cron/', 'El lugar oscuro de almacenamiento donde radican los crontab individualizados de los usuarios normales (-e).'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: 'La Estructura Cronograma Exactos de 5 asteriscos' },
      { type: 'code', title: 'M m d y w Comando', prompt: 'Minuto(0-59) | Hora(0-23) | DíaDelMes(1-31) | MesN°(1-12) | DíaSema(0-7 dom)\n\n# Asterísco = A cada giro de eso.\n# Lista (Coma) = Ej. 5,10\n# Rango (Guión) = Ej 1-5\n# Frecuencia Continua (Barra) = Ej. */15 (cada 15 del bloque).\n\n# Lanzar script todos las madrugradas a la 2 am los dias Lunes y Martes.\n0 2 * * 1,2 bash miscript.sh\n\n# Lanzar Script a cada 10 minutos perpetuamente\n*/10 * * * * bash alerta.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Permitir e Impedir a la plebe: at y cron' },
      { type: 'paragraph', text: 'Cron es infinito. `At` por su parte es One-Shot. "Haz tal magia mañana a las 3 am, y borra la mision" (comando `at`, lista `atq`, borra `atrm`).' },
      { type: 'table', headers: ['Fichero Local', 'Funcionalidad Restrictiva de Muro'], rows: [
        ['/etc/cron.allow y /etc/at.allow', 'El modo DICTATORIAL puro. Si este archivo existe, SÓLO el personal ahí enlistado goza del privilegio de hacer agendamientos. Todos los demás están excluidos de fondo.'],
        ['/etc/cron.deny y /etc/at.deny', 'El modo LISTA NEGRA por defecto en muchas distros. Si no existe allow, chequea este. Si Juan está en denomined.deny, Juan está baneado y castigado. Todos gozan del OK natural.'],
      ]},
    ]
  },

  'lpic1-102-107-3': {
    title: 'Lenguajes de Locación y Codificaciones (i18n) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Variables de Locación y LC_ALL' },
      { type: 'paragraph', text: 'Tu Linux "Habla" un idioma y entiende un formato horario o de monedaje particular de tu nación dependiendo de las variables exportadas masivas.' },
      { type: 'table', headers: ['Variable de Sesión', 'Función'], rows: [
        ['LANG', 'El Default Fallback amigable (si no la pisa otro, este es rey) [Ej. en_US.UTF-8]'],
        ['LC_MESSAGES', 'Sólo define si tu comando "ls" si se equivoca tira el error en C, Español Inlgés etc.'],
        ['LC_TIME y NUMERIC', 'Fechadores visuales y comas divisoras de millares numericos.'],
        ['LC_ALL', 'Dios y Señor Absoluto. Pisa temporalmente e Invalida todo el resto con extremismo jerarquico.'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Fuso Horario (Timezones Geográficos)' },
      { type: 'code', title: 'Navegando el Mundo', prompt: '# Revisar Locales compilados del server, y setear el export manual provisorio.\n$ locale -a\n$ export LANG=fr_FR.utf8\n\n# La Hora de un sistema se estipula forzando el symlink:\n$ ls -l /etc/localtime\n lrwxrwxrwx 1 root root 33 /etc/localtime -> /usr/share/zoneinfo/Europe/Madrid\n\n# Utilitari moderno systemd directo que hace el trabajo pesado por ti e incluye el NTP\n$ timedatectl set-timezone Pacific/Auckland', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Transformar Codificación Mágica', content: 'Si posees un testeto antiguo en Win1251 o iso-8859-1 que ves ilegible en Linux UTF-8, debes saltarlo al formato real moderno usando `iconv`: \n`iconv -f iso-8859-1 -t utf-8 textoviejo.txt -o SalidaFresca.txt`' },
    ]
  },

  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: 'NTP y Hora del Sistema — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: 'Hardware Clock vs System Clock' },
      { type: 'paragraph', text: 'Linux administra dos relojes: el Reloj de Hardware (RTC o reloj BIOS, en la placa, a batería) y el Reloj de Sistema (en RAM, gestionado por el kernel).' },
      { type: 'comparison', left: {
        title: 'Hardware Clock (RTC o CMOS)',
        items: ['Mantenido vivo por la Pila litio de la madre', 'Eternamente independiente del Sistema Operacional y aislado', 'Leído puramente una vez durante el milisegundo de post-Boot', 'Históricamente seteado bajo franja universal UTC ciego', 'Comando clásico para invocarlo o ajustarlo a mano: hwclock']
      }, right: {
        title: 'System Clock (Lógico del Kernel en Ram)',
        items: ['Desaparece y borra cada que hay un Shutdown radical de energía', 'Incluye y envuelve automáticamente la capa del Huso Horario Geográfico (Timezone)', 'Corregido pasivamente frente al desvío via demonios de Redes (NTP)', 'Autor Material Absoluto de los estampados y marcas de tiempo de los archivos (Timestamps del inodo)', 'Comando clásico visual standard: date']
      }},
      { type: 'heading', level: 2, emoji: '⏱️', text: 'Sincronización via Network Time Protocol' },
      { type: 'paragraph', text: 'NTP manteniene al núcleo de Linux sincro y puramente enlazado a servidores atómicos perfectos mundiales sobre el internet, bajo el protocolo UDP 123. Se cuenta con 3 herramientas históricas: (ntpd, chrony, systemd-timesyncd).' },
      { type: 'table', headers: ['Demonio/Ente Supervisor', 'Archivo Semilla/Config Maestro', 'Notas del LPIC'], rows: [
        ['ntpd (Network Time Protocol daemon viejo robusto)', '/etc/ntp.conf', 'El Clásico Servidor/Cliente. De reacción sumamente lenta para ajustar baches, ideado para Servers 24/7 puros sin pérdida de internet'],
        ['chronyd', '/etc/chrony.conf', 'Reemplazo moderno. Reacciona al milisegundo y sincroniza volando, excelso para ordenadores Laptops que se desconectan a cada rato de las redes wifi. Administrado localmente via comando: chronyc'],
        ['systemd-timesyncd', '/etc/systemd/timesyncd.conf', 'Agente minimalista SNTP "ligero" acoplado de casa y fábrica en todos los systemd. Útil solo para cliente y no como server replicador NTP.'],
        ['ntpq -p', '(Query)', 'Muestra al Humano la lista atada de servidores maestros (peers), un delay compensatorio (offset) y que tan lejos de reloj atómico original estás (-stratum-)'],
      ]},
    ]
  },

  'lpic1-102-108-2': {
    title: 'Loggers del Sistema (Syslog/Journald) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Guardianes de Textos y Registros' },
      { type: 'paragraph', text: 'Los procesos demoníacos, softwares terceras y Kernel en bruto arrojan constantemente ruidos de información, los cuales un proceso maestro debe centralizar dentro de `/var/log` de forma organizada para no agotar el FileSystem. Clásicos `rsyslogd` (texto plano histórico) vs `systemd-journald` (moderno binario indescifrable al ojo de cat puro).' },
      { type: 'table', headers: ['Facility (Órgano Origen del Ruido)', 'Priority (Severidad, Gravedad)', 'Ejemplo Raro de rsyslog.conf Sintaxis'], rows: [
        ['auth, cron, daemon, kern, lpr(Impresoras), mail, user', '0-emerg, 1-alert, 2-crit, 3-err, 4-warning', 'mail.info   /var/log/maillog  (Significa: Guardame y Vuelca Todo lo de Info, y todas las extremidades Inferiores peores: warning,err,crit!)'],
        ['local0 ... local7 (Reservas Libres)', 'none (Opción de filtro de Bloqueo a una facility)', 'cron.*      /var/log/cron (El asterísco captura TODAS las prioridades sin mirar el nível, solo importando la fuente cron).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'Búsquedas, Queries y Rotaciones Mágicas (Logrotate)' },
      { type: 'code', title: 'Consultas Vivas de Binarios Journalctl', prompt: '# Revisar Absolutamente todo el log desde que iniciaste el PC hoy (Supera al viejo Dmesg temporal)\n$ journalctl -b\n\n# Apuntar el microscópio puramente a qué diablos pasa y se queja el Servidor Web (Unidad)\n$ journalctl -u nginx.service\n\n# Filtrar desde el amanecer "today" y anclarte modo "Follow" viendo caer las líneas en tiempo real (Idem a tail -f viejo)\n$ journalctl --since today -f\n\n# Inyectar una alerta falsa manual e imponer un archivo de log desde tu script casero y simple (Usando Logger)\n$ logger -p user.notice "Hola Mundo, soy tu script de backup y acabé con éxito." ', output: '' },
      { type: 'paragraph', text: 'El temido `logrotate` previene que un atacante sature ciegamente a errores tu /var/log/messages llenando todos tus Gb vacíos. Un cron lo despierta pasivamente día a día. Si nota que el archivo pesa más del umbral configurado (en /etc/logrotate.conf y /etc/logrotate.d/*) el programa agarra, lo empaqueta/comprime ZIP, lo renombra a .old.1 y crea un fichero nuevo vacío fresco para que `rsyslog` siga escribiendo sano.' },
    ]
  },

  'lpic1-102-108-3': {
    title: 'Servidores de Correo (MTA/Postfix) y Aliases — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Tránsito Vehícular de Correos de Root Internos' },
      { type: 'paragraph', text: 'Históricamente ningún servidor se concebía sin enviar notificaciones directas por correo. Output de trabajos fallados de Cron, alertas RAID rotos, Kernel panics, son envíados al buzón y casilla "root" local apalancado puramente de un MTA (Agente de Transferencia - Mail Transfer Agent) tipo el afamado Postfix o Sendmail viejo.' },
      { type: 'table', headers: ['Sigla/Protocolo', 'Acción Atómica Efectuada'], rows: [
        ['SMTP / TCP Puerto Seguro 25/587', 'Simple Mail Transfer Protocol. Intermediario estandar de envíos externos (Tú máquina a servidor Google de otra empresa).'],
        ['MTA (Motor)', 'El demonio principal que ataja la estafeta de tu script y decide "A Donde va, y Que ruta toma en la Red Local" y la transporta (Postfix)'],
        ['MUA (Cliente)', 'La consola, interfaz App del humano (Outlook, Thunderbird, o el clásico `mail` o `mutt` nativo bash)'],
        ['~/.forward', 'Documento personal oculto de texto de cada habitante. Si Juan lo llena con pablo@gmail.com, todo correo a Juan devía a pablo y vuela. (Ruta Específica)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'Redirección Administrativa Raíz Constante: /etc/aliases' },
      { type: 'paragraph', text: 'Un buen sysadmin de base NUNCA abre sesión como ROOT en la terminal. Por ende jamás miraría los vitales correos de servidor. La solución clásica es que TODA máquina redirija las quejas y lamentos envíados por el OS a root, hacia el correo del humano supervisor (user1) mediante la magia milenaria del archivo "aliases".' },
      { type: 'code', title: 'Flujo LPIC-1 Clásico', prompt: '# 1. Modificar a mano /etc/aliases para atrapar la raiz a ti mismo\npostmaster: root\nwebmaster: root\n# TODO correo envíado a la estafeta root, caerá ciegamente en andres_admin\nroot: andres_admin \n\n# 2. Re-Cargar Compilando EL DAEMON DE CORREO MTA! (Si no, esto falla espectacularmente)\n$ sudo newaliases', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Trampa Mortal de LPIC - newaliases', content: 'Debes grabarte a fuego lento esto para aprobar: El software del Servidor Correo jamás en su vida levanta y procesiona y lee tu archivito enano /etc/aliases. Él lee EXCLUSÍVAMENTE el archivo hermano binario llamado "/etc/aliases.db". Cada que tú borras o alteras el documento base, debes OBLIGATORIAMENTE ejecutar el comandazo "newaliases" para que agarre tu texto humano, y lo compile machacando en binario oscuro al archivo .db real.' },
    ]
  },

  'lpic1-102-108-4': {
    title: 'Manutención Antígua Impresores (CUPS) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'Common UNIX Printing System Vital' },
      { type: 'paragraph', text: 'Gestor global de papel y colas spool de impresión nativo creado por Apple y código abierto. Respira comúnmente sirviendote amablemente una intefaz Web de control via navegador en "localhost:631". El protocolo que lo mueve es IPP (Internet Printing Protocol en udp/tcp 631). Configs en /etc/cups/.' },
      { type: 'table', headers: ['Comandos Legacy Clásicos CUPS/LPD', 'Impacto Operativo', 'Sub Opción y Cuidado'], rows: [
        ['lp / lpr', 'Inyectar a ciegas un pdf plano a la fila de papel', 'lp -d HpColorLáser archivo.pdf'],
        ['lpstat', 'Cheque de los faros de estado general', 'lpstat -p (Revisa estado global de printers instaladas), lpstat -d (Muestra quien es Default)'],
        ['lpq', 'Inspecciona a los PIDs trabados temporalmente o no en la fila', 'Muestra el número global y nombre del humano de Job Id trabado.'],
        ['cancel / lprm', 'Aniquila y expulsa un trabajo colgado', 'cancel NumeroJOB_ID / lprm NumeroID'],
        ['cupsaccept / cupsreject', 'Abre o Bloquea la fila del software spool en la RAM CERRANDO SU PUERTA y vetándola del mercado local', 'El sistema y Server rechazan cualquier intención de "imprimir", emitiendo alertas claras a clientes (Solo admin)'],
        ['cupsenable / cupsdisable', 'Abre o Bloquea literalmente LA EJECUCIÓN DEL PAPEL al rodillo físico', 'Si ejecuto disable: El Servidor acepta y junta y acumula todos tus trabajos en RAM e intertet tranquilamente infinitos diciendo que SI, pero la máquina impresa JAMÁS TRAGARÁ hoja física hasta enviar enable (Solo Admin).'],
      ]},
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: 'Bases de Red (Arquitectura e IPs) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'IP v4 y Máscaras del Subnetting (CIDR)' },
      { type: 'paragraph', text: 'Una IPv4 es un ente contable compuesto de puramente de 32 bits divididos limpiamente en 4 bloques de 8 bits (octetos). La Máscara (Subnet Mask del tipo clasica 255.255.255.0 ó modo rápido /24 de bits 1 encendidos de izq a derecha) segmenta matemáticamente cuanta porción del chorro indica la idéntidad corporativa "Red Global Fija Limitante" (Network ID) y cual parte oscilante individual a cada simple "Computador Asignado a tí Local" (Host ID).' },
      { type: 'table', headers: ['Clase Mundial IPv4', 'Abarque Primer Octeto', 'Subnet Mask Base Orgánica Histórica', 'Notación Práctica Moderna de Bit Roteo (CIDR)'], rows: [
        ['Clase A (Inmensa)', '1 - 126', '255.0.0.0', '/8'],
        ['Clase B (Empresarial)', '128 - 191', '255.255.0.0', '/16'],
        ['Clase C (Hogareña Local)', '192 - 223', '255.255.255.0', '/24'],
        ['Clase D (Especial Grupal Pura - Multicast)', '224 - 239', '— Nulo OSPF —', '—'],
        ['Clase E (Experimentales Laboratorio IETF G)', '240 - 255', '— Bloqueado —', '—'],
      ]},
      { type: 'heading', level: 2, emoji: '🔒', text: 'La Intimidad Sagrada (Rango RFC Apócrifos Privados)' },
      { type: 'paragraph', text: 'Direcciones ilegales a nivel mundial WAN. Jamás de los jamases un router frontera global del mundo reenviará (routable packet check) un paquete exterior a los mismos. Por fuerza atómica mayor carecen de ser visualizados de internet obligando siempre la traducción de las IPs locales enmascarándolas detrás de un único IP global comprado público y único (Cosa que hace naturalmente tu servicio de Router llamado proceso NAT - Network Address Translation).' },
      { type: 'list', items: [
        { term: 'Rango Ciego Clase A', desc: '10.0.0.0 hasta - 10.255.255.255 (Universo enorme de 1 red sola pura /8)' },
        { term: 'Rango Ciego Clase B', desc: '172.16.0.0 hasta - 172.31.255.255 (El granero de las empresas, 16 redes amplificadas bajo de /16)' },
        { term: 'Rango Ciego Clase C', desc: '192.168.0.0 hasta - 192.168.255.255 (La humilde vivienda de cablevisión y telefonica router - fraccion de 256 subredes con poder natural de /24)' },
        { term: 'Abismo APIPA(Link-Local de Microsoft/Bonjour)', desc: '169.254.0.0/16 — Asignados agonicamente en caso que el computador falle solicitando desesperadamente IP a tu DHCP quemado.' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'Debes dominar con furía saber y aislar el listado de APIPA y de las IPs Privadas al leerlas dentro de un Output de "ip addr", y definir asertivamente qué hace el Puerta de Enlace (Default Gateway: Que funge como intérprete IP frontera o del Router único que encauza tráfico hacia afuera del Switch y subnet local hacia el internet inmenso)' },
    ]
  },

  'lpic1-102-109-2': {
    title: 'Ficheros Secretos y Arquitectura de Clavijas — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Documentos Maestros Configurantes (Entorno Clásico Debian)' },
      { type: 'table', headers: ['Directorio Ruta Base', 'Impacto Operativo'], rows: [
        ['/etc/network/interfaces', 'El estático viejo lugar (legacy absoluto) para anclar de forma definitiva si Eth0 toma DHCP aleatoria u es blindado con IP a mano'],
        ['/etc/resolv.conf', 'Nombres de Resolucion de Fila IP DNS a consultarse mundialmente (eg: Agregas Nameserver Google 8.8.8.8)'],
        ['/etc/hosts', 'Diccionario Interno Forense a mano cruda y dura. Asignación texto plano IP-Espacio-String (bypassea y le gana en velocidad y prelación al servidor DNS de internet por defecto). (127.0.0.1 misitio_local_dev)'],
        ['/etc/nsswitch.conf', 'Name Service Switch configurator. El árbitro que define en que ORDEN el Linux investiga bases si alguien aprieta Chrome buscando "www". Obliga la formula natural [1°Hosts local file local -> 2° Carga internet DNS final].'],
        ['/etc/services', 'Enciclopedia gigante de traducciones humanas tcp/udp de puertos a servicios que operan pasivamente a la lectura (ssh puerto 22, puerto 80 http)'],
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: 'Troubleshooting: Cazando Enemigos, Fallas, e Interrogatorios DNS — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Acribillamiento TCP y Rastreadores Lógicos' },
      { type: 'table', headers: ['Comando Forense de Interrogación y Fuego', 'Uso Médico Asertivo Localizado Práctico General'], rows: [
        ['ping / ping6', 'Diagnóstico primitivo elemental pero util. Emite paquetes ICMP Request obliganto un rebote ICMP Reply. Mide el ms tiempo vivo para evaluar pérdida de congestiones, testea pasivamente resolucion si pasas parametro strings. Pide siempre usar (ping -c 4 limite de 4 paquetes e IP/dominio) si no lo quieres correr al infinito y mas alla perdiendo el prompt general.'],
        ['traceroute general y pasivo / tracepath', 'Lanza TTLs secuencialmente escalonados. Fuerza rebote de mensajes error pasivos al ir muriendo en cada router vivo atravesado "Time to live expired", revelando cada IP paso a paso hasta el target distante en el mundo. Excelente para descubrir cuellos de botella en la telaraña y en que hop router físico mueres y se cae la nube global de tu edificio y bloque CDIR.'],
        ['host rancio pasivo básico/ nslookup / dig completo', 'Arsenal de interrogación crudo puro directo al Servidor DNS para indagar y extraer bases completas sin cacheo del sistema de la OS. (eg: dig A google.com revela y devuelve las IPs Cname registradas y Type A de google, bypassando el ping)'],
        ['netstat vintage local / the boss king moderno moderno ss (socket statistics) ', 'Abrete sesamo portuario, y dime por favor la estatus de puertos internos míos que abren las compuertas de tcpudp esperando recibir info y conecciones armadas de mi sistema. Descubre demonios troyanos hackeados listening a la nada esperando instrucciones pasivas (lsof secundario también rinde similar)'],
      ]},
      { type: 'code', title: 'Domador de Sockets Puros Modernos', prompt: '# 1. ¿Que coño en mi sistema personal está abierto pasivo escuchando conexiones foráneas a escondidas o públicamente?\n# SS (Socket statistics moderno veloz) con FLAGS sagradas de t=tcp pura + u=y suma los udp también + l=solo escupeme la puras sockets en estado LISTENings general + p=Dime el pido el nombre del criminal proceso binario + n=NO TRATES de resolver estupideces como decirme nombre dns o https, damelo numerico (puerto ciego duro y ip pura)\n$ ss -tulpn\n$ netstat -tulpn\n\n# 2. Mostar la sagrada tabla cruda final de Roteo subyacente que domina tu tráfico usando un -r (Routing tables) y la mágica obligada final "N" para exigirle no tardar procesando resoluciones reversas DNS que se trancan\n$ netstat -rn', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Cuidado extra Netcat y NC', content: 'Debido a la potencia maligna enorme nativa pura de mandar strings y textos a puertos tcp ciegos UDP, los sysadmins maduros acostumbran a mandar el paquete netcat como cuchilla navaja testeo. `nc -vz 10.0.0.1 22` Escanéa brutal y agresivamente a las bravas por TCP si en milisegundo un puerto esta de puerta abierta, si retorna yes es un test sin instalar Nmap gigante puro. ' },
    ]
  },

  // Topic 6: Security
  'lpic1-102-110-1': {
    title: 'Auditoría, Puertas Traseras SUID, e Identidades Robustas (GPG) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'La Debilidad Magna (Extroversión SetUID / SGID Flag)' },
      { type: 'paragraph', text: 'Imponer flags SUID matemáticos del mundo octal bit especial (Set User ID = 4xxx o modo texto +s sumado) permite a cualquier enano hijo usuario ejecutar a voluntad tu ejecutable nativo compilado portando los supremos e invencibles poderes pasivos de seguridad provistos bajo su Autor y Dueño en su inodo (usualmente configurado bajo root flag nativo) en lugar temporal de los lamentos suyos de bajos estractos propios básicos limitantes. Ideal caso perfecto general es invocar `passwd` (un humano local natural requiere permiso root indirecto global para sobrescribirse y pisar el file `/etc/shadow`), desastroso y suicida caso terminal completo el troyanizar otorgando bit al `cat` de uso general o instalar una terminal `/bin/sh` flagguada root a un hacker remoto permitiendo que este eleve sin contraseña temporal al sudo superuser nativo el sistema abriendo cajas pandoricas en minutos.' },
      { type: 'code', title: 'Encontrar archivos SUID (Comando de Examen LPIC-1 Clásico y Fundamental Forense Puro)', prompt: '# El Auditor arranca a rastrear los binarios troyanizados en silencio absolutos con el setUID maligno bit activo desde el disco ROOT en crudo puro:\n# 1. Empieza a buscar en pasillos / generalemente\n# 2. Extrae filtrando `-perm` el flag magico exacto en el cuarto bit `/4000`\n# 3. Y que la autoría de inodo pertenezca al `root` (-user)\n# 4. Aisla a archivos normales (`-type f`) esquivando links\n# 5. Silencia las fallas infinitas en output feo (-2> a tacho null)\n$ find / -perm /4000 -user root -type f -exec ls -l {} \\; 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '🔑', text: 'GPG Criptografismo Enlazado Puro Básico (GnuPG Asimétrico Total Básico)' },
      { type: 'paragraph', text: 'Como rama libre inmensa PGP, la encriptación asimétrica general domina el mundo con dos llaves sagradas creadas matemáticamente desde factorizaciones gigantescas atadas primas: LA LLAVE PBLICA, que tiras agresivamente, disemínas en foros internet general, foros y web pages para que cualquier humano del mundo te Encripte ciegamente textos, te firme ciegamente su fiabilidad general; y su joya pariente: LA LLAVE PRIVADA, manteninada en secreto sepultado eterno en tu PC, que es la *Única* fuerza del univereso con el privilegio bruto para revertir matemáticamente archivos y textos publicamentes blindados con la llave de la primera.' },
      { type: 'table', headers: ['Comando puro util gpg', 'Significancia Funcional de Encendidos Operaciones GPG LPIC'], rows: [
        ['gpg --gen-key', 'Crear Forjar Llaves inicial (la llave en bloque general de la semilla secreta tuya oculta para toda la vida)'],
        ['gpg --export mimail@admin', 'Exportando la Llave Pública inofensiva lista para subida en binario ciego natural a los llaveros de servidores extraños'],
        ['gpg -a --export mail@admin', 'Idem pero armadura "Armor A": Es decir tira un bloque legible feo texto general inmenso ASCII texto feo seguro para correos textos.'],
        ['gpg --import archivo_publico_llave.asc', 'Metes en tu llavero una llave que Juan publico de andres en tu memoria temporal.'],
        ['gpg --list-keys', 'Visor de todos los dueños publicos amigos de la base de registros en RAM.'],
        ['gpg -e -r recipient_admin doc.txt', 'Encriptas tu texto puro de trabajo ciego al remitente destinatario publico `-r` (nadie mas que él lo podrá revertir, o sea descifrar).'],
        ['gpg -d doc.txt.gpg', 'Ruta descifrada Decrypt. Devuelve un bloque legible tras ingresar tú el password de confirmación tuyo, descifrando el contenido secreto enviado con exito final.'],
      ]},
    ]
  },

  'lpic1-102-110-2': {
    title: 'Expiración Insegura Constante de Shadow / Control Físico Ulimit (Hard/Soft) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🛂', text: 'Shadow Passwords Limits Mantenimientos (Envejecimiento)' },
      { type: 'table', headers: ['Opción Fuego `chage` Directa Modificadora Comando Admin Humano Ciega', 'Valor Físico Parametro Crudo en Columna Interno En /etc/shadow Pura Ciega General LPIC'], rows: [
        ['chage -l andres', 'List Mostrar las opciones temporales puras de vida.'],
        ['chage -M 90 user', 'Max. Límite de vida Máximo tolerado estandar dias. A los 90 días expira password obligando reseteo forzado ciego.'],
        ['chage -m 10 user', 'Límite purista de base Minimun impidiendo cambiazos de broma hacker forzada (Prohibido saltó cambio de repudio hasta pasados 10 dias de vigencia en crudo).'],
        ['chage -W 7 user', 'Warning. A los 7 dias faltantes el kernel hostiga y notifica el login del OS puro del peligro de caduco venidero inminente.'],
        ['chage -E "2025-12-31"', 'Peligroso Expire Absoluto. Cesa la validancia puramente general viva de inicio la cuenta completa de acceso a loggear independientemente de claves.'],
      ]},
      { type: 'heading', level: 2, emoji: '👮', text: 'Límites Ulimit (Estrangulación Ciega Local Lógica)' },
      { type: 'paragraph', text: 'No existe sistema vivo con la salvación del mundo si a un enano nivel basico terminal se le dá chánce infinitud limite sin cap general absoluto ciego físico de RAM o CPU Threads temporales, la infame bomba clásica "fork-bomb extrema (:(){ :|:& };:) en pocos milesimos consume forzando tu procesador obligando a que Root colapse todo congelando la terminal de mando general en panico forzado de hardware general".' },
      { type: 'list', items: [
        { term: 'Base Terminal Bash Invocación Local: `ulimit` puro interactivo global ciego general', desc: 'Indaga a la maquina los topes máximos del CPU memoria, cantidad archivos permitidos -nf o los stack absolutos. Visualización pasiva general o setting pasivo momentáneo en bash (ulimit -a todos).' },
        { term: 'Gran Fichero de Configuración Estructurado del Pam Administrativo Fijo globalizado seguro (/etc/security/limits.conf)', desc: 'Documento donde tú cavas la trinchera y limitante pasiva de que Juan usa puramente RAM 10 MB.' },
        { term: 'Guerra Pura Clímax de LPIC Hard vs Soft Constraints Limitancias Locales Ciega.', desc: 'Soft Limtite (Limíte blando pacífico): Un usuario lo puede pisar incrementarlo localmente en su bash invocando mas ram o proceso, SÓLO escalando al techo ciego físico límite blindador del Hard superior fijo general. Solo Administrador ciego y crudo ROOT rebasa y setea variables del Hard superior puro inquebrantable absoluto infinito y global. (LPIC puro test de conocimiento clásico ciego).' },
      ]},
    ]
  },

  'lpic1-102-110-3': {
    title: 'Blindajes de Red, Wrappers / Super SSH Puertos Secretos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Gobernación Absolutista del Demonio de las Llaves (OpenSSH - Puerta 22)' },
      { type: 'paragraph', text: 'Las comunicaciones históricamente abiertas como Telnet enviaban hashes password textos legibles y datos puramente vacíos libres a la web al aire. El túnel tunelador críptico blindando y asesinando el pasado se aloja bajo "Secure Shell" apalabrado demoníacamente bajo TCP Puerto 22. Sus estandartes rigen sus biblias config textos nativos de manera inminente: El Documento `sshd_config` (Del Demonio Server anfitrión de espera al cual todos golpean la puerta en la pared externa y pide reglas, reloads /etc/ssh/). Y el librito de directivas secundario modesto base "ssh_config" de cada habitante general o configuraciones que tú emites como "cliente foráneo".' },
      { type: 'code', title: 'File Maestro Configuraciones Brutales /etc/ssh/sshd_config puros LPIC1 Básicos:', prompt: '# Blindajes y configuraciones a prender a hierro lento encendido:\n# Y un sudo systemctl restart sshd para re-compilarlas efectivas rápidas.\n\nPort 2222                 # Camuflajear cambiar de default (Botnets golpean todo al 22 base buscando vulnerabilidad ciego puro pasiva).\nPermitRootLogin no        # MAI EN LA VIDA permitir accesos logueos remotos a Dios raíz vía simple claves pasivas al mundo.\nPasswordAuthentication no # La regla obligatoria de Oro. 0 Contraseñas. Usa tu llave privada ed25519 en tú usb pasivo o te deniego la conexión forzádamente.', output: '' },
      { type: 'table', headers: ['Arsenal OpenSSH General', 'Ataque y Acciones Seguridad Defensio Pasivo de Red'], rows: [
        ['ssh-keygen', 'Genera de cero y exprime tu propia base pareja dupla Llave Pública y Privada para autenticar de forma pura de algoritmo (por defecto local en /.ssh/id_rsa / o moderna algorítmo veloz ed25519)'],
        ['ssh-copy-id control_node', 'Magia pasiva. Script seguro automatizador acoplador de SSH que exporta seguro tu firma local .pub pública y va, cruza y la suma anexándola ciegamente el fichero ".ssh/authorized_keys" de autorización remota del Server remoto blindandote de autenticidad general pacífica.'],
        ['ssh-agent / ssh-add', 'Mantenimiento del hilo. Agent en base de Ram, resguarda viva tú secreta Passphrase larga de la decriptación llave privada evitando exigírtela en cada comando interactivo pesado ciego en general repetitivamente cada segundo que subas y bajes en github o servidores.'],
      ]},
      { type: 'heading', level: 2, emoji: '🛡️', text: 'La Guardia de Castillos Pura TCP Wrappers (Capa Superior Histórica Host Acceso Ciego Terminal Fuego Global de Muro Base)' },
      { type: 'list', items: [
        { term: 'Fichero Permisivos General del Muro Corta Firewall (/etc/hosts.allow)', desc: 'Reglas absolutas primitivas de aceptamiento. Obliga que un demonio crudo general (eg. sshd) confíe solo a ciegas y sin procesamientos a rangos IPs y CIDRS. (eg: `sshd: 192.168.12.` Permitirá el paso libre primario al estrato SSH).' },
        { term: 'Fichero Defensor Ciego (Castigamientio Extremo puro General) (/etc/hosts.deny)', desc: 'Todo aquello no escrito con permiso en allow estático crudo, rebota y es masacre pasiva de deny impidiendo procesamiento al cpu del anfitrión. Clásico bloque ciego masacrante estático: `sshd: ALL` (Deniéga y mata la ruta base pura sin anestesia al mundo estero para conectividad al puerto ciego).' },
      ]},
    ]
  },

}
