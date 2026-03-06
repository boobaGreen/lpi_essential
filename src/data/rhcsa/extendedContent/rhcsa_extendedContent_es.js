export const rhcsaExtendedContentES = {
  'rhcsa-1-1': {
    title: 'Análisis Profundo: Redirección Avanzada y Descriptores',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Descriptores de Archivos en Linux' },
      { type: 'paragraph', text: 'En Linux "todo es un archivo", incluyendo los flujos de entrada/salida. Cada proceso tiene tres descriptores de archivos (FD) estándar abiertos por defecto:' },
      { type: 'table', headers: ['FD', 'Nombre', 'Propósito Estándar'], rows: [
        ['0', 'stdin', 'Entrada de teclado'],
        ['1', 'stdout', 'Salida de terminal (éxito)'],
        ['2', 'stderr', 'Salida de terminal (errores)'],
      ]},
      { type: 'code', title: 'Redirección Combinada', prompt: '# Escribe stdout a archivo y descarta stderr\n$ command > output.txt 2> /dev/null\n\n# Redirige stderr hacia stdout (2>&1), y luego stdout al archivo\n$ command > output.txt 2>&1\n\n# Atajo Bash para stderr+stdout al mismo archivo\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Consejo de Examen', content: 'Al usar find / o comandos que generan muchos errores de "Permission denied", añade "2> /dev/null" para limpiar la pantalla y ver solo las coincidencias reales.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Análisis Profundo: Arquitectura LVM',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Físico vs Lógico' },
      { type: 'paragraph', text: 'El Gestor de Volúmenes Lógicos (LVM) añade una capa de abstracción entre los discos físicos y los sistemas de archivos, otorgando una flexibilidad imposible de lograr con particiones tradicionales.' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'Los bloques de construcción fundamentales de LVM (por defecto 4MB). Un PV se divide internamente en bloques PE.' },
        { term: 'Logical Element (LE)', desc: 'Se mapean 1:1 hacia los PE (o 1:N en escenarios de espejado/mirror).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'En el examen, es posible que debas crear un Volume Group (VG) con un tamaño de PE específico (ej. 16MB) utilizando el comando: "vgcreate -s 16M mivg /dev/sdb1".' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Análisis Profundo: Resolución de Problemas SELinux',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Flujo de Resolución (Troubleshooting)' },
      { type: 'paragraph', text: 'Si un servicio está siendo bloqueado misteriosamente, ¿qué hacer?' },
      { type: 'timeline', events: [
        { year: 'Paso 1', title: 'Verificar si es culpa de SELinux', desc: 'Ejecuta "setenforce 0" y reinicia el servicio. Si ahora funciona, SELinux es el culpable. Vuelve a habilitarlo con "setenforce 1".' },
        { year: 'Paso 2', title: 'Revisar los registros (logs)', desc: 'Revisa /var/log/audit/audit.log buscando mensajes "denied" (rechazo): ausearch -m AVC -ts recent' },
        { year: 'Paso 3', title: 'Generar soluciones', desc: 'Usa audit2allow o sealert. "sealert -a /var/log/audit/audit.log" te dictará exactamente el comando necesario para arreglarlo (ej. usar setsebool o semanage fcontext).' },
      ]},
    ]
  }
}
