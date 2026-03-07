// LPIC-1 102 Quiz Pool — Portuguese — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_pt = [
  // ─── 105.1 Personalizar e usar o ambiente shell (10 questões) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Qual arquivo é executado quando um usuário fecha um shell Bash de login ?",
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: "~/.bash_logout é usado especificamente para tarefas de limpeza ao sair de um shell Bash de login."
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Qual diretório contém arquivos de configuração padrão que são copiados para o diretório pessoal de um novo usuário durante a criação de sua conta ?",
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: "O diretório /etc/skel (skeleton) armazena arquivos ocultos padrão para novos usuários."
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual é a forma correta de tornar uma variável 'MYVAR' acessível aos processos filhos do shell atual?",
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: "O comando 'export' transforma uma variável de shell em uma variável de ambiente."
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual arquivo deve ser editado para definir aliases para todos os usuários em um shell Bash ?",
    options: ['~/.bashrc', '/etc/bashrc ou /etc/bash.bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: "Aliases e funções de todo o sistema devem normalmente ser colocados em /etc/bashrc ou /etc/bash.bashrc.",
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual é o objetivo do comando `source` (ou do operador `.`) ?",
    options: [
      'Compilar um script shell',
      'Executar um script no ambiente shell atual sem iniciar um subshell',
      'Baixar um arquivo da Internet',
      'Redefinir o shell para seu estado padrão'
    ],
    correct: 1,
    explanation: "`source` (ou `.`) executa um arquivo no contexto do shell atual, permitindo que ele modifique variáveis e funções existentes.",
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Qual variável contém o caminho de pesquisa para o comando `unalias` ?",
    options: ['PATH', 'ALIAS_PATH', 'O shell não usa um caminho para aliases', 'BASH_ALIASES'],
    correct: 2,
    explanation: "Aliases são armazenados em memória no ambiente de shell atual ; não há caminho de pesquisa baseado em disco.",
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual comando mostra todas as variáveis de ambiente atualmente definidas ?",
    options: ['set', 'env', 'export -p', 'Tanto env quanto export -p'],
    correct: 3,
    explanation: "`env` mostra variáveis exportadas, e `export -p` as lista em um formato destinado à entrada do shell.",
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Qual arquivo é lido primeiro por um shell de login Bash para configuração de todo o sistema ?",
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: "Um shell de login lê primeiro o /etc/profile, que geralmente carrega outros arquivos em /etc/profile.d/.",
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Como remover uma variável de ambiente chamada 'TEMP_DATA' pelo resto da sessão ?",
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: "`unset` remove uma variável ou função do ambiente shell atual.",
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Qual recurso do Bash permite usar `ll` em vez de digitar `ls -l` ?",
    options: ['Função', 'Link', 'Alias', 'Redirecionamento'],
    correct: 2,
    explanation: "Um alias fornece um atalho para executar comandos mais longos com sinalizadores específicos.",
  },

  // ─── 105.2 Personalizar ou escrever scripts simples (10 questões) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Em um script bash, qual sequência de caracteres indica o interpretador a ser usado para executar o script ?",
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: "O shebang (#!) no início da primeira linha define o interpretador do script."
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual operador lógico executa o segundo comando apenas se o primeiro comando falhar ?",
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: "O operador OR (||) é usado para tratamento de erros ou execução condicional em falhas."
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Como atribuir corretamente a saída do comando 'whoami' a uma variável chamada 'USER' ?",
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: "$(comando) executa a substituição de comando em shells modernos."
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual variável contém o número de argumentos passados para um script shell ?",
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: "$# armazena a contagem de parâmetros posicionais."
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Qual é o código de saída de um comando que foi concluído com sucesso ?",
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: "No Unix/Linux, 0 significa sucesso ; qualquer valor diferente de zero indica um erro."
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Como verificar se um arquivo chamado `data.txt` existe em um script shell ?",
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      'Tanto [ -e data.txt ] quanto [ -f data.txt ] são válidos'
    ],
    correct: 3,
    explanation: "`-e` verifica a existência ; `-f` verifica especificamente se é um arquivo regular.",
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "O que a variável `$?` representa em scripts shell ?",
    options: [
      'O PID do shell atual',
      'O status de saída do último comando executado',
      'O primeiro argumento do script',
      'Um número aleatório gerado pelo shell'
    ],
    correct: 1,
    explanation: "$? captura o código de retorno do comando de primeiro plano mais recente.",
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Qual estrutura de loop você usaria para iterar através de uma lista de nomes de arquivos ?",
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: "O loop `for` é ideal para iterar sobre uma lista ou conjunto de itens definido.",
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "Em um script, como você acessa o segundo argumento passado para ele ?",
    options: ['$2', '${2}', 'Tanto $2 quanto ${2}', '$ARG2'],
    correct: 2,
    explanation: "$2 ou ${2} refere-se ao segundo parâmetro posicional.",
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: "Qual é a sintaxe correta para uma condição `if` simples no Bash ?",
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: "Um `if` do Bash requer a palavra-chave `then` (frequentemente com ponto e vírgula na mesma linha) e deve terminar com `fi`.",
  },
];
