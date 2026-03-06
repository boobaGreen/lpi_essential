// RHCSA Games Data — Spanish
// Used by useGameData() when courseId === 'rhcsa'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1
  { command: 'grep -r "pattern" /etc/', description: 'Busca recursivamente un patrón en /etc/' },
  { command: 'tar -czvf archive.tar.gz /dir', description: 'Crea un archivo comprimido gzip' },
  { command: 'tar -xzvf archive.tar.gz', description: 'Extrae un archivo tar.gz' },
  { command: 'find / -name "*.conf" -type f', description: 'Encuentra todos los archivos .conf en el sistema' },
  { command: 'chmod 755 file', description: 'rwxr-xr-x — dueño ejecuta, otros leen/ejecutan' },
  { command: 'chown mario:dev file', description: 'Cambia el propietario y grupo de un archivo' },
  { command: 'ln -s /real/src /symbolic/link', description: 'Crea un enlace simbólico' },
  { command: 'man -k "keyword"', description: 'Busca una palabra clave en páginas man' },
  // Topic 2
  { command: 'export VAR="value"', description: 'Hace que una variable esté disponible para subprocesos' },
  { command: 'RESULT=$(command)', description: 'Captura la salida de un comando en una variable' },
  { command: '[ -f "$FILE" ]', description: 'Comprueba si la variable apunta a un archivo existente' },
  { command: '[ -d "$DIR" ]', description: 'Comprueba si la variable apunta a un directorio existente' },
  { command: '[ -z "$VAR" ]', description: 'Comprueba si una cadena está vacía' },
  { command: 'for f in /etc/*.conf; do echo $f; done', description: 'Itera sobre todos los .conf en /etc/' },
  // Topic 3
  { command: 'systemctl enable --now sshd', description: 'Habilita e inicia sshd en un solo comando' },
  { command: 'systemctl mask httpd', description: 'Evita cualquier inicio del servicio httpd' },
  { command: 'systemctl set-default multi-user.target', description: 'Establece el boot target por defecto (CLI)' },
  { command: 'journalctl -u sshd -f', description: 'Sigue los logs del servicio sshd en tiempo real' },
  { command: 'kill -9 PID', description: 'Envía SIGKILL para terminar forzosamente un proceso' },
  { command: 'renice -n -5 -p PID', description: 'Cambia la prioridad de un proceso en ejecución' },
  // Topic 4
  { command: 'pvcreate /dev/sdb1', description: 'Inicializa una partición como Volumen Físico LVM' },
  { command: 'vgcreate datavg /dev/sdb1', description: 'Crea un Grupo de Volúmenes desde un PV' },
  { command: 'lvcreate -L 2G -n datalv datavg', description: 'Crea un Volumen Lógico de 2GiB' },
  { command: 'lvextend -L +1G -r /dev/vg/lv', description: 'Extiende LV y redimensiona el sistema de archivos' },
  { command: 'xfs_growfs /mountpoint', description: 'Expande un sistema de archivos XFS montado' },
  // Topic 5
  { command: 'mkfs.xfs /dev/sdb1', description: 'Formatea una partición con sistema de archivos XFS' },
  { command: 'cryptsetup luksFormat /dev/sdc1', description: 'Formatea una partición con cifrado LUKS' },
  { command: 'cryptsetup open /dev/sdc1 vault', description: 'Abre un contenedor LUKS como /dev/mapper/vault' },
  { command: 'setfacl -m u:mario:rw file', description: 'Añade permisos ACL para el usuario mario' },
  { command: 'getfacl file', description: 'Muestra entradas ACL extendidas de un archivo' },
  // Topic 6
  { command: 'dnf install package', description: 'Instala un paquete con todas sus dependencias' },
  { command: 'dnf provides /usr/bin/vim', description: 'Encuentra qué paquete proporciona un archivo/comando' },
  { command: 'rpm -qf /usr/bin/passwd', description: 'Encuentra el paquete propietario de un archivo instalado' },
  { command: 'rpm -ql package', description: 'Lista todos los archivos incluidos en un paquete' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Regenera la configuración de GRUB2' },
  // Topic 7
  { command: 'nmcli con mod ens3 ipv4.addresses 192.168.1.100/24', description: 'Establece una IP estática en una conexión' },
  { command: 'nmcli con up ens3', description: 'Activa y aplica configuración de red' },
  { command: 'firewall-cmd --add-service=http --permanent', description: 'Abre permantentemente el puerto 80' },
  { command: 'firewall-cmd --reload', description: 'Aplica reglas permanentes sin reiniciar' },
  { command: 'ssh-copy-id mario@server', description: 'Copia clave pública SSH al servidor remoto' },
  // Topic 8
  { command: 'useradd -m -s /bin/bash mario', description: 'Crea usuario con home y shell bash' },
  { command: 'usermod -aG wheel mario', description: 'Añade mario al grupo wheel (acceso sudo)' },
  { command: 'chage -M 90 mario', description: 'Establece caducidad de contraseña a 90 días' },
  { command: 'visudo', description: 'Edita /etc/sudoers de forma segura con validación' },
  { command: 'userdel -r mario', description: 'Elimina al usuario y su directorio home' },
  // Topic 9
  { command: 'getenforce', description: 'Muestra el modo SELinux actual' },
  { command: 'setenforce 0', description: 'Cambia SELinux a modo permisivo (temporal)' },
  { command: 'restorecon -Rv /path', description: 'Restaura contextos SELinux predeterminados recursivamente' },
  { command: 'setsebool -P httpd_can_network_connect on', description: 'Habilita un booleano de SELinux permanentemente' },
  { command: 'semanage port -a -t http_port_t -p tcp 8443', description: 'Añade puerto 8443 al tipo http_port_t' },
  // Topic 10
  { command: 'podman run -d --name web -p 8080:80 nginx', description: 'Inicia contenedor nginx en fondo en puerto 8080' },
  { command: 'podman exec -it container bash', description: 'Abre una consola bash en un contenedor en ejecución' },
  { command: 'podman build -t myapp:1.0 .', description: 'Construye imagen desde Containerfile en el directorio' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Nivel 1
  { text: 'El sistema de archivos por defecto en RHEL9 es XFS.', answer: true, explanation: 'XFS es el FS por defecto en RHEL7+ debido a su escalabilidad.', difficulty: 1 },
  { text: '"systemctl enable sshd" inicia el servicio inmediatamente.', answer: false, explanation: 'enable solo configura el autoreinicio al encender. Usa --now para iniciarlo a la vez.', difficulty: 1 },
  { text: 'El archivo /etc/fstab controla los FS montados automáticamente al arranque.', answer: true, explanation: 'systemd lee /etc/fstab al arrancar para montar ficheros configurados.', difficulty: 1 },
  { text: 'Un valor "nice" de -20 indica la prioridad CPU más alta.', answer: true, explanation: 'El rango va de -20 (más alta) a +19 (más baja).', difficulty: 1 },
  { text: 'SIGKILL (9) puede ser ignorada por un proceso.', answer: false, explanation: 'SIGKILL no se puede capturar, bloquear ni ignorar. Termina el proceso ya.', difficulty: 1 },
  { text: '"pvcreate" crea un Volumen Lógico en LVM.', answer: false, explanation: 'pvcreate inicializa un Volumen Físico. Los Volumenes Lógicos se crean con lvcreate.', difficulty: 1 },
  { text: 'SELinux en modo "permissive" bloquea violaciones de política.', answer: false, explanation: 'Permissive registra pero NO bloquea. Solo enforcing las bloquea.', difficulty: 1 },
  { text: 'Podman requiere un daemon root para funcionar.', answer: false, explanation: 'Podman no tiene daemon y soporta contenedores sin root, a diferencia de Docker.', difficulty: 1 },
  { text: '"restorecon" restaura los contextos SELinux originales.', answer: true, explanation: 'Restaura contextos según reglas definidas con semanage fcontext.', difficulty: 1 },
  { text: 'Un UUID cambia cada vez que se monta el dispositivo.', answer: false, explanation: 'El UUID es asignado al formatear y nunca cambia. Es permanente.', difficulty: 1 },
  // Nivel 2
  { text: '"lvextend -r" redimensiona el FS automáticamente tras extender el LV.', answer: true, explanation: 'La opción -r (resize) llama automáticamente a resize2fs o xfs_growfs.', difficulty: 2 },
  { text: '"firewall-cmd --add-port=8080/tcp" sin --permanent persiste al reiniciar.', answer: false, explanation: 'Sin --permanent la regla es temporal y se pierde al hacer reload o reiniciar.', difficulty: 2 },
  { text: '"semanage fcontext" aplica inmediatamente el contexto a los archivos.', answer: false, explanation: 'semanage añade la regla. Usar restorecon para aplicar.', difficulty: 2 },
  { text: '"usermod -G wheel mario" (sin -a) mantiene los grupos previos de mario.', answer: false, explanation: 'Sin -a, -G REEMPLAZA todos los grupos. Usar -aG para sumar.', difficulty: 2 },
  { text: 'XFS admite la reducción de un sistema de archivos.', answer: false, explanation: 'XFS SOLO puede crecer. No admite reducciones.', difficulty: 2 },
  { text: 'setsebool sin -P hace un cambio permanente.', answer: false, explanation: 'Sin -P el cambio se pierde en el reinicio.', difficulty: 2 },
  { text: 'El etiquetado ":z" en Podman indica un uso compartido de SELinux entre contenedores.', answer: true, explanation: ':z = compartido (shareable). :Z = uso privado exclusivo.', difficulty: 2 },
  { text: '"journalctl -b" muestra solo logs del arranque actual.', answer: true, explanation: '-b filtra los logs para mostrar solo los del arranque actual.', difficulty: 2 },
  // Nivel 3
  { text: 'Tras resetear root pw con rd.break, hay que usar "touch /.autorelabel".', answer: true, explanation: 'Modificar /etc/shadow necesita requetetado SELinux forzado con este archivo.', difficulty: 3 },
  { text: 'La opción "nosuid" de montado evita ejecutar binarios.', answer: false, explanation: 'nosuid ignora bits setuid. noexec es la que bloquea binarios.', difficulty: 3 },
  { text: 'En fstab, pass=2 significa chequeo fsck prioritario.', answer: false, explanation: 'pass=1 es root (alta). pass=2 escanea después de root.', difficulty: 3 },
  { text: '"systemctl daemon-reload" se requiere tras modificar un unit file.', answer: true, explanation: 'systemd cachea units; daemon-reload recarga desde el disco.', difficulty: 3 },
  { text: '"semanage port -a" añade un puerto sin reinicio de SELinux.', answer: true, explanation: 'semanage actualiza la BD de política, aplicándolo de momento.', difficulty: 3 },
  { text: '"mv" preserva el contexto SELinux del archivo original.', answer: true, explanation: 'mv preserva el SELinux de origen, que podría ser erróneo en destino.', difficulty: 3 },
  { text: '"rpm -V" lista los archivos con dependencias insatisfechas.', answer: false, explanation: 'rpm -V verifica integridad (checksum, tamaño, permisos) de los archivos.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Dificultad 1
  { prompt: 'systemctl _____ sshd', answer: 'enable --now', hint: 'habilitar e iniciar a la vez', difficulty: 1 },
  { prompt: 'dnf _____ httpd', answer: 'install', hint: 'instalar el paquete', difficulty: 1 },
  { prompt: 'useradd -m -s /bin/bash _____', answer: 'mario', hint: 'nombre del usuario', difficulty: 1 },
  { prompt: 'pvcreate _____', answer: '/dev/sdb1', hint: 'ruta de la partición', difficulty: 1 },
  { prompt: 'getenforce', answer: 'getenforce', hint: 'mostrar estado SELinux actual', difficulty: 1 },
  { prompt: 'firewall-cmd --add-service=http _____', answer: '--permanent', hint: 'hacer la regla permanente', difficulty: 1 },
  { prompt: 'podman _____ -it ubi9 /bin/bash', answer: 'run', hint: 'iniciar contenedor', difficulty: 1 },
  { prompt: 'tar -czvf backup.tar.gz _____', answer: '/etc/ssh/', hint: 'directorio a comprimir', difficulty: 1 },
  { prompt: 'passwd _____', answer: 'mario', hint: 'usuario al que poner contraseña', difficulty: 1 },
  { prompt: 'systemctl _____ httpd', answer: 'status', hint: 'comprueba el estado del servicio', difficulty: 1 },
  // Dificultad 2
  { prompt: 'vgcreate datavg _____', answer: '/dev/sdb1', hint: 'Volumen Físico a añadir', difficulty: 2 },
  { prompt: 'lvcreate _____ 2G -n datalv datavg', answer: '-L', hint: 'flag para especificar tamaño absoluto', difficulty: 2 },
  { prompt: 'lvextend -L +1G _____ /dev/datavg/datalv', answer: '-r', hint: 'redimensionar también el sistema de archivos', difficulty: 2 },
  { prompt: 'setenforce _____', answer: '0', hint: 'modo permisivo', difficulty: 2 },
  { prompt: 'usermod _____ wheel mario', answer: '-aG', hint: 'añadir grupo SIN quitar otros', difficulty: 2 },
  { prompt: 'chage _____ 90 mario', answer: '-M', hint: 'edad máxima de la contraseña en días', difficulty: 2 },
  { prompt: 'firewall-cmd _____', answer: '--reload', hint: 'aplicar reglas permanentes', difficulty: 2 },
  { prompt: 'ssh-keygen -t _____', answer: 'ed25519', hint: 'algoritmo moderno recomendado', difficulty: 2 },
  { prompt: 'cryptsetup _____ /dev/sdc1', answer: 'luksFormat', hint: 'formatear con cifrado LUKS', difficulty: 2 },
  { prompt: 'grub2-mkconfig -o _____', answer: '/boot/grub2/grub.cfg', hint: 'ruta del archivo config GRUB2', difficulty: 2 },
  // Dificultad 3
  { prompt: 'semanage fcontext -a -t httpd_sys_content_t "_____"', answer: '/web(/.*)?', hint: 'regex para todos los archivos', difficulty: 3 },
  { prompt: 'restorecon _____ /var/www/html', answer: '-Rv', hint: 'recursivo y verboso', difficulty: 3 },
  { prompt: 'setsebool _____ httpd_can_network_connect on', answer: '-P', hint: 'hacer booleano permanente', difficulty: 3 },
  { prompt: 'podman run -v /data:/data:_____ nginx', answer: 'Z', hint: 'etiqueta SELinux privada', difficulty: 3 },
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'cambiar a un target sin reiniciar', difficulty: 3 },
  { prompt: 'mkfs._____ /dev/datavg/datalv', answer: 'xfs', hint: 'sistema de archivos por defecto', difficulty: 3 },
  { prompt: 'semanage port -a -t http_port_t -p tcp _____', answer: '8443', hint: 'puerto HTTPs alternativo', difficulty: 3 },
  { prompt: 'journalctl -u sshd _____ "1 hour ago"', answer: '--since', hint: 'filtrar desde un momento', difficulty: 3 },
  { prompt: 'rpm -_____ /usr/bin/passwd', answer: 'qf', hint: 'query: de qué paquete es este archivo', difficulty: 3 },
  { prompt: 'nmcli con mod ens3 ipv4.method _____', answer: 'manual', hint: 'modo IP estática (no DHCP)', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-lvm-order',
    category: 'Orden Correcto de LVM',
    question: 'Arrastra los comandos de LVM en su orden:',
    items: [
      { text: 'lvcreate -L 2G -n datalv datavg', order: 3 },
      { text: 'mkfs.xfs /dev/datavg/datalv', order: 4 },
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
    ],
  },
  {
    id: 'dd-selinux-modes',
    category: 'Modos de SELinux',
    question: 'Empareja el comportamiento con el modo:',
    items: [
      { text: 'Bloquea Y registra violaciones', matches: 'Enforcing' },
      { text: 'Solo registra, no bloquea', matches: 'Permissive' },
      { text: 'Desactiva complemente SELinux', matches: 'Disabled' },
    ],
  },
  {
    id: 'dd-systemd-match',
    category: 'Targets de systemd',
    question: 'Empareja el target con su runlevel equivalente:',
    items: [
      { text: 'multi-user.target', matches: 'Runlevel 3 (CLI)' },
      { text: 'graphical.target', matches: 'Runlevel 5 (GUI)' },
      { text: 'rescue.target', matches: 'Runlevel 1 (Un usuario)' },
    ],
  },
  {
    id: 'dd-firewall-cmds',
    category: 'Clasificación de Reglas Firewall',
    question: 'Clasifica los comandos como temporales o permanentes:',
    items: [
      { text: 'firewall-cmd --add-service=http', category: 'Temporal' },
      { text: 'firewall-cmd --add-service=http --permanent', category: 'Permanente' },
      { text: 'firewall-cmd --add-port=8080/tcp', category: 'Temporal' },
      { text: 'firewall-cmd --add-port=8080/tcp --permanent', category: 'Permanente' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-rhcsa-1', description: 'Muestra el modo actual de SELinux', prompt: 'getenforce', expectedOutput: 'Enforcing', hint: 'Usa getenforce', difficulty: 1 },
  { id: 'tc-rhcsa-2', description: 'Muestra el target systemd por defecto', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Usa systemctl get-default', difficulty: 1 },
  { id: 'tc-rhcsa-3', description: 'Muestra dispositivos de bloque', prompt: 'lsblk', expectedOutput: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS', hint: 'Usa lsblk', difficulty: 1 },
  { id: 'tc-rhcsa-4', description: 'Busca qué paquete provee /usr/bin/vim', prompt: 'dnf provides */vim', expectedOutput: 'vim-enhanced', hint: 'Usa dnf provides', difficulty: 2 },
  { id: 'tc-rhcsa-5', description: 'Pide paquete de /usr/bin/passwd', prompt: 'rpm -qf /usr/bin/passwd', expectedOutput: 'passwd-', hint: 'Usa rpm -qf', difficulty: 1 },
  { id: 'tc-rhcsa-6', description: 'Puertos SELinux para http_port_t', prompt: 'semanage port -l | grep http_port_t', expectedOutput: 'http_port_t', hint: 'Usa semanage port -l', difficulty: 2 },
  { id: 'tc-rhcsa-7', description: 'Encuentra PID de sshd', prompt: 'pgrep sshd', expectedOutput: '[0-9]+', hint: 'Usa pgrep', difficulty: 1 },
  { id: 'tc-rhcsa-8', description: 'Muestra espacio en disco', prompt: 'df -Th', expectedOutput: 'Filesystem', hint: 'Usa df -Th', difficulty: 1 },
  { id: 'tc-rhcsa-9', description: 'Lista conexiones de red con nmcli', prompt: 'nmcli connection show', expectedOutput: 'NAME', hint: 'Usa nmcli', difficulty: 2 },
  { id: 'tc-rhcsa-10', description: 'Muestra contenedores Podman', prompt: 'podman ps', expectedOutput: 'CONTAINER ID', hint: 'Usa podman ps', difficulty: 1 },
  { id: 'tc-rhcsa-11', description: 'Booleanos SELinux sobre httpd', prompt: 'getsebool -a | grep httpd', expectedOutput: 'httpd_', hint: 'Usa getsebool', difficulty: 2 },
  { id: 'tc-rhcsa-12', description: 'Crea /test y muestra su contexto SELinux', prompt: 'mkdir /test && ls -Zd /test', expectedOutput: 'default_t', hint: 'Usa mkdir y ls -Zd', difficulty: 3 },
  { id: 'tc-rhcsa-13', description: 'Muestra VG LVM disponibles', prompt: 'vgs', expectedOutput: 'VG', hint: 'Usa vgs', difficulty: 2 },
  { id: 'tc-rhcsa-14', description: '10 últimos logs de httpd', prompt: 'journalctl -u httpd -n 10', expectedOutput: 'httpd', hint: 'Usa journalctl', difficulty: 2 },
  { id: 'tc-rhcsa-15', description: 'Cortafuegos en la zona public', prompt: 'firewall-cmd --zone=public --list-all', expectedOutput: 'public', hint: 'Usa firewall-cmd', difficulty: 2 },
]
