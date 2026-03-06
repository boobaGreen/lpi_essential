export const lpic2_extendedContent_es = {
  'lpic2-200-1': {
    title: 'Medir el Uso de Recursos',
    content: `
# Análisis Profundo: Midiendo los Recursos del Sistema

La planificación de capacidad (Capacity Planning) comienza con la comprensión de la base actual de tu servidor. Para aprobar LPIC-2, debes estar listo para diagnosticar cuellos de botella.

## Monitorizando la Memoria
Usando \`free -m\` o \`vmstat\`. El comando \`vmstat\` revela cuánta presión sufre el sistema.
\`\`\`bash
vmstat 2 5
\`\`\`
Esto ejecuta el lector estadístico 5 veces con intervalos de 2 segundos. Inspecciona las columnas \`si\` (swap in) y \`so\` (swap out).

## Monitorizando discos e I/O
El poderoso \`iostat\` proveniente del paquete \`sysstat\`:
\`\`\`bash
iostat -x 2
\`\`\`
Nos brinda estadísticas extendidas como:
- \`%util\`: Porcentaje de saturación del ancho de banda del disco.
- \`await\`: Tiempo promedio de espera en la cola de I/O.
    `
  }
}
