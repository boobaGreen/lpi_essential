export const memoryGameData = [
  { command: 'export', description: 'Define variable globalmente' },
  { command: 'alias', description: 'Atajos de comandos' },
  { command: 'source', description: 'Ejecuta script en shell actual' },
  { command: '/etc/skel', description: 'Plantilla para nuevos usuarios' },
  { command: 'DISPLAY', description: 'Destino de salida gráfica X11' },
  { command: 'Wayland', description: 'Sucesor moderno de X11' },
  { command: 'Orca', description: 'Lector de pantalla (Accesibilidad)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Contraseñas cifradas' },
  { command: 'chage', description: 'Gestiona expiración de claves' },
  { command: 'crontab -e', description: 'Edita tareas programadas' },
  { command: 'at', description: 'Ejecución única diferida' },
  // Topic 108
  { command: 'hwclock', description: 'Gestiona reloj de hardware' },
  { command: 'journalctl', description: 'Lee logs de systemd' },
  { command: 'logrotate', description: 'Rotación automática de logs' },
  { command: 'CUPS', description: 'Sistema de impresión' },
  // Topic 109
  { command: 'ip addr', description: 'Muestra direcciones IP' },
  { command: 'nmcli', description: 'Configura red vía CLI' },
  { command: 'ping', description: 'Prueba conectividad' },
  { command: 'dig', description: 'Consulta DNS' },
  // Topic 110
  { command: 'SUID', description: 'Permiso especial de ejecución' },
  { command: 'visudo', description: 'Edición segura de sudoers' },
  { command: 'ssh-keygen', description: 'Genera claves SSH' },
];

export const trueFalseData = [
  { text: '/etc/skel se usa para crear el home de nuevos usuarios.', answer: true, explanation: '¡Correcto! Es el esqueleto del home.', difficulty: 1 },
  { text: 'El shebang #! debe ir al final del script.', answer: false, explanation: 'Falso. Debe ser la primera línea.', difficulty: 1 },
  { text: 'X11 permite ejecutar aplicaciones gráficas por red.', answer: true, explanation: 'Verdadero. X11 es transparente a la red.', difficulty: 1 },
  { text: 'Wayland no es compatible con el hardware antiguo.', answer: false, explanation: 'Depende del driver, pero no es su definición.', difficulty: 2 },
  { text: '/etc/passwd guarda las contraseñas en texto claro.', answer: false, explanation: 'Falso. No se guardan ahí, sino en shadow (cifradas).', difficulty: 1 },
  { text: 'CRON permite programar tareas periódicas.', answer: true, explanation: '¡Correcto! Es el programador estándar.', difficulty: 1 },
  { text: 'journalctl lee archivos de log en texto plano.', answer: false, explanation: 'Falso. El journal de systemd es binario.', difficulty: 2 },
  { text: 'La puerta por defecto de CUPS es 631.', answer: true, explanation: 'Correcto.', difficulty: 1 },
  { text: 'El comando "ip" reemplaza a "ifconfig".', answer: true, explanation: 'Verdadero.', difficulty: 1 },
  { text: 'SSH usa la puerta 22 por defecto.', answer: true, explanation: 'Correcto.', difficulty: 1 },
];

export const terminalChallengeData = [
  { id: 'tc-es-1', description: 'Exporta VAR con valor 10', prompt: 'export VAR=10', expectedOutput: '', hint: 'Usa export', difficulty: 1 },
  { id: 'tc-es-2', description: 'Muestra info del servidor X', prompt: 'xdpyinfo', expectedOutput: '', hint: 'xdpyinfo', difficulty: 2 },
  { id: 'tc-es-3', description: 'Muestra tu UID', prompt: 'id', expectedOutput: '', hint: 'Gid/Uid', difficulty: 1 },
  { id: 'tc-es-4', description: 'Sigue los logs en tiempo real', prompt: 'journalctl -f', expectedOutput: '', hint: '-f flag', difficulty: 2 },
  { id: 'tc-es-5', description: 'Prueba conexión a google.com', prompt: 'ping google.com', expectedOutput: '', hint: 'ping', difficulty: 1 },
  { id: 'tc-es-6', description: 'Genera llaves SSH', prompt: 'ssh-keygen', expectedOutput: '', hint: 'ssh-keygen', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-es-1',
    category: 'Archivos de Configuración',
    question: 'Asocia el archivo con su propósito:',
    items: [
      { text: '/etc/profile', matches: 'Global Login' },
      { text: '~/.bashrc', matches: 'Usuario Interactivo' },
      { text: '/etc/skel', matches: 'Plantilla nuevos usuarios' },
    ],
  },
  {
    id: 'dd-es-2',
    category: 'Herramientas de Red',
    question: 'Asocia la herramienta:',
    items: [
      { text: 'ping', matches: 'Conectividad' },
      { text: 'dig', matches: 'DNS' },
      { text: 'ip', matches: 'Configuración IP' },
    ],
  }
];

export const fillGapData = [
  { prompt: '_____ VAR="x"', answer: 'export', hint: 'Variable global', difficulty: 1 },
  { prompt: 'Lector de pantalla: _____', answer: 'Orca', hint: 'GNOME accessibility', difficulty: 2 },
  { prompt: 'Puerto CUPS: _____', answer: '631', hint: 'Puerto numérico', difficulty: 1 },
  { prompt: 'Archivo DNS: /etc/_____.conf', answer: 'resolv', hint: 'resolv', difficulty: 1 },
];
