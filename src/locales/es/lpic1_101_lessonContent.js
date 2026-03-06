// LPIC-1 101 Lesson Content — Spanish

export const lpic1_101_lessonContent_es = {
  // ─── TOPIC 1: Arquitectura del Sistema (101) ───
  'lpic1-101-1-1': {
    title: 'Determinar y Configurar los Parámetros del Hardware',
    content: `
El kernel de Linux administra el hardware y expone la información a los usuarios a través del sistema de archivos virtual \`/proc\` y las herramientas del sistema.

### Directorios Clave
- \`/dev\`: Contiene archivos de dispositivos especiales (ej., \`/dev/sda\` para discos, \`/dev/tty\` para el terminal) que apuntan al hardware. udev los crea dinámicamente.
- \`/proc\`: Sistema de archivos virtual que proporciona información sobre el sistema (ej., \`/proc/cpuinfo\`, \`/proc/meminfo\`, \`/proc/interrupts\`).
- \`/sys\`: Expone la jerarquía de dispositivos del kernel.

### Comandos de Hardware
- **\`lsusb\`**: Lista los buses USB y los dispositivos conectados a ellos.
- **\`lspci\`**: Muestra información sobre todos los buses PCI y los dispositivos conectados a ellos.
- **\`lshw\`**: (List Hardware) Extrae información detallada sobre la configuración de hardware de la máquina.

### Módulos del Kernel
Los controladores en Linux suelen cargarse dinámicamente como módulos del kernel (\`.ko\`).
- **\`lsmod\`**: Informa qué módulos del kernel están cargados actualmente (lee \`/proc/modules\`).
- **\`modprobe\`**: Añade o elimina de forma inteligente un módulo y sus dependencias al kernel.
- **\`modinfo\`**: Muestra información sobre un módulo, como el autor, la descripción y los parámetros aceptables.
    `,
  },
  'lpic1-101-1-2': {
    title: 'Arranque del Sistema',
    content: `
El proceso de arranque en Linux consta de cuatro etapas principales:
1. **POST del Firmware (BIOS/UEFI)**: Inicializa el hardware y busca un disco de arranque.
2. **Cargador de Arranque (GRUB2)**: El firmware lo carga en memoria. GRUB muestra el menú, carga el Kernel y el disco de memoria RAM inicial (initramfs).
3. **Inicialización del Kernel**: El kernel monta el initramfs, carga dependencias críticas del disco (LVM, RAID) y monta el sistema de archivos raíz (\`/\`).
4. **Proceso Init (systemd)**: El kernel ejecuta \`/sbin/init\` (PID 1), que toma el control y carga los servicios del espacio del usuario.

### Registros del Proceso de Arranque
- **\`dmesg\`**: Imprime el búfer de mensajes del anillo del kernel. Esencial para investigar problemas de detección de hardware durante el arranque.
- \`journalctl -b\`: En sistemas con \`systemd\`, esto muestra los registros del arranque actual.
- \`/var/log/messages\` o \`/var/log/syslog\`: Ubicación histórica y de respaldo donde los demonios syslog registran todos los eventos de arranque.
    `,
  },
  'lpic1-101-1-3': {
    title: 'Cambiar de Nivel de Ejecución (Runlevel) o Destino (Target)',
    content: `
Linux puede operar en diferentes estados denominados niveles de ejecución (en SysVinit) o destinos (targets, en systemd).

### Comparación entre Runlevels y Targets
| Runlevel SysV | Destino systemd | Descripción |
| :---: | :--- | :--- |
| **0** | \`poweroff.target\` | Apaga (Halt) el sistema. |
| **1** / **s** | \`rescue.target\` | Modo monousuario (mantenimiento en consola). |
| **3** | \`multi-user.target\` | Modo texto multiusuario completo con red. |
| **5** | \`graphical.target\` | Modo multiusuario con entorno gráfico (X11/Wayland). |
| **6** | \`reboot.target\` | Reinicia el sistema. |

### Comandos de Gestión systemd
- \`systemctl get-default\`: Permite saber en qué objetivo arrancará el sistema la próxima vez.
- \`systemctl set-default multi-user.target\`: Cambia el modo predeterminado para siempre arrancar en consola.
- \`systemctl isolate graphical.target\`: Cambia el estado interactivamente, levantando la interfaz gráfica si estábamos en consola.

### Apagado Seguro y Wall
- \`shutdown -h now\`: Halt/apagar el sistema ahora.
- \`shutdown -r +10 "Mantenimiento"\`: Reinicia el sistema en 10 minutos mandando un aviso en pantalla a los usuarios activos.
- \`wall "Mensaje"\`: Broadcastea (difunde) un mensaje a todos los terminales y usuarios logueados.
    `,
  },

  // ─── TOPIC 2: Instalación de Linux y Gestión de Paquetes (102) ───
  'lpic1-102-1-1': {
    title: 'Diseño del Disco Duro',
    content: `
Antes de instalar Linux, se debe planificar cómo se dividirá y usará el disco duro.

### Tablas de Particiones
- **MBR (Master Boot Record)**: Sistema clásico. Solo admite discos de hasta 2TB y un máximo de 4 particiones primarias (o 3 primarias y 1 extendida con múltiples particiones lógicas).
- **GPT (GUID Partition Table)**: Reemplazo moderno asociado con UEFI. Admite discos de hasta 8 Zebibytes y hasta 128 particiones primarias de forma predeterminada.

### Particiones y Puntos de Montaje Frecuentes
- \`/\` **(Raíz)**: La base del sistema de archivos. Todo cuelga de aquí.
- \`/boot\`: Contiene el kernel de Linux y los archivos del gestor de arranque. En sistemas UEFI, debe existir una "Partición de Sistema EFI" (ESP) aparte.
- \`/home\`: Directorios personales para usuarios (documentos, configuraciones de usuario). ¡Mantenerlo separado permite formatear y reinstalar el sistema operativo \`/\` en el futuro sin perder tus fotos!
- \`/var\`: Directorio de datos variables (registros de \`/var/log\`, bases de datos, correo). Debería particionarse por separado en los servidores para evitar que los archivos de registro crezcan y bloqueen el sistema al llenar el disco entero.
- **Swap**: Espacio en disco utilizado como memoria virtual estática cuando se agota la memoria RAM física en el equipo.
    `,
  },
  'lpic1-102-1-2': {
    title: 'Instalación de un Gestor de Arranque',
    content: `
El **Gestor de arranque GRUB 2 (GRand Unified Bootloader)** es el estándar en casi todas las distribuciones modernas de GNU/Linux. Se encarga de mostrar un menú de sistemas operativos o kernels para cargar al arrancar.

### Archivos de Configuración
- **/boot/grub/grub.cfg**: Es el archivo principal de configuración. **¡NO SE DEBE EDITAR DIRECTAMENTE!** Es generado por el comando de actualización y compilación de scripts.
- **/etc/default/grub**: Fichero pensado y diseñado para ser modificado por el ser humano. Aquí definimos el tiempo de espera (TIMEOUT), imagen de fondo del menú o los argumentos de núcleo de Linux base.
- **/etc/grub.d/**: Directorio que alberga los bloques de secuencias de comandos (ej: \`10_linux\`, \`30_os-prober\`).

### Comandos de GRUB 2
Al cambiar opciones en \`/etc/default/grub\`, el archivo general de arranque debe regenerarse forzosamente para reflejar los cambios:
- CentOS/RHEL: \`grub2-mkconfig -o /boot/grub2/grub.cfg\`
- Debian/Ubuntu: Existe el alias corto y práctico llamado \`update-grub\`.

Para inyectar el código funcional en el inicio del disco (ej: sda):
- \`grub-install /dev/sda\`
    `,
  },
  'lpic1-102-1-3': {
    title: 'Gestión de Bibliotecas Compartidas',
    content: `
En Linux, los programas a menudo usan subrutinas precompiladas externalizadas llamadas **bibliotecas compartidas** (con extensión \`.so\` — Shared Object).

### Inspección de Dependencias
- **\`ldd /ruta/al/programa\`**: Analiza un programa binario e imprime la ruta exacta de las versiones de las librerías \`.so\` que el sistema cree que necesita cargar para poder funcionar.

### La Caché de Búsqueda
Para no perder tiempo buscando en todo el disco duro por librerías compartidas cada vez que arrancamos un software, el sistema usa una memoria rápida o caché de rutas.
- **/etc/ld.so.conf**: Fichero base donde listamos en texto plano todas aquellas carpetas que sí albergan librerías válidas (y todas sus subrutinas en /etc/ld.so.conf.d/).
- **\`ldconfig\`**: Comando maestro vital. Debe invocarse después de añadir un nuevo path dentro del fichero conf para actualizar masivamente e indexar los registros hacia el archivo caché del sistema (\`/etc/ld.so.cache\`).

### Variables Temporales
La forma más directa de instruir a un software que tome en consideración una ruta inusual predeterminadamente no agregada, sin ejecutar permisos superusuario \`ldconfig\`, es a través de la instrucción terminal por ventana: \`export LD_LIBRARY_PATH=/opt/miapp/lib\`, forzando en su proceso la carga.
    `,
  },
  'lpic1-102-1-4': {
    title: 'Gestión de Paquetes Debian',
    content: `
Las distribuciones basadas en Debian (Ubuntu, Mint, Kali) utilizan el sistema de empaquetado **.deb**.

### Bajo Nivel (dpkg)
La herramienta dpkg trabaja estrictamente de modo local. NO DESCARGA de repositorios remotos ni instala automáticamente herramientas o requisitos faltantes (dependencias asociadas).
- \`dpkg -i paquete.deb\` (Install) => Instala el empaquetado .deb guardado.
- \`dpkg -r paquete\` (Remove) => Lo elimina conservando la configuración.
- \`dpkg -P paquete\` (Purge) => Remoción total borrando cualquier rastro o modificación de perfil y configuraciones.
- \`dpkg -l\` (List) => Enumera de largo listado TODO el inventario del ordenador.
- \`dpkg -S /bin/ls\` (Search) => Rastrea y acusa qué paquete proveyó al sistema de este fichero alojado.

### Alto Nivel (APT)
Son herramientas inteligentes avanzadas provistas de diccionarios en red que procesan requisitos.
- **/etc/apt/sources.list**: Listado web/HTTP de los proveedores de origen confiable.
- \`apt update\`: Regenera index y sincronía sobre los últimos catálogos de dichos proveedores.
- \`apt upgrade\`: Sustituye cualquier versión antigua instalada por los elementos recientemente indexados en tu ordenador.
- \`apt install nginx\` => Descarga e instala Nginx y cualquier requerimiento adjunto para su éxito de implementación.
    `,
  },
  'lpic1-102-1-5': {
    title: 'Gestión de Paquetes RPM y YUM',
    content: `
Las distribuciones vinculadas y herederas a Red Hat (CentOS, Fedora, Rocky, SUSE) trabajan bajo el estatus de ficheros **.rpm** (Red Hat Package Manager).

### Bajo Nivel (RPM)
Del mismo caso como Debian y dpkg, la variante original interactúa directamente sobre ficheros empaquetados .rpm locales desconectado a redes globales.
- \`rpm -i paquete.rpm\` => Instala en crudo un archivo en el equipo.
- \`rpm -e nombrepaquete\` => Desinstala / Ejecuta borrado formal.
- \`rpm -qa\` => Query All: Desglosa todo lo abarcable y alistado formalmente por RPM localmente.
- \`rpm -ql nombrepaquete\` => Query List: Arroja todos aquellos directorios instalados al rededor del paquete indicado, ruta por ruta.
- \`rpm -qf /etc/archivo\` => Query File: Te advierte y confirma el instalador del paquete originario.

### Alto Nivel (DNF/YUM)
"Dandified YUM" (dnf) es la iteración evolucionada al gestor Yum clásico de los años 2000 que es muchísimo más analítico en resolución de conflictos. Sus catálogos o archivos REPO están siempre expuestos publicamente en **/etc/yum.repos.d/**.
- \`dnf search apache\` => Filtra coincidencias en el espectro del directorio.
- \`dnf install httpd\` => Traer y ajustar una herramienta, librerías al momento.
- \`dnf remove httpd\` => Exterminio cuidadoso de dependencias remanentes innecesarias en el equipo.
    `,
  },
  'lpic1-102-1-6': {
    title: 'Virtualización Invitado de Linux',
    content: `
En las infraestructuras de IT, la nube es sinónimo de Virtualización abstracta.

### Tipo de Virtualización Tradicional
1.  **Hipervisor Tipo 1, Bare Metal o Nativo (Ej: KVM Linux / ESXi)**: Funciona en sustitución al propio sistema operativo actuando a muy bajo nivel, operando virtualmente a las peticiones del procesador y ram para optimizar al máximo.
2.  **Hipervisor de Tipo 2 Huesped (Ej: VirtualBox)**: Se implanta en computadora o máquina anfitrión normal de Windows/Mac para emular falsos ordenadores dentro de ese sistema, gastando muchos recursos de intermediación.

### Contenedores vs Máquinas Virtuales (VM)
Las VM conllevan virtualización estricta por emulación del hardware nativo, incluyendo BIOS y sistema completo consumiendo disco y espacio excesivo, así sea un OS minúsculo. Los **contenedores** de servicios independientes como **Docker, u Podman**, por lo contrario, comparten de forma equitativa de kernel orgánico el mismo SO anfitrión; el entorno es confinado pero ligero. Son el futuro y se lanzan en fracciones microscópicas del tiempo sobre el hardware para aislar entornos específicos u aplicaciones puntuales controladas por procesos y grupos integrados (cgroups) del mismo Linux!
    `,
  },

  // ─── TOPIC 3: Comandos GNU y Unix (103) ───
  'lpic1-103-1-1': {
    title: 'Trabajar en la Línea de Comandos',
    content: `
La **CLI** (Interfaz de Línea de Comandos) o terminal Bash es el espacio interactivo entre el operario y el Kernel de comandos y herramientas integradas de UNIX.

### Tipos de Órdenes
Cuando tipeamos en el monitor, estamos enviando palabras que serán filtradas por:
1.  **Funciones Shell**: Programación directa a núcleo del Bash
2.  **Órdenes Intrínsecas (Builtins)**: Acciones implementadas interiormente al shell propiamente, como el comando del teclado \`cd\` o funciones operativas de Bash (\`echo\`).
3.  **Binarios externos**: Comunes programas autónomos implementados a modo de fichero ejecutable residentes en \`/usr/bin/\` listados sobre variables $PATH (ej: comando \`ls\` de coreutils o comando \`grep\`).

### \`which\` y \`type\`
- **\`which ls\`**: Registra sistemáticamente cada carpeta autorizada en \$PATH buscando la localización formal e imprimirá "/bin/ls".
- **\`type cd\`**: Revelará en pantalla de qué se conforma internamente un pedido (¿Es un binario ejecutable?, ¿Una orden preconfigurada Bash? ¿O un alias?).
    `,
  },
  'lpic1-103-1-2': {
    title: 'Variables del Shell y el Entorno',
    content: `
Bash almacena datos o información valiosa en marcadores llamados variables.

-   **Variable Local**: \`CIUDAD="Madrid"\` (solo disponible en esta sesión particular e individual del Shell de esa sola ventana, inútil para peticiones externas de nuevos scripts ejecutados por terminal).
-   **Variables Globales de Entorno ($ENV)**: Al preceder a la línea un simple \`export CIUDAD="Madrid"\`, esto transforma la variable con propiedades para su exposición y herencia persistente de todos los programas o instancias "hijos" por provenir en forma secundaria en tu ordenador. Se pueden revisar con orden \`env\` o comando \`printenv\`.

### Historial de la Consola
El Bash recuerda automáticamente el registro en \`~/.bash_history\`.
- \`history\` visualiza numéricamente todas entradas de historial.
- \`!35\` — El \`!\` de Exclamación ordenará reejecutar de golpe comando clasificado en la fila o historia número 35 para ahorrarnos de escribir.
- \`Ctrl+R\` (Búsqueda hacia Atrás Recursiva) incita una línea de peticiones predictivas según escribamos pedacitos del nombre del archivo en la historia para encontrar un código viejo largo de Bash.
    `,
  },
  'lpic1-103-2-1': {
    title: 'Procesar Flujos de Texto mediante Filtros',
    content: `
GNU/Linux opera todo aspecto interactivo considerando al "texto plano" primordialmente como el modelo universal comunicable.

### Visualización Rápida
- \`cat file.txt\`: Vuelca la totalidad sin procesar en cascada unificada sobre terminal. Útil para ficheros muy cortos.
- \`head -n 20 error.log\`: Acoge estricto los veinte rangos iníciales de encabezamiento del documento en consola.
- \`tail -f apache.log\`: Reversivo "Cola". Mostrará las partes finales pero con modalidad interactiva ("Follow / F") adjuntando los desarrollos en vivo y en directo al terminal activo sobre el archivo en crecimiento perpetuamente.

### Edición Integral Avanzada de Texto Consola
- **\`wc -l\`**: "Cuenta Palabras - Word Count" pero limitando solo al registro en contador numérico simple de lineas (-l) escritas del objeto adjuntado.
- **\`sort\`**: Analiza ordenadamente desde origen A-Z cada párrafo o numeración de un listado bruto sobre una salida ordenada y secuencial al monitor final, o -r como cascada Invertida Z-A,
- **\`cut -d':' -f1\`**: Recorta segmentos y campos tabulados separando todo carácter delimitador ":", en el documento "y" sacando solamente el campo enumerado F1 en extracción simple.
    `,
  },
  'lpic1-103-3-1': {
    title: 'Preferencia General sobre Ficheros (I)',
    content: `
Linux posee herramientas ágiles fundamentales orientadas en operar directamente a sistemas internos nativos sobre comandos básicos obligatorios de navegación rutinaria y control de ficheros y directorios completos para el usuario final.

- **\`cp -r \`**: (Copy / Copiar) Crea réplicas inalterables o espejos en forma de recurso sobre orígenes, la flag -r Recursiva engloba no solo fichero en particular sino al Directorio envoltorio de cascada en sí y todos los niveles anclados al árbol.
- **\`mv origen destino \`**: (Move o Renaming) Si se localiza de la misma ruta idéntica actual asume cambio nominativo al archivo en general, de caso contrario al de la ubicación y posicionamiento se considera Traslado general.
- **\`rm -ri\`**: (Remove / Suprimir) La opción Recursiva (\`-r\`) ordena destrucción agresiva a carpetas plenas en bloque y sus subniveles. Si se le anexa bandera "-i" fuerza Interacción/Confirmación de control de advertencia del software "sí o no" por prevención ante eliminaciones irrevocables por accidente de origen de escritorio de trabajo!
    `,
  },
  'lpic1-103-3-2': {
    title: 'Búsqueda Avanzada y Extracción',
    content: `
Búsqueda implacable, y Archivos y Compresión Empaquetadora de Copia General.

### Comandos de Búsqueda
- **\`locate passwd\`**: Su accionar proviene del rastreador masivo y pre-fabricado bajo bases de indexación internas generadas durante los ciclos inactivos de la maquina central desde la BD actualizable en el "updatedb" o índice Cron interno rutinario. Rapidísimo pero desfasado al instante y no preciso real-time de sistemas de momento local, es solo estático.
- **\`find /etc -name "*.conf"\`**: Totalmente contrario, realiza un árbol descendente integral recorriendo, con escaneo literal intensamente y exhaustivamente recursivo hacia archivos coincidentes reales en tiempo vivo y directorios dinámicos verificados bajo banderas lógicas extendidas parametrizables.

### Des/Compresión y Empaque
La consolidación combinada del archivo en una cinta lineal agrupa sin restar peso al archivo total general llamado o denominado TAR, mientras "gzip - z" y sus derivados efectúan matemática pura deduciendo compresión efectiva de pérdida mínima sobre ese paquete unitario en su totalidad general final conjunta!.

- Empacar Comprimido: \`tar -czvf archivo.tar.gz /home/usuario\` (-c crear, -z algoritmos de compresion gunzip, -v lectura terminal sobre visualizacion archivos verbose explícito, -f exportar resultado output a carpeta file.tar ).
- Extraer contenido archivado: \`tar -xzvf archivo.tar.gz\` (-x de Extracción Inversiva en desempaquetado de carpeta base terminal).
    `,
  },
  'lpic1-103-4-1': {
    title: 'Flujos Secuenciales (I/O, Redirecciones)',
    content: `
Las aplicaciones en comando sobre sistemas UNIX dependen de un patrón estándar universal sobre los 3 canales fundamentales orientativos de interacción:  Input de ingreso base manual o automatizado, o Salidas (Standard Outputs en proceso base monitor y su contracara en Fallos y advertencia).

- **(Canal Pauta 0)**: \`stdin\` — Acceso receptivo al origen de los mandos provistas.
- **(Canal Pauta 1)**: \`stdout\` — Exportación normal o resultado final general derivado al interfaz principal terminal gráfico monitor de usuario central. (Su atajo a fichero redireccionado de registro "report.txt" es dictaminado puramente al comando > de redirección).
- **(Canal Pauta 2)**: \`stderr\` — Filtro especializado excluyente para Mensaje generalizados a anomalías, caídas lógicas al comando original para impedir combinación conflictiva directa entre la información util y la notificación de caídas base general "warning", (Su desvío atajo se genera en redirección simple ante \`2> errores.log\`).

#### Consideraciones extra Output:
> \`comando > archivo.txt\` **Destruye** en suplantarlo y reescribe completamente e íntegramente de inicio.
> \`comando >> archivo.txt\` Modifica por adición general concatenando el reporte a fin inactivo actual (Append).
    `,
  },
  'lpic1-103-4-2': {
    title: 'Canalización con Tuberías (Pipes)',
    content: `
La **Tubería "Pipe" \`|\`** de barra lateral interconecta la comunicación y salida pura orgánica resultante extraída por un utilitario y se redirigirá internamente forzadamente y automáticamente con entrada y provisión (input original) inicial al desarrollo y lectura procesar secuencial al posterior integrante sucesor del flujo (Pipeline!).

- Ejemplo de Flujo de Búsqueda Compleja:
\`cat /etc/passwd | grep "/bin/bash" | cut -d: -f 1 | sort -r\` — Tomar archivo entero base >> Capturar líneas puras e idénticas con shell default bash base >> Recortar aislando usuarios exacto ignorando contraseñas >> y Ordenándolos al revés de modo Zeta al inicio (Z-A) a terminal final definitivo!!.

- **Opciones Bifurcativas "Tee":**
Comando Integrado \`tee\` a media pipe te permitirá duplicar temporalmente su cauce, forzando la bajada escrita general en medio de camino hacia un respaldo persistente en ".txt" o cualquier "Log" fichero nativo paralelo de terminal, y a su vez mantener la cadena viva de entrega inalterable sobre conductos estándares hacia output general final de monitor!
    `,
  },
  'lpic1-103-5-1': {
    title: 'Creación, Monitoreo y Muerte de Procesos',
    content: `
Tanto los comandos aplicados, el sistema interno, interfaces gráficos o las sesiones web de fondo... están manejadas en código PID (Process Identifier o Identificador de Accionamiento individual).

### Visualizadores Universales Centrales
- **\`ps aux\` / \`ps -ef\`**: Instantánea simple (fotográfica) a un instante del reloj general enumerando al total interactivo procesos generados globales en PID desde PID 1 inicial (init), junto al propietario del comando gestado y sus parámetros descriptivos originales completos implementados para diagnostico!.
- **\`top\` / \`htop\`**: Tablero métrico periódico actualizado incesantemente en monitor al 1 segundo iterativo que despliega las demandas de saturación activas directivas al RAM consumido o CPU forzado entre toda la jerarquía activa de la máquina.

### Sistema de Cancelación Generalizado SigKill
La orden **\`kill\`** gestiona eventos mandando mensajes intrínsecos al Linux API interno.
Por defecto en "15" SIGTERM dictamina que la aplicación cierre voluntariamente todo fichero o tarea actual para evitar desbalances lógicos. Modificador bandera "\`-9\`" SIGKILL solicita al hardware ignorar todo aspecto de piedad sobre el programa, aniquilando directamente el registro de uso desde memoria procesador RAM e interfiriendo destructivamente ante los recursos inmediatos (el apagón extremo) para salvar congelamientos totales al servidor informático.
    `,
  },
  'lpic1-103-5-2': {
    title: 'Control Terminal (Foreground y Background)',
    content: `
Los Bash son mono-tareas por defecto orgánico, un proceso base mantendrá rehén interactivamente a la interfaz usuario (Foreground), bloqueándote de enviar ninguna orden posterior si éste continúa su cómputo prolongado o actualización larga programada de base!

La orden \`&\` al fondo de tu terminal (\`tar -cvzf bkp.tar.gz /home &\`), mandará esta secuencia computacional intensiva bajo cubierta transparente no restrictiva a las sombras del proceso subyacente silencioso de memoria ("Background"), liberando en tu cara al prompt final limpio y activo y continuar programando sin trabar ventana sesión u otras herramientas adicionales!

Se puede también detener interrupciones momentáneas forzadas por \`Ctrl+Z\` poniéndolas en animación de suspenso (Pausa o Stop process de la orden inicial), y relanzando en forma interna o silenciada oculta ejecutando simple texto \`bg\`!. (Por viceversa, \`fg\` rescata forzosamente ese proceso traicionándolo de la sobra o la base "Background" reactivándolo a pantalla de frente e interrumpiendo "Foreground" en nuestra vista actual principal y control de escritura en tiempo continuo final!).
    `,
  },
  'lpic1-103-6-1': {
    title: 'Modificar Prioridades de Procesos en Ejecución (Nice)',
    content: `
En Linux (o el programador central *Scheduler* orgánico nativo de procesamiento concurrente multi-hilos integrados de kernel core) determina al proceso quién adquiere atención exclusiva CPU con milisegundos base con factores de urgencias parametrizadas nominadas nivel de "Buen Comportamiento" social "Nice" hacia el prójimo!.

Valores de escala jerárquica: Escalan del "-20" a "+19", un nivel más bajo u ostentosamente negativo denota la menor complacencia (Puntaje mayor de codicia base recursos CPU, urgencias urgentes!), un nivel de positivo muy alto denotará la última base de recuento en ser vista (Puntaje Menor y muy "Nice" en la fila terminal global!).

1.  \`nice -n 15 tar -czf bac.tar /var\`: Petición de lanzamiento procesador amigable; a "tar" comando se le otorga ejecución a lentitud por el bien de otras operaciones terminales vitales concurrentes! (Ejecución +15 de prioridad degradada inicial de procesos base).
2.  \`renice -n -10 4350\`: Cambio Dinámico del proceso (PID 4350) bajo marcha; Aumenta la prioridad bruscamente a urgencia importante del kernel solo reservado al perfil SuperAdministrativo Root General, el común denominador del usuario "solo" puede regalar la amabilidad pero nunca demandar tiempo del procesador central!
    `,
  },
  'lpic1-103-7-1': {
    title: 'Buscar en Archivos de Texto usando Expresiones Regulares',
    content: `
*Regular Expressions* es lenguaje codificador simbólico muy abreviado creado en los inicios informáticos a través de la interpretación lógica en extracción y escáner minucioso general de sub tramas ocultas textuales! Cientos de subórdenes se basan en este API estándar en filtros como Sed general base o grep!.

*   \`^\` Circunflejo: Ancla condicional, obliga al motor de base leer e inicializarse puramente un texto al comienzo crudo literal explícito base de un renglón!.
*   \`$\` Dólar: Ancla inversa complementaria forjada para leer al final general del corte salto párrafo renglonado general de fila textual en el archivo!
*   \`.\` Punto generalizado metacaracter: Denota correspondencia u equivalencia comodín base a "cualquier valor existente base" alfanumérico posible, a carácter unitario e individual (Menos salto línea n)!
*   \`*\` Asterisco / Estrella multiplicadora metacaracter: Acusa instrucción explícita hacia al carácter ubicado a la izquierda anterior al asterisco general, determinando repetición en cantidades en patrón nulos ausentes enteros base de cero total hasta nivel inasumible u eternamente infinito repetitorio final de coincidencia pura!!. ( .* juntos engloba TODA coincidencia textual masiva universal posible).
*   \`[]\` Corchetes "Bracket" metacaracter: Clase, Rango delimitador que escoge exclusivamente "cualquiera, pero ÚNICAMENTE uno y uno individual de las opciones caracteres especificadas contenidas entre esas cajas" a coincidir en lectura de texto general!.
    `,
  },
  'lpic1-103-8-1': {
    title: 'Editor de Textos Base y Vi Básico',
    content: `
**VI** es pre-instalación generalizada históricamente en absolutamente cada distro GNU/Posix globalmente implementada (VIM: Vi Impoved). Es "editor interactivo base modal"!

*   **Comando Normal (Predeterminación inicial base de entrada del motor editor vi general)**:
    Todo el teclado, puramente codificado, NO ingresara letras bases de edición al documento final... El motor de núcleo tratará cada botón letra pulsada como macro-función algorítmica y orden interactiva de maniobra como "borrar todo a la derecha", "Descartar línea", o "Mover puntero y duplicación de palabra", (dd destruye línea / yy copia al clipboard final línea entera / p vuelca pegado / u deshace acción anterior "undo").
*   **Insersión Literal General (Insert Mode)**:
    Mediante atajos (\`i\`, \`a\`, u \`o\`), cambiará de nivel la vista al modo libre edición, la escritura ingresada del usuario se tornara texto y se vaciara normal y crudo puro de letra fuente literal e integral base al documento mismo sin interposición algorítmica!, la finalización voluntaria se efectúa base escape \`ESC\`.
*   **Nivel Ex Generalizado Comando Extendidos Consola**:
    Pulsar dos puntos base "\`:\`" habilita la interfaz del subconjunto orden base consola "Ex-mode", el renglón final a la pantalla permite dictar el pedido literal a comandos como: guardar (\`:w\`), salir base interfaz (\`:q\`), u guardar confirmación alterando obligando y saliendo paralelamente seguro conjunto unificado definitivo y extremo a archivo central local definitivo puro (\`:wq!\`).
    `,
  },

  // ─── TOPIC 4: Dispositivos, Sistemas de Archivos y Jerarquía (104) ───
  'lpic1-104-1-1': {
    title: 'Establecer Particiones y Sistemas de Archivos',
    content: `
Conformación global fundamental organizativa en base bloques discos general para interactuar sistema UNIX/Linux!

La partición base general de dispositivo debe forjarse mediante estructurador lógico sectorial de disco general en utilidad en línea de comandos. Herramientas MBR tradicionales como (\`fdisk /dev/sdb\`), iteraciones exclusivas para estructura GPT de gran tamaño como (\`gdisk\`), o la consolidativa GNU general alternativa con aplicancias instantáneas al momento de formato en vivo en tiempo real integral sin confirmaciones previas y retroceso a guardado ("write") manual interactivo general al formato puro base actual "parted" / "GNU parted" en discos bases!.

Creación final e inyección formateada formal de Filesystems lógicos globales a tabla de base MBR partición bruta inicial, la estructura \`ext4\` común utilitaria principal de SO moderno global y general de GNU:
1.  \`mkfs.ext4 /dev/sdb1\`: Crea la retícula lógica para carpetas sobre disco crudo e inicial formal. Formateado estándar con Journal de base (Ext 4/3) predeterminado global para el nodo bloque particular.
2.  \`mkswap /dev/sdb2\` (y reactivarlo \`swapon /dev/sdb2\`): Creación específica sector base de volcamiento y volcado ram swap intercambio partición sobre nodos locales en caso de saturación, vital!.
    `,
  },
  'lpic1-104-2-1': {
    title: 'Mantenimiento del Sistema de Archivos de Disco',
    content: `
Las rutinas preventivas integran reportes visuales de disco o chequeo de errores general del clúster sector lógico en mal funcionamiento!

*   **Inspección del volumen libre Espacial Integral**:
    Tanto para particiones activamente formales reportando consumos genéricos e instancias vaciadas bajo formato Megas o Gigas humanamente entendibles legibles (-h Human Readable) se efectúa a modo informativo con visual global usando el base genérico disco: \`df -h\`.
    Al inspeccionar una gran avalancha de saturación excesiva "misteriosa" se efectúa el utilitario calculador recursivo en cascada del uso de archivos \`du -h\` con limitadores \`-max-depth\` o sub-bandera iterativa sumarizada resumida final exclusiva \`du -sh\`!.
*   **Intervenciones de reparación fsck integral**:
    File System Check de consistencia! Las estructuras "Sucias" de fallos eléctricos no limpiados serán comprobadas localizando corrompimientos, inodes fantasmas, pero es estrictamente OBLIGATORIO accionar rutinas sobre entornos formales inactivos, "UNMOUNT" o particiones Desmontadas base pura en el SO! Modificar bloque interactivo encendido re-destrozará cualquier log-journal lógico y aniquilará la base salvable de ext4 base final inminente!. Para XFS especializado y alternativo a ext4 (Ej RedHat) usase formal e implícitamente \`xfs_repair\` únicamente y exclusivo!.
    `,
  },
  'lpic1-104-3-1': {
    title: 'Montaje de Unidades Temporales y Global',
    content: `
Para proveer a la organización estática del filesystem UNIX/FHS de archivos bases los "Block devices o NODES" periféricos de datos, deberán insertarse a las carpetas bases a voluntad!

El archivo maestro **\`/etc/fstab\`** controla todos aquellos volúmenes formalísimos persistentes (Raíz '/', home, boot etc...) con el fin lógico automático a conectarse interactivamente tras la invocación al sistema central y encendido del arranque normal general!. En \`fstab\` los esquemas estructurales asientan UUID lógicos unificados seriales exactos que evitan y salvaguardan de cambios extraños entre "sda" o "sdb" base disco de placa madre y confusiones de mapeos globales erráticos puros en red.

Poseen Seis Casillas lógicas ordenamientos fstab locales formales: <Dispositivo base ID Original>, <Directorio Carpeta Destinada Terminal / Vínculo al ancla local FHS>, <Sistema Formato Lógico Ext4/Swap...>, <Privilegios Montaje, e.g. Base Lectura / Escritos e.g. "defaults">, e interrupciones en banderas utilitarios históricos <fsck de arranque al orden base (Número del 0-2 dependiente prioritario de inspección)> y finalmente <Sistema de backup dump legado utilitario base obsoleto u activado> en final general numérico.

Montajes eventuales a disco USB base o ISO se accionan terminalmente puramente en orden general rápida: \`mount -t ext4 /dev/sdb1 /mnt\`.
    `,
  },
  'lpic1-104-5-1': {
    title: 'Gestionar Permisos Estándares y Avanzados SO',
    content: `
La seguridad perimetral Linux basa estructura en Tres Esferas base (El Dueno, el Grupo Administrativo Original y El Público Mundial (Others)). 
En sus componentes se desglosa formato de bits Lectura, Escritura, Y ejecución algorítmica de Base (R-W-X general puro, 4-2-1 base sumatoria decimal Numérica octal formal lógica general).
Una estructura normal se establece con "644" equivalente de fichero normal, concediendo escritura a su titular pero estricta visual general de todos ("r w - r - - r - -") generalizado puro!.

### Atributos Avanzados de Intervención:
Linux previene el robo, accesibilidad y usurpación implementando Banderas Excepcionales Base en S G y T.
*   **BIT de Permanencia ("Sticky Bit e.g., t")**: Aplicable a directorios de volcado universal tipo "/tmp". Aunque las directrices concedan públicamente la edición y carga total al público en /tmp base ("777"), un "t" anclado dictamina que absolutamente "Solo y nada más el depositante Original originario titular puede atreverse o poseer privilegios explícitos a accionar o alterar su archivo y borrarlo" salvaguardando reportes lógicos a borroneos base cruzados anónimamente destructivos!.
*   **Set UID, Identidad Falsa de Usurpación Suid (e.g. 4000 o bandera pura "s")**: Esenciales binarios globales, por ejemplo comando de clave base usuario (\`/usr/bin/passwd\`) obligan a editar /etc/shadow el cual únicamente Root puede alterar puramente; el "Set UID" disfraza a cualquier operario general dándole, durante el efímero parpadeo e instante segundo ejecutado de esa base herramienta, todo el poder ilimitado administrativo falso Root original de ese archivo titular general formalmente, para así accionar logrando el trabajo interno encomendado limitado a la clave de usuario!.
    `,
  },
  'lpic1-104-6-1': {
    title: 'Operar Enlaces Rígidos (Hard) y Flexibles Software (Soft)',
    content: `
Un acceso directo UNIX a volúmenes (Links de Múltiples Caminos lógicos) interconectan de modos muy dispares.

*   **SOFT Links Flexibles o Simbólicos (\`ln -s\`)**: Son equivalentes puramente abstractos a los atajos simples Windows general!. Generan un diminutivo fichito en bytes de texto base el cual detalla fielmente (Como ruta texto ASCII e.g. \`-> /srv/home/\`) directiva al fichero base subyacente absoluto remoto! Conecta al infinito y soporta de redes y divisiones de particionamiento base distinto! Pero "si a la base original" llegase a eliminarse al fichero o carpetas a mover general, su nombre original será borrado, rompiendo (Broken symlink) el archivo puente colgante base inútilmente para todos formal y corrompido global por el resto ciego del puntero inoperativo finalizado!.
*   **HARD Links Sólidos y Duros (\`ln base_fichero ruta \` (sin S))**: Funcionamiento agresivo profundo local, no es un atajo; el "Hard Link" emula con espejos a niveles bajísimos Inodes absolutos del chip del Filesystem particionado de sistema directo formal base ext4!. Se generan y forjan como "Gemelos Identidicos paralelos" literales con pesos y derechos formales absolutos duplicados puramente locales en idéntica numeración serial pura sectorial interna (\`ls -i\`). No posibilitan anclarse a un disco USB lejano porque al cruzar "filesystems base", un "sector o block lógicos node" entra en conflicto numéricos incompatibles lógicamente a las redes bases! A diferencia con el Symbol, si el componente y nombre inicial resultara extra-borrado con "RM", todos los gemelos paralelos sólidos o Hardlinks van a subsistir intactos puramente y retener el archivo interior bloque de texto o binario puramente intocables asegurados hasta aniquilar todo el ejército clon puro del último gemelo hardlink global final general de ese bloque disco sector base original persistente!.
    `,
  },
  'lpic1-104-7-1': {
    title: 'Directorio del Archivo Global y Archivo de Sistema',
    content: `
Para ordenar un sistema de miles de variables de software aleatorio en el servidor open source sin causar caos de rutas cruzadas por doquier de dependencias locales globales, Linux fundamenta unificada "Normativa Standard base global de jerarquía estructural Organizativa (FHS - Filesystem Hierarchy Standard)".

*   **Peculiaridad Directorios FHS Oficiales Normas Bases Posix**:
    *   **\`/usr\`**: No alberga data editable propia local interactiva a personal, sino binarios y archivos programas read-only puros subyacentes e interconectados al sistema original base del software operativo y general al mundo (Compartible remotamente read only a redes servidor "Unix System Resources"). No confundir base home base!
    *   **\`/etc\`**: Todos aluden aquí la sala y repositorio global a ficheros editados puramente configuración texto plano análogos base global al entorno, servicios e red máquina interna!.
    *   **\`/var\`**: Directorio variable de contenido colosal en engrosamiento (Crece minuto a minuto interactivamente: base datos relacionales de SQL, reportes de sistema \`/var/log\`, buzones postales u correos masivos locales globales SMTP o caché puras locales descargas formales bases integradas APT).
    *   **\`/opt\`**: El refugio puramente opcional foráneo y blindado a programas monolíticos de manufactura de terceros gigantes independientes; donde las librerías propias o gigantes privados cerrados o no centralizados por repositorios APT (ej: una instancia de Oracle privada base corporativa central) reposan independientemente base global auto ejecutables ajenos sin contaminar todo directorio local dependencias \`/usr\` y subsistema generalizado central oficial al servidor nativo principal global SO nativo integral!!.
    `,
  },
}
