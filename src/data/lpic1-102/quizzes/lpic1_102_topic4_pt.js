// LPIC-1 102 Quiz Pool — Portuguese — Topic 108 (Serviços Essenciais do Sistema)

export const lpic1_102_topic4Quizzes_pt = [
  // ─── 108.1 Manter a hora do sistema (5 questões) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Qual comando permite sincronizar o relógio de hardware (RTC) com a hora do sistema (software) ?",
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: "--systohc copia o valor do tempo do sistema para o Relógio de Hardware."
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Qual é o protocolo padrão usado para sincronizar a hora do sistema através de uma rede ?",
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: "O Network Time Protocol (NTP) é usado para manter os relógios do sistema precisos através de servidores de tempo.",
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Qual utilitário moderno do systemd é usado para consultar e alterar as configurações do relógio do sistema ?",
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: "O `timedatectl` gerencia as configurações de hora, data e fuso horário em distribuições baseadas em systemd.",
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Qual software é um substituto comum para o ntpd clássico, projetado para sincronizar a hora de forma mais rápida e precisa em sistemas com conexão esporádica ?",
    options: ['chrony', 'timesync', 'sync-ntp', 'timed'],
    correct: 0,
    explanation: "O Chrony é uma implementação alternativa do NTP que é particularmente boa para sistemas que nem sempre estão online.",
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "O relógio de hardware (RTC) costuma ser configurado em qual padrão de tempo nos servidores Linux ?",
    options: ['Hora Local', 'PST', 'UTC', 'GMT+1'],
    correct: 2,
    explanation: "Os sistemas Linux costumam esperar que o relógio de hardware esteja no Tempo Universal Coordenado (UTC).",
  },

  // ─── 108.2 Registro do sistema (Logging) (5 questões) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Qual utilitário é responsável pela rotação automática dos arquivos de log para evitar que eles preencham o disco ?",
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: "O logrotate rotaciona, comprime e gerencia a longevidade dos logs de texto."
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Qual comando journalctl permite ver as mensagens de log em tempo real à medida que chegam ?",
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: "-f (follow) funciona de forma semelhante ao 'tail -f' para o journal binário."
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Qual é o nome do daemon do systemd que coleta as mensagens de log no formato binário ?",
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: "O systemd-journald é o daemon que gerencia o 'journal' binário."
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Onde se encontra o arquivo de configuração principal para o daemon rsyslog ?",
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: "O /etc/rsyslog.conf define como os logs são filtrados e onde são armazenados.",
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Qual comando permite a um usuário enviar manualmente uma mensagem ao log do sistema a partir de um script ?",
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: "O comando `logger` fornece uma interface de shell para o módulo de registro do sistema syslog(3).",
  },

  // ─── 108.3 Conceitos básicos de Mail Transfer Agent (MTA) (5 questões) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Em qual arquivo de configuração você pode definir aliases para endereços de e-mail locais no sistema ?",
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: "O /etc/aliases define redirecionamentos para mensagens de e-mail locais."
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Qual dos seguintes NÃO é um Mail Transfer Agent (MTA) ?",
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: "Apache é um servidor web, não um agente de transferência de correio.",
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Qual comando deve ser executado após editar o /etc/aliases para garantir que as alterações surtam efeito ?",
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: "O `newaliases` reconstrói o banco de dados usado pelo MTA para consultas.",
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Qual comando permite a um administrador ver a fila atual de mensagens de e-mail de saída ?",
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: "O `mailq` (ou `mail -bp`) lista todas as mensagens que estão atualmente na fila de correio.",
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "No Postfix, qual é o arquivo de configuração principal usado para estabelecer parâmetros globais como `myhostname` ?",
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: "O main.cf é o arquivo de configuração principal para as definições do Postfix.",
  },

  // ─── 108.4 Gerenciar impressoras e impressão (5 questões) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Em qual porta padrão responde a interface de administração web do CUPS ?",
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: "O CUPS utiliza a porta 631 para o protocolo IPP e a interface web."
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é usado para remover um trabalho de impressão específico da fila ?",
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: "O lprm (line printer remove) remove trabalhos da fila do CUPS."
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: "Qual comando mostra o status das filas de impressão em um sistema ?",
    options: ['lpstat', 'lpq', 'lpc status', 'Todas as anteriores'],
    correct: 3,
    explanation: "`lpstat`, `lpq` e `lpc status` são comandos válidos para verificar o status da impressora em ambientes CUPS modernos.",
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: "Qual ferramenta é o principal comando de impressora de linha usado para enviar um trabalho para uma impressora ?",
    options: ['lp', 'lpr', 'Tanto lp quanto lpr são válidos', 'sendprint'],
    correct: 2,
    explanation: "No CUPS, tanto o comando `lp` do System V quanto o comando `lpr` do BSD são suportados oficialmente.",
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: "Qual é o nome do arquivo de configuração principal para o daemon CUPS ?",
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: "O `cupsd.conf` é o arquivo de configuração principal para o escalonador do CUPS.",
  },
];
