// LPIC-1 101 Quiz — Tema 4: Dispositivos, Sistemas de Ficheiros, FHS (Português)

export const lpic1_101_topic4_pt = [
  // ─── 104.1 Criar partições e sistemas de ficheiros (5 questões) ───
  {
    id: 'q-lpic1-101-4-001', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual ferramenta interativa de linha de comando é tradicionalmente usada para criar e manipular tabelas de partição MBR?',
    options: ['mkfs', 'fdisk', 'partprobe', 'mount'],
    correct: 1,
    explanation: '`fdisk` é a ferramenta tradicional baseada em texto interativo para manipular tabelas de partição de disco (especialmente MBR).',
  },
  {
    id: 'q-lpic1-101-4-002', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual ferramenta de particionamento é especificamente projetada para trabalhar com GPT (GUID Partition Table) usando uma interface semelhante ao fdisk?',
    options: ['fdisk', 'gdisk', 'parted', 'sfdisk'],
    correct: 1,
    explanation: '`gdisk` (GPT fdisk) é modelado com base no fdisk, mas lida especificamente com tabelas de partição GPT.',
  },
  {
    id: 'q-lpic1-101-4-003', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Ao contrário do fdisk, qual ferramenta de particionamento pode aplicar alterações imediatamente sem a necessidade de um comando de escrita explícito?',
    options: ['gdisk', 'parted', 'cfdisk', 'sfdisk'],
    correct: 1,
    explanation: '`parted` (GNU Parted) executa comandos (como criar ou excluir partições) imediatamente no disco.',
  },
  {
    id: 'q-lpic1-101-4-004', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando escreve um sistema de ficheiros ext4 na partição /dev/sdb1?',
    options: ['format /dev/sdb1 ext4', 'ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'fdisk /dev/sdb1'],
    correct: 2,
    explanation: '`mkfs.ext4` constrói um sistema de ficheiros ext4 num dispositivo ou partição especificado.',
  },
  {
    id: 'q-lpic1-101-4-005', lessonId: 'lpic1-101-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando prepara uma partição para ser usada como espaço de troca (swap)?',
    options: ['mkfs.swap', 'swapon', 'mkswap', 'fdisk'],
    correct: 2,
    explanation: '`mkswap` formata a partição ou ficheiro com uma assinatura de swap.',
  },

  // ─── 104.2 Manter a integridade dos sistemas de ficheiros (5 questões) ───
  {
    id: 'q-lpic1-101-4-006', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qual é um requisito crítico antes de executar o `fsck` para reparar um sistema de ficheiros?',
    options: [
      'O sistema deve ser reiniciado no alvo de resgate (rescue target)',
      'O sistema de ficheiros deve estar desmontado ou montado apenas para leitura',
      'O utilizador root deve executá-lo com a flag --force',
      'O sistema de ficheiros deve ser um volume lógico'
    ],
    correct: 1,
    explanation: 'Executar o fsck num sistema de ficheiros montado ativamente para leitura/escrita pode resultar em corrupção grave de dados.',
  },
  {
    id: 'q-lpic1-101-4-007', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando mostra o espaço total em disco, espaço usado e disponível em todos os sistemas de ficheiros montados?',
    options: ['du -h', 'df -h', 'lsblk', 'fdisk -l'],
    correct: 1,
    explanation: '`df` (disk free) reporta o uso do espaço em disco do sistema de ficheiros. A flag `-h` torna-o legível por humanos.',
  },
  {
    id: 'q-lpic1-101-4-008', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Se precisar de saber quanto espaço em disco um diretório específico (como /var/log) está a consumir, qual comando usa?',
    options: ['df /var/log', 'du -sh /var/log', 'ls -s /var/log', 'fsck /var/log'],
    correct: 1,
    explanation: '`du` (disk usage) estima o uso do espaço de ficheiros; `-s` resume o total.',
  },
  {
    id: 'q-lpic1-101-4-009', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qual ferramenta permite modificar parâmetros (como contagem máxima de montagens ou comportamento de erro) num sistema de ficheiros ext4 existente?',
    options: ['dumpe2fs', 'fsck.ext4', 'tune2fs', 'e2label'],
    correct: 2,
    explanation: 'O `tune2fs` permite o ajuste de parâmetros configuráveis do sistema de ficheiros em sistemas ext2/ext3/ext4.',
  },
  {
    id: 'q-lpic1-101-4-010', lessonId: 'lpic1-101-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qual comando é especificamente usado para verificar e reparar sistemas de ficheiros XFS?',
    options: ['fsck.xfs', 'xfs_repair', 'tune2fs', 'xfs_check'],
    correct: 1,
    explanation: 'Embora o `fsck.xfs` exista para compatibilidade, o `xfs_repair` é a principal ferramenta para verificar e reparar sistemas XFS.',
  },

  // ─── 104.3 Controlar montagem e desmontagem de sistemas de ficheiros (5 questões) ───
  {
    id: 'q-lpic1-101-4-011', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual arquivo de configuração o SO lê no arranque para montar automaticamente os sistemas de ficheiros?',
    options: ['/etc/mtab', '/etc/fstab', '/proc/mounts', '/etc/mount.conf'],
    correct: 1,
    explanation: '/etc/fstab (filesystem table) contém informações estáticas sobre sistemas de ficheiros e os seus pontos de montagem.',
  },
  {
    id: 'q-lpic1-101-4-012', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando monta todos os sistemas de ficheiros mencionados no /etc/fstab com a opção "auto"?',
    options: ['mount --all', 'mount -a', 'mount --fstab', 'automount'],
    correct: 1,
    explanation: '`mount -a` executa uma montagem para cada entrada no /etc/fstab, exceto aquelas marcadas com "noauto".',
  },
  {
    id: 'q-lpic1-101-4-013', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'No /etc/fstab, qual é o propósito do sexto campo (pass)?',
    options: [
      'Define o número de vezes que o sistema de ficheiros pode ser montado',
      'Controla se o sistema de ficheiros usa swap',
      'Determina a ordem pela qual o fsck verifica o sistema de ficheiros no arranque',
      'Define a frequência de backup para o dump'
    ],
    correct: 2,
    explanation: 'O campo pass indica ao fsck a ordem para verificar os sistemas de ficheiros. Root é 1, outros são 2, e 0 significa não verificar.',
  },
  {
    id: 'q-lpic1-101-4-014', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual opção de montagem do fstab impede os utilizadores de executar qualquer arquivo binário localizado nesse sistema de ficheiros?',
    options: ['nosuid', 'nodev', 'noexec', 'ro'],
    correct: 2,
    explanation: 'A opção de montagem `noexec` impede a execução de binários no sistema de ficheiros.',
  },
  {
    id: 'q-lpic1-101-4-015', lessonId: 'lpic1-101-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qual arquivo (ou link simbólico) fornece uma lista dos sistemas de ficheiros atualmente montados conforme mantido pelo kernel?',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/boot/mounts'],
    correct: 2,
    explanation: '`/proc/mounts` é um arquivo virtual que reflete o estado atual das montagens conforme conhecido pelo kernel.',
  },

  // ─── 104.5 Gerir permissões e propriedade de arquivos (6 questões) ───
  {
    id: 'q-lpic1-101-4-016', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Se um arquivo tem permissões `rwxr-xr--`, qual é o equivalente numérico (octal)?',
    options: ['754', '744', '755', '774'],
    correct: 0,
    explanation: 'rwx (7), r-x (5), r-- (4). Resultado: 754.',
  },
  {
    id: 'q-lpic1-101-4-017', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando altera o dono e o grupo de um arquivo chamado relatorio.doc para o utilizador "alice" e grupo "finance"?',
    options: ['chmod alice:finance relatorio.doc', 'chown alice:finance relatorio.doc', 'chgrp alice:finance relatorio.doc', 'chuser alice:finance relatorio.doc'],
    correct: 1,
    explanation: '`chown utilizador:grupo arquivo` altera tanto o proprietário quanto o grupo.',
  },
  {
    id: 'q-lpic1-101-4-018', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'O que acontece quando um ficheiro executável binário tem o bit SUID (Set User ID) definido?',
    options: [
      'O arquivo só pode ser modificado pelo utilizador root',
      'Quando executado, o processo corre com os privilégios do dono do arquivo',
      'O arquivo corre em segundo plano automaticamente',
      'Não pode ser apagado por ninguém exceto o root'
    ],
    correct: 1,
    explanation: 'O SUID permite que um processo corra com os privilégios do dono do ficheiro.',
  },
  {
    id: 'q-lpic1-101-4-019', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Um diretório (/shared) tem permissões 1777 (drwxrwxrwt). O que é que o sticky bit (o "t") faz aqui?',
    options: [
      'Todos os novos ficheiros criados herdam a propriedade do grupo',
      'Força todos os ficheiros a serem apenas de leitura',
      'Impede que utilizadores apaguem ficheiros de outros utilizadores dentro deste diretório',
      'Torna o diretório imutável'
    ],
    correct: 2,
    explanation: 'O sticky bit num diretório impede que utilizadores apaguem ficheiros que não possuem.',
  },
  {
    id: 'q-lpic1-101-4-020', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Se o umask do sistema for 0022, quais são as permissões padrão aplicadas a um novo arquivo de texto?',
    options: ['666 (rw-rw-rw-)', '644 (rw-r--r--)', '755 (rwxr-xr-x)', '777 (rwxrwxrwx)'],
    correct: 1,
    explanation: 'Arquivos começam com permissão base 666; 666 - 022 = 644.',
  },
  {
    id: 'q-lpic1-101-4-021', lessonId: 'lpic1-101-4-5', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual flag é usada com o `chmod` ou `chown` para aplicar alterações a todos os ficheiros e subdiretórios dentro de um diretório?',
    options: ['-a', '-r', '-R', '-f'],
    correct: 2,
    explanation: 'A flag `-R` significa Recursivo e aplica o comando ao diretório e a toda a sua árvore.',
  },

  // ─── 104.6 Criar e alterar links simbólicos e ligações físicas (4 questões) ───
  {
    id: 'q-lpic1-101-4-022', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual dos seguintes comandos cria um link simbólico (soft link) chamado `atalho` a apontar para `arquivo.txt`?',
    options: ['ln arquivo.txt atalho', 'ln -s arquivo.txt atalho', 'link arquivo.txt atalho', 'ln -c arquivo.txt atalho'],
    correct: 1,
    explanation: '`ln -s alvo nome_do_link` cria um link simbólico.',
  },
  {
    id: 'q-lpic1-101-4-023', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual afirmação é VERDADEIRA em relação a hard links (ligações físicas)?',
    options: [
      'Podem apontar para diretórios',
      'Podem cruzar diferentes sistemas de ficheiros',
      'Partilham exatamente o mesmo número de inode que o arquivo original',
      'Se o arquivo original for apagado, o hard link para de funcionar'
    ],
    correct: 2,
    explanation: 'Hard links apontam diretamente para o inode e partilham o mesmo número de inode.',
  },
  {
    id: 'q-lpic1-101-4-024', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'O que acontece a um link simbólico se o arquivo original para o qual ele aponta for apagado?',
    options: [
      'O link simbólico torna-se um link "quebrado" e para de funcionar',
      'O link simbólico é apagado automaticamente',
      'Os dados permanecem disponíveis através do link simbólico',
      'O link simbólico converte-se num hard link'
    ],
    correct: 0,
    explanation: 'um symlink torna-se órfão (quebrado) se o seu alvo for removido.',
  },
  {
    id: 'q-lpic1-101-4-025', lessonId: 'lpic1-101-4-6', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Quando cria um hard link para um ficheiro, o que acontece ao contador de links (link count) do inode desse ficheiro?',
    options: [
      'Diminui 1',
      'Aumenta 1',
      'Mantém-se igual',
      'É redefinido para 0'
    ],
    correct: 1,
    explanation: 'Criar um hard link incrementa o contador de links físicos (nlink) no inode.',
  },

  // ─── 104.7 Encontrar ficheiros do sistema e colocar arquivos no local correto (5 questões) ───
  {
    id: 'q-lpic1-101-4-026', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'De acordo com o Filesystem Hierarchy Standard (FHS), onde devem estar localizados os ficheiros de configuração de todo o sistema?',
    options: ['/opt', '/usr', '/etc', '/var'],
    correct: 2,
    explanation: '/etc contém ficheiros de configuração específicos do host para todo o sistema.',
  },
  {
    id: 'q-lpic1-101-4-027', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual diretório é destinado a dados variáveis que mudam rapidamente, como ficheiros de log e bases de dados?',
    options: ['/var', '/tmp', '/srv', '/usr'],
    correct: 0,
    explanation: '/var contém ficheiros de dados variáveis.',
  },
  {
    id: 'q-lpic1-101-4-028', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Onde devem ser instalados pacotes de software opcionais de terceiros, de acordo com o FHS?',
    options: ['/usr/local', '/opt', '/var', '/bin'],
    correct: 1,
    explanation: '/opt é reservado para a instalação de pacotes de software adicionais.',
  },
  {
    id: 'q-lpic1-101-4-029', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Nos sistemas Linux modernos que aderem ao FHS, qual diretório é frequentemente um link simbólico para /usr/bin?',
    options: ['/sbin', '/etc', '/bin', '/dev'],
    correct: 2,
    explanation: 'Muitas distribuições modernas fundiram o `/bin` e o `/usr/bin`, tornando o `/bin` um link simbólico para o `/usr/bin`.',
  },
  {
    id: 'q-lpic1-101-4-030', lessonId: 'lpic1-101-4-7', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Qual diretório contém ficheiros temporários que NÃO têm garantia de serem preservados entre reinicializações do sistema?',
    options: ['/var/tmp', '/tmp', '/home/tmp', '/mnt/tmp'],
    correct: 1,
    explanation: '`/tmp` é para ficheiros temporários; muitos sistemas limpam-no no arranque. `/var/tmp` é para ficheiros a serem preservados.',
  },
];
