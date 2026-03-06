export const lpic1_101_topics = [
  {
    id: 1,
    title: '101. Arquitetura do Sistema',
    icon: HardDrive,
    description: 'Hardware, inicialização do sistema e configuração de runlevels.',
    lessons: [
      { id: 'lpic1-101-1-1', title: 'Determinar e configurar as definições de hardware' },
      { id: 'lpic1-101-1-2', title: 'Inicializar o sistema (Boot)' },
      { id: 'lpic1-101-1-3', title: 'Mudar runlevels, desligar e reiniciar' },
    ]
  },
  {
    id: 2,
    title: '102. Instalação e Gestão de Pacotes Linux',
    icon: BookOpen,
    description: 'Layout do disco, gestores de boot e bibliotecas partilhadas.',
    lessons: [
      { id: 'lpic1-102-1-1', title: 'Preparar o layout do disco' },
      { id: 'lpic1-102-1-2', title: 'Instalar um gestor de arranque (GRUB)' },
      { id: 'lpic1-102-1-3', title: 'Gerir bibliotecas partilhadas' },
      { id: 'lpic1-102-1-4', title: 'Utilizar a gestão de pacotes Debian' },
      { id: 'lpic1-102-1-5', title: 'Utilizar a gestão de pacotes RPM e YUM' },
      { id: 'lpic1-102-1-6', title: 'Linux como convidado de virtualização' },
    ]
  },
  {
    id: 3,
    title: '103. Comandos GNU e UNIX',
    icon: Terminal,
    description: 'A linha de comandos, filtros, pipes e gestão de processos.',
    lessons: [
      { id: 'lpic1-103-1-1', title: 'Trabalhar na linha de comandos' },
      { id: 'lpic1-103-1-2', title: 'Gerir variáveis de shell e de ambiente' },
      { id: 'lpic1-103-2-1', title: 'Processar fluxos de texto utilizando filtros' },
      { id: 'lpic1-103-3-1', title: 'Gestão básica de ficheiros' },
      { id: 'lpic1-103-3-2', title: 'Arquivar e comprimir ficheiros' },
      { id: 'lpic1-103-4-1', title: 'Utilizar fluxos e redirecionamentos' },
      { id: 'lpic1-103-4-2', title: 'Utilizar pipes e encadeamento de comandos' },
      { id: 'lpic1-103-5-1', title: 'Criar, monitorizar e matar processos' },
      { id: 'lpic1-103-5-2', title: 'Processos em primeiro plano e em segundo plano' },
      { id: 'lpic1-103-6-1', title: 'Modificar as prioridades de execução de processos' },
      { id: 'lpic1-103-7-1', title: 'Pesquisar em ficheiros de texto usando expressões regulares' },
      { id: 'lpic1-103-8-1', title: 'Edição básica de ficheiros utilizando o vi' },
    ]
  },
  {
    id: 4,
    title: '104. Dispositivos, Sistemas de Ficheiros FHS',
    icon: Shield,
    description: 'Criar sistemas de ficheiros, montar partições e gerir permissões.',
    lessons: [
      { id: 'lpic1-104-1-1', title: 'Criar partições e sistemas de ficheiros' },
      { id: 'lpic1-104-2-1', title: 'Manter a integridade de um sistema de ficheiros' },
      { id: 'lpic1-104-3-1', title: 'Controlar a montagem de sistemas de ficheiros' },
      { id: 'lpic1-104-5-1', title: 'Gerir permissões e propriedade de ficheiros' },
      { id: 'lpic1-104-6-1', title: 'Criar e alterar ligações físicas (hard links) e simbólicas' },
      { id: 'lpic1-104-7-1', title: 'Encontrar ficheiros no FHS' },
    ]
  }
]
