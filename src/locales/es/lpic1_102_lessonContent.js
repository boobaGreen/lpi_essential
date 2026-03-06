export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "Personalizar el Entorno de la Shell",
    content: `
Personalizar el entorno de la shell permite optimizar el flujo de trabajo. Los archivos de configuración se cargan al iniciar la shell.

### Archivos de Configuración (Bash)
- **/etc/profile**: Configuración global para todos los usuarios (shell de inicio de sesión).
- **/etc/bash.bashrc**: Configuración global (shell interactiva sin inicio de sesión).
- **~/.bash_profile**, **~/.bash_login**, **~/.profile**: Configuraciones específicas del usuario (inicio de sesión). Bash busca estos en orden y carga el primero que encuentra.
- **~/.bashrc**: El archivo más utilizado para alias y variables personales.
- **~/.bash_logout**: Se ejecuta al cerrar una sesión de inicio de sesión.

### Variables de Entorno y Alias
- **export**: Hace que una variable esté disponible para los procesos hijos.
- **PATH**: Define los directorios donde la shell busca ejecutables.
- **alias**: Crea atajos para comandos complejos (ej., \`alias ll='ls -la'\`).

### Directorio Skeleton
- **/etc/skel/**: Contiene archivos predeterminados que se copian a los directorios de inicio de los nuevos usuarios (ej., \`.bashrc\`).
    `
  },
  '105.2': {
    title: "Personalizar o Escribir Scripts Simples",
    content: `
El scripting de la shell automatiza tareas repetitivas.

### Estructura del Script
- **Shebang (#!)**: La primera línea indica el intérprete (ej., \`#!/bin/bash\`).
- **Permisos**: El script debe ser ejecutable (\`chmod +x script.sh\`).

### Construcciones Fundamentales
- **Variables**: Asignación sin espacios (\`VAR="valor"\`), acceso con \`$\` (\`$VAR\`).
- **Argumentos**: \`$1, $2, ...\` son parámetros; \`$#\` es el número de argumentos.
- **Condiciones**: \`if [ condición ]; then ... fi\`.
- **Bucles**: \`for\`, \`while\`.

### Operadores Lógicos
- **&&**: Ejecuta el segundo comando solo si el primero tiene éxito.
- **||**: Ejecuta el segundo comando solo si el primero falla.
    `
  },

  // --- TOPIC 106: USER INTERFACES AND DESKTOPS ---
  '106.1': {
    title: "Instalar y Configurar X11",
    content: `
X Window System (X11) es el marco base para interfaces gráficas en Linux.

### Arquitectura X11
- **Servidor X**: Gestiona el hardware (monitor, ratón, teclado).
- **Cliente X**: La aplicación gráfica.
- **Transparencia de red**: El cliente puede ejecutarse en un host diferente al del servidor.

### Utilidades
- **xdpyinfo**: Muestra información sobre el servidor X actual.
- **xhost**: Controla qué usuarios/vía red pueden acceder al servidor X.
- **DISPLAY**: Variable de entorno que indica dónde enviar la salida gráfica.
    `
  },
  '106.2': {
    title: "Escritorios Gráficos",
    content: `
Los Entornos de Escritorio (DE) proporcionan una experiencia de usuario completa.

### Componentes Comunes
- **Window Manager (WM)**: Gestiona la posición y bordes de las ventanas (ej., Mutter, KWin).
- **Display Manager (DM)**: Gestiona el inicio de sesión gráfico (ej., GDM, LightDM).

### Escritorios Populares
- **GNOME**: Moderno y simple. Usa GTK.
- **KDE Plasma**: Muy personalizable. Usa Qt.
- **XFCE / LXQt**: Ligeros, ideales para hardware antiguo.
    `
  },
  '106.3': {
    title: "Accesibilidad",
    content: `
Linux ofrece herramientas para que el sistema sea utilizable por personas con discapacidades.

### Tecnologías de Asistencia
- **Lectores de pantalla**: Orca (para GNOME).
- **Teclados en pantalla**: Onboard.

### Funciones comunes
- **Sticky Keys**: Permite presionar teclas modificadoras en secuencia.
- **Slow Keys**: La tecla debe presionarse durante un tiempo antes de ser aceptada.
- **Bounce Keys**: Ignora presiones repetidas rápidas de la misma tecla.
    `
  },

  // --- TOPIC 107: ADMINISTRATIVE TASKS ---
  '107.1': {
    title: "Gestionar Cuentas de Usuario y Grupos",
    content: `
La gestión de usuarios es esencial para la seguridad del sistema.

### Archivos de Usuario y Grupo
- **/etc/passwd**: Información de cuentas (UID, GID, home, shell).
- **/etc/group**: Información de grupos.
- **/etc/shadow**: Almacena hashes de contraseñas (solo legible por root).

### Comandos
- **useradd / userdel**: Crear o eliminar usuarios.
- **passwd**: Cambiar contraseña.
- **chage**: Gestionar la expiración de contraseñas.
- **id**: Muestra UID y GID.
    `
  },
  '107.2': {
    title: "Automatización (Cron y Systemd Timers)",
    content: `
### Cron
- **crontab -e**: Edita la tabla cron del usuario.
- **Formato**: \`min hora día mes día_semana comando\`.

### Systemd Timers
- Alternativa moderna a cron, integrada con systemd.
- Requiere un archivo **.service** y un archivo **.timer**.

### At
- **at**: Ejecuta un comando una vez en el futuro.
- **atq**: Muestra la cola de trabajos.
    `
  },
  '107.3': {
    title: "Localización e Internacionalización",
    content: `
### Variables Locale
- **LANG**: Variable principal de idioma.
- **LC_ALL**: Sobrescribe todos los ajustes locale.
- **locale**: Comando para ver ajustes actuales.

### Zona Horaria
- **/etc/localtime**: Enlace simbólico al archivo de zona horaria.
- **timedatectl**: Herramienta moderna para gestionar hora y zona.
    `
  },

  // --- TOPIC 108: ESSENTIAL SYSTEM SERVICES ---
  '108.1': {
    title: "Mantener la Hora del Sistema",
    content: `
### Relojes
- **Reloj de Sistema**: Gestionado por el kernel (Software).
- **Reloj de Hardware (RTC)**: Alimentado por batería (Hardware).
- **hwclock**: Gestiona el reloj de hardware.

### NTP (Network Time Protocol)
- **chrony / ntpd**: Demonios para sincronizar la hora vía red.
- **timedatectl set-ntp true**: Habilita la sincronización automática.
    `
  },
  '108.2': {
    title: "Registro del Sistema (Logging)",
    content: `
### Syslog
- **rsyslog**: Implementación común de syslog.
- **/var/log/**: Directorio de registros (ej., \`syslog\`, \`auth.log\`).
- **logrotate**: Rota y comprime registros antiguos para ahorrar espacio.

### Systemd Journal
- **journald**: Recoge registros en formato binario.
- **journalctl**: Comando para leer los registros.
    `
  },
  '108.3': {
    title: "Conceptos Básicos de MTA (E-mail)",
    content: `
### MTAs Comunes
- **Postfix**: Moderno y seguro.
- **Sendmail**: El estándar histórico.

### Comandos
- **mailq**: Muestra la cola de correo.
- **/etc/aliases**: Define alias de correo local.
    `
  },
  '108.4': {
    title: "Gestionar Impresoras e Impresión",
    content: `
### CUPS
- Sistema de impresión estándar en Linux.
- Interfaz web en \`localhost:631\`.

### Comandos lp
- **lp**: Envía un archivo a imprimir.
- **lpq**: Muestra el estado de la cola.
- **lprm**: Elimina un trabajo de la cola.
    `
  },

  // --- TOPIC 109: NETWORKING FUNDAMENTALS ---
  '109.1': {
    title: "Fundamentos de los Protocolos de Internet",
    content: `
### Direccionamiento IP
- **IPv4**: Direcciones de 32 bits (ej., 192.168.1.1).
- **IPv6**: Direcciones de 128 bits.
- **Máscara de Subred**: Determina la parte de red y host.

### Protocolos
- **TCP**: Garantiza la entrega (ej., HTTP).
- **UDP**: Rápido, sin conexión (ej., DNS).
- **ICMP**: Mensajes de control (ej., ping).
    `
  },
  '109.2': {
    title: "Configuración de Red Persistente",
    content: `
### Métodos
- **NetworkManager**: Estándar en escritorios (\`nmcli\`).
- **Netplan**: Usado en Ubuntu moderno (YAML).
- **/etc/network/interfaces**: Método tradicional Debian.

### Comandos
- **ip addr**: Muestra direcciones asignadas.
- **ifup / ifdown**: Activa o desactiva interfaces.
    `
  },
  '109.3': {
    title: "Resolución de Problemas de Red",
    content: `
### Herramientas
- **ping**: Verifica alcanzabilidad.
- **traceroute**: Muestra la ruta de los paquetes.
- **ss**: Muestra conexiones de red activas.
- **dig / host**: Consulta servidores DNS.
    `
  },
  '109.4': {
    title: "Configurar DNS del Lado del Cliente",
    content: `
### Archivos Clave
- **/etc/resolv.conf**: Especifica servidores DNS (nameserver).
- **/etc/hosts**: Mapeo estático local (prioridad sobre DNS).
- **/etc/nsswitch.conf**: Define el orden de búsqueda.
    `
  },

  // --- TOPIC 110: SECURITY ---
  '110.1': {
    title: "Tareas de Administración de Seguridad",
    content: `
### Permisos Especiales
- **SUID**: El archivo se ejecuta con privilegios del propietario.
- **SGID**: Con privilegios del grupo.
- **Sticky Bit**: Evita que otros usuarios borren tus archivos en carpetas comunes (ej., /tmp).

### Sudo
- **sudo**: Ejecuta comandos como root.
- **/etc/sudoers**: Archivo de configuración (\`visudo\`).
    `
  },
  '110.2': {
    title: "Configurar la Seguridad del Host",
    content: `
### Servicios
- Identificar servicios con \`ss -tulpn\`.
- Deshabilitar servicios innecesarios: \`systemctl disable\`.

### Restricciones
- **TCP Wrappers**: Control de acceso vía \`/etc/hosts.allow\` y \`/etc/hosts.deny\`.
    `
  },
  '110.3': {
    title: "Proteger Datos mediante Cifrado",
    content: `
### SSH
- **ssh-keygen**: Genera pares de llaves.
- **ssh-agent**: Gestiona llaves privadas en memoria.
- **/etc/ssh/sshd_config**: Configuración del servidor.

### GnuPG (GPG)
- **gpg -c**: Cifrado simétrico.
- **gpg --encrypt**: Cifrado usando llave pública del destinatario.
    `
  }
};
