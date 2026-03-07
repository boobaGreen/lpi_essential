// LPIC-1 102 Quiz Pool — Portuguese — Topic 107 (Tarefas Administrativas)

export const lpic1_102_topic3Quizzes_pt = [
  // ─── 107.1 Gerenciar contas de usuários e grupos e arquivos de sistema relacionados (8 questões) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Em qual arquivo as senhas criptografadas do usuário e os dados de expiração da conta são armazenados na maioria dos sistemas Linux modernos ?",
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: "O arquivo /etc/shadow é legível apenas pelo root e contém os hashes de senha."
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é usado para alterar os parâmetros de expiração de senha, como fazer uma senha expirar em 90 dias ?",
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: "O chage (change age) é a ferramenta para gerenciar políticas de expiração de senha."
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "O que o terceiro campo no arquivo /etc/passwd representa ?",
    options: [
      'Nome de usuário',
      'ID de grupo (GID)',
      'ID de usuário (UID)',
      'Diretório pessoal'
    ],
    correct: 2,
    explanation: "O formato é Usuário:Senha:UID:GID:Comentário:Home:Shell."
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Qual comando exibe o identificador de usuário (UID) e os identificadores de grupo (GID) do usuário atual ?",
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: "O comando `id` fornece informações de identidade completas para um usuário."
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Qual arquivo contém a lista de grupos e seus membros ?",
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: "O /etc/group define os grupos disponíveis no sistema.",
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Qual comando é usado para adicionar um usuário a um grupo secundário sem removê-lo dos grupos existentes ?",
    options: ['usermod -g grupo user', 'usermod -aG grupo user', 'useradd -G grupo user', 'groupmod -A user grupo'],
    correct: 1,
    explanation: "`usermod -aG` adiciona o usuário ao(s) grupo(s) especificado(s).",
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Qual arquivo é consultado pelo comando `useradd` para determinar a base do diretório pessoal padrão e o diretório esqueleto ?",
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', 'Tanto /etc/login.defs quanto /etc/default/useradd'],
    correct: 3,
    explanation: "Ambos os arquivos fornecem valores padrão para o processo de criação de conta.",
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Qual comando exclui uma conta de usuário e, opcionalmente, remove seu diretório pessoal ?",
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: "`userdel -r` remove o usuário e os arquivos em seu diretório pessoal.",
  },

  // ─── 107.2 Automatizar tarefas de administração do sistema (6 questões) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Em um arquivo crontab, o que o primeiro campo (na extremidade esquerda) representa ?",
    options: [
      'Hora',
      'Mês',
      'Minuto',
      'Dia da semana'
    ],
    correct: 2,
    explanation: "Horários de cron começam com minutos (0-59)."
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Qual comando exibe a fila de trabalhos agendados com o comando 'at' ?",
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: "atq significa 'at queue' (fila at)."
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Qual diretório é usado para crontabs do sistema executados a cada hora ?",
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: "/etc/cron.hourly/ é o local onde o sistema procura scripts para executar a cada hora.",
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Qual ferramenta permite a execução de trabalhos recorrentes em um determinado horário, mas também lida com casos em que o sistema foi desligado durante o horário agendado ?",
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: "O `anacron` foi projetado para sistemas que não funcionam 24 horas por dia.",
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Como você edita seu arquivo crontab pessoal de forma segura ?",
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/user'],
    correct: 1,
    explanation: "`crontab -e` abre o crontab do usuário no editor padrão e valida a sintaxe ao salvar.",
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Qual arquivo especifica os usuários que estão explicitamente proibidos de usar o comando `at` ?",
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: "O /etc/at.deny lista usuários que não podem agendar trabalhos com `at`.",
  },

  // ─── 107.3 Localização e Internacionalização (6 questões) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Qual variável de ambiente especifica o idioma padrão global e a codificação para o sistema ?",
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: "LANG é a variável primária para configurações de localização (locales)."
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Como o fuso horário local é normalmente configurado em um sistema Linux ?",
    options: [
      'Editando o /etc/timezone.conf',
      'Vinculando /usr/share/zoneinfo/ com /etc/localtime',
      'Definindo a variável TZ no /etc/profile',
      'Executando o comando "clockset"'
    ],
    correct: 1,
    explanation: "Um link simbólico de /etc/localtime para um arquivo em zoneinfo é o método padrão.",
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: "Qual variável, se definida, substitui todas as outras variáveis de ambiente LC_* ?",
    options: ['LC_FORCE', 'LC_ALL', 'LANG', 'LC_OVERRIDE'],
    correct: 1,
    explanation: "`LC_ALL` tem a maior prioridade e substitui categorias individuais, bem como a variável LANG.",
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é usado para converter a codificação de um arquivo, por exemplo, de ISO-8859-1 para UTF-8 ?",
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: "O `iconv` (Internationalization Conversion) é o utilitário padrão para conversão de codificação de arquivos.",
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "Qual comando exibe a data atual do sistema, a hora e o fuso horário ?",
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: "O `date` mostra a hora do sistema e também pode configurá-la.",
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: "O que o Unicode (e sua codificação UTF-8) pretende fornecer ?",
    options: [
      'Uma maneira de compactar arquivos de texto',
      'Um conjunto de caracteres universal para todos os idiomas',
      'Um padrão de criptografia para tráfego web',
      'Velocidade de processamento mais rápida para consultas de banco de dados'
    ],
    correct: 1,
    explanation: "O Unicode atribui um número exclusivo a cada caractere, independentemente da plataforma ou do idioma.",
  },
];
