// LPIC-1 101 Games Data — Portuguese

export const memoryGameData = [
  // ─── TOPIC 1 ───
  { id: 1, concept: 'Sistema de Ficheiros Virtual de Hardware', matchId: 1, type: 'concept' },
  { id: 2, concept: '/proc', matchId: 1, type: 'definition' },
  { id: 3, concept: 'Listar dispositivos USB', matchId: 2, type: 'concept' },
  { id: 4, concept: 'lsusb', matchId: 2, type: 'definition' },
  { id: 5, concept: 'Nome inteligente do módulo (Carregar driver)', matchId: 3, type: 'concept' },
  { id: 6, concept: 'modprobe', matchId: 3, type: 'definition' },
  { id: 7, concept: 'Primeiro Bootloader da fase de Boot do Linux (Bios / EFI)', matchId: 4, type: 'concept' },
  { id: 8, concept: 'POST', matchId: 4, type: 'definition' },
  { id: 9, concept: 'Ver mensagens do Kernel Ring-Buffer', matchId: 5, type: 'concept' },
  { id: 10, concept: 'dmesg', matchId: 5, type: 'definition' },
  { id: 11, concept: 'Systemd Target: Interface Gráfica (Runlevel 5)', matchId: 6, type: 'concept' },
  { id: 12, concept: 'graphical.target', matchId: 6, type: 'definition' },
  { id: 13, concept: 'Definir alvo para a próxima reinicialização', matchId: 7, type: 'concept' },
  { id: 14, concept: 'systemctl set-default', matchId: 7, type: 'definition' },
  { id: 15, concept: 'Parar o sistema imediatamente', matchId: 8, type: 'concept' },
  { id: 16, concept: 'shutdown -h now', matchId: 8, type: 'definition' },

  // ─── TOPIC 2 ───
  { id: 17, concept: 'Padrão obsoleto de Tabela de Partição (Máx 2TB)', matchId: 9, type: 'concept' },
  { id: 18, concept: 'MBR', matchId: 9, type: 'definition' },
  { id: 19, concept: 'Onde ficam logs, spools e frequentemente dados web', matchId: 10, type: 'concept' },
  { id: 20, concept: '/var', matchId: 10, type: 'definition' },
  { id: 21, concept: 'Ficheiro principal de configuração do GRUB2 (Editar texto)', matchId: 11, type: 'concept' },
  { id: 22, concept: '/etc/default/grub', matchId: 11, type: 'definition' },
  { id: 23, concept: 'Gerar configuração do gerenciador de boot GRUB', matchId: 12, type: 'concept' },
  { id: 24, concept: 'grub2-mkconfig', matchId: 12, type: 'definition' },
  { id: 25, concept: 'Mostrar dependências de um ficheiro binário', matchId: 13, type: 'concept' },
  { id: 26, concept: 'ldd', matchId: 13, type: 'definition' },
  { id: 27, concept: 'Desinstalar completamente o pacote (incluindo Config)', matchId: 14, type: 'concept' },
  { id: 28, concept: 'dpkg -P', matchId: 14, type: 'definition' },
  { id: 29, concept: 'Atualizar listas de pacotes do APT', matchId: 15, type: 'concept' },
  { id: 30, concept: 'apt update', matchId: 15, type: 'definition' },
  { id: 31, concept: 'Qual pacote instalou o ficheiro X (RPM)?', matchId: 16, type: 'concept' },
  { id: 32, concept: 'rpm -qf', matchId: 16, type: 'definition' },

  // ─── TOPIC 3 ───
  { id: 33, concept: 'Herdar variável local para o sistema', matchId: 17, type: 'concept' },
  { id: 34, concept: 'export', matchId: 17, type: 'definition' },
  { id: 35, concept: 'Imprimir tipo de comando (Alias/Builtin/Ficheiro)', matchId: 18, type: 'concept' },
  { id: 36, concept: 'type', matchId: 18, type: 'definition' },
  { id: 37, concept: 'Conta linhas num ficheiro', matchId: 19, type: 'concept' },
  { id: 38, concept: 'wc -l', matchId: 19, type: 'definition' },
  { id: 39, concept: 'Lê os logs ao vivo de baixo para cima com', matchId: 20, type: 'concept' },
  { id: 40, concept: 'tail -f', matchId: 20, type: 'definition' },
  { id: 41, concept: 'Copiar diretórios juntamente com o seu conteúdo', matchId: 21, type: 'concept' },
  { id: 42, concept: 'cp -r', matchId: 21, type: 'definition' },
  { id: 43, concept: 'Pesquisa rápida de ficheiros via base de dados de índice', matchId: 22, type: 'concept' },
  { id: 44, concept: 'locate', matchId: 22, type: 'definition' },
  { id: 45, concept: 'Criar um arquivo tar comprimido com gzip', matchId: 23, type: 'concept' },
  { id: 46, concept: 'tar -czvf', matchId: 23, type: 'definition' },
  { id: 47, concept: 'Bifurca o stdout num ficheiro E num pipe', matchId: 24, type: 'concept' },
  { id: 48, concept: 'tee', matchId: 24, type: 'definition' },

  // ─── TOPIC 4 ───
  { id: 49, concept: 'Criar/formatar sistema de ficheiros Ext4', matchId: 25, type: 'concept' },
  { id: 50, concept: 'mkfs.ext4', matchId: 25, type: 'definition' },
  { id: 51, concept: 'Preparar memória Swap', matchId: 26, type: 'concept' },
  { id: 52, concept: 'mkswap', matchId: 26, type: 'definition' },
  { id: 53, concept: 'Mostrar total de memória das partições', matchId: 27, type: 'concept' },
  { id: 54, concept: 'df -h', matchId: 27, type: 'definition' },
  { id: 55, concept: 'IDs em bloco para montagem distribuída do disco', matchId: 28, type: 'concept' },
  { id: 56, concept: 'UUID', matchId: 28, type: 'definition' },
  { id: 57, concept: 'Direito de acesso em octal rw-r--r--', matchId: 29, type: 'concept' },
  { id: 58, concept: '644', matchId: 29, type: 'definition' },
  { id: 59, concept: 'Impede deleção externa no diretório /tmp', matchId: 30, type: 'concept' },
  { id: 60, concept: 'Sticky Bit', matchId: 30, type: 'definition' },
  { id: 61, concept: 'Criar uma ligação simbólica (link)', matchId: 31, type: 'concept' },
  { id: 62, concept: 'ln -s', matchId: 31, type: 'definition' },
  { id: 63, concept: 'Padrão de Hierarquia de Sistema de Ficheiros do Linux', matchId: 32, type: 'concept' },
  { id: 64, concept: 'FHS', matchId: 32, type: 'definition' },
]

