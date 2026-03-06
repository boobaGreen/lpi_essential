export const lpic2_extendedContent_pt = {
  'lpic2-200-1': {
    title: 'Medição de Recursos Computacionais',
    content: `
# Análise em Profundidade: Avaliando Recursos 

Planejamento (Capacity Planning) visa prevenir congestionamentos futuros e lentidões. Todo o capítulo inicial trata da arte de analisar as estatísticas vitais do hardware.

## Inspecionando a Paginação (SWAP)
Fazemos através da ferramenta \`vmstat\`. O \`vmstat\` ilustra quão grave é a falta de memória física do Kernel e se o acesso às partições discos rígidos via \`Swap\` comprometeram as taxas.
\`\`\`bash
vmstat 2 5
\`\`\`
Deste modo o terminal será instado à apurar dados de leituras \`5\` vezes consecultivas com hiatos curtos de \`2\` segundos intercalares . 
Anote que os gargalos estão em constantes repasses \`si\` (swap in) - Leitura - , e escritas de sobrecargas de RAM \`so\` (swap out).

## Gargalo Rígido I/O de Storage Puros.
Poderoso componente importado pela API do sysstat System : \`iostat\`:
\`\`\`bash
iostat -x 2
\`\`\`
Propiciará visões aprofundadas com métricas exclusivas como:
- \`%util\`: Porcentagem percentílica de taxa saturada da capacidade ou Banda Escrita/Leitura Do Próprio HardDrive Físico Atribuído a LInha Alvo .
- \`await\`: Tempos Demorosos do Delay Médios das Listas em Aguardo do Setor Física em Processo Fila de Escrita de Disco Requerida (Tempo Que a Operação demorou Pura encolando e finalizando Milisegundos).
    `
  }
}
