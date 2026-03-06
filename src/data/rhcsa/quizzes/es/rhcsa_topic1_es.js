// RHCSA Quiz — Topic 1: Essential Tools (Spanish)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesES = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué operador redirige tanto stdout COMO stderr al mismo archivo?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> redirige tanto la salida estándar (fd 1) como el error estándar (fd 2) al mismo archivo.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué hace el comando `ls -la /etc >> /tmp/output.txt`?',
    options: [
      'Sobrescribe /tmp/output.txt con el contenido de /etc',
      'Añade la salida de ls al final de /tmp/output.txt',
      'Redirige los errores de ls a /tmp/output.txt',
      'Crea un hard link entre /etc y /tmp/output.txt',
    ],
    correct: 1,
    explanation: '>> añade la salida al final del archivo, sin sobrescribirlo.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Quieres ejecutar `find / -name "*.log"` suprimiendo solo los errores de "Permiso denegado". ¿Qué comando usas?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null redirige stderr (file descriptor 2) a /dev/null, descartando solo los errores.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué hace la tubería `|` en `ps aux | grep httpd`?',
    options: [
      'Guarda la salida de ps aux en un archivo llamado "grep httpd"',
      'Pasa la salida de ps aux como entrada (stdin) a grep httpd',
      'Ejecuta ps aux y grep httpd en paralelo sin conexión',
      'Redirige los errores de ps aux a grep',
    ],
    correct: 1,
    explanation: 'La tubería | conecta la salida estándar (stdout) del primer comando con la entrada estándar (stdin) del segundo.',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando envía tanto stdout como stderr a /dev/null (silencio total)?',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null redirige stdout, luego 2>&1 redirige stderr a donde apunte stdout (es decir, /dev/null). Equivalente a &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Qué descriptor de archivo corresponde a stderr?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'Descriptores estándar: 0=stdin, 1=stdout, 2=stderr.',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué representa `/dev/null`?',
    options: [
      'Un archivo vacío que solo puede contener texto',
      'Un dispositivo especial que descarta todo lo que recibe',
      'El archivo de registro del kernel',
      'Un enlace simbólico al directorio home',
    ],
    correct: 1,
    explanation: '/dev/null es un dispositivo especial (dispositivo nulo) que descarta silenciosamente toda la entrada.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo usas `tee` para ver la salida en pantalla Y guardarla en un archivo simultáneamente?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` lee de stdin y escribe tanto en stdout como en el archivo especificado. Útil en tuberías (pipes).',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué opción de grep realiza una búsqueda sin distinguir entre mayúsculas y minúsculas?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) hace que grep ignore las mayúsculas: `grep -i "error" file`.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra las líneas de /etc/passwd que NO contienen "nologin"?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) muestra las líneas que NO coinciden con el patrón.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'En un regex, ¿qué hace el patrón `^root`?',
    options: [
      'Coincide con la palabra "root" en cualquier parte de la línea',
      'Coincide con líneas que comienzan con "root"',
      'Coincide con líneas que terminan con "root"',
      'Coincide con cualquier carácter seguido de "root"',
    ],
    correct: 1,
    explanation: '^ es un ancla que indica el inicio de la línea. `^root` coincide solo si la línea empieza con "root".',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué opción de grep cuenta el número de líneas coincidentes en lugar de mostrarlas?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) imprime solo la cantidad de líneas que coinciden con el patrón.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando usa Expresiones Regulares Extendidas?',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '-E (o egrep) habilita Regex Extendido soportando +, ?, |, () sin necesidad de escaparlos.',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: '¿Qué comando grep encuentra líneas que comiencen por un número (dígito)?',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = inicio de línea, `[0-9]` = cualquier dígito. Juntos buscan líneas que empiecen por un dígito.',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué opción busca recursivamente en todos los subdirectorios?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) hace que grep explore dentro de subdirectorios. Muy útil al buscar en /etc/.',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué permiso en notación octal corresponde a `rwxr-xr-x`?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=7, r-x=5, r-x=5 → 755. Es el permiso típico para archivos ejecutables y directorios públicos.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando crea un enlace simbólico de /etc/hosts en /tmp/?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s` crea un enlace simbólico. Sin -s crea un hard link (enlace duro).',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cuál es la diferencia principal entre un hard link y un enlace simbólico?',
    options: [
      'Los simbólicos son más rápidos que los duros',
      'Los hard links comparten el mismo inodo; los simbólicos apuntan a una ruta',
      'Los hard links funcionan entre diferentes sistemas de archivos; los simbólicos no',
      'Los simbólicos no pueden apuntar a archivos regulares',
    ],
    correct: 1,
    explanation: 'Hard link: mismo inodo, mismo sistema de archivos. Symlink: apunta a una ruta textual, puede cruzar sistemas de archivos.',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando añade permiso de ejecución al propietario (owner), sin tocar al resto?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`chmod u+x` añade ejecución solo para el usuario (u). a+x lo añadiría para todos.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué comando cambia tanto el propietario como el grupo de un archivo a la vez?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown user:group file` altera el propietario y el grupo usando un solo comando.',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando crea un archivo tar comprimido con gzip llamado backup.tar.gz desde el directorio /home/mario?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'c=create, z=gzip, v=verbose, f=file. `tar -czvf archivo.tar.gz fuente`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Qué opción (flag) de tar usa la compresión bzip2?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'j = bzip2 (.tar.bz2), z = gzip (.tar.gz), J = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo extraes un archivo tar.gz hacia /opt/ sin cambiar de directorio (cd)?',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: '-C (change directory) especifica el directorio de destino para la extracción.',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra la página man de la sección 5 (archivos de configuración) para passwd?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man N comando` especifica la sección N. Sección 1=comandos, 5=archivos config, 8=comandos de sysadmin.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: '¿Dónde se encuentran los archivos de documentación complementaria instalados por los paquetes RPM?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: '/usr/share/doc/ contiene READMEs, ejemplos y documentación para cada paquete.',
  },
]
