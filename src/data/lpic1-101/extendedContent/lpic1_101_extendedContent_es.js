// LPIC-1 101 Extended Content  Spanish
// Rich structured sections for ExtendedContent.jsx

export const lpic1_101_extendedContent_es = {

  'lpic1-101-1-1': {
    title: 'Componentes Físicos y BIOS/UEFI — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Hardware Principal y Comandos de Diagnóstico' },
      { type: 'paragraph', text: 'En un sistema Linux, todo el hardware conectado es detectado por el kernel durante el arranque (o en caliente) y la información se exporta al pseudo-sistema de archivos /sys y /proc.' },
      { type: 'table', headers: ['Componente', 'Comando de Diagnóstico', 'Ruta/Archivo Relevante'], rows: [
        ['CPU', 'lscpu', '/proc/cpuinfo'],
        ['RAM', 'free -m, dmidecode -t memory', '/proc/meminfo'],
        ['PCI / Tarjetas', 'lspci', '/sys/bus/pci/devices/'],
        ['USB', 'lsusb', '/sys/bus/usb/devices/'],
        ['Discos', 'lsblk, fdisk -l', '/dev/sda, /dev/nvme0n1'],
      ]},
      { type: 'heading', level: 2, emoji: '🔄', text: 'BIOS vs UEFI' },
      { type: 'paragraph', text: 'El firmware pre-OS inicializa el hardware y carga el gestor de arranque. La transición de BIOS a UEFI trae diferencias clave.' },
      { type: 'comparison', left: {
        title: 'BIOS Clásico',
        items: ['Arquitectura de 16-bit', 'Usa esquema de partición MBR (Max 2TB)', 'Ejecuta el bootloader alojado en el primer sector del disco', 'No tiene control nativo del firmware operativo']
      }, right: {
        title: 'UEFI (Unified Extensible Firmware Interface)',
        items: ['Arquitectura de 32 o 64-bit', 'Usa esquema de partición GPT (Hasta 9.4 ZB)', 'Requiere una partición especial EFI (ESP, FAT32)', 'Soporta Secure Boot']
      }},
      { type: 'infobox', variant: 'exam', content: 'Para el examen: Recuerda que lsusb y lspci extraen información en tiempo real, mientras que los archivos en /proc y /sys son directamente leídos por estas y otras utilidades. El comando modprobe sirve para cargar módulos (drivers) del hardware.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'El Proceso de Arranque — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Del Botón de Encendido al Kernel' },
      { type: 'paragraph', text: 'El proceso de arranque de Linux sigue pasos secuenciales. Si uno falla, el sistema no arranca.' },
      { type: 'list', items: [
        { term: '1. POST y Firmware', desc: 'Encendido, test de hardware, búsqueda de dispositivo de arranque.' },
        { term: '2. Bootloader (GRUB2)', desc: 'Cargado desde el MBR o la partición EFI. GRUB presenta el menú y carga el kernel en memoria.' },
        { term: '3. Kernel e Initramfs', desc: 'El kernel Linux se ejecuta, monta el initramfs (un disco temporal en RAM) para cargar módulos críticos de almacenamiento.' },
        { term: '4. Pivote de Raíz', desc: 'El kernel cambia la raíz del initramfs al disco duro real.' },
        { term: '5. Proceso Init (Systemd)', desc: 'El kernel ejecuta el PID 1 (systemd o SysVinit), que arranca todos los servicios de usuario.' },
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'dmesg y el Buffer del Anillo del Kernel' },
      { type: 'paragraph', text: 'Todos los mensajes que genera el kernel durante el arranque (y post-arranque) se guardan en un buffer en memoria.' },
      { type: 'code', title: 'Comandos para lectura de logs del kernel', prompt: '# Leer todo el dmesg\n$ dmesg\n\n# Filtrar dmesg para errores relacionados con USB\n$ dmesg | grep -i usb\n\n# Borrar el buffer ring del kernel\n$ dmesg -c\n\n# Ver todos los archivos de logs persistentes en la carpeta clásica\n$ ls /var/log/messages', output: '' },
    ]
  },

  'lpic1-101-3-1': {
    title: 'Runlevels y Systemd Targets — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🚦', text: 'SysVinit: Los 7 Runlevels Clásicos' },
      { type: 'table', headers: ['Runlevel (Nivel)', 'Descripción', 'Equivalente en Systemd Target'], rows: [
        ['0', 'Apagado / Halt', 'poweroff.target'],
        ['1, s, S', 'Modo Monousuario (Rescate)', 'rescue.target'],
        ['2', 'Multi-usuario sin red (Debian red parcial)', 'multi-user.target'],
        ['3', 'Multi-usuario FULL (solo texto / servidor)', 'multi-user.target'],
        ['4', 'No utilizado/Libre', 'multi-user.target'],
        ['5', 'Multi-usuario FULL Gráfico (Modo escritorio)', 'graphical.target'],
        ['6', 'Reinicio / Reboot', 'reboot.target'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Systemd: Gestión de Targets' },
      { type: 'paragraph', text: 'Systemd, el init moderno por defecto, reemplaza los runlevels con archivos `.target`.' },
      { type: 'code', title: 'Comandos de estado y cambio de nivel', prompt: '# Obtener el target por defecto (en el que inicia el PC)\n$ systemctl get-default\n\n# Cambiar el target por defecto a modo texto\n$ sudo systemctl set-default multi-user.target\n\n# Cambiar sobre la marcha a modo gráfico sin reiniciar\n$ sudo systemctl isolate graphical.target\n\n# Comandos clásicos que aún funcionan internamente\n$ init 3', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Rescue vs Emergency', content: 'rescue.target (runlevel 1) monta el sistema de archivos local y pide contraseña de root. emergency.target es aún más drástico: monta la raíz como solo-lectura y NO inicia red ni servicios secundarios.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Esquemas de Particionado y Mount — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '💽', text: 'Diseño del Disco Duro (Hard Disk Layout)' },
      { type: 'paragraph', text: 'El instalador de Linux te pide particionar el disco duro. Aunque es posible instalar todo en una sola partición raíz (/), el examen LPIC-1 exige conocer las mejores prácticas para servidores.' },
      { type: 'table', headers: ['Montaje (Directorio)', 'Uso/Contenido', 'Por qué separarlo'], rows: [
        ['/ (Root)', 'Archivos del sistema operativo', 'Mínimo necesario para arrancar.'],
        ['/boot', 'Kernel y bootloader estáticos', 'Archivos de arranque seguros; a veces requiere Ext4 clásico u otra configuración FS.'],
        ['/home', 'Datos y configuraciones de usuarios', 'Si reinstalas el OS, no pierdes tus datos personales.'],
        ['/var', 'Logs de sistema, bases de datos y colas', 'Evita que un archivo de log masivo llene la partición raíz y cuelgue el servidor.'],
        ['swap', 'Memoria virtual extendida', 'Evita bloqueos cuando la RAM se llena.'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Directorios Iseparables', content: '¡Cuidado! Hay directorios que contienen utilidades o librerías que el sistema necesita ANTES de montar otras particiones. Las carpetas /bin, /sbin, /lib, /etc y /dev NO pueden estar en otra partición separada de /. Deben estar en la partición raíz principal.' },
    ]
  },

  'lpic1-102-2-1': {
    title: 'Gestores de Arranque (Bootloaders) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'GRUB2 (GRand Unified Bootloader)' },
      { type: 'paragraph', text: 'El bootloader predeterminado actual. Sustituye al antiguo GRUB Legacy.' },
      { type: 'list', items: [
        { term: 'Ubicación MBR', desc: 'En sistemas BIOS, el Stage 1 de GRUB se instala en los primeros 512 bytes del disco.' },
        { term: 'Partición ESP', desc: 'En UEFI, vive en /boot/efi/EFI/ubuntu/grubx64.efi.' },
        { term: 'Configuración estática', desc: '/etc/default/grub (Donde editas el tiempo de espera, resolución y comandos del kernel).' },
        { term: 'Directorio de scripts', desc: '/etc/grub.d/ (Donde viven los scripts generadores que buscan otros OS).' },
        { term: 'Archivo final (Intocable)', desc: '/boot/grub/grub.cfg (NO EDITAR a mano. Se sobreescribe con el comando grub-mkconfig).' },
      ]},
      { type: 'code', title: 'Interactuando con GRUB', prompt: '# Regenerar la configuración (Debian/Ubuntu)\n$ sudo update-grub\n\n# Comando real detrás de update-grub\n$ sudo grub-mkconfig -o /boot/grub/grub.cfg\n\n# Instalar grub en el disco duro (sistemas MBR)\n$ sudo grub-install /dev/sda', output: '' },
      { type: 'table', headers: ['Edición en el menú boot', 'Entorno de línea de comandos de GRUB'], rows: [
        ['Apretar "e"', 'En el menú del OS, "e" permite editar los parámetros del kernel antes de arrancar. (Ej: agregar "single" para modo de rescate).'],
        ['Apretar "c"', 'Abre la terminal de comandos de GRUB. Comandos: set root, linux, initrd, boot.'],
      ]},
    ]
  },

  'lpic1-102-3-1': {
    title: 'Librerías Compartidas — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '📚', text: 'Archivos Objeto Compartidos (.so)' },
      { type: 'paragraph', text: 'Al igual que las DLL de Windows, Linux usa librerías compartidas .so (Shared Objects). Los directorios clave son /lib, /usr/lib, y /usr/local/lib.' },
      { type: 'code', title: 'Comandos esenciales de librerías', prompt: '# 1. ldd: Ver qué dependencias (librerías) necesita el comando "ls"\n$ ldd /bin/ls\n        linux-vdso.so.1 (0x00...)\n        libselinux.so.1 => /lib/x86_64-linux-gnu/libselinux.so.1\n        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6\n\n# 2. ldconfig: Reconstruir la caché de búsqueda de librerías\n# El sistema usa /etc/ld.so.conf (y ld.so.cache) para encontrar las librerías rápido.\n$ sudo ldconfig', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Pregunta típica: "Has instalado un software en /usr/local/lib pero el sistema se queja de que no encuentra la librería libreria.so al ejecutar el programa. ¿Qué debes hacer?". Respuesta: Asegurarte de que el path /usr/local/lib esté en /etc/ld.so.conf (o /etc/ld.so.conf.d/) y ejecutar `ldconfig`.' },
      { type: 'list', items: [
        { term: 'LD_LIBRARY_PATH', desc: 'Variable de entorno temporal que obliga al sistema a buscar librerías en un directorio personalizado primero. Ejemplo: export LD_LIBRARY_PATH=/opt/miapp/lib:$LD_LIBRARY_PATH' },
      ]},
    ]
  },

  'lpic1-102-4-1': {
    title: 'Gestor de Paquetes Debian (APT/dpkg) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'El Mundo Debian (.deb)' },
      { type: 'table', headers: ['Comando', 'Función', 'Ejemplo'], rows: [
        ['dpkg -i', 'Instala/Actualiza paquete local (No resuelve dependencias de internet)', 'dpkg -i perl.deb'],
        ['dpkg -r', 'Elimina (Remove) paquete, PERO deja los archivos de configuración', 'dpkg -r vim'],
        ['dpkg -P', 'Elimina completamente (Purge), incluye archivos de configuración', 'dpkg -P apache2'],
        ['dpkg -l', 'Lista (List) todos los paquetes instalados', 'dpkg -l | grep ssh'],
        ['dpkg -S', 'Busca qué paquete instaló un archivo concreto (Search)', 'dpkg -S /etc/ssh/ssh_config'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Herramientas de Alto Nivel (APT)' },
      { type: 'paragraph', text: 'APT (Advanced Package Tool) automatiza la descarga resolviendo dependencias conectándose a repositorios (/etc/apt/sources.list). Las herramientas históricas apt-get y apt-cache ahora se unifican bajo el simple "apt".' },
      { type: 'list', items: [
        { term: 'apt-get update', desc: 'Actualiza la BASE DE DATOS LOCAL de qué paquetes interactúan en internet. Siempre haz esto antes de instalar nada.' },
        { term: 'apt-get upgrade', desc: 'Instala versiones nuevas de tus programas ya instalados con seguridad.' },
        { term: 'apt-get dist-upgrade', desc: 'Más agresivo. Elimina bibliotecas obsoletas y actualiza programas que cambian sus dependencias críticas.' },
        { term: 'apt-cache search [regex]', desc: 'Busca el nombre de un paquete en la base de datos descargada útil si no sabes el nombre exacto.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'Reconfiguración', content: 'Si rompiste manualmente el archivo de configuración de un paquete en /etc, usar `dpkg-reconfigure nombre_paquete` restaurará los defaults y volverá a mostrar las pantallas moradas interactivas clásicas de Debian.' },
    ]
  },

  'lpic1-102-5-1': {
    title: 'Gestor de Paquetes Red Hat (Yum/RPM) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🎩', text: 'El Mundo Red Hat/Fedora (.rpm)' },
      { type: 'paragraph', text: 'Tanto CentOS como Fedora o RHEL usan `rpm` como herramienta de bajo nivel y `yum` (sustituido por `dnf` en Fedora modernos) como gestor de red. La configuración está en /etc/yum.repos.d/.' },
      { type: 'table', headers: ['Comando RPM', 'Función', 'Ejemplo similar apt/dpkg'], rows: [
        ['rpm -i', 'Instala paquete rpm descargado localmente (.rpm)', 'dpkg -i'],
        ['rpm -U', 'Instala o Actualiza un paquete local (Recomendado sobre -i)', 'dpkg -i'],
        ['rpm -r / -e', 'Elimina (Erase) un paquete (CUIDADO, rpm hace purgas de config por defecto si el paquete no modificó nada)', 'dpkg -r'],
        ['rpm -qa', 'Consulta (Query) a (All) los paquetes instalados', 'dpkg -l'],
        ['rpm -qi', 'Consulta (Query) i (Info) detalles completos de un paquete', 'apt show'],
        ['rpm -qf', 'Consulta el origen de un archivo File (a qué paquete pertenece)', 'dpkg -S'],
        ['rpm -V', 'Verifica (Verify) la integridad criptográfica de archivos del software', '(Ninguno básico en dpkg)'],
      ]},
      { type: 'heading', level: 2, emoji: '⬇️', text: 'Yum y DNF (Yellowdog Updater, Modified)' },
      { type: 'code', title: 'YUM en acción', prompt: '# Buscar un paquete en repos remotos\n$ yum search nmap\n\n# Instalar resolviendo dependencias (-y asume "yes" autómaticamente)\n$ sudo yum install -y apache-httpd\n\n# Mostrar info del paquete\n$ yum info curl\n\n# Actualizar todo el sistema\n$ sudo yum update\n$ sudo yum upgrade', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Para el nivel inferior, usa rpm: `rpm -qa` lista todos, `rpm -qf /bin/bash` muestra que el paquete bash es el dueño del archivo. Si has modificado y roto el bashrc original en /etc, puedes descubrir el error rodando `rpm -V bash` y rpm te avisará que las sumas MD5 / Mtime del archivo ya no encajan.' },
    ]
  },

  'lpic1-101-3-1-1': {
    title: 'La Consola y los Entornos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '⌨️', text: 'CLI vs GUI interactiva' },
      { type: 'paragraph', text: 'La interfaz de línea de comandos (CLI) permite ejecutar poderosas directivas y rutinas de comandos y la bash como predeterminada.' },
      { type: 'table', headers: ['Variable de Entorno Base', 'Definición Clave', 'Comando Modificador o Visor'], rows: [
        ['$PATH', 'Donde el SO hurga para localizar programas nativos sin escribr todo los slashes (/usr/bin)', 'echo $PATH ; export PATH=$PATH:/directorio_mio'],
        ['$HOME', 'Lugar Alfa de Usuario', 'echo $HOME ; cd ~'],
        ['$HISTFILE', 'Fichero que atesora tu racha de vida terminal en bytes', '~/.bash_history'],
      ]},
      { type: 'heading', level: 2, emoji: '💡', text: 'Variables de Entorno' },
      { type: 'code', title: 'Exportación de variables', prompt: '# Ver todas las variables declaradas (locales temporales a la shell)\n$ set\n\n# Ver las variables absolutas/globales "exportadas" a los hijos subyacentes.\n$ env\n\n# Hacer que un alias temporal tome forma durardera global en el kernel runtime activo.\n$ export VARIABLE="Linux"\n\n# Burlar el historial de bash, evitando guardar comandos con espacios iniciales:\n$ export HISTCONTROL=ignorespace', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Debes dominar que `uptime` y `uname -a` (OS full description env) están casados por defecto en el LPIC a este nivel, y saber diferenciar entre internal y external shell commands consultando a `type <comando>` (ej: type cd retorna "cd is a shell builtin").' },
    ]
  },

  'lpic1-101-3-2-1': {
    title: 'Tuberías y Redirecciones — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🚰', text: 'Stadard Streams (I/O)' },
      { type: 'paragraph', text: 'Cada comando nacido en Unix dispara 3 cañerías por defecto conectadas al monitor virtual (teclado como entrada). STD(0,1,2).' },
      { type: 'table', headers: ['ID Canal / Archivo', 'Descripción Original', 'Atajos de Redirección (Overwrite y Append)'], rows: [
        ['STDIN (0)', 'Boca en espera a tecleado', '< (inyectar un fichero ciego al devorador comando)'],
        ['STDOUT (1)', 'Vómito productivo de salida correcta', '> (overwrite / sobre-escritura) y >> (insertar concatenado)'],
        ['STDERR (2)', 'Vómito del Mensaje Error del comando interno.', '2> error.log u omitirlo enviantolo al tacho ciego del Kernel con: 2> /dev/null'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'Pipes (|)' },
      { type: 'paragraph', text: 'La barra vertícal (pipe) conecta la SALIDA (1) STDOUT del lado izquierdo, como ENTRADA (0) STDIN del comando receptor de la extrema derecha.' },
      { type: 'code', title: 'Comandos de Tubo Avanzado', prompt: '# Manda output y error a DOS RUTAS DIFERENTES nativo.\n$ ls /fake /real > exitsos.txt 2> erroes_basura.log\n\n# Redireccionar el error para que se acople y se fuzione con el Standar Out general (Técnica &1 vieja de bash).\n$ ls /falso > todo_fusionado.txt 2>&1\n\n# Equivalente bash moderno limpio:\n$ ls /falso &> todo_moderno.txt\n\n# Canalizar un dmesg para hojearlo comodamente usando Less, sumando xargs para pasar atributos\n$ ls | xargs wc -l | sort -n', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Cuidado con xargs', content: 'Muchas veces el comando B derecho no tolera STDIN por Pipe. Como "rm" o "kill". `ls | rm` FALLA. Debes construir los parámetros uno por uno forzosamente: `ls | xargs rm` para que se arme el "rm fichero1 fichero2".' },
    ]
  },

  'lpic1-101-3-3-1': {
    title: 'Text Processing Básico (Filtros) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '✂️', text: 'Herramientas de Tratamiento Liviano' },
      { type: 'table', headers: ['Poder de Filtro', 'Propósito Principal', 'Ejemplo Top'], rows: [
        ['cat vs tac', 'Impresión pura y reversa del archivo entero.', 'tac reverso.txt (lee de la z a a)'],
        ['head / tail', 'Visualizar lineamientos extremos -n limitados', 'tail -f log.log (modo de observatorio en vivo)'],
        ['sort / uniq', 'Agrupación alfabetica e indice y depuradora', 'sort -nr (numérico inverso) y uniq -c (cuenta)'],
        ['wc', 'Conteo de Líneas (l), palabras (w), bytes/caracteres (c)', 'wc -l /etc/passwd'],
        ['cut / paste', 'Desmembramiento de campos y pegado columnas.', 'cut -d: -f1,7 /etc/passwd (Solo extrae Usuario y Shell)'],
      ]},
      { type: 'code', title: 'Tratado Textual Extremo LPIC', prompt: '# Expande Tabulaciones a N espacios en blanco literales.\n$ expand -t4 archivo_code.py\n\n# Traduce y Reemplaza carácteres minúsculos a MAYUSCULAS del STDIN \n$ cat texto.txt | tr "a-z" "A-Z"\n# Nota: tr NO acepa archivos y rutas estáticas finales ("tr txt"), debes inyectarle con "<" o pipes ("cat|tr").\n\n# Filtra y escupe lineas unicas no repeditas (Uniq obliga SIEMPRE a usar Sort antes, o falla silenciosamente)\n$ sort feo.txt | uniq', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Comandos Menores Extra', content: 'Otros comandos menores a recordar: OD (para leer archivos binarios ciegamente en base octal), y Split (para fragmentar / archivar rompecabezas en trozos de MB). Ej: `split -b 10M inmenso.iso`' },
    ]
  },

  'lpic1-101-3-4-1': {
    title: 'Text Processing Avanzado (sed y awk) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Stream Editor (sed)' },
      { type: 'paragraph', text: 'Sed altera flujos de texto de manera no destructiva volando su alteración a STDOUT a menos que utilices el modificador suicida -i (in-place) para reescribir los bytes al disco.' },
      { type: 'code', title: 'Expresiones sed LPIC Clásico', prompt: '# Estructura: s(substitute) / Viejo / Nuevo / g(global flag)\n$ sed "s/rojo/azul/g" documento.txt\n\n# Bórra (delete) todas las líneas que tengan la palabra ERROR\n$ sed "/ERROR/d" dmesg.txt\n\n# Sobrescribe modificando tu archivo en el disco real, respaldándolo a .bak. In-place Edit.\n$ sed -i.bak "s/puerto 80/puerto 443/g" conf.conf', output: '' },
      { type: 'heading', level: 2, emoji: '📊', text: 'Procesamiento Analitico (awk)' },
      { type: 'table', headers: ['Sintaxis de AWK Base', 'Propósito del Campo AWK'], rows: [
        ['awk \'{print $1}\'', 'Imprimir campo espacio 1 de serie de array por linea'],
        ['awk -F":" \'{print $3}\'', 'Obligar a -F a entender delimitador a los DOS puntos en vez del espacio. Ideal para passwd'],
        ['awk -v var="A"', 'Enviar variables foraneas al bloque awk'],
        ['$0 vs NF', '$0 Imprime TODO natural, NF es la variable interna (Número de Campos locales en la linea acual)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'En Sed, s/x/y/ no es regla de Dios usar slashes /, puedes usar s#x#y#, muy útil si vas a reemplazar rutas y URLs con slasher internos (eg: s#/var/www#/opt/nginx#g).' },
    ]
  },

  'lpic1-101-3-5-1': {
    title: 'Monitorizando y Administrando Procesos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Manejadores de Monitoreo: ps / top / free' },
      { type: 'paragraph', text: 'Tanto `ps` como `top` indagan dentro del pseudo filesystem /proc. Extraen a modo instantanea cada PID instanciando en el Kernel ring y el estado de threads.' },
      { type: 'table', headers: ['Comando Forense de Procesos', 'Traducción y Uso Principal Práctico', 'Opción Modificador'], rows: [
        ['ps', 'Process snapshot. Visualización pasiva de estado en la shell local muerta', '-ef o aux'],
        ['top', 'Monitor en tiempo real ciego.', 'Ejecuta P interactivamente para RAM, o N para ordenar'],
        ['free', 'Total de RAM virtual + Buffer Caché vs Real usado', '-m (Megabytes), -h (Humano)'],
        ['uptime', 'Muestra Uptime y los tres "Load Averages" sagrados', '1 / 5 / 15 Minutos de historial carga CPU'],
        ['bg / fg / jobs', 'Job 컨트롤 y Suspendición de demonios atados cdl prompt. (&)', 'jobs -l (ver bg PIDs)'],
      ]},
      { type: 'code', title: 'Signals: El comando kill', prompt: '# Destruir el proceso de forma educada y limpia (Signal 15 - SIGTERM)\n$ kill 1334\n\n# Asesino brutal e in-trazable del Kernel. Directo RAM. Cierra sin guardar estado. (Signal 9 - SIGKILL)\n$ kill -9 1334\n\n# Recarga de configuración de Demonios (Daemon Reload o HUP, sin matar hijos TCP). Signal 1.\n$ kill -HUP 887', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Debes recordar que `killall` no requiere PIDs, sino que mata el patrón en string estático nominal: `killall apache2`.  Adicional a eso, `pgrep` es la mejor arma y grep puro al directorio /proc por nombres del binario que devuelve array de PIDs sueltos.' },
    ]
  },

  'lpic1-101-3-6-1': {
    title: 'Prioridad de Proceso (Nice/Renice) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '⚖️', text: 'El Valor "Nice" (NI)' },
      { type: 'paragraph', text: 'El kernel de Linux usa un planificador (scheduler) para asignar tiempo de CPU. El valor "nice" indica cuán "amable" es un proceso con los demás: un valor alto significa que cede la CPU más fácilmente (baja prioridad).' },
      { type: 'table', headers: ['Concepto', 'Rango', 'Comportamiento'], rows: [
        ['Rango Nice (NI)', '-20 a +19', '-20 = Máxima prioridad, 19 = Mínima prioridad'],
        ['Valor Default', '0', 'Un proceso normal nace con nice 0'],
        ['Prioridad Real (PR)', '0 a 139', 'Calculada por el kernel (PR = 20 + NI para procesos normales)'],
      ]},
      { type: 'code', title: 'Comandos nice y renice', prompt: '# Iniciar un proceso "pesado" con baja prioridad (nice 10)\n$ nice -n 10 tar -czf backup.tar.gz /var/log\n\n# Iniciar un proceso con alta prioridad (solo root puede usar valores negativos)\n$ sudo nice -n -5 ./mi_script_critico.sh\n\n# Cambiar la prioridad de un proceso que YA está en ejecución (renice)\n$ sudo renice -n 15 -p 1234\n\n# Obtener el nice actual de procesos:\n$ ps -l', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Regla de Oro de Root', content: 'Cualquier usuario normal y mortal puede EJECUTAR procesos haciendo su propio proceso "más lento y gentil" (valors de 0 a 19). Pero SÓLO ROOT tiene el privilegio de hacerse "egoísta" y robar CPU con valores negativos (-1 a -20) o usar renice para reducir el valor de un proceso que ya tiene uno alto.' },
    ]
  },

  'lpic1-101-3-7-1': {
    title: 'Expresiones Regulares (Regex) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'El Lenguaje de los Patrones' },
      { type: 'paragraph', text: 'Las expresiones regulares son caracteres especiales que definen un patrón de búsqueda avanzado. Se usan exhaustivamente en `grep`, `sed`, `awk` y lenguajes de programación.' },
      { type: 'table', headers: ['Metacarácter', 'Significado Mágico y Literáx', 'Ejemplo de Grep LPIC Práctico'], rows: [
        ['. (Punto)', 'Cualquier carácter individual (exactamente UNO, excepto salto de línea)', 'c.t (encuentra cat, cot, c3t)'],
        ['* (Asterisco)', 'Cero o MÁS ocurrencias del carácter ANTERIOR', 'ca*t (encuentra ct, cat, caat, caaat)'],
        ['^ (Circunflejo)', 'Ancla el patrón al INICIO de la línea', '^root (líneas que empiezan con root)'],
        ['$ (Dólar)', 'Ancla el patrón al FINAL de la línea', 'bash$ (líneas que terminan en bash)'],
        ['[abc]', 'Clase de caracteres: UNO de los caracteres dentro del corchete', '[cC]at (cat o Cat)'],
        ['[^abc]', 'Negación de clase: CUALQUIERA EXCEPTO los del corchete', '[^0-9] (Cualquier cosa que NO sea número)'],
      ]},
      { type: 'heading', level: 2, emoji: '🧬', text: 'Regex Extendidas (egrep / grep -E)' },
      { type: 'paragraph', text: 'Las Regex puras (BRE) no entienden el + o el ?. Debes usar grep -E o escapar los símbolos.' },
      { type: 'list', items: [
        { term: '+ (Más)', desc: 'UNA o más ocurrencias del antecedente. (Ej: a+ a, aa, aaa pero NO vacío).' },
        { term: '? (Interrogante)', desc: 'CERO o UNA ocurrencia (Opcional). (Ej: http?s encuentra http y https).' },
        { term: '| (Pipe OR)', desc: 'Alternativa lógica (Esto O Aquello). (Ej: gato|perro).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'Saber filtrar líneas en blanco es una clásica: `grep -v "^$"` (Líneas que NO (-v) tengan inicio pegado al final). Filtrar comentarios: `grep -v "^#"`.' },
    ]
  },

  'lpic1-101-3-8-1': {
    title: 'Edición Básica (vi / vim) — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Los 3 Modos de Vi' },
      { type: 'paragraph', text: 'Vi es el editor de texto POSIX estándar presente en UNIX/Linux y LPIC requiere dominar sus tres facetas.' },
      { type: 'table', headers: ['Modo Físico', 'Atajo/Transición de Tecla', 'Se utiliza en general para...'], rows: [
        ['Modo Comando (Normal)', 'Es el modo BASE. Llegas a él pulsando ESC repetidas veces.', 'Borrar, copiar, navegar, deshacer y ejecutar macros.'],
        ['Modo Inserción', 'Pulsando "i" (antes), "a" (después), "o" (nueva línea).', 'Tecléo purista de la literatura de datos. Escribes texto real.'],
        ['Modo Ex (Línea Comandos)', 'Pulsando ":" en modo Normal.', 'Guardar archivo, buscar en masa, reemplazo sed o salir del programa.'],
      ]},
      { type: 'heading', level: 2, emoji: '🎯', text: 'Movimientos y Teclas del Examen' },
      { type: 'code', title: 'Sobreviviendo a VI', prompt: '# SALIR (EX-MODE)\n:wq   # Guardar (Write) y salir (Quit)\n:x    # Igual que :wq\n:q!   # Salir de forma homicida sin guardar los cambios del texto.\n\n# NAVEGACIÓN Y EDICIÓN (NORMAL MODE)\ndd    # Cortar/Borrar la línea entera actual\nyy    # Copiar/Yank la línea entera actual\np     # Pegar (Paste) lo que borraste o aliaste (debajo)\nu     # Deshacer (Undo) último error\n/text # Buscar "text" hacia adelante en todo el scroll (usa n para la siguiente coincidencia)', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Las teclas HJKL', content: 'De la era de las máquinas sin cruces: h (izquierda), j (abajo), k (arriba), l (derecha). El examen las pregunta. Recuerda: j parece una flecha apuntando hacia A-j-baxo.' },
    ]
  },

  'lpic1-101-4-1-1': {
    title: 'Particiones y Sistemas de Archivos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '💿', text: 'Herramientas de Particionado' },
      { type: 'table', headers: ['Herramienta', 'Soporte', 'Características'], rows: [
        ['fdisk', 'MBR (y GPT)', 'Interactiva, guarda con w, aborta con q. Históricamente más usada.'],
        ['gdisk', 'Solo GPT', 'Igual que fdisk pero específica para GPT. Soporta GUIDs de partición.'],
        ['parted', 'MBR + GPT', 'ADVERTENCIA: aplica cambios INMEDIATAMENTE (sin buffer en RAM).'],
        ['cfdisk', 'MBR + GPT', 'Interfaz ncurses (semi-gráfica). Más fácil y amigable.'],
      ]},
      { type: 'heading', level: 2, emoji: '📂', text: 'Sistemas de Archivos Linux' },
      { type: 'table', headers: ['Sistema', 'Journaling', 'Archivo Máx', 'Volumen Máx', 'Uso Típico'], rows: [
        ['ext4', 'Sí', '16 TB', '1 EB', 'Por defecto en muchas distros, muy estable y maduro.'],
        ['XFS', 'Sí', '8 EB', '8 EB', 'Por defecto en RHEL, excelente ruteando archivos masivos.'],
        ['Btrfs', 'Copia Múltiple', '16 EB', '16 EB', 'Snapshots del SO en vivo, compresión y RAID integrado.'],
        ['FAT32 (vfat)', 'No', '4 GB', '2 TB', 'Partición EFI del sistema, y USBs pendrives móviles.'],
        ['swap', 'N/A', 'N/A', 'N/A', 'Area de intercambio pura. Memoria Virtual RAM.'],
      ]},
      { type: 'code', title: 'Crear filesystem (formateo) y area Swap', prompt: '# Formatear usando ext4\n$ sudo mkfs.ext4 /dev/sda1\n\n# Formatear usando XFS\n$ sudo mkfs.xfs /dev/sda2\n\n# Crear la firma tipo archivo Swap en MBR, y sumarlo a la memoria libre del SO.\n$ sudo mkswap /dev/sda3\n$ sudo swapon /dev/sda3\n\n# Ver todos los UUIDs de dispositivos\n$ blkid', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Debes recordar que parted aplica el particionado de forma asíncrona real (sin letra de validación para "escribir a disco" como w), y mkswap formatea como intercambio swap nativo (no requiere mount).' },
    ]
  },

  'lpic1-101-4-2-1': {
    title: 'Integridad del Sistema de Archivos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Verificación y Mantenimiento' },
      { type: 'table', headers: ['Comando', 'Sistema de Archivos', 'Función', 'Nota (Extrema Importancia)'], rows: [
        ['fsck', 'Genérico', 'Verificar y reparar (wrapper)', '¡El filesystem DEBE estar desmontado!'],
        ['e2fsck', 'ext2/3/4', 'Repará y limpia el específico de ext', 'Usar -y asume confirmación a las pausas de reparación.'],
        ['xfs_repair', 'XFS', 'Reparar sistema XFS', 'No se recomienda usar fsck sobre discos formateados en XFS, sino puramente su herramienta oficial.'],
        ['tune2fs', 'ext2/3/4', 'Modificar parámetros', 'Argumento vital de examen -c (ajustar monto máximo antes del auto chequeo), y -i (intervalos en tiempo de auto chequeo)'],
        ['dumpe2fs', 'ext2/3/4', 'Volcar informaciones macroscopicas', 'Muestra metadatos finos de bloques del disco y los inodos.'],
      ]},
      { type: 'heading', level: 2, emoji: '📊', text: 'Cuota e Informativa Espacial del Disco' },
      { type: 'table', headers: ['Comando', 'Función', 'Opciones Más Representativas'], rows: [
        ['df -h', 'Indica el uso de todos lo discos y particiones ya montadas en el VFS local.', '-T (Imprime el tipo), -i (Imprimir Inodos consumidos frente al umbral libre)'],
        ['du -sh dir/', 'Medir peso puntual de la carpeta.', '-a (incluye ficheros individuales, en lugar del agrupado padre), --max-depth=1'],
      ]},
      { type: 'infobox', variant: 'warning', title: '¡Nunca de los Nuncas lanzes un Fsck en particiones montadas vivas!', content: 'La correción física de ext4 / ext3 usando bloqueadores lógicos puede arruinar la data permanentemente. Umount de urgencia, o modo rescate de sistema si hablamos del disco raíz, es paso imperativo previo.' },
    ]
  },

  'lpic1-101-4-3-1': {
    title: 'Montaje de Sistemas de Archivos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'mount, umount y el famoso /etc/fstab' },
      { type: 'code', title: 'Comandos Frecuentes', prompt: '# Montar dispositivo regular\n$ sudo mount /dev/sda1 /mnt/backup\n\n# Montar blindando tipo\n$ sudo mount -t ext4 /dev/sda1 /mnt/backup\n\n# Montar forzandos opciones\n$ sudo mount -o ro,noexec /dev/sda1 /mnt/backup\n\n# Desmontar de manera oficial (notar que la n y m está alterada: NO es unmount)\n$ sudo umount /mnt/backup\n\n# Leer todo fstab de manera agresiva.\n$ sudo mount -a', output: '' },
      { type: 'heading', level: 2, emoji: '📋', text: '/etc/fstab — Los 6 Campos Sagrados' },
      { type: 'table', headers: ['Campo', 'Significado Real LPIC', 'Ejemplo Directo'], rows: [
        ['1. Dispositivo', 'Puede indicarse una ruta por etiqueta /dev/ o UUID eterno', 'UUID=xxxx-xxxx /dev/sdXN'],
        ['2. Punto Montaje', 'La carpeta canasta en blanco', '/home'],
        ['3. Tipo', 'Ext, xfs o fat32 etc.', 'ext4, xfs, swap, vfat'],
        ['4. Opciones', 'Comandos concatenados nativos de montaje', 'defaults, noexec, nosuid, ro, loop'],
        ['5. Dump', 'Bandera histórica legacy de backup (0 es No)', '0'],
        ['6. Pass/fsck', 'El orden jerarquico que toma el auto-reparador de la BIOS al arranque (0 cancela el sistema reparador)', '2'],
      ]},
      { type: 'list', items: [
        { term: 'defaults', desc: 'Suma de configuraciones estándares subyacentes = rw, suid, dev, exec, auto, nouser, async. Importante para examen.' },
        { term: 'noexec', desc: 'Sella binarios imposibilitando iniciar ningún ejecutable. Clásico en pen-drives USB ajenos montados y particiones en /var como /var/www contra malwares.' },
        { term: 'nosuid', desc: 'Previene explotación de contraseñas u accesos privilegiados prohibiendo bits de escalada' },
        { term: 'noauto', desc: 'Deshabilita que mount -a aplique en la unidad para evitar el bootloop. Ideal para USB e ISOS esporádicos.' },
      ]},
    ]
  },

  'lpic1-101-4-5-1': {
    title: 'Permisos y Propiedad — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Permisos Básicos Unix: rwx' },
      { type: 'paragraph', text: 'El entorno de Unix otorga a los ficheros e inodos conjuntos paralelos. Propietario(Usuario), Grupo asociado al objeto temporal, y al bloque "the world"(resto universal).' },
      { type: 'table', headers: ['Forma Octal', 'Notación Alfabética', 'Explicación del Nivel de Permisos'], rows: [
        ['755', 'rwxr-xr-x', 'Propietario Todo. Público: sólo lectura y abrir la ejecución de la carpeta(entrar al CD).'],
        ['644', 'rw-r--r--', 'Propietario Todo Menos ejecutar. Público sólo vista simple. Standard ficheros vacios.'],
        ['700', 'rwx------', 'Sólo Propietario. Bloqueo al publico general (privacidad extrema)'],
        ['777', 'rwxrwxrwx', 'Extremo Peligro. Total Libertad Pública de modificación y borrado.'],
      ]},
      { type: 'heading', level: 2, emoji: '⭐', text: 'Bit de Permiso Especial Defensivo' },
      { type: 'table', headers: ['Bit/Alias Escolar', 'Puntuación Octal base', 'Efecto al setear sobre Ficheros Ejecutables', 'Efecto al setear sobre una Carpeta Real', 'Clásico Localización FHS Local'], rows: [
        ['SUID', '4000', 'Ejecución Emmascarada (asume cargo del Dueño Original que programó el script, usualmente ROOT)', '—', '/usr/bin/passwd (Abre los hashes cifrados temporalmente al usurper temporal común)'],
        ['SGID', '2000', 'De forma analoga, roba la entidad y ejecuta como miembro nativo del circulo de Grupo', 'Fija/Herencia la propiedad del circulo (El archivo nacido de un padre hereda la subyacencia del grupo del padre, y no el del creador de último segundo)', 'chmod g+s /var/shared_projects/'],
        ['Sticky Bit', '1000', '—', 'Veto. Solo el dueño individual es capas de erradicar la vida del fichero (A pesar del nivel 777 libre y total que puede que tenga el pasillo/carpeta)', '/tmp (chmod +t /tmp, e impide caos del personal general)'],
      ]},
      { type: 'heading', level: 2, emoji: '🎭', text: 'Umask' },
      { type: 'code', title: 'Ejecución Práctica de Chmod umasker', prompt: '# Cambiando el Umasker base. Substrae la creación virgen de los directorios\n# 777 (Dir) - 0022 UM = 755 Permisos por defecto creados para todos los maderos.\n$ umask 0022\n\n# Búsqueda letal y forense para un CISO Linux usando el bit Suid en el mundo total:\n$ find / -perm /4000 -type f 2>/dev/null', output: '' },
    ]
  },

  'lpic1-101-4-6-1': {
    title: 'Enlaces Físicos y Simbólicos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Diferencia Práctica Entre Dos Ligas' },
      { type: 'comparison', left: {
        title: 'Hard Link (Directo Físico)',
        items: ['Comparte Identidad (Comparte Inodo Exacto y metadatos absolutos)', 'Se restringe a la cárcel de su propia Partición de Montura base.', 'Se PROHÍBE vincular a los Directorios/Carpetas.', 'El fichero madre sigue viviendo en el universo del disco si el archivo primerizo resulta exterminado', 'Estructura Comando Creación: ln ficheroA clonB', 'Identificable por ver el Inodo en un "ls -li"']
      }, right: {
        title: 'Symbolic Link / Soft (Ligamento Simbólico Estético)',
        items: ['Identidad Virtual y Punteros Locacionales (Tiene Inodo diferenciado).', 'Puede brincar sistemas ext4, o viajar a NFS, monturas Windows etc.', 'Acapara vinculaciones de Directorios', 'Muerte. Si el target matriz desaparece, los puentes hijos se fracturan mostrando un color muerto error de GUI rojo y un loop no resuelto.', 'Comando Creación: ln -s targetMatriz clonB']
      }},
      { type: 'infobox', variant: 'exam', content: 'Pregunta de seguridad: Al listar "ls -li", y sumar dos de las copias hardlinks en la matemática de byte contable del sistema (comando DU), el núcleo linux es listo y sabe que son los mismos 5 megas. No se engruesa artificialmente a 10.' },
    ]
  },

  'lpic1-101-4-7-1': {
    title: 'FHS y Búsqueda de Archivos — Profundización',
    sections: [
      { type: 'heading', level: 2, emoji: '🗂️', text: 'Acuerdo Mundial del Filesystem FHS' },
      { type: 'table', headers: ['Directorio Nativo Raíz', 'Explicación del Contenido Clásico', 'Variación'], rows: [
        ['/ (Root)', 'Punto Alfa — contiene el absoluto entero local del VFS orgánico', 'Estático Base'],
        ['/bin', 'Comandos indispensables modo Safe Mono-Usuario (ls, cp, cat)', 'Estático'],
        ['/sbin', 'Comandos administrativos radicales (fdisk, fsck, reboot)', 'Estático (S de System)'],
        ['/etc', 'Configuración cruda Universal (Nunca contiene los binarios vivos)', 'Estático'],
        ['/var', 'Datos metabólicos y de cambio masivo: logs, bases DBM, webservers live content', 'Variable Agresiva'],
        ['/tmp', 'Carpetas miscelaneas transitorias de las App (vaciadas al Reboot natural)', 'Variable efervesente'],
        ['/usr', 'App y librerías pre-cocinadas generales provistas por el repo oficial', 'Estático / ReadOnly'],
        ['/usr/local', 'Tierras sin Ley (Soft compilado artesanalmente "make install" ajenas al Package Manager oficial dpkg etc)', 'Estático'],
        ['/dev', 'Mundo de Módulos Inodos Virtualizados hardware ("Cosas" USB, Pantallas, Terminals)', 'Virtual Puro'],
      ]},
      { type: 'heading', level: 2, emoji: '🔍', text: 'Métodos para Caza y Búsqueda Activa' },
      { type: 'table', headers: ['Comando', 'Funcionamiento del Motor Interno', 'Consumo Reloj e I/O'], rows: [
        ['find', 'Análisis secuencial del árbol y en tiempo real con metadatos y pesos bytes', 'Alta Latencia y estrés al IOPS disco puro'],
        ['locate / mlocate', 'Lectura a base de datos construida por el macro-comando croneado updatedb', 'Absurda Velocidad. Instantaneo'],
        ['whereis', 'Escanéa binarios del PATH, además caza páginas man del software e incluye localizaciones source', 'Velocidad Promedio alta.'],
        ['which', 'Detecta ciegamente solo el camino inicial base PATH del primer ejecutable matcheando tu string', 'Muy Veloz y Práctico Programación Scriptings'],
      ]},
    ]
  },

}
