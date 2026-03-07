// LPIC-1 101 Quiz — Tópico 2: Instalação e Gestão de Pacotes (Português)

export const lpic1_101_topic2_pt = [
  // ─── 102.1 Desenho do Layout do Disco (8 perguntas) ───
  {
    id: 'q-lpic1-101-2-001', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual hierarquia do sistema de arquivos deve estar disponível durante a fase inicial de boot antes que outros sistemas de arquivos sejam montados?',
    options: ['/home', '/var', '/boot', '/opt'],
    correct: 2,
    explanation: 'O /boot contém o kernel e os arquivos initramfs necessários pelo bootloader para iniciar o sistema operacional.',
  },
  {
    id: 'q-lpic1-101-2-002', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual é o propósito principal de uma partição swap no Linux?',
    options: [
      'Armazenar cópias de segurança do sistema',
      'Atuar como memória virtual quando a RAM física está cheia',
      'Trocar dados entre Windows e Linux',
      'Armazenar arquivos temporários apagados no reboot'
    ],
    correct: 1,
    explanation: 'O espaço swap atua como uma área de excesso (memória virtual) onde o kernel remove blocos de memória quando a RAM está muito utilizada.',
  },
  {
    id: 'q-lpic1-101-2-003', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Por que é altamente recomendável colocar o /home numa partição separada?',
    options: [
      'Aumenta o desempenho do sistema',
      'Permite reinstalar o sistema operacional sem perder os dados dos utilizadores',
      'Impede que os utilizadores usem demasiado tempo de CPU',
      'O kernel exige isso para arrancar'
    ],
    correct: 1,
    explanation: 'Ter o /home numa partição separada significa que pode apagar a partição raiz (/) para atualizar ou reinstalar o SO preservando todos os arquivos e definições dos utilizadores.',
  },
  {
    id: 'q-lpic1-101-2-004', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual diretório deve ser colocado numa partição separada se o sistema executa uma base de dados ou gera arquivos de log massivos?',
    options: ['/etc', '/bin', '/var', '/usr'],
    correct: 2,
    explanation: 'O /var contém dados variáveis como logs, filas de e-mail e bases de dados. Se encher, pode travar o sistema a menos que esteja isolado.',
  },
  {
    id: 'q-lpic1-101-2-005', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Qual é o número máximo absoluto de partições primárias permitido num disco usando a tabela de partições MBR clássica?',
    options: ['2', '4', '16', '128'],
    correct: 1,
    explanation: 'O MBR (Master Boot Record) permite um máximo de 4 partições primárias. Para ter mais, uma deve ser uma partição estendida.',
  },
  {
    id: 'q-lpic1-101-2-006', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Que tecnologia permite combinar múltiplos discos físicos num único grupo de volumes e criar volumes lógicos redimensionáveis?',
    options: ['RAID', 'LVM', 'EXT4', 'GPT'],
    correct: 1,
    explanation: 'O LVM (Logical Volume Manager) fornece uma camada de abstração sobre o armazenamento físico.',
  },
  {
    id: 'q-lpic1-101-2-007', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Ao instalar Linux num sistema moderno baseado em UEFI, qual partição especial é estritamente necessária?',
    options: ['Uma partição swap', 'Um volume físico LVM', 'Uma Partição de Sistema EFI (ESP)', 'Uma partição /boot formatada como ext4'],
    correct: 2,
    explanation: 'O firmware UEFI exige uma Partição de Sistema EFI (ESP), tipicamente formatada como FAT32 e montada em /boot/efi.',
  },
  {
    id: 'q-lpic1-101-2-008', lessonId: 'lpic1-101-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando exibe a tabela de partições atual de um disco específico como /dev/sda?',
    options: ['lsblk', 'fdisk -l /dev/sda', 'mount', 'df -h'],
    correct: 1,
    explanation: 'fdisk -l seguido por um nome de dispositivo exibe a tabela de partições (MBR ou GPT) para esse dispositivo específico.',
  },

  // ─── 102.2 Instalar um Gestor de Boot (4 perguntas) ───
  {
    id: 'q-lpic1-101-2-009', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando instala o bootloader GRUB2 no Master Boot Record do primeiro disco rígido?',
    options: ['grub-mkconfig /dev/sda', 'grub-install /dev/sda', 'update-grub', 'grub-setup /dev/sda'],
    correct: 1,
    explanation: 'grub-install é o comando para instalar os arquivos do bootloader GRUB e configurar o setor de boot num disco.',
  },
  {
    id: 'q-lpic1-101-2-010', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Após editar /etc/default/grub, qual comando deve ser executado para gerar o arquivo grub.cfg final num sistema Debian?',
    options: ['grub-install', 'update-grub', 'grub-setup', 'lilo'],
    correct: 1,
    explanation: 'update-grub é um script wrapper para `grub-mkconfig -o /boot/grub/grub.cfg` usado em distribuições baseadas em Debian.',
  },
  {
    id: 'q-lpic1-101-2-011', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual arquivo de configuração do GRUB2 NUNCA deve editar manualmente segundo os comentários no seu cabeçalho?',
    options: ['/etc/default/grub', '/etc/grub.d/40_custom', '/boot/grub/grub.cfg', '/boot/grub/menu.lst'],
    correct: 2,
    explanation: 'O /boot/grub/grub.cfg é gerado automaticamente e será sobrescrito. As alterações devem ser feitas em /etc/default/grub.',
  },
  {
    id: 'q-lpic1-101-2-012', lessonId: 'lpic1-101-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Na terminologia do GRUB2, como é representada a primeira partição do primeiro disco rígido?',
    options: ['(hd0,1)', '(hd0,0)', '/dev/sda1', 'disk0p1'],
    correct: 0,
    explanation: 'O GRUB2 conta os discos a partir de 0 (hd0), mas as partições tipicamente a partir de 1 (hd0,1).',
  },

  // ─── 102.3 Gestão de Bibliotecas Partilhadas (4 perguntas) ───
  {
    id: 'q-lpic1-101-2-013', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando exibe as dependências de bibliotecas partilhadas exigidas por um executável vinculado dinamicamente?',
    options: ['ldconfig', 'lsmod', 'ldd', 'libtool'],
    correct: 2,
    explanation: 'ldd (List Dynamic Dependencies) imprime as bibliotecas partilhadas (.so) exigidas por um programa.',
  },
  {
    id: 'q-lpic1-101-2-014', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual arquivo de configuração lista os diretórios onde o linker dinâmico procura por bibliotecas partilhadas?',
    options: ['/etc/ld.so.conf', '/etc/ld.so.cache', '/lib/modules', '/etc/fstab'],
    correct: 0,
    explanation: 'O /etc/ld.so.conf define os diretórios que o ld.so utiliza para procurar bibliotecas.',
  },
  {
    id: 'q-lpic1-101-2-015', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Após adicionar um novo diretório ao /etc/ld.so.conf, qual comando DEVE ser executado para atualizar a cache de bibliotecas?',
    options: ['ldd --update', 'update-libs', 'ldconfig', 'systemctl reload ld'],
    correct: 2,
    explanation: 'O ldconfig atualiza a cache do linker dinâmico (/etc/ld.so.cache) com base nos diretórios configurados.',
  },
  {
    id: 'q-lpic1-101-2-016', lessonId: 'lpic1-101-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual opção do comando ldconfig permite ver as bibliotecas atualmente em cache armazenadas em /etc/ld.so.cache?',
    options: ['-v', '-p', '-l', '-X'],
    correct: 1,
    explanation: 'ldconfig -p (print) exibe as listas de diretórios e bibliotecas candidatas atualmente armazenadas na cache.',
  },

  // ─── 102.4 Gestão de Pacotes Debian (6 perguntas) ───
  {
    id: 'q-lpic1-101-2-017', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual ferramenta de baixo nível do Debian é utilizada para instalar um arquivo .deb local sem descarregar dependências automaticamente?',
    options: ['apt', 'apt-get', 'dpkg', 'aptitude'],
    correct: 2,
    explanation: 'O dpkg é o gestor de pacotes base do Debian. `dpkg -i arquivo.deb` instala um pacote local.',
  },
  {
    id: 'q-lpic1-101-2-018', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando atualiza o índice local de pacotes disponíveis dos repositórios num sistema Debian?',
    options: ['apt upgrade', 'apt update', 'dpkg --update', 'apt refresh'],
    correct: 1,
    explanation: 'apt update descarrega as listas de pacotes mais recentes dos repositórios.',
  },
  {
    id: 'q-lpic1-101-2-019', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual é a diferença principal entre `apt remove` e `apt purge`?',
    options: [
      'remove desinstala o pacote; purge apaga o pacote da cache do apt',
      'remove deixa arquivos de configuração; purge remove o pacote E os seus arquivos de configuração',
      'purge força a remoção ignorando dependências',
      'Não há diferença'
    ],
    correct: 1,
    explanation: 'apt purge remove completamente o pacote, incluindo arquivos de configuração globais.',
  },
  {
    id: 'q-lpic1-101-2-020', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando lista todos os pacotes instalados num sistema baseado em Debian?',
    options: ['dpkg -l', 'apt list --installed', 'Ambos dpkg -l e apt list --installed', 'rpm -qa'],
    correct: 2,
    explanation: 'Ambos `dpkg -l` e `apt list --installed` realizam esta ação.',
  },
  {
    id: 'q-lpic1-101-2-021', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Qual flag do dpkg permite descobrir qual pacote instalado forneceu um arquivo específico (ex: /bin/ls)?',
    options: ['-S', '-s', '-L', '-l'],
    correct: 0,
    explanation: 'dpkg -S (search) procura por um nome de arquivo entre os pacotes instalados.',
  },
  {
    id: 'q-lpic1-101-2-022', lessonId: 'lpic1-101-2-4', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual arquivo armazena a lista de URLs de repositórios que o APT utiliza para descarregar pacotes?',
    options: ['/etc/apt/apt.conf', '/etc/apt/sources.list', '/var/lib/apt/lists', '/etc/dpkg/dpkg.cfg'],
    correct: 1,
    explanation: '/etc/apt/sources.list é o principal arquivo de configuração para fontes de pacotes APT.',
  },

  // ─── 102.5 Gestão de Pacotes RPM e YUM/DNF (6 perguntas) ───
  {
    id: 'q-lpic1-101-2-023', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual ferramenta de baixo nível é utilizada para instalar um arquivo .rpm local num sistema baseado em Red Hat?',
    options: ['yum', 'dnf', 'rpm -i', 'rpm -u'],
    correct: 2,
    explanation: 'rpm -i (install) é o comando base para instalar um pacote RPM.',
  },
  {
    id: 'q-lpic1-101-2-024', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual ferramenta moderna de alto nível substituiu o YUM como gestor de pacotes padrão no Fedora e RHEL 8+?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'DNF (Dandified YUM) é a próxima geração do YUM.',
  },
  {
    id: 'q-lpic1-101-2-025', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando lista todos os pacotes RPM instalados no sistema?',
    options: ['rpm -l', 'rpm -qa', 'dnf list', 'rpm -list'],
    correct: 1,
    explanation: 'rpm -qa (query all) lista todos os pacotes RPM atualmente instalados.',
  },
  {
    id: 'q-lpic1-101-2-026', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Qual comando rpm consulta um pacote instalado para ver quais arquivos ele instalou?',
    options: ['rpm -ql', 'rpm -qi', 'rpm -qf', 'rpm -qc'],
    correct: 0,
    explanation: 'rpm -ql (query list) lista os arquivos instalados por um pacote específico.',
  },
  {
    id: 'q-lpic1-101-2-027', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Como se encontra qual pacote RPM forneceu o arquivo /etc/httpd/conf/httpd.conf?',
    options: ['rpm -qf /etc/httpd/conf/httpd.conf', 'dnf search httpd.conf', 'rpm -ql httpd.conf', 'rpm -S httpd.conf'],
    correct: 0,
    explanation: 'rpm -qf (query file) encontra qual pacote instalado possui o arquivo especificado.',
  },
  {
    id: 'q-lpic1-101-2-028', lessonId: 'lpic1-101-2-5', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando verifica a integridade de um pacote RPM instalado?',
    options: ['rpm -check', 'rpm -V', 'dnf verify', 'rpm -i'],
    correct: 1,
    explanation: 'rpm -V (verify) compara arquivos instalados com os metadados originais.',
  },

  // ─── 102.6 Virtualização (4 perguntas) ───
  {
    id: 'q-lpic1-101-2-029', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Qual é a diferença principal entre hipervisores Tipo 1 e Tipo 2?',
    options: [
      'Tipo 1 exige Windows, Tipo 2 exige Linux',
      'Tipo 1 executa diretamente no hardware (bare-metal), Tipo 2 executa sobre um sistema operacional host',
      'Tipo 1 é para containers, Tipo 2 é para máquinas virtuais',
      'Não há diferença'
    ],
    correct: 1,
    explanation: 'O Tipo 1 executa no hardware para desempenho máximo. O Tipo 2 executa como uma aplicação dentro de um SO host.',
  },
  {
    id: 'q-lpic1-101-2-030', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Como os containers Linux (como Docker ou Podman) diferem de máquinas virtuais completas?',
    options: [
      'Containers são mais lentos que VMs',
      'Containers partilham o kernel do sistema operacional host, evitando a sobrecarga de um SO guest completo',
      'Containers podem executar apps Windows nativamente no Linux',
      'Containers exigem hardware dedicado'
    ],
    correct: 1,
    explanation: 'Os containers partilham o kernel do host, isolando processos em vez de emular hardware.',
  },
  {
    id: 'q-lpic1-101-2-031', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Que tecnologia Linux é um hipervisor Tipo 1 nativo baseado no kernel?',
    options: ['VirtualBox', 'KVM', 'Xen', 'VMware Workstation'],
    correct: 1,
    explanation: 'O KVM (Kernel-based Virtual Machine) transforma o kernel Linux num hipervisor Tipo 1.',
  },
  {
    id: 'q-lpic1-101-2-032', lessonId: 'lpic1-101-2-6', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Qual é o propósito das "Guest Additions" ou "Guest Tools" numa máquina virtual?',
    options: [
      'Permitir que o guest aceda ao hardware do host diretamente sem permissão',
      'Fornecer melhores drivers para vídeo, integração de rato e pastas partilhadas',
      'Encriptar o disco virtual',
      'Permitir que a VM execute sem kernel'
    ],
    correct: 1,
    explanation: 'As Guest Additions fornecem drivers e serviços otimizados que melhoram o desempenho e usabilidade do SO guest.',
  },
];
