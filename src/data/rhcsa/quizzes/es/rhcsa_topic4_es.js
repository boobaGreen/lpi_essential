// RHCSA Quiz — Topic 4: Local Storage — LVM (Spanish)
// 20 MCQ questions

export const rhcsaTopic4QuizzesES = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando muestra los dispositivos de bloques y su jerarquía en forma de árbol?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: 'lsblk (list block devices) dibuja el árbol de discos, particiones y volúmenes LVM mostrando tamaños y puntos de montaje actuales.',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'En RHEL9, ¿cuál es la herramienta interactiva oficial y recomendada para crear particiones modernas basadas en GPT?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: 'parted es el estándar oficial de Red Hat para gestionar GPT, aunque fdisk (desde su versión 2.26) también soporta discos GPT sin problemas.',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'En base al particionamiento, ¿cual es la sintaxis correcta no interactiva en parted para crear dentro del disco /dev/sdb una partición ocupando desde el GiB 1 hasta el GiB 2?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'La sintaxis de creación de parted exige la directiva: mkpart <tipo> <formato_etiqueta> <inicio> <fin>.',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando(s) te permite(n) imprimir en terminal el identificador universal UUID único de cada disco formateado?',
    options: ['lsblk -f', 'blkid', 'df -T', 'Tanto A como B son correctas'],
    correct: 3,
    explanation: 'blkid da una salida raw con las UUID explícitas y etiquetas, mientras que lsblk -f te lo dibuja en una columna más humana.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Si acabas de trocear y crear una nueva partición pero el comando reservado no la detecta, ¿qué comando fuerza al kernel de Linux a releer la tabla de particiones sin tener que reiniciar todo el hardware?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'partprobe solicita una interrupción del sistema para notificar al kernel las nuevas geometrías de discos y particiones disponibles.',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Al trabajar con volúmenes lógicos, ¿cuál es el estricto orden cronológico ascendente de las tres agrupaciones en LVM?',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'La regla de oro es: el disco crudo se marca (PV), varios PV se engloban en la piscina madre (VG), y de allí se cortan las porciones finales en tajadas (LV).',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando marca e inicializa una partición desnuda como apta para ser absorbida por un contenedor LVM?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: 'pvcreate (Physical Volume creation) graba una etiqueta LVM2 en la cabecera de la partición cruda.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Cómo fabricas un "Grupo de Volúmenes" en LVM bautizado como "datavg" unificando los discos físicos sdb1 y sdc1 sumando su capacidad?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'La sintaxis agrupa directo hacia la meta: vgcreate <nombre_del_grupo_maestro> <disco1> <disco2>.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Trasladaron físicamente e instalaron el nuevo disco externo (sdd1) al host. ¿Cómo añades al instante ese disco PV al VG actual ("datavg") dándoles más megas globales inyectados?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: 'vgextend <nombre_grupo> <nueva_particion_física>. Tras ello, vgs te mostrará la suma giga por giga aumentada de la nueva piscina base.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '¿Qué comando te escupe la información profunda sobre métricas vitales como nombre total, tamaño máximo disponible e identificador estricto interno de los PE (Physical Extents) de tus VG?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: 'vgdisplay lista a gran precisión todo sobre sus metadatos del Volume Group.',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Dada la piscina "datavg", invoca la creación de una partición sub-lógica puramente LVM que de forma exacta acapare 2GiB bautizada en LVM como "datalv".',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'lvcreate -L <tam> (Letra L Mayúscula son Gigas absolutos) -n <nombrete_lógico> <nombre_grupo_contenedor>.',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Urge inyectar en frío 1GB entero físico a un disco LVM ext4 llamado "datalv", forzando SIN ERRORES (y a posteriori) también ampliar tu tabla de archivos EXT virtual del FS.',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'Las opciones A y B son 100% correctas',
    ],
    correct: 3,
    explanation: 'La opción A lo hace paso por paso manual (alargar raw, redimensionar filesystem). La B es el atajo mágico moderno -r (resize) on-the-fly.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Has alargado con éxito en LVM puro la cuota de raw storage usando tipo de partición XFS. ¿Cuál comando a continuación debes lanzar AL AIRE libre sobre su punto montado /home/mario?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'XFS *sólo* puede crecer apuntando explícitamente y como argumento obligatorio al nombre de su carpeta real montada, a diferencia de resize2fs (EXT) que exige como argumento que indiques todo el dev mapper (la ruta cruda bloque disco).',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'La estructura por defecto del demonio Device Mapper anclará un disco en el host tras arrancar su Volume Logical. ¿A dónde se dirigen (si le pasas su path) todos los volcados fs mkfs automáticos?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'El udev linux engancha los enrutadores lógicos nativos dentro de /dev/<vgname>/<lvname>. Existe su alias en /dev/mapper/<vgname>-<lvname>, pero la primera ruta es la estándar usada.',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Para observar y chequear si hay un over-usage o ver velozmente "si la liamos", ¿cúal invocas para una visual limpia, pequeña pero efectiva de tus Logic Volumes?',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'Tanto B como C'],
    correct: 3,
    explanation: 'lvs te resume las filas súper compactado (perfecto para consola) mientras que lvdisplay es más verboso pero la información de fondo es idéntica.',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '¿Por qué la best-practice RHCSA en /etc/fstab jamás te dejaría usar como root paths al estilo "/dev/sdc1"?',
    options: [
      'El número crudo de UUID es tres veces más corto a mano',
      'Porque si sacas y rotas un disco USB o disco C: los cables sata cambian tu identificador SDB por SDC. La UUID en cambio siempre se suelda magnéticamente al file-system.',
      'Sencillamente las nomenclaturas "dev" están depreciadas e inoperativas ya por kernel.',
      'Mejora un 2% tu rapidez de carga de caché IOPS del Kernel.',
    ],
    correct: 1,
    explanation: 'En Linux las letras a,b,c son asignadas según el orden de escaneo al arrancar las controladoras del BIOS. Si quitas un disco, lo que antes era /sdb pasa a ser /sda y romperá tu sistema al no encajar.',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Has editado como sysadmin crudo en nano/vi tu tabla vital de inicio `/etc/fstab`. ¿Cómo lo chequeas sin auto-boicotearte destruyendo tu red on-the-fly ni reiniciando?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: 'mount -a lee el archivo fstab al completo e intentará re-amarrar todos aquellos discos omitidos. Si falla, botará explícitamente tu error y podrás quitarlo.',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Estructura una línea 100% válida en crudo fstab de un volumen LVM que auto-ensamble por ext4 sobre su puerto /data',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Formato inamovible de columnas fstab: 1:<Dispositivo_O_UUID> 2:<Destino_Punto_De_Montaje> 3:<Tipo_De_File_System> 4:<Opciones/defaults> 5:<Volcar_Backup_Dump(0)> 6:<Chequeo_fysck_al_arrancar(0)>.',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Debes habilitar el Paginador Swap del kernel localizando tu reserva cruda ya apartada en disco sobre `sdb2`.',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'mkswap implanta el meta-código y las firmas reservando el volcado Swap, mientras que swapon prende finalmente la máquina para comer a la de ya desde esa partición de la ram extendida.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Comandos universales aptos en tu RHEL9 Terminal para listar cómo andan las métricas ocupantes vivas del área Swap:',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'Todas sin excepción son verdieras, óptimas y útiles'],
    correct: 3,
    explanation: '`swapon` lo expone detallando caminos (paths). `cat proc` te lo pinta via archivo crudo nativo linuxero, y `free` es el amado visor resumido mem ram.',
  },
]
