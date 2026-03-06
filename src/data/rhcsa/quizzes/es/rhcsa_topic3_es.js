// RHCSA Quiz — Topic 3: Running System Management (Spanish)
// 22 MCQ questions

export const rhcsaTopic3QuizzesES = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué target de systemd equivale al antiguo runlevel 3 (multi-usuario, sin interfaz gráfica)?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: 'multi-user.target = runlevel 3 (CLI/Terminal). graphical.target = runlevel 5 (GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo cambias el target por defecto del sistema de forma permanente?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: 'systemctl set-default <target> establece el target fijo en el siguiente arranque, creando un symlink en /etc/systemd/system/default.target.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Durante el boot, ¿qué parámetro del kernel añades a GRUB para interrumpir el arranque y acceder a una shell de emergencia (rescue en RHCSA)?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: 'rd.break interrumpe el arranque en la fase initramfs, antes de montar /sysroot. Fundamental para restablecer el password de root en RHEL9.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Después de usar rd.break para resetear el password de root en RHEL9 con SELinux activo, ¿qué comando debes ejecutar obligatoriamente antes de reiniciar?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'touch /.autorelabel obliga a SELinux a re-etiquetar recursivamente todo el sistema de ficheros en el siguiente boot, lo cual es vital al haber modificado /etc/shadow sin contextos activos.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando lleva al sistema al rescue.target (usuario único/single-user) en caliente sin tener que reiniciar?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'systemctl isolate <target> apaga e inicia servicios dinámicamente para igualar el estado exacto del target solicitado de inmediato.',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo visualizas el target por defecto actual configurado en la máquina?',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: 'systemctl get-default imprime el target por defecto actual leyendo el enlace simbólico default.target.',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué señal envía `kill -9 <PID>` al sistema operativo?',
    options: ['SIGTERM (15) — cierre suave (soft)', 'SIGKILL (9) — cierre forzoso inmediato (hard)', 'SIGHUP (1) — recargar configuraciones', 'SIGSTOP (19) — pausar ejecución del proceso'],
    correct: 1,
    explanation: 'SIGKILL (9) aniquila el proceso inmediatamente usando el Kernel. No puede ser ignorado ni interceptado por la app.',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando modifica la prioridad / "nice" de un proceso YA en ejecución (ej. PID 1234) pasándolo a un valor de -5?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: 'renice -n <value> -p <PID> modifica el valor nice de un proceso que ya está corriendo. el comando "nice" base es solo para lanzar nuevos programas.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué valor del rango "nice" otorga a un proceso el MÁXIMO tiempo de CPU absoluto?',
    options: ['100 (mayor número positivo)', '-20 (menor valor, prioridad altísima)', '+19 (mayor valor)', '0 (estándar neutro)'],
    correct: 1,
    explanation: 'El rango de nice en Linux va del altísimo -20 (requiere sudo/root) hasta el bajísimo +19 (el proceso regala siempre su turno en CPU).',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Si quieres ver TODOS los procesos cargados con datos extendidos (usuario, CPU, memoria...), ¿qué parámetros usas habitualmente con "ps"?',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: 'ps aux muestra los procesos (a)utomáticamente de (u)suarios con gran detalle, en todos los terminales (x).',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando ordena rápidamente la finalización (SIGTERM) de cualquier proceso que tenga el nombre exacto de "httpd"?',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: 'killall <nombre> aplica un kill automático a cada PID que coincida con el nombre textual provisto. pkill acepta regex pero es menos restrictivo por defecto.',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Si enviaste a segundo plano y suspendiste un script pesado (Ctrl+Z) quedando rotulado como Job %2, ¿cómo lo regresas activo a primer plano?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: 'fg %<n> (foreground) lo retorna a primer plano. bg %<n> (background) lo reanuda pero en oculto trabajando de fondo.',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando activa el auto-arranque continuo post-booting de un servicio sshd y TAMBIÉN lo enciende en este preciso instante?',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'systemctl enable --now agrupa dos pasos en uno combinando rutinas de arranque on-the-fly con persistencia post-reboot.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Conceptualmente en systemd, ¿qué los diferencia entre `systemctl stop` y `systemctl disable`?',
    options: [
      'Son alias que hacen exactamente lo mismo en kernel 4.x+',
      'stop lo detiene ahora; disable remueve su auto-arranque futuro al encender el PC',
      'disable lo detiene ahora bloqueando dependencias; stop destroza los binarios de la memoria RAM',
      'stop borra permanentemente sus logs guardados; disable borra su unit-file',
    ],
    correct: 1,
    explanation: 'stop apaga el servicio en tiempo real hasta el próximo inicio. disable solo quita el hiperenlace de autoarranque pero si ya estaba corriendo, sigue.',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo blindas 100% un servicio para que ni comandos de usuario ni llamadas automáticas del sistema puedan llegar a levantarlo jamás?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: '"mask" en systemd falsifica el archivo .service apuntándolo al agujero dev/null virtual, impidiendo toda invocación accidental hasta hacer "unmask".',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '¿El comando oficial actual en RHEL9/CentOS para leer PID, uptime, reportes recientes de consola y estado de salud de tu "httpd" es?',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: 'systemctl status <service> integra un dump rápido visual súper completo de cualquier demonio o target que le preguntes.',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Has editado el texto plano fuente de un /etc/systemd/system/app.service y guardado los cambios. ¿Qué debes lanzar ya mismo antes de reiniciarlo?',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'systemctl daemon-reload obliga a limpiar caché, obligando a systemd a releer en caliente cada unit-file del disco para absorber tus modificaciones textuales.',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Dentro del poderoso subsistema de systemd: ¿qué comando vuelca a tu pantalla y actualiza sin parar un feed directo de los logs raw?',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'journalctl -f (-f indica "follow") imprime las últimas líneas escritas en la BBDD del diario binario y se queda "colgado" escuchando si llegan más para pintártelas on-the-fly.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'El journal contiene mucho ruido; ¿cómo pasas un filtro pidiendo única y exclusivamente las quejas que lanzó el servicio sshd en específico?',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: '-u pide restringir reportes al matching tag del "Unit" especifico. ej: journalctl -u chronyd.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'De forma predefinida systemd olvida tu buffer del journal al apagar la PC. ¿En cuál fichero de texto forzarías Storage=persistent para guardar historiales fijos?',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: '/etc/systemd/journald.conf domina el demonio global configurando topes de GB tolerados y persistencia en la carpeta /var/log/journal/.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Si quieres dejar un backup programado y atado a tu actual usuario vivo en sesión sin alterar la zona global del pc ¿con cuál herramienta abres ese editor temporizado?',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'Siempre debes manipular esto mandando a llamar a `crontab -e` ya que invoca el editor validando sintaxis sin romper los permisos del grupo y sistema base.',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'En notación del "crontab", ¿qué receta dispara de madrugada un script concretamente cada Lunes tocando justo las 3:30 AM en el reloj de Bios?',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'El diseño inmutable es: (m)inutos, (h)oras, (d)ía_del_mes, (M)es, e (D)ía_de_la_Semana. "30 3 * * 1" cuadra perfecto para los lunes (1=lunes) las 3 AM con media hora.',
  },
]
