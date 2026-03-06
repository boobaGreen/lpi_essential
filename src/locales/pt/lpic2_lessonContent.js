export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Monitoramento de Recursos',
    comic: {
      title: 'Doutor, o servidor está pegando fogo! 🩺',
      panels: [
        { emoji: '📉', text: 'Planejamento de capacidade: Não espere o servidor explodir. Planeje a carga com antecedência!' },
        { emoji: '🧠', text: 'CPU e RAM: mpstat e vmstat são seus estetoscópios para ouvir o pulso do sistema.' },
        { emoji: '🚥', text: 'I/O Wait: Se o disco estiver lento, a CPU fica entediada e todo o sistema desacelera.' },
        { emoji: '📊', text: 'Análise histórica: Use collectd ou sar para ver como a carga evolui ao longo do tempo.' },
      ]
    },
    keyPoints: [
      { title: 'Monitoramento de CPU/RAM', items: ['uptime — Médias de carga (1, 5, 15 min)', 'vmstat — Estatísticas de memória virtual e swap', 'mpstat — Relatório detalhado por núcleo de CPU'] },
      { title: 'Monitoramento de I/O e Rede', items: ['iostat — Uso do disco e taxa de transferência', 'ss / netstat — Status de conexões e sockets', 'iftop / nload — Tráfego de rede em tempo real'] },
      { title: 'Análise Preditiva', items: ['sar (sysstat) — Banco de dados histórico de desempenho', 'Benchmarks — Medir o desempenho máximo teórico'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: 'Prevendo Necessidades Futuras',
    comic: {
      title: 'A bola de cristal do administrador 🔮',
      panels: [
        { emoji: '📅', text: 'Análise de tendências: Se os dados crescem 10% ao mês, quando o disco ficará cheio?' },
        { emoji: '📈', text: 'Ferramentas gráficas: Cacti, MRTG e Graphite transformam números em gráficos compreensíveis.' },
        { emoji: '🔔', text: 'Alertas: Defina limites críticos. Melhor um e-mail hoje do que um crash amanhã!' },
        { emoji: '🏗️', text: 'Escalabilidade: Decida entre mais potência (Vertical) ou mais servidores (Horizontal).' },
      ]
    },
    keyPoints: [
      { title: 'Monitoramento Centralizado', items: ['Collectd — Daemon leve para coletar dados', 'Prometheus — Sistema de monitoramento moderno para séries temporais', 'Nagios / Zabbix — Plataformas de monitoramento e alerta'] },
      { title: 'Visualização', items: ['Grafana — Dashboards espetaculares para seus dados', 'Cacti — Baseado em RRDTool, ideal para gráficos históricos'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Componentes do Kernel',
    comic: {
      title: 'O que há dentro de um kernel? 🧠',
      panels: [
        { emoji: '📦', text: 'Imagem do Kernel: vmlinuz é o coração comprimido e inicializável do sistema.' },
        { emoji: '🏗️', text: 'Initramfs: A pequena mochila com drivers para montar o sistema de arquivos real.' },
        { emoji: '🧩', text: 'Módulos: Por que carregar tudo de uma vez? Módulos (.ko) são carregados sob demanda.' },
        { emoji: '🩹', text: 'Patching: Atualize o kernel sem precisar reescrevê-lo do zero.' },
      ]
    },
    keyPoints: [
      { title: 'Imagens e Arquivos', items: ['vmlinuz — Imagem compactada do kernel', 'System.map — Tabela de símbolos para depuração', 'config-X — Opções usadas na compilação'] },
      { title: 'Boot e RAM Disk', items: ['initrd / initramfs — Sistema de arquivos temporário para carregar módulos do root', 'dracut / mkinitrd — Ferramentas para criar o initramfs'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: 'Compilação do Kernel',
    comic: {
      title: 'Alfaiate Digital: Compile seu kernel! 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig: Escolha cuidadosamente quais drivers ativar.' },
        { emoji: '⚙️', text: 'Compilação: Transforma código-fonte em um binário otimizado para sua CPU.' },
        { emoji: '📦', text: 'Instalação: Copia arquivos para /boot e módulos para /lib/modules.' },
        { emoji: '🚀', text: 'Atualização do GRUB: O bootloader precisa saber que há um novo chefe na cidade!' },
      ]
    },
    keyPoints: [
      { title: 'Alvos de Configuração', items: ['make menuconfig — Interface gráfica (ncurses)', 'make oldconfig — Usa a configuração do kernel atual', 'make localmodconfig — Ativa apenas módulos atualmente carregados'] },
      { title: 'Fases da Construção', items: ['make — Compila o kernel e os módulos', 'make modules_install — Instala em /lib/modules', 'make install — Instala em /boot e atualiza o bootloader'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: 'Gerenciamento do Kernel em Tempo de Execução',
    comic: {
      title: 'Cirurgia de coração aberto 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo: Revela os segredos de um driver antes de ser carregado.' },
        { emoji: '🔧', text: 'Sysctl: Altera parâmetros do kernel (rede, memória) enquanto o sistema roda.' },
        { emoji: '⚠️', text: 'Dmesg: Ouve os sussurros (ou gritos) do kernel em tempo real.' },
        { emoji: '💾', text: '/proc/sys: O acesso direto às entranhas do sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Ferramentas de Módulos', items: ['lsmod — Mostra módulos carregados', 'insmod / rmmod — Carrega/Remove (sem dependências)', 'modprobe -v — Carrega com detalhes e dependências'] },
      { title: 'Parâmetros do Kernel', items: ['sysctl -a — Lista todos os parâmetros', 'sysctl -w net.ipv4.ip_forward=1 — Ativa roteamento', '/etc/sysctl.conf — Torna as alterações permanentes'] },
    ],
    terminal: { 
      prompt: '$ modprobe -v xfs\n$ sysctl kernel.hostname', 
      output: 'insmod /lib/modules/5.15.0/kernel/fs/xfs/xfs.ko\nkernel.hostname = linux-server' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'Personalização do SysVinit',
    comic: {
      title: 'O velho sábio: SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab: A partitura que diz ao sistema como iniciar linha por linha.' },
        { emoji: '🔢', text: 'Runlevels: Do nível 1 (usuário único) ao nível 5 (gráfico).' },
        { emoji: '🚦', text: 'Scripts K e S: Quem para e quem inicia em cada nível de execução.' },
        { emoji: '🔄', text: 'Telinit q: Recarrega a configuração sem precisar reiniciar todo o vilarejo!' },
      ]
    },
    keyPoints: [
      { title: 'Arquivos e Diretórios', items: ['/etc/inittab — Configuração principal', '/etc/init.d/ — Diretório dos scripts de serviço', '/etc/rc[0-6].d/ — Links simbólicos para os runlevels'] },
      { title: 'Comandos Clássicos', items: ['runlevel — Mostra o nível atual e o anterior', 'init 6 — Reinicia o sistema', 'telinit q — Recarrega o /etc/inittab'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: 'Recuperação do Sistema',
    comic: {
      title: 'Equipe de Resgate Linux 🚑',
      panels: [
        { emoji: '⌨️', text: 'Editar o GRUB: Pressione \'e\' no boot para enviar comandos de emergência ao kernel.' },
        { emoji: '🔧', text: 'init=/bin/bash: Assuma o controle antes que os serviços sejam carregados.' },
        { emoji: '📀', text: 'Live-CD / Modo Rescue: Monte seu sistema ferido em /mnt e opere com chroot.' },
        { emoji: '🛠️', text: 'LILO: O ancestral antigo do GRUB, que ainda sobrevive em cantos escuros.' },
      ]
    },
    keyPoints: [
      { title: 'Parâmetros de Boot', items: ['1, s, single — Inicia no modo de usuário único', 'systemd.unit=rescue.target — Equivalente moderno', 'rd.break — Para o processo de boot no initramfs'] },
      { title: 'Técnicas de Recuperação', items: ['chroot — Altera o diretório raiz para reparo externo', 'fsck — Repara sistemas de arquivos que impedem o boot'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: 'Bootloaders Avançados',
    comic: {
      title: 'Os Senhores do Boot 👑',
      panels: [
        { emoji: '💿', text: 'UEFI vs BIOS: A mudança dos antigos setores MBR para as partições ESP modernas.' },
        { emoji: '📦', text: 'GRUB 2: Flexível, poderoso e capaz de carregar o kernel de quase qualquer FS.' },
        { emoji: '🌐', text: 'PXE: Inicialize seu exército de servidores diretamente pela rede, sem discos locais!' },
        { emoji: '🔑', text: 'Secure Boot: Assine digitalmente seu kernel para bloquear invasores.' },
      ]
    },
    keyPoints: [
      { title: 'Componentes do GRUB 2', items: ['/boot/grub/grub.cfg — Arquivo final (não editar!)', '/etc/default/grub — Variáveis para configuração do usuário', 'grub-mkconfig — Gera o arquivo final'] },
      { title: 'Padrões Modernos', items: ['GPT — Nova tabela de partição para discos > 2TB', 'ESP — EFI System Partition (FAT32)', 'systemd-boot — Alternativa leve para sistemas UEFI'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Gerenciando Sistemas de Arquivos',
    comic: {
      title: 'O Arquiteto de Discos 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs: Ajusta parâmetros de sistemas ext2/3/4 sem precisar formatar.' },
        { emoji: '🏷️', text: 'LABEL e UUID: Dê nomes aos seus discos para não se perder em /dev.' },
        { emoji: '💾', text: 'XFS_info: Explore as geometrias avançadas dos sistemas XFS de alta performance.' },
        { emoji: '🔧', text: 'Mount -o: Adicione superpoderes como "noatime" para acelerar as leituras.' },
      ]
    },
    keyPoints: [
      { title: 'Ferramentas de Ajuste', items: ['tune2fs -L DATA /dev/sdb1 — Define o Rótulo', 'xfs_admin — Gerencia parâmetros XFS', 'dumpe2fs — Mostra detalhes técnicos do FS'] },
      { title: 'Identificação', items: ['blkid — Mostra o UUID e o TIPO de todos os blocos', 'findmnt — Visão em árvore das montagens atuais'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: 'Manutenção do Sistema de Arquivos',
    comic: {
      title: 'O Mecânico de Dados 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck: O cirurgião que cura feridas do FS após uma queda de energia.' },
        { emoji: '🧠', text: 'SMART: Ouça os sinais do disco antes que ele morra definitivamente.' },
        { emoji: '🧹', text: 'Badblocks: Varre cada canto em busca de setores defeituosos.' },
        { emoji: '🧪', text: 'Debugfs: Mergulhe nas entranhas do FS para resgatar arquivos deletados.' },
      ]
    },
    keyPoints: [
      { title: 'Saúde do Disco', items: ['smartctl -a /dev/sda — Relatório completo de hardware', 'smartctl -t short — Inicia um teste rápido'] },
      { title: 'Reparo', items: ['fsck.ext4 -v /dev/sdb1 — Verificação e limpeza detalhada', 'xfs_repair — Ferramenta específica para XFS'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: 'Gerenciamento de Dispositivos com udev',
    comic: {
      title: 'Udev: O guarda de trânsito do kernel 🚨',
      panels: [
        { emoji: '⚡', text: 'Hotplug: Espete um pendrive e o udev o reconhece num piscar de olhos.' },
        { emoji: '📜', text: 'Regras Personalizadas: "Quando eu plugar este disco, monte-o sempre em /backup".' },
        { emoji: '🔍', text: 'Udevadm: A ferramenta para interrogar o udev e testar novas regras.' },
        { emoji: '📁', text: '/dev: Onde o udev cria os nós para que possamos falar com o hardware.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração', items: ['/etc/udev/rules.d/ — Onde você escreve suas próprias regras', '/lib/udev/rules.d/ — Regras do sistema (não mexer)'] },
      { title: 'Comandos de Depuração', items: ['udevadm monitor — Observa eventos de hardware em tempo real', 'udevadm info -a -p /sys/class/net/eth0 — Encontra atributos para uma regra'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'Configuração RAID',
    comic: {
      title: 'Juntos Somos Fortes (e Seguros) 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID: Por que confiar num só disco se você pode ter um exército?' },
        { emoji: '⚡', text: 'RAID 0 (Stripe): Velocidade em dobro, mas se um disco morrer, adeus dados!' },
        { emoji: '🪞', text: 'RAID 1 (Mirror): Cada dado tem um gêmeo. Segurança máxima, metade do espaço.' },
        { emoji: '🏗️', text: 'RAID 5/6: O equilíbrio mágico entre velocidade, espaço e tolerância a falhas.' },
      ]
    },
    keyPoints: [
      { title: 'Níveis comuns de RAID', items: ['RAID 0 — Performance pura (sem redundância)', 'RAID 1 — Espelhamento (alta disponibilidade)', 'RAID 5 — Paridade distribuída (tolera 1 falha)', 'RAID 6 — Paridade dupla (tolera 2 falhas)'] },
      { title: 'Ferramentas de Software RAID', items: ['mdadm — O comando universal para Software RAID no Linux', '/proc/mdstat — Janela em tempo real do status dos arrays'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Olimpíadas de Armazenamento',
    comic: {
      title: 'Velocidade Extrema 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm: Leve seu antigo disco mecânico ao limite.' },
        { emoji: '🌠', text: 'NVMe: Entre na era do flash com protocolos feitos para velocidade pura.' },
        { emoji: '⚡', text: 'Cartão SD / SSD: Gerencie parâmetros de escrita para vida útil máxima.' },
        { emoji: '🛠️', text: 'Smartctl: Porque prevenir é melhor do que chorar sobre os dados perdidos.' },
      ]
    },
    keyPoints: [
      { title: 'Otimização', items: ['hdparm -tT /dev/sda — Teste de leitura (cache e disco)', 'hdparm -S 120 /dev/sda — Define o tempo de repouso (10 min)'] },
      { title: 'Tecnologias Modernas', items: ['nvme-cli — Ferramenta para discos NVMe modernos', 'SSD Trim — Mantém a performance liberando blocos não usados'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM)',
    comic: {
      title: 'Discos como peças de LEGO 🧱',
      panels: [
        { emoji: '📦', text: 'PV (Physical Volume): Transforme seus discos em matéria-prima.' },
        { emoji: '🏗️', text: 'VG (Volume Group): Reúna os PVs num grande pool de espaço.' },
        { emoji: '🍰', text: 'LV (Logical Volume): Corte fatias de espaço e aumente-as como quiser.' },
        { emoji: '📸', text: 'Snapshot: Congele o tempo para um backup antes de atualizações arriscadas.' },
      ]
    },
    keyPoints: [
      { title: 'Hierarquia LVM', items: ['pvcreate / pvdisplay — Gerenciamento de discos físicos', 'vgcreate / vgextend — Gerenciamento de grupos de volumes', 'lvcreate / lvextend — Gerenciamento de volumes lógicos'] },
      { title: 'Vantagens', items: ['Redimensionamento Online — Aumente partições sem reiniciar', 'Snapshots — Backups consistentes e testes rápidos'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Configuração de Rede Básica',
    comic: {
      title: 'Cidadão da Rede 🌐',
      panels: [
        { emoji: '📍', text: 'Endereçamento: Todo mundo precisa de um nome e de um lugar para morar.' },
        { emoji: '🗺️', text: 'Roteamento: "Se não souber o caminho, pergunte ao Gateway Padrão".' },
        { emoji: '🔌', text: 'Interfaces: Ethernet, Wi-Fi ou placas virtuais para containers e VMs.' },
        { emoji: '🛠️', text: 'Iproute2: A nova suíte poderosa que substituiu o antigo ifconfig.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração IP', items: ['ip addr show — Mostra endereços e interfaces', 'ip route show — Mostra a tabela de roteamento', 'ip -6 addr — Configuração IPv6'] },
      { title: 'Persistência', items: ['Debian/Ubuntu: /etc/network/interfaces ou Netplan', 'RHEL/CentOS: /etc/sysconfig/network-scripts/ ou NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: 'Configuração de Rede Avançada',
    comic: {
      title: 'Pontes e Canais 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding: Unir várias placas para velocidade ou redundância.' },
        { emoji: '🌉', text: 'Bridging: Pontes virtuais para que as VMs falem com o mundo exterior.' },
        { emoji: '📡', text: 'Wi-Fi Profissional: Gerencie conexões sem fio via linha de comando.' },
        { emoji: '🚀', text: 'Traffic Control (tc): Freie os downloads para que os servidores tenham prioridade!' },
      ]
    },
    keyPoints: [
      { title: 'Técnicas', items: ['Bonding — Agregação de links (LACP, Round-robin)', 'Bridging — Típico em virtualização (br0)'] },
      { title: 'Wireless', items: ['iw / iwconfig — Ferramentas para interfaces 802.11', 'wpa_supplicant — Gerenciador de autenticação WPA/WPA2'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Escritorio_Linux\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: 'Troubleshooting de Rede',
    comic: {
      title: 'Detetive de Pacotes 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: Escute cada bit que passa pela sua placa de rede.' },
        { emoji: '🔬', text: 'Wireshark: O microscópio para analisar pacotes via interface gráfica.' },
        { emoji: '📡', text: 'Nmap: Bata em cada porta do servidor para ver quem responde.' },
        { emoji: '🔎', text: 'Netstat/SS: Quem está ouvindo? Verifique sockets e processos.' },
      ]
    },
    keyPoints: [
      { title: 'Análise de Tráfego', items: ['tcpdump -i eth0 -n — Análise ao vivo (sem resolução DNS)', 'nc (netcat) — O canivete suíço da rede'] },
      { title: 'Scans e Sockets', items: ['nmap -sV target — Escaneamento de portas e versões de serviço', 'ss -tulpn — Mostra sockets ouvindo com o PID'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Compilação e Instalação',
    comic: {
      title: 'Costura Digital: Compilando Software 🧵',
      panels: [
        { emoji: '📦', text: 'Fontes: Baixe o código original (tarball) para ter a versão mais nova.' },
        { emoji: '🛠️', text: './configure: Verifica se você tem todas as ferramentas para construir.' },
        { emoji: '⚙️', text: 'Make: Cozinha milhares de linhas de código num programa pronto.' },
        { emoji: '🚀', text: 'Make install: Instala o programa nas pastas do sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Fases da Compilação', items: ['./configure — Configura e verifica dependências', 'make — Compila o código-fonte', 'make install — Instala os binários'] },
      { title: 'Gestão do Código', items: ['tar -xvf — Descompacta o arquivo fonte', 'patch — Aplica correções ao código'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: 'Operações de Backup',
    comic: {
      title: 'O seguro de vida dos dados 💾',
      panels: [
        { emoji: '🛡️', text: 'Backup: Não pergunte SE o disco vai morrer, mas QUANDO. Esteja pronto!' },
        { emoji: '🔄', text: 'Rsync: O gênio que copia apenas o que mudou, economizando tempo.' },
        { emoji: '📦', text: 'Tar: Empacota sistemas de arquivos inteiros num só arquivo.' },
        { emoji: '☁️', text: 'Fora do site: Guarde cópias longe do servidor (nuvem ou outra casa).' },
      ]
    },
    keyPoints: [
      { title: 'Tipos de Backup', items: ['Completo — Cópia de todos os dados', 'Incremental — Apenas o que mudou desde o último backup', 'Diferencial — Apenas o que mudou desde o último backup completo'] },
      { title: 'Ferramentas', items: ['rsync -avz — Sincronização atômica e compactada', 'tar -cvf — Cria arquivos de arquivos/pastas', 'mt — Controla fitas magnéticas (Legado)'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/arquivo.txt\nuser2/foto.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: 'Notificações aos Usuários',
    comic: {
      title: 'O pregoeiro do sistema 📢',
      panels: [
        { emoji: '🔔', text: 'Wall: Grita uma mensagem para todos os terminais abertos.' },
        { emoji: '📅', text: '/etc/motd: A "Mensagem do Dia" que aparece em cada login.' },
        { emoji: '📔', text: '/etc/issue: O banner de boas-vindas antes da senha.' },
        { emoji: '🛑', text: 'Shutdown: Avisa a todos que o servidor vai dormir para manutenção.' },
      ]
    },
    keyPoints: [
      { title: 'Mensagens Diretas', items: ['wall — Mensagem para todos usuários logados', 'write — Mensagem para um usuário específico'] },
      { title: 'Mensagens Estáticas', items: ['/etc/motd — Message Of The Day (após login)', '/etc/issue — Banner antes do login local', '/etc/issue.net — Banner antes do login SSH/Remoto'] },
    ],
    terminal: { 
      prompt: '# wall "Manutenção às 22h"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\nManutenção às 22h' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'Configuração Básica do DNS',
    comic: {
      title: 'A lista telefônica da Web 📖',
      panels: [
        { emoji: '🌐', text: 'DNS: Transforma nomes (google.com.br) em números (IPs).' },
        { emoji: '🏗️', text: 'BIND: O servidor de DNS mais usado e poderoso do mundo.' },
        { emoji: '🗺️', text: 'Hierarquia: Dos servidores raiz (.) aos domínios (.br) até o host.' },
        { emoji: '🔎', text: 'Consulta: Pergunte recursivamente até que alguém saiba a resposta.' },
      ]
    },
    keyPoints: [
      { title: 'Componentes BIND', items: ['named — O daemon do serviço DNS', '/etc/bind/named.conf — Configuração principal', 'rndc — Ferramenta de controle remoto do BIND'] },
      { title: 'Tipos de Servidor', items: ['Master — Contém a zona original', 'Slave — Copia a zona do master para redundância (Zone Transfer)'] },
    ],
    terminal: { 
      prompt: '$ dig google.com.br\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.com.br.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: 'Gerenciando Zonas',
    comic: {
      title: 'O cartório dos domínios 🗺️',
      panels: [
        { emoji: '📝', text: 'A Record: A ligação básica Nome -> IPv4.' },
        { emoji: '📛', text: 'CNAME: Um apelido para um host que já tem nome.' },
        { emoji: '📧', text: 'MX: Diz ao mundo quem recebe os e-mails do domínio.' },
        { emoji: '🔄', text: 'SOA: A certidão de nascimento da zona, com números de série.' },
      ]
    },
    keyPoints: [
      { title: 'Registros DNS', items: ['A / AAAA — Nome -> IPv4 / IPv6', 'PTR — IP -> Nome (Zona Reversa)', 'TXT — Texto livre (usado para SPF, DKIM)', 'NS — Indica os Name Servers autoritativos'] },
      { title: 'Gestão de Zona', items: ['Serial Padrão: AAAAMMDDNN (ex. 2024030601)', 'named-checkzone — Valida erros antes de carregar'] },
    ],
    terminal: { 
      prompt: '# named-checkzone exemplo.com.br /etc/bind/db.exemplo', 
      output: 'zone exemplo.com.br/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: 'Segurança e DNSSEC',
    comic: {
      title: 'DNS com Escudo 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: Assina zonas digitalmente para evitar ataques de redirecionamento falsos.' },
        { emoji: '🚫', text: 'Controle de Acesso: Decida quem pode fazer consultas ou cópias de zona.' },
        { emoji: '🔭', text: 'TSIG: Chaves secretas para comunicação segura Master-Slave.' },
        { emoji: '🏰', text: 'Chroot: Prenda o BIND numa prisão virtual para proteger o sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Proteção', items: ['allow-query — Limita quem pode fazer perguntas', 'allow-transfer — Limita quem pode copiar a zona (Crítico!)'] },
      { title: 'Avançado', items: ['Split DNS — Mostra dados diferentes para usuários internos e externos', 'TSIG — Chaves para transferências de zona seguras'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.br AXFR', 
      output: '; Transfer failed. (Acesso negado se bem configurado!)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Configuração do Apache',
    comic: {
      title: 'O anfitrião do site 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server: O rei dos servidores web, flexível e modular.' },
        { emoji: '📂', text: 'VirtualHost: Hospede 100 sites num servidor sem que eles se batam.' },
        { emoji: '🧩', text: 'Módulos: Ative rewrite, proxy ou php com um comando.' },
        { emoji: '🔎', text: 'Logs: Espie os visitantes ou encontre o motivo daquele erro 404.' },
      ]
    },
    keyPoints: [
      { title: 'Estrutura Apache', items: ['/etc/apache2/ (Debian) ou /etc/httpd/ (RHEL)', 'apache2ctl configtest — Valida a sintaxe antes de reiniciar'] },
      { title: 'Virtual Hosting', items: ['Name-based VirtualHost — Vários sites num IP', 'ServerName / ServerAlias — Define os nomes do site'] },
    ],
    terminal: { 
      prompt: '# a2ensite meu-site.conf\n# systemctl reload apache2', 
      output: 'Enabling site meu-site.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS e Segurança Web',
    comic: {
      title: 'O cadeado verde 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS: Criptografa a conversa entre o navegador e o servidor.' },
        { emoji: '📜', text: 'Certificados: A identidade do seu site, validada por uma autoridade.' },
        { emoji: '🏎️', text: 'HTTP/2: A nova pista rápida para carregamentos ultrarrápidos.' },
        { emoji: '🛡️', text: 'HSTS: Força os navegadores a usar sempre conexão segura.' },
      ]
    },
    keyPoints: [
      { title: 'Certificados', items: ['CSR (Certificate Signing Request) — O pedido para a autoridade', 'SSLCertificateFile / SSLCertificateKeyFile — Configuração Apache'] },
      { title: 'Ferramentas', items: ['OpenSSL — Ferramenta para gerenciar chaves e certificados', 'Let\'s Encrypt — Certificados SSL/TLS gratuitos e automáticos'] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = meu-site.com.br' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx e Proxy Reverso',
    comic: {
      title: 'A alternativa veloz: Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx: Leve, assíncrono e feito para milhares de usuários simultâneos.' },
        { emoji: '🔀', text: 'Proxy Reverso: Coloque o Nginx na frente para proteção e balanceamento.' },
        { emoji: '💨', text: 'Caching: Guarda arquivos estáticos na RAM para entregas relâmpago.' },
        { emoji: '🛡️', text: 'WAF: Use o Nginx como escudo contra ataques web.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração Nginx', items: ['/etc/nginx/nginx.conf — Configuração global', 'server { ... } — Definição do site (como o VirtualHost)'] },
      { title: 'Proxy Reverso', items: ['proxy_pass — Encaminha pedidos para outros servidores (ex: Node.js)'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: Ponte para Windows',
    comic: {
      title: 'Dois mundos, um só disco 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba: O protocolo SMB para que o Windows veja o Linux como um servidor.' },
        { emoji: '👥', text: 'Domain Controller: Gerencie usuários e permissões com Active Directory.' },
        { emoji: '📂', text: 'Compartilhamentos: Defina o que é público e o que é privado.' },
        { emoji: '📝', text: 'Smb.conf: O coração da configuração Samba.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração', items: ['[global] — Opções de rede e segurança', '[share] — Definição da pasta compartilhada'] },
      { title: 'Ferramentas', items: ['testparm — Valida a sintaxe do smb.conf', 'smbpasswd -a user — Adiciona usuário ao Samba'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Compartilhamento Nativo Linux',
    comic: {
      title: 'Network File System: Transparência pura 📁',
      panels: [
        { emoji: '🔌', text: 'NFS: Monte discos remotos como se fossem locais na rede LAN.' },
        { emoji: '🛡️', text: 'Exports: Quem pode entrar? Defina IPs e direitos (ro/rw).' },
        { emoji: '🧱', text: 'RPC: Os pequenos mensageiros para a conversa entre servidores.' },
        { emoji: '⚡', text: 'NFSv4: Moderno, seguro e amigável para firewalls.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração', items: ['/etc/exports — Lista de pastas compartilhadas e direitos', 'exportfs -a — Aplica as mudanças instantaneamente'] },
      { title: 'Opções de Montagem', items: ['soft/hard — Como reagir a desconexões', 'proto=tcp — Usa TCP em vez de UDP para estabilidade'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/remoto', 
      output: '/data  192.168.1.0/24(rw,sync,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP: Endereços Automáticos',
    comic: {
      title: 'Bem-vindo ao prédio de IPs 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP: O zelador que dá um quarto (IP) para cada novo hóspede.' },
        { emoji: '⏱️', text: 'Lease Time: O IP é seu por empréstimo. Não esqueça de renovar!' },
        { emoji: '📍', text: 'Reservas: "Este servidor ganha sempre o mesmo quarto". Via endereço MAC.' },
        { emoji: '📝', text: 'Dhcpd.conf: Onde as regras de distribuição são guardadas.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração DHCP', items: ['subnet { ... } — Define a faixa de IPs', 'option routers — Informa o Gateway Padrão', 'option domain-name-servers — Informa os servidores DNS'] },
      { title: 'Relay Agent', items: ['dhcrelay — Encaminha pedidos de DHCP entre redes diferentes'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'Autenticação com PAM',
    comic: {
      title: 'PAM: O guarda modular 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM: Um sistema para todos os tipos de login (senha, digital, etc).' },
        { emoji: '🧩', text: 'Módulos: Mude o tipo de acesso sem precisar reprogramar nada.' },
        { emoji: '📋', text: 'Stack: "Pergunte a senha, depois cheque se ele está no grupo".' },
        { emoji: '🔐', text: 'Segurança: Force senhas fortes e bloqueie erros excessivos.' },
      ]
    },
    keyPoints: [
      { title: 'Tipos de Módulo', items: ['auth — Verifica identidade (senha)', 'account — O acesso está ativo e permitido?', 'password — Gerencia troca de senhas', 'session — Coisas a fazer antes/após o login'] },
      { title: 'Configuração', items: ['/etc/pam.d/ — Diretório com config por serviço (sshd, login, etc)'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'Cliente LDAP',
    comic: {
      title: 'O Cartório Central da Rede 📂',
      panels: [
        { emoji: '📋', text: 'LDAP: Eficiente diretório para usuários e grupos da firma.' },
        { emoji: '🔍', text: 'Busca: Encontre o ramal do colega ou o e-mail do chefe na hora.' },
        { emoji: '🌐', text: 'Single Sign-On: Uma senha só para todos os PCs do escritório.' },
        { emoji: '⚡', text: 'NSS: Diz ao Linux para buscar usuários também no LDAP.' },
      ]
    },
    keyPoints: [
      { title: 'Ferramentas LDAP', items: ['ldapsearch — Consulta o LDAP via terminal', 'ldapadd / ldapmodify — Gerencia os dados na base'] },
      { title: 'Serviço NSS', items: ['/etc/nsswitch.conf — Define a ordem de busca (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=exemplo,dc=com,dc=br" "(uid=joao)"', 
      output: 'dn: uid=joao,ou=People,dc=exemplo,dc=com,dc=br\nobjectClass: posixAccount\nuid: joao\nmail: joao@exemplo.com.br' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: 'Túneis Privados na Web 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN: Um caminho seguro através da internet pública.' },
        { emoji: '🔐', text: 'Criptografia: Ninguém consegue ouvir o que passa no túnel.' },
        { emoji: '🏠', text: 'Home Office: Trabalhe de casa como se estivesse no escritório.' },
        { emoji: '🔑', text: 'Certificados TLS: Só dispositivos autorizados entram no túnel.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração OpenVPN', items: ['/etc/openvpn/server.conf — Lado do servidor', '/etc/openvpn/client.conf — Lado do cliente'] },
      { title: 'Modos', items: ['Tun (Roteamento) — Túnel IP (mais comum)', 'Tap (Bridging) — Simula uma placa Ethernet'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'Servidor SMTP (Postfix)',
    comic: {
      title: 'O carteiro digital 📩',
      panels: [
        { emoji: '📨', text: 'SMTP: O protocolo que envia cartas de servidor para servidor.' },
        { emoji: '🏤', text: 'Postfix: Confiável, rápido e muito mais simples que o antigo Sendmail.' },
        { emoji: '🛑', text: 'Anti-Spam: Bloqueia lixo antes que ele irrite os usuários.' },
        { emoji: '📋', text: 'Main.cf: Onde o carteiro aprende suas regras de conduta.' },
      ]
    },
    keyPoints: [
      { title: 'Configuração Postfix', items: ['myhostname — O nome do seu servidor de mail', 'mynetworks — Quem pode enviar e-mails sem senha?', 'relayhost — Enviar e-mails através de um provedor'] },
      { title: 'Alias e Fila', items: ['/etc/aliases — Redirecionar nomes (ex. suporte -> joao)', 'mailq — Checa e-mails parados na fila'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.exemplo.com.br\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: 'Entrega e Filtros',
    comic: {
      title: 'Separando pacotes 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve: Move os e-mails automaticamente para as pastas corretas.' },
        { emoji: '⚖️', text: 'Quotas: Ninguém pode lotar o HD sozinho com e-mails!' },
        { emoji: '🚫', text: 'SpamAssasin: Dá nota aos e-mails para ver se são perigosos.' },
        { emoji: '🦠', text: 'ClamAV: Varre os anexos em busca de vírus.' },
      ]
    },
    keyPoints: [
      { title: 'Entrega', items: ['Maildir/ — Um arquivo por e-mail (moderno e veloz)', 'mbox — Todos os e-mails num só arquivo (estilo antigo)'] },
      { title: 'Protocolos', items: ['IMAP — E-mails ficam no servidor (ideal para vários dispositivos)', 'POP3 — Baixa os e-mails e os remove do servidor'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: 'Acesso às Mensagens (Dovecot)',
    comic: {
      title: 'Sua Caixa de Correio 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot: O servidor que seu Outlook ou Thunderbird usa para ler e-mails.' },
        { emoji: '🔐', text: 'IMAPS/POPS: Protege sua senha e dados com criptografia na leitura.' },
        { emoji: '💼', text: 'Shared Folders: Caixas postais compartilhadas com o time.' },
        { emoji: '📊', text: 'Monitoramento: Veja quem está logado agora.' },
      ]
    },
    keyPoints: [
      { title: 'Papéis', items: ['MDA (Mail Delivery Agent) — Coloca o mail no disco', 'MRA (Mail Retrieval Agent) — Deixa o cliente ler'] },
      { title: 'Login', items: ['Pode usar usuários do sistema ou integrar com LDAP/MySQL'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Firewall (iptables)',
    comic: {
      title: 'As muralhas da cidade 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter: Decide o que entra e o que sai da frente.' },
        { emoji: '🚦', text: 'Chains: INPUT (pra mim), OUTPUT (de mim), FORWARD (através de mim).' },
        { emoji: '🛑', text: 'Targets: ACCEPT (liberar), DROP (ignorar), REJECT (recusar).' },
        { emoji: '⚡', text: 'Stateful: O firewall se lembra de quem começou a conversa.' },
      ]
    },
    keyPoints: [
      { title: 'Tabelas e Correntes', items: ['Filter (Padrão) — Para filtrar pacotes', 'NAT — Para troca de endereços (ex. Roteador)', 'INPUT / OUTPUT / FORWARD : Principais correntes'] },
      { title: 'Sintaxe', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — Abre o SSH', 'iptables -P INPUT DROP — Tranca todo o resto'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: 'Segurança Local e Intrusão',
    comic: {
      title: 'Vigilantes Digitais 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban: Erre a senha e vá para a prisão (Bane o IP).' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter: Procura rastros de hackers que tentam se esconder.' },
        { emoji: '📜', text: 'Logwatch: Resumo diário dos logs enviado pro seu e-mail.' },
        { emoji: '🔒', text: 'Sudoers: Não dê a chave mestre a todos. Só o necessário!' },
      ]
    },
    keyPoints: [
      { title: 'Armas de Defesa', items: ['rkhunter / chkrootkit — Varredura por malware/rootkits', 'aide / tripwire — Checa se arquivos do sistema foram alterados'] },
      { title: 'Rastro de Acesso', items: ['last — Últimos logins realizados', 'faillog — Relatório de tentativas falhas'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'Segurança SSH',
    comic: {
      title: 'A fechadura reforçada 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH: Sua porta secreta para o servidor.' },
        { emoji: '🚫', text: 'Sem Senha: Use chaves (Public/Private). Muito mais seguro!' },
        { emoji: '🕵️‍♂️', text: 'Audit: Quem digitou qual comando e em que hora?' },
        { emoji: '🔒', text: 'Banner: Um aviso para desencorajar curiosos.' },
      ]
    },
    keyPoints: [
      { title: 'Hardenização SSH', items: ['PermitRootLogin no — Sem login direto de root', 'PasswordAuthentication no — Força o uso de chaves SSH', 'AllowUsers — Deixe apenas pessoas autorizadas entrar'] },
      { title: 'Gestão de Chaves', items: ['ssh-keygen — Crie seu par de chaves', 'ssh-copy-id — Mande sua chave pública pro servidor'] },
    ],
    terminal: { 
      prompt: '$ ssh-keygen -t ed25519\n$ ssh-copy-id user@server', 
      output: 'Generating public/private ed25519 key pair.\nNumber of key(s) added: 1' 
    },
  },
}
