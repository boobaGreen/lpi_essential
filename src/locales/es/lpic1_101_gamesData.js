// LPIC-1 101 Games Data — Spanish

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1
  { command: 'lspci', description: 'Muestra todos los dispositivos PCI' },
  { command: 'lsusb', description: 'Muestra todos los dispositivos USB' },
  { command: 'lsmod', description: 'Muestra los módulos del kernel cargados' },
  { command: 'modprobe module', description: 'Carga un módulo del kernel con dependencias' },
  { command: 'modprobe -r module', description: 'Elimina un módulo del kernel' },
  { command: 'dmesg', description: 'Muestra los mensajes del kernel (ring buffer)' },
  { command: 'systemctl get-default', description: 'Muestra el target systemd predeterminado' },
  { command: 'systemctl set-default multi-user.target', description: 'Cambia el target de arranque a multi-usuario' },
  // Topic 2
  { command: 'grub-mkconfig -o /boot/grub/grub.cfg', description: 'Regenera la configuración de GRUB2' },
  { command: 'grub-install /dev/sda', description: 'Instala GRUB2 en el MBR' },
  { command: 'ldd /usr/bin/ls', description: 'Muestra las dependencias de bibliotecas compartidas' },
  { command: 'ldconfig', description: 'Actualiza la caché de bibliotecas compartidas' },
  { command: 'dpkg -i paquete.deb', description: 'Instala un paquete local de Debian' },
  { command: 'apt-get update', description: 'Actualiza la lista de repositorios' },
  { command: 'rpm -qa', description: 'Enumera todos los paquetes RPM instalados' },
  { command: 'dnf install paquete', description: 'Instala un paquete RPM desde el repositorio' },
  // Topic 3
  { command: 'which cmd', description: 'Muestra la ruta completa del ejecutable' },
  { command: 'type cmd', description: 'Indica si es un alias, shell builtin o ejecutable' },
  { command: 'head -n 20 archivo', description: 'Muestra las primeras 20 líneas de un archivo' },
  { command: 'tail -f /var/log/syslog', description: 'Sigue un log en tiempo real' },
  { command: 'sort -rn archivo', description: 'Ordenación numérica inversa' },
  { command: 'cut -d: -f1 /etc/passwd', description: 'Extrae el primer campo separado por dos puntos' },
  { command: 'find / -name "*.conf" -type f', description: 'Busca todos los archivos .conf' },
  { command: 'grep -rn "patron" /etc/', description: 'Busca recursivamente con número de línea' },
  { command: 'ps aux', description: 'Muestra todos los procesos con detalles' },
  { command: 'kill -9 PID', description: 'Mata el proceso forzadamente (SIGKILL)' },
  { command: 'nice -n 10 cmd', description: 'Inicia el comando con prioridad baja' },
  { command: 'nohup cmd &', description: 'Ejecuta el proceso ignorando la señal SIGHUP' },
  // Topic 4
  { command: 'fdisk -l', description: 'Enumera las particiones del disco' },
  { command: 'mkfs.ext4 /dev/sda1', description: 'Formatea la partición con el sistema ext4' },
  { command: 'blkid', description: 'Muestra UUID y tipos de sistemas de archivos' },
  { command: 'mount /dev/sda1 /mnt', description: 'Monta un sistema de archivos' },
  { command: 'umount /mnt', description: 'Desmonta un sistema de archivos' },
  { command: 'fsck /dev/sda1', description: 'Comprueba y repara el sistema de archivos' },
  { command: 'df -h', description: 'Muestra el uso del espacio del disco' },
  { command: 'du -sh /home', description: 'Muestra el tamaño del directorio' },
  { command: 'chmod 755 archivo', description: 'Otorga permisos rwxr-xr-x' },
  { command: 'ln -s /origen /enlace', description: 'Crea un enlace simbólico' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1
  { text: 'BIOS es más moderno que UEFI.', answer: false, explanation: 'UEFI es el sucesor de BIOS, introduciendo soporte para GPT y arranque más rápido.', difficulty: 1 },
  { text: '/proc es un sistema de archivos virtual y solo existe en la memoria RAM.', answer: true, explanation: '/proc no usa espacio en el disco duro, todo es generado por el kernel bajo demanda.', difficulty: 1 },
  { text: 'El proceso systemd/init toma el Process ID número 1 (PID 1).', answer: true, explanation: 'init o systemd siempre es el primer proceso de espacio de usuario, con el PID 1.', difficulty: 1 },
  { text: 'MBR puede direccionar discos de más de 2 Terabytes.', answer: false, explanation: 'Debido a límites de 32 bits, MBR se queda atascado en 2 TB. GPT soluciona esto.', difficulty: 1 },
  { text: 'apt-get update instala nuevas versiones de los paquetes del sistema.', answer: false, explanation: 'update descarga las definiciones y "apt upgrade" aplicará las actualizaciones.', difficulty: 1 },
  { text: 'Las bibliotecas .so (Shared Objects) son equivalentes de Linux a los archivos .dll de MS Windows.', answer: true, explanation: 'Cierto, el enlazador dinámico carga y vincula objetos compartidos durante la ejecución del programa.', difficulty: 1 },
  { text: 'El comando cat se usa para crear fácilmente carpetas vacías.', answer: false, explanation: 'Con \'mkdir\' se crea un directorio nuevo, cat visualiza ficheros de texto.', difficulty: 1 },
  { text: 'El pipe o tubería ( | ) manda la salida estándar de una orden hacia la entrada estándar de la que le sigue.', answer: true, explanation: 'Es la regla principal sobre cómo canalizar comandos en shell.', difficulty: 1 },
  { text: 'Tanto root como un usuario estándar pueden enviar el comando kill -9 al PID 1.', answer: false, explanation: 'En primer lugar se requieren privilegios administrativos para intentar detener a \'init\' y el kernel directamente descarta cualquier señal para asesinarlo.', difficulty: 1 },
  { text: 'El sistema de archivos ext4 cuenta con registro transaccional conocido como bitácora (journal).', answer: true, explanation: 'Sí, ayuda enormemente a reparar y mantener la sanidad sin realizar fscks enteros cada reinicio irregular.', difficulty: 1 },
  { text: 'Permisos de 644 determinan que todos los usuarios de la computadora pueden modificar el fichero libremente.', answer: false, explanation: 'El modo "6" autoriza \'lectura y escritura\' para el dueño, pero "4" es \'estricta lectura\' para el grupo y el público.', difficulty: 1 },
  { text: 'El fichero /etc/fstab declara que las carpetas o discos duros se deben auto montar en la secuencia de boot.', answer: true, explanation: 'El demonio systemd asimila /etc/fstab para activar el montaje persistente por el programa de arranque.', difficulty: 1 },

  // Difficulty 2
  { text: 'modprobe atiende automáticamente las dependencias del módulo, pero la orden base insmod ignorará cualquier requisito implícito.', answer: true, explanation: 'Insmod intenta cargar solamente el archivo, modprobe navega a través de modules.dep para ensamblar las dependencias.', difficulty: 2 },
  { text: 'El rescue.target es el equivalente para el Runlevel de SysV 5.', answer: false, explanation: 'rescue.target reemplaza Runlevel 1 (modo de un solo usuario). Runlevel 5 corresponde con el perfil graphical.target.', difficulty: 2 },
  { text: 'dpkg descarga y procesa todos los requisitos de cualquier paquete .deb desde servidores remotos por red.', answer: false, explanation: 'La utilidad dpkg es la capa interna instaladora; quien lidia resolviendo paquetes es apt.', difficulty: 2 },
  { text: 'La herramienta \'uniq\' va a remover universalmente los párrafos idénticos sin tomar en cuenta si éstos no se han ordenado secuencialmente.', answer: false, explanation: 'uniq se dedica unicamente en analizar la fila y la sucesiva y es indispensable pasarlo por sort anteriormente.', difficulty: 2 },
  { text: 'El punto en Regex ( . ) simboliza y se compara por casi cualquier carácter individual presente en el contenido textual.', answer: true, explanation: 'El punto atrapa todas las conformaciones (números, minúsculas, caracteres) a menudo a menos de que sea el marcador de fin y salto de párrafo.', difficulty: 2 },
  { text: 'La prioridad o Nice igual a -20 hace la petición a la máquina de entregar el tiempo más bajo de cómputo del procesador.', answer: false, explanation: 'Es a la inversa. El algoritmo concibe un número negativo como máxima relevancia (-20), por ende una posición altamente jerárquica.', difficulty: 2 },
  { text: 'Si trabajamos sobre \'parted\' para fabricar discos, las alteraciones entrarán en rigor activo de formato inmediato.', answer: true, explanation: 'fdisk requiere confirmación. Parted se implementa al instante sobre the master boot records.', difficulty: 2 },
  { text: 'Un Sticky bit activado para alguna carpeta evitará que nadie mas pueda introducir información adentro o escribir reportes nuevos.', answer: false, explanation: 'Sticky concede la opción de agregar contenido asumiendo rwx, sin embargo solo previene la sustracción y el borrado (Eliminar la propiedad del autor original).', difficulty: 2 },
  { text: 'Bajo escenarios controlables, fsck debe inspeccionar los sistemas de almacenamiento estando montados explícitamente y de manera interactiva.', answer: false, explanation: 'Hacer comprobaciones preventivas con discos escribiéndose simultáneamente desencadena estragos a la integridad de su journal y lo aniquilará.', difficulty: 2 },
  { text: 'UUID son identificaciones inalterables asignadas temporalmente por los dispositivos virtuales USB o dev.', answer: false, explanation: 'UUID (Universally Unique Identifier) se asientan sobre la tabla matriz del particionado. Ciertamente un nombre de nodo sdb o sdc alternaría mientras el ID queda permanente de raíz.', difficulty: 2 },

  // Difficulty 3
  { text: 'Por parte de expresiones elementales o Basic Regex (BRE), el signo mas (+) precisa una barra de control auxiliar \\+', answer: true, explanation: 'Si nosotros trabajamos con GNU grep simple, tendremos la urgencia de escape \'\\\\+\', lo cual se elimina activando la extensión general egrep -E', difficulty: 3 },
  { text: 'Dentro del emergency.target el ambiente operativo te brindara conectividad Ethernet nativa pre-establecida para respaldos de emergencia.', answer: false, explanation: 'Es lo mínimo absoluto. No activara ningún componente extra mas allá del sistema alojado pasivamente sin comunicaciones externas e internas de subsistemas red.', difficulty: 3 },
  { text: 'El Umask de clase 027 obliga a todo nuevo fichero escrito dentro la cuenta a crearse con atributos \'640\'.', answer: true, explanation: 'Ficheros bases operan a 666 por omisión, la mascara en 027 se aplica matemáticamente como ( 6 menos 0 , 6 menos 2 , y 6 menos 7 a 0). 640  rw-r--... ', difficulty: 3 },
  { text: 'Al efectuar rpm -V en contra de un componente binario, la aplicación RHEL cotejara la estructura criptográfica, peso en bytes del disco y privilegios de protección por vulneración.', answer: true, explanation: 'Verify corrobora que ninguna rutina vital del programa instalado fue alterado por un acto indebido local con la base original RPM global.', difficulty: 3 },
  { text: 'Se puede manufacturar enlaces sólidos (Hard Links) dirigidos al volumen local hacia otra unidad HDD independiente anexada con un número Inode correlacionado de respaldo', answer: false, explanation: 'Enlace Fuerte esta estrictamente encerrado y confinado sobre un segmento geodésico de formato de unidad (una ext o xfs original), si se cambia de punto disco deberá apelar por simlink de software -s', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: 'Lista los dispositivos PCI', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: 'Muestra el target systemd predeterminado', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: 'Actualiza la lista de paquetes', difficulty: 1 },
  { prompt: 'head -n _____ archivo', answer: '10', hint: 'Líneas mostradas por defecto', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: 'Crea también los directorios padres (parents)', difficulty: 1 },
  { prompt: 'chmod _____ archivo', answer: '755', hint: 'Otorga todos los permisos básicos (rwxr-xr-x)', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: 'Montar un directorio del sistema', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: 'Elimina de forma recursiva una carpeta', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: 'Lista absolutamente todos los procesos para todo dueño', difficulty: 1 },
  { prompt: 'grep _____ "Patrón" archivo', answer: '-i', hint: 'Ignora distinción entre minúsculas y mayúsculas', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ module', answer: '-r', hint: 'Bandera con orden a remover de la RAM la utilidad', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: 'Abreviación sobre \'halt\' (Detener completamente sistema de control)', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'Directorio definitivo destino GRUB ', difficulty: 2 },
  { prompt: 'dpkg _____ /ruta/a/archivo', answer: '-S', hint: 'Mando de Búsqueda de pertenencia', difficulty: 2 },
  { prompt: 'rpm _____ paquete', answer: '-qi', hint: 'Muestra información detallada del software', difficulty: 2 },
  { prompt: 'find /etc -name "_____"', answer: '*.conf', hint: 'Extensiones regulares generalizadas tipo archivo config', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'Muerte forzosa instintiva inesquivable a un protocolo colgado', difficulty: 2 },
  { prompt: 'nice -n _____ cmd', answer: '10', hint: 'Asignar Prioridad positiva a ejecución baja/media para CPU', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: 'Estándar moderno usual FileSystem GNU', difficulty: 2 },
  { prompt: 'ln _____ /archivo /enlace', answer: '-s', hint: 'Bandera Symbolic, blandae (soft)', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'Migrar perfil de RunLevel en marcha', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: 'Para generar nuevos ficheros rw-r--r- / carpetas rwxr-x-r-x', difficulty: 3 },
  { prompt: 'sed "s/viejo/nuevo/_____" archivo', answer: 'g', hint: 'Global por default en comandos texto regex', difficulty: 3 },
  { prompt: 'grep -_____ "error|alerta" file', answer: 'E', hint: 'Versión del regex (Extended pattern mode)', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: 'Bandera PID', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: 'Arranque del sistema',
    question: 'Ordena cronológicamente',
    items: [
      { text: 'Kernel inicialización', order: 3 },
      { text: 'Módulo SystemD general', order: 4 },
      { text: 'Lectura Firmware POST BIOS', order: 1 },
      { text: 'Lanzamiento del Kernel con Bootloader GRUB', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: 'Niveles SysV',
    question: 'Equivalencias SysV init',
    items: [
      { text: 'SysVinit Fase de Arranque Nro 3', matches: 'multi-user.target' },
      { text: 'SysVinit Fase UI de Arranque Nro 5', matches: 'graphical.target' },
      { text: 'SysVinit Consola Arranque Nro 1', matches: 'rescue.target' },
      { text: 'SysVinit Reboot Arranque Control Fase Cero', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: 'Paqueteria',
    question: 'A qué ecosistema perternece el comando',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RedHat / RPM' },
      { text: 'dnf install', category: 'RedHat / RPM' },
      { text: 'zypper install', category: 'RedHat / RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: 'Formato Permisos ',
    question: 'Ordena el patrón de acceso de rwx r - x - octal numerico',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic1-1', description: 'Revisa de inmediato componentes conectadas al Hardware bus ', prompt: 'lspci', expectedOutput: 'VGA compatible controller', hint: 'Inserta comando lspci', difficulty: 1 },
  { id: 'tc-lpic1-2', description: 'Confirma target en default por tu instalador original ', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Prueba la lectura \'systemctl get-...\'', difficulty: 1 },
  { id: 'tc-lpic1-3', description: 'Identifica controladores internos inyectados sobre SO ', prompt: 'lsmod', expectedOutput: 'Module', hint: 'Comando lsmod', difficulty: 1 },
  { id: 'tc-lpic1-4', description: 'Consulta al Virtual File el procesador exacto implementado', prompt: 'cat /proc/cpuinfo', expectedOutput: 'model name', hint: 'Utiliza comando base \'cat\' y luego la estructura /proc correspondiente', difficulty: 1 },
  { id: 'tc-lpic1-5', description: 'Audita el estado porcentual y capacidad instalada global sobre puntos activos en GB y MB de interfaz lectura rápida \'-h\'', prompt: 'df -h', expectedOutput: 'Filesystem', hint: 'Usa Disk Free', difficulty: 1 },
  { id: 'tc-lpic1-6', description: 'Haz uso avanzado de iteración estructural bajo \'find\' por \'/etc\' detectando nombres puros \'.conf\' e identifica todo', prompt: 'find /etc -name "*.conf"', expectedOutput: '.conf', hint: 'Aplica comillas "*.conf"', difficulty: 2 },
  { id: 'tc-lpic1-7', description: 'Evalúa solo comienzo archivo matriz /etc/passwd con cabecera limitando la output a 5 párrafos', prompt: 'head -n 5 /etc/passwd', expectedOutput: 'root:', hint: 'Asegurate de incluir parametro -n con digito y lugar', difficulty: 1 },
  { id: 'tc-lpic1-8', description: 'Recuento aritmético de Word Count global para calcular tamaño base listas usuarios passwd', prompt: 'wc -l /etc/passwd', expectedOutput: '[0-9]+', hint: 'Especifica conteo exclusvo lineas mediante letra "-l"', difficulty: 1 },
  { id: 'tc-lpic1-9', description: 'Categorización de tipo binario sobre el core coreutils "ls"', prompt: 'file /usr/bin/ls', expectedOutput: 'ELF', hint: 'Intenta con el comando base de validación "file"', difficulty: 2 },
  { id: 'tc-lpic1-10', description: 'Auditoria de empaquetador del /vi /vim desde instalados Deb', prompt: 'dpkg -S /usr/bin/vim', expectedOutput: 'vim', hint: 'Utiliza el comando -S derivado de Search en dpkg', difficulty: 2 },
  { id: 'tc-lpic1-11', description: 'Correlaciona discos y Particiones locales UUID block mapping ', prompt: 'blkid', expectedOutput: 'UUID=', hint: 'Usa blkid', difficulty: 2 },
  { id: 'tc-lpic1-12', description: 'Desglosar atributos sobre /passwd para entender los permisos integrados', prompt: 'ls -l /etc/passwd', expectedOutput: '-rw-r--r--', hint: 'Agrega Long list layout (l)', difficulty: 1 },
  { id: 'tc-lpic1-13', description: 'Desglosar ubicación metadata exacta en disco HDD / Sistema de base node / de configuración IP máquina', prompt: 'ls -i /etc/hostname', expectedOutput: '[0-9]+', hint: 'Agrega Inode view mode (i)', difficulty: 2 },
  { id: 'tc-lpic1-14', description: 'Validación LDD sobre "ls" puro o /bin/ls original', prompt: 'ldd /bin/ls', expectedOutput: 'libc.so', hint: 'Utriliza LDD List dynamic', difficulty: 2 },
  { id: 'tc-lpic1-15', description: 'Detecta en Uname el \'Release / Version\' del programa actual corriendo la terminal', prompt: 'uname -r', expectedOutput: '[0-9]+\\.[0-9]+', hint: 'Usa de param uname un r Release', difficulty: 1 },
]
