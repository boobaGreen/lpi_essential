// LPIC-1 101 — Topic 103: Comandos GNU e Unix — Quiz PT

export const lpic1_101_topic3_pt = [
  {
    id: 1,
    question: "Qual comando identifica se um comando é um alias, uma função, um builtin ou um ficheiro externo?",
    options: ["which", "whatis", "type", "whereis"],
    answer: "type",
    explanation: "type é o comando mais completo para saber a origem de um comando no bash."
  },
  {
    id: 2,
    question: "Para tornar uma variável local disponível para todos os processos filhos, deve-se usar o comando:",
    options: ["set", "env", "export", "alias"],
    answer: "export",
    explanation: "O export envia a variável para o ambiente (environment) global da sessão."
  },
  {
    id: 3,
    question: "Qual comando conta o número de linhas contidas num ficheiro de texto?",
    options: ["wc -l", "wc -w", "linecount", "grep -c"],
    answer: "wc -l",
    explanation: "wc (word count) com a opção -l (lines) é o padrão para contagem de linhas."
  },
  {
    id: 4,
    question: "Qual comando exibe em tempo real (seguindo) as novas linhas adicionadas a um ficheiro de log?",
    options: ["head -f", "tail -f", "cat -f", "more -f"],
    answer: "tail -f",
    explanation: "-f (follow) permite monitorizar logs de sistema enquanto ocorrem."
  },
  {
    id: 5,
    question: "Qual o atalho de teclado para suspender (pausar) um processo que está a correr no terminal?",
    options: ["Ctrl+C", "Ctrl+D", "Ctrl+Z", "Ctrl+A"],
    answer: "Ctrl+Z",
    explanation: "Ctrl+Z envia o sinal SIGTSTP suspendo o processo para o background."
  },
  {
    id: 6,
    question: "Qual sinal do comando kill é o mais forte e não pode ser ignorado pela aplicação (matar processo)?",
    options: ["SIGTERM (15)", "SIGHUP (1)", "SIGKILL (9)", "SIGINT (2)"],
    answer: "SIGKILL (9)",
    explanation: "O sinal 9 (SIGKILL) força a terminação imediata pelo kernel sem aviso."
  },
  {
    id: 7,
    question: "Qual utilitário duplica a saída (stdout) para um ficheiro E para o ecrã ao mesmo tempo?",
    options: ["split", "tee", "join", "pipe"],
    answer: "tee",
    explanation: "Como um encaixe em 'T' na canalização, o tee desvia o fluxo para dois destinos."
  },
  {
    id: 8,
    question: "Qual expressão regular básica (regex) representa 'o início da linha'?",
    options: ["$", "*", "^", "."],
    answer: "^",
    explanation: "O acento circunflexo (^) ancora a pesquisa no começo exato da linha."
  },
  {
    id: 9,
    question: "No editor vi, qual tecla permite entrar no 'Modo de Inserção' para começar a escrever?",
    options: [":", "i", "esc", "x"],
    answer: "i",
    explanation: "No modo de comando, pressionar 'i' (insert) permite introduzir texto."
  },
  {
    id: 10,
    question: "Qual utilitário comprime ficheiros utilizando o algoritmo Lempel-Ziv e cria arquivos .gz?",
    options: ["bzip2", "xz", "gzip", "tar"],
    answer: "gzip",
    explanation: "gzip é o compressor padrão mais utilizado e rápido no Linux."
  }
];
