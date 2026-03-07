// LPIC-1 101 Quiz — Tópico 3: Comandos GNU e Unix (Português)

export const lpic1_101_topic3_pt = [
  // ─── 103.1 Trabalhar na linha de comando (7 questões) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual dos seguintes comandos determina se um determinado nome é um comando interno da shell, um alias ou um comando externo?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'O comando `type` indica exatamente como a shell interpreta um nome (builtin, alias, ficheiro ou função).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual variável de ambiente contém uma lista de diretórios separados por dois pontos onde a shell procura por comandos executáveis?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'A variável $PATH define os diretórios onde a shell procura ficheiros executáveis.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando exibe informações breves sobre a arquitetura do sistema, versão do kernel e nome do host?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname com a flag -a (all) imprime toda a informação do sistema, incluindo kernel e hardware.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Como se define uma variável de shell chamada `MINHAVAR` com o texto "Olá" para que esteja disponível em processos filhos?',
    options: [
      'MINHAVAR="Olá"',
      'set MINHAVAR="Olá"',
      'export MINHAVAR="Olá"',
      'env MINHAVAR="Olá"'
    ],
    correct: 2,
    explanation: 'export cria uma variável de ambiente que será herdada por todos os processos filhos.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual é a principal diferença entre aspas simples (\') e duplas (") no Bash?',
    options: [
      'Aspas simples permitem expansão de variáveis ($VAR), as duplas não',
      'Aspas duplas permitem expansão de variáveis ($VAR), as simples evitam qualquer expansão',
      'Aspas duplas são para números, as simples para strings',
      'Não há diferença'
    ],
    correct: 1,
    explanation: 'As aspas duplas permitem a expansão de variáveis, enquanto as simples preservam o valor literal de todos os caracteres.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual atalho de teclado inicia uma pesquisa reversa no histórico de comandos do Bash?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R inicia uma pesquisa reversa, permitindo recuperar comandos executados anteriormente.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'O que faz o comando `!55` no Bash?',
    options: [
      'Mata o processo com PID 55',
      'Executa o comando número 55 da lista do histórico',
      'Apaga o comando número 55 do histórico',
      'Executa o comando "55"'
    ],
    correct: 1,
    explanation: 'O símbolo `!` invoca a expansão do histórico. `!n` refere-se à linha de comando n na lista do histórico.',
  },

  // ─── 103.2 Processar fluxos de texto usando filtros (6 questões) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando exibe as ÚLTIMAS 10 linhas de um ficheiro por padrão?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail imprime as últimas linhas de um ficheiro; 10 linhas por padrão.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando lê um ficheiro e o exibe prefixando números de linha?',
    options: ['nl', 'wc -l', 'cat -n', 'Tanto nl quanto cat -n'],
    correct: 3,
    explanation: 'Tanto `nl` (number lines) quanto `cat -n` prefixam as linhas de saída com números.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'O comando `wc` conta quais os três atributos padrão de um ficheiro?',
    options: [
      'Linhas, caracteres, bytes',
      'Frases, palavras, caracteres',
      'Linhas, palavras, bytes/caracteres',
      'Linhas, palavras, parágrafos'
    ],
    correct: 2,
    explanation: 'wc (word count) mostra o número de linhas, palavras e bytes/caracteres.',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Para remover linhas duplicadas consecutivas de um ficheiro ordenado, qual comando é usado?',
    options: ['sort -u', 'uniq', 'Tanto sort -u quanto uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` remove duplicados consecutivos. `sort -u` ordena e remove duplicados globalmente.',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Qual comando extrai o primeiro campo do ficheiro /etc/passwd, assumindo que os campos estão separados por dois pontos (":")?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` define o delimitador como dois pontos, e `-f1` seleciona o primeiro campo.',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando sed substitui completamente a palavra "maçã" por "laranja" em cada ocorrência no ficheiro.txt?',
    options: ['sed "r/maçã/laranja/" ficheiro.txt', 'sed "s/maçã/laranja/g" ficheiro.txt', 'sed "s/maçã/laranja" ficheiro.txt', 'sed "sub/maçã/laranja/all" ficheiro.txt'],
    correct: 1,
    explanation: 'O comando de substituição `s/padrão/substituição/g` substitui todas as ocorrências em cada linha.',
  },

  // ─── 103.3 Gestão básica de ficheiros (6 questões) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando cria um ficheiro vazio chamado "notas.txt" ou atualiza a sua data/hora se já existir?',
    options: ['create notas.txt', 'touch notas.txt', 'echo notas.txt', 'mkfile notas.txt'],
    correct: 1,
    explanation: 'touch altera os carimbos de data/hora dos ficheiros ou cria um ficheiro vazio se não existir.',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando cria um diretório chamado `projeto` e o seu pai `trabalho` se não existir?',
    options: ['mkdir trabalho/projeto', 'mkdir -p trabalho/projeto', 'mkdir --all trabalho/projeto', 'mkdir -r trabalho/projeto'],
    correct: 1,
    explanation: 'mkdir -p (--parents) cria diretórios intermédios conforme necessário.',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Deseja copiar um diretório completo `/docs` e o seu conteúdo para `/backup`. Qual comando usa?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'A flag -r (recursivo) instrui o `cp` a copiar diretórios juntamente com o seu conteúdo.',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'No globbing do Bash, o que corresponde ao caractere curinga `?`?',
    options: ['Qualquer número de caracteres', 'Exatamente um caractere', 'Zero ou um caractere', 'Apenas números'],
    correct: 1,
    explanation: 'No globbing, `?` corresponde a exatamente um caractere.',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando procura por um ficheiro no sistema de ficheiros em tempo real?',
    options: ['locate ficheiro', 'updatedb', 'grep ficheiro', 'find / -name ficheiro'],
    correct: 3,
    explanation: '`find` percorre a árvore do sistema de ficheiros real para localizar ficheiros.',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Qual comando comprime o diretório `/home/utilizador` num único ficheiro tar comprimido com gzip?',
    options: [
      'tar -xzvf backup.tar.gz /home/utilizador',
      'tar -czvf backup.tar.gz /home/utilizador',
      'zip backup.tar.gz /home/utilizador',
      'gzip /home/utilizador > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` cria (-c) um ficheiro comprimido com gzip (-z).',
  },

  // ─── 103.4 Usar fluxos, tubos e redirecionamentos (4 questões) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'O que faz o operador de redirecionamento `>>`?',
    options: [
      'Redireciona stdout para um ficheiro, sobrescrevendo-o',
      'Redireciona stdin de um ficheiro',
      'Redireciona stdout para um ficheiro, anexando ao final',
      'Redireciona stderr para um ficheiro'
    ],
    correct: 2,
    explanation: '`>>` anexa o stdout a um ficheiro sem eliminar o conteúdo existente.',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Como se redireciona o erro padrão (stderr) para um ficheiro chamado `erro.log`?',
    options: ['> erro.log', '2> erro.log', '&> erro.log', '1> erro.log'],
    correct: 1,
    explanation: 'O descritor de ficheiro 2 representa o stderr; `2>` redireciona-o.',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Qual é o efeito de adicionar `2>&1` a um comando?',
    options: [
      'Redireciona o stdout para o stderr',
      'Envia tanto stdout como stderr para o mesmo local',
      'Silencia toda a saída',
      'Executa o comando 2 e depois o comando 1'
    ],
    correct: 1,
    explanation: '`2>&1` redireciona o stderr para onde quer que o stdout esteja a apontar no momento.',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual ferramenta lê da entrada padrão e escreve TANTO no stdout como num ou mais ficheiros?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` divide a entrada, enviando-a tanto para a saída como para um ficheiro.',
  },

  // ─── 103.5 Criar, monitorizar e matar processos (5 questões) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando fornece uma visão dinâmica e em tempo real dos processos em execução no sistema?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` exibe uma lista interativa e atualizada dos processos do sistema.',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual é o sinal padrão enviado pelo comando `kill` se nenhum for especificado?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` envia SIGTERM (15) por padrão, solicitando um encerramento limpo.',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Se um processo ignora um comando kill normal, como pode forçar o seu encerramento imediato?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` envia SIGKILL, que não pode ser ignorado pelo processo.',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Qual atalho de teclado suspende o trabalho ativo em primeiro plano num terminal?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z suspende o processo em primeiro plano, que pode depois ser retomado ou movido para segundo plano.',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Como se executa um comando para que continue a correr mesmo após fechar o terminal?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` torna um comando imune ao sinal de desligamento (SIGHUP).',
  },

  // ─── 103.6 Modificar as prioridades de execução dos processos (3 questões) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'No Linux, qual é o intervalo válido de valores "nice"?',
    options: ['De 0 a 100', 'De -20 a +19', 'De -19 a +20', 'De 1 a 99'],
    correct: 1,
    explanation: 'Os valores nice vão de -20 (prioridade máxima) a +19 (prioridade mínima).',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Qual ação um utilizador normal (não-root) pode realizar em relação às prioridades de processos?',
    options: [
      'Diminuir o valor nice dos seus próprios processos',
      'Aumentar o valor nice (diminuir prioridade) dos seus próprios processos',
      'Alterar a prioridade do processo de qualquer utilizador',
      'Definir o valor nice para -20'
    ],
    correct: 1,
    explanation: 'Os utilizadores normais só podem aumentar o valor nice (baixar a prioridade) dos seus próprios processos.',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando inicia um novo processo com uma prioridade de escalonamento ajustada?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` inicia um novo processo com prioridade modificada; `renice` altera processos existentes.',
  },

  // ─── 103.7 Pesquisar em ficheiros de texto usando expressões regulares (2 questões) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Em Expressões Regulares, o que representa a âncora `^`?',
    options: ['O fim da linha', 'Qualquer grupo de caracteres', 'O início da linha', 'Negação'],
    correct: 2,
    explanation: 'O caractere `^` ancora a correspondência no início da linha.',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Numa expressão regular, o que significa `.*`?',
    options: [
      'Zero ou mais pontos literais',
      'Um ponto literal seguido de um asterisco literal',
      'Zero ou mais de qualquer caractere',
      'Exatamente um ponto'
    ],
    correct: 2,
    explanation: 'O ponto corresponde a qualquer caractere, e o asterisco a zero ou mais; juntos correspondem a qualquer string.',
  },

  // ─── 103.8 Edição básica de ficheiros (3 questões) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Ao abrir o vi, qual modo está ativo por padrão?',
    options: ['Modo de inserção', 'Modo visual', 'Modo normal (comando)', 'Modo Ex'],
    correct: 2,
    explanation: 'O vi abre no modo Normal, onde as teclas são interpretadas como comandos.',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'No modo Normal do vi, o que faz o comando `dd`?',
    options: ['Apaga o caractere atual', 'Apaga toda a linha atual', 'Duplica a linha atual', 'Guarda o documento'],
    correct: 1,
    explanation: '`dd` apaga (corta) toda a linha atual no vi.',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Como se força o vi a sair sem guardar as alterações?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` obriga o editor a sair sem guardar as alterações.',
  },
];
