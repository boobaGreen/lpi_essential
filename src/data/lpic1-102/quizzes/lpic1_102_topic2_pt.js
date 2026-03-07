// LPIC-1 102 Quiz Pool — Portuguese — Topic 106 (Interfaces de Usuário e Desktops)

export const lpic1_102_topic2Quizzes_pt = [
  // ─── 106.1 Instalar e configurar o X11 (8 questões) ───
  {
    id: 'q-lpic1-102-2-001', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual componente de software na arquitetura X11 é responsável por gerenciar o hardware de exibição, bem como o mouse e o teclado ?",
    options: [
      'X Client',
      'X Server',
      'Window Manager',
      'Display Manager'
    ],
    correct: 1,
    explanation: "O servidor X comunica-se diretamente com o hardware local."
  },
  {
    id: 'q-lpic1-102-2-002', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual variável de ambiente é usada pelos programas X11 para saber qual tela e qual servidor usar para saída gráfica ?",
    options: [
      'XSERVER',
      'SCREEN',
      'DISPLAY',
      'GRAPHICS'
    ],
    correct: 2,
    explanation: "A variável DISPLAY (por exemplo, :0.0) aponta o cliente para o servidor X correto."
  },
  {
    id: 'q-lpic1-102-2-003', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual é o substituto moderno para o X Window System, projetado para ser mais simples e seguro ?",
    options: [
      'X12',
      'Wayland',
      'Mir',
      'Quartz'
    ],
    correct: 1,
    explanation: "Wayland é o sucessor moderno do X11 em muitas distribuições Linux."
  },
  {
    id: 'q-lpic1-102-2-004', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "Em qual diretório os trechos de configuração do X11 modernos são normalmente armazenados ?",
    options: ['/etc/X11/xorg.conf', '/etc/X11/xorg.conf.d/', '/etc/X11/config.d/', '/etc/graphics/'],
    correct: 1,
    explanation: "Os sistemas modernos usam /etc/X11/xorg.conf.d/ para configurações modulares em vez de um único arquivo monolítico.",
  },
  {
    id: 'q-lpic1-102-2-005', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é usado para autorizar um usuário remoto específico a acessar sua sessão X usando um mecanismo baseado em cookie ?",
    options: ['xhost', 'xauth', 'xset', 'xrandr'],
    correct: 1,
    explanation: "O `xauth` gerencia o arquivo .Xauthority contendo tokens de autenticação MIT-MAGIC-COOKIE-1.",
  },
  {
    id: 'q-lpic1-102-2-006', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Como você permite que qualquer host se conecte ao seu servidor X local (aviso : isso é inseguro) ?",
    options: [
      'xdpyinfo --all',
      'xhost +',
      'xauth add',
      'DISPLAY=any'
    ],
    correct: 1,
    explanation: "xhost + desativa todo o controle de acesso para o servidor X."
  },
  {
    id: 'q-lpic1-102-2-007', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual protocolo permite executar aplicativos gráficos em um servidor, mas exibi-los em um cliente através de uma rede ?",
    options: ['XDMCP', 'HTTP', 'FTP', 'Telnet'],
    correct: 0,
    explanation: "XDMCP (X Display Manager Control Protocol) permite sessões de login remoto pela rede.",
  },
  {
    id: 'q-lpic1-102-2-008', lessonId: 'lpic1-102-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: "Qual ferramenta permite alterar a resolução e orientação de sua tela no X11 através da linha de comando ?",
    options: ['xwininfo', 'xrandr', 'xdpyinfo', 'xset'],
    correct: 1,
    explanation: "O `xrandr` (X Resize, Rotate and Reflect) é o utilitário padrão para configuração de tela.",
  },

  // ─── 106.2 Desktops Gráficos (6 questões) ───
  {
    id: 'q-lpic1-102-2-009', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual componente fornece a tela de login gráfica e inicia a sessão do usuário ?",
    options: [
      'Window Manager',
      'Display Manager',
      'Desktop Environment',
      'X Server'
    ],
    correct: 1,
    explanation: "Display Managers como GDM ou LightDM lidam com a autenticação inicial do usuário."
  },
  {
    id: 'q-lpic1-102-2-010', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual toolkit é usado principalmente pelo ambiente de desktop KDE Plasma ?",
    options: [
      'GTK',
      'Qt',
      'Swing',
      'Cocoa'
    ],
    correct: 1,
    explanation: "KDE é construído no toolkit Qt, enquanto o GNOME usa o GTK."
  },
  {
    id: 'q-lpic1-102-2-011', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual das alternativas a seguir NÃO é um ambiente de desktop Linux ?",
    options: ['XFCE', 'MATE', 'Apache', 'LXQt'],
    correct: 2,
    explanation: "Apache é um servidor web, não um ambiente de desktop.",
  },
  {
    id: 'q-lpic1-102-2-012', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual é a principal tarefa de um gerenciador de janelas (Window Manager)?",
    options: [
      'Verificar senhas de usuários',
      'Fornecer bordas de janela, títulos e controles (minimizar/maximizar)',
      'Gerenciar conexões de rede',
      'Instalar drivers de placa de vídeo'
    ],
    correct: 1,
    explanation: "Gerenciadores de janelas (como Openbox ou Mutter) gerenciam a aparência e a colocação das janelas de aplicativos.",
  },
  {
    id: 'q-lpic1-102-2-013', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual tecnologia permite que um usuário acesse um desktop gráfico em um servidor remoto através de uma conexão de baixa largura de banda ?",
    options: ['VNC', 'SSH com -X', 'RDP', 'Todas as anteriores'],
    correct: 3,
    explanation: "VNC, RDP e encaminhamento X sobre SSH são métodos comuns para acesso remoto ao desktop.",
  },
  {
    id: 'q-lpic1-102-2-014', lessonId: 'lpic1-102-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Spice é um protocolo de exibição remota usado principalmente com qual tecnologia de virtualização ?",
    options: ['Docker', 'KVM (virt-viewer)', 'VirtualBox', 'VMware'],
    correct: 1,
    explanation: "O Spice é fortemente utilizado em ambientes KVM para fornecer acesso remoto de alto desempenho a VMs.",
  },

  // ─── 106.3 Acessibilidade (6 questões) ───
  {
    id: 'q-lpic1-102-2-015', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual recurso de acessibilidade permite que um usuário pressione as teclas modificadoras (como Ctrl ou Shift) sequencialmente em vez de simultaneamente ?",
    options: [
      'Teclas Lentas (Slow Keys)',
      'Teclas de Aderência (Sticky Keys)',
      'Teclas de Ressalto (Bounce Keys)',
      'Teclas do Mouse (Mouse Keys)'
    ],
    correct: 1,
    explanation: "As Teclas de Aderência (Sticky Keys) ajudam usuários que têm dificuldade de pressionar várias teclas de uma vez."
  },
  {
    id: 'q-lpic1-102-2-016', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Qual leitor de tela é comumente usado no ambiente de desktop GNOME para acessibilidade ?",
    options: [
      'VoiceOver',
      'Orca',
      'JAWS',
      'NVDA'
    ],
    correct: 1,
    explanation: "Orca é o leitor de tela e lupa padrão para o GNOME."
  },
  {
    id: 'q-lpic1-102-2-017', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual recurso ignora pressionamentos de tecla breves ou repetidos rapidamente da mesma tecla ?",
    options: ['Teclas Lentas', 'Teclas de Aderência', 'Teclas de Ressalto', 'Teclas de Repetição'],
    correct: 2,
    explanation: "As Teclas de Ressalto (Bounce Keys) são destinadas a usuários com tremores que podem atingir uma tecla várias vezes acidentalmente.",
  },
  {
    id: 'q-lpic1-102-2-018', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual é o objetivo do recurso de acessibilidade 'Teclas Lentas' (Slow Keys) ?",
    options: [
      'Ele desacelera o ponteiro do mouse',
      'Ele exige que uma tecla seja mantida pressionada por um determinado tempo antes de ser aceita',
      'Ele lê o texto da tela lentamente',
      'Ele reduz a taxa de atualização do monitor'
    ],
    correct: 1,
    explanation: "Teclas Lentas (Slow Keys) ajudam a evitar digitação acidental ao exigir um pressionamento mais longo.",
  },
  {
    id: 'q-lpic1-102-2-019', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: "Qual recurso permite controlar o ponteiro do mouse usando o teclado numérico do teclado ?",
    options: ['Sticky Mouse', 'Numeric Cursor', 'Teclas do Mouse', 'Key Mouse'],
    correct: 2,
    explanation: "As Teclas do Mouse (Mouse Keys) permitem dirigir o ponteiro visual usando o teclado.",
  },
  {
    id: 'q-lpic1-102-2-020', lessonId: 'lpic1-102-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: "Terminais Braille e lupas de tela se enquadram em que tipo de tecnologias ?",
    options: ['Tecnologias Assistivas', 'Extensões Visuais', 'Drivers de Hardware', 'Módulos do Kernel'],
    correct: 0,
    explanation: "Essas são tecnologias assistivas (AT) que ajudam usuários com limitações físicas a interagir com o sistema.",
  },
];
