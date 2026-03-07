export const lpic2_extendedContent_pt = {
  'lpic2-200-1': {
    title: 'Medição e Planejamento de Recursos',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Análise Profunda de Recursos' },
      { type: 'paragraph', text: 'O planejamento de capacidade não é apenas "olhar para gráficos", mas entender como o sistema reage sob carga. Você deve identificar se o gargalo está na CPU, RAM, subsistema de E/S ou rede.' },
      { type: 'heading', level: 3, emoji: '🧠', text: 'Memória e Swap com vmstat' },
      { type: 'paragraph', text: 'Enquanto o `free -m` dá uma foto instantânea, o `vmstat` mostra a tendência. Os campos `si` (swap in) e `so` (swap out) são os mais críticos: se estiverem constantemente acima de zero, o sistema está em "thrashing", ou seja, gastando mais tempo movendo dados para o disco do que executando código.' },
      { type: 'code', title: 'Monitoramento Dinâmico', prompt: '$ vmstat 1 5', output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78910 234567    0    0     5    10  123  456  2  1 96  1  0' },
      { type: 'heading', level: 3, emoji: '💾', text: 'Análise de E/S com iostat' },
      { type: 'paragraph', text: 'O pacote `sysstat` fornece o `iostat`. É fundamental para entender se seus discos são lentos demais.' },
      { type: 'table', headers: ['Métrica', 'Descrição', 'Limite Crítico'], rows: [
        ['%util', 'Percentual de tempo que o disco esteve ocupado', '> 80% indica saturação'],
        ['await', 'Tempo médio (ms) de resposta a uma requisição', '> 10-20ms para HDs mecânicos é alto'],
        ['svctm', 'Tempo de serviço efetivo do disco', 'Se próximo ao await: o disco está bem, mas sobrecarregado'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Use `iostat -xz 1` para ver apenas dispositivos com atividade e estatísticas estendidas.' }
    ]
  },

  'lpic2-201-1': {
    title: 'Componentes e Compilação do Kernel',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Arquitetura do Kernel Linux' },
      { type: 'paragraph', text: 'O kernel não é um bloco único, mas uma série de subsistemas prontos para gerenciar hardware, memória e processos. Saber compilá-lo permite criar sistemas otimizados para hardware específico.' },
      { type: 'heading', level: 3, emoji: '📦', text: 'Código Fonte' },
      { type: 'paragraph', text: 'As fontes geralmente ficam em `/usr/src/linux`. O arquivo `.config` é a alma da customização: ele contém milhares de opções que decidem o que será incluído ou excluído.' },
      { type: 'table', headers: ['Alvo do Make', 'Descrição'], rows: [
        ['make menuconfig', 'Interface baseada em texto (ncurses) para configuração'],
        ['make xconfig', 'Interface gráfica (Qt) para configuração'],
        ['make oldconfig', 'Atualiza um .config antigo com as novas opções'],
        ['make bzImage', 'Compila a imagem compactada do kernel'],
        ['make modules', 'Compila os módulos separados'],
        ['make modules_install', 'Copia os módulos para /lib/modules/$(uname -r)'],
      ]},
      { type: 'code', title: 'Workflow Moderno de Compilação', prompt: '# make bzImage\n# make modules\n# make modules_install\n# make install', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Nunca esqueça de executar `make modules_install` antes de `make install`, senão o novo kernel iniciará, mas não encontrará drivers para carregar o resto do sistema!' }
    ]
  },

  'lpic2-201-2': {
    title: 'Gestão em Tempo de Execução e Carga de Módulos',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Módulos: O Plug-and-Play do Kernel' },
      { type: 'paragraph', text: 'Os módulos permitem adicionar funcionalidades (como drivers wi-fi ou sistemas de arquivos) sem precisar reiniciar o servidor.' },
      { type: 'table', headers: ['Comando', 'Função'], rows: [
        ['lsmod', 'Lista módulos carregados'],
        ['insmod', 'Carrega um arquivo .ko específico (sem tratar dependências)'],
        ['rmmod', 'Remove um módulo'],
        ['modprobe', 'Forma recomendada: carrega/remove tratando dependências'],
        ['modinfo', 'Mostra detalhes, parâmetros e licença de um módulo'],
      ]},
      { type: 'code', title: 'Exemplo de modprobe', prompt: '# modinfo e1000\n# modprobe e1000\n# modprobe -r e1000', output: 'filename: /lib/modules/.../e1000.ko\nlicense: GPL\ndescription: Intel(R) PRO/1000 Network Driver' },
      { type: 'heading', level: 3, emoji: '📁', text: 'Persistência de Módulos' },
      { type: 'paragraph', text: 'Para carregar um módulo no boot, adicione-o em `/etc/modules` ou crie um arquivo em `/etc/modules-load.d/`. Para passar parâmetros, use arquivos em `/etc/modprobe.d/`.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Customização e Patching',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Mantendo o Kernel Atualizado' },
      { type: 'paragraph', text: 'Muitas vezes você não precisa baixar o novo kernel inteiro (GBs de dados), mas apenas aplicar um "patch" para corrigir bugs ou falhas de segurança.' },
      { type: 'code', title: 'Aplicando um Patch', prompt: '$ bzcat patch-5.10.x.bz2 | patch -p1', output: 'patching file Makefile\npatching file arch/x86/Makefile\n...' },
      { type: 'infobox', variant: 'exam', content: 'A opção `-p1` no comando patch é usada para "pular" o primeiro nível de diretório no caminho do arquivo do patch, ajustando-o ao diretório atual.' }
    ]
  },

  'lpic2-202-1': {
    title: 'Customização da Inicialização do Sistema',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Muito mais que um simples Boot' },
      { type: 'paragraph', text: 'Entender como o sistema passa da BIOS/UEFI para um desktop ou servidor pronto para uso é fundamental para o Disaster Recovery.' },
      { type: 'heading', level: 3, emoji: '⚙️', text: 'SysVinit vs Systemd' },
      { type: 'paragraph', text: 'Embora o Systemd domine, o LPIC-2 ainda exige conhecimento de SysVinit e runlevels. O arquivo principal do SysVinit é o `/etc/inittab`.' },
      { type: 'table', headers: ['Runlevel', 'Propósito'], rows: [
        ['0', 'Halt (Desligar)'],
        ['1 / S', 'Modo Mono-usuário (Manutenção)'],
        ['2', 'Multi-usuário sem rede (comum no Debian)'],
        ['3', 'Multi-usuário com rede (CLI)'],
        ['5', 'Multi-usuário com rede + Interface Gráfica'],
        ['6', 'Reboot (Reiniciar)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'No Systemd, os runlevels são mapeados para "Targets". Exemplo: `multi-user.target` equivale geralmente ao runlevel 3.' }
    ]
  },

  'lpic2-202-2': {
    title: 'Recuperação do Sistema e Bootloaders',
    sections: [
      { type: 'heading', level: 2, emoji: '🆘', text: 'Socorrendo um sistema quebrado' },
      { type: 'paragraph', text: 'Se o gerenciador de boot (GRUB) estiver corrompido, o sistema não inicia. Você deve saber usar um shell de emergência ou um Live-CD.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'GRUB 2' },
      { type: 'code', title: 'Recuperando o GRUB', prompt: '# grub-install /dev/sda\n# update-grub', output: 'Installing for i386-pc platform.\nInstallation finished. No error reported.' },
      { type: 'paragraph', text: 'O arquivo de configuração final é o `/boot/grub/grub.cfg`, mas ele nunca deve ser editado manualmente. Use o arquivo `/etc/default/grub`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Bootloaders Alternativos',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX e ISOLINUX' },
      { type: 'paragraph', text: 'Muitas vezes usados para pen-drives e Live-CDs pela sua leveza e simplicidade.' },
      { type: 'table', headers: ['Variante', 'Uso'], rows: [
        ['SYSLINUX', 'Sistemas de arquivos FAT (pendrives)'],
        ['ISOLINUX', 'Padrão ISO-9660 (CD/DVD)'],
        ['EXTLINUX', 'Sistemas de arquivos ext2/3/4 ou btrfs'],
        ['PXELINUX', 'Boot via rede usando TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Operações Avançadas em Sistemas de Arquivos',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Gestão e Manutenção' },
      { type: 'paragraph', text: 'Um administrador deve saber criar, checar e reparar sistemas de arquivos sem medo.' },
      { type: 'heading', level: 3, emoji: '🔍', text: 'Checagem e Reparo' },
      { type: 'code', title: 'Checando o disco (desmontado!)', prompt: '# fsck -y /dev/sdb1\n# dumpe2fs /dev/sdb1 | head', output: 'Filesystem volume name:   Dati\nLast mounted on:          /mnt/dati\nFilesystem revision #:    1 (dynamic)' },
      { type: 'infobox', variant: 'warning', content: 'NUNCA execute `fsck` em um sistema de arquivos montado: você arrisca corrupção irreversível dos dados!' }
    ]
  },

  'lpic2-203-2': {
    title: 'Manutenção de Sistemas de Arquivos',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Otimização com tune2fs' },
      { type: 'paragraph', text: 'Você pode alterar parâmetros como a frequência de checagens automáticas ou o label do volume sem precisar reformatar.' },
      { type: 'table', headers: ['Comando', 'Efeito'], rows: [
        ['tune2fs -L "BACKUP" /dev/sdc1', 'Define o Label'],
        ['tune2fs -m 1 /dev/sdc1', 'Reduz espaço reservado para root para 1%'],
        ['tune2fs -i 30d /dev/sdc1', 'Força checagem a cada 30 dias'],
        ['xfs_admin -L "DATA_XFS" /dev/sdd1', 'Gestão de sistema XFS'],
      ]}
    ]
  },

  'lpic2-203-3': {
    title: 'Gestão de Dispositivos com udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🤖', text: 'O Maestro Moderno de Dispositivos' },
      { type: 'paragraph', text: 'O sistema `/dev` hoje é dinâmico graças ao `udev`. Ele cria os nós de dispositivo automaticamente ao plugar hardware, baseado em regras.' },
      { type: 'heading', level: 3, emoji: '📜', text: 'Reescrevendo as regras' },
      { type: 'paragraph', text: 'As regras ficam em `/etc/udev/rules.d/`. Elas permitem customizações profundas.' },
      { type: 'code', title: 'Criando nomes de rede estáveis', prompt: 'SUBSYSTEM=="net", ACTION=="add", ATTR{address}=="00:11:22:33:44:55", NAME="eth-adm"', output: '' }
    ]
  },

  'lpic2-204-1': {
    title: 'Configuração de Software RAID',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: 'Redundância e Desempenho' },
      { type: 'paragraph', text: 'O RAID (Redundant Array of Independent Disks) combina vários discos físicos em uma unidade lógica. No Linux, isso é feito principalmente através do subsistema de software RAID do kernel.' },
      { type: 'table', headers: ['Nível RAID', 'Vantagem', 'Desvantagem'], rows: [
        ['RAID 0 (Striping)', 'Velocidade máxima', 'Nenhuma redundância (um disco falha = perda total)'],
        ['RAID 1 (Mirroring)', 'Alta segurança dos dados', 'Apenas 50% de capacidade utilizável'],
        ['RAID 5 (Parity)', 'Equilíbrio entre capacidade e segurança', 'Escrita mais lenta devido ao cálculo de paridade'],
        ['RAID 6 (Dual Parity)', 'Sobrevive à falha de DOIS discos', 'Maior perda de capacidade que o RAID 5'],
      ]},
      { type: 'code', title: 'Criando um array RAID 1', prompt: '# mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Não esqueça de atualizar o arquivo `/etc/mdadm/mdadm.conf` com o comando `mdadm --detail --scan` para que o sistema reconheça o RAID no próximo boot!' }
    ]
  },

  'lpic2-204-2': {
    title: 'Logical Volume Manager (LVM)',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Flexibilidade de Armazenamento' },
      { type: 'paragraph', text: 'O LVM adiciona uma camada de abstração que permite redimensionar partições (Logical Volumes) dinamicamente ou espalhá-las por vários discos físicos.' },
      { type: 'table', headers: ['Camada', 'Significado'], rows: [
        ['PV (Physical Volume)', 'A base física (uma partição ou disco inteiro)'],
        ['VG (Volume Group)', 'Um pool de espaço que reúne um ou mais PVs'],
        ['LV (Logical Volume)', 'A "partição lógica" criada no VG, onde fica o sistema de arquivos'],
      ]},
      { type: 'code', title: 'Expandindo uma VG e um LV', prompt: '# vgextend meu_pool /dev/sdd1\n# lvextend -L +10G /dev/meu_pool/meus_dados\n# resize2fs /dev/meu_pool/meus_dados', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Use `lvcreate -s` para criar Snapshots – fotos instantâneas de um LV úteis para backups consistentes.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Otimização e Ajuste de Armazenamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Extraindo o máximo do Hardware' },
      { type: 'paragraph', text: 'Parâmetros de hardware e configurações do kernel influenciam drasticamente o rendimento.' },
      { type: 'table', headers: ['Ferramenta', 'Uso'], rows: [
        ['hdparm', 'Ajuste de parâmetros SATA/PATA (ex: DMA, cache)'],
        ['sdparm', 'Equivalente ao hdparm para dispositivos SCSI/SAS'],
        ['nvme-cli', 'Gestão e monitoramento de discos NVMe'],
        ['fstrim', 'Importante para SSDs: informa blocos não utilizados'],
      ]},
      { type: 'code', title: 'Otimizando performance de SSD', prompt: '# fstrim -av', output: '/: 10 GB (10737418240 bytes) trimmed' }
    ]
  },

  'lpic2-205-1': {
    title: 'Configuração de IP e Roteamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Caminhos na Rede' },
      { type: 'paragraph', text: 'Um administrador deve ser capaz de configurar interfaces manualmente e gerir tabelas de roteamento.' },
      { type: 'table', headers: ['Comando iproute2', 'Ação'], rows: [
        ['ip addr show', 'Mostra endereços IP por interface'],
        ['ip link set eth0 up', 'Ativa uma interface de rede'],
        ['ip route show', 'Exibe a tabela de rotas atual'],
        ['ip route add default via 192.168.1.1', 'Define o gateway padrão'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Para que o Linux funcione como roteador, o encaminhamento de IP deve estar ativo no kernel: `sysctl -w net.ipv4.ip_forward=1`.' }
    ]
  },

  'lpic2-205-2': {
    title: 'Bonding e Bridging',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Agregando e Conectando Interfaces' },
      { type: 'paragraph', text: 'O bonding une várias placas em uma interface lógica para mais banda ou redundância. O bridging conecta segmentos no Nível 2.' },
      { type: 'table', headers: ['Técnica', 'Cenário de uso'], rows: [
        ['Bonding (Modo 1)', 'Active-Backup: Garante redundância (Alta Disponibilidade)'],
        ['Bonding (Modo 4)', '802.3ad: Agregação de links para performance'],
        ['Bridging', 'Comum para colocar VMs diretamente na rede física'],
      ]}
    ]
  },

  'lpic2-205-3': {
    title: 'Resolução de Problemas de Rede',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Rastreando a falha' },
      { type: 'paragraph', text: 'Quando a rede falha, ferramentas de diagnóstico ajudam a isolar o problema.' },
      { type: 'table', headers: ['Comando', 'Utilidade'], rows: [
        ['tcpdump', 'O sniffer padrão para analisar pacotes no fio'],
        ['nc (netcat)', 'Canivete suíço: testa se uma porta está aberta ou envia dados'],
        ['ss / netstat', 'Mostra todos os sockets abertos e quais programas os usam'],
        ['tracepath / traceroute', 'Mostra o caminho dos pacotes até o destino'],
      ]},
      { type: 'code', title: 'Capturando tráfego na porta 80', prompt: '# tcpdump -i eth0 port 80', output: '12:34:56.789 IP client > server.http: Flags [S], seq 12345...' }
    ]
  },

  'lpic2-206-1': {
    title: 'Compilar Software do Código-Fonte',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Construindo suas ferramentas' },
      { type: 'paragraph', text: 'Às vezes você precisa de software mais atual ou opções que a distribuição não oferece.' },
      { type: 'table', headers: ['Etapa', 'Significado'], rows: [
        ['./configure', 'Checa dependências e cria o Makefile'],
        ['make', 'Compila o código em binários executáveis'],
        ['sudo make install', 'Copia binários e manuais para as pastas do sistema'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Use o comandos como `checkinstall` em vez de `make install` para criar automaticamente um pacote .deb ou .rpm. Isso facilita a remoção posterior!' }
    ]
  },

  'lpic2-206-2': {
    title: 'Backup e Sincronização com rsync',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Segurança é Sobrevivência' },
      { type: 'paragraph', text: 'Administrador sem backup vive perigosamente. O `rsync` é ideal para backups locais e remotos.' },
      { type: 'code', title: 'Backup Incremental via SSH', prompt: '$ rsync -avz --delete -e ssh /dados/ user@backup-server:/backup/', output: 'sending incremental file list\ndados/arquivo.tar.gz\n\nsent 5.6M bytes  received 2.1k bytes  1.2M bytes/sec' },
      { type: 'table', headers: ['Opção', 'Função'], rows: [
        ['-a (archive)', 'Preserva permissões, datas e links simbólicos'],
        ['-v (verbose)', 'Mostra o progresso e nomes de arquivos'],
        ['-z (compress)', 'Comprime os dados durante a transferência'],
        ['--delete', 'Apaga no destino arquivos que não existem mais na origem'],
      ]}
    ]
  },

  'lpic2-206-3': {
    title: 'Informação e Comunicação com Usuários',
    sections: [
      { type: 'heading', level: 2, emoji: '📢', text: 'Mantenha todos avisados' },
      { type: 'paragraph', text: 'Antes de um reboot ou manutenção, você deve informar os usuários conectados.' },
      { type: 'paragraph', text: 'O arquivo `/etc/motd` (Message Of The Day) é mostrado após o login. O `/etc/issue` é mostrado antes do login no terminal.' },
      { type: 'code', title: 'Aviso imediato para todos os usuários', prompt: '# wall "Sistema reiniciará em 10 minutos para manutenção de hardware!"', output: '' }
    ]
  },

  'lpic2-207-1': {
    title: 'Configuração Básica do BIND9',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'A Lista de Contatos da Internet' },
      { type: 'paragraph', text: 'O BIND (Berkeley Internet Name Domain) é o servidor DNS mais usado no mundo. Ele pode agir como uma instância de cache pura, um encaminhador (forwarder) ou um servidor autoritativo.' },
      { type: 'table', headers: ['Modo', 'Função'], rows: [
        ['Caching Only', 'Armazena respostas localmente para acelerar consultas futuras da rede local'],
        ['Forwarder', 'Encaminha consultas que não pode responder para outros servidores DNS'],
        ['Authoritative', 'A fonte primária de verdade para um domínio específico'],
      ]},
      { type: 'code', title: 'Verificando erros de sintaxe', prompt: '# named-checkconf /etc/bind/named.conf', output: '' }
    ]
  },

  'lpic2-207-2': {
    title: 'Gestão de Zonas e Registros DNS',
    sections: [
      { type: 'heading', level: 2, emoji: '🗺️', text: 'Quem é quem na rede' },
      { type: 'paragraph', text: 'As zonas dividem o espaço de nomes. Na zona direta, nomes viram IPs; na zona reversa, IPs viram nomes.' },
      { type: 'table', headers: ['Tipo de Registro', 'Significado'], rows: [
        ['SOA (Start of Authority)', 'Metadados da zona (e-mail do admin, serial, tempos de atualização)'],
        ['NS (Name Server)', 'Indica os servidores DNS responsáveis pela zona'],
        ['A / AAAA', 'Associa nomes a endereços IPv4 ou IPv6'],
        ['PTR (Pointer)', 'Usado para DNS reverso (IP -> Nome)'],
        ['MX (Mail Exchange)', 'Define os servidores de e-mail do domínio'],
        ['CNAME', 'Um apelido para outro nome (não deve apontar para outro CNAME)'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Sempre aumente o número serial no registro SOA ao alterar um arquivo de zona, para que os servidores escravos percebam a mudança e sincronizem!' }
    ]
  },

  'lpic2-207-3': {
    title: 'Segurança DNS e DNSSEC',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Protegendo contra Manipulação' },
      { type: 'paragraph', text: 'O DNS clássico não tem proteção contra falsificações. O DNSSEC adiciona assinaturas digitais para garantir que os dados venham do remetente legítimo.' },
      { type: 'table', headers: ['Técnica', 'Objetivo'], rows: [
        ['DNSSEC', 'Assina registros de recursos criptograficamente'],
        ['TSIG', 'Protege a transferência de zona entre Master e Slave via chave secreta'],
        ['Chroot', 'Isola o processo named em sua própria árvore de diretórios para mitigar danos em caso de invasão'],
      ]}
    ]
  },

  'lpic2-208-1': {
    title: 'Fundamentos do Servidor Apache',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'O Clássico dos Servidores Web' },
      { type: 'paragraph', text: 'O Apache destaca-se pela sua estabilidade e arquitetura modular.' },
      { type: 'table', headers: ['Conceito', 'Significado'], rows: [
        ['VirtualHost', 'Permite hospedar vários sites com nomes diferentes em um único endereço IP'],
        ['DocumentRoot', 'O diretório onde ficam os arquivos do site no disco'],
        ['.htaccess', 'Permite alterações de configuração por diretório por usuários'],
        ['MPM', 'Módulos Multi-Processamento (prefork, worker, event) definem como as requisições são tratadas'],
      ]},
      { type: 'code', title: 'Ativando um site no Debian/Ubuntu', prompt: '# a2ensite meu-site.conf\n# systemctl reload apache2', output: '' }
    ]
  },

  'lpic2-208-2': {
    title: 'Segurança Web e HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Navegação Criptografada' },
      { type: 'paragraph', text: 'O HTTPS é o padrão hoje. Ele protege a privacidade e evita manipulações durante o tráfego.' },
      { type: 'table', headers: ['Diretiva SSL', 'Objetivo'], rows: [
        ['SSLEngine on', 'Ativa o módulo SSL/TLS para o VirtualHost'],
        ['SSLCertificateFile', 'Caminho para o certificado público do servidor'],
        ['SSLCertificateKeyFile', 'Caminho para a chave privada secreta'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Use o Let\'s Encrypt com o `certbot` para obter e renovar certificados SSL gratuitos automaticamente.' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx como Servidor e Proxy Reverso',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Alta Performance e Leveza' },
      { type: 'paragraph', text: 'O Nginx foi desenhado para resolver problemas de performance em servidores clássicos com muitas conexões simultâneas.' },
      { type: 'table', headers: ['Papel', 'Destaque'], rows: [
        ['Arquivos Estáticos', 'Entrega imagens, CSS e JS de forma extremamente eficiente'],
        ['Proxy Reverso', 'Recebe requisições e as encaminha para apps no backend (ex: PHP-FPM, Node.js)'],
        ['Load Balancer', 'Distribui a carga entre vários servidores de aplicação'],
      ]},
      { type: 'code', title: 'Configuração básica de Proxy Nginx', prompt: 'server {\n  listen 80;\n  location / {\n    proxy_pass http://localhost:8080;\n  }\n}', output: '' }
    ]
  },

  'lpic2-209-1': {
    title: 'Serviços de Arquivo Samba',
    sections: [
      { type: 'heading', level: 2, emoji: '🤝', text: 'Integração com Windows' },
      { type: 'paragraph', text: 'O Samba implementa o protocolo SMB e permite que servidores Linux se integrem perfeitamente em redes Windows como servidores de arquivos ou impressão.' },
      { type: 'table', headers: ['Seção smb.conf', 'Bedeutung'], rows: [
        ['[global]', 'Configurações gerais como nome do servidor, workgroup e modo de segurança'],
        ['[homes]', 'Acesso automático ao diretório home do usuário logado'],
        ['[printers]', 'Compartilha impressoras instaladas no sistema'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'As senhas do Samba são geridas separadamente. Use `smbpasswd -a usuario` para habilitar um usuário Linux no Samba.' }
    ]
  },

  'lpic2-209-2': {
    title: 'NFS - Network File System',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Compartilhamento Nativo Unix' },
      { type: 'paragraph', text: 'O NFS é o padrão para compartilhar diretórios entre sistemas Linux/Unix via rede.' },
      { type: 'table', headers: ['Opção de Export', 'Efeito'], rows: [
        ['rw / ro', 'Acesso de leitura e escrita ou apenas leitura'],
        ['root_squash', 'Segurança: mapeia o root do cliente para um usuário anônimo (padrão)'],
        ['no_root_squash', 'Perigoso: permite que o root do cliente tenha poderes de root no servidor'],
        ['sync', 'Confirma a escrita apenas quando os dados estiverem fisicamente no disco'],
      ]},
      { type: 'code', title: 'Relendo compartilhamentos sem reiniciar', prompt: '# exportfs -ra', output: '' }
    ]
  },

  'lpic2-210-1': {
    title: 'Configuração do Servidor DHCP',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Atribuição Automática de IP' },
      { type: 'paragraph', text: 'O protocolo DHCP (Dynamic Host Configuration Protocol) automatiza a atribuição de parâmetros de rede como endereço IP, máscara de sub-rede, gateway e servidores DNS. O servidor padrão no Linux é o `isc-dhcp-server`.' },
      { type: 'table', headers: ['Parâmetro', 'Significado'], rows: [
        ['subnet / netmask', 'Define o segmento de rede pelo qual o servidor é responsável'],
        ['range', 'O pool de endereços IP que podem ser atribuídos dinamicamente'],
        ['option routers', 'Indica o gateway padrão para os clientes'],
        ['option domain-name-servers', 'Indica os servidores DNS que os clientes devem usar'],
      ]},
      { type: 'code', title: 'Reservar um IP estático para um endereço MAC específico', prompt: 'host estacao1 {\n  hardware ethernet 00:11:22:33:44:55;\n  fixed-address 192.168.1.50;\n}', output: '' }
    ]
  },

  'lpic2-210-2': {
    title: 'PAM - Autenticação Modular',
    sections: [
      { type: 'heading', level: 2, emoji: '🚪', text: 'O Porteiro do Sistema' },
      { type: 'paragraph', text: 'O PAM (Pluggable Authentication Modules) permite gerenciar centralmente o método de autenticação para aplicações, sem precisar alterar as aplicações em si.' },
      { type: 'table', headers: ['Control Flag', 'Significado'], rows: [
        ['required', 'O módulo deve ter sucesso. Se falhar, o acesso é negado, mas apenas após todos os outros módulos serem processados (por segurança)'],
        ['requisite', 'O módulo deve ter sucesso. Se falhar, o acesso é negado IMEDIATAMENTE'],
        ['sufficient', 'Se este módulo tiver sucesso (e nenhum "required" anterior falhou), o acesso é concedido imediatamente'],
        ['optional', 'O sucesso ou falha não tem efeito direto na concessão do acesso'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Seja extremamente cauteloso ao editar arquivos em `/etc/pam.d/`. Um erro pode fazer com que você perca totalmente o acesso ao sistema!' }
    ]
  },

  'lpic2-210-3': {
    title: 'Uso do Cliente LDAP',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'A Lista Telefônica Central' },
      { type: 'paragraph', text: 'O LDAP (Lightweight Directory Access Protocol) é frequentemente usado para armazenar contas de usuários e grupos centralmente em uma rede. Clientes Linux podem autenticar-se contra um servidor LDAP.' },
      { type: 'table', headers: ['Termo LDAP', 'Significado'], rows: [
        ['DN (Distinguished Name)', 'O caminho único para um objeto (ex: uid=max,ou=user,dc=example,dc=com)'],
        ['OU (Organizational Unit)', 'Uma unidade organizacional (similar a uma pasta)'],
        ['DC (Domain Component)', 'Componentes do nome de domínio'],
      ]},
      { type: 'code', title: 'Consultar o diretório LDAP', prompt: '$ ldapsearch -x -b "dc=example,dc=com"', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Correio e Envio com Postfix',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'O Carteiro da Rede' },
      { type: 'paragraph', text: 'O Postfix é um Mail Transfer Agent (MTA) seguro e modular. É responsável pelo transporte de e-mails via SMTP.' },
      { type: 'table', headers: ['Ferramenta', 'Objetivo'], rows: [
        ['postconf', 'Exibe e configura parâmetros do Postfix'],
        ['postmap', 'Cria bancos de dados indexados a partir de arquivos de texto (ex: aliases)'],
        ['postqueue', 'Gestão da fila (ex: `postqueue -f` para forçar o envio)'],
        ['postsuper', 'Tarefas administrativas como deletar mensagens da fila'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Após qualquer alteração em `/etc/aliases`, o comando `newaliases` deve ser executado para atualizar o banco de dados do Postfix.' }
    ]
  },

  'lpic2-211-2': {
    title: 'Dovecot - Servidor POP3 e IMAP',
    sections: [
      { type: 'heading', level: 2, emoji: '📥', text: 'Recebendo o Correio' },
      { type: 'paragraph', text: 'O Dovecot é um servidor IMAP e POP3 que permite aos usuários recuperar seus e-mails do servidor.' },
      { type: 'table', headers: ['Protocolo', 'Significado'], rows: [
        ['IMAP', 'As mensagens ficam no servidor e são sincronizadas (Ideal para múltiplos dispositivos)'],
        ['POP3', 'As mensagens são baixadas e geralmente removidas do servidor'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Nunca transmita senhas em texto puro. Use sempre criptografia (SSL/TLS) para IMAP e POP3.' }
    ]
  },

  'lpic2-212-1': {
    title: 'Segurança de Rede com iptables',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'A Proteção contra Incêndio do seu Sistema' },
      { type: 'paragraph', text: 'O `iptables` é a ferramenta para controlar o framework netfilter no kernel. Ele filtra pacotes com base em regras.' },
      { type: 'table', headers: ['Tabela', 'Objetivo'], rows: [
        ['filter', 'A tabela padrão para regras de filtragem (INPUT, OUTPUT, FORWARD)'],
        ['nat', 'Network Address Translation: usada para redirecionamento de portas ou mascaramento'],
        ['mangle', 'Usada para alterações especiais no cabeçalho de um pacote'],
      ]},
      { type: 'code', title: 'Proibir todas as conexões de entrada exceto SSH', prompt: '# iptables -P INPUT DROP\n# iptables -A INPUT -p tcp --dport 22 -j ACCEPT', output: '' }
    ]
  },

  'lpic2-212-2': {
    title: 'Detecção de Intrusão e Auditorias',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Olhos Vigilantes' },
      { type: 'paragraph', text: 'Segurança é um processo contínuo de monitoramento e endurecimento (hardening).' },
      { type: 'table', headers: ['Ferramenta', 'Objetivo'], rows: [
        ['Fail2Ban', 'Bloqueia automaticamente IPs que causam muitas falhas de login'],
        ['AIDE', 'Verifica a integridade dos arquivos comparando hashes criptográficos'],
        ['Nmap', 'Scanner de rede para encontrar portas e serviços abertos'],
        ['Lynis', 'Ferramenta de auditoria que varre o sistema e sugere melhorias'],
      ]}
    ]
  }
}
