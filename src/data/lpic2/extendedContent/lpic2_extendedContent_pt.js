export const lpic2_extendedContent_pt = {
  // Topic 200: Capacity Planning
  'lpic2-200': [
    {
      title: 'Planejamento de Capacidade e Monitoramento',
      content: 'O planejamento de capacidade é o processo de prever as necessidades futuras de recursos de TI para evitar gargalos antes que eles ocorram. Isso envolve monitorar o uso atual e projetar o crescimento futuro com base em tendências históricas e novos requisitos de negócios.',
    },
    {
      title: 'Monitoramento de Recursos com vmstat e mpstat',
      content: 'Para entender como o sistema utiliza seus recursos, usamos ferramentas como `vmstat` e `mpstat`.\n\n- **vmstat (Virtual Memory Statistics)**: Fornece informações sobre processos, memória, swap, E/S, sistema e atividade da CPU. Um `iowait` alto geralmente indica que o sistema está sendo contido pelo armazenamento.\n- **mpstat (Multiprocessor Statistics)**: Permite analisar o uso de cada núcleo da CPU individualmente. Isso é crucial para identificar se um processo mal projetado está saturando um único núcleo em um sistema multi-core.',
    },
    {
      title: 'Análise Histórica com sar',
      content: 'A ferramenta `sar` (System Activity Reporter), parte do pacote `sysstat`, é fundamental para o planejamento. Ela coleta, relata e salva informações sobre a atividade do sistema. Ao contrário das ferramentas em tempo real, o `sar` permite voltar no tempo (geralmente via arquivos em `/var/log/sysstat/`) para analisar picos de carga que ocorreram à noite ou no fim de semana.',
    },
    {
      title: 'Ferramentas de Benchmarking',
      content: 'Para saber "até onde se pode ir", use ferramentas de benchmarking:\n\n- **Iperf**: Para medir o rendimento máximo da rede entre dois hosts.\n- **IOzone**: Para testar o desempenho do sistema de arquivos e E/S de disco.\n- **Stress-ng**: Permite submeter o sistema a uma carga artificial para ver como ele se comporta sob pressão extrema.',
    },
  ],

  // Topic 201: Linux Kernel
  'lpic2-201': [
    {
      title: 'Componentes e Funcionamento do Kernel',
      content: 'O kernel Linux é o coração do sistema operacional. Ele gerencia o hardware e fornece serviços básicos para as aplicações. Os componentes principais incluem:\n\n- **vmlinuz**: A imagem compactada do kernel.\n- **initramfs**: Um sistema de arquivos temporário carregado na RAM que contém os drivers necessários para montar o sistema de arquivos raiz real.\n- **Módulos**: Pedaços de código que podem ser carregados ou descarregados do kernel dinamicamente.',
    },
    {
      title: 'Gerenciamento de Módulos',
      content: 'Os módulos permitem que o kernel permaneça leve, suportando uma vasta gama de hardware.\n\n- **lsmod**: Lista os módulos atualmente carregados.\n- **modprobe**: A forma recomendada de carregar/remover módulos, pois gerencia dependências automaticamente.\n- **insmod/rmmod**: Ferramentas de baixo nível para carregar/remover um arquivo `.ko` específico sem verificar dependências.\n- **modinfo**: Exibe informações detalhadas (autor, licença, parâmetros) de um módulo.',
    },
    {
      title: 'Compilação do Kernel',
      content: 'Compilar seu próprio kernel permite otimizá-lo para um hardware específico ou ativar funções experimentais. As etapas clássicas são:\n\n1. `make menuconfig`: Configuração interativa.\n2. `make`: Compilação do kernel e módulos.\n3. `make modules_install`: Instalação dos módulos em `/lib/modules/`.\n4. `make install`: Copia o kernel para `/boot` e atualiza o bootloader.',
    },
    {
      title: 'Alteração de Parâmetros em Execução',
      content: 'O sistema de arquivos `/proc/sys/` permite alterar dinamicamente o comportamento do kernel sem reiniciar. A ferramenta `sysctl` facilita essa gestão.\n\n- **sysctl -a**: Exibe todos os parâmetros alteráveis.\n- **sysctl -p**: Carrega os parâmetros de `/etc/sysctl.conf` para torná-los permanentes.',
    },
  ],

  // Topic 202: System Startup
  'lpic2-202': [
    {
      title: 'Personalização da Inicialização SysV-init',
      content: 'Embora o systemd seja agora o padrão, o conhecimento do SysV-init ainda faz parte do programa LPIC-2. O arquivo central é o `/etc/inittab`, que define o nível de execução (runlevel) padrão e inicia os scripts de inicialização.\n\n- **Runlevels**: 0 (Halt), 1 (Single User), 3 (Multi-User Console), 5 (Multi-User Gráfico), 6 (Reboot).',
    },
    {
      title: 'Gerenciador de Boot GRUB 2',
      content: 'O GRUB 2 é o gerenciador de boot dominante. Ele suporta tanto o BIOS tradicional quanto o UEFI.\n\n- **Configuração**: Nunca edite o `/boot/grub/grub.cfg` diretamente. Use o `/etc/default/grub` e os scripts em `/etc/grub.d/`, executando depois o `grub-mkconfig -o /boot/grub/grub.cfg`.\n- **Instalação**: Geralmente feita via `grub-install /dev/sdX`.',
    },
    {
      title: 'Recuperação do Sistema',
      content: 'Em caso de falha, várias estratégias são possíveis:\n\n1. **Parâmetros de boot**: Adicione `1`, `s` ou `init=/bin/bash` à linha de comando do kernel no GRUB.\n2. **Modo de resgate**: Boot por mídia externa (Live-CD), montar o sistema de arquivos raiz e usar `chroot` para agir como se estivesse no sistema instalado (reparar o GRUB, trocar senha perdida, etc.).',
    },
  ],

  // Topic 203: Filesystem and Devices
  'lpic2-203': [
    {
      title: 'Operação de Sistemas de Arquivos',
      content: 'O Linux suporta muitos sistemas de arquivos (ext4, XFS, Btrfs).\n\n- **Tune2fs**: Permite alterar parâmetros de sistemas ext2/3/4 (ex: intervalos de verificação).\n- **XFS**: Sistema robusto e de alto desempenho, gerenciado por ferramentas como `xfs_admin` e `xfs_growfs`.\n- **UUID/Labels**: Usar o identificador único (UUID) no `/etc/fstab` é mais seguro que nomes de dispositivos como `/dev/sda1`, que podem mudar.',
    },
    {
      title: 'Manutenção e Saúde do Armazenamento',
      content: 'A segurança dos dados é crucial.\n\n- **fsck**: Verifica e repara a integridade do sistema de arquivos. Nunca execute em uma partição montada com permissão de escrita!\n- **S.M.A.R.T.**: Protocolo embutido nos discos para automonitoramento. Use o `smartctl` para prevenir falhas de hardware.',
    },
    {
      title: 'Gerenciamento de Dispositivos com udev',
      content: 'O `udev` é o gerenciador de dispositivos que cria dinamicamente os arquivos em `/dev/`. Ele permite definir regras persistentes para que, por exemplo, uma impressora ou interface de rede receba sempre o mesmo nome ou as mesmas permissões.',
    },
  ],

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204': [
    {
      title: 'Configuração de Software RAID',
      content: 'O RAID (Redundant Array of Independent Disks) combina vários discos físicos em uma unidade lógica para performance, redundância ou ambos.\n\n- **Níveis RAID**: RAID 0 (Performance), RAID 1 (Espelhamento), RAID 5 (Paridade distribuída), RAID 6 (Dupla paridade).\n- **mdadm**: A ferramenta principal no Linux para criar (`--create`), monitorar (`--detail`) e reparar arrays RAID.',
    },
    {
      title: 'Logical Volume Manager (LVM)',
      content: 'O LVM adiciona uma camada de abstração sobre os discos físicos, permitindo uma gestão de armazenamento extremamente flexível.\n\n- **PV (Physical Volume)**: Disco físico ou partição.\n- **VG (Volume Group)**: Reunião de vários PVs em um pool comum de espaço.\n- **LV (Logical Volume)**: "Partição" lógica em um VG, redimensionável em tempo de execução.',
    },
    {
      title: 'Otimização de Armazenamento',
      content: 'Ajuste fino do desempenho:\n\n- **hdparm**: Configuração e teste de parâmetros SATA/IDE.\n- **nvme-cli**: Gestão e monitoramento de discos NVMe modernos.\n- **SSD Trim**: Essencial para manter a performance de SSDs, informando sobre blocos não utilizados.',
    },
  ],

  // Topic 205: Network Configuration
  'lpic2-205': [
    {
      title: 'Configuração de IP e Roteamento',
      content: 'A configuração de rede moderna no Linux utiliza a suíte `iproute2`.\n\n- **ip addr**: Gestão de endereços IP.\n- **ip link**: Gestão do status das interfaces.\n- **ip route**: Gestão da tabela de roteamento.\n- **Variáveis do Kernel**: `/proc/sys/net/ipv4/ip_forward` deve estar ativo (1) para que o Linux possa rotear pacotes.',
    },
    {
      title: 'Tecnologias de Rede Avançadas',
      content: 'Para necessidades específicas, usa-se Bonding ou Bridging:\n\n- **Bonding**: Agregação de várias interfaces físicas em uma lógica para banda ou redundância.\n- **Bridging**: Conecta segmentos de rede no Nível 2 (Data Link), comum em ambientes de virtualização.',
    },
    {
      title: 'Troubleshooting de Rede',
      content: 'Ferramentas de diagnóstico essenciais:\n\n- **tcpdump**: Analisador de pacotes via linha de comando.\n- **nc (netcat)**: "Canivete suíço" para testar conexões de portas.\n- **ss / netstat**: Visão de quais processos estão ouvindo em quais portas.',
    },
  ],

  // Topic 206: System Maintenance
  'lpic2-206': [
    {
      title: 'Compilar Software a partir do Código-Fonte',
      content: 'Às vezes os pacotes oficiais não bastam. O ciclo é geralmente: `tar xzf` (Extrair), `./configure` (Verificar dependências e opções), `make` (Compilar) e `sudo make install` (Instalação).',
    },
    {
      title: 'Backup e Sincronização com rsync',
      content: 'O `rsync` é a ferramenta de referência para backups, pois usa transferência delta (copia apenas as diferenças). A opção `-a` (Archive) é obrigatória para manter permissões, links e datas.',
    },
    {
      title: 'Informação aos Usuários',
      content: 'Como administrador, você deve comunicar manutenções:\n\n- **/etc/motd**: Mensagem após o login.\n- **/etc/issue**: Mensagem antes do login em terminais locais.\n- **wall**: Mensagem imediata em todos os terminais abertos.',
    },
  ],

  // Topic 207: Domain Name Server
  'lpic2-207': [
    {
      title: 'Servidor DNS BIND9',
      content: 'O BIND (Berkeley Internet Name Domain) é o servidor DNS mais usado no mundo. Ele age como Caching-only, Forwarder ou servidor autoritativo.\n\n- **named.conf**: Arquivo principal de configuração.',
    },
    {
      title: 'Zonas e Registros',
      content: 'Domínios são divididos em zonas (Direta/Reversa).\n\n- **A (Address)**: Nome -> IPv4.\n- **AAAA**: Nome -> IPv6.\n- **MX (Mail Exchange)**: Servidor de e-mail do domínio.\n- **CNAME (Canonical Name)**: Alias para um nome existente.',
    },
    {
      title: 'Segurança e DNSSEC',
      content: 'O DNS clássico é vulnerável a cache-poisoning. O DNSSEC assina registros digitalmente para garantir sua autenticidade.',
    },
  ],

  // Topic 208: Web Services
  'lpic2-208': [
    {
      title: 'Servidor Web Apache',
      content: 'O Apache HTTP Server é robusto e modular. Suporta VirtualHosts para hospedar vários domínios num único IP.',
    },
    {
      title: 'Nginx e Proxy Reverso',
      content: 'O Nginx é conhecido por sua performance com baixo consumo de recursos. Ideal para arquivos estáticos e como Proxy Reverso (Load Balancer).',
    },
    {
      title: 'HTTPS com SSL/TLS',
      content: 'Criptografia web é obrigatória. `OpenSSL` gera certificados. `Let\'s Encrypt` oferece certificados automatizados gratuitos.',
    },
  ],

  // Topic 209: File Sharing
  'lpic2-209': [
    {
      title: 'Samba: Linux na rede Windows',
      content: 'O Samba permite interoperabilidade via protocolo SMB/CIFS. Age como servidor de arquivos, impressão ou Domain Controller (Active Directory).',
    },
    {
      title: 'NFS: Compartilhamento Nativo Unix/Linux',
      content: 'O NFS (Network File System) é o padrão para compartilhamento Unix. Pastas remotas são montadas transparentemente na árvore local.',
    },
  ],

  // Topic 210: Network Client Management
  'lpic2-210': [
    {
      title: 'DHCP: Configuração Automática',
      content: 'O DHCP automatiza a atribuição de IP, Gateway e DNS. O `isc-dhcp-server` é a referência no Linux.',
    },
    {
      title: 'PAM: Autenticação Modular',
      content: 'O PAM (Pluggable Authentication Modules) centraliza a verificação de identidade. Métodos (Senha, LDAP) podem ser trocados sem alterar as aplicações.',
    },
    {
      title: 'LDAP: Diretório Centralizado',
      content: 'O LDAP armazena usuários, grupos e recursos centralmente, simplificando a gestão de acessos em grandes empresas.',
    },
  ],

  // Topic 211: E-Mail Services
  'lpic2-211': [
    {
      title: 'Servidor de E-mail Postfix',
      content: 'O Postfix é um MTA (Mail Transfer Agent) focado em velocidade e segurança. Gerencia o envio de e-mails via SMTP.',
    },
    {
      title: 'Entrega e Acesso: Dovecot',
      content: 'Enquanto o Postfix transporta, o Dovecot permite o acesso via IMAP/POP3 e gerencia o armazenamento (Maildir/mbox).',
    },
  ],

  // Topic 212: System Security
  'lpic2-212': [
    {
      title: 'Segurança com iptables',
      content: 'O `iptables` (e `nftables`) configura o Netfilter no kernel. Regras de filtragem baseiam-se em IP de Origem/Destino, Porta e Protocolo.',
    },
    {
      title: 'Detecção de Intrusão e Auditoria',
      content: 'Segurança além do firewall: `Fail2Ban` bane IPs suspeitos, `rkhunter` busca por rootkits.',
    },
    {
      title: 'Harding de SSH',
      content: 'O SSH é a porta principal. Desative o login de root, use portas não padrão e prefira a autenticação por chave pública.',
    },
  ],
}
