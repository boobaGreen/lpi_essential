// LPIC-1 102 Lesson Content — Spanish
// Contenido de las 20+ lecciones del examen 102

export const lpic1_102_lessonContent_es = {
  // ──── Topic 105: Shells y Shell Scripting ────
  'lpic1-102-105-1': {
    title: "Personalizar el Entorno Shell",
    comic: {
      title: 'Tu Hogar Digital 🏠',
      panels: [
        { emoji: '🎒', text: 'Archivos de config: /etc/profile es para todos, ~/.bashrc es tu mochila personal.' },
        { emoji: '🗺️', text: 'PATH: El mapa de la shell. ¡Si no está en la lista, la shell no encuentra el comando!' },
        { emoji: '🔦', text: 'Alias: ll=\'ls -la\'. No escribas kilómetros de código, usa atajos.' },
        { emoji: '📦', text: '/etc/skel: El botiquín de primeros auxilios. Los nuevos usuarios reciben estos archivos base.' },
      ]
    },
    keyPoints: [
      { title: 'Archivos de Configuración', items: ['/etc/profile — Global (Login)', '~/.bashrc — Personal (Interactivo)', '/etc/skel/ — Plantilla para nuevos usuarios'] },
      { title: 'Variables de Entorno', items: ['export — Pasa variables a los hijos', 'PATH — Dónde buscar programas', 'env / printenv — Listar variables'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Escribir Scripts Simples",
    comic: {
      title: 'El Robot de Bash 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash. Le dice al kernel: "¡Oye, usa Bash para esto!"' },
        { emoji: '🏃', text: 'Chmod +x: Sin permiso de ejecución, tu script es solo una piedra.' },
        { emoji: '🔀', text: 'If/Then/Else: El cerebro del script. Toma decisiones basadas en pruebas.' },
        { emoji: '🔄', text: 'Bucles (For/While): Repite una tarea 100 veces sin cansarte.' },
      ]
    },
    keyPoints: [
      { title: 'Estructura', items: ['#!/bin/bash — El Shebang', 'chmod +x script.sh — Crucial', 'exit [0-255] — Estado de salida (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Hola $USER"', 
      output: 'Hola root' 
    },
  },

  // ──── Topic 106: Interfaces de Usuario y Desktops ────
  'lpic1-102-106-1': { title: "Instalar y Configurar X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "Escritorios Gráficos", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Accesibilidad", terminal: { prompt: '$ orca --setup', output: '[Menú del lector de pantalla]' } },

  // ──── Topic 107: Tareas Administrativas ────
  'lpic1-102-107-1': { title: "Gestionar Cuentas de Usuario y Grupo", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "Automatización (Cron y Timers)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Localización", terminal: { prompt: '$ locale', output: 'LANG=es_ES.UTF-8' } },

  // ──── Topic 108: Servicios Esenciales del Sistema ────
  'lpic1-102-108-1': { title: "Sincronización de Hora (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Logging (Rsyslog y Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Mail MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'La cola de correo está vacía' } },
  'lpic1-102-108-4': { title: "Impresión (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'la impresora PDF está inactiva.' } },

  // ──── Topic 109: Fundamentos de Redes ────
  'lpic1-102-109-1': { title: "Protocolos de Internet (TCP/IP)", keyPoints: [{ title: 'Pila', items: ['IPv4/IPv6 — Direcciones', 'TCP/UDP — Transporte', 'ICMP — Diagnóstico'] }] },
  'lpic1-102-109-2': { title: "Configuración de Red", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Resolución de Problemas de Red", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "Configuración DNS", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Seguridad ────
  'lpic1-102-110-1': { title: "Tareas de Seguridad", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "Seguridad del Host", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Cifrado (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
