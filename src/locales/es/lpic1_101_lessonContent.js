// LPIC-1 101 Lesson Content — Spanish
// Contenido de las 28 lecciones

export const lpic1_101_lessonContent_es = {
  // ──── Topic 1: Arquitectura del Sistema ────
  'lpic1-101-1-1': {
    title: 'Hardware y Periféricos',
    comic: {
      title: 'Linux y el Hardware: Un Matrimonio Perfecto 🤝',
      panels: [
        { emoji: '⚙️', text: 'Al arrancar, el kernel escanea los buses PCI y USB per encontrar cada componente.' },
        { emoji: '📁', text: '¡Todo es un archivo! La info del hardware aparece en /proc y /sys como archivos de texto.' },
        { emoji: '🔌', text: 'udev crea los nodos en /dev (ej. /dev/sda) para que podamos usar los discos.' },
        { emoji: '🛠️', text: '¡lspci y lsusb son tus espectroscopios para ver qué hay bajo el capó!' },
      ]
    },
    keyPoints: [
      { title: 'FS Virtuales', items: ['/proc — Info dinámica (cpuinfo, meminfo)', '/sys — Estructura de buses y drivers', '/dev — Archivos especiales de dispositivos'] },
      { title: 'Herramientas', items: ['lspci — Lista dispositivos PCI/PCIe', 'lsusb — Lista periféricos USB', 'lsblk — Vista de árbol de bloques (discos)'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Proceso de Arranque',
    comic: {
      title: 'Del Encendido al Escritorio ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI: Ejecuta el POST y busca el gestor de arranque en el MBR o partición ESP.' },
        { emoji: '🐧', text: 'GRUB2: El guardia de tráfico que carga el Kernel y el initramfs en memoria.' },
        { emoji: '🧠', text: 'Kernel: Inicializa el hardware y monta el sistema de archivos raíz (/) final.' },
        { emoji: '🚀', text: 'Systemd: El primo proceso (PID 1) que inicia todos los servicios del sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Fases de Arranque', items: ['Firmware → Bootloader → Kernel → Init', 'dmesg — Lee los mensajes del kernel al arrancar', 'journalctl -b — Logs del último arranque'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: 'Runlevels y Targets systemd', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: Instalación y Gestión de Paquetes ────
  'lpic1-101-2-1': { title: 'Diseño del Disco Duro', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: 'Gestor de Arranque (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: 'Librerías Compartidas', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Paquetes Debian (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'Paquetes RPM y YUM/DNF', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Virtualización Linux', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: Comandos GNU y Unix ────
  'lpic1-101-3-1-1': { title: 'Línea de Comandos — Base', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: 'Línea de Comandos — Variables', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: 'Filtros de Texto', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: 'Gestión de Archivos — Base', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: 'Gestión de Archivos — Avanzada', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: 'Redirecciones y Pipes — Base', terminal: { prompt: '$ ls > lista.txt', output: '' } },
  'lpic1-101-3-4-2': { title: 'Redirecciones y Pipes — Avanzados', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: 'Procesos — Base', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: 'Procesos — Job Control', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: 'Prioridad de Procesos', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: 'Regex — Base', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: 'Regex — Extendidas', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'Editor vi/vim', terminal: { prompt: 'vi archivo.txt', output: '[Abre el editor]' } },

  // ──── Topic 4: Dispositivos, Filesystems y Estándar FHS ────
  'lpic1-101-4-1-1': { title: 'Particiones y Filesystems', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: 'Integridad de Filesystems', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: 'Montaje y Desmontaje', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: 'Permisos y Propiedad', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: 'Enlaces Hard y Soft', terminal: { prompt: '$ ln -s original link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS y Ubicación de Archivos', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
