export const rhcsaExtendedContentPT = {
  'rhcsa-1-1': {
    title: 'Análise Aprofundada: Redirecionamento e Descritores',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Descritores de Ficheiros' },
      { type: 'paragraph', text: 'No Linux "tudo é um ficheiro" e todos os processos abrem por padrão três descritores (FD):' },
      { type: 'table', headers: ['FD', 'Nome', 'Finalidade Padrão'], rows: [
        ['0', 'stdin', 'Entrada do teclado'],
        ['1', 'stdout', 'Saída no terminal (sucesso)'],
        ['2', 'stderr', 'Mensagens de erro no terminal'],
      ]},
      { type: 'code', title: 'Combinações de Redirecionamentos', prompt: '# Escreve stdout em um arquivo e descarta mensagens de erro stderr\n$ command > output.txt 2> /dev/null\n\n# Envia erros para a saída normal (2>&1) e escreve tudo num arquivo\n$ command > output.txt 2>&1\n\n# Truque em Bash para unificar stdout e stderr num comando simples\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Dica Prática de Exame', content: 'Ao pesquisar por "find /", irá deparar-se com muitos erros de "Permission denied". Para ter resultados limpos adicione sempre "2> /dev/null" ao final.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Análise Aprofundada: Arquitetura do LVM',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'A Camada Intermédia LVM' },
      { type: 'paragraph', text: 'O Gestor de Volumes Lógicos (LVM) abstrai os discos físicos, facilitando operações de redimensionamento e expansão.' },
      { type: 'list', items: [
        { term: 'Elemento Físico (PE)', desc: 'Blocos padronizados de alocação física do LVM (têm 4MB por defeito).' },
        { term: 'Elemento Lógico (LE)', desc: 'Apontadores para os blocos físicos. Correspondem num mapeamento 1:1, exceto em volumes configurados como "espelho" (RAID).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'Cuidado no exame prático de certificação onde poderão existir questões de criação de Volumes (VG) com tamanho específico (PE de 16M usando "vgcreate -s 16M nomedovg /dev/sdb1").' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Análise Aprofundada: Resolução de Anomalias SELinux',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Estratégia Definitiva' },
      { type: 'paragraph', text: 'O serviço falha aparentemente sem motivo? Pode ser o bloqueio de segurança silencioso.' },
      { type: 'timeline', events: [
        { year: 'Passo 1', title: 'O detetive (Permissive Mode)', desc: 'Execute "setenforce 0" e volte a ligar o serviço que dava erro. Se agora o serviço subir, foi o SELinux. Ative de volta com "setenforce 1".' },
        { year: 'Passo 2', title: 'O rasto deixado (Audit logs)', desc: 'Consulte /var/log/audit/audit.log para ler os "denied" originados pelo AVC, ou melhor ainda "ausearch -m AVC -ts recent".' },
        { year: 'Passo 3', title: 'O desfecho do mistério', desc: 'Empregue ferramentas de relatório visual para SELinux como sealert ("sealert -a /var/log/audit/audit.log"). Isto indicará qual o comando literal a utilizar (setsebool ou semanage fcontext).' },
      ]},
    ]
  }
}
