// LPIC-1 102 Quiz Pool — Portuguese — Topics 1-6 (Consolidated)
export const lpic1_102_topic1Quizzes_pt = [
  {
    topicId: 1,
    question: "Qual arquivo é executado quando um usuário fecha um shell Bash de login?",
    options: ["~/.bashrc", "~/.bash_logout", "/etc/bash_exit", "~/.profile"],
    correct: 1,
    explanation: "~/.bash_logout é usado para limpeza ao sair da sessão."
  }
];

export const lpic1_102_topic2Quizzes_pt = [
  {
    topicId: 2,
    question: "Qual componente do X11 gerencia diretamente o hardware (monitor, teclado, mouse)?",
    options: ["X Client", "X Server", "Window Manager", "Display Manager"],
    correct: 1,
    explanation: "O servidor X comunica-se diretamente com o hardware local."
  }
];

export const lpic1_102_topic3Quizzes_pt = [
  {
    topicId: 3,
    question: "Em qual arquivo os hashes de senhas são armazenados no Linux moderno?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/gshadow", "/etc/security"],
    correct: 1,
    explanation: "/etc/shadow armazena as senhas criptografadas e é legível apenas pelo root."
  }
];

export const lpic1_102_topic4Quizzes_pt = [
  {
    topicId: 4,
    question: "Qual porta é usada por padrão para a interface web do CUPS?",
    options: ["80", "443", "631", "9100"],
    correct: 2,
    explanation: "O CUPS utiliza a porta 631 para administração web."
  }
];

export const lpic1_102_topic5Quizzes_pt = [
  {
    topicId: 5,
    question: "Qual comando moderno substitui o 'ifconfig'?",
    options: ["ip addr", "netstat -i", "nmcli", "ifup"],
    correct: 0,
    explanation: "O comando 'ip' é o padrão atual para gestão de rede."
  }
];

export const lpic1_102_topic6Quizzes_pt = [
  {
    topicId: 6,
    question: "Qual comando é recomendado para editar o arquivo /etc/sudoers?",
    options: ["nano", "visudo", "sudoedit", "vi"],
    correct: 1,
    explanation: "O visudo verifica a sintaxe antes de salvar o arquivo."
  }
];
