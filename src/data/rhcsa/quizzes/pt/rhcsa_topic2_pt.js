// RHCSA Quiz — Topic 2: Shell Scripting (Português)
// 15 MCQ questions

export const rhcsaTopic2QuizzesPT = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Como você declara (inicializa) uma variável em bash?',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'No bash, as variáveis são declaradas rigorosamente sem espaços ao redor do "=" usando NAME="value". O símbolo $ só é usado posteriomente para ler o valor contido.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual variável especial contém o PID (Process ID) do processo bash atual em execução?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '$$ armazena o PID do processo atual. Adicional: $? = código de saída, $0 = nome do script executado, $! = PID do último job enviado para o background.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'O que o comando `export VARIABLE="value"` faz?',
    options: [
      'Cria uma variável restritamente local para o script atual',
      'Torna a variável disponível (global) para os processos filhos do bash',
      'Salva a variável permanentemente no /etc/environment',
      'Exclui a variável após a execução do script',
    ],
    correct: 1,
    explanation: 'O comando "export" promove a variável local para uma variável de ambiente, permitindo que ela seja passada adiante e lida por processos filhos invocados por este shell.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual sintaxe captura a saída (output) de um comando para dentro de uma variável?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Tanto a opção A quanto a B estão corretas', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Tanto as crases antigas `comando` quanto a sintaxe moderna $() capturam o output. A forma $() é altamente recomendada e preferida porque permite aninhamento e é mais legível.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'O que este script imprimirá e exibirá na tela?\n```bash\nNAME="world"\necho "Hello ${NAME}!"\n```',
    options: ['Hello ${NAME}!', 'Hello world!', 'Hello $NAME!', 'Erro de sintaxe (variável indefinida)'],
    correct: 1,
    explanation: 'O padrão ${NAME} expande o valor da variável NAME, substituindo tudo, inclusive quando o texto está contido de aspas duplas. A saída final será: "Hello world!"',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual verificação interrogará em um bash test (if) se um determinado arquivo simplesmente existe fisicamente?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: 'A chave -e testa se o arquivo ou caminho simplesmente EXISTE (qualquer que seja seu tipo). A chave -f testa se o item existe E obrigatoriamente é um arquivo comum e regular.',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'O que faz este ciclo de iteração (loop) abaixo?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'Imprime: 123 tudo colado em numa única linha',
      'Imprime os números iterativamente: 1, 2, 3 em linhas separadas',
      'Gerará um clássico Erro de sintaxe',
      'Executa o echo uma única vez varrendo o argumento inteiro "1 2 3"',
    ],
    correct: 1,
    explanation: 'O laço for elementar itera sobre cada arg da lista. O echo imprime individualmente o valor percorrido gerando os quebra-cabeças $i em linhas separadas.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual operador do test averígua se duas strings verbais (letras) são iguais em bash?',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'Tanto A quanto C estão corretas no bash'],
    correct: 3,
    explanation: 'No clássico bash, tanto o operador "=" quanto "==" operam de forma equivalente para comparar strings textuais exatas. Já o "-eq" destina-se puramente para comparar números inteiros matemáticos.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Qual sinalizador de teste verifica exclusivamente se o caminho apontado trata-se veridicamente de um diretório (pasta)?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: 'O verificador -d (directory) averigua se o caminho existe fisicamente E se ele é classificado como uma subpasta/diretório. Lembramos -f (file regular), -e (any existe), -r (arquyivo legível).',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Como você formula um impecável loop condicional (while loop) responsável por contar sequencialmente de 1 a 5?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'No bash tradicional e seguro a sintaxe do loop preza: você antes atribui o índice fora (i=1), avalia ele matematicamente sob o teste while [ $i -le (less or equal) 5 ], e incremente logo no fim ((i++)).',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'O que exatamente um operador booleano de test do tipo `[ -z "$VARIABLE" ]` verifica na String?',
    options: [
      'Se a variável vale ou porta o valor matemático do zero (0)',
      'Se a variável contém uma string perfeitamente vazia (tamanho zero)',
      'Se a referida variável se trata numérico (number)',
      'Se a variável de fato existe nas envs globais',
    ],
    correct: 1,
    explanation: 'O operador -z testa implacavelmente se o texto (string) porta o tamanho igual zero (is empty ou length 0). Seu antônimo funcional é o -n para atestar tamanhos positivos preenchidos (not empty).',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Internamente à lógica de execução de um script em bash, o que a variável cifrada `$1` carrega consertiga?',
    options: [
      'A identificação PID bruta do processo do script',
      'O rigoroso e solitário primeiro argumento exato repassado (passado) atrás da execução do script',
      'Apenas o nome bruto de chamada formal do script',
      'A quantidade e total matemático descritivo de argumentos lidos',
    ],
    correct: 1,
    explanation: '$1 armazena religiosamente apenas exato o 1º argumento posicional passado ao final da chamada. Detalhes úteis: $0 = O nome intríseco do script em si, $# = Retorna a contagem numérica de todos args engolidos, $@ = Array completo de todos os argumentos.',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual misteriosa variável cifrada em particular consegue carregar o último código de status e encerramento (exit code) do derradeiro recém anterior exectutado comando?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: 'O glorioso $? relata e entrega vivo o exit code atestado pela última ordem despachada antes. Na convenção Unix: Retornar o 0 = Ouro (Sucesso garantido), Retornar ≠ zero = Crise trágica (Erro fádico).',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Diga na essência prática qual o real motivo e severa diferença entre repassar um array do tipo `$@` ao invés da sintaxe esporádica e esmagadora `$*`?',
    options: [
      'Absolutamente sem diferença, são só meras escolhas sintáticas gemêas idênticas de invocação',
      'Enquanto o $@ preserva a individualidade natural de cada argumento como aspas separadas e avulsas em blocos únicos, o $* atua amalgamando e espremendo sumariamente todos numa salsicha de string unida maciça',
      'Inversamente o $* atua abrigando blocos unitários resguardados, mas é o $@ que os amassa globalmente unidos',
      '$@ guarda em seus porões os argumentos restritivos inteiramente numéricos (números/int)',
    ],
    correct: 1,
    explanation: 'Sob o resguardo de aspas duplas, a evocação de "$@" é perolizada e preserva devidamente cada argumento em fatias próprias avulsas para loop de manuseio seguro, enquanto que, opostamente o "$*" os fundiria indiscriminados forçando-os à um blocão denso de espaço trançado e indivisível de String. Evite problemas catastróficos em "loops" por essa nuance.',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Qual seria o artifício lógico de sintaxe apropriado a se utilizar dentro do corpo dum shell script para forçá-lo fatalmente ao estanque, e à evasão de si mesmo portando um exit erro tipo (code 1), assim que o script recém-lançado detectasse a terrível ausência vital da inserção do esperado recebimento de nenhum argumento de parâmetro (vazio absoluto)?',
    options: [
      'if [ $# -eq 0 ]; then echo "Erro crasso"; fi',
      'if [ $# -eq 0 ]; then echo "Erro fádico falta de Parâmetros!" >&2; exit 1; fi',
      'if [ $1 = "" ]; then abscon; exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'A cartilha de Boas-Práticas do sysadmin estipula elegantemente que ao ser detectado anomalia: exiba primeiro e antes o grito verbal da mensagem focado no lixão dos descritores stderr (pelo redirecionamento explícito vitaliciando em >&2), e de pronto e contíguo, sacie a morte evocando manualmente que sua partida ateste "exit 1" avisando abertamente o encadeador repassando detecção com o $?.',
  },
]
