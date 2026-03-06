export const rhcsaExtendedContentIT = {
  'rhcsa-1-1': {
    title: 'Approfondimento: Redirezione Avanzata e Descrittori',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'I Descrittori di File in Linux' },
      { type: 'paragraph', text: 'In Linux "tutto è un file", compresi i flussi di input/output. Ogni processo ha per default tre file descriptor (FD) aperti:' },
      { type: 'table', headers: ['FD', 'Nome', 'Scopo Standard'], rows: [
        ['0', 'stdin', 'Input da tastiera'],
        ['1', 'stdout', 'Output terminale (successo)'],
        ['2', 'stderr', 'Output terminale (errori)'],
      ]},
      { type: 'code', title: 'Redirezione combinata', prompt: '# Scrive stdout su file e scarta stderr\n$ comando > output.txt 2> /dev/null\n\n# Redirige stderr su stdout (2>&1), e poi stdout su file\n$ comando > output.txt 2>&1\n\n# Scorciatoia bash per stderr+stdout su file\n$ comando &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Trucco per l\'esame', content: 'Quando usi find / o comandi che generano molti "Permission denied", aggiungi "2> /dev/null" alla fine per avere un output pulito con i soli risultati utili.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Approfondimento: Architettura LVM',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Physical vs Logical' },
      { type: 'paragraph', text: 'Il Logical Volume Manager (LVM) aggiunge un livello di astrazione tra dischi fisici e filesystem, permettendo flessibilità impossibile con le partizioni tradizionali.' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'Blocchi base di LVM (default 4MB). Un PV è diviso in PE.' },
        { term: 'Logical Element (LE)', desc: 'Mappano 1:1 sui PE (o 1:N in caso di mirror).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'All\'esame potresti dover creare un VG con una dimensione PE specifica (es. 16MB) usando "vgcreate -s 16M nomevg /dev/sdb1".' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Approfondimento: Risoluzione Errori SELinux',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Workflow di Troubleshooting' },
      { type: 'paragraph', text: 'SELinux blocca un servizio. Che fare?' },
      { type: 'timeline', events: [
        { year: 'Step 1', title: 'Verifica se è SELinux', desc: 'Esegui "setenforce 0" e riavvia il servizio. Se funziona, il problema è SELinux. Riabilitalo con "setenforce 1".' },
        { year: 'Step 2', title: 'Controlla i log', desc: 'Guarda /var/log/audit/audit.log cercando "denied" per il processo: ausearch -m AVC -ts recent' },
        { year: 'Step 3', title: 'Genera soluzioni', desc: 'Usa audit2allow o sealert. "sealert -a /var/log/audit/audit.log" ti darà il comando esatto per risolvere (es. setsebool o semanage fcontext).' },
      ]},
    ]
  }
}
