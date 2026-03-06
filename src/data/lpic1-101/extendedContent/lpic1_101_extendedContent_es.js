// LPIC-1 101 Extended Content — Spanish

export const lpic1_101_extendedContent_es = {
  1: {
    title: 'Arquitectura del Sistema — Profundización',
    content: `
## 🖥️ BIOS vs UEFI
El **BIOS** (Basic Input/Output System) es el firmware tradicional que inicializa el hardware y carga el gestor de arranque desde el MBR.
La **UEFI** (Unified Extensible Firmware Interface) es el sucesor moderno: admite discos GPT > 2TB, Secure Boot, interfaz gráfica y un arranque más rápido.

## 📁 Directorios Virtuales del Kernel
- **/proc** — Sistema de archivos virtual con información del sistema y núcleo (cpuinfo, meminfo, partitions)
- **/sys** — sysfs, expone la jerarquía de dispositivos y controladores del kernel
- **/dev** — Nodos de dispositivo, creados dinámicamente por udev

## 🔧 Módulos del Kernel
El kernel de Linux es modular: los controladores se pueden cargar/descargar en tiempo de ejecución.
- \`lsmod\` — Listar módulos cargados
- \`modprobe modulo\` — Cargar módulo con dependencias
- \`modprobe -r modulo\` — Eliminar módulo
- \`modinfo modulo\` — Información detallada
- Configuración persistente: \`/etc/modules-load.d/\`

## ⚡ Proceso de Arranque
1. **Firmware** (BIOS/UEFI) → POST, inicializa hardware
2. **Bootloader** (GRUB2) → Carga el kernel y el initramfs
3. **Kernel** → Inicializa controladores, monta initramfs
4. **init/systemd** (PID 1) → Inicia los servicios según los targets

## 🎯 Targets de systemd vs Runlevels de SysVinit
| Runlevel | Target de systemd | Descripción |
|---|---|---|
| 0 | poweroff.target | Apagado |
| 1 | rescue.target | Monousuario (mantenimiento) |
| 3 | multi-user.target | Multiusuario en modo texto |
| 5 | graphical.target | Multiusuario con GUI |
| 6 | reboot.target | Reinicio |
    `,
  },
  2: {
    title: 'Instalación y Gestión de Paquetes — Profundización',
    content: `
## 💾 Particionado del Disco
Un buen esquema incluye: \`/\` (raíz), \`/boot\` (250-512MB), \`/home\` (datos de usuario), \`swap\` (1-2x de RAM).
**MBR** admite hasta 4 particiones primarias y discos de 2TB. **GPT** admite hasta 128 particiones y discos de 8ZiB.

## 📦 Gestión de Paquetes
### Debian/Ubuntu (dpkg/apt)
- \`dpkg -i file.deb\` — Instalar localmente
- \`apt install paquete\` — Instalar desde repositorios (resuelve dependencias)
- \`apt update && apt upgrade\` — Actualizar el sistema
- \`dpkg -S /ruta/archivo\` — Buscar el paquete propietario del archivo

### RHEL/Fedora (rpm/dnf)
- \`rpm -i file.rpm\` — Instalar localmente
- \`dnf install paquete\` — Instalar desde repositorios
- \`rpm -qa\` — Listar todos los paquetes instalados
- \`rpm -qf /ruta/archivo\` — Buscar el paquete propietario del archivo

## 🔗 Bibliotecas Compartidas
Las bibliotecas \`.so\` (shared objects) se cargan en tiempo de ejecución y se comparten entre procesos.
- \`ldd /usr/bin/ls\` — Mostrar dependencias
- \`ldconfig\` — Actualizar la caché en \`/etc/ld.so.cache\`
- \`LD_LIBRARY_PATH\` — Directorios adicionales de bibliotecas

## ☁️ Virtualización y Nube
- **Tipo 1** (bare-metal): KVM, Xen, ESXi — directamente sobre el hardware
- **Tipo 2** (hosted): VirtualBox, VMware Workstation — sobre un SO anfitrión
- **Contenedores**: Docker, Podman — comparten el kernel del anfitrión
- **Nube**: IaaS (Máquinas Virtuales), PaaS (Plataforma), SaaS (Software)
    `,
  },
  3: {
    title: 'Comandos GNU y Unix — Profundización',
    content: `
## ⌨️ El Shell Bash
Bash es el shell estándar en Linux. Conceptos básicos:
- **Variables**: \`VAR=valor\`, \`export VAR\`, \`$VAR\`, \`\${VAR}\`
- **Comillado**: \`'literal'\`, \`"expande el valor de $VAR"\`, \`\\escape\`
- **Historial**: flecha arriba, \`Ctrl+R\`, \`!n\`, \`history\`
- **Globbing**: \`*\` (todo), \`?\` (un carácter), \`[abc]\` (un conjunto de caracteres)

## 📝 Filtros de Texto
\`\`\`bash
# Contar archivos .conf en /etc
find /etc -name "*.conf" | wc -l

# Los 10 directorios más grandes
du -sh /* 2>/dev/null | sort -rh | head -10

# Usuarios con shell bash
grep "/bin/bash$" /etc/passwd | cut -d: -f1 | sort
\`\`\`

## 🔀 Redirecciones y Pipes
| Operador | Significado |
|---|---|
| \`>\` | stdout → a archivo (sobrescribe) |
| \`>>\` | stdout → a archivo (añade) |
| \`2>\` | stderr → a archivo |
| \`&>\` | stdout + stderr → a archivo |
| \`<\` | leer archivo → a stdin |
| \`|\` | stdout → a stdin del siguiente comando |
| \`tee\` | stdout → a archivo + mostrar por terminal |

## ⚙️ Gestión de Procesos
- **Señales importantes**: SIGTERM (15, salida limpia), SIGKILL (9, matar de forma forzada), SIGINT (2, Ctrl+C)
- **Control de trabajos**: \`&\` (en segundo plano), \`Ctrl+Z\` (suspender), \`fg\` (pasar a primer plano), \`bg\` (reanudar en segundo plano)
- **nice/renice**: de -20 (máxima prioridad) a +19 (mínima prioridad)

## 🔍 Expresiones Regulares
| Símbolo | BRE | ERE | Significado |
|---|---|---|---|
| \`.\` | ✓ | ✓ | Cualquier carácter |
| \`*\` | ✓ | ✓ | Cero o más coincidencias |
| \`+\` | \\+ | ✓ | Una o más coincidencias |
| \`?\` | \\? | ✓ | Cero o una coincidencia |
| \`^\` | ✓ | ✓ | Principio de la línea |
| \`$\` | ✓ | ✓ | Final de la línea |
    `,
  },
  4: {
    title: 'Dispositivos, Sistemas de Archivos y FHS — Profundización',
    content: `
## 💿 Particiones y Sistemas de Archivos
- **fdisk**: crear particiones interactivamente en MBR
- **gdisk**: específico para particiones GPT
- **parted**: soporta tanto MBR como GPT, los cambios se aplican de inmediato
- **mkfs.ext4**, **mkfs.xfs**: comandos para formatear partiones

## 🔧 Integridad y Mantenimiento
- **fsck**: verificar y reparar sistemas de archivos (¡sólo partiones desmontadas!)
- **df -h**: espacio en disco de particiones montadas
- **du -sh /dir**: tamaño total consumido por un directorio
- **tune2fs**: ajustar parámetros persistentes para ext2/3/4
- **xfs_repair**: la herramienta para reparar sistemas XFS

## 📂 Montar Dispositivos
El archivo \`/etc/fstab\` sirve para montar particiones durante el arranque y contiene 6 campos (dispositivo, punto de montaje, sistema de archivos, opciones, dump, y fsck-pass):
\`\`\`
UUID=xxxx  /home  ext4  defaults  0  2
\`\`\`

## 🔐 Permisos Especiales
| Permiso | Sistema Octal | En archivo | En directorio |
|---|---|---|---|
| SUID | 4000 | Se ejecuta como propietario | — |
| SGID | 2000 | Se ejecuta como grupo | Nuevos archivos heredan el grupo |
| Sticky | 1000 | — | Solo el propietario puede eliminarlo |

## 🗂️ FHS (Estándar de Jerarquía del Sistema de Archivos)
| Directorio | Propósito |
|---|---|
| / | Sistema de Archivos Raíz |
| /bin, /sbin | Binarios del sistema y esenciales |
| /etc | Archivos de configuración |
| /home | Carpetas de usuario |
| /var | Datos variables (bases de datos, colas) |
| /tmp | Archivos temporales |
| /usr | Programas de usuario |
| /opt | Software opcional |
| /srv | Datos de servicios web y ftp |
| /proc, /sys | Archivos virtuales (del Kernel y procesos) |
    `,
  },
}
