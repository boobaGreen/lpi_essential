// LPIC-1 102 Quiz Pool — Portuguese — Topic 109 (Fundamentos de Rede)

export const lpic1_102_topic5Quizzes_pt = [
  // ─── 109.1 Fondamentais de rede (5 questões) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Qual é a porta padrão para o protocolo HTTP não criptografado ?",
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: "A porta 80 é reservada para o tráfego HTTP não criptografado."
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Qual das seguintes portas é usada por padrão pelo protocolo SSH (Secure Shell) ?",
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: "A porta 22 é o padrão para acesso remoto via SSH.",
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quantos bits são usados em um endereço IPv6 padrão ?",
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: "O IPv6 usa endereços de 128 bits, aumentando vastamente o espaço de endereçamento em relação ao IPv4 (32 bits).",
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qual protocolo é usado pelo utilitário `ping` para testar a conectividade da rede ?",
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: "O `ping` envia mensagens ICMP (Internet Control Message Protocol) do tipo Echo Request.",
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Qual protocolo é considerado 'sem conexão' e não garante a entrega de pacotes ?",
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: "O UDP (User Datagram Protocol) é sem conexão e tem menos sobrecarga que o TCP.",
  },

  // ─── 109.2 Configuração de rede persistente (5 questões) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Qual comando moderno substitui o 'ifconfig' para visualizar e configurar endereços IP de interface ?",
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: "O comando 'ip' da suíte iproute2 é o padrão moderno que substitui o ifconfig."
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "No Netplan, qual formato de arquivo é usado para escrever as configurações de rede ?",
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: "O Netplan utiliza arquivos .yaml para definir as configurações."
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é usado para exibir a tabela de roteamento atual do sistema ?",
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: "`ip route` (ou o legado `route -n`) exibe a tabela de roteamento do kernel.",
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qual utilitário do NetworkManager fornece uma interface de linha de comando para gerenciar conexões de rede ?",
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: "`nmcli` é a ferramenta de linha de comando para controlar o NetworkManager.",
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Em um sistema baseado em Debian (sem Netplan), qual arquivo é usado principalmente para configuração estática de interfaces de rede ?",
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: "O /etc/network/interfaces é o arquivo de configuração tradicional para rede no Debian.",
  },

  // ─── 109.3 Solução de problemas básicos de rede (5 questões) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Qual utilitário permite ver o caminho completo (salto a salto) percorrido pelos pacotes até um host remoto ?",
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: "O traceroute rastreia todos os roteadores intermediários atravessados pelos pacotes."
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qual comando permite ver quais processos estão escutando em portas de rede específicas (substituindo o netstat) ?",
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: "O ss (socket statistics) é o comando moderno para analisar conexões de rede."
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "O que a saída do `hostname -i` normalmente fornece ?",
    options: [
      "O tempo de atividade atual do host",
      "O endereço IP do nome do host local",
      "O status da conexão com a Internet",
      "O endereço do gateway padrão"
    ],
    correct: 1,
    explanation: "A opção `-i` com o `hostname` retorna o endereço (ou endereços) IP associado ao host.",
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Qual comando é usado para visualizar ou manipular o cache ARP (Address Resolution Protocol) ?",
    options: ['arping', 'arp', 'ip neighbor', 'Tanto arp quanto ip neighbor'],
    correct: 3,
    explanation: "O comando tradicional `arp` e o comando moderno `ip neighbor` lidam com a tabela ARP.",
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Se um servidor não consegue alcançar nenhum host fora de sua sub-rede local, qual configuração deve ser verificada primeiro ?",
    options: ["O servidor de nomes no resolv.conf", "O gateway padrão (default gateway) na tabela de roteamento", "O arquivo /etc/hosts", "O tamanho do MTU da interface"],
    correct: 1,
    explanation: "O gateway padrão é responsável por encaminhar o tráfego destinado a redes remotas.",
  },

  // ─── 109.4 Configurar o DNS do lado do cliente (5 questões) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Qual arquivo um sistema Linux consulta primeiro para resolver um nome de host para um endereço IP, antes de consultar o DNS ?",
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: "O /etc/hosts é o banco de dados estático local que normalmente tem precedência sobre o DNS."
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "O que a diretiva 'nameserver' no arquivo /etc/resolv.conf indica ?",
    options: [
      "O endereço IP do servidor de e-mail",
      "O endereço IP de um servidor DNS a ser consultado",
      "O nome do host do computador local",
      "O endereço do gateway padrão"
    ],
    correct: 1,
    explanation: "O nameserver define quais servidores DNS o cliente usará para resolução de nomes."
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qual arquivo define a ordem em que o sistema tenta resolver nomes de host (por exemplo, arquivos primeiro, depois dns) ?",
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: "O /etc/nsswitch.conf controla a ordem de busca para vários bancos de dados do sistema."
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qual utilitário de linha de comando é usado para realizar consultas DNS e solucionar problemas de resolução de nomes ?",
    options: ['dig', 'host', 'nslookup', 'Todas as anteriores'],
    correct: 3,
    explanation: "`dig`, `host` e `nslookup` são ferramentas padrão para realizar consultas DNS.",
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "O que a diretiva 'search' no /etc/resolv.conf faz ?",
    options: [
      "Pesquisa todos os servidores DNS disponíveis na sub-rede",
      "Define o nome de domínio a ser anexado a nomes de host não qualificados durante a resolução",
      "Permite pesquisar arquivos no servidor",
      "Força uma pesquisa recursiva no servidor de nomes"
    ],
    correct: 1,
    explanation: "A diretiva 'search' lista os nomes de domínio a serem tentados quando um nome de host não é fornecido com um FQDN."
  },
];
