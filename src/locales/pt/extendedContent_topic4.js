export const topic4Extended = {
  "4-1": {
    "title": "Escolhendo um sistema operacional",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Categorias de sistema operacional"
      },
      {
        "type": "paragraph",
        "text": "A escolha do sistema operacional depende do caso de uso. O Linux oferece soluções para todos os cenários, desde estações de trabalho desktop até data centers corporativos, desde dispositivos IoT até a nuvem."
      },
      {
        "type": "table",
        "headers": [
          "Categoria",
          "Características",
          "Distribuições típicas",
          "Exemplo de uso"
        ],
        "rows": [
          [
            "Áreas de trabalho",
            "GUI, multimídia, produtividade",
            "Ubuntu, Mint, Fedora",
            "Escritório, desenvolvimento, uso pessoal"
          ],
          [
            "Servidor",
            "Sem cabeça, serviços 24 horas por dia, 7 dias por semana, estabilidade",
            "RHEL, Servidor Ubuntu, Debian",
            "Servidor web, banco de dados, e-mail"
          ],
          [
            "Empresa",
            "Suporte LTS, certificações, SLA",
            "RHEL, SLES",
            "Bancos, hospitais, governos"
          ],
          [
            "Integrado",
            "Leve, específico, em tempo real",
            "Yocto, Buildroot, Android",
            "Roteadores, IoT, automotivo"
          ],
          [
            "Contêineres/Nuvem",
            "Mínimo, imutável",
            "Alpino, CoreOS, Flatcar",
            "Microsserviços, Kubernetes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "☁️",
        "text": "Computação em nuvem e Linux"
      },
      {
        "type": "paragraph",
        "text": "A computação em nuvem é o fornecimento sob demanda de recursos de TI em uma rede. O Linux domina a nuvem: mais de 90% das cargas de trabalho públicas são executadas em kernels Linux."
      },
      {
        "type": "table",
        "headers": [
          "Modelo",
          "Você gerencia",
          "O provedor gerencia",
          "Exemplo"
        ],
        "rows": [
          [
            "IaaS",
            "SO, aplicativos, dados",
            "Hardware, rede, armazenamento",
            "AWS EC2, VM do Azure"
          ],
          [
            "PaaS",
            "Aplicativos, dados",
            "SO, tempo de execução, middleware",
            "Heroku, Google App Engine"
          ],
          [
            "SaaS",
            "Apenas os dados",
            "Todo o resto",
            "Gmail, Salesforce, Office 365"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏗️",
        "text": "Virtualização e contêineres"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🖥️ Máquina Virtual",
          "items": [
            "Emular um computador inteiro",
            "Possui seu próprio sistema operacional kernel",
            "Isolamento completo",
            "Pesado (GB RAM)",
            "Inicialize em minutos",
            "Hipervisor: KVM, VMware, VirtualBox"
          ]
        },
        "right": {
          "title": "📦 Recipientes",
          "items": [
            "Compartilha o kernel do host",
            "Somente bibliotecas de aplicativos",
            "Isolamento de nível de processo",
            "Leve (MB RAM)",
            "Comece em segundos",
            "Tempos de execução: Docker, Podman, containerd"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pede que você distinga entre IaaS, PaaS e SaaS, e entre virtualização (VM com hipervisor) e conteinerização (Docker). Você também conhece o KVM como hipervisor Linux nativo."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Caminho de Certificação LPI"
      },
      {
        "type": "diagram",
        "title": "Caminho de Certificação",
        "boxes": [
          {
            "label": "Linux Essentials",
            "color": "#10b981",
            "children": [
              "Esame 010-160",
              "1 solo esame",
              "Nessun prerequisito"
            ]
          },
          {
            "label": "LPIC-1",
            "color": "#3b82f6",
            "children": [
              "Esami 101 + 102",
              "Sysadmin base",
              "5 anni validità"
            ]
          },
          {
            "label": "LPIC-2",
            "color": "#f59e0b",
            "children": [
              "Esami 201 + 202",
              "Sysadmin avanzato",
              "Richiede LPIC-1"
            ]
          },
          {
            "label": "LPIC-3",
            "color": "#ef4444",
            "children": [
              "Specialità: Security/Virt/HA",
              "Livello enterprise",
              "Richiede LPIC-2"
            ]
          }
        ]
      }
    ]
  },
  "4-2": {
    "title": "Hardware de computador",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧠",
        "text": "Componentes de hardware e comandos Linux"
      },
      {
        "type": "paragraph",
        "text": "O Linux vê todo o hardware através de arquivos virtuais em /proc e /sys. Cada componente possui comandos dedicados para consultá-lo."
      },
      {
        "type": "table",
        "headers": [
          "Componente",
          "Comando",
          "Arquivo virtual",
          "Informações mostradas"
        ],
        "rows": [
          [
            "CPU",
            "lscpu",
            "/proc/cpuinfo",
            "Modelo, núcleo, velocidade, cache"
          ],
          [
            "BATER",
            "grátis -h",
            "/proc/meminfo",
            "Total, usado, grátis, troca"
          ],
          [
            "Discos",
            "lsblk",
            "/proc/partições",
            "Dispositivos, partições, montagens"
          ],
          [
            "Espaço em disco",
            "df-h",
            "/proc/montagens",
            "Espaço usado/livre para sistema de arquivos"
          ],
          [
            "Dir. dimensão",
            "du -sh diretório/",
            "-",
            "Espaço ocupado pelo diretório"
          ],
          [
            "PCI",
            "lspci",
            "/proc/bus/pci",
            "Placas de vídeo, rede, controladores"
          ],
          [
            "USB",
            "lsusb",
            "/proc/ônibus/usb",
            "Dispositivos USB conectados"
          ],
          [
            "Núcleo",
            "sem nome -a",
            "/proc/versão",
            "Versão e arquitetura do kernel"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💽",
        "text": "Armazenamento: HDD vs SSD vs NVMe"
      },
      {
        "type": "table",
        "headers": [
          "Tipo",
          "Tecnologia",
          "Velocidade de leitura",
          "Latência",
          "Preço/GB",
          "Duração"
        ],
        "rows": [
          [
            "Disco rígido",
            "Placas magnéticas rotativas",
            "100-200MB/s",
            "5-10ms",
            "0,02€",
            "Mecânico (desgaste)"
          ],
          [
            "SSD SATA",
            "Flash NAND, barramento SATA",
            "500-550MB/s",
            "0,1ms",
            "0,08€",
            "Eletrônico (ciclos de escrita)"
          ],
          [
            "NVMe",
            "Flash NAND, barramento PCIe",
            "3-7 GB/s",
            "0,02ms",
            "0,10€",
            "Eletrônico (mais rápido)"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "RAID — Matriz Redundante de Discos Independentes"
      },
      {
        "type": "paragraph",
        "text": "O RAID combina vários discos físicos para obter redundância (proteção de dados) e/ou desempenho."
      },
      {
        "type": "table",
        "headers": [
          "Nível",
          "Técnica",
          "Min. discos",
          "Redundância",
          "Desempenho",
          "Capacidade útil"
        ],
        "rows": [
          [
            "RAID 0",
            "Striping",
            "2",
            "❌ Nenhum",
            "⚡ Leitura/escrita rápida",
            "100%"
          ],
          [
            "RAID 1",
            "Espelhamento",
            "2",
            "✅ 1 disco",
            "⚡ Leitura rápida",
            "50%"
          ],
          [
            "RAID 5",
            "Striping + paridade",
            "3",
            "✅ 1 disco",
            "⚡ Leitura rápida",
            "(N-1)/Não"
          ],
          [
            "RAID 6",
            "Listras + 2 gravatas",
            "4",
            "✅ 2 discos",
            "⚡ Leitura rápida",
            "(N-2)/N"
          ],
          [
            "RAID 10",
            "Espelho + Listra",
            "4",
            "✅ 1 por espelho",
            "⚡⚡ Altos",
            "50%"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "RAID NÃO é backup!",
        "content": "O RAID protege contra falhas de hardware dos discos, mas NÃO é um backup! Se você excluir um arquivo, ele será excluído de todos os discos RAID. Backup é uma cópia separada dos seus dados."
      }
    ]
  },
  "4-3": {
    "title": "Kernel, Processos e Logs",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎯",
        "text": "O Kernel Linux"
      },
      {
        "type": "paragraph",
        "text": "O kernel é o coração do sistema operacional. Gerencia CPU, memória, E/S, rede e dispositivos. O kernel Linux é monolítico, mas modular: você pode carregar/descarregar módulos sem reinicializar."
      },
      {
        "type": "diagram",
        "title": "Sequência de inicialização",
        "boxes": [
          {
            "label": "1. BIOS/UEFI",
            "color": "#ef4444",
            "children": [
              "POST hardware",
              "Cerca bootloader"
            ]
          },
          {
            "label": "2. GRUB",
            "color": "#f59e0b",
            "children": [
              "Menu di boot",
              "Carica kernel"
            ]
          },
          {
            "label": "3. Kernel",
            "color": "#10b981",
            "children": [
              "Inizializza hardware",
              "Monta root filesystem"
            ]
          },
          {
            "label": "4. systemd (PID 1)",
            "color": "#3b82f6",
            "children": [
              "Avvia servizi",
              "Target multi-user"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚙️",
        "text": "Gestão de Processos"
      },
      {
        "type": "table",
        "headers": [
          "Comando",
          "Função",
          "Uso típico"
        ],
        "rows": [
          [
            "ps aux",
            "Liste todos os processos",
            "Visão geral dos processos em execução"
          ],
          [
            "topo / htop",
            "Monitoramento em tempo real",
            "Consulte CPU/RAM em tempo real"
          ],
          [
            "matar PID",
            "Enviar sinal para processar",
            "Encerre um processo educadamente"
          ],
          [
            "matar -9 PID",
            "Forçar rescisão (SIGKILL)",
            "Processo bloqueado e sem resposta"
          ],
          [
            "bg/fg",
            "Plano de fundo/primeiro plano",
            "Mover processos entre bg e fg"
          ],
          [
            "empregos",
            "Lista de processos em segundo plano",
            "Veja o que está sendo executado em segundo plano"
          ],
          [
            "nohup cmd &",
            "O processo sobrevive ao logout",
            "Comandos que devem continuar"
          ],
          [
            "nome do pgrep",
            "Encontre PID por nome",
            "Procure processos específicos"
          ],
          [
            "nome da matança",
            "Terminar pelo nome",
            "Mate por nome em vez de PID"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "👻",
        "text": "Sinais Unix"
      },
      {
        "type": "table",
        "headers": [
          "Sinal",
          "Número",
          "Ação",
          "Interceptável?"
        ],
        "rows": [
          [
            "SIGTERM",
            "15",
            "Encerrar (educado, limpeza)",
            "✅ Sim"
          ],
          [
            "SIGKILL",
            "9",
            "Fim (forçado, imediato)",
            "❌ Não"
          ],
          [
            "SIGHUP",
            "1",
            "Configuração de desligar/recarregar",
            "✅ Sim"
          ],
          [
            "SIGINT",
            "2",
            "Interromper (Ctrl+C)",
            "✅ Sim"
          ],
          [
            "SIGSTOP",
            "19",
            "Suspender o processo",
            "❌ Não"
          ],
          [
            "SIGCONT",
            "18",
            "Retomar o processo suspenso",
            "✅ Sim"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pergunta a diferença entre SIGTERM (15, interceptável) e SIGKILL (9, não interceptável). Sempre use SIGTERM antes de SIGKILL."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Registros do sistema"
      },
      {
        "type": "table",
        "headers": [
          "Arquivo/Comando",
          "Contente",
          "Formatar"
        ],
        "rows": [
          [
            "/var/log/syslog",
            "Registro geral do sistema",
            "Texto (rsyslog)"
          ],
          [
            "/var/log/auth.log",
            "Login, sudo, autenticação",
            "Texto"
          ],
          [
            "/var/log/kern.log",
            "Mensagens do kernel",
            "Texto"
          ],
          [
            "/var/log/dmesg",
            "Inicialização e hardware",
            "Kernel de buffer de anel"
          ],
          [
            "jornalctl",
            "Todos os logs (diário do systemd)",
            "Binário (sistema)"
          ],
          [
            "jornalctl -u nginx",
            "Log de um serviço específico",
            "Filtrado por unidade"
          ],
          [
            "diárioctl -f",
            "Acompanhe os registros em tempo real",
            "Como cauda -f"
          ]
        ]
      }
    ]
  },
  "4-4": {
    "title": "Rede",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📡",
        "text": "Conceitos Fundamentais de Rede"
      },
      {
        "type": "paragraph",
        "text": "Cada dispositivo da rede precisa de um endereço IP, uma máscara de sub-rede (para definir a rede local), um gateway (para sair da rede) e um servidor DNS (para traduzir nomes em IPs)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "IPv4 — Endereços e sub-redes"
      },
      {
        "type": "paragraph",
        "text": "IPv4 usa endereços de 32 bits, representados como 4 grupos decimais de 0 a 255 (por exemplo, 192.168.1.100)."
      },
      {
        "type": "table",
        "headers": [
          "Faixa",
          "Tipo",
          "Aula",
          "Rede/Host"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "Privado",
            "PARA",
            "16 milhões de endereços"
          ],
          [
            "172.16.0.0/12",
            "Privado",
            "B",
            "1 milhão de endereços"
          ],
          [
            "192.168.0.0/16",
            "Privado",
            "C",
            "65 mil endereços"
          ],
          [
            "127.0.0.0/8",
            "Loopbacks",
            "-",
            "localhost (a própria máquina)"
          ],
          [
            "0.0.0.0",
            "Rota padrão",
            "-",
            "Todos os endereços não especificados"
          ],
          [
            "255.255.255.255",
            "Transmissão",
            "-",
            "Todos na rede local"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Notação CIDR",
        "content": "/24 significa que os primeiros 24 bits são a parte \"rede\" e os últimos 8 bits são a parte \"host\". 192.168.1.0/24 = rede de 192.168.1.0 a 192.168.1.255 (256 endereços, 254 utilizáveis)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "IPv6"
      },
      {
        "type": "paragraph",
        "text": "IPv6 usa endereços de 128 bits, escritos em hexadecimal (por exemplo, 2001:0db8:85a3::8a2e:0370:7334). Corrige o problema de esgotamento do IPv4 (4 bilhões de endereços versus 340 undecilhões)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "DNS e portas"
      },
      {
        "type": "table",
        "headers": [
          "Traz",
          "Protocolo",
          "Serviço",
          "Descrição"
        ],
        "rows": [
          [
            "20/21",
            "TCP",
            "FTP",
            "Protocolo de transferência de arquivos"
          ],
          [
            "22",
            "TCP",
            "SSH",
            "Acesso remoto seguro"
          ],
          [
            "23",
            "TCP",
            "Telnet",
            "Acesso remoto NÃO seguro"
          ],
          [
            "25",
            "TCP",
            "SMTP",
            "eu mando e-mail"
          ],
          [
            "53",
            "TCP/UDP",
            "DNS",
            "Tradução de nome → IP"
          ],
          [
            "80",
            "TCP",
            "HTTP",
            "Web não criptografada"
          ],
          [
            "110",
            "TCP",
            "POP3",
            "Recepção de e-mail"
          ],
          [
            "143",
            "TCP",
            "IMAP",
            "Gerenciamento remoto de e-mail"
          ],
          [
            "443",
            "TCP",
            "HTTPS",
            "Web criptografada (TLS)"
          ],
          [
            "3306",
            "TCP",
            "MySQL",
            "Bancos de dados MySQL/MariaDB"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Comandos de rede"
      },
      {
        "type": "code",
        "title": "Comandos de diagnóstico de rede",
        "prompt": "#Mostra endereços IP de interfaces\n$ exibição de endereço IP\n\n#Mostra a tabela de roteamento\n$ip exibição de rota\n\n# Testar conectividade\n$ping -c 4 google.com\n\n# Rastreie o caminho dos pacotes\n$ traceroute google.com\n\n#Mostra portas de escuta\n$ss-tuln\n\n# consultas DNS\n$ cavar google.com\n$nslookup google.com\n\n#Mostra configuração de DNS\n$ cat /etc/resolv.conf",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Arquivo",
          "Função"
        ],
        "rows": [
          [
            "/etc/hosts",
            "Nome do mapeamento estático → IP (prioridade sobre DNS)"
          ],
          [
            "/etc/resolv.conf",
            "Servidor DNS do sistema (servidor de nomes 8.8.8.8)"
          ],
          [
            "/etc/nome do host",
            "Nome do host da máquina"
          ],
          [
            "/etc/nsswitch.conf",
            "Ordem de resolução de nomes (arquivos → DNS)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pede portas padrão (22=SSH, 80=HTTP, 443=HTTPS, 53=DNS) e arquivos de configuração de rede (/etc/resolv.conf, /etc/hosts). Saiba também a diferença entre IPv4 (32 bits) e IPv6 (128 bits)."
      }
    ]
  }
};
