// LPIC-1 101 Quiz — Tópico 1: Arquitetura do Sistema (Português)

export const lpic1_101_topic1_pt = [
  // ─── 101.1 Hardware e Periféricos (12 questões) ───
  {
    id: 'q-lpic1-101-1-001', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual é a principal vantagem do UEFI em relação ao BIOS tradicional?',
    options: [
      'É hardware de código aberto',
      'Suporta apenas sistemas de 32 bits',
      'Suporta partições GPT maiores que 2TB e Secure Boot',
      'Não requer um carregador de inicialização como o GRUB2'
    ],
    correct: 2,
    explanation: 'O UEFI substitui o BIOS tradicional, oferecendo suporte para discos GPT > 2TB, Secure Boot e um processo de inicialização mais rápido.',
  },
  {
    id: 'q-lpic1-101-1-002', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual diretório virtual do kernel contém informações sobre o hardware do sistema e processos?',
    options: ['/dev', '/sys', '/proc', '/etc'],
    correct: 2,
    explanation: '/proc é um sistema de ficheiros virtual baseado em memória que fornece uma visão do kernel, mostrando processos em execução e informações de hardware.',
  },
  {
    id: 'q-lpic1-101-1-003', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual diretório virtual é usado pelo udev para criar dinamicamente nós de dispositivos?',
    options: ['/dev', '/udev', '/sys', '/proc'],
    correct: 0,
    explanation: '/dev contém nós de dispositivos (ex: /dev/sda) geridos dinamicamente pelo serviço udev.',
  },
  {
    id: 'q-lpic1-101-1-004', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando lista todos os dispositivos PCI ligados ao sistema?',
    options: ['lsusb', 'lshw', 'lspci', 'lsscsi'],
    correct: 2,
    explanation: 'lspci exibe informações detalhadas sobre todos os barramentos e dispositivos PCI no sistema.',
  },
  {
    id: 'q-lpic1-101-1-005', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando lista os módulos do kernel atualmente carregados na memória?',
    options: ['modprobe', 'lsmod', 'insmod', 'modinfo'],
    correct: 1,
    explanation: 'lsmod lê /proc/modules e imprime uma lista formatada dos módulos do kernel carregados.',
  },
  {
    id: 'q-lpic1-101-1-006', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando é a forma recomendada de carregar um módulo do kernel junto com as suas dependências?',
    options: ['insmod', 'depmod', 'modprobe', 'lsmod'],
    correct: 2,
    explanation: 'O modprobe carrega um módulo de forma inteligente e resolve/carrega automaticamente quaisquer módulos dependentes.',
  },
  {
    id: 'q-lpic1-101-1-007', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Como remover com segurança um módulo do kernel carregado chamado "e1000"?',
    options: ['rmmod -f e1000', 'modprobe -r e1000', 'delete e1000', 'rm /lib/modules/e1000'],
    correct: 1,
    explanation: 'O modprobe -r remove com segurança um módulo e quaisquer módulos dependentes não utilizados.',
  },
  {
    id: 'q-lpic1-101-1-008', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Qual é o propósito do sistema de ficheiros /sys (sysfs)?',
    options: [
      'Armazenar ficheiros de configuração do sistema (como /etc)',
      'Manter imagens compiladas do kernel',
      'Expor o modelo de dispositivos do kernel e a hierarquia de hardware',
      'Registar erros do sistema'
    ],
    correct: 2,
    explanation: 'O sysfs (/sys) expõe a hierarquia interna de objetos e controladores de dispositivos do kernel para o espaço do utilizador.',
  },
  {
    id: 'q-lpic1-101-1-009', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando mostra as mensagens geradas pelo kernel durante o processo de inicialização?',
    options: ['syslog', 'dmesg', 'tail /var/log/messages', 'journalctl -k'],
    correct: 1,
    explanation: 'dmesg imprime o buffer circular do kernel (kernel ring buffer), que contém mensagens de deteção de hardware.',
  },
  {
    id: 'q-lpic1-101-1-010', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual ficheiro contém as opções de configuração exatas passadas ao kernel pelo carregador de inicialização?',
    options: ['/boot/grub/grub.cfg', '/sys/kernel', '/etc/default/grub', '/proc/cmdline'],
    correct: 3,
    explanation: '/proc/cmdline contém os argumentos passados ao kernel durante a inicialização.',
  },
  {
    id: 'q-lpic1-101-1-011', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Qual diretório deve conter ficheiros para carregar automaticamente módulos específicos do kernel no boot?',
    options: ['/etc/modprobe.d/', '/etc/modules-load.d/', '/lib/modules/', '/boot/modules/'],
    correct: 1,
    explanation: '/etc/modules-load.d/ é usado pelo systemd para carregar módulos incondicionalmente na inicialização.',
  },
  {
    id: 'q-lpic1-101-1-012', lessonId: 'lpic1-101-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando mostra informações detalhadas sobre um módulo específico (autor, descrição, parâmetros)?',
    options: ['modprobe -i', 'modinfo', 'lsmod -v', 'sysctl'],
    correct: 1,
    explanation: 'O modinfo extrai e exibe metadados de um ficheiro de módulo do kernel.',
  },

  // ─── 101.2 Processo de Inicialização (10 questões) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual é a ordem correta do processo de inicialização do Linux?',
    options: [
      'Bootloader -> BIOS -> init -> Kernel',
      'BIOS/UEFI -> Bootloader -> Kernel -> init/systemd',
      'Kernel -> BIOS -> Bootloader -> systemd',
      'Bootloader -> Kernel -> BIOS -> init'
    ],
    correct: 1,
    explanation: 'O firmware (BIOS/UEFI) executa primeiro, passa o controlo para o carregador (GRUB), que carrega o Kernel, que finalmente inicia o primeiro processo (init/systemd).',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual é o propósito do initramfs durante o processo de inicialização?',
    options: [
      'Formatar o disco rígido',
      'Fornecer um sistema de ficheiros raiz temporário com controladores essenciais para montar a raiz real',
      'Verificar a RAM para erros de hardware',
      'É uma cópia de segurança do kernel'
    ],
    correct: 1,
    explanation: 'O initramfs é carregado pelo bootloader e fornece os módulos necessários (ex: RAID, LVM) para montar o sistema de ficheiros raiz real.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual processo é historicamente o primeiro processo do espaço do utilizador iniciado pelo kernel com o PID 1?',
    options: ['bash', 'grub', 'init', 'kthreadd'],
    correct: 2,
    explanation: 'init (ou systemd em sistemas modernos) é o primeiro processo iniciado após o boot do kernel, recebendo o PID 1.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Qual é o principal ficheiro de configuração gerado para o GRUB2?',
    options: ['/boot/grub/menu.lst', '/etc/grub.conf', '/boot/grub/grub.cfg', '/etc/default/grub2'],
    correct: 2,
    explanation: '/boot/grub/grub.cfg é o arquivo principal gerado pelo comando grub-mkconfig.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Para configurar o tempo de espera do GRUB2 ou parâmetros padrão do kernel, qual ficheiro deve editar?',
    options: ['/boot/grub/grub.cfg', '/etc/default/grub', '/etc/grub.d/00_header', '/boot/grub/menu.lst'],
    correct: 1,
    explanation: 'O ficheiro /etc/default/grub contém as variáveis personalizáveis usadas para gerar o grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Depois de editar /etc/default/grub em um sistema Debian/Ubuntu, qual comando aplica as alterações?',
    options: ['grub-install /dev/sda', 'update-grub', 'grub-update', 'systemctl restart grub'],
    correct: 1,
    explanation: 'update-grub é um script que executa grub-mkconfig para gerar a nova configuração.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando instala o carregador de inicialização GRUB2 no MBR do primeiro disco rígido?',
    options: ['grub-mkconfig /dev/sda', 'update-grub /dev/sda', 'grub-install /dev/sda', 'fdisk /dev/sda'],
    correct: 2,
    explanation: 'grub-install copia as imagens do GRUB e as incorpora no MBR do disco especificado.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Onde estão localizados os scripts que o GRUB2 utiliza para gerar o ficheiro de configuração?',
    options: ['/boot/grub/', '/etc/default/grub.d/', '/etc/grub.d/', '/usr/lib/grub/'],
    correct: 2,
    explanation: '/etc/grub.d/ contém scripts executáveis que o grub-mkconfig utiliza para construir o grub.cfg.',
  },
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual é o tamanho máximo de disco suportado pela tabela de partições MBR tradicional?',
    options: ['2 GB', '2 TB', '8 TB', '8 ZiB'],
    correct: 1,
    explanation: 'O MBR utiliza endereçamento de 32 bits, o que limita o tamanho total a 2 Terabytes.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Em um sistema com systemd, qual comando exibe os logs especificamente do boot atual?',
    options: ['journalctl -b', 'dmesg -boot', 'tail /var/log/boot.log', 'systemctl logs'],
    correct: 0,
    explanation: 'journalctl -b filtra o log do systemd para mostrar apenas as mensagens desde o último início.',
  },

  // ─── 101.3 Níveis de Execução e Targets (10 questões) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'No SysVinit, qual runlevel é tradicionalmente utilizado para um ambiente multi-utilizador COM interface gráfica (GUI)?',
    options: ['Runlevel 1', 'Runlevel 3', 'Runlevel 5', 'Runlevel 6'],
    correct: 2,
    explanation: 'O Runlevel 5 inclui rede, suporte multi-utilizador e inicia o sistema gráfico (X Window System).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual target do systemd equivale ao Runlevel 3 do SysVinit (modo multi-utilizador em texto)?',
    options: ['graphical.target', 'multi-user.target', 'network.target', 'rescue.target'],
    correct: 1,
    explanation: 'multi-user.target fornece um sistema multi-utilizador completo sem interface gráfica.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando exibe o target padrão (default) configurado em um sistema systemd?',
    options: ['systemctl default', 'systemctl status', 'systemctl get-default', 'runlevel'],
    correct: 2,
    explanation: 'systemctl get-default imprime o target em que o systemd irá iniciar por padrão.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Como mudar o sistema systemd atual para o target multi-utilizador (texto) sem reiniciar?',
    options: [
      'systemctl switch multi-user.target',
      'systemctl isolate multi-user.target',
      'systemctl start multi-user.target',
      'systemctl default multi-user.target'
    ],
    correct: 1,
    explanation: 'systemctl isolate pára as unidades não necessárias e inicia o novo target imediatamente.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Qual é a diferença principal entre o rescue.target e o emergency.target?',
    options: [
      'Não há diferença, são apelidos',
      'rescue.target monta ficheiros locais e serviços básicos; emergency.target monta apenas / como apenas leitura',
      'emergency.target fornece rede, rescue.target não',
      'rescue.target é para o GRUB'
    ],
    correct: 1,
    explanation: 'emergency.target é o modo de recuperação mais minimalista possível. rescue.target (runlevel 1) monta mais sistemas de ficheiros.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual dos seguintes comandos reinicia o sistema de forma segura e imediata?',
    options: ['shutdown -h now', 'shutdown -r now', 'halt', 'init 0'],
    correct: 1,
    explanation: 'shutdown -r now (ou reboot) reinicia o computador imediatamente.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando agenda um encerramento do sistema para daqui a 15 minutos com uma mensagem de aviso?',
    options: [
      'shutdown -t 15 "Encerramento"',
      'shutdown +15 "Encerramento"',
      'shutdown -h 15m "Encerramento"',
      'halt +15'
    ],
    correct: 1,
    explanation: 'shutdown +15 agenda o encerramento em 15 minutos e notifica os utilizadores.',
  },
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Como cancelar um encerramento (shutdown) que já está agendado?',
    options: ['shutdown -a', 'shutdown -c', 'killall shutdown', 'systemctl cancel shutdown'],
    correct: 1,
    explanation: 'shutdown -c cancela qualquer encerramento pendente.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando envia uma mensagem (broadcast) para os terminais de todos os utilizadores ligados?',
    options: ['broadcast', 'echo-all', 'wall', 'send'],
    correct: 2,
    explanation: 'wall (write all) envia uma mensagem para todos os terminais ativos.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'No SysVinit, qual comando imprime o runlevel anterior e o atual?',
    options: ['showlevel', 'runlevel', 'who -r', 'runlevel OU who -r'],
    correct: 3,
    explanation: 'Tanto o comando `runlevel` como o `who -r` mostram os runlevels anterior e atual.',
  },
];

