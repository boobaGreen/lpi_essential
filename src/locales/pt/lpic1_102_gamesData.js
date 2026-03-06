export const memoryGameData = [
  { command: 'export', description: 'Define variável globalmente' },
  { command: 'alias', description: 'Atalhos de comandos' },
  { command: 'source', description: 'Executa script no shell atual' },
  { command: '/etc/skel', description: 'Modelo para novos usuários' },
  { command: 'DISPLAY', description: 'Alvo de saída gráfica X11' },
  { command: 'Wayland', description: 'Sucessor moderno do X11' },
  { command: 'Orca', description: 'Leitor de tela (Acessibilidade)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Senhas criptografadas' },
  { command: 'chage', description: 'Gerencia expiração de senhas' },
  { command: 'crontab -e', description: 'Edição de tarefas agendadas' },
  // Topic 108
  { command: 'hwclock', description: 'Gerencia relógio de hardware' },
  { command: 'journalctl', description: 'Lê logs do systemd' },
  { command: 'logrotate', description: 'Rotação automática de logs' },
  { command: 'CUPS', description: 'Sistema de impressão' },
  // Topic 109
  { command: 'ip addr', description: 'Mostra endereços IP' },
  { command: 'ping', description: 'Testa conectividade' },
  { command: 'dig', description: 'Consulta DNS' },
  // Topic 110
  { command: 'SUID', description: 'Execução com direitos do dono' },
  { command: 'visudo', description: 'Edição segura de sudoers' },
  { command: 'ssh-keygen', description: 'Gera chaves SSH' },
];

export const trueFalseData = [
  { text: '/etc/skel é usado ao criar novos usuários.', answer: true, explanation: 'Correto! É o modelo do diretório home.', difficulty: 1 },
  { text: 'O shebang #! deve estar na última linha.', answer: false, explanation: 'Falso. Deve estar na primeiríssima linha.', difficulty: 1 },
  { text: 'X11 é transparente à rede.', answer: true, explanation: 'Verdadeiro. Permite rodar apps remotamente.', difficulty: 1 },
  { text: '/etc/passwd contém senhas em texto claro.', answer: false, explanation: 'Falso. Estão criptografadas no shadow.', difficulty: 1 },
  { text: 'A porta padrão do CUPS é 631.', answer: true, explanation: 'Correto.', difficulty: 1 },
];

export const terminalChallengeData = [
  { id: 'tc-pt-1', description: 'Exporta a variável VAR como 100', prompt: 'export VAR=100', expectedOutput: '', hint: 'Use export', difficulty: 1 },
  { id: 'tc-pt-2', description: 'Mostra seu UID e grupos', prompt: 'id', expectedOutput: '', hint: 'id', difficulty: 1 },
  { id: 'tc-pt-3', description: 'Testa conexão com google.com', prompt: 'ping google.com', expectedOutput: '', hint: 'ping', difficulty: 1 },
  { id: 'tc-pt-4', description: 'Gera um novo par de chaves SSH', prompt: 'ssh-keygen', expectedOutput: '', hint: 'ssh-keygen', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-pt-1',
    category: 'Arquivos de Configuração',
    question: 'Associe o arquivo ao seu papel:',
    items: [
      { text: '/etc/profile', matches: 'Login Global' },
      { text: '~/.bashrc', matches: 'Usuário Interativo' },
      { text: '/etc/skel', matches: 'Modelo novo usuário' },
    ],
  },
];

export const fillGapData = [
  { prompt: '_____ VAR="val"', answer: 'export', hint: 'Variável global', difficulty: 1 },
  { prompt: 'Porta padrão HTTP: _____', answer: '80', hint: 'Número inteiro', difficulty: 1 },
  { prompt: 'Arquivo DNS: /etc/_____.conf', answer: 'resolv', hint: 'resolv', difficulty: 1 },
];
