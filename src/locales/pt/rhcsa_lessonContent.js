export const rhcsaLessonContentPT = {

  // ─── TOPIC 1: Ferramentas Essenciais ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell e Redirecionamento de E/S',
      panels: [
        { emoji: '📤', text: '`>` sobrescreve um arquivo com a saída: `echo "olá" > arquivo.txt` cria ou sobrescreve.' },
        { emoji: '📥', text: '`>>` anexa a saída ao final do arquivo: `echo "linha" >> arquivo.txt` preserva o conteúdo.' },
        { emoji: '🔗', text: '`|` (pipe) passa a saída de um comando para o próximo: `ls -l | grep ".txt"`.' },
        { emoji: '⚠️', text: '`2>` redireciona apenas erros: `find / -name "*.conf" 2> /dev/null` oculta erros.' },
        { emoji: '🎯', text: '`&>` redireciona tanto stdout quanto stderr para o mesmo arquivo: `comando &> saida.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Operadores de Redirecionamento',
        items: [
          '`>` — sobrescreve a saída padrão (stdout) em um arquivo',
          '`>>` — anexa a saída padrão a um arquivo',
          '`2>` — redireciona o erro padrão (stderr) para um arquivo',
          '`2> /dev/null` — descarta mensagens de erro',
          '`&>` — redireciona ambos (stdout e stderr) para o mesmo local',
          '`|` — conecta a saída de um processo à entrada de outro',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep e Expressões Regulares',
      panels: [
        { emoji: '🔎', text: '`grep "padrao" arquivo` busca linhas que contenham o padrão no arquivo.' },
        { emoji: '🚫', text: '`grep -v "padrao"` mostra todas as linhas EXCETO as que coincidem.' },
        { emoji: '📏', text: '`^` coincide com o início da linha, `$` com o fim. `^root` busca linhas começando com root.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` usa regex estendida com alternância (OU).' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` conta o número de linhas correspondentes.' },
      ],
    },
    keyPoints: [
      {
        title: 'Opções essenciais do grep',
        items: [
          '`-i` — ignora maiúsculas/minúsculas',
          '`-r` ou `-R` — busca recursiva em diretórios',
          '`-v` — inverte a correspondência (NÃO)',
          '`-n` — mostra números de linha',
          '`-E` — ativa Expressões Regulares Estendidas (ERE)',
          '`-w` — busca apenas palavras inteiras',
        ],
      },
      {
        title: 'Metacaracteres Regex básicos',
        items: [
          '`.` — qualquer único caractere',
          '`*` — zero ou mais repetições do caractere anterior',
          '`^` — âncoragem no início da linha',
          '`$` — âncoragem no fim da linha',
          '`[a-z]` — qualquer caractere no intervalo especificado',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Permissões e Links',
      panels: [
        { emoji: '🔐', text: 'Permissões UNIX: `rwxrwxrwx` — Usuário, Grupo, Outros. `chmod 755 arquivo` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown mario:dev arquivo` muda o dono para mario e o grupo para dev.' },
        { emoji: '🔗', text: 'Hardlink: `ln arquivo link` — mesmo inodo, sobrevive se o original for apagado.' },
        { emoji: '🔁', text: 'Link simbólico: `ln -s /caminho/real link` — aponta para um caminho (alias).' },
        { emoji: '📊', text: '`ls -l` mostra: tipo, permissões, hardlinks, dono, grupo, tamanho, data, nome.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — notação octal',
        items: [
          '`4` = leitura (r), `2` = escrita (w), `1` = execução (x)',
          '`755` = rwxr-xr-x (típico para diretórios)',
          '`644` = rw-r--r-- (típico para arquivos padrão)',
        ],
      },
      {
        title: 'Hardlinks vs Simbólicos',
        items: [
          'Hardlink: aponta para os mesmos dados no disco; não pode cruzar sistemas de arquivos.',
          'Link simbólico (Soft): um arquivo pequeno que contém o caminho para o arquivo real.',
          '`ls -l` mostra `l` no início para links simbólicos.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Arquivos e Compressão',
      panels: [
        { emoji: '📦', text: '`tar -czvf arquivo.tar.gz /dir` — cria um arquivo comprimido com gzip.' },
        { emoji: '📂', text: '`tar -xzvf arquivo.tar.gz` — extrai o conteúdo do arquivo comprimido.' },
        { emoji: '🔍', text: '`tar -tzvf arquivo.tar.gz` — lista o conteúdo sem extrair nada.' },
        { emoji: '⚡', text: 'Ferramentas de compressão: `gzip` (.gz), `bzip2` (.bz2), `xz` (.xz). XZ é mais lento mas comprime melhor.' },
        { emoji: '💡', text: 'Lembre-se das flags do tar: c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Flags essenciais do tar',
        items: [
          '`c` — criar arquivo',
          '`x` — extrair arquivo',
          '`t` — listar conteúdo',
          '`f` — especificar nome do arquivo (sempre ao final!)',
          '`v` — modo verboso (mostra o progresso)',
        ],
      },
      {
        title: 'Formatos de compressão',
        items: [
          '`z` — gzip (rápido, padrão)',
          '`j` — bzip2 (melhor compressão que gzip)',
          '`J` — xz (melhor taxa de compressão, mais CPU)',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/` from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 Documentação do Sistema',
      panels: [
        { emoji: '📖', text: '`man comando` — mostra o manual completo. Navegue com as setas, busque com `/padrao`, saia com `q`.' },
        { emoji: '❓', text: '`man -k palavra` (ou `apropos`) busca comandos relacionados a um tema.' },
        { emoji: 'ℹ️', text: '`info comando` — documentação mais detalhada e estruturada que o man.' },
        { emoji: '📁', text: '`/usr/share/doc/` contém README, CHANGELOG e exemplos para cada pacote instalado.' },
        { emoji: '💡', text: '`comando --help` — ajuda rápida em linha. Muito útil em exames para lembrar opções.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — seções e navegação',
        items: [
          'Seção 1: comandos de usuário, 5: arquivos de configuração, 8: comandos root',
          '`man 5 passwd` — consulta o formato do arquivo /etc/passwd (não o comando)',
          'Use `/palavra` para buscar no man e `n` para o próximo resultado.',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "password" | head -3',
      output: 'chpasswd (8) - update passwords in batch mode\ngpasswd (1) - administer /etc/group and /etc/gshadow\npasswd (1) - update user\'s authentication tokens',
    },
  },

  // ─── TOPIC 2: Shell Scripting ──────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '🐚 Variáveis e Sintaxe Bash',
      panels: [
        { emoji: '📝', text: 'Comece com `#!/bin/bash` (Shebang) para indicar o interpretador.' },
        { emoji: '🏷️', text: '`VAR="valor"` (sem espaços!). Acesse com `$VAR` ou `${VAR}`.' },
        { emoji: '💬', text: 'Aspas duplas `"` permitem expansão ($), aspas simples `\'` são literais.' },
        { emoji: '💻', text: '`OUTPUT=$(ls)` guarda a saída de um comando em uma variável.' },
        { emoji: '🚀', text: 'Dê permissões: `chmod +x script.sh` e execute com `./script.sh`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Shebang e permissões',
        items: [
          'A primeira linha deve ser `#!/bin/bash` ou similar.',
          'Use `chmod +x` para torná-lo executável diretamente.',
        ],
      },
      {
        title: 'Variáveis e expansão',
        items: [
          'Sem espaços ao redor do `=` : `NAME="mario"` (CORRETO), `NAME = "mario"` (ERRO).',
          '`$(comando)` é a forma moderna de substituição de comando.',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat hello.sh && ./hello.sh',
      output: '#!/bin/bash\nNAME="RHCSA"\necho "Hello $NAME"\n---\nHello RHCSA',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Condicionais e Loops',
      panels: [
        { emoji: '❓', text: '`if [ $A -gt $B ]; then ... fi` — Estrutura condicional. Atenção aos espaços em `[` e `]` !' },
        { emoji: '🔄', text: '`for file in *.txt; do ... done` — Itera sobre uma lista de elementos.' },
        { emoji: '⏳', text: '`while [ condicao ]; do ... done` — Repete enquanto a condição for verdadeira.' },
        { emoji: '🚥', text: '`case $VAR in padrao) ... ;; esac` — Seleção múltipla eficiente.' },
        { emoji: '✅', text: 'Operadores de teste: `-f` (arquivo), `-d` (diretório), `-z` (vazio), `-eq` (igual-num).' },
      ],
    },
    keyPoints: [
      {
        title: 'Operadores de Teste [ ]',
        items: [
          '`-eq`, `-ne`, `-lt`, `-gt` — comparações numéricas',
          '`==`, `!=` — comparações de strings',
          '`-f arquivo` — verdadeiro se o arquivo existir e for regular',
          '`-d diretorio` — verdadeiro se for um diretório',
        ],
      },
      {
        title: 'Loops',
        items: [
          '`for` é ideal para processar arquivos.',
          '`while` é frequentemente usado com `read` para processar arquivos linha por linha.',
        ],
      },
    ],
    terminal: {
      prompt: '$ if [ 10 -gt 5 ]; then echo "Maior"; fi',
      output: 'Maior',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '📥 Parâmetros e Saídas',
      panels: [
        { emoji: '🔢', text: '`$1`, `$2`... são argumentos passados ao script. `$0` é o nome do script.' },
        { emoji: '👥', text: '`$@` representa todos os argumentos como uma lista.' },
        { emoji: '📊', text: '`$#` é o número total de argumentos passados.' },
        { emoji: '❓', text: '`$?` é o Código de Saída do último comando. `0` = SUCESSO, outro = ERRO.' },
        { emoji: '🚪', text: '`exit 0` termina o script com sucesso. `exit 1` indica falha.' },
      ],
    },
    keyPoints: [
      {
        title: 'Argumentos de linha de comando',
        items: [
          '`$1` — primeiro argumento',
          '`$#` — número de argumentos',
          '`$@` — todos os argumentos',
        ],
      },
      {
        title: 'Exit Status ($?)',
        items: [
          'Crucial para o tratamento de erros.',
          'Verifique-o imediatamente após comandos importantes.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls /dir/inexistente; echo $?',
      output: 'ls: cannot access ...: No such file or directory\n2',
    },
  },

  // ─── TOPIC 3: Administração do Sistema ────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '🚀 Inicialização e Alvos do systemd',
      panels: [
        { emoji: '🎯', text: 'Um "Target" define o estado do sistema. `multi-user.target` = terminal, `graphical.target` = desktop.' },
        { emoji: '⚙️', text: '`systemctl get-default` mostra como o sistema inicia por padrão.' },
        { emoji: '🔄', text: '`systemctl set-default graphical.target` muda o arranque permanentemente.' },
        { emoji: '⚡', text: '`systemctl isolate multi-user.target` muda para o modo terminal na sessão atual.' },
        { emoji: '🛠️', text: 'Para reparos: adicione `rd.break` no GRUB para entrar no modo de emergência.' },
      ],
    },
    keyPoints: [
      {
        title: 'Alvos do systemd',
        items: [
          '`multi-user.target` — nível 3 tradicional (console)',
          '`graphical.target` — nível 5 tradicional (GUI)',
          '`rescue.target` — modo de manutenção básico',
        ],
      },
      {
        title: 'Mudar senha root (rd.break)',
        items: [
          '1. Editar GRUB, adicionar `rd.break` no final da linha `linux`.',
          '2. `mount -o remount,rw /sysroot` (remontar como leitura/escrita).',
          '3. `chroot /sysroot` (entrar na raiz real).',
          '4. `passwd root` (mudar senha).',
          '5. `touch /.autorelabel` (obrigatório para SELinux).',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '📊 Gestão de Processos',
      panels: [
        { emoji: '👁️', text: '`ps aux` ou `ps -ef` listam todos os processos ativos com seu PID (Process ID).' },
        { emoji: '📈', text: '`top` mostra em tempo real processos com alto uso de CPU e RAM.' },
        { emoji: '🛑', text: '`kill PID` envia um sinal de término suave. `kill -9 PID` (SIGKILL) é forçado.' },
        { emoji: '⚖️', text: 'Prioridade: "Nice" vai de -20 (alta) a +19 (baixa). `nice -n -5 comando` inicia com alta prioridade.' },
        { emoji: '🔧', text: '`renice -n 10 -p PID` muda a prioridade de um processo em execução.' },
      ],
    },
    keyPoints: [
      {
        title: 'Sinais comuns',
        items: [
          '`15` (SIGTERM) — término limpo (padrão)',
          '`9` (SIGKILL) — mata o processo imediatamente',
          '`1` (SIGHUP) — recarrega a configuração',
        ],
      },
      {
        title: 'Nice e Prioridade',
        items: [
          'Apenas o root pode atribuir valores negativos (mais prioridade).',
          'Quanto maior o número Nice, mais "gentil" o processo é com os outros (menos prioridade).',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps -ef | grep httpd | head -2',
      output: 'root      1234     1  0 10:00 ?        00:00:00 /usr/sbin/httpd\napache    1235  1234  0 10:00 ?        00:00:00 /usr/sbin/httpd',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🛠️ Gestão de Serviços com systemctl',
      panels: [
        { emoji: '🟢', text: '`systemctl start sshd` ativa o serviço agora mesmo.' },
        { emoji: '📌', text: '`systemctl enable sshd` ativa o serviço no arranque automático.' },
        { emoji: '🔄', text: '`systemctl restart sshd` para e reinicia o serviço.' },
        { emoji: '🚫', text: '`systemctl mask firewalld` impede que o serviço seja iniciado, mesmo manualmente.' },
        { emoji: '🔍', text: '`systemctl status sshd` mostra se está ativo, habilitado e os últimos erros.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos essenciais',
        items: [
          '`start`, `stop`, `restart`, `reload` — controle de execução',
          '`enable`, `disable` — controle de arranque automático',
          '`status`, `is-active`, `is-enabled` — consulta de estado',
          '`mask`, `unmask` — proteção contra arranques acidentais',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl is-active sshd',
      output: 'active',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📔 Logs e Tarefas Agendadas',
      panels: [
        { emoji: '📜', text: '`journalctl` mostra todos os logs do systemd. `journalctl -u sshd` filtra por serviço.' },
        { emoji: '⏲️', text: '`crontab -e` agenda tarefas periódicas (min hora dia mes sem comando).' },
        { emoji: '🏃', text: '`at 15:00` agenda uma tarefa para uma única execução futura.' },
        { emoji: '🔦', text: '`journalctl -f` segue os logs em tempo real (como tail -f).' },
        { emoji: '🗓️', text: '`crontab -l` lista as tarefas agendadas do usuário atual.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl — filtragem avançada',
        items: [
          '`-b` — apenas logs do boot atual',
          '`-p err` — apenas mensagens de erro',
          '`--since "1 hour ago"` — logs recentes',
        ],
      },
      {
        title: 'Agendamento cron',
        items: [
          'Formato: `* * * * * comando` (minutos, horas, dia do mês, mês, dia da semana).',
          '`/etc/cron.allow` e `/etc/cron.deny` controlam o acesso ao cron.',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -n 5 -p err',
      output: '-- Journal begins at ... --\nJan 15 10:00:01 systemd[1]: Failed to start ...',
    },
  },

  // ─── TOPIC 4: Armazenamento Local — LVM ────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 Particionamento GPT',
      panels: [
        { emoji: '🏗️', text: '`parted /dev/sdb` — ferramenta para criar partições. Use `mklabel gpt` para discos novos.' },
        { emoji: '📏', text: '`mkpart primary xfs 1MiB 2GiB` cria uma partição de 2GB.' },
        { emoji: '👀', text: '`lsblk` mostra a estrutura de blocos (discos e partições) visualmente.' },
        { emoji: '❗', text: '`udevadm settle` força o sistema a reconhecer as mudanças imediatamente.' },
        { emoji: '🔍', text: '`blkid` mostra o UUID das partições, necessário para montagens persistentes.' },
      ],
    },
    keyPoints: [
      {
        title: 'Ferramentas de particionamento',
        items: [
          '`fdisk` — interativo, clássico para MBR/GPT',
          '`gdisk` — específico para GPT',
          '`parted` — suporta scripts e é muito potente',
        ],
      },
      {
        title: 'Passos após particionar',
        items: [
          'Use `lsblk` para verificar se o sistema vê a partição.',
          'Formate com `mkfs` antes do uso.',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk /dev/nvme0n1',
      output: 'NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nnvme0n1     259:0    0   20G  0 disk \n├─nvme0n1p1 259:1    0  600M  0 part /boot/efi\n└─nvme0n1p2 259:2    0 19.4G  0 part /',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🧱 LVM — Volumes Físicos e Grupos',
      panels: [
        { emoji: '🔨', text: '`pvcreate /dev/sdb1` prepara uma partição física para o LVM.' },
        { emoji: '📦', text: '`vgcreate vg_data /dev/sdb1` agrupa Physical Volumes (PV) em um Volume Group (VG).' },
        { emoji: '➕', text: '`vgextend vg_data /dev/sdc1` adiciona mais espaço a um grupo de volumes existente.' },
        { emoji: '📊', text: '`pvs`, `vgs`, `lvs` mostram resumos rápidos de cada nível do LVM.' },
        { emoji: '🔍', text: '`pvdisplay` ou `vgdisplay` fornecem detalhes (tamanho, setores, UUID).' },
      ],
    },
    keyPoints: [
      {
        title: 'Arquitetura LVM',
        items: [
          'PV (Physical Volume) — A parte física (partição ou disco).',
          'VG (Volume Group) — O pool de armazenamento.',
          'LV (Logical Volume) — A "partição virtual" que formatamos.',
        ],
      },
    ],
    terminal: {
      prompt: '$ vgs',
      output: '  VG      #PV #LV #SN Attr   VSize  VFree \n  cs        1   2   0 wz--n- <19.00g    0 \n  vg_data   1   0   0 wz--n-   2.00g  2.00g',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '💎 LVM — Volumes Lógicos',
      panels: [
        { emoji: '🔪', text: '`lvcreate -L 1G -n lv_docs vg_data` extrai 1GB do grupo para criar um volume lógico.' },
        { emoji: '📈', text: '`lvextend -L +500M /dev/vg_data/lv_docs` adiciona 500MB ao volume lógico.' },
        { emoji: '✨', text: '`lvextend -r -l +100%FREE ...` aumenta o LV E o sistema de arquivos ao máximo.' },
        { emoji: '💾', text: 'Formatando: `mkfs.xfs /dev/vg_data/lv_docs` prepara o LV para arquivos.' },
        { emoji: '📏', text: '`xfs_growfs /mnt/docs` aumenta o sistema XFS após a expansão do LV.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestão de LV',
        items: [
          '`lvcreate -n nome -L tamanho VG` — criar',
          '`lvextend -L +tamanho -r LV` — expandir volume e FS ao mesmo tempo (recomendado)',
          '`lvremove` — excluir volume (pede confirmação)',
        ],
      },
      {
        title: 'Diferença XFS vs EXT4',
        items: [
          'XFS pode ser apenas expandido, não reduzido.',
          'EXT4 pode ser expandido e reduzido (embora reduzir seja arriscado e exija que esteja offline).',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvs vg_data',
      output: '  LV      VG      Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv_docs vg_data -wi-a----- 1.00g',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '🔗 Montagem, fstab e Swap',
      panels: [
        { emoji: '📍', text: '`mount /dev/sdb1 /mnt/data` monta um dispositivo temporariamente.' },
        { emoji: '📝', text: '`/etc/fstab` é o arquivo chave para montagens automáticas (UUID, ponto, tipo, opções).' },
        { emoji: '🔄', text: '`mount -a` verifica a fstab e monta tudo o que estiver pendente.' },
        { emoji: '🧠', text: 'Swap: `mkswap /dev/sdb2` seguido de `swapon /dev/sdb2` ativa a memória de troca.' },
        { emoji: '🔒', text: 'Montagens persistentes: use sempre UUID para evitar falhas com nomes de discos variáveis.' },
      ],
    },
    keyPoints: [
      {
        title: 'Formato de /etc/fstab',
        items: [
          'Col 1: Dispositivo (UUID=...)',
          'Col 2: Ponto de montagem (/data)',
          'Col 3: Tipo de FS (xfs, ext4, swap, nfs)',
          'Col 4: Opções (defaults)',
          'Col 5: Dump (0)',
          'Col 6: FSCK check (0 para XFS, 1 ou 2 para outros)',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat /etc/fstab | grep data',
      output: 'UUID=a1b2c3d4-e5f6... /data  xfs  defaults  0 0',
    },
  },

  // ─── TOPIC 5: Sistemas de Arquivos ─────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 e XFS',
      panels: [
        { emoji: '🛠️', text: '`mkfs.xfs /dev/vg_data/lv_docs` — cria um FS XFS, o padrão no RHEL.' },
        { emoji: '📦', text: '`mkfs.ext4 /dev/vg_data/lv_old` — cria ext4 para compatibilidade ou redução.' },
        { emoji: '📍', text: '`mount /dev/vg/lv /ponto` — conexão imediata. `/etc/fstab` para persistente.' },
        { emoji: '🏷️', text: '`xfs_admin -L "DADOS" /dev/sdb1` — atribui um label para um volume XFS.' },
        { emoji: '🔍', text: '`df -hT` — mostra espaço livre e tipo de cada FS montado.' },
      ],
    },
    keyPoints: [
      {
        title: 'Criação e manutenção',
        items: [
          '`mkfs.xfs`, `mkfs.ext4` — formatação',
          '`xfs_growfs` — expandir XFS',
          '`resize2fs` — expandir/reduzir ext4',
          '`mount -o loop` — montar arquivos ISO ou imagens',
        ],
      },
    ],
    terminal: {
      prompt: '$ df -hT /data',
      output: 'Filesystem              Type  Size  Used Avail Use% Mounted on\n/dev/mapper/vg_data-lv  xfs   2.0G   45M  2.0G   3% /data',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔒 Criptografia com LUKS',
      panels: [
        { emoji: '🔐', text: '`cryptsetup luksFormat /dev/sdb1` — formata partição para criptografia (apaga tudo!).' },
        { emoji: '🔑', text: '`cryptsetup open /dev/sdb1 cofre` — abre o cofre e mapeia em `/dev/mapper/cofre`.' },
        { emoji: '📦', text: 'Após abrir, formatamos o mapeamento: `mkfs.xfs /dev/mapper/cofre`.' },
        { emoji: '📝', text: 'Para automontagem: edite `/etc/crypttab` (nome, UUID, arquivo de chave ou `none`).' },
        { emoji: '🚪', text: '`cryptsetup close cofre` — fecha o cofre e protege os dados novamente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Passos para persistência LUKS',
        items: [
          '1. `luksFormat` (criar)',
          '2. `open` (abrir com um nome)',
          '3. Criar sistema de arquivos em `/dev/mapper/nome`',
          '4. Registrar no `/etc/crypttab` (para pedir senha no boot)',
          '5. Registrar no `/etc/fstab` via caminho do mapper',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status cofre',
      output: '/dev/mapper/cofre is active.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🔗 Armazenamento em Rede — NFS e autofs',
      panels: [
        { emoji: '🌎', text: '`mount -t nfs servidor:/caminho /local` — monta uma pasta compartilhada.' },
        { emoji: '🤖', text: '`autofs` — serviço que monta pastas sob demanda e as desmonta após inatividade.' },
        { emoji: '📝', text: 'Configuração: `/etc/auto.master` para a base, ficheiro de mapa para as regras.' },
        { emoji: '📁', text: 'Exemplo mapa: `dados -rw,soft servidor:/export/dados`.' },
        { emoji: '💡', text: 'Importante no exame para montar pastas home automagicamente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuração do autofs',
        items: [
          '`dnf install autofs` — instalar',
          'Linha no `/etc/auto.master`: `/projetos /etc/auto.projetos`',
          'Mapa `/etc/auto.projetos`: `web -rw,sync servidor:/shares/web`',
          'Reiniciar serviço: `systemctl enable --now autofs`',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e 192.168.1.100',
      output: 'Export list for 192.168.1.100:\n/shares/web  *\n/shares/data 192.168.1.0/24',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🛡️ ACL e Permissões Especiais',
      panels: [
        { emoji: '👥', text: '`setfacl -m u:mario:rwx arquivo` — dá direitos a Mario sem mudar o dono.' },
        { emoji: '🔍', text: '`getfacl arquivo` — mostra todos os direitos estendidos e ACLs.' },
        { emoji: '📌', text: '`chmod g+s /dir` — (SetGID) novos arquivos herdam o grupo do diretório.' },
        { emoji: '🧊', text: '`chmod +t /dir` — (Sticky Bit) apenas dono deleta seus arquivos (ex: /tmp).' },
        { emoji: '👑', text: '`chmod u+s /bin/binario` — (SetUID) executando com os direitos do dono (geralmente root).' },
      ],
    },
    keyPoints: [
      {
        title: 'ACL (Access Control Lists)',
        items: [
          '`-m` — modificar regra',
          '`-x` — remover regra específica',
          '`-b` — limpar todas as ACLs',
          '`d:u:user:rpx` — Default ACL: aplicada a novos arquivos no dir',
        ],
      },
      {
        title: 'Permissões Especiais (SUID, SGID, Sticky)',
        items: [
          'SUID (4): `s` no lugar do `x` do dono. Executa como dono.',
          'SGID (2): `s` no lugar do `x` do grupo. Colaboração.',
          'Sticky (1): `t` ao final. Segurança em pastas compartilhadas.',
        ],
      },
    ],
    terminal: {
      prompt: '$ getfacl shared_dir',
      output: '# file: shared_dir\n# owner: root\n# group: root\nuser::rwx\nuser:mario:rwx\ngroup::r-x\nmask::rwx\nother::r-x',
    },
  },

  // ─── TOPIC 6: Manutenção do Sistema ─────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Gestão de Software com DNF',
      panels: [
        { emoji: '📥', text: '`dnf install httpd` — instala pacote e dependências automaticamente.' },
        { emoji: '🔍', text: '`dnf search nginx` — busca pacotes nos repositórios.' },
        { emoji: '📂', text: '`dnf list installed` — mostra tudo o que está no sistema.' },
        { emoji: '📜', text: '`dnf history` — permite ver instalações e usar `undo` para reverter.' },
        { emoji: '⚙️', text: '`dnf provides /etc/mime.types` — mostra qual pacote contém este arquivo.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos dnf comuns',
        items: [
          '`install`, `remove`, `update` — operações básicas',
          '`group install "Development Tools"` — instalar grupos',
          '`repoinfo` — listar repos ativos',
          '`clean all` — limpar cache de download',
        ],
      },
      {
        title: 'Configuração de Repos',
        items: [
          'Local: `/etc/yum.repos.d/*.repo`',
          'Deve incluir `[id]`, `name`, `baseurl`, `enabled=1` e `gpgcheck=1`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides /usr/bin/python3',
      output: 'python3-3.9.7-1.el9.x86_64 : Interpreter of the Python programming language',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '🕵️ RPM — Consultas e Verificação',
      panels: [
        { emoji: '🔎', text: '`rpm -qa` — lista todos os pacotes (mais bruto que o dnf list).' },
        { emoji: '📦', text: '`rpm -ivh pacote.rpm` — instala arquivo local (sem dependências de rede!).' },
        { emoji: '🔍', text: '`rpm -ql httpd` — lista arquivos instalados pelo pacote httpd.' },
        { emoji: '🛠️', text: '`rpm -V httpd` — verifica se arquivos foram alterados após install.' },
        { emoji: '❓', text: '`rpm -qi httpd` — exibe detalhes (versão, data, descrição).' },
      ],
    },
    keyPoints: [
      {
        title: 'Flags de consulta (rpm -q)',
        items: [
          '`-i` — Info',
          '`-l` — Lista de ficheiros',
          '`-c` — Apenas arquivos de configuração',
          '`-d` — Apenas arquivos de documentação',
          '`-f /caminho/arquivo` — A qual pacote este arquivo pertence?',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /etc/passwd',
      output: 'setup-2.13.7-6.el9.noarch',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🎡 GRUB2 e o Kernel',
      panels: [
        { emoji: '🐧', text: 'O Kernel é o coração. `uname -r` exibe a versão atual.' },
        { emoji: '⚙️', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — atualiza o menu de boot.' },
        { emoji: '📝', text: '`/etc/default/grub` — edita parâmetros de arranque (ex: console).' },
        { emoji: '🛠️', text: '`grubby --info=ALL` — ferramenta RHEL para mudar config do kernel facilmente.' },
        { emoji: '🆙', text: 'Novo kernel instalado geralmente vira padrão automaticamente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuração do GRUB2',
        items: [
          'Jamais edite `/boot/grub2/grub.cfg` manualmente.',
          'Use `/etc/default/grub` e regenere com `grub2-mkconfig`.',
          '`GRUB_TIMEOUT=5`, `GRUB_CMDLINE_LINUX="..."`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ uname -r',
      output: '5.14.0-70.13.1.el9_0.x86_64',
    },
  },

  // ─── TOPIC 7: Redes Básicas ──────────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli e Config de Rede',
      panels: [
        { emoji: '🔌', text: '`nmcli device status` — mostra estado das interfaces físicas (eth0, etc).' },
        { emoji: '🛠️', text: '`nmcli connection show` — lista perfis de conexão.' },
        { emoji: '📍', text: '`nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual`.' },
        { emoji: '🚀', text: '`nmcli con up "eth0"` — aplica as mudanças e ativa.' },
        { emoji: '🏠', text: '`hostnamectl set-hostname rhel9-lab.example.com` — muda o nome permanentemente.' },
      ],
    },
    keyPoints: [
      {
        title: 'Estrutura do NetworkManager',
        items: [
          'Device — hardware (interface).',
          'Connection — perfil de software (config).',
          'Podem existir várias Connections para um Device.',
        ],
      },
      {
        title: 'hostname e DNS',
        items: [
          '`/etc/hostname` — nome da máquina.',
          '`/etc/hosts` — resolução local (IP nome).',
          '`/etc/resolv.conf` — servidores DNS (gerido pelo NetworkManager).',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli connection show --active',
      output: 'NAME                UUID                                  TYPE      DEVICE \nenp1s0              7d7c6b5a-4e3d-2c1b-0a9f-8e7d...       ethernet  enp1s0',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld — O Corta-fogo',
      panels: [
        { emoji: '🛡️', text: '`firewall-cmd --get-active-zones` — mostra zonas ativas em cada interface.' },
        { emoji: '🔓', text: '`firewall-cmd --add-service=http --permanent` — permite tráfego web persistente.' },
        { emoji: '🔌', text: '`firewall-cmd --add-port=8080/tcp --permanent` — abre um porto específico.' },
        { emoji: '🔄', text: '`firewall-cmd --reload` — Essencial! Aplica regras permanentes na sessão.' },
        { emoji: '🔍', text: '`firewall-cmd --list-all` — mostra resumo completo da zona padrão.' },
      ],
    },
    keyPoints: [
      {
        title: 'Zonas e Regras',
        items: [
          'Zona `public` — padrão na maioria dos casos.',
          'Flag `--permanent` — sem ela, as regras somem no reboot.',
          'Regras de Tempo de Execução vs Permanentes.',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --list-services',
      output: 'cockpit dhcpv6-client ssh',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔑 SSH e Transferência de Ficheiros',
      panels: [
        { emoji: '🔐', text: '`ssh-keygen` — gera o seu par de chaves (pública e privada).' },
        { emoji: '📤', text: '`ssh-copy-id usuario@servidor` — envia a sua chave pública ao servidor.' },
        { emoji: '📂', text: '`scp arquivo.txt root@servidor:/tmp/` — cópia segura via rede.' },
        { emoji: '🔄', text: '`rsync -av /local/ /remoto/` — sincroniza pastas eficientemente.' },
        { emoji: '🛡️', text: 'Config: `/etc/ssh/sshd_config`. Controla acesso root e portos.' },
      ],
    },
    keyPoints: [
      {
        title: 'Segurança SSH',
        items: [
          '`PermitRootLogin no` — desativa o login direto de root (recomendado).',
          '`PasswordAuthentication no` — obriga uso de chaves (RSA/Ed25519).',
          'Use `systemctl reload sshd` após mudanças.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server',
      output: 'Number of key(s) added: 1\nNow try logging into the machine...',
    },
  },

  // ─── TOPIC 8: Utilizadores e Grupos ──────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 Gestão de Utilizadores',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — cria utilizador com home e bash.' },
        { emoji: '🔑', text: '`passwd mario` — define a senha. Apenas root muda senhas alheias.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — adiciona Mario ao grupo wheel (sudo). Sempre com -a!' },
        { emoji: '⏰', text: '`chage -M 90 mario` — expiração de senha em 90 dias.' },
        { emoji: '🗑️', text: '`userdel -r mario` — remove utilizador e diretório home.' },
      ],
    },
    keyPoints: [
      {
        title: 'Opções do useradd',
        items: [
          '`-m` — criar diretório home',
          '`-s` — definir shell padrão',
          '`-u` — definir UID específico',
          '`-c` — adicionar comentário (nome real)',
        ],
      },
      {
        title: 'Expiração de contas (chage)',
        items: [
          '`-l` — listar info de expiração',
          '`-E` — data de expiração da conta',
          '`-W` — dias de aviso antes de expirar a senha',
        ],
      },
    ],
    terminal: {
      prompt: '$ id mario',
      output: 'uid=1001(mario) gid=1001(mario) groups=1001(mario),10(wheel)',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Grupos e sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 2000 devs` — cria grupo com GID específico.' },
        { emoji: '👤', text: '`usermod -g primaria -G secundaria utilizador` — altera grupos.' },
        { emoji: '🔐', text: '`visudo` — edita `/etc/sudoers` com segurança (valida sintaxe).' },
        { emoji: '📁', text: '`/etc/sudoers.d/` — local ideal para regras separadas.' },
        { emoji: '❌', text: '`groupdel devs` — deleta grupo (se não for o primário de ninguém).' },
      ],
    },
    keyPoints: [
      {
        title: 'Configuração do sudoers',
        items: [
          '`%wheel ALL=(ALL) ALL` — permite tudo aos membros do wheel.',
          '`utilizador ALL=(ALL) NOPASSWD: /usr/bin/dnf` — permite comando sem senha.',
        ],
      },
    ],
    terminal: {
      prompt: '$ groups root',
      output: 'root : root',
    },
  },

  // ─── TOPIC 9: SELinux e Segurança ──────────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 Os 3 modos do SELinux',
      panels: [
        { emoji: '🟢', text: 'Enforcing: Modo ativo. Bloqueia acessos negados e gera logs.' },
        { emoji: '🟡', text: 'Permissive: Não bloqueia, mas GERA LOG do que bloquearia.' },
        { emoji: '🔴', text: 'Disabled: SELinux desligado totalmente. Não recomendado.' },
        { emoji: '⚡', text: '`setenforce 0/1` alterna entre Permissive e Enforcing sem reiniciar.' },
        { emoji: '📝', text: '`/etc/selinux/config` define o modo permanente para o próximo boot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos de estado',
        items: [
          '`getenforce` — exibe o modo atual',
          '`sestatus` — exibe estado detalhado da política',
        ],
      },
    ],
    terminal: {
      prompt: '$ getenforce',
      output: 'Enforcing',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ Contextos: Arquivos e Processos',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — exibe etiquetas (contextos) de arquivos.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — restaura contexto padrão via base de dados.' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — regra permanente.' },
        { emoji: '⚡', text: '`chcon -t tipo arquivo` — muda o contexto temporariamente.' },
        { emoji: '📊', text: 'Contexto típico: `usuario:papel:tipo:nivel`. O "tipo" é o primordial.' },
      ],
    },
    keyPoints: [
      {
        title: 'Resolução de problemas',
        items: [
          'Se um serviço falha com permissões OK, verifique o contexto SELinux.',
          '`mv` preserva contexto, `cp` herda contexto do destino.',
          'Use sempre `semanage fcontext` + `restorecon` para mudanças definitivas.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 Booleanos e Portos SELinux',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — lista todos os interruptores (booleans).' },
        { emoji: '🔄', text: '`setsebool -P httpd_enable_homedirs on` — muda booleano permanentemente (-P).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — lista portos autorizados para um serviço.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8088` — adiciona porto extra.' },
        { emoji: '🔍', text: 'Erros aparecem no `/var/log/audit/audit.log` como eventos "AVC".' },
      ],
    },
    keyPoints: [
      {
        title: 'Booleans vs Portos',
        items: [
          'Booleans — habilitam funções integradas (ex: apache ler homes).',
          'Portos — habilitam sockets de rede.',
        ],
      },
      {
        title: 'Ferramentas de auditoria',
        items: [
          '`sealert -a /var/log/audit/audit.log` — analisa logs e dá dicas humanas.',
          '`ausearch -m AVC` — busca especificamente bloqueios SELinux.',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Contentores com Podman ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Fundamentos do Podman',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — descarrega a imagem oficial da Red Hat.' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — inicia contentor interativo.' },
        { emoji: '🔍', text: '`podman ps` — lista ativos. `podman ps -a` mostra os parados também.' },
        { emoji: '⚡', text: '`podman exec my_con ls /` — executa comando em contentor em execução.' },
        { emoji: '🗑️', text: '`podman rm my_con` — remove contentor. `podman rmi ubi9` remove imagem.' },
      ],
    },
    keyPoints: [
      {
        title: 'Comandos de ciclo de vida',
        items: [
          '`run` — cria e inicia (it=interativo, d=segundo plano, --name=nome)',
          '`stop` / `start` — pausar e retomar',
          '`logs` — ver o que se passa lá dentro',
          '`inspect` — ver detalhes de rede e montagem',
        ],
      },
      {
        title: 'Diferença para Docker',
        items: [
          'Daemonless — sem processo root central gigante.',
          'Rootless — suporte a correr contentores seguros como utilizador comum.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman ps',
      output: 'CONTAINER ID  IMAGE                           COMMAND     CREATED      STATUS      PORTS       NAMES\n9abc12345678  registry.access.../ubi9:latest  /bin/bash   2 hours ago  Up 2 hours              my_ubi',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Registos e Imagens',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — busca em registos (docker.io, quay.io).' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — indentifique-se num registo privado.' },
        { emoji: '🏷️', text: '`podman tag app:v1 repo.com/app:v1` — renomeia para upload.' },
        { emoji: '📤', text: '`podman push repo.com/app:v1` — envia a imagem para o servidor.' },
        { emoji: '📄', text: 'Config: `/etc/containers/registries.conf` define a ordem de busca.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gestão de Imagens',
        items: [
          '`podman images` — listar descarregadas',
          '`podman history` — ver camadas de construção',
          '`podman image prune` — apagar órfãs',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -2',
      output: 'NAME                      DESCRIPTION                STARS   OFFICIAL\ndocker.io/library/nginx   Official build of Nginx.   18000   [OK]',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 O Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — define a imagem base.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd` — executa comandos durante o build.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — adiciona ficheiros ao contentor.' },
        { emoji: '🚪', text: '`EXPOSE 80` — indica o porto de escuta. `CMD ["httpd", "-D", "FOREGROUND"]` — comando de arranque.' },
        { emoji: '🔨', text: '`podman build -t my_web:v1 .` — compila o ficheiro numa nova imagem.' },
      ],
    },
    keyPoints: [
      {
        title: 'Instruções comuns',
        items: [
          '`ENV` — definir variáveis de ambiente',
          '`WORKDIR` — definir diretório de trabalho',
          '`ENTRYPOINT` — comando principal inalterável',
          '`USER` — mudar para utilizador não-root por segurança',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd\nCOPY . /var/www/html/\nCMD ["httpd", "-DFOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Persistência e Rede',
      panels: [
        { emoji: '📂', text: '`-v /host:/container:Z` — pasta do PC no contentor. Cuidado com SELinux (:Z)!' },
        { emoji: '🔌', text: '`-p 8080:80` — mapeia porto 8080 do PC para 80 do contentor.' },
        { emoji: '📦', text: '`podman volume create dados` — cria volume gerido pelo podman.' },
        { emoji: '🌐', text: '`podman network create minha_red` — comunicação entre contentores por nome.' },
        { emoji: '⚙️', text: '`podman generate systemd --name mycon --files` — cria serviço para arranque no boot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Persistência com SELinux',
        items: [
          'Sem a flag `:z` (partilhada) ou `:Z` (privada), o SELinux bloqueará a escrita do contentor no volume.',
          'Esta é a causa de falha nº 1 no exame RHCSA.',
        ],
      },
      {
        title: 'Integração com systemd (rootless)',
        items: [
          'Coloque os ficheiros `.service` em `~/.config/systemd/user/`.',
          'Use `systemctl --user enable --now container-xxx`.',
          'Importante: `loginctl enable-linger` para manter contentor vivo após logout.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d -p 8080:80 -v /web:/var/www/html:Z my_web',
      output: '7d7c6b5a4e3d2c1b...',
    },
  },

};