export const terminalChallengeData = [
  // ─── TOPIC 1 ───
  {
    id: 1,
    task: 'Listar todos os barramentos e dispositivos PCI no sistema',
    solution: 'lspci',
    type: 'command',
    category: 'hardware'
  },
  {
    id: 2,
    task: 'Listar o diretório que contém ficheiros de dispositivos como disco dinamicamente sda',
    solution: 'ls /dev',
    type: 'command',
    category: 'hardware'
  },
  {
    id: 3,
    task: 'Mostrar as mensagens do ring buffer do núcleo após a última inicialização',
    solution: 'dmesg',
    type: 'command',
    category: 'boot'
  },
  {
    id: 4,
    task: 'Alterar imediatamente o estado do Runlevel s/GUI para o antigo Runlevel 3 Text apenas',
    solution: 'systemctl isolate multi-user.target',
    type: 'command',
    category: 'systemd'
  },
  
  // ─── TOPIC 2 ───
  {
    id: 5,
    task: 'Faça a verificação rápida das listas do repositório apt da Debian/Ubuntu do sistema',
    solution: 'apt update',
    type: 'command',
    category: 'package_apt'
  },
  {
    id: 6,
    task: 'Instalar mecanicamente um pacote empacotado local sem verificação de dependência do tipo .deb',
    solution: 'dpkg -i package.deb',
    type: 'command',
    category: 'package_dpkg'
  },
  {
    id: 7,
    task: 'Se o "bash" for um pacote .rpm, liste agora as pastas da instalação que ele contém',
    solution: 'rpm -ql bash',
    type: 'command',
    category: 'package_rpm'
  },
  {
    id: 8,
    task: 'Que bibliotecas conectadas (.so) o ficheiro do comando "ls" requer para se ligar?',
    solution: 'ldd /bin/ls',
    type: 'command',
    category: 'libraries'
  },

  // ─── TOPIC 3 ───
  {
    id: 9,
    task: 'Procura através de tempo real começando da base total / os ficheiros por nome de "conf"',
    solution: 'find / -name "conf"',
    type: 'command',
    category: 'files'
  },
  {
    id: 10,
    task: 'Arquiva uma pasta de "docs" a partir do diretório criando simultaneamente no formato .tar.gz ',
    solution: 'tar -czvf docs.tar.gz docs',
    type: 'command',
    category: 'archive'
  },
  {
    id: 11,
    task: 'Passar uma linha com erro e sobrescrever na raiz completa no texto da "log.txt"',
    solution: 'echo "text" > log.txt',
    type: 'command',
    category: 'redirection'
  },
  {
    id: 12,
    task: 'Chamar um disparo e erradicar diretamente na raiz a ameaça pela id finalizada sem negociação 1234',
    solution: 'kill -9 1234',
    type: 'command',
    category: 'process'
  },

  // ─── TOPIC 4 ───
  {
    id: 13,
    task: 'Como estruturar fisicamente pela formatação natural a pasta nova em padrão base ext4 dentro a placa isolada em /dev/sdb1?',
    solution: 'mkfs.ext4 /dev/sdb1',
    type: 'command',
    category: 'filesystem'
  },
  {
    id: 14,
    task: 'Listagem dos dados dos diretórios conectados e montados com sua limitação convertendo os megabytes facilmente limpos.',
    solution: 'df -h',
    type: 'command',
    category: 'filesystem'
  },
  {
    id: 15,
    task: 'Ao ficheiro fixo e raiz física bruta originária clone sem um atalho um verdadeiro e permanente elo para pasta "link".',
    solution: 'ln file link',
    type: 'command',
    category: 'links'
  },
  {
    id: 16,
    task: 'Ao diretório final de bash para poderem dar as edições absolutas completas exclusivas pro utilizador que a fundou (Todos do ambiente da net limitados leitura, e ler correr para staff extra originaria nativa.',
    solution: 'chmod 755 script.sh',
    type: 'command',
    category: 'permissions'
  }
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1
  { text: 'O BIOS é mais moderno que o UEFI.', answer: false, explanation: 'O UEFI é o sucessor moderno com GPT, Secure Boot e boot mais rápido.', difficulty: 1 },
  { text: '/proc é um sistema de ficheiros virtual que reside apenas na RAM.', answer: true, explanation: '/proc não ocupa espaço em disco; é gerado dinamicamente pelo kernel.', difficulty: 1 },
  { text: 'O processo init/systemd tem sempre o PID 1.', answer: true, explanation: 'init ou systemd é o primeiro processo de utilizador iniciado pelo kernel com PID 1.', difficulty: 1 },
  { text: 'O MBR suporta discos maiores que 2TB.', answer: false, explanation: 'O MBR é limitado a 2TB. O GPT suporta discos até 8ZiB.', difficulty: 1 },
  { text: 'apt-get update instala atualizações de pacotes.', answer: false, explanation: 'update descarrega as listas de pacotes. upgrade instala as atualizações reais.', difficulty: 1 },
  { text: 'Bibliotecas partilhadas .so são carregadas em tempo de execução.', answer: true, explanation: '.so (shared objects) são carregados pelo linker dinâmico ao executar um programa.', difficulty: 1 },
  { text: 'O comando cat é usado principalmente para criar ficheiros vazios.', answer: false, explanation: 'cat concatena e mostra ficheiros. touch cria ficheiros vazios.', difficulty: 1 },
  { text: 'O | pipe conecta stdout de um comando ao stdin do próximo.', answer: true, explanation: 'Um pipe cria um pipeline passando saída como entrada.', difficulty: 1 },
  { text: 'SIGKILL (9) pode ser intercetado por um processo.', answer: false, explanation: 'SIGKILL não pode ser capturado nem ignorado. Termina imediatamente.', difficulty: 1 },
  { text: 'O sistema de ficheiros ext4 suporta journaling.', answer: true, explanation: 'ext4 tem journaling integrado para proteção contra falhas.', difficulty: 1 },
  { text: 'chmod 644 torna um ficheiro executável para todos.', answer: false, explanation: '644 = rw-r--r--. Sem permissões de execução. 755 inclui execução.', difficulty: 1 },
  { text: '/etc/fstab define sistemas de ficheiros montados automaticamente no arranque.', answer: true, explanation: 'fstab contém dispositivo, ponto de montagem, tipo e opções.', difficulty: 1 },
  // Difficulty 2
  { text: 'modprobe trata automaticamente as dependências de módulos do kernel.', answer: true, explanation: 'modprobe usa depmod para resolver dependências, ao contrário de insmod.', difficulty: 2 },
  { text: 'rescue.target é equivalente ao SysVinit runlevel 5.', answer: false, explanation: 'rescue.target é utilizador único (runlevel 1). Gráfico é runlevel 5.', difficulty: 2 },
  { text: 'dpkg instala automaticamente dependências de pacotes.', answer: false, explanation: 'dpkg instala .deb mas NÃO resolve dependências. apt faz isso.', difficulty: 2 },
  { text: 'O comando uniq remove todas as linhas duplicadas num ficheiro.', answer: false, explanation: 'uniq só remove duplicados CONSECUTIVOS. Use sort | uniq para todos.', difficulty: 2 },
  { text: 'Num regex, o . ponto corresponde a qualquer carácter.', answer: true, explanation: 'O . meta-carácter corresponde a qualquer carácter único (exceto newline).', difficulty: 2 },
  { text: 'Um valor nice de -20 indica a MÍNIMA prioridade.', answer: false, explanation: '-20 é a MÁXIMA prioridade. +19 é a mínima.', difficulty: 2 },
  { text: 'parted aplica alterações de partição imediatamente.', answer: true, explanation: 'Ao contrário de fdisk que armazena as alterações, parted aplica-as diretamente no disco.', difficulty: 2 },
  { text: 'O sticky bit num diretório impede que alguém apague ficheiros.', answer: false, explanation: 'Apenas o dono do ficheiro (ou root) pode apagar. Impede que utilizadores apaguem ficheiros de outros.', difficulty: 2 },
  { text: 'fsck deve ser executado num sistema de ficheiros montado.', answer: false, explanation: 'fsck deve ser executado em sistemas de ficheiros DESMONTADOS para evitar corrupção de dados.', difficulty: 2 },
  { text: 'UUID é um identificador único e permanente para um sistema de ficheiros.', answer: true, explanation: 'UUIDs são criados durante a formatação e não mudam, ao contrário dos nomes /dev/sdX.', difficulty: 2 },
  // Difficulty 3
  { text: 'Em ERE regex, + necessita de escape (\\\\+) para funcionar.', answer: false, explanation: 'Em Extended RE (-E), + funciona sem escape. Precisa de escape em Basic RE.', difficulty: 3 },
  { text: 'emergency.target só monta / em read-only e não inicia serviços.', answer: true, explanation: 'emergency é o target mais restritivo para recuperação extrema.', difficulty: 3 },
  { text: 'Com umask 077, novos ficheiros recebem permissões rw------- (600).', answer: true, explanation: '666 padrão - 077 umask = 600.', difficulty: 3 },
  { text: 'rpm -V verifica as dependências de um pacote instalado.', answer: false, explanation: 'rpm -V verifica integridade (checksums, permissões). rpm -R verifica dependências.', difficulty: 3 },
  { text: 'Hard links podem apontar para diretórios.', answer: false, explanation: 'Linux impede hard links para diretórios para evitar loops no sistema de ficheiros.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: 'listar dispositivos PCI', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: 'mostrar target padrão', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: 'atualizar lista de pacotes', difficulty: 1 },
  { prompt: 'head -n _____ file', answer: '10', hint: 'número padrão de linhas', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: 'criar diretórios pais', difficulty: 1 },
  { prompt: 'chmod _____ file', answer: '755', hint: 'definir rwxr-xr-x', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: 'montar um sistema de ficheiros', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: 'remover recursivamente', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: 'mostrar todos os processos', difficulty: 1 },
  { prompt: 'grep _____ "pattern" file', answer: '-i', hint: 'pesquisa sem distinção de maiúsculas', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ module', answer: '-r', hint: 'remover o módulo', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: 'parar o sistema', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'caminho do ficheiro de config GRUB', difficulty: 2 },
  { prompt: 'dpkg _____ /path/to/file', answer: '-S', hint: 'procurar pacote do ficheiro', difficulty: 2 },
  { prompt: 'rpm _____ package', answer: '-qi', hint: 'mostrar info do pacote', difficulty: 2 },
  { prompt: 'find /etc -name "_____"', answer: '*.conf', hint: 'ficheiros de configuração', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'sinal SIGKILL', difficulty: 2 },
  { prompt: 'nice -n _____ cmd', answer: '10', hint: 'baixa prioridade', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: 'sistema de ficheiros Linux comum', difficulty: 2 },
  { prompt: 'ln _____ /original /link', answer: '-s', hint: 'criar link simbólico', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'trocar target sem reiniciar', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: 'resulta em ficheiro 644, dir 755', difficulty: 3 },
  { prompt: 'sed "s/old/new/_____" file', answer: 'g', hint: 'substituir globalmente', difficulty: 3 },
  { prompt: 'grep -_____ "error|warning" file', answer: 'E', hint: 'ativar Regex Estendido', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: 'especificar ID do Processo', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: 'Ordem de Boot',
    question: 'Ordene as fases de boot do Linux:',
    items: [
      { text: 'Kernel inicializa hardware', order: 3 },
      { text: 'init/systemd inicia serviços', order: 4 },
      { text: 'BIOS/UEFI executa POST', order: 1 },
      { text: 'GRUB2 carrega kernel/initramfs', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: 'Runlevel → Target',
    question: 'Associe o SysVinit runlevel ao systemd target:',
    items: [
      { text: 'Runlevel 3 (multi-utilizador texto)', matches: 'multi-user.target' },
      { text: 'Runlevel 5 (GUI)', matches: 'graphical.target' },
      { text: 'Runlevel 1 (utilizador único)', matches: 'rescue.target' },
      { text: 'Runlevel 0 (halt)', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: 'Famílias de Pacotes',
    question: 'Classifique os comandos por família de pacotes:',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RPM' },
      { text: 'dnf install', category: 'RPM' },
      { text: 'zypper install', category: 'RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: 'Permissões Octais',
    question: 'Associe a notação octal às permissões:',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]
