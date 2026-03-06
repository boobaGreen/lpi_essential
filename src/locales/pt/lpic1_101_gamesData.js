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
